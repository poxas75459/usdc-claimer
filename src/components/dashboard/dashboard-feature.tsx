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
    "3pvn2WbHfb6uUi8mryTMkHejFm44GBWFgbnG67Ntob3xuSAse1DX8vkKtwWve5qemcBtYfVXtd6VaMZCRsWRKKxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S7u9ogQRKwMK9axoWWi5uB7YoJaSyfseQxFSUaESLf6Rjr1pLs2jMxEweHDdsfxaD8i5bUkBb2sHtsKGpkZ3xWL",
  "key1": "4XSGExNwGV9CpuBxLu5My2g5t7q9LEPPfQ9FVTeGxUYsuuntLk3FFPeNTSCvZLvMtyPoZRaQWtKx1GoRuXKDscpy",
  "key2": "49xBFLLArurpE9kTcfhFfsa7aMJi7B5KApzVj3QkrX9tRLZZaMTCZs5m7rm7i4NLEzs2uME6XC7Wy5gbdLcMu743",
  "key3": "2SaZnAKiqMBMAM4Kdt5b6VaPSdUFtozYVEiKghQrtDeVxVGohJs3TSTfJ3b9seHAuMSmp6iBzcqk8no2PzeHvf5Y",
  "key4": "2oyreXVzHfiLa6QKvCw6mpRPV2vQ378vM5hdkNjnTM6qMUhnvzsVXCfZJYARWbnUVQn3DFQbGVT86GGML9vNGYoV",
  "key5": "41EkrsEXWATM6xqjGgtCZeqjZMtxzXXPFEawgZmgJRwmePFtcstmtydbxqcxcjnTK5zSEFWJZyoaMRKYxGVtLeC1",
  "key6": "4xMdu7LfR61kwVEwpRTS9Gak8KpZe8zSV9MzeQQWztVMFqdM3JdMg9r5aVL21RtnaPbM4snsLChCVXM4Mcs9TXw5",
  "key7": "545mnMSS42h6H9YoqripewKDNYTwPSv1wCA2sgt9mwSL4KFEpCfEgjKWY6KFjsHr62MxBDshTEPcsAk5YccDzWK4",
  "key8": "2bD9qCSnd5im5tXX8Pdds3i3M2LWqdbqM5GR98H94K238nrggXuHAW82CqwfSwpgBnnAD2HbeA3QBbrjTVmR97MV",
  "key9": "3Xw8ht51jLjqMuTCAyDcH42P7ZeDt9LJzFHoJWe3cpHGKHCJf59vNYpfiTNeVEBY7TtCbMGzDvuszbiT3wCtCW5D",
  "key10": "5fLj8JrKwVAgwNFuMQRi5RgbPohn6TPWwjxM2g1iqrvqZo7ERrQVGxe91sVqzUGanjweKwwpW7mc2G1ZdNbfSB9y",
  "key11": "3rkxDynjuSxrdKUdB9tYPNQmFsEQAqiHSSwb7wz5FC4ipqgnkS4bkrxA7V6rLJybW6PuaKRPbG47KEcNn68ohobg",
  "key12": "2f1gqDapKtuWrnNoddoSk9k9zAMBfjgREWuRiQ6CSUx8RSg8uzx5icWLSxM5aCqjeswKQneqtNFkR8CUxpuj2sbs",
  "key13": "2SwCLjesX4UWxiEgktmW8a1MdN9ez8MG1JKm8T9tStSh1onWnmujt6CfLN1x8foUqf8cMzopbSwE4ondENaqVs4q",
  "key14": "4Q5ypL6YuBJU6qH9ownHkKkXPVwXVypHY2jJazjwKcjL1Cb3nW9HUaxW7RFrNhFkQajjMtb9tyN18BVu53o4bE2z",
  "key15": "k2a22aUPwpg9DoZ6ZN4dzm8n3dWEhwzwTtGsMKdL5EFxMoyVaCrDUc41SMJHSHSpzwjdP3DabtXgXKVC27RFcAU",
  "key16": "4X3SXCwSaJKNFNCJNYVk57BFmwh5pQjM4R8Gewu8A58sDXgGKXARbi9UiENkGza1eSHgvhgALmfi3xdADGaRLzG7",
  "key17": "4Ddn1nKkXTZDAyo1xehDtwDt3cRZoJaNGNLu9J5sRH6779MhhMaYhiPXkMVhGMrRdCMjtK8vjZQ8mgxy1mRFeCer",
  "key18": "4C5aYWF8gCN89T1ncFmX3PNe7c1o63hfbzKmuHaqe21n5qwBHz5NH5Mq4BDoJxJ7roUEXQpe5QB2WDW6DorsDqPE",
  "key19": "4jEXbJ4QK85DG7sn1R2btkUK9z7YX2zY6kpamnnkCJ21rKXY5MefCo7GThf6KqGvqb3jWPDLzVyvYGHZss8sfkkU",
  "key20": "3AGysUrMP7BqvZVye5oB5WwEEgMeW7XjHuCo44tn3RBzyrGbfaCiq8J9yGkftUzo9kHth8Ru1uQaJiWpWwnZLDt5",
  "key21": "3dbdcaGTad8absuzBva95rE42Gxz6Kx3uKnHk4hiwggheWnQXZK6D9V42AfDYJzgreev5n6M97FAvEWcqJgK1anX",
  "key22": "4Gc8WLWCGUmoykBVRjukUzwSwY3SBQAzn5dwbnpskcxk3gMU1HVX11AYLU3CN4YqmcKpoi8JsNJzVbvESStm3bJf",
  "key23": "5od8r9X1wZQV7hcczeETpBKF1x5sc7jrSL8M5kHfCppmKLVv7PZzcbjRkh9kmB796ngGP5LKHZrRJGDJnAaDiEKp",
  "key24": "3JU8iDdc24f1wDaHipy6emUYZatNyXS8PHc42TPpY6Ke4F9jwgqhUjSXLDQo4MuYdBd3Y4YAA8Fvmt87GxPNbx9A",
  "key25": "63tXefXH24gQQtXwoGA6Q9Fa3v7UBhXBfd1mwNwrXqi2K1RCJiyADUvL4zpRAuKjPQX3V1Nf4p2oBvPebPcLvUMi",
  "key26": "2kLjZwy64sD5LYtf64BZUVe1uv6tDtbFeAZRDaG9563rTxfz8AW2GLRRE9khDJxQVG7Td4Dx5sZm2hkJ2FD9kBmu"
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
