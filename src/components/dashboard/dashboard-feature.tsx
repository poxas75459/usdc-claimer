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
    "4XHBZRZp3FmUSJn5TpqEaMZWB7cqKkatWvLHbDXvmeGH66xZafT43Excw6GU3TquonGGkKibGz1MUeK48pP1e5q3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VHzMLsMvJnd4imiSq2oaUZUD8DbjyKw8LvUCv9q3WnSYVLsScTtmMHggvSuPnMMTyUJSvKKaSSMDm29gDo33x47",
  "key1": "26AsLBd9sU2UjDq3Pwq8X2k6QAuJMo14ELn1DjJzuqq8xCZeyRYkeYkawdh6Aeb5pbUsRA8D9GPtRCMZQr4i2CMA",
  "key2": "2riy3tLyT5PpbcQBcFnk6xYgWfVFW2z8cycGZFDQ36W1MoShy7kA5amKCepUXst4inxrXSrRPVpXMXLSj3cvkgws",
  "key3": "5KU9M5rf3UF6ACSEdAivNVP6xqeFJdJeg6kHFR8oJY7xMPqP8W58TGoakxpPRgdr5b3nyufSRVftDU9t5EfepE8b",
  "key4": "4LLErpaNeceyet6iogqhyQ1gsuZGTqLx28vqNLoAgDuTG4UuXMqSzGdi8MqAHg712bnjeY1UeaqJ3ZLxmnWaVp3N",
  "key5": "uL3KcrbeS8M3ncZNFUD9YgZwpMGm81gjjbh2YGqEdLGx7gs7oAGxfu2XXN3p3cxtDxout1ZZXnDqEKcztMGYfyG",
  "key6": "5QAHpFFmDy9oELNovcLKxX2u2fQCKCSEevh3qZ4wR37b7fMGtNhRPq8TV1eRCxPuxNiipfaHrKTYo3czDVWUHoSt",
  "key7": "44YxBzmWqjHu11VHtL7mM92rG718gN8geB6fvDH2xQm6NmVyt9cVdZad64oYdJEwWE5kH6tr2RZiVdSQD4yW4C3X",
  "key8": "o1VBe1z3mzEXyfiRYwdySujMMZGbJEtfDJf4bfoZ1aRFhoEhjjqJBR6Bf9uQkg1DH14b2fNGURqJXopvprJQ2eh",
  "key9": "37nzQ3FuYif5fn4gv2Y5BxwvBsseD98aL81RwUh98c5hkuoG6zEQxwzXRKXVVA25WCgfcBqnadqBvVFgt3pA5xV2",
  "key10": "M1uPJbfgCLmTwuaJuWZb1eaQX8L44g7r56yLMsJdn1kznCjZG3Wvf9ZWqkXN5g8tBdnmqf6N95kP3q7tjC1jfoi",
  "key11": "59CuXF6XSAXdZBGjoH4mWT2TVoZVUgyMQmfg3ma6raaV3iCy7weLgL5QzP6RdcHSb2Cu9EJz4nNSBdkqYkytyCs3",
  "key12": "4DjJ8xgLpoKcAMVHUTK8gobLvS3pSxyae4mcCTD5YLSQ6mAbeXVKDGb8xCckWSJ2nLsDTgXK8KB5KBBaRcSGMHqt",
  "key13": "42pCeLRpGdxDAZbvTSJXLZZFCPsCWq4vzWPPmhNyWa8orxZN2riHrYRuTiJK9KvpChJ1N8WdqSZkRAd3FqvX1ULU",
  "key14": "4csPEhNAFwAFovencYTWrPemKpbbTfKWtJbZnSy32q8XgUfEaKr9MzWKaXGAsCTzEU5qAfQiUKJukF3ik2PGfNDk",
  "key15": "4gWcEMdhDrwwdjzWqG2TrPJ6Dao9wBTmP2iTuFNcwZSQC9j4YqkYQQRVTc8HSQhiMKcUKGBqytHMZBc4JWDr7t4b",
  "key16": "6475FuLfUuZPE8FMyNDWvJaV75Ge8e25KrdWtWog3Mt5JRVgDJKv1WHDg12neemWZDg7A9AhZjp9QvbKuXhd2hyG",
  "key17": "WKCWEg3dztF915fXhqMFT5eE51RKZkLiBikQGhqRsLtFCjypizeYRVGwjLUqD8mC9SAEn9da59vGpNeF5M9icxt",
  "key18": "4kak15vF8Yvr126E3TodF5HpLtavwWtAhK91cb5YDfguZTtFuhzJCuJA6PnirviNVoLRFLNgs2kJYx5FZH1N19V4",
  "key19": "4zp1arM7jomddDiQrQjScsTYfqgBWmeh2Ke78qz1uzPzWD6BDDsXuSczNRmGwnbfa6oaHUni9T75Kd3LpGKf7cG7",
  "key20": "5oLbAdjauXew18zyThJUUMSxctoGdQLUZEmq9PbT9J1SaQgoWTP1dn8yBgEYaibaTsAK84YYzmz8oUr39u2DnSJj",
  "key21": "2yGCwFQdhH2c5a1upBZ41XmvVmo6U92i51QEb9PvshKcjYMQ99QZoKHvLtpdHyoVr2GX5vEmhYwkwRyN2XAcjT5o",
  "key22": "3Erp9m4DE8PY17TtdMMaGJu4JWh7toREUQDHaqcFhWF5qzkLRyJM1hMmWfXqYT7GAxaf6t9nsHYKSKA4MhMDjDfx",
  "key23": "3fnmfKRQQBdFkusWczGTsKz8DViWFepGjS7BTeXUu4rMYpuxvkxrMbA9tMGrAWFu44wp4vgo7HXFgdAJojSgEgCC",
  "key24": "4aTGpEYndKCNkGW7hPgd1zQz4Bki7XKoKZaKXtoZM3EU9WENVageGyRHDT5hoV8XUWngKHs5Uprs17Rt1jz1VjKW",
  "key25": "2C8XNMGQCr8UtCXQVXRBZoDNxBeoED6yNUGzPrASRWVkwAFmHxGCG8voWb9toLZZLXnvoZz5gLKu7PJSp1ZfAAWc",
  "key26": "3dD6MjVqQEnAkxfdDMCgsEuDzq64akTmQz5yDusktS3SMVUqo6SJjUMDzT4yRRvqw2cv2HS7Esh6wz1vSo51k2dc",
  "key27": "3m32D3t7HkVXtWyM23AYMR88C8qL81Lit7NBStdnLLR1sdPBBbedMkfPZV1W129R8rtKEwjYvpAMdCwz4tfQKmw2",
  "key28": "121TNg9MvbhXN6bkSh14bVEr2PLCcRUj8sKbjEetQCKxrCEZCpYzxiWnkQ4R52xjuWjRz2ctA8wUHkRuxtSpX46E",
  "key29": "4arem8w68jEU8C9SgUgv9ozx66tmxvuoMcTRMyhvhQKKgHe4LWh8RdRxomGQoxpZiNTopvBw4HrAazFMPXYget3y",
  "key30": "2uWnxBbSebvxjsky6Pgm7yKfUEPq9FtqLQNjozGb8TvdnBGKJZLTStvRUXGvdueXwQVQsvJWwRgSLH2YXyxAVMDL",
  "key31": "62ijDfZb45zUGwUtG7zzjKUs6Lk34MnjcJGBwvYNNnRgRmHHxDKtpyTwyvFpyfKY5277z2tURA4zzjXpnPUbMd3g",
  "key32": "4tsQn7oRp5Thfih4iBXJjwFWgvChUN6ZbULa85dRzNe2rU9zoq9BVHFp5ivEyU162FYck1Gs9zGoDV76Yepb7eJm",
  "key33": "5KQPzU4V314tBK6bi5LB4sWBwNgT1Q1ACeNW5u45dykgEJw4NPf1cryaaAkvatV1hhHWKjbMs1t52MsQShjZGyPu",
  "key34": "5D8Vgu4QYaUhYXfpCUnX5P4TSxDppDXhTEZi88o2TJAoVsTfeviCyuLWAG49sTdgZEr33p3iaz5FMTuvxXR6BaPw",
  "key35": "49mw9sjXaeArFnjkpP8dKueJE2vbhvGL8xxnyck8GcAboQobD67gQHykGbKNTVimGbUtkB2RX4t94jFYwGU99iRs",
  "key36": "26AyYAXctLMjDrHSWfuQGr2NFawMHxWCZhWAHLvGaRrsDcwcAJGNgDs2AAWNRTvJ6mNVh9DMdefnUzR1R6Yrmw1n",
  "key37": "4jnSMoCrSfZx7U2uUGXdJX9FELdFC5uphLNy9oosBP2Ks2W6u6dKjyg6c39qsBV1GBZqTHHv5J1th5EescD3VTTr",
  "key38": "5nqdQKSqX1gQZ7LK4nnNYEgqghjGPoLGA2kck2yhbFuwrsUodg6rXb13GeP8He3RGqdhiHqTVAxHzZ6fyoyQqC9v",
  "key39": "5hooGA9MY38DJmqsDDSAhVL5GdNBQovbDPETwwF9LXbEFFmLTEs9EkYKReYEYS428A8qFkJyp58Xo7rKUEvKiinG",
  "key40": "61KiXPfFBXFQuqAejB19giYEw3MCZxnN4rvRXd2waqANgnsBqzkonbZtX73yuasdTnLE5YwmTJbqp4XwWBLMEsrD",
  "key41": "4GX75aheTzRMQMDCkEWfz7YKCNTxbAFtSirXLg1EzsFhcQWDKeS2y2Y62BGcAPj7RddkvpfhwFhguegwG984W4w3",
  "key42": "LvWYf5H5p8nuCdMHb2KjKrq1DPgk7xg3DtFYBYioFdaDDYcK3TUFLrDe1h9G6XiwPcuzWkQeZ4dnVda91wFMxBr",
  "key43": "4tq9Xo1PWHpaz4npLQpZH8zKvCy5zW4YZQ17Vze4amaEmrtChNo5rVQT61UTw3ZvA3LQKvxn5iY1BCiwzcNHk4C2",
  "key44": "39Gh7VxirNXUZ6yQcgNw2oCRAqgeaoZrENkWSCxeYCsfDxAokcR4sCM9Zs3om8t5KTRobwRXjH5erjQcjutgiefM",
  "key45": "1SmPGJUonCWevZNQLaf9mcR41983v576fWPNxCFHepxTtah2S5g5FZydQ11yCAxB1FpcHreWgvhCV1Ve61tBwTN",
  "key46": "2FibyeDtMhTyydrSqT6jz5LsYxgcGBs6MEua55oPWo3MdzxUJhVNhamgru6kTBKAUvjQnfSVedpLMxGctNhBcqvD",
  "key47": "3MjRZbba815EaGy5KaPJCFeDTnHDaCPA8uCU5H5NM7fPtHht42YKjRsCA73RcwMmBUjx6E33Aq3BQLNUxXMGfymu",
  "key48": "4BMThTMhGactJv8keTuUWbQL56WwNnaw6rbzrE8BmYK5oQurVCsS4M9amECBVwkgVeR2TNLtLkghQmQaL9QrY5qB"
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
