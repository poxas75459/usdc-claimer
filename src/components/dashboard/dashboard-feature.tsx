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
    "2p1T3XGm6ki3Cig94tyDfE2o7W6vNtHcXfbYpdgG6LtfU9tskeV3qogNzzJ1XdBiTCyduCXVUWpi8LiMVjHDuNfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "waZ9TUWEZjy8PXFW4tUXKvsA5hgvznkEMjoTw36rmbjQVocYZZyArttpokx1vwnYsDi2HKQ7aezwDkajKM9Bpgp",
  "key1": "5hPuLBuVWbRcj2iRSHjE6K8VRi3EWPGS6VZJivF3cgunwxmunzvPwuczvzvCYg49xos2T2DDzocKzLWZS5vZ1P8i",
  "key2": "vS1Pv9xoDkukb4Jnk1d9TWoNjNJKtQZJfNHrGdQ7P5k6hsdyH5ydHJvBccQZPTwubsY5S5WGX3hFco33qiqjpFB",
  "key3": "3ruZ31shakzjppfL7iGYdT6oHymDMB5kGpMcqis9nLArYRwi8KWzGGHu2XP5uL4XPU8u5CytwUS6yfE6LD6jUfht",
  "key4": "3bSX7TTcDfPZ33JufcStZCHnME3qJ2R66AF8aUKjVHpzaRYBhffJ3w8keyk1HCMJLA3y27K8w2jdKz3UEBhC2SG8",
  "key5": "2ie7A54Ft7EynHXbJFpCLP8GvbN1BBqoLwQLmGTremWGYhb8v11JCLLPEXz2uxyDHRnPfEZEiiJMdPssGr8be9sD",
  "key6": "4HnSJZhvFiKot6J4inMsKLP7URscwsyzjLHdAgoUhjbDxMXKx5HmYcns5kbMGx5anwRUQcxiisbjGk161BwcLvkt",
  "key7": "5MajKWYrkTnEYtE6wrXe6ov3YE7omVHRFryFV966BJbEtH5zeBFfgLsNDwEavmMZ7DDJETLKTmuKcSCoZBzhAg8Q",
  "key8": "3KnRqqa4363Mt9xbW1SsqrDHoiQupbaPwnjGEwAxTQC8M5SnyyLvVr7xqSJf7gt77EdeBUBNVBUTxQddeMdowrbK",
  "key9": "3w86UKW8srsMab2wcw6Yrfc6sjvmQHgxznKmFb3h3HqWoeTJ9kmys8iGJqTtm9cEiCx3ZL4A1RSGuQjKJo3b3Kjj",
  "key10": "4Tdrs1mtrh1E3ghokNhik4Kz3g8w8CfArcNcwXB5bGrrraYjknMFkjE6g8AjZNHvkQNf58nqVA6Qtj7yTsyi5dDQ",
  "key11": "2Vq4AVgKT185RPciLBLC5XDcpGEwdY45T52oY34xRi361qFFMku16oDvEkAhYJcKx3EbifdyRNM9tacsFvEhMpYN",
  "key12": "3VEoFfTP1cdjNYZsb7TFiCojuK4GVUkgwgJD7ph2rmtehGo5a4TsoWEmnHaznhj5Tge86vD7KDDSmnPCrtPgMvfh",
  "key13": "4RV5ZxR9bHGdtgGhpZizBNCNvtVYRQA2Y3LBmKpQzbbe32SBBqdDbRSa7uYxox7zVyjoWSBmxQTDitHEf7n9Q1Rq",
  "key14": "4CW6qyF5B5yUc2q8Du5rcjye5knepmTXcNh8WgtrCHGcBRrxBxa2tGdH6SXxFKM6gmVMVdsJNwGpoJ66RZCtGLji",
  "key15": "254TWkuhw2xJpNwWobUrFo7TQcaddZNC4h62XVgDB1qzQoGGiVdkdmMGnPY6NiFqQRAB4YTo3MNzENFomJ7JF2Bx",
  "key16": "2e2BD9GLG7KbGEegtk3hEEmjuipzRpf2ZVWt4aspYQHgX6eGTBZRiEJAhLnStsXKgdLDaszABBzr8AqAwCXgvTpr",
  "key17": "5jyA4qbgbrCaPDReDiVGL5BXZFdqckZy2rGt3XjMkv8qG6qJ4AL5Jst1zEdMfzBJtXqh4jX3CLAxG1yKjTd5XwSf",
  "key18": "ZSVe9wfHCJgRrF9LD3w2RzReEeCexJ8nY6anZVaUyUw9mzPur3AnoV8VXstRWTxBvAudEjfXM2uNgshBR9xFE3p",
  "key19": "tMzUiFDg8ytpCsD6MqtgkHMg41MFwWgoiKuBPHd1SpgPLs5qSXaomTm372BspYDgcLpk4TPXyWmenm9tnLQJxm2",
  "key20": "C5WhfSgZa6EXpsKiQPCodsDmAvsZcjvCkjy96iHCpB9JwDFuEGmruYV7FBuZmDpqHUvqFtDFgHcG2xUvrPUt5qa",
  "key21": "29v4SC2hF7HzRA4TPjhoVbMkUeAkYrZkma5HVZvFLi2UkUyJhUMEQtYwgP1XvYxZiSUQ299bEmt3rjyvwWvZJr7Z",
  "key22": "J1TJtXQ1jAWKzQZAbbH8AX45hFRThyDJ8TNhpAbxKFrdVycywRfgRek9P4Vv7cqKZ5DxVCbnjwmKdR5KHMfDcQw",
  "key23": "tZKBjMyaCuY2RCZu8PCz3F5jZ8nzcfQDhwGEvkoDFFPMJBi8yM3HZNE1EwciPQjpEgWFKQqBURCtCXEBeFeZE9X",
  "key24": "zzrHjTDPq3dxeFcELTh7Qyn7JJQRrHEkbhrJM9yy2Haq37RZmYpYe98EUZNAYip45MpKvkqqib1SZa3CTCPb7P9",
  "key25": "4BUfXQEPcxY3nrHms9MRC758TEopPEz9fDAHiGcSLuGXLvwPbTngc2z4mcfNYiNqJVgd4wFqXCjaRPtXaekguNjZ",
  "key26": "zrroXPdUgxMVrurqWjKLJtN5X6d5e5q5GDvPGwPxA7mxqkVVE1NY8oru8PqFJj8tbeb8FyTKYqun882MqyAx3Q5",
  "key27": "5Z12TVbdhvLeLrvhXiZaKMSAC8sPBukDLd6SUPKKb8d5Ngi6vN2k6WC8Ad14oHGV1weEjZFmHEXd9HcgthTMnQBA",
  "key28": "3L9AJscM7cxEJoFj7tPDViQEnbCSdq5U4GHvvYHXodcmh7DMeeqKUrhQPgHEpWYCCKcAHo3mWTiCDTDBhaXC6Sa3",
  "key29": "4MZJjD1tGK7vxg8zGFZjJUhdUA9ExhmeY21KWr99VekDSjVnn22LNkuuS6KQ5izWmCjHPuqZqarkfp5SYEr3J6fJ",
  "key30": "uyz4VpM5ktFaaT9RYjKgYgBwojf7BhEEbb7oP233Ya11KcKTfcob3wjoS9C9Y3CdvaV1XMcTvf7oDSD85AP4tT3",
  "key31": "3BrPFrPgnrPqAuBp7AZ9HxRWixsjDnsXdDRcoxC4DswDFDZTvXsQZwPYYsLkGPDuQF9p5Zc8bv6opo6mwiqtHcKw",
  "key32": "4P3Lgjw3ha6aRDtUG6USm3ar9WxfdCC85XNhy91dgzPrV2tRqv6WH7jMQyq4qP6wmWMokqpD3r8gn2Y12fR5SouB",
  "key33": "2D2SkNA3uYrmJUdKt7UJFnqKzL7mCTC9vaqa2M9EJKBHU5KFFXvCdu7PxoAWfp66x4MRfD2CDGemGELRfvvtsQQF",
  "key34": "2LomE78FaewhpRm8faVYZn2gxk7qJsGcW2qxXbFvVuA3qWahpCTdovrdt81TgEntqVFQVeLLSeZ4d6myqJCPiZAv",
  "key35": "3RaeiVWWJQmNE96Q4pmn2p3yzwxErD26y3HNYznavZ9f1QSD14xgF6MuDjioFBNjQF2fS2MTLb48gFfCwzJgdVXb",
  "key36": "PWvjqWc9jcbNHp6KHnWqK7bGKGG7XjhGEoXMyuyQ5k4FQ2wbvsmJuvXxmPJuueU34hfGifCqcvSMsKViwfdPzow",
  "key37": "5U7DyCNvu5r7C5kePSdb24y8S9CA5szpuucdXjzBazznBU9FvqEBbEq5ZCv3Ri6AygPEeSmdCV2nw6cyQzqQiHGb",
  "key38": "4cbHriF42sgPdJxGzjiiRUb2zk7U6uVo7CAQzCg8wKnvzyDDBXLjhrwQkFQBVuxdAkHBYksecghXXvAGEbM1GCTH",
  "key39": "3CFqXio4ypaQMn5angSPnm76Bx1i4kspGxiwydL2tbHwc7jckWgrtB56WHRQcbZ5QbXsUeejfwjXMVutBYbcBVBC",
  "key40": "rd21xaGZUto8Bakft5hxEMXRF6X8LdfM535EWEQFf4yTjhmwqk85S3Rphoath5KK52ZpeVXe3atSs6cPQzNgux2",
  "key41": "21GvvaZyP66ArecrWVuyuGX1o87eZpwfvqS1tTzJv9Wkqdep7fussgjSY1H1mghhu1sN3NiVFpsPq26iJsNgKRxe",
  "key42": "3y5BqNMDjyeJ2iEvVGWy5bTqShHpuBuYVMwWpVGHMu16VT5gEAeEgRJ2WAAcN4PmDbp6t697wiEqxyYr3bYg5hRA"
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
