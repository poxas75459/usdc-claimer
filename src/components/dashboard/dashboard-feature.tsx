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
    "5p9rdTSSwaPBiHqujXhH4BSE6DFsxHZiWhjy1VmzLgEjH6V6FXHjH48qtZE3EqNYWAn6FGPkufo7ESHSYZ7oByT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3puPTSox8Fhy9eXEko199W1puoYfyRSZWTnFK3qHWL6JeheXtC1mGu2mv4W37j9LEJqJaLFUM6keqLZNV7HNkoBr",
  "key1": "Wm2AeU68rrLC9ECX82WQugmxL9B5sLonhHQQD83hRpXPRHMj95Yi5V7Jd3YPcE35EiCTi2BweXYUCoDSouA6z8Z",
  "key2": "2kDbRFvKRtftZ9h5to9QxJTpXwBoAbDUZoHZNoBeaf2aMLdAqR2e4KSf4hWkJd8hcmMkTMgJH89kEt4S1tY4eJkE",
  "key3": "evRqftThageUKWph4gEtwxcqwGhS8sVjGYXQMncodVK8FethNU3sZcC1bSjJNjgBnrZrxaLddSebnUpM563suQW",
  "key4": "2P9N8ihfDZYNW3KTaoAHVMxTVJKVQ3EntWqpgrvoyUt3qFoFt8k3JNaHfSi9fxW7WZJ71t1ryzzuWCaf4kBrR1Ri",
  "key5": "2dxsAgkq79Lf5DL2uUvw49CmsAQhVjkAu5ta7Gq52sWYgXmQDQvFpq88SyZZBmBTLdhwXnG6pqsjR32bxDLWkfxF",
  "key6": "5YfZ2KsuyoXUJxmY1xG9HLDpN6wN4J82deJk3T2y3jcFgmuLpVaXRSSxWK3B3ECmw6CXZASV1jiKVzSn43EpBzZA",
  "key7": "5VsVmAGfnJAELr31dvdYtCsdMunA9fba3VKtAZPHM9PPw5rM7J2QB3S3dH4ube3GRNTS7ie5a2iXT3zaQ2YLNM6f",
  "key8": "mEhF75F9NzNg7waCZe1rsgBW39Rv3maNcGy7jTW3Y2FCWeCNomZUsqarnMu49QV9fnztLjUqTcgiZzgJNHySAbr",
  "key9": "3LDhC9n8Bh8CB9qHzbTLbBGCGbFF2h7X1yuiKaqf1CceK1kaRnj6LrECkRjinGEQUdK3fW41EqESDBfskuWeZf92",
  "key10": "25D8WppNghyH5eV7uD2pQktFZdPeHsX5df1wbVnHZjcQigSovpZu8vvV6vLgCzbyJ5TVzS6QS2t83fFPCAndj6pd",
  "key11": "5QiCYWqBfNq2iwhURE5WbWRVCzEK8cPSRNqYKUgqvNUSJthFiDk9u15g9EscrXCAVH6Dyf1dCuPWutLcy65wNi5k",
  "key12": "4vgC3AtrkiguEYWGiuAhmhn6HpvqaidzXTQWWArahegYfHTeDzpeBgFMCe2rfY8kmLf4GBX7UDsionNumWBg8DPT",
  "key13": "59bjeRba8btBWhEhmE3VrGj25exLpnLg8eJVZ2uQ6LspvhR9J4XdEVENpLzBMkgRqrFR7GfVvNt5Bnb7JepVhLYw",
  "key14": "4zTBDzMnp6ryvFYZ5UhiygFpPexcWqUprFfUpYaKgjWm5UZV2mzbyT7HgstLxfSokzVkTk9FUjy4zWPfeiGTUAT8",
  "key15": "L2sRHpHd9p8tsanALyJGCvLPGtPMTG3UpMJXgkBvSCSorQiu1HJjzvrzACB5YTj5gSJVqugYJVvhmmhdRtWwgCS",
  "key16": "tzPN3yNX2sSUBHDxH4pV5jcqNBEJF98mHi9r7XurNAMASL273pvAsr3jcNXe4RReZbZsDLyeQoFAzxBdnSqVVB7",
  "key17": "VEdeNec2DmE3CZ43ywB2b3rqmZ52nLv4sJJB2SeJgvPtbcbZ5FAkZM2bJr9H8YCcy7dhvuncRV9X4ek3HVM8yFL",
  "key18": "21gN5bmoHaKC9ygnwZSDtR4wbzyRgJvgdNJ4CZwyYHUcUoY93C7tCvc5cFeS9qGj5XNY97D75MXonEPdZwVfCA2y",
  "key19": "kqH1UYtscXCkFP8QZzPxbPBoYTywGzrS2K8YUxGK3CVRihn2wCRUowEXGoC2iSHr7rQf3g1aPFsMGJMWsoruajj",
  "key20": "2SNoTUGk7aRHcTQSUy3P9tmXwcKfvZ8TWmSR31fQ5msm5yGh6qzRTpvtPwsdDzkU3BBKVt7uMZJ3sWVVMp6bMfqE",
  "key21": "3q8htzA5WXkSZo3qMPsqDFS1p1t31fR1dDj2d57dNVHKid2QeeQTqQFoixLjEQHFC1GemAcpmwYDX9exYvwszGFw",
  "key22": "47uy2Qo9VHN19ZEEVWijSgEfPTx4U45wd4SvF4SoveiEVfPaheAdq2t2j5NEBSu3fZufWSMAJn3FEgykXT2cDi9V",
  "key23": "4ge2jSYXFcEqttmV6U8cAXthLJqmnmeXedgpsAU78Q4sfjRNjtMTVJgibm4bR2YJSPLyiDkJWonoWsz8N8yVQjtM",
  "key24": "MyAjnXe8YQzBMBLVv1ZVYbS8KBaPYERAXRdpBz3SqSgmD7s6P1LjFVFNTFYzgVppTS9DnMbuzJEPGmrFA1enuSv",
  "key25": "4UPUxARekvSo8EtcqLSqRjCKpuGcTmLcchqVvZ6nz52CtV8vKKVkE2MkdbtyqFMbn6ke7Pk3jTLbB6hQbopqiKf9",
  "key26": "XPagcsBh36W8H64imJXpGVKFgDRMKh7CVKjdekX1TnEmVfg7tZtnJWXABgmZhge8CBDTp6WcaQNgLbK865iXn3M",
  "key27": "5mrhndxMP7DCj1RcLfHV1s3QUgR6vLbbzL3zRASjWGYwu5uta1HSACEN9zfmktT6761MGrPxn2UXSFNPwijnDUiW",
  "key28": "5g1v4SFzL5BPzdUxvuysNxkyA39eM8LvZWipR6hiZ8QfjSVZcD9GJeUVPjxfuRH6MjUpFH6dqXgwFmK8meTQ9oxu",
  "key29": "3w9EdXAH7BiFk2dZRhUUiJ86WhfdT812RbcwYLYqe43JNPMvG9RZgZmLuDcKHn9Wk8pCevEzMtC9KK4WvQV4wCDj",
  "key30": "64JqATjVd5wvU81UY7u9RAWToS5c1kTMTHeAsEdiGPkrMwiASbT16rLEKtSavTDWXggX4ya7xZb5eFA3rc7gQMcE",
  "key31": "4MDeVnWm4BCzHXbBc1DXAiF8QggraFosibSL2jiK2mdhT3rvCURRDNC2Ymq36hLEzow8jmx8i7ktusg718aBNG6m",
  "key32": "vdfKNEh6Ht79Fm7JVpAHBGjdaS1YuoKoL1cJJsPeowqu3L4VXSatDgTi6F4F8edy5UQYTPhu6XueFrv8Z1PUbiP",
  "key33": "2AqasxnyhPBVUmgJB5zcAStE84f25dsVkXnp9AoaVkUgJNVGdh2PLzqkqNyPUrh1zxq6KQBQEs9jdMvtMsk5MiCf",
  "key34": "29T4JjfjnGnV72TaoBxLg8SfGd1Cffx5zj3hXGFVVZVkdTPazTqqtfyFgQahpDXt6EvcAZcwWfv2y35SxL6hXKqW",
  "key35": "629VrhyPZ7ZQZMMCvn5YVhDe4nop119PVtNuxmvybiyeSeQFdqxLsbZWCJCEZMv3HRDjY3BrDbJLYWpxdGjE29xq",
  "key36": "4Ad7ce6Kmq4JRhd2v2qsf26NZc7VWLdc8q4To7stW5ZfZvSLkrwBoWc96XNzdagJ8ugPAWbFgXJNcoxWCcnW5SwC",
  "key37": "3BCADyiLou19fFVNR5MfrLuj3UceV7XkgpJmQUaSWde59sEiGkpJ3JrdDjL7vd87ehXwW3zjKBDVo5Vo7fGFQnMR",
  "key38": "4ekJGExTQ2wS66Svps2UjtvuomoyWKXoF9VNxb6hrSgPAYHQ9jN455GyhiMyhNYdMcVFpYWSgBMfanehukrHBfbX",
  "key39": "5Vw9wQ38SG12mmcWBVZ3rpEEevLGJBBykmSt7EBFR9ujvfjt5t5Si9WPSNpPaufFjrCNwmdoGsqigQtfBAShXEmJ",
  "key40": "4z7umbgWAdr9AC64oxKd8NQcyVEuPoxZKBz5ehYHXyzsXn8aYDKbs1e6J3QmakUxaKAX2CYoQpWExwSKK3iUkF5W",
  "key41": "JvBmt1JGLVLFzeJQXqCDEPxsf8gBuh5Lwq8oBum9k3Mb5goAhXZKfTcbEn9i5ZQwKTZeEUmAavQ6WJ7nhDqMJAZ",
  "key42": "3ppUMr7twqoPYH4Pc9tH85AUtGsWiBUjxBDmV2be3QkV8idpRkjMKCiVV2bZB63kYrfBqHHa9M9fTvAJzrV6sGgi",
  "key43": "21yDojAuoU5CdP36Mqyb2qqZqh3UTfhY5jVuYgg9DoaJdGGJm1qrXZizYiKTDdkcjDrhSZxgmJ3VNH37P5G6yxnu",
  "key44": "2zLPzyD6nM7TjfeYAnphsWdZUAVjuuL6JPuNb133FdF2NaDG9uvgxfJ7o3UFUTXfnciph5gwSRsEpKyJUpNLekr4",
  "key45": "zfmJsBNsk2FigZVXcRqHzXp9CE6oAPW5eNBRPFCdmXXG68GdrvpY7fvhortEAg5z6USLcEUGnYeVtLbBrqeR8uv"
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
