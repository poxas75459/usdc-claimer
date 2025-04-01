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
    "4fB9LDe1uqV8tG1UD3bos9CZ2fCuttQvAUJkeR1z99jvuNdwqwDMpX6aVbyw51oDch23UGUWnZTzrnSJgnU9sVTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KnKkvsJWyeowiMmMCpa7ytRTBfj2FfVdowfq1yq6nacV7ggogHTNMDaKFskuJ72YKnBnF5ukVr43nd12QpFyY6q",
  "key1": "GnZxZYsNaqVFesxtXmkY9dsY7MnxWsEQD8wzSEgmuNNvYSMQoZhkjFfJjCVeWYHVm5kzYb4CQZKeRKq45EwVjDC",
  "key2": "5QJ1rYBoxpCL4udL83fWXGGZ7s57JsUgZTf9zV9rbt3YPS4y3BDqheiVTH7dvxBkHqN8GQLujakBuQHd4tvDHgHc",
  "key3": "4Va5ip9KqNYBhMa7poHRowniyZfFbjcGHRugy5rKZLm32PEsXmkzNL6Hx9jgBXevP6vpcf2ezH2pHqiwNqcLyBc7",
  "key4": "pfKtMEuACU7j6tSb2um9yzbzbkJqxo1xJRowqx4wXEYnzkZsMBU4y6kRKC23rNAzpvzp8ZWW71K8a1e31Lcwgcn",
  "key5": "4jJY4CkLCSwg66m5WpAP2iuaoRG9vsbA2ft1R3qXzQqaWoCZ6T5NJmXfhAbk5EceJBU9Z4DTZjDSiEwfSR8BQskk",
  "key6": "j3Lgp2EuK7Lk27cTKwJ2fz7Xw1WSdtKwBU3ukQ8Mr9gpwuoN1GBdGzzKfuHpL5mZaxXXJSfUCkNzCdR3hbhyoJn",
  "key7": "4hEvuy2DfRGB5jzEMoH4paChCm3xfbH9yTyar78psZMEfQHnucAnWypk9MkVpXmuqYF6QpMrYfHsn81jXrBypcfv",
  "key8": "2cwgSros2dxR63xQy6LTba9rgBqgvwwEH7JUPGevQsTPUWvu6R144zk56UETa2zd7cojcfihk9xEJss44wxY23nx",
  "key9": "2KT93K6VNcPmTEtaK1WAvSYDYedXszs7s168rKWhR5VgXtMjgAwKaTRywAQxtgpVFr1eMLz2M8E7iLpEYYmPFjVD",
  "key10": "518mnzRjsobv7AinjPAs6J3YRMqkHTBKptnVDqeTvyQqWYjyLFZqTSof8HmMvncEoZw2bHM4nT7GGrUUmzShLE31",
  "key11": "3Ec4ddxq3s6JSsYrdQHpLs9ha6F6E1YY8egoB6cdg5L43sbbJSqA6fU6kCsshZcGwrR4XbpEvQabJKJ4Kzt75H6m",
  "key12": "5HZnS4nj7R5kzMaD93gzSSrVZdJdDt6eHU9erVLFduCdgyouZB4iqoiMU7AUjjYd3mw6JeWB6GLPzY3Uh2ZCZNm1",
  "key13": "5xsPDzRBT6agiqPGR3u5UDRuaSV8kSd9sVHpSpDRy5PGG5G6dEH8zN44uusyMVQknCMjWbPrkxe4SnURkzsyaFzt",
  "key14": "34gfqERdz1FhrVeCMhdGwb1UJydCjNg7mzcVWfhF952oXgmPRcQmMVdMbCtrjHkniMkr1XkEWecmrfTWNnjPS8Rr",
  "key15": "2HBK7v6petxhUKFHBtK5f2ygndpDF6dKdyKkyrnAMcYe9MjGU8zmoM7UfC4FNvd8aajswjrRRTLKHrpsCN7U337M",
  "key16": "5HTJkuWLucKYyvbzgcL7HpaNM7UWWJJrkRPhadtc2akki3VNxUJiAhHsirR4QPG5WVwSS8nnWX3XQ1VSiEagMPuv",
  "key17": "2xP2fa9YxPNgW8Q2WdEUxWgBVkFQ3Nj6DLfo4jBd8BwCizrQ8C7AK3DJvnv6GSaNepf2C2kjUhb7xZaFrq5yBCxf",
  "key18": "272LSJYu2gu9Lv8Jun6o8svZGTLHBGebLzStGX4tQLcKfnaYhZbYQuQhsM6CLKn2fxuSGmzLGDq3RWmrR388yfAY",
  "key19": "4kASgfYeXzbi8XfN13F8WAds7Y4UBLRcyhTsXUi44Wp9BM2ddotoDP4EZy8swRmiqTxh2GKsJnmupPET6j1xsvW6",
  "key20": "R8KdAR6YBprswiig7JvvNuuXmjkTqA2HS4MP9qo7SdxL3VcQ7zirN4qHypGQKVJ1ZqgLbRkcbg8NtFT7Htc1wMX",
  "key21": "gK9fCErcxSkaSKVU9BGNVjDuBeR7V3zLmAGJWnLXhXjTb5jVJLC9iwh79nEVuTaJ6jun144BCVDdXEfD31hFwXo",
  "key22": "3jMm6Kfh3wv9Eq1VEGLktkSQB8C7tUkH4qyk47RTbVLcfXCZ4xNgXTT3VoV9GVsDe7rqhhftKYQiCoPfvyQLD87M",
  "key23": "2SddLMz6RQuo8u7SavaZhbo1VdcrKDk4DTCW6ZT9jhUVd29cz4W2hMLNNquxc3XEkZM15Eeco31oLtin6LMGzwfR",
  "key24": "2HZu7zEG6giGChvsRQMyfLjTWLbvHC67ipgUFKFyviQbx7fcd8NEAVaTctC2az9BmT3pPMSZwz5Fpre4y1iUPkWB",
  "key25": "9qr8QgyWJ9oNbee8ThRL8sq83Gm6KXMonpSJJwvQsFRFL9nuYQfPQu3ZnC7JQ4n6aSYRhtvCEXBrXMRdGpi6aCq"
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
