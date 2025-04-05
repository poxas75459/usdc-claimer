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
    "5BQM1Uc5qvUNRbtfRQPv1Xk5VLvZJdtJETdtUgsgboi3UJNt7VHYEXWmDmmnNiim8QjJissFZ4GkySZEG7VTpDeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28MjHiAYgdnDQxqFgZXjwYDqwLcAKBnjk47BF8YPRRcB2Q4EdEZcpAZziASc6qyc9hjd1yibQNfy5Dw8a3eTZzEi",
  "key1": "3NEsrhXk4KfHBUMKQZBxPgZ9fafHiSAFz36ht2gYoEjCccdXf8wce1etNWwA1CNaTa1gsZ8wiske24AcWnKUfjC3",
  "key2": "BQ692qR6L6bdjHEaEQ8qu2S6PsWMdEutXqNn9LyuP52q3wBG1nBC9BJRVKLJNXi7bs7TgdAXffV5zvfUXwCQdhj",
  "key3": "kEbjSdZ1mwGLE9Em5Lpjhjaqmgdfk8xVZ1a2vn6tqsgnHQxZuYft6JoanQ7gbQLH8vVRvezz4Vaj6eUgqcRQ6xw",
  "key4": "5nhtVHUqD3W5rg8nrKmkWQkDN5kDVixZhaJHZQd5cfh8mQvfe6SqSAb9wF8pzV37zi88SVH914zjdZLoobyHK9ya",
  "key5": "3Z2VrXkXz7StERDAbvVb9qHvkvHHVM8A2x667QrZwQPJyVZnhH7R49ERToyQNnoRErXVUeKedziPxnk5hb9GvSMs",
  "key6": "3NDG6wp1XMueGQ3TFJaPekBsf3jGUrXgzaFD4LkbJpxcqh9z7kvQucUoqNtxa1TaN3hCiMBCJpMfFUYYYgi9p2dx",
  "key7": "4TpSVbGZXEWkaBKnWYzkr5jBCqppVq2pvvFij4WuC7q7KkRd21G5JdaWuUVUWRPqJN5sgdL1NYfNRVCYXm65Am2X",
  "key8": "2qvNrbxDYyZko1iEVcvuAGKiHczcXSwKLFVc6Ga4AR2nS4YnnyoyiANJf56pqkZqEmBmjcjT1JiU3Rb9aienJJcC",
  "key9": "4gcSk8b6h5hcZUsxi4SM4L6DBvLnxSzbBRzLHqrb85JsWD4pa6Qd4jtUaHw2Te5RCtszMsCbzdagsphGfALBFBHY",
  "key10": "5peUp2zfhZCapE6dNxxeXiLfvDwgMCZEVueTJJBRdhoRTE2BqY71fvEXi3QzmURNAdpNAVHi4qrnK5vvxFzgbsrG",
  "key11": "mST6hy1o6xTuLGTaieCcwEXoQtAEfTmBCfjvjACcdiZcdJvUU16Zurak5Dcb4cZbQm8mpK5gQeFR7YLGFAGGBiQ",
  "key12": "5WwAKBuJmN1p8a82rSiSZoUpcw5RRvZw9Z1177wSNv3PGozgrythNU7jPicG1pHLQYMqcbJ44X6E8H7RUKrPPHvh",
  "key13": "42euTjKUYZnwDpxbw7egYvPxB17X4iz6rRLyGwCBDAPJh6bsL74A1FfTmuJRCRU3HczGs29Q9vbm35SSFWA2dwgR",
  "key14": "jKcuJywSgRPPpKZokysvpGcWKEmYPWt4mTBWJaYbZhUyzwJrS27m83AhJ9jCJ1QFAXeJprXfDNFWsU9oACUYC1Z",
  "key15": "3Q4PWE8ckeYEER9qa2J1JeBADenLaaHiyrhN92DuDsm8fNr5ZMwWncghKHxJACfsswAAUXgtKBJG1vc1h8xe4Wiz",
  "key16": "3oz6GAZBaVvaQ9V5BA5Ex2XsSUyGmmmzqcnvRA2HK5GKAqSQfQJfuGJhqWvGdDo6g6vZAfv2i9qtd96BbaXitYyq",
  "key17": "3Y5n2XUjQA1NRodATE4dEYMwNxCETkdrXXgajcruJdA836wPWfFs7P4gPk49Qd8vLbCRZFe4XLC8Qt6VwWnbAvQB",
  "key18": "4FDXrBTt9Kvaq9GmuUguiwT3T8QXV9QpwbHthCcksUZdyaaA6xw4RnCDdigck51vyfKYvYYwpvaYmXQSSZhShbso",
  "key19": "2CVrMfvJ8fadyzBZRXE6LXFfe5mXVfoReLs7KEPkciMUpu7p6uGcCf45VjB3SiHXKND5AG43fAubmCvprDEzreo",
  "key20": "UEj5BRmvzVKm16cNJ8t2BP3eKt931AKA5jQfwpphE8XDodtXTXZG1eEmbn9jZuy74R4p7W7D31hexNUFKWKUzDY",
  "key21": "kAypzqyDQrbhgkCwid2AzNWr4ckxvFfKR9xuRwMuPVxuV7gtC1wuT6jTxHhaBxsvKvG7r82BKScSRJoX3e8NwkX",
  "key22": "3LnG1n6vTDLKhca7ePUqvGs2zmQLJJC4nbQeTnTWZXrhK2Z5cegYUYvDdiP9yucsxZaxVTJb5FVpmi8X3dNNqkhf",
  "key23": "4J1NrXTjauRGBKEyX3AbroAMtcq7Cp6zNesrh7AcpxJsMhjmdq3xsCY2xTqmaHx9c57kxUGNEQ2GZR9N5zgsJEg1",
  "key24": "2CymbgmAayMVkU6DFJMpMasCJ34SVN1Q23RZzpvqqaMdra7mhjKHB5tW4esyM2gVofHhpRb5RwxTrfSeyxAT4vZQ",
  "key25": "a9XGQ1fAapkKQjxjjjNaLFc1pwNuQS4xdkL6uXQqZPMEjD28YCcZhjWQLHL7tRBcthjfLMStP2Vzkb725GSc2Po",
  "key26": "38KF2QPVSrVepLxfHzF5j44SXL8AnhuGkuyjZwgGP2aScA4CqAGk5JNpyDBYhSa23UHE7tEYciAvWzjwXyoB9SNE",
  "key27": "4XEF5zb3VySm4MHqeTPEbuhBoNzp93mRxf12VSq2FtcGNLWL66rkjdPDqBiAFiyJoq5Fxk8gm3ZabaPmp4bXjwA6",
  "key28": "c9etth58gRxYeB2hS3zA7HHMZ7Fqkh15GnyeDh37MM73NTrRMWtBhYNo88EuE4mXeXLJMbddewBR3PdBLiB2HDJ",
  "key29": "5jJKozpzCPKSZNXwK3MGbJSMHDzjc5jTTj4xfqmrimLFPBVF6SZJzWWovc2djtcUGSPxAQA2THQVp1CRUqQ8vkZu",
  "key30": "55u2a18NPUQps8E397afX2jcgMkzxMVNA8D2PZXExzkM51ZPSx7ECAZ297M3Rv3MhUrxGTC5HczXgNxLG3kZDxAG",
  "key31": "fTfhyStXwf7kt69VU9sv4teVes4RZf3AwM972aR7A5zBUKzaRGDCsPcC98so54qXQbdyPvohU6AaVBZxDgYUQ8E"
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
