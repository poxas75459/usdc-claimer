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
    "3xf1rwK7HjZK96azMzG8LFT4ETiwT2TbNNCHLFazKcKuXKwrywNSEoqZcFjQMQeoFSNEsRrtghGkFEWZf6Wubps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1dLiJgFvQ1E1ai1dSk8PNav9JTWHwiwT8nNTpcekE43EnYyL7RVBQdP9PgeXmbsL39JH7Msgh9BLPzytvKjHnB3",
  "key1": "5Vvw3EVjhSuo82KsQLYijLRxWmSpWnnYza7cRunDUP6MXMTVmmzcmQDBzKgqbhxdbVH3dFmymM47g8EQs4T6EyyB",
  "key2": "3ymCMfVTPQLg2r8FLgPjG86V5sEAj93uNs7odzFzwW9Txb2H7Yvjd1uUe7zLeEAmW2k2C3r6X5PExcfqXKMCW1uk",
  "key3": "3D1v56YnuN5rWPL1ggKfYtfLxvFF2LPART1MnNMQYFipjatNeUpdhVdhq74cJxEMoZy643aWFwZh2DL7MFKVz47D",
  "key4": "ngwKdEwywDnp1Arzy7E7hX6isCEbmRu8pVnf8WXZNFsVWqKsoShrjW2CFtwHQobchnam9b3BNnTNSwqKzt9qhBn",
  "key5": "2yR1kfJ6Wt6GHu3pRZcD6v1kVBCbueteAmR5GUDdccGHN8L1Cr911EFnFCNqQybNpfpmKR3XPEq1WRzvnaJtbnur",
  "key6": "2AHYvdoZP1nPouAfDHP2ppKAmvSFXyWpY3YvJNyp3UqpH3k4wHyCLYzeqXCEb5LD4cFRqaa7kwsHoReCQZtojJTC",
  "key7": "4mNbzChUb16e8561y4LPqu28cSypxwWF1GRYdF6hYK8YsmW5qVmYf33DCooj4fHVFHqKSBpxvYGvrmJdnqCgMYBX",
  "key8": "5guRoZ6J5Nxy8smU51CRRsSfLLKc9pbLDPVSL9LAXYYezDm131v7w2Aafx19WQzZxth1wySDwVVUaTWde67DZQ1X",
  "key9": "4HyWUy3Tp8pTWxS6Jibpm9vDqrxsxM88UDUB924Evcai1c69RsrXwTne5eCgn1tLcw3av4TVbd3cxV9v8D9CL7qt",
  "key10": "38hANwuFdnpSArVqBeGtxZKBfA74kjU3yDg4BKAskQRn4sdE51fRqRsUptxYTCyLVXcrbrsGqWpKUHKh9RbHst82",
  "key11": "5b7iiJQDJXWprhbna7K242umLRUR2BYV3xBJ4ve1PBourFHusnf7uWHCjcTH9ybNQ94paY5cq6KUpUrCoQCwDjB6",
  "key12": "3AdVmDk1qLHT6ZijFqYkZRr6mmfDUNxipzVrNnT5LYK4CErVyX9nP7nyRJfSnPN2EWeskPzGgYLfCND2sjV8sSZd",
  "key13": "3NFwFJcojJFAtC6n85vHsry3UNAYoY9UXd7AifGgYHE7NWsne6qo9Q6s8xcTv7hFwB4wY3a2HiKoDtxcHYDaMDGu",
  "key14": "41Sdcdf74pmZxfVM1Tq3b5ZtDrGVceBRuTGs3ejCBUmfDGhzw1Sw3ahSnany79fH7AP93fUcKSSnGFh6TyEQNkCL",
  "key15": "2cfZJULxjmLLshE6STQw7oT4ug9ixKGFiTGvN9eb2kKEN12iLL8EECJvbesbQX1Ph8p2egYDLoqXmaaLHfW3cDoY",
  "key16": "2ArBm8QF9gFZ258gRLdN6XUjctHwVzVTzW53jhnRz5mwysvDsz8rezcxQSKQdtzsoqX8bu3uDr6Mapeu1obogPYG",
  "key17": "5MU1vkpaP7GxCizXobBUKJ5GcxkC151WK83PWuVcsNi1FKhcCNNYgAsUQSDfxbiUA8CYYHKaEdMXx93f5NG7vDej",
  "key18": "2WGttoiXnyBSTDo2nzVFiqjgs33hmfufsEn7v1adgcRVmzUkXU2R39aUdEc6iHAvYWeGud18t5WXAA945vcnWT2F",
  "key19": "mHakX9L9W3cPF8ygACEvwHNeQG713iQoqc3ygKuhbmKJv9bYfaYKRA95t7PTs8A8UpaPSmPQ6ygRsJSnoXjR3G4",
  "key20": "26VbEfHuu74Yk9934uARGrevjC5SA7i64U4DG5mNuMZLdxA2pYaoFoXSspQPM29Ra3WDTSosfpkUsd4TMRHYrvbC",
  "key21": "3ByqJ4wTT84st3wfveD6S79bNoSN7LciKyoWvk99UR5dcXP7oqXbH7ZqgPzLMyVqxSTj7d6hKxHoQWKvke5REp9i",
  "key22": "w459yMRGyxDt59aXpq7dG9UU2fpWQ8x381ku7KvzQL6yDgSbVy14bNtqHxjYuqHeHJdJkFGjARA37KdMW8nUASS",
  "key23": "UEBieRKZsVajGgenx3msMebWjsXjeV3B5jZfmwwbCVW5yD1e73Q35ymXuwBn6WncyWYEx8cQqNhSv2srUtjASvN",
  "key24": "5xHtHgcrLaTTHcDSwVBtHjYgxXrnzGEhZd7Z7z9KM2DDJvnhRjmqQQS6myJuGynxDDLivcc8KVNuZc7ftC2niRDx",
  "key25": "35QExac5cQpGpuxJJ34idn5s7vkpMADbuM4XaXPKRUJbxDbBDR694Y7hpgr8dsydCGijQgtVDFGyBQHZz54Z7Lah",
  "key26": "4kYxSXz2Ddc8oNCiVYknj3xa69FY6ee34rLa8YPXjuHuVXZ2XuWVYkTKwdDLopDwxg46jfMQkbM8ipa2Cn7xk9ba",
  "key27": "i32py1jTCoAmcZyAuDc554rpxkJ5HA9V4oxBno24JUrAjonwu7pY8bRYv7a3pTKTcH6JgobzF9QZqKdABYtU7Gd",
  "key28": "4QuUT3qdKtgVJPSd1bzq9wBs97PhgECwhdLmp6De2GYjqh8ASRrDqaRxjaKxHpTcija3i12f8JQhb9df5TrLJoiF",
  "key29": "5QAuct9qhrFs96ibvnhzsikjeYZrAjfVkXAqMj3cnmJsp5kEcYLrPrxxnHUsdLsdwpb3unEi2LcV9hKJkFbc39Co",
  "key30": "35Jfq3XUQFtZuHFor2fYKdawieGTxNv4qWLS4ngT7UHypcNKXbnKAcPRL9s1PBSah8u7cp25vuKqoZpHqcExpBTx",
  "key31": "5npeeibnJUDCjvU81PMRqicGWTAAZeZJhApAWWfgn3jk4k5JxDZgcpLNNbYKcGwmZ47mQ3VUJ9iegUFnKL7rRPEg",
  "key32": "4mMZx3weTE8pEqbhiv3Lvn6KURCFnAqFpuvjDkjiE4KPDn6nqn2AgwpabsFfLx1kVWGBwMYrUZXPDenVEjJSnYnq",
  "key33": "DynQe6XFRZcpZdZbKkSVKWUc96jKhUYnUdQJG6jjEFvmpdqbHe1AwdX7sc7C97fm9maNP6As9kQVQTZzCLTPnk9",
  "key34": "CujcLhKsJwxRhkTFgE4dvngFEu8ay7jhZJQdU3kSQon9mizH1LyUE7aSPqEjPP7drcyF4VLj4ma8gVSLkWd9njm",
  "key35": "2PkS8jsMaKPrLvGb7MMgXyudoEE3nYmNdarKSJNP9CWXDdddE6n5WFtprRjNaEmo4NaDF9cF6nFbwoPkjLH6yZYK",
  "key36": "59wX5eRzH7Znqg6PvtGrsw12n4pHfmGSPpVX3eVJEizNPmcgaqrAqavYDBm6qtsML1GQR4VZsBwJ5spFBUeBsHk2",
  "key37": "32g1KJhYZt58Motmm1sVZGhUtesZJ7FxsRGqiFV8P9RLDzCKmM7qB6pHX7eTW4f1WBF4P41CiV71DMwUMaN5g4Zb",
  "key38": "5GiT4g1SEq82B7w1T4AMFyEoCpmWfXgSetBzn5hd9KpYNpcCtQ88YwW3cBdmghcGUuRejVcKjVBj72pSb9sQxiny",
  "key39": "3YLSjJjuixA6vPZukrR3VaLX3XUrbWu1ArhHkEoVmhfqkLvenzEGiZZAqvnCAwXR6YFejmgFUfQrhAM35N7xmYjh",
  "key40": "33FThDrUEMvQDQ8EfDVxWoXmxetgcb7Lopmw9Y1ou9H9KPpSbzmC5RoAn3SSWTx3h1VExo4htchs2VfZpgzmFMuC",
  "key41": "4htME7uUCN2hYp6ry4MtMkus5XUMHYsa67Nn7zo99aoX1t5JezFX2mmLuopWv9iFUvCweo3sKGneCyTwvBBc9RjW",
  "key42": "3VCeJWR5Cc7YpvpHcL5th43ftqupM2CRszEGKfaAAgQm5uoUAEj7atqHs3fnEYTquJH3L2ze1QvSuHQoMD7PYRSc",
  "key43": "3vXWR5EQjirkoMBFcBspDf7A29aVfA3eiKrHRUGCUKV5Ge3cCKjzGg5HWSEonemeuGhDtTosP3wmdX4ArkSp956r",
  "key44": "3mGYbMaDY6sEeecZzWWDDgD6frcsVbrFcFDjkBNqYzCqFGUgGduwp6jzcWKAaBCtW4tCNGNnHMBSx72z9UHwK7Kb",
  "key45": "r5rx5yjA8H2A3tJXTSaJGzrZZeBg7obyqJQREanvBXAtoxXBeGeZgm2seLMDkk3WwmnFo6Q6QjoZgxETBxC6EH5",
  "key46": "RwixgF3BkuAifReBmk7p99FyK5W1rQeX2T2p1epRVeJmrBQruNxvyESYwT8WvRvFmQaWz3s6bxnGjHENc6ePsza",
  "key47": "4GvgHt1DsyEh3s3jmZExiQzW4CW7NDVmeSVPip6qFrUPD95hNGw3z4AMWvPkSvZsRmgNtU3X3YkcEv4jPXHWQPWV",
  "key48": "4C91sjHp733h4gLvWKVBnfjM5MC37FKCqRMaDhfxECN76TpMRjkx6wbQhYixkorJVGjaJ4qj9a1LqFPed6pkXwga"
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
