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
    "jwt7nutWrBZCHNdhQUscgSernvYqcVtF3C7ZcyL9AbERTPiFx2VbtCsEvZku2xPiizdEP4d1sMx6NwerfqkNHit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gg5uLXpm6yLvxvuEf5pAxKsN1BhCrVjeLFWgL8nvkmd8VMSnfSvmcPQzGCDjtNfsMEv3rMhQamrf1MQMHG8g7Sg",
  "key1": "614arBB5XEYX7ficNwzqpdXzWEjHrsYSx6RJpPrE4SuNmGcLHYg5dQrs1HnMJbJULqdbf8vQD5s2xcZ3xYJ9ybuZ",
  "key2": "2PWU4BNMpUNLtnEnJtBcZcKMBZ6JtGZkMVyMPwQg6mgcjp7WNeFqLx82k7PrJ94UPdFPDST8wSJRgUdAopMBv3W9",
  "key3": "F5rsskWKWwb8qpjbfgQieA4WFsLS6BeBjT5eEaygXfGCfZMVtaFqhoDhP3wfWCNGMPaQk7iH5a8NkQSgeqY4MYB",
  "key4": "2K2MghUpQq4PG2hwztp5Yhq1qe2JtoQMiaG9j9KS5iq22UiQ5k4F8932SwqUiZqmZ98zVhWq7SQV2XJGx3h22qPR",
  "key5": "62cVFgjgHrD8cfgQHRShXoau1jo6sR8NtnbSiwCiFMvvZ1rRXRDBmvZCMzNED9u8vZKH5bqChVb1mbD54LiLvV5d",
  "key6": "5DyFvUE4VK3NEAGo9hbaWPRaZDQa73FaDJeHeHPuc8WD2VX8heCLxBSNFcf5tkRfxux1rJCodEThTXA7xSEsSAAW",
  "key7": "3W7Hs2vbiCNQZAiNAKZd9nCfzVjjQ7Cy4JEcoV3tUcUV2X9bhmf4JQK82Bx6f1p74X4Dsh4trtydr8GRRAgkUUky",
  "key8": "2Jaigut6W93FBEB1BRWgCx2uXpiFimaJvbWtNZivFp3JkLJw4WRiUGdaSoX8e3k95PyhkPAVx8tcto5Nt2XiEWZw",
  "key9": "3eT47RhToCYRCytEhDmrBGWaGBbhhRLWQgZtBBpaEr8PiqMZbQTuTXbDhpdqj4mx26QDdKnwSsEWBRyoug7xpNqC",
  "key10": "4h1in88bA6KzXTBzR23oxBga3bPuidvtJ5bksUrez3cbNyoTUEQPrkLUo3H2G1rmr8j5rCXMH1FxyvhzQdGp9GwF",
  "key11": "4qgBbM9G2PbvXQqM4a8Fu2aLjfwNWgFB5KNTrSKVGvU1yrCPZ5HBasHU29ghXz9JXxVpQQTvN1sbH1xSAZMCUyz5",
  "key12": "3ed7LLCBmXjksspme3GA4zN8iPveeXDDp9prFSTwQTzfZcZb8n4wHE8Mhm9UZPtd8u5dZa93B6GSYWDfSL1iAE2S",
  "key13": "5AfXvCcQzV6aoCNrVzWUe2TAJDqSHshVky7tTC5Em2fJ21n1viLoxV7zGjRYnSiUWfmPaHP9QZ4wnBzyp1WdgpUu",
  "key14": "5uNQixyQdcAepeKs1bz55TaLn5j8FgxZNSdegRSckWtQ2sv3pZVv9ZWXMbNGbduXm3NJ5uC8tAsE4uqp9qWnkAU1",
  "key15": "3123vgSHzqJbPPb7sXQVqTAqPoh3sr5QudgQssKAXKAUE5KSz1daHDyRNB97kZ5jBSeXFaRDtZPUpJaQ8583ctYA",
  "key16": "4FCVdt2XmBYa4zYEVVBgVEPEGiqZG1PZsZcKkGheqHJNESDEpU845xhYJgQ3T91pJWRnuwTueMJfrAkGxzJgWJpW",
  "key17": "4zTqK7G8YF8VQFEup1URTTiLzguLEj1YvszQ3uevNhrs28psFA4xejYK9m9TcJfbYbvsGB9uhKqpYBuGnZoEcn9F",
  "key18": "5CGYU1pVoc8DcT5GdQYh19BLPdFni1fun43QSQRHAy5NJEBz4d3Kv8ofWcK2z2dc44LrHwXDhrpaEaC7thDiE9st",
  "key19": "4dPb25XZL6TBncNeP5u7TMaHCi9QH4RoJqpyQz8u7jPysXGCzeDDfhtCcDdeZQmqpQaBYsfhKsRE8c3za556tTfQ",
  "key20": "5rt6ywGdLKJpsMdYYDvjQhDfzneNP78TsALpXmDcDFS7yCP2Km41JVp2FMquPLSifyC9MLQQoNveFPWPg5gqGuuC",
  "key21": "3PPcJyEbgPzzJvJnKbW4T9rwoymZQ1LkRmK56HCo8DKWEQToHXNTNLFv1zSxf1YVC8Qti4TknAoYp2tmVrMLQTCe",
  "key22": "wutjnSmGx5bWAB6GpfAXou539YVdMQwNPzmZzPtpe576B1W6mEQ2JxwJkLt5zhMNi2dk1yrAXWr5HnnMFJ6Y1yy",
  "key23": "3n4ZGN1GtimwKDo3A9nY12CyRcaAJCtf1cxKnhvTYWRy6iQhdkBoubEQy64APWCrXajRgYcybNRK4TpKaFqbNxbB",
  "key24": "2QqrfHECKetsSwzchLwiCKy6xRCLfnmM1JYQB9QHSJMehKuGNH287XPpmYoRLr5cDLNGpuym1kGynomtNFB3UK2M",
  "key25": "2J2VB3oGdib1fU9AkA53DCwZTvLhJhvHHVwLxC9iEJFvnQcPyGQZQRj8b7BcfEBYVJEagg5TLPChLMNiq2bmc7Ms",
  "key26": "yegzazqjTitFvA9LLx36WmvqaPiGogGMeMecWGtdFm7t6TK8AoeM4QepQkXzakuzmMWLWFwtK2XSFACWKgH9qkt",
  "key27": "4DexKiA8BPP8QYNiVCW2QwEbwWn1xBwj7ophGjFserzRF6TyoYxj51NJ7CUQ48cCtTtcqLfxuH1jsrRjHu6JGtTD",
  "key28": "63CHU7V42Fiqmz9BKYTun9yUxZpQFEZsoCyWZq4pL2d5s6Aq7bXLzY6EFkWcXuLjraLZErKmaLrEsw6QKGY57mLz",
  "key29": "4NzcAu93jKYFb4y6YBLb2XY9KNzgfGv4fjTsYWRcb9Kmj15nY3a6YJ18mWPgjR75dk7knVXEY9cHsUF5QhBpi2c",
  "key30": "5WZvugNQQtbYjm64kbSL9LTBUvJH8Cw8cNXAvpiupwbs2vuHa4hyFPZStHhNzSBshm2JJNXtqamLvT2bqFLjsxR9"
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
