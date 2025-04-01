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
    "2gwodnRUy8jseVunrEoQ2VCR7DgdpApeqvGiMEJbwg5vtZC1BeGMkoWJMgAUNWi3PYHWiy9Bt7bZLrvGUtUzvxbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qkP31Jtr77QQLhqZFXEkeHpBZjrXMfjfEuWCNkesPkxEWovPvs2dtTnt5QYSpKx3vshtZVVkJgAbqM6n2RBwwyL",
  "key1": "aeURcWrzdJkZVGcq8VpoMpvTtGg2r9d1AtUEGt7XDLmTZcnqQMJzeJgripEqGot4AgkUMrPTGFEg8MjJwvcL3BB",
  "key2": "4A6Z98kLhwN4kYZjQM6p3jDH18vBebKQaRbAxDrK5J2ERkmhwatiEiWBbF8Z3dBHWuRhtyPEZKCBzPPeeaWzhiKG",
  "key3": "8MUKvfN2TpQ8BF33vC8G1Zw2SEoAUqHrC7LbREpXAnBPQMYzNS95eEdubjPezKitgW2j682eLyAAd8DF6GWLAWu",
  "key4": "5UiXb2Fiwan1dy4okPNw1SAFyFRCKqoQ4JgD514GXy81xcRJDX5DF9QK4aQ9zeaw2iKh5pKawAQRjTzq1RBuaUdv",
  "key5": "k3fpfzfyfTKzwddHq9dVapv5DUoGpU8Be8sHKhKGyQwft6Pxci1WCuLRDCMb2o42cincZuXfWgSScQXv7Zs14Ye",
  "key6": "PFDJwEjok7Z2NpiQuKCsNHqMGpSzF4acDALqAJrRNqPfssdWKupFhChzBfKrzRenTsFu9cABpT3HsZmeEqA1cU6",
  "key7": "hYFyqpV2Edsn68nihphP4dMUUxV5532F1hUqAXkc8f9oQrqrEkxPZPeNW28y1eCCDP1MQz4s95Ee91ysQcTF2Up",
  "key8": "5rqS96a6H4rr9jkqQB3B9jad1eHXDcc775Vk9XTLErKLnkya9nH8ZdxGkqCEsMiUTbazmX3Y4c19kzpiV6xqfbtS",
  "key9": "3GBqCkaDENEtdYgRkvZeR9Ar4CnVraaAcMunY7JgvhHp4PgXmiAaYHrT1ngwx13ntVMKqy4oqyFsftz57BMutnRw",
  "key10": "5LPT9dZ6dWTGf41q4qdiQUDtmP8cPcrvLLuBQb2hXJD6ytELZPnz1rDKAnhaDaRth8nzBJFhLT4x6WjwbNPi4Um3",
  "key11": "4J8cjTq6qDcfGAA2aGPBUsRWzT1Lz434TY5CBJCRyVETbecD57Ds8RcB74P75QhtQskJCqH7DNoZMWWZzryRHCeD",
  "key12": "Cwi6VKQYvw5rtMRC22KraB3CpPi3Fkt5fcAtDMdVdwai3AZxQU2a6fYCgj2NqpFCJy3c89BRw4m1cCAwheGumt7",
  "key13": "5w2wQjeUnHeqy76bS8915AqJujtw9rHAytVfNMKbSidKMw4yGUjsKPchGZfLRGzC3FzZm4EWr271cxbQyyTEQJSn",
  "key14": "3BD7NrN2u7DBKNRqsAaN6wKxs3Py2q71yPvvb6UpWW8x3uhX7RMxPM77zaKanevqgCM7GxwqN9yo8zUvx6nSGVjx",
  "key15": "2fPMX693X7Y2omMSSSSEpykLwZqMoVRNdWWWF3brZVGF5WSQEdbywKY1ubwibdexEE5wxLH24GHgXM5AnRGChsnR",
  "key16": "3r4WZe6bGEqeG4TCMdDV5q8Ypkf1RWaKb86WS34XV4wkZSQ2vH7LZE6WD5WW12WRXgvrZM9feoRWBa1aFq7gB4f8",
  "key17": "4YjxzSLijnYuRQHhLKgryKA5xmQUHWCJkdPm5f6facv5PZH9kzU2B23fydm9DNhHeYP1PdWDYWD3WMpyAY4vUsWH",
  "key18": "3urXC963o3da1fouYXQzuzDht3ogNzxQ2WyJHpRNRbXfLWbDSYMgKyKn2ggmS4RYeSTuzgqqH7cMwoLtnkEffU7C",
  "key19": "5AdSy47qpzqTkGHXgWZdinbXBSDwd1xwuRtR2U4vrjT6x6vXgi5FSFWYL1HQnoGfHjpxX7YHeMHP36YDLxAgRyeH",
  "key20": "2EdfL7CkoifYwsbvvz7RBq4hw7Go1dYydMQuEHFteS6ucEQDZefUEZFP9bhC5Kajgw8XhYqzCLhRLsdP9g3X2BWe",
  "key21": "3asm7FYvWdEZGxdCQ8NRuHfthDU7eEVCLpY4QMhTabeVjB6rtGgKhuRtQWb9PgKh4DAZkjDDv2c4VPTQWoyxcnSL",
  "key22": "CPppZqkWzCuHtaQGAUbjZz1ez7EqbEQaUTRMeSE8JYV427kbiz81BNdSS618ohrrXa3XYRnx5cpVeFHxw8hzTh6",
  "key23": "4zGJXfTVFg8WqpUsHqvY3oVe3a2LA4Fuw8xrfL1f1kbA7dQyKfkuXHQ1TxYoZECBtVpa2FpWQGJn7YzxLUcEezcv",
  "key24": "3nCXCZdv6BykU7nLjekNX5V6wySegNmQ73o6mW9oPKsyGNdf3a6exswHCoGTuBqBzo1nnh8RNA1noLiXnPsZJZTa",
  "key25": "63mR1JSpF3HosJD4KEseP8um1YPLjWiYmfdagkvR6iFF77jErX14RXBHHzmZu1E3YuNMf5q4n8PSHSQbNjrYGNvt",
  "key26": "yoMSCXYRNNmMQnZni1w5zV5V5JS8mkiL8cf1HpjrHwBWNWz8EZjQMcMHkVfF7BqdrPkyzxTqrRpcaPi1dcwCQoo",
  "key27": "56pUWMGTpYUwuQXu8bRaN6US4iaZmhtU7cCprYJEMbY1DYxTC8BNmWTvjhTxhwszRe2Mgm7tLdDppxx93Au4hmN",
  "key28": "51DK4mWbNCSUnsPcYGebBcjuvSs3regxpNV6Dk5UwxKtC23bZiLPiVpDvBdhZ8gnAhsyhcEE8R7MS6K6p141rxTA",
  "key29": "3G5spMyeSyx9dnppv7RqL7AxG45YzVKaBScuXT1evuEYs4mbbAS613jqF4oVL38JBSR7L6RF5ewH7XyYWB2ZU32s"
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
