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
    "5pqV98Ls6RQCAM9BeuKK2urSFYZLVzMBVW6gXNcdfXQexeZqiCRkdDY8MSeKVBi3kpum9kQbHPr8N3AytbBaNjgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UdVnafsAw2hRMtraZkdABkvpHxABrNYvGZdAEdL1UDXfConTpZLFYjeuoKFFkZmHhSJNtjuXycQzXg7ne7B4aYt",
  "key1": "5xPyRdxY64ENxv4prLE8mxrFQky2QpydBQiK442En4pKXQnGRNECsDqKqnzvWHuW8M1dWM2nDeDx1iqveMmwovu9",
  "key2": "4XR5geT7gJB3r2VKrHSyHVAgae2AxUCWXfZwUJZiUU3E7FzyDAnsMG4BwvDb4teLFuiHTME1H8FjPujpDe9LaTDi",
  "key3": "34r2C3PvkhtGUUbtvuTekwJzqqNP78sNjdPiVYmFyEixvDhK6ABBUqvjMERn44hopQusQjiGM2mthtU2kmYg7cY8",
  "key4": "4VW6mzf2FvKvSQRmip2wPrKCFUkYkaoTLvePwu3vbduarhg7dWTXdXBnS4ptxix1WYnLTNqne7bG4fxH8gPFfyci",
  "key5": "3LLJHAYxpWWQe7yRxPhk6ZqsuEgJXffETCCrgPPLYSkS4BD8j75EvQCNWogg9Xb9R9YChcVMVw4XgbgdWjqYjtVr",
  "key6": "66mK4ByptcdH7HBJWksLCkGmLkPLLVjmeNZdoABB7KN2kpzFshxEF6rZprBnKuTZMQ3sAz7vGWP27kDt4ivskCsB",
  "key7": "eQYU85cjALx9gmYifNntVa3W8v7Jjs13dQ6R88uKuDfNLg4xXBfF3gC5Z826sgxAqa3cjFyzf6WCnb3BfJJJBmS",
  "key8": "2NEbGdk946SCERqgmDWqyVuyqXVWc5dSovcixaLQZ3dQqc3VfdnvcBGDgc4LdBdTTUXkwFYmsY1qZuSsTTF3zinq",
  "key9": "5TjohixFjfgN1GD14k1yjLRiNT7LBbEozmbTzT9J1q4r4BgkHGN6TqPBw47e8Q4FU4ETxdW3YeYvFiKuG7crcCB9",
  "key10": "5NeXNZFJepSGyMFCThgwtGUexCQ1g2eCjXyYQpsNMguUn9vKdkUKWtteAkxyKzG47Ty7fkVJdmtBURizgdXwbwVf",
  "key11": "4E5boqDxWE3kkc1huXNFxBtgP5c7Upfz7ejgeHVgUNpXS6Fq6PaWqaB2jSJXx42NEy1i3F2WninUaDmEYe3ia295",
  "key12": "657nnsz54rvc8nLvpZEwoFKxgt4qw3jD64LotWaiWT1ZEQcipAPKyvRjutsb9eRUSXR4BHWt2YPmkGm5QRQdpKTH",
  "key13": "2bsgTJe9nT5am16UN3snwNCTvM5aixRhAey3g7PaWWb7svUZ6j5Gg1HV82s4zbqALwW6QPTj3VBFH3QpWSCPr2tY",
  "key14": "3gnddejimQvLdPKWcJ18K5gNTSWz1divJMC7YzD6MGgWputevGJkkEFm3ozJy38rEG8bFhtgsAvkauaBrRjL22BY",
  "key15": "2oq244ajYbeWD38JUBdDC818fex5vowao9truoAzDDyn99pG8TxdFhdRAVoyWK7ydmCGxEGL1VV2w25vBtJzxKeq",
  "key16": "2Sfyffi8XNY1n7WS4yrxVD5qHjrWwnLtAVzn7VXiM1eiAcB9gTBvAoquabLr6tvoMxpB9tLwhBD2rT3FHFVKyo19",
  "key17": "5EtQxUV6NdaTF36D2YvQ3BdtnKRashzdWnnTx7LaXEGHeXaVg46bDBsic95x2dtT8sBv4Wyt9uSNjukRKscdcMUY",
  "key18": "v3m8XTGXQzFjiHwbj74R4xoXMMaF4zgZaxV5TXMCrepXL62XhYW5CABxC4iTBEfDDLvFsf6Yc77RQRUuJiNoyGt",
  "key19": "37DTgpadAg71gf8Y5PcSFCrj6d7rPS6E1Mwbfh9NzGvbAZqYzXCEQZec6ZBsxJY6hYCv7UEWT1N3WpfT7sPM1Xcn",
  "key20": "jw6t3tUX9ZeLSNoU4hf4V296BqMW8t5ziGiF7nkW7RVGP54YV2aNux48rR941BpMRBG7S3oK2vXJKEHjy3946iT",
  "key21": "qrTCgZFmB8VaMtbRUpyWZtY6e7mRbkH4dFVb8wMysFmfTwcDfPgGpLizDvSxhHAoQtZLNmTd1VN798Ym5U6BfWG",
  "key22": "2GV8yLtdvChuzZaAPwLLxL76tVo7WvNjyWFnsPMS9dKbT2ssFYocVqPHKA7GEMZSM9Ybnw3UWF29k3UxPyDnLbU3",
  "key23": "3A9zYtKXqFvtWypGk1ikRqn5MrNdrG5niu1si97QbZ2xv979d9iafdZPQ1UAVfQqVj6phASMGbW1SHKcb7oetQA4",
  "key24": "4JX2z7YPqjLVXe35Yu1fNm7jHjYsAvCTJZ3J27WWrxjM9E4Nv7E5ZUYJMQbYCk8HmAUvpmsucyG29Y5frXMaYfN3",
  "key25": "qh9VmNh11hcbxeuBn26CvfhJxUCi2xvkgS9N8aThwvocWStbrZkHwJnuC53JwHLJ2PJzFEqySiwkmkuH3n5Tu1Q",
  "key26": "5o41sUyGTGa8EKVQmx1tHHx2F5ZenuDd7vwZr42Sqekp77Gozgkro6LFGh3DRhFs1ygUqyfDy9vnx3QvgaNZJ12c",
  "key27": "4nfJeNKEoZ5VJqQGwiNQfEPy3qkWwd4Wig67hveKarrzRWUV7Cc2ic71fZNKWQuYKrYeKrgEbGF52zEnqjHTpiwU",
  "key28": "adZQkr4M9NZQgKatAieFHkYbgtDxvCs86XrWeiGYkixiDvHmYqZmGfQjJ6wQE2NSLjmnPN6EBfMksPzf4dWVc9Z",
  "key29": "4rp28ZRUeFtAy8gkjdzVdvzZKrKZ6W8DykcsuuP7PxTzUDtpXHidzMNQSLj5d4cqX7YmLPfLMhYteFdwdtFpkuni",
  "key30": "5aVCbFwkCQCS7smES3jALuWkaHeje2VPyXCrWK9FnCdThuvzoBtojNSJBdqP1kmnMjx9bRvwtwB2pXAdRT5LcLHL",
  "key31": "5j2NzURMe8jFUrtKxQ4RbLoXnjLWPrYFfS4FfDwFHmABfw6cXWzPPtCgjPw2F2XmjkVLKGDZ1duw1r14nY1M3pMn",
  "key32": "4feVXqJTariWginUDWC3aeFN6sJwE2ty8QzJ4rbZ2Zpb3nhZ9K5GzVHunZW2gGCjXvX2Lrh5PmLyy3UBFepuY5js",
  "key33": "4o6DQ5APEQaGGfpqpeA7xNWn4GK3wc1MXX18M3q85CpKtzrc4zRtRCi9xZbqjF4MYeyUqZJcF4pHTnYVxvrkHpz1",
  "key34": "4USupPGtfoej9271GtH9HjKAwwwTLEPrvncJm5xPkX6x83nddo3YDfV2rjGd3d3RhJAijrj5T5uX1kzT59ADPHuX",
  "key35": "5YJWnQnGffEDrRb7F5MFChtvakhrFUryiaUq1yvqpMR7Sim7KnQiZYM3tP7VEJ354RvGq1AkPCTPiMSKV4UCXsSN",
  "key36": "2AFSGMdgErfZrZTuJ6PWH31FAYQDk4vNN5sTdsY9JaSrX7jHHcscqpF2nn4E1qwozpHfrFePBmMi8XLAw39ZPUwx",
  "key37": "VDjdr9bx9rAvF5pkY9Wd6BpXSogFAJRSMLZLwFpxN4EVeQtcDEbmvfwPcdM1QSUkKx1rGqHa3h1SxcyzEk9pnqc",
  "key38": "cB4mT6i2RQ1J8nh8zfwWV18vdi6Hnd4E6ASFb2RrnW2Q7VPXz35VGUskRCErkkHp4jxVARRRvV25ru5YmvNCbZJ",
  "key39": "41M2aZsvjWFYBPWQeHFHFsdLiKxZjg43R5rBNAkX2SwdCmoaUWSgbbE8VzuEjA8LG5rHgfC8cJRoKwanc3SpFYtR",
  "key40": "59Anpi3et7Nto3YYTf9Ewcp961TL6Edy1MfLoJqygM8soi6fgEuZq9Se4dJnZxXsi88gcqiLyzrNCe5VSfUL9FFw",
  "key41": "5FQBGRo7AywKv3zCvuTmN32P3zSwfJFWDyJHJDoK3w2AJXJBKfPd9LwyWr17nBayvZSXL1JDyanvK9vY5RScZmPb",
  "key42": "4mdeBiQvGSRFuhvYCRv18XRAvZvXenLhqQMGEXn6ZziJkfoFhagnhwSA2q5BUk7it1oKNvY7uqf43maeTi4vBBXi",
  "key43": "36WYPGVdLAK2ZQPckTBPiD39xFgnMZaXShEGULjVdaHewxBvzFqzG4h17bYoss96j768ScQKuRvn19kUqhucd3as",
  "key44": "5JXddh1gP7f6LwwQYZ29hogb5SJA5wSRSNzRtuehst6pEwWirmkjHxM56tFDFChSR49PhwmvJBcc67p4SsV5CGNW",
  "key45": "3LCoxn1Kom6Tbci1X7j7JT95rtpzRH7bFk4HWCV93G2buxafCdE8ZKfJaoz7hQSbgYYoEUCyDZojAC3nRvUgS3ci"
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
