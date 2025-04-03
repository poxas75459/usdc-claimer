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
    "4jwyRoVXa254mZW1c2f7nYryJPW9HRPunZtxA252PG7K6j7HQLCv1Mhm6zfzuGs3E8Aj1Gy9qoizL6SjkBGNDmFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sgajbcyszK6ScHBLAw9cUxwepZShTUNVLMzG7gKpHGPDeaFwkFbu3vuDdoRJQrKj5TaMwF3p3NZeRQUMTRW8Sqg",
  "key1": "2qbGJJjMLuLxqtrXMc7KnwhRrYz5Bj827vMxcuKCxQ6pZrBnKgx7q7m5S7jKH4queFMhPBiQzEvuEyZFczVkHmBQ",
  "key2": "XryWHr58afyEHTeCSxF6gg5drf4yeDzHhMnQXhPKsffyEAjopfxYfQfNn6R6QVeEPemtbHGZG4ihZCPAmGVmsEc",
  "key3": "4UMDNcTJYAE2QCSQHmTn8FMv6P7EqY4dn8jNqTXiHTHiB5GY1duQVw6xdz8j4fmRpWryhFJBfGVgQ3XjZBzWDNU8",
  "key4": "2EaYfd8UF1AWeL6a6TtV1k6DtapgBe9KVQnAF2E27VyqY8UcSVCW9DYT5FHiVGvv9uXFz9iKawY4Z3hMi3AeoN85",
  "key5": "4L1TwDwEKww4T5tVc5T7fUtpJuU5iSwhTH5Q5krnvwguknmvLw8vozr7k7CvyMVwEKehgEXABcN8XhdGbKZ8BEhD",
  "key6": "4F5QGxKqePWuzq3FFobqFrTkk7NNantH888sEresQMSA2Z4x8AH6m29f1KYkakZR7HsSEBzq9ftpz4DB8paMkQ1h",
  "key7": "2fkkuabwFdipKXUHqtoLihQjvtV5MjDjnB1v7Ps8Kv2jHueLCbq1SUd2nycQ7fizYfSTGryQu8ScDZUkTFyEYti4",
  "key8": "SS9KA7695H3XteyVWZ24eEF3kU77C43W26sP2fhtJTjcwGD2QZcvR9srRUGBxPs2FFHqwi91ov4cFPrVnDVVRz9",
  "key9": "65SDSWN6buJAPKiWvQajhn1qtwuTQrUwrRogzvHECZ9kGh9AWnFbv9Y3t9PN63Wc7pwC1NcDYnGvjRovfspoCV1a",
  "key10": "5Py7fGTbmLGPtsywiaxjQyrAETHNTRmSumrJmZTmkE9HiqtUs9prXHrD4qX8DTzCAUV8gYQoeyYHuJEVtivvDmwA",
  "key11": "3HVZDo4KJTCzR2qmPxo73aeX4qBEKEXG7GyLgPwJYu1fT8jnst3DCSQGNFHQf6HFrs9p4agGqjy77xbHPLQBedkG",
  "key12": "53jEGPAePbRwWgSeEpz4U58V8XkG1P8Z7oi7jVWrfVWFFVWyEmgr4ztQcWraDDeLY36xAzPidd6aVwQfEfsnHWmF",
  "key13": "4ZwzTvJbdgFYay6XLpjg5LJTQjiwGH6XFUpRYmSWUMSv8VKfTZuCRFPpraNrWAW37QckexhCr3xG1V7k5K2YF2SY",
  "key14": "4yCrL53edNY5V4J7gggMuXcFccAy2sXa4jcXGwYWZXcRr4ucWvBT3y4XHj1qqX8xYSB58RA6FedfKE1AdpjJSpx8",
  "key15": "33a4vM81UgWgVF8E4uAmCQ913QLHyCjfwUoWHWozcN8HDZPZqT6pNrGKFwTKKpQ2dXouh8NhRV7wf9PKFpU4Ss2M",
  "key16": "atzyFzqyWQUhLkApAJxVi9Awq7wbACKPvQ5RvU3SRDKzVnBiapBxpRvubayPCG2rETgkZDqFwrhJjReZKtfNZ3G",
  "key17": "3pxanBXHT8qJpqKrp3uxzpGcHFnHc9AojtAkP1rvZj2oipV4j4MNp9N1YNvXruAaQD6Ta8SnsJqrhz7KtUmJe8qc",
  "key18": "obE8WZFkV5MYvzTaZqZ9fuVygewxeDJ4iN4CynLfCfT1zu8sZofojj8Ve9YP6c9YnE2WuegwV9Yn8ypYtjPXYin",
  "key19": "3mzsKkLod2yPRmwh3R7jnbCZ5V3Jxv1htABqG5PLFuM61dsXE6quwUxFfEunJLAZxtYhMuueGwfx1HQ6g21AHsWS",
  "key20": "vqtG7Ae9HpU33JejTehBxRJXMe3VrWT8wfHX8VLYtPDjB7CChzLdpxgtwyGaQt4mA1Ca9U2hc4XDPQ7LmEntPYJ",
  "key21": "3ytaUgVJsWDPxdGEc8FV7mGnrYsYUuV79VYDQjy3nDHjKoT8ZwbEHQrqvnSGzQy5aKYkeTV1e6eZRbQqrqa7TJZF",
  "key22": "1CdfZ7evbfti3YKfRBr6HeeBVWRvYgP6N8EDs3byVAXp7tXV1GSrb9i8swuasF8yqEJUvftjr9nD5fPPXhwP8Bx",
  "key23": "3FnmSzmPGAyW3g9a98Z9sRLMhfMMJsRBF4UhabyuAbikd4S7rixx7zj539Mhp7hhZt9T3nXNguPaxSbD45CCGU9W",
  "key24": "5hdFxx3iytaL7fxEFcMMi82AdgPr6SVrn5vs1Ecdura5ryTe5PiVwjGsMVzaTiDZoyp7GoxgUwLsZq2QQ7k7MxrP",
  "key25": "YHeA2o6sycq5TkFZn2hJBrjWpGHYRz7mbRUuFPSsfmHZurQqopgs9wQSgmfi5JFTbAjaMRxvnhVUZK52dAccbYJ",
  "key26": "43zg8XV3nLx1Ziu2ygn9LbRDJ56vQxEPKvEiUEUaL4GGEB9aEnFRas1jjGqR23RJfWBd6BESTo15sxaVP1M25UMS",
  "key27": "4VKpX5cSbQJwG8jFzGtGT5ruvhca6P73En69t45iyijk5gmggaXJ6tZM5ZWKs53nNRDh9Y5d3WyWy2FZ23BodEWm",
  "key28": "2PCYbJkgU2VYBBXf2k63WbEFQ4m8w5nXteJyYAYb2RcHXECmLBNEm287ioY22jWLJWYTgbAyoReYvRNiKAXu5uzY",
  "key29": "2tPh4PvU6zKzrVWP62fFXwA5pCyh3tkdo85tikotyAEwcMMCqQFU1hzuNKiHJhpH1av7Sh9UKa6sejxxQ5Vfndb9",
  "key30": "3bQFDJGFd2L3Ts2jGWXqQ5na4QpsA1b31Rxu9KjAv86gNSsCmFSjfSFmdvkxP5AiujPwmkhvPpGujkKhk3KR8T9y",
  "key31": "5BS5xsVxkMd3VRpHfU9EZaedp1pNDG7nghqPozNzKuRkdxcZHQK5XT7kBnLBbrBS1eBYMFFBngXQceU4pTx3nuHg",
  "key32": "YubYeJ5gefrAvy8zhrB27r4xTaPwWFkbJpZeF8iaxfqqZE8i6VonNo9sHzcZo4svQA4zUypyu7hQ3g4pUiEYGHx",
  "key33": "274N1yAnAGBL9iScGPhfrdtGpx4UFxiikPdrGy7opMinVUa61pgtivHnUm4vvR3HKYeJqtSqEDyugCH4JHa6zMXQ",
  "key34": "3PfEULkk95LV1jH6MkP5zwj4K7D54FLr77icwU4EyppgfNunzBBGEfNLw1hhfDXEVmUSXKq8KXLov1eD9H1QpdCF",
  "key35": "3xD4PqsHbDhwrzUjxpQP7xKZoYvVabytfQr8zL3nEiuMXc6Pt4zkdb9F1Z43YAcCAmB1vrTrfCUJKgAqwp6Z3nhQ",
  "key36": "2jTtw13xGWgNZSyAMJ4dSqP9QAAPQMSRnDMSQZCFRZoo7vvdDLnwJ2CEiBx1kLXCXUXCrm3N217LD53kMCjsiva8",
  "key37": "4zXV8DFPEA9pW25VxfGM3cKkEs9veqEQvMt2jHKs1VcZgqDFT1EJsTYri9vcUvADUKVZ4P3WgDW2wHcv6RPz99U9",
  "key38": "5jaFRW4oSDh5gALPcEtni1cXZEA7YFUKoVcLZzjotauAKPRnju8vDJu8uDNDMqB5eurD9CAe5ggBchq9Uwz8oHZ6",
  "key39": "4jkgZASvz7T4WpzXJkK9FhufR4sLAhJW53gaRWZdDNf88LKam5UhFoU5atFkMtvwfLMm7BxovhcezS5dzkjtxZk3",
  "key40": "ZTzuhYL2S98DAAejPSP26ZpanMrawkNdi8yQQbUik6JPx4sHdTscMdDoLa8QLyhgVDh79MN6JgMb63RVb9qeziw",
  "key41": "4jTBA8XVnWVqcXdjnvii7bCysPci12gafKUEJjDLtVaRzkJ6zwoFyrePEgz9aNqBQ33GpyVtfp7rqMGDKmWNfaQg",
  "key42": "4nwiYncpjBjR1g3NgHtwZL99aT4NJ1iXkS8nf4EAyTRqQXrveieCC3enMXARjWvKe9RqfjBtc6mk9ccJNAMuDfhA",
  "key43": "4bsEkyokDXnTUCgomeSq3nNdoWkBDNod5gAw9ApZH1YoX6x83NPEDeedzXKkgrHgPVqVBLpbWPV9UuXTTHW8zCNG",
  "key44": "4D5tGADe3rbgFgCMVxfVqRrPf5DvSasgsWXsGAwCi4b8fZfsLLKcyDDabzLdkpKraQRcZxKmaFYNuA2d7svvYfin",
  "key45": "3eHs1im8ga8u8o6ag2wQYKDGSeNh5pBqxPo7M7qDKdv6K8q8qsYhaSTrGdHhQH8oNiKAoDPRuUBiwiDs9woW2irb"
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
