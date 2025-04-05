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
    "kiLFRXzRrbumZJJrVZ3xhPiXvo9Eq8W5E4JyR3PHa1SFxEVBNKUjma9C5T56DoKGQNmNBHmwWSVHM9haefg21Ny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48MX1VPu9YfRS2Benb5AGXakUwTBqwqTTQbXkDauQtSTeamW21vLjSrPiVR5R1wGALkcH4LKnWsJ69jTeW9J1xuP",
  "key1": "4Ebxu82SiQEUWwjHA41KyxKYSz5bk5MyHSRryPF1cE6WBb19VRPse7zLmKRDSbVxxh5WqQvzAMNpbYBLFhHA41D4",
  "key2": "2tVyPw2t1oFgmzKpRsLVdqaXZALpmYgwgVME19VHWHZstR6Z6KkNNJHPfNaWVzQ21Q3NQFhu8Y9irKpQGCao7Ni5",
  "key3": "4YQAwS2EKSbs7Qxeatc8EsrFNhBjK2HaBsyppu53TWxs7ycQtuE9ari1D1fiE87VAxJUUDzsK4Ly8StZgPjmPnfh",
  "key4": "5kZdnXkB8LVkDNSskW5S7jT3w2eprk6WrQ2mhAaCgFqkM4rSKbWmWRDRP24B2y2xEzUZpW9nw4F21BXPqorum75H",
  "key5": "jbsoRkqY91D4MfzJgjY83MbV6DYoS1Fuxcqrg1Tvir5a9sjzKD12sG9JNFiymjLrhZBqXV8GHDiW4TcZvGctXaH",
  "key6": "2xQGdsCCmaxVKTGG4ygUNVUD5xPYkoiaPo7a9qYtjk912HFrcjL6mS6WX8T3Cj5LxDySwMjHYgr4paNs7Momzb6j",
  "key7": "3HmbvSCfgRr1DBvdHxZcRd785ZPg5NkoRvsTAgAib2S8nYAR2WR6LeiETfXBmz3wsFUZq5bDw15Kpx38NMSZoXNe",
  "key8": "41Xjdv2imKHsUbNjMtesTVGDvoWKcbTYvMF3TutNdu2fYEbaDPWp6sy91WvZRVi6tV6XkPRVE9nbiNF4tiDnqc7X",
  "key9": "3TKPYkUDobNxdKYBoJfJuk9g1b5sz9N8ywnSuhUKkDBBTrBHuVyA459DQbQ7jx51mpRbiwGhXqQVi1EqWKJ1BSF9",
  "key10": "3q7hWkuP1vetYRZSj28R2bHsC74HTaJ8G2M5jC6jA72dfG1cHMFgYED6pMfYRGo1jfmW47oisYUQdDj4KwheBEFV",
  "key11": "LV3P8nG6o1xpCdUoRNTmjmqLcP1BwofS6QJVR4Wt8dxcaJ5xWscnXpQT7G7aa59qT5Yos5Z4HNHoEZoW4HZbbex",
  "key12": "5KispSVWhGEscGNaWn5cGbDWw1d6orte18jebjZauHEYRYJAKoH9vLHUwTmyECqPWm6BeRGww5JqASgqzQ8BSQEk",
  "key13": "veoXGy2JFfB5WHGgNbZVMhQ73CKT6Wmt5XcG2eLw5Fds5N5rZrDE5S6nmRSBQVHWt8AEnDrmg7pANPrdAntdtV6",
  "key14": "3pH8Az8fRq7bRnYmUfsiUbwtwciAGz8naEjVyy3i2RFqBg3cTcU2EuKcAhtPCHBeUTXR7VGCZhXMSEuFMHRg1hSK",
  "key15": "5xeDTyKStoBKQrBu1a1dCzg9n75P2wcFYeeexvw3CC3PFwfCwdVmjp6YAMzM4J4F9P52gP5Buaki29NXPnhSpb6R",
  "key16": "2pHt7uNTpbVmNh8Uw2aVKrFKzLBpFYu1G9HJQtaoaTi7ApNUEj4dGPDP4aKZjXFTvchno6HiyDKZ5w6T2iH6unUv",
  "key17": "tdy3XLTGZ2LcXzmkU4e5wtVeGviBgZ6CgJ8dAtrQxE5nsNjKENT9NHEAMo9e7XCVwTdFEA9jzd5YVCBE8Hp4sRj",
  "key18": "37BBJ31LwukPwFMjozbzLWSfUMf8K1dYta5ycESACjbqKeFdVXVqEeBBJZUfMaq3RihqV5veSf9khvpWs8qtBJf",
  "key19": "zQnCavHkvdGVZQ5CPbGEjadEnNnJYPoPoV7DzaqNr3gXXttZvdtMtJR6ppWix1yo28J9n66vvAHLA1LbpT3F32c",
  "key20": "3XtXJS9JKopaXBdpseKe146ntdMJKcXHXErrPUexua4frTeGpeiNnbYsJ3sHqjgWtiSy8XvxSS1sQ3Unxj6XLRgH",
  "key21": "2Edz8UxmpTagyM8vma9aoaGe33vNEwKXEd8XT2TvVYFwLqrih6fBzYDNGe4BB62uhJbxiQoq2KtUvnivzk7Q2wZz",
  "key22": "4no6QCKgLDESDxdBWWRNhG8MULFRzceijyu8iikE9tDhjnwS4J9GemxozKdXz4QjLbRmHg559qGk5Z7LnQxWP79B",
  "key23": "NFzy9Qqb3DzsNWmdpDiq2MVSFqjkjDtD7x5tJncKnbKDABxPnNJ89FPF7eSdvBBVzaWp1npn5Jja3pmPxSczMhG",
  "key24": "43QTd1zUn8L6FUsZrGSGMgqJoCzANeWP2xThKv1H17AYpMSJqG6q1VnkGNBXyVXRRSKGis3bm7qfghEn4vJH85kM",
  "key25": "HiuoPrhuAKpTWqiSKw3QGgtpm8F4fATx5Jo6Q9f7G6wgxnkW3sZc2ufRfZR2rP8Ty4L16DSF19NSgSJXaGk2BGx",
  "key26": "FS7LVkcDccV4aoAThgnFGvNPFHeGnwAeiWdN1E6APWm9aQXuRCeRCVSMAxJxNk7xtThQSVQireUcFnjofJn49D4",
  "key27": "r3sJxJ6YZuRRKSTA1k9ZaZE31FkjW7AG6RpU45FHwEh3f2hYJhDoL6zfAfWYfpCAQ4hhRKjJLzawKZq4RPnJdZV",
  "key28": "49vkz5BGesXY3ReTF5a4iJc9nBAbM9VQV6p81UKJzBxb5H7VzAqtxqcFk9Xs9JiMQWWYwXvp5Y2kbshu13ckWkT3",
  "key29": "4v9DQ35GddE8nngA4yGPqRui7q5w5qdhQEXMCrjXoQtqHgoCHMWaEVMBKLRAUccELzwCQazCrqtDN9UmAP8QTz8u",
  "key30": "2WfzzMHruKEwDJS2vAn9poJnYa7ZmgxkSsU1VEyANBrdBbyu6ucEN67tCNfi3jfCwTFJghNX1ermmBgkTarbrAZg",
  "key31": "5r1Dy9b4hjJs1Zi787XvNpeVe6vBjJzrSEynqhLxyEVFFpPWxfy2rxuaWfZcRpghM78rFgaiMZuPwLctgjFxQ8wG",
  "key32": "2vzfTQfErh5og9xAtvdYtWXToWgBfdNa12wehPkuHPjqpsgzyHMNTADsPgtYuNGBdPERAXS8EkQrvNA7EdmQWNZW",
  "key33": "584ziKVacRF9jmThqKBAM9mjs86bmXEwzkZgU3Xt7TEV8jjSwVT3XQdNpW3udRasjrSSnDBC4fvCXnGUg6XpZCVK",
  "key34": "2io1WMrf17XtQ3suY4aPDyALvKbVMYGQZ4Y5MwKGSn3btXKRy4Li14p4vPqikSeRhJooUzKrfUm5NfoWC7QvJw8x"
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
