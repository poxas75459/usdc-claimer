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
    "4UJJaJQio3M7pW4RquqHgdmDk9FFYUU2k8K8Hy9PejS5DymcCDvjjSpzQ9Wj3ZLx9RXeSNAy1JpE69jriZjJtkun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ue8ERWayeAjqxU9iYLsr2cp3GRou4KCfjJsZxjCqevF1vuPLA7hQ3d43Wi9cD6nuy9JCnTo6BLc8A3oAqhrgBwJ",
  "key1": "4PmE8CyWpRNk33LFmnu9abqoakguKoZqbrxjFAdgYRCXYpRgw5oy49syFePzzrJV9HcxgzrLeJcidTFvfKYpVqjo",
  "key2": "3o76zoxuvZi3VPXEapsKx972qqPpuB2uExhtLfYKXD2KW7sGU5n78uJUykiuGWJtvSBEZ7PJ54PX4qDUrTu6ePUw",
  "key3": "5ypvsJTi1iMWmqC9Ye7HtahfFWbYqdk7muSQsXNxNc53TjYZtcFzapvugpLsbbLcfnUcdhquUUNGx32sNFKitDw3",
  "key4": "28oJvfJ3VAbkDz8CnWg2TjYccCgJ95LMtTU8pHJ4oqzZBsmymA8JCDaywuHm8q9UFQxJfR9NqmrGNskVRpT56TCK",
  "key5": "2goisroqV4R7paY9hLm9GTbzcgvsP7PzmUGQG8xvdb2rAxsNtu3e4rMToF7kXmDcJwtZYJq5QPGHQZWpNkjs6bnN",
  "key6": "5gYfB9phezTX2ZsRTRdFBUvbY7VN2pfGVUauSfpdZinmEMY7zT7661z61snyrAH8e59bhb8isiH5Pn4Ukvjon3pZ",
  "key7": "5mkX5NU2xDQZMPBbNcVEjx1kfhq2rKYJiDdAYm3mFBjAQzvqhk2SuBA5cEF31xHJBsCgcwmmkbj7UF9oEsLdn7zQ",
  "key8": "324gvWKBPC4p84LEURd55uKfAhVTFGWRSGmANcL4MEcyY5sHLSYVFdc6e8tMswqTZ5BbnhLW1KH1CzYQRMFruGnJ",
  "key9": "3Ae9vbaUnJiM6AE2qRe9Mw1pvkCd4nf78wjfDvhVLzGauNdutbrGGgo7d7BxhB1Tdg1VVHKXe7RAozvQoZqGd9az",
  "key10": "5kowegEJiouuj3KTBzr1zcS4MazvxDVV4WTPviaMiF52sV7P3oDaJ1w8oGLZGPdm1Baec5CqKuPgKcKXmuj23VrZ",
  "key11": "3F7uduekcd5iYaD5REaATz64sxyFfdFRVj2FkXi3UVMgGBKtSPVCqSAFM7GXiaHSMyKmxiBHiYcTVddJxdCZNLJg",
  "key12": "5uujEEBS4fep5TsY2jCcQJ8dTzg2mVywFuAg5VWNms1ryHsKfAfmh9svfK7cHsH3bkPQDdPgoeP5kDr2u1HYpHop",
  "key13": "4J5eSUrbryX8T6mq4Gh9mCro7vwDVVzqVKTTU4wqZ4sEUaSrXGC4V9Num6kqdTLw62x7B9dmxj99HFDa6RGKqKuA",
  "key14": "3SGWzVQLFLdh8bcHEXdBNdcTue95Ty1aHrsZvPP71ghvLnNMHahgL25oohpL435MQqr6G2hbdSPuVWTRgbAwjPTa",
  "key15": "5EKwpXAQXAYRZZtNGWEwNHm56QvRjPq4WcSvMkTdANfRHafno9qmqQnm3Ug4gVXqLvRAgmTBArZ2KTfu17c53vTj",
  "key16": "5VLTEyTjqU4k2VBct6YAjBnC9Updk2NremmoGb6WEE7MKj3WQ1r4zvJbzK2ZQijXmgnkhUBpsYJUxxEYPB1Pu54d",
  "key17": "3UW8zz7J4pa7VqmGoyEm2DqqTJcvkV1bbJHykZoVPcX6HBSnqPLvxYWHcADdtQVEHnUvC8sgb8RzbB4BLBntGb7x",
  "key18": "5ZpRKgtQYwdVApqxTGCkFPmZwuuCxfDTdxKSsdBMMmFET1qCX1YKsz4ViTgL1tgUBH6KGu4Q7JiA5kFmyUMwJUjg",
  "key19": "38oJ2emkrrfjo12DXLATGPNi2PkvWHWnyoSDz7dt1XmwHCgLciMcYrADfUfvodfKR1hxynKfsbRtUvgALR6TvEWr",
  "key20": "56wFw2digDrCvPtnFmfKH9iEJXa5iu1pgytqnW3Y7t7stqaBZycs8vUWsTdWbZASRXS9Lpz28A7kuWiAgs1aYjeu",
  "key21": "4pDKsETGGREiw7h3PfK9vzhSufan97Y6FW2ke7uMohSLJD4PNxbVypUHCnVDy3JxZGwzLueVKME8BF24dnjZStT",
  "key22": "LWfAeQgVpyTT5ChZn7ZGJ3sajF52iiHtRLdzr53cL3UV3UpnvarAoWvDJXSs3vis87WQz7atjj1VSuZTnCNjXRA",
  "key23": "51oL4z5eQ1N8WR5xHuyTeY3RfyhKSjD54vbeM9RSd5q9Hwq1pbnCSzjounXn34cRWC21xh3Bb3pjLY1UrYJZHS3V",
  "key24": "FxUjVgB6XJT2SoprPptvHBpYgsPcYBCQdf3JJaNmQg9MAQDr4V5PHKfbtHqkeUFt8VWFewqAcTc8UqwSZksU463",
  "key25": "5MLJy6WVUSJJzVjTvVqkXaHRpo4gpLaDuK8ed2FAmQWx5cs5ETN7D2pRdvkpNEVggHJzUsdUZgFNvw7M7QpSMMvH",
  "key26": "33wdbyfDph8AcPKyMrrR9ZXoj87EY5u4U5aGWK9DaVxeJpt5MPYGDPUkWo9V6P6CzmfyFraKAvz8aNnbbt14fKbm",
  "key27": "DpHMMVexb6CB3ixAJNHmh5hKyNTSt4cZMzkNjtRCaa6Rtb7VRCCXR3rs2EQXG1p7azypQAG1UH74bamoNzL9ija",
  "key28": "2ZZEx6cSPzqeN7Qyw6X8quKF87PaUCCuttXKDzVguBrKCBtzafoWeK1pdW36XJ9B3d3UMMahbk16gVKQMvEL69cJ",
  "key29": "3miXrd3PEJRLvqPfLvLsw3FHiL9M2dUo6u1BzSC3PWzhBLjxb5j5yoaXsqMns7ZoqX5AymSgj2QeKBQmggq5HWGJ",
  "key30": "2NL1H77xik43eEZbusvF91EjABoSnPUjHKo6qwCqAp45tFsUpUjeQ3onaAxhbr4ytoX7LH9nbk2Dkv7vMtYnkQe5",
  "key31": "5pHEhEfDrJsj4a9Q7Gy597CXiN6djxKhJVxLmxR1KvYxXsuptJUTAsA1MUdwE7rtQAdErHs6n3EerhijSxgbgZQv",
  "key32": "2w2NPUwtACEq8zoH7baCfRTgZWcdKBBfia3GJotHkBTyr9M8jXSk9j4f7hfTEKkY6VteMyQkspz9SS7jXD22VjZm",
  "key33": "5ysw5PxhKZZ6FRwJFW18BNDw2CrpXRsxmHbQVGEdmSGYPeL4UME7KVzY28JTPAarzYkM4bmT6J5b46yajAR2YHfd",
  "key34": "5AVYfKffJEMFfK6MSQDhb4b6jdDUA1bqs6vw7NoysdFv3Uj2gi9PYakiRVue7Sxdd7eDB7Rk5ZGciQC6ueNyYrWy",
  "key35": "zrBtCveVQNeCY9hQ8cxQYngzsMDEqN6W2RMuRcTFhGyvS4E9EvwYyY7MLK2Eijftq6Bs5pJXsymiZPSDcX5KSNd",
  "key36": "2v5iC56hG46zeDVUJyVBuTZJTFpywKu2ipdiJi4DscKzAzGetKh1q25peeeUUTx7d9rjLpXmypPYCb8cnDtEwM8A",
  "key37": "4aVVWBAJdGbfBowK7me9GnugF6RC8deUgNt15eyQtVe5vQgLntSYBM7BJPZAAL3NUWKs9rysEDGXUwb88rGjEyx6",
  "key38": "zEQK93zZJhzBunxWUKjBM3ymwcQRjdJFw4qVgaJWyjuwspxKmTwvpYs5aTXhJj9dyEc5U5ME78rxSz79EJiAEEx",
  "key39": "5aPfmTUUa9g8ft37wPFn48aUhu5xW3NQNyxwikokTFCrtK6CB3vgEM1u6q4KYyCf14FRQmDWtNmioNp1SUXwyo4c",
  "key40": "27HeoTvGAy55ifERdQUJGcYe7ByFYnSdvzNY85BYwLRZAA9Cwhb9TNCxiasPQGPqxtyFgf1Xumd5A8MTUJPaa6M4",
  "key41": "3QtsKcFXbLxvkAwMkRTQZ1cV9TYpTTz64knNv7qJ3M4Wnzfi74Cx6SKR9aUmBV8noQDsBGaYCW1DCKYAdY7cMqSD",
  "key42": "44rK3SvC4VNyNP1JWnSZRA6L39dakJJUs1rpndVqBh6TXhX72fgMD1kfP71wV6CXSuc7ZWrtTyXWtVd14onhac8A"
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
