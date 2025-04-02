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
    "7qLNR2c5gN2K6tqhiUG7yF1ZNavcJLWkLv1mBButB2BmCnANA5sV3nGfbZxMDpYQNGmdqafnpjbEf2PNFU1Q4cW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47C3WSwXNS6fQfeVFjrR2yK1cf9gDVRsBVUmxt6gZaodfRs6S87Z7Vyes4L7gh8cLnUbi58LPUreLBJRpbacWDDN",
  "key1": "HiQ3cGiX9nL2iVzzaqwnunXtuGVubCP3o9i94AG3xHqcg1RDCsDftZ511UQvHPFvtgWJCLywGczemBExT1isMbF",
  "key2": "53Txo9G6TYRVLRRSmL1MWgCefBmueTU6ryduvbnyTGmRByXkkT9UvEiA72g4VZPj15wjFFZbPcCH4amK5RwigPrj",
  "key3": "5Bf7YhgsTDeF9uM4ovYdH39rXagM5PUhKWbQH1wbmk1K8tEofJLUHVyLywMQuhXFr6fEnt43EbHSrcYkDC65Nfop",
  "key4": "6MrGKu6PDCWKfwdr7ohTnzfZQ2BM7DQ2sZ1zdJy4uDMWo6LbjDnEdChP7inmJSoG9e2iqR7SAcbKTxf62PTK4XF",
  "key5": "5PvRLWL56fH1peeuKqk5fdmAkeUzcZpxp7dovAYteDrcTd6jxmKsbLRfLcvM9BoTjoxT8tvaSdXeQQngdyZRudC4",
  "key6": "31U5GoeGyqYNxznLp94S8UZpYj7JN2gGbADDd5WVwEpF8yRoc9sFEzxcVqeD8sUZkHsbQAwyPGsewuPcJWfZkrhe",
  "key7": "2c3yLedxxWuDiGJYKq2uoMukJYBvXvwCEBnTYynUqS2xusSPmn5LG3N4XQgp7wJs63XJsLEcughwrAGxvos2y4Up",
  "key8": "4vMHJJw4wsh9a9gyLzTSuUAwXMujrNc6bwFe9VDDw6QFgLRM9X3xXXjw83TFefy8hP3NzLpCJogTF8ni98GGscPZ",
  "key9": "4ywNMabcmufzzvhkxMH7bUBUbGqb2QDa6YEHrM2syM5seHWTpWNH7XRkpVQK8KJSEEJugrY8sZbeLXZikokrSduv",
  "key10": "sBySNv2Xkio6JZmyjN5KW7dVRXFoUkFo9YN6h9apMoLnzt3GRNFyYy2Ub4AXMxLJrHg6YhFsxmfnJjP47fe9Awo",
  "key11": "2bAy2J3xe1NC9R5W5m5r6BbdVXFiKzbNofoFNMuimvfTwuAWZBXjezfHXxpz7BQ5XwoN4D4QoRjk3ibfAytQqpvw",
  "key12": "4ABBWxuPJNxNyDstiugBstdpoXULZ8Nyz7ZR9g5rHheYpNiJCAECqHMNgFGY2cpJogtT15vgGvyfNn9EKgew6XVM",
  "key13": "66NmWDGgCSQd7fZikjjxrSgSANLmTvaCZ8RSR3bddz9vi1P1RTpEvqBEkgp1G3MwqgFm9WWqUoRyd8CTXBVLZzUV",
  "key14": "3Tsv8w8yHCohJv1tv2PJzWrUTMi4D7Pw2Y4waLUhGBUxd5Vs75YddrFLS6tvmE5HeuTM4QwxTRxWDT4eaMQj4Pz9",
  "key15": "5F1MCfB6yF5q4Gvjg8bt2rbqVfHrTgwZCW2tA4hwkHVeDuX4t6TUk8NHEgjiZrxsFZVn31KBTVrfYsrnjUZUjZ9d",
  "key16": "28yjDan3gtQCQmjjTCG4fPmFY2dCdZ8SjdcvSiEdGvUd25hmje5tWwUTJPQTNLdfWzQ4dZZLQQweJU6R52Z4ziL7",
  "key17": "5YYpBuW2i1HKVSAzwZ8AEnCdG9TrKy5yQGmYPysQK5zgNwcbgMTaBf9HubwrZAArDoxJ7RAbh3STdPyxF7nvhubC",
  "key18": "22N7WFmGHLw4v8DkCisFy3Bzup4DLtEw51LXXbt7EkTLoLZeE8yxzxTT2DmeJb6fDA6haggsruh2jyDKDvmVFmNS",
  "key19": "5ftevS6VKdBxa3nSk2qkLrZtQYKtT3ARU4wdpXvE8JoUeD9krSktDADy5jgURvZu6SukZAtY4wgNCUhYFBwaLRE5",
  "key20": "5PLEoKHjWJ24QvExUxyZ9HifT6uNgaFiV4a5mec9djcWZhvMTFjBWLVEMK2EKSv7e9KUXKcvcJNSXbbYW82ZGzLj",
  "key21": "3au5MDAnuTR4d3HRB9ePVTEXLueUWkJ3SEvH9HXWdsSYao9HMAweHBV6Pzt5Z6q8HNibxJt5uyvPq15HSb13MZYU",
  "key22": "4YgYXcLqoabUDU58vBPkkbmZFocbB3xuHWA1x3a8nFfXZn9DgipxBC3YR8GHZY3WnX3sdvbdPTBe6iGsgG3ojutL",
  "key23": "3zVwFp6XGw8eiuLNb9GGy34BKzNsFMoKdMteQ3RxdUL5PRhKqyJorYFweZuYtjmCMmLhExKWRoecWsVBjnVoJkEk",
  "key24": "3ZzVHv5xnp7cncGtFmeNNswC6EPZnPUEsTv6eq4qfaH6bsXjPZHeJPtyRURv5uHC9hePRJmkv7uc9tnPK3TV8dSs",
  "key25": "62XNiPwLE9xPzuSRoVizmifpwG6W67PovS12SwB7DQ3ZM45w8irv333VtC2JjKkm82fijGnxdaZcf6sQuJqnfKmj",
  "key26": "5fcgPcAH1Mkc26zbaGPvRFq6eVWiTDHETBuzBYNdEfgYXTyihvp8RMV7eRptFp4QM99T5wueyLY2mF5G2gFQbYoU",
  "key27": "4dcPAXQAi5xamzonF32LEnfSVCCtczQdCAY17jboyyRQQKvhK8oG3WMdcPeKvMSiNG5FRrbhbo5tLCYRTKZyifYF",
  "key28": "2jRA8oDaUbsbaSiJLtRvND1gjw1VS7EU6tteUrw7PP8FMzMtPgeo453bGX85pZq1fTsoWC9Koz5GA9YACpkKgoPp"
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
