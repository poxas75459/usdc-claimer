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
    "5oRyptB1EAYJwdVqSq5zLmQ2X2dMinjDisYanYc2WqypVUZkzNtb32dhYbiPRxvHrjbEGsnnS55PbXJ5HyupvArS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vf6bLj7cbYWP1dZhmbZGSZs3mAsMvbF6EmEsmakYhymhCLtFb8JkBut6MeVbTj3U43vULp3AVpuThoHDtdEP86x",
  "key1": "4YpesusP1eMFHXsQgNjEqsuTAA6dfLzzTiJD9BahK54q1s8bW3fo5iv1GXRV595kGga5UKxr3Dxi6m4W2tGwTJAu",
  "key2": "2iLgxGJgehVZYLfGvhoGKgbsg7HDTkBJvDTXdYLs3utJu66qLddaLYCJ6eDushQrsC4p2RoXhSNsiARbtEbYmGTe",
  "key3": "EVFrmx1DPGYrZUSWgRNNFfYANV9BJeaKWfpVxbVgDZaL8HQX8gZsE3ZQncTumYmouQ4atfxKRkLAZtxguiYRwdR",
  "key4": "3rxxuBXyPddg4BhqEoPWsMTugYrgnjCCsoNYH2Ya6D6nSrFij73XypQPAoEVKUfQctiLJVwRHippE3UfXrLH9rjJ",
  "key5": "32oN78tPthLRMseBQa4qF61fryd1thPJc41RygyeLarC21JQbLpk1yiWmgxxy9L4BzkPyZZBZqQr7QB34Mmk3yNp",
  "key6": "2zR4CSqnC7HFhBwVnzzLyqPgp5YpLFxPPQESc5UvN1ZMSCM7MAydEgLoRajoWS1Nsa9MKzMnyCozRLUPdbKN1uVH",
  "key7": "8ri8snZ4GQ1RWpYmNTexE5XtsEoZxTJuaueWStp5VVYh5EKek6gWg4ZZcjjjFLwDuU6hfgN3v57v1kuntA4EYHz",
  "key8": "54WagaD48k6qPjBGKYrNWcUzhW9JmMgZv8w5UGe1bc5fdoZ7ibyirbbsi6fFuZW1fB4sAdDL9Q2NSSj5PdV1cUX9",
  "key9": "4pruw2fqmXUqPHYoFY118mr2Uvro8fhXagBiZ9pKY6cE2A3SqjtH3DDz3ijNgVXD4wN9ytT2fzXk4hCvY4e4BsBf",
  "key10": "4AZaZ4umg2UzJNCeuTqBGMEXpiaX82NATrMdjXvUxpPBNUymRswjdKsW1x6GWy4GUMMgzNxvAe8oAzKMq7tf3oFo",
  "key11": "QjKV3isCF3y3FWkpjoCdeABpRZQxMFY7sCfznCNegNLmdGjWt2Yq8rmT4taaYt7WFHJzcUQcPvhReL2FR17Yj71",
  "key12": "4m9cGRbMDJBZgKuvvKdg6KpFxgWoYgDyXbUV3o4Dz4LUPYAwoZnSHBpP1UbRZj8qVEHM8E2adNfcQJQisEu5NnXE",
  "key13": "5kMrb4kZBzx7U33zkYEXnXYr658kywUsqh9XcLwzAedifah3fuWfLcPGY1Fu3iN5vZUhhsnRHJiEmqZsJd6Y5T8b",
  "key14": "22AqbXtPa5amz72ctfQiS2CSdDZEAZ2ghdEjeRdnxJFU9MD32bXFD9yYqE99gyMwG8MZWW7dbvdvY5xtNrXM1JhA",
  "key15": "4V7K2oFHKvyKYTTPcEobfNwtT5ypNvffsBpSz8iUrR9mJRvjs5Sk5YsCm76s8bJ5DTaXDJQFnHG8jszURwZatbLs",
  "key16": "4Q4Zd1CbwH86GcRxC9HvAfGZAR64V7RDkTSrBwsE9F6cNUNPeQeCaD6FAiE5QPniVJhw9WfdDNU2dhtUWqZrjcca",
  "key17": "9bBSu1YigD1Szo5ujauMJjUYcqaLMBYcfmA4zDnPUtZVTomLXsDJMfeCyLZnevQRdyNNMtUfGQp8HrSEu8izLiy",
  "key18": "3BoVXzTz6RaE2decGhw7vZ3ycJgCZ1iCReAoy7ncm4C1QHtz3mKmLEeHpTaZ2wKGtanyZTiy7yEVagHVkpwAoGAQ",
  "key19": "yq9E6gzZTiRCLpb535L47kbR5x4hEHCd4PRWxjPLQvYBtcuMo2r99gocKTcEezaLYe5uq9agAERTVQtJETQc5Wm",
  "key20": "3rfraLR84bKdkK3rTknoJth9rAMdXfEe4Sg6qy9Anfu4ecou1fWuJf1Ft62e7gFPi2KTZZZhHTNcLEcVE8ZCKMn",
  "key21": "a7N71ZyeSmgFP1WqPsXPuWt6KsaLu3igpcjQ8NAfJ9T6WsP8YSZu3MrXqUtvHg9GWLLNh7scpT424AfLoa9Gj4N",
  "key22": "5DZYAQ7ReUT4fx2iWUcWNsbLenSmF2XfpJtVRLXfN13fEi3cuMtX25j8MaPs8piKm18da1H3cnqZbyfMkj3xhcq9",
  "key23": "2535jaW5uNotg3TsywL2KWoVhu7qLnU7BamWWDqx45UFAWzCoy2gfHMhEY1L5tPRaFYLzj49GQRms2LjoHaUhsar",
  "key24": "53tPZRDEScRooh8xPxrzrUHDBfHpTVqeNexu4TRW2UpXBj4DoPJQ93bwkPm6itfS8crDMTVccq7mrRVKf9T6uTy5",
  "key25": "EcFuTVfSRAvwgCjBArxexXnpig2Rb1LFEZGL5yGqS6xUm9edxvuxJPnmoeQgjKsa8D5Xgd4mtVkSa5VSWaKyX2k",
  "key26": "3rwHjNZkTBoD5xAfXfr1LLM5vdP9rr22HReR8JnhmAUN3uNWyfiwxueinCRqcH3kAsaFy3Uu8GUL73kzyT92u8hH",
  "key27": "453scVCWJa5QiP8zG6ZaAcHpmpheXzwYX9MCYVDzh4LoyZWQRiP3yxiy5ZayoFmyqD8S1CQYtvkdL8h7EQAQwFcg",
  "key28": "hYVFDYv7drhjMVuf92e8WDdRQxSwCNaPRocF9ZvZLGAEj7ysv3mRNojbpJEwAxFdtER3gm62gzm8JTr3XYGEFh9",
  "key29": "4HhyTaoJtBdyLicRTuCoeKbmUg2DZFLhi2Un3BgzurbTN5Bttwq8zvSswtSfkSKgXY5Ay1tTZCge5Xz6jeCmjZR1",
  "key30": "3KFHtHUAX56t7WssiNkSKEAsqLCdovErADLb61cjX4YycAgDsKmE32vq8TveNpwaTWUK8DyakdQUMWTPw1B6dA5y",
  "key31": "38se6BJdReLgdKwsWv36ghXvb2hHd9grHoQLr7pKiihephvgpGCRonDmRvnBjws1khejSdcfvYuuq3PG2QxxFyGq"
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
