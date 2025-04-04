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
    "5GgAQYQhzqUCqBsSyfqX2wAMWjaBB5PNjqb4kUKRDqHBeZ6VmCTxodtL8nzBiLMz14jHJJBee8Qj1oNE7ryi4hqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uUMZdzNxnMgmwjU2bGWHXGFHHES7V77htQ2NZuFsEsioWEsyNZd12sZidRt3UvLjknkGBPaWqNKrjpgaYq1uqh4",
  "key1": "4BEYrkYqTm1fJP1d4ZegpSW6QwbzCKvHorrcZn33yJ2jFgRDtPBJ4Yg2y5Z67G5cEN3drZ7iaENqQHtqvWsWLJbx",
  "key2": "4BzVt4eH2ivPFJecC4bQm1BQNfYLm5Pjj7k5yuXbqUewkTR8VicJYbRDcMsHs26QdTgJbUWwVEq2yLiP6EiqMSTB",
  "key3": "2Wyc1LpF1547JmtaDM6sUKM2whPJWNj9an3w2KUsHv5u7Zc8BgubohNbxUJ3KvurGBFMtUXTtPY3n815GF5VSfEE",
  "key4": "2sa2D9XuEYYTrinU3jp39nweRecX8hZ7M4xbQdwBQCP4SnNxh9qGorBgWE2M4ECBfMMEF1BPzJW99b1DgtKePKzi",
  "key5": "2wWq2VsxPRWEzVcicct1n2DSjAgjqZrUWuSXa9AWnR2ikiZZ8m7D8i6ecHzwu7AZGD94krU5ahbDYTCnT7fR6K67",
  "key6": "3G58GnoLXm9iw8eZXmmDCtb4R64LYcNMBrfvUnLB6nLossn3M56H6GV5fDxEUoW6DYKcVCt6CnJiNjTCUKa9ZeW8",
  "key7": "TswRKWrxF1JkLYhThtvkVP3KaMbgAvCCdyfaSfM68U1i4EQGeemqGRnnu462Y6YHXx2dQFaNTHS29t252DFCccP",
  "key8": "ghMYUjUPqJXHP8qC9FmbeU9CtkjHsmWX5f5pgBduzoVYHJ2DUTLBbK5JBKYoDmrXvPtBu6rW3tqr5xFXV6nBQ5x",
  "key9": "5PGV5M8gmQTm4pKrFgZoRMfqHe7XujDY3jVi1GGvNBM712Ba6jnJzybzVSmSXXmbudSyUmgjYxPDLwbtkThTbqVS",
  "key10": "5Ka6Ffch5uPu9kWD8WfrKP2PcJb6ewod78vJjbaJeRHQXQGJu8oEGttfsEXTgg8zKKqoK66zX259ZjyUKoSxVqj6",
  "key11": "5XMknUsD83xjDNKptWPhVM4QVgqsG3fncQbBqbEVenYrGurvppektX5JLs9jmNn14mDxKRmVvfiazaZcryytufnQ",
  "key12": "hdwni6vtpoKFP55PK7GYP9eZ3VCJ2igkr6NCRd7VNKVeceMrv7pYRKdcKBpy1gYmfYKrSFWubReYsqX3PzEbyyE",
  "key13": "4y8MnFGrb6mRcReyTYYNVRqjXgD5ekN7DfHkQEUW5K2iVa96QJXibRzPAxHirKBHwKhF6QuVPNWqLcrf9v1N9WNb",
  "key14": "3Jw2Dtcw73q8xXW2inM5UuQwD8fkHYqvH5d7h2W3DVotsye2nEPLrXZ9WgLBDCV78kKLfWMjtxX6M4BNk3Ldm8h1",
  "key15": "NyGWKcZEy6kUJbxDHPBhA7aH1BxwzSZCMtdH8FhFkvdbrFe4S4WuWMdzzwd65faotbfKzNo3FjgpFfwFaxaP5Jf",
  "key16": "2H3C7HRgcCKe4B71gEyFPaQ9EpP9QRV2nP6CBpoT4VoFbyoX9C5bvdEHWBTCHJP8YDFYCagtvFvCGaoDpxFvsFNF",
  "key17": "dcszgvsGhnEhvhU8VeNywp8vZQickTgHdtPMXyr3zej6Cx6BpjBE4z3aCjnN2TGEgQQ72WGXwzPsBXaxMCyZRSF",
  "key18": "3f2JuUGJgtqsammgfQAnYUAhx36ZtpPN5sQ18XLEPgJ2qgTTk4G7V6bigzjG8B6MBZ7sdFHXQfL1QiDQwjXCpTPZ",
  "key19": "23uDreV3HqrMchNCuwGrpAggk9WXydmrM7hwuehyoqHw71LYmR5ggKNpV9SSGvfVJP6co1VRgZh6odRbu1ndWZfw",
  "key20": "BzBAweeMXDFZ74UQwkz9eW5MMnbhnq2EkPYBMD3a7AhitsUrnwfXa9o4B89eDCzDMvqDC5fvRdsP7M7uR3GVxZi",
  "key21": "2F2Mc67mDonnpVywRgTrhrvYSi5n2tAoM2rcp5EDsSbxJ9eG2kjynA5LypCedDBhYV9rE2RTbtrSCjxev5w5zUzw",
  "key22": "gMWJS1wKRcprKG2538JStvXf4n7DHzK9EZPKA9w7sFhSBnoyKhxnTiQ1rbwybLyi4QadGm6wuUwFSyC1vMrMsXd",
  "key23": "3MSyEUjssj4uauaGFwq14bs1QrZ2ZN46Ed2TEiSbjFTGvK5ERmv1W683TXMtSVgD1hwTKdc3gu5UTewwXP9CXoyB",
  "key24": "3drDrxppUk5sFQTTtLdJF88NhAeundyW53Mju1eMUMwBWYrgMhBjuowbMLLd9omWLBdSMv5wSW1dnxftNpp7Ruy5",
  "key25": "A7vD7eoj2NzDunvxZ7baavY67gAqGwH8zpG8NyMbPZSMHfyEHDyXZ6QUEknXbJzrHJXnmRpnLpxSHajUcKnSNyf",
  "key26": "kHaf59ixaAdsjbZHUpndSu9BdzKZWJWRmvkzgiee8LmRXVyEGyccfCURCCEqzS5QvyuLVkjQGs3dvXMTt2xmaia",
  "key27": "7HsWfLdgzm2ju5Z1eTy1eYuchsznESN3CjGufK7tPXV5ygkfx6vkAxkdmbWqxcAuA5nsrQNWL93Hu6Q3S74dDok",
  "key28": "3g2bXvLhBMVQx3BfeaAeTVWtYam5dBSxCkeTpSAWK6RtHRaKKhanrJwEhnKa5k9X1QVKVtAzLvpu7mT6HzSeRNSC",
  "key29": "MWATiXiqHNYo2AuTGKMetyCLvcUtvCEJjcjj4hZ3YiTZyNzG54KPwuBTBCWn8ZmABjoEhtSA4t8fsSJ2RUx9Eyp",
  "key30": "iEMCm9UWUYm5VoNMs1NSXugiTHPHPiH6usJbEPZK5vaxtnzVEwEiufBKpzRcZijKBhaCTWMgEHpzB7LpndtBg2i",
  "key31": "53Pd5YU73VeA2YVDFXwxKFK3Cz14WtqXCMk86uL94ioLiRhYYvgneFLtiRHdF7WPyS9uPnoZkXY4U8LBGbou9DgW",
  "key32": "29Ge9dCunRQbGMTj4DoKgh1iKH52tJPhvszhdbnKh9CDDRmKzJSF5s32P2bJAKRykucCH4HJx81J66bX5ZZto7zF",
  "key33": "3Qsu2t9XY6VkdvwsEuYLQTAEd9nPpWKGup853A4HhGkGgx5qCNfFLBs9HCwW7yPEzaJNz7aFST2fWMn9nkCoqsDT",
  "key34": "4c5qk7JQCSYYqdSh8fvnMxQgVT7AqQdt3zhpjFyJQ4D2DjigqfRoSBvqKTjEyhfs6gYqvtrswmivsEKwJ1YYZF7X",
  "key35": "2USKNpJB6KW1vSndEwJRYhSTQCpsird8SeCAtq936XdnxjvuaqvePYvSbhg4NvAEc9ytdrzTxUHNDay2csvLpaof",
  "key36": "mSdmN4xSKDwgZJFE54ptYw8r5qQDEGaDsLWiF4WLCghTXvLzD2vZt98q8bsAkuEVN3zyg59Sz4MCRiQbERVttun",
  "key37": "zSKLHtnmARgRDHVvizHc3MxXzHtDC5iMjaMU1rzgX6pCuU544BsT2gmkdeX7sjE3Fe8tQNbYHBeuNEqVxpUkFcM",
  "key38": "4Cce3TFMpaZXNda28L4s1AeYqh9CJyqgf5zsKi7ykRbcZ43ac7a1T7iSjXFigwJARCrxkPrcTdG7PXnE3YYAPgRB",
  "key39": "NGAtDhZgnQqeeNwHdPPCmP6Co3BKfTTY5uZMGjwDgsaj3hSnQ7J1K5ec6YiniP2DePivacy9585MF9skSsD3Nwe",
  "key40": "444i7X1TxFsebb8nYPU4TGPHX11fUwhpbRjyFMubvpTSCWmaCAFzgi9PDMJc3BqFNebuwHAEsyrCrNsUxEqyoD47",
  "key41": "4Fi5ypfSGR4peL39Lh9WHF3j52mNW9rBaXuL6XfSn3Tzx6cAKnpFkHXLwicQQr6fDkdesLHcMaEptoF1YNn47vGT",
  "key42": "FmGsz8RcEhYvyo63PwBDXKXr42m67Nh3mKNmbSGgVyp8n6hXJAQsUpK1pbyP9gWuLPhxA4uasDYQbA3EhcEWLhF",
  "key43": "3tc6XVpZbpPsCQtHLEXYnxubnxQNNybvDCfGoRQsQ73Ve21pY2KnGUqkHjbDjdYQGqmuxTYsozJSXRnm8XgUAWCa",
  "key44": "3NUF5ZueYzohLEvm1LkSAiZsck3DC1Kj4QaraHeq1E1qSG4KZMz7SX14kt9jj14Y3mAPokHmjs5UYsso8NcNoPgi",
  "key45": "2LWV5uimLHhpLmULSF6zkEBDnBzfEv3EyiFpxSv9HoWMTTJhjD7hLyYKLptHM7ddUeWtYry7fzSiDs2wnEFGouA9",
  "key46": "4dowAtvkznKt5bzh4nXhpPCmUkJ8s7aFnp6okQj6XtwQuvqmNf41hqGSqwn1YKzi43dShzLEAdWmDGKrqbJXXLQN",
  "key47": "5fJXq8aC9LqcWjXpTnyVo5dMHWGV8W3gHYZbpGuStbac2z5BQtPwjBFL2odrNZorUk5Zfq6o5eSYFKj971Zq6qci",
  "key48": "31XFKrPfWB3XnxtcrF3VPfZeQPUBABCP7CX3gV6srLSw6VN6V9781g83CR5fB2WPb2MzL5foB1TvXcucQ7aMMi4a"
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
