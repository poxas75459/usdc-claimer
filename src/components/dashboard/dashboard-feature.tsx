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
    "5bo3WCjsosH8GfH3BqGK4QLy8aHPPPr5bPmRQgvxcxQskqgwuYuzf9DtfnkeWjWmQd1bFcUHS659M9bQGfAuBtez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46iv6oDj3XpwcMbYWt8bfw1LpWcHbRwdZnVvGWyu7mtusHLazsuCvzG1wMiLBx1avkq2ApjFim8jnwe1dkhZ6NT",
  "key1": "3FUsNbSiutxfxA2bqRQK7CbuEA2ysXS6SzzDnUL2hC4Si33hMKnLFtxqGPFgCMBhxA4ttkHsUhgueAB3mRh5mXxe",
  "key2": "84ejwzwHezTnMWSK8c2PYMPUVSRVnRTGkvd21bdz4NLK48SHspvZc5YyL8a3tTb3pLjGP2sB52eVQKJYZ4nPnHV",
  "key3": "35etgQ1oCGqw7wyzZ9pHf4HqpvZyyMbo88dDfHXxZm3AzenZ6Xrsv8pamvANbNe3bmRX3S2fty8tKbmupnLoreKK",
  "key4": "5hmcyJDGneQe3MByfDXkVoAZpXWWPmtu5Nff1cTyUGswZ3hbeMqxNNqfNFzdQV6prY18hgM7tDXoS7ZasnsrtKEL",
  "key5": "5hhfNZ7hvdhciKJg3mZL7rw3KBCMtrCBL8GRnLKqGDCwkQnK4P7w13Q7Yu9t8xqkt3Fi212RgTTroq3UALhNjZ9e",
  "key6": "2zb3X51NsFfGHk5byusEH5i4f3wwLHCzgsVtbqqrQkm645MEbbwDcCracEZVKJJR6fThJUZYsDvf5dQNcsSGrYgQ",
  "key7": "5AMk15Y3FsHM4vyrv2iK3BDxVMAE8mDRHTsrCvBcH2VYKCPEGAKojYHCmUwGm7u8szmYC21uaH2opKpwxnmJdFvC",
  "key8": "4jXcahJNekoceb1nwzoiyMBEKGyquti6kxHDMRUnsUSZSik9hBGeAY29ZkJRKLTDdR7QQyMaCvS43NC2iEVpB634",
  "key9": "fVmhYNHbZ2jCBoN26QywndagCVUReZw2c5fnyiixcrPcqH9odoFc1XsVb5SwxVLgeEukNkgFaSaV8UFGC3eP1VU",
  "key10": "5KEYo3Y7JgmVFrxfu67TAmL134DpfjTz19WvockaWbuL7QxBZgrp2oeS9HoXsJNCVfFbeqbjBmPmzXfHUy8QgNBN",
  "key11": "3DzB1vYPKrvujrpzHyCxtSaLM4MoKUq7hgp6k74DYeGCprNmR69FVa2P3JECr7trgBDbwj4XtzVP7AFHof3LFnww",
  "key12": "3mhCgsQBExQ8yKkVEBZAqpu6723kma6CGK8EgeJyCcbEXXsh7iGLi5YUJc74mvSqiPWsxtN9ffyBqtYrcnbM2fUs",
  "key13": "Lpp4JrTCdAu7XeQGk4UjSLRH1gmkEJ4GcWQVRCe66iHfSVXRgVduCNiDitYRY7gc1B9LCrJqTDh4ykGvtCv5BbM",
  "key14": "2z1HqYQV3yK1gNGQHnHL1CG6abXpPMkTHXKF4kpjgc64tHCQkMTvKAf8JDq5UPiKeuUDBtwKxJkA96Kn4Z1vAkUM",
  "key15": "5WW8UD1YMk3DEHWVLhQToN2ys7fM5xKmDzZeie7vgVphE33n7iuHh9XtHxCnPBe1HySdYAGstivQceTNWPQsVFMQ",
  "key16": "3Y5xZxJzdA3QQJ4QkL8qgY7taTW2eBEuffcW1KNtpEbWxiPL1ycPa4C6zgn6QfAatdytAPV2FQMcwHW5Q2fSCjiY",
  "key17": "dYboaCbS3Yqed17torJezLcHmp3inxbyLjVHtEtgjji3LL9jBVRXDc5yX31tWaE2AQsorYFrCYwCVmc5YTywpzK",
  "key18": "2pRcZatY6gQBVHpBGDkuci9LxSBhnZ7rpdSaTdmsCp13Jix6unWJJofu7BqrdmjTRJgv387XQFXkurZUXEhb2V4T",
  "key19": "4kS22AR9cZZ453vKiSKQ3uDgfkHDxQU7VyjYHN3spU3PeEjwiVX1GBHN5QY5VRfPaR3yTUipznMVd8RqA9ujkDjY",
  "key20": "5BM5oY9FNMcY65J1DEuq15kuvRXVXyzTKQPbbPFzmZr8tEiV9qrfTMR1hjrsCaW5wrh2pBJ1rPdNEJ2MoenrmMQr",
  "key21": "4fCHE1DCKu1kHn11rb59Q4JXDkxn45YPTjmLW98XUBzifkTcJSER6SayGvds5ZfWMXWwUAbZsHwRCz7s7mbiQuAV",
  "key22": "2VoXi15QybuNnfS4ZZqMSNPqwvwvZpztEXncvmSfBGVhBeccNHrTthct4FwjSjv5Ezx3QKmuc9uHfCv5eRzRudwF",
  "key23": "5Bv3K8vqbjj3npMpJFovtxsNa8GbLwwGhMQJigiwRRCQmTjKdtM83J1wpxkxWXrd8kv689JxiFfg4p4fuLXr9s9Z",
  "key24": "5VVQzQjv7PDDP7dGQqKzEy5A5XAN1RS5aNQq5Vv8cDbz4NDSY12bJhcG8PvC3UE6TEDn1EbVmz9CAnb9KsAqRPJo",
  "key25": "tnpnn1vkzL2QKo6K21d89ZEDEASWqtQ4jHnygbCTeo83sLW81yVCtJig7925c4iviCgVpbJCyhXwCi49xZnT2eX",
  "key26": "5ubGPBJ4kEhvtsa8uxLCpSGdY5hmZJrzCtCzvkddLSKbFTnQ4mUrsSa6rBf1JoLRz4qs9qa6ieeTBmsAjgND9Acu",
  "key27": "4UXGowcAq6DG38XE6XmPvrVrQpC7eaBHzDgVPYTq6D5DskTVm9jbQrZs8XRXxQpupwhaSTUfPnacpVywJFRZ5UMQ",
  "key28": "2rUU1BBJdPZEA4xHr9puA7yjkQf2TFxtgHm4eNZWkQr4qLk7a2fBsdBLySoERj4oEg2xX8kC63aBUP57dJBWhjLP",
  "key29": "2Y4gVNCvPd7VrDqZQSMpXVFNfwfjQRsLH4Z5DsSYsSSpZToTBHpsnrMeFxqvHj7RMbsZKH7BeyrJYaErhZjn479u",
  "key30": "p1jAKbPGn1T3K3BH8jx98BPuxUzjN7CGBU7pY9XSjuP139tAyxfHEinPp9raboAV5XQvh5wzZAgsgE8roLDRV4C",
  "key31": "2Feunb9iwJrxVu8Wmw1CxgiE5nNnKfBAM98V5dReYSkD7ZhwNT58KXjNVeScS1MLhPvqprY8irXMYB7ZsWidNfxu",
  "key32": "3pGR5i8vvu8MZEjzABCJKkLw6a2RaAJSYXsDskS9XB1bLf9ee7so5fgor7ohPhmkBqmbDfP1pYw9aoNvvQ9K86Ju",
  "key33": "EJu2u8V2PwkvfzjVdnoxSDm7sL3wyDV54FxXf687kZvxTFH6GWrTaEqpRRh5p4fDLNf5dDYmLfdzCz2tK8xQkme",
  "key34": "4AgHaiBvfBLUs58TnPRAxiNEP86Y6XqayTS9KyiQ31Ts6767i3i6DrgDvi3enJSKzohBWfAVvMCtMWoSbA9sLb4U",
  "key35": "5kQJf7rFVJyEvQaGhqHTcFTHxVtBBuXrKSJeJQp7YCgZRSMzkb34xP65xXRYrfrWwY8sLiJe5ajtQcCNeNktk2G",
  "key36": "3KDJNDn4AoTpkbLgL7n2ofEgcK6EGNQSbV5jEPiyZEJc9eguo1DM4ctNSUMcK8xQayuGmbtrbZc1yUigZyz9UUZm",
  "key37": "3a8LWqnARJL8gH1v7jvBFgMwW1XuXJuPXwJRLwVcdxwmh451Zy98ZCyzsR4Ba2WkaZDspAsXm7UqmAw5usYm8aVQ",
  "key38": "HgFD9i3tbac4hr2jqVpgRK8kiRdn5CaCo7vbKqDp2PYtJPrBPxPSGCGY8MHPEa4ARipey5W8LwVEex7Rztrjpnj",
  "key39": "3xssQRoBY2XCSpfYVG7DXozkSm5CJBfken2ibt79JYEbPEEczTQnWykSYfb5XRA9aCAuaT3SE8jFFEZMtR8fPcRp",
  "key40": "Zz9nCGKsU38gxyWypyvmXtTwSoPSDjM4F8sonVFNpsjwZQtL1rL6VUuvjzWDk7ncyFe6tLKhZTk9XU3dtKyGUqm",
  "key41": "4MVaxE19opRsmBfN8QC5r5gmpmVkdMGUwJrN2o2aSMbvLTozxMccWCWfJd4nuk2w9uA1nX6gMr173f3EvkcqTQhD",
  "key42": "37dE7vcYAcCiProTLNkgnCmxboxQKCM4PMctYFQAExsrnU2NUNQRJcsj2qNvvYTby4cMnAm8KBG3oaA2xVjTPiKM",
  "key43": "59LZoNvPDGTyJSxEQxGy5mBcmMPsiKjydoYX2Ub1LFVskPWquNTBpHAziSH6novWBCefDtVwqLQsLSRNLNBoccZF",
  "key44": "zk6Zff5WeamJEzSSeKco9qxJREPDPqugfBgNcNSy1VREhGovRyYdvk6tgCBKoG7BMmKriNwmBTHpr6J9Xkn9PW2",
  "key45": "4rK9pJQU2uaLDTUEbdQBLrBuqpgRUp4fgjoqqXY2UiCPvUdCBzwDeNQCkmEsaADtapZYqurgu9maHAe32FP5kubJ",
  "key46": "64cqW8tJ5HXzcTQGPMidvKAwWTBakeMaGeP17EWQZ7BZg9oRc1UuTHQX8J2Zv6C4Env3e9m69ZX1grzntk8seNjR",
  "key47": "YtjiZ6vwKGW3cEYhCE6uQHBKoZfAJekYEGAaXazNtWeo2L4TkK5A42sa9BTAGYHnAvUZzbhKhQ9F2kzbmVcPzrr"
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
