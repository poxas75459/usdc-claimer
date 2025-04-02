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
    "6ZUKat4ZAwSdPHXy9FBqE9Y2SXjeMagR1rYtDFSR5epg7Ty2hwbBumGVa7dnNaGYaXt9J2qikHxbV364vivEmu4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g8ZAvgF2cx78przFzxH895pUHTHVmSkJAnTczNLPLpuBsJi1JZHBRxZV41Lacg6hTq5mf67n5MBLWnooBdHErDk",
  "key1": "NqTmBmhFdeACKNquc3HJm6pSwzQWj9yQ1RHSehdYHsWRrXf1r8FTuuvMe9Cce3BSvJMonVSnU7ZUAC2sY8HceSk",
  "key2": "5bm1JeigtLouBZq8dYxPMDWnAn2PAe9WiPhpRFHE3x2GY2LQGSsAfL9HkdgavMrNAUfZfL68rbxHuTvB7zTrL85p",
  "key3": "2EzMaCM8JwCQ3FNDqJ3eWW2CD1yECBtX1fharSu9zJwz6cR4dGnaRXZBSt9MHveDbmbUNiC7bYLoV3Z2avyNHaNQ",
  "key4": "22bN2boEB9Ap3aWYgx8GR4CRGDJU7K1DiCr1DfWpjsWW6qTyCFkraYm774v4TaWXXCyxa7TT53fXekfAccuiXABy",
  "key5": "4X67zudxgcijRQ8Uv2GriwcywGca3M4zzAnngVJTiUsZFCm38rw3PKFiTZ6MJ6tpTVLccnDWt88ej7k47TwHWSo6",
  "key6": "3kRMjTehVWm5jTbR7DaDE2C7hiZTLhqX8q5Qowix8nALmzHjfuCY8oNHCz3Rt1QNmDk6upmHBTHLi83yaPBERcRR",
  "key7": "4kc5VPfQ1ewManK3QhWwhbruwKYr4AiApV2pyQtjaBrRyybfRH8aQLJzLtLkx4zfoKx8gHDFbLKzod7UrEL9yxRE",
  "key8": "hyg4e8J1UoKMCbHv5VGG3V88bna59F9s3rfA63KYquk34pJN86rwi5wxZzrKe5MvTLjfYAwtEVSiarqiiw3znyV",
  "key9": "zrtqPhMGTdWjvRpgyNE2iZjZXy3CGKjkcu41E53Q1W2sNtP13N3hc1EsqoY6RbyPjn4zuyWxi7mtzvxfep63rFE",
  "key10": "5HoxpL9KYu51k7nCBy3yVcZ7TKaXxgzHNoVBou6zjs3ML9ZvyiuyTMzs3aRYGryqu26jf2CDowZurVRAtwUjnuSk",
  "key11": "3ANVWia7MdwK1xYkhHtmyV8FuXM7ivk2JUaPtFMZ4rB8ftdnUMnyayEfd1EPcKQDokUpM1TdFL9d5ivxrvJJ2x8x",
  "key12": "JxvvhHzeLPGDT8SxrMTRdemxyBq55zaZpGusQprK4da37d3tHTdnefLVmuSWk8N7S3Wv92Ad8eYfa1DjC9YxdLq",
  "key13": "5D9VWEJ7wL3zwq6fyCDfn45sPQ7oXz8WtKhYJAM4jzYf5im2QXJ5g8GkWsjFZsH2a7Q5sDxxvdUci7xCTptF6iYw",
  "key14": "5c1V4kR9StY1Avgp8Q72RCaW1kZBuHCqLMwCe1oiDvh8AhnsVAP3QuC4iTqphmbMjMTDM6yKhk3EDDwV437WWHBL",
  "key15": "5rGADTPqHshZVr9D8VQUd7TLomdfhszuqFiriBWJqBdnrdEXjt2uMwyy3455WY9ojzwdvRnsk8yBcqRWXie1PmcU",
  "key16": "45S6YiYW8nUFG2UTK67HFtsBd9pEakGuDaxRoXmMf61N9YUojpjfd5DTe5EBw6RQzAfDF83vEimd6cVYgSwaceJD",
  "key17": "48RpcbXeA48zddmT9CxNVDjG7usWHQWUMM3kN1ZoVuHGRS2hNSqoGHqMH7n78xfanPjiLHn2wY7Jyw6uoiGkMWyB",
  "key18": "2v3txEmc78F2r5asL1jYgWUFUZVKAUi6oc4WNQ829GBzNeuy9oHnq7qrNFp5yKU24L6yrSPkXTrWpGCEppd2Hqf3",
  "key19": "5rwyxZzvvXZKw2VdhPYXUSKge1XJ5BduRcPKukVpA2P4FbsL92Ndz5gvfe7dujc4adNqBtvj4q8erq3fARp7y1X6",
  "key20": "283dXW9u2pFm2WD2KpU3kiekGnhbz56ZobevyVKs91ocxA9pteituHTxhNbwBEELPPh1MtfMh5RzdmgcztpbzAcG",
  "key21": "3wNkascPr1X1UtpTGdnvFeKjfqKKgkzihezvWsk5Vr3itM5bzkMB4erDJwLgQFNsA5wQ9NnCAMGgYS1LonBy1SyH",
  "key22": "ywTKirA8xs8hNeB372z2zqZZu6MaBX9nnsQz5m8UYnYE7XmwRMvsAqUAGJhwV1eAcdJs1jWRu7VAtxY7M3CRN6J",
  "key23": "5Yz9HPGPLQMgZC6oYpQuPkPHQJZjUb56D5pzG7pcsqPzp2ogPcrhJP81sAtQJXrWK5MZier8DgKdAmZG64DweJdD",
  "key24": "ZpAXnbe8pCDYiVEvw1evfoKNE4HHKjKvzY1ZWWWQYhMRpmLWVPNqvUJKnkbeBhcVfXwETF8sRVtU5QM1VZ7wBCw",
  "key25": "5u2GHaBbSDnzfepaKxRVm1VQgv2F82ymMiQaWiQCkHZyH2JSjyGjpprBchQvckD4gfv53vjZAe4VSfmvTx1WEFzt",
  "key26": "2FXJu9YvuxktvkNmN7Lw8XZBGf5o43Tqvd4Hhb3onNHqAgNQCWd38NoDaVWSGRQTBTnJcDLyaN8Bs1tq7WrY8tnR",
  "key27": "3rYiVv8hv21wt7c6vWop1hPqLd477YzrhsZyxpvA8t4tSoy3zcuH7GVEBhM5CLpUDmENFRCDVs5zLzmhJkRttrgE",
  "key28": "5hbWg1J7K6PhXYCij86uvByQKGAvmXbNXM4Ci9ZGG2MP8FrYb7Cky6J1nEpPwh2dEg8zEHBWkzjR9bCHBuasSEZe"
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
