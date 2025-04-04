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
    "uB2z3vjfuAB5goFM1zDqgaUdVXLTtmE4Yi4PSGvx526mjvBYqwiAa82TLt9NTQpUNLAQu5kAkPj2kGU6CLseY85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "475yhs2UqVQmd22WUhHEgn85faVpCPq4WDK7DwWRQTjfUJLy5kncxTftPjewACfrpkFkaDs5Cpamg4SqUu4tD4LF",
  "key1": "CE5PLChdP87H9hwCqSngqYViUSbqaNRoeGZjXrZ7u9ZQvyGqeXVcukyhHRmxGx6JDDCPPN8TJhrLa1STTDTLBa9",
  "key2": "3G6Hw3KrpxXH7NCF3c8zXxb9bcmkRHa8XtL4Y5fxpwpoMmzFHX2KiGDDRGE9oph1u4tryyzaUSxuVtv2cooVEGcq",
  "key3": "BS1jpNmW5bgaiFFw5Y8paRf4jebSeXwpYRAriPhkFyLvvQnJ2do5PY445wrL25h1S3jsPKbv76wWR5fd7GWJ7iU",
  "key4": "3NJvjJACAKx6PxJNXGp9z2Jw12GHemZfmiTAAzvKoft18KANhnDoD1sZg8wYnEg4ucQxMG1RigUxxWm8HuNZRtRV",
  "key5": "4Ydq8KWb1SD9HGTHPHMsKB1dSYShSYBAFuYhXrdr5F2eoMExwGJFHtVC3RGmKLfJ4Vmtm2mwsdqHGnaq5pq24fGc",
  "key6": "425VBGA6bk1MRGaywgNe8H4mqQjFzGmADBsgftbn1Z1binZXK79VWitH1FGqMyeNyPbFLzaRnZP3PnFAt8bN3cxG",
  "key7": "5WqUsGdt75uv82G5xyHgcDan42WhHjoDT4ir1Ydm5BStgqf9iUTtvKv4iyXgfaN8FJ5FM4hT28Hb2WTJWLJtRZ3i",
  "key8": "5KkuTKPgZK69vbP3jMrvr95ihKGidzNTGLrLNME56iFFwnS4c8yCb7jVYfhJMuT9qxhaLhuaCV3hnYG56BGQ1r2o",
  "key9": "42W44RmBmVH1SgYL7HsqDKJKwuEapKL9MSuLrdQvA4t1YFbkzv7UZMDZoKwms7jdQWvmDjttCm8GqNp3pHrpdutH",
  "key10": "3sKrAeA6WH7rWuodTghHNvhupakuV1iv2DzkYnqc7krxUw94kd7ASpCCNYYSbrdThTJFdtgnkANQSABrVSJziko5",
  "key11": "6F2HnQMSKTyX6eLcLQnvGHPtR13XmVWSak95K2Y7Tb5PGBFCETd85LGRt1DaSGH1C9vufuRWb5pRcMGJ4zfZQPF",
  "key12": "5tH2SMhFnRCHFBox6GBunBvHc1GgPppYxxeN9JFz7caij6J6VaWZ7uDFkfqozonKMhwdh9RSbviMNtZ6XmnEnTEL",
  "key13": "3yh28nfEqKBoN3Fbk1g3jCcRaDamr17axFvGupT1trZgZa22JSTv3dZe38K82d3ZqbbtgYNAr41SUUnZRbivY4SC",
  "key14": "3x3W4eaZyqd7sEuEfPyUH4hVHcJ1HcSiEw1PnwKxs96MuHeWF3p5avohjKCAbGUu2UesiTQy1L8JdiddBd5ECdpG",
  "key15": "2bDyGTCcQ6ym9pzB1zCCBqHxwJuQieVQRQKMK3SgzzADsW3fPzfCjFKg4pNDUNTPHgB7x8GweCfRTavuaYG9amzr",
  "key16": "5cQtR1Jv3SnM713rfN5x6nAopQ4o33nrdVuKewEKvcpK4FCwoptN3bknndDd88Ta2ds2rTkbnokKZzekvfmikpvp",
  "key17": "4nEnh7FxQV7gMTUtLRaFhut8qrtsjv151nKnQyD8wPXiYbs19kcsdQJqAWxWnGfWQ2rooyFQJ6FaVYfM36H9a9tv",
  "key18": "4u2wxuSAAYTR8wPPTT21qrKEiCSNP9hqkP5GtShPVsZFzBUMqFLvzT9wsBfCZM3bhNNWdZ8hWvn6iW7GLp32kNPN",
  "key19": "5qYPEL1tKQ1ZGhnGa9n8vH2Dy9P9btumA9bhHjXfsaN5THh4yAG5LENYVVWM26LiwQyG566dEERUac1jnKhbzL7d",
  "key20": "3JfRfKauaWjGwedYthmzbrkpMoVeLuZTQ8wj3t6w76tBYwjcJoEraxZa4ZNm21xeQChtWLFGrQTo6bVyYagmg9dZ",
  "key21": "25k6uWoUJhwe5U4FhT4LGmXYAHxpm3DrAJbx48z1Vvkrvwa8TbL2KLMdPYj8pemzky3YJf5NjsoG4UdFDKNCZHAS",
  "key22": "UvhSrmXgPpg2qhugLka57HpW4H7ct9sELibH4F5qoYhSFjVnLaAmbHFhHQn5pHAgbbnYaJejsK5ZPbfQ7wyuPP8",
  "key23": "2oUHoDZgcJZz3ti4hAakDWGTBHGBEptkKow6CBzgqWYJfXKc7DdXXbMLh25WqG8UoWzpZKwNJVGcRY2SXSTQeX1D",
  "key24": "3FoRp9sQUijeSWFayRkG4tFAVWkRbHrFiLH5PCrzi29vjZPFP89UFf6BZrL6qUFpkryL1jn1wzcRKhNtS9ZAEF83",
  "key25": "aLQpbtYvsNADus1VcZeEtFe2FE6vuNzPvfDRGKQyeJ8WWkkTvpao5SGmeJARaCFz8w9GqZWkDMVNhMHbDBko6GK"
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
