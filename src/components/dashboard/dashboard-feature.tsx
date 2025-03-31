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
    "2fTAou81e6JCReuxaM5WPYyemZfrXHz2zPJguxRwXSBThGN2yG4DzF4G1MN8rjSHoWwUCAj6F5JidWUiz62M8sdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SSLnnfJ1m8sUotVHG9tMy2sybARypbzBTvhBtSaYjALY8eJmDnuybhTifw8tmjovjrGUr615m4ZCv3Qhf22Dk5y",
  "key1": "3JBDFtNSxG3TAiP4v8AgsMQmvQ177ioyFN2QcSjrFMZ6o47SQkTsED2MwG9LYvTu7cNTCvS3r3EBeUUTcKjpN131",
  "key2": "h5wquZDe1AAtYRcAVkLVfbTuBfkY9vdVC5TztBofTMKBprFrDeS23ojFoy3uYxtHkENoa5PYSu5YyeYad7dHN2q",
  "key3": "Uuz1DYhHJANxAXy2m8spkhVndYneu5NPfeFN5WpHfyrc5ERvAPrNAbzKpJ1NAeYJaVUvyf2dG1WnpfzXW9oR3ZC",
  "key4": "4R6SF1Jrkvgz2BvEi9QdNj6cCEaWv72ooNyqQTTv6RxvhvbTEvgxyUtokrg5oTuhKvrUUAGf3W3bGj8V4aqdMQvu",
  "key5": "3oUYBfJH711ptT2x3KBMPtVfTepzxLWwvECi5BG31UhykKHa6itvkfU1UixxtL5DoSS59cXoMnWufWRQrU4n5BHm",
  "key6": "XnCXEkdQDFLQGoNpB6vM8ZHU2wHPrj3YWRmMHfheCzJ6v1qWsNLtxqWHX5VKgXQAcXy1M1rqcut3YpLZPwKaNrH",
  "key7": "LeoPpvQbgqCLQ1S8KvxKpWdeo1NELKiDrRVurktqiFN3zdXXLexLWobHpV1XYQb58rPm7b2YEdmBg5i9nYJLwwX",
  "key8": "4c45pP6EPBTsV6EbRR3LabciVkeXHrGC7VNStufsH8UhHjGC1txj9ycHXpk1c5uBJZehHKtXdw5S4Vsu8dmBvJYp",
  "key9": "2jB5CHTNPnJhQiDM362hM9gyUoBkCc4qR7bgJ6vwzZMTUvJKFpbx3ck9fYBucNpTDkxfGPtBLZVVAAUbmAWZwPak",
  "key10": "3PJyV3f1thE8iqPHBFr5f92soEnxwHBiGkoY2xG3Zm2iQGLCuxnBczqznTAeLAm1vpxfDkGUKXVLJu4KMqNqhbje",
  "key11": "3M55nNBox8UZYghN1qbMtHhKLX5356fcKXmfXDjhNzTLsNoCc326gBo7FSwNB5AfMKWnvrpHoRa1PTSQ7Xr4g58u",
  "key12": "53A6Y4xk5oEFykdqmL84icMXGbR7gpMp9BfbN5nsPviPgRrZYekpYqk7xpM7H2s7xNkX6bJwnY8TY7yBkG8eHDsi",
  "key13": "4W9C3EHbK5sq6M9nD8zERsuBB6ZuxdbM2njvhDf8eHXUyaV1pSqhMSVy9ky2AaX3DezRoz2ooYCJ3YjPeAZQhLsN",
  "key14": "3RNWAHrq81VSeNxkZTGH5AjygAsbDgtmBWgZp5J7tr5JZe819YhUTspGHbpjNCdA1xS6fNqFYaqFQCe73rHRujrX",
  "key15": "4UtJA3rfE9HMyzT33vZfV9aee52p3Czf5qqqMuYgZzevDHgFjpZEMKVWpiPnC29NLnYNqEzqtQ3ByS7PEyNLT3Wk",
  "key16": "4Ak76uNWouQaZ3hcuNizKN7nE3b1pRGNfxm9DMCqvQB4j1UBkgZaTur473xUt46MPnVp9yq9DGscBzf53g8dYrpS",
  "key17": "2G1simGpU3er31gJdGygAUJMv9xWkvG8xt47ebkWXZzEehw54wtZs23sXHGGU4xGi116wNf95aCCzDedN1S3J5Fe",
  "key18": "4BjYEhk1hxC4SjT3AVg9kpZvs5nnn4WEoCMMiEL8zpeT5qzP6xvm4hYuv9M71owUxWFJiJmWGdaqPmmdyJauBGYx",
  "key19": "2yYT9d6LdfXoW5XhJ7FAUXJAWA3y7HdWEuoMXgZVTTCFht2ZBB2q78m92DMSc61N5mKsmUtbBfoGeoZGRubMaNbe",
  "key20": "4qYEq8EXczkLQJxNdidm4PqvTmKmGZ4jPzxcSuJtSGHugPBQ8cXk9iH9SGL9PhfjHkT2t9gn654XShw7zX3S11xM",
  "key21": "5eqjyzSrcY9vC2GyreYwCVBt9YTrkGtEqsiCETFzkgwAn9AN8yqDhi9FHKKXhCHfM6Y1CTCc4vyNox47TFcv6U8w",
  "key22": "3bcAmFN9KKubGjSwEk6bU5aunocWbanYSfg6XQVhR7XHYB3SVDdcZUueBM1PSA3XjaP7yJBUvs2VMpb4DtFZigWE",
  "key23": "3B8SQyTo2SoD8ncWoz9qkUe8QseRnByGEfyVAs8rTnKrm7ct8wv5PeWpRnVVnGBACpFCP9PYm6sE1j1WmxWgoGZn",
  "key24": "64aPJqY4bu6K5pVr4kLbFWPhUP2QcrtY1jGULw2gVQbxMXHtJ67B7z9BcSE8GUyGATsFnYsL6225cYGAEbunW8dK",
  "key25": "2uRZaq5PjqUzmK4vHQFNVuUcrDx8oPS2ZrVmMB3Gby9GLwrEaixLP66SBfNgpcgvucWdksGr5PkfzHup9Ykx7d9B",
  "key26": "TJviJkoi7dZk8ZteBFNRy7ZvXGUgcVHyTnEYEuohdsoUMfyrYVg2JGarpcQcCYB57g74dj8B3UuJpJFXBGu66t1",
  "key27": "4SdqpYiAoMAPNmjp31gHmY1heMCJBURX3mo1KdNkYY8zsS3YzzDrTpMxF7pTZhKckEvcdQpocyD42zc1dGHCZvUN",
  "key28": "3XfAkRvaqsW7Y6Yb9WP5rMq6QyKb7TyAB76BNdKZ7NSdiLohvJ4y9NGoXYeadkuSteW9pJYJLvgCUG5coEzRwUme",
  "key29": "2gaxtT8A9shSjG4SFVh28ZLUwHGwy4TT7a9yzwxt4p9R8zng88mZgyoEgzPcdMch2hj6wcNh4tN1eXZ7MS4M57Dr",
  "key30": "Tor4sdFyxHxd4JWBAPzz8hPbKGtg7wh9go1vL9Zrt47G8XHAXnGbAUMKnebkPXscztjSzifm7ufgizcZNNghQSH"
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
