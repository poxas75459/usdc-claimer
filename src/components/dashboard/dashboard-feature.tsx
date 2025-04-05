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
    "255tiFZcXrBwKXobdGMwXVojJntkC3tG4UC7AhbATPmJnQtfZTTyjkhTwvbdxiwzrhxViQAQm6DA3a6KGHBHXtY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tEE3Z2YcBQUt2jq3LzsSfXjF49CzWZ3Ys9dpqajFguTSVvLFdg1YDUkP8kbpYQquzTotXfZH9sxna4MbRCSsUDm",
  "key1": "3wZuuD6Q6SsxQPfbJirUjnFMGtg28z8irxb5vkTo2TLrCWru3MD8mFoaYXsJjNyGKPX9PknGPM67vWzGfY9tVbU3",
  "key2": "geYLevt7R5BB7rDgE1UrP6wTMwFWsKSWB6oUJdUEF8RvTtRRQpseESodz58wkFEaLDMxqHW2DiTxMK5r97c6eMG",
  "key3": "2HmHke8dGSTeeoMdSegJtXDciLhM8JnNm3cBdojvN1bBcRxWCeqFicRnb7PPCs2nhe32pUPigBc7cY8NdkPGTgQz",
  "key4": "4npmCQiiC2vusNewDr3FayeoJJbcdwFrauLJdWuJ1wtggjU6dWMnrrEjgugUgNjLvTc1pbbTm5hVp5ftQ4XCRs5s",
  "key5": "5hTYS6Hcimnxj5fh4F3ZbiyNYyB6EL5LaqrydF9EvyGAxPLHFGGo8RkaLZPxMvWDwu7uPkVmXd32TpaiEBmvM2ZS",
  "key6": "4tcGkDGzyXeqC4pFLxDbpnHmQtoDqSJmZYKcw26ouVUtxN8MSJYb3c2VEZeAh8nM1T2aFQpHcyRfWkKECrG1doki",
  "key7": "2DtVShfxPGA6gxe94KH4iYgW3ucjfGp393mwR1gyxXJUJmjzYLSAxwBFsTHN46CKR3iZh78zbwwtQcibz5tdUdHG",
  "key8": "5u34yvfi4r1Q99F3T5i6gYvEgLQi4nEPZXBshT6Zh7N1v49oXb9LQwhyticNVJvVz3nBrwp8pWaXY2zBvjBdhri3",
  "key9": "2vo5PyfQMptAUux5QE9FVoXpEYqj2xrxzSVCJCtBFWbWY5k8mSmAuMMgKambECfsPoHYS7YjGx74Exe3EWkbqQzR",
  "key10": "41mZdF732xHJzjycuYt1t3VT5VSWfoZUETAQda6SbxXtzoq4BtT1yLpA1fyLZ8cL4svv9Br5CGrNNXxVwsCZGD4C",
  "key11": "5rdcCUcNfrQcX8cD272JngRo3q3d4798mMx7mpzA3mKW53Zhg12f2UcBiMy8xyzp3bdpdtW5VVM5VxfeGRw4urQP",
  "key12": "5z5V9WJZKQQ27qpNYDx9WdY9GBbRLZmyKXFmSJWgtDee1ka1dXBed8xV5cFXiEp4CwKHceVoo8ktT6AJT1kzqEt3",
  "key13": "4kDX9Wmq3CoFioBGjuQtuoCWCzjX3kkgKJ7qwwdCW7G8KLc9xVj8bCjhmMcvSKwjvZXXSi4QKWCKMLvVn7RA4E2B",
  "key14": "2fQ9j57Cw6MC7qgRwoR1WuLFtpr2Lmto4AqkfnbLz4N9V2Sk7sCZtrkm1dysRpJgHt56j9VKEyEN3rvuHhPP3Cyy",
  "key15": "kbkrw5BZajB2kydNhNGkJXGQspPa2aKGaQZoMfE9wa8K7r8DvYbFxLdt3nT3vswJYu4LNhVDyXZQZZjc55cufWg",
  "key16": "64DF9rPmUBgrFkmZzVHbF74eVzsa5i8NT3amdWbMxJimwao8HmNnWfyDvd9cyqBCvY7UoiFNRb4Hhhp1xzZu7Gxv",
  "key17": "3KmKWtDrdBAtmaGrKnXsZRhoci8Ekg8fARU26961n5Eaeb6cAzHYZsTpC3msZfsmaDZu1CRneBySVUGAmK96o2wG",
  "key18": "mNVWyi6ExzYEAym57cv42j9d49QZ3NwbEZuyNNiV79haysUCak1k5xKkUGZh5Bp5xsMPw85kzGbRQ14sHGbFrKW",
  "key19": "ma88wvk6Ya28Hw27yXdmGsqm4qbczATJa8fzya8rBY6N6ne66RGCKphGxFBmk8SnexgHpDgvMwC7HCFRGa6bUTb",
  "key20": "i4s7948n8UVNY2jQBwkXwPzNBNKyWFMHhToWG5AhLdnVimdPtxM2kyRHNpGSD97H2518tWkYe7Sf3CenMymTkvb",
  "key21": "4rhPPjxc5C8Mhx27asCofiV9EM9KxuZdyxE6P6B1PZQBEPjhCh6dUUgUW2i5EZTEUwfvAjghJ2HQcMixrewENqmq",
  "key22": "4wyW6gsQk2s6m46t5PShmt56KN6igGujBBsNZhu7Dn9jtmjv6CB9WziNUcgrfZH7VUL6gvn1pusknqwBqugsr14F",
  "key23": "655w2FBRAwqevvZx2PZkBdyM7Nwuvrxr7tBfbVHQTkFP7Z3HyEgYJYAJnfPbDAmi5HuJ3aimv2yYoDimzcNVBJfr",
  "key24": "3KUXfDrJQLq3XZ8p74gCQgW2K5tskg7mpxGbojeCRnAHDTD36y199BxLjhxdXPJwJh2o3Tt8L6bRsAZKfdk2sUEH"
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
