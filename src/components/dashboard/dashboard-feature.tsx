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
    "3aKQkN9v5XJi5Rdk73xs8QTekhH1NFv2KbrsbzB3HbfCNLo1hWYpr2oKbfRWc8QqmatRqDEbWbbSpPoEesurYMzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cMS4GQwN3HgDkv7WaWDn5xuzvsZsisPcV9UL7Zagp2VdNEQopDs4xruduhKBaUgcY1qFsUDseZuKZ8CsqnRYfLM",
  "key1": "yZ7sK6LLCMZbeAqujR9RJXsudvSC4JjaxKLHLCpstY5jZQzzkqAJifjjDmjHMThNgoedN6ZnjznWZHJBvqGhGqp",
  "key2": "45m1SqV84c1T5NwmsLzoDGdgrCPqZEUx5nTVZZtPSmhTZm3254CfWL8tieiECDMk51PyEWytvRxyJB9vgABiL1t9",
  "key3": "3mU4dz7gUJGem59A3jLCHY3DDAMh8Twiep5es9r4fPaEuFQRMS89L7MLAGWsFw8fVbCMRbJpbLjFabjszh1u3Kn7",
  "key4": "4bvC1nWPiayiifEWQWsZYgARqypjSTLJ7xuJNaixJdJo6e4kT7FAi234rHaGLCqj9KHppEv3tRZPPinrF4h9CTfR",
  "key5": "4cCeLKrCA7BLpboAJy4d3zHG3fJXiyPHfHC6sKwb1pnkhW6TMmv1db9gAyDVSk4GJLGmZiwXCpRCLCD1CpsQ8c5H",
  "key6": "3DBTE4XdmG6J4P3jxPEZvPJL7GMzptNoXmLnBjBUXxshFLAYK3Zwjeyea1PN1NZMuq8bpxvKDm96NM4uj7DMsyE4",
  "key7": "2s1MhU5NWenKx4JvG65zfyNLnJdA4igXFLkdCRQx5kJGShHNy2gtdikpHBfayzTkRJ9RFrz1u9TJjoRN97jxNNWw",
  "key8": "dDGau24z2U1PtxTtisq8KbgdCUFW55iVcsw555yhBt3PazBhNDRSuQ53at6LjVXehjiPpBh4MfDXxK51H12xq3v",
  "key9": "BXKyX6JR9DUwFjD2cjMnqs4MJC3DcK7w5nz4jgPuV52KyeCm3ZQT8V4mm4ugb8814vQMNMNdq2HBF5a4WimNMWN",
  "key10": "1NXXqtaC518mj9yZgPmbgjgB1SDySt23RgjyFsw7UmKFaFoZEsMn62qZmoX37V9Pk1o8PKCnR5QutgKQMfPM1yL",
  "key11": "3wAc331a6iHe4qjAXx27ZpSdJU1m8zJRm6UcFk79PdwQgonVHR8EvEq6bWLopmg5jpZcFMML74m9bQGCMj8JLp2i",
  "key12": "4xiYR2fxLqxrqbNnTYHzexd672hCckpBHU6QC8PVfDc4U1yFKJ3iAZz8gfG7cCM6o5ewftmBzUMXqGL3R6gcc7S7",
  "key13": "3uqFXwUmKgToB65v5rAGkSGYDoLpKdWgv31uK72iLYdPNXxZX7V3LB4jjWFtn7bn4JQY29z7La9cgsbjBctPtqF6",
  "key14": "5JcgUE8zyHcGBAoqDp3p7woRHR3Gjaa8dCJ34zooetrSG5uJDmx3gVYLLn34dtM5AceyfL7W4Hxf4aMPpEJsVaT9",
  "key15": "5BFv7BQGCVwyPCbHPRaYqpSVfwELWhbb56dubrbc2yR8Qe1dfv2HyF9KpQWTAauHKpHDa82U5Q45kWquYz5zNqBi",
  "key16": "3UPbVCQXtNxU3YdBKfeWbybHDExKqkydqMybfYgXxiP7feA9mRtBBVx3nAmik3fwWZBeUDkH2pFrtbCKxqW4wffQ",
  "key17": "5aoqKKeTZh29x4W2Jjy8pmjYki6rMYp75ncVVhnE9Nh8JsxLu6Vei2Jy3cx8Y33TwLCWJm7j8cXSWBzuPP5mNhXg",
  "key18": "8DQ5m3ZDrSk28vA9X87xsWKwsbP6S9eAzJh7orikEXTA6AM7FShprHiCkqmSvzR1VWBkqTuWzMTrsgE734uCVRF",
  "key19": "eGT93mDnxnwDbG2ExSFhV4HXiszXFQazANmRwZNNaKXQxsd5StsPZ42VUGBhAE1i3g8L5rpQuMdKX9J3HLKWNyo",
  "key20": "29LZDHLbpz39aP6ugnHcszbHUEJ1papNWT7G32jQVKwhefwV5uL5E9U1JhWu8SpDfiCgauojQyBeR67GqENY8WEm",
  "key21": "5qcNny1vNowRqUuowc47BmMtziucsVfXi6vp6N5Q67Guj7q7pFaR1Weuxr1Yas2AQFwyzesiNJYW16rqj1RR8cLq",
  "key22": "3NuT1Gt1myT3yPGT7PMhZ83qVJUaw9fK23ADSLVMZkN54bknnQtjCkKxyeMGeNvPoVqfPVmyikBhbPLzqdE7HVbz",
  "key23": "nULj6M69Tf3smwzeP1CTP816sGDmyeobWJT5ZW6veNVxWchgmoRvHU7jHFNyDbkDW6XFHfwC5fMzr5Yzniv9nLX",
  "key24": "2d6ELXoXFbEYqCKLQmn35VNgY7UJdM5UKt1EhdQZT5VPBtoWcwLCgKhfvwQ6zME6ftn3fU16rzz3RDx3eimWdjpW",
  "key25": "4KEQip5GTQxnudtLC73UeW5sgHuxTAyHS1dpkCHQgDykqNHTDEC76yRfs97EC9G3UibwLqWH9bTs322YikBCbCzx",
  "key26": "4VLCzoTcyLSkvAyPXdcC9Wn4PBmyt4VKC8dWjjZDLAqNwgVXvBRCQQU1t5bjwcQ9HhXhFzkGTbWf6kxJP84kxwZu",
  "key27": "2zWSGradMqjKQz7r9NNW9EjXK8fodUmE4ryGM5tfMaAcgYbFnNg7cUfV4s4cL8v7CTNKqsgN2RsSvjVzaCk1MiuS",
  "key28": "2uRABcjLV9ED3PG7HsfJgzqciLYZYRs8ybgU1JsSB8pcPhGngsghczdWvfC7U4rnp76rC7otydbxqC7x3ZDSvwhq"
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
