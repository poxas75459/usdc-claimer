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
    "3aQa5zy67RjSodatxfWt1TdAEs8YATYorBsXdfHqRvGepRBH7DNfYdSg8Gcue9nvoEkRGNV8uSJmyiGV4JzwiX1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c4Anxpa9UWYG4Mb3RLwrmrNLZQCpoKHPt3vr5wYXGG4Xuvh2mvYT5Kc2DQhwZEbqbXHccwoovzFEPQY9DriZa9A",
  "key1": "3gWALiCz6LKUxPepUqCQUtC9sPgVsRnDXoH5rNJtUKekapptVkam8A6ne4RrG7Zermn5bRtNMPXo2fP9DkUwFj5",
  "key2": "5eaCEyCvZ14CnDVHj3W9fZS6efAex6KyMVDs49hi7T5AxQVm74HLaNxMkAXRdXZHPA6PhmHXcvLKvzzafYrWTcnz",
  "key3": "5UrEPxQQkujuUUvLhPFQ71n3EnJVh8PzwAsDXhqqizR97fzPqkcCP5VtLzHYEmsH1CmeDHiyYy8q66rPbCELnxb7",
  "key4": "2eRgK21CtLpkRWBT9LwjPNko5ZRx1BiHpJnCMJWaxDyTgdn1zY8wMiEYj7wQAKpAp4fCTWA7HCNB5KRpLbBfDoEC",
  "key5": "cMhPDtNE9ERt7StDdjZZd8HjhMxdcH1LQrSXhosbeBaAH9utXDGFR3ZnsVL476AVXU8vNdSL4x75uZmLg39NmSf",
  "key6": "3KYs8QCfCVKzaSC13rfgHzNvHDknS2vvZhBq4PUUKPj1YLhDfQaF3ow5WYzD4yMnnNhViSZki3aN5MLCFb48H6dr",
  "key7": "5C3R9rsBbF3AJiCkDa9uYbLyiZxoKHHKhmbaBxDfx3hX4JwziRbZQKquRSr12wnAXD6jouQi1zK4GnoC72pPQmzJ",
  "key8": "daJL3dW3ZPWLurGrsUexW9yzcREdEvHCfipK1ooYxxtAbG7y7SBUaJMfHtzjm1YTGS6Xn1WYXYwGDpf99LTMRgX",
  "key9": "fzV4ZhQ36dHWXKGB7xazHDAwvhkNhZ2YQmJkz4u5q7AUn9mhrQe7f7N6j28xuoWeTWcyeQDXT9dBfzywagvqZtM",
  "key10": "4yhkdgbGz5MmMy6sSzC7S8LokntShHRbAafxRBdSjuyD7fzisgNE8QLm62gKA8vgSi7b94CJ923KoiwgnTmHbR7q",
  "key11": "V1Kx4qvXt9L5wYVUVEw2f2iy4Yx4wUFJATvL3nPy2oZc7LLeGpZECDq9yjcNVdfVuYnHgjn5Cb1EEGLTzsDGEgY",
  "key12": "5jXfLtkBUKhPi6J6rcAZ9GhKyVXc4XFoJzUoFWEsc4pDHQgLYx6fnLzau1rQ12GTD1UcU5iZCJCgr2qYsAVSuEgU",
  "key13": "56dmkf9K2DjSMmx6mxqtJerJoMvYirFpo7cykmrnrqQasdoiP7sAA2ewR2qrcp86tmkeYNhUkbPas754YnHH8FL",
  "key14": "5ZRSQxGZ5fUygbCTjqqfh1b4as7GgcjgCfvTz8AFcdy4W8wRkNQLzCLoLNeDsSxmKhhKuUu6EUtQp2bJynr3raKc",
  "key15": "2xw3JmTLcBYGYZ2nBqPbN3XL4vYY4C8qBko7mzNwdJoweResCntTMqXU5cBvee4R5qz8aeJw3bBGU8A8R3ZCoeGx",
  "key16": "5bUtFd17E9dDJynCs3FYd7S1zwTRJqrP3vxLqk3oqBsEVVnkV2MCJamtRM3S2VYrEkLQvyewmQ8VDTCDtZnhwdkz",
  "key17": "5CJWZQraJjijBGwBxxkHRqc4ZmGczv4EZwoKcVck1F9ztNNn7tQbqQZE8H9zo697rFDf9FUTb39s5g39mKHMLS6u",
  "key18": "2A1UCYrNNrNvsffZd2MinQp4XT4VV6wYn4v8TPYUP9CSgpRiLKT3NqPdDPDhHM7Znbv83egSE3tMHMh6wod6TLRg",
  "key19": "66xJBQGpCV7M4cPqndazG8RpWeowVWL4HVG7kZQvR3J1JAFZvUB72FwaeMzhXL6yzKZj3jTsEZt4g9dxMaSmX4sS",
  "key20": "2SE2Wn7NYodLD8Z7cL4B2SaHPgC9y4EAxqDetebeN81EaH5mXiJCLr42EwFyWnFhouxdUWP6mZEE8yThmw9xCdNz",
  "key21": "5p5C8JRArqSoDRMt1NzZqzhGxoRnpUx9eTpxFEW6G1qVexoWU4A9NySwL8wtfV15MVNLyj8oWCEFryY7NFFfLfBD",
  "key22": "4vqNmXV62f1RYkrAcKsQM3a5BeKoHcbFGmTKBfV7YYkSnDMqsyVgx8S8qTfvHYTCce19xisyLyT8AurPVJubvzkL",
  "key23": "5RgS54mnLggB2bhfwdeSJThiMaTawp475XgfJ3K3Z5txJFovQHGhvBBjLtWUk64giBXzp7i7R2QfCzbq29VwD3AA",
  "key24": "4iTwTxiVyJYGG2BnE6KCmuU8VNDSH4VirfmyKHy52WqeBHxqdLPSA88PXghnpJLhKwxiNUACdG3JzMwaiTrvcv6s",
  "key25": "321mNys7pyzcnaxXVvQ8FoGJRqS3iwYfffzisy9YXW6MbbJ6zexNaLYxvVysdDUhEtopK1AyH6xQEZXkDkUBTgB7",
  "key26": "3YWZ5hk2LBtevqtZWxketidvPm44RBA3eD6bAZ8EQpMbfbjC29J1PxePcyQtvxhUY4P4oTmBf3RJFxYbDwn7dpVP"
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
