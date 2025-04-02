/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5aX2yEUhqsVwGGUU54PeurfzaAfF5dJCnNeRiTAtVPqRuCgbRjoUwVubtNuDDJqiudsvgxVE9CNqNNQAL3jfoU7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fGTVD7ymbYBWz8LMbNc2JPUtdJHMcPWqbf3A99qa68sKJ4K1DrWLAVqCRwjNshuu86eUT4MdMH8Z9Db6xpUhAFF",
  "key1": "5CLAbU5nMFnnVg5ZDnF946GkMEqxwFLwJcuTMK8B6rdM114N3JvwKPwMEbdK789xkSA3E4QMNLxx9CaoN6P9h1Gd",
  "key2": "3ZasFCoEvMeTsrQaYMj4VFbRZ71xQXjDJRcCdZH1moqP6RVeHRkhWQP8MRnMhGUzUzsUxW9XA5tDwWpNvpzoG4b3",
  "key3": "5aQySYArJpANjmdJJY19Npnpqh5rwYEYiACMEZJY8oFXVCbnqx6pcY1SNB9oruLkU7tvKoqDAccZWPYyHFbWQdjM",
  "key4": "4TvphWQPU7grTeBtvLuLzWRgBR6C3tqbWDiz8LwrxcsWU558wWrSDmQMjWV4ATbYPWq5ySFYUCwBqfkGVXmM6Gpi",
  "key5": "2vD9PC4rLF5Vt4PHzqBWzFnYcVyATPG3U9BSaDKee6jZwLW6HPE9LXnhPDcFZZL4pj49vzHXWNV8VFU69CyGfkX9",
  "key6": "49jgqNRzz1ypDvuEM6GQCngJ7MKNjPVFdrzG1JEy7W7eePagcoqKFWtDw8gGWkPE8JWb9fxbnpHYXssykxLDJcxE",
  "key7": "q5wCzfNpRucwWCxc8aZhvq6dTV2LMs2ZpJLXPd9yEzBRyhDboFEBb4opexUQMjHzMZ8czEU6sfTHrj9hB7DQJXU",
  "key8": "4RqzSi2FtxZ5okdqML82a9F6berF5TWDz9u8XtW9WMjanEUyJn8ENiRyfyq82pkuihE8ucG7sds5MEviERkp88uk",
  "key9": "1Zc6zNiXicKaLvL9zWA6XMmMGjebBaEVQrsvZVSHUbvYhgFhVPaeAahzZPoFtJgGjAfupwqF16sGSndnBxiFYcr",
  "key10": "33rZAFiEQWsQApoHzcNfM168Hw96x4RF94ArncVpkKeKg1qzqt5BGifUfKF6SW3rEL3gACJWovUzdmCE5zMGFPSr",
  "key11": "42pJQ4eDZHd15HenhAz3w3PvoJ5aNGv7YiP289uAimw9LmNmTmsZUamYevNTWkrpXoKYTqKkgtKLyuQzrhP423A3",
  "key12": "5nx3pT2o9AYCoPGQPb7BhvpyCxppTJn93A84LNWpajDtTyqcWj9MoLbBv77agVwpmPwEQNi41f3ZmjYwYvGAVBLx",
  "key13": "2jWxua6zbCiKXxToFD2yvEH4YNmo5AS3KaxuGthdiVszk9YykpkXWEUF4YQ7sV5LK2Q6igxQekB4Bdjf5fPDqW8G",
  "key14": "SboCtVRW2BAgWQZoFbJWrjtaVW6rUx1BuL9uxjsp9TGLPRsLYM99JFxQodS3aHVZup7uS91pkedUCa6m8kayL9t",
  "key15": "JsvkrGpRPSQrqBkE9ig6jHio2AaXCaVrqzgTX5d1wPLgW97C8176SSAjGP3KgrXxCu2Hzx2RChLftuFMadDVNxV",
  "key16": "ewbiHScSur7DdanfFsg8YkXB4WP8NQ2QrrULncmL6zabby4GDbAsXHMLVCsdhoAerquGVeicvcTQwq1tRY9A7wv",
  "key17": "2RbDioGJW9gWLZ7pkzA49KBaUE4ksuoYWJMBRsT4KqufEJ5MiADxdEdNd7w87rGimMAo1mqRK2JBD2knsT4ewtqJ",
  "key18": "43T8pDSDY3jvxxAh4DHbFjUhtVz5538bKXRjqR5BBhWpnJGKMmcVhpNdQVFC7mVerfNH4RLEufCjAza5sQcyYzj3",
  "key19": "3GUzQGK8Lpkctk9scSDWkvjebuEtxDhjhmnQw2LxRk6xuXiPhH9Bcp9WYvmENYbh7dyEsNCn6q4G7a8qhjEWuCkf",
  "key20": "37F8HAtx4uJcwbDkezdnXPDAqSctgKw7Qxi8Y3EiWP3iUmCmdEnwCZq6M7oXTYxDtf3aDj7hJoVHEqU4BfNkJwgE",
  "key21": "4sygsLe6omVhfvCkJhZ8jbk6WTKuLXW7SHbfKtKYyotoGXmK8JvGdTxiuWSALK2QhVcuyTHHYBXT8JKtmptkU8Ug",
  "key22": "5aEqnxRBU5FyNM7QnxBML6EmRxAGnhcqXmW27oxbMYg7P3n2hyWY6H4rTZDhJfQ2B6UZNNbppzQPNgHscjpQAXPo",
  "key23": "2L9Up9tHM3r6fnp67RCdcq6ccKQVR5KvAbDiyC7D8yPQsiYKMqfb8wbEB9QsmDxRzUhS1Zv3mAM2am7sXFzvVJnK",
  "key24": "2wbF9SHNc29RS244K2ezmtp5f4sjGpM3W4EUraNkFjM5FfU1b5vXkGYEfLti7Wq58RU4yPGXKY573M3BgKtCpunU",
  "key25": "5Zr51nAKQv9xSaWS1uwS9aWrXmTYsvoSYr2ABcDTZT4zh16WM7zWDRouQhRKBX53UVyM3fmi1FFxbHFQsUzuoSpp",
  "key26": "ZkiiWREdKGgJCYUwVDPkbXJm7g9CHfiW67FWQz5RZtvZ6a57izhBaPz1tLZ2S5ekAxiegat1DDPQDoQEEjSiunZ",
  "key27": "T96KtjHMwiTK9pehAvNu5TRNscSYcGR5627myKxSm7SEHdP5dHYhkbK2Ub8ckXBFsCtsS7rmLqDGSWXrdSzoE53",
  "key28": "45MUwi564TxYqsPY2YazdDwrGddtccHsr9Vsvez83iuCUuabXUUCRHtnvEenHKUhtkeCPiETLKNEGa6fVrMfixhH",
  "key29": "32tQGNZr3d7EKN2CjoJxfddFg9aSobkVbLCjCzgD3bqmYBXPDdPYvJCNvhEAxJwh9WKQ2bgVdYpPVogQyYN8YkRy",
  "key30": "65SyqzTUJGj8Tu31gtkrTHTFYJemeYPyVnbG2aQrKYg6LTtBe79Cf8XjPfPDYbNYsxbznbfHonGfkZPtt2yGrd7Y",
  "key31": "31FPEHtBGKzvWYQk5wuLeyutDjdsGfxYFoc6b92qFixpuKDrXc7b3DKpCQ3ZM3vyjPioBK93GvpeaYBYVXZzzJGG",
  "key32": "2nUF8g2N89mwqVARNFEPiEacaVLex3SQ8Fu2QPWnPiN1eSjVtTSWcaqAAtkarTGzytWvgAFowcergijPLWMuhBc4",
  "key33": "2qgfuyYZhkMkFuxySTgYY4pos5qE4aW96xK3V6wJbapa4hiVX2GRd8jdZkKtGLq4c7bzcWcrdh9aQgxpoC39XypU",
  "key34": "NiKT8N92R6fTGgEjxS1v5cW1XYAKiCWgXMh4iKKfEeM76qrXLXWCvSzGX21PaQCHAUT2j8PY5KrJqD5ogdWbSF9",
  "key35": "4tyZLcXEuSx9g3bNt5mAUbkY547BbA9eA5TRLP83GvxpDNridmdeLh2PHLHfKFcaZ5EfmyjSp4nDEwWAKMn32kGT",
  "key36": "5SgJ6H1KBJowx2En8w6SHFs3CmDQaj7cEsTXMaNVqBFzj6ztJzpg2mpjLivkcHLKL1M23UT1ENVDfwjSP4eNMZ2G",
  "key37": "YKBE4CtpyqthDXNTRWib5CVvYiTZoUFHNdPrazWatsvGF7ECJdgBoJswhkDG85nNTBPR2VprtFwxb6xkpwowSqm"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
