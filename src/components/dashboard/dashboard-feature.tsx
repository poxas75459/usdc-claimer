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
    "DRLqNZrmHy2JsoQKuzkBhx4D4sVUVTBJ7v6N8Fsa9ic9JCEnhNveLbzJXL8L57bQQ83gvtT3s8EwHSCfjwnyUAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KNtJo7mwuS1evKDJ9yN97LQ9jcRCziFiJtBWtMQ2igmPhMCzJFsoJzTNz6qvtun9iZwPyC1Y5GBaQkK5by3iu1g",
  "key1": "2JXtiozpqWtSoQXw7jm62KCCMbzDxiefvZGtNv7htyDbGUw8qPUKZEseg3iLUierp8dn4epjhvAbewsdVppJcrto",
  "key2": "2VtaYZ2NJ8h6VP97rQkMVAB9Cwpdyqy9dzVUeb18xvwz1JBFoPKsqwHsM2uwbCzn9jkq7obyqzK7UaBmLue3zVMy",
  "key3": "5JRrW8hJfKseW3GxDR8WBdBnbCvm8yiMaYFMjyKJ4UnKd7dpgsaTqn8Pyw1NjxGvEuTN3dtPzg3sFJofDbA35aFn",
  "key4": "3LxUXfarZd9W89e8y1FMrjjg37oQuoCEX8wwiABNnrdUV7dpFF4ekPbBnRNs55YNRH8hE89KnshJ4Kei1kQJedfu",
  "key5": "2oJ3XpkNz519MaMYcBQyacY8GGZAu7sgr3QQJVsWKha4uB4roiu1KpLpMvt9cWH2kF483AQ9wacn39dMF1hxTRyN",
  "key6": "DHnSD5usD7yKN1277bUVxDiCN9NgbEXFUnxd3sxzrdmZqy3bvEkbMrzFQAvNujFvTqfqHye1mii1YYojD5s37yU",
  "key7": "2xcrviDN1wChVByqema92Pt1o93X8pvz1PMV56xCSrC86W9z3uEFk3NBaCqswvCKAyDVnvb1qFQ9WCWmNhoShgei",
  "key8": "2dweSfcoWpacSeFBMFtY7AdVrFzHn2XXzryXQYxLtWoK25BssirRBnjscRnLFhSHoVChxCong1bhxwfvdUyCAJUL",
  "key9": "3ir2kb4M8tsd6A88t9rMbFacQT15LwBwSrmudBvuXzNGn1t6wLsN66kfWVAH8boBDjJ8hf6XcJ6bGUCEENaLT1Rh",
  "key10": "3wxaTcUVQMpMCbkt3YP6Zz6GfLUTCM2VtsEDCizixH6Ao2G35tLb1DLScwsWeyuLT8izoiqip3gqa55MLoLqJQ52",
  "key11": "3NJp4TxEz7VLT62cAv15ke8gMWdVcaWKYnzRcAPTDhzyCNDpyYzG7UZaErRjRibMKKyistziwRJU7AoUEJb3pHch",
  "key12": "3pDs45AmzBGMU4edD9pufcxQPAUG4eWy6rkcJYCVDeopEyh1e9QvEzz3vwEzRFMnCRV1tATmBUcTSsmAQrKE9PWr",
  "key13": "4pz1BMCMeGWjCDBpQTiTyym4T4boK9KwsVB6z2YJxAGcHX495UcTmFLyaAAZdwRrrdoMwBET9huCqaEbrbSmbeaM",
  "key14": "5ak2AcXAFucbg9sKZeU58cSw5wH8KWYwqDWozLWvB3JwX9VRAouJE6zqcJj39bsvWZWEJ1SC7ZmgZbD7bSZXaTcx",
  "key15": "2UcEiKPoNZTqk8KgZwup9snNSqYVNfvmjcLNduHEcaZVEyWhTEGMEEi1P79uCKv1oELsiszXp5KPXwcuB1FC8sUW",
  "key16": "62DLatTk5FZhMcuyNHdjRR39ywePtKRv4hQ5U1JWCLG6WT71rewWaK4RU3QFnHLUKRy8bXsVmFyegbgfiQSu3vDP",
  "key17": "2nVQzVw6sAJhGu71sZCxhtvhPnfvwKrGgRXF5MUMUwQLt3N5KCAFFMdvuu8ksocQrrd8GPsCzN1SHrt5Hdyht9Bw",
  "key18": "5G1iPqxefFab3iNzo8HL1TEaCVpjK6v4PtKWBWgb8xgjrnmUcSdaXmZc3y9CBsuV5eizQNPwkBAUdsKcQkJWxya1",
  "key19": "5v1u2zHU46HGTRwG7rDDGT3dHNgMMRmbyFPtQsjtw7NwELfiH1s96LrdkQQdhUm56RnY442gi3HkfTFYyMaF1mFb",
  "key20": "cEZZfhvuc7yETFPPr6Kah5XfMjbA5Bp8K6AXhQaDb7vVvzrGhSCKuDBaXW6ioNjNjJkCXscQPYnJE9f4mfyFWkg",
  "key21": "3RHXgwSzAxjfhDFVJS6ko2qz6yiVRt487e1rtdiG3rep9bkjyqbFrzxDJGHTTS15ahpLsUHWW7GUQd2PowCypSEC",
  "key22": "d4KSQbVif5511DEyecRo53Qcya5QVCbuSPZrRRYT2imfsKdvN5qr9bWQqRw1gixCMfQCoy2XYJsqmF3pkeo3LpZ",
  "key23": "4EfDtBEqVtT6A3q7w8ysM7PPhDF3yQzfnJhAyPMhYKBkdXkAS87rgxgP2ZhQRGBxYXhTTfbD1nCdkCgGpM8iBqqZ",
  "key24": "4eMfiRYNJ4rP3Hmi5NAPtZvTjdN8uJVnJyhPPTv5b4rMPDByUSGVBpLfLhdZwfpzWnvEUc9rr9s1oUUE5BVTZgAR",
  "key25": "5a6MkANG1zcKG9yuB6gTUqWvXn53RfKi962joy3VPgYsFbLb7VNsGPgi6VUEm3xrnM6htqUym6VviVifTFuNmQK2",
  "key26": "jU8mR9kfEBnThU9n8Y94g3vKGQQ3SZ1EGZR1y1F3mJJFCYoxuPffb7hLize8HSUqABc12Dwug7e41t1s3EYSzb9",
  "key27": "4TExRghdhxyGk5beRLuk8349unVTPfy745o4qJ9VbZPTs4ZKrTats3PYFmbJFZLkfm8Wm6XUtZywBUF64aTK8QUb",
  "key28": "m4MGbqecRf7HWzvWqRYA7LtkemcPpfKHQBZnupy6PNWKjt8ptmsEvF9AS38XhsMFUcqX7wdjcm2fzcyhKWdCXCS",
  "key29": "66d8EX264nz8bHY3nXytdQAhFxZJKCu2nkWhncwoD2Qa8fRo2uDkcAesW9P8ZgLorBzBH1Rok2AmqdCjy4j3N9Xs",
  "key30": "35syzt8b4TujLoCjC6MJ6tPEafs5ChvztNcXmuTBfgK5UHFyRRTeaS6QKfNQadXh9kw8zbwGJ7GYWH7vX8tuF9B7",
  "key31": "2h3QZ2RFD4qjCFy6c8KCx9SjezE33Xp39rTcbK4P2WnryqmtFFtqjDhVzfNbKhSep2DCYwT34ev841W8UjELMZzh",
  "key32": "4K7J5zm6PcW7gCFEf9d8oZpXBsjg3rVmFx6xjoHT3LeejmoKfokEaA2VXR2YuBW3HPv1GK5gxjbCYw8uSbQL8uUy",
  "key33": "5pTYAj1UHNPEJ31ABpntFimc8CovZv2MVzJohJQQFKxz322WmCPZTmfmbENCRwfKDVjh7ZwNTYEAGU3ZWLc1Ej9Q",
  "key34": "4qfkmRMpDbs7aMDva5WiG6h9SgPHu5LP3ydgZcPCxuzgwm5ehq6PpXjhWZWNYGDmqdzdbYeq3SCekktZ3N9YbPW3",
  "key35": "3pEs9VgG9SVZr1TxGpSCWHbsZAVhsdxjfxu9WuWYTqsP7FeM5ep6oURQiMMDA7ZVd7mdJFPoPsNLRFt345JBemf3",
  "key36": "hX6nnkfVP79G2jGs3T1ozK58VL5eoR93A5bAuNDcGpQg71Vb2eGkpTgo3J7QFPWQTdDYPvfWyiYSHpcXKmsNuMD",
  "key37": "3GKA6nrBt6tbzHYkFkZkgMHg14PDBoMEkcYbnwVcSNKuuctCbs2MmYED4d6MV7WfgUgRs2reA37mL8Pm6mUGXLJA",
  "key38": "5PQAuEKchpgpJbeYNtJiUv4daRAra2jVuAh5CTmE9y9ARqUa5U2XxkPmTPgGo8vMbtEHGPbC5725VtoQ9BLLMpPF",
  "key39": "5HD2ZavwVX5BzmyjZM6iBc5yq3resve84Yb5X8oaCpA5rHP18F5SouuuSvEFD8vKo22Sr6RJ2NYRBc17M7nKYZpk",
  "key40": "3cPN4f1nTMjMBhoThsfL7SANVK773b4vaZeYe93u9Jr6ZoUyi6EaNdopFHBact9m3sSprwv27HvSP5jxgMW3GEXq",
  "key41": "c9VqSGWHY1NUpGoJKvG9vPyEgsonPx4g7uj33T8534fVP89j4dtzZ5eeVSbtppRCv4rhVxki9fYFFKGLCbsKRBC",
  "key42": "4aa4wGASF1eFFGrsgjdEadcQ3i5D7dYwwwER2WK2a6QHiEFFAodj6FaBnBv7a6hzf7SfoBXVArZUbqz1tgD3E5Ba",
  "key43": "3Df5bJ5eBafZxZiM2c1YfVFSCNp11vnUSeB5JoDuuWFGQaYPkLG9TMnYwujcQGwNMBFZftatXEoeL6Yf3xySd2yd"
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
