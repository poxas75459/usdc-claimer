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
    "4iK2PeXq63cio9x92gxSwEdbHRR9n3QC7YgNbdHBHQKHND1VAtwMGvDHHc2HwY5rL2sCgRruCZ6kPf3UUY2NjTQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SFJUk3CCxJAUoUy61LpZQKDPyuXpvWuhe58AyVjZzJEYkE1XQCpCzvaUiEgkX72RheFcMr2ipSwr945F9VpcgHS",
  "key1": "qYCaUUYsrq4DPerhqKPmfy25acpqUCbqrQUzqUU6U56bk3qtTSTmK9Zy2vZL6USNxqSWZ6p4CxwpRqGbZpj9LJZ",
  "key2": "5TRyp25bykHY9mcVA9oLEtc3FRAiQ4VSPPcMgSb2W4LDzNDCX9jNncpp4jsHVAWUqR8axT6nio7wS7ebUdMvG114",
  "key3": "5uiN9UozqZ3qg7tpkbtMv99perSA3759LDzzvi33txL4xPt3Dm39Q5s3gPhwhx3w9HvHA4zu4sNdzvKTCuBcuhLr",
  "key4": "gziwn3JQtM4ukAvKEex6KnaSJsUwWhaAKAkb17dLbCCYxziU6JJEepuBuQegUkBLkot3wpUULdQojhrWy5abYbS",
  "key5": "85bGxmQgbS8mWEnXJqaet9UPZPumJxyPZotFc6eZWAhCBhjFEpmEGZxoymjKabr9sth2aGJkfiqMPJ72nPykSMD",
  "key6": "2PSz9GMHojsyX14nyYxC7BUT5UHQzHvLUW1JMxi6a1xddz2dcjx9EkRoxgrJ2zKvthvw6tUh5oMKEPR29U5qjonR",
  "key7": "GTSC2vgZBsqHjvhaK3FwPm17apJaBysfsmSHNC3s8ZKeTufkdatMMX1LQnszgvECMqmX2e38x9Xpy34L37egjW4",
  "key8": "Cu9bNpxaHhHWqXADKAJB3krLLfzKGZvRSRdm2NM4i5vdVo23eVgrjdQEbvrf3G1hovS7iQwcMVK867E8S3m6eC4",
  "key9": "2axYCGZDAywWLeDUnrrdSFqRHC9kmDPAknBX6Ksktjt9nfFFH8anXxp4eRcRJFJAxt2hZg2aKBYquVtVyqsNufek",
  "key10": "21HKQN5aWCMiUSPYcSzMZn9eLfdnSWLtUX5SZtafQYFvXmEYvMP7CCDK2T25yVnHibSCdWY4qqzybRqHH9dgq4QH",
  "key11": "5awo1mSSHjRE65gWk3gP3ACXopzvRmjMk4jzFCfeJ2Hp2PVeoWkfs5SBLWSiWqEWPMotNfbEfJfMgGwnQPaMiuTa",
  "key12": "2t2UpFi1JwYUBYKG64AuccMzmj1CvaNAsRxEv1Kt4ixzhTFH5qo66aMBFzML7GLhB49WfpryZQKa1rsqwZr3DPbh",
  "key13": "2rX8Gs3wgVGZM5UPF8YMya2v87ZZrBWRFvvovoFu5fxbRKQ8Zpi67Z37mVCvZsBucwwxiLgvJe6SSMmmAfpqq3Cm",
  "key14": "5dHfoBcMoTuvkY96fBCY3qhDUbGFo4TQoLLihqyvRbEfeeCHPYZWzv6SNmVX7qC1tL1V1NbTs9PJHVXxAAMtzJoq",
  "key15": "BhokXgoefGVC86e1KDEsmnezqqPrPjGHuvLXuzvceXpNkh5kG8eD1sbs2pptKjXDhgaxmW1uGdfMiBKNMJqLspr",
  "key16": "3VjymRcdTf8fsWrbudLWrec4GgPJbXcWmmqhzqnGNcyaeuYCWUfmpPCyFQhKMRK9b1agRLbzEwp3Ugbx3wppNixi",
  "key17": "3HmmHDe91o6TnWki82SNZcURmJE7PTPvFuijs8QdhEe6b84Sojc2J4Do16LCFo2Ft5jg4GJ5V2Smjpy4t6miFocd",
  "key18": "3s2r4efff42Mgt6EYkGiLZpZR8ZdA8RbDgqoYKKqtw13o88oM2RRq6G9dUg5qupQ4svEGemc5uTVtRp9kWew28wm",
  "key19": "5oXUAvoWSczLoVFDakA9zH6u6mVRkUDPSZaQc33oCmoYdyXxSK7V6WWyFSWoPr76UrULFRXRvfghRGznHLCNn2yU",
  "key20": "19bYPuk1CqrtbjXPUr1WEFXzMVrmvobP1PzkKwymats62d9qnp4fFkYrtqJHJrjbcjgTUVCgdjGkKJ8LiJvH3Ro",
  "key21": "4uZjTf2FvRpma96vRxVyBywkvU7phUtu39gadwb1K1DYujnqZzTZRZZfqdKSF6R7aDMj7juKAEQKbfy4tAc4wAr3",
  "key22": "444roG3dunstEhAQL7v7e4RjWFgnEcthfzCDmhJEBNdqizCLihD7paAJL7z2E96V8Dk68SxzSVbHWCPdvkmWKKLF",
  "key23": "SfYrPHhu77bDJWvQSjGPDE1NAzLDzH8xP1KxfXKgXjdyKxkx1sLczvLCixveTCjtpA2rjTdxMtV7qaiS2894WA4",
  "key24": "3qzvYa1jo6ZHokqKtu6mrjPPZhcr1gk5bbL65zg9Zq1EcmEZ4CTbSCWVR4hgAAD9AZMjE64Ygu9C6dRGt6W7Tcsm",
  "key25": "5dKgCXi7FNywTzTBgGyvew4JnV3wgD5Zb9cTuhQurXtubnNxEfK8zzxixh9Q5cPWTmMF65bsgEr9uqaSfZ53ypPr",
  "key26": "67nXWSppCUifBfXjanQfe6AbeJ6NsZ2yofzmyhyn7q9ZnAYof7twMfQe1zpp5AaRnXVVJ174Lntm2TqbVYYzV8Ks",
  "key27": "LapQwnGz37X41pVSqwBycensxZATW8Sm9rapfw88Mg1T517zfXD1GwQEawScGhCXVVG7HWhApTx9igQYzbwmtrd",
  "key28": "4hts72QQbsYdEL9WUWQMPBDzt9tu125sMR84nTtfmh6BXYzL4KWC1jT3WKL8RYfBntTnRBq5gWLWioxxBUz5LXwv",
  "key29": "5XR31R3dgRia9Y6PXJ3ycK6xxdcym9c71xaHLXZhQXXm53hJXUo9LHSMJs8qfHQGZrhUpfSgcQnF44gExdKKXaf4",
  "key30": "3T1Rqijt3ys5mLeVPHAcMH91xeXiUBh8omxtNqhY3SoWXm2vd8GYaRrVgeWCWrFdoUPsPfaQoM2xJ2WraiUndqJy",
  "key31": "2KqzRaKpMQTRwD1RR9eNCc6Asn4oV8PvapiWNYsKLo3WpAwRMGdCSmZu2WyCrApns4AfWW19fZUkXhcfjreSZaX5",
  "key32": "62whUcVNUeWUnHCeRqCfFWtdd628RAmZpUJPo2GmwDahkc2fo1jWGtsDxwqTuNfBd2YKyFMFFRzqQRX6MHCBKAB1",
  "key33": "iynix7pLqgG42SFxXw1ZhoiuwfPebZhe96j41ajU2ymvco7XwAtELAReaprs2CsMVJmRqfNi2ERYAPfoiZXqAwq",
  "key34": "4pHewjHdR4UQTke8JzKgXdPKS5hntz7oRcb7hjmMhWnAGjZpvYoygGYHDCBPDX3yJ4ZD4RsxNfDcS96aofQ4nAAC",
  "key35": "4E9tuDKiBRzZ5jqaw54hN952jusNapfTxUYuQk7wBW2zKZqxtkGofeZFHDAbbxfKXWPtd2Bz9Wh2UcZSoPwbMhkw"
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
