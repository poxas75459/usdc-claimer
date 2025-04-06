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
    "2MMepDwVNVTjkjzmNBqVxL1eMyiQeu5Trz9e7JJoa83afBHPhv1woyyKVdoBxs9YM6XCxAtvDd4cpocT3hQNK44P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bz3eboN2KCJzCUwj1Ana9XmUy2f6fDLRk14knYKxH5GiBMcT9JeJiAkDHL4nqoFacrG5rDfV3SxigUxpFHbSgmp",
  "key1": "3aCzDdPab8z8PWKMHAAhNcCaNihQSEwtpHDqk64dabAPKQJKgRuRcRTY8K3YnutTgDbhX77iKGn6Jqez8EwzJq2P",
  "key2": "5htVT4MveABjv6ujVXdaU6EPVnZVSBERRTbNmrVPfHD82E6tVugtQCP8TnGe3ShZZ2Q4bq7Sm5UFTB9t6Pyg5CYJ",
  "key3": "2kf29w7qLNcL5qvBHJuTabs1EX8GYSZEbQhP8hahEPSuHgEACR316GUR8nN3nU5AnG3ppBTg2ZwWGi2uhgtEo6fV",
  "key4": "3fBhXxw8QfvdpEX6oMr671z4j3aLXdLvYhWnWFiBTWX9Vrw581b37iSnCFiUNHCgtqHmcdHE8eNzeub6qZ6MGbne",
  "key5": "3PAayJMmiinxEwEqjstFEKXQKCnxKGdJowdgzoqH1Zdtf9pPteu5fMZe6YEXfQe1wN7VWVmqK46MC23Z6fKhZta1",
  "key6": "VvyodQh338AedSYAeDMxosCj8n9q5dhmp8xSYbPQHxkKE1T8kyMAWn522T9HtZppKZH1e3cZNY82zcquQSGBAs6",
  "key7": "1VWijue6MyTxPBdBb4ZdqzzCosbK5VryhVBDbmWQUVxjfY362Mo9owGcqPqUw3VHpCmk8JLzVj1GEK8Fr8U6XNx",
  "key8": "BMxedLD3JTvRj18j2SeQhtREoGBm1UPNn8eARsjXPYgvt3e4tAbVjvDYUKLNHFp8YKLi1pCgSDEbc9ZTf5eVU9v",
  "key9": "57UV9G8n7LU3d7SsTAZr1jL5UmZCgjLpnjKuWXw6GG6WVUADTwJyQTXxrY1qLqyojYYXSCfEWCRc1TsDatHW6VYN",
  "key10": "2snyr8HKHYojtRRsY9wUtREYmPtpEhgyrf2bqq2uNxn5DabSyftVLrpSDEa1PURn2Ai4DcLWqZDd8is95ESjepAv",
  "key11": "5a8LbxaDe6gGe5FsV7ZSNQGZZUN6tusnSuKbfwhLYakTenCXTRJwRy1YpUN3ynmCS1eVej5hRsHaPTvLfH2EW8bF",
  "key12": "4SdqxdTQkMWxSwNsCToBntV44ruRtLgVTdesYeGKnMiCpq64Ls1HQpeUCJDrX71gEDrTgznL4eFPEeQHKFiN9Tzb",
  "key13": "5g9mh3LjwNpz1JQpeU5pTvdQjQ85YiU3THy1Bn1b6R8ue6NatPxUr8DnmngaPBsvwj9KFs1wvQNgTejf1bvpH74u",
  "key14": "4CzVv64uVhWLVXWC6kwRvzQDfYs9uC2byn3CbPTEn9M2dd6nTrWZPFrLhiWaPNnJr5ZcwnCguS2czSuYv2kzRunC",
  "key15": "26cCmdS7sEFKzbzSqg9dLsEb8qfFdSFvg9SJgAeEtzAwp5ZnYMRKKUMN6GHXxFNAoN7CY6LBwGNzVDqcXKWX3A6F",
  "key16": "3YAP9S398DAD7NMJtxMs8Bxff6BLM9YZn6XAkufAv2kHit1nS5aAZesqXYdbQpU2fxXuyM8JS1k4otbLWrwaY2Zk",
  "key17": "3q9DQ8ni136GVkPMBp5Zb1WdNiG3K4JeP8ohq9SMmhaYXmQog7BZyMRedu1oxMhu13qZjus2PUE1gc5UHqjHvTsW",
  "key18": "3aHwaghn61ri1HTD9s9EgsQmABPF24tcMFu8wLEFZZYzVAFdPG6cHmsMUYXnwZNEYFCCsdAyFT81tDhR4z2K82To",
  "key19": "3iZvyg5JepNCwk36CBjQEYEAFcEp6zf7i2CVTqNARTD23FNU1yRhvttQ4TQrH6XEpdkYZhKXqV7h4EnGM3jDc5Eg",
  "key20": "4uQQWmhqipULr9yJ8cyS1GjoXKHJhk5BRgePTC9W2T8esdyDDEaCUW8zCUzJFFjRKxZCr1YzWNkNXZRBK8A6LdqG",
  "key21": "5doymdfATHySDkvMwHz7fzXa4ULRQYAjysFC1HnA4QY6TANb1YiUxBndkARUapFGCD1Za5wCKuTG5neebqrEcVTs",
  "key22": "2NGs5AJEWRTKRCvs1A3XWUxiKedMumvZ4cWw7KLNkGDWT7Nxxyvq5k4F6k28JzV7BgiYW2xHgB68nqUUrDGbUK6c",
  "key23": "4PHvi3RoNYKT5YYzPGXeuKxRWXxVGnracfd9BbVi5jfnpeir6XcoTzni25QKnueaShBZaPzxuv1KsanmajbFF8HJ",
  "key24": "3Aa2f6smd9A3V7gzJEske9Gz4DiPWPThznLiG3exvz5ssvrR3XxitFRMr7rfkqRAAqWigvYqTm2yc2PK6fSrpRyV",
  "key25": "31JmPvWTGNatPULP6BKucxjvMB94xuZWxnnccUgqVN1z6qzjVdGE5FNtrRKLkuhNr7kMdNWRh5bPweAYaMjJbUiv",
  "key26": "3yuBf9NLQ1TKp22BvzmtNkEBxxRknY2XAekXYn5jKLMNU8Z42pWPdasBWLHmF287sFsbiNnnSZupdCJguXXeSwwu",
  "key27": "5NmPCdm4N5NGrSmbFxhsGYbRsSybbgvPu9pAVKZFtdJ8d9Jrg8pptbsrZ2SFi5tn5L6sbPwCDF7a8zyEdYutCHca",
  "key28": "5FeYANJbMigygDCHDaJF9ixGu8RnRC5suGwQz1N5tzAHRAUyDLwHarQAts7yGASs6TtzpTgdaM86DXHhNetx7y43",
  "key29": "3P9roRxaaqp3FUCRb8epLLSKyMAoEMgZKoFMGZpphRNhinbdCDmSa6AeQgHZKiaoNvdKU3Euvw6DMqvYFDLmtPaH",
  "key30": "FrSEQt9ta9vdorRJNv91r5Y5kZJshNemFKD9DgpGcFUTAbDt9s85Bds5vnhbLmtQ1pHgkmfDQrPn6rnmqZdYx9z",
  "key31": "RoFVKGPaaZ5iafPvkF3hkMVBxeqU35r94Tgg3G3hiiYTKVNm4LXkbmEpbj91WaWB3TaafPAsqQifFJ29MfFbzH1",
  "key32": "5wopynnSYK1NdUC8doKxnSt4k9i4ymzF6j9fXscKcoDobdMdY98oCEif1pbBhM179thwEpGLPeZ5zTSkhu3aZeFh",
  "key33": "5CNXSyxX4YHBQMEzvdj3LsUwJ5qZUc7qxh5LBUdkvyZXPDLVtiZRoRHKfriw8ZhdmqAjbJ6AXLdA5DKXsWZGAqVk",
  "key34": "2PpBgdGMiJUGg6YJRnYp8BjypECjrDbpjbWC8gycWqHonV9eUSRRgsNPHG2fkfheCS1juS5RSTHY6ChXDUZib2Bn",
  "key35": "51aHrzTDnU1zZFcqh4nC849v1ABhbC9tWW9chLCaVH6CYj9Br5hNGwHe3brZcCRibw9svt3xptCxticvUCpme5XK",
  "key36": "RMhxcSsnTaS6gspBMKbBsbzNbyF2VxgsSCccwtWjfRdYhu13AQ9QfzPwz3fi2d4s9CiiYa1ttfu7Rm9x7gjDiVD",
  "key37": "Jf4eNrYY6JeH6izPHzKSZ88n3zLB6VCP64BGDsDZDXVDRbxnpVKrjMBKoRqjPpgdviZ2siyKEhR71JfBKAU8tWN"
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
