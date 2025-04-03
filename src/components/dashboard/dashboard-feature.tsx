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
    "3M1U3FCm9WKEFLGvFKaR1FeY1jdvNTzmPpA9McCEtMsgVzZGp7mFL7E69zJYpA4S5JDo49MChxnv4EnUmeLxPWwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DWHjCUNihyg3ue5W6PYF5tbMFrQGARFke4HxhH1GKoJDH6WiKFZvmEVMtZa2BPvRYqxXKgmqewEuE2CBGCMdNaQ",
  "key1": "3aNoHFB6EeNAYuAcxKzqznG2xp6WsTCr5KMzjaxH823BbopFZx2977dZasrHaPNacW6LuMc71hRTmGajSWLK6zyV",
  "key2": "5kZHyJHk1vkFpKFhDxLTWP1xXuLbcLkMS9P5Br7tveUfRkfpUSihPZ3q6tDxjk4KzyXxJtR5pfcThDjN3KLe1eqP",
  "key3": "275XEnCNiJxF2HKVFeiDNcBfPJZN7fjCLPSGhywCmWCWNnBuAXHPHNyVNuoiF5jdPupoxyTecuEHdhXumzU4HHmG",
  "key4": "4uQ3sAULtBze4Y3opkNn3WRugWafQh6iYiids4tWRfiDCAQLJgGwx43Uxb43U8uqodRX94KzVP7ppKCMHetdgXyo",
  "key5": "5UkMRAPfuBcSZHggEvBPbzw9ojF7Azoc6q8E33tPWqjKu3jTN6PFj5XdoY39cKpudbAmbVTunCpcrYcmukdVnHar",
  "key6": "XbYhQURdiX8u2vkspnAVKngrWgWe9g8au5dW2kmLr8VzaFN4JhM3vAJF47GNwKMCkicG1HXsGiUmhZHV7Pd6NoB",
  "key7": "28A3K6JFnG7jtCiGgNJZSqoz4CjCPZy3FuKZgQoPH9qaEV5Q1uWiej2q4hToA6vZTPMCfhYxAnrg68FEZ8yhySBz",
  "key8": "51UxKQCRpyjdxNaEe9yQALik2RxT5eYiJRCTf8qLXT2fjsftXExndtd5Kpnd9JQE3CrAVXh7HvY4eiVP1nEXZiv5",
  "key9": "5GHFASceSnXDFsavGApa3oB2dduyCCgF3qpuPvzaPUdLgH863MRmsvT5vJJVx4dmJmZkSyj1UwhBycBPK8WCs3bU",
  "key10": "4YjjxjauQx5n1R6ovBJqw9Gw1a5Gcn4wuhGrAviRpe87zoZCNhmGj54xFbTuVPrggPr8zAn7cNCmdzUUNgnGo1Bv",
  "key11": "2oYdVdvveiP7njU6qAjAVpGjhkwExxNoSX9EPFqqK1uZ8dRSv9wrs1cGdBgKq22TCAo7wCQ9phgDJA3Mj1M8m6sM",
  "key12": "9ddJAik2gy1bwDJiMKZnBwesxT87YoeojSSHuKCarnCwCLL1x9UZV1YXRbv5btGrECEJjNrfagS9QAc4A3BLnyD",
  "key13": "NtVyjLie9ej5bF6dy5v39TUGXJ1SoLMBini2c9kpKETNo1oxqoEET7b6uQEQkkWvqjc7Zzrqa2dtuDtJwdn8gS5",
  "key14": "5N4Gsgs5vTg6qparatzpANeDXZ4GLzRs3VppuhpB13jFHiCjeLDgc85Bq5wnY7p1G1MbQs2Frgwjn36AcFFFeue1",
  "key15": "5YnWxiP3bbd4QxVfRYP2nGxsm8ow31Vii6MAm8Em9fChSh1E7rBfeuE3nxWBJyXUoEXVUyAE1EghzcVUnhVyvuTx",
  "key16": "KMFwxSPooGXdSzmsCJ7uRxSzk9ViYFQYV1QdyyHBrCo5nEPPjv8hLsdfeWq7z2tTf7L4u6MoezTCQ2V37jUXkUE",
  "key17": "5XnE5nvWXCrtNr8ZNcqokpiNMuFmAfGRcC9chX61A4QA8FoPAjN5EYLyyZAH62dWQVEQWjWe4HtteJzkUmQNTfCd",
  "key18": "3ppHEsHMwMgrLfvnXGurGG1Nb76rcUUW6SyjMVmaVX9YbCVffCkHPoGm827rBQ7TcEBvPaUaAN24ZgcS2DiAWUb4",
  "key19": "5hvvhDQuwWAas3z4zLM2AVyBrhVuxpnh6L7hM2Y3xR7oQJV23chi2EhAh1ViF3Ksb9Nnp3fyjgJfA8fWYxJXXrmH",
  "key20": "EXkk7FgmUKti7tq5vg2ULfQLfnP94twe8t3i35bVZzXZ62MDFabwp14Y1A4woo1TQUtBtecHSFT7eRFmD7XB2KP",
  "key21": "3tYwo5JjPahAHh28cY514GoFgVmDnZopVEjTjB36GCQgxZW55oHqzQPF5kKmX6QdwxWBn9nUheKwAy56h2t1gtMG",
  "key22": "3M9jcyZi4zhALbSK64imDChPsyZdpopVQHL4hB1qT5wEuPoenDUsQHdmcWxgSRFTc9vV1h6r1PTev2PSddQTW52c",
  "key23": "4usZ4dwt4RN7WSx9VUdgAk2GnUCZWHmWkN9mx2X342fSRGotLphNVrMu1FmZKiXv6SYz7VmEdyTFmQF1t9VKmcDs",
  "key24": "5nowgxoHqQyB3MxGtyN9JYHNxhdDgfsRHmDzg8gzqQfv7KkCpSDpUZjtrSNRqPvC63wCU1UeRomeVHdZVYdrmGtj",
  "key25": "4bR3LVmYqm7fHU1AwBT84euZ2jz8ta5z5nsj4AzxXn5cdri3UPUuxxkxTMbsT158n3EoQk2vUZgD5BDndHW5GSVZ",
  "key26": "3n4vfgtUi5VUZ32dxqScTj71T5ZGt4S1E3GgJzJzVgQm63Bi6kF8yznPyEF9R8RgcETNaTKm2LtSaRzB11Ax7pN9",
  "key27": "3nDLEkynmVX7x69wz5xMPt9ckP37apSQTKcYUZzu2oHDie3bcXzXKsEXkp2PDdsqxqvWLHPaG2dLQ9LJpeAXvW2y",
  "key28": "2R93KhJjMC9qF8g2WFQm9JbmFwTACjAm5CbnGyE7YxvuvCASzUTSxPTSaw4D8HaWahjXMVukBQA88Nc4EVaEP1hs",
  "key29": "5RTw3tGGjHHodZG62eJ5W25pp7uTiNDcAfcqKhbyKjDksQgsJPJcGrTBeufcgejYdbroPthpDaavsfkhdBeZ2rPv",
  "key30": "2am8beHvMMbHxyqDRfY51eJHqqwv7SaM3fh3DvYrxGCE24U7cffVjk6jiqRnn7VH848CqgjWrMx6WPkVafxeJLdH",
  "key31": "5BN6K6qwBizKAFqYwc3Dr8ZQE1F9iedsmsT79Unowi2pLX2idhNxDpCWo3pMBF6MnSVbFWYXDckGsuNLX11UoAUC",
  "key32": "5zxy8iickQiTCk48XMhevQbYeX7XFxHMwkxN5egGEvfv3e8QLYut9a775etsofZuP7QwykZswaeqBT44r3DguTgU",
  "key33": "4nUUG1ceu3LiKRDQuMERQisshWTJMX5CiVNz5Dmy5odo7t96UiUuVUH2ddNMZ5jmLm6DNFtko5t1BrZkYwej1rya",
  "key34": "dJ2hjGmFvRTxCif1aLLVfRr6gqzP3T8zbMEMG3ntDhj7o5d3kgLHTFXhUe6buGGQD76vyV1nahjy3noh342dpzY",
  "key35": "4vWWj86HQ4wRVXAEUkj3px7o3tbzf16yLrx6scxof6Cjptr71kfHHTyv9siLdkJpSERBckiemqdsKrFAwE5ye6gp",
  "key36": "2PVMdiTzFmYobKNBf4ZmBXNT1eYLUkS1k8ke8bgvtn4mUAv3pxBsPiZNTAgV7F7qhiLZnYU3AadTtA9HJA7keXpz",
  "key37": "3TehX6GCwPEUGajPTECHoWf4eurJ39eBUKBbsEmH2ZaNSSCfqe7L4rLhGSh3bYCtX2zFM1wyhqTNVrGKbJMVXEzv",
  "key38": "BV7n788xNrnxH6iuy9Gtb3rd8X7YfPPHsap3B8SioamEc6cRrhCc1tp6taXVZV8csSxiWeTXw1ywhExN1HX8jBx",
  "key39": "2U5f9RHXzgz7r9N59ZHaKPwJv7FVykEJkWS7F1twikRyZmcr6UWWNx3Zy7rMH4XeFtbaGhCdsYKuee1SAt81KLnn",
  "key40": "2u48NmcmNFKmGRNp3CAs6R42S7XEc4C5nTFowrsBGpuiZvSW2qSQMnq7aLFGcM4LxtviUwfnBR4u9FqFshduSnxR",
  "key41": "2p8yV9bkJe2LrAcZDXQEiRJ4GVUL2hx7zCobQGdrC4V5JYLNfpfp8EgtWgcn8mkcPiKMNiNWtoZoYdN4txu85EPS",
  "key42": "4HDiD1XqBqGvza3KtRR3UXm7DqM4djF3sCv7cdXyVLXMzd6tbdaANCEHDbSTT2zzgUrLoZLWCdPR7m5PYssYchXa",
  "key43": "5S9FMQMqLKbJjSHp4c4R4kGwc98r1RjQAqKe4xeGkLXDpPDW4kQxaA3D3QwHoen28hw5hHSWJrS41T7dNb29TWeU",
  "key44": "3MLBQpv9goQ15xfiqCd1Cux7cQ69cMjznqq8bNKnR9HZ2aZwUNpUQUokydvf1Ly8U3vabLdV54Un4LPa1ekVtSWJ",
  "key45": "3eif3mN6yQVYYhvc2waj4ouJ3KQiVozFbdZPaeDd4tfZqKipDjmjxdXihVYSBPY2LGPHgzsj9RexDnQz8ea2tsd9",
  "key46": "3L45bVGo3rY9Fe75yy6ccArG2XvmT8fDuuD36N7ssp5QSJbfdp6VCbQE3upvANeBLo7gVkNJPuqhABX9MB6CJX2z",
  "key47": "8MhVvYjVmWJ8hQdcvVcDsBWr4aekJKdNQpGdgAus2toz3Qp2qArQ2PMbuXwZNXQWMaYcdwaNrgGcqiVX9JcHnvo"
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
