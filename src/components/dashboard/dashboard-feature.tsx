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
    "aVjJ6vjy31cS919jC3QY8FBsb5QbHozuUWwg9ZQfTnrQQMbG36GiHMNKQNe6vK4rDTipUdLXGPcMCVPyRrQK1pr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55mxg4pAJofzdaWSjGNhvqV5Ee54mRTsrzcbYF8FFS5Dva4r1rdJMcw6Li8YWcqGJbMfRnR8pXYE6sL9WPfR4CK",
  "key1": "5hFKMArRSUZgcns7o9fXLwn98xfbN3KTy4FTzBeajndhcCbCxa2xWZM3JtYXh48UHNM5PQ6yVDmXwcszQWvjhyHL",
  "key2": "2xKRJWQ452LKrSNBuB8UX6wcRt89D5Y2UA2LyBuQ3svg3yn2E5b6RxB9ryrdugrX6TLNcVZxnxjBezSnjWis4Emt",
  "key3": "5Mn5HipbrJkZGsqPM4T4i3CHmBwczuAhEAyDyZc8avzDUu2hzeiCgE3EeEdBFyui3m74t1MKmSZFKSuMPgJzESjQ",
  "key4": "2H8DaaiqLjgbNHHkLwVabjyyWZpZGP18fJhbtxSYBKd4HDBPXK8HudmnSqq6a17HzeW7ECLMMwR1jkzPWiVbaomc",
  "key5": "2YMcEBqWT35P9WyFQKKSbnPPpVE6xdkmiqX6tfKQ1HsVP9DoHicbySie9qpF2TZVNnoY34kYpA9xoNLars1TDvya",
  "key6": "2h6bMyDoohUCMsdkd4PZC63zijxPygW6YZWP6XuDXXm27nqCzw53XNtvFJUJWDSxmLkbPLy7LkYR1YBGoSvrHgKv",
  "key7": "5HqAoTkX2cXJMncRHYRwsAwSn144f89txYzejmXA2gPLLSZdPDJN1fGd6EeY1oYzs5hZrjz9N7SSVmbp8zfxghsD",
  "key8": "yjkxhe6iXCGkMXYsv5kFGDWXPwMrJj28UVgXzjYm3QNd3oWKp1aWEdA1Gedxm9KFwTLbhzNrMm32pXLz4yGCgMo",
  "key9": "yzBTKvQxTEbsyFV6As7Bj6ztNjkX85FWsEEci9fvTWiPmXqHWtHZ6FMGiegRgCE9PPxmgXmbe28PavtHbDCKNZM",
  "key10": "4Ec69hendKzQyfNBZ5XX6SUsM7Dpscydb3viGxgrYXW15MgguUJmJGXXUbo39DEVqHQppPmG7LR44RNMbCMPN34C",
  "key11": "5bYxWHw1WeJ2m3Yr2J2J5Tnej6KLzoaYEucd2jhSQaxuPyr17wypL8SqW3h4tRbBzpbC6jH6zpLWbHBLFC5wDA5k",
  "key12": "5R8ZUutQocyLFZHirzrDzbDyj3qh5knJBTVxndNTjU9SW9c7RPBFGWgXcj7aQYQYVnmop1ioyWpXkNQa32Vv641E",
  "key13": "4fgFmncKq4smarKNkby3q1DoB4fcAfuyeGczKKkXr62uuwZ9ph1Ro4juQXTxV8zuMkJVyfY5qRr441QPXQgqxshy",
  "key14": "16knxuDJTy6w9ZLUXoBgYuCgizCfSUsRJrjsa57QvzkZLRhhZMfEUPSAuPdc1LMTi8tYWB6osM7mnpsvsXaZfde",
  "key15": "4ecyvWe7yTaxEfB71wmy2FWxDRYd4qFBEXMQv2sjc9GbEsyftVzbJSNZVuwt2MeTsDCiTtwnapykkWkm1Vr41H1H",
  "key16": "NbSiPgmr7QmtWg3jcUojzmEt4EdVkdsc4p7pQ1mThyqdLouktw5WtyMnJK35VQhwSzJFD8XsApt7KqZgJ5Ej8tK",
  "key17": "123zZXKyF1wYUucNHWzjZsxxdy4sfLwvF9tQ7T7rHJ49H2sfiwGHqnq2TTzWwKUxBG1DTQScyL62sSZcc1Nts3gR",
  "key18": "5uwi4XEmwe1aaRh7oQsaYVHpWMgoTdYsoADR8zUUYeuGL2G1xQnVSU6QrBf4V8JVtVpzws4imJgsGhmnNhRXiknd",
  "key19": "4QSfeCRVzZ9jX7LEnCy7RcYUDRfuQ5i4VTQ3ZsWqJ3zHxJjF4CVrs3RFKbHbksx3dkMUgDiNF68XMRmLwqKHzuWq",
  "key20": "gtdp9wyiAB8pJ9qCnne5dwiTKqqTusqYJ4SJbtysRuKWq1cBQuH36T6UQR9Gb3C87wzVf5hPk7iw8Xthjw27G2q",
  "key21": "4xphL92CqazBXo1SwiYcBjkTf43aud5hpxQwtBJbY7FMfhbTWUP5WiWeTuKNMAiMrPqZJWTWH44yqwxp3o8QhQ99",
  "key22": "4sR6P9a5RK5etkVHoNuojj9WzbveXXE9wc7nkWJjQ5JCUzT1NCKNwsiva58YLZmKCTHkwBHLZ8qFTCUpvGZE4MCn",
  "key23": "2sWUVx4VArBDQPo4VyqSJ4qrJjhTgU9kGjr53FAxYFyPiEVop1GVtKuxMbRz4jmYh3ENN3UXdSbFkfz9bTRjCwq2",
  "key24": "4gcVgq9yP2yUGMbzCcRCQ5GWZUBRfZiCzTLT4tAq7zGLoxsC4sYkePgvGWRtxmczcZ81WHZcn8JQ6g1UH4CJH7vM",
  "key25": "65WTodAW9xotSa4rbawH6EpzhMM5RmTTJyw9E7cLiasiF7tntJyVupNPMbPDsH7JNRy32mRLr8fa8TYDaUVKpEmo",
  "key26": "m2Eyo4EZVrUdCaJ9BaX2QF5WTrr7KwMK6MEEo7o3sz1q19A66EsJ7K8jt9nr5Q4VgqgJxLSfkss3WSjr5ZBHNDj",
  "key27": "3yxMgPA99pXZCq5mPFjedSrtQix7Yxjkn27oWkwnX2PV9Scw9wdZnt5jSB3QPujywVGHKwmZZ4onyfiNa6t7hwdw",
  "key28": "5smS6DKNkbydHgmbY5KpTaNUYum1h6ry5esa9rW7sG8Zg1cPgxQEocxEaAyc6Ln8QfxvCrgacKsdTmGrt14QbBRo",
  "key29": "5sJw76XoUFnXBDM1ZpeukMDY4JBfqX9uqfcM6eAczds4yYU37Mng9VrC8Mi1ZamFXJDaeeRRvTUu4F2UHJ1wnJQk",
  "key30": "4PW9HiC4cZa7X4mpFMRumitUPpBn8vLAbJi9k6uVWFnWWvqWXAcHtLPcnzDLfpEtubEnjzpWYvxnvaf4pbT3Xg5W",
  "key31": "ejuAvAZnt4vZyNxakiTUirD1ZfVrjgwoWeTA3WzdUZ5y1KqXR6PXZ44cPwCXv8cmY6wEnVkD3tvjiYLgNYsoS8Y",
  "key32": "42fwuwehqH5UuyrtiihQMtN5Hyzq4rLpTrCxWGmP14uhop4DDTKuk2Lkc6U8hqXCWiKSNRas14eoY1yi7TPBYgcD",
  "key33": "wzEmg6dHRqaoGXchzsQ4bRw6zk4CcESeoZisv9iMGEyf4w2mWcdb24yXD68FLQm18q2tddgoT7zMvBVRGLZnGfp",
  "key34": "25VzENd5B3X8mY7qnTJHq1H9UkF8vWijAjKaf95eerr1XjWUD3PS3jh78NqZuSL4ZLbnevDR2GiAG6b5qPRU38rV",
  "key35": "4pvRZASCkRvtt4HY8MBMS6MN1vYXnX4pNFyQfT6YBRx5YgLnD74yZvuRHm9mH1H1MCXEgGwZQju9UPxsHqDzkGiM"
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
