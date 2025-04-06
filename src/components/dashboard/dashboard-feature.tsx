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
    "scQ8Vt4Sg2SJs6vh6vBx5aUyvGwKeUm2BTb8kaSrqepwzz9oyjZvBEi4t4hJaQaYQ9Pc9Fyyk8URbdCJfxgcN2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hVNTr6cWvej7s9k8t6ZdJAcprcj8tNGbau79nCbcaARYyomuLEnQ3Jb4Xj4g1RUFvLgtvznSysStLbAYTidAZqk",
  "key1": "2o8so5uyes5ZGUiDPUUTvbRZqHR1pApESc7PqnuMVuCWoTmjHqxTfARVJcdWmA1U2h69FJLGi4xc3HWYRKBfhfG8",
  "key2": "3jwzSjLobdzbFw18oTPg7XmLrVkyB9otAdK2SnLSp5cDECr4B78u99EZXnHNvZEmGG9H47Cj6Aj1nK2fz7ua5SqD",
  "key3": "26DgKcMwsQMS83J1wD3MRNmoMMq4Q44h4UEc1Hu4xcbDPThe3DC3vWL9GfMd2gYxZxyHhzWwCbv1hzBPbgAfuw3N",
  "key4": "4ySSSAVNTiAN27ziFZ56Sa9Kt4a69wfrYXmN1m2Hu2p7zETXrsSa9qvhUSWH4jq29FExJFUV9i3fwDA9UWPuUbMx",
  "key5": "4bqyQ8zks9UajmPvrxyoDKtFAiqh7uqcUsgoE4B3Bw4hCJjqLagxXEMMCPxcVCJUydR3A976Z5siXMTge6dMAQDo",
  "key6": "4VRk45vdfnE57WFeMKuPfJmC7GQLRgWNcffzs61u3dtbAQKjQpUpmmVExaK9DbvNVJ83j98hpnnoLhJ6KWTmXon2",
  "key7": "5RzLT5ufWh25vrVwMzRzyK42DbotHRruAdGsHNPzdjxrY8vwKo6cFJ41qo3SVagWQKAgT43BsGn8VuGtHyUxFRpe",
  "key8": "5TU6foTUFRxKLxA2qYM31gAXRiFMXoVEz6MUr5z2vQtTxNu86AsrgncFjysuUTGCgcHKrx5sTtTCijeUUTP3B6s1",
  "key9": "4Yp8LGBsmyMAzCQvjuXY7oddu7FKx26WMokjnTKGg5HDNMDfK6SeubeGKBhNxwBxBn2x4UTLbp8sTiaN7hPdgXNA",
  "key10": "3rq3TohvV73VwEmBEKMULa9xm8XgKNBcFkSqTcvgwGYcnfhhaohBG6d42hW8NYBa7vj8UYRQz3XBXmWYbK9HWziK",
  "key11": "2uE3XXNBXTsKSuzy9yfxXDwh7uZ24QsvYA9q8qQHCp8GRi8uy5yjhjpLuaywFs4vetj9FajMgpkVu4yv8vDd8rXc",
  "key12": "3CpZq1onsdVqECeKTd78x6ZAc8jEXjhLXJ8Gz6RG8pUXD4FF6GDsGnnkTHSRuJbT2n4s8YzAmhPUCaPEkkTbSRS6",
  "key13": "6TfXSYyXkAUCoq5aUiiETmqrvCLJZBFiKHoEyjHBhVVomz5oipdLgWUxSUEwAzy9UYDMjYc4fXy8anAn5F629C4",
  "key14": "EPBVmGkHPtp2eseSyJ8WSSoEpUPxYqfaaezpG6Gf5TbEK8Pw9Atq2aFHEFitYYiXGyFn5FUreS3R7RN1jdeXqVb",
  "key15": "UEdxhBQH8m7SP4uUDEksxPqpjbNkcbZbuMMDndq4xyu59MbmAczh3HYJ1kMUXemCJDuepLzV7pf2VTpU8mdohcx",
  "key16": "xwfrPNwGkLqGidhLooqC2Trii35YxDLmhi4h3dVkkerZBmAY7hHXZPtoTTC2TZTfj3QaApsrE52akk75RY8U6du",
  "key17": "5ydyByqN1wWHasH9cjb3an9b4dHCq9rWhXszf2KRP8qsww1K5FkvBK4RgQQ2dq21tRb5fuQpoXg8b3D4Z3hQuik8",
  "key18": "2BjGWaxWd1C91FeaY5h2sKnfVE2iEcMMRdVD34VEXXJ5VxRnqWsfPtHHGW1qGjNUYpmNGr69HBNMUQxyepw9SA6w",
  "key19": "2BxvF8G2Bq3KYtUpXvdzNwHytqhgTdTVq7SUi3nEjzHVtr47i2hCHvcshiWoohYMavtZa8cmMtY8fvJ9W4KSYBHm",
  "key20": "3Us3NCuZ1MaGpERA4naMB9iUkFZAh6BA74UVhuhLVCncGaxJJgU2kCCLCV18oXrkQiFiEtUSpxJ4JgLaCQghhAac",
  "key21": "3eRnbLaQoVbVp5LD3JxdsW4x4QijLvkhrQn7vWfxU7yGcDGszp4Xokah3hkzC86R7CW8rSFbhMaRiLCN6UJJjdnr",
  "key22": "5HqGSmnWKs99V1r4ZqTwqD2FyDaVFPs7SNFL6BZsHTyd4t2c7fQPHsoGXki72o7iV7Dg3XxC3kUs3rEncvYGsQ6w",
  "key23": "Tqhtpxz3n94pSPYtEj7Ha1z5JaPYdWh4MXfDfAM7FngqtLMgsM9SiCxuNyMkzfboeJq5xVrkVmnajHPy3jVV3Qc",
  "key24": "3zr8ZBR1xMnYz4XjgPWeY8fALaGMEovsMg3h419LrmGrPz7Qp2otDvFbYLZSytA9uFhtEcxnRRo3FsJd4EmSthik",
  "key25": "4TXMGetKoCA9L4eAg7xHmwGPn7EcCr9DZFzTyQfQW2CQUe7W8Jc4JnTME4WPvATj1HwSFQwyzRyKBuwMVVU6wxfi",
  "key26": "jKcEczwnoVCvWReE8XA1KwuLCAEj1oLjymHf71es8bhr62DWzeB3jbkS2xSJxH1PGQqLLMNvLsxF6js9TH5fSaJ",
  "key27": "2Czokrz1KBNNQoSrTakGtFWH5iG4hSQW4QiKasxCjQ81m1AwYK1vnyAnw11oZYi7LfiJ7XuH64az4bM9i4mDShVo",
  "key28": "64qmBN9jdNCnLKSfVRh5qyqtSWaAuAXbDBhsFCBFmzMoUsE56HxYhBwmdQ4wMxartM9g5QxremQSffmSp1RRaaTk",
  "key29": "3DQEAZYAFYa4kRu6MHURkq6kbQHhcnDVjM3vzuW7y4bze3wLvsgwK9E1JjY3SoZE8DEt8SVufSAxJW7xkGFHb6xK",
  "key30": "5NqXS5nR4LkSEpxrNeVnQCtb5uTu2rrNWojE4FM2ZuRtjfDzr6jXVPr4zXMKQzLyqkRvQkDip1iGuzW1C5MSUb8f",
  "key31": "3avHQi1cB7uUB7AWr2XFfXHsW7X43c3WSu99CGQshbQWTZKFMDUQk9Z8Hnm3By2J5qb1HAw4zFVHJrjMwodKxtda"
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
