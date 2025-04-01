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
    "5HpaHWoiMW8Bu2MYLsaGfJ3Xx6V4scP5GoXKqWuQBn5XsffJADDfyawoge6WG9WMbdbLYEGzCHxNWBJ8qmAf8pYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LWd5U2FaPyCE5WkTyqXwPXLNeJG5KKnXPd3q1c8wfuvGLbrDxebKMtAd7R7z2uAK4KgkPUZfvs1ftDmLB4wQ3Yb",
  "key1": "2vFBoTEgMSjUZpXjB8yRJXbEHeiu6mybm5d85cQbE8vbgWVDRMjHNFoyqRWuxZZQWW5VGKEvcZqk1WsBN9N9cvsu",
  "key2": "2sKGUV6fmWwYVnBut5XPswysANAwP34uNzLPfrpAgpZHr6pTFV8ngAXQWZ7FukAmpUMGqmQhgVxgcLd4RigwwNcc",
  "key3": "53iEqweU9sr6ASWwuGEJKGQ4RSzC6Tr5z5K8ZS7hrcc9vPGjSqCmWHmpUDQepE6XHsW27kPsPsWwiQFCxhTfbBXo",
  "key4": "2NRR4QW5TQpdgo2R7BxZgMqgNsHxtdiP1z1mHxtqhGLfu2YZwSQvTgpT6Whou9RqxXhVxYLjzQ5uZhGec8qitJU7",
  "key5": "4FL8wtTEUtq9aaAK9exS5wH217dDGnAHHpxv3TYLHEcNUr8R4MJ6eRYR596MTSgo6cSzVCnGHhVkiYU25DiVUkCA",
  "key6": "4fEFeAve2iqKF4XWZRit2AergvYF2aTxU8eEPMHZgLrP53sFh8QP71p6DQaez3eJfvJzFz8bQoEKJ21eNV424GYP",
  "key7": "3TNLUYQMVXJT7xXzTJZj1441fSX2fwoKba19zKqhrXB49jZhM9JW2bSKUQWUhqoMiYp5CVCzrwKrgnNNmPAzmkKY",
  "key8": "4i8nfYd9TizP1n5wSB1oTNYRyf155H7GkNFjkjwo7RAUvyGHrj5ahEaSmkvk3Pq4ihcxTXRpgf9vv9LR1ATwLroR",
  "key9": "5dDmXtKQLH5Qjy4JFRGQu59b99uFS8Gedbc8YBH135pax9HNdtSiVXSChiaKiiFzuQgNbuRBsp1AS2Me3CqXNqhs",
  "key10": "5sepingJfY9BS3ZzRMiGZe51oDmjEZYgTMQ7C8EhkqNPPj47mG1K2gLR1q2UYBXctQgSenbAMZaBNHiRsyjTh6po",
  "key11": "4Z3nRLLfJ4DNmqbDJ2B6nVmJMeKBUmAbtNjTNXpXwDFJmmkMUtdj5TK98pLx1gWiZC6qgjNp1q9vPk8U7DpjKKL3",
  "key12": "2QmYReN88w34zpdCwR1PjWb7K2i6oE7yJcbQCAhdjMTrRDjHPLDCvgaNhECcdSoPzxoqeobiuj7KbCApFk1fzR1E",
  "key13": "2ikcSJk62XGut17SJ7F3scTz2A8q7NL1PGEnS8jyBNAde8ZvjrXAvnLTECfFB1tNM4LC9SqFqsGRfBT26GwAp82X",
  "key14": "4F1Q4NmttRf1R49iZTVcEc2GLqWGwXFrFfubcpuwWhGaUfh28UUQHfPnTVVtLD3eaGNhBs6NBjF6P3NpeYWyWkjY",
  "key15": "5S7EKRwEmvR1ABbeJ3wU82EnqGsyfKJ34Ls6sLbaC7JTfasgs4xpJ43Tyb7mtr3HHPq9sRUsYKTjrtgZj5oQQ4g2",
  "key16": "NKFQyLknc8vWDmHHTY6nzwmbTadiyrqoGvhXxEyX6DzpxDGEbkioX1fBvMJFj1hEn8Z4kUuiP36txE3qEgyvgsV",
  "key17": "66UTRYQhtwnQFULfwDDXHfxEorDDNUtwSgbuo2qFqRM9AfMwdjQCXvyBQZFRV5JqSfEY2qLaDvXAWB9UCZzYjaFd",
  "key18": "u4BRdKsfpP5ozieJL2GJJWfc7XbuijxDH6BwhKgSSBMmoURkR12BtWakr8d1v5x3G2gZ7m5ESn4pcc1z9nWpMid",
  "key19": "3ME4to4WrRMHU4JrnVJyb8z94zxLLUwYdtkKDdn5LmPeivDNeeWbzixuqFb6CTdeV9mdtay6dipTLomWzvY5JcAf",
  "key20": "3J9buTUavsvE3UCwKtZTrM1E1D1F1HFF27mwgn8w5DriKXqusXQtenKW9fB5cg47Javk9Wkuismxhp8p27uHQ5ns",
  "key21": "5vYbfJFec99KZv4Pnr2FRmiX6NTCg3zswWskvPFy8d9AM6oEPCkc2uZ2QUXRSXoz1aF6kuJCPn3N9Arwi9vZtu5",
  "key22": "5gQWHtBsjZyNPcbcMgZNjX629Zj2GWwZJk4cwXQuNEjS93oGMqT5K3RzqT8CU2UhZs1wMGsgj2Cx9wRhguKcx9jG",
  "key23": "WauFFYHjmca9snLGFC69SgRRwEsLhdqxCSj4V9jh67aGRwseQu7cE2NVyqtQ6UgCwtzfZxQrF3bm6GKGiwmb3r4",
  "key24": "5QM4LLg74Sa65C2h68LTvFYLstv7wtrp8B4S715NThwA2AysQAKosvTfeFmgpzJYL3tdUicC5b6MTRrxFGjjn9V1",
  "key25": "8BCbES4zmyUB1Wj1n2eg9Ls7AqVQfHs6oshnwy9HcKEQuBiHoTQQqet7ytMUXJrpU6fDiqZwXPTw7Dz3pt6bW3s",
  "key26": "3WZryr8JVPekuXG5cPEo14AL7o53juoMoKs7Kafit4raGJg9FKz4th6LEWrZsx3YQLQkhPhwPPxi5kaqRPwUSqvu",
  "key27": "4F9movBdmbWM23GhD7D4zJ1rKKvzogha1Qv5uJmePhoemPCrDBcX3Z3fDCFJAtrNLiP2DZWsx7Q2nXvS75mSbtJ1",
  "key28": "3paJyc1CGYF3xjRzHXMwWjSu3wSDhSJhyCUrn8AYsDXQ8NKD1ucCLk7BkB3pM4YdxNXyp4eXHjcKKU6FZKnZmVup",
  "key29": "5aabKXevS7LJygXEXPjp6gHL4zGeVBiRykaPDdWsxHofMpHeao7KUZvXVueKJa2aTPjAky19JHH2ZrUmuZNLyw9m",
  "key30": "3A3SZQwjGUe5DGDoLV6G5HDNAyyqhyUuWrNWVLoQEqjZevgLnFZBUB2R4S4cHAXan4YAGWJwsTTPZ1oarm7Pa9hC",
  "key31": "owG8esVfrADG9hC4fv1kAT2ViPctDGpDAHr1vrD8QGcqGTngb8JQ9vfcWXKv9AesVBGcQ5C5hqJ2BV4AW7Rvf4r",
  "key32": "2zqawUGGP5Dp76movd5cJqFgq2uwKL6m4nVVvbSwAiDpMGNanCnS9LwwygZjEAgXnv3u3RxRhmxSFanK1Nhey2s2",
  "key33": "3CJkPwky1Py1nqroeAtNF7qkZCntgCwdW1nRwrL8H6DhrpYEo7CRVttBLAPFpLTKJT1gzufMuav9QhU2zCZ4uNCY",
  "key34": "2pwui2nxjhGcdixDAKDzGiqMLyQyHUn6S7YowG3VNpgaw4Mc438eRpR5qAUxMGVW4B5hfgkA9dL5wtR1kfWydAnr",
  "key35": "MbC7y8nHmVAJtWku26gfgvMWGSLfzbwwTcwA6PbzeskR8NAoj7HDhq7dnuegcXimzUcjMRXpm4trXEGQ3kR9xus",
  "key36": "5V7MVcb69GcydFd87YMW3Hhp8YrfGkrF7MuyAYZkjAu5WymmxKkQTjJw2KwqQTaondGcDr1uSXQ3iyWFnj4n6Y5D",
  "key37": "2K3AAU9akUXA22seJeQ65tbb478yNQzegJy3hoTv6wRJZKN42VqfPUo2VFHXd4EV3mUhqK4URmkt1P7gmNRN2Qu",
  "key38": "5LhKa9sVt241uqbuqN5DRQQ7WsxkqqLbn9v2iEsGUv3xv22whxm34b2EZ3xaLT4dmqJGgdDWEFZyAdJtEEUpMUdF",
  "key39": "4RWch6dZRMzsc156dFxzEippNmkkXqbKQJ5DugvxV5gbD2acaHJc49up6aD39HDPbevqYB725bi6PTbsswK4iHsD",
  "key40": "5BuNFpQ5aJwR6uDvUZGq1ykepBrbH6qXFf2Ef82LrBNXMQu3QKHudN53q16H6tn54y6rWg1qjJ5DygyQ49G3U5aT",
  "key41": "5G4AskXRBPN7zWF2RpHfqweyaioDXGdK8LHeDVLC621z16g4sYupKPv6an3K2Pjc3ifWvfJ5S6kLc6Rq7FMaybBw",
  "key42": "3uJ8TFNZs1Lfg5aK3viwhYUY5L5B8P5XQLKLCZ4k968E5LPPqg3kGeSnq5YyRyKyYiTdf9Lp1tJHUAYzL6auaSc6",
  "key43": "ZNpyoRmwoN9ovw5w1jdhVitdHYc9owjbshRraiwf4Y4KDQ17TTwfNTZD2hA9ieJRtkGYjH2nNRfUYP1dPk4yiEP",
  "key44": "2edEvg2jEaCXQyKvf3LjRE36KXyEfZcfniiNjXUNBNFshMgrU5fQ89DtUunRU36ncu75HGFnHasRMncopDMJDTSr",
  "key45": "mj6kRwmSC6TTnffdZTXcSmwyWuEiWqo8v1A95X7i66AbF2HUAmUnSrdBayBgQschwvNg5bfTWmsjfvSKV4gWcFb",
  "key46": "2ZEj3TXjA1weSzXkfF489xiEDRF6JfrSKA5HGriB9amvdHdQPraBh6ue1XTGmeCr9RVw6bjvmwqSCNSdjVLp4PzM",
  "key47": "3k34scxwPwVyMxfWDqLKu8iMGYU9HBwFVmpVXv3sHEHDdaGBkF6tdUuUbKV7B6dWFprt6cnWiZCdTDbyWkY8zuFv",
  "key48": "3eFLEnAriG1ACm6oGrVBCSkPxCHu7oZRqi4rRB845f8EF7LZR9xwjNSPzFE1NdzR22hEuPDjMfCvNaCGB2TzMQsd",
  "key49": "3858dUY7Da9N5UwoJC894B7PVDaMn1A8iyJq6V34xFEqdLT4RhunH718D2u1ecg9RyNztXKY5iKBX3RCGKeUhAbs"
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
