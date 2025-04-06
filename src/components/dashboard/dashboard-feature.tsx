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
    "3ythCQSeD3RiEUknG7NJgptUqx4zK295Wtq6dS92cLFpzzEUArtnapspNqWmPrgCisj7NnavY4RjRtPYZzKucj7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9XwswbEEUfX4SWaCqkhUUVziGcwmS5epENigY3yaBaMZkYPZ1GTSVW5cTm3rDAa1gT1YXkYnEByqR1gW7J61BXm",
  "key1": "5wZ5YSoZ59zSX7XPsUd3ov2BevbBU9RceAwDRC9hghDxJVwWj9vdnzuXwrapUhvCbxbRCQvRgRRWh5Ww6uUq9gK4",
  "key2": "4KBYSnAZLnE5VxgWzaQxtE9wA6eUAnCEZTY2JnHLvSTEedScRTppEjMFaV2mN7mhFDpyU6Ez4xutNL3xrM4ZoLDe",
  "key3": "4zZvKAwhavSVAQ4K9Lbk8kB3AaDUqKqLoDZMBJmAXkGuJjDWP2igp5zk2kZyEPRs2th63V3PVejVTqWbDA7twGZB",
  "key4": "3EDN3C8kkcwkvXEEWnzQ2njq4XhpZ66bJRRydoDgaq6UaYMerRrEaGKcZdQ7vYW9SyF8bQ8HiL6eC1BC4UghS17n",
  "key5": "5n54cV7bWrLzbaLhTaA8kHN2g6TwbDcUnTdCKbABk2eCLtPzzGibcinZepMDHQSpEpEfx7ghFcZodEkaFT4mMuG6",
  "key6": "2t8ByquMGGwn85nCc6Jj9nHASUR4tzEVjJFGiFdKa8EyN1ezJo1TNg5ZAMhE3dPF3fXJwbxRv1Pk23aZwDvvtJvE",
  "key7": "65SzRd6MLnNN6MJMX5nNKUKBqXJWrN8gNs64gZ5eCEcrXRnKe9yXjSLqeNp1PD1x9BGLHBPFodqP4bKGFjj29EsG",
  "key8": "4K782YToSd4R2dowGw9rPD2UnCqsXZy1aRdTJREVupZkaogiEKGWAXdk7bCyf8cTSUmKoRMxbaCTCgbn7GAPh8Xp",
  "key9": "uDb8TA444wRvJniQscCz8a9rU96iqQtGjVy5raxfchgb6g3egW9Kd56Emmmyh6SDGEf5CCKX8Zk1pW7AcK4xMM6",
  "key10": "4DWe7zR8Zq2FyEcCCErs1oAsuwsQTCaeqjoqHgiuLXacCui1SaTJFGh7NsCcbKa7JGMLTbv8EepMP8EMGUDC4B8S",
  "key11": "3bTBqUcefa9xXjHmhA5tHVPxW3Mbn3yLLkPfzS27nkMRhcMSoth6sCxsuKF94mRbuiZmfYwp7AZWP8kGCSsq83VH",
  "key12": "4VskQzU6FWpN17xN3w1dDoo9MS7Byv3sp5xpnu8DStyEBsdRWtgUBq33YLLaQmhn8ibqf8Wwy4nEUKihSgiXC17f",
  "key13": "3dzRjg1rbfUDQAFSMptqMQ71ZXaXAK3Cy5811XbyU65uwrMKMpuxvyKJxpjU7WekGMez7iwEr9MXPbaHsi1Y4GtF",
  "key14": "4JwWVDtAjLYMGA78tJpEj7jwj2BKoyh9dBunhQDEqkttZJjqXUXxNTTraf19bLJUEDWfEwZpqF6FXLvMo6T47fBY",
  "key15": "ku2cPegva3YYo8Rbu5jHSzm4CJN7GEABZA93HMDZN2YxSmNGHoW64hY8E6TwM25JH8hcDVWow8NQSDzWwARnS94",
  "key16": "5bdwreFmCN6mikHGcvpTgHSYrxF7mfWNEpc57qBBWX19B3zaf8caCz2mw5t4VWQVxHnyWC7cvT8Cqn8auHQRfffp",
  "key17": "57PMsvrzfr4PsqWxNy4M7VSw5YHBs2uCeVcTGpv9zcqmGJ5LvJEHVmhPi2sWjE8y6uex6eWDXo496MF2WypURCZT",
  "key18": "42ekoh3UqjVbHt1BCXHok6WqzYAi6kdZV4HG4SWoJqVbrEVyYDVrCifaMEcwvPrQ1PWJrs7miRawy6kD1cMmJn34",
  "key19": "2bCUmp2uNghwHL5WamPKYA93dnsG2uL5rN1Vx2jTLawJ9KQT9qNkRM2YTF3skk9mUpDGLjm8BKHzfEEx95jAFcJR",
  "key20": "3u3t6JxzjPwbycqDz75o8pkGvMjuZDEWWGHjyCXf2LdZcuYzJYsStnonjyqj7b1J1MYdC889PmpuCzRpwdSTDi3e",
  "key21": "2cMjBpu6JJ1JgeqjoqUw8RdFs6pZi5YMjkLWp81kDCFx1XTJRCSq2zTKUmuiSY2cYJmeJsSZDNM5usZGs5AkfMgJ",
  "key22": "2peTrcGN2xz7ymbbhQDrpPJVNj7EVg95bXpv4ZZPC5en8E1FzB98fvo44tA4PtrDFCN3gr6ruZwZYVCZe4gnxqRo",
  "key23": "hviQgAJLaVo26ePmfr13Z7kCBiZPets1fzLKxaaYiM6V3nvApD1SBHQQ1nrq8TPXZtbPREsQLX4TGuEpWq4UjVA",
  "key24": "SU913eGFZFp5NbD8UYHd3VwTKax4JLVZZfyUkbeNjQhqyWWsRjguravsWrU8frHcPRYoSJJ2qBxLVA2hFJVHnVJ",
  "key25": "5T5MdCwtRsqw7gShy2LXhsDtxvCc65CkyoJ4bVZZ1u9uJQRWNpHNdrJX2zEkK62aZKerA4cHovP3hjnhtXQWRmFV",
  "key26": "5pPr5K3aoSE9LoDg6G1HXE8WZEY71KeYETLNf4RRjYduPXHnC7cbPJXCyrQBCQ6UeBxnRf3Df6JCwfRZvi6oAxFD",
  "key27": "5itKRZhJfpZtjuqM5KPMqEPxv9iwnwihn1PedkiVdJpLbVCLViqXQnAcJzUxoxRTAEfauQHpicXTnZjTCR5mBVLn",
  "key28": "dUz1nU88Ki3jw3TMWLGvnKL1tYQ7QJi5x4sV1gQuAnSbxrVxGP8DkXTPEczSscsynE6jmRYiYdmLuuvxfD2MW54",
  "key29": "oC7vCKfyqDnSoWis2E6wBnuExgexcGDdqzQ1pbZ8WZv9eh12GyQQPFKTdZqTeW85NqDrSZ4xRsd9TZUkzJa2JJX",
  "key30": "4PtTKfu9bD3yRpKDpLuyvJq2jyhoSqBiaoNegSuxSSeCap6pcW9Tc25tw3QwPv6WFpyJP7h4VewM9bt5VFeJDg7Y",
  "key31": "6c8M9F5Dzfzv8iYVcPAjqDhM7bwMdfusdxDtym2uT8K7hrKp2KkoTeb8sqT6B1A5M7k5AbaFUHMv8GsmDAqbuvs",
  "key32": "2Y3cREz92vKuf1VV9L6KN4RzHZ1vJ3i41hgyeKNGZEQik93FLwfYNGnBmQkmSJGEk2qdaNRdU3pF75UHSmgE7zSb",
  "key33": "4c1DUmT8RJyiFu528feryPH7D5hbjudgHpu21Q4hNLSc7WCXpieZAgBQEPmaKyVfEXHHPqcMj4NRZ9iFBh4W25QL",
  "key34": "3sQjfthPdx4dNrSBr6C9tqkj8m2sQvc7w5PJGt8Z99w5oANCkk9UMV2yF4DYJEvQzkZPbUnunoAQoGpMs7kTCDBv",
  "key35": "5WJC34iAkMUygfbSmH4JSVNrbaMrfyCKsFcoJxd3tkjcDkGnPVvmw5RYELfMGpdHxCHf1XSHBLkmbtSqMgZZcoeo",
  "key36": "5dzM3VieVu3VdhPAwzTgmBJrZSLHQQQEWHVH6uR2LJXvUZUcnLjkXrPXnDRnMiMjCn7C4PaMPNAMmu4pvAVX4vAR",
  "key37": "65tyNnVJBSPmWT3ScPJAQg84R6oz9y2XtSR66msdAqEsCcNurML5JxJiWMKFVrUMwM73XsdbexckeNZWXAsymGwv"
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
