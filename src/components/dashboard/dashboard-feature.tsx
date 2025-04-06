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
    "FEhvUnTpZHWJH2YpJHUJY9vjHsnXyMhqhcG5Nc8keHZQaZwKkndZ27w6PE65gjMuuPGVesdKmdRk4U4yoJVrpzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VwbUpz8veN4zj1V5afLo1RbecasnPmwYK8i2UJrwLAPPhvU3NBMqW9YpYoN8vLVbNBkqdfFxZ4Rj2iJzgDTqqKy",
  "key1": "2eSLqkHV5CrDg2N9tJdLLco3XpM59vhy5NiMHgyri8GgSt6TX3su4g3NQwH44H56FNtd8bsGFaL16Zay3FZMbjsS",
  "key2": "zJYgQ2mqFNu4iyQYoupZGCTD66zUUnyzngaWXGGGnRQ7rnMZW943PHZWsY3t5LcCZD1aSXVSmS4M9D1SX2yxkfC",
  "key3": "e6DpdrDfteXPXYrsi6ctkSJ64qA9EiZZbpyRG4LJn1jxgfJFDpLx9GERR9Nf4u2apPbDHwtuQ5N97AbJpfqnuH9",
  "key4": "3bWmX6r6GgzX9r8bF2DJtusqTh4g1j1aJTbZjGwwfz3HQAxjzxFUZDiCwZfeQT9QEmQPc8SCEiyMWqAh7Hx67r9z",
  "key5": "64RQiJtY5ECiaDgfsNta3CH7XHQ2c45DsknagPtbhshkah6ADz5wni5v4rS3655zHec7gak5vtMFMHfDrF85MCLR",
  "key6": "467VDP8xy7SsjuUWbFxc6o6KNr9xZRRnKm6EVqKyyjiwn9TsbJ51HS3JRitvDDW9tyTGFCKXXMGugLWGjExAj8Uq",
  "key7": "R62UE7uDkhTUHQ6TCZBnpNRNYVtbPzQah5iCAzZazTdWh3LcR1tnWazjrtcor16vBCKrNu1z6LCUMD7hgVntyDx",
  "key8": "2VDYHg1PaeoffzoFJdrbiy9GwcmhyR5M4qWuCBrE2HVUrX7fcRdkfAAhGBGoTUQtVpr3MpmsCoTsDoNJWHJVkonW",
  "key9": "3vupYK98HESc1F3RcDJ1GMNw1fgYLkeN92RBC6eBRuSpjH1qmCENN5irw7EAMeXtbqmA3NPTwSQap48mpjPLDf5b",
  "key10": "2j6tk3ag6v5kYvTtk51rg6PPt4hpiSe29gL87GxHHDmkAuCQb5ZKj9h4sEjNcWZrfyJNTaTc6MyhzszKyCvtPaTK",
  "key11": "5BeZ2mkipAPoKWzG4rgM4QtvPK5mf5Gk3RAraoRjeXP1hwSQAXXFFCbY9BpGYHHTj29FNvvcvRvALPkHDpQS4Ggz",
  "key12": "3PZg3Tng5HtaUGV6ko8k7bWgtzDGV8rqbC3mgRb1a7axNL4YocG71RAtQ9BD7R6oByD6idxQyLywgSnsFrfe7xWe",
  "key13": "3a9nJNP3jS2LLTrNjK1Z8PwLpqyfyCoGe1nfFhtF1LPQ5918mEJkfgdKbbB3Z5SXrDVaHU4kAQfgpvStJ5wVAVNT",
  "key14": "AL8E8iXsjrQbHQFTTcAZM3CyCrEviTeRfbQGmrMVsqk2p6UmzU4drSfU6dDVEVWN4rGZ3Yac43YWqfbFuvMjhcW",
  "key15": "5aiHrpLs5oDa51j294MKyEVKskW5j3edywGZXd1REFoo2EPVpop3kjWCkrVdMUmRAKqbPcaUmwXaZ2cj6tTwiZz4",
  "key16": "3thNQkwMgZDmWyqFFYbR63kX8j7RDbhg22KJbHKsQ1X1zEwE9i5aApseYMQPgH3A5fz1D8hk1cQyGTuPd8R5P9jc",
  "key17": "648dtcR2a6Yfir3d6GEJSF2mqLpZBS9DCf98FrgVhmZuTLRgDgukoG389JY2VQuKAo8AstjTbmtZokDk7TU8eEwc",
  "key18": "RzBwphK5LtDze48Ms5BEzVsMbYk6QBXSGh4Vi9AqSrEugJsoE11aEvg5rr8aRAGMwsBu6SRivnUqmWL9SwqDooc",
  "key19": "3rXBzoa3fAGZVZgSoqcMkt4s6UtKTxEypQttpViNPiywUy8t6ujcnSuruwmNT4WqcsJgFnPD7kRi5KpVWXUjz3S8",
  "key20": "4pqAM45FbB5UnpcgtnKs5Fg64jqP41ocdPdBaAPGU49EmTrLxZGNdxSqdDH3iAVY5cDHQZj9HrCjM4Sq31JCAz5B",
  "key21": "3nk9V2Wss22xcyPfZQPcYac1wEzmXoeMapbif8481NS278oChc7eoBomBRkkXQRPSGkNFvFPbpESjctkbHWScgKN",
  "key22": "3PoyPpH43dLLQ9xr9kHME7h1EHzYmXq4oVkBtYE6bxWVbUjvea9zq6a5mxF9qqAQnexoN33e7WhhBkH97fbrhjUh",
  "key23": "ib2n5WHmBJefumCH1zhcVXLhqb9XWmHRf7J1JCbXCaLVPofhSrnbyERHayCbUZ3ScbStNAasVmQ7VmB4vMa8Qrw",
  "key24": "3WBfNb9ErJduKyAkgmopCMPoZKmQ5oXaKVAZmG9sSYehgbbbP1RiNSrm7Y5y9SEmkxMzhia6iRFhkA6rNcVFKkHM",
  "key25": "373nQf1U8HfVFEqadij6wtrHkeBNWtSXTYzKTogLDmV2RRMFPsKxVu61uuie52JANVUC2vYSztNkr9NpUzpQJa5V",
  "key26": "dtLCHaJKpfgiKPhdHKjPwV6TuFQQUiy3pfQMzCUJn9moKYhQCHqDxPyJKJ1fHZm1ugFch9qkrQ6NQ2kj3ofcf6K",
  "key27": "4tpV75ovm7kG3cwHigdjaQjRDaFrmUqcRYn8pBbieV6eF1FTcJH8gReB7spuBVC7wWMZx9e8RovVXbwt13r4gWWM",
  "key28": "2d3U7uD8LVJhpaPq2Ezsg4A9XxGMK18z3Qgj6mRUHuTzmSoix3P5umubSVLtAPWehRFFHL54BQNvt3ETxQ3285FY",
  "key29": "54BTTRXA6fF6EkMoZbBp7VTLn1VD3Rz8P6SuhSbMvk3Q1hxiiNS63PLsYovp6AsmXWmX5QaukkzyCPtUfn847E7X",
  "key30": "4vysUw9iCy98HvBLbz1ZjRTzBxHsEHk6hoczszepGVoRBuFMgSAVMBqTxhizXYmr43HRjU58BEGrB2WRfAxx9jsz",
  "key31": "3X8HTEqd8TN4MrrevFc8rqSzZhoLJsEvWhXwg1KVknGHGCJj4C11dbpenG12eGmoMiwXxWJgSwSB9tHMidi8bfua",
  "key32": "4KGczWrNx653JzP7GD1m3GTNojkcwzp9CMmeNkxmHV2NyexjSMk5Z47RxGdwa2uVaxNAxg3t8tM1JcdBYfPRpsWi",
  "key33": "4LD5f2VKTGC2VYwkTzrXnaGnjiyyGZLvwC4q92arNgZwj3v7L2tmbVoSTmx1iUrjQb7eDojR9QZXMrDMrZHF48XF",
  "key34": "257pkuT6YxHVw22CV4XFVFZcdDxvsyvotddNz1yEDv2fcqphyVSSjFtF3bTeni3ZB1gKiNP9Rrhezmz2rExo7ajx",
  "key35": "Kbqec9a9QJUaEKB9XZdz6SEMe7PuqrEB1Ezh17QtzgtT4yYS5fNoQ9p7rQ2AvL7C2gikBns9MiU9yppWEFTXNsP"
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
