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
    "2DHweyB7hhaMoJ27ZEYJCiwTg116SRVejKEvy3Uxo45hxNVEgSUqw3wGkuwS837CERKnoEpKpDXUbhKqAmRz9vHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fD44Rud7oggHnZU64kHZ9HYqA5LVLwnjcKrgZLaj5n7PuAeu1H5AXVH4micc1LLdnZ21Q3A4VRzZHPYXfjrvNFA",
  "key1": "4hgSxEu1axvzenjK1toAEj63xdQg6dJx3qHL5PthmuB47faHz99mxrKZK8iZCMXRR69AYb2zzn73TgGz42hQxEHc",
  "key2": "3ebkhtHxT2q5UsZd1XXy1wALmc3QXceJiFa7S3owLEpjoZP8X7tPhyEMHtFRqfmRbCyRyoPSzUcrBwXEzLoXYerZ",
  "key3": "PQfYvpTUNqxPRvTKSeHBDoZJMrmvU62ABW5vMcJDGU2paGNQoL7MJMdfSxpJcVW1AFmGmmMV4FHnGGUm2Cj3TTc",
  "key4": "2rNMAijbvMcc6krWzCuPWewnT6yVo8hH8cUFatbkV2BxWgr1PK3MWA1Lm6SpQtRu7fbD8mXZ3QTXk99F5za6CgFv",
  "key5": "pgXqAGS9P7xd7UYJMwLN4zFxLALj9UAUS4uzB9wAJJcrN5q3rQVexYSBRdntaPQh6aPzBTNKj5FTQBdHUT4qfGu",
  "key6": "31pirvcz7hoYqaKzrkn1FWkzVntJZytS6pxaNbMhmnP94swBdmuuLaxCzXruTdn13XBZaaJkqyTrj6V2dHooNwS4",
  "key7": "2PXhUPEycn6g1jGVZ4GQzcBnVfeg3Ky2FY36Hqc8LM7FfoFpb8piTvLKuz7n7UCNANSv16aawwhwvZZsiw9CKNMg",
  "key8": "3HBaaUFioxF1NkpcwkGrnTagbmfSbCqg2fsLrBPqKZ41FsLEr5ToAnnTrS6ZuL89hBCU6x2ij1fifeX3rpN9zfq2",
  "key9": "4V2quaWYqgBDC62JZjRyxJi4thAqwpxNcbdaX9yu4YEMZTYf8oxZXakRttbChBVP6pXYziMCsvEDLncAK6Ji4wzU",
  "key10": "4zgqEXyHg82ADRvbFicqhNGbeU9QttiwruWjwHq14awAhTX45vX3w6qJecoPUHUCqBYXmXM5qctJgcUj8TagK842",
  "key11": "ktyR7rcxa5nh2orS7UB9Hs1wY6UzuYM9WDPv9NKKCd5Z1xn53QwPFG1SXVGyt1KGiopx4XEr8QsKCyYZWYu1Fvp",
  "key12": "4ApsXMrxABRGdxsEreAjHxbLhJfmNKbSZnZf5YtnuGNsgVAkfwsd3AyYesvDHmVhQoMZJKxNfKRHwpTpaXjEegWV",
  "key13": "4d4yvbzFVXW1NwfUjWCtXdYqivFdFjGtdqfJsmpQ5xFiPXXYYdV8NgEZyULba1hS7wYLXprQM9EPWu8MVKr5F9md",
  "key14": "2Pkd5arLTq7DJST9xy8hsnUxSKRyyLBJWGZYcKKStrgwZSghTaS8coMh7aP3pasuwq6fVw41GLGLFiJsCPCHt4Zd",
  "key15": "4eFQe91gU16ea8HpY37tZqMcbEuvwtt2KdiocD5THNfRWGU1KV3zHF826S2mEXtsBFYvdah3guJKnxZ3V8MNyG48",
  "key16": "2FDRCoPaM3AofB4Vzze61UZEeL6AfJninZxu1unnwJ298bF4EodFREaaonoqibdVPnziPh39VYC5wjJQ1D3R4wWB",
  "key17": "2w3mNtp9YpWBrjHFvywq3PCeB6M5TjX4mhsCrVA3RQJoB1fRgcbmvuttuujgrMQ1xGGrCbBWaoQYZgkY7P7S2Hy",
  "key18": "2fb1ouobY6qVtCqo49A44ZMcf9SkJLUaynM2FkxfbthsH3onkcc4YQJLEYmGRjg4nsvVXuRQRky6e5hSLnP56q2L",
  "key19": "5yTRMn2jkcsbnTxFRtLCTdi86MrngxqPuNTpVbPaj65TLdto959MYEJ8H3bEUqJ6HSS5PZE8khM3ano27baktuc2",
  "key20": "2AEZAcdw3bKRALbrjstWaaasafCpE9swMeRAyXY2Cy8zDBpWyvKUoGRnZhXSoAQp323TZNfr1EhVrFpZtZ9QpGkz",
  "key21": "3vBWqZ8tjqr5JPLJjBFbZLBR8v1ZJnBbUer3D8V1pijmi9NgdKGPUPTVdDhhzQMXRA328d3X6SQRWyh8wKH9oe9L",
  "key22": "3L7dDY3vC75vrWyicLzCP85uiVF5pce7yWaPixQc2C5CXLV8BFnyCYotzxBNp4j52XYUBqariHqjth4FLJGyugh3",
  "key23": "2hHmcWaLgXbTWaWP6tdutswmkDCQP62D47CF6qJrRZGqKNfJnaLAqsMbvNyppZjosDqiF9bVpDUQsGv46Aro8rMG",
  "key24": "4RrQRAptwPL8cCtMVYzzL6CFic17JLVDPamXdxF6bTyWAfpVFg59jHJiqTrXgofYdkyeCPzkJvA3pzNvgstU3hsc",
  "key25": "2uCx4auHKWyLbcWgo2oJ5rLqQe3w4kcF88CXkEqzGmXY6xdcHtFFofqkRFkJQXqg7Fe5GqU5rhoaY1JKgyyumkC9",
  "key26": "5eWnBQTMYq3mMWsqX1oyWHr11NqaWVuWHJnmR6kLhAVqANYdgw8fqHSooW3sPT44prBC3AsZYtLLN9XFYJroajsm",
  "key27": "3bUAhuSjmD4J3XBqWust6K77A6dHnyTwyW9AXfKzeEbqCvxGkyE8kJnhvy1QMTqJT1ZfZzteETp98pVPmuUTB1v1",
  "key28": "3SVdWAHiZ5JvNXSExyVntFfoVhA24kmUsncdA4yhCr5ENtUEs5CnxZsJ4d62c2Uce1VnpQteTm6ERVXqY3svK45K",
  "key29": "tASi5cPct7VHBVpv2hMCibPBBB84wp7ULHfLn81owRGFnL4KzhjqsQWW2NefAqMZN3rGU4WYqM4ppsyNEmHPkVv",
  "key30": "5zTaSy5H8xhf2GFawmGTcde6VKhAmWDCajompcW2ibivo2JEkFgTeZykNhsLEXYn9Xt5oPhEZ82FBWR6ZX6DewgS",
  "key31": "3h7utxTQzYY7e933VqC8Tzggvf8XYR86p8Hx6SoG3kFcUKUNN4KokrfBx7sXyihyfm4RpKAWAtFAQGs9E2Z75891"
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
