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
    "37HVzrxogGeMzbK2hazudo45WtpBHv5dYbaHGNDft1hQwZdNC2P1nwFvNzJ64D1bpc1u51uASq9UVP8fcDzyozzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cPTMLXTtn8wD8V629tZyomeDmzPNiDeP68G9tDwdnEnDtjM6wP6TbHekzKWrXR6BvukiYrMxD2Do4rZnkGDhH1f",
  "key1": "5sTootwRqkAeRknDv9NQ3njkxwf82GiWZuP55GFtDXgnNmXyjdhyJUMrK8uizWiAzWgbGV7Cg6M5fV6ZkUk1nGr7",
  "key2": "3r9zruCGUgbn9NxspHttyrGcdeN6SCWEsfPMNi6GZHNaC6KAkYBP5wpWD1TpuitWeqm8xVSvFV33JnQJrSdXYU7E",
  "key3": "3684uRaFLU8ytrQsQqysCgkVqpk51A8RR2oofJy3i3w6VDdkU38pf4DwfSK77zNRKUF7DouhKKz4BAXpLozFDutG",
  "key4": "4yZQirizxwq3eTksAzjPPt2KLAXTENHf3WDJ6S1giNASqqaCfgxWJLMUupszmqqABjogn5SZH5o2pVHuyCinYhz4",
  "key5": "3e2rPujdgiSiirkNQoJsPsCzFgKEhNcnG5vD7XcveNfN4Hj6wTV129MsroSuRFgBaBRtY5efAXY7TVUGfCLKM6CD",
  "key6": "5RbdX2bbc7BQ2zYEePrVt63Qxei75F6zGQE6Yp58DnoXP12GhHTMkwyLWdqCtUTXtgqr3i9uy6Z6uCv6Pt1tdEgp",
  "key7": "32LB8qn6y4CjExdt3hPGFaNRs7aUfmW3V8BhkC6uZEQhvtkto2BNaAafnosNUPsV25fwYXqe39VzMZAvZPRULkBY",
  "key8": "2uqAA5kRJVkpuh3UkCZptyixaQf6GB3n9RHBziLV1gGMmnitXT2GRRuGryp5RDh3sJMdeAcqz2oTi5GFddc1Uzc6",
  "key9": "24MQEYkDg7W6UgqmWVrUTwhgLHEiux96WCKv1YZdEFg9Daak5uM6nQVP8fYKnwQ8FUYz5Wqjz3fgEMdsUNANuKnA",
  "key10": "5Ga3Ji8M8GbyRNTYpyuK8uArDX5DYCoNDJYwC8fVZmoZ6hjwSDzJQPFmFZEZR7bnci218cQC1jAijN6j85fmu16p",
  "key11": "36wSjKJeoN5fkLFWvKZ7CtLPEd47krxh1mf22mo2HbMtQRrMngSnXbs1zLTMWQBEptNYzPhY7Q1wK9QXK1MF72eB",
  "key12": "5AfTkwYNVWyRc9BmazhhjiMG8d9WDWaZCMg6UUjjY7boDnx29fpFmEj5QVzhpZpyuV9ii1JWD7jGEet14vN6FXCZ",
  "key13": "2ZTd9jwkPzhjK4qcgDRWCCbGFRaztCgsZT8Zitdpp8Hfzn6b4fgHUZcJNphrkGGPk7Gmodo9mWcJ3sxtjC8fp9me",
  "key14": "3PhxaFj9HTRj4XkmJfSZDdWCwCy9pCfYAMQQat3wnyhiyCw33GQankbm4qd2HjtJQTjXGVGqDPn8goBqnkJfyPNX",
  "key15": "2wEV2ph5TXQnUfor2KpjR2Xi2qoWzriURjzv9fRzpybYSgiKSLjUCo42V5EpuiPVA9trRqAc4pTrCKBNwroRt6zY",
  "key16": "4CtrSi5J3CMSdUTBQ9P5xvERakVkC7UxeR5u9f1aauKLesrKYQ4Lpz9NX3jAYz9ruJTDf7DYhvxcgds1r6cbKC99",
  "key17": "XtzmmSktdLMQj5ux9tXvor7asGVR3hEMoCWeZwypYMoJP6RBUB42KspFpfbL1YcRVbSBZ41oCXgcM2BgxsppSTi",
  "key18": "5z8617zb4LAc3YrEuLNANYUfBx2tp3cmyaGV7zcG6g1CDPWBSNxson9fSrGnMzrSqFfSZE8HRj2zd4qvmHxEALti",
  "key19": "3zfnQ8QLLGhYrns94XML2wA8pDe386Rtz5XMqXC3PUKxULL9degEzMRGWU8imRtfxaKswFrUFqppbYiUE5G54Q5r",
  "key20": "2AHqcyuJThU6xomR4Y9VUvdU1dYmK7F3WiUZTosiFuUPpMGHBefXS1AAJ7DGiU2iRa6GhhyL4C7egcTzmNQC2at6",
  "key21": "3ZTfQM1JjBq3vsusGVkJFnjcFPsMMgHkpqvnv84aiPpt5fotyKrHi4XGKkfVmXCN5YHJQkbZPQCbtzuJVV6v47G6",
  "key22": "5f2wjxtMJeTuqJPtptS7uo5x1wxG96SSUdzb5G5n5fBWQsZye5MJVtDEM9dqz58hW5jerhS9StQvG9EBNnwAMYKw",
  "key23": "5Jric4jEHc6X2ukxzzndYZNXGsHJ9cQa4GyGtiLTULvkfWX2dMAaiFipdftSZHsT4Kz8dfEtpiCK8iEqSM1cYQZu",
  "key24": "5g4MrL5yiFLN17FGtQG54ikQ7xMmoM1QzxAKNDLeiQniLWhzEgQBVkoJxJqzHfcD1D7PBP5F6bFy5Z4aLkXfpd3h",
  "key25": "ZLoX863QQhsum9XWTfR9SJwoJzfaNqj4mLzebzHNxTTGmhM73C71i85vP62tNXtzwL334f3t9iCC4zV4ZvGHrgp",
  "key26": "5w3n9eMZvv7mU6btWTUJdWNuJ9mHkWh6FocuB9HnJDpPhwfe8Phto9F5jbYUBRYpDQi3bT86wJPnuk3UNEA7pMWS"
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
