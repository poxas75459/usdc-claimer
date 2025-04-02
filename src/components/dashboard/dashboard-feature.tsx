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
    "3HtSJyShHWm1RfsH6XEnJpJScVuADNPNKMK7GpxodZDo3C6QhyHyVachXzZ8bXuTGTzUGaE3pJjcVCqCuydaM7HT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hqqcypK4F2MBRN9GdH5rk25BAkFAfcp2ideboawSX517G1GuhgXunKbPdj3i1RxWBspqJmStShnqexr7xnCZgNA",
  "key1": "5bDGKfA1yZbS7CcBu1PCYggtnPVvCjmqHRowyvx1xLT9yN7aoRACKcEfVkUg1jxQ7G4YQeWTu2msN8pZHez3XyFB",
  "key2": "3SiY9hp2jAqN8H2DTteqVTf5xhyCJLAD8ZuRyaDqghpVjLxhva36xGbHrwqKKdtXxoorTP8iv7u47Yb1hgixXnVG",
  "key3": "4yNCVKWJzRQ9rzgKcaJxQaC6hjc4NsEq4xRXZWBSnRA6Xhf2c5ct1B4ki9DDUbzU35Rn75c8QZLAPsLwkm185Rna",
  "key4": "2q5uamxzfzHDcKLx8BP4acpLYwkvqQXoshok8C2MH8AZn1qsPDjBPttQQPrsYdDtPFSRykTjQD9Phs6qYHkhtZNC",
  "key5": "Cfb872rPPwz8F33NBnbrMLP1UcZhm6F9o4rfeJu9sPo1oApJt3Xbj4j8UjhKCFNnRNjR7aH5VzdfkqK75dnrooQ",
  "key6": "2dVuREDNuA6rEm24ERtjFyyHLPGqMqsMPw8nqKNe3NkoicE7PGVV4wpM2FxR4Dbq91mvcEKTJBniq84mXwBqqbdH",
  "key7": "3nXRhAysSFiiHGDztPaSUkro1Lrw8rkS2KYTAsSrPrk5vutrmgqTxG8j6WF4cjSeM5p99X5Ym25ztXNam7thXA41",
  "key8": "47zBgTTmAdcxgaQsMjr3FXHgW4vsK9QaX2wW9WSLDuEcLwM2dmXvQZ1poJ2bUpEUUUfo3GsJ5tUkFqLq8cgxzq9r",
  "key9": "4j3bQDxT93mbfF2d6BGbAyYEEFS53dSegGZxwJsuJLzTnoz34DmPFFarzSYqkTKrg5PmwmkaGDBXqZvVaVwgSeHf",
  "key10": "2D37CaXcAMFUBnx5Ec1VYC2rLXpKk9DqMeMFemaD436ngxPQUubag9gCxwsA6t654225rfMUBpsk1mSAsi1zViHq",
  "key11": "3bApraKfqJk3kmEqHjW8PLhZDHWThCGpawuJvDMjgtSsbiLCti9BRo45YMYYi5CxTTnvLWc1GeeG2iThPkGUrK4V",
  "key12": "2w3vCK6s3f16j886hNgDbGy5tRQPMBiiAQLgE1rp9qPdYdC9X2ShqiK5AB1z37sRPB98YC6mDvmieu5HovFddhFu",
  "key13": "3BGLKtcNRA2xeH7Wn5ccfSRHJvjnLv3KvHvzUsgbALiQABpc4UsSz44m6Ptmt7j7TfEMa1UiWKFATg57792UMMHQ",
  "key14": "4oNAhVr5JVywJNbHkLpa6Zk19bUrfqBJKU3gokYrbFDe4AzWkLiHqHAqBatHeftqrt8mrX7ExyPA8nXtRJCWss7",
  "key15": "4Bztpw94Sb3X84JDn2TUYLmAMaQViuJWrwMrqtZnXiEsBu25dr5b3ZwqA5cbvejHuFAqqtzSxUKLn4NRgavGXbL7",
  "key16": "51BpsLs11JCj3Egm32x7HCbLpVb2tUgZ1iJXmFYGPJEQ4x61JtcfCvyAnqRpevq77hy6qXGyXFi7BF4t8b6MrMfv",
  "key17": "5A8LMUo1TmKCtft2NiVMpVrQAKU5nbmTqS2Z12iyTSEcq52Z1SrgMeKPEzyEgc56PTtGUoeGinvM6f7YJ4yn1jBc",
  "key18": "3wugyyrz5icng4RDEJieaxdbVFT6ccdrXATurnjzFXmow8Jb5wbWmQoXgxGWr6vGDnFztS8FteEDiKyJgKGHdXH9",
  "key19": "2nyg5ndpg9RA81TSEVDJQM1HMSmbrBhELfGsaCBEdfReA6w5W6m4Mfg5YadujiVn8c2xZyb6TnpJLR5XCS9jCBHw",
  "key20": "4DuLwDU17pUe1TUJAA3MDdMnBBb5qR3XMM4z6k8ipQZmAoDwMCyJkmnD4vwqXtiiH44Z3iiZPJTYtvdYPWQefrc",
  "key21": "5guepyf7tXsqATz8JifKMRBcmi7F4nGGCB4aTZp2o8A8RE385cAVgi88ETEjKt4HipaYE7iCQke13V4jY6nZfX1m",
  "key22": "FRAXwVSwry5k5MWepxnbgeLxVt8bRFaBid7w3ZvFsT3dd6Vp2HPYxKYCYhFV2gbGcFyrnZoZDN7cSggQVntz5Uu",
  "key23": "4uPuojFy66W9nUqVhSLQzsXuZgHMFvZTagQmJoQVpFfEauh3Z5N8tumFNjXuXd5mok2bcDWUCWje3jDdJnRk7umC",
  "key24": "2TEDRJUXZA1ygHon6Y6ttmGnipFtpWZ6GdgRmzwCeqbuYitvyYykv6n4DhM65xYeLgF5V8KomJYoQAgcSjoGRAvF",
  "key25": "5UPZupLJVwH1KuKeEDq4U5cBN9RSscf1xDNZXSKYZyivpeY3vBJSUqpG9m5d1gTkAJmSZefvfwZmjP5eFskAo9Wt",
  "key26": "cgDtweqVNaXe6SG3cysq8rvyAQvUaBkVCZ2UvcsrBT7SJTV5WwfB4Y2YnyP5WRyf2Ygpw5ekt7piyqN1ugGP6Ne",
  "key27": "44FSPwFGY69RUCYB1bGXKWQqGpd3qdiwdgHrGMTDHGf3G1pUJPr9uaL6qowY3FFDmabFXCWdForakLLwTt1rd2RV",
  "key28": "3W4GYT2JxD6Vk6UjNRcH2gcQBEseQAeSottuhxSaeXcFRXsShroN8Fo4sCFrPn5yDXgUw8EWeyzv1CCQBmEWVNvE",
  "key29": "3rnvmXd6wkCDoVymohoZndpzog8nEvy6yStZWhJN2r2MJRhGt4mZYYjRRw7zd5t4aXXCtRksJs1x8hcmJuxjo237",
  "key30": "2UsANPqbUcSrtqxamVKj5DReKRZEkctHSuhqBKSVNMLsSPrqcBBJ94GzsM9oyipANJBtSt7FacarHnZkvHJhGfRe",
  "key31": "661zMFJ5ZJrVMPvNkyN7HuregxDhuFaMDdix4acZk9fdZioy3hYSaZWTEs9CouFYGrq4MgXwQoKdehMTZqR9YKDQ",
  "key32": "3XzvPpCHgbM4nHfxUqpyR5Tjqt5CMpPPL98UoJx2C4scw8GF1b1sfXKE8eYqKpSZsQrE2x2uJt4b7fdHobzrJt7Y",
  "key33": "P5Ba2gopjsp2uWKz5Bm8y4Kfy4TdPmxnrk2JbRJSG5i96jsfLugk8GLQMFsjWjpoKgCKTo8BpWfvhVj45EJ3Qii",
  "key34": "5P4afxcaKdvToFvDV9vPpdKqNZbtyHSippVTM1zroLVaMx1ggczmruR9Va3KnMXakJsphMbzDKH4eUXAfWZbRsKt",
  "key35": "XTCmz8ypfkpLDt5CcQsBy4qR6KX2RP3pA1hDad2BtbdEEPszmqdBG8M7pvBaUGekeGD9qaPrkXV2WapzpzYD7a4",
  "key36": "2mGuwxSiQ71SDcz7frqnEVaRTVTLVTd6XqLZDY8cwrQ8UQCWi2WpLt8i1hL5r99ZiwpXZYsSTCsFJxuKPzAU868c",
  "key37": "5PBpjX5VtACF6UxVNKWsDDgJUX9A8q8DexFSWz13wHJQECzgjWB6sshVkGRr5NszKJxuTCgjKBQETboRXVkZHrn",
  "key38": "4T6knurwYHu8waKwLRv2gy9KF6YDjCPGMHPSdkejTejtEc8VAdsiA93ZsXwyamMVLKo4oiHeMYLDCkmJqNFWPhY8",
  "key39": "2xJDBMqR9qskgF37sjYL5mo3wG3xX4hEeNzSx3C2acrBDraw1gY6P3M1VXboqZ8BRBCYNh1x71N7GKJTK7TGt3BA",
  "key40": "47pWe7anoMoucN3NMik3NVnaLTdhCtQZwoEqdHkiyhJZdepyqYVmXp3wz1CssKDVSpdjBkJF9sM3LNFz1eSZLd7j",
  "key41": "5tij453dFeCCqUVnsjbXmtzW3Z61kWvKQE2xkX6V3U5ybTV1HsMHr8kD68KjV6H7Hr3sNxR64vSCsUSchJYPKTz6",
  "key42": "3YcnMrGGhPJnoAduccSSoiSy4yz4oc5uBAYUqTzKUYy4JoY5jyYoSXKzoxrfaF8yc81XiUvbRbKSUcbigj9bGhnF",
  "key43": "4bAbR2q2YrFgA8KSz45w4kCujR8CYbedQ8TMpqwijkZyVTW3ddMCXcKzXGje9VGZsRmEDYBNGDHUtuDuifKer6LL",
  "key44": "46JqJBuBXv91ccpHamRGn2nhDzWxV1AfBEVWymi7WzYPRX2rHN4JtmJXQsqoVszrorUKRyszHowFUzXSNzUPjy46"
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
