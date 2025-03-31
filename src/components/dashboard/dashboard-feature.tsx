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
    "5zjAVZ1beLStKmLGBwxvoz2AWESv5zrH8LDB8vCwTcG9KmU2VbrRZo37mW7FGfapGskDYEDLR1N7b13sfXQmQrju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C7AMPVwXKgadhoEUmeLN6QsPEbFF3ALKGKLg87Rq2cYWkZUy8nsbqsCN3AgmZ6dR41chDDgERVaVTEnQqJLhVUt",
  "key1": "4W5u8KHAy8tFaC74PYSh4zCBkSFBuxHVuXsWxhQUsq4PMM8BJASU2PRcF35jes4UoXS7PMYsr85H1SQZjzvJuTCB",
  "key2": "4HiKsNG6pVznuF4zpKXfiLRqDLszX4gmTQXfq4ZbjD34AwRfHN8RYSUTeLhff2wEF23m1kDHt4LaYhvorsLGDt7k",
  "key3": "2NvzGFaVGT5iJ7GSWT3LsY2ix4optPpjcw8Pufc5dzupxJUNCiBqJ52cyTfYz8wfyGUPDdFv8aFf6QFeHiqDQNV8",
  "key4": "4UGvEZ8wEnre3J3Dm6Y5XjeTVRn4iJVCGPEqLgcRL6DJ8c4FxGQbTW1kQsxXUcVxCL4ri5uQvnMdxWms2L4sEGrE",
  "key5": "2NZ8UUDey43BRxKb5zhHhb2LvD5qhUfTykf4BYpMA6wQqnnRjBtn4u2uBSM365HfZDFueS7iT5j7rvHvrthNdk7S",
  "key6": "4RVipho5jPoQJZDVRNNp6VXVQH6wKBRv591JjWxUXBBK47USdjmcsc31EyHCgKt4WF1RWHBA86ZZ44MMBaUQMMtk",
  "key7": "Vqr7dpFdo2haseRucVfGZCVtFLuuzKVmsYvDNvZxrPuWRUDbER9yvLvakQUqtB9M28dT4m92QTEL6w46Doho3an",
  "key8": "3FCWZ3HghvskTwygUo3qVNxsnUCEw9r5K54Y5nWQAGNJHxW36fZELEwEoM4E5GJ2ikBPzaCzdgBJhKZfetmqCvty",
  "key9": "2SgLjWGs1PiPE5fcpz4tvTJoemd7JxSr7YKVjCSHA2APiXAoJtm9uiKJn7FSFieWbB329diRf2KJ8s1793aV8Yyr",
  "key10": "5toEu4nCWeQW4aavYnqkKgJsixn7hTSwYhFQqZtpdzyqzagXPsbWhSfC3rPiTJVtUNnaS2ZXKTeQ3aVHYwCe2awR",
  "key11": "2gZvPGxPP2o8774mrD8tJvUSMd8RRoSWx7Fn53NHJ58hciXmTgrsvRdYxTSJRA2dKjLCZxG9tuE1Es9EeWCBNqhY",
  "key12": "5veeLS4zTe8EznrqVn5j2UU26RJmuEiA3dXB1iCRCG43ZCGVfDhEiHwp85y5uqqjLAw7xDoWdXShtTWRuSQqRfZ6",
  "key13": "38bAmkXijf8pQGpTnTHmyYpNZAZRLVuikrpuP48cP58BfaVD2Cr53wwCV5xHqgoLF2h6qMFW9sGn6LoYMkVr4xhJ",
  "key14": "5pip5HqyKhAxmd5SanvTV7rmjja6pB57z1fPYbEMuuyZzTBmeeLBQzfL4R3rHwKEC2MxTkURrMyPm1nzE1SNKf6g",
  "key15": "bmQA7JsZyk26hp51kU5rJCToBFMoZ8PYd8AWdjBWotLK3N4WRSWjkL5UkTWa8gbsj1vj3mGgSYytVnp91WJZc1s",
  "key16": "667WVzKBoeTu13cy5MJvfkW5ceV3wWYZj9VZApCAcXA9Gi4MLQYskYCtxfXvEsCD3DT3KjigNVq1JCGhGX3GJ5AG",
  "key17": "DDQcYdpyXs1DD66o8BWoNtuBPaDZEcvzkFpVnv4w4ssYhPv7chJGzKQvZogi1XreNvR1QJRRUhkXVK45xE1AqHZ",
  "key18": "2q4P4miWKQ4LCLrmKEKReFoVrtb3rDxxAiXZwjJe5PgVFTJfAQT8ZQ5UCdkAJXmvgK45MgbqSzxvBCy8ikf9DrFs",
  "key19": "8DeT281hjpNMnsVWTZx2g87z9S2V8JnJv9XspqZGCcYDH9oB9nsyqRsikfDea246wCGP4jw97gUcETJTEVxGgyK",
  "key20": "uJa9UK9x23U5WhAsRkbnbFmged1jKy4MpvsBYTz6SUaiRgAoe3QsEBDs4wjo2s2vcd9YvxjEcpcDRPyPV7ke1sC",
  "key21": "3NLEDnftCzpYqn9TzPA9q7cjeBEMCbfoAouQuMzvNkkmovTfngi4xVAyPfFDXnpV8RyXbzgaB589serhSLzWFChX",
  "key22": "ZSuCy2kfTB2X8291mXxDWQ96Quss7G7eBgyLoj4UTpaXrcx12ubP81aSph48MVRDBovAwSjMdxq1eeGarC4KxRb",
  "key23": "58VJ7G7we5AeiyY6mBt7Xz2vvRx9Zr2irWrfkza6iVyT53HemyEVSifperPs39YPUVjtjqYFVcdmHnLv5Zj8KC2N",
  "key24": "5Q5GbdRiHMbhmWwCiumHbwu4Uth1hhkj7hKJjooPYo2i556T1DhJaWVxArtygRp4iJF2g3L8DEH2A2KLNs96sX1G",
  "key25": "4rGmAHWQZyVp6cNQkvHM6ZuX9DmtfAiWBDhdp3UcSePSoRqpd6WAHvWBBRWJi4ajtqfcjkcixRAzQDebVimFLWAd",
  "key26": "2gKdznTBca9rS9qryDoRemEf5RzZq2H2Bhm2q7DJXQEZrTqRL2uU9iN4RSQ7L26mxBpnxzJW4eXdzX6SN119g4yF",
  "key27": "5R37gtuXRaBEVawWs3vw5iDuu3LAptvMaqewNcngt9ha6XPKmDSN8FMpXj5JqtkqU8aAycSeu2UmK7BgmQfyyk7g",
  "key28": "2AHGAqUBMWw6wghUtQ8nhtkShufLEpCdK6uW2Ca4qfXanngX7UvdWof5K8zi5icVGfNhh11x5qarGjVsfSZ2EaaF",
  "key29": "5WR1ki7oBhsjaN8mwkCH1qqrDarKBJMp82FbZKdMbKJFTyBtJ5TDAjJNfUtacBCBB51GjBmpbeUuMqh4be3GQNeC",
  "key30": "5zTXgQewGZb6n5zWdDnZAxXbp8FSNNjfoYt2rRNRsP8bvyYJKH4vkVTqZgyWgE3LaQcTsnVcC7bokLZLhGVGNmFy",
  "key31": "moeMir1UU6Rug82ToNHJZgYduCYXSqSttuMen2hXvxKzN5np6y5Tq8dSb8cMzPMdTVMaA9SAmAgYkqm8DhhAyoK",
  "key32": "42eBsnaDQWBx1aisXz22enYL85btW2bf7fmRiGBXgoFBxeCMhMpuTX4eAtnW7JN3Ej1LP4wCAgCZopMEfdMWugMp",
  "key33": "kzNJmdY9dupDsdJJeh6TstethU5Mcp98pZ6FvRBizUeSmmPJXss4DBnB6bMAi8iZREHqSCFATg1jLE1spwhXku2",
  "key34": "4PaBTrUyoxAata62xRa5ZEeUbKJnTwAKBp5MnK1cXj7Z1hqfUbeJgorAa3r7ZJHN4KZr6ZHj9Td7PEA6WrYMKPSj",
  "key35": "5Fg7x7GuKp4V6GWW9z8kQxPQEMm3kJvJiZxzRyP7AhyiSzLZxczaNxD8GShJyfZr3m4NmzZZiJnakJKLgL64ZYpz",
  "key36": "585Wjk8hkt1csZYqHkEVSm34TnWnbUgDmfJcqkgL5i5w6hsq26uEFJha1WySJQsdjT9umvrNB6THKA3bPQLYAqZN",
  "key37": "5mZDfym53rCZLEzK9DkuFyuctweYkifeGrk1jJdNmWtWhFPpaZduZo229EKEeMZHseqKFoQruH3EMCbigAQo2x2N",
  "key38": "2cmRwupXamaeZYSVPDW7YEB8aVQc2yfD3sA8hKBTFPzWtJeCdZNCaFL93EgYaYQ6TTYku86fPhBfPSdZq8FtnNCg",
  "key39": "4faYBETEFKXDaeTzNNgLZczkmZHNmeK5E5qnsjz45gCTvV4urApZQyqPZwwcdfFvBcWjaHnX5URpLUeU5ambwFDB",
  "key40": "3rqjpDcEuohyREC4kzdcEAKjHz4LKBWQ8yQ1myydmF6vFjsQUtudi3kafz4EbuaNrvTAdQf5U8Jo1NcHdbLbzCcU",
  "key41": "4x7iLthwpkC4og8pt8ujMKg2TQSVXxrm57P1gx8dsBga2zLTvw4GByUddTxTDoWjdJsFGeCEnfDWs6vj7c3L74CW",
  "key42": "3PWmWWrjxz2HLNxUCzEjKHVE11mhRMFhGcW8C8p5Ym8wNJ7vyTv2VtURZ5EwAfpAUKbnqsMN7RjTquz5Sm37DC9C",
  "key43": "5dMVi6FYCtZe6P4f7nzJ6NzYJLhnuMSFJPYdHjhZj41XVpJWEVx94c76ckyHs7Fyxr5v8SZHRZRHCsT6kmJ8Am1e",
  "key44": "4GD2J628yiAFC8D42b3BBiRqS8m97jwkBqTG5AS3iYVwaEUot1DtiXjZUahwbgTBnSLt1NvdZ4VnitpbDijbFMFn",
  "key45": "4cVv23SsF8jn9jfGSXDTr3E2hN2FLeKitFy7PpoReakhsvoMxVhhRY5nGMbng2SAJwg7qpNBUgjXT3AcxqBoTM6W"
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
