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
    "2shiABHVAS4zyVzb4sVJYuwLwbSEH1BxbM81o5QaNTPqJZxS59KfLK9fmT3p52DRXsZPtU3ZTydAhhkctU2p4gKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ACZBekuJikFnvT7B9cunSeKWe1sUE6iudkeZ1NdVZa5Ewdh4L81jRvTwcQSJsvcWNaakehwaDLAGQwLgC9WEuBY",
  "key1": "3RApkskkBvrNRXNW2FidPQ2xRp7foyJpF9XBiHjiZLJ5NFWUiaWEMNVpMXAfY1AePzp4duXhwUkkLQUzQ7fxWY2p",
  "key2": "4cuVDaHrpVBH1BPnqGmhybVrhpYxKmgeksRYtYjXLSaGBPV4ZKjXFaGxb4HhyGGksxebuxmJiwekqV9XX3yugmYB",
  "key3": "2iLU12BZWufGgQExeHPJyp1uEjK15krKNmaRXQTG4QcpbQ5bruDPZsuJCPyMoVpK6257Qqs3FAdpiL94TH7NWqAv",
  "key4": "4Syq1Y1aBHb11Axg6YUkLdBju3yCNvRCRLTzF7KTBtwkC8jecbE22SaQDqvSKm7B5RZrztVMoMUF7bKWWXonpbhB",
  "key5": "wCaNgmxavL4q1NGrofHtehqaZFpy1udFy9mNjRuw5e4PJiQchL7GKvMUhL87QLUp3fQaQkLuHiuZfUCpJVDkCLX",
  "key6": "5pHX8NUaQauddzq1CLagJmBx4y511oA9ooJT5UZex8P6seLXP7hdNLGuu5XzqGXGDQEGtGo2wqAreoK2W7jqFkVd",
  "key7": "3MWgwMeuFJZ3FPmaZSmEKqdPWgMxto1NUYxj6g6KGfzPDuJQVQn3GvDvMS7jVnsLVZrqer8B6dXvmmPiV9pxEtBj",
  "key8": "5xF4SJfhs4DVrhcWR8BmtRUvgJjzJrSkxe7R2hz2phR7VoCEMGH5LQFDhy85NHmMDvbDFuTm8nvgsjMQmuEK3Zs1",
  "key9": "4Fe1aAUzFj6t4V4WK9hgfBT7FXr2JKEpFnUiJXrSpAiZ8n9GF2Ds5Z3BLjGU6PNktQo3KKgxSxdhkGs9aKmD6tA6",
  "key10": "5KWS83vKdJXDTrXCnmJAdpzG5tgZ75siTWHzu5jv99S5At5Agh4ksPfaN1TfR2pCzEypD5q2UNgMAK6nXxhJFuJ1",
  "key11": "4G1JEzDaLxpPFcwruQv8LxedPPHyf2HU9gy51W9gQkxUW2EXNyLpt27fjkYadfNR5rdBzKyGwQ97AfuBv9KWJb74",
  "key12": "22KHoG2V7q8kkiDYxv3wZF7AxjJP5qLJgshZj3uKjUjFCpL82HiSNXRJTKqqUm9UzKVhGhkLJ9QAXdRWvNm2bUL8",
  "key13": "3Nq1yVviDU3TzCzXFPy6czgoLXqx9gYDn9zEnamFg8x9R6gGAQHmjy9FCTLF3DCcg5YNdChyz9fCLMpYYjiNBBwQ",
  "key14": "3KNJFykoedsdWvMBd9qcm9EhvmW1JNNqSZjhaizHVmtjsMZXHRQV3xNkFAhTtpmPBvwzSPBcy9M97EAsrWiki739",
  "key15": "2spzbNDVb7jTkE6c8YKoJ2kvfiDKqDSBjujJ92zQSk8C4J76JqfmYCpvWjNs51rEAkevDN5GEGzDFHEfd7urYtJn",
  "key16": "2QigidCKsbL5YabQ75R979vASo43HNnWxLmNRR15gY1yJEJPrhwmJDMvK1J7oKjJiQCG5G1gU2waMmnojwbkrkXu",
  "key17": "5mjivAdGnsxdisXWvEefTXcrsTXmYC4TRJ3UoSzHDkGhVSjoshZExTpCD4UCJ5GG3H4h6WsqTHgXr5jhaxJxudfp",
  "key18": "57EMPtZ6vxDqRhNFQtnEFmFXj4rpqzs55SMU5CoSrYr9NqcGgM9VgrSQDq3ARpU7ZY9qCuy41qzJqAxpvupMWasR",
  "key19": "43K1qrQosDAV8jurcnHguHVSVMWkGdTq6ijEmEYrpPTxJdeCjpWU1WfwCBcz4UsB3mr1f3Tg4Y8SKHT23vw3rdUS",
  "key20": "4BShuzg5DGEStzyyrbfDmvaZhxt9Wpz3NQzNWCZdhDPfuFySgggMkmH7g5fAjA4rJj2D9aWJQAAWDXrrVDFcnM1x",
  "key21": "5EugAzhN8bqZd1mnWRnkyCtr54iQh8H1jAML5d9FQACRAHdAbUtFntfsV4KhSKEtwNUmt9yX4yheWfYb9YXEoPco",
  "key22": "3XoFgXt35uvmnusviHSJfiLN7XtDgMdUtpoLzrdeGygsuTkHzfpZaxju7nkAQYBHnYdoNQHpks2tUkm6uef9RAiG",
  "key23": "HLjTkgTxEgMkmuUvjJysd9e2DRtnkpqaCZU2aW7TzGDsCMXtnRDxAAfU2qZBF7Lu5LRmS3XkQPGwtYtJSbUhryr",
  "key24": "3F8zr9H7oaVtqF1KFBqneDBdoTEvuqU822YHvNXcuJDxqafuzJLmcM8zAXjfCVQP9v55SSRhBWdj6n57kThU4ikC",
  "key25": "5iyGqi7AwAsez6VUu9rQGaR3Pc14tLhMg9eb99Sd2dNxtDgSdGgJSWGcqc9fim1PcQ9sQmA1hpfDmXZWA2xojtJ9",
  "key26": "rcx1rWcmDjoDcy8DcCYsbj6WGSUz8ADz91mzHoRCGmeLHthk8Ab2Ek1ezF5HFx7g9Uh8yHh81pWTWBp8vEm3nnr",
  "key27": "4mbkyknWgQaWynZqVa5wuLToZrdvP64TqbqacvQ36kDC1AMo8QSdUR7SjXPZBw7MM1FG5XhSfVfvLdaCEGCBH3eK",
  "key28": "8FKjXpkfaEbjXkfzMVQ4vwss8UFtjnZY9WtTEcRCwScNvTx6hTCTaSL9ofYzcHH8T7gACmU94hf2kpqsxzVjBhe",
  "key29": "2CFdEz9P2j42hvEwpL7pSPbZPWgbBdTWxB9hubJ9gzgCnbaZ9Uzcm2bVRYqzaDAzJqgG9ZWmXCeEu5w2wsJGfwkr",
  "key30": "3VD9pwVYcET7Z8NHREZvxxFLug1SPboK5Sgi6jowvSvuwU3UQZNnSpkhJEqTbfrSDFDgbHPyggEYXU6Yj8nmiQDr",
  "key31": "4jZcFE1cnNGGnyRyQYEicAdrGcc6WWmFQadQRgWqdfoDNXwSNCAQ7EzCGXDzDw8mwuaSY9SgMnZGi5eXLZu7hEAv",
  "key32": "34MWVThidfK3sHC6wf2irBQpeDkfujMMedwZBPLs2ZtC7wVxJhhJV5i2h7cRiX64qXjZN4etCNbhaUuaPT8R6uMU",
  "key33": "5y5AodkgNrFN52g35pSsc3LCmBaPpbgmGNRMupVYUs9QapwBVaiGY2eEa4brX2hJKzcXdk69eU5iVjLzkCnzdJe",
  "key34": "3u7NC45N4iGp6Ay8yahRfjedhZ4bQ17V2R13LL8WtSaR3p1j3fa71X7yrEVK9LYwHDU2Y6vcdiajF8AwR3BcXpq6",
  "key35": "53MRez6HqjdHtumw1gfXssxpvHNGo2xcbyHDEAWtraT8kaUwFvTg158XDcmgZJZZWYuYFGxjk5VQqcWv8vgB5L1B",
  "key36": "vWXNPvjdG3xMt2NXKucUw6nXvgPNiPp5DGhWvDfV2K5TBdjadmpMLXGb5xTdNAxSF318kR2D7SseQZ9qtEmRFZ6",
  "key37": "2qebWyLjDG9ovP9GkqND4p9FxiqiiexzdaMNtKDDvqqTdc58wWvC6Vxg9qYrAkXbaBi1P7qABzgmmf7AzG3XVTNf",
  "key38": "3NnfyKA8zBZCRoThyuXiZSwc8CzfNUNMPzJVumVwHweXeL5RSPVa6qLbbkKdmeKNyDBS1ap6kT1KhzRZv2d95aCC",
  "key39": "3snJYBBF5NTDP2SGVbT4VZNHM1mVpDWoa9vmmM7QtFcSaTSxjaxopWsj6UosTPVoautfFTRn8979bgxdkhApBNsm",
  "key40": "45iNkgZbFqNxeXgjDTFUtydejkJJFaLQGYZvxusHbbU17KkTHNVL9RZ3HYkXWqpFWAsUbnnzptwMD3Fgx4r4HGGH",
  "key41": "5UXWSwpKS99fEKMEX4nHLX5gLdc54DocUaU83T19BZ6HwXjtunHqd1kTZHXQpSyuCivShcue6pbyaS5inuG4ZVyC",
  "key42": "5J4MffsBxyXA1qxqKuXfph9J2hJBYvshthGvmz435xd1ig3sDewLYuAoQkViY3gvw82x9nT8sPu2WiEDGu8zeJh8",
  "key43": "2sHjpUN3JAPsHXtSZpPTpRJGyzQToSX3UxJdg4wC3GBxYgCNuo8gnHEGujZ3QfbxZfM712XY1oVr7w8aXQxJ53qL",
  "key44": "4qZHyxbbz8L9wkzMNKsYehue9u9ija5Pz1XHSkXAKzjpuaHvRt3X7rJDX2e1iWuFUBDXk53RzCdMxh8sB9HnsbPi"
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
