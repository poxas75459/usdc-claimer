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
    "645DJHpfUtVY3tjieesUXCh8amDUHc4w6SH9M7TPiW5gw4PyK68scDFxMixqXcAkWG8B7jVPBvHirEM39ZDAw4j5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bcTrLNtpQ35yjmXeZF3Ve1GGEoQfGhM9hSWiHzTtSnnyC6UVbRAu2LBFp4bswa5uqWciXSYsSfWeVvLLZpVcsPX",
  "key1": "5iFqpeHv2KneDhjNBPCmABpBigJmVEZjwuXc3FzFVXWPyp2gZeUw4vfqmpDFf1P4RgF7XBzjZaioXy9PyXxFzL4a",
  "key2": "5UWG324jZF7kSPyyfSTtnSj9M6NXiaqSZPQ1HxybNwgKkaiE6jiyxX8xhwKo6ZwzLMo3HNntizUP3fvRMAfuNprG",
  "key3": "4Rz3YhhZqPq8JKGiKhhV6myGpibsdUbBoRMZ58v5Pdkv41nZU8GUD45aZhAJrQPwbstDdKq4T9fmC8M93GjfF4Yq",
  "key4": "38rV8SALYNd7feZRUJWugTtK3Z1uuZCa2nqWNgpYYGN8iZGRiht5UR5Z2AaDkVNV44X38yKcohZT6vnGgL7xtM1U",
  "key5": "vje7cY3Zr5rnSZ6jBHgewa5hBjZ9fjnv5hCsTaPHiok49PPKvKrD8NTVDDTxYzMVdPrEARzJVm3AKbaYpwhLxZ9",
  "key6": "4FcptpXPR1UoiRivE9Z5WNnFbL1XKk8izyFxnXjHrRJdcTr6X12HhbDgWG5GHu7snG8fXGFbihwGb8Dn1JHVFFJu",
  "key7": "5gYvWDqKdtQxsfAQGNRTkqU3TaTR9wGnKak4bGAdatHcj74oFNUZoqa4gb4GcL6TWHcK4En9vXxrpnDPXCc7G2vi",
  "key8": "5LvfFMBfFgCk5zQETxyw7gPBj2oU2vcb4BbTGsYV7E7rDLxpyToj6vXC1P8FmpfdfeN32VnfzvCWYFpD8ZqNJPXH",
  "key9": "ZCLp77rA9nA6FjB7E6s6AXKfp8sYEscNBQ45edX3Q5k6zj3JNZ43ZpRB3JWikCv6usCasnDWjnBJUFiDhzQmPNj",
  "key10": "5B64U77hgBFBvRstfVE2UGPVY8T7LK3iLsz5F1p3UmYPRmuEkyPg31mVgKwKyHRPBaVNkz6pmbJpq328TRKR9h9K",
  "key11": "29iyfV1yiTWDdreFRUbwDeHem4ergTuwuWM1PZQEqBnihdzyyA7aqAG3K3jiRGNBgQDXBSHvH6Ke5o6gA9FFaQnc",
  "key12": "24v4A1vGdJcZCf6Fru3E1aEaDMqM1VGcmpGK19mhUKGECabGZFK7AHJ3PJVecftniZR39S9NUVBytZCnkWM4AARE",
  "key13": "H6412dBAa8T54zUd9iSPTadpydj7WTGqcCGT62F4ZNr39Zbmn15B5ZHTLxffa2dkzb3VBzyETsKNoQxzTCwcxXK",
  "key14": "2YmBJNxXptb8rNDCQnpGR67ACRjz8d8zGt6y8XgVHDeRrXZV98mVuYieQRw6Q3X5Jfewk7eztcQQ4TwxzyktLkaM",
  "key15": "4h4pWhTDEnTeoFVauD5nscxBCy2FKyojaMZrtN5HYqUsZUhQ7VaeNB32xBYCdikuX9AdEwbmDHEmrDwaNmWfxKt8",
  "key16": "21JWMGQkCPJLABmKr7Nu26b4st3zMJBR7RazFKcrkAYBwYhs3WTEcLEkLVfpXWobYxGg1ocivct7KGJt3Ko5KHF3",
  "key17": "5rDUEptgiu9aixbbQtBVDvu73YZtffMZxjSHTA5ngpaRn52tB6YvDAaF1utHnjToj8sUSHume8YneRY3AJoXEfpR",
  "key18": "3apqt9ZMko9TnNCYEEtqgb25Gk4hBbophkJXcE8aP5nPr2kD9HsQJRX5qarBtxz7Trc9Q6qSe1iEhpR1i3a2WQF1",
  "key19": "3wuNqXtHAC8FNonNUEE7CHY8ecuJmusVudEkre33iXeVAY8pWrB6y1jMaSj29xauAPkqSbgcRZT1iMEyxU5a4StU",
  "key20": "HNgBiNEUWaakCPXFAcUuGRzYcx9nzL2PiRaSr9MvKVsyavX5TWh5j6cvGYDhH1MHZz4UFUXSjkDXKcppbLag714",
  "key21": "i5xzqDjSPDVsFmdswiqSzKmdUCPk8gzgJBwbakSEJUMCSEftW8yJ2XHRGVWK6V7KYkmrgR6D8kas9ctPVacd4mf",
  "key22": "2DijjyBxmgPgyHrtG7363NHXujRw8FGZ1ooYpnLn3BfeJH9UHFM2CP3aF4PPC4HyP4JaPNQbs929YZLbT1FNEpzk",
  "key23": "2UALizu3j3BUterHcKTWp1DQKHJHYEqVVQwkjWxbC23dnv2C9V7frtUgb2TRemkdqPC6joFTa9EjY8uKpxdLqwxg",
  "key24": "ZNw24JY7Ypg6HA1vZUUy3nLUeCJMayeSSUQzX6nfy4Ja5rSBH4Hm1YV3B71u7gYoZt4R8QXQtkERtDoPZSzLnST",
  "key25": "3U9WJHJWfbi4m9R1DPm9CTpAKxphfaQBU4SWcD63sokwGe93pRUoF23BFJxz4ADaPgg7VmeEPGaGTDGqnMRN2XgV",
  "key26": "2Sw7px9GtSTV17pnBMwd465b6vGrGydkYfCNFFiNT94NB4Yqw7KdL3ifeWH1C6jpVCzjF1j4sZWXH2o1kDpCm98X",
  "key27": "viT35HzKB33GxxtGrx2YC8QmjQGihLvD9u23upEJqHMeXjj4kaHoo3SnxhuLpNSPBMbkjGceWGF8KoKjF6e3zJM",
  "key28": "5hno7dZYZAtYkTREL6G7qMr9aVCcTbUWqAKdZpgPRSJX1gCi4pRS5ePH2jddJKHqLikTYRfERUy14qx3CpgGYkxa",
  "key29": "5t6k5rGhzXtcsbdqt4f2YyRebzKwwjaLLbv5zjwd9RG5LF9qWLcTgKWn4cKmgUk1nXS1pnn93gSwHyA1JQM2W9Y9",
  "key30": "QGGeAywDjc21azJX4qHfMnUb6tm9UFdaZzetTbtGYx3pJ74w6Dc57ViLToqjYWkzcr3CwKxRKnMpKFNUkBXfyzZ",
  "key31": "2btnh5morzg3t866VbY2pvTmMf1kyGazVkUGCt6bKvmRUzoagXsL6Xk1V4WKJB95A1U8UzyKneeTvuCMLweypG6P",
  "key32": "qrar65hi1quvDgYQJZt216sXrcpPN5ZebXCmDiuxomj1A4NFUZ252yDd4aFwYHv7XHrGQs44sxQGoTmk3iJBM4g",
  "key33": "5FWYDHF8p7masdThfMtVMZZ4b3y7Md5PPMGWVx8RXnRHfAkUqaykNoQjudcU4xjoyoszaJdYX23jAcKb82YBkCt",
  "key34": "3DpCxSKxms8M8Zz1xitKqznYHqML6d4jtf3irK3oVwNS5kZtME3VWxk8J3D3pcDuo68ZQ69JrDMXknpnN3CeoiYD",
  "key35": "2Fqks2r6f4cJgqmXe1vghYDX3DhoTX5WtM7hQTMVQLMXG2Cydu5sietZVsy9xxUQpgPGyPtAgcA6FXajipEgHefr",
  "key36": "4hdYKoxvcHGggUBabmWiBsR4xLeBFaqHdwD4dXVS1KuH3WpsFwbrxixZypNL7oJCAM6U8t6XucTs8vmaQSrBcCxA",
  "key37": "45XekDUbpD46BJabgyex7dLdFyyTeTny3f3yi4p3gKfiJh7TjLnYCR58s4V3VmJiDkoeMzWYXaWgc92iMkVb5bQG",
  "key38": "4U33w47VuvpcrMHtJsaPwsh6r9Gz8rhDLESu4YFHt8k52kYkpN1J5j9bMKjzuLmsiw43xnkRHacTZe57GXqwkMoo",
  "key39": "5nEVdc4D3w5JwKzgRXaBXiV8HdrhdzCiwoPRoJ8XimvDLDaGLfmVbwxhiLf6NSWSsKrFuEBeokrusTDwRWXDX7t9",
  "key40": "3H8uaXhJJ4Qj5LKEe67Mt4qG7Fr8oU74mmwVnBVf5taDjyTzDe52XQzH3G9oZgGJaqxCTEoWib5xpNgsEb54pUTq",
  "key41": "4r1vmzj4r4mQ79erS6PKm1qywVfDnGcKYh1mvqoX2w7VaEM5F2TnC1bdf7NiNGuf9TqsuDiLPzf6Z2bW9K7tuCwo",
  "key42": "4d2DjniNvmntvQmmWPaYtSKjiQPDWTzKgaSpBgGoqtfgUt4fgitFBa7gLoM6U8tyXtPKAZ6mTkkTmbbfDVmtxorQ",
  "key43": "wrvoqqZAhqKX3J5dhL1GrCNj3y3gm6acLdtVQxxLi3kWxVedRaBwpnAXzU5SjTPQ4GCdybgV91UU4TNH572fSz5",
  "key44": "32Dn5KQtaUAHeYatJbX71gJmGHioqM9avhNhFe1uLufg26DVKzEDZ5GfoKWjBaM2agpi5bs2Ds2DuEFYJTcR9BkN",
  "key45": "3tzWH3dwFR2gcJiETeG9HRrWBRq48YMwZTFxRSqfB2hNA4xVs3YmVPcodepepejGoMMvRUwLz2223wfz5LryVHQ4"
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
