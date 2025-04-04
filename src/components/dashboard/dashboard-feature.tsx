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
    "5GRW4kpcHswK2wFtwUShCNMSFXNmqBap91J8JajcSU7ANaLp7CihfPfQkqRidkWq1uWvF1u1VbsRQsCAbF5dCHHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2der8FzrB7yPmZKYErU8GZP4fEBWg7J9kyUKtovFfGaT7srSM5Drzt4whKruifCpb2ANPH3fwnFJFhUwQkhBxHeH",
  "key1": "nVFRGpToU8dPiv3K2i2GVTL1gVYFmDgboNHiMbpMV2WiRVis14ajuWqTLwyXx7tSDwKUgqNSPwgCtr9SnKufowr",
  "key2": "3bvjZip6yMBdZMxcxmuRg25A2dAKz1h9XGyvvivzPbGqgNXHDgfoXXeMyxx2jnBYBuKhcnLPFfVFf4jCav8rHJYJ",
  "key3": "2iEN3XmvMHwmLX4TonPQscqDzS496NPMwC9QYgorvymquXTVTYU89dasNtGbBMAU8xorKKnbhz7tbQcAsNYaZeuu",
  "key4": "3b7azevBHtvMyRUCvorxvvnwWM8SAYbFNd8vKRDHUTrvamwPxQiEbMmJJVLDPfNbe62rgPJZgR12iApPZJnY1w2d",
  "key5": "4nL2m8wVd37TPhKcfmPgWFFDAu7UK1Ka3KCQ13XVr5PNvEGK13jfph3YDqKJ1bHBADtkECuPSoiF9Cm1ur5jyJNk",
  "key6": "34YAYQtj44gnksa6uGsQSf1LvHcVankuk1PHB7Vt9TnzzFpzczFCrtpjStVy1sSLcJYuVnW6gecgY2vQCHR8WATy",
  "key7": "2KQ7rkjxXqQhFEmNvRUMLGT8dyeKgtroaBpfeaCqpZAJAtDDza2WRFJoDwe1xPH6KSgGdDbnmPRpVzfuEF7UCYFD",
  "key8": "Zc1LotN4Uky68BfkqbrGUPfMKiCzkRhjiMDavn1uKkQot6kcGJCdwLwW2HYghiuiUtidyWtrbnrK5EVJpajhPT4",
  "key9": "4LM3m3fPSPhL8EUNCim4NA5LU8RR6UbYaEifeeXkVacB1j6LXRt9Ax5qnddpfSeEbbbJBENgUMeP29xZiBoxQH94",
  "key10": "EDtWjk34HRvtAt4pWKX6sQo394e7R9urJfYiGryfQJ9UHbJykVhbcwH3jzw81Yc5hWipQYs7K7QFp8QBHURCzG7",
  "key11": "3MqKZGHhoWMGjBKd4NmjgxeVfnd5QkPUu8L3u8KCs6tqKwSeDCviG8ov1ewt5knfzoqagdDeb74xETQuiWgiVZvQ",
  "key12": "4tAZ5G7ZxXWctJkWtaow57KsFESJG5pqMaGtY6hJ2HnjSYowc2csbkhQcNEyM7pYoEBgwchfxHjmHN9DGechr4JH",
  "key13": "4N1GsNJFGCibuzByg29pLAvDZNd5QxTbuJf6VhnhbP1mRnseUZkoUuBGYv1YqEga4FDBEEK5n5wXVqctNWAqanqq",
  "key14": "2tWvQyBDNdcYSAuSJqAqCVmBdejdPzofupYD6r5iBiLgtDYMybWd7KNX74dTsyJTqRaWuEWPnqD17Ueaakvdyigz",
  "key15": "D7VJ48mSfvoAx9X2SGQ6JT3R7DbyL3yy5R35JGTZbnfibNG7iZrWcgmbRtysne6Kqs4MaaKXYyXfPwa97uZsHV2",
  "key16": "4AnvKW14ZHbS7WDBJsLQpa7gkWoRQfvjeenAWjmMvGWjr7Tpz4yo8eAQ5qQWKi483XoKFNcWAnHfjDUR9SqjprFL",
  "key17": "2UkzB8XUAjdPHR5PTzQpuwLdNuD9AdC7aD4ESAgEer8NVV1QFypgwq5Xp6T8honLr6qDXYP7zqhYxnSRSme5gU4q",
  "key18": "4pFXkNJjzN42QGiEcZNNG5WiNm4fBXyRQ7Cqusipax3LeK2pXeCaAWGGUqfEKbDGWMGrzDkjdHqRTae6TrCopbi9",
  "key19": "5LpiraagASe7Mpgxp1uwfbbHH7uNQLU7JmxRmzeicKqP6rxE29HpNZDPRAh5tpaG5bZV8URB5uQUtFQB7ivYaq2z",
  "key20": "Dp4CAp3EzAspbdWcnXySPgmTP3qXhoyD2MmcYHd4ewbATitiMxNjFdS8ytuW62nUnTrogZXsn8tB4SjgqDMKM5r",
  "key21": "2gRhKnL72H8FhSJkUVUiBhyt7F9YK9k1et8LqUPmtW7NXcQpGBcJqvv8oYSmaEUBEAfEA6Qz1H6zxCstsErYD94D",
  "key22": "4gspaicV8f79b1jaJLRbHnnwLaLaP8axZnZfTft2NKbM2jWx3oYKuHmqJqNBT6kaG2Lhcz6hv7MutTA1veFi14zY",
  "key23": "24C6sXLFdwciR4LX4ZChsSut1QFsjsX3oqKhv9exULuLGGyALBQecffWGYiEgqNF2SLCq63uT9p3uGeYFxhbeZTJ",
  "key24": "3VUPJzth8TzUhF4p9FXW3LXxEheCrQc9WLjkfBuzEaYTSVsVQo3fY1ESnfgNy7xxnGSpN1AbkBXRRQ1AiAL6FKsq",
  "key25": "2EqVeiPzA6zV7Y78MSrzeyXeziuka94pJRJpsJRQES11obh7Tq9jS7t9JEYXTsDQDzA3F7y5MTQp7bPCMz57C95Q",
  "key26": "3na4tK56qTLSGRwwCMEonyi3RyfGWmRLBt4hEGPeJ4JKPbQRpSdPgzQ2Vnv5DXmDUhem6ksVvyJJFJZSTtvv4q98",
  "key27": "5oPEbnFnakQiMRF11MWHwn7cxe8PJ3C2MaFEAkkffSVdU9j6jvwrPD1D4jvXykrHHk23bx42QWtGRu3MeXGRq1ga",
  "key28": "gcGse1kGCp51EGobnsRPyiNQNi6oCqGPwUFYcJP2JHDjLqyayrWDYHP1uuCkr2b9Li1an8xs52qE7NLZkGRS9dx",
  "key29": "hQoLKsLuTFN2qxT7UX6R54G7LbwDNEbJVXe3hsw6kLZNigGcrcdcgyYk9KLiWsAjKdTLjVyv8pdSvoxDwwKSrJX",
  "key30": "z5qHT59nszQniijZWu77CdKGtubz7CStRzhPkfmV8gZu8Wqp9EyjPVZWUhjTGtXvVTrGqjwp42gtTFadCbNiyVD",
  "key31": "4DUMcd1Vv2c9DiCaMX9HjTiJgZVvVpocB1yBDo6WSjs54wEDLH6pNM9Ew7Lco51ug6dBD5sr99agxt88N2AEwHjn",
  "key32": "X7a4tsXEWT2C8r5WqRDp8dW5fPTpuAbGKrqFmcHGSGz1NrSMkYsud63SDMdSqJqCEJcFCfTqd8GWsGTFcDWA5y3",
  "key33": "3zX65iBJRbnkumZY3XKM88T6REzxMQs6rH6jcUhX1sNSp4S5SRheB2973m6inZdrZ8nhbaQ27z8jjgeKwfo7EgRi",
  "key34": "3a3peqEvGZsKgAyW65npXk5wHcDMU7GGuWoU1ayzwr1M7FustRhx9KgK4WKNafpKkc7tPmkW3wgRH9AdfBsAKLaD",
  "key35": "Gc8TAdsbh7z9CX5jLPqtqGawFHkWZhqs3oMUgx3PVkGgLaAWaVxJA9RdAvtioJTdkW13ik92aMPhoDGhEhFUKBW",
  "key36": "2u1dkbLxCCabJvA8a5NbD7Ap4NGRxkUk9Uk7DL6CGpbkWvkMfmAiASZMPwDpRjyBoPtdpy2jG3GzFGGjJayhKAcM",
  "key37": "4pr5J8zazd9wJHPiMVa6SX98HGoGgEEx2cTFBGNnLRLd1JDRS9z9EVfZdD7hMEVjdR4qtLYDA5sxY9c5dPKLjmW3",
  "key38": "kmmZ1A8QLQQojhuqfdyRjhw1cMETMgwPDGSfZwerXVZpq2a6cguHwoP5t8dn5rsA9JB5zt7gnTCztyKE3Mm2zrC",
  "key39": "2dr6LuCFWMhU49smQFTLkCSHAtgQP5Nq21C5CpA14WwvxWZruzTcFbsrzukwcCVu7WusgX17M3NWbjbyFCi2g2Lu",
  "key40": "5aFU2S5P8BJE74SfPJSes2C1MuVZMSkboF94xMbxwSajRYWCo3WiUw7dsjvmnzhqXZJMt8inbibaoyTSh4BrBqmj",
  "key41": "3PCxjZLLugi6Dm8YmLZTGwyQtxw2bKv3h5CWR8kfbRF757H8c72j9rCuL4z5UuNWUdNNRAuq7fmLWWseLk7oLXWa",
  "key42": "2f8viNf5F6SpsGxNfgKT3r7EyoLzBUPXV3GPxHg4qVXnFKVJ3gpNN8cyv5M7sKcBRYuwazRmptNqzvHtTRqJfh6A",
  "key43": "48dhV8AUkWjrny4t9Tce5AkwURUwNQbJS7AeXxtUAJgpAQp3QiBvUXotJrX8FoaRbYky7mr8d8eSy3RN62wPYA2Z",
  "key44": "ZXjbV3hRpLhKe356M28CGmFsC8qPQ3GUCvXNXbsoPbFBP9MsaXTtmsYVEZqWturNcBVMUeMThD5hZDaGubWzmM1",
  "key45": "26cQTqn57EGYqeBNVLJTgnhWQNp46wScPueGYAM2LKSQKhQjW8yp9XdL7hPBb3jSY92S3L7aQmdu72VFkKmUGzzt",
  "key46": "FqkkBKzWmfRgP4n3anHjFKcmtadscWLwAQLjHsvHGDvQ1PnsMnt4kG3ZjcLKjnQZJYcbRfUbw1uozK7v74cWPCA",
  "key47": "fbnCri8coHYV2H2ie5E5L4jv28c6EjnfRQebBNVf6ZzBkr8HNuJC7XaQG4ePfFhLhTAdfXeRX9dgCko4QdPrjw9",
  "key48": "XTtetnXBo9hfS3B1D4hXn5EsfZprLSfWFWhcM5poLvbtWzAB8UBBvMTLbRRqKzXZ3xogAzeNQ1LJtbVq1LWjdgt"
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
