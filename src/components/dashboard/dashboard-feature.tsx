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
    "5GWQCgaBRroeDNDsMuQuKu6V7rf2DMMYpyvef1EGu569kr9UwzV2V6QGGCdkLbrsCKMnLNmwPqFbjtoKxUDHtSK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66qw5kFbp8EC82o1myctir1Ud5aZ8HZRbaTjSbof1qd9oqHQuQw5NQeRZwApRYi7PD4BMuuKbovVyQrAcD7pdqBC",
  "key1": "3RPqEzDj2HBtkgqGZnM2s3qhNYbjZZ3MuxiJBEezEAZz3MrQ8dajGFxQoQPj5kyvY4abNrUC7JuvB3tam8JqeS7W",
  "key2": "5xYDKXt19MQsQSN9jjas3TjyJoFDWrgX7Xm7HcQqPNUHzSvCSMUJ4zvYF7o28HuHxmeXXjMSPM8ADxjMNj8pv9CC",
  "key3": "BZaHyZ6kDS16soHPf2CZiZXSQyGSvJ74zCPq6Q71ZXmsUDcDuXgby8GjKGTn5JrfdSH7SJNKfDG11SpsDZVGqrt",
  "key4": "2s2FUUnqP6YktpFrjTkXmopBpWktBZkKjmWwN9vsevqcT9F6Rnx2NG9JbpicW4Qoz1HJwTsRnvtsaiXrUZAaneDs",
  "key5": "kCxPDXZKn2hwZ4AgPDogrsXbNSfpHkrWjchd7fMoJ8HYhz8zaTZhPg8RUne9mtwUfb7Sh8GbuKczUewgWWKBcNv",
  "key6": "49nhM26zFF5Ku76Ds5uLQz3rq3tGMktcnWnuapjoHnCeZp1bQfre9vUMLvVmMVKvnRXL5k66QpDTeXDdGEhn5Krr",
  "key7": "4kXHYn6qUDz6nMT5rY3Aqnt3w355c69RRc3sPgLnbRqTzwUfV8g2vbtD1GYSPbg89H39bf1fX3aPVmmv9wp3WpeX",
  "key8": "2Wru4SBu99S2hnEAAjfxs76v8jCg1v5ZsoLPm1rmX5G83bWS3QaY5f54Uz8jnVxomW85yAVEwPrES671PxNMwA48",
  "key9": "2ocgpbmnohApBcR88WwXrbUymWE61N7yCkQsovGTeQX2aNm664kb1DCoAWPohsUJsgPvCTB4ZHHrxjtEMfou4Wvv",
  "key10": "58uTnpKfoJ4UNNfRNYUSQriFTu2r9CFzeCMgLpstoShE3i4bMsJWV8LVtKdgFHHq4W59VNWSpq9Eo7wZEpZoShYi",
  "key11": "3f5vXXaPT89yEsgvetvQKUnPAiXaR73RFr4SAK2sbnTbcN12gU7c3V1L7yQREqhsqAWa2ntFXYXrY5ERFBEndbiT",
  "key12": "xaMYdNv6YJCSUcJ6sW93Emf2P716ztR9jEoG4Ai4P6i3vgMquSVdko1qNJQZekaqcejh9khG4EbgQzg6fyMEyMb",
  "key13": "2AGFruKzcYjBrA6LhTciZnSekx9EDBpLtmbHSBQPm8XpcVm4pno8im1dnLXPeZwXyC3175XKJSoerFVuWevh37sy",
  "key14": "5vGbhFDiGmU9Lt5KiVoRh5q91wbYpNACaNcyMVE11UBDLg1xbRFXyZQ2TdqXB6HBXM2Qe2S3TntQKbQG9oYkDgyz",
  "key15": "4iW6j1vsbX7wpoiBLNnRNXZupJh8ZBBRBQudFLzewjPcKyvhSPavV72KQbmz42eWJgjj8nrXHJuUiwYaSw9StAMh",
  "key16": "2Wx3Xer3opgZMhR634i2uwneSuFfU6zDr6obV2ETvBcU7tFRd7xRhntmqWbRMoTdRTmTwbJuBjR8iDQstUrRyNUc",
  "key17": "rNdkggzgD5VpTd1N96a7y93aTpm5nJpyVBZMEFbkErNKu31KsrDLTbDrzFb38nkgJqFsML8ypNq8gYKacPYLKYd",
  "key18": "2FMntYDum6TVTPnzTyqzMneyo5XBsNxpxeDJJZoKVM1RsnNBw5ze9XhFY3sK564GXZTZZqMiy7HwkdJSHCpkhZio",
  "key19": "3TErpYLMXUzmvWaVrdG35NE8eXtSSKRy2U9pimZnFCTw1oZE5SAzcRTAggpMqBNiMzPsYxyxn3JN7UCuPz4Vpgbt",
  "key20": "5kDNQhmgCW2DQdkGyagNEFvuCDjDQgiCRkb3k8VEk6GtAQJQMB5nSNAasbNNuCBfW4xdLQMuuxxTMk2rgZVcDuee",
  "key21": "5uyaedwD1k8PvtFEgKWu2vQz59kXyS5j2GQFRFz67Va4Rpy9Wg5nzSBSkMStf5QRMmmGkL2NHBpKD258Unumd5ra",
  "key22": "2P3QubGJYmP2qnbsAY4ESv77se7PeQ1UbWp1MJ17kthvkipPUoGsR7LgocMFtRwhHFZRwZursRB2z13e5pZCADQJ",
  "key23": "3t5guAhVtmXRFg7PmaGhjBGjT698ZFMXNTdje3iz96p92at5t9jD79WKfvzFp3gmz2EzRLmzQ5Ar6GGM4HoB4HJJ",
  "key24": "4y3Ho7Dj37FCwxJbfoaUGTPwEzV7mtTwQkDFSNehXMheeMbbUemgyPx4xeSuaessCmR1wen7Q3gwHxXWdCuuyhMG",
  "key25": "4NgxPH4CTPfmQDKkeqcusnkPisDestSKaRqHqGEcG7TeNDqJHNCUk4qsLRi7DUJYj79hYMZ1jQjAMWJab8MZhV5x",
  "key26": "2TGhenyzEGz59kLKxEH3fGeim29P1TjD5wfS5qYyLJpVVohJdeVzAaM7CsZi5rgWEAa9Q6uBysQT5qd9Xe3QUdfE",
  "key27": "4gpdAUNcfHdm5yfD9xBgVCDg97JZEG8z4JgP3NEfWAcWFnSji7Yz6ZrrDzxEgziLXvF9Zk4vfvFWKu2qZ2hBSRHf",
  "key28": "2pSB3Dpy7dTiQwU6KLkuY4JNFh2o8X7sFTax8VXRQ3Ph9x344JApFV58imxaLyw2W8CRcVJheKWqnei6eNm4K6ko",
  "key29": "4vpYr7WYHiVkibnGeFZaLYTcp5xZLamrgBYLeFQTPZJusUeS4ejEfi8cCRhP1Bt89zhqRpbZBSanTJw1NRpYR7TP",
  "key30": "2mjyMLuVyDx4U4G7pzjqchJxn5PVLvADeVThr9PY33Ke5vKU7S5NX6SwDpHjTDJ9JLWmXfMBQAmBLd2pT7QGgnXg",
  "key31": "kz8CgGooPduLnSDDmH65F4td95gHez3gAkcGxzpe21WqC6Ru19sarRbu4rpgZJhhxHkADVFiCCLeAYjacnZnxmx",
  "key32": "4mNwiAoEWBrLU82AeRFZnX4h1kNsyMXnpsdMNMdNBst1nr6AYzeghoSHB1iJPwreyqJdn3HSNzzgrwpfG7E4rApM",
  "key33": "3Ua8RVsYz3TF9EdMN3JeafyUFxiHL6ziphZhmgEPsAdFEqJGWtS5uqUeARzeHCSXtuNctmFPchdwfrhNdqhtdu3k",
  "key34": "2PEHUbVAbLkbTjv8SfQm6ngft3ZpF9NRZCKRP3ZqPG62WyDDbsHYTsLA5CteTpDWM4Mkb5qQNfSj2xg9XtNesrjt",
  "key35": "3d6YSQmtRKJM88DmCjMqKDxAaqwdF5RCj8bKSzPwYEBBf6VmiDsMJZqgX1p8Zbn9VhQFeayWkAWWCn2BC4khMKRQ",
  "key36": "2RTVF7xZWn3VxaxmRjJop2dXXS9bdPVQVi5tBWPxCFgHBeRgWwezUv1FpZm5FbNrGnckcGHNT19XjmEBKUuGQxbe",
  "key37": "5keY14HTz8yueeZWFrSkW8iLMbWtqsMgkHZpBJQx69ACgYuwzLx7ZGzKtmnhCoBtjiDVN4FsQXzpciDGvbAK1voA",
  "key38": "2zYprNp55Wt9L1Afzu7sW7QgnH9SCcPi2mpi7e3sYGiyYpBECp4TMcXiUrfub3a4PN2FP5WrzHdSLfwBwJvGeWMS",
  "key39": "4ZEkkuG4D16Wof2RAB6cFyjtTFKfwCTPwuvDWZNf52hxj8gwzRpsrn42ZNhvwSek69h8nGfvRRaVCzAiMeiJczqi",
  "key40": "2QEsbBTdug6kvnq3gu9DFVQfhxq4RKbMC4ZwsUsBHMPTPKMKGRBpeuLLut4sKEcwv93UmhhR1wYrazPmRtN4bQi7",
  "key41": "5v2qTLZ98GJ1fMPHsWAUEcYhU1utie3VKTYj5cuVBywL4zr3d5rjuxaQv78XsdsXBegq48uCxHjrNaTYeR6zxWrc",
  "key42": "VkoHq9g9mFncYt1w39Jc55y1RVNAeRwjaDuMNMb6ympBobvc5MUppnex1Q1kUTTKj8RcvzQQRAdTc6ofJ2yXZz6"
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
