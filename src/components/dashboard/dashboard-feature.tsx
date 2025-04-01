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
    "2D75Gbfkg3UhR7ic6ZjtBgwwmkQi4tEsmDgc2Csb7oqinGshYmvNdL1BDRVtqTZwj1sfr6Vt47TpuHv5WPJvucuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q9BwZf5C4kb2Z62LSBYc4rgNo7URLNUtvAxYTSwz9a1CGHt82wKxXFnjUgqa1yumG9dD2vTJiX1FTQZQtcjKf4j",
  "key1": "27tx6wmuzroAhWxShiEcjdusoSca4LcSY8yYjQNgg4B7JttvsGpWPskYCohx42abjF1aLNimVYWEjZwXyibxVP5B",
  "key2": "7YroZmFnqDPXwEsAKBRKwRRbfhDKfb7VsaV4SpNa34uE4F8mxDLkqhRemMTDwvBihozSeKLzqwrMDA67qy2VzuF",
  "key3": "4JEXnrU1B4ceEuPsuiVws9n5kEkFuwm7Rtxb2VvXdtSgJz6x6YJyUFVKsbhKiezY2k3FbtUPXFAvCXEd4uLGVDzM",
  "key4": "45qLmSSMRQ48csmfHriXR3ZLboF4tAJZ3E1SQxF6wuYZ7ZE3diFZs65ktzRKPqLQuSNkVt4qgtWWTnCYghwdwHks",
  "key5": "noNdujUqq1VxHvNRc9U5GG7E8XUiG4G11sAhnnbSVQDHyb44UtZbQUE8nWQ1hGLpthgRLDvgP2r4vBHkAnobbCd",
  "key6": "3zCYRyQVrVge3aX3SHS6rTW6hZEgvAnJEm47KMT7Y3KEMHqxkMJfRgfcZRZ1wmABsZnQ63VXGv2TA7m3bMGZ8moG",
  "key7": "3riU6W9zxk1MPJx9EQXpUCmk1NNbsZpdDxUSiTqxvcKiEucJ8Gz2rmzrjcjLBKqktULUcFakKRpVSm4UR6WkBgw8",
  "key8": "JHyGEMdjp7m6AjaA4zYqP6dax8jqosFCqa9XubTLxdr6gZg6xfkvPAfmrNffRux6eEU5hkvovrttxupstenU4bn",
  "key9": "31oqGNwMYGv2kJQbCvSRJSkGqS78pbDKVtmTjTgJNHuChoytnuWtd8rFiTPB3pEbnsFAvZf7BhdDJHN6naf3rRN4",
  "key10": "3dauPm7SxP3DQGuqvJLD2tc732GkLu1rr3LVbYkdEaS7gJ66CzDdukGi6g68Nkt2xbfpUn7UpgeLNe918h8xEDf2",
  "key11": "3186DvhoirwGEy3Bv2FLpRx1Uduvb7Z6ndLK5nTZrYMzmxgaRdNLKNu2jFk4CK8k2YHBwBzTpHrLSb2jetzawFf7",
  "key12": "3XEoF1m39nQRaWWTKZ3VW4tptjNYgA8ZQMrk61fzLQW3LD2gJRcKyr9SBEV5tzz569YKxv2TmNx3bPCDQMdnQfMu",
  "key13": "2nBxhLSzutLFKeiM7Sm88wKEyt4dnTPQd6DDzcsm9ysozWd3Uniev4yuNuPfcFqjVEJduQqZbf8GsmM96bG23eec",
  "key14": "5MLi3UV49RoJiELrj2hZPstZ7pUwu7fxMfVrqA3qmyQXL6bdJDzYpP2dsHUKPeDwdW5Ny6tSyGTkUVm9DqKPZ4c5",
  "key15": "4Rec2Qs9VUnxyj3VLAQmL7sbGobG1PfT7nNnAJbk6wwtUzr9owmZhtFqb5fGzaoVAm6sxA3e7XwEREBXJSc8o1V8",
  "key16": "2SVLKoCTqvt8sKnmDn6b4nUBz81Fn3uiTUauf1GJepHC1dveM1Y2CQC5y7RzeCagxc1HDZQB2w5GgLPxnh6Zssx6",
  "key17": "4v3RkXLGuHDfPw9GUKdDvTgG3UfJiRMseMEa7to8zzCZtyHAQXpaeLufPjhnptPBpQ7c8RtizG2kEN3Wyq7acJGM",
  "key18": "3RbWUW5qi24Fc4GVc7nyRV3BARUTxTeQ5d7bb6GdJmbud85K4GqSaGUkpNwHjr1wZa5fB4r49UUpprLmjE3b6Npd",
  "key19": "3HN2utq3Wo2pkxUJefZVWEwuibmLLUhDpoXHh8RL8wY9mXHMzKtNsXHy8CPTabvG7e16XdGbFxuL6YSiDoeZpz87",
  "key20": "KmeRjBshr2CufnoSXAypD5m1GPbBMSTjkSPZLGfj7YgE8zoypAE7qHRm2BxuAGCSAA8i7TAC6rPpxX2EJmTmZJH",
  "key21": "4NEoohVt8bp2rC1C8Tj35wnDnsJHQmvXKHaXwS9HxqQLiY4jznGihEhXXxrbHDvfyV9dnofmwY6KchhjAtRzppD5",
  "key22": "57TL1Cjk91dsj2MiqTA2sbT3ZRmcz27afzpgSYShBiGZvJ5xxeg67K7YAVkjt7YHvGCo8FqtFxphtpmD8qHDmyW3",
  "key23": "5DNDYQ9PD7TSAnN76H1LVFzFnrjn7ityuUFSbyx27opyGgic3c84SmQhg8a6gsqsP5Y4iNSMm8VedPN1bKEBn9bu",
  "key24": "37YbVJWaDj9kXf4jgtNMt5JkHGME86xt2sKo8rBHRWMza36qx8tHXNRcHxzYLYjhtcPhVBy6KJB7nPBB4NLi1FVA",
  "key25": "2myRPRhA4c4R4rEEyhsLd2PdhEYjzELvhM79VHXB5G96BaNU5Q3vNHfQiVfUnNLQ9GAZYEV8th841EHfBFXpsoZZ",
  "key26": "3ZRNC3FYBtYuCgeKw6ohaY5Nq6rUJpU3T6KEgazUC4bBD5ykaGwWpAoBZ3HWddEhpveRLh8vRUtoLiuXb444Xgch",
  "key27": "31QLh6Qeb3a17BE8wKD6UTWkR5r7oibaFuCwsjCwFHwenVSWMauMpe4G35eXTbnM9GkXphUz2yT1oqycKaEpTo8d",
  "key28": "5WRGwjAcxEHdU5293e7FKJK9pmm7kjhYef8x9A2yXCYjCJaZcS3GbhUJ8uPbS454son51cfFSYC1kAar8Uuzhpkg",
  "key29": "5dARCPSNhpJ7Ggfor9EThM7zh6vueCwXAXesp4eXmMMYRbwMPoHu6AQF5h24GjszEuzJEjvh3gNspVNKQo1T3Ypn",
  "key30": "gqLNDMN6YmDgMC3MLUzj4jnZPCX43R3KCGYNdc89aM8g4SQ5NR3sVxkUCcWrsfk1RreU4aZTcwrScBs2Dta7YZg",
  "key31": "5VtxubUTvz2DSvVJ8N3yUnPBak8QCkbaRuDyqmyZKfziA7e9aP5XxTpuLZnrP4GVkkmk55SbtKZf4VwqRUBUGMBQ"
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
