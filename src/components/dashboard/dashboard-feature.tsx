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
    "4qayziM2ygTpZ8rv46nDz5No3ExZorBbPSwLvX5sViyP4JRDpTGA1tk7trbmeeLoSGpfWK5z1Kt7tGVh9Sk24m7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NT5bVNc5SsXEpmCm1R9wSrRtiR8jedCw5YEHsdvqYKRV9rbTb6dYBJjfu6AE7LFNBPAmn9bBPB717P1ifBwWXmV",
  "key1": "2iztXdv7peYwSkbRiWhgQq3rW97xeinpgUPZxH1TdkxzwnZj3qTEeaniDQbWwzJErAXg7mE4SHzuyGYZkmPuCg1r",
  "key2": "g1mEVq26Kq6SppJrYvLxYcdyer2mCMVFttRLnhvf4SUohBjxEdfK3AjD6mCU3WpoY7sd9MUgr4c5mNL8LeHzvMi",
  "key3": "2jWJFzjH5GNT1jq3W3VrauJ32wZWLYQPuVaHzoxVaYp56rTSLXS7gShJZcPm4nioH93Mtu7RG8b2yWUbVXiKcgCQ",
  "key4": "3XTfKdCMAiZuvk7vTPdgiRBmFhxmXkD223TR4DMh96kYBTrJJBAW2rs6uydq9b5c2FpQLtGwNBQJmQfDjFHp6VyG",
  "key5": "4wmxU5zY64DALw6dazWv5anWy9gmYBdPpWdiwFqbUhcBADpRF13bZhtbkd5c729SrheDTcn7mmt2EuyH18Fqp3Uo",
  "key6": "2JUHK1B64218rT2GuV7gDsu2eRYBwNhPfFvK74VwL6aEebSuzzg9hSevoMUJCwu7CAEupEPQdC5xP6w8AgJmGGMD",
  "key7": "5Zbwc1oqg9XCuhNN6yRuGgBgwhn31UsJgpjpgDLMSPgrkA4o5cFQzCXJg9sWmT3o2Sk6uTijTVKXhZybgzGHCSc9",
  "key8": "3omWRq7YY17bT4EJjLRJamT9Dv4Xkq6WoX6a9MVUxgxVvSwsm8mYD2CtDsKqeaf8vL4pLuJ5hVU12ZTAprqfWnaE",
  "key9": "b7A8JhdnPsBhryEyEfoACVo2o2DqLzTXLEuqLFWGeiyQjX6aBUkuuQsdQCQHwFGttq6kAATUPx9RcY54WiP5B9n",
  "key10": "hSsJhiEcEPCAkPzQ3BQRDs7samUtFdZ5exC2w6n8vYxMC9aCgXYbHpUr5a9v1pup1Kt8y9xigVjQz8XNhAP8sQB",
  "key11": "4T8vZapPp34cSJ4tvsx9wgoZ11FLS8RE2fdYRbnDpVAEAiKmf12UT2tsPbv3rwP6eJiWXJtRHGXjJM36nVRTvWsg",
  "key12": "58KJ6LcK6gWarhneh2kckrcGqQeVAC26unaf8awhpaPBBzjVP8WkNxo3Vm4ubQzbFjZyGanHW8Lm3CCbYPkm7Uro",
  "key13": "2ARsU2nmf3gfxWoXmskGGHaoqjeMUXJB39aNmmHypDEpVbPG3LXJKbpY8i3oeNp9gCEYmPJob3YMSHSSxB8JejAg",
  "key14": "4CaC3fR62HWd8i1UBFkCCy8hSso7Z9BiW9y7WmRNXcDaXPYk2wwQMMJeis8hKvcdQpYh1UXQE4Kt6N5dwnMTmzPS",
  "key15": "3UrjP3Am98qSix1GiPny3D996D7k2QuZs67YdCbdX3vyoog4qmVmN6tht7wbLqT2kPGwH5VFJNvJkFc47EeJcFMV",
  "key16": "2ap9qrqc7qeRKDWbexPBV7DDUofWDFrvUZSypKF2W66PmYfZCaXg93FCoqGVz92gmaaeQE9qJjn7K3PKpxD193wN",
  "key17": "4XZbFJjq4u8RbvwjPXiZ57B7PQesxndaMC2pf1hkYvTXPohdd1Dar1Hqz1PUidSGzpFM4mYkSzWZcyQjAXZiEaTY",
  "key18": "fJfXzYZHWWu2AJyPdU4GUdcYnJH2PRFP1ZgFYYHs4UcBGBvVcDKSKUUyMfinF3oAXmMhrJrA8wDAx8PPHub5c8D",
  "key19": "2UjJj3yhpjhfX1mKcvgNTMYVtquyFWCmWKfnUSNDQHdDWaHqW3nzv51nmfv7dnHgL8K4CKBqquzFv5XE1AoQVS7v",
  "key20": "gPopJxB4iCNuDQSvTKHNUM4SFhfWFAjy5pkeRWmY672jhHtcPfs7WPchbLCyfBWjsn33pe2JyobdiDLdME5Uw7K",
  "key21": "2C5KqRjUbS7fwBXgfLQDYvT8LK6RGJ7zMuzBY2Hvsd44WamkiM4EfytN8v6RFnqvnepVGKvEXXempdut6AxiwJNd",
  "key22": "5v1UK2pnz2W3whAsFsghug7W2qmrXNyePRd3gKrkwknPsLjbERrzdwjhwwZ1mQQRU3LV5FTME1DE2e5vGX5byfwk",
  "key23": "5tG51qyB22ymman269B9X8MvLsBxavkX3HpTVD9eGv6LMaXguvNvR3vv9WKfaJAhWtRTBrX4Tw6AEBAmd3t3SV3m",
  "key24": "gzGaALCdbZn5VGoimdYFT4S8mbLgtdZU24VSZnGCZi8b9uzuktrAaJz4Gay844TVUdJ5esuSGeJvcWoVwgMwJGe",
  "key25": "2MnYvj9Gr17SAuxwTBFKkogqD6div8WG5CHbpWePsHULYyY58wVNDjnx6KFYMnmJWYLuDUFSAicy7rPUdoymk8Y8",
  "key26": "rmoq1VNAZsB9YyZ8h6xVjmYcUwyTRnrLjwfA5KezhMu5uhYtM48bC6JraympqGpHxZV7hVg73ErAUAgke5k2X84",
  "key27": "3s3fza4KNLRFXmJc7hecYGnenzaVDfDw5rbKm48KW5WNEr7a632rPbHjFjqsHGoiyiBFqfX9yyyqjB5pch8dcn6H",
  "key28": "yxAnLCmuvxLAPQiFQdjALw2RXSAbrs9rkT8HD7e1ToranAizrJv6BgKA5p4QqcEtj7skWjia9H7cLesQmkoH6B9",
  "key29": "kqiQpebhQjpweyoJGm2isEJXA6aQp6wrZPLKVEwTVDgSyPtFEJoVsBsXbry6DJZUqmM3evSbB3LG7fsFmsZTEKx",
  "key30": "38iy25ZHA1KeuTpwomSfeexrkBgd78TpfAxizMSeYK6qmDmYgk3yErezFnnfH76AvWai4fM8EXxB94d5vZLnr5Ws",
  "key31": "2iTwSuvqU1qxvExVCsywqPjoXanpMZQa99TgafcRk4yGDcmYGYvnb1uFZw2vXsj6bCiBjQdgmGs31KKrqUtW1yhi",
  "key32": "2VzYfSQTGF4kiq6Y4xHT1CygsSu91n39Viw4R9X2FW1gytrHx4LcLxjE31PKxh47Wv3f9z9jgrHK1ACqkk3VHhGK",
  "key33": "4c5As5c7SAxrsRc9XU5dXYShtnXn6uJQYSXvwM3FH7e3ukjgSLUQbAqJFWm3d7c8a5dU3KCt25jdipkqf2ETw8fr",
  "key34": "4L5ht3tPtCC3tp5UsAMxXN96Us3sdiyyYNG4guegHaBXM4KcgTzVg4t4yX8xdLnTzMm3mryRKTwA9s3SJ2SBGEXT",
  "key35": "61vmFLaCQQfyshZSVc4UvcrMM1SSGKE5QfXS6vtVkLKjuji5b8nWchgHzxAQMn1GkXcWR3Cz1NsNU5Vd7YYi3WGp",
  "key36": "24vsQwSGzQrYmgdn9h4ozNdXm2ZY7SmN8YvDW8EThPuse7P4ykvZF8mXSiJ2Jc7xcyZeURNnnzhiDsN3LVNFHB9e",
  "key37": "4PtGHioj8iyEJVtJ8vJru8k5c1dDkfDBWD9qFdJXLyR29RVePCMiZVtZcBj9Y1Jn6wcNXzgur3eenFi6ANBG2SQU",
  "key38": "2bhKVtAZ3qvRq8mFzV4hYNfP5sb2dnwNouVyoSptQyQvUFuojTjhs1qYqEBbDGUk1ssjyPqm8nSqZQTWTuem2g5A",
  "key39": "4cFjye5AZNCGkwhno6oQ4c3N9NeMZoUKiSyMh4SjDKxjiVoydyYBH6ez6kLtaRpQzLrHBPLmsdyGhFsi5deYZKJs",
  "key40": "PzepJbM6Jwn78XrHvABLoGdfp83PtZGmGQKPUEkCwiBhsTXFrEvivrrmbiqWNT9rAi7zk7XNyAh7x1BDT7cm6zE",
  "key41": "2RmFsa9DZHhvVU1oxC2L2mVzKUr7xUC5uXZd5RvqRZmHsXa3h695dtZ3gTebXCSS4njs1ULV2hgk5L3ZYQ75CE6n",
  "key42": "3qtzRKX28SDJ5T86xHcmF3YpatusMv6g296TCsLeHBduDhUUbqowbhLr7W7xre7YDeo9ktz2t7d2rknjUVX3aXQa",
  "key43": "3nYHWwCuTNkpor3toEAx7dBNxQZr6Gf3xwG15UPjPXowVW3og86zea3sbzfzfpnARoPV68a8fX7ReiM2fRm2Hcsh"
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
