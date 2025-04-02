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
    "2tK3URK4H5k61rv3XnAsrDLHYrhn7Jhd4zDQC7NwriaabxyGzNocbAX3deiSw9Fm2AnmnmS5bTKLySCetXhpZyGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nsgHK6nLnPgYJutW1rsVSQZZojBwgNnw3dz5XHhgri9bQ9vSBJnArxzEKh8VQJATeKjYQE8Tnh3b6e3FiRduEYC",
  "key1": "66PqSbSCKBVD3XW9q7dCi5zadHKgGdQzC3mfyEYDdpuQVfkYtDEzoS7u98LXuX8dMQrSRYtZL1KLSGoMtAhN93CR",
  "key2": "47cuHAbxoHgyV3j27Kby1p3kMQkTLfaZFxWK61Ue7a2ioTgSHLc6HTtG8EDGttevbD8Ur56kfgxS2PGauwb174WW",
  "key3": "4fphzvPHJ1B5E2NrRfmhkJ4LsbNcXcipuSFWbCzHkzTJo2UgDEL25gRuuWz9nE1i3xA39XbRbzG4cxWxh1X4ZmTS",
  "key4": "2iwYjwhSNpqo6KxyNDxnWaeUKm8pvBYUsDLKkYQtDKE2NFMZXEM4YEeKAjZnT4LHYT7KDPrYw4fim3YPLiY9jWvP",
  "key5": "46b5148Dwt9XBNj5Q4s7NYifwUzw1X1NNLU9dxTWS54k6hRWe2b1DR2FVrY5urfA7fQn4WSFzMMJpFX3Wxho2Mau",
  "key6": "24xvVYdSAdx51Ua4Pr911nHccQuSiH2qSrZQ2WuMJPorQWCDMJPi7KQLZZyvoAVMynWQbaVS5t3uJFr2YyfNhD3q",
  "key7": "4XYSCu4TrGVpWoigoQ6kMU7FREPECMEjCm8yNJmT7FWdHXERJcpbEXiPx9MPnvnFF15Bw7R1dNZGyiE1kGvcrFwV",
  "key8": "42xh2y5JXARcDHSpHQtry2jB2TFavbA2mi5M1JsPFMvrZxweyGbge3mrkZUNMt39HMCzawJCeZKM88pB42suawdR",
  "key9": "dnQw9x8Ap1QJHvj2CxpySRrJVkzLNqJiLw7Ve6a1jHHSWpnALHt35pB9Uaj8JMMeJNq1VJShNDPsJ4Ku29pjWsC",
  "key10": "d9mfBRYUPviJLtPeoHCoupJjsG4BrPR6UxAR1zkChW3sc5i6DmJ9rGKZmXANep8SRZtXyLCfe8f2JxxW8jQ8ZD8",
  "key11": "4HEYsAKXfUzapNKpsYwUqL4fpuKrVgy2amKg3d8hmA5EibtmKEM34nCUoTumwbM8i6XDQKA1dW5E64HmqHQdYnSC",
  "key12": "2G5wjjM9mhdFFYk9cdqLyjWK5HjfGfmE8xPRhqJWHxkSqhkKZBqWuu7Pvk9T8QbcfXNbxwfjH57M5TQbbfW5e5Mv",
  "key13": "2FukV58ysZDXGt3o2nXddFWR8KaXFeF9ZL4DmKPGLYsr7J8bq6iRQqijRKc55CRvcnNHpxnj4KV1YaAuuEXMWuMF",
  "key14": "5x2ZsigccoHzNxkfUY1RK2rEmSUaP9E4bV7uFzb51Wi3XeZzwYZYC93UVFRLiFVXkSKoZT3vptU5vHeYyFRR2GgX",
  "key15": "4xWdRyjX5YHQufpFhzucFMrKVErMmznnAFrPdxtaUDucn1PNyN2SxegDWN9pmxAi4bjkr54dY42hpjvUD6C83h9g",
  "key16": "2Rs1zbv7eYgeZNBPE7S2CAibBWcAh1LpGzyw5WKxX1K6XzYBeTw57meNNL9KZr5bZLoGNuCcvouoGpxX2hR2a8hz",
  "key17": "5mvbiF4SYKJRXQ8KMLmZ3FCKiAKBpdUB5qwWQrxJibKfVqQsXaL3RWoLHbv2PYe6BXiAA4scxt7Lpmh1DMHpSEhA",
  "key18": "3VzJMoaqrr5hKyDfs2vKEQCRdBPFJFA7F2F9DtASkZmwLHr5a4H2wRSW3E6YZbxfBws6T3ELTPe9kWwBb45SjRK4",
  "key19": "4wBGaSWJtdDW2wogCVBqwnqV5wrgAsMuXQhAB6389ReZLjN6CwUwa9JRXwJjne1Y5onYqYArjGAF8QCcLoctFiNf",
  "key20": "mZs3U9JkVEt2SstXcMXHwxhx2UrLxWbaTxBwinYa4a5NTuXrSRyPssqhFEq9yHEWdgcpw4a3YU83QnN9arTzUDY",
  "key21": "5NdEaHJLaLoAiUNuuZSx3qvmPh2JVVyyKQJUyApjKFztgJdBptJRgtPHYoVHXdgyLegLKL1hxmHCEsHqBvL3dHzf",
  "key22": "2283N1QkqKeZaAxAUw7QyMVsHshabnZfUvhjfS62XDPyxiimkpmn9oUpNrSxYc4HkkFyA9EYXA9gCFuK5UGRma1y",
  "key23": "3JJxATzmQwspPh3bQ12PHTviHZ77d5k9SNrhHFiZFvCsebwix56BNzuUdEFURUNYjNKGa4eieM6QrhNXeD8eEQZ1",
  "key24": "45MSwCDm1TzFecwNYGL4d3iou8r891YvWiXHRG5FvB242T53TteRUPPmKBfJXk9QDxSwqCJ7EJywkbaZoYFmmycS",
  "key25": "3Fy6htJu8tKW4ySWQrJBPcG6JafM2GwG4NwsbMDsu4i4JceY2HhwMiV8AtqbAQcKfcYXM5z2pV6hYzwW9dAxdo9d",
  "key26": "5wGEJQDsBzFQLxG8Ercvbk5UgeNcDvwxcGC3HMa7eFizEKRAt4h9WREU9JuYQrh3kXUbUrCRWVCisJeBK5vinRAy",
  "key27": "5kZ1Pvo8dx237rhdnCRrusAxGfZVce83a4jbNTCHfhGH6U2jXfNzyKfRSFnJXfBXw9DtKkuw8UHZs1P7Y3XEkpAt",
  "key28": "3uruiuRFp4wS1HCKydBwCAaX6VaFBc1ffJpSBpBD4LxxZ6ysJGDE6PrQFJZpSsi4Cz8S24uSAapyn4XKVJgRALwr",
  "key29": "sz6HTSNqmHgRGL5cbcznV68qv8P5u8tX9UEx8LTfudrCffANvNiiL4qUT3qupmhBZLegGSdwh11JMBVeZwqtVUx",
  "key30": "3ag8XYi5SpwmUjkrDbmemoPyumjERPpp4f6r4vpFZvxQTxrn8AoRYeqMBNjzt2uKtCoo4QFvpHpFH184ktwCbMtF",
  "key31": "5KtGEmh3x9LVAREEr565JPRq1Y433anACvwcUwFindY7XebCAiXrwP1zXZSvrQYKdRGRppHZmdKSkG4wxVQ5NrXH",
  "key32": "3ixZHyTERF3j52pc1cksE2YrG1F2L8pHTffE6jck9VjihUjXqx9mo6JLaJ6yAQRqNYg7jF4jZfQHpqTeZ3zUhV1b",
  "key33": "5DMDCNyC33n9EV8Z3zhJZDCNRPk9qjkTVgDdnFqD15oJHttNX8Qv25Pv7KZgmVPusi7Sn6yG4zUshL19uTLrMWpm",
  "key34": "4UjWMDQAvFJDTHGYcopLrNuDoJziWpLgmESnG3Gk4uCa4Z7HFUiBtQ1SjG3nW8KvTjamBWUnfrH4TU1JLZHtdRTT",
  "key35": "2XbziFsg9wcdsE1X5gEH8EjtupHPXeW5oQHo75FG6AdmaEhTVNoKaSSb565q2qKZn8cJNmPYjST3rfBRW1UqEKPM",
  "key36": "8nPPU8NCJVwLwjkJXEG295YKyoUsmTNUNwQj6zW3B2DwJzrf3oB6iTuYUd5P6VaGw7XkUbHJK1dssyBHf9wmGhT",
  "key37": "Ni6EiUWpPu1x11mV3QvJAJYqmJfQfNRVavBq3Vy9PWuFpJ9buFFePNWhFex1cwRbM1wHSdzNk7jn2umChmxycMM",
  "key38": "4RVBRyuoo1QGTRtEeG2d1sWarDsBwTij23GfYEtamLgW9ZJNBQVUy9MqWKwtU5MeAqu8QHrf1eNMZ8UkLe2VahXG",
  "key39": "4T79FWAs4w2yZCgTDMSJrG4SJBFWX2YQJHcA1fbMH6QhdXz5eMBCf2vUCQ3ecvh4GGSCF6gyr8VVduR1HWjobha3",
  "key40": "46rgt2HawQtfq4GcQbyDyoWf6nQudTxbw2PH6sCDLr5YBQT2MYUZdGuiNdZi2JKLKt2sDpzbJPhbWtbPFbNsVa4C",
  "key41": "3chvxnAmrvk9KyrjSuMq2cWUX94UgY7AtQ8Cjq31aTko93qLCqUUQTkH3jbtFH5rUKeBgo6sYYM43P3tm9zrM5wn",
  "key42": "2ywCPkpa7NpyJRe52EUgynF7z7diB5WrvSYbYMhqYScYWvdyBa9ivi565TTUBQE9EZexsuA1aKygFtJTyY7LVuqP",
  "key43": "3zEJvEGAiKaQTFGvXZ999qxTK5AkaZyBk6smkH713KQseDBnKfYJTxNwDBaAT8bMMaXSnqA7Aahn9b5Mji694V3g",
  "key44": "64hxb2UbQdid5hkazek52uhjnbmigeGQtrpvFNZGeLM3k7YrPS2RvTzqSatEw2uYPyYYhUGkyVMoAANNiPfHq8Xv",
  "key45": "3Y1NPK9g9wPvpAEzA6PTADoXST1KZzg86urc9yoM3owQhbrsYaHHPEjbZ9ojcHDNj7R55ZF9H6AtF62GJnf859YD",
  "key46": "3dwzAwDTFDBxjVgVPkycJ1ZyLZD8wHVp4c9ruFGTPWRYWL1ifrM98sjzBhFyD4qMc1RaALyCdzVihDWAnNwQsDbP",
  "key47": "3MG84pgkzM8itEk11LWJvuFrB7gRSUR32vcYhvpCZrayEtXQiSRvaoj7awUXeePYuJXQ2sUawauy3J4cxb54f7hf",
  "key48": "66kjp8kE1mc69MNwpDEpgdKfryQF69ovdUeMUzd9V6hyt3HCFMReqKZKNRS5vzieRyriKntE2CHP4gT5kQ98WZM3",
  "key49": "2scNBAVMAjvpVvgqDS79ZehjZmy5jsZ9m7iha7PTFHAhXCd2MLnTET3LzQynP5XqWutVLpUASVZqxji7vtcKwj4M"
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
