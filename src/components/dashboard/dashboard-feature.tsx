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
    "3xmPho9MMdDiDH5cANUrgiTYyYVKrRGNR9aLoDdX23KDsHxoJQnpAyxVrvdBUrg8cEzLx33xQACWgL1zbgjrnjrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gX9RmV18UQAmDUG7r2zHkmnyqCKcFvD5CFi2XSnQjnUb12tjDJgK1NRrVC1LSFVY2c5ucZP587BPDqsb2Go43JP",
  "key1": "3B8aXPJdybhh9Duau7dtrDwP1Go6tDHDePf58hYnEsty9vGKsVFabV9Xi3cWC9p8Myj9dbee7CvnHZK6J9oLENGs",
  "key2": "25YqD7DHuiToLssGTooSEZMWMU1Cyek5cvx4BEq7ax8DmjG3FF4ZTaxZNk38sr5dtXk5pGuq2ECRDMYaUcEdiG2F",
  "key3": "3ciFrNyeQZx8o7gbexNfUnMABFJ2UnuE9H5FJQXxhMNvoHQdMgyjiG8XENfJr8QXE3L8yK7zPQ6z9W7gmuDSUmTQ",
  "key4": "iQtzi5Uc7buT9wVnV1XQWD3GVp9eyRPUnLpxCTWGpKyq2QBZQGTsPJyK8jg5ibbVinK6EdgSkRxgeY8ExcWuxFN",
  "key5": "3N37fpPgwXVqAXD7fhGj28MnyWXdeBrUgnh56jW34Xvh6x3QNqzkYhqdYMh1zoPes7LgUtZeZNgCVfoSuxqW6dAU",
  "key6": "4kwN1HqBXYcTB99jWNv8fPA413mjbUDMYPzWd7cr7ZviH4vCMhFMTef3dndLWfeMFYvFAAQCHXEgUY68skSG4t8R",
  "key7": "pA2WABi5Wayws4HDn8U2i7wovmgq5zc9wHbb6mUDcT7zh8P3T4vFaLNnjnhHuFY9Lc3kN89nhNouBFKxiXhKcfk",
  "key8": "4ZCickgfhQbKfezkh2GUbDYSC3ECcM4qCHzYpUUKrCoKA29NVnqKkiWF7sgxqReA4ka7G5VYi4gy1AeuufFZsCmZ",
  "key9": "59TBKz8UPsiexSLWVFJhVKmfqBLYQBY4Yuw2jXFN4FrWQR3xLDTqdExCyFryvkBnbTRFXfmWiWdxHnaGBAddJUmK",
  "key10": "5o11XHQf85UCCvpip2AhGTDSaxX2Yqmy33kwiaaYUU4yVvxCy8hEAXX2GmERUFnXB4RH1sADMKSLBCn4Q1WVNG8U",
  "key11": "4T3e2VAULJBaDc4Q2wDVJvP3z2qn6fAYTppMsVuTumxKEgmHN1PoH15YA3T9WKxfW3JoaZHNksq5rcEMUBVTtqym",
  "key12": "3KS1Wvg536EcakxBfu9DSnmbqNLMeGEuh1SWqt9bzmVmR3yTU8mBQzdP4KHrj3f7FeEsjLQzuEyC1N4mxNnazz1t",
  "key13": "4b3ZixmBQGjQ8BGjiofz8Y5q46YfYLzkPVMNW9hik5BbFmF1ayTmZGjbpcyZCGzcy4aNP8jgc31ntY8eMuE11XN3",
  "key14": "53R9bRvFNmfGmkupnR8mMaSH1N2ZPAxK17vxr8J1CU62aDwQBzqwvFbPThZpE7Awk15VpqLHT5tdtt34qp3Bt4qT",
  "key15": "4FvRHk7pbR4z6BChQFJxcTSfzCL9Nd5X1KNjoiywFhnp4Lx5Jx5rhYosijvjdfif4SfMGi6hRKTR5CubbxrYgtoo",
  "key16": "bfaJcuSwyKnhULvSBHLeELyA2LfT5tfw2NLHRAXq2GgVSvssPNzZqBwdMDYF4RDB67icfBjFxbyrDMGjwQtTg7P",
  "key17": "Ex7rB3B7dEd7EHvz8U8iVh2nwQp89fp3FemmSiRsgeoZY4R54uabX99fEBBuGSGneYFuNphnbNn1W9xvUYV4o5S",
  "key18": "4XG2PetPeHunFt377DJvL3CnxN9wycqwAxCZduW1xSdygsuX2u65tnrZhm3yxvdW7MHQwNcQ4FLewvD5ZdsysBSN",
  "key19": "GFmJyBguCguX2sSEKNwLfByBowcfEkd3CKAGsjjeT9HBUx7UdeePboA66LMRXqwis7agm72jEKe4AmQembgzyin",
  "key20": "3Wvr9Z9pFqVaj74fKpDTdnGpo4pjPApV9n5Dbprohnbmx2c6cUqxRtujWYGFyPzz12C9HG6QuLiJWuFZLpyBQsTk",
  "key21": "abrqgeWjWquZQygbF3trST6ZFtvnEqDU55qGzXhRi3TvQ7dueykBKMq7c8mRotnZMb3FRpoKYtzo8TYJ1YXG5dE",
  "key22": "4EPnBAGL9gf3ke6ZTbXWnpjcx58MUjzwwaUjjLL8ZLevBiuPp9ZaYzHn4zVs8o3LUJqMgA4yitmqQMrEijmtEKsp",
  "key23": "4MVQFQwgvTbqtvaCfSQqpkBvgZXth6DcTaEL82AVFuRnUTwbCTKJVZJRrJk2tSXJSdf2DEHNw3un7eMcHWNFeT1q",
  "key24": "4iMmbJfXC8VqfGJHVqdEhVWMFUgnK13abquS8a5wvV9s1wZoLAQtGQJSbf85iCmLMYwaTBFzrHa3Wgcx1EeHfuRk",
  "key25": "r2oGWvEcGXXY1b3x3RpWdbA62gns6umEM1raAQc5fwDUgi8f1fBEZTsyvdDWwPgPH2qJdRT8QTjmYGJSCQ5C321",
  "key26": "3b9XbhYs1aVPGTFs3wnhDLKXKonhdKHpLjhhzhgN8r6y1saeFXiUWHkgCrCga3nKCrGS78ezYBM5caCU2qsY9zmQ",
  "key27": "ZXBMFenRmRCP3q8Y3FcdspH4nu9Q46F6pS3oPBJV9Na6gv9WeJrR6GWVqtnUF5UPvk4YTrYZD3y4GnBXkeq1hCR",
  "key28": "5xe2JJmhfg1oxRRB1Fkm6fKUb4pcT5TRo5eNnnBQWaG6sovVguoaAb3yZ53fRQeCtXMKCXbRRKB7FVM1STb6ArQq",
  "key29": "5sXiDEamrMEnq8Sm6nezUQkZUs7yRG1XZwEH54uLrP3sPcebrLhgEQCJE7uXsjer5PZc371bJdPTyhf9KPSCLFzd",
  "key30": "3bcRsRcrdvAhMFP2qWxJgPnxUGTVoJ9mAYm5pbPGxoXzB8rEpDLic265fWdGeN8JphDo9YVF5EjCreE19pmn6MXh",
  "key31": "2nannjRJ14AHD5DxHR2Tioh8gF6exd8xEQToxqhhuskceQ4JNQm9vVJNL4RQpH7VcEqQUDzAVFFeVdRKUWkFHiFj",
  "key32": "2jDGYDfKnNuWLB5knQHdY3LGtta5UY3DFSpjLzW74He6a96DJZ9xX1pkYQLsH4qHxGDKvnyz6RmrEuhrq3yj11qN",
  "key33": "57LM2ansn933sWRKDbbRo585i8Rw2vDPRYax8u62hDLqnc7AmFfnVCf6fdANcRhk8yAGHgzZsAR8jLhTsjyHBJTT",
  "key34": "4aiAheLE3q13mptoqdyZXcp9dEDtQj1qGmgcyhrR3vb5k178voVUZzijs3UmtsCRcYrqDttYAHCniSj2wxhzbKJS",
  "key35": "2g3HPoJzwxo12rGtx5eRyp22QyX8NTScodrsY3qfFP6tG2cc8PeG8y5QHdHqWyPpB4qdNBDhGCaFN7haTgEwrUaT",
  "key36": "4evheiWjhenUxYf7PvuMBpRHnS338E6uH16DwAQi22E7LTPxdbeMbq8zhQyw741AptG8RiTwPabWB1jvAKCKC2QT",
  "key37": "3AJ5jNdjh7xmo1E8yb1L4g5NDJfCr1TJgKtBvmKsgmffdh7RgXRdqRsuwghc8LuFQ2J56pUn7WUCJCtggs6w2FPK",
  "key38": "4gN1RX7EpMRfg7Vi3QYrjWQwjhXmBgeZSbsZfe4BV85VMgKjn4wteYVTBBCwqHcWjb7qeo4CmvoEKKehTn17jVeL",
  "key39": "25kwzDyvpzB89pZ5sQG2dCAwB4u5n9hhZa1fmxGaJGt6eCQMQj4EaR7odVJtt6nzfJ16pFkXCt5vNN2YUpz1o2PG",
  "key40": "5LCQeALwBUXMreJ7xRvgSNH4pMrJeSz3L77fNrN7sMhMUANoVxnwy6sh6X7H9pmBD6h53MuvbyjdJSuCKBEcKYSS",
  "key41": "61oT6sRGfChQmc1o2nZwkxqhkp5cu8MhzkSokt84KEQgaHPbr4vwmJNbU8yY3ktYKGdHJPEfjBhCyuQ1pU2EaxPQ",
  "key42": "4ut3Ft96E4dq1T41e91wNELeFcR5asqrMDYgNtVy6NipjE8ZCgNahZ4BDkTtmBcpjL3fi8LpFtpJWaYy3MU25wV6",
  "key43": "2VnnexawgAeKQJSPtXFgsR8LYqqz2f96iduBWh73jpvP4eHV5B8wSYLzkSFuppS9thQ34RbUHZzgYLLuxPi7xfJR",
  "key44": "38YuLQE8Tk6ijXgimDGHVsZfhV8NF4FK2X67eBVrMm4rqSoZxv94W4c5ZgqfBNDZtkDRm4bGqFCy8QneYwvePrqD"
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
