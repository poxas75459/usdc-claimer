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
    "2e5wKipHfoV8ZZLsyyQqpmPMz6mDXEyQ6B6NnbiN2bA3C2ZDSkbbGbWHFnXRZCV4N9PL8tJQqdef6VLYxt1FSSFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eD9gqNqGyHAi7LxBD5gRm9XWTyTdtLpBtxcuf4A4G46wn6bKxBtUYQB4KNUVaYTxdE4XMKGvaS14FRz6JuENScH",
  "key1": "44jqJf3T3YSesK162EPXYpdFA25d1zpAj31Hh6upBjCmdu4XgXT6DMPXUPLjw7N5tBSbyf4VJHZBsLmiwNnLZ31W",
  "key2": "4Ww6RpFXX41yzYiw5XwUVfLNTQ696oZKSR9iaAhRCqKKHaooy3ShQXvkQQYmx3hbv5qQ2Q4Bp6sSfFoc3T45pqNZ",
  "key3": "5wciSBQxY4TTgGP4FRQd9Uyx7bbSh4tPuac1mYkXoUFNcJRSvENT1NWUMsyZdZXwKPdkfa65mSi5ysq3bQykBApt",
  "key4": "2bTqhuWbjxuHV7Nk22r3UFWhw84EVUj4swGLDzXHDfZ9mDMD52EiGyA9CcMyiNYj9Sbn6mLxBWdiiPwj674FDxeS",
  "key5": "2dD5cF8JFc456LUdLZJbv7soxpmE6vriJ2VZMWQzmSBem2RsmJy45EMhwu1UQtKoamNEHbTAbqBXPhRdZ8Ngzpo7",
  "key6": "FQFgtEyDgiSRSdDFePyrMAfL7wosjodkABDB3xpRtXidaQGEXS7cJWFTxQbzBaFGwoHNfBTg4QpVPnxDCagpzAS",
  "key7": "jMkdLpQ4sUM4eiVwJNQwepHzNeRFTjdrDgRwWiSEuX1SFJzsK5Ryo8RgX7nMzxQFSK21GiSKbW1PRCqnTEyGPhD",
  "key8": "gR2vAm8YypSs61uCq4HqQPnUPKEQTmMGhr67xAPqZCWo2LzzjoPkiWf91Re7DnFCPdbQS1ZzYcYUpjVjDqw31ja",
  "key9": "67nCJ6mSMZ87KZbDEVd5p7yMXyUiu2Yodq8UiT8LvFw2ZS7dMnwhULmgYXChizN1RpeH4ox4sfZNNMEVwGAVEdWM",
  "key10": "3qcFauz55MhdU7tn21ynfNiV6114bLg6quZ7YCL1RXBFTDt424w31CYJdG1VTGMHTBcDfp6fsW67cz51kLSvpfcm",
  "key11": "4Zg1KiTZ14GxG7TsiLCrxgm2mFhpo6c5SBEUtMMPuQpn4azLrjqHeH4zYvf8qfHUGcd1r6EES7rd2j1STqi9juGn",
  "key12": "5rsb75M6zaNmoRdGQhcvQ8WNpZCjbaKmYrutGLM5aE4cCASq93FeQWyX27evoyJjYW4hCy3UzefkPUWhtQBcAiJH",
  "key13": "4FdjB3vwZrnU6VA4PgHp2wQBVFBNoVLaSLYKYeeYQFAVNqM72vRqqfAK8LTDBaHD8YerQSHkEkc5hXUEmhZZaGis",
  "key14": "3ywmtx7kXbvUjLabBtMxSppBH3u2hQyxRFH7oab6huJX7dzdHcab3ZR8g4q2uUdX5aLKYV2JVC1ctfhJP89Zd4F7",
  "key15": "3dphq9TeW5gZYTciZBi73suRyisX6xiMRwnvtpZRzCaFNx2WoPzNFovJeMVHGiN8nQQrD4q8rUKA6Du7JgzNNeW6",
  "key16": "wsfKtRdJGPkNwdcCBvEV9YYu67MrdU88vbv2U7QwTrfN1spZecp3fajBQv8bUMg2oEokuQEtvkcxCfrucS9DMCf",
  "key17": "rJj5VvSquznaUzMn9VUrzHBqWzgUU8iRTi9dPrU1nCrW1Nch2YASe1BvRLWR3ZqzUXmxA2Vd1esfCLzHSJbrrEQ",
  "key18": "4Td18FLaLwqJ5LTzyv5tVQE1D4iDnaVGvNDZDiUd4dyVZEC3sQ2ZFnnb77hxwU7JhTEronATEZaWgpKz1nfD5Sf5",
  "key19": "ycg5dxadJXgsrWkYRbY5zUbGaGdNC8kVy1bijkZyPj6ma1EK93BBUqogcEEhCbvpidN7z8Tyv24QsjkJtNDWpga",
  "key20": "4LV1gkheaPcnm3HeKzJGnKt88FDjKVftpeZFv4yRoQASnWSCvDQijZGtuH1yT8b7EmzqdyFPuPH5jWucE9mvQ7gu",
  "key21": "NZAKUeP55zvXpghpMtahfAvrj8iSvwHNoaxorA2ChBx5Fp9eQJ4ZxUnLEp84dRGJzqDBqkekFVCz5PpKBvqm3WS",
  "key22": "qZAnjG59VhHiRVMWZwJDzSxtsvWsiXgrdTCoc92zCtgmC1srmxZtaCEeX5qMJhDe2m6DXF9KN6c8EnMALkV5jZm",
  "key23": "4ARmUoncd54PPafxvxCTDCgmVKCKLW7mgfxfWekCT34pNVcU34i9WFH3iCSGJ4KHxcy22fdpy8S3haz5W6vE71Ta",
  "key24": "4c3emJc7fngvp76JZKvcQAL5CAc2vs21fFuJ1CP6eN4HoovfPDSmLMMwxvHNY6DMgZEm9fsqFH6J4uGx1aZHURKJ",
  "key25": "4BRWwPf1BgZbbndN9oHfmseDk5YGshcrNdBKMzb5vQyvXu5KF4mX3ibbX6UXXnF4S1Npc86e7n2S9MavEhwBVgs7"
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
