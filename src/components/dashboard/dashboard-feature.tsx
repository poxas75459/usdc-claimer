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
    "3sEEWWU181Xwpe54GWPU6shx9DTBxDikQ1VFQtPrAZ4W3koAyJRroGLDNbXEPYsphRDH9hzWyrMUiKi2fTPNC1if"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PHAHBoRieagBb4rUJQTLmT22R4XkpEQBrdxA6KuxSMES8bKJfzC6ZBBTyfSsspGjDiBEzneUgUqN2XeEyBUVZtL",
  "key1": "3NJVHRhPoQJXsknYcYwqmGTDD2MiQRwXK7guKyCWobVrynrDhuBGx6k2yJG9jBdVrkDoQ6aAmE8jRwoCCvBUf3sy",
  "key2": "5Bn91sZGhLjZrEyzgMMZWcb7bQSyBQJTQfJXx7MjmAJ9W8VnYcKKza5xGK6gtV18wDHwGZAAUKsXuraU2wSQHsSn",
  "key3": "3gBPks8z8LdN9biCzGF4PqxhC1DNHsvxzsK7FY1XQhVLqZbfFNGtcp1fivbP2ehcbfjxMXdU4ZhnocvLCKPgDUVF",
  "key4": "3aPebKuSSjpzKfpRLvR82y74PmJXjo54trYCr8fZvYpkPoyvEUJB5TpQA6CW5hky3pzKyi7cdX63scNTaC2awrhP",
  "key5": "2zyECEREfbVWjfL2Cj3XEi81cstKYFwq3z5neXSaPVFUhnovk55FUnuHFt5CmPXtbBPV3HATMGJydwYNw97knV1s",
  "key6": "3xZFfy3g3TTK5H9NxkK93zS5WBhWvsoDJUrwkc4bQVXFkn7AQxQ13Pxyu3RfgoG3xyv7iSLXaU1Y7JgqzgNpy6iD",
  "key7": "2AxAoznKT14KRufGFcB9m8GZdk5MjTkuVqLTNycT9cUXMpmJrihSwWukQMaJjF61xeteEER2MaAcyr3jnnueNDLy",
  "key8": "2UgRhbe8L9sbUA53QYQa5MWphcHCvdYSYczq6VR23tHh6AWHeVNPAiR8NPtnAmdB2nEdd5q2vo8Ymnn8hogEuccg",
  "key9": "3hNqoqTt4t9hv1L1S7KMgXeorqZfHczyFYKgXSStCUs5j1YKj4TttfRsGvLHuSKVXGSuSK2FvD4Czq4MvHt2mTbH",
  "key10": "5EzTGqyBZVy8xd7nEicCWKUGfQrZhKFQvJysKEkdWpADkVkGZjJE1Pj6CtvU474faF9x2Xm3zhuu4ERVJTLZzyJw",
  "key11": "4fjjojdkeW6Xi71mbsbx3DGMmz9YrTn4Yg16k4MftYM2FWhUXJtfzNMfVFMQ6Smf61jEX2RaP2GCKigcBhACFv5h",
  "key12": "5VZa6Y9er6X3U3vp63PCF6Jgqf3Ey81gBhCR1VnXK7CKNysuoB7S64AuHUWb1uh9sq33PRieuvkivMhqr5kY3WB6",
  "key13": "2vuPn4M424gdWd3aSjELLv68fXpczzojGrKXgdJzkCtxjBaDqU6PaNd8fRZZe1myfpVdDiE9PStvuJ6Mdccod7QY",
  "key14": "rkVJ5uyh1zHFXn5htHH1xh1pF8BHdY8ivm3L4b3iw34VUn9dQcgbJhvomfS2i4Po7RHqtwNadTwQDfS5Fn3xScW",
  "key15": "FJVchHjbdPuSnoHxevdUDzmKLikvJdu4tYHZRET2wjfNnZo8MV1YCLYf6hXoFDgKhvv3tSZZTjTnmyLE6hjz71z",
  "key16": "4ywYK2AFQe4i2u92WnJEcEzTzpjM19x7dUoiB2tuQPT9GRS1j9KK7gK97RjKyN9Xkr3gfQxvif5iTstjHkq7ks6A",
  "key17": "AZaSVYy58GCeC3fU1hnSQe4NNTGnsKnmPkLpbCzTPG2342CQ26L5QuxdjvkJuDdhMMP5wod3tceQieaSVPmqyKQ",
  "key18": "5TM666KP8pek4kaHZtqVYfYUUx2BMf3gcrxgRG95wQdrX6TPxpkUjNwbNBc9DPUUYzcRmRHjb7u4ZAT1apzBFsTj",
  "key19": "3CGdWpaD7qW9R9Yp6aiF4uj8CdcwAgDssYC8affa54WwqX2ULmKBc2Q2UX8McCx5rRpq4ENB6XJoKZhnDupYQeJa",
  "key20": "5kUTTW1JXDyXzzHxWwZeUUX1EwPdGdDG7FHFta8pgu9UkZbQvgDmc3z2r3UHjCwkjEFpf8pqU36jH5ZaUyZUmN9W",
  "key21": "4m9wWdiNWB24tQd1NWD7xSh8xAi43S7vgiWNFx8ceEDY49tkYeEQjHnZFe69mTChiu3wNYEC6LEz3Gi7Vmgfhd7i",
  "key22": "5xxCAP86ariGXj4c7hTQrWR9fmKMkiqXjtsNfTj2VPEEM18GZewpi32Hap6uzaS6xzLApL64LdGxNwNWUoTL3e5g",
  "key23": "r36ACMpDsMsFHpuVmsziyzWGG4c8tgbwdTsFqdwbCgdijWBMgLfoS1jhUumxuo696eRfuuZ9Kp9UUwrfQykq2Fi",
  "key24": "3hyozcAEanByMcZEH2sDxgBcXyoW8t71YrnQGL7JsP4XbPgd7hT7sQX1FYv4nSSz72czADEs9ATwGaeoqibUp5r3",
  "key25": "65j8nwS4AksHdfSbHSxL19Zdu6DVzagMYcSRwou7kXFSztQEVwAMibkWPxP3AZsLuda4ftF9qPNi5PG7H8NgTbP5",
  "key26": "5C63g3mGJ6sA2NcsbuuAAfewzXQv5SJVKdgmQYrKSNGBH7FejN7kAQMNUocpjxqh4Bc9rJizE8hhVpvSyL2Tg1DC",
  "key27": "4ynVhskZ1yupK2osmzGXtW1381MWH2KrYe1bQP1Yf2bxd1dVikjANqyxQcdSbEW54W7b38z3N9aW6cMv8o96S9kz",
  "key28": "55bGCEF9UBQ6BbjRsM3WYkVhFuzGnKdA93cMAQnHVUE2tTJyZZPodWJmVQk2MiQq2HKorVjxRL29VgrUKwKe5iCK",
  "key29": "47bTWVxtj2T8EUcxZ8mHvxNGLwWtsjSiwjCfZQ4qM4kKLTdvRbaWunWYWYRuJUvc8TrnfYXqzyrjeYJB1soPtXmr",
  "key30": "3W2skyir1Mg6G67zUtasSUfW5GvdkU7jL8Ga2ba389jb56YFJa1cgBJd2Y9E6dCBdepKzuWR7K3MMfcN4SQgMJxk",
  "key31": "4GH7qu2D586y1BgduGt4hsv6hcLCrNj5oLPQRajBfGU2BMdpU4ZXvvpToELWUEs9rKGyudPcgtZ5d6M3FjNHSB9A",
  "key32": "4X73qAZDdbnNKoA3bKaJ4XW4GJpDQz8ScBVbSW9hCQ8CMUdKGzYTjTbxMS4vR72YQuf7m7UEXEyJLKs2hEYNSqSN",
  "key33": "2fJ2t5HZTnyHyvzBQQd14VJUDAAubR5QNaKWQidJM83TNqb9QLj9f6MKmhnYGSMhvB32h9ELa3ehk8e8yMQKccSW",
  "key34": "5jsEHW1V8yf42ms1Lc1PQwRy1RC5TNfoZY4HAh2VTbwFjMxJbmcXSDPpuHg2VfaY1MB1h7W8sdVGteMEUFnddWEr",
  "key35": "4n3SHZXmEJiZP222nfKpUb4dbsHkxZ1FkW2uuU6zTHPt2UZnndWUZUBCz2SCeLUZA2PoT19niQCAHEbBwv4Zmgnr"
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
