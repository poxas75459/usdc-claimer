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
    "GfBULBbxE8DXYH7eExDkcGNnBQSN8j5S4YamQ3XBstXPTuww37QVo57xqUYgooWfNa551ZXRwp1DMS6VJBhEznK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37AXkWZw78gTUQrQJD4CsfpTFjnSUrg3NFQfC2Xv7Gef9virKX6CmJrTwfWj6WQGmWyh4UEifJjupfAAzg8n6XNS",
  "key1": "4za73ejZAzwnHBHoqhKxYxgKvRZKEQDqGLq2Lhffg2QEeFidgw3krqZLFNwpgVUtbUko45SDdPM1WuDrrre39f5E",
  "key2": "4sAaCqjsawsHkXYRAUJhSo1oXLk6NjQwEqNzTZxXLHNhLMaFUtqSCGGY4DcPuyB9tQEeA2nYEEH1XT5r73pQoqGg",
  "key3": "Q1GoPgeSpyKe9p7d6BgDW1E7UwN1bhLW6nXTJ1Qqovj4ijgEbD4VZGKXqzwC7Jo9GqxXVb5nYjLeWQnnP37eoEE",
  "key4": "2yMN3mV6iSR4kQZKBYAaPa261PN4o4WMcJfN4uLZf46Pc7XBne5MvRC8hknerLvJm9qXapJ6Xhh6L2LT8GjVs8hJ",
  "key5": "5v4XEL2cBxTzNQtgQMEAKZUyNKfqDrVfhjonPda8k9QBE5gLJb1xhVn19EfHT4CyJRxnPVA9AEJifiryQKySgJX3",
  "key6": "3adXVR1Y3erj86XhZUqfniReNNKvBwYXombrrD1G6Bv5ecKCC344gAZpzbwxWKYH3afZfGSBZ5xYLURZyyBLNxjp",
  "key7": "4QeWA9NzABLFh7Tx2XxDhfSxXbQ4P5QKmdkRWaQ3uaXUeJRCAT8tk5riDevo95QZgDLGsyRLqKCDDSXAeuWtKRH9",
  "key8": "5RB2dUoAXEZB9AMBNa5KNrnovrvRLRSwnmQSrQTusVNFUr1ATVVG4mFLR2mqMgHAfhxU7riNxeHkDDiCH6vgLFiX",
  "key9": "JKtWSR7vbaqFiwzWEuZh8kfx3UL6ugJaBJypxFuNm2kbaKhS8Vpn3F39QQ75byx5GusjLjvohR6BAphDNdM7vwb",
  "key10": "ASjNuqxYeC5KUnVtGm3SFnTZbUrE27trVS1DCQnwKwofWXhkZ9WAgLJZ8x6FTbPTRB39vTXfPPEGcWdkDy4qEdW",
  "key11": "5gj2Fmtik9cW2eQo4TNrMizo2m1EW2SBmf8PN2qi2Hgq1V7LC1JAwMHRTSmjxjQqRQAsbcoCSwmsCtjMoUvbw8m3",
  "key12": "2cu8uGH5CmXU58E4cHRrKt3dZ4VT1fp1EBUgsjfxPVcNYuUsCMAwsXJbTS3CDouW6DQiqQcKKPy2R4fS2Ld1A3N7",
  "key13": "CDPr2hqvxt39XpXiMcWmx1Kp4k5iWYBoEvuNGiv6fmSnidBcsmv6wF325NnvGPDyrBm8XnqjySKwDGzNKEvj8yN",
  "key14": "s5WZjFCa4kq16XDD8bRnkQ2AAutuuM96yYdoMhimYt5UrdqxFvqJfGfUd4W7U3weyaNiQCeZNEJq3B3Fy8gcsy5",
  "key15": "591jubLsi7CwhmuEfeRgQsW1M6VdvTdvL9tkqe4hhhNb5TTV4KM7W1MgsQnHggfChiRZporsBHTDvK5R3uB8VHHf",
  "key16": "3ocvjqXEhiwfT6siaYZb5Q9HmScUX8sXW7XWthAcDv1hVQ7gQ6aG4SUceb9w4hR9BkLUno8raXRUut1CpuQgsDq7",
  "key17": "3yrcbFnD3V7mYPGdKZ8UWpjYRzcsiyYrEpn46F3y6U8kWgNwUD8JFfLdc1ME6eatWF7x4jevGJhVqA4GFCWpMZ6j",
  "key18": "23viE4eYNHfTVFgujtiSQsEx81pGbWSpY2sSuzSVxBST7tVKfPYnU9ZoVf7Cw3zULpVmi5HxvCA8iCMTperfAVm3",
  "key19": "Zk2WRKPcwjEsg8dJjAY12MMua6EZEWkLpyDSiK4NxSLWKi1dRomwu5YGRi2ekt5ZNw6xz4gvDdf4AHFDxWAi9L3",
  "key20": "3E9AZ8EEp1zwAQP3Z2ZC4xHHEWKwvyDRuSFUEhMhGnSyutuma58CymUcM5m7uJjEmaPBYtw9Zp6m5T2E8StXsTeZ",
  "key21": "4gbhsMRydkjZK52amhxiWW76m8AXap5ApboD9xQ9btmwshwbdFNorFXyJWDjJkarAYQyX8vwK81E8pLuJhZtPUBx",
  "key22": "2FBb1J1SVtDu2ztSTbUDjN115h2WXAXn2LH1L8ugg5uQZYxPQz1mCLAF2MdmPSLmA4VbEwxnm29wr4vxzZAabjW6",
  "key23": "WV7zNqibDu19oEqpwK1suQx35K4yN3kqaVpjQNgYRXGzfCVJDxZ3tdC3x3FYVvMxvLCN1PP5JE8hF6VAYtUdNrh",
  "key24": "5FyECbkcdVcznJNicLM5bwq1PvZFqCh2htFtHvDobm8Lkve5fTJUwvrGuUV8woBjgfQbQhzFjiaJY47Px3hkhYiC",
  "key25": "6581GhSpuhPQ7xaTjaRhPmKnynYa2Jfsh3fmrwyk175tUsWEtLYjcLWeZjmHzuTY8he9YqHZkACk29zVuXhrtMJw",
  "key26": "2keZ4GjN7SZYbsh72pcQkSXrwG3efVwuAMBwNGmqW6cLi5CdnSjJ5Wj3PyhmapRikBhJxzsiQaXssoJT1LoF15fH",
  "key27": "5CyzgCEmvdK5MYTLpPd5A3Mft1dTrqiqBk2xAJjCBianvKfbWBYGi8kg98N5qm9kpdpydk7dgiZJCWyw4dr7W5uR",
  "key28": "BgKg9tD3mbmawJSBZ4PfAKcrtDCRyvPSZwb1tV1WyjVV6WmUPW3kHLFZtae13whusmijZe3GdXyNzH3AQHG5Xww",
  "key29": "ZifZegm5HH5RZy4XAKW8yhnFo6ZRTifnYEZqYvxZn7udNfxY6qfPygbug9XdjScJpXzuwESppGfq1yW5zeZjSLv",
  "key30": "4GVNso6f3dK4BmhQNsrgpVddHGHJ2ogU7h2XYAUScNiUPcRBuzJBSyseDV5Joz293Tbim4QkTPoFXPEaYQBJFWPC",
  "key31": "4fCqgEQEipwLAAqqhUobtgjMBotohbwT1fmEH3vJRLmWRRJvsxbbd2KjkyaNygwy764v4tNVsZumJ8gMwc2VtKHM",
  "key32": "5cgtvpcmuUNVrDvRGEDuYaeKg6RduWbpBZ1ytLBobh356wuqqb1c84WUghZMFdrpNLd9hffkbFiSYv7Dg8MKQRDN",
  "key33": "3aKbERLDvh4CRgRFa9PxFRTqidSbyrjAitU8WPbfQc7ntewg9Jchqxcw7sKBkg8ebzPhJBMHgqEsGwVXzUokbkUd",
  "key34": "2RHYhXWiGmporfXRdurD4926AoFVDHMT18U59sSKE8X8kdvyKz3at1kktHFd5VD11FCW2mZCPswmi2ZW6vncMK6Z",
  "key35": "3zJYsoV5becMfnQVHyvToUGitNvszw5jVxFzNauu4TLmceANsRDiVGBVHj8qTvhTSVTcuoanrW6vJbjShwfcRBbB",
  "key36": "2D3qxxEpHqNZmxDsNBWn1rukVPJxvFHdnMbvfh3wFt574nk4yseuNWSXtek5YKHzjPcpRVPHQdRAC9yFhNpsnKy1"
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
