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
    "43QYWYioPDNXAqW8jQcTqyEfyirfSrUmrbRgoJvpu6x7pZJezJzgbyWxbKw4sCSdDYrzidVYQhjYLDLsBYJMyg1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "irAz78BH4YuEcLm5CWziz75XAcGfyyopNKw9JTv7YfB17Y51CMTo5cH3WJKJoyrVJ9mJAAYEymzapmbNVH4Rmgp",
  "key1": "4P9HxgWsfA5QnPLSePmqY8P6yEMNsYoYzGehAhAUrDfzWpayR6YTMZ4G1XjnTMMbVS1dWevAn5a3fRWR1QqwyZtX",
  "key2": "4dwgm9Yw4c51zYVoZN6ViEfKStNUmGiR7aov3eT7HFvuzdJFNFgqNKnTinayEwUU4j3RveJHGKzMFBig1SXFgu44",
  "key3": "2XY9zXCdQCZDs99mMvaaAHurempn2FVr3zkSeg7g2noy8UJYZ8tYBnrnvExDFCTYVzCmTmXijkDZCSbt8Shc5VSi",
  "key4": "2GLaDLZEHNWCmVZtX5Pq7C29jAGt1vgLsURwbVuWqCzp5Ucf7T1GodZNeJHj29HvDEhKUbWRRtvoS3rb85E1DBgA",
  "key5": "2c6HVQADpfXTs4CBKdyCqmPX3uedZ4dmnVwf3NyjsiKTQhd9cSg8F3SZ23rCkQz8agWCtaRUugYCnxv7rWwgXxUH",
  "key6": "4rzYF8zWq3nbcnYPb7aAwzfBfqxEKfYhPPFXEQmnAv3ZoJEJvN1GbFTAXCeTq1w3Uomx7xCDVqquU3E9qC3FvRDA",
  "key7": "2hngFtuAbyjRXaUsU3U9RUhmrKBM6ffQQ9GEsYrTazmZVZ7xDWmsc1CAC3c6axBhofKSWJRPcejjfj7SYmB9dgyD",
  "key8": "3QiYeUQevnvq48oAdtSnoHKBbFpSg1s7zHkvpKyGY8z2QhfEpAwBi6idiCk1YkM7WuakbUsgLG2EvqweFEutrsJB",
  "key9": "5LTdoKxPXyaoYyrMfDidwiWTYgdcsQebcwBfJbXCrfGyWejdcq5EKCzjuqDQNDCmCM7hMEjnVrrQctkB2Ud7RTfQ",
  "key10": "5Fnwe1BpqSdNAvk1wyA8m38YAF4jjyWXT9q4UBtiWNiT4UjikiXDp3TQtT4nFVUaXBDnLtogA58JibMcN8xbd2vG",
  "key11": "VPJL7rniHFkVHsnofRMdpqeGppDJ26baQto8yix2N6GP7C41hWDgFouQdE2rjMSzeE6fuity43mwUScAikbHVsR",
  "key12": "gF6GVVTjjwkBj6aR4jzf5Jw58pySAeYedTfuETJ73aCrJtw5nZDM3JipH9UoqNw4CjjeeNm2yxSTRDG8jjYWTqb",
  "key13": "5H2xXGTa7towsvUvWhQn9gyHYWcggWn2gcitcreWTRrKZTxgvx9PVwJpnAcFMaJt1VYhBVw5koZF2FYTa4RRWsgZ",
  "key14": "3EQdDf5HpvZMbVBos4r6hdttMbKFBbnqQDoJEicnrUk6dei9BZaS4ANBeSy5uGAwgJYFBv8zWv2P6YVuHiCAXek9",
  "key15": "4t6cSxAZCwiHHnRprm1eZcx2etGJtkCocoM7szv6T5x9ZCpuUYeGXXquwnzTdmKKEvkBxVcE8ywXaihC7jmVDgyr",
  "key16": "56ptBw8KBEFzKQvariE6yBJRTq9d8YNQsw5Ea2kBh3YFmLwxHE4cJ5i5YJM3YB7LLfTDLzDBH8F44fDCYnjUtTu4",
  "key17": "3mUMrD9MoUVW4SjBa3g9k6LcL76WcSXjs3ztX9aJUXUzvHbaCWNkU4TiUXqCMTrsxrBewaStddA7s8yiBqdjJk7r",
  "key18": "NcHgyVcz2vJ8JXNjubsTRQ8hNw6FxnVsyjV3vU2yoZasXgjhriJkKYbn19E7YZXSCmVtu1jPebC2nBPuyRKSj13",
  "key19": "4QSSvfyeVLwK7nZmt6i9BcvaR5gFtCmhnmtSrshzK8vnJK1qD1XApcLZ3PVADuP27YMf3Cd8Ee8vJ2FjfyD95e4U",
  "key20": "2XSeDJcRGmZMqE3aPL4sjxLooP1NTr3hbQhSSCfgVzxwT7xKhWSExrhjeNvG4trdhVEjTf5dosjtnA7p5QYJR6yb",
  "key21": "5ixqkB5amZA3DAGk6EQ21a71WxXAPJwxZTUhJJSdNoXnxd14NrtnAk6hAgfpTyzP6pqAcPNkmXGuabZT1v6wNYVp",
  "key22": "5sbMVsXSedMW8onL6SaYck3wpspGrzdhJgm52zXNSMomHt526imUhmP8zkNT4o4LACVrpacRkQJY3Mn5uLYLt7AC",
  "key23": "xgAYDfweLFfNzbmZ76T1B33mUzFQbP5xp7LbD1AFnrC5XLUphJYQ3bBReHiKkPz5T8cVFofCX7ENAaAjUUTmxdT",
  "key24": "3mF2DmLBNzrxtzaaM4kREB5pCEringKxyF4y9vT1Vz6jXg5mcfysQbemB8tHTFt4SgwBPmYVKxTVGncJBzQ1i1Bw",
  "key25": "3jXbnnkiL9cCV7kKTRpDCzwNHKKDXL3sqAq1Td42SW6nJRWNg68YtEuLbfmKDU1N5rj1t6DUjbJnYu8ejoy6zRwB",
  "key26": "4GpuEVpiLMDtbH1YnL7fftN3AwV9QwS54JVkYm1XTG2BaMScPTxpMnjnNdrKwTFmZXxYnuCJRtmjXACugRycyX76",
  "key27": "58d91Vx49wEd7PqEwtD5WLJmb2YwPMEU1S7QvHREQ1ufznUded8eFafyEMarDpJ4gr2wiMG7US5k9FazL7AaLbrz",
  "key28": "3EjUFGBmw6WU5RDRGMjPyhgkCcU7FZMysJYfxjSNUovFsPBrGte2khyKUNQQRiBSM2yQfxuzyeAAiCA8NhFjJxs3",
  "key29": "4Bxry4J1eiEx81jEC8jgxeM2porrKKcu8FEDFrqp84ksYHtbg5JN6pQ9ksKsgkTyF1J55SRv5wpgPpA1UCYjEqFX",
  "key30": "3UDcVwPWzJL6JNSs6w24qVesxj7ophCSr7xycuWxVHwJQeUWMSmJ1i2G7ETi7Fk3FezaCJTwcWnDPyvZDbMKvD8z",
  "key31": "2q9MjQVnjR4quXUuUpphSs3eYtoSMt23hJjdVzQsTJjDKRdYHhQgDq1yQTpjcNwNb7BVz4mRX5A9D4bJvTcD91r4",
  "key32": "3ZnqeJAAudxFVffmk5ctZxvHSxYLfBLwBHSxKrDiec3CK8obQ3bSu6TdZur6eGeq3rp68B6q2uoeMNaKPZ6Bui8F",
  "key33": "2jWKE3PZAyCi3towrToqyGxi9Ma3jVbun2PuSa686jthDpTwjLsmmqAXYoGtmnnknjdWzDeiA7qwBgZRNdJpe7YW",
  "key34": "3mU3g8Amg9PFdYhEiWh2HK7RdrumaZXwU6q3PGS4G1pnkiwqdr5HJGw4fs7mYtB68kB3bzKoX26pMe3PqHSpy35M",
  "key35": "5whTuGjgaScA5Px8QxBphho4YedGPU5BSJpPXLJHhHLHZg4gdXVtCRVuauGfKM4jrTNn3WzgoujozxThqKpmHLAo",
  "key36": "24oSFZyyhDbkkdRUSsFuZaq456JDgdLfGFJKhBCJhuDCacQsN7BtNbdhGsEMDvwAzXHeeNyZAzj1z18qMj4hk4k9",
  "key37": "369bXggG8FsfTAQVpAhRd71uetwypEfkEuuAu5XEHEthujxRDXFRf2U3Cn5LzzcQ4Q3TvBVkqddH9t5xMga7oy5m",
  "key38": "2ZAH6gAkcghx62oLbbjH2nQz3t43ahC56gEqzNS56BWLa1Ktu3kfq3NzsY2cmFScm9775g7ijYyBmF3X4XdEvmRZ",
  "key39": "42dh9LkAEb3ffmPYogSG8omNqD6uZH62FFLvjQHs1rXac9cxWLXQM1tkCkECQLXtSxzVNoSBFr6cnHJGQerx251k",
  "key40": "42AtuBaMVsH9rjiNFRYG4sWntU5oFBmYpckvnKeL3SLvoqgk2NtMc6nRmG8Q7xF6kbKDV7AGxjjb4LFwG1Lct5Ed",
  "key41": "4uvHafi7SyScKNeMvSax913xDMyfTxZhdiJgoTnjLrP2XcHdQyS8n1bvmJiAwq7bS7XNz5zCqSfZ5EXYusCzCGBf",
  "key42": "3Ck4LtKvuRM1rjAsKFwvssKFhCANjpp81shKDLvCzHnDpfyX1Uje7uhL1A1bUM3mgNnv4Joi2hj3pm3stLgBAcGE",
  "key43": "5LRKZpVd1351DapeyT21uqAPBHwjxKJT5zn5BHARW3fhNzoN6yCwPHsJ15WnLxbF8spyFGTpLYrjCezRVK3VzroL",
  "key44": "5w5GhQPh9LzVcqTRtqo1ZDzrc4moopyT8PpcHC8peyRG44faYApPQ1LF13x6LGXJXhmVqjPUYN7MWHddivqApar6",
  "key45": "iR2jn83SH6WKYbNxtfJMmXGFKFS1Uyn3EfoQJ6sD4oeyQzdzRUT2ACzvXEi6LraYSbvct9ThDwSm7GuH4uC2ymA"
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
