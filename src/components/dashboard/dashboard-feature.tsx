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
    "5i8GMXvfiXyr9EfajLTVcH24dno84ZroZNtQ4s2p7zWoW52MWxMnFVGe6ApExGWQfhhGZfZFLriyWpbkSutJCCbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uTyFYoUD6ty68jEVxFNH6kuqLvSfDUd7h3urjaZ8pqabqX3Wkkpf5eg8yHgje8duxhhTFQZdkACgGPMdf3q5sNx",
  "key1": "4qUttYgSnHvXWPsRGBk9ghJ15e7qdETpFxV4ozgTJ29x6n5Q2o3YDk32xkKtX8r3HaPPhdRn86QqHuDLV2UdVgEa",
  "key2": "3ZiCQMrU1sMVJaggUe9z5Az9MhrZNCbyPfoDdyUwm38U91bSTXiK3io4qLvdZgX3umLDMukKaGrNNE27354yQULy",
  "key3": "4LECVvSVh5pB6wsU6chjSa3MeWvwa5RmX1Eu2GNGC5RukK5eTZGBXQ4YMaYkeg58zXyWfbeaAXuF8thw4tUuD6uC",
  "key4": "4UrRKPLj1tpufnW4KFFgKi9m2gEePtxGhh4E3h46zxQ6SWgyeLxU8XYxeMJehixGuoPexeHjRTFUPBrfgz3ynNdM",
  "key5": "4DGvBHS2tL5RZecmANwpoxhRWdb3CZtopDbbBbYu6R3vS74CUMivz75Cg8brQwuHDtTE7w14c4HMMspyuvx8Ydvt",
  "key6": "37kPGTKK4DMSvRJRo9MhaVzAVZPDrfTBf8vDQ3L3yo6mdqT8JTTFjjTMcu4Zf6n9D3AZyjC3pakfpKzv1uAhYdFS",
  "key7": "2mgGGCZbR5j2zDXiNkvqBDF7ozu8Wy5JegJAcUry4XWqokYi2tgsL6Ym1QxUxhrL6XkcVxt1BjrNUHBJ1Ks67pux",
  "key8": "2gdPgtujVWJdTN6QG9HyRPZQX9D5VS837qppE1Wc9pbBduigKRjAPTMCTAWjbT2YZBEbVXNxvH8BKT1oViYtLf5s",
  "key9": "4kYPFQ5QuhdCDHB2kBER3b5nFtpXdibQ6azd9HAmeCjmDSi6pcXKsnE23sKAuRaWkbeUbAFMRA7N3ycFbmNTYEZb",
  "key10": "3LQ1Ck21DML4ExRu94RXSi2y9qTkCqZ1wDEQ5mwjLDkXs97iG8NbVSnJEkPhE7nNH22g8mAqhMKQtXkJxtfZPyod",
  "key11": "64kDQf8kKCLgVhTFRe3e27bT9tyY3wK56Wu1WTicref3tXExEnYrNShsXzmmMN2hACUKyKJ37aH8phn4yBVgwF3G",
  "key12": "5qGEEsTHbYy7bXWpGWaxgtin2jsjYNchcqoH1GURWkjDrwi3ziRAbbZxsqFoCGkrGQTDqtduiZ6EEW78NyZvAEA1",
  "key13": "26q4i6Em8oMLnjUM19dH7v42crCjQ1iBcZYQXw4iZLwu8iqJskfXQXcmyTPtQaEVciRJ21g1fT8LKFK29zM4rHVq",
  "key14": "3nDnpLujMTFYuCRkMLBY2rqcQcjhiyZGtEi2VhVZBLir5ZeMqzbAD21sp2kv4XGmDrZBLhgv9UgKsUdLtkA71yUL",
  "key15": "2MGVHLcNu1Rj4qx7jzFR3RYU1CAabrSt6qe6rRyk4QMDsG8psa6MixSXLC4Vj8DPiiQ1babttgBE3J1p8ksL9jKZ",
  "key16": "2m57cbLtBxr51madu8hFSzXM9nUrt7jMATDKkrFFV3XXrqFYLMjommofKjpTAkMRfKfKzgkPUBf5UYnBGTv5rtZ5",
  "key17": "2hU6E8GxBQxVhUmtpyzPQm4xR7Cf79mkiqsvG2rpNqwhmMXBR8BQ9MaSK1suqVLeueXAEdTqRoFefF16A3Zac1y9",
  "key18": "4ZBhs773auLdAxBHXpYcDsMPwCaL5LoiWb27MnFgGBAiv3TRCDEYrQus4ACiXMno9t2ZYkhjVnvuWvc6Q9nxSCuy",
  "key19": "3PrP1W6M8NmWpptPYMWKug79cKiB4ZapYmMPRZARjEWCajvnrVC55LP7qexhdefMhHf1J3XnpE7jj59GrMGpfZv5",
  "key20": "2XbBaqS7tksZNLwcXi1nnByQxHynrj3JE5G17bh2fkJ2dK2JrWjUDDRSemP7HWqAHecBw92yLPrGMpoTYGMbAMnf",
  "key21": "2gGgRRuHQCcdCmWmPjNKjKXRdZq5WESHXCW5b5kLdypdfknzLhTJVjsjC473YHeHY6k8g61jL2hXNR4fh3f7Rfcy",
  "key22": "2qU5r1dQ3prEc85BnAUo9Z8cESk86Fsb8NiHhXVeiFh43wGsuCapmjva9BmATqWfG7w4RKx9ZCSrdbKr2NH5mJ3r",
  "key23": "3Gy7J6gHWefhaYpWwE9i68HMj5jPhSd8tuAiByjkeQeCP4J27P4uz3YDFkUzfeehS38UyYxmHGDTk2YZJNNWtoJ7",
  "key24": "3RzSYQ6mwNh1Xyne9FhncRY8pw6j33Z1XaYzDEJpccbQLFMGkE4BvqTzowe3ABisg4A6kegryL3HVQiqpQVHRxN3"
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
