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
    "464stEhQHRz2hdhMr1PwuM25DKc8rzHoMxfAiW1ixXFuRswgyvjfp6ft2rT7ehby2csQsGVLoiPTDZiVNpBJvo93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VcS16N4NaLvahJiNCLbwgRFaTafdKUnopLHezcVJDRi4YL69iLb39cVDE8jMmmgz3tVJEYpWkAwy6UbmWaufXvL",
  "key1": "1TQCKvAHt1WreiJEmami9uRdG3mj53B1gASCemYQ49gjLPp7VtsmsyFTsUiyukSmq9ARTGj2eFnCKtLhsh81yDW",
  "key2": "5R4DTj42AXzTHbniCMFFexU7WzKCTNGcutPNfNvrGmJdV4YcXV2nFAa5MxEz3iA97yvUCPaYiyVQKRk71EXxLynw",
  "key3": "2b4xEYL5gpGojtzmbmZfaEPUhWCUNhQvRux4NYzWARxmwsCbhhesL9JAKru88t8kjkkHQrJrsMx5enkjPWAoxcwx",
  "key4": "5qBKLmcq8iLoSuTR4qQoPaQ7vy4VXpvfFuCEcxRinzv3FnzMYE2HSLyv5aGBkKQ27uMgEA1MiLYSEL6Ce4nJFrST",
  "key5": "qgoRKFKNg3KEALjZbSRjbji3aiWH86EDtUybs5g9GdDfyig96mSAFMAY3oLZAgc19VspcsiG66V7zoweJ9T1ZxH",
  "key6": "62QDXCJEXDa7dU322nuZw2wdvbedSxDnaqWFmTu7MwhkTE2x7PxQmWksG8Y6rDbSrdorvh7KRDzxk5DT8tC6Hcgy",
  "key7": "3D2Fc3xAr1xfbjGgR54MJDhsUe5jp56HK2xgpULAeYnzoGJ3bJRrfw3d3KGSu18s3XRT2tHLwcyTQrLNPWGc8nw6",
  "key8": "3vjTsuknZsh1YSkUWGQcGfNqUELE5Q1zEM2Hg8Fy3f7RVVEo3XkGmMwFfBbEjWGCuVAhDv2NttKDPxXAGZoLiZ43",
  "key9": "2r8L4A22RHpiBXJgzf8dLWhDf4hV2fKMhuCZonUY5yt6diaLLPeQyUrggWSTDHXgowXRGeifRwrvYQEHZGjhU4WQ",
  "key10": "hrdH2dqBYNbDJZGAfUQEVRCHYxHBcLBNo51hchRBw6YHLXAafLgyTMHZwYFoKot5auX21xGmbq2j7XBPM2vbQJb",
  "key11": "VNq1GBGZicFck3uqUt41ewg6ohjz6EZdyWwNHjZywikCTGRGU4SZ89CGaQTajFyt89Ly9w3mN2m3kuy5juTNcbu",
  "key12": "3eRUo8YApmQpXsosbSQEUHfMhuMxgQDELRqHW5zNktL9FVCNnquF61663zgvrsxknk6fdgJV1ScZGJb8xwtC56FG",
  "key13": "5jCLrmFN222L3EP8hwB9iFY7bpnpo8PZgVSTfcfLGsQVNXDpcBUjvbMPuxQRpJqCqsDpoPSj9SJnECZMapxEzS4H",
  "key14": "QK2qACmQcwAjNBpqVYRjutmAiuyRnudDJQnuWdGHE42aQf3onYysmDwNvVqQTU8Pq8TqkUrZujS3Y6HvcsUTkPT",
  "key15": "65ScBipyiGvyA6qGMTxQ8UxPzL77WtSVRuRX42drMQnwrzmKzL86qzZXmPeVKqdYMEjRwcm44P8Z679Y6GqPnPkt",
  "key16": "4yohvdsgSfyhA4KbTQEScXapgZAb2hvr5STr9rcngHE835JDme2snhiA5hv6N75PVMtG1BpNZ8Jtrp8Q2YH23u3m",
  "key17": "3zxdxJVQyiApbWSJ6J3EpZAf9JVNyaUrqvcBZ37vFBkzUHYVP8uhjUbh8Q7NEZsvuWPuBBRGX7PHsdzibEKuwdRA",
  "key18": "63hzhXLwx3ct4abdywCFNhWejt4ZGXY7ecMUwTVSigUhnCzts8T6YPaY9yGMTn9Ce8x9QR5RgN7DDY82cbEa8Wct",
  "key19": "mUgSCp22rkLywJqbeq2vEzgzzWg5eQX3ypScRXANgcBdqn5UmVZuzdc3Myqb9tJjYKRohGUwx4e3xonZb1qDGGZ",
  "key20": "412mF8KpASqbMZHSwkTCaMV2NXApNLQ8PSJYDCDWnJ9mEnArYKSb1ZVULyuu2AZz3mptXuDALok7bxThNuSFQS9s",
  "key21": "541xoExkgYyVSyFzHsERdCoLBJSoYU3REipx5jv5dXgmrqNM223xywkVQFCmet4bor3KkZjD9wQPnezfABdMhAnZ",
  "key22": "55yw5hm7ui8KEh6QdmyXAkMYy9F7DypVRgZW9MT9RfVyygXaQABmFvS3uUsRiDZjBA4KX7oXGXTBmJYKdZnNSkyQ",
  "key23": "5k3oKeXHGJWYPpSAybY86eZsjE3See1Z8TYd9XTPCWwx6xy8kWL6tZfjsyktDojpvh6MdbAmxZr1JSDaX3QEzNVr",
  "key24": "3UxjdPm72KDm2pmMB78na65bVibL4v94eUvry1joGeL7dChiqUpRiinTYtAR46nb1M5GoUvjHkezjmGWQ3APUNts",
  "key25": "5RzHvibukpjoih2D7ij6xvr7b2YRrbPpWz4pNGzMgAzQZaK1SUKxM4eS3mt8ncmYP8DGcnVeqU6HzmA6pAABr39c"
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
