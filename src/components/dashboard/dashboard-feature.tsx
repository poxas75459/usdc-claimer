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
    "46o4sTPhXMX5MD9wa4dAPCJ4SLFyQeM7PrZzns76y7ScpHrgfsHHTxdw7HqcLammCXALCvaRSunFYAeX2xvnA72C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W2EZUaMFe74poCKwh14pZtpGcywix24kwJBSmxdphswdSgo1VLRjCgAz4D1SANcj14w8eaWyv1abeFr9cg85uVF",
  "key1": "42kmcRDd7YTV7EuadTNDHVY5PmKb1sdLSNVqgvu1wE7NkDMuvfwgHa9v3iLxS6AYLp3S7vjV3jsYYfVoz62Su9DH",
  "key2": "3231SKQy5kD7vS1ocGhDPw76ucs1GwXj7iJ27uSZ9DDY2XEySDAx3Q7LV9we5xu4vAiC5VH92P2u8zosHUc7sBwh",
  "key3": "5Y2Dn7zdCPmYSXdPSEiViRSccSF11TfXBY6eVi8qMD3UEk76H1Nb5KFgHTap8egA6EDJ5cBeXEjPmtg41Nt4Y2g8",
  "key4": "3yugA8X2b9DQb9ssSymLAkyfRd4YhWvKKhU4rYLyT1o7d8HFqxCy29VrtXgkJgbEkSsUaNrEr5ZNSjSR8z3p7S6g",
  "key5": "4MBUbp3ApsCqGNF1VYGpFsLECRJDdJh6WuV4jHBT6va5GxGgQB3yMXQDkaszkoAVr2abwuAaHRRYtca464iA2zpb",
  "key6": "5EUJGLULFVG4Fut9SZioGLGHuTRwyE9ZZsVfW6hVV6xndoDWJPFCRg3KVZQPCJ4jjTVrs9Gd5HnrtJPpXwHELxzR",
  "key7": "4Fhy5JM9AQ5U89HXSmqDyUY6kDFtS4DYoPEoHTJD7Xuh99UuYr1kr9J3Y9b3NA9yPrcMjKcPh5p2ayFeLM2P7eqw",
  "key8": "2Yb4md6jKq3BGx2xhn1LVTQivpDpoXHUYnewaKHYycR72kK24cvbMzowMzWW4iS8CKJ3or9nFyU7sZmRRBtcGJbJ",
  "key9": "3grKYaDiFbCZcd2oY7LHoGXAVsXMUMiwix59DQPWZNb1874xUVk5j3XMj16gHjyxbm8o64jqTxm861eihKER7Cbc",
  "key10": "5QxfLPKRnaqx5mHCL1ACrN1i8QJCE7BnpjrPguKhC9CnJGVkPZfFVyqSUHp4pzskeYQ4cVLFJTTgfXDWcTGurWd1",
  "key11": "zxgCKVxMQwtib3wRD8uLduCwphimLHPcVX4zeBoaEaZuv3A9S464od1Tr5qCGfGfLCMm37knvhVK3pJtu5ejJgT",
  "key12": "2KLPZcFft7i1DLUzis5LQWnyoJKJ6nHYE18PGkHYtTu3H2L2dXUmgPsxJC1EMeyMd2DK1ZcWW1Lz86wcESZMu4e9",
  "key13": "2DorMZQx8iBSktBJLLrzUjR9jqSSfHYUpeJVtU5LV2wANJ5KDj2XtAYz6rLkq54kMKXZfc9WxVDk4QKfZXqHi512",
  "key14": "3EtaMRiNft4SVNxjDqZkkR7b5TyHFnBYok1gtp5fiGkhBsdReZT8accA6PFasYN8o2CLbS8jEmNtmzaPqXaYTosn",
  "key15": "3XA6wDrzu2XCZxgBEMPRtBCB8mV9LBFQpHoeGdSatrSQfDZWMDd1AEZguxhAnmVKdo4EZTau3Jhv9EzKKziXBXhx",
  "key16": "4syLJRSjPoiPbPZ2ez5sXqk2dnq2wHY7NvvhdpxTkPPmyy73TJkhnyxSBFGsLjLmW5A6hSYbuTCcL8GMsNbufzas",
  "key17": "2o87drUbr8EtAzimRLGHKaVarYfNixZLVTDTind81PRyf3TCHN57i2FSQiSAr28NnqPGBASDts5AEDcw2vAT8MgG",
  "key18": "2rpmsYVZsED7QdpNQzpy4wNiEfFbWzPvv1fvKV1eE85RggbpXrVyNoWaySA2HqQD1tjqCvbFSdrM8upsfgVyk3yD",
  "key19": "7ufkCjP8dFrgcevXJR7NVgn3ze8B6BNV7DuVpur53SZDfsAAzWN9g6KkcrjfNVPjx2XmC7ZivCU3Lfmg8bKaG7Y",
  "key20": "3YAQkbuNdHGEhG9xvxH8bDXLSd65pLydwVfbD4Yp3rR3Xp2XbpoMzPs65ZvQqgP8ziTnaGyPaXTpDEuSZqgq9icQ",
  "key21": "45J6LqfvqwM3JeXShDq2NwcdTZbWYqpSMfhKNCPRp6vHscjtGbE3JNnHghAUH7pKoMMPTkyyKVyUZiWeWQ4L4rR3",
  "key22": "56rZQAnnagUTNeC8YjgTV7LQeoK5XbxD4CCgNH4PcR8AMY2KyZ1NwbB6xszYoCd8JwTtAQepkHPTibtnee5uGmEk",
  "key23": "2cXL1Z8eNxgufCGMRtRVW9ydWBSEbRP4y1MmFA4ha4HAFSv6PUZ6DcRsJBDHXWzU7zmg39so15hwvyvsZ1n5iZLJ",
  "key24": "4aFUFE77oYfa9PYMhZrq7vbozMCeSfVcX69H7CuVtN5e8ExbjvoRrZkreLgys6kUdb7CeCtQUVceVYYSdeTugJnE",
  "key25": "2KMoPtmP5JiYE55BB2rD8n6XFK5escPhSryLQMdVDGQvFGbvZwwsuWsnQmDcbJVRRz4677crVg2zqU9C4sKHgeJV",
  "key26": "4GEqDKgb7RfdL1NxqZXBQQGds2naMPZXQZCydsym29soYjizXTauMLLRRVjQFETSgo5E82LcfYwcVsiY832p2Mjn",
  "key27": "289UGePjLtezkw46unGftf7SPZyiQaq5GaLY8wcm1UnX7SohJYxSTrnDHaX7wFwkK3tFos2XgD5NGDCtN8dVq15o",
  "key28": "4MHZ2jVVhUw9dqhYvMFD8ZdEKEr6oeXyLwmkHNaKoFDwHvtREj2yRVJxkkrvS6dTAz9GWAyVf8FJyVp6ozmAV9th",
  "key29": "9CsETsKNpiMsPgvyBVbwtffRkK3hk2WPfG6YZb6dV2ahUPRUGSd7r9QAgFLdBLkPnTkmVbt9wDt4BHtUuumS3XE",
  "key30": "4q1L98GYSzE9hqot7URv3yuahDQzn4Hy4Vpd57vu1fQW1d9a3mJEQsYzNR99pvTfMJBcjokmkiySMwGN71CDGfFr",
  "key31": "YVmW2fccCW1zTwKBkRtRKP9xo1QGmys9XZGxC2PzRypWRRh9o8mqAABWxb8Kqy487Jh6cznfZcPU95VMcFy2Yd5",
  "key32": "4PzT48t15s3ReZLwRgQDZQxVX7WQJTwUa9XZ44F9GPVyXGaCdUGqxgp4zLzYAKrueehrpRkLv6ycWqZM7niHQxvk",
  "key33": "2gcJYomzY3XKPTovRxpPaDfQmxF2vM7MvKDCHX3ECL5a7fQC9vEw426wZnuHMXyCgT4RZw3rn8yBazs4rX7atLae",
  "key34": "VRrL5KtNWyriJCmbEBJtQPrMaTaaLbgo9ZWH9UdphM3Bo1Ed5VQa7dk8gtWYKEEthkZbhDY8qAoTgXo8AXEK6Tb",
  "key35": "5aSocRT5qFrcUeFMoaDujrh8oJRpa35NJjgwoG4MH92cHUespitc9XUjngVz3HoQVGQvQELu1e52tq6hFm16faWK",
  "key36": "5Vd4Ur9wFyoQW95wb7Pb5a3sftZxsqiLnREpZ8VDQcPSYCJZirwWMftsLFr2v6HtoAXPFmY7Dniq4CwkywVc4DHB",
  "key37": "49tbaiC8aENrGW7LnummCscJCjz2mP2GRCbeW9F5EFXCFvgDfCbbny7QqdhkxE5hgq5pj1wxgdD87vpChm6Fs66P"
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
