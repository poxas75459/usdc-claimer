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
    "3uNjXPWhY2bpM3XbxKhrpK3PosdHRKMRdNhxMqfZyJwuZAgPh6W4sdzuVHfh18RhGgdXLn4VR6TkAKndpi24AoC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jqo7LjA2vNL4BLpuzmYb3cww28WZKvJ46qVvmVrKz3EVjYzuiiWC3MC3kcTr25XuUMyPwiyWc4bXQjayhAHiomc",
  "key1": "7HVCwgiks7kUA3tM4MPyBsto8evfw98Y1KCk8e4i9JpM3N7Xce3N2B1DLEYBVHT7fGNTjgLBvs1Aoi65VE4QdvQ",
  "key2": "RMSC6kB7gbMLiV4YU6Hc5H11FqNB2XzvSqkbJ8W7QtVyPhEuz3Rav5215Wbbesm1FzxVjCy3NxnXDiwJZLqrDt9",
  "key3": "4xiQrC9GenqT5o2z5c5wSEbXYPgeGf6AYKwQRvv21VwC5q3fFRoHaXJ8uQcfSiVbdjQVv1jnCMPQNU64TU74jLTA",
  "key4": "39hpDZbM37Fzy9jVymovSdmDqzdE5Rf7jkmk8cqjkkJtVbs6eGNiwLHT7sPxfV1zwACPPScWHJnTA5AdGESMU4ej",
  "key5": "2EVXYekUnZcWdVQ2T16D3YoeccVJmuiXwJ3G5L718RgjKM5MxbPfZx7FibLGBYm4yRd31JsJ66D91R7gEQhyoRWf",
  "key6": "2nCB7s3qhsapD9VTr7xGuDbmWi1qKqby7dhgdvCJEayrz1ARKwGwDfr9RX6rUTSXom5sNkYDXQ8bGU7CVZEtX9zK",
  "key7": "4LghxYSkGJb4U6BBXBtsMkTfxGvnbybZ2K4ozVnsfMbz4MFofdonR2AdYyPGCjbmYGcLzbL23qfo2KCEmrBSpGcy",
  "key8": "22zfmsqtkaFUkvjJLFoipvexZaALKvmMFwJ2f9yHT3K1fG577z6de1JKQyRtGuaQSTjZv6NeRAEgjxso8354dGpg",
  "key9": "4XDWnJek3Ub8w3DUnZMUjAEcqdJHMgzuMik2JGz7kNmaaBJesBViNN36teqQN7MuWNQqNdzMzGQbK3JUpvpjhey5",
  "key10": "38wJEgyrBNV5KTovUEJ3PGQTiYshkZCdNuKEAfRBzQEzsXQ6qrzAzgkv47JxubzY2Y7QZZW9FZWGp6xjrZxmYmST",
  "key11": "evgGaJ5xRpCvmkGPp852Bw7cMrzfQ3wsQybPrrpFk8bpTiSbTZ9Eiwa7gpbnCoZBAUTp48YX4Cv6dU45HrEtioL",
  "key12": "wQ2auzAaeHYX2hY6jqBAB7mFAd4xSzEuDaSY4YjEvx8qGRzgU3u3Pw9riFEU8deQ33i7dqSNEdBs9SeBpnqaFjR",
  "key13": "4FddLMNefEazAa3Pzd45j4b9GuYxKqdARdqZPUcQV2M5jvnMyvZUaFmHDCQtQW1hfddvnHuEswSLhZu4UqWKDDZm",
  "key14": "2zra6VRa52BtT4NS64jMCmjsdwMWenfWSM7yyTUftC5NbKD7E2QB8iGjSMNEPX9ZUmPsjszs1rJT4W4gFATbMfq7",
  "key15": "sagVEZPZnKkyarsDPLn3mjrgWGKxSCQWrXUhHx4Dh77h5dn5NPxa4V96s1UvvSFkpHE7pHtLSr6Y1Uf5Uq4UaVb",
  "key16": "5Fh6gZTYgWdvdLdBiNpY1A5pj2USwnDnCQRFRsEEApS8YaBE9JowMYJpnpZorGnMr18Yp5AXxrsx6QbLDvbXy2Kb",
  "key17": "5VqhnToJ5u1sbhuUbDrEVCJKyo32tHf2qLsAE6dqtfu57WAHhJF44Hvjg2EPtZu35aZ6TBP2ahNc3sS1Y5AP6Uv2",
  "key18": "3RHRFEKNGcTRi2Mn4w6ixkAdG11XRD7Zvh43vEQnWhoEzHinW8gN9QfsbeVMmHGPq54Z6m6dxy4mQjKtTJsgi18D",
  "key19": "4BLYWQdd9zkvjJHyVbJru1rQV5fs7rQSnHjnBAxi5mFYf6viLd5gJxG2wfcJHdQCvvqCk6LSrZKaxVJZi3rcPgo8",
  "key20": "2ynmFEhassPoiDvihCVhrGcjUamF1QfEMCSj3qq3ays62dCpCvUTi2gqyeATQVCoczQA97BWFDicg9Wwo8B326o",
  "key21": "64k6MDDxDVccE5aAfeDf6mCU8feXxZkXLp2QvJszRpr7uaLMfYMxBD68hx5vNHUt25JuJeRYexzZc3UZbtes2hfc",
  "key22": "5kKsEYEKwrQp9Sr9RWixi4Xn186BsZe9nFqn6ttadH1Zj9vzkvF6cracrXEENA8cCXDtnAhGRx9arB1kSfFWSUp6",
  "key23": "9agT1Qtk8XRgmeejENY1NZGgDWEQr5X13hGt557AMiDme9ALwu9BXFLMXgthiihBKSLTWeVAsyAeU6mPvynxnyz",
  "key24": "3Lk9hzzanz8i4vwsqxSCuNcD6ZhP11rVprvi2u3Fy6o5AHAh2cD4ujvgU8u5UXKHwyQxwHdD6wUzgnkytsqCrEur",
  "key25": "5khoXipPxmjfdP163ZM3jTosM6u25aPySZqyLcdZXv6FzszVyDYYXDypX8WDtW2Zy6cK1DjVdF4kn7NeM3wSH2pC",
  "key26": "4Ja7WYoEGHnsvbpWb42az7A66Hqth6FSBKPjk6AmQmwdUN8JnzB6HQiAxqLnJnmXx9peN5fXkf6hkPT2cJXCB7rN",
  "key27": "59QBFzijEeTvjs3NSLNNXUTgdDiRL5eBsywWvPG9R9HehEwvg2nZHmKGHvaxfhVqXxHcHMTYxfEpD3rmUBQVmgNN",
  "key28": "3FeJLdMdxtWdv8SNm1ouMjLZuz5Em4hYHNnRHpkojDcGMHZdfbCtg2UgjcDHa4d9ipZidEnKzcTC3PrUu1zQZKkd",
  "key29": "5cuHkTJaM6yK1YmKzg552ZUGYavM17MAWVUGc7Aj2wdZmDbnNVzTAjRTWTPUUM5MnNd1UN9Pu696bEAboBkm8aJC",
  "key30": "4pyrjjvj8wx3Lw7wXwTdoqZ2nXugX2D3ZF7MYs2EkkQDxYyyR9wy2KFEngnnewMDmDa3wcijJWkYVLVDfZvAktta",
  "key31": "5F9D2PMt3FsC9N2xcGzZwnf6ZnhagQ1VTt6bUvdzMqta6PVfhACJeFtkjM2V6TQNeXbBbgz5zrgJsmT1JpvqQ2nd",
  "key32": "4uUuUaSoc9j27UGNAVDrxW5cL1ZSs1aHTFgy3TwDerQjYrwtck78xJR5JwLoazC3YZm6JrN8JtWXEW51gJZvaUdQ",
  "key33": "2o4kLjy2pNt4CRsYMjXyAeaigRbeKSz6XWHXxu86JrftVmq3agR7PHd6z26ySF8qvD1ZqrhLuR9hHfpb1kB3FiuR",
  "key34": "2yZqw4AtxCMaeMHBUqY2gB2cA73iYQ1zrH7nbiKgQvPCTWeRmi3TG7mbR3ubCMJ1r2CWQ4cwsgGyPs5x34WdFetP",
  "key35": "26HW2NPGyScCEXwYc55SBHfqgYN88Y1bVaqrWACkg88jVbkvbqoz14RmcXuH1QrURVsY45Ee4Bm5EH48iTgYCEvm",
  "key36": "4qRWe8X9J65hQ439GCDWPuYWaQvXj2nnaeTbLdCKerWp7Bc71W1a52qyeeJxWLNRKzwj8XZh6vPszG2NA3qACytA",
  "key37": "4XQi6KbXf2oNzs4crR6nJEMbXyERXdrsSh1Ttfky4QHjNvVHtZmpzNXvRBFfGFkY67hnYmfBHibDCpzoApFfqmvH"
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
