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
    "5pixzVSoerNr4oUULY9fjDAfZGkSyJe1EHMupUuNGD76Mp8nMdWjwn1udLC53rPzBd5KJMzrFsHgWjyfL6LMuLK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mQavHGbZWwyrDVdWqzHpbuD3FQ4CEFiWdQZCooxqbxDBoddrzHn7qFf7HD47w2xCguwchxQ27ygcRPgr5KwEs94",
  "key1": "5qL8rWsRQ9L5cgWj3BZSiSMPkNJJxgkAaS257MWjtnncsqfkhEgR18Fh7ZFYWacGstQzDkW8P91gukVcQXDZyrSx",
  "key2": "5Hmc1Fu6yGcpvZUEteReXr4Y9Z8h5372YuPMAs3BmHBxFfzm3izBj8TMTY6aHJWVacdhzzzZXSddBe7zML71Q1xo",
  "key3": "25Nekvn359xxJQ4THCFrTKn8tN7mrMmoVM1yynojz7Y5thTGtLE2gpoQsUFruDB6QGArJHNidrMxoASCYPJyKFKj",
  "key4": "5GfJVUdQdhGxtyd1DAnzZ2T1DDqrkZC6pYBUzxnBiJQVMGmstuLtsfJiVC7vPSo5kz1BmWecAzmiPQecrHFrD5Mi",
  "key5": "9mKM6ZjGqymAVCJLrHRjmYdUySbqRQ8LudSZLzbkaaw1s287DJ1BfD2MywTFAReZsVt6uVFiPj3KTYm4h97fa2f",
  "key6": "4jYndyJ1Rkefm4nwG8h1ghfFLzE2JVxB3o4qo8JEigeTNgiCp3miKSrjQqFyZi4efJGe2Ky7NwjB5HVi54NquTMW",
  "key7": "f5w7UdaXmRPnVpss3g5oHnsZV8qUSDX2n4J9cshibqgMSG9J5msgqkj3mkhKeNJvmFFbFRDBVdJG9X4U79agSVM",
  "key8": "3zwqcwaXQDV86mnNG4uk73PGou4rpGdzS9qs9xs1pey45eqskqDKSrJkPJqTBfhXiwyPTENFmGnAksovFgSWtixw",
  "key9": "5cNCWUUdqmi1p7QwNnLNNNNvcEkmp4953y8pPycAtzt8dRyT5QJ9Am37mpbTWPC4CAaX6KfYjmJCUzFLvAYZsy6S",
  "key10": "4ajHM49paUJcP8DfUYmgTjCkgqSL2SzpRxPGNi6uFsERWTCXXh1TViM3HVCgfjD67vdWGMyEUnNNpFABgo8o3rgG",
  "key11": "248kPQnQVP1pqNn2LEoqZ89b8ChSKuAD3nqDRKUoKxKM3BLy8zu9W8KKKk2YL8ebsZm2V6nKTFxqLLVuWuKscE5c",
  "key12": "2k7w7apDjrktJwAGPxXb6mK7Z9vo1amG39ckaox1P3fWfS1iE3hsLdNtpKGCPVMADxbBXhSmykRayskvMSBKDzDB",
  "key13": "5W6bWST2L9294HtQvpHEbpmScZV5fJN2VpAoAG3EmGfZ91SpG5AAaDk1MLu7ZafHH7Wt4FQFe7Az2cHFBsoRkkdb",
  "key14": "3ifnb1Azp4fKqfU6ZAQE5yYsNTJMQtc8SLCkKNbrJGnEmaG68wbUkkRcMLTx36zcHMwBcNsDPDcrfeiAQVHrL3GP",
  "key15": "TpxCx7u4TAk9FRgYP8ZyyK9PTpqrVLWFk42CFvyfKLKFF7XcLew1aUyaNz9CsKCyLBqg9FqmcL67yc2FN9Fgndd",
  "key16": "HAP8er1BopsrWnM2Z3ih3FcQ19XUbNmx6Q2Qt2rhcyBgdEQKPmZQjnjiZMG9oyN1wvxzXzYy7pAxPHrcnffZ24m",
  "key17": "3N8cHKn61piYfHP2MBBKCHqhur1GbYSpZCn74akDDGuMZHtxFJxHeRY5RZh9nBiiUqWWhdFygADDTWZrGxPQWJ23",
  "key18": "3FWQV3yFZUmtdEbiaBW8HX6KQy6LJTenNN96aARvq9wauzB6WuJZNmCLbBHqsonmEbdq4h8RtFiE8sjUw2qaaTkY",
  "key19": "5QvND4wfamFY2T9zJD6dRgsYnZwZV42he2KYp1tGKPgJZSxw2Gg8mPk62ZVDjMRQCqpXRuNAdLGrFcihcpxdY4nq",
  "key20": "5K1KFCc3GTJQzHLv5z7WbzJnMeCeD8JkUPkVePqcVsam4SAvVg9uPZNoeCcvNqxsMs6oi8dRGY7uMdLdLcesMrWi",
  "key21": "9haYfA8brv1HjerpdC3jfZkAYipzVDx3imyGPNrEicA5aiDRxMwuG6G7614gjvQpxHokWDg3dE5Q8tFPZuJB7E7",
  "key22": "1zqM65yXY5hPpaoGQrttykmak1XZMnUpemkxocDqfT12bGxEY64CxnkgKo9WNUK4q1SK9BDojhjUcEgmn1zkSQM",
  "key23": "3tchyBLNjWyL4aoqv3RD8ZMD3qZdXrMR52nJnYW4fvnbedYGntRLiHEgMzGa4DZXzY5W5dwtf1iSJTkbH1nUVjY3",
  "key24": "2k5yjCHFuSeSxTGCbnteFYo6jnQNCqyGkdYb68FeuxoHH2aqo2f31gEojPKVwVWDYpcWnhXTCYQ47x9eiHDgWjXn",
  "key25": "iRtWMeUvudZuvXvtZgNXgEcqcM7rNgAttPtDPtpPjQvSARMeQAS9bUgBYYZX8KuhbDESJJ5Fo3SPrdh6bXNFsge"
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
