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
    "2xwff2x9GCAXUdUF8qasf1Vjb4uLsosdiwx7ZZkn2jcQESsVrZHNxvg42kTbWBs1gavFMoWMNTYSMcu1kKjeU2hU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JmnE2jVaEST5miXLgWPg2hBrKxbeLANHwWvurDc9AMwb6fqyyaUs3Z9t2JfwGYYrZ3c8HtGsVraJgpUfK9RrScJ",
  "key1": "3Ee8dYLEJkPRTCVQsG8dWWKzuXmYmRx1PySMwYJAFFXF8tt1JkryeA9uNWB42BywSZtgnfwVke1ynzKBxKcgahH2",
  "key2": "j8NakvHTx2ib7GDv2hcah3pLPPgJPW2eRKZvNBN2zW4qG2E5BTMn21C8Du5mLgfAiiYDjSAKL4DPGEeYM88UMYX",
  "key3": "5wgnEQuN6M7tsKHBr1DgZNXkW1eCvfzSX47QgFUHLuMZ6meBDYaCAsbkUj2uxyLUorqqbGs6e2AsbYU4LSBUMSRK",
  "key4": "5n2tniXuyMjGGfEEJMPtHiCsMoZwsxw6Q8qfokEUaiM6XDJZEtwXbsuZMZYsnSR7GCDBe4iUWSbkrnQCwk9z5MEB",
  "key5": "1mpwx3JC9i2cZpvvCgrsMhJcLamMBLRodQTYYQcTc1yVR4ie7uue2CRZ285cB3iU4rW1oand417kz5f8dgdu11P",
  "key6": "5kcgtoFnjPWiqYSNLoZvHyq7oUMS1knpbvfw34NQ4Tp4hJg9wAqbeQZJUvs2GYKHRwVpnGtpjHTZ276ACcw25HW3",
  "key7": "3WzauPhEXWFZXtnTPN4WbgzWada8WRMVJtS6MKAX1h7s5khz1FbGP37yrg4RHigRvDmmvvBL2uqg4jQpYTiupCRr",
  "key8": "3quwYKgevzLMGb63jDiVycHfqU77rrs8ArBr7A1iPTURZHPKSocpaz9p6KfPxAyKC35Hrd8U64e7zHDz1yo1TbsA",
  "key9": "5fi61ozh1mcyqnjCUkNjrBPFoxrY8rFwdsLD7kTcULLSsRuA2pkbC5sws8UfXLkA9EiydxwTSou5Pp6nogawq9dz",
  "key10": "3xEb2Bn3yALpjjRhi31n2pECGFEx99sU3adBD7fVK6kxryZMfmYH2dmjtAcJs9RDQJRuS7ZgHz4MfaxL37UXRAxF",
  "key11": "51PmpgYjej8drQ2t1a8adxkkdkwABbcwa6wBYDZPes9kyTqAMgYjUXPpTUXv5NZcU7h7o7ypGD6ETp8VvF6pqGNZ",
  "key12": "P3VnHPZQb69kgRnH2cBWbK1L9N4wgogro8RApxrJWK4UgFioLwmZJ4qWC2SHPqtvgMLxtTiNfDtz8k5x4MVUGtS",
  "key13": "21L1f6r1BJwUVu6s6p2HAJannKuYeeZRVrQRATiW49t8KvhcjFvMcHJgfjbhSxxed135KCwDi7XBLyj27GSkmLjG",
  "key14": "56KeoPcc8iHfaeGfkhRF5PrmEiLHUBY7ubCv5qtyFG9QXpGaDKrtNc5BxxASi37R3uqP5wvwQLagQ42pr2LJ6SQr",
  "key15": "48qAdrWJFMW7rvbCCahEhmTYauabQ8jt6UThuX4hCWmVkSmKuGqYAHFSdfHcuBhrHo7onveW4qtJag8qEgkVsSsZ",
  "key16": "2sH2Qtgk2z6HdmT41EarJJsQWUc9MnApaH7bVii9g53adkykWexg5sUmyjA85zszb6eEBJeuRSBiBt1fYvbsBDaL",
  "key17": "4jndq4dq6vbH5S57JAbRNXiEZ2xL1U47EmcdWwLTAdWsVrk8Er9mRLRFfw4SdCPM1W5BSoAHaa7zFxAogZ1zyqRq",
  "key18": "2DQpKGtxsBPfSTmxFYyiUBhvpdAbQacnA2LcU5jv8HSdzQvPfChnnuPw8b5iyD5FFkKWW5koPidNZWb1bZZz7MLo",
  "key19": "3DRVbXV9Z2PN95MxJVAfa4ZgBa8qotxiYe3rcxt3hXwtaNLB8hQWCaagEDqByCgbCn6LyRFqVpX9441RRiHqy9GE",
  "key20": "5pemBXKTgS6j76V6uLfGDVRVH24Nb8jC4TkfRSSVCNvvVNHUpVz3mbrmi3NhAXFoRcSm5Q2CmXTHW92hKBZRvjT8",
  "key21": "32BGcxvDgxXoGJi7ix5mErd9eNECP133ZUsZWA1RhXbpXz5MZbqZ6UTNARfwQzRwjq2SXNgfH6NsNUBqLLMF2PYZ",
  "key22": "o5TFBeP4No4SPSRYK7FxtFzNKRuUvFHKxFs1usa6Z6zwTGfvn9mTEWsCZ2nyo2nXnfTXm2Uq7G45s8YezqWm1Ua",
  "key23": "28RBeh5FgUS3Fy8c325ft1a4rwzvqJbcZd6pVhBLoNjt1ibAuxgVLcQbRfJvhLLWehSUguAMeDayrczxBEgc87tx",
  "key24": "5VXFRtk1d16vnAsttTa5YtMkdsUMWeaoXgxxfKLkJFvVMZ2yLLqyynEBANW5SU42Ua2P3Xm3gs4i5EfrkDYAFNuf",
  "key25": "5A5f3b5Tgfj5T9tsAMQzHJR9qSY7jaZ5TN5F7JZnkVs1fWMxbQw6EVRjvKoqAScdB46MNT8vdoUyTjHYx6p9qdWq",
  "key26": "3NZGvAQdh8hX1i9zssEqPSHMRj6vfrktdwzWxAaVeBQiuB9Lz8BsKrZ9KYVAXbHWLmqKeA6HT4ZP811QGVGJt8Xe",
  "key27": "5wzQKgYKMn1RYvRk14DfiChTv6LXUiLfygfNT5Mn9jz7sEXSap9mQbY7JEEbZoRJK5Koa9jk3tzBt74rdNMx8Lyq",
  "key28": "54i6NEt7R3n8qPgY75WKKg4ENUBD1ohNdM2y5kSBFLmWYe5PJVbDsdccyG9NWkmeEky5u2cXR4ELynzcdph472Qp",
  "key29": "5to643ypJo6QfZmWrQdo3hr11NE9ehjv6id4mSHK1JDvUtWxMXyF3ynwyq8VDkyr5ARi5Tn1SJLucE8AsNkY1Kqh",
  "key30": "2EiDXTTr7TsyagBpm7KKMXdUnVDLqCUNNBhY8MFEepmice6PVxuDVz9uxfckjenCaQa1mepu27a5QdSbLVFPZQ9Y",
  "key31": "4y1jSDVZw5dAK644srtHa3PiLmjVsRB2ypTjEDTKdkLoaY6BRMvJ8oGaQZM54nWugvq1k6ER8qPpfQ5NKWp3zUZB",
  "key32": "4bF5qaaM8mUYGocAdjZ732pqQSyPRCg77tueNCWBKLhn744D4wzvcjSbYHTt5HCBo75tk3TKem1TUhmsfmShF4tT",
  "key33": "KcNtgo7EbsQW2LRu21UoUUdsqqhkCC8HeEkDaHPdQQUimjrwD1XdJdvraWjqQcNU97NSpfrWYVSTrehstQX2UbJ",
  "key34": "66Arc9ECn5aaKVFpRV99VTB1S9yzhpFAae1QxmtnEyrKBNnzPQWyLCoqr2n6ZzJqaqD3rgFCwniHHpUyr4P9TU8M",
  "key35": "5LJ2yARwZW4ZyeoRwPR5xm8rcsExJuqcZxzJQuwXSYwGrpSbLkhV2yBujsBkf3gsNkiY1hDNdPX9ndCY5zK1HWz2",
  "key36": "5RmwvbUKm81Y8e2kL9Ugg4GDNmxYFH6jmSkrcQqPXH2QdcNBxKHACcNu8xgXqh8wTazDqYMXS4DQtBDcuDcBT3YJ",
  "key37": "5XxDfYQDpQTaN2YiCwHyyQq35xvgY9BockhrkdqkcW3Gf4ZoPZvR8dNpWWvZaTvfuQq79GPHt4iAapetF2cRtV5z",
  "key38": "UYxJdHDft9to2FMuZai9MGMBXRuizyzrhPPm8GEoeRvU61pWnw5DG36n6pvF2Ut9EFKNdxEerQJ8zZgd8CaUXRu",
  "key39": "DUwAwhduviGLSGgDjjSFckNzqoGbC2UYiYb9ogQoWHS9ZWCVawwyJvy9BmJf7a927XKi83SvWtGasQgh5F49aoH",
  "key40": "ffc1LocN4sDn5CxbppnMtUNHv5zAhW2ka46LXZvDXfqDwiw2yDrTf1TWpCcngDnLRZraTezB7qG6szEi2jw8koj",
  "key41": "2pw8a1AoD4qj2MzMgyrC2zpjB6ABs73b2LV54Jq1ooqz8MsqsxDj9RRezvU8zxxMfqHixqugTWQgBsN6F5ouJimD",
  "key42": "4P1DJPeKb7iF5KYPjyLLocco2JvJqtYyXbpqd1mMovqW3ur5q8vft4XN1oYXBdXffpAiAqA7yNPbWT3PAtphR5Ly",
  "key43": "Dn68AKocc54QRd1JtjWdLXUw82gTFJkj4SWDx9u33Zr2DWWqpanfZugzzCz3zBDonBez1EopK8aRm3kR5mcH7Ce",
  "key44": "125mgD7fx6M6yz8r64DzqBWsLXB6hbosVs4TNcSACD9gXTBjNS6oqsrTLKfg4Kb5TuULdQtbZ29JX1kH5RTNKx8m",
  "key45": "3R3AXzw5XbJwchNgH89Y3NQMFDAK6p9aEWh7GxbpZwnCQkj8iLgsWjBaAQFYemsFAf1DUMWiUGx5BxARswJVZiaU",
  "key46": "NoRUtdhMf5PsSg8cNeLHzBGPteNSrp95wwg4kw4Ee96LVu4XSK4XU7sLgNPWmZWvrzdbvFJkuZKkiXWzAX5S9fX"
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
