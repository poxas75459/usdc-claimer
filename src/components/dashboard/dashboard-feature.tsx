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
    "4m3EMVbRJtZgj4VAk5AybrUNwNKF9TFjpfuZVSsNKmD784CpiYZUW5wS3jRjocjgoFBRqpobJdD31342861eCDTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z7GkxLQakJgJuZXBMWJcmjRAzvR4T6zaHnYFSZDBaM1cr6KadwycWp4QSnzjf8EXKdUJqQjmExNjFAJnE9Cy7RN",
  "key1": "2HPqN4jnCZrRU7vUuEVw9avUdzNftikFBCmWy4c5DQsFyPSj4DykpUVE8AHrcELgKpH8YL95LsU3Pf6p6riX5ccq",
  "key2": "28qM2QRN49SdU6TLr4aEzu4EocLiEXtX1FyPRtrpCGfBECioWsjs4biz7JCGuQCG9AjUGS9G8tnv5mAcKrV21PnG",
  "key3": "49ixYNHwHcdvZebg9CZbbpXFzBMUfjn8TN9zysDjCtagrZpg1wGpLKku2Nj1FiNih13FbpQqVyieH1VnoPP6yuBq",
  "key4": "5BRpvfPrHcj6GBfDWrDD3hgGTdaxpUmRvr97P5C8TzKfrCB4akyfUPfuC3gxiibNeiuYYLYBQ9PFztLnbLdzMFAB",
  "key5": "xCfqS3y2pmJKNVqcFroYKNpPR5KDTH9bBTd7WUEbJzLq4cdgdYzb2May9B6D9NKyQm5UgY6wU6sqg5xDbdX8pYw",
  "key6": "5tXgDpYVBim59qeCw2EtdzE7xtC3juoUCyrAckJQj5mnCvMxVVWdFwFKnbQD98F9mTvXwDKGM9A5fFhu2F6HpyRX",
  "key7": "3wW4bqC3nXEv6o3YkDtMHHZvsFwSnP6tpkrkkdsNCyaV65em9WFwuQnhWX8ahA9TnjepMMFXNJSz35vR5N64jz4P",
  "key8": "2xWMynHTBnWNQFvgqK5D5dK3Sod4SGYxzc88cPQCs7VQd2ePE3hHiT27DGQYQTT9iZGbohqKtkFTnCcDokrnUT9J",
  "key9": "2w7BHNsX7Kaw3yXpKKGvFj94fL4VnsMMTbBVkbHLRrffpdFDX7tvqpKKVL52tsEKjX5whUySDc23sPT6dtLkGTzW",
  "key10": "2oH5oC5PcC7CUQG5iJgfYpUvPpkh42KtWipJyrpp9p8tYRV1RkcDGobK2EHyQMFSF6mx3sNFaVnaoYTWgKxVtnfK",
  "key11": "62oWHVwbJjjXPWa2rWRWYPXJr3W8VtaNd9vFw7An67GBvhLZBgwbrZ2QHFLkRzwhAFK4HLW21yhdYeir964t2AAm",
  "key12": "5ZcSBGW9YQHjcd5kVoNKcKRs8EjS6HZoMvRkWGHKtQyoMRHvHCVfah2nnTYGJm4EGUJSEZcA8EPmuRc3TVbT7DZR",
  "key13": "4E7etZQnfnAHad6GoQ2zmWPZBJLNJvavgpDPqJTNKbKeRgZr1dq1JaQhFGAE3bo1W89wxA5MwKkXtspfVJZQ7vp1",
  "key14": "2YrHKvKSQ2e6yMTdxycSFuCuaSrUZfKFSzUwDxNEYcEdrcMVmQW2KPtkjnWrAhtfx78r8SABL9Z7UnNZ99VtMrne",
  "key15": "57N1RvXJnauL7Fgfz6NbxuHuqybPiZeLtJZvsNPbqzME7x9tTUtEhjdtnHqSCYpm72LTZ9r5DqjAX2eniTcFdwFR",
  "key16": "3iizbtmFBhdNTdTu43Ngo2Qr1TXgu7kgwirkLYKkfaTQp6a2XnfyuatwE6D9Gnr2ZogDMfYeEbsqhC39xqddzFqA",
  "key17": "335jA1zQ2omMe8q9sPVLhyDWDEdNgudoHSgP3RV71d5dGMbHJntK8tX7ZT4qAHyphDmvzsh4fGaV4CT1v2EiG7ns",
  "key18": "3ygd66kWNZExUXKeAFzgDee1usB9M9g3RAjbjaGsEidR5YCEyi9bUBFHwnfehkG3S2kiW3KX9ZHMMhDUoajC5z5L",
  "key19": "5UK1yXpV2gjVYbKG8SXrqy4tqPrFYL2m29aGzuxewYhCQzTpnAnLzmt8oo5DTibfqni5LhGougC5SBXkA9wfihpx",
  "key20": "5RX8YCT1esPgMUJEAVmAMmuDPrKHGJ52banz3D5js3wVPmHoGwbpGRqy3ro8Ve8xGqxNqvZih5rAaXTC3KptEWUt",
  "key21": "5ZYR4RvfWHH9ZQzhzMwQQ4prT6FyynXxfLsDc7qWCpZWuPLj5W4dEDA2FnRfofjBfnzGSW3kBw3KXAQKn8DinKAi",
  "key22": "4NBmHYynJ5piGTDzAqM6tGwvg24XBHLidN8sjhQJhZnT2cvKPXANgeyvRe6SpSobotNQorbv6sF2a9aWzBnwg5M9",
  "key23": "3P9T9LT7MADpqL7vUHZkWHo9SBXBz4hKbtEpBGBAm3JSEDNzViWEDHecmR1xkM2xaMGZsrR3oFrtByXtQLrBTRLA",
  "key24": "5XkfpyobVMc5NkRBtDXrXLPCgktvHJe4F4jJTouEQK5Y67xN5rXc7N6DdPjgEnwtWneVTfofNAMbpXpPH8cGzfvc",
  "key25": "3z2vHNUnJXyR3sR7tpwVzC8AFQdxmnXK2LWsr1U942yeeEdaJ7111o8zpKNWk8Zzp1Z3vpgiWzx4azYqfWPhRA6s",
  "key26": "2VC98LjzbgxZ4FbgSqUE2eCt3TSXpxkRK5UTnEaW2mFBTEjEUDjmWyqf7mSa3iC1kkMYVpaDVtB6dMHQ3cPniaaz",
  "key27": "48Fb7ZTqiJnd1BSPR9DiBodnFVFTFNvK6UV2hnRWRjEkdK182eNwt1p59d5aw6PaNJfJ2nc6zJFkzzPs1RLughJL",
  "key28": "MNyM8iGorXcDi4WYF9ASKdSmiV4avt61juYzp5c7FHm8hoGjRE6zgNve395Stkz78z8js6ZYrBXjNbJUxH7GHC3",
  "key29": "51viJTv52z4zMfjrSbezoh4uiaw25VSH7VTc9Ug7wHvtnXUPcUPHviN7jFwwK8dFVkPakmXmwaxjuKJ8119cqaC9"
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
