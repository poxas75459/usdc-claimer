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
    "4HXXgkQCQ8ETLk9Sjt4mat94BbdpPhECipGR3qGcCY4njSKk8v9aHseEmVrMCuP69xYCSwxr25rMeXEzh17oaRd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29RBiEMmGdESomArgw3QTSLmgz8husZiALknupNQBHCeRtSTF8a6PHXL9cDvxcQRFzs5CjLCDabtKH7ymiTW1oJi",
  "key1": "5xJu2nnPPcCuuTRYFgSdnRNQeAvFAjV5LZsLLM518dsNDY8PBSRVtnRtSwT9oJEAPJ3kc1htd47JqcizggLyFL1q",
  "key2": "2rR78wyspmjHG2A3cNa1w8DE4i4hq4uoVtWawcttqVrsESRfDofhSYUTob8WRWR8ZbzczkB8YVuMeoTK2PGj8paY",
  "key3": "4W81XVmUjLie1de63KLDRtXGZrkA4K7JF6o8evdwjUSYXKWxXxPV5SbxEFTLEokdfCPmDCwsdJhVK5MriNo548kz",
  "key4": "4mfdYsHK8kovjQyrpRRZjsnoqCQT1VDMEjGo1HZWx8MAjZtH6dwbsXQhfFqAdqqxcYjmumMUeHwRGp81jRR33ddf",
  "key5": "2RXaiBEPmbV17aC52ZgzW9p4Tx142pnyuQLw1Ubi1X2Jpqy7xEqnHVvv2j1hf2ASKuzNknWsAhnRbuvtrrFykdXA",
  "key6": "342bfjGDkpNZFDtw3KSgnGk6UgPZXsRPi1F421doP52jXDUsH985UjYBmEno3hT7HqUMNaQSaJLhjDH7eGaiAFCc",
  "key7": "4yNVYTGFAAaJTUXShkNANB6Pdr5xyWvek6ZqZ7P2C3e4Hvk6MCisr5oatDSnPLx8UVQ6WC7D6Dig6DrbKbNSQhDi",
  "key8": "2UqeWHAJoj7sngzmWy3mBPq3XDAyfUoTkaDyXiBrQjuZW3ZTq2bxQMqo97KYZHQATFp7Ejst6RhyiSj7tpZ77CnY",
  "key9": "4yayQxmpNBoyVQbnoVw98nzZJibRMTK6eaFKKH1mF5BPuRVa9FbFzAaqPLXcEfpg2TJA4T1CSjYjdzQEKwE9cknz",
  "key10": "3kR5UDcJkCnJG1qvba6EgqaMNQ8FpybBioKc2xG3ZZcjy6pWTphHVbbG1Kym3dYbe5Hzc4JJJeXXxrTZ17Usi2TB",
  "key11": "5XZcQQUaw6QdQ98HuzjchQgF6GShJMgmVy3FiKhWEsrr7kJ3i5Rveqp2Fgr8bvrRzBaHWVRJk7KQxwzDigh2o6Pb",
  "key12": "3FGDJ1FCVL7XdPvJ98vNFimRUFFwhfVTEA3kwJkiC5s8mMbN3v7MCesLeCHYBSieqy1aZs7CpcfNSkp8WgBDkFF",
  "key13": "MBL6ccesmQhSG1SRtxVTxhodErMg9bHVbWKuoJ7W8CogA5pZGghddRYTgZS6ny3E2ynryRa2ngC2kXA1gFVcsZ9",
  "key14": "4hwMo9HSseJwxyf92BeUuVrwhTxrP3eQVrrqi8VJrFrtPXrVwtUb4uy2n1cvNwxQUMXxhj2ZoViBBYz5wufwWsbs",
  "key15": "oVtwsSYoirJcxyUKPSatTBVbV4BdAfVG2rYUwEoFF3U1Vs9jg6W5NdvhR8kc1vKLgf4Fw6LrApSXMDRcVMmQ1Ac",
  "key16": "2k8RZr5b8hghEvqycE7WA4JW7RmWvFDLfM62avDsLmn4Vsn4druSwjn2CQFhg5S4wk9YFqjJ4SjvBnoFDoLMygzS",
  "key17": "414A5KAmcAM3pTcAbjCfum4gbqmMYir798sgAokfEei9J73vBJBBuSy6VEMC2NZ1y51GTytn7zpZXyZMnpJLTx3y",
  "key18": "2FZmYNVpK5H1aSojLUypjwcZmCytCvgLDWfKQKtRUFitY8wfaJuzPAWZ5ysK1F6ARNZhGu6p9qj5bFtZinm61JAV",
  "key19": "5A8L4nH9CKZcsYgZFMTDZJx1ujUwLBgsB2uByhC7EYHLoN1JLvpN1s98Fai67RGDR3Sq11LNDSyt9Mn43WS9uePc",
  "key20": "5fxjmB134BEdc4Uj8GmFHUUbWgoJCBX7n5unWvZNnFsog7wG5kBKZ3YTmSNQL5JqZeKT6Ag6udP6ZGbmURJP2Pms",
  "key21": "3ABZTRFRpwhyjFKuh9fXEake7frDPJ5gqGsRyaBmHrSmgi2AoAbmSoGasReLT2VNHY8aYVfF7g5J7LEfc9w1nLnq",
  "key22": "2dVBgAoDP3KxzEwWmnkW8QASFTmbFtwBDTVaBzzgVZhpLdnQYmYQuzTYFDe3vYxXpyY6Yk1pMXUXiagceXTXAz48",
  "key23": "AJX564mRyVSb87LUnDwmQ6UR35DyN4oqKnmy2kbU6YgNcAn5xP6JV3xLzuj4uktGhvXhJn4fFBSvNPs42RFB7oP",
  "key24": "2W6rqpq8f3NkQFgyhxHvyekvB1dk7p8Xeyx94PiRk2P9TtFhc57WuB2rfgR1Zb436xZEEfY47FLAxu8gV7S9VxGv",
  "key25": "5mj5YQviuCVRTmAVJ1MkYmk4GTszCuytuYrKhXUQEAqYKeTPLUCJwaKigZKuNsnmp59G1phZguqKQXoMywHfo4Lo",
  "key26": "5UeffzJMYhxCVNKzge1D7H6F2GpSkdepAu9skPajUdQoeNMPbLu4ygWQX4TKBL7DoAP8aCFBWFsh2y8L1zQ7bixf",
  "key27": "4cDkrRrxHzBh4yCqTvbf4ZdBjCo26heQEzykm1KpfQ3syoBvzgiFgunH6uNu4ftkqib6UcREQ9ivdhG44J12NpQJ",
  "key28": "3KTpQaHWKrokpW45deVQxmwHmR9HacHQ7CuNgbVkMKGc4xcakDqJPooXPq8L21eL1Kxgp7QggYJt7nkZq342kQkW",
  "key29": "5g3xfE62y3UYEsPo4idcwrTVm2SHSWuho7JGNodD4c9zbVDEj7Min7rjkZhC1x8xsbyuUW6YoGY4pyko5ms59ku1",
  "key30": "R5goy6Pr2DB851NoYTRdW8RL2ssNmnjv1CzEssoHBdgXaK82BfU1D5AyyTZWY5DWpySV9bW5Rc2aJKSGk5qJ2kF",
  "key31": "43Ktw12KPSGLorQBzzsimSLHVZQ6KYuU4ek1twX8YKc7tNPmUyGtcQ3X9LMn5JPp4sK97jq2LiVMDg8jfxXo822J",
  "key32": "2WcCPbWLhm93Uca2eDFX4kTKSanpFQ5K37uiYux8r3aX56upMyhXVHVahBPovmPNQY4qArzv4HTVKTcSbCSjSzii"
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
