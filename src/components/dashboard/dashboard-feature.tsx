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
    "2GXK6YXtuMfAEVt7oi2jzZ9iUzmmgXAFSQwAuZ4tYWi3YK1qcmiSeqResJfdQAiRafNZmdkV9iQhsTQiokrqW2MA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3444Cs7PaYUBJhWRikYcvj2poT6CdAapDxajz7GtpywVpTSk7THFKotobRAeAE5zJncT4t7v2KsHj8yjQ3bQvUcH",
  "key1": "48tBkYbjQPjihgjAe7uMZfvW1FA8knGfnosJ6WpEBbAQ6855z8NkUr5c3K5fUBCCPTCdQeUTsenLzBtJ6NEDFETJ",
  "key2": "3zmfWVHT4kL9qqQLPz9Bj4JVr4Nsr5Qb3cs29dZHCbxkvz8A75DX8z6Km6HPfDCmpKRrfPsrnfXPyiWyYoePGufg",
  "key3": "zHeAvB9gzTDxuxKG69FtCLMVQRojaVQhY9qEkVTd8ZSfBmPtYZt4vnuGWXf88kpWxNqqXkjqVyyty8qfZWiEeWG",
  "key4": "3jHZMr6K61vQhunsYuMdvkNVbb2dvHJM7YCKK6K6Tj8xdqM7fJBgC1XeBXARYa9oJw8NPzJDamPyGGenHtenDKHp",
  "key5": "2hZaUzLAoFPFEDHpp4isRYgvggaX73h69NdtgMkmNPc4opkDLQw4qjPLsmJ1FynrDpGZFm2Try9UJQ73dr1qfbsb",
  "key6": "2dH3hDJspod1obrjX7Z3PBYJ1Vue2JabsdMJKa4UxQ22ecP2EHJJyCUBrnw5r1gUp7UGnBa41GzHBjk9EVNEhL1b",
  "key7": "5ZouSDZgb3b9hRZHsQhwecTEnH2vEhS9XghFgdzdyemBGMNkgEL1brwDmHvFFzZB5FkkTTMtpQbeNruLiZtJbSNJ",
  "key8": "5RBk5uRrSXnbm7MmKF9xMBdCNivT78n6iBZSmFyRYpqQtqwNG9PApr521s1azhjahH86Sn6eim3mPaKNn2THhk3e",
  "key9": "3M3ryLV4BvXZF6GgUtVPZLKb9oBxyNG832oPpEnbCJNuLeGCeZVRFVGvuU2Wazgx5GUuJNrP16U7gMejqJpfHJRL",
  "key10": "EhrKwVVko5jdAuquLTVupcBhD1wXnV6ug3WLSjReg3r3sdwGPJbaeZipiueEuDnQGSQ9K6UHVB7LtmLNFdc5ygG",
  "key11": "Lr9zgpS5P9XgCEdqC2ZJFpffBJrmxdknvzGSjvYisZYpncrX7swzTr4PCQSCM88ckbHh89Us6Jx7Q618mg2hxwB",
  "key12": "2oeCzb42N2gQH9EoUD7RvwFZvEYY3ib3aJYKB9AmVcfpNQRm31PYchS3sHkgMjCkaKkizgPd5UXPPnJKxDjrh23y",
  "key13": "2zHMeQMpc36wNVN2nJSSbQMURXc9w6JEydjVExTchSSWUh5vpcrC88cixvpjQzSzNEqgCav58Lb1r3MYMcTPWGBD",
  "key14": "3f2dFuy86YmCkSHbP3bXBmxb3NuvNefyVUT9SmCBo5EjkMdZFsJVKCHehuT555MwQZcnDoUJ1YpmeL8NTvHp79Mc",
  "key15": "3V461w39GPSmf6aBPf8dgq3zw2bAiMszJ9HeDgsui1kesFCANLGg3akdgGRWXvYbDvcmFuJ5DyGrKSF77TdZMPGK",
  "key16": "4N3bxutVvwCtaXmqJUzf6vVcVqUUivgWJSesArLXZuSBDFWbJWju5c9v7SJWCc6Dki1LpMFkrEas6Pzg22KP6o3M",
  "key17": "3XaEy97HwHyzaCREPMWkSoB66GMRDfshE1YLsxgzKu2TkcAzzts7EMwRSWrHs7MAxpHpmcSjsB1fh5o9cspFq3GZ",
  "key18": "JY4mVtdGKzTViZkH7bF1FnHNNVWHB6HH6jbcgFdzBs53CuE6me7dwqy99PHq8z3ur4DLQzwdAEiSaH3yQYHAHkn",
  "key19": "22orsppvPtn6PvfjdM6hBdArbb2yADAvTexj2qkzqmnxznC5WKvGoVhurFfpzTD6ym4rjyrLercgiRi1qNFAQxk5",
  "key20": "4sebsEAJyMCA4rTF85xscyzWpGwAr95yUpwYQfrEuQNpWyayEv1tuUT1H283sxMgiFCmcDWEPcekz4WGNH3LCKFq",
  "key21": "2pAnm5ND1xiT5JnFpb14uKb2nZE1QubZQ7rD5K5aiapiqvURN9sqRA8jNabRxeR75XsBaJDADTfK7xokST5kUJuC",
  "key22": "464gM76PfxiNEDezcd8ceaN5YPk577yKaNHAsMHMwEaVEiYbgZxYSATSTrk3D4noS5BzSE8yNtjsowp1h4Mp6T6y",
  "key23": "5B1j39djiDnYfuUpkQWnfKbEMVhqekyR35bT9ke1jsFdTFZRcC9hD6gi3bTeckF99xNv4PXpHzhXM9oXnmtEvEbN",
  "key24": "5BbTWi2ZTBZjLo8UJo4KCEQvSMTmLneQqaoAnzkH47is8NLTDQsj93NJeq236hXRinoHoKVXMFyMQjgSTL7Pd5Md",
  "key25": "5wY8PESyDyqhULcXWP35RRf43RWmytQ6G9twemXzaQiV8hQVDojo7UZNguFP8hSFoFX5D1cCEykUqUoiHueDTd3u",
  "key26": "56FwJFtuBZ8cUQ2hWY2MdCWqG8ahwjZeUwSCiWrfPSXRtNh9Bovvzr3EYVa9QX1WjD8W9L9zmLsJqPi3wCX4Ea1F",
  "key27": "4x66BjbkeeVPxB2LBXx6AmScm4hKZrqDdq2qFaPRp5bjGbFe9thU1NFBVZz8U44on9px1KXhKwM8gt4tVkfjAXKc",
  "key28": "35ojEnqSEmjFXKGT6kRG9TvwyQnwX2NcBNHLUxmZVVnvhWLkY6ct1r1kDdGbnu185F3T2iF3M7Q4nC85Vsm4yWTx",
  "key29": "311FKg7eJHMhg3YWoNtRRvT1kHJvHGoL3xxuXdUCq68iz5ZvtJ6S37aiRF5Kt73zmDrHVjxetj8NakBABf16JwoN",
  "key30": "5nBDxhjopaRTUigM7XXD9AbPF8q3vTqXziCsiLhpY2ab4RcZZVtk44N9cvbSEJV38eUa7JbMYiyoq8MTbK8YeQMG",
  "key31": "4nFdWaWNhXvKnTsU2LhhPjVeyijKbVh68RqnFPTCafJiXpRzqz6LrtZJjLoGWhPRi8cw8pJ6xrof3tXTH69mVSfH",
  "key32": "2MyfoGMmHpeTe9Z2kwkh6xLYumVwo6Bj8gS3sWChUCufE9i6BZeg5Bgzt74Dv518LhjM3bP2fGVE8v3eyssSjLKx",
  "key33": "3kz2GzUq26ebepYJp2iMYs1wmidgBcZXw7oz1a88AcQKM8fnHrpBoRqw3VwxWcsyLe6jNtD3UG3b5HMTGxWx3Ksc",
  "key34": "2NcV6aqu5k5w34H8HvcV8Wuqvo1t5HSiUTkBGcGveEkvReHkwSVBZRnUZyqfoi2iU1hDdjZMDmM8t9mNC2ppCYWc",
  "key35": "39R4jVabnif4vnFZQpCj7Dq9ANaU9zyzgQPiMgaURvxZmKeVipSi6ZjpfwrxMddzPTxmB8RpjKWu5eKatcnSPw5X",
  "key36": "2dpMUJs4vostaB2mD9Evz7Hqa5Mow5wA8UcMhRjTznEtSuaranfzDUqqbeZLLzjT662ThmFHv1pTx7VK6F7dUAV2",
  "key37": "mFkzNqgq2uTMw6mbNz9jNnFUsRrLj2oZDcbJusqiWTRriXM1mHRiFspV1Jp8mXbRrRTetq2cVbUQpqco7aZDWVA",
  "key38": "5APb4nfUCU6PnAJZLKG9Xih4ATQGkn2ARfJRVtFtUEtCuk5yynEvbJpHgpwWEGRAGEXvfzH9QBnsrSTgABhs4EXD",
  "key39": "2A2k2zgYpLCXUdvEzLTEMbJQDQAoQJQy83pjFrXjyCACMMZorxFsu9MjmqxXYmTFufaGZv6Eeh3hB7rGBJQhqDur",
  "key40": "3WdRGoNtH9RAR7axrUDmQCfEjL8nL9Nmhb55w7uVhzUfc6fpbbkyr6RPN87X7npXhZdMkHiwRsaKXn6dRowE3mfy",
  "key41": "4fSrcLEArytGYXjPWrsU3iah3pKfVT6eSFBZRPQZ83bS3R8quCPgetPceSx2zWC2yu1pXaLuMwdtsVozdvawW8eK",
  "key42": "3cutrdQMJEbDwQ3wHNxSzQKNAtW8DnuSASnd5LsKJyhYh55DFZmTKviEpGQM3j8jdAypShL7BokNebDGqEr8qJLz",
  "key43": "pLrqDJhydwuF4FxsWw8iDJKxtucDhroJfoh1wZnYfXPdZqM2RBbyuuZX1Jf2Nf5vWvkCJexL4QTY3jLx2A8MZXS",
  "key44": "48i9woYjpprJci2HcoB2GVorJaiUmmySwxirCK9a2UiocAD6T9GAYp4qzjpRGaujBeuot355SmWSsducYxpHh4zG",
  "key45": "32up2hxv7HVZP13aEiMf8QAceRoJrMxgczE97ubMHX6yZ3QUR7cC3DzvU7rAp74TxVMNGXackF58h8mBGbLvFgdX",
  "key46": "3RijrEmZqD9PfR6spdLoypZVSG1uiame2eoPw3RCZDe14LbWhFtWYafP2GbfyywPd1teBtPHLm3ELHZJDen8PzvD",
  "key47": "4o8t9d3LjEtqzkg62ui6VDrA9whnu6bfU7v6piJPxyL8fdNrPnGbaMvbfEPNPL3q7f35JT7TXBwJ1GSE8HbVKNxY"
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
