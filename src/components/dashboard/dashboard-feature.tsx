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
    "4dvFM8ggaV43Qvhn1NJagyiAj6mRsjvZJHksmUNgzaztMcv87DyYdQAnj1nXXm9BqnFdEVFrPDK8Bh2iYciFbWpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34AaNv5xSVs8bQfEMRiQyLE6XJCoJJD3woieQ3npUi6yVoFvJSwyQ7QPX5ZqsJj1fgw7NmQXur3s8vTxkGWNz2Y5",
  "key1": "4nnZ5KiUhVcjhYGdopmtzLHndUfHHhX44weTKKuVZEufEySJqQTyeFr2n14cfzewGh46gzVSvp3Ws6Ga2u9qRzFM",
  "key2": "Xa4pQFggDbqU4zCJHmUafG82hi9d3kjyyFJHnGNN26oHjHKUasxTTyoJzFYjPyH2ceQpFMtDFptNUqUZ3BP5A34",
  "key3": "nKiSLSEozGbrdzRTEesfzaC1fdtM5BgCzJoJBFy6q9Nh13b8w3xTbxvDpzvAWQW9DQcydv6AXVp15XwDiNzps1B",
  "key4": "2Ck4mgMubqAuJB1uiUN4Nnf4uhCAgqeZduA96mzvdJ9RQ7wZaAh6z4ok72zJsNDGPVk8RpuPj2Uu8JTqN5WHeJsq",
  "key5": "3TyHNgnUEQjK1KFKUSFcc2by3gKSnVwvego2eyEmHKq8mytTLEhJGF5D9zE45JMQf6moikdMcbnpX6N7toGxbjHa",
  "key6": "14E9KCsJ1pz7EJTu1trjsFNKAVFcxMaRmDRs8y14RbSjcdeciHZqob9qW29U76wt6BZxcd48tXf8FXH9SK1CoSs",
  "key7": "2xFFh1QxR5EdJA4nYfHsg9xB76PntSK1bD6AJidGu2iyEefpzYCrdTHD6hoyFM1BDs9itJsAZb6E9fhUkLJW3Ajb",
  "key8": "35f4XDWEAxLkeWdDAZ5g4zCEnjjfmtU4kYDhqZezHQtk2FdNxn2zDZSxLWfFLiniKdF5Vw4nmRTyxgzN1iwm65ct",
  "key9": "2BTcmNtHgHnt6cZSponNnzvTmSjxa3rfA9CGTX3RMQjjPpCCxLHh2vChV7wwWtsHXsqbB5hv4BopQB5aqyF84mHY",
  "key10": "jW8rsLcKkAP9fn4rBEYX3aFVRkovSQRoBR4zgwZxGiQVJn2dEtGSKbgzGegJn8cwvDoS6A4VNjbVMiJfG5WuRtw",
  "key11": "42qMV8knnVZbd5iP8Wh68AvW1WoUY7JTj9Vg4eH2P7NghRpiKqSxxb6qywLnhPs2KLqTPtjjDZTWLGisWpJ3HmHE",
  "key12": "2zjmtEhmreJCcKe6sQdzEPUTdyhzwXzEX2RpcAt4FDAg7SnQgSZFAvR6Comvh6aKBaUJFMfUDd2dvtT3rchZp2kR",
  "key13": "SLWotbcTgwMkgKeztfPidAYsoemS4MkN4zQYtnjRkVMAaHjunxtHyryQpD5Dn3ABtr7HqTaYhuKMBS9y18iJS7k",
  "key14": "2vTny8t3byjFvqCi22eeLw4hznEQKDDwSahFvCLQ6t9yzDHGfH3Q49d1FJCPS6jbASTy9mtfbaCWU3BhkfjRjSLd",
  "key15": "4WnqdXbiBBA69e7jQ1QW6fjCXVmxSDJkiVbFd6HW4bao5WjZvFNyTr4KXfgEfSyyXfhVZxGQd1noG4Ppz4UZARV7",
  "key16": "5xDLgFH6p8GgwdPnYHWULWb9hfYTYjjeQ5GwhUav1PhufKLG79De3GYoK4yNJvr4f5yo77JSdQcrDvTVZJY1g3iU",
  "key17": "5ycpuHGrCa5hVfRo3AVP8QdMV2ngubaMK4XzeAHxqLiPiWM195PE3UZLUfibTgy6orFLpi1bmNjBTMQrM4GysVEy",
  "key18": "C6R7u5ECtcbUocRvoczkqQ58bcxqaDVcPBdXY8pDrjzZCZuNBBX43CsR8hy6QnSQb8eggeTN4zkerFBRuZLWhbW",
  "key19": "ywmSEGnLqh6gqfmTntsA6hR8LSu9RmVXdBbKNSyX3Y5EmZgXH6TKiCpYjCeF1YXjYNcwH5zHKHrmoCu1WQVPn56",
  "key20": "3J4tLZkXQEsiDRKZkE6yXf6CYfaGyR411uDhjYgKMCv9WXo5cDHPYBLkKiTvYPfYMNuNZjGP4xnYTqXCRvx3e3zL",
  "key21": "33r9sn6bM434ZLtPQo313wsk4LXDnHDGshDZtuXRSxTAxoxFz3TP9X9myZjKnudKZXtQVMzMX7ayxk4XvEc2oWun",
  "key22": "3CqvQtBqtdxiVvLBGortWjDQg6zkgpp7oJUuGrLWjdj1Amfc4gW5QyAzgLyqfheP9u4g3qw7YGr6TKnbD1RbqNuP",
  "key23": "5hsUyYsVj1QfDcyNRYcdGhpoeY5nuAqvynTM4fNz7qmKHrx59QCJXagg8UtxegnisH6SdnkzYM6iarTVBrxWeX2h",
  "key24": "2o57AKBUKWs7zTbp488QdJLVdwAiBahwKUjEFVopfmsCaAAdQptbnFRveH3tZv72Q1v9C8Uo84DN2GvDYpBccKwm",
  "key25": "5otJC2xTQrdDytbPY5jkCwdQoECzjsXp3Lt4Q5NBCnoMYDxtyvRs1CiT7mHAtcv7itHcVmx3L5Jy4eWWNehRetzN",
  "key26": "duav7uJQvfoCqiismyShcxCwGmBqaxpMiezDxMDatisY4oAuqvCxUAui3j9RJXwuBGm4fdqBEGUcEATJftjMUvM",
  "key27": "4wxLSLZMtsAbF9fzCTXTREM23hNUnd16aF6s2H9brkByPA4i1U1JUKP53xbAgnZpTRSoeaH4hGoxR6WBkJbdxbSa",
  "key28": "58SogXG8aNSe9LP41uWXfWzV1d5JLMyzoegvM3EFXDBqqGVuJALCgwy1uGX6CbdyuFCXEUyWWgX5VJQ1sCbTHgKF",
  "key29": "2kzeckUM1Lhvuh7ZJAoUvDBXekb5ppHMxLrFgqmUUnnR6fTRDXpRghf4wrBfKMGsCAH16fzqgBTM1KiFVBh1ieZY",
  "key30": "3q1uWY7iywDppsd5JNqThoWq6K7eXNDaVhKKQr2kr9ogry9GZaqCfigucbpT4jTSAJo9tMaDYcUhRDgjPmiQb6ys",
  "key31": "SC3dLe5p1sC4sB7CEfodTXWci4rXAhKpWegvZStncWRugYHJR4kWjhFPsrpqBwKtHmA1ebXa6mXpBcveUwSk3K9",
  "key32": "ZVh6foB88ezvcz77Qqv1hKA86Bgwu2caisNn2hS13oL6VtFSjYssoKkPfez3mPY6vqSecbc2Z5p7uHye5HW3YA6",
  "key33": "2RjTZFHJpgu9oc9tz5ufYE1UtkjEUBqLdLRAsn9MsLSRkKgcWNFsJrmHXFxSC9xpn6iQiFUP4TMVA6TJitCZqirQ",
  "key34": "HhEkLWWwrPQf5ubHi7ZMNDDFYPHFQwVdFEiuiCNZV8QHiXHtp7b6BrFsJYPEbV4jjjuRu3ZWGQXR5wPLGTkDqzM",
  "key35": "3VespdCtXhDDk38Swjn6ZFCXRYduLHyArZCvsdLezJFG1PpbobAzXtBSvYcJT8r1wiaayLKT4bYB85rqpAArFd5h",
  "key36": "KnBPL6Y1WAq1y1nTNTAZxK4aw38Zj57bYHqqwmw6cEFNcFYWwhhaevBQudw2oKzxQN3VmCk4BSobgjPGprSSqCo",
  "key37": "4yBUth1F3emHUCcsTPGbkSYPNsouvtdkQqWUDzpTbLfnXsDVCgUQ6vyE7rmLeYbBGEcgNkkrpKHeS3EBXeqpVPmB",
  "key38": "5h1RFRgSquzHhE5StSV3zDWGe9JErZRPj2AKQgm8GtSGhSTsSJiTeGRxqK15qXsWo9QL5iKdmArVqfqetGrKzCdc",
  "key39": "3cSGTd2c3qRY1MtYuyEjxHXWfWafAP27tAVSK6rUVJqQBZjGrrbSXyWgdYA63kw3rmupMYSacrhyn7bsCDG6qDJU",
  "key40": "61kQF1w1fD256yw8GZLYb3VE7JHvAVJA4LnMg4uaYLitbnW1UHrbfbYppuybuhHRyR4b4Ea2k6kDoXAvNEtUYcr7"
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
