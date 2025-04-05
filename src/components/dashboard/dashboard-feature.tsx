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
    "3XoX2ZLxcmcG9EzyrxznvC81HnaomcsaSJVk7wGRPcLJQkZz3hBVg4ooQhoNVUHxoJwr8TbbC94SE6RM53zUF4GH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TEXKVnDZevkyg4sMVexgwNh2tRRKuck6AiWrzJw6ybJpM8UiVAiB2JJMfEgiksL4YfuF5BRiXXCZRd2HqFBN2aU",
  "key1": "4C2iCDDQRRobEbnFc38bDKu8n2Ez1yuLiCiCx6fPYKDd4C3VjDiWdHo26tA7ijA8DdvcFtK1SpQqt2rw8xQ9dihN",
  "key2": "fiP8ooVGU1CMGffFUqYKLUjHCbrd3hqW2HHujaoTNhKi91sFZduVxkaPSyY1XLYwUTB7H5LydXy5Eyf3AeG5XRM",
  "key3": "3WL8EZyuiDRBz3NbSxEYDCiRhazNuNazEtVmUjw48Cq42Qj37ysFsXoptx3gha8HaH5FZmkENWDokuFLiTkfbyYD",
  "key4": "3bziW3EtTybxGqjXo7DDi6W8N4CXnMtK4KAhTccz1P7x6y9sKxLcvVnNLZcJD7m2aaKcmPpSui4h2dedTHMq64HG",
  "key5": "VP48pD6iyDVsom3qz4SBPK7qKeuu6D3vqzzCH9VwmSKBxr1SALxavPu3fkJHiFynVw4C7Eie8qZU5rd81RQvJa1",
  "key6": "5KJ1ek8j86RQaTYLdMgpSVStW1RBZAZeGJdFbSTW4jLWHUEmxNLB9ZsieL3DmUQ6kMJ1y6SVg9ZwS2rvbM1ULcHd",
  "key7": "5x6VAug8R65yRK89UG6aoxCPSTxHNTFbUwMUsd2CqtbnoQaFKfjSjy9aWtaaPyPHALzkWM6yMoBQNTkq4nLJMPjK",
  "key8": "5BZW4JZm2pjkhndMiwERPnaqHkCA3hpZFkvaNRBTckvXi438Kr73r25UzsULzHtFZeEow1a6NASc951NLTsbJkCd",
  "key9": "3Mu1pp1omqHSUQiEFigQkHwkEhhUqCogvD9c7gm47tHk3fpewvZL9WzWD4GEvXYbDDqmGVYyQePNYZbNLhXRaCvN",
  "key10": "zzJTZ1NeEDSRDS55e1eBkpeHpr1QjH5fTCEB6Ypo2DP8MCSf35CBMQfmRmXCeq33R9mXp4BYJSUJGPuESC8zyvT",
  "key11": "2FMqs8cHZJakQGKMdb11Ay285XfbKjqMHRzpCcXfwA8ZRRrkBrw8FdRJ21CqJWTCyeh2J8uMgRwv1jvqCa6QCTpz",
  "key12": "hgsKfRw6b7PaUEtWzoSphcuL5YF16wMviWyrYBGh3CrHnYrKGdZG5vUneHyDvDoFCdoyykDrfH6NR9cwfenVrDv",
  "key13": "dS3BjJkkcMmb7d53wjhKZa5waATMroXFn8csgijY1FB3r9VV6WG7FCitcYWY2fSo43yvFg1brf2fup3TH8e1LKo",
  "key14": "53Pq6HAkv2um3S8NzLXpMm1Q5NCuzqUaoioh5nAtQmKs2ERaXr4rtBL1w5QnTpdkPKhpEx1bTEANfUdfi1M2Wmdq",
  "key15": "QzE6mrTtaNHGxkpXBSNgymJiwMoxboKKmPykxu2ci6UsjqQVRB6xgUxEQdiGAZGaAvWmg9nYB4A5tobZXMeGAVR",
  "key16": "4FysRGoQer2xf2h4BkqR13xsW4PvCRsZ4h2ueQEixuP9WVQNehahmCxuHfjcpnd8HeR1X8bNoQs2QZREAKZg3hqm",
  "key17": "2vzvpLCqkGDW3W1doz4mwpDjtUR3utWGxJojMMA4WYpwxyHqUJfvmKZk9pY16KH9bKzDkBmRT6Tzw2TFSQ36N9jW",
  "key18": "5JHszG8AiC2ncRcVt4vmD8Lo6De2t6DcCiYn3S59UC5Kuce6HCLN8ojcCnWjZ5oCuQaYPpzxq7LEkkFGspDazLn",
  "key19": "TbEwGE7fiJgYcJCWGouhxsqnitDJ8tDBBsbQGcGSBCp9AhU67Z5L9cPa78aRFm7UaTz48rwcy73v2nHyJ9iHeDr",
  "key20": "2hioW6mTmoNV1xYcPNZQadyZebWmGhHLRkQbsmd7EhLhf5cafnk8minFXet6624dbdHLsgoX4BCX5zGaZbApQZSB",
  "key21": "fhj99n6r76YbW6BLR7Gn6zZGr4nTwsHWGA6CjcXCsycqKn5NKwTxSTNjgxNoqXmBBWbTzEFEkn6V66AP8TAEqGv",
  "key22": "5PMjaQcVPLPbb7Cw3mk8xZEAF5MwE5RSwCMEdZaSpmAy39Bwxv38a712K27tvxo4unpCHrCXZsJbGt5vonZ897Gk",
  "key23": "3vonDQKqdtWJ8spB6tuLrcAZDyXPMCF7yxPfYjhhTmhE4Kr6raUojWhr8h4ty8azvf9djgtJ9oijrBotHqxKPRWV",
  "key24": "5a2ihaQyqQpeDTYA4SfaXckA1uPWjpWxjDPKkuufHPHhGJgDNLVBKEqQYEBqxzwqwdRcofehK7WBiUn2Qj5Pt2Di",
  "key25": "2V2yi7dLRAEfGMtLEg7bxLcvadFbgPEJ6eRSHwieFSNuYgR4mvkHSCmzKbnPDgDsXmxMurY5gc42mAwiXZ4W2kme",
  "key26": "39Lc7QqjsYLYycPLybck15aF6hfAaqpVuiYBx5iZoqnnBiNZs73qXN29qpxai3Wcs8ZcYWeBR6PtgvX4ak3NCzUn",
  "key27": "4kn8NTjjPjsSmTKrfEF7URsnHv8gHYzyedubk1PSEbg2WzvQKL1CcWjVEStuWTyTwm4PxoEUKfH6ggzkeoSvK6TL",
  "key28": "4qW8FRv8tHR6t3vTnscsuBM7TJtrEdx1TxE4xpdQvihZeey5C1XqnWxhBBgiE873dAuC2JXbisyVTQjNAiCUfvXb",
  "key29": "33ziMrmbUrAVdRYSQ9QgtwuvvXP8jJTjL2Ar3mAfzPT3STaMi8ixe1qsbBy1DY7m9mvK5dX5k5oqJkjYVQgwsXtp",
  "key30": "5ZTskcxhAHJsmdCCNNUkG9eHPtbV9vXrGgcD4dRHXsuWZeZr1EYo7Z7TpXJiHqfXauYnGDEEBGnFDqXfZGgP4p7E",
  "key31": "5DZA3GTD2KZybMPP2n6sQMz1fTdjLrueiPabevSkRmvn7JzdC6r6MZiAdNBK1VPFkFePsZRJ33KCoybVc1MQ73qv"
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
