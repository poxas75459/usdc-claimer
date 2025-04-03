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
    "4wR9dBkVG3SJGwutPEbfsroHFADyJ5GXyLrVw9EZR7s1G5Z2Q8ixcjNY6d2hQmYkTJp8xZDjBwdoA9JWSgoC1gMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JThLyAYJphxDc7eN5bj4W7TYp7HUumfCBAgakApSbJ1sMcbq1BbuHvJHMGBprwoAFGZuLYMdKtS97PJNTDLmyKM",
  "key1": "2mWxSULhjCfX771NzuELRTnFsf5c3bJGYsDtsbfvXpaFPKwXzmWhyVfmmTxkqh5VqgyiiHaivKAv3qYt5NEj4ikK",
  "key2": "4CNL9qpirtfrcSnKjkFiHy31Y9ZS6cbrDgQvj24v1LCAc6BzgEraie3snqCnubd3TdkS5XK8GjYLwrrrUSsSZ2FS",
  "key3": "4pwDF5FrmpCxNCkR1shfvaZ5z5xxRcsxWRCaZj9hMdptV1W5BdkNctV2mawNRW66y95Pj5BainH2kmwY3uvku65q",
  "key4": "5thZfJaPzAqWWXkxkNoZVTGtRMLj4TLn4KucBwbfVSgU5rdVFpoZcjv39NETQjaoneM8uUzSrb6J1bJ7LthBgkir",
  "key5": "C7NqjsPY8EnJ1ipEWgc79MbswUZD5VYoYTwMx9CSM91mNwxwgnS5roB91mipdQCRV41kAzPgE8oea31tRDnoQM5",
  "key6": "CB9p3uH3wUMqQcVLMkzZXkMYsFpNnaj7WzeNcjG44AEgSW88mkasikxDKHyckgKSq63NnuwMsAGUGno6BWevWX5",
  "key7": "4HBvHdsFTBX4YTj6fHUYY2sQRUAWgpPBbw3XsbLuzWEnjYjfdToDknfcJAm7CfQ1a12oHehGPSVdKEGJaMYXd5eG",
  "key8": "4bGBHHCusPmThgUmcofvytAEFkAWo2iTUUhVtkQVVb91Sq341eoiNvE7aPSue3QbKxWK77aeurgvJ97EC4Ytuv28",
  "key9": "2kKJZA542jb8qD1ivWkJvepwZsuwyQioomyZrMizSSSnxWnjSojdXWJD2VrdDCT4ni4vR6tXX7eV7cYHewThaiVu",
  "key10": "2T2WYzCHXaxS8Vbew4QssH1V3BbsAS59oYkAZdb7Q3h9NFE2sB2AJtKwzMHHS8yoostFj6guADGnfXRSvEHCMPNJ",
  "key11": "s65NVumUKbyxhz7WofsjBxwHwMwk6UgfmcqhwV5iSSBxuWenyBdLVn4UNfLj7QyVsRsscbh6nbuXYDfVzFBRUom",
  "key12": "3U3U5JQr2Nu3QqNA7J5tJ5QvJviryHFbYDPKTiVpVpG35G12j9KArrUAFYXfBK7Uuj7Bvozuo9xheYxhCUurSSfK",
  "key13": "4EmFURr24MXCTLn1DmALbCPL9WiwUxWB2GKW8dF8SHBdwZ5y3ijno1UnZftyeKR4ZvQNrdtM44xrMmuCerwuTGLr",
  "key14": "2s4SmDVrbR8bzQRJAryCpPwLrVk2ZA4pcM1vhN9S6YgRD6ABovm4xnWkzNw2Ay8nmjfqFzEGAEr6AuroGvJcRU4p",
  "key15": "5o36z8rfD6NyEtorvDTiZKYbjaA6qYamaG8J6E3d6H82c8QNUfxZ8mWvNStKxrdKUeMBzFn2Gm865irtGaVph6yz",
  "key16": "5vWp2jSxq2WCVnAsNzdT66g4xwPgPaH5KMCyKKQd4r9Yqd4p9JeTsqorRdgaiZNHDdeFgiAFcYCBumC5wQJwv3F6",
  "key17": "2TGFmxjxb4gg7EjgrELtD4YPJPtpn1hV3h4fbqwFyuYi43sp7PCUZBEsDKsLcKWotrwn7gZ2iAmcSKS6vMV2hfi7",
  "key18": "44PCFWT7BR4tqUrN4Bn7BEt6JSt5Lh4v2di9EydebexgNNNLqyjmiNHjnJctbeBWxELSCfwzamykqqb2ZkxvK1Yb",
  "key19": "5R9hgrz1Cp9FFz1hvHeh2GDZDGwVyCEKrF6n5Pk9SEVR12PKuVC8JUGzZRVMyRFnqfYK9X2MRfXHjw4kdNvAsLpw",
  "key20": "5t6g7nPZ4inc1HtxSYDo5HoKBMZ1NdhuZgBiWPeBgbhN5X86KL29gMdnwsm5GsYuEPniz4cyrQEGvN1rQ5avWGon",
  "key21": "2288PAxrai6eCj3hEsQvkMR2Y68VTDa1vqYQ75TZpTbEQ2vhjdG1RihLqAzNkxzXYAD1ET6MPdQveAQDQUtXPGYc",
  "key22": "3qzKji6t8Tr9MBcphczrQEadYgjZ1R2bBxtKLFtR4RjNnwMVJhhVtaSqfu2v4SQobzi3DTtkrAuS4tZs68ZeA7GW",
  "key23": "5tyDwLZ4KZ1bZrUCJHsAdbceTHXm8zXEiDW68SQVQeVEhRM7xCfSdgkcoGbTyNUsMfd1SQTzGf4FgQTocMFEsMF7",
  "key24": "52ytoUEt98HZSGjW5Sv9Vj8zNdyk6iApPsoboD8rVwjY3LMw29oHs1LHbTyG43HS2fLfdSU42YgxafmBNZxUzAPK",
  "key25": "4qZER3rj1Y71njezNX7fUa34WqSMxrJVQsjwjTT8BLNxnEWZHBFiXAbqDSs7XRbMp66goRCDG5aAk4dAnhFwhujb",
  "key26": "5M6kz9C5RcFsrv6cDKn1qcY8WTFwLKF3MbSiC4Yo5XUFT6gYhJdu7k6nSnqCWX1kxKtKnMedTkrpScP4qKjeJpzQ",
  "key27": "58BXhkAF7PHhjvV7TVnBf8SjSu3n52EtGCihWEjY1g78U6UjGApYFWmU3xCDP8w1XEi9rpAoCdiKoHbBH7LNZ6Es",
  "key28": "5yeCzUpPKQcRHY6fhSrJXE6vJawgf27Uzxhq9TpbS2NkY3R75Ckn4y4j9Mqy2SevvvV4ZcjLpi5RV6oyx8SiSryN",
  "key29": "4aP3f7297Dad6KxgGe1dhFoH7w3bRMcQDwuU7MHSDkaBwrvf9nxpPpesfY21wZnYPUjjXVdMRTUBGbxZNz7rejyx",
  "key30": "YUZHKfaDvgiGnZ6SrV1K4anJhQbedeL3R4BQC35SRzvbjYycieWEiCunGfdDbM8bqmFgqoL1FoZyHBMVvYooysk",
  "key31": "46hgaC1bNn9oDJCGXZNXid2esS6BcFgxQT76S3QjgmRGKkTEt3J9ikrrWUEZC32ttwf84RPo2UVuqRj4MPVexSY7",
  "key32": "4cSWPqcyKPdDQmDuCUCjdBGDChMuwrxLd6KijGbhpTiDNq2Za6Ugr6QrGE2ikbKemfaRptHRewgBuZ2sWBYHa1d2",
  "key33": "39Tsqddtq93DnKRZYPRSrH9r328w43bEUbvbaCseYmvoJn22YV955dv89dJJPcUdwSyX1VP4uC6B8yGM67CYNtaD",
  "key34": "493nFkrVudCpTsrZof3sBBy5yLbEHYsB4wH5hwRyykkru597nvopBszpCSN9VEuLpdnN1X7XsAPTD4LFJXV8NnLo",
  "key35": "J6vXKQBtMp47S5pMNRRz4v8Ti5L9NK3Vs9rh76H8fnox8yRHEpwWnXnedVg6K4fcsgbnowuCUZbWLYdzzjWABsw",
  "key36": "4kQvoVn4M1V8qFS38ikyNikUfY8QSTKyyexURz3CgsVe2ESwsD3sxEGFtDQwEf281Vqp5e7DNyYoi5BMNuuabzf4",
  "key37": "qMyRDNvoCDPZZuJfitxNTW9JCpxibP5KepZYZqzyvEATEWeMkpcEgYqmGgioDgFakRMtRUiYHE6ehayKW8dsqg6",
  "key38": "62THEZJLdufauoPUjtLrE4StrHcKHfzbZhXxvSbMFENpmmAUWJogojGTzwguZnsF3eeBEF7HxvNHfvKYDN3641Dy"
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
