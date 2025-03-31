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
    "61xRCNfQZHhpHZt8GeXoWg8BV6dkxuiP2c8T44vwu57YHF7ALNYo2sSWeUNKws5V9FQmpGmk4odCtKKte6Tr4T1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55mM2uJq74Wduj2jADhb9pD8zGMPh27DREutn1v1RaUZLBCRc1xBtLS3hcNRgwvqFe1MMhpY6qjWxcN4AFvt3vd3",
  "key1": "3JCBDjc9TtqtCig3jsQQ5XW6bxmaKF6LrFgqBEpR4JYSmW3EzMmYVNZeGUiNBfCxrzbM2dDo4YmkpeJFERx2Y83A",
  "key2": "4CpD7aEQ37a1XW3KcMAWXyBfmvgqoPbQQsuRKCAeMiN5iepXhkQ3tgyS6gKcXNeT8kQJgc5oyG5pagQVP66BmS3v",
  "key3": "QDzSoVZTKKPfkRUqkPep6iU1kbme1vnejW9aS6WJBLqhRJo5nnGvJrCytTWBR9qToqXaRWji41CD1mrvNHvtWjp",
  "key4": "2XahjhinXdcLM1aUYyfnDMz1zTydXTHRSk9nUfMN6BcU1a7FzVJa8fv9WF5zmpRvsZf3vRqjjwttRpsy7Gzv611k",
  "key5": "65MUWw5BqsdjneDhF11aDxsCaj7bUZTnSF4zsnuXhfXWb2e7RjWJXBwFBVe1PXdLqLHVpSgVqNDEGLTREkn4FMb2",
  "key6": "tNZvxwSjJoaWKAuKqBj1GAS9WmdvPzMQWTKuPJAYCn1Rm5UnoW3PXXts65jRHZL5ygbgZaGo1r7nHdNWovgmd2k",
  "key7": "2WC7pA28b8GAGwvRq9FtpdedUEc58axqHtx7ZpHZFZSUgDr1PXU88j91CDRKs9dqY6usnkLXyAakcE6Pc4bieWTG",
  "key8": "ZG3oZn38u1pG58gkbTnz5eaWQ6SPKgDuDhap2S14UTvZokhyMzooBfdAK3WkoriezbemoRSSYL3RpyEJHAvV41z",
  "key9": "3RtnvjmxRRQdo5c4265gXBM9aqEdjv2UZEf8EwJW2GwvC76WEBCSHD2RsNuJzQbnKG2BDzxuvVoduLqVtS4CM6Uu",
  "key10": "3yMYzGKRKJvjaWgEw9RJjfteV6318KN46g72Eg7DhxsPq2fSzahH3iK8YyQaKfs6HKaGEtQC4ecm8uuangBpQf1v",
  "key11": "5WoJYxfbD7fp4yYGcyVXa3aA14Bjm6mDDfhgH1rqvj9tDNfFUvvfhZyqSt1pH9jG2D9Csu6FnHSgy84Z9AKHBesy",
  "key12": "5g93TXGpih1MB1rQrXp8RXNHzamrk9FiBZB3CZNQ1wiTcFZHKvzF4hPCK9SsNmbj45BBhEqYE3LVSV9Nk3BgjEyr",
  "key13": "4jUaeteDg347KHFyHrmu7hFFv7b7CoTuAZSjXSrLGwXqxMN7iKMeQ5KeUy9YhpkxegYdWozHsQSesXXaRoWCY3sJ",
  "key14": "2pqRKaZPhNuGaZUWyGHvNa5YuR4F7VkA2w1wCK36ps19R83QiypwCMAoZ9h9d5wtpTgabk9MFGr5xhMz1v88C7YM",
  "key15": "4k8bhL5cdkA17cPebMVGBPHJ4MqEY8p8JRKBDNn9rM1ZEAeNoGqktycAnY5y7Qo1wy7ucWPTRj4PF29TdP1Pc94w",
  "key16": "3L58kNHuuyuWWmNU9CEaBVdMCkSGzS7KjhDmFg4Eh6sD7dWCSjEcS8Nju93W426rC4uDDPiHYEvpLnqtw7ZbZ69a",
  "key17": "3oEUtwc8fvKwnWuhe9ZqZupFZQVVXU6HVg4S9WStaxTyvZ5qNS6iND4Ke868nCLMjB67TyhQCxFEy7Z2ua25SLvR",
  "key18": "TuTmDSdEbpLKM75p6Fu5dWcF2pCzKKdRLptGjxhgabPg2iVTJ5yVjpcfRALRMRfqBJiuvhjkhkQLpM8MyJhCnfM",
  "key19": "47mjyW92PR4w9wTwEigxGSqRFBc5YGRsXjGznbQQmC5UMd3Qyd94GLx4mVWoBHzVbjJBYytFfrsWyig3XAxgsPEi",
  "key20": "2vWKQ4VChmM6LAV8QAq3oWP3XSQYJhV49EqmtJRnLcHCT2tcrGrqdHYDA9Zji42NTp8G4LpSzzQe4ShaVSZvTFny",
  "key21": "3hMjdkXswKNAntZmVCAiYGzngXGdcg4Hr4xqtHqF9E2qf5sLVBGtgU71BkxFDCBUjgoJzxJD3JR3fEqUAfCVTz4E",
  "key22": "3WC418SLmdqkSXd5KpojaLJxkzuXNZab6BtoHx1cuaf7eehNPZS2FQ8cnWan9rFY4UJZDdwJttUickieM2t2PQ52",
  "key23": "2RikzgMwStaVUKEyrpjLrSvk7hwZKDx867fumpwhaDNUZi8jFL459Ke9HtgxDHaJiwKmRoEfKZPv2SSbMTspJ8NY",
  "key24": "56Wuv7HMwEB9w72UwGRy9kqQR6TbWfZg2fQ2XYFAD9rnJTb4kUTnhtMwCcVVrge92c8zV7c5mFEnwG3jMkrj9sPK",
  "key25": "65RYaC1vx3HjXvBhgnA295xLumv4Lo6K6beJGmjNHpSxNP3SMKCgs3Aw1BZv3SiEuoBPfJfSaQfHujVvJ6x53UiJ",
  "key26": "5ytX3N1U2RxddQZXmXB1e9YgxiqzkT1GyN8idCb5m71hs9BEtgpmWiJuFnZSLNQ7WyY15kChMyx14TNzD5bxHgXp",
  "key27": "troLk7VZV1yW6p6PF5NvVYH6gzEpNSkABcnceiCWk3tQUVQWn7tumVcrWPMwVCktK8Vpsnv3FY6W8NmaBbeHC84",
  "key28": "yPaf8eQSQpTwgvPr1bke3syyx2RDaRH6gv1ZGmUbU4Jf8f4u6vN9zX68rxwQfqXpjBXnqPP4mRZ4HtvpJoLLBPx",
  "key29": "4RPbXTVt9F4Agtv52e8ULNqwHNHhUtXaUcoaz8kLBJNXwZZxoaAYkkHSu1U5owJZSn1KV3eTaAs2tVw13bpcDBAj",
  "key30": "hP1DNotvywcywWqD1ZnQvdo2gWX7fr8mka45UoFgX2zwdhhTFUxNiejfXW9Ziy9bhY1yrpD5u2MpbzrD62zwBwL",
  "key31": "45ryLfxtRCPusRg3oSm83upTeuisZnkzgfUoFtwLBAQVzGUpZEJjc5jJBJxaEKFyzY979VcRSi4U5sWJxFBQV8ag",
  "key32": "4yMZMdsASA7x4gCR8XKB7b9Gve3VzkhZ1b4H9KPwDmuAQfKfSUy2PpGqKjKcAXRufwXVHtrjJc3LyotScdYAmzeW",
  "key33": "3tH9Rf7winQiVJQUeyH1CrMG5mxqntzEjgXXfmPpL49GiJMz1cwVWbjMKEttFqDAcvmoYMG1bYG678oDnzxYNbnx",
  "key34": "38tzF2BfNoeiaNZNNpmi9TxLC4wsjWWbCpct4ze27sBPTwybWYd7o9kMnFMhrFxb4CLZ5721iiD2jYcvL2VTp7FU",
  "key35": "513fEmpbYygY5Giun23v5j1PgeC2iEZaS7B89cszdaAQwhpwuyG37nEoPTQ864KhSfNRftvWtnLxYYXxBANfpN1X",
  "key36": "2uQCoqXWB9FB3x7Ssyp6bx6RqjzE6m6iAFxfX8wbfRFk3KZ3AqyDZ7YCiTKhy8KcKj9gk8z3S4L2AaikYejLgoYa",
  "key37": "2d2bmC1uBKEfvJyKzVTt3qtAtJekhx2yHcBpwSNrmRtLRZVsFChXr4BsAq5cVfQ1wG48RHySQKMZVsZXdfDoPD3X",
  "key38": "9LSeivbDKKWezLuETER494LrAxByvgJVMUKYAzAbQoPZYJnBagZzHpNARLuDqSKx95wH4TB4RxhDQp94qm5NUBx",
  "key39": "2Tjp2zTevJZPoxGsJhyRcamScda7fJy3zLo1yHQurVEjAcU2PYvw2469fororstmdKt4rpDDVg6mw4LZEWSz6EHo",
  "key40": "3GmVq4ZjeyQcViamQ84mgcBC1AGhEhwBDLaM2BppyYLSwDruUfFwuoAngFBDuHU6cVz8HXy7Dt5nfSVyJpNAB5CY",
  "key41": "3wQK3L8szswxJwRTVYnyK7az5i12zV4sHZ5PSZcxBqit6AUdxX8tKdnptKAmrWZgS3ZMVu3dZJr2LZaZLZ9Zfipx",
  "key42": "2Au3QZKSZmsbwH2Z1iAVcvqLRDZSgMzKNvBAc78oSADmJT5SMoEUMspAEVrTQLFb9qmSxwyoCtgrBxFC1uMmVpHQ",
  "key43": "9WWFaH47axvNQdkc3pP8JiTmQxryYBTfEfaPetynvTCphvsh8wriUZTvarRvSiN6hYppHmE1Fq6oFy2vkYfGWcF",
  "key44": "23E2Etfq2zSZQ65R2EkbrPEVrGDnruzzAu65WXGbCmoeqVtzu8HmzZSFgTeSeReXtBm2hVFLieQCbx5V6PSmWFtM",
  "key45": "43fjAHg3GXx1rMLjHc75ThVVZRSfQaYskojRbSNrcqu1Qrq6B92QJuEEAXZ7aBTgGb94RkuUg6geeYRHdRfkG2m6",
  "key46": "286evA62mP9qJm3gUn2epQPtATPVWToDvibAoK5UbW6BVEq8qabijwK2DwZyZDSFjzYxY2DiXfRuZT1hXSCLUZ1a",
  "key47": "2axw6tBRXTrdjq9BzCJwtXzdPsjBxYPGYPB8M4EWzU5BDBvTdndjEK7XzqKUG356Ayz3cXYEf5qFexMr8YZpBfTc",
  "key48": "214UP44SZyqKhKJyu16GPDsD1uJuUK7DhVipMFBnznSz8ywmkD5gpqecWEsJGSMbSdgsqEjD231B3NFGiHEBSCeT"
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
