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
    "5p8Bwp4jhbgvqXY5WEbajeEeZEnx2Qj4v7J68mER9WYDMkgg9TgnP8pLqKp9tF5padjhnZGDd6CgYnfsa3QTDj9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HpLvk2Zwa82baw7BCQ5STRqN3EZDwXn8CN2jU6RxRhBTi2zkmc9cVSM1HDtwE1wje4wT6oaTAARm3BrBAzjeUex",
  "key1": "5sDX6UPz8KnnFcLpAvTpxsDBo1ymjmf1wEJzwdqo6Z7RkGEsh63h9yZYQZBWCqqWbtJVQKCEERjmMH6LZhLgSVaW",
  "key2": "31n9GdHL9JTVwP1SNXpJ47EbKsELPi74MFRGU7x9jfSokobRToGwMbaNSw15mza96Zb1di8niNq1q824YAqjGt67",
  "key3": "51PPtYGoqHxZkqxoQBnTGN9PzF9BBDwPHjxmzoKvu6pqGA2AVLmwMUJV6mNgS7aoFTDPcSVar2uVb9M65qdXuPeG",
  "key4": "55V5EHpxXwGARSbFrYC43mQpzdYM1wwaje1Un3vtBSkiwRvCC4yUa3dMAeauqo74zeLyX2CXK4AKoAMmwR7ekdFN",
  "key5": "4FfFsh4R4NhfvGXteL38KPXcsE3hkShnbY8AJMKmeVF71QPn7ki2cc63yh7Ku6gDdiyJVG37WZpptAsaTtodH3mu",
  "key6": "3WWq6PaHJ4Xj9f4D2XUZp6Jb6aUei3sHAhRmpj9Mpfrz4GASeHMxppcxb9X7Rx63TuJdCRY8cgoNrfq2WDFyRkqR",
  "key7": "3TsqvpZtMAPqJF5zXB2HMgXo1R2XaE2xfZsSHRCgACyjUTtcKgUpaEbpKMJG5axA5TakuptZRzdd6WXqupfqd9sP",
  "key8": "3E98wtPPAZwU2zFTR2bSGMi7LxSqRNEB4dDRdUUjCCcqA4ahQ9cdrXCgcRY41w59MGVDFdtVftWX3WRbYizfHv2v",
  "key9": "3F3UaQmFKoo1Cw6EuuEeyF9D9CUD9qBoPwvKkk8N4quU5TMykxEgdgfrKB3yEKaBoQZ8TLjmrUrTXA3jATfLzjGa",
  "key10": "5dQ7CKifYTk1CtqteDuNcFNF9NRgH5BryWii8rUeuowEMcwZePFYiNG66ifoYvQwGpTSuzkJFYbn2nPob9T74yPH",
  "key11": "5xF1yf1FCETLL1DRmK1uVRecnBXyowMTap2obiWjGYP9AbqMiqdTVdYUD4KzMU27zjWHHQtGFnGYPuAuyRxTzwQ1",
  "key12": "4dHRRCxydNRHLPkaBuHcipmnhuQzqbQPXaUKdPTK6axQXvYwx1RyBwVWz9NAWWtsHoeLuc1Cc47XF9Re9SduRsQB",
  "key13": "3egWEpPRpst9TMBgMCKzckkCDdRtESVoBuVMxcrskaz2pQeYgdqstsDrCjCBQRUw7D5BUT2A7xRxSu6MgCtHuSaB",
  "key14": "35ejLTvTeZLcZnGqBZLg4hEat4U1UJ9YodCt2ir5zZT3es9Jgr9YxL3vNkn6hRzsQmFL3JFLHCYrxBhXM1miyYNf",
  "key15": "4A2vXQ6eBzjkvFEzT3EyaiHVVKJ97v8WzinU2SsgyVkRHjzgy3k4aJsjgVQ4RG9s8HxnWXbwESRM8JD5hY2phbfM",
  "key16": "zifBguxTz3R6eVzufm7MWB2uvPAbw2GpLeVo1TuTEJH2AmvhD7qHEsJu6DyA9Xf8cgprDR4Qq7dBDcKAzGDFZae",
  "key17": "5UxPSY4gxWfB2duTZLVwvYytQj1YqXS4qYUaYLRxSqCcRtNyGhNZXKVyaJ1tjS4vbWZ58rTJyuRxm1CQtmNqSM7b",
  "key18": "3ve1pbqAngRtEMgdA5YSbzmJMxW8MEGQhkRUP3SAy3YmiYRpC7MFb1z2eLrJXmcpmYD9FWqnkDqfsxq3dv5pvLTA",
  "key19": "3GGEF9pYEM81iFD95cmcbgtAnSTGo9GrwipigdrrftQoamokmUMtRHm3v4KMEHnR1U24NQVxaVznKDHq6iDnm2RC",
  "key20": "b5DSX3iBK7BgBuq5XGaJ8qPAyejCQYLMbPZXJ7nZsDRjnPSFzmwFL4UWPX328AkP1YhtBsoBMSeSCrPTHqwE6DJ",
  "key21": "MjjxJWUKofWBmfFXHc6REdAbtQNqpk3Z4E6N6r82QXe5cPXo8HUoGg1tCXvdWuwkemph4rHPiYonnNs7CHpwACd",
  "key22": "3Joboq743SCVmthSWSkiH2S9i4nYsg49PHBV9aVAxfmKBGpPqwig9uhMi3yXytZGLnNDMRpKxtW8BMy2HRvHRTyX",
  "key23": "4LyvuM7DVwrwra2kTKrker8Aqehx1jHqx8jVvvhmM3wW14sSj7wKDLPLqtVPHYJFMRLucwZMmSALhMcQTGmMcH65",
  "key24": "3BhAhj1jhQRPG14Heks9hhuiNfVkfEn9C6GfBwgF7HDScApgQGLQhrykYjSV2vkbQWo4PhyX7NHytHJtPRfhEzTA",
  "key25": "XoVcUreCzs9m1McaAPcJxa3A4D8XV9ut7MfQiyXoR6hKyRwvpdZTSukoD4fnash2nzRRJHzdk36RidBwkvCA4qQ",
  "key26": "2er1ci7GXD2TwfBKcNhVsmm9J5Mg4gnK4Gg2NnRgGN3QgQgZjin8GYgBZdxbhJbU3q6anpRVwr16cetadTeNjxj3",
  "key27": "3rmumR98SdrR9nFmRbvJPpWr5cf5gbKRLNSZuj5xyqxt2SugK74dcpQxpHxKSnPGZYjkkpLWf3H56gYuQfk9Wj5E",
  "key28": "5FeUhd4Vzns7aAzouPFxnpnVqb9XgSaVARN722aQrjnsarxQD9ArRYEYgzt8nj8BDzUoBFL2iBvFBcMSiE4yMbCc",
  "key29": "29U17kiqZxHuEQYxM52KqxRNfkVCdyeoo6W7PL4omFz6x4qpc5o4kuTgj3gY51562aaDHja3yw17V4hGRCDY3g1d",
  "key30": "39nMb5vaMg365oS65JNszhCKrKz8pKxeHNkDcovQUK38HF4jaZS3gJCVBVZKAx5mWHecVCnXWqgaGaMDUmU7eyDP",
  "key31": "3khcaHY7uEJ1xF3xJdy4L8xszSfFoimQNUw3EzwdMScUHUgaUGxakUFGVzynCidjDb16vX5ncECG21i3F7RiGNUj",
  "key32": "5X5RXCp7JHrWrNqhLM94C8VQGQsFDs2eByhA8b4wiCFjJx9CfQv1Yvmi228L7aV6z1wUqe4Ec2swA4pxdoX8mmBg",
  "key33": "2s8MHrfCmgG4EJJbZb1hfo9cFaMaCJUwATuyNGSnWyh3aunsCmM1Yykm8Wum2jzTqPGfkFkBPNouc6jGwrRDweZg",
  "key34": "4TCkznFSDFcEChU4yiQV7rrfi3ahXUPHV9i7kxt5tQaaVEcxWe5JhZd15V5Hebn4hqearBz5f3H7BHcxBn5NAFXN",
  "key35": "3VXucp1R2n1TFa2Sbcqyu36k8VUUrjbaBGBeS85uMnibASSb4KE2LXGw5KT3KZBkChJ59ha8RypGxcqutjqFiFYX",
  "key36": "9REtx8GCjfgP4ZtmphAFbTTjoUheiYTuWaF5dZnD7TEbM9qz7FMzAEx8F4yTbnmhL9aMU1w2TcSr6h6ogahiM1F",
  "key37": "2au7JRbgWo4hZVajU5kZR5SeMCcjFCWNTbmEcD5M2fZv8QWk36hP4WkqqTRvCxs9QQz2wswXUqhuF4GqNcHM1onx",
  "key38": "5GgSZYZN5nze9EwwNFjsqVCXUHibaQK2KEJ7w8LrKoDb61n81tDeaZ9PJXLkVEtsc299cptxeJksS99UvBSo8dzp",
  "key39": "4ZfzaaAAvoVg9sTHLy3eYETXjE3hr7UUpJhonDvXWkj1bdoc1hS96Roh3ypBtyJKAx3tCUkyxgRx7AEr9cPaJdPu",
  "key40": "3B4qVgynxXno1sNvKLYDL78ojs3GincBKb11wHgn14GDSnFDNJSNvQf118yKLHNRery4RjaN8UB12YXrv2qwnGVZ",
  "key41": "4D16M2ieiAKJr3myDAuHfiYmr4VRQ5nDy6WE4JgRas2R8QF9pp4FPLjWVtrCbxWP51v2hgXSQ9kJVFxdqfKB83Qz"
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
