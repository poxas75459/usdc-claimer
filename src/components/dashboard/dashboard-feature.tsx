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
    "3xbE6RcsTvyeVK5nts6JWboPaYMFajnSYRC9xVXMvu8zkpikx1YsCxag8gb8ukSnyEDPdgmiK7yoBQYhZ9g9XUaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xUbgMFXybjtqp31goG7LnAiKTKoLcKXCXaPu8ys9HzedBKwM7TVUNVCwKJ9vufy8sEanJCwWbSYKr3As4a7kkvK",
  "key1": "4xGjRBqHwaMhRmRomcrh3tTvcq6oFstPS4pZ7YUuc55TPEGZLT7iv2U9RYSrgeuKkRSjxEYkhjzwHKdNAXLuEGbK",
  "key2": "2L5fQXWHR4s6cBXPCWo65DkBGEKAaDnrpCC2hvbgWDuEZrjEsntbQHQ4yiCkuzbPjqVFZ63wZ93equNKVuYd8Dhf",
  "key3": "4H3q5woLLQRwNMzgEsQF2YwD5HhH2X8FA5aZCqCaigAzK9EzCnDFhk4tW2XApWS8KeeDGQ4pNamdfybcNZPtGnnm",
  "key4": "2ZKuDFAZTjCeiH5gy137z4yWv5UdbEUcv1iEuyGpN21ViGdULv6q8qNj4KWG8AvPWqhYmSP1LRGfrjhCZDrtBKx5",
  "key5": "2aQaHo4avPono2K1DmQzaUgUGcbMKm5i4kEVjovW1oiS8EybgWVVnaDZB8PkdSSSsuEVRddAuq1ATzhaaHdVDd2E",
  "key6": "GPbQBh3xtJacTTbbAvmzWqQZmm2okh8hgnbfQMmE4d2bN9rbbk8LQkJJxSBPFfU6XuhxTUf453tSMhiQv8wFiaK",
  "key7": "63ix9amk4WPbNuY2h7vcEA4cM3qdGucSoDbujN3bizVfMZvh9gJpbWBCoPuGhBTfD9YFg4k72TaCxwAEcL7Ta5No",
  "key8": "556Qe3wT3ZtDrV4iyxpp5cucsyge5CARy6z3hC6JYMEDTqyJPNeWc5C8ozg9Ao4N2BMBvkgF6Tsz6uWfYr7sryRa",
  "key9": "4s6iiLo1WTqKLu2UdhGq3nZyfKnHgp4egGqezBvATMQheoL59AVADSYZd3MihMY28eBzzMmWK1LquK91PVEfA8Eq",
  "key10": "4cGbjDn2RuT7Pm9BWeEwWCTR5fdAS8JSjTaK3WzVBDCSAoLne1wTaoDUU9itWDAjs4NFmGTJbrsodxZHsQ35RKkM",
  "key11": "5ftxwjjiCFrvxjSfe6m1RMQ7fuGKYhgDXfCbK3TzmApLQGTUr85gQuGRAF6z1y5D45fVdB8bWgPA4zuU5mRsrVuj",
  "key12": "ktgehApfqeaRmdBHDYiZ5G1NKj2aDTKT3bCzLYbu9vStdBhM9s8g9NWuPGyKb8twGddi3WaebqA6w5WKGmUX8tM",
  "key13": "3XvuGeMGjVqNp5o4vepTEDptGKDqxjZwPXDTzLpMCmCzURjk8gUmFCjF68GwByvCQEBGKbtcCu9thuB3s4ibkSBf",
  "key14": "5MNT232hJXTgpR29ajRhcDQwH8tErtfBmM4hNkkDaKg3HrcEn9CUYMxpnjCrHMjeNccb218fjN2yTRQuuoNwpnhf",
  "key15": "4gWfSDg8xesvQbaVgmooNGPfvyMfP8msC4H7PGdtSj78pumHafL6Ro1aVSPsfxHsZ67g6a3Y4TKuoPHfUTYBAcmQ",
  "key16": "hZqeXButjxPLV9JaH49MQ1qejR9cVFDCzQk5qeRKWVJZtysJJK8kcj6y6j9Gr9wpqtYRak9cWEQG4EZ4ZzQNT49",
  "key17": "57XM5Xi31wgXCurnjYBTNDdviS4wtXXFHkcEEPYeHG9dphgrqrUf7oo6W2RBeiAJYfYXMAjMtxr78iDCnjzgvve8",
  "key18": "4royudwLqKkZndL4rwn7EnhERhLuAtXend8a3acgoRgrtp1XyfZDDemoLUxJqciwmwTQC6hU5wYEviRbX1JrQEmm",
  "key19": "3G3pcbUZyrviryix5Rmedki6jVBUATu7hGKPiQieKq2mY9d79Y3To2D4wUivA1a5fXFAL9TioaPNabHrdoBnLy4f",
  "key20": "213xjeZViiBLg9L5pAKALSm1MeKrpUK1oAd8pdxwzqpDio8QPQGzB4anJmQust3qeh6oxvzRpEdwD9WE2mQrbATf",
  "key21": "2ThMbYtZadwqtyfAQfDvEoYZTsKcBcgAbGNYQmJXVpwmNs4RxmQvbgEyDD93HvQEu6Aan7R6AkvgnTiXuPGdsoMv",
  "key22": "3BTs1YihNobS9MnFte9BdGUXXLpuJGx14Fcg3LKovFcqWyHCwjQW67JgWmsj9rjgZ6L2LVcRjxuYqAZcf8GCpKkw",
  "key23": "5wf7uDaUNHV7ydu9SFqwaWL3EjTVgUCTecuxVzSgmoUfE3K2EWHHP9sRr8ZdFtiNr14BQMb2baog9GdoMSECT3ps",
  "key24": "5Uicdg9ntAxfVKUzwT1RjF2QqEXbT4LiaXPp12dFefRaN4n1EWFaXfoSGBw4k9j4KKJgR7fD5qjDvBjzpZExQucu"
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
