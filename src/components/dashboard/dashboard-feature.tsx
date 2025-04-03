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
    "2SC13Am8HXmezYhAMwXFhUX6THZRjvbw36DyvC7QpuzCL4vLBsVkbb7WCQHAT5uMfEZ7wxo3m7bFg3n2gggSacWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37f13wA3EB5SgSSYm6i2EDmhbsRUAWehtoUDJkJynPDgePWX1NerT6osizf5bqzSQ35TPJgusmovoztEcrQe8YzA",
  "key1": "3Ye9w8QCLayVSdoMpDWRnJ3XgmjjFNbhf1yJM18JrEr3sKZNTQBXbMdgD25ojbVDcNCUSe8UxrsNGz2kHtb5kn7x",
  "key2": "4TbqbHZvHmLbZ2pS1iXz9hojd72Mg9m75MA3iDcn5HL2r6gxjyXWvy2odM6xT4agctFMzr1XPHanP8JitdkbGceQ",
  "key3": "3Nn7nuPRyu85xAvqgbc7aT2Y5PVprp2moaYjceBnfduKcbxX59HeXeTX1eqFvCyimDHPSX5wxVMZrdDe1xcQtaHK",
  "key4": "4qHmMJhA4b9zVfZbyfX4mBwq1EY7f3LSiLeWVMH41oYBAv84fVgnszrXxCDfYPchSLAyzoMY9FUZzBaQxTnQRwiE",
  "key5": "1Baz7c3Lp4pCcQANeX4mK8SGsGzwJq6WxRebNEEndnUfs2TqU6XuWYZHXQvaQkPLw5iAjqWG5WVG4VHjYMH8RHe",
  "key6": "FTSoZvqHTe4xCeaPaBB9AjrMG2ttwnpkuvAeRWZfwUGMV2xzsSPvnUexYe4AXWwDC3DNPYt8G8im9MxXGFMEXGW",
  "key7": "4p99LQq76AE2UvKKARu2i6Cm8B7jUeFjZUMpkEBKD7qTTRa9Dq6a4W9DrH5Sp5GjaxHZE6P8PTqcs3XKBfQNgcQc",
  "key8": "4w86NoetfGz2hdSSsek9xpyVXZc593jv1Z14ejNdVUkLG3f8ezirFjKr3ZiU6MjECcfJfc93g8TdyVPvfoUu1WDu",
  "key9": "4MShJXWutWsVdWqd4xwBFAc2ZXCdu3GZE3eH734QDUSrt6stT4q5ioxXr4JQxxGrEGA5TFDsrN8SPjPaWhc5SsYK",
  "key10": "3nbWVXJJEmz5y2CCxnQbriicjJDNksWNXj8zerrM8TZ1eNLAHRmivAJxeYEHqHR5F7KLXJ1SUzoe1jWvQoA9C6Lx",
  "key11": "3LdNJY8R6yZmr1CtvvCrLh8CWpSBpJtTXkQkPfw8jJKtVCXUzyCrQYaXoPZFYnbdp6NhZV76LTzq4r7WzhWybbix",
  "key12": "4yNxjs9sLpQ3r21zgkHZELTeDQQUHngrcxhKSh8aV5GWaHKTALAQ5cjpKAxzNEY31jpN78RG1j9jpsHKLkNgjAgS",
  "key13": "dPsox4USVvRr2nioRWv2h7RoftY9cJd3XufHuL8hyxThsnRbGzzL4AGnctqTDYxviJCMx87pHb3f4FLdRGPw9id",
  "key14": "5yeny2QZBSjYnDhfc42f9RbknTDYNoJaNte3dfa5Ni2bGFZQiZDHADBZ2SwJCAEbWFmLZcVN3Ltzmexs7bT86TEr",
  "key15": "4dzsRM14FRpJb4DdCxzfWGAHpdJ3uUutEkW1Qbs7wckRAYW4rN5zjykeDaXz19rQrqra6HuBd1rUTTfrHHXTcaJ3",
  "key16": "3x3AyAKtEJwwmkWwzppWHs1zr8k5j4taNY9gk2yvLMPZbpS23UuR61V41J9BVTPd3jPzw9qAdEz9SYyjAZ2kiTvx",
  "key17": "3ACXnTK5M1HGCjv9LSs9XK8BxiFgDMJjuRxFhVUdntaCGrVZvXZnyheaHMXaVcGgJebjbzZQh8E6AaWuQTc4eS9A",
  "key18": "4vzJQyBPyxhEoHAtU6Q6MLjCn7oBho9LTMXrznYo1jbbDsba17wgXq5iLmmhT1nMg19ihzv6GNPCKhxrwqgW1nkk",
  "key19": "yKoGedpZFkMsJrzFMv6omPC5Eif6tdACMY5i3aAewAMNgYtYgbUFZwiaHrxbeS6RPxpCqaTJwtwKhLX4DcMkGgx",
  "key20": "5cueVsTrVGAA2ommCD4KpDjVtikpKNt8cvPg6NUDedSQWjBwYeam3RaC6zGaZLQ8RwDZ67RTnZ3R1e6DkvF6nhYg",
  "key21": "31uMajiQfEaHyrjuCDsZg3ccWfZkQVkgZZRChmLd2xBGYErXhQsQq1wFL1DfzCvuGLZy6KtTreEH3a7bo931f3F1",
  "key22": "5QCrLNc1DULqQYrLpiZVfKk5iCkRya3zkbmaAwuVzpeRK5yK6eMdgRcyYjaHcm3E2DZEpNrnLXQNM8SxsGpQGr1A",
  "key23": "3wRBBNs5F5yS8BQTUrbuSp2KWbcNUBxjGpip72SVswf5spmkcxTY18aemfWjogAbeiuLCadMS9PyVQgC9FxQM2C5",
  "key24": "Jk5dSrBE8dL4pqwiKRMZ5QJvT9cfEUwdDr4oBqcG1P3DTz7L1Q8cxQBgcbevY5FogWAMowD5oPxGeSPuTMJ3JKn",
  "key25": "2vA4gtiw9Cn4YfWW8WsnYjspK6mH88DcgezSEZx8RSHrKjBTmmnakqWgyWxNFwRfomWgTamrkTmmWgnEL3VFoeuM"
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
