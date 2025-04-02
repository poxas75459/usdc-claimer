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
    "3nURj91odyNN4eov84RQKAPa1tZ4aezCvSaNA1Pikk6JxA9bPuaCqQPYFwyQJ3M6pZr5H9871V9dYiWDyoMVnoPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z6WJDbmEmb9Q4KjMDqWBUxzuicgiPXE6UEF2U8fu44aUYed7m5r9bgE8eNqxvSQFK2wEScPBLvHRhEWTbgqtDGU",
  "key1": "nsMXA9tHKz8CaqMR3pJpWFrFAveTV59LFoH1rd3dJA4J521f6fahLZXgzzP14AmcwW5b9exy3h2vSV8pTgUoexB",
  "key2": "SSHmgtJWNx7VcoWrgMe6ngjhSJCWqYSpxRcQU9QjTjoEzGx59Yq7TRYeYvwmcVu4bsmTvWUdrDdyVxUZMdnNGrE",
  "key3": "2gdgM3oqvJLR4fGpH8VY4t7ZHvyfaLzVX26XCx4mUg3h1pXXXtiESqjnDNjQcb6XYJ8DQY5dw9dWFiuvq33iu7Cy",
  "key4": "3hcgEib8QDCVNgpQfWXH82LZapfLgYpEoEXTevm9Z83iifPSY3Azni8xHHfuikYUMWFoEwSSuemL8QiJqbagfYNH",
  "key5": "3dLtT85JFN4KdteS3ARm3e4caTwvg1TpyRmJCrkb8AcWnxYxA3az2WSXNuxtFBGLzkgnS6D9hS53unfZDLn7eCGG",
  "key6": "4d3Qf1VBEnYrtTNmc4TefLqjzpsJwYWphvUvhEMEGUVzLyaRofo29wdgeki5FUMveQ11mXf5Qg8PR3CvRWPcv6zA",
  "key7": "4y2KFEqrhRzGvoByuJN6hb6Px46Et6VRe7o8RAgyt7WKrxAcyEH19pD28WNjCjwinahHKg4bNCLWbjVnkWaCCTrT",
  "key8": "4eYjo9NhMgDHUJBESXeo33EwLfTnJcMoKPgryDzdYo9LKAWqcwuomrgFghMtLa9HfnqKf1SVHWXmqKkeKZ76QFyP",
  "key9": "4iSvAqjB2jDgSBrLksf2WKgQo1nG3EsrAfcrYtnyfq7uCASsfodyEdTWqXqCqzfqtS12hMnMiriGWPv7U2beAiTw",
  "key10": "4595yqDRFwnQ87NfS5DSXmj59DanxrpGcWfdpzaVedsvmT4grEfMjc9k42ZTjDv8f86MkL9FF68WffeQFVSSKmqL",
  "key11": "3MpjoduvBqMU6cAE8GA6XDo4We4pgT3kTEahqooirPKDsDnJiCfjPm9TVdDRC1tJU6buUXbZWYRd3pcwK4UpU5An",
  "key12": "5CHX4XWpnbzDFkK4ZRdXD482N6bqg7BMLqp1ZzVbRaSuFHFhZiVezwhxeZN5weg6Joyvn9aGK2BpbGULcNANCdeW",
  "key13": "5ok5VWogm8EiA1Bd8J2eQw3KGT3an1ExDdBzKX7XUB7mGv2b9TgsybcVMbQDasH1PNJF8RUysvkjT1E78sFxtpHV",
  "key14": "276gDB5hxGY2PfwSKQuxhXxz9Sxv7Fj79sZTNAe7gAY7pXqyWzZJQeZSUUQ1rqD81cCadvkuBzm8gnRMazKRuUY5",
  "key15": "2rn8ag1UfND5Kx46nheJfNJ1WuYUvHA1xPejwaMWgRxvpYcanvWbM2PQKnAhGcHub3LAhhjV1wiwmkr5Gp46SbHN",
  "key16": "5grAST3xvQ1iYAh5EyKWfpyWjHtmeDbXiSgNfRFaaEe37CGghj1FEixVy5BVAWammmsUeUbPy1QrFQLnfjdMNd4b",
  "key17": "3W3pnDtjKWLQ4dxrWgi2uybgbZGd87Tenb2e5e7pHdKPe4g97JfRFSfnwtTxXzbuJ26ftZ2p7fSGzL6imdX5Z5dZ",
  "key18": "5zg4sSgCTsc5uLsrH97tvQrm3nFwEtecbJHxBf7og8PJCpaRJHK5buBniPFeuA89W9ZSbMig7tXG12XL49rtw4qa",
  "key19": "5HTC2K6GP8EETWzXhrhw7YtWW6gNSYVro9kbWoai5tSwg3VeqosPUoCg7MS4qGaU8VNQEzGAvEGJyvJA7Xi5Mn3G",
  "key20": "2ZwhXjQ4N2sZ2z4fTHvQTqinEsbARGYgufcn5aKLSEetoob2x9xgsVRYhnAmhE1pAnPAfPPAXKQXEXBSTtT18uyr",
  "key21": "4uyU9sbEzAD3vXmcYzGsvooYtMq3VBcGCgSemxHXYhAocrg5Tebyx3haM9aGFt54nRoAE5dbuTeU1rtPmTHnDpPr",
  "key22": "54Mi8EwZ4nih36j1YoSz6Li1rwjuWcLqUqBHCYcCHxdoyHCFp98Q28bxaPe4rJC6Xi1mTWziiN8VrDLNWkT1M2Z6",
  "key23": "aEreNwHnjyEt1MxSPZ3H1sQ3DHF8Q4Vgu4SuKbumiB7KpzTTU5wfR9Gfjno5jd3zNCAYJQHvkPJkHePTRx1cnn1",
  "key24": "2pVa7DB2MT1TojwgCfxPUtJxNPafUcwHfy3itaJhnYp1BCj2Kj5QDPoaCcBPZccvXEgNzkkM873Z5CDdfCoA5bHY",
  "key25": "3KyYXFT2X5m7aagBudy6SEKnxvsWbCbjK2iJwX2fGc8SqzNwHAxbEHugWZ4ieeSxniWEYt3EYhVXv4R7v2zCksmS",
  "key26": "5JewyGKKfAZZPo9SzqfAdjpnUSnmKTdnX9ZGSgnraynbHJVBD2q6tpZZvCamXToHFNYm8KK84c7t9a6cDr8LMAx6",
  "key27": "4W4T8zSGiBA43tzanhgpZWFZB8TSQNygF1sUgUboxgBXb4gCJww81wGmnbJ4TCWXNQSu2Qj1Sc5pGDcQRS9aE2tP",
  "key28": "61YXVXy6Kz6f1dN7Zq5VLJTYNay3phcaNBVJZzdCybUt5gyMqrCfcko3z41iAdrraoXMVzeNCUxkZNDJSyWBVgLh",
  "key29": "3fq8w6RK7Z2tMCeZm1DcEooq56DrSvaJbJcB8bUetBQCSh1Hq2F8BLcCygvi9xeKqyiRzw2QiGG21KfKoM2rw3VU",
  "key30": "4hCbpwgcHvLkd1a46fwUe1dDBFV9mZ1LMe3SXJKaHQzyEBSW9yjaSDV7j5LTqagkXLrtKrXzSHGZeV2Fi2CmjFfH",
  "key31": "3j1CacWX3NGdPq57E6AApX93RQMYGngUaK69RWCEEyqGwfKvbFwK1hz3Lyy7yeBxQ9VdrMkSrXucyQqpuLW5Kyqh",
  "key32": "4teHgGJ2LzY11ajoNZmTuu6CgdxdGnsrpcfpBnGsXipS6uvWy8wwrxfTLBCNUBDHapnnXJf28Rjwi22ppbh2KdYm",
  "key33": "5bE5ZgL9C5Ez7Qx33PyPYBksThsMbLjChB3rgzSBRM6uy6XwASttkdtgERTZTYKaqwAq3YpE3RQGGU41ztpYSMJ2",
  "key34": "3bHq15kXsD5yKQ8HhWR3BvHEzywjf9YmCVZCBWFxJm2QHoA7Z77twjmSWGecpt2wpVEPu75qFrxyo3sWZbD3EZKm",
  "key35": "QPbEFg8gF3oXqubHKhuoHGkVLawnqpofHrjvrbF8fLJRobg6Tn29apMfjdnHCBxTYcc3Wkr1XUdkMme9isGko2M"
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
