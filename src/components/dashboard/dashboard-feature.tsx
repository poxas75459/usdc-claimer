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
    "556AD3oMEM2Bebqr1f7C3vLhMLZPP28jpXPHL2QPyKk37fVxFH5ryz3A88kbuwHcCBCrLh4s4nTG3yw1LMedf9oD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27VZmpyESHHdKcEAB3y1rW8q7YqYF3p1tXyi4dD347G1mPuewroJsLSADdv3vke12do5d2krBYonCwHTeAcLaDP5",
  "key1": "4mU7TDN5bSEsSqB8CE8C6LCbAwwfwjeRFNwixxL51houwz8ic7enwdVtMggN1nWVC6T1FUwRQ5Fzt2mvC8pm58dX",
  "key2": "3wwnQoPKiBwGSCMdGxGjcMUzXHkJ1UkzgX7ypzyBCKC9MQAPKDL9Z5Rxaek9if8wzLNxQ5zUaXab7gRvSGrxzbYK",
  "key3": "sbzSZ2rPZchpFsir6ZcjWsitcUfFtmjXzrYM6JVWXwdyPZFevh9bFRCZ4tsd28k7yZPnBbeidCDtXuLZEMFmNAc",
  "key4": "5rAdZdB3R6wqLmmVV1dkECCfV4eACMZs63W3ApPt4N93aLaSDRZiudQ8sWq6fjnAMgAVrHNF7otTutNAGmfynWnB",
  "key5": "58a28N8QozrSnCmgJqKEEbdPpB5u4bF6E6fDHrpNQWGYuZ95Lp8fRsH3BmYFKeRNfWYDKZNXtidRDSpQYNCoBABv",
  "key6": "5M3sSKBXdKMy6164v1CjVWypHsViBemkHdGkHWnWHMNwLz4mh3rmuDsZqqSFL6WRNmdWEQcM8nzbiJ84rxLRmPdd",
  "key7": "58YgTdV3AWzafCrnjtT9w5Kf2x4tFkYvdA2eYtx5XVjg9Ns2PMtid5hMhfVFaFsxcmDuzxzgnYtPauAops8F3pFw",
  "key8": "41ZMK9yX1cyi35XtLfMMAmqHEG8harn5JW9XaSiC7G63Fi7KfLezVkPRE2xjCc3YFtLc5xuMFT5jUH7jZ7nhqeV3",
  "key9": "2vudGDUbgEBuwNNuda2R2i7U4MGjXViqaZP4xR2jQjGzYj1XDP178Zafp7KPNSzhzm6qFCatfZoL7aPYwgmffD6D",
  "key10": "3UbQSqvUtYyGbmjYpuwgfp8oZTuZioRNfjCNzrSEFDon31m7V7CNugrcH5m3KjpqMzL3VeMA9tdRJfjSutAzQdJy",
  "key11": "5ktDuuxuPVQjDVkBZYqyQNtDzeMXaK4cFYJAPiSvPJ6cKnAWE4QJCANyvcJQYChUPTEKUKNHpTAkwyW88GjTWUFQ",
  "key12": "udy5nsvfyFYc162SKWnA9n65sECyifZwYkvHVKPT4gLq6pLsoM4i9gn59KqWrABTUf42xzVUR3hrTnLFnUhWELU",
  "key13": "2aBdkpASeEsBwpCFLkPtWPQXUpZnivC5UbXGMVaYtwpGssuQNsSenXCUbPi7Tmi5KUipBJTAg4mmaUGXWADGqzHD",
  "key14": "4YDYNYLKnML7DwfScRsZWDs1LXLpzGx5gTJQfByaaDEG1byGv5Wtz2WKLD8Vt7BgXKUxpP42tWSzY58GKs7Ci3YX",
  "key15": "3hLqmyVzWazTGCodZTYuhxPLZ8kTT9xRGDhT2aKS92Kp5SvjRPig1LPPGZS3jmogB5szbYpiE1Gp94EFiYEGRyqo",
  "key16": "5gDcfKSj9nfMFSWjP2ruqH7SiA3t2iiqvsVX5oTtzBm8qQz18959S8uUvqrjTntq9isVm75YGcazKcXpXbBKrmCB",
  "key17": "2bmnUdoggKsgo1cPKmgGok9SdCE3SzZg4oiJoZx1exi9GNnhWX1BdqmGczJnrJKsxLLdBDoJAoe79455Kzh2bskS",
  "key18": "2kEJmHyPa8SzXb7yc4Q7yKW8yUJy2YtY4WR1roT3nvbs78echK8VgQ4fhJF3tscwidTcUb8zNfHu8vFKYbdjvfWQ",
  "key19": "55T5zbHe74Ht9s8jQZ4o4Gi45ExrWxih23ycMGSBqP4gnphvqah5zu2HmD1XUGU46xys7TDTPUPfh64QqYkPdvds",
  "key20": "5WVXTBs3zoEZzFfCzeFxYhVKYfxDZn2Gqzy5fNBKvs1ngiFLLeZHGnYCg8tXANPFH7YgMZxy7iAMYZBdmJBiuRqQ",
  "key21": "3vcutqTrCaLBuJ7NpnU8iCDVspBzQZa5zMwbiMbZxs2pPMit6QTJht15AZUxRMfuYfBKdE6pihYB8dRKEp1DCd3R",
  "key22": "2mY8PywFbeJsoSnPxyeFwaYSTALd8tvMZdkCfQbXp9BADsxUdABeh8GXfm9sTbLLkT8cMFs5kTxF5yhwWh31TenP",
  "key23": "22S6oG9yBnDRijcmWEKX86xasJAJemhoKpURuCYxys9isTwsHcGHJkjmezmEj3nnz1BJD6B9pfB7SjfApri8xtwr",
  "key24": "2btGkFy88cZe2GncknK9dZAxwuW3HtFeV4fWzHtp8trxLedhjujjU4dimcYDBpeD483muvRBcJPBLrHSKvRCF9cn",
  "key25": "BD6nvLzS3GjDnWfWk4wFFP7aWuX9yQsT5MRVCrwJN1s1QUaiKwKHRGZQ1W6qGN5Jr4GCkCJunGbsXCD462c9D2S",
  "key26": "2zXvf4YfQ9Sip4o7iigCoiJHTEVFQS7auTuRYycaUwmcbMXRP47BkdJK1fu9N4xq5Br8jwMhuH4wgYSNtGSo49Ez",
  "key27": "47VfwVLecLUQSFHG4msfYUBDxHPSV5Ypftk4LwaPggm2Q7QSyHgEvaUJG3QrMXLKRoEa6EVtTXodSbgGG3TdvdxM",
  "key28": "2zMreDVbVVexMDrxbx19G6fJFstij4wWvzeHcTDkup8SCyzYBTW25kRzaYzZpEc74Uk81ndvRmQi8XPMKtSzPFDw",
  "key29": "VXzW3CUhormft3AJeQBzf5eXSj6fSDsps6JF8rcjveyET75sC3YR1XKNx661XTYgYeKxDxvLuEUnq58xWQd5Ntf",
  "key30": "4TeJXAKMxZLFbZGmfr9gcoecZDg31YjDsfnroJiRDnF46NnSPkyu47xry8gP9akcmBwVdqCPC98nu9DLLaoqR7Zq",
  "key31": "4uHVJ2fVw85NyXr4xB8gRwDjmWboNXXj6N4qg9NwebpZYP2RwbF73Wx9zNLANDtJeDH8Lysi93ezGdbfkqL2vUFf",
  "key32": "7KxL1EAKuSsfnm6VEGGGCYcRt199rwEHjL6Vjs1utDcWXkn8PV7nsndsDvQ6ynKmh5c9V77JYdTxm6H7myU54HQ",
  "key33": "WWFdTP2svo5jLWz3NC4BifVentU8SqeD2zbXQibv6fvF4M9Gah7nKHrFTm3pZxme696t6jx7be7jsULX9VKrvkg",
  "key34": "4ZuavRPw5aeS1ycHDZW4znSai3oB4HimsNgzC62qnTJij1Z1ZHJW7JKV9oXuYNgYoWbjuhKKA3aUGxQ7o8uMzbrx",
  "key35": "3fjofcPoBGfC3vfctqz3KAy9cD5JFwnsoKAK6YRGTCTQwCouRnT8jYi9mYtfLa8RdS2qZY6LRwYB7DRJxLhUrzMG",
  "key36": "2pEQyUxZDWsujSvokHPG1vdqfJf6VsVpvqfQXwJS6MHeh2fcyatB4SPYLLBRUV17FubuN65dQVQTT6JTrAyvHCo5",
  "key37": "27TZ2fQ4xfKN4FMsiY8di6mdKsAn7jVnpYiQj827XMoTabGkq1c4wN4vBd1MM4XYaa6Pfzn6SbV8cifcha9CsDiy",
  "key38": "3G1N9srRfHLXdod4WkXsPUpPCthVeNGh6WnEbTVNM7gSSveWp5woTcxM8djNtRX5qVLtY6Q5hVx8fDN5wkL3SdSp",
  "key39": "EtoK89VVbw7xdCqemfrPtd4DuBkqi1fcBYm2YsH79phxtV2w2wYdkRcBUSkPVhop9Zv7raJCytjWFrF24cBQpvm",
  "key40": "5ELwRePFm1hZUdKPuCmCQRMK7nP8ak7qGJ2nJ4sZHXkyEJs9aFGjpNzAkvY99xehC9ZeP33eQ8fvVfgReKGyzHzZ",
  "key41": "A3fuwMvpQFjeCe4ZNJkYkFbGqruujCQEPgc2q6bEGGrT31dkiMYLnBDwgudiegAB2eC5cg6G8XUNrcohr2zrCpd",
  "key42": "3V59JD87cdrm6wezf5S5BJ5Q11pHRaVznu3MVLUWL2pEzbp8Csi2uEUky8JjEmQW48ZiddqCrhnVYXqDGsXBeath",
  "key43": "2gw4yx6du8JARhfcMRZdyn4GqQPdkDkpiaRC5i4PrwxNx3EVhgpJNWrFM5RZoZdHPdY3V4DWgFWtzbeWThxY8LF9",
  "key44": "eiNofzAxSFdivTcEU7aqzbVhg5qoTS43UZ3TzeP7km3AEJQEFFJH7WGSF5j4iPXnJsHzc7arkN3AGqQ65RYyd9b",
  "key45": "vEjqYy26MvmLrr17jAeTGJWWwdV4nWBWBjp7446f2R1PEYjJHGfLVbNpkTd9ei98wyxGPMUctYp1SfsVNveA2Zm",
  "key46": "iGU7gY5zTDKqBSshn1LqsirwhKm66NGtBc8ypbrZty4E4iMa1tfsLNw9acpSsqFj649yBpYnjkiF4YhtFRtVX8E",
  "key47": "3Hio3rskFaadF6y4K2oSS5mFsgYPPP6u3Wid6RWtSBN5yGYUscxB5Qn8QkzixnKEXWMutbszzQD4fbA1vCetYhBG"
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
