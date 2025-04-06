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
    "BVDQw22KLkScqVTyrFyBogEMpQ4Jk3JinUxfLu5iP6bzBeVhV4gjeMebxqPZ3RwrN8AxNvrts5wG9wCW2zcc9ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u1dS3EL6Z4ECPzuNUBbqacdTyzp1rup7HB4uaeLZBLaYtNdAazKRNNEJX6iqUQ1YmRN8bMNvWSG3ib8yCCr7syr",
  "key1": "bpjp3qNJgCQkHAw7MUdRZdBY7YmQVvMWxdajJyZyswMngmsrmjQAZoPfSR97KZH18JPtqQfiZqGM19ZE6q55fRy",
  "key2": "2Ne8ztDP9pBewPUarHYQjy6eKb4QHTp2ibCjSzK943AmxEen1jhYJMhbfzSDSpeaWLCK7DYc8ihnoy7P3vhb77gt",
  "key3": "7YAB1U9GVM5aaz3VnRuP7PJET32k8VqzeeoKapjNyQoW51eguesNWdvqLvcPWzLMcMVdT6CBXNXGSDQfX5auq8B",
  "key4": "2opoZExHe2yhVbCgxseqY5CnKmSMumB7rB1xT5A5uUAUTXJFnb6rHVXT125Z8VUzANoNwmtMt9jWSmenMJVGy7jS",
  "key5": "4t29sNxcXCKFSDn6QWvn42kiVYXCjV3Xpk4oXTXdEsXehg6uEDmVzKds34DjK9PHhoAPQ9xbyjbB7BDGcqnu8WJe",
  "key6": "5hc4FeAEqc8hfgC5AegquNCh1Zd9jHX5dCLAHLudwhQ1xKGgcyGL1YyNey9LnW5GirMLy5VNuUHkfMbSqM7xQtnX",
  "key7": "azdMTEUAwv3GYFv1koKXBsUjELYvdYGi5dr7zLEZv1ZNofhyLxSFQeCuUDEANz6j7aAb3kic2fUYXXSDgLftNpD",
  "key8": "34AyJSrNNVWPjS48NqgoJzrKCJJTPKmD8UvduHWoZ9KRzvCKwDzMpcmqwdSxBoWRUN7WzQHCCsRvXZCN3yBkEKLU",
  "key9": "UY3pEGo7N9H8PB2VqvJ1H7BsDzvKSTQa5xqq2EDwzG4hbabUabv8vD4z6wjGX2WMNREdFsNNKsTzSp1zrPWYpHb",
  "key10": "3FUJT31d9t66MryHYvoAMJLFRoPWeH8zosTUB9C44hwhrBwvMjsmZpzv9V7MaAEBhL6S5Tzn4d1Vy9x2N85oZ6A1",
  "key11": "4hu4ax1iojnMu6cz5Vy63tWBoUq7fyR2UJXjYdRDLZ6Vrpq4uJt5Atsyx9zVvnFqBnahfcD5BBztm7j9CinotK11",
  "key12": "jRcX92iyxkxUSpRE93n5zKufDDmqCyU1HBgiJ5siPH2aKMEK676VFkBAVrjWDYcjCEQZHU9rkGXe3hnQNPe6Ndz",
  "key13": "473YWH1PrgWCtTKnPqKuveJ6aCr9D8VLLkyjya65yi7nQssWy8hgPj9juLRzNqQwd94iyspzCekZVWt7wqg4c1D5",
  "key14": "36cxQYSkmLk18fMxdFV9UYdTLyTrSZFfb1gQfLQ1fkXLprJikUwCEDi2HVdL6u84Yv4Yu29sjQ9dewUibctyYGJM",
  "key15": "UF2xLd2gECwK7evaWjM6ndfnUDsEFd7HZEa9R6GhZ65ca2JgggoU3PXdBHegbKzgvShy6UCtR9XnWGqheyd69cX",
  "key16": "2uAmFCWmNDVQrbkAMZqHtCUWReh85heQSMeNcqNToN8eYEwU3GZg85L6cRMJaUDC7qnTPLYD7ybjDtnC7QTGmfbt",
  "key17": "CwPXoriAMBT1mS7B1k2dBVmXgoLHhW1K4Nr7PPkpwmPHDcUiHCwFSy6riM8LGeoWvtTgiqwe4hzigpSawS6jbvp",
  "key18": "5UZ3EzMa6w5YJaJqziMUpT9cVjACjnVyCfpqxvGHVLDmeKW7w1144wXvhFaicXXAt59hBeUfCrxfYf2ZZXMpMQCz",
  "key19": "5zUFF6FLp846sEDjCe6NUQmyrPCH7wz7bkmW5vFsYfzf1zaEGhfyCRUdH9Rv8oxactEVuzJYoWeaatWpy4HNT38D",
  "key20": "Msj94Wv2mXNCiKeVkKf9Dc69mbJS4ZbEWHPbNM3PeW1pWWZKJVsTsZZWseHJ5NZ9jkNAPEzVHS55VvF59qRhazi",
  "key21": "5sF9ah8CQyiPBP6NoGf7vik3rZzx7HtU8R6gAsXZYxHqTvNuyHD11msagoehNFMGH9eaqmuEkrbNZZPjBYULbu5F",
  "key22": "5fN3UuV9R4r6QxcaKkKPqpFCkC9DuNf7Brhr3ThfHebuBFYndkGTi8Lhj1HWmMmS8V33PruNx5juEodBqQDhbqWw",
  "key23": "26M5mG5YAq33Zw3LnHsSKzYH4m7t79q6JVt9N7PTx1Wb9gUHDh3iNhDih3ZfkZWGApM2MkyxEeEhCg4SJtKujzq2",
  "key24": "XQ2EL7Tw8D1kLCmZr2NSRUXJkC6PsQwCrtqxVAfKHv5CvNaWyswYJURaZ2gYKTb8J486CPuu8RNospBXnWAZrk9",
  "key25": "3hvxQbcfskjD4wmwmy5vR8RKPiq8SF3EhZcRzFdJP9wZPfv1n2wqQaTHBkDojm1r2b6hzXWqhuvBJi1qcYDPMvrr",
  "key26": "2d2HohviA2j7Mjygq5nz9WKxFWkMykDC4xZ2nNGAXBAavcpfh1E4fH6ZMAScE68ymG4BecRttKxh3HVQoUJNS2bA",
  "key27": "43SzKEVCkb38VM8oNN4G7YQ5QVRuQnwS5H1n8j1rpUaJUsCwvq7EkvgLKj7niy7pyXpYcQhSSgoYnx4c5bX8hgeA",
  "key28": "5WjRjWmbLFu8NSq4aQhwkN9vUUj7U8q7HpXczbmGgXqKLvZ7AxxFiKDEukgEZTgBojG3sNBcKdeLS8FjcnZ5F5vm",
  "key29": "VsGbiLseQeXHJdGAqEphGKyA6Xp3QSSveHm5VH4Ffve5YKEpP6DGUAbR69iiDK3tY6bWSxxKiGDjav1YCXi7ed2",
  "key30": "43FKwk6DfA5buSQrceebXyrxtCf3FPNpPdACZ59JDczRFHbsmRKfy1EGetZZDX7MVLyp8FS71zrJ3Ud4DS7b7bou",
  "key31": "59TxZkFdzvZo8ftvC8rDhM2rku2yvWQyUSnKNHhUK52Tm55zr26aqPJvT2T8KZLh862SuEmgjZYJfTnjciGC3oes",
  "key32": "2h484NkVAYLV6oofRSYDZ89VpE644gwpemUDFBNQ7zSsMNxczKdwbQ7FH9KL2vfHGiHJuzEBpF4EXaGuwKFEdRDg",
  "key33": "5wQHuTvVnZDaVAMCVPAqrkwUG4WBCtxZHaJP32Qvi2vmqMpc9fe7Dw3wCeXbFDC3cHgyUF7Sg1xmCFzW3wm1XbGo",
  "key34": "FSYrZSm2jJYX1xmd9E393M6QpERdBfWpuFY7bZ48xyJQYSSZddg57krFkfK8DftjMLkoPJqPacoUsNQtvL9Pjho",
  "key35": "JPMPwGMnqJdcxQBEKFjRNR7zaArq9Y5rpTC6AvUefbAxjJk6axy9ScDGDQJqby3Sjo2Jr13AbFezkcef5vovnjR",
  "key36": "2SxL8pBmXEedRkQXgotPVh9uhu94sd7Duz1KZsoaWZmZnXndyauxfwMZAUFGWDQqy8wAKEHzsH1FV5R9xEmgv3am",
  "key37": "2ebLj5on5soKGV4AhNUXsfXvxLckoGgwm18LoM3z6NnxhZcT55pfDvAttJBzY58zHNbNsYzJYFhL7V6RLZQZ9s4V"
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
