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
    "4S8uzDwic3QBExTASZ5y7poisyz6GnwUPxhoXnmfC5yp6y1D2mEGkXBKkFSiKVS8SYyQMh9D6BSDVjwtSJ5rpoAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23oaXvEoMXxmzRLiAjv85vtM42ZBsd7YjCybzn7T5qZ6WJkrX7XoLmX2jprJqL4s9iGUi4wWwkZUjstZ3sdepuVm",
  "key1": "5TBkbLemLH974XrsB7FcqYjkpaNaPuTumt6jMsFUScc9f494ZmwJ5Xnv7Rf6YEG37XJ4hHg5Qc2MaocmsWhpdGNV",
  "key2": "3rzDzyEr4nj5FYESRtRbBgbTCqgoZQkBM9YfvieTiQgHoEuwzU83rKbmwtKbzt37XqoDSKjPxjFcZ53F5W4bdHpZ",
  "key3": "4W4Hoe2bTZCFskDskHTsLgkBmvMaZvF5EL1QMPha5uWG2rHxgSQ5HRTcD7g4JhN3R8JBbMhC9WmFsmbVwp7NSCRe",
  "key4": "4ZhgLicJvL2MTKe9jcXDbjukWHwcMN1adb38j7c1aKtSQop3mKDHFrQu9m63Y4P41vVEbPGo923kFBPWHnmdLeUj",
  "key5": "NkPayZtmrM4gCKhjnY1wpfB22UG2YTTDAFRUamyQdipC4PwYAmL9uKhZyyc7DtAfcs1qNcQnwKH6yJaN3c6zN79",
  "key6": "569NcmmrgMgivHsc4cp1p2iu7jiLMabsehwoQ7ZrGEb9vMQxx35Z6TYZMMpsKB7934dZdDjzV7eFoWZma4Ly6pG",
  "key7": "324Zqg9rMFoQT38fKU4nepBcmaxaSGdb1ctYrztasSRjve131FTpckdPncwhej3jcmzta8D2To3tc1UJS6oyfM5",
  "key8": "26RFnhEQVZbKQLBBgrjrgfKQhX2mFczS5AYhaKVq2rnCjEfsbZxwmotPu4q57cakvTgDp9Hf4YLxTFsvynz8AGoS",
  "key9": "8phfYXHwMFZRJ7UiJoMdE2kZSn4ZY66iywSwLokdxANPVWxHg1ht2AekMVwBgLRGy5qAsAqm7MPWUr9vPTz3twg",
  "key10": "2BYeHWksYePmwgX1pfFUm397ot9eXBaDHiWJTSZSpYuEK8rQYAiaWjgVCcYTP74DoVySP2K4vco84a1WxAMVkQ21",
  "key11": "4qp8evxkGxo1oeeCkgpWyqheaGQe7pWAacrZ4bHqQqjgmHZwuwnPirCQpSvTDaMRpJ94CjJmy2hpoVr7pzP6v8vf",
  "key12": "4e4oTXaumiX4R94UfxrFpPyUpvPRkyJ4cYqsweSZ2bxtmjgBhHydMxKivWnueYaUS6jRxKj3WaTM5oVzzGgxuVCX",
  "key13": "64bTnow1yGw2ituyBo46jpfBpbPoFMUhdvmTfwzuVPVbP6KKzvnUs6S4M1gSCXYMgHswBazUZfVB9Tw42z1BxfWq",
  "key14": "3Assq43byC3gvKE1aFvpNvCkxgzPquhfpTqeXHSW3xfktzr4z3S7i4b59PnKj835YJt6AM418X7RcWPzLFncBQSL",
  "key15": "NfwEQbrkmvn5KEunhgZGHFm1tm5LoYKvvz6qBNSD3p3aVnDxgKqp7Jk5tLksb12QLL3UzEDBkKVCxoW457GFpLZ",
  "key16": "3Xt92s6PW8CtnRNGkPtqMg27GWRhZvGFHaQJd9HGgyWSimsAFmjs2p3yoR8JEYyWXR9WncLZKyVNL67GEY7LYjqx",
  "key17": "2jZMPWH2tebuz1hebWBrb5Pkb3Yg575VM2Ex8fQfEja2UxZ2LVtJ1P9Qxg4XLmBekQJ858Hnry6CZqP2vGsV9WHA",
  "key18": "37TVbrtKTLHrG1rQ65kk2GS8ntHftFYkcYhzxKd5VxRseV1YvK7qeZQXT4LC5LgDvjyownz21Zdj3mH5fXm2bjYm",
  "key19": "FCF1qdYxb28upp8nFMQbHSbnTgUz58e6BiPrssvDshe9jzsFmkKccCwe3rTQsYgahfum4uxS6cGy3cpRvJ2Mu36",
  "key20": "4G3CGGYdYRYDWDy5e13zP2SCNDGdmswioVDtPi3ZxZc3VZBe35E1m71RDXefZ7oHNwLZLxgkz5ES9KFNW3ypz7Zd",
  "key21": "2AhZHVSzECvghn1CSjrek2qqFfkCkE1tJzNV7AwELnW4jdxSTUvF8R5PRozEXuv5mzd6A3CLBanHt6S99ERxeajR",
  "key22": "5a46jCyM38f5JJsYXQRH8UWbtbmzji3cqqLD5eGorV7t1jhovrFXznH99xqrtbskwdE6pukzNm46nmJacL8wNHBD",
  "key23": "9249MHMqN9Lb1zpzRCcws6mFMsTR2FA1bMuVu6g5TvtyGMY2LKGku5Kmkd2QT8yNJLqrRTqGK6aWu9br1XYBKSQ",
  "key24": "CqGtTnaL26rrfMdmxEyku5sunG3p9XABn2ueaNXibtida6HKSvbyTErHBLw2PrmJ58wZLvK33pmiwrzycKdoKij",
  "key25": "28gG11RwbTZxvgrvf8YcsqkWo44mzrKzpjPP858RHtdg4uFqRNWWDCmTuoXWS1C4bEKXNFgdHWWDAH61uHQcTHst",
  "key26": "59dLC495dnWbEsuAgAkZVMUjwvMrwmwQwCGasusTSPek6aNcAgZHpCrG243xXAtEozy1myxvKaDXqSStAmGYYi3W",
  "key27": "4Krwu9Bv2MKKnHPL5rjTmGiBrVtVgQrBQAewEUaE7u8gVntyoTnN3xa6AfUoWvFpYJ7rDmF1hnVtgLXhFMAoEm43",
  "key28": "pjoKNz5D84B4w1fCbGkHRhXd4Txo6YGhUKjTq1qZnTb3Ty8QLY5MCUrU2J8iAakjV3hrvLHeEn2vsJjYsmtSkaM",
  "key29": "5yqQhzsbHFoz4EYkJpdeAjZVjdtPdTxPmpUDrAomBWkQmFCqvpjeCnedFcnquZn3XUX6x8UCVE7B5v2AjNAm27Eq",
  "key30": "36ykmqorr9bmCgHvHLzfU4WjAhE9b1TaxUbQCPfHpKNRGckXDJY9zeU2wbAWEj3yZFpSPULAGN6LnPWhPHbfpNfv",
  "key31": "4v8M9vLHg9y87WTgvtYCnEoiqiVMSLaVVixxYnpA65pwiyB5zSkLmc3B1cTuzE1QW6ZpYgeXkGvHKW2YNPjBDFD6",
  "key32": "3onUn2us1W5wKcEdjeYPRFwzvW8ndoweqDDfYG5KeNmRkByNcZ2NueZBfaUtjoGM3f2auDnveTa2aPEnf8zvde1C",
  "key33": "23s5qNUBXdQPBUZ3NmF9DtzxhPRFrML8KK3V3yPzhU8595gZqqWYRMHqNF7WVi4c8SULuJW4VYNbY9mmkeKVgmkg",
  "key34": "2Ac6TjjffH7FuVTHV73wvNhfEmaHo2Y4rEq9kViL9Nm5wnY5qh7zsuGaMYnCGmE1BLhnzCyGwHXZygjxjyD7ZSxx",
  "key35": "268qTc2rm91A37ZP8wKZGGMAyHm1si7YaYsJheXAuaEM19pvadao9cX84jBEQRGYxJBPUNFALHeVcWcAof9Mc4i2",
  "key36": "mJmfspo1aVtcbQTo4XxW7Yf58R1QpgHf7ThSkFDGcw6LPd6kjaTqQNVr3FLxQTxxeYWpTayMiC48ak3gmupTFoF",
  "key37": "1TBFggHSUryg6aqcjXBHwYyX69vS3rmxWzTew4XtATmgyGmJvuoa89XudtQee7GvCNvdRk9v32acKCLWxyDCDbK",
  "key38": "3JN7ZTXJPLiWsb9eQ5Psh5Eh5Y4qxXXSBa6WhpXeg19kkewzZyjUyudJdyaA1zgsMfxT8cCaQ6Gj5YxjoJ28faaX",
  "key39": "3J8hWGCocRGfDuQ1zfVpYLwpbA5dpsPq2NepUngoKRQyMiCscAj3U127wt6qBNtSMKqWu9DYdK4CMegjZyEXBvwC"
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
