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
    "bGVUtrgNUZ7k1UEAsF2FHM7Jqgi9pT4RxpaHELmPZ8ZUVBGpgFeBsJ6cTWLA1rpvZBi4p4kAF1osbtxWawNZuTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38VcCYTjo9nwkbqLh4FVx4EbfLSmvotLjfurqTo8Ytra243joesZkWJZ2Fqnx1L4rLf4ZEQftiNnBN3EcSHuYydT",
  "key1": "44mnkYzejqaPtZ4TuvGisQckyNEHb2iKzLVEaoiT5TX9aAXBJ2qRqof7zkBczzQfrxH4HJ25GnwJTdSTxcB8iUcx",
  "key2": "51Z7Hp4FBAjV8Ta8jXthg6LULKzPN4k6NNRK7NhgRxT3PE4Tn1Nu2H27jitymiJQPLZx9V6squWydaLGn2jwoMz3",
  "key3": "3BHLuEMDCLGr55KzoptPLPKb237xjCxMp7AUyu6ab27Gus7KyddCaRERiKNrsCwZUkt9wVr3CKtMXqxKm15JRtba",
  "key4": "ktFogW4V7waJ8DnmbT7tPgs3YhJmWJdtb4PaMzBHARp36RTsiNqXueF9YxE64Qj6RSJ6RznWZNmW72RDY4YvsNQ",
  "key5": "82C5N5PGz993Ws2syzX5zd6VoUSh5r3VXW7faQBEjQcE1PKsSyiHyUMHuUPvS8EJMQQh9waAtqVqVifsWYT8Q2E",
  "key6": "mes46XHQ7BMLWMcT7PeMSXSkprMEHdHFXustc398oVy5CiXqVX7Pxfzro9whtzsqyCwbKf1ajv41tPZ4kxV9HPx",
  "key7": "8wEWrAjXgV25EnP1b5UZ8XVsrrPKaCwSres3aFcHzVGdM5opwj4rM6apydespNa52MUZr4NqrCXB5RaAbqYZweX",
  "key8": "PfXS7YZjJDDdbGADGRdH4CRvzJEiSP223VDQbRP9qvNxNDYJnHmiyLFS3zX4kzJqadhNaK6yPFSVHS3mYSmB7Fe",
  "key9": "63wQGFSJjyBHEfykeSCXLLp72rAgnMf6HWcvHeFAvzTKdjddqrZqmMtGGYxRzvbCMo8WcwnGh8SUZCbCMpsYfrRY",
  "key10": "67UvJuL5qq9uTPEL4RjMucnaN2NM3xUd8DMWv2Sm4eS85MjTAhgaQDsGrVcHmvPGdgX8rEJoFaHZbgWrYCNXeBF4",
  "key11": "2dRowJCUaUPNVsWzwWLqC1UgWHfUyQDuSTva4C8FLt8Zynenr2wvfSK1gBQEH9EgJzWnMiRWVLqPXQE4g2TWZaUJ",
  "key12": "2VeGPEgwHiaPcRyGR2kZpb1UibqpPF1zuiA5ZXVpoheZHY5Yere8AxTFzEWYYj9j1G9rD4jAzADgrVsLvbH4ebzk",
  "key13": "3egYJCMHqyAc2wA88qMisnXnFXThfkTjKuEnWNCoLH48nf1M6AP2BeQb9X9ZjtjHEWx3S25KsqrjsguMFGT4v5Ah",
  "key14": "3fxx7RCgAs5QmZWcaJtcKVVTR6zdhQzDKVi1F3Xp5imTo78iYkKQRAxSeDAMJ6pZWKQRWrEmZXi3ACz1wUn8EuQs",
  "key15": "C5WzTAdh9WEGKvEGVCPctMXrhvsJ9WzRaoJJCkEqwkB3fo9GTjK6hCUfADJkhR6rop5JWMNgS91uFF3m9adWGJm",
  "key16": "3TkAmpMXobJ8FseLf6iGEuC52GtWqH4cuQEUTWXE98KASy1nPaVdj56qK4TvRu99Mo5z58SUXtEY8cmXDTP8yC9S",
  "key17": "3gijdewiXRfK8ygtk7SsqwDLTb9hzgTxvBZuBVgvQn4qLn6tBParoDw9XqfcmaS4LDGG9oq12RyvxoVraSm7aPsm",
  "key18": "62oqwiYSRdbjrVu4UfSew44jSGYee9M9GuaKpH6BdYYosJNJkyx68fPsy1ELVqrVoaavZJWbM8Nm7fRjwAmhNd8p",
  "key19": "2JwHkNmaLLqqmDURKFePhwzjWmHzLUiAuGrKLh85ZUJj8vRM1zxAX4UzECZ2DJFMq3aBVQP2ymugUgXRiRhbrVQy",
  "key20": "122ZcPdGjveM9HcUo5rjUPHAR9VWnrb26jZHnPF6BDXyukpv6XJUz5EVsKGVbzXdb5C7EfBiNmNEvnBBmUk3bQpW",
  "key21": "2eG41j1hCnAJ66W768qz8A7YETnjE1Mzr7H28gSqZJQjWjG6Z33fsBkBh3wiPPxLmwdm3GX9kT84pfia5R446xXU",
  "key22": "HajDz6mphhzVybdiNFqG2xdCyEbCyHy57LcgsyVCUsEgcJiQqogSpVMNEuTVP4sHrSrUu91YqCSe7dBVFRtkwwM",
  "key23": "3FdsHkhggYuEySHPJXjorjF7UAR2cft86m7amaVtxS6t3hzava31m8ZKeiHgDLMCSZ75DHF8qeQrv9DdvzJiqg3d",
  "key24": "3m2weUr4FtjmJNjYRwg5xEWCgkp8UpHWPCAYHkvN8UY5yYTgNTuqpwUARUPAcbnFURWxRa1L1hWCPbDQv1Ng6Bbf",
  "key25": "48U2QzFpGVnrHXtbefJEXq8iTUpzV2F3SUJ3VZaxEY2FXGG94mX9EEcAAXUwpwQ6kYCn5WqTZA8inZ9rMndE1ZuZ",
  "key26": "2tchoAwy33qY5yYw44u8DLrxpBdwjUjAN7g6imx1H2CRDfJK1fnvX9qzNuCKLWRaYvYx2PhKBXGmXKUze6H6PFPq",
  "key27": "4eKHWxMDC5z1s79Stb8L7P8LBoY56A4Bjj6MxrXTWHYxDoJAan2P8kndusVCFDqWBVp41NHWj3Y2nEbGKNF5g6Bw",
  "key28": "S7JGQSySChgY4kJzz1TWhx6sLXQN1tFo77syz3kxGsMdYSHpNnsuxsugWyhrTL2UEDqEr4Jc8BLxAKq4X7ctQ2b",
  "key29": "5cWuNciafe921sjvZ1wWZzKBYhNBHxaHdx6hRbCbZ65svk6imNY1dahNn9Wriqo2zrkTrVEUsf7dAS57REZrzQGi",
  "key30": "4V71j3JRf1vzjVXEjCGrViMfodecdST3dDVNgDfS6qLKcmocJte9cBvrLQSoch3Qp9y8CwniJSsWSmGyFiLbmKtj",
  "key31": "C4qm3a2T15fzGu4hoYNegvKZuFr85ZUZM21eHfuVnK4uy7ykL7iVc1U94benTbDw9oVBM8dVbQrVdgBktLUDgUE",
  "key32": "64Hn7pLjJaZHczqdCdvbw1EtPuWiPRtG9NwP8o46EvsrvJqatJSib7QxoatvWB9T198Sr6LPKcP9aZuPq1nScKqY",
  "key33": "gcs5Gsr2JAZVrrzeKKrwv9EFEh2eGt7CR4FQXkM8zQiguFXrV7TZXgD75NFgHioUM6HE4qRbpFdMGFAujFpWois",
  "key34": "48UbwuCCfhhWJTNLLvQcRFRUpuRWt8e1x16gkbJL6G1HAtLhpcHNXBfZ5aW7Mf19k1gFfMGUKtVszW2yE73sWqgc",
  "key35": "4ba77ZNrVGH23vtCaar6NsKibdi93dYh8srmwV1HMSHdPp7ZMZt3GavA4r66qYLZp2WbX5uyWSiAsSP2X5XtNDWR",
  "key36": "4a9bqWaPJBo5nE3LdZs1GhnMaM6quDNvqKX78aRhXAXmaBsn2zAwVHo7DJ6UR6cXiAarS2fUkoGwJ4jcFCcs6eQa",
  "key37": "3DZyj3ho2r7SZpyTiz5Faoqd5yhS9dhVmxYQnzr6ecfzQhxknW8r5BTE98ZC1QQD4MaKKqRS9oSoXjJ4EQ86BHaR",
  "key38": "57YJ5QevsEr5vzs19oN78xxQ228Ex1xM5vmcsRyFfe2K5Uqdayoosf3r5p3fgP6EeG8SDFAoDnKXbpoHzzXWTWvj",
  "key39": "5EeJYYRRNFeXRCbzijjFnGyUaaq27S4kJxhLi1b3D2kW9F8CxsaCRtUUK7pc4xW9HwpDSqqWVvyoeU9PxmUz3J5x",
  "key40": "2DM6VX6QJaKnM8fLF1jwepovcDotebt4sVvwyvavUD42HJsZNjCFhaDDAsXQzmVvqBp3LSrE35o9zDQraSzKXJBv",
  "key41": "3MtqiaHnaLjQzikwUwfQ7kzzq7denVML2Gq77nQxbYhirKxxCH8dfcssBDNLbMb9t2KMMfCx1Hx7vM5fUUBM9nTC",
  "key42": "1y8iok31RyGWFGM7FMupHt5Ymh6RcRic2RXttzdf8HAA4ARroipUeZ5rzUQBEyH1rywQsqykqdKTVPs6Ty1Khx5",
  "key43": "3f33YE3jFKoRVdgHD9o3fvCjE9jFF9kRx1RoA3V5yNLfWAYBqoABPW4gyQMN7suuT88fmmn2rPqddQiQuvYBbDCb",
  "key44": "5LrsNbCkkkXbTyakqBGCvkb8CkvxaUCMJptJmsccTCaB6ZdwTexcXiMvZNfKMSqGs7DhnVaVZhZt5meQrdLZA7BQ",
  "key45": "2xVK2MYMGUJfyNvycdDjJauZRA5jwx6Yyrgtx9GT4Z3JYjnQoS9xkSBCBLdSmNLGFbEVr26idLy4xCpBWwFBEVPB"
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
