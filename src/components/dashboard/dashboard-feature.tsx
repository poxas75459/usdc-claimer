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
    "57RtZdksRG4fjwMH5amjxsJKdp18CBD16CFDr5dYCjvmf4vmX5BuxadjdeNxev2Ta8aGuLEMb8fcYat6dwptXoJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CT7mifv3HsSZ5UH9k1V5jWaW6oEdf3nBQnTJSDVQUBSGwqYaTancLRSDB9fmUyWiSDWUC8SLsEcTwdj3Hsje2Q8",
  "key1": "66mmrTmqzHnHpARdiC1AfNyEuy8evETmrN1HvvCM1AyRkMF82VN3oShGugpdBdTSH6A5fyStqDKBN7QfMsmUFfcM",
  "key2": "5wZw3vL5aemtVCA817bi1MieDGXkKQtdsxZmcbnffSDysg1rSpjWvuPJDsWgsQSd4cBMJgLhfiQKrxsM85p3BCQS",
  "key3": "2g8Q7CCdkUwqpzheHxQ7D16TUGjRaMpzYTPwrxB3BGmJYoc1J97v7UgA3Ndg5cyLTK7Gv5nXmDAvemosb5n3PmFm",
  "key4": "5qxeGvYzTWAFFjFCgLARaUchaWtDqYPQZjm8dCFiFZaGEwMPzcwzNsntTQLKuUBsZ8sAciWFVJcxS35dFg681eyN",
  "key5": "492GetZZeyS6ofA4RCBgQap4waaqeaKJvp2auMe2YxBvX2ndqFBfDtSY46q2t681j7LkisB2HwrCxMLx2RA3eaZd",
  "key6": "58k7BXEkz9AsjrndgZRM4Cqj3ocEt99vi4qkvfdLLCgh3mePvHE2KiaFrLS4YTkqqwM7T1dJgi4GzeWkrNkjAtbP",
  "key7": "qRg4hihLEWjXTYHBUDegafWCT3cyMkZDAhN4HNFdrVsBRXRCXri2VX67BrmenAx4P4uFqTDmCGtCUHvHx3uqUDL",
  "key8": "4YUM1sBsL9ASgRr4oMdgqcifAgiGFg7Wgi5u2dnNG9M3ok3ySLEaUkqhp5SQLTRzHCr5EZkbQrdhBLG2R1o7w85N",
  "key9": "46jnRPfE3Kaqf7jLawhAyjybKybEseQRb8HSuSH7B1969iqAHNpd3yrn7z4FwMVCQgs7kK4m3hjYxNd77ummQ9Lg",
  "key10": "ugSSDvUes6qQ4CLfS5ZkUzXdcH7jaai9Q5y6zoipMYGYdFVjrtGVrbCyJ4BxyTYRSUfYcuScS8fxAHU1o8GdvpV",
  "key11": "48cxsZYqZ3VWMSRPoUVocCkzRLD5PQjGQWkyB5JcLNfJncTFT3q4uB74YE2MAhdKV4bG9ZNzdpu5uR2rcJ4S4yb9",
  "key12": "63j6q1QhGm8ayjHBPH1d9FzFQ7Mf3gwgCJQcXcRx4mMNDeQ7yRauHc97eGXAtsWMvMhN1GAnCqGj66p6xXRGGYRQ",
  "key13": "xZgp9y1YSv5jbpjdKXmYEiGVk3F6FPM7b3RvqKuioCgKEufuwYcB8brsx4y3w3GGoJQePSPbKZ5dmm8mV8zZknq",
  "key14": "RvWHrb8UXjKaheNyhtuEkvR9CAuqjAjm7YL8kQDtgVg61Zk2JApNvBQjQyGbLg4AAnU1stXGBwN5e2gpCkkahzx",
  "key15": "3S8i1MbYokLHSt4YhJL4y3TreQFHvBGREYW7b2eLaTmgbHymfyLupnnPTjsMtzrumK6GXxBYB7qR4r9ujmA4Zocv",
  "key16": "5z6523gxA7iLwCrGWxrvfN5wzjYNEp438FJHdkKyHvRqMHWyVFSAwtxYqZ3NN81qX4QgxjmTgo6BmACsMVJx9zHN",
  "key17": "5G56uMCVxrgUKwJbdqsPsdp7B6wkVJADMsqgkMoX7gHxCdczmHAe7adscczP5jf6oGUoqB7RpKiMr2Gvi16iHMgT",
  "key18": "64awDpoa1GMhd8gto88mHpPVLii7CRpeUdsCuujhxihQEfLYz1hE9VLnjYdxuzE9ApdKDxkTuzKWY7XDnU2CKfVx",
  "key19": "5yAGvZHVx8rVi329cWkBaXQpy4JgBiJxgD1N8RTciisQUAKZyNUe2xWriftp2LnyGsw7Dpy2TGx1tLU6FmiE67uj",
  "key20": "3Dmv1fC8aakVhr5w9Y6fC8FXiqNNBUFttChT7rETJ8NN43ior4ZnaM2La4iLtkvt8gnxLtzYeFqQXPWPepoPzCgM",
  "key21": "2tA5bvqBrnvcnwsZj1qMzecMC8PQGYTiNu55NaPxorijCbrxEaifm66rEj3RafcDi9G11mGfnSRha3sudCZRraZX",
  "key22": "3Ph7zTrcSFU6nLU5sm8dKK8iP81NgEmxDmxzX8ZGXieEs2TdMBtfbuzkGoujn5qKPEqTf17SPGc3QZXmEpcFPa4E",
  "key23": "3DmNyTy8FAXq8uQCQ2GoSkFgjSpjLfgBu5c9ocuva2JNS37HEr6ManpHX5vQdfXitpsbQscvjS2a29XYEZGtpE8k",
  "key24": "5zuT2ap46AkvM1sxqeBeWPQVio6asPJgiwSF1y9ZqhYvCKheUBMe8yjCXjSNg8CCaN2y17yEG1Hu9D8GYmJa15rB",
  "key25": "XbYnFkQ1oJXHauoG8SeAWzBpjh8px8FYuAy9jUs3aTLeop9zRMAkwb68kyqrqi7y7k1GQkW6ZP945mWR8wLJNL2",
  "key26": "4imCLcH18JVRZUo9M7nGtGeKWDqFgr1N6wzTgpYfCK3ryEguKMDcc6L3medUcnuK2hDvsPFb4srjq1X1MVMn2bPX",
  "key27": "3r5dCJtSWTxjbabSFgNZGjCRgJQRmZWnEHaUFrua85jHq1T53CNRshzLG8Dw8QSBbe9yLj9TmbY32tBKNJoBXLxi",
  "key28": "4icUTiuC9K6vWEoX7RdcY3LA8bjpzomSWWCDM8DKMQJmaKwzBHWYBaDHgu8J9BxJKh8kqpA8zMckCwttzh3oPA71",
  "key29": "kWRhRPv6Gs5j3QFCf7amKS2yud415sgCgu44v79oeSEFzPXW15zm4T127i5B8hKbvfVi67RUk2aZ5DAhqs8edG8",
  "key30": "3n2vn1hn5Qe3Xvk17GrC9qrFNzqZNWJMxDDzh76edPqYaDo1fLWGVniBg3i5eXkTz1BiGXr1YjZWd67nSqp3gFNb",
  "key31": "ao3oimeYCTsqQGZ71yRvVxstzPD98q7JwSTECUcbnRddoqeGp3bLzwSZmp6ANbn2YVGJYLfUmctt3SC7zjaiZmG",
  "key32": "R3RSTocAZNdedKWoE4bmF72fSaSQfJBQoYoEiVWA12bMP6iPWUoui6hpr2Mx4ZGUocoW3azMpkmHzUMCthf4hT6",
  "key33": "2MBUaAscKb82YrJGcs6zmwLMadoBWTa9aDipCAYUgaiSbgw7uSoBzLuB1apffC2kTBKXcxf7GNawJfVDa9A86rFJ",
  "key34": "3A3Rb55v7XxLX2LNMycUgWe3Xx4Q71NSdLz8oJTbXfa6jTdko2RYVLyEU3XQzwES6dnmUQFKu5Qm25oKGamir4pu",
  "key35": "pUcdZC26WkSU9VNHcmRpi9hAvXtNcVrDX6PFTHVh8uWkbKKbm7vLwmeWuSbTfjTXDN6URTesqMGyJ1ZZTAaXhgR",
  "key36": "45sJPAHky8NdjgxwyS4eTihCqRfDjw8X9tvvGk6gjuBYa6781968zrJvE3BFXaXMcduV6URh7E6LYt4qurvMF5ss",
  "key37": "FRKMzskjUgYPWMLjFx7ER65rFGbnX1d11kvkAFvMeWQ2UftbQMQusA6QmT8fUSxL93q3Vt36xacXKTRCMo7zPZA"
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
