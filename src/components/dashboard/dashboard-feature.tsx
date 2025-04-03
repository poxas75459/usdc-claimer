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
    "Ka6MePuVJJV35P8Z17N3wkE3SVEYMZ5nDPcCFTGbLpKyUcr9BEBfNyKMssYDGsPLAf5AizZkqKRjADt5aG5J6y5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rj6aHFHUnnfacwzxkaWHjYEfZ9AMr3MAQh425ND5PEFixy1ocMaiUUadLscDwb1geSTCvRz7mFaMsu2wthfut3h",
  "key1": "3cg8b36R7LnPrMkTg2SSbwsd1rMuHaZfpFPEJjJU6yz4xygoLEe1XbjkHwReSgFYQ2bPivz3AozSFF8wHcXay1n2",
  "key2": "5TEks4saLygaBbKeXFxpWrEot6ntVnQHJimqMnk7bH8mWqt3hVgVna7kk1T2rxggf2AWVVF17LCkG7BjFrrpHBh4",
  "key3": "4H2qT5TiiZ9jJvbRmrxZw7s7iGGc5qDiyaeDvzgio9QZK3CYZdBLsLshoErGHQfyURaQAMosFH8vDkiXhQabehXW",
  "key4": "5zwT84qp9PbiAiexyBDPRTHovSGz5PUBtgFYdW9b4xP1FdNdhhbbSsg3qBuoCZuBvVcR8B9Tnvybec3MWa5s32C",
  "key5": "4yYSTx3XZ3XzAxnVdHaRNgQvvfDD4BCXnYDpB9X61AFwT6SfZnaiDXhAet3f7ELmQP36sdyp2Gc7Rx6Rmy92esDA",
  "key6": "xojAoatLibyzeoQbtZZDvuq44M8fvyKof73QgfHGyr5JRHhcpzeRdQ2cgps44pj9oe66CdJ48CC6ETfp7GbZYYn",
  "key7": "3gaeRXf6BGZN8uKohNAshfvmFvqhfna5AMd8bTBKEYgLm7pbuQeEkAGgc88A68h7bW7dRpFqUMQo7QX3zj53pZgj",
  "key8": "3dUvGCXRTqB8sVZBndYj8jDgtkabvUEfcYUZ61rx43U48obhN7gEg8WB5ANq6AT6dzjLwFn3TqkAkQpmryk2uHFj",
  "key9": "2jyt4kT96YJfiBDaX3cx4kZNKb65eRFZvPMgR7bqRSfiisgGpyg6rePQX5U5ZzsQwkTQPf3Yxq3NhPfWfTeZJoiQ",
  "key10": "2G8vN2UpD36vhLKJsEePzEYuaUVNZGktB3J4oW6kKL722MRs52FEANedE7iX9wj28kHy2u8P1mFAKDBGppS9hodN",
  "key11": "3CuBBsc8nGufhMDJDPLgkZFLx5vjgPxTNbj4HwpYtyiAL3FrrLwN55k9f88HZopm1zzYVSEPsfoUAYS66LRc4i3d",
  "key12": "5wfzDzHzUy9u8DJgZWkJu9btX7juhkgWQmtLdVsbpnVSaakxm7YEACiJgDRUG75yRufyjbrnLwB2idp1F4SfCUcZ",
  "key13": "3DsreYgd5FZemQEBGCxjGRuhCNcwn9XRerMdPR1bPjmPknsyZ1Z6SK4RfWyECmBEdt1hQD7coFDSNVBb3PkwXqtn",
  "key14": "2Exrdds5z67FDPy5ZhBJr4hf4XxiWiTsPZMqKDj1anrn1MvWPmbUWZ2rAJMmhzBRS4mq1Yh66XbcfPZgLQJvhawC",
  "key15": "2bW6HreX8faBYT97GTdSA1Nc3N2Ph5Qfg7ufoJPVDB46z663FpjHvygFLiEyZArwsUXYLYF1B6oufss1cy3JLGAs",
  "key16": "5cfBLBKWQ8ZQNqcqvZLcTHmqTWXbZfceavryw5SCbfD7JVMKH4tdkuFMryc6cNmEMXwZDdrVuB3XpfWwFxXRrhee",
  "key17": "qJEpXZBTBXi9rWLQ6gN1rkRENmbb4DvsLwQ3H4co4Xefu54AygjFiKJ73TZv7djkNinpH5oRQe4XmRNh2STy8qM",
  "key18": "5uD7wxYMFD9utwaNjSitkYhQURN9b5DNLGWsoGuaAfzmRhB5xGwLaC9jD4SJqceEuK7uqRmEkLjkqtL25nNgykig",
  "key19": "3dfF655UFKBvCVwPp7V7nFqZoE6Rz9x6t4cNodpbJJTLwxuiTvUd3y17tM7DxkERNxJnhAaQf3A4tgiSkLuQcK4o",
  "key20": "2Mv52WCfb5SFTpBuxtm6Y1mFXRoN4UDCh42hViowP4LQmBfeyjsF1n5MXPP6vcf6DjYv6n9jBQRdm9vrm34q3JDE",
  "key21": "4HpfKtX6bfCiaeiVmH4kBKyXAhcS3KHPiKJVV2EAQPgpRmcq2JxCVtznY4R4KXfdqZbSqqRhLmtxkuoGhV8674W7",
  "key22": "2iuPUPc8pyvdbovRS2F8AHyV4KoxTW9XF4tkeqexdY4ujQcDNWUkm5AuiMB2MHAm9pcQ1y14LiWU9Rs7Ceu6Yiyc",
  "key23": "4X8kbmNtTz5fiPEy7hJJoAGwdog47rAgKUWYgHg5QX5uNu6R4HnqF5gWQEVE8RbLRL3ZwiNnsABcfsqVMm2UNJx8",
  "key24": "YGt12Rq5eXt3SEPbLitH1XPMc2av2fCwacoRxvdJyRcvjUwbSG19FrgPZ3BmiyEKuvqiW4nbnVhL8dQcF9RLGQR",
  "key25": "iJsUBUmET7ur7g5LcYEq9vc3VQhPWVgxJzKzanj7KHwtAToHcMHNqSxWJv1ab3jdUjsFRAu7jmcsnk8PZcctzSE",
  "key26": "EWJNAvbx8fdBWgPY1qAQxeg4u9EqP9eFDuemNg7FNcfD3Ky25ig1r7Fxku8xbWfQAC4bhWMyNJhLX2R9RAzeNmL",
  "key27": "43Dk9MHH9zKk85UKox9oRdgbMuPg9DGvhqE8uaTqQJXtUH2WG4TdhEgpercUf93vt4eeoyZFUzd37Twd4tMqvN75",
  "key28": "5tE875JDT7aoqdWDsZ2W1dY8PxYouKfmvc163q8eePH2hKvSzAKECSGiZMReRFcy5bShdc9piQyVLnpwhuVjSVvk",
  "key29": "5CwqGDR6oex1gfuxzMhP9JME1SuDBC65oUycN6fSGpvhtoe6GFxcgvQHGQ5fh6PJwYTkB11FFwmAnoWHjTmuts23",
  "key30": "5JYVs5ASaNMqFmCqG5P31G5hAhzt2uP7kN9p6PXAsEEbDoWVbLoR7bhEHq8Uiwbtvk16MMwof7bAoABzc1U2vj1G",
  "key31": "2hssKSKXy6HBmN5MpTjwAJP3bAs66BP14FXjBGkMjBbUS751dsWoEbwRcasQERyFm1A6YyUqgdBonPmDtjSsZhRi",
  "key32": "496g2XV6QSmsKWQxpCfhMVHgywUxFfvrXAdjLVbbaPegNWv9uzeu37Jf6hmT3oUthSHiGdGsanXJMmpLBeadHu8P",
  "key33": "5Zyw24C33VJ3hY1evJhsUCbnvgJmDTe9RDtVVCveZc2KFXUFUyZqBTfJiNrzrvGiSpMwgSHYEZ4A15Tt8FiV3pZY",
  "key34": "bCzJQREChUsAj44GJWVvwb6QgjaducgANWS5NPYrUg7qSBQ74bxRhpkWxzLCVAsxvSBSmseWa9BaJhzfAuKX5fj",
  "key35": "4qZDVQZAow6atquipyqtKXFEeuNF2tKshauGoLHks5DiXiqXfjTnXuc6n1kaRHzXRK8SDXgLNztMEjHMWqXtF9Kw",
  "key36": "2jm3doYfad55NhCnimexiDec8NUGj4jHLViieqKCMXmWZFNqE2tsUzcP3t2j2pxidHh9Be3NNp93GcjUxVwLU42n",
  "key37": "4gz7WfheePuqxXv7YXtLpwxDRzsquiTrtjasUM14aXBks3UvSJRMHRvowkoSbEQvCDvjQbBJMLPNR29fkmaTdyVB",
  "key38": "33fWutWVkvkMinY7ECcxf32uaLSua6CmA1vc1M7P1ZfWutMMLnK478SPJcGtHiz1stcutDyGVjuvMi3X3dwihSe7",
  "key39": "3J9yAwKV7isoFXdMbFfJ5BwgChFmzQANdg9YYa1nBGSm3tcKfs3nCgMhKf8Fg1e1VV52EF9gLRHkoWM4gJe8xLGw",
  "key40": "2z1qVExaPvoCqnmj2EsyK6MmiBzWY5zJv3wrsiungfV8YSxbajig5F84mpbpfan8gdV158KbyHyGMzxJu1Xpym2x",
  "key41": "4JsgiTDM23dehTtjGPrM7JheBVeLcxJdKR88mnLEYnC2ViWLRW2Mpz2JcJhua24yW7k19Wk2Xxjdjyi1mqvcLvvQ",
  "key42": "3k3uQagxcqG8KT2TNGt6FeXHCKizM9162D4eY7rckksP5FPcxT5vtTGydq4NTWsLMTzggNY1FkTUvUXwmzgkivEQ",
  "key43": "5Myk7FYMTaUoZ7TsfAU94pevsmcgkajVxunEodRDcXtSARghG4b7uTzVucNcFVK4WCyQuqhnThrdwUAQcBTKN2kR",
  "key44": "5MoCU9dj13jajFPQv6a1ao6VLx41Yv3v193ZHURjMuHjUNzE3nCP9A8RKinWKpiKqMkXoaSdFeeSYh46yzzBYR8S"
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
