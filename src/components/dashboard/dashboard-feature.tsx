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
    "2ujk9YhhQoV39ineoGjHjF5fzeG91L6K1FV1GsQ2jeBY4vstXXUuwhCbbWQwbU1NSjFZS6XpifCHpRbhyPXKZwTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vEawPR2QJkwQPZV93MgJ9byLKBxxGpSeyoamr4S9KaxrkUJLMCVTj1x486ELtcJdFux2LxEv5G9Fhgqzx1CaPcG",
  "key1": "3xusWDatax8ntau9YJLXqrsRfwpTSZzSpDNQPFu2J2hn2ZXvpmchgFswrS8sWetUDq12VCvWCbxkcpQciQeC5B14",
  "key2": "5kvRGdqscVoQS95F7dWN59i4rhMxgadgWQXrjcnGt7NppbnEaVERJH9Us3dqXh2gMsxqv4HyZqVvbagwVdJLQ2GW",
  "key3": "VSV8FGerVVSdiUCjPoQvWTRcEFjRiKE3XBMBCspq6pttYf381d5Ci1JmNwyZS9P7Rdf6HBpjkKnKYXuHjTghyxn",
  "key4": "49Uv2pd7MK8Jn559phUyWLm9aTpxtXXSwF1AGsCTNKfX5W45x2YSK88G9EVyadvxUxTYJR3ST72imvdzgwtjmABH",
  "key5": "2NdYgGbMY6sG9tUTc2MuV4Jitz97ebyw9f83Z2Y69EKC1der2toNKEsp7BPz7CfpJJYk3KJJKoEbo4K3DZ5Nq8v3",
  "key6": "53pbdgoSSNGDpBrc2j8S8JfQrSqyzoNS3e6A7AkGPZhfjJ3kYVJt2TKW9ujxRNfaBhdngppUYpsWirxRLzV38hap",
  "key7": "5L8236HzJaZFQ4rAQGkxLg7YaRoY95Ti41WDGsDVBvAcYnW9bjVyqhvNC5mMsGVmJK9StJVCvKDJLJjmPwzeq8iM",
  "key8": "3L8eaUKCLdobxcKBL5sotUkp8YXGFEeFzGoAbWumn1ELi4nTAo4Vy5Mo4ozz8dPXnRhFvbf1mRJevcZTBB9krHVj",
  "key9": "26kdo1gpApLxeit5NtLKkJrj5Z1Qxrn3WijZshJSJmdTwEgN5KGSRWh9YbfWwZDe8X61Q6zupPSGo7XD6dbM6Eib",
  "key10": "sqtWnPw4kuyTmsCJnaQbUM6LeutDKH2Ws3MKxJ6HWvHPb1Rpo41qPnKwrUCbmtfiWvN9DGrKsf7Dzwha9kfRaFf",
  "key11": "28ZVVBCJiE8XtdCnUwVWnnDW34zroz5Qzu2pVM69YioCsxeTucSPBa4AJREJLszKNZdDZFjj9hhE5VULgqYqotfh",
  "key12": "2RVefxnTXe2kgPXUVho3tqJMY5cKgZd8U3snQiZxdXSP5erUKPzuBVzA696y1Ch42sWUwtP3rGrWT5KCgskopfAG",
  "key13": "2GY3qvXVYdvPsXyELvM5cuDsQPGi3Z7jEJkTNBcAogCMTyfkfonoW2SPT7yjJTMij3TqsEieb9E38UCghDFQBfKm",
  "key14": "ajKhhNAtfmnSaNmeVA2xp2inCFrBTqjpQ7H2Knx3CcPRs7ShDBA74f2F8NGpQcUEN28D4WKZMdqiRCGwUriZVyB",
  "key15": "8tHqAhNw3jTuAoJwB3Nj3ZgSL6aLUQQFL8MJz3XWrTRfinVKpCFjs8DtYQJk2tJ4mRqPZig273Rj9t8jBgHKvcg",
  "key16": "3UdG6ZkQMzeHkt6E9sp9DseHyvC1HFKyFAadwM25xZbZFJUc8VyRf6WpWBgQbEZXT46hapP39DAiq5nzjHWgZQZ4",
  "key17": "3X1LPGveHwgaezTsDCJ6FfNmpaLvE5AUh4ezoPUoRRvfHLnGbxLLbkBXtmKnQNMDvyc7Kvmt9WT6FyKWkFqKcfQK",
  "key18": "2BKL94Dtnm72QcBBi8JkyLBPuzuT4NmnV5dGCXgwGXWX5y4jaLBNZH54LfMdgeUbdYU8kXaZyXW38cSt9UcHoxaH",
  "key19": "2HUh9dKMh2sg6qAuYVQfZPVAqnjjPhdfVFwJQeu56eQRv53wZLU6uEmwntMAuqdQbEf213LPnU5qFDTsD1ZPtugE",
  "key20": "2Nnh56vP4Zgcjy4Ey3dZutHhTGe32eha9kiPLbph2HTzasVYWVwrS2BeCtcczeg7XEXj5Y8vG31GhUa61qLTczaX",
  "key21": "2d5juctXV5ZRrKWnshcnFKF3j8xcyuQPBJ3vEcWDSQPFGWPAZEVg1VDZm95nCEjcytkW9Hm8xfz1kC3uo1GSifVz",
  "key22": "23DAdJYNYydosg738p9AHXCGazYP5G8a7P9vfe8e8nZWv2jLtjwXHtHi6FP5YZrHY1SBQqno5zR8e9PiiJhBPZQ3",
  "key23": "4tpK4ERc12wX4621XiuYmf8ZQTMER3g6KqH3v9s9ytECfUMqE5RtwRGPdf2WTTjvSPwKYLxsE7iuomKcvjNB94GW",
  "key24": "5K8XvGNnd8vUXEZMmXgMERug98DSTRhAQmG4ZWPCxQ3dCHiWe1KSA9f5foXXGA8AwedKSJhgDUv9TM7hjYPVr36R",
  "key25": "3XJxve3rrjXGkH7vixwokGBpBhN9NpLAC5W3X4HSPQoVv3yfrovawWU9vrgfetSZaTa7A6krgJgUXMmj1rdVevZ2",
  "key26": "3WR8pgcRDaMKsDBQbyzUdp9xeDBfqvVbGpayiEe1qmKUW3tvnDkB1GKrrJKm9q3EUHDgm9bTG71zfZtyZ2PGQu51",
  "key27": "3D5NbV3bAGnGsfTHAmfbZ8BbYgav31VgkNt7ZFGNGn4UByDasuk6qTNiQABuEcS5kQrTQvNYgFPANr5dVyfWVPLS",
  "key28": "5RUJdXB7strTWkLEaqJcqEKfEG28QEB5EhPMFDCyFXjcMJhnedNNf1zVpxqiUeA9qFc5UGbiUmnyaEsrFGZxaGYR",
  "key29": "3AAzJdKRiFzPCyf4PLKcM6BrGfrsLmcnfqp9Qz8w5MMKjE27Zrn4UV37UGsLfbbj9wPgh1yzPAtwJPQjJasMVSU7",
  "key30": "64XmPmoZ4LMEZxrEWZrkoci8sms6eBe2DwhPB43zqYaCARPuL19wZqq3wjm5hVCgnaUnt7NE3Usjzo2Eu2G8U6hc",
  "key31": "4z1HyE4mPJEHvQRzZ1gb4pqfTJ8oTo8daaMsEL4SYq4EGUN2GzhrSfRDEyVwuFrHA1odVMpSf9cAvUr6QVQzJk3v",
  "key32": "FMqKs9HP4T5iVxFuq4JuybrWdtr7ZsxgHfTeAeHbXcCthn9XmiAL1Au5oqEccU4kWWLSaMdcGMiMi55dpaWJ21N"
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
