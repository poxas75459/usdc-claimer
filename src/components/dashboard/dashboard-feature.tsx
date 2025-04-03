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
    "5e87ZinCnB9CPXeE9WJR4q23zHPstoiohNUnCTUBmTzNkeFLf9S3WYP2t1AoNMCMC427pvPigbLCsjqurMt2AYxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kx2hbJbWwtc3Ukv623wWJHFe13VxSa33n1zVWCxREVmBcpbnLs3Dpq1ctiRFBkbpTPstecHjuY9jb3oWcoiWPRm",
  "key1": "38jA18t8LE5agrfBS1zmhJvMMBpYmJZSB38QYSmYHNNZvHr8iGPupmXz63XEbHxV6YE5UnSN8pcS2C39eiLTd3Vx",
  "key2": "28Qm2sisa1fXQog3mtZBhG9MZUqEiuMvktEs825Dc5XWKFNcaq8dq6UNyCkgLigGPfsNjT4rSxGmPaGbiPc8XMfv",
  "key3": "2EtGSKWxj4ca8MxkQ4eq6fjZsqrWdDS8C2rza4iHjtd6X4TcAhTc7AspEsY4weQRH6uPBzAVKGkJp5Go4czFjpXy",
  "key4": "5CgCkKjRen3ByY35BdQgAxVLkJiw2ybH6ptEmv7kFt7FiDM6bwSgk2wSEYx8kmUnxLntZZW45eeeRufAoPkwAMcw",
  "key5": "4BVVwxrrccRZyDjS61BP5ZTvVy8EqNpwb2dcLxEG3VvqE3wfcpk1HsXLabee6dLzrFDyV8HWPpV7itys2LYGXrTT",
  "key6": "3DwxKwdfUSeVS4EGAZs8qYcvw1W5WAQm426bUqv76j4zWnj4JXLEiN3eTjGEwTkZ7MKB6JBezMuZyRa6pBqbJBsy",
  "key7": "ZaJW5RFvVTKv621rxiFQrahL6itPXtPVW5v3qj58n5sa6ChFxYCufSdS5NF6748SKC6zRXVPGV82fCkUhxS6RUj",
  "key8": "JgznNMbBEMyKempjmpcMv31r2REAMPK6tEUqmmN1EBXKdq5vvyossaTs8apPv3Rt1BU3LVwKBUjzN11qZt3RfhZ",
  "key9": "5EsHu14LXvvkShnTiEkczYXySfur3dPwJixABM4wngW53sW3tSHHVpDTqBE1215tAeCwRoKyVVRzjMBTuMJ6j1EM",
  "key10": "YabFYBhstzsfghcDW8eoREDtWGJnJCXppH3LpxGUBga5jQ89ufZR9gnDLAkUszSD7eDh4HhPHHZ3YmAx2WycV8K",
  "key11": "4Cdu6SQqaCywBD7NqA8BuqxeJnkbyPjLaXtoGd8VhASZH5JEoqTVLWJPRV2usUv5joQiWnvRs3CTGJWCuqETcYv2",
  "key12": "5u3Yd4dhkW9QXqeRVUrR4TvvDxX99f6q9rrZTLpDqvLSRAqxQKtnocapMLfeXeaJAT46zvf6nXtYKJJsdQYELQ9m",
  "key13": "4WpyQsNdhzJab1crk4kEba2D5tnMsVLYeHafHr4hXsgxyp3ExXMVb9FfvhxDf1zN35XwuszbWqhwdwBxfdvoQoiU",
  "key14": "Jqr6g7McmeEJHQhXe8LHBL5hncyLKXyLXF462611ELnd4j2zb4LgWrCP36YR211uSEHWc3NWTXUSFbYiQWteDoQ",
  "key15": "eZxhPjhPFBfitjZa5XDtyBDksSTagHHarZwcQP5mBHNtHk1rpmoJkiQ7URx3gHXfwoz5qCMy843Q6bg6MSDPmbW",
  "key16": "jFwaoVjK9RZEQMrYFL6F8xGRuDDhBT3j6xqrB7GwzQaYrt1XHt1QESirDDASvvv1VGFCaHQwuM8M19wn1TtXzX6",
  "key17": "2zWJM59LeavDK7GvZLgW6d4aws89FWJwjkYusAgyoLgRKCBMhdfQjGvVVhGLCJRMzDSCfA5eYYiwjmQ3xfpKgoce",
  "key18": "5wmA2aTu52gyh3csoTv5Evj8Zcjqd7nVEZ7FNo6vTtAmbTxySMXKBJb1eyPTgUCYN3kgbu9uBq3gkAUHBfu95W94",
  "key19": "4wYP7Y3DjiReYfJxm63RRpheEYYZLGEtPNZjXKQniWQPyXbTFamc6Guo7SymW4uCPzWL1uFLJHbT22iszTXqkHHY",
  "key20": "5BYEd27vvCWnhKABUufCgy1i5KT1E5jVEuUWWuD2d2qjo4DMCnhoSh4ceWZUwTqbfsM43MAmr9tdnPJwq8DEchWE",
  "key21": "5p1EGmVHTRo1jf8CipJ4QfakTmWFzg5mZ4ThxitxULdL7eWMfFwiXps1S7YG8UeM1E7DTUPZaPBvr4hZfsscnWMf",
  "key22": "2vu7mdSSJM333JPuY6Ra8ywxgM9psx33vpb8aRxUGZar8FvzKxhL6eYFtCCnf7t25fPC1tu9jkM9BEweTupfDrF",
  "key23": "ARbon8BsBNEg1eLPvTzbDEAmgBKsw4KydZUsPxBB23kE2eXeF7FLwYWVHrwG5FJtQb8qmzmRSvFLbrGB6iztcjo",
  "key24": "3JoDNPafzVwcCGRtAok5vGCBdqpQLhWHehwUrCzLcfcBNPLpV7G1qoFA2D9LvXLbFRMKVj3gSvbfPDn1wDBVNUu",
  "key25": "2czaed8Pemqfc61LGdWFJy8eTpLkuEymPycWK8mbneq8uHykVx24THpbAxZeH2xyVsjy15mNZQsXdmtpbQ9rdDWu",
  "key26": "DDVAqE67TDoUoF6ZWUNKA2MfRmk7B8Vcx2mYPBFwV8kigh9r1gw71d5E5PJrke5pjJM1gF8re3BRKeZ8izQcTES",
  "key27": "2QWFuMue8NTGNsTc6qRcSRU3aFjVhJBzYmhXp8PKL9V2uT75o4YEqiHm54EfHtpSD6rzEzNBRFq6Mg2cJKDbGdDq",
  "key28": "3CJe68k6TAnm9mGXqernTH1jkN4KwKRvaVAve941Z5XbUMb52r862dF41h9FkpqdwgmKgkhFqrbof7UayPxsYp6R",
  "key29": "2P3w7eCDS5RGGGBTrpN92frQknPdzhV2XG3HcYsT9KNFXhXJApvb4r9kxytaoSfAQjErAX3DwNghPnU2VEqmNLq2",
  "key30": "4i7hDU2dWncJJURC9pX494afXSy4rDYWf8zTrs3N5RjqUUXehRLPpVjDkroDad9EkzL3nYmMPXR2qTrSYYZB6w19",
  "key31": "8D99HW6oFgfKZXjLJjz9hES2uRrkMc6vsPqmPeAMm1SGtbmprumBGknyG8hwUM3Q8YF571w8KUvZyYQNSN7HTXL",
  "key32": "5dhdApCLVbYD7DjeG6JL8fAyGribUR4RGMoZNtbLz1mArQozqf9wNWHmuw1RMjT3xyRkwYeY7BZ8Bm15zok5eWA7",
  "key33": "3ZUXdK46Jvbw632FcCP7AoQL3qSPP2uuyymAQjRTpzRqo3fS56fNVBgarRNFKShw9LGpzbggwDiMFzQYDFg8Dd3p",
  "key34": "3YAqJWW1cfsJK42Z311reox7biAL7ThigkDukDU4SKEKzDLcSbCvoN2JoffSgyyZy6rb6TCaW5Wry6foRZ6R8BJG",
  "key35": "2VzLi6XfHGmJf4fwJnaqCa1jEpqCcV8tGdc2UevZi5F6dERcu5oi1feAGyaFd7eYnXKZ2D2xNJA7SXL8QDQjuZmc",
  "key36": "BJTrk1guhNHgXvf4DSegry3dbggMVa34zyeUCUsc4iVmNrYxvCQ1jySVQfgFc7YXBW44fJ5YP3quKa6oJPEWAXz",
  "key37": "kDdD9HYiU5G8mKnBgezRR6R8SJZGfZfUY5NABQCQ2cNuLHEozD7v3LAZZYG9Void5rMCa2Ej1QFCC4RG7EfHEX8",
  "key38": "4LHjstHSCU12A2NEeRPHwSHyVCFG8Tb3mNMhj9Kwdtn5qqfchsYRTrUxnD8RmwGhejNJi4SdwA9vBLjNUyASbLGL",
  "key39": "3WmReDoj9nxP1XATnxmqCf9oLXdx58nUMu3NtxiyeHTYXDNXrspJqe5SHFTjhjkqZrWwVT53uZW9qx6Rt1ceBryf",
  "key40": "uGsfzFP2R3nrq55dVkxuXV26o6XLQNJiCywqHiNG6VsmpkJNtwMTKNwQfsoEkm2xZcDfFjLhy1uoiP2RogxeaHc",
  "key41": "34KZAz4b4C3REXzXuPDFaaN1iTorPz5auXaNTNyc2PvJg6mX97mbdxMzRHzBuRXF8bkNqzqpouvWGmphykQr96Eb",
  "key42": "36FKp6DzXP5F4jNj6yh5zcFQcUnXwRu7Rk1mh9zMCWwmHD6bxhj4NHfLVRj99rBjoRRPbpCrU2AD8T62gUKXmtH4",
  "key43": "7CsyJiTrHN9eWr4boFu6ex7TtqS1sGCDTMfeVEG5kVPmGtCwfzTZRMYBF9f7oDxVXzVVTTNuo4Tq3pthbZBMEGQ",
  "key44": "3UwDXF1vEgcBnCzcREG5aKR81wUppAkcvVPvtFYN9ro9gPhwB7v4sKrKVRX7U8Jx7xjvyYyx7EMfyRWooJtf8Wea"
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
