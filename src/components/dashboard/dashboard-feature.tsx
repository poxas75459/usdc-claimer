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
    "5Zw7ptJpqj5FfPXy7mCeWfjx6NC91ueV3qhsUfQmByaQoz6YyjA8yUCzbgeskid6qQFeArpEVUkD6EkQknWcGX8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MM5W1fXJ1Yub9oMgAkGeo9kQK39PWBxGVLGeF9nir14rHmfiPXR7qcsHu2hRYhHNvgP7xkYgaeGQG4Sr6m34aYa",
  "key1": "49ngFBKqGwkj9tSuxp7eVy255ELnM8nzMCLCkJ7trbFWCuAv6VJRhbAGVZSPt62kUZYJ2b4jzkZfiF5B2uHg3GFo",
  "key2": "xZ4jNrhSsFsTezRyhUXrT6YYmj6wyGtcAfoFyYU9jLdD7wCKFdGF2uUivEpishB2mW5zBL4FY3EaJkiQTdCtWG9",
  "key3": "3txqKAHuTYNSKEtZkQr2kk125PFZmdbD1i59sz8TbgYcj2PDg2xA48QJjWH8kUwcG5E36MbaNwntW7ssWaDc6Gwf",
  "key4": "3dYhk8SKEgrB6ojkwJZhkw5Wui4yQ8kJWtsyGg5DTHWXqeH6GkTYqsX5uocCMMEwDETn4i1XfZ5jbfdwAtKBuhsb",
  "key5": "2zoUhgChHAaFqBPp1QRbbb535knEiyyLA6J1cowzTcrgQGZRftxACKq8ThXWeeD86caL2EgCLrEYE3mWDAXxGQfb",
  "key6": "2neAZSSo4oWSr9wp11JgvpGVY5N7Qre9w2STDQCmp15QPHNtRSDx9FQ6tvE65fQHMb5bH2Jg9F3jMBhVNA6dQjmM",
  "key7": "3iti1cJqzSURpTkwiU4pe2kxUbbg1wZohcUdusk6wLE6emENLGhMCuhgBBnTV49JzfzioZdXoGBQnWXz72VaLN1p",
  "key8": "5wfWCnwtX4hoUjVtZVTeG51Uw4CNKxX1aRuGQqZXPUBa5bKw5H5kjktVh3YBTDL9aNZ5Q447S5EsdDPqKMi6D1jx",
  "key9": "48i1niKWYDbwi6gdjmaaEjhq9SLPtsyjookyeWu9M6msamM2NHeCNRNdEoxbEhz3yr9JcmVF32WfVJLYp5jVdA28",
  "key10": "5H8Wa2q2pFgzJUch1PkA2jtU4rUZ2AVkVxb1hEiFp9PUhHbJ2atUCDzsimiSoavtJY1UwGqhgqmYnNf62ATfE4cU",
  "key11": "4EfiUzhh2wVHXP3fxkmw2htrvRJ2M5DpMjZn4C52M7XtWoyVGNQVzbYXsziPDxbQzgrtH7LjC4PGp91avXQzwx7M",
  "key12": "PMHARCLiTVgXxswSXQW212Zga2YWD6zwXHwAQ875mDHZueX4Z1HCfNnynpCv5U8ddWM62TvaHgGb8EUJ5KFTVmo",
  "key13": "4PkagcK4wVgH9SJWD2fdWVmNsKUwUxhyS3w4gm5n5mphEt2bHCntrpjnicckctRWXViBPZQEKiHxKYXwnFcBhrQh",
  "key14": "3LAScHvMtkXo7tskLjvKx9RfLdsEGveBoQMau6z3dnmqkZ16QRd2m6Fjzzse61qd6ngh5DiU6HvNy5NUw6Wjs1CY",
  "key15": "3sDKvSg4dmRxECKmNXif8WaVmnmGwDjTC4EThQwTEf8XhF8Y5h3qjm1ZjDhvrHUNocRp2xeHrFyvoU9apfwpY5jQ",
  "key16": "2UwknEKnxhxRsR2awoqi7qmiyg18xSvmKLX7CQyQqMhgzCWDSkpMTG7Kk3b4HxknVsWdgBcSFYL19LwEpob6UJ8q",
  "key17": "5GQMabtxxgkfhsTLPzNgNHtptWajXsLB1ubrymrkUbfGmXFtLmaYHsNSEnib7Ww8cxa5XEnmrP3dR2cbvZN1tzbJ",
  "key18": "3v9TKt1MZQdN82coBTFJF5Ncrp9g8kEs9XTazZR26Y4KA6kDkBQgYg1PARpT9SHjM7Fn3zS1ygJxXjMBsqpnFdwv",
  "key19": "uZ9FutbLnrQ3nHf82Kuh8HYTZxnmWkwGd9cUyGUyVTxkGgT9VPLiP6GpYAhZRGHte3Lyd1AZ5GmM4erd31tr6c2",
  "key20": "5Zo6DPHUWk2wrkdxZdmEEKYTzJytq24urZqFZHd4nVuey7qEmGhmdJGFcpjWhCBPs5DkPR2T4AnPhUmvqi2U1QxM",
  "key21": "5b4mJEgWEgsEcuGuRqYV7w4jH3PrZV93RifvkunYhiSxbnE4GdjBq2xZ78K7ksBWhbeQjY2VGqpUP7Vjqm8uP8Nh",
  "key22": "29QeLQgxtUSQzrMB2WkccxF5ZxwzAqqtk1nwXZTjeTF8dMT5VpnEp4RGLCt5BHenkYeuDXT1eowF3Zn4eZdWZ4rW",
  "key23": "282augZsVE1tLWxMM2u3UN8XJi7GUk3QfLV4qHPs1AgwAR32GejWKbgqTj8F5gxAhc3RRCLSbUkyndXT6jpokpXm",
  "key24": "5PBCQ9gW53jS9ckymvu8NmmYtXwJBeXmeTi8nqWaJioo5xzDZKxt6kWqU4JhavRTK8mFaCWLtsiddYZ5oZVBTgvd",
  "key25": "5hy1cWEMqYSbfhECkKptQpvVj6QrAevp2wacZXzjdCdCmmmnqjdK2ZZ3Kj8Aczarz9AMrkNyufs1RzAdMV6mWeD2",
  "key26": "23hzokUqo2JqrY8Y8AMVdXKGnh7w9Kzb8uBTtQ7MApwRfBDVaASprvkdTZJ7E9ZicSb3LhuYn5jbeZc75wYTngUk",
  "key27": "5b9cKzxwWTgbNcEwiXqYqTEz4MQF8X6PQejYM4QNNwrmjbDQ5BVp1VrYM8vEdiysDMMgD9wQPErsRKnx7X4zBAGp",
  "key28": "4B6DpTQ3F1GRkt7T5eYktrwKUdvm28SDpeLDB29YibrtFhy72QQSrhagfvWPyCiyWWAgQXQBPt8PM5madMwwD7Vn",
  "key29": "pY6GP2qW9mPCGtiXhzCavPmNcFgN2xjERHb6hewvMFzeBHg2zMBKPS378dPoGy1XxcPzVWJPGnXnfYnPJUZNsiJ",
  "key30": "4dpUvMH8Y8T3C6xeAKjFLKGtzHWkQbeBTx6r2FUWptRE3pMFBSzcfcqp4LQmB4qhjp9gHYoozJjEzseHZsMKFXCg",
  "key31": "2Q8EqZVYfmEwfkEHfa4ci3RBxKJrZCsqmVzL5PTBDUWbnrJVn9gWnyB5gCeNLHSsvFSJAxzShB7P7L7sqAKrTGR1",
  "key32": "5hx7qiQ2fzDPZqyJGmMU7XHrXzDKqgPJjS4d6E4f8nnHyd2WbCQuUEwWAci2D7ytjroYMMePtcTtzGc1G4Co58k",
  "key33": "jbXjs3utZmjPfbqkGaDAnvdph65hfPACVy1xy5XeuqzVe4SVs9XU11TsAzqAEJD9aiwRsZVppyVqruEMNWGNBH1",
  "key34": "5uisBhdBYaS6ZZWQEDTUJ2CRtH5mQuMq9nuqc4yxDmDExUH7gUtsy179My39JRpGR9HevZSb4rGHaK2B9ic4k1MB",
  "key35": "26gefpqGsS7yYwbosWCtJpMyVcDacRrM3W5vpvPwnh94p5LucUevVRyFbUyeDXwhLSXhWRrYs7wq2nur5iPYA4iq",
  "key36": "4de6EoUYVfNsA7iJzfY4kRRjSFjK6xv4f8Bv3fTswMLKz341g2KyixLXbuhYVr87toAHeFoRjNwWvNQzhTT2HAVY",
  "key37": "2MQMeyAGbjSy3bKY6FVGM9MUjgsPKAequ4t7HUAeVexKC8a53cKY3tgzLg1R9PGDwBVEi55vecBb3pNfq3ZPdogg",
  "key38": "PionbQjGkoUxhsfYSDqnPccyhJZqmcNQFSTKMo6547P2hvDvWbNUNYvPsS741SefziqwxCM39NwpupzEK8VKsjB",
  "key39": "5Li9Fpn1tauzS1Dq5ZUyAQYaC2Ygr1uyxyVj6H8zeNRzTFRu2jzveB1rxS3dqHpfaGFufytq4rxvgi9q6F5oJCyz",
  "key40": "25r7zBWq62qRFHTAYdcLPvhXfqU2t5BAcLgX1eYu1F3mc9DjojCVpLXJyvMt3MSrrfngzk84BsGZZG1kP7Txg5vP",
  "key41": "4TV2KM2Luh3eTYkLF3rtE8jDBgGgnskTnByANWdyGqxn1yZvfAp1obammpWVyB5i3jLGt8YrzgWyKXGJLUNaLJUf",
  "key42": "4C18Pf1REJg6GaHZvtxu9CKA9yD7b79yV2uG2Fx39dPxKVt3bmyC2uMUurap8zhdU2BqpUs9ek6Mggq4vsMt7cio",
  "key43": "4Lgn3GSpLAFNzCuPXDd6L1x2vBmqipiCS7G44kBsBVN15Co3suTwzKhtQ1fjCYWQKH5J7uyMc18s78SKmPFNkjoN",
  "key44": "5uD529uX62EnNTS3gFubVvUDetaveZaYmwMP3Jq7vYcC9Hcct3wQ8N1g4ZDDHbH1wV59t1EVPgRssmN34JRQvK4U",
  "key45": "4xZG8Cm3k9E8t21VgtsqovHhzgwSjg8tFF3gA8Vj3425ddBMYjCh8WxvPkG3KMw32pSg9jjMpfL73N8qAdE33AwW",
  "key46": "5ZKdYZR3KJ8kA4iAed8MTFof1H9nPjNiGD67Jk3mx9EwAehCqYAvGwyjfqWYfizr3zZRThWigUdZXYDRU2MMYopZ",
  "key47": "2XvQvA9SWCz2NZMUp9SmTDyZdXAqRedcZtzKLJWE14y2jYYxFedhLS1s2jf5E8trUsNzjHBTXAj5EszYbN9tYKvZ",
  "key48": "icQZ4mvH4SekcYWvuL5GfTo63pDZg9e1SWu4f9Vnuw4Kd31WUhj2gQ8vqNT6bmvmuQphD4XLpXGPJ36LtLcPJSy",
  "key49": "5f7CCuZ35eyK8oxvdHVFNjsH1B5oRZTkWKSUm8kyFkDmKBz9z8XZZJU1pUpo716rNXGJyprLF8BPuCnRWyAYDC3Q"
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
