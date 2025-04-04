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
    "52ta3REwSjckJVMzZW9WRZdXWubguxNXcXyBWSXyr4zTCwUdYdYgiMTtXkjkmYG5qd7YTDndLeiwmqqZRFKDiK65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tLMwkqqFqkPLNdtVQXNarcr8rnP73NFqZrgaVZfkTMJgthTewKGfF6FpPWB8fSoXzMKNvXSKZWLgVYh9WPtNxef",
  "key1": "4Gw1B9WwEYtQ4FHNBt1kWLCHvcRoyCd5mHdLkRREBLJn9iNqcstd9Wv3PNabys4fB6wLTTvjT4VacZ4wo9HMXPSU",
  "key2": "5CtKFdWsh9vbUGemmCzVNraTzofQGT1vqAYk8UZA7iRaodk7snzQ3RZBU2XpqxY9PiamBjzFPXwvBNwXL5nEtA7h",
  "key3": "2YTMhfCbcXGpohW33rHZ95BasCoZ67n5KvbeuvbGrwagYCqvcUk9trpDhWvpzHV6VYkFVewou1rf6X6GFt9acsQf",
  "key4": "4ZgJAfNJbwHjMsNCU47BEyy8GQrKK2s6WMQbEq2mS241MFX2AjErTaU5UuuwV9DuyNFLjq2G98E8JCvMk5oHrd2u",
  "key5": "PYU2kPJkkZGzC4MexRTrFkjcC2j4Ng2hC7ZPsQst3Hu7TjumYvmoBi56i3AZaxMjFrkHerv58A94QAR5tqPRH91",
  "key6": "5AxsejLcgaRqSyF1SwQjCLJYKm9wpVTA3tRZqDavWjZXo1mkckwGxGfoU7Np4rHNjfWpU3dYyUbhejALKecoRYcc",
  "key7": "3Jb2TjQs6vA2hYhzLr2BveQRMDWADmFrRqqfpFrx44WMZLKNaBg5rHzMDjPz32DXf8vv9msscg1hhzvqAXD62P8P",
  "key8": "4S4oTtiSm1mzJbPhKQiWc1HY6epH6gnVDA8yihso2PxdN7TF5B8KUwVJcWYEVfoxBgaVynZDuuh1Ztc2mBKqHNKu",
  "key9": "truY5hzUx3ihJe1vXqkijFuC29W5fXMvdJVT8jMrT1kzLo5XXmzdm4k7qMvnhw3owLZKXjpqAg7pjhVpMuUuzbn",
  "key10": "4UaV9w55kR6CWjtszbAcwmGrDFQSzuCBfrX3tXucghp2YYjQ9Ef9YWdm7bQxp8ytVC8iSmGkvCPrmxLzhwbkDP81",
  "key11": "ZSqdhUZu4VRdURbJtyv2czomtvzCG2VnYSkzjRUY1KzSRqJqxcUUYETCGcBccNqiLjbjp4LtcnHjpGZPygUbg5T",
  "key12": "44rojNqk6TZk9aPUovqm7ujr5kdxMyBDeMxWG2mpPnFCd9mzWHudgC6G2Suiw73AsZ8YrafctmZNd9iKZ1sdYxD4",
  "key13": "2sQJTVAgE7T7TNxivx6MiC9c271wXT1ZehfqNTM1wNGRrc6NFCYY3wEB1ckTwx4sGRuiM9uaQPgQnrzoasm5vo4Q",
  "key14": "57mpRfrNzxt6WYwE8gt8FtZ8oeX78DjE3MdkeNbDfZW2rRYXQRfWR54vZLbVDWsgprzngbwUGDDXhuhb6FqjGJnv",
  "key15": "5h7Agr6EbjNmDvQDxRRCgt2wUWodfhPoDQTv3owb6SGVM5QM5QNvhkiGygvwEHD7t6npHz6C3XjMcZSg7gRnrSu2",
  "key16": "z46g43WoWQcAeb416iaobmsVD9b1CH8cPzsC75xGZ7HKLB6JtQoeAww4jxJLc31hncvu52tdx5TM1PHKYXqbmuP",
  "key17": "5zS7x29WvUNKn2E6z4rafuJmibwe8mQifv6nJSk7FgCKnyjV4QjFPvJmdvRzme8v2r9fF5NZGrqDsVToLG4C62j4",
  "key18": "58tt12jJqAHYMRAMCbSEZb6SPwLRc692LbvthP3XyijQkrWAnnrRkJBv7TUAnSoMARCS2xNidwM6C1rtLDDt54s5",
  "key19": "2ZNFkXs7tBe4GHJPdS9MiUtV4myuQV93FGgAJZ5vmpEeALsKm6ZRfzQEyRXgaubgrnrnUy13VNMoF5pZos2crsNN",
  "key20": "8E2h1DPgGhZak1UrcXoWCj3NbK2u1QhWBVKHdPmGiHjFMZ7TohQAoBEhfjfeq8jHfK4oRX16AEDqGjpzushcaLG",
  "key21": "2fqMpU2RFJLdUYT7nVfqm2Xdddahv38Bhwo2K4TJke54fnZrxTKkVHq87EZD82GZCRjnNfrotWDAGHABk3ULKHbR",
  "key22": "4kJH56hbYYPGttpDmbr7Cw72LZhtRST3GpUV5dC5FSCcJ1tbWx6Py1bHnbwRqfZtPYZtAGALFgKWttEpb61werNJ",
  "key23": "3FhTkVSp6gcBztToWXAaFdg4hZxkP2V1gXuHhA8wK9zHyTpXkv7L2HaCb7NDhoiW3aXCjjEp8tEae8k6TMUUvVtn",
  "key24": "2AvyU9uAnBDYrr6mNcVciaYcUhPQrapLZRnwUJXNTXhijuqUe7tW1FonZVUuGpEmGdgbsDiCYeqVn3hVp5r6KVK7",
  "key25": "nbef4sBvRz2VnC3yUAS4FR3WFQte3CUUw6Ze3YgiL2EFR12HfryY99wteUxyPtXFjzP6xWmv7RjzxG6QbwccZnH",
  "key26": "3bD37FAWjJXijTQdqv4B8RuUG61TZU9PhA3hNm1eaikveug2Hms8QPCuvX6dKKVYCtmueLwR8tfcMvtyYFfKHnpM",
  "key27": "2k14kFL73WQtPHdxhzvczDVd9J1SwWRW7AVpEJUa2nGbn3uj9mfLGYwaBjesZHuLEDRCpBADYQ9eVsNci6kZTN1d",
  "key28": "4Lm7jnAa3CahYYBSVvWMnrovKjns8QLJnLhzTsAviCtz64BrmD6aDs8DRBeLUNL1ry6t26Chc4gwoGxpuRVTKvAu",
  "key29": "51eE2d3X7NSQJME63Ggc2tDFcK2L2xg8c52dngXzQ5k37asrs8Fq2j5SkhAYyM8MzrcntvzMgvZT6YcrxGmru9c5",
  "key30": "4rMqaQFA5CywSp5uBnbxMrrYhSD8QmD5v64WDFt6qvuxdUVjDFZwkszqb1hDtNiRVjn1npdK1ntu7S6dRK89rRBW",
  "key31": "cJXmyZUk9xa8sxFg3u4bCueQGVXo5CpBp4XazpEYyRFPF78PhyaEcbiHMKsqXz9LWrPbKmPEgyTUjCZ561UhRVq",
  "key32": "Rdg9EKnzbiTJFHaDwrMBf1vLZdgTFVpJpgMUU75GDFWXfkj9gjJ2vzoQyjr2ebeWuC4rLAVTMBSsp5FDBhMFznc",
  "key33": "3cxUK8ReHPixd8Fh4XC2TcFKggsywjhkGAkYbPMdvN8wka4zwANuRNcpVKkttRe479N1RiqsHJYv8PUU6yjr1LDn",
  "key34": "wyd1BxgsD23QrXcs8KMz6RJ2qdCMdQyuv83QhJ1EdLkuFvcUA7nbeXPUD5i92nm4msupQQaQ1DxeaNdwkJztdBV",
  "key35": "4kxf6hj73Gq8tVYjcdVSj8a1dHJaoRdS1z6xrhnbVsKQXxuaBVkqYo1ioKRGgXC3r8HR6FikpvXC4Pbskv5ixah6",
  "key36": "5qdKq9QCinFT4xurtxK1qVL4n3gREM1gzUdopzvQjWxMx3t17q6NmsmPswv9CdmfwAa4xLztHa29xqYgjRW2qS1A",
  "key37": "MBenGniXzzjRbTgp7pio33NA1MmpsRqwRM2qs25srnSBqtEdG33m7afCsd516sU24s8uvPjcDM8GoEYzuw6SY26",
  "key38": "2Cxdkmh3jgJWKwjnWmf8uQLAWbpNt1vih5bAnNxoywBtEpgyqxLSGVoVmHmcvnd9pPSNryAQ7sYQrrDfN3Dte5jx",
  "key39": "i8ThmFBGvTzcDUUSLngY2ad7iPuskud845rHXSjsmSRHsds8E1gTrgtDX9XmdMr46mk7iAQvsQkocDDscWWBeu6",
  "key40": "5xE3syhJwT7CvQyC1mk3AHnrwLB5fggf9HseJ5bfPQStR4NoGdYLCL5Bwv7pMGqkuNZ1Nyre8BGi4jwgi9rR52cp",
  "key41": "3pgr9hDF6ocvYvrNuVfk4UmNf4vHwNL16R4p7NyhWtTa6Nmzaba7zCL6E2sDQaew2LzR7SjrDie2fedvFswMm3uv",
  "key42": "2UR8j8oBHfsDcHrm9ymiia8szS8JUMJrrT9Sbq9m2TfXu9pDMsrBZmUn4izyUK9X6hmywcyghdgC54mjzuM4LD1h",
  "key43": "3ywH31SLZ76zziwpccgrqPdHB3gJBMC1sEGqQyZ1WSUxm5Mj5pNUNqUiAvYhK6q6tWhj54KzyPptDLurnQtiRNmW",
  "key44": "4XYkj3p5HUH8kFvxdSNpfvJyGCKpqH7XizpcjxToELnEscgy41Nywh9RmtScDLXAkJcLJvtzchNkesywQumjjyPq",
  "key45": "3B9owWPaoB24pmT76pTwkX7xjQNT9rczgtqf9DfZSAFc5jv3QnqWoqSHhB5HSXRVQiDpbFxmDMejDJHGcLf2c34h",
  "key46": "2NJKRCLQVogUXyhZGtSfjJNjezRkZnsrvCt8ssoJjNJjb2t8eTSQCSzEDqxDkgfyaxKuHYpatLgNUNXc5sjLjmQZ",
  "key47": "613FzR51fXmAdw6xFuXkA68j1ZxFb4fDfY3Cnz3u6k2T3RSSShbghoYVWPFMvzvnXoYGb44RkKByHqJmjaWmjHAw",
  "key48": "3RyT7ee5wh47odo5DGdb3BkPTsykT9rS76mYKWvhRMEfREVK5JiFPCUZazy67mnAY9KsccGaSsqjmDSFxqh9C6Z5"
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
