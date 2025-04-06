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
    "5ygkpsuaKUBFNiQ7PyHU4aKz3bNzg5qjT4M3HoarqVhJoysUsDnEUY7dtyPeyDoz1tsWjMk7AT5rmrxWm5DSSpTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MUGC2GRT3JhdtP7ovniEbrrcHSMvM99ZHRKG2jep3g5qhGHX5zN3BfSj1QGC24NLsBTvHD85smMvNszBd277bDp",
  "key1": "3gwhm6cfRmF2ro1GHYbYVaaUruFPvBU2kNRxnsuep4pHw4yFRf4ukfzkoChKm2yTzqpjNDcg6W7fbiCSWxueHQDW",
  "key2": "3WjpSQfNKooRsTnL4cs5BDrdCgbKbMVMmXbSpGVZ2DA4zRhBrBZ1U4T1NDem8X3y8pC99kbEqF4TBbENqiKz9pqU",
  "key3": "2YPWcBv5CnZg61Tbbth5VkSU2kfM2cbuPwsDtC55aAb7aeCATrtHon1EJB4XwcWbmhPxdNvsqdqzZpWi5dyTYfM1",
  "key4": "TmiNtW46PRp1zAWJ6XWLE7YJrk8sbiKLnYF5VgQRUWaH2PbXJfFUkLxgaHXduVNuGoh4jVVqkyQrKwxdNJM4f7Y",
  "key5": "5UGLFziBRTtZxkkH2HFtCRsRaAA3XTTax1PPJBKBnPRLQ7y6F3oN2i9Eb4nXbs99sKwdiFtz4iN4iZDAcXRECTPf",
  "key6": "3F7mfbUVJuJaY7Ps1HaQV48DNtQP5za2uR5Kn48CxAtEGG71Cyb2vUprTLVa9wc4SmmFGwEs1onWwqENW6qkvNqj",
  "key7": "4rS9CfTbgLK5bhQJ5kP21F627mo89iWR9VSPrSX1NJzDom9QAmH9zh6eLkVxCYTDbgPBeYNmq6tU2mrgh9nu8kaY",
  "key8": "5cVVd8jXHhZ18tFMEbXGJ1nu55cqVVU6TcERChwoqib5tUvjM5hgoCjWwTfScJnQmzpm24gMD7Tici3qj374uh2n",
  "key9": "39nY5wCgunAeor78BtbCZhXpmsneT7cWca7jCxXhB6RfssUo5WUW7siSW3ydL1E9EAc6Gaa6Ybew9UVpmRrLSjkF",
  "key10": "51ixWe51Hk9WaSW3XrEK6sw4xYoD7rmTzMhSaPHXqinwRg9EjRKiRQ45C8oUZ3Xsg7Qg3ZJYL4RnpnZPzzbxeiRd",
  "key11": "5wMGjHYzhCFyKgcZQLXeJfG8H93zjQYVSKvqcM77xTns8rfwGXknJtHFAhByDzKQZawZPPPmx4vCi1dVQFQKPbRM",
  "key12": "2D17qvPMcrrykRMSTJPwVFJh1MmCYKybgzqNBtFL2UY8w1FwTMYfujRVN8g3LLPv6z2SbyFHTPonEpuyu5QbTRgJ",
  "key13": "5NNT3e9ALKrkM9xGFvwGd24ocsy72Nfrdq6yZTsqGJaKLoyKArP9W619DBrUk1tWEad7gWKZdnkCeyyymMVQVfUL",
  "key14": "2ej1jEMyRH7WvBMQvncCgySJSEVbtxJJj14xxUurTLdgG7S2QRxihDE8R1PLKBHF357Y43vRyaLhKPyFiRsaAWyP",
  "key15": "2UGvvSeBPuGHaa4nXwQdg9q2E7grzy9mFQURJi7qMnHr7wQihWDmd5oEmPqrEry1NBcLH4hmZKSwiSHMWuNkUdqT",
  "key16": "4HuRtdtrHHqX6RzM7BPKnZH6VFeuRrGybGEmMoUgDNMHVSazp9YRKYFFoNBbu4EChNXQmKo2KzFCAkdrVQzuBkq",
  "key17": "5967p5fTEn7EKmsczBH3ZzjFf2ZnjwUjHeWy8ZBXvnfiJSkAfayJ5cAVMNLhG3RZBzzVT69tdMC39ndvVJwQUp7H",
  "key18": "42pEWwEKz12WMESH8Nd4zFpGteEGkxbXZsmxs5ARqBCqmkdE1eLtyWApFYT7Xvmz9t22tSJFxLwwWUMAGr4DYJsZ",
  "key19": "fqrq6NfLKFqhA5JZvqCyqEiJXg21mANUfBPc4waz81zs9ActV2tHyuq4ebciVEQpFG1c8L4isi32A6PpsU3Laf8",
  "key20": "qvcwNcqiu8B12LQP7cMhxM4moeRGBfDRN33cXep2HMcDsZ3qqDXGXq1k8MT5ZHs59q4aLdP4Z9WdwL7kakBXXfF",
  "key21": "2P3tWtgCfmzf44ZRMXDYvVSNjfJQXApPBEEWbGqR5Q58EHgRRP1r2Aa1X6ZrtKDr1qb7a83inLdVVUxkVdUiwQwf",
  "key22": "FcH7SZT4616kSwWKoW3mCzSZ3jScaxkbmX889VQ9qZDBkG5JoJYYqtneg7RiuyXQjZxbm3igJaBh7wmd7eFKgDs",
  "key23": "3eBbugmTm3EwzdE3oJn6qqyFQs7srSdMEpae1EUJRSQPYY9VHsfQPvxdiH2WqpxC1SCSyqjmVaJifCsdZ4zKzUKH",
  "key24": "241Qq1UVNxixoeX7jvXcuY4ZKspV9jZJnwfoqJafDbC1w8tWZb5a3SSkUuufQ9Yhm9SA1oeCwNqo2weBBxdM4PUM",
  "key25": "AskCCmMRHZM8bGybBgSwMjR6mo5AcR9M8JPMAwenuUw3P2EBgQWdZLLNSs3HMuudroFgnBPCkeXikV95gTpb2Xc",
  "key26": "3Tb3ihekfKjinZVF5VN3YbQcLGA1Gh8dYP5dMjXGEy6S5aydewpuJ17LKrzARUBEvhgbupHek6fjrweGfR1Mk8Mh",
  "key27": "2ey2YEq5diUYDNTwWso7Xc5Mfofi4nTqg5MnijR931pcjqbus1JpRg9Q2JVuRqJTsPLo2Ta5VBvoLoFwzop3KkCx",
  "key28": "29WquHaP2P56VQHvtk3ddLfcm4jsbJ7uGzrLXesj4o2qPoLLASMM2SqAW98Hx8evKjFp8pmQhpb4ArTMisBDzV4D"
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
