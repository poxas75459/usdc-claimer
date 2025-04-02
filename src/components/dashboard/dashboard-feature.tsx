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
    "62jc9AJ75fbAuqb2cHMCuQyi8qFio9s13RZYysXD8JmRBdaMuo2RgLMtQaupCAQSe4DSgYvhn1ioSUUrYSZDJLmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43kkBLiWtoYMaVw4wxJM7EQNuiXNuHdpbJUDm7rdzp4gWGw8FdK2rtAsLreHoFrpzwBwE5Ko4eo7V6NeLWovdkJq",
  "key1": "bEqgnkY9PEFSxNrAexoFfFw8AxV5G5iQmRwtE7LmQ2dcLb7vujGgoAzLnqgAoPtxVgq8cLwCRpTTni8q5N1y9Jz",
  "key2": "24yQLwdTbXjTZCWKTCmTrYPQiqceJdrAX71nZJwGhwLicrQTtjRH7Bremq6w3k25SCiP6XHcpxDbiPtoA9QoQ7TW",
  "key3": "3kmmhRsspF8h41ft3UaMJocWTMdrUvthBYfxNogYjveFhmYpnu1eRgyaCPxAJcs7Fr1nXDGpAnJgq2HT6Z8rx9AP",
  "key4": "dkxDqyspEBDh1cDrjSkEeDQnCe1bETVsnsEnE8viMU5yjNEfLLUe6bc4HB2z5guVbqgmcoByR6dynPPncDxEqNw",
  "key5": "3booHXKVTTMa7WpTeAehUMsZHGDEqTt6wQBc9u3AmbLGTJ4Rgm5zVPcSP1bCUT3m1LHq54uCR9uviSskkooHbrEJ",
  "key6": "5b1nP4Dd1VaejnEESLD5PkKoUZTrhX1ptk7UuRcrSEr49YXU9sdZVZstf7Aj8suM26giefqytAjCsDY6JB63Whn",
  "key7": "Z5qw3oScxNfgViv662yo2x51yVXYR3eqGvbVWFnQ6h3B6VMoBpe3tBn4CGEyewKaU44apUQhu23Y96GcFsPjrqu",
  "key8": "3FHeTxZHTLYkrAYpvkLp3XHJGBDiAgReMNHtGLAZngGpEYypGdGkqzpg3dmgLPNVofVdqVKcC4wWmsJAStLEmKZK",
  "key9": "2zxJdVjub77swcPcqbBZfa6SAGCarMS6QreBrn4ozxBnMY4Tq1FcsSiVyV3Rkm7hTaU2HCLYw9Fw2eC95RFmZfhq",
  "key10": "3tpsGFxHdLrsMM7aG1Z5zcLoRiMwre1NRNtL4eFF5kuH5pe8L42542GYR5F6Cfusu9hU9YpeYze2MQTQXxqUkkvW",
  "key11": "27eruS2mYbDGFB9coATkGDVWp7RvExWaJPBRsL8gRUAyPjCqzuodDtL4YkKXyAM8QL6gjGFiYoDBpzSnK1JFf9Rw",
  "key12": "4BDGGtXe9fqQpj32vweAJ6pax7QQzAn34xGatiLXXiUaJk7TpVHzuAoNQsmhEhJor56WgnYENZ6A6VEkQuKBxrHy",
  "key13": "5cNwgDv2iAYbjCgMSKW124a7cUNBGCYjWx8ceDrxgGSJ1zzxLKD31NMs6Wm4zoRDp7vuh6XisR6nixarWoPbbupU",
  "key14": "3ixn5g3uo4NQjh1aKBMQJWYbXip7HjvEAGsTXU67snyU1wB6uB7EponRDjGKskUwgPyvq4qbm5QFTnpk9Xhz9AnT",
  "key15": "47Adenb5ErVHH85qeQMiZxnbiLDKorGfuzyTyNXriWNVKoCo343CLs1Dn6VaDeZdxzcLoX8LUa4PoG8zjK8rvW1w",
  "key16": "5ULBBuze8oCPUZVQ3KE7QpTGaG6vBGJrjsufZPSbgKs4WicXZdveFskJY4w9u86by8Tt1wkVqoZtzX9T2V7DBnWP",
  "key17": "5cNQsFzpzdPkXxPxrVZUtqeKrzcCSmfZshUgPQ5vwNmoaBsC8s6NdpNM7sxKuKLYZgjbPgyw1o7RAbPSxqBzxg7U",
  "key18": "aWhU8UaZMquRMJ3P7P2nBAobtDdcQ6Yk3ffb1QhcQrWA9G3fQzD32AkAzxmXtbVBdQQcwX7gvkRbxGnhWp1tkiS",
  "key19": "3ELgTUUXKoYc8Xnnj85L9iadD48nqRk1Hw2b92aw93ymyun5ttBHAbZyrgmcUKcg1Zurga45qQe6U1usH8SMydw7",
  "key20": "3WANjgtBztB4jHx2VM1QdzYePf8bXZY55JDvkHkrqzvgjvBbfeui8yJxhYeY4TCFWkZCJUERXNr2zXaWHZNeJaqk",
  "key21": "59UCSHiSaDJgHSMRacfcGnfnP63FcbTqeQFcMXRUAYBzDx4t5GCg8CJxdzHC7nHtMYYijL3hkoUi6BN93yXEPzs8",
  "key22": "4UivAJv14RoRdASe32s6CZFuREUExESSNpzAv4CjV7AbazsRYTBFxnXiXqRqcra4zmCkvb5xbJUxUp7nQArQGjQE",
  "key23": "2P7VkPxdzhqofz7un22EQfjJoowi7KotbpNbX15kwg6y3jtLqJ9FJK3xMJC23cTkK14Xw5U4PoijneRuewgp4C7J",
  "key24": "5ns77p1YdnFFWG4dphCp7tEAAHVC5PYwFf4HmP9X3zrqz1jEBFyBjtUXV6tXozE3YKdJkFRgb7NQhQnGQctwus7a",
  "key25": "66NtsYpQ2ZYRnQaoqqPTQg1S15PihuqNqwsH6cPBAnV96rTbaaHzmvctxhjSUxJMABtcFFJnR8bbhtftTF5wuvwZ",
  "key26": "5XcWEjNHVeEsR9HgJw39njUyoLUZcj5j7NZEWcXpjgYQk4YnfYEAhPZsBvQFgcqEVcarRbkZMsLS88Ko3Q2KHKJ",
  "key27": "4Fkxq3zCnenQA3ofqCaZkm4PAjopcX1VTmcFhop5ADTXjkGW8V6SdP984DJXDyWnjTVFa2U992SZfrmsozgXpyKn",
  "key28": "22udLBhvauby9zyqPv5bsiRyp7dhHersobUimEkDs3vSGfyj3wgjXU6xuDnpZFbKSjjbMAj6sjZqzxd6vp7R9S1E",
  "key29": "5FHdV6dfGB4fv1B37tmQXBfmd3LZQ2qwM9jtffEJBgLvN92MRuHLv3nvaJDPSkBWpePiRkZryk6C9SNyu4ELC4gF",
  "key30": "nBaCHsRBDyse37W9VyyipGcJhktav5X4rik7qKEn7BogXxizCY7GnmADqShrd7hvHQ1DZFwoBEUcHVYq5bH2KxM",
  "key31": "5vqNdDP8VNuzWM67EuY4Cu2FZAy2mcALJnjhVTcZe9xg8FiSHguCeyW7dQTwm1XF58TAFR796kGkgbFFja26M6S2",
  "key32": "3vuTLYX9cfiEmjcCKa4NgAWj6BtmqVSCkXCTc1BmuobdvJSj3VJddWPppyGJR5p3fZW1nYkPuME3MU15xtRJ9F7i",
  "key33": "4vXe6ne5E5Cn1gE57rMAtG5EvPvncsyn9AC5Ft1Vi4Jn4M4Z6rRz8jM9mSubjot4e8jxiDxC4BocAY53QE4mLbc1",
  "key34": "h7Uz2eBTkVnqU5vS4piNSQFJwqUvSAUqs29V3dhMDFz6p8XrFDZP11NejkWisfw3Bba4rJdvotsjwKVgw1k6TGn",
  "key35": "631jKETW2sd4BESEr1dpryawtxg415Hnp6e8dGsGpvWAfa2VpZdD7tTWEtGYDJECWw1ThKM1hY5Fj64SLC5YSuoj",
  "key36": "31MjRNJZQsxE7TFHjN2gwKF4U3NZUMAhVPnVdPYw3vatx4ekwiD1PnyHtsvmQsBpEJ8XPfJcMUh7XV7c8XeGU8a7",
  "key37": "2vvMsggMQ96yU8cRkfQ2aHWwDHbuCiHEn5JCbBgc3TAR14NC55H6kiFChzDJGRPopmR4r2b8U4Qpdte49t7eD6MR",
  "key38": "2pZE8oNkN1zr3o9X8eQjWgDkHUQzfEj9xWAAT7XEJCouetptPbMQuiFPG4MdyBRWNVSmCAnewfKrSYZdK3FTe25t",
  "key39": "4GuwG2TX5SyKRm1YJgAMYa6j9eVrsNNrvjdsEb8YQ4X3JPVqnmXypYR41LR2upGmymK1C4U13DoeWdKWc5AQ6gJv",
  "key40": "2hWUHwWuz3etjJuJhCAxMydBhgDFz9zmLidmVfn6NCdEi8Ek1sEpaRGAVifH6mJ9bCfQT5WDdVH7Jbuhf9gpPEUY",
  "key41": "2b5KuEPjg3Pqbn7VXp4h4fNikrmNzJqfxABFvw7oWDmGEuXYT5qNpaNL7jaJaZ73YD1k6UZVZuKdcMvrgWRa2hXx",
  "key42": "24V1UHzEUj9C2qDhEvcwq48oFL1KhntEPtcGLiAvHy1RkqYUENrJbyZLGNqKNs688J4aZe5VbStwKDmF7rLK9zCi",
  "key43": "9yRXiMxJV1J5ks895ZCwgKm93KAN9avVq4RxYXc1tBVw8uSeLBPVqtAP4TGtKU7nJP9f2VYge6ckVNMes8dW7gC",
  "key44": "4foZd4MhVxFExx84s8G27E1hxgK3jcUEwc4btkfQ9YqG3bnR1RPeqyhLi3GkuCmnnvE8oWTxyx36NZq6FTRa8ANY",
  "key45": "CvEwdonQ1S8Z5KMxDRdgHfbFb3MP8wjN2AcHU6qrv7y71VW38Ng8z4K5ytiRMyvVzYmT7TywdDBPUdybvepsgHs",
  "key46": "5FC43XJA4xNwMz61b59YqtCs9hNkRxCAj3fqYrdyu6cLUee2sKEkZhfPes4kyfYoYv4vsaBuHaDhjJbWC8b9wWaj",
  "key47": "4KrNByFmxAdP5ap75YJAVUnLyLSkzYLgocj2XDywEmjjCNh3wKGj7bghrGb64MecxX8GDLotCpkB7wDCoFb8GJzu",
  "key48": "5135gxEqepk59oXqu2VB9He7iHRf7TYmQsXFdoHoj89r48JocMpNTPgW6qVfCnvCYk2XcnnPNnjKMd6owSXnxmcN"
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
