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
    "4Dodxfsxt7oPLisFmRJLmfCHLtS9sRs9bLrwksczqwjrftsCrHtwXj2i4iCBUVFhWizTr28db11FYCESNcR7Xcas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ovJcrZwnFjv6ujmV21LhzHzSF6dzKwC3HTPkSkDBmoxjbcseiHhgA7VsVj29DD2qT6R9rJNHaaD5CHNShtUrCew",
  "key1": "5A4x7wx2HhBTjC2NQAxp2rQYZk3iWUkDvbeA8YNdiP6kL1tAFDajiwmxzfyuCXDMiezeKTL15xDX7dJSwWoKinD9",
  "key2": "3D2qLd2HyiHjgUX2nfiykQ8X6Ju8Uc1GsqCqDdGuH75Z8csZqu8KX5fMDnBV9dFWqYKgZovQxNcC8MvTdXTeGb9q",
  "key3": "2VUWsrYZ1PVPYc7MkZxNp2Zrh3bcQCgQZQDgbKAdHStuKuS8uNCpcegqqPWhgYAq14MuG25QfMXQC2jQMWuZwJGB",
  "key4": "39UGm4FszHsEjWhN1bShsr4NZsjvH9MB8CT3ngusri4jEyf1x3TgAL1LihuJx7FD1cr51dyHGeVyT8gnqgiZsKJD",
  "key5": "3Qtvfq2jRxDhR29pP3VNYXnbuPcknMgNxoF8E92wPtZwdLWY7NCYNxp8z5YWk5TaxV7teAaxpu35tvjXQPjtHQYM",
  "key6": "51A8Eaxw4BVtiUQAtiUarEWpmXuwd9cgTL6Z8LLsRHkK4h6ZnhdP1wxWWENSLoN3uvWAx9pyHYeKRigMfyCa2ncf",
  "key7": "3auD7qFqCqoYwCf2dnFtJo3y3PHL586DpREapwjh1YZDAEoyDNTLnMunStvWKojSS3GsHErrxxxwBZE1hPU33pCn",
  "key8": "593U1EZz6TDP176u4MiC27jXFzcU6m49gPc7rSLSmun1HBUC1sTjEYJ3M6eYotGyRaR2gbZEatGx6EYYBUbri2pp",
  "key9": "4N3aVtgfYy2ArCzURt221jTsR2Jz9cGWjJFxNzLhuSdffaSgyo2gDPvFBLV3TGysDTCUmF6Axft1WZsyAQcqhLkZ",
  "key10": "3WKyueF3r1esvQb3CwieCsyKZkDBFe4NE22LpV2kwKEtVJBKQcdQHxum7FYbA5UTPbiFtzwjmJRvJ4yHszmanwYA",
  "key11": "1BQZZWrNGxMjZX9yH4meioVcueVxdPBDQkVxzconXgCKEtiyims5dCsWHdHkij5jbJkdG8tVQHAXvZjLDQd7vbK",
  "key12": "4HiHHKBMKqCRWx1PkEbrgmDQRi3i29o5SNhVqPpQyvpWcXFk2gMudHR1rU4o3iL2gLqubDpNLqqy4gK8aEPm7z2b",
  "key13": "4sSDvTKJq4EC7V2Wi2c15mK7rAcBkY4EC4jrKAHyVtpeTvA3Z1D1YxQWgv2FZ9pGxCcznmdRdsMi1CGn9wf9GHJb",
  "key14": "43N87K7wa27uPQatUHAQN7j11HgXGwMdTS6gpETX2QMysCUMx7qA8j5skVV4uXrfDJ6Zwn4NJxhQfeNf91CJ3hrU",
  "key15": "5p1hfEryQfxhUmTSEN4YLG6QwLRFJfMVgHMMotVArGpASTkmpT7xmwdGTGvU69UnFB6nEEXDAB8jzZEkUEkMbp2r",
  "key16": "iwwmGKFmbc4dBrK26Evcse1eGoJHRkxXuaz9cBiaoLv6Bs1c61WBxreXUansnyyxMLknHQdmL5U4wDG6sUyXkzn",
  "key17": "xvSVwcnvwn2ckC7ewVFJ67MH6WzZugU9edMVT55MnLeBtzaEihuoHvuoXE5Nm8q1WXk63gtyUmbDwHEGi6ecJ5A",
  "key18": "5qWYeno2jipuRuVXrhoYuqRp33iedkFg6miF2rudhtP1MPT9W69T7B5r8LiVisox4CrqiPysiECLFekKcqQ7bCQ8",
  "key19": "4KaLpYPe5qtP5pSVLN17HFn1UBxANbrgse9YgbYAKjgQWprZqLx63CbrDtwaXvqADPmdvb3DPR4KKsvbhR2duk17",
  "key20": "3GBL3Z6NYgK6DE2JFSsxRX82Ef44VgAQuUGUuuSD9kQT6m54ACZU9zc6BiySwC6P7LaQ9ErRg3JRxagK3uFbQrmd",
  "key21": "4198DY6mwu1KrRBzECoSbGrVrePaV2z7un4x6E7bBjfESDvn2bEdrD9vQHPMDqgqnVdYvTjTXcvHBXw1rrBg9eJR",
  "key22": "5owZAZetwJeYXEafUqYQozzYZRUFpn1ZysL4VsdmgxR1zrBCM1SuQXmv3u8YJ6DeaK95U1EQpBSQNcmZjjiLL96W",
  "key23": "3VfvhAM3DreqiDmybZgs2CUep8BE9vwmjji98Rs2UfDHwvUVwwB7pfuPY8fYyGaivTWaPXjVPH18nup2dk7dDQmq",
  "key24": "5VpdLn9E5EetHEJNmAH583cstmBZkEhzqbqVTM6z8C2mSPUGDtTmLAGUH2r24WpdYb7y6kUrnV4Cd1F9wMKRjTvj",
  "key25": "3FGuJra7Fz6TzyBakDAKbMaMaqbqQZKLbGnq6V2wYxHbNirZqfZyXuMw9bjvgcBrFJZpbgs9XmeA7exWiezTk2Mr",
  "key26": "tQ94L9sdf5Ht4iZHuvHGSPyRDCvqaCcKBsQAStB7cPRk1RWsWgU7PPKPaY56zFhY4AZqtVFiWnU8zMyMhkU8QxM",
  "key27": "2g4FJNN6KC6Lrnvi98FGcBzbVJEXp6b13XQkeYVPR47xR2KRSQQf2SX41YtE28xVvsYVugyH9WX3h8Dfi8mLWA4h",
  "key28": "31tqY476hvggZ1NY2DmZt4MMtxxek56bj65ExXdHa4evrTjKZiEKQGGm1dLNoN6Y4gqqbAoix1126KEXqzBFzy1K",
  "key29": "JGo9yfANThAGL1UXnbbyuciqMjhyPyTkSdvuwMfHf7MChgSXXhhqArsmxCT7XcHeWeZiBt1NK5MS2YSkDFh5NgD",
  "key30": "ha2DDqk8CbPysBXTCTWsDV4eNMg6UJmikc946qrM669nHER3yCKSrvkBznmJQCtqVsT8QbBuoJSB6iWeERwSiHM",
  "key31": "533K3TcgsmhhKwyRA9XykHymWHdWJmNVii4qXet29CsVwiKrUkB6sC7NUK3LEMWeRWKcKR8nCkoySA9phRr9SJhT",
  "key32": "2a1NRo76qjKYmq898js5j6kZiTCcpzvYzs43JH15cmQa36bkSjK3t3unFGxrU8jN9u4ZRiQxG9B48YoiX9hy9784",
  "key33": "3bxwCCYPLifdSh3W77znNZNajS6digQAwsGo8Ee3Do98eBw4aXPxaEEAYv2z7KP7hfZCt9CMLyufN7dp7oN7ysj1",
  "key34": "3cPGHmi6HnR86BBer893iqZUMKnBWqKGjq84g9SAomriqtvfjmp2HagLkaXhkCveDj1wit5VEn8gKRHrcvm3FGb8",
  "key35": "5WsJJNo5mxF2A3fVkR2CWhYXKNfjHVyFKfVSCcBg2hP9HHyi4bsLCtnyLzifoDJ8LzwoVtZfXjrWMLanRuQGHGXF",
  "key36": "uNCtDvtR9u3w7rW5wHCqeig328SDXwwAD8NUF9qzBTM2MGsuPvNbd3i1NLdPdHbPZZFRiyxy3djFzWmJXaAhVNA",
  "key37": "4NMiDfHfJUR3wbbLkL6aSKHMWueAFYUUHAHjhtqNfAo9SJqviEzNBHsq9ryFRAMqtCBaNnrTeg3zvuwF6bFv5sm1",
  "key38": "3iDRT5Mg6nEwHMYrsYyVudPYKqCze8WPyPWXVh1uBLGUPyrpEc5u1sVLgaobMkTRZen47JS5zcP6cHH4ehEuzbpE",
  "key39": "5HcCETqkBTiVdtxDX2NFdxX3MB5wjBXUpdMPBpXiujB4Tj5PfyYpogG1fnbdL3DpGqep4SQUDE1MNKcBW1i7EKZV",
  "key40": "2kaKGWCgbno5hdz5kZj9KFyNdkjiCmzv1tG6Q6ReqzG81XkwNmrZWMdjcyFBHdyep7JetDPXhZtSGbEQCTb64KSm",
  "key41": "65rge8N1F67KisFwKpwJKJxjFYB4SMQCiLZGc2UL6vGW8u7YjJmgUgDJJSCwnp8GS3c2ghhvD8jnSGUvCv73mh48",
  "key42": "2TVuQjKFT2pxFrttXv2BeDJkr246fGMbcU5CnpVp7ZAz4XikWrpb5PdAZRxdcBRZyvJ8J7TT9vLtZazc2GUJHGFR",
  "key43": "5oUrKCW1u8699mJ4pCXyof4fZnxUiECzQFgYuspYB5NzgsomPSW9DCjPcrFHHYHJ4Y336Sw4gNWMbNUY3GJPswNH",
  "key44": "3hANrWPJeTTqxUWkRFPyqWczdsDVcaiYZotifTVU7vnTxuabtaprG85YHm1EvdiHMGFbYo9kZZQed8EtbSsmCX9k",
  "key45": "3YbcbCQEfdwqm9mze3SjGZkFqQ9jF7pLNxws3ptoYu6P2L3pY5doPknvFgocd25T9CyRkWhBbGrzaKAVbngXCV6m",
  "key46": "5op5MZTidkAbBNBzSAxjzRFXescyUjxNoVZ2VFSBHLQQWC4f5bWoW1rampynzj5BoXVyVEqhisJEpeAuR56MfSE9"
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
