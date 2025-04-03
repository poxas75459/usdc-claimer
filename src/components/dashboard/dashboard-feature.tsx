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
    "4NLf64TNy6WEFCZhYBZykSvQneGDTRRcoifPkhLjTrYuBsGso6Xg4NJy6thAj63Nshaau6rbp7Cr9LxxNvQiPTxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dddRjpbQPugnywLNvRxNMrFPNsA7TvpfpoqD7i6M8TazuLgMjAqJWTym4P5LHsqgMCQiEQWqEUoGeGEzZEHfVNn",
  "key1": "5vK1pQ1NLmjEft5v1zqhtnFJ4sD1fsWYPy5KyyT3UvnvVrDDAz6Y6uFvruqKcDfoshCU3otCJV7Y4j2Mzo1kko7J",
  "key2": "2bpuXZAth6TohJgGaJojcg2yc8XKAeibtevTiKwmetR5NZQi4hmsLUngs6Stht2iS2Y3CeWr7M21Dqvz7YyCoBAf",
  "key3": "46zd5ZU9PqcYjwr7QezksGBeoyodNEkWe6Dj3NhTiN3r2zxdaURAN2MMziY2vsQEXXoKQmPfSrRXqh8rp5ZJYXMt",
  "key4": "3qvMgfn7XehrRF54ZVZRUrhz5LMwwtRTfMJNCKUpy9bUFZjkYSXm9sMAPnJ1LUivNAHRp5JzUVoZzKQMe7ibFv98",
  "key5": "4err1zud34i3ftaqiK83KaRCqgek93CN8mzGg8nfQD6ymGtiUZiiwKnDzVgusVFbmxujNmQqLhngAjLVwAD1YNfC",
  "key6": "5RV98AUdxprswgNc8jpqhA1LZrsDzdYTWL5cBcpZq61mhq5GQdHJxhYgpv9GfAWp495vELSJstWkkbKiJqm9bmds",
  "key7": "4iPJFh7hXEAJpbvgwhGRsfascj9AaAdHK1WwgR8MPot2NAJjbvzr2gsvyCpU7iqoK18MyzMnxRZ8NZerRLTgHAC6",
  "key8": "56EXjgDGmU4YGti7ofQGTAshFqr163it61gXkTNEHD4PxyVbyaPuXQtNmnrW4Q2o48evk41wVvzM4Fw1stKi97tP",
  "key9": "gVZk6d4TgNQRZfdceBnaT73ceN4HByYFCDiW4fsUzVpBr6UpZZNFpwiif5WUaqzy7aDhCurFDcGxx9vUFXWepFf",
  "key10": "T3zRhPAZQjTTCnr1LDRpFpMntyQ6CCpVa5Zp4uPnvDvZ6K58qMvgeoGRgrpirZu9auaBJ6J4oToqUQ1E4RpTCeQ",
  "key11": "3CucRdFbVRSwjiLAyYGn6MTTJW9kyZAtVxSnMV4LKfuVbeVvBzAumenc7gJbHpTTv3Nrq2qzL6P9rSAkRsyrGM7o",
  "key12": "3ov7mCtjR3Mvo3KoM7YouBozrZNGfh2RX7fhiktT6bWey1oPjtcgtmx7bEL8HfvP1seBgmxzLvheXvyoWpnJVCeh",
  "key13": "sJfB1vnk3kqdUAQsPhgXPCwPFNQsJXZhPADX68pv1dbCwGhxxpemLCpwG4TkKCUDzz4bh2utZN4fgwhdBkd9wva",
  "key14": "4iXz3Wd2eWVN7gQjgjqET6RFto4EktUXy3hGPydXbujvbhaoVp8xEQMBD6MYZ9pKwKfLc5F58DDX6SuApdo1jMQE",
  "key15": "5AHLg4AsthxPdoqWp3Tt2u9E31x6m6aC4nArNsvAJJFAambWB5ywNRQDLrBWjp8B9p1ThtQenuzNsmgD8Yke899J",
  "key16": "23tf9S1BCegM8wgkG5mmfbGkdirchGc1wiwxz4vxTziMFgGpLdbNYm9kT5VQB5BH7AT3fUzmmKK1dNsHoz4Xvyyb",
  "key17": "3tUo4KqV2vBfGrhD2ZVGHv6L7D9RVWswAY3Y9wJqipTmTk2iqp5iLqxCxkeJGoRJWywefVmR3obtaU9coKqWLr96",
  "key18": "23MxDfL64QJRzJyiDhtaA9SuDvdTw6uMNgu86ykxfsbHLZpzjUVtCR4g1LMwscAvvLhNAmtJ2r3JTxtfRAABkgoi",
  "key19": "JxsPNEExNuykKajf6YYWYTCHJtMLb3mpygfry7WGfLHsKVZyk7LgEToHL5mkgQ3rwNaySXgL6xM5NSGn3uWPU1D",
  "key20": "XdhVsuAr158GB36UPhbxV5DvExLSkcvQ7sJg6kKDdbksi9PD7bpaqUjtzDzfDCqdemQqQ9WZWWt2ds9gAStrU2P",
  "key21": "4BJ2HVpLVYRMRsCTgwKEnCxTM4R12fjKKR2tSAXAztnAP5oVCuNPajxkomDkUk2DKX8WFHF5FttocU9MQDFE8fk",
  "key22": "5Zk2UBU6c8mtikdcnRNd5dfZXaTi4441nQXzXGqkhyrEKM3W76dL5WnoErRMeVH4PDAC9pMFYaJ3mUt8i9zT4dBR",
  "key23": "4kJLR3JiVAwgW1tLoUdR8C8FEH1kyo7E9yCtz2EsvTGCMp3ctxomoRVFygtVYu1j8NHf1n9xsjFURJWQi2KWvqoF",
  "key24": "wsga27XrQiwCwgFKC6AG35YzM48dqGUNhrTMyuyPVsiQfHALMBQDyV6Xyf31SndRrDD81yL3zmTrASUVw69jVmT",
  "key25": "2qUDBgPESc2PbKyDH9VTxHdSNb6e91ndpNK57SbSCg52HfmPLeeaSrsoibi5NtkuMjDNBhh3L3ZNqnRRWhJTbU8V",
  "key26": "5AGfoXwjyBP8Y5RoQcMmohqcqU65JwuJH2k25o6cfQaMJRZteqwDe2tyvwN7n4FjgDdbWgTPD42J3xpx6g5DZng5",
  "key27": "4JxsYNQY7c3dcjZPH8NK5hVKtJQisu7ocSFJCZmaRK7e8Rbmd8tRWooxj4ibF4BzbkwW6khVD8BdRRoFWowWH8yw",
  "key28": "VJi9wyZ6fLyPFZkhVJYLQjHFc6dUtBwxPHn1TDAzzsocVzHoGbqSehY3LYYHG3eMJ6h1W3UTsqpCFji8mNDLnDP",
  "key29": "4ipanhNjY34Yt5dHX7qyDALiRW1SyD2crx7ceFZgsGCR313LxcZx8xksNSL1xCqstXXUw7ZNwi6Wcfo4Ptzmtcbg",
  "key30": "4m4rnUKjkq88ZdPXDWT4jj2xdTLMiCab8eA6XFaaPpvMtHBwQg11UuTHz6iQUBrJcGN9Ruk1njyM3cLpHr4DMvHD",
  "key31": "caWj4HLyN8MUKHC9kmhw19dFso6ztQdz1Vy1dsBj7R6gDZ3GQrm2eh8vu85csJi4VBAe7ubiNi89w13T8ytwvsc",
  "key32": "28GNkMwPCNCwvdRKmn8KuPYVEgyDdaexJR71BdsjZEc8CoWzUpk6Mf9aoQUsQAjifkh68vnAnoTGG6TwNK1FUDTM",
  "key33": "3Lfj5p4SvTMkCTuimGT6zE4gRJ88uBYwAcykJj673223gEnhQh35nJSZttoNDLjWodq2NrANzrUDaLWF53VSN6Yy",
  "key34": "39hXMgTZudY45AWGfX7AKmD5fJ8L4Z5BQpU1n9nZnM5taDGEnQukroQG1fy3ymc9yeVRHWZAR38eSqU3wTjs1oNf",
  "key35": "2Jj36ALuAzKJHZobE7KziFXAz7L97iHHUVt6Zb5MdvF5nFFuJhjFydZoiizpNxr3AosXvmVmhtFteFQFxjz5DmHy",
  "key36": "c1u3WVdx6CQCZPMT9tZrNrHKp8VTBGwV29pXqamHAHJerTEGS6tUkKsPQGRRa7bQr7zZQ94Ywhh2TwF7AD6s9tD",
  "key37": "4qmHbMUkPREkjhM8oct9YAznrCvPoLYCKj74hUCAAvkgCAiEVQDce5Rub5Tw76HSGpgooymMxxmfUVjYsxRRk7Sy",
  "key38": "3o25yFYwnhuewrT1LtWZrUKQUStuqX9179Ti7ehy339kQLv8Zf3xnEjwWeJHJj9yokuMEe6s1zvFm37zZPY4Qo7C",
  "key39": "7SMRw8FYierz6gc9978xVuGQEkjKckR3o62LjrDVhWGu9P76m4D68dwxA8DARxuvD76NQCbaPbi63uGgg9fjVHN",
  "key40": "2MQBzhL9Yj1L87zw4RpXAmKX6BaQSVqdSUXutgiUmh291NaG6iiqD3nnwy7sY4Esa8XbviEXFzTBxL3cMXdEoxCG",
  "key41": "rqahMqnE1hQUnTNR1XrCeaCgDRr28un5uVMFKFs9zH5uoWy9eGApBg7hSQaAx6Ahy2crLhjLbajvtQxgEzv91FL",
  "key42": "ddeVFax4gKGphfQCqYrsKXdt9xprsReU3VNKyjni1QHx5G4LyDhoyRXKf6RMkVMAtMv1f83WfDhnQqEyhvudcge",
  "key43": "3AbPra3kaa5wcYgwQ4iQZrrRzLEuvgZKsz7pL7EiEvmduf9xBjshnQzVE4fCCSKUz99h7F77mTbM2FBFGxnZ5MdV",
  "key44": "5dqvjqrE8A3G9x7ybDv4aLKyzPPkVPXR8mDro6oBQVoC282so3mRF9j7tRsYo4XKyzw2uxwP5Zk4KG7GNqJDx5Ky",
  "key45": "3E9fEBR3eQgQAvCnQt3P9TBjjF964GrzfUQXiYFRstqtBMcKvrxyjDoyxM9u8mSyhkMqw5aMefJCHJDWZsg34XDL",
  "key46": "4HdLbvaGyzbz8Xmvg6GzxeGC1MMKy3gt6YzVVy9Uv2j6QDFYjKXAG49o6a8VA1b2QKArk6m3oX7NrWvfayncFqbh",
  "key47": "5t52LW6sdQbCBXPmzGRoKTTS8UdGsVrJLskddXcu7F9UxUhKmRJ2CRJqxyTEnCVrzWPFqzJ51L4Q9EQ6kmyeBgjo",
  "key48": "3yjxwFXN9azqARLvb8ecMsM6sUzJuTiLBDcg3DAnrS1ZCD3FnwSHU5NW62MFpHgdhWqUsRpMN5b9a1PtveLuNEr3",
  "key49": "625dMMfaDUZUE9AuPcPK4iuxm5N3BA2c4KbgQGUoBycv8EnUgSrwek4GLp9PiiAShUwzhbHquWSk4vrzrCpRz1va"
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
