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
    "5XxmBmHA3CfVNjw6JNXAGnzgrFwQkqCMBj2h8ddRotZguUpJBiV8oXGCfyYefMJhRVvBUCW5RyU7JyyncP4ybuVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mQ4PwZJMEnP2HTkd1hKRHNmbVZcAQpWL4hbUQ6pGqNNWxRVeahLK1ZKks4Q6MHdRxHpC3kw253mq4zrXFodrsvn",
  "key1": "aShBpGFrTDziVVWW8YusFgy8HxdFgAkfEXkjinTcs8QuC8L5b4Nu1yVxZ4N4WPganBc7cb9tVvr1WyQkz6wqJns",
  "key2": "ovEyYw75Jhhp1J8X54Akh1BG9bs6vX5CzB9EujcQ3EsGdXZeZ5sNPtuhRvbrchSgzxt7qEX8HyYYDMWx9ru8hPD",
  "key3": "8Nhr6kWs4a6UfwZjQkn1p49FuyxV7QtXb8vSewRTg5X6ndQPthAp84hPACD41nuPgdJ29EHRAt4uCbJyuBuGugo",
  "key4": "AEdrXdBMzJY4mrvMS2c5hx7TqGkFvF82nWWTfpM8C7pV3WBdpHk1XmKzYKw1RvfC5yE3PdjXPQazKhnZijCLH9s",
  "key5": "41yTc3QrsgAjesTSUrh4CWNHj7i1TjpUjv7by1jPo3qLvMEzMHJM6GQNv4eer7UV2Cf5GatqE6joXbL5ugpeEUuE",
  "key6": "5JVZoUmS3X4r95f9YWw1sksTug6N55Kr3ZNKRNW8aacfAad8ut2ALUCC7QHzPnnVHz7ctpmmgZvD1uakvd7WrPqi",
  "key7": "51ZY96YHjzGxjibvxUcbNUuSjkCtHVQXgQK5ZTiE3W6Jq2CCDZWB3ndEd2pkE7LwvF5Gm2YnBe2o4zz2Se7QafYf",
  "key8": "4i8bNqWsT96FShnHXGUtH1GYpsBxBQBw8UswAgoWq1onM7PjqpWUaQZNKvwpcd7DUCCbQCXWvnxfM53fwJRCfPzQ",
  "key9": "4E839tWcvam2QWHYecHt4TU2xf3HYh5pYS3b1AAsYcvkXPHkVSXNBhuDFxmqr4WgYS9kWu4m4h7jw4h3gszBJUPA",
  "key10": "5jCxDz7mGNopuaqYBGhJh6qppzBgiXtSVPkyRLnDfxDRD2J1o9H3DaVJsM445bACjrgz5BzDqHbfXA22mWAvsgDL",
  "key11": "gG7LqkpoKnu2ruRMQUda13XUtvmv3ur2gTA4gwsyTdJmd5m9TjrP28D4M4XF363a3MTTcQpZAgc3ieZ7uFNfYZ3",
  "key12": "2PS3d8kaYJYHekqRennMK6LYv9h1nBdkq338TgjuG38bwepdMjDGRuwHDQMYUXVHa3Gov5uW2vyxZskzEs4ucrub",
  "key13": "4ZWxxqhTYFSrNCvZ2QDBx5cM3mdJQj6UrXMRWXxu5SE7LeAWMP2JFT5cEtGdqtVdPg3wvoo8bn7KztB1NEBFz9ZD",
  "key14": "2LTuZWXTxsACjd4ZqPgHbb8rBoE2fLhKWAkt4Pf6CZQRo52P7BcoKGjHs9tezVrT3s5YpAV2bXhsUrHpHWvgJknW",
  "key15": "P2XaWfVuFCvA6z6h8y8KXpBSFvShCEmTmD9CcKBu1MXDkud9FroQQTZsT3gNzXkpvqvySZrJ19gsTeVse8t7WE1",
  "key16": "2WZLgWfjNDphXCVMz1qY77ASRZrTk4WPx324spAhmUfunoxrzCumAGKEdkdLATbXZaYvxK33pF6gZF6P5FtaqpPV",
  "key17": "cAEktk3Thwbggtquyf3iqwVXcdxepzoGpu9RpR6ofgC1Mk8vzhEowXw9wXbpg6pCm41cjKiedMiammQky1MJ5zc",
  "key18": "Cij1VdhGjYpYuzZT3kXX6UEfYehBqtLqWmbFngTtLsExcqdTWS4Dmm4VaqxkQd3VFvGWQGq4s6GV3SMXHYn4hd4",
  "key19": "vePFdwZKeTDXcumFHeM1hPWKj9Ma85NXAa8xYvKKLb7bf1banxV1jeWMpsg2qLdZwpzvKGtKZAXGXVMxXj8dQS4",
  "key20": "3TghBhDJvb5jFhUbKfzRZuM9eUpSkwPhUbcREB6Yf3WJjfjw94Qdj4Cvorbw4u1h2qFUuiinSxLLrG3B8wfpr4uc",
  "key21": "4Th1LvXd3yQuddEdGQ2qDz57zUrSMM9xRsqUqNg8zi7ejtnUM1Ky9Kgkc7kXnV4PT8JS92KByCAtHeq8bu38u1Gd",
  "key22": "3tyaQsbVFAPKpBMCJWjGBovgo72p46ofy2oynPug58rwgnLvjPARwnn34dBQvAZBrFRiLP5CEhuuYLugWGfybUTi",
  "key23": "2HQvhCvob9GQ81AmwDJHXxxiH6JN6gEhzYUUMPrK8pCDrfezLp7cw562vDcRxzQjzCbGDxT8v1kSwrK4rhXWkynT",
  "key24": "5VGH5SUxpitRzkAyYYasFP5eDoFv63MNRPou2V57U698G62A6KxDK8UptLzQGVr5zmu4cr5zcLK6TAPD7uFfuqYt",
  "key25": "G64j6oJJEKkLzMSe7qMP2PrXiyVXoXVn3zXWdCF6E4LhoxPJzY9U12iEZo6rBbKbt4yqVBcY6TY8Am7iz33Xj9z",
  "key26": "5E7gdj9Q3Mffqz65YcS2kitHQqQYcbtuCh7XQDpngWvwz86GEuoX5tK9zNfv9cWhspsUGGB2SFheANv13XpkRyxc",
  "key27": "2vmgaFpwtSmwF7d4JbYgFzEWRevMQLazb9FAd6gPiQR1r56y41TKPL1ZyoCvbcppJhXmhyjSErRKZi8KRnypWYWF",
  "key28": "2FY3ZSGmG5LjLmSK4Crph6r4N23GSgNgJaKi7W5C5i4xJFHBrYGptv643RXX1UwB96ehz7sPU1EKz5iT79EAu627",
  "key29": "5iuVR3ShKpCCQuhY6L8CC7WDGJ7hSErzjZBnGruRp3Hx6FpWz46xtaRVjkWUGwih5CgYY25eVGA2U8x4P6X2auGT",
  "key30": "4mUspJS7atZnbw9pjcZXza7Xr4jubugFJ1BoTWpfPgwbKUmpD2DhF4LE7yC1tUV1SY8v3WentthCBrA8LDWoURB3",
  "key31": "2huXpa8V14ohiiR8tGqJUNnfSBWtEWyg8bxqYiwdRCDrNZMR4zZ6z6tPbDc7qdMdcRdozLi1YCVjLSHwC2ChY1xb",
  "key32": "5AcmGiK9zZ7azgRtFwcJMksDpQpsJdHa5Hjk3woANkLRrzMYryffwSMKTmxMrimfcYVsZzxMnS5FomBFU1CijRgA"
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
