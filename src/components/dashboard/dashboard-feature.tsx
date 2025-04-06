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
    "3a6gvnKkFDmtY5e3aoeGBYrfXd3DD6G4VQ2Xr4RyryEuxNg6WeEEPSP2BVKSXnhAqrUgJDv3p6hwKdEiefqWeMMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51YMkzLASRDZfpKrnsQ32xdeooazwj6zo8PfQjXE9ufXnbZaN1tAopK2ZZre8KKM6KfTUjPfufw7QPdsX6XLHD5",
  "key1": "3JQ9bkjhqsCKhE9movsb4Hasn17xfyX7ZVbbiukiUXGA58R3UgL4dDsk1uwgnGP7vzPpPWxMZ3xYz2MdZfDyLvBL",
  "key2": "66FJ9A6DwwHEjEAGUZgLTFsWzuCqm73jp5sEaadGqhR3cZTpw9QCm5e4zzF8ryvj8MNbVgNc1N9iHdDppuUPAZYE",
  "key3": "35ikXJMo2bFLEm2accu277g786vfoHq7hp11vFs3fkAf6Cog8CcsrPk58i3JE3PCRSA8SgvBS9b4Drr1tVLqo3MH",
  "key4": "2PdoL6M7dWNmFgHABAE8gtD8JmNii1HyaAqRu6jPH1YQKd2xDzwPQKZVSVcYXuo9yVa1K6yNA4KUorAaJcqVELwg",
  "key5": "48Q2aMjZe7a4ZXVNNrf3wfnM1iBijHgkFgk8UTSqaaGMK7Bysut6nrNuSXAxRv9EEG4ZbXnqkG6r2DTB5eDVWRAm",
  "key6": "Rm7zV9iXU1q9XRfKfXF8D7y4WQ2d9uokPi4Jy9u3hdmYuA13MCfDyWVoAWKQwAoNKJJeoPuaKqCHrLCBVuSq2Dp",
  "key7": "4tsc6y7riQEbpPQoubgBkSU3DL5awCuvLcUXXrvHwqAkaGtZdFtxB38CCmAumH4UMDfKSetPTVCc4rmsritJDYyW",
  "key8": "S8Ho76LzpEMdAU3S8WfhRqS5FbSQD5Cs5qfUZ5tax9V6hKsqhHCLA1WKTjeUbWBd5pPp7rxgY8zc5XhdPPQX3F9",
  "key9": "3u1i4Fn4TMMEDzs8Cvcoxh7BmtV96eTuRvuedoZAPN1qBXXReuVuBR2MrSqnohpTzNphvmAwgivj9GocLaY5yqXC",
  "key10": "4wjV1r44CAD9JyhpoF3uP7RQCBHBcQMupPnt87gGfPB2pQ36hsbcZ2YfS7P7rveGFVTEHoHnGpLatReHhArZXkFx",
  "key11": "3VpRn1AwUBeZ8fQxbUxtZj4fBgGsBaYhj5ZKMAmngKUU74TWBQ3ZaNYXp27M27yZ8At1AtjLhCnZWnm39z3QAA2i",
  "key12": "2Y75uWQHmvSZCujEBHdYBp35dtSxz4LgadAgktoH3YqfBAwA81TQobmB7HqCXmMqJ5g4vYVtBAjuFvpaQpoieZCy",
  "key13": "3UfhSrME21AFaabPf7cKSv7355QKHV1FMKxfVJoZUg9AeTZJfGLj4k5UY6mi5d5JcP3ZBV1vGjC24dsF9F4fjr3B",
  "key14": "3A5DvG2kP3ERKd66c12zebje24zFzvGpwTzDXvTjpeqKeVbEBsf2YJmBT2D4mLJVpzYoEmKeTAFo8PpWNLLTzcN9",
  "key15": "3vu1VPXZ9KPEYgNDSm5wiFARWE4ysm9wjxZgQcoYjAeVrF47JGp8cfdFhEqKuz5obgoxS7tpGk7faBG6ActNY2Di",
  "key16": "5ysGt7GZT6zWhzhfJXEDYroMuUUX2EaVmUqLUh19yXHWXWWFz2DUS9m83aSJosDDEFakuyRRrgQNvnC89exUhQF3",
  "key17": "4brTpoQrC6r4X7LGfswqznozvhCVuQWqemW5E3chLtFPbTHJSEXSexRoGRf54icqD3JhUZA47sZmcQapBnDvJA67",
  "key18": "3uD8F2iM5BE9T47dDMhxuxfpsjZk3EpX8U8LiXU3mkUnQ2tL2Ycu1vNXH2Wo43WWRxDa6GiWbmzJoGkbcD3v36hy",
  "key19": "63guYy7ztNJGoXLoLRX3yKTLnWzJ3irxsgqwcWLfuzdzg6DGK4uD21CWHWy6do9fe4yunSaXP7zut3H8oJitsVuF",
  "key20": "2CKueg7dB5HkwoNcD2AL3Vwo474axyYrLqS7U7EQNMFzU4RKcmTfx2tY8avVFSbeApY9GmKeVs8YC59GgusnUAyi",
  "key21": "5KFC2GcG2N2TH2wBG2BQuABXEH4BBhuHZtevbXVZMSMEVvCZPfWDCW9aK1q6z9fKp9zrikSQGcFLaAay8PNRxcEi",
  "key22": "2yLc4JgewKYPHQQZTJdCSDxgZMCvq1eDNabZuPgXZ1LTkP2ZhHXa9FDwK3sEjG8sxe1LRLBjH1vVnCroEKpbov85",
  "key23": "4wcCgyaeNe6wC7WiMpBjDgF2xCWGeVdx9mrpZ742enygBubidJAz1heU9KEtArvCBZHQmN6GCm9fjFfwe2feWhYB",
  "key24": "3zA7Tw52onB1tehgponJaihew8v57pKzgS6uPD4GpMcqV76PKJJe8ShX32wK6FxDNd1x8gGewCXn6HG2u4Kn8XfE",
  "key25": "4LaxsQytek1Ctgm7Pq9BZYFmMuZHfQ4Qg6EaiRVg2AJ5uV9Ma3TdSGsFPW4WrwPTtWi6J9E7zc7akLFgb8iJmaQL",
  "key26": "2cwX5P8nNbjrmVA9z2sKEumsLDPAntqUdTXjbuJPhquKEd82HDrHnihXXtpk6qnVsx43dErLedXvXCEJ6mGDcQVT",
  "key27": "B1A7z3Nfekz3r1x8sZm5yzWFfpTHw9cJADjRcqGpLiRyEnPthZdHyQrQirFsh9xu7x1CRaQJ6C6VGpDg6ZDtL27",
  "key28": "4q5M5mWTLr2UdDSqa1cbLuuc6sWvi48SfbEXMgAT1DR2MmvYgU9bAMjznNDtY1zoYHWZEFyjDqk2QBYDnJK22JPq",
  "key29": "5ZdBvhQodn6et3L32APNiFUJXYKz7CtFFz5zYZ2i7TgpsaeWZVgL8FPeBfQdNGBmDQzS6iABwcMhbAMVzk8es9oN",
  "key30": "4GkGiwaN19bNZcXQr79vMADLdHMfenVTVDDqKZaCdWvFSfDKBFKt3KsTDbZqGJ2cJKL6BYM2dctEBuZu1QiBcAx5",
  "key31": "32WcD72xQjQ8uxhAG1oHg1RGQHEgM54Rph2H2sqMjfjv8cGNy3PoidtGseeygfuZVU4sNPniXKDZcgD6a9xxdgqg",
  "key32": "2QELRBj3qXi1wqoZ13CEnHj1bhFcT5QvHP7uNzDsQtxZvpacrwtDeAZBrT7tL2utAC29xm3UZEXxW7b18bLPPKGQ",
  "key33": "2K62uR83ehkMZgaNuxkwivzoTmbm48eLfBNb9GYsk5DH1koqD9wmVR7xYvdvEEdsjTXgdhC4aAYsg3YZhTZyopat",
  "key34": "3bFAaRNdsSGoRYPnK3VHFPsExSErZqQ5nhEqXP6kgyzqVFDW5EA6dhLwDQVmdcVTDdYCG4BjYZiaot43zPcikSzk",
  "key35": "2TK3Z9Ut9tTcAXfNtFibWJ6nsXASeMRMH5TShKUqsieZ4vwW5MoRLz1mhNgeWH5XrFZ6vgCub33NUHmFquGe9wpJ",
  "key36": "5LAfhHHF12u3cPjaLFUnhSf5LETtF2EHnLMuWFLj6jZEHLxizkBEByDYm8bCUPtfsdnUiXF6aDsZQ6PGxyaKZP3b",
  "key37": "q1aHBuZUSHtB52KXJc2o2yJSaDRc7SVBW6Mxa3yCfy87hFV3oo3ycGRgW5ivYxkPEBLFKbVkj2fkCMpH5QJpMuq",
  "key38": "5htD2TMAhvYPW5y79afbsFGwEwYwe1arW951SfGsMQc8kdkqdqyUY4WECiWLVoEKjYjxf9ATrbsZMj2tAD2U7s3q",
  "key39": "3a72H7hV18pSysoLsB2Evc1vm2HRcDEMtexSRaLW6VyX3QEzCbBBUSBRsQ7dAwPhWtmZL7Qy6nk971PmcbeNm98t",
  "key40": "4FAekzJ5kaF669wiLaU2m9PHqF95aSW5mFFCVramSCrCBkY7My3ZJmNfh6vhmPg7WBUbHCA4Zpj7ZWZGSkd3kkwc",
  "key41": "5dUiJCrGoXFYdej35FteUeSwTXQb1eVD5ms4oTvp4reoqZnNezD9SanYsYFpcvjumx6CNRhZVL38FdzPckbFiAPY",
  "key42": "4ZPmW9gbiBHmL7n8Na733BSaeh8ozDK8Qy7KJwwRJxQCBbjJcven2SQmaVmTWgrwjxYWWbQkUs6SSNbG3qguCeF2",
  "key43": "xmjBiCg96djVGaoTBFvppQ9HpmvGPP89FNotVup96YkHta6sndttWcwHxHKR7QGg8EAdiRQbASwwCTi2RW8L2Li",
  "key44": "9BxpNhiLZrYKApbc6B4yGcJvf58biX8jAkor1ZBfMzpRYH6t5Rt6YTS1rrGsBhSDE1bHr8S3V21eJxzScURnp7P",
  "key45": "GnSjWHkqwP9hrt8pzpyZQ7VzXRDEcZRnefSmBM5UgtPvnXWGC8ivmjmaoFeBrHySJ9VxNSWyhQyXsyGhhAEX67D",
  "key46": "4UctByuUW2gyPLrZMBuMNfj14HWbMX3BwE3Un8VD6LuSQ1etLdvwBKtU8QehiNV9zfnTfjSQWC7Cs6wmBGJH9Wit",
  "key47": "3NdDTkgif89hr2fURX8T138Ek7e64HPCFoKXmQmfUqxK7iTRp6G1dsNEgKx3ghGMP3QHVpttzzLYw1X1QjVsLDAQ",
  "key48": "5nz9HiqcgJ28NJLEVJxNjxxcCyawB1G27JeRjuw3DaQoXxURd42zvhrwipk5wDjoXxWGxyTmXsQYatgrum5r7baq",
  "key49": "5Ebj93BL1cUAdD1rYqdNGRF2XH5LKD3FxvTDd4gsxBMK9hXen48SYgCs1LAvX7PrU3a5gak6ivbwgFpfkGu1xMQ"
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
