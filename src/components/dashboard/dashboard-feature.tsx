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
    "66dHrfK5daGx9fpC9GAMwzL5FftEWpjtyvQAVbDDGeLXMoVTAvCj7bKmJ9ejvXzTJkiaMDJKs3XZPruUhq3vPpLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FNECezMaciUycuUyNWGBch72sAhN2Mbdn2DeBXNAVLzYtZjN88asZd8etSG2ecj1Scp1hCC5oxTHP2mfRteU5fd",
  "key1": "2NH2QsTAxhw5j9REccJFtCzwW5PUULrihE8Ys79dnSZ6YmKPKNhiQyWC4zrUke37uAyEkXHeqNrQdPuU49wGsZcq",
  "key2": "3PoX8Tvfy2JMcbmHot6b6pFkU6Zd1ZiNzd6XmiwLAifPzMGwPs2ZA82WxzKFHYbk3SmwNTVKZ9inzZayZ1A9m42n",
  "key3": "5ZVqZV9DzFfgH5peJabqjD5WjX28bdUpWeuX2USU2EGgb1wizJmL1V6wsD1C8Ri9b5zrKKEXZvvY4WSMcmYBog3Y",
  "key4": "625wG2qcsxVZyiEytf5QUoYNcZWJAWeXJwwASexL4m8Hn98LYHqrLs2Z1pFqDaaRqYVo86nTj5xrAHb6v1Bi312L",
  "key5": "6WgFAGcEuPfNULJ74bxuPV737vBDpctUdhG4GPjU6oLz6S688Wy1KkJP8rcQs4kqE4cvfy82qenkxQNeec53q3a",
  "key6": "4yb5B7cbYpCYEqh3oYwdGPU7kLjN8kYp388T8Lay2SHcJYiZs6Ngp61Kj3wxez2dX4jfbpwVv1myfeuEse9F3UJ9",
  "key7": "2uqqnrxY44VLJexWh8jTNJt9n6613mJaV7QAArjdKZhvXy4zT35HoyCmqf25qdn8Nz4zK4h6GmeBXSnhspKGoBSo",
  "key8": "4i4M5sLF5k6PkC5ptQsMXttijqr3V6Qqxd5vQpYSQ1UyPcjCAS4S1qgwG1NKRX1oq876LYu9k2abnah61uNNNDR7",
  "key9": "3BXKs92a3QJ2Jp9Y6YwtLbeqD4N13bCDJVhCfXXQSRDgRGJrVnfwPq2xMd3R5Beus1X2NYRWT2jSz9k9sAKycq3f",
  "key10": "7imMajRu5eG31ZzBxuyZMLmUJGrZ3qA7Bg2ZcQBw9fvZNBYa2mr89HDbtfg9Ci32zSQQxB6ZDPyfAmEj31cJmUz",
  "key11": "54kAVhqpXdaveTf5u4q1ADKD6es5mYv4SBzdfjdM5JsYSjDgkeKc3vMgpoaXtWTgBpvm3q7jKPEx14vkBHtYdPZK",
  "key12": "e324TdpGt8H11VebiUttUpfG7yTbj8ZvHXiCtShscckJ4Yqx69C7VGTH66u9669g2oZPRaT7F2yBQV1dHeecdrR",
  "key13": "5ZVLGxSrfSXARRhSEh51oFzVjuATHNV7eHb6zLq683x4CjiJVoGyPgbfSdSNDTg5zz3tFBjyqiJycf2cUkw4xjqZ",
  "key14": "4m5gpfgGu9qSoK93xmwdpWje1i967C3xRdjpiwk9CQtqT5ZnTvjk24LM39ir1cJ1WsUhqJnk5dWefhSzaNYHdpBf",
  "key15": "3UarF8PvS6mozVcQNSsJDS7NLCbcD9UXAEPbLD9NiJWyFv7fV6myTRoie8N4dRDceo4XHQb6VpH9VtW1yBNe4LDW",
  "key16": "JoyTvAREG8DUNNE32U2DaMgU4hKymKrAVdKharu5QNhnNnQMLtVaSfy1G2jdKfGux4kXWk3NeKf8oj64qEasePx",
  "key17": "Am7T1E6oB8kkGrR22WdZ1dyZfRC9UoUBtNzb2wDokdNWFveQL6cVZ6vNeDecXNeZnxFf6rUxKWg9L19i6Z8XrDg",
  "key18": "2oEMUjWhZ2jZ99BgmmfTvjyZBDkQwA5A9AaZdR5ga4zCxVvW2N9cFzQSvi4JATJVcYJGQyjXo9U6VFjzDW3AZHrj",
  "key19": "3b4osmXpwiHn7X912zsgcH2e3JtTwqUWAGj5NqDyDDDsbm8SBNpmYr5bmTfzhJ3d2SDbBKELbj26x6Cs5V9Jej2W",
  "key20": "kitQYPFXNCbSyxtnAiMtHCiRm9VE1rNeJZbu6CjrD3XkKBbKeLqFpYz7JQQJDcfp6fpWEqBbkFJKCFi1UBRY5pp",
  "key21": "pzEevkTiqCh84w3SHedEzEDTKjAXebzG7kGg9b8bWSqrQ3bQS2hvVVhUExZyFXPPVdmvRy6DqCzbPNGgzwNecRY",
  "key22": "4GQf7vq1FeRJJ3UuVSJVD9fGfYApLJeYogvVureRRyhrd1KaML6EAvvvagrK2Y5VTCVXYvJ4ZUZMycE4vWEV1B8B",
  "key23": "3ZRvf3h1pt5ck7UPGzzngmnu8SVX2cAMa7JnNv5hYLqCJMtaU22EDaTCGRTtsbD7b8Fanx5NmvvcA1cWGwdghrCC",
  "key24": "2aYXrEzfF63gsHZ2jz6M5M7YpQMCjVFr4KxawJF9mGpQD143GdQNoQT3NoU9F3w62U7JUQrGtm5yAG113NZybzun",
  "key25": "Kaz5vAV1KHRLnzMYqHWs5unkyXRokMqZqp8FjyGAJ7j9jiUdz9wF3KHQ54iQgcCXeEBTHd4e3YBER6fCMQweHhu",
  "key26": "5tUiub2bJFBLjYoP5DyhFTjMk52yFdgwqbiVK2o72zsfq1mfp22d5FUizDJaWuj6L788CJcARinSPsyC1TSPzvg1",
  "key27": "5RqABZi9rRchXzzFVBnpiwC9Krgk3yY53hBkDw5DsUaoYHUevbGxouRws5cHz8Qj5MMrhF7zx8LEBqCDPRJmGnZV",
  "key28": "35E3HgSxxeLiRQpsbNCdJfjTJCb9CRrmVpHJ69X5KFyk5ho9a28kFt5sCAz5KW1BE5PyM8mnYZVQhQKK4qnrjUHM",
  "key29": "ERtJ5ypumyQFahyMoEgZqaKcnAXvgN7eHodpe2w89xuA2s4hJ7XpjXmvvJ1dgMbZc87GrogeggA4fNswQ9NiYek",
  "key30": "S3MBwuWNKTGREpZ1y6eNUUH3pf9p7TmPcNHPsus4cLvceLpVxzhvBXNoA6r42UXfPLvkaHoYghDQ32MYuXafjW1",
  "key31": "2Dmq1y5iu3bBerRHuykewuMJHApWKkpDjdp85oWbR5oYvUL1XqTMLchyFdeq1aUhwn2xZd2qbWrJZ3SBwm39G5Af",
  "key32": "5pqkHSREQeh9JfeWqUeTx5UWkssEkAxwXxrrjYC8hMZXhaEjXALGvMB17c6RxUuJU9F1MQoANdjyt3bnCZdHDM4w",
  "key33": "2C8ZQyszERMKFAVw87sGfP8stEE84DwpKxqfHQRTZ3hsuLVLL39eHVr6G8mMbdZLTmsgG4F1He28ESgMgoFF8CWi",
  "key34": "2ZDfNTxjEtaFu5FeU2ZxZ8iy6R2buHFJBAsfeqqBKDfGeL5uCV2LCezZ2jvNmF9RUSJjfLQCDv7Hj9NcFXMy2Taj",
  "key35": "4S9FWNhh7UtUCEXJSR7i8HBn1pyLvBTqvWaBJAdTNPfB5gx24xxyFBzG4ErjzctNr1dgqkFEvcyvwKjbzpxu5Pks",
  "key36": "2bzDgawE8QYz719TLXPGErQADxhRMKBxMdE8ChFrDJBm6YxBUq7DRNMx9ifa16muW8dw6396vSh9NWucCerERpbg",
  "key37": "43FsLjudeQ7NYmXmeYxqrMo1dkV11ytbtAG5YvSigdP8UVZDRSmLHgzYYhgLd5qXg3qe3NxYU866PEiB5XgHTvGf"
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
