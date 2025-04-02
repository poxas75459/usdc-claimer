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
    "2TzoJuZmAFRWS9CJBnuCdYAsHZA7honntB12wzVrJyncoJKkpE3Wkqf52ggAqk28JSzioNPBq7CJK8FyUEMs2ojQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pkztpSmrtBYyHk7PaSZYE2ZLW83nBquSvr9F52rQ8VuYFZcWZRGVo53mE9UxMxVK892CAGNPEi6AyeUhjoP8i55",
  "key1": "2yqsRoi3cv1UBaW8y19bpfJrHoVhEMV7vVgXhXrSxeHRRmFtrN5nFPL69aLS6vCae9ugnJzstgT2t5rUHntVkpsj",
  "key2": "4sLTjt4RSMBJFgRPTVjdXXqrtXz7Gq55N8ncDGFEAfYFYwJkir4fs57UY6DBL645tMaPrza3CwCuhyv5XdNktpWz",
  "key3": "5g9drj4rKpyWV1zGJEkq79kyZuWKid4Zh1XoiRQU5TGEqP4ExHidyLxPzccyYT9A3ccsEfdA9VT7PCqEuFuc8yrQ",
  "key4": "38B99ptHf93UXwj3P16hfLmTHbGDAKFBb9GRVcCkkiWgy23MrfdU9qMfk4EeUuGwhjxtfu97FPYMGppugFBU7EZ8",
  "key5": "2KH4HqZC8hKshKYyNYunvEzjRtMppoyf2kia2nFc3V35mEScY1FpUrBNVU4cNn28N2uzaKW6k1y1vprfY3wsui5f",
  "key6": "5zEF3bKd6QuGXWP4HJmvyqKarM8d7FSkJfbYG4U68S6cj8XceK9PQERTeQbDxzam95bBMyXLzk2pB7niR4CZySe5",
  "key7": "4drrkxfncHuyfbBkAiKAF9pTYsH4b7JYu1KEATeBLxuL4PsnCafVeAivnhiVSUR1L6rZQh5XTpijh7QektuvB5dw",
  "key8": "3wWgjYeqGGnRmd5ugm9aPw2zUb3Nd8FaKYWdibbNJfJKETxzBF3uENjfPbpVC2U6nMvTG8pt4KhJFVYoS5FHC88w",
  "key9": "YoCv3goef8bDRLqjW3jzownkXAtfTGzwhQcsRE2SAqDyRq7TPQ5CoDQRCKDRS8e9TGa7NNjhhrYHuiWmFV7CETh",
  "key10": "5qMP6AgKix8AanEKrzRMBAZsoweGqsmfKenmuGYjizffDAq2E6rqHvD9JUoXAwqJdmdDwjzDFcbe6NzhFXSoMRFQ",
  "key11": "23pjq9PSDewbmWDHLSDJeiCM6MuSvqTTdWNTq5u73ibxHZc9J4y4zKgfEFG2g8HeaL65n8QPw5ssyXizyAVSnKU4",
  "key12": "4HxXkPP3GEpqnYxa8CxsEYXMZBkjKs5Q6odDWPRQ1N3EoqMCsgfY4CQLS87GZUkUUrPvn5LEZYf7CV48cy71H9nv",
  "key13": "2qB6tRg1Ne7Z5tqzZcu8atkGYNiApY9KYBUSH2sZMNTJvhNPmByE1cKLGDMqZijnrmS7NodEDQEM1cgwcivrc8ny",
  "key14": "5gZ2F7FcniqxzrW3TYGYozHDNLvWLKuvdGs2hwokgDEt7154Aj7G55vDeZHCyJwucnq8RbUdFrGb13pudRQXK5db",
  "key15": "5RpQmrLvJmEx1mY48qhBydtVFmR9dDLTwmAiLVyB1dXgiK3Rk2BuejkC2B9pdXrzHYCuWNe7uuEyt4MJvmmGVKc4",
  "key16": "26eRM2CYU5SxWwUGQWk3u8mjee6PC93aFWhcxLs8TQsXadG7pppTjdvTYDnS2aL3CqHkzSC7WqcUUxA7MfnGR23p",
  "key17": "4HySB7ipg3uEF1m5uqLBdGLKjRgf6pp18PLkHVdp4HzMAspNV3mvoMssY735mLEugPSMQzTEGXWayBCZtjxQgMuu",
  "key18": "3dKLKkdBAMT47HU4jdJjBUoXKbLYtMnqvABXmpEa4N9sEoTv8ZcYFwaK4CVm1HwLAth25qi7Pv3JxN8GYyUZCcpp",
  "key19": "2x4qDrizj9iXG4poPu1ZfNv37WN2SUMEKTxHErKbpunz5BwNMdYyHkvhYwcSUWv19nsUyR6pNyYtEgNn14gSy5ny",
  "key20": "xj4eEUuuhdHbyd47mSFRyGaxUZSQd5CqG5hw2gxFBCsLwLKT1xD9p9cF7DTjDGbHJRqt5xUNzasRxXFebACcJYf",
  "key21": "ByhWd4TNbShturVsHcgfsAoLqhwFvfyun6eubfsUwUmmzpmwH2CAUzBnXpNChudHeKw1eNNfVnVJb8Cat1bvtum",
  "key22": "2j77fRGWXV8D5JyxGSE5N6rK24onUhryrGDidYmBRWe8Q3nYTS8R1assjREbku89X7GwFBmrLzGM9GksTUZHP4Uk",
  "key23": "5awFcdugRbrQZy6pPbQVokvj7FGvw1q78aEsQMHx7iz5cRERnGYpQtJjXNp6xJbwMp3JHquLPc5sqrJ3QtqwMFDL",
  "key24": "4th6dMxsZoWj89orKB2dtVcgVUWkBC1CMKmsJVBbNHSFabSMMAXoALjjVBcydqDHxq1FBuygBqmbFGCGzVGhJzAk",
  "key25": "2jWPKWheHYHpLYTDCjTouK2mMg7BzVJJWhkef5uUAjxBJtWGrTpb3wXBdxhxa6XXojJPEiURg8eJhRbo62SiheWc",
  "key26": "5vSQYQdQWaZYXMF3mdagibk53sTYf4R3SHHU78CAUETGrUb2iXrVFy9RnKrp1GBgCK8AnuamP9AQRUpKygVk54Cu",
  "key27": "4SXw6D69z2aXyrnoS1qs5FBx3QaVUKhg8azWc6yFuuTXZWbD2YYhthN3CCsR7TVpjxMe1KCcUAKmebWz6H5iQGNZ",
  "key28": "3yfi4LSHSE8F7bY3a1wGWq5Jrump2aEMiiLJbhSbjBf5iAs8gX4sAZQUNQmLBgFRrK48CpLR9FNTApDXd6p43M8x",
  "key29": "2yHzULVaqgU4sNMKgRwAVYSTfc33PuLutk6mmahswtGg5feNCVcvaxaDjJ9gL5VLG9Lbb6LeMHYtjBxN6tvqwDZ",
  "key30": "dfgdVSU3iCik6gLTyjUnqjva1cLyB3dDg7wJZR1wxWHmAPPnGTgG8p23du7NsUobB9FBTw2hHeS5F5JtzjxcZ6E",
  "key31": "3LkKftU3PXRiPF8iXjtMPGq8Rf3tf83HFrW9jVqc5kUaP19okKHxWjGPvYuwMfCEqVrGVPyxP9Pfm3qWxLPeciyn",
  "key32": "4tLxCWAmpRaUJqhpfTV5vRcVd9LTp5vnTrw59HeVGp8n1J1DotUn3wn6LoJ3UWARskwaUGVaXKMuW1r4VQ4r87Tg",
  "key33": "6vMBZ27wjcqomznJL4xy3AXmDhY7MvLjroVig37TBJnkqyeWzzrhsFei2or9wYL47n3VezFW2deWTdodr9pZW6y",
  "key34": "2KSLUrHiRv28weySG4E6sozrW7h1wcGa2kWBFCk3XBRDrEBrqkNM92VBxA6jZzQmg7NAPZFpmrtLqn3W1iw1vteF",
  "key35": "4NHGLtwr4APwCN9tQvF5RvZmZ4293ioF9EsDZvgthPsEGYcR8iRkUrYCPAACXVc9rkyTEXwS6mCnwRkvnVFSF3hL",
  "key36": "Uft72Tf2vgxGJZ4RXzQKRgdYdSpT2AwZZerpgYGKGW2hTi2k8aqHb3UfFk6QCZmUQwaBMhAcvCkARgTLQmwcc7f",
  "key37": "3YG7EpT5JRkFd2spNRAKJd6b9ePw6Qqz2d2Xs4CE5hdHx1ZN54eVqLUp3wkHawJ9e8t5Q4Nste2fFnMPkn1ABgvV"
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
