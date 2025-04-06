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
    "2EgTap3mFc3iBCSeVuMBC38YnwCtCBAjrnazRipvqvdzr9n9PgFaxbkYaJ4ERoPyEVAU1A6q8n3UJ9LvRyidsKuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qPAMw3a2N4N9GpLGkLeCiH4bMs8w74Q1BgZo3WxL2HztBEDdfpwgeqj98LaCJuAKDSipN2BG2L2Z9pL1sYYXHnu",
  "key1": "4NGuvjcYGG8Jj1RFEkxVpuxQFVk5CXH583PzBiPrTjZXMcgDc28dVYsF68U2wTT8dybgwJAUAJLFaEbCMNvU9pWh",
  "key2": "4zAtbfpJiWwYjmRZuBG8nQ6yrjGLQQWSjhb54SLURhBaoYZqGNoXnX3oDyNMsuWxXbMp6EDhQQyuQMoSYeTEDSSQ",
  "key3": "4KJLVzqnJPRqfvzXZg4wP3XzozvvJgZByKUGeBQt1roDQVHsvPm78oKQjgmxptDY8DFbMLp73NopJqeh6vptZgzU",
  "key4": "5yypaUFoS3T5unyrE25y5V6jxWKqkGTbxZyfTia2To5u3JT5Lj3HtsBtDn71TmoqWbjxu1iPyPPP3gbk3zPVr8iN",
  "key5": "336EYTZfqpDVA5hQZn5uJezzAgTgn5nWNiXLpntvhaa492VTzQmnGDwHBrJbbbLUAFR5aVBgXNWrznyicbsDTJbB",
  "key6": "TmLApV9b9EVipbHcb2yymownvfyW5GyEjDPLmQPtwrujjeNo1apSryhGDmVgvfcfBvBN5eivBz4tPr5QMCMbpR8",
  "key7": "3h2ddRyzJJCM3ZuMBN3Jxyy3ZRMt9rP7Z6vf7qSF2yGDipG4M8QJ6yCJAGjCPtTznq19rMM4pG5iathtVpQy5tPF",
  "key8": "3KeP2LXNWf1yt9uoKbv7tNjpC6RVC83q5cwFNewZrw8C5iAzHCMDc9SUxCQtSLAse5oaSbQwP47AYu33g2WNc6D",
  "key9": "3HDc5uMrmyEHpvmq3B4ENEBpWSxA6oG1k8PPxoKbQjuaPuR7oNdGBQUEkEyokCPrfRYqwiFcdEAXFkgnKWYUL6sd",
  "key10": "64FAQvqJtCBD4ZZDjSZgCgce63r3fgEdQY4rav3CLB39d585q4fdR18Wh2NVhvpaFU6kQdMHq8vFCwdU64KxC4Hi",
  "key11": "3jMQbCZiMAhzuKoT4NjR9GJAwfYCwKVVxMt18er1ACqZJg9dSpV9vYt27cD1ZuYAeJ7rBsUKkjxLWm6XVbPheyHt",
  "key12": "2o1JorJ2XdmpAZA7FffqmASZjJWaeRAVPu3j5oVaCc53hPr5xyGaH7sMu9JmTZbJkwsgshRjqKiCvzKyrgz4g9nk",
  "key13": "65j6CJdDy4HTkr8x5MBEmc9vB7v6rizkHGzyYayUSaNH6rYB4xBG8D63QruFkGVMkVwPpBpvgdnvC3qxKWiHBVQL",
  "key14": "vyKStaM2gwWPr4CjzTisAPNaTpTpQpwFyqTdXiinCTsXpCDccpDrGBZYkGMVAdpfi4kwCqDPme4QE8GEqFrPQjL",
  "key15": "59BaxmhbuCc4iMAu8cwEWQJ9ptnamD8fKAP4EeKwJttdSTp9Pzn8DubdYB6unACvZvuedC6J8yJpz7Uz1CHgCr1q",
  "key16": "2GgDQM228MQkPVEe4ZC7qizrCGHdT4EWH35pFkpMc6qSne9w6NNhx7GgzCUqkKSjB4CUUqEJKw35ADwqVQ4yopHE",
  "key17": "4UypJQrHHo7Spwzq9Zj3QyZ6PuAVWWausAv8kM6Yf9oGyYGkP3ENj3P1sdiraBeS1s2t19PvYKBifd9HLzafirHC",
  "key18": "5mnwtdA3yX7ZEeM1b6nSYpXNYT2HXbrRSUG2XiQkzcgD5WFux5pFMKyWyKxGxtLbcEgpfEXY8wZ5qMEgLP7PudJW",
  "key19": "3DG9sg8uUKVTMb9KmMPjqvkovVxCeEhxZd786PSTz13ryZ2k2bYrtaFMyZbUTpwZWADsN2RVmNL1fZJSKi7vKKaX",
  "key20": "3AGM9cP7yidVo2TpbDi1yZ6DcTHD4EGib6ne6s2582sPq16yExu77amBYcNNi6feSUEACrnAKWJbHBM4rSYq26UV",
  "key21": "4BrwCZ2UkoJYwKxebABvcUVVi1phU1vn8RLJGGDFN2h7StYxik4DD7TnoXqUrgB2BHUW8QCQ75sEBSkUYYDvixab",
  "key22": "gPgNUbS7nP3vwmyUsy5RdHEEXaVaGZb6kgsEYicJA645jNktcmiVynWX6rku9AGpuhn4w5GuNS8HiyNNWuF4EeJ",
  "key23": "2BNsr2g6YFTo78Jqh93bnERScVsxWaUkKFnWee8P1K9vadXRhtqruszKVgw6zeF8RFLeW7wqW7Pa6ghqUfLkQ2mU",
  "key24": "xPMb2BDda2mWzyRbXTaw9L2nuCNpyRfh9iR26FP5WZokGRuAeFtrNtmTjVginVnh2GAaTqCXJFCt4jeewJREVZc",
  "key25": "5NTzM6Qo54xRefeQpggcUCMLCFw8wkG8rBRjhyGm1PUJSu1BWmj6M5yrfTYX9mMiwkw4rPyJJh4dM1ZX8cEAhf5T",
  "key26": "2KzLEbRav4VNKyLKFWG3uUkLVajLwDxRxUe21VHdu3X1Aj1PdSWmCy6g1nkWCkhwqk6CKmcL8U2UAqPijtpMxLMj",
  "key27": "5f9ZcPfKgLYT64gmseTZHkKTMkFGvPrC44djfKsWPQcqSGc2kRchguYu3wKNe3fTXTaSf9CRXsyp3bPYsMcC35nv",
  "key28": "2pYJ4SeAGH2ddXRuSpkfCmYtnB3rKGtXvaxF3qTXgdRYfqsCJLJ1D4Eg178fn5XY3sTNjdKDZDEDhiWEArMt9fsQ",
  "key29": "33w5Ch6uJjRSNwb5j5b38eBZV6vVDYnVaKtRcA251VMxasU1EVK5ptLq3CGjKBjzb1i1muw7iVimBrumWM5KeNK4",
  "key30": "5pABtFgib5TrTmxTPrQrfkhJJLj4LotcZtwYSTUh7UziTNTidbDFZJcjgyBXzSuq32CkdwNRPHi5PYt9b62saPtJ",
  "key31": "5ifgZ89xVw1jFCFbjQeawyQUbeg75wGHLD95qRQpa8zaC1QhTrs8qSc3n8TFwCAcmEqJZDgzoQicsxYbA6uXLNJN",
  "key32": "2deD7f3QMR8CQMfD1BVSs9EEhH8QvUuzfLq2KrUNRb7JdrzNitGRnJzSSB5bbi9PNTd6DwwSUhdzSRhFyJdfXvW4",
  "key33": "3CMV8o7CfwbvdpX2aqDzpr3kgJwjRYHDWfVaU5zce66c1DWTwH4x3M3kYKXJ3eiZGgSDGjvsR8tWYnohzxVAogof",
  "key34": "gkNqHbtufCe9eP7xexkiWwmVnkNN3NhamqbbaCFzUuAiwphWwxfNF6ZR6JCMVjMm7KBiN1p7TmqRu8LCkydR4ud",
  "key35": "31qW51K8Rg6urvuS9R2ZV3fxcuzXmGUvoctX6qcqMHi2NvSDczbG3fLY5Z53FrB52iSfZyq5cS3LAaoURdQ3huAa",
  "key36": "3QeMD7TurWFqBAJ2ZtjjzhhxLf8Ed58hhx2X2EsxscE9iCpZE1hoK3ee4KtsfTs5D9ypPXDgvtxbqZRJ4n97bnFB",
  "key37": "27reP6PfE9UaUhtAugpBDcffBYQH2TML8dT73EnmZuSudURb5Wtiq6RXs1x5prdtKBh9qbNv5Uzf1AKSZEdfUkTC",
  "key38": "2w6Novjsd2ehCJbNh8Yth48WjVGDVi73n8aEZcP4NUcX3MFzxyiEyvsbesChZKiCwx9FGwJ1fXdr6PYsSH5GaAzb",
  "key39": "3W3X3tRgnpEcdQupPQrtR2snBiN7sVKjCtQMUu1StcvRDtF843x9qZ9mbiLxyXHCGr4qmRX6i2Qp5iNdDLVeND7A",
  "key40": "2sKW1up3M2F5h93jbjxrWgZsinobB9X84k7R1BjUwso2xLP6jWi6U7FJbdWMeovxogZWShanxm6WWBGNKnJkVCFK",
  "key41": "3cNH8zmyNNPTxLtuhXqn8wkdaZZkSkrfPEPSn5GQGCPYm7bGDEM1gQNfgQpGqCYkS6bVCkRck7vUxgKnBdccnxLZ",
  "key42": "7uKLoJDF1S8YswqYgHs98TpbJDDBnv9BaHe8hZop5Ph2JwKftRvHw79eMmZnxi6jkhAuQLG5gJsvTaiFhdA9Pri",
  "key43": "2g8HMWLRwxrUxK7tkqZNNePqq4TL6P6PfHzxWn9iHa4pRYKBdG2qtMboXncnPNQuyhDJBNQxYEUb1RGKzKJ7Wz2F",
  "key44": "5b41YN969XGdnHQfudHoaHpiSxnVXqbHUCEg2CwfmsG6pjb1n5ErpWWVKg1oHiKEBkUeHE8xtMskGhzrSNNvyBp",
  "key45": "4j3KtZFDkU1RaPowCJaoLtLW6y2s2dXGDTu3QaMfz1QrdjBNumbYjgX1d6R96rWLebbLtYmCezzs5GssQdwNFTqu"
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
