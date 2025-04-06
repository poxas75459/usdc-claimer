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
    "2FhNGdpUKsjyLisJX5QAVX8zCXGQJ7nbow453Kg3Jc9ZwZ3UkdiEmgkDxRBU8dJwhxwKJfhfyiRJzZMxPxo9xZKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t22S8N5nFskvjPTM2BW1NR5fSz1A52XFXsjzmfSUrzxNdEQVCuYS2oegq44F38jhepCs5Kp7NjGP5uAdEg9UDrm",
  "key1": "2YnecDFai6FNFd7DEF7ubs6Rtcc1qFjb1gURAkC9pQLnAD5cp1pkapJvU3iRtQjJPPZcpzD8RVyJ3bLwr1cswdgF",
  "key2": "3C4eHp6MXk3nkEVgRuEsvuig9QrwrpMieo1LNUxHCDE71VU6Mo6dcZ7NA6bm38gpQRyUfBooHRe8Q3gdWWiyxRPU",
  "key3": "5SNuB4Jgxxfgne9bru9JNLeHFQNtNy3ZMeNAcqhjKD2DooE28KvLA3H3A5bw6YZv25MREZQw7ARajGBehb8uSx4t",
  "key4": "4g9qYS6nrmPuZnpz5V2XDwkGmQbAFR5NsrGaom4w9SNphdSHKGrrkG3CyT87gSshzvavTD97Z7dtMSTAqbZtWi2",
  "key5": "3zF4AJJx3xDsL3iNhVR6WaTPZy9oSXYUkXefyrtEmQ2wUWgEJhRiyTGgtY4wKniXZ4AcLMPoiQ4LJP5AEywSSVfW",
  "key6": "3HJ8VxVYjMKys5cW43uPgch4GAZVaL1Gm3jfDuHacDBQx6yVeUzxt1jM1K75EHtocjwwirBSHvfM1ZnoTktW2Peh",
  "key7": "3rj5HS7tawFThganetenCPZwums4xrwM4DPGFFvYRsJLaYxPLA3igP1DAazSYAhGGKnTKxgrCWVRVXJex68xoBHq",
  "key8": "4wrpXWSNq8XURRpMpfh8eKQg6UmiGc1a1td6Eevt78VmUeMK8obhxspXkuSFchnNR3saAjFpohqCcqB6affktjMC",
  "key9": "3zggbx3v2PuqnhN3XmZAoa3dmWXcA25auqVFQcHVjBAjFdEomCTLeBuJKWLH4KfYHaKGrJGJrij2WZaSRDS9RvXX",
  "key10": "5YU4birVMNLkYg3gK7hg2nHQRDLHEWJkiKMW42wbigjchHivZiX22nSMFWuKC97QRr9VM7Y7XMhZinjZ1e66xjNu",
  "key11": "3ocgMD2RLXVFnoQLUayZapJJ2Kx4JPVFoW4LKx5ZoDcmMBHxHyBoozkvvNbK456mPBq2depv8RhsEKVRffpoxYPm",
  "key12": "5mpMd9vqqs1shEejYAPZywBMSJpcVb3S1yndkZ8eGbZdT42JVbwk2YYjzNEGvo5v47oQ8pua74JCSkbR16HhHzkw",
  "key13": "2UtBNGU9L3k4C3a8xVYoYYt3G2fvzcJMedf2tkYkQa7wbwYd2DGzPVdJKgC5JAKzgNGKnsD8SZatxaKvcNXPUo4w",
  "key14": "3zT9G2KhxDj2WSLZmvyg4uAYvVDwnwkypKFK25CjzGFCXWrNCqC7CfA5bh7tbH93B4g49TSYDBLToJxNJ4fySDX7",
  "key15": "SinFXr6DR3wfCj7q5ZGnTuokMu6M68D9uaGHBmnngaYBHUinGDDWA9dLFPVaHdtjbeVq2GUKF7497x2Nxg63pN4",
  "key16": "5hDEiEhDVoTUDStX7AKutt74zJJA8o4t8GT6bZcJNvUWYWincphNWtxARqxrSnZekyBTpEFsUTrjuGVMMwE6vbcp",
  "key17": "4xDd4GoRe958DPaYkhQ48po1RMo8kvTSfVrMCtUBKBJi9Hjh9xsL7ZcQHF5dWHWtAf1sw7bMjwR6ZmfZVWgmSqTi",
  "key18": "2m5eT9PAg8ks4MXsgrZTcK8AVz424bWFgyK3aXXeFowRj7tcZnLQdjcRAp8VTNYfwjdNatfW99GAn1E28tpTAun7",
  "key19": "jR8pi9i1hd4VyGfoYq2QR14q9vJzkkKdVTq1BAoom9wDZ1Dvi84yN3P8LPeGvd7Fd4AKvEw8qNcNbtwwxvSimkc",
  "key20": "5uYcN7bsSNYN1Nj84KLWJQcHzcyhWWzPBkbgvT9YoVVXZhWv3oDFwfyPbzfWJ9vTEWLwSXBxnY8XT72DgQs3t4Tx",
  "key21": "YZeyiydS5wRLQ78BXyfqy4ejLpaYXeDtz6MTjgn9UtgLc8SsH93F8bJzgofNCxiQYkJ8YyRGJ6At2xa3sy1LL5h",
  "key22": "4opV5feyNxH6mA2vWr2kgVnEzWVnUfk7qDN4CefM379irHFdKTnJWai2xL1WfmvzoQi9BfktLrCduoFVdX5YuR3h",
  "key23": "4YJ6vjmqG4obxpvAEfwzMMgMsQyMCJJ8QSyrQhQ5LLzNrVGFaMNmgsgZo8uSoVf6nFajGUjqt9cgC6r3ZnMS84bD",
  "key24": "5DT1JeNr7uMNJcfgG8ywnc4ZhZrmEeDAQWyLL2DRHZpVTvEB5RjMRD76skD6Ycwb1t1RnbWuWXQiaNV2HEdRnuy9",
  "key25": "5jD8SAJiVW8ZZjnBDU6uHAyWTGQrU2XWLNPPnGc3s6UHoRwkP7zgtFEzM1ziVvsKswBz2XEXZuSoFYGkQ65DJxXZ",
  "key26": "4mg8WLR2ayU7thotrshAxV9rYvA4VL2FDBMiBPw8s4EJFBJAnK5C6pG5JVz8mVrjUJNsKMjKocA77YfGed6wqrwV",
  "key27": "5KtUFbyUJnbKBzeNav2L1mswae3hu6ymGJHerFzHaEuVNQo8k7VsvH8tYyX3bGLnRfKnBJYzrHKgojR5c92YzMFL",
  "key28": "5wnABTB4rb5rSzW7QLPkTKTGFQH19FjZfPpWpZ3bUTtsVBQSr1RCRRPcsZmtPTgHakznNLdnYu3TNSQvtgvMuomD",
  "key29": "5Hi5RJyz3swP7No1mHxVgELUAtrCA2vi8t1kEUmvJYzz3jH5qoxibZX43HaWxxAw1NhdaFpifCAs5vSD2DP5qapi",
  "key30": "4JCpZf454zKgvCvsEiqc5gBhHveozTpwycF2matBmcbBcr2qDbfdJhdQLtgc29H46qi1qnHKPPqwDNuvBuJDSX9z",
  "key31": "5Fb2rZmWg8wKFq69gTqnRLftao8gDv2Ji8ssMJVxim5TMzhvcWULrrqkRnT4JeSkFE3uFKWiSkQ6kxoeDyGKrfZR",
  "key32": "2gSmfMmCZE5SBKKpve9GbGruGfMUZcmaUjugwzfKStFH23NThN3s8AGPfX81kTWPenfAsTor19ScNQKB7dhYGvp6",
  "key33": "3PdE1ZJk1sQzHBUhh4VnwRhyiVojqMB4dRr4qiwQzQrXQRZaVCVabVcaUN9UjhkdoS8CAXob9wmTMPSHYiXcxGHg",
  "key34": "5atB1AaoUhrzKVqN5brqPiawh3EsvZN644wBa46ahsdbsQoEFvJf9BbVGXnJJa8U5QrSTxSqYND1SbKUnRd1V6tw",
  "key35": "3qvnaw6DvhBT7o5uZnfa6ypQEHn8DKnzFrpr8Sciq8PYC2n4cHdZhw5c1u3fFtqNiVTMPeNVHRytXGzVFxRXy41s",
  "key36": "3nWxUX83FWTGdZ2vqy3NgkzwyC728DBHrEdoFPWh66m5srgbrRnVrTTm1nZEKMztFZUX4cM6QYqju7m2XsNqMLvM",
  "key37": "5tYwDcSbyYaQjSnauf3Dg4mqYvmqAfDvaY2MtaqwU9Ldf8c2NNMxDkB3d2qy5D3AkckKcCMVrVwnuxNUz8iK9V7m",
  "key38": "3qeRwzxbA3Ygdbaap944zh6MEPfweagLJvX7Tz6GSTruGvEqvPx6NomhRBogv4g9pH5Qcut4aLAtRaQvQrGwtTTk",
  "key39": "cdjqnp3XDaoRz1fzATtRZJ2ratgmUFzaTodASzg69LxSSBF9PmbHr9gcGpxqfNovcsTXDezHGpUpsJPLdQ2qC2a",
  "key40": "5mQajKekTJXCqB49iFJne9QZEpQ4XPc7jjcZp9s1qdaSo86JzWfqPaHKCkDYnveqXiAEyyyEgjaqztBqR7oXeAF4",
  "key41": "2xxqKN49dMD7hbFcpkfhLaeGodxwskMbcyUMukdUyV2x17zEV8eDVHQ3kcsodo6GjyFDUTsJE1egCCPfTQVNe9DP"
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
