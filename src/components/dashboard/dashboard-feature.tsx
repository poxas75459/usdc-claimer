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
    "49TA7zdcfJAihCe8MBL4EzVnDZhUTuv2uY5QKA86h3xYfN2zZnFDWXb7SLSw1F2wRpG5c8mjTgyeuxzhS5Va91Jy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P9wbmj4qLNvAxoG1CKp6YCFny5e4TMK3NPxdkLKDhhBW3RiPK7VHEG9RGe78Wi7BbW6DtHs9ZPp4LWGwtzXoic",
  "key1": "3YSHbgnx6EaYCV1xQrorhuA9VvkdaX2b93sU88GFzFQyPuXKKi8H9M1e6iNZamJy9SmHUFqGpmA6wQ2GsAqVE9ke",
  "key2": "3wGHuUf25YpPK35ZR8PfFJLup8YHnj85GNAipAhrS3eb69aT5ekXFF4q7k9bnPzGVZ1B8bzMr9mmjAevQk7PZ49T",
  "key3": "YZZEvvJhyAYNmeC4jm8FuWrrgUKcUvHVvWhUhYvo6cmYdVTTc6Y5G9CoEyEiNPLBspPapTMPZEktqCkJGnBch9G",
  "key4": "2favxg74fFfvRh7TKAQeCT7EKuPfos3HXKMdYo71Q3TPjJVAQbuXUHwAWUhurnkuxSo8yKdnQGVgLZFpLbzaXku1",
  "key5": "64PBQUwTamkK3JuRS4xiGgD2kn9KJkBUqK651neE4dQLJnpG78CKJKN9cPhMAcGNyMV33ELsqFceotBseerxMfEw",
  "key6": "5KtDb3TMNBL4QHrWNcS2ScomogBQu9jy3M4DDJimffeoJhkZQ1F9AQsehWpDaitCdJWTS1wfuF2sNrVpTkncbVD8",
  "key7": "2GMCt4cznH76TorDswYy7VRt93KK9gQHrpgwCaxQrD8JoKpGYce1aEEnENbEHhkyxy8XhLFQ6bACUeA6fVyvDg73",
  "key8": "5Kq7eqCoRmKXYSfdsPKAjGEiD9BvoBppAExLiaUqeHbLNXG9zauDnfHzZXQsBx5yr2XCaqfq1FoRS16UQZpMVCQu",
  "key9": "4p1JMSV8Ee3Qa9ovEsxrHnfeU8DLndHnuSYRsXiBgGvP9UEqD5RzM5wqgz5SHQuzax6ojaidxDFwmPpM9DeK15U4",
  "key10": "3FqqqzJxi2rsdvu9B15zLCdbuX58Z82XjbWXDG5VrTPdhYXrUkbhq7CyNxzATZdUDVKYDeD6oPTT7E3ToMUoQHrh",
  "key11": "rrDJdXkx8F9E3UYDGDvukDTJmMdfPtG8Wqosc5Ymyf7ojStD4otnZ1YN5CmSUKCQ27uPCpeeFRrrwHv11W3Dgpr",
  "key12": "3sn476M283297KKoAPVqjJBWd2pQvHhmsdbZzbksfxx5ihTfXX4ozVozPyXYW8SkFgVs4kPAsuVszVYonZKhdV4L",
  "key13": "64vn13CkzvRsrDRGL5pcx8YyLdsnd6zz4kJ9sgQsTLfxCyQsHdirDmEhKiFHMGCXcqFtDSHM279XpxcWBafLTFKm",
  "key14": "5AnrGbWzMCq5hvJ4B5C3gN5AtrCjSEJfZorSdjqEKpqkhnfLxvx4KRqQW3ibH2jF8DbhLwiHdMDz8HagQehcZb7U",
  "key15": "3CxUyKC5yXKhZ3J1xfBjE2jGpDuZ7KcL6RWtb9MhmCRt3aHeopRyRGPPfa4GSfNmM6SGPrzjn8V6b1RpCisKt64w",
  "key16": "21eHARUViWy3ZVjVHqNKiGawe3JgtZHn4ttM44QhEz7LcdAAM43zVj7gExNKVwBvRifZUFVkxU7JTouYGg5AiCtj",
  "key17": "34oYKaDctVFygn5o7mTzRfF1B6sxv2Bd6EiDy4WFU9XAizWeJQfCUUbzv28gYesD1SZ3DAfz2LtW6ZgoeSFurNik",
  "key18": "GAq4v6jJC3hNyj8FGG8qV7RF4e9Kv55gq8sCu1C8TpxitvdppbvjgWWfhZtErfpvnaXHCGCQaiWrEaqMKQ7VUd7",
  "key19": "3EJDqkjQS1DR6TjvBiGdSc55gwbLSbEzkDxJ9cejwji7Bsq66MLnQJPbyqPuBfviP9e6Gpu8RnQwB4gBQxGpMdSP",
  "key20": "2L9Nb1qP2RbxPUoiYPGhiwzV2RvQ9ckrnyCHKQKdQhHezj1Z2qDt2PzxRT25r79599hWwvwU5P1a1AQvdEnRi5WQ",
  "key21": "pDjzBF1xm41UmKnXa71MyQnDpZ9s9JCKRR57uDktKSduoXnWir6So1oFQcqA1FCLowBgVNBzB7ZKs4vdivxFV4u",
  "key22": "3cZan3HE2ubPxcYasAGiQkh9c6iy2VxTu559oibJjGvK6EM8ngu2DiEicDZDdDKkC8ibV3D2XuKTA5ot9EqAbfBq",
  "key23": "2TgAFe2wAqwoigyDoQJgkUaRr9ydBHFojcikwMhzKjaAcTQQmH3rfeYg6GagKC3fb6yLkmQWdvPBSM4cAbQgMg1F",
  "key24": "5MGsuS91mWyCrcMmDdNk4cCs85gZABNS1kWmPczgNjx9PB97hYJuWByjXPwCmiNDWKum5UWmJCfGokHYXGz2ZfEx",
  "key25": "2a434TNVA5Fkzd3LQoVEvQpkBqBsJ6kTv9rAuT4zV1LVvthBhD2bCPo1UTE1io9g3coYjcg694sEXm94QmJS2L8D",
  "key26": "3Pi57geqLkvBAW1ettT7ysojj5nzHwHQQRqo1ND628faVbrSEQeSWehERahcv5maKKHaXm8WvbRE7i74DeV8mAxs",
  "key27": "4kWzVFA8U339n2xT2dyGmRihpUn3aYJnjci2Y6ksEEJepmzsW8dWc4MQndukJ2p7cUSifkcXRjCiS7gLGWx8sXac",
  "key28": "DuhC97ikQNxC6hMuWR5DoibaKryQJGaJnobWK86fp4ZShskJ3p2uYKA4EMgs5ry8ktdCdRG1DttbNC9R2tRn1GM",
  "key29": "4nioLiUyV45aJuvbcjvX7DMHwmFE1keicHbsd74kYttWwbvkJAWpJFV2RzEEdV4Y1jdSXRzP2QMH4hQKkvjJndJ9",
  "key30": "1Us5Td5vqeB3Fck8E1d63N2Ek2QUEsCwkdps9fwws1KAchN8WxQKY2swu8FhWFyuNJ7Fg5rhkvqTgWUGkd4rjde",
  "key31": "4BmzXPPRAdfkgJtuJ8GqaWreJQNf8guVazVXm8RTTpNGn4vf1DMqU7K62staxHbc1LxfHvVxPXF526kRFf22HCWM",
  "key32": "ynU2hvcF9fVTjWGABV3eWypRjvyd8wx62Hn52GSZpdqK7QAwxeLnp6SUQX5aopQKQGYKxpMpwK4p2qfdHFHQAta",
  "key33": "5AcmkPAN6Z28oygEmr8KPEVi9DpPxg3vVy7uadWK4ojVgLPANUAcyZmSYBKL4yPqjvCHmE8FRraRwYiQWqMrUu7N",
  "key34": "273zxrtUy4o1nHfCzHiQ54NVMFrEt4qjMSgq6xi1mxqXKhYSVBBU4ZR5jgLpXW9KcQRXnRJiSoiQDi1Jur2kH9Ai",
  "key35": "2ynXTR8QHMAjcYPZr3Nv4EuaVFMVqdddazFStcjABE5cqaXDeAKik1AyQEuxEoc9mYm7w4yfEbwsW4cpPPrQTYdo",
  "key36": "5vm2wJXHogt8R8gG6taUSm9SF45ThmVs9tWe4ZpeThcXrCQnkAvb2czebhxScex8AsA43M6z89j8rUkZXHkDTv7d",
  "key37": "3Yw3HsCuXNKSKHBojzxxqZ7C4xS1vviiwseEs87WEyhZQd59mAvE5YU76PHZiAMDFUkv14JDMvTGevydiPXGMkjK",
  "key38": "eVTPUPWi6gKTq7msQoZJF2pZFjhD5PPHVpG38tuaWcntrmr5u1scxWDJkBAuFwC6wHpP2VdJdnzxhXXH7bvCDb7",
  "key39": "3YTtJ2m34qQYxv12UJvVjYQLTucNz3nyx7xZUuWJmskBsonvbi9JEWAASLmf1v5Uvx7JPvb772nLQSh2RVLkWdH3",
  "key40": "kYzphhJvwo5dPJ3TceB6HmwzLcGg4y17MRVmyYiDm7kNjUXDjS4tf9UYJpQkE3GwcF5ZmmGeqpBrvh19CebnHCV",
  "key41": "41bS7HbhQqw2jdev7pjcBGELgaz36wFyf44bUWafu9UPWGMvfCoqvijLpaCnf8ysFnJaFiotGRtjXoacXhaAvjs8",
  "key42": "ExFCT1AejBEYQiaRAkBeUCsvD8ngyDshy3gR7nUbfcK6KPceyZXe8CHbeYJCedhwUAJ45Qe2Q88JKcdHmpJHmhW",
  "key43": "2tCKvypp5kjcFhovR1AiurmAATLcKNjwwriiWLWB9u7zi3fx1yRyfGJ58Dsd5J91bpft5AJjRLECGXMn6gtSAGdF",
  "key44": "3kKTNGTpurwRLGtXeEVMw1BJZz9cPcWUkSPg5Ziz2BZc5Ewz5X962RCZX75fjLoa2J5qSShhWcPvdGh5aPQvA8ND",
  "key45": "4BhnRFMzKryU1hNHXeXkGqBiJBMi4tuQL6D9Ry7R2shrfKLwWQz2AGKCt1FGuNcdVR9fed9JqCNjVBLRceeY4gmq"
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
