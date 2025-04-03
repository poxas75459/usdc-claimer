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
    "3oKZP5TQWu6uuJjGaCi8XAXiXKdvAmodsyfkhLektjEqUMMv8XJJ2H37UEjFKzvrsRjc57SS7xC4qymiRCq5ETFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UBpeaMbTbFdexPRjZUFP8qTmMGGNQZGLgYZG39B7aWwDTQdd5dncXhqNiWQSECRopwF9KjPfDdrYvC9asnowcgW",
  "key1": "D6mw5izuVLqJhVNgSsaFhetDmhJV2UmnfoLUPuELjTX8AuC1pCQKcUMfY6s6ko78pxwakMPpiSqNPmXFmeopJty",
  "key2": "3BqVknfearWoeNcaCqWM51QxHFCQ8FmwZup1g7MkvMBA1ebRzasAcbMkWKyw4iA2QnedhFiSnYbhZcRf18UyqJV9",
  "key3": "3ALWZmLxhmBuaci4jfSnSKWjATynBf3n5PdapyLNV9QX4JMaqiKAN1HRrS6wi9UmrnFxFt4HfW4hVm4rV3SY3kkk",
  "key4": "5Fd3LtKW6VbdBMQuELTVdkJ1y7aFK7usryH3AVoAtZ8Z75jzjVYfY5GGcBstaybSQyU9AdxBUMoF9YVPTCjkerkM",
  "key5": "2kLuiNr7nPDTPud7TnjxdQZGnbAsNuXrXFWpJAFCia2WYmodwKpn69q6Vf1uQQDf1zGpvykPiFcPiABREdAyTBPd",
  "key6": "rbVF5v1vCMJTTjYrXV7zvu9xVTAUzWUN6RYhgwnFhLep3FRoEzbfVmdZ5vSL2ne9HVtNFrDdqxRTZ2Vv5vZFqpD",
  "key7": "3zvo8pwUQ1GgSPchgAGR7EFW43E2dACdT7xrg8LfVYQPyg2kxdj5oLhfHiqzFrE555nQpzb866uipgZvtS5mGhSe",
  "key8": "58sRsWFGwpBswg3B3ULPMZikfUNS7JujGYtcd2gn9MNCGGJMexnqvTwv65DA4vgXyGPXUBN2EF3hDpXEgm7AamqR",
  "key9": "2E5gRebCU4NQtUzNMrTxEmTacesUDaQRh2PPVFdg1wu5JKzNUhNsKGKEXdKjd4HdsrKstmM7MXs2xoAGgEFJ4A7e",
  "key10": "3CSWc3w9TPjvCUiXernvkNgvf4JZKnExAZLm2QnPHk8ct6T7PRTqcoPVu5rMKqQaYmkddaui5CFrV3DkYx7xpYPj",
  "key11": "5HMa57woPbt2zVGoUvvQtXMnbDqZo61UBrehV7zbXd8wRkLNx9KED7Lggmstg8xtdchPWiT3wthxPU3HpB5vSbb7",
  "key12": "QD69tV99sraZLGPSvwFYsZDoPRiQRsPvjhiLzZJ1fvSdrczQo1LQ31zzNcfrA4s3LzDatZRrti48Gzj73RQJguw",
  "key13": "42Hqs6ssx7d47mnkHYbsWRRGViXqgSebZLMEdZuHDQFBs1DLgbZPobAGTCZvXf8V1nGukuVLwayZkGQWVADya39X",
  "key14": "2vKH38tF4SJ6SHKmkDwf58WYdiYspEH27Sk7d8kut6VUjjrjK49i1FNvHNe14nAHJ2sbXRd2y9JXxVZE5WwLDMbN",
  "key15": "4AXGVyke66nCiUUv3ABs7jjqQ8aGAmpounT4RYzEFhk3gfhTMaLgLMtPPzVoiJLZCWedQfCEcmktwt2F9HHcphnw",
  "key16": "2zjFxaje1SY9k6rmsVrbdioQo4B4Y7GBvS5rJMnbhcLKzU8iHyfGxk2kLLLzTgQd2xyeYkhnurn7ACg9VDg97y4d",
  "key17": "2SVFbvhYxKcwvBgHKxCnPuUyHLCaKsi4WnT78bjHgjhBBMcu4rkkvZMaRTkF7cQjU17JQyCrKeEV9VmNHVxKCzvq",
  "key18": "2JHLPzsyy3bU42XQ34BD422bhvbiuwaGzZPKMNCC4sTiJEDGUgV37wW8ViaXzodVHVGfYR7PJZqp2nHddEGJvgKx",
  "key19": "3hrKF9jbCGf1dwHNbYTzCKZ67Ed4uFVps6oNWvQ1g34UP3Lu4pUzum1puuMDrem74kpmeAUkVXNKQknCeaeZhxKF",
  "key20": "4BVhdRvWuCTNrgHSvirubnRw9bUK7AzNUiNGP1nEQ9CA4yXjrrrW5Ppi1bvhEDqLUngJCn1P1JS4kQ527DBgyKQS",
  "key21": "4aDJ1GuaACBsQTkFopsc2LkprLJZ75yjVChQ6656pVPKYdbe1anL28Ep9pvkgs95VW59VHXwY6mrK8F3fsm5KoY9",
  "key22": "jECMnrU3b2riJaLBPkg6CMmq8H1ERgkKdTF5YZhaPpPfv54LUakU3yPuE6Z9DaTmxhGhNBc6kBRf1YKmm1avnVP",
  "key23": "5YB4qsm9ynLKHnetcm7nT6GDEfdhsx7DFQj6PhRuEbCxsex1dvY3oDmLFHkdocbhvybagvuBvihhQY2SnGKiMzXL",
  "key24": "23CUBXvbfLcprnYNw6tJiV7x8cqfzSgqv1pPrVWQ4ML2EEuyJ6BZ3foFUpNuAzMiMZ4WtJw1XuHB7RiE1vevffjX",
  "key25": "2vQAk1U9e4wWYPVHgaaNHXLA1cRcWEnUyRzyNGoQdjh4b46kqT4JnHqb15EzEwuEc3tocTQdASj2q3Gy3kSGXhRh",
  "key26": "4Mvv9t64XZEZ3qaGnn1unSX5MdR8bbKYNCTetvNxeSraRH9i51Ztch6S9VwC7jPCruS1pB7g68JvZwgcmsEgHQEP"
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
