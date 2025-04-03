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
    "4qXfaZsjCgzFqLJSv3k6xXvYQYXEwxSN6ia8qjyWi8NKZLMAE4KwLxGZ9hHzU6QzFU2JATXXohtBUhhnUk9ML9ck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JywYVnkniFftsCyKHtpWVdEKAAjwaD1RqFTRUF4iKmezXKiLWK4a83jxzauzwcNM4DiWEBo7PkxGciuyUpw9jnn",
  "key1": "3xg1n6PXguguQERS3ra21JFHDj1DffDtAefGc1vgiyVewDcspwoGYYNAdBBMC9TFq5mX262vKxsEviiakxP4ciQY",
  "key2": "3icsQXtmeHDQtx4XjiFFQ5qkiW3v9pSGTkvT6tTk776erfMA7GjuieTw7KGgnrLvgG5iL4i6NNKFy7jMYQH66TCZ",
  "key3": "676EY5jDXaYCUR8noU9u7wLkZeBoTRqqV7Pej7X6nuDU9oiR9AqGQAaNzdnEsA3KenFhNUsNwKDmW6t2wM2oCB2g",
  "key4": "2iLLRoY7XEjQ5FxC7FHtRMvXLc3TVby3KKjeKhfEwqqJ9vZU7YCMUJa9KFrDTAPx4xPEVgx9vwmFwfG2vqqAfC74",
  "key5": "1gd8kkcKdDZ2rjsLcFdE4iSHULnLaaMB5mFPButrqvVdbBj761C5hK7DKZ2xbYSaGRjh6ovTNzro6TL2MA34BBA",
  "key6": "4qVQHLdkLFqJzBE2yQ6X82QtE1PhE7WsPH1K81kJcp1eN3wbk6xFiRpPPY3tjRjFHJf8ATbcHT34ZFni9kzZz5cX",
  "key7": "2HtuLzPx8sg7NAVKzmj39i35uYqKXYdwoEci4zk2N2Z4ZgAzeKnR31cBwcP3LB9AhHVM4gBtFMKhY4sB6GaHH41a",
  "key8": "L2jiQWGY5x25PUXFeuvqY42TcnA3qZbZPDVe8qKWgJUsD6cpnZbcnbzmGahGArf5uUiVPZTbD5eNYvQbQa634Mt",
  "key9": "2eYyyGkaFP3XM5dH7HdWT5inLLqFEMWXKQr2UBLuLaBd8Y9JS6apcu6fcnf1LwPQBd5apvh6cSn76EMc3cepZW7L",
  "key10": "4zt3Cy1mDMXTyTNAhcfWV6TxDGP1WB57x3HekxB2ifwwmZM9NX2sKz5bbPFTUPbfVHuasaG3eMLXp6zHpsAo328Y",
  "key11": "3roRAnSefAaGHTgqXVLieKk8UAjMA7Nhg4BKKQnzqHRM9deUqTxoxhqGLYFFT6ZvVXf84G7cmtxtQTznr4DVnbN",
  "key12": "7pvfETCDoaFGWziwUiwo2RSkS54DveXxaXxHUAAW31NBi7JRp3gN1cPo4qPH2q6DTgJZ1y1L7pKrSjwz4Ag56oG",
  "key13": "5WrRbaE4J7HNmXvkYrUxMRfdsBN4z8yNsx5MFTxXJp8cnjJJZPQkwdKPYnYuLYFRUSmQpd22yUtcPHGKz1cj7mCy",
  "key14": "65mTMB1gGexGYWGdFaQrPFm7WPKqDMutHyKRUdVDuVA8Kej35vfL8TwmHTUqAofzoGwGD1TiUsS2Xqj9Z5cqqWjc",
  "key15": "DBE6q1BvuLHngTWjwU3cwaE73eqGsY4sccvRciaNjACmPYXZEvNZA1mRXgKkQyvsxasdJMwdWxswPkLoJ6u9m2j",
  "key16": "4RhekWZM9RmsaXQNRv4qWS4neLvqT4rBrxwonnfMofwC3R879i62ZDYH7zqzLA3kQLRwZqiFKS3tZg2fGziHLHT2",
  "key17": "3MRwkNgWZfKu4Mk4nYhznVRerHF2xBSYe9HGa3K3RwmgNsazPgLB8M3kRW2xLdUBuesEQPoxyW2eobtWviM7ehhL",
  "key18": "5gKCLik2y1tgoWdkce7jN34ABFf8KbKtdeHxv6bFyxQPheq9tNoY9AVwWzPE3BkyZY6G3EB96QhNWc2uvangdNeM",
  "key19": "44jcA8fmbxHjjb69GD2247X1mKFdbQnh3K1jB1yaL9pa1aYhQKbhi6nScK4tWM5aPYZpLC6AcrCFxQ29ExsevGF8",
  "key20": "yiQWCtTqreQh3862Uv4TaaEa7VBE2Jq5a9ZKJvhj4AbjvTtwjYZJMnCy89YScVjTzj3NY8LBQuva58gHKySX7vX",
  "key21": "5v3fzXwjQruk1Pg4uM6i5ugRjxeCcZ8sg7sR7QCb7kYzSon5p5CYXxVvzFLaaoP8EEDy9RrRdVXNuQHsNFXb7Y2p",
  "key22": "3dZLr4MSr9Y5LX1qdoY8hxtbhWaaguGJ7XBFSkCLfaTTGAn5EHUU6aDcwuUT8WJQ2jXnhyc7pdJJkRmeJgGVrcKU",
  "key23": "3oafghU7xsQXKv1J7aaAG3vUKpviU2huoEtqSJQBGJ63SKcC3n2KLLxPCKHz4V1sQ9RQTqxjsPt9PRLAi2psJy3o",
  "key24": "TiBfGdQf5Mx9XM3DRhDVwLii8GBuP5FNFvqSRAJd1QdyHRUvcnMzfXmn659qPKGXh98JrzoE968kcZVHMh38uig"
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
