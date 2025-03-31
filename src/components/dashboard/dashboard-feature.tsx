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
    "23Gruh3Vj2nxQxUvtPRxJ96vSvuhqEtsWjWdvtFkudLCd9toxZrQJFxWCeHTnTdKs2f8Pd2CTdmW1Kh39UurF2YL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55DB5CMREGNYwwJdGGNSJjZZ8F8HRyz9nWH6JCfLiVtv1TQoUobQrLUmg4gGJdGnvj1J9vxVYeqvVjDDLdFGmsTy",
  "key1": "3Q1gEx5Gznn2zkab8XuXe96a2rt6n2bv9e6adE3MHzPbw1RAXSBfgqNkigJ676TVtHHUQjsrZ5d1rpAUCt71c2Mx",
  "key2": "22BGxkwiZAJwaLapfimdxJ2BLWJrzEsvYravyMLkW4ZJMUAW3eKWKkfqz49JrWTmXJVGTE57LHrTZbFhpC8ErJWi",
  "key3": "2G84ZGithqpTMWfv97CT8Kg3Q6C11Uy84WgBmXJdPtukBLTEqbzaYXnyUSviMcgMp12uXNWtFJodQAFSVHphjFem",
  "key4": "92rhqtdguPhRJkBut6Z3vigYbNxyB4q4zvTaMANqjR8bfoB8BjBt2ChJycABgFVh46ZF3EpQT8v21NPRkZY2T8y",
  "key5": "4azr8ESMsVumP6uQgaV1cy6sU5RyagYvSkSU2FujMALiMBW6RARyjXMJER8KWX4p2dfADMrsmJojoYHJfrwr6cdz",
  "key6": "tip1VQmLPWwXE7zmPx2bppqwz6mHv1ToRsSNwsUSCyzaHdBTj3NeN2iS7d43yFMwnEgehpeJe8S3fpvxTZWNoca",
  "key7": "2o4nWJh85e2qzQFC7RU7HU35zMrN2KTKRYXumu7ege8e6sXJCFUMWvybw1wg5TTrvxneTeZuDHLBxHEfXHCbFV1o",
  "key8": "21Xke3XTucUHUTKBUDUQQyHQX5pjHMzeZu7dcVJ2TaPdT9bB2Bf2PqV5tEUkM1bMQ2ssoPYKEAZMvGVbMgGX1su3",
  "key9": "3GWWJxPqbTPdVpVx7fSYpnzBD6fbPTeAXPLXh9bGFS6DgaySJhaEkMzcxPhw2sba6FaepM6ZcvFWoUVKUnLg6Bvg",
  "key10": "UyzADzVfYk5dkTds5Fob5Ze1iimyxy3hYzz6vtWChg3BxEeH7LxLrP9Rsf447h7BA2UdYAZus8JU4j8exteqd4h",
  "key11": "4NMgVXWxYqUDmhuc6njHCATxpygq4dt5Vnu5e9yNJgjKjnEjP2pAmDzFqAWbserCBsTHGYhBzfHGQeEnReAjdHyu",
  "key12": "2xCAPNEEFb83DNuv5wvyb4Wz46d4n7vQebYJ3w8mhbL2Ku9cgNRCYdjb8qnogLimHQ7E3bEWMvHi9FPSKsAC1Bap",
  "key13": "2e1gHfCoHUZeFZ1ojxvhRdyUCSFS8AHTUwob1ZBXeyrPnGRRk3dvDcx1Nubb792VtAfnmWHnpEPZyjx5w5FztVis",
  "key14": "5UJyB3SpCdy8bRCvFYpMjjeGhkudqVfBB2GweX6WTHofB5LbkkLpXYxe9BbjLLLwFcELQFivGrumpaCpn7tzbfbu",
  "key15": "5wstNW6GgGRC4CQNwo8J6vwZYejuVKhKdwioBMrFGs1487coZ7mgWZGLJCuvcMoTdU9aX3DgUwxJ22uitMUSM3q",
  "key16": "2x2JZQcC6SYTNy8o9YBG9T7SUwifV3L83mbrMjrCWBuGqS5vFXQ4iia9Ye7dVC2d33Z2AH3dhtQgTDEaJVfBpENo",
  "key17": "43uZLezN2vvaEj459Tbjy9TcP72Q7xfyEf7HkRYQfnxtsJ9XvJWZvNC5EHAwYckSJTyCrsNBaC1TDaUmnVyAnK5M",
  "key18": "3TkZ1BuVRgMNJoTAkc97zr4CeDpnoMM8oAdYbiPhjrsh7v9w42oHCk8WsFoK8AR2b6QWyBH5TDmpATGrixxs5jph",
  "key19": "2WVnfXcBeLi9DAHR7FjscVSrwNwf9hFHGnQGMDrERQMKQn3NuWNtZFJzs5VWCsG9pbZuRGM9qaRvUKxBjCiJsDMF",
  "key20": "2TvVtrnM7sYaSzRH9ERPYz66m5DGun3dqqYXor1myS2vNnjAinMhPFcMvLgm8czK8b4q8gWnrQ6utxGfeiXP9wN4",
  "key21": "3MsLZuLopLWAC5m3CbMbNX9yYJfWqnBSSaaZkFsYtNi95T8LPWWnrCC3xARe9AiQM2NrpmZU8sD8NMV7DWXyUtGD",
  "key22": "2wxR3v6RobrYLh7tAFT7tcnhC1VJ58R6m3LaWWKSGohGbaRgmVzLZ3fGSKTeKqFTuBcT22DUGtqkyURXJNrXSNkT",
  "key23": "669B4DvqBAzDCDA9zPLNToMHa75nrSRDt5WVGKj4XdoDGeivVZJdUe2oriGrbuBTzrPYSgPHsE6MqcL1ebCD59qZ",
  "key24": "43AjXNd5LGVLGGSTKp37bBvnCKXU9chmdSPkkLsLdEP9yiC1wnNbM4J1U1wVziDrwHfntcVef4oaJ1cPXc3uiFL4",
  "key25": "4ogqrBUaebiQsnCsGtEuT1ZkN8As93KisWcHLwckqn2Nz2NVK9gAQeEsGY3GR9h8DFx8fLNLYRs9Vg1ijjXDfMRC",
  "key26": "4AsYNDj56eo8ejf7p3H9BuEgADhEUR57VEKgCojr9KdDEhQP3n1MGq1RYZNR22hiiFVmGL62nutpECe12At4wk74",
  "key27": "5dmuT3eRHWkrHVeenG7frjL1rLaNQ8ABhfcQn98qrryFrKTN11Uuf8NtNXEn5HrLyMAcnqrYfsfq4KnpcWXcBTyu",
  "key28": "55NZ7E96bPRVZmJrdQy3ncwhRY25GWRaz16pVnakhzXDDmH5sqPhve8k35CjaHK5K6Q5s7WgKGRpU2zzqbqHmRvh",
  "key29": "3EAne8uyS7GRQcUzTpanKssVASwHUjBWJAgCQ13rh96JsFtHbnH49unCQUv3poyjDPzr3seDso8BfEshEirfrep4",
  "key30": "3MSXpaRkbfrhib5itcmnGShbXXfRCKesnHPgfqSFFYuG6VQ2ES74Cu1gCJBDR6Yb9Lrr28AtNWPbCBbQ2ynWZuP8",
  "key31": "55oVY2HksaGSMRhbUTL1UK4EzZE7LGxv29V1CCJzcTApzqf4VNTr9sZxzTHFTHnDrHUUJ391hzwYCkta75Ve2jjM",
  "key32": "2EKPnp8XeKLAeh9hHBQsmVXWxf3cbEX5da35XSSi4irEgwM8nyVQf19SyLzfgmipgpX5MgoVshk3toYVnnL51McS",
  "key33": "2DAzi77iUgD9DuNzLNk48aoxpbxc45RJKHkSt3LYHiNaf25zNokMFWGZQaVjUemFyZK9XwGQSKDSiddsqqarhY4r",
  "key34": "R5tSCcDEN3r1CCjYhZRUwfE3fXubgQtriAnCJ4aFKuTPB8js5pURdzuR2VgbDKVZqc5mSac6SHMsDtS4gh1vtqe",
  "key35": "E5NLffcdQhXErS1PTjjjsx93PQriCPWMJZBY8uQ3GLeyTAHQpjQTrXVC58GcSvn6ypNvSRD9KB9t47Ka7wEqQSy",
  "key36": "2La9FYqfk5qGpGcSDKgpacMxf9zvnRn32QxxCYZwodUxpbd6jyj5x9EBYSkg5KD8z9TodTZSuYoLVs4s8AkQqovY",
  "key37": "ykDgpJK9xsqCX6BqtjJeAL23WLmjWVtxNKZ9s6Cp6MDQyLAgA2A5rVPSdE1pgwiCm8RYh3FRVx6TC4SJ8pV4q1j",
  "key38": "3aPgjRbEbxWchsrjRZUZy8TtvCSrtsPVwBVoEPQhuv6hzrr79D1mn7caT3bGNS2y3EgEqijWyueRZ9Vf9qk16zay",
  "key39": "vL14LFUWyay7aMb3dSRuipGBZdj3HQuB5ZvQ9tDuSxR4cnmeHrX32FDB1RuvKSGT2X1yY1GoKoxN1hE6xqitr7k",
  "key40": "3SK9QAHDRk5ssiUuQTkyqPc2U8ZJHKcaJ2rxvHXrXDnAozmgtS6QLwPEu9f6EqDm6BzE2ufYYPWJNCu78Y5hFu7C",
  "key41": "4f8LggiKteJKpJdBjSrqXaoWtd3A4imXsbNqivVQQSoa3G3gR4CzMAhX6Y62KsA8TabakqSSVUnKbZNtdeiEKJKR",
  "key42": "4BoKCT3NpknBqQsthwvpcfLPwa2D71tmWSpUSwVuYq3Uc5ZUSHb8ZZ4cy9c7Yv3A5Jvugfsfge8L2wCCeaCeEYwk"
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
