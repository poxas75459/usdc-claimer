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
    "3xGkoXnag4o4AjdxWxjqP7APg8TM2nP2DppSqVgq1iWBgFH76t14CLfpH4AcccvHWinnisyJtW2ZEZSQwTjAYFkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZuLZxxjgvSmoyzGdpYNQzUTaaCkpMjc4B3QmgYkJ6u5ncCTU9yUh2rJchyYEQneSidHn43UyGkMUDt3hcwWkJkx",
  "key1": "5XDnLf1qY1Gdgv9p7WQuq9iJMGQ5QvcJLkMZsqMka1V7W8dKigeU4jGM9rq3LKS3htRxis7g7whEfZQobGJjmyHX",
  "key2": "2JHemqxdioUfuMnMcM9u4gLJsSELbvq6hzmvjLGBiUCZJ2o1WBYE8NsXuwguzMMUV5yij4iA34Pwa8S43VEi5a1u",
  "key3": "3qhhnUbqmdKyccp9S5Xqb4tvANXGPJqLQxQQpjnF44g1XSP8YKehTbAWZtccbwt8nkP3sr3xJjv67RXf7Xq3MHyq",
  "key4": "3Yy2pKNViENhrn46rorFSxPaf3QRykqxiwRD4AaRAyAtSTPeggM3nmZU6heNZscQcVFXNCNtP41rNai7mHYWPjDx",
  "key5": "2naiEJNxGiXsUGCSU4si9rMfVjMT3owsj4xBL8ZENhdeDkN8nWKcJxN7EabEcEw6i33jSDJxLjCJmRbSPSh8j1T4",
  "key6": "Af9sg4AP4K8jKJmjau4sXnjrvea9ZHJixs5uip7UbYGar1ffWdsKGsnuigAYD2MEEWotCMrLqcyzucwxNi2Y4gC",
  "key7": "4hZz5YNuAYdQXiHBY3qLeFiKdADrksNRaRRuuZs3ZQ1oXYtukMuYdHNufmdyaCBtuxWrKxJYYbEdvsMYW6bikdvZ",
  "key8": "3L5BFphdk3cQDfMHDd97tRiWTPWi58ZtoBuJuSyfX1hJjUjauXGgkLaCVkU528Qt6RotUoUVR5jWpNXQTwEBXK1U",
  "key9": "4DNqQ5AWXwJNWJZ2g3ihCMicW2M7YwVJNjMtK2xeJyk4LpJ3qGogabjUM75sPZFHUKsoUySRoB24q98p9aRS7kf1",
  "key10": "7eSNmrCWi4zHmVtmvxuBzmJ13Nes5t637QeRAw81nUrhLLGVqyyS6MCUA428kwYZq1NpCG7JwQAcvzT3LK5xeQ6",
  "key11": "26QyWMNTQa8yZCPhDBQAdqWEUKgJQsHW1LnkxqRzQahjfLFxu9iWK1kHhsAYuMsuuGZWFBMRAETKunzYmxj38x6b",
  "key12": "52YWEr6VyVfDctyhmVbrcAQCFLAVrLsRhJ9CTDhhgLCRb4wLmYFKPbMz2icoWUHLHxBYygqxPY27dGUZ8W5aXHQ5",
  "key13": "2nEbMTQLU6DFp33TJTM2xruEpZoHpbvGVNd9V7s1mieRvjs2vtJL8SPcTdSfuoM8x5mNWCWqqmeE9TYQieEVdJxe",
  "key14": "gKPUMSoY4ak6NankmtPMzohFV26fhBACiCX2i8BEJdD4qvzWtFHbN6iJVYzx9csLw9vAjhNM32CnHxwC3E2Yk3y",
  "key15": "26YvwDh6pEk3wuJXmn2caoSeoWtcooPpLkKv2cEgt92oXJkrPoeGmrrGuzC7TsWwJPopoz3fgE6zv8VL2cqp6dBd",
  "key16": "jo3bGBqTDMK5zAW1pzeRLN73remjJLU7c1QYaqVZSSEoR1rLPQ23oeCpaSQR1t9J4uQKr5v5pBz9dQYdzvmgpTq",
  "key17": "4LpL74MWY59mV58WZoBzDTyACpthy5XecVTn6H19KnAjjUZWiyx2hbes9FMVt6LY2wQVCwG2SY4XziEcYcVdBKTA",
  "key18": "29AXzBzdMW6WveeQekhyrBszAQYVLRSkhrL2Kemp57gQ2jDk5ZVeG6jDorTQtzeipRgHobNPpXPadxoWW8jmsSyP",
  "key19": "5Jcovvs1dhj7X8g44hVrAKQXDMAmyuF6dXsTWVfsumvdPsvziZ5hWYQ1ZknSEJ1uD2vvJB7f7Moguk6ZfDvy914n",
  "key20": "4cFiicMmjKSqSv3yqoV3xyeA9VTpgFtm8VjTLvUfwsjgxwewv6Pqxvbhe9h6FGJ1zCy9mxmJh3Nw8rFX6XeGTzU4",
  "key21": "3et8rsviwQydb7SdEWqbmw19NsTasXvK5bTVPibtMzABBdfnBk9eTb1QckAnzVHmHv97L3qWR41JGW6EBgkEoqJe",
  "key22": "2Pw47HwVqFftf14SZ6Jbm93AnARBBdxFHaT6H3CxFXMctqQFrcxGK1mYAVrtuNXcsHTB3mmGsjHXQJm5GRaQRF4s",
  "key23": "63oMKNyWUm1fnNm4dy6TaG8VWrCNgsT3Xmhb9kYfd5dxcCfBts8xQ7wZKf5n5sQzgWXTr6cnqmKVSYJMAkQ47VD4",
  "key24": "2ySgPF2mubKH6CPD8kA1cztoEMosc5fFWpCeKSgyjtqH2yhsDPRXx2PfmP4B365y4q6qx4eqyx6a1ZfcxNbwBHMt",
  "key25": "2VjtiRh8QJZqhytcjBkdvAbNuebFVuTRrLxchgobxVCPpKtop65AREi3PJ3SjrMcKCM3a6fqqgtomZ5uCkfjHf2E",
  "key26": "2DvLU3APBe3kkrvufoBxBgg71u5coPUKRMUgdgtSweMxXk1JVC9dePxiJqFjcQWWkzXFBzQBMbBSY3deLN97mtcG",
  "key27": "51VuvH4SgKFpQmoqpU8RxDz8Srfh18NqvwtAg2aRvwYdoydqi7VrGTBaWL2dydVe71wRmCgxhweqJsXrorRaLhmW",
  "key28": "2iaTaXgSpNShGuR5qWF7VeXHDGJoW3ryVDZ2HHr8nScv72S2c4Ywv4GA2eahq4r8rKg8RhvjXxhnbmZaaTzwLFmt",
  "key29": "3JcpoT2JWLSbszkEuQLrmzqZ7q3sD6jpRKoBuYh6XbVvZq33keKUiiRK3eMobSkLU5g6zBZt1HWT5kYPG4QgGmS3",
  "key30": "4qknndbnB3KAbANM3VNQtP3M9bFV4WRdFiDwpMLeRGRR3SpWZSzVJJ1fGnHHgrid36NZwdzuEWyUAdYVRruUi1zV"
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
