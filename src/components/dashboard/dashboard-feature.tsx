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
    "d94mt5PYJcwTeKU3GG3yRoyDLJQAV6WAoDJdEVDfbmhtQyyoR5ar8TtiRQ51wUKid8i6hQ5u9rPGGQR8ezmna1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rFDwfzSSgpDXSHjuZBRPsLSSBFrmMJmmmyKMDCtMvY3hfBrErYNfwrCWpsuEcHHobx6gMi8qoe23o5BZj8WL1w6",
  "key1": "4HX5Rpv9DdWWnrs11gvnaKtyEmSZreXrxBdCpTHN9zSWqEcts3msckmRqtEThkhdQVKS7TMV8EABLcc3Nba4Nu3G",
  "key2": "4bGGEBXjtcFSX1mLKQgny4EyY145pptvAikyb8gkgHLCvDdLit1gBqAExtuS8QyDDQHqLAaSgExtCVs2swCbNyHj",
  "key3": "5HgQbN7FKXcBUpKvN9ZrA7wDvVcgFuzN36HsZMesA2H9hquQpUbypVdyjnVxHaZDXLBN9CW5E63Hp6DZpHtpEpJH",
  "key4": "645FdR1q6qrKYk1Ag7YgxBEpeUqQvVYDfNWT9Wdw7F3ia2WMVfCJQWLYHZP8kuZvZSD6hmPjj88oBMpW6dgcMY3v",
  "key5": "3vqcecZqttE1PMzt26ZzxLm3MBZF8HwtL2cwmzRwpG778P2GUPLYby1rDxfd6PVGCPuT2SmtQgPQoE5stDP7AK7g",
  "key6": "2gfjDPbbMbWumtcF4doxcKFmcGBvz1Hf2GAYPNc33gi7GGsPhWzynzxXCVhG641fHCcB1kczUtuRyxTctw3tF3rx",
  "key7": "63gx4xNySWsujtTgQJubGpiY96azsaRpcukzKVpwDqCVEwPGJSnHDgJLLNRvsQmqSuEzmNWkidTwWmczdkgDtxnS",
  "key8": "5XZ8cwqceztXWpxauZkyEGHfxhiJvR3gQyT7XPC7cuuGvvaP6jDMg2YKMdZms7hKFP4TfrSY72dofa7M4cAeidFj",
  "key9": "5QFgwDxE9ZKu84WvTvx1aoRYnyxVpQrajdXJGAfnHEN3E1XYTv7znhhc7fKjMB5Gdqn4u7sAC1gs2Ae1cKi5HmnK",
  "key10": "4drA3JXyy8daj9DotzKGK7kUu8Drd4SyqYiv2wNLNryegzEZRqfTPBrNSVfZW4tV48WYbmvxqeQoEcx3dfVR7C9x",
  "key11": "248Kztvh86xYofGKRLcgp1B3G1asAwXQdmx4kWimhvRQUc5Uq1HNsbMD9mBmS5PMmieqV8nq5mmPKAzpXagbNXrn",
  "key12": "VsXKe9AKiz2mZvBK9ZNz2kutYkLwFqYKnw3atdaGAVBHR8SmEdnZMDCkNDncZPMnLRnsntz6BdHwUbYzo4o5BVv",
  "key13": "3Z4FbedMGFPWwYv1UDkNQzoR47H8qjRLjngAWKUyTme5NZf8Yjxj9Zz8rEWtFAr7nDDgWmWRBxfSXGAJXocn2itn",
  "key14": "5hECaAACLwi18WGhzNCmqM3MA1LKdk6921UYuHnnq7Ev6BcmfEvPvfxmRiQjphcYFWKqndNMY4BbPqT3HpPQ29US",
  "key15": "3sZkViMkuLZJBtzHpAoQqbN4Cy2FVeYCN8ez9366KyCHfZfbV7ma6MuAXbRcDyGszJKUVi7oBHRMMQ4rnZfMBzgQ",
  "key16": "5VZAFxeRMnAnGJkov529xcPWzMoWHqFih6CKL3a85pLgxR5mAio7L1uhnz347THkEBoYQnWassf6jygqrTa7pqRX",
  "key17": "4ZEUvrAMuZs2SUZcoTc9C82R5S9J32t7vGDwjCtYkw2YjsKqBKSvBveCzoYZJRVsXqJsBwjQetPcPy7aoBAy2RcY",
  "key18": "2UUKHES8SH7ZQ81iDCvQLGuBdrrLDP2UADmSNc4kgqAH6KRdi7nUqYYNKYHWMaFYuzQt53nDe1v8gF7eaJjw7yRr",
  "key19": "uv6fanxxMv2gSbGrSBCZMa6KhTbgNVo8yTbyvATivptqgawmD5jNk42BVT6CXPvP1T8kZHzDH2cPmDHaKQPYfB3",
  "key20": "4zXmRK2cUjpiDWqNeuRLbDmL8LXgFqMBvsMMV9rewbfLQYjQn1YRfQ1yNCj8aGyRy7onczkCMKApDVh5Cf4owQ4a",
  "key21": "2o6r3BJm6DiZFDEV9dd1cETVMhu48KeFrmsNn8Ws7qx1x3U64zfTez5bgw6EuUcgVhkhB9gwHpeKcffWiqiK6bFa",
  "key22": "5u6nvE9987Ah4hmHigFDFJ2EhfDqwJaotpjN3Pf1F4Qc2es5pbDPsZxhSnYZB5JgU338LpjppaWqZS8hywAoMk1N",
  "key23": "2S1kqFovQHfx9kVxdbVzgkDFK5Lb3d8EDSMszXFDv3Qd6KB1o2hqcs5jZXydZ7224tTGeiqThH3PqRffrY3VDqwg",
  "key24": "45BYC5LwJ44fgE17zmgTaJhxDHdRDMsmfPNfaEtdVsA4SKcmQy1yWnsiuhzye5PQpWPji2tMw3NMGjgnMEPdsS7h",
  "key25": "2y1ESjhhuj4oj6bycFregiKRvQTUtSk2cei6gvs4ddtNiotGvf8VbAczshh98BMm6nTxom7Gt7Mzeigs2yC3ajaN",
  "key26": "4tJtfXgbb1c9LN9ck8xMjGUunpGpLfkGtPyJ2bEZiRR4bqEokxs7M1GiQ5hmbwZhitGxXkgFDMfnqdwht6zGW8iG",
  "key27": "4fDv3b9pJWD5NRPJXAEdJ9MrDFxU7TWsdpqhyzKjzh5nJDjNssUPoidMW4fTb1aymJDfTyakjAymm3sQWNWPFCyC",
  "key28": "5xizsopRqwTa63evDQ2FxaAP2GwU7McxThFft9UmawV7ALsW2Pm2EqLKioaMvggxF8yZ6BJUofUHatrpRRYJ7iC7",
  "key29": "1fnzhKxqnKp7p7hGDaGXubs6icpcCygNxEmvUHSeCke9tQGGGZsVGKof4aMxVfHs7y8rRM7xdKF7mez98igSeeb",
  "key30": "4op4h6Q5xJoJfuRDF3mffv72S12y2DTwo6pjyoxatRuGAEAMP9zLZNiP5CYyHL9DTUmQAT9QHqDua49XicTHLYc2",
  "key31": "5woN7LFzWsVyke1KRYbneKkZgR37dScJWFYjHJYvMznxVCNJEofmoiCvENU5tb9qeS2bbLrquQCzkvZdUSmdfzzy",
  "key32": "2qD33gBP5cc5htQRGwKZXE8W14xtFaGvcXgHGX9tjCES7iMifveUBBsmuZwRsuT61SuSfvyN1f5ZRp1WhF1GkvhS",
  "key33": "5bcEczgxPsCsAqpn4sW5fzMFRmwU7uPpGU27SUTgtukVmCscMDkCb4Hovoeu5DG8cXMpCaGAtFXHieqboxiLu9pS",
  "key34": "N1ncFxKGyrsci7YLxBRDBjqVGybDQQ8tKstEXWvFf5rGxVJhH1A2XM4aq3YCk37XXrTM3guqTYXmHq95d49qV17",
  "key35": "5rXbqAGkvkgitCo7DEPjfhkyMiM4sYeVho3nLWPdbhJtHjAQNJPEJbqAWXJm3zXzSvzzCaqrcptPMpQfSqxigmDD",
  "key36": "2k5Ufx1UapDYkWjayz1ELGohTDFYKGeZwSs6o5wPcRbL2Gx5827UaEL2AGGBfsviRNvXkriqtD7K8f4DrWQnjTCj",
  "key37": "5MxsjtyGUAusS3QLN4KbrNvFtHquFP7F7KQKGfzdoTptP5jSoXZ3xenBk3r8dWccWkqw3P1kVBVKPTBRKrTm1XeC"
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
