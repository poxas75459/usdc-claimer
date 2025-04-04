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
    "TTHgqzdCBEt4RbkxJSzDTsmuzfbDCP33GhmTsBgMLUqJN3Df82hpFLk5VQzGYaC8tVhQkdLvkXeZRVM9WXXyYAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RPkrnrJNJxRQnY3A5dvaB3NCUuKF1jMREVkvpthuzBxMxr3kcxn3MLpNinHowMRMacfE19aA4VVv6MaREKgSWpy",
  "key1": "2yMXyCEHLVLZUCrnpsG3g8HtPTyf6F7XCqwZBHDBHc6yHkqAJu3Bd88GEEfRrn6cxhgRRkhUNvooVUYXe5qNwRYc",
  "key2": "2gs7DoRiLAqYVcs5k1VQdqxm7rTiYMwWZa1po7c4u5vmCDfJPDTHJvFQkHKSrWo5J6Wf7jUomVryQRw8mEQtGQEg",
  "key3": "5tVVa2tLdvVKsbBpGq5g8LN56W64boUnnu4nevehJDPHC48zZFeBQwo5Hbe7zReXJ5a3rWAbfEsTSuDYEXjYBiPF",
  "key4": "38hU1u39syeZjsTPeB3w9SyXAzjPwd6Jwi6J7SS665WyLRQsy71dqob4a8MoLrqjXoSnaqm2f1ygu1etMgBc9xfA",
  "key5": "3z7PqozPQZ3MjevnzLPMBcCB2wUNSHHpkbK2nN7dYtzj9RUuGjRm8RBXk31v4P16Y82V2FNcpqxC2rG7sv4zayNb",
  "key6": "5WNPG7ipbeeiUFUc674U2reANFqh9D8YqtYRbobHD8S3awuPzUG4W5Ldfrqsy4Jm1QUPhr42ofoepNFGboUojzZn",
  "key7": "48sKZF36uLCuVXCATpSFiaSZyKnCzLqxfC8uSwRGm2FZyrs8E11Q53i8p9dSNyzSKtufmLr2VDB3JeowwVqjgQ6v",
  "key8": "2SPwtNLYdSQzXt5VwwALTTi6EbccLB2d1WqhPWy8Y81tmCDWvBMpCLVkwDdDX9NGgKXSu69PNoeby1ga8ioZPCZZ",
  "key9": "24G9dQiBPPVTvcZSjy38JQ6sSVXERy1JMRxWTqSn9NvRqHFRewohe9oUeq1iGveaTH1DJDHqebTqFkZy6FJwkaSq",
  "key10": "5zVk9HvfHMsYhTSkKxGrfWFbQXihM9cbkxhU6Pu9U2as1obuSVM3sA2k7MCkfoApbPTiAd3mn1C6EmJRpzMJFjnM",
  "key11": "42rLCGXxcYGime3zJdN3R4yUHENCrThgAu9nN8bRnsmV43y9oBtex9fhLvfCDzgWYvqaZ15Ckq4fkxU8VkVnX1Pd",
  "key12": "da8BGS729JbYDk8ssm5UAhsRaV6y86RSGWShndycXG6UmKRRXCQRYKqJ6L7e9VfHZtR1KNQfHLaJiPe48uKjPgU",
  "key13": "4NctcAqdcSeLSJpCowvJH7TPLkj1tVQXWx9mN5keBfmt1bZrMgKw3JmNU1Kyfmw7e33CJw38RMqQT59Qz7QQsPkS",
  "key14": "3sZ1UXkAAU3VvhkkaMgn8b6eJZiCKpt1Dr2NHfJWorGSpjKqCofHVUja6zovMGuiL2W3NkhjrfKiDPcx6K1NubrF",
  "key15": "fNcbXjSE1DQeqcvgMaU91X8BMRUso9gPcf1bQvV3mLfYE7YAf7jXyRByMtD8ttsTr3BoqHiiGbBdugqjhrkUo5G",
  "key16": "4GMuc1dbZFkVRG3GtD8Pkc9GQ8jy7hzaUi5T1fUfYnkGYqDAeA7AvBZYptF2VYGG2wHCuc4seM8YZpa6eRaEHNP9",
  "key17": "28nooayqLbAycYVd8sZ9cbbzK9uigSjCGLjQbo8hhG4ghrLP1Pg3wE4WdRrGjAbjEnGYd6RDt17CEyLbKiRQS5VT",
  "key18": "32f9BPWeZRDeb8quRbShgfLh9G1dzh5XcYfSSMCkLL9qr7YWYHR7aRgWhhK86yDuw3tViCZ9oqPgYg7YTWuAsCNu",
  "key19": "28Y2SGFYZeWCw5vjaKeJrqwt6R7b5rjUQoNkmrtLG1pAqpf1oEiPNVVGvaAxQNtwx5ezX1S3hiGBcfxMF8tY95xR",
  "key20": "4UAZMtiYkcCLABUW4BLnkFEvLjR14nKfV9Uuskq1m1LEAunEWbJTXFvp5aZfXT2HR41cCFsrzsYmijx6y89jaL9",
  "key21": "2WmiRAwG5KgSFPksD9PzwNG57qmy5PWD4RBw5RnnvWb5tdoGtmdPWPQMHWLdVfFrPhSr3icCMgCocwfLxwXqTqn2",
  "key22": "2JviusDrgGcVai4qdrFE6gR61cA9LhzgqF9BtiQqiE4giFm3RC9YpLyjhM1pQx4pLGwixMLmhBwnSiTL66gXP5By",
  "key23": "3r8XSUNXLZDW886zztoSzX7ACe25RMxf6SoB8gthmdJGTgPtJZrhV5EwMTN9sbgRLiS2ZEGppWqdBLbNXE6z6dCJ",
  "key24": "63xyPf2C2TRJxg3yqKEbjpoFykEwrjG5WassqEvsA7xYt1212N1w9uruL9KMrdJfk3G8L4ffFG1FuKT1AkRGG3fj",
  "key25": "4qSiQSP4iAyX7Wu3fqSBE7JwGMBEPeCq2gtVP5GytwKb4xirw33iUx8PuFLh2fuZ1EDs6LLYuxNdTR5gTJivF6Um",
  "key26": "5j2xEGFrCgEPnjHiPgHQGraSECAwAZ6Gq7pWKnqvvsdVFJzmCd1APswmKzFSvJ8BVEUiwWszCRLzpstnzYwShCtZ",
  "key27": "45gMLi2sYLqMpGBpLtCoL4NX5mqzSXscphPBc1uTkXRcCe2eJSzSMLREYre7S5rxko2k4qoNYKmNP3Rpo5G1pxJM",
  "key28": "2P5smFsXV3fuKEbt82kxevQm8DiriqEJnRwSDfMiFYFPdjAkYKYFPAzWsSy6fPPuuJsUf4vsmgpNBijaRRYfzhhg",
  "key29": "5x4R81AeVArnKGYa3zqP62fqvD7ioDXNdbRuUmpwsyg5LajgbAerfvY9Vo23txfbnsySkxs9AVz9H7xgMgLwpRW1",
  "key30": "3esYVju6cB6DcenLi8YkSPWYGBF1wVvg9Nyfsd1YzCvu73ESC2hvMmd8TJRLJP5hQw51S857Q5m4ZPHdW4cqPVLc",
  "key31": "4d3H2D6jvzzZtUC16Zs66p5ugzd1nByNR83pWb2tVtUfTe6rDwwDiPyMgj2pMtknAcVYkJMA2MKL8fhoFK1aLmVL",
  "key32": "34uo16kW4xJ74JjZy42sTWUyzL7zSp7DERS2UU8sCjtNAYx6trxG6j7UyMzU2riQkRqLURDweSc2eDeM7Gd4VKw8",
  "key33": "2FAsMgZEJ7jusjyhoFLM4imLUhJ7shfZQv45TViaSus2y2Uh22QXcshnqJ2zeWRbutXt4sF4YWpgcDbRNkvgZx72",
  "key34": "4DePsmgzw85dB2Ufonn4nDjQbVG43g57zVsbjzorNC1v6BH3q58PQ2LEeJTcfAKLd3WqLcpuTzuXhbv2qj96XXNK",
  "key35": "5C3cEuAHd4ki1YdNE4DN6vUdzWMr6UjZ3scqBvxgsdGgicJAxpY4uYuabXKtYH4j5WvWFQjqfrRKU7zKkfo7Q35y",
  "key36": "35E86y3zV2Dt9qkhFWJLBosEQyrJhKudRMtk1LDmjCd6E6GZXd1TEDhnEJhW12xAUuaKtJFRta2hWAwNAh6pVNed",
  "key37": "5v47Lr6exKfrz97bNEUZM6L8NqYMCvpL7BPXCZVs4UKFG3whWZSDrEs5Lvr1tAuxhgPZfCoUyuMRwRNHqAQKBixe",
  "key38": "5KcEkmN84FVtTyA4pn8fCeHAuQ8VRaE2eJ7rkiw6bKZDD6rMP1gCRMARx3mHinw1B8hAjmzxDNtHjwdvJfpPRjKV",
  "key39": "5HD6oUiYy4HQ52xqT2nzgLbQeapQ4rUN4Y6oJLH4RTY7o9cFbU4RS3Nj8hi9ScXmVkS8GXwdEdAVgnURxcAFzQDE",
  "key40": "XExPdGDjDBvRhbZpFdAz2sazdEcabG1wrHJv1YinJ6A7zytgvkSKN4WM6oDeegHgdNMBggQKgB8TSTbvswZS7Yk",
  "key41": "4XsnEufuR7WY8iBLAHpo4mgk9hJ6MNBVhP18yDjtyYndK2RD41We2JCcNijAiryE9XWCNSRE3fKEbfpqdKsydH1H",
  "key42": "2KaiTBEBc7f9xro6q3hjiBpTHZJDTrmqmzZV48PrYJe1T4facwiNtG6QePZU9xjytmWZ8Ts8m9wotw6uU5Buo1Kk",
  "key43": "4dWj4G2mbBy7sUpA1HR6EqBKZ1czHSUDnorBytCDrjU3Vx7BT5UcvpZmRejxoDUJ5sJiXjus7CsR7YQ6iHAaXqRn",
  "key44": "5ynvE6E1ersKBpQxpoF6wqoifTHEcwBPzuaLtnMQKZWZ68hoz5QrHR2x6pP59StA6xnh8xiuxquXwxrpM9kVyvNS",
  "key45": "ma9n3MMoSHcDUDNUrESdxRk2rMSntD4Xdz2xHTQvGQ5BqH466hMvTm6sFqwnsUUhk7ugwMJYUkzML7Z7qmqMVT3",
  "key46": "65fyefaDtAuxafTXCEKS21Dvn6LUKzxHxTTjG5CNnxdxMvGxKcgAH7tB7uqXzNqs5qSLpu3gu8hBVb8Y8SB9X5m5",
  "key47": "N33kF3Xvrvsji7nhZhJXSjztcyjvCFRE7MhTDdPwjAd3dcsenvYcKKQzpn4u2y3kxRk8NxiVPJ9HiPrZupfuGUN",
  "key48": "4canGrp8B3fnTeydw144WRQ4krMaAqf1P64e3gKPdrNfRQ97JW53pmZ1FthmCqpaMXAzoixviyGAuYJgDVovACJ6"
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
