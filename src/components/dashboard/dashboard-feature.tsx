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
    "zwUJAfEYeP9nQemwBDJpZk3ko56jJ6BP42EayGw7qWxsQFdbNTmoYr3X9qEXyQKqYkiWJ8sQmP536i8HFQoJMUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MXZHCWvbJNQAFSxgc8i2wabKK4zbW2A7qp98AnzJCQMd8pyZCXjY6HZKnQapqokzK9ivAdGPpjDQ7p4MzNhuDtH",
  "key1": "4Bua6NZzbsMB8KXNqQEt7JjjXMFuFEgpaX9XDBNvMpVoX6jgDCqP9i1Z6vL6Wa9HibXmtJhrZuFTuJkgGHZ1D8HB",
  "key2": "2r8ERXEgchB7UXWc8DyDyYisnkWUQx6RmzDy2e957423xeSPkFL7dsN2XTuzUXb51yZiKQ1iqggFkJXBNTyc5Vg",
  "key3": "2NP42uahhkWRTRAFMwqjUwPgBnMJgs3buQYuLf1PX1Uio6MeTpdztFsNRAgAcuK34XEUMeATFXLbYuZGMYVMDf5J",
  "key4": "5LBUKPLc34sghdkDYfwnk3zYDds6NWiYs7PvHGyVvyLWYeu2WnPadyWMDwx2g6BmJj7Z3yrEA6fnELigMdTSHyRd",
  "key5": "4QmYWZQTit9EVnnzCC7n4vwgjGU2gQ9BP7vkMZnEwDZqnkScDRf6hnxmoeRjr1xDTi1jzRdRRJrqsXqEJv9VFvYr",
  "key6": "2sNeDVU7QhtJ9z5bVJXoXkBzXtQguUcwnUBRDvk5fm4mRB2jZNkB7BdTewSq2maXors3w1xq6fZrfd3hMadD9pEs",
  "key7": "3XPe4NeHA13nCpN4cifEKFkCXqPzvMxu9RZkpwWNwFeTCsots46PMYCisWoPSMoeAFZ2nMQa8dJmHg2abcmQZLDD",
  "key8": "dR2xGNVfkAwT2XMJg1b4aGDjoSS2eGRZGqj3ndWAzzzXFDoVY8LH7epDpy3EjtGGVePBspxzpFpsknpDjHp5X7e",
  "key9": "2P2uAitSz9Dv1mD3Ag7TK6v6KmhHzSz4UUPpmZiXZL8LFc9t1Qqqdx1Ju4csA5Q2BLj5rn9oqiBKoxPHoQqnNu1t",
  "key10": "Y9JA3BJbZrQGSgU8sRw1w9VJZNrNc23KrF9A6oRBp7c4B5bA4CYM7CgfTwhhjKZsunwwnZ2ez8MiqmsKxq2DmAt",
  "key11": "caccFXF3iHquuDsHNuZCYRvEfpaUKbvDjy7DmaSVwCGpPxu1aDPE3xTnHJWjzkq7pcYJRsuTud6vzYKw2Zp9NmR",
  "key12": "65caSenLkH8jUa1Z1q9xLdpGq7kzjQbGkYSafBQg7d4EHBVSdt63Hxwh8Eee1YkR9U2opoYu1QFGTRXUudet5KfQ",
  "key13": "5ZfW2LvBY9DvbTaUwV7JgRspsvQk2iuJA5ZBAzDjbiUX59SVd1BHneZVEaJYC6385bckVPfx2K5t1UYobdK5vU1d",
  "key14": "2pGwAHmiMgdRMGdaBpk7BHsvexJeMv2HQLD4C2js4ZF2Yafp8SRr5nmApvf9336QCvDUvoDJjo8kiwRsy6qddrth",
  "key15": "3mAuA1LSqhSWVomefnNYLtdHCgxR4UUJebzH6wT23cX4yQNWdkbLLkj6iBM4cXTfMb1R7K2JP7fDC4CQKYfHdMpU",
  "key16": "3egQfqFwzc4q9aw4bCvvFLWB1szZ1riqgphHHKNYpX8rZysvWU7GTCfkXKQXjmprR4ApEiG2Cy1DHuQqAxVb9Yog",
  "key17": "55qoswYpwWYoGprDq2e7NimNpsxmBbkakDcZyTjWXkDFTGboyWTpNySgjnLboTrFZmLSC5aNZZwWz48p6ypTZXhu",
  "key18": "2VEzFzJUcDK1gCxMFazd7bKg7VghLqZMm1PhEpbzb3oashieNzQpWcSN53RGcnrkhCq2MniVzAYkV28fVYfbE11s",
  "key19": "4wnjfaPz7WaHYH678hQSkPBGPriFBPz45dBjexfgPhtb5ABW4o8wUMQpECqSj29S4iD68rM68m5uMRhqk8M9RaqY",
  "key20": "5zK8R6ALGDt7AMhNyqMBXYPqCXpKbpGZ3AUfSTBRUNdAW8szHWUi2S2C4Y6KxE53f6mQiySb9X62im6zce8X47j",
  "key21": "yBnNiuagt5rHWDJZtoWmJPiyzzx7bkN1eN9C2fVNA9c3aLN2MTMTppemxwUzdR9oVKP2fanihb266JyfAZasdLM",
  "key22": "2L6BqTG3Sqja2jBJt5s3xGogw95V7v8vc2U34vUBsH7UoJqiJrqhTXtwonpGsDv21WUJPHnQKBMF6hMoHhdR4Cri",
  "key23": "3jCBbyS8K2iJkuEPa7C3bsmKyJ9SiTzoRQGWD7qoT2KkwFASRqFwGrRfYFXiHQ1hTXA8XSWbYsm7bnatZARZrk6b",
  "key24": "wm43JciXg2X8kLSgQXgDs3ztGHfmnFLB8CjQMH5WrzBKReJyT79oJABbH5MZiZSvm3zqruKHhqHQ4mA7qjGHiAm",
  "key25": "3YhPXB7QzoL5PTbGQKvQaUPCf7Nq4bF7BNWZAPZJGx8yWV2iMuZKFbSeXDumd5r43GpuwXd6ikxH76BGFALWgBq6",
  "key26": "3tXaK3nVerusk8yCjHdZqyEmmjWjggdU3MNE4w5t1PxKAyP9Yen2fCc8j3khACCWFKNgVX3xkGFQXuKLGwogFcBU",
  "key27": "ojeJBk2MkedXm62KkjvXwgihpkfRRmCSYzQxEmdvC9YRW2KST6pcuUFPZgBi2BMGrqcY1nBzMb3gL8LMYJ4bhDh",
  "key28": "3cEvDEXjMoYkFW3SKvDmVA2BKgpHEkHpCKc7337AKAnegT91gv9Zh9a9nXXTL4Ra51HBPFvcFXeFBLwbeXwgaXWA",
  "key29": "32QPBNsK94nKynRqqmbbFGSwrGzF3jazwtEyrs3qKfZfyXFJPtXjdMdJkdJJ256hvMkbRyVs6rxUzjpJkTiTr9WA",
  "key30": "4FWCzzAqBYwFbHaPxqQ7TnFST5fbzaUggjSj2SsRxYdutNFaVe4AJT1AjJaKaGrsWzmGb1DN6LTfhHaKDkLtwzAS"
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
