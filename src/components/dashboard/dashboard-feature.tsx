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
    "5CYM85acHhApJbK3CwM5QmianaqA2VoQn1uZnxLt3gQBuWtRWjoDAeUjtoBLo4MTWnb277YSBZjsUFdfGzFQTVef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zmu4ozfYPWTizhmbVK2V8fXWqSYm1srLPXfdG2VnsKGwvhyFZv3K2ivZMGb3ggLsEKajFiu9jMXKdKwjHMvdtsd",
  "key1": "3CimERMBy9S87rWhNZUCxbGFafs3rGdXXK7rMdEUzpf5dfJHYDCEhWQa6ZxNihxQfMjGxkoqG9VN9Q13DnAAuMAk",
  "key2": "3yw1o1bi9QcwQNBjt7CdDmB21RnY8Cxbh1Do5dofqaZxsGxpjCnKtfPLQioscr816ryqwcGdPGmZ6Vuyu7Wvkryk",
  "key3": "3kZ3A3McibCCK9WThSGW6Xx1rLpXjdoCRMGXnzNfgFGUbLjvtR8Kgi2pKCRA3hmUAWerYPk2XJPLvBgqBMJqtsYr",
  "key4": "3boUF3forLKcMzzhBCYuNzyP5mmUyYgbpigPnr64x5JWCeKdt596hUJ5RMyoKV2RCjsAmq1ML1XsXNvNYUAoM79h",
  "key5": "3Z9osS5roWoiPsCek1Mj8sxN35hwUpKacfvprLSimvpMzqMCeJ9Zr7zgQvwbqS66mg2XoFbmtQWkUyeZ4TNLPSy4",
  "key6": "2A48YYzSu5ZM3SdW7exZBLw919mY2AEqtNPpfQMiBfyydtBW8A5HVSEzCajhWpCvsPsF5kQZnxB8GENcx8Zwef6F",
  "key7": "3gQZwjQgDA2fFQQih1WedHqjdveD2Vk3WDt1VabG9AfpZtssVvo78Q8FajE6hRnNadHt8R8mTW1gy1xLQuTmWQ98",
  "key8": "5a2K5811vztDKGqDADkw6tjZoijbjmhascU2gaPDFgNPvTRow3JDvBDZd6SMVCyPaLWXv6FLMrBFMZrdCZA5uksy",
  "key9": "4FFCaojxKzbTpHppQ9uXtzkX4xoTU9J9UvjBLkT7AYs8WdzisyRhC2ut2ZjZXhTCpUhvLWJHSUhdZVe9p3WfkT2X",
  "key10": "2rgPo6nfJrr7HJChxtRkuWEaeZGuuuzAAB4LiXDZmjftLK5KadzXfeZRuD1C9ySTbVoDCHSyZU2ZUiqDVWVmYaCT",
  "key11": "3w3UGWD7TWYYXcmUeAtK7pxGB3YdTKzYcX3F4SrDttp9ceG3z8J7NpqpPDLhpTnmizwtJaMDLTE3PZyyj5B4a2Lj",
  "key12": "5eCHi61vuEaFV3EKhTNg3A68zQP3kGVPgVkgTNQthKjEYkNbZELA5PKKDjd1BGhG1iYGbmNpoCCRiVNrAsh7UkfS",
  "key13": "5KYkwasVSvhSDD3QGpB8jPcvgWpFCsYeRghC4uC3aKdUnqBoCBRkLgrCyHxCaVxvSebdULepQpxxUWafTgXg3ieg",
  "key14": "2NdDbC1a6qTPKGiDuACvHXWenaPfvU9FFZTNTrgUS7rQYDmC6SbwrqikDhZRookM3ABv5qVLGeZXB3tTziccyeNg",
  "key15": "2xqCKZt1jA7WH9cC2zY14S58H4pX1UpzwBF7v1xaQYsXWrGnbahefk2Y4xSpM299rGqwBMXYyo9kU96Y1DcfpLTw",
  "key16": "4kRFBJU7RZSsHSFGxMnmYXAe3JPV1DUfk3RpbiiDbSG1nRo2wnnCVB6hVLuLWcaCYy95w6c62Kzyy9VpQzg3ZymB",
  "key17": "5uWw4qiuNBPuwsy7ZjJ4wyzNkKfDGjPZpU1GbVEJ9VbaWn78DWLcuvPvfdFVSvJZEudbPDzdXHs99AYP9oDUtWeL",
  "key18": "syLNVTjRsPNaPwQLszjgRaFSz393VwsjMcHFi15KZbFKBuXqiiPjMXuMEqYDpLqbWsx3jMByH2cjsZ7fVf6xMSY",
  "key19": "4x57Yy9deWwKmQKKs6onB26FAN5s3vjVeXHDcJRno8ajb6uAbhdaM1wXjNYjgYjVok5VAVptVV2gUpsmPaBNfbEN",
  "key20": "3Whdgtd3XN29mHJXXcRgokRQJiE6Pozog5AuZksHsWEsDHHVD4npkLidjEkhoGv2Y8xUz1QFkQbSB1NbdK47qELJ",
  "key21": "5YnHnBqa54JHfYzpWZ5EykqrAPKKiQuS7r4XqrLqSdAKtSSZ7fcLcY6tEWna8811nVz78ZXQaw5AS256er99Wsmd",
  "key22": "3n1t73ADuWbWcNVYhoaWCDjD841byq17xE67EdxmjZshTnS37Udpg8NE1ob4SzzcGfLkoG1h8ethyuyzQPcgk3rY",
  "key23": "3cbsp6xJKaQmDo3UZtyTezAPHuZy9kHAxgh1gKVqrezKWfj4H98XhuyPsJc4Ae6fAm8vBxYLF8Sji3M4tcfT7uU8",
  "key24": "2u2mQvktGwBbm5uXJm8Vx5JffVsXyHRKAumw4Li6LhMhoPv7yWjViQPUbso52uXwW5D31F5vewGNToLuYhz13C9n",
  "key25": "3dm652N8UneMK5KEbc9K9Cguegb33knj87sPEJbbk4mC5aP3ZrsspNfpVdqfsKnQFGkECUh3VEgrgWUfD5TZPrVk",
  "key26": "4z8hbCFyw2fBmQ8TXoBsQMLDFm29LGGfmuAt4fJtvHTpSsuCkKkC7uLe7TU55bZ8MmZzjBPCsPfuNsr1roNhA1WS",
  "key27": "2TUt1DfCuBJ3NHWqKLvWXsCpNbuAFteoMXytdchbUYHcXzSta6nbHtPRa7aYqWpxe8N9UfSj9MpDxpbPm8ynqYvQ",
  "key28": "4RLVNHbPcfKUyC7ZpxiGKXNeaSfVxpgbWTUrHgymSrasm3XcWYsXoAnXiuhAfDyeEf1uXu8BvsC5PKQzhUocDvhS",
  "key29": "3KgMbb3KXSbxxLfecjpUyW8io8cBabjog5iMaydqfgXoCgS2wdhaPhFwyxuDLnKQdFjHFWBk9FoTA7kUC63BJ4QE",
  "key30": "2rRcMJzVDy9kJQcphoBG7xDuG45K5dugbjFXtMu52rAyBEt2TVbjjUct8xVosnQnWL39E5E2o3QHMm4wL4UAjF52",
  "key31": "j6wP4G5kbu1toEm4aYXvkxXWaGXcKMCs7oef39kBcaVXj35oQGC9hBpk776wFx6BoM9rBxSVAwb9fA8AKNuPrFM",
  "key32": "3JLA7go9igaj3s6WX6oDuYJnvu5NKafeQV86q8ZnAdiy4vbGE4wD94s5nnDv8WwjaDwvvwnQJ22Jq69Pwxe7s4R6",
  "key33": "8zUePPEqvGerLLpS3jGsnib3vqHVENUJTXKBghBXCZbhE3kBU8zUxKvPXK3jxgjfNXFfqmmFeBBJSUbASidtvAL",
  "key34": "54f6nkebeMPpkcqoXzMhGtuXUUUkvTjQVvL9bQEyXkAJMrU97KHdHTV2B3Da82HhSGhVdpCdGd4DhMVyqSo5X6eE",
  "key35": "eeH4C7X5m7CGYdyCpGBTMUFFo82q1KV9CUPF1tRndKq8nkvZCTjvBCWUobkswBkhLohzKhaTEbk57j3udHQsNU5",
  "key36": "4FwdCWBYcXjohCyxAiuYe7XVbENGNhUsvDS1ZK4b7dMM28QZJakkZ2Fttoyf1pVmJJsgkPy8TZHmdpbfys27AxoM",
  "key37": "3Rz8TuXiQSwVU3WGA8Z4DShQHfnVh29DiQaxFtyUMnm9ksymbRnBA38HMmoGJr3ExamV8nMSFAMn2Yz4q8D4A7xx",
  "key38": "5jEFUmgkrHGU5xnP6Xx9u4hK8p6km2EBNZSyMDLjTLFnru25sNndBvKfLf4PXq5wWp6y9nLaCgZoGER4ZfnCiBp6",
  "key39": "5C3K4TwGfhwVX7pTVyt2c1NbiRJdkBajxXxZ5rW3kRhpm9MUCcyfPrensUpZqhzVNbTnhVF8HbX4ipfBoLawBbh9",
  "key40": "4iV6NzVzugVxwhckxbRQmVuWX7fPT6AMXCnNSnyXbHXWihpeTKUhKnPVmD7CZLe3JeL1AqmpCCEs2XJ6qrrSwqrX",
  "key41": "4dCdhi9XXwoZpCeNyDqyjCdzQC1iCqfbf9o8VqH2frzN7buvPe7hghTwAL6jgG5UmZ7tSGGUR7YVMEqnMz4dmgHA",
  "key42": "hc25bPUDuN6LuVcaCMfzAjq2C2XsCp61YXPSKrCPKKZLNAcuG2vv8KK1QJX9Pa6rjgXZoGLQow6kwgqxLz4WUMj",
  "key43": "3gcCy7Vmf6bWeWpFtUE68dboTUzpVeTtQnkATNSjZrQAMcF3mwRHNJBr86pAND55nFEfScP6hU32KEDGjxuugbUw"
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
