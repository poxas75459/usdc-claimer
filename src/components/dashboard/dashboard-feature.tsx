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
    "2JmVx93hKNZ3kYrNmSiFTDCgt4mfXFwu6VfSd14rob24tGXgP9zaFjhq9pw7oed3LfzwYuxcj5BJxxQJUhFnXk7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qkcxxyMVFWTGsUKmguLDPgbdkUTeyWxwr2muhegzAFAyZZ3eCSH6ybiq8HnRFJHmtVEctoNS4u2SPgX5vJM9TzK",
  "key1": "2arRnr85xppqCZc3TaCEAY5LA5f5qtv9VjmeJwkm8au3uYJiqy3gc3KVkeAZx6gaG6NqEKx4xVCpg92ZZLzD2eS5",
  "key2": "aoPi9R5DLYMLQNv1ajswmQh6oppWSFJbvC5hX9BMZiZzAoGmS1X5pJaRTMEzrVTxSGw5YvbKxCRvBBRDhnMFrrd",
  "key3": "2yrz5YeKfy8tWECzUHEJzffMkA8XoN1braD8LgaRfD1mNBfjUJX83k9DUhTS38FXAfkSVsqaNTPWfaai3J97Hzdu",
  "key4": "5GU7UvJ8SRDQ2QDWoUuizTdrYt4mBCeR85huo1VtGZGY7JMjFApcRKtaunARTJfJaVkKDvm2QXWHzmfopus6wmeM",
  "key5": "ZhA6CopvfSRUmZ9BwqKLqsjV9WPDX5KkgsB1ZbuNeT29FSz2tNoGq3nojFKV7YbWr7UfMvUagfTi7gbpQW6LPfQ",
  "key6": "47NHP5QTLZDMPkJs9tUK5ptXWkTeBfkzPzMF6Fc9RFdQiwab59sRJdxiiLjACcea8aJqCjymAqLJmsrG6PpZpWrS",
  "key7": "4rhLjaScudMtjsoHCisp3o9f7kM5DqeW3HgeA2SRqi9cnejkFYkakq1nuzvjZBYLoHVwopiMmFdhTsuGgmYXCRQq",
  "key8": "yCbjJe5bWtd6icvhTRTNzNtGPEney8YH3qA5t7Xb3oCKMW2RaygjPPdjUWYgdo3nwqLyDc1xwJppskGmMuwU5Nx",
  "key9": "3xNRv9LZ9fiF3QKYBSQZjueScKincGbAUXhm2vEPEFGUqyAydyApfzFhsRWQ2aYP12vFm3hZGX5DSGT71wUtDdxs",
  "key10": "3ZWeAdmho5MWodc189UiRui9a7j51pfwiMhJXQ1aoNfY1hp12FG1NULmUgQtxYx2gDZ5LprBmYtJTiDRmGdu4E4L",
  "key11": "39ANRU9BMLvtmrkq433Yb5FE8EXBnrE8LNNUtkgafymkvmbTFLD5FyQzqRMAzm63e2P2bgLo4tLt6X2RJMeHUdLx",
  "key12": "3VCDkd9tgiMUqoEd8otxLUuyZ71xjsTaLdkrQgXRjRamXiHbMGj1txPT8Yau7JdkZSK6M1drnf2wAMC47HpY3X9h",
  "key13": "2TWgnVb3MphexzpZTRZfk5M5xZ99HwFFuXHjpJ9RMP2Vm3cW2iSVE1NAB1CvMg3u4kDaXp8XtRVnqEHuDCzqFie8",
  "key14": "HkJJe81y6DY5AkWYpLxxdk7BMx5xzjULAUrQqppmsgd9EHWAVZpDRpNcDiVa97L7e62yi3Koc2FMAfii71m4fsf",
  "key15": "31rka8y3YxpKsEFUYHY5FJwczdSha2ZpB4yE7Hqtpgr9XjV6cS7BKUX9hVdFPMFNpTdKVGQtsmN16mZ13veXoZam",
  "key16": "7rC4guK2zxQSZ2DmEqF6TGGgY7pryYhf6N3Y5pQ7BPx1SdDCVvirrMB2hJnxeyjMM4AByZ3n8csVNsMusai5eCz",
  "key17": "3PSnGhVD5PZ2PtRkTWt7MycfwBGkAcV7skwmFRGPGALXBjgJA8QHGG4djz3YzGVfkp9grig26Xd67vZkBvNntJVR",
  "key18": "mBK5mG4sbQsXstQ8FsGYDYDJuxy5pKNRDYFoujvJEN4s84zm4vpdjjGiQQoTiRKU4AxfJUddQgA7nTxk45hu5hY",
  "key19": "f6w5qp6iDam1WCEdBRrfZArbZeqXcrkjufrC8e15dxH56UwjqxsSj2n1KC8ATSDNUcr13YaAAU4AwxwxQ8eesYf",
  "key20": "2Fq5xEkuuKYhNjvd7F9JANvNpKh6jp9oRdRNAicRzsVXUTfvn7dzvxZAKepq1hr5qQeFe7c76hVYuA8UPSzrbHps",
  "key21": "5Vccy3xdENgCratqFtox79JnqeMzdXWffEuDJDd6dqaX9ogsrxgNKHgzHTVG4VNtqZZLFRXARD5RrGXwMQb4GqUd",
  "key22": "2SFHmN4C3y3orWhPnXphZFiLD2eQnLYYNGBPeJXXmM3MQq7ZWpBTxhBX7cawiZdqTfNY4mKBhAwf4TrUZA2VrA4b",
  "key23": "5hXw3tRzsgvwtxwsi2eAJXHgA2RiSebmZxwkFASjRy1D8UPYqjtWeBd7mTWBfLbiRcrdtDjZgUAN7LHjGqQ5Q3us",
  "key24": "67E42r4y6gpmp7ozoigT7EmSo4YasdhMn9dhptgrKqCFMhYu8Wgj4raD7av8E3MuHMPzbJjrVhvSBqMeSPrBTUCt",
  "key25": "4m6WDN7suFmqo9PiUaHW9YR6kdr6yha9JXb8xys3D6SLZQ8p9BxmBCgaGroXsPDg46edgCaYjQLmcLvPvAxY51vb",
  "key26": "4fyeLsP7wbfRJPr9na1JkN3SwGwu9NtLDF7aPsZQBsAzULiA5XmojZyJZgsfUTM9mGe1Bidk1Jfd5HZw5H2S1Fw3",
  "key27": "46cxj3BtuaQ4KBZEz6aMhk6PF8ZnySa5ZqasGN6CwknMfx85GpFtmQE3eWQzeuAjZG1f3UKGvCjoTpEoqWxsPTfR",
  "key28": "2RXiYFhpsZNSKr1WYomNXhS4cmniaVuZx1giLmc1jvSrA8aVxGpvfGpjK9pZLmQKn4mRtdh49zkuuZYebt6REEsz"
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
