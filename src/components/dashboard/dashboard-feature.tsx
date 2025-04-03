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
    "4Ay5S8s4NTnLkYpcUXdeoTMhk7Kjcu3U2dnfvoFRxxFg8LnXczDkjjUn3wai4EvTePGzSTM14Z5wTbeAqw689wu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SwLcVoMec6igEmESG4VzQqZYZ6yXmyCRKVyEU1NxosaDTz5FTJ9JsecHoELk7qhoyD6PPQZbPZAA1iCzVjoZzbQ",
  "key1": "2tVLrQuUGwtUaGev2ZLAK7JBJzEWe3GHjVsj5rpmZsvd93rVWD6WTQgrFfh3WchLpFhZk5aH19evi8v2Y46y1Tz",
  "key2": "3CTPwHbtiSmGdbbxoBE5uSQaPB1HR6ckEhgVxdQbDdc1PKFJinucBVyuDfuAQKjqrfN7b84n9USCqkohXvqVky74",
  "key3": "2NnujoLsZhSVB96xeuLs3WwAHydmmP2WuPf3rY5K6UyjhE9Zgsd1u9sKXarquc7XwocXoZGX9vps7dHxUFwKQBfz",
  "key4": "2c2v5vMz6rEGCMnRTabEqz6kA9M9aLCAWfyGEYYzbrBhcPv5fszmq4aynxdfKEcUPJ5LthnQhHCGrWQfcvZd9dLB",
  "key5": "CcAp8kK8LBECDpsaS26hTScgaodu4ArEac8E2AVKC8VDcy5MZsGoq4xAhGAozfEXDCgrh3Jrdz4GYYTu3V9YTk4",
  "key6": "4p5VW8fs6XcXn8vfUn5pS4T81E1Gd8pxeoQVp8poVRbr7ry64qneaDvcP28u8SzEYoyaJP2sHi1iwQhQT3hGPGav",
  "key7": "2iMfXJT2KtVB1UGQfAzEEQiXZtzCnCZWePMT7L7qLdWfAPUND8t2LpBpv3o4JEE62M2wY4tc1aQMfwjEQPrKaFPB",
  "key8": "3EvLcw78XnnTpPbbBhLEw5R8Ey6fjoD1CtEgA6igbiVVJ2ARGkRCvvFfBJ4k5bXDR9qqKmsuQBhav7bvTVxeRHHj",
  "key9": "57SujJLtWv1Ry5aHHfGxbXVFrpubeXAr9nnDzbcgF1N91EsPtRTYEgjzSpDQfg1qzjnhMnuKLoKk4JaeXigpxsvW",
  "key10": "3u9ej4nE6GBrCL6f8uegxVg4L6gJ6o2t2ANhuAQRQ9N3QKCZrSpzBNt9KdV4ZT3cHco61BT49SBydXujD5NURhkb",
  "key11": "5Ta32hT7YvrQ2wfBemjt56cXpZXvUSbppazZQgmc9TJbfq3cRTeyWEYTdDjodEUeUaC2QtEHvLiM6zMVu8XyXdQq",
  "key12": "5d6nXZ2pDnKneWMEZFcknRkFAzgqfQ6v8G6Me5hnPxZZzNfD2x3adN4XDkhvrNBzXhioBcst7uurdAhrYDD4db4V",
  "key13": "44EJ6fhPpUzhpcuHdM77sF9pAZDdCbUJ8ykdCb3wcdcd2omtYD8gqih9BhGynVzmMvJjhLXkZthmPA2quHjNqmg9",
  "key14": "49XGmqL2zPheZRxCCZfV6heddjYtooPjkQK42MpasDdxhHrSMcvUbFjWCDVB6CmC7DV8Foz2VokiWCAYWF4RHbcv",
  "key15": "5wG9r27hyC3HJi1U9aewfknbTjF6nRLvHdqTXvzqZHQaJAQyh9SYgSabVe8YBSzuVThWFihRvh5NktysFafhdTZT",
  "key16": "2LmZ8smyiXwazg9NY39vVoKfr7iZSLFcpT7xCd7Nj2WYDTCeoBro7nMWEfKmZrRNLgCF61ynnjP2x8WVvRF2x3Ug",
  "key17": "2yHQrz95HzLjVG3GDiVkEmkWdf1x3EHSouyjeo4MLDM4UUw5J4w99b5zuB8QtjEMcPTa1MZZKtBuRp69QUgzQo27",
  "key18": "2XLVJv664yGC87MebJ2pzLTSxEY6YrqjnLWovqWgiomgxnCHBHsfKit8HUKJXYJo3mBGKojv9d2K7nq654qQa8bc",
  "key19": "2QmbwaNsDzmmVXxFqtEVCd2KDUpzcx3y5iZyXakRHGsgEmodMGRvp4EKVSLdanKZRHHhMzg1n2tD4Y8D8Dc2hbR3",
  "key20": "4NZmv8xCJf11uZxuEoN39NH4rDGywQuKPKt6p32xkmvmFkGxoMKAvqahGZaymqfWDTRFPd6WvJ9Dm22qvDi7TN8j",
  "key21": "5b9u7AwQaxHAm8J8Wrsfmb2sD9piPNvZLV2NePb7fJdju2A6NvG1hEv5QucfmaUwdKMyUHTZwyWggkJQf7XyrEjn",
  "key22": "4okikWPgsEYFDpRcJenph5s41BRT51Gen3gGUZg5FhaNN5dundvFpCzbgP4Z1eZPwu1AcXgxPm3ZApHtufjrJccz",
  "key23": "27zix1QURs2gTBwwffnceKfBn31W24VEM47XamL6KybsKduDFbAkVpW3A51Sh6vJjQcwwtUDgBmvxYxxXQXQGHnq",
  "key24": "7P7huLfc6UJhdS2H2x9xHM9gg8m78feiEcJGeDhJEPqer4eXsj1VDzN22YZ5vtsQcBuKJnDjYu2ATVweoeJ17Yp",
  "key25": "5A4cQjXbLEZoP4Q8AmJctGube292qKyLPCMYARTK46fH113XVWJ7yNhbPESC9aRrLt5BJfV5U1XUiYGurg8aWE65",
  "key26": "4eSAL1RZ4fUBtqAEMCj9YhBZmsGgQY3eN3iGAA7ww5EmvLmFgSfYZr1a9CghZHBR3EGmWheb1DE47smR1eZBbwTm",
  "key27": "4DZJtVrxxKhhiLxRSRab1zAnLCjyPNKfphafDaKhrckYSYCFVqRZsYX68QPrnfbRN1Rkj9es4UtYrzDfo5HPni1X",
  "key28": "3fB1SMqxE93KSvxPgPBXT1Jg5vD3WVtFXeTiwv3RpALMzQY1LUsxAshvwFQrP8NQNgP6Vrwu1BkSkFZm7iokE9AE",
  "key29": "2wBiuJ4AnyRh32voyPYBoXr2ELMm7QuX9RGm1EYeiBabY2KeQmhofzASxWWPcxqYQrPNzDMARnzToM1X7tFQGNGx"
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
