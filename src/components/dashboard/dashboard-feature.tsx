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
    "3U97onFDRA4hjCgcTrE5Bh3FGMxz1VGu5iUhpV7bmPeQLLtmr7RDfbnqapbVK5zq13ZWBQUv1yBSMYJwQ35XPZRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Ejs4dMPGeBu9zEBsVtUYkMbZkLkrjusz8zSEsu3apXMvNHA7Lgr3DHhdbs9wBum8zKBmpBq3BhtvcHvtAAktgq",
  "key1": "23H7yXwq8pkZsH8TVipUXPJVvuRydGPCbAhYcq8CEhmjzR4Wbifxds9xNjqJ81xAXcbnUSRhurvPiWUeoitt9n6Y",
  "key2": "3E7TJpTbRFLDUf1aUs85a4XUKwpYu7hHvXERxmHbXH4erruTjQVvM54if2AregkBEaBj7g7QqFtESGn4hUA8ZHFh",
  "key3": "3P6zYmRJWN3xf2UFhRbC2zEQQjVUaKn3CrQ1gXNMHSvq1eAuur9xR7vaehV5YMTUaQVEXhGDqPTGc36PBY468yCr",
  "key4": "2LUmV31rTdf87az2SwRzZsQ4Ase1v2t3UEHpf9WcVTBJpBDo7ZZF9z3P9aGepkWJ52UWB56rjMWy1HPfYHyCkuLb",
  "key5": "2pUAmskGCipUZ65LCz7P6Q8F1e1vPfaead8zoMS2U3BgrxegkoZx4RvTQbQbhgc1TRLKL3zWDvmMNzNJWD7YaVyb",
  "key6": "3LLQMoPJ5oMbg6SmCMMZNz9yZWHhUcDYfiX64FdQtD4KWkvZvinnAb17VpXvd2tQcEF7U7X2WmdrYQgLKxATmHoK",
  "key7": "5VRnM195vcvC55LWbvxguk47DgbpA6Q75pt1D3LDkpvsANXP3MsrPDDMZUDWwapRGtgTFgJfbF9SfEVp1vuEr7wq",
  "key8": "5VbGE1Vgxoyat1c9LCuuJGgqYLdAzC37ki8WDys7Jcf3nBgW2pouDE6JnLuseWh8vJMN1efM5gWbBkKRormA7ipM",
  "key9": "452wNBXWJgfbzM9Y6mP6U2aJpqD3E6fnr6cfVxKVKCTBeE5sVxPJNcU7Y3urwXJu67RbrUq3FFKCEWK9TPqgAQC",
  "key10": "85fq9Gw8Bt7tJ17ftHZiEZsjie5C37m4NtNtAeYt6TjvmHCwxdzrV3DAUNkLNaTjoNPmPtFwZJqrAp545NGz35F",
  "key11": "371zk91g6aE3USSPkm5XAhJgc5hJtLYS8QJ6qDwwVxR97UyTNvAh9FN4i3ckUZkExr7bdmproqgTZtKDhNfzczXH",
  "key12": "2S2B6hYtjgbZPARMm1xRhLVkzs3WQQd2X8KyFuXvsjqfAdUCcnCSyZKBiqnVnm13xWSwhpiCKVqEtVbEynicJXpQ",
  "key13": "Xiq7VGt7yF3AZtjofn3uXG52RzcnvhUN5VE3kPgCxAo6WJfyEi3Yqz5ySwDWnKBUCZWhuiuPFC8xWVeRs5gZdim",
  "key14": "3v1NhrVixCBCBJ26v5NSELGtr4Lccu3AtnNxvUZyyQJcDBguRNWE2swG47tm3q3WJmzxWzF9qwqLwXaxnc1y6Axy",
  "key15": "5g6RCxXVdmQzPEGW815z8qT2XgLo7efbzuxonxVhxpxXBMbJuhpNTW9LG1XH2Afx9abXYELPHA6jwALMbY2JvY7n",
  "key16": "3EBnM1o2CAEAetPknFzypagAccohXo4pWrH5uZR7CxTV3aoW9FPaZTdrsmwmQ5gbKAWF9R134D3ANsGfKkhZbaDX",
  "key17": "2CGhzEjxVgRZ4AT7xa6HYupvNETHys1Q2yXAt931TJXBSqvvczKHQb8G4ZC9yHZFqXawsfLZzfm9f1GexBzzTRR6",
  "key18": "3rvfKwCRCapJkoQsmGKUkrmc4Wp6MgYa2opyTNFHCKG47QrZWUf7uzuhVi4kCKKxDymYKeLLu48TiN4BkA8gtLu9",
  "key19": "9Kwnkc6xVUDMTa6E8s9LGdMcfJJkCjfNfrrh64HfyUYSS6pBKPGbGxxYFQEZYvhkdcoUVboTMzih5WzV72HAX7S",
  "key20": "pJkgCmVrNuANJ1jQYnTdNb7mWLfCjPcjLFANJrKw9tcvdFjxUjAGtU6Ga4X4zgWoLc8jVNUToUcBVmt9buMWx4i",
  "key21": "2ZhdBqxqzgKWCNdKEGj4ZaYSgfh9XM2Lc2PR7EhfyeVGRx4CiYTcfGPPJ8jJUYrs6h2bGa77BzgxjxvcJ7xdyv1a",
  "key22": "5hFfK4g2gCfdAD6r8VD7Her5fgtfW4nqEs7rMLWzYp4skK6SSD4UEN7iLd3SEHCdoZMgzzEs5LM7AuDPTW4PpM3N",
  "key23": "Us5o7uTceavmHHak3A3maQQZJ91bFmSNg4Y7LGVGMNBqa1jy6zCVXEpMsMZn6vdRd8U5SuonauuNbhwKNPEisqR",
  "key24": "2BtStKRoXd3ZRNwuvugSRtXnxJYk9cus6Doiiq8NCLZxJeG6GKoFyB1QzdyJ4VuWUf3xK5QcaauNuq6rRprScZQ1",
  "key25": "5LP4Sjkav3DcBcn67WdGBGwj9hUJ7GwoM7NpKd5D6mfVhBRBnor3LwHTPJ4ijP6oSt12DMhBbgaz1WSVrERSaGpr",
  "key26": "4ZkRgKmcitEUdZK7XYkAqGV8LrmLb4RkgdrDCmPm9Cv15hLw7DcLKanuTqygiudesEH5ijYLW7AtcXJp27PwwFyn",
  "key27": "3Z7rEWZxB7sm6zY5uD1oZzWTXE8fda8Pe88pqKT9PJYRZXKaAmyJt7qAgcQCQFait7ucZ2HNL527KcRad6TsTcXn",
  "key28": "kk88jC8jQiT4YzDkjt42wrGJNdjuofxXhN5dGe9goSKCVTACz7tFHmQpFHMwUVshLXNBHW2tZT9Cgn6KEa3kKJH"
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
