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
    "4M6nX2gJC8nJrNYKtbeU7at5cdCQ8VtsFDTaJCDEigU6Ppn9gzt4f3RaV4hAzYxpuxZLVL2SvpFwB3A25PjSbfZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uYzdpf7x5r3PxLvfVyaf5voDgJQFbhs9c87F1eJUnr92PRRyr74zdvc6fp7EaJZKiYcn4tG5KJFk6t911SZ1VSx",
  "key1": "5QQr1k7oqd1YecSnnrWqMA9JjP4rfhmvjUschdGThjZzAwUWMmL6mPDD1qKuTk7ak3fgWx25r9DeCBc9ogSnjWPm",
  "key2": "5Nc8H4xfBhL5neJuzNxvJFnKkoMQ2KaBNPtybKaDEspLBK9TWvMs8R2htX9fBSXaEvrj8NjCFArAm3vrw7v9aTEe",
  "key3": "5ZCLc4BSQxzxdEoudLMqUmeZyjBeAaAZknuSqWfFvh25MEiHM34mtSjdV11T78Gmqv8YHYpKVc9eHE9VRG6zvKFH",
  "key4": "GZwAKJybbsANAjahXkqLTyp92wmPtmn6Ge4NP5EBsZoqQ87HMij5ZLPK2TjX7AJSmjWgR6Gt7svgpVcGj4Piipp",
  "key5": "2iPsgeuVXrw7sjc8aZLpZRaGW14RNz6v8gF8VbniaiPS9NJQLZJwJh7Zpy48EQCNNS2jj9z1qq7kt9g5xz5KPhi5",
  "key6": "iYZLtq7u6NfkZCKRZqdKZ5jbN88oq9QK8paU9x4CVSKci2RPqKKxr6qLBD4nec8tfrvHUrEBiDmdzKq8dMHzvFu",
  "key7": "3qMzmfFybvNgzDidHkJm3Ven2b6km5QATCohYtHwSCXUNsLLzyR9zEz2K5pP35VSPNzUzCGxyCCdfaHjxGDQq8ZE",
  "key8": "4jLoFQszccFHxitqZ9nM3wQV4nuR8n93nNvNZ31FgPqbV1X423MEFfp6pvw66HF8d1KgR5Xtu6vtXJQEZGprmEnB",
  "key9": "3fPYbnApvpjYFzGcnPb1PtSHtAfqpWvaCYFL3fEJVKDrKRjFJEj3MTkqcmQBVqPTX8WmX3zzqywLsZZcZxQbFAsc",
  "key10": "2dCs7orBajdetTTjTepLqKGPBL45DG8B2dHM5qdGqJGfx36nwe9UFPu3RyPSFRzaaPqpxJqcWELT6mKvYbWZTHzz",
  "key11": "5YuPgHtdzrBLsZwTwWrLREoqEkb8SxVeRjhHUD9Hb2XYDxeihPr3WBDNaYmr5BZweAL5egr5ndco7hsdFr4dfcgL",
  "key12": "52C1gz2dzC9p2u2uMxChrHg4JEHQ2yzNDuyriYiU22i5BxqhCTYWar465yKcrQVSerU1qV54ET3bErCESjw3H1vg",
  "key13": "5kuFqVcQuLdbZfnypnwtpnVRAyCqi9X2a1Mxd3iWzhVqBQecHBWmNEQ1eMyrBvz9TGHinpWkk6srt4YqfSZP7sEH",
  "key14": "2etURSrX7fMWJzujH4MjkUSXzfMU6t7z2QLfEVrEnANBiXWNsoPRYPEniNAkdCtsiU3E75ESHuiKWx7x5X19mJD7",
  "key15": "4HWzeSZpKDcEx6RCmbGzNrLstMnVB9QXUNfBfvWWK5pR9FhNWdkR3sMLXp4gkMJTP2TBSz4uoQui7DSF379hXqiY",
  "key16": "2pePB4KaejS5FPkxCqS7mECUr814W5Hc55kWZfGgT1e7hhoXriFyLWBSgCtaV2ZyBR4Lc6c67jPC7dRJqoY5TT29",
  "key17": "PLELRxQXBEgYnij3HnySxAY8ae6opA3ZyPaCwsAkSXmq9gNoSEkcMpcFB4mNxxKCrDauHAQgBxun5roXsWbpHiH",
  "key18": "4dhb8s9f43kac32cwSpfsYfA36C54D1fM1E8VAUM3qA1ieoAiaaaA3h58irDA2Ay6Tz8BtFjn1rxo7Ase5L1EHGr",
  "key19": "31n5U6KViMJjyTvuESPuVsZ2323goPp8x7278UtLcKFVfwUk1fiPjLMyaxFe415hQGsLbr5CAL5cQpSbbiPgUmeX",
  "key20": "5F65DriazGL1wA7bhn8WX6nVnx6mvDSbakWGQTjst31bXvkNLpVSAPKarUqB93guL8QNhRXMUD5bhpynnoLX7dWL",
  "key21": "52aczf46p2kwZdFCAFbsMd2EMnjT3FNSCc63chjQ66Tko5cFEu6FV49SHAbgdarms265XWrfi2MNKMCRpDrdKsyc",
  "key22": "4Xp6whd7nNwbnRGypfB4pFGBuneHoHdkqLTvzf6eFe47LP3iinfTD4sfB2SavSkJSMYzzA4v3oHzMUFg7DDbbwZr",
  "key23": "3KgUcr5m8z3P26MTVE3XyR8DZWxzeepC54X4G6QiVW5QMw82jqnKpVBjSx5VrJcSey2kWktHFUSUzTgNH6WAWNUs",
  "key24": "XAvoJGhfaek2R49RYv7Q26RWaswYdtQCgDgM5PFTCAZJ9pdrndmLzFPPcfPeGZpcmZV7CdxCbN4gEZX8HzjokPj",
  "key25": "5ovaVsdQc4NnBNjLzLx8Vdwe8eKBBuC3TZbSzDRnE4HmXoR64axJ43bT451nLF9pJUNunyNHxdsPfgnJXBGDeDH4",
  "key26": "2vR6gpUzrSu8AGQ51k1XqYbHBAT6KMjG1NPY7rnoXEqFRsBEDwswqqpAB3PH4rDXoFR2tWPdMXEDekUfM8iM4599",
  "key27": "5yNeWufKP53vmordtJgVLXZW4a7Q53xCTyTkJHLbuLPiNAHXAK1sTd4nmGH2Fg1DZsPgCk7w4gDMpCisQmgwM9KB",
  "key28": "3kpkhHz6tCPCpcFEQ8tJ6bXEijocUys7CuLL721AXbSKyZXhwkn8ZH4ezXsY5TCYiH3Lin1rEnWSxwirFxHNxfYR",
  "key29": "5CYNGv8e4tGYDmppQuuXonoBNy9FZY3RQn1HXK7wrzPjSp726Xxo29f3hMtQr8AV6UTZmAmmKPc4vvxNpZBkc8nE",
  "key30": "4eHaufueHsvctjw2FqNbRDUJJDSiHzXncuQu9cNJeN7AXzwMz3MnKSM7X9XJHJMP68r8xUkfQJqguenjaEJP3hVQ",
  "key31": "96kwBAVZnwHpmP6YLoiTL1QwFvzV3B8TYzRaVQKJBhScPxz87w44sJuCUeh7eC1SwY7QdJDRR6LdfwKao66LXYE",
  "key32": "JuzaQWS2ojVxceh9ZP3djtzQwtL3gRpWDyL6rwPhJXKmKxJ8PrwDL12sYFPccrdhdbnj2h5mn5JVux4z58HHjMA",
  "key33": "2T9Nn6tWojhicRAfc2uVqvGsykAvzCnj536zZ99SjAPt2dn2xtjKyKM5guE9iYXkFfvzMd98qMJpvXDvYwm57TUd",
  "key34": "4vJLnUWZqvCjtEa9QB1HH7hL9FwVr8mzNGtgeDQMavHoPBCTKpZeJo9z8HLFs8PYgEgCbpi3UiSHfNjfxtwEg6Br",
  "key35": "sh3CMV77jPSCwXT573d2D7a528GDc4kMv3gxsqgD3rcbjCNYN6GA3HKngAggQxzaartA8WRWh63v7nRTptHQySY",
  "key36": "3q8b4vWTq8wZ8LzbDo35rPQEH72BY5CZPRdrXQeWThxeCDh2FXLSrQ6uwFdjkcLp5CFvZ4Hxf2FMkqRYfzhXYLcK",
  "key37": "4feYbhF2UmpzwYZ2WuqHnGaqXfe8paMWygvfNVuxMBATNH9W1c3CxDd1HrvfCB8u6ttbkhjDpjduzNHderxPAH2V",
  "key38": "3VHVsSbKaBmq54JzUT8CEkqpxT69jB68TLXz5CmwTkL5odmM4ui9df9Jsay4zEzhGP3gRST8479zozVcnXVeTsvg",
  "key39": "3YW3gt5xUtEU7G5ryy9QDdimQFVH9eVGgA3cgZKcVA8gWXVWwSZ34eUkrjnNr8jcyFWE12gJobSj8jp4cSLD6fPm",
  "key40": "5sHUMzLJPKjkKVaL81soZCyt4HWs1mZbTktBjKUXwzkHq2hxjar22vAfHFC8coNKHKUCzrfLBe4Z58QsBpBqoQai",
  "key41": "2bFpKX336577Eyv3HNc8wwtPvkfPTyQQd5kf5cPrQdtbUSFZz1BUUMDXAnFijA5LBAGW6rEocd9Qj7Vwh7Aiq6fr",
  "key42": "5gu6j28ypUf3fwfG26eHExVRJUqphVX3QB4Dvb8Mcg5G9d4jBLZuzVn6ZSE6xzRMxqmzqUxCL2M2wpbhJvv5J2VL",
  "key43": "5Lx3WmbDDUCt5R9zNWn1WaEiaAarzVUKgeumJ43mCkZdvm8PpDStrpUvJAyEtM3z5eBBeD8i1EP8ZrqnLUU723bG"
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
