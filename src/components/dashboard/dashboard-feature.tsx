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
    "2xuNHFAn6SUJuYhzhaA7QCWttr3QUH4vBjfJr1SYT8RZSH9YMpLQ5yvZJZRHB3DvYticJThU684ZMLAdsNi3giqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a9yGRL6NeePKpiUwUyASdY52taYxx8A6Di3ZBHj8KkRqCy9HyVKvzYtQZxgz6Jjc577wwauuXbHGXumY63awtNy",
  "key1": "2pGf28kSjoULnGNA3HW58Qmsmha8opUvrxuBZsV4tP62SawTxqHj5rBFVAbFkekUEpdFn8oAa27yMwqxMh4um74R",
  "key2": "2LdKrr9dgeWKU1Cj2bgko8SAVbApy35miwcnNUt4TKhhcMji1jsXLDU5jD4Q4MeRfEwrTcoVGJAth3QEvSfinE7t",
  "key3": "42fvNGb9Lveg1RanjiupwsN7EBZA2jGF6DwvMXdiYwSUdZPHSDwE8WjbAmw7ygjyJAECwfVLQrQZRvTxVrwYiKth",
  "key4": "3JoemkHnRbuNcv9FmbaATjeQsq9LWA2r7CCVmmsDhjPAtLFuL1V4w9AkMZmyo3eTCkV1VerB8LUVi4Mg3Z23jHTx",
  "key5": "4KDojRcsn75NhuVXyctZ9xMsq3u1aP6whwaTGtwHx57uYyYg7T5sGWfyXWsbjfMk3dWrG2NduHHfMB1rX4XknHhx",
  "key6": "3htFhwFaifzZA2EjBvRQqvzwSCL7s7Cgswby7aGQs7s7cPad5A9F9fQNZaMGYn7Rx78xbKtqswm3m5t6tdh6aVqp",
  "key7": "3W9qyTpjnsBXhhkgqQGntdfzSsMkUv8UgZXsg3jY2ycrQMAajKcRHadPeWMphGMiYURMCM3pgPUhBwEBVNYKcD9H",
  "key8": "TMYdywqUUEj6bUvwT2fkQfRN1RZrkmmsqPUGTv8cTKLEjYDthRWFxauBxMvU49E7B5GcgTB4VQHPTywF7jfXrEF",
  "key9": "4zWYkrcUt3Cic49ivWGGB6LVYLBqFtLegprKNC8v2G6SXQz6gbRi7SrCpeubNJGNFDsRSnp3spRH1ZF9u4te8oET",
  "key10": "5LxBRzAAYsUpW2bzaboMTGZRmfjWPqVYBNcUQ95cy3jDSdnLRxQS8kGK8tJcoNhT1Th9fHb5bA3FbjvJxn3p6EhP",
  "key11": "26bof8S5eVyahFxJ4KDnEWpqsiLXqVXTRou7CcHHimR21J2ndQaGX7TcKCVDx3rdK4m4tE2w4yAzVkqepum98i7Z",
  "key12": "5yxz4LTsguxB8PHzBdPqGUYe4YnK7mr8CP7mWxFW4h1CGdQYANg1xVqqiiMLEidPrSGSpaSn2sw8aqtMr36V6P8P",
  "key13": "57HoYodjShZgCTuSUkxare91RmtK2ThbV38KG4DUxjxnY2xsZy6EixCrYzH1hJEqSvN7xLydBYdsxSc9yUzWPXDk",
  "key14": "3E77DJuk7fB4byYviZauWFN2WdscZJsCoWyaqKec789NmKshQE2NhmyKFjBpb5w6DmebvnU4iUArzBoDYv1ukjXY",
  "key15": "4oMSHiRaqmCVBoyjZgsvwCwMZ6pxLCVAFB9z8ghizvcmSBt6BdAtCWHWMhqi3No3XiiKeJSJFVpYwYSysmdJPH3Z",
  "key16": "3FeL2uhH9EaU1L35WMKxXU6jys3FkkbJTxU9H7DeAzuaMZJzHDLhogeyuLDCRSDbciSE4LQTnV3HwKjt87LBsCRT",
  "key17": "5ZkE6cL8EK1sfbC3oQ2VgCVcGifotzBaropdZGVqK5vqudkECK5koaDcbBP3JFfyUnenuat6ZWqnscbg2AN4REX5",
  "key18": "5HE8o6WNMZbjxBqU6v65TYgZFkhcwWKo79hgcAkkHTsGvvMsgpqPsedsrb6ZSoYKVu2ZkGeW49sw3iAgb459U4ip",
  "key19": "4pZVm2vfEXENSvXqPtHXFSSHegNwwgdnSYpnyDMCmX8tnyCuggChHNB3Q7dArvzoyzL2uz8wrFqrQ8pGySjNc3Qo",
  "key20": "5RsFnUFjvJYd4RPpWkTmpGk31SycY472YN6mS6QKhAXQqJpiEgBv4mR2TNWymemmx93swn6NmbcwSSgGUZ4MK5Ck",
  "key21": "42ZQ4rgyYTxaBqk2mdELs9AxKQFX1jbRwAcgsSBx2erDVc2HPpA9tRjJRQ3SqsQmSaabU7vHV8YM3BRusFRpDSM5",
  "key22": "4jBUCw7B12hGCs1veWLq9pd6or2yuYPga28PRJoMwoXnQz7PPMA3XX1tpH5QdvDq9VDXiWSJWKdx7LtvNnMGmFDD",
  "key23": "4tpXFDvBkqmsFrwr4oCS29uH2S4oCmTXzGSR5njsQDUYbq1Am8dSScDbHd4VXCct7mF8a9h5vmQfCZ6pafvcKAdL",
  "key24": "4i8rcs3RXpsVAxhBNPQ83iPCYtymyJ6SfsxCDS1VGAsSo5Cft4JdmFatGLhfqZhS6VHspW51ctjbXWCNxA5F39uQ",
  "key25": "2StvD9ED7UguVrGdLySFvqepMWTDwgQ6omqpdeF67tLZt6vT41Eidqq5VUZog7Yn1CxH2ntUqBi3LmFQL8kBfzw",
  "key26": "2cK4EGX2AH6JTcvZV3WQtfpRwsvQ4oa1CVFeJ1uo5YDWyca5ASBuHEHh3bTeiUGbvvpWrxeb6EdMjWMT9k2keUiG",
  "key27": "5byqmepL7d9PwKeCNucnywCnRvUeNHRpt7Yu8Z6iK1JzhNRPKXKkTqDrFGCJDAfRaxqSGN3i8KXDnMaDkGrznh7Q",
  "key28": "2DgcuDatT77Hi8dfYEZqu4fsUgTiX5WJznkByqW1wTcRNYBpbLWZfSN8ojA8gg6vvSDLPASbbyYeeKH4xN3xdPUA",
  "key29": "23CzzWaB9M79pJSKBfyuwSEq8mdQBUMpRysk8X84gd5KYvSUFy3RazMfR1stTFVmu5TNDXystrHUCmHDvpL5HJGJ",
  "key30": "2Vh4X3C99VFC7svp7gLR5CnEXhhNRFRBQ6AxbBAEwiThu4vcoXEJBAnHvDscnJr3vrWDd9q7okvgWgs12LTx6JM9",
  "key31": "5rwTdYgkSWno2HAXfsBnekarF5gSpk82cgmQ5GyybMVmc5JP59uyPpmpM8AJt8xpSQZQdVYiiD1SrhKEVEypZ4pe",
  "key32": "CPQYhrRBoUkXQS4wy9jL5oa15AtnzHyfFP57cqdaF6yJsKuim9HVBXAn3DQgZ28S1jR9gosmNmUWoWGCbkB9jXy",
  "key33": "5YoLCuYQZG9XeanLNvMfvRxvTieHKXVsTyTKjxnrwMSd1YCTvgSfAoDvGvgq8UzZi8ZX6rThPPEAhBQtHPysUwTC",
  "key34": "33shBwGsDm139SMmQGJYocoaQVieqDwBLkx1YqaQGUd7ocVoDbLhHXJp6M97SKSDSK8b88bJs7bdDrWEPM62e9hP",
  "key35": "YgRriyvBzCVm5rGZiKJP6hNeZw4tnZ8Z1MpFfcA8mk97FWFVWBjSxGRA52XvzStR5WHpCiypbcW5pwdHyFhDZpF",
  "key36": "3wuwLVvQoQzJxrHExvR37m5i66ifFmA8xFmUc9CUeRh2YcuDYPNeZXr5AnBGhQQbBVAcx8dXibprXFCJFHXXyDeL",
  "key37": "5TRXMAbviMZp28bNF3BMorAAXH8EtvbPYNxjfEKwTcaTwBnymswe5mg6NPtvrPgV5uoDGchYjUzbaX25YSTZCHFM",
  "key38": "43auM2WiF4DGTYND28ZAt5UtmjutyMnTNSTS2rcwxgUw7P39RUAUnfHZbyuXqdYkrDUz1vuTcnq2kjdAJq4x9ErX",
  "key39": "2xYBosMgHaYcmneo7BGhe5nY9XELf4Dbv5C5pLL5D2dZC2NDyLdhM468P4ziceHUapPuHs2Hh6ELsNKJPVSZL7AU",
  "key40": "5xsn1QCZ8mxBifkPf31UhrSYzb8zqX7aEGyhFDDvqEqjALECNVahuwsUo87o2SQhjsh5L8TL7FqJ65VSmGxGxNqa",
  "key41": "ug8wBhLnRNwQiZBuqoy7cb8yo56bw8Tid8AeArrP8uh4TbHF9ZMDatWeaJs2PKgvUXC3HmgQQzqSreZj1U6PVCw",
  "key42": "56EAdopRh1F3feNgUjp5Af52xZzFZjr1wdhCw7vnEKPvFrBtWimF6GBXdq6gdcwQeiy1Dr6hCgzekEcSCQJQ8ghv",
  "key43": "25hDz5moPsfeHacJVzyEP7sZWkqAx8PYC3kPmr2gfB7rWspyA9ATamtuLE4414WtBu2VaFrMcbKbkjkL98E3uA9u",
  "key44": "KLKCBYvS1Khk3JBGvMLAJXkcBVJ5amUwiAidmEerGqFWEiTNzis4biRKTwzZYvgnoWEkcrKgbW8iemvYhwRGJtb",
  "key45": "2h3J9oLCwm2xe7FXyLYKSNmQPSrSnu7UFhybtdjB5MiRZCz9JQweA1pgdBwaZX2tadKJTVsxaaNzWcZgYUstPSAH",
  "key46": "5Jr3aKFAc1H6JPmSVZKouKX516axtHnQj9e2wcisMETBKHHE9mKJ99bW5nSPwFVAdVk17FYgGDZJKdVEPjF9aLq",
  "key47": "5sLC2NDyvzfHfzMRpj4bWWYXv2D68EadxojEbg9yfMZuLkyLrhRD4VdK6qbPoGDcaWJyXHsv2DFF2eVuyyvHcNVM"
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
