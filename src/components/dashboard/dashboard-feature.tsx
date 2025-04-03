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
    "3aF3nb2uBRV8fU3x5xdEKFwWXd9qacvyE2koLa1x9dUnuDbm3dXGEMFRPQxUz4RXnYEcyn1boECmCXTjQwNc5fve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K7cB3osbDBxLEtLB56ifhFHE5Zcbs5oQ3gMGSYR3GGXyHhNQL6iJEQ2N4Co9gxijZ2P9yNJk8NyRCXjvGcdAmzu",
  "key1": "4fbjVjF5EzvJ2CVZLS7qS8DoL7LfcGur9Rpc39Q2PRGqrF1C2yVfTKSw85AFJuJo1JN5pu42v4mVCgo6mrp7yfVD",
  "key2": "4sT3pCLZUmcFHQ9g4J4GszmxGTF3J5C1De9nXnbTyXfuuW9etqtP3Te4ZV4NvaXN93KijjKourxjme7jhsUZJRpK",
  "key3": "2FazC2rFUhkcn4hs7vGWmeJGB5o4qfRmm6HCqfWxYLMWHCQZ4XLHsaPGToqA2ZbEdS5LmTWVvDTNj3vU7r1krqRN",
  "key4": "e1bjVJt1JJbs4k5JsSqmUaYLotn8kMH97wMUQmi2NEfLpSVmSYqfXD6B2xpjn6RzK8bi4yUjTwH7GNjdu8zjjQf",
  "key5": "2Qrp4JVV5BFBG4cHsoL3sUWWnzzvkpwzynCVr4o932hCgd1SBRo9W7or5ZgFVYvk7VGwFNaPvKZvc95eRpZWSDNW",
  "key6": "Us1nYuCRt3HzdVWdxTbk1SrUCP7ebg8GPeMt6ZmuHTxhYSVwxtfcsqRD2CT9y6TzUPdeufBRjWbtfy63E9vuKpv",
  "key7": "2qScq66zb267d6S47CM7JH2wEnMNme6bAXXAUWxRpi5U1Sd2cYduNewZmeRbKDMh4toH67MuPXZAKroaPUoS3ztV",
  "key8": "2WyphBJbH7xYisEeCRBHRS1bRXLyLtW8YEmd4UhWUjskSdSaKQhL7vQDbAtuutNB3qHAZsBU8Z2tK4otKm9pQM29",
  "key9": "5u19ev9LbG58yxidQgcq2hj9aRTd6swW2xSQ8EsPXCZYs7jZugrr3xHQ5fXQA2a8CxihWeWd482yt4BRhxzkpwbm",
  "key10": "4QyfkFFJZPfC9J1SG4WdtBhGDu4qCcz1UxHTiAXNoi7Ew2BN2RzHeRrGi2FBt8BJSq6ViSguQoqfw4ysb9xwX3RF",
  "key11": "gLiqyf4MVvaSkovYMRJPYqJuFh4qpWxsHYuMg2Xfxt3hWyVkeoHYEobaHStmDULHyLEKmykVUZq6qHejjkv6GFf",
  "key12": "5sjpgfVi96xAVS1JShoXUA1AgLLyN8tBqWYVjs4GAjgxu3gwy5ziuCcq6hRSm963ijY55zwX9rKpvuhhNqUS2hRv",
  "key13": "AiZeP3pGu6XVdqj1n6xqxoJuh7CjEye9FzSRXdsM2xQendDVg7DeaKMYb6XQK2ZL9iFMKuaZ9qqXJpJyoNn9vtA",
  "key14": "3A7AKsczhpTLjVEgAHBn6MKqdfDRYFfqCjmv7ZNfCaMTtxNXHa7ktigSETmfaaofivd4h9Xvcc9VMD7wJLj3AvEj",
  "key15": "2ZzzkEJQoNQyNJkkWiTuwwQgnWFn5v4qxmNSFRFGWmYcKSzG5fYaCGqBarQdzwnJoPjHMtZ6xrzKqHxz9yLyZKgF",
  "key16": "5sD9fQxCTcNSTDiQeqFxmmTKtr7a75DBXsQGhLHhpxcG8JbLT2q8KKswKKPFWWMCW7nbzFvjfh1s7LmnoYRj9Rrc",
  "key17": "qdLDEWfAR9fn2HTHyfNmpr9WKrWSXU1LqEx7LHTFQ2o74M5tyeaQRUAnMA2EN9WNrDUoChBeqKxTzDMDhwX3h3H",
  "key18": "671Y6P37L4h8REjwXu71BaiejJ6ZsVREcUvNsde15rMrZouJPxG8VyBPnWdPFbFPj14wYuCVUwXmoBGwrCUpd3Hr",
  "key19": "4eAqLgTcy1dV9VgzrbWjAbpvZiVHpnz9yMMD6bpLzWsjA3oHByUzEHYVEBKQorFEHdsBwzAb75ViyQUttT3oTxzW",
  "key20": "r4KURgq5UY3p7rGEr5uSSc8q6t7gehzwKHoPR49H8DTWZg7nSvg2WXSfNrpm6tNfdBaLmWBoCz2ChZbguQceJuW",
  "key21": "3okv1PmvNEyhN4eEj4UwUQ6sSAXe85uihPrhpayZCicr8rUtvKmZqknfGp1h1PTgMMhvjsGaszswHknZRJbut8nJ",
  "key22": "5eR9GDgPFx81fN9LZ67oswGiBHDJRdkR4JV5zJvPZ5Y1V8SZSDJu5ww1hBjP1cw6n7HuTNvPbhNQvBe2bCqBVsjj",
  "key23": "5x5zZjbWaMEyeXJCDvyuKh2BRJ11eE7pYvcGDsNcWTN1EiMG8Z5vA51uT4pFebRWoKaKAPXkEKNPxUnSnorGVoDd",
  "key24": "Ex4P8QH6qpLCm2n4MySGJ3xtKbWAzjXYNTza236GX8Gv1Ycpsh7bg96xvy94BmXPAFwpXgHj1ek1R11dpWXLV9J"
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
