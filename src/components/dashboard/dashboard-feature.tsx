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
    "4ytQd96Wy2Zh95AsYp3FSL2JkBmnQ7FJSiEqmLPjkXvutcTfKoFFCRMVqwaeTDX5RH1UiGcv31EF1di4jpsms2f7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iaVcu479br75o5s9EwgskpkXXhG1H6JEQpinFMhFhgaArTKGd15GvQmu8RHLRzqFQVZcG1SxcjuiBgBJCb95puq",
  "key1": "3ji6U6GJxVB5KNNKPCSvNNrbRyUNyHPbfqqD6oeU7CCQw9utxmfUaD2EzZNCSLQqAC2es87p6AXLVdKfZs6d1DiE",
  "key2": "412XzyGN88rkiVghgpqZNRefeR5Dqj6FJDY4ma862p2ZQ9nEFbdW8Z7HfnnbCrbCjt5Ngy7ALV2ASKRBmUUp78nh",
  "key3": "2FVt2SizttWnQUSphKxw3WPxWUCMdtmatFgZFKuPbRXcKPwQaWUyNoNs2imTL6Tb39cJ2nrVbLHHjvnaPapSLGWM",
  "key4": "yYwE4JNGn5hNZD7cjQDJLhBi1trk4jW4hxv7nTYSMEtGFZccn3wz4ds3KQHkqd646kRnxVha82JdiES6Qd6e1tM",
  "key5": "2AU9zyJTDRwm4xM1pWpzfmbbJ9KPcxzryuJ4biztzK4yKjFL36AKPWjTRwbtbEbCdGwxAVas1gBudnzH6YA4yFV7",
  "key6": "5AxD5kdQxTE13JXdAZ2Qonr1tEGBGhKKbTCrj4MA1CW7TdK9xE7MdQP72WBqvKY5T8SSXzSuY1KwRVZNwcToaeDp",
  "key7": "2acwD7gEPWBZwqdMr8aABCCogUHYTCPcCAxkw1yLr5aTrahQtbfam79AAuos35REvwhWiiTLVaWqV9ru5QnNiJyG",
  "key8": "3iUQVjKhLhdKQij2c8RNkvywhwHXE6qhbruTRgLRzAaopab6pBGkbMEoNDcKut9tRjyZyfmnnwfR33RdpbaFaLWt",
  "key9": "3eLi8HuJFCF8NU7pFE2ERkRavJw8rKvwPSDHNDV5svmnhWopbedMoLLuoMmeoawhSQHJCm7gSEEzNiPrjV7Sv2L7",
  "key10": "49vCM2zbw4PwUB7SvXTjvAnarAA9ux1KGt5TbPycgi6bgiYUhR15RG8zaGSwtPxuQ6mmo7SWDBaGL8cvCEtMHZ5M",
  "key11": "32areJrz9Y8hJ9JFp9mvPjUSyCCUsGe5tot7J2MauArxYEKX9eJmNGEjNf1pGy4KNq1xAgeRPPNs7xfBkpjuhxgp",
  "key12": "5m3nJ6NjUBoSLnHdM7rZrjj8g8KZtMoDeYZQtEvGDDXSCeioMa67rnZnBbNazdK6PvpHNzYzqCqVEnTuTeAqisKm",
  "key13": "EALZAuL1NbYVAmvpnjWKiTmqrEdea7qfFYtyZBiLtHDdgQ2rdKJgmeAhnAMDbxSAbLJc36ffWd7ASSPczVQscke",
  "key14": "2Gs78nyVr3naV9Su7un6LNz5faihLBsYpTbdTQCQ3o3YY1Z8mfGaBat8fWzYyfbSCZoRDAXZqcr74bMoQf1xk43G",
  "key15": "4wvcDmgJ8naUV3FrWjLzK9nF5YkgRrcuJqsNtFf4bnk3pKMjR3F5MY7K2dETFMS9EYwUhRTRHzDAuVxReUnH9KkD",
  "key16": "5SftZ4QHk5GYy1TDrpjy3QdnnwRwkn3qVdz3XLR5ut6PKftvA9fxbCxK1eS1xeCCCaVQ1Yn655huVkJUVTE2iU3k",
  "key17": "5mAdYSunK2ib94NL7kXdYdNf1sgCVvRgycYLn31weAKiqwUAF76nicYygQ6PG9x4zoyoR2RXdusMwoQ8LjVZPRAi",
  "key18": "4CmoXXWu9z7Md3zDfjFqYsAnsux57S545bB7Mf5H5TQA6z6KLfD7xKEvBcePfX517Ys89B8tFHvUYYFSFeHT98t7",
  "key19": "2wBkoX9vDoVD9HXB44VgweJQeoT7YDWE2BiMfZtSCJbQqq9ZBndpY9yJGEmxPyHQgnkGbC2iXjUMZN1ayGSiDLee",
  "key20": "2qUvGzxRrdvWdKdkJuisQKarFdrqC8whVN1umdihxQ6iWPq9k7MLfv6Lh2ryoZrFwNWn3u212xTKwBE9qJAofkMp",
  "key21": "2BF4x9ndycdxWyzF9nPicSdcYvR3m71hV1R2dPMHNhNkqUwgyTRhDjEUCwtJkeNLGPKPvuXD1mKchHYneb6yvoRN",
  "key22": "tbgafLvKsKwvuyLFNyuBsRegP71TU4aznbz1cXYEDgRErUSriLQBJ9imY6WRNk8PGmqT4VL4J9j3QT7jyCkHyHp",
  "key23": "nZ1TQtPYa49GbhNdK2gtXCFmf9BWNofyoR3LzkXa1ayBHhimTDtcoQjusqHkN2aV8zhZTiqNZqaZDrmmh8Y6Un2",
  "key24": "5GLKFxP6SJQLMwgmt6d3oFVnSZx5CgispKR4fEXZBBmiD5EXn5m3Wkyi9Nap55GYySExT6WLGeaXooNYx9S69cBW",
  "key25": "2w3s7DRFZ6Wmu6kkKZCz9gzhSRDfVRkZLa3Qh1DQW7pRHq744imBCR2wa1XUpk8wyvVLk6v2PPKdEzdD1Z8X3gqg",
  "key26": "ntGji4vrG63N8sn5JrB2tZ51Z4AsxJBXJAdJnjb1W6q5SGfXCJTMuaaQVPkXCrAqbvhgQqiPe9PaYrV3DyciLoW",
  "key27": "22PZBc3NJd6mCWsCa1dGnn5JpVQ4eRJ4WKoMSZPyJ9k2EDaQ4WwtsNMrCc3UyZigjmJQnF3Az95nqpHC4gtx7Rbw",
  "key28": "65g4fxdH4wnyWdVdaQwZRrW8vxRU6QAJBKY3PXLhsNBdBonK35SvKcKESpjhpjZZxAqHwPGpZCwd4n7oVFEVjTjE",
  "key29": "5L6MviFgTpfPnGTrPju2hjZw9zqkRmgf9BKNhtzsLT2oShxBTqdoBk5nt6oMJPAZQe1cXXy9Lgxmgf832UEGAmYA",
  "key30": "2jGqXCUqDpQnUUV9p8XH6dk8FzZT5CviwLWjdXd93EDLsicxFUyZk4bY7eqjnrsxVEgZoD8HiN2APzJshxb9eX3B",
  "key31": "Z9ZPrC88c5D3tpY5nwD7ZUMesVNsbkodqJBex9WpG7PdDAKFXhrvfFWhiED89LAuzmRPppsFnfWQh5txVXsxjkz",
  "key32": "23rVMghX6ezPH84evgNFMi1UnFvhciH2fLbVysyhYtUpweAgJVNosGWFZzMnaopJLfaqLS6A5ZKDQ5hEsSLbzWT6",
  "key33": "3GLc1DjDZxAuDBVTFVBSmw12WH3zfpU2mQfH7o63HPeHh5fjoeSEg4WbwJjvnj8i2A7NmBrJFEuNmLsEu1MDY63H",
  "key34": "CtHV47SxapR2xpMaWThWuxDp4ESMN6GZKNHEgWoTQirrJdAEdFEXdGLXXKmvXVvv9ZbyauGNUuuFTSoSNpMUiAm",
  "key35": "5SdoqxrGJLG7DZ7jVEND44T2y47sZoPux4GnDzWSwCQfSTdLGx1tpU1L5VBiW82ugvarxi9UofiMz5CWm9TAPaGX",
  "key36": "4W4eVXT76bzdXkF78RrAcaDHhTubu97Vg2rKt4h9vJm3nrMiTUtRoZef64dmAE7Hz6yLpW4Ubx3BqqrYHLzLC3Gz",
  "key37": "67rTxDc5RWXNzuymPwkDJYvwo8QsdMFevjaD2LgsrcKMmyXMMeNqaixKAmmSu6GCw7QoJ1BGLCz4MXzhbsorLS1Q",
  "key38": "5hJBpmyDZy7nyeJqDcpfJiNn26NBQXYRqtdfWaZ4EEimWSo47wHMuj1HUHwUwYLeTAtKgaFrhNZXGPLeJiRHeW29",
  "key39": "2Dgpd5kVJ7xnykHawtL52nED9hRDSE7xHVCCKdDXHeQArRPVu6a26qhzVt3DCKMUAvpivKtW8FWdfD2zbQpkRAAz",
  "key40": "425p4w2R6hKmFUuJFLzQAxXKcJYqEBjDnGCUt7HUHrNEvnS4hoYipwuEaaH2iLRCA6LBdCGK9oU1WH6Q89qbYGgp",
  "key41": "XNWAYbeN1zBCemw6rQ8MNzFhNiLMZAjB58oLuoVdTQnACNto8xPdp4GEC7WJEYT1jGpK9dtJCEiXoLUpaNMCPzy",
  "key42": "5dvUbSoLTJQhtxMaDp6b5xR9pAgUP113bk1nCgGw1wKzXgCKkE1PHByLAwanpCtXZXSckFbHzY5M3VZpqsWHusKv",
  "key43": "4Dd9DAzFw7A69yeDfin2gRZN592kgkYj9JbCPd6Tx9trccFypAjcRRq1uBTCPbSKqB7ptS43qjFNX6PXc1FQz3yL",
  "key44": "4TimmtAsGHZ82j5uHomGAyRhRKppo68vJ9iZvcLJiYSJCKJCgBHvrYC9Bo6S6nDm3tCzD8ca8NEexboGZ7xScRKW",
  "key45": "2bVeA1wvk1TXVgVyFdJJFzwnmu2nEHA4b95dQkSGUsEvQsAR7UJu1k5QnCKyLAAAbAkUzdJnQq8nzwbeNbBispxU",
  "key46": "42FxWjWwiDJEmKHAAMNUPYNDe67YCHzZxHwP6cb72XvmKAugSdSVmSrN9CZ8X6iyBssv7GrAzRYfpmW1sHpfsP1K",
  "key47": "4mPvVKZheKTKzW1GrNtafVAVGQNCnYKGuDykFbteRZw489MYb17QUoXmJ8SswEhwEU8uQkzv8tmfjiEGMJzC7pH5"
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
