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
    "5mPDyV2VpmWhCtAGMPUkkAPcXFLxRW59UFUyZ1ge3cGfRmgC6HxMvSKzUpX5oZSr6vXBYMhnLwus8FswP169Bwjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D2xw8Wvgm3H3a3Njz8ATaMgddcX1bpmJ8xXc1XHsxThN8X4mZkwEidUyVw6SxajsEuT9UUdQx2FayoKSxr1N1Qi",
  "key1": "5yHSNJwnKiVwmmYdjFzoo7waDRM9qxPFsnDHnmqASGBhbd6ESS5YLGdXddKGERtSMmbHeoPyHh3PBNPYm1iu14LL",
  "key2": "2s8tZjpQpemKw2qCDvfX9fjYJ4p9UWbdBtUbXAfCDW17fFAFuY44Eq1dX3eKjfTRiWpHxh4Hc98sgzu2KywKrETw",
  "key3": "4oyvZHoEoyVEZN39UYPUnFd3WBSs92FPwVCdwvaWrz2YQ9a4yPPDBiFwmAmQkSXj1oRNa6YMLx34ovdAFX6YS2gD",
  "key4": "FTunJGcNUrMt7zghrfRE9wQHiHg8xNxUXDhb3hrxpBsftox7RtAZWmxjvfhMbif2PeehEkEaB8AhNPzCvfR9YAj",
  "key5": "3JFX6BU36GBChfwDwyFQs1PQ8UzE9jarNkqciCDFVXpGLK9jstE1fjyVwxc1YKNqDSZm8fvGDSsCrdC3srZwq2jg",
  "key6": "43TLq6fnY4Uosr5RKChipWfqPKLwG6TxEqnmweyyLWAmQkSmioS3KqvsBri7ffCqU7dFpiNfFEggn8McLEpJJBTq",
  "key7": "5Ga3JJD323ezRHjfbYRgWNnjVBBPtdHAPTMH6jKgbeEX61F9mXTpMbxrrxVmVLE9cpKSaCexVE7BnPFgjezGBDvH",
  "key8": "i6hTunq9T95ih1bWBFjiCVkirg7bnYgzYQyZCsE8nMMt1Z1KhhqXd8eWE7VWbjRV35BbFnErhauUso2FhDJo4tn",
  "key9": "53DgxpJSWEhNwb5oXgsJAvJaKGYziPav3KP4CuHk4di2YsvGjgVFstq2XX8KpZwUj8XoBszxqEisfLX3ZQ9EzhtD",
  "key10": "3qYSE2hDfrrfZtQEiQT8wkPyU1fCMUbELiMCS8WFxhkmYjmNQxSCkTfZMwCHt4yRzdAESptq59NxbwRa8zjEePCn",
  "key11": "4T79AdgEbnhssPnvbAWTyDuZYr3AkgMkvxmLmDHW4qghXzqYAujyApCKs8E9ap8Ejh574av38mRbZmoRR5j3RQRu",
  "key12": "5KANR1bzv4Z7cPcqhdtR5q87MP8CxRAZB1kQppas8MCboevRSKU5tg2ZhmFaPoEhLXyUGYVbkR72e127Cd2j6BUL",
  "key13": "2i9BhU6vf4FTu6bYJzeq5NZbiNPEHzbNPehvpr2RZru1v6qriy3y418rkANfWSfzzgQWQvKjUjGVwkdzxhhmhrnE",
  "key14": "4MwyHUTRHUGNpyaKAyZZRszsNVRCETXcuSo1RasMZDs3GKS8XD2n17eY91UgLXRUubFNUtcSrdc7swUYUFffG3Ry",
  "key15": "64JSv9C8wmMRUXL59p5vKKScmsPeTPpYgx3J2KvSXJiHcGDxJYDjVa8FniAxV7cQfDed3xneXmKJdLxB1tFXpTZK",
  "key16": "3X5VvGaTMYndL66bDFhEJXbgfdGqdBYyqdCUgSAA6SKymc3jsnyW4ztmjRvqJQGkesJohhjaD4M5iwcVHdt3v5rH",
  "key17": "2DE4mHBLeqQTFSSNpEaaZ79J1jdWoXjATnh8XrzRPgrH4bDbuz71gdgMQPP1pkz2EJSAiLro5RibnHMygBpzuWf9",
  "key18": "4HBjbfAPkRe7tcfrXLYU8WuBydH1VW3ECzH5Gk3VqZSSUKBiek11EuPfbkcMUEDi8gfzUoRxTBfzqTuLdrwyyE2N",
  "key19": "2c1UzcUg5ZebTjufnCtaGKdY9QXhL6aERnc76ETNEsgxHrHRyAcLrCe1rH8H6hnNMWRHa4QJCS6thyLEJcaGy9Cr",
  "key20": "5vbevnpMdp3g7avRQ1xGBBWAEa4eTbgpyPE8jHx3ANGk8sgk1iC4MUkhn2mngtftjeNKMY2GGnfSzKtvVcKvyhb9",
  "key21": "2W8MzEcyZ6XBVkZiEVZdJYVAS5Ybm7FnyHeDSr4h2cABT6HiYTWRxEpMyai4QbaUnwvNPPT569VA7eaumGSpEtH",
  "key22": "2rT9XHXuCmrAy3cNvCYongB35v7dvKyQnVDKuapwbyqiSyBHjTEzezeevNEvjVXNsf2oEgf6cZZVEjCvupAkagYb",
  "key23": "zBdR8GLdXRfcwL8H4JxXKsxqozMeG4Dvpk2AVY3HwABwMwJwMuok19UwQUZVpag7r5bJw5hEkR216Ldfqm7RTzf",
  "key24": "5PyrTPAdHSD4Lnd6G2e1AHrQcowrZkxpvbP4ZoUtWL85eRMaMkJuv5QxN51n2TYypNgr9TQU9H456c2hHdZYLJYG",
  "key25": "3yx32rCp674zgsyATuYvo9BkUXvGv8L5Yru82Av5i9w2Kk4T85bPVQbQborvjYBZmmfnW6Cth4jnr7TUHtg329go",
  "key26": "5v4K9nSEmwXgL8mzCSPcH6oNVx5DEqCDyvDNrtKQtVSaSFo3rSSX6CZqTaCymxebD1fXsaBsMD2cD7nS9YBCjSe4",
  "key27": "4RD75rDxBwKQVVWXAdofL3Q6mKJzP6gPCXYYLiKWKW5vb7wTwQWA4BA5ZjdHZyN2zX9Jqii1KQDPKDWsXr4ULEfc",
  "key28": "4XC8pQpKegoHtkhSJ2iY8f4eHMCeHnGLDaRCocm1HjmDLJsVqnJkj6sgXETaYYpE7yFanJgESc16d7iwkTn2uPmZ",
  "key29": "daVSdm8NjDQkFFeZUbTbtFnd7abnzhcZoWBn4iBymnnLi39m9ZoMXSf2ZcxDXp4fWhUVVKFTkJBBYWeCwv1416V",
  "key30": "wPTwuqytRTtQSbLNQFcHQ7NSoh6D7MpojA2vJVm3ZmY73Bus9TdGssvv6dWdNWsXCEWF8CR15PdgWRGgLoyg9hm"
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
