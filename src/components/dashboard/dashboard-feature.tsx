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
    "54C6BMMQHXuzDd6xfYBNQEnyJDW3qY8bwGNP2LWJrs82VmwkGyaAwo9CcbJKCaTqbBKY1ARqaGRc5FxniHtGqV8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SVWbsatnY3sZC1TLaG28L5s9psTK6i221RRgRzvhC2hAq2ekzJ3r2tVVGDZyDqqyT4pZrFrFciGydgXZse96nfg",
  "key1": "3oEe4VNWr85Pndsdexrt6An2mEJkRAEnVCisMfWEfp9etFChvY8sAfpPwSLpRoK2gwSAByJwG4EpQ3MdVECUvGF3",
  "key2": "EZugyqmQzVHARtDQCrb1fHGj9Lbwt5DBX2xqTYqmpqFkvxaB6zQguoDKCojsQ6Pc4GjYcXELQUV3M93uMKXiTPa",
  "key3": "4dYWBeS7CuBK3xSRJYU5NYtLt9EwpXySEVwhhew4XtD66w5xsKKLag4gT4qH2KCnCfRSuvGvY8prFFB7RAgKhNHh",
  "key4": "5qagcuFiNey3K79SG7QfDRHtuAEyLifx6CFwzsNJC9wFiLRsZMEPTaeHdPwbV6fQnAxC58bcxKWv2c3nk9oX5xi1",
  "key5": "2fM59KNwyHsTVjV4oH8cn9v54gzzJvUDQb7849qou8wRt2X1oPS7rqsrcvpTB6hmF7i6XmdYS91Pi3f8mJPTZCdo",
  "key6": "2wRRUbsH2UqDX94NYdmV1wVDN6HwdSNwAJAJUPUHhLffNMqvyodfnUYDzkG4X3mkqeGbEyxw8rfmmtdVf4gj2txa",
  "key7": "2BzmVxdoRHVA54Dyf6a8WrdZZWRWjfQuKUKRhTuLAWkXsaQR4MvNJ7r9VJSarQAqf1n4ZazPMfQD8mvE3BFtwsRA",
  "key8": "5YcFJx4AYQVJWairJab4mrCYvMsvs9QASUnNqXcXDuHnZv81ik7AUYYBrJPvq5kAXk1KUB8tH31ep5btsz6rqbqF",
  "key9": "3GqUCB45RZVT9mvuXsnzC2KGYBL26bspcdW66bLiFZSskASx2CVAoeM8mVGU34wba9NAuAgu1yzo3WTGxZMRo9ee",
  "key10": "2RuyRbosE1UEodipGLnSWQKQqaG3nhAzri2ZeoY1ZyAM4ATbDRQCGdYTkNgnmuwyU8ANSjFm7wcRyJJkdpNPvKSD",
  "key11": "cdrtHgH1VoU6ZTs6GjzKjMVBQABdQrVf4xuX68pfxYYbHjDgm3CQYnZfi682ojjUX3cp7e7MAMeqCwTafrVhxEV",
  "key12": "2mSTHHh3saaBwprLywgo27tWckSLGGiGHNjeaSDadSLGUSL4AHbKZJ9UwE6a7DVbo52VoY4JC1AUUnN9zc9ud6RC",
  "key13": "2k8W34mhQ9SuUNqvDbT8ZQd7tBBSbdgu7PMHZQAknyvXjvoJKLzZwD6mVmuUFFn1HwBzKLnJdaL496ALPLdvGTnM",
  "key14": "65sMbqmRxfjC35YwWM6t7nyVaysWmGD35f8Qpyr2nMrYQ49rg6o4eB1tYAmyfBMkaMXn6G3mCcPFYPjp6ssZempd",
  "key15": "4QEr4CuJkZQswinxo7zDVN6QFLhiHtBakMotm51jn7fvZZ4TAkGSZWBY2nWhwom7vppi8rFmHDWDk1D3kAMdEDPA",
  "key16": "5ZZdesah7pB1VAUrgALqNwD4ifniFd1bfkrRU9ubWn56zKDMF2BFuCtxdUS42mSu3xh3HzVCJjP5o5zjv5QPxRwr",
  "key17": "39tyMbv5p2eUai2twXogTmEM8fu7LP6c5GY6F3Nr6Bo9awntGz37LDs4fS2YZVraSLMzXbhGTCfqmPLucB9Kkjk4",
  "key18": "2cFdwDd448xrXDaC2N2W2CeH6N7tPF5dVctvpGjzkKyxk6o3eq7Ss9BoxHHM9kBrncVWzWXRVKvCDBzeMEbmUU3C",
  "key19": "2zHp77LNBTqGc4jwuBqJiRMjfHdMLY228KmmG5BDHBJ6NLJH7tNhue1vdGMHvrUsnn9PefSBWxxs2c5cmsGQbKTQ",
  "key20": "KCWbQEt2LsaGi4M9mtNPqZsBLYGC6xJQT2L43z2fWWPcq1p1LFU4si5HBHy7maUdusuCpoYYzFFcte9Rjvxi7sn",
  "key21": "54hAtxeQVaqZSHgsm2atvD9aJCERbGiCWYSTps15tPJig6mA9LwZ2kLJYUfye9397Jc2X3MWZSQWvDYeGvn3fSXZ",
  "key22": "xEX2avKwoCXJAFfnLV4vbtmsrubxMJNP2qcVqVdYGTL4LtaJCw352BvpPnrnzRqkFWTGSnBpbTdM8xQuPmDRS7r",
  "key23": "33tJE57ibWi4rQmNjhh8kbpiwEACuoHvZRr2xuS7DvZy7hs49uEBqGgH89AMu2RUz5R3oEUam7bjtM9uwZ6bzBVP",
  "key24": "2Xm77kAFk3sYKxiDur5qapYuhBxdifRh7vrAfiTCDGYqNhysQJipVy1c9hktRFsw7MbKXkG7XYQq1mEJptaEA9WB",
  "key25": "4TeZhqeQQRF2Yx8zuJYpZwbaeFpdspULm5frPvUsZjmXD836UVHEJm6zZSMDpaMkajkb2e3RhmNg6zT7BkDQ2FeY",
  "key26": "mDMxFPP3cMpNVvnwfS31HN7x98B6jtFFXyFXFT4jQien7BGrJfnrodaYMUVUAkGsQcvXwLJjemBVv1P2c8D3WLQ"
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
