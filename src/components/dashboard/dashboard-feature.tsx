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
    "3J9su5zXDZBGS2vYLQrM8WVmVKdEVErZNwe2rkA1QkND9dsqrHaCgc5vJuhva4EQhRAN9ewPF4i8RzFAgdPN7CZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nms5NUVF3gpoEt5TFNkx7sC4mjRTVbpC4EF9tvF1eXKb8ed8xCQqhcUidk55UpZV5MCDUgLmfwcB1xEsPxnwHtL",
  "key1": "36QZnvyk2nfU7X21o3ZNZwiixViQ4xRs3WxDDqhrNnrzBAt6UYN1nji3VnAwSSwoJJ9VAR9gtSAuYaxERVw21uPP",
  "key2": "4MSC9MT7zR4vNkQgAYKn6y2xnYsPkeHfSG1a4htVd3nEzjNGVhA81QFiNDrU2h9JhKzkGj1gN9ZZre1dK3LRy1ye",
  "key3": "4hnKGnyRWLXJmr2s5FpcezvgHzWeJMjaabqLySogxrhvBKcduKAYMmANz4JtsMb3bkiVuK7TMYaZmCd7HRvC5bFy",
  "key4": "ZgJpM99tJ37qiobMP49xZsQidLts2fRsv6DJqKaneFjsiQE49gzsNc3oQ6NSXXsKtYXANADEzavikyL3Y9SZT4s",
  "key5": "3k76hrAUnF7FJhigFvXXvAMKwEdaW3UzfmLiQ8BLZtDiPPt8hRyV828dywby4sea3UEJNCrZVZVoppVyKbtTMHqy",
  "key6": "5hQTWgpkLwjoA6dtam9U9ai3Cm8c7qoQ4JkohZ8oRLTSpBjx28UKkMCYDD6a3j1iUE9AxQnHoMAw5q3vydGcW5qL",
  "key7": "4BFCTjMiw4HvdRSTjiFB9Cj3PuD5jSmCBneED2kZFBTpVYAvCUvTJJvZzj5VwnEbDZGA6q45FDFAVgEG4vF94sZi",
  "key8": "4hVuaWJFsM4tuPYGuhTfMs5K1X9s5dL2KTmzzsuuC1T8goH1QND726Jgw3fNHLdjJJ7Jp3WEbqtbsqpJ7sBNRr5c",
  "key9": "2NLyPFVtEdfn8ihSv3KhZiDHYUiwB87gu3FQhsniqL6kubuRR1bu813nh5qYAcyu3L8WGfF2kqWaRiUuks1v3zZx",
  "key10": "bz7fUEHBt7Wsc492AmbgycdfhSMBzMwGLMLdfrmd6wAb4d9V1G3weyJUDidd4XBDgU4b7sQcLg7NFetr2kaL5jY",
  "key11": "5rcfJjkMmBxGJGBjjFKGnCELvPHwf3nhaNoGGNPBufAxCcoL5nHw9gGW1gdburw2YF3V71Ew1g6V52n3kkiiy3cA",
  "key12": "UdGQNGmzXSMTMcGQLZ9YUzsAY4bxk3VV58L6HNa9V2aeSFvobms28qeRCS6QB3sL6xCghE39WcpgFEFQtNrimqb",
  "key13": "4SQgE9iK2n7hd4LpZPjfe44qE8N5UL9vgSsWabPP8q3Jkwg7gicwDuSmPyQZvj9S98zNaiMF2wmR5VoQXWrLaNy7",
  "key14": "55Bc6ZgGDZ6fWVdy39yXCfkhiv3acjkDHrzHXB1ZWT999qFpNdbCcsiNnGSkdYktA6DrBHEmmekE3bgNTUTbkPfz",
  "key15": "3zdq448qNLDbVxFKc6q4mzh5p5QeeHz6HrVbH5fxoZzdxczaADtCEw27cuT6zvskjez41GtHAwwj7t5TvccfuPwY",
  "key16": "31AyVyGgkPXwnw95U7BQCPuaw3Wb6eSvVEhWFQMssW4HgRNetRtJuqYDjtHdApDkLZYobuFKa7WCM4gRWshuFkjA",
  "key17": "2KUdFz8VRTkx6qMHcUmSGiZMXS4osCqcAT4By93eHf35ojNcZXqKjT2gk7LPFuB4bqtc7c6dD5PrS41xeioLdD3W",
  "key18": "2qWYR1tXMzoUoExjMVgMeGG3NyhJrZgDuJfPZNyHDFwyvdK52r7CZHNv1Jv2CejZKsnwwu1Hn6zj2vhWW8s2Ng2V",
  "key19": "2cQoGZ1BmkSVFybujZ8o2L6vkhqPPKVHX52xYYvhb2QQfNGTHD785ESDpthgi17wMLtvHYhFZAVQMG3Zi8ppTXyp",
  "key20": "uVgP5QiXdQtComi3unn1NsF9pTHXmBXKSMXaZteDJyNHyNELn6qWB5yhM5TChbS8KB5gq8pQn6ckawEKkJgZQho",
  "key21": "26J5VqvyxXJkJN5HFaT9ji8eX8aKd5t89n3JS6hBDZ4gQ322vm2h1V6JPaMEpKakHCHeY8J135k2qDk7TxfkvGkF",
  "key22": "5mTnskKbtynVAzP58s9WiLDLVYG4ZUA419dT7pu2oPNGxGa6nssfcm41rEKdEGsg9WBKB2ApHAV8aM1LSAoqafPS",
  "key23": "3yot5xtMn1fS36SRVG53WBv2MP912SnnkCgxfTGZjt6hNvawgooLzVviYMurR5ndq8FBuPp1H9NgjQxeFRsabmzy",
  "key24": "38FSRVt1dzCi9r4sueZtgDRzdNAnet7kTLvM8kMNBiqGpN5QuFYzEqEtQWMF2pXaxsk8LK5VNtPCYymSM7wKcvZ3",
  "key25": "PefGDAktdU6yJS7tk2CtTeFYUoRBhN6pvUp3ZPNH4CFuzCxUW255W23S5pF95CYeC7BziFEhGDiokWJma9mVzDd",
  "key26": "3LGPg3CkzcjHGBRRpsRSYX3RYJ5GPfUtRPPPinjKMAqJczWsNTtEa22g77S9G7GNCp8eA7ifyCb2LWvNV5wuPKow",
  "key27": "5mnU922cEV72Krh92yZJrDHPpv7nMaZc1Ga3VhyuWCwuXkFcCmQWoNAw7weFSZSuQcns5bL9BMJbbzfzTq9PHH4M",
  "key28": "5XSBSJVwLp2h93jNkYLJXqZp3nGsqsaobwuXKUyTUWYJcSwx2y1MRPYF6e4VhWPHu4JoNBiyDBSJ3cDVP8ziD26H",
  "key29": "3o8JruWJAbNSP2h2awfG6uxiGL7C2qUWhk27UTds5xYkKycBDxJGnQ9HZiPt4MoqpyNT3UtESVcS4ysddYcw3BUt",
  "key30": "48vxtyvE6zfBbNs9HPZ97Cuot9RhKqf9VSpjDo7jwGjrr9g8L2oDgWJnsWkos3omWQhw7h3gFUhkQ1imhkYqSGx7",
  "key31": "2auEPJSxXne9rMNWeyLy8hc6MtoNPGCzX5Pxvfh63iGCE8qop5D1hSxhBHj4CBd4oX2kDfWZ8t3wqyvNELg5keEA",
  "key32": "4oDtAib3ScLKxn93DMyLGKwApxeeeYzsjDdqz1einw1u4BypnqsofpBFXuYZ9y5rS4ExFxabVEVTdArzSViDJV99",
  "key33": "3o8TpJ7USuqsBn3tShfguYcgzkxfHMyxwoDS98UCYbdmGvUKhsiewRhc6Miv7v5Lh6X8Yp4SF3NLKbX7FB37tL5F",
  "key34": "5vSLyq6dTAZ8yHFJWr8jKDibbi6YNWVArqg1KDGxMMiLiAji2VvnF4DRRhopcqRufLVH5rB3bv2WFkWm2Qm96FRz",
  "key35": "oXnGbANDUV2EzavC7VDbazRqUC45ggeChkUfjJCSLHYDy8PuTLUzrNdgm3w5Zre7QhWpHz9FqLAHhZv89kKUKNw",
  "key36": "58ZUN2jaz4KuQHbEGxmmaTsRX4C29Gg3Uy7oGizbDeeQDAJNxH9wuE53vtcScfarHRxBefb2cCPtZ2HSW3G1bwKs",
  "key37": "yEXH92GZLHXXAU6hxKuXxMdi8Tn1TXtoWGApxvPjmygs5gTdaWExzAskCTywKfLiEMxeaWkPj4DkHSFGdZPQMLj",
  "key38": "3BePJYvB8pSvyN9uwUM3vu9Fqy2L8VBFy1zjBBz6f9p3JkBFTQebi2zde6UUoY5Q5DfP9bcjpoAazMqkNCtyoSpm"
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
