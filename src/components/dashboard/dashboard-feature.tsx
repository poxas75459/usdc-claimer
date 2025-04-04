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
    "4PSqbZVQax4oVfxG2BidZnN2M4DGgwxaZ9Si2p22hhkUL2QP4uZonug2TK75Q4rzS4NEpjXrG84YEg2xPS7cJr9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RoYu7439yzdN6HwVhqPVGKqNbpTCXKQtZz5NjALkZnT2As7TLcV6ETTkkE2mSeD1ZQD4sFZLmSoyK965CFj4fjW",
  "key1": "2zh7G1w8sYC9sQT3ZU9irR27CDJi8jLrLs5qjMz3SgdGBfS9yGgaHRJVPu4eGne4um7itrM7csW26q9E9dieJQdE",
  "key2": "4QGNEWdxQPBWMSzKvtwQpuMf1D9HAPWzqCf9brE8pTpABQMVK3hEf1Xzug6PoEBT7dD7bEjd8cWZru9t29skG9mZ",
  "key3": "5FPs6adcHq9qjtNiV4sfZFakgPrZhaYz4uyQ7rLsZcKK3SEDWWDgKoxbDJwaz4pvdoF9ooNjPzYj1oPMJSfP9TJT",
  "key4": "4T6yxW3uduphvYKsawyoaQwctDQvuvTjZmmfo4KM6Fo33puaz1aoZbQMxZNpoh8P9Xh1KXsE64886cGz2DG8sngJ",
  "key5": "66HrhNE19vcptKu3ep44DPhgCLh6xBCaWXHKfxy4WQnzEubXQMGXM8tjwQ3se7cTLMFZv8GC87gzWnUFwtfRg9m4",
  "key6": "3UUFpf4WHJ6AqNxfgpPjQTD2UrjFMQLQjV9rCjZMUuYhPK3DZESK1ZgG4aAtZGiEk9HhWCATA98nCCekRrxbVYpL",
  "key7": "5LJKLDM8bUPAWA7khJViKGqJNCkKq5QJexMGwPcdZe3Q4R1W96PEH4cTjaG1n8haGtLAXqQafG84DYzZcH9PCzX9",
  "key8": "5TvbzGWgayyiw2QKa2pU668uWk6qypkaRyY99SMpnj2n9DUszeeSJMhX4YZ6Lg1Vn9qjNi9UTWjiSjwVCQCGQGhw",
  "key9": "2LZ4e6Y5e1UoyvcvJQSLzrrFv2xzJn9tWAY12VMymHWd4KRuj8u4R7V4wekH8KCf5imN7edFeU8iszKTxyX4a43F",
  "key10": "uk86TZ5fBTvby8xz5YcQrGb4kETWqMwKKgnWWkyj5BE4VgXEmYSaf5X9FvpMPArBiNgevinyQztkEDd3rGy21W8",
  "key11": "2C58ZGCeebsjRjoywFmA1V5USxGHF9fLcvaTuXqVNxaoeswuBjdGPukthH6o2r5HN2zHWmGHNV3jx3UsNxcnZ41x",
  "key12": "5gVwAJ1vaHUcL4k29fvM9Dpbu9TkEeTj1cxq87e17MCfpbT86Um2qGqVJiSc8UUrkgvGVM6GmdbqpxCCSovGnFcN",
  "key13": "5EXBPunjGQUGf6T7PcmUcTvedaBjn43s2xDF3seUHp6nFKh1WyZBBCTjEeZMYLEmgV15MZ6AFHsoLD4C3kRtE6vW",
  "key14": "5j5ZzJ5agoXZowfLXBuq9kYq6b76sG9ot2qcfjSXzEg4QoKi4XhJwNdZhaVyj8hjsS12qgGyJYnuEZnbffDPvGxo",
  "key15": "5ikLCmbqeALQtbKMBHMnTsCyD6cs6wbJPzo6bAAKFb6as31ydWSJPPgpTAraYw6BziDRu4D5Bz3fEAJXs1JdrGVV",
  "key16": "3etoexfdxHAukzzmwammj2DJECxLKLqJMuYXV1eqBQZJxhm2G69ksYGgXHjPDqwQxLodL18guQBfk4h9AJLj42X8",
  "key17": "2EYFuLm444J9io7Y4bPb5DEKTg5wSQRMniqEznRMinJ699CKytWfiHJux3f6duVzE6YGuchEhxSZYKUL5jVmN1tb",
  "key18": "3zYDmyELFjtT4FT5YR9aederRUFv1fAmAqJCm4pSt9Wv5j59ngZMnVX1ciSQnHDVz1MMjz4uexnjmWLx8NMzXkc6",
  "key19": "vifhcUHqLr5ugASjraSr6ssLcsfnGHvfgahh62beVKBB1kLG1wpEDnYwFJt3SS5FLL64enBLqnySfgjSXpv8ucY",
  "key20": "2b4iDzsgfe6L3kZQ9Y9AkZQFiEbbpJXuKtUSc7tQmtYswxXcDTb4atocuSpAsUxDDvgDbCaV1JH663qECWzz7eaN",
  "key21": "62GphkRLdH2uKg6wcT6K6DQjrUsd36NcsrMAcSFasWo13v7jqscRGynHhJSkb8vVEhueZNwDFNovzapAoQvyfUwQ",
  "key22": "4EaX9XmemvNeJSbVWM4f9ZuU324QRvXZJDD11okKVTpDZt6tTgjJQkLDyHG4A8xhDjokP1z2TPdGxQbV6aV2cyfj",
  "key23": "5x2eVZdZvRDFFQsLWHWukd4FGQtaSdzCehJ1caCeU4jDAExSFTqRB8L9oZ3P4VgmqCS4hrNCUAm4SrG9z5U3phWp",
  "key24": "5qm4mSj7xVf8L8zob6KsN5e7g1puCSNDc2soyBztTe2gD1mbBULDjs96ahkWRWqpiDarkVitD4uBDWMCcdXfuLFd",
  "key25": "2Aj6d6TqWLAR7S8zQ9axp4f2HjQ65FjrpjWk1j7StuVPsNjXTedtLyeM3L1fMR1h5wzjqw1KeaSgRxZmz7wQsYrx",
  "key26": "4rLy4gibW2aggidx5DkbAWHxqxzTegkn7RQmPhumKRQHnvNyiWznu1rLtAwGsjHaMbtgHVQvB8dirpidR1TY29RV",
  "key27": "2nZ2fiaFnAZTY1EqnCXDzWT2RQu1yWuCLZ3XhUjyUFUnVnx62VxFPdYLwQfX4gcG7tAkvKmicd7JK4nk2WdG1axK",
  "key28": "5f6gfBze9d9H2ZjcCUNEp3zvisbuNgdNAnFQ6deb9pKXhgTgCsYMwc2JzSjZSaPh6WDzjTqwNeEgvemkCDnmqYu3",
  "key29": "38K7zaTW4GxYRUkcAvBaVphThMk8eXd54Y6RFGuGwakMQDjPD3LuhpZwgXWb79UfqKQd8E4rBLoeyJsWdpHHAxQD",
  "key30": "4DQK8MSn9zEM51grDJNB7sNV9LwxwBXRUnhK6uYiRxcp6SFpMdPSFUu279FaxUkwaLRXKV9NEAzbQZmJG8ZCWLSK",
  "key31": "aWqdN7dy4zDxk737phJoYue24KjJasTJMvxwsqNRA2PLMAQturSeBhwAZeDJDrigrXUXk9w9N6ywtBbTkaRiLk9",
  "key32": "4PaYkbmVuXytP2ccFSbynjiNtr19s43gknLaZ8eQhBU6dpuZVYpVvBbwcjLmLX4LNXThJah7Tm4r55Up4NVYoGbY",
  "key33": "4K7RzQFfnuZ9Vhds7NYLBcwwSjikmztFSqnJ1oLGzLHRSUx1kxaNj658U8qLJrAsztA7sFzZL6QRS9X9Q8Qbj7Ct",
  "key34": "z1VtiqZZuXDm26NxTjv6PiNMDcSJBKEKZmQm9uFjLywRhKAXoRBz7AViTn8Gv2syEmz5gf4GTLCjtyhmw2hgJNf",
  "key35": "3ScmouY59XRxuAouxEjzK7zNpZWNkMVrLvxEiNdmwLoXyUQcWAGZJGJJU35JVR36orRzgLRQtd2yeSg8pSF3TFtt"
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
