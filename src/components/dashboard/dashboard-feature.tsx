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
    "5jDy7J6sxUoCAfgvjnff5VTjvX47n3yn9GWVmycSrHs6QrWMNQm8ZYUU5HcHe4jhRoaKYS7pgPfWtA1La3XuPW7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fnJyrgdrr4LKTqSJ5B9kyStbaKSdDZmCcZ624HUPS4fZALtfSEbEAMtx7omo9dPLQUbvUvmbtXRo3x7N3mXSYzd",
  "key1": "t2vacbwjqhhTdTfjrRuz9mDxQicCvTYhssC7jVP4kVYwStG1yjXQ6siTwfZPpREQHPqv6vUKgTce3m4CiPrZmVd",
  "key2": "4Qr6SuiHppsA7L3cVzZpxtjenvEQvSNrJoBjdGWmnoadrHCcH8BJfrTdgmPg2D7wFK9gUNu59fwyRG5saW79L4z4",
  "key3": "4ugVf66QWwJqdNv2AgRFFRxtGUBHFEcGUpGN2jHRYCwSupSFTvWwWFVpvaqdfkvxBrAUdH4CXPU9XRWX9wbxtqpy",
  "key4": "woiEy95FHtKxQei1Y23ohpQDhaCsAnQ4XYMQENdmGdhYoKgHZJkzpB1Dn1NtxYoshCihJ69FUNneLTKzYrtupVK",
  "key5": "4bGKkg1a7mSd77zKS8B1RZEdqGQaoYLLZyXCcy5riGo7LyQf3ZNYsuZCK6cEXxVhhMXbH3AvDxvjdni8fB7gmzT1",
  "key6": "4MTWXeB9DYianks6J9hjXmRM5KuYE3K8Nv2n7VZ3ZHHC6nkBBPUrsnpFUHhgDZpoaBi4pdDPwF4ndC4CvtsJHDd2",
  "key7": "4LqMnH9FXZkTzjfNXaA16bG8ciinSVFooHbvsQcgRfcJPpnq8ymj55Y3c4FfDfXfUyGcr83H5dKA4pFbHmifM6Vy",
  "key8": "Y3Tw29trDrS2ZJTybMGxF9uGdQULukgzmMoXC4WJE5DgxQXbGdUbUbxdZLLYVKM2TfVfvJ3vs59yKy6Ud1RsYpz",
  "key9": "25LmVwHJhiGPxuLvM2CzdgeF483YZmFTt9WhWpruPnb2AfSYcVDnpsihCn2oQeiDVdaKv9TrR5radmkXznSDwPxw",
  "key10": "9T63zFG8BJCescfJw2UEJBbSqnX3FGnoNywV42C6VLk9x5ENRYCvhG1nr1Rmyfh4mP35rLytzLLSkqftr37GUK6",
  "key11": "6rwfcpD3Vv3UE4axwAxudh1EsuWQihPcps7tXw3gY9C33qZDUDaZDDSQzzCuqjQVJAjyty4HgYKntWqV33ieRP6",
  "key12": "2v92CTZ2ajVvLgRcyY7V584YX9DooupgZGUsuG865wUSr94oFrRGU5j3kokxZQrqyR4e56RqCUBgc6Vr7vsjbSHK",
  "key13": "3xszaAftRip3Wts7D9YCKJE4MuafWcp3CXMriA3Y5E5NQtyUuC2QQ6cr8BXpfnxWvbprct36CKiZyD4Estm7VaSY",
  "key14": "38Uruj8hHiqhMxNjmGXwrvHDViCaZSMsLtmNcSjoAhEd8tvknNy9uhHmMCxTL2UscaMADZ6UeBrWuFvBkqPxovwv",
  "key15": "2qZmEtSAwdjru7hsBue5LB5htheSCoPaUrAhmwMBkxGqYGF1HPBxqWJGmZ15781RiTgsdAHQZW5PKezmsmB5aG88",
  "key16": "62yj5w8t6kaJ3D5QrcnJRpoZSgh35AK9JDreNenHVcQUjNd2wWmDP1cCbgX9Z11dwytGVK1m1E1vujLkUEdhinMB",
  "key17": "4MY5rbQqTsHimbnHVPYBUhF9Nw6wAbmCrvyXrfTgYNb9dAgtz47uEbVS6Tuv3Fa2Fm88xAWpwTH77Meqahe522Zc",
  "key18": "4uSDo1oug1fgybCJ11jiTbB5zgkeRNBWB5cqHkQGWBL6ZWgL9fa28HmjJ59ZLr8v2tUkCwNRG6wuAJwSDhjdLfSh",
  "key19": "4mhy4FwUSecKkFJwFLxTiER9vJLxx6DKd8A4JAJYxX4L8UUWwFQF3ZxowGdCwkPY6vmWZrVQ9TUQssyoyXYsLiDb",
  "key20": "4TRknwMfhg4oQJgUqkQRzBZMojRTRhZsbVJ9FKZFBTkadDgpbqSuzYkjkjHhEGAjRJQNYhwyR8T7SapvXyngHteS",
  "key21": "4BsjUWs8ss3t5QEHESGRmFrwBYU8Q5S7vAtH6PgUfLzw5p9ccK567CiP21JSp5hkTokqmLroLLap4FVQEcYUoEvd",
  "key22": "2VeoUFKSYA2nrcsom6WUXL5TTzgmZpvhza5qSpK354mt8TWBtK8pcpwSXjQ8vV8z3eonxYVYiTAd9T4xFsgmAm7K",
  "key23": "2qBFqrrZtjWf7Wj3CjYdePiFcM1N3YaSejDkGAVYUYF37JxGaBCiuULWQ5wjmMp97dBiUKpWHMMuBb2n13C52Zk8",
  "key24": "4c62weoMMcubLRK7HB8mJ5JNKT8S3jKbST6hctdGoRStn8g4v1zYSYJdkqTzBSqBSLkZM3RwNmwZxuPwhKALRC75",
  "key25": "1E2wADpYkRtF6Uvezqdh91MLpMbtJCos2TWitfLCSRYF7FZZkERT5GopZYbjWLGtcSCw9NZuJt2zb33tNhrtPv9",
  "key26": "3EosZytXWcNTstjgYKj4NpVhgZfwYXVFGcwFYjzQicLwvwn1evWnHDxgpkfxZRSNAkTiqVQRUS7iQ4FvVboqJAY7",
  "key27": "GMC54aXRTQkqbQaZ48xDc35SUTcwo9TPsvuVyMxGdYihfcnCgrdRCL5wXmbqkvP8Cig34eFbHAvEB2Q1LcLuzm6",
  "key28": "2BP6KJSjWV3L1uAM1zYQY4PVdB2FpBaToJWzyMUytJMbgHXwtHS1tTyFtNr6J27usQ4SVek4EjiMDWF8G5bdVU3D",
  "key29": "45amw3heX8uc5awyYiLVZ8oFbHyauL1anS48KsQZfaWoJ92YZJMyPfhzpKcYXvvUnts8tEvs12WiWeYZMcWXApCu",
  "key30": "62SscxVcgUC4FYpaBhVVSAYkLj415U6SvdMY8KCEES1EekmWCQwHPvnWyi6JzStwjCBpHhAKmApEQDs3kS1gQX1H",
  "key31": "5KCob6bV7Zqb9KDG37XYga5wXHo2SeGxeD5NsMwUdDKwD5ctfet2jJVSPbBDrdkFKfizSpB8ujL1HqgZxb4HAYin",
  "key32": "2kSMS7oQALqquRj3ZHap3kQ97R7S8fCFakwtC9Fxe6Tps6Jbfy8addixcJVQuDbq8qsC8MZ2eCXwUtthGsXmwPeg",
  "key33": "UoHqXkjvGCGP3himnxAZYfWQYetmaxGwR3T7KkAJiQSZ2F1DJTHEU5HKv8x9AN2urTAV4do1Qu5szakiTkq5HtL",
  "key34": "tEERxF68avy4Btdgtb2s3FAPLqY19bzT5Lige8D25YSkACTyM13mpy8Fj4abjdVybenCz6RL4pwyUZYbUyrfopT",
  "key35": "mFZwPB5pvzGrwC2VwewKCfMyjj8YNL8N6Mn1arBRnXc9grkWbfypr4NuLCFzbA3S9XxcFJYMZKbSRq8X8jyDQtk",
  "key36": "3aCfJfhVB6kPwpSi6A7GyT6FoiZzCsavzxM1oSXaEMgghrGVd4cWZ6WQfgu3oiCEmZU2rBeF2nFAs14jNQkvt9ah",
  "key37": "5D3AgvbCExQzUnwBxBoUjcM2hcQPbXvQbaQGaaqb3KQN51f6fwAL6JmEu2UWJiCC3oNsWwzAfbAsajJdtS9gfxTE",
  "key38": "2UWxRe2PpNj1hFGQb95cv3rQyZmaxtJJkr68KZwtDN2CSweqCfY4BBYctwVtezpPwX4yMSTzkS1U9wngF9NKu6vM",
  "key39": "3ra5idvd5F3t5ZmmRZwwVnKUeKZzNVoVdPeSSmJbVeb4Up2VYrYKLZAwrxeD9Umdat11Cg9qTnbsvcKbFhMsHzUK",
  "key40": "5BLtBNEoYyfUjtKijG9zWsy6vTQfr4sWSvDUGe2J1UNGqmqorNBHVXaguAUpzTzwyuuosD8N7UmcxpeKWyFtqPTB",
  "key41": "458Jsfgz9buN6NmVCS9J8JGSmfUpfDyaVpbeFcKJhKn3dm4zV928f7jwtLn9FnBJ4ATmXNDwvir57cAyNEFwqnk6",
  "key42": "4EPZWzBiadZGjM5p3PnkTJyWfxfrtVkDhRZuVpy9tn4eyS9B33adCsfXE9yPFZpD7Rxzu2bfJgatDCvt61MxebWK",
  "key43": "3z4e2my4sB4TWvHfFhguuA42W4v2LTsfU12q8UJz3qAosgW5Vnn7wAeQb7pt8Cr18bRYLYc11iDLsnJdQBY4As2y",
  "key44": "PsUqPCTk1xefZU72YUTwoSaRGwxT9PcQsHPzHH1nn32FEHznKLgdmCbmteYL13swoPLmankohwanaBxwV1vsmjN",
  "key45": "FouEjjYSb2UAsJDpinGKBv9DrmfMRhQJncaeSwX7HRMsobPDG21QTXHVMXJG5qc6KbmJWkWcZLpV9xTtJRCRFUu",
  "key46": "wa4SniTpNGX2CgYdKZuNYC5zjrqRZhQp6daDsRRNpjKqwc6fwTFVmaKskEadyCYxw9jCrKnkRJa6gHAG7ArrE4m"
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
