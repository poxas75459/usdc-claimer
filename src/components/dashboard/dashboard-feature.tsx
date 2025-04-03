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
    "5VNCdvea4N7EPGZkkwJwChPJRdXoo7DTBL91BocSVUJoFjxfmbMSfSMJsP4Yqt1qZMCro4nPPb31CgWcUDeo6VkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RW14maxA41mrCShMdyyz7Kn6TiYnuhc9PErEKehiGgrq1DDqhMwXXqLbrh44mrieCcps1ftHDpqajmdPSvWfB8D",
  "key1": "4ke4ux88uoPHgMmk2Eiu4poMiZsQVPz2RJ5niqsw6ga9ST2DWGxFcb5uwHu5jTxDK6BPELqSPowDb217Vhqrpy27",
  "key2": "5V4vbfhhizf8WY3aVKkLpVJyEWyF7RpTLXdhKdb5xXH28iQ6EW89C89a4VF3qX3KdbjdPFoteoyGwNkWmRSZvH8c",
  "key3": "58a8YjF7rhamgDFBqfvAu52ua9BTzrf8QpTUH2GmoywvRjM3ddm5VXivcF5G9zmk9F47uRii6NAYQNfdaehm9vWE",
  "key4": "2HK3GLugVmf7wUxMLgzFu5aVMeHs3B4LBjGoyqf8S5zNhWc1CwaE7GdazqnX6cc8qUusUymicjdAM9oJ3M4crHdU",
  "key5": "4yCpsEs5rhSVGLd9oEd8Av3q52mGNpNyuwwLqi9Ms9WeSM33JkSPFewYjV42HdZHyCjxPbSZbkLoNxXDrxHYVTGn",
  "key6": "2xEctYVysPYWkbXMiQrGyt444DLJGPKhc7vzuBPHy138cozbXPifwqp3M5z4BfpUY7Di8hfy8bWiTM3xCK3xuLZm",
  "key7": "2joJtnz4D4tEewoQnCs2YD8JhKD9ZDhwHgm1hhZTjxeBD7Fn9yZQnkrAYUrn6pEaDaB4P1B9QdpiSvf6yj7b7YAY",
  "key8": "28iuV8DXjKCJjY4Jbs61WnDx2gePbbXJksXBBh7hKHt8SPb7izeLeCnCuc67iynmYhRcuNSmt6uwntzEAbpXbg4K",
  "key9": "3FfhW5AAcqfBsFkSWUz7HTijVqv5torKkUXE1LXvwh2wwAv1V5ADMr69PXWh1dFWmAd72M8NRamgNgCYNtRpn2jG",
  "key10": "66zMXB9YxpvzDE1NH1HZH3jKBL6CF2kjFBuLUjxfYgWcWaAKXugofQfDHQo8tFeYte7EVwNKMYZKXqu9WohWX29c",
  "key11": "4H1hoF4RnYWKtrii7H7Ruj1EanHxfuZZMW6SDv5xG2jkzauYNHtN3JM3JJ495YrDkcw14LG4sZio94aFDevhSHFi",
  "key12": "4iFXYXDLJS6DX3nhMr4d3wd9HED6Ah3J45YELyqTTd1ayA7DvQZ3UWQfwX8oKvF69pPEQXdrPuhWDEMcb6TANm96",
  "key13": "3CYbDZTUsDQq8vSauR6pSA9Zr3gWZEBV6bktDbFEUweKiYLP6nTKfUTB8PPVMUHPyAR7ZfaDA6wK12QFgmT2mfUs",
  "key14": "JCtQnuiqfKD5XX6pEv38NVznSaGVe2LK7acRBAQqHwopb2DrWDDqcVu2ZEhm2zvRcVnEnxKYb2gf4tdL9xKgr34",
  "key15": "3CNNddpV5yKUuDfkWJUhiru51GN3dCFeYa2kvAdbFADRpLDrXHaAssjePAWNkzeF8CGoRUaAhwvvfMvnBkUce8JG",
  "key16": "5ugNNAaJZjjEaJVyyM7cYiJy73xcbBr6B7avynWWPGYvi9zxV6L5n8EpwZaRA1Xj8kNjbHWFg71xHmht4wXordJM",
  "key17": "2qAQM7FbiYrY3yEBVEkyCLjR81nydR21GaE2QyKU5qEdBUpkYdXfJrp29xjoSfMdXAkK4Rh14o3bUGhgGQb7BGMu",
  "key18": "59v9rK3sdC6xvrWaoDoAwepejn7vpVr9tQZshPDTch3G3PGsSEM2m6ekzSmTHVJmguqgZCzkXuVpdcCyAyxq5MHj",
  "key19": "PPLanHQS17it8xLBt3h8zbhbUeE4VcJCJeHNRW9jdNEPNmpCKzNwFMgpAqwjBSJ7TUbCbiNLcDc9CKro2ZDKZYy",
  "key20": "4mupYK42aex9PxeqzqLDpXeGK6govohtd38ANGH5AipdUYYPUP2XzRTbAw9m1QiobUdYbELva5zRA75BjA6BSPiv",
  "key21": "5WBcLVvoGuUHsNeAEbxqBtCkh6C1PiamAQU1soBchTtjfDUj26aBQSEbZghPtK6wGdazcn22M2q2vKwutASDEmgt",
  "key22": "41UJAE35gEESBraifdneLMTGjnXyJgjD8rfN3NZk8ufu6246b11LAm3GSL3LarANcEaarnm7xnKRW5jic1PuF6sd",
  "key23": "5jsmPeyexFjurDSGF5eo9sSNWrMjtSAsX6vVMujVXuDhKgFWXKX8y3JqdacSgaDPuYZGDme9ZnDtZbEizX2WvwYs",
  "key24": "gKgZLN9n6XRwTZBaT8ka2hSv4eKgJPGdyzRE7TZhogNB5zSEXuFJFxV35JYETNoEzo62R5FiqriEMqSau1CRcyt",
  "key25": "53yXzF4kgzzYXeqnFxHY4sXsoTeauV2eJvG5F62uXDeLJT9bqgYEWAS26KMgKT8aJL5w4Lqg3Mb1GaWAt4khsBa9",
  "key26": "btmL1hiHYPjy3mSY8mNVYM7zXngtyaVinscn2FCKWiiJaLqsUWogsVhMYaX7oZXur4P1q5jxX4CCnrfrcnrncNA",
  "key27": "mJTS8p7aT6YqCNZqg4k7mVZGPZTJHiCatkWLqwVf2hwKB2c4tJUn3Xp67T7U9sHG6XeBLFSptgmNk3JdqXjs1ER",
  "key28": "zp8gKv5cWZQAGfEXA83rA2PTaJevNAHgyU15f8jiqBmyrRV7Vc1BB5TTRZ3iS6UHMVrx38ACcKQ6C66sQzaw7nb",
  "key29": "2ibKkRyrqhFzmSeKyhv8Bv4M1Wc6GPCFQ3rDcVaR73cCojLJEqDwXvnTCZhkMvH7Vjr5JTWKoDZwHPRJUfazsh6P",
  "key30": "4bHG1c4JB7tNWicFUHL2Ey9yTFQkKV2SpzsNx4L8p7e5zvL3edA5WEkETKbGTBrzFrmVGXZPFLYLPp73Wx1K5evs",
  "key31": "3H6PkskZeAJ6cWdoo68GzemsGf639Vg9pGy5SyrcAhLqkxd48KjhFoy41wRtzSVCtvvCaW8J53CiVRCPk4z59A3L",
  "key32": "3E4CsAqDiZpTHYskRZTG8EAJfki1BWGnh74fD9XateepkaPiVMewpj3StPyXbfS3WbV8MxoDmzZfcHuXC1jYWax2",
  "key33": "62YevU4Mkg6q9Ma5YHwW8WDEvZ4akdgHLG4dUP1JyStfTxKUqyGhJz7gVReB2j4Ba8SGNENqjgBHRgqgUuTBMic2",
  "key34": "dJCHHx2znfQGeuhkGwWkHh9WJEqcwkQ5tpJouNFbJPqKLCH136wP4VuYtTi1CegV27yX7ADCoFKf1ZXyXJEow1Q",
  "key35": "4QQAvEVATFK97pqUbVKcfMtyZjNm66AjarNS33w1uPrxUZcxTKs5UfG9VGaXe24MnTKXKKqWz1MmWkKxxwFEoY4Y",
  "key36": "4o38t3beYRsWoeq4e3q8fCxdWPh6gipr644i5PFenHEPrzPPAprk76HRx3zHScn6U1pPDrHMuXqrEkM9G6eCVjMB",
  "key37": "2iH2qZhNQUxKEVf3fUFo4Bnnt4wSFTigxY2ukxNHpkUdtRYnAZNsA4sc3FDVHHcMdppwCY1BrSbZdfSPcbvhK4uQ",
  "key38": "EL8DJX858LT37o32NyFnmcUUrtxUi2bcJ5nGFpgeR1df9AXMfKqddJ3biqUdWCxgwiB3mHrHTW3Sihho4jt3CAp",
  "key39": "Y1EqqdfftyDbnKCzPzWCiSxuRqRBHi7L7qEL6nBEe8Yu3cTJAoLWxwRgH2BRnactsqCGJhsE7VGi8DaAMN8p8ce",
  "key40": "3x63n4czaarBQAiJZFbSxrDnTNrumZUSQfVynn2Spde6nBubBEZcTJpjMFUXuBGZhfU6rkCFP1EPFTFZtJPVmqR2",
  "key41": "UU6xQN4jhVHjVKGtpK6DVzhLXxHKVxA4zrhWu2pJrpcXBGU5T8VUjvyv4sjP4Vd2eJQDsX3HyD4euAdxbpPZgG5",
  "key42": "4xyux1uvTsbE6gqUov6EpFzKjsUxGxXhgjLAJCGxKiMFx2abR1PrPNgEmwzq1dqfcHBPqJ4WfLJW1dQ9dUNeT7Hk",
  "key43": "4RXvRoaCn65bW3MwwkrW45i8uSU969Mzqkm5KmZ8eLqT9ky8N1SqZKv4J7WKq5VPnXmd5oVZM4YBHcMMPRrNdK8W",
  "key44": "3ZqKuM9aiSmxzbzqCNSKtoj2Ryj2wQXad1M3bVfXtid5gRG6G6BnHwhpR6EWiQkNm9JQpULMoK3CnQT5X3A8gBG",
  "key45": "iEo2SjHt9iyc3HGh5knTk9stvRTb6HSSyCwQ7WjS2xVLwz8GMbR7E8FdaZqLi6pWKGps3bWRNkw24DQk7KdH4g6",
  "key46": "2Sr8oPjDufRwF2ta1AQmAWhj9cHcP5R8hv4mxyHiZgYnutE7yQDDp5VRtka52wpKZVjgMcnzjjSakA3dRLHVy1gW"
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
