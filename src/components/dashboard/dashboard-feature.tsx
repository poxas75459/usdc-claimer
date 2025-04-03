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
    "38z1n5LfW8ZVsXYSy5hgJjVkfV8BHjqF2s1HppkyD6cdpxXcSX3skLzbxhEwMQnQDc491jYgaXVsLPRvCtTfoarL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Bwi82XaMjc57kz5CiC8xc31CHLu8bJD1icCBBYAkZSZbzLXJhdU4rQu1Y1HYdtSRSx5dXwLv2jdLVGvwvPtU3b",
  "key1": "5QcpJWdF5aqFbg6hM1SXKCsggabS8DQxaCZau4XsNLD88YQtRtfUsEPko7EDFjvSUws6Pcz8txeYwDb9fgpCNJ6b",
  "key2": "3jsW21a3AYt55faUWQsKkQCqouB8H7C13QjjqmpjAeJ9HLVw7wLzNvquHazXJncfXRBBV4i4utMe75uH2B2KF1kb",
  "key3": "3YLb1NCVgctHBepJF7ic8ZfW9czmZ6EJxhe58gYSgz1r8i518rXA9j9Vs6DoESLWf3ew2zs1975CHWJwvHhLQQCq",
  "key4": "3FswFhNcxKenVRfWK44QbPhJWa437W9SN3L9MNKWrBv68EsVbJkvNcWMUHU3V4LvHCJ27u2J2Co9JL3LCYGEhr5w",
  "key5": "3VtXt55JzrwYRFAPf5hfHU4HWda2B4ne3z7spcns8JKkYzAA5YrMxjQm3bBA6ThUVz93XXifDoRmVbHsmUfBkmwa",
  "key6": "4PDQYAz1jdEymNpjM9STPit4V7Cnij6h9NDEKGRAjPWgN2r9R4avDBxxYC9uEXUUi4WpnMNEqUjFkVKuZPCpEovG",
  "key7": "4AcVEsZT5YZtz7KHBFK4R75gX9zJsJQujf7HbKgGeARvzHZB1K2S8A4ZLNVX9R7Gbm98gnnpumZW4D4zfcADSu9i",
  "key8": "5MYrD2MFzyb24PkwB6Fn66Nn6zPNEMLCWUn6awco22gbjD5nbLU5fxJVzRimPLERwoQ3hkcQC6AJb4EWxYspnpHZ",
  "key9": "5fCLzBqKCqXL6DGGZscJE9c7fiL1rsfH6MxyAtXDroqTiaBNg4BMvFqCjkUNazBXTP8fP7bP2NTXow3dbBj4QpfV",
  "key10": "PuxHw5VqAiJmv5Xri3bn5HdVju8SudPcxd8WPeDNoxeTwujDmgcuWEJD4oDS9kuk1DeLd2N7S5mX5TdfuteY3XW",
  "key11": "2FjEwFAi5TsyQdtuQXu4CHL3CN2jxVKfefQrLnvySWJF9tSn1ziNyrFMEYcQ4f3MMfvaPvNyx8j6ZqfBKp4XdNKp",
  "key12": "4ujEhc1mVmJ5VmmBmZbUeKNEaZPkXcxYY6GEMQU9PbJLGtAdWEFz6cwMZHdLLbAjqdqDEDgTkgXDe3JVCa1wHoCD",
  "key13": "4k9CrpV7ZMX66sovLfqLWjNq1rJLH7UB9ZMKcmdxdBffXDtawLMzbFaQKVKptdJ9D3d6sbFEezu4MKGF71xzD2gR",
  "key14": "31ADzK38XXsyVRjB5rtrSrKwQAm436XecypcEiTWfAnJ5K2YGcgxdNx7tTxoYBDM63hGQDNGfaKND1VFEVWiJ1km",
  "key15": "mneSwvHB1UH8CX9uASigMHY2xFhD9q3nzUkzHMr3vZNCTUmGpkBHBWAbav9QtwbXYhjhxAJaKGt9DJuupXQRN77",
  "key16": "39x741nnaNMtEas9riB93nu2sEieox5jiERyzoZouhWj94dff9bisSsdVi9oHGHLBPCof9Yd32GdAAR8UuKiz9W8",
  "key17": "4dkdq7mvKpNrtQQ16qMa5VCiJBgbB8sa1u2wZpftef8UaprPoFBynDhyr1CRnju2qgB5yyaV2kgyaKUhVapc3eBN",
  "key18": "HbR36AKPFoVtGjbosyShFs5qgEVskexpYLpNV5ccfb61rSBatTgA9McGUxwKEx74aascLitF6GaqSrY8NHE2oU6",
  "key19": "4uD2L96AYqs1r3SptUz7j5yrbABSBaS4mNMnUCTaex4XWusj9dhEpZuN8NqH5JXxpn7t2pFXN1rTgSTaMS6E4Dgf",
  "key20": "5QQXUeMdbVLDQXaFht53SLi6GQiCDtpn1r9MhZ4rHZGnTCxHwhwUn7Y6XtR97WX32jhn4VciKdYb9f2KnFb1iW4t",
  "key21": "22QTETasdWqT6LmFsLJEPyeVFc17XPcG1c1SGxnkQU3CFrSs578WW1wnoCXGr4Wfu9RudNFEpfGsQ94WEGPAPLMs",
  "key22": "3LP5EnH2HEF7Qmfyv9kZ95pj4ChS5hNMJad9H9T87u4mJ9qe1U4F8GjH9DbMBH69F4NotynkuknnewoLqyzAyREb",
  "key23": "HFJUsr9nvJuZm8u86TCQnVh1F64NZVM512d5mvHra1fj3fKgQo2qM5GEuYKMV5NdZUmphcfG83oUzFQoCh4x6jv",
  "key24": "gWTEyzkWhtrcGNr656xwU8Z2q1fZ8u7F2zSeWJQaLtspWqTQGteUKdBapzzBjcJmravP6zvwVqg2UK9tvKS3sit",
  "key25": "22yVPcdyfbKiPzeBBMMtHz5QdBZrhQzYS7RM7wJ6KjzExF2gFKXA7jUnyuRqyS99VygU6SikiQyNScWqELKLoA9D",
  "key26": "jcyRx6N1tfFH6anp1g6RAMXqGcFVxsHdo11NESJXiKzMGs8jMdFRmmVBRLd18iNdHEeSjJ6PSJpNBpLSZv15j2g",
  "key27": "2wDP2qmGUcJ8EKwmUSq5f9K6karibwXmwXM3DACLMPgXNW9TbyN73bd7PL2t5HCTLEGqmnKyaKUZJxjRvo9gCRw3",
  "key28": "GCYxhiv89JcGZNZRSCqBj4rzWXTTQRXueuJcvoMjn2BDqJFRqqTgvxr2J7Yycfwc1qhN8kqwtYH7wkG3ZrAs2gL",
  "key29": "62dKCrXE3qQvzKaoYFZSfBgXXWgWvx5qwrVuq5BD9GLTC5qYF8UW8S11UWwM8ar3ZayG1ViTfF9qPS2PfVCNxVu4",
  "key30": "4U5LJ4q559U9mbNVKfK1ZwXwbzmE8FHcv6CA1bSgtbWCgFrSp697foeuvyzKcjb2v4rxtb5NqNFihoELSYr5oRNY",
  "key31": "2hYKFHe8evHUv2RiTS94ox9yoWXZTD5VW9Sx3YRyg4z6kGSVbmE4ffoNj1n2DdZrxUzNVmYuze4v4crin1vCH51b",
  "key32": "5jce3JgUuVt4ayY9Gdn9wkBKNY5SZtyMsAr5jgpKspq6dhqMJkUbFxpw55ysEfBcPPnp7HCetmbRcKXggtQvAyxy",
  "key33": "4gEPTN1emmJCMnYD9EDHwz3rLzkCRwxkqYwoZgzyPQA3WLyKuvkZta2Ds1xkEdL17GzBNfHxk866nhF5j34e7wyP",
  "key34": "Qv1fCrAot1nWCcEmjLuwxomWCskRo4EVZf5HgA5cxNg86VY6Now5dnSgfezPp2Z9bvssviU2YL6ZYUj7D1E4hwr",
  "key35": "2rFTdr8vkNgG4RgPQESi6FcoodGGR6wGwBYEcifHuvVsRLgGtybsUmnRJtSLqr6nku6n1U38jJdoS6H2XJypdskJ",
  "key36": "4LCH9U7XnGAJ64pLyMTwcBpVSWvMsu4iSP6hJjDa289suP8YCHHwHruEoLwHxoYfoydExttcQFTcLS9GUr6Yr1fU",
  "key37": "3SpMwnM3zYsJv6HQviR69kHPZBwssxk2QfBbCQiJ7kFdWNZtLpHjmhi9Kvo7nhobJKVhuMR4CqTpATYQKhmUTT2f"
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
