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
    "3jJjDeLMAxbkYJ6mYCKc8GKWKk86BtrcuQXafJwN6tBr9uRmAGqN7FvH8ARuSyLxF5LuY1uBLv2aVwabKFzQUoKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fTg4d2NMhmkpXyyg39vG69zky1DdtfHZsPgEfhkXjwc9k4jbToJPfUUd7UjnjJf4NiYau1YKZD1FM8R3RSiifR",
  "key1": "3bSjg4q1C2mZwULaSXd4S5nJffDsNeKEC9ijCZd9uM2wYcKe3yqeqUtKESvBhebbnBLkxURzGFFNuf2kFw7BvKxh",
  "key2": "3WMQcGPWJbHuX4hCg9cDchfXfdM4zFcfXE8gc1zi3Yc2R1FJ2eiCGJ2JdFWUvT1Tyqsut5oimHunNDQxFpe9rpGw",
  "key3": "W9GdTVup1XpnifnsFeQqKFbUGVY2AczJecXgRuUsri1b2tZ2VQmHunQKCEm3WKFfXr45VWTQokE4aHrw5ECMXEZ",
  "key4": "n3XRzdg7wfa3z6XnWd7pVjwD2esFj4hneKgre6PWUwwd18DEDroRpDqx2pKe6hQs3KkvvGdqVWpYFG3sARFVwuw",
  "key5": "7JN5usTKGxxofWqFXkzycimDYX5SesFJYEv4UdHVUwDrNDaEuRZBvjGbkM1EoPXajS45icbD8BMjKNJeqV7VVNx",
  "key6": "4nwn6WvSewUuyYNBLLUjPQyq8sjFHye75MhhogSTLvdsQeRYTB9LoJUdg5bgTC4AEp5gcicwc7iz6yECue5ep9oE",
  "key7": "4Tg3GjsAxqNzPr2roBdJ9i5RnLxstjpR9RbexcQfr6Wr6aEv6pM6ysowtCSpSHaJ2wRKrauZjmDynsUZ1T9NAAui",
  "key8": "5NGvwrdqsHERezBLmCxX5N4ZEZu8L47yrF14UEtmoZyvdnRiAnMMZuk2sGLH1AkFXvtPHPjPPyhgnsviu1WaiXQg",
  "key9": "5bbCoQ3uyivsnsdKvr3aj4GqVWnGs3S6cQKBSnoboxHPaHafEKhhYUKf598wGerXWFpGDUbggp6xopKnXTgRM7Jg",
  "key10": "44ZY1HrZFi64h9cxkqRn2zNj8a9JS1E5TFMMxHpLUyE2oeMrjgcDPeWawpBqtGh3EpfStPxzWUgXMTJWLdiLnqcD",
  "key11": "5S4vh2nqMy9wTyUxMxwPja8ctbMz7cBqmyNSH2neZpbYaN9rDP4vc3ZPh3ozvriZ4TqwFYnoNcJrAGEX66rS8ApN",
  "key12": "5zRBxHftH8hkRRT9xFJGXTFyE8zorCaSbUKXASp34wa7ThbrqzwhFBG4xeTLt5eDCghcPAkAL73tAjfAKf9avWdk",
  "key13": "5HkX1rPhrcU5rVG94Bb6nMR3oWAkMi6g5SzXD8GeCYxgYwCXCu6WS5pxck6xsUzuVPqHVSY4TgMdPSvgReBW8ZTf",
  "key14": "5VtRkHpNKfynKeCiGdAXE9cXrDRSLgUwcoLDicPpq3dXfBPWBTNmiNJ6XFrDr4fUE65kTo6WSxzDM3mNaLtKnbsZ",
  "key15": "233LBeUQ13VA6E6AEsxP6NE8H8ZZv49GnacUHUfNSX6s9ugETsEm8czQV7Jpk9g45whyeBELkHhWnTTQQTQmqEya",
  "key16": "5ziftPPnD2aaqK7JRmVmg2dTj8VxPbcD4rZmahWAArJdYd2TNPXPVaX9JJCDxXRAHD1n6fxYJNBSJvKj9etrJcJ",
  "key17": "3F48HxZ5i2GTfDgJ6bGKPaj8Q2FSj1xCxcESsh7Zf2i3vcoaSyZowTUuNgDAxtS6hoFWfiftQHHoy3J3Efs5d8X2",
  "key18": "4jLVx6hNUoa6q5jKBgkDGKos4wkA7M57x2s43o8Y986C7k5n1EQKys7KJzsJUCK6HRHnxm37amkRwEEfumecQ8Q2",
  "key19": "3vgbfPfYvRNnjNUE4n12JQyX8v2odCjQmhGtXzw4fViUHCSQbJemcyyA5mxN1vPwsKyU6X6DRq8YTkhMbqCZdwYb",
  "key20": "4xVSRAiGNKfEjwwoyBckufyZTA2KTRU77mcWqrJd16fZZzXJMSm5PwZusF7qocVBTd2snFxTJJM9kSCFG1A8ziq6",
  "key21": "3GXrMfw4zTEcDhJdQm89XhSCQ85bZqoFnntYGGq5Dsv9cpaNYaihxU92ipw5Lh5xvp4ftPt6fBbknX15DBuyCVWU",
  "key22": "NYkETgPMAnWzzoJJh5p2kGh9Ro2TsyEoyfBaERGPMrcUtQUWqND9s6yBmce2rFvcAATaYni35PjfArbP5VZuGCM",
  "key23": "5wNLgs1FwxL2oVDDLvwMiqUaxmtDXD3KxpVG1UiZrH6waZBdAgEtBFuLk9NAJgUc2HpztPPnbq8tL2HS8ivZqtjt",
  "key24": "3hp9RNqWqC6FahhoGFRqRx2PT1cwQ9CjasXQu8rUMgH7Kw7qG3awmYhUmhx4RjPtUTqd7qadnEkb3yYQAkJCW64Y",
  "key25": "4ok7RR2ETeYSdej4MssQ9BsPy5TqwUyBKdzmVpRTto4PxoHQ2eQQ6qLKjc6i1s84BAkNDmeRH5XTxY2Bbb2HqQZh",
  "key26": "3wRT6fynPryMyjVSQ8nDBYH6Pi7RYPtz2rw8HHHC6JaYpcEbsZEKnV73TQinFnzDLbVF5PLgVKCmcHdExiosGwrM",
  "key27": "5YuUE4WGrQU5WvG1u13g77artETxmWsHgWWTMEtMA7Za7fXt5adaJuQ4yyuZUj46aqoNn9rqw1JidJD7GL8quAtE",
  "key28": "64mUwZa9bLTzBjoL4hZnyjkprjJ8aUoLZr4ZJvPEGfGxp1hTJXhwiCdrCLszRwpeW6wMLv7WwS9PqzH4kozjfuaJ",
  "key29": "56crA2ScgupLBvhoyPbcRKsT8kLNiBae42TUXtUdpFu7HG4weph8UqmNU4F6mMcKTzUZFnsZeDrKDkBoCwBxxieD",
  "key30": "tQar1uw12vW1DeTdGTnZs2XJZ1o9Wk5YPe47gAaRQ6fqA5DerQA5p6Mk6KRKqgiwoCQCtzKhCbHCYYWsTu8UPf1",
  "key31": "3gpDWQcQM8ESonMvCu4uV31U9mRTSCxxpbVjmBm5E2t9JNbwHBPJvpzKjZ1BBPy9M3fP9kpttsyD5HqhvrUpcPdw",
  "key32": "5zBTXzSmrA9gUhnGaT2e9cmiqm7mqoMNmwxhSGjuevkKeEP66oStcpzga6UfCUpy7keRxC7FBBT2rp6HYUg8bngA",
  "key33": "65pPKcipspUb1U8wM7x3oYzjVVdeGUtjmJ8aUrVzz2FkH9c3QW3VFT2gCddQHNpqqhmgF7Hup3z8zbe3MMEnxuLL",
  "key34": "3cawvuRJvViVgNC5tvZcKBUWVCJCzjsY29aFWhMooYjS1WpouDwZF45jdKzomxtEmXQefGT78WmnNeK6aNHR89RM",
  "key35": "2XZcR5s2KdHhfToZ3u2YNL5YaTqEqpTQcUK8oU7FS5vGdqhkcQ65jW6XB5A5h4bja17ntCNnGJK2ARRX4yvt2GHf",
  "key36": "3ib45s3C7qxi5xzT5NN3ScbHs49Rn7ctvsSpxTkjicWvsGBkY53ZxivMtvAakorFfCRSZBX5FqXK51bbmK8HM1ij",
  "key37": "5D8t4UKVDMuRpnLXuu8YMUaoj2v1DW8UtCyfPQjSW5GVUHXM5usLG6qLUXTRNuSKojWPQXBVyt9P45ATtrES3344",
  "key38": "4MEfhhA3FPDtxMCS4sAkxjc7kTVkgvtWw59KZRKJzCkWDksffC8mEGxz8wUtA1M1bsYmshS8C2iTgi1Z7CbtseSz",
  "key39": "2FDjBXrkoJHo93AJginmkwf34eBU6AWYrcJtzuyCKYD8aEQNEEbn5CpYeri9TV28D8ZPRyG4AQ7uGRmGRMJ4NhUL",
  "key40": "MAbzCzGAymbJD3BhmQ5vqeu2awimtb97qE1WmsPKyxg9UNFhbN612dxbg2zMCkf7EPYHfp5edkErj48ZfQpPCDq",
  "key41": "4MJEQUdoMzEP6EChKhSToa31uiteHcfrZwtcxeGed7UXKVLFTiqbJK3dAMeWK66jfbKvfTPeW86VwFxzFhNYRwBz",
  "key42": "2jYYYwwVT1uYpNAMdufzZ69uh2szCqbRUryLj47ErAxWkxSC2MQ2ndA1nUUWegLoRJC6EhAE1VkDRyY2kciaxnkP",
  "key43": "2EfQjHTRDSenSpBQv2MsNZewp41nhbP3XQJ6nNVuVEicWpvTi5FAJSfuBFyy9bdD2DA7cMB8qAsAaaj7FFyVvY5h"
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
