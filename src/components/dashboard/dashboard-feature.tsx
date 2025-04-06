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
    "5gV2kGZdFvqjozbjAqGYmnFCTK1URQB6gXacJnKWjavBcRfBGs2LaHHGyc89wUnN6NpR2yq6WexmRs159CSQE8UE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QwYzTbcEe1zPwVRJZcD9fhAgDHoWBTYyfEL371m3Hc6baS3VmxFpdbWcHhx6oPFprAzYqSKUE23o5qj8cynngxY",
  "key1": "2gMSetHneHu7H2jcV5zgXAEXW7eodDG7p8MWBHT9zjrxw7mnq4ATmmWRuwysQTmrugRPd7skvFXb8KNEDKhdxVsa",
  "key2": "7cfvTHEZBQ7d6m7dKRKaaCFcBFH3VhB5ro8gB4Z1SCTaeQkXAXbY32JweV813wLhk4rxhZ7Rc2J7Kc4bwDuswLa",
  "key3": "669kZR6PEREcR6w5518DVpAAF89VLEE23zfmTrexkLmDHw8XetGCDFC9Dn2SYuVNW2k4mH51eX11ggGvQe2rD11n",
  "key4": "3kic67YpYU2UJ7o7PW7cTtbcoizTyZtaToBiyAgyAreCifntjLnLdPUp7QittC6H5XxY6ejTN1VCHS3yXEV9wc9E",
  "key5": "4zNYShXYSHJZte7QB4v1HEWPatJS466k7q44gkpaMvBm7gBytGedntFz4ALHPKhCUjcVBQBVoUaR6NisJ84EMZ8",
  "key6": "24CiLyocaw2ruoUZwGss8LDNzCKbp6ioWwBfzAbjpeMuoAi1nG6gYs24ksDMwvhkCjVqSQP9hAvns1rNR3DHjY5U",
  "key7": "2EFS6fpxtc7CRchZQxyz384uvLWSqg2DjjJRU2jYCQrkThd1UisYvxBMPu4XdEjdmi7xjxJY41pTnHURRJX1u9A8",
  "key8": "2zLqnpGCBwg9sj9GeL8cM4bm4Fviwb4CSxCDP86MuJcbPBrkPjZ4FWLaRtHW6nYk5UuyHdTyT3B1tDj9fhaK6xdX",
  "key9": "4QAuPGcmYME3BAKeTff38ouThsb8q83wAx2Tz3CnFLBqGDJENLnLSAN8TYa7PPN4myq64Ui61ZwkHSMzY88rqAkG",
  "key10": "66BefSamSVGCtpkgQTj1eoqXa5RU9U64jZEYmYaysMPRWQw4gAK8fdLUFcDkkD6gwEMqHXYErHDX3cyXpWhAkiMi",
  "key11": "38ob7EPsXFws9Tw6cMu1HTNYsqSqL3ndwdUGxKv1xViWNXzXRPS8EsraDPxaN9ndn7V1hcGAnPhGssesHSTkixCE",
  "key12": "TAvWLUyS7tKN45MknYwpinYbAYVeuX19kPmWmNv6KbE3rPJa3xjUh1TUkd3BpX2uEavGVjc6V5mnZ3Mvtp8mun5",
  "key13": "4FToaG5kE1uTLpy1ctXP8JcPdHdMMSGBLjQ1bN8xqYtEyEVpqLevCdXX3BnHw8tboreDGu9ZscDPQth8oZ8tmHvs",
  "key14": "ewsLwu3Xxk7jP2x6bGVm2jKHZGXcCshCyQeLVqU4qydJ6x3VrZ5UWPTarS2rZ4tjhZ5xEyP5jYW7ta5VeVcvkmu",
  "key15": "4cEqvb5YESXQdtfr2ypfsJw9ngy9zftKrexwcDuQTdgF7TCE81cdDdERK1pd6vGTDD5rMgwLsTmQgAwDGM3F7KVV",
  "key16": "4rn12UeHmZEFkLYw33BBZTzK7zFbfhzLi4xcUNnDHdf9wTpHNr7Y3PVuqbBUuHnmU3M5k5uTy2pVmLQXyu9UzkVU",
  "key17": "hTR16pStpYLbf2Jreq3i9vbYgFE6RJtjYnAu6F2u96Ur7WtJNrXgqdpxz7sBbYEwG49q2FoD4evRVH7wrRuzZiR",
  "key18": "2VpySSfmZsjNdLxwVDdVEEF5K6EY6pMueZ1i29TfWFsmta9AgGRkLS8G5E2wxoGH6KXVLP3D189GFbcVBQZuXv9G",
  "key19": "2mZNZVvjRPkCxRpea6xgPq6ngg4eMuQG9BmwNwpm9nDx453R6t7mC9ydYs9CXFfGrPGtpES3XsyaV4Gcxj3yG4HT",
  "key20": "5MoMcd3KMjEvcGSgxgKTKTp6gQTKHNUnmp9gKg6qHjqLKfgZoXh1Xyw3JNFrPpeSBMobFUupsPvBegoEqW2GCLx8",
  "key21": "a9iTdHkVBbhSxxdd4PjU6ZE8GTpppXESajMr1tvaVyHcGUZGou1uNqwKViCBcAs5rvH4no4NN6K1EhK8zYcy7RC",
  "key22": "5VAGhw1p57fw7FeioTa44pQwFLbUhH3hr2FN44tiLjVDAGNw6y9fL7NhTWgaKbMBZmCJf4VGKmEdo4WZdirNdfva",
  "key23": "5wMiNC5rjXHy7YwsSkTQ7gRjmSsKJ8JMZypDbqXqT1BGAax9JPHbVYyWvDDCua7jpRhiGFmTxJXrS5g8yGqoLkZz",
  "key24": "59eQ35xK7Yms4Z2rtvkC5aaJ93aCuWj3DRdMRoLEqfmkZG9EJ3XUSUpbBtVmk3DKPH9Hen5UxdFwbPzyhoJ76CBj",
  "key25": "5uazTK34tgzZmsPc7KCy62DdVdztVLkjLWBeh2mG96K9TZEAyZQXztqperqURutBk1wuM91ArokjFhy8UYdWnGW5",
  "key26": "hjh6E5BAKvz5AZ43PffABajtTEhvKaiaZ3bSzVpjwbncwnxXpDqX4tZDkSkTXkjfQWaVo8Gcqg2qE6W8LoRCzdf",
  "key27": "TSq7Yjk86Ri29kw8WpNT8VZJXHP9pDYsJ7C6LuhcVhxcZ8phYbGkLxLP9BszTspHS2pCEDXxXnA5s8dT4CP8BqS",
  "key28": "3fWbBfyUueLSfdVEDTNHZvNwcQChVqsaeeYKpacSJBT9r9127pVNXxeim4Hz9CXhMe6bEK17jU38yUSbrjDoZMCG",
  "key29": "4YcKD48sjJEqM3ZRSQsmrgziAG7RUwzk54UCKyEUSZzhuC6wSSV8C2Z2CUE3tgk4NzyU4LRS9X1ELDbfZ3qPgLse",
  "key30": "35h1hjMLK35zytJFguKr216HhvoLfuBfWpjCWFG1Ceos9J7XRcTLNXhccfUf2KVfVi9qEhKdgqTNyHqVVuuW8E7L",
  "key31": "2eRNx74jLj4FvD7pWqm32nGpytcCofHzUwwP775eeNQYXCsxm28kF2vF9XaL8J2vhmRtFaibrsvqgb7tTxtqwkDi",
  "key32": "Uj1HrGJFUTPoQCMnYiKBt6H2uos7jsA8Vpy4Xz5x5NiiNSu7HMkmLaGrniehvmUQrvWnyytCHbnmNvoNJ4wpz2w",
  "key33": "56vfpeqX3Vv9kc5qSgHKtk7fwv8RGisJy4cFFVdX9ZmkyhMCL7GAbK4omBtzHY3PxjiWEzPLQe21NFubBTnxibDk",
  "key34": "2q8dn7uzLhaKzKuUyPa39J87DxRKLSUYseePCcjWzytgmNYyiHSbrCKPRrM2eT6QLeXYMRdEQf8TvPeN5ZVCJHVY",
  "key35": "ZvWR4SH33EiDF5CbQXhv6xhAwgQcMajQF72hCWdvKNRttGLzbWms3qHxr81p2oRXZcZNHLceqBt5dxfAYrrFZsB",
  "key36": "E9z5QXNfGeTHncQ9epCkim7yrNHzft52GWPVX5mSVWngFP7doHyzJuKLasQQVEGg7kSMUC9VcZAkr6vkjpYz1H1",
  "key37": "58FdsrKfWHMsyQAmgigUrBbbun3Tq3Eh8TEEw8NriHhEC1WLb7Qj6WxHzNrZ86VvSQTvaxaG7JSq7pDetFKHcuTA",
  "key38": "2cZrUhGHmsJPxvL39qJXJXRuyXSpDyw9rdtnbno9nTG8KwTT6d1dtBddJnvGMVpkUjiZUD6Nsz8sfirk2GX8QQYZ",
  "key39": "2t33HnGCEZSxCw9aKmKTRjr7New4gUTTo2YrQHr3LNqMWD9LB8ufLU5xM9sKfxpY7YkXB5RnW13xubtZ4sBTyj5B",
  "key40": "VA9NYCsgK6pQUTRUB14zUPPfSxeUtz2WC8BjuLxY2pjSTZ8SMVZ3G2mg7RxoRpuXmR2hgfW59z8Kybwj8UtZas6",
  "key41": "62Z1kqrYVcmMat9Lb2RXPua39KN3XPLPGLqwht387o8hohjpHyPR1xF9D4iRUCsHfnHAVz4YCaCpYCsbm2vc1xG4",
  "key42": "5gfkt3Au7uEF9P6u6wGuicZkqix4AC9SNukyzuWCse3VugB57P1FzJ352gjEAjvwQpfdx2fivzvML4Ded51BH5FC",
  "key43": "58RF3EY82EokSm7AEzd4TKkDs93yaGCCtjeJAyjPgfosb6QbnXVnp1GHiC6SKZhDuJxKjMpsDESGPRX9fBiNDu4f",
  "key44": "5viemXHA4sqdFHskuLCyQU6FtjcPVHXFg9tgwz5rtWAcsmYiYGWxwgQbvZZQjCD21mYeiPYUmKchcQTECerufUYA",
  "key45": "3PQXePkvby4wEWzni5kdw9hU2bzjdN4wx63isfnEWVjLf9WRCZSKBr7JaTtyYRq6hSk5YwGAJhzyth9oZwCu994M"
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
