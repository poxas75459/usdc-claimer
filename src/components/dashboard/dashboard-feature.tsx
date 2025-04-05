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
    "jeheYNDLEiXTKMVwW8gHTguvkiERTvv9hS2514LZWQgCPjEpph3o7D4zU8sr17uGiDo5Bo3GkwQV9MSRKkLF4JF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PJyjADz5wknzmm3PAZHjbJZvKsimfjkzDutSFbRNToH1NbkPr8U3YULXVDp4cv7dxjbH8HXnRtaMSRbeTitkT7D",
  "key1": "h2uELbkHK7gqhtAEQbVUHhG9BFNeMo1UnhFuiqyjcv3xDPddcvMWawBHaEj9tUGjW8VtDpwBqb6jFELs3PxGtmv",
  "key2": "3YnYdf86jzT4rbjTQRuFQLsFeHYaEyc5nRANp4fieWNaSEzgm8BmTbB7GdAU9ijW8A6F2JbQwrrpSmJ18WXHTv5B",
  "key3": "5Wsfvqh3Xhh7MqFXRSvXpatYbwoHLET8TqpbJH2mADqpHWNmsDXTQ8iXRRtb85k1vjGJ9zd1BQEgEbbTBxquJofn",
  "key4": "5HQSEFG6sXehMvjXBEtM2aJmNiMYigLUFgg7WQDU6orgfXTYZstvtwCNNYu2pjHxtsNPt7251BAFnjkC9oe7UHFz",
  "key5": "QDtBtnUhGx5d82FNUjuYfbkiJqF8Uv2TzMzcPnRUMvYhUaHj1okkh1eSombfivDgbGVcZoxMf8k6S4Hc1pkNdBQ",
  "key6": "4S5AzifhaccDc2CTx5o86s7Q6SqSdKXmntgxG7QDNiGuJandsF9HVKc42iz7qshBa4oUCdWYSBfHJsJBE62Ct9H1",
  "key7": "2ZFGuK8ANn9pHRbro57xKRAWoCuCi8fd3zz6Dg3DmwTRFDr1G4wmWy6bLDdjFzeEXGyoUe63tuu4AA6WtTgJRd8s",
  "key8": "4MLb3L9dhqJHMMxQugfoTj6Sfy45nNAKQ1PMGVN7yRyCfjS9Rv2EMZrQqNFxwZwu1q25R7BtssEkfVE2vJzUu88g",
  "key9": "WSazh5YV1v7oTMHc6hfAHCukMVKvX6NfDeUGVorPn1RxJ1GW1aqjDoJGKcETZafKjaeUYiypUtBXpRsDLmGJdiV",
  "key10": "36P3jYFnMTCkikMsVPmFh8K474V65oGoWpz31tAHBow9sK8MbeKuvZX6GuhDcnAdVshryWVLT3chFqvngqZqjYUk",
  "key11": "49G1e8eMHDtyi5dmwNCZwnRLLbV49CHJ6Fecpg2iHeJMzENrxHe9JjjgmF7eJvGY5fBJpBtTBzbcdxqLJDATVB6h",
  "key12": "55qwnr38XuienwNu1hGkuZeQobreBR1yXkq1xGEK3ctbyZa5CZiawfERsfRvuBFLaA3Ud9KUFi8uQzsSxBRdaMF1",
  "key13": "E7epf56TwW1AMN4tkwCcWw1RhoivWtxs8S5CwEDcwtWNgaiKPUB8qbEsvfnDo8sW9J636A8yj7TrRKjaEDHAzYC",
  "key14": "46CpBYhX29bXhR7bM9JocJjYBR8zAh76tALC1L5Piq6BpCniHt4HyA9qKbqFstuPoDC3FEGA4g6qaQpRYBDdf9oA",
  "key15": "2cR4RwzK437jMmELxz3BRkqpCB5Fkgsh71m3sYgzaqEoSj5GWfst5yeJC6VvhnhrMe5sLHGRoHU5jgThkEpz86cx",
  "key16": "41UjaU3P9R5Yq9FQQLt7x3W2ru5ERDubgN17FBXvDNN1hn5T71miEW4TmPrkMGQjPXNbfv3gTTwSqSCzoFDKdMcE",
  "key17": "5HW4zepV9zByYFZ14R4gZicYfuTnjmfRXachPBag2CTAcZHB3BwjC4hudmMDnYrQq8KM8MKiDWKZocHQJSMkSAmF",
  "key18": "2FKTjYUuZ4zt8egzK7DZKed4TvEhQm21XwotY7RWhqKqGEMuNSvKmVu8U6Ryk94SYgNwR21TjKJP6t75bHq7wQLZ",
  "key19": "1UiKjF6xe76ztxyPqi6NXivqseBZfXkrALFzKsiSWcEQ3TihPKQDgqqoQRKWtYoT95PtT5qNV7w3MS3wb8TWZSj",
  "key20": "pSwjZ3iShzy1hyBpQQzYsUdaDXsvfgPGtFiNHkvgYNFfo21D24sf5LZzo8ngtQGsa81mVeyZ3tqB7hbZRCQUe4G",
  "key21": "2xSa5L9JeTWNHJq17XSDY7kFQYJZEWb1W7cAckysb8NZF6ondYU56pW9kXEh6rJgf5LHVvMFqtqd54B2tubvczbb",
  "key22": "2k8H1Tpt4n2c1XqnhupMJzzvy6B7TFDwyaeWA7HmG2i3qrfF8LBLELu9AwA7KgrYLNYnYFRxYPMGXCrsNxYz4Af6",
  "key23": "3xbeYmgDHRZ9QSH7FoD2Y7fbjgpQgFCdNfDhTi6EDnAzd29neEFLo4kQh7DprSitx8qk5peXbwcMSw1D3vS4Ns6E",
  "key24": "51p9t4aPFvQEMRPgD63FMz6qsxV7WrFit8v52TEoNd6QNyegNP9teL7RBLyBE8toEae5npYbJvyouuRrseY3WJnt",
  "key25": "35TKrHjWgRjwWoVbrqnUKXkP1syY9hivm3wuuddYFaw3JVzz6CgsAEMAFSUFVQh9XtDjJpFQdtyE7LYYXUyJF7AB",
  "key26": "2Nuft4LYQCGYvG9LgzRfGnGCz7qoy9f3qmcnRhu95EbmSYis4UTWyTo3ruLivxGRM76Ryik7Ak57wSjvPpeW2ax4",
  "key27": "jPmo4ja18vQsYtS2D9eiKvDrhABvz1FnasCbJ3eGmoMUk8Qa6NLfNveqb33ZbAEsfJ5tRPAbPFzCfgMzLmqotAM",
  "key28": "4BCafUkyVU5iA6wC9EgG2M39S6gCnK6v3mgNBpDE51SDv8BZQQHvwaLUQPzJyi16oW336vGrVQh3uiNYGzqBxLo5",
  "key29": "2aciaG3ysczSfmyFZiqX1qbmdnvp8UjqfsCcsyeN2ao4giy4Yey8JVME4KTdRsbTaPjKRm7EuuA3Dw11jr3cHm8o",
  "key30": "39B1LLHj6dRitpmusdkQbomokwL6TM4fWthojtacqkeqpD47B6aTa7rrp2a88tZztJ5WMXWTyWp8p3xLQix6FWkA",
  "key31": "38wLvHMzjT4WcryLV3fQX2t7tMUj3MUiqXLjCoZwf6SHRMzXST8oMn5ELfTLwVKvEgsDqqmNVRapUQA56dz8gsjC",
  "key32": "4Ln7dpaJZ4y4UiecjNNjNuhxY6jkmuD2w6p2c9mBmVSeZc3s1toVFsbTf4Gte7gRYbVs8qh84L2cP5PpzauRaohQ",
  "key33": "5Z6UrMMAzZ3dtWEmMnMfryFmnCruPewZ747fPRoas9ukhVeQSKgnZWNg7ZhYkgbLAJuZ3XzbNtQ6eZcvZVEd6ocm",
  "key34": "PqnQw8He8jqkxok9M6R6T3Zf5c82sTnyR6ptigPDec35R8pHFqaCanaQK6T1NuvzUXkp4xyAAqammSZNx3QnC97",
  "key35": "5tfamGaP7xDG7aapFKdZ2R3uYVsp1Q4E8R1fFasCEcBn2uwSX1ZaWusq1nZZFaELHnc5aMpNegsFz5EooStj4M9d",
  "key36": "645FNam1sLHqF7pdRtqU3RMoVwGyfH7a46ricAEAmbvfwcGxRZDQYDFdUBFPDfHyiL79eMYsgTXoLLjM4FcDPBjB",
  "key37": "65gaNMsSLmfXCwaH7C8ATuq6ykgv876gXkgKTgye2bwjffjxM3iJzpKdV9VAukS2YZJcBtYKXtr2pfgiPUF9fm2b",
  "key38": "4gd5HBazuzhSNmjkQ5oCvwZm7ttHvPLPSX6SRo4ZEGBfpB1No9nhXKEDqVqTuNTapkQd5qy8GYvLY8sE8xe12tL4",
  "key39": "4HiQX2Hovt9riAAn9aSvtFa1pAy6jQb89gocgnZdBuvpXvodXvLsag6KGhFrTtf9jAJ2rpmYgFocriQwteGPh44m",
  "key40": "43gTqNx557Jc2qsS3xDTWQuDXQqWqXSKpKxvgzmFJNJfquHV8rfpub57CtgymBnZCyAqhrWfi75TSRyeq7oaYECD",
  "key41": "2mdfxSftScja3Du782byYnLvi973GGjgJhZwgApFGSiJjb2wHqnrAbv9L4prWtyQo2KdpCWRqyy2wwYQ7FEFL9qX",
  "key42": "2vX1g1XGJPrZGUQzFQsGJ7hGL9iGyQM3yKmETHdScamNHL5drEt1TZcCg21XJH2fJ4sZ9GTYuoqi1wDZ4mpZp3zH",
  "key43": "3ZqRUoz2XyHxd1pqh7diobFVPXjzc6ZbrD7BBtmXBXJ5taoB1tBgyjmD5VGkYjGmeh3KxZq7S3kr4UgddF9aoEEy"
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
