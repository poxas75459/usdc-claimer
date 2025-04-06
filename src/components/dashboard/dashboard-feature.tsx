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
    "5SZL4zrd13wpnVarcqAE4VdLnVna3jW5L2F9zW5aQQVyqHpX1k2wQzMsSTiPkBjEQi7xWFTXddLkQUz5V6n43bQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vaRZiBbTkwrYJ67EzwoqcWSPHrJpFNFPLwDV6jvuTwPvxsmNsMxtUJVDrNW3UEXwwmz6tNi6RKxdeW9qqEHtHDM",
  "key1": "5VcXB1d69yF9vhwaQiTGcofpmz69accoswMHGQ17NFPV7vfYkQZYJDCZfGWk2RTHpa71aZdZg5i1xXgYeDcaBEu3",
  "key2": "fQyAu15DBVVXNd57xufX1t5TY18AHaGE7ZBDR9F2jtzco23dgXZwgkpB3SZ6c9DWMt9LC29jLTmDLrV7nE2DbvN",
  "key3": "FGCGFowsqMsJyLk5vZttqcnH7VR2w6zWEsCT7NzY3KKMUbZyEGYLFQopcvfJyZLdy3J2K6Hc64gks2MNJAGNeCg",
  "key4": "3A98gCtp9rMnofnDfWk6qL7kJ4FqwyD9tmGvy94XRXzYb8bd4G95rXasU4c9EigEH8aWCFHx3rDXm4GKcAwvZWTe",
  "key5": "34TD5BdB8BB8G2zyBb2VS5oRcPgKoBCM9Twgj7So4UFE5XBxGs3Bj5FvYVa3uvBamaUNhHQG6c5HJjisC133AmLh",
  "key6": "3Qv95vKAUaJqQ4Q3CUV9g7TdeTmzrX4bJvuBvHYoaknHniBEme36P6FpdUjBdBsM3DPChydCWn9JmdygUpGvkRJA",
  "key7": "YT5XX5N1tT5TA1LrJzUE1LpibvM1eoyE7EQFXJfH7JnMz92KoQMzr6oLJKPiNzLYPBkaJ62rY1BFG284wDDS2rP",
  "key8": "3zFP1qhibM19hBiHAfYa7mtKoEvaAinBq4JijGq8H36UdcfP4gmfNzJ65AD6QGmPxoBhPAR79NJxWqzp1L5i9Ze2",
  "key9": "2VWSgBnoVWYpnxxoZoB8jMEvDehzgLD6oeQBCiGz3hmvc8CbHwsQTCFiBpQdALYbPdGxtbH4KZQMRtcYsd1kaM5d",
  "key10": "5pL9DboJBQW6M2XBTyeSMLUxLGaL6Q8qzFRvPhN1asNQHKaBMWdZDMJcQAZHThrpgAdeNatiCH82Quu4GmPsqkkX",
  "key11": "Hgq7fseqj9FQf1u9NXxiA2ESXBaMasr3RKrnzCU7cUZhSzKxrmQjXNeSzV5Fcj11KsTFquxZXMvWy1aoEk7WGYQ",
  "key12": "5icjJUJmuPo9iu3FVbe5rzwTk6HWk81MYopHdyP8zPvnyHuJwiecCow1UZ2jWNRqQvHHLpQzPAEPa45PBU1HB4pK",
  "key13": "4mecxHUPVjK3f9Y2XP4HW6jRVtvgT1RdJf9EKy7wgDMQF4VDvTrknJXqJTD11Ct71jE1Lr6nAktMzz6Gv4B6Tmge",
  "key14": "2mW4i7546eyMBwCoWzWF1HC6wiXJMvC5Ru51Jpr3xCiWPdcQAmpREfxwwjjRvH94b3ud33eDcpCQPayqespvamw5",
  "key15": "2wjXdmsTMuAgpL5x3oov2UqSiyhmcjNJLaBHrwca7WZBDQ1rNf7LwKzigWyv1GjE6qzzozLqFvZaoT1dPiBkankB",
  "key16": "4BLgEErTJckAV8vxQef2ifS9oxpC4Yu8CUXck9vvKsk55XMLAZYHGKnApXwLrtPh8fuQshEXsHfV2X5kiAukxc2U",
  "key17": "3sGeZRTFLNyg8Kh2vLxXcv4cFZg8jLbLf8qwQfck8sCoR9C4JFyA3QYTnCN9QCjD65PPiH8Qf6oBz1TiqeYGbJkz",
  "key18": "2QaHTfD21Q359tDdgk74fZKpxfg98xAmDz6jz4b9f91RcDiLEoJevq2M4UF1etus2f79kf68C2G6nbgF2ZdkZWsi",
  "key19": "3hQvbfqhsaKhfndaTmr2TFsc4AXoggS5zq2zhPVQhBoxtKe9r6BabnKYs4Dd1fPLyyGhZLmKm1uEr4R2CP18tGu3",
  "key20": "edEcJAVh9WsQhDrTvctsJyqS97aWmAWXKM8YZFvFSKKzSn2B2Wz999WqXLBTjBx9ANDVrfTDYMw7wctA2i1pwep",
  "key21": "4ZmCk5ZXUf3A4X4imEEpL8ZLpN6mXrFJQbGBxrEshomrJG967wcsJDiACbqNkB6qGL3ZJJWBNmh35WxuHKMAic6d",
  "key22": "yyAeDmPgUex7HQfCT1krjfMBAqTC43rVEtKSSX7c1y8fM1YEHkL9RhSsKGUYa4GLARfW9WbRGAVEvQBFdQJdHqH",
  "key23": "yki9PBcTPANg1J1odcwMkGZmwDuidmAeQCQtnUQ1t44g4kZJxJQaRjVeCQq8ZhufGCuSPsvZ5o1Mj41Xodfwtht",
  "key24": "43APVPuPry1awjHpS52sUrg7uuBJDSqXQUg1PJrZ8aiRztUuR9GjLSPnVmAXKn1223Bb75bo37zsuBc5sGGyUvKh",
  "key25": "5FyYVZ4YviooPBkRVMnAkAhtrooFrbWBTHtmesB1fYrb8UAgNDLN5egHYFjRQkQLD9e64zukGH3CEL6GceVc2jDd",
  "key26": "5PdBy8WtAAHKX4KBkAb4XYzWH3cjojJTqpC5FFn6hxZgsgCPHPCmpbySV7Zm2hrGZM4XCVXG343THCYwo3gkdBbA",
  "key27": "3uTm8TPKCoHNf7rgJVLvXBx3W8VQ7dinkhsiUFSjqLtU5iHfCPk11iLfhuAyUt2vYSGP9kMnEVzVMNEzzgpkUQgP"
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
