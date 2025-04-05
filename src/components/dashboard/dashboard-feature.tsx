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
    "3tVS5YgXbRo4iPy5MjyA5Qj8FJmpUGhZF9FPLfvJ4BKUsXDXHKwktH1EfUokPke93Jv6TS8D5GBZbbZ2ZDYRw5q1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NsUd6WyK1oiYaY3b2ccPq3jMQsvm7hVhzCnVenfUNa2iGnRVMrvyG1Fa3aAvkReWQsrpeCKdmYsDKjSasfPjkfz",
  "key1": "5wiAxY8769iDy5rDTt6ChfdVJ6hPx27HQxeHMw9pr7TB9HZnZ2zY3rjiJjjNsp6U2cqjDxxFUSkMNS8oEe7y3P9Z",
  "key2": "dSANXGygBhzizHuAhvR6SYDptdMkgzv1ok3eAPL6WNB9Q9nhr3XrPUjgLkiByujEjSsdtros4hYNMg7Jzvum9p2",
  "key3": "Sy1tMp42dHjZctPu4BkeFbCxZ3xLLfnBU4b7h6TRn3J1861gaMUjByVveaArCjf1NHEx1WHfbsHtUyAst3kV6kV",
  "key4": "2oS6eeKyMTqQmka3DwWBWJGDzW4S2yPaQxfAYjJccvCF3Rg1DdaKYKmnpGRGZjzEE83VfesbtdE9FnrVi4dN9M9w",
  "key5": "2GD2DYLNux1BxV6kgnCUA8KFjBVohXe7wbsqPi372TQLChyEaijQztTW16poCJ9G8cwSUkcaHZJ4fhkkNQ6AEr1B",
  "key6": "3TPV5jr6sLHJwTMmFTQwbwBgEfUB5LPXh6WHWnwekqGhzcJuQJ5dPyCFzB6MbohY48xAkiQNYrwM2cRzXDvJTW1D",
  "key7": "4oejKYihuxH8YZmUrArZhw8thHfFQRa2SLAc6w5zAEctNWNbKotdQNgvF3XGdnZ6ogKzeLjETa4YET8xQXPp75mz",
  "key8": "5hjLNgmCk827wax94BhQH2XMH9UosBeYQh24gAEr9AGWu35VH62faQdTN4uoUPWn7gywiLckjKGXdsVGSfoT35Wx",
  "key9": "2tqGXXp7HD1KKn2EPE6ujeucsmoLg6BjTf2qAAawL2Ry2Xh9ySuguWYVrhqxSMMo6pJRGDWqWbMTZqsnnaZ7Tyi",
  "key10": "65p2yMXvEYbaDpCxxNyyG2kb7eUeGvNULfiA1eAmuhdCBeSrHungPpKiK8KqbaHRzUh6WDi8B8hyJe9VBa8ze2vU",
  "key11": "3Rh1GSgjak4UbbLLWr1gfDeyt3Boqtiv54wjgTqosUxSCeGFwCc9E6npTQk5WMq9KS465xbitxXYrsh7kWPnw59S",
  "key12": "4wP79axsN7qwWV3b5v1n1uGKA7L7sbJdeHiWQk9jXtafrsd7GX2ic2YtZ8EtzoKXLtb1WmbKFVeD5sebVWUK5xXA",
  "key13": "5diCZ2MVqrc7EHbqGJPht1y8NUHmESNTQUUnW1ffLHnYpztFjU6TRxZauue1B4GcTVVvEYnY2gL4xmnnhQwZYmSF",
  "key14": "4GqLjD9jQoxp53mmVHp8LFAxSB3ooBE5qjfhVDtGhnr5T3FXRhzgQkBBuW8PfwfM31AF3YBGi1NpMNihg3sVafCh",
  "key15": "5bgxsQJbjqBBwtkhgMrEr2EPBecQZVjCwKPhkH65FychTmh9dNYEBR4ZSKq2aqvZt34B5XM6Z79B67isF2auiLDo",
  "key16": "4b7wcPXJ8kWTkEdct2hYV1bnNaSRraH2fB9HQRzR1fdgxnGuCx2EwGNtXujoHzVCxbwvxSiuSZ9881ibp5UD6Fr9",
  "key17": "22AubK4puWYGHXtCPXD4X6eG4zAuTgqCXPbkcDKwpAbHrskyagfiCWQqDBgpxPMW7tNMutU9cg9EHgex82DBXccN",
  "key18": "63HdeQwd7vi9NWEsURqsA5cjfJDUgSUmET9UcPUuRb2jmXEJP81wHs9CwoCwveAVeij8dQt3CAKLxZi5xNqViVLS",
  "key19": "2WDF8p1HuNximUL6HqQaus6hUJQWx4MVv1PDiBzSBz71yxRX6H9YrVt6kQjEhdGzPbqzKm4cjQHjrnUKTWj3SUZv",
  "key20": "3S9io88Kj9JoEGG7egcBaWo7j6kMCGT6kYe1ahw4dC3sQPErWMVWuwehRE4nAmoVeU7yK3YsHqXcnEF7vKs75hwo",
  "key21": "KD1AWDDrQYPwDmZv49pnVULyzQUvVVTeeut3B6q86wCe1zWuEcpYNWtarzN94DMCRtRz52xMqMQt1BhdcYAq1tm",
  "key22": "4rwAjbDH5jjpafB6zajiq3ELHSiERsjfFYB4rBkD6xnYwzjxEMEjCbwopZfJt22T9B6NVNhokoYHbxG8FBJxTWxf",
  "key23": "yuadCzJgYqWttZNdG6U4aa1RyYwQaf4AqrLAV7ep8BYNgJyo6KTRE6fH7tVGwJaEcRwmtZzDsi3jkfkvECefCLf",
  "key24": "3si73bXBaJijT7PxHBMxd8aktwKibnhY4Qsa6V9D27hYg1e1wK52iFf3r87gYmDYuSHfQwgjm9axSUbUztaGqu2z",
  "key25": "4yAqxv6qRSG7Tn44KTBbTu8XjMTTXBepUrfbTzDix581LEzk39tvxuetvChcmaCHdw5X9y1SmQoUu4vRXfwkwcAm",
  "key26": "3ZV6t25PDELBwUwBgbHYJqecNPA26maEpiEQu2iinUpqBKQLptb1pymJpnG7EV8F5pUqPchvFhj516XhR9W99Whq",
  "key27": "2dFJNsJWMwb2n34wE8Lm72Etepme7o9CzJnNdqsR7Gm6xG9f6gKP4ufDCwF5r5pREJ4PUFg9qsDXE3GPnQEbXveL",
  "key28": "5Uo9e5DTkaSkVLy4bXTcuM8E5jCTze4EFgmbNFVNtjvFN1BrXF3yByZx8yPeXC9rYCULpQbrAfdwJMB7e9vDTPcV",
  "key29": "3ogAS8ansgHziYXoD4wQwjpUDJG5XTnYhqrdX5EBWkvm6twP8RsVSy3VQ65VCxXGNCyauqcFVhGbmDARXggwZNpY",
  "key30": "5xcMKFMTrichrTYq28iNDDCHU3FDjdXADF7Qa8xd1czQ6U6NHp3Q58G9kwHvUZLbSRYSHowPvpU3ghiCadV1HiAp",
  "key31": "5ANQdPnwrsP4zqPZ2ju3VzQKTJ5MexerLvgsdUmZwUiBtVV3YV6bgr8WU2Uv5duB5cHD6adYiQ9sVrqQEPobwJrQ",
  "key32": "5YJqpc1cGFFccCso7c1YqML4HMkmxU8cQutHzLQ3ECeXmHQNmJm4e6aSMSgqpVLvkZ2X6cbN8khpVMpKM72ddHH",
  "key33": "4QHwtc78cH4DCYj7S733t3fYKcCjghpGfGrNVAqe432uNj8m3NDojNQ8w4eBgmP6WT3qw4GJ9XF4u3Zzjjf4Eeqf",
  "key34": "4AvkoXRYeErGNd9Aq315pry8SWW5yQb1ZntYGSPLgiVN8mtgn7sb6TYGh3zqCi8dX2v9JVw41skRWqtD5L7qvkak",
  "key35": "4qiXP2Qoz5sVSk4YK5sH6uzYXYZqsomythJFwz8PQ9iDbDBcc9oDLvzWu33ixjjkVVf18WUMqCKizBksMvrMsqjN",
  "key36": "4AX3TyrYHekKZ3VDBhENkWcCQ3TfKVzqr6FfxeYU7TiH8eWboxFTDcpvL8AYUo3xRfPEmWcSCBmnndM5KeYteUNc",
  "key37": "3o44t9GJgc4wwu9nHAhSgNfz2eaurmiDsmVUKRcg9ffn8aSc6DqyQcXEQQKvn4Pty73VBxMqZymjM4jPy3NDVhMg",
  "key38": "4fbQwDTvYmXzDmcnWtG89hEL2ZLsTFkUP1PeV28aiQjFcfRiGWo5oLr8xetCMyvfnGKgV7bT8Dh4J2fMnvnqFcw4",
  "key39": "45oJcA14W9QDC14n6Qb6rkvnjtt3Huq6yke5AK1FENg5wrUVmpVVGeWNNBRniSMPJP45Ez3QkhZQ4KqEKDGsHjNm",
  "key40": "573McyxTDQBT4WTrbwAiBumNkrSVZi6jHdnGFuYtu17FgxBJzZettmbLeXvF4BRLCavFrYPadMfZBzQ3iHwEvMNY",
  "key41": "427RfP9etj6FRgWrGeTDDGx7XijrZ1RhfvyfV8Mh1VYB2HjteRjE74jiu8H27Gqr29H4F8etSxicde8df7Zczmx4",
  "key42": "5785T6SaA7ffrjXaWhraKTnrgGQB1UnbdCrz6NNSZbBPbTogJB6g4qkrZN8xqQ23tqxSUriAy77VJT9aCXH5oEt6",
  "key43": "3WLusF45tDc9szNMwNuP5ae1FNJh1xvstdzkLq5fsrQnN78AMqqGsZqVuMLq4UDQXW176qzVbBiC8q6N61bs6ZUh",
  "key44": "5HSv4MbbqsJfGAwQRmDgv3ALguHuy37VcKEVb8mWND4Akc8DLbc89qqeTdhbVHAoyNBpM6erNEsKcbkAqSBJBang",
  "key45": "5mtb6CCrsBHDic15QV9GoQt6JDYiCaGuM45qXE3cFyiBoEa251N7UG36FNkTkLaMFtzBsNVfQYVufKitfgQottkQ",
  "key46": "44fDiEebLh3PjGhSCus7aYp6K7CV7CnspZwpt6nGxrfvNipVTNxJ4YTHcwTcuCkccvFbHHFs9kGWfRGBoiK51f17"
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
