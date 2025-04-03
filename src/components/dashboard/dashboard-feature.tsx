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
    "3Eybm1uJDiLnPUC1WAmKpzJz9EkKG6N8bW3fPWcGSGrFjsgEVqYrMpTitn4czuX1gQxTVJqGd9NPSHVw9HqQhanm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m7SM6Bqktbq7BYhrGHYsiqevvGudEMHW32hLsL9Noc2KRqpVAiY8izixdX3Y9hMQkoaaQS9bQn8MMX7HdxtCTWP",
  "key1": "4Mt4WynNuVskjd14sY8aUKdQ6MgFXmhHY7vuDUnPLn4JE5AhSmpGczqkT9dQCrGx8t37nhxxpWWeDSQjQNQ2Cxm",
  "key2": "2MEwpW9fW7pEuckPHwUsUbJxtgeoSBNwS273y2Pgyzwu8Pjd1w18aYmXXrSGHG2FzzG9aXzLYsNNG47DvoWaWoVR",
  "key3": "4HvVmxQaXjPXuKizi1Zb2B4Uq1Z8ZJAfYYMjaX6WzqLwemg4CYLQyVkGpznypQXoRjAKYKiAs9KYiA425kPizmL",
  "key4": "62PQRoKzuJrmSPaQ2Dr1wyHY7grT5pkVYa9hde3kzA1PUHVo8c9BeTWd2bQE4Moi67AxzqnvdgyuGmwokiPDfxm1",
  "key5": "2X48YeNWCBvJSvFAZbeM3X6bw8CaDfpKmc3BjkrLas9M89Kd7mKmK6UHLTtQMTVjVgDzG5GJwta5jwp2BLNHnQ77",
  "key6": "4wgzmUW1oK9ZAkckhqkx2d4mvuCsABeD2WHieWibXY2J3pXcG2jfuAEgyChpb925AxmCgADkjM9bh6zwJvNbmfdk",
  "key7": "cNiByJrwmuURm2cf6Bau28eKeWkjRx8uM8xKgoTeJWxoxaSc67VWMtcEq1PktL6u4uFUmd6bWyHTwLb71CzcXMS",
  "key8": "5pjSj5qMNvLTNWvsJ6XwXEEJ5Y1sqz3PZfhi24iQTUZ5kQzojFSAbAKdpijSuPQnXbSwoJiQhCnGTkFJuVAqoEDr",
  "key9": "4k7xoGfy9mthUhKnpWNTpnFk1f95aeBF6DF7RfyiRbHGXCoYipVyGgkKGi6BHNFrvr3K15TkB7gsiGtGjWKKRXhC",
  "key10": "2dv3UnE5wyLvKubN8gou9riG7jpFiE43fFhTYKZdLvKRa5jK1biF5P2B6Uf52JVZhTMbRt4tpPBpvnoKto6jkQpo",
  "key11": "Ej7oyhtr2pEpthS9qVxavMoboGoiaViCqfUbuf5RzQSBvrq5W6cjVB1igSWXk77NWt8b9hznU8FfpRk3k3wLdKM",
  "key12": "4sR7K7QRFT24eRToPStPb6J2indCwZbso5w3WT9QrLrgKaabgHf5ffXNFFyjvuYkzJFF66fD5AUHxJk4T4NEf5uE",
  "key13": "3oxGHmk2sb8YotSoSQKnP5Xs1fFzRcR3jjimZXQptWAiZ4KUaeiGYxVMZTj6PUMbBCoUNQvHQESzoyfSJfEwFS3c",
  "key14": "4waBdRWj418G7mYaQwZ8YW2dRnouTMqS6b2h1jk36CZQibubBknCSGHaAA562qhuH6D4XF5kTim1RecQAp3ehBFD",
  "key15": "2zutmfTq4P7bQ1UT8jNnxS2xymHh1jufadveRW424LnEhux1qz1Sp4TfNYAiQLVHSPc3xkwJMxRTxKApmCE4G3mW",
  "key16": "2bw2ub4Y9iX2BoRvd6p1P4mW1wVFEKvTJBEujjW6QtUkmCu1fQGkDa3eGXzSUZiPDQNUTZsQB5sqgd1kvNKT2bKd",
  "key17": "5AnVsh8U7Bppq17iAmmnFNiP5bXBYSuQ25rp4p1ym8d6MNurPNgvzFSV1W4e4MSL5jnX7457QhB9eWaGzhyBniuR",
  "key18": "4Pv5Qwr5enGkWc2m7yZncYXD7au4eUKpKP15vFFj22dYu3kC8E3yzHYxpmx4YRJZCEpdMeWxvdzsVn64WdCRW64F",
  "key19": "46pvLnkz3CAmXRj9RjBA2SjpaDCEZSkgJDV8RkPh611tSY7ZJKJRv7f3N9TkV2ibs5KCxERPM47MHNLuLibr1GEX",
  "key20": "VSLBwV1dcZV7rL6EdC5jw38ks1FZ14EcbeizDZcnm4LGKbz8oVe4JUaCoprcekL3iQQeNs5bktNa4fn21cHBv9D",
  "key21": "3UY24FUZKFrp6VTa1jfjG6h5zsjiY2uM7aaPEqvWyNQiTb4GcansQGprYNNH5LPzPwRJPJFgBC1SDtJHdj554t87",
  "key22": "2dmTHmDeqc45bqN2q8XxUT79k8gGF56PVnXtt324XhywzufixLUXFz5pWziEXEn9Rcmerm5m5uZQxuuVBB7TumYg",
  "key23": "4QFv5YyDJo632t7cE5MQPCnUeTEVK6YCfvUxAerFpXfXvUCKmeeeXSw1EM2uwvCsEAAKakHHwrusW42qWmE2e9FN",
  "key24": "mHy8hpkN2Apj9eSDgCjJzpGJ5eGLSvuvMU7bVTf3rQ41AWyugeh7A2PSTyvvWfoWFKaC3gwNTBbgHCSC31WAUy1",
  "key25": "4RYzyqjioLAvsVvYc2Qe61rVRUtJFhaxdy4Uebh4YWHpPd286Vt4YCTJ9ZofMqtZAbzp2PKoxy39bZGQvqRqjimL",
  "key26": "4HjMz6a54zReMm9yQMnKYiy1DYhG2zhqpqsCvHzNb7voJEKtJBtmMmcUafMC2XSxcTPU8wErhRZabpsb7FkkTT8B",
  "key27": "4jgAsyUnggo2udNgpCrJL9xYLJhJCx7ZF6qrP6SH4egSTyEWn5JEyNXSAndvWdtPn25cqpqzw6PqZk4AT6Q71ZYr",
  "key28": "DEqmZfdUVFjYpAwgSDXeBW9GrQA54srkjZVKYLjphmi6AeMM6HqYvqYUghbeZXTpcvudTZXHrRmCHyG68K5YFPw",
  "key29": "5NSpKRowG55CTgruXp2LyfNzY9TkvtgXXLX6PEFapn7bBGta1poLSw7nVKzfm4tXn1xi3Y3reng8i9UhdKgWwvUY",
  "key30": "2UefVBWaSNBp23PUPZjXPwxPVUN2oE1xg6C4oC8As86tiAX28BGbQUCA4M7A62SBp4zsZutxqGExpBqiVQwU63eB",
  "key31": "4ZEmGTPZqG1LfmBv331ZxDcfcPGiWix2dh1xM84rz3wk46seuYN5zVuGB7KnttdMgMbaSXNjygpGNsNMuyPXfQxM",
  "key32": "5cYe6gzDjHgQWYNwGD1wtKQP1MLPL9NJpKCQuYRE3SE45j9XC7LEVfmbXN7BkmCGViwMyLgRW8S1E4wsveZTPaKd",
  "key33": "51NG5jDNdiYFV9YXrfoZcs4v9MDTWiaMyV7wi1tqUXRubd5Hf5kYkNk1FDamRJrNRk5fUAL77pbdXGEAMq582Zmd"
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
