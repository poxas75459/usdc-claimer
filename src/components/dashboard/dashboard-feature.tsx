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
    "2MyB6Gd53z9as9iZYsS3J8cJr7XqgUhJ55sDYEKmVa6MVBDzUFmGjCBr3M1LBxctj3MbYdXwdBht1eLE4dh1Fc2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FEr6v7qYw2cVk99E7mmByoNjXpx1utriuG4bTWE9bvCoX1KfCRnE7QDRRtXuCQRpC8EuCpmhYNWdS9uPn65Kq5s",
  "key1": "5EFxNuPsB4H1kujZYCDDMzpqhDJoYVwNDH2TtiJpX8dV6o9R7ZTPvRFDJ9uS6anP6EsQkRpK7nod67PhN5izSvZf",
  "key2": "5Bq2vAD44Tu883S64sFkCKfrYVRXzWg9co6M3pjZqA1ZvmHuQBi2LSFSD2LQXHcqYEDrNQ6r3SA2WxiUJqr31Bcj",
  "key3": "5w3TcYQ9pKvLX8k9f7uemnCzFC9bkuU2g76iTYciC6cbAgaWw1v5xGLxh8Hz8pyxm8waCaxnyWPeFiai1mq9jRk8",
  "key4": "5A6Amp3Xno9H89dPFUoYdY7H7Mbspa9ycdSrboj4sQ7KGYpG8fhDngocRo9CgZemtXT4qbMDn3qV2yxkPC8T3kBA",
  "key5": "4xcU7xSAq7V4dW2JSmXaM2UvgkLUQiFnuC2Yu9Q6qVC1PXUMbC8tL63LPVZC9fuh9YLG5Q5nZU4fKau7YE7nW9BT",
  "key6": "pPRJzoKNEHnAD9x9diRR8bbzQk4midqbgyYfgnX8cjAhhSdGeSUXRtXkafsvkXEzUeY5Pjy8vxUXLQsC1CDkzjf",
  "key7": "48j6st5LyTTUk26uo4Qgkrv2VGy4YSC42yimNfKTzqLBFArZshUc12NrUcNX862C5nKZBBv3EuAQvvVyutsWyadM",
  "key8": "GPxLmpaBmHk9UcRYWr3yjNebr5PP9F1TMX8gY8Z4AmkwVzNRC68L5NbCXz9jCavjgJmqRgzpTNYCyZTEmcQMu4V",
  "key9": "5VyHSX9GS7EUnMXScgZRBf4JUHHDYgwKgr4XGbYzoeVbiYg72FD2v2eMCb5kRgcEpkehdyUZXGg2DA2hanrePiQD",
  "key10": "4dJjhND3g1kcGeteoMag1CWYWxobJmdRCw1aaLWmyNpfcyNMim2SKi1qA9L6auv67uTdGAwJn2b8uArNdqW9ufDC",
  "key11": "rqiALWDR49FrvdAY9HNubhkgw6zRpTKpH5LKsX7LM2ob3hC2aw3TaGAoBPhVP2svuPCT57hhmcSAf8yaUmHwkqy",
  "key12": "2LoCzyQSdczjmRPB7RLqaVAw8eFFYHoQvqxZs9PVpebSFuKbeojAM2KzL6avDLsCBSqNaMcCqtwC4ZJzYovci4YB",
  "key13": "sWFgWDXYF4sF7JpQ1LoJQbfkroVa2JqhgqhRd3LhwNExN8BhoPoozJNLERjdcDcTHr4rmNvkXJqLUgqt4iQSKgD",
  "key14": "5rVokAVJBBsp5jZdwW5tV5spptWNxJMqWTBLJwzdWnyGa4rMcwfAhfksBYKgVvmKXHFFiTykhfK9fw2Z7AxQUAYs",
  "key15": "3TNR835k6NPZffW55GLCnZfSsdigVQSpicJg6JFPccwMbXA2MXJNeipSN4qkRxcV54rMwWrdQArq97xFBFRqpNrQ",
  "key16": "4kHbPQ1z4QToZA8rfmLL7iwXw9tvEVgW9BKmFrCpVMT46KYtMEJ4S61SFwQ4uiNHCXu5D4PnH9pdXYdBtGbot4vB",
  "key17": "2eFSZcZ7nPn9oyXCPyzV91KV89Y8fbVCn8Lvp37Rc7irHGahUp46suCbFHujyx13yeqg6XyA3cPm1NJxsffzQ5iS",
  "key18": "25LGzXCgbcRqTFDQwWQDknFCpJTxLA35rqjeNpnUEFU63G7wsyzySZJBL8eca2UFAhM2Bz9H9gxphF7md3AHPa4s",
  "key19": "VHjsPegVN3b2HwzuQhMd6veYcLcceMS3mDi7qDXyjR3Qaact6UMmsTSctEZ55VMSjN32TaF4CxFAuH7jhVx2qZP",
  "key20": "4uVTZgArskB3iui3nDS2mxJhx1XTswTr3McrhZ56chaZ1kAGVNhtTWMf1DigsqpvGK1K73Y9o8UjwLnQq1Awvfok",
  "key21": "2GDLDQfr4Vwmadxi1pCZ5qtRvVs44RRJvBCwDJBwxSpjxU6bsJGGTDR3nmk5tr5FSaaHKXuZWzhnmPCm9unmqmvK",
  "key22": "51eLp7ijfKbwVVq9RFS5ZAAG912mFp7xgNqt4kJ3k44VhXC7HwoNYxGifVaBirGWZA42BQbe9xd1YamFv4X6s5nk",
  "key23": "Q1TNga1Q4Ed39EiLn8oYbX5bgaBAWkNngezZbDpRpqjBBzjYaECTdAWZxyB6FBCbRAVCLr4eCsPECCH3jgpExqh",
  "key24": "3Zxi5NrFzE12KyhrqFA7Bo4kcLMhs5fYYKdRZAip8vxMyFV4ax8pwxQVhbtTdxqHFD1J7vF5VeNutWgq6cc57vb8",
  "key25": "2AsePhRRRzm3GWBiNNdUcuY9AJNCJA7uokku1gq8v5QKkutPP8A9scmPozAMJvCsJ312Ntf2zPgJAgJLgj4Q2UZh",
  "key26": "5phTEU5uNrgSpe3HrNUuVTWtt84tR4i2FjH4BvxvzSKJvcZh8tnwgx3cn1ZY9krSGXkxcBNZ6jLpQo4ftQ1SGs8H",
  "key27": "41NytQhzs43gNqdP22Vhx1XnGunmeaQkqUZkjk8WMio9qgRKnpXftEUmbhYjcvyYTc8rAECbR86WDdU9FWuS4b98",
  "key28": "5N1pViZotfBf5r5tEAter7zuYuoFtVPTg74Y3HChfo4e9Aqd6YDyJuRQgoQzxanxq2hgJ4bhCK7qj5oJr636AVvp",
  "key29": "2kB33z9pNsmGASm25gMcWxwZL8PNxby8Sc5KQd4hrpKC6YtoDKUEweRuAT9FsN6qMkoq6jKPWB1i4xAkfRdPW5Py",
  "key30": "5gAjGhtbuFHAhvWvhfUPHtuCVU6AhmzurNdZ4oszM7pWJMAerKpYiVjdY4YEjLQpCoStHZMw8UP17WUsseRfiMGo",
  "key31": "2STF4LLcHN2GJR6WpUh2uLD6Ege6Yf3szj9ARjb4pL8cqK5NMSQs3p64JA3CCTzMNzBm1cWqDAFH22x8CLZwLXS7"
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
