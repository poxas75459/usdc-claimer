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
    "3CNQjkHNZV8MPkVfEJBdVw8mfw8Ne7ZtoD4r8AivAuW5PtysqtpbSxLqCRtqoDartr47jcRW9duNT76vmsVZkWCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FaESmr4GjDE6Eztg4DDCZSkyAsAAHmTLyQgRVvmejXWKPNwkFPmeD2H8hHHZJbMgJDcZSAS2APrPTjzVzjcdq9R",
  "key1": "4ee8yz3HcN7J18PnWDTTAtNaG8asmrx9LhDyXbdUbDmDvBLextCwxCfHAqgPvNJB2f9S7Jt1b2THju8qeZEqXfH7",
  "key2": "ZXzaaqdCvFDecjZ2RRbjhfeSQpSnThHx6GsgAArXPTa5Y4w1smJeRZTWFaUd6CKWnzocfsBVM6dN7F3N9eyN5W3",
  "key3": "26Mkx1wF5wAjtosKs3M23uCHW7cP46kaB3SZ2S887aXUCN5JKnZXpdCpbE2g6TyFARCRMtUd4WwCEZzJZnBHKV2K",
  "key4": "38SViNU8gpE4BqWBXPzsnhswf51tr4EPXSbrgXq9f27YxyS6gApcBub7mGDtbnXJTE7NxuNgFPu3qv2h4g7erTUH",
  "key5": "4Trerjjt7JkGU3TDtEsD8L6f9wbKa2rtxXowQdtesT6W2hrR1v5pJS5HnpHVu55SMdGYAjndEtMitT1NBQmmiACe",
  "key6": "24pQGiTrA4QApYBTJnNbXQsTLJf283LWtGhHHhSXdF1HuVEKtKgDRAmes9RLGZzK2xZyCa6TTYou1TrnVMncPxvE",
  "key7": "26gk35bAef6mDGo7rKzVwvbNeEME4JsjLjyJjrq1GZ6JkCLxSzfmUCTHEcnknG4j1RvJyMxttYm8UuY7qVzFH9ag",
  "key8": "2YrCYcrmwU4Kc7bmyPfPJPQ62EH7LE1EgwZs2URcz9RrWtq2iQbSLAeJRpRUGU1MFwry6EUSZxVFRFgVzejVLc5D",
  "key9": "gyoUoaRCJ3yUu1kxjXSGMJeUQJLyNUgCoN8Vwc2aYgrPJBZ7GSg87uv7ReSxQxJkXJ5yEQJhGngwsb6qkH54qmy",
  "key10": "4oUkuNmCKnVUAwYTRbQDmy3FsYxPYK6BEY3CQo2Zz3Hc1HCkK8WP6XTv2UEZbDrM4vbwDJNGrTDu7rR5Upifpwsa",
  "key11": "3zaee6sxgjY9aWhV9vVH3ZoFRZRgws4jGig8YFPAb9P61Mej6At46rmigFuPH9S4DqED4LG25gtB4s8pcqPFwhBu",
  "key12": "gLpDGsCgobyjXVgAzFmdjd6zYPf7FKrUxfWhgMezKC6ChBpQN4PRk23PQuJr2As5i93ScPVqdj9Zd8aZLZkGXFf",
  "key13": "5yJY6Np2zoBnEWvs9Laiqh1qQV5B7f39LNsqWnWRuoBsGCD792myjr7GgcNuXu6ae1YuM4FRtzk97t1FFDm37jQ7",
  "key14": "2xWp7tnFGWm1s3AJ1JCCZmAmE5ZUZLxerMzWhhsKDohf9jnrFTqZz44mwuMmhSfata45EWzPagL2V34GVEdQpvyL",
  "key15": "MLsL6MS7jpScxXakRr2wEmGu8AnVUwRQqZk3TLVG4FmGYamDxfed3xzkFA7tTS9xS62nEDcf9Gv1FJ9nNS1ho2k",
  "key16": "43BhPJpf7NKoBmjxybWVUCiNyZyVXpEe6yBtDHuH3Uuz6jBTZEV4Ku9Qy8EVRYWBe4Lh5WK2kvjiGAsKNP6taRgF",
  "key17": "gfHmf3NcnQVjXhny1XiZnhRVMKRJkqfUDtLCWhuyi8wHqedwCcpM594WVH71MUBSAFzLtHFM6wTMV9sAjffPP8i",
  "key18": "2XmzrDhu7hx5twLgZ8oDAjPh6RCnWYLiRPHsDJx8uuG8NUof64XHFwkpHVE5mrLNeJwg5VcBNNHdqR8sQsE8ehhN",
  "key19": "XqTqiPFAKGfXC9up6wvdWR5wY4S1FWmKgX6FFgzQDzLzG14vyTKUKfGcwj9boFt5ZbDKu4CAp1PwZTue8FgxakB",
  "key20": "3Sz9DCidJare5vf7wz12drjZDQr12DrHPTSSTa9ASkwpbnSc8dFCE3Y1XG26i24PAVz3iFsXU8kqt6iqHetktwnC",
  "key21": "n5rzaDjdxeXBBcuredz1EcHNZ27Vq6gN4SPupRmt9JzW5LwvihmqwtGBGPDvUaAJqSUNhydv9CEmQaeF7o7En7i",
  "key22": "3nu845eiCC3nyfUrx3trEcWSv2H6AHBw9g4TBc6GqKroRHCXW6f3h2ep2uzCyfghfP5iuM4EFg7zMwxz1pDMR2QR",
  "key23": "qmUmCcvpoAG1XKaijq1UwW6Cm7LtoWdbzgbK8aQstUZ7pEtqJwGBwAPC4DUBXF2GXNJqpvHPr5Hz5VUdpFAbXBD",
  "key24": "444Qp9hiPhTwEiPvCeFa5df6BcXSsXe4DdN2ab1NTetjXtnG5gSu2NAvpXTY9JCbXkZzifLMEAtwC5F7gH4ZfWHi",
  "key25": "2S5uHtybvYyzdsrgSBQUWwmNfUBvxA5zU8CE5WH53s2GJs8XbAhFa9ieXqA7KWX3qcNSyANt9Qyxakb3WBxB6wMw",
  "key26": "2nqcBNFEaA41GRpGSHCGEcBgHB2WExwZF4ScdN6hS89hemnP6MJdUbgooRBEeh7SjaFQexLbAN9uYet1ZyZ8kxTY",
  "key27": "5yKqGcWii2q2g1tZC468yCzYJ4C51LyeRxmRw4ocjf99QuLQYCSVwHhgpTAc68QxWT5w8qSc6mLaBaBPHvXkSPd3",
  "key28": "21yN9UXYyxCRXbaGDPopoXQBLCd53wB3A4z9oPtHGwnYtBvipvDRFU38sSySKrndUF3ZY7ZmqSSSLjgvfZMaxi3s",
  "key29": "4iH4KFuw2n8HWNxJx5gEjtaqA8jSYcyeKTLU9T9WcT8pmWkhmf6NSWbnPrNJ1Cym9hQEes4YU4Aqf4vhxWBNcFYA",
  "key30": "56acFn7fZ9eHSWDQio66SsgbMRX1jfbxMPfbJhwCCGRvVH1bACB9yDB3byxX6PkPPNatBqRsXsqiyKvS8cyVj7kv",
  "key31": "5d5t4zNGGWZaAjzU1RPTMPun2C3s9dGadgRzj5k7zpZX7HoHpv1yumBDYmFBQ8d4wYgKQZx55KXNFEs66kUEXQtQ",
  "key32": "wc9h6yFBvD86TQfpwRXQnKVnJaiMwsa9AyqLYzsJ7AZL6NxwesjtPs3AZMwRNuqGc4WhsuGHCnuMweCDC4DS9Ai",
  "key33": "2Y4Hmtwk3G7GQabmTUP5qmcBmn1wBxuA3vKvVFJ5GDbDMR74EJ44wP7cmqKVWoFLWmfgdd1pDRs5VQyMoBBHGq3Q",
  "key34": "2qiAH4JFUaY8XE8rudDcb6yWk96Rt7FSQ1rv8ozKxbtsY9gVbHHa9PzHkyomZMbBNvcLoNrUJzEoSuqxffAxhvLW",
  "key35": "5np5vLkrfVTt3zBkZjVm2GEYSBVR7H3BPiWs36FUnRJLYyY35yTY5VFJ27ypUNJf7mrxxTWXPgf1S4Xq1L3TLoj",
  "key36": "4jCzMgsiuvgv3Am8VY1AU7xkrWJQyahU4TktabnoWzvDQBwgFV5Egj4qabTCNm2nRgPcFpm2S6XcTcwpZVQMqENC",
  "key37": "5E5GRs4yPcBpMg2F38KbEdfxppa1znx81kwzaAMmrkPpirvFc6J4XtqKSxg82x5qcZqVkBwLGnAcE6boFKTtGcyt"
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
