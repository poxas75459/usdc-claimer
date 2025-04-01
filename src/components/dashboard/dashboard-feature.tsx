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
    "2r9G1vriVNhvfbxTZpk18qim8uvnDwEKQTqYGTfadtZTep4mW7WyRbzhXQE1CRVXGMVLkM82tkajSv44awKgikPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XXuPGaYiK9d49ppGvgQcrqmtooNbbzYdeZdgcAscqBpii8YuqqwrEUBM7gwxfqKUCLK5vwqZBuh1fnHsfvemqe7",
  "key1": "Zr5Lz6HCyBPepxbP7L8KDkC5DZRTHaAWnAd1eu1S7t3zYYLaNx4ZRz3iPj7Ws9rj5HVko5k5WAxxYbv9YagMc4A",
  "key2": "gbgGjNMEjZstTvjFd3Kt8rxzkjdDEpcNQ5JXKRrmx5hD2cifmwoTX1Rir9HSfa3o84xWoAcrAJNvSyQpHf5bWhM",
  "key3": "2cX9Kw9bzC8uthv3gDm5iKZ3M4U5H3z3GSscvaj8gmFk7LEmZ7CmTx5Fuk8W2csQgtuEAvDq7xY1GtdejzssreNc",
  "key4": "tEp3BgdiJviCt2JurpePpEPmshRCAAxdiPHb3b8VgN6axg6kRRR3x4idnXkQ83YdxYuT8rFutr2aNvfrupgkJsb",
  "key5": "3siWsNKu8so7K5xacs7NFf7FqgyatziCnDCtNchBsDwV9R64E46hLg2QLQxjeGbj1N2eMHVMTyfFSxub82M7ddKR",
  "key6": "4ajXFqpVEcudz5sTS8E8SqVFSbbx4EzLDeXWxq4ucHPft38ksr7aXuxUbpTxxewye6ky2cbujraEvr3oJt9kqh1h",
  "key7": "WkwqGJBvNdTVA1rhVN7mnQv4j9VtWUCdpuSMfFVd76S3NH9P2h3QqqcE5v31Phups5NrGghuvPwqgzgxesbB7Dp",
  "key8": "5QA7pz8HSckCa2AYJxW1bG91dw5DaPApPBq2yZ26VnHpcid6fRCevLjTk9tHweT4iQ9L4At9KkGuDuJcQWVKTV2U",
  "key9": "25dmQLZZDCR3fQ2xKYuBZx4k5XF9hb3Dsu3fR3qN6SJT92ae2pLg52xxgVjXhDumZqsfs8AdyAFviGFYsoTwrz8w",
  "key10": "4LUhQnMcw5GaHnRz8D6WcbNZC2Y3wHpF6Cyi5H6YYH7Z7cng9yoyb8zaToehHhyW1Xoh24pYSJ1E6NEoT3ZixAyr",
  "key11": "RBLFeVWDYh48NFf8rhUSVwAaLdVigtM7WxLHYXhJVVW1aaaJnVfYXHqR7bBcRfj3DP7xymWQFtNgh6ZzzQLLLog",
  "key12": "rB1TDWtucFQL6UGhDo3RL8X8xGcx4akqmDLNLm9Bp45v3S7GJt4GDVMPVafR6fNwtYu2RVtbLcJMi3TVw7uibM7",
  "key13": "377KqZjno1FtqBpPYmUALNRGTxyHLXnQmhNXPmkUhjiMpj7h3w4zFrB9ttgDrtMK2hnuHZFK1yF5FnrZ2qPw28Zn",
  "key14": "4eZTWYsdFmwovHxLmcXUVnPFLqgeXGXCp1vpwVmZ4zSTwRCaXqPm4RSYs2jJ3GfoP9Yi8TcEpCaBjGEHYfNkgQEV",
  "key15": "5LE9JJHpDM8N5KA3pPiMYSrmhE42arCh4jAxL4VwHas5ZxN7M1cdzbuDbuK6MxynKqN1tF2LUNBYASoUUPsNT2bD",
  "key16": "5FPubemzDJNe6fbuzSR4nzZiFSs9od8VjW65Q9JyP8uifGWyRw8ZBVuA94eR3yu8WGhBetixVBTk8sn1HQDegbHd",
  "key17": "59AqrrG6GbbeeimCn3dDbGrRGYFz5VJvLAx6k8aU9pFK3u6cs9r4JnjNqNhFgpXshjs2ZNURmww3MRWsgtP7jz45",
  "key18": "4jNS6PunoKPKFdMbjSyn2FBiex3fCzL8jVyLMkpwNNNZSST93KyCMWMeUiDzREnEgipbhPKFT1XfkLks1CcbU6FM",
  "key19": "4PpePukYkmEbHtouFMtZX1FcrFzMVMdFochqum8ZGGWbihnysvR58j3Q5b8RBLyZhkv4LQRNRJyobSeSDXZ9aAng",
  "key20": "5vRP62ev77qxjJg5kii3eaEhheQ4jFuXwrEnfgD52FVAt1k7K5Emq7JqEPnjWYMMH2NBa7FdjvpSSZ8n7swKfDok",
  "key21": "41vQSpU3LyGHemZ1A6x3rfuY19p2zj5LYHGAkUYFZ1qXpcDEJPW5FuzaQN5LCQF97j6DBUayPDF3uwXVdAWes5g3",
  "key22": "3duNheLSkMosKAMnJ6oUXVSQmKAKNdYGY2ndhasrnhqQAYMs8H95wDgJFKqL7s8jG3F2G9YhzeuzhAbBPp4RCLag",
  "key23": "5QRtNKxAhnbVX64jVbdrWMQ6xHgj82opor33tJjj9LsnyFDFg2t8iYvmjLj43JAtHkC37rYs72rgr3Hgp7fy654y",
  "key24": "51nKmC7u6GbvPpRrHzT88FtUS2XHx8dfvgL5S78i4Gia6dgJKT5ndRAiVqtcr428nfESkxAvoJCjWL4TWGemi15G",
  "key25": "4craBKGhbErkDQ37dbMgLZ1C8QwsvtxBEauocNayd2kPCkphP9NuzeLe5kXKVwMGP4DdqjdndsXhLzttZZH1je6f",
  "key26": "83wRGoUPa3hEUpSp7fkaJFTiVrEFNtRgFHpMM3P1BRnCPz2mRjCtsoJZkKAxeMfyHBTVevTgzzJPZD9NGDJLokE",
  "key27": "2zWPpoATrz6hv1PWvCz6wZfoMHozmQV9oALqMnPJ92gjPKVzFbWBVDfkQfy72mpkocd6uP6Yk4EFE6qhwfJRD4wn"
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
