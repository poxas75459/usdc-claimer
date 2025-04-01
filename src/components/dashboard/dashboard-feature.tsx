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
    "YsYEr5W2qRTVMVdJ3pDS5cdNyxWHdabPLg7oqpBTLK8LNuGYwj44oxEkvn6z5KssPry9Tzcy1p9iNxqE7RbK4Px"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hgFHtLsQQ1tyeEx8gpkaHj1NF4hVuYw8jTJNJ5ANaT9AKYLqejaju4WPn3BxDa3vGeiiEyaFVG3UUVzt2FXZ6L5",
  "key1": "3RE4iu9HvhzK8yL19rtYxmRHTuQWCuRzUtMv6ueoJtw4XS1dFahgBC8pDfRD5X8sdrWgmVeuFTjE8pxJ2aDWitbo",
  "key2": "3y7YU6EMe1qRvJTzM6UTKhu9mtiEdsJei1Zd1F9vT2XWoUW2FaBza7GnxdWEUgfvkizCcXRQMcpdKmR4Z8gJw2aa",
  "key3": "3eGtkHVs7DnCa7BTqXwxrjXctqDy3g7dH1nS8Tnrsk1EUrhnNQBAJqJb7y7hPdfYsjUjnFw9DwAhj6bTFbQDaR7H",
  "key4": "3AxAeyqLS5FXMzn3RZk3rurcvcsUGK4pGTpaw8AqkqBPNpeMnZeXfkWMKPd6vponxPoMbvPzdYRJNVup7nthP3yD",
  "key5": "3sSzHttcFPtXLCshMiQ5DejKYsjEuSPi7RiafjTvpDAy9dV7Yk4dnemp39xtSEgZgXJD8Y97j4D1bysVaEjYuFmz",
  "key6": "3ZoyeDU1dPFBS812966w2xXdwKS53KNzeHxpXjZQEZr9C5rG4cb1V59RdkWTu97eJvowwebvnvPwhUmrTHskmg79",
  "key7": "64o4dcDohxNDkQYibmrxoxAN4QXiT4jBa3FNdXTmbjSpDd5PUvmvM6aSkYkgHpxrfQCEGiv77XSb3gUXQtdpgJd9",
  "key8": "MM5zbH9M2SKFQqSo2mzFN8BtdL4gAMjRSN2TgAiV6nNY9Ciy5maRtjNb2XJw39LRMpW7sTexk5LvC6Lg75Gz24q",
  "key9": "4F5MgBintuGay58aMeY5sH5pqhDpQWKenP7daBFEhBzBpBzeoAVARRpyu1kt6Rq6pdpYzk5rYAw6RHnbMCnZRSWS",
  "key10": "3eiHQbGnppMPKC6Up6sRR6KuuJpv9z5XeasSsu2V2xk6WgJFexVThxmyMUNEJz1FszZGGMsWqRX4mwWPjonqbnUS",
  "key11": "47RFkAtRnttvry2wnkeRTdr3KJUcM4m1R1dXxjF6bnRFqhsW9K87nd9sZVEJguofBoNS1tSL82co3Azjix1PEGV7",
  "key12": "AfXFsVsbxSNPxqMW8izymeV98BaBb4V7kPtANGQVUaZSpkrdMtncyEQvmm14bqwDCbpCnWamf9aFHvvpxWMaSJr",
  "key13": "3KqPhc1vjXgBwdp71T6V7PDxRmtXkDWZa3tXQhETAw1kE9RnjYBB2KWSX8KDRBEubjYnX57gW2CLqL3BzsKGrSAv",
  "key14": "62WwvJFTRRL3BsrNgwy9R2Fiqzyzn5VPZ1ZWBG3PU4MyAxLLMvsq9vRh6YVihKKjpjNto9gQbaL4CBobPq47gvXq",
  "key15": "47x3cCnScv7xfCG31HpF2sVGkN4SB9MD5RURhmQgFTyV35L81CMPkS4vxTbeX6iGu3j5MbhCRewPBYZHYDbAR3fa",
  "key16": "2xbJUuNiRtXeqgmpF6mvi3J9haCk3uXGDNpkf6MgnpVFBoek4aPXYEKPCrc9PY1f1CmSnPjFURnhb3y1W4HU3eZx",
  "key17": "4pLdoDa77pvxK3kAu4DTpY3EStJ2Miu6CmqotihEUg7zXtmbsUKe8C3R9PL52GcXP7LY2FVXWs8K8AQuNPMYr1fq",
  "key18": "4x5srDdsJ9yEbFMseSXwRAgBL8J229Av4vRK9vYz3NAVGPez4cbb5QXEa4LUJDixk7PkyddUs9qGzZTtEfXzJ4Qq",
  "key19": "4q9NTrVtN8gaDoWNmapuj46SREkDwUmwmTAUNgUZwdZFu38SmQBE86xc23Ex7d7Bm5yohpKJUx7jSep2vWDZYP8C",
  "key20": "3wtDKs2SwQd5gmsAbu7WZ8Y9u4Hu2oBTvzbM2k8ndEjtGbMXoBypYiX2y3XCL3kaELumgj112EqinKk5PBxS6Yg3",
  "key21": "5S1UCuVNLUFDhF9ronmh3kzfCKea3FB4juYd5Rm3M4ZTeSrYxLv82RtYhKA1jgRCMp8myYWXccdrPcSMybUn2BM2",
  "key22": "44QRp8DUTxsm74YTYEc4DeVh7LUCGZNiiF2phHA6Gs4QwvKCs38scERqArEGMeyfngvT43crg24DYMZFrjqiBgzS",
  "key23": "CLuZTM8bLu55vLmVAsyquEW1aDGUBzKGgzpAGDEoMiSYgBDGdUCnAAgujsGiNyCgxi2g1joitKSwhKSLCNXwNgU",
  "key24": "Z1h1ZHVeYoDuKvMbbQJonokFk2dsqPg4WwD5vzHd8Dkke5Sxt6A4qZvwn2gtcd8VYuYSk7jHvQCnAVZmpXeYSmq",
  "key25": "2Rk6FNicSk4F6WpqBxbqiH3FxY7ndVsDppKSDe1p4dCacJR4KMq7YcuGdUN2f7yVkUTcxBapbkRqezPLcjCyRFGz",
  "key26": "5n4mjgVACHUg8sdCQCoVpEHvqB5ujtby3dRrbEzoGrvdo9XvnG9Wt4AFcnEqxBXvX8ES9YAu6ikw1shP9soaFuAa",
  "key27": "3ExRXcgBPbsQQGKrv8HzVHpWteJqWajPQagVH98hobyivBNSNhjgMdqfeUtJA29gPk6RVPn6CFBXvXRr5sxoGyNc",
  "key28": "5MPkrSRrY4qLDE3DuajTvqGQZPwhzMUmpXLGhbZEni1ri33nfxbU86BS36noat9h1yuGhW6HWKhCKWR7XkzTQy5f",
  "key29": "3VNxa3AYK3271CFTSE65vMyZmoSchJaWJM3JSc92MFB1PLhbz6fHRMZCoNTMagPwfSioV1wP1EBsmeG2dxCsYpjj",
  "key30": "ycK3hkrXr2ZREXhQPSe3GrKLCts4sMzPTAAjAY4oYquuLvTKy9npBEMBhAHd5WJ1VJ52tHisZmxYBChFhtp53jF",
  "key31": "3bwd8SbQEoTeASuG8gmNUZsQdUqgPZ8RZu4muEzByUd5R8YcuMcFYKegTCLYGjxwgoj9qACbvgXvpot2Xohs3h6Z",
  "key32": "2dEbFxHuFdY8dHncURbBY62fC9rZ6fbfbENqKcWeD3YBqdFr7e8xy9ZHjYc8qUPre63ofRpA5zVRRDx1p5CUDfrv",
  "key33": "2jUgdnxEZ2GYG71C6MHfKZKXWAfeyiLEvpB4o8ZKX4UcL9XsJdYAxtZANHxsLZrnL53FMU4xHyJBYUaEcUSgaakZ",
  "key34": "4vAmoMhrhyW3dKQ1DDLFihjNYfAysUdkMfyk37xdoyVcyDqasRfzchmPf7y9mfmEV18cANCtpxY2EwPgufDzBugo"
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
