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
    "3peDbaThmTjH99FqkTZwQekA9iDLsPyyUBdfYm17siJcW3cw4WNP4FAD2WTWqw6xLeTYv4JRcgYEmgu2HEiVLbo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L8cwQVTkRpFfwXPMu6dpVy5bpr2mupH74d3XVFwoopGdJAiH6h4jatvpV5jQYaB6n15LiM2FhaZqLGgGK9gS4ED",
  "key1": "4ZzNPN4BS9XvKWRMDP4fSzhxuNBcMLrYs3vR5MgUeUZm6RohZwrgVvAnX7R9tC1yrZ5HDtnCbyqUipwgzhNnRg22",
  "key2": "o7wNfuFvkKqfAAQpNHRVKhaWengewsJH9ZL97uRVfPV93hgzr3svjmRUidQfuJoXRws1Evc2AuVxoT9bX6Kc5VF",
  "key3": "43PPd9XRCFCSQ2cDqQBTmEGqdHEgqEgrU8J8vxBieWR51zY8CKHwYXTd3LnAoGrk9wp9axCeu1tmdZtGFdsD2s8g",
  "key4": "EmJPR4VES4WJiRKWNWhXqrNApouTDNthvE8wQzjr97ZuETAAvh2hk2eTB5rUbzA7hLV3JJaJPdwTtvLPxrmVsVL",
  "key5": "2FC4eVSpK6MVNTZo4SpxLM9QPDgPV8u1bSzgivB2LDs8R3AUtULteZgp6A6X5M6ufgXsr2MKSSkv8iL2dQUi8A7P",
  "key6": "5SJgbkHPA12incyAAUdPbgrK9GT8i755Tzz8cMt3CDLYRpN5vbqJ9QpSDNiNbd49viJS33iZHq7BW9PaPvnt1r1A",
  "key7": "4dCfgjKJwSYiKy77yLxStebVTgf52EfGxaPwRfbXj8E76MF2CZupwAzLB175PCfDTQa6RrbjLtAz3a5yZyn5b81L",
  "key8": "65wUzCeFRyV1j5qfziTttmQsJ7yPazgybnxbW6ctd1uhqAJ5p5ueSKeHGJAkhKtaj5WauMkMdZrcA1o5KfzGed9S",
  "key9": "2udxYc4qdR66HiX3HLD51pwY3SLkyd5CWuHgWLRAEGSfpJeVaRUoY1QWgfEacK859qa6jdnP4bawu4oJA564C5hK",
  "key10": "4dJ1TkZmgbt81Th1q6rJkR7sgHzUqS3RZ7zsFRfFYka1KZg7GAg95jQN1vhZwTr8MWQFYrZvhXjmR6s6pP6ec6jb",
  "key11": "27A1pjakda47ZoCWeYXpyEN2pzkrChMupf5JGDJsrpd2QrbPZtMfW267evtZFkL84ABngRYpr2y5nRRZDdfG1j75",
  "key12": "5SQ5cLjURCc9jyCewYmQ6zvqddaiAswv9H23j4AP78d3qxrtQ3ic1y4ZdvpQdhBgG9aT8hTHWB8cJYAtr7v9Ldyb",
  "key13": "2XkWtSQiQzfTWD8STNW8Y3fzgMPM4Utu2Ngk2y78MQ9wJwZZtPHacujZwkzmP9sAKFS9YvvwuJkmG2QYi4chuL1N",
  "key14": "33sWcz3X1uyc9KnFabarMcNfJR5ynjiTHFCDDAw5VYWy4vbgW8LgCzZ82Xo3yzXoxaCDgjpjAjm3cYDri66gvRi5",
  "key15": "59eT32o6wECh2Rfua8ih9QfzVdnyx7C7JkbqZa9LjddpSCz4N5vMTDWqgAwZrWg1thTy1YBUHtVNmYkJCyMuaHtF",
  "key16": "3UZzjVPWx432Z7VsQ4BgbKCoscHS2HbmD97hTnP3A2N1FTSZMyecPaoNZEELJzYtds1n69v6PesjEypPNGbRoWYK",
  "key17": "5fk3PZWKsnWXtcYsgyQfohhaUGLwFGF6SorSfXdWzQ2Jp2NscKAWXkLX4Zop6boc1UQ4m6kCzWScbdmwDzAygSzE",
  "key18": "3wkT7d2SwpzizZnCWwiEtYaK25dZNxuYaP2eS5YutYGasWFrrS3F7Qb8GKjU6Befy4q2KiGEbu7BdpFkvqe4Scpo",
  "key19": "3EovwpKdeRyi7BbX63E9m1JA7NNWp6954EsorepUifArnWT5ySBj3wsEajF9KsDhJ9Aouy3YuwuEgeF6rTQtVSP7",
  "key20": "241mPRePAee4xLLdNMpmzwCxPWnJ6AEJoEf68aDTQ4RNT2EgKRhK7YjqgUwDQPCZ4mvHg7BWVr6m23RKcGFJ15DH",
  "key21": "51D1hoLSfBbrwJ8n9Co37cpogd8gaZ1dei62em31udDeUGphBZsbwWsWdwSnzHPt1BcvSZHtiJRHNiFa4orJm237",
  "key22": "5zBcAeKLJGWqEyWTvZVrytgJzjTHaXPivzBBn7MSvt3JBMwNDdcYGkuk5GNAG98ijVq3hNGqTHhfo3z5ph5SAonk",
  "key23": "RLqfwbXcxQKFDSr4gFJNHSgqriGY8uvu4LtLfu1ttP5bsHpRyB5ZGWZx8M1VG4Y5JsaFmkEnPxbFX89wZCfUqvL",
  "key24": "5ny2wVTQ8vPJqmNHa1S9BKyuXnT3v7hFTPCtcDzfWsSSV7dWu3Rk6v3Q7nP3wCCASEbB1dhiZvqESRgJ4PVsCgEm",
  "key25": "4dB7g8UkPSTXEULAW8p7n2LDqH2NhrX473CftYhStbybZSDH7ExGrcrAVjt6SNpnJ6NpKpRtXokxU3vyxmwJfeUn",
  "key26": "CXeqTfGmFWYD92jQowquUzw8sAmEdHmHmSsVeuHpgg7s9AbeYsdFJoVvDi6h3NJvzimmxzbYysTrE8fnaWZRS5J",
  "key27": "4QiLkJjhDPrCrshMHCTQXkHW34qYBckegHWiLTHW8QXVbvKF3VmfQD6t3rL23PxQUHcs4JhccAG2Vr4uWP5g45dB",
  "key28": "2L3f4h4i9CLPdpEC2Y9SNE4ABLqZQaP2eoruEMSuUUgowGBJ2CAX9G1GDX5C6E8wmTXvK57PwnTDP8fp6myocF3i",
  "key29": "5k3eUXaLCqzF5F6bcbeLoCzEkgTBunM1FiXkyBkipFLm5qF3q5ech9fw1DYJpFZJqRRHmfEJxH3tU7VmsBmogoZt",
  "key30": "3ZkqkKBc2w42MkQW6N53bpyLPo63NpKD9GWM4FWH9u4PzTmMcNqStBsvJFzzzKSt2tmfysdnAq6hKgzaS8aS76cp",
  "key31": "3gBWnKy6GoHxAHYFZSEfgM54ihW8WMgm8dYt7fCt3Ve3d13y3ttfbZGGtcSb8xvb3iePgQqkMHS3AkVEDcT2idFF",
  "key32": "3wmYzGD84DEVdjbb8uKeZkfDiSPMMqSMVVHz6dn225HkLvpW715tGpiHWdKgYM1NZod8iNyJJqC7kVXu5MkfWwGR",
  "key33": "YFV5v2rDMEGDHzZkoU9apHhAyvuDw7sLe3j5J5YWrQ91sUmR3EQqbMZ9LTg92ymohR1KB6eGzvNKkija7HGxZLF",
  "key34": "4u4RFRZ8GX4qDJR6fVhoJ8U72UgU3TZrk99Q9g3ZFwdN27wq9dmWHKMkitLQKxp8G4M5HgR4bqCoM5HP3PY7Kpjw",
  "key35": "5Ht9EHgP2q7KPKnc2cpKDE4hERK51gppcNnvzYmVyRWj3qmwstNFTxLLeunaxtATbb3YS2ZSF1hFcSPgEb9wttk6",
  "key36": "3aegCf1E7W8SNYo2DwdRsPNcrpJFz17KYnyHjCUvTY5ohKvzFqggzLm3fW1NXNa3oNbJKjDKtbD7J12qf7vbSuGe",
  "key37": "3Me6Q3gDDWm46YEcBWTXcyChXAnUyYVDHFAikWuTQtsJAaiHTPQqSNzr5BRt6S1ViF5My1gacTVXt9fYRk6uNcaw",
  "key38": "yPdV2uEWQDoeHwWWMMgb5jnLUkxSdJbygYd9zhcUKXVeWshVvZgEvWi825WB1U8kqEpV2ChYPSdhz3EzStJ7qBV",
  "key39": "2RtdUiYHbVAtVzF5KETzxdZ4NVTP4dr9rfVuZaQeCwXCKnhyLCyYGwpk9JTxYBhKQwfjcgPyQWA1etFp4ArW9Rey",
  "key40": "4KFpXte8GAYD5SvTninHL3pzNNZkGSKXkN48GTgkXF9nLrkHTmJqNKhGHSrLbxtGCo6vdAAvkwoUvdyw9iJqeWfM",
  "key41": "5A1X2zJ2Yz8KszaMKp62WX1xN6HAHo5b88oKN8krKinaWgZng7bYN7BisbFEn9GGwM5n5Hsa8DKpTXeAXMoBhzLG"
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
