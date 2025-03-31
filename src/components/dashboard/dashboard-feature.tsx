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
    "4nqpF1mejzn9twKKK9dqqNCk7yHL6wgtXqM1TKuyMz2wjxzUTVBZeT6jqVykpiYw5uLP4yxYU8i3u62eR8M9cbeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CmbECcV6cAauypxM94FdXxFVLvbVe3qUV1LBwfVLqXEW1A8J5fsByypvfJCaqRpZ7qMGiYHqhTPvCvWFAVc84UZ",
  "key1": "5a6iwcoWWFuShm4hE2wWWQ1oZx5nShNZfmWtMqGe97eF2qdRKsR9uXbUYJcuskew84SCCAQgcJB4McEE6EnEZMy",
  "key2": "2mHh2W4cjvRAkvpaWXhsvPH5v2YTXRSVT3i7ZuwSwMu3KoTqqEXkoTpmPGA7sxE22Qk8sbRKHJeS3UUW7983MDX5",
  "key3": "4K1385UxP5ueC9XwzCgtRVxuoXTkQUUsK3Fi5PMLarYFXtsoMvMBt8qMViLdJLv3EWjkuoJaeceWRGEvAVxCTCPZ",
  "key4": "2Nitan3iZbj6b33tBCcYSA6WKZPFjCY1DG8FA9JRSSa6yq1Z18psv7MkrDsN6CzGLKcTcyBDGcC8qTQM5eqUgW2e",
  "key5": "3EXMwXJBmXeufdWQ9b4gkpJujP9jXXVWCvSLGnDRyfv5TQrja3EJmPVnM2eRzwaMNHJVrivPsquK8rZ8PNAnFwjr",
  "key6": "4TZao37MT9R47awqBQHqx3tRS16s9akTK71uFSxS2aqYQGAV5UpbQTAX5idabX5Pf7pCzfUHMUFcoVb7Ex4sPDSh",
  "key7": "59WYuFmJUAZqxp1MazPfF2UtqspcS8euLPPUsRvT4msvjGdLEhkmBUFMYWEwha3y6wjqBiBjN6Xu3F62WfDHNY1a",
  "key8": "34hwenU37cNAkAFcUhdmrSWUZcJYXUuab32gQY4xEechk558gyWQhVkG7oNDMKTu4iEGySsKfj4wUmRAwJJdmjNw",
  "key9": "2oiu7BVYWQYs2cvLxJkjq41Xye76Z4pbtsNfWeWPCQrC5jxGj7G4WABQjtkD88UZCmDp8r4eejjAVB7CLWmKWpwS",
  "key10": "2Zz55hgENPioaUzUiAJYNjpzXaMFXYd3k67umhVWFKauNePcPeFzndUA4sWYqXHkFuiDZ1L3o5pQqPDB6L7icwPs",
  "key11": "4TmpkXb4sEze32cxucuMdogevuXt7ftpSy872TkcePYszeE6eGLGkXsSG1FezbcQsjKu9tRLUUamZdBdXrrzhrU6",
  "key12": "5P1eNWi1opLaXhZv3eBpPS4pt157Hfn8aCj74388M5CQTF5b593gW72RrksQKRtoieXgfXfXEbQjq3XtJU6CaToB",
  "key13": "4W9uTjecL5jzZocQkbCmYymvSNiMwsKx7Ey8GjdhDueqfu8nWtJt5ixj8BS6xPAhHonoevj26FhTFFgTBis8syih",
  "key14": "4pqKpjcSYURpSSkFbzsKd6EffjxrvDcFpVKvopFfx9dCZFdmseaHeAEvXDahzgc2NUBb5TLJrTgiurFK5MR1GTL5",
  "key15": "4MFvqG5hqQmFoZHSbUMBfU3zMooa575dZnkHycSMTBVyo26FJVSWmJT91VhP4mhHDLoiWd1i2C6YdxjyiuQird6S",
  "key16": "2EieTohbBNXdCp4AiPo5iGbiw7DWxrhb5mWNhAiFwNGRjTaqizX83ShziJBveLZkdYojEK3q1hgVitTur1HKnhmr",
  "key17": "5aFwkedZAB7iNhoo3cbNQKmQ2vVMBPyx33CMiiUN8QENfh8Uwh1trjA8feFD9xZExmJTbiBZHqKinpz27rUHhCpf",
  "key18": "26S3NvsRf9RFnucb4AZGS6tk9NGZPPwc9UYkwTisUGf7L3vN6LonGopz2k6y98MAf227i71ZzYxw24PxA7cYHpuB",
  "key19": "3vQPtrtrdQ8Tgvu2HTdRZkeKPnBicRkzQ39YmVeUFY25e4jJ827rT8jqnfJntC64G1umBugU68GC3wdoqzdQE1D7",
  "key20": "tPPwe2XV78pzMnFcthArKyA68CdaunBLQNixQjAqNRWHQ7voTh7eAouZzdBtnbrMiw23pkZm4sRDz5uLELkWgAR",
  "key21": "5668ah1FyVCsgiYzHVe2cKCtRSJSUamyFqMmPz1rBBP6vxC9Bz4vZF7xE35CzrEB4w4ir6t7V6JfM1f9oi9JJ5Ys",
  "key22": "3ocCCZ9trxHkMYEfopYX5CTdPon8giGDLvwgANTu7pH9XYMSmHM5rnhVy4CfZnywJJa1BUpQBuSGo9oGpDBo6wEw",
  "key23": "gF1rTUdS6MYBUCpdNh88bfTvWB3WzUFhvUypTEsEnZntcASqJ6ZD3zvZfDKVjGXnBp7zQmiLcCbdmoerZYq87t6",
  "key24": "4ea2mng3WXZWaCtKrJ88xWFXD3zKoP3wcixqBXzVyXT6hGAYVDp49XKdukGWMeqpfjhPwvqWYNa7QDx32mpKD2F4",
  "key25": "51qAYULi3r9twt7Tk7BXWrPdXZFx7N7ra1Gys5Z4smBx2K5vtJyW5yXYDPVpMn5dLup4c3MQoKP7RUPVpU3hYPsR",
  "key26": "3SQCdVweneo2u7JfphMPed8HKg8cvksMSeDEudxpWLoo7FjNG68YmF5yBfMUAj7w1FzNui8gwvGLDkyf3EYzCzvQ",
  "key27": "4FBG44JwMxZfXC6kh8dpcwUvJwoTRxDSk6QAH281bRC47ZWyVqyb6mJTN9zAttRYQJPAz7FkaJBRUNviVTVU6c5x",
  "key28": "4bZqhnzVDaazivjmkBj3GM72NUxmPmxgqmVpmzyVixaNewPedKtHdm6uY59HD8T8xDJLor9Sn9oLErucFkwrFqof",
  "key29": "5JZ63eAMAFdoGSEKH6oobyPUTqjoJPWrpjLVuopQhR785H6xqt9L3HAQ1GNJMK2xysGev9vNpNa7As5XSZJhmmL8",
  "key30": "4NduR8xGsWvim5dTDL1Az9EbSgjJoeMCVy6J7QP55zC5Pobz5S8KcuHbFDxzLec3mn9vj52yHiaB1RjaEvg2yr8j",
  "key31": "58cAUdGpzrAVKLj7uPmdUhqTjr3AmpK8wpRBqqg7XDziCoZB6gaFuYjN9PmHEgeQbYzzbzi5xYYeVyxSUEzi2NGu",
  "key32": "5NTcj26jzS2Epunbfq4UDY5nmm4hkVMcL5PeeAWq5SfPt2miwnB8PKQCgDz6bMmhyVfZBFPPneZ3J5TiQv5evpqL",
  "key33": "NusWEAaGJnZvp8EMWpU23QMBBijo7JX7aoMhiuKrnqUtWVATwXEBkXP1xKg3peJ5KWnQMNULWi5uWHxQYV4jbZG",
  "key34": "p6XfrecTHv9NfFdZ6iYBrNd6hH4cs28uBCLwLTkdiWv6Gwq9Xdb4ZyPRJEHMwbfeb16Tbw6L7xiyt5HGUC587Yx"
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
