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
    "5BDr1jSEq6XrcRTuHkEu8xmV6sSRfAc4viicY7fMjSCkBRgDwMYXnP7xWgCRBeSkN3jN9cwGjCP7KGrbv8YcoATg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TpK8W2gH3ip2ikoCD4kb1LAv7YgWFEqCazk6mpz9ZKJPsBKP4iGH8JuCg9BMLsmqL4yRpKMQ1bDodLximwpM2JQ",
  "key1": "J2BZ5wVnJPJN8e6DUpiPn3ordBuuwDJRvBJrnJ6sCo9WNPZ6J2FDDp8b2gYLHkZEJWgE6X2U91EJMpRAzqtG6C8",
  "key2": "2hPxSwMDJ58BHhGFW4hgycMYuzJ7QLPoZohLo1Y5pq6smgCtmAKsQsZxMYd3cyCkkhbbSpLquSovvFUYuYMsCSLQ",
  "key3": "3sjRCWS3DVDL9caaTmXD8c7erfuLquW2RnThNvVxrBT7vbNaHfxiWi49r3noErcRtPZmmJDAHmrZXtioU298NQyF",
  "key4": "3zW3M13f1hKQCRWRF3fowZ3R1y8d9spho91RmvcHDEba98NsU9QUezX2cwnDx6X1Tj8d5u9zMsbCUGMdWC9jiyNH",
  "key5": "3aVjG4XoXBmqHyCuFugH4z3JW3YYVjLiNvag6W1JNPxdqJBxjvb5qum5R7sD3gCXgwRJevHBNVoU2zs6sW8RZZDS",
  "key6": "3o8NCZ4mSqeScDbiFRYDjAiKoV3y1U6YdpoJw4rnU1ArcEheZmjqw6pHEgHRYzwSJgAiswA3STY8Zaex4Gjohuh2",
  "key7": "2McCSJ5E2aPxtZQnYQoagkiLoEGW88DrRmTWS3FZ9vob4HnKh4Yi78yt3AXraK6Acgr8xkNzqdzKk3eXXhaHZFib",
  "key8": "2KGxff6XQjdCShmaPvbjJKHB9q9NZ1WHYodRXc2v6WfyLP1Nk5zTPJ6kyQRfpW5wUwxNAa7WMz9Prxaz2RE6xKRc",
  "key9": "2g2G2hDSJkZihFxB43tW5LomRBK7NaAGjcs8A4L7rZvBQfHNXN8LsgL6seHZ9bVCz45nwN4f1hHLrMjD2unSKH1k",
  "key10": "5B3pTw9ngUfBnthSYL9Z4EjEWgTbU1eNoT1Do2TJQgGv5ftjoffgEdNNBebMARpDTKzKwRkkwxM8CZZxEjoXEMVK",
  "key11": "H3pBXtN4sEx2QQmtLS6dipjhuPJPj3s7eXrb33bNJQbZAFvXjBwB6dTd3TUJXtSFHBsQ3EhQSrrWERHLzawnVsh",
  "key12": "4U2RpG9G2LdvWk1gV8KcLgZcZT5PYkzHXy5XP3GYsKdu7xmdGKRHcjhYeXLxb55NpggR9pD14j856K2mHiJexa7d",
  "key13": "Xqn4BPBvapzsDG5TZiD8G4vxUwipCnX7cruVoTZfgHurFd9WR73pwmvNsDmQwF9XNCGfM4tVbCXiu6WfU3r8k1H",
  "key14": "4YadGcwoUqCvvKNfPdyLy29dEp6fddEMstsMGTpJUjfksSHo3ie8yF8XgMfkF4qE3R4c9FXBGKefYp8Xan4XM5Qn",
  "key15": "e1fjXrjE9mgXLx5X51xmLaWxLfr2hq9qanxMj1t7vR8urTjk1RNEoHAs8F5GMAzHbF1A5MAKFcBZipaFEinBz85",
  "key16": "5nLwoMmKnLSDNnqC1CTY8QVsxGYBs7Lw7UTaXu6YT6M27Ftct3NDXAjnogBVnUKL8MfxrjuFCcfPRnQiLD6PxbyK",
  "key17": "4T6auteRukoWq57w1q975vwNihd1FWdZqiW79rgbmQWUGZurez145z8ywzRNyb4cTBqAsMEka5wq5fCm3Z85V953",
  "key18": "3eMkeuTEdNQDhdc2JWS2zNoFyPDVbuhXSqo6teUTGoWn3GEDrZhNdQoGeSoCD4jVXPtr5UG7X2fHLdMx9R7h49G4",
  "key19": "2cp1Y6Bb37s2N62oZ96XD3nQHP3yAgmWk9jRWLe78eCyP7CfZm5WxX7Lr2ESTcJhpQDvbjjkssZdt9axQrKYmQKE",
  "key20": "wjpqUAdnYEUnugqmqWzSW63QvoEmRvcj1q9ss5MMMbyoCJSdzaXPxw7tfxFD39vTDa9j8cJvC9Lmg9j6tsstmLs",
  "key21": "3feWnAeEjL1gySoA9H5pP7FgfdCQSDrEhzM1XHiWJvYUq7aSTA8RfpqvEQmyybQbE6tZWvdReuqPEu5hwvMjnYr5",
  "key22": "2cWR8k74cEPsoDno24cwALrtzkSgqDTMptspY9zkQqv2fVc7oPL8v8AHzDnGYNB2kr7dnu5VATPuqdPRa3QCChi6",
  "key23": "56ER6tfkgDvw3k9FNDZBqdKyfKn16TwwBX5WwtZtFUDefrTQrtrDbGKFvHmQ9hp57vEn4kXygvkJbhBpcZshwNS5",
  "key24": "4rXeCsFSw3HkrTCknRSLo9YorPRY8Aj2hFn3VWoJznmhnFERoWqBLsjBtUksrKcwNpzAnqreiXNBb74Yn1ADAvMw",
  "key25": "2vpjZRN4TQiVwwGC6rsKdTKhf9xuRK6zic6M38YqNdkLGoze4ds13nmoEYgUb1oBzHJPcgqsDXGyvvrBpGJCCQxg",
  "key26": "byLq4KSTBgmnZwoUEGWvKb3v72nQz5DTEpyypM9z9M7VCBbUSFp7q1rXm73a5AMypTxdf4kNccyegTXLLH5LT62",
  "key27": "qNpYw4m2oiDE5KfLqmpRTdrTap7mzbMRFVrDbBntRKG8njsJJDKgdSGyybqSjX15xkjRxwD3wYhtyuYcwr8Nn8g",
  "key28": "2RSZLfQYHnv8KhnakX5NRQCeVjNNtNHgUT66PYGAZjAspAwY2dzC2FQqmCuHMdgAZnQq4QVit4Y8SfAAHBqJShef",
  "key29": "6bZMr71r3Z72aigKvC9oSkgbqaPmjZQyKNdoSpa9L2xJJmefeeJy8cHsmk3wtN3rpPjfWBkFGe2nEQJFndZEGT1",
  "key30": "qFjxS3icZCtkEvgw2nuTVTZYto7hT8cLePvsLCwfU1n8NLnHAidEFJxez1DC5G7dmWxY5hPLokMzNzV3QZSTS6t",
  "key31": "2vG17Mbe6Pd67FH3fZyRPGXmoxmE1kEunePkbUyn8fhmQjq6USv7SBi5n6X8AQDWvmwQ5FfdC8dXdbmFAKMUJ6ys",
  "key32": "4NyYxPxerFeX2NTqfK1wt26epKdqf7R6MjqQFcAx9vx23XPSBwHmourkcHeabUJ8cdbbgsMy18z9nxvXiy7XkPrg",
  "key33": "4VtSrLBTq1HuGF37cqXdS4mwtYiRjmdTVK9yfxTc7jYMfxGnSirbNxkBvTuMnwBvJQiwjkaQjimfKU9JeuotKF8n",
  "key34": "5ZrdxxR5LkkaxZf19KE46CeepdLviQeBuMYYxsnYRcisodU79ehAq49EkK5qgKDBM34FQKpjbCzHkwsc6CQF9b8U",
  "key35": "3Fz4xUuYMmnkcsQZ4pofSeaW4oeaFFwQtt5pLkDRFtLhVwPQU4174cC8LheTFgzTBKbE2gMrQzKn5vgcD3bzcEdr"
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
