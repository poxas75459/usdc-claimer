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
    "2NU2q129A5ZK8Y5Vs2rCiK9ccxuGaWUYijVBvYFjoqameYYKnVHTEUpsenhFjFmhtbt1aAWwQvUZGiabSCPU4Lz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GHEYnwK8rRmZYeZW8M9C9bA33AZAtPp41qhK1f4LSrHLLRc6i9oL3E6wndA8hPd5qrdAesQgLHvuUVvHt2WPgC9",
  "key1": "4HKkkitsMA6zsNSMCXv2JLiTawkKjjWq698TjhpEvUiCwEBNCfGPcUVDoPVvq91wHJxJowqopB8ZQyBJFRDpj7CL",
  "key2": "5okcsTd3xqGbgH5SSXmhFUQ1Bj9W9aZqmFRCWaoJdwZVffKAGaN6JXd8ZKTdHFPn3wB9qaEvSdQZ6KfifskFpx6",
  "key3": "4uC9xUJG1DZWkUiP3Cby9eLBcVeaBB9H8dFKWaTPLuwSoXUsk7DG2KhH8rXEKEtGKW7SGuGi5vni1icZjQxbonJB",
  "key4": "cvpaudzQYANSR7NDH3ZLBEWhCnA3jQW95EufbXg8G31kDkpYXEnLjeAnSiHfoUH7USqPEVsdPb2GgHQcnjqQjZm",
  "key5": "3nDLKUJgTgb6KaRXYcY9wAeAAnCaSjtojikkU9RpB3vLtruXu9xpcWUPqwaeEUra5BwK62RCR1xqKMo85PgadQhq",
  "key6": "597tJTJJN9ZfU8ktpr5A7StASz3eghLVTDCe8dtU4nV5h7u2y3oVMuJCvw3KK1MLp1XJfabWLFUewHMKL2Ewkvay",
  "key7": "3agHEsmEKwpzTcm9ose9F41PKEgC615UCZAZsqkyH4my2Zzv39444NkWfWfuK2qp9w2pfrNxaSYwK2wrY1KckNbF",
  "key8": "i9f4U44nqnVC7DdVfPVvkfFS2b4Uzgmwz65djcxT4eQmkZARiNKhBsev2TDZHF61gJuMBEQrDz2zAcxEa7Vix74",
  "key9": "5eKi9daUzNkyAt9phyfixc23yGSCKCGrhukUFe5Snp8a9E1g6e9euxtbTX96ZaCW7kn3BjAjV4siAFDWv8UYuqKT",
  "key10": "31SWQbBCdmfY97hXi7JKdiw7HAkCuPyPsc5iGtzRj2YCJTrPqeesQw7PFa7RSw211jp6b2nXJaJowgriR82NCfpn",
  "key11": "4wnc3uYV5wmxCAjCe9FWDGLvpg4sAT3bsQQRkhk86RkTocCAQPPGcBQFPwG3uyZE2f1yGZ7tGvFYa1Bc6Pic6fca",
  "key12": "5t98ygnBjDCmbgTiygmTFv2D275LiF8g18zzMDHbY4QfAgTstqwrgd3Tkav8h8hsz9ZXTjDwwuNM2QWCGJDdKyBW",
  "key13": "yG6oFU9npBztqfMggdvcnWXmnrHM5g3fXKu44aX7jdnGLMuDvncygzqFG34KyLJGTZ8XnqWJjXWXVgPW1ByHvpH",
  "key14": "2P2b7xHyxzTk33pB2QQeBa9WSBQWQgtdRHyjMEMU3Xw1Res4cdvRCtsow1SGDZZXn52FEtDJJ1q5AmfpDJR94P4C",
  "key15": "35tCtoLMnXqfwVGd7RJ5qrRhuPVKivctfhZAjMkFBdyXUgoDw6CE5vRAFUZssdDewiY9q9e3dLi73jZJUv2vUnzb",
  "key16": "3mYYZtYT8nXQzaTN2EQAy8qPLnwQM5VUBUvcnmxXA76qKQbcBAocP54zujR77kyTwBmKnGVbpexK7dQuymAJnK9M",
  "key17": "4EHfkaYeEMCewZLGMi4jHYFwFVpcVmmRzsnoLLncQn7SyNipxzNtK4uoErZgULgee27wfhijUxB9jEgmQ3uh9o1g",
  "key18": "5qo2RMavFWHDuvj8ybmpRTmwxLArurPdpfdgaHowgmoaF5wRkvn2wfDjamXfS9phovHGmGxckKy15uSFUZkYkL2N",
  "key19": "2HQRYHy1Logv24T5WBPLJCbutvF8ftWCbw9epd58u9P1pz3QvryVaA5A8s1xgDG2yGcbZnJ3i3LZoHTt4ZJXKXQv",
  "key20": "4LMniGeHytnUZ74R5fQrjYKRPjcRWmcfD28KeCQxas2y5qBeNp3xMLsfqb7WBtqniUeicvBHN6fTnyBhZqGgPJga",
  "key21": "3y5oGDkPFGbNbn1mzHghRRm7MC9vB7J6b3hkT77iZkoqnVZbXFbWqMyL9gpzQJRPDFyPE3BJ7qRaXwt8ucpNev3b",
  "key22": "4g4xkXtzN9NEEQdRfgKKxRjvvkzzZGfqSyHw2jcZc1ePV3wZFtv71cHttGrjyF7iDXyy9rpwBuB3P7LBFrtsfAyK",
  "key23": "6SM4viXuJ2TiwwVSbhwsb1WgNA2v7EEnki6zDE5qS3oQx6pn1iz9t7sSNZpZHddTKdTFq466xrmY9fhpzW7vPWi",
  "key24": "2BPPQZBk2JRnberfxBZjn5yGghTSx6dpjTgbnARZZtehwKGU7AWs4jxWw6XgtjpVffDLBNs6wjp8uLFwkihNwrrN",
  "key25": "u7DquzuM31KZKCtGLNVF4KmoYbVrjdy2Xp4hphx8WPA4dun1B29mFq5q7Ags9dQHXQLChvhoB73bbxN994sp7Qz",
  "key26": "21wdgjXXLCbYTHn9wuToeBAVZidS3BkEddctxnVYkbZgDbofJUPHrLZxP2upzAyviodsmFxyFxJMaSiQ6DS15DqZ",
  "key27": "4aqHKRcADSZkt3ACsxwQzcmJudXMvKAtXz4ykxX3SQL5RBMvRt4gb675hGMwkzB9mew7qioGabv7xc7jdHBB7chT",
  "key28": "41GnJVyGBKZCUCNb4t2tBYMKL7rDSEf9XQHPtHcRtE5GCqGC5zEvzvRPcxbWnzTvrB6F3aGD2taFdoQMyAdBqiRC",
  "key29": "2UxHiF8kPgGUiSXYZGFnhjKSKGQQ7iQ6oj6v8DiXQSe1dPKRGtruNjAJxEbbE4RAC1K1FSfQFWEiCw7uMLgpBgBb",
  "key30": "3hVPnsqiJET4WTL75cntcoHX2jHdWgoc6YcmHpLUFhZMqzp3UTbwkPo3QYu3vujD5p8vzvNhGc3YTMNXt1Zq55HH",
  "key31": "4aeq1UAoSbvSgdPQwZCnZST9PgUZ25iCLZadHNSDTvfb1C8hybmGrhwu2rQpw48DdtuJTCcSiEs8Yr2EQeUq2RjE",
  "key32": "51S7qW5sVpdVKHXvfu4xoxB8eYg75kcdH5djkpPD1F15S4kRbGxPhs3YALK9UebqC283XoH25ueDcfjJKhZfRij7",
  "key33": "2vtYgmXqroTpSSMwjyvByZkFQezCZXYKX3YciCor5Bw9eF9bLm8DiB4iJyLkzvAZJQXiFyAdK4q5kxqDg8Y2gYM6",
  "key34": "5g8mb995455tX1wufv81h663qrgyHWS2ZoMrk39dcCxR4DdEyfcTxpsnZRZjzNR1VHC6TVSoL43ZoU8T2CrbKEhM"
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
