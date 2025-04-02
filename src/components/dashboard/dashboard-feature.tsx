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
    "458ZVdsAWs6VnNk29U2bPj2e9wnfodGuunnCfeZrxLSvUMNJVqM7kAKuPLuQEY7sYnZ2NuLfgqEQCpbmDBm58mng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JYKAxtAPHRyXm8JhcVHPABwUeqjy6jZD5W4iewjtGQCW9ujhpEq5bekUC3LYhtLM2F61YGgzVdjThtPY7Bc4RsQ",
  "key1": "5SPsMUSwu6myhjSyi9wscuc4TWhFuD7odtpp1S387vVwxZdg65yHRkUUdxRaGFBdq9YkUbqQcc3y4HC5PpsqudEr",
  "key2": "5JuxhuLEUVBwHYnbTUmMeo5KYSZRbfwp47X1Qk6vXt3fbFvVubdN2b1QsyecjqfAod8cr27TABwJ7AT9zD8JQMaB",
  "key3": "3w3wYcjvmHtvXzZXisEpjpJAPZg4tYLMtyuTg8vHxjHykvjUpE2arzXA4EoK9CPTZj5AXzjAdctGK6vDDAWvM6cU",
  "key4": "3zPzJJJn4tksQRUNPyeSHgwxjKRE2qeicEMP3a3YAWuFhPsm97ySCR9mqqfxQkkA14UAFF4JE8q3tCudsN7YDBpe",
  "key5": "5j6uLbvNTp6hmS3T9tnWRYG6mzp7cPeAAoWFEJYnNRdiUT9BMnWFC6UB5MqArNk9jm8jj7KaPXAj8mgdXUjFUFMU",
  "key6": "2Lnzk9hvWWz5fzqoHzJGho2Dav2nkaJZY8G9ovw81aijgz4fjE4jZJccou6HMqipwCwKYfrrtEX9QbHub3NLRVYN",
  "key7": "2c9JjPgyKUHYAsrHVbfKzshvKHmdbMJpZ4v9Q6uQaNT8YG7G92iyYdcwn3RXbKAf11xcKjPdskC3ArS78r5KzJ1U",
  "key8": "5ZrYGpKfKH14QLF1uzx5vdeZE7gSdk1w1mwJ6izLUDytspFkbV7FNqp9huweU1uVio6L2dvLdDFFUcRSEKEavYb9",
  "key9": "mwcPpWik6YfnUjNiCDbGpFmoMfzMkB36HueGUc5YUKRZ25NfGhRyBHDjjFnVcvdvjB69VLzQbEv81yFcVodz2CP",
  "key10": "2F4A7j3gG2xJoFm3qaf4fQByBB5CZ3ZQzEh5QrNvyxijcPTpuwqcUDuFoUgsui6SHHKQjRxiS3xDQ13mQVsdtTjK",
  "key11": "4EuJJq8BvSUFRVpfiRrwaqgCkCLvBxVPG3TULxVxXXjcy6fZu3K2EPTQoeQEbaFCiTMeBrZMpJVhMsokFpaKixUn",
  "key12": "64Zu62De7yQe2uKG8yv9eshNHSuWeVgvTazvoqCFnphk95ttTcz1JbsZZy7sCf8dWGoSessAst4Li835LmJigrKV",
  "key13": "3dHX3WtmEc7dGwE4E267gp1sscwir8JJa3ZHRHQud2FcXQhqHAUaW7D1NpVJmWVSaGaC56Te11hnMet6j5JjWxTN",
  "key14": "xCyU8hyYrPa4RvDrGv1Uxguabx2dZPgnGSFVotbFCdr3h54gb48Zd9sZNdV9cu3YFV2efguUHnqZy7WTSVBNMZn",
  "key15": "4aBb2926QgR9WRJrrG2zt1hmgsu5Mx4fxfq7bxyJLkUf4Utpo2j9AndUipqVpWrgRnMiPF6XxueVYfMuHb8jvRWe",
  "key16": "5YxmT5bvdS9wP6anqgJ7GmNbBKi6m9nE5m2dB7bzc9GsYgpF9Fcbo5fJPHuxrzMWtMrCYRMhgf6vRuqAcgeh5V27",
  "key17": "2jfrZDLQhqqmciiMiJe2RnBfwU9vXn2HRL9dAJJWYkYM98UrqTiHtepqfTLnLit2A2Vet5cG8NzdxoKJFN6KDf1f",
  "key18": "5rXFQhRxoz7Y4Dcwq7xwEKrkc421hoRWgpLvvhTbAcC3AKvKkJNXpDWG45n9H6vdunLqnp5ckmpQySXG7jVjE1Ju",
  "key19": "545UqyNQf6xL4PP1nLiuUGfCvhEhHo7hqB5ahzYvD7ZkG3Lbo22hEBjyh2ENKMTBkM6p945DkZW7LYU9jB9TWhdN",
  "key20": "2reb4hfW8iJ8YHUsaYazSu4AdyvcckbYu2UwLE2Yt5Zo3vpuy5iN7VpZQM3NBYMj5kyXShuVexFGkLkrSZZwXHh7",
  "key21": "23rJH6u21Fu7Sb5Nw6eQDCZCt1UqjyJmgW2evk6sZfmBgCgYod8Xr54xZwQFbF61iJLm9Vi6Zti5HAdC3F5b3NzE",
  "key22": "4r8Q1ghJZrExdueV5zstg89khnQwPgrjHPXZsKmHrAiyNP3qA1jTNMoZrbG11amemEttPSq3BgqQHKznUsGMJNBk",
  "key23": "5wpQaymAc4Qj8pK3rKGQub9rboP3ojRaGdqgzE1CHQKHddkjCr6piUVsgeFx7bhXCptmf5cH3K3RZE7Aurbjy3rZ",
  "key24": "55Xsr1qzxsDxpLvzJNHEsn15FM75ZN2UGbJY2f1cMMtsfbsnuNoBAc6ks3F8LiX8gDDkpxnrEApB2SCyMitFSmMc",
  "key25": "28v8y5qgB8wBTHKHVhn6rh4Tziufo8paDb4SeEq8vhexuuxHWCHXSJcP5XWDYPDLurx61NpsoGsNqHDkGu1Mks1u",
  "key26": "HEsZjHHJbRFHeqkb84o8YjtGHnvs9YgVEYTY9J9mVdGNT2vurUtKLaWTVy5hPLDLZDGM3fnxq6Qq8CCHYzfVSwU",
  "key27": "3sYs1zsSnQXFKn2uS2Z4ABFUS2CYcCmngVs91iymmEPoaezFaTeaJ4SByrsPgRLsMR5yDSie1fk4nVZB3Nu3eJsk",
  "key28": "5g8Esbsq9GqdVvWPmyTDXJ9VLt8wCT6NCeGKKeSRokaVCAgsrorhvm8ZTN55h3emm47y9SMTfVe1EvvLaqFWJbtA",
  "key29": "4yAui5wZ7bGJ3smPNHn3dCAus3WYbebTDVC1GPgueFAiMZN7Rq4867RUEGkSMk5xv5Ze5L4SpGiFDtQj9Ko2iVAZ",
  "key30": "2DK63BsKSiWpVTP4dAHWid4YwHnCWJQsgdFcddQtJHfs4yDgKbHpnRhWtu93ngu77osMHLvrB2hRD9VSfTrXNqdQ",
  "key31": "32YrZbSr3rd1dnNv5VYSfcVAmu4BmNCyhBrwgUsT9sM2fvt3ToU6vv35ey9h8bFkHiTJ9EVUsf4UxZx57tL5PYpA",
  "key32": "3J6ssNjPSwYawoNoNAs8sKfE6vBBJKjJ1qhGVoFE7U6pi5gaGrgb9C2rwemcvmV3yqMgfx2G4qjDzXADBf9CmcQ5",
  "key33": "3Yb3JvVr9Fh5cVVQsQZnLVT2hUUYQ4iLoBPgJ3hEhpEztD4YpBhmn1EnmWqDWaPySmYdkSAbXKwLLD7JrogAyA2x",
  "key34": "4yhvpqCV4BAjuU1FjuhfJacfeGqJnvmAyRRgBmAVZBpVtcYSVYdroorV5RQURbkdEpNnMKXggYmUJ5bTEQDXBfqx",
  "key35": "Tf1TCKkXxAEiGVum3FgZkz6116VAdig5L4jRFSBdN9wNrMwQaNP358GoEeEfwVNogoXV46bKFA2JqsRVUBmq6E9",
  "key36": "5cbBHGvLgRXeaP2XGerja23ywkWrb8fS7CzaWGgmLUB3iTpHJq2bxcqLKCsNko9zXHHaSNow9DKqZYJmW47VUefk",
  "key37": "5m7vdSmF6RxnJ1DyoLvTp3rVRssaaXeaV9MgPi4PWaDKRTabgwZ3Y3UqYGG64mKDsSppkUoaxvbcfKSKnRL9aFdz",
  "key38": "oC6dnTUwh7erjgYyEfp955cyx9Tpf9C9qHoauSgBA5VKDaoUjcG2fpzjYiRTtu9nt3bUbFetAGH4sUaqapJ7a9o",
  "key39": "3gW3JcF8q6cwjEHsLKJhRL8c14M6afehdPVrQbR3Rnzmg7VU3mSfhWxnxERDf7K1Ref7jrcztGgokkYqngfKRqyt",
  "key40": "4tCViUfFGrtWZNpUoDfCfxxPz79issiaZMP3SV6L2P7X61Zi7rfkUVrvs2GbVQuzJNJXRtNdn8ExHDfbh5JCv8QK",
  "key41": "454xPvLEukiBStmUszdewLqoBrpHtBzqnTadTKzkaxdiMn7N8Gh7fiGm4jtfp2EXNvyXoyzgnpkiLEyGy1CqcKQJ",
  "key42": "4jhiv467xFZcSEr8bXqFEsXu5RSyF1VU6gSoXEtutWDrFb5xb6FN2e4vbJhg5Dsk3Q4BfBSMw8Rny7x5Wku9hfGH"
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
