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
    "juchL8RGHi2JqWrK6gRdzoYfoyRjh7DYUgNKUh8wMkYFvYRy9PobU2FEz9sAwkrHM5K6Ynzfo8bqdS7zWAD3Tco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VunVbNydGSfvNzx8xbfzRy3LgaLoWKBdr41QD6uSSUyjGVqhRjqcyzz7qQmbKVPUd4erQWmk1M6WSyNf7vtrjgL",
  "key1": "K2UvhyCHeZ8Nb3mJ5iVQ6CrPXbS5CZQY4xnqfpeEWEi2fZkV2R9Ec1D42KisGqT5X6SiVoFxCgv9jdLyvkcxJCn",
  "key2": "5G7ZJTiBaQsNN4CNRKQXYkKVpSwCiVake6k3ihFQcBvpYwKcCkhiN2JEWUnW99exyMvJPwg4NYbKNqW4Pwq7jc3B",
  "key3": "2DMgaPppmV3TGAY9khVurixGKy13wwyBeqB6tECDeYiWFRUJDNAWhrJzCMtm3GQpNPXVpCowc7zJjT1c536xTTyT",
  "key4": "raiUS95tGJyVRNsf5iYmiQfxnyuC8dBPFDGeN4DtB58EtCk85a6XVRhno5cC6RxbHGfLb1UM5NQ5igj5tGBGADq",
  "key5": "1iDdmpxoQDM7wPz5DTQkHuLTZecrU58TCmytrBdAaa13yhotu9zynKUkaGTo5DBJ46SPstLjpCZE8Y1wi3UrcxB",
  "key6": "3fcT85ruaPyGPJvVr6FRJ3gtxxxmDvmEJtMxspDex8RUsUkzq1B2WjgbvL1x8YHgdYvBpsBPBAxEksmu4Dq4Q4Zo",
  "key7": "2WMCeoVyQeiJdsxVxFBULbYWMhtde9RuYZeER3CRNRZhs75vRBSK3zdsRvUye5THSaedqedbiMKXGPMQUUajm59m",
  "key8": "31qocZ9s4AbzBaQbqm74x5RLaQjEH6bo1iEDswphmKoQtsQ4JKVxXFkYUDx4X23Zs9PhbF2NwiPruRLMaTzXDWqA",
  "key9": "5VRaD8DxfUNXJqWY2TURU97t8ojaRdtio3XpXHNLqAcDe9uN5iV5PUMniG8JSXcEQnuLeSgciV9iU7e21f1cK5G4",
  "key10": "3Z9tc7tqBrXCPWcGEUDpEgHqFzN1X9gR8bBW4krVbJY7TaLzFQSpt3zH9z4eafq53hJCip2Qx7ids9aPqT4bMGGV",
  "key11": "49Qzb51UyQSN9Sgmo2cfLSDjR26HCjMQbacKAiDL8gN6G4okSM16ftCzUnnNtvZaikSi3PoKziqG8oNuKqwnRjyh",
  "key12": "dSWSurLGQKRqhQCP52vFiTeV3dSuTDqvCnphQZ39tj6UWYuiGoBBa7aDwWt9eXGc53oJ5iUouEntFZur88mpv4E",
  "key13": "2faN2K3JrXFJpPvfd8vd796GMvAuszkcRADkeLmwvX3bVRyFSSgAwN4cmQkGnzNSKUC2TqL2CM57LjU8H4LrRrnj",
  "key14": "2YEByZT8QcX9jftVxkgqzdGmDABcQn8ai6tSmgvVLpmDSXg1SJtdTt4ZMV3jjZq29thwZ1ZtKFcUxtsR4za9Bw1k",
  "key15": "4me6Ps6ovzjzBMXvqXZt6p2Lz1Y6Jf5YanDHHtuForHQeF4i7zewyoSicS8uUm2C424qDSLdAN619CNxZtTBZpCx",
  "key16": "LMaS31TUmt3ngJ7HjdEaVsKsA8LeuNP4rfE7A3X5uhSoNwde67PVB4WDza3JD4pZst1dhP8RVJT1Z4VfqAxBRoi",
  "key17": "iFsyefaoaHN58ABNAVCpvq1FsHjQPdoA5roUTHtBrUWEegcFsSzq2sPraH2EyMYPiAqWPpL3ZNYHLXX7zHmhMBk",
  "key18": "5KiJnFXAEjXw3tyndDxSSvSbWjE8CTLJJDso8JGC5oAwzea2quAQAVWFCKQ3D34jLyKC1Sn2yyhoz9tfLP5peMq1",
  "key19": "3V1B2NTN9z3TxdBgVWrErU3UgxJg4fNaDPZpvZWVtabxEBQrGKGnpWJPce2BPVJqujAuaDPFuVvuuH8soSpB3892",
  "key20": "4EoZBWCDEtKa3kfoAjapVLFynQvdAHwyyKVPU3yqnLFYSPYueNxBw3ZVgawVzoMZC69vuTJJaPpHRKUQXskARDWq",
  "key21": "5PKYsjbC5XxUzk7WCPY5VQoTRkanMeELBLGP9mhVmRa9FFuJRXw9XDBxTZHwF6KkN9N8utKsVYyvnaJovdNy4NBi",
  "key22": "26xJeHUb8WhfF9MLrLmWSEuanhzJWH32VmgiCUSZXUX4TeZQuN7W1Qt4P3XN4dHg6jffn6YwKLepwZB3tYLgzbM1",
  "key23": "7MauQ4bs9EJquTu5xSwcbLudt53XSH5ztomLxuqTqwcWgPkrTsjvp6areQnQ2DA5Kzdnc8oYudbjXJs7FFL5tk1",
  "key24": "2tEr24TTfG88L1Ln4g5QJeiNnTeEJpqQefcsYVondPckC8qyZqqLC53jysk3iJQrY46iR4NvnGki147X25ixSswg",
  "key25": "HxG6BV94DbLZcDgYXrEHa2Chddm16axpgxW7CEoLCZJcwsMdx89GLnYAJGCXpB62X9xSQ2kESdwczJmVguYHZU8",
  "key26": "4HRJ56FY1JkHereuM44RkaoAcg9hHULVv2ZXu4PUiS5hFs71LZj1yvfuzTF5H8xMAzkNvBiRxeTesChGLfYgrUPB",
  "key27": "3fh1XrSceXkoEN8BK6a3MoPFdED3FpLqWeKtBiMTjGmtMqcNfmfzv5nxAKWP9G7bGce6uZs9cEbpjpqw4kC9VwBf",
  "key28": "5jYDRhai3bfn9uZL9stjiHQ69RSqWBT3P8eCxQiNfujGrJZLocoLax53eiFFMaap9qxdjqzmabG9cx5AWd8NRDr1",
  "key29": "5UWSnFrZHVMxbGWQBRdpsQB6PJfv1fbSjF391xjRhvbEtTFVVA2XgJzX74Rm7XvisjZpNafHPGQD9uXPUctT6Cw3",
  "key30": "5Ws8XPsmAcxj1gQ7xMMxtUbD6PSXEmn1UZrftXCiqbHT8Q3LRvxxnmHiidxma6mKrHSFM2Luag7mrNgEfbcRGdsq",
  "key31": "2dpm8TcAv5gVQRdn8u6TFDBY7f4oH2E2ssoMqnok8vB6cCuKuaJHjBANPYxbAdBu8vuudcWmstmMc6evpuv8zUYD",
  "key32": "3Zc1x8QQH4bvywu1N6hyqeCW7mQV6KVbu2zW48ZmMxemUE6135sR2vrLACdygpupGxp3hfuyso32fLC85MxBhUJm",
  "key33": "5y9hxoWPbSkNaTsxoeSKRv5imwdkypgwoQ46HGBwFDfkuWzWWnsK8yfHuBkYFaD2ndcZdfBT7w7zbr9x6Ruym3ta",
  "key34": "4k3crgbk167jg55bMGYhmfdcj1rwh6JbH6oXbm1AGEGBZyrveEh7Tj26tZBafGoBCUcSygBWigRo4W8c4dwWq5Vm",
  "key35": "3AYckXBLyiG9zKrLUpvLMZL4fsFRcZ71wZMsmhyfcz2hMoaC5SsMFYH3gKgNeQrKcFA2GXkPKtaVyUnvum7AzJPD",
  "key36": "4uqbmQp4kCNXpfS1uKBKteKXiV2dXqiY1HmCL6RTCKXEaTz7HSsxY4S1LD2M2pEor58ykTEr3DcjqJprKPSJ6vKi",
  "key37": "2tsxPfhknRafpEBH1LpFKMNUbKgaesqBEEkDn59kb47Afi4hyCN3R6Fr9XXnWxgRqfkzjKJ2cRyaRrJVswuxzBJ8",
  "key38": "2ZCd6axNyHM4Vt1sjGG3GsnSh1hhFPxXjfS3cvE3jLGat5xeE8XRUPbthywrtwakC84o8eTCJX5nKCUaxfmqAmcs",
  "key39": "2osJap61qijWrbaLbB36E4UWvtLKvC6yomEapv5SHpafJ1uspcSsze4E9GVVhksDHNexZjA9nvSQ2Dj4V4qVyKJi",
  "key40": "3A8LThpFwiz3ovWz3vwi5p8ALfcQQiXiNze2fUwkiyfQzUGeE9ZHFPzLbmK6gQVY2ngXYvEy8sMiMe482STuikiE"
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
