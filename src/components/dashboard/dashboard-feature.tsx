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
    "4z6gYdbamjAbYwUbt8q1PZszr3NsR5xWGToxAfLpJeB9NLAMKKeaRktsdRTDjJL7TDkuqXt7Q85V6FszHPo5YUKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ssQJLspGb79EJDafZmC1q6PHDRyLV8W44erCe9MHDk1giG1YGN8rbiNBi4xWrAauwxB7TmNk1fUj7z6FXJQtVqm",
  "key1": "AMWGhLNH7ra2QJeD4ZngRrckbs9Z9eL1vZp8nNnaVHpudwqdNPnC6ysyyNXncMXjAWzLrh8ukqRVJhSdNJubAKL",
  "key2": "3b7jqLkQif64XQgrn7GjKpuLuifPVmXu28QduvNvgmGgZitvLZ8iAFgt5846NwLGJCwiW5gT7d3wpFdH26QseH4h",
  "key3": "522opnfa1bYF2G2TG1jbnD6BBXDQsv7u5dGDWHVuuLjiL81TDcnSVBVc3ndRRsQUosts6qhM3ozsqtk8kjMvLDqh",
  "key4": "2n7cunWAkNXLKtsNDMEKGuJkFZPM75kyw14GU66gh2FCwXBph8QTCqWtoBntnXMMt2JAAiHBSsttjAC9SChKkGjz",
  "key5": "3TE9uS37G7p8iJ3NSdji6k5y2a6Fs2PQmG4aobS2tJoevuLoqJTFPGLRTo3MkjeWuDbNunYadQneDMMZd7x2yb1w",
  "key6": "ZLKHHQ7yN5tqt2we5N3BaCTsLjZVywacZDh6tD6vV4qyuP5kUq6G2tF1e6LA3Hor7St9Xpi9sw2KPpdqn8fy2dd",
  "key7": "5iQhWQkDAAP4mJeaHiUVFChEXiiai7VAPpQokMtDeMoLbnrVcJKteM6fYhzQgQUsjDrQmd7dnm8ruqHsMM53T9DM",
  "key8": "2PxJ7id7sKuVFTxXB8qVikugPHwE6Qr2jUVT3LLBSJrsnwBEpFjt7VjGLNFiBwpFQRtKSsTYarJE9kbeBsDZCTvS",
  "key9": "gT6oMSzGwwatnA6T8qmzUL21WsvA8F5FrJjxd2tYjD691aQj1hRQrnM9vLdEb5f9mLNyVj7ZRbHqQ9ftxpKmHDj",
  "key10": "5m8j7rtb8penBEk6VGYAUnwwzPZB97buhtzLkowJ7WqKMMuLTfZ8d3NzUY2L4pUggjJq2Wya13SnsGxjuEPLnyhk",
  "key11": "2Ekh3pvDPQMnvTVjyjkLGngMrmG8MHthmNjNbHqJtduaatJsqkWgkv4vbAPycTxotwWwPMYs3DAgfBy7zYAFUuaR",
  "key12": "3KHLHNgVAKafqCGtdnRwUHTfs1jVWMubVjqWEySS9fbW2vyQb22dz6D4S4kiWt7GPUq8CDvCteCUorFCTAZra6Wk",
  "key13": "5epe5FowH8pGPg7ZTyS5c2bprbpVXgAh8x3KDvz8dpCgHKPfEyKzdCRdNUdWDRpmSygZgWxBHwrsVFBhp4vWv3Zm",
  "key14": "3gdvDaTrjXrSnYMnQWspjSzmrshznZ88nXUj6HAZTJR9Ngcv8PenMzq3porX2Vh2rUrtA2MfANtsyVjdgwiLQEcT",
  "key15": "3GN3sMDAMi923cFDy6KVfw2Y9GyBiDobMWDfP5Pt1eirC5T83FHzAk9X8uYZdjRRTQ1aFYn6k9qiwWr4P8i9JS5S",
  "key16": "UmujfCVz3w8wYa7wAobPQV4wEX78eXjo3KgWQfSGv1gZbRGa15BYUcMnhEPbzvynvf6JLLSznWpeLfec4U8rYyN",
  "key17": "36s6g9mVfxnYZG7XAbJnapbLaPpDEK2WLNvPVn5FhmtT2eUf4R6q2vefLXN2PqjTB1bS99uedfjeqcUUP1voFQaw",
  "key18": "auxcjK4zYio3D2wpLj1LtfpxCkbPDpRiGs97Z2yKcyVg1tSnB8Q9fLnk1YAuAKcePoYsjaLqy4gPs1z6Ut7dzaj",
  "key19": "3ELacEzraCK9CYzn3Hv4NhvFYHwsgPCJ9gvwsEyvTUfU5c4rdQfLudXqWYzbbXUeDNr6Jm3gA9NxyuJh4evSKMni",
  "key20": "yrkKAY3ks8JsQkjKufeu8J2DY9TBCuoWuRYYpkjY5qE8EVzgrUQTEvkioj3d8TaA21TqkRwTbrwRPaGt3rkTdSj",
  "key21": "6J5w4NKtPdY2jHVm5VM83fxVsQ1zEgQ6zZyPejVc4vBtMMyPzPnsvzCo7Car9eWWZ3ccntbbBRLfzC2DQmUHXqH",
  "key22": "4nbrmbBJ2NL4tUjKXMeYgSqkdZFFBocQTcm8uiVKtWrusV2KqwShxEbCKQcMQrkZ86BY8W7bmZUJKputbA1D8hoy",
  "key23": "5GkeA1qoBUU7jsMe2piDT984XftZZpHN7bzjn8j91SMJna979M39sooKPuwhqfvJ8A7fNH6jAit7Z5rphA7JwUes",
  "key24": "5DJmDShiMvnvsLxP7BVUfDXqoW1Kt7GrRHKoy5FFGYP13Gf763sWkDDQQqK4YKeVEqHsJ1hLQWRVd9jbntLMShWv",
  "key25": "56Wwy392uG7tKunueHSLXHbDkTSP8o2HiDMgRVMHd1TbAmoPkzDFw62oHn2by2fg5zNc7hdx6EZNMqUPpjeJHGr6",
  "key26": "34zdeFmWPabjg8UaRhKipQhzSLQYPEyoPFRo6YAviEMH7SLCTbWzhRfBcmBZPtXXzjuQsnJgTrchVcKTGNEo7PVv",
  "key27": "3c3vPPsXGnYD9Y8U9WqTAwzezDUzZZbcHikoJWPQu8AELdZmHiE1bWzRRfJbjPWn4EWgmWjqZuEvokcPphW6UitY",
  "key28": "3RPhvHvphPP4wHGvFo3svjwEaNHS6GrTXzW3L9TCpXZsbmZSmnQaakiRbY81trgACxwwDsBeYAANfYcGYcb3dxwY",
  "key29": "52cJY52gmP7D4HxcAQxwSSuoV7LBVsXihnYDDCVAR5Zfgo9aQdd9Pa2R3Y1UrTLsTF5HzhX1zTvMfkJywPRYUPw1",
  "key30": "5zpRyJfZmwFgHgj7cJX19xXyZuQtiuvSSbmygeYm68Qu4ji3M1GtdGuFZLhPThjBKbcJMkagrn4nb3VsFVkSuiuY",
  "key31": "CSnp2HvDbwLJM2eH87c6HdzrbnZLosKf9cyDAxszbPtm9CBdM5Riia9zrdSG5KYFVwaK89ePZLLzaPRbG5LhHXh",
  "key32": "2j3iGAgAyj3oyjwuxaB2PMfZsZfpjBWPDRXhUBLRxE572s9bbTkaG5QZbJD5VZJ4LF6XRvq9nuVx1xLqADJbNSh9",
  "key33": "3pZ2xQTXQZYRzSRBnnXMjeGEcZ96TJUUtfL3pSV74wxxBx1HEFuUJjEjrckoGAWnGnZzcKvHNrJyeYueME69vQAC",
  "key34": "5DZQ6LJyNQNCKdaovDE12g9H51yNG18DSArCziePVj33ZfKK1i8UntusHvXYPxSMdevVKUiP6iDmwoZBauUUyRj9",
  "key35": "5JHGWn2znSxA2YPHtW128StX6oBakz42zErpe4DeCV98kg2kcRsQJbQPeYW9AcV6mTMR3TQ67ycrQjLavvDTKzis",
  "key36": "5vc6MVujPpHwSRNQVXe4jsAWoWHMVQK3f1yMYChKBVgCatcmJRtayz62BgDakWR5ELiDYPcs6L3qTWGTSV6jTZRq",
  "key37": "2xdsMXR6i3HVGhzoAyRVycGj5TMWcgNLjwZu4Es8avp5q1bwu7sPXqpSwLaGnFw5wCT37dFG2K2zXPynx4HYRhUq",
  "key38": "2iXm58gHPBy5bJqufF1rAY4wzFbyzm5BA8trgtXnxKTGSiehzPs9XPaJyzF4SVRZ4ybzjvRpChZufj5oDxbgZRzM",
  "key39": "3qBtE7CtGHJ4fifrpjxi5KLMaFyzRafG2W38PsF8YFrs8jSf9tbvHYSqJgqD8gYA2FP2uhEKGqPdagfsygDDU3hb",
  "key40": "2hcYBD689nfBAcyQDNT2rzpySTia2p9w69oxj5Mohfmo4rAqanNJ5wpMRRViL2waXhNDoG3vTrgvfgB7wvXsEHn7",
  "key41": "38vUDUUG3Xuh2gikNzRMbpjj5UKEPSB9CcWG2FCWSkqdy1JBakuYSc5TPxztqvaGXZ6QtJQyW4MhAj7qRZoQ6e9d",
  "key42": "2QqYYtRPdviuihsH6TdSbWCvhfiAnRbetY79sTpdeNaWZ7UgxCphXoC9a1XYWw9aTbywjdUzE5kypkURoKFQPWkX",
  "key43": "5xbP3kc5yD8UKDSezW9wKnWYx1HNnpmb3tTjTGvQprAZWk6LMddnUUYGBkPYTzH1GKspVrKv3Cb4btNMuVVpUxdj",
  "key44": "5dTg8b8LZxrBAv1iPmVPmk4BnDb44LkdpoHufXY2RvpcJWFLfSDDi5mCk8iwJvXvZGP2xuawgx3Ab4EHFD9Qjmgj",
  "key45": "2ecVQxQToHQDLoLyMQNz8WcS6fgDjjs63SY8dYa63tYmXvYtuwK4FyZ18rn8MhMCR8bGBP7TUzUFufLEWhrtAurf",
  "key46": "wYczUjAaonTnLhja2bq1j1qEuGeqVTfwzfXHnkueffie3wTDJScU8p6bxZJMvo9ViGTW9XCfrcQVzT4NbMCHdjo"
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
