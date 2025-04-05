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
    "5XEpTvCe4WMXjtZPDnDbkhKkuk22SauGE8oj39gaP3MNaEMN9QpjdCJLrhC3RTzbKLyx2LC3zsuqiAk8xnjbRus6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J9C4htyZ7E2yqBvMGCHWgsh5DJMKoGMG9djcfXmr6G2T9TqpcNjbeDdgLJai8c328jvS6HZTeCekrpqJuccCKTf",
  "key1": "3bfoN5W24uvbsSQikNXQb691swbjzUH1rvtqMscC7xrX622wxouAA8wJTveK77ptfKN7aQStAY99UWEkr7FKA5x4",
  "key2": "27dhD3c3X9BqRzxfFEreGAtwW7npk4op8wvrsxUhEDegwPMkYTN3ftfci2CTcofxCs344bsAsNXYmxAMFcFffMKp",
  "key3": "618nKRLM82rhaLnXCaPodbQKLMQ59uiLKR9VzLPo2c7eQnxLnLjoKz4xMfRyXcD5qZqzkWSJTRC3vjihzg3aVRN6",
  "key4": "3aHVTzB54Qb1oJZxwNqe4aZzna1vwg3H8N2TMiDMNQW9KzH4sUNpVb3ctteWKkih76JyugKmrt3tqeYDTjEyr5xd",
  "key5": "3wbc1GBhZ2Zm3rG6ZDYWzZFu3LBJGDahDG7ofBTdu9oiLJUrmcdyCqfavptB3UFkcaDvVahVjZ2aCW67W7K5hGPg",
  "key6": "2vUnsbAzAnTw9WLvusZCtnx1YWUJ5e6MfvStjCmsvgiSJACqxXGHRpCNmXMmgniYtuUwC7GqxU7rihRh1ypXpTBk",
  "key7": "3KdHgNk8b9XoTyJMCxuHjNxgERCSYVCSHf9RWrgvdqNHWQudtpp5zsbcjHg1WEGErvtCAKphvF33pEZuSyJ76L6a",
  "key8": "3wao9r6Zj5wjgCpaaPD9vYQVT1Q9Aqu6LnV7f8gMggHQk4Xzf3jFCiJSDzeFWwJMJoXAX8BrZMLmh69Vdfy1AeQF",
  "key9": "5i8eSfuPpWTj4Mkedvs73KD3vt4sVGbSSdBAP7mpYJtGB7tmpi2AqEnqQr6xwh2xbMgN8kVaB3onjvfXxLn6deJE",
  "key10": "2Mrhk9AXH8QAemXV1VeM5LzyW7ytKSWZxiW1d8ZX37NpJtpX3Dt1iJh4S4bnH3BnLyNKkvGvu9FCtqNw4JPFdVdK",
  "key11": "PTuoKPf9TwjWdauNfsxV5xApFUsxHHTLs8Cydhdtsx3kpMKCvxLjqeQtHPWuMLiuJ3KgNjvYYz8KseBqrU2thqs",
  "key12": "3239PGEMvKRcAiGunb7qyq5PiauurEuZmrg6MjwdLZjDHquGEeV3peBzNGM41XT1t59NL2xsCt9Jc2CvfG8wuWCi",
  "key13": "4J7z4oCyf2WQPH17uuEAWvJPyaoCXSA77wVMVadoCSb3Cn4w3iaRUhaeCv1pQJt6UhvE3PY1pXZAMC97LnHpPXZU",
  "key14": "2TjCHTrU6ZXMdonfhtBUBS3tMhSfU82gqrEY7Hp13dLsC6G8ak9Tz8mUGDGteMigQgMZsW3b3KG8uVXwBvWLz78o",
  "key15": "pJof1cmCWHyyFTeXwwNpjzusv6UEEgSdrdNLynxCR7hxbcWRpXdKM7U4KDw4FJsfiUaYDc2VYDbAQ3tfGDZkkq1",
  "key16": "TTPuukkUqAYi97q8pNDcacYA1s7Bi2b2aoTZoM2oNYNC4ZiLGGcdLtoCkaj4uSEWxdosNomZwwzQEu827Uawp1i",
  "key17": "magccjEVYYE9kmdXR8DDWssAdXKJuQTSjZaPJBk4aS1KLz5D8bMXvdgDn9e8ZZhiUZQ7a3XhGUdrTrTtByW5QYn",
  "key18": "5QcDhdGQDZtH1bUfEHjrSRgAyuHSTm8WGKBhNJ8mBD5GdvdLSks1sxg5TooKWZxsYfJfmDkrA2YQn4pr2hiZ9J9U",
  "key19": "2HHFmcKBKfWdr36quy3E15goVKT1PB1wRXmbjMZ8rGxTiPw34NQd4phQTGXhnWS7ZwbA9h52kcXs1VwDEWio8xci",
  "key20": "pK9NmGE1y38iVejwaW8FPpBnnNPWU86gUJNmgqasUy8GCgyuyrPkAThqPhXNAdXMgVWG3QcsJUXCHR8XtZtRbRF",
  "key21": "2yFqHtkB5s4EcstEuppoLBHdN9CHCicyYTWscXfvx7KPFizUBrtuV1kGyuLf92dtrrK18hNtaVQhdJ6KbBx2UUoH",
  "key22": "zJcGEunaZ5MZQEzKSnDoZxBT2StwyUyN2hxQAZCYZMjrnnEwGXvVPFmj9UmP737oWRXGuUf7Hc2CrXEqz9ANVYr",
  "key23": "5FhiZdCt5bB2s9uQHqfTz9w7eH2QVa5mTmMPTZHPehR97xA6okSjLmGxq565GnsvGUkQ4DzZvDTj34msV4DQ7JNL",
  "key24": "3SDAJE83zcNJk4EiMQCdVWzLoJW9XwdphtqDpJiPfyM1amzaZHDcqgiVRGP8Au3USFv7sb59BFJ65ZJN2irKebZe",
  "key25": "jPFKN61apoAL12aKbWQ4cF6VpaYBp2Si4sqjVYwFp2DsDeVG2xk37m3Jc73iWvMwpoNHfNjc2votdrhomsZPbn9",
  "key26": "2ruo9uFjgfZGwjQf3Rh9JQ66FYPbaS3QiShpQ5DSbRiPQwianeCdWzxE1yRVbMfT1qmDkEypkvc6BH7E6EJgMztg",
  "key27": "2Fhuq3v3zu844SQK5HmMVw9xvvyg1j98u3dXwJpq5wtvHQVZwTN6SAkcG23kQHFE8GN1abHgqU5uWh1vCzKSeWaX",
  "key28": "Ddy6pCn23VLd18Hhd6qVEHQsochuvL7sfEA8piJ8UnZeaKWLJNw25gdLXBzECnK1dNsUTjGowY7Ur7e4Qwe7uij",
  "key29": "fSoygFjjWsr8y76iawK1CRsF69FrY3wCUWkmPT6F2fjtujP88C7NzLsFuxXRfxjpGyucT6zd7dFXf57nJ78EqCy",
  "key30": "436eXefP8ug8VpoKZeqa98XJtsvVeVXqG4TMDfoWMGL6FRF3w2YysESgSGoZXFLjkpJfSeRttu2G16BTVPdGhiHU",
  "key31": "2pEELLwRAb8jjNic2cKNtG8aTrBX2iftUN5pDshQHH6jbvCnWuuTuWnqqZkuXrfFPkaRyftgP26a3V9B1DgZz6ga",
  "key32": "5D8wkoYxFsMaJwwryUyMRak8rq2GaAw5fozAtZK3QzJy1813KE7BMcQJEBYp6xHxjCyy3Jqzo2TTttFv8o1hGrNx",
  "key33": "42kq9ybybWmxZ7mUmZ3AXPJzHwLtWEYKTzLRyaaSosfmTiDff56nZ9z286XWWFfdtC6bZWiLKPK8Lk1eMU1Au8G5",
  "key34": "4Yxrzdx6ysvKEobTtXyym5rR89uWrDLFyhDn2eG8XzXAkBUgMSXFymQkzKoWvqWJRZfhRn48KBxZ8ZEFgVY5h9oK",
  "key35": "2QoZzfLuPq2eimuffM3jq9vv1AFSRhG8J86QazyR8rp5iSeDCUbk4pciUH8SmZkaM5Zk9KTPpduKmZbtGDPHPUHx",
  "key36": "rv2UC6Kfzsi9X9euVs2P2uGk8tomNcerL4h76gmrEyYQeabAqioQsWJ2NtP4dxza4F66pc3Bca9nN274qNs2XWm",
  "key37": "5iM5RorZ69WcuCD57yR5NL82Zu1ewYo5yuLAH2ppLrfapkHjCzGnZdsP2LwDRUZhxSd4Vips8ATJGEsJ12kpfRmm",
  "key38": "415zj1MWYKybgyXioMUsX5aQXnxjtDnVUzhH4ou2X3V52hB9bpFRoxidyfMrHKqgeFYoWdz4ZvS3SL7LVeskSZHN",
  "key39": "2kZW9HfexAMitG9bWMBa1cj1usv7nfQoTEHjs1g9e4CjNnpKh2n12YZbaA6PX92UBUKStNp3CayrmCw3MJJkQShm",
  "key40": "48B9W4UpLNww6parpU7sJoGKkbTz5MCYxsPPiQsPoZd14eFUHKGSK1Q8BeVE9zArx6Wk1MPRsHyNi1XAEGQgCFco",
  "key41": "2P5t4x1nUkLi5eZFuyhP1mJYM3PBp8LhMgfW2sVCG1aUkecftRLHKdp6rPuxVbQPffgTfC1Pn28MVx3Uam5GsvzP",
  "key42": "49AHNCWqYypwHgnDpmkhiNPJ8mLxT5sWJRXCZNBccsJPSH9de5T535arGh8kcC8SUaaXu3JoLdKztyXveQAPn7zu",
  "key43": "382E3GZLHPrh61JgEFUaauESPoAq5yPVrBgLqocE23mC54otopsFemR8oqGyYahVxU1Xqdt6W7kRWPtR3No8442v",
  "key44": "AjjMumgWUWEm673DQJkZBWfb2Lks8rxKz9wp2i8oYkK9zcJ4w4VgbRvgCZiCS3L4DaEdEdFkQsUbUQrPinshkXA",
  "key45": "5zz5tvSEbgDW8pU732zYF7vJPeavACvdFESZyXfcYrcMEdPJ2e7M8q11VVn57ghwdBijvW8ZAKCEXynByVySgsMB",
  "key46": "5tycf8dntWY4XTew4YX2wz7qmgBLDyKXekUFf6hc1dCUFFjMVg9wgqziE153WUaPVnSUzGGLGtrg7pBVwwEXFFJ4",
  "key47": "3pvhWBhM1tMo6gM6vtQoCaMVEK3LWPqiFV7MMCdKsJLAwsgbTgNARY6XKR7WA4f63G2gFHG971dhY26ZxKMX12A8"
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
