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
    "guw571XVnMiMnbuUez1hkynfyknLy6MXGcCq4DNypb7CdWk9nbTTraB2MTM4qqgwzdWf9NJ3uZF1FvedVkVBGmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "maoQ4zSHAQeC8pFzRZvoepvyLPw8cpmXhgMXvcMGwCQRjsdFLXdTeeactnur25ry9UNKsBX7WZZvuuiVssV7QGn",
  "key1": "4xEcWph6gVFdX4ipf5wZSCyk8hzUnj4mGCyVLVYWA6nxuuDoFT4sWuvWrPKDhNiSbvPs4nfyVLQH93QrCkVG1DsS",
  "key2": "3FuvwAuaGs8DUwWPFQA68tBvBdnRaCZrcCRAN2X2xyobQKMAUBfWBifFqKDRrBNikFtgvdhEjTrsoH8Lb1EdYdXe",
  "key3": "L1SPZr76TKSDeVP9VNJg4ypjQ3asngyU2ou35tFiyUaV7PCDK69Qdg9fNCWRu6UzPoQgH94m74qzgHWjUaWaxgj",
  "key4": "2eyueqUnA5JuXRTPd9QgKguxcuyzSbpPtWTCv8Z6nEBbjJ4G1cVeTa5kNY5RDbGNRgtfM2Ws4n1Z7oHBZNvJfRN4",
  "key5": "5kJjexXo21RRUu4PUxHzk3BPvv5p1pPAVxJbZqo5m4BaU6rp5tmKmvu5pc5QjKcqiDBaSLPLSJbznD71arpGtKc8",
  "key6": "5WSsf8sMnNEnxpRVQKd7mSik6UxtBChr6xcaYi8LCbyBsuHMbTVuNe5bzQvvrb8xX5GiZLABU12AScj8by1y8j7e",
  "key7": "5XqJvkdVt7uQ2r1kAACMMS21xZd5u8c8iKAArDHbJuffXmNPXFPmruEEMDafMbhBUJNZm5yG75CWeVk6YmsCHfRX",
  "key8": "2B4YYsGa6JToaYUFDC57C7yejwSzb7PH43WwtpsnFqz6io9QzaDatixUFPFSTDmj2dVHrZ5awM8ZdPYNt6k54jCA",
  "key9": "3LZq1PQrXW5oYPBB29SvhqJFzWz2QBATzj5Kdb9ZzMU786UVXmj8HoCkZbHmWFdyi1CgeY5dzdS1Boh8Viqj6h6e",
  "key10": "5mVf1XuuZu3o2n5vuyNg8nJwT68prFbHfbUVwm6Sa73m5roWhv4ZQx6fibZeiSytYmftnc15M9Hr2kfyf3t37Tja",
  "key11": "4yFsLz4rDbwVEin1nzAqy1SyEe6asUoB2ryJ9ArYNKA9dCYefZGMuhyFAZVXDCzf8R9rermEfMY3XT8TrJbMcDG9",
  "key12": "s8SHpcfM54MvksCZ2WxDUp6B2HLx6pLoyQgDzbjox5zVhnrnXuDpSqUTyTdioQuj1FdeBYiqPGMQSAfhVsiYddx",
  "key13": "M8ti7Sry6ciaTvRvEbqBw44gE6bw6j8m8DUcc9ZxeFZivWGWRLZLZtVheMw8zEu1kcQjhbxMu32eTp1yuvoUC7n",
  "key14": "5YH43TZiRMB74TRLwNDEJdpGGKK4dGy6SB8Z2FNLMnuVLMREnZZZmdrKwPiXbbG8bMg9zdaFkt5jpicH5HFDkoXH",
  "key15": "2VKMwNYzFKK1oAkKpDbwYeQwjBpL9bvvdiVhjUAQomACFQMGhL9JrdtqVKHvNGFgWPQ2p8ZJfeTvr7EnCwuwRE5n",
  "key16": "3qx7bxaw8PPG4tAAiD7ZKKgHzKinvWut7Nayr14fWnuSzSv9pBrCGoeLDcKWiYiMMmcq8KiBkQpUZS5iktT9hbCr",
  "key17": "24yQbgiqNAg8NX9jjDsi3miTuwLnPXpYDt75NLrjvjYAf4wKoMCc4XemnaSARk3YQdQUvtEtDHsqCHTxxHUToi2t",
  "key18": "ExDG4pSFABNoMj9AjLLQhataw2rQ6hgB5YsgbNWRgtQN8rRtPDAN7X9Y3wrFoRPj1Spjt7JqiGWpcwsu9x6D4Wg",
  "key19": "5UEUPx4fbEcWura62APJDHydFntaj9V4zKMBqvHR5P6CHc7ncHA38sH7StkyXyCkveuqZ7D7qj6BK6VanUhSwmpL",
  "key20": "3RvqRVjnwTDfgNy1jZefPCHkVbnS8nvEmuFeFbvrgzDGaBzu7wDYJfKwRHbd1a2eG4JZcjBgQ9v9RT1qBxsMz2FM",
  "key21": "5kZy3JQr7sG7ru83SJavuTANpD5TEF56CkJoX358PxMVfnahNYg78sc2iocveT9a1tZtKzVCH9R21DHH6uC6LZm2",
  "key22": "2EppeJj1m8nWmgWWUpyrSuBQ1iLZ63jYP7JnM2dBaNA5BKUD2PV1XnhfzsDRuqFEDGhni5UnmmvR4DKjfXJiQQQF",
  "key23": "3kQSJ9WgP9buUreyxR5tsp3ZEyaiUZ1PwK4LVYRqzn6NA3LrG7gGghRC76daCMJTmHacGx8T6tmDHBntUeX4h9gD",
  "key24": "3KNh518SGfxgmGkg2U3yt1mcGvZdPC3Q4Pcw9or2N71N7rS1CKgBQKhZXaBDNRuNUZFTohX4XS4QW3yauWzgUBai",
  "key25": "5F2L6Kz9JXdPnaQVV1QMhnXhbkroCmGBH4q4JFUiZEk6eFeFqSj5HHxmnQePecHD9B2e2BVCCXxopQKTDBzB829d",
  "key26": "67exSyVUQNMqmCYkNMNerQpFKmRDdBwog7EtH9momWevrLZ3UEfXCooc9Fu6QdpM987emhiQwKSCRKVJNPsjkUyT",
  "key27": "4jTDb6L3RP5CbntGUW34YjaeW2hqLj5W2sWBzqy65nUJhsPkPV9AHBZuRVYmYmhq1iK5Rif9bXbqUja8djbzczCH",
  "key28": "3xaaN3vMtZqcD4vHJNqeUDEvzU4vehxHEyz7qzbFSodkjGsnnNftaMVqSgGRLeBpUPkNbgLHFNY9YZoRuYCQkMPK",
  "key29": "2JQePknxx7Tu5GHrhuVMeqFdkyyfops9QAgs9ZuguAuM8v1d5q28z2i9HgtCFngmu4h6gNkMt5cxXdcGMAw97ZoE",
  "key30": "uuXzMz3JBhEJGxKdZM1Yb2XW7SxzzhuLnstAkQLgvon4nVzrV6tPhMTyPhDCND9a4kJWunJJuDEiNyoUqsyCds3",
  "key31": "5JgQ1ETCWKp8X3mfcRuV57ACMfM646zGM3sXDqjBMRvwgHp42JTSF8ANME2qWKCSzaofbEjP8mXfbv1svfETkr72",
  "key32": "4nXu61pqCHGzyVtVmbWrpkWf9ojDEcPA2bd7BXRBaKhRWS13MNwTfomVUWBthycthFae8GQ4bjS9kKxdaknnxbBH",
  "key33": "56tPMpt6yCUwctkxTZrusvYL5T7b3Nq5nnaAqduCwjEPo2DwVkfq92CRfNjksux6MqAx6WtxEUQYqcDwmL3Hxb14",
  "key34": "3jE5je3neVsTq2HDhpFCesquJEtMB4cW5dvmaBApR8C4xQxU8vW4ugckDv2qFypB2MooiGYaPkmJ1JoBnbZf8tNv",
  "key35": "5amGtskMmaayTZirVoibrDKv3QZuTXPWeWMgRWdGiqH7eKUVJAKbwHYjeakuYvgHBCrzMY2kod8JiXJ5axw7qsPU",
  "key36": "k2SB9BDb9ixMmE1RHa6c93ae9WrBtEv7PTJmGTpXYVvvLtFtN8GoseawCF7vMPRJV1s9jG3GbNvpr4rn8WdYSUe",
  "key37": "3Px198N8vaXCJeiKaiXE9iVanGVYX5FoKCVYJ9mPNScJNdnSpH24f3SUhkddARa4zAYdXKcHCvRF4X9mZgrJ26cd",
  "key38": "2cBPbrJXZtk9MDiYnafDUCyjAbMuR6QY7cheBJnpofbhPX8Awxj4ZGrFq8bMb59LT8Fwi4oDj3LyLQ1TrwVnZE4S",
  "key39": "63ehEwaAmtrhfe97VXL99bKhU53LdhhkVg7frwMQkzZkQLLTPpg2aeM3UyfGWwB3LAZ2rAqHooxUhdGHbVYk6RKc",
  "key40": "4v9iQEhrjRREW4zpJSUFjb6tzDDo4KNU6ZGCTRCJ7cwHvcoL7Xausveq2aVqrieHKaV8sRGPpQUQtqJi7NUmh3Bn",
  "key41": "634LV4EahS5m67NDsdJJSnQJ5UgVaZ8qz6jzJUq3nh6iSK27n353YSRuj8kobXDu7rXyfcgBQrkwswYwfgTmrw6C",
  "key42": "65acRiKFpHdMnF7s8b8LTub2RoeY3q6NxMcJzGgpvzoasRyGDULiVaKe5F7dfnpVFmPpKoUg4QUMupnQ97kr2cYU",
  "key43": "66Y1XCfmDK4SknKrGbYgkizBnZgT878ung3wLEvxaJYSvhagefGvrvqvqcMNFQv3fFed3fC8Am9nD9GpxsHSUULJ",
  "key44": "3ubNrFS6PNaAdeWiiK9edVhg3LNhCbZwzeXNaE7pRwD5RoKkCTT7US8TstMzFxSXRQh37R3SNum4f9P1JhKCPAWi",
  "key45": "3mbQujECKyDSweWtc4reTrbNE8kLH6qVuMumNsrGUUJsBvu9zByXaQC8TuNAXScqKv7NABvSmaveYa9Rj3vadudf",
  "key46": "qtpmePfUqU5GBc71rSMrKzqMomKhXW6LNmfa1LNxca3zzuKsr6SReUT2Kqu2HYAaCKARsD5oBVhFV4TDKp245Ma",
  "key47": "3wA9Bj5TE1Fnnwy26qZxoup7PPSFL9F5QPGWgcN7aPuNZswMtMyaAhQj1cvCXwYVWYxAZBQ6r48G6Lhz1NxrW9Qy"
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
