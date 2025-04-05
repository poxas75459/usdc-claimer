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
    "2FryXUzQu9wM2VucuAbv9gmyPuNRZS5FGgCbefT3DGimW452qXwPd5UFwXyFsp4mrU6FUukxUTG9HGcgDGtjz3sX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n1jDBwfwANFYdtNRRCkhYP7BY5tiFB49UmX8ng3s215XmWmg4zxgriWNVtDzA9Gq43aViqXYbJdtGiodyQoGb2c",
  "key1": "5ThPnLKikkBMhznoToqpWutZYHFAPufhEg6sqW3ZDYdUqztcvxwtSkSQPbNMVfJmDVpemFZMSy4x4zRKNDg74t8s",
  "key2": "3PMAHkrw3PT8soVx4vvrcex5Zqh6Tf5AX5ibeRg1tPvBts2FG2jBCziXsByC9HZnfYKpsLDeAoxifV7PLHqy2Hg1",
  "key3": "2fHZB8V19mwMboJHGt7aQtfnBFB3EpVVG9guuhxTQSccWikSP594HeQJBM1VeVRupytTd9qimW8t3X2cR9USdFzG",
  "key4": "ubNyRdB5Y3B9YBTtbzzYr3t7AZrm5gQDSKzZsxBndu5Zr3tuBR3fbCJLBJCBfEnyEpF29DmVsJhtndpNFV3YFhf",
  "key5": "3KGxneh1gwuJ3C8G2cvVSUzc1yk5D1CsdCAj27t6TvZgjXKF3Npt869LMbx4HPFUbhdaT8M7exUdAzRkNJ6b9aZh",
  "key6": "4iE2SDWxh1pvreM15X6Dgq7AZsQC33or7YAGBwgpYY8joY6A1kBV6tTquyXWBLgFbhnA1waQWcTnkq5mKrUCkm9h",
  "key7": "2GTEB31LDdFPmKQXrW3DgD7Qw3hT3KmkWjhmNmDjwNQWrdxvPkfQrCu95fGxvwrEsjkxPW4cUWpc1AQ3oupb2TtN",
  "key8": "5MRfaw21M4zAGQovdraoPqvmgJTrfnbfM7Ciy57bfHXNmzLYtPth4SzaJJytTErAMB2yDKu67mVZ82MZ98ctugv",
  "key9": "5WhTquBwhonMdBL4nmksFvXEvutUBur15Y29nSaV6TLs1EUcdw5t77fnf5F6gCcLCb8NSSmTi45F2eR9BxgicYQR",
  "key10": "4GhE5mmGMAUUV3TScqD34DWDSdevimjAev7VFnXjfNBkgPMXJW34qHNbhdYgP6FJV9GQ4MrYgTwawzuPgV9bm7Mn",
  "key11": "63vHy6VF48GLzHPQDi36b2Xi8xDpyxAWtUb2TwURG6xgTdFB5mSiksMHkP3CqfU19NpcZANb6D2mjPuzMedozCas",
  "key12": "2tZWQtUXz69figCqPUxwX4QqmAfkWxU65x1n4egZqRG24yQodpVhhJozUmN5guCSqudU1tahVwe2cGEKLtxk7zac",
  "key13": "23eVRZMN6vMfYRzU9wGYrZdfoKhqALvRfcXJuCwsdVi45VPT1hNBYMZqH3oM1bHZqDivPqBvab26bbCjEhD89wFt",
  "key14": "28VkcbL3sGEE2ZZjejMaj9XcuYT8JPMBFdwv77GqoSkGEqRcEZ5VHvsTBdoh3CvDQXBUC1DAf8ChF65xp4R5TyKj",
  "key15": "4yBqxjuEP4baGiaDd67Z17i2ajZ1gJJGrUmrnAvksLm8Ri9QMFPGw6LHtAVkjdMvLPY5FbTHzWj1K3iWUwsYEQ5B",
  "key16": "4kMRNJQWTR3Z9hbocuid9dd7TrHU7wpvZnAhY3y2Paob9CUPZWYmcAR1MzQtmsFVf19cpru1adAQWXr631n7PorY",
  "key17": "3we4d6ch1DSpAEq8S65n9WFTSKPYrVjkmKsvQMQ4WtLVoxtSQB6R7YejVys2oNihgFqJPrabroysjfrwendkBzJC",
  "key18": "4aUQGLD1ivPBcpyomDtatgXEEe4a8GGVsUTYRw8nmwqq4TrRemJ1Adk4z5iRXiMpapK5zgrHfJH3wRzLosnAADCP",
  "key19": "447EcWR6Z4NARNHprjXyUTSgjCiceaiQVUpzpjTx8orY63TkDpQtKfnF7w7vd8Ym6yKkNQFRyTyFv1E62G8mnnZ9",
  "key20": "446552p5hjp6J8wTrKEP1BySHhDJb2eDoWo1vo4atetKK3haQev4Bv7Ro4A6nhZ9LZyxaAdC3fJs5DR8mNAMQ176",
  "key21": "5WzMt3RFqQuakKMSN8aFhZsmK8829V2a8yDy8WT6KvDne64WxidKZL9iuMTk8uBMvezp81UVoyKYs5Q4UW9aqBjp",
  "key22": "2LHqr16AN6kRcS9mS1ro5aV1AJk87CJsRvzNQqE8UbRcMjUfeBrxfDKEa5w1JckYkMQz1imFQUB1ZCxX2sigsB8k",
  "key23": "2Fe2hzhQRmJbzBceSTvW4v9MiLn37KKu1xaZNm56xxDDsqYA8pw8fQL7amVgDQtsxFzpYbiha8t4rxjGw4hxBrLx",
  "key24": "syrPt68TSxVudE5Eqz1BCmTv1AJ6iLKCF2rx9ATESjiYsEAuCnujkTXM1gFz9HTwkDFX9wcJ5HVqb7bCND1pykF",
  "key25": "2KAwzrfYa8nKVaYvLrKXkrzLe5XC4dPNjeAkpA5BRG3qwG1Adcw2pYcWdqJB4QbGFdAiYaUYpm7k7h8qq2roBbyx",
  "key26": "4SvkK5E8m6JsCqS7BqTHRK5AbiSCMAWBkD9YWL53krEUmMdwvZtZAVRttcanfWz8kUgwZbBjat9Frk5pbp3gaFM8",
  "key27": "4DSFrQbrkjPiVs1MqiwCs2b4F6ujVxd4bax6RnyxML5uL6TRACKwpDr6sTckfyDExmx5znxBP5t8c5EAeSmgyW6G",
  "key28": "3B9eegjNVdD1Zxw8iufvPRqvLsw6ZbVjLsHocupNhYtvbDTwzJU3nCeVkRzr5cV5w7VFJoUyFW2zE4MA7tZKVkAd",
  "key29": "3XXfDADDnQSg18afZoGQvi5vaRqQmSSv56q1TPSWXjYCPAcH4W9C2ZooMd5WVPYv4QVLacGR8WddiZNeABDPs4De",
  "key30": "3inqaPZxVp12YNmC5aP27akcCz5MWTNSEHa351BDJhXpyWkFYUyt6aP6YBxCr7TrysD64FdJmwYQPnPJARBsBw7q",
  "key31": "2UjGTDKubs72MVPwySBT5mT9fBhnyaFQ464YShuuXbX6sLuNDYziqLTXGqtLFxW6141kZrDfRTgrZzaGDggA6f3g",
  "key32": "3V5DLErhuqZbLvCSgqNMzVSLWnJYqiPZFdbRYJQppCbtke8fHQgyirdRbRzx71r4WzkTqKNykcWKspFkjNoWqtyt",
  "key33": "2YKvgaEeMvZyxUpG2fyNuHnbw2dYJyvCZ1QkCjPfZUyfzxSQebKct7J1F4igD3yXnJAbeKy6j4uXUQW7M3MUuiXL",
  "key34": "2pnm4mWoyhueoazSNE7FcaKn6pFvk19gXQsAyTvfbtNQ9yYGdZ1qhk1fmS7KY4wq1UmSWr4nujx7sqKZBC8xPnLK",
  "key35": "5uR3h4faoxQR19SsbsgpaWUZcptM89Yfwq92KeeLNyeucxiURdrZg8kXuvz3J7BPM6qiT8tqPsepu7rGabb9Jrgj",
  "key36": "pcSzji6m2bR9SEPb94rETU7ZbHogzBfacS7TgYpX8zh8W1ivczH12do6sXYEC3MW9ZgHRpCm3fM8uc9DqF9unmW",
  "key37": "2sCATBTsXNJgUuEuz1snU5dq6ciohvTjCuejXFEWqnBCm5T7ReGe32EDXmJbVbB5f7stFNM7B6LZDosmoDMN8dcE",
  "key38": "5m6aFiAGtq2he7pjWrq1D6j2HRTMfkeKG2B5BkkzsusHYPpG3qebqk1fW73yyGTqHSdp1PD5BQBM4TW2iLZN4Vje",
  "key39": "RncQkuwbKiXD4T3gCZZ2ThetrBsXgVoE8C9B3jQkAB2zt34NVXjncnkUTNeBtAm6CvdZb4hUukiX7n11rz5c1Bp",
  "key40": "3dbsdRGaFguK5LWZP1KCRJkAS1Ews1CC8mfUGL2Sra9ES6SMgUa3juRnKDHSZvJGuRCZHbDwwMo9RqbqV6ytTU5u",
  "key41": "jpCdNp8DUzR3bbn6i9mwUJmMmEBu8QXQh6rVCkxM5NkgrmqsjEbTPt3chVJe6ofK6giDiHDbAJYmHga1pWShAXx",
  "key42": "3kx13j63udBDn1RMtTHNBzHszxJ46DmfGSEPiUmnSaaZLu49dcRQS388NYWAg92szcGC3SMBupvX3JkQrGr1s3u4",
  "key43": "fgRhqyp1HjTXF2Srk19XMCGriMzMCw9VWE89hi7EH6xAr5RMTvynuQUW2ozRcNM9wXohNTHrkfqP969yK7qag2G",
  "key44": "wbcaAuuu5wRiYSMxChqCtYWnzdv4dG7jH8Tc2QCmTwH2hbM67NcmqWSxBQmBtVvZPxwJhYySN32y65r77BtJetv",
  "key45": "2nWXzCvr4BwJjjxkKemDuqmwvdaReafRDd7Aa2APFsBzYf57rSBEXfqGxWmCmJDmGCy1mVhwTsjpS8PU1HpZS4FM",
  "key46": "TVvzsRuH1tm31XrcJEPnrUEuSumZ7GQssbDRZy2i5iSYsPeUDHpmhHs3D5dn5xR8ETHw7DttWzcZXgzPitM7knX",
  "key47": "334GBYQZkV6W9VLmhXki6kLqwMaHAp7BbFASawss5osMZnAgzxtAai9iDNbELShHvCyqZoT5NU14X4oMU7NearPJ"
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
