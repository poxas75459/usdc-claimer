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
    "4MfxCWwmk7bvc8PPJgUMLvHW5YZVS5sAcKDmPHpzfiw83uF2eS1qBRhsRbN4VEAfr7DZHPrHkQFvzPUL7mUth2xe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JDjmyVcZUkxcs8hi9UWqxdrmumybrCYGW6YjKWujii3hosT8ipUq8t6vez4g6dWBLMXAXGZsx1UYjp6VjVSHgVt",
  "key1": "5asjpBEhzJGzZM5W2VHEjwhRGig3YPp2nKgiigmLu8BNDsrZSq6qgcqQdWTadGtRkonGajijvToeWuRuv66WqRog",
  "key2": "66cck4rnJWBQFyK1RYgsGj6fEsmqyZ3F7k5VJbePQCyFiqFBZJJMditZBnpbEwVFjk5M4dQirYtgMN7jtHVqQirX",
  "key3": "67mq8akn3qv6UDoV6CuVygCfQHsGMRGPpYVSyh87NSAeeRpEphS6fxRRERCQRgXvR6hkVnuMkSZnpg3MGCERhHV9",
  "key4": "4QseBMEuyX9WZDVbRnHMXNYne1YKPGtM9Xg1dMdmrX8L8XFG7LSvrQJ5DhvarZGFa3GiH348vV2CLfgAMHkg3avd",
  "key5": "jFyLEpWyDAyY33ez9xQKMaEKfpCJvnyCr6HZyGGKZmie4ET99mhw2sZCk4edgXTLgiDENs47EzqXYM8XkDo75H9",
  "key6": "5uqb8RKFW1KR1tkPyXkNGQKVLSdy6mLUws6FwKKnryrs9z56YiFc2UJjh53WbmnfAcmcsp2ZqucupfGkmNMR6Vvf",
  "key7": "2NpUYGGgAtErqtRWJLMA2QLxAvLek7RixEhHSDZ3tQU6hTf3LCxZmmPZuJgtgaDH6i7Mg8VXPozxiXjNTtsdAsJX",
  "key8": "31TAcRiQWEEFqwrGuHsmeDxdN2wjQhYJQosJhpqqmFuad4R9jtFN6nwejzmMSXWuS1d8YquphMM2gV7FpcgPzBzR",
  "key9": "4hrz5qXvrrrFSCNNYSgcH6Q5eLsU1HvtLAd1mBXi7ubcamv1rdC84PXLWfh9zq1NHWqCSbXbrrgkMmM1YZ59m15T",
  "key10": "GiYZcQCFha4jE9iiDAgaHeuRCcMaDfde4YboRG5KKMgUdVShmAjcw4Jaa51i7xMo7XFqXXC41FWrqqzhpM5Fqzs",
  "key11": "g8kAB563zPtmqfPoMa8mTWrDQWyjNmSm298X1njtJtHj1vEcNPfhyA1Lo8yngaRCwPmZ6NffvwrsFFkiqgzbmuV",
  "key12": "3xDN3AT6y2jDrvojSpVRgrDHQk8ziCwPnSQCSkCCY7rqtGNd4RhJC98QhC2d8XNeCc2PPi99RNt2T7x1hXzyTKsf",
  "key13": "Hr9EsM8vrWuEhLgp5wX1ZWRxzE9hP4BBhgj1gDcV7YSH9H29MWLH3VA9PZyiD6wYxptwkFdomA2atzv81xkVQ8b",
  "key14": "9AQfoL8sHbB86xYeUVkgJfgavB5YLtCXDkZEFkrkN5G6935Ab7qm6Q4Av3R37yUL7kASSYrrS7aNJ73kLELFooh",
  "key15": "2fYMQrQwBxec25hCwiA1Nw9qKU8rdbERp8snz35Zgp1h9Q1Co3ZVxazjrCRxaHLeR7c5cvWfBFGBbrzwpqnD5yef",
  "key16": "2AbSWA9nBZpVcvMAQT6SaHUFmpZZFss7M8otXyQ5fXCL6tJXLsZkY4haUCFK1rgootHHh97UCWt2d3RcuQ2VZqET",
  "key17": "3k8qc4aHT5aXoXXvFJDYkk48tSe3GFav1QLVTSNF6r6GoaJcERJtBThLNa28ybbn13LqkMuG4mQhoRU289emmUD9",
  "key18": "4ThaC26o3GxvygtWFAKDUF1t2nH8CpmK8N6QTMpD677FusD4PpyDJ14s3yGSY2BT2VtppYoLb5fba9TSZyDzWD4H",
  "key19": "31Bz4baexjr3wemATybnpLwmFmLkhdEGawxGn37ZksyabEoeu2Weg1Sf9un71mpcqzcTh87nU8CojrobCU8TM3Rh",
  "key20": "ApFvpsD1RPMxfbVSjmy3rhELyedLmMZfNLiLrJtCjXjvJ9DdhM2EVsqwVXwSryFxs4rBocHKpGLgvvZ8EVGC8pT",
  "key21": "gKiYjnsNdZpCRTaJFzRiDYdCdR2oxz7RrSh99DpExwCrrYhWjJVNjBsHjYovo93jC1cZauqjttmdZV5Rp3565vg",
  "key22": "61GVD7x1s3qCR8ERajMzAgsqGfPgQud9Ft2Vxf3XH3SYGoPhSxuaUVS8MgE9qbDYFT4MiNjimDkrs4QFkLC7oHhq",
  "key23": "4cidUckgD7R4hRfwpw8ECV7AoZZjYct1LNapo4LLTUgZptuQpvP2E2i84SgtqX73AtPBjLmA8Gdb6bbHfYxQ5dBr",
  "key24": "jNgFPcVra2Ynz4qgesbEjQeeQHZ4g6uP7Q6X5AwwWTe3cxk2EP9oi8sRZ6SM9jsMLUqfZGoJT4CEu8jz9hqsf61",
  "key25": "3rw427AmKNUoJ6Eeq89ygLg2cLuqfbdFvx7cPqQvz9YATthkFEejBDbbqgPbDkzszbHSWSPDVhhCQcjLzgweFwbk"
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
