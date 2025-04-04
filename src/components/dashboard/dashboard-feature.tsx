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
    "2sBRCDDSEWW39Xy5p5jQUsC72jpG672HcKbTiSmdeF1DuTkRBuFByrfnp58juBZcAMVL7MSrCAFsq3sLA8dXDLiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "391rkhGqmDReLZmbY9aQiwYHqXmuuUpn9xLjvY24Xb9E29bTJ4QaKiNRH3J3Pw3ZMzcSu9AUGyXCnizcmsyL56w1",
  "key1": "5uxoVyqnukm6cfvbeVydy7Z2L799sRVu7eYVCtyTnUgC1uHnbjH76gjjHVZ6mqNRdyc4c8ueD3F1BP3kUfGPn3j",
  "key2": "5Hm1R9yVuf7t5JLmDq7d9vWZRS9Cw4hziMxtU8sD5g3UyV2Sw6mjaVCa9bLNbsQWgz7g3Hm5M4khtmQEAJe8Uddb",
  "key3": "2ZeHuCAexSL87nTUeDoUBJkqaxP7eBoqVx82THqexh9yNkX2jsHWFg56B3PiPpkg6z4DFhfAnczepZGEXuSfGCzo",
  "key4": "3du1U9ksnDW1JDAPTCTfmsi6ehgkumGQJgiPy9aMXBodRxXYeFj7MF1vnwHP6FBSSNPNFhpLJ6dm3Cbh7V6LEGQX",
  "key5": "33hVLnFHNU3tXmPXF3C9TDUqYcxxo7rz4JN2KRGa3dyZ3c9DrVq26k6bQMtVpyHEPkZZTTPLPpHjcos9gm53adX7",
  "key6": "5BfRockcqPcYkFiM7JsvzpU5jtHNQ47jUPm6Z7hPP8Zc1DCeikSGcyppzAjocj7K7ZXteUyNBitaRD5NddeXKCEE",
  "key7": "2uSpM3dwHURcQ11kbA3aAhWngWKUgUCzDJk6vX92PVEE6UXCLcB1ZjLsF7FGfp99huB7numfYeZkBXrLxE6XvaJ4",
  "key8": "64ErUVdMoJogtHGEc3tTGZNiEtAXDidrhG8HJVd3SNCjU7KKBnQphr459q7tm5wq77yKX9VV8NWxwGEiZq5xtRcV",
  "key9": "QbbASVvFsbPfyo9zemZ53xXT2EoEPBfVnK14ybj1nsKePLjScWBB6BUGoWK8VwFF4oL5Rp5wG5WS1wm8FnUcozX",
  "key10": "2jXA4uF9UTNXfQFDSb54DdT2Gk3Fvybafmopeq11L5s218tDw61MyoSXaCDqcuB1yoHt2YfgCBVo6888kUPkzxx8",
  "key11": "hYhYgYLFG9mGZwfRq4i9hMRf351CcjJcAqo9wnzALgqw8EY2G2P4RppUcrLGCsXPWKK1GRKGhGnL8PQKEXFEgJn",
  "key12": "4LqkXUHwQsw9FJznSKP14NdxaKqgCau1j6Xd4etM2ZwEr2MyZxoo8YTyrJa9uv8bgBqvYGKafMCmPuSRkHywKJtE",
  "key13": "xDAjgehmWR3FfKe4p4vj6UiXrLWxMnum8cyiKrP2hkgKtS8LSCZFFR731fKmQHRf6JnCiwS3UHoA6eGvBTAjxA4",
  "key14": "423mNzJWWJQehLn4z2LTyU1nKMDTXe7ye4YN1VPRB8RNbRWQkQTC2D7XGp58VKtVyDGwN42gxqZmj27x8BXqbdRG",
  "key15": "2AsTLRPPAgXEsyPrnhw9A63Zhvyiyf5LnhSRo2W8is78P4jtpGQQXeVx5ooydAcZhJdD8jZ4vFfksMJu8JGFzD1M",
  "key16": "248N3E5ahUGtpwdVxq5TH5xYXiMvia4HDLXdwK7EtNvecbuDJhHnC8HchHrEeN6j2yYDb8pcKYq5NvRWWf2kdFRr",
  "key17": "2EzjQa8quQaL9jEYaXzNchDE3m3d3uojZSyWb3ZL7AqE72e3QXDZgrrXdg15AjrdquQrnHRM5pT2nUiM6uvxp5qH",
  "key18": "wHoBUvUhiDzVtjrThf7YDioveQBuFukHVGvmyJpG7JxDKJbAakBVTQaXVvpJWVSv6VLwawPcTD3QmHaeEmwQpJZ",
  "key19": "5CP3cqi2mkncvLiVeCjhBx21oPwbmpHW7rznaM2DFeMkEN2zYwebEUmTz7AKmYQXSNZjy2FwwAkDY7Zh9z7KqhUC",
  "key20": "5RgcGKnXKrS5ZrcEsR1t9FPQeFRutBxbZomEtMES5ocetxJozXBFRzeaRTxqREK9QArRduQRqrarQvzv9J78MdZ5",
  "key21": "2QvnqmtU68VU2j6fFxvpcxMsqoUQL1gcdHxEv1dq65cnRpReSAQA8DPQBYRRJwk6esQZk4he4rDmJeuPZHA5upP",
  "key22": "5jQ3cgbc83icrqPRnQALVXGo4sCMSLAcnSiDKFE1EQ5ynuCY29gjrdrGvWmQ1Jxt2JDbuxKAu4MSG6R1SiCsoLue",
  "key23": "5P7vG415zwBtdDjfCUFTNc4YEd4ZRXwgR454zWAB7q9ZaHeArqXjmy9jqxJq41SzBQvFmHwZJqmdHUiACAG9URh8",
  "key24": "5J1JdDWemmQ8zo165w5cB272gBN1FACKskacdaMjkebhrzHwPJz4N6t7vMsjCVrmGEb5cVhqkLK1U9WyGCgv1w9b",
  "key25": "3WvFnnLw7LVMwVLc9vPWzyCLvDiZesZPkfqwgSah9dhLYWqVgfMqSXDcMPhCDR7CFutpM9HwZTzwvJvrBqc5RFmV",
  "key26": "286Nh8FPktzaXgXp1jZVUF3NHaanVuc6rEUzg44sqqDnnPxYtnxjn2KsyrBZdjV2hHzmDHHwn1YhaGr8N8oErV5c",
  "key27": "5qUYtuCE7S9L8qn9cDo7i12nnuMFGvztiJo6SrxwqbJESzKcf4jsFDFBJTgok9oJyooVaCFR3eVrRRUpWq8NtaYS",
  "key28": "29v39KBVgmPuyM3Nn1TkYA8L7EudrCsFGpT3WCs3N9hYkgLRPV75jkjZ2EJ4DsbCXRKeWbhbsPz9xXFMookZq1SY",
  "key29": "JpuXb6dBPNCs7GyGzqJ4ZBtMg5xLdrgX5ijYLsZzbmDMAmzDjdkgkKyLvtWK3EhKkL5UksTJbz2KSXsvNG9h5wd",
  "key30": "4GpMVXNziJXhb3Dgc8dktw14uYfgjjeveqQ79BZLtEGLCTvbaYQQZMnq58aRPkgWoyARR41dYy2eyeNg2ExzZthe",
  "key31": "2tc4MLTxvDEzcRcxs98rN5AYxsEiqo1FLsAnsNuCGeu3tmt6WYzRs6diEbxDYAL1iTNXXR8jrsKf3ShyYswQRuxs",
  "key32": "2nJYtycvpv2MpCXEgb2iTSeWBgeyp5EGTeaHg8hjJdYZHRGvcUn2JVEBZw6ouqhzTYMEYkDhfQpnNqQ6MVEBFbQ6",
  "key33": "5fYFV5md5FtKkq34VZN3nxWXnHxL5zCXfXN9LPfZmfdbtKgREKJQWG81WeaYNBNK6Y3brehUEPYBt3fVNb2w4jX8",
  "key34": "onC6oMMKzZ26cqtJJxVn6sgs7Gmv9CPoLfhqWtwps2iAum9FLhp15hUBYip25FpWzFhuiZ6hecrYTaiGqVcztE8",
  "key35": "3FH5SupPNW87jJpngajgARtHsseM9SPqMcssMVEhFbqifk7QLeZ7vHVAchyA8JZt2vpgcsbatMhmpSjYxkXy3ZKy",
  "key36": "2LJ2xURZEZ6GmQmmXGQq5KnUxpNjbdwWfJcwteZBxzvu7D8QCFPUDyezfvSVX7PmbXpWKJvstheS8ueHhTeKdo6m",
  "key37": "4BAAb6WNKQmFjFdZnMefZLom9g5a9WdCngrNBCjRbw3oDJkZLKtKdNE6SV7p7yGs4HimvZBk1x3TnBFfqPCDAcDz",
  "key38": "3JJT2EFsoqnqoEKceVSz2X97w1bz6u38143EyreikXYN4cFPpp5vUufRfdj9226bnLDiSrhPRLAYcyN1X6NrN7jd",
  "key39": "4nyejuSuZkeHfzoEWaoQJzw5H3grEeU81evNqAzB5bL6AxVDpeCnX8TN46RAFehcZPuRy2GLBw9YsnPu9DWpyNMt",
  "key40": "4GiEuDoAshcKRMasmYR32R5Akb6nMrjozh5M3sY695yCfSJfDmcpxDtEmMKb1opF7JLwmqDtWLdg4D9uFqcEMRiu",
  "key41": "5ogFRtaCa6soUNfjb826PKfxTHYyFH2qzZfZxhn2cMpAvpFjBduxgWwmBTn9MxY3eR6SoXPpbNeJn2YH3YWYmxE9",
  "key42": "gDdzvssSNJikkfSXqBkUXe2VE8WWvseLrb7bouK4ZemUoANXbDHT5XDECvkLHPXPXEthxFz72mhD4oaSMwjYus7",
  "key43": "2pTQsq9b1GKamHuXCtGZtAJo16L6AjJpib2DjvQGwP66fBtGFdTmgF7e23fPM3eCSjk17qpxhgPt2X1duZv8NYy7",
  "key44": "2MixGnjEUmAEGMgDmn6YHt3vgtKX9ErAF2bLq3n4dUdc4uVRFYuDv64ZYwKNSfGHamqeoid9xzAY6AUcqXrbpVHD",
  "key45": "2UgriHVnV4oE2sLVzrVTVYxeH4X7mt5oFZ4SJ4DdokAe8v1sYtEyt6hHEM89wzaH2ACxKRAbmXXEHmBKhh32L7gv",
  "key46": "5KLB4qUfMFxcx1Tp1WnLM5Xy8phoCxJvZaWM5hzR42G2NL4mmiFQWxT6AdNgvEhqUSAxdsteoxeaLzsa3U9BFPkR",
  "key47": "4Mf4CquXtm56cfAycXoRhF7Jez51iWDCThkwp1DDCyoqMjAouPwH6zCzWWtnYaDk5bzCpUapxtB7fk9W9e8Qmex3",
  "key48": "25B1AQEfxdQXEhuxJ78qHpS4hHJeGatYWQRkKDR1zK8EEwwacCfUjec15BpuSaZU8xzT1rfnP8C4dHyTj7d44NPc",
  "key49": "tQiN4ScE9Je3v6zxyxyKXDgmxMmwCjpaysp9vxZPaqPrULA3XSNg8ETWf7oRJVkYwjaSLjnB75nWPUDbmNouEv3"
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
