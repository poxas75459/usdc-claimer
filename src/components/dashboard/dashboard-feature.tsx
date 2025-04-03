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
    "7FmZfXSM5j7tGrwBaM4wYTSvcEFiPtg4cA6aVEw5JNgr1VFqEq8u3wz2STo4ki1f4W11CKbNwb1BDK3Ax3GHvKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22TUrVByq13gTeDq1mKxp3366UY15AkDV6n6WD3epWNzZrGBN5Sqf2Z9F5FsJjzprpL2WDvnG1mQXRT2kfXydruk",
  "key1": "3Mi1fN9zm36GuZX9TVqJm1eVB26LqrpegxfxXQDM4JguDsJvWVWG1sVuk94PeY7txXRNLTJxijziNAt48sNvnrtY",
  "key2": "v8WcoxzhKhErx665cgvcqMkiQB85AKU43n5besoC2pkwtwJ7M26V19C99e7NUnAJZeipx8hic34ZDCrLCGrspT1",
  "key3": "aDqemA71DKdMLdi8SH88hRxGXnpvjYvF435fpAD963ebViB66MjZnXWJVJCQLzSEgTCSuY76S2ztjANbxkHMAaz",
  "key4": "pRdU7twCYLxG2dA5zoL1SY1HBRgz97ziVYsrotHhiKXodg1TbJYpLZ3WkGryY2SMmrNSF2Y34Mpwbo742DbLzzg",
  "key5": "c7fZ4AcHVVkY7iDAot5xitQHpzguno9txwuXb33f6gYyMcRQJSWDks4Ka2xBgUaZPVbASPW5U1XenTfT1yRet2W",
  "key6": "stNF5aqtATcnxWZ2Qm16PF4jP5ymVBEagSLF1fxyt9qFb6YP15sU5RJicFgr3iSmTiJ6cb3yF4CgmYZMuwJPdjH",
  "key7": "33kJKHXAGo9ze55n6e7iveKgrF41cSFRWVNuWRCXrowTsCN4c83YLN7CuVsfT6VetRxoFXnGtV7J6bnyAKqJ3tVP",
  "key8": "FeQBoi35XbG3mvga5RkztUPAjMPqKuUWVWwBUgyDNPgTfQ7MgGizpe7kCvVR4KW5JwVAPEMv2MZNiYzjkmxkR4K",
  "key9": "JtJFFtPt3duzLnqaYRzJWGyDzrLjWetGMZRsxPeueF5BcfzkDYS3nnPk7kQoq6WjRmF6JAzPubYm5GTJutxiGK9",
  "key10": "4Y86FMjTQLkuPWxKfjFhdoVBSQKsERjkXd2Wnd6mpaQVwMPuFEBeX9hgk6TdefwtKraDe7yGr1LmgfAVFieAsZHD",
  "key11": "4kdMV2wzwgc9efM6GAzDotQkudqnq13jm6PQR2sJ4gFR2HWBYYJNbCjmod6FUYbdjo7fYWY6wicoH5K5XR1dRvTQ",
  "key12": "3WzkCcV3wDLSZp2wqkNDaFgvpaPaom4S5LHrKA4of5o5dJXUi9ZjcrpVSeknoRh4ZpSJivf4vQwC1WPyM7dpnaiN",
  "key13": "2gdFfyTUVeroc7qCGiXuq2qj5grZp2nGyciznVazze9DbN9EjASpzujaPaijV2ibFKeHsycU6EzAf6ThG36uyr4P",
  "key14": "2atT7E9hLygN619RjmHLNxHzbM7De8WGr7aNKz9GinuSUHXq6kdverC6frQzQmLpD9okpKuS9iiH9LTiU8C8unJn",
  "key15": "5XKXPEatUUy54kpVyaA2wUff39Us4CMzNXj64cC86aNEL6xPVe78v12C4CstvvsPi4qDZLi5pUGoizAPaX8dDQRZ",
  "key16": "5qqkBXiwfgrMs3CXER1LEepT8ieqmZgoXkT3JDgq6xSKFNirTJTQDWhbZUN2myFvpQDshSNAG8g6HPWsPT2f7Fgo",
  "key17": "5Sf68d1oW9onwg9nB4VTFvn9e5of1c8Gh2fJuezVdjVMENUkX8scY3T8cUks5bpSCNCC7HBeTgsRLFBGp4wfXUbY",
  "key18": "4PMzZqqqPgUWT23aLWuXufraTyFoVpeEHXgDJp19rJucHnEw9S3iqYxaMVURS3m32PxLYgVeYb9NKpEGtTpsD6iR",
  "key19": "3d2TpqC9smMCaV7cDaDPdTVtgivMdxuB6xnkvrTEL4hfF5ksBEEzDsxeeyx3TnkjhzYFVafcNw1YNDgXXHEf9fMB",
  "key20": "sXEzURVXSzJWuX7U8ftevHbL7cyrMftMMaCFAKZu83jxTSFupG3RwmNNix2rFiUcuirj1WDY2JCm1wDPVQihJuh",
  "key21": "4j2pQEBA6XLYcrTjw29pLcsugHT2wmFkS4ARR8JfY3VbUDYxQutVTpy92ufmYV29kjfyzULHZpLxc1UCio2qF658",
  "key22": "4GBVWtrHpKFXoyRUyTCNsqs7JDFVTWJnMRvPPQdwKr68eVGxzKXz2HNuHtFgHWDUZSjd8LLvUsX3mEPWYqpLAUBN",
  "key23": "4T2dVekAzT4E3AxaM5aMWc2dMRiqZovka9GGxtxS1v1kYmH5ZQRXwCiTotDaH3nzvRFsWTE4UaCbvGhG1G4DJwFt",
  "key24": "363CmgLmnLxuv5qtwWP9QRMreJLYpabcTEjBPrtGP3szeNf2WZMt4BfMMZiUPnCmBwvZMSTjth6xBH49gjMZyrPn",
  "key25": "61CFVshpfgyUJcuKCehjNaPRNHjSbHvMtRaRBa5vzGUKFKMb9Gc3MC9xEJmHgsCeWe47g2vqMeewyqyYnJ7ie2nd",
  "key26": "5wCjqw9xKctsLUJNRL2dGjFtYpqSFJ5tWgpym3jrEVtUbpGx6R9gAwmwz7vaHuNtJVm6UjPbuLjZgS5P9LBFvMLD",
  "key27": "2Qdo5v6BUxkueUzke8LF4B7AMb6wdEmdRQ1xujG8C2Eg7QBk7E2tV8SDjXjgmhPxjBgYz5u5Bp1C6F3CsYCANsBZ",
  "key28": "2E4yBRcDgoeGaDqSkP1qXY56TLb8cbsijViNCJdE7VmcGShfJXn3uT2MJ9ejoaU1y9BXns2eTh9oJQgZY6KFSDJv",
  "key29": "57DAPYVqtdsDxaVpPKQtvLrCkSRJFY5RohYjTRiWx9re7Gyxyg21HHoEitLFYbKPNWSYPcVWVJuEzWbpiScF5Psg",
  "key30": "4k2FuSP6nfrPeh4D88cT7whUoPNzhBmC3ZYQ1GC7H1Rqea1L5RebjuJNEPbR8qVo97XY7uSejTSQQhdd3uWcScoS",
  "key31": "2s1kvMqJLvFuAF7s3zymMFvsph1kUapjiZjv5GhAcyQZbhtG4Dj4LpSEebQvkBnXEy3ox1gtsGg5hJxx41QxKhvt",
  "key32": "3Z9wgEYisU1CyftGFM1oqkRAfKALdcArj1YtRXUV8rduMZnpFcEuH84HEAJiRzfoedoSRHzvdTAf4tXrUbVUSBJJ",
  "key33": "63nEfaps6DHNLFijgpy9PgiqUEQTd5yzmKAwfYm32nu1sjEGEqnS9m8yoYpMGYruv6xhLazwNT7BQ1Daf6rTYpRM",
  "key34": "5HzmroxWbyVpQbbEJDsPFRu2ofMr2hxyXJTk8ypE76ABcWH6mPU4EUY6GJ6YKgmyRAveso8dJyf1QL765uVA3neR",
  "key35": "2R3Zj5sZUYxTfymDMKy5S57cF9D2d6LiqrWQifgNKuXCnJqDovcYgtTTWvzcLRhjEhM1kCGd2ZzjY5ZRo7BywnCL",
  "key36": "2vSx7Cp6AF48ysqHiwHZ2mW63A1S6AXXWgJLYLvMF3VAAwLZyt8DbmbQM6aCpB198tTo1SS2Bg3Yr8szCtcqjGnd",
  "key37": "3h9BuqrDFqymVrHRutzqsnZ1nVhv94tnhsD5P4EyL3FyF38Y77c8xeYyUhxMS6iBijebQCpBaXLkKDebcvLxcwiU",
  "key38": "2KfVf4XE54qJUUEE8VM1pXyoejcDDjpBr9nhspGtAV2ykLBNUfzpZSYLU8J94Ltmuun4njK4grn5jmchSUz9E6vE",
  "key39": "122n7ssZB4xtLcyYSAAowiQ59AZankZShA1iftKmcnkAKdF9n9drt76No8cYH3v23yLVwU4tu1dwUPeNSbMBtwAc",
  "key40": "3ydcw3QERLM5e7ut5mPBRz8R7xiegRpZkViK7tEormKHjnnVZyuSJJn8fUzfbuffquSpgLudcekqG18EYeWHUpqf",
  "key41": "4RCWEQn6FAQgn6aYgzsoidXTdWMz6om1wgX15hhzqdySXdiuY3jNgVXXn2YdspehFPTdBPwXcqnB21z6FKscUve5",
  "key42": "5fHdYBnEeir9CHVKLEPZ416SWVKNTH3FdCE3qzfpLStMTJLiefRFqHZNkREGVTZnH5WoBmfhfz3VKJVkG1e4gwkX",
  "key43": "tnnkFC3gdVM1Ac9KgzAacdAEmhUiCtNjMuayuRdxZFP7jREvsN5SU4UiRbsm3hRrrBzX6eNTbPuxkkvdCJrKLwi",
  "key44": "3b3Mfzvq6GKrCYSkk8qvrM5QJQAF2H5fkbzSjQG9UJtgmdJF3vSg5Lh837Vb4y5m4bGYYSQ2utq3Gf4dJdeQqUXo",
  "key45": "5sKbTgzqd4YovCrB2gDt3YrdyRGdRdhSLoPVLBEakArRw9kBBTjkAupQgUFCJ5Yp46CJFuGADENaThJLvccQvDRs"
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
