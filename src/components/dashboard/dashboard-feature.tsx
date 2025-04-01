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
    "5oGbxq6qfPiWKFzy4vXMBCE9kPMVgTHHReQFjVuRXyc4tzVHgFqG6KH5RCaT3ubSfCrskUYt2mU8RKZLSPK6L4BU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L1dFhupN5AU7cZZgMTUGVdcNirYcXnkMENgNxUCG2gCGySGz7QPP7yAxZWWcrFpXda4yXPkhR45qbyw4U8nDG3R",
  "key1": "2fNB39LycbXJwHyDb3FWwzFyFXuArg4FRgmptSpzUr3yeg37pzm67T1vQgT6WgSAbBREEdN4cFMeDPNZ1vhjR3JM",
  "key2": "4cmPmgxkVmNABn9K5dLqaqgnw1sxYbEAfv4WrXA4YMCHvpdMBqpdkoTg1pRGZKq1nWaHZqwqHpCiFxAw3Sa9ucBi",
  "key3": "2PrRzbYswDobiwy5fiytRfXxs3HndFbGvrqFCHQGanRL57oykj6SFwQrUry1twZDwdsz3V9vUKfzPyq2sfkq9oaS",
  "key4": "5vR2k2wrA4qWzqhjpLVciiGEvXinU6abVkZ2utABsBQBAj1ebqQFAPGGjj8ghrVQ4NVDQZYK4NEWoxWPGgUSCHoN",
  "key5": "2Zy2FHuZor6XqoePLVvmsm52hoppT9kihMnM6MpdBs2sU8k5B8E2hmdupWzJeYQAtYG3dLnyLopVWMBD7eodFovp",
  "key6": "2v1QhnELqGHW6hJusc9ZPPnGFzZtk2exUmWZZGp5hHNdAJSWrjiYxmadqEooA5croVwQEPWCs61zRhzNHbAjX6hk",
  "key7": "41Q2VKhJMQqdRwjapYoKhXFMWrkvrRXe9spYkUEuXFj9ybKNtSAk9pD77aRyoXkSDnsZcf4YbfpKgkXUMD5rYAvS",
  "key8": "5vv4coFFdSXycmT6woEoxkPJNtmKyzWiBcCUtGyDFYxDGjnbDB1fM4sVpysZdVG9EFAcshPoGAaefigkHKo4UB38",
  "key9": "4vPd5BZV8rTKbLfr6EPtjH5CW1h1sps1mE9GwUwVnpRNoKhb2FSi2QwJxtE4bEvMfDF2XgYoT2ibJpcaVXomnyV3",
  "key10": "R4szdNMYoRFMVXq5FyF8cEjQPmJNbi9AiUDZJdK4oKbqjaHGgdP3f3FQFFcRmLTgNP3EvrJyEq8djQDcmNPSWz1",
  "key11": "49fcvRfcQFYo8zwiCkcogQAsVxwUmuGJGR2mwZ9f37dCE3X8iHJP92TpzGWQLdfMpgui3ens8CAKerjiZxrJ7bjX",
  "key12": "3HqSGUcxUNsfVthD6fyAdcYj6sTWGv5R7Jg7KLvyUtuxaEaZJ2k72swaXXnmGtb3mX3BhuLiaWYoc2s49wvDyTba",
  "key13": "4AjEkmQPofpL3hiQoCqad4Hyr61LuaeUvkQSVK1ZRpm8NLnjp9fbhVpF65VuFBBkH5pc8iSYeLqok2UcAErRJ9TB",
  "key14": "4aVTcdB4AxPWEPqJ9c1Kh9e2vGnnFYmTDQsNnfopexd1L16tA7s2rWnHi49xzfT3VKzukrJhesfftZJP1WtbUaQP",
  "key15": "NQQAY4FYVfcm6sWVqCCmRZwUgnnA9NAxhnxta9Q8yuWWeA8WEa2B8srUf7CjSv6uG4aJcfHEyx3AC8rjtr32qbt",
  "key16": "59FXP1JMidRodTkM9K4zMdTrPsrdUF2PzckgDYYALidXq9VYjx7CiPFFPJAfXQQbucfYofUaSRXeiYDJxoz2eVb2",
  "key17": "3rRPA56T5bpjfE1Lb46n3NUAwbjiJ6rAznKU13gyXdenS472xVms3P49eLWwS88xe9ycxps4woSEbwCujdGgaKnA",
  "key18": "4DKvL292kgyBC1QLBgG3B46iQHuhBL3rnxDseoskHZpkDQMUGo55MUQVQE41Vh1XShfcuntN3NZbDYFTCuzYRVKA",
  "key19": "3EmPpP9GeWjaphdLzS7iTDQJmJBtJoBvs2ogE493kDTpA8Qkxqx98y4ypQBVE55DARhAcL1hMA7BRW6y8yZCLwQ1",
  "key20": "31Dc8FwA89wz2kTwJqTmjqv9FyMB6qZsWZ3aAuRdinCq484kz2gx7or4ZdJjGJCGEUeYPQxKVRMgmKtC58jKs6K6",
  "key21": "5BX6mFJqh3SoSmx8rJpJ8kkijGcmeNaLV7snYwMu31W7KyQS8oHesbaWSydmrCmFCbQSX33i89tkwe431CDuHepJ",
  "key22": "4FPmVJV8nrRaUM597d7BNjzTtYXXA5NtWHKC6KmKHraptKSeEovxL5Ajd3ttPWcfBS8jzaurm8mioxZhpUQ1s7J",
  "key23": "5SK4sMS5mREfCb4s3aPh8Tc58tPn4MccbYgJK4EkautArTbPvgBiQnfEtZzgFxFXa1TLoK8sJbMXCX799KdTJgcw",
  "key24": "2FGMAem5qUTihmB2AuuYuuMegnwa44h4LXVTprMDSYgwnEw4P6BxMWaaitJ8j57cyY9XTdwPhAumbeeFg8cLkxgM",
  "key25": "2BsXQ2vtyhxpY26c1AwybBPPMM2VPZeFN4n4E4D9y6F5wrVTHZo1qFzLuASxyqv5dgFo42QVCjW5bSmDW3hZ5FUT",
  "key26": "36eN44ARDS8YcRYcQnGRxzohrYdpTvuBq1pBaKrohRuNMxVf634uVEQT27Xjzy1n5SJJmVfRvWQSwAsZMrp4g5ad",
  "key27": "63bMZhyX3JbawsoFmW4y3wmvWkAHTjQvEQeaL72wQQc78DWuAPo6mzkUSKD55M459MyDXCLqiaueY5PQii49Eeo4",
  "key28": "5iE5kHBnRcyasGqktoXzmfw89WTyGjt4JQGcVL44JyaJGLWPGU7zoMpr7zWjqwagwGGCn1GJUJmKfw5MULt1Z6oR",
  "key29": "3T4K1RotC3LHbseqvM3uiPAYap9PdrE1ScBaydvQ7nj8CpMVs5CsL9fA8RVqpvcJVrJxJCEPH7M2TgnPC6FFzeDx",
  "key30": "5U6eCEBtp8VzQa3QU8ZfaDsVzHi5rA6kYzqrBmpRHKNkNjyNwYM1KVSjcJYDjwg1dXoYyEBYkPbeWEY4V3GvyTLj",
  "key31": "4ZkSq1vmQTEGqMNFUKW1xhDmCsukkiaudggStDCeif272SN593Wt1yw5TvAKHvGCQ2FqD6kWwbUR8MnUN2dsZBiP",
  "key32": "rWK65auZ4Sy38jKJBJCPCSuEu7n8rNvPH8XfWZBWdTRNEVtAUw8LsC7bNqDwWgn6QzB5oaWA2z4meQnAXR3mCdo",
  "key33": "x1LvFp2pjpxrRvWrtnQPRDJL8CRaoCjNVyfp5CuqPrHhebsbzTkKeyKp8RNSiqhBBWY4mcppM9xPYXQMwTg2ngs",
  "key34": "2Ti1Dv2SNbbZktENoMQNbvTAEfCo5rGS9jW4XeRy1sXP79W9HbiD7KxS4YthRDwGgz2t9yphGg6ajkN4X2znz1sy",
  "key35": "3965sCUHYLrgSMrNC4kWSyxpPcooNQT6U2k83Qyzjvi3YsN5jXae1yu8ydG1SQfFJxVTPJNYuADgM3iAmWayB7cR",
  "key36": "4HiPKn2QemCoE53SHeMj9LPDQ5otwvhg8XX5Bd1fid5eKzp2vBnFwEaax7xiiKUBnzECf3dV8YbQhUMHXsteb62d",
  "key37": "3ST6vznDeE4jmuNDrsjL2mt7UbFG6JoUQGZtfwPZNQqEnsMKk6d41vJ2LPjypNHaLzePZ1uKLrMyWdcDXFoUVcUX",
  "key38": "2ttxQ3iQC5RTxgABXjhpCFrMVhtwnD6AHh9fiDKE8vMoB2UnymMH6FgL9wYtNGXDzkvEg4xpF5xt9HaN52jhJs12",
  "key39": "3XjxU5Kjq7X2RQKxWfunJC5FMSHaPgDt8dxWvico99AJhSZB4Az2jgvBU563wXG6b9hVHnP1QjenU1PJL3FGK54P",
  "key40": "2ZgnDMhiagpG2MKx8CSPmQ6yCkpii4ky5DxRFBeRXfQaR3J1rtAj9wSJFCBUSnjvNn3xtkyNr3XeY23gCkfPSxUH",
  "key41": "3X3tUpDz9GVszd13vz2exTzcTc1PJJfEYna4ZNjNe4Dcqa6Jr4wBuouih1DLdrBMtrFxfKpu14s7zvNHC6Zjs87W",
  "key42": "5oBVu8yiL9re1r2BWurMsSd7XdDoRAvY99Vvi6VGgynadt1f2kd84D2SS4jctDWE5Cz5GGB4VpPNyHnXth4uksSr"
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
