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
    "33awZeA2a5pCgJYCcku7uhJS4JLRtyxauDx9gYw7AYP3PsMVeXXqy41CxxxHe1soNG7APiDVTbgZc4tQJeHUTgHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A2R5X7NkPWAy43y6mvVgfTGfWDx7y4GiS8xwJ2hxvLMLgWbJGjar3caidwcxht5y9QQQ3QTjMJqueqGkZMH5b7s",
  "key1": "5bGKFht2Awx6DqPVxAcnkv4TsBXouPRsDsX1g7ZBM3FmehaZhZWnnxSR8QagM5fTr6ejQ6qoWJdSxsfdGzhQF2hG",
  "key2": "51pkg25HrkeBwQ9EjhjtCkXrcgc1xBvgrn9hw4EpcNTSMcLUtnCT9At4Bc9mE7VgVqGhTnXKUf4cfnA9RvmQcUW7",
  "key3": "5KpditNov4E5xJmyS44Q9mNuD4YqAyRrdweECFNNK1uv54DijUZDeJxK74TXdAvB5R5sQ5FWCb9mNJDAjsmxwug3",
  "key4": "664u5JGZnFTbDLzW3dRPyc2TKaxQfUk6oPXAJWZ3dbww5gQMhZNz7hrkvZRTVN4stt9xFeLAVKNZwinV5HNpvR2Y",
  "key5": "5vC5UKwn7ACJsXqmEnsxp3HPdrqSRxNvjbUcFSznnX8wgvJcxJJ2sYNg4vywTCtZhvfMStchAZL1eTCfzfGQvhg2",
  "key6": "5RMLXHLnC2LDDuRw7piDvmrR4m5Kj4ooq5ofypr8ysqMJWcwMWZuctKxriKis7s8PPw17RtY3iUB7JPFqrb8JaRt",
  "key7": "4dFpfPgfJZSKYZ3bRtzwvPnxGs7Beohpf8TrexEYyeYEiTNcDSnNVsts7fPZHCVpPCWvw96bKW8a6y1W42ZYfwe4",
  "key8": "4d2NntdvakuCithprCnBnCLUQeXWpZfspxwuWBpD13SAp18HqwUqDe2MRwrSZmm1jVa3o9NEgLoccDSGqGC67n4M",
  "key9": "5dvaBWoKoxpGxdA5cvFbooHm6THqkZk5uhriT6Z4xr1eWAcTNMnLjZr7GcnE3gaKNYAxGKK5KGJmfRkzSGeeffgo",
  "key10": "4PGTWQX3kyadPZmErVKHZ51paQHmr1QGxphTevpiwp7bA8GeSuvercAwjp6dQr4qwcRH9xEnSpCmhQQxLpGyJsMJ",
  "key11": "45oXga1jV6KngVmGpfYCWqJxQyWRF3a4mov5GsG2QVWnrjvuLD92r3g7qJutLMLZf5nj9cWSXTWvDDqFqLPFxAvA",
  "key12": "uFnSU7bAtstm4iJSqNQrhqSvbvJLdLjsMuwSLJkzgVAvyZTMM5JMUXfmBPp9Q7M4cmiaLhNrX32XWJvV4XK6iPb",
  "key13": "3imb72AfpCqS6tzoPWAg7rz5J5fhJ2nrRc8kBXA6n4BgY3nT8MNMwvxbgUMGtzZww65DT2eoYUZWi7KyxDTd1Ukg",
  "key14": "SCaqiDgiuYFBgB1jkmp1ETWrvvFh6iLnUzMBPd962xPxNYVAd3mddwFUXfWEa5Hhaxn16qNmJBb9r4RihowcoJs",
  "key15": "37PrZzLyXkyeFMGy8EGYPc9825WfASHA755mbm7cRHpdSkYKHcsJncnbKE2wFDbG6TQN3uCeNfv9oXNKS7sMNqnP",
  "key16": "XQDYVptRLJ8QncPeKwg7v6Sy2sAtxpBe3FLgy25m4vQ73UeJYT1Rbx6GAkuBAjVNyL8Bg8kw6BbRHCJZMQ9AsFt",
  "key17": "5AK73CPKPa47nA3X2qxK9gskMCGvnuKWB8V8veXwyWXKmT6YtzyPpqPLKgDbGryMA3GMgEeuCXoyaNJGh5NMWALG",
  "key18": "LQXGacNh2TRHEtTJxfgRbQYHLSTXQc6fCTMsRSEFLdawZiZiwrx8hDLaEeYdxTeFLY6MEnSenm6TDhDFUp6RYf6",
  "key19": "37pmY3HxdcdYQPtymTZFMpMxPouckkWsDA8Dt5ft6US6rPH9JEnjVgtgA3HVnU7pN2pfZkg2K9XtY78eNui3sDYu",
  "key20": "2beNZoTE5MKRJmTNQbt8yUhGAnHuKXpereMn4cwg3F8QbFmyqbjQn67iVh1cvU2jqPrKBKqmipeCMmrC1arodmYU",
  "key21": "66MZVj6un8rAswoe24dz6EjUP2uYNMzA6Q7rtxdbbvzy38tZXprgm2uBj6xZB3wJWybj9s4FqvZ4yHban1A3fAMC",
  "key22": "3JfAWsPEXtMSheQQGzSj8Mcz7pdpCEpknCRfwFH5dnRAg1QKRFQcKHAgYRJwzaaBx6w3bFjZ9BeFyBX6fYnYmUSJ",
  "key23": "5CTgtxipuryYHxvu7HdDnR3zsbcYX2mSU8X3GemftiLvdLWDtgaL4kQwzNtNaXqYZMPb6N3ou9gaME6eEP2HZTvq",
  "key24": "3Y8kLN1RtKY1sTEvgbYYev2JcjDkdNtt8dQDcVjq2MKYk98DX9UNyEqooqGWtg9GTdMqqDE93zq1dXWmdhzogPk2"
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
