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
    "5KuBMdmi8un3wi4aZoo5foWHTSSgL9CnpT4QjzDsRx3bFnLtbzaJZQ7y7DzT5dcypq1JJpweHYrtxEseZvQvEi2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kqnnH3TmhrTHTspifc3m6hdhKstXtuQQdTyAUQ3kfff8wSFEC5MQgJt7TrML1Qppgzo64bYmwwkkc8839dchosR",
  "key1": "2M5B2HZtTxo9PABb7abwgAsZ9B9vPQPAjYfcGsx6b6WKnjrGqwE5EY23tQQnBGZN6SYsVis729w6w26wcJHXRdVb",
  "key2": "2G9jFYh7R3mCxEHWikt5hwyNeR8C6ReEeKzZxCbAxhde5wm6G3Qs2ExSddsUBsidKA1kJykYpPDHpF659dNXWMv6",
  "key3": "BJQFWPq86fNngsBdvzzK44Zsf6Ga1cRjQQEurPsA2C2F96S97uTKUYVY1KGzDvPg633V1ACvF2aYP6ErLZU8Qew",
  "key4": "55zxoydziBREH9ZDZ9rfioMm4ZCdvFDf7S4Yvhbi3QAaLRuLkMaDQAfGHDUScCHiw6RizFQSCK9VpEnAnwWbM553",
  "key5": "56fQonzvRubiVyMBimkpsRg2fVJNHuRzDk1CJb2ZjQCFez9AuDwi7PUKYa8QyunSfDvfjtSPQpEVCo1y5CLViuXM",
  "key6": "61NzMJ65LygWKmTdLje8h4XXA1otixbBUoRvGrHkhxnERF6QZbnyNF7EeWTY6DpMVjosw5TbV1nBAWhgvddg9oac",
  "key7": "58TQ9JfxncnrLG7HABw7B6jVKZpYqfQjYrNXqcL23Yem1j6JtZKgbmaWVGgtocsfdW7Aso7xYazvA9cGxGWiKhsG",
  "key8": "KB4N2xcD5qsAgJbBMPZwZUcvc1fqWZrrP24RGAzvap7EptLfDL5KBi15sPRehqdkSn9fE69iGfom2Cz9wvP7hwD",
  "key9": "2B4S7VrzxGR2X6FAxJFJzZrWRbrYYFfLdE2js65KVRJPeT351Ycct3ZXmkk4k1Mn15x57qzRfQj58qNcX1wmBRs2",
  "key10": "vLSgt1nYTch2ozN5BV9La9DtN7qzoJSAabGE9ufz7zhKonBJDa2MB1jw2D3mEfmWQyw3JTyqthfJJhhF6oMdRss",
  "key11": "mMSygMHxEDUy71JUvkGaGdbJLgPSYY17g51bmtY4ZXNTZSLXMzzzehuNvuuWUmo5uBWDWDtoX8Jif1FArwbfAzP",
  "key12": "627quptaWUNr7YFHriSkvN3sYSsmHEQiXEGTzNfnvVbj13qkBKCzqz9niadyz6M8si9jJqK6tNN76LjwaaTzZBks",
  "key13": "2TDLAmYspUvZpWu2ZKqEnMbMPV3pKt359RxTJTw3AW3sV2HtWfPRrP71KpzLSct6iEoQ5MmdvxGUNz5wCmsLNjzd",
  "key14": "3qeyXeEdhiGEKGWMUpvJ56krNHDx6BjYZh9pAhP9VUY6M9J5EkcHDi94DYLJcFJhFfwtSpbVTCU7bvY8eDm5NUVa",
  "key15": "4aKiDAciDh4UqgwB4d6HnxErNM8Kehf5pTaQWsYHYxnN79xbgq6DTKrQKU6mrogkkYe5PXjMpmLMTGiZwwFnC4JL",
  "key16": "rzvnGofcGSwZWq4gmrFGudFz9YiW2UzsL3XyQEfiTHKB5hb1oDopzC16LpZDzDDBNB5DYyRouwKVRtSEW2m1MMG",
  "key17": "2aFUR7xjF5cuZkAFLFVfYLqcUnb1QYJ5cLwRqi3ieXJxbCwXhxiL5FZtSUCVDk2647ejJDCAZpZ9AaSbmbvEb1wF",
  "key18": "3pBzQ4H93ZgRw5SdKwTQAyKqYxngtsd61Mf57pnN6qiZJxJoN34HrHcorViCLK5QDRa5BxLfGLciNvJEvgbHKtNr",
  "key19": "32zHm7N1oe2djjWry5SA3R3QVjFApMQGVQm6WunWMLSHhixYKsXDZ5soTM8yt9TedLc1Kk5J2nV7fyWgaLYCQ3Ss",
  "key20": "2HkYug6CZSryJ94UwaTtcyDCZCruLd8cdva1BnmnChrkJMvEo3eg3M1uJn6iJHkkxGzF6SHqaQEqEyzSnMHyTjnN",
  "key21": "2XyTi1aTtNNNUkbw7tjc1zYTxVJTPsjire9Tf1zBEFfyqcXteWYXEHJsq8kbqR7h5ABiTdcHMYsVZZR9gKRinB7s",
  "key22": "2TtGiKuBLTLEJ8kcidJRPHkCbXb9CG9UwYwPLCnLFbuKcHwpzfQHsazfVujYLxtYtZtnwaxR7EVaiEkQfJVC8uGz",
  "key23": "naqy4VJtagM8zfrSR1uPqedZZh4VhfUcF7Ejo7zEvNz4W4MY2JaeEPPgGiFBE1zfGsmEqHWJkJHLDT6sFxkvFmp",
  "key24": "3Z1s1ii1ijV9HZnxjeWTP7tpwefLDsfd8SuAT5VzQj6WmEubx6wAahMUijEiJiqbwRadpPbLbQCyf1TK3Em2Pqh8",
  "key25": "KaLFG7rwVjjU2iyRTckrJBbbsvUvZYUSAgRFjZKButnLRUiywBZfJTsJkfbZ6VZrAhFH5d1W6Q93Rpg1YbH2Q95",
  "key26": "NFBKD9hQQMdgJGYwQ1iD3C6TJ7dHUqQBHRtdA9KzNnSeuGT7fX5TkPd9YKBFaPmHrvnYZfCxu86mmYinDFbZUUQ",
  "key27": "5p9VgtiosQLdntE25GgErwH1QwyA7kkHMmqP6n5VXA2A5wDpEcdNbQvLCqL27Q6G181t6U7o6BjoKtSx6DkgYdYM",
  "key28": "5M9Q6KhhfyJSfKFTLm7kK1Xhd7g1R5QAXhhTwc9KqGw9zvmScqjjhgvvUGcMbHjWTAM1R4T4RPqZnW4vHkvNKKS3",
  "key29": "5hM1VTjoYmUx8JoHn3ZL4yo33dQSxs3aJ3S7UqTdpQYjqxPN9mzrFKERBHDP3q8adGz6KKQ8nK2XDYZoaut3LRai",
  "key30": "5s7octxcFFTy4hYVr5HGPHLFyvTVgm5zn9vBZL4xWB5q68De8Pv5EV8V38QLFX6QM2Sd9xnafMQiYKMmgUr9RkSt",
  "key31": "4GcyqdRN9eobX4LmJfLjNbZTmHtgx9e8hK24y4Ur7XtGsayxZsvZ7Ub26nf1t1bWcwd3XaApwbyjDefSDncGJrGs",
  "key32": "5XcmhCMJodqmTBYo8AFZ8mUaTzewsbFauJMe82vpFKMA4miCJsC9U66xbcvfptbgTsQHP7uwheKqx3CwkC6wW4PN",
  "key33": "3LFJbLYqipz5MzcW3VnwyUw9VFGuiaG1aLFF6NievjK8kqxRyBJVd3ykKtYpZXhRTnuuKDZDqGk6kKLhLZeYPKmE",
  "key34": "3xEXabTkPwGTUXxYUU395sYDdAP5wsskd57bsyvYVERM3XJQH8VZHyKRnurSTmfAH5yW66zmEYRAvCxR6K5ytRsZ",
  "key35": "2dSue9AehBXJXrJLc2XVq99UcxBkDoaKb8bd9iCGWPP3YSFigG3Pr7M6Z1TCwSoXVdn8J6aZJrJBehhC2GVfr9Bp",
  "key36": "2nu4XPx8PRoDHhsAYbAfckKdfVDV1mopEfC7taaRK5osSxwpq9ze5u13imPT1LiyR1Zz4QqQMjaiLXdrwAds9Mia",
  "key37": "5LLLKLGLNZ9QkFgNNf16KLmobgwwd9UAVnrz19ceDVBqyBkgnpgnUgJf1fvGr62QJ5aC9xGVkDTDhDCvfp7VzPgw",
  "key38": "3HfGXiLbDY7YgRGWUFH2Gygf16wpnhKoNDteNoMWQFxRB7dz98KiceHYbFsMEEV5V1CTaqScHF4xTkLvYg6JKdhE"
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
