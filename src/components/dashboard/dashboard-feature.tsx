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
    "25Fuzwnu8o7FSbEFJKGPfyoNN2DabV9V7QT2hxVGcQ3JqDEjwCxi74GToL1thfpSNZdSS3mvXeWXvo2zUvgKpCox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TGZGynwwGMgJvcT9dUc9vfTAoGEaDX7TEy1LkSB4MmctphfMfozrejeFWtUbFFU951FXkeU9keUKoiMZS2GhDTN",
  "key1": "2ErN8wruLfE1vVdtj1Fc5Pp9NmTtdbN5P1YWVjLCfRyfJNmUQ3WeJSZXFfBV25JVTKjG4ZsDJ94sTdG5PDTpsGMc",
  "key2": "3dAaLfiTWhpuonHxuBA6GJ262KJgvKGFN6qafoPHgGpw3oam9oYE6DZwxJ6YXxEDaqEx6SfJxJDfhZntK9dAGkKK",
  "key3": "3awmK95jo8H4UEAFtPrK3UCDb67gBn6TjQsauAxsrWmDEYEV148CzZ7MxLu54G6HyBDWFmd232H9ZZDyURjNNkY2",
  "key4": "4nZ5Tfen5rZ7ttH3WBqNppGmRFx8gKWJRpYQCeJPtm8W5Yk7xTtq71RooC9b7sURkDK1d4HG4soBdgDZYbUtcEBx",
  "key5": "Ugeu9DaGgfGhBtS8B21BP9TQGdbs9eW8jDZPRJo9mEdd4W2gjEPAJ9qfbnaD5RuAje1Au6FbBierkiUf3huZVff",
  "key6": "5uxRWoh4WXnj7cxr1iZwUsGWLpPXMY3NK9qnEZyeLEg9eJhGZTY8bL7D5FNadibbredEWxwUeFqAEbyu4813ySoH",
  "key7": "3jXQhnTgdkkBMZTeiSRme4c6Wh2eXRsbjTU5t9bashYMFqNFYaR1Rj1uonN1emRZr2eTMM5xd8M6FvBwjPLMyVgF",
  "key8": "3cRTFmwUD52ktDGZ5iGVW2sn6b3FFGm233CkAjUUPzvum22byULgUN5A9FVJnX4ZAVJLUjrheWfA5crQffaVhtzx",
  "key9": "5TUB9gbdmw9xeD8UknwQmGMTr4PZN9z4sZR1pTFm5rm5nLGmh82wAyCXSoqkAfxYLz1awNYYbQ2P4CKZBEUDiNXs",
  "key10": "2VFJ12hERwxCT8DYWJQS4BByVawskZ9K1uu41S6hU3RnMKWrKjx9ULyrbmMxWQ3FD6mW3QEad1JE3CBz46Q8o2kR",
  "key11": "4ubcs91Kv1ciUdfjMSFYJ7C6hnz5XYQRAiDfz5KKHqvYtu7F1UJqp9LgBDvJyfEjWQYdYBd8TMpbis1V7e74unua",
  "key12": "2ichAEkfrFuuVxM9Cv3U2zmzbD5Ann1WJMF9aWQkUTgRhLgCdniSvdMjmUvh3iwvgx17szqvi9HTYTMDFwsJRT2t",
  "key13": "LM9nf9ttQK1WTMbsseVXfhzayu2GCn2hhDDVDVKbpzsat49KRWRHm9DBAbhW1ygiFgezkGAEiBtQHvR5k2ZVUHG",
  "key14": "4CSioFrsy5jVYfhcoJG3h6hJarkKpN5cgx91pNeUX7r2F5bi9v3J87vQxH69k3vdJYpA86qxK2dmXWqogPWMDpQR",
  "key15": "4Mj2znt1SWFS5yDfvBBA7JswKcnbWAZwsK7HwgSH6eHVRmmBTuTf5MrUczchL6nEQN6j9zUMWMDGPdGUr2X4WZEy",
  "key16": "3TSfEE1CPF79jfWVQuke5pHu2HzdLC3vfrCuQ6CM1qWWbZuNs6qF78ngRMfZmthSVt2gYQCXxhhc1t9igUqvKjwE",
  "key17": "HKEATAspxQwQ4Rv4Va6WLi1bfFx97ZbBrnrneEBZCD8doRPvrWy2uqvv7QPA3fsREtknzkTjnrmyFfWmLa5k2zM",
  "key18": "5RXL5GveEygpbuQsvbVrvJ6CSSTxvKQz11JpxaKnjp9STEJrAahFnkypTAPu3qxCDQGHHVmk8P6i5wV1Jd2JxNUK",
  "key19": "5YDVXqm46U7AurvBoYU1MQ3JzzvWTRKS2M9EGsLgJ5qKptCJ82vaRYThvFZ4KYterCZQ8M3YHQH1i6c71jVvSsN3",
  "key20": "36Z9De6jTAwY7hL7AFYMi872bygTHx7mggHaQDCi18VkJQNRhCtckRAD4T8AkpvMPGrANPh68ZUYY26cUrTrisAN",
  "key21": "55r5icQJNGuL9UYQEnCc5Uci1mG2iVuye3YfottezWq4Yhq4XihefEazWKANgaavvWy4kSyM4o714XjUHqAYPe47",
  "key22": "58qLuu2MfZf7i6ZAzaZhuoRXjjhsLammLY56zKaDKsREFQQsD6xns5SikhuKaWHW45P1jU5LRBik3ZrC22ss2JKP",
  "key23": "4zg2fZnRxRvD1AQRihfpqHJQAcmT7GtsPa4amdPY5epwhFZg3xNYAbVur2bSkgzhjX2ezGuq92EawtxTZfecgMU2",
  "key24": "38WMDhautmi8WtyDXJSKkUUj9PyidahW9pfFmi9dERQ4t6gCNsHdpuEfHLPcJ3ejBEBCYiowpoSKF3wzTf1hoPZe",
  "key25": "2ijkK9h7KsLQk9G25ti1XsMW5oykv9FSnDPhGgfJBdZWcdtk2F1rr6fpFszedUkmBtWkLDGcyjVemJ5aMRBaKDFT",
  "key26": "37oxD8Sybexw1ZygaQAwXx4AtfZNyHH4GWGxoFwar32hdRnAgYLfzfXQnLhU7pbXGmpCroMXsWuVH7TmowqVfdWe",
  "key27": "497bqEBYtM8SsDNfkA9wt38XFwQxMCFCW1bw9Ed8Qvhbxg1ZvQ62Pgsz8xd8v1EHEvzT18NAgJGxP1fEcekmkGog",
  "key28": "4mDdiaKTCf1Q9t35LrpVtmihHE9swHVdMsBL9YHFWtjnavB2BuKjLNactZqRwioJbXiWEPrQwBzng1obAzvFhWRn",
  "key29": "3LyufmmeSKaMDYDnw8XMyqjp5mfKUf8zJxb5aFDEUx9HcaF1f3wwAYys2rmeGCaD4FfdqcJCfQvRi31YqNKiU2ev",
  "key30": "JmsJTetG2XydFKARuUxSFh44yFV2pkrvXW9qoUu4Jsj16k6pvU1Aaq34VDnLJhDiaBjeP1iecknyXQUf7ixi2nt",
  "key31": "3LgM74ehZCJz1JJK6yQDib5Lu7oM9AgxLU39DfLYwVLx2MLxab2HDYLDPGj5uKb2jTBFPpxvdHPBdrYYGa6Vp2uU",
  "key32": "3jAf9QftUXvRYd7ZyZcmhdwC8XfxF6VWEKtqvKbLnVSWamdJD2FSxdqhRxxbJiuJHRBg7hXZsine1aciJd7dQLxX",
  "key33": "3mkFNF7zu1Ziet6oF8dUHbFFmjwA7hPcuJKmR5HLoPHGcCNN4QHMG8XKgMdnmDDW9sZ44Zr1ZEQbGiZLD5rQTaZe",
  "key34": "3QGgAYmWNENKCXQGpgfAXFgcRRMxsxS4Ks65DErj7xTc9cVPKEhMYb7G3MopLmPj4MDBKsjFsxQ2enthCgbwiQ1a",
  "key35": "3Jdy7iwZ69L5Kwz7AZz9dfvipuWDh4YdM2iMJHVjuziHMyTxNKPWwFwdF4BxaNpHWXRLoGUBxUhvZou91DDeDDdw",
  "key36": "3HD6qJpib9YHqzBssQSa3T4gg1WSpHu77Tu1xYNwBsJ6s8j4uSqCudG5TXUbm5RA3xEjUzyZ7oDbKZc2Z1Md6bL",
  "key37": "4ENaoheQcmXwFr8XLxhW7LfUy59uSV4UuB4NMAQGdDVbdDQpVPuPg69iptvMbPdoT6aKqCwrWw1dERXdQZcMEMS7",
  "key38": "2W3cLhW3Yi7TxyCKXx7w1ej1xuiiCZn9BhJfiHJqSa6b5ZvkrbGBH5n2ChY112wgzvD71H7XF6y1DQhyjtXdy7Sf",
  "key39": "2zvF65BNKD3HEKohwyNHWtPbgwcwVybhkJb7M6Vbye6atumsr5iTQoLE7sfmJ9mzLRqWpcx5p1iL3rYiFK7wUbQN",
  "key40": "2Ykcx5KAuu5uuj21rjNJwqUx8QGLA4BR8YQqEAMN719ivKXWTE1azLRKH6RJ729qZVKixEsYWHPRyHkJodyhXK4D",
  "key41": "3SNBZYmSrj6KGBcHWe7vNjD789qaQ3oTxYUrTPC9vhmj35MntoPyY6pqZWDRzLnmyFFUy27aKaFwxvRqkZmZHb3L",
  "key42": "3N7w1yBrUZCUtkq6CicHuWVXK59rGDdbtSXpUaxsPDAtF2iPt4KUmKLq8toaErWZZED4mYX995as2HSZ5h5u59qC",
  "key43": "f2QbiGCe3526s1JrX77q1jRngesejh9nfVNvguXNw1qUB1HxrjQH3hxQ1RVFYtnZYEmS1y9ew7R4kAk2Ba2qxqv",
  "key44": "XKWeM6k3HmmbQgjhZwVLVhFBbkQs8xS2m8yRtoReLBhXUt461nih13p7fPqsYQD7SCXJ1HrM4q5Rf1GQpAP55Pt",
  "key45": "5un3zAD2DfeD5Gpw9aHtbtEqKvScW744YS2L85CD52HcuAsFGuf55keHNx1HUE2mUSCkWigi4nMvDB1uDsMC6qdw",
  "key46": "576Nch7dzsQ2h9sXTHW4CobrBi7tkiTq7tkyGB83AjYvSrFXRqHxgR4WVSWSWVLiD6SPrus2mUQFwRz3jEFbC5yC",
  "key47": "5rhb4Z1NjagNByJqhdx4FtoXwLxDtfgmGdkkzVinJLdCp2fLKoZkopb7UYS2itryCwQfTQBUHf87xTR9RXgc3X92",
  "key48": "3Urjh6rUWh4LXfkBENxN3KuJEexWNzgpnb8oRdiqRgCo7EKoZsfX1gxEpJ9d65zrXYbDZTRgZUE3a5TPmRMRbNxs"
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
