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
    "3koa4mNe8cV6MQxqA2p4Lb7w9554awgKdHkh3sBoxbT9kKnShVj3C8GYLajjms4tQQJHpLkxUsbg84FowUs7MRXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3agTzMaYL9Rthb8Q3mJVmqKN5n96LysQRMdrxtWUucgGbBqcggaM3Kgmp4s3MWDMRg4tLRw69mCdeztJC5onMbWM",
  "key1": "4aNMHtRTy5TAVve9LmQyL5MnM4Z48fQkiBq2Q8FtWYNHmpdM4pjXgTMQ4FvVNB5ae6uya98JUGcuEEgp8aP83uRv",
  "key2": "yRYhmDWf1YAyNhsd7fxTMBR2wJx8tKBFHXnVhe7eT9yLMMoaJSV2pdnqH2L1rmnGkAEe7tBpXi2Vxw2c8Necyqd",
  "key3": "WVo2gCWEzX8FQeUeSoGXQZCZAJXZXHgUwpF5yyMgxDsrMJMjv5SYeTJVuyikSjDh9U8sb1jhYcFtneFzkVxmrrg",
  "key4": "krsAJLxVpBA8tagzKm5JNMrB4AhYfm7c9muGFGMV2muPUSXXf53s5wUCYRFeLvVYPrdr3Ah7mxzhLR4dcQr46DW",
  "key5": "4hFCWtHLmCLaKy3eFyQFQeAz4A1wHitPP92smLbkvQkiJS4Q57dh8d2kpGWicS5SPXhD2WzYp64FL3tAGiTdbWQ5",
  "key6": "5EfDaBx7UEATkcP9AnTLDghfvQEviYw6DjdrpfqaUDGnmLncNLsY9BTL8H9iWoogcBz8N1cozRYewV46eh33Gefy",
  "key7": "4hKtncKwnBm9ZkBuXnuj8Ds6FSi2F1pWNtLywtCWoNbrDRFxMXPHq4wGAiUExtUjZU55xDdB2Xxn2p9qPstQkkep",
  "key8": "29FTSAxCJrKz86MbFmhpmGymhg9DiNuC5xQzGXN15AapnCaSetKvmhkxuNw7cAY6HyRYGiXMK5Y3hNjFcLeFTo96",
  "key9": "3MfaAZw61Yijf62tk8vRw8hJdEPuzZDdSEUVwQVCCq2AYQ2NJqgHe3zLA6eW24gJDUqp9NmLfExSj2QdrpkH3FSj",
  "key10": "4yD7uwqzJm2CBznWBWAXBgin3oQvHwpZjaoUFTjYfPVy1kD8ndgzH1Euk2oFfUJJ4ELwNNnzcWTmjdRHcTwuddUL",
  "key11": "4xfhEUHXVgCL4mkuNLjtcCN6UDjEs9HWtURzDSarqh983WN13Cne4uQcpueA4KfxEaQAB8bZCoMLeYH25gg9G2gw",
  "key12": "5CSaKss9Ms5JhSR2Bv8Z63AuaE8a5cQiMkLmFf81BhuhenNK6XYjaqjXdPuwzWHrtxEx2uQxZT5YVgUgz4SpwqW1",
  "key13": "32Nz6sGpoFiGsJ71yLwgV8jqtaiGSqEA5rpkBi5tUbivbGDpt4kgMaXZ58W1p3iez8RAjMXsPNPnAnutNTEfmQ5w",
  "key14": "4jRvR6hhKNAuRqdK7UoJKPyiPBYeY8LkQJh2DTmfLkL1JZq7d4YuTXcwK7xR2Pjko9vakLzYw6kFMjQ4jYRBCBLb",
  "key15": "2ds43MSAJTgPRZQ1Z7U7jDkv9aqcq1GyRo93vKA3TRMGS3JBCR4QCAEUibPPoiKKWoebCJKhiXaEjjftzb8T8sJo",
  "key16": "3PULNeWJeDGNCGNvTatqmhRF7MRNPRsAc2FRdjjktD7udd5Bp8yVeTojoaEKSkZoNqp7dpKSCZnMfgZQgvuapxf9",
  "key17": "M42yS2Nm9ouSofTQisZXZPrKJvsgXV7TAYVsskzgyuRh9VSdUKAcH69RXNMxaW77AZnojadzGEHQcYBwmVo2q3j",
  "key18": "fmyVGBpy8TwbqQtE7epYiaURpqufuwA3JGV5cma4FcwQ8yi4gxCsv7bjJFPe8ZRUiho2FcA9mZ12LgEGtWDgU1P",
  "key19": "3mhWQQrZbCZpz77uqBTQSqspnj8odn5uuxQY5UQxnuR4Sx192SgEgZvtud8SUiKhLT6m7qa6TxHaaJ8L2zTA6Amm",
  "key20": "sXcsnxXA4zVHSmGBMeBnLcWAsEwkmQBnay3yVCBadVMxFN3Lf7G7GdNUmZUzYV98CcdpQyLhgZGBmNJemEhE9tE",
  "key21": "5rFBRrfwkgFcKLNTkLNPYsrVCn9XK9ETGxTAQUY8sskZC1VgBtMiZFr1Vtfk9rxn2z2BHhhLpCLschCPiMcLgxao",
  "key22": "3Q5CCTt5d7ezwhDDbj4pYrsGV4qEgJrLjvK5T161G3nnNnDTNGqPtJ3RJRSuSELf8ZZmFs4AR2S4Cmf7UeunPkBm",
  "key23": "X3u6ZgTJ89mxpcmuW6ChR2NiT9Sni5oujjont6L2Sim5fKBhda1Hr5ZmosDkUGiM4catG2B8vY2psC8DCYg1Trx",
  "key24": "2nUacsU6j8BkcYi1odJKTDnLiz8ZZg1Mo4YYY8PoRLbQnGjN2yVzxgAimEMorhLsJh5Cr7X9yhfoovhpioquPy1n",
  "key25": "4rrhkCPVQvNtyak4grNFBW4Zm2pSsX1vmYThxn4uXxSkJ3m9C2qeuAb7rPmiZpXqP8agTmxeD6QDh3V2VbrFJBxm",
  "key26": "2HN13cmFsGMMtqjfgLNq1FwVuFYNyiFxoUbK1g1uUfpVPftwoGdARDjBUFhEQEnUuYxMgZYYRsVnhTpY1KeNosJj",
  "key27": "4XJzb95GmVo53k5mwbcpF2hACcRTmG8U1Wjc2K9KmjY6pWQqp5f49ATizbShs4xSLzv2nqdUWpm6uE3TSEsbn6ey",
  "key28": "4BAMPvkJk2EbHcyz8PAASu9RW9uFecQ3fVUwfHx9DYx66iuEDLkFJv9SthunWqxLkNP7AaeNpbg5wcVidknpg76i",
  "key29": "32CNkdLnrGDGWMTUcx9vKnhtEEMoAyzCj576Qzghj8ChzCWuyv9LCzJVFrLLun2DkwX6PRfnjEWqxJQW4VpU2msY",
  "key30": "5pnx5kjXV8zdJafhA1m6AdNSXmTWTdoowMpwdQQbgUhrMJtZfyJjdPJfhFiXXbarTwMsLV5J4R5mZFaCTQNfeYUz",
  "key31": "5KUpzb5wKhykuQNkKr6VJ1yZHfG79wCM8aDVxjfUm21iSLQPGxWD8UViFPbH4e1jX2CkyTkd3q8jYJ11aoHXmqWe",
  "key32": "4giot4ADjH1KpgfwjjLwBAUCTMyp8sgHyRYuWr2prEXBhFL4MTWC8PS5qVUZo4Wgr2Pa9vwo7QjpiMxgw1ALfbCe",
  "key33": "4bwhQAv2JFZrhP44jYVWTDQiQysPEhNCT6fTfcsWEhBHwzCw5RovW9wjuvh5xqeGBLKGevmMNirurj5EG54bPtV4",
  "key34": "5ABeqAJcYj7QdPUnZnUg3k4mVqyg8HxmxgbrgRKhPvWVDhCVwr6QTbM24SbHXzv6MokJsoijvUoeo9yMMpcq6uaM",
  "key35": "4cDdCUtm9B5t2xn4XTTkejhUJrub7UGTc7gaLZutGYHJ7zpwJBWpjDCNDvK62sR6WK8oVBcSz19XJf5SckdgAJj2",
  "key36": "pskMrMLtqVZZs2o3sdeNeJQEHthrATuRELvS6sS1LrCaRCaQovSEEVEQw8M4gM1HmdV8tfU9B7a9txMvSod597p"
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
