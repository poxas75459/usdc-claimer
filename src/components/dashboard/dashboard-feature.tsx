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
    "24sbfnYzJY8q14s99FPhLaRyJvMAApB2v4UhpaicfPA5rE3voBqUtPXxpYj45o2jKKzpXG913c19CREujumK7WyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39sdKJmskZmiV4qwYF5D6KVSxboM9msZ4SZ3vfP9Ebfnq1RuDsRQaBaa3nZi6zg7zC8DwbBKT8qknQhKXybcBXoG",
  "key1": "3gnpteBRtdnrEEF4WN2qWC9HvbpKmUoh3CqYdaytC39Q7hLDnpLuuG7gsGgztQ47enZqe8aqCfWmtMbR5n5dNeV6",
  "key2": "4CDQvviwnYiiFKJSVUKjTX6cu2qwnMTvj3Jurvnv5wviWJp2fdCHwWLKoMm61Ujeteygv7o53STeKtiD6be8tudS",
  "key3": "3YWKXnnmifvn6mpbQPFsbHRddVhXYmYHjJCR6tJ8tBgCCVjMp1g4d97MqpNSDpSUkhD7MCv6qyGuHqRyfbMrHhmv",
  "key4": "3cUqzmcbJhWxn2ReXjW9bcqsvjfcKnenTRes2i3rJDerMBCzsrRaVDumP1a7WywASMP8PaafogXcvMK3i1cT3VBA",
  "key5": "5iXgj47CYeCn5jWzCXNUZLiniDf9hwycsirX5AGNyBYmsRV3hSn5Lv5M2izHnC8SWzxjxXfoD3X5QPKKmAp6Jvkn",
  "key6": "2Km1XWhjkxhcXBxQXsvP886gN4GSLKiqMHPXSDHNjeDMgR4WAVM8M9tMAfYGjSbSoqtVo1KrMYLFyAn7BRNeddVe",
  "key7": "2tLhp6VLnTwy4qLd4CPnPzkmV9HBou1NQQBDokzj5y7Fcn596ygSWyQcfbD5W44SeHVManERfKNQ3b4bjxxQXnH1",
  "key8": "4xXDUoXgYDub31KSSa3g9Vn7fvggFGPNFSBGBMPn8MiY9CFBBhtqkSXcRPTyBcSp7zSGcrJ3Khjk9SYKBJ8gE4fF",
  "key9": "3wMNFGo9jmUYTYZgicChQiXacJ3EY4NgbxarqrcESJJVNhAPYMfs6GNTbFBazrraMJ4oDZwtpnQSKuX7buwTsVJa",
  "key10": "5pHKR2C4wMEgX76vpEJHkiXXwNpev4zPGE7tFTAGQtjj61TCEfUnaWXxWukCTieheyuk6swMrQdXjVKFEn1Jz6un",
  "key11": "WYz3KsoV82f6CY7shHRcAqCVQa5ArWYrxD5FFa5CuBSiDfDK8yLSjxXoVJYgwWQ3nTdq6LBPQGCqwejBTWyE49F",
  "key12": "UyWVwqb6Ge7rNukpFiZ8E9LzU82eh3QH97t9fSi6KhrjN9aVNETeZ3CeHrAeh84atyjVeCoL8TTdkS1DkeumkvS",
  "key13": "2ENnJMik9a99D5oTvvCKDLax4n7ntNhZFiYbGBwVeqSKRTb3mYZ9y6pR4L5184r7MusWU8o1LcPWzYGXk8Lpknno",
  "key14": "2yvUu9fUhFucP3Pttvpuh1LGTSEB6rVeBTo9nLzsf2mpcfHAGwUXg8SWr3CtkfJfTP7smJ5aoPqwy1dH3ny4RNhy",
  "key15": "iycZTw8BqAfFCjXFhPRdjChvR8ZTV8hLKxJdZQnQFKRup4g7AdYKTHWAPtoaAJFbAKvByHfKMmQQUHGbgK25n6y",
  "key16": "3pHGDseBE6B9P37pJVTPuj9SzMSUJxgLm3gkDPZoDCkaDgU2x4L4GXfKZgbKyh5dNxjibYFAR6veZdnqA97PQQQP",
  "key17": "4YksZKE5VxHHjQPaRa7DqrAAo6qZGa8XZDkLey58GxA22bAi5tTYbq6num29aUsctH2EWzzkRM8CCTc1RpCqsRFt",
  "key18": "5Hc9rz3HgUMe2TeFi39ubvjJ1oKkJ5tRRPgAGSBvu9HSs4NaLhuM2JMz4QYehVQUTemq4ivzUwopeR3Dhyo6nbSs",
  "key19": "3wLBJnpFvkB9CmKaPtiUm6mQayaZLFW5XwN49FSVkbpr7DdNabf2KvG2abPRSQABtHwiFEuPpXA7U2HK5PuaCvty",
  "key20": "3gzSg8Fpq11BBC4xYaAx8hShZQb1yriQ1viCCnvL29jSEZSm8FLn3QpiepTipJ2tdxBcDZkvQvT1KySWv5DANgwc",
  "key21": "4BxZZRBmPiCzQTBmGmDR6bCwtwwy2MqeBuATn93WRBAPBYW9rTQyth8eHFZU4AZqXFNKTBkhDrnkX4QYWbbEQaA2",
  "key22": "3YG6VzQZJr2savi6PsXHnzaJ9EbGXvxDNVb5ShG3pFs1rdm9r73PQEki3FaL7fJM9rmi4QtJrxb8Dj1VUZoPL1Dy",
  "key23": "2WU1bUr7LkuT96LqVyG3qzfwQvwPXdj387AUR4BEpXA3MrwFnzT3HfbNQfbC5qgUA7zvG5aBdMcwDcLivh6dKwGe",
  "key24": "tQAKKZeu1A7e3L3Wb3vvtEcCUSLrr5j3Wf5bBvnhdAUHcKowKaPGzCtuYRtQaaSoYGvkEuQLwrUtqSTpizn8PBy"
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
