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
    "4HDDXEFvndYJcXxr6VDMkRCw8EQCtEFcr11w5hXFoyWYho7K9qB8hEKqxMCFdo3hqGTb47VarGX6ZduLzRbKhL4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3812a64dYfqHqQWh5x4Q983mWDF4HGxxncSwYJynrEppw2xoUCjQLiLdmz56MRACGaDrgUgZaQF4Ad3LEeGmPRdZ",
  "key1": "2M9DqEGDGNcZuaQer2CgZitVUzRH8CtTYQApnYUFjL2AZJRo6VvsyBMWibV6L5unNks6NT81sNfvimRxBp4WJcUN",
  "key2": "3YcqujtNrByvVio8ZdETdo8pfK21v7ezuREPKAWKE5v4dXvh2i4LKeeBvAYkJyNBVfUTKfkTF3ytxpwqZjmYJQsM",
  "key3": "5JueHMYqtn76McFguMMbJ1i6bbSer8oF2vf9CZ529khZs1ePkLfvuzjnCCNyXGCK2CcyM3uRmnA6puopq3JNUDQt",
  "key4": "2pdqNYyNmHgddqUq4kashVSJwPxUKrsEWYAuge3cJJAsdqSfEMtHB4oVFQgGsyKhz78da82W714AGq47DVPcQS85",
  "key5": "3WE6a3vG4SMpRsbt7JsgatbQY3ZhdoNrYVuoFuSi7AMSQ64ZnTm9NfiY3WWSmcJWUbLrc4aDEDEwxXsXonRumL8x",
  "key6": "2FErsxWFaufxK7HHinFzD3W5GuabDmJTcXbpSgEM1sQ1kCiDA1Zw4EQeW61K8spc8VyB5CpX12rs4QCvrtBxy85t",
  "key7": "4hJ2pXNXJx7VnexWdi3uK4CTWz5oHkjQqSZKAHYYHsQASrJ1FyufNwnX53kY81F8EmykCtEH3hhMp4dReSbEFF6H",
  "key8": "56hqwgD6bvp9sA8DZy3ZNhdSB8Ei2TYR7R7mTVvMi5V9iZbL9vbQGd9r9fXSG7iKYkfN7tfTyWYznT2MYvARzhJC",
  "key9": "2ccCNL9DYXEuc1YkXUrtq1rM4U6LTqNwe3WE4HcCQqhHtSeTAdn2EWxG6nXzLvqC2tipfwA7mWZGXCvJaPqxsFcm",
  "key10": "39uw175UhtRbGAuVMzaRCoYFy9eeesbFpQxgNAsbda9MqSJJwBoH3diD9h2datkTgjrEAtfn4DaS8HpPsuGfmyYN",
  "key11": "4JBiy6BHHKKfw5LxnyRFjrPCiLcg6dauYXjbYufKK1CtKJDpWeENDi2YNCsUy1zGcJAgTmQWsQ8qWrZ4XUGhhpAW",
  "key12": "2ZpCbczsz3Wbzz2ci7zkmURSeYbfd3T9iftLnKv9p8prdEnojhMMWXqrGFoY8yQuekNvJ79np1aLrLVdmwrbaxPJ",
  "key13": "3FQJ4cF82sUmXDLcB4FTytBhYA1pYUtK4no4PAVuujTxn4zYPn6bXUipwaYW8TVitaUmvPoLQJQ5spz8TZzhTjN",
  "key14": "3wAJHRHKnrUwAN7wdGKW3UaxS7DzEFWfurzPCcAyef9atzDr3ZyFfioVDyTvR3Bqk28PDi8DQ6y3GvHBNvfCk2L2",
  "key15": "AdN3nFpJ5jFMdUmEoavu9ZsPbHnzHy6dZiqys8ahcfPqPQ6mQR8mJxhDVEXwrUAxSsgyrrB83gbMbr3cyoYPSja",
  "key16": "5W5MTJheAt3U3w98gXv6RCBxSGbYCZgnQzQjarqacmwpitevS1BpRP1Yt1cRbD5jU7K4wTmjBxW8re2XukrFr3wZ",
  "key17": "qCfefzjNjPcVuQJMFaFbBXMTd9csykJoxweSWVCZJCxcRfjkPQjk1dkzsyeTs638VdKBypG9GD36cVpCaoCgmkG",
  "key18": "2i5dW5PyJxTVk3jdWHrEh3QB7BRf6yAPHV1WwvDo3G31AYVLtiQdgmyHV44gZcmVv2NPovrBK8HENtGiLhUcFWoz",
  "key19": "5h8gXjBpZGXUpD1XhVjrGtfUG8qtVDrX3G75PWZJsNF6B4QpgwyASTvf7Fb7Z48J9HtHrDLm3Uqzgsau5796WVv7",
  "key20": "JFDFet2X2ijtV37ahpWeV2vdx8ZAV7BRP6Y55meKRaoo7W7HupmWzBGj1KYCrUV3yJLna7Vpqum2HrTpZHKbtnv",
  "key21": "3a73Corv7viNpFfJiX5sowQHzwpbxWkTFa4EvnazBPYwd7UGHpNyvJNLsHrhzJrBhyhCVLAZj9VjPXXFUMshcpae",
  "key22": "52Y6MohzYGy5bmqD8fJNkCRZDz14HS4WQrSCTPPrP8WXMX9BSkg2qXpG3GRmaGFY8k2XaK1d9RXRm1yih26sMgDf",
  "key23": "5vwkzYAMN1u6C9qti6NZDufyc1jCYdHi8PESFckHXKUA27E2XZsXVZYngvp9Q7g5wMd8i2ZDNsrNivi7gYhM7U7w",
  "key24": "ywRNeBeL8Gg9hFbtouF7HKqXiJUNedeaLd4jXJwFosAbLT5d531dcj3f4TU2vkqG8Vt2sBEgGA29yAz8fkQruqT",
  "key25": "5YHUJ9RBhiHHXgx89WwN4mhj79LLy4LppHG4WNWGxtxKGpj9FzdpfqReT6r3k7CiTfZaSzsuvfa5uZBt7hM84p7t",
  "key26": "2fquKXvi3atUtfrzEwTs7atCJfapdLdkepbYpk6oSudV6Fd3BT81PWYNhshEcpec4VfDmyQLaYaFvBxzo3oXFahE",
  "key27": "3qHTyjR6TmA285nXZ379r28LsGJw21MVbG7UmAwtywvsQBbU4xLyUpmCWYkuebN63qZ1tnbh9tAxY6B4JDD3mwYz",
  "key28": "WJyUpQpwstZqbNE6Uqa8SFMsG2457VxC42KuY1CJdV5Ef6zntmrLGczwnvff5K31PH8JVSZQp1g1Xh8pPJA6dS5",
  "key29": "2BdQkMoDuNabLV25abJNu6GSuXRZm4UBFmH5xQ1fmYQejwKxBB3X99af4grpdyXJZVnDjDcJVTUdQggvuJ23iJEw",
  "key30": "5WTi5Mym1WvuzfBVAprTfVNEzURmK5zXFwUP6pnzs1fR7F2azLAJKqFbTgDHoARiXh1kKgR23cJpkgcyYFyNw3AQ",
  "key31": "3T5LeGd6dmoKQcNnrHcN9hZyE3YrRiDH2NJGS6pVxtje8rk3WjxmWMPFGMoYQryKje1KLMVpFy87wM8qSv6eznPU",
  "key32": "3rK6ACwSpVVLtK48XfX2rvjn6mYH2t8uCQUqkNPcwptQuGcBNcAXcFTgXGBqU1gTCm4eY3z8TwYqRRCYpPVNmQ9e"
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
