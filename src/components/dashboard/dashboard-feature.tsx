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
    "5QaKF8ei7JeRTLToKfTKMP9huifL6ZFuo7qZsx9uJRsiDzusK8BGfTv6fx9jsN3JPs4wNLYChANmjNa3gQZVVoei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jScH8CiFNskhyCQqXAH4c9EjxBqqX5jKi5VNnBpfACc9VxFP7Kz8oG7QBmaiU7a2xFFW2rzNGQVtuCe7ErxFEBR",
  "key1": "63VvKJKabB6LBUp5NABPUfbqu91AKGQ3Bkgbut6fbr1PrRBLzZUQB748WoPhFh7ho62RXT2j21aFsn7JYnmRuR5c",
  "key2": "2iXEeGrhdrgPM6zSgrUQLoxwYsbZoEtUfXnk5YNZpqu6MUtE11DHkwiUZEQ4Zdrm6otxJsWqm4R1uZrcGYT747eY",
  "key3": "2cZpCdJuWKseh2ijpqRh3TNRNWSAC3m7H1eYb162YUocHhpB6HTzeEtwNjhHwa793yt9smwW1LpHiAkLjbATWaPV",
  "key4": "32ztHLLwvc2SRHV8ZS2ukKkazw26n3v3yS6fJs3HSdFrLmB8AXS8W5SYZr3oCQahE2TvMqiLrJffargsYjB2JmFb",
  "key5": "67dGrBUCorE3hVtB8ZCZkF2jEtD2R3vsAYPGGHSTCW74YJnVSN6Y9SLpoJpffTAY3E87Q9QNhhPjQ3WjSM2KQJMf",
  "key6": "4hUCdL4Tb3Cvqo7HAxYabKVK8rxVfdcPTAvDhszh8uxuGfQQJ6DgbKnu4tXmDJrnViYtzVsprt57GyQeqBfo9VuT",
  "key7": "5uxQCwxCURrKhRxSXjRBV3uwiU1uHDre5RNmTLXx9PQddD6qotR3QXiRUGozVQf9cxkWZaPktY2CtRvNzii9E5ye",
  "key8": "3ajQgLeqf2kj7ivKZQdUp8ZYsbvFMeLwvGBYHfDGAC1aoZYfLgEkCzZn7EyFUTZ6K8wQf2jyfCyJxnvaqmyVNi6o",
  "key9": "5YCknVNtKKdKqkrksFr3dw88d8HfzeHAA2peiVb47BU92bwyRj7RZnL9WbCMx9fhJChHE3AwJPCUFCRof4iwA37v",
  "key10": "2LXxbyeG2qnbyJDAjJBYwZx9EwmNrHRDrcWyK9grGAyGmTK7mkqHCcagUUb28dFKRRW4kmavcgEZ18mwa36bwXoJ",
  "key11": "5xqUHvKpp5B4oEi6mYRXz3LSdoJphsP7je295jpcqNTBcDAa7oiywQLoo3JpeebqSshrx5miERPb4L3UX7gp8keL",
  "key12": "2ckVPRj3w9jfWKJ1PzvNJRmpvoDUZQoyhXh7Dqo4wgeEJ1gihqBs1NvePaRzrLAkj6z1T5Q7DeJ3gaaABRpwdmcm",
  "key13": "4yeHK81XpneKzRgicEX127j3xHQziWpoaici8TGm3U7Y95Uq1knHFeh96Far2HBrHYa1K2H3o7tZqXUYtb2TXLKG",
  "key14": "5fevVUqmLoUUzf3gdHV5ySY8uYhzoBDaHkgsJEmh9W67b1xeVUXs7XXGW7KeV3acDqht28DXuSj1SZQJneUN1pMj",
  "key15": "N437XgqdLS9xYCLUC9AakUmjEv6RFn3Qd99jDH15PvduaZ149yUBXq6yg3HxqWPPXTLT3iKV8jhTUiBjSQgCVri",
  "key16": "2jNRLa266rtBUThaJsr6xe4wasL6saDgyJzUzyUNa4qsYpuy8oy1EidVNwGvfakDrkAYanrHGN2YMWJCSeJY1LXh",
  "key17": "22eqdLMjLqL5jhGrkW5qE19X7DLedA6GWKubQVqEY1Vge4JTL6bPGpp8jA85fG3jcU1KkconH4hg7qHaScuAWuPt",
  "key18": "5kHEBnMw9rSzyb2557wRFUYFTpy8EdR3YFPqaqWQJP8QGcLPrifPYpRLAcwg7gFrT3YNCxxMij6nC3Vr6a6gxvUj",
  "key19": "3MNnR2B2ug9pVBwSFAkcy7QaGN5xozSB3Cj8UDu16nqH3haXj5Bwoe5a8epPcnoXtmBzRFD2GZgTJrDCwLgH3Y9j",
  "key20": "2amtGELZhSb95f6DuoVgEYZG3hNaSZRVQrmXrauoyYPThRp3jAndT2VXHx6CjV6bCDPwDFF7Z3hFBVKQ2RrBjbgc",
  "key21": "3pCyaNqa8RzXendAPgGETPLdLXBxku5GfnC1SMitzeyQ2zP7nqLjPt3uwihdB85E42o6cziQYfSqojfFrKjv6YvW",
  "key22": "2JbmpVSYtTyfHUBwcArfxCaEGbuTXdEZWoNzC2SAQYqbPvKn6kt94yrAWabNRw8gFUdWhSRcFLCdADtveFZ6fWwU",
  "key23": "46zNt5MkcBnZ2ajzttWiqTRzvAhoBzRGFH2d27jMt2GCZJx4agXE23cdWh8mEbnrncCLcAk22GgRurRq3GfAXQ5Q",
  "key24": "3Q7o2pCocNH7BDFYm4nhuDNg3XEC1tYiHLPoe2FnTpAQJk9jhxE6GzXD4VwKh5rNapeRi5UNjcMSsdK5qJdREd2q",
  "key25": "2KabSgq516cpTCjP4zN22ua2FdjHc6PmwjpAzQBJu1uvhwJX7ScJqpqpQLz6jFggkHxnkbcfTjYhJeGTxshASJFd",
  "key26": "33BHtVhBYda7wD6jbi9HWpo1sbj6aVPpyzZ6TwVWHkMCrYumatwMULVsU75yPwR1rHy73ag52835BWE81BjWTkKB",
  "key27": "4Su5PURi1G5ut5zQua4Gqeu5SjXR85xXQ6avpq9mKwQigPzopeD9eWKroixZ2ouPis8fHfxMup15ffbefPCiqYcU"
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
