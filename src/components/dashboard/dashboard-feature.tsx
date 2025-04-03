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
    "3Bw58WRRfpQa9gYedrEct8jespfRixYic9W3n6D8zMWGjgiyBwDF7zdr81KDYQSBHdFPeNdf8n4SCk9S7LDFKA97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h4Jpcgqu1JLrhUNUoEbTDejtZ1j4inDywLxiJ6kVjc8JWhX6Cou1aKTHbLsx5xtLaMcVYhtzn2gdKUgYcxKNHup",
  "key1": "42bBwtiN8Nc2H7SCNeuAyPMQ8F9kAS2R4TNc3s35UTZwEE4ViobVwVfujGSVkNVbmesfGm2TsamZTq4RopRzJKqB",
  "key2": "3tubUzdcTt41LndwRkW6dDqcUnHZs8vJ3GYuaiTvFHkbqEjf4C4RP2Zw1o8PE2rxenfRGYbYS3khKohoDWvrqzfk",
  "key3": "qAEGsuzjuJvVtydH98NgKbYz6x6M1ixm3GtyCgzbYK7WoKS8JuoQchCZTymSbQKfbo7rKCq9UkNhuf4EWvALRA2",
  "key4": "3hp28jVsiHS8BrsyrFGgkLuqcftqj2KpYa7sFX2UdEA12r6WnPF7xq2L9akgjJqMDhyTAfwsfJJ8yQGn9NZoqCAC",
  "key5": "29cSr5oB1qXsB9gekx9Wc7365ScRoroheUn5wrEEHEMt9d1Xh8MYo7rMQxfRE1x5fw6uRaYSGKFeL66wmo2K62b7",
  "key6": "4jQc5M3N2JzmSEKZYXj417eJdhVktKy9hzVsmprCVz8PiiQh1gJNQbicMPKyVt9nuZVQWisHV8JSHwpaZHP7zFHN",
  "key7": "2pLvP1x57tKyEw4qxPt1VjtVL1pfnriifsjFwnTJXsDssGZTtSjnW9y2irh1r1e9LjmUWqpGuw5WBdSTdvrfovZe",
  "key8": "2id2bPDE2Zjn8SF6GHa37iUGdPunJziKf7SHTA6qnk3EPxkupwuM3cDdWMzAPttvKoxhKLDmN7ojSvTzUbT4Juvf",
  "key9": "5hfuhQsoSq3iW17gLYtZzRBihesaJ3fxHWCVsBRp8mZkRPe7XiPEUn4pgE3JrnK7YTweb7QzjaUmiGjmAU3WwyAq",
  "key10": "3WRqC5dBcWFhvF63Qt3aoJasocjpWKdvn3HSTmxVCSYYZh9GeSkMDdNUueLGwjZNdWtZHknJckq8pFVjbBBv2iDD",
  "key11": "vmGgrYQEMQbs6Knqkk6eAccxKXoaFtpJzQEruBjfMH9s3RkGALPkJXCxeNfwx5Tz6w2ayzUD5raSpxqBFE4HHxB",
  "key12": "5KCvJgeNRu7npSftDCKnCCxir9YZCryLy2EgZKcvzhhEUzUernQnBYChr75qDi765E7efu5gzJjH8vmFZxcFkE11",
  "key13": "5jFmMCK7KnX3qYkJ5T6abr3ndQqPSi21YBsCRoV7Q1rAMYiDqJ8VmCtgxnYvSLNFiXk54bAWejQFNQQ9TH23tMhB",
  "key14": "nb79dpMbVpst1FkfJFSAxUbqrQiuRpHyY7zjn4SYsWvXXw5o3axxSbqTb9NQmmwBuoBgtzT4jrS2a8EPu9tqQao",
  "key15": "4zEgNZdRJUChsteNh6ChehUnnkivjkAyvp5RziyGPNg6Ptceymcnjp1w7i1q6HhLVTmLA9z9viirgw4bj7Dx4kmM",
  "key16": "4rBGD148htHDuTcyZ7hfUgrdvykETwTvkEtVxoDcQSJHa1NDZaNoPBiPUxLpsV341Cu4WfBDvJ4JLTiJvCzNvxie",
  "key17": "Vsoh6ysXuorsURazd91u2A68yFnm8wbBB2Zwg4fMC7x4GfN3ZHTKGF1mUEeuizmUSHnY1G8bpHo4cMB4CFn9FGS",
  "key18": "2YXELU724AxQoHutZnSLny4th8JTmabFJP5nzR5zQSKaZUu1hdHAKDjPPemRCoNb9P66T7iJQSwezYXAeJQjGKbv",
  "key19": "4419H3oEwYPwtwXNWRR8BSTDvWaL4vACJuX4EMumR1bMFTsywq86uGRoU5TbG3zW3CqGxHZ1wtQZocMZfYeuwomq",
  "key20": "gkAgpBE3L7x4yU4MT5c7Bdn5gNi2fR8qfwdUVSymGMtDm48xGBjuC9cnvxV7LQadvHEs7goGFwdcSdSvw5wQrUv",
  "key21": "2f73WxfPAGTQCF8mfv4T6YJEy97ioJdvL9Y6EqMdEWBsEjhQVmvv1xJSWc8D3if6Xp8QjXBV2zv8MHXxHtsQ1KXx",
  "key22": "2fkM1eEM3vKyDKxXUCT4waQBC7Qj5fyNxpRxgn2ADm3sPnfiM7SSrHP6mdcMo3LWcJjPZ6e9sEgLWZc1gJYwTbHB",
  "key23": "53MxQqQfsBJaKWKSzGnTWSxpxSa3PTUjFKfWbJuvSb4a8n8XuMwnazzNvb1y8awYdYc89d2H3xLezNrqvKXHqjrf",
  "key24": "5wD4BvbJWsiRw9RcuhCUnmfhgTZRWBZJYTJqKLzwRCkvfzQMcLkgFs5sPsvhY7JtJYDS25m9ht5kGDJ8UGDRdjiM",
  "key25": "3SMnNcVawHSoN9aoBaVbckWhb26UzNGFAgfYTt3Y88cuE1L6789VAiSVZVu4A8VJcGwvqpwY44GUTDJLUy2xN8fR",
  "key26": "3wdXLvYrEK7Gyogb6YtcbUKAAJx9MGLkZLLNbVmcGn7q7mpTfKR4v7AjVMDNCxA6VNaynkrW5udRLncAashgh2hz",
  "key27": "3mXHWGUp2qrakcvfmwNxoot9vo1ZmQHwKiZocL52zGHhzJWS3nVXKr7G346rfcPukyuWTusnDmqURfryjvETsW3W",
  "key28": "24M8aSPannm5VEjv4y38m78FFNWhSmLSqUPkNpKAxENS4gBVscz8DsygAdgLPP2PBcs7Hj5tRMWP7jrmKr7hqbvf",
  "key29": "62TfWJGo9idtiLMkbL17J1BybdwKW9hv9eLYWNp7FbEDMfMi5RAwW6AhG5dmySiAHTbBqq4EitiTvQV8kvAeBqth",
  "key30": "5rGyGPuVVEFiSh18iczRAmavq2xtu6iAWi4JNrA18LXiK6VezNozLkULDKGgf5rQucnih2cdgXr3xkbAJ8PtkzUR"
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
