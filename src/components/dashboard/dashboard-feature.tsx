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
    "2EhhAnupoKhjnn4iDu5hWBxo3cuC5ibXFwh8gPPxnVWg6Q7wf2ARtgiQMPp2kRib1EsZRgaAhQHrvS57Qpru8Wo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LRXcgPb2r2ZK3Fjf4Ld9SRMjca8mPRgZzCtNLRE5nQjaqSFdjdx7S22ZA6WtSNrkXfZyhfKHapaVrBFaQZJLoaj",
  "key1": "56Bus8PnuvjFoKjN3RHvgPoWFocFW4URnhWiuevDtWd9wMEZQDmQkHvjbbD77BG9CNqmGhV7qswzyii1uHaHjAgB",
  "key2": "2NuGmLyzaV886f4GoxUxSuFQd15LQjfDiRp4GpQDWe7osbTdQx5Dbxr1GVB8vDtHwZDsCQRLqz4zDR3FF6hnjXP7",
  "key3": "4R1c4E5D9mALmiwzCYMKyHMaA3bqBxapsPVyK6n4JaDng1sDUQZaYWYg7t46sWKT6hDMZwQKW2v8nYbd81kK1f23",
  "key4": "4he8yVwKPmwfpE9DjVntVVjRxHnL6h42TXTTmk9pa7PZZeByvkRhbmXJjZ4CUPcHpeqiMNi46aHyfn3cjoTx2Yuk",
  "key5": "53qAHJXyUUws4aTg7MkFkmt8KziavRg7FwteiAzkfApXtNDJyRNfttkKHH5onZXjHoTSCsW3JVsHckxkXk9vEcXV",
  "key6": "BwsA4hSiBtxc3Z2Kzw6znYragHM1soCL9ZhdePaU44zxxVh26FxKn92UDooyF1E1SayQjmo6Z88mryrzUjznQG9",
  "key7": "5qngAdwrhvFUXKEDRvJLveLzfLPMQD9dec2pSYWiHPbjRKLGXnqR7XUT4gqmoVg1ci9sJKWCpTbAAfB6hCjiUmVD",
  "key8": "5YqtGk1SEhL73SHtUkWYitP9SfteDKkRasvxtS1mqN1nrjiQaodqrogxM8C2BJT39x4vuUEjRxJZ6DFVH8yNmoex",
  "key9": "2jijf1Hxy7moLz5YcUV7hbxkq5zAfJPq4VCzu5GqeZBpSYTotWjrmCYLvF1bJbePsB3Kvcz2QfbgrLK2giGmXeLT",
  "key10": "5HyoTCBi7pkZCu7Hq9fpzGL69UqrbDe1ocTM3LmG6WBTVC6AjVHj5d9vhFMpcwJqzaBvRG1GR8BF92No5YsJjuTL",
  "key11": "2LvR89tHW1gz8scXLFpPBHrgkv2TwEF5z233NFHUT7pXeRxz5QpSzexpzMGsXsGDwstT2k7n1MmXRRY5MceZpstV",
  "key12": "QrQ53GJHqkJ9YAfz73EiRLC73p85RvYtL6oFhbZhWBxXtDzKz9rnWngWaRNKmFGmAkBZibY4GKhWjAubwFiFNqn",
  "key13": "5563xSAq8g3XJzL4ov8Yf4gqN4maU6oyNnCuqzYZN7BmhRqeyuhG4dZTDwsdWTvL442W9baEN3pX64o36eyBUqYy",
  "key14": "HFFYVxTbyxFjCiJSncszGMJ5HogmY8QQcQm81jQjkHKEyqGHRJcAscvbokBDJyRsiL9t1Lkk6pNJdx4DYZSd1vJ",
  "key15": "2DTzC5ckYi5xNTq5RQcyHatacwxYD6RoeBYFDgkLKHJ1JzKSw9rrBTdnhjYy5yoVQD66ZukyeXDezLqrsG5KArK7",
  "key16": "4FahD7SaYQweHVkxioTWbUarzz1iAfcNnGhCsL8khkSgJaxfsKGmj7zNWiJGG27fromZQfH7XSnh4xR5dGXr9MHd",
  "key17": "4qDgAtQUPcrY38GXChcb2bqygfKHiDSZ7hydr2eqyH9EKtxfsaGFm2vakJXfZUtHihfzaU2By8mgguAjEdYtR3R9",
  "key18": "5JaDbHkyRL988jC5FQJFDRLovjuBzonHMWaDFb5sSkQpyjNqqsVznR7NKvKNqxCqjgGkgVren4dpismunuodLDHP",
  "key19": "5py9SSNX7nGFiZd6Yc7wZHoMo1ozp8n2nTTDvZ5iWB9THu3mfcAVVSdjr3mRnyPFCgVAq68dibBCmNEweeWfuAG5",
  "key20": "P9R448pSvZWeKMNxm67GjmgfwphZoy9KmwmrUB74n3ApCqpkCVpS1H1V3pDz69FixbVUirF9TpPkQ2PXbbiaPZs",
  "key21": "3pgAo5cQkAZbXoTpukZHLaufwgx7LnAh9hUgz72PeF9H7uzCGTDhuBp2bFkD4JzkpfLuQsGLPfFDBv89QmwzLEcz",
  "key22": "2hg6ahuxQjQ9Xs6zEGqoPDcTTThirgLATDFcmDVYyMp4fyqybmDpTjtSrYppPCBwftm3yrEEeoP4rqRdDswzYBcj",
  "key23": "5yUMgmUDfjAvewf3rtGGGh672p29F2egG2QvAPVzfuKRcbDsrBr8yNJmTJf8DXdgwj52S3ptAyLBMikRoKZvDxCZ",
  "key24": "4iEu3inZR8x8N34TogGd352QZqYy67gbrQ79VmUWV9AFDvGmeb8WxvKyM5BW2HgJtdREKJ3ZGDkyksUcLFoDdUDQ",
  "key25": "4Jbv2Px5qDAwyKd7UYaGEWmyUDw4mN74g55bdG89z5GFus3ioznhycq2jgfJAj4GUAkuTHmDNzpuPuqPGHYpGmi4",
  "key26": "53vLS6C9k8NsEeuYU2Q7rwDctjcJ5PL8bFRyYxiYzgTaHtzm62YmSavhurDrJg1cQWUM9NNrhLDaNH2tn56twPxA",
  "key27": "WNKxE59nzTnnTyo9wCeuK6GYJPbgQeHB2BRyNQBSRp8s62ppTP9z2uDkkrPoFaRgXFoExTnUEfCpM6gmFHgPPRL",
  "key28": "5oG7XwFZnwsYkNi3MHtp8rTCwngNq37r2JHcoStMKmzjwE3wUb1s2pwMBhsMCZDYBgFN8v7H6kjmDTtYgowo5ru8",
  "key29": "2W8a7K2ftDvPM8HU8m1tNpVhUTNRbi6tWPGXJBKxA73KU3HfhifYsqrjkMtZCQ6aVXvauwxf6cyYbxxu8ZYBpytX",
  "key30": "34xcw9Bp3fjct6V78EyzrABgvTDLTPz968tzGBDZZ3oPFDrahjDH79DA9xWxB95jSmZ9PojeVQzRXGzghmQ9EjX2",
  "key31": "3MhmBDeN75fRF39RdT1mZqjenpv8ciC3Gw2PJhU1oS8616FjphFY2a27RFH2mPsooDBxPhkzTEytwU216Mv385kU",
  "key32": "4XTFK8GVdnff7SdsELTJgKtGi8y95N3pGo1c7gfam7dasvV5g4Hz5wzUVxb5JJNbgMDmWsfo8MHjetDYkCvCAjJL",
  "key33": "56UwZ6RSVR25m4ZmBaFSCuNyVuuvpN81NXkuxze1bkmcuX2HcqEDaXvJV8ZUAy9x12kmpotc4yLmwUjRhsntHaE3",
  "key34": "3EnLsCNUfBKNzwD6s6GSEN4YbnkCBLNFx7vyga8kqSDMKwKrr4mFHiryW4d29R5FQL4EhLPxkrsVqXJ4tyosEuq7",
  "key35": "3ZkuWg8zUuyAZ8Q6FcYfmw4zncxUJyf1wUby3GkofF661wKtCMwJpkLrtfT9bsAxxpMbhLPJPnSKDYk1CRCdMkwa",
  "key36": "gXY6kkyhevuhhqnzSWLoChhGnjnDusNKzNAkN8KLzKcVuq2yp7jgv1at47oKRmBKtAidYRStuGsNwGhB9eX11yi",
  "key37": "5c857HALbHvbkWoKYaETU4DTbEbymRHu1dbAsSTvSFbPo3odLi9YjHMk3oxiRjnKWB3vG6NxpgGMjQT2CNKY6wYn",
  "key38": "2gqQuPu2z1d4gqx9P1pEhmMg6xA3v7cqcvdtiwTzw2MFUaAGAVeGcNGRK3jSr3PugYKf6WuEYUPVGasjV1Pcyp2g",
  "key39": "2oeWArCyFofNW3c5QAQmwzhaUcRrsYeyVJKBSJqRaZZnX6vqtN2jp99SYCxneBoVyhtsVch7DQvpFxXUyNGMS3nf",
  "key40": "2YdzQpzHgfWvTxXYs1r5CzeSNCTKU1xY1WjUAoEr27evMUewxfbm7k61cKPWAvodSKazCHypBhYherD8mtfh4yJ9",
  "key41": "37xqZmRYF9phu4ZxyB1ByGJEZimYE68QpVM8VeVHpgEKZ1qCth4iqB1JYgMxAYmihq1VCbPho2sZM1SwkQzH6F6t",
  "key42": "3ScMpe66T8K8bThe4r7EndRwfDEd4J4UgompRAN6ArWba7xf3ziHhwwhnWdXa4D4eHBh58Rwk1ozQi85ELsCimgS",
  "key43": "4N2YVhYfbJ9B89TVUfjRRVqg1pHbL3YEccwvoDo8CFYaKXwgbcBPH2QsrjsS1UGSK793dR6q8f36uP8ecFbp9qYN",
  "key44": "5PKeAHifkh4B4BwFgVwHpyhAYEU8CCXa6P64PamQEzYkTzZfThoL1kVwAZJi3r5HQqj2exigvA4E8XHpwY61zT7J",
  "key45": "f2MswkcWHiRSj9RhPv9YJ356qdetziRLS2KS1u4DRnvewBEUARPHQtub3hKdW2vcD2ED1ijiBojprPDfzofPTLc",
  "key46": "8G5D7d8yJkWNtxvhZCoRtJE2wNzMeiaDSFganoRnivfPqtcxxcuVMLFUukwCFbf5YCrr9wXBfFtCryrjX6dNzj7",
  "key47": "4maRqGdTYQgCpwtkagmKnsPxuaDX4yBb4q1bqSZQs7S9cKA4rUkiDw1zRFg5tvZwa8yNTEb6oZSJUfu6QUHYCbRv",
  "key48": "3BgcvzSdpa9GHG6uPAAWjPQddJxLJZPorG15zstQ8UqLUK6hPmzdbc3V3HsCatVfY97darEH6m5TkyMrb2fR2HiT"
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
