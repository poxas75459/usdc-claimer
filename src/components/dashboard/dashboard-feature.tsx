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
    "4NbEkDA7e7siFJRiN3UCpFDxdW6vcEvRBPi5fVkYfFM4zWcVCJphSCaEKyiDo7WDf2ZDzR83GW5UZxiQ9kewzsEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jbkng3rBFfJJJxsSzQZKkaJpZexK3VLQXw45eXzfLKi19ebhbwUyusvCJb3EsYr7tRnyEGXeRY6YdxADMfyZSPi",
  "key1": "3D8DpE3Ud1bEAmDCXabwGBZP74zx6dNAeEo13HSZfKsa4HXBMKpYHXQcTi8GpVpbLbNkmT1KAohhoYVeNbJ9npdx",
  "key2": "5DFvZDQ32V54D4rLG4WRPhwtFhAsuhtDgoDZuTHgfKPVDEEEwK9ZxkM2oJrG9NgPywudYpoF5M6Ao9YQmJy5A8a6",
  "key3": "3hbEgjACpRNvT28GWoUdRAxteiJvzeB5X4wG1DarnpTm5hgoyX185bKQB6WJGYjsGSwEWGtduP5A8jNMC9qW3AFX",
  "key4": "8sKDu6CbSzKpiwa96WVqAhzUfYKtddoH44RFKiYJYMGQNKNMGu2B6kf8J5693fHj6BnfocuGMhk7YHv81JWhpaX",
  "key5": "25ooBh5N3FQeJDeo4KqhDSyrDCVrpwHHeCZM6HVxisVofHc2agZCXMaDafStaaWeEVv3g4iPUN4BqSc1gSVUdXen",
  "key6": "2uApY1AXrHSdgvXKYY1uaUtCgdabmfHRMYtpehpithHpyPMuPV3ML6oQyWG2SZGLjxf8bDLdB4KQPSRxRLYpFR7F",
  "key7": "5iWa7caK6BVFEargGHEcmGpMJ3URqSunsR1Q6GwDpsWgULWXdeYtt63DjoULQppCb59Q9TVQJncWr4NVhCUysfLa",
  "key8": "2yctLfp6XN1YcMLY99eRDSQL9Mc7FGgfHzAjV9vM8BSUqeNxL2KhtbL8Q9Q49vypr4zg7myKdds132HoGFYMR8Fs",
  "key9": "4MGNX6BpoENm8ffHGmnHx8yBhxEggWtVhBKpUW7DWvSsTnTWb4iQtQPJcKKbYxPZ5RAa3AWPUymnXeTcA4exm99S",
  "key10": "4QWFhGyESxZ7NjkPGjgSzueEof1Bz4wEGceyoKSRqPssBECvDVoYF4QsPvkqyj6ENaSQemziVDhQS1mXyLRABi8h",
  "key11": "4u5J1RXZWuKomsQktaY5sJGaqgcW493YfK4UGuY6GerE2gd31w9nMH1o3rmyEHq7QpMcxqVmwYZy8xWC54C7YSox",
  "key12": "66dYuRSRPuZnfEgw54v349SAUphZ7nRv6wovJgVPqEo3RriaFoEFqmAiFgotX5b6qqxz2XJycYwpFcFSuhTUvnUi",
  "key13": "5KUigugeLwt5GSYgdctoZhQJASpH3Tpq9Xu5yuiHPqgFkujYDxSxqmng5DtShvDU51tGq9ykTdN9A7kMCe5t7Rpg",
  "key14": "3moMxbL4oUDzcD2kVVTHPVAQUZc8QXB5MBpGgCKZGYJwY2F6hqfgCjPHVC1FmpdwntLTbnrrPXvTWfg9ZK9YJfdN",
  "key15": "2sLgY662E3tRzA8m34xsjmsHxXPBsjHqfB1AVeATwLzi2y3TjKD3wDXR7kFSzbQyzkM5TU7cL2WRm2ne9mZGKr84",
  "key16": "RwhEdCch4cCrfPsibd5qcwoTq5sfKTRVMTDV1NvGxs5EyTLb6N7X3RkFSqjEQsho9bssDwECAHuqL2w11cNGLHF",
  "key17": "JJndKKA3FnrsrZRZyJWMFhnfDFcNmZFmHQZWMWzdMZbfMrtwLU42VrNdBewrkwkaZNB96gJBextdstUkeuFrRn2",
  "key18": "2YjH3fCWsrpaBu8dYswcaEVCz4nY4tDSeHrk3Ek5ADvGTfALLfbtEvWQaNqAQLRsRKofMXY8huukzw7G2MCcDnYx",
  "key19": "2fEZp9pXNt7Lf7eYCd3UgUuWJv5nU7zSBBWfEsfEXyKs7H2hW5JtCJRaPBHRCwDidc9ARY1UWtWW5ebybmFmEJEt",
  "key20": "2TqSShgX89EbogruxQuoiLDgpEC9y6ueQnBqAbKd4LKuCXPgsyz5xTHH3ytu6SHjh7rdN3oakC2eyFW6uyPS7v1y",
  "key21": "3VJVYoBTBwtQmH4xXiXPoJpm866oUA7EwRTymLScSDjZK6SBTgeJtSWiKySjZKpPhhHxqnRKYtd6toQTYZEpadTx",
  "key22": "4EfRGiF7EPracJTocFxm4Mt1RUFdk2oekj1wQDw7h4xRkesiZJyQHLYAGYzj86aeAbWBeygKBAXjXiFwGMV2PEEJ",
  "key23": "UKLyg5p9A3qenZXMGDsCh9YwmETT5R7PwzRcNvaGGqYwC6nrzH3e9F4vLfPoHPX5R1SVHUKShF95ySN8fDF2JDT",
  "key24": "4WQ99uRpAQLCwfbYwEcT6StfgpUQMMEdsDtoHS9HmRKnjYadmnJ4g8MkJkpWF9xTF4UKUxwHL3PjAhjnrLtnomCL",
  "key25": "kgc7FJN4E3ZyfW9FKytEhzNadX9oQLPAgC7oyaohkYphAUiXWch4HtiW1zaNGHBt95HCAA341qwH1NM7BZ75DS6",
  "key26": "defq8GuKEivMJirF3JzKbSNGgVXWWuEpoAPBnSj45kc53kJoCEkF1ooBxtfC1iTU6LNwENwE6QHMJEsS8DqcZJR",
  "key27": "2SVppdrwkZV1zLjxf1WqYnvR2mCCuRDb6qSyL6MJASJRfBZmeRxv9mKGGiboJWFUPJxhecPKPRAy1YaqqqpSwGjC",
  "key28": "4dQtDUi7NbUV89EftiNZQQejwFy1WfnRNbUmJxkWakddkZsQRmgMVJu8eqtzQBHytnnrWdDSoUpUjQH6j5fPzaTY",
  "key29": "64M1p8AWRiUKjue3opEvWYwoVU9n1fRrb27W53kiuyfy3cC3KXv9qrEtEoLjxo8Y4BeNZ6XKjCTbXdu8rRUac5e8",
  "key30": "2U5CMdikw2NtrjAUh52znkHb6d97HzdxRgL6mqcJWv2LJVvwX6cNv6goeTHGVAr5eqXo38DDpwBk1zEGpnwZ4dHp",
  "key31": "4bgmTJCWmQqHP3iHPiTdqHoFj2r5daj4mh9v8yv7anMgepGNhiojuZc73e7QtY5aSDTiHhS1qQfMF3PEagR9BiqK",
  "key32": "2VtUQDWWBMdH58FLXgDHtZSC42e8APsRxnbnid5ekn3FxRqWEc8cdQMjBbMFNgwXpMWD3oAW2mZ6mesaP18UjKpR",
  "key33": "2U8qPX8qqzYy59bCTrLwaqxxpmnHqQA7UVTFj3wbEsPrk5WPeoQhTmwBgFxgPtqJTLjHNK2bG5P8E6ZRDX3rodna",
  "key34": "5tfNs6VcPVpkB5Qx6TbhZUwxAWSvvVsk16gdXT9Ho5o7JjJzVzzn6YCRp5uwCXpkfU6EweNGXLR4gBzeGVhoYX21",
  "key35": "hKMi4hoEkRQz34o8BVvv1zh7AHX1qTqTxzurhbrBhgh6epzRbSSYiinpXw3SiB9KBRksoSkaucWxYqCQpzyd6gM",
  "key36": "2vRxvHsRcLFtZ7LTju17LysFpbDYCfjZpdjK4iZeRdXAzFJ7UzVxCYqQhvtg6jQrzHXuynZaEK3DaQTiBwkPmtdz",
  "key37": "EVv2fApUDCmVH5sToQVphNvMjfRdqPcVCiYMzrsSAWbwb68tBKWfYZeZpwyQqrMqzv1asNQ2qf71C69HvExVBki",
  "key38": "2fi5PhwbrGXFUgx9idLeETSt2XLcTvfYNnusv2x15tCQQ8EdFzxFAmC3zkt2DL3fzr39LDa2CV6Tbiw2E2YuJPpd",
  "key39": "5Em9W1HKhoAoANrFriNLKqF6kXPabLyg9AT49LupL7auYJ4tRM7j8zwF7NS465g8vmgaDpTi9jEaQNp9uRSmTmGy",
  "key40": "4vwHpauue7c6N4tDS56J9WY3k6dyHp88atRuPftp4Xmb8jut6w4Mmfug7tg22Db3tMo9LkefUmgTXmTcADHAchEh",
  "key41": "4qupJm8WxSH8hLychsUo3gUfQezwAtA6KNpS5dxWuzz7ZmH1tjaaNxXQJMrp7RwLdgC91pGBroWmytFEYTshrLx",
  "key42": "5JXecyBMe8dCp1qPwyN1ka72yjksNUZJPJqS3iBJSrpEknMC2Poh5BZJ3RFP7pGkhXPqx9VFukhitUoE5Gtc8Vqy"
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
