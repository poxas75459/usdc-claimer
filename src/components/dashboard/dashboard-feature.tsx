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
    "22FSRYgNQCoVN6GeWG4PxjBYB1L49SrnPQBQ9Q4FJgvjepzdzx1WZXAXcSdeZhnY4gduYGPRhdBpbnSP925xkk9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kry9HKX1HXodHWmR7ooF7qNUJaM3rkGoMFL9R2uVsaqUjQK3a6p5JYTyY6bmyBykmt25qnJwaATJsXUrNQBTduC",
  "key1": "iucVGoTTXmJA1ubCdgxgFog5ZgcbcsbYEjLpjbFcT1YAzQURH3FgSR3dqTQwaMs6eyGQtaehQckcGtFirntWDh8",
  "key2": "5cQc2Jg3x6z89Wecyd43KPBvUaUA8gk2iC2G6UKnLGcMumnPHvvZ8e5BKr8CokC5x5dfQhMkC1tLDoivwBKf39mN",
  "key3": "2Lu6cqN3KiXwudiThzGWd8cjak9WYHPWYSAP1UBzr7eMrx6MbLAYy4EZ9qNjxh7r4G278D16h7ThhY3xNF1TmJoA",
  "key4": "3wxRY6F4RkJCiWuEWFLi2A1VMzd7qi7jTSBGb24LggqmofN4wqaX2xN9o9CsahnznpfLX8eJmwGNPNCZwyGYQfsy",
  "key5": "4F7X2LEqvPsfKakMdxCQYfUrQSjvNGguVKMmFVdHA4NmzGZWpkKJWpFe5GBkegFQe8SKjXvb5mSAENW3Wr8WY2xF",
  "key6": "4rLasob7ZSH6tnedxwrvMJMZPTFbScYfTjY72vFiCsYiH7GbjrwHD3xDLKuyrwR3C1fDfbgJtgf9XhwYdtS9wAtM",
  "key7": "4SbRNzvU7ofuvTbYkSxfn19ucRndVqGnpugpPBkKfYEj825nf9mUDwyHjNbhd6uRAEfkebXfDazRKC6acVzScLFv",
  "key8": "KM8F1xYH6fyNQSyJRUoKGrdp9H4xow61zpfkuzE46gKTLJiXJnv3Ug8JCQXnyvzTef5emdhyofHDDdhRYWjmbvV",
  "key9": "DiK54ji54PzEbjs1su8bwSGr1TZDj8gxdtJiHcEnceLhnVRGvzuD2ARLeXSYdoZvRWZJZM1oGcDDqyhkbEG9pDK",
  "key10": "3Ryq3usojdDqw786ZoRM1HZ9tfgV2bS7TCii8qbBcjuCXYiGgyMT2WGU7pojB35tbjX6k8ByxuK1oqHXFUZ8dsyT",
  "key11": "2vJ4mrqWWiwspM9dLwLc5rnzizEjv1EoxomyjY52xJifiuEnCy4uZqKWSSnR8ztUMNLycMRCUxKyi4P2fzKjN6FD",
  "key12": "42raR9mJEmAJyXTPYRTf5X8uA9R2epB5UYQwXAFzFgy4YXo9e37gBQMHHvTkLiHKJiY3pHpS9NzcMEAp2oqNLvUW",
  "key13": "5PHChZrdLAURtDoq4FrEBqdv1hdxfMzNbSnY4pQEJfxdEyW7j62C69U9dH7YvnDTsRPn8eXaZhDwfrsSdGSJBGrD",
  "key14": "krXzxJsWwb7n1LSF7UcddikPCooyhSr31opCxEHad12m7bV43fQAWiBbuLXL75JDdpWUNnEFrMpvr41x6AVhGLQ",
  "key15": "3eR4MTPqiwHuu4U1QHysiUpiW1NXx54VzaE6fABpgXM3vdKrr7HHBHLyYRxPtS1rEvfgAdGWgQGopQ8b2SVSeDET",
  "key16": "eqcVxL4vkpFEC3fQhv1eFwrFDmGVDZoVPE6gUtvkPqCJdTFDdgF4YvLboLgfaq4f61EXcrETdBXVoDb2Ukb3exF",
  "key17": "47bPWkPyRHxCm56RZ5Qs8zQNVPt5xe3zaTV7jNMEgugfKEeLkwmXvTUuLRNuWDdjQ17QNUfJTrpwnBxH4JLgYxZB",
  "key18": "DaTr8qx61TD3mcZx17YpBg2QGhgwdaLphZJ6VTfwBxNmCCYoDZ7HXTxfmkgCvVGiTM3r4GSSCzgGVWUvG2n639k",
  "key19": "bTCqdDrryHALjjyuQa8imKvrT3oaTwHmY8Y8z4WRZhBE6E85K5bydyto7PXZTfyQZP2apDURMe49wXNq9opQyCv",
  "key20": "UgnfCJibHF2XK1LUCxxZbvX16HNnRCAZKJr6GDLJbbkJA5FvCAz8kGm9sNoNsiW45a4ERQfQW64H4cScBvwWU6R",
  "key21": "4ThawvK8z9qomPiEBTB2PmJQXNLQukkGkrCJ8MHsG6tLXJ4LeYposbb6NKHLRrBocoJqwgzxrUWTZsNJyLPPa6R4",
  "key22": "9PPJMj1ZsoidxoWLpyBLFxmE3QvfScoH7oUtZQWReQ2BJTxmv4eZZ4tN3bwsXzEHqrtsyQp6LF4ucuZHopo977o",
  "key23": "q6FG5swqz6Vf2qy6zWECgXERhB6Sp13A2U9T6TCSX5LbPZoi9NLBLDKGoneGBvqjVb4Bc6evGPiwGSGQaLJjwxX",
  "key24": "3SuNnYsP5p1Jq3RWchfwqLb5QnU42Ve9MKSJSim5tX2fiKuTRNdEfUwyjWhj9Bq1ZwYHRzCFKfoGqjGmFAXLAVkt",
  "key25": "2xXKrjmZhefPBnRBCUGpdppPPms1tqxRb5CNBh1r4Tr5CyfAMjgzmCynAmEmZ8EZZDBZRpFzWTa1MP4ULeWVzfrg",
  "key26": "NxFZJvfQjzknF6Se2Z37HhMpsvr8za63eJnggwjvUBTwAKTTtmPmK6DCsaJ5Cs36FXsq5bURchFuCc9UDPrz3jU",
  "key27": "5ibaSDcnheRCT3vEkouTwKmCDw2cDwuMq2otsndf2quBbBzo2rxt8qNM4t8gKERypc36ciaMQ55qxVxXm2q2ZmVZ",
  "key28": "3MnMWQCMtSL9Ar7KQwLyp7xWtNS7FTNsgEtt43GaEcpMGZK4hTJhs5KrqrL9FT3UfkmRq4H2M16gvNrRh5fDed5K",
  "key29": "3kMHHtVNFczN7HBcvqr4Q3RWCMhumKU53aYgdjRTC53iVGQ5tXp9iS9JuvQwuKGPeAmYWgjFDwyc5qVxqSutStHV",
  "key30": "53cyeyizdSVCu6sHYCrB5d245dtnhKG7BmP6ibUrxiDJBC1DKcBKfoJs51Dev63gMsCi66H6oe3vzc48bKSQMLr5"
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
