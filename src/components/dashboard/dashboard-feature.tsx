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
    "4Z8RQUCfA6q7doNdyy8vLycap8UyyaUKtmXTmZD57mKtv9D7chL7hFM4s1p6Ao94XUsJVpBzvKwfMQ8FsckFNd1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zvxUEJdZTjqnf6vX1EEvvg86V3MkFP3BUFsNFfV4ePFLyHNGs6gd2S3jAjBGpqaCXeD37TpwnNgyvNMTX48rALJ",
  "key1": "3VSJgVTbWEPCn9jaYQG8c6d9HBXA3edMq9wYafzYZMrcDR5zG1hbmwjgpjbRrqTCNAreKvmtLFW11VNZBBVW3puv",
  "key2": "5kd77riCeXfx7BXQeAarYVjJyhBXPEX2wNxqLmUJUuZhVZVvAKLuSsrwEfkUxgcwmSwSAi2Q4GSi98dAwAnNo9LD",
  "key3": "2QM9KbVjoUMs4ZknQGMMKVcq2TwpSQVWPrxFcunFNcEB1NWYdxmw2ARoTUevtRov5oUJURbMnZqYFPuA8GepMhmc",
  "key4": "9BUUL5uyjVnXURbadpqFsJWBm8M4p7iPhctNWbrMU7KSKpDjegFwxwGVfsVUR65Rw5rYXwLQ7SBfW4bEhGqRTXk",
  "key5": "2QqdUf9exTDRNyp4bkSwPHPUR7xHvJBkG5udbXMV9Pa8jsrjtqD7pvF4wQmNJdCYQLqrVydTB7ezCjLnX6LETmLD",
  "key6": "FzkB4RniYYXrgSn8DeBTWfYwEDtdEzgAFi5JwY7ffmLcqCYWE62Dow9CD9w73mP4XTa4fRegjv2RjFyJirDSwKY",
  "key7": "23YRJiNnLfR2TWkBwrNBhKXPn4YQwAXpFp8wbHEj3yGCFsBpsGYaAKqEfuZD6L7fSk4AG2m97iL8ZsdiJDYZC2u9",
  "key8": "67AwBL9MJSgHfhRVK5iuxgZfuUum4GofWx7oimfPtfAiYrFMUQXTJT93NXvArts4EBN8xh98aAGSkV99o58YVg31",
  "key9": "kAsyG7mYUntdj3TUKzPkGw5sYQUhkmEaHuU4Q4K4fag8TbVvHv5sKdZmroHRNgbArJU2egTt95mvCnQ5Q9Xjtin",
  "key10": "3KbmtgxKYgezy9Aefs4Bnfg7ZRUbruttKB2nG74szFNDaY9d4AsHme2erAqrqv6MeHBEhN4mQs7Z9sefHyxHbRT9",
  "key11": "541FoeZyMuFS7CrhZMjUNQefX1sqZhEKxuPRNscM2SEQU5LTY2Kk9vphmjYr8NaR1Ld6dmANmF5n99qLaYYdUDmd",
  "key12": "5H4vf4gzbmWzsRiBiGbuYJi6L9phEKetdg3KaqYCqkN7ySj2xVSJmfzoiMRi6V7E4pqdZeovTJJuGgx9W75nQkGJ",
  "key13": "2NpiAampHKzRD3y3ZfPGnwnfcssnLjjCw5hgwqr4T2tusP9wXMD8xy6T3makh2maCntU3n4TjTzv45ires4reYcj",
  "key14": "3DHy4dh7mLvJrRn98hYLvJSdQJqCiHeWGFykxQbjjK53omCiAYyKsg9YbW6RRJ4qNsajibWDpDDYNxiBVChXrbM4",
  "key15": "2ZWEjQPuLC1evgm7chnLNauTfB8HqoGLvwNcZFJVGkMAKJ7rga6r8PQiqS4gr5SUvth4upE7EULwxeBWNk8zE8eu",
  "key16": "c9iTSyBC63mLMqY5iWw5rxfzAAu3AgFVBRPExyvw2x2xotz1NqudMnuQCiQxNwXsd5i2kAT7Y9bqMF5LXZmWeXw",
  "key17": "he3K1sqSERwjCU7yRYQxau9TNGCLTWpQ9jSax22LcmVf173Yx2XtUe1Bdi7u9MkJEzKx9VxrQuHxNqoqhiV3oSg",
  "key18": "5nMaS9jtj5StcMHWGXKfcC57xogKKRbVBcFfevD868ik1ADBgJPCKB8KZyC77joj4x8C12enWZ1toZNckcbinKaG",
  "key19": "4cMniE2PthwBpar58kTQraGfdP9jFQxWskB9QYbQa7o5YopMNXQZhamSHyTMsUNE9fzCeTCS1ABqg2HsaGTdcuMS",
  "key20": "5HCDKFauNKP2kqDMtDx1MSNiW7tNtFy27Fy1NbyJYCVmg5uxRXHr4pV4ffWH9CReus3KWqP3U4vPPNdRhMiqJHur",
  "key21": "5eiDTEvZ1STiVEuF3sUZBBCeMf6sixr6ikhpEzcridaXU8XatjbRB3mWcRzUj6sWAPzpHxPAxziW8iRBbGPyzJ6g",
  "key22": "5kk7Sf2YjMLt1BdYoUbU3Kmtprzx1gTmKELwrYEFMVpeBMGxvXd7d7vntyAJaNSwCVLZUwweJUjjevbkGz5TEzbM",
  "key23": "53N94zJ7uAMPGTisppw7BFCfTwRUV38LHSGDSvQvLaANbfoWN7GmvMjyhM7wmx1MvBNSXRW2jPqu1r6MSFBbr9CZ",
  "key24": "2R67SYmnVgukmZYUkyy9iCyS3fo6Dg3pvUr9o1HARrt3d1cXjrJ3MNfqWvZ9nDzkGfo4oaWvKQaq87GoxKfmxETd",
  "key25": "3Pic3uX3p2K35e37pmzTYsvtimNpQUHkioD6TwRqwKXgKQvayhUUCe63VfVMf4cyHkUx7n1zXFPeUgQKEVdbp9K7",
  "key26": "2rhNhUfW1TKCyQS6pdacCV3DYE1H88pHxbA9945t3BYm95xZadyix3GsNHuGmCMEBMuwBgcFdgxidqpaXM1cYArp",
  "key27": "3ALSSwWScGK1bfcfpoKprVxYpgFCTBSkAxi8NUiVFvMR9ZZoKeWYsRifPKP4fVX4WjQ2zz93vis8B6U5boPbV3GP",
  "key28": "3n1QzFC22q1aR1cbb4k2pdFRKQJ2q6zSPwRwrBLPzdgVwtzXokcThxbCJSm7SMbWxj4Ciks7RK8KrfDUGEd7WWsg",
  "key29": "2vre7ap3bm4PAE33T6VfChdF8XqcHZFwPYcTDZ7HVtZ4yhda6a6KQgjM2ZUZB6Ugk1EreNG4ZwFZJbQkzACoFSZd",
  "key30": "ye6YvwUjrMcv5hUgHdpnA2nkqLVHHieeXDgK3bPnwggLb1K3Udjkp5tzTpSFmShqoc6E3FAXV1sPyYWzKua3Zkr",
  "key31": "5v6MfkuZCPYGeu8wzYmFD9sEnL3dQJ279SKhpTL42jykiCe2JsuhL9rFfaNQQTEQMdmzh7VrQQqTN7ATf7BfEbdA",
  "key32": "4rDUbpNnWMgHFY9gAi9rxhYZyhnFNE4Sb61XsUphR4vmkQBPaQ6zdnPYvpkHAbDxZZTCKGwrfZ94atzThTEMJAZ5",
  "key33": "31s3vczZVA4KTkmqnw2fnFNGJYyYiymBAZznPu3vGWct2GLRpkn6wXirLBqt9J4eK1DgMv3Dbe7tJRmYVPe9UZzH",
  "key34": "2r9ShPR2pud3PKr7VukNojkaK2wVZYiKazG84G1MgQivohvS6Qkd2HjwmtWDswKkaF1fgdPWTB38c1xvGod7zJqq",
  "key35": "3XFNoZgaVsjbsu8BucypzvbAU66o7GSSeGhd5TXs3CBbr38D39nbfSAjLL9LRZ3YpMSUqBFhRjL4sDVY8u22ya2k",
  "key36": "bnmEmkHhX89m7i3pxp5bz3qw73NxmMFyk5P2WUDs3vRnzqiUX3PdLbUGrkEyGKdDkEzCPzKrLuPibx65S9LZVq4",
  "key37": "5427AXmADXwpUiLgJvWjdMJJtWBB6fvGVU9JS1zHQVTLtZkF8LKLk35wQoRzCKCFTW6FHcK84rUCTYysiiqmyBxh",
  "key38": "3yftfro4wWNbSvW2AppjGB1uvR46K1Yb2i4BFUR8m1j6pnAYhwmAG3WesBPM6j4iifBCjZVJt9zSG7dPgrp4LQfN",
  "key39": "oBm1akj1Eenp8kcZqCZyeFLcusKqJ1VeFNYmX5uiwKGeJpHFrBdzdYFD1RmSfYpgZXjD9HqY3aseU2Ptnu5Ztcx",
  "key40": "qTpDfvCA1V7JhujrPPFopPxuLzxfnC2aMiuD8LaGwoJXPyQ9cNpM73N2BwkZTcmA8YVJQzYe6NFFTZ7KkYrmWJT",
  "key41": "4qCpaSJ2X5ShqfN3KcqXSt9B9rXw3PjzqAPbc5D4jsroAk1tH3jhZtopXXexCxGr8ph9JuY5YVeBKmbVNS2YUmDh",
  "key42": "23W1cv4eiuZikNShYVy9ziDNTUJjJ2pEXgvp5nQZC4aZRNP13Byn9pRu5E6axDg6w3fcupmWVLxdJpxWbhpjsHJH",
  "key43": "YKoB9wRPiF49iyhJedqq2V7jjmTobeQbnFbSzZVi5RrS9c3k1jcEQAxsAQrHVRD8NuM7wgHkfVmgV1r5gj2EAVc",
  "key44": "3rQpWMQzF3Pqfh3ujEow2vr5zWNimJknCD1DNdjSWkyuFetUvEcKX47SP3C73YA5uQzKKKV4ZRgD8VgfyfVmDKgN",
  "key45": "4eCK6qshbuH5AQi2E1SsoSK9RPNsESbTmLivdVwYEYqPNoAjgFb9sGWnuWQYqqHcEQDChxmGajyMwqzPGfFY2Jbs",
  "key46": "5CMBNrFzrEMH9FYhouYvWwNcHBXqmdAQ9kPtbxXFu45iWDYUCTx9EpYtXFYRXUYwBA81jEnmwYCRVf2gyeLXqTvL",
  "key47": "64BFXtACAzQTWFpyHC3SB1E2hW3dBrXPrYgV1jQXaBFipV7AxuuMcVXDm4RCz2UA5Gj5xqzXTgw6cohoLcsyWoCi",
  "key48": "3MLCouP3jVF8tC8EH8YoKN1v9xUKfyqhjGDNQjdkyib81MxPdKvc6Ewsx88VQzVNjg41goxXYrYnFNYiQJQCGUUP"
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
