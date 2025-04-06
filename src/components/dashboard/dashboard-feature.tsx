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
    "5fysRTPgJBwn5ffGUoMKF2NM4vDJRBtDBSrdPeBwzntYi6B54ENBmFpwqwccaahpWZgsDPyN6ReUzpvVHwSQxbPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uzDA3t3Mzb5hsnFX3mS7pPwNPpnoiHoyZmrR3xegcrim4x84FpwDHdXhfdLUJL9hiJtpMxGkgWqfNvvE1FqNcu5",
  "key1": "22FZXGinbfAxTz6SR9tJGA5aTCzmejLb1a2RGpcAa1AvDTS281tFPNqto2YtYFmtmCcte5gRWLYL63exQVN23Wzy",
  "key2": "5JzahYUemxkLPZhTeXQvny4Yw84LcUZgvonbZi9PC5smEtKkALy46BeYViha6LeerYbH3CPywMuuY49sU5tZkhZv",
  "key3": "4tEg4jFpP2y1qunoPguWvrjKp6LYkUn8Q4nnvH7FwrRpMc9TNauDu51ZkSGSr2nQj5jeScjeg8wrvnyTQf1C9iMu",
  "key4": "5cEdu9koUzsjoWfhxypCUxt5dNgHNkfqkzNLLbw4mU8neEUepskhXqJeq3WpjFp7uqWX5oinnNodNzsqWyN6GQdu",
  "key5": "WYXZFZC9knqcn6jh3C6dNJLHpWFDPey2cixTGPqtMR24UGLWReiSpRqgxY8LeenUU8MzE1SuCXViUuEjJUjZuAo",
  "key6": "4hoCEtbcAbrMxu1zBVY18xM7jCNpspAYj7sAZLYN5CwwmXXicnuaDTabzLQGsx7B7MQjRK8zp8dDLYzbHMQTDCqA",
  "key7": "5k5cUV6ZA3AZhmXdgC9dYrzhAAFANcKYFgYmp9PtSV4HDKvCzJD17jgT63TSNiTK1sJ1Qc9sHjy3zd8mFzYkHMse",
  "key8": "27KqzzunJEzTVkm7gVXgxpU7RDce6jeEVMrPHthxqBmcQZJKCUvftZQKq74n8DPacnYANCBAaHhxsgcPBmccCeVs",
  "key9": "2VyZbFQbTfnwWxHdPETsqhg7XkthtXFxV1yLmJ4T5Po3MWGxxjYEyef8UgZCD2hzmmewdYrMMBzk3q2BpubwvTxn",
  "key10": "5hW9ukRJBpgPXoru4ru9s2SQT3hDxuc2QXgMREcnE2acKmxFgDuirzALY877nFSbgKtckEmwQjCwGtP6G3uxoizF",
  "key11": "5oLoLJ2TTRdmbPFVWxGfXmb37izFiAWBepvY1avxQu83CHr7nan5tqRK81f9ZV3cnnJPDeSYoz5RTUtB5pB4aczv",
  "key12": "35w27kJRhmYeRHXktv8WMvrRst6nubBNP1y6Ak44gJVeWozWbfJHCwjvMPRDnbphMQVHK3kgFmeLKN8sXuf9DYvH",
  "key13": "YzQwhvRjKqZRKyh1zfzcmCKkmmGge59JJmV32aKVpMNkA5jeYfrS3jKXZ7MEaH4RAsyZiTiNcgcAVC8eeZViqpD",
  "key14": "3zNuYWCVhx8ca5yoEuFhestJCdky89W7iqCZrDeRvx6VgCNydMicuNDy5YD7HiLMs8vYqnZjGN1wcJkBHEytqf6S",
  "key15": "5adQR8VvHo6qNymsJMZmxvQntKz9BfhcTirQFj9y3VhuUhqVosXYd9GK8wQdKpouyZznGXtopALxdgDDnZRpNTAu",
  "key16": "3VJj47Xo2JZNXSrjzpxy5aqjfSmnxfNwoe2DNGUuwaLUYHmhiMARKPwutqZyxQrmwjUNScPFSvvCX45U5Mqa73YE",
  "key17": "5oQmcaSTvEKLCRVSvBmxMW8DXojzPv7ncgi4WuJzvN66sVg5WcspXgn4ScviU9UtwhqxYSdBgKtodCSxz75y12DV",
  "key18": "2DZfBjsCcwBt6D7gQto3knXiMHnaDeCDXzmFZm8mazE2SaoEbHaPaokbkNj6UTecANsusoqcFKzQDDF1vesPFpAj",
  "key19": "3LQUYsg8pj8YcypPVtsChV1NzrdQc84Se7pRHUkodxQpGjWuzYoFYfwDphirXbob2dLajnr4NnqVAp9ZnG2cDT2e",
  "key20": "33PSC8PSXEdBV2aEpTS8r9vfudzHwjCeQzn6vBFbYDVmuaYqWYGdxRKp7QADDnMraCvQv6ifnhWuCVsaWMbT2Amn",
  "key21": "5C2S6k64uHjrTTPXRVZVQfma6VaGTQ7be1PMwffxJ1uksAMcfcJMwJqJm5xRfaYJUk5x23LwUoEtyRs2vPRxhkya",
  "key22": "3bt8MBYZR9qM5mVj6thVkUJvVvE1FyAY6qXm1YqBz6pvb5aDZRoJaev8RQTdhYTY9vhQ4YBvaG9GKcXz4xGahQR8",
  "key23": "4Gxxe2os6XTPeFQ2Qt6Jhczgq4V4Lg5iozKsSQTbtg2Ete7oCJnS1hcsPRkTYkWoB93budyvLKyejCFZMtyYr5UH",
  "key24": "3bd5X9xBgXQCuPpepNzuGbtfW6j3fCkyhpwEGKhQzmL68zPXtU9Yv6RzQ7ecopuwNSQXG5i4jZ7oTUNFEz5wZTZd",
  "key25": "4Fd1abZL9pf4XEx1NhtJGbLGmbe7yEpqtaymxg4xVLof5sZ85UhMfShYPrrrxjJNE2uMi5m2v1UDNi9ak5E3aT8N",
  "key26": "34zHxsXEYofpG5CPftRhqBF4vv3ydxbRe8kF954uTR6gEYRpeapAaLqiEHnmAtbgm5zdpJy1aYHxWbzoqsCMqdYh",
  "key27": "4KRTmNGr2GZP39ZCcSHkqBwW6SJaubnB7GqtZUopL2dbx7RHTRnHgitS8nb9N4rKNMYEfwaBbW48anbajrU7wULE",
  "key28": "5iDgiagoxyb9h5hevU2Nevj69YDA5ngLYHYnyzPSsRdGQEVTQK1zy5c9hVgvejTNTf3W6pWBJosXhnvRwmB3TW5t",
  "key29": "3qCRLFrnihchKpPEUHfi3EaQw4gEMHMPAeczeDZkESSgYUvMm4gN58arbzYcnNzqPBT2az6WLtmBGsYJXHJYMqno",
  "key30": "5s3hEEnKtFmeZKfAn26XRvDhE6XxdXYuFk2aMs6hEvYNX5Gx1BYNx3aUVUHCCJr2EN3XCY4WT8fQocuTpns7bVYZ"
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
