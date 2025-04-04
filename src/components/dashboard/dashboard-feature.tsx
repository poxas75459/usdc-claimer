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
    "4WjcePWLVvGZ82KDoaChqNMVjEaBwNf3Yx3Y4ich6JGW4VvczS2aXn6wiPekRUauxdyCQmsAWFWPG2fMNdZ4iBqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LizZJuqRU47pDE1yh5hdZ6z4b1XTLFe8RgEKNRmWZ6vMCRUGgh9o6FfYhT8VZ7cGZmXeikGoU2LFH65DSXNbBTg",
  "key1": "32mwTHuAmAXaQpDYAZ4DsZ9Fgr5T7gTy1PW1aQPhogVrE164a6gsLW6AwuvHahhd4CP3ibJGoG872BCwWb8X8Ker",
  "key2": "3izpYoCJUTBjcQ4EiwCfey7ux1qzxgmpg54c41vn179K7rWjo62nunh3qziTPFe4M8jTrUaKQWeZcqKET3C5rCks",
  "key3": "2eWDrY3VVPF9yjHsct5yqronAMzPyk34px9fmZC1pnJBgVUU54JNWbfSoXo8mgpS7nbxA4D68CvxQYfx4m1gCy9D",
  "key4": "4inR5PSkyWqFEiG9PyFZ716x6E32tgazoc6poZdCYZL9Xq3v9LKCgrG1f9HdmfguopXg46fT4VbKMJqGx4g5kggw",
  "key5": "5aaRoJgUMQ4rHZbuY3N4YUiCCjr22SJ2vx8woJ9agViUB4mgZAfnuqUbwd6bjTjHuE74XK1N1oLMmUecJXt1xYBg",
  "key6": "2gV2SLpJimxdBSLEmB8XqWV7NTrigt3PbQNk8NK1D67bBkD5zKsrsHiRBNHg9UYgdHPXWnzbXh2Xg8ixmDZKzbHR",
  "key7": "4fXCuxgtf83AjVfUsuDk2gGHaDyd9FkoNzH9ynzXhwkzroDkj2ox9svPSPmDSKUY8kuSRW4ca2kZZCw6pvyS4iuj",
  "key8": "2Gc5sgBBQD7hMRHawhhMU77YHpH13oUB8nGeae2ET1RW2FwfWYd4H9ZWjD6F1qoXiVFyKRuxuRf6iTUjZso3hHbo",
  "key9": "5N1cWLY5s4Pc4mckJKx32r5wBQ8ukEEvbyd8cWuLJQAhDXgGqSCf4sbQhYggS1ubHzTm5gfaY3XLW1FUri9ghuvp",
  "key10": "4XVsNeLJWw1eDS6QGic6r82TnQZYqc3r2asaAXkjMYg7RmUJc5NEazk5rT9mHKecdv1A9Zz4ca29dHrNnn1q7TEo",
  "key11": "2actLd48dyfo5FX1ZTZEEcpV6CmvGLGmo4Ki8DknxkUN6GLFzpoYf78kG4CDnWxNgBVXh3EiNSk3XDqdjWRceRqr",
  "key12": "2sMgijRuoD6QnCtv9D7uieU7KCjH4C4xV4H611Detur9Cd5e5a7XxsVH3syvHVg6gNvSVEg9CiyewkRgFZ3uecSz",
  "key13": "6YWADi1XoHw29mh6R4QH2W7NqUBmDfN9EZHz9SwsT8vnM57hgvQrpZaenbxiu7iuEeiTCYoFBd93YmxjZccwRfu",
  "key14": "Zogw1cBeMXK5i6HnUqLmiFuVVVg7k1KNE19n3mVY6XaTH6V14cHJikmzJ59ymhHaXdPXPL7iq3ncWVn4wydfatn",
  "key15": "3fBiMAiSjC2fbuwpNRXPt7i1NGpcEXQfKFNvyB83yQSXz57L41h6UNcq2fGMM91o6RYgLmV9vv1KUpLm5X9mEB87",
  "key16": "5s23XjxDtwuDGVtpZPa15TLqCkgn8xnwQ9qW49dV3UW2K9MijL19x4ReRRQA8eseJ5DtR6cZ3sQEEDL8ZcK63HQf",
  "key17": "3gBT5DiAWveKP6X7BCU6KETRasusDG8xrhy4yrCHW8UsHcAn77bi9b69s9QWja5RweYZ9dwD5RiVPXmiH6RKVdEN",
  "key18": "2doHGpLifghMLKwK5ATa5kkAtnzm6xb7hjn7CdsYriare97bLsedM9Mo3hgNiZUcycMUpG8FsDWJ7AxcSn9SuR1z",
  "key19": "3WwL8owWWQcQtn6CcptGd3pjkkzrfRetKP7rmhcV5nbobR7nuBYQLiY8UrHr6tQzRU2Rbz5pAHN7Abp5EGDMT27C",
  "key20": "4DbXqci6hiwjwrHSvs2CZorfXLNLD2Rco4FsLY2MvzR6LfRMbcwE2WSDE3Q4vsdtLo1tw9FUSF3nFRZ3kL91wEeb",
  "key21": "37mUFUdaL52dWysPGefux8cjR1zkQ8vYW7hUrKn25E8QM9YBoePYrWq5kLxN7ufGgFF99ihMN6U8aVcMAQPgwyRC",
  "key22": "26taF7A3bvbufgvitKgUSoERycbVRzrgPxvc7LwNLwWcwAWvXWFsoHvvQdwr67mSrog8KiUdKR1TqktPdbJX4SXn",
  "key23": "5Ro1GaWQRpskaZpbpHze6qBZTNDAj9arUNrLBsRuXzJTmVb8LCaJ4tnApmC8RmQVUw7WL198sA2WuSGecBRdBFuW",
  "key24": "5cA93WitNhWUUdMbBfK8sudEWyzpDfZ5FB2BjHyuQvb78pfnZWHUbJZmujkS2iqFcdU5yA44NoeviYX9t6MHgdKU"
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
