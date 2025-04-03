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
    "qkxkWNrEsST9dMEuLhsDdBqEm2tuhA685Rcz4acxk3bxtwFuKt6vghwoGXA2ZpdKPpaeHiGRi5gQnAyLZWQJw9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Riv7ATxXZ8mHmQ8WqA3PJ4Qptmf57kVef2Pu72ZgnUZ7Hbhud2HLdAAkpSteADjB5ppH3mBWZWn5CXBx9Ehsdxk",
  "key1": "5pD8t3iU1snv9ccwfCm5pmnGuxVCUrVSZJp4bkr6nHT7CRQaX5a35BbLQVBwtoQkhSsfKqr2WPUZst5mzkxF3nXd",
  "key2": "fNS3tqUQJSCrW4gisJvjb2XbefjJijDkLPJADsii7FnZwgHUPx4d8Z2oXQJzdZj8rkm48DnJ1r8XJSeU8SwCqgL",
  "key3": "B1NJ1PAMP8urj6UGHNryPXPDEzTBKJQYryKuoe5ZY1w4To5z6jFLndLM1PHVRGtLAvDv9eU6JxpV8f7sQJMbadM",
  "key4": "3juM6dnWTyZdVWJPrcup1jzzcS7WF9YT9p2MfZ2vVg8ztoFkAYgZxBZXAuTELXnMsC8KozeUYygAG6MsYa3xHpHd",
  "key5": "5SwMKEQa5M9X1xSVK1iZvWPRBq6yGnpqmizHuRv1mQCpeqjDkM589N6op7k68weErM1SyLd3oFEEDFjSuGiCiYm4",
  "key6": "4aLy3HudGxse9Qijbmh1ANNXpTKfKCYjDsVoHaKKjPhsTLs4UtLn3hnRCHKdsffGFdEeEkT9EUEEd3zMagcyC1Wg",
  "key7": "4mcUHSwX9TttK43rMSsanVwjrvqxQz3esGXEb5KiCg5igGjeNNM6VWixBCKKCsoLCsrLS5EboJ3xA33YQVwECXNW",
  "key8": "3y6KCTdg9W8KWrTrsmzBPUNEmk1oFjyYYTebe9bp6ZAURgvmBnHUomPS9dgWJYQt4qrjEh9qEwEG2aAQ2gkSK2pf",
  "key9": "5MinDcnJ5xzJ8J3858fjADB4sE8WkyLE6srGx1kEEkAGtZPXWv484qqztnUBM6gRyg3CK1xw8qaS5upSZU8ugpcb",
  "key10": "5Paysshi2cTttMMEK7ceSxYHLcpLVVcYisgWmVoEg15Xy4KUPmJ9h4e5KTRmTpp9pwGY5kpwDVLN6pdCc3uAan3K",
  "key11": "5LUoYCEXen6sr5XmpjYLPYeu83811p6jkTfHJFSHPGzQCgZgVMtpNwbPbpimR1euniA8neqWKvyy2A6UNxjUGcBt",
  "key12": "aorRMCMKtTrN2tGrg3iHSYWJqdWnH7eMGmxXUxoDRNrBti8LCph5rQJ57ud8LjZvAaSuSWNufdWjuz568GFuu6r",
  "key13": "aTESZEQuw3LhNgjdygu8jZWjdh7sfRVy1GrsipL1s9b7EaU1re3bTicJfRdy55uXB8DYzkBh2K2SRtqDGNe56tm",
  "key14": "3eFhtk6P2iK45ZgdGJmxZEbvLx8wbAkWJpEVwXxPkXG7hozmqmFU1RSSBYcM8VsNmRtnK1fw3uk5rDLAaGBjEXrU",
  "key15": "4HHzgwyEX9DnXPto6W8p64PhednwoL4PWJipA3PtPKdP2ihSNv3hLHi1g98fS7zcR5wrnLZwo9d4eiG8mTeM1JgH",
  "key16": "3VPvYFVJ31GpKPxa7CBSTAgLotEpGLAen6JBsUfK9FGvzHjLomFyyWFqrRxigMmEoxQR55CHPnxhmUF67npPnZSi",
  "key17": "5WQis9ksoRdzV6AzE6jKLcxhgpTJcs6LxF364u176yK8M8TpiuG3RL3fEJEjrsh4XpFb2XKT2UzSeDHPk9XFaAUJ",
  "key18": "24siXZmXkL8VLEAJ6fYpXNsfsRLN4VppPP5CUEQvVR3NTcZKHZV4NXf5V58udEvWYwXNYrWz7XmN4X56TumthbP7",
  "key19": "2DwKjTCoZhQxDfgjEtGbvPNdkqjea1PSB1U5MF8DvivyXzKFRVTqP4BBKxTQoFK6hCP8VqTESHr58MjmPEeCiWpP",
  "key20": "3ykPdwX3AGp67LEGGLAdFu7RUbRbneYEq7cqL6QiXJJWtrGtRF4zt7LtbWRZVG7ERkgiDQ59npu31nmukKpyZJvm",
  "key21": "3u5pGrYXezbotxMC89X8GKJXXxUi9jHUpufhCzt8eqFDTDAeKxcA6pCrWVqqWEK7aw3LNoqYT1CYkbVQ5aMB1UEs",
  "key22": "55aYuWLguFzFcHbiA3Zg7bxvBTqTTWeX9we6s6nwY2jecZLocA7v53wHeby679tF1xx3rpaiDFANaSHWDtJs4rnU",
  "key23": "YGhoDccjUYqLKbzwGgyvBwNy3BbFhzEhQkQ1iRvxaa2xLXNkxRjTcKUNpBTjGpmhxYukCTXutdsZZFsyqJ8LHHz",
  "key24": "HRCUvVGah1cvCbNGf7mwp6KQvkW7Nu6u4KrEEy7ZaWAcE8Vws1bw1uGUKocpKJ1A3MRHJqrryYufXkaChHFXFiK",
  "key25": "2ogVYgu6AUehANUrGyqs7mk1RXk39aWjDSs7yLhP7CoggdRX72YfTSwrKWA7o7BYT1k6BmckERTnM5Bzx9t4PHis",
  "key26": "4SqpgESpXA82so1GuZQyQxEo21ErZhB6hQzquz5oPgWM497yywdHY2HD3LYzdY117hEXBgadnt3uPC7KxHqrdtzq"
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
