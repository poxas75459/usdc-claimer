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
    "5GxesceHUfXMwxTL6uo9uTuKSh1uNQh2UB7CDncFKENAvq81XMQVwzWi6TjEv94smAc4thLCg25Ma32GMtF1C1D1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WognybYh6w7cRCUHpWuh223DRW3seSvVePeMHESyzgGeAshSVp8VUJYPd2K7T35oevPDEXnzghG4bYMgqeDzcvR",
  "key1": "4YJt2Xsf7uyxdx61EGLN7yGjjfNURoLAv1h2M2Tt55n7sdqauHdj5GPeEddqKhHEwV8nMtsHgf6NKrjbF9jrW4Qg",
  "key2": "2gttDDgq9yyQNW6XRB6fW776sjUeFCB3VQpLFX92r1nYHimyEP12rzoxMkvbFXV6znbHBLLrWp9L7YMduzjQxEhU",
  "key3": "5U57ZZBg3AZFYLgamgEaP1rP8evwFKYvCzmw9mwobTmyheewyBhKZBsMgHXuW83Wr7sksHKvb3sPPWJGLcNusg6h",
  "key4": "5xaVZCcyFEPKzGUQKdsaeJgBtWrc4V7h6qxqLryAQYzS3aLE51MMRNUCofhM8vLhdWad2x2Md38nkRTkmnAcqsT4",
  "key5": "5FB95Q8Trw2tZuee4tvhAoKURQ97wwhWgd9QoWeBeKUx6WhzmbySuX7SeaQspxBzBRztaGWDq49osjecezzHoXvH",
  "key6": "ZwchVe5AD9VoKoqnbWLMdWkkzaSrbtVBRZZzMLbUTwEzsn4USZsi6SZ2ti2r2mRDwiykG8VTZDWaqtcNjf6e4PE",
  "key7": "wt5c2jWsh8CEZxct6TLBPY1wYsiMcRQH8mg3ZmqgAaDCiu96Cts38XeVQFqpam8nZHXVuUfDP7WNgp29zdLQMRB",
  "key8": "3H6FUzhkJTyjz2acgNtp43R6K6vxn5UVKjhcZGYY3SstbYDPLTs52qTX84AHsqCUEh25txPzwRUZobYMrW3FKfAY",
  "key9": "5R65RnPT9Amsqo14wN1N6AeiYaTsLtsRsuRTWVyStkjtKjtKebmuJAaPmqqdfXxRa2txJsZwyAV4UGz9WcbtMGrW",
  "key10": "485q9RY3ZHhwj7ziqsq1dN7qHe8jQjDsHYfpXtFeot9ZMDdo6EoN59nmwanw7AmNpBV4RcTTh5yg8GakiE2ibRkk",
  "key11": "4iVizVrD4uLmCcPJTRtmaBJB2NrYAzw9JRBxSdknwU2zmd5vkirPTaceLLPkZcf8uDQLqydBjYusB5LrueYnBNeq",
  "key12": "5wW1T7q1ne5WsL3Zp4Q6esUeZZ4e7e41uX8N44f14wiPtU6zgkRE3jSuPDbVTaeUjtgkhtFgvuUtJLgD2dbbA1CY",
  "key13": "4bzeSSboQHHXYBfp9YLAhfru2UtDwnR9vqTBf4DpC6XXQVGjK5yxQ7n7hGCaD8cLsWYPZU6ZSNDWR6YSNGYFs6Dw",
  "key14": "4u2rd7imCmD7844dG1r8uiN8brVZzaekY58ZWxTUiyuW5rncqHtDLNxMGg6J34mzNUZ8FtZc4iSWDaHs32b4QkMQ",
  "key15": "63PfPvmh6yxJUqHRdp2iT2AruuofqGt6d1ah5CrjsBsUyHBQ8bDAvN5NyEQVJv9khFjm2J3NfSxSu3nuwW611CxN",
  "key16": "3uNyGBabdGDzKqehCdZewo2ddkT5dSbxMeDJDVNVyfrr36NP9hZ75rceKuKWQrb57yR9nXkDb5yZkubRnon5aeKK",
  "key17": "5CsNMmWHRZuK8sgffqkqAtU1xrTf6H8uTPFNwAQNM9BR9XVdpHuJFaF4bygTEGinMHL72LQG8gKmJ6odn5UpbahM",
  "key18": "BWBwU8pbvFS2XMhkTnKETB7DDPNykc8QETnsKvDaeEpMPzXWMDkZ6Hca4qzhWRS7tA86MXC3U4bozwwcaiPcbLM",
  "key19": "LbL1EriU2r5jf6y76jzKGSmkUV25MpVs5TZci1zFaQu94hPyeonXWLuAcYikSohmqiz4bZd1WUwYv55N3UXMukn",
  "key20": "5x7STLoy6EJkYnTHrV4uk8NgzsCospyUcKiEUUp8CMwRsAJtTCEA1FC6wR5p73BzDBtdjfp9pxhoUohouwGuguxy",
  "key21": "464j6cVdJksLW5fNSxvbGmvaR8AvgyReFkoPBrD5zA7DeyftaAqw2HLifCqa7dRZXPtsyi9U5Rkgb9BgjX6zjJyx",
  "key22": "3M8mZso71gLcinGBn3qTPKdZNSgPq6HFFpsJH9Y7pUPxBfeMgAL4UUCWYa5Cq2zg8QjCC26MBJyv1dGZwGFTPuKD",
  "key23": "22Jk2hErz7qkoxPMxchfJ7NJYPtGK8J1KQWebiMxxE1zcKi6JFYLYVVbrr2Kd3dx7aojXmJUqTBDaC8DZEPPuisd",
  "key24": "5fGEtx5FevexU9hoYv8kp4hALWeF3LijTFbdAGYeBSzAJZyE9PzXNjVE3vxwVez7wyJHb61QWdMoLJ96hN87ZqNy",
  "key25": "3V8jLB3mrnCd2giUr7EcGWLam6GjBsxPmGYccQ3srQMLNGTqxPP6SA76Ft71LuAKcwRjLfhGL4cQt3yz1UcqNH6w",
  "key26": "5BH3dkN5qDY4z359k8NJSQhPnUckieQABwTXY7rHs9DzMypxrHsbxgU93XP39eFLrDUvhb3mq6us8zkLkTbQKHA4",
  "key27": "273VT9ysZQxiCGZ4DEJfqgS8gRDooKrcTsVfRN3wKErF2jiWBiiFPYFKnC6D5EHG3SKb1wTtDgBYrqptY3a1KQzz",
  "key28": "3Vmn5zwbZGCvQCenuhbrBcbXzgTUSX73jAbuBRg8qm9y3BxaZ31pk1p1RwxgKEMyrk6jZqKSs4yuD7dmgwH84Uvj",
  "key29": "3AJNPeFUPPHpgZEfdfddmm43g6JNwisoUJJsYPi3rYAHbDfsjHxP2YLChXUigKLPbrtsxmnXepLxEpnwFvLW2V9E",
  "key30": "65Cc9AqwYVwri2YN6j69crr9k1swwyMdMqvqHiCoSyLKUPyVhHgTPVMh5DnjSE6DFf2QppV93f4GuW57ARCdzNEX",
  "key31": "PRFngoosdCzNCJRwbjzLL2uRRTSsFGVLSnL1daMavzpYbP3n7hGXQDZMGSx78Gpzqwe1QV3V2yFLvCMH2pJfFYh",
  "key32": "5EFSeT27wniHeafu5riJcGscSMC7SEN7KwKTBDF8ivvWQcBgnQ9rG3H1KXsjHZfkJ5ywnCfonxvPKqjsHPo8MLAW",
  "key33": "3Fw5hwA5Vw6mCnqKUJemqRZm52gdipXT1d1KD1STYwbyKPpu4vj7NZhAr98paB1hyMhyTGeWoRWdWpFFAX7AysYp",
  "key34": "4pMzmbSoRgY3LdoFJzB4AqRwTAiD9QWAqvy3VYB5MugVwfqgP1vXkhfY71epbm8sQBmoMQrz9zBzdxDQmg3ettr1",
  "key35": "4XYuQho3GHpi9inAjZBmoG84je1NkN1P64ZcTkxs1wAD3aFr4bswyXqr5kojFPBVGwMjoem8EN32737bMiaTF2fA",
  "key36": "4TbBakJwSYpWEwBqgZBMzsSd8JYPEsRng8kobj2NFytMGVmH4vgcUW2q6jKyVpp223eq9RZebbgyzZ2mTEKKrF2P",
  "key37": "2qmVrv88YybDiwuDyhnW4af9hPeer1fRTEiEReEfdr3bK1N11t4Wk6Lwc7AnFGNVsUuZeRkSkBsDE5v8m1d2UGJc",
  "key38": "5KFUsqzx1o9EzmCuZL5kS8TUYmYAQmUKhM9Pb1KMVzm2qv92t4C7bpagRtU9ygbL1D9sSKNECb2Y4QK1MZ8YCvyL",
  "key39": "RRxWSmDXhkxSbj4Fda1TMLWfh4nmhmn4Emday4kBQ6Y4SV7hLMP8PEQpMDpiCNgBk8yA9YoMHdbSAhSViVeFnVZ",
  "key40": "5HoSwv7nCRSeZumrSASEDbtQPaTDxvjjE38ANQ177CHrPsdubjTEpCXdshWd6ZN2ACeS3nTuzvTsyMApjDBJrGGo",
  "key41": "48yVVYmdrHcAaw7K8zQvapNBJkKC385fct6UKWQncsEZR8XcMWcXdGAP5J24TLz7CHHcYhpXw6p1ZQoSXZiMCwUF",
  "key42": "52zyW8PTFncTfgJVAMyuxpbauvdKDzL9vYeN3LJdDmUdsJy5rrt3z3eagp554Y5tgPH3WsHNGSYP7bwPxh1F5Rui",
  "key43": "2M9jos9wMapaJwGY73vn2urLhxXLEWkqRiWC9t9ZHGnDyRobq3vBgdbJavDVJVsJ6GDXmeXbTe2C6DCtbKTewVbG",
  "key44": "2ibVBnPpCrWLhSMq4jLHks7oiCsnxsYwG2tu3ywCXKNaLLkWUqr1nZKe3Jg5543xUn8eERvpwC9K1UzoqKHVEXZR",
  "key45": "3utoAm3imC4wbg5EU9nixayErFZcKAPKCopf2Ecqdah8upupLCFd5JBuPUKzRZKbAkcR3nYeMgny9H6HTPr7GsF1",
  "key46": "4qxnCN9tCPGFX4WVvTgemaWhh3nWShXwzRE1dQwyKjii8pmmf5HVP9UvQ3ZzTq5eQ77Z7W9rLJSFkBUvRCxz6LKQ",
  "key47": "58fQ8fYr5ZYC3hLygBe235bKcXXvqx5h22q7koxGsQXsNfoNxPDVG6cREKqpKLC71P1my8Uvb7XF7qnJEo4fFb3t"
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
