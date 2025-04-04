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
    "37M9dRat3gD3yxiEYUBmnmWKvXXQdaa1ZrD6K1KiqBjKoPiHgWdoFPiUtbuJ7AyFRaTVvwyFCGkAzsGXJPTAeNyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sC2FjC56MbKQFYBVwhoZmFpj4HJGEsDo6CBtCSjUVQYiU6P2hT6oLhDfsaLeY7mAo54BnGLQ5pwjJwPJM6n5gnG",
  "key1": "3hzkwRYkoSuAm4h4LBuaEUKjXfrXDUry8XBUQFPXGyiLbCdqUnHYEPTgoEA6a6mA9cNHgfBa1CGa3HLTG6xCA6B1",
  "key2": "3FBbfaL445zsBpsztfjVP9z28StirGAbpuYk4Gu6attd8agoEvcj7mrUV3AHiBdAQD8KK1N6GQr5kn3x5oDVQSrM",
  "key3": "53bxB1jNS2dcmtbiK7bWr2BwwWngTFSZ5w2zy4S74b5KQCdabkhLMTVUujckCzyvXy8YnBKmtQgNrttepWjpWNom",
  "key4": "5PfbjzPKKezodomz9rnauXaj4Q7oT5mPBnN3wVGMW9CCWZBCGx47SCUGwDwJ5byaZ8sJspN5TmLMbY8yk8vg35dC",
  "key5": "5HijruN9KQrm7waJmrfvCcM7X9uJJCHMenH35N9dZzaNiD15T2eBgKDRHipGh69hG1wiXe15zagRGaL9PS9DtCoc",
  "key6": "3nHqrs8HdqnmxC4MfAXBh94bzkxVRKNpH7fPkY6RKDDbhwwhgEGPAnbfNDEozSxBFEWAqD3UiR56Gnuv3EcDNAtb",
  "key7": "5LjM6xRQKtRo5DZokAKjGHzcKjDkQa3ZX1dyVjWUVmsLhx1g2SaLiKo9E7ScfqLxY2ahaBr54yLy8vvq8QSJ4uXz",
  "key8": "3wU8HgPNsWWPsaByHgxTScSwhpGvkmvoDh76rWMH6Xcu5j3jVhVD6N8WxTmicMZ6R87fF6kopXqhpAT89tT8QnHu",
  "key9": "4nehsWSFCQ77AEFREW7gBHrkANQ8s6QF6fYr6JPfZpNDZ332Utx2Cfn5tXqm4uHqC3cKDUdsiFnaRfhRFgQow3HN",
  "key10": "VLgtnMDWm2SE5HNfLnS5d6iRRMiFyjCzKFZxHpei7hz9HMasrS6M8fm2DeR8H6YNMU51zmyjBsm21RwCAPtjCFM",
  "key11": "4UJ8yiYXkNHAy9HWpQGTtDXMiGp5XU3ojdSGTt5LBXQ8SC9AztGBe1NjRGXF9GZTKsWMP9qDae16PrpZ2E6ZMxGq",
  "key12": "XHmjjyJ6KVHzXExVFhXpNdRo63BYHygfUHpM7G9Kc7WQoJDofTfHMPsJB7xFmFrvQGKwfNXBc9etrG49avTcJsP",
  "key13": "571rg5XYwLfxpW3ozdsJJjacESdoiAKWUFWFCxMcVLZLBiGBnNy4wKWwcGtPH57Kaf3eDMsN3qN1GzN87EACdnJ9",
  "key14": "i8SLpyvzDHSgktpsSmHFUsPJRWRFrdeN3fTfQzSXErLbDBKwRuakRKZyPUuzbmV2ho7MgkGVovR669BZqsPye4Z",
  "key15": "5SbuwKKhgPHpUzFtShn6FCe8WPCeH1reXCG6ewBD6H8h1AKPzzaQj6VAvzE6J82b1h6gzBnNnZXJjA6L4sixfXYg",
  "key16": "hNR6CJ3Wa7NjE6UqEK2f3b5Bev3vxkRAUhJiYjZdtvFMXKjSbaASxAwjd2HLucvxuxZUMMRgBuyvSTAbeu7SKss",
  "key17": "5tHFzeMUZpZyrgD4njLWiojrtsTYwUZFiKmXxD5WdF7E9wemf8a6Da9jkTsQrzJSHzBSkxqAp5P2bbnywjwnbbMt",
  "key18": "24LcWrzuBVa3ZqLo7LYwbYwAodN7MrNpp9bzVsxqR3ZUFyi82vm5xaCmjGeEuC1fyoKVQJb9bHUSkm2prMrEZ6BH",
  "key19": "3CtFmT32HRC13yhtSrrhvaNtbAT584aRkksi2xfVL65V89sJ1RXamjZ6CtePDfbSjJrTDNEubaayxWN242BYk4AZ",
  "key20": "3GqbyMMLJdTZWxXqGeTj6AZBvKrVxCLbCqDSt7iB3W11agS7VNuQjqxZL3gWfmqBkSzJ8ziAU2eRuM1xVouWL83h",
  "key21": "2bpvvpBeW5m2zKt6Z8BZ2eNHy3CRs7A8PozDaFd7ZHFeEoowrDpioiJoRMaAxDqB41prwNvQUDXwAoUScSeJSBte",
  "key22": "5DAhD2LHQr1V8z5PYeFd1aHQtnfUbabin6R6NwqHquP98wsU2t7wq44Q5TaPgPp8vG9mZNcbM5RJJMDGTuMRRE4M",
  "key23": "27Fy4xqjHaE8CFRmUZjNQGFmtLPZ6bMkQrSsAXYLN5TqapdvGUdkRwtiowFiwaPYAPyF5HbjEYEJ8PBXsdkyDidB",
  "key24": "5qyi2Vq51wZ4sedMuNJZUx82wCLtFD85hiMxp9m9rE1nMMWU4coo1w2mom5UVLzAeUQW43DFhMcZXA8dhVJTEWLx",
  "key25": "3pSeyGzNw1RE6SZNjvurADSZ8gjMp4wvpvodyJox12iLyT552QLSSL7gYEEd3X5J1UNM71uX1Ay8WuDpzejf1W33",
  "key26": "3hnFvzwGobStFZ4ELJPYCwG1vjZeLXZCdHgrX2H3mfXfUKHrFsummN11aynmTzkve6po9tJsgsvB3LKfv2UxqGHD",
  "key27": "4cgERXWbXPPSNtdV5NCYLpV8bsXnXbKviavbN9uYucZXiUj7z3Fu1pDDCjMgarDz1xggy51fMw8P7yeHiHSX4PGi",
  "key28": "3fgeVuBv7LDDCpUMLj64cBW6W63tYDxumi3egBLay7G3LqrVrYLLzVMUG8VVXbGbhodSwixAgCAMPppGp7F2YbH7",
  "key29": "5iTKB6TQZ2WAeWYRax9zt9xjBdEoCtk7fZxtdMQQELgbijyjKubRqwst1naZwY4RPYvXxQDJ5nCx8pa65REwBCTC"
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
