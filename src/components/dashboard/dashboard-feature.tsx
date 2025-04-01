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
    "2RJyjqF8MXiYDT86E8TXjmzp6ihUc8V5RTdYJtH4qDHwoJ3Jeyy3tk4iFb29ReSwBSedUQL5imA5w7dvvUiPR6dk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mvr68ctsqP5DVkS9Uzm2jBtsJaKNSagYEzXoBdazEdS9pFWEAtrHWo7QzmM3xrLTT7deUJH43VE33GzitkmSmid",
  "key1": "3iCFY28TXZLtS7RJBoB7ZwWQg1fL7v8yiqehKdz95KAP1hxg92Hm8tZDfHdDJFEjb9t1SZGtN1LoJANfjY7eocHB",
  "key2": "2zksAMX54NzsEEvFJWbpSLeSP8dLTbzV7oiYFfhPDAdz8SgCLKPmreHAQkAMrryiggkX9HtikoaHf7z7JbWshCRc",
  "key3": "44yLrPo4mUkHAret42yj3bFfYQCqYNFAURsGa7dVwzF1eEujFrBDJZ8a6tQN4KCZFXdctXF6tdcRCwy9XuyXoFGc",
  "key4": "5Wj8gv3VUjDZ6t4KpiD6oocpXrUWJoo4upyWvB8sBYcxtHYcbfrFPHcXFHHJ4XCja6w91Ged8a89wCbbrgYRYiEf",
  "key5": "3nEAfhHpNUzbxb6o4CNL8iBMghETZhitny59T6c67SDaWF7ruBDUHx91oaBjNRTzhELhwutTEzR38kkSRz4DrDhp",
  "key6": "2zgT2s33dSLN1ymAhLLc42jw58wq5HdbpGM8476ziffFUEBiq1ryQfC79mBabNVpbASAJ6wkL4X6VK1xtnnLb2Ut",
  "key7": "5tsEA7hjpNsN6zThTVY3upRuzM1LgY4c3d2FZmkNisdSAKYd4oxPNctvXhsGe7EeRQrGwvSf3yd6DC5nSRpoJCfb",
  "key8": "67mD84p2bNXYe9ZNF2pAY4nAsDpYJNoWYSDWixb6p9nF8nA3Vp6egGR1Lj6rT7M3E8bcgqfvuKx3uHmBt56VJcu4",
  "key9": "4MJQ28k3YfdQbpitkaz6QDaM3tXYDdN3pBKVoDuMxkSokFgFaqiY5nwLKM7t2UN2nyfJLTLuoBTyWh3VxbU3nVnu",
  "key10": "6tDjzGj4rcNWoJBPnW1Tofc6MLKHtpUBMubBEycLLbmoij1jrwm7foiTySAi4cT9iU79fC25wJmpJDg5v13eTyY",
  "key11": "28AVY6BQV5UDgrmA77UEkYRfs34fqWGUAodkJ45M7jtLj6ZLS7DFhLnDXnFxjZg3XkSSFTJysMWz1vG2gs2MgiWo",
  "key12": "5AsYuovHrQzYpLLNNwqomgcbMc2QcAsHpy11LKcErG71h9Bi68fk9oiRm5L91Zwd1SZqVpb67WS5Jp4ye42dTMmo",
  "key13": "3Rob448CsBRaNJ7j8eQHMFELJXDs4fafTBnvqi9rJTNXVxJg8wnQbF7kfkwQAGsNSsfuAy7juBsfbujbqdu9ZtxP",
  "key14": "3hPR3MyqPsPRyFveYMEhZ8T2XwmxsCmAjA7zGjaVxgxTUrdXvNJW6DJkq2jNRc76B1AmZ91TAUWPSzTAPQAdEdWn",
  "key15": "26cWC3vwWMnxZ2LmjQKr8jKmKN5Ey8uxkhNuZ6ATrv7oGysjKCCy6qi5XvFBhzsw6HrjxkGiWr69BZHYbBfQ3Wo7",
  "key16": "5VyUgfwENpWxRfUzpcdtWcV6w3FjZJqPaB3qzmyMFMYRuGpftcro24LgicvnJ1bWi6pMWDbNXuwe17uh6pJwJeLv",
  "key17": "2aEpg6pe36sWLB3YPCsBSaKe5fie3azAFDezn3GMSUj1Che5LboDrdv33AimeJ6fuNresnvtas5VNewigPrHwdDM",
  "key18": "2feEuQfLpq7UJ2Lg7NZjeYvP69xFroAbkFidRcw4FQJptdUSE1mnSNesLKcQJdheEAUJB2Tf3vZPsNqT3pXqfR9b",
  "key19": "2kimx8xSNa8CKzYM2hMH1B5JwG2xgionYFfiMxPLPqMBVhDQgU6DAZiq3YKhV4k6BJR6buvf4qdtuk4ioGrYAD6m",
  "key20": "54CVDvVEs1axyfjMmf8nW5zGQd7g8sZvu3Axqx3M7Go3QFPoYQYpmp1NVTcu1K5zgGzuurEfpGFwjPqGb54ygUmD",
  "key21": "5FYH5VnaZQ3BCCqK4pHPhtPcGK54qtHyp5oDrL9UaDxfaui3YbqHniLEQfoRHpHnZnHjvENq2MWHhfw4B7ES88JX",
  "key22": "2pmCNeaXdhQq2ujeBMJNzTMaXatsp4XHUweyyX1PbZo9PL94vhi6x7dBJUmDt845uFvD4yQycpou7UZPAMnhAt9K",
  "key23": "4nAEqecYzx2xk5mQLygvZCJyL9HHEqFFBgscQFXuyz8N2GgDWaaZJ8Z5YGGiTkoiJYQ9yZAofz26PCdgui8P6HDQ",
  "key24": "33eAuM4LPbpo3eNiWMr3Y2UR28BL3tK9wrUuFtgMN3eNtoyLxgJh7CQy6oPRXn3P6pBYui1JpQmCusRu56p8QQQ2",
  "key25": "3nia3VovoTdjGT6D1XLXyKX1nngV2dB8Ks1MCqJhWDg7EJ3YtJ562MwgVwqJsBkDEU5Y9GHpjmQfvscLvsHT3R4d",
  "key26": "55Sh16FssTZducuVDCnPzKdxZadJNUGzEsrsLmWAMGQ6rSbYnUSzM88TwVVVEBkosd8UTnb7dU5gk66Q2HFNE12W",
  "key27": "3BKAhKnaQG19FQGPWv3o6FowejYDa4Hwzxu2FM5cQUn44u2BN3NhsW1MMxwoayiYMj1vaEjwWskDADMsinRrESDj",
  "key28": "UU8xBEiG2EVXJ4ZwbNfw6Mx9BS19PBwXCMP2eeRS9BJKsK3qqgXAscD2kUZ5rSRyhnRHANzMy66vC5kvuriXoKe",
  "key29": "sx5QJmna46XJqLqVwZh9TzVhQi7vM9s1WqdiEvM4TWG8bBALNX94bWAYt9tQvRZDFsGtd9uKp6tLeHet19qKXyq",
  "key30": "DKN46aJTAP4of8KVivrWShKdP6zDbiUXeLkyDhC9oz8XPKw2tNYogdKrywjtg9M4ShgxvAZfd9T4BfVpbH79R9q",
  "key31": "44ezTgvbtJWGTz1EuNV3exF3VuKzsfdGZAS7ZcxEiD4YanGS4zpMqU5eSfUPgppLjzNYRbaLCRHpxsMnvznyPJte",
  "key32": "5fV4SjNzNRQzLWhGKodT6FVExpUJw3ayDkyjoX3ZGu6fust8BQ2RAxTL4QM85WBoyG5MeDByoW1zVoKw7XnjiKcX",
  "key33": "3avv3zXRrrjtMYhK4Reyvv8jzVvUiwx47o8YBqfHZzEwH4vG23sK7r2WizaShMgfZxJ16u7DhPZ7f6VKuR32prnT",
  "key34": "56A4SdqSqbH1m2o9zG9jZ4y9vfqiaiPdgunZk5B1wypvpBdwNfboDXgL8rfqsrrHortSWFNJXXjRduFSN5J286im",
  "key35": "3C7HC6jC4sQWg2JdZEwjY2ieVwE5Zxx2jM8AwuuKpGewdmRWT3q9PgdqSoXkv51t7ammPh721z28c7M3eK5Grbya",
  "key36": "3zE68SuKwYWzAntd9qT2wd2Rf4BDtyuKh9ZqTAxha5g3GtCwxZ1NtbYadSJMujjPhGXBFWHHgNa1CAyfdjTZX8R5",
  "key37": "4gi771ZVSXj1qbbdmXMRNzMsGjA6bSjuAZfJpNzyg4E2Czmtr1Nf6WbVabFjU9Vy9JJC3tPEdkRW3D8GmvCNZYuP",
  "key38": "4iVana5KLqVo6gxFGp94KPRarLYtBJzMvrZJjLztpQ4GTiWapknCUjzsyNXXAThRMW223aSYzKZLHRkGVVJDC8gi",
  "key39": "4QBcbWX53Kw7Fuco3iRqWLoJNAGdNd8EKLz4d3xsadpAQA4DZnNSthVeqwSvZPsSwobf4Gw6nu1E4nEz2yDNFGgE",
  "key40": "d2uzaapT77EQuLrdUq9pUQQf5DeiavRSXM3j3TUuVtbB7WU5URKcgRxrc2m4wbFUxwHLyo4jMvkFSNVVeXJtzG3"
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
