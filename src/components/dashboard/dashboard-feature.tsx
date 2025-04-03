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
    "M3LbSyT7FZXQ5WR4vRkGmBjuTDf8wfvQfYXRzHxcbgArchy4wN8Cw5BywhHYznDakHUikLgoScM9PcH4eagatDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44RLagqrBN6X3XtSCEvpFsUAMYMwW9iM7KkGoWnSSeQsxEintE1iAQN98adHcHJVgoN8gQtt1XEnJYNGkSrHrtzy",
  "key1": "23CsG2H56miFD6exzFvjXpSBfcv2EFqwx3h7qfng2ABKN2cgSBzjjo5r4Xg7FC3yrPAXSPqJzk2ZhA8fjH1jGWx3",
  "key2": "5t1JVtGLrPMegGRTaiKpgG9pWrkzY8YEkoqRkQ4thKgHpPRtDbdFNcQpo1jgnL9QA1ydY4F1SECVUEBtsdxp7aUW",
  "key3": "4jQYpHNm4NGV5xcMpSWxFM8yZ6yTpf63oiwzHjkkttfiHVSaKUfF5CBdSujMxnponwdDtwvv7M8PXuB4yUozkHrE",
  "key4": "cvm7FSbSZ7wshgguVE6cX4C6wPtazmPHvoQh5YB12WpTdgedtdHRzK3B1nc1ihsruFbKLAG4g8QKdE9aA3eYYuq",
  "key5": "5t6N4fgCsKTch6moLjKWRwx9p1h6sizp6eAW28JpWuH431KhFrK4VX3WqzsLh7GeLXxRRJNch1wPxY3ffQMZrezf",
  "key6": "2USsViGzVjo6SSmBQvr4rKfkcRmKVZfFVMreUNQtc7Bh62YXrwf3kzVdKAnw5S4QkAL3H84DyDzbxGEbac6HAyma",
  "key7": "4rxKduk6xrpU1JSeuLnhZB37DiijXNAaBYyYUqDus1uEukDMd2mF1LgyDGhRMddBcN1bYKrZf3wK9MJGgKecbXcJ",
  "key8": "5TroXQULXcT9D7KQARXfK69oB7wELyMp6SN5kVmT9iaj9He8ULoMvHTK1685rybHro34xSdY9rhdQEpUhTxPCAci",
  "key9": "5y9M7c8pTZwWhWaNVU7hhxYDVTEhrxds1oHkhNHr4fb3cJpJqhCJayPf5dKHZmFxSxJv8f77ebM26oNG2XHGkJrg",
  "key10": "4iyowCtL2mX5US2Mi7e8JyknLheG2SYMotoFYUA7imzDsWNUNmARoP7TVFaV7zwzAvt2ph6onG5Du5JuSa3rcG7x",
  "key11": "3kW6trNP4mUg48KAXYcu4J7kvKZj7eVkJqL18L8RcQGPbgX9sZyDLiJCaJxzaexzJr8e8pcVeoVcifF6NK13mAeL",
  "key12": "4px7tXarxypo6vHJiFTMUXrXjF6yXzjzzrGEvCqEA3zytLRePCkMhQD7E1ckAKvfP8HhTJi8yMw6rbPWEBzvVG1U",
  "key13": "5nhK7Arb5baJTDPFkyzgFo81J7D2pMC8WftjTLxoQFL4RGVv2peb7ZzYASUWvgfNimgjFGk3iSx5RdsVp5WXyF2N",
  "key14": "59zkXTK6TVNCTr9Vu5SMhMpzwb52MAF9kDQNj5oVHoQRsrUyfaQivHYdkzTeRDxTDEVVxaJdKLaErXPG7rVvbvVT",
  "key15": "4kt8J1NFG6sXm3BMWRvsG1maQTiCwf9ryhfkaP49XcKi9KYv16FWvKr3f8t6z7RiyKQnVPhYLgvS3zGVLNBD7F7A",
  "key16": "Qkr1UWS8fjhqihDvieqWHtP79r6Fa7cZbkTei1gDbbDQKjWHc4MqVfDSeZaukSvBErkktSe9mZ5c1sYxsZLvbwM",
  "key17": "2KkEgnMhyH52ftqGepxzTYVy6PxmFPdmTHL2zLT69QBbhpRQJN3WA9kYy5iqnKwvQkWfPD1hpvCNTpYrHdrXy9iD",
  "key18": "49vHRxxajMnqPBtgwKcoWLo58V3FUxPAd8XEVR2zZQUBP7YJ622V4atHTf8gatRhcpaGnHc4ydV8DW6CWomQLrTK",
  "key19": "3jgkNRSE6PNhNzn13LezDpDfTvBD4zRq7vxB8XhU5NooV9VBfgePXUfwaQvMWmbjj39BTrpahVwvSqQhfUtYmpV6",
  "key20": "5P2qqtSU94gpSebrURwpgKr2JgE1ttJAbGDdZHva5pFs7fjg3Y49CZNr4c15nSjebvnEdoL4DH11bEnowpuAYuZp",
  "key21": "2aB6csueEM27Fwk6ut7SiVa2eycXsykMK1L5zwjiFaKShXEkXBdLuSBytgg52cHBxPzpQWwLznmDrgtBPVRXCT1r",
  "key22": "4zecnE9Y8LiYt9os9L7TCEX5VWwEBVL3K14A8TCuV58YZvYG4DZFAFYHPs1horG45CpvwWA2UoFNS3gQgr6G9Bxg",
  "key23": "3ww5JGZ4fqJm16xQKQo63EWZeRQaUCAD4riBqU8Tozn9mCNpQu9oupErBbUhh6i2rKyREkqHVvMSUhvzMuy6MZc3",
  "key24": "3TvA9aSPjR9xjpurT9GRLrFapLLiL3aW1MGnDSn18kuUCwH7kLB3nDMo93ZegFiXUDRuni1EHEzt3t5sFEs9hzYc",
  "key25": "4KMdWTE6sbejr9udcBQwjVPKwPN9znGWtiQuZBRtKSn4sLDkHwajVHzZALU7qnMGFFYypdKCoXfAhhEBBpT7NCyd",
  "key26": "2ZqUteWK5JrkPVGy245n2FS2BKYoym7CvbsJLuyCGWLPMYmciozosQSnCopnVv3WbLTQffhhchow187AHqTDY8vL"
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
