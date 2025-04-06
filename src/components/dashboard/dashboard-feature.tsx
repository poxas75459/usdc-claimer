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
    "2rG8GYHED5wM4bhweCExyPcFXBMT3GRJ78BUMtQQgNcdgq8WUK18cxez6ZTxEwBotSD7eR5kiPZTswiYizCLoT2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57EHhecaaWVuGEfKqoxPoqVoKvYM83xhqkEmjT6draR3wyFpg1ks99aQiB1JWCRVnP6cb4AexJwKSTTVVi14sR6z",
  "key1": "4zyjSkT9pNFnuuVcDo8hzSfXvtynxAiseJQwzgcwdicwU4x6zdCb9ebTPZYDs9nHotuyfdLuQRo85U47hArB7XVT",
  "key2": "2Wm9ufBPGncUhNEnH5MpkJgPUFAcDCv6wzYgHUsnn6k4QLe9KT3qd1NTXr1goofjTtayGqJqr4VfpZ6zNPHmHVuF",
  "key3": "4ethwHs5nf35uKb2y7UGEtPaobCWxpm6Jezsarjhn1xyVkWxwCrwAoQvm4wrKDbJ5sT1W8beY7i58C9ooeiiMbXM",
  "key4": "33E3PLV5pThdTz3eUsMC7VWGNMtTjjPdZ2fVojGsVWZGKu42mJQEyoRAFcgf3Dm3ejwazks2p7BUkeqH3faTyZpn",
  "key5": "4SV8DnAQXPZyt4xwUCjMmL3DRFB2DquBrjjdbGCp9qY87y5HL7uxC3RgWNMhsKM4nFpA3TeFpz9mxGy7vudZXHvW",
  "key6": "2szob6b8UZwSuNJvQ2tkWtoMDtARehYV9aMaDQNEMLHhdEyEGicBB34zJemJqGDXGiEGXG5LqCn2Ta8v37GahQu6",
  "key7": "2BShHJCmqKjAzxnaYu944mDbb6XtJQQPBjHo4oJQV9NbBj9ABW9nfocvJoAb6ixBuNQQTGj6AixSVBC2m9tBAUj5",
  "key8": "2m8YuTKFm4HvG97YuJ2SaM59UqcPj2rxBwYn6jauf67EHg7cyWxnQQU5bvbt85F8JdVDmSZbjnB1BBmt6fRFR18u",
  "key9": "5sZvj8at9C1wNCY47oqBzhn2dBCwH1GhqVs4nivth1XNdC5xXzGKDNW1s5YKNodSBeCD757rMJZQ4iZmaJNujqeC",
  "key10": "67UiWuP8z8ZR8RYGX3hYgbzNxMmZXZhCVePSiakV1irehuB5Jz1tcBW9ihJkwg1fauJd8vy4avCJcmfYW9h9jtoL",
  "key11": "24tNUPkw4wa9ufSDY5aYB9TWy8J5uJmUp91YN7zJ9MtxJff7pWk8dspuWdMzdqe3QoyALEEbNhEYKGJXHUhVF4uk",
  "key12": "55UhxdC3fKRkmUb2nRDw9VLGsUY5RFxb6UyaWhEHJePnFQd6GVp7Ja82tfiLQVTmGfCD1iVArpiq11rMsRMA52C7",
  "key13": "4qUb3YfyuEqo2aobNRTJMK362Rjwjfep1SAicqZAKmjTWL7WdaTcR6F6Uqdt3z5jCuQTxAyUBdDjZcTUNowWhcum",
  "key14": "34aHShvbZxU4jwQGx9D3QhHQiNs1tv82BYr35ymprXPmZKRTHWwz3zTaihnFtvwKhTFvCPTLkDCncP3fAYePddqE",
  "key15": "4dz5mAfttqj5S68AkQieDg4sRKQ69t75SZz7YzVxjLYsqgqeqLdUCuXw7vzphYs89DrJdi9ReQaDbNHHxbLN7QcR",
  "key16": "63pGkzJVPX2qwbZLdFXhQDzfCkpAQR1QKDkErY4LrZCYLfHiX3JvsjPDb5p7ghXsqZm2HrM946nSuWUvoHCaiQy2",
  "key17": "2krprQQqBMCi9h5YfetTVdS9ZHLKnhnYeZxoxChwmnoVUvMW426NbnvWVqRSELJumhbR7GUAFRqfXrRwXJmcziqw",
  "key18": "2qyoQKnW88muJuz4nTNikDMNL4uFNiTFXkg2gaeyr7b1tcTCvu33rW8dQAi6pX7NJibrrp6TzmKhmrRRMjEE3uNF",
  "key19": "4wVsKmdeHZVesw8rfqkFQyMsR265iiVsptvDKfnqyF6N9XVLpeR3DSqw5pebkXseWhte75FzDHtJAa5VLV8H2VJC",
  "key20": "FJqmoV1pWeW9gX2JdKHLmQBr5wfbqdptKfanmvwRQUw8i8viE17TMose5pw9fYk2EH1Fzrq59jB4k8i8wrRizNv",
  "key21": "64ugRNrFapm5W2GBPqinvFhH9m3y6Dh1uJEey1Buiv7MoUU3V1ABG4w5bGBx3C8EvjVyTzjjnYrFyNdprxwYBS2Y",
  "key22": "3mo3oJzi22YpAuYwaFdApcjs3oi1Eyd3wmAaFoXSBqp7grfZeRCTEYbsdaH8JgWRvoimXQ1utXHBZZJ1bfAZpfc1",
  "key23": "2trmHLECob42CTemei3aXDsin1rAEPa6kKsjZjLrMpTZKHyYFfwz7ZEd3nxx9jpmedxSWHs9K3gKsvnq2gUzCs8K",
  "key24": "2v3oH7r71TWJmxB8Fof6ie3qRfwi6tVc2KCDjMAoaAe12oKSMhj5krx34aLZ7Q8FGuUaVvjDaZpQCQSPuf6YFobY",
  "key25": "4hfvkLZRWcQ61XLoGvqe5Sb9m5HbK4CdymmqrLW7AyFHRzheQpEHuLVq5CrWMgbTNit7S2buvPSppqVBVSXTvvGf",
  "key26": "5zoWpNYz823mF49y85FvbkPB4rz9miesoG28dP2BCAJBnPez9AVHa8nnum333edoVqRfzuHPd1iFFKfQVvio7Yjs",
  "key27": "47N4a53w6nYkmYXMDvr7GohPWcEL3sMPdDfrovnrcR1HZy9LKK5zs5qnTKzSTGh7SeY7Dh5azWst9afGCHgGVKYh",
  "key28": "4xfATmDMf8CdwiMt2b5bRqc7U2QNMXKUdsx7obYnwguvB1BakC8ppJfaLYG7e8uZg7vaHNoZm3txS3Wf1W1CnTeb",
  "key29": "2o5HT6Th2HuncWGv8KWJG693PdZKPMopvV9MCZTQpPZREpHvccu8LkMSwF1YB9wXoTeHG49fxtxLpAw6X3YzCLxr",
  "key30": "3m96Hfhjv9sWy6EHgghPU1V8aaJAZg4n8143fTsPyL1ARUpRGM2ANAXEYNCeEDJKd5m2WtM5YKLKz9sduwQ8iAiy",
  "key31": "4Wu4HPrcjCCxUv4PWDXXyR7AsRXZV8jb2mT1bKipWbGEwoV1Kggy6dJrV3vWruzp5fdrDbGyMTB7uzhkoWJ1DEYB",
  "key32": "2RNtiovzpWQGqcxLYTqGXZuWrcyAszDREWbPcxUNSMnLheyHz3Fer9qYsxa7mtiWpvc4yaaHtzgU1WsC75zZmPip",
  "key33": "NrppNc5R5baWLVv7wysDBvskW1Ugh33w6tekGmsgvNPrWx3sVVATcCszfN7ZJrADhNGCjWsXWaGsuS52oMgAaYd",
  "key34": "55vTdvawYqBiSEHtFmAaPnUxZudoG9yCjMubb9ErsBBbZuAncK1qifsojVWwFDBaqqSvzVHDfBxvFs1Qr5ske182",
  "key35": "2TJ38uBtTitfNSfzjWcYHJkPZrBXNsVSmMWR2Ax4frhmcx7wwTxG6pVT8hd6SW43dBxnt2MncZyaaqsZqnmNmoyP",
  "key36": "TVRPnHr2eNwsAv6owvGt3Gh4HLYCoySKWL8V2HEZX4Gv8eDURfxukD6m8fGq7YyHQiwH75DrYgQw4RtqcEtQvyZ",
  "key37": "4TpBCqXCopHjwoBfBGJ9h83CmyKovrqSTFTvYrBgNG9GPRTPKvXss8BscAhVmKALQHAmXFF8AVAaofe1s4WYkMfu",
  "key38": "2opu86WdgcThPnYFNJUocLsEPnNjb5eQYYKTyeL6i4tNbUzcNPPLEYPuNhGr4oRksEKp3PKN8QPTY9YZRkSiGuSf"
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
