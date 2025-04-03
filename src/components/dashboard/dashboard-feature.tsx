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
    "24DPp22aGngjexEc6qocsUe8sRphiiLFZgEp5RZvwch8XbVaJn4ujPZLYFtKbBLqnAF1UGBjv5vNNuK7YUuA8nxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mkpN3CpiLHWum9u2LwDXAwJczXMw67RTwN9SYJLYiW8zPxSRrBu8EkrSBakuZFr9nWEgurK1RhF1apANxS1Vpuv",
  "key1": "mbzvaQPyuTR1dqqop7L6RCvMEx6CTtqkhvMc6ig7RHqbJNhUh9s3GsTZNxWarD4BWonu8jjAibzUe9bHo5giBxY",
  "key2": "2T6LZ9LGUg1ksMsjWbycYbjq7ZYXAKoKaF4XVzsKNGRWfcrq7oULAcAZpPsFb4ARSnR7SpKKgbT2mdgZteqRipu",
  "key3": "4ETCXvWDWLm8VgC9NHEhq2K4oPWtaHQZuJwumeBuoa8fZCXzXw3hDc7vwzVgbsBiFnBnBjhmRN7JSjajxf1G5V5o",
  "key4": "67ns78xWqnZCp88k77bAwNFZSKpp2HmvH4dk8G1TK59UFGaim5rPavTFwVnAJyMob8czWJXA629Bdsf7KXZQ1gkB",
  "key5": "4G3mC34E5qRu366xoUT4CeMbD2iidXsPrQhsw72vuWFubJd89X2bFR8jHbkqJKb2LHcnSEWYiR5g3hQGpxtUiGok",
  "key6": "EsD57SfYJCnRXS26nr33ZGLpJK1fUiPoCMaQtBTuieyV36GoV4DfVpa6FXGP3u291SPn38uy6bu3LMx6LT7ybyq",
  "key7": "4zossiQ5nAiWb3UaugUBddG9Wk3fQEEcPEgj7PG2hEC4PNHYLbKe6P8TJmsmn3kMor54cuqWUAYahJa88rJKXuxv",
  "key8": "2hxsthnTbJJRA3CKPUydWGzfsGSHGhCfrvtsZC7RhD3xwBeu4ptqx69hwF6gETemGLjEa5VVD9qk3Wh9Kfu9WEGK",
  "key9": "57QzkvBPTh1E5GQYg2oZxcpyyUfCJ6yCxTFAwuLY8go3DCkU7GasEGnE1Q5X8Gbkq17YZE14NimH55Vwz7b7amSM",
  "key10": "2xPHYzNkSaZkYSfspwBDAXzmkcqBVAXRUiGdhsZ2c6rM7XjFcPHvxnnvw3i5EcCaUJVrcfvckUYRkbwER8cntF61",
  "key11": "46xrPnf8TrFSYHGemBnzigMAwerJ1ZkCKDJZ4X2tqRYFVsnDsbjWqBFNzZ86WwFi4MaZSsDm9yUD6i4xSjbprDvR",
  "key12": "2Suy8LyEuNQv2diEWs8DtGykFNLw9L4HYck9xrBA6YH4rjYY1UHbkD85ssyXw7sQygjs6mxyK5B25kSnLahmwWnW",
  "key13": "2CfbwYUxcyUZoAxubPnQWZLMp8BpF6aoNW1YNcZpHnogLYxAss7DgLaYTDvPtQ21JM1KaNSXuWskwvKwSMQ34JWL",
  "key14": "39h3faHZMUhqMMbkGsLeo3wYSLuWkNB6ziAG8YcFHnVEcCp7u4bLDGoXbmyCcYdqfgaNF9yfBiNSi1mboeCGX844",
  "key15": "3rbSDtdY7NF7JWsSFckjmtQA6bBvER9bGJEJ2DJ4KsjqRVZ5J6t3xsbdYpDv8mMqrqKBHNcA9dBNXpfpZjTCvtGu",
  "key16": "KCbsthHuQTp6KLvJ3bdbsoaFUgYFoaBAjStUZA2YZmTxpMLidhiRhVZesiGPbszeUUfMydRdo1fKkfjFXZZHvF1",
  "key17": "3BkBEz3X6MrgpMzwaYJ1DsxRZxLpbgBtJ8wqFu9Uzy1Piz8cMJgbR4fnq3jBiZFQMXheuwhjhX4feVEpVz6VNzxH",
  "key18": "4eEhxRvJYqaURseSpyHv1dxsPu7ko4WHyaWi8N5SWjZVLVta3vryff3yi9zy87QkuQZRjomryDNMeZRciH9H7Bud",
  "key19": "5x9ghnd2ek26XbYuajbb81LFuWm5zr6fukfdPWMQ5Y4tA8G4fDYRrMZRxCndJtGx5TcBBL1N981kRAm9pwPyk3aw",
  "key20": "LcxwapAMt34hCXzeXAjUkw1d7ih5tZKWHZjEbPzTETGzxuqWQDq6VsuE1txYg9H56LgcmhpJeqv8A1EwmbTeLmX",
  "key21": "5kkHZazNwxuBio2Y16uhfSpn13EgbpXqf6DYw85Hg6g1yFGrXkEhQTeR85gwxnNyqPWwbLEyhEVm3NjgDc62yXtW",
  "key22": "CPzuGzz7ynNLFpkB3iMwF831SHrLkxJj9ZoTd2sS3X7mdfs1vVHkHQTLk4wzbHGpSpuART7w8bYs2XTPdNpfcoD",
  "key23": "5K4131qjwdwZ8nFwGQThcvN4dKMLdqU4jME1kEFrR7qMFXzfneHPko3fSDFgD7dtUoRjASPDZDZ211JfN7msRHsW",
  "key24": "5TnUm9zDMqB4HUyKRTuUzhUVcFeTzpUVW55qKcFwUFvUtxbmqPnHrcbtPTogtioh1RikSzHaKtvTGAmL8WMMS6B"
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
