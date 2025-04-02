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
    "miDXfMbpVcahKeDf6uC9FgRteGxCAhj17K6iiLb6DYQS3ZnxgQ6u53fCXWpYpdk9HEkoudUzybDnaje1c24QkkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mGZmqV8rvfjfsQSGS8P1ZKV6QS3yoAC2A2oWm1iE3WnD2DctGNKPCsABHdSYyde6ciLf5u9caakSKq1eFWPxV4Q",
  "key1": "2xN4MG86g87nPn479zAmsUFqnRGsTC1fmshenKoapG2CEn9PBNWQyM5uBN2EPwyvHSqSvtLkmhxvn75rYUvEh8H4",
  "key2": "4q48GkrSfWDDJJi6evQ7Bhp74HRxfba7QsQezcq5Nf1oDexUhUQRiyEDyLif3hKTP7W7MgUd3u6RiuQcFSTCdy37",
  "key3": "3U6xrXsR3rX7AEtJRyPjzuv5yvVUCj2bGU6VGX1hQMu3jRwcpXgoHXeVWjoDo2JjEW7vC4SMA2TH8JWSTHNLwMXs",
  "key4": "3wXrLbTwwtTRuVZPi4APYFrJjRGQSBjhAx2gqPZiaKY6ExGQWCL2oUAmWV9QghyRjwfWHD36X65bPna7DettWcxK",
  "key5": "5WtnnR7LpqhiwFpbJ6DBMougxegTGGzKkqEbAhnmsoNeJgm1vLSV29SSyCPmgLG2TFPrZuEWT8dgvovP6SSzAJvQ",
  "key6": "3g2UDvWTesYDUqa8HP2o3d5N8z5JYYhgfFNV3w85T25UuWAtAaCMmsjyNGuo2zZp4bjps3VfbvbMqoaL8P7PxAch",
  "key7": "5Y3mQC2rwVDccuxxQHXTaLJtLi6pHgTef3M8i9LXwskFSpS2Ehcvd7hpkxi2v4odbUJaUixRBq9TPvBrGwbANiAv",
  "key8": "2n5kbUNEoexvaqHQcjZJWiXZFwLvHS2mkyPY2CUoVzn42YyQUQWuqQ4ZuLSevarDwGkUcME2eZMK4QRjUv8kR3tq",
  "key9": "2th7XZXhgLLynV4w8BY7ucbj9sqtKYkfzUqqVCeomN2cJv9wBeokqQKNo1o4pm2wXMXWjMkmYsmWHLrBqEyMpGNS",
  "key10": "34PN2RZRgUspcDePgBr9hXrrcBeycJzyhCSZJwWDqT5NCCqxxULkgFsG1VnTyA799F6JRQ6yd1KLWL6dBqezHCaz",
  "key11": "343UrHGVS67vYB8M47D7n6nvxcZ1Mu3ZkGozbnu91XdQYfrBkjkA8YMjqVKpxvp7G7Gh5E18Rhhyjx1rayad8wm7",
  "key12": "4aAJiwx96EosNoFkP9wDv49xgSGWwpWFgNG1bMTArmUXQPYoZ2ZzeEeiueUSURPi8Tj7aj7iaE1guTKXrJgHvxBU",
  "key13": "2tFGwTN1J6QS3XSVUkHmwf13emk7MbrFZPSCLom4R4KsGtDW2G4Jd9mKzmkMv9nesgkDBNumRpkH9hgUZsJDpmon",
  "key14": "5YMFXMKUd8VAccYqTVvQ6ymh2QuZiDkq36YE2dHeuTBH2aBg5qAYBuDJh4FbQKMswxs7rQn46aM7BK6yPK3T9ge",
  "key15": "4ChEnRTaQhjKzPnFRPFcu65Hsw7NpU8BpYDL5C184qeJWySCXy77u8eoNs6sATtGiGcmzgVqvbryJevSkiXNv9Ft",
  "key16": "2ZQUSJJLMrJpV3TwD2N3rhFzkoRrePgQLKMyN8HQgzGAycowEAy8n15vtE2miMbMidu3eLAvUmVJRWQnQd1JaYNx",
  "key17": "2p5TRwnDFEPcB6RYdU5zHqDNN9DpPAAhZY243vz8CNZAcP9XtjswcRLU3PUhf7vMe5sP7FwBbwPXEMsjt4vqMjiC",
  "key18": "5GCWSr8pvVUrVhosa8GBZoZX8dPnQdAWHzCx23JLdS8RKYjFCMwrWotdPoB1b8sRN7u9ijNeEPToaa7h3BCGhDuJ",
  "key19": "3g266kTeurWUvy3DWmyMNeU1GzmGdtAc8UmSawz31HMDpFdRXuE1nz6qf3WJZjZGha99HdYmoVAk6gLwyoyA8UDp",
  "key20": "5QdFyPiYgUDvJQLUVda6uF2wcvUGvTTLdm5jcQcBBjtdvwg3MfUhLXwfUJVCvquPFqd637dXMavmAVp8nUz5579a",
  "key21": "3iu1LU7vx7HGeomufd5uMdGu4Nmoe9p66dLGXpppLjobLknSFByT6ohE7FNEy1X62QfAQyULp4fXTxQwZrwcVXwn",
  "key22": "5AA2y6UhBntNUbXggRH49xQBUSuk4XSP4YgnwWNKP7AixGwoNkPBAZvEzkr3m2vLSdM8hayY9v4Pvv1rXRGyvTDg",
  "key23": "4mqmdkUfQA5N7KUrpcSvjNW6zM7uyNjtHbGAhkHNZN3PV5nEXnuEA5jcWc1n9H28SM1gqJDUXDzpY59rHTSr9oz9",
  "key24": "PzAcJVySLTGZuUcyhp8RuWBxa4PHXUGGVQ4wox7a42cgmGdQCqyScf9KLJfsjYNiKbFP8uX7Ywp41S48BAFZPvv",
  "key25": "3TGQgNoYHqAgSHc1dizacobkcgshAvhs6pLAz8FfGAc6Rjj1MVnKyXacWCyy9scytiD8XaGy49L5duoq1oQ74GaY",
  "key26": "3k39wBArFi7MG8it6FNeX67r6PqkVEycFcsEbMVXiBv1Mv1z2ZEaTntxZW79JhZyq1gRzbRNEdDa5Q991FQwiuAP",
  "key27": "etLGqi86BpPJqW73ksY2jLhAvkB4GrW2JneNM3GKXcNs3UXZyiYkAgkpWBPTDSsqYUpReUT9y74giWmSjvyYiXL",
  "key28": "5XH4N7EPecTFgBUWhLbDUfnhoQEMmpUnNNASsG67sRMiGM7tHvzxZKU1nZM1R8QS9u8w7yxp2tpVwwQU3UvJ9tVw",
  "key29": "3aeLeKgZ2UibshoA4RK9N6FxCXz2L3RYpkDKkRhMdZNQ2iQkw5S68dvPTBLAepoTZYTFi5r3w9UnaFrfeUM3V1yr",
  "key30": "2xWo4Fe4rSpZgWn8E9bqid7eTLuHYveEUVdmNsjGKsYGSzr5Lqo11CTtWtiJFdEURSdfXjcoNRCu2N7B24MXhWAq"
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
