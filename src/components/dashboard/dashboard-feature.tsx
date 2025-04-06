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
    "TBag8eWXVoM2uFeL2GbxUnzmYgvQB3XrMQnKoDLr6afxgKRbBQSBxjwHiZ1phb1upKRzSHFeeWsMKZtw3cC8Hap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37nwjEVJRn1oYUFDgdc2k8dwYVdkMoE4gypd2Yey8DQALunaYjkH8v8EcZZUbd9VYe1D8yzGAsqgWYLvXiE37Fvr",
  "key1": "xartjKU1UoVzjJ5N197Dz9UXHH2LVJUqaTJpDphmnyGRCKikejqnVx5WCNGFqtAWRcqagFCGTrKAjpyEZ2gW1ad",
  "key2": "2eduRPsFXJpq73HQvvWhncbMt7vLwV6UVaHA4pVmLx6TLantgwciYK8M4w3JCtjYAhhTLmz4UgeiHDEferiyEyaw",
  "key3": "txQc7MhCfzrRT6hW26yKZD9LWRW6QPnXAwMv7aZR6uJy3niDK1CAn4xxoQs89P3QncpDuLqBoq42VfB3Zp6Nidj",
  "key4": "47EcxCrr756kJ2XyWtcFVCNWnkTFs4TbkWiU48c6db7gCVZHyaMwfyYFa9SjcUSMmujzbRR4Hxiz31rM3cL82b1M",
  "key5": "4nk3tqXtncpUib8Z6x4D4odLdpL66x7uBmEFWpb3rscyRqXuSEduDmRTMo2csw7mP581ka62rtTphLKuqTyULK9P",
  "key6": "3Am3oXkX5hVa7UAiyczo2efktbrWypTRCwaqnsTdQqdQTvYjEnTcN5Tyg9J7JUwfzADWnojNjbpk7hxF6TCSJgRQ",
  "key7": "2ucWR78CjaAJXWkCGrcJfuvPwL7p7R4rCvC7yLXXmyExjry2bjLgLqVdjmtzhuDXi9bfDnYFuGGoWKtQsKTb1Tyg",
  "key8": "2KWVZ373cB2YeugkeyjoTKE7QZ4gTsgZRbtx8s27D83Wxbc56yvf4vvcVotUjcVGyuhadc5Sy13Jp28GGkbQuajJ",
  "key9": "3r3Vb6xnGZyXSbn63GMrydcntdki85aSooeWTPAcpAudLg5RaT5oXiMC84rWFL8EKCDkoqC23bbNvqdynmWyHTXz",
  "key10": "3ewTxDB3zyEzWercQ1cWgbQ7Lsu33MnDRvv3CKJsQMErJEADPy563XdjJG6hQ7RQDQT3DGMHtwJrWf1QyqAmHU1o",
  "key11": "3t4oh6KAMdKexLYACNL6gvQw8VDR8LZretoBdYGiLZwkPtj4NF8eXn1NcHPJiSMFfEeZ41tGDwRKsGiAoqhLtHTe",
  "key12": "2DMRRTbKmuQEbXz2r6Xid2QV3GNSgtcN5QddfHWsgZ4aJcH2GQT9ToDJ2wkY5UAXkVTopaVMPbG7fe2ARpUFcvP3",
  "key13": "w9HowmR4HXMgsRPSY7SF4xZVPyhPm86TTqjoh8adSiD2s8TgKYqaLrtdEA9VoBkTR6SN19QGMcuw2GKnKn5rFEF",
  "key14": "4NZLNEaoQ53WprnNwYtgmhxWn7PCPbauBbDyFX4NZsJ2dJ56UGZsWW5E7XaftpBLMZ4BHTcm221zJ8VrYvgD2zj6",
  "key15": "36ehHTpNKEiuHJPS4EgPssxyonSiyzDAqS9TyTpFGsSUVQmKaAo9fNfwvaDXiJVewgpDse3oVst4cZN169DUMRjf",
  "key16": "3VYA4FKcJK7JRyu7Ada2p3ZJ72fUptZvUtCjt1UU9kPmfiExyyqRVSRLgLVTG97w7X8ncTi9vfP3u7EQfSn8hdLm",
  "key17": "5yUXt5nVSMK4NT9zeC5qb4YPTGBcv2mQPB6fGsKWVk5DrScSxnFL6xG3hJ31fjFMo9Mn9KT6nMXHoC6K64DiBJqK",
  "key18": "2m2enAgLL2cmdT84yuuayPGiz6C6gXzBfwfuvd6MGt56t3HJeM8X8t5uga6jg87smqjHpapSWypfuMw9afLAuw1e",
  "key19": "2LJWZCVHkrB9vM6F2Xe14m9K6af6HCsjvXFe4AZLfuEhKrfGBPy4iMM2vYiScrrT3WFLDqpZvkpZGrit8pYAYVQR",
  "key20": "4nFC3UoSWkCQsfiJMzUwGZMdG4xRFsdSPfeLQmWQiwCkytSMbkd9u9BcUaWs2PTFou7WApoiWZ5PMnqRsubrmoTC",
  "key21": "664VevEbq7UTz38xqcgRmzPN19jgYb2KFvVemDxpLtRkK9zAdEK1RDrDkpRpACbrZnRtxLFLrao8fGWgEdzmA46P",
  "key22": "5fAJw2Ku7dHhQNnPifLdhjYwR9EKKgFuqoP1t8m68TkLMfAULpaCd1r8PPhd9TP17K5ext43WkLmZ6P5ekT2u54o",
  "key23": "ZFfjEgxtQuJbBGZNNwQBfeo95CWXrSk1G1Pg29hgVXgh7rkdAiMd8ogthNqzjZLXt4BczobDn2bDcdSEa3a7EJQ",
  "key24": "3oP5VGktarL5KbmnNRUAFquucGBcB9NUoLJ41pFPqCAWX9q7L5S2NaN2sDpuUrTp2tvx5Qdr919d2aTf2tcttXaM",
  "key25": "4ugJt1w88DU9K3ZzQ1ZFAs3iPdpPTAeZhros9y4sKnRbTFVFFYR6FkaitoYkQdxPR6rxMxYe7Y59fdtLxoHUHEwN",
  "key26": "3p9vWfgxT9SvXsnhKk7e7C8F86KXFPnwUh6jMDSLc3d3nFKUQbAMXn5ajpHeZzDoc3ZkwcCmmHuzHWaPgy6D4eFL",
  "key27": "1eM7vE2WmnHZ42XdLPb5hQYN5FEhdFr6n3tPrAdtkGEPCFF3PQVPwJW9kNCy4L8C1Hwc61aZgzCrjE4jEir411f",
  "key28": "29creVUTvniWKqaSGp5yTKCwgcxmggnPVyTuYw3dB7xw8F5Juq6ZF6ciV2PY97eKhiUbbZTcCcLtqqLdF7VqKRK8",
  "key29": "3FJtPpW7KxnShE8AGG7vmFdSLRRcX1HpegR1fSXmh7TK3sveabuJft1X4giPnh24jH98THx5sm4wWnieFqGPVYUC",
  "key30": "5DuzbswFP2kHVZaLWznh6DWHqWiFMKtv9V68f4JDa1vBqWrcQAjQn9ekb9f2UuXSBDr5MzB8tTZKu9yh2ChktKsb",
  "key31": "2nWXPp8fwKpXkZtUPgLWjVRHJ3swVU4zHwfoMrNncpDmcfuuMQr3c2qRf64tU1ASz5g4GD28cfLUN6LF1CCST3Dq",
  "key32": "5pcjp6LHaf3E42CQB3NpFE9SktMR2txp1pY7UHdK3QgkTfbCokPMsSrXbtZL3wcvbQuDsVPwvPKW8jsLWcVyWfkr",
  "key33": "4pJs9trioNNNoouZAaitakSsV8mWoA4NKge79jvHin9d5QPJfP9PgRYgLJT2pSym1yMk6sUYHYEzfnwCBspLVTHB",
  "key34": "3aeAtFb1cXmrwdUvUCDnFTuZ3zUpHgXdFEH6boqSx9ARjBkGuWVzanyAZbvFrxU7xVkt35GbeSDi3X514AvhxatZ",
  "key35": "5W9hS9RQkZ7D5SDBPiHze8LFw1RiPj9n2FUyCLwR1j2wnDizJmegFD5PL9du4ujw4TS7p3VrHTKnMLdR5DzEhQj",
  "key36": "3CPnycP8p65u5UAaHvVrhQBVZnL126Vdn3udUBbJXvrXM4mLgZmxhmKzbC12jDrqjB5Ae6TFy6XXigd4D9ZWoSL",
  "key37": "2kUE1RKd5oCfiZVQkksPEcn232vt4Z8knaUpjMFCXvC6Ro96sfwpeiGE9Wj6m4M5yz1HoWNZpCH7bdPCpAE6KXgh",
  "key38": "4J4mu8PuvQCJoBmvDujFU1xAwGTBQPpjAfEae1rSzhzz5k2KXv2m3gnFQrfdfvqNrHtXv3KDfwcLbbh6VKgg9iS4",
  "key39": "39zbnRnEzYF4wNrxjc84BQbhGapzNkYP5zTtLrUZeTFR4ZWvLdkJ8Q4QvZjuQHwyXnpccBmGsknNrA36iWzD76Dy",
  "key40": "4qbBWJ6xgoxUfcMRwPvn5nTJyT3iLmCB8SEmin39SN4iz7quWAj5xVSiE4Q3nCxkt2ATTFUR8B4tgsZcbVjgmyDo",
  "key41": "4kbX3mgLGKaGt4iUR2Ycgiy3T42XACFJiBPFLDKVyTpsMiEG4RuC25szBKjYNh9r2Hy47NKZ6yUSruBbbevAFeAo",
  "key42": "BZTtWy7zWALrh1u5T3KPA5cURonuCfH3DbszwFgX6ouMwqfCSeqCX54oepVQ76WFhVfVnW55J6fjEdGC75Lw8zr",
  "key43": "5NW81b9PoaGjUT1XjFMuUaCnD5vL9Kzzudx2rW2RLNT4n6ud3UdhRs389tUYQHGaUV8VRZG3c9i5BL5krCnPKZFC",
  "key44": "2RHNg7uH34E6s8DomJw8xghNkBD9uaRK7cNXjZk3wBdxZwk341sH5zFV5df8hrhnVLcLSwoV5AWjE1Bfnb2kKoen",
  "key45": "5ahvzGnCxy92io6f7XqiR1qs7aoHkWdmxR5Wzf18mtgvGQ5SdCzsm7Ae3xTKCZqUs5xWKMBp5BQabHwYdcmth4P1"
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
