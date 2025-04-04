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
    "2xMMd65iV5MwufxH6j4haXYRFENWnMFu6D9vgbWVbnA1VoQdjjbH5anZMcoLERguEenjQVqVF9LE4b6K1nrb7X3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WEtr84jhUCn2vgQFnxcfru2ZB6eygGrxKsAvKXcJCaHxzVvLKDfgtFQLVwZdzUo9crNqCH1QfgZpAnerDAVvz7d",
  "key1": "4rtzkqULkeydCa44kHwE7n2kcaicxSAGbPQyPxNLEkuQ13r1su8KmHBehT3cpnndGCwiL9bHrHL2b8RcZc34twfm",
  "key2": "4mCw6tkfjDEPskxNwPbNG5LbhK4rwFU5Hm9BcAecEJ6pVaQwiBWg6xW5ZzetZK3mUHsw8pZv5r4AkHxJZTH9dRpE",
  "key3": "T5M4U9LgXAyasSdUoR9A89PcUoe5pnJsAZPGojcem4jJpPU42RT21Cd82QPySHvKrrTyTk7Jpmn3uMUM4gjkyHf",
  "key4": "msKKpbmfJa8eVxoruMq1D2yNJJ8xwJjrnqhsVkaC4RZkREZhh7A4xKxn1Gx1yBYgpYzy3Zwa3Lhd9adjf5fXSiC",
  "key5": "4ydM3Xt118PJQT9aXgnZdJ3bFCD35Jhu9eE4ARQ1tHcSkqeLEJ4RGXpis88p84T78iwLo5PSSs6tgHXV5aGMuWWh",
  "key6": "2tJVAC39vvj2WYcbYbhRmzJwn7VW5VJNb4SFk4R1npuhFhcJDzkb9V1EY1q8cTyuyZaXsXuYYGgYUTxcV5hMEJCh",
  "key7": "59owJSaddLUfuQQ3M2h9r16PKjEsDNQfroL1AHneG7vqPx3PfebNGfY5MNwDxq3xTqptGMT1JRK3uPHZx6R1kcfr",
  "key8": "4w3xsnv8A3CWKdFkxddksB5ADjdy5cBknzXqFKAASHNgoBoftQq1wV5iCPUm9gfd9bWaq94jViSrwDDWGLPdpc6Y",
  "key9": "4VMHNbqqHba7uERnBCCxDgLMnXhXNiZ1Dg6ynZ2YUKFVT1HXT2jRkJESiVyiS2Hg1GvV29XJ1D3xNPrr5at4MWmr",
  "key10": "5bMDSe8Ug77pNbZ4cNp5qDrDAZELwpB5LopPiUbZ3c8TqhXiHpY5fY61CT5d9QKamZ7BLQBrwT36Ctpu3DFenJJs",
  "key11": "4Lr1fAmemj226MEBXYC5FAyFvN9vH4NRXrFqWLcLraU3XomeUQPQjbi5dafmqeFptMXaxAphi4SBvy1rSFdyvXjx",
  "key12": "3MS9oSxEqDiQhNMKDBWNjkMwKKMwJ22ysN4JLpTtw1zP3NUpXNPxXztfdzjSJnRLRdUExbWX9oSWmFULZknwCuFW",
  "key13": "5xSQP2P1HHfqQGRzmtfDCcejdc25ZE4Cgus6WfGX5wyWQbja9mjG6YrwGKCKTbuRWJPo5ud1LBnEgttSJ5ZVuzYT",
  "key14": "2vzh9F7AVzdV7NFe1HEYpWdrYgPpQTg1RkC9nn6PHZmL3xYHM29T6cvsic2cvcxuLeyn3gUaL2Ldfc9M1AxX4X9x",
  "key15": "5NvveTYafdCPfcCuY4Z6naVRoanKmeGDer9vjeqVSFH7aEytj6pS9CywS1WhCP9njraZEN3S8hgd4ea1q5nP1ZTT",
  "key16": "2DrehTASxUuHX2nT3njxiiGMgV4taVj58PZHgoEJjwJpzkmCc7Jz3K7et6hQXwe4hVg67ySYaws57JPy7oJWjLxg",
  "key17": "gy7VnVBs6B8gsYG9YzoXMpqKv7PjqNwz4Fb7yGHFaXp9eRJfcxho6Va5o1SCLkwwrZQohnkkxMGB8juSQSAbpr9",
  "key18": "XXRioGKDX6rcDKUGQD43jRjSYDQfeX7Nmyw3xs1uFc4grtToeEd8SzGKoYorNt2kph8a23Xa86ppf4brnD6MzGX",
  "key19": "C1KX3gQQGYcPiNkMQsBHWUkNpjPnf9XsUs9T9L3N4LMQkkYSD2g7VWC2RKmPWMRCGHA37MVLep1i9HUipN8QKM7",
  "key20": "2CQKHobQnySTvA3Z1EXSRkz1ubUPaxyq41h7nPZ8CaoaTDzBwyz2HsmaVwBxqZJsm8DpzuSVFtfohQNv123xybxo",
  "key21": "KndKyjJL17Pbhsnh7H5nicrLAhFi6yv3D6vHsk8RmFo3MrZyNVyziKDkBMa45NhPvwLLf6vGkkwBDhh5ZxtoV3n",
  "key22": "2HS2aCF1n8yqHt1WfsX7DtVwDYP8XwgmECLcDbYDhPac7nV8egebAVWmVVzRPwBJ3k4s1Da9Qi9aVLGaJPrfABjZ",
  "key23": "53pwffevQWEP97bRroEgbkxba9phgMWugca3ejD3mwNMHE95yJRyNZksHrRi43odMTHxx4oSpNTgj8v5Soopv3YE",
  "key24": "3U79NYeW9DuzrbCsYv5FUZp4yMNug4DQEpgnQK7VPRE9Gvy5tYbojfgvLuewj3tB5JLDYdkaaMH3Hd5wtwjmzwiD",
  "key25": "5HJ6hSmsp9he2i6WYANyZDLebDM2Pq9TN8UZroNprzegJXrSbekQVrK4HgGTN1YuAbiszS9neXqL72QmpasJdL7L",
  "key26": "33rMeZd6TTDMeYuGMq2HzHptJyx5heZub65uUaVTegDGujC6tnxzFyYULvvLaf9HSsYNN6rZox2a8WedP5q41G9V",
  "key27": "3kaWCA6S9Ah5pKn1YxjQKT1PxJxPbse93YgsHVo23fHBsY8Fxi6XutQsCS9Uy2cPi3rhpAH7WZ6opAcJMVduukDB",
  "key28": "QU2hBPVtraCSozurzxV4N5bSshuTbGhgEzxdX4z3iyPMvu8ASnaRyEsSxYphmg3YcCfVUEwYJJV5csirSfGsybW",
  "key29": "5uKMRbGMrC8u5gyVKAA9jFPqWSYuQHsVyf4gazsMNyZQ6zVpdVVh6wwz4dQZ5dNwDNFUnTZe4KosoSohTiyGxC9o",
  "key30": "4a8VmQXwmrxuUssxhrHvawNWFRGSVLCMVKrgp4qHL28qpy6C2wBTXtVXZcB7Znrbho24Ctq4c7hH6QJffzBSKLSP",
  "key31": "36iuAMRSHQLpDjbqThzczjZRmNww6HRpz5HZcfP3WFsfo8Co69xsHiKdY7gi6NVYFLTbHsTBzFHGvzZfJwK1b9mA",
  "key32": "ATtQMFaxZ58PdbcbfhJUjAxV9VDWRgrTFay2Sw7huHt7Lap9i8gpYS6qdnpSH7m33oTMEERpu1TY69MJ7dMghjH",
  "key33": "2xAyoVH9VT7SNfjzvU1YSTFz7vMdivpyJSTy2NgeRMEbjgDSBpqA9uLW4qqWhGmoAnacnTbHSFMgEogDoDRi2Ecu",
  "key34": "3drNcDXBd5EiCgnQK2ABi57UuNf6S9J2Shv8ZRpdJDh89E9X37RTuxM72b7QkYzQxCS5ua88yD31mBtkveSqn9z7",
  "key35": "3gAaDuWsPp4Cv5j6vDVGEJ9MaMv6Utta4Vcb49K4iaAWHrH8xEzsbLNSeodi1nRCYQjrvA8RqktowKKFAiqtP91z",
  "key36": "62pdv3e2rY7N2QokbhkxsVaAUcRqu8sBXAwS8RteP8LMZRQTY77byaSQCYrKYmjJXV8sdeVdXjNG5XNT31MasnGR",
  "key37": "sRpvXJk6K1scuApokxJNv8rx9fK9cvsiJysBmTQCj2SwqqusTRDp8U8BC5UfDogp1idZhYHpoiZkdmeVUZC3f2X",
  "key38": "2qSuCPsevdCtXgUaxPTzQhscQPhUcDnL2pp8whu2RkEEJQ8ipDYcYaoJg18r25f23Lbh23fCzxgrSdyXRaL3LLMM",
  "key39": "5UZ8KE8JvPrCEA94d4xNKqSQTFjDXFU4rzp3jt6Y2vvT7CyXc84KXQeStCqteVZNtLhtydj5onnv5Xa8dkcdsYkB",
  "key40": "4WERiWe1ubZHDhSybCVAWNqiWvZScoPvgUqgS45ZSmy6eFnZjBgrpEGKGXZu3mLmxU5zPSMdHgLfB7QnPrU4E5sS"
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
