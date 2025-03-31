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
    "4em5xmbcA7ubmZByzCwfuX8wRfkcka1p9YFb3t8nDQc98CAmYJRTtB3zrqmnajWe6vbz1qfMyBDgdE5iy1JhL132"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hpC2oFbNyjntLrvFHPMzjGUzNgtdk4dizXd4kc3Cu6DfNvNiF9aPN1GyuttiKZ2GLSQpY4XDXdy6dt9EigEu9xh",
  "key1": "4FU76BKuXBNESscSTyjWH5LVcuLaCJHu7yTTgdzzLguhMP9G58WQ6ixbeBTWt6i6KS9dMvbvGfp3iw8ZtHzdvL6N",
  "key2": "3LoN8nM9Do8WqAGy7NFgWpXRmEEQWRxBddLvd7nTvo38SMrGJ86FNuZ2d8hUAFSqmgDYHVAas4auCvPkFmfwd1iv",
  "key3": "4oTP3nbRq9MedbMGjfG6cs6FH34KzCrm8vtUaBQmx8foubDki9LWRA6omSBznRxVk4V2KmDMcb3vhkfJdhFSC7iU",
  "key4": "4ZX83t7Efd3GYczgo4ma5vFuE4ouRaB5qaj7G3rUM8EZg6iZALGgh12jSkyzW1HX1zRFNVGJg4b1rXDQxaqp2kuf",
  "key5": "jFqz9BgSFXHDiLbNauxWnj8RsBogrvPbov3BCi4h5ZMW9Z7zmREJ6L6SPN39mSt68KLx8VvhD2jMFWMCL2xrESy",
  "key6": "3j6NV9Xnrcr2aC4TugRqovLp9RRK55sV6yjYHQzdb4bsMbV1ZNLArFXjDb7xafZHeCv6HMQRGBLSUHYZjFeyZdVT",
  "key7": "63e68ofwnHz3fZcYi16edV96R9TzhMVmtkpiR18JbYpe9GAA19nnccYkwXm3sVRUHMcKFtUzytBzoB5CLNybQ851",
  "key8": "3MWnaaF6hgUnoysVUrtaKijY5vJRBQ8FmvCAZAMsiWQnCLiZA9KoSnKBHejfXDxjBcikYSTAACNxh8a233BEcz9W",
  "key9": "5zuafpUH28yjbZ5WkDpxMC2zhBPSzTjvuoojaQb29SvhE7U3M1qyGs152fEiikMaCWB3akoSgjehZ9vDj9o8Uq8V",
  "key10": "59MPQ5rJPUHrTZpYtw88mg5vfvfDwjns4x6UoGPUxu6VyoHFh8EMbVw8fdkd8hFNovGNdTLxDoVoVCq3fG1x7iQj",
  "key11": "655Sj5X9Umdyg16fDm4XJQemujhzGjxdYCTRmugQoCCbWUQc7V362bSHzKxzCuEVWWCLiiyDSLUEUARBUAdHjS5N",
  "key12": "hNDMNcJ3FjhKpxzq9xbf8pT27jyXdaeL25CAmgBzukFpQ63aE8TD3NEboCfnxHFbHwameijFjGTHNNHTCjiEUNv",
  "key13": "4E61Te9GmbbDQihRUxYinKASqS3gpPxFkabeQnwEZyWaMe7h1CW3SXGWvvVthAnqWNGg7nsiA4VD9JN4Mcuvn8Cp",
  "key14": "47BgdbAky1wQGohY5XNZa4fVR99cKozcWvmhTMXZ4QShZe1rV8yEuP3UkmqAZ2eDcitcF32QiYYJ5D63daqLZSJK",
  "key15": "4wXz19kHP1ow8Ap4G4wFDjNVkUxakyxRsjDZymJpXFzhfnRzaHvCt1m1VTQeCFhJToX5NQ8L8Q8Q6jkeHvFqAy6e",
  "key16": "38Mi85bE9Yqgd9KnDB8CDzspJDddCVoe6wQwsuKjt6r7DZ8BZpWjUDFKYUwyZ7B8Fe1fVDwQKQZ9Q1E9h4KqVYv2",
  "key17": "epSDJqfYVbai2BPH5P1Gts1YfnjMjnWCvMyqYU1SaPV5JoEhFE9AkV7nKmQ41atgx8nTR8GUJLncYxCu5u92Z33",
  "key18": "5YrWBBctcBF9sdtxAEvsBP6ieoHkja5pjLZKHLKXJigQkFmr4tVZQLz1g34474b3HXcyEBDfVeBcH7rijXie7Yoq",
  "key19": "121ibu41zPDb6Wv5NYgvoAB52xRnzsNjXycvdP3P5mi5epceShCPVzJE2KQvBtvK6MeVTJaaJ5fBQSBjmkCaW9TH",
  "key20": "3WpFRwzYUzgumNPQMeKmCzSiBeb4PXDisKFtT2jtiS15tGFcwtXBk7vq1NywoJQV4eDw6KACtPer3C28nbUsfVmj",
  "key21": "4kTZmwTdqzaiztsY1V32X82xJLHtKjm8ehojiT6VmZvST4raafN6JK1w5VuJC1MMBD9fRXNKTBFq5HqytsZ2TsqS",
  "key22": "3ay12JvWSVroazi5LEt2A3CsPT5ft4c7AqnRYWLg1NrMkwSRpMeQdKkP2M46YKgTPKKQXLyovvuSxL2UGqb7g5KR",
  "key23": "3z6mSvTBTAqsJXxr5yJHUwDm7BqE6e21AM4oxLiJFqJTKzUjaweahLA7JuZiDfkjEKjaPm5UC8kAKvUEWBNZZkdH",
  "key24": "GBgS2cpZiewPL2wara9xn7VjhhLo8HvXw6BoisTJg6RQtA8eauH7dXxWbD6U8TqWGGF4DvUx76iTKHgrWWu4z4V",
  "key25": "2tGdTtvwxwDURr2SowbZfTzZyrhQVFkRrP1xZFNyJnFw5j2C3tMrheosoffwg6BVmDKZU4CC7CTcvpDexs7dDqnM",
  "key26": "47dnNVD4YsxycXeyPZUEN1Dh1yNvr3SSgAmAPdkMH9dUSRaEwhSjcQqd1Z29ikGXv2K49t7CGUGNJsFCyJDAuZGT",
  "key27": "34DaqjMcbKmFeE9hbgS5YKVYif123siDMZtfXzn8U5nRZnR4QTBAj4kzZFZzBVCvUuDvqxA9Grm7rTfehMwdD4gC",
  "key28": "5M4xDj4Acnm1PmSiwVqSvEFdC7DcEBhpCieD1ACKWAdxrjnq4mi9cY3QbAAcKp3XQn3Rw3P3Xcdx4FjfdgHHX8mZ",
  "key29": "4kDZM56X74vC1RsCybAKwEM8jTj4bdw6WW6aLapaBD5mK9QCbNJz7XUg948EJJyULLRs1JjoZnz8b17Tsv542pfG",
  "key30": "4Q5C25nVoz5rS97fXkAQvU3mEo5uh5WFdormjwCadW3ZF7YRUDRsvYpvSH8zaN8Ce9EGz1Pe6YmVUR1Aq7NBAysX",
  "key31": "5ihuax7Ja2kX5J9GTJBj1j5BVc1GDawJDoFUDjAfvg5R4bLooj5V5vXn6AdZKBioC5xBkTVSxJVVMQDthhFXBkUk",
  "key32": "3khQsjjKnwkBqxLm9wNFHzp2FavK3Tuv4tw9zadPq5pSJmyQ5o1uguEscuY1ZZobSyjUoG3HFohiw2oQ31qzNXeF",
  "key33": "5T6mNYiwZuAwU9vxuJvJdvyZ8QwTsLkGyjtgHAxxfpJ12ivMRhGMCH4oN5pfY84DfddHxkpifvfM62yM38NXppE6",
  "key34": "35c8U3vWT8yBwkygVtyDW8e3zFJppnubZZbFoMvtwsEUfTgbu7owVEqDvnXHKP9kVwiBEJUXJe15hwMvSiaUnxbi",
  "key35": "2H59iXaZ2MLaCWswkMLCE3XxpQ3RqeUasHnbhgfQVgrpkuGKDXZ7hEvzdcaf7mAaqX9hwEzPXWwauDomkoKJnh3E",
  "key36": "5cMFwN2NpeueorACugsZ9XAAZ5imA5Tt6T1oJNqHoDGch26YEQggXSbDz2DwsfjfnTYL9BdhKoQHJgWrqzw4sajy",
  "key37": "5kgrm8cfQDPwoEv7vcnKyoW3CnCf8wpY9Pc7uTjsyiPuFLc5dqYtbEDQZqxuyAUh7m7VRRhJYM8oWxDnquc3GSzm"
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
