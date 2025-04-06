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
    "38oqun7Atz85kV9KEqsGT8xPCki6JgtSAYLvhehdsWdGkavGgPt2DqyUWFdgeZgu7wFfzYizVgWM1vgxE8Pt2f8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1229TEtViKJuSio7hdMGh2EiC8Em7TRWhgYmEoRdc52ciuKaTb7Y8bDaLLNtJJTZ1nt1XcPdr3KVJYfE6JMaq4LK",
  "key1": "JFgsjo9zvWgfvhP5d4cZvXaQGnDoyeVRRyiwTZ9vEqma43JHfqA8ySiUjtuz4zRtZV9r2qxedCmFwDvbkjt7A8U",
  "key2": "5tHpoXFnRfki72KxnFkEjVkJbptCnMiBVMB7KPQGkqS92zDpppcu4BiAkDPdoeyx17DhYQ2CGF2CpPqWxDoqMYcv",
  "key3": "2CpNGLSekrTT2hSRVLnroT6LzDVY7jK1zMFGm9Ftec1UjauEYc1bFW23JnVh6E9ZUiCkUPGtZtvKiRmycfsAFQFM",
  "key4": "3De6yePj3JyP1q4VH79tSgfhsFCGvkFyfxny9Zawyud6qDdaWRM6eULuT5KopZSdSEch55u2YLQXvjs2nJtL9yFa",
  "key5": "3DSEpMzE2QPgejhJRvfZzUsTNxhqiU2p7SpDUW4m1uxABNfVv17cocSAj4ogHWF1eTHFSC9e6JxvZWv31VN6z6vW",
  "key6": "BBBrYcJpdBUoVnBMTekQGiuZDgPTURGHpNQWoWXddkJFxCXmDcHAWgipAGjF1QK6WxTQ7t6YW5DWRJ17CYEHLTY",
  "key7": "5V4qhJpiFw6uWAr5zyi7KHmLEZKc1zBTGkVUa74cvjFjraat2uXcwM3HRxKPLrjxFuyKkwj4LmkdzjPk1eiSe9ca",
  "key8": "4DCVBAx1bvoNYeGeZaPEZtDueBdwXogBA3ywjMHnYGUTJ1xTGeiiqNwh8ao29EqhEQ8oujAwDdeskh5QkJSLks1",
  "key9": "4uU5WRmMRNH5jprDjQhdpEJ4dCvKwXkPKzJgP8Df19d3UihVn5SqELuWuatpS7xwGJRFuFjFU3e4ugHZb855B9tw",
  "key10": "5soggCUw2rhT18Z5eZCNHChjMe87TAnqzKBaXetwf1KNR5XBc6qUD7QNWUM6pHwGL4XqRMXsfzWdnUt7wfQfEgXB",
  "key11": "4k8R6QxAcyNgWv152vP9VowhDGozEgBjCZa2DDvqmTDgXnFCe7ucgtDvqnU8TND2VGKXbB6XEF84zWUMepLUv6Kw",
  "key12": "xV2bQKjvPRXxA9NmdFQZ3HGXaCGcX9Ajg6gseDFJRo5tAfrmqkQ4MBgmLuoisMhrsiCtGJ85UsFhKueNxHbYR7H",
  "key13": "4yEubaJCb4ci1f3YdNGKyF9WcwZNNcGQgihDy25ZdYVCfMCNpLQW3a3PjkTxU7A5eLWWHZ9zLo66xnoUBRVArGya",
  "key14": "5qEy5q8AxgzgzRcHJyScfE6MEXa4cLtir9anxNCpLQt2NXHSjoGuu7YHeFi3xdBQwEZNooJLsqGU9LMQyFfCsawr",
  "key15": "4Y9svzJ93zxAFvXrwuJJwdBv5ksnQJVX7iWph2t5zFTA4CYbuDuXk3PjVs1d12fBbPZJhK2NYGZut4b6Ubcn7WEU",
  "key16": "4aim9R5cdbPDE6bmPCyTzAyQ4du1dRJE59iqN3vqjUCVnHcukHeAoXfAW9tGxYV87f69xnBhJbKuujdsvvhzHwzF",
  "key17": "5NrEY9Xw7SDgvFsSzaJBoWzTAQyXUHTLNodAgZuiEx8JXkLRfqbxDXKmDQEBTFZLR2CmQ5iF21DQP2AGAQkwAWfo",
  "key18": "en5mnskJyeoYFbbA6JNwT3tA2NxkxAL1PyfUov25FZdHbrrmbHcMKQsdwj1ConxZTu9Z4f1zNGbbMjfdCG2Ygzu",
  "key19": "2BAtPmmAmjM9wBusRP6DqzeeJbVGd1SQBxtUj7V8wa4KiZWKMSL6T89K6tFDoTTAfP9nJt5byCsFVWyLtMpLdLqz",
  "key20": "5ftNpnfYKcUtGtQihZfhNjSgbJL5tEAjC5SqA7UiyBRFyX1NsHxvwUNA7oewWinayhwU5CyqYy4ngD6tumGSFJFx",
  "key21": "4qVzgVkTypU4LZdyJDn1R7Qdb7LmRmCToug7EHVLE7rhaTo6AfumQUBWU2QXQEEThKPjPm74pbR5JYtLwUqJmrcq",
  "key22": "5xxzKNSW5bNRX5J3u2sussgrJCQHRRNCV2jmJKh21krmUwCzxbZuwkr55epiDVccJQpaViZmz8R6vqLUPdrCsfU4",
  "key23": "5EwQk63LD7C93ZjkPA84vnwkoSyA1RfvxvtMDBDLJ6C6d8hbHNCdMgf5ENguheU6MDW4nHAHeE3wdGaK1Asv36ka",
  "key24": "2g87kCnfgNcSR9jGCvzHArTwnQSNsQfrsBLSs2EpZKCTES8HTXaKXt6zsG2iKcFxF83dxyYCdEGDKyGySpkKMkzh"
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
