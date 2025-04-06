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
    "5H45kyypuEdXWX26qBSQks2QiYiD6rQT2pTADmdpa8ht92mtVtsDgap6m6X8hAHYVyrnoy2nXnd1TwwtLPCZxoTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TT3wCmJP3gg7JGK4XU73pk7bBCSA1rhD5YTDCRi2cjmB8kHBeW8Dcfwq1QbiSG7k5N9aGdbVmotnbVPhh9pgMGT",
  "key1": "y6TRyZaSZ5mxx3cHqn3Tiu4P7PtyFgiFtnY17zQ2RUfxoTUprq2WCPpKRiC9AF1rm9DCmakVQ8nzb2rkU9mLMKu",
  "key2": "4TPNdnv47JAurSBocCRHZPDBoBa6VNBXQBSYLfXnayegHmGj5Tp4U89YKidtDVRLNfpYQzqwNuag9auJMXuYSMA9",
  "key3": "5y2cXXLZNkhWj5fWd4GQ9u7XRY6oDGtmJRJdMBH34b9J5hegJE4btsdgGf8J7vGghB58V4T755bLfhVuoZ4vcjSs",
  "key4": "3jbiSHUNFsH6Ct9iLz6wvEtAuQRbSxnoogbAr1qGEGQbDHBWG6kvbbBtjje1YcqZLSNLnFQZJTVG2EedEc3qKgg",
  "key5": "62jguA5mEKzQwYxjCrDXsAgzk9mVnHMynmmJNSjAKmRbT4HDujhGfunXZTGdPQZ5t7srZFWyTDCHJTybAJ1susKi",
  "key6": "32ER5tgMjGnhFTxqNWCxku7ne2GkZJCHzXc1Qq4oJQSpbSTQS95ZSjTA7T938vik2vrmqm4k5iCHSf1SGQgcXMtn",
  "key7": "5n6Emo8frLr5Zag3uSC7RC7Gfjc9zGuT8hfpd4suzbfhFD5gF68mXQx4gyi3RkuhdbgN7Ncy432ruqCjwcA6UXLX",
  "key8": "2mzwVfca9MKL79YwFsrXjZVmLV8MwozsnArEhe5LQ9LKYtHavxj5f8Ek6eovc7uNKSWditJPx9ycWCf5x8HALTSu",
  "key9": "34TbFMbf4Gn3C5x912x7wi5Ud7cUihVDqBqzvwP7tVbBX5Gd9jc78hgh57KnpxFT1GDeX4bpt3UgK59JY6PEjdis",
  "key10": "f7R5RT8f3gWmbDSRWfEB8DDmKvKruEzZezCfvYWLxBra7vNuhETg6D9ACbF98HGhDpHZX5tnGqFWfU6ADFektXT",
  "key11": "5KYnvEGGsygMDRqStDsKpAPLega3w7k2hjqJPgKJB6VmqQyZzJvKGmTSPz7uNpmUMGeuBTXDdLHQWQxQz1ygqay2",
  "key12": "53cDXcSyo9ygmuv5PGopiPxFayc4u2CS635xuGCH28yTvCDjx6EByAgce4Tn2XfztggxsAF9zV2oaCfo6ErhXUWn",
  "key13": "4ddkJztLDGHdMgYyxnFpLGcFW58s3aSWV3VgkAQw8RTvNQqxh7dEGeDGmn4f4DHoaa1wZ7Yoxbj7KjkE8iWfKkqh",
  "key14": "2TeSB2idfmYYDDrT6dkq44mxvFEJXjCDDgSxc726uaPUeiSHoCxNprstqGbkKCaTkjUcXKok6W9a4fcQfKg2duHK",
  "key15": "BLBbH68xDFdaiMd2wCF9jFhcot5r8VnzrPmGhGNdFAAbVjgT86aVQMERP3mAfwTjqzmndwwPhMiqrCwp7BgwMYw",
  "key16": "4F2uP4YoSHYQficpGhHmEYD67ViiJftv4KDvRkh3ywoeGk62eUqK9A9s6N9U41B42KV6uby5nmEBD5pqsyBCX8nP",
  "key17": "5aGX11hZhUMxH2iEUg1GeyX4AKsZ4cwoc651s1ervW4MUmHGqEbTyywmndDuY2dfUUBdmQ6q8EdzqcR8jPN41hYj",
  "key18": "YDHEGqjQe9dyNFpKNTFvairJDWdS9zdqqkiwLCEBjF9TFtWgexhJNe1dgvrtUizuMMunQywBPnX9yqCAtRn8gL3",
  "key19": "61wx9QJWizHd2zGbLj1kAhQgcSrg1kFYr1rdXjdziCtRRywzRz8JMK2U6kyrL8wXESdiSfxquKqjMMDTncUUCQfD",
  "key20": "54DwFmYkXiJK4Tcn3p5H1U8EikqwE77cQGQ3FFZMLH7kQFQQWGsFKnMcbgeZ4pkgWTrA399isyyD55yf1pugCf5",
  "key21": "55Nx8p2S6BPfcgWHG6XwWbWTcdiyUUVzovwk26HSP7y2mzumiSdZXgyQA7ssXQfiBGrh88fdJZjbBkT79CJueXCy",
  "key22": "5Jk4JH8vEgnT8KsFENRY5cjDBcFtrMeUvrcwwdPvhoR7eVA2frhAsijykTSVeXrLKAYs8MMjYYjzwmjMeZ5TXb1L",
  "key23": "52V1GVm9Rmp3KiucocKYT3ZTdhSa2RcBLMw5tFxfZYSHdzQyKCXLHaCTnNMbvzFFj11ma28VQSJqxPDf8FrJDpwo",
  "key24": "2eD6y8hqTuuCSUyV7C46TWMsdVRfLFagZQYXmgegNTmrKGkvCWY8jVDuEWcHvMUr8RFYbDqrrrXhCYhRdyHNZ5Dy",
  "key25": "4FW89tZdk3QJezBPppzjyjHHdc6p7GoTrtqU3hq7rEfuUBz4S4zAyTqqucee6cfEVA9xbJogBcCgSr6esdjHBoM7",
  "key26": "4KbEhfgQiKc2FmNtFhNqUyH9ge1MRay5dB4EmXvvbg7cg8dD8eyJhrhQk6cDijaikF4p7MbgaX7x3TM4MB9TSavt",
  "key27": "xzcRKENPByRWZEaXQHgPnNhs3EWxUJJB3yY7SfraXTbXtybrnBtKNEuSyxup9uBtREZTqRQH6j6gvab1vQjeTya",
  "key28": "NzK8XZB5woLYFSyytoFqaRXb4Vrz5vJEZNvUZTRXcAXqvLSb3ucJsStPjx3K9DLdxayHckDP51NcXBd9DSPXF7j",
  "key29": "27MkARwGQAPTSR6JoY7dkurD42CM7Kvg9RqrhUuUtg5UNovh14w58HPoKyS3z9nM3YqonjFV8gfw7cuMndKQasts",
  "key30": "5rJ7SXvKLA9WEH48BwoZpfRavrRe8JrmTX5YnZFqiagBBNxRhAoaTsmaXU9UyEbGNTxvbc5NLxHnTXuQzZyVZqhw",
  "key31": "53J4ir6JuZQrcxdsnRnMv3cub2GpNZRPNfAToqd9DXF4hLpCm8fmMqNpAwhUGQepmQ5Wd2nKXCRWW5JxFQsiJDMd",
  "key32": "2LdHWgeqNXuEKctoJoxRXHKnBsuxZuAYAy7fZm3YXiurKAL3ywebp2G3DD3vdq1JY5miN74iYoBR9tW3rCfZLX56",
  "key33": "555TuS1H3LLDBP3PjmwYNxhLSSveu64NPsxwomJtaMLEuQf4xcE9ytp49vGgH8gbvXuAXDJddexnjE2ss3mPJoig",
  "key34": "2EWLDwB35d5ame1MqAtPpjTwxaiWCHdyy6okBpM4wPkaPe5b3vbShoxJFhov8pWTi4fiKec3KLGurdkgT2BEowKE",
  "key35": "3YrmuvmdZz7HJPG9uUwmdudqudfkyVngr3XB2pXwMaXV9ZaPbtb2epAArmLWBHFHHXCDkRdEK5GSHGEeJDScKAny",
  "key36": "yD75J1nVzQ67L4LorFbQLQeAmCUMZWg3XZajQnehaQRFZ8jCepDeQPzK7Geu63tLUDfSiZbWNEtDFVYb5R1Dc68",
  "key37": "NAz3GgFhmN2UmHsKrLNfVbNzrdSE6CdyD8DHtp6yeZVfCJ1W9B4RHTBXvyn3vKVeqU3FEnW21eJpHtYDKimDZ8H",
  "key38": "YJY9DLTpZDVaEaxFiDQNP7tofYxLDH7ghiy3aaENEbazcwWdQ23FuCCfT1Ka9zfNLzhKSRNKAumBpKe9GJK5HcD",
  "key39": "5q7eWcZzZpPnSbRqCdY4qWgfKoEVscfbQXEtBRvhNXLsA4zzcYaPF3jNw9FU1dD5Z466BwKuRgwyKtYAc9oJ9qdj",
  "key40": "2KgtPDn382r8632TX75LuNvUWroVhLjuMj1LLS1gLWQJYWxMuE9dE6igbgVWL6Vd2uUNeRTrPGNLChiZMVcM8u85"
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
