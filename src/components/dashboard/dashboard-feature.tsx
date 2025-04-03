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
    "5FV4BdnkkHsLiu5Ag3iH3qbCrLribBAEBezhnbhDhScSj9XtRTbdY7Kvc1geDBb2DyVFyS5Vhdan8qmxh14ofY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UqDvESznpuLuYn5LdNiUcVhajWjhvvgY5WsZybBxwCKLFm34U6vU5y9i7PJpSgGbzDUFzva6kf256cZwTEFbfMw",
  "key1": "NQ7krhocNeYenBMEhkqUUM8zEczhZ9nZ7v9731FPnH7CqqKZYub9UAkaHMW5pckzWodMWR6UnzNGnCtmJtP7iTF",
  "key2": "3Qn9MnQqEekX63rNN2uMiPA2P9bbQ4CJFhWrEzVVY5kmL2D6ntM4mB5dyy8c615kLhfJBvtR3PJaVQca7EqZH488",
  "key3": "3pBhyFhxYExuFFuWWoqDYSuMQei171dATx5uqysG5JK9Xjja3iEDJLwT7yefh8EszHqX5jEzRXUqWbVgfvx1gMrV",
  "key4": "2wpu8h19cSTuRZ7wNqxr6NEy396kxRGoJiQsvU4xhjWaeS7bR76wiby3az7cfnPcZ6JNrfvGXRtSnRctGXy2nxuW",
  "key5": "ZmWAbVGDfm2yy2SrtE99fyz6y1RnM6xq6odQpnn9steGbKnPwW6nAkiFtJbETcWxgxaTf1EMWCX6Sp5BpEvvA56",
  "key6": "u2FG1ZHyKJMP8aMxCjZYWfo7bWcGuXV7F37LugHNuHbwFiJGbpCKg1o5AvMFjmNY31dCkDM6qExNr3MBsdWbvCW",
  "key7": "4Ttv2mLn9WJffxr5gCacXgWo46mxThC7RedSvKu5VyCjypnnCyJvtRtWKygjf2CjBk7LCStL1kwycbEYA7dJkJoF",
  "key8": "5VoTN1kCWo8fvzNNR7idFmXa5RHKR7n5VsbBwgvtHfcsnAactYR4r4DpL2mni65hZyqiAvT1AyhRhPdmJLvypycv",
  "key9": "5ZddcPC9goz4j8eiQ7EiKbPuSuoEpsXXy5iVVt9i8K6qNywUtvkq6QXuzS6WcqFhyRzt9ZhMv34zvBkWSzBmF89c",
  "key10": "4nc6qj82nhURFZybUQvyk3Jivu4QyaWXRJADzW5ZMFzpWgJn86EmVonfkdTch5GxswNa3nKd4v1u7FzX4qG4LcA1",
  "key11": "4tCmJ2WXeMp3n5TVjfycUDZQLG9mdk39NtBTqG463262YKumD3us6iUuWAQNoPcbH6sHE1ExcVSWbSQbggcX4LRJ",
  "key12": "PUVJM3T5E6Jres1aizG31W5yg6CBXeX2cKkrHSXk4EVUvU2sNEwihn5twEvCzc17FB1xBpjWnAMKmF8tm8URwUz",
  "key13": "2m8vHv4WKBZGsAB8tkZDCLt32usu7xahpecq5XgTwynrkaYnegxs9UQzb8BybjRtfZcrReTFZWgNzFeMmqVQYZsk",
  "key14": "4RRTTdRaShmFYHgb4H2ia5opXwAf1jzZX2Au1xF2pnVhKrHXv6WHtquLCh5N5WPn8eeaMa6kZwDrGnrVo7brGSmX",
  "key15": "4mBkkX9EuXTEeULS6DWa7eJqThmjeAfGS3aRUJGKpKoWfXARCcRsFbwcoZBR5zNMH7wnzwTKmBFiQNr3E1HmxijE",
  "key16": "fyPCvYzXj7S1cXZ5sgczv1itCVXkuYwanmF7pmPaipG8YavHpfbzEFsAmEL1knP29WT1PQ8F1JrRz85hTix9ge7",
  "key17": "2jRatLf5XULkMZo5qnpxW5A13DnT24ym3maubTBeNWEBfWJn34SLNEfuXkZhKmdU3XyrUeJ7RGWNw7xQRWniEBfb",
  "key18": "3BWrfxrmgGuuB7GYmvN5U5txxcA9VYw86hFARYZv5ZMqBs4L67ct4DtsSfc7atN8aYTG7kwMEShxk1jrTWPVNSMS",
  "key19": "ktv3HxXkfXXwKPvSyGiwrXka1mx8994saUzwkJVsxaRa7moZxMbMk6813jPQfPTCz3o32fQF2RZTRhNfDm3Ce2t",
  "key20": "x83QZ3EubiQFGo9bQ9gnEApuic5p7DWiWqNFcQpLEMvPmwNfM9WdUzJfpx74zorvJnpd2QkqBxPGvCpLBJnEhsC",
  "key21": "4pnjdVHAmtvb8BaMoKDFF9omZNS6jHq1kAzgyYXSzA9XUpAE44fjbPZXyTvaMTJ1YHEF2E6dFZpRpx6hQZm5ACo",
  "key22": "31ex6ksjm5y3fN8KDTZHndKcknK5YTZWmkzPmVqra1UpMkw4PWB3NxjJeE9SzxGFgk9SgHSzfcE48uvcwKpzzQwT",
  "key23": "3QiFX7HMUcdtRLe4TfrSMnEiHZNpMVcRr61c1X7vPB3Tfbnmy4hc9MfrwPWV8CS1uLfFuPHxH5NYwvYLZvH2QsMs",
  "key24": "sL3ijsidQusy6sMBoZnWU2h4a7sBve1WJA3ca65Zjc5MekqYYTKhsct9oNtyE6E6ZjSVVjCma3kmexKCXyu7tKa",
  "key25": "59E4xCA67n2WXcLBsGCa4DnPUsc3PRp1yrA3zkkoNamEwcaN9QvXGg8Hzmh49ez4mArd8RhkinKfRZgEtg7Kk4jg"
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
