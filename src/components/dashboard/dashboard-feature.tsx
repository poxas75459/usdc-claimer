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
    "4CzVrbES1ci51m5QVRzLmLLUvDLsPc1tc8ZzwMKJE6esoadX9QTsWLcFGzwYVmKpLUUsHbEcFH13J1HzUz1ZZDep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62HpyCoZMESBc5HeAmYqvMDixtQddtjGUWD9cowZQCGQwsNBKzLxRgf9UsbQPdEsrLLRdZA3siyTqZWauCnhoyR6",
  "key1": "4NxWDheJz3jgUyMGioGgTXkmyyiWgsR81S5jG5TKrspvSLixuzTgddrZRyj2h2hpgFdaGWvovMgUCHyjwcxU157M",
  "key2": "5XpQjcGkutRHu7gKSJjWm5oRP5dhJpjMBHrjPre6tmZuV3SvBoCeH86vBqQWN7TDMxWccAGB29XvM7qz436pqRRC",
  "key3": "yQztmB2PUe8GyJjYbQSgoqzWw43o7FACufF2UzWjW1durMFNshYwpYPtKyxTV721prBLd1KZAkcDbVwkiCYgg5x",
  "key4": "214yhknyVVFtYXh7KaGeBaAC44hgw7dBQKWwxez8gM5DPhEn2jSz3BhcGXR4AHBgqjCW61Et2H4tD5dE383GMxt1",
  "key5": "52D6ZGb7gbByfJNhsyCoEArBcX3u1cU2ZFySYFL3s1gDNaKxFaf9GZDhKt4gfsmKR2BKU2nNbToJyQUK4AcaiNuG",
  "key6": "4agzxdbPE1yeLxVnbixMLM9U5s939Bs4BVTTp5PstgSKe6YWJLKxjSJFQsgRgfAgsggVdJ2KgVNqfFcRGtrg98BV",
  "key7": "t898ufeAUL2vkwgxJQMGk1zqArggcovcAe12FTE9m1SLvmDfCXZdCLrh8FiBLqMXAUjVwZmpM4HCQvWGUTQUstY",
  "key8": "xJ4SssWS95vB53RG4S9skXccNjCSio8WubJbcZRzpfnEgBWCx9Z5XyALdMDWwiQzaFvBoE4kACwn8ZiGbNqKbU7",
  "key9": "5CifGuJ1GpEZPmcgnWWDjRL4dHBs8mMfKLJCbKAxMrUAGqVjwz8KasHmmHtvFp5gX9PnoiWY95cyDTm1GvBEvJ8T",
  "key10": "31BmHj1dzMz9yrfZ5Qp6qqNefTv5DLprD6dEf5qcwYC7MYFWRVuHfyaQ4knFU9ro4KQwxA1Ks5MZx3gafnz6ZNU5",
  "key11": "5fGxLWTwAMM5njptpqZCPssh6t7uJvDaweMh1KDCS56abmKFh8qL1m46VinT8pzNgCcJB2LaT35xFYGQjVwSfHCH",
  "key12": "5ddD3gdDdYk4R3Cmtxe3CgwvHG8Bj4XPtz2TR7wuXk2LL3Ww4xTyLfFKtPgKFrr8NYTJzhj9ezqV3G1DGwGXp2FJ",
  "key13": "M2WTbZaxfyiVJJ1oL8UKtbkSVgHyTJktaw5yRrkU1Y4WAR1bZCpf2sA6vbiobrfGrPzWim2WQR5Z61kKfnBU7RY",
  "key14": "3H3JKF1LcSWiTMhWCLkmkvWfFRDqovimhmc3wi3Eo2EUNxiLcdc8TWeSYiCNoqV1G5wYyikZf2A7GaZsB1CvuGLc",
  "key15": "21UcdkYd71XRacDSKjfHWKWnMGXce7sJcMxXzWKYamgJeJb2Wkq3UXWacMopkk6nZ66kvXBaMhqV3AAEZnD7GaV2",
  "key16": "29Zvf4bncrCW6Q9HMrV98dVzytK726Cv2aqsMNCeYNs8zAFBArFTyKXU5CLVSQ6dddkVFoqo9XsmSfm7MCC3V6B6",
  "key17": "5kSKCxnsjnMDsTUvdzNCPLJa83wqZbtTLN45nusremofhQUrtYdGSQsVyZ1auWHu9hp64wisDYRUFoYVj7M5Q4iH",
  "key18": "3QnGwG7jA6S3vc9pr7rcfJSUmgqsBPu9V245HfC6yjteJDjrZrAeFWLui3zyqucFfPzdvQES2nS4dH2Qa2kqwFRv",
  "key19": "5qzTPx3YhvAAmdRCAYu8PwaoxdFW55aTToeuYkoLcuejnW5UptdfAffjBsj12ZCQBAEouFcQDavB6mATebxHe3z4",
  "key20": "5tove5GHpT1yeUtQy3kpFAEizVFNer52BakEdYNF9XZyPaf4EBdYehL1SrkLBXkfeGXF6qqT1rkgeN8DYM1crGNp",
  "key21": "3ZWk2oKwm7KdMVPrYYCNcuphyuLCiUpHYbiASciHGQjAVaL9Pn8fpHXw7fx8UVwzMNjqYVm5RHqsYEvjVzor61Kt",
  "key22": "5UinVons6SctM46CFuLwZMEx6vJ68oyMrGqv7QZGh7Hxki7NbTHsaxKQQz5dnepCS5ejSwF1QSgvXfrfUVKbrCuv",
  "key23": "4NarsvykCQcAzLUdvR3End82YrekDoQZZ9arV35nHxDfYByhYyqpWivALBP45Un8U5k24ACWN8DDbrfPHuLxov7U",
  "key24": "3fHVf3kAhhvnxdUsAXw9fHVsHRivKS2Pb362rmFxF8FQHinaNrqn615nC8FqyC6D6xeKc63ycFZhMUkVDhBiRMoz",
  "key25": "cN1ZvvShcz4kVjLi9SJ44ZtPha2Xmi3EbyQgUeRqLf3EH8ZLiEsuravdbKekzv5LkM9kTdccXAJguuiBvZReFrC",
  "key26": "3bPxryyhtgnTSy2djDQoA4wCELyjSLRthZHCTyF3cXDBXrBwr6JPiW9gxPVqrujq3CoDiqJpBfbZ8djWfurTiZw1",
  "key27": "2hgRwYnszuzNHQdeD7Kr5d8VtwohqXxDJkubpjnA4CgEGYiy8AWbCZgpoGnVmkAJJa8TFRZvGfbWaVHWmdJRVtaH",
  "key28": "bS2AvgxhB6Edx1o5WJQohXkQbMftC4envTcgFurEByMpau6aaYFtgFqcttXBNHJDt76dwPtHztGW1AcBeqzR7VJ",
  "key29": "5NHyyTCTrQeJegVs3eFDWx9TDgpdfku1c3Noj1btVNUseUp2K474tK2HY1t17whAEYhuBE9sHfjM7VQoJhsNtY9W",
  "key30": "3iMLvrytsEyk2HhBtQ8L7BMoG3LLroLUCy8XX6KMSsVNZD4b1Daz2Ke1pvJAiosuZuE67LGKvcKvQhTuy2SvTBhJ",
  "key31": "3PRvfgjMpdrXLcngzs2rdyoK7DKKDTEwd69KH9kQuxqug5mGzAtZGYwcPUDx9bdKuohASk9Uud5vTayKEXmKY9hT",
  "key32": "46cSesgrG4pYwdwtjPvnUNEH8iQe44wbigV3ZjwNqUo6ENgtZJzB1Fxc3H4hshvjQmqiZierMLkhouGu5yaKn6Vb",
  "key33": "4F218B4xEqp8ayH3fNdeUVLTPqsFcVmb6qAnPfh5q2LADYeT67waDjFJHDHf9uvySh2yfCR7pWjQEaigPa1X6tDM",
  "key34": "55s7c6pzh3cSo88y7xc38vwQu8FWyhZGYqh123kqihgwFRS6UR2bntMLAdQskFsBWtDTPB39KzuDBviiJPbPgwtw",
  "key35": "MGRe2XQWGPAzDAHZFtENEJekQSBMvLAJw57zyTZvYnDXmVE1EcKGi9XuzkCCcKTKd1fnAWQWm4rmx4KY6EcREe4",
  "key36": "2B4YjsPyTtJAEGmk4niqRXtxXsR8jPUpUXBKuGRtbNff6RaEDwS8FUNoR4tMPUaLWNSJjCYzEqJCjXfusZe441sf",
  "key37": "2Uw6Ezcy8S7rSMfk6xhxr2TrrxUudoASeFCPCN5sVFbJCxNA8wjA4QDk9KEsxNzuykVU21eguUE69kxXtbv39ckR",
  "key38": "2cQ7LZ77JeU2tBhmDgtYp1xnNEyRT3HvwLSaCr77C1iTMYv5bp6Sajt23o1etebbUPpHmwLNBbbSpzau4M521dh8",
  "key39": "4y2pNW416UTytaNP7YcK8sS1Tbk4n1ehMi5QHA8Hnof1sKtkJsd9DEL1iPyZnWxg9NeqiM6wiw5YEhg1U1C8qxi8",
  "key40": "2Ky3LrVbUSvScj5oFXmbe92eqjE2rLsKWNQcXQoCnwdrEyRxaj3bno6TcQw8ZsHh4WWQWrY1fDtTBmYdsEp1VwUb",
  "key41": "43Sss36jNwaEmK5TuF5gEVHWrBhNh8AWnujpMXcRC9YbHtU7zwSb6Q2a5jRV6DZKMKWtUL8KHf1FSZfMDKe4Q1MM",
  "key42": "RUTeLFT4Nzqkm8YyTq5VR21nsK4pxZq9EUKwMWaFZMs4RDRo3Q86AJmeBmSXiroLzRRijzuPg4vckXyKkxbSomq"
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
