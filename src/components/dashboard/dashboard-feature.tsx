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
    "2YLwc6nxXYNAEA7zPMP1rbWdMN3XEtg5n1xFF6J31fzXKSsArTaFLTKybG66igggubVGNuYrHwnuk6eGTrrCmzpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jRZqrjkrwnbJcEkdt5pqHKBzKpit2Azn4p88xme3KUcHKHieRHRSWBrKMBvJQ5yepBvHNUNsRzwMz2HWbwCGrxg",
  "key1": "2x7mzW7RkmUapv3qtV9DQJUnNpERhgtXHKLJZe1nQzTcZCkEqHG9qQnUyuHCU6tja3QmCdppHRtahJu6EungkSKc",
  "key2": "2TW1uVgK5iE364woAsFKqPftPznizb68eMtHuV8dms2GwNJjwzp9pe556PmuS9eyyngHMHSpqRgoLMM7vVc52xFx",
  "key3": "4UsgmxZ5X1HVdpZbWwkGbpjGJzePCTq4R91kX1enjhqVndAEHLFRtDXi2s3rRGyrkStWbvsggaFqsFCm2wUDy9Q3",
  "key4": "27Ct7TEc1Dv6DZh54vzNgjPcjw5YbNMAReo4HELJM7J37wENXEzF6BK6zbC6iJ3XL8Eq5chPtCT5RRjWvA58LsMc",
  "key5": "3y4wgPYeai2z7QLWNE9fTkzGd4tM3tienmoczEnN6t1LpoLrqaf7HYwwgV5upvDUQQcFg6uCyUDAJ8kJK8uZwF6",
  "key6": "5VwTavfHnxfdy5onDLFWNv3BzXmcurXXEMcUCSo9Up69eZPFiru1fLtGajXXP5hmxPEoGzMN4VZdDjw47E5nUmgG",
  "key7": "5dtV18QP6NUWu9sLoedhmShdywmZePuXRfCVh1Mq8BYnjvUDVv3WWk5uRJUyLtyZKbkwjkMaDTTDiVBy29Cn973Z",
  "key8": "N3pnCrcP4829m5hQKaEVspPxJ8tCeq8ZxXmJGS24pWnaPsADk6iV8kTo3k1Au2PVmH5EaowsU18Q8VUyryo7CAe",
  "key9": "34WJV3PPJS973gbW2spoSn1saebLnduec53x2YdgDDd7ntMG8bVLXTvMx5qDoYW1RJoy4yr6UhsbQAb9htZxhqfr",
  "key10": "5D6vE5fSx1Cw7gqsEqQxgtxaQHG9v6ANQLUEzo1gBEEvNdubj2qRMnj8AZz1a1CrZL19UJnGswvuFWYSetxAqXEx",
  "key11": "65JbV7X4m7yXftyTyBco6kKLUD5aj2WGzZd4HTtDNDE5XeepCmXAqLNRyfhUCf2n4Pktu5pNuTMF5LFtWPGAcqyj",
  "key12": "61wdNshLhpsedRe8Vx5xu4pkjXLFqWL4yEVG5RMSHhNe7eMxD4QLsdK7iVGgdzVhR9tFNegiX7sVfFaHQ2u8UrG1",
  "key13": "3h9zMnPxP8uoFLeHD2f6gmHSies3rGHLnJeEG4tSDz2kPewGBM2fw1zRwzVouZWyrJ16w7CQqx8oJSSm2uruxBKB",
  "key14": "FuQJS7KLxDTqdPCFg82XPSen76KAWbRUvYx684L7g9ugfZpMejHchb8QCqeWTVXR5U4TSAWpyaDFtCcJ5WHo9jq",
  "key15": "2box5wdFHgmXvWCJMq3GCeRhikeZeGjPjzqrQNVmhcXtUyv3ej5L11humS3pufvK19YJmXxxQyjf9f9QLCt9CdRk",
  "key16": "3b39anxb2p9U2LoqA2P2o8suR8bmpkco6G4ywDRqJZf2xUgmufpQ45ZsRk4ntF9k8eDBg7LRRQh7z3x43pyr8VfV",
  "key17": "56Yxar1i7ayEb1bjtdHcBM8rn7jXKZ9ApVvk3FePapvrd1dkr9MtZFn4BUHgQm7AKDQ1RUxY4W4g4GzcHskZGBL8",
  "key18": "56ugefDqtKpbfLdCH6LCoWox1dLxcYpZVZLENrrVLwTqb23D82RVc122sE51qnNn6ASDWjXGFT99uLDH2FBGjKJP",
  "key19": "5vcX4zy83VgEnBoSX7XBzJvb2XHBAbq4jXrEMiW8fmWkYynkiUJeTwh4bm4iz2RDtotXvJCZTd1aHrQ1H9k5K1aQ",
  "key20": "3a6GYtqCWBMdgcQ2KpsN4ayRTGZHTNfWk1Em3Y9rtTAMZifppVp7nhKpw8SmkR28fQWVqF8JcLYLHQqmSx7zeDf8",
  "key21": "2YVpmpgy7jPRYDUshofNBqHQhZcoJueUrBD6PuQiJNNX5fX8dj1NFGqoV1JPfwuK1GAhSbjjXENj9zrCwG9qgVkG",
  "key22": "3KRAnFwAXaLVbtAAZtZBx29WTmikXQqtv7D237Kmt8znBNF58RMe2xTD4L4oPVgLDW6QTPvbbRvW2QJmnZoq6kKx",
  "key23": "3hqpFR9zjv3nEcy4PKvLuoS2qyBynsJdaSXPoX7VJRi8Wg1E7j21zaSsoaciTnmikoVHWCckDJmdMa8J8pdeSHHb",
  "key24": "5ZPWkRM5gGowMaVnAcFHd97XWMRXdKMQdH1kg2v8FSkxzsSJkWrvpnHWKwMfV4ffgxgDXqXEUPeF3wQF7dQcAn8u",
  "key25": "3RUMZG4H8bcnLsQtEXwrQxp7TLuWU41FELsR9Q7Xh1fdN2nHSWUovvbXoHKxVFfUreNWYTDeSJQrvCqtZvkyE8m7",
  "key26": "3ErHP9niXRy39uDHpFKJx6qUxLTzXYE4wGqg5zAGAFTH57pB2rBW35VfNwbXizrHYp5iQjKNaHkDE4SKq7JKvauD",
  "key27": "3jJKQoqq6bTxsDiPXWvFYnZtTBsj5kj8Kbrn4RfxoBzQhuakH8diy7wCUGn6ygoBBJvtCtWjffFX44NhsZSR1sHi"
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
