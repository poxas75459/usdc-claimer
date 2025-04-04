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
    "5zf7WFDF6geD4Bcuj1sUoFxhkwf2FH27Zo5FNDq1RfyP3bn7dfHxiBB7iAxJQNcvk4BTYfMouoyRBSMACncjni4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fnPuyE4EBtBbtkLLZn7VVGgqs4LFX9BdyxPWsBeA9yKKxPbWa4fxeTbnCxuf5XvmYoiC1Sje9JywcrNDqzRn4u4",
  "key1": "5Y1jftbXbxSqdYXg5i8EzpHXFB9szKFc1XTQEneNZQUsq7UAjHGwRowZq6nV2EZyG3fhb6NZJsA3os5eXvSyJUYN",
  "key2": "38bBPjNNpXPTUoCoCeRch34VpEhLoae768frjH5y1cM5Kwp9fipoRjWDmCWjDh5FFwgRHmQcVD6DNJBjdxvgzcCf",
  "key3": "3tocASXos5F9TN3rTonEtaQAbTXCJ4enh9ZC1PT4XSGC24DsRVzGjcNBStwsnbDT4DX6XE4YxAaZTKSwbRFcWenL",
  "key4": "63VYJCwRwPjVgKHNZKUmH6W1rYpR4xnUbqxqReJa1mt8fj4Dn7uSsZMPDkRJHNhprBQ9ghqMnAm2sgmbF6xAaSBZ",
  "key5": "tDsLcxjJfBsrDfKjXUVtkfj2mwbDDufvkSQZ6ccMW3M6miAzxTehPd1wqq6Dnn2f5ivGw9Uf1SYThDuD1KzWDTH",
  "key6": "3fUBJBT2CBMpxj1VWoqyh6Tocp7qi3VdwtkmAVNmZt7X7C4bMUGqFpFVvGavxaMToSVc7HbXsvu5kBSc52AUdLDP",
  "key7": "3b6Gx3iTM3nsxkyqtSNAG9nAsg3mTazKaoMsKirbWL5veSRnhQCfsGdgg2Nari496y7edHaDMDEJ6pptRYSBBBcg",
  "key8": "2vWxRou7aU94FDUgq5q6PVURkKnYuMikcRSs8FwuJZtYKvfvPqRG5fgqMjrsdczRUfXd712CunW3bk2tNS9WaZfk",
  "key9": "4aYtGdtfPzyugk55dpp3avw7rE9pBC877VdeBLiKazsfvipuyk4iyJTkGLq1RnmFwz1zLekEgoRyJW9khuxz2uAi",
  "key10": "atcLjEYg9foENsLzqZuGgR4RS5fHn4mY17VybJiiHS2d4EWiDjg9J8UsJcsRGq3sjm4v5Bfq2omjovFdVWeZnoq",
  "key11": "2oZZN1bEkrptTpn8uXQiropqYJgcN6aShHqD1K1MnPE3P3fyTjDoVkypA5aLrTgBcuBvUBU8s1fwGpZ3btWrUd4k",
  "key12": "2VchB6QckZPrS4ncM6UGdXa9PfazsNritaWMC4AxzpuH9XGKL3FX6TknZ6earX5r7X2GrnBZX94fNiXM2H73mC17",
  "key13": "5ZVt5ePuu9iRRmb1GNEVNJjyqmvMU6AvAZbso7ctDLXkJa5eqQgVZvvpH4nUEzG9ycmUpAfJMsh2wdoHMRrtyg5X",
  "key14": "2jUxb88RxmWMr2V29Zeq6UExKhx5AW4YvSVJcxko7Yoh5brPZ3qyECffqwrN9iW7CKbBB8ZBMfSbUsHiJCYnisFU",
  "key15": "631BewkUDpuhVcjq3snvoJcgjCHbnwPCQJ3DTmwuQaCaoEdguqBhtQMKuvDboFfApreuKjbDyJtqm9MJ9hKFFFAQ",
  "key16": "4oCc7HHqkJdQAmVYnLftXDaFk8A4BT8iKkaMpaoiaEhkMPMHD4u2hNhavDN9WCnJjRaMJXkPe69h5cJ66fuzx98n",
  "key17": "eTnKmpdiBnsKHd3LizSiTNAAFqJDFeHdBvatCMJ1xss7T7oDNZXsQTsv8y2ayALMAHZSBcWVj4VbhiFEEGY5U5j",
  "key18": "3V2mMWKhUeLCZRer6pCSUBwNhU9BjgYDb82TmhRxE5sWcXLXnnaTcgZ9aT1az8DBbu1SRTE4rdiiVrCn7fe5zYU4",
  "key19": "36FXZFuVGHHLbgLvN3ZVsgMc7N6FN6XGUMjxavuWhAYg2c3JQrgVSLr72bx7Adt5UK6XBatSnmdVvmdLA9QcuYXX",
  "key20": "4EFTxx6mSkLnTti6sntQc6BvoVMXgAQoZU8BNa3uxzYLm56XbyEy9iDFtVuqMfKcPQo4VPrKkc9bZVMFi5Quekxj",
  "key21": "4qLdscMWMuS5RaFercKWYqWM3g489ruZxtz2KYMHyRe4fJsgqetAEoNnUGUybtHAkr87nSjXZNaDDAJjk5ny791Z",
  "key22": "uzrAZhsQtoWjt9iBUYXwRJLqsyjsTHKQShYACBDGfsFdrg3m6rqMQQhmrZyBeUx1hjpCb2j5GGMuwwvSQaqYmSb",
  "key23": "4B45EyM672Hw4ViFTxKrVkeSNJSvY2YkFWTxLdTr3uT8rg4ebUXDbfCAbM1L4aeQHogSnRvejosn81fMbJZrWmPA",
  "key24": "56Vs2QvKTCmRex1t2mHPRT2kvWDLFG2ccfsbB1MSYgEg5U9AzFFReMk5ajj2ahEHUJy2pGezogLZ7R3mtJ5A41QJ",
  "key25": "4Pp16pvEScSbcX7xrP3LRi5VVwVAenwfQniFtZH3fHf3YzwPMfsECU9sDhdm25ascq6XFALAPMFCT3enBQTvBDPt",
  "key26": "Upnr6EaM722KTJ6mPJsbyrV33ogh856X2ZtBX8CqApvgRaMQTLfxAawBcpzzSJsUu4UwoAdsZPWbFKGYAG6kQmA",
  "key27": "2Lhb1cC4fw6EBvYRzJsRttq7sMkV9LCnFdyxQLjgxrAhtJEqHKRUnxpaoMwtGJpyWz8Mh65YVMCkoZmvAtbKUkDj",
  "key28": "2uBTCYXMAR4jSEEj9U93s5sdHT7Veg2MeDpssf7zLR9n8She3hxFiF3W7VxR9W9czKdKMNk8WSvuaVq8tYCi7gjU",
  "key29": "2qFTNQ3JkFdhZVAAdE8kB9GprnhAcGKExa1HqMYGGnvFDpFxkicbf1fsNForQCiZKVFaS7dYeBY6wo219YJoRgp8",
  "key30": "oHbgG97duYWu8iWR3zVmRwTyp4y2FFggaHo5SGY4moeowTwAkfDQrS97jzj41858SaGBSKwPdd2YQT5bVvGwdds",
  "key31": "4R5tDT7hwFLh6sX2adkq7cgZo2XKULWdnsjUEs6Aex2ibZQqR8pFUdh9GHbWVQTovuPUkGJZzH3HpLaeGTGuUF1n",
  "key32": "pxiVPUMwRZbUiLT9tgyY2rXRP212YB3bUajDEg9ETtRS6emw6hAgYVXyiXua3Ps1eRooWPqfL7hqE7NJUGrLvvu",
  "key33": "wkmFwBhFvRSeWZZc7a2ccdsbvhf6d2p1ePcBrtsh7QV9cL9t3LGXeyYwWDi7mVoGy8r65nAP2J3iApLLV8oX4pD",
  "key34": "2qWh3gAKJ7TVXuwrbGC3aePyRYzodfGS9XNFue9Fh1R65tEiSDsPmLb7GMLm94SqeNdksT1tkBZ4irset7RtohAj",
  "key35": "5rK9B6G4SZBD5PPWDSnpQtUMsHwTUjqnPKSeAU2cfXHPX2fMwUKpMAYkwkeNtcV3sCAVkHAtZjS8iUfn4avrVaMh",
  "key36": "63JJES2FPAmCTSEkhXb1NHPJzUqJdxXXVSTwK9XeyjLGCVtuZ1rqB8f9ZHRWtYW6bBydmNf2aVJW3oG3kSMHZGmk",
  "key37": "4aZJdTNH8voSERcvQDshcH6ZaG3Xneo4A4dGYd7iwa7fP2iE3pJ93oZqeP7qqHaF24dNBj9v1BbmEjtTkLZKhEAs",
  "key38": "5DnA9rhHmaBXBhvhKWU2AEWXXbeQsZWwbBnF2TE2t4RptL4FTJpTZNmccaKdnKWGeMFE7g6m2uCbcSWDDoLyDh7u",
  "key39": "uWxo6v1s9wQJCS81jmYPqXbgJAEqjBpjmQEKaAveAB545mYC7QsHnrFNy4cAdgaCXtfzZPrTTd4qKbc6mWQxVhg",
  "key40": "3v4Lhh3yKBZ9RLXSUAYGTKooCfcxxVPwzzRjvjNgG2DeaLrSfRWd4n1jfaujeKh65FLiLNgmFP7ZPvekB6KbXKh9",
  "key41": "5XrhN7xvdfr25Bx2HcfGavN8YrXYNjLXKmF1iEv7Dt8AsnhHXE5DKk9pkBipuSPTgZGgT6ZzY7hKCBN5aaMBC8ob",
  "key42": "5sba2JjzSmkS9qENMhvPcu5ZCfVTA9ndtMZweChxWJ5faaqVjUPcLSaEnwAhTmYFC1sYfnqb5yscr5jszUBcreou",
  "key43": "2cARtmUNd2Ypmr32GpyFjQqdGayW46rj1FdwUQ8Nghx6sCjkPmChnyQhh7LXjdWQoV76VAZSmaRiEYhEg2UfYmG4",
  "key44": "5fhT4nYhFZGSNjXu4bFta68sT99NdH6ZPtWkQdU5jMeFGxWawhnB8wzu2cKnGPYsrykURmVxfbieschvgqu8ewEW",
  "key45": "4qhNJnQuzG4gNcSHXKd94qsKv8SYWFAcU7dFdhG48E7hHKcR3YdboSNgfQ9fjaPpoNFHvDBkyia9XR9sVSpYeBzX",
  "key46": "5HRYaMGcExwjDec17Fzx6LUDbkuoiF9gj5hFdiWpBXDs6cXainetetAZSz4iRRH6MVJAuCjGoiKZbSFm6awjMdFk",
  "key47": "5qP1X4HZi6SoxrLSU8QWUoVvUH8RjZmp8X6wZm94xSMsfsQK2qK8LF8oyiasdKZ7SHCBtZ5wooJRtoF4DK44BevY",
  "key48": "31vThQ5Bs2x5JREUGrgJH5Md6sVJhW4QNcPDVuwzdHiej2Ldpr4Xz4hGnjgdu8mhHQRQAiLdofwsoNMv3yNfK4Px"
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
