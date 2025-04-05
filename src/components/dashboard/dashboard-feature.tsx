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
    "4nAkv7NV3UpqNGzpSt68zNva81pbaWHyo7xNcAonRYaQ9K4CwdwJiBC4nkbV2TneSkDhML2CSsB2SZroGL2gtuSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WjkUt1HepgnAtEHhWLFzzCxKr5iBUE8dGooVw9kCFc5PbrEUj1g8NFWEpeWPHSCHtwNZDqEkdjBrZNcjZnY1HEu",
  "key1": "5FSeZHdkPcwbzcmwPmcM9dfJEnRJxzLxh6qeXdjibtbAAX9PxehUWfNT2c61PZo5tkHWFsASV5HSgC4GJiBMtyWT",
  "key2": "QHHxcV2UNgvGzFjGmXGTjqWqyB5r3ygW3EWNxGBFJFqBH5oqE9zWKYU94kryPsi2cCM5jSR7aUhK84EtCiJogPU",
  "key3": "2o144jNFHPZwstb5HiEj3kWhcSnTxVX2BE1uMiqTq731qAA71Hx5LLVgTH8J3XWJsx2HhAT3k23oqqSzRyH6koAn",
  "key4": "5zp4GXuxPNuGdVp8AjbTYFdfx335RuPnNhSM76u7eYAubTSHqfM82DxkRqJP1jnTX2V78EujvwHtvudxntcwegdf",
  "key5": "5xUz8wYQHMgbhJep5W1V1BFaFmiTdGYb8jjjoGqi7BxGGi2eQaXnzWEEGnzjcUugUwJa82hLuCc48ym4XLy6HukV",
  "key6": "5VRs814GvaRadGNhogNHUNM8Vx7fZyzV8U77LNjo5BfGeW2uZZ1mNKKywq2mZZNUmV68mwXPmNfhM66zDhrCYS6K",
  "key7": "5XpR4WHPXQwxZKwSD7NAKcS5agdNYL4jd6SHWgy6DrWqKYjvTZQ66Yk4BYxQ7VPJnY8q14FWwNTNhyRFytG5bcKJ",
  "key8": "2b5chdThhNQZiLfNPEQ5LvAJzErGj7mg3QC74Z8gCcKc4SAa8QT4w33ucQhvqryFm8EqEGYK4h6pc3YDW8pFbFhC",
  "key9": "66j1T2xQo3RPGu9eMDmRYCSyUdBpk2NBH3itvYUJ6aC7b3fB3v7tVuSraWp5XxrHUmN7cNrfkmzuabwr4i3jEewB",
  "key10": "3eZLpWDoredgTYBSYoLk3LLYZj4fTdq4XDDRAf79Rm34domtpvT6yt8vjACViPhkiiYUvqXP5q9GEnyiUrqAJEwm",
  "key11": "67HhnevZSkjq3qacMbZZc4UEzDpJuyEdBk12eP4cTg7aMNRpEyfucRQXg7TUzWNwii2Qy1x5Jxi6niCvhx8q2uzd",
  "key12": "28ka5B4sS8ReV4GABaQB8wJfaosCf3V6zRWaN9bdEAPmHhHdpyg4csPUJMHLaU4aQoEZ4ZbSdF4rCVwxFcvMGUFX",
  "key13": "3SaX3kEhxigRPA5DEMPZWqducpWyACfVSfyLMqoARMfuvy6QeJ6CmfuUh4VJXvfpZ9LvAGDMXbGrbrT3xQPu8j9R",
  "key14": "2x8j1vmJDgAzX8hg19xRRfWEoas4zrh4ge3oYvpfDchmSbd6roNaZzkV2teAdQccTU4jbD73WkaHjU2E7qvr1CaH",
  "key15": "2nozJFxKMtnw5zaWj7GeRwq7MfkMTTi8WXigEpogjrWCKjjaeqGPCDStyxZ3X1t3SDRuxcKe1m6J6ZcnLSReep86",
  "key16": "345m3DD3vbyeSiqW5AnZURTznXL5nchAMEbkvzNEvbJUWnq67xCCq9rNXSA1t1xzHttnR5E3w8Dda7JNyn16nNP",
  "key17": "2be3M3dWrzm7WuqMoeAuWPFWSLCEzJRNvw9yFbeJwAfkoT3XBA8vWUELUkZZsTTHJTKU5ApAiiWLhGeBfMJQA6iW",
  "key18": "4Uw8sNMz9tSDj2gvFFDsCwiDP59SKobtAkS5h7STQ96V7fKuWbCcfjm81DqvhshmQDmBrz39Yy3qt45Lc5Ptxew",
  "key19": "YCnf6DkrEk2qPqHXdx1JohwUQaouapxxzrM9rpsxsfjHxp7fTT7GHSNoMHfdp9kD4h7rTxNV8cVZKTKNH5CUB5C",
  "key20": "4JrPngxaMNwNpiYuxcg6ZpRpSsoXu8zTnfQde7dg79JsnzvvMYjBjvKYpX14qFz4AAtK2VtizhszmmJ7M5TLc7RL",
  "key21": "4d9txwoY4VgA4bPfr44GSVDenn6yhftDSB5vMiaBwgBdXfVvk72Y4Ah12b2MRH9u7HaNingM8NZSHxMVcUiLMxgA",
  "key22": "2HQ2GPBJPmVseFErNCzZobN48F8qwZxmg8wsaVNUd5Pj4izr4msAhaR3DaqiEAgqVQwhwECgpLMw43ZvSpUtWh6Z",
  "key23": "2qZYcPyhCD97MCfJebyxLK5EMWWj9nReWVYDeoFXt5gANtpX7p9rcDiG7HUDwTHsF1wa429ErNzoJgQ6sydYmNGC",
  "key24": "62PeDAZNz7MyeXVmM27TpZnWXnikKxom6D9AoWfJwTLiuN62pefrKQyH3EEGDMWjHFwbJEtU2UcpaM7eWSPjjh14",
  "key25": "4VnHztJCKMwYewvap2bSy4sdnsrNp9WJZvvsJ2EXGiSYv76SvX4cpLKgssMDye9t676a6TCFm6XykjwTeu4j3N18",
  "key26": "3jyQLc4HwuCQmf1Qk7QpV695ZMUXXoqzZJB9NXaiuf5kLLHr2qrfqA7eby8s9hZ6LdmwvwafZZAKfA7zYtHUEMAS",
  "key27": "4pW8ArnWHdiroeme6YGt1JQGXusqxzMG21dyt6yuYChCtGzijPfKdaKusjP1XyiAGkLj3nJgAVF59KzLZRqqebif",
  "key28": "2ifbTXZEUp4dzGWoYWjsJNHNhuvWJGj4iQhRbGtMUR9y1jFhNpvVFcULTp8sWkm2iwiXLRhcehkJ8tc4EW9UuxwX",
  "key29": "2RhEt4NR1b59pT9WYzeobGkMRrcfhZPMs7mQhPQxFaaSCYnc2q9ZHYpaG6D5bHiK33jmWmkLuXJsWcm9JeonpeJd",
  "key30": "3ccj8Up7ozG1GawMDoQiv4BhYYF7rpwDx7wqFXdZSiAt3w4mPxaZA5oxr2b6eM9jU32ws9FREjnt2AUY3QW8fG49",
  "key31": "4qoeUmY3tAirUWYhMub7XxGHB7mKe4W9sndCJTWRSX1PqVjaWDAhFpG3Y4hr616MfqteJzsWyk6gzCV33dFbFvsF",
  "key32": "54XekZGgr1nm3Q42ggZ2koyqkVM5McmDJqoDUsEBr7AY98PD3ZMFUUWFSgqeAAZGs6d4DwZz1mLYLduquRiS2uzQ",
  "key33": "5rR1yNXuUi3CnmtQWnJfQE42kqRkorNYmsdo35y6HVk7Wb6c2XdtifvBTVZ7XYtf3MAUEifsi5buH5LZVEjUQ4Ac",
  "key34": "5JKJvMS2dBbv91ZRJVWmtYSDwnXTQreyYWBBnGNrcVZoYgwVn4bkKuHNkiNbxg8NzWZhWKncQejXvazMgQ9FNGVp",
  "key35": "EVU9yDjEQuTtSDjrZ8CSkZhF1t5Zg3AxMghYK1gbwqmvLu1cPvgmV4P9pYYUKomzu4pCXPJL3amP9muAJfyHoyc",
  "key36": "3xqLaCe6v5zetXkgX8CHXQqZpsJ49sNjzzspw8swVfvspDWBdDzdujKui8BGcUnbF7GiS3DwnDwwSujax8vpKykt",
  "key37": "45uT5eGvSdRbPuLsvcjUd5fFDeYN9vSB7tmdTcgzKW9kFV5LSYxbRPQJAhfwXtbqRQBcjSoX3MaPxY6Yp6Jv2PVq",
  "key38": "61cTpsVaU6YPwFRQ6SedvvBVhmfHaPQAs6M4qDhAYKoK6JwkLaMjcXTejFYEjtbJQ68E5M4KMn5WSnJeyQhBAGQ4",
  "key39": "5LPedxVgKNnP4A7qq6JzH8oiBcXRPUq6iNxscTtcMdkKTxKYgmHWNvcE6piVQMdA2UWFvTAqxjRRFgdWvLYAr6zj",
  "key40": "352LcpDtjhagT8c4CWexGEBWh1eR8SzQqes4WSsDNszed83JRK23Yuk6Kh4zGPE9a9WY4XUGFrFy6PVu8eCRwWD1"
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
