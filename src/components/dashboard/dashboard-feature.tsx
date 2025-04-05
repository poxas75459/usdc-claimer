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
    "5uZjAWAwLUaGvmD9PDYsE7nDUbjLFKYFtG6FvoUh3SXr4wbCUK4hBAmSvRSMh6SuGid914LLEzwRqnAQ1ch1MTFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L8rXF5YU3jwGGxV7xg3TPEdNWsAgaAKzdFdbvNq9pzujBKaqpLQixFGGPf6gVn1xJoJSEEeiHsjE8pHiUfd72Q1",
  "key1": "5e4wQYNQML3ysSUYYprCz5JRyC6Ysxr8JiK85Ap4nsFRbqhPYG69hM64v7KNK3rocBFVWZN5wnhDUYfCP8APGSGx",
  "key2": "2KYxycfdeY33bTfHkkbCAi4TBSzs6uRr4kPuqfkAsFN1vhFtfoaYeJpaCAncBeZF7xTEejFmxd7Q24aXNLydQrmd",
  "key3": "22dQSNfu49TTAKeExnRJ6W7vT1vCTxx77YGTSEtXLC6CMYoK3SSAsHNghGFdD5Ug294V5B3L2mamUTb1YG1ZewEe",
  "key4": "66JsWYKAEEZZ9Jv2yeG4bNyAKaBaRmCPr3o65pUcfW7pErJVaropTiaNc5rCrKXripdFbYFT7rPDzx9L1ss94EJo",
  "key5": "4fSg7oU5PZ2S4pvSTS7HZ7mmaFtquXAn1XcyKnCoPg4unjghfaXXmRqeTfZajusXSDnrY61fYZcRCYEsu5VuW8GG",
  "key6": "3G9DQ812cpSs3myVZCt2kS3PhwmQ2hSxoBHpvmrk9crX6SSk2JWrsh1Ltg2VuP1eM4zfdYgXnGvz2TiavvAZY8gG",
  "key7": "3dZkbrybGbp5x1dm2mJcErFuVQav7mQ6aYhEMGkTJCF8RDGvrEoSHtFgH98W21UEUWnk788a1HjuGpyZ3wg1a61M",
  "key8": "2wsPspRnK6DmPYC2AwRd9oRVaL1cKHPiyTQDZyBFqjMmNL36Wqwje7h6f5osvVHndMVZd4SotoknKCFaPgeoALjF",
  "key9": "vBdKyZn4DWGLAcGcxZanuHyYhZDS8oVyDiLBnqVQN5JhPzrrNtfaRWgFq1td8BNwRCZeRiWNiBDH5nia8xM7ZaZ",
  "key10": "5ijf7ogBviWkWn9z5sCBfv4JLPPdJ3n18ELcvPmQqfgJT8zdzDy77QSWAX5ghURnjWUzLtcqyriLxBrvMBhr2iuM",
  "key11": "aDiCvXyqWL2ACTbtSGU3R7FNbMuZGv4tygsaHHSLXNWxrWgY7n6UYHVin1sV5d2hmSiR39arw6ebAAeKqSsFshT",
  "key12": "4FGbcPipMksUZwZnXGRmHjpoiXzo8tJuoUXnLPqqdCkA2hppAyGYymP4HnZsVpEK8uvy74ysEoQEyfRLxsugRXCK",
  "key13": "3QyoaiUNXuaPrkMa13qnt5wuX7j7UG4XXFc2zZvMZ8AXsEgkqjtXmUVTELQobosYZx2xocHE1MhqDFY9DARyEksE",
  "key14": "5ATP7P5dcZY331AXLYGVn5FhjbD29oQgHxoQLUmuF56UtZFELo7fcyEAydaA2tXUUfUNc2MW6sEA4pbkQEjPFqmb",
  "key15": "2DAY695ig2XgLBsQYoWwk4FVaCW35AsQEpbkw6Fwr8vrHSD7Vt2mgJaCK3rTCzDtNgtij4MiAcqGMyfK2RzHkwWB",
  "key16": "r1HNUw1XX74VcF5MhPdpU5hg3gK5Mq6SHdXoDYWkbF9P6KBxoWkPpdqUtrrLEcVTckGBmVWMt6bt5BPYxeyicKg",
  "key17": "2WKyMyomUDkLHHbCMx2JBHquz91TBDRgS7KT89dDJHmh945brCfDpZFooqVHqG7LQFBA4u3nvSKPnxHYvHiU4U49",
  "key18": "2YYefHam2dH3mFrdKy8edejJ692Vit12EezFeNzQhkAVzoAR4xFEwNT9ZBds9aRvUU8hY4GF6BKeJJFGntPEm8E",
  "key19": "2vLqQhXq43JuLHRRiQ5cacrJvQDvcUHniN6pT1fVfMhaMyKpcUnPmqGdQw6EDHy6Sv6fYCQZW5PMxmJjPYdABpSn",
  "key20": "2CVDFJ8YSUQQbXRicdoZUYx8NXFqvo3gnMpLTNbzdZsKiyqCs6jF9DTvpVzNVUMi1DvXjj68EmRN5gJ8sLFJb1Pm",
  "key21": "2EznoQNanphhP4pmtxEwuQkJixbrCEsfoWVqR2UkHyt8Zc9oz2P2kgPoJXqkt8HyQwv6JJRao8qxBg1VgE66Jdvx",
  "key22": "Kv5gBV8sCw8yGqpYTwiT8gkZFR5VpHGWsz4EzBXGZQNK9Czz5RitdjqvvCS7wSNQkeqfBUuw4k5nsGAoCGjkxE4",
  "key23": "26hhpEQgxbc6gfMPkGFmSGAf7ZsM5CgTwvMDqTZ913u6oJWh2BPBqK4NYc5vtCAPuakM1zX4U2BUWLsaHs1tSqyG",
  "key24": "4V1zmfHhPpuBf3vUyMnRvT5UYbKf6cGMfTwD9HbpyfgZnqWPFkLwV62A6yRpbZzs9rozo6XJLPP1wWTJFKtJ1DoN",
  "key25": "4S2yCFJN3SW8tBJs4E2bBrCi1McUj699oLg9HeQk319iT7WPRaqEv4KNWxWExDQgzDSdZgRvGdrKXZoQ6dX5vP88",
  "key26": "CrSXAwWoNGH218q4MRTYSbPJ1rnYGzeBguUGTPGZUQA5JeaCeCK4KB4woM5c4ErrQVFujBo59XPQC8JswBK7WHV",
  "key27": "5vtjn992r7Q71gbsdLVPeEbqKcJtwVF6MPYTmAHJphn99pF8vtcw7xc6S6dJQ7hfcAGQnqszu3sYvreTeX7i87iR"
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
