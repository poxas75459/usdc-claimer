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
    "5eZZQAfYMbqZ5Z7sxa9DQpXZT8VWDUGoMMYicUzEs88RpGqzVkHAL2Z33j93jzdJuwwyEv9bevMUzFgVKdDYyNVp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "92fB4aARCqMpViVi8CUpzxCVHT6hbntQ4erYaqqgq4hdX4wc3vMVYiCP7aCuqRua3zU18B2LcapR3tgNEQHCT2z",
  "key1": "3Red7jDauEYnehAUFBJpcZ9xQtSP553ptEVxX1LJgGJcbKGh2bAfc7nXAVjaPGs6s3oBYuG7LsZ7PMi56rYdWsqK",
  "key2": "2tuf4ivMwcR4Z3faNtrwA5piiSDRMo1JpPvwD1Exfxs57xpJiDL6tbku7VfXZdugXwS8pUTxn1XucCg5zs9wYc3R",
  "key3": "4qJ74GM6d5UhmitqP9ELemXEGf7CyLhWHp3hrKUDXwKXFpbvLvPUihs3aKncAAx1GUVCrqBvXPYJLVQSs5SjDhK5",
  "key4": "2Bv9AeKXhuhyixrxw63inrXC8DBtuqHT4HzJWkXwzidP4oCfyjfExdL2ogSJZokzhQxuMosQFfbKcB4DNQKi9vTu",
  "key5": "iuobXQodZLEBPqET39MrzTSyJuMEqKjyYoNysvrzotjUAL6iWBaGFeKvYQEUE5MTTdFLhWXXJaqNnkHxTSTAMdz",
  "key6": "2kD16Bk4YWqiYzop5h8rgybk4WV2xnhf9q55a6YLT5eeVvF3PZ5xxDYtEQuUReKa5zSR2NFn6vLKZ5NJyh3Q2yA3",
  "key7": "238p3gEHrAJL3BMLrCLednCaD3jAsAJhHUzied3yiFkiKifbTUzWH6LhhVjxiFvg9hffobpVi2jzMNk96QQAVSLB",
  "key8": "XSJJ4Svk9CvApVVUukE1MDS2wTafgTmu4cWWRxLfDQb7Syai6ERzPyEWDJ77uYnmKPtsaBHc8rmfUVA2pMyTUom",
  "key9": "uVkvVN1fVRD2f7LotBMHPFrWmoyeuPah5fuEJRQif38ZcAvXkPKaPfEDogJWENH5c4ZVgg25UrxwfTwuLHruAvV",
  "key10": "61Fcsba65hCFLNsToWKLUCHwk81WAcsbR6DatZc82n4jdWA2hZxi4xUfXJe68GKnHqJZyqZWBFYkWmQWtXWH9j3E",
  "key11": "rc4ZinBqFhvtCRYaEb1ZuA49ECcCvELcbPzxA7YjSKmM3GY3fKnQiCR7f5VD1u9K5DtYd6QfPXa84n8gKqFRDpt",
  "key12": "M71rWQt8P9xkApnAo59Sv3nRz4TzQye5c2ywxRqCgJCHHi4ZTQ2CfJrT6prFuvEtLHy4QxfHQFUUoMDCV3U7V67",
  "key13": "qSbHw2kzbXWpBtt2oGmVSovqb2qHPBhQjD7wifyzhEbemoZQ3ZYdojfa2ZdUQPiBN9L4x9bdcCjjEhF7D172cP8",
  "key14": "3mDCNmC4CGZ2PfmJYnd9KfdM27SeLetWeRZP5WgZxhVnCNjLfcP4wiUYCqtCmK52Pa2aZRWwjDn2ePxS2nawCxuG",
  "key15": "5DFMwtaCU5swjVc2fvkAenvU7HLawm7mSnXE86nSkGyHXVd717QXL2yihLwt1uQ9EEYikRoAG7oEMdNcTJHP2hgc",
  "key16": "5rHYhWYp7Lv4HWdXmVBgHCeLfWQ92UGkQQDBoB5f778BNRUdfa84ByZhpdsmuq793hgpgoMdq1si7hdvn9s4He2c",
  "key17": "5x8fgMCK2cmRaEszh4gRAd22xgMeqdZxRbwYzpzZZRdw3kmBUZaGvJdZL8QHhxkzTjcns52Jn58H1thxLkMUKumR",
  "key18": "49u6DbUCbXwkAkRHcC3adErwUzM2juMS6oi9AzSDUebCC9ncT5uwrfymbcY2DWkTDMW1R2Qro3S66Jsm3dWNX7Lp",
  "key19": "3L2SwG6kCA3MdNGqUTvN94dXmd5KH9rA6tAqRTq9Jbf9YTWr7NCc9QT67K8m2rcafnn6pvcxzkKcgi4FYagFT7iR",
  "key20": "3YwV32i7XGjX6GvryZnNFT2aa5aoynd7iPsB1iqk6aViFyy9NM12ETHKTeiEr4HCFgjbvVsShs2DbiqE1DWDfuBt",
  "key21": "6tKbseMPNejZjppvthRWFz9iMXqizcJUn7LNnnrULkpiA68RJSkmZD6WDjPUxdTYRNF7McRG9feZGe1boQ7jTzf",
  "key22": "2nSqC8w7mL7qsvmQmTLjiFc4YyHXajPhEhQoQ3JkcPidKxvffT7Fx9He9i6k2RDwjmjT15nmsd11BtVNUBV8i8DG",
  "key23": "ewzBg8zofxhGijaPBw9LMPWZaWmMGLJ1mjCjcrx3gW8DdoAWj1ByWV5bE8CYYaJX45CqxVDXo2JowBa23MX23eV",
  "key24": "2othFv2aWcX9JdyRjukj1bzYxwGjwQhx4H44WcNzuJnWw486qChZhc8dEdWvJuNuGrXqk3Kn34QaHKBExpeA7xdr",
  "key25": "3i8YrvbBX7qSWZDkQ5ALjyAGj8pQGQYXB8tu2e5vUrTpFodM2yF98xocDasqwhmEHvz1rLiRP26Rk8cEZoAvoP4e",
  "key26": "3vZXCFxRe8mEfwTK9irmccA8ZoQL8SquYbXrtFJmuG3r7dra719NvovvU8Pu1V1Li3s6LF6mrMVCNYm76WmFV6Cu",
  "key27": "3pPr9tfxN1cM4SaRyZTpKYP4BvxsaMnYPxnV6jRKcBmeWzkFvLdnnvPXE6QnfZDPnUwNaJwTfoiDmPWNP7CSmkuH",
  "key28": "aQK7GpFezTh9aoMCWCuyZ4B5zdfpxtwqh5mP2Ke2QFsBeNDeHazufXfb8iZTLnNhJkm7eo4PivoH7ShUd3QdJyP",
  "key29": "2wgbcQvmADUUJtcmJXJEVgpfKN4sAH34NUZDLamWxHUp94gZrtLcH6WNFYA1Bg3JWXLbSpJJUbctCRUXHzb7J5qf",
  "key30": "5VfXShXYL5ZTiRi9vYbUzMRnvCNhF3r2tnPYjcyVmKajgDzCzJpa2iJhVnr35Qn5qV2RPTuvH412YV95TZZUJxWo",
  "key31": "3DnNSa1i3Tjw1WDdhArqCSdt14zRcjUikp4xnheGh4vSHTscW3G5tntQVHbhfyS27X7QJ9eD35p3xuv93N8LkfxZ",
  "key32": "5RGv97PkvSpcDaRpSycEnddDzdNyERTK2hA5hXPyRGK4NYLmzBCvhth89ysd6KHzNZsSY6a1YD2xjnkQBzZuiGxo",
  "key33": "58n33bvtN5ZUkFT8D2dvTJBpDKvZHXVnLD8773G9Tg8zQkhiDQVemkKZipMXoJTEnMzjZiaLTjKsgwwaNUgpPCJs",
  "key34": "3jGeuZnCtfQUnG63s9PXN4X8Hgg1825rMHSD3VDFo3VXBtoC82tzgELa5t43mXXbwcNUvmism1oVLnZ4CPeRUEmg",
  "key35": "5W7feN4ZxutR44rYh9eWf7yLfyQt1knDCx2DjgEyde523dG5Dtvby3SRqAEp8VY9kTwn5iV1XPJqMzHGL5xs4wW1",
  "key36": "4irHyEgag8Tr3RySvnfiV1jfEyPEGJ4HEkfXJp6L38cgM5f5k2HYpndNbV29xuWZ1DCriTvfPEyEZtSzjhqQ4LQb",
  "key37": "61V4D5hvMbWrQWJZvDVNgzu6VR3d5srsZqSX1E9RVPHZeBSL9MhTmDzdX444ihFeBsvdUmWxYA9Vv52xYc915Dax",
  "key38": "LLp3APxacKbEGrCjnAZbiZrcWfAeWe7j74uDH8KfGY4Dajfu5BfQXCeCmV7WgE2SejUYHpFWdzLdQLwfWdw1DoX",
  "key39": "32REEBESPSsxiPaxN9myiRrjBGdB6LEG1hxLvCftNdCvqoSRXvsEFBDBnMWL2bPcJ5Gc28NVbAzrjMQ4v9YPh9VJ",
  "key40": "U3WXrYVvYUGQwBHCDL4x2D5w3EZh4wU5arSv4dMhS7PDmczWZ8fYRpaj1U8AXGPP9DycgU4K9ZXmAd3R1GvrJDp",
  "key41": "3DnEYLgjtqcvJbbib8c6b7T7Vh9Sy7ZQscEfwFs8uKUGAc3R2ea4K663by57GGvAkdFf1Tk5g6cnCAF3ZwuX9jAm",
  "key42": "efsT2cMJFPYmbS5ESDshkt1W9ffGLNnN2tBgiAhrLMeiZvMWJrZ8J36YHP7EFemvDcLVzomLZxQMdVVzo4J1TLw",
  "key43": "3T44J75CpYDgbTWffTTMnv3vGEBzvJhGJ2xv9uxt4AFL25aBK4Bikoft11Q15zTgyikmVZSH6XN3qFqWwYJ67KzQ"
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
