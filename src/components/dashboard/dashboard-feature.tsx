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
    "4zthoPKpLQh2XZQYDowZ6qZC9JKiSBkjTXdvgkmDncVUXfHKvhvmF26WRcDRPrN7ZWWZWeAWXTD1bZKHCrssq1KC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7UM1K3FpEnQEgpwnhgSnv8yaSfrqy4jqtS9GL2Z7HQoH4dqewfQMdof9HVjirxR5ERE9GcD7TY8ijR1RhQuasds",
  "key1": "3AwZcD983ZPryJVuLKrVPhrW57NfLWxaAwVKFbqk1gEKKYnJefe1MHHojeMCEA3b4xD6LkZA8yh39PZAQHsBPmSE",
  "key2": "4t6aw7fZtJ8sruAN3JT7xjmAMRTGeaHz2fw3NZKanvDDSu8KEzx9pHSj1FLTcDsxQUbEKKXmTp1BuUhHE9h3xhNr",
  "key3": "38kVCjgrAysh6TSmk44WC5nuoUAywBvxDAbMZ8f3onHoPQThshYkDju47v9zScBSMXS6VSYKnz4BuhRxwwoftzDH",
  "key4": "5JXrj9cQpdqEZyhEY2VGw2WTrgVmr1wkvrJKJaaz3U4ciCYs1qsZDuiATkaJ2oriFTcT3pYWhbxtPW6XPjyo8YDg",
  "key5": "3NG31GExQJPfWeqqJ3yvRgH8yKQfEA3XLknk65Ydx5vxotoXFZnrSA5mPBKCJsP2ymD3xm3dD9s64JidohDHW9xu",
  "key6": "Ru6GSwz68d6tGuzn4qUyyJ5ZPuJfE1yjdQprJczsv2sEHdWJGz9TPRNnUBAUg8Srrvcqye1W98nS2DmW9wL6v3y",
  "key7": "4HcoHiCW2YPbsiCqLFJhHJkJupGbgrw25iJNMG9NGPc7RADbhEtm27okthoqYZbuJtvSFY9appvGarmt3a6y2658",
  "key8": "5pTRyhLFJ6gkeZGKtHeYYs6ZzFLb2kakTjpe5PuVrg7uD6Yymr5nnJEVdqU3gHRV8JmHg2JmoQp2TNTYq1Tb7eZE",
  "key9": "2JpgjUcxom8uchq6gmXBheUYFZw3rwp1xTRY4AT93W75S1YAYv7j9XVGtadx8UzhdH8QkYgRgwjsj41GDxqci2Fn",
  "key10": "5eBEhvUfiSVeQi7ab9pHceWnbbCbNCyTSoJB55u3ADnp8Sbe8ioJsEZ9eMxDbZmAWrZxPHByuKf8HcbQuEPhCRD4",
  "key11": "2utncAmJVBXYYc3os4iHD8w1Nvn14hD8XUz9yccK2HyQVnzUqA8YaFq9tNshqgPwTgdKCJGCy4QLMKv4NFF4dfBW",
  "key12": "2M5uzpKhsb13P1qi9vdwU8kf8LRcPugHWG7NPMbDBBdmoa9CapShCNNryhf4ez4qxxzPFRtPMWjMoSLCGLe9uJpD",
  "key13": "5kH8v6D1CDYQ1U9mDkJSA2A86MpQ9zC8oXi7p25wJUMnVD1skPDnVv6mNExu1BK91xedSV3C8EVnGavgmT4VVm1K",
  "key14": "JpX8Q7NepKSJw8vxTYL3xQtsiPsEaK3WybcDJnQEUhc7hwuFs2FCT65eBenswk2Cim6ZEr8WXjJGiNWLdroynn3",
  "key15": "2Kxi4HJcjK2sVMPDwQ89EtXgyabUY4fMtGds8krp5BUUuhVmA3uzqcGwWZruyUsNVrCUBALojhTLi7DWc2nDPnon",
  "key16": "4JcsnFXxLgbMtfZxKPAv3soN4BEE8oHjjr1UmeLnx1TdxwTyf4irtDGyg5Ju7zEhrGW4NtpSR4RAqzXXgakYB6MT",
  "key17": "5759KjhTTExSycbKwKEef4NGjV7SqPwd3pybYfnB7VohVRptUra4QCvu31B7P8EE5D7xaWc4thsvWR23nEanMQBF",
  "key18": "6iqGdxFJ8ThoiRxKfCVx1p6RWM1VzwnJ74k6ERkZGn2zTVo2RaT5YKyA4C7w1CbAzjr8E5cxC2QCqy3cacWFdmc",
  "key19": "3VU5JQXHNW2wbb2QtC8G944jxErjNGUwujpLRLxL7UDatauKKzBG9ZA1yEGvPUEGHDx5N3r4AfhCyY4Z23CX3Nkw",
  "key20": "25kgmK3fU4Z8ChQknM7NibCK387fKv234wrSdj9aJRdwdfGv8hZvbto4wAEM4rPb7WiJUdp1fVSUJD2jx2q9Mb7G",
  "key21": "4HyUuULXMECczH4sqzJJamx7AwgeJDGqWr2NyDjMdwty5XA8KeZ7XK7bSUZjaaRxuXFjc7xi4WyqujXKpAUQMKWj",
  "key22": "2UaF3qr3mXGjdfYLtf9b4rULnqkSBwmQhTfrFy8WjUxQfPewDJDkQUVsiJqw3aABbSuM2iXKpZPmefn77vSHF57d",
  "key23": "2Wkp8Aw2udrV3Y2Y1AkDXwWpY6YupoKUuoovDkzEVXtSMrJ2oQ3TBw3UDAB4N3C4KAZbCVrtiCKS4x4vZ1oxWTnK",
  "key24": "2kRZTgM1W9RVwe7rGp44PjUKCV5UeRQHrawTKp8HUysGy9vg7gx8fDgrWjpdto5V51GBMg8jYt9KvdeSc7kU2vLL",
  "key25": "5cMv58nXkPQhAnrATRTcYXT59Lmy68tosYgN1ijfy8sFbSVmt9kKXCjHmiDbvoRkFwTL91PRRf5zRRhEGUDcef27",
  "key26": "5kSsZktpeYUFBPHCXGY3PSN8G7RvEbVoMugcWxLaMnveJzCVJ1P1dKWQCmxhXi8Dje8CMyYWyizRfCc2UtMksuNN",
  "key27": "51NGtSNhSbREUhzTxGkyg3jgZMyJ97Mc8VzfaY9iTr82Qd4gHkkyS2iADq9UHzZTtnwzwofM5JpY7AJV7YArprZn",
  "key28": "2MQ2qoU5eCwWDrABjEEKrFY3ZV7AuLi7WCgUmDaz1d55NdEFPQAh3nFQVXYVro9GdRgiEcWQGrmNNJgFeXpfMi5f",
  "key29": "3qPSQjjrSS4FWJ13GcqTU84hqh7r5wyeoYWBaEp4ogUyF4gQJVWovPoK2P64oheXYBtYAmuGyxzyXvcNZbw7Ga9w",
  "key30": "4EUPrPZf9HkSQicRS6Y3iCWwk1uysZN6tayAqdKwUnebecMgewiazuNxkeT5oX5Sq8tWTxULRwk435gTvDcyy1bk",
  "key31": "32qDorgezNT2JaG3eD5nafFCRPJxh5Yd916taXHbuF2QfFCPGQsDHafmPX7rxQ1Cpbpa8cZbfQxSSm5q4Kj3iNpU",
  "key32": "4SFZ2cKqynVJKvdmiamj62BPmG8CXpH89KFTY5htrYLhwDRrTwQ8NNVu6sJUymWYPLnQDYrN2btQDZWpR9UrHVcx",
  "key33": "5iPhqE4udA3XaQADT1XHBYTjZyZM3yRFJkaJjtgR8srcVeJXnQuaL5LBeB4MRdDUEuf75PWh6syQM7QC7zr2V5yR"
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
