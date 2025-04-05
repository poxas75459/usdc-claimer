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
    "55Kd4diGtHNWmuBkghbQUEieVtz1RAPp6KLo7mZJSE6o1YvyM2NW3npBhuntPZjAGtu4J9RbKfn5JowkPdtEMmrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55TJJq1UexFr2cnqWomaswgfv2vZ5i4YYmQweNSce89Ft8ui8qTBrA1mgKALRMwqicpvjuFDHkPY6KzdoE23Kf8n",
  "key1": "453Na8YooqEy8uxX8cdcxUDq7DLzgWi48v6GxUBu3EBggPQL8e2V5ma17msw5LKDBas1HAxWTqPtNWikUC9xamL2",
  "key2": "2aGwiPxZphru1enHxU894PxaY8v39LqSc8F4P8wV3bkRexupqA7DYL9BpjTj3cNjL3NkFDMbLiEdGAcsKS3LBedh",
  "key3": "4169BQ3k6qtZ85wfALe94AMKGPDy8XcTnaizJz9SCVK8knZzsB3SkFZvGMfbUwUJ3q6Q9CNvJkxhktYM9xe5HmTp",
  "key4": "49SUYYn3MKNHnrbRQ7t8qKc955zyQLCqg8uX5Rrh8a1KAVzstKFGJCn1PqexxG6N3pT3DzXEuFdF8eYeARPv6BZZ",
  "key5": "5nqSsQ1jPiPKrkoCJmuvkT3xQdhtrmXkd72wBUK2roqQ4v5Wnotj4evsnTfzMoxxPFqtRdynVtnZgqkhiDZfoU1i",
  "key6": "5ybMJkcRGHnmyJaQ63FXS2hCPe2dja9wZhEQA5rLuQ85ZfJXFz57hLqQ15AVdhAG76reA6EYeT45woRemJfzNRfb",
  "key7": "3gu9zNgMm8sfjTtboZz3ks5n9DBhGx7UivjJKzjoeDUSWusCfytU4yQjX8NzmVh1RquF8MzrcCUNabWZaX37Wmuj",
  "key8": "ZogNt7RJm4v94FND1LahycS7W9ryP4SwTkHwVX13AQgjrFy7LdkG1QZpxwHqYDfWYsosM52gPYsC5TbkrP6Vvou",
  "key9": "3pqrLzSkuJAN6xZ98abHAymFb7uZMDMB7dEqprsovCHjJikndefsvkxMHhfgAa3KvSyUT8VB7GpF6v1BaQaZJkAw",
  "key10": "3TdpAsNEjX6v4tJWEfpuj7AMrv1xTvChcZ2BHnB6Q4GZZWKuZ5KBbQQnYggkqcCEfFzmMB2SSNf6huEiEY2j7Nrc",
  "key11": "EmKDT3xoEhTy6nH7zY6jHfabaLXT8LrCCNZzSdmAzUGfevzhx8EN4SiFr7MvStJH3D3UVidFCgXHcxJqAYBqSDC",
  "key12": "3FEhJCMUbsq2UpyxnGbgLmzVk3RmGx55sYZSQNLvk8ffFRRQhnSuaXomrim3GcUQfBvpGBMehp3VWZ2qFpsNNYQL",
  "key13": "4DdX6pN2stN6Cz9xeYrwQAjkRuASrcsN8GoBtioADuZFqbaavTGveJDbrri3DjTaro89BipEFFaqdvqZQSGxNbRp",
  "key14": "5X7W8KPKioVzaVm4mwzETX1UXuP3pyjX2wFm54Bty9SkEsrw3TZ1QaftiWXf4C9pmieU3QqbwLCVxyap4FNLoCni",
  "key15": "VBF7P9nyFT6DDLY4Z5VxnxK8BjA4uLXHS4BbLLur7a39FSMziHVz6P2uoA2YBXTZsEw1mFKKh3RJ1DUGisPnSTK",
  "key16": "5bvhF8YwXrUPaBn5zDjUFg5Cr4JVuWserkS1HiRyaZrv8gUqNRXukaRL82XqCkyYt8ZFFzNyNSQmjiYSdLMRb1GV",
  "key17": "3iBGXbLfSHRZJcgHrenN2vuUmfD8MBVvEp5o4VEqVKr8yrmGq7io4Z1UTPrTn9Ahr2EJThPqgYyv5fErcGe7GPmw",
  "key18": "4eXbTvTS9RMiWRS6wy9AonKMxhJ5kGMjJY8E8jsbKW6nsfCewLwisFkniPtwysV4MiXztzmLXWo1Vum8pcitXz3B",
  "key19": "v7aQpfZWa6xquMecMKajH9KbeBeptqenbU2azGMny1fDTZVUznnfX54icqfmUc4WRZ2NQgyD88aFUrvvjYJd9TJ",
  "key20": "5UGVif5yTiufiPVUN2BDe8R39724SjYXvTqBkKdoxV2uC2rRo79PyJDoMzyvSbsnQc5zYsqLDH3ogA5kJ1uPWPBw",
  "key21": "5UndHPqHHCJPvGDm2sJDmMuPv8xCAHRZhUv7y6f7qtxJ8dR93fJ3HPz64A5wqBQe4Fe4Mr7mneyMYK4XxGbTRcJR",
  "key22": "3YcRzcHBiR6Vikthd89rVF8KcKMH1PayeznycLT3tYfiMNBBCnMBMwypVEp4QfaT2vF9U6jJ9iF17oW4gxvBj9VS",
  "key23": "4b885cAKTZ1XkyYyKmwAcTg7UQrZ58PvTrVpjn3eEWRYedZyQR6DzfwxSEcFrSPjdeESZEcm7DEDVzYf4ypsuwjp",
  "key24": "3BBCxQrooDyjq2tFQxZhVVrmKoFxcEPartQDj4n6yXd6UtZXzyy7K8XqWmnfjHnGoy7zMdvDfcMC8kgNJwVvsw8Y",
  "key25": "59RiS5YHkt9Y5xj2qMjzA36SCnuKeUyc4vhEwbMGNzYF8mB3YEmtZARCw8LE8WtjEX8QMFT28rEmPFKZ92RxK837",
  "key26": "4hJU9egyUzr6yWrKbBNegP9Sff8wEH1t31QKXDavvDt1wJbdm33H2qEdx8pRAH6NiZq9btJn6fy8Dub9jhWTfikW"
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
