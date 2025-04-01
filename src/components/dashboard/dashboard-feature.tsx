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
    "3QmQ5rNsWhhLWZ4WS834xjNKbZLetoU8u6wggRnD8PSpTYhhUizpkxEcmHorg5QYDisqNb467psdYrraYX7A9JTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UCAdkEa9f3d1br7Gxs687WcQWUZwmwzHJJfFvbuxb8oNTTYHLNUH8FXESJQfBDcHzr7fCodQMVbttZd83vV3q3u",
  "key1": "65Yuzdnf3VsktiDA5rqpnrmYvjjVzZ2wmSHgz5HkkYfqwtmoqXAa89FXGExpymnd3cSBWNtYUxejzhbopybkUC2G",
  "key2": "29Tc51pobN2isqTcdFUgfniba9AR6apWN2ApkUfb5qg9V9tJGAcqNYNu9sR53wjv6R8AxCDiBRxaEVyBU3DUkwTY",
  "key3": "5LUbCvYfFB12gvnAYXd6nPL5EaqWy136wosXYB9PUQgCbvWFZCUD7qHdXvZzS6jcVXLJuhQuKqggss53LWmLyK7q",
  "key4": "325784JGtjVv4BSYc9PepBAg3LbwWXisVmTPyQrj3gN2qKWgAC3cEWizRo9LrfSRSK7X3GpzsSRq6DBvLfYitMaQ",
  "key5": "4DJ3pQpdzMA3H5HmfjJnT3jrJqyoK3Pant25sGpdh9njpewToZ8cieXmDCNEKjCzX1s3KenikUXuPu72yVcULDyC",
  "key6": "3bnVVKVn1WzKcvX1CzxE3skv3ukd9pJsX4uYX2edSZXSdq731T9rDwEhSEGdSpnBfKs9rvYSLKojhvR8Y5jwmLtr",
  "key7": "35UDjYKEJvRTDZakX3kF7jKJ68HeVJnVAVpYZgorazmapTb3ZDGHAj6EuoiNGeqwr2kW2y1ChadbEPPb6oAaUezs",
  "key8": "4CdvDypEQP8rxEo26GC5JrKiD7SFJqXegb9cJ2x9AbwyMLNnETyhDyH5tUiur1iA2h5VMa2RMsffNH6x5c15mXLo",
  "key9": "3fEUZJiaVBFTGHrmb4DEKV6aVibExPtV5M1eVo82VEnQ3aADcsu3eu7xtkLJHwKTYiJNySVP1JbZJijrxexBatkM",
  "key10": "3N6M1bc7AhDHAkP3NzjpK5QoF4eDNuHPDLYxLfqr95H4NLkLftXUVJWy178ZcNoKFzcPmPW1LnmqK3m8uuDCTztq",
  "key11": "4KJYbog3XDuxB4mugQo1pZ1sZvWQ9TWNiyitzDnP2EsHqCuCnNqtyyA6KVZNnmpDGSsJYPQXwVc6fLnUzyspJz43",
  "key12": "4yE8aYi5JSt4XmtpKe1Vr1GzRfZaBj3dteksn7kypA6kze7rAaSRvo5xri8Q5jrwD78CdvHeNVoLRkJa5PuToEWq",
  "key13": "YkcjzaQVjg21iWF4ht92HXDy6zPoQnVPYmFzspb7TSFDVidyeWwoYi9KVCBaQfdALnFospFcZEyhT376cXfWBkK",
  "key14": "2EuQZwCNhUHKVZSd6nMwQZBrFuWvm9qxR2QHAGG2cXhxwyd32FmsPvL8nQc1MracwyKVFVtXARRJceAeAkCLMmVi",
  "key15": "5o5FLwkVcWQiaaTPzqoTi8V6cpe9teWwv5F486Di7Po3CvowzfNgdf84kYKH432F3tnK6kycnyZGzeWJUPKHMCL8",
  "key16": "5B7QmXdVE6A9hcv3wCqnmm2aX5zZMeKRrpjppvAg4MZgWyFsAW2YugRy959f3BhycBZZmb63uVzZFYZjD6X6Sh2e",
  "key17": "4C1fxYVgMrqDdPy6SuyZK743y4TSck4U7iDkKJmjJfBqzY6KWTeTL6DLLGe3KTRPJ1TJAEJPNXkjRYwR3s1Wbsyo",
  "key18": "iBjBh2LZw3zXP1PMS2Dk9Gs5HDNm7q8w964PCEdTdi1pGZbC6Zehr4vLqa7rDsf2DDpAqMTQvzL51fTFtmKwJXH",
  "key19": "4PUHjqHPa2Bh7VB921Kw4krapWgCtjF12e4H8zt2T9Y3YeMW1WDr1QfNBwnvASXp6ZzjguPM6jJD8eLrAXF2gTNT",
  "key20": "X7GkjJ2j39Uj7ktPA2AfCruyWoXHvmJAcvxMXNiuqP7FDn5V7LHjWAv8SWcKevS5qA6DK3rG59HYyzD95Jg4ZU3",
  "key21": "4thEnPKzmUvMYMAGjssVDKgwfKB6cynYHpmAfYQEzo3YNKMURREakJ8gx8Hj96ZbQe5YYVZ9QdPA7jzuSj9sFrCf",
  "key22": "46MotgNkNYD7dDgBezV76Mtz413dQ5UwjfPKj8KSzkcv7FDoNsNSanrqW1Ae1hAiovwEWQNo1HMnphUMamwduqRu",
  "key23": "2tb3UUhMeFM6wQE9ST5Y9qZGRbqHSbYDEKQkJhHogkmiHrD6uVTM6PHezoxEo5F5ejiLkuXQUNenABDYP1YH7xQK",
  "key24": "28X8ME17uAUv3EfDsRqcUqW6XsrCEovm114mxqkHLMRauQUPTkCxg1UQF7irsx6s1Zqsm6UvNxBRQeTrhQFzN6VL",
  "key25": "2ye4DBzePQkFJ4uWdBRqmPHW5ufqViszYs5ALYaVDk6DPZ3WFgn1bfyv8BjgYskVaQpJPYVDyYe1t61FNDzoVYeE",
  "key26": "suunFQfJqjitkgkShTNpBqW2ZtB4eAw7aWycVTBib5bm7uFGMpzCTn3uMD9m2gVzQNfLrjzijTk72mU6x6vqAq9",
  "key27": "FiR6QPVSkYLML47a8cJv9H7Cawxe9k4fQB6xd1ESs4zQJU3PdCasYakjseZqf4WbZJ1UorHVsGuAUwqpyb4iedL",
  "key28": "2YCu3xY4Y3nm7fLJWZWNuMtTBzzD6ijdDaxqGnWsNmt9QK9h7rggKyC5VqPrRs6g2wWEHBQjRPEbrW1yU9Uniy6Q",
  "key29": "22o5F8wN3nnWJDQKNv32LGrwFt8Z1SMNgKQKKDN9NUiNkcMAeNiG37A8W8b5DWwP7zxQ1e8vszqmV6YLrfW91uoN",
  "key30": "49o44zPC3Dxut88dc2G1ED5DPkg5gdFQ8qqiS837iZncFLwr2dFEgbtcrekueZkDj6jAuaG1hutu3VrAM4Mr5Vd5",
  "key31": "4tUicMwkhE5cjj8sH3CvBasyxjphGAMFSegSD3q3eouq3SmPiz428759CRPrbfDqzJv3VLRhWgydec5KLjwvfoJn",
  "key32": "7EqLFkNRbGYzrJm1bSm8VNreZybFdhM4Aip5DQkvesd6NZecMoEKcT48CMyb2b9Mq661bRy91shpHJKg83WVZVi",
  "key33": "nauboQREwuiLxssvBnqKyQaazehahvhk5cjWBBV5umMBjsd4ep3iZ2yxtroCYcs8VnKX9RVJmiravsJ38hAEvYg",
  "key34": "eKRxwreEk2ND3BmbPxbC3amcoB41zRYv9tehdYEsEutVTgvzv4xcyjYuy2bCYaDap3mLh5HxuiUWAYM3esmwrLa",
  "key35": "oyRpQUBwnDrLrK9Knqt4UzLNTwxb1n6ZtAf1ocCdNRmqL3vjn9STYkVGFFLQqad8VjrCMSdZtXb3gPqsmMDZsHz",
  "key36": "CiBxs4enBnrEEBy2sD47P83qo9GWUq9wTrHhfM3BzXUhSdBBLyrjupqWWTy6Q3mckP5WvtqrtCyHaMkja5rzuRy",
  "key37": "3StkmABXnhEQdz88mmAhLsiCq1QtATWBbzXbY8MFJdr3sdpvtV1TbL2ZviJjh1mPmtUJWaZxGPu43gh7L18GUu3V",
  "key38": "4Y44WCiSXf6TRX2hDMFNHf1EULojLRR3TMEiZB3Zbckihp6PyjfUw5aU7ZcaabZtsK2NVa8MfTazsfosSQjGoYkb"
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
