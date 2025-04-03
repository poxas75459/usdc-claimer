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
    "2Gn3urYiujQ7K4yNC5FkrR5XnXABgW3VngJdyE3d8o9UAJKkQK6QE1Lt2MABh8fSMxep2ZMunSwM6eW9EJQn5u3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vbY9yKXC5RyLM298jdUNEskFfsJR1cewZ9QzubsK7Z4JGVtZYHZdj8xMzpkxc4E6BpFJjRBVpBGdF2uqLZf9X6q",
  "key1": "5qyeFB5LwEnrQMnSAEa2gUCgVhDGmntbu2RaYDxxF8PJHYSqUrKTrm8TQS4mMWoxHUv1sffJ2pR4qESan86YMzvq",
  "key2": "5REzeK12rNfQ8KCWvZgALYNzejgeUhmoG7j5pRdcyfnFomGw9kFdCHXppjFrwBbHmKrnpo5HtoVF4Xs3Ukq3zQN4",
  "key3": "4RNGhvkDodurvqMGhgPQZEs2oo9V3C5nmuCeBcyZrJmTBKoN1XoeJguJ3XJhBvyqK8T4KH1b9PVZ9NF6X6YqkmD3",
  "key4": "5bLAADbLQckPfWKZWBdBCHNy7k2fmvCrjqYZDdRKKzeGn58NeukJvo6e9c5QjapddDv3s3Da3b1LtNs3xrAcPoXh",
  "key5": "We3AePk2cG2aZ6kCSvnLTxej1dMCLVpbJ7e5t3DL3ndq3gUuwm4BivtuWEZiTiZ8NasvQKa5aWYozJnYNddjU8P",
  "key6": "ak8GwjD9EfJ8qNHDCXSoVkHq4XwPYHhGevXbd6BsPVV4F567V1bAx9RecTfLbbRHJNX1AuApjBkoE4aAh76DjoN",
  "key7": "67c9aCCSHkU42iZtmFqT6K6DpAgcZPMiW6mDGztrMd1zJsZJMuVJrSciChFGNnkaMfjnx9AoPABBgUZY7hGz8HRU",
  "key8": "4edci1rMHrtGYBgfcBQguZxbWnXeDX7tZsMJdQBp6M5jjjgqNssdhyU5LNtLGAYtWpVh7vm99CLMTXwUgB9vC9u7",
  "key9": "NeiDj4ZRhFWfmMDz3oeQN5BEs4ARcXvWL3RMSqfAZquDFcMEimCGr3rDK77zv4qEr3SmW14ApXPiYn4BqNB3TiU",
  "key10": "5VetnE8fNSo552x9SF263JDNFnEn1RgbyuuWXCmonri2RjqwwbZAJ9Q1kuTWJDDquJEbM8S2mfF6cCAK3Z4BJqmN",
  "key11": "4wLd5TLb9mc9KRzUFUz5MQcFxrqzZk3KZaF4YgtDDkfscCjuYUJ8Y7d6RsBJFjsDiL6W2dwS34pd4XMBi7fvtVfD",
  "key12": "gb9Ln5coya8YkzShRnUy4LXDQGnkXUjzRpCy5NEWkX2a8JMEhNaHV4tDxKxL8fcwm4yY2Z5N7qeu79yrXnT3Aop",
  "key13": "2YWoTofAxVuMBb8jbrJmHUH521kjFDxhT9udTmzc7WzRKrFCf8bUTCGcGx4Y7fGvSyGZQWatyJx7f9BsYWjNUyji",
  "key14": "2tq1bUDoxDZAKppE7jBnxesYVST4mHNZo5ZupiysptwEGZ9N2c4UAwm5ZgKJLsNGq7Zy2LYVz5HKE1XxTQ9t38zj",
  "key15": "4mzFpQtfKoUFtF4F635TTvMnjUxHsRLQ8Xf7uWycZJ38ty17o4xJJmZMLbLggU2FFNLoDyCRcwtYMq47iyd1WHEA",
  "key16": "25hfFjPjuHH8xS1F6jQ2TS7z6zFJoSJ6yF73sEFvmtBjBx9sYNu8axtNafEg1bXFqYmXKp6E2HkqbV2e75kNcYmk",
  "key17": "4E9qsawnJx63hYy6voXPm771sgj5cci844pFJJLVVP4qevGcMauATQqboS2HMYCHnhaWWF52gnBSasz8SWhS4a3w",
  "key18": "2iTMDDmfnBh9azh9sAuVAM71JZPoY9Rcnzpxdg2v8LVSa2rPaCuSUYG9BJ8wqQ9kFrcA13gqvd7guRwtVaKuD5CE",
  "key19": "3SBpT8s3UoRDFEVKWrsXymiZKTZa17J8TmvSzsR2EUJHqdPrX6iMzBDbhJc1Ao6rAzogfDTkGmrXe8RG6iLcpgfc",
  "key20": "3K6NW5cBLeiSErgayPDGtQcs7v3sgnZ33WyJaQokduEdCuwQv4AxY44ozUT9a2kiXf3JW5MuitxMPyikXQQhDaX7",
  "key21": "3kBPn7HX4tsmF2SmdFhJRH8KVUVjm9RxvT4UofF324PJoEmY7vXFfMpT7ugiutCs8xGbD2LJAFRqSur9uQSBgt3o",
  "key22": "3n4sGemt3sDwDuegwuW7NAwPaCDT4txBaJsXyoPQtc7j3Nxutk7bH5d6jhnNF2xcady8fyfaDkYRPbXfD5xkmWS9",
  "key23": "4xysTCaPYhXSU4mthSmGQVZAAW5i6cB2RSXVwmcuDSh2d5bQDVN1WTJMxXzUWbDosRxEYjD8KsZg9hEjS3HfoLcS",
  "key24": "4EQoeHMA6toxHrGnT2TuSaPRbbY4ismoKkHCXu1n9yQ3im2GQmLZQCVYgqjPbUWKhJbQB2QWRqYZKBJWiYJBJydj",
  "key25": "SWeEBecFAw8V6YwxXoJ6GZUVh813ZYQo3q1YjfNGGvYmV1qmbeTWTDbfNmtjh3TEFcacrF6cg6yDxYpZL5s2QmK",
  "key26": "5ob8BqS8EY58RBdGPKB9RvCQfQTPXaaFCXJRrAxSjuV7xrcLgDi1xBzohBhmSA2zEydmgbNd89ZXTpCxYx5e6Jmt",
  "key27": "36kPvKvy4xpmiRz9ujzzPjgMSi9gMxTh23XCQ8ndP1MKkCWcFS79rrHAop4FAZYaBtS7xDiJ6kDCAEKyme92NSDS",
  "key28": "rQx6JUChWRuCSHSwZzTKPCHSzgxkFuS8UUZ61icH675SXpVeYx9H2mcNZbn4GAsKy2md1bJmkeSchWwoDcsAK9F",
  "key29": "t4DcAF6atCsFFt84eWEYA1vppw1JFkoVMshxT5SZRMrqK9fs5YAuEu3dqB4vkC6dJnf899L4nCzjrxrtK2HYk5L",
  "key30": "5hKTBbcpn3paB2Jk5Ua2kPJNEQh6jhCF3b8muUrAFthX3RPJ1q7tEyczXKDSQnYujYjrSR4pm25nApw3zNcv1V9Q"
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
