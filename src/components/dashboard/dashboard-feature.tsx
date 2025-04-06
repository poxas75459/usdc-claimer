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
    "2oZViY6raLMQxX6VkNFBcq2q42So7ymiZa3EycHvzqFCvciCv5TwdXP5chEJBN4onWKccKuspvDFFto4CmXUyuud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bc4yeYsKKYnLRy2jYJJHu3uZvK3enyFJhF21dqa1d5ecRVt5XtLyDpjYn5htHLtGidE57aY3fb26cFVNJ5yLcyx",
  "key1": "25tTLQSNyWkzPAbEG9ZWQiBWMeNbNNXjNCoBG7QQKjGBvgEXPpL3gVSztUS3jq5ZUijUTveog8qXhXZChyQL3n3R",
  "key2": "5UaXMisWDzpFDy7wkJZWfTfjkpZwHbb4wvsBQnVVcoLcTysqiFGps1jukGSArCWmu7coVGZNtqcXmmqJ82NSDE6A",
  "key3": "4L6ami9Wsv3whLCa6hFxN8eMDX1jbxvyVUgT2TThH3WZzTy2DayqNopmH5UsXEkVypT7zwcZveHfF7ihHK6BHMCB",
  "key4": "55k5mt7SPLWMCVBE7epMXHmmrQ9Z6itqUn5G39HjoWythiSb7SQcCPwNreNya4KBrvdSLmHkvzGNthAdYRDohjN7",
  "key5": "4szBGjWhYgMYGKLWoYaVEBXYSwUxDagR8xMfzfjHdqFSLqWg18zmGqTgUXtU6FEEGuHTqsK35WacwYTTabHf2x9G",
  "key6": "4C8RhiuEZXVJCvDkdGFC9YN39udq236gc4jwa2j73gY9MgZN3kb3ncYfpsJ55XPEy9CZG6YrRWLqVVdVXG3P7XnS",
  "key7": "3EEUJBQc61cLodLJGKkVBLkooctUyBJ6yz2Ck5qt8dr2X3xXFJp74gMHUMCYoRGhEUnoxq37EeLUJjwj6jRi16Pw",
  "key8": "2ASCMHk4Su216fmCXSJpD912XpjmshMyGZPpd44rUr3n8N5RydLKzgkHbXvMmsAt8cZkJuUtzM2zmoaHxkfXUkuR",
  "key9": "3GYJtTGQq48EpjpfeYEcFXy7m8uVAwpchwPsbaHUYvQHwyR8wP3oDWfTpWe384VoZnRiHvewFJXnJw5Wf9SjDN4b",
  "key10": "62Eiy5fkK1y1jmnKfeMud3bRB5fMuonrKLpeAcWkjgBdngNTZkqBGf1cjcdbiDFjXJYi92m6KuyraWYgRSNC9zb3",
  "key11": "4MvYkZQC2dVryArZcMBjnt6mkjhy27y6jbgdoL7K9oxi1ojCHFdkWBr6sDg1nzSj5zpyjBwGAoDH9Xo1yctnrXk3",
  "key12": "o18H9b9ZpxLujxAd4ee9MSTbZWbB5QvFzQSEdUtYorV2DvsxLaabz893X1SNmTg73KL4LF3wkJRaTuexPWw8yFN",
  "key13": "4ANMxaASnMEM7N9sXXLB9rsURSSi1YCkoBJWfkUD1RrRHkByg9XWPRMbqmxh39bPsC8F6cCmnqRVowScGDFetxfz",
  "key14": "Xav9YKiBYCP5gqN2LxQ2CqPEig1fxtjmXrRrgSqwfRGksnD9UdY3ZVP7NaaC8Y4kKkPNDnQoYzpLyaYs44Fj5A6",
  "key15": "2Snti8GMUo1cSp81ksCJKnCyfxwv9h8AoGkdYPYAzHXfbCNwUYztRtkzC3fd2WAin1PYcZ2vkU52rR6didjKmNev",
  "key16": "2RnHDzHFTuLS97ud7CcQnp33K4pkZyc6c8qjsPimXRncrVWHo9Tq5uXrXQMaRo184P7gbTs3R2kXUNXkRXEkFjaR",
  "key17": "my1WuQfcxQSD6burKiSgtN5ipYkeZfqgJepZtPD9KKVb43Qt7Ak4QScfRsT51N9pCaf41u2dv9b1sGSoo6t3hD6",
  "key18": "57nT2TtqB3x6bBmRjDn94obgWUsR6KYhWWCebrrFmUbgkoZUcXDtjGrhKFdS4VrZMdQ9pzvNyB72qoYqwxCwtzox",
  "key19": "wxLGdAhaHtdBXS5KQt2PPXWC8vFgRy1qv3ukesFURY3jJUDtAhCMFg48XGbxiT7srkpehzB98JQB2yh6sLJ7ngr",
  "key20": "3b79vbh4HUsWCMGySPhi4kDh4vVL2FKoKrJ2AUHqg1nyn6GRf8F6B45FR7wBJwaic2zHVrnTsCvhoHTf4jMDwjCM",
  "key21": "yBZfKuoyNwyLm1tB1NpyQiJ8XMA4Duh4Gy13ST4jvjjFZ7xb74pnKtuYhxuvbrmVrcF81qJFbTUod99Wf386dHc",
  "key22": "2zejCbRq35Znh6oxotu3U4Vs6BEBTtPk8fihWCbTv3iygEoZ3gtBKsrKTXUavV3fgQjr5DatqwxFZEnHqBgNXmE",
  "key23": "2qjTZUGJop56GuSPMp1t79GqAY9vNXKmKpBbkogLfdpAENKHL3xxuJgxUDHxg4zrwRiVy5rh2yiGbV5KUD7ZeUgP",
  "key24": "2dDw7EKWfjgnubUi9mvk6qSdNruMKeXYmFUuPf7mwuiiKBwHrcLxgPWcMCxdYLNrLuqXYTTetcujfoqaCvRRQ6pz",
  "key25": "3QmMQ3ZWjB4NhSAKoamoVyV5pufLdfF21QmZksEmU3CV8R2Hn2ZDWnn7spJ95peCPDELFqz97XYRkrNEgoMKh84Z",
  "key26": "J7eMB9iU79kW1Jt1KkouoovGnTd9FLR8ZYaPZCAxdq5hwJ5Vnj5G57EM6UnjkHLxGw7DxJKuJaNgwJPum6Pxj5V",
  "key27": "5eBQiHXstnLQdRhy3b3NjCX1L6SgKQiahp8XP7uCLiiNb3D44GYezE1fWjNvR1ypZ5FegppTUar6E6es5tSQraHT",
  "key28": "2b3DKmUYNzWj91Q7s3Duo2CDyGEzTHt4nxLnqD5BcReNUtVxTA84gqC5ZLge8eCBhNAzjG4KfMSFFCEXbj7LMYBX",
  "key29": "2wr1bqNMrf1C6u4MvS18tAoBqRYtcpUGnxUQExfzZCQJzJYVgWj5gAEDQjWudG8vp3fxHLfwinvXh3swqrxd7ovi"
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
