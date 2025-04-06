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
    "4xnfgXyVTj8xoT4FraNvN2SHNnjsFXQynec5A62VCxL43LApgxaFZJuoi2zhJhFk26pWM715bktVY4rzCy5bSKjr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37G1ZntezgQb2UJHfJFaScuuUkiQgycZhPxSoV3nPtNMLJ2k8VcvMSr1Xkvs18kiBx1bsoTfJN4uCMdGfPP2wmSW",
  "key1": "5Q9uLGRSa7sfPuFRyYAsY3wf67YZFeopjaaMX86scSnX6dz5toYAtoXRozFyhz7u11y6VgMVGiB7R5QDm8D8AvDo",
  "key2": "2vjErhFsembg3929gXvU3tYT7vx6Uw12K9wETZYwn8264b1ArZeU9xuHwyUzu4wGFcrioFVsyFbpwg5tGSJVbDuP",
  "key3": "5oKLYNxi9c5R8Ybc2uDKBZYB5s1gzF3TdG3PDyF4UdbdzNJbdQjYnYr23e7fKFeyaasNenxF4CgsxWqA2hAoFz3r",
  "key4": "5SFCccjvT23XD4YBeE6NggPB7RfYBLnMYUeAJgvBionneM34jrzCVzQdWUapZSYJ9tcUpV1dPPemK3Y1HQRnPNVF",
  "key5": "5p6q3PFfA3zDq159F8hLAduzH2pfRE6w7m7YAVNUWtJMaDbKtzrCbkh45KtkqCKeeAZL4uEqRBM8h4QPFMAZ2K2B",
  "key6": "4gG875kVD1pN7y3RazDt9CvuFPwYpQckR6w17bPSwG4JT6kMEZGzPXjeg66QCYwLnE1BAbRGLdBs9N5h3yJDyZuS",
  "key7": "23TYbfN7V8TWgKtfqJNgyLR2xVa9S5BsJCyddnfHKVztuSTDfjrhWHnKFAM7NuUdaxPTvU1PtuKU7vdsDPKw1f59",
  "key8": "3EqwnTQe5k5djgrMK1ZshfWQoCWJGMHzECRfTNcMBAmyp98e5YDeU9vkPtr4e8eyu8A5CEatYah6EJKH69roSm4k",
  "key9": "4DC1Jt3RdMi6WcXSGgnUnMPKCF4PmpycUb5kLEmdtzHxUi1rirsjJUjoexHMpo8eWKS4BZNspqpmiVvVxhbN62mW",
  "key10": "28maABN5xJVnvzNepH5DVDcq1PULi8iZWuEZSugCM4FpS8SjWPufBF8Sw5PjC7NFnQS34C596Ny8jV35BN5y9d9r",
  "key11": "zqxghMeAdebJ7KBopN6DdmP6bwhZDFMJRrvvWDAX2FiciEnHH2dP9d44Wc3pEpJYridCzC8DLt1uGX9c5YyizwU",
  "key12": "aHUYx46YNA3DV7eUkngeKmJjz5hhHiKypF2E5GfPxZZi5dEXADVDrYe6zndcFL234fA3M7JDKYHLDLdnUDsGbQf",
  "key13": "3kRRV5NcjnGjTgLUEWBHCCWTyeAg2aZZH4MPWmfi9jhAXZo6pa3gfUvBAWFLaHf8k5159QesZV2CAZHaU2NhrBh",
  "key14": "3Pw8gCZamp6tPHQggiRAGsEpZTqFmrMHpa6HvjqDhcDxdxnKLy8ADfNQEYqa7rYYQHH6N8MTHs9m8ERHHNJHfJ14",
  "key15": "66YBuigufJHC6Agwoe4EAbyD9HBoQEaFm9R5pWDWFXnj4z8LKd3ueM1E965czEWm6He57sjeuZ991yLq5te35Unk",
  "key16": "38iRnezNREUghwVDELP696Gbhs5nsormcKHUKphmfd7cvTLyA63Z1rgMA5TACHQosN3NJekQz8zosRT6YywSq5K",
  "key17": "2iAhxq6LJ1B8T4rHZsVBJbNVmvKvF9JA3HQPUZEsLx4x8cqZKrkaAWDcBtSyMNPuG1xPJ6wr3oEknTDjPbzdE6Dm",
  "key18": "5VAfSY2wMxNXemCbGBCoASXkT9PQES75tN1k1pSXR4T299rFptYjDhSsMKjKrNxwG6iuMLfxgANmSrhB8u1W7GTc",
  "key19": "3krrLrvFPY3t1SkN5YdCfmhJHkq3vniPZGWnWEQWmiiZSQRyY3TMmssDKz2YzJZUsaukZunxRDu12uUcwsKaS2TT",
  "key20": "5ZZ9qwu6CghGqFR1RJvfNYV9uRu1m1HshpM4nvWEPX7hPckJFpYENFEbMFtyfnJQ77pGeFarkH5z4Fgu7y6uqVsT",
  "key21": "LZaH1XieqDuuhSNwRTNJJ7weestat7UEZV9v7XPPG52jQtdqEVsqf8zGyGPxNVJ93ZEmxkPfkHxoB19KaDynWDx",
  "key22": "5sycNAWxomtWMXN4Aj7cjQzfidbsJaoyqM2nUdGD49SqjvVvhtfcHSpWqcX2pmD8vLQsYd7tqcGyJzMvdurD8mF8",
  "key23": "5s3RyTJPV8AXnbfef84G5k91ueVjadjtL76Cb8oSUNZzyxqfbnrzAiVJWMjRXYzjbMmSZHkhRHrir34j4owBt5Pd",
  "key24": "5zZtZZfFE4Sjr9T9UcAz5hazJd8ejRoNRkTN8zwLx9h9kfzH4utd5oq7WheXPSNqePGctDJk4S3bxFEf4BVWe86R",
  "key25": "5KhM4V1esrcwwxbyhEbRwoM9ZKAxRziDwp7uzECqM2ux6eJZ5QGwMLRzoNCBeW8dTD8xZApTfpHSiSQdzjMgqZ86",
  "key26": "6mdi2dVFBA2QUQtkJuWqfVf4C1MBsehiZicZMcVpLddD5AvnAxyFACenhDxN7ZsZuSPUXfQHCTjXVhPrM9VSokB",
  "key27": "YYhL2gAC2WZgC4gtJAiCWqaTXUBZynhECZhWg8s74C16AuXTUdE2ez7yiENnqLYJMu1xhUik4YhpHqadABK9ysP",
  "key28": "5JNcF1kyz8vB9rd7XSPNYRqkVcLCRwavbtoUtFoFH9vxxy4eAectSZF4FxJEusxpzfKR7orQWHN1kYGYZ2KnQ6Aq",
  "key29": "fQcuzyXJJZij3goUjGb1yEfhKe5FSGShvqMu4c7aKfy79mj8BfbACvWEPLgR6qAQUa38f5GvTGv4fFnZzhReom9",
  "key30": "3PuVmBK2hunKLYmbKxABpACbmrFAEZZRxa3WwjyR2PKcwkNN6yCEJrgQhkqRqdck93wEJY9HZe38SGpkXUrfhTGi",
  "key31": "5Fi71dM1ty4eTXXJDFJ9Uky3cj6qbhwQ4fnEtRt3BZL4e8mcNPT5CEf5rsFvAmu62LGEjLN9m1Kyjrq3uv4mS4gp",
  "key32": "312kWBmxNpjg8i1NyKEe1VY9wrUWiMvdb4FXBcqnKrJsjwo8TAKWqRNgaLosCeMtw2U75erGDyt4Nyow6AK6L7LF",
  "key33": "4yN2TqBePrZeYVT42EPpUuTBDkQHgo99Dzfm7K8MWhuxEty23LYdtnA3z4Abgrpbq6Qu5mBMnsWf2eiPnGUiFWGE",
  "key34": "5Ft1F2CHREgnuohdka5CiWfLBd2Vfpn1oktjgWJqatLPS8QuR3afztLWoUPTAUt6S8i1Wi6LtHPUaq7e6v1bVEmy",
  "key35": "5FS1HcyTLRRzUaFXMbXSttWUmaqmWStg3BqX8Vde6XwoK2YmeNkCpvXdLTWZ6V5qvuHdHVDjW8FsnuJNhjp2zSwT",
  "key36": "2gcHNQWdX83XZ77BnouyE8hPyNsfMrZKtZRT6pb1EQfNaSj75RRRKg8xtHzxCtG8XnDPapSbMHLgFYM78ynixKf5",
  "key37": "4tM4kNKbaSJHF1mSTREtV3wSJsZxzkUyCzKwjzUf5HU5PKs9ujfAkn9pb6vVcaXUeCnfFyEevT5yhCeYszELKzgR",
  "key38": "5as7V9fxa28fPvdnWHUtSXgHgcS3uVxydATZDtTYpsTfkCcQLzbzruy3gbGfaWcLnPiWdtbCHQDamPn3JGCQydQh",
  "key39": "5abcEVst3VBu5ToVGZrPYXUmqxk1bhY34tdnB3gi2TUbVySDuJ97kHrL1prWEpyd9JhA3kQTyXe1rXeHBopbJdw8",
  "key40": "Ebo6qDs5XaqGbH2NuShTMnxXwDCBZAPxtZr1BjVa9R8PrZdfNkocfoo6HAKgebyh7CVhCkFqBVCuS4amKpTSgYW",
  "key41": "5G1sEeBtif32ujG6hxD5R3rFWxa6Ca1UZ2mWRZD1ZqtQu9i2B9SJ1Fi8eEsiqjsDdbeCZgZ4LFgjojAZ7AYjzhG8",
  "key42": "3q1GjASKFsJ2c7yjSb11PegY5HKkgL5Z9qmzQM6iSfPHZv3jjaB4rdAwmtb4rrzhEuWAFFfKzNwhu1oxuSPtXz1G",
  "key43": "2sLpetUeJFezLVqk99Q2npouLWVWmrGMdFGyvYtPA8Tk3CxtCYz4UVirFDNmfHsWex83GU2Pvski5mC3VdaeGKnL",
  "key44": "5x1hVkTMHe97PCgDfmWXk8drA2ta68qzQAZ7zqdbsYBgQsCjysWz42u3NJVSyhKWVgwTctaBLiKbcM9QfxkwE8q1",
  "key45": "2d5teVWPXBDfEDv6Feug9uQFArwMznrsLVhrDD9DNatjT6t7xncJ6z3Kd3eMBXntccDJGTbTaPasEKVvc1QNi9t4",
  "key46": "5nvz4kUEnfAvr2rxJDpkD1HRgPuFi5pLWJcRwv8bLqwsxUSyYi1M8t4SUP63xFmnoadqRP7J8FCzhvxjPyyGBu9o",
  "key47": "WksW8K4ves41zHcXdJxPg4dTHJBauwZvGrpceS2GyucJ63SmwLhBqYtN8CQ9GfJwPpsksdWbWtXZneft74NgUdf",
  "key48": "3qfn4Avar5PsaSVxuFcfdvof5qvQL8owFnK9biT1orXhmpPngww3JUs3YE3hgyxK6AFyQAjhHWU4LeAJrauadzGL"
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
