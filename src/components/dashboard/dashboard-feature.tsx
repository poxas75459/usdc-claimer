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
    "2FuQCz1o6ZB6P4d4FWL7KK3rbq9VfVWfw4kdCj61e6bQmBinShCqJwuKFnRaEuEGBUxh4hK4WscMrPYDabapDY3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21GAzwrSNG7pj2uo61S6E7owAbwWTa99jfU17vzWmcaoh16Ubi9LWpvk76YEqfVMxy1it6C9bPTHYH9X1qkWJBXu",
  "key1": "5WfaaMM8B5LKo7dbmeJ8UrHWCYNSLVtuaqv2RrJNacuF59cnWdMoDFga42ALgbQry9Vs9RZoKCXvShXyZj7Mt2Vj",
  "key2": "51qwpNHyZozjf2djmKLMWohc5KfxmaRbLgkVQaJg5ZWZzhCem8ypWqAk31dThse6oT1Sp8ADEGkdHhrXfhCY3K1i",
  "key3": "3U3Q7pY8ibBpdvWGBkc1gJL53ZnWCd24aR3cXUk9sfehngY5nFwxLBchdXjuHCvdb2r9Jr3cF1Ywk63eDPrTKf7h",
  "key4": "5DMk7NHmzHreeEeiCiYtLkQpWPjredawrgFkvTLLAUp3mA4ysaVPaBjnzzjhBT35o7tFwNcszcKZjss2LUdFKv9m",
  "key5": "58aS3epkvQZYpiCmtxBvtzk15QWqoDKf8H3TV9Ff4Z9WSMVZiUtxjPiBTzBXFXPiqtRcRTDSodGNbEK98VvcFUkt",
  "key6": "iryjfwCrnMBEXpSsVJfiJXW4LQxsAftCpCrDCHdsiMQXuAjzySG56khxRWyMFxfT1tgLFkPRmQJTRHxtcq48wNZ",
  "key7": "5Bb2QyXt9r3Eg2n6vCbFco6GWmWtcVHh8NXMy6Dk9uRoFucPEXDaV1q2bgZDLN9Mdc2R7n4BAcNVGrHRQKsX34xK",
  "key8": "3KFqqyMkd3oxDZVUJff82Zxc4RAQnXyEyFgGHJf5DUAjKnJoNbLBuqaJGaTY7FBjBjtahLmRRfYHCvmkCLjyvDy2",
  "key9": "26TivJoupYfbJCNV5VKUrgzjykL5UyDHubjLUwNz9qLwsk3LUUPKtDq92MTeRSxABL5VywRUkCqo21Z7krQKySFs",
  "key10": "42fo5csdBVd8fQrzttchkE8FpMVD3XRFxwEEVkgMfCBxB7EA7XtJvn5GJSxq5vuMRiQod7z3EjRstv218BZPsbu",
  "key11": "2L3tAqJjgKiMFfXvgPPksJMfiVuz9AWpKCNmTnW9hzwUJUtj1LLwptqLXY7XjgZdd94w6rFJYDyucrLd4NwViSAG",
  "key12": "64zboR9iyTRBHYPc5xRWUk9XDmrfjHmeSa5ZiFQcu7KLJXgx9Vyu2cVpV4kGpecHhRm3UFxAieAthdi6PEsGvcxA",
  "key13": "4na3EGNQzo7aCnFbUY4M7YB9duzqG3wr99qqgP4RnzTppce4Unuv9E7zPZ3mCLZuCT9Nruct6LTK5udgZjwMcNqb",
  "key14": "39Sd6QL9REQ1SCgEeSUx4scqadh8zT5u6cvp8w3qriRqWAaG51oS5iR7mpf2hBgG4UhWh75C4QAvu15L6jrhyNTi",
  "key15": "4VeSkydqV7SNM9kEwASxbCvMDqZRG2cXych8T4G4PzLaTvHYXugX8AkhuiybsbKmZQR1Uz2LZcB4VN9et6HP62w8",
  "key16": "3bKAEFvEy3cPoSUrUAHUxqWMrEnNLXYL3sf47bgu1frVUgawdUkyVbeVjPYmuKS1RYiq7fFVP71DpHNNqaitXyHb",
  "key17": "5YMKhWH1fEKYDDBoKNP4UvPYWyomCLap9KaAz5QBfGLd5soHD5vAZVw13fFLo4SzntXa6ds4ZshqDepD6ySDyF4N",
  "key18": "75m1PozfZA6rL6LzanNBpPvyATVnjf6TpWdXSnXGQ2EXoi52JiYawYaAVsJGFLypp7wQk696EmpL2HHCbpTovht",
  "key19": "3L2NQpkmLAhvxLoeHPJLZs5VsBSvP6qgGL1A2MVnBwkHDC24GceVf12uLRJioeb89F4XbeQuhtDPgDUYFD1Ev84e",
  "key20": "rZjjtGFckw4ijHwnNx1D49jzGsAVCKBnGjVRKBRZXNYaMLnNW26unQMpDXww7o6PkVHHjMCnMaSv5yqLqmy7CVM",
  "key21": "6xjCUahjHixYUNuz8P4d1gsrDamAA4PtQUmJr2oESxLn2BU36CtyaqYbmeXCeC2YToUjpF2wH42CDh7KNffZzHx",
  "key22": "4QTJooF1VF2DYakFg2Gy2MBqEo12gE3SbNGMGEa3TMs9xqT2FKofFbVtfSmhAHsxuuBzQD6mzdE9TCVJdTypFWyf",
  "key23": "24oo2H1TSUtewEScGwHhfxG7C55ZLBZPopWeKm7uA4E5Fzb6CLrZ3YjttnUnncxHDRsuaPoMQc4ew5kCw5ASVYne",
  "key24": "HbQHAFKn1aWnJ5c9RTAHB1wHSH2QiSbwzzCXYYqLXmYkQ2GXwMBig1W9Hvx1rvT2p3u6Xm6ypUuRLv4Vejwc1iU",
  "key25": "5dTSFoGxnXmVTZTFukyuA8L8RiZxmoYuCKPBbNYRw8SuJpViK1tGoebzwFFQqRGWLdt3A12hrwQa2cMRCBKJj6az",
  "key26": "gAPjZ6U4wxrMys94szU9S8vdWfbBvGVc2BaDFtCzSzgjQGMxCzZEQZqNHgf3B7as48tMFG7m6xCrF7n7VBFtug4",
  "key27": "fXLkvGgAidECrVKmtSsH9kvtL15T1mP6EnhqUSPFdVAhHVD6AVbbr1an8eyPp6Wr4CFUnk75NTsdvLBHBxt4ehZ",
  "key28": "4WGGZegwhNpiLWq698oEChPegQ3PP4QCuwQVHsYENE9rYk11hgxo6wo7Uk5HVsNAhKiR5rjkU3Ynnw2w7q5oHJx1",
  "key29": "5pQ7yikqz6Amzg9Cx2wTyg7Ebc6jyAzrNA6Sh3AjiQdXyed5z874WbrMXmkcMBuCKQEVSywGkza76EKe2tDG5mSf",
  "key30": "2kcNnSUkfAjc1EGZh68ZSQDV7t7yQjfr6m3mGD9xH494YcXeJFRQsoCZxAN6Z6PWVXbi2SX5PTSTuNorppBDZBqD",
  "key31": "2tvmbi1WSdGhsUNCXi3Y4Nhs9cq3QeuD9c58u5XvgvX4A7dqWhdMBb3m3Cz8CxqpbS1WRkHpYY91Sr6EM7NcrWqK",
  "key32": "467Z1HQLzqKMdso3oezmTSMPMQcTH8BVSxBpwN9uGVFAbEJNhyXmsi1dZ9m9c3QyWVEmEjesLbNX48aNGxM4aYT6",
  "key33": "ffjsZzsFbiBcUUFsmD8uFwGE6kxeBWQUZZyjqWMu6B1n9Y29KKBADdUAtVz9nceVepczET1JzVGsjrHbYMoN34m",
  "key34": "4FEWnBjJWJr8SJJ1p6cZqusPgA7R4GwdfhGwcwUGjrpRDneeckeTVxtZkoXV4qLT4jFZcw87iZBnPSpwXRXh6chM",
  "key35": "25bYTNShJXhRzDfW9uXTPQSUnSf669jyqwsnRRoRk7ZyNU4krVY28rzY77Frw6qmPJ2N1UKwfqWB8cA4zFocNtjS",
  "key36": "5rHKBGxMZfth1wq82HzuPF4JTB8VGphwdRAmGMJC1kJhvsGXnhQXZwstt4K89bJjHBAJRZY9ZRQwkKjYdS6HaR5h",
  "key37": "KigioEyTtnQg8G88gUHGG4bAGmdG9dpSJEebLJgrFky4JfC76npsKiyjzRj3QyTYmEunmvZtughGyR1VpTVeMro",
  "key38": "5rZNkuNuvRfc1ZhDb9BLNchy3v3RfjJVAnyeZZTZbqATn8zYkjUgxUopNJLYvS2nVaxev1Nm8QZn84hSbkHJ3u9Y",
  "key39": "MCzC7EapD8JXuYRUYAQBkb7M4JaYuCGLHc7b8Td2vsFg1dhfxedn9WVT7YpZzyfRiWcrYYcbQJ2cYQkagxf1dGy",
  "key40": "4JUHmw8vSr2w4HZWKJjUFZHrby96VMA1Uv8z4xGkkEhvNtESCvBQ1AhWKmisy26rjxKF2EaM1jaKU8kiyU5ubvHr",
  "key41": "4hBXDRabrtzBYPX6ZSxLJ2Ji8gJM2Ds9QdwyW4DCxNZMKU8Y7RjsBzNFcWVsKw8q2nEHmTvbSxqUW9NL9a4TCmSt",
  "key42": "1dJUsqTG624hgbDDRXKDHkgTY7sERxXsBdRgBza3ehYoPFfXXNQ1PzD3fq49Wr1c5yGC6ne8wHBWQd1nE6xkDLh",
  "key43": "4ieh3HKXPVzBNFnUi62p5nhVuU6S2gmT6VPDJC576HqHfx8ioW3jRADSRocv1YXWcaXBnoHDdqegboUvS8HuCK5c",
  "key44": "5mYVUg5XPxoDRkELPnVgycszpqCiV2vCZyj59768QvkqvPaF7i6Pf9c1dUeMSLHYYkLjgi4FeERCS34xtQByRGi1",
  "key45": "3D6qv7h253theJgMQLSy8JsPBFErx4TXRZxMJva37ZUppZVt5p8CaBozkhwD2hGXQuyadUqiq7iJP7TA8QQ67yeo"
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
