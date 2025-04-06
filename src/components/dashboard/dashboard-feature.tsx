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
    "4YYXCCaZZU6RdrhEKBoafbTXpj6ptp98FHjAxyAvWMhWcwaFJsWin69Vpia8tCpSBTPXebUPDR5VsZeta7d4dYzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nc1qfrwYdyDjL1qnf9uRUedqv2Ept6VyGPx7uujbFy33zadco5aUmVw6thJozyXt9uDCwnKPpBTNXgHsoR3A6Vw",
  "key1": "4qUyTGnLQrYnMMA48XmM6mS3qZwysLrysLgn5QUsdUHeZosJNpspNsyhC53YBKShSkc4vxCrDC6CcKA7avsgoR6P",
  "key2": "2CkFYM3i3qiWkPquuAvUtKVuZvV6hGpUyhroe1qMB3GpyWsWFLNQfWWvhqE5hVcsfk7MKzbuUg3PZMXCVAovaQv3",
  "key3": "4NkKcmd7d5z9rB9ihbucQS2ZM4aLJrvPJpy2uiq9bAzk3kzU7o4d4H9xZpEkioGchgpfmzy7213D1cybLHSFvqJC",
  "key4": "5v7s5WFHkJW531ZvwTKWQnskmSfJqzp8GVzPBVgnHhowm8Nuyoe5sT4DMbFd8VYMpWu4MZXvHTFPu71BDk6xaFrj",
  "key5": "5zqWFXBDxwo4x62Lkukg75tRmWM2tr1CT7MxsWTZCiQ1YnGFGt3HJMNxLTabzGZNzwedsnmg2mgx1ZJXkwvSFtBd",
  "key6": "5DJjVQzQFsvL5GAnhq3R9sXQRTqSW1nm8LCGowt59JPN7MLhJWMcFecKdaQz2dN28v7FDpQ5VaQoPhsKJdPQPz8H",
  "key7": "4voYBPh8FEYMizvCU2G3XAVXbsY91x1ptmqd8VbCc3BgSqtKPbTgaE9JPny5M2tTz1DbeXUtPcSVLnEFhzyW2c6d",
  "key8": "3q5g4iLJvVSjpSX2NLP8c6nGsbJtf6kCAsKngwxJ5hBX5uxeDf4U1hB1JGjXXkxe67x6hZos4QLBUt1QHNnHrd2d",
  "key9": "44TK6MUK1E7y9DhFeFeU3KAWWeGUXn8bFXNyAvi8ckxmuu1bvueVdQEP151P8GhUi2GrTPrAGQk5pSak6YHu6J4h",
  "key10": "28NseXrb2ZH3QEQtGnsPCcGDmSLQqtoE4kCa2n3oobndwaE86JCpjVTNgydTc5dxaydhfqmk5HFiHfYTRG41bgdD",
  "key11": "EwA3AdmRTKjdchCZ4Uf7dT1Thiz8WnVRCqdAkrjnSt3dV7nwMf3hxKPXr6VB71TBfxoby9KBYHvfYfbcCHgpxmC",
  "key12": "3xdqwxE1wUgH21NajNKSYi7TzD85oFDzwBsdWQBtbQx44sriQCx19WxAnJ8KViCb6WBxQj515GVgfb5gBxgSPA7K",
  "key13": "2y7Q2X6mboWviVexADTkDkZoAaF2skGc4jwjpQ1QD7r4ebbjgnn79DyVVhWHhndvmU5zrJ7zPe8rLeqdYoTvEoeL",
  "key14": "2WaJsf77YRyEF8jRxLPmNjySPGi4ZZ7RAvUezk8XsbxPU9umLDVf9ky33hb7CFtSwsWm2dkH5PrAk3kmy2Vvx5n5",
  "key15": "3qxg9SHBMhu9V1ZZheeidXE17V6QLg4G3mTKaNNEuMKqxy4yXVSjySuo7a6euZ3P9dFStpoqRUPZMNTwVmJzicbh",
  "key16": "3996CeA3eqyEjaisEg5qFHg3CzgY5b6WH5Gx5bEEwdYon71uFv9rextsxZed4DBN6MLAGuoHsucrSgJD5zJAwyTN",
  "key17": "2p4Ng3U7zZirCLVuHstUEVnwvipeQoXiPr7pv29WG5nEBaWFDgd1KJc8pYJuoM4hFH3wHHASjwumCgJnh9WHbiES",
  "key18": "5Z6Zzn5iCtrHrcEC1pYYJnUA7W1vUfkEZaZxih11YCvBYBJMoDFej7T4pCFPGq2MjDNbFegxGvft1mfAG33zHMcP",
  "key19": "3mnMjU7Rt4W4nZoLVzZQmmv4LntcxHyhQiwCXxoNBr3JutZMrtWr38x6apPbwweD2crydKD4HcBgFbpANvBMTcQh",
  "key20": "3VWSKGJ6oNGfyp7wJLjBSw8ZVwwkxNCqWTyLz7ShLSLXbqU4SpoBfofwdh9MuCPGrvjMhNoCFJF1pLALk8Z5knqc",
  "key21": "3vpGNgqprDFojXNzLUyzuEPtcrvBdTqwJe5x4NHgUUt5k31HPosM8PaxpWvyeiMwVeSojQknL7DY65WJu6yV2aUK",
  "key22": "4CktT8mEWr8d4VdGyCuLr3iC5wYFws7EHttuHnYqH7MBGFw9eYBaLspqyv8FF5dBJdYQV5AZUVDwNjRaTbyPG3Kd",
  "key23": "vDrbAJHzrGg6nE7TYKWMaj8cPajfneuW9KLAxXDdYnLP8iXgtCDedtNEEU2DaRbUiz6oe7uoRpER6QWYyMnG7hS",
  "key24": "4Vr36vgL3QoNPHNq5wcoQB9T3km2JA75jVYsHk1gmLZUtYEd9vrY2sondKYwxPec1p56FhpsJHg9qVy6RGZ8u9dT",
  "key25": "2g5BmcULC58dkTXYxAhfZjeCViz81Azk7e8HjW7gb45S7MwkdszCMur4vktYyaD5YSmGJ8nqyfWqtEUABbDcJVAi",
  "key26": "4CUsgYuRUzt8EyHQD6wzhHwoCKDrEjUmsob9gsXzPZV92diPzRXdi4To829uchv1kSdYKGjPrzo1PYBmwqLWNGAr",
  "key27": "3tqX6jYQ2CM1XbC3REGidndrVJCTJ4EXPKnt9SqgyZhFBgojr2SSzyQ6bMS2kDCNFA1EmMCk7LGoumsNQH4PMM42",
  "key28": "2GE5BRGNKWUXqfH9KPyMvgSn1GXaD3jLEiQjN82dmKB5s4Lt3KKeVsuQ7KExAU6MBbUvnq98gnngeNcMHbTfSiZ3",
  "key29": "4Wobcze7KWz6Ac1wsr4qnriPQLx9y1pwBVu9BwB3M1pnoMe3LpJpb7TmPdVpQEPQ4AfFQVdooNhvzBCLnvTWNJeE",
  "key30": "27SkYdJcZoRBp9sXNat1c8Uj9PwypQCXrA1DYW2U8Qwr5LaAxDn65wRgTHNX5PFkPtb1DbNn2cytPMr9FzQTUgj6",
  "key31": "3AAyQxtYPJ1PKCXqV8hAYiZDQLzLLe3Pviq6KqZfKWvbWHfV2rz1uuZtHAQkw1vGgSR8ZRNyyuH1ruy7xk6oZBPs",
  "key32": "5HnyvYTji1wMZQNVXxanb9UZ3sCkxJxmQ3AVwM1EAimypKF182GYxw1Nuw14JZNU8ZJb2C1nhF9fi77s9SeBDfZs",
  "key33": "59UrKbG8fX47mzvDJJyLSnScGJfaiUTU4hFHV5w2KvB1zAi3odddHuwFMpNcJTemSkSDd2Ma6uF1uAY2BBCATyNV",
  "key34": "Yp8NpemcBSUuouRq8Xgpaty8fgxXTo1dGPBTmcTXpPEDBR13Q9ZHuSZwMoYu52cogrj4j2MqXBqnZXtXrZcicmM",
  "key35": "MuG7NKSSHMgrzGuQ9DBirEwdNtFFY4SVTMik4XyCGoYKGngNERdNLDoHmV3DCckXUQDRZXvAtR8hjhCiSuMAs2f",
  "key36": "5Lp4NAGjcgRvJ7Eoyak8ZL3QLWhLkdWnTW3MuiV5J6j3RHaELpDtstAFGbGf2D9rzwcZV1dy48m3gZ687ymVHzym"
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
