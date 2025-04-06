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
    "3yppXsUzmTf9zi9dUrCBqwzV2EYbXGrNF932PpXro83bwxQkNDjTkrskPtb595uY1isHXYnAHTtgNyAxrBFfVcqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GXVDifNSW8YreGym8Fp9gUDje91Db5EQHCJCh1RsBgYkuRq61r7pWyADim5kdLhCUy5PZVkq991di4jgNR5nvTX",
  "key1": "J2jG1WcbCnzgYXDBD5WHhv2W9MRQFycpPkej4S7KundRd9eBg8Nnuq3iCEGXrUwe2x36MggfP7cQCJgR5mC3pUN",
  "key2": "3oPxzrhtcjFSxpKgXDz2kMBN7aU5y2j2qNtMskitFiaXgDFf9iVHNECmbgWVudTwyGBpjrhzTfURHQ1mTX298RNK",
  "key3": "2USMWs8LMF6ZjUjUb8efcTe3HVZUj9aW1QB9zw4sAbDBKz4hE3pjAwNbh3m9CVvHgFAwEPzsGWLq7Ly36SfvkXV",
  "key4": "4SD4LfPonHsgThkBhbUL5gE3xd5craW1smTmgsgBgZmMPF11aewk2mgEsPk2Nm8JQqV4wyA2D4mCXWLpaf5pWfSL",
  "key5": "s3iSFpsYaSJSS9MQUNbpHQ9tgFBzPxCpeU4cgA1LqdWGruHJWxvaJvf84UTM9B1SFCwoqsGkgVSiG4YrWi2Lwe2",
  "key6": "53HwBftxDESwhks4g7HMTb3LHkhXhueYGXNM7Xn8Eg6CBoAyMV4uyzBqCnmcUnpYe9THGSfBPbUJfmYV4u2WSuRV",
  "key7": "3h3qtsik1NvxMYDm2bovo2rDeujjakDyQKKmtCoR2LuF7hDxCDTinGgxnb9pmnbCCbtC9i2gaaYdkCisUAir4Dyr",
  "key8": "3JKi72cf2spYvsanWis57nFcXW4a3HSVp7jQJgP5fqAj53sYvYxRPL7mEgC4WE55cPWqNoniSYeoBkmnaaWxqKeM",
  "key9": "3Kwmv8aXQofFhhpWRN2f1Jf562SNjdTciy3V19M5DjNJpzAZpTQF5s2PLZquUyUvQuaBuFrQGJkFn2zWs1iTLqyw",
  "key10": "4ExZozuUgoTqHWCCVNf3T849LuJycrQfdCmS8PB6PGs9mah9FJdDGCNAKnkTXLpQBD6Zb4QCeGmhv28atdLtW9g5",
  "key11": "5qNtuyDhPZ9kmMvYwQgqecrBVgFyD318Wp3uJqAaeKTYDTwmR47geBwewE8ThY4U6xZAaymdcuvjnwcektMsyiSL",
  "key12": "2cjjje1qV1U8xyfVwkVStQAuL8ronACB92RfQ3NYXGmCiyhTLmPKMLLT8h5XfhzKM3vpWDHRARJdUFzk4YiVmz1M",
  "key13": "3JjH8VMhY3j9JdpeCMjXhdNvqYZnTvX8xka7jV5qQivTb484juPjasmqEHQKHNNHCQkCM8tb6fZNg5DrAxHJKY7h",
  "key14": "5nqW9iPzv78JnV2RHdbWfb2vyauPAWkmmoq96Qe5KaQq5M9GT2B7goKmhFVWgw8wfH1GxtRvWbeUS6L8WQYBvyKN",
  "key15": "3ehY3VtJ7oi5Y6XGWonNxuTe5yujLtBiyqYD7tduZBzHA3TNPcNzjrcNqgdH188VYeFWJuzPZo2uyrGA2cwFZcq2",
  "key16": "1ownzHAwMHKJdNcBAYK4G3YVtm8iuByZGFq5xt2SLmNNBfnjnybxjXXphDKi6UvTLowBnTjZhY66ttBeUxAj9LP",
  "key17": "2vMvAxZ3d33cAeith3LPnABo3tsxy6L66dQEhajTwnX42Z7ym6WWJkZ9QLew1ZgbZUxGvEwfuETGSjkLS31t3XYM",
  "key18": "FJgEEpUbC9ARnB6XLjhDVw4UQy9makAVYvdhaLUsuGebXcY43SVgiZcAJcnJPUgLE5N8TeSDB98xmNM2Zecaz8N",
  "key19": "5dRRRru9P9ME4RH1zezNY9v96zhsfnTEpFYiY521ygjaZy7oJAycjb9iEXW2M5QxrKwokokyWF3eo74abZicyrYm",
  "key20": "5n6nQyf4Wu9x5vmL3LSrRkM4rP6TSsMb4mTmQc7YmpBnENodakSModE5G4jZnbP35cirs1CyzPZ3DMfUDAdSSuib",
  "key21": "4K3sXUDvMjDVcZRbi2gFAmQ1AMKosg3SjW5HuooTjkqBCmUeMmhB9Pe7fcKG1LjXu9uYahCr6RddVysx4mtjvLYS",
  "key22": "5JMMAo6YntGWQYrEmuP1PgAeCFrzdQrYqMftGKZfKFyyajscDddqfDECMTNGPt5aNYRsH6V7GxSSKC9fC3KAnaJd",
  "key23": "3ksNiHHEZxanHpJhMxwVfA81xXQ4jDKKEEeXPZtZ5dyvYGyGMnpXKWwMSjdRWUKczYVq2WXhR2z1CUNrqHeXNHxE",
  "key24": "5ZzHWLhMTiwtjnNZEJZgnSXkMWpeAv5K28oGfuzWiuBiHFV9vtEisDynScVVwnxf9oqYP3w9VkTw6sD7vXhwx3q8",
  "key25": "3shgzmKRqBR3cMDA9eGKxVgJLqWn4DMxfwC7dHXCgpLXMM2cJrSRwKK3THKA6MFRxqqGMn1UUbypH18v1qQiAHUb",
  "key26": "53FtMZNtDRSXJWdXDVRGkC36DrT3BnnWtDyPSBnPsbVwGGXdELe3eDY6QTkKRJ3Cra1DYnX1VTzxP8TKUCRrDBmk",
  "key27": "mghHK1enb3BSiyh9rkGX2XpiAUf1ur2r7NooWGrNqgy2gtibV2bs4jCQFFsnDXphWaabAwZigRXxtK2TDDRZRnF",
  "key28": "CnQQrgcC3oUpw3r9a5Go4VwhaX1MQY1Zh3aiyzWfLxUCtHxN4MRLXYDDKpTeeYd3EMSLPv8TetSCeg5MS3npmvx",
  "key29": "2QjB2wjTHwaFdTNKiPQaaZLP9hnBG7nkAQaTVeF6rSfqAUEtMrcVziPVy8VcDkM3gAwf998gCTQtmb5euiqECPEe",
  "key30": "3vq2ztSMr7faKx5dwjGzC417bUH9xno9d3djdvyBjJ7mtzJbL6qoEWAKvxUT82H5R243A2nGGXmh1afpcNoxoBsm",
  "key31": "4piy5z5VXiEUqDHnDtWtFRhzfvHASSokLJnDAczDrWHWEx7PxpPXheeosJx1Tq9cBDmQNDVHdjRxKn6dwDGR6Foe",
  "key32": "2eJQ68NxvF7dpAETLZxqi4zpiaMiPdkqWW7Ly75aNccdicTpCF18mJ3qw5dEq12nWvpcLk8wnftN9BLgJZrQeaRA",
  "key33": "PPewnU7vu3nH8Ct8XC4e3L5qYzCyQCc6VVJjHdQ71mbvxHWLdV93nkqsJ32qQWA9ST9VEPepSXCimZjmUtUZovp",
  "key34": "5Kcp7ERswNH6NN2ipC1k7bwoK5GKhBkFSZ5hqTBAxmzAvdbGxnVhucuk5dxJ4GFA4SSBKKySD7nCwvzuJ6631VJC",
  "key35": "29pB8BGYwHU6rWGFZqj3s5HVianb8cCT8hnqCEqeazGqkcNeKyskLhFaftcoJeEFVdUCuuDoHwCovCahN3CPvDqv",
  "key36": "2kj2KzhKMZUgRrdzYBXwZXXQiarvbJX1wMM32F3TVqNQZbxcV5KgXwWwwLWNau4FxKii3gFh6yQ3msgL7eehkFNR",
  "key37": "2ooWQna4TgRurTrns5MJFXD2F1Cc7TnBafu7MPzLkrARLKmzj5qVSA3CPYD9q91k2TqoUzLWWcRW6jnfazgbSsJ9",
  "key38": "411718tt73YVGR9w7p5gyAhkMpz5bjcihFUQKu92rPMWYJSU4yQjADaWrWjPnNcciHwxoyL3cppBxmd4xsRGtsJx",
  "key39": "WGDocrjLXmwhn2gYWQ7EoCKKUDtSrJgKE66RLC1imC3wZwQ2qoY9oFoiUEk3vFJfqgfQeSgWVajKQTV6wsdd8PE",
  "key40": "5jhLa5gMC2teJ8qpz8Au6Yj2NoESqE7YDN8tNEZ5Hzti3Mt4L5RgYSmQvyXxM7cuwfeygBzw2ZdR8NkNmGdYDLvR",
  "key41": "46yu3ft47wPf2Athm79UAgbNWxB6jBB4e4fQyrnsCwZnaMXLVU3MrrhTTEfVaoiZnmsRwkGYFLjZZtkqhTpuuUHi"
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
