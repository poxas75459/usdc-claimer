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
    "4vecSgd6zGSB8LsekvXTRwK5uroTb2mxZ8xGZKcqixv6QQYabSmaUgWMCCy6AG5Z8AWYkiYgfyjR1HTXdwaiMMZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aG8bWAr85NMTyzs3gRPex7eHBFG1htvaM9PKsZ5gprigcVV1Qd1PASXkizc2cJFuGArjZYgJdbYjp3B4jXAFhmw",
  "key1": "53jmY9yrcEg93wszFDRHkTqESC59Edg7ezT2USUXR8qUaehP9nLXgGvuotJU2L2ZXMRtxiqV63KkrqwN2Bsb3TU7",
  "key2": "US1MVy6NGvWY6sWb5j6FpxmrKsQMuySq92NhsfjWX7zi7WbbjbwiLZCB31gix8wFhLz6eW41XiZgWARtkjqyj5k",
  "key3": "5AZwkqWEcjUTC36Sfch3CR1JZxhPXP8i4irwfjM8A7u9vRf7oBT11A71Rq9T6VZxdJUZkXj3FLzXEHoDEdSJPhSR",
  "key4": "3CPd5cF7ANYXQtzQMuXPvJsps4rETKsSYAnptM2BymWQYbxM3gieawNGcPsQ6rRmdCXRueJYrUbe6M99KDDNXux8",
  "key5": "5tVWx1tLRbyt83ox2J3UXrjxsdRcmUdKXCEpHWzx5uA2XqM7kuAGgacvAnhwFjtEG7i4aQPV8pNoNYj86omjzhEx",
  "key6": "WxqZKVoMvkLc7UZ41noAx7tTauYCKEpAVukwmwfdwwra4N9i4SXD8gEi3LH7pdmJGATgYknKdN7JEzpRHB29PxV",
  "key7": "2SyXE71c5ASJHVt1GszuLAfDcmq6yJ2tEs6Bjtcip7Y7GMsSdq1Wt7HFGC9qDRxYt8WPg2XvHDmBGtu34j4ZAi36",
  "key8": "2UNbWYLQQN4gVpKi8aj2XmuV4XFMnRUfhxASxo8q4uTWvBqvefoL7dUkZesUdJW1EAP3sizHuHUeVLkknoqK2G54",
  "key9": "39nW17UL4AEmA2XZcfDy1E5oS9E74oTFNv42gD9TwsWfvCVkiWiofWfY2maVUdbs1D74HXfiifdsJ1HvugXdCEdx",
  "key10": "2HfuJuURPvgdHsZeg2eBfUfReoQxT6Aghv1jyrxVGJSRuEPLVN86W77ArAnQoGG2L2NauocLNbJEcTqTRZstCz3i",
  "key11": "3TypsczzYpaPmfpRVHVTtTskaR7AE6rYiUKfPDrcCNyDR2NeuNFxdkzgwPZfkcJk9TjFiVMXnvFG2iEnn91aG83q",
  "key12": "4iZVGUv8T5XVhLtP3yWUdN6y6jCeMsVF6KqWppw2yv3a7uXaDPLEZb5BrL4BBWyJHWaSzYeAyz7wF2iMaj1kdSNE",
  "key13": "2thWNic1g2pXqVN7Yo5f3e2wM8Cywbxj8r8XNunWfBo1bDWM2ixneK76SqJ2pFe1jzEtecQtk4FnvpPjahUkZD7",
  "key14": "42rkC8fgJAC4KmxdqYeZieFgUqNWZkpWabQ6DQGtE3WaGHSy4sZWkMCuoV4qSzXTon9XQmRJYiKEHPkb9JJu2SGL",
  "key15": "4wBkzh1GBhaKqhHarwPxTyy97Q4tShAwnQ8czBdsGU8CvGxwZsxF59hJiYf3HAGB1oM6vE5VCXnx7bv1KaKLiVFj",
  "key16": "2GcFmP9sHUMjiciGqjPEH3tQCFRELaymsD5i7Kaiq8gxEjVHWPY5UJaoUE7cZJwGhUq9jdxGZBdJPCR34UnWiq41",
  "key17": "23fWzUGKkUospHKzRL2cz7e3mKHZibgmRDjhBpJsD7ykWB8GDGzyCfCrtsiGwmTrihFWK8fZvi2W82QmittwGJqV",
  "key18": "3inhqSY84DDYfMUJXV67CvULFcECWjzmatRxGcUsgyBYfaTxjirfkLM68sKeS8gf6H4bQE9jFGZzxmajiQwWyJx3",
  "key19": "2EeRRrVZhibJFhTmXsorPNKHHd7dvxsrW2DF2dsf7SMErfLgLVmsxt4re7qnRagMZDiuQpg1RCzc4GwUjnbG25ik",
  "key20": "396R9wHkYCpX12ZrvMfbRyHmkn9WxYA8ycM9NjB8sMnGCzU3nQthhJMgLFA3ufJMMR2eXuYMm4vxgSqzDRiiwx3M",
  "key21": "3BHFVgzvhmpjkoznTczbriQaskH99SPonDN6JruhdCuL112AC8xBHk4BVQgvr2snBU6XvZzFSjNnMVRHeEQJM5ux",
  "key22": "5nAzc5kuHGhxXNmaMbUopnXkzgi2STBKM83mxYcfgFzK5AD1ZoUkgQRDHSgNV5f2p7a7yfKVrLoZPG6Gxpv5CuqC",
  "key23": "5o9r3eGYpVJ8TGUEa3bfJmp2VhjevdAqr6T4CLoYNqmjrw6PBwYBMzCdk5Tn9FqA4R8A9s3DpC7Juvvcx6HfPvA4",
  "key24": "5eAVTVWVLRaAJLpsUczd8o1ncfxsfXMX3d3noSwtYExLUEQ7meqr1kUepAmoxCHUGegJzJzMspQM3B6HzwmfvCNh",
  "key25": "3gM3EbUJUJNydENPXEWCY4RLG9UDFTdcuM2zQVXAZzabQDVG2Pgq1g5KJPuW6HBP4b4UCzcjrhWyuY1hnW9gsjmn",
  "key26": "4CQ7McSvqCBETjPTgzj6x8HEGs6cU3TZHCKEKNbvm2BabXA3w84RYURCovuCNFnyj4EBonsLphZkXwLF4wYR7ody",
  "key27": "7sEoPy8An6vUKt88crjaHiLqs8aUJt4uLQAd4eL1NUeemcjFrLAssUsN1VWMDn2dEKzMGwxukLdBC6XDoNcANq8",
  "key28": "5XY4UNqqfy6CDNyP9Mb7NygP61WbWmUXytiARtgUNucZmsBXDS9NAoBG5Fzv9i2CEKo4wLx12Fzw5BGF2ZWPydsR",
  "key29": "53keS3mMn4ZrtArBc49cjVoumVeh6nxCAoUUQTQAkzGaKZj7VfGRKifHzKvWzPExKYXVNc1oETyX3BdmWuWsTPxc",
  "key30": "4DyfNLER1dS4Hz82o8SyxcYUZc4MD1CuwZ3A14C9A2BAYEJfan1hSKEHPnCxbtqHdkEpKTAjcU6DGngGMmTUAt5m",
  "key31": "2jD6HyZP1QmykBhescguTFwmG9ug35obg1XjyPwJkaB42aUzM5j8s46GMBkYfUQx9BGXrpqN8ZeEzVs6ThakuPJE",
  "key32": "4AEQyHPDaixhFtT6XyEYPjkiSwRpYPLHw7AKmy5Zq1bqEqujfEcx4KJgop7FTrF8mH1BpGKoKQ3FEd4G4d4RG7MH",
  "key33": "26ayUPSPMGRwwGzSW6P3MUxXNw6sneUnEw3MvzYknGyHQ2512f1mp3eKjSpY9fDWg965BkSdAv2uqeQC2NEf3z8o",
  "key34": "3TwPWxTWbG1A5CU6dqAjENHp2bepYz2KVf2TGV7JxrieD8NP8hkgyK36kPfbVGjAjbQWDDKu2YR6fhZC9yffFUim",
  "key35": "2ayNURQC3dbw9Xh9aqJm3qhNYwWU491ZSoyo2DMZx4b3vyKR2pPnT6kokGHQKX3Giu4tzkR5ZjdidA4phRXMuvRz",
  "key36": "2ASM9oiRRTizQLTTZjJtX6h8LmwmyXc3Y16xDnYAvkgQaS5CH4VZxyQENFGa4b8F9ZT7g5cFbrKBKg7RwmnjnVbA",
  "key37": "3uFhRkJdt1At6yxpeKxnFdZCCTWNW2Eiyvb4ez31Wmp44YaktemUmQRCSNr9ABEMUiymRHgWp78iArZT9mEr5DBc"
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
