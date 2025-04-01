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
    "Kr9YE2Nj6LWHk3JBPn9J8k5uJw1s8x5fjCbFVGV3pYyyBbrUSPvEpBsb6niZPp3DNByJ9AY3zbrkFpTgTQUr9Uc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zTnA5MhzCWFspC5z9omRsLF4sfTK8x6sMPFrHALqZ5PNVd7ETg6ZkXfH3t6nzxgGY5iuaX52Q6dUG6cvPF5tnyX",
  "key1": "3EMFuueynJJ9wxRt2RQxz3jc2ThyeF4hXCDKBGZ6yFDpz7prKbD1uqjk5mi2FJftWhWatzMYsLwsDaRvPUR92oGz",
  "key2": "2jdCCeLsfRVfWk3uHuiLuN97wh3mMe9R54yw1pr67acZwyM4dnxSxmnaDjkHVwqaNXMYqw5Nnury6wVemUVFdjvy",
  "key3": "5jtGF3TGwvmw6D6bc7xTNJRREhmoTuG55oUvY9Qovi43dtpHTuW6Y8fEAS51HAvLmMbpngWAmruPHdWMr8V3rmm1",
  "key4": "5fa6ggeKUjMABiPdPFeNpfsud9zCczhTniwYycdQ7NSp7UDReDYuM7CVx1SrKdthNGKLgyJQzJ9FjUwfEL9QmTTE",
  "key5": "LvTpG5mMAEPjX1zZzeCGPM7UuukD5GSoFWGf9bbpXXDgvNxx9PZaq1V21w4Fjwuk2d5FNZdW68JEDVvQviJYMUr",
  "key6": "52VD3SpT348CLCT6XeoWkX7gfDASv1xxXCRnQDujQoYc3PCwjSPAQmUDLzmXb2uUtYsiFbxe8ADfUiKXVKSuFJN9",
  "key7": "43XMuQBBtvctZbt5azM38omdwHKa8Pcagdq9pbG3RrmaHoKA64LzyRaXz5rzx1xyapLfEPoiTEEAMfVur7uMWNrm",
  "key8": "261wcGMVW3MsX8PABSktHhHr9HUvVUUW9mtbqLZ9mrxYUgTMjs8CFFiigEECzG3Wficb2TLgcwDx2EbwRMtkuLAL",
  "key9": "US3HXkppLDjUXNfZUNa6br7Px6n9tNAJA4t3rFxQuox5Sw83yRj4t4u4DTyDaNBPTbNETU6NHeYi1eRHnHeKdBY",
  "key10": "3ydfd6J1JiMmotdVGVBDjd5Nxs5ciY4X7YbeT8XWhP5N3GRrGLWmUJgopf2KgBoWWDNAP7xYtUT1af4Lp7WU3hY2",
  "key11": "47FS7be3DdPhGpjm4BUfeiQeB9wA6cSSWtdgspC5SQx5ZSimo5ToQ931arjKRf4QSv8jW6GzwP3XGmcRpESc6psh",
  "key12": "2vtzL77RPY9iJKbEy9yNYBR3cpyQapoZTHZpTRT4ryGQtGNccGrX9ZHmQmYQR8pCSdAJYnwJ7nDLPa5nJ7hmXSTc",
  "key13": "5zcbJmZ5LbZiZopBrsNgYQ2zjw3R81NgFaeGGxGK5LP1wdTtuguNAb11ZAwgbNyskU7P8LyXRVhixLKc9BdqLG7E",
  "key14": "5mpaBDtCmAaUpDJP42VA78EttN9VJ5xU7MiMsHmyEDnwtZ1e4UaoKXSwCBKLP8HdPh33ftdQ1EhoQtESsbVWE3g4",
  "key15": "ZufMiqNDYcweQPgie1pkcsggo4BziwpoMmY8qGzpBFCgCjnxaAbd4ewY24cXPWxTTcnku8Hq3zQ5C22ka7VzvPA",
  "key16": "4uXVwb6UbLkAanyHoxabgxwRhnznpgaF4J7y53okTzB5fnYNG8DwgQ5VWESnQYTQE1tegRh6fznR5aGixD39MQVN",
  "key17": "5jNHyngFeVjm6mVjxFAv1766jNoxVYVmGqi8Tuct6uZ8mdjgcMziizonkqutV5cnuvLoEWTZDR2arpQLXJ131VDt",
  "key18": "5Bity1Tky7xFkA7AqFM91U7WKdUWqZCVpdmBGDTpLfPD5euHvUzvxpjvBYaFT3m6jokpugZZgaTvkUwxgU5uZvZ5",
  "key19": "62qUCpvhWtTGZMkTbVBmzgPoyEjk5otsgp6z2XJfRSpbkBcTZQg1CyD9t7V8i3rhyB2c5C95X2tDdEvmAuaNLZAT",
  "key20": "JHYkTCjuApbSBpUdi6zWZou8ttK8V1hQRwMHCgBSNLHHaRwAXFqk6xdqEKBbnxHm5zaiMuvWmq4PMFd4eNvWaWM",
  "key21": "59omVPF9sMMwSKy1SY3TBXR22pwTN5YyzMC7epcdrDcP1bruEy8eTXS1eSstSakKYdNGN1pu9V3E8BNcLjT26euC",
  "key22": "2nxbzUaEKqVhnGYUAnrKZF9d7X6PiwzD2hmHiewtXkAZQHTYSSCYrVdfRtTRvgFQJUFR8zRiEzyrkhFLusrDTYWM",
  "key23": "5GeFgwCUVQ7xYTnPWcxV3vCpYRLoc33qNiLEauUWtD3Ur4Thgbq64dnJUdLsyUKrzi8CWijPx8ixWLwrxfvMzQXg",
  "key24": "5oCKiLFH3vHQd8KHiDFQWX4Y8B3v9pPWhNnDKw3k23aJmJ6r5BLqVzp4bmA1vBV4yhmZuCg4C14U79ix97utgzKY",
  "key25": "TQeGYpbLEkKgTUbkyVq5utXWmH2fmGzDofpAc8uJQsX9h6g2Hhov6woT4bRGGhwwk8LtvsHbuVind1re41tXKnQ",
  "key26": "5TAmjThRuFp2epNzWBVe9iYKAcUinTtevHHP7KjyykuCJ3zpA7JAea8da1xw1tAB6xQMi25rShUoSTdtzJAADHq7",
  "key27": "6P6T4dacjreLycGCC7oad4geyJFNdMsgYyGzgKP3eNtCuwKyEQUHtbpqTdtrK2VKjWumq1XGEJB44JWiSWUXYvx",
  "key28": "2antRMVWVNsoi2hQDnWvWVNdekVeKJcRp4KWv2bLHKPv4thygJD7JaEZGDpTVT9LCmmYzWxWQ6uDNBnuVGtcYXZd"
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
