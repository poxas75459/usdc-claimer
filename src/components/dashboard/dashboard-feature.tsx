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
    "5HJBpcwv8iD7TjYCmr5i2sSo4UPpCNPMHUXMADdBfSiLGp1B1pJCMTRg5FjbVE7xuxU7hGMScPFM6ptu4e9UJwnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2imZT1pGN29x2cDH5MCduLPFix26UaKtTo7XafTjccz2KeVRA14Uf26GcVEfWwHqk5PMpZgixnntiWz49h38dfER",
  "key1": "B2fiALGvE3JAYBHCWPPbyhQgck4EHPN9NNn97VGscXVk9Z3bvH7FJYQxR4DdcMRBUkL5DMHs1mnY2LhaY7eaqic",
  "key2": "5kBRyqAyUSe31dxcxwNdjcXRr8oAjDjVLVDgBym2W5AhbRrPwpx9WYCWwM6p6SmGcnFa4VX83DkaEVx5Du1cqWeM",
  "key3": "5oRRSsDArkNeVm2X6hoAkHpDfm3tUSqbjqcaoyyTJAsynB2byNH4ta6xLqSZp5SSW1SYvN8MNr5DvQacR1iowtti",
  "key4": "5EYMf3y2jmbUZqEGrQgxbtWkVxeJmsTDAyBWUhNU9qzyEAvQMBp4vHeGnbuDq8TuMtnsemGRkVidVb7tpQ4iPkqw",
  "key5": "2aZ9t7dHZdkNtTXcUmkwQD6U4FmQafiKwGSRFGDv6d8QU5DPMGqupBrrWXnLJDg5NCagzZLeJ26ZWcaRz6WepnK4",
  "key6": "3cC1tpExjbSoyeBJWfaCCuJCPtPNxZyUhWbqmgFgcWrgDXeS7ZWpjUGqS1ioNfTVEC6Wkr5ho8TwLt4u8nBypaAC",
  "key7": "2cPdj3QTkDNiSUe39vtqreBoiTJcmHeXkgckEWSX8TFeMypPSgcxMRuTgVT2BNWbdGvLJP5GMCkGv3bPfpCekWBo",
  "key8": "2bnnp9Vrf7c9MxVkULvxSvCtTRYu3R2rtVLRjX9WP55adJ9kbSs2oFLNJh1hfhKaqXR2nNrC6tTcY3aHUJ4c4s4c",
  "key9": "4pPkTPMw7rY7Fbnu1wqoGSBqtP28fJCNZxUajFNTudW7MMXHCbwCG8W5htCM8iMRo45TR657YWwvcfihdpyjSZNr",
  "key10": "4Vj5y3WY275Cb4YzfTBBcEpTtrLC6719LZ4nWZtkGHC4oe5Joe3qFYb9pW3fTNMo2shabF89t5W4GsbT4BG7uTRz",
  "key11": "45F37x9b72oceUhhBgYqQw5m1AdKztM58oF5jgZ22BKdEaqeJf1uf1FAmBGeDugEnfdaFoCCCJKuNNpYief3TBDS",
  "key12": "sT33yyqUy9D3qcuskRZ1psmAXRiw6ULVbUPZJrNs5L4GxZbEtHrDdeTAAZssUrWkDimgCPtSSbGJqMc8jbZiifM",
  "key13": "5MUQwX6pr9rX96SRqDQSoATH9nEMr6QRaH6AD3XNZaEhmcBd7roDSKWJkx8EQvkHRp894EJF51djz5cD2GRRrxwd",
  "key14": "4pX3tmQJE4A8UR1xn9qRNhEX6EFCmBmiV2H377TcwUEX4J6vmeR3ruwg54XZzDNaQhHcy3jbsgeaHvHwvrV4P9vG",
  "key15": "3fnQxFDpVcQZxNfrWuyY5AQtNq1Wask5zfxankjJvKDgEYpxC6eQukknQCsPYkpf2UkTeUQYwEncCK7KPCN7uc8T",
  "key16": "443nwL8MWXC2MgzSn52g6DjWKNjsLmeDwZWHwn41cx987gEgfgPaiWQSn1L4a8a5m4a9dMActr4Mmg5gsBHu7LhW",
  "key17": "4vQrC1iaWL1n5oN98y6JJaM1vWg1mo85pJ7MAHvbZXWuNxthypYs4Rcv6EVMgHrVznHiBDCoL7xPPFLsh18rsEvy",
  "key18": "2mV2qBgpjA88xr98qEpLdhAWquLNYLGNMrUcLRg8rS1CaB6pSSsLkhWL8bp8fV2Ao5qU93ZmYrysc9s21swi2tY8",
  "key19": "5xDQNqycH4xgLrddYmgHj92eZSZrJMgiXLaK2EkyVUsce64ZR9Ji9SfBAKT3doibkDoQE9TRyHwYhj6hbmx28rEs",
  "key20": "53SgTNXaAPwjBZQnaFgSRcWwjezeWfgyP8fpJeNm31nUS5CLsDoC9sRcVMNGUKnkLsyG9rhYDrKje2BGaZjJMWuD",
  "key21": "j7fP7t4iNoZhxgmtdXiV28jBnUrFHZubwsfHbStnPqy3Kv7JBbNNAenE3B2gnJNTaeKXCS4fdZQcMbUm8L5crHC",
  "key22": "2NZpehFv8v4hojtmDuDz34DGYz3HHZ6D25662BEEeFzYzyYMBR8NdfFxdB6cuLquHty1vLhJuZv1R6JKMrryg7S6",
  "key23": "2dXfu4YYtUav9YcnC1MBmF67snewPahMtjWbz8LdzMB7C9wb9aJTjo3N9u1eMigRFvzjiLjwUGyU29ZAMaX5ynwD",
  "key24": "5qVViJCzzcUWejpzUaSG36cLau1Ntqjbehy3HQKjq4qcMhRLsSSrEhWxSXJ5Cie3ADq7kAfLLSEkN8HEwiSiJR9Z",
  "key25": "EJKHPvaaFaWPLvweaXna5FcZN1eSFKi5cLoPqfuYEwJNCR5TxT7SEXqBRfqUBfMbjaMvDayCV7M27TEuMTKzcaB",
  "key26": "3A9Wqzkbzb84cq7oP8tCcsQj8AgHi4JfEDzhDojxhxxGLdwsEk93FoCGRyZ4R6DFP2U9GBCp9x8zKa9nbDAR1zBA",
  "key27": "3box5BCedbFg73PFcAdDkbVTT4CCntHtLAkM34ZdqFckQLeswfTLPG8H8JGWeNRcHh2VeBv3TY7mBZF2AGVdVTB4",
  "key28": "4oAq5wGxtSk4j2aWs6sdHeerZz4PAhLhrh2JoSCNHS87S6vCSEGbmJxHg7ZWfQZaWzXQrobxXeQS9wDtWdpmAkjd",
  "key29": "3C2LuNvhajG4JP9uwnboZ34izULNwVH1Kt4uJCnxbKcTowD2F2mAMvUtN5dE8eoRxVmTTkezpmzVBTSRHtBdrBki",
  "key30": "9A4hFQgJn6uzxNvYKo2ZYdscXqVRLqzd9KzoFepXNEXM86yU3oTtaE1HqXZS8dWm4Uimk2KYHcqLaKdiGBaEpjD"
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
