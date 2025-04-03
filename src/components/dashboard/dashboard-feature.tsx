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
    "VaRZ31ZFapjgGty6qqz9CbiAgBPTRbtQc68HXaA1zZcPUsptGnRbU2eaFiiDDNZVU1Meqg1dmC6zD9diwt7M68v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NWJZHbwEvvbTtVpoQcybxwv1sRfo28ivX5SKoTFptzgRfZfHVJxg89Ns1hazgkju9bX1ntfbUwy96UM5HemVKHZ",
  "key1": "2HjxbsXWzrrZhkBxiSK1UcU4UXLiXhYDtpeajtD7Z5xBQyZ8Yzd7fELEYFhMRVtREJhiB8EVkRKSUJXNTWfpm2SN",
  "key2": "5F1vKeJaYe79HQkhBWeV2MRPyhCEb6F34rLpkHojQqnqvT7WC7nviEjT36G4wXG1THvijcctyx5vKosiQQQGnM2M",
  "key3": "2MH9U1VjGFnhJpbo34n3tktFYZ3MQR6GCLNCjPxYrQDN2ZhrJhcFHcQ2FycdrJ8nE2y1PjiruLPdfrQLyNRgLE7w",
  "key4": "YhXPtthNS4fFQKaCMwd42Se5MFLAKeQPgMEdV9jxHN78amZ9tv2xfmoyjRrtzQFLeQa3XTrMSwiLzRqqBXU2KTB",
  "key5": "4XGTwjejf3f2P6BkrQCzAoRiiw8newuRaprC7oKfi7a851L6CAYpV1HNJiQvpDcwhuayUGjLxVL2RgmSoramEYLq",
  "key6": "2HtY1S7Mvnwu6hHySc3ocLQBqpZU7KNuCwBJDinAA9gNfuh53jQjgNnbfjGozFReBKo4uk1bj5JDGZKgBx7pv89D",
  "key7": "4G822XjEtuRbVkuxpNcDgd2Zx8rD7WmXuDwn11iVFCK4mFkWYTEfsAg9TkpW9FwAGdfUNnwz1xWyyp82UaAgzJXq",
  "key8": "41UyAzWFP81p8M9MrxJ6SLuCSbF7epjeFrQxzUXdMHy3GfinpAW3wbtNqfMvuxFhYhmRwqHcpCTvLh6yVRq9s7mX",
  "key9": "3NePMdKTD18DKRArFeuqDef3n6PVAY6EQ7JKF6JG9yyJjkNazhjHQsFZyv3myXT2YtLfAzFcCrH6zUXUyP65PNEf",
  "key10": "2pQQdf8BGiPa2C6TmT9S98WpSQ91CHSU8XnFfp41BHLTSyboH91FXgg6qfc3JH8jignKVxUB9MnWzytYNyqxBcw2",
  "key11": "3vZESL42ucRCZZEogKCsrReGFRjdHNE4vwJ5iCVH2J3B6DjFvKooypTuwFAegFrwRdTZeiW4kMSZAyzditBCdbS1",
  "key12": "3hvuvUmocYp8WbH46m7qMukwAyxMtTXK1Zb9gMZKmkN4ZdkD4mviq8G42DyELtZJpsAkLa77GT4r3dYRKq1ncYmo",
  "key13": "29df1Ji6ZsFFejmkheVku2g6cAvT14h86TF4TPhTcYJBEdKvgDmYDVnzz83LHyYms4s2NR9vhZxcZFWSQV5U92WN",
  "key14": "3tNXakUS19ixf7DRnxuiqHvyRrcVz5buGzZzrXqecRvGfo5mnuEnbq8XfPwZbFYxmmeuhTbKVwBCrjyPpWUJ41m2",
  "key15": "42qPNu5VgRDSKwtDEY3MMLzbSXRwrnjHb9viN3UgHJu4J4tWDYSnkM315j2EUiELThTCPXXrwvD9hbqZTXu7vYFr",
  "key16": "32m2owqecNt71TG2RH8g5YbPQbnqvFbokM6B7XZCgCtKERoVg3g8iVD55s3DwnjQ6sfAB5RXkQeWK21RAcjSGXKc",
  "key17": "iySYaGeCC8cGLCJmwkqMTLD21wUbAAXbfr9pQGqnABA13UjvsyfJyGVKueMBspdE9UKscSXeDDDvTgqmMf7pHBP",
  "key18": "WXuZ4w4eqpzRqZnzr3DXbTRvdzCBLziQjob8S8aAkJk7quyVkEyw2vTaxi6XP3cgcHPvTRoqPJ961GmTXX58zJ8",
  "key19": "5gt96DgcbBgcauLa8GtWuUkqiSqM6zHFB86LkT8ERr7Eaiw1pqLF4jPyucAy3u6deFWsGqsDmb72f56xXAQ3CGVU",
  "key20": "5yFZHenxMzFk6vU6unYnhLc8z3HtCtwHGkSHL9zskjcpaAwYRUv5LApDMqiZihDqaM4FCpRapcMg8uWSDkmbXcf8",
  "key21": "3Wy72D8YNgMgQV8a3eCFm4dh5GCrJ8hDZWuHhthbaFnFZ99hnBrJbpqy8Ltw5kfm7A11DZJKhYU1kyVKHHyfUoDz",
  "key22": "33QVSKv8aWbhM6t3QxJvqQNADT6Uehvrd9sbLKukjEv5ZgRzRR1GS3tQYviibeEszxzfQTD36NTLQZM1MP3Cc8nP",
  "key23": "4bgbAs9x5Sn9dZgmekSMmfcc5dNLE1JZG3cuc8Z8JjERhHts9sJSxhRSQenTUpKxeJjv137Gv5iRvk9gKDNz9ZLt",
  "key24": "4LQYyt7BLHw4YZHTjVr4WENBy9uR63yd2Bt2goTjgAHpL4bKJienErU6i2xtYE193GJM842SeFJQuLvg9opziPuU",
  "key25": "47qQ78zLNVSFqVfFP2e5QtLH219vxBEBc4ofGwNtNQLUSn5RqRhbWTdvr7YeFtEkywUHgjDsqCKcZ59T7M2GifCw",
  "key26": "64NmTwi71pWCv1nyVBe1DWSnKhNgrtK4zTZ8AmEQEkM4mhi4wVSscyZiYTWWXPi6uDuSRn7zR2pvWmHX5q8WRkwh",
  "key27": "2RL8iprMTaBV9DgYQuRGLspjqQLXPJfqgesW6fySFbBhQCRtedKrX9ssdT3EmmA3DsfSj4Am5uws2FvNKa7RWzpN",
  "key28": "7m3Bd1yCMF9WV81a3hE6ZSiqrYb3Mu9ptXnTXQrjgB5JPCCAYb9Y6LKsk4gJWA8hScv9WnSTMx3uUaXV5S9xgny",
  "key29": "5KDMwxGVTTTbjCra45m2z6Xkp77yzM68CG7CbtYHCf46oH34mUKpj1VGv3gsCDSQRMCccmdh5soBehc9KR6WNCuJ",
  "key30": "Lyps3igL55XW1WMSLVYiMXYYZ7PMP3uXKADaCCuyCPqgTqGn2YwRopA8fsTG2LS6Hm5H7eNffbv7u1mNr2TG2La",
  "key31": "58NzSWkqHaDc9ALsKmuq6DPKqBia71id9xPZB3pfvJ3jpCQEJYTxKTpRg8EEP3JKLpYCAXp7dUtVxjbTJn8KiPjy",
  "key32": "3BDBEptUwHjgoR3qfMRV71C4WjuHLQftea1fJeNZsCvsE53yGHFrLhRkaCAPvkwskZ1UvhQaPN1vwJT2am4E54HQ"
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
