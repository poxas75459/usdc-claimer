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
    "63aGCdsMAeC8aKg5Cm3hfpbdrDpWyVGkxsMKXNp1kUntqCt7ALyQFTfKRAhpxKN3kkn7NpjzUud1XL3aDYff8AY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZzVazHNWHoJVbFPQJHREJQ5dX8GxMTfxjteTvF8a9pn7jbBjCKjM6rUHKRTnjjDSkQCzUsAY4Z6XxUkUh2RrfkA",
  "key1": "59UhAbUp9jwA2dSmD1Jg1sNL6CJAHtbcaD8xYMNHUEsZqcjEXWqJs8wm2eXgsS1pZdb1UJE56Crd9YFrSVJg3Riw",
  "key2": "3tJ8X3mP8dv7dG5ZNyevJgK4aSGnwr1j8wBRkn1oGtCGo2G7eG2tQRuqh4GMqBdkKKbbqKAd9PAfMRVHomMpT334",
  "key3": "3hNp8ibtcFkHPzyYJ23o7GUV8Gu2Vpapvq6ifpRwP4KDd31xzVUYpFfVyLouiJtnso6CVWZYMNSKtYH3h7vhkWRN",
  "key4": "2bnQgxvtkegZhXjUbjonJfmoWVpN9mjhR19jAuLGLFinHZWxNszLQCG9cLtA1tummUpoaB2PUGxamyzyih7nTKJo",
  "key5": "2V2eATedokqEay5L4z9JsfNchGpMK1wnfwAdW76Jf4rX3P4E2tvMNGBduwfF5LNc9DSRAhQj1sGLpy6hwwM8kEp7",
  "key6": "yX4NHNrK4VrJTB91P5rka2RBfoxSJoxyn5YNnVrAWnW9MfyKcsZLN4kAGhAQPSaqRYqpEm7bQUMw8RmM5JV94bp",
  "key7": "49SVWPB9nf3pbzM4gNqT1WLhvyWCkRNxbBG55ysJZ1aCDds82t1JMFsSUqLj5zKEaCweFQSu3ySP75m5aEAp9kwM",
  "key8": "pn5wiFzp9b2nweQ4EhyyaqBVjeRC53mqJF4yFF91sMWsbwykPccNt1Fr9WrgXRs1TorKkV6TZvFsjfsTZJsyvuu",
  "key9": "7TvGedTGduBs3bAj43D1VDKbKm6GLFSuM1wvQaSToVmzDevTGzf4gjCAtsVCXkUv9rh8uGNB9Kkqh336KqeaZaz",
  "key10": "3xyNxefMHXo8tmsQhf54feTZ9NgKDzfEuDm7wwrirkqbTUjFqPiohBJDkPX4heHTr6YUpJnWyEkHr8Bw12gbu6dX",
  "key11": "2sgSgUgcRSUdZ1QjJuronaYrRHswRjYmVZnxeh94PFxEpQYNfD3NqfvnTNSeRBpS2ieiuA6EBV9oghC625QogBhz",
  "key12": "5zM9d2Q1zUu1DqpnoaL4QA2JTRwgHhV4iAYYAwZECLSJWioB5ySDTN9RzHFEEghZebNiV1q6d1ubg9U2xpvo6bug",
  "key13": "26fUucZZveZe7JZF1qpe4PsKPuCnVjTMg1pVbygqzpzY4CbQn4yZKoYVvj6BQhNR4jHiworZRMkAG9uWkiTKBhFa",
  "key14": "2S66bZQeoYNYWfjWAL5Qr7Bz2eeeuKxmmS1ayWG6v5T6ULcLpvzqwQdjAyJvNeVTcvkNCTbDaSxswHf4u8NCWWZQ",
  "key15": "2Wfw46iJHd18kGFUeWhG3usQxAEMNtX1n1yBCD3KFoTgvfuZj6gYo3ChceTnuYxYcffXFv2gDBSksPiMMT65vA1G",
  "key16": "3hpMwrLJJHdnRVSZdvJBwNqwmP3qN4QAt1EZvbwET8c6i2VghxVzPVfmUDe5JotfF8Ss9RWPq35YFbfgW8QC4UzQ",
  "key17": "MNyLXMunFVQjdBPKdhBSJxXFz38J9nsBx4dwXagcjanz1hX9gcApJQAQVfaEgCEsTLNB2Fz9yDZ16cvXZKZsVhx",
  "key18": "2Jw3UuVmHVZUa2wSzaXnsEisXTrKu4oGPAAjgCgGaQMKRSssoKSuSd4CvkQauXGGatEToc7L6J3F9Sh9nynZm8t",
  "key19": "2BtXuuvAcYppow7VPPjhGVQgaqUmGbuDSghm5HoJGBnDNQpibx4qLzZuUchyjpmH4jHC9tENoYLk8iQTMTLLSjRy",
  "key20": "growaqputqecoGpQrUaCHgWge7YM4GjYiS9a9eCtVGajaaECNzTKYZRUVaDxihWzo2MrvjeY4VWQVLS5r7FHmZi",
  "key21": "qi6PvHiBT5uZYgtK7FzNnLJj3kSH9pmuhcPAZ6don55KxQmZ3sstEgnxEbvVTF86F6FDNH2KRKB8HHsRh6EUSrQ",
  "key22": "2g3CxpVKfa4gtR5VTcGZnTSJAb7eV1EsPAqa9FJHhaVXPvVtyEKgMgPGWXynJhFn437nS5Z99MeBW1515ykVa6d2",
  "key23": "4dj8VD7NiRsKc3ctkfMFsmrpBGtm3YFxTZDD2nbXNJWVHQkakD5LfmdNP1P5RkMbPxSfLfmHRaEXEZqyfMbmwQZR",
  "key24": "2yDg4aRazaVu9eSicr2JNhHoYD5qJnCVg51dpWbYphy4cCxeDP8z9ac21UdGfgPB7vKi4Q3nymXhDK5MBXYUWtTw",
  "key25": "3CCotU19xvJc11EpuxHSnQSTBfmnt7ckBvdWCa3gqgfgLzLrGikbYrcZkALRjtNu4dobCbsn5ko6AJtmf143fc9Z",
  "key26": "3KfnFoNhDpf1cSjB8HHYjFvd2yE91gP8Qh1sKJXCUn5oYdArnKuZX9rpsZWsBUnWdQwtB9HH9XqAFoGZzN7XZRTB",
  "key27": "w8HaRNsB4QmG7ZNQuVb7VHodUNsccANU2nvtjP2WTjAzq8Kda6pNZWWT6WjMH6YSVmzqsitAeYYz2EadCufyDz1",
  "key28": "3Frnw4q9BY4FxtWRdLe7bgYMyHm41aJL8kPCR2db7jsJemsN7vxmeNAsqqATJVUpbnRSamrrRgNc7MCuH9Szy1B9",
  "key29": "523rWpsr5T5kznWZ7U1Bq3KFqJ2ZbaxNdRchfbT7yrfFqoAemEw5b9VJuYgtqDFi1PmMiuppB4Xe6nWCRpCM6eGB",
  "key30": "4BwfZzvQ6ZF9KGBtPF1hpU8EZmFLu8eEv6R4P8jhMTpJBEfFYm8irmvx41Kj5rx415bwtE2ZM89rBGSpBFv5YWrP",
  "key31": "4YQLPaxu9bP8cVwVfNRyfHxGrHPePBpPKKRrUrW4g9fbM3RxFfHG4WQmuMus191P47Q53KsqCm478dGXSKVmi8UK",
  "key32": "3jdi3m8UYAB4vFniPn6mz6oczJ9S3jrxyqPSsdFzfuEfoaya7zFEFbmvgozwcGXdkvSdjiqSBv3oAZhDKsDTxYih",
  "key33": "hpascZk2UVcZMQn4pwarJKTv5tngqGwTd1d6VhjmUBiLzprYKF2KgBitV81Qmqme9mrUZ6wqa9TPgj77dC99gkU"
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
