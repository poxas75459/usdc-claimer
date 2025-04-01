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
    "4yMWnuhTttN8FD26cnVM6j5s31nY6MoUz3Ya7vgqWGgakvfxcPeTve6ZbMaPYFyYex1QTy5HaTD6P3EFmmAWD3jM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r2XQhChgjBwqaXSBivS4EqHXS7DAtT76Kz8tWrcvx66YdVV85wWW3B6tmmwgH2LTUPULNHLtsfziX8yLNkY896L",
  "key1": "52unQMhHHo5ExUeDakUxLkYpySb4ia84nJhfDmzFE3vrzfaERb4C4RZC3vcsTpJuLoaW9uZCQxiGQYr3jCr24Agb",
  "key2": "nWgvR9Ar4MUtHQZByAxsBWsKgA4kj6SPhgwrAVf67JW7LWaVi9d8WCgqFRSekXikhQjp9ssEfag7T3G5a5QrSjj",
  "key3": "5VGVVCEEgj1V3GC66PUFhsrNS7sF49R8958hD4Xdsm2huZAU6bKmDiCT9DTs6qnshuoywimFMbHcs5gYWn764s4T",
  "key4": "121sgn3CmfpGmWCGyRifLsRjJssUdTeagBYSds5KHMcT4FaSvX3JjhVGF3zm8QrKD3BisctuJ6rHvTBqahLRzYPR",
  "key5": "4x3JJRSzCzBbXUuP2MrtRnFFonSTHkAiBD7NBxvYyXMP7N1TVgjUPNjEjdhA2vX95CwB33er3BuE33f8ythMTRm1",
  "key6": "3wrJLqLq8N6XUXwyDzsxrfevWRthH49BNYnWXeE1tLNdkBU7rTsd9cq2ScwfTDmQ1V9wQ5YDBCdUEm2nUHm3WdT9",
  "key7": "ZRhCkgTuRjDriCaPjY5Z44KFwDfskv98i1YP8eXsARkxcCFYrnDELEJn5VCc6wEbnBZkZHnZQMjfuEJ6edCaaAd",
  "key8": "CQQGZXxbFngQN2U9uN51ymnuuz9X9bSnevqTJLPzMaS22UvmhP72NqwKqV8v5YntTmTneg6GxKEJmVHXzm4RuBJ",
  "key9": "3uNBQgnhE6SpC1Mahgb4ofJqYFXUjCXNHSwWe62nW72b17yJG9r2akSXoRDU4EbzJ6KFLVm8Byo4kvnCCW31ii13",
  "key10": "hSjLpJuVJkxKk81SET6dXJmm1J7HKMy68GJc5WPSdTQjyho8wi1RhXoQMi3febVPLUsp758PYxGvyWWVrvdk5fm",
  "key11": "Ke7CYJy8vnCjewPccxTMF4P8zUdp173Gtzp7RUyFTeCawDWtcNwLbC92q3QZsG6J6BWCXJQgwWYXy4FvKq9Ehtv",
  "key12": "5At5hVyHE5wcZVriEKCyTebTwaraUjG1NWpw67cju3RJCYJ2NskJYoxaBouR3XjMReGCRGtdZhqYb7KoZPsG3jQo",
  "key13": "37FjkFe2EKc5a125gtmq6jvFKxG7HFBUvcUmnkZu3xiPLz6pg42Pq4bzoq4d795im3GP3n36YWEVK4n4VKiWpiKE",
  "key14": "51FAFomU9XAEyMZkPPdNJmkSLQCdp9EXzoSnihb8onCVz9yf95ppRryEPNKGzbmzjoE4Qu7z5VS4dsQjqkm8MT8f",
  "key15": "4ToCt1ySK19ky88Wp8Dka9Uz6jfmHDoiEemyoEViNB1HLp58fSVpJa5xkav46m1HzPryLsBcrCioYQieh6dqBNwL",
  "key16": "5mvrnDdG8PS9qvnMdgwbXKsQFaoTT1ppSDwRBcjcm9xkWFoxDrEvCzxfVV5EfcEbnBRWszUZvBa6VeaVcAs4USfX",
  "key17": "4vsC1eLF3kuE3BVJaE12nDn7pwcMUQ8UBbfuJZ1Me2yH9isDGv1sEQEh7FpAreCeBenuYMAryXevjzVifeqa4RTF",
  "key18": "3WFyMwmirHU4NiLyQxxCZG5ipexW3KDzUFMem67DHdCfnya4qz2RanJv3LeKST76HX2sJBqcWSWoGakninQ6LZMP",
  "key19": "243GYrBoGBaLADrwiWfifkXm4mgfHi7vkqn5MhYCtKpeFtRkjEAmcNrRdnhbxoaU3KahSkdmrwhcSjb8JEerdGXK",
  "key20": "nUZh3vtYeaD73ePSzmRYeQa5ic3eTbVsgUEfgFvNkWnbc6uBMynoD3SbWxmxHPWJbf1MDVR3WjHNAVmirSJ9eZd",
  "key21": "2YuzqJhPGUt4oPZqPRBTG6hvmHbt2KzLCNVj1aLfWZiTVxR16DvwtdyeRUFF927RcUbC9TRCPKoeAGkcVfZ1hkob",
  "key22": "47MH5Etrm9fwkPApjj3MesvCH3GPu8XbXpcHZVWb2AZE5nu7ZFkCPGLEGW8iCDjD3423FZKRZAzyDJdU8LBxrh91",
  "key23": "2uAy5PeGykmsHYm7VaCq6pRikondwhGGLTm9oN1vNcLpFM8hoeqTg78s5Vn5eVc9gUjNght5DMHKn7eeQ6DuGzNP",
  "key24": "AAcBpXtnrhxiL9CwSGTjRpzbUtg1pZ9zRRFmgSAmbu2DQVdirHL7XKVQ1mzQmzRMEVp3tvGiWB44K1ocNU9v9LF",
  "key25": "2HiA2HywwAD5V6dWrTJPzCYNf6UoRisp1hqtLiX8RecwGa9vV2EA8UK3PaWGJJ1uA2aGR4D4kxQ4WByeqACmNyS5",
  "key26": "7Lcse2xBUoNQ6iL372B4H5n2vjKGNKX2RcatvUKPd7h21b3Zch3kB4MgUe5JfVYysF9FzjDcrkeyPJp4kU1Wsiv",
  "key27": "yXsmaDhsZHdeJ83qALUE9mHd4a2N3dXtTm5sM2QGwY7FGdYz38YQfLBUHgF2mDi7J6ku3GDmzvNuknmNU4CUxzQ",
  "key28": "dhDr6vcoNFEMdhZTkv2bFnG2TVbrtuF1KBg24iKimSWhHXLb6KY3ruVgE376WzLhZgFD1wzjPKrGXbQhxBpt9Xt",
  "key29": "CqmGPX87uTXwxsbbdMdaAVzWa9bfVgbXrMyVmyvCKZ1KjfrWFA3JXHuszoC6Lauy8vensAaPCYbmRMsJQzyGWUB",
  "key30": "4MAmtnTZPSsVV2EH3yU45HHK7v2GK5d5wxN29YtCAcrGC44kwggcr64fzzj3h415eqqkwgpY8Np6qxphps8haqAB",
  "key31": "3a2zyVamhZMgB3oynVieC4heedkBtuR1sMn5GRzkFSaooTRzs2NWn6NDND1EfNL1wmUC7hbk5WCopJyj1u8sMM51",
  "key32": "35hKWNAeCKDUhWxmCB5yx43iTB8vS2LtJyWZrLdZj9reyiqVLCznAKDfG9AE3K2D9G3X9dYaFj3fWRak26jLWmY5",
  "key33": "4kfMv9SdawKihm5rzEMt1cN6n8bN2rPdQ9CEHvaaK4eu1kV7MXRJAPTwM3tmgon48MPPR45G4DLSiStXyZbHB7vE",
  "key34": "4r959tssEuWzETT1eVq5p2qraswyceycVXzWKBManm56PnkuDb7RuTToNTPx4j2F2dAqoV2kRTUy9TAVwu2zDZMV",
  "key35": "Pu58g25JUqhHcN1cYvKjvozorWGAB8wQue7ydqxofv6N2RFaYowHLBpW5uFdpgtiZPjjtS7mw6XjR1QC7V9bRA3",
  "key36": "2iVMs5f9fhYP47f1uJKQosKNRT4qdRtPSifh8uAF2u8LezuKKZtRMA2N2xg897zx6o5jHdWYU2r5QxkX2Qe5Pto1",
  "key37": "dkyv8eZe1DNb81ksD2Dtsj25AZXaquqVzsB27UhVcMyViPuyqKHfzL5FgHMh5L6oxAqcM9dz9cWizfuusXuLaoW",
  "key38": "cFQPNTsvEqk1djhUhA2cBWCNroogtYtSz8oiFhY8Rofact13R8sVwC6cDWdxLkDCdbe5wNRTnBZiP7HJu8f5mnJ",
  "key39": "Q6R5VGr49MvAUwuinusyXJN3jCwv3mhRJvEBqaUkCmW5NeMp4YzLPweD2QuUVFRPYLrrvDjLoVkCwCTpY8TWe4C",
  "key40": "2vBRV4dd79ee4dWWcLwLbEMYEVmxGLEaoFohhL1mVrdkEvt5zhqYkqEMHi6fJioe6qD853bQsiot3fcBgqPbpwjx"
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
