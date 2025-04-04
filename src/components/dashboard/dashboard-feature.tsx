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
    "5YUuKKi1e9QQNyqjnA8LDqB6emPofGFhFkhUcm9waBNnmjSuKwrm6ixnzcmEn8MhdbaEJ5QsjZKj5TpM4xMLqBft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AcoKDUk1R2X7LGHDYWMxzfRhmpsYKhz6hmYWMpcitpPc512yJ13T3YCbnN8eVD5YwixxAuqnuHP9AYrPA9oG7WK",
  "key1": "32wKULhTBro6rdUCJGuWw9VFTJf9i1ZurfBcqEvW4qdSDU4Rbv2nHDRkBTFqN5vaywAHBZq7ZT2RGb6Cu6PqY2zc",
  "key2": "3P32syRnoywdsCW5ufTAzF1652i59WhKJ7c16K6H8Kk2R3DReKzxuG3TmdJD1CHpstULrpPBWpHf4YGP9J2rfUMJ",
  "key3": "4qQuqaRnXy576MkTwCvnPztDzpdDruj3mb19KEBkDweCwqpSYSBXWh9MYRoaNHLVcfVVurFKQ11jydWts86zaezF",
  "key4": "5ehnLPjAEWEkKC73aBmnhuEAYY5HqKxSmnK71NhzxRmxL1BUUS4HHmVUriWjfdPhscfuKx1NYUJzMdVjj44RP8cU",
  "key5": "XjR6WJNzBvL6wEeFm5Y19QfHDE1NgC6GhNmHx67oKBt6xzXxxQH4mbSGGrgETg6bEHp9dvYjLT2yKQGd3G4eCsE",
  "key6": "5mr1xfzTWRb2b8ERmDLdaahkLzoKUJjhmTi4d6XmfA8JHh3wEQBJpWFKfkyTqv9ZcHnhPAwzuYHSju12BhZAuPwg",
  "key7": "4xCjttMuWoUhNonsgyCKZP2VHfjnLXaz4uGqWgLnNm8kQnJdEpoAMabbn3o6EGEdeepqsXYdUBqyHGmALBBPZ2W4",
  "key8": "4hNSDUBDVe4cNw2CbVFuP5aqjP9QQkTngVvfdK1sBunQpA6x2FjDacfaQtoqArD8gKCV5a1ruMXdk98BwxAzzJzD",
  "key9": "5Nuu5e2wRXauSJLfzhudXV1wTHE5oDayomKye7aJSfji7Q4MSPW19Yuf7W4nQzvpW9ruST8jgHxvJCZszL5LpvaN",
  "key10": "uy48GWjP6uzuyxDoAPmSN9JLYA38haUxtq1wNXDQhi9ysPfwG2UQ9hpFHhVta9eb89AanujHtA7g5ciH2GFdY9a",
  "key11": "3LkQEpBMc5zvdfrDhUBuAR1FGdDVcgNyt75BLGXsoC8hCfUBjciZK7vn3Nrh71TSnM4yJufCPrc7ttDDJ6uuQgv6",
  "key12": "3UFYxd5F9tF81j17i4s4JK7F5qzoo8WYwUUQPcBJw4DgL7guaXXRSXNRjmh9axd5RTXmLHgVv7A4czSwvKk9zUBy",
  "key13": "3oQTbW2PQeFRvrJGmrFbkrcUT15CAcn7fkJkWTzH6uZLrdCwg6pe4B5vDHwDWRqMSsDgN6YbEAxwPx4a4R7HgEq6",
  "key14": "4cRLZMaXpbHPDQA7Jde26mwx85uCrEgqgwEgnHCHh9SHeQ6kqqr97W8DQsgFrS2tVNMvHKxvWmFPrqPcd8qADppo",
  "key15": "3winYtsBjFcYwmZaXZdohWDxhXJLKhHhSikkoUP6udeRJKut5mPibEvZxbAUFBtma62aQz9brCh6kAbYqpX6LQ5g",
  "key16": "48W9LaZPwH3jHv34CxMTaCqnPLJkcpjmbBFey1cjBhiH3dAYfbWwPGRPttV8QxaV4r1eBcYnsWsaiGj41MC5naHu",
  "key17": "3RPm1snxyhuPfGXU7WKJVuRsYv11Zt1iyXBG4eLcr8nzaWu8dHtEDtoAPDRZgSi1bzefSaSccxDnMxGsEwhKaUjC",
  "key18": "5UmZo31UbZnWVex4MUCdcNAvSLMKXM8HLNMV2PFYHnRBb3R1iJpunhxQ5vnoAwuYbggsHBUS8jXGvbmWjs2idFqZ",
  "key19": "2VAyj5K8P44EWniboBLno1xzAbvYWevkmSezHpbidfjMTAv4Lm9uhJcKjTFcKq16zMDNPh8RTmuDMgUHu8onZMHa",
  "key20": "47tgHWuWTwZtMCHvRSSmRCQ7dGwDeexDncAPm7Z9TPnbqt8qiZ4fxsmYx1qPhwPHq7WhxEnPtqNp95iUEG95Svtq",
  "key21": "4Uqhg7qWTVeJQB3LrZipY6qZYWC7QTL6BisCAyDkvW6ahdEW48Ux1nVieNtmbNqyejk3yCFMF7SFP7gjh8cY1wgp",
  "key22": "9RjLdQScb2WK5gNjUmqHLJtESPytshkgcRTPM1mzpUGZUDKmRE1kjAEfrkomFGgfejPJYYQVzkBHYt3eGaygt7s",
  "key23": "5mwU4fwxBgp8cmBZcE3L81dqVVVMHiUr72q4P7zKDk1i6TS7eEHoP2fksS7cTbWeKXnjMHxyBqisgCeQHtVXmJT4",
  "key24": "3myuiN9gwhoQDnUB3Uk6PN9De3TpqSYD2Ei4CN3bcdTEQ1Hwm4STUE7fWg9TyW2aiRJHAtRLaY6D8VAmhFNwAz9a",
  "key25": "5fsT2pHtwpE8L4J3tonLfsM1HLZA5NWknVUCvzoqy35HHSbineqWPAV8kBLws6Acz7Uu1Sjj2FniwE7EdB9MMK5U",
  "key26": "21PW54uE3hWuAaCvmWbfX1cDDCopatR4sRf6GDaUV1X4nWMNVb2E3S1JUT9pNkV4Hd2SgiAeJSmM5tSd2G4RXaCd",
  "key27": "5tXJc4EbRnkyKyoxLeY67gq7GZXkWjCrzsEWd51bg1W85pKC6dEA5N2KZ6vwpV8aDMSkptk2qWRvbzrjCFMWaybL",
  "key28": "4AcqLqMrgjqK2FWMrWUbuNeVfDGEy2BzAPvjorkKAuZSqzg2gWfAfxkrErb52DoT1iB4KZ3sdHRLhDeED6o6m1jr",
  "key29": "Gz1rwfBkCVcc79VZDY5CcLjFNXpN5cuwj1dUN66aNEVCTbqUi7zumMqzjBaeeFTEcPm2hqG3koVqatZB3e1PUbr",
  "key30": "5p2yqjmBuoAevKaoWs9MBeZtCByRKCnJGKQEVtKR2GULc46XGYjd9ajC5bSipxc3G5iuFGycqHPi1dEe1EKdef8S",
  "key31": "58yaPdBNWrow6aX5esnh3usw9tF7xyAGosCwDnTVm2rJtSPYbKBEPqZGZUNCQMcXLF1DdcP9yxmeaSEiJ9PmmBsg",
  "key32": "8GWL2oiZrSAwwqpCiqmkp8ByJybuGwVJh2dj6S4zci5TrwGJWtWLyusnNAHY3cuw4SQncoUcK7VryTkTNfEYpuD",
  "key33": "3cydEQkBcK5U1L7rZxAuZe2xYAy75fGKLRKzJ3uwYNf6NckntVYMQSUp3Tvs7pxuhMCsRDeLU6JYiWDHes2Jv2TM",
  "key34": "4UjsfFGDfDGoRhcVuf6EYcav9BnKRRb8w7JaCqgAkAxu9NLU315gREKmjsww3m7Q6Daj5V61GJbsMLQREL2n7YA1",
  "key35": "44b7ZeuMNp7QPwEmR6j1mPnntAqJkHyozHegR4irFRqpDiZpEtQkJMPvjvKBpUW9FjmXWGuWsfqAf7iFbHz8axJ9",
  "key36": "3pXx6iuuKPvVjhMc6eXYVq9dCAYBxjkusiypNEgiPA35DP9e3rBJfeWKXZ2TfumcbuwbQc9s87XENACXCVpMvcgW",
  "key37": "4e1GAcwByibzjz8MpHGYkobrRQHV62SpjJRwPZco63QetBnLNgzGCiuTVu1QXer3edYUwUTRhfmJ6dQUpuZXhydS",
  "key38": "5Zn3EAhA5KsrbnsVY2dn9YMjyEhJous82revgsQ45BChWW9bV2n5JkdZV5eyp6uVfbrcX3ycGakfuVczQvqugWoA",
  "key39": "23BQFxMDoVWf3AKDeQ2J25oiUyVVh5dthNkmGoYK4wWXR2V47FmD5BqbxFbvFE7FEKXcvwhr4PPT3zVvWDTDNquf"
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
