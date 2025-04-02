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
    "3DrRReXCHgbv89ZhgE8nt1AdYyTrogvvbvaY7fgYrDU5fb8otfB5foKHNnBKyLW1P6TWZ5pCcU2VHuhLZtHDZEJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48KhPHotfsd3wKFWGQ8XQxNfZhs6nj2XJkHBBxEApQSFayPXagDRoks9iLgxezwCCfwfpRxX8ZVKK4XXzrfno73U",
  "key1": "3VpeCygR87xYHL9CfJZ1vNNBZCgWyFckM5ppnP16WGkvuHwodBgmd8JcqfS4npwD9SCJAXLy6yW4uvBy12FEe8c2",
  "key2": "5aMqd6ks4MQo4i7AEdHimZCF38dHm9NT59ZMj3e8anyNx51yUZuXY2FQBhiURJqDtsdauEkFyqUr7TAoa8ZqGwJE",
  "key3": "21yr1YZohadDdZRZwqQPawWXRZk7mLqKXZXwGD6y7YJY1eZziMy27wnsBs2P4rFDX6eLo5cfJzSZnoLFJvogt8Fg",
  "key4": "2ieo2iCabfphnrLe78jn5zJF4FdXAJVcpwBmwz6iU3m35pHe9ojXnYnZr6Cy3zc7W9NN7Xqc7tNhNPZTU34qFAe3",
  "key5": "3zvBbsV4iA1v8FoqzRYWdDnB5VeoR62nQ38p94bn5gNszujW66eGdDap3J4KDUhGbiVEKWVsN9YzVc4KdDBgE9e8",
  "key6": "5HCvQmNzNepZSi3QrX2xfc1v8ouW4pXhj79UAzEpR8zMxcHWs7MtxFbDWNkCp3E1gHEdwvb4oLrbZVUZmJyT5bMZ",
  "key7": "59JoBNkVx4oM3o32hLJ2DhZDGpRVgwf7NU5ynfFHZGe8JvvwDuVMtp3iHqk2MXgGLwZW27Dro8BS4KfUcPRPNwju",
  "key8": "5TxjeDmhK8rfsvNgVquZmAcXeL8vcqGyaignubiQnP79RrXZNX1VXxouFsbxboXcRQqkzWBXSAciqTTYn9FWsz9c",
  "key9": "5s3r3AAJaJXtoYZKX3HfAtWc1KaRYCYJSetX2HDgNubDQZXWJg6uXN5agbmXEAb1csUwgBnW6feerHuvVk3GxUdA",
  "key10": "4sYSYnuhT8tAJJ9YgL3jgmWS2sjaRMvc195HLBrt1a6gQryCEDoTTy4LTehUw8JxqqgjiyPh2aizGdFUYK5KDQgi",
  "key11": "5DuSYmxDqYUrkHt7NRyNaUYvHipGmxN5jsJRML9ee3C5JN4LbYoF2BRfE9dNyUiS2QWB8QzMoBEBntmYEKWr9krR",
  "key12": "3ikwfeLryJSUK8MnSYV4bPXbq8DU713SAzHDoe7vqvKfLmL4ksTE6UPqr3NNFbr6Nh8WcvcNTbqso5eRKwZT23KG",
  "key13": "5yoWCzoqN5eRXzrQT5bEnYftZvJA43K3HZZbRFwRXjafW6dNEF6mfUCVpouBVova63GV7ZBySoU42358SVvQt2Yt",
  "key14": "38SPzRXAbgJXnQijnam9xD9EWtrcrWi2FRFRNJKJhbishsQbdALkY1j8gah6vCFZUVG15AFC1RkeYSerFXRnhxuq",
  "key15": "4AUhVd7WNQUNp6xJJuqbA5s5XWtHhDx1ZUb3xnMDThNP5jaPWUUwzdkze55gjz66xsZNawf9xqZebYU6abzj1f9f",
  "key16": "49UrXTR8ab2m9twrhYRDLrfvpYLRcK164xALm7MuwASDgF5B2VSyMyNGSnmyiMEExQbkGHEDrSQS4S9vbLAr2QSE",
  "key17": "3PYp3P5PVQHdACHK4kpShvvzCCpRrmmaJT98tEyABhJ3EHVJH6vVPSqTLXwheF9ZBtF6PRHsz6aYnQu7PeH4A3JX",
  "key18": "5osmhz2d2mT1fjMZ8hQyVzFjo5FtVgrYTPQrN5GmcA7GJp7y5Lff8ZYC2kfGBiDWs7joebf6eqBTHh3x4mPepMhu",
  "key19": "2jVQxUgw1WeJmHyBmB3dK6ga2x5YcGGGF2Y2QdcJCWW5ZTQGzCc4hKqD2aKGLKVrcWnEwSD5ar3PZMo46dfE7Crd",
  "key20": "X1QdD87MpoJ1oGMM1Jz1xzmL2RvWEbyQPqDWbpnSPppoUHehWP6VnhPyaUBKkCRAwcMeAtHMcnvvjeUjsYPJZCn",
  "key21": "AYEL7d9P66oMGw2LLiVpWQ7ZeqXfAu8JKzekafL5SyfEQfFVoqb1BvLuucscHRhLmAeSTb5rsea1PUYmv4ba128",
  "key22": "2Ho4dtpvcph1Q6g8UeEtBspJbvRaxp8tvNnbw5cXSCoySgUxo8DhjVg3pXqxwiAFepHtPJD4Nk6q9TTqvfj9vfcM",
  "key23": "2JrqSzYaFAS22yJW8ieb4tB8t4ZNZ4aTbQUHHpcpXAtmwBdRkBq39WkNXP2udU2wpa9NnrdfdU8JTWd5fnRHXYzs",
  "key24": "5GMH8JKhgMS2a3qwjPKPrACT3kvJk7YgN8QXPcqY8kDH6jZUbgQFrrkTsLHFkB6Auk196zZyjzNVXo27AT6Hibbs",
  "key25": "p6FWwz7h4Zuip2Wnrfc7yoHkApxBaNodZue7dEiqjac5pDLYU2DAAyEmqoeXkSL7Ns3u5fuQNWHutBZtyYPvL2G",
  "key26": "3hqWQvfvvDLTDQ21JFGbiwYbQA9K4Fki6vf5ssYsFvg7iTRKFQUzBxwFWKgoj2qj36EGHBzdYUbcQbUvC7rkyAWq",
  "key27": "5o7jCYqJGFLCgEQ1Wvcx6HnbXVCzLgnZs9AkMUFrkkLTHw8qHJ56TqYVjdUF63hswze8U8Y46pUHRbdZq64XSpoY",
  "key28": "3A8xBwZY2CjWch1S87MrLbu476zybbSVLT4T8RLE64SdpPppRtzYNWfUdvu4xeYKz2oKzUHNPKXwDPUWh4YRbrwE",
  "key29": "XS86YRJRD9627zzN53Wqt75RGn1iW9RznTrCGLyb8W7uQpb6PZrYpiNMxaocGikQBrb8eDLT7zA9Dc11Nq3vgMR",
  "key30": "5gk6DrY2ckxKcJQvQ1RuZjfdnvUPd6vFvusNAiYjprbjCxCCTr2R6VA8PHPgHgKuLxmPDGCaxVP17Vpywr7nK6aM",
  "key31": "2CQg3neZUj7aJ2HsEzy8rJL5RN99KJs2wWAPF1mCdEeYa8McGwjnG2ppFE2kyQoCCzr8aG5mHEbH6onybiMVJ9ye",
  "key32": "4HLfNnDQb3vFMS5u62nsELjrDgfZqXx9eYNjocCqLQJdcbgziyEuuXr9VBXTE2ePx7hcoQ4SgvVzpgzqAerUhjR6",
  "key33": "4GGi7x9cfNNqAJJ4aZWfPuHgt7NanhTcMxDiwK4747rEYKgemsoGqGZStbRWUMVoJFWLrs9fudAtgnrMBU4tNMPN",
  "key34": "4zbJqUMT4m4dxjNzeM1v21tG7tiF8nXLBZVLjvGFxL3VToB72qs972RcFFv6GVqCPAr6zpKLyXupekJB7Vv4yzgz",
  "key35": "3MyeEH5mi2zGkqQFRaYeLHnGxtsrY9rkfmv9tkXsGfUUKoyxZJnpXqww3idFfDMzqvdNbSu2x5DQBHU9o9RYz1TM",
  "key36": "4RLcHbq5VyoYZaudy6vPz57EW6Xyry2b2yrgzuUMcGoL1HLRXh73p2riF8ncNTtZcN9ieC4rAzGyv6HMs2gP5qrt",
  "key37": "5je39qezqqjcK6GUXbjMkr3H2zj1czw8DaLHeDwo6A9duiwEJ9Dd6jV5CMELQhc9EubHVtMJBtDKhTQeAzycJTpR",
  "key38": "3VYojPiGzXuQY9ALDBE15RAuHuowsYipHhRueDeXGzFrd5jG7sm8D9BnCCRatRSHtipSbtAq5n4zoKuYXxv6hgay",
  "key39": "5GugEeXSUrPJhBjp4aj8mCTAZWS2c2b6u3xvVKHPphz4C9hUtRGgErhXmUhPcqKjgAEHTgEjqfDBqDahTAdGN3eE",
  "key40": "3G6yyCc7fxLPvjc6hfHNb7QSoY6TPmwiu4hYadGKWK3gbSnpFEqEMQNZaTzDhd532M2jx6BHRt4dJzKYTFfYTGUv",
  "key41": "4B8rnMyhafK8nkoyXFDqsNf7Sr3fAkeCiVBEh12hajxuHXrN6YykuPwJHDjMj2q9rTv1K6foGd5s5W7QtsyruCTa",
  "key42": "2wM3SL2EEmfYL9BAMbKZz63pBtbnoh7LqzjwNKXE7ey8rcNbLr1jfBLH7Y1UacyQijoZpFjSeW4tQ4kjR39Jod9g",
  "key43": "5DAWi4Zo8FGuz7NHBoFmY67dDqhKbHPC8qYzL8Df6pHiaj9XjVLckLwe4mXvpw5K3AWXtLg47y28AP9jsdFETn1X",
  "key44": "3wopgnrCt2WHATFZy8pgf4dNc3Hhg1dTZZnkaaVefy92yenKqkrNSsagdnAR794sBVxV2U3K7HsSVhY1ck4pTMft",
  "key45": "2tDEXn7gpAfzef1D67rtkkwt8e9hTYuG16QwRjn41UhJVcFTVg7gne3MywRtS86mz3gWGVonsRMkqsT5tSMVgUgx"
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
