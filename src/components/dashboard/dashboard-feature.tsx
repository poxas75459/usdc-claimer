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
    "3c4B4NCCxS4eBjeZTxSTyNTCjP4qFgFgMFDuXp8k1CjrumVXWsThwUfYBYkeCb3VvMueErWvKqzeDmiDyrfraEnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KpDWvKHM7RXJ2neGiQ1nR3HjSdUh2723WdWPfQypUSWYURCxKNfMNAACiGg7mqoFzha7LnB73zjiDpL6E9h2may",
  "key1": "3iCARXCQXVn1gehXYySGhFrdu5E11UbBBpkqy1ZpMknNE9VvKNjt6SPRBmnmWx5ZxiT7eQ9spJGUXCPtExTYrbn2",
  "key2": "bcP3sN4tjpiDj1gzTDWJLP3Trcww6UNKbXZVEfzCs6SAQKgF99FubKTXyTRdCwNkZXZFmmdWz2R5QWFShgsjK5q",
  "key3": "4zenxph6LVAjC9Todp6LyK8pYHJ8pUuRUjtdZzEGvBhAyqdDUDAav3UN9kq3XomgPkQxA8ktVdah9zY8mM2WZ9Cw",
  "key4": "3gaRTCgMFBAtxBAyzGM8My7HJRiypkt94dpvQ7WkacrP5dmbYmhGHCrBF9zs11WZdxyi1nV9pe7UeqF8SEWn5nxM",
  "key5": "5tFwyFyUT3fq9ckftju4KZAsMn93y3v5S4WMD1mYoQpLz9Rv6gqJLHSGtnMp5HA2p6zvArFEnEKzvjYXP3orTS2M",
  "key6": "2a2ZeskKW95U4FeJoQyvQ1g5sR9jsypRWXjSYFb5KYbseMbLdc8kMSwGDcpXWzgbZP9hdbCwWLgyY4D2gXBCzVor",
  "key7": "43sdpesgrGzxBnzddbGBevxmpCL1JERyG7xMy8pXqpzhxoEJXsBfhr8EWkGTjPJQE6bYrRTVde5cWhdTh8zLpBtA",
  "key8": "B6LDitUMULKpJ98v2WrE2wkz7H5LpbJvpacfEPXWqvBp9Afhw3juuuEoxzkTWQm5iRLWb5rGCBK6zDqxbCuCQBS",
  "key9": "ZvggfKAMXJjw8S6XTkGJ1YTUZNbNP4jkkLmfS6DBGRLrzXpQqzrkAHAckSK4PfnRwfyL8bcN7egQxWVvCkuYtJM",
  "key10": "2z5GKU49P74tBMcHppuU58yfHH8SLXUbim4ytjL575iiJwoJF4y5XZcdpkuNW5hFFJRvHGLRaeDCMwMie9gj7TDm",
  "key11": "4447sqXnFThiyetWvKo7vYHb42NB1kV6thfLzeYnE5dRwy6My8sMBmZUoCusKkcMsWom9zAazqcP3HSppX1QesDs",
  "key12": "4zE2Hp2DzkHKJmAZ8GQyP6iCsk7L7X4a6V1txizetDSPPbJJ8nRYi9YWPHu3feqHHiQnyudMQ3EdtqhUbm6HHT9i",
  "key13": "zAKGKnPmLYH6MrQvzWj43xovvmswHsutwvb2s88f7K5FwwEpft6fBsxGWA5Ajm8B9XBSvAXeuy2piaVqREuxcp5",
  "key14": "3Hxr4VGd9DWLyYdUCjg5Mzveqi285Hu8CAHj9PTPLY8bUSCqRjtJna52S5gmVqtEMgNevtKkZjyfFFBb7Dn4qzM6",
  "key15": "57uoZj5SHGPQhuMQVwgARaY3UgYReXUzs1LhEd5R8ukBpsoE97344vZpeLFpnTdhZamqP9xPBLHwG176JMfqRV1Q",
  "key16": "5msngJAnxVwNSTZnrZ21siDWfxHksj1Ca4pKoQejYYsH9qCySNne5HNp3uWr9UFGaiPX61YeDPdwF9VvuCtfGCpd",
  "key17": "3JJMghXgbHyEry2mZJHgLqoTe2o3xqNCkxBNQwxFVnR1hcxKr1AKpQXxcjaV1LmH7btkm8Soh2tHCQbBDaLkqFug",
  "key18": "3wEW13s8qntYq2BBqVhiP3w7ag5avG2TeVaGXWDtpYyYfDgpaVzs6u1j8kuzqimiMn3BuU7exj54B9wVcvALXSk1",
  "key19": "39jk7nbh9YLBq2srSV7spSXo7uvVESrSPVjMrDifQtQCKdzfVuW3faZFMXqArJZ24QMcWuxUYto5SuiwgjrmAGfr",
  "key20": "2CHBB7ko1v5e7CebWJ7QfShukbuDWNHxkRWPWuQkRnt38jqSSqWt3StFBDmJFunxRAhknUmd8oZWRwVdsqX3spJ7",
  "key21": "5pupwB5dVG2zALE6ffRaMZGyxuLu1BjERQL4HNFuHEP7ibfo1TCp8NhPDHWHuTYQC7XMButtKAqh8wdeZPoJqR6i",
  "key22": "3gK9MZAiRtoaSXAHC1139pJayQNDWC3VHg3ZbnhriUwsJg41foDZ6KyHANJScRHrFXA9FLFyxSuMM7kryra3XANe",
  "key23": "5U4BFFi5t4YfioSrDpRyzdMiTCp1GbGs4C2pKfzdzVMRDdd9uf8fsk8qpbVKYy4ZsJcHo5rPmE5nmSjFxjxggAFK",
  "key24": "VqJnQ19Ccaut2DgFxjHZYrXzajeLNAo6gzoPvyE3zzbmFrcHyAPY99cf6azULau5Yg3uMk8bwv4jVNx9s366vR9",
  "key25": "3cEx5FrhcLAoHTsbWDHD5SsrgeXBVcPiVo97aRVJfCiVx5Xp74TmnTsxwck3EwBLvqnHb65WkhmgSAFrWVE1ceRq",
  "key26": "3kpjf61ZMQPzT1NFg7RsMLQYHVkhmb8HWT4PSgCxJkWf8UWxEw6BrwJPQBcjUqxrErBqr7iBTW5nqejA98VK1LrF",
  "key27": "3xBJ4rfN62r5byus91dH1ua8f8MYfb1JKHz4ysbL6E8b4t4LS7sbytXaHxJVtNFDpncJf3czFG2itJvJfUDCTjFM",
  "key28": "5n2dDrqmYMHbUCBBdS2H8tB73WXJqszP3XCNZRJP6wH4ybBXnKXEsp5PDFELDZHouk5oZC5bcrxec5hZnj8ukw8S",
  "key29": "XHyxxavCA79XpmE5PR8J3Qyn2Y2WmG6r515X4gdGvKf8U3RTu8NmxcrdX1wUd3eeoj5eBASYbZagRKfqxtUnCXf",
  "key30": "2UK28PLGdLcr5aerFa1JZm9trNqJ4wGfuLS94B1UTeE5Jber6vQX1iJKNifVYZyQ4jmjWQAbgnN1d3i26r46pXEw",
  "key31": "2VYponyCh13qnSUgCLrhmS84zX8gvX8Q35HJHCxrJwoTgyPfbgcYB6LfkXqiCm8gP2dHxbNJXMrkxpWcEZzbWaTW",
  "key32": "5SNzh6CkTgFoT9ETBpof6v1W276urNuj9XmWyjmaxVG2zdxjcU6AjdMe2kyiTDKtJvVV2eB74983HPrYpzHKSTdq",
  "key33": "59gHi5wK821m5mPo4LwkvBgfX7sWrUC5L5WVYgTfBPftdT16YB9gVwrc9EfK2jZAVttcqoj27tMhwgH1cp9rYUiT",
  "key34": "2Erx5i1T56qqosVg8SZ9BaS7YTXfzW9Tk6BsP5T3ZA2UXMouD9VqBDT7jnAXtocsWUZXUiwqAsHFW7KSPdz2pjCR",
  "key35": "4DBKTauEbWD4X3Wo6iHQDMHQRkK8S9Kv3MxqYej8rp9ziBgPaVZjAimhaS6d8qJNDWJMG5baBrdrSn4nWbEoHaAz",
  "key36": "5qDUCvogrJH6b6ny2U54VcYjTQk4BJNc7HHZEBxYSMMNnaDrPZjGJLj8TwpawCY2vzZghbjxdKFKWkDer8yhHHiW",
  "key37": "B2JwYW11teaDkikR9wapUJpxS42mZ3VCp7dM7TGuuhcEwDLJsxjmuUyVUH7CgV9fN4QgkYPnFHhHSVVhc3oqUSm",
  "key38": "WvwxZh8E5BgyGfMFjbSsG3vMeGkGpHAH31yrMj722aLUPvn7NzyKU3GxwWtjUpxrUPKpmoR7ntATw1v5T9XwuE7",
  "key39": "2APKn8xbhVMv59q6CRTDHkMANEbAjTprSBTmp36EWwwSSFZTWmoxSL2QND7wxUQo8ctrMXpkFouD6Fb9nsMN4kxS",
  "key40": "2Q2RQxzcaY7JGJbqATfXxgr2FAsd3ZkfnfE5UiMjv3Br45jRijyYexMuGtLjw947reTvM4oxEDZc4K9A9yruwcN1",
  "key41": "4JBLugCfduR2DJhRp8oUVWgnKitJQA2Jjd6WAtoiKGNgiZzJL8c17gLRVMXvXhWZmAVRRnYTDmNv3R7RbDXcNfq4",
  "key42": "eMhq2QHvSgQDWTrEiMHXF2URauE53mUpxPqTwpX5kboDtLVy4GbJvjkcV66nYjt2J6S2yAcTPAvPHU4YtGTBAER"
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
