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
    "4xCREroekn68bMAbEZe2TysQ1ghVw1HMy5YwCqLzET26M5qycdtf3idaz6T3sgXGv32jHLKZurrkxdVYw3W7SyZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eBcqcjtmbKN2f9qL2Mdx1zsMk39c3G6wYKM4BeGExcAwHEAAAAxvrzRdyAZqe5GGFYiUtRfu3N7bhAkS8BpKGM6",
  "key1": "3KTT33FDRUnNHnjQbSdu2yfp7iNvm4w8MuVNu677BJnSYtSvZBMeY7sRnHwTKfSNnAaqF4SxbR6tb6WUC8LKrSTt",
  "key2": "mQUEvdB71GgQbkP1qAHHeaVHfpbSLoBqmhEM5kfSP9RXUhy5wmcf35vPKs8XfCLJ5phHJFaHFu2VBFNbq7rLgx1",
  "key3": "4LGW2q1acBfFaAsxMersEa8iHF67y7bhvuncQk21GW97g4X7Tq26WQ3GiuxyCbnXk5AbWTx1v28NMCBAYXStUbyP",
  "key4": "4ZcHGW7Rwfq2quwaPwev6RHoEe3EnQChWL5JBJ9auUcVdLz26HHS73KMm4f3kMLLrqhWsqiaYTzWATTntUmLCvjV",
  "key5": "4ryJopL5wn2KcTeJswQUCGYVqf2VgF9tL59w4FrxGuuore1yCXscbBzbUrUxW8NyaPihMrGSFusUzepRtfnsvBGA",
  "key6": "5KzvZ9rYsSSJ7nR7wz67v3k8RNTfZKfnqh3Qgvw8Fm4CaZzKcAjkbdKwek3VEXiQLQNKGYBZujYxAzG4u8Nvkm1m",
  "key7": "4rGZQts7mKuVpp7FyW3jNwZFCNEkJUmhkNPZBcyauekVSxME6DeyiEEbqBqardtAfGALjhypaVWWEJNM2eKeRX7c",
  "key8": "5C3hrK3MfKcjUNPsMQsRqF3NdNDj3JYKFKydoPdbR58qEM6ToZkeWGw4oN43BqjcqbrMVxz6eFyUv9sWMWH6XjHx",
  "key9": "64VjZewn2RfPgjLANFKhTXNeK4ehq3po6Wj4S6CUxP3RKexruwcUuJcCL6rV18yMN4ksDDaxCnABYea2nny7wWon",
  "key10": "6yREKYvg3ZHP24KcJjgUbbhs97DipuVoGoP3sVi4StWjssw2Y49RjtVJNviP2GEDhUc6TCm2Ec4SvV4HbMTVZGm",
  "key11": "yTm14NCck97W8HqZCce33sxEmPZKkTZYFbHwB1uXcnnNSZR2oYpv6aPscrRdkaHBUAGutwiD38KQ4U8P7dYGRS5",
  "key12": "43zcTtdrofNJqPN2VUSbY8ugUxJefjRKucHnM9Crsya7toNT8dVpoiaS7oAU5twWr5oJri96SoXpKj2aFLXWTWkJ",
  "key13": "3nW33hB3iLi5ZCWqLx3Twbd2JnHohetQFbSeE1rZBmcP3FbsNs9Q3sdzwGJoQUnBQsJbx3KvNMHcTBYiGGgG5wAU",
  "key14": "36aTdyha4C4euL7QBigXoFo5K2m8SGhpgYWrXQ156q1pgqLxordTGN5Zevq19Vf4q1bZXwFnDXHv5eASyLMKWyzn",
  "key15": "4gUnd1VjokN6bxs23mAzVzBGHHVffqCpWg2ozYTMsboc7RpArsCS2vL4M1trDBoTDyuUMDHgXhoX821qSGVXiuWS",
  "key16": "jh89AznQxQBWF1GFBsRYVTRZ8YiaTYepjj8mABZVSXjMvjwSus2ZhhUm2M7p7XTo3M7jEY2rxJHZcFLdh9UJXTn",
  "key17": "3RE9QiqtSq1kP4cWbPnrDSLQtYcRWdoyweLcgcBoMZ43cuBe1rSvLwsNDBjaLL6d4BmSvEMb83UoaRdSBBqM9GtL",
  "key18": "3nEn3dpStQdq3x8WfRs8AZoEegUiTmueSyCSxxHcx2stuuJQp2v6MDpfns1aXet7nFNmkWRND2DwB95bfCjbHDxE",
  "key19": "283KuNoVP3pTKPgs1A5dDtauMdHF27htAR4HLhCwzAkQw67SCXRC79mGaFpJBUQ4i3M13YEkYjeuceMr9AhKzGFc",
  "key20": "3YLpMAWF3M2ELwGoU2a6k8z7A5Mqu4s3f1MWhhwMCWXzx9GFPJSh4nroJK7ZytBpVLHL9odu8orkThrr14BJTen2",
  "key21": "4v3MeokKBqGADDFxq5yoSYR3LYE77PykxJqxkwsTgG9YYhfUw6xXWiEByvWgtrvYzvuQio39CQBMm3HGkunR7k5C",
  "key22": "52qpeetAa8bR52bjAXeQBpiGe8PEsJBU4DwPAJ8HS9jvbgFqykdqmkVrAjQwnUSUs9TGAk543Epj7vQ5Ywrnzibv",
  "key23": "2AwjAvk7gdpVHe9pDVwdy2agkmaNWzRhu4h7iqFgpkZ1pBGdjVQZmkUtXp1spzEKLJngdrWuiKtn6UFpNtSAT5XP",
  "key24": "6ZDVyeuLZ8gDmb4Db6kDctUAimCg9yy5yXrJ8gB3e5wE3iHMEN5t9atLnQm5WnJRyVSwHS1Y2cpRJ8T3Jd3ZRnM",
  "key25": "2cgtBup5NrXXcqj5S5GJkRJonmfNLFFzbW4npD1L7s7ZBAyWYr1bpM2x6C2MfGTAdXgqob91qDEdzEWBBLzQz1zL",
  "key26": "78A9vNrZBPythrayAkeiMhZF8xoXmhyK7jctWXHR7V9cRzTfbeX1NE1a2qc7LUXAWMFTo9Shcw4qALCdoASDwrE",
  "key27": "gYNctCnXT5pS8JKkTj5x28z9ktw5wJxPXQ7LF8CGWfDir4A4ahBmQXqkwXQQp1qhsNq7N2uh6SmHkgZV2ZPTJ3Y",
  "key28": "2r4gwbU5q4rqBgC4sTvPmEiwjRGm9LkseMPXYMmds1P41e5dJeBaveRndTcWJwgAfaAcrM4x3v4NZVzrbShKvJkY",
  "key29": "YKdDavPT8AZiMwYn34ZrsWd4LfHFZiVMdkWQ35LLwB6XFnZUPB98YUjSo8sk3wWN3F97xKJda7AMrsNvtvC4CPm",
  "key30": "3kqQKCB9Xqa66metjyH8nNGitvSSv9rZJHh5sHikFvUbMaUgAqhRihWnFCAjndgukz8WsbWs2YgYdY8dDifkAKsU",
  "key31": "5SDtuNfeW1jqKEit1kCLXqpRERxMdezfdHE5LN9GpFEbTXXZ33VdShirsQeKmdccTPndMh8gmoWnnaJkNVQUJm4G",
  "key32": "5GCr3f8QvcZSwWZ7m9L3epaWQzKUYK4MJ8e2GUNXaAewxeHTSaCoWXfdtcTkeaWciuTBtc1TXfkNTsVACLWfTiuG",
  "key33": "4t4hrU346Pr4WR4X1WYW2JZ3oqNyqVSaEV6bhfnuCQS1mjkg6jHmLqrsnevufcqm9UPr6V8CszPsNRBk1MKtgrnP",
  "key34": "5thST4DSzZYWmgxvq79LEd17aAvvUfRKEaGDfpSozHSxo6otChxaihSktLCvUizsmPPEMJN3BFdNAzpa4Qb8J8Fz",
  "key35": "qpk6W85pCzdF5pB5JjzaSuihBJWroXXGrKRRr4BnH8CHWWTmnq4zWH4WZ7DJsWQyPLdakPWjKGN7x5FB7zi3Txq",
  "key36": "TwyNYYdsb2NHsXNoqbsGma3tnRLkmhheuKyWpERJ3Vn1qSK92utvi4pejo2YES7eRG7A4tKHWF9ecjaUgMjap3o",
  "key37": "4WJqV3E28Kzpmnk2HVWGFCzhK9oCMjAmXFALytYFWmnm7FFY4VcWXbiezqnM57aFzc5sBoFxfScVHmUEYjhQzjnz",
  "key38": "3TxYc58BM1v5KN8VE5VK7nqRA4mYBxB7Zhm3kw3a9JKFBBKpAeuZhSnRWpCPxyh5xRPnrhhhCwPdBYKSAQPQRMSN",
  "key39": "2nqcvy6z3CcQHGKtks6rPuiBfPBuycZJ76jMY5ohVdhy3YjKQnQXMnGCrehCPci9vG7YCB6Br1XLVBs8dHMrg3Wr",
  "key40": "KSzUu4zQrw9jNK9aVZTpJtYDiBd4HZ2Bee3ewcMPjHNkBdvwvQSCnC2gL93KYy5H2mM4EzH6TvN11yLdwaSwpCb",
  "key41": "3GSqYZ55srhsUTjMwEs8n6SHJX8CqHib4ZMsUa3MiLGxXdw5dZghWi76Zp3tLTM9BkYojVSj5t8hjYTz7gN7mmV6",
  "key42": "2B8iyrFjZtnnDJ68vPoimPqLCfoAExX9ZdFpy8DuWvRtapz1XPFkRRRcZHLSHmZUzoZmgkxpYHyoreRngfontrLX",
  "key43": "5mhjuCncuszt7hRFbWmKqrqvtkfywEacUbY592hd262CbWggbb2HxnPAenyyXL5kHAZoGwfFUiR51iS9WFJtimZ2",
  "key44": "5C2pKoCzvT4mhXA9W33r4axMkD44m77nckzpZWruepoQEEEvnM4xNZTBrTerGk87teW2TE6wcjfVjgYwBsgqUFgp",
  "key45": "31hVsgpAtTLhTxZ5Vy8nfAHcitzwz2FGPMrPbVhJ2RjePoiXr2116ZKCT6EnhL3Fuqn37HDjBwK32USPjA2ZUFoM",
  "key46": "5XfJKU6KhXeYQpFP93uzTZSMDGgcnaUPzxEAfRBbVbYwYN691GaznTtzRhTJ9KhPJEYoMQZWuqgWW4dspZsQ6Y6x",
  "key47": "dqxo2rDvfe5dcBcQYeEnm8HprQfV972LDYUA5BtrGAvKLPtDLqu53jTrUaTdQYgA96osr65Wuhoin7KFxgdWpF5"
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
