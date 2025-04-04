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
    "4vUvg2qJqEoC9DD8wXLF83YeQ81YAV6w7oRutCBMnjsAzuL9376dqrsQ56TT4z57VKyjzYF6371jm7gspuLjsBkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dpQq1E1m7j4iyAjRSXj2Fm3LxcSTbgnFZs1wYFm2vX179HjX1bAp17YRDgMdUm4Sj2DFSnwWTGbieaaFvu642KF",
  "key1": "4oMwSqYs3JpjDnHfJnhYV5SrMW7fEadJoFoHtPuT11qFSPvMEBDTqroFBPcsYVEx7K5t1b16xshHj2XNTrGNiuer",
  "key2": "27aEAhJ9wgZkidyYQ8B48Mu3kksjBFQRmvGSTRzVjsQ4oed7af6SJ6tS4WQGzgoKGgQNkzZjeugNxYsjvTBQCARy",
  "key3": "3PwLWyspLbvtsV5MyPtTgXJHHVAUS94N7Sw35r6D1S8SNuApWkiLeGLNh6tyRiFhdVU6WBuSpBQTYFy1h1i8a4wv",
  "key4": "2Km9CpCUcaa393XwuXPQzxRyygtoN4LRdtyniwhrqzV8vd9kg6piQFicQEVaXYg1T8JcuCrPzpSWEFUDzwQKmiPA",
  "key5": "3AeuT8dV7QjzXqL5dGjCJZZaadNGykermu3kjUTpLQmpTrHbX39zEeuCLYW6KFcBfXd7A2dHzcZ3G7DzZB69DJpQ",
  "key6": "2dcDV8qk1acybak542Vpvegw67VvFsfsryCqy9ZRd9UH2LbiuoHhBH6hu4fZhdZVRheVbSt4ErkD5sqDqjZ38dE1",
  "key7": "uFyTETL8NAj13dp1XH8Ljr2Y4iKBmTy4ycz1Wa7673Tup61utDg9ixsvYQq6S3RS16t1JrGtFS1GNfWac9vuchs",
  "key8": "2AP37ave9x6F6GJmXSsynDS1ifN9EVMcCX6dA7FFcxf1AjiVtLKmvtgjxhBt7qyDe8Tx8vo9EW5HWHiJEyQEe6Hv",
  "key9": "36nZTq3dWPvTn32KxqfzBsKwR5aLTreGDcZkVXYS4RPMtReBsFqTSHyMvY8sTmewr9KFepZtQ3fzzaexqk9NQKgq",
  "key10": "ZuH75JqaMoeccaBwCzLWChxYZjegurWfKVkcnTQyX2nf2qA8Qu6NcizMBty2rzpqZDF5LQSj4WwKwu9hQanuk8W",
  "key11": "57DPxjSsj51kp99NNusFmpBE8eLUQc5P9EuhssoUrDovtHgZzjWbbkNUbrCNPvNZ5N16KnUU2Wm3YNNGuw7bDhGo",
  "key12": "saT2nxVkJABXCeSb9o9BrD4QaxB9AB3vgHMNXcLWjSNZBbN2KRbbVMN1TiA4WPbBfLss33vuaZtR9Lh4X3qmhU4",
  "key13": "3PzLWr4t6BjbhDptTgUn2t3nCRGghHFRijJ15i471WZn6D8njZHKCkjp8jsunbxFJZpkHjTGQxgbiqjcHLnwMpiz",
  "key14": "5A6uzqphAUAW5ZcDRsR1TnpbGSL9mbAMLPYzaAsop9y5uqgMPnbLM8x6rCtEncBWeXosNTcc7x4arZM8BkTdchzE",
  "key15": "sZ9SUBpiLgbBdXpKUFZCaorPqrwEtwDPbxHxNzBYADDtsPrK2oNtRzGCy6QkjJcs5vwkddQXsjXtrRn88eWdahy",
  "key16": "4qTprW4jV2V39Kr7FVumLu678A5ouJcv6gx1aXyFhauB3SRQTMLQURMc9gtYGhyYQA4trRbKZJLozUGMLWgn5dWG",
  "key17": "fkSMnXzZCqATokJB1ibjtbwfhRfyL67t2ajDZib3ZyCGJnAAZKd1tiNcWVsbLvHxLMM9RXNHAZHDAzbmvNytGxs",
  "key18": "46Pr2CToQuNsWCjy8wvy3f7EPDJ9HMEBntSVfJUh3V1rz438FTr2KUbQar8N7eaNUD9vX1SySH7mC5o6DjBLzATB",
  "key19": "2mPbJd9rnvJQ2o1eUu6jSU7mL4jAYThcasWzt4Nonjgr948M4Rxq3cAKjbH51iXCnMBJ4Zneo1DtyfDrLKvG3ECy",
  "key20": "1ng53shEaZPHr8EmoqdVHkgV8xhzAyLLNpgU4ZbQWQwEhp47HvZc6VBTByw1XHUDuymBHDPS9wQ3BBsm49Lx2XY",
  "key21": "3hZYnw3FQ5fA15YYhbPCaizNaYUNhhikC9pXpj5iVzKAtZctiz8ayJBEQkydohGEiLrNERZhrAD17wnW5WZk9XXY",
  "key22": "3TkTciJnsKSEA2vN1cSRoS3bssBZJbiknXh7EAzN2PQY6JYEfmA6q29EBUMVPGsjyCfmbAjzNNxFG6N2d6mvgWEY",
  "key23": "rmoiBjLzBQNez9YYBQcemZyMbnxbDncs5Edkx4vTqdjrGVbVDgKuXATad6iWi2NjV4CFxDwjt9PRyD2p8QH2bYh",
  "key24": "4scwywfQ6aZYLABHSWGhpL6g86KYUJ9Tzxm49opy2QA71N9ujDQLpvHoke8ExrVSdBVxP3EjZiYQc1ptADSqYdDr",
  "key25": "x2jEuYXy6rbFAb7C9C65iaaw2q1yB3pz813DuVkdMLNPXGmxLYbcwCodQYFzPs95w4mPhduBxgiqAVgqtQSHnzS",
  "key26": "jGK6FAfsXPkpcvBjgJDa9vNKwszaj6rKSjBsF9wGMPBhzdxiksqc14uNoRWoDcwee2ELAdVk1cDnxFKznejhXNj",
  "key27": "2os4Q3A1h1QvSHVUd7AY9iQ5R2XQVjwBGgd8jeLSJhNN4DJ6JmduDPMxgh3BtrRi6eK9dDVkN8R5zW23FzmddfcG",
  "key28": "2fGKqWPYnHkXtwem1ENdCiU7CD2LLk58pT2MH2UhqheoTbotq3V1JfJo3zqAmhx1zXqvrFwWkoxLg2NQfj1cYDZM",
  "key29": "31B4dYQmYFbPPjG2JnaTH3pydbH3qqy4W7W5Lcwv9B2hTz5nQA8KZsqE5ffURoZMNWQyrsWKvg9GvLKxaDrwrmbL"
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
