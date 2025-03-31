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
    "26CE9CjzmjyeCZKXKREw3ZdzNVQJQMHNjNPw78h3jpVHnJSJCnysyxMSBd2EGq61uUkgzYP7xB1c5Tyq5xEFU9ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dhyhWcUjgzrqAMuiUbwTDQtn6wQWB15uCWqQ56R9Eqg46ppYBeYHGMCJrSeLXQPWkWgf67DNtjZtb9nmT3sw7wt",
  "key1": "4vEvurMoRdTnt3juvs7iDi4WBod7EswPQJy1nn6XSLNdsQyzwQ2nqsAzTVX2pwr4JHojzvizAamwdAidxp3Jnw6N",
  "key2": "5jqGxtCFfMoXsgg8TTbQQ48ZrioDnWFi7wXkGqC9NBNjQv958To4kBoMLqcieCUMgGhFro9dAQkki19t99VMPdk6",
  "key3": "5YgUPMxYA6VwfoBz3dSgCuwDxyY6vPotLa3nZnwd2JMjRJn2CoobrZaJdcSoVGHwg546g1Xet1FVJQxVxs8dTvpx",
  "key4": "g7gm3jFYnWwTYjk2LCBxZnKnobKWBF3Y1XXzWChHQppcnufDPr5zFEVYtCwVNQ61myADVG4kbGFYKyhmbtxNjGe",
  "key5": "4u2k686RqvTnX8QcUCHWHFrEpfqTXEvxazsHzLDQptx53VrxkaNE3bd5LC9jfQ5WFHB4eusVafr163ADiGN8Mtzb",
  "key6": "2JJYbvdyvfjq6DsCbqaeehkmV59qDC66DrZ4GAiQgqhBgt2TGfjjLChd3pfhFGAxmge8voFp8sYnkJzkt6gFGbBi",
  "key7": "2Zzubg8aVCsZE7m5bMRDFrUosLvoXKNuucmre9bmsnb1c7uE3v1m8LHFcAxdsaQeyYyESctzHvWBHpBZmbSwqXXw",
  "key8": "6sN4tMhekiJVGczqbMMVcxdXf1rgCmtj27HjXpBB4CnXWfgeZgJ2WopZFBpj9qX1ACcquRpqSFQxi78KTuaZKrV",
  "key9": "57QupRtvG1WXf77mUXyR1rhhAasxwpBBXC8Wb2NVGqkBVotieuFtpAWdLKRU7ELW3qLX6B41MvLU3J7XLVrkyHHt",
  "key10": "4jusAE323sFvGVNycjgSGByp8reJ6f7DZhwFWmijajJn7pQCB83Gqcp1W4ktiq4Br9GfqvYuSKqqmozxrEfvM1GD",
  "key11": "24EHkjKJ9prfSSDsqVKgjLwAMCAMoLWfDoPXbpTUqdqwtpJ1qcdpUvRdEe6Dr3pHLgrhAaucqwBKdXf4X7TxSfbt",
  "key12": "4UXEzE8J1wkovGyRY3YYi3pc821kbrKLYJuoP82BWWKrbbkusUGU7XRdWwiJtZP1TgK8ZxJXp8V1grXcJ3NsUBpK",
  "key13": "5YtiwAQkiFDT7efjMD86uLhwDFWZ9EXfh2uunMJStqVDkuzoERorF6Nrko9eRzW1Huxgi1cWmweif3aUx5gVM7Y1",
  "key14": "25t58JmCjZeDcVWQu3jCR8Mx1YwXtGMuYazGeyRyfh4GZxHhdwyRMjuuw2YRgFaXrNKuQQswKMLK15oAFKGQtL3H",
  "key15": "EJxDX9VF9Zbu1qiY9DQrDg1yviqNHqMoNrJDpX7ZSxgzHH5NMMtEViNBhqw3qDggLs7XAfJSRxCkuSBQXioG1dH",
  "key16": "4FLjTgdomQfRqa9dvz7HvgT4PN1dnLtfSorPuqLzoNNLmUpZ9ZWTb2JLeYoNFxZhvmgPsrCPsspfSSh3DomF3ZbQ",
  "key17": "cUsVrcLViWHTpq1o7x3v8fuitw8fB1RCDQEvvwrFBFm76xks9NRshYpQPHYCszCAooEX3dfT4xyXBRFxNG9W9me",
  "key18": "qu7RARecffGcukxpsvY5WWUWHaP5roesa9CF3opUPav8HeVHWTwwjyDutTxnP4bxeEQyDyf2SVjACqc9e1mLaCP",
  "key19": "51oqDAzn4AFjHj5eLLofYntmhXsVqhyqP72trGbLv75agVam9fj9mQiRR6ZFoeaQrkLGTzFpQQ7kCLtqvk4RvaB5",
  "key20": "gpWceXSrtuGQ9VYSo9Sr3V5h9tMoUgvhRvUQkz6D1L9oKvHCbT2nDbNaEgUVWZhF497jJ2qZQKcMj6aiYwYy9tN",
  "key21": "6aiCefwuodSxPgpH8iUxCZheaEyTxTkd3JcTvE2uYU5uF2MhbM7sLaeDyttdMQ5hbWcwaeDv4wtuAVcD8jDi7t3",
  "key22": "e8g94ngAqg3t7U55NX226z6wPpsMRCqkVcog7hd9xVzXkzr79oVK9jhJBaUMLq45VqpYe3UePJwr3FbRn34YLHZ",
  "key23": "5yk4iPzsmEanZcT4RVPZK9i2L76qerzkordZuPFJ7UPgY3NTyTfRm4cDQGvQVgzyrmmPHkNypXGSntUtcJbPBFam",
  "key24": "2MfMNyfURtDCP8gnAwZp2CdhhpqkhB7SpVHVd5rN3MSH5PkhvNPyKrYML9rDxDkg7YkUnUKgxJ3zUvQGkaFkGQHw",
  "key25": "3Ma2MAkGuMrWGaEo3oByXbyy7pYzfFPmZmvVY7GjkTpS9TkP22XVdY53o5vrxnD1GH5nWqZtaogifPRDorwySibA",
  "key26": "4m4weNGuPrCb4h5RtiddFBEL7KsM6Y9XRuDXHEc6YMe2FzzEGtk24z9PFAxxx3ZREoNmwzcjSe5oCV1KC1D4VtvA",
  "key27": "46Kt9JZGc2DWzo28Ps6N3SeWZooRory8RxxS2NiqwPesdRz1PVQvRYiRm5x4AW8sMrgRdqWPGiaCT1hWGe52kRBU",
  "key28": "3mFKCQUCyhWjY9nsuVB1FnCaj96G5h1htcb5FnzQhszdd4r9FXkAPhmUke3D6hwqpEFddDg5vCnNGWaq8pMVyXUx",
  "key29": "2hLkubyHiHpQqkQG74CPmpu3zXHRkCxkz6tQbcj6g7TWrCAaVuGUFuiHWj2jywqoMMTYcEb8ToXCrpJ5j9G8bbLK",
  "key30": "2sh8jty4w52YH5WKuwbRZaL5AhtKe7Dm47yNsq5G6WdNGDJUGjw64fPrpzXRfajDziPVKjyY2WfSW3jv3P1ganPW",
  "key31": "5Gs1gekND57LCCSSn2ioodeikJp8L1VSC7XxgEadaWVFz8JEBgmd9cM8EpVTcAcW4ZPzeedqhMpPTSkNjY4aajDd",
  "key32": "5oBbbmchUZHBU6xoFEW5pfBAC3fLtGbn7b4vbxYnhYD81PxeNKzD5frWrn94BSAC1cKNiLBq81LLCohRZMYUaAzV",
  "key33": "4dFri6zbVBcziLPfqYywuXfd3ai5RkHcLGNMHqeBmrMFBvS1qLVRvXPCrkYDrUVuj2fEJAUgb3R4pUKdVjg6FM1R",
  "key34": "56HDeiPhxa8tXuTFQ3qjevZHsToodXZGDQ3eTPLkiZ4ekDXFjnsZaYKobrTdNYHcQ4nZuv6nEAuFNAy1cinLBQDZ",
  "key35": "2GzGoyRw8fRX8huufAsptkNGzMJNdzuyRQ33XRiTqoud5yt4cEwpUwzEYDv3PbjzXC9Ejk17y8CjzXBMVUThZmgV",
  "key36": "5mULevYmGVFZ86v1AF1NsYNnoSv9MFKmAofCKbGEwPQ6XuZrApmxNACDGuXjrijHF3FCoE8BxrsjsqtJFKjJcHg6",
  "key37": "3p6bsK8VymgAjKvsR4nXw5fxEsqCaoo2m3Q5wrY6jj4nGAdFZnuuW9WSjx7JhCLMDFKK7u3ZYQnaC9zyCy14Ttqg",
  "key38": "4zW8GnhEnRRgBjUtAo25NtwgmLz2mfNGq7NbG2GZn23YYRsDZtdGveWBhX6NroGJSpEsZqoPfSxD1NApcDtb8RzZ",
  "key39": "4PXbR1HXinZpjNsF2Z4AaKshrgP3k25DCLfGw4SXCNdfUg7nizQfNeWXwxP9MgCuxFmmYTGupgheAsP8xNjxyUKC",
  "key40": "3CKK7fPPXjsH6uX1VqCVC8qFnJT6yGHa3kYeKGSrb3jVSU1MHbZMM6DoRHd9RMcKKo6Ejfs8AxFJw7HAwu1rV3bp",
  "key41": "48CRSF71stdbjTgUxeUi7CoAZewUMcwWtt2Wse254GywT5HWm3eVUvJ7EWQ6w6NHiQ7wyxVpPkkoYSsVSX6Tp1Cw"
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
