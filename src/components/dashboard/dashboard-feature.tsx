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
    "52EHztNmYgZBHTiwJZjzVx3CcUAqwhu7ybWGrRrKmwGFJrMvEpWLCQ5EtQaJCMmXDcE1jYwvEDSE89PT4RcXijJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JscammV4YHWGFtmTkwUHVpLB5KsedvhaAS3YDnzKvS61ofR6VqC3HAvb7kXheWKukE3rLxAB6puxZNs4RNeQsNC",
  "key1": "3dts84FBYocvXC73nfCU96c3LfB8RrHeuyLxEW5NfePiYkMyrsbAKdBoXqApMaYxH5rX7d3gvb7Y2T1U7BLbAPBh",
  "key2": "2eszDAK68LE7WFDzeTosQ8GXFrBJkTsKyPWB3XzGmc1kCutmrESjJ37fAXUxbakhVjGMPCMdxUy3c22ihh8bDYRt",
  "key3": "1wGkEyCbV8u51ezZmQqaN7rVSKGvJZ4cLRURi9EASc5u37FTDrKBx6EiWZ7HJCNxDww5fDwhaM4gkzSyXzEarbA",
  "key4": "wPKZ4jkVGt9VPERNuYY6srFBWv2ATojZRSYDVWvhu32jfCqt69ywCx9RSAyftaNKfYq7jNeWFqcVb9Tet4FY6Vp",
  "key5": "2FRAZSryDJYEe7w5tJM6bmBp9a1YkzmBWMnCZX6P3cyXRGe3iQjDzZb19eAnn9pmN8jn4eYN6H6qYsfudjc4x1BC",
  "key6": "5gCkfPsAjir8ZMPmUNv245i2NPC31ahpFkHwFpffhE4joyiry7ox8N7LUbFHk5DkgXuH4YLUwS5XvFQngoXQZUbG",
  "key7": "bgx423ZZD9FrqmUsz5khHFJgAafiSQw12QCn6upUgY1wJPiovJiC8hpgEACi7avHLuhKQXgUM8tcqKLLR8UxdDi",
  "key8": "9ocTu6AYekYEqerY1hUpusHsZGPucQUgRtT8WcsbDKhRMUS3kN13HgLTfdnwYUc8spPbyxyZQrSfxV1fYFZqtSb",
  "key9": "2DuCFmJ58jqUTxidUzLzt19e5nedNoTXeYGGJDz696zE3bXk1JMRRd8yuD4PMb96VvejVtWGZrwaQG5xdt2giVnz",
  "key10": "4sGJipT24fivAUumk4GBK6uSQBExMKGsZQBY2vXaDobNpTst394wmj863ASToaeu9CH8UpoTrHxArWwZGU7LR9Q7",
  "key11": "Wm2gXqUvutvrs6svQZo87XdYBDXAaV8fnCdmCKen4YWrPHGx1DFZWKZG2Wz7oVF6mFX9299LwTMoW9AKy6RTEtG",
  "key12": "o4G2BjA5ohGZDq9JupvsNF7hxprm3BDS6fFs2ZzELj3QRhQJiLb1UxuVESRXospUejmsbVLUhffovu29TnM5ZZe",
  "key13": "4ZCHnUPRin4aKoDHUjCiBXvmYYuYcQCjjFdwjvzE5hU6D67nikF2oPUnrp61BmFM6gbapbXRWtKj15c3jn7BYxkP",
  "key14": "WP2DQB5YCiCEgCW4UfaKqPJVDfdaSF1mn9UKqomSLpjFBHmWyEDfiuSdTz269N4JSEXkwkybZGMCKcDAxSW3MUc",
  "key15": "5dPTAXk6ddVfvsXpHupfMRcX7Gh8YC1vSs1aVL2uH3R82fc2PWyoEpvXn3Yf4NE3X31NErgF2XzvSUQRqKoFTQQF",
  "key16": "5SKGD8UwxbDKCuwkYt7CyGEhHZQRMHQySinthNhxuhduQj5L4YuhcS9oU2Vq7QxFyxR25HgDbnw89ezeJmMLbuTC",
  "key17": "XtLxqQjXqTxpuugg3GRg1eiM96kRaDxvFURVwcUcJrfZfeZQXGJ987mcMMnrDhcsMGsq1vj6hK5qiJyCum9T2VE",
  "key18": "5CGr8VeisxyNU1rgzdifM3GrrMnM1yyRxSUyef8mevQhDEd7wMb7igEQ2WEtB32JDSMf9NKqF8DNQ9B8dYpZb1nN",
  "key19": "4PCqm9yuZmsVGTkd8tURKi1eRfGnJrv6oAybcTo3GG4Sc5KMzCz4A1S8Puvd4CzsnJd4FRRknqUhBWznxDMkYnV",
  "key20": "d8CUHheqUxZ4aXsQKKr99Dwvk3J6LHDce4phU8MU1ihgd32fVV86rrM2re8m6NCGoHmLitsvE6AvnotXJ6kmZ6n",
  "key21": "53tKBTwzmZxpfiAAzd1BcVAHjk8wzQ9rP6mu2vddeEVBuKNqT1cBqaao7erP8RKCTtekMyh1R5E77iir1uNeZsJm",
  "key22": "5tKdnmcYYjSbpDDboE6GztywTAQ5dvHNonjbSRhLJJfnsaqk5xKfUjNvJaefD5AMucFd3p7NP3s8ZuSRdgNuDNUP",
  "key23": "JPhxS5WuuCuLeXU2XAyE1kAhWEsCurnbY7CVYcQfYzmwTvziYPXMFDRxZJTXVNesob8dhfk8Q1M7JDSbV8cetMM",
  "key24": "2TuLoU6GVFLJ5oMhwATSSs38sikD1TujyiJequynFty8mzJJ7sFuawSLyhJqPRZcFiQkj5L9zqe1RX2GqDLVyZGM",
  "key25": "4uZJnqc7J8AzX5s2AqcDssrSkCmJgMcqE7PiP3E8WnBSE2KEBc6BfNWef2nShL56KJTPdDFfCjqCfFYfV5QriGFk"
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
