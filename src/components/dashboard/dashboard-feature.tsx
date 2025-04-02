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
    "4DMBZCWoqvviiinv2wvEe3RxoDDB3L9ijxKJvnWvVp78k39s17qdP4oBeXVg3oewJtMvKQCVFtn6WSy8pY5eU4kJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wTZj9hkUBmnSE6HjGnbBKWvPhMPf1mXzGG5vLmYsJUbVqVSUwepX8UEPTZoRnANw937o66PTcQuhEfkX6U8ziRq",
  "key1": "H9imiJxkREUgjNTvbwvW6j6gjjhcaFJzTMKCbvQWshsjHU1eAFjSRysE5pgNVYDjD17SWxfCkReFGQU6fnVNHSF",
  "key2": "4fJnqwepdEhFyFny5nwmADpQKVYYbzswWjwJ4i69HUSqUWPkXywsMEXBS9tHafwX5ov67mXniZKaTCnP2UfaCusS",
  "key3": "eFg7ckFHwAhfhRWHRmuMUyQZq8rwAtG2oE5RfSWgETwy4GdnRw2tTLT6VShWGdKea1sujtyhjtzfwACD9wBnEpE",
  "key4": "3ujzuRrd47dMjs7k9s5QhvesUaMf7V9gbKg6hiUst63dQJaMx2xexNCuR7s66rFtgW7wziKLxUG8G8nsRW2a1WaN",
  "key5": "4SBB8ZB3VTJq5bcukjHBSSxrhk28fyaTC3zU4FPW1Dqr43riYAGsen3iFh7rs4GWWTuSw4XJQFZE7zjWkKchfyYr",
  "key6": "ZXkHqfR6EVUQeDz7FVwFHtxEUpMEQLpGAhGMADcCusJQ8rqanMmicUJUPK6CMY2Ay5TzvNhyDZTXMUwQjoQiC9Z",
  "key7": "43D5cYVa7p27UwcdaUQMGtG42ziRBJQkSEU8QNBVG7zedQD2fnUs8Z1MU67W69uH52vEz2JLDnJDmfkpSi9TaXN6",
  "key8": "5buSrSbryT1gRWTms4w8RjAe54XaWNCpoJZVppDEhfVuydURXeb3fSj4iRGQk3DikvfQ6KojkmHYDfQtZajHfshG",
  "key9": "3jgssPTn9RXpkmLyTACEKnUkHfJMtHbEVwbPS7eqj6CE5EhntFfTnwc1dmDVe5UDU7NmEwZ3ozuydn1bKu9NYEi3",
  "key10": "roq31zqn1rDN53hsvVtTZHoZ5BfrGoW3pNGuSZg25sL9HWJcq3D5JA8TQDyTvcjeLnq32cXK53GEyg2sZe42FdM",
  "key11": "NcyEyFRWNNuk64AKSW7tEQXQjsTtKgTCjxwX85QE941tocJU97GNysZRT99ZeSkzetbd2TiqN8bQtKpFhL3N7PZ",
  "key12": "ube6WN28qPXHvEnUGNxTTTffR6cCCEBWPNX5ZdNBKgFzXSMh6PZYo6QoiFvqaBvUxCzuripK8KRwvimVYVy4nPc",
  "key13": "3KHpdyRs5JYFfntDjNYxhWX5SJUJr2qLDtKTwgfhhavVZwmzye9eiqKJvmeybix1g6LYcuJgZZwaJuAuKXandqrq",
  "key14": "3QpaLyu88vdjRjFHc8V9xT3WZiZiKLqTAoQbD8uQhGtt7p6grkCsrNjJUQxLHHWvkyZ1LksdZHh6dANLD8rJ7KBN",
  "key15": "4QWeqHRj8pRxAUBsgu5GNCdzXZsYpezWsCQ8oX8PYt3MCXRK13mEymuxgsHuHcfbwXSZQPxtNArWj9DquQYi8aUS",
  "key16": "44oaevUwewV8s2YkrPe5cmxZHHLmgvXmd8FUpYG7EeZo6x6xTrh9LXJN2ZF282hsEvzeyKJvS59Z1qDNbsZAmemZ",
  "key17": "2eLarbGDSXuFtUbQaGSQCZCw2UDxzaYxi2GpmVfbrFkQmF24wAomf1VHdBdyrrPMFHL5dBETL6B95W3NAyr9euHX",
  "key18": "3vArGZZfKvCEeqTQ9MT4nqfpTp9MWrMVwgum79LoBwEDHJtUZeqJaydXn37VGRpu83NmAgYYvr1FCoq85hmUAsSG",
  "key19": "3Z31TMDLkWVFSo8ERYqhNarjDXpzQqoLmWQxSMsNfwgCDSuGt6ZiMJkt2oFcxkt1tQwgwKmtS6YnuRF5fgy9KreH",
  "key20": "3QGnqcXyqDRT9EE6Yw1J9L4LszkT9H7aB6WErBFtbcEVpJjqq1HFo5cD4hfBk8RgdBrKEkRvvGzKCFx5tcVKegsP",
  "key21": "5xfywmKi4a97817sBx2htY1ScVsXER5zFsBvxuJRUCAjXyCW9oM9sGh3mHaqqAJsh9HswQ2YmskfUphqC1ExV96Y",
  "key22": "FegtZ9ApLuQLrbh7yhc1LqRJGTgKYmsRunKJVUCgF4Yhnn3LLC3ZEpMmgRsePcjpJq7yCGjofF2fk3ZY1Q8WUHK",
  "key23": "Z9fg5ZhbuuxvGmZijYtA4txWAQ6g8deHiotRKdoRGqsXdkVQQWjxgEdmdAmwePAkBVAt9RGiB2ryVGwBPwN3Tx6",
  "key24": "W1WzxdR8GpRw8EiYkzGY6yqwcX8uf8w1ToY9FEKEU9EL1XPUNvuw8RhA42BA8n7rVK1s6imJwDvxHX8UkAvtRyK",
  "key25": "587oAr8KMBwcmSgn8YrHu7RVi5QDZMyoq57LcQihYALTCcXvJdVj414aRXYCXuXCrJJyuNDusPFakbJEvdXEitPp"
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
