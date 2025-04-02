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
    "2oh8WPaMrE9kHuYw47jKkPoyiJCw35oWg4xxnHhKDB3JpsoYb6DBDUHVpFqZEKVWCcJmKQs15SZyeR3FCyf9Zjs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33HCthhThFb5x1493d8cYNZejMScoqShGvz8L3a3Rpbbyr6Nfw5wXZd1CMF8M6QejWuiUGC2vYWQ14nNRN6Tj9SW",
  "key1": "MZRcQQ9KyxWgJhMMrrYGHDzjHNQA1nQjgUbBt2gC4mv3R2M7eovd3esovN6WnmPgN9y8zLttriRJfcwEgUH1QVC",
  "key2": "JQred8reFaMaDj3fpbdKd9iH42zequCUxV8QN9KBoBUvjmM48D1MgAduVCkuEZ9W83deVUoDWwNRoePQhDf4dZQ",
  "key3": "5BaHrmM4xNoKdt96Mntf7PbJ5pGzLccaYhVbprVkQNGTS7bJukXMVP4Dr4A2VbxcrUEabZ26MHfniexcvM8jRjxZ",
  "key4": "3kSxw2mtCZXGALqPJfSVmZpfVvuzHwc8MwnXR67E1Wkg57AZAk79vHCYoSXHtHjxWNJWdmoknqH4qjuXrzBBacQ",
  "key5": "2hUtn4FMWy8eHTssXdnd9CSN3MHBAF8F6745gJfAvShuZBFgWUvBjx4UpGMG9KmQFywPKZ1hcTUYTWW6sKPsRerN",
  "key6": "2N3p6bx1hdBUZ1vJCTphzFDoAZH16ospKPb1BQNVgDkmUxHMWho7PDxcguP6jnGYbKFMwQWpGKUWrgur1YC7UfBL",
  "key7": "5JpAC8MgV4jjNCX5qG6e9xiQcKm1jgin4UZzo96aDnZTbfv6Sp4GZw6a6mK1RMDH443f5vsV2E7acHF4N5eVjqxW",
  "key8": "272bj5YygTEj87qfb4cM3GCGLyCN54bbtNpEbuNTsysofufR7nxskhc8yQxz9Rjg23kS7nYKhxKBJEM5DUED2k1C",
  "key9": "4SqWWvpDPfeK3tga3mdtvCYBUZgwAMmKT2g6SXvCymbJGGXjSCgugEHtePjrFr4GQdqieyCnyeP58wicHqhpWkse",
  "key10": "2HVn5XV1FLDJrtj15KVC7LCuN1d8BfMX3cqa1xLfH1b2aPdC9FCsRS1CjeRUzFhgs2CtPQFpuKK1joxTqDY8vKPA",
  "key11": "5Tafhtrm4Z83T8fVbm3nbvV9MTA8b5w5UzUM9RexiKJ8EhFXn9pnjEdyqTkZC5vkv2FnHb5Nou6kfo1Wa9MUuj6H",
  "key12": "5Vq3XFWyzb2XCoYsrjTyv9U6P4jrbeT4g2h3pysKuFso5BDwSo2UW63vKBgYaowyQxiitGsi7qEHJ1ZBM8e57sSU",
  "key13": "a5Gvdz6fXgppiC3nZMz3urcpDujgvhiD1YtAHCw78dPH98AL8v4LhtCjsxWmxa5g6HjCSTmEe4pGFmzThm6ZHdd",
  "key14": "65CR75YwBQgL9QQmZ8Zre7h8SRsZwaT519gxyENqpW3PCpJfr2jrSPrf3Fu3JUTZAUePJYgyyiM9NDpgnW5eL3mY",
  "key15": "3zxr9qfeF8Wj3MUx4jvcm1bPn3AqphsUpTUsQbCZ76uDDbNquGyhHZNWq7oyqT6xusu2qu5uFRUk7oFEM58DkB1w",
  "key16": "5PxGBNqqQQKGjumFyCvkgRgDw22vjmNRDo2XHQmQjCKzm8oDHRPVwcu9ySLetHhrGBTMMKEi5fzaemvCDCXtzq7r",
  "key17": "R8hWwNEiWPsZzdquSoPaGqD15o51qEe9DqMnp7RFGCDWzBofSyVnMDTMa2vMicS28tCvhfmYon5LR7LbnEbyq5x",
  "key18": "UE3VJVRhRJyRAYAuXrSrbxoStHFTr1c8BdNrMm6j9D2bJM4Jp41mKLhxNRTWJyqWNT3Zkhpc6vo3SohZJcKK435",
  "key19": "2nBTh8V5DatKNc7Q1FSmMH2HrH6d6QkqYpPBLgXXUaNL382aMeUzDS9qK2U2vVXba9kpxuL9NX2Vk42TABkTQgEe",
  "key20": "3bWeiQc7SNkqiQBkA9EWi5hBmgHRvpL8CBwbEzVXTbnvoSR5WnquKPdRY4KSMy7ty7PVQ9YnBA65uY38YuNWcXkc",
  "key21": "qdcWYdN8JZehto9BUZJ1ni6JTPqw5CRd5FWhMSNHYaFq8b5cN5b65DmU9ev6ihfW8aRJbKoXmYcjnhnmQwe9CNX",
  "key22": "42viv8Y8kPtpRfvWK6bSFZBkcpG2L2Mg1iaiNadSa5QwYArNpGfcgz6NSCoLbYct5zhS6xNmVLH21GSATcnjWLs",
  "key23": "2v2zwta2ytoAqBYNFxYMCfwmib8sdTNZ1eQxfs2AKeRX2ScUsZdWK9GqQntut68jPWLGQcVVQS5FnhqWwLEz9FZy",
  "key24": "4KRSue4Y8cqr1X1PEBB1PDF3dmeCsdSdX252FCRrdjxz5xo4eJZ4VM9UcZHB3k5gMJW4TADqTszoJjFpLZvboU2W",
  "key25": "2AXooh2b2KvKFZVsrpbi1Vx9rHiReqzES27dpx8VmnidEdHDq8k7NYT6yJPiKcKTYHzdNpQzbA3FUK3FNSCX7xuB",
  "key26": "2pc24Dg3MJA8En7DXfGdPnZLQM729LeNmmthkjEZD6k8ggY2y7aHBW9niSF3VMnTst1CeCZrmPHeSV2a4iyRYDbK",
  "key27": "JNqgFgvTeP9MfjDN1ZG4E1SjemuJ44WkF1TKEYYwHz1h4iuB7apYgWT8pPJFgWFpSh1pwUo9CX5pubkbxr4Rp9H",
  "key28": "4ytkS7ujvAaDSsWurcUrfFQWcqCf7rmyYy2gU7qwaSbx84XyndLh3j8BGnkQ8D8G1cV6jgBhH1854XtiYEGP4gTK",
  "key29": "2ULTdB4NkE3WYbYdja1ziFLKwd3oPWEHCRdgPGRDU5EbA4EmrTWiABMCYRj6Cey3EhSmen8Qb9iaaGBQPvA69UKu",
  "key30": "sfLJHWxBTSKv3ZnyHgUrRC64EGDuFV4UetqBHfZkj2qeZPscu1Y1hrpxwLP8WAjX9QvKPQEuKnpNYwt3vurJR1Z",
  "key31": "2R7LFa4GJw7ayqhFpa6n8QiLtENzvrJYh4J4DJs5CAUEVrXDRwRbeLJKVT3yu8DjVBfjHxUR1swqPuLit9PotUbr",
  "key32": "2vk4rxwsBeKv6GNBdavyQVRm6K3bj3AZ9KYuMAowrAfKX87rVRh5ZiMYAhbncD5B4NgXPUE4JbudHwxFT5nSpri8",
  "key33": "2n1rDY3r6o8uovmhVvTANhkK46wjEzbj8YbEX3S42EaVm85omWuqYJ6kJfUdB7y2r9RNeLf5BZ877QCAwJGN14qn",
  "key34": "WV9YomyzHE9fLus4Zi4XhMcEmVDn9LXFh6AsPcKdAEc9CtCixbnyiaS8jMjLQN1a35TiBcqADjsFJxqB9GNVT3h",
  "key35": "5ntzAVrR5dz6ggp8gwHUMH7U88ixmAoRXzuZVtfSf8pmcYX3JAMEqrpgJAqTjZPs2PPa53bJUVX1LYGLuRK52e2B",
  "key36": "5UPNm6Y45QsGHvPc8jbtzEnawzC32kGDR4HMRFjNN8x3PpjJfJvunWkZkQXECnraajJtiSaiDNJUtTSNfUThhC26",
  "key37": "25h3P3PvaRqPGW7aXTh2KXUb3reFfGDVq1GyB2Q1NqKXyc1A1gKoNEJ8gmgj8pPnUYTubhqrejcMnf3cVMrgm3SZ",
  "key38": "sCjBUfykAtGt8MjJZmqzSRb9NSB6V5WgL8hWH5SWhQ6h6mAHZSCWMFrdgYUrvfudZnDFANxRLG9cQCJ1YcK3RGF",
  "key39": "4NFCY7XdEe6PxPnpt4F7t1F7CSCn6N1yPZzQT23zZNV2Q8xRBnDtZDsBC2qAyC6Mn8Rb5QYBayB5rYSEH1sNmRaT",
  "key40": "54NsS7KA3uWMDrDAGDZvXhJJ5g7So8vK1RCLKijk1QiDL2oajABGvGou86958ZXSkJfFjyQwxqUQ6fWXTNwXTZBh",
  "key41": "Nh5qsmj1wMyMJgquPn2XAnSYhxUNZ6YYjgsAeoWVZ7aqapinHiKHvGqWmr7fAXJJxLQvrfDZ9su96ZYysmxqhB1",
  "key42": "3XngMKYo8G47MkcDP6nDpqBU5sQj6xJ5DhWBP5d9v48ic1NZb4gFGEVYMRsQtdzNwP2i5k1oPzzG8v1vfMNrkRp4",
  "key43": "24oWdaNcFVexJKMdeAMUkP2ZCb3ZoEPqvRhf5YR7oCNXbx9GwsLUiwNVYUMGeYGAt31wsATvZBVxJvX9wuhi2VQT",
  "key44": "2Kes5FUHsYZXkN5Td7mq1RxoAHDNQmzaUMRX6eMoBfWGE9Q2SbsMq8kX1ooPcweXcFx2kgQFKDquGJMkbNYkzTQD",
  "key45": "21u8jZobSeyuVH7nz9aEMWJXs5mc7YzPn4Lps5PJ8wTZ2eMdSkQkYh3uYuUp8qvJLTQKmojLoujWq8aW92rK7eYn",
  "key46": "517vNxsdHooPX3QogA2hdkERxad6CSnREssgX5Rt5GoyPAuR6kRhKXo2u33STgntbgYnMFf1njohuUuCu7a7gtpN",
  "key47": "4Fg7zXq6JcYZzRmiRywyVdyRYQrX76PXNTi6tQb8mRW5Bna4Boap3G174PVs8wB5kh529g59bryen1UDbtNoNq5x",
  "key48": "5MKY3RtcrMJbNH6T82LXXLPFYeskrGWsNWQC7LYgnfQfEqP7N6WrqjpWXPXh2QDPGNMYbcLQw8M77ZCruu5GGGGZ",
  "key49": "JbQ4QgLZRtvvvKKn4RZRKTqadprznKmopvbVHy3NYH7zsKQ1kf2J2EjhUqkKegaRfXLtEeLWukhA5yRYCQmzdK4"
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
