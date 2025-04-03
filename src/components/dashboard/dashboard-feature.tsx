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
    "3kkoXpZ3gqYUqLsjewUF1GYnu9AANrzm2nbywDsrUt1GhDGr9mGh8z8WChXH6hR5F17zk6qpvxGqov2L1Jdmki66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "529gLJyCkyRyCjq2CF8YgY78ukK1VD1Yu4rDgdbj9qCWfU26t4VKC54cA4wirkmfcRZBZj1cokzdypJFmn83ieb4",
  "key1": "377i3zrufbDh8fZzeXA85aJ3ChQRjbUXjhcASGbVG8wpfu8p6Vo949aMZ9y78DdCY3yC7msBBpebXs1rtu41kMKJ",
  "key2": "vY1To2U7DKr1r2ErfHbEt6oZRkZDgNfjMQC8Ldv57ZW5YqUoq4T9zBzpXMPGJaeEb4hdyBqEeLqq8HSYDpehSVn",
  "key3": "5Jkdt4YbaunKXVwfzzhJ92WWn5XGffShtVFwy5Lqv3hsLVFF5DU12AwLiXmRtGYjfdqe6ZEiKrMpBKxtvscrW8qR",
  "key4": "2ZN7BFzxgc1ZL8CFRSegaCyWUp3W28tWDCpB9PunWvvJReTgwnHQgBHpdaTj4fg2ZtmwDXLH7pswhcRbLqLUe2TY",
  "key5": "2sMA6gmA5VpnZmzXeQLSS7o9SdGh1VghrX8zUJ81snFdc4LVgU9YNXQYiPxdiAvkRzJBUGQb4WkjhXztn8Fh7uah",
  "key6": "5MKFdEDwL1GxyvFTAXGSTtYaEi2eEPDECHV9xJBsv23snRHKLzefxq7rsAHxHixdGQ5MD5cs1f8iGSQTSxsmASCW",
  "key7": "2yYnW5aophqsnP31XCpKZYUQMDUHpS9P2rWqvduXNimwF6GzPHekAmwLdi4LBGzGR3T7FTZi8yuiBNCpgq61dAxs",
  "key8": "2pnYU3XfkDoQCupArYChoqAt2KrWP9xnfmazhaAc1n3XGiFEsjuDdMoo21RAgsXoqXS3i71CUDK3YNqP5rPBn4xF",
  "key9": "2PgfPrBCZLePkmTRws11r5zX3Rnj5KRVtjkHrJQm9niN8DfscoY7ch3LJWQaiBoaRNBFzZk87YLsefwnBWZje3U6",
  "key10": "52vR9suBVdztHQM3LwwznmoKHB6K6xNvh95RCiUEbxzxEkJPBULxm1gwBbEEyjxmCF6QMwe5Vo4nVRmXf5QB4RkB",
  "key11": "4PDTEuWwJzFbej3DnqNtTrcXnCHw1Sqsnishs81hUBGKNDWwbSpnr8g4iXLiGNb2ZSvGgdFy4CnWU55bwuF9mUMe",
  "key12": "4Gehgnr8mT8Qt4opLhBz4SsuqQBxbNocAGVhFw63oFKHpsNoDNP56RN1hoog51BGgstkHv6cXmVbbR74PhWJqX9U",
  "key13": "3XHboPZchoLm13ntDgzRtsCroWo9c3P3o1CsdCXUspf1ZjaByxarNUWF7BBPqYTubwavdEEtSHo23zdRGMZUhQrb",
  "key14": "4GcwKXxzHpfMfiff7A24ZVeP9d47ZuuKk6d7KMaDSYaeeRnEN1qTw2RV7sapMRKaWvhuixpCgzL636uyBHoxqY3n",
  "key15": "4HKHup9QReRrsGuWY7Dc5zY61VumGexpmiuFWxVzjc64uWoqNbZcsEL1HoXWLSWcTQaxponPpYJgvK88v5bhWf8E",
  "key16": "SWcwQj8Ln1jRE3e7jE6qKWQ5pc3dX3T3mgBz9h5nGJgGRKtpeE338ocz7nV5v3hUFQSkU1a3nkHNqCnCgyE85hh",
  "key17": "3HoBgdECRPFTQ9eT5SxWyk9Q6mypFZq2EMummLcWMzJvdru2ZEwry8cBZmAwy2MY3WZDr46TbmQhnSveyGYFmDMh",
  "key18": "cT9KRQKNUFiEeBePR7bhc5TXRn8R73vR2V21cyvX4sMqWgMRFiFXS8PuGaUZMffweDWqdLoQVvHJdyZWwEV4NvL",
  "key19": "2QujcF94Hsa4m8BcNf6ao1B49Hy3k2uSrFKBDUV9mv4JFBE8TP892JWLXXhRPZ9HjBA4ieYmj2exDkHkNCdSBa5v",
  "key20": "5syDCbkMYxeF17ikLGBzTYCFMCUty2kZcYXCvF7sRD3swnd8814fUBT9KRx8FU1Hga9zb351cQnnbPcorowqxAzu",
  "key21": "s3766j6DphSWZyFLSrvMcS9pAFEhKyWgqMqWaLH32sMmUCSWbMPk7tuQMEfhZxdtsduAooDfRMBu3dsUWkjF7Qj",
  "key22": "5zJyitmztUNYxhnyxjD9hDgT4ydaGPJck6G5C21WVRMKCeRJn2wKkp5D6kQTgZSmY2x7gJV4FxHPt6h6hmxtbFo8",
  "key23": "5gVgySvHixP4MdinC6muSgxfhGMc3VE1PDDejc7m6cs85yyr4nj1aHe8LK1RxNcBDhu8ts7UE6DbqGVtAWPYHg6w",
  "key24": "55RtH2wQ3GfZbr2AWKNwgg82ZSeGvKwwWh6ghSrSUjeoGsaEajfKxPxf3ZAZJjkWTcAYtCHH82fz3dzw2rsJYbBr",
  "key25": "4p8Jzt8DfuCaZ5NXvEVju81o7ScDGaFmrJS3TYJiC1cFmiF8UWF35bitUQ1zT18YrKRSPikxdbzwUrUHFnkmZsuL"
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
