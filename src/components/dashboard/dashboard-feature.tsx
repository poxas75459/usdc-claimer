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
    "4KB5LFaWXTA3qRsM5gc4ecrjASpTWa2dLdP7RXJFAyD1QzgWuv5moeLkH9HjJVz5Jhg58mhzNPG32MCVkM8gf6hU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21cDfZLJZmbzFZeMrHdfsqu1rthzLMRWqPdUK2VjXxMATztS57Lk61GnjjZV5eW4TzLCDHNk3uhDV6EADirgkVLj",
  "key1": "4R8m94Z4LinUrEcwXwgKAooeiKM4Aiw1hdmQXmSsZg5iQowZs4Kmu7BLTQFYoj2GYQrTMPjt5dpFfaEARqunxypm",
  "key2": "5bPjGqFomfuUVAyqgzyA3EbrKLbzax1KjjpeiZ8E4FSPN4fGjSweh2PCGsgAy2Z2hTpNv3xVx4HdZD4rKWesvaUn",
  "key3": "47PCgV1FYcQrb5cy7eCMLCZ5nBJPaYJgBVBFVSdCpmCQyd4zKiuDkkjLyuMAy3DDjTGg14zeVbadtRTzfUZDkPPT",
  "key4": "44iR9jpTGkHEPvAfTPrucZLXDXzc3nTwtTdiZB1hbHoKdoLhmjp713GfjpfaQgaL8S6U8EzYFvQKvBkxiwMraSMs",
  "key5": "4t3isWT3FFioKyAaFvVZQacductFxwZWuhBiF71RYPVESK5ToAcepLpM5deFScd3QntsGzexmE8gnedNSEhdjBfY",
  "key6": "47FL9jxjNaif7ghhGUpsYk9g8TgJgt8yYJL4vVYGzqTCZwDpGbDGZa2Juc6WAaeRzzVqWRYqTxHsMbHD9AVnrnt2",
  "key7": "24Bxk2b2CnN6Zmxcjfd2JqDkanBLho9Tbzvj2bVDGaTu3BvPc8KunDsUaG6jZBJCcVtju1e2JHU3VaQqSvameEeX",
  "key8": "5waoozhcpMhkQV6PqVPwQjStobrXZ9oRujZ4h1uhw3KRryzaDTuBzdhLdnDBX6aWeFZbqCaTs9egFYDoLvx4uEVX",
  "key9": "37DLu26oppK3f32VjHkAN7YYw1JvWcJTnjSpdiSi5KmsodRM2uUC2QXwzwtP5eyPH1nz5c7mrNbJWQrni7ndmGq1",
  "key10": "4SMhM1GQxK7ZtF6Y4XvDSmcdiSyDXTBE9ZrBKzWzndqhbGZWgSVTiSvNRARTtTJnyfKqZHLfyz6QpB8hz9rqVrE8",
  "key11": "epKWUpHT42fkLVqi7rpmi2qF2EyQsShMk4CCcR1pHdbPY2czEkmdmwWrWYPwE8pBbmgXFaKycwjBEdTi2p9f6aR",
  "key12": "3uaQxTsvc9R8XH93uaVFMfXYwmn3WVUyc1khvRrANTKpP2io6WodAmoUqWLKUpqRC9HoM5HH8JJQTZmBfsjHwvsG",
  "key13": "6TGDuXFCTh9fS7MrJP24chRt1PNgF7SoMUTsTd3RNDs8BMVqz7AuFrEeeJeddJXFQvMVvNvN5ZT6nwc9RB5cnFN",
  "key14": "2CnavdD6r9jmi3qr6V8Vd8zWMmz7yzKogrr6S9gYBnaKannujeju27rSEMjASjeJBywJccJvVAbjB46GQX3bd8bD",
  "key15": "4Bz1eU3gTzfDyo32A9CRvHz9eU6AD7wENG3w5jRhRq3R2cEg8dS3ptX7DiaVkG8XJkStW4FbAvaffvP6FjMzvhVW",
  "key16": "mGTwVyEG9AEsrfzvsftByB6cxaUrTR9fAcSFGrMDyxSgQYvDMA875B9yowG33zb71NMSA6rsaJn19E3bwuoFKat",
  "key17": "ytVi5wcgWczfXzkzrg9C7QZiCut4qVpxXGLetysewaDRNCR7e9FfJYTSfyiWK21VnoTPp2mgtR4RaWSieE3A9Ny",
  "key18": "5JinVRjtX8K4AukBDR9jSif8J9Thoyp3gYGrk5PKWwiEkGS2ch3EiZova1juZEAbtJXhtn7uSaVJsTeaLkPKGV9Y",
  "key19": "3PJsjBCTKXv9XHhuZLokb3cCfmJxwxsBbBw3zMuxmqd6rmVwNdbRuvLd1q5jmhvbFWcMjixQcoUFgxHtmJrppAqp",
  "key20": "5pSQBMt78bVUaaFiE7n37GqcFTcYF5Uf24hXTWj93NqARa4idUhM8dGCRpqtbmJdZ9St7ccdZumE9ZqsPrzzkvRT",
  "key21": "gfa4iA4sfDRkckXAov2XQ5CNwbRetJUkA11d3t4ve2hFHCig6XdbqEiyk47G6aZ2oof44VeCJUFnPegxQNAx8Rt",
  "key22": "kjHqxgAoqmHc5aFpnHEw5zWuDTD9BjgrPRfnvH9T7hFmUmjHBxWVTnKezu7Sj2ZS9GrWTjyW2ZjzYLJF5tysizA",
  "key23": "4uDKfd2AH3hcbbPZTdaDBbuFKg91YtBScQMFCLfrinvcdtqSnx6eYboJCDBXPeN9Z5ca1zENHqNQLLv86aYftgtH",
  "key24": "3ogzn5tkrvJ6ZrsSwYMKGfsw6fJ8xtz6v74ts1chmoW6XQjowPkXsuF6KkD6V4mL8HssgMDzERtvtzKMoHETRrwK",
  "key25": "5PEGRAxH7cCNXh4Vh5jfmBAWCwaBTNF3AjBUNnPW7N55iyaycUG1xLyy7t19wjh6pP1DfGHnVgB3JqFLNVvDcTRq",
  "key26": "2ANjhLE6ewKUaxDSKrLUcB5QNt5nS2SF7ceYpe4UxP5RTXvdwCcipLfMwzywAMDnzjVykpCpVJSF9j2RCrVo3cjK",
  "key27": "4PHpcUU855QHLdMeJrcabYopg55RA8Ehq9gpC8gNLEKURzumt8QJqooLcffMz4ALgbH5J9Z226vEwv4g7hepd2JJ",
  "key28": "3S7SvD1FzsDb6j7Yd5JYPJats5KPpWe2UDDTQQERdcW7mbqfEdhEKiEsaRxM6975q5apTf7J8ZCn4oQmh2bsNJ2X",
  "key29": "4U6m8pt6mWdfSe7U9HisaCcCQ4GwNs66iyaTvWj1g96eUrmv3PxuinbioJX8JafZoQKSFn1X6sLq6FF3e2mSHt8M",
  "key30": "67WVJDyUNKnrr1ZfRBuFGWXwFDMXvyLxnzoHRyHMyV9UJhWFDhmR6s47tZtwkfDc9igYFoECYa9UoH1WxZfyuQim",
  "key31": "2WaG22oGWrkRc4wPeGdt3nDCYwwBuXEBxvmuxhEV2M57qEUQde42B6M7Exn2v9vjo6u9eDy7CD8iZWiDyAQbqzfW",
  "key32": "3b9ULJrigB1TGRby2XF5Af5a9zS8SbibDQj5Vta7VY3TzRGhE7JQxE5uY6PQT3xRhQMBPYQvHqPEoF3AGYRajuFv",
  "key33": "1S2FPz5V58f272ZBUh1cn2w8hFDwDeQnz1CrpGWqzJfRYKvhrBkYUjirzXsfMiHhe3LVtQC5SNYaxHjL3CcREYk",
  "key34": "25ocywUVAL9aDMosroZzp1yWEz3Yz63ppYErcygSBggn9BETeRedEjFCgKPJyQMgJFb2HRni5gbwBvP2MHtkTvgB",
  "key35": "2fJ2cY7PC192AJTksDktYLgp2oWC1wPMTEYpAARcb1Wp3SwLYR2akpnKyf9i9KXXCF2oSkShbp6B1NvmuFitmKv",
  "key36": "2Ksb6Qywc5NPjW9shFQCjyg5Y6AAmL1pUi7P5UG5fnJF6vi9QreFFEfmPMMqS9i3b7VuGF2cEFz7ujge3wSANjy",
  "key37": "2AmPScF1EFB3WMcVWkqq8zfB5qWN8J1yeTLQWQ85L3zZJjxD3sQZLCxBkjBh86JSwa72ib852yCji3jQFHgtxZjq",
  "key38": "3cFRohLPAzJZ1unRDSw71qqK86gdYggMUKUw3ChvsginYUBBMBMGV3pzSHbHX78HaDBTxAx3DViCAEaLZ6gcgAyo",
  "key39": "5Sda1aetV73SfKXso6g9Q34kCw5A6w3Ns96bXNG4Xyo6PawagUL5J2PxhewQijZLtziKuvYe4yZrpqogdskbMpXN",
  "key40": "vxXXi3ZUkPTABBFCjdJZux2SixrDE1vqL5mreWFA2q49sAaozhx1RuJ9YxCMewPSiFzaVnDpuKjkTf9Bi7PYxe8",
  "key41": "3tgXX7XFaFcXYu9sADDReqvkXuCcd3dEaYBoW5sih1oHa1RBM4iv59qWEn9vWyXaE6D9j3dNdm5nMftqLy3NYBrq"
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
