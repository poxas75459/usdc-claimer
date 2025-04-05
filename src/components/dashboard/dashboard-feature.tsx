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
    "2S3gPv4hAVUhVJ2B7YJiBRrJN4erCSafDgzLMKmkcueUMRwCvnvWr7eag1NTWy2S9ToBgauvSgB8vVAnmi5MqtRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f1Whebb76rrQX7YS8Go6dNFCVq5E45PHkARKLNSRu3MZ9444jZZtStNVBzMAkmCxrG28kEzdnhj4THERRN8Sfhr",
  "key1": "vNkw3o5zuig7xAGm9DhgWrX7iNA5MhEAihJGbmhJQ67L4jcQ8hB5YaP2j4bvYJpb6AXqZ2SwtvLyQaJDLWd7zF8",
  "key2": "2pudJPbhtAqHzuWCmTyVPuxMKQzE35tC7hibv66mu6z8hzwErLhqoHj31chiBAxcGHmkdBz9uSxYyr7EA3LWk5qC",
  "key3": "3UjgoCYDuvct3kUK27o7J7eWBz3GQe4qswwaEgzEJPJFwZe6WjtepvyPKR7TZegpL12Y2YbQZCopcKPMF6pdJfE5",
  "key4": "3JWqWGuA6PzsuYZzcg7FPVs6R6GrGNqjQuD8Kxczgx2aeNQuTkMtzLM5iNzdMDVk4PmucX8rDSD559HjKP5rcRxP",
  "key5": "2yh7XFi641ptLBspfxWmLaE1mJJqmvhxvYhuqjWDsyjvVYnkmeoA7mLK7P3NZwhwt5SBb35a7GXFnd2FVRLdVE8z",
  "key6": "4tng2f3bKbx3qm4b8UWyikgJvgMFSVqhZ2SDsNJ4H6422aihkd35bbDaqDrAZu2YdCsm3U8memofHQhbuZtPNqoZ",
  "key7": "6376fZHDYz1xktufkLRyd4YCdzvnNdp5BVMMwZ49maz8NXZTuJxCgNR8jJkx9uKAYchruTKMnnNuzVBEUnJwQZAZ",
  "key8": "2tBFBk2XTAKNw3XMMrqfFemkLBCTzUGstXU9HdJz6Q3Ab8bRWokzQ88qP9F1EVq6AaihjqpmDrwqTKebZfHGkd8a",
  "key9": "5i1oTaSog7AKWdtGJ2j488VuABj1evWTUiGiJk8FwqQM92yDA4GXrZvm6HwBUnvXwc8mogAxkj1moytv3j4LtNea",
  "key10": "3bgQtXrjjHNmidwiyfzN4TzaQmEdBizA9aXa8nfbNW6LeRTdpSkV2pfGbjZuhnGMBsQzibmovZgPWVH6JdWktePi",
  "key11": "5dw88CtEFtDJZW1XPY7KJW4urj4hZ7F8jSm6PrPRcF4ReBRXN4N61Jp3XcryKz4c8rSzB3xUU3K9UNH9TynPq7uk",
  "key12": "2VWqtqet5r94N7ExVm9Sf9Nu6RdcW2UcL2bgG8eBEUHiyyoeBmvQSi38NX5QGcNJX4ivcNsnfQCsoHtjwQhZ1bbS",
  "key13": "2x6VuqebNCEAqQ1ujWJMvzng1VncZfEghA9YcDxaC5diN42wCNoMXWwxJbDTGJo8UFGvkHffDrXgBwHchwt9xBhJ",
  "key14": "4v3zPjQjVe3ePStKeNKBrhKXqyw1fRcUe6VK8GXzNJDpKiCsZkyKwtgBq4HTWMkgy2t4Pbo1bBWRzysZQFwWCjUR",
  "key15": "4hoSsBqYFbkCFNrPDchzMTVqdzqWCVvMjhwixZrdhLfXLGBjEPtRSvxD4V6J7FapbNiEVqDprQaPV9ivCDpDaZW3",
  "key16": "3U51q2YVRkywuYnLvrNt2Mp6S1vWkjJmvLHKcuz72p8fTiU6DPL6g7EMrX8p9pxuQe6bDCNMSXDSrFNhKzqA2Dd6",
  "key17": "5scqm3AvEDhN69Hwy4psNbhcu84b5g711FAnrQdogMh7pqoVEF9JqmNS5FNH65Dx3fmdAikkL96CE8wHeaAt9qR3",
  "key18": "5qPrDopQE7cDwXN2QBXUbMFqet6GW6KtjYrdx21jwuE7JJXfHocQvpH4zBx41RTKuWbiD3AVmCzzsy78tpPjdvL4",
  "key19": "3u5ZUnGCvSzgEQ4tNgfbkR9evVfozqG52pHZ57QHTgzHjPmiyHrzQPcTR91UbLqphpgiAn2whViCR4tckcZFtbCi",
  "key20": "2LR8kMJyyB7RLj89UUAu5wgBZS5Hs2qB8A5KZLREBUrgpBcydrivGFdEAEgbsTGW2QTeF3KGmTfUmwSvQhfvUEQw",
  "key21": "2S9BreRKr6DjL8FacVsvNsW27q3KmhMTvCToAPz8Y9NgPxoB69ighLhJthP2qkRKSB7HFaCFzafpQMTRGZVxHjzS",
  "key22": "9jPkmrDDPwcTXkU1CV5jhTDH9pZmBAQkydUH1ntaCrbL5nMynbdQxDCfovM2ZyDbqw2wP6msjHaYJ3rRy8EmHZM",
  "key23": "4a1DBD7HwZwpvyHKV5sWXaqKpPz4bj8NxkJpyfDmLE9VNiWrLtuAmCaS8wpQLuKs77aARBdv4XFYfegZ2g9tBVLM",
  "key24": "43WFt5QrfmHyCSxALbSNuLHvwYW3aq9dSVze835wS7MnG7NFs5JaLfKDYFYDCgCMv2xGYjb6e4bffkiafkQKXmaG",
  "key25": "4qoN2F8HSviMA51KXWNiACd3cYiDXzyaZWagoJUqiRzagrrLAn2w9EsLY2bNK35VEaVwBkDD3ozguErBrHmozKhQ",
  "key26": "467jAVNo2inMtbj4xtsqyQfAWUYLAsnvKQzttuYr2HjbS6ioALZDjP9RKahGKDLmJdzr54HJTUJAHC7nihcF97tX"
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
