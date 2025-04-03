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
    "4nc319HQYcKPSZNWCACHxoNxBv1wpbP4P44Nce8yCkHdGyBhKscaxyab5snLYq9tKCgPHGZ3KagXqNuiyc6AHGUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vvSjH3hrXDpTMRCbbC44NaGH21fJ5Tjuhzq8f9syDb7YWJFfQMRF2zCEtrVN4QVcXgJvzwDhxxzjboqpJTV7iYd",
  "key1": "364dS8TxYy5tF5CW1FcukJo8F4rwQiHVkZkzfDQZ3RxiC5jpnVLXLM4ApS37GQ7nPsZ7HkrkuBqNc8gx7KXzUGVj",
  "key2": "4J1yDZt6Q7EghXFmK291nNjvq6Pt3X4TJ3DQ3QSeNwbPWxbWrk3pRHxZjLrsSpnn1xbALKNtECnPwz1iKHGyV1Pp",
  "key3": "55PwAyCh5wLEqt714EHn5tnmtgnPHjTpUd9uBVjHXr9guW8Sve5kBt5fCCdHaTARKmzp2gqX9MtXr6FR6E9Un1mL",
  "key4": "4LvUge2pMFD87FCa6Rym8KJtAwVGwJW7XTnwMuocRT6FWZ9aAEaPNdrzF3XB8XzSycpWEke37WphvUBCY7aeCovU",
  "key5": "4dDDHdvQdgLckRKFx91qghBpUyC83icbVTV5LcvGSdSiNKjN4w5Z9xBSfFwXBQqfrLFoKrUPa2ksgUkk4Z4P7jdN",
  "key6": "34RXw2EGGeqvpZqp7Sza2kLfUNH4z9T381kuPbZcL2bG1K2Cnjtq5nKKki2HXBVznRdywU3wnci8nweF7ng1kvqz",
  "key7": "3SfmYKS3C6tsRNfejYZycghbB8QcjK5gfAjFov9RgF45tbkXzqY7ofmu9EvcQX26ccQnTnXkuHr1DpMZhnpYzTdv",
  "key8": "ZNXPguBp63UCdPtqQiuKt2cPruQEWHdMFe9HhTuFCfQ6NHotH5QevWkWTQKWSDMMYx42th1XXn3Ezxqpytky9Jo",
  "key9": "5qq5QdYYUrBwyDYrP7SLDEq9ni8EHBoEuttqsSHr3bjRNceUNdXkByFdFryCaMHdKsNYs8vXbbfBNkrfnibx3dUS",
  "key10": "36rUNAAHhJ741xFjik9ew5uLNt1wTDjxZNTHPEPMwGiaDRbD2c8cC6vVqAWauakdXTmNPg8J25YG335Atv6wwwTT",
  "key11": "5gaTpFhQFf4GHvdvYR6dWknRAekTiiNP9pw5i42z2GAifDZ9Eebr3YqQvDwcC2sUEJnxxesUxvUFVrvGSf7ML2TY",
  "key12": "3CqWxhg8ExvdCMgtX8z8hoLudjfZiZZyRw5mk1CgpZkmr3YMqTVvj7Q6ZctRqXeGJjSffpBsi5E2webph8aS3MrX",
  "key13": "4Y5FshZ42piwzLS9cLtHKgnhxtkYAsTywNMgTwWvX9Zz6FARTaiQ7mBM48dWvFVVKeg8dkaYoBJGCdeNYp6uCB2A",
  "key14": "Dwj2ZPajESUJvp7ZsuW41DRCcHTpatQoSCKYvbKwQfJ6SBbhKVxxpBVdKeGysPWNGBiW9TcF2HKqoNNaYWTfZAg",
  "key15": "2sEhzdk6WuFiiK3AZXc4jyidcsHmnzLKPMULthWQj69kCJtUVJrkKXhyLzuAM2w6VXWGYFUAiz5V5nX4S9Uvg14K",
  "key16": "4HfbxCTk1aQpM9xgTTBedgVyKvj1hDuT9vWSNUYYkuC7QRjgLZbE51BuCr1bzwrws3cApepn2zEaidBsnLPiEfst",
  "key17": "h6wAWHTPamyE2e17DYm7VgY5pV6418pZuJ7WzU8D7usjE6NrfQUod5kuQqp41VmNfTE2Foq32Rvf8DEvq6gJnXj",
  "key18": "4WsiJxPTpVDnJhgQUoDoPdy2TC4FHPtRsgX73kzyQ9frxp66SWZcDKkod4zqiS43RSAKzdh34H9Uo8qK1Liz6cdt",
  "key19": "jrFKSxpPAmBf37iHWmZ8ngBGb3TM8KtVLoF2UrFdVRHd6ybZYCL7zB8taUMBH4wn2EC2Cae8pUKytiyNyqF3mW4",
  "key20": "rgxAfoV8P3DtrssRiupqzBVySL2JMB5S7Xe3hUrGnz5DefTaaB6GEzG3fkjHLkeRp8vqU7971SNhDqbacPcwHpf",
  "key21": "Z6Y45LQDJTU2At7u3L6M7HscAjStzZ1wDZ8Nm3DBoMag4jesKvnfV2pDZP22BKARFXCa729KEhb4xMY4cnw7EGr",
  "key22": "2aoBEiXKZMKEMjNirYwAbtwZ3Ga22T1MSj3kBSWPBHywihnTsuFi5EtAUSd1CyPcU4P7zHKsDAQFHGaUCHy9ssVc",
  "key23": "45Ha9ZhvvB6rkaHouhzc6GrEBsDTaPS6wz9xvt7xvkRBTAUGqjCQ5CKHtgTJU5RSLXzFprSJ9dtMPP19KvUG9A6U",
  "key24": "5aTUyDN9wCcgGWkXViZeFdV4U23UUuAn8brjf7NHATqeY6wGLoiRXZwuxcXDYFkVyL7LMyfuPZLR2N49PYQXydNi",
  "key25": "3DLuvztteeEJRgCrLE3E5bwbZW1NECToKDdqGTHsiS8u6RHYjt6jx4rHmqQCbkK6pPipba921gUHrspLWC3VVdAK",
  "key26": "2FPXx2Bk5Xy7RdNVuy6k1kB5fBUAi5EwuMaZXAyV3wVHFPGLi3Wv5fHWYWhkS3jz4ynUTtJEZZrfemZocV5iTFqB",
  "key27": "CGhAvDR552XGPFqcwkxbxPLTsPYXmVqMjk31dwLFYerVfehP8Fcng4P4tB9YPzoKRSrJWrdYyWg8Wk1Xo9gQwwd",
  "key28": "UrsZ44dNLW8g2sTRsMFUipMRgdZjhSqCsNd3ydLnuTA7UTeBbN8APWhAmyMfp3JjdtgW3gfpVbYDo2GraevAB7E"
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
