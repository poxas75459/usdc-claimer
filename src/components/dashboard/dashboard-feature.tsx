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
    "97NCrYPGLpy9Q3QQDEhSupz4WzdmDZuRctDbwk3XiJLDPjTB3Nj13kZnsL2mx96A9t4deY86D5jfmTmxhxaW3SV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E2Nsct7oKypunykkXJ9RDC7X9HYftiCfiEQDBmwLbU4gDkbNfRBA6FMTJryq8Qi3xLQ46Qc2Yf4wms5hfub4nxs",
  "key1": "3qgNr2u1okQJNskC1JhqFLaKAaitqEQpPJ16RNxt9qtkX6Tj4tPJkMVD6gShu4jyWp2dVBJZ5H4TtSmPxKV5HfGc",
  "key2": "28P92hRnCtFeqNd3RHC8gwHBmBctjom96DCaGtBzdDCGRMdqBudKaNaFuMcnHo1YMkuVzGk2ytyMTzGz2B7DYYFw",
  "key3": "4S2uuEDjbuJrJGzbEzymNFs9zy1cPNMcBCqkMTd2wbMt61sxCytVw5LkQAsUjbx5cwiFNMG6wDNVqAH1TjLhx2Qq",
  "key4": "3Lmq823aLWW2Bkw3viktZrjx2HPy1Lqr9PL6d538UqnG1Di8BfsqqTQ4H7nKiPjjY8jNAhHPu2Mvt953VgQcFsDE",
  "key5": "2S5JUCdfmocbxg2BwP8tJjMAf5aUV8fpM9uhPVgxBvx4Ma2xjvga3vbpejMUxeWKB2iYiFU1TK1xjLmyNV5EZXzv",
  "key6": "53HJGoLBN5Y3HaT2w3Z7MucH9fyP1TxYna7TiRTAx8yEtCtUYpGh8XgjAA8jYRrbciXppShgLaxrKGmXhCgTyttz",
  "key7": "2SyWddCdM23aRSXurjCrkH856cwBV6TtQZmkCwNsZzMNLBkobFZD1uLTyjytr2r1iv7ZxbthLGjaaGmUCMBLLQHQ",
  "key8": "2C4kPKutU8JsZFVavRo4d6yjVjbj1oDKdmZVTwPU9RT5bxVmHX8DEHtorgbFoymSszgahT9tZrozqzKKv2xDNeS7",
  "key9": "2YNWqkC9VGAUgYsrkCV8r9fzoh9d1prncFxZmeG5cXtEasJkuyfBjiTcAQg71qc4kdRQDbfa9ZKZMPyj3ruBtUSF",
  "key10": "46En8Fx9XJueNo3UJG2Vms7REd2r4nGhwQXtM9AyFdmCUv1wktmv1kaBc1ur14cc3pJWLQJTRAQwqpDcfy8niQny",
  "key11": "4fyoWUomJhk9MG7Gxxuin8hRidn8CUFX88n7wuVGs45co6NvP3SyLTDavm7rHLiwH8pKgmwoHGAGhGWHFNMWtgEs",
  "key12": "eUd9w8hDmsX5gToDoeTeoXspfj3mcFSX8SNRJaBqYriZ3WCVYzcpBL5EG5WpD8ck5unnEsfARDTaPRjKJJEDK34",
  "key13": "36yqstRiKFthuPM1QatM5CUewheD6ao1AFJJ7ZU6eEfCNNTLk4NpRKrLc86o69F3znrkRvXP6VAoTw9QyXbcEU1N",
  "key14": "2PYAVEGFSgb25FJnooeigSPoyxMmUndjTdedCzihRwVKTUKmqBZHPiUv8CwwvyA1khHXP9dJZwTJ1adwfENdyUap",
  "key15": "2oxswqp852GoMjC7r2cdAF1itLarEveBfQeiYMn87BJK8WdiHDUemZgxxPBQBCkvFyotB7osApcVvC2RVJ1UpcnP",
  "key16": "5c3GcqsJUJXLT2drgxNYrG79Ce1sjstb3YF53h6MwwGEkfCB4jtqp62UV7F14LdfhzeNKw4fWdmvBLx3AmLRrVRx",
  "key17": "p7HTVWq8ct6dGFKXQWh1dX8CjEYDf2FNztuEm29tkVxyvcqARWmF7M1cV9ZVzCb8kyj9prpvccYZecjz6zrHvov",
  "key18": "3mVSKshDfksWBGMjv5QueQ2u1UpPu6tMJVb5MXFjrrrYQLLJ9G6CxwctqAKepQisbbbM9RAirUwqr3r3mC5wrAi6",
  "key19": "2V5NsJaMUhzDoW7rSDDGvSJPHTYNcvkvgxEaLoG3hRhkYsVaaGPsRaBR8jMy7rMw6unqXNw4DV9Lsn1x8VW1Ed8k",
  "key20": "qtG5e7gcMFczNoLJib6sQA2kmuQVVTf1qjY294EGtri18aCqTShDr8DfEdJr69ssjDmMYusYWrvmcoMkRU6eEEb",
  "key21": "5GWcBL8fyyLWTwsaDu5Y7xm72JxjRPKFAyamPWZjRxXMHvpy2sW4mKhDHfLrFwNbEuNQaS8aCuTbqsKqd8b8RCpH",
  "key22": "4pmLSMFCx6zR7QCYLp1SEGJN7e5pteDLZPXtJt7RUyShphAFGJcMmdah8jKuw6scd4XjSmUDhrsmjgSZcTJevZU5",
  "key23": "wcDkTPQCoWfJfeKtG76GDYNMQC7kof44kUaBssHfYbHrCFaeBfrWygHs9e7V1kAK62K7d8muvF18FwGFyJDGUiq",
  "key24": "35wgakiSEZvS3y97jM6rhkEAgUYuut3AoY9rY4gcqPi78vKJXD1NaQwLgLjtVVJi5E71a9opV32ftZFYBgBvCa9g",
  "key25": "3ByUkion87nbfaNQDoJy9zmkFcfq6jLRHxJJBFZWZF6fD9QhGKpWh7m4JcQHQKob2R1MXCSN8JCzcMkUq6dZR4T8",
  "key26": "3kpF5Lfa2aM5MGeKNHrBngDTSja2YxcXgaSGrForMMbcMXpTSDX8U9bFLqzompq6jPinmog73fMdQ3YEKASYqSjk"
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
