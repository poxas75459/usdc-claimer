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
    "54uw71cBTpHv3eqPm2yVk6ayV5kgNNc5UbS2u2LBo9kLSh9k6Jz4pjPe352GWo2nL4VkELWp6Qu2oGDECaXC6zqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ikruqFS3Y1X8QBThu3ksYxagbvQwKfN84n4QoNCW9nqh3wWNdRR8NDtELshdsovZSEwFFs1Sm5BpTFsfEsujUYV",
  "key1": "P7bQMi5Lt96v5peJLbtdkRf1RHBfqiRCL6dLMEhJNFVfpPGwWcuLbWJsbYuzQYzgWsoyexKSQhGQzDL3xyXzSR3",
  "key2": "8iqHhAk88qrF1bGQxAEB6wRwo5k7aj5RxtuWsQcHdoyFWa33iFKHYR6YsMarB9HQKi3jtFHgQSqwuTBfczD2tpA",
  "key3": "2rrdUYJfpSLLsTN1rTgX7maTjBPWYpRdvBtvRxKVvE3LFwba5m1zWxNpzhuPo5kpkxNjT3KpoGLMGvhzY4Nb5eJr",
  "key4": "2aJQJG5jut8UXMkwmRATz5vnxtWudyUubT7SJN4PFL3ouwP7ZZgDV3gD2MDTXH4oDk9Vjvp1ErhoVnMzW1P6NsXk",
  "key5": "6jPHn6zTU5bAoFhWNopmbNpxjgDy9SJKTkonvnPE27vo9VyhDo9GpW3x7LfrUzavwTykousibipt14gyD5trF2y",
  "key6": "pVSMLRSpCQsmwycd7p2hVFTWfa9qfmzcCH7A4Z9L61nDMP8UDPP9vCSCiZok8sC8V887A2Rhk7ZhZExJEBmvdb7",
  "key7": "4zF4ydvp9YL2E3U564BLfBosv9hwNgtgMih9DZnpUc4SZwte2AnEzEJsazZCa6o4SFMWFFhWYgxSo8VdBQaGthgQ",
  "key8": "3HdKiRoHa8A7ASkvep531m8VWeP7sdUtGh8gKwifyJVkSuoe8oaAR2sP8HkN9KiPiwDv94pEBRYLLH6uvr6GYSyy",
  "key9": "1suGb1SCp1uBGtQDQHd4Z8t1iLS9AVvzr2Zcuvk3T6tfpjgCsYa7ey6axPcNhG7Qe7YcAHZNJ1eycnJW5cFLcY1",
  "key10": "4CN4WHHVHji58tHNdyaZQKrqS9tmju8EW1PUwAVKFEpMDhF2ybiCFuZxDU3vCEzwkhRgT88mqadh4bBVMGkCf7bJ",
  "key11": "s6zqC4JE7UwTkX49MRNbvT3oo14Yszt8bmRG9p6s58QqEoxngxa6iBGdGZxEhN1Tzd5SYUn3ErPUxQHqkdWr5Ko",
  "key12": "3TwtL6EkxJ4xDN38dBWjcw6gEmWwr8vrohsooyqU8v1wHzeyHehLXgWZgJxPtT3K75pzHnw6wruCYvqGecMfWk8G",
  "key13": "2MvVsDDMuRzjmuXnFiBKqfjo2sFnYhmHzkanTuGdNXCLbiNdZRs3sRZNuuHcz8c7DEU3Nxyqa5dpD9eti35Vi3AS",
  "key14": "4t7tACxgSYnvETp14hiBkHDwJABXKcxH9QtNDmLqDorE1DnW6S3miyZJSp8DeYhW48pCRTntXDfc4YqVEsjZMdFs",
  "key15": "5tZUhGMtUKPYuB7FjtK2QAorDT5QWdzzw45RXS3rkrjTc1ABHpdqFGbY7LkiXH7MBnL2wZ6vGMXobZjzbjpKqhWe",
  "key16": "5uSxAeRNDP1ZAyX8BszzeFbHyUUD9YdibXKg7vBoHYWHzmtf4u7MUJdSHtNQk6fKVYXGg3hj7PdzDGEyRVwu3zF1",
  "key17": "onrmJV25riTyMGqELfmMFVuCLFYGuRgeNNh1Rd3TvVpbR3AJzVbSMzfzJhWKVQM95CTJgiSF4aJ6T9RSRMsMMfw",
  "key18": "WutCTbxX6FBt8GWZppPx9Y49jSSpVcuouYxHjoXpkrrmXwH9FSbQcnM2xZmbx9j5P1vzi8tXQKak26hzy2J7A9m",
  "key19": "2LyosPNDMkZmciiZAyhrJt5YSQzhJ77HLUhYLwJjafmREdwEnXYP8Jk1bCvavXCFESF8WzGbfMBsDKycNc9PUSwN",
  "key20": "2HacgJi8j2qQLEf8d4LWTCD83R7x72G3Ak2zffHyq69TTD4wxkuxjtPZvnpLcibYLiMg5EjPVBxu9AZrhrbrpT41",
  "key21": "5TujNP3ch4ULYaN9icUu4d83PzPxcVcT397W9aHfoiahYut4etwdohkRH6xLcSZxoGPK62CXkBZr4g3gYZ3k4azo",
  "key22": "4cozxr1EqpcM5kSG58BhRgtaeoas6cBZt7qt2hKfy32nm7YG5AthLQS8GjHNjZBX5nkpYLmj4KCxsBLqqDPfWtqu",
  "key23": "Hms2rMafAMZ8BX2P7M3V8FSAn6JLuuMFxmwzXU8947igKmJLhM7kqDZmexUDZkQanRVMmdRNigdRYBsU9ZuGEV2",
  "key24": "5JBth7fW8BwoiyUD4dvc86Bs4Cya8Wn2ZCLbQQnaZ8Wa3tBAeVSSbxsm7HsK6RXcWKsG8GkT5uwvd6aR9UDQU9Lx",
  "key25": "65eGrzteir4PFTm9RsNfEaxS4W1G5R5eWPznH5hn8yyacT49jev197gt81FAB1aNrJx1MiuSpWq9Qf5vwyiupE3n",
  "key26": "31TN8zv3ZEw2ByNcSiqxwbxFaK74gBtARXmyPznB4EmLZpTxn9SpiSXRoZouTYSBfNmvHR5aRqk9KLyeL9jvHyoi",
  "key27": "5CVtzwsDEaUA6NRd8yEdJhWASrHv3P1MtJC4yvwLz3fKteeHWKMc5wVchcCanEL6gRQ4eSTNsCiVi6bH3j7JggcY",
  "key28": "3Gh5UE3mLS4YzJkU6rm5Av8cUaau78GZA7exTNNZQVVe7rPbP7CeV8mGJaPaox41iXBK6YtCZAf47tT2WY2R991j",
  "key29": "PSSUZHRmrEVhdBhk1Wdp2xrwDykhTMypVowdS8sRk1PFfhApVJJiRfgrV6rCVTp3e7PzA6rrcevvwJHzfTXrdMT",
  "key30": "26NpShCQxa4NGTaE1RmwGTSPUC5sUXQcvwVUvrSms89Cv4CxRdZair61ys4ZFdEfUDdC7dkz1HFDmJZGrvTQ8mpf",
  "key31": "5Yu2fy57aaKoTdswTdSWVbPcGxymm6pvZSpjbvwhhKmsBLXLGhHbaLirUehdu2CHDkpD5cqGfffm3SyDypFm121m",
  "key32": "61iMc1okpB2n3iMez3DKPQ1hqDicaFDeCsYtaiRW7gVBCxYikpW1nrUb1xq6qj1oS8pssaW99s7eWJFZwrRnCo1w",
  "key33": "5Yi39SEcXcyihaS3aKhkN1pCnBzo35SbEoZfetPTcqEWYqjvV8qkQ86HVQN6bBZ84rsVCMXw6ENiEsyyHtBuJc2g"
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
