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
    "BJPa1dnYACzVQiZpp4P1F5tRhr6CtgCQbY45XhUtC6r5uUsrprkhqtQQLSKLBsRR55K7Ro9sihBv24n1EVCv6Wj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63LidhWpwNXH8ddMYzNgGYo3wxi5QJUdH4unPPEcGtnnU3XJtR9hUjSTxmV5diNxsR5mbiFefiCBJiBAdMjxQsp4",
  "key1": "5PaTuhwguFjnE7kYUNR5CWyjfscWj18dbxvn1ViYX717pBcdavgVrofidVWmiazEjQLdqYT1CQYdd9hLDRmg1dzn",
  "key2": "4dBawZYf2DkuPqrmDnZebeBLexicpmriuLSbRHAyDp3ooGhxELTNhoBSd4iXH95TuZ7Vn2S27r775fbLdMNuHxm1",
  "key3": "xnfp99WGC541qTY4FAMzAAWm5oXefgH4o39bZCAgbH135Z2QhM7ZSH8bHY5JHPuxuKCca9Gq1U1TZ7oKfXXvqMd",
  "key4": "3m9R59jjJtMNAhoKZffGt6qBbvnybyDnq6rVuh8rj6tmPcHCx7wCEc9nMW97Gi1QF9HMH9LWExrw5iKrE62VvnP7",
  "key5": "5dbisXpZRybgvmz5UXmLRrZkudnkPvFm679unHpt6dw4hKc8irq7HqeVHmhSzRXnbgDbZaD372WYpzH55ErEBhM4",
  "key6": "4Kzpna2fJJrLkJsCD4Pnuy1nQBYeQheNL6poPZ9cM4RyxwGjNCxRHGGo64y3hQqMte2USNRjfGDqSv35exAN7A76",
  "key7": "3DAFZXLMLUe2Vsk1vwoF46he1v75YoZsTkYyY7BqLNiEgA1G7m5D5FE5cuXcwCscVp1jxww3Sh3gARTp6wR4SCCJ",
  "key8": "5FmueYtLRTTZP7oKEePjdhzwmroaGAZXHeKkK9ab5js65Uo1UMm2mWHPherRk5H86uGsN9o7u55YYa5ux4UBj9q5",
  "key9": "2P3vXQpQizmrCSPhxhmUxzqGrP5xN5wjQ2VUWyiJ3M9xcyhPADSy22XU4EncvShga9wasgHA7zDBBKN3bTbYGZ5o",
  "key10": "3ZLJoeAx5gJCx55guVSH7GKsYr5Y95NpYJ6nJ6cdXeGvnR6SFWos9ovoCRTFGtLHiSDAXzbDFvCsqt8hbj3b5FXA",
  "key11": "72hTg1eqgYEZGmEHhoiKsXSjZHuXAkudXtdGYiVT7DWhLu2mHFoHs6RESeyBAQDXZUUNTBQFEPiKdEmW59Lyx84",
  "key12": "3BRv2fjKzXjiY1Br9GPmA4AwLV3ktZ26kqq9tuaQ7BpgM62M6RZRn8eY6rSC7DwHYwsq3VSAQzwgKtQHTzmhy6NU",
  "key13": "3kP611xwSAmE2SWfFKdk2Te8hS78oboDMG5PQuGmdGtnkKYbYhmnotuSSDGX3LpJoGUujP2JguEfrkLkuLtv1fjE",
  "key14": "JfzMkAESRnpMZmUxEyP2fthdhq26xpKKocq7bxsh73XaR9tJuAmgDELvH7jmitHuvdYnUegMSGPph9R14Sstz3h",
  "key15": "2anSsDR5ivV1mafRP8iMfb14bAKedQzCHKJFH84naMhj6dQ2AKDZ6bNxxbVE21fP87GKUX4xSMMa3C1VnN1Cvx1R",
  "key16": "5BnXCv78M19ZuH9qC3a77D91hks1Z6A5JRDSJyNtXDtJnykaWQA79M1HLRgkxfMQEQ87wk72cpbPA4auQL2fAJsS",
  "key17": "4Dyfov1UMNxB8yFbzRDCAEP3VziShAFAfnXWoNVa7Aa8EmE9ZmmvHAUQnoLsY1ZSHLpbdNPwQskZtPyr1guXXJbB",
  "key18": "4s9CdHHEnNTiMvqDbpp7QkGfByLz6vFA2GLJXuU6KqkjnEPAyzyZmUvTYGj1TMCYWAu5EirYnjpF6ZF6sHHUHRam",
  "key19": "2DDEBtnfKd4sC1gLpoBEGqmdFmYYcmDvZhVqbC2UsqfzY2uruZrQVQSMeiNryHRBUJAVgiVYQJtwssB1cmgXoCyP",
  "key20": "5WyUYr6uWH24cC6roWdGPdtyJ36h9nwRvgkRjbaFErPKWo2zzaFV8nmSxTyhVDRhwtBgSYq3m9wfKZTVQEW3uH1v",
  "key21": "5HEqGtvJrEgpMNpdmxZgb9Y6EBu8dZbG37SeDyhnHoHZ4nR1uU17wpvfZm6dSrYBufj3WoRKPV6JzfgHEYkk57Wa",
  "key22": "5Q3YmrgDqjF6nDRH59Jg75HuygmkPFTdSMnLqFTXFuxdDU4D3QtikLxYkP6N8Km6HRf87hRN5X9vcSe7TRziHpZ6",
  "key23": "4idFEBiazPkGxwQJRDk2QX5DjjUZHcWbqZk6yhve6nFc5EPYWiYWW5JeRVE3jG2ZTLEw7PTnSuBQ7YDi1AoDve5g",
  "key24": "4eVZT7HiVLKapt5bGdbRFarqHZ2fkoaBNdxjARD3m6ToJdXieDBufSEweoyyEwd4BESge18zNCMJf2GqUTkam3Ra",
  "key25": "fYHnuEtC5xKi5tBm5shVstLxiw6dFWkx7dxBE91dcmzRLC6muxg98n5kdkPgScHJkyb4dELpzh74ZjmrQN1ymtr",
  "key26": "a38SAecoj9FAX8Qbaz9bq9sGrttvFQeiGKE97xnXnBD5T3UEQZZchyUAK32e7uHKvbNyEWTM1YRbDA3ytT7Y8Kz",
  "key27": "59q8CyBLa9degUhs7iST3tMDEVc3a2zDfuU8RPRSX85T6xVaHU6kgfLpfHQW5mMzuRD4pZEBYJUtej9dZFTgE4gm",
  "key28": "3JPYut1aAcoZTvt1pnum3EBdSdfnYuuWL9Yo7jQPYjWssJXnMmvfCTZXMVwFgyzJ6wHuGvdJi4X258vzKirqiJCU",
  "key29": "38pURwWaWia6Ytrx43dJvgmpkvXzFSpQG983rQMbWdKbJ8ZX8QzWKbZpFZg1cohhCS9Z88hu5neqpENYZepEDv2B",
  "key30": "3Ds2yQsKYZVNE8h4bKkP1ZRye6JPFFLhpdoXk2wd7xpi7kj4rjG4k1XiviKSCudD2WCFyUDmvFZBAV4kkFW5Wjed",
  "key31": "YekqvsAG8JEsQ8sZFhGACLbDKSDkLBKCMnZbXXqop56CyZA7CsVxioDYUpABhVBf5iSF5666wuYpt3jGyZtiZUG",
  "key32": "3fSERPqssaZPu9gtyPbQ2fDnGaetDAzTaX9Yeapi52tDn7wTZvpg2hxmbJKFC387D8gpn1x2DpJoipDU9GbFfPyY",
  "key33": "5Kv8Tex3B9r9zwTNZfPCMhTVWLrqGeXfhDNgKHumy7grL4uigJPC5wu3DJhqkpQ3k1BC4hMfxxFWen1m2KsgTCsV"
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
