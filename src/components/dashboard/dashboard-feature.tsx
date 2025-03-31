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
    "3gGBqVYAN2nw8Uy7AZksRhguknNXhKLAPCQVwKXgqVEFpCrdZbua2xsFhTqqGM1aWNEtifc5UNDbyo9UkCn74nZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lmm597vzn1qnYi7UxpmEJ8sVoH6ftzo5C2eLHik2Atju4btxt346xYuipQZrFbXav52BBakk4kXFUDN8NSgatL9",
  "key1": "3kiR6abNyEaMSXMP9rqA9viBGipQzCcsKmpiUS2c1fjbfU28ZPfiEaafESsA35jSuY4dXGZ5Ax1Q6AqfD89k65a5",
  "key2": "4ZN9VydJFNo4WZeHeqLT6ATBhfjmNwjx51BP4Zc43L5jn8o85XHe1FQ5HxS7yeZ5iNfYkKsjSzVYW4V9pRHW8X6s",
  "key3": "sWBojc7pKcuAGTKTXwLGLfGZhCDBHsh6ZJ4rm9TMg2VE3mVWoF88BeEbNFsMuwvpoRdwUwiEx6NX1deW256Eynx",
  "key4": "5oa4GCW9K5h91UTK5ZZCidg7hW1a16XCJY62AJ1Z7qtXJactBgKfXMxNmct7RJ7KmFxoR8mULapYnoMqgK6wnrKD",
  "key5": "27h5jf94XNmeyJaawayDmWg7tm4wChnDMVi4ry4gjoKAzxUEEFxu4wojpxU95DCYTt3VhomMx3Eu3TrGdVPFBW4o",
  "key6": "hjo1JkUEWMLFWffjtVe1LHeQe3tWtXcFJWxdDVvhn7W62rZjB6gemUbJ7AZNyyFurTqaGNrR9Gky7on8Np6NsEb",
  "key7": "5HdoDXt8DZoT8e6bpgyWgT7oRyer8Khv4FxUESRSga2YWKSoiVkAKwXfQFtRR5pa2y3cyfF6SHXuvk6o83wFmcJD",
  "key8": "3x3zGtCYohTUn1hT7fAzeLXqn7ct1MJCBUQT2BiB7RKyFUdufsPVTGRWMNviEHJEF1GZpoazfXMo63mMQ5eu2fsU",
  "key9": "SKSxX6MZiSjK6JBrr5d5M2CWUnkumC35V9cZYzVLSqjPqMtqa6nEPQ2xqG9z46UV3AxTA14yd1pgsf6LrNzYQva",
  "key10": "5Q21kCcKEGVK1KgwB3ZNhEwwzdTpyS3etejw1Rrac2yLvxYfxigExvxqpBnwpPy7jhfFHvsQpJRwA8pGXCwa4kuC",
  "key11": "3ZRoytuVwaUbC6EKiL56NMv1KFEbEbzGoH1GPqt3NgEw4Zd8HKUdDkfsggjYkhEHYzeYv7TBtgUs6G9H44cReo3D",
  "key12": "6HCMktPe2BUCedXH3krkqBZpZbMAv4S7MR4PacX6Fb524kyZeqehgPqnQXKp6AJbK1mTajNkPHfdQ69MbPxb5iV",
  "key13": "3VP1DYtBMMxRjN8J1EKLCBkgNYvTYwUz5ChtFLUvnjnshCyVrS7PADXbYAEZfJ528Q65YuXJp7EgMp89xGTsHNJN",
  "key14": "2gGZh7AqcdqUCUqcjPTKpdcbAsJczQGRQQSpPt7ZyHuy5F84Br2QNT9PRv8JXQkse4RqWvSnp14ZGMhsSfWN7KMn",
  "key15": "5VDF4qRh2BBaHQ1WnNUkW5L3H495ZYsViiNNHh2UPcAWwqoLKQc69MtqY5YQkfHdDbPoU4DdfoiWDTAeXw4Br6ER",
  "key16": "CDCJHaZcni7L9fWX3Fc1ASA3JX3Xrg2Pz91N1tQPbdbPP81yVhx4v1ujL3cHRA23bArh4U6nn2RPcedYDQbBM2j",
  "key17": "xph2UFCpWaGgSE6PQNX1fhAUmRDPmuXFwqD1QDDDwd9bKG9XedX7F3SuxDM6bTwd1s3R8GSWUjt5Ef2SyQEYsZ6",
  "key18": "3oyFbrYk5zWLFcmxQuvGfaZJMm7VCnhAGNAPXV8WeHgeJaZZVDeh2HEkHCuggrNtJ1SJHcQ7niiWFVQsjmmeLxPi",
  "key19": "wTS1EavHC8PCK8NqAA9MAJV6HiEJmvhBLSn73Y4T3mFR1xZHg8RPWLJQrSFMALjhvHRdF1MyCj82CU2ExuMphnD",
  "key20": "2aYbs9EiQcpGzvXRoeo43sS1Y9H29gpAv5uob5ANEA16FkHC7vWhpRirzRZZn716VQad37HYMdP62EQowwxntUyS",
  "key21": "67FE5QYRpt84JJM3abP8EbaFNB7E7pkJAj9YWn2rZJQs6K2Sm2HZ68TiczpMvRMpPfJKg61u7rE6pZSZtfjMKvE9",
  "key22": "5jmQhqpoNTEC9KHXiPd5wiieGqTi6EipcpBPsrd9c5m564y1eELcojhi3CV1nB2kiYsiyyAHWjRG9gx6R7gPY4wX",
  "key23": "3TYEegcEuULaqNnG1HUA6z57ikFs4BhQRxavX4NzQBYmRzupeEDahx69RsTpVFprRQbaYEpiCUgmvBP8LRcWpTHX",
  "key24": "2kNgnaaAf84yTEpdBYRHP61HeZi8UXCZmJ757LVWcaWu5S3NnJMfKFs1t8DXWpE2mQcSoscvS7wPoc4iHn7XCUat",
  "key25": "zYHLZtcRxkKjKN4wmqPVtKYCtqYpkSXt1FJ4fdV6gD4kQ3odhmL3pgwpXrKyRZQ8AoaxSKJwTJed4HSRbFee6zv"
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
