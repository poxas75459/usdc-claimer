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
    "3975497EebUULWKN36dxAhnT1hzRfwfq99QTrAYRkiBSt1DUfk1XLQkQdzUCPQTVa8CD48NpVnFd83VPmHPR1tEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51CMAZnLFH6dFbtrjRZPGa7DsKeDcoSmBS2pqPMDLSuVhbRL7fvxCqMDJ1imSwvyiRLhjNarqVqEMr8JCB2jXHxG",
  "key1": "2BQ2x9R9NRaoCL1jvnoQqYW24VS5EpKAhHRP8x3rGvXPWYcTuDdR2PLq7ecaBYAiDJFM12MjMCjHnPPVK7yuqmHg",
  "key2": "3LQiXqCpFAGqfkWhxCCsjxeiz8dNU8x4HDyxbGdDTUpSFTFnsz6nr7dQWztWgyGt8xk2iC6ij6oX2Tbe6TRoHd87",
  "key3": "54SwQWhDeENnGo847cwqJFZMx4icuikUufHWRZNG9LSD8X6MDGi7Vc6Cr7BJNrgWdM92eBSN9oY7hX4JPthJ26VY",
  "key4": "2fsovFJNJMqFRSfTmK5SKVcB5hHq1HfAi3ZaVwjU1MNE9DjxGxLfBXnzA5YgNEJLuF8X2uy4R8vtFSEPMzKMKeNj",
  "key5": "4sLh7o8hy88vL8iv49npMGLPDxdvWitDWsCJxR1GpTxvK4HvgC3EgZejcBZ6ZD8D5QN3iXzDC5D7SAUxjKkajefN",
  "key6": "4tg1yBtjABVqAqt8fN7ZbfUSgjErEM8EyF4k4PJZqKCbtc5PeMPTE7fBpwAoAc7dudKuTetjH9vugybwjQhgVDfb",
  "key7": "4FYYSkNUmRWXZQMETqeYxngKM65AnWwaweCGBRWhc99ERGvAqf95zGN1C5qUvR8RLVFLxvYMc2WmjhxJqjxPcTTQ",
  "key8": "3hsqhh9TSme7VhWxnQubCrBGhKPM6SZZJhfKGKhyMfiqn78mk7WMJdfsk2i1EH9LoSuZPorU34mCdA2MF7i2xgRN",
  "key9": "3iapSj9Aurt9x6M9iKYDuTW7eKAa9NMjoeT77sqekuqueqNAT1FSKMYUbEAHnTjww3owZLVPzurLzBein3hYH8ta",
  "key10": "3TjZkDKmg2VnU3XqYHwU1yJWswupSRTZtFZ2WD5ZshMDmNPeZ7F5gPKL9oVHuuHBhWJGRRMRk5xzfVme7UXXZMEZ",
  "key11": "3vMgEvp6gRWeDVsB3svTz429w2iadXj5vGMgcLP32QweL1kEiHdPewsoMU2BLRx1AxVnh5jf6v2bNU11FE2dqCXx",
  "key12": "hJcimjkFMyL5uesHhDQsMMzjJxz5dTAP337HkM67x4UAVx31ArP6XiXckLCMRjWhwcoNSD8cSyfaDhhhyEbfGge",
  "key13": "5v3e4NfEPemfXkk88C39PmPoDhsYGP548tSKHnmEGtYXWXXmL7MKcVojbACtiJ5akahBEYpYbfZ524C3YBTedTBA",
  "key14": "2SBuLHvJzFRPLsF4T9cuEqZr6rfDTRmfxC8J1WzFo1ThkBaES4aK45t9mjoaDsRSYDPNz2yc6qVJgaTXCK55toFG",
  "key15": "4uWEtBZZFy2kVisftqsbs3U36S8drY3DtZt4QtcxDAMf8bEWFeANiWFnxkKT4Ad2w1SFi7v6cmRE3FgpFEahS1rB",
  "key16": "3ZEdtYPikGor6DCcQRKnJhYYAf33ivRJigzWPbnqFTfDKagaEUid92XQi8xmxRTLqzeYSh5UBWxgB5Mtn4rVX621",
  "key17": "BU76oXqq37QNsg5agGEWtez7fDNoy8LGey3jGKBimXG6nM2Zhzhko67kFyqbWMy2193PEWNm9UJvKsa3VgHawqk",
  "key18": "2b3jpoHnAeSpK7jhjTFC1RMrhQd6yy8vcdw77jjT8wtDJLsLorRaeX2G4oMwbTKzBVC2PB94fzEFNUSM5oGojL9s",
  "key19": "3JrZ82ReegFJVLF1r3SRfeAXCbFbVzqHXoPRSK56LtFJy6ioqndzR6SNWheL9uGuJKSiHD1N9iaWfd96yopogUfW",
  "key20": "3NYC3feiAW1176riEy7Yggu3og1QSncLnGZhK5znca5pcekf2oFaS1za9mR3ia5uJ9F6defk1kL5xFSegnBM9RJs",
  "key21": "2dEjdCtft6CL62oma3UMkrptpnrzPn3WriPa8XVnzrFRzYWrPvxu6asexM4dPuGKt4GWc4pew2r1pE4DGKYsPPqe",
  "key22": "53nGfbZWuXPDRMeppEs1kgy1cNf19h6PW63ZSp6JobMBHGZdaSnRAT67ZV2oMpoFxvXocerTXHaGj7xSYYZggXwZ",
  "key23": "W67BGu3xXnUNwfEseBr9nwWYuyDS7XHr8bMHzmRidadDJLA8bLnd2ph6bvuUnCMcZh3CN1myRHByoQGr87GsA5k",
  "key24": "5ajW8PYEBULaPp1519PzpTzBaVkFr6toTxcLQEdGddocHyDp3tBzjNwZxVRJxPCZ6u5ncKKC2Vbg1EjFEFAKu1g4",
  "key25": "3fWW9ZBDEwz1DQLA5oWFwkzS8pmmzX1hmCbuQNP2VkgGSnd32Msq6txW7nqS8ZBZscySftmqAd65eoFNcs8K6GdD",
  "key26": "5qnAPdsnME9341iuqVzmEerXdRWo7tsYAZn7bUMhsBKHzsynnGvRC279cKeNABnZD43wyg4kojpLSWG5AhyPSxQU",
  "key27": "56fejd2iSPFtXf4yNTxVvGJgvPdVUTHvtH1mG9avfUzgC7khQYR1iuwH7SUPFEmDWtWSG6kvqRvLTp9bZAeMj7oh",
  "key28": "4pkoFo3qnVVvLh7V5JcTji8QjBVtcPy4SMYXqFhym83KQCMaY9BCY1CVZDSRq7yRr4g3bKkge8UWnFejxsUkKonh",
  "key29": "5hEedJ9Y4XaHvSkGVapeQ2hbDxMQw2DtQU7XFXmQrgDUoBx3xiEzymozvKEsNHBYzquXH6CUzfHrGCvevXCRUywJ",
  "key30": "sPW13vUE7QjQnwQYLZtB7VEs4dvcxMUPW7ZFLM9wxWxFQRAHvPBjLX9xdr8m4k8e488MqD54eQQxfTk5QSsbCCb",
  "key31": "4bdPjCMp2BTc5XZn8Sg9WnNBrH2NVCgaBPTSwHoP7LjksLJpArRHejdJMrPV6roHUrmAUUwMHWPRWb938119C4UK",
  "key32": "662tAADMgCsQ2pTmqVbeXnCwKdkdmJm263XeTRtE579Xt92pnBDqEVVRxvCeF5xA9gv9W2UmQUzSZPKyMoTVQN26",
  "key33": "3zb4DYHVt28eXUgdHGRULBNL6xQgNSyc7kdbb5kh9XZT9micgVPhhzTFDvtL9qhym4MGQVB1fnVBr75ZnsvucBgc",
  "key34": "5uEsKXtuamE6JbGR4tDjY9Z6UF63An5B1hXvrVUXTEbBk6RkQZYuBvJ77yRczcJ3g1E7sHgqY5Zk94JLT82MYkwY",
  "key35": "5o51MSpZps6LMX6Xe4e1h18ug6vcGYdFA4L7qGiLmRqiU94odmvMFfzBxzkn3ZLcbtbm7A68SvwQ8sY9sGLtCDjH",
  "key36": "2yBbXoMpAREysmmhf4EMZ93vifsSn7KRwjF3wC5QNda6ceZycc3XhaNiQz4A4mJpT91CwaTqembebEmd1JpoKQgz",
  "key37": "3xqZbj6uqBq1csxnZWbQniqmMmDVgc22QN1uLSL6rv16D96NNnxsNDxfQKkXnTg3griwpbiHwevzSr3SnSpXdjEu",
  "key38": "5UqgKWt2Mv56KW6qMvxqgEqHn34EZg34Tpx8kYigo27ansKiMKdPHLnCqmDmL3RaRjwx1DYk4XqEcaHUJUkTmdtn",
  "key39": "GjzuS99G1dStj6uVKNVVHyjYEywtmSUipBfS2JPit7Lx17PZSoFdMdLkbFVy1XR3JY72yy8nnmAFo2MngsL4ZVD",
  "key40": "2g1gfByBHqvFzSEDbB9uPeG8MmzRb2dBSmZFzLD4FpHeotJc4txi18PurDMBkVb7KVRsPa4g6ERQbPptZ51wrY6Q",
  "key41": "4iHfN7uhG6ycMsreKMwocCj77p7dDbcxGXhmxkeiW2weFqJknRqgvcT9bfXNDWSFVpVgqdPDpZWM3ykkSgHTmDgY"
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
