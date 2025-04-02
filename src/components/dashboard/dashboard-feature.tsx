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
    "5vZquR2ecBtKrTaXiYbYeUiHDGzS58aVYMWr1cB5CmPCyv59Uk3Rd9foFFB1tksN7NjvEpbEUsNzKWdZXuhye5Lg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CX6ZtFMAMKSEz7sDy7hxU6AcSCHChkjr4m4zEveLS2fXBJWLYC7ZAAd94bRwaZaRLDdmLFVUHTwMbffJYnTwkfF",
  "key1": "5XVSYw9KGWD1vQxU5mx4Vt2UdXKAZJqrbM7cY5NBW2LtUTWQurvxnS8moTQRH42by9Nq8DqVNcMqiDvJa36gfnYQ",
  "key2": "67LiRp7caph9sn4eEvgtxV2R51ZNNrFwWc6eQSHZNUvm1P3vR5cweVM9NT93nzXjyZK56XCXCCBvDts3qDKmSsGG",
  "key3": "4aCA4cxdPKXgnxb24cFDvFkBQUZiDzYc1X1ZLStEcQKPuua4B5z1vK8xvGf97PjNnx9DsfGHBMJzULaYVyL2ys4v",
  "key4": "2ebmgAz6P93JvdzS8efvoiPcCGAjY2sB1CeXLtppJDor9REaYc99h6Z6kLwcVqPDzqGWtBoB2en39ncSrAGmZBEt",
  "key5": "5NWi1cjTUZx8p8jNb2zVogj9aETAcmMM31htLWaFPdrnz6r8gK65YFk9p2TLbWiMcBP9rS4vRFqAUBxRCDs55c3N",
  "key6": "3RHc8EGBUj3upTRhUJotjXUdG8CsJA9dV7EWvHyUQrZihJnw8M5XYjRXnsoDYEicDiWKyRQV2SvjC698wcZigXpM",
  "key7": "fDxa44n3yak8zHAVrf6ery48gu7SrPejN21KRjigQSB2H1ZNUgVnSZdsP4vP1F2EfwGRucbdasvxmiEsfyVdxsE",
  "key8": "4eDwysjq3oKNv21TqvZappbTDqA7GC8db4KTYB9PXnbgZtyHfzK8627YAirVzTjnobFR2ySQKVsnTrzzpsC6Fs3b",
  "key9": "4CxjnR9U9vcYcSp54NB6ZQLAyqtsu51DDr9hYNHfSpN9Qrhd8fvWuwiGxLwbN6ugdVkqqArKAjL7NurFjWqcfvag",
  "key10": "5eaRGipChP9Dmxu6RyvV7tQxL7tBUF82UC936GThPPSd4KGcTJJEp2angheTPJUZe9pzFqijpMeBdAuAhuwyuShP",
  "key11": "upbm8d2gbz7hJQ7xnM4CzGC9Nytxt5zd13GubxTSHaXytE6VYFcbcyP4KrSwYMzWExtfbRuqb2N5UTGdKsnaJSh",
  "key12": "3cx1xzeLGHAnoRDCYj5meeYhn8S3KZKzWtVzhWznpJWkG567k31S4Y4vNEitkCeXJtF4PQMgHgKsYx44JneYi9Bm",
  "key13": "4gBpyufg6oUtCmBtYFDy65EYhKDmLRWwKvWmM1i1kedRx8CnWePgxrPvZRfG5DWRgLTKaEBd1yJvBdvNzGv88XKY",
  "key14": "fgqMzWLdYhigf2pNo9kSzYqfdeGk9qgZyNRNyejkG6LpvGxbQP5kDnHEWjaKkUszkzDecDg57xc6TuQyudGGN4C",
  "key15": "nqFzhgD8qme1vCz3Wtn4PefWA8t9jgRcsKdGzfXLg1pSPB5rS7fNRSbJsE71YFemhkXa2KTbGYhriKL6gqoQHTP",
  "key16": "47SxNGx372vjis3jd4rq4tTo2zKgFYXcety3Aznho7hhy7uCqcrC3hskEK1LoYjYBFD2CkC1rftUWB5ZqLxoSbqY",
  "key17": "2nNBHJagFfRxXCKTPK741Tu2KNnLgkkNGyYUferNCy7nyedZpVLrAiSnMG7kfrrVcSCMr17XnJbAJrhBtjEsasvh",
  "key18": "5xgcWCymDCEecLRmFcjaVUxXeo3Gxa8Rtvw4LZbJ2NTz4vych3dv8QAmx8xyC2gesNsbMgkHEaMLhzJyE877Qm86",
  "key19": "JbbE8Ht5kkKhS2JTWf4Lt5PRyaFKeT4MHStTUNbph7m2YJFXLKGs16T7jexoY725T3LdPREoPh81SMSgjtHAZjh",
  "key20": "2owQfNDxjaU8kuwjHhPJC6s1GJBwem7juoaHaehZE6zrmw15AzyYufoJ8p4TqCMZtVDCKCqRpk8FL8egn9kVXmRp",
  "key21": "W7t56XqmKpTd2jHkbUjrq2Y2RZyMTzW9hoDAzQoS3KDdPvXe5qyyUrYeqUhQJbTwW6U2PgdHizxnD2akPVWE7Kp",
  "key22": "5bfNgg8AsXCJDpGFtbWno7xAMqpqETf4ckJ3YCHZQ1wvdMFvqfznmjsHsxdqC5ov3HUctLCQnCv44prFegjmK3cU",
  "key23": "CC4JDiaJJX34JsKbK4KMDujHKtu54v2wnwZDncx4tr5JcB6Ji8Cg7QnAw6pppYBYr8wWod6tVBmQ6YASrRWL6oe",
  "key24": "5wpd6FW33moeNiWGrUDVonY7YFXj3xgLNbHvGFVDXFKjUrEd7NjtDxQrrZwMZyaxV9kSeThkfAiTEbPmvEc9axVC",
  "key25": "3WLtadtX3g5kgefewbcwKaLtWFmNHBx5fskqQNN7qfbswrUjF2jYMbGC6UDdbnRUapb9eW6XZNwfz4iQX5Mjjj2H",
  "key26": "2aJUaSQD3ELSqwrUWcjQ4dMLKCGNV6jQsKof5QTYsPA43Jgkm96iZMFdAE2s2z74axDZ3UQoqkcgLyGQw2uD3ZZn",
  "key27": "35YCi8J7aDbzCdDHHWm4ZhNe64wYybDXug6VzLfUbfe9suWAv8tURQePwX2eQ6aMvE7FwY6uLwdur7AtLYNqVFC9",
  "key28": "BW7txQQSLPXaNvKYsZMneZDkZzKohzAmvNdbyBknSrFbQtYVwcq236HUKB2XBHs9PRpgxoinU69qQXZhaR9rQmR",
  "key29": "5EVTTGpR14S27N848DWFM8n16jdXmgmmmuua6nMTnRHYg3gSy3kSY2GYDjBjeMaUZyVNLu3JYBoWf7BJFLbpUGve",
  "key30": "n7bhAuavpRJ3pn4uKzLksXKnUDAFDHqbAVPDnMB1umKKhoRZcYHkjoyRxLzmDZoMVj1V3v5UgXhJZdQv86epUWX",
  "key31": "3d333fBtSbNGrGW6vSXcNBqVtjdm6mB9UbvyLtqrRfDfRaS1XwguJxpcSsjnnbKauUrtbLXv91hKzsnJ1zncES73",
  "key32": "2pkPz34zs1hXBXz5Swc5UHq8t8sngHyac851hEXTEUMNT2KYsJ5Fox7N24NnY37ug5o1QEgmwuw1V13jzEtd8jHX",
  "key33": "355B4dQExDTsiCLkr1ar1J655YJStkaJ8Grt3rYrwHQbrBAvkQSH53HM1Ge9j5tvC6q6pdhmQWrKapTjQWa4976d"
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
