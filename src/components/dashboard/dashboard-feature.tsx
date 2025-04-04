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
    "4xT9UHma8UTgWm3JtidrBG9dupLF9c4vX37Xi3CrCPPqobTKgydy6z1Ao3j1zyCDX9sSNooEJgy17H9xLFMBD2E7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34NJxHWNNZuRSgVWk5vPNf9FFuQeFouFbVjWFn9GgAJWYSGqcecEfebR3bQrFsyXqmsBpS6CJkjgjpwwk8Yx8N6x",
  "key1": "27wJm15P6hkfKErnmLjRYohAPFmviskhxJjWVhzGLUAuVNV8yUZDWM7DbgHT95JUacH8q6RTYpsdrHvU2u1RXAYR",
  "key2": "2tXvHHEJ8hT3kjTr7vxVqurNDiGfCdS7YGJhBiJi556nvyUm5FVbHWQMzZo6ZygPS9puAkixqf1RG2Q3V234sGFL",
  "key3": "3yHCT6m7RQLtUHxZsXLHPH87WMhMDxQLGMjLeWFJaMdW1rguFpve6YhUamrchkuLbCN4M7XD2UUiNPZWpHnddYth",
  "key4": "3QrKhpRaow9VnCDtX9BgJyoNj512dnn9MMLirgeSRboazyci3DwKyKVrj3HepYFjqPrZTatxjzVe6CnFKswHXGRv",
  "key5": "41TgpPkF2as7Lk6j7GEryZcmpXqPU9KrniJQPEHPwDBWTg4KJTPmu9QwnX9VvEv4vcQtnRjzcqCqP2P6qB4LKX8W",
  "key6": "3tSNaMnNJPiDWkKsu2giDq17mjzGn2Qhs7YbM5FSTAcpq2VXy1wGwKfhNP6qimFHbZonX3kF1DFeFCvpBHxYKBBC",
  "key7": "4ihzeiHJohT7BLfGKYDYxQ182LKJfLECeeg87gGNiwo9PGiVNrtCgTFSbw6NVLGfN2g2G3TTyNULPpbp6czTri8B",
  "key8": "5Vmfku4zdNpGt8uFqkUyeQeMhwAJjdsiYbz7yR6rwVKTM4eBRsxgHWzUHUU45sv3DQjA2zQeurr3y342KGvPXWcc",
  "key9": "4RSrAMcjmYUwdNKDK8quwtzHsHdUzxL8oCLfxw4inTz95u4LwCqakHCJLpBoFMRrtqLZKj3oHHLD1cwZoSr214c7",
  "key10": "3n5m6ow9Q7MJZrpmrEVD8zTTvkaAsGwGEYNaxfEPzYPrZSxMKa48PRChGJctqeAjSRf6Ac9cWT5VH1p8BsL1itA6",
  "key11": "3FrG1MuR1LRMZ7e2LVKwUUCMFLk2XdpcYsnssqrwbq8omLDnqcHJuD16kxJazRs8vrdX7bY3yQREoxui1zbR9TQ4",
  "key12": "3XfB6RtCCYAbtCg9UXUHdAZyBhUjzX4N6XwPTLJJnaWR7LPaZvzek1UwMUectep2wBrUbXFU4QQLcH6Tv5VRQi4y",
  "key13": "c2MMs9EAqUtvYZJusN9kiuJKXM4kbG38QGn6a17D9Bxb6eBXmADdwijyvp5rAUTSMRsXAWtDt434Wnrb4ErEAyP",
  "key14": "2TUKbaKZdwinzoxrdEV9D9eZZjE5JScMkxCeozPUinDLXADAaQTsPAfzN8KJWEtkM152ToGr5D93WNU2ESzdov82",
  "key15": "4digejYDWahUevHTm13H5pEuZZeb88X4ZuRfTbLUbkLz6ptUQLDeZejNVNeWwtjaT1vB7NorhN3Y23sMh3TTxwjV",
  "key16": "5d3FYk9RsR2WzFu52EYwrmDYefPeZMZf4dw64wnUcNUXsVGXjaK97hFfVn996up3cLRLT3Kt577AWNEmfLqzpk61",
  "key17": "3v2e6YLvrUYXzw7zz1Joff6sYhCDuydLcENGkiZmuiUidbPf1J3jmLw8vbZtSmesdeVriPo5mqYMQYV48PqiuGP9",
  "key18": "64TKe6GcXqpP4UkbyK1dLMPjL7GUa2DNoUNJNe1zqDQfH6Gg7irb33GqeyYWyeGxoRgx7gPe9z2VR5Hh1yZ45zms",
  "key19": "65uH2kxJNweBDDrxAiR6draSwDzDXw887YqQKi6UeUaLffx1go8ut9BATF1WaCYY8MZzvTPtXHdTGyMjvGAaWpsX",
  "key20": "3CWzT8n1XG2FP78Tr7waNgn6Aws3tXAkNsNWM9Thjagp8s9DtbLWsi1MZFw9KuRbgEfgmxbKL3fLQNfrs3nXTRCR",
  "key21": "4Fg2PRR7UssFpMY5Regp6iQx2aevAaikzuGqB2Tao11rpX1J7rW3zE5SQiHuDoCHszVgqzM1BJWLYgCSTMnNgbbF",
  "key22": "3u5SP1naLX1mRjmwgHNNXC5a5bdyhndehv5bLwtR27UB16bSfLPxoGFf8D81KtaVCHTYdz5EVuwZMmdgBjMSyQct",
  "key23": "62e2ioNxu86r5Hn31oxGALQaKY6vZ7pTxq5VAtNjQFP5JfsaF8HV67jQqvuLtjGizbhh5dvwPx5dmNjRHdn9BoxK",
  "key24": "2bWkn7ghfhuBK1ggthN111Rp9jFiDXhewm88Q9tpb3x2xWQnhtcEADgkxvMeFoeS8PV2JJbHG6ESbp4bGMh3wr7a",
  "key25": "4mkqu4siS3RekacGR4vHtoCeK9svQWYXtiqQDsRx3tsbcPCeNPSrTedd3Tf747jVEm6jdcnbkXzUxeouRdvjVzqR",
  "key26": "3WS5nAm1NoWrujJwd7U9ujcwZbAiGY1Wy54NnfJDMuVrPeT81Y3LriKkymK4qcfChQp1j6WWtrB5KQHjL7qDTQRh",
  "key27": "5DCztkGJvVMq7uBKMdMjWUHsPjtrTAz1iycTv3NusCkZ6SQBpj6HaoGM5fcXjfPXrUmzsoXjsb2nk4ZN1sVwjJZ6",
  "key28": "3oqYJnxkRhnzBrfWnvmSGbbvX6duzwKA1Evj9H1472YLef2DyugxgiLnE2DjV2ubvG42ZUfWN1DnCeR6USw4hBta",
  "key29": "64wdxCDTpwRJJwTfPqLGmJoEiACT4GRzNUWb39mcFpzu3DJqFUXVJQfc5ffqymD8mE6bnugrne3tgncN8k6UiSVc",
  "key30": "vzyUmFYRittxcToEvRnQAH7eYuG1QmNJXCMDai3tHWk29eAeeRU4T5mBRpyYELvVpug1KH8Zow9s8N9rBtiyfma",
  "key31": "2CVX5AmtsbdtV7ewjB2vjcWrmXvgJELTvN9RWdJgQB8XemG95eqTjYgH8Kes3JjkAVCj4rR3pgu8CU4sXWQ42i6j",
  "key32": "5W7N3yeaUrxQwZJ8pAJCkRF6QM3wdenPJuDbrV28AoaeAnw6St1aH9R98kFun1xMui8QVYS6Gyu6X2oawt9czk7H",
  "key33": "2kDv3kNosVoojoRhN1gyJ1y3LduUtnesQvnsyei3stVnVhY56w5J68CQAB1qvL58pMgTvNzVeHCjtqNE25QkqB3G",
  "key34": "4RoYUQD5Qrc7DLWtBiw2zMSLqAwbEeGQDSMp58GxYGwpwXhEBTh9QiueNVd5xoKajHiDm85TnHK532cUcPxcmTqd",
  "key35": "2MuXQ2o5UQs3FJ9peSWa1ujawjLLc7buvAJDvbcuhX6UUYsjiV5V9amiwLd9eeg4PLtnX595ntM3eSZzNuJ4stnZ",
  "key36": "55Qqm2PPBZEToxpZGN6pARh9nHUGHcuRoAMykFJzRd8a3oNtoRBequjrarWSHnzSEp2zU633kxf4LR6HFtwJQR2h",
  "key37": "5md1AQpD7UVcQzyviynNFc6kUmLcbgRRKYu4cV7omBpVyH2WtsKTZSPGxEQ9nAd4eB7bo6aKL46RfDsuoYUTJVLR",
  "key38": "3XYztjSmDJm2HKopLtQW5woR3WuYHqt8yLeu1ojFnpyy9mVcYP7k1pNoHbyW7TNerk19hitTvVr1rod6m2oaddzA",
  "key39": "4mCczkmqAijbDMHCTU7qfLgQxXu7BLWvJW22HKtXoWG7ZufikRMDK2rpbFVZaEh78vRTSPgTT9xMT7JHndrxUDiT",
  "key40": "48U9S8YXEnMabLa3FcBMiGrLj7F4HjhhRD3x8ZjSjEHASVtxKTiDCtvrpEWrmpMwFvND94eqvQz9ALikBj8UpscJ"
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
