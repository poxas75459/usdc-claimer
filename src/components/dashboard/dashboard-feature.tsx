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
    "59UrKS6mL9FvBHk8aLkwT8zUetUZQsSVg6wHCPRQaVMbXVXhkPuvsBrVNipQ1zBCrmK2xjttSiBRhzDHkGj3n1pA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oXaacefdTRDx3vDBJg6gYTc4KFaZud7EgomwJKPkxpDrapyb6VwwMM7HAnHremodUDeUQ5jwTcaMbsPf1LLKtmV",
  "key1": "TSEZw7mxrvMCQ6GdFFjVEB66q3HRBrV92mcQwSrnZicEu1KwgVGWn9vJcHYPgZyFMd3F7hRqS4PCTmAzZPAsYuY",
  "key2": "zAk9WcY8hkN8KkBDwShnYpyMQrHSZRh42gaHtp3t5rSfwtjopj4WMLR6zyXxajnQuBGN6zh12MvYyMD7U6x651u",
  "key3": "4NCziRXChS1hdJhXjvi9agdtSNZG3QyQoQj7a34MiCSV4QS2EbRxoT4zie5R37Sbgr8e7p5zRPKjPXa4sncq98a6",
  "key4": "3zkofsTceFHTBh54LS71M3q8v6dShmhggghPyH9btxH7y1DVbUFvNnShJsyMf1D1qWdcxFpiMQGLpGcG9ofMYodB",
  "key5": "4yTTA69MJcgHYpjPESDxYUibyNx1AyWZa8GtNF7SaotAQ3A6DpaopkNJC4wUYZUawrgfzr8pNi2MGLjJ8Vb7RNhH",
  "key6": "2YnSs3QG6miakeb7PzkuowuY7HTJDy3cWJTc8u4gpwQQ2JKBS3g1cqbWoG5nnNQ7CGYZsyQCeMiZVAqy5vz6kcZM",
  "key7": "5UguNie82jNnBLiCsbugNvrzksJyydiBnijE7BoqqUYfxTyHeyk6AzVUDeLBhnnJ9rngJ8pdtXjPHgg7Euji4qrd",
  "key8": "2d7FwMzjDsV7jNLTTu3GnH7CCy6Vm19azmPgNaTXzJYZ4axDhD2mLWUGPRUF3rexSAV9eKB9zKNQRL5RYkrUnevv",
  "key9": "4hXh5f5x6hGuEJaL21rNFBSGYwpJAdofEQePYe6HHjq3LGhe9Mg5sPxH2BLuHNNtK4UWcmGWFLP6QLvppUh1FymY",
  "key10": "2DQxjdk58P8mwGJe4M6dKuM1CsQyH9MUwMecSYhb3wrr2Jm86JyGPGu3aHuKGLi2ysLWcr8Nd9yqEpkua8hynp2h",
  "key11": "51kvBoxDYL8CqGjpSWdEmwt2zXcBXbE3SRfXPKy9KJikHWjgz9JdF9Vh65hWooqVgjBxSwuBEPNNjpS9m7Lg4fg1",
  "key12": "4AFCRyjfcatyYuKFww1Hhn47oJ77FXzwNz5wSoqKLWZHLBNbfavEhaaRLth65T8F16PurgxU2Ff5MoEti3MyqqJB",
  "key13": "4pYXevdnoaDcTHYucFoRWpNEhgy5gUxXJZHeKdH2gDf5HyTVQiuj1UKmLU1uaZxMQ5JURQBKF2L8ZfRDTcaUswJ6",
  "key14": "WZUoXN7Jhbeuyxx9MYDZ4vo19sPqDrDBiHwgFiMepoFDYBvL2hpbGb8ALp6WEUrY4KfHGESsigCPCUgQaU81381",
  "key15": "JXB6A2xLLWsiJXMc2Z17Lp6cbHG49rs6C7D5PDZaHGCEnD9tTqWsMANxqVK1ffdcM6uuYA7fmYJ1oDQjgQFiSnR",
  "key16": "4MD3QWhvovkrGGZ5gcy6U7CsYncg66Uj8sZV4su6ULnwzsjuUv1bWW474PjKuZVz1KyGqMqAhZqTam1sfcxzjP7F",
  "key17": "3aTPoWoYax8VqZ9ZdQebY6RAG6bp2djRe5kWgaUqSx3XqUnURdotMazc4FnhmHRotjEVWvEFn8rS9RafH8gSd1pp",
  "key18": "3VyfLaw3578NuNeYbdQRoN3XGH1jHAoXtNmKB2k53oxFKyHCfjXm6mYQj1ri6KyTqb7yTDpSYbWSE72hDyFsakb3",
  "key19": "56Wmm3dpLnRtXgij5h285okJkATPrFQ3BHc4YVma33yswN4Z6ArnjSDzQeNxfwnANyf77gVLA5MU4fN9kTGNuEvR",
  "key20": "4L4ksh7pXLFotBydNt3NtsBSUA3bhW9pB7YaqpBT8eYGM7pw9X1ZhZwdEjZneNqR3pDrcjbT9rjXXZZxSceBVVi2",
  "key21": "2giMhZVbfydCDGitjGv3jdP8ZiRcLhJz2Yz5UMyCkKAmFV7emMqqSST8hEFd4XUVJ6Z86BE5oz1ZauFojZGiypPk",
  "key22": "4aZ46fomsk1TrHoNuwx2q2q4RhCm5Nd1BsLeYyMeSHWrS9XufX9fkwv8HYQ1GbhhkcGhx1UFY3oHyDwovBVMjVZt",
  "key23": "4qAqjF5MUUBvDsfnRdNjgrgH7aLLvaxTx3Ufc5kF28qRN7iJ4K6AWenFvLb2426v6yBGkdPH26BfiS2tKiiPNyTd",
  "key24": "2vGv22kxPhPhR3rT6GnQFwVjR1mz8AsYXnZaNaWsrdG1tn3mToEm5c3jNdr459SY3qEneMcMWbXwjobudsiY69Hm",
  "key25": "S6cWQNeGM7ENzAkdHqsrTTf98w8PHhkw5ZqrTRMPycZqYDaHYkA1441oG8ohDmoUoEiJAh1VhR7cSvfeP8XE9ZE",
  "key26": "3M6BuNJ6xTcWekQyHHB6jDJNahCnKov5ox6wjD6BMeoart7AVEnU2aw5KTa6jNgskrSjNKcQBmQwGwyxZgRsVRgs",
  "key27": "4xz3WcaBT6qovDgRZ2n2YuW57Z8Tzh6BrYME4qcyX99FgGaJADgXGLKYhqYzYYt4pFdhMFt4k9v4BDkeWMq6nWDj",
  "key28": "27d55CCiv1LhPobHdHRGhw5apqXbFrLjwxTahrwjcY5hGbL8mdmMyZ9titYBx9mroqBnqVyiC9jrvSLB22v1CqrT",
  "key29": "3XCjfKxvxgB5HsC9LhWtdYfSfQ4iBKkBWzCQYTWiSXsXGmP1nbZ6WezEL7fiN6qb8qwbkXxfYHA9qpWDBV3gYAx3",
  "key30": "4Ex2MyyijegYM9bLnR6JWpCfqnoctAgtj498e2MsZXtSaWqxRT9vshhaCoUPGT26jdGJJd4eAjvtwPW4zYYYwrhQ",
  "key31": "2gRbiwivBcR9JZ2Sto5h97M9Yrpuesp9r8dYFCXyzpnuHKyqi2y5A9oTRRJ3kZLCVvWRsgUYfnkqUVuuogL3gTHr",
  "key32": "3YKZbn72Y1SAteGy5iXYreUSaUdTMVqodJmpGj7PTFoG9G2wPUeYJpTZT5UXTyr6kq18GnaZuMctsUxMnbJCTybw",
  "key33": "48gXQ7PYmkg457NRppfCFgqbNycqHYUYxoMdHe41zaLNDanbUKY84d3CTJj3r5uXmQCJc7fijSAEeoExSLktB2EG",
  "key34": "2HURDNrew6DbvK7QcUY1usn2fxnY6FAXwiLD8RxCKwidg1nFgaDQD4ZHzjfBw8SfSqSsK2orHW1g6EhF7gvS77wv",
  "key35": "3Jv6heM4gHf4ygWN1ecvGJZjMtKiXiHzM82wJjQfnwb4Pr7xac6J2NmZrQ9au7QZ7Geb1dXEi9LSaXkY3vY5JxZJ",
  "key36": "2w4F4paaCTxWS2F9Y4Ey2pMoLszQ4soWBEPYjDKGqbFustHAyeAtkVdGk2F1iQapjvxKXEEGLioTGD1jNgiPEfua",
  "key37": "5hU2Pfyso8N8BqhY5QXfet4NYA8kR1zkaADL4pw3hdGrQUmYGkFKt3SdzqMj8V6ef1JE7ZdppQPMN4vpppa2gPgq",
  "key38": "2H8tCGaYjBB5fEBD1a6jHf4vx2mwUNkx9djMCXtKV9sSKnuJq93SRW1GeSEQ8sPZf3WQCWJuBenzngJn8zSq72F5",
  "key39": "58Ggs7dAag9qcyYJNJLTtswQeq1D3WhM6EV7RynAznNW6haDVNXf1Cj4ojb5zMxtqFozMGuYfPPxd8R1qzN25Egw",
  "key40": "2E9AXvN7ZzVM8fyTmf8RRJQSGRmPVSayctbgCvaTMBFjXnx8Epye3wiqgbHfZLQ6ZvAMKLKVXNvkj6jeTibkA2FD",
  "key41": "22SHwMcS9PTaymUCQS22MUv3Sm1YGu5Bf5G8Kdz6PBniDnSBc1gDDjFFBJrFWYPbBULT5LbSY1AJf1UaKV5hkPkA",
  "key42": "5gUKKLEdct1FxUx1VP4waGKrRt6vni8XxyVwf4SeRXP3pVjvUV3Dx8xk5h8pfcR7YtqzVQgxgdNqMdHAAUZYw2EY",
  "key43": "3kW7vaD8GZhqTSbf2q7Bh8FLxYaXwQ32DAiDNAs5dXQnMVvmpyLVxB6EP8ftPptN2KzbBhcGQoQtYqunAF79YBze",
  "key44": "5YMWmAFsfj4y4Yx2q2Lbx4ayseRo65FbdBK7McTmMfZqjYPitDEMeCpMavDmAdJJBYUtSu4MuAG96dK8PfzkC5wX",
  "key45": "3oifi4DMfoaMpF9JGxcAUe4SHTmRbrYNkbNgVYRFM2rEodcqrNDqFVrH8G6AeR3ygv6uMSjVovk9WMCRhvvNgAqh"
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
