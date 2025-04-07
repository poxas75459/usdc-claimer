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
    "5TuHMkCBxAdCmBcxmW8Lmpsjz84shNthHZ4JxDUtCr4uwv1bq37fdXqwmrPS6UWvVMgp3tFGmwykSdGe5ny1aoWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zJ1khGsYbNMmP85Vut6yBu2vy6WLBzFosQ7uf2uQMWub4UmdabyGYU9VDREaMk1U3fGQo3LxLYSGunoeopG2y9R",
  "key1": "Yd3pfXCUMJGRsFJe2Y6Wn7hNRZzaXxudMAGG6BNEhN8NW4Lyuvvo2vmctN5S8hS4bL4Cuha9GPDYgLpw44go4uZ",
  "key2": "2Jf8FN94XXc28cVCVComqaAiYNMxazBZXCra7vTYpj8yVVkM6EHg7jTP3PS4pfonjR3imqorbdbrANJD59nff54y",
  "key3": "vMVefwKfYrGSVhuSkaMjejvGaJziasT9cvGRkkgjrRxpskooggD4cB76DQNwVbhkZf4VvN3YFMnGQcfJXqNvNdd",
  "key4": "32Wi6S1rYaXH7pwG2g2UDQXsHZgFSKNPdaE8kzz2pmBMt1zraKdsanDJDLVzNd7rV8vi3rbrcyagZgtXLJhYBZsr",
  "key5": "3ekVUz5UYSAKdiumtS2W1x1HB4CQBCKgLeKiQvfG5x3wLPScGiT86dj1UYF3TEhZ1TEHsmUqLNZe6QDEVXB6LaGP",
  "key6": "D6dG8w9FvnCFW1PQLvPYzJLkYLhpnDdjLP2n9G9QJdh9UjvbhfMLK3umYxfdjLhNgUx63zABX2RnqyTgEWUbZQb",
  "key7": "5RDnPSJ5Ey31LVed2gnpEHqsHf4E93KTfsGDaiYmX4Tci8rAsFfRn447Ymm6QdcrkB4Q4vRAWHtAgxqsuRGCAPz4",
  "key8": "34NtS9Mth5QV73MsPVFHhNVUqdiaJSPrH3kjLqSDZ21dGc1tHYy6bWf6c2vAM1PxT5n6UEgNUXnRiAcYnUAd64Lr",
  "key9": "3kpEyaKVNAiciusMCENUVJoqyu6pG8f3jg1imd5hyNSaGymePQRqoVhhRqjfixEp2H72n5mgqZktB1aXuMrn6Es4",
  "key10": "4bj7TfsGUzJx6pE5rrfpmtpanBn8y4XLo4vwvxvPrBL5U7YdiXWddRTDneN8HLFsR9hgZNsiPJPDwCbvW71V92zv",
  "key11": "4GW3tk6PY4xKR6biUh6pJ5iYG5v13NnYgRMHKSMynskmjqtNAq8pnN5k9DsNPUd54SA7PEFXdRvinj9t2jpvmhjC",
  "key12": "4reCqYAPFM9s59HeBVGtJoVMpZLTy7cxjQTaeuK2PvADPsaE3gXo4kgidmKdgxEXCPAZFmcTsqK8yVLT6oUnZECL",
  "key13": "37aRbwPi46oHQhnX1uySPszuT33RYciaWa9ES9FrhAajGvfgpoAPRNBbEJbpkVzTdqNEyUjMfL1pfu17DLBxpYjQ",
  "key14": "AuyEvMfBp9krrjYRZhafrxVmi8hqzgEC5SvMT6yx66n9Deq1gapWbnoSQkYkCAwnQz3UvKg14yXDjK3i4tmkV5e",
  "key15": "4kYQpBCFPCh8PWw8m6wtgPCmXdHABTzG6Wnw3ZvddjymZenexprQS3iwT1viKNATcAMvKb9GfXZegUYEJ2gtpqXJ",
  "key16": "JfeRddushAFjPgYWovizWuim2Wz6qY9ye559KQ7J8ccBLt32oVV6Nh9pvAgYq9cnmAquc8zzxSWvzzrZGXGJHZ8",
  "key17": "2h1ydv6LZXbrTfMEEFPG2fK5T3fnPW5L62dhQvsFQNQCDWGtmzfnighGxWQc3oJgFbC7vhsvCeuqj2hNeL7fACpK",
  "key18": "2guSWQ214Cx66Lwjh8LCEnf2MWTkcnDJT1UQmyF3Ng9RGpcqWLvt46car8QgJkVov3XSZSZxRacFdaHm9wo5FTQA",
  "key19": "41jH1gfm4WQoZ7dJdyfUEEHWw933yRttnEz2mUa2rYTMWWwgnE7JppAgnWcPqifE5YtZiLuopPFbyaT7ARyaWFuC",
  "key20": "5dMrWbFdzNkFPwyax7tiDgM9ov2vvwvaC29aymqETrFZ2uDwZNPwVfxnLehBQbpCfuu9kXQjirfkoijBQuTVEr8L",
  "key21": "26votm8jvymYANVycwnJHHUiTWqSSZGFU4KqUQZnnEcizqGjHiQhiyfWYkZPMZ1CHaZTmDMJdW4SnizSN8eeUjHs",
  "key22": "4yo2xDUDfhPFf537eKdZeF6TE9veei1Ku5urSqjY8rfT21GNk4B23M2P1WbBkQrCfRTFPoSP3dnUthuqZ45D4dqk",
  "key23": "2wmUCXsNVZRQBRtuBdaTnXU8Xn4Bv72j6NK6hR4yTtX7pvPgZSv34gZWnvJYzENptK5vk9DFEBD5Lx1NYHN9b1Tz",
  "key24": "2ySfH2yEfkzgAsQVRE56TdgMhhzU4ja3urAyGen9TQBZPUMvLfC421yW7Fn5334He1pdLF46wYWxMm5Ngjz8rvrV",
  "key25": "JdP2GV9EbGh6HyDGbcnazSB5LjFdPHSnZYnTGsDpktg31gojymrBEbUgoNjV8MJqxUCAgx3jbM23JQKEC5AtoA3",
  "key26": "2v3dpi4oD4NZwf3NB9CJQavF7BywCLQx3ndwkD9r2GsUAdtYFK6aTJtR51Y6y6PtYAuj56co2ynfSy17YbP24CrZ",
  "key27": "5YMB9VBdLdrCZhchv6qwp9e4MqZVS8RwBD1x5iSQLA5YwDBWC7LrDSrjd1BcLhwD8t3bb192EHJHUZSHECGYi6Cd",
  "key28": "35aDR6YnRXvDWvMhoLrqqaQuvjUAG6ZCbow6HQVSB659uFsGQBPKdBBprwSR6WRV9j16rFXW1zUHHeqWMsQb1D3E",
  "key29": "5jRsyLArnE4U3Lxv6T5akJUXB5GjqpYSZk7mFhWeudN8HwEnZyagodRqThSd2B39aAQMkXXLscjDRenRJQR58WgS",
  "key30": "4ijGQjERZYPmZmR3EmM86kgvjnzGxFcSBM1qstoNXQt6N65S8LxboACKpnErRALmDjRittxtaTz6FP4mnP561pYy",
  "key31": "4uqf7xA9nzq4ZWE2BWSe4ZuR4drA3YzbQ4hYKGLBc9m8nQbzZZz1sMSCSwpcCzJ4oM9NaEz45HeaETf3mmMgGBHY",
  "key32": "5WpoaRxbNdfCAVkraiMyNTCSHYgX8paAzvDDBnxierLAdbRk8BxTnyg4RD2Ku3ZMFPsgoBnT1MebXpjehMtHYqEw",
  "key33": "2sLk8T7akzKfxattFCQaczmJeYvpPGk41aDvz9STRQeaCV5T2UCZBYDF28noma2CuPUhtQ8LUEZpLgK6zs8LezVf",
  "key34": "5EVsnKoLVuEEeKELYCrd16ReJmjvSnBzi68NM4vSwPTeNJXKrzisr9hpNoMSoS28AtV4UPQb5DMKTQLpEZ5hXBe7",
  "key35": "65YJAXqjydUiPGU9duzYrwjs2ethL1iSwNGeT9FkcntYPvSWHY5WFwMTKzNEedKmQugTdMr4Q9v3qajb6k78GLRb",
  "key36": "5BmqdKCw2DgTmCpPVVVVsxXxUSkWJjjRFi83JYpVRk4fxpiCCBigf8nh8tPwWm4QeXdoJfg5e1GKmiERh8V1rtJh",
  "key37": "65nXVVvyaagdub2LrqYJUV3ACJgrUBbnYBx1LKG2QrzX7BZFp4k8XGkeCTFtcvqRHQZcA2wH6cA5PSYoTdawwCrX",
  "key38": "TM3Bdq9PSmQM2PYJNH7WnNSPyeQ3LPgYu7wtDtMZTDgRngaYhdW1zcXwYUYHMVw3yAknFJZbrUCM1gyienDeqDJ",
  "key39": "621M8xpgYUsdNTHtYm7qE2B1BRCqP13P3e7CcAghLdNvjEwq1SwPUYwU1JYCbfqUaTaHZU1KchR83xUD4DJ1eYXj",
  "key40": "4n7GRpGNET96XekiG6MZsFPVTtQkARwu1xW9dnDVVTucLmRVK376XAe8sLHaPuC6Tpf9Pg4b18fybPiKuFecLgpd",
  "key41": "cZb1KRheY9KnSW7vQCibnpPuynhZUKPSg6MhHgnprRzdqtZPqRvGxqmytujCJNsPwJLKHnDxxMSUcdfXrd7Mbr7",
  "key42": "4ArunE6zStpDKj8LUgiSTvT5NhFZhRyoppnLyfDPCA13A2UihWAFMnRKjde2xAVN13E5h8zKU9EaDY3aoxcNvxzd",
  "key43": "5eUf63jPwDuqMTxheXTyYGDxHjHjAU5j47CcaX41FWreg1HC6yRfwavYXQaekAfbJmkeK4StfLKrHQtvQs87kXyj",
  "key44": "UrZa4sVfVWhxPdegKySzS6AMGokMTKXGNLuoQ542nqJENZFtZh7mz1kzkbAvnpiYLkyuBZJXnwcFHZTW2yENVCy",
  "key45": "5p7bVmjYLKwzSdajeMmMBJgJ2G1GyxEj5PTvk1qXw1nToKoMeBKCNmkWGvtuWmbrjYZo6fdTCv9TDzncEDrTqBMQ"
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
