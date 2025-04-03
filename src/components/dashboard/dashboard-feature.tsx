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
    "4uVH6kogNtUGUzramX4DD2HEB9ZbKdLQhtM9wFSD7ZSfWbmMsjEuKwocGMn8WLFRvnr5rEhWpmyjk4RgjNAi5x6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gP3QCS5jr8EUrSxDZERkvoE6rE7JEH8tPtYdmdfUR9aZNCXNmmkjDLzAnqK3pVUmKNN8o9LveJfxpdC9MjxrPvz",
  "key1": "3MsiMvRcYe8HADqMi7wLVFEm2GzN6B19fbyaQtMRaiRv4ff1i7AUX9k9NexNSWVup2UFitRRCqRkhx52FJCajX4q",
  "key2": "51iZyZnyUM7rGxTrt7W3XUe2RWWJjYwGK9FYdHpgRtPVfXxf2g5636ZcqiLfsDTfwFN4cYyBzFqBNzuYqVhGthXg",
  "key3": "4JSXXfdwuN8jWLNx5AHQF1rYEuCzT41g5gJxWCe8CPrFkCUg1S3var5wN3kuTbks85p1PNyxumhEiw84cDNYnjgT",
  "key4": "3MAhHzxNazbBunyByHWqvEmypCD9sdDqZhghZoMCpEAUGwKCzieuUS5Et5oJp8os3wvQQuhXt5J7sqS8eCEZzae3",
  "key5": "66YW5KyJmcdV6SAN6697zk7DASYaVUFmoboCDpqZ88QcXWo4LuMPyGvD5bN9ypSQpCtjQ7CnkEDEvLtcKDmEnqwz",
  "key6": "5FaLUke5tdQmktKc7CCHuYgVRAVazXxMXdoFdQUNCU4Z5RG4GRswhG8uzXPrn1eL6nPuovkm96QK1Mar6WLJ1oo",
  "key7": "4dkc7aPBS9meLqzB6AXGqNyUkKuTAdg7KbCiXo1bzSbGbkkAyKAJ3Y8c1FZWDiY9ECWPRf9Cn7k6DRgkZd2t2FPc",
  "key8": "2N7qutrEhqHRcAtHWaFKMQZjeFXduhtnTPNVQjeq5tw1QRLJDSPW5VwNtC7W74fZjU5smKAUhhreZwQ9Pzq5h9dj",
  "key9": "2a5GsvVNkDxtjQw3Eteuuuna1muFnx97Z4ZrxEDXvhQaKYAKqrin47zcvr6vGqsDDQMfj9fy4GoDubBBHQHgFxqp",
  "key10": "3Xnyb6dSfmbuZe3CrcPzgLc8iBJprSRiA6q28dDGqpNuqAbMvp8bp4C3DokWPQBjidEnJXuWxAhc2PQzEoQSJSKU",
  "key11": "3kYDog5EravaxmqVRWqqEGJ9RZEBu1EyTSdTNRfAjzdfCMYgpWumRVQiqnN7N2pntDVEioJvQY1xvusDdXArNv8V",
  "key12": "3BHwXDAJ246urBbxVe6bP1huaR9J2vx3nZ3XLLsXSoUXJHyMgHwNY7AezxWi6feLd2Sjy71ouHSiTZbiwYygPZGd",
  "key13": "5e4TtrTBuayT5eVpyHyzKAKiaPwuPe13rZwRZr6XpwFySaq99HFG1XZAv2X8FPbn4DByexG3eeR5yw1u1E32UKYB",
  "key14": "qSH3kii3NwAnBpotqHhwdq3tEcxMrFwAmwFChGsmgfSTqURxkaiqhUPjtFjBvvFwCKDK3QTMe7PSZ3UPYaxYDjA",
  "key15": "2XLuFy7y7qTUaQ1XGPqLkQe1zzKcHZH4ut5YP9U2TyH3CPLuHBVmDpiXGCC6TG6FyRJT6SooAPovQM6Q8c5XwEFp",
  "key16": "3T1647YRSu7r6YU4n666mGrr6DTMM7PW4x858fPKf1uZfktcHEp4pt4aTA955VMhdYkjCSAS53nSz9rp7LK1VTx1",
  "key17": "62K5qKmr2JXGZTPwbu6CECF48jUdSZrwgvUQxqvdho7brx37tt49voeGfbXKCY912mfuxHPCcqF7AGT3yKSzraGr",
  "key18": "L3mZ9ZMfp8gYy4YxSHVxteRct8ydGW1GLR5VzCgDktayQSRGMrbJusM2Apk9n3uN7fXAV8ygU2hVW7PNknqN1AY",
  "key19": "swsd9dwDjghFXs6ZWNhAfgyMozRhQxHKucN22rKPPUq2RJEgW3igqrSet9wgT2yUgum6sH8qLNwQeAQKmfo3vzB",
  "key20": "5VP4LGEYSM6STGX9AHLB4Y2RVuDsGiWaFeUxRDAxfE5ZBWYNxwZ9DneEcnhPGVwi6t5nAGujXr8zkk6tiSM5P9Pj",
  "key21": "4QC2vE9FDjh6WRnsTDx5x5EMUXWEMRccSdfxtmjSa1cU3L67AueoUDnMCE3AnGiHLFBvz6HWGu6Dyb6Yq128bVDK",
  "key22": "3jpPAXsHnTKt1h1Vh8Ft9J1fcPy8fQSTqnUGXJCx3pnwNWibVKqNqMr856yEpgWEdScWfCQNMXBemi6sVPiuf1mb",
  "key23": "59ncUZmJx4vMCEnXWu876CV5cCpDbAVMYZwf696xk4tyTY4qdAjhHi9g9HQvkuRFmJTU7XSUCnXqPnfpLi7M5biC",
  "key24": "4Cpud4UZGXzTuThpvvK4k79qcX4VLvH1UnbuE5RHdC2VASLuhundCEvqWNQ28zqJwn22PrPoPA5pGr9gG3PD41gz",
  "key25": "ngMCMvtXHAgi5UksyCK24v4jKucG2V3BiahCPjYzH8YcnRftKLeJFX1F7vhReoPzSHiWtr54Xw5zBwH479u9b7k",
  "key26": "5tSqP62K7j1KXuextZUmPGdHD4EBWa1bJBmXwkbFNFKDXQQxxe7rq3ccK5HdUJ1KBgiJTseB3TpHeKGx1Dnv9gEW",
  "key27": "65LuFm5xu3WDDBaQnuvdEShZa97QhyR6eZ9fzuWLXe4vgHZELYfQgpnzS7HrZvaq4qxN75hCYFXFbTuG7rBWGhQW",
  "key28": "7BQBNtZiGkKxnZbzbtZFEf3vmui9KShD9wJUgYgpm5KLMvdGKPw3XY7AjmLqUFurJcWZPdQrKRZkK3qgQoGWTM2",
  "key29": "4yL9WzMyGGbrALrRsgDRVrknCJEUnMTTuSCnTYisrNdnKonVTNUZuTfyKWQCC7hKyZcgBGZLzJa9Rp1YSJt29taM",
  "key30": "3F7ZMBQvStmkwjYjGoSiNq3fZefkNe3TgzxXkfDhY9toPkfYLyeXJBqDq7RxqKqRhh24Mj6BHNtBwupVFa5eDZEU"
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
