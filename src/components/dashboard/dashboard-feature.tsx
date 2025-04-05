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
    "5tzc3n13Nr2SFUxCZkMixw2zHTQzrgWHv326VW2UEwAgAAcdYQWdiE6DYbakCjsbEk512KnsttY5PasVDetw1U2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45T656F2Jv75P5Ac6uxPnULRLKBtTiGLQDQDXmagGPcno1tSKPNkcY1n3D6dSfV5dWfqaUaGNkQdPVfEwAnyZKkm",
  "key1": "67Fx9rpD8wqVVwgkcLTTLZeKz9KUs7rtCAUo59EhW5Js1Na1os3GCyhBwqFweBg9CD4xkF7eLgezn1Sw5jDcAVmu",
  "key2": "YTH2EUEopQvg1sZwumCqLkz93eotzZJ4bdqSHokyyPqSohyfRyppbmuZpMV9NYGuye16Qw9grBdkyaQQt3XXQ4e",
  "key3": "2WNJaE81mt6PV6ZAWrDpUb2qfABZB7Lqtxgmk1YcfpVVsD7JkMWCA2iCtSpHYd2NdU9VCoNeq977MwNsSaLvic4r",
  "key4": "3mXp5BRMnqKsqwiUxJdbh26HRy8iNk44hUJksttefV6pyuKJrx5gBFWZvGUYb9BqpHZmqJgdyNXJfTGWsBb4wLPi",
  "key5": "4akwtTJeR2jAT3PZ8PAZcPZm1un1tRiHLghencQsKNZdypRCrRhetFChYhpW5pmbvTFHWpTMfPqHEmYxYAiikYGL",
  "key6": "4BSSjPaLQQ1phQiLUuAyjs1TrpJazaA5M9UKMPzHBWgXN2hFz823yZgkcqDVDvuB5Hp7p3L9KrwFc3fZwornSndm",
  "key7": "3mbkbVVcRxyYTXPAMvonMJecRQ2VKJYP7QGAxKXyBQHod5ufP8gP4k1ZXjt88BVozaJWXmTGyTtCQF34gtJxb5Hj",
  "key8": "4YMhbTpcuyQbnimPRxgxHKS3tyGnTf6fngE8z17xjpvLPgwq1x6rdg7a687PiaeyCTFwGKba4spfREyth8rNmiyq",
  "key9": "8PP8TDjndUbx5bXAMrFJKM8Sdfm6JopZ9dYwavK799pLGxeHgUCvAJ9mBQEP1sgYk2hjpP4uftEvCrq6jBrxGPu",
  "key10": "3DdYeUigSRaXCi3s3CWKqThR3teP8ig5hTnkA9ecmv8MNg5fF53RzSxn48kjKCPbtueVHgrFYSwfDf6KkVAAZntL",
  "key11": "4BjddhEninM6jKG7uBjEB4PRYZJyi2GyoANBrL1MHdXcpBUUuQXrTy9vTnk5guC1pjATQSerCE7S2uDFXa5AH6pH",
  "key12": "2TxrJXRuUy8W9mst5N35w2dmnjMhC5NcD9UWEvkJq8wzmLrDMsGTQa8CmvyujyVxPfF9NRZSYhx86kauALSytsk7",
  "key13": "3Wi16GeBgN62NGpC9GJWMBpLsz9zHtH3wz49CBKW4GkvXE6jyiaBsrxJ5PucKs8XHuHN6Qf7Pc5XEAuKQ6jBMFfS",
  "key14": "4pweuYQbGP424UEKHVGAvrt7LDyw6n4QsGGcUUBL8sLyc5kPKLgZp4mDEBQgGtWXP9uWjPuDWnrhmPcjyPdi3eiJ",
  "key15": "4fRtUSXyxfxFhErh9rR4vgHmTiLjJoCGrH16dW1egB3X8TpdQ1iEzjfMFRoCtFC2r8puw6WxoYfumaavLVNeVMZz",
  "key16": "3Ttqo261ZAEt1Pgy2pBrggW2TYkvxq3BSzLbrFgwUe1n2Pndo3VxHJ7SuvbLqYZgx6gUnekvLgT3Xgsz4wgFjT6m",
  "key17": "2th6m2cxmYE9yqAWYnCuHueiAGaKWKJ4rkyWv83gUV1ZqXqA7L65U1BgYvpBnGhPwkvfa7XY6owwfdbfjhn24fgs",
  "key18": "qfirBYGqhXU6BqNeJMr5dwQRMZ91jZvfYRZR1cCeFsfFEZsyciTRzikNRzp7SifhYcFvDZWauDMYeuPJr4xdPHt",
  "key19": "2TurtbxM6bJxv3Uvg46cggxFLk71zNCmFpwL37CeLEnRqJcUdRoJeDhMifaeQeE6isYBVdJgWH2kn5EGS3HtuRVB",
  "key20": "EYmEoQDrHhnGPyiW3LvMcWYvexQ2g4mZKdFtST95CCsF1sgTfBmspFnzX6kZYSpf1CZRdNyrkJFWNcYwTYYybET",
  "key21": "3676siuAJpnUye2YWqAWdHch8caSWXWuidZy1hw322Rmg4JhspbStaGTHzeSZj4BiyfD6cHQDTDTRj4UZ9J8JaGD",
  "key22": "32cb69kzWDrtQx9ezfkjQ7ANhax2e5Xr5TgxHczv455bLFmsDQzSFGSmE2fBFh1nzDbiD9zzVvLE2Rydipx9Pun7",
  "key23": "4mzM6BWzxV3P61jUcT9NKjzYtKzjsPubpGSY5C8pvBRUdPvfygtUUddJcYRBzERHictwLZC7SCFJdJdSYPEteUJh",
  "key24": "3nmrimxNGhZmKgb9H9XcNJjp3Dhmyf4MjDQQimQVUgdhvHeBj6HgzgBz4zUoxyUd6j2no18FbTyFNYqLyRRUCLTS"
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
