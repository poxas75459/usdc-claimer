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
    "3vpGP539gowyQAxG4xP1HHwNPUBxtojinDJFokLSaeoUuWv1nX4q9DqrrVMLMjYFsDxNYSLMwUuCyjpSBLqKMCC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JxaXU5sXVRAZyuzp1oTzYbLRJJDN59KSyNMVHuz67fa7pqHDDtp2KHXRvsBsvXLq1KPunqPJLzbyGmrzCTBpZtp",
  "key1": "2cZVTW1BEsxirbfff3R3oAfsS9U7miAqReH9DLC3sGwudy1nK2i3Vo7EHJQaaswyCqZ5dyjQJncvebuiq7r3JXFE",
  "key2": "3Q2kHfYkew4pvQF4no1GwwhfJ1tGAdZ2dZhvwkBvgnJwRJDgmGBR6TDmLCzB3dQTmY7Zmy43azPJL639cjDDKYVe",
  "key3": "3hfo4vDaTBQgZuEV4TKt6o6zP6wJeQvtmzeTV5BJziJe8AurPFa5EP9si4GdueQvHanJ9grs2XEKGqvSpZgLrjZe",
  "key4": "4irMxT5sJ7VMMFZoQUxa153Z6ydFUqv7ptVqzinGCCaWRTSS2syBKF2GXAvMHNXKp4P6jZwepv8h8Tmsc8ak5jQx",
  "key5": "2mGhLSdEVaUQjUgUCF7m7hmMHDopU2AdSUBVLYRBnUjSUWtM8dosPoV1nTbiVDMS1BXZQ8Q9DgnUBd7ppPfKdfUG",
  "key6": "4a6EkGTadftd1uxQh99oWHzmMc8abQ8aqnn5hoQqHmPqmJ9XDMEbEesGc6ktvRA2nbsn2xvCF1pWd5noaWkXDszJ",
  "key7": "4P48yMFeWSHPnK5hxBm8hVpWdoDjuUerFT4RyjqJMrz5PNtEABvUzZiuL8khxNEBMDAtfwrcewsSDHYLcx6QJ9Ek",
  "key8": "5DzkYMYFrqu5m66EUf6vuGuHo7m1eueLDi6yRJ6a37enEQAZjYtbB3cQWjioZKE31qZ4Ag3hgcBMR4ypKkD1DdAD",
  "key9": "4VUg7UQDXjkaVw6p7i4Qc5Es59tY1pQJn5GPhp4eXjcXowgcKua5jseQGyjK5h99fA5dP6tfuexzDFrLg66f6haE",
  "key10": "466W3GhCGKHi43nY1537BAAiDpKMxEGC7MPBKcoAEjWFawWRPX2aT5rT13GZXjnwuynGNSQEKWyAXRwTwfJQypBZ",
  "key11": "4qZVHMVSe4SawDdUSzV45JB2mMQV7pBP3eJTu6gP6rx28cugygTAiRWZAfzAHoLbvSpnQNS78Mj4nFVfzgFSrRqc",
  "key12": "j9ND6tFTrN9dj2rDmuFrUEhPXPhYNEMSmigrSALzRjNLuM5VgFa7zdC2qFCCUccKL63MxJ51tZATy2tq4GBL7t6",
  "key13": "2Rtv7xvgZoNPCAx6oystQWh7Wje8RYrjiV4BT5nXE74AHkAaUQzTRXDJDozEgR5xx2atbEj63NZmT7Us2MXR3ied",
  "key14": "3gx7xRGNj7ujffqCHqrRRjm8WL5WwqpNimPHzsYbGJquFZvXHKijzVUbJPUPpNSHAQbcwepcDRozoUKeyrtaVKYa",
  "key15": "2TrWuTBmTY4bLTnyypZN7G3pk2MUhav3Gfio1em9X75riyFbNEWb44erJ3VgfjUVMZK3Cvzh6gmyJSAbr6xXFF6D",
  "key16": "KfNYoBG5N2ypEch4bt8nAnJ7Rg57oMNfiwLev5ZAfg95uhDqcTGtg1B5o9QgXkXcCqNDG1Bew6C9Mz7VGCewwof",
  "key17": "4utVm6zjFT4YfbihHH7NsdmWbFfphzYfFVjUeegpStjhtwyPM5mUBDCreRPW115vkZYHVwu7MUNoMBdZWyrXMjpA",
  "key18": "wNtiP2G9dzTWacNChPKJ9t41t4cZ4cSMzJHRebcuBvxcNkLcxKmJDtHj73c5tPtegNpVwTTRGGk2WsWKPfsNK7F",
  "key19": "5oGDhomgZYP5drTnSqcsE9YXgXcfUALMDTmyyDd9n4759PvKPRuzRHJrp1DDgayBPihkKxscLxNNgq5HwtDcJz1w",
  "key20": "4SsmqUmq5tzCBpdHLaqvX1fGPRj6FMmF8qM3472cVjLYcSRqeXnqP5P4uVQzURGNpwXzVCnmKRAkvFJudd4kJfpQ",
  "key21": "5vYkdUJ3j5EGBS7RMorq6mT24kYvEQzwXAPoCP2uYfFwPqoUzLrpssY6MvXFpDK3mzBFT7BVcg17HFPQ6pZMbhPY",
  "key22": "5xfjLXcFGkUHTGUBeH3iKooFi9Y3HPs5DWCFE4mJsEC53JFxrwJqAJuco6kjCPK4usPuEsrWef1o2rHoKcoicN67",
  "key23": "44g3f8eABozNXFRqmC5pcg7P3So1Tgj7Fu9qFSwKwaTBmyCGwnccStGNNgJnrXsbYRQj7LhPexqRpSn34TBDVuA1",
  "key24": "47JL9nFc6n3PV8yTMxWurXCMdUrhDVgLpFjp3MGUgPGSjprZb5cwFh39aFRWGkWf7NFkCZ2G4AeZgGcgDyt7u1f5",
  "key25": "fv98kKmk2x129VMzENvCV1pPFN2U4aV5RTeQquQEruonGRNUcGcXFoKyhNq9Qc25tMm7WFmRombunoVhU4bKj8u",
  "key26": "bsGSp5QsLha3zchDd16WNUWjvxZjtKjfH2J7fiYtPASj1Xoz1NKzQhdaKFftHvKLtBQdWh5Vcb43MCqmdK1yfZc",
  "key27": "cAwHxt1BkWb6fk7qTkHPTRwQutw8EH3E43Yp5tJPHFhcDTK1QTShNKq88eyuTwEt8M5pA5whwJh8yZa9iq4fLZ2",
  "key28": "2Yc8RQpd24ZgoZpQEqrFYYRF1x1ZnXf8Wj2tnirV1fpoNSY6U3KdNQQ3RezWDWGbmTJMxbXigv28jH2MgekK45zW",
  "key29": "3RCKFpzZdmcGzLvwuhiZx2jMz4shCnrBRmCgYPjCWxwbxk6mvaDQCbcK3pFjEVxv3DaA5PDDQte9VbkT19qP7Gzn",
  "key30": "3eNBW5dHWx2wc8PSCpvpsXpafb59nEvscYQJfMbNv7Vc2zsfe7FTyWz4v6q5FTT2EQxnKeZNLSJm8ktThCiF3G8V",
  "key31": "2xGxB3KfkDQryVmd99pYbbErurcDsAns4xrcoMTz7n9B6iF7rQy8cDNwesjmVhD94nKguvLinz9wpVgfWX5V4pNg",
  "key32": "4dvFdF1i23U5GK4BH8Kevpeh2vnCnrcoEUoQsoNeXSfsdmWa1mFEobgfdxJRcbbbeubAujRVdnf4cDBKS6y937yq",
  "key33": "2tYYGq1cMHBcV5TU91TfWBQZfQQJjBg2Spj5xz2cegg9HuzDz1b7BM9GiyXt9vA51L4cSxCEwpo5FEjHyt7SA1oY",
  "key34": "zVvUUpqBdzmxicWQzJ2rpiFkMWmyuUrVT3QyPE6y1998JSb4KeR7QxFkG944QhQyUnBwiPeQXqfh4UCPM9gEoKj",
  "key35": "gjrTmcB7pFxar6MpUXcUbuCULfoZsf5QoJ8ibG1FPj9EEa9GXsDXeJJuY1Mq867iSMkQTPDjfsbn43MfuTxNUzn",
  "key36": "4dUi1TrxASUFkhYjazrJFd4Vn9sEJeBYkXj9ViV1N7BhD1vNJTLvcHnSsSACsRK23ihbLNm94yd5ExzRNnCBTTPK",
  "key37": "9SNwhMxuBSDKpMnDGiqHRno9C6zZp7XG9ZcTG62xeus7fj3ZPf5ZK75PvdSSAK2c1vtwQdXMfXnKQZanEpqHsHS",
  "key38": "4c9DHJHS2VFxVDHpBxa8NtyJsejKpHyqNELhjuwtGVEsMe7RqsGofPRXshezLTNoJy67UAnqiPTUdif3ZV7cqXng",
  "key39": "z5e39iWeE24gZ4B3xkioyFi3PjSQ8DacrtvngqoFWnsr6Pn6VME6QmL8Q4ce3J3Pe7nGxtBT4z6R3VTzmzNsjba",
  "key40": "5EfkPmvUKxi1BWjuzX1MGLuQZb4Dc1nE1wcjp3UyN9e2LHZx5tbgXhy1NKUJfCLdDNSjtxwiBop1seRLjsHg9jVF",
  "key41": "j9pYLMfcLv6DTVJtmtNwA2t7NePwqLs9bhutuay1pcsNsAw226imbj77e9jQ3AJ5QNpiRN1Mzy6XFT1wbtvmbJX",
  "key42": "2QsLZQ6y32AKmpGSwTow5omyMAKzeTAqLcHrk59uo9FhnKyToF9bTiUdqU6pJHm7u7psMifFjwUCoNXW882UdAMC",
  "key43": "616jkKumkx1wp6T1XHPTchmgeitQRbA3sSkH4Dk4EXe6uDFo2R3DyxGyLpUgzVVkxoERyMgMZqKGb2hFSinKNoZ7"
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
