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
    "2C4in18sdBiMzesGQf7mX6iixLqU8UHfeH9GC18hGSn1Gt8ZgzzhkRFh4sHVWWfwz4sDtFPHkK5bnfTZwSbE5ihX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oKH4pveyNoztx82LYASVJ78Gm4D1eCbd1FRSLuvCJbqT5sgqyqUoUSsxLrBr7sDyGs8XLaJTbej9iX8z4udbrcu",
  "key1": "24p53XegY5a7yq5hQc8nFGbuqEHE1d3yNaMgjBGayfEwbZa4RFUyVED3LrTdsZNqGVeoghCK9DhY53WG5MX4pSef",
  "key2": "oXMzAw95wk1jAsBhw6jff7kioSo6pZrGKNV1igVPmUPCanR2aqQiAh4oGyT6rLkfG3DqP31yPxZvQHfetWXRG6J",
  "key3": "36Qyu1gNjM2qQUkAetntNmY3ubbcKW49pfTk2chG7cXK7CgkhLQ3vYBuyQKaG52pLMbURoPa7qzsRTCBWpe78KVw",
  "key4": "CrK64chHGJVKQwn4skhf2jNM1QzDCx5staQ1RPEs79VL5bNxUYwg6itACgZnfTJ1jgYKrLRm8hx6sAwrVZhXMXo",
  "key5": "3caAeqXLwRNuWUH1iDDZfuGuEmWzq1heUvex35JmyZDAX4yi2yYqtbEdfmkuDyTaJAZpU1Bp4YF1Y2bHhWY4EzE7",
  "key6": "5XEMAVY14d6p6YBtg4rvpTMD9KTc8YgrQVtGTx9qrA3x64PAJP1yLxmkTzdh7yQQv4SM1xoXh2xk6YrRXjca3YhR",
  "key7": "4GN4ExJiknuJj6RzFeK3xYxmEqDB5J4feLJJvGVm1379MJEKJwyv3bo9tWwWymtnMdJrwyBHfG71cCiKnLydodVX",
  "key8": "5xcLSy2CgSdAEUJyDAAxZuE1u3AGvi2KasZEQebypjXyDx3UZ6mRZrqnN5hwTTrnP949XDnBYZ5gyC3d4ypga6Zb",
  "key9": "3te2591ytr73mUWAAFtG2Lp9yhq3nkPk1RmmFXtsYoUcLGJMpcYdFXE5B5RxBs4ggvRBDfxRUbXfeTDSBzTFj77a",
  "key10": "2uCyGSRGcCUGTurcLBSKULXMbamdrVZ5C7S35X6myKxiYye6wZFUajtR9WT59kpJWHAzTCCQz9FKUjkiFmKqe548",
  "key11": "21AVPJHPUsxZ6BPMsqE2hfmoG7kjRmEWQUh7EnSE5UxdJ9Eb8aiKWGEKdfhP33S8cf5AuC1oaXgDcjhPjEWdYYh7",
  "key12": "2bWoBFWuSL22rnT6BpFJHZm6XAXP3eTaLgPQjZY6beZ9j9zf759YvaiVyz26bSUvgYiRsFCSt1wTaVmTyqW2un3g",
  "key13": "3uCtibDcax5ZQqF81dGYYy2gbysvvp7X3PNLNVkokmyunaTdzpLZXXGkt7FgpB4GnJbPBeq1G3TNEk61CTEtqoJz",
  "key14": "34op7SPfvMAiKKpotWK9ZpRWqxEZYoRFxfw4QYSRPgwxDbqbJsQ3aFSSphgySWdEqFgf5H5aii5MMYHpSVDKePbx",
  "key15": "27yhbnfGNzoNsvuhwJuT9mbPG1mhpri77DEn6NSscjnAmMNzF1htWvGhA8QpFXkfn942xBTxKJ9Zn1UiJVUZnxpn",
  "key16": "44hkMkPc1RbaQZcMeQoz11C8tcd31r4VT4tTujfobBSv83PcvNoWxFSUdfzM2eG1KZ6zDQqdA8jWGG8rMWQRhsmj",
  "key17": "BBs2T8oWptejL4KPQUNguRM7H4EiSkzqocFLooC6rL3o8QrZcDCoGyiek5pVypD1bBRDz8VeN4D5ABuQVbvrx1K",
  "key18": "5MJ11P3umR8TqD5EHUerCrKBGtpUt3oAPr24Mcsdmi3AtXq7UghmZMaSHoG3j4gkjFfE2zgL5tn4wJ5Y75BpdwSN",
  "key19": "41WsHMFVfPVFJ1AAwVyJSkbJ7BVVVo9dWy9NMrPxuNMaU9FRjZ25CCZ8AdSNSEfcAjNN56kwLXgD46KYkhjuZj1u",
  "key20": "2CE4EdtQzCxXM7Jpnv1nHZGr3NKetMYsHEinfCP6ZW9oW1Sde1mYcbbggopTGHs2qYDS35tC7BaGMGG2ZE5U4a9g",
  "key21": "3kEYHCxZgFGJCtuLqyMPfKrarZGFjs9B9agwLC1guN1CwKtxzEGXvPqfzfidJaFrMEKJe3XSNfBtbjVVMpDermCG",
  "key22": "2LkQ2b5Tjj7AGRySRthnsFMCa8vMqe623sR7Uo3Ve8jDr6YNh1Pnhj3sx6TU1JwLKpxhx1A2JAWzkKbSpyrvCD7G",
  "key23": "VPWCVW3EY8nd937d7f6q4UDVzLoRkcD4uDw4iB1ZsTMRkieEyYxhmzxFwGaT84S9KJdDuJYLztVjQSAV77bePGs",
  "key24": "4umJ81dkWMNvHtePH576yskxNUVT4eX7MoWoaLA2NHXd7DGew6HEXMUhhHQjxp5QBfhvbR9nWSyc35gkzy63MSjK",
  "key25": "3gfBvvu21xHW57UBvn5ALAf9yV4htZZY1zm6vWamZVnGZAVeATV8z3CU491zpHNKgiYR8xwGLKYvgRrHjp5mnjNQ",
  "key26": "2WzLUCen2VSg6E3U28hSrpLgoMyDRpiR5Z7oXtrnAuGRdhL2LtbtkPcKRKYre8UpFWPhf2fLfphhng6G5vfqXykT",
  "key27": "2t6sswdXbcT3k1UqnK1sLFRGBXnRNssYaacJd5eCQwb2jLqRooP9Fn7To8kNnuccUYeDqjfWwsSHbntEobTbH74R",
  "key28": "35NdMYNkRGgyfcKybLnD2dcQ5AbHfhvqLXdNhcAuiQJGdLcFTvH8yysRd8YZA8SpvC62djFpJtJSqwwWmw2caZxo",
  "key29": "3xrT7ADmbuvYcZnsU2J7tG7vPDky5t9bkcgC22gtZ8bcupmC8tA951b1z6cfmMC6ZnGRPWr1jre7MCSANZ5qtKmP",
  "key30": "36dCTq6MmPAqJyDiosmAKj6NbKU3vgjo82dewmhNVt4w5J5NUYV9G4aEr3UYoS73HNbXDHECdEKgG3keFaL8NHFY",
  "key31": "3osvbrCqHLcR3aN5DpxEsmF2tJMo3uQvhpGJzBKp77fhgEGDoVJtbKJjPHWKBPp8DLaSKxkd1zz3F2JhfkN7ncFU",
  "key32": "37nBzSsRQ4KXzoYLTHMaYPtaRiHdXYdD9LincNiMGyySqZ2VXKViKZ9pzpsjfYa1tYUQqNffzZBcQ18B93A4SFZy",
  "key33": "2VeyMaav6x6u4PNJ9VCa8szZYWPry6C3vhdw4dk4DGzYxBUtQMB5xM6CHDMKHtYCiApHVVXMPfjFLcoaSLYiJ661",
  "key34": "98FHKuWu4SRaLzbX7m62PmU3TebSp8g4GwRQJHcKTtpJV1pwyk9gDYSaoSTxDAE2hVt629QEajy4T5vtehznSZV",
  "key35": "4xysx91PMoTttGcuxBp8jmzaXQDvM5gebDsPkCk2jbV4vv5LVRSigZaQZk67LNJtXFYsGvrffzNYmdeNGkTjC9Ru"
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
