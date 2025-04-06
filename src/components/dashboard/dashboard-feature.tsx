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
    "3dh91pekRBTzb4CSGp2otBRpd2VaePTTEykXn3aNgpYzuchXo7iEJZTrqXZtBHoVvLMAgrdVxpv2FthvA69YDRhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VyqQu6aXwhujxxFEB6AmAzdiyiMNDNw5HnpCU3ywdRTsPE26VxmN4P9k1VMcwsmU6yfKdmMXrdxqyQQLxPXUm6Z",
  "key1": "yC3Ch1Ng1YAi4SGqc54v7xva72VqmEqMjxwFjvz1m4xfBm6v1BZZo21ooZ5zEV3j3Kuxn11ysG7ZychQgrGAju1",
  "key2": "4c54JPjfgpUUNVQbn9cv45qqbs6agFG7xgfziixqqv2xsCpGsiMjPs6AqVLZ2C6GfB7o3JE4UhB9vzxc6XDb6r5i",
  "key3": "5VvcFPe9naF2PzuTMZCSb4x1QyCf1BXhVvgVsLXeuYmKCVJdzQumJwpYXdgfU32fQ2aF8cWU14t6vNgusZW1iQ43",
  "key4": "4BrFE19Fs1rTqvFb7Aur7afxUs2gUV6injQQTs9tJAAznMC1CURtCT7BYjz7AScWdypy139BTps1nqKFY4TLumNZ",
  "key5": "5Ri5BrrENEMeSt5S1V83C7Mt8gFjTsvUzrCm1gSz7XpKZM8ot4AZos91uzBKrgRJTKeRiwsPswKiXBhVCHEEeq23",
  "key6": "3dSWA7a65ryAQA7jacurR3ZkxzKTMCwyj2x1YNWNfYW6TU71wpVJYZLc2JUY3LbPhEdY4UmoRLSyzA8xZTJbacYu",
  "key7": "3zouH6sc9UUQnYrLETt4Hdd4ZvwmmNYyaMz69B65BvKCk1EChaHBUYamCYyAXp1CfufSBTK8x6382jSRmuMyqKDy",
  "key8": "37EKEGD9w84iSDrBX8kBDZNFaqjyvb6rqr2Gn3Hwn9RPcPss3LQPfL4EdBmwztXLcjndc3W12drmJFutZxL8Drz6",
  "key9": "5gNsWFLyJtpq7RmLsiHtAupE2iYz9HoEGdLAZfwqLymvcZS8hC9zGLeYHhYQdxQSQesixaia6PpphnM2zfvdW1vi",
  "key10": "5oaewGBq2Q76HWqTWTwqdupBSVCMUPSGeHdxMDJQ4tFhQJNyfuB2WsfvHrpar6eQzPyAz68acVDBX11DfGCPiXnn",
  "key11": "bYBVPiKZbZ1U1oVPWrqPT8kQzgHcTbsCP12ZahnBQPgsJ8cTZqUWnfVrpmhJeJ76rVL54DYB75idGD97ZuQng2d",
  "key12": "67YdvyM6safKGB8jLPSeNoxDxPxMhCBDhrXynPVymvDiiio18vzmzBNZib2JNhYD1GyysqhUjoQR455o2c4Y1bw5",
  "key13": "urLD5sn1cPLAWWiGbsYCdSciejsCM6gcPh3FQhMGtVdtEWnDWzbRyxmBGasjbG6NUtNF2bBMwr7PmdGw2reTD9b",
  "key14": "4bYHrg19DyZ4a9K4P2z48DBANoiwvha1G1owchxGzwDTsJZ5m3EDSfEMT4iF8qCHuRrP8DGg9qx7c2AZ9Hw9dMh1",
  "key15": "1A9sMzFCWqS1HUx4ZznzZFy4ZHvxYqZvjpvabRCbpWMYK69PiRJyF8Gujga9nkAc74T3ewtcDMaVnV2RKk3E6yZ",
  "key16": "4XgGJ8KKxwD996g1uRdxLugsf6z7nukxaaz5NrWNWrtoohtpSpsmg39rWZiZ6D9iSor21JptvJEd49Wps4Sg14vW",
  "key17": "43R9spaaep7bZxAuYDMTRYnUYuPNCjemSrYk8ivC6JpFamQCbkXZCsfufhW8tJUr4Ug688tFUWwh81tDQw3THo7A",
  "key18": "3AeNUYGDEWq31J9uBLLqxprcuUEb5NMqFTyUTyEZogN1pySWs5xxtaFQzdCjCzDDQxM5g6j3m1QE46jvFNwSYxCL",
  "key19": "2TtwfvhSxZAcMaxTbYYWPR8iRzVK8BQYTisrmNUew8ui49wPxEU12Bx1McfDNJ5bm5QS2yfuVSBWxTAr4CZ2QmWw",
  "key20": "5HGpGhXGaBJf9SkZKBhtA8oCgH2wDoRNUSK4fLnRpJhhZeWKCUygKZTtAxGBVwX7qEsXCYJ6G9rWeGDyD3LFJoSq",
  "key21": "4z8McdEWwShcFbSbAfWMb6MnbShD7wa5HQzmZjcVTi7ZCHRGu1ZGT8MQTLRAixteiSqqii1jzL2q59kYVqfZyYdx",
  "key22": "2eh11CLk86KMsGdCUhJGkrsuYsupkVqLEtjjxoatahixGjNqaRttcmpE3UJjz3eyDxtyZ2sgqpjRMNdxsUZdiB2U",
  "key23": "431nDEboiPrJj3v19KF7hHhsFieARjBEkyd5dBdUkGzq4JXDyuqRtpazk6rgBQg9sJjggCUgSCUPKKctoZ2WmkV7",
  "key24": "5FeEXmmDRmvoDResBoZUYvzMPYWHkVZ1UYVzVsov4KKWXGC4AXe7YTuoS6fv9bx1gzMaZpjUzQNiC7urNoCf2jS",
  "key25": "321a1Q2fQ8pDDGU9rYrAMvnWxamY3iX4NUAGmHGUiMFLJeGj8VDrk7kM1dy211u6QX5HAdWiDoya2QbjeujcweSj",
  "key26": "iV7rJbqkzPYMRxdv2u1cUizoqF9nrB3fUfB7eUqHp3E1VkTN3bhrxsLpmM1ubKZRhEx22yCizJ8WExUeZsWKUxb",
  "key27": "4yJWS3FuFzpHothsWUYT7RD8U5AwaxyAhY9ggoNdwC9SZFG4ko3sWyq5ptdoTLU6bYgzZMPVFbBwW1Bf4xEEe7nT",
  "key28": "4hYjqtPnkcfuyempC8Jo2sHajP8p8BsUCjyQLDRN5cy4jpadnf8eCwEKDHhF6AjpbjPDRUDVzGhs3wj6vRrKm2nX",
  "key29": "LpbboijzY7acz1UWhqCFUQSTWBXCoMRifvHtactoRfDaD1m3KUH5wkyLQ7EE5e7KTaAHAcvAHWbVY1vK1hMSLDa",
  "key30": "3QKkARsTrx17iqB1CtzRK7RSprauybhaX7k5vCF9G3AXJxST5CgSrD4sauQcSNH6uM5u3G6fTDVNS7LBqKKVNtRC",
  "key31": "4eH4KAzPCMBnZzT3fNvTcbv5kK9sUkbcC7wBQfqbGFTVydy1vTdbRv9QGYfNdkVE8VV4Bj13dQXgNDvde1mrU94J",
  "key32": "u6tRYv9G1GNk2b7Ujg9dBiEkc4E4w9SQsNx681Fp4KbhG7i2zt9A14XmCUprvhMfNqNvuVrfH4hgnuec2Dq8yet",
  "key33": "4q6cpVvAZDoLQvTuV8BJyDiYNza62pvnvJWBgUyg3Fe1LUKTVQ71tgjvoxsSjWQxp3JpGGDhCfiGtnKcugj7UfR1",
  "key34": "5RqRdu4hriFckwYi98MCfq3tY6HD7scUCP8WehDGR2b92XArWKg36GhvDscfJ1ubUzzycWyHAggiXEdb9Bi1tQh2",
  "key35": "4Y6heYLtFMg54ZhJrkZduGB2QJbYYbgwf4dSpa7yuEa1DoG6c3RuyE4jzYccsweBffu9P8wzV4BRmQ9hZq7W6YEd",
  "key36": "3e6v5XmF6ag9x1ntoREQanKuSyZnhQpnKopnP8fbpoGLEdpZDExgLqMxzrB7MBDgBvNK4qPgDFkAKRkZHba2SWPL",
  "key37": "26HfRsV9Jxfc12fPbaLVS3FaPApHCAAxT8fCTyyoBu1b81pLJUVuKByWFaKBD44cNXhAfYg3VJYocU2iKdo7hYrN",
  "key38": "2te6RtqgRWh1iSH6Sgf7ngbs1nxNwPdYDUux7qNPN57KmyRWK1gLDccL9hZg6iM6Vi4tXLSYhjPKNSdcR8Sx6Vdv",
  "key39": "QkcJXqGx4PwneBg5jYCYF6MWXZFZAwZvPS7qLGwnqDz8JsAwbexo3akEUWTrUws3S6pQJNZjfkjFK2xGVjtYSSb",
  "key40": "61EUiBMUKSe8eDzfvLSWsNrtphwWcYxzp72hVg3wJDUeG1zpQQ6mPSoWnxctEF6sQZRqcEsb4Fpuapdn6Zub5DJN",
  "key41": "561iy7faTQXa1fPm535YGt1oyHgQH76fn4hA4r9vw7AYQTmuqZYMUSWm9nF4bu3CTFw2FDzBwT9yL5cEHyi4KCdu",
  "key42": "34Sr9VcBhwWzHQPzpYN2v948rxjkQoVQNHeqpzqy9E741hkHKcKvGrXvuYpjsXFbpafckQDsGE4TYPi5TQsZHbMY",
  "key43": "VaGiZaoWwvvtwoDvAnrsDRakmnrzF7mAXct2CRkaLotGmjNEYwCJAKkYqkDhEV4s95BBkBiKCeoJm7SSrqR2uun",
  "key44": "3bf5mAtmaibZ9nEHKS7o1BPTt6PE2VhmXU7NwQEKTnuyd6CGRi9ctw7UaKbxwzgeEEUNq8eQSpvV2GxhcWRG734J",
  "key45": "5yrd8Asehsqm2HixBW99iKTXTNsSztuCXY4HZPHubyvmWV3dMCRKPpPgxEeC3b3sbsnnc8VJ3PKnb1XjcEVqDNNG",
  "key46": "49kmpuqsgW3zTBC6WohrVhenmzabDvTNzzmkb3TeWXdg9vrrVzDx6ZaqDRhvvC69qKk17NzwKGxBsBJjZtdbF2rx",
  "key47": "4hgDg17XvEATxGgDZ3ttpn3EMr6Q9VeAovyrr5fC5qwvBja4DvKzpGmSkD8tWqqeQjZf6cr3BcGNEChGxv8exfFE",
  "key48": "zjpdEeGaLxG9cygUfazcVjuLujvMFBmqF7QGnE5tca12W4eEkcNW9TXN8ENZtCg96UkyK5B5nhyLWsyfbVS4XRp",
  "key49": "67LmGCUp2847e8X3XPRP8JdbV49fcN6wexqoVfy76dkJ3HsfxzSLB9NC5KMj1gnvsnwye3MPdLqjXgjrQ6HqbGcg"
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
