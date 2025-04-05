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
    "2JhJJ7DwNax9fz6zXzCQywsycyHiPYAzjCE9EmpaXKyQ8Px2oCMW7JfrSJ53E38m8xVHP6kYW1SG5B5vT3dAXaNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R32ZznKmj2AWE4UY9ekMTnjyr5Vzag7om96RLbH8T1P9u9gVgQ5CsvmdoN9oJjTDhMqkzGH2ATMyqt1ejj9xrLD",
  "key1": "4ZzVYamHik5BTF2VfRM5dRz4Way5hHDistzrrUtxSxjybHd7LtSJDf5XkxJDr86Joo8GJ2kxWZhrdDWFkSQRhYEu",
  "key2": "5PTJee3trrMJcQaVQsrhaVEScULhb3FEttiw6MBmeZ9quMEaVQttfCtKbAQa8zeayE3S9g61kkAhnGH1bDoZRaFu",
  "key3": "2xpj3i2xLGG3q5oxgq9bJErkbu8jpEx8X84pgTAV9waCWFJWXVdQuFvmfzjGvhPjZtG4bj233oXn3VswvsQdEH83",
  "key4": "5U5uxsAJvnoTCcjFG6N2RnguGDnFruC9QSaXHM7aLsiTF4tKH5cvfZ4aFGX1JCS1cMf6h9scYR4qQS6nD4mRjYYb",
  "key5": "2xj24iF6q2ks2TATNVnGiJ1NEGYbTTGDVhM4RjAefc2mhJj2egdF9C1xmUG6g3uXGpG77fTcfAND3PH4ZaRf2SjZ",
  "key6": "3MjEpCou6fPkCdH4xtbmC3RUjkMPqXeF96s1hssk2CZKXPBV5eXt1g8Foo4Wq6131cuJtUePKYcECC2BwZCqfLXB",
  "key7": "44DrKV4VGxz7VGDytYf1EYkkgwjDSgSZmLsDbAoeSDmomziyjz7QvfXCsxNeTKj836eaMAvAbVcaXxCQsT6gDTWY",
  "key8": "3PMU1JiDp1WUYaiq71WFe33uQ5kHRY2tFoU1AFDNnmMYdtk3DCf7ZVSyeUbCDbH7jDKE9RVD5oitCvMn6ASMxUUg",
  "key9": "rCLf1sNJR4Xq8kxmW9S6daztSvbQJvMiEDfW2FbpPrf1E36A5vaqfBEG7ajqFqZQxt8XN5SfNjbp3EadG6eacfQ",
  "key10": "2wLaVFATMnG1e1qPxMiXjawNsxfAXhpA3cioXSUMAXWsKWbLh1GXZuuePcuKP7U4RBqSboFnFhavMod1pR5bHbhn",
  "key11": "4qHwib8ftqRhrMjENx53GKjtwTskmNpx6zWK8c91uTjgAhsLz2B7wLwdU1ATeGBpozhun9uQNXoM6nFm23zBwE7H",
  "key12": "42tkWLpUMeyawv8Ef8LQxNLSs7P5vsNTX79xUtyYBs5hrHDJaTpirZcuAf9RjWBXGXasTmpJJFjaCCpGyWAa7MS5",
  "key13": "3PTj4AXq531TLEMeaMdKQP4cGpeDpRBezvVKehtRhcEYdULh7M1RhUYXeWodcZyxe1XaY1VkvYzV18Rav9r5jQiE",
  "key14": "4MJ4qHdhp5LHvxDLGu216rgaQpKfnq8knsZotyEs8AWPtEF9rw9QbPfFCYAXUNsSVmZywvH79jygX8hf6jLCotGb",
  "key15": "2cvjxvULk2LZKzvUu9JK3WQh7YEWuamG7axSL32JaRNqW8tzz6Q8G2RSuf2UL17VNEYAnCqybT8csDDzYc1conDx",
  "key16": "3pv1fcQ759NVy1HKkofoeAX5X4zKKzSDzFKaNupnZJHj8Tc4kbbipPwirbeCk6ZoYpqLYo4GkKhWwziuUPoAY8ZL",
  "key17": "3w6wjs5aCVwnxrhREREJxPNryyEbtFJtHzdyLnEfB9nbEf6KmzFQcGoTt7faTBC5X8jcFuFEoMwgrxwMMEwNUYU9",
  "key18": "5v6kfx25yL61dhYcR8UhtVe3Am8XqmDQivJpg1KLhf2pnztLbsiQeFRxBCqu4rt4Bmd4siZGNDzkP8BAHPwU53wT",
  "key19": "3tEV1QKe3dVMu8UtNWYLXN3oCX8ad6dbMXPGA1aoWDyYrgHBPGkk2FKjx7xE4P7cPrJ5ecSys37syixMovgVwChu",
  "key20": "NdqaqSL2TGo6qipCu8dAZLoA48WuhqQmwxKeCbT374by5A36dihPjbmcSPJwgFdkfgj7rnhziHBRsA4RSKuxoy6",
  "key21": "4L8KpuHLiLkzrNxtJoPkPM3tdRJFXH5iNZgy79gy77zPMYbF6yDWYPzyzjTBVFt7FQhkZBogST7cNGygZigkUt3d",
  "key22": "3aA4y4Un5NPcaUd22TXNQQkwwwWcH5RvZDXxJAFazJenLij8rKUWCAhZAsXCohMkvdgZt1E1bxmBKjfvBLkDsE9B",
  "key23": "2sf15yuHxQvf4aFE5yCGpc8w6RWo7397dYWG7BeSKMob2aTZyTxQFd1YPgCG4nibiEe7rCfDrM6wNUrz4jVqAEEi",
  "key24": "24eUmKhtP2uq36ug4w9bak5xkNydKTjT9zBLgPgvSnExwufifDG3Ux39joz5gAeErSnFqhGpzDfDnqbUvYpQB1Dp",
  "key25": "nMws1NKkU5ZMRfma3bYjWZwHcb3ABM5Fk3vqfx79VXhi74n9NpEhdoJHRX7TnsPEX7uDqeQ13QZVH2yVx8rssvd",
  "key26": "57695X8Coza2r9Y4dRLdChr4i7GCG7yEhBqtQ3MhUqbA6ZL7rjmkPbtY392ccazUnU9YKiikAi9FDZjYoFo37ZS5",
  "key27": "yC816eu3AeL3st18YZpUMJXixqmwkf3A2hWynoFraMbhBvLBGXGEa2vAYXVLY68yK47Z4QD241ydNgfLaGgXPje",
  "key28": "jDeniugms5MC1kTAHcc5LNUyeJbLxBBbQ3LD5cgEW16bXy5iSqb1Yhq9MFA8EQQ3oPdYWkk1NY8pqGpaLMurJFT",
  "key29": "5V6JKwQQy2HTKoHeFLCZPYN8M8DtoBx17A9uDxcpw1CrZcDXre62zMBhMJ4AuzsGPKc1jZQ4hwRc2hG7ngNqKJ5D",
  "key30": "5VKj65pu26oED4qEMZmrQTpJaJXmQLwJEyFpKwCnHZtCTzHKfhffuxFvWiGpShzkcmTd1EvV1CcmwYivki5unTG9",
  "key31": "4kZcprYjZ7m13TQjENn2g6My6HPNAF3GJyKun8od3XyfVz2pJnqHRymEGG6Ma4Rwy3Xni2fY45TTtqzu2WQYpzH9",
  "key32": "4f8cGoYinN4o57oPvidHTj61gEsD7sr7L3BrGTSTcGir1tRXGFZtj1b334vAeZoU9AYYx5L4R77syUS2K9wAaNd3",
  "key33": "2pLsNNSTEvt9YB4Y2sDRpoT1To4oKYkMRe2RKf6ffcXheknhBg1t1EALrnDq7FVepMD2WeY6DSbjBvZwCqzHcbPE",
  "key34": "4CGqR9cXNTv8uZZKmtvtPph3fYFNdbVeLaZJM7K3W4GeWNynm8mYFSaKnbaakhwGesx6FuVf7zGJgSp2uDTJpYDC",
  "key35": "2yZzHKxsxhtPDGxeVEMoc2hzFL3HMw1avUUgbqYKi74By5PZtA4Ww5M2asF95rGZz3tEuRBo31S8GG7j26xGfj7r",
  "key36": "2aqAWfGQzBCdRRLhmEyBKDTkqXzVSEz6KjgnaLKfSfMLso6uPryA9ZiEVTefJ3LvXYnMQFiqCuv3WxDSgfrbj5gr",
  "key37": "67EDjq1qP1ucSqZWnCGrbWB71gSr7U3LWQJ9N1ZzgFUjYWEoiuJt2hxY6b21jVwduzWGYWMtrkjpyxa1E545sZ5F",
  "key38": "57B6pp58Amy922ozhD5FX8C6uYa6aMSnpmNLpe3iHkfK7sZkTbRonVC8LA4L9GcxRQLBt74DSeCZUxFTdnqU6Jrf",
  "key39": "4cqx5R5cHv92yPZ8iHXDFu98EWT2t6W1u7DTzvSQKpbTu3iFqfLzd7bEdFMxGRXc1Gnf9jJDhYH1tALWwxNAHjD8",
  "key40": "rVsFy2QZAiN42ri5AQBdrLeyEMmYdqRq1BBQ1721AhcfvAUPf7spzPp24qAjjLsW48n86YthewZyUwsJCPsM3T1",
  "key41": "2jUJWxZF7ffmQvzMftrA2gvDjLY1uxc6pZQiwvfusaRK3ECZAEHpwM5GCjfLAiLe3VXKQadj12EsRg1DzcV1RCqK",
  "key42": "4dtgS6MaNih1p8vbNVQDrKiU5jwxeBsU7YPBxFEkPvb4UMNdcC1nBFZMgRnHyroAh7UsgXcBGKFbGg5JrTfjJCoF",
  "key43": "44rDQrC93hNu2W8L1k6eFtHSAjvsshzpKk6A6WDms5zCdAiQGYTtJFDHyDpsAfmjwCcd18VEHzcjArHqjSYLV6vz",
  "key44": "4y14F21R4ENkDb8FcbJZD2hKMYrUiyGcH72TqfcNkZe839kE6UMvPdsQVsNftJZypVo41gYLi1y9vZPC64qEDNcj",
  "key45": "5r2TSzBshVtXiGz7hVctSARLjZ2geMfiuMd7iQDryRgFJcLvGikzcEKjoWnQUZnb8951feS7JKAXmQCYvtrWproc",
  "key46": "2nfAi3EPDhtZq6AjPSZQQDPdzj5cWktVSV8QGVsdPh2NoNUiPfvsQXdnbncKqDQLCiEipABzr6QeaAjF7mJzNm9V",
  "key47": "25ch85Tuv4YYuoohiquuU9MaQjMHTa6PG1LyLYGyeTzmT2zLbTT1qqatzhujFu3fqVZmYPkFk3SfFgqeX9fpcVFy",
  "key48": "4jDwGZG4Cj6wgJWF8LUMyuTM5omX5RbUmyJkSru9okavQn1rDDZ2YuPh2Rat7jiKTk3aNzihKVVTB7tsSyi3VaBo",
  "key49": "63G4vSMT3fwGWKE3biYpVHRNuTu8pHd8whaH2qPktswxe2Mke4SgPVbokXZ7GjKwYhQUFtMUEt57AE9wE6fBwUAh"
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
