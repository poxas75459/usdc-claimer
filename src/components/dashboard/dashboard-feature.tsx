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
    "xXPvkvG6z7Y6EFHzZ6rgCHGCL9WyAhX1FEeWBatHpnT2cz53jEZ1Sjn5661bugU3YygN6rU4RWSXbvsppTiEvAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32P8ABEGPk2pxbyv2hb5tUXsBrx8ZHLAb1DWy5L47MAJAYbcjF1s4iMuMjYRo4Shg4upQCXwdgrMNfYDJLdVY7ne",
  "key1": "4V6PMhKGEBcWgSBwDM7L4875bqU5oWQhp4h6GqFGWXdbNnsRdDnFrFCGncV5QD4rSMTiPboiEgMtnBW9rBFKRzsR",
  "key2": "3JdKmG8CYG1x2kJoHPjgJsioLBwzYaqEHZsdpJ3kkvEFXSsSMeYURzfCb8B4eUh9pRJ5o6XMTiUTUp8NHnzumt6D",
  "key3": "5NNPDqgStsyfAg3GeasBhtKzdknT5QQASr8R1o79RbVCACGWTxR3Kcve2Xx2jqXmxnQNb2o7pnrBthr6XAnfw4Lx",
  "key4": "473aVrmyevyschKX1z4oED29aVBVay2xpwGY7nrbvXUNaWhvpFNaxzNM3o1jirKBcEk1anjv2CZ6DQygFKCYs9xu",
  "key5": "5vjY1a1q15QhjokhNA16ZonYXDEKhZQaE17pdQFUHQ1YgQs4UR6ukqYu2kqdjGaAQuz4eoyeBzcp3LGTSWpk4anC",
  "key6": "2SSot5JcFHvS2MR1VAgqxMqvTBtqdn2UuAfJAVNTtHXJGJygNq3qothykbMKgwFbKcXNZa1UXhK5UBhWvbmQ3Di",
  "key7": "4FnXrSM1XQzLTNdT3YF6ZhZX9k9dwwR7wdsQ1ejN89U4gwCZtScjqmsvDqNdZ8ckvYcurmxVZ1v35N49uw8NV4cp",
  "key8": "51n4Xv5Eg8bJ1VTdhZSCxfd7AfWV3FcRWJn2u8MiGLWR9PhcrEsQw9ZNkHDA48NK5nqBAsA94scReXKwsdZ5uUXY",
  "key9": "4WGEQTJVWmkLxV92opDdXRaGtNpMupgLv5sKV4UaRXQb7bquSRacwiJ1Di3wGRozZbjnLmTrBvtZSLTFAjK9FxBa",
  "key10": "3t36tzM3foRCZPwcuXrzw7HC5mL7jhbQ7DdBC1MGcFaA7KHnQWnZHaCgavDHMx4tG3J68mL1Wee3Bk8hYVPu8tyV",
  "key11": "CbMcajx98aAEF2wFVZaMvNduuGTDwd4H3C8AEQU2f7d7RGWaVA9ZZPgRf433JVVgVkgiV68yL1aaJLySGNwRse3",
  "key12": "5b4xGFuL1JH97AcdyQES2RsNiZEngmWTnt8xDV5LPpk3EKf6mzq849Ky6C8xc6hFZHdHWaBEL9o1axVGE2nUTaNF",
  "key13": "4q3K4jDzbEEH9abMg3yy58rH76q7PtsS14r7qYMmNprH51rbQ2NDY46TBXWAct6Z3N67SLLoeo9cWwUMZk4BRSG7",
  "key14": "3RDHJ9YNEqhYTrEX5CyvwDziRSztcMxDgkv2YgZwdo9zf2fLe4BwicuPq8ZSvuUmFgSXa76inCRPJpdcxnUi7Joc",
  "key15": "63A5tRTgZ4ZqinvWGiURFEuCfmDTzTrYPkrbazvg4Pm4gdgLamzDtL6un3DsCuhfNzFkJ5sezCBH7Fp9hS8k6Qtv",
  "key16": "2M4vCw6fgMMFYrULPsYJthzxvRxbWv8FRmKsJQEWGCo5FGvXY1kTc8bsTNQy9UMpET75MT7tZeGTWNNtAFvVxpG1",
  "key17": "482jgwgz3WqiH8t411CHEGpSHhwuRZWdJbzxAwpcWPFFKipEavGD5Xg2SBp2pyP8eSgVYqCzcKQ3suvts8EtJCd7",
  "key18": "4aYUAyUHPmAMDJDKWeJ64ZuZK6BCqNf6RG4iF5gvL9Hs2bK7RdUFfYSMtxdyNXLf9DWoHkF8Q55nSD6T6PQ1SNBH",
  "key19": "2t8qP7pAdBKR6csEavmnymv6vkq2sGb5owyPgUVtckNpaa7gCTj4ACALfkXntbFfAkvNNChiUfUf34GWnkQEpcuh",
  "key20": "5omCuDXKsbdJr7UJBZkPg1pWehCPA27H6uzomp6ysuj8idS8P9KX47f8TcUXiK4uyq6vtV5cWeSmiqh6V9m2mPXG",
  "key21": "46dJur7dLwMAGdSXDRst16aQPgXiESv7M1gERjvCqCXts4N12Gy8gLrhycdG8zoRNNFZrzKm9i9zHTDvjPctdoWE",
  "key22": "3V9bEmmmc5hQYYikisFcnqf2Z6CJSzBqXAXuPXXYiMti1a42vbgH1EHjfG4xk1gQ6km6N28xNViHCxXSfdy5hXiq",
  "key23": "4fZJnw9FxBAR7uDNv63rhfbSovZTRsL3y5p7MNLsBJt56GDrzzYcuKKDYBP4RgT16NTfRXkisgdY6WCAG7rgCtg2",
  "key24": "374mxneEQtr3PEBkgmzV4RiAxW7GkfWpZ75ZQXvPpSSXVkbyWR9aGugAbGvb6TUEv4iPqnyK5CYQY6EAGP9WuweL",
  "key25": "33sw7AvAaKvQV7Hu3DvXae73fzowMyk93LWJ1yJTbeELdt4v2QKDCkwX8Smx3NnTFEnGX1BVQG5mqjCVUStZc3Zr",
  "key26": "3CNffFb3uH94X87hEp8BxfcnrVPoZWKcim5HcUNm1PSmUNfJXugsvE5UvPuNMvB8gy9dRVGBLirrW4bkAN5reSUL",
  "key27": "jX8aVEChEYHHa9uJ9Q2Vb7Lvr6RCgXWKMm2dTw37hiFrPjDTkXSisfLAaA4rWQHhLYjb8bECUcD6J44oeBmWFEX",
  "key28": "5f22QSBjPHMVJoZStLhhnzgNBp9mD4rT6WWSywPBmuLqcsY854qHiYDjYnbkv1Zmym1PUPgmrEtKX1fL1GpFZT1C",
  "key29": "2d6grw2HBDnoxkn2MbEM1hirbNUxy1EMUhPWH1nTtXBMHhbN7tcye2att9GnKWv68TyJvMnFCPDoiqJTazo3Eviv"
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
