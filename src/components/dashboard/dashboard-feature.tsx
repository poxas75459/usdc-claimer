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
    "2u585tJWGBfJfhSm4AraryXdB1nLrZG9cZqTErR93UiSy5bzduDLP6TLh5X6X2BMiCu9FJsHb5XJed5A8NzfNMGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SsFKi2WtSXwpQLJzimrZtTTz3bjPDT9x8iKtWEMDy7N86uqPkALQP4xgiEd11JyJGAqCu8V1zG1o9z9zL6pxuRy",
  "key1": "2RC257yjyDdQuJG7wvbB5XeYM6UgMU9XYPXqkqpDLsSjCA3XUKmUCjiVSCFsUCcQYP9QFXHsv1k9QeAeickcxbRc",
  "key2": "3GerK62pZJELxZFc75Uu5gCRZpGUmME9yaPkZUpFc1xGc5NWiHYXHiEyvQ1TtAf9E4ZYrawB4NpdR4uFayg9wDHN",
  "key3": "637Tt7WoDHfSsBAEzg2YuYRudUATbiEDV1QDahnGVTzA6LSDL4scUcodDs86z3gCtnKGU4iMhZSssfekPvzYc7H7",
  "key4": "4hkgWKiDajUPrnqDB1TvwQtmym7zQVbEcsMJcVLcAfoDPT97ptAR7xz9ytPHn7LkQRfWv7K8dvoYvY1ZjEBDty1k",
  "key5": "5caiJ4Biv6J9FVN8TV9DyP8hLZhBgwdsM6BsykWxmzmn8a9jJVUF5mTgYGNYeemxzTEXPdrX7WDqpiuroezMx9DZ",
  "key6": "3ehA4Q7o3ws5LJErdGAh8GtxqL7YzUzfuTPVwpKysByNMMTEifjebaQFTxk6C29dUnDU1HZC9WXFW8LyEYmm7T6G",
  "key7": "2UR5zrYRnwMQRpWj37x4jdPWLC3Pw9QUmXbidW4zoSeSDmBdPpypzeP97pgj1hsvQmrhzNunuifQQDFm93J4gsJc",
  "key8": "u9e6Mz3GFXwypxW29ymrgCXMk7evH7CWWZUBRDD5TciNXh8595HjEnqz4ETfffV5584ceYtbVgkhQbDfQBLHR27",
  "key9": "51Ei9vNap82Dc6wD9o3QN9VpkoBynJRwMaSFMvuSFmPijCucFZNDiARiGbNpR5B4gSErFLHjn7qtYRpB3Tew2oFU",
  "key10": "2jUzAY19JSDBTyYZaSDjSyKWLrcGWaTmg1Jt5g4wMRkxtEQGPFjDcbPsiHqV4PSXoLyejbwd6dCxFrjRa1LNJB4k",
  "key11": "2PmsMoARzanxmHT9EUXaBPQTh512ZpKjXsE8JxeXdzK8XGqBdXxsmzF813Am3Kaa8FE3kBtSyCYDLzre43DKrHot",
  "key12": "3teWtXcPjUYKQEMzbekJcyBM9rv5prucU5B4CJuJwPWmp42bzQvsU6tVYcnwX9NAKxQDznfdx3bGdxAjMnrhVjvE",
  "key13": "36ocvJbHyffuyQyF3y3Bjk8rAoFphj3GH8iT4guKhSucm24259e7Kgys1QLXPvPWwUMobEzbkpKpMycbQyuvmyEa",
  "key14": "2H94nNXJjpYdLyDeGCCGojwESNmrP7uM9Wh8jWJUacwzoFbrcatYaGb3Q6NoaUy14fQz1J33RJbF4JJQZaukD5xu",
  "key15": "5CkKJ8ekL3HUC8YGamFD8wWjaUjPCUqVCh2oZAYRstYhdZy4puuwx6Hb5gga2WkbrdZQAxFNHCokNUGhB93z8ZCa",
  "key16": "gbkvDy8cVMT11iEv5XnVUYg2Pvfw16FLPxEn4vkGuV58jjRczp6Wy2gpp5KkLcJLuzRavD7LjbUvA4G9FLJda2u",
  "key17": "4pZFr1E2yUwhpAJS7YtBKFphYnvkfcj9hMz6AsqAiZjQ75ufBKNhptFV5DkHdnMDtwdvwftM2omspQQYv3JkJCcz",
  "key18": "5TZHKyQJ9d8apTuWEFhha3MySpMKC1pAuKus2E5zDLHjspeb6DQdUjKxGDCQ34L8k27reCx2oPYefGx743j7viwm",
  "key19": "ZShw3baLXuGGcj2xfYcGeThcyxnB2ZyskkwUhK1mM5qekJXhFqFvH7cUYKYSGMjPv3YatbqdarwuECP9h6sbv6j",
  "key20": "37VdUXNdubdVw9Fv35Wv1G3N21HGALgBFa8UYe82SkqbEG7aNxeF6zH9Vqec55ixJqqPfuGokrzbCdXh3zbtEKtq",
  "key21": "5jDAcbY5MQgKSDGW6drYspCY27bWg9s3ee3vTTRXAvUk1ds4qmSRHxuMV8RP3Drvq74Y3xN2CR91yeVf4V25uFxg",
  "key22": "6gSkGj6WT5A48p2DkLiqpGm8NpD7NKFM8pEZuxVMDgs3xQRnV9ajg5LBX3swuD5ESEZ3WG3TmEUuupaZyBHq5zo",
  "key23": "3SB4EHS7s9mXvme557xrCz3qa435jQEbnJABJuQdFaTHXWnF7gJrojQsE5WgZ1c3JVTnFrE2oUX5i1fbKQ7ibD93",
  "key24": "3YUySaGXtRuyF6vHoMCZMSFc3F7R8Zs6TgSK7Y73KWkhcJYhJKRLu1wXi3gU8BfSSw5bGKpRGH1fMSrMw75UhSYN",
  "key25": "5D3bChAMC14L3GqcaLcRJ84XazzHeFiK92Z5hnDNeX9KScKqZJ6VNkiqrmqZ2r3qhGdeuMKipgfWRgh9WLbNEtMC",
  "key26": "2MYPbT5hMDbdhVvPfkaUnV1jBWbJmUdxFJoA2B31vvpkSeuyCyws1Z1r7VuHgCh67uTgx9VbKYbwHE2zvP3XGaVr",
  "key27": "5YC9Vd4sSMaj6dCdVLTzpBR2UhHoSEQkV4oGcXXMBxQ2bdPfU74GbJHcNxEJ7DugiBNHxXot7xHrfyY9XmAhJD4q",
  "key28": "3CA1D9ef33mtRQ8vHr6SWVrSCt9wiCjZkjY3EkJx9y2bRtSnzi3MD74QzxqUTZDtHsUscFcvN8bDS4CTgxbDixTd",
  "key29": "3vx8hfNgQwsakDHZBWNtJGqt12P7ebfjv1bpSeSJgFF71tm1wASREFLm64d6br8NggQaMsCftD2CTxFRkKEgoKT",
  "key30": "2nzGhpGBpTX3q7zvW3H7BGQUfS3oRppHn3FLQc41Esg8fFMT4diTESVSvv6usyjJVuvEhMxuyqfkMbg5SLjiFYpE",
  "key31": "Pyfo5WbrWd6CNTBzo2CEoURQr4iTz45uSfFzSF8Y56gpV32n9QpaNwhskRRoepGSuhQb3C4BKyTvs5ocxDpBdqM",
  "key32": "3FNujUNkHUQpoFAwzZoJkFg2peWdJQ61qKovYbaD4dCL7vwGe79uxsbBaonBZPZHtdP2qqeFNmYMSoE4b4tKrJBe",
  "key33": "47KUDxYabfzC8ZkKkqW9CVkfzQAH5tM3Z66bCT12o44a4LFSY9LAeyVsCaFTWeTcciM6msppdQJYBoZpoCGZ7mdF",
  "key34": "JLrHLtWSWH4NoLgU6z2nvhnxWcuhzKDwdmxGPgnXzGNW6bifTJ4WK49yP7GC1cVNxVnpNLDEQ5tHbskWY5UqXod",
  "key35": "3sfowHD8ofyFuE8FCFqdpkrKtQGGMQmcM6M7B1rvMnqKQrAEeeNm68B4NKNmbwEBwQG8TVBJrnmkjFHC4vjmehyN",
  "key36": "41eK1TmQ8M3arXpvuVDFPmELKxT9uhGQ7wYQi96Pord4zVTi3cJEcokVGcUa27V3LChdkSs7emCXXVKp2wi1b7hA",
  "key37": "3DoMVvS4zuktBxUr5EWMLrD5fu69ZkKYAjACzwZXPr2dRZ7YHVZrKjR2Kvd7WjF8QYUdQthZ2Ei2GJcktWV7qdbG",
  "key38": "3sXZYn2h2rKRj7orREYh8fWpbtuwz3BEppuiV4zPPDGSs46dohSYnMasHYVBbiDSY8jRFBRySERKBquWpRPvg7No",
  "key39": "2V5ZVEngdvG5pfXXbUuN5S84SpTZmohQDZDr5ywnEhfLxtWVEdN2uYrzY84bnA5XBFXgv4KbJQCzU2GFiFmUpxbr",
  "key40": "hpx66bNnxXgbfUiu2GjZJyNCdkbbtPn4ETsJPReRqANYbzQ5cJ6TH66b8UNUfjsJcPZ5gn99S2oSVv4AGj5e9gd"
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
