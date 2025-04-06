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
    "j2yZHqwHhtaH7BBs7jcTjUcqqfQ8gctmVU7cz472k1nWy6D8CeAKZyRPFzgR7TUrsbHAgmHnTifUNeJzsHq4TVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HSLwKe8vfJe9yG1gqQLxeAqpUbQu8SEzrnHzPPzxnuXLjhmJ1XJ735S3UJhCcjYUoohsrk4PrEDWQJvC6diSPqf",
  "key1": "3c8VhNHiXas8eP6JiYztMVLbmNuW5c9GNNBtPSbX6xQKLyoeFJvAENZPCFuH4LutAQ6dH2hSmwHmWqFnFeJ8NeXK",
  "key2": "3YSWvxsh9Dypz7kdZcb5jkgJjkyzWmrB3CQbkqTBMpJeXUyQMgmYNLjkBAUthnzWvzt5MY3un6Y8Y6XSpM3Bh7ms",
  "key3": "4kGVJWRp24H6kJGcvmiTCHAJrczXKZzuShd2s7ACqcCFneobTwXgnroPF7P5RGAdQKvbmaTPYFp5PpqxvanpgkbP",
  "key4": "R2jtSLhKnPd3Awbk9kpfVTkvW3gzdfvvPwNncxsknfGP63RkCMXM4beEd1Y7YG5bqfSxKjFhkYQc6FEoaQWsby3",
  "key5": "51nh8sb72LJF5trqpE2vGzQSyEw4u7hVirdxp66BY5Rc4m3J5bq9HaGjx5FLCHegTtxTiW6ZhuaJEzvYWu2Uh3dF",
  "key6": "4mCrNSnLXyCML7mMHz4TNWCerf5LyDffbg6dRbKKJonxdHJRrhB2CefQ16MRuuHM9niVC9LxBQPGDxi1AvspNuUM",
  "key7": "2VR7AkJRVeibKDvvNvDieLvnUvUHcQXbw1DEcYqr6NYxUMdq1wqdMopwcfdg8jcb7AGJAzoT19Jwk8RiAhDjPkZ8",
  "key8": "G6RMkvAJCVrN3RogvxJUXkTbsjZcPtgwtYxFH5VV8krgKQeegJnyMcJcicrJZHKXorSvQvaufiGyaHTV3UUuiut",
  "key9": "3NWG5VAk7xWbmfByhRLogrkXzBWhiGdGChxaA5wfPvvnjAAaNw75PJCZCB9KRV7QKH2RhQKQ5NYZ7B3r8du8q2bu",
  "key10": "2gSRKTNfVjrAQHgDzPrV7ZMm7ZF7Aran5HWHWTcmsPmRuXV54ZYnw7xGU9NKtJ8u4E8hQat2GHQbEndhsUzyNCb2",
  "key11": "4F6LQZic5NZySfaPu4PzLCTjgPUM3FyxHZi946AEn3etJnMUe2mKww3hmKmCaxSDDjZT5eEoL9tKK2i2SQ2JTnes",
  "key12": "5LJ1udvYvRdHFZ8zvW7Rf5uZdntTHmRoAV2NfEFpSZXLCmS9Pg5fytpJFR4awKfQLj1a9eyWqZ2qud875BcRjbuk",
  "key13": "2pc6wHpkJtPL7CGpvRcCXd8VAba6cY2azLW55FGVrrxgh6TfeyYWhDL8i7N4s7QMLaXdGQy4diHHCtDKPve7S99m",
  "key14": "5YNB9L6HqpzBjiajB22WKd8aDFMoJT6yVibCf8fjL5irNYT7H9dHVJAQLdtxMhwvyfqLrmq8bhFWhsaCC7oePH6K",
  "key15": "LS29kv44dnrXdNgcLPywkoEHaWMdBYjCBoG77Do4mDXe4NCkyepdJ3KSTUzwjErJgHP5R3eEdyno8kp9etUqZZd",
  "key16": "3k6AyiMKyALn2d99MnVB4p2gpWqDYAeRCowS5boymV6bm29YH2BdRXXc9VgRWRqweYN4kcKgpkp4daGqQpxoxva7",
  "key17": "5x4FqsqkH8HBk3o8R4UP5CWYy8KxpHUSq85aVdcD4X3R6xkexhQn5fQSTMfvpGwqJiNZcDPZH7mbfxyh8VUPbDmS",
  "key18": "3aRnn1yaMNrvemW8jc47Daom6EkzQqcoLqd7KasZeqxPXMbsbKeh63SWafYwsJD5V5VRgEZWmEjsMVePDBAcVdtu",
  "key19": "4t2XJqRHv4HVbdb647DV57JQnUXREW681ZsFMTBCps3x2D8daCLTzn9XgRxcHtd68MMXVd7Tox35CLEyRSpZzEep",
  "key20": "DTh6kYe9MosHKUTWjZWLXfPoPVV7RStP7eEmV7c4zAUWsv6QNCbsx5XBH9gnZRdQYW2h3JyKUojMxggPUdpER16",
  "key21": "45ZnAYxvxLYTw5SnNJXrRUNxsWsQqn9kqvyaXvinJXSz6XQgjMP6dbFj2qNibe7z1fLXmtJowd1EWcJQvHMnu6PX",
  "key22": "318Yt2uu1ZMseDyBoAs2gWFjqDktw3tnFuE317FGCQ3KX6H9GNQwG4hPj1fT4F7i72XmcwDwwZSaBKW5jLyvHKPs",
  "key23": "5xbnDGS2YaHjczRLGnDX4guWyYK49Js3DqcWVAqiPFnAn1tBU2JQ9iC4fe5uDPbJT7JVF9CidxLCWpc4cjZfnLpj",
  "key24": "2ngCJoqSWedEJw1oW84VLRqQYhDLUYHULngEKNEjCtsvYCBWtEhCk6wb18VWFqCFXekuJ61ybQbVWSEDrUAEpoZY",
  "key25": "1yqqrWWzmF1xWmSCB6NRXnziQxJRwkzMuA6K2KUzquqY76SFBLuP1QoDgqxbhPSVbYtTnWeJNJ9SYA2fRnv6YAv",
  "key26": "5PsTBHRqUyPiHVL8UCKqUnn2TQRRknyKDYJEoacj8GjKpUwq9zsBwpAc5zYA3GhuwSVzK7oDBuSDcNYFu7pDLf6P",
  "key27": "469bkr3SdrD8mW2GuJhG88AF4BjfG2ZRKcEXGNDn84xJhkeVmCuGh17ymNtPzBgZE1jjsrFKbcuZUe3DXh7gtu93",
  "key28": "2Exv3c4tEvQLE3dhdveKevsC81rd9fXQkfmBugLiw5EAREDg5tM9kUpvVY1LekKNVczCs59vRBBjZWbRhJWSjDBJ",
  "key29": "4XurRF6Jsfbxa24mTvtfp5y6GYc6EcC8SYH5pfQCEpKyZ6tZGbURxyac4XHSEe7PFRXcrhDDrHK78iKkA7YaxyrX",
  "key30": "4ZFCAwAyAo7Y8M9SoVbmCFbuDbH7Xth489gh6TjrMaVj9FrcGyr9xWRWboHgr66rYZa7LZFqrVL9hFNdvJPJiRdt",
  "key31": "RmWNgCCHJ35v1e7nW4bRqXgk1usJQKpcq7BWiDYRzNAH6F1gEiHKcFgrm56PsD7niesgpG44ARpfxHPscZNS82J",
  "key32": "5QfrojwVv7gumiGDC6DbmWfjNJhGkPj694ie4My7BfMW6WzasTDRPcKpqsG3Pafx6H8H2oJDrsBdmjpU9kNRmqgX",
  "key33": "2v6wnDSsP1YjtcSnfASJCKHsMn2HxfSbJNvGHn5njkkNFxY2b5R1G2XJTpkWQgWQBQ2RMVkLGnUKvNDbsKfQPwKJ",
  "key34": "2ZQAeUfGJpZvyQdxsSDuFjdnrMendJ2kR1rpnToGjA9xfwRwd7A9V7jiDiA4Nwnpeij7oSJJn4nqwADWgjjEEu5u",
  "key35": "2YVQ8mgLAYYxnQhAXB7QFTRpMoXjyM31tQdrC5EwR8HT2ZoA4x7N8qUw8138ZCGFJnbZEXYzYJWFPru1jP1LdsZG",
  "key36": "2RdhhVvuw3FFPtukBXkTdakEZ7M4wdaFu372Q8rShGSUtJBPvqCcEbyR4WW2jgGWBu6DZ63TWACZ1rmjEkE52JPu",
  "key37": "3Tue5o8Qa43uHq1S59cfbKK2GjKmN5knuYdj4nDojqx1d6KXqRKCFBzdRGCpa72kdXndYxfdFgE7WBFoQWCaizjW",
  "key38": "4QqeTrTXY65SdWUP38jHoJYqmY9LgQZxCyRnWzucqCXQYy3v7m5Vpng76ithxbwRFZvsM7gJ5fw29Umju79MBrih",
  "key39": "FmRTcCcmYHCV2BmHpA5H4wmj75nsYGtAvUVH5azNj5gejjAMp6Z9WCUXcVrwYvBGR6h9AxWNa1Feqt7emFuXkPX",
  "key40": "5sFWZUsLyPrcTsvBdapZLambq9QsGMAEqxKtRugDxXDkzbz5x6eqpupXQdFFkXHSMHDoB9iffEJasuJZLbTU66LG"
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
