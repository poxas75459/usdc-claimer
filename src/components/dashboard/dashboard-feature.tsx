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
    "21uSr3qEiQATTT4hUAQ9ogCV1gMHhQ9X3CMtkZMzuPTsLTpBp5G4xa85rjuPYZc213DYeDuYjeiqZzaycLFh9VZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mDVZ8Fvg4AB42xXamanMhhUCtMULqWoQ1jtb4Yc7pgXcHpa9Qtgu5TRWVHyJubwCfizggMLMYtVbQDrqUhEC4Yt",
  "key1": "4DMYRKdwvRxzHfoW6odq9vneZE9pYhJk87CyGDyQhHBx3GWRnbRxEfrEpLmHkwKvk8UvaueiPzbmSMmb5ha8vmS4",
  "key2": "4wZCFBfi6cGUkMd9crMccWXd32xbv8cfspCsNng7ZKCi1M4xDQyybWo3GZXgvdSBuiUDCTsLfCrEykj1CgzDJFnY",
  "key3": "54SVDv7NgfkBfvSQfYTqTSmFUY1XKEkayN6Cg2pUwNi9D2qfK7hGNjb4PQ41NTLC42YHGd71ChwBak4ksRzKG91r",
  "key4": "542APHSvLD8CmJS2JRMbm1a5xpzBMURZgVZmUPxXWyJrT7BZEZ53YYKvCUyesR4FJcDKnwTdkiQ1NB9rbXsPcZHY",
  "key5": "2uj6pzWVWhWDGLXPhPgPUxSLHKmhWbU1PRevY9FZnVAbt6YPc36WWz4d7SgV9xCfMT47NXWEYPrUjji31sZqY9zN",
  "key6": "wB3uMCZmiEW8CFtVGiVFChA3pDtRH1PYFewmvvoBWEqEXfuWTJRHjM1GjqaAbV2PAFodcTBAmspPUQTStyoRwdd",
  "key7": "5txxedXtBDL58tRUDn9EbSKRYodCm5s3Q3rKuhVmNQ5JFBzPVuYCu689fhCuXoCBHJ75hTJueT5q4kLRJsCEqz4D",
  "key8": "4xFo1crDVGNUKFbFQ6SAv56ykWaUokAEGw2GnmpgZYTM7JXbLR6wtMeBi3MV7rL2SwFCrLvY6XhrnhkXQ5dFZvsJ",
  "key9": "5uEcQ3xr4jKMYQweJHXTaw9NPQx2mPYU2aM9YZSiUm7DagPmXC6mokHSdczvMXFCAPqF3MWQDMdK4km548LW97GN",
  "key10": "piNrjFnb3xo63F84WuBvdEMhMVdHx1kEQmqqw1TwTSz6BLyE9vL2GLM22dXsgQYxqrpdjn7uwRMifk77q6FFS9V",
  "key11": "ixJMNrsrokMNngpKCRV81VeUR49mQV8HbLK3CydDx7Mx8oEyoDzQMZRVnuJAgyeZPpDy1VhamjBj8gbuiNS8Vo9",
  "key12": "4Rhj7sE1qnQvhUiMwHBwZmZ5xPLaGSoPRUhKpzXxnPLq9p8a7pz1HkjGo5o6REymQo87zMnmv7xadbUuesouqkYA",
  "key13": "htghFUJ75jU3n72Pgfai7J5Sf4y8v4DL6eSW5ty5o6eTf7QHL6d4coQxFeTcBhPRbebw9VffTcqwZoSbPEKMyvB",
  "key14": "4sYixbVoQ8xyApLb13FPmyDbsCMDcTLD3QAFJkYPdXbRLcG9FwfF3QZ5kFLT1iL6fqBiWM9kvLk1kqGwVj3Dtb7K",
  "key15": "2Di4Cvx3XNqGAc56ez9dVGftgZ9WsPJqqd5FGgqiUKRVRJoEt7oR5MAfcHw9gGCzFEDviBLU4z8Zzn7pWxNvjYXB",
  "key16": "3ntPqVMvbeyTTFbErKAnK5B4tvX99umvNLmWpGLouvBAWtUTudM4F1hyj4L86jXX4zBJcmrxVEbg1jjiR1T2r6dM",
  "key17": "3M7XdmDG3FtWWuq86dtHub3RjAE4iuc9tzHW5An5yYN9h1LsBwFvktwBersj4JD5jtF8da8BDETLuSSzttVRXCd1",
  "key18": "58JkLiGyzhW69LyLE3GU6UwfGJS9zJkvjvLioqCMCLxDAE7HiKVyN5VYT2EpB5NCg62f1pPzyUQfTAnZ8SKeAy7t",
  "key19": "2NeNvd92XDRy11Ay5FtVXtv6Er2suT3bhB2nGfwYeHSeYpftKGehkbwYv73gXdWui1b96NEG8iFm1eAwYaerhyie",
  "key20": "4RGEWNUDVbubRUcWLmGmHx9uyaadHZ1VDLa4NJkzYHp6pWhhC6Jk2n4hHcehSS4LF7rEfwADbwUaL32MXUBqJEhw",
  "key21": "5BLtqtkcjRZFcPnTnTWALBTmjtf6Zwww4V4EYuUy1jAs7qPTWAFEFB47NR4yf1EGm8mm96HuJMUgfHqFTCLbd4P3",
  "key22": "2eaACqzQSHoYPmUkeCk6qri5X73T3jfejsPNjHM92WRUDQEXbEWQScui8VSiNAGNLLHaQ2CtjXgDriAeQ18HJzBE",
  "key23": "2ShMCPQXJwrc2pR6itCPaiw3VaEAMbKdUYY3RXJHfcvu3wq1gUNK37pULMcbZZaZ8tSFAJKiJy4x2gbqjrBL1Tc8",
  "key24": "5FLot8ED7jv6ENnKZkYocdSdx7U7efTvmLZ5KLAs3uWRPyD1EbNgx4fYzUxX6Fuia3ueHpx4DWLbDATz7cUb5U6M",
  "key25": "Li5QPvcJBdDba43hUDcNzGhX2k4ZXpWYNghz1RfStqQckUAuPjkeNjZkQaeFKGsfkt5MKSbbzFJChWXLv3gwY33",
  "key26": "2jLbcY5A4kSxkuCPzHk1CV9cNhaXbkmidCwibmuAKFRG9B7RUmT6eaXpJazxgavPUYFqBNJKAXktpddHgQDtC7Bq",
  "key27": "2hEJM62ZhmpWmU3kyvuvqH6LYY5TAV9xBP5EZeaaAqC8cLtB69LSZ3D9VHzDphJJEm88vYDeg8zdC9PQTivkX7jy"
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
