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
    "46VhdGQFBLDB9EBbBXwYEF9YZFUum8Vo8siKEBQvuEJZE8fZDCDxAtqdCBUWaFW9s3StDSWr7U4jgxFVbrMvLdHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YkvKUkQ7Ho3GvMCzsLwgtxvy3m9jSUEb28GMraKNyuQxnHf7sNPFsGZq7xyDNqgYSfsfxy4tPovT3mMz26zLik7",
  "key1": "5NQHuMQRynk5KFt4WartDiAhY1KAzsxy1gh9Naikr9sJocbn7QZc2TqWbryf8Yic6Wz1xsNrf98jzGD6Ufh4P1u7",
  "key2": "H1bUgXv3cPQP3QP6fkDyN6Mgf8XDd3JyTdtJ1YJm8Uk1i4Hc23maYp3PJRBtNn71apva1pQqdHUnDTrD58v38iq",
  "key3": "3hWJdUqrhM7mQq83ckaMRjabj3H7qhKzRSAz6Aq4AttFC6ESjj1bvEhfUjuqRfVLB77CazZTukMEN8WBDu943S2V",
  "key4": "3kndmPGcsGEi3RgbYP7czVjaVnNuydshzv7sJFxEXcKUckJ7f6Jp7ypPgBtUksaFYqPKh93UMqAJpPLdkjy4LHXC",
  "key5": "2Ghs8Y9Qyf95LQd7RTuvVpNJq1KcGahk3obRZqp1uhBB22riFxBE3b8ZUV4CdJMaHf59KcCn1Gm2Rs2FCGvhTtvw",
  "key6": "4qEidB34thgLhbfK4JFcYftGXAwjczFcZuKK3yozP1qnyYb2MHPhf9nstC4LZAJMUTQ7M8MHaZKS3PXcoqukuXQ3",
  "key7": "4S7Af28gFbYFS4Fzse2YsAqnNyxgHvRbCi4PUL1EZzpUn2kksefW6sNa818HwkcfjjvTNajuztmnnH38pLGs9RC2",
  "key8": "8hpVx5UN3XwutH9737y5J5dFX4XBTJB4t95zEq5y5xRoLSvYYpShdXHmNFBEZC4hEM5EXeXA5LjE8a5MyUNqbWd",
  "key9": "4LFusgJyskdheLFRXbjdDLPtqLzw4Kud4RwYcEBtrTY6bD1bxga8qqMCvf4KqCzLE3D6CEwJhDYuqmRxiNHoFQhD",
  "key10": "3qy2FQd1ju79Byx2b3gA645RsufSXzcA5xEoptvH1Ludg8pGviEeST7twxLCcG2TqzEEGAsaELRyJn6WcVVSHtMm",
  "key11": "2B5zDqDTDiJ1EPCS9A8BFMYhBB6ctVSNfLfhv59571GLkAV71AVdYUNBquQroRLM8X3N1cRfqQ395RtaVmXXzEiy",
  "key12": "24KYsG72BtiMJpwdmTepVMnZbJcjUrXo4vmRRHbEKKTm7puDH7UfwdiBakHT3V7GUGZtrNFt9mUKoqeyj7qvxHHz",
  "key13": "2YY5SFbBRht1xJ6HQ7fbKm11RyGiwrCxfF1CnLPvPmfjMTConDFQPqk2671vusL6jhrtNHGE56XsPFUckMSnw5QB",
  "key14": "38Yswfwze6dB2GXNXFHQ7KwkHx8F7my1TLgxFbiVgc88oH9G1wcEBprrju46KNLPZXVe7oA6tmEg363MwXK6ZASg",
  "key15": "2U35rWhqxHWwgF5RaVUoMY9cah7YccyHxpzw2gMngweYFdvPkp7wSLUFsiDoUNXGHkbaBXK8KbF8VZsCY3dfzKMa",
  "key16": "62fGwcquf7VeXcAMEKbnzG74LRsV63SBR4TQQMUqW79RznCbvxFnQXAP22FnF8dtwx5pWdBXiueGbVwSebAVk44",
  "key17": "5mCjzPX8WvAnUko3gDq3RwkTsF7yxE6HphQHX2DoffjE4wFKMcNQDtnHNi6LL26uubrgnAu5NY3UgJzWSuecFqtt",
  "key18": "4jQD38bHHnXmT13mW8GwGA72sZRdWbZu9ZzGcCUzeu5NVLiKdp5JRzXPj4jchEEvzNE18TmTGzNStjK3Gevy3BhU",
  "key19": "45feDjKQjYnkq7kinBEAXiVHAEzPuj3sx7PrvWYHb8i6bArdFw1hkJ8sHwM3fx6hwrTDktuWRvXx1v9yWHvfTdcj",
  "key20": "2KhLR7kc63csS7cWggCkpX25g2JpfVJATNv2Dqc3pERsd9wKnonEymFy5Q1C2pTmqYBTkfVkmTDSjAkexXCUbtnb",
  "key21": "5qb3EY1JPT6PR6ek4pFBkkM9dhPa9VxNjCzTSTohK6e28qG4sSyQwaJ2f932PrgtovFhpLHuiv6eDVq2MvKvihux",
  "key22": "ocARK7zLX7LxkGetiKkJmMw6ehkKwSdKsE3DTTz3beYb2ZGC6ApGpigDxCURQP1jqpLbQMCB6m3QfdKbEiZfUkS",
  "key23": "5gjyiNYz252qAbZ3zYLfLF3A5cfGqHUhCvKzrNJWS75mxvaS6ESx3VEZQeCyqbReesPWCnEYoyBSRJgdtFaq1pu1",
  "key24": "Au6qKZD4HKszyLzXWZrciUTaXo6FVPmAqksRYVfmLXS8KngoYEkHsAVPqvWZbYFsyjhY4BQjwG3r5VV6R4yriac",
  "key25": "5EX2RGm6a8xyeXCambZoL8RFDyFG5EBeUHkNvFhaYUF84TSQ55s2ndMBiZ9ETurBqicuasfndDzARtSKTrkZZk4L",
  "key26": "2f2rT5zKpnmmGFHpbwTr3irJGfwfRVmmXN3PgP1A2LXKtmqBLY8dV9zszgUGXzCMzSPKin3E8koXgcJbvxrB2jEk",
  "key27": "4LKZ4sg2LWG7xmE8E6hWDG6SSxeCwLJQFW17knz9MD8MExxvoWcDiR8deywqVVmEHq3PMgp1KWdnZrjS4w1a5CW4",
  "key28": "JRyK6G3FSNYgsYwuqvigje6uAfxAngdyszbqqmCNetnPtm1jBVe4VjDa6mkPYH3K6mP6xWcneNbMX7dsUPNNLzp",
  "key29": "5NPLHURttu8H3rc9JGz4jGuqGRdSRcYJVfcHCSq2txRkw82E7RXArBBtKcycjVkBkAc1Dt4qMXU8sYaQ4VEuVpPu"
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
