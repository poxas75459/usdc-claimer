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
    "4WeUBrWL2zo6SmFE9kVgkqDeL6dSUV87nwfZrh7ssqu7aHkr8RD6fjsBA1H9wueuQopFstc84Toj99HA7ayzoQxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ok8GT5yTPdNkkrE4H1qx21phirB2NscYrZscp3pGokKJ7AP3sxszuuGwGMLVw51vxkE1Gsm2VfMyh6hwVyu1s4",
  "key1": "58jX9T1EimWge9dFFp6gvmd7eT5jYYKqtoCcccA9twpp3mCqjx2pjW77yjTSaymVU8h2WeQE3Wp1gYG6sZjoNgFZ",
  "key2": "wreUimNkKxeD1cpPXVKJ3hBnuZ31rLpmxmvHVgJ4hL7rKPQ9sGHR2mKVtHmrtYA5QPdHJXsAbA6KXdnp1pwLKYX",
  "key3": "QX99MSUD7ov91US5t4KMTWuXtnymkjvGjPjaWad9yLRueyGSeZvxczLcX1L7NdZhUnzzQyHeW4jytUzWcJFqm3W",
  "key4": "2XUagEgYsybxgCcfEW9HGFYnYMXME62Gsfso8BoJz6tZbB2dKevMFuqPPWE4mEWHJvDobv4EM7PnzQueqhTPrTJu",
  "key5": "5YMRASqC5Q1KUKi8qBviVZA6M4fEBqwbGBJvacxMym4waoFoAbsYxxQNKLL7TftT5BzhyC4xFzyV28rKhvDnaqAv",
  "key6": "2xFhGGMyrEuYGAPdiBp3k52292mUm1aT1dxkXBqZ5HAQAxjCvpDXh6ddggE77ByrMaDgcvs6JeA3Tw1b1KmH35mS",
  "key7": "2C7RSfom6FSmF3ZH58fPY6ABk1qaHaW3ANAkg4gLcBGaZHFx3Xas5N1pskaRAbEWMBBPia6RsvcL8WXK497Gdk5k",
  "key8": "2BtejKJ3GxqhytZXUUZmpBJgj2yh1P9U83uEoShbht2hK2crpwJJZJS7S3iw6Bq8Zfe4543Ki6w437mMjfMgqhTq",
  "key9": "3KRDCvyEjeMW2mN2QGH4Bi1Po9vZxer3Qx7PKDWyBxYDjLQQpBXuf6J9RorUNXkXecd1XN7iCt6QXm4jta6TZwQk",
  "key10": "21L7BnV12vKMpM9akKyi6DETVTaRSUCFwYj1ajNGmmFcUshAKmv13B9dJSin8EjYqfTwUBVh1GaBNXiVLEPuNPA1",
  "key11": "3bxTjSTnprrRWPv8o2eniNxCrkTVrx4ojR9iZ1wMaSBGvYopVT8sFqAPZ5dEydBBag3q8hEjWQLfYowic9o5K8J3",
  "key12": "JKgVFGjJWopoFhP1dJNh7B6rzizzsdHkcG9oqLJXHK1JchrUUoj6zyRvtABpdrXfpdT9wDak8dULd6LdeZtsRAc",
  "key13": "VyVjHMqZvQWjuCm7LTa6LvZjAQSmuHuN1c699PXCupYMUg1zrmfhLDwaHLF1Wx1zCtyiM6zccx6U4hizAphJBma",
  "key14": "3Uaph3GNnsBuQSE1CqLUTD6cg5fqSrYTEBNXxFp2qwfaFodH6VddebD9bQbBZqmmMJUPLFfDz5m4UQn1RniqpUSG",
  "key15": "5mRTjVi5NFouWgLPJXeZ1E1m75MP3GjpA3XjdTcjmvA7oBCeAcu2htbgkeh49zJqpmgFh8NjSbYGwVStMQXkQXVC",
  "key16": "61Zw4VgBARKCpZrM2smE4TNWLDkVWnakkEdET4mRCPg3biAVo4oyUdTUuHpYRabcyhbmBMR92ExPF3e8PmxLNWbe",
  "key17": "2tAvgzPWpTL9tr6YoLC5ri6GUwBh3GLxBG3njDxzghmuYbGDF6NGfDJtUGUMux9VWHi8y8JPvaveAMP7Rhhw6uyd",
  "key18": "58iJy3uSAkq3VE95ApeX4BD9eBdH26nusLjcQPmjn2spZFD9KMmU3SmaL9m2GXemuoYm5cq93cjoFDRjmZycRE2o",
  "key19": "5mhZt4JM5FFRtibzMWUyMA8KmEW9wy1AYpZyKxDQE2HycRsiycrjHE23tFqAXPFQu2jNqKBZ4xhQibt1ARZWS7YY",
  "key20": "5ag4bYzUws5vK8DTJMXAfVsARo4CgFZDGMStNpRWKA8CY7FrAD8dbAJdsLRWSA27KY6LvYg7YSLNo9S1ifdbC5NQ",
  "key21": "5wwYcrciKsf9gHKH1X3znuQCqVDnhY6rfHuyUUW6Yk5pjiwSqqMF4E1zuJfTkG7tWCywr4sUJ2kF4a89hC2GTWo1",
  "key22": "49KSShmxiHs1AtdT4g57qSDgsuX6Nvnn768SaWWYVMvU4yvzmPgPXFNyrcSPokoQveFCbzDq9BJqjjHUMKshRGsy",
  "key23": "3Ljtk9dD2UQRcRuwPHAvx1X4mdtM2987JdywxrNiroFVejh11sZ6e2ka7kt8tpNy1WRN33DoJwtnD8s1Tt4J8bWY",
  "key24": "TKY3VYhdXhXAkjwFZFeMFrksqa9Q8vJAiNyWTVG9seDupWdKDfsrxhCv51iXc54jT3YHJnTNeCXepuVxz3D7GEx",
  "key25": "4dWj1qbW7iK3dMU1qrDdVX17FL9aYw95yavcH6h1NgV8kD8DpaFgBgy3cuyboiRCMXJfhuCLmDf3bY8yUEPnFrbb",
  "key26": "3JSTujXSV4EMhi4qct21ryJYoFe6U1PqfEGqWqHUMmUiEfWp6CpdejpidxVX9WTD9dEeYaahRfsHfxX3KHMuuyft",
  "key27": "2RURq385mXvQCecnfFMWNUQhmXn8RagapuMfhjDJZ1C4ruJ125ujRvZFWG6aTbhZPAHKEnDxuoC9tSFdSv7N5KGZ",
  "key28": "2hmoBjpVEuziK8C5rZo6Yhbti627uyuNshDoMg9MYy3WUCPG95bLxWzyhM8d4Mrwt2JT7ETTEWaKPowXLsW4JhcJ",
  "key29": "4HZtv9mA22V2PPnXg3VUSTnGGFBsw6JcBDNEU2UjJap8AHRsbUG1rtSpJftd89FhxyTSnf7QhQD3EqPvoeU9NgEi",
  "key30": "BZvAjwouy2J9i66M3symLtU89RJrHWqb3vea9qsGJrnWuoJvxudZGKA9csFCVvUfoeHngd4vTiUZHKJ8768VgqR",
  "key31": "36FfLdgXKLVV52wFCKUmec5jnfSJH5zPeeV6QAz3H6KUPx1Zbnp1VqHGMZjrrNsvov7xe83dgspBWs2a3jdFNqi1",
  "key32": "5D29PjbwAqjA9dvfTQmjauezb5kQ2w3sT3KVMQXGdLGKZ1U4hzfZkHNxDgojrcLAHHAx7W7zx7LMaW7qFPC3jcnR",
  "key33": "Gz6SanMz82VzWxgNVCFosE6cBLwty5kr8uYUwZ1MpihtFFp7czX8hjLnEBGbhoTZ4udH38cGgDSZiRFNEBER9aP",
  "key34": "58pxnC4hYuDz7miNjHxPoiwrWWTLJtQvvDBGeXJKT9JJcCPVqqprVcTHVaUCY2cBJRcihz1WdK2AS3RVvaJEQtqs",
  "key35": "2a1ZJA76ZfDFZMfpkgv3LWCUvLV6Pt9o2t6NqvKVajEKtzPDSa7bkNKMRRFYEqYvxqKxMFMD945hQZEdpwwJooMD",
  "key36": "5aBhawqvRa6uc8uwRWjcZXDLarSkzr4aypuHSD2cZzYdqes7LDNkipg7hUkVX7qYg78ZHeokJxXbzqt8nfWY2q9w",
  "key37": "23UWEPPxhiArBVmtskndQayLqXxzUPvYEDih7eohTtWP9XvGLW3NZCqub8zLxbsua6eF3pMzxzPcCHD3xAmRkdcB",
  "key38": "59kspPyj91c2r8p7wfWt6dhTAU6KgxE2Mkp63wAtqxXZuyxgP4hxPaAWuR8UyHFfNmphw1hm5mBaWhcDAMUPeSab",
  "key39": "4NfghxJ4ykdKBwfq8KZfHGA9VrHnvVNXfcb6evV4V9i5UL6q2uUGbyqBALBDtp8RasdGLmo1ej2NXW6TBizYQKTJ",
  "key40": "498kom185E58gijW3xUA7Z77djehSduiKHMdqsjTYcXoUgAjrXiiafdBLTrBiEP5FjKivxqnBrvL5Hek7S9jtzM3",
  "key41": "3rFsUhqMwVH3k54uxTe3bFjwcNEp3XRtwbA4kHnetr6m9J9B5tYS6vvkunNWBaTP9AykdmHsUBebgXbFviuMBCUi",
  "key42": "riR1pVtzHk7j9GoA8RfdsJA5scNCeTreHRf3fU9TWMsVTgwGdQDWu2aZZ9dAu86u8qBVhXqH3nj6VjaA8EXodko",
  "key43": "4rF4ZJMLx2V6pH5uRUTiqPSzocfgn6xYCinseMpWkd9ovDsoCq79fdqVSa7xCt27jt2tX5kQEkeaUjZGqVaEcW39",
  "key44": "3fgnNvApWdjZfyJLZUp4RHXaRxmhQ9qox85HYyH5q2ZZHozAcTRfcL3pQrNh9z7SPPFjn25LUxFtKKmjZYCymXgC",
  "key45": "2YvjxzapqKaPAFmpLphLj1h4GrY6CiBViwnL2hc29SLaQpxSQ4BeyPsNk36cTsiLSoEBtwtWhcu3nDQcjVGV4diK"
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
