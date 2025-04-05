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
    "4SJ6MhLZHLasB5PBx5kvZAwDMmVJ6eTTLHBrCuqmM8GUEdDG8VPmJqxTYR873EF4bgJWiSMPhL9wBRQrfpYDwWLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZzqvewYmPtufGtHoCxA74BjyvnWBypCENoBzdUncDW4HvnraqvL2uiKcU5uDFrCH9VAVpxXMqHoyP78bHuUi3TX",
  "key1": "5vCvQnYNLWt32if8VT6BD4FcXg3eWCKzMFUckunQu1LesgmZBcwZjsung8Ce5gThpWy19gScvjmEmNwUT6coQqGe",
  "key2": "arDoGTe4LCcWidXQtuhap2rj37Tofb9SL2iwHtuHNNhk33URgg5au5whFutzpLQZV7FFUHAqYgdrFN9CGw9hBB6",
  "key3": "4cWPrTjNYboUZEyEibo52QvNTVxaiSpDRPKxXvogyP1eqPZVcxc1fU8jT49qeoXRMmsPmmsG1qUwQxmdKwBKnZBC",
  "key4": "34aZJS8LPEbv4teqzACHaRrWp9oaDE8ansJHVScnYd2iSzJ62ZMFiuxntsxKVc82Lm1BcAW97soPmji6wdouBPck",
  "key5": "2Y4NCp4qbARaJ3pmYjAuwirFaeQVCkCC8fB7zWPdWBu2t4vpPHMLgMJp45LZb7kptdATmo2prnumkFuYUGgMdFZ6",
  "key6": "2ymzd875W8x6bGN2muuxMsNntGojh1ig1877bL1A9jLMvscoGBz35zH5WLxcUL4dFWbbUrVqAKn6AofE3TSrVohw",
  "key7": "zyyzYxdZai517NpimmKGjGujAA1V2YRwAJQgtRpYFukjRF3wXHYhTZosSok5J1LyBFkF1Z7wNJENz6eQ8aCmHTC",
  "key8": "51Z7qdtsSGUMZPtM2Dgsg1ugg9fSK11UZ5Pj9Bv1WQy5i87dQDrZo5FM6cZppLjcRZo2g1JEet55LRM8eA1wjqvr",
  "key9": "5uACbduva9CZfH6kNZAmZD1tgw5cBz5q27cjgz6wgMpxLoget7MvZwyEX2HBvZh9GNnuhe9secN5zKwSoZhQ37K4",
  "key10": "45GPr6Q8fimyioPQZuzpzzKHNAyevZwNcA35oqxL1ydDLaSf7DDg56K9ywMf4eRBakJ82Lk5YRDT5CagmW7ekVGs",
  "key11": "NqwPMbdfNZq6y1roHg6DeiUzjzffwgiYtSqqmw4aj31XtEvB9KaEX13wD4zJv5n3HNgtMuAXBtH18f9D288TK5i",
  "key12": "21UmZ8ZPXMVTnFqHgAAMrCtLCLUBmPcxk33kN6PQUXzW6FDYUBknAaq29NV63URcHpg12dC169GY3X41RkZ28Sxe",
  "key13": "4paNVukfbqoSBsv4FXF9X1P5GXwXLV5D52J62t8MbNB1kYAq8DUEQkmr4CVEC7GoQGxhzEHkBfnoK2S32zsjzwGo",
  "key14": "3A7HeWJMGpfpfWXbr4ibU18CbXMPcsB2vWXEmaDu8f3LULXiWoYtWFpAwbqyr7tYzDGJ9edG27GjZ1zMsgx74Hf6",
  "key15": "3hq486zQzEcoafVFh8WPRmKosq9g3Ud8EQ9HeK7nVrnK2ZKsio6NaXedPUEy9BAE8ZG2ZtFC9v9eQ4pTkkbvXkRa",
  "key16": "4NuDNJJvQgSRyNfGJBeZdtMGDaPvAn8jyEsUoSo4xrhiB1YuJ7KG1WXcNzdAqS44EZzSvSaUaFizFiTSkqCXBkEL",
  "key17": "4HzBuZs6cNSf9qRQFvdkv4S29XQmqEy6gGGbkq5wJ72B7aupTNKTRZh5iNpLAm2wtKPW6JQLvgX5XbMmXQDSf789",
  "key18": "27nZkRVBbjSgs9hS8KxBEtDoptJ6U3uSDr6uYMehTbCwkqQjoAYnDypPsvZ6S2vmQy4TLjUquAF8fnjbmU9whxwn",
  "key19": "5YweuQnE4iVk1fbbmat2rcLBtz9nAKUknJdeUk97WELR4BGZgbQ3ngedNq78U6Tr6osng3r1MQWUfT8KARvwmt4w",
  "key20": "43skkbVGtUn7JH3pv1Tc2oKk1MZ3xiddzNRnUdWD4a1VRb5LudJamv9QAr5MG6M1NyRJaeTzm7J26ag6a9EWLMr3",
  "key21": "2hR7gESMwXNWveLSwAat8mEYXM63Wx5pVf19Jo3L5Xt9JwNJd7PsjcQXjHzFNQX8CrSZkbCWbHouTLhGbwrHiAwq",
  "key22": "3C1DzJTE6bkvTApV832vSUE2vSDg7u192oB1fmPG2KrNcu9zUjUFH44bXpGz94Jn7VRMmmyTFQGK4F7V3w8d9rQn",
  "key23": "k58oTPWbhZafDXQFCJZg2oHBQgxQXtEcK3QcZiVzxg57yMo7sC8m8wcPuyEjNDEpRydm4xDzAyJ4kr2FeZscq5d",
  "key24": "5eECS4UxZiT2SoU8ahLV6soZink1SVtDE9bYcnYCw3p18QRhiZzNCcPC95EZLnmisyjc5iPiNHD7McqkxnHu96SC"
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
