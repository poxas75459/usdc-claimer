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
    "AZ4kPb6oexXUPPTb6vPhey7pm1eRZVEVy3og9e8N5rMmFbNX9LF8PH6pQwdWTt4N3d9veGq7SaQSjGr2gVhpWwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "82mCucSeqTzQoWhqpmwW3FsQn1mickvQB6Gy5Z8etS6VrhAfsZkC6gYBbS3Qa72tomR16HhuyW6r8zS5sPJRSvG",
  "key1": "2UexUsA9EQ9XTSg5XXYLkbqVTAJyQUJNGQgSj1q7H7gucY6VzLoYuZNrAxm7GBuS99MjrNyLMgwP3Z4tshu2gjsy",
  "key2": "46NV8PNZqXDgg18e4Q3FLEQQHwgXkb9SKzJ7oQ4aHAwAq5EEYX5yXU1JDXBrWLVXP3hnutVSF6Xza9srvy9PMrXJ",
  "key3": "2QnFMC5QUTQtpz47ZXLE5ZUvzojD7Z7dDRoJwchHfT6GZNSdGVkuEZPwz8w1eXKhCnKzXd21517ASNFJtvGVLm89",
  "key4": "FscH6UZJFUsDoSV52yLR7dTc56vPBzDDVj5TNspVwAFhwTUdNncBHbds499n7Fz9TCfdzoqVpB7qYyGUSW7BmWL",
  "key5": "ztdnpRZR4sJ7TbumLBShnwQXVyhfYctz888UckBXXcsCmHK5vMZBDRx7uLocRqUBzcPttzGrxYJKKu7CZNxxARK",
  "key6": "3RGRf8V8Q9XnUdAnvhi9wY7nz4scVKrzcjwBBt1m84r7XqxtALdsCxSUQ2P9oePvw7k4TgTrzEyPNdS6QnsGXpii",
  "key7": "35QEUE7WVGeFhcG5LCNyCNkZp5pgNvGbzzHX5z6EqQbHctvdS4ULiDwQ1w3VVkq5xjkmGaJiQLEyw6EdsS7EXF8d",
  "key8": "3HLVJ7ptr7xh5xVJQkEd9jJSHGv98sZRWuHGqHb8xAdvMKTgjiqF7YU8Jga6nehLUmnAkPxrZ6mc7wcuq3baWNE4",
  "key9": "5G84S7bPKuJQGz1A29vNBkqp6UJ2wG7TBiVM3ovLps14FtmpofW1babaqWmhZwTqawQQ61P8VaArQfF2eLJ5ht3P",
  "key10": "c2XyunFHt5LvZBMLv1gaaDCxu7fDbDwmieyowPc1Xab4ZhYhVLeGAGpFwZLfvJGMduPEEG2YWDqHZ7h9zdUvZXc",
  "key11": "5VwKc957vhKLrTz7TtuiSicaS9qLiHD8jCRGEVxTNrdvWS7QofLMxrRJanj8E5bEHAjQTwdCCWAnKBnVMBZXoBen",
  "key12": "5zm6KLroAPpQubvNp7VDbmtEHKWanQ3ZLRVQ7KfT24UJ9Co6jyn8HVuj6drXtSw4CpnZAoHKug2Wzk59cxw2gYEd",
  "key13": "3y7P9MHfPQgKKQUk296YsNUUjHNPeFsWesofY7sSeabbvd1Tzr1QxCy47axL2rh1K4ScFCeHEmMjGMNxviwczbRB",
  "key14": "5ekeu5GQMEXibgrhxJ8VoFonSuzfpvDx1p8t94uRjoVvX87Kr5TGfKuEGuMRBRutzQaGQnMQUAvG3eJwSmt3zCE2",
  "key15": "5D1FJFBfNhvMEtrLt6hQsMHhdADfpZ9j1W8FmHiyAgjGBR9BZaTkcdjuohKFUTHDHqSGKdtGvWNCnkPvb89329QK",
  "key16": "2obFCrySe8AZzEC2eTiJiRWpmfGFrAtNx55922HU7Wq7Liyy6p66B2BsJk5J9SuJB55ySZ6aBiFE8RCyzUSyf4GB",
  "key17": "8hUHgnYoCT9CndtBgXYqdDjJmvVay133pJw9L5dRGr9VCSUUGejkRceYwdGNo8TJEPSCY6RUwhT96Jv12mEohRf",
  "key18": "3noqfDB7YUPDUYVC2F1TDwjstcMqXxsD33ETN5UXXbpasdnyT2Sfx2qh9tbWQ1uu5vrPKQfwg548AQyyCDdZwM5x",
  "key19": "H5wKorA94J6pLPf7jw7tiBYNuJ6HJZ43Jch4yjfePkKthSQ6k5YmUFJ6NdAUfWryY8AhUPHxZQ1yKjfnxbCrkQA",
  "key20": "FmmtW9GbYpZf1iDvJEE5jBw7ALJwzCPiM6UCgbdf45xp6ut6xDQg9mGwHcH178jjsRbSF8f9nMiGXVC5YrAS9Xx",
  "key21": "1vMV8XTayuqRYVubwwDD8yEH6VEajyvR9PNqLmCKCVuSD6muFqXvH3bCKrQLTvpV4JvudWsMSVRXEqNVgk6xaiz",
  "key22": "24X15bU8mLz7ZixR17v1mTzVWPxUbhqJh1oCdM9AJGriWjdVRJr6q6ikRFDBovSzdjvEKdkCGFJEK55ZAduxLDz4",
  "key23": "3qte7FJECgGnRQCCjXhe6WsntJTC2VtCoBBY37qCXicuyk4CcnP7iamZH8PtAYGT2P6qnVihA2HT7NS4pHw91S83",
  "key24": "dU7xJ9u8yYrJ54cePQdpz1bwzTQjZx2oFahouWaB3gECD1ZRFZgUNDoy7wvtGk6KFuG4KCuzUsJigETh1zQW3jB",
  "key25": "3UcMfLH3ZRQBqMkFdT6eGnFwHszciX2UxubWspK2v5rjwDyu12RJoyf8a95ZqZB2SYW4UwtuRyLnqjuQwAWNwZ5K"
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
