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
    "5APUqVABg21WzQNqEM1SUDjauEfu25v3bwtv4EXSdaQC6qHY4iQzayarusjXMXmK2rNn5AYjtZ2pPooP7J5G21iY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ypCH1bJH5CbaZYH3Pn1U9EQG57Kv1q51TYGJ2sqoheM98bUj4cdMxZT1CzpUMZPxGhenLrbyP9zVB1T18V4qic8",
  "key1": "4Sr7T8WPjoiaxFvPYqyduXa3WnjJ9DGrrgc9f3o1vWebpFkD5fJfXRTAjSu2HMdB7LgRJz8iaqVsCGJSYei5bpXP",
  "key2": "TarKHRiM35xKHbU8kfQePUa64NPpPZcyqA2d2Ed9RhasV5jdviv4kWkphDGzVkhf7V2HQoAgNnpQkpSw6oViSuf",
  "key3": "j8SzGZBHQjNxsY18WeruuBeo8LHvyhSGkQKpqmKgWgoHjwaSgFCrxWCDAEWPunNkxj5sXTPMMmxEEguSQ4eL7uv",
  "key4": "35293DwBubvZXWwgq3dUruVXiqx5A2hpLdDvM7BJvxsKd6kexn4Y3cFudkgzLc3TgKPTMJMJdod49nMAuRTPUzAG",
  "key5": "vFbkXgaHFyQS5YcvQuLZwx6SWxaLcvEUFiDfDWXeJoGSgqnvzsUd8RnyCs9AJV9Kg4sJwnx1yKz9Q5t2mWo9a7t",
  "key6": "2Gwxaa1HHrcDp5KnVArCj65ak8D2r4sSdBAaNxCooKXNJUpWLR3SqZnUusM9wjK1HnjDj7MStWyUtQBdChUMnZm7",
  "key7": "3vDbwFn7fUvC9toCy3A6qngDaSERPTGPn9rSjMs41NB4UEsMHgKiZXfU9LxbXCKFijApCnBZP33mt7T5JE6zvTXa",
  "key8": "2cZHe2mDETU3JjeNnpyvECxJjebYQ8mVAYZ2MjxMLjHAgdvDgMCwiQUZT83WnqM6MiY6iu7V2USy4mW5aCiMzFs",
  "key9": "3RvvwRBrxnMwpV7eErcapz5yj2bmaDViM8BqrCMaHHMZkzBYh3wbqPxDHt4Fg81yRXbszEPpkadvkCd8VRQqtBFZ",
  "key10": "4LQRP1icxDYDnqkFigV74UBMSihZnVsatMz16vVH9vJrJMnCovsAr4yVhNJkjU38byYWtwe5PKhUvWoZmJskidHz",
  "key11": "5UiEJ5VNSPSCN2q97ct4yZ9B3CySaqiurmTfP9g1RQeWrdgL1Wn8XyMrFB16R3KUnEq1bGKbxmFhPrRfTjooGMss",
  "key12": "2cdgUBiahKU7aRUiQuwweiHj9guigVPe7QJCHPNSL2K8BJgLLLRmk1Qm96QLPd3XKM4f8mdJGUxjPgadq2xoqBFC",
  "key13": "4aYFJmutTqDNq3Z6ppteAX8NmvHdB9bSbyjT6hJGkNdDEsxWgULUDxG2V8av9C2sqXyN7DfoawyDR8KAnEdBM7pT",
  "key14": "4vAVzJG5QSzgHjxwC7NEUC4cQAz4Rak13UQo3JkenKrkpxn7bnzRyJpbp4TygsGDiMqZ1bTH2U9QNuoMeyKdTfci",
  "key15": "3HZHakPX29CN7Svi5a9zDd6vnnvjmKDa211wKMyeTEm5NBApNSFVrcQTDUyPec9hxCZpXyu7JuXynbgnxhuZUDgK",
  "key16": "2XCe66kb8v4VMTmpY7mMBtyNjRzzCg6ANsNHDBSFqRdrp31uYYCQnRf3Xc8N5bQRmGhJQ5Pa21wF9fRMZAXMhhZB",
  "key17": "27WBphiEH1EgV6rTLgF99TEpNhdBG1W1uQJttuc4R2noQvyLh3p533zWK9vNgkZKkmQujMcg1Yfjj35yf2FwGu8U",
  "key18": "42BTDLumseqjLG9eGpa1AYpjvYJH7AQWweJ63ah2ybyHr4R9MpbKH7kPF4fuvQEcM4KGACjdzHppr7z6kb3noeoA",
  "key19": "46Q26nzRaRGJPaaQiAEwgDpRMi5VYfLd9EPe6pnFrn5Gq2V4rLcxKT8wZ1FsTDhBbV9AJyZMFPM38pEmPMvgbCr8",
  "key20": "E6akWLUcyDEMzdMbzigiCg1R11TTUKmZZv39569Xf4jLTNwyQoSErKU5uqMmKrLeumQbanDjKu7ew9hGiEowhCK",
  "key21": "YvWhmVUAqDS2cDTRCpgZk2jqksj7ezSvtWoYh9DjcZyLVfLRMNNkRHaGUDrGB9u49eSLPDWG2YkMKBnum7Y1z89",
  "key22": "3Tn6NWYXNrwUkLTcukjNPJ6WhMmddQwPymX99YNwam1j7ziq6a15nSWwt9hTXRyAT9yAGdTUgAo98NgDaCcTAdxW",
  "key23": "394mMeo9KDrB7TGBkwohpCH17AtWA5jaF6ak8JimDrLVggW21rmjzZpcVLaHWkB2kopjYfSQ9jZPwJoErtMEDmz3",
  "key24": "3d598qnE4Hr8uKjjmoQbXySZD2eBU9yuLh5x7ZE6EA1h8CT8dhbnZc42UwFwCCfRQYaqZoih64VZ6xVGZLAdjax8",
  "key25": "SySnVxC1LgCwBMAW9xkLbxTGkbj8mnjKfNjQxJxVT91iSCdnm3h2bqDRnE3cejVdhhCtPXXr3ooxEmUD3vWmqxk",
  "key26": "2TCqBirMH3FXBWmz9LmDvRNmmuAureMUk6q9N2sauGmtfEfycZveEdq48K2BrHgZa1ySkgaAR6EKcwBv1Mtxis4A",
  "key27": "5iRZtfJb5qnD9ppnKCyDz4V9grfy9rYeTPpgue1YGVgCCn32fYQvxnkevCqx86btsoMi1m6aDkeG8wZktgACGPuV",
  "key28": "SAzjuRmfrZv5Nofgh75sedqoxUuuQJFeXHDZfTNfPQ9jRxx6ty92UdkvxsUETwwkysgQmReFzxRsdBHQw6euvr1"
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
