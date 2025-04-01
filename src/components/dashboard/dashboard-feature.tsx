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
    "4fskvc3snASW7wSMDzqrLAkHLzShZrBf3dc7GM2X34aUFX2VvMmuyU69qHEG9xa6gvhHMZC5zjkGnSkDC8VFkpMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X81cmzrzidR8rA9nopM8Dj82EkDYXsxas8Ez6erNyhi1P7ARBQXruDb4U3o2fB7QracTs78nR4wo9b92uvU1yNa",
  "key1": "5wjJXZXKCBmZG7xPQH5ugj2F9HLsTpCsUcePy2ioD3VdGqd2GuLgo8MxfsuqJSKpym55ev1esTaKa5S2npn5Zysd",
  "key2": "cTNuWDDbupt768CqLuMd4mWAhAYJFbiKGFJpeYDSgPhLeiXdy2ut8nUQYWaUNRKKQS6izn31coh1c7nsXd92oZP",
  "key3": "3RQWjf333Qmz1QNRtPxLjv49gWpKmjJEZmo5R32XzqJXdG8dsJeTxEa2J4Nz2NeSi5M5QsnVgXN1gESNjvAJcJYf",
  "key4": "2x3TQFPy3yamJgZea3hn4M2eNHsWdTWwjgeu5yuoLpRkn5BiEuCey6oanQ278ChqyMTKMEb5bU2X6BzpWkjc1WWX",
  "key5": "3paQda2ALKAoy8FHSeGGr6zwW8ZX5o3Q5iwM3ByUJsYtNH159YZho5HAwAhTMnJ2ji21TYeNo2KaPk8nSNVVBK1N",
  "key6": "2yHvT1YbFAd9zF4t8NFAearowgeTDAm8kBhGbfqsB3UCTxWXFPzZgRrFGU5rf49asAB6yX7GSQ6WtQoouNEDydih",
  "key7": "5wLYC2GuU4xeJeFQbEUUDok2xuL3yJj8h91rKrHhg1GNhvbKkCeovpkq6o51isT8fq7HSCBNLHXUHmVYvHKErW3Z",
  "key8": "35mydZikGbveyQcMWBpcznjd46oKvvsf8ugJnVR4FjbDdsRcFxnXQLVw7mScGTcC58mpGxb2wQFnjG3RZF4U75ZX",
  "key9": "2FTpsDfhCspSqqEKq88KaQnzxXqPqt8WzvqttvvXZjcQxAVXZUEEedr5MEFvGmFWJb6r8D6yWvaF8XaiTdpqF36g",
  "key10": "2BU1SZyq38NN52Nbjpa9HFtNUqXRzifaWHx42uLMkVSPBTJAyYy7addQ6jXei8FQvWKT7ngpteAmNnGkPRwrxkbw",
  "key11": "4Kxch4Cye8rim39AyRp1yJswVAse1bLgFFiQgtJxrCyjkHKRhuXenGxCeHnuXsak7WPZXM2wxTyfVE9RWmpcQy5m",
  "key12": "FP66GaYWefsh2A2Seyq48urUAVdcqjW2QxvzSwauwJvhcbKcJvzWB8kBYU5optxpJRa4PFrh6oXraG3gYvdhxvF",
  "key13": "24AMLL9KaAr3aVb9yiVB48byhvTNh111zHdreeuxhVxMf4Y4NmjRMhiLFvE1cHPGAy9tF96L9C5Zh6uGJpwx4pQX",
  "key14": "i3hJ4tcMnR6S2YkEJzChHJm83DEUXdtVzAJ1bVMS3cE6LrLaTFHfLgMxXgcxcpmTPn1rif415d3V6Z1bxS1bX7u",
  "key15": "RrDC1smCqjpGtXithXDGh1Arn7XXYvvnubVBxHJkQHWWiwLCd8nYYg41JMQJSzbwLHNZyJ6HQnh2ebM9eLyWwqK",
  "key16": "5ytFX6aBdoNchnYH2veQtu96rv6To1E7aHQPgbLMrZ3GHyBD12WwudPuMDA96KgYX84n9mLQ55GdWyq9F7NFgpUe",
  "key17": "59MVUdNH6gwPfkio2kuqn2C6RZ9VUX2Qk6kcoVUFAdWdiUPV69Leg9dCfDKunUZkhkeNXLMgz96LLGANAUibZ2hB",
  "key18": "kh7p1MtucqrFjJHoLipFdwRWW4FM2TkJjuVyCRiVwBqYMqHmJzxTrxqvNcNq4gV9dtYVESaNBg4HmKRNzbGH1GZ",
  "key19": "JUquudfTybvUYp4f5zvUkdLc9Pse2615ERre29tpph9UfewdM32ctoUcEK8F117ToqhvFnYDPfBxm2sGaZ2pw1m",
  "key20": "669n1f9jAaSVUsjwTomgorZyrgbWd9yPrZbrtSu7aQYAsBAjpASsFF3wNsy4QEgSqPhToGmjAJ8df938cRDvNMPS",
  "key21": "3ev1dD5doUCs6VBDb4KpG2UVde9Z6b1DXFH8hG3rTN1YcCmek6xYSHdFefna8M1yNwecUfAJk4MYockr7JpeVUNV",
  "key22": "2KLoWS1gjeMJF73xsKetkYxxL7e6n1opYJhdQEtf9T64TKw6TbYCgtAJ67PEHmdVM9W1doFqoMgYhq4Pt3E1sb6N",
  "key23": "47Vb7ZHyQazCQrjeuETBhvX14FMzcKNu6J7EZnfcTK5G6m9BRnD5Wwi531DZ3JHUHJSMB16nU4kh1NV5b1FWiEGd",
  "key24": "41znBhw7VFBMsZuN3CtNyQySwxR38e8NJiVfcmJskEYwDdtFbrL34uAz875UUThF7YbvXNfSo4LiVEjuJF6jJCHZ",
  "key25": "2NDRrpvZK1ky5rXV7dxqxFENwoUdC5uovXy5ApCi9uRLdbwB4duXb66kpm5LTvfyg6sJLvRq2vfKXPseAur5mhNy",
  "key26": "L4kEcxXdDo8vjLdoyonv5V69cczHc4rT4UJXiqaETviEnPpGAjHdFxPbCBexFc5QmY3H3AEUweQa8krdsGhPTRu",
  "key27": "3qNseB5R7iWgFYYE9QwZ1smccjntR9XZCnMXspVntAqbabHDfcyeih7AaDDJXxd2PSPeizFsdtbEv677SKaxzj35",
  "key28": "3vEaYhanU2yv747hByJEheeo1WvjJG3hWyPSmSRb7TQHkffuPpBxTHTbugZe3WG74V4c7kr9pnbHarHDNzjGxuuE",
  "key29": "7hDYji4TgfnpbogLLS4ZKt6eSzEnPKZjkcf1UYw3FwHDNkwerrykjfCeCtp26MZryyP3ck8weW1jM7k3CiFeyAv",
  "key30": "5XKM4X1ofNNsVxGX53kWBbXwqVmtormMhZNGZcKePjbdxvhoZEGqxD61qhQqGvQx5sTTQnyTvb2P7YUwkPxHfL1N",
  "key31": "2kGhK911VwnV2BhErqZwYwwuzTeKUpaopW3zxruGxkdmkryzcyAaatfqfx4hJrMQPkbvTU561pDpAW8cDkAdhPo2",
  "key32": "3d7APyaoKR4Dkf8exqeJSZ223BGSqr4WyBGfawF3PXxEHDzUf62UNc4eK2YcBdCK5M2wJVqggHbSpR4ytEepu8Dd",
  "key33": "2Sru2DJR8MyW2kitxf4FqHdq8n5oGjJviBfashgigbXouXbgidybT97pTrwtNLr6kUbuwMCVX9khWToqm1QFMPAV",
  "key34": "2NQ2Aj9kZccmrXfeUUJ48pvYRMNDdLzkrQjC5hWPo5zibNCbxJoC45J3NtwMBkebByP979NvKAjVYmFnrdUCUC6y",
  "key35": "28QDdpuRJYic7CNVwrXpU8Xq9Ryh58oq3rTSyQGNQzp3rpnyANm5VUXm4y5B926bQa6BftToGR6usfT8kRTqNzUA",
  "key36": "2U714RMEdFPk1XbJpT9MxMSCSMhFFTdXe2hHp7NuYem3dy5dqNdhSt22LxVsyuxQ4yNyzgRvuLGqXobYfimT7XSv",
  "key37": "2i6Sk65dwhaMYVND82DoPCnRo1TmG1r9EQXUUerbr9NEcQuzqU36P2GrYeiv28LtbRRtdtDPokMGmQsAVyoi8CFg",
  "key38": "2QtqaCGM8JNvuxpp7s7GuG6iFcFK8JmJLaTQrmvtLGMKZ28XfiP9soMbRqpEuoh6BHzVLCxyr4F7TU41Dqdsewx5",
  "key39": "5UCj6NRrNu7KcrkY5uXhVt7d4ffRGAJpnkX7X6U2GDnnM7cMicfkSYM5PMgvtw9LJYdopzQyNbb1Q9SQzPBT6ouJ",
  "key40": "4hHABUXrt4yb9Xm5HUEvASStsLLAmQdPANT1xmZZGiqXuXWZPVvtZbo9WktBAhFvPArgfUmtZ6QKAkLib5G7dFtP",
  "key41": "33JwqpbNT6NbAXaWj3w9jmUocLffyjs3fZ6AuYDyHMWXcaa9wR3sBYycaDB5NpxRCUe2Ax8Lm5VuGGvyHVxnhaje",
  "key42": "BHNJjMjJkcc7ZxtDZensUXdKVYTFLkPHZLdAC5s9RjGBaDi4JR5aHpHyqjuSuDCayZALq8Rs1pJfwjgHm3GgfFU",
  "key43": "3KKJ3C6NBTbXQKzYwntzFhaWJD1tcxqxHR32hCsv4Sk3giEEF4st5SfQwLZZYcspkAfko6o7DMRBeqGnQqWHmpSb",
  "key44": "46WPJNkr6rj1xcq4NjFi78cwA94SBswoGjvCtiBtfMpf9ZUQhf1HdRc4uWdsEHf6AK9EzFME4KcGF9omPDhhwJ77"
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
