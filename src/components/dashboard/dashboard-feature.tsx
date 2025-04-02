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
    "4NsVi9RS1WKHTRDrk5vsBpHwQDcxLf8gJvFSoKhCFHQitBcZKbDSJMsVyK3nvJFnb6RjTJQUYLNFUW5CD8tbZjMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bkdw32eT7yVPLDCsQBVUD6pDL7oigAraKzGqm9fbuY73r4LZXHMHNqQ6CgUwK6ucVXiRdmpqDSvFEiRDzqfnpkn",
  "key1": "5mggTy8oirNZUEjjEDYgzEdaynHd8wJfLq4fWdsvpsLPwy4SRhujHkHPnuo6BxfEU7dUez73m1Kuh4EUwQZn5WHs",
  "key2": "2oc71zjmFERWB2M68XHq4aL9ndtoLsxEzMsA9DYxCRZmef6DKVUdL6KhDim1yjQrx3vJfcfoT2ZZqpNHnjz7v8WG",
  "key3": "31hCPg8Z6rZkSCFngUmu6FqBteLA1XQe8isp4UByyZwqss68ynbNXb3ZsDqTgMChkrZJ7YNurn2hbt2EXWb2yUMo",
  "key4": "5Zd4WQJKJRs4pETh6pBJdayzo7Kop4BBpWjsovNCAS8Bd2J6W1arvqTPEdRCs9FP6XC1fF9HsCC3NjunszCnZpFd",
  "key5": "4xn58y4SLMZa29iwJf9q2MZXnQKQMdYwQrMqUxc8jMuRcdAVAt5obgnDrF3xePzVhPQcAH4h8UkWb4D8ymsZuDn2",
  "key6": "2pkGw8gygSEotDRhFn34QVoCB7kweFhqXkSfuwKxwiCwuNkwpCc2MYki4K2ytm5oWWb6KB8T5raNFriQJvRc16vB",
  "key7": "58QbNZtwvhCgtbFs4Fisp6W2fdMmZqRbZNjU4ZAUdNMejJE1fuUPsQW8NxjrkXDEc1nfmbvUub6cwYZ7t6bDoQUe",
  "key8": "855C4V3mmoC2mmGNv9ry3aUPwESq1ZGYNNB5k1DK2ZR7FM9o3YTD1hetvmsgTxrY9WjvXtDqgoGXzQEBdtQ8icY",
  "key9": "5gJynQEqiDDxXePyLxqMSLadTjZjn8mP75NvuNFptQkAYfMEoiufCSdf4WCGuvLPCs53EMEzGCYLCND9NrbQjLRE",
  "key10": "5VpZEDPjQPEjHbXbGdDqVfdnHi5TQ5fiqPygaZGNgGfyDuAEdeFJ1q6KR4922ghU3H5aVf5SJmRyQ5Jfm5hNQ12o",
  "key11": "2J5SzCtWw6FtPyDtcFbNQV8GZHR7gMGTQaNUfuVjCTbQZj3u3ftseDLAnE1AUedaiBN22grw4EUxgZfmvL7f339G",
  "key12": "4sR1GQzj7kBujBgajdH3nDyXSeacbw21Xe4u7vGfcgRSo7Chd8YM2fZBg9WYQzhz95D6ccX5gMVe9QbLPRiPvF6t",
  "key13": "4BsKNtT1xMjQ8MnLSn1ExYdVbBth31TdTMNDhe6XANYi3Nes1y3ZJtLErABwoTPaV3NvvFdewnojiQ2xoQkGGgsY",
  "key14": "5r4kSFc8cCVu4gpN9vpqDnfTrLZWY4pMRDVzRfYKgH15bWHcNUUPPnbCe8T4LT1xgLqbNdrM63mrQdm5ygebNheQ",
  "key15": "5chFC4cz76WGEZNZrMpxpacZB3iYsE4dNtKcdmQRVDtsQcRqee1qFaKjVEcrUbd6mgxaDufkcyqHjjLhCr7pnsGK",
  "key16": "Kvis3ycV4Wma5bsWmUftUHcU7ozYrGrFi65adpdV8mVuUSQRo1DpuMCk84ePhrBxZxJtnXZQusEAgni7Q1xz7p4",
  "key17": "3QtcqsYX9AFVw3PxZsM4xmehEoHyqLirQMGeSWyD5FEERHTgFpQ7uD3AHoQtFsfF9C7VGQtbTwWZjRifeay1oANz",
  "key18": "3UJ25cTqYerpkbb6LWcNS2PdkZRe34Bm7Ekk1qYgP4dsTLxh8J9a3kPjzBd3g3JUoh2Zm8PMqNy5rFQZyvri7CJ4",
  "key19": "4cQ77MhZoeeV1quAr3egeyPHd4epQcELaqYVbdCEaPB11WHqjjdu3Qp9HoVsqLTdvdKWk1aQVAnCb7yZNF5mQHKD",
  "key20": "5MYYaPL1vmDQmmgFggxnYfxYhmRSjf2KZb6ugpQD6eDAWApbN1VBvG7mGUGM58NH8dBtT1MV6AdJ1dL1ggpV87We",
  "key21": "3Bw99ioqQSntA1swF91B6QBcG4jbebBmWjhvCzGLxaUE17rxJXaW7CuMmXzdfFi95rfycE6GqWSMMKGUzW44mx9u",
  "key22": "2SZbGv4k3b8e3mDPtGmvGA5VXx3Px9CCtSpZCVQBaMFi4muaKXMpFV4gGSWqn46XqKwUaZH3uwgBPPKyAzVkhiC3",
  "key23": "4hF43S8NNa7Fkmwg3Sy5xtZPrXBgs22PdWc2PkiPmfZHN1uN92BYCSAM8TJ5dU2wjY3uSEygxVAaQxMz57sehtSs",
  "key24": "4ZXDnFU7CQYb3kAow1UmofStyfs9VqTB69u61Qs5h5rdGG2wtUMUiMWwoFL4RMePHALHE9nBX9HaSJSxNVMjoZtq",
  "key25": "2rNUhKeRPhqmNno3eLbq5twaqyVJmkBec8tFq6sEpB4DyaXywqUjQGtU3TD3fDJ2duDHgu8VTeV8vPbL9PW7BnAr",
  "key26": "2X6MnivtZsoGDGixhJcM5Q8iEnFipkfS8cJn8N1odVJDuP31Q5UWXtE9iXnEWPoD2uboUnKTt4Vrz4rPWadqcs7Y",
  "key27": "28aWTYi4DyhHrgJA4zFv5k7Ho2cMBnJMvEBCzxM6mJbRYnRGAdkR652x2yQ2Z6LocRXAifeaYj3ZnvWFXViXLexv",
  "key28": "3N3vrSfgMfgupJQJPJfxaTFYizT7aRofwdTn87Hj8uXRoodzCfuZWhFmdioHMscqLn2YeaWJNM1G9LtEB6rdYfkN",
  "key29": "5NNSVMCpKrhwXjTbDjo4c2RdeEh4nGtGL9X1wbwCMdMzGw568fBYDhy9jCJp92QAnBKc3we1jj7S5ZFvruCgEjsn",
  "key30": "5pHzyJxVBegEfMHFgLtC6QTLX885L9HTm3M1Ck6id11z3oqqXrfZcqU52hFV2UfvyBpU1LtXYJcCuFYXyBu7KLJ8",
  "key31": "3w1W2gJnBYir5QEhTMtDdD3uf9AhKbYsd3st8UZV4VRfqfJK4oWL9dFfhjygSAoMUQK3voqCxExKgKu1cVcRya7N",
  "key32": "3tJJnqBG9T1uHo6touY3k4R3uwLM4AcS4peYw7WHoaN8CxxWxzgo7r1CaBvBVYTAGNPkkiqpPDep5gjGbnBunPnq",
  "key33": "2UBpeDgF4KXFmbRFayNyiPuUuWAT8o7mXLZMUpj2raicXAodn7SYbVNgZB7gMiynatVJfGYTQtKoP2sJPq1ujWm1",
  "key34": "5UDSdBEchFkjRFaPAWavHGqdkVmQk72utzDPLx3cdFD2ymzJsLaHwyFTzeJAET6mdkdnrAUY49KQAVpoPsc6jduq",
  "key35": "5onwRGwUgfmjxXC6TfkiEEaA8vSMaWwAc9jhDQSDBBPnn9PKFBVueF5UtDKY8q9SKBL8hQ5DqPrvWGTTwwc8ADFc",
  "key36": "57n9bs47vywXkmmk5nPcgBwDMQJL6y6rFQ7MPXJhpPWAAi7w9ATmNQhRPe1jGUDurp4CmjLXnn45MFvvLBHaootK",
  "key37": "2HoJ3UUpw3UvSpEpy7CMLdJbaE66522qJ9JRhaWnooehpiFizeiSCKDqPmXQixTrsyyBNBzprFd9kwxEjkn1t5GN",
  "key38": "22WE5HjksX4a2FU7KhmZS4dkMTfwNxGw3npBKuxo6b5r5xtcK6qkP8ouyYSBPs7mxHDH9tX3vZgj89LsTCPxULru",
  "key39": "4FNTz9oCCEz2iq6btsYiqri3dduhKfAiYxvsk93aguia1XvVpyg22ZiARKeFxRWDVeimrYMzTEcu5wr1YfJretRG",
  "key40": "55wU9scoPN8DSh6u7fyqGnUHtfTbNWh3WmBryJ8mCziPt4fyBDXB5EP3HpAyNfihTa9jV1sHqt6kfh8jQA369JhY"
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
