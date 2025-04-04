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
    "XMZvKPunE6ZDvw5kGF9uxUjiKkdB2UwVh5tTcebB6sU5DN4q4F6BqQsz1WiMN7fHuB5a71d44V9civnZT9EsguP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mt1bTd3JZv1TPxknBJMjESWqKMbhDrX1YtLERfcoLzJUy2YxDKFTQHHcHh1XdjLX5XoyyFUAeWeBNvXvSprPqB",
  "key1": "4TzXr99PXDDZvPUfXJeoifu5UsdaeVDNTbRKBWmZAif9SKMCavnqFwvk6vKbWLVuLTAEDz8HPLXeYeysQUgUY8Ra",
  "key2": "2vuGrUyRPWzg3u2z72SCsV1i6o4QYTMFSCx5reAQJGNJuk9T7ZeQ8B8XNAt38oQ3FHnwA2FCMUAuHUSNQCg6vAeB",
  "key3": "5MfKwW9JH8RcxEPQ382Uco86suTd4TMysBabPFDBD5MLp37ca42U51uevDqdTDr62jArvTKGweweMUjWf7gidcs8",
  "key4": "4ctjWiYnYWGKKxY1FmSV2xcRxDGdi5hSxJ7ta65MQdtyYstMUUJ54dYJP3eV3FBMMpvqucuPoQWRqH4vWZKkyVLY",
  "key5": "4cr4tzNMiKDCTJ4ZtMMMRgxqkCmjR8CrpiLoW2zsEuq849wkPb7i79naGkqSz1rT5Vi7mMBu8CLEyLviz2EUcKM2",
  "key6": "3axcLWRFcypTD3LFKahLL535e2raXBSitcLE9n6Cb5U6qeB2HFri3rWdhDTSTfkK48r3BPbiCv1sH9wtRtfjM67B",
  "key7": "2xRjC9wZszhCvrDFnUDByzpHLpN97Z2mQQLK5N4aSuGHRrJmwRbGRXFgnSMijEU1ZDZUn9yQmkcxFzWfFCJC69x5",
  "key8": "aGfbZekb8X2hVx8eAtgeGWuAx4BeNfJQdRDUyUpASbRFvEnbvaMeaQsfe2k9c6XCkBgwmwpypV4Z12CevSyP2GD",
  "key9": "4dC8kvoYFKpCLveHjeK94tXhLRxY1KnrfKsF5whyBBDEu1qKr9KQauD3BzauWuYvqSAPL8qsMQprxbsvCrU2a2bD",
  "key10": "254p86e6h2EDr4f2UCkEuCdqASrcw7YxJstcCsjwNaZXivNzvZ3sdS4hdpkjkHtWyxF1vrFcNYwaKJC92H7VhrDK",
  "key11": "4MnKEJhnRzG1g3LYL1bbvLsmTzjtDhhmNb3VyKLDeeTUrjHc7HCLt9wQTHNnkkCi4cFkqW1DakPeq8roTxfa5iJp",
  "key12": "4z7PciLEmcKQ8krEksumzdsks1Y4vbWzDaGJFvBRTKz2VBoq9hvbLM3meNtK8RVoFmFkZsh7LNLDm6dBxmfqrmKM",
  "key13": "33uXnhU422uUSALSuYZ6irUdfbdhsM5ZhSCoxcSHdwhKFPyfSPbk2BeRnYCJHmjkrcLzzDyTWZ35cZzGgHx8s959",
  "key14": "3u3uU4kKa923k3gGPtmfVQgvB3ibwUvLmGgTdK5Q6HUoQfztLpGA8z9jv4ChwJXaDnaJcgmABJzim14JGS4WAn69",
  "key15": "3MkSAM674jzTpLGeXZkDUTLqDqcP6kgi3azhjEak99pWLtNouQ4cLz7aCbRWJDbFPrBXeyweJkXwaCXeGg2B8V3K",
  "key16": "T2M87XcbZfUxHt5vtG9MArvv2dnD2TguBL1R8S9JZdGGX3zGkLoEQXDTKVjYxuZK7Tb69X7mXvwKu1NyKtvfQy3",
  "key17": "WdTkL8BXcmDZ7tteXmb2UEjgsPE11hXnWeBeWtcb5QV6J18umdLi7CNvy8tbQwadaRAmY7EfueXpiCNZ2bwuyQu",
  "key18": "fiZ885kq9pGmdfkfgheim6hsxoQXsJDVgwakNuW4GFedyo5Wh39BiZcKupGsWv5gvhDZ9axEFSpm19cFwaNgxcX",
  "key19": "UXc4N5yndw7dpzsdcGL8Essx7otuMyXBia9PvMVVbe1EFtwtmZEGy6qZ9YSJZxMnc6eUPLMe5BYBNLHLMmvyVeu",
  "key20": "6kiVN3e1G83MHH7bFe7JYs6kxFtqnsRRwUpJGyo81sCiFHfn7wAakd4Ax4vGEJ1kgghHKRSvtkmcZaZGaWquhhP",
  "key21": "39DF7tt6ymdsB5RkeWN5oHx6E5F8KjGXdRTif3YZA5dMz7SDZBgkN4guKG9jsJVWGWFo8cVWTeBLStHJBMxTPZsS",
  "key22": "32DR8ftXcpiBTZJGLBGpbbUZ3gZEziZtWkKjtfdkjpiE3Sbiudrnqo39Mt2U7NqkiRw6FBYheMxUu2sndiXAW7Xo",
  "key23": "Ymd42sJSmtPqXtxSiKfohXvuBbzETiKXJ5GjSgTxeeNwQ2L5iCoMBD8fK6WJr5cFz6kRguDeCVNJt1M3oSucUzS",
  "key24": "28u4dvkXqozdiuwWeU8kePo3RK1jbmTWiVBTVcCAtRRr6J6ksxv9AUJiz75otzr7oBqAb54KNTCMMGsMEewa793d",
  "key25": "YUjiRaRj35FJnVEHeFnMuabcxWM3ymso7ixd1ggjVqMW2FGqFHJvAJDUrR5kCybfJCVNCHXe3jNpW2hZuCahxbx",
  "key26": "67VEqo3r4zEiPy5wJqiAEWh5U4uMXWCNhqgAyhofnbDTr55bGhEfjoVCT1W9hvqfkBzT2cqGwfKVwre7pCBka4if",
  "key27": "61pC71jBCBWf4mSsWHZHhUbpxcG1FgvLo5aHBdz6FLnRuHRsfaL63uNoLajNZiToJeYDF6MLtHpnx5r2iHK5K17h",
  "key28": "53qKT7PW4zPr3t6Uz1sLS1TwSvEERaBhc1XRxW6mpJmxJjdEym3PKoRB4AMJpq3eAaZRWAXuU11fsMjNgVRK5hB3",
  "key29": "5WKi8SVE8qqLHBdZ97HWcJ4vpUHFP9Fm2d2YwQ2YuGJc9NwDqswkb7f5SDEwHX6GkALP5SdckU6TzgEf2uq8MGgg",
  "key30": "4UMypysvWGcQJpgw2c2zVLR8ADhCzK5jnAcXBryCRDyZK5ZvQg1c9drVpr6Ehsj7BFRFTpFomJYPJgE7ubGCbcwV",
  "key31": "4NVfqGWkvSaU4mes9TMR5CUNVttLLuu7tYmbiTeMx9f3RtryevnuodEt29BAqrTyskDq5W9oNW9uQhfB8UW7xPv",
  "key32": "2qteAV683vvZaERocoiP5kwjUHfgVjdQLiF27Jswgq6i39seDVZoFbPGJ79xaaSvHAK7L1auGkcWtMQ5H5u6QupG",
  "key33": "2Xns52hmUCHDLYvCkEo1Fcto59VRT6y3nHePoT7Cki9sh7fMAnxCUeMZX1R3KVqTFNxrPpzv5qh82hTZKeb6ivM4",
  "key34": "59U2PQroei7wuj8d7C39FkzZATHYGdSmC7HB1qWWY8TwAPmEH7d9dWGBBHAktzqfbYw37xEt61gbsS41xPPTBFxz",
  "key35": "5qEGBnfvJxCWtvMQin9dEjKUcfWEgxY2J32bABXd4zhJxZgGBeNVy1Uxn9wKbspYUxsWcTmRNi5SHYcu4urfsBLS",
  "key36": "3YKhLG8p8iGi5QbUTagKccJ8tk8Ygom21hJVJpZDGSg88BCmEmm6kbU63QRWQbMDF8rMtfG9faKqUrLdmiVro8hv",
  "key37": "29YHNYxNjTaXrdjoFcf73kMqQ9fLrfmfykRZwFfoYijfQAKiDrxziTrSbptdwskPPnBibKazD9Q3xZqD7ge1oTph",
  "key38": "DvTZ9moJunEGM5HA8HugKk9sYYot3PhCoSAWAvAEryFVW6e9CLudcacdueY2qnqVzKtmFz6HjHKvb6KNM2JzU83",
  "key39": "5RD2GQ7didrvJAKPVJNhUqRCdH6ktY3dzisPQ99if7he1seKwEkoEfZyn8AeH4ykvr5Xhxxs3rJoUQ7RxgRmgJXw",
  "key40": "PrB4jAQC7KGv6gBgLyxyk7u6KP4RKfN6bkeWhFnRmhkDKftqvr5udF27eiTNw9FHYeZSgsQjCH3uLTBQYU4GP8L",
  "key41": "2Jn2XuXhRjkdNseks2HrvRTfJHBQvCBQGmLKrXyw2v56b8jcDFjN1n7LXVKK18inU6DtYr3r9xywRxzhknx4aK9x",
  "key42": "4MvtoZQb8iSC9FvAjtwVtYZPVR46GZEUmq5zius5TUz3L2UyKBUMWGkG6QZ1tonZEnMfqcmwFGAN5sstFc6PBkYF",
  "key43": "5TdsogYtRekurq74L1AZJbnqnWaQuYFV7c12W4owPks8cqnsjerRF56zSkowW6SYYdaGbxj4mdjkBgLstPFHDUy5",
  "key44": "66N7oZw5Uk8PWyR9DS3pKeFfStjzSJRCnJFeffJJ32L15YYytZEzZAgNAF3wm8WLZxQx9Q1tB57W2AGfn2y5AKMF",
  "key45": "41YoU1U5cEbRXVcRcbkQzxwRbuFpMvsm5da8JWdS753PGnbDYvM94FwZ2rbVodyU8N5o23UpYvcgHb7AzPkDJ3oh",
  "key46": "5d9H7Qm2KbAXs5YoFMD3uFrFUyBfrWkMqnYcvpKeokC8uXASfdL9HeiHAuNqi4KzxmNE7v2nAMf4zM5vGwYHDLfN",
  "key47": "3tQzM73U4jTx5nEyfKdV16kgutZgYGHobBBkHAAmFhcvQNTVCJw6ZVdzvmHH9hwX3BUTDeGajPxUazVxqH7HVaLr"
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
