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
    "4KERbfU5iJXrq1EznTs77NYm1qYD38SohyzyGzakBr47rRpQcpSATS4EJ8U9eUauSDXeMykPv9ZrwirmonyMGP3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LcmKr9fp93kRUDn2P9kGLQvsmxPxevPTqUKpSjK8yeZwhewfwKbSghmacPRoaj9vnuBeziR5uKVVmeNx2jK73n9",
  "key1": "EirzcmnugcZp4r3bDYtni92fpnnByx9aGnpuPNgy9CLy7trDEkYkfkgX2K6Jn6ry3pYp5aRCzQJA6NDHibWBLGA",
  "key2": "4FX6rDDc2D8ze166Zd5h8J6fKHD8SufVYqbsG5DaaeRFCCsRaanzLHZdeR2aZ3FdYj1uTex2KvzUn9KsHrgA1b79",
  "key3": "TQRr4c7T44GRZTiQpmo494JjRHyTh8NmZDjnnNrK8567UyFDqhjcefx3cbmbpLRMjexTaizcvyckNNKKKgDRfYW",
  "key4": "27wM3yAg2PNnM4ixnkrX1ZRm72toHEniF5Xxt8RHS4triXS6s94YZ8U9V1HRmAbvJcehUoBKhHE4fxBcFBWwdDAn",
  "key5": "VXgJtGsf7rQEyPLWfwwaujQJstNBrW9VNuEVQXyzGtV3jLVQBV16eTro6BJrHJ47g7pG6btTNFjmVdhGHTgn76s",
  "key6": "3T5g89JtquceUhcUJpGjAA7MnpN2A58YUbGZJMXezmGk1UgSsnaFRWqpm1pWb749G3AoNRB9Qp6EhQzortrRZuEa",
  "key7": "5SKE7Lp7xfJJzS3bjUnPgewqqfBcCrCtGJmS9tLQW8wQtYzUtogBBNZf3fvAu4pZdyeB6ajtNUCbsfFAHgrHkamy",
  "key8": "2WyQmpCPiCzwLMRCusDcD1vuf8T45HemVYU4Cfk7zxFCD34Y2q6Mwb1zvZ1ocVvz4rot2ueuQrtUuBHksmtRWagv",
  "key9": "2mxjASoYmzrxKPSm6gQJBAWsFQbdy75pXa9JykQM7UFGXQ5eEr3DD7ijFXVWDtczASeF45nB6XuNGwdKzngFFHJ1",
  "key10": "2poFCmtgiR47SjCCbd9BhhjUm8LEYT1ERuGaLLKcNy3BZjuDu673Yw21SDiUUQtKGEwfgCNRDXpfRN43bYKX539",
  "key11": "5EAPVxdjUpfAR9ZzApWt6kTTrNvFEqxAGgwDpNGeaRjZvU82Zq3uPq6cS3MzXjGKLXqa93YQaMhc9ssMWtnDdZ7z",
  "key12": "4tkj1vDupxLxzaZv3y8DyXAWurYbvrRqVGuGCFVuiQvCFwPjMSziP57CYk9aNsBF5DcRQpmtYoNg5Jupn6KNho3T",
  "key13": "5zWfPxMZWEoFuDWtZB9QbkcdrECGuHnnP85MaRnsa7eb2P4E1e8wL18WYwdJxMciSAwP6vefNvefHCMcqtvrfU78",
  "key14": "47F6qwKxnqSi3Ps2EfztwkQYvU5nbsdssb5QuhMEb55X52THytWZMB8qUF3h4WYVmsmXQMayjD4azRb36Y7EBjmK",
  "key15": "4HHh71GfsefmQ938puNZtUZa8WYPakWBEWR4p3oHnKMgVsTSyZuG8yeaAD3THJidRkjyjQautC3ebKfVBxY2iLma",
  "key16": "4dLNiC7zHWb6wQKEnCPNxJErZhLXZ6LRDUpo9c7L5uNugMhbq25WzwuXANA44oDqjJzX3zA829wYhJEMR7gBaQSL",
  "key17": "3vpDYmBuMMASmRmt1N535A7DATUb1y6UrAvKcbGPDspeFPaQ5D5ZNzxB36a9gu5NMUMrGfVgEHQnsXWJiMj6WBeh",
  "key18": "2SaZdC4c63uddY95A4VAmeTyN6gCYFRi89pQrVHWtCK4gmAfAJEkqERcjWLfyLRVpdgfY44tkDLnQEBtgnYbDEma",
  "key19": "3v7oGfYUb7uTpVjkvfEMzGPmFEUMgVhzUk9ST1y1jQBPc1JKiQedCBzASF3G63qNtNxiRWLTMzJZZn7UKXLb1zYf",
  "key20": "5HYnSFwQT4DSGScEcEvbqJzX8Fa6qeiSaS3YtZV97Nx9xbukVGJSLWwfqVRa6VES7sD4Y4Tcjk4xbgbSMnGnSm66",
  "key21": "3MTQFghtz99Qsno4vFs9LS73GUnmmFb13TUp4NT7rLwusXGGJNsWwrbnDjKs1UfmcBwgrkQHxMHXesoJzwCuDZRU",
  "key22": "4Gj8DBsfbAk7dFsFYrVJmQib9WymdoCroxvrcznpf7RyxG3xXjfB8mkUCtmesDNucXen31cxrjPEc7iuAbzFg3KT",
  "key23": "MNr36ck7dwJVSurk7jne5zLeGEnvYXitcMHmTxbcqDDnVFXmysQ24Vkdn989GNurshcGXYhsTTxn6UuAZxspMpB",
  "key24": "2ig5LLmaQ7BDdtnx4Wg5VFQrbhZ6Dm8SfYQG6zZGnMMFLnAD5gvWBUFn5M12g6p1NGHCyQLHWWQYPiY4XzJsghAu",
  "key25": "q3AB8iLwBmNSzxrhVNhewsBtRHGoXfxYa1yKAr7oPNe3mGDsQfMLywHW2wn45a3HVSKQBc4HRWy5UFP3bAMCmj9"
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
