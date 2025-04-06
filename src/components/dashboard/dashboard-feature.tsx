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
    "3y5UYvwvYqPQQ8DBBTLUVuDEs9tZK7EqXbdvdHnSptdewkEw7BDkf9zCtErMk5Kj8VwzKuWnSNF3BE2LASFthVSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CSNg4qsDVspfLxGivJxAoxqKQCq8igjqicrLKGxDVLEtFX9niXQeXuxj7dafEM93We7dWR5RiE7MHyc1C6ijb13",
  "key1": "2nbzWBHRcrnZfUSG1aZ2enNThfRzvqaQqih1f5oMm7bKTL7ro8KXy9FLRikuCxP2HL8kL7fVCk9HM7P4H3R6gMw",
  "key2": "3txzx7q27cGGBoojSLtJPbQWjEXHahCfEr3w7hCH5WmRKNVgC21UDEa7BPjQGMuzKk5J5iMDrVfgUpsHSgmYpEK5",
  "key3": "3iVUGuQE1112ck31FH4aURUQkoWbNmWdQdyCkCyCqjyyRd49RHWtiHkvkqW1MXy4grGKeHpnMB5A27u2HUncGxji",
  "key4": "tk74Zj6imBFpFxhAho3WGXawmGtqt2ThGZ3xL2vTUGpmJaBCJyn71nxFKyb7u2zrttjV8g139qtqhcdyjNdpjrv",
  "key5": "3o6FSFZB7mgriT3k17VxoxmpBvc8ao9JF9Pkz8cVgRy3e8ixmLrw7gr7LbjpiUtpwWBFa8yMt5W7veZgH5GhErfV",
  "key6": "4Z2zxikGawc63ALU5oBfc7knF5VAunba4WaXvCpmXGL88oBUUpfZX8UkVgx513U7vABvoUiEUTMXycepa1brZJaf",
  "key7": "5CTwcHFEYZEoXTvGxD9494FhJBzedyC9uAdFn3ufAuaDzoGaMkjTGmDcnEdeYAJCt4jxmJSHEpf2Czxi7Ga9mEAW",
  "key8": "46m51VSUErn41piESc4r4vzJx1iduSGhRELdFF9NvNCXGE8SkR9xDSd1nwAYzX9D6aw211NQtzFph66hrtWiKBN3",
  "key9": "2T8m2uvr6m99PaX5zAsoTeWjhKZTkaGfcYC33d291reMZ2VsQ8c6QUPw2agXV45yDfrN1hhACHbqMMnUjBgRKSEy",
  "key10": "k29k5XkPeQgfz7TPEEp6mCXfwYKqp26X8dqdZ3HNTPi42dQmvqzXdbpthWWJqRKQahQvJQJna4Ve4QgghA1irHY",
  "key11": "5d8W97qhGVYwPrJ9wSmk19Q4LuCa9HM4DE1pFCC8tovgJ26LCS4BrLACf4hp8mn77FHyp744KV7HALP62GXF7VqX",
  "key12": "3Jc1N1do7QDoiGvcJL9wAMDxHrt9G6MHGoshMerqHeS2xuPHLwmAd4ioCBpFjL14x79aA76pFKaFiReS9pK6hfVv",
  "key13": "3S34caNz1cQBnCrDva9quzK7wEshpQYkSs2YtPQXvbKSemfAy6GrdT2fteBZM8nxF5vq87nGReCKTrKYb7CTwQ9S",
  "key14": "6T9EE2gdWvCq6wyDaLnjyqERMAf8syTATRdkh5ihJ1JE3iYBXhC33VPHv2hPnvsQadLEDUZQdrLPmdnvKAHexRr",
  "key15": "tGUzJygUm46A3nmDvoCv7pY3cYjJKtRzUpn7BXc1X6KpKYy4MbChqER5rkFLn6iXx4z77Bu6JWV2qVrK85HjmtF",
  "key16": "CCqhYkRNKYfZXVfhuDiKZFFD7p1yZfBRjRwVSnJZ1tjcqi3HofY2ZREXjo6XdCSBG1Phahs8JMDG7Pq2HC5v5XD",
  "key17": "2kcQmbTXw2TjDME1ashsbjfRZaTEbjnUpW7JMyLebyovrMj2sZRxSJLhjhNDDZvksMSgD7ALhm8kG8ZHojf8rG9t",
  "key18": "sAaHq8uBz22jQFGA4B9DFHMp4hFBcS5KXHQgZZJHXxzJkUuJiPJ1pGqXswRbivWGLyemtZqcHThh4SYQsB7G27v",
  "key19": "u8nbL9RfYjCkzoL1nvPjcDKeNZfQqB3nFw4DLeBKwzeQzLc3sRcd39JtvTWGJ1Q6kh5Xpx42m5Qx5MkvK2A1uFz",
  "key20": "3E4kuV4JdgWafhBYAUpDmYMHny13tQWCF8kfWvZ2Gfsf7nuGzwRqh135DeipPeHfniv3sgWYjaCb1cw3DsSHX9xQ",
  "key21": "4AHX4ZfL24P4Ax8JudgC66zvBf1PEutofvszBHqiTyviWWagyj6eq9cE13t15QRBU6Hnmy4kcFh2wtNVk4u8z6ZV",
  "key22": "2iqD3wZdg4ZJ8i4ZCF86uTDvkcziERMqTyu9bEsybSjGiZ1yGjwWgeFeZEsZ9bKqf9JgEuvtL3JsX6YXgrJCoL3B",
  "key23": "5qXQpWPnjXi6R6kzkbpf3u31roVrJqi5vcJ9TFT1M2sAWaycrx3rmB8EULdNRf3HA5uSXyEdXSR6xNwarE4JZGcw",
  "key24": "NHmio9NUBBZ3QDXrkJzhhNaU61fxSEJANjcpPhtjjrBAwB98kZBxAwyLbayZJ4aTGBPYjG11f2W2CPzDCKm7tEo",
  "key25": "FsjjHCwjXdzyvPJGvjjXBZE82NX56vywekTZz3p52VW8d5hiyYwhPk8ih4kdSsE9JbTzkAJLTcgMofiK4q8ZmMB",
  "key26": "3757VUZxzFR82PmDBdmEz5R928h552kXc1pTQP9b648XfjsJWvbsDpazsxs4QbseTQTpaDQTuxZuRJZBYsvXeoU8",
  "key27": "34bj6SaLjGrESjtfnDuyfp8RgF2t4srTqqbw9Ker3u7hQsuguxp871LafzYNq7s5568FPpKBDCnFcVoNkaEwdB3a",
  "key28": "3ox8hXgHKQc6KAjFUre2GVtbxHya9UHaQWL1MqMhnzXPw3FvoFAukmAVs3ZrHSsbYaTghZ5XfhbeoKBjNFsxGdcw",
  "key29": "4XLGk47nVeG9JZLTf7ujnjoZiEzvxPAJ5TduEPPkRJVHCwghE1TYRhH7EuwVEx9HpT1NsGA6UFvmbvD1v9HAstmq",
  "key30": "22s7hB9tP6a2hbmDwqgTK6o74dcTaXM9nxV5itJ45jVimy9oAVRNGYMmqP9Z2NdbE9oxmX2jzUxH7x4sFS9WjMpx",
  "key31": "5CtuSccdn1PHkEquJ5bZGy415ebPqQEVLh5uFLP4pWSLriXKPhpeApbrX8eTdVFWv7CVJpoHSCa4x9zPQMwfE6MX",
  "key32": "4QesAefX4uV4SUoa73dHiXJhDSYGToWH76QMyRLn1RhVGnBkFtwUbjzDV7XzGrPabYtYshJx4pVqB415fui3uTtR",
  "key33": "3nUMLEd5RjsZ1ZBZL276knMxgTbym2QqsvMEcQa2mt2vqyZGJxKfdFjwkVdSwtCpPATMYaZFzajEGCabF7ZywP37",
  "key34": "4dWvmwBLRGLYH8i5MsDNxZeqrrkRvru9vEE5tZD6DbDLnGSbwPgMjkX8znhmU84ZSPnFCpJrWkFmt9sZKwyFFKiB",
  "key35": "BrUiVdnKWekYLLTR4UXPKHARqrfoV2ZbXqdT9UGEvf1UXFoBQtW5xziGvtWGse9y71pvfiLXXvToCyJACbkY59V",
  "key36": "4XDdzSykz1EEbwmbDfkMB5cvkWSBJiCv6fcCrdQTCCNMzDcToPqn119QvuJ2H4DCdkg5iH2NNqkdFnWnN7mknSVF",
  "key37": "4f6D9iZsVSu2xoKxAChUzvPurWBWedJvZyMPgXSombgQe2FYzshagEzJJ2gdta2VSSM8tFYJhC9vwXovDbaCs3QY",
  "key38": "4X58xxgj4EMrSEttoTDRddZn6fvowbPMvQ4Raa4Cfu8a4hN2G6DFzBt4kbkjydgLyELiWmDy1W8QEmjFWp6zcccS",
  "key39": "3UcTXf1zjLGmCNPQmj9Ybe2gv8jroTYy4oy5dXYi8HEvbSmgu3J2dMv2h6svjb85U4sXmt2WJGBa1FBk1W9fCZMy",
  "key40": "2WayANSsqMmJ7qQzb6Vt4VGTqeFSZBRaLNsXwwumQPap5CoR9CAtrvpSSi6CehcMqhvzpJDk5brNeQL7FfJ99p8G"
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
