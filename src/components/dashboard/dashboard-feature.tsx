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
    "59ofWMQgUn8PULLdYFxg9U7no6e3kdEBcmDhcgMZ6cHqNh38HzbEvzJgcihwoYbXaPbHVCsjEQeGc7gTN5L9XKRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52LtfZ4mFAcQb2cVmCNMnEyGpaDepRhNojw9Ekzau577oQQEYXwWAphZ6QNFYTUfCsWZV8ihnEqck185YRt2HkkW",
  "key1": "4YWid7tyNMcJSR7635MusoWf5BBdYTP1GBdRVPy7wYxkfazyjdJW8r3RBzYQvKCwRjsijkxwqXcxsoJWiwVJH2qF",
  "key2": "aqDVuAVziodZHFVe3RgbKmwZ7edp5kvkNV82VTt4BGyX64XcVnuxfRa6hHqgaGz8UPD5ioMDDLgBK7CLseATTtj",
  "key3": "5F5Mqyzgmm5T3tcep61y6ECN6FP9X38XzsfRX69aKB3oWLsE2r1d8k7eeJv4RgeJFjRfZFsnXr6ujgwLNkkpFyx3",
  "key4": "jCr1ncuSZHkzsE6fKgmubjL1t3Zyo2N9WcD6tAD4Lj2477opK97ChweSSeLnr18knsyCn85DhGu6cWixs6Cd1wg",
  "key5": "5WxY8LeXM6xxnjJnRAwCDaHJoAS1Nq7KsVBYNmuhK9L7XKJLFGE5WG5T1dWN7SjTm8RMwpzia7xPEN6MERmPyPeo",
  "key6": "YiymNSpceMj16v6m7opvyg19Aq4vcyLCjdDrNzfVtK3H4q36PBu2uwGqyM8CX3PsettoBUHSoVEXetS5oknT9qE",
  "key7": "VEqHs2L2YWKbqoEB2Gk7YDcMsdYm7FZtg5aU3x9BbwWtny7Dn2kH7W6p3VVKn7PnruzQVmQjSe5iWeGSS4hU3qg",
  "key8": "2G53b9PXwZrevNy6QVaxq5F1RHtFxor13YNZfQiNpq3NSVKYb3xi1UQbaHD41ypdAac7dtNfjiFPaCKt2JL6Mw7B",
  "key9": "4f91fttaWJiCDXzUC2bdED9srp5r6KQdoVp3PzRBf2nmN4e2nSfYTLQXdFaRutFR7mjTbLJviU3MTNCHZzyiihTJ",
  "key10": "3yJx3UBsL5rHvj4uSxYVhQMcahoenNUa9rY3jnD5czgH6E1pWj4TuCbsjXD4ckPzM8Wb8TSqYL4p7GXzfmYsRBiL",
  "key11": "G85J2iLzEWPUBTfDRRPr68Qpwtc6MeUwtKgbjFzRmLUQ8fmAr8wJHmLMiPrVqzXcwDVAFZmNuaxEi7oJfBNZQ5r",
  "key12": "38k5wuEHnWGyp8hxVx32mhi3Q4GpzMjcmGHRRpqhAhLA6MhzxRo24kdzTEvemeAKbP8fB4X53rAmA7R2LQNSqtJQ",
  "key13": "4cRfqZJjjHEEQFjqqWDgxcYzxvNFCPuUyv7D5QmcKMs3A1uUwQbEKuww52MEsuYbZyMCJ5isdk2ZJd88WXrBvNkY",
  "key14": "2o4nRbyPN6wfPLCEh3B3BRDaKJeVhydFKgnzgAAnn5Mi15CtqVhyWBHxzkEgvZHXYt56zp5tFqk4UX6JQLrVn4Es",
  "key15": "4jQDzKG5rEtJ9SKUDWwniV6ji397dyU486eDo2AFxSssC2CBZeHBKBBc1YitHeLKxsp643dCX9EWE8tVmazKgrM6",
  "key16": "3BGmfx9h2YSU573jzZTLTRGkLQAqmcNMEjBudTJQQs7agHC4ybyxHYTotBsU8xXTnkbAtbyq8ZXWKyVxHzUF3XS8",
  "key17": "4iah5pwmkHnksfr2pywMNVwbpaRydr2cmvE86C3HWXjUG4xWYnvZHN79SVJ5aUsHQ5wxWhA15FAJknHS7Fv8UaZa",
  "key18": "4c1FkaFgcPg56TT3Xmn2ri8Dvt5BFJJHVzEjErypgbYXPEaiBdSCotjhAeQuAk2935ypsu8prtj5GdnT6vhWiGvt",
  "key19": "5nzBw2SZRESDnuWVM4cewkGdThu5DrFj43mB6aHAWadUeou9VoPMKqnkV3WR6BsAqQtYywDLqFKAcMccSMKpNe55",
  "key20": "5RQh6vXniS1TmqVrSBxeMJTHi6ArNXEpDG9rDzk7mX5f6uC67aSSqQconBizfu7uBeLbv9UqyKxV5odaeHuMqkGt",
  "key21": "5d93LzPaz7gisVn6zE9uzdxWjXYNSA74Cwm4jywF73WUV7GkuzCrpSgBg5DgzeM7fNG1dmMMR2qhx2KnWcwZ8Cvj",
  "key22": "4zq78n9bxHNWkPyh3qeKPMB2rYRTeY6y6UBMp9Rbqw1xWpRrdxRGjL1itUT4Evneh4FQQ8j4tiB5QhfW4NGUifW1",
  "key23": "21veRRkQkAh2s5wZBwc9wL1A9mLnupcdhzHHyuQ3pj8vBfJueym8kXGBBnnUqcXvxESvnsq7b7MweX4raHPho22k",
  "key24": "5b896AeG6ux8nUdDbQMRs4cwxy7psYtTdRjQuQrmT6dPRbz5dFtCrzgNpikY9fh2hkKFJMj14dJ35r6hzy7JP3su",
  "key25": "GKgUWXXu5c7uAA2pgFgxQ79RpRxs2p3xUgQ8DQhJ12pM6MiHc7KHfhoJYfLpAfU99Ci3Z4uyPC94hPwnBUtepeV",
  "key26": "3zzCM3EqBkjoy7XRL7PxApmUeiuLoPeRoKygHpscPtKbMqhUrwDu6F3QtJ3sUubx1BkKSDvkUDZ81TQx6VyqoTMR"
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
