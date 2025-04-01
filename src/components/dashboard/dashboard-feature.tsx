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
    "L3N2BfNf6h86aWt9zbXvZU8nQkjdWPSGmm78Y6bU7EoijJtDyfkvWudfujXMbhbjLKgHCKzAPrXvRuvUZNyGLYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jws8MyrksybrPpe1uYLCCx3BTV9MbRTWoBCahDGooJCXdWV5uZx7VaKenFgQ9a2BzSct1BpdmUKu9vox1P4FZUJ",
  "key1": "25BwYMJnTu73nivy2TBRaJVRv3QKDs2qHs7px8rpPxFsBrqYraQpWAye7iTuGsQVyMNDjzmFvnsZL4FjNcsU5qMX",
  "key2": "2CNSN4hLB4KYHoquxGDXBASNwRSXWEmtdcdCAztd7FC6kxQmWZiRQpkHUwFbHcwdDuAYgKCrFd1hJge5zizgSwKJ",
  "key3": "4aqtsvLKBMtdRw1sDuqTewP3HoeFFJv5vYs3of6TvtNFN1MoUaNn2NjKsCrsQWyKbAkkcJuJnGLVYWinUKHj3jrS",
  "key4": "3qcdmWD4WK55xJYPnwzwpkqG6WM1ueP1Gy5oUwunczxuhKut3hBcrxKgVQTBC7AbfWHA4ouMD6sdhTHaauFynZCC",
  "key5": "2nSmDNG4nvbpR8hMpcaAB8QSbA4JkwLqb62NGm1UtYmzyqNAjEKbayRzKrHKBB61RmEGRWtA4oY6Qt8u1gPDszUs",
  "key6": "J6sNnVPrcaCdf9a9gHWbJzqzs2gP4wKLLJEshDmKidGKnXMN5rifzXdAuK9NeZDjWsnVLpv94KkhmAx1rpDnK1p",
  "key7": "4pLy8oc9kXjiu5aXUeAgkgvFda6JVKeENCQRuKkg1dXgdWKFdwjNagzigqDuVq9TAocPoYUAm2URG2oRuruWXj7F",
  "key8": "61mx9UaEndbmRtjYeTa87w71WxTYDuV7pSBKBwq9eEtKzDVSvqRfrxJ2DGBETpumAneogPmS2kJjsYgLiu8kufjA",
  "key9": "2FMNVU2VFaVWhHzSD8LfCaFhKwR4ZKP2d5icFDKcehdJdRBU7zwFyGoG5k7cqQ4qzvVVsPbsjrf7dJguGLYsuAFr",
  "key10": "5ap1i5ZxgNLrxZNzbeLTtkET7fB48QUk2U5Nddb1EhkMAyeMjnq1X926XdMFs5ZiujATSV7chnip2XhYUEwHvN6C",
  "key11": "4ssUr7sr3byhm7Y2Tx89RMxiE5tnH1bYXmTZsRqTiFrCMmLJHgNVdQeSMjLrciXmrw5Rku1VDZeE6td26xy3c3Fh",
  "key12": "5KP9XTGZsi9b3jjr1kbi9x4G33jxhkJvwwCZvVrXsWPP1Mo3fsuY87M1RHJcnP6i7LKYMMEi4KiGdgufgSjDgqXA",
  "key13": "RfbgibX1SwacZANfZDivRcXnjZ1RFggwsD2wGCyrtWN9QMDzZEwpje1f2Mjmy9Q1hxEBhrSLJUs5StUAQQf5sBL",
  "key14": "43AhRi4UyWeeMUNfo9TptAfddfdKRGBvmc9JvqnsBvFsZtQNHyWhdUhRwdwaGSMMorxJUjHGPwpxXozKpR9MXhsR",
  "key15": "3ZyTsAGC5qmo7WQmWoZYx6FBcJ2PWFxQcLw5qhJgkxhcWiag67ubh63byLwJKm1VqvXfa11WUYXgBU5idxfcWczc",
  "key16": "2SeRwTbSjwiJtVzcesgccFLwGhswiw4z3Dg81rfftRTSY2xgtfuhk9Fi3fbBLs848ZuZ5qsEBVJGBMH6rwjNtsmp",
  "key17": "2aPJRtcANaWfJtNWEztrZpaqC6VvjzbL1wYA4qU1EQC6YpzLov2YDZRBiPipjhTqkameU4BEZaLVpFxYtpsraMdQ",
  "key18": "35QAoFAhVQq8Ws8i16xF2WcC4Wuh9v158iuZahyL34aCmGqbqqiYnNHEtHRxZ64ioHcAaJzSAzBhFLVLvBbgLWcN",
  "key19": "4qVUk9mizxkh7vZw7PnGGiMnSbZYK8jHJTxGDNUCyyzw57p7VZh4qDyhswUsGYNWKVuPEfPEeAZ8pjL2EpGSpD7",
  "key20": "qBGB6wTBacKrdwkSpR4BwPyj2FCWwbm1KfSwrgZizFVtVHMMTvKdafBpMtgcqDdP681aeZaBd9jqL5vY5aukESt",
  "key21": "3JM4sjTiF5pnoLjZUYC1r5vAVNRfBZNff8bvBdRPaSgQvHj1o6zDKANaNqbKUnsnA7WkRVbCCFC3Jy83qb9D1Gw",
  "key22": "4HwUKA5evmzzeRN8cm76ahDi8GKR5idcfyjN1JsxrNXjQQAdryD6oDZF9EyURMRHYs8Rn1rVRsbxFtA8WLNPqXdH",
  "key23": "4r8dkqHHppQuRCWHpNQ1GmxUjijM1QTeD4bWyJ3StGZJjyRskD2xUW1ufobTfNkrKrPpGrZSuEJd18b9aGyrzEgj",
  "key24": "3SVWrmV8ti97YP4bMJJGtqTWgzZog1wvMAmP3nALxFJGjCgkjQP5TD7ZN55nEpYS4f1iio91u3gcRw4cX1FPs2Jx",
  "key25": "4eNANmfeWtsC9vepAmXVSLXw6Y23FSAAcaE7UEbmey3Y2NWwb3jUXMTAo9nkcVEeAbzv3mfJLXRezGZj3ctevic",
  "key26": "HUeZpzjUuwvDbyaJYakPg1Wtu559iGWrwD11y9JrwgkWW5rgzqZGL52JME9YmCoaixJnqZXU43s53M1DBsK6Rg3",
  "key27": "2eBmc7d8W3LFJeLbzj4e8Y1Z3p4L6WVz6nN4EDenyFrWgRU28NW5oZzxsSWLYs5NEJjjSFdns3RzhkvtMcexxmm5",
  "key28": "xgRHRfP1QPFDSVj3wFAJ3B2HeBcHDEiWrerRPMDmQX6gSJNwbkahE2GeWrPQ9dkqcsFUonaKY9rNksXm91FeWQY",
  "key29": "3EhBCdYn6kjQhUEce977RmfFq8MiWr2XJoj3U5AfjkQCVZf4V9gmLmDJL6CSqA5XTVdxxuj3r2VutpPPxQQqdpWL",
  "key30": "3buqdFC6aEbwpC3W28UqfZpsuDGs9QNbo9yNbtuaoKea6Jf3o6dwhMtpyNP2sJToDgR6kGutdoAqmUSP928deTi7",
  "key31": "67DVLR84qPeVQ4NC5bax6BA3Nmk4PjLWWkymWynLMZduUZJfwwtwpH9gr7c28k25DwX52HMz9L5rMVPjBB54KkuH",
  "key32": "2Jy9ziDsaYYGNRG4XrHKCDYwSiq4XihkdgC2GDcdzgALLcoPPA3kehA7qJw7eTN2rVE8hsQv8arrCDyrZxBvdZqx",
  "key33": "oufsMbinaLiQ61GRQQ64JDQ6vAiqoqNQEXujTCijsefxGk6N9QxexLayRfsMrArBbWsYvyaWyQkrqmSdXsQj1p8",
  "key34": "2rm3gA2LMa8UH9X38uPaxYVsK99EUnbyhe59ySrMB6gxzRTkKJ6AqUjzQp8GU5kj3jpEtwm3UVkTwqRMZb1EWimt",
  "key35": "VZq5eNPxTw83SNVk5kwMZkDapAvvjfCRpUy6jDQGkUYKbFMactGiTfHc28kDPcikiCUKUapUoxG6zpEjQkZK5cC",
  "key36": "29Mw3ABHdY8JP89vZfjFRc7oMAmLg3x6966HYp7Msk8MCF4CdTG9fJf2a9XvxJpH8bji9sxYDRLqFuPC1Lp4cFwk",
  "key37": "vS7DL6Q3gGZhMXQyDyq2tHkjptCrzrWNFpWc9RoJAbioF63J18w7MjfgwRPbEBCzhAX5Y7L6kXF6f5s6gE7Cnw7"
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
