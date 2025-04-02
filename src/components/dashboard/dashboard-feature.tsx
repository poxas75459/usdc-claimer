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
    "AtgsYwaNHVVBhnyUyJomm5LJJyVp9GCZN6T1UErGyGMBxQSPx7Nk1EvGYZp3UanpRuVUT52LKLsuhneMkUrs5uJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FaNKNAt8UkMa1LLBqfjmwpXWssbcLm4PYuacV6DFd2y148yfaEqCTQgBuRXjCnWgGFw8Qx1b7FJxJQSfVQjPo2G",
  "key1": "5PK1LP7PPhgT7MUSv91NeAKTqTbETutgC8utYDQhJaRDEdrJu3cfwT81frUDevASRqQKzAfbMsWUNbf32y8PVx6C",
  "key2": "2dGbA6GCVrmWYchU7XUVGBCbYW4Cm7WsAgZ6QTZEpjKhWKT4w9geqZLVGvmFowqWRM9gvSqn5AKVogsw3Y63Duuw",
  "key3": "3GpGXbMgMVbq7vufP3sZSShcipcxV87Xb8jN5Nu2igRQjAYhAwurRjMB4zj65c4vYv8fMWbJTsiVuVj68Rg1F65j",
  "key4": "2hfqAcdiSVfZjvbMoWLjgsv8Ttt5rKnFV3Q71JxGr8QTuJ3s3TMFGnfA62idcBGkkgEoHmEv7G7vc1ZqMnbF4fn6",
  "key5": "5AhvU2QxAhSAos3RDKqipuzbM8UVDDvz1uXMgz1s2Y2XZ24KcajpucGd1P6vWMjQTQyxLJzYR2tsoJ4UGzKqvGp2",
  "key6": "mAhP1SZvfteShH3p4dbdY6M4dyosD9Hsm92fRCgHZcZQLrnX4pmUA8ebU8jq6XfeVRMPQCJTXu5D4NqvHjwDRPU",
  "key7": "gnsRg31riqa1DrvNdKVYsQdbzVZw6xj2S2xi9yj5M1YXMQvCnbNXn118YE1TBy9Se1KyevFx3AMbeX3TW83GXC9",
  "key8": "wabJDYkYJPV6Nn9j6LZ2i1Bgtz3pB9eanjp56CUyRJTzJ7b43YCdz48JtTDfMu13t3XMuUjxiARcB3fzmFrggna",
  "key9": "5yuiZSPfqKQgm6ot4iiZRGCQS5QiJWxTt5oVM6kRx8gK5SSdL3bPEAEPL3NvJkKnZ4CN8rQ6NiHbw9J8ZrWmVD4G",
  "key10": "3JyyGWYH5D1jTbBDK1bwFgGWW1aP1DqpE8WJzytu3SqaSenLLAWFWNEsCRUr4gGJcHYRHGKQVhotsP6uJYZXt9L8",
  "key11": "25sjfAQwjJjLnv65BT7bP5U3CKD96xwDZuyqqFbgEvZ48rNZgRys81wDYAbLitPj9KonzCt7FxqN2xHAV5FdN4m4",
  "key12": "23oUjsQ1PXZm1JdYV6vwkb4ZqzrxVzKUR3FsbhYhxApeDKTspeNddFgJv4eNDKGVRPdyqQ74BbeMcnSWp2kLJyYy",
  "key13": "3Ewrr3vg9315JtZp7pB14o7oSYeWnH4r86vtbZw4WV8UWxgj9wGbZ6QpaNKLbVa1mWygyAMDyTiwsSzT8v7kUWLV",
  "key14": "46PR31sjuyvP8raTshornD7voUdqHY7kvCrB83zYz1U4tFphsk16TdqtMz5D4GssUQCg4vBUa7RqS7miSXmjAwwd",
  "key15": "42PdBCQ8Ta2Gm6W88ssjsB3UmZRsfGPBJCztWFpNH9jsmpykan86n9oQZ6VTng4sfWxgHASR6z1UbTBaPxnUYSec",
  "key16": "U1UURurESaCQfLgcYTqP64hJBBtEBQWu81cG8fQD624GPXmd6B862AswvjHd2cPmpcwNVdYCKmmyyDYxvogVFoQ",
  "key17": "22P4j4FHwPSWakJ8Ag6ssZKJQTontQT6SuHnNHJpe5FKhu1SoLwJWUcc8P5Vki2KVPidd1FmLrvKe2t16YjzvbUA",
  "key18": "4mAKwrR2J3KJRxQDJr3QoFGyQ7qgybLyLzioeUgfMQLgYv53GpurCNyY3cQCuQCuUXgq4Nk1iYNGdAoP7FWBSSvN",
  "key19": "2TXkU4ZaBrz6i9fB5gdwjy3ZYcCa95MEu4JGjSu5NdyU8ReJVcXHUAACfCGpMkDgZ8vN6nccfaKPDFKYMLcq7PXW",
  "key20": "5J1wdAd6N8FKQTe39nALb2wv3o22qZ3pyfWbP6MTZdfh1eqKvYw9rEPuraULAWvQVSULHQ89UCfU4TtjxhofRzZB",
  "key21": "2U4Ui7JRaZGgznDHujrj4HU6sMTh9PbVDyQK56ySvC4xwnBpFewCoTfkHZd6P9ZW7thtf21qiE8kC3GfMhaqESTo",
  "key22": "29HDS3S8vPVWynw6h3G2LbU6HSi2oZFGrBetJP2zhtXQoKPxERRgYJfQygqSBHBPTusJEELH9evLQ2cV7WVZP85y",
  "key23": "4oM2XquHdkSPEo1ZuckcfVQ7ZzqPVWu8NjqmEyPLjaCMNbGSP5H6sv71As9heJKALChMqGvt31MNZ5XGAsVFuVyP",
  "key24": "5VUkxcBy3apSB6Vc1NqUYAtL9gnmbFGub8PvpCRP5HLTaYmkkAoPhW2jHtvhZNTbeLrtRfx9wndYCa4yEKgmhYJQ"
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
