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
    "UUrheDJ4ETYNFDPznjheWoYQXGcbAUXh3ph6TU3JuXPfniPz1UqVDRCtNn5NhiRcq4RAicsvpopsZqGk9tWmMgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LZu9HEnKvVrC8RWXAHrezB6kvUC1BsXh2q5x7dffCfbdLcZ2uEWxCkeR9yoG9VcT6XR3MocbrZmCF2eNstAqCNx",
  "key1": "5D8gazJDfvkMNpWqYBVMUC5tsomCPBoriVk6mgK6b3GoL2AiusCR6zspJHtnRpJtpMXQFruKydJSht9Hh1DR9YoM",
  "key2": "5ybKeQUZfjdhAQj2hqHo8e2S3yzPfKZx8xjGRyqesSA7vHVUbNu27cTbHus3EbkHxbZsGLKJkEMqAwVxwJz2cv3a",
  "key3": "2a2GGTpRqUKxmn4ot7hPeTn6foDJ9mmxFcdNAf1EnXZmnS6DbDjkcikbex2a4tUTggr12ZQpkNGG41L3J3v5vz7r",
  "key4": "34BRf1bPfY1FqQCyfruqW7GUXg75pHuSw6VSmEznw6iUiezbeCUWX83vaUVW5Crxtrsr855fujactHTMV61XU2iD",
  "key5": "4mz6wwMoRcU2XX2MFc3T4DSVrfcJR8r85YZvWKBpYKt7E6LMpKUN5P363mmxwfHBcXg8hiTNp49QfELDUAAUoFuE",
  "key6": "59JwuUcKSKD4HTDjP1QqtU3H1qerwCNrsPkTM9NVFa5kFxe4qvHS6VoCpjxD8zkxEMU6S74tGfU3NCuKNcfCxndw",
  "key7": "4zsV4DYURayjdj1StcWt9SgctFTN8pWqZRKBhNRQZkxPBucbeLAqZAEKwqy91jgqM2r2FNsLEtVGNCAtsVoqat2b",
  "key8": "2fYratwXbJZwXtunk4nu6uY6UeLVSbaRrBDdWexN8TgsW9MC2ZSuKmcRVzs69EfttPQaW6DmiCwcNTHjWnasYoBz",
  "key9": "3jr6fPvJfettsvz7WhDeKfFqt1NgJY948UTSgvHhtDzC9Zp8JkfMpo11mxHDWGz9nYwVBzyYs5ucfqduZaMkbur",
  "key10": "5H9sKox5FozAXoDkp2UcSYZmTzxKY5RpCxn2DoCPTtEo8XFMBrjvRVyjUxnYw7gsJyuzB5AB9yirvDn5xSNDvdW8",
  "key11": "4uiLRWYUtZDJMLXQonvZN9cfCudbt77z4VA5xgFw29QTmWm3hxNuKph2djoddGqYtUG3Vf5RT2iDBmF9MsmSc1P9",
  "key12": "3z4yoVXKGJahcGHjpv3CEkothrNjVeR1y7nTS7Znw5V2W53jem8iRMzJQsJjykuhWnS9Esezh4RQPLRTvH5dfqGr",
  "key13": "KceSqd25kLYk7ZDEHzxntWFY71YCVn5noCSbbgDRBQVQZGdwnYzatNmzCjWo77uyB3KqmAo7e5Di95SBMsSm7k6",
  "key14": "b8EKiDmZriUdRZ1mLRXmBzmJUNcw2tAf8sAE2yvc4zzYwrzqp36RRqHDw16nTR98edqegtcWKVshuiXZrB8LqNY",
  "key15": "2JpazoXAQgZBmyDCU9BFtnVsr8BUeD3vMkjhgzeYSsNNjP45jA2bWjAReHeZR8iiiwVj23Qutp4Z44VoLKcJjvQG",
  "key16": "2rPR6QaA6FD7uhxc8YE5Ts9kyN7eBykyfP8aUWvKf6wpanZJRz3GpkQMgtzNcBd8DK4FiDW8v3iQoSow56PMpdZw",
  "key17": "3M3AT5qWtrDkTNCKnqGqoLZez7dtWKS2vuub6QQnadfViv6GYyKnVDn8ByTB5dfFPH7YcRjqUXjwKu1NxGJbMh3B",
  "key18": "rDaxePkxDgXCwZhwytLGujHBLEYquN9svQPbPG72rPDAvPhDCjLUE9VxT2gB6FTQocstTFVehKwKtSZuG4GLwLn",
  "key19": "274hFvhH5FY5okHddETRxMuFHf9HjY1gmR8NQrYb6yCLxgziTAg8KKxdFP8BpEvnG3FBsDqxaaYtus1oDMdpvSmr",
  "key20": "4LEVd4rkkbxspRwVLtqPVqGTeERzrkAoWC5qNkCLA1nkzhP8DV9ER6SWvLzqvWx1W2stVru3LLSCAv2fAc6b4Y1Z",
  "key21": "3GdaQHQJdApmeWairFjSDY594Bu7EryKJjfL6yu1z1Rb1nhf5GGxwDAyfKyqCaz1utFEbFvzcgSYyS8uu1H2aWSH",
  "key22": "5rgy3S3K6gFjuZKgEr24WLR14e6N7FEntsVMXwsA6eYjxk8bLyxXpsMnq8s2G8sS8KE88LfkUyiRj5K9XMcCpPxw",
  "key23": "5wHUjgg1fppAUnimqha5oiQd7kfrk6wtoUaqMULYrEiEmHxMc3SmTCv2Jgxv8KhWmpAQkcRi75bCNfhazHkBS5Wh",
  "key24": "2fm2pJqSY4ZqniEWFq84oYcenxUUh34hmyFecY8G6H3nnP2qgMfqVW4Wwi4SbjVZRqvmBJwByYyWmoPAuXrWRjRy",
  "key25": "4RtE9ykwutWUwJqFkjx2nBekmpxLXgJvPC7NFsU3xMWyaoKUemBdGYLXpSWD2e6LKqtbN4AFxA5ZNhFeZRm2qo7e",
  "key26": "4pNjnT8kAVByUBiBeE47GmNMDYqgfoWddnLqY8RLvXzAE6roUcxM6WiZV48btms9tjTjEcB8jjHRN15qkUV2z7rX",
  "key27": "2x9H9Zkg1KsaX1gFAH3CAg6Hk38YKFiAVryymWNzR93wMp18uPaexk8qBaTJxCMByiEdHQZfZVySbTJwwEAKVxZz",
  "key28": "4izNtkZ3Jt6uJ7uEaNibUuG5t3y4qGe1tv4wRFULiRSb18YP5XkdxrF3YPm8baxCiEyk9JnsRVRY2jrkPRQ2G2Sq",
  "key29": "4XiguMzSkKzCp7cjQT2yEeQq6AAdSHM4MQZKMuG9T3ReHsbH3s3CkGu29Z93bYyb6ZRAEwyUkL9w7jrDaioWSoLi",
  "key30": "5AfAWdzVm5dUUaenpR5mpUECq7kSQuD8BqeGPTNLmStfAKi911NLjPx211H6yQwNXffddKcdQM2zsYxwMAuxr5x3",
  "key31": "3E3AJTGZhT22bBqwFwLMa2eEpRE5jwauXsdoNyLxun2g9ntXxvbvRgC2S9mEv1HnG8qT6a76qz1qVx6CrdYCqSaW",
  "key32": "5p9uaExHC3yppA65dHPz2psfDCP7txv2REidndvcg7B7kTahLRgzcoavEwnmNgWGLBfuMKHGJw2Ximgpf35yfsv6",
  "key33": "4zVTXQMGHtAzdWiTJw79j6DGBqvVQyabrfi51U6CpdmX6XUMqb2Laf4mPQKU9H6tUL8hCVc4Be1J1AG3fppcZEV1",
  "key34": "3FVCFgCx2YQzQPB7sGBhNs27BAGXW1jmpsUrk8rCEZbm1dKFjNZ82iguwS78J8FDuFCua9JKehBqmrtQsR448BLz",
  "key35": "23bAMhPkKdhBFDeEFsK8rwJXErBmHBCbXTUhrzN2PNn9kyQ8N8FrU8wrb5xQY14ghnZYBjS52rZfWKRguY8AMojW",
  "key36": "5EkVANj8zqRPPM7Ex4vt4kh43hGY83cwFXCb83NY9n5MarVHjzTbseDcjahKHFh1EP7Myn8zNCFgro8p9n3WvKAg",
  "key37": "5dK3bWHTVhKuLp64uMYvjjhrBk2ZwEwBwmsW49Tv9xEp8it5YxriRFMKY67JD9QmRGT8kLX3WKtqvbvcHLRerVsn",
  "key38": "2kTuJpukQYYtGgMZHA9jw1ZQHbVM78PbHuRCsMtv9rdWE96zipT3EzFGTS7B8vcoUqNhcuTqFN4dZ1hwK7qyPjaQ",
  "key39": "3EqpDGA4xAgx59dTCoY5HDUDsNFZr3jThi2fFpudNyzK2RPNpc2pm7HkHyX99trAPcoNMhdKtFY2EYvGBUb1B247",
  "key40": "42cCGYG1mqFrCh6nDRgX6WVah2tmhh9q73TkZi6LQptzzJBteiJR6SAuak1ALgGVaMRuvKsycRTFxMiN8dKMoTZW",
  "key41": "66fgJNJ6ZVfxhP3MxjxeCg7Xp6gUWrMyxCGHsctAhqFhfGP7FWgWvxG7mqqZxxpPtCNa658KLExqYMPJ9EGSBzcu",
  "key42": "3yEQCYrtdGFFMqvEPYBrNjsacd6MfY7v1FiG2jPgyY44h8deQN78XbEKurav3kLrMLBzaYFkudGhn4cMbiA3hMta",
  "key43": "xVeyhwuHsGFU6getSwT9jcXBNgsRh5R9ume2pPUk5VK5ikALtTZVjfXDMPjjXVLmrtM1vNC19iyY4sKZKjAnYJ5",
  "key44": "2pACaJCaULrGmHXvHvVrTV8ZnfYcQBGqwfqtaSkCpQbKVutZXDAHtMqZxGtgCPn7XDkrrJLxTav5Vppad473KHKh",
  "key45": "5yhdSjUqfmCZTgnDG7TCstfX1tUZ9zrd6gegvvQobqf7fF7vn8hpf5srpQE91SLMmeEqkkiNAv5hYETyN6BA3mF2"
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
