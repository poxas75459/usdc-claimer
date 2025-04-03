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
    "4oFiHH3Jc85cwGMhMajyfsUkRNm8nJqMBkDd6yzrsa1bGNLe87JgijGcsWwBqFZDm9ZSAHTzxgw8oXFt22Jkp6Ra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hm6FcPT9KtAnrNKowy9fX1jLDFEx1gbRrMX948ntC8mdDUBvhr7oqhBqqYZMfsX4cHcVWrzkfyDpa7kv4CNKMys",
  "key1": "4MyZpQVBnvPRmDky21VNmYmh5bGGkRr1B88Fdzcp1i22wPafBDdh71VUf6yFAHvtbzY1NUwACZo2T7R5WECzAcxR",
  "key2": "4fgwL2HFZMKd3SdN1q8iMURQeSiQBHx9Rkm7vufZvruiGZnBa8zGwQCmxd6QLnrPkL7iBw2EHUZz2uZc3PXZiybf",
  "key3": "Kk2SH7tNp9oCnNdws13R5siGfiurqo3s7Z9z7NyPk6iJV6acXWjLdDCwdm4HpNZUhTbk679ki9mMQSwpZEPg58U",
  "key4": "2EHBXqRUbPvZCSmTfi9ffGKstHU44UveBZDSD1mDVPb1aUbvZVfBXQ7LTgutYGxV9imVsn9ge1cB6DASvvBoDSNU",
  "key5": "5UNkch813ML66p6DZLGjHnN2n8AD96x11AdB4Gb75TZym3vLT99HG4espq3X826eVCEkJrCMkv9SJ9T1d32kWW2k",
  "key6": "2hvfN6i3WpkATwQvndZMmxUfK4gCMkAhfekKaw1RURcLSbBvvMCrsxzCJqQeobm5KD4eC5sQUX3zyAiqca9Kr5VE",
  "key7": "4kPzQ7zrEFTq5tHqJtp7kdH4PoXXRVkQde1mAFLyGYWRKADKHYjxKVnZTfa5jwjhnaiSWw4jhrhNyfXXXYVsrsBn",
  "key8": "yoYUSN6Bf1dFLSPduGRpX7Go2XYjhXWoH4VkYz9iNAz6qBAWDpAMCZJsJsQPYd5jtvweFoH6usew8V6hsBsEa13",
  "key9": "3dgKSFGhs1Nw3Z1qH6UQFywBqdTbvo8XDcwUkwYYGi2Hw74tK7N4UFTL1N6MPxKCG2B8JdUaMbszXcoSUG5gHjvg",
  "key10": "41xzWKggqHDGc1T7dXmsMDJCcHjygZRU7Fi1kdTn3nh9ZaJ9VaMzaJVScCBfUFCNCSraAwdnBFTAVxmwSgSZZj5z",
  "key11": "JH6JVXBM2bMQBz5rpXA9sDDCGib7ndidnXfB6CkGxvt3ydwE9NTjDVNk1LYkEgWugk5st42emCMspADdgzYk8At",
  "key12": "2ib9FLNA9dKH9QNtRg68TaR94rU8JQwcoyyPHRKFSK7jifWgSGLtFVNvZYpZYqxDR8SqaUa6Wb5GHKxDiwtcRcfP",
  "key13": "3eZf6JpDaWPMSaAoj12Piop3KPVqMf7jhX5ddQTmxDmiLvQHfhXcrwQ3zTSge9GZTU3MwZaczk37pxDC2NVSMNg2",
  "key14": "7RQkwAkF6Qj1WQc2HQMnYN7JeuTSuce9aXbHbNDs5tuCAiuajTK7K94LCCcnp9sPEPHZ8VqHKK41UAXTWVjZKrT",
  "key15": "23xE58qpVdpv4a6u6hTMpBMepy8yhtKXGKs6TrkUdrrutHM7LQAuqKdm4Lv9Lrtkg8236XzmuGsPZuVvwnnVkA4K",
  "key16": "52arJa3Z5yoGJgAwz3Acd6vv2TmzvYGj3t5MFJ2J4fymhf9J5EZw4Bew9oXGyN6x55NdFWNqMWe6owqLVBmCLWpL",
  "key17": "4nw71Gy8bxx1VQj9zRXZ5sbUSursA5BZ69UVx1MkX3yd9WENhevMmNLWNXkLHSQEdZNaTmLRtSuPMvGxC2UZCkaA",
  "key18": "4DDShQGfrBVCcfXnAb4CH5RTcTxtJDQiCmkgrZS626Rr6fGDZeyv1ZdTXedXCsc98z6yUowtfuXkKZpRpiRW6gxU",
  "key19": "3ofeKHUjGm2sG1TodwMwDj6ThLhnKVVaMky2XNDbRqmf2Boy3mcuQX3fay6NpS3ieYbFLdA4MHaZvRUyFQxoFYTg",
  "key20": "2hsABFgxYL9fM6k5Whz7Z7e6T5Pw23arRhcZ43R4xZ5CDvbDYbJkKwwqsyrZLyfMfbDhgnbRcXnfVWRKgyPHTwn2",
  "key21": "5ZEeFUfjpw3mn3xB36sKcj7gvtdFi9QbCD3pDAhPRwzRyS491EK8VKLu4YCu5DQHrUXSHgTGjx7Z4kfSZEb8Fmjb",
  "key22": "4xzqhBnU3MQLAYjaMNqtE7AqL2UZuNpgTC5dVBPEoN9FMzoJNApH1qJZgunrb1woV8RKSmt67ZZU8npn69kVCzXV",
  "key23": "3RuhJXWp7XQFZFenCxJJAxMeEjvbf568Mx5A582VeY9QnYAxc24L5XtqGwJ8yvLLdzmeziiTKxhAyheXVBbeJHG8",
  "key24": "3BamfdaStdCx3MHrnzJb7T7v2xekEPUCVwWqMUtN6mBw74mRk8mQSBKhTWYmUWbVyKB9WQkJr2y7Uv8n3CnHF9wd",
  "key25": "5vuu6MZvquBJStdkumaVezzErjA3M8SDasj2TvnNGbRSRpEmfHVn7fSzCo76eejbgikufJKiDnvcHV4DmktdtaUK",
  "key26": "UbrPePbyQtsr2SSBw2x7n7JJcuoc7pHwhN32DhGXBhmwsg8vQhi5URX5L2y1HVgFLLrwW4YMhrVxmX7mCGKpzau",
  "key27": "3uYjxuj4vwjuwNf1sw9bf2aMrBYWsj6wDLdPhyJjRr7qa83VSiXtjhfFK7ktKKLSTnV7JHRVAcokB6vWkmzGkojJ",
  "key28": "y8jQEzwwuFWJJ4UMgzhDrXbcm8AfiEizaGfGaPZEzspYE6qgVcRGuP5EPGLuMCF7j6LJbK1zzgpUug2YcGBYvzt",
  "key29": "ZxkB1vTfVzf9FWJNDqbp83YMV8x4qNS4owjdc4ZaNmScAJdnBujco6gqmUi3nEbhKAhFcfCAzNWbBisG5XwuCpt",
  "key30": "2tKEBSwFsQX8oVfKiv12pKexbAfnYYb4XqJDMCHMf1RB1i83f9UNdgo4XoFocosyTRr82pnNeAvmeZexzktfXFSX",
  "key31": "25bPDY6vbPEjRLpWWTK64NXRVVp2k7CfzLAMNWHuzUb4Bj2GAJQhecDAfufUyQL7D1GMyAQYZNoajqpho7vArYo3",
  "key32": "5VSms83syQck7Bw3mQFMRDSD3sstCQamJsHKUgbu482J2S74UYNaxWfdpzBHk6u7si1opERqCpZ1BiZZGWFt8PEx",
  "key33": "uXubQ3N3u1uKn7UmUTFPm2JVXpLcbmcigqKrmzynYz9mNJQTRGTk9Ww11rCFwa8HZfxrB8LK6YifbupFh9hBEdq",
  "key34": "4NM2GjpgPdGnNdtkZZ8P2kKDctNzo5AYkS1xLvqyn31wikpBSJYb9SqxqgehJAayQxnns43XSgtN7fbETHweY3qK",
  "key35": "4tCrw9xfBGDX384cDzqmHHmucCAzihzy91erbRMWBVtwCHpqPwU12UyUxw7NsEdjDZf1wArowcG9U2S6X1uGrFjE",
  "key36": "3DpFiAGLvT8m2DgjP3Gx6wq7CfRmiAroHyXjWq4ya7fvXaumqq8Aap11SCSjW77kCtQz7R3uLggZHXn4kxcnjPfL",
  "key37": "3R6Pe5dj2HekFXCZe3zGQVfJTBouLvE8ejZ85hopEQca8JmZyHecpAAHqMpRhQA9PUcvzY2Xj1cnY77GnXNHPeux"
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
