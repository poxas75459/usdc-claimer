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
    "2Z9MFyJMoXDAPonUgmqaCT3tyNeGzRH77n2wmVC4BgzsJNGKbTG2n5ZNaob5hvJeKdE7MrbcSjq3CZ9gRmiyyNxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2seGBBJXpDcVjZEhZSK7UhwjgYzvG5SWUh8w7QpPze1BMFoR9s3Pdriua9U9UBiWRQ3hZFYj6emhsBR9rHgTz3wE",
  "key1": "9X8zRiGKem1aoXVdii3Kqr8fPSzwRXMZmgYiJMwqhKpRLKvnMeP6GnsAFVpFcSjZ9mRvLfaB6Wxa5dXEumV1kAm",
  "key2": "5STfHsSwmVzN39VGfV1dqpxbj5iyGCeqHFtUDqdpjbVAxgmP7DiApcoaSz1sttRV14xnqEVWanZzGRcaKYaiqRtF",
  "key3": "ugECkcx5FVVPC52dLSp5whEGMVLLPZ7pDygiVLjV2GWp6qp8pQgddMeQiYNCDqPDetT13J1LDQoGbCoXDSS67hH",
  "key4": "2T7QDiY8jNZMSmaoGFSYg89K9aMze9MKMTTNPDGAHwvHMsCNJLALGCYbSMTgZvk6q6GAXoBeUKBnP2eJawuYyRmV",
  "key5": "56pFNfqV3fqZiN7D965yp1PEA3krKrBMK9qStLwHNkRxrc1dy2aK37f7xvWAe4J1zKzojnzv9xga9WvLUyXrU8wq",
  "key6": "42SZnra2mkDA6aoHzoNnPCYHJ5sjuwx8f1QzcVZswGquo3U7RwDt86GMrNBLCSoEdLHGvPWcKYdcBLYGuHx1vgoa",
  "key7": "U8cqyeViRqgsPtjVz4YZjeMqXiPqZqZtvFmjzAmMcJo31G7snbSi6juEXZf3S888k38TQQ51gAN1ZSFGoHebi7K",
  "key8": "58Tj8fBMsHVdb9u83j4iQtPhSRh34fThruMxzchhTSHb5gd95ev1rgbBc6zvcU6VLD1DyU8LGATqzAyRZgEUHvu8",
  "key9": "5BoHcYPCAqXPUDYNjznZg3p2pXGJ2GGJcmrAX89TUV6jw45UYPR31121HBkfD8CJeuxawYJj7NUfj4bmxmQw4qXb",
  "key10": "2kxpw2459mEKMpUgcWmmRRpWptnuTge64yMT9zRegmzRXEVTf1Qr1u4FBNVndC1pT1wkyFM6FiL2xD3bGzEmDKKW",
  "key11": "4Yfyr8Wv45JHe9Yyixw5tUFsuCxA5gYpWqFCrCi5ZbUTqeqZiE8bevnjtZE7kGW8VyaXWd6DzWw9U2A7sD9Tqz1",
  "key12": "PjH4mMUz1wtMmeJpzQkpSgBRwVtk7enaeUkFYVvGs1mxwkK9nMRddRwzHf2UTDhA5YqULoZeYBfG9zoinm1ccnT",
  "key13": "41DWD7LaiXLzax7Lh6zP7tCKhd1PwKYSoAZE6smfDPYc1A9gLd8cwTjvD6WLHD5tKYi92ep1ns5KyNqcUyZUg38b",
  "key14": "67gbq5ZroRsNZp3T2GPRM9GH5wq8L7ujdcahjaDDBfreSgKVYPSE3LAnURm14MAe6qVCowLfhQc4W9PW7g1QUcJX",
  "key15": "e2ogS6Ns6miYmhbRN3gLAJJjncdhFLFg72b5LbZwDa2Yu2jgV2LXmq9o767BTNavny9w9vg5MRZfA4on32yEJSw",
  "key16": "DMCWaBB21zFCkGj8CJRgpiyerDBqv9XcxqJi9nSMn4gQHDUWUZLqkBA1AC6sdtmpDLbrzVhhn8aSaBZPwkEWrwJ",
  "key17": "AJmUuzifr1o9y4gV4Sazsti6cCY2p6gNUS1C5saKq3vTugx5dTYzh17jL4PicdthGg4QTUK3buqnJrU46sfBFSD",
  "key18": "5ii1faBqysC1D3wLMi8GBThBPhjpwZvAKgCR4dqn8h6SPp28jgossMSKWJstZfuKXSqk4QUhQBCiinUWQFXi1Hyg",
  "key19": "2fpVMVAZ9JYQbMAi2tN3xRdcS8FgUgwCjqskzNdjFtZejhrN7htpfLnzm4cA1nThcSDHzJX8inxsnqtqzRjwrSc6",
  "key20": "4ztm5Qvz2fzs7FfV9pQK8Q6PmK64iXJw8YtV8HuKrFgdDchR5qgJMg19EjBkHFFDbB1p631cxAB8Qf7UXB8w856B",
  "key21": "4AQDRF512KXQe8U6XQXwUHEW8d6GddxTim4nnQeRMPY8PpHHruNS5M5Jd5fGBuLQfkKmyYP34SVYDeFntLvt6rxw",
  "key22": "4Za7vzWbdvESxmwJ5y8g4K8dCXcMTJUrWWBefQVrDH6nTLbdMV6fJpb6iE5aW5YZDKVnKC2RqxdjJ4c7UFrP1CaE",
  "key23": "3brevrgQdPxr9sKvJeBjZi8a6tRSi5Q59dCo2BBMoX7DQG2D9qupakmtBoZk69hqoRP8rhB2nFGVT7jFmeqCdqdr",
  "key24": "2f3k2CXtBXEEuBxQVHigdKuMEp1nDS27yTMEEwZ38VhNBQQMfbsnAXFWDwwNFJeFokLdMkZKRUtVJSdXhss3mZ3d",
  "key25": "8bZMQdsHeZ5qRt2y94Sb91ArzEzjVCswn4DeQm6kn6zodEE1DFPJuu9nRFidwtqzMKzsWuPRcRPkCqqEBcqFkQx",
  "key26": "4EptQzA8Vw5f9b48ZWA7XRt5ZBBMfpBisg6MrsWXg3bGCUDckG4evx3boLrgqGn9bwELK5xnAJxWEyk13NmKHSMR",
  "key27": "4UrphiLye8G1somAEdr1XMrnLL7qvc8ARJgAoDK7pTzZWaNmtz7KqZ4KuZkdmo3uyMmbv7MhPqvUzpge1CpP9E7w",
  "key28": "SF8cSdMsPueNabnDjPTU3UsnvP3T6uGdwXC2bKrgrzn8U1dLH83pEc6EWumZGmzyr2m3CHVWcbUwuALsVQP8Ahm",
  "key29": "2fr7qXvhQJhAU1TueJsawHSUvjHPuH7SyBbggXGwxDFpL1sVy7BrtA6Y81UE7a1yphhXgHfHbqtM3x8rMbJiHaqD",
  "key30": "3co9qCdwRrVvVbnHBJ9RJ8A5HvLEFgu3TWzi2sxcxpt1PjZk7SoGo24KCZS1NVf7H1u1XZc8dkkjPsDZ7ifHg63i",
  "key31": "4dzynawyFopKUk9NEnVc1v6mrNtyzb1a9cHrZW3p9Eqk13J3S4ih27c1pcD4mA3VhCTBoHty9aAx2gXmVzKE3zrG",
  "key32": "4DthWM9NRLmzQuvnnRjqs1ra3gA8KAF672B79ysQLb5DXvCKaXzPFmgsb9DMgt4k6qnUJ2pngCBgPpaMqiZMM1Rr",
  "key33": "59qQGKwFsGJwXr4pccBhLuowjwC1mgAdrkpWByxJCQZiCy4U7yQ5axK7XHiDdUvqgNTHgJc6bsmTwWbKyTLF5deZ",
  "key34": "3zbqTaKY74pPk2FappKTuD5uQkojeKy2w92M8pkZUDWLnPuAJ7o7FcJDFqDjfmpNhJrYTbc4eKhFjxMp5j71V25E",
  "key35": "4FKPtcJ8VPEdekQgDyv5sWX3FUNmwXwQ41gn9RKnB92EJd6BGUDDALJTRyZqCsT5Z5MWA1wQRuu38a8wGYduhbvQ",
  "key36": "T2wJjEkWz6j44uwK38byiHDNJZxM3pdjAWbYaZg9dPzoRV1KYSun9MBK1Bhqf92H7jbgYK2zvWWbARdbekqNJfb",
  "key37": "2HwhnTJ9qd56io7MfZxAiDQwRbAwxcJBFSTZP5AwvjAL47NogFX14tP2Burybq72NkGS6uCvjxq5aBFVKobmriuA",
  "key38": "5jHRZ6etmAan8tkBaiDPiwEUwGTqje1e1Wa2veP2YGJtAqmDVTJUVjv4P4Em26D1hRmcdt73tviTobWKmKx16KuL",
  "key39": "g64fwvu5vfkqgXuyvmJu8Wi9fcEPkaWAPuPa6KkzzK8wZegURj2WuGKV5kU2ZPkCsDafUFEWSrLCSPz3BebFkaW",
  "key40": "2om58djpb5M74t3YNpbpNeVsh6CUz29jnzRVUqASzJ2bJdQ2NWeGK1LrGBUiVRWfr56p9YXoWTtzE4hKfdiAKiL1",
  "key41": "4Jbe6ymZYBmysXnS992oq9qDJtJGYtLYsG6DuqM5bSsPYkhekfvyQvJc1bHpCyAyyzUD2WgbTtAWpXVWjbwBZiao",
  "key42": "38LKmgH9GS7jTAgbyRKsXFQiVbAPEKyv4eHuU25btMZuWBBFcsCZwgzKZK9vaqyUrW997MPB5VTKDCS6GtkZbfZ9",
  "key43": "57fHu3NoowZbATk4E4RNdj3VwqX9dJZ7UKR3QQTCh21goaZCyUAXm4XgT5xMVaDeQjnVvPQ1ijCUd7aymk1iiumc",
  "key44": "4bkCAREbB4uEuvz2evbuaFZMqrehzLquREhpE6d2DeK2RbbLTyDE6SkLq9f8ryif3xMycNgpwDSSxpyDXCWXpHuf",
  "key45": "4WyQsQJr672utDVZiGpsGDStW2Bx7i1RE6doTNcpFxe8kEvFH4TLXEFZXGw894kfg69jC3R1oru8pL8B75UakZyW",
  "key46": "4mEJGRdfsHbTFDdfhsx377gekiTc1JErTyjxeGVwrsHANq21P55ATxGkpHFyMZBXBh5e5QEYWH4mvohjAJ2KBSoL",
  "key47": "W3qUdZMgTZVWq1H3dY8YMQ4juF4UQXgfC7Q69GBYjpDXMyTW8ZUcHqeTDmDMvRxcC4L9ofqacHeJJT73xggetuG"
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
