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
    "4XnU7TF9zmvD8TjoP1k8tTkNhixmQLGsqzPbtCKaHbQ1FMaoAfnfXmKraFdeJhWFiHxgYH7TAmRM8p4BKF3diDHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45KqtaV3j6PBrbim3ycGm9r1QuNYxYBu4gGieqgdzQ6pmHLrb7hZNL9fGCN2n4DHVRKR1sLWsiRhDgcPxDyaLyzD",
  "key1": "3Bh1UphFgsF6JnjA4rbwRVFv2rSqbTXhSgCGP22K7smhc1ctpTUbJ7wTq1PBUVjkfBo4ahr828jZnm35dQwwPQm9",
  "key2": "28aZRCk4vaD7GgTvZtKCBuVLo3KjHzRRUxVeRNpKJVccQXgQUy9ffb5bxxdGa2JhA1c7paEWvVoKCWW2mTbj49RQ",
  "key3": "5yDfiNXjKu9GLqhPDwuQQFWHBfWR7Xruau5PkUKg9pvr47aG8AhiznixKEDeveCiETSyAKYyAC5iNPSJRjp8EmLE",
  "key4": "89JsYQ9aEwfZBK9Yz1xi2QqJxAGRPkHSq9NHYpweo17aPJZrBX3f9oMz1hE1N8FqshiqAgJgBFbCAyv6EvQ8vLF",
  "key5": "4fRJAxwnhUSSAc8qBC6FNkmrTVNd8S7TqHSX2uCUc8NaVe61XsWiuxBC1P4Nk2ZSwmpmLTTA3kMTKhLCVGUooUrM",
  "key6": "2eboKHJVfPjPU6Y1y3UdmbJv44rhureA5EoB2UeYfY8RWJDpY3rFcUdo8YowYwM94RJN3ubf2A2YVEjqPrwbp76D",
  "key7": "Pa7K7tjZpPt2wtqbqqNRk5nzDX3xnVCrxVUvqisp5REbfCrcR4QF98r9GR8QG5o2JGSdKf4Lkdz5AGmq6Mo64n4",
  "key8": "224SABc75udcZy6QiXNxkzZETWrgAeSgrcH8kZcgFXFSDPmim6GSo2QGgMsfqhy8ukpbaHddfG891cYHpWiKYUgN",
  "key9": "274T6PKTNc2EbtuMFMb3829vxLpX1WCQ3FbxVHmwfSYKfEfpKbfA37KmB7ezhUsuzXw3LZJ56wttUEAXyotBfhnx",
  "key10": "3F81Q63eQzH3M7rsSJatd2fbCQBH2bivpNo3j7gknW3KodfKgTuuPPyQ7ZWp159s6tjrFXBS6Ejfeg4tcPhbnnca",
  "key11": "QmYgUGf9HCm95UDpuwUT12MaiUDFsPYcf8ZP77XsCGQMYYrM1FwmeGLPK8jeQs1RZ375MQ1bpHKQgeDFuby773q",
  "key12": "4EWd9MMpoANGLwDB4qVpU1bcyDdszGP8idzykiJsXmnpYkeRREmF22p2o12mSZRDVPnZxVUg1GA9gnuMKjbb7FMu",
  "key13": "2JzGpXB9eEownBL8jApSQFsWF1mK6nu9PnKWngz35utNz2sTzTAAXWSrrDiHJ1zVTYYeeSsUXZMjEoifFUMDRYKm",
  "key14": "3T4gfWsMQvda121tHeUhhQ2uFmg1SisRyrcokac36nUc9B7SBPc7JY55khN1XfN1muZLbvxFPCvULtRjFTTSv83s",
  "key15": "6RUgWAUX4jsbTabLZiGU6jUaePwPo8t3UWNvMQRgDcpwW4Jf6fURJR1ByuUYgQ9fpexb95kDbe8XNFcYkNw4d5U",
  "key16": "2KH8VkLWDv6KcGkxR74ZgPjhN4oSwvSeUrVJXhMtgwN5xKPuPtn5AYW3Y18H2uXoCw9BxF7Ws5FTaoENzPVxskPC",
  "key17": "7zwmNVenxhho9hegc4waAys7cxD6ppjvtniBYpuDg9Wte2uwBGHuN7ejfADWQJjPVf9K8KvJ8P7c3CduzJ6gPBR",
  "key18": "2wWzstHWGRYfR9BpHXLz3rseQHYuiN3GUbLtCm2qxv25QKZ2C9vBzG74QFEFeJLTvhYw6LypUrYUzPwV1DFtZzQt",
  "key19": "4YvJ5s7uUdRDCpfoK9ByYBqaVBUtVmJWHHS52UDrDSB9rrsQFVirjDYJmRe81CQPvSFyYRK2mcg2AWQQ6E6STgnm",
  "key20": "3zryFTRf1jmu7LMQa1iQPBTo82v3KMPVktT1mRPSXiZqFG5nsGMg7fPZeAU7fbi9dZpcEMFBosjKbJvRwkVQJsUK",
  "key21": "62KPvjf51uyxV2AwXexYdnp3iC9VDUDPBfMTujBjAyyqvRVo24MeDF8rpPmaArVyKaZy2xiJ8xYj4DkJ8S4Va8KJ",
  "key22": "3Bj5P5tBPuanG6EvsWHXJHUZwkak68T3XTMHeumsATxh7KxhJqVYjGCpAQGECi6oeH3x1EujcMUvVxuZs92DiKYN",
  "key23": "2MXoc6kgekpHmkS3qB5PSQVt8ZZu9iJxF5grVsC9d2xy77n1o9kFeT7AoTR4R4yEgtZ9cFdpYueUTRxSCENbG56G",
  "key24": "iGnbzbNn6X8zgQ8QR2PkT9tYgL1XYQUwqqSktyPGmxhurWJVLZHBjyGnpdpJET85hyRsbsDp7bhEv97Ba7EKuar",
  "key25": "5TE8fjKGHS6JVPnfeLBP2Dv8B42x1YuL3DTkupp3CyUwZtS4gR9Af7yJazj9YPcZnmb4S2KuE82PgjSPv4s6ezS",
  "key26": "3L8gxutRigPwDvPNkbdSvVr1nKZzaAxqk4FvRveuKgF5vcSRtoBgSZHhCFcmRq6nNRkarC8csc7oZNUihE1QUTXm",
  "key27": "5pMYcuhLPv6oKvthMBhDXd6hchSi5tLtU4eqKT2cQYDrXopi39kvgtYCAab8Gm7iZUV2af2mhxXLDEtHh4EtDzwT",
  "key28": "4cu1ck5cG6bfaCYWiBWktmAF4PHmjWefdd6XzdHx7Pxe6anph2E8GstTczKp18EgtpSZnK3WX3iX4Vka2vJ3sYB3",
  "key29": "3cfguYUSw9SbrK1DoCGdq7QCnuK2gdaEeXsBGkTvsPZ2TR4QdzQTFmiqui9b6TWcDtJyByC237V6DxuYQTakf7dQ",
  "key30": "221zQ5uH1mm7zegDDXWPWhVFNXVqNvCBZyQpSzk7gGYbPxtv35bU4fjDBVuUWdJgKs5MfCpgoeLAKMiDUGNSvN1V",
  "key31": "3yVGg22MqSpsnM2jPr8sHhxxFMV8ioerwiZdsLmKPUL7eK4kstVUmURu6DkaBV6hD9pXTVQkbTjUR6Rj8e9yeDsW",
  "key32": "5Vq8k4HsVPPsbjYkqnJPuL99yXZESf3xzgEpeLja2PoBQVedcXV1WELAa1shr6At7iCTB5JpUDe4MHWSho2Lrjt8",
  "key33": "3unFsF55QCc73qdbA1MWwtxznDCiJozLmGu9ptacV1c5g9MPLkoZLUzbxJ1aZ2YaRAe89GKnSr6NisNP4WbfeZub",
  "key34": "3TbjgMDEHK4WBLMmuepkKZjc6j2hmMuRWeaagH6u8qkymRHYPYpC1gcxNkwKZAG2LzDfnrr46gMPYsrrx6UDuaH4",
  "key35": "drp399khQXeioio6UZxjZqFmGZxrdwNgNgaTxWX25eNzfPyXwsTML5wijauEQBGa6DdhtAWHtm7Z18Vfsucahhw",
  "key36": "FkhijDBtKUmjLxQp6RA8sNKZBTfiXPoqfvPeZAz4eSBDeey3FUokApwovhjic3ohiwQAJfezwdVFY3pq6WAwqf7",
  "key37": "5VFXMcCUzdjQS8Uoh3fv6d3fT66rHqDGr8xzN116GNtD7T5vBzxpCALbuWT2uV79iGme1mnUwHtWiseBgTGJcTM1",
  "key38": "5an1Hs8rJrttHcdkDM6kUzJsohRN9Ky3oXHbxU43Rc3oXQqnWb2FssofLLXWM5VdotnBk65N888r2m2SefqF6erM",
  "key39": "3kwEy8mf5FVtKXJqXx88Q1BaULcnrNPbRT3CZ3dFqniM9Tkusp6ceafEiNch1QYdH5gPYTUh6bGWu7dH6msS2fbF",
  "key40": "UCw5X1XRNmgkASU8BaZ8RT95erGx2kRE5Qhc7XzTMjhTCYWcGCFXfawfJrnRU5jH7fxgyeKTVZ9k1ccyGHeVMwy",
  "key41": "MnyVHsQc9ARNh6gs4A6nUVe7rr7KLkh2eZ7Nq7fWwTNUgyQBvLmZhKGj73kHDmHqXbA7TxiYKwqSKvVAUz5yXaL",
  "key42": "3cSkRTmm26vpoV7PZEuE7oejXvEzhtvZvmhtHj3KiYKt7bVVDoWobRRZmp419T1y4We5UjVqhkvQVWxQe5e89Ez5",
  "key43": "3wkR8JxQjqrTQosgzppEuSTvbdd5VVajmbMHawyD5362Tpe7jhe945wMEC9R9J9F1eDQdi42foYYZLS5JhKbQvAA",
  "key44": "5oDCrWfzwBS4os9EZYLqf2bhJUJRv87WUs6RkUJokKx8mrNbGSCeHtjr31LFsZeiow1m4W3LVyoSvL9FLpnADe1Y",
  "key45": "5sNEPgFumT6AAvK3P84vwufhE9AhC3vCYgEn6ubtf2uHt7pZTL5ubSJJ7swdVG2s9bTwG3DR3tdzfidsNLBQkpT3",
  "key46": "3cnXRqhKQXLh4DTaFhhE7FV9QAvrZPqJAa2mncq3yJowKVm8pnjsCMieq7pP38NNExwjeXuSXVzjro4Z8zyMfFQG",
  "key47": "45hkeXcH8XQf9W8vGZdoSYMxyfoRTnLUtG7rBvgU8CgLfCCL6v15vU1Qre2WNPkaZhKTo4Ed15gejNYDwsS5CgPy",
  "key48": "eYca8TvKjSj83swgMf95UpWVyLv5MGgnS1M1BZDm53BRySkCkkd7uLG2YRALBGDTPxHDMp8tvbAMUEevsfkntha",
  "key49": "4dzJsrbHq3k5pVYNMdDLirqNpeiWdcDmb3YLAwXGXyS8bUoQwxPYxZLNWH6CQNSGkJ6Hcbg469dS1qgvPh4QjVYi"
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
