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
    "4tMqi5MMtUWY9DmUCE4TVNgtemi3owC5smRDZi71SQs9QmA4XD5ReVmhkuNHfXEkDPqAwPRyPVaVyfCj8u7ohsiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dhx3Xse2qNFCQp9fkWHbb6i4ptXcukSCCgBjScBTzFQQRZPePNqWxBMmAGUgoYQhbLfXn4Ltpa96Fnx2rPGQn44",
  "key1": "x3U17e4k4xaRfgXA4UC1BiixxUuuTusibyfQYTpsYRfHpU4Ze2TMWbJoCnPYSQDGcNsmyLBLRFgK3CTsWXprnJn",
  "key2": "3U5CpLvtjMGv9YsKgbn3gztEBtmkUpSfGtCD4KYd2Ffe2hr7koMhigWwTSjGGU2pFcoACt7bpi7ZtYQCsgirj5U8",
  "key3": "39rYUhMX3Ya2kcoBsfuWiLbZGDphn8QPZ8ZinDprHrjj4nfNY5j1q5Xcu1bTBJxpzmLreJESmYfYUicLx89f8Rew",
  "key4": "2nBCc4cmQPPV41v2R7hPAcpA7zTWHQRKXBrHaYPxRbK72bKWqnVGd3LmGVmNCJQQfkgt1b9fed4wuS62cuJfKoeQ",
  "key5": "63TwQ7hgTH1VmBCjkzWjVWhJ2Va33UdaYw5SiFdfYi196dGM72St6D2A6q1UtUazKNBnCZhYfiHF5p5Y3JBQa3Rb",
  "key6": "5Xvd6bepCx2zRTV2sqKhGtd2ajy1nBJW2q9q9T92FatCapzX6FYUgJa8SbVsGT9tgiXu679juqpPhhn9McYGdBoK",
  "key7": "2pHchTLNUJ8dAFqYRMk7cMALyvgzTxs5RBisrTUrHW4VEWJZbzRqNGbsPNcx88m3KE1cGsdHb6LRBYnRC4kCA2Up",
  "key8": "5TRL2EPmwru5MJddSWL3ZBi8qqVnUM2qet41AJGKPPpfSWfYueyXdbmDaqnJGDHFKes9aYkkBt9fKmq93xV21FVU",
  "key9": "5EDbwjiwa7NJC3xJ7JidGswKyh6LU6fYjJxAXSsb4zg8NbfahwWr3H4WMk8Pw3KDc8inKJ7E7cLg8ekqkp1edHgS",
  "key10": "QYx5xbADQ6CvwTt258u51Agk5Tj1EnkdpUy152wiS8sdXD3z7KDXjPbZRo3jm9toYBRFcxZNDAQEHdkbvZT2UvN",
  "key11": "2x1cdRP5TocX1JhZ1UZYe17pvggTyrZHmikkR4kAuHBRoQdM4gkaqTDmnhboJpaWwrMxLY4fn1rJQnG5gDbGHQFY",
  "key12": "4Xqz5iBRyWF38yJDfo4DULKDHyMrVUZdQi5oYZwdvnoCj5La1YAsVVrm5GqGcBKviU1EUJNQG4wWfV4EoLHdoSeD",
  "key13": "3bFfdYpYV1Lf1ck5s5uPFnAPGT68wT26ksiFgj26aE6P6iV4hfK1SwQQYUma3nCYnnZdJMR1xJLqNj8NVMboPDK7",
  "key14": "4fWUEcPKnAwQFjYBWx41JKMmbT5zS6vGM9Yzv4g5EgRQFXHZjCF1rCXvZNYQMuTEhvYsCUSpWQarmMyxqVAkNB5x",
  "key15": "2ZFFsH73RAEoT1NypMuuSHc6a3AqYRQGfP9t4jZF6RNjxjig9nmMfJE17PyrBhaDBPHSpe1NPZsxuPcc6boMtcvD",
  "key16": "4PJh4G5CZiteW1UH9oxRbzyWr43zUyHJYb5t9KArAHGAhzYNdqoxfgcE16Jzc1MCkQpe64ZCc5T5ALkojhyCmA3T",
  "key17": "5oMeqxqUZyJ3YJ1JYEHroFreqFkR6VikWCS6zxuULG4YJrY3wvyAzJhwhvdsEeyR5JiVoefAA23Ec6CKHbygaWv1",
  "key18": "ffdMzdZBuXXYV7bS69PLY6eieJqgtU1CSyyPkpvzPYj7pP2tpFexh4dPMZyNnEbBr3m7ePwor1s8wMgCUtP5h6E",
  "key19": "3yinNKUt83LxcSUp2w8FB8kfTnw1aDC4Ho2zeogLi9pjtqe18ihnpQHrjJVo4CLjhYXEy6jpodrbEuQD9BVV6snF",
  "key20": "2ynpt4CN22E12NxbDfVis6ZmBLb7k6ogYzTa83aCz5V7THVaqHeVtfRo9rdN31CJbRSic4XEFULbNYVtjdb9c9qV",
  "key21": "5kqyXeB68aNmE94qqphP5ZAR9o15J1ToFYW8ojvj2PZWUpEAmYQziKNFLrcjaGqZkgudwmKiHr2e1SrvTBQGoLh4",
  "key22": "4aV8rTH76o7aP6rqoVSyW7UE6UHmSs55tEnvPjcjUXQb61udVjab3Cdc8ck1SjVuZkpwi7yQuZSJcbcxPmusNYfx",
  "key23": "ftDRvZwMSgB4sz9whJ9ehpEuwXMvY5Uq8mnq49Lcvmx9ySuv6Lb4nXStvRqkCrZxkcuZ884RqgfCaGKqf551iAt",
  "key24": "4briojcmdHLkZLJBx9QCKBWc3JqBQ3Svp3pWJ5owGZEEZ1LWYznV1hnZadM6j65K8TzHgWvMQw7PQLGjtGVgG6V4",
  "key25": "45Z5KNLLx88BE1BArNHLzrXeoqJSYnbZQq5NdDe6UKYiwe8jvcrRQW5eDCfjPpczXN1hqyvSGAyt1NQxf6FvmpyP",
  "key26": "2GVEooCYLZaFtfHbH25bkHLkW3MhiunhbSih4W6h6oCDmZo4fuWdnwaHrgax3CKCzv7tSGE3RDVGPR6f5BRqBS5t",
  "key27": "5J9SPVdgefZ8S5X1UqsruBC9SZZBmpmndnFQRUhpzmJfWYReZ1Y32xfjx94JeZaMb7cMBM8giRxF9RBKDYUxqyVK",
  "key28": "2hyDEEaoJ9uX3cXf8y2jcLBfNzLcxWEQk3k4932QvkswPtvJiEv9DkcvSg8uPT7qh4BZqjKa1D5NMH5utoqvF4qz",
  "key29": "3iHxxxjTj4oGtgK5UjaDTbwwyNuhKznRFN8PMoyFMVhP445A3LAhcYjWefisNtF6ZBb7rxD1khJQo1uNDVdf6qBU",
  "key30": "2Nm1Cnjtf3fwZ6nuDDKz3ETXbVwMR7X5PgZv7ZPAifbRAAubpH14NJK3U4zqSQCRyRuPQ58cSaBj2RwKoWrnwymj",
  "key31": "3QXTCaRjuNqdwWZprv4UyLGnMBp1hbqGpAQMEGJ6xKtyynnNkNH4czSE6iG1XhgyDY3JPVoQ57zRFts7f1D3nwDa",
  "key32": "345HxxjERQTdT3Ea346sMbkKQf6rvKDaQhMuzgAUmhYBhNJtBC5CCqZMFEftDeJMvPM2N1iNfgrMjMKvAYtqwjMb",
  "key33": "48kBpxSLUQt8eqJYEG6N8JCk5Tr96nqQm1SmXGjHE8PnCMJLZGDR3m4SYoEKipaNMREHFJnqhrmjLM2SxudJ9DZs",
  "key34": "z8qAUc45ZBXhTrAbfWy6YxAxdBggcsMaAPRvgWx1DNHCPNWUuqGZX85xCVp9W8wzFTaDiW9Laz6poYXD6cwwH6j",
  "key35": "4ES9GBTTXSgPA5ZAPX6MSFSYryjJwBCd5ZFcvV6iBCNtqEb3bgF2V6w3wZQxQTp8354WAQFGV4effd3qb5PaVp52",
  "key36": "5r1ZVJFu3sUdym2jAf5KFANeyvBPJ8moiE19sj4qcbHy1HKxWFZr1Qmn2hmzu85AQYWJD6JL3fxo6AeFuUc1eX47",
  "key37": "4FLkoZtWeRjj2YSLGAduZ7mD7HcJRZDB7ScEKEUWj5nSMuAUSi7SE21kJ46VXFtGQpRqB9HciPCyfAVEBJqas2vi",
  "key38": "5Y4FjNZ2GSuRJvszaoFFHD5QxR3yjRPDeiRuXWbPopM3nmRDwQEPBgLwdSF2nNhqoq4rTBhGtvBbyUxSwQsgmTBU",
  "key39": "5tzoekH3ZtVtqmYi7k3iwad1DmRJXp1RhywDNdLeUsdPi1oVPhLbwNmovdBJKRERsfmGV8JsGkEjtPDFjkMn1cax",
  "key40": "4Qm8eMJJQgZJJridwq7qkujyXSJHM64YemxwjNfcZzygtjn8CMGZG96Rt4QxgDVJBL9E6uAUoUoSa5oA3wpVotF5",
  "key41": "39vHXuGmF2rPsSGZ9iAjG1Au7zh1A9cYWBZGwuNJe2sRKAcTB4FwFbZGRhuoEiwKsiwg4eq3UgyGkxp4UKhFSncY",
  "key42": "4GYFtmkgiuzi5k1w1HpGQfS4K4iPiX7BnAX7dtRwitzN73GBhoQVGWbsDgA3mfKn2i8xKhLY3nmQRoFTDZKuEo4W",
  "key43": "4o615b2rF4mLWroqtwo1uGLThZs7cYN3aJgzAdHa3ydTE72fAsxnM81xyiAQPhFrvjMbB1sXSFK1DtMPVZ1Y7zPM",
  "key44": "5FNsnr1oXbheB1YUVcJpVQsF5ZHU5eeeLgdMbYiU9Gf7xPpy5T7hu7BHANxoUfuXa9DKA8wrpWX11EdNzUbnwikb",
  "key45": "3aoAh7iA23KP8NWJLmqwX1AvGAMw1BkRvb1LB5xEBGjgzfF4t6SoJhdCKwUAW2APxLvKXZsVR3jQDSYhARgnPWbZ",
  "key46": "349Mief6uVTEFTzgCUYFJ22KEJXWsd9ozEBiF7BUuNFJLpDkhUbmE1ETHXQCTCBk4jYjUQd6aXEeojcieYwL3dVL",
  "key47": "5R5vvD52SLCaH9YkcY8QvQxjpnwedgPHKurXJT51DtdqRceNNNbPyyfgWBJPrSkKSiANw7s1wQ3PBqnboXvYJmEJ"
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
