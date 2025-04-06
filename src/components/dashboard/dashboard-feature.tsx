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
    "4WpcTW9HJFTo29txKQM2MjzrU3Wx39nRe4nbbwZa1USz39qFnDrXkbGYc4n1YpLVMsfuoqrqEbE6SsuBzTfJ3dD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CS7DPYvtpfzhXV9Su1UfnSo33eHBjKiSV7pvQQAELHqjgohq78DcUh3qj3WphkkCGYNcnQWm4oXMGPSDscyxmDv",
  "key1": "22XPGJPGJJVhhdApATrSnVBotu4vAdeLkgQXJkzEef4VRZ4kvxxhKMrPpqag4wMYMBaQURCQniMUkyFxXeHLA9p6",
  "key2": "5Z5yWgtNEFEVCzGkxqgfhyevXJjgHdsDQ7zn23PhaiToma3rCuQusf6ZMUvwouG6bWVFLDszWVjbDfY5EBqagMBu",
  "key3": "5m8zR2pEUewwZ5tcVhZ6gdG2tK5HyuFRFLGBLFkuc5iSZuPdxvhghCTVGHHFoqmYwbNs59qLZ8TeoDNsFsVhMn7J",
  "key4": "3BZh5zm6kaYxvVap3xh77qmfp1zirohqr2E1vBpPnyHLQABZwFGoZ3T7gmrhAASwysabHpaea2neRY2GmMy7WCNw",
  "key5": "35dbbvuTUMxg1CCmHU3exivUfzhyf8odWr55gxoCGfmxuW9jmPRztkkv75eZ9FJ4Pw2tJ7uHQJBZeU8N8csbLCEy",
  "key6": "2vgfqUTgsVy3ig3zrUorjVSRnj5xMPJ9Eib4vgW8nLAQydHJoSNmEjg1VopCU6igotgDYRBP57o7n18E17FA2wdw",
  "key7": "5kSvYcgDZkmZfbC1nQjG636vnwhAa37PFbbpEVxT3rfng2MZUNyFhgYiQr8bLMNCRKvNzq46vt92f5bBV8En2YLx",
  "key8": "SXUXWpXjBhRjhD4BLa6aACgVTm7JLm1Wqrx9CaLyYz37zWFvhxUQEbHZ4DSseV5Woim48xVQi5tkrEJe6wGsnot",
  "key9": "5WLmpkX3Yg3JFn3gxxsL3qyAKibqK8DCBnnc8uEx3FyoLetcbvrDaaNAe66aj92nasJkv5scC2opEaRwwW69NndV",
  "key10": "3XyRwz3RCJXxCuBuEsN9429GrN98yLYN9m7gmnRCgCAYNtuxBs1uSHGyQ2hYKquoUNVoSW1jdTGRTeNidP6rHctZ",
  "key11": "4aG3bwA8wNpeP86vCHD4sfFnbM2n2TZt5xmq7wpbySRJK2KJMETtmWcx6hZUWhiNX8sBpJgQ3BrpGacn2psPihQm",
  "key12": "2By92RnC8YmhFctSERSBvipXdgpRcrGPjPMmt1uh9bfCntAQPx4fsFFanYtqsYeQeRgb24MuBYbA8PztJ2HDobf9",
  "key13": "4uGzZTMQWG5sRL4nYCLXyLdByByPCRZsPwY2AKxUGcG6ZvmoFQfWUZvVX2ndT3PTZdEqzwqhrd5k6ykQ4qwDbRxX",
  "key14": "4QLSo82QgffZgpAWbCJoMQMrWLpBPioqwKP4wwZKimBwt8FrLhGaAJey5jA4Gm8ejq7JK6DRgdLPeeWFT5ZccAxD",
  "key15": "5ypzUs8NuAniPA2drGSUgFgomEG6mrsNcZTujHXu75FyC7MyYwVwXvvLwmTydX7iePSWx3SwMiTVaXuQrQmowMjf",
  "key16": "33qhu3emetM26U8uNTbHVFsXuR7Dt1SPkWh9AsTdepocK78nga9KRhdMgjnoYxNHDFMkv4B5mebRtnEdYR7pMJZV",
  "key17": "2eWCck5NRtADq6HiBgebXWCq2t2hK65ThZQFqcDGB6GLzf5X5xZD6i3qQrU3ttj5LUJ16pM9PdQx8CKTYKBK1W69",
  "key18": "zbLWzvQDbtD9UrYAMsNeqNVma2aSzDNL7Dt5P8oohMBy9yjspG267bN5CKJtMZsDc6XcKZEhcKPm3Fvy7qsshN7",
  "key19": "3pVrRc8N9Argo5Y9fZ5Za87MTSLYeQ6nn34tuHSR7Vwj9V46ojM29ZXyBAarj2WtyLyzqbZ2LrxwPiHRMEaSVv6C",
  "key20": "2GLyjKx3uicnGtysXngUHzmqrtbPx8WiwTsshD8jYQYbbCTUiuPxynbEB23CfWNDkGfNkU7jUzkAxcugJzqLNchz",
  "key21": "3VSYPp43XZKCHEVos8oHFbLdf2VJdqPhgL7HzYpn4WjmuM1Ej3ywhgXDKcZESwr83PuvQGvpoMspNmKfanQuAfwJ",
  "key22": "3SjBwXS3gSgAVmGv8GAqntrdLoJo7zmQ8QBBsLWKZExbWRpub7gzH5Tu62MjgmxDd6bDdNjjL7Y8vgupnBhVwvFx",
  "key23": "2MQbSQ7V91HbXs9pfYTTbBKWMCoCThU2XdJLVRgdSm5FFqnHqSJasTuumWHtvRxKmcdRnSZLLyrcYcdLbgAmYrsy",
  "key24": "5H18SkaQhVC4Shtd2ERASZbFG9gSFgDyAPDYt7Y4cjvS4b9yFUREjv2MVnAijXd77CGfXC6NJvZoZPu9euRzJD9",
  "key25": "24KJ7C1zqds4b6GCmLgUypknNWPoYJygbWLPjYRz4Fxu5CfX89UufMzZqukswjPEAC7jnRif22QFt5NBGXs8G9jW",
  "key26": "3VVv34qHyEKJsyAUq2mJkfhhyT6LaCoHk6zoYqka6nHz6xMSev972Uka2VxkjEiY2mVUq3BMeBUR5XwRWwKsvtsp",
  "key27": "5Boo8ZM2tZnF7tT5eS7M3rNyvBho6tB6W5yqbVvRxjyAC4MrQK6GEqoaGpGZnvFRNVpXMUQUkDjBnQdCGesXhhcW",
  "key28": "4VtB4144mREVDUzQGRRoBUHRyxP3HXsfyTMBVxWfHyvjNx1f1hdDzfgP8Euf1s5tomRU88JArKmfkH7w8JBb3Bbs",
  "key29": "3zi8ytH6BT4UHS5TfAeuyKBdRUVrT8ABi4QK9kSxT12vhY1BxqdTeezc4FptrM1A3nZzi1aquePV3cz3iw82ojon",
  "key30": "ii5N5R44ZmGxXh5rdaqdWdu3CvyxoAKFPevrY9En9VNXywiaCtVdGwm95qNqrjVWL5rzRGdnM4aJXwT9FTKrpup"
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
