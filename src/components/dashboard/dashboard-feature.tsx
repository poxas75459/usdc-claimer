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
    "5AuQ3mFkFuDwDbeKBXphTQBePSyJczNXNMHeGHARdmp2v8mbQDhtR1epTU2hVe3khZw7Nrw7eHsDDWJLpLDQqW2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JkPwZ77FEHcHVvHwBkVMKSk9nffw2owv4tw6dVorSVA6rkChXQLn93G68pixkLG9NHR4Z8GNvDLWtzicFLxsje4",
  "key1": "3r7Jo1DixDoNNH7NzNkMQHL7CZMdczuu32NqHYKiopkzsWwQGDqd6r94bHZeUVuoRni4cyP5TyTuK1bgQHDV8roB",
  "key2": "443krxw7ijVFx3BAxYzXMpTX75RCZUBcb8G8X7fxnWAhqPxMqqqdxdkUEiQ2r88J8m5t92APLSqX5F83qgJsr6pw",
  "key3": "5mBAQXKsnY5pqnpHqyDP9JkHvkUWmN4agxNJWYv94Pwgc46BqETaqPbMcv35Ev8NeRpDHMzn44t7S4Dy9aKVocRD",
  "key4": "28KMVsntSnd7YHhDQ5aZv41aF3J8Nc2VYFJHSxkLPG63fXY5Jca5NkLkShex1hqeWUDJRwAs511y9HS684huTyzU",
  "key5": "4miTyVEVGZjYDsr72TvPp8Jkkhoy23NNfoUKxYfPQzmNa1DtBBGeq9wsjiCWUuVDSVnajKembEwo5UrTLHiwc4HT",
  "key6": "5C3nKM4AwvvAqjyGBWnZ6kT5hDL5CqC2pnXgR6JdGXUvNK8gcSADorEzXx26dC287z4hSCXi7V2VUUY5Un3kXs2R",
  "key7": "4nh4StFDgU8fH6DiFCdWfZWtQ4dSR2mC4oBqqi9dxVtMu7DqA22qa5Rzfo6JJZ6NRWTtjZV5kHZQbqXWGqxMVtxD",
  "key8": "4GaoyoNx9ctyiNAEM7Vsb2612So4mj6dRYxsRs6rQoP2R8uNvArppF3u4heD8rnD69wQyUbeQhM51vmTWMa7YySm",
  "key9": "S6c8umTE9D2pfgvcZrGKtsGpaZGRCqrqRinX3Ks38pTPgyM6tyxW5HAk6d667VXdYE9kDZkzsFQrdQNQCYYHVSj",
  "key10": "2fiwLX2feDKKwuNjXSzpafnjpuoFmD1sNYiBFKPGwDKM5B8gyp61ZRHRWVEbjQCtxveKSUgtRxdBqjDBxXHZRqFg",
  "key11": "2vWs4yr5wxw7H6FLrXFaUaZtfoJQvSSnxJ9GFkNjj7o8g2AMk9c3dszbEh1K8mpXcTM1awDD4xUQRmBPqFAbyYcC",
  "key12": "4qAHvwtaabri7ijcS92F5aVXiTxX1PZJDUK49oWRJGXkhut3DEebka4WQ332aoR4buJmZt8w9eBAkAjZuAb5utKS",
  "key13": "3n9Fmrv71e36V3M7TofNCfrdrLDK4d9EmnUMUnz5J6NbUeu9vmCWnEZszCeTdhie6wY8mHJ1DSkNvms1D5WBut3L",
  "key14": "5SrTdsfrY6joVkk6cAPwXjV8VogrNJ8Xx3rVpvw3tnC8rbwC9nDAMzzS9UD75zvM3GB15x9zXWHGY2XEyHvuRWzc",
  "key15": "5zCQkMiYJoxdgWs6TnRfeJf4tUXkrQ27PNMccV72aQSgrp5qHktu6z93ncczqWdWVvhXypcvXyGGWBVtESBgKWsP",
  "key16": "2PGBXQ1KLpRRwygjfHyvdMbj4TkM1fLqGWSiNBRPnfrL5NufbovGzQ3xPgyFrmVc8iBwqTVvFbjpB6otLNDrqD2N",
  "key17": "5M1Ft3BPAzXBZzdeSGR6g1D6eUeGvpxECAVMVapB3Eqp5142B9nmUqEPxcwvE1DycWcwtN6rSNWwUxiEkr6faaVL",
  "key18": "3TysykVaPMVBXT5rHVHUAF7gfNJYM8vnzAeV1tQK1Tzpc9PPgyh1G2mo1oHYNFSdZbitQc3RvqcDrZzHBEL1YweN",
  "key19": "4NzAuhdmvun2mWakZu6hc8K4tUKxPwTwZhYeg6ZS7birVBeWR14nEkYekk1EUkgkCLWmGg5pBFkj2d7M3wmjk6Ti",
  "key20": "CJ53gbiVKNeLRAaeBqgJRAc3ZPkUZihGvybSVqJyMUa8Ta2ES2qNFjkKMj3iQjqp4BQTdj8FivJ2QreyYwYGRsK",
  "key21": "29VGvQJLNqLBSMq76pZrHNTqTzYhpFCPQzG8FzCKKJt1adB993fmHTKdhpTtN7TdR1EnLh2Atqtmqc2FFVBvEiV8",
  "key22": "5uMpnaodEzyahLAmKtqha1Vr8UbRnu6KDF1WGa3Xz6zocLofJgN3hAqxjm6W3pi7kqeNPavmeoZera2o1CGtSi66",
  "key23": "2ghSjEFbquZbfb4Axh1PdivMwyDT44cggUmf8z2grnUSfUM97vZaqV17u9EPGtEENhJ8wftGYa5nKoJb2Sf7rTm9",
  "key24": "3x5kaCNp6Ysvq1Y8zPeFKdUk7XXFWwKS2f5j1ZpfXsm3oSS6r4kiZLHq31xk4xsZ9DV6kNjWWFMSrxtGiPJDNNHc",
  "key25": "227mvW3uCgLNebUxbH25dGE1FnVwZPoEULp9XQAs4ftVMTxTQfRoMY1LctpGkLNMkY12MwM1Ypg8doC1vd6xZ1nF"
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
