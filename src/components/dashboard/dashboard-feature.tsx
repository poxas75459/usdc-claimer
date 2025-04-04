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
    "5PcXSyXY83JS2PxCDqF1vK9JVvdnjsrP6GbgV9EGTLvJEPE5m5GNdheC2i3N2vUJiBnLMdbmiimQb6EE9LEtj9Yb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SDjk8u9XWZHd7h3a86Sd7uL2mFURak8JSNz9HymFMU4cd1qmTpiLKpg38pwYEb5G7xtxQMWJZBp9shpnfMKxRUJ",
  "key1": "2UeAAed8YbLsp3KamsXBq5pctk3XvVRekyXbSiXiVgWJsDvrByzNqk3eMvKeYkRcXXVtrGfhjwtLCWHMKpzs43ii",
  "key2": "t285rcVzHJ1acyGhh8exyLT7n9oaVTXuZzpVgVhysJ4rHYXZvCodLxYFRYmi5NtsgGPgjbcMGsSdnDdC1MKsDYQ",
  "key3": "4FXa9MxGPGUge6YvvTD7sznrDjrPTJUEb2ACdKefLMjbkxwKquqWMsqBtq3CpMZHMAKXTC8dSywGPqLgpDPCddpH",
  "key4": "55cWiwtLa5T7KjQ62ahHmY1rVUYyZNchpGqG13z54g5iPqwf7evtaKE6fgVfmVazUB4j84uGAiiy4f94eZLvVa2C",
  "key5": "3ZnkqcdvanicTead4TtnuqW8AzMxqdgPmv9sGJPsitCuezPTn3PcpKoL8R8iNDzuYDuy356LsJFuMfqEvGeB1wgV",
  "key6": "3PRNGmm56fA3hEUHQAArWXLYwN1YVa5FaQJQ3iuyFjLU6qSzhBsMmiHMKfDkJPoaZfsBjkpvHCns3K5kFZc8kbFg",
  "key7": "bNdfBnvnrWzuFE1oATexQM7qWZMkuuJxp7sE84FCry8hT42DPGvXi32yUKV1Amu9a1pfW4NUQLjZk2iySgu3w56",
  "key8": "4eQSjWnEZQP7N5mTXGuUwGkd6TJh8PeyC2Rt2eWCzxyM2Y8N2VtXFwWMaCAs9mWjGh9Ytx5bYM3tT3YoZoRthRFZ",
  "key9": "5QcTdTPgtYqYcoA6ZVxWWCJRCFjT1jQ65wcAWiVU6pennM1Wf7or6Le4SgC84hExVPMNffABqLoL4hu6oa3qnUfW",
  "key10": "3qFMk7RySPGDre5bY6pCMhLN649JGp9s1QpKfX1XGzA8iSLeLTKNHVxZGBwWanN1BFzMrgi9XgEZsMVugfx2V5EJ",
  "key11": "2EsZ4tJRhSpzNipkYNZXPBUUMHL4igkm2CarFd9bjcvv5EFSCyi6LDLgbm36Mo9rG9U3shq53fYNX6MBmAJVGdFK",
  "key12": "3nCkxGmzff9EXeTRLNkdL6xizUfYykHdR6S4tFNvg7DExuzoeUYTkQyNgQMo2d9rvXHrqaGELmRy788XDF9UBsvk",
  "key13": "2J3RYiGefsGp1ufQGEMuEZPK7hwHC5tgUPsGhBy7dFQfuRccn66bTkbScmnsLjvUyudTYVY3vv2Amg8AUwpszqLN",
  "key14": "5W4rsTgAVLWs9Z8EwmAWhSCXX4KYe2R5BZCfLfWZpFQokN3uvXpqRG9T4XQBZtSTH9nEqgS9D4CyP19PXFgxRQRc",
  "key15": "4U29MrC1ab1PQhicQEUdkUofEb55JJZU7xjhiC5xbmtb2pMhR43VUF6NryXR7ph9s67ST5qnFSX4jHfPBvmUbPxR",
  "key16": "aKSA7RULs51LBp4ngAqtvFc3szTBcYnB5b8cKb4QESz4fHG1H48gJJGAzU5k4UbQzcA6DqBkB8okWaA7MDFff22",
  "key17": "jDY26RYgk7w5tR311zEPgajrTJNLn3j1Q3ztJ1hQnpvCL3XVKVocMiEWHxNcWTirUJiG6PNNzcGuxAVjQ2EVYYX",
  "key18": "4EaazXbPCZeMn56ncz8F3ZJCWeB32RsH59we3oZ5TNZ3xS5trQaJKDm9zwzbNK1opto11q3539D61WeU51MzamHx",
  "key19": "5MewhVtRQRDQumcnsMcB2oTnMxtcw1YzmkdR8vReeD6nGbNMGZfC9uJ4eNeh2ez2hgiFXwCEgE9kV9r8eBTCqRMA",
  "key20": "3uaYKXik5PDvjm5KBtLcCJUjrn8e7AD2VYrAN8TG442GQZuxGhCBEHP5gcLqzxkkpzZSToCsijgWa5P1Y48xEwje",
  "key21": "3ZVdK2fNj31hgRZ3W4AnrCNYpJMgf6vniPt7QgCZUZB9sZhyEQse5L13pZA8ZhDqqnHieLu4n7PWcnZ6M5RWiHu4",
  "key22": "3MvdaNke6ngStNwoFFGE23zQaLYuRuKZmzqZhTywSyM6UnbQJ94XCw1aKCFf2GcB8sdgHXKFtE6koYGyJDhScEVN",
  "key23": "5GudymrdMCtLwGoPBeYN9mEX9dmPtnt9jqMZaZ4p7HXRUcrvyBqpBqGx7pPYeWdpq8DsC3ZEJHVBMX8k2qgtS4fZ",
  "key24": "5RSxYpKKzptsy4PPnwZGFyxUXixetMyhYCy1RRCTjT8So4WQJeEhPuUq7kBcdFFYiuNYeEjp1HDWQ6d6W93Gt97U",
  "key25": "34oTw3equWSgXwYgZ91DWahsewQYzutTbqcBX9WCZBTbKBh3mLmGQHCdzLSuZxUezNsJRnzu964BWuxj5rr4erxu",
  "key26": "5FYM6B7wi7BiueyLBqWrivB2BtFQbfCkjqbSn2GmQmvGwrbZaHrBcmgXHYw5WsgVfrihiYHNCT42kFrLAmmSHFUh",
  "key27": "2fE3G8AqhpNdNTfq372oi2zFueUNiFwKY9VQMejRfZtakax546UZFLeXER35TjV88Cd98rEwLBCQhVhfmc2czHzm",
  "key28": "FBBaEPoTeYq9apij68e7BupZkeH5LiePMvdfnbAD7bxSYKj74JvVsqpYJgh47GQ74zFNK14LAi75zsBFtY8tD8Z"
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
