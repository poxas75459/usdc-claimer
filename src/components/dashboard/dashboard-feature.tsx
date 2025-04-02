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
    "63nYHMto5UeuRhNVLbBUpuap7AJKEeHr3KwNJAA5MFa9srpeWyy6bbKTVBTE5cRFZZ2kDhjt3VgXyEZhLexuLz7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jAZ9A39TQxXkAEv6C7aoEt6ketVBMUv8SP4gRtDcmjjcYDbzvucCSyrKZKD1DQQ2LHWEHpETuu4TGMbqDJkfmdC",
  "key1": "2V9zkW7XVqZpcMdXd14iks5J8hnkYx7jSyPDsyB6JTVp7cKTAEHbyfZKqJRESQn7V4Z5sWBQXxTsbseeTrmLT64U",
  "key2": "4XkgEj4ZG5dRQuUwHufFJFan8M1vGVV3JoTxqten29LU321YkBcBSXbrDnyQVRbzdCa9y91KGmBhXUjmfeeLhiwS",
  "key3": "3xAhQSYe3hh1adF99t9jx1mz7jag5kNTe2eBQNfDwUQYiTuqgjo1iwzGaDF1Nr4asxteCkR8jDL4ebPXua5pDvnm",
  "key4": "64YDxGbxJdx8WpwmHzbQuj7f5wUNTcZU7BdYkpwug9Mbqmyq2ohs1M6f8YZu6mVgsQYL3HqVmTcAE84n2UaTepzL",
  "key5": "5foiJMNkFdkr24zspCXyAGeYiMGVunCg7XYXRW5sF7tmB2yPc3mu8LASPZfT9HasNiwB5eb5LmQebvzp3WWqohfF",
  "key6": "54fho4znYxZAzxRVeaExxZu2HRkDN4itKU9tLzHNHj7JceeoNxbUqMfgRfXbE4wXqrpSq415Hx1QsjvBvnybQXFB",
  "key7": "5WttBs5EYLBKZgi7C59PeW4JhPDZjN9mxnMQVfBhmWMrA9A3AUJjphhUXwMo44ufz8MEMwTKNbMEkgJgUbNcyxfi",
  "key8": "5Em1n2C5GeTZgJrLV2tfd5ycBixZUsPhXoWVCPrB8LrYzivwoiKQgJp15LXcsfMoaMDiDm7SUqgcUEdYS2BtvHKV",
  "key9": "2ECwM6iiuT2aaDpVj22NFrugDUK6RZrtsbQZ2oayNBJm8CiQvvruvdDgB7c1iszr1E267vJjNQZhpXtXaJ8c2Zw4",
  "key10": "2c3JegtHQymo66LY9jjRf75Shy1qB96WZ3xBH4z8bTipe71LrHsp5qtyFUd51aJgL4GJk37eKk6uxe8P6Ehw9tLW",
  "key11": "FtM16nRQL7pLAZoYiB6PnmY1Wm3z3FuHXGaSbRxqX9bsP5CdeKq7pv9qVQ73fL8iJwKWySD82Lg8Gjhi5cHy4pk",
  "key12": "5UrkTFtsji85WLjZRXsyqphDAzAsE3Fsp15CacaS16uarLRtVnkqNQ9nh7xH3TZr6nkjv1queKotcE3FYaUXFhaS",
  "key13": "33hHSptQPF7dsscRruuLVvcXv7SDXrfV9m2oW4mEHRYBvqdYV88WvvGiQXVcV54S6KP64gVhG2rrvp9EH7Tik8Uo",
  "key14": "4wM1Npv4Xqz4nAZZvXaKAYJJiSoQwZ49UbXWA9GHgoh4C9EobFitkoh2B9oqH3BrSQw9WgQ86tX1hMAs1Wb6P5vU",
  "key15": "2bXDcm3eqC4tKZ9WsGajGdzPMaAVwzJkJJ9Bg5Vkuhkrb686HWZ694DJaxAyJhotSfsVY1U35V36ENBEjRhzUqKW",
  "key16": "63oBt9MHxX5LnCTKkHH4gq5bjqFLT7Jb9SvFQ7KnmfNJfjYBBXw1eb46LLUAGXEahbKy1f8poc2CfNuHDiotBmzH",
  "key17": "3AkmEqTcN9vsV3GQ5rZpaa43SsVvNsMMkZtvdHkrTTvDJERCVh9xYdnZ2iLBxW3uKVDHD3ckfBnNAiJuX2t7hDjE",
  "key18": "4qHRLhHifeWdbBF2LCs4S9P82AhXhmuYJERfbP3cU2DH2qHnAF8XtMZeGk7KhoXxw9iopRjnywEu9uRynjKXPkJW",
  "key19": "4Ts4hHqxmqsNAkDfT16hVtyyxh1ySXGRwR85j612aPbKQcc3YkjqauUtJtWRTocoXgHScKypMXXETfDc1HNPVNhY",
  "key20": "42JKLAYCheXc7gZhBHS2VegL4VxrMvA8A4jprBEj7YH3WzNkSEmLZmj2VaNeDQLQPe74RSeWjnUpBLLHghMkbQ1N",
  "key21": "4EawHsA6zLSRWckb8rPfQhpvMAm2ECDie6EqgwxHyTct9evXsNPg1GqWmAmSnWKu7KRLZBaUnPNwhbWFDmzKuD6U",
  "key22": "2ZxucqaFS2KPMQitGa5J2Wv67RLUjrjJJw2TEhHhD9rvtdJXyVjJKHtJvJmrWnzyaAJkvt2YB4ijsANUCj9wEvuL",
  "key23": "kE67FfZYnaNdT9njNhji35ZuD4UD3CJipmBHgq1q9U2wN2eAMPyEbcSow9xhGhQU7k1bj2Qk1ZrQa6w6tKYPXTk",
  "key24": "3hDTXQQiLfU58mJU6fSe5mUVMpsApca5oRXocutNhL9z9nDFD36FRyEiCMDKNyKmebxTkFKxp3YHbHWjaJ9rX2uY",
  "key25": "xBZ7jWhRSNpJ7x4uxhtCkjYzxAdLKmKkrF62rqPjsixtFjiwRxtgoo3gDKvsZhQP73e3BLk1TXCnB9gcbJmnrxL",
  "key26": "2T98U3vgnCTRt8nncMEKeqk3D17SdW92Lf6RLSnc6Q9jr69CexAjLYn4wi5EkbPyLkwcV4vTLPJkXbjx2AGHcxeU",
  "key27": "2g6pGKyftNDJe974dTe9AVk8GrZ3fK6yaLM65xJMVixULUyM2E8DvKUBnCTXE5qCjCtBhSnGYM1oPdLySKwMid3H",
  "key28": "3hyDyyYPccUTeb6ny2oKaFyYnisZynEYSjnCVTysoffN6xdWoDXqJQSC9Q6i6pdLGjx3eDBsC7GLANvp4FvhoDDP",
  "key29": "3bxE2g5NkYFgAdidmRhwL4R1ReBqjMEeWnfpGkwxKpTQtiWKfFmJDinRPpQNuRGaxHxqyZwJReWbCbntiFG9Jw3M"
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
