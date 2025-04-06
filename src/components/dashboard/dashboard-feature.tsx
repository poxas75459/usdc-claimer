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
    "3MUnRck5ZNX2iE1zhxgkxVQBBUpHAFBPE5mEbCp5jCDDBuFYbqYW7uNwbsKd8noPHe4itvaXZBTdKxL8bfNQA7WX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23FQCejEVBzH27vte8qFN5mwJ6STgEv28tp9ei8VcwAFAo4LEHqPtTUdiRQVQs5rSjjH95tGToN6dj23ncxRxzHB",
  "key1": "2jHGgynUXfUuGpznRpj2WGK3691D1KF3wwF8kK46gCV8yrzLiHnqS2vFKJ2j5nzhEG5UAJwHs18t1qkVT7pRoZ1G",
  "key2": "2Q4UbzvPMk6H5A4rw4SQdp2ZTSMXRjniUmF3MrMcCL4VWQP9FeUikowAJqVv482cUf1abRsViR2L3Lt88h2mAxpN",
  "key3": "1bZtBCrtF1FrX9HEgDRaR6f6Q6tpmge4hpCL3J3D8bLxU4DU1tTthuo2Q4NLHX4wupsCFat9U7HVYriCTAFSvxU",
  "key4": "4LJ4Wnvxccn2XSXURYrNTGtPErD8YuEbDzuAyqpXnfJtEJjLy22ajt5s5L1seGbcV7x7okCYqSXoeK6VbbvRwjPW",
  "key5": "5LfvQVjxFkBc1bjuBaik9pDRr2tC17RiCtCSakrpkXjFxdhbVpcDNexrAFkgEGNg7dDyp5167hBJGYYJxvL8zboS",
  "key6": "26imJfEzcTNHvtkSrKGvBnn97Yx8AHdEwnJNDq1ikp1mXi13PxPq2j1JHZ6isUB2Ro2jCUqH78N7mR7gMenMRx8j",
  "key7": "4uNV6UxSz3rr7nbc4ZJfncdZS9yZWfJqab9oWFErU5FBEHPiZuW1tuf6E2Edkr4W26XFWjYvpcrcWNw41wBs1Ld6",
  "key8": "xinnSgFEEBJRvRVAno3YH15Tfw8YYUSgK1gWhhwNTUNEj7ez9o6P8A3KmjdscHfEcdPP8Zos3kHbsjuSe4tTZPr",
  "key9": "MckmXeVea3QPcudRZiR8TKPvvLJR5zx243xn1GcKJUbSQ7bFfbRCD7u3wFH2BYsAesVceq4x7xoKC7jKwWaGQ64",
  "key10": "3VwEFCL2xzq3DJnyZwwBVPFRDEF6sPmJS9E2kWqBXUakxWA8eWHYKTkEda9c7CMYcsGvCK14x3Xbfv9UiVnmBY1r",
  "key11": "4eStHmdq3tM2yQ6wgyHK4ZKQgkM4eyKSqEav8kgsSHyotYMbrjBwHg9xtFYVPZuccFMakfmVSu91VwztGvj9pHBr",
  "key12": "2oBMBh4XYpoSqEm2u5GFT5E3R1L75hPk5imy8bwMXzskQS5iwFyKjjGT67PUsEefy8kYk1JzPAtsVEtzUYFA1CXn",
  "key13": "24hf1x6ZnsRgZUz5BZYFjhoS5Cev4kcE3X2mTmCPYa5gZfiuK99Yw2wszuYij9RQbyjjpykZXjSxJab3qMqSixCT",
  "key14": "4j6G33DocgFTVMv1fEWM32ENprSkZXT5rZKmWVe3Yf46xiwUZhFgCw2nsDwSrX9TDrNJ76poUoqwJfMVLppouHom",
  "key15": "4tsfT8cSRyqWiiPHUSBRT9ubQLfjfAAord4pMNZbiriYJ3WwwH3F3owxHmSkABessWQ2eTvJjtYkjqKrAgBeS7HN",
  "key16": "2frpTeHhdXtK75twMxLKYZUsPTL4EAFjWgaBNUhriHEUAJ6DNQg7DbWNHD9PRmgB7ZdGhzaBFpz7w1opuo1i7zbS",
  "key17": "5ViFZP1wASXHtExpn98ABh1d9LWbPq147q6rNua167YJeEVHQpcZtmjdSyEY1iUjVW1fQH39Vfus4LciN669qnAT",
  "key18": "5Y3XG2zDNdp9nLBummxHQjA7srgk8myTcoV5hatEEkNAnvockRaaYY6XzKKoqJ2shsdXYUbqCiLgEPyT926FqkPr",
  "key19": "27nZsRUew2g3PQatwJ6gJTviz7zM594CQsUQYdRRaiDHVaAFiSLEsTMwymXEjC2EVDQBDrStdzCiYprJcRhXxG3W",
  "key20": "SvSs7SpWV4Upv1gXQGbHSjfNTVm3VdbEuj8HDT72Y64Dw2XVuLHBHNtRSpQvEjd3fq5ZLgip1jPxGNZqXchYp5T",
  "key21": "4H6u4vkhu4xsAJgpA3qYDcGhcp13am6zyDFyqdjoFBrzWtGPHiNNaUPmCoPkPF9QRKVS7tyKYam21nJgmcYd5NFA",
  "key22": "55mJJGEYWRzbmXp4mBiHDV12Cyb8ovdumBzSyKYT8jAhzid7GPD4X6gDYc8DBVbCsicnYFK8FQwcDxmmcA5vTp2H",
  "key23": "629mTE7RiqVuS8jqdN7NqUR7FAMTnshRj2SPZWLo36FsQfkdudPjJy2aphrQrvNaPec42k7jEPSBrsMc7AqfHHTD",
  "key24": "4TESHSRbPNzBBPaxprMVfS1W5VZ8EJVCfG2rmqyaSMgRK29w7sYcLVtz4N33GnFSfyYatgvPv4ozupBFFvHMYY4F",
  "key25": "5HNxZWR9H92G1fFD4mYBs1WERa4F9SAoJ4B64BaA9Xhi57NpJhTVsh9kXgBbkHpJFJUcmQ2g9CbQZRUT4xFQ1SDX",
  "key26": "4gH9i8RGbEy3XUgyQAQckyybzFAL11y2SihHYRkR3uH7YaDtXaAZcbf6ysMeCCjVQnYSzTQpRUVkxegEdGCcnURA",
  "key27": "46sAS1EjhTPHh3Gz77mtNN2UNHTk7ueFd71etZj2oy73FNwVJ8kqivkUKVUanykZuSwtboncHABhztGwQ6ZaUstB",
  "key28": "5g7MzxeGmU6xxWCtHPzS3iVjMsjrNTUBfshczrTNu1PSPo3z4CDwououAaesEZ8t8V2bGJZhL155imjeDNn1vgR6",
  "key29": "igCvZ9w2fgV9wYcT18SaeyTjgFx2Ca3pvpPWQBjMwgjaqTX9nCStXvtbEhwrXWBiVrQYtij1w9deG53xJabHnjo",
  "key30": "3BLsn7kGbWpE5qvnCEwV5YFTRWxUAHs6rhWmKaApBF9cfpXp2NpWegJdTBRr6ZZfXbLUXUKvLoautPeNhC9SsmGW",
  "key31": "SAH7DeqyU2a6JHQUwVDhos4UPgxquYALFfkTn3huwkpH1YMkF1y5ohoAXmvar2ptF5D51ZGWqCfGFGYXQ65hYnv",
  "key32": "9G23iiSjmQHmkUic8D8tCTLjVXPp7zD8KGfCPCudfmry197fxNtxkhjGhG3ucaLDfoEB8xtZ8uh1w6VdweAmvyU",
  "key33": "5QkQj91bqvDbywUk9MhZUS8yTqEBJbrtW9N4LCLgd1jL2KKJbU1W5peMXgUjhDm6garrq5kKxzuKeXM36ivXuuA9",
  "key34": "3MfZ9bNoCYG5cPHVoBuLqoLvJjuS8sthcczAG3LMQUWpRfLBpRH5VDeeuMwMKKcZWaMxJouH36RiL3SumZWDf6Ke",
  "key35": "3Q58VAb7xGn2kkWwQgqpdGnpE4iYF4ddPKZvEifKv5oQCAHgBpo3aJkfybFm5KbZ5j3t2rwbSK62N345Fctd8JH",
  "key36": "2bmZn7ECbCKoKZsXTuQRN74jTee3oL5gSjbGq7czSfmjQV1dYTXmSSQUSXrdngCdnaoNviLcrQvESrmoVPupCgtL",
  "key37": "41TA9qN4drZEiEkJDvf8R3mLbVFkXB7oWGBPbuc7CUcQE9FSe5xnHX7idAomn7jeavBciQKtqgRyauXYyFzUsve9",
  "key38": "46xjWSZZSs3rojvhHG45qp3PovZ3KcXUKmJJv1rNH4DrFfqDy6z5xwFJvWUHDQVnK7XKxwiyDVchnyAGmWhmg16e",
  "key39": "aNytxQ2dRj4SPEdZupzUzU9wnf2oACvmTWYzyn7ZoppVhEqa1bd8ze7ZkKPJhZpLSsKB7mmcJHUCU9JLHsHSvFU",
  "key40": "4y1F1d7nEUuftkaHspSn8T3ezy9wf9UBXDEy1EsaDGdzikz5Krp8oRDyGzctKh76w1bwdwuDcUabqdUQhtipFV3Q",
  "key41": "4tZCdxZcyLWnUF5t3LMp6L3nnqWHUEXVWu8DxsJJXPVfJCEx4ixL2GbPJ4YLHJ4DUARM9Vu9EiBY1EK3rwKRU7Zo",
  "key42": "ad3kEW1VFnUx2TWY2NJVsCwUjLkdoB7ysxsyJbe6d1XMK6LbgrFZ99CgYnhxZyhrjjhb3zT3rdvNKcUJmBuL8zj",
  "key43": "48qfanK84ZtGonYgesM3YmcKdHwPngLbzYLWUWbt4TVqWwytgBR185KztKFBpozPa3WnqNDb98fwuxzbHbkyLHv9",
  "key44": "57fDiRCG7iwuv2CczUPNcHwkon8HesCbGWQmgUwTyrE2rbnF5ksmJVWcTCnvXTmMYWRzux1Dt6YfGEWytK6HJxV2",
  "key45": "4oeAihsEaHow656ib558uJ4V5BXje1asqKh6j6r7RTCfDt2qpjRTqMT76iDEGCdPUB2CEj24k8yd6YEyWWcSQfY3",
  "key46": "66RW4QDf2V2YKybyxGYQ3HDtaMhbbLF79iSss9kREsV4qin41GzkFiKhMV8HjQ6RiGn1gyskJ4Zxor1ACUXoiozX",
  "key47": "Mo1rU6vLQnu5qZM5utyN93hUbRtWV6XWpshkocAMxj6LciTjnmgHYb3Kos59inZqfNEt6ax3jj31Q7CiGHeGyHe"
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
