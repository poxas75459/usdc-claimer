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
    "4aQQmmP57B3gmq2d7NKkLqymLMKezvCfgMUJWWETr3JTCTASkD7NnXRyKPnbwuPEcpaoz8iPhnb46T43tYCu2fyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ru36xV9qnkawmo5FaQeAZiL9BRLyYSeUEowgcDXeKvasgyN83oMx9C5HaW753gNCamVycsdihapQNaZKGaDbcmn",
  "key1": "2F9naGy1BFPJDRPRPn8HAFy9x75JxfWu63Pz258FaM3k1Pe3WbsQW74N1bYDVPWegoENFBBj6rD8xAPp19dcFL9L",
  "key2": "2AJUj5XRmCP23b4y5Sbt2GDj8e1WkB36B5m3VqCsNWvj7zFS7LjdGHRhgVT6UvAf4Zb1frmyCCJMQspJKXr9Fj8q",
  "key3": "61VQFtRSCZEzCtDj73G7KqdXhKxmBnadL9JEVL2ZKYjwxKUnHqKNqv7FXuQyjnPqHB3CCWCJvv1EhTuxKa4vGcen",
  "key4": "2oduS4G4gTi7EL3vywqkthFZfWZf8UW4Ltjcpes9w8HN8kUchPQvE2tNNYV2tBwWWwnfvPjrJKcok7cXYD1pEtLQ",
  "key5": "5nDF7Szg2oEvRVzvLrWvhiEQthVPyhz3rVgcsCTDtfnX8xT3Bk28UrW5cE7978DvNRTuyraqnBhd6Mu7MA1ZST5K",
  "key6": "BxHfPkS1caEW4bwsDhuGECHUxDsVLGHkreqK6pkKV6kWcsK1Awo4BSoVPbMLUVudQHon7foqtjZwKbo6bFxahJn",
  "key7": "2s4QnnpjSaW6vFZZMQbtjiEjdDmRvTpc2vxQLB9Rts618NJM2csDKrkM4o9FfS34HYSKH96mB1zX8Wv2t5Na1oCq",
  "key8": "5nS6YHF7by8ocF44nH6y5rUtNtcREsGK32vwSDq5gACvGGpqqAdhE3jXSkNmQVpSHBAso5VCXeCwYn4EdEPo3Mh2",
  "key9": "4xJdv6pYiZgLpJiH3tzu4BQ7LYeh4eCVcLp4p8dtHaBxnZgNRojDFc7bMhrYYth4fKnoerWpuyhuom4z516AP8BH",
  "key10": "4sYfcG2KHu5pbcANz5a7cUjnkQwnJMojVfLLW4u8cDEr9SYMpjjqvDm7xcKpsnFRfb9YGn4Erj4tQJE6pLYMN78r",
  "key11": "4AUA7jTuAtxNxmqyWufvbru8WD73uJEApNM3RktJQborSpQYrg3GXtzh1zNQBoMs6MPcyVpU79r9hoTHjNWpx6EW",
  "key12": "66wwWhPXFEbKQYt77cCCJznbPuskvBDy3gJhm4FmacZ6KWg64Hqmtv2jLsQp2CHbADakchvuRBzTpbqR9iX35T4y",
  "key13": "4NDgA6oWjLM9Rg6a1nT8kMq6ppgYZNAG7hvVDZf4cE5uUYtitw8DWiQs7ufursNDqpPtdkkHi61XWn2n3ADtsPXm",
  "key14": "45yUmzA891mf7umjrHWXQoEqaR9VkTh1T6Mh771J1ST7rVEMK9QFQqWPngo9v8p4NdJBg2EGi9PoFNL62XiFKx7W",
  "key15": "4TPoHJ1FjuTesCwyrwc8NLZgCcFQXyA5FKxeQyQuGzru7jpx2GAXgrFHMAKMs4xF6EhwJ7G1ebBH1tnE5uJo4Vom",
  "key16": "ctnx7W3CKLq3iLUg79MoPqo4BcPFpzwnDboArxqgEX3Gdy8Pwcwu44GDxgqSN2xPFdngueYVsJq2cvn4SHoNfCZ",
  "key17": "4eXa1uewmTmYPogCdzKiurnCsNYvqhXSLBUUycCpox7FevfaEaVTVfr7vPr7K2bVMj7ca7RsJxuYx9o9yVGhVemW",
  "key18": "4FzFqL7ZfHhhRD8BSaUPZwk3owr5A8pkGwrxs5H35d3ra25pwLUKUhA15x5mAugCGUA3utgZ6yZ4GgogvH7uCaz",
  "key19": "44uqaJEhu8s4Esbbdndxpscu5XMLCN56hGLx6MmynMMNXBMjQQ1bqCCRatK7k85Vbs6jPRRDLzcjqcTcKE5f6ZgE",
  "key20": "rgfcv2H9a1McP4siywHawHhecz5hg8VL3qz8syNjKyw7umCCmjJcCS83uNmzWnxrZxYbG45G3unb2gFTKGLkPN8",
  "key21": "EKfqDFqhypWeudBEZh2ccD3Mk9TnNchn6X3rBqCD3EQFkRtFsGaLKy5zn2NENzLoF3ACqKHYAPmjKThnD7vT1TJ",
  "key22": "i8GetUSALFFQD6rZGkQkrak3aJh4KcnkZZ5KvPj6JxVBg49Kr3kxjcz9thkDWSUi6K5KCox75PXGoA6dkFMLU1n",
  "key23": "38qUyMhLpnxUMAaYKK3fWEa5YF9fXXm6sfLHTuQ5yBHDhSM8HDvxrL7YuBhJFCLhyguNzaLhQWFcJePttmLdgh9V",
  "key24": "3Za11Fk1q1kbCZQJEEYNwjCmu56dtKdrApyVDhYimEMHZMo1QWsULcGFfojw4HtiyQS351aj4G9oQeJYKmy9s9rP",
  "key25": "ZjAkT3P8eDEfBf4QzkakvdU6AZBN9rJNZtsJDERc969FKe3Dw44EgeuQpkR4k9r7rErnz3GVXBzLrB8ireaF2xT",
  "key26": "2997aaryWNNvkx955YenEquW2B7M7RovWLRJcPnb9ZrMmLff3pxPm4uK8RtqxTL1ho7jZiXZjZiz365y5NJ6Mvtd",
  "key27": "36hhgfJgjpAKSKmFkeWmmpiwLzuNYHmxWNiXw3sLuekHsTQ5d6tiuwr5BQW9kETFSTWepeva1ANCi61y72yhNGMn",
  "key28": "VbgjLv6qcUr1JguNCfqz7UYqQDZiA5tacNRY6mJfoXEje2F1NqJAsBxNvRQJjm54oibkLe4RoCrkfwrZxMtfkX9",
  "key29": "4Jwe86acwaWtvg53HmGrNaWaoRN6jBc91gJ6RKXRU9NkJjMNyvUPg9BumhmHTYqybj96pt2MNWEkcxbdvDBx4voj",
  "key30": "vRFc6z75PMDrmVTfZsNnWtSEC36EQpLLWjRkgCH3ZCygbRVZQJd617p1CMxDdQb6KcH1gKqgyisMcG2J4qWEdmY",
  "key31": "4gg1BXyiEoJf9Y9PxQYCs9P4byXvKL5bdTPv11cFtMnrQisezYmoHyo8rjaW3sSNQ3MZPgA8eBZ9hy3TyWn7cd53",
  "key32": "4CiwuMDHMoZRo4odszMuLiEEZis3qQJuCxonQ6Bs6m6JfWdm5baQmXnt8Qj8JR5T3rSVyTbHmbmcxke2tXm7uddk",
  "key33": "3nYA3fg3rMGUNwABhAPWW8JYKMngRPxnfwsN9k5QXGQHQdQjFrz9WFih1GbhoYjUeSzqFAhH4KoXNPgPDCrwqEbr",
  "key34": "2CxyDxHdXFRGVuZ2Y9YgmaLJB7YcLepLZGL5pobc9kraxE1pQk9Ze4xWr84dQrtKPGfozbMCTpkrKN3d3ctPpXqa",
  "key35": "3tHViLy7HCTSUC7wHAEmHq5x6k6B7pxqZ8hyn1LY6qQgvSAQg5PMWzJSASfq5GkRwoS9d9RhAcxCKV83GJaCYgw5",
  "key36": "4fXJfgaQoGsFrHAWBoKUMwVYkd9XpnH7EtQ87f3DFtPq4amgzLJLMcZZGVwiidKwKz1E1TDxSYxxBjeyVYVM7xe3",
  "key37": "4Fn1KBb58xX3vjZsvG4pvcXvWnM46bBaXGbeQ61wzJHgHvXjBmemFcbN8uaPkYP945UoRF54ji3vh94rouaTAcjc",
  "key38": "54tHjzgGDniRmrFkspFw1u9U1Lxx7DYBut8Y5UMigPYD4q7CYYkvJ5WCAF86VFgokDRuG4zoSmF45Z7Prp2gEU7F",
  "key39": "3Rj6jXnDYYNjTfR3mVMJBj4ZtsnQKZKNNbZVyRFLc9tVxcsHQxWJ6GrLPoewGxEJM28pQ3ADAFzQCsRD7EtmWJh1",
  "key40": "MVgF1B7QhpUSgDtx8BC4hZVkfrQkmQY4ggvSAGGtYjJoUoLqBr1Wgs6kVp3o57ZV5v9iLXRoQptL4QjMLw5w9Sj",
  "key41": "4HGYLBStrHaJUUe8xyEyVXVP2rQsthedMwCkiWY9cKHr8ATsxiTiDXdewwLszrtZQvB1Qqt3J8fNjWb8gp59qcQr",
  "key42": "31vJdsLzcNxwfDotoqPg9oXgCtQLmASpWLqug1kwAx7MkArLiEJfxfGtsScofVsQ7RSPYMwTdH26hMFGA8kP8U2g"
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
