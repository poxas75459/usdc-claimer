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
    "56rW8Hya7gR3fdoAVj5LszCB2kdM6qRPnJ6FrMoioGuVGZE7L3uJU9uR1QniSsWvMQEtuhS4ieviuUXgqEUUBDkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kK5saytPKdE5VHvodmQB1U335SdJZNciXitXzRGN3cTcAFRmfREgHJyro9bvn4nBRMLTDrj1m48hzBK5Ce1N3y6",
  "key1": "65JeTLjQMa4geATYiLtUtGYabquzdpNUjWzwKuvmL5UD7Mj7En12uEi633DtqAW24PN88BT3Qf1vXGwXi5GLCDmr",
  "key2": "3zQrC6pxPBkarg7zMcgWr59KvCby8cHtPdhRuxP9qVskJ5q8PPwheeoe84bMTQNWLcXhYKzDo5qbBJmmL5aLCcMW",
  "key3": "2XEtn815XYcV8yZuiWS7pdXCDdrqLmZfB5tPfPh5sCpG66zFATAXbEEbXFF9uRgwsqgLMYrHZjUxqQdr5b7g2FVH",
  "key4": "3PTA2H8kXmfbwqVKDndUP28Fzn2KHCTN3PjKE5sMjCAUiJUoSQtVjsnG92xJbKTetCowYT8wSN8yNC1bfZFWPSyY",
  "key5": "G6qcxLWaUENnqS8tdJjfrnaqUYVJdv9886FiRGekHNUigKQS4SurxRBT38gGk4ytHeJqPm5cEb96W3G6EmpgJ7W",
  "key6": "3SX8rHRdGngxPaHWbTLXGCu9auL7cDpWVmZhUWhn2Vwtx4uHuVGX9QBk1DEijJYdmRyexdri6CB8d6WSNAbwUtMs",
  "key7": "3GAKzg4yme1kPjsGvMKMo3B1i33u3mqShSHANhbwPbPj84eubSAHewHevUBRFGeEn86gMSWUijvfe6ZN9wAVTckU",
  "key8": "5fnXyy4xX4QVe89qjQgmVw8vvD1ioWGWoigZixiBzxqvM6zyC3FJDYgh4icnEu23nKWGEHm4gD4CjxhTzbKhXbG7",
  "key9": "35Y9DDxmj5W6PuS8mWFdsqBkY7XKHJE1kUuJU6BaRwoangjVTDK6cJfkTmYV4iorunJ78riHeQZhwjaPgJqr9KkK",
  "key10": "3ty7bTZSKQBVHiRuiDJhxXx3X3kesAWfLUH9cMwzpFREJ16bZschsi9j8uZF9U2NdTemvGxHmewWx1dcxQffHbUc",
  "key11": "23bTokUZLdrveRovcXmw8XVUXgBFCks6B5gxL23Dwv7ixNaEsHJTWhgTVTNweJFdqHtU3JkLgMTNA4as7FVmUcWN",
  "key12": "3qt8bHo8434zDTgbTsavCL5g6ez7iQLbKaZwJd7qnHq7vyFbii1turmqF1M19NjJ9hPPkmRAKz83xRZLkxYqr9nf",
  "key13": "2SRASJC8vyLcunJMjabaDrNz4RyeGMET57wd2cxQWPTsfvV7gyvhGDfQ1fsrKTDAkg8qmq5hrKeo7oQkRzovozJe",
  "key14": "3hWKPLPX4QwenhMJXHNjL2VZ71csmykRtzuKtjuS5XsJhxamcw8qPwDQ2216ayeJ87D8tsRKShSLt7wc5sKi1yh",
  "key15": "2funfNzNGQM2xraVXgzPZ5zvrNUzJkzQh9qbf2zBysjHdJgsh3H4JcZQRLBUZoXfqrrVgtNVAKGyLkHmveHHLZ78",
  "key16": "5HhviomiuSu5fvVuvscqJ8bEsmxB4nsSGF8t1NSKmpyLsEYVJE2vSpQVsxNJaBZXXjntCUosGDLe6mRqJskqcqGK",
  "key17": "2oeDHfdjrYA6hY1T6KhWLkZge9SjFdo1iSYHRDmkJiK8wPZXoMkcdFrqJsQJKBeFjVhnwThQuk7Uzq11KPfa79HY",
  "key18": "3hsW9uquA6uqRiJRuz7S3MLR6gV4FnVASJTdJgPTyVTeuk7prpdRBhRQUVQYXysbHh3pZHmVLfiQYRwhpiHGRVjK",
  "key19": "3h1NmgpJZjVSk7XgvGJ6u5ecGsv8oaXSWa2jDTZvwSTgnwLXgtbqcPBYBau3gtsAA1Sdpwfvh8XYBANqUcaegduY",
  "key20": "5V18c3GzvQ7HceMCATBCCdb6BzzYsQqTu7pszfn67PQjcXJCaiZBhyd1MU2hfNtJqZFnJSeaFkpknGBCoXjZvNzx",
  "key21": "2pszqagH9fGtspXeWEdLZCVJCKFHALCVKphz7YpGTuTibA8EmyhnuugXCUUrFP9o7D5i9iyJr7f6NwHdjkB9BVwi",
  "key22": "4UTnWCmoftzPTC15rYgaiLB2S9KopJPXy6EVvQPwwbUVJBjwUB6uKJXjPD6UDQq3TLHsfiKNuGTKzCQvjk8BHBc5",
  "key23": "5AUD4ms9CCRbYmgcvHDnVrq58h7hmCYvon1WE7zxBZ3oM9P7f28w6BBWfjN8LrQjaQhLqtgyZYAu4En4jyLNx3We",
  "key24": "3bYV6u7VjZBaesem2bxQt7Tf4DFxB9uzXm2SpNxLbgg9QD4WYD2ge1Ajwt3rkasK1bfUPfBkRbLXQcaEYBEVmocL",
  "key25": "5zKYmdaB9C9rnfszKrPqLoKjuqaKYWcCUegqsGH9W3Yp8BT5QgVsQURAu9JtnquxGeVxoy6SrBMcLCsLMLjjv4qd",
  "key26": "63GFViG9naA9SvZLFJDFSfMzyxW7unqaZpW9t5osyyzfgQyZeEF9iLDjf4WLnQD6R4QLDEfPF679xoNPq2wHU6ZQ",
  "key27": "4KAQQt1so6N7zFghXhpCVhosdeKsoggwK1sXRyeTkWrM4bC8qVgSZSfYGfYYuLg8anGnLvKKrV3d5m3QyQ6yRqAk",
  "key28": "8TeAKAae8rQdpFuNETJdHaWHimW6Vozx5bxAeY7ip4U61mWqp2Rj6LFMob1Wfc1AfYaVKkoKepGZvT5BBwxMvFG",
  "key29": "s7HPe15EMhkiAMNmMX4YGDx29GekGNJDDMF8AgrsMUexKJMVPM89yHbpBZV7AgKbc8ES5fN4kEZ3iStXzoQvgkF"
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
