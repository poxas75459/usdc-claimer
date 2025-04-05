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
    "m3J6W7MDfrjv2RB66YvDBwDn4GgorjzG3tegQNAvPGDGvBtrtwVek2o4Xet3mF9x6ZGC7Rz55DQarHpYSqgAVHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NDhWEXPNH7ayH6MzX2YMDZ6KCwwZHWAZx4FjcRDS3N1xYBQQKfsWTi457qsbUHGqeVQ6dzuRNS23mqoEr7z46a9",
  "key1": "gh76htrF3m3HWDJZme8CS6kxdUNn4jjyKwvP7XALtT7LsPMyff3L5AmzaEnud5Ukcgvw5MrZNj4xefkUrs2xn5R",
  "key2": "4J8LrEkHGXnkjBvYtFakwEBgVRmXNdPyG2vAUmbTspxWXejq3e8YoFxKYGHFytzj8Yy1PYvNVN3Hm24ntmqsSNgQ",
  "key3": "55GVyH5QRmXtpjEMavQa8x2UxxKeFBshWaMwGaNeCmvYrKGEw9CHgT64uD7fDxTM1dGKbPR6Uefy8U1EVoHMR25M",
  "key4": "5saFYcVLqTwfJrkQ1wRTbSzzhDVKdJChsjGzW5mfQMNqjPVF7tDk8fPrSNEgkeRd39r4LyzPPeb1zUZTwHdkCWWp",
  "key5": "2ALxFjbsBrvgbqyfBnMWaMDYsKSD2eUDw8JyJ1rLTbbJBA9mc9wbGa56WJ2G96eArH8zvMCBsM3Z6uNd7J2zs6oy",
  "key6": "5oLybtJWUvp3c7waZ6g3S917jNCdGteZhUHT16KhMBp7SBuLU9MaJ4LavPjFoiGhALv7YxHwV7WBPKCKc5G2XYxX",
  "key7": "4bcwF3RGQCkbhxsVLkajbqgEfu5Laun422qbjkiRLtrQmqtAQ4hgcKpuTU1kdaHqw5vVqGgKG9Gi686a3C4YcfWH",
  "key8": "PTPMgZVBb4uCaa23X9zhQCxG4WLGWG9SkVMCUsCnNqUtGpeeMPduP7CKpKrQtXEqSYnV8WN9ks8NJj9b15SVJdu",
  "key9": "5isyyQW9NiMszkLZrocKihnJ3bKizbQs4SC3Kf1XRbuD5Cdv9ic57dMsiegTLWSLbQXvia9rX6jQpfsWijmsGZPV",
  "key10": "27syBZgNH3Mkz3rVujRfxr2HK5CSXDHgs4jk3QmBWYrDS1qHPKkQXzcLPmYHer5VsiNjafVfAotBuScm6bjeBi1m",
  "key11": "2nabTNWTU1QM8fGsBv43DiUY5vn5stLUCSEJNeVXakacDWEzdMZMNqgnSS2gM5u96RUoC5BpC7u6UPodpXakbGzN",
  "key12": "48g7XkYUPGtbHxXaLpmbLD5VLSuXnFaoDzEodibG2p7RDNbcSpLFjNpQXYXeRCWgpge1DzNvLqFkftBrsAPwHBZ3",
  "key13": "2e3gPXDpncRo2n5A58fpf4J1VRMrCok1Nk8mnDSwGznFnpmG2CPRcJyUWCsXEBPqr8EtjrcYqUitERwPFBgNJjyr",
  "key14": "66SaqmkEKvfvvjVk4MbiFQkcgBYYvpvJM17NVKxagvP4CBBzzZ7ECX9B9VCAULXWRkJH1ZiLNoKHwkqko96WNhb3",
  "key15": "3fBqxyw1o6MCs8yEuSbKrFnxqJvNKiRvBTiir4PnayrhGUj8NMmrxtoVPGGQhKytTUg353A965Z8iThEXQ8Sosgm",
  "key16": "3Ct1DLzmKTzZPQMzSQQ3uPDDQmCBEJLoh2K3RP2tAF1nowCnYrTtCweP1Xn91zSuV9DaY1vwo1vVJJ8hnvduw8Lq",
  "key17": "qC5ygmL7vrgLVSFTHJ4rpfJFBLncVPym1AFxr4LMcXpqHNwAmwfeXQPWoMZJNGGXSQTNTptKv8TUSL8QrNbGEHf",
  "key18": "5hgYEGsM75Az2EfHAcMGu2RJoyUAHsVUKm2SSyDFmnAtQTr97gVUdPh8fZzHPrmba89Emv13WkcXAfHDvYchr4TN",
  "key19": "qDD5o7ckMQ81ErnGSsA5a9Tr2Vnin2tLLHTKWTEbp9ayc9ACBkQTQEHpcyYGuWjXr7Ywibpou254PWiRbD5Pvqr",
  "key20": "57JArkyhi9c616k44rhN4qkV24fBsbVUyKugWMUaKdJhacnzCp2fLpPwYUeztrVN1vaUifwJ1iYtso7A2qDkn4mq",
  "key21": "585cYCdKC2t8NijLmV1dKaD8LxxyZcbMjAZrnwppc1W56A7NQk4fmC4Sxg7x8TuWVb8VQqyptsZ2gZkeaZGCKRsG",
  "key22": "dZRjxN5i54NbjFKNtLSddStaXESebuiX29wQrDceVF2XAdD5F4aVUeZ8wyxAyEroGbEfUQQTivUrtAnDx7igHfQ",
  "key23": "3xzAx6HVUQQ5W1TpnDBp44xT9LmF6FTGkscNYWGBz1oXYKnFMQW5wSBp6wAMPzo8sr6yTZpPgaqwdoXYZxwGXPhy",
  "key24": "4uS94L4wSzTgNZ8grCjB3sCmSiRR4YEhVKDeiD6qH6UcRXZgWoRAmdy2YmLPjJzPd2uCorjTPNoHp455jeaUAHbx",
  "key25": "5XLb641F9etJVamAjHqbWGC4FDf78GBe93bt4NP83zXgJKmbUMytN3ZXffSY9MVtQpohSnk9Dhco1TsbFmdx9Eja"
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
