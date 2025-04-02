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
    "fRXUf84XocpVZHkaJs5jx6o6nQULj67gJtkPqZGz11yDLs2fkMCGy9LuEPXpLdGmdYSMtJptdmrXpKB6NnxuQw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2piAuBvt7iy4A6Qag75kiXZ9Giqmc4m26hakKc7mGWf6kcRUKWxdU1escgG8PeHioXcp2vCq2mtZ8FqeCGT4C7i4",
  "key1": "4EaQ4u3cNi4goEzQZbyL2UiGFKqTo7v4J4eVgGo1f3DMoY7LDJbsxJeYjT1Q23puAVji8kv6m6g8PCZYKmCpbTm6",
  "key2": "oYHfV32nnb12u4kq5r4GLKceqYST2BGry3n6P8fSC5F9bsyxbL61BmAyYgCiKPVkoVCEAspMZPraCceyTvLbSBr",
  "key3": "22yT39awuYSNn4YBYAnMaxY9pXqD2CghpXS1BHGJrRXWwsGhW1ZyDUXTdkAcCFaLULZr8RGTtadqQgwmQ6KjvZgu",
  "key4": "2i7KQpUct5hgE7WwGmzghMimPfSW526ZuD37WvHMA1V5BRuKDWhkY62zW58bD7UQKT4uNU5eKP1MKKNQZBNasdBw",
  "key5": "8btBs3Vxi23mMuTaSRnRJerEixzrMENEXypmQKJgAQRrbUGuTDgxVdP5niUfd7YJvM5jzaE8uxYsTwC8fB7BcHC",
  "key6": "4qGkGLXDQLxZZA1HJjxaDE1gyK9XEDoUWfoFLfrpRQ5DQrtkuPrZ55Ys2JBZZNK4sNXw38Rux4YF9AdRCZUxRTCZ",
  "key7": "4DFCbbQgaTZhnFb9PtBw91gZstq5QWuK6dyvzWUUuxYXpnDYYWt8WLgTFbYs4uZXUr536i3vBu8EinscLf58PePs",
  "key8": "42sj16Xkb6Y3kMidXaA8pcXqUH94aVvNEPhDgTgeREMe3CerTQsLjh9iy4p5N9tCBrfoCWgmPLbE16L3dRohKKFS",
  "key9": "54fEpyH2BxhoBYXBFTJ6NAW942gpJYYVt7AWXYhCoriUGNeYMD5KafBPoLwud1PyjWw4Ey8t8hk4eWCPUUkA4jHb",
  "key10": "4BAB5njLi1dJ9oPpBUNWWzFtGauJomuYLbuGeihEmmnNsqGQ4jrJ9CtxKws3MuMRyzLXNpb4tKbvLaBmVhQHRHNL",
  "key11": "3nN4t39wzgQ1nU3VXrHPjzyyEsqHbW4Xpx9EiTSp6RJeBtNbNmWJMH5dEmnG4u4QgC4p7RxaoKosiyHk3BqPAFVQ",
  "key12": "2Auv3tQpPceKCj5Cjaztw4VaCZczVZCfBDuZwLjG8LiPsEfevYK59Dzpkru85EBdvhf6T79P7JF2FQvgdMioJSH9",
  "key13": "3ggW6YsE1E2XHn9dy3NUyJDenEW6FbAg7YAYwD5iBnAtYEa8C9UJsQRBL3cgcbqtbr9ufk1VK75RNaYMPD5ApML8",
  "key14": "128rvZktNJa64BgidSbCC4GqGPeP11Xc4Nz5EAJq3Xc2uLmU2WoKK7Pjie2EDnvVNWHAQ9aH31mrMtsUibvD9Y8V",
  "key15": "6v5esqNuvDHR8owW6heRnJFB7Zen5XQyyDGjeBXMCsUMshdyB5Rfv8Bhdw8rDoJzjzyCDCnqtrgftkozPLGKZJn",
  "key16": "2nPyPuvp4PAvyiFY2DKF9XHfKtUenYi69w1ByY7uFwjsAd7DHqzbxc7xF2Y3hwrbVq2DN589Pm5kh8eERnaWgg2z",
  "key17": "22eM3mf4kxAUAx2YdyKxWqVcqKY49KjhJkufZkoRJcpamMd417rLWY4CTMse5yYknxwzyHvWtAATzUNxCuBVwVxh",
  "key18": "5MBKvFeJzEjMFpDQ6zPErdvcnV2HC3fUackouZVeAW8TCXLu2T718kfR5AoQ4DCAxJtJbcQgNvAE3gGgBAb7gWAC",
  "key19": "2pKvTCBWpy6NASgfLr2Mkjr4BAZmZ4ez4yf9uWvF1xdvGB251msCPEbU4T5j1qpwnrFkybY8Lu4TtoMDq2M8j5PL",
  "key20": "4hRmpHLxeLmbowUeRtmBFKhuT2xogNEDr88sG6rtWg7GSZo4DpYBaUgbPv4quoxdhRzNV6c4rXiPfNZeBfLexgqq",
  "key21": "2WTGc2QcpzSShnNQJsosFYxPQdGkCdXrxdZsZezN7rtu3KfQd8dH5nTtoYVvWgQM9EJAoUxyKFhb58XQyVG2JbK3",
  "key22": "2vBakdeeXYv6UHUx52GkLwthiWcv6ptvD8T6iDLcvfhy8tMHZHwtEL2xiSPonGE353qFdWQmr4SJ7q5Y95AzL2aG",
  "key23": "2dHcs3MTBP4ZBxQxtnQd4HH66tQ1qngBaw33Yw7j9vu26osQGcpGckcKw5dd7dq3tfmANWkrdJPCiDAx5VpTMnK8",
  "key24": "2BdLuyU3frQojHVPCroP4Dqas8SmBkvyugxaWmhXALJye5ZG3WJTkrpPcyyCW6jWZ6kkGZbGFkcPVwafwvq8s3NP",
  "key25": "3xmb2L7UxtBUPcMkmccvLsMz7haLtgj9LhH8TScSsxAxD7GJp1g7NkfpEaCopwLqprgJ54xTvK8vwnP1BPyiTHTe",
  "key26": "C1rrph3XakSbVnrfnXhjjb5FoqpVWU8WzVcir6kWSuAzd37VHQYZaeqBuADituotAU5nyXkwxR1pWPxWXNkSkfL",
  "key27": "rgdzr4zXscPFVK7i3sScoLmD2TsG652Fb9C4GjYfS3aRGFet2quEBaQ5e49MTGnvEQWibKt2mJjfEKJnKZhSxUs",
  "key28": "3qnoWMFtRaPYtLudDvYAituAeFwDhcG8wbktUCP8q1EfXkyxqMJfF4ZFheQPrP2BNhPYXHpSwY3HMXEscudeoGsX",
  "key29": "3KpfYvU9buKUTzjv9YX58tR2B6PhUEQYJigBbTBJquM4m4ZW8gQipWUxuyqjQcr6oomVj6N5KbzbkVcNRmFyR9Zd",
  "key30": "5Kgh85BELaxX5ph8aoJPpRJDz1GTtak8gsbddx3T1U3kE6ifBzoHtf5Y7U1BozK3btBGUt7gwk6Ryn8iv2ABnaaG",
  "key31": "F41Ap9gbzS3fGQnxvFa6uGvrkd6vPk43TVRv8FrPmiMPa5T6gu6rrHT1EXVfANVkdxorP11ETGMFBEB1BPD5qJc",
  "key32": "3fXwo7fVo61CxyknDEuHjUsJtZppTwVkkt9vGFKQPZmZaaHDC84RrHYo5ff4rFQqjLPkMTM6Z9LT6khyGrXv7qRo",
  "key33": "L1JCnDHnWT48WZ4mkFT5VzyJzcpPpjDdgnr7HgDoQYySSHRksDsiKYrZ97PgbCUX4Y8uKKrpjqszmTs5mXFeGkq",
  "key34": "53cBJrd9CBBxS7yrXKNxBomwJsS8ESJcgiQg1cEvagjH6ktoCBekwvTH4WNJpqbRfkjLKgZMYnS2dQdz612HMLZs",
  "key35": "33nSGCiEMnAQh6JM5nCP8osVhDKvZM8wMPUa6WpwXkViDBm6gQNq8Bt7jSBvxCtBF9c77BuDMAddyLGgakHMxofM",
  "key36": "27cj8SU49Zd18wRPhUsVYk5PuCo8wqYABAvkzGLF7FBc39jCuEP8nQ7J9xuYhcsvEpEXwdYGaYdMw999QNKooYhP",
  "key37": "3BbDBHjvcCxre3Rx1GXM491V8fVJeg3LARdmcVdnjLSyoGHrFnEEuwtEsnBRm9e7hrDeE1rvqTDE8VZqwKo5fd48",
  "key38": "5tYu5hyG8iobc3CaU3nxdRkGzk4NBpuUnYSGdC2ZSZEb7Q6QfGciLVhZjQbAoUwsxSbGBPti3g3e63M2zGuxbapM",
  "key39": "4Q1yjNvPn5NzXB5hXHt2o1jNdpgxuWYqhqN3p2xByKBFt6Pc7T2cec3YU2zBJtuBSquS7reWbj1r85YnKQwqLme5",
  "key40": "MAyu4Z5zkWGnmvZNnStu9xzsnnfUqPYbBXAYHt4bRSa18xUWnw9qQK7WAG3nZti9UCa1jJTzLKAidh1GhYqEJW3",
  "key41": "38FN1mYrYxe6ZUazapcUvLbuFcTuH7rKkgSkDPBppCgBhibmR3bzZ6ztuUjdS8XbLDreAo8qt46P5277wrXTMUVU",
  "key42": "4sVto8EovpvTwnXXskKV7eroGTDTUwYNgFhd9qNtThK8QcM3yfeE4D8b5AY4x2eASAc4WPQHJKD1zb1J5EqZgzAN",
  "key43": "3NHY7qiFxQ1Nm9TefpszMYdSyreQFxNdfoyAphzTiExJfaqYeK3WYo5NUsBWBmf3oYLbBMFAG6krC8hc4V1CZbpn",
  "key44": "43REJfSKPd5jwF2pCg77RVSmwYFfUr85aih5KDRLqPLT7txhwdaAsSfzzJYzjb4oK76eRVhuFdicqA53EFx6p33P",
  "key45": "5vteJztcAwZFebVi8oRWhq3BNFC36YeAqMuevB2y7N8Cpts2wyEAinTsqaVWQpcMaBUPJEBj6a4Uac89F5irS8AY"
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
