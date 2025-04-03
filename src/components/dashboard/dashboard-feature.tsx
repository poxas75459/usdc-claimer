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
    "3qL4qtyEDfHi3uDmu3PKiAw9op7eGoP6PCKYc9ZPpQEoC9dn93UwZ6Zxv1jDvPMfDzoZ7ucGbbHiW13hurALXKBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZAfgrWxXmGvMDM5doLzBMV4cjcnjsm6ao2LRfxTCDgCMPsWLdRDUndPYxQLtvNgKWXPo8fP4WDY8SmDN3GaQABe",
  "key1": "4wnYM4Y55e2dpLqTD4zxT9fyUvbqZJS4tRmXHWUKbZSgHqv42Ng1ANaR4w6tytC9HnUajsiMnesJpCKTW5t3CxpG",
  "key2": "4gJYRiF2j5dGAhbH8qri59qGCvWcJCwRU4829VUTMV3dF5fvx2Grt8X6yySAR58PTA6trFYSNDV6tuHzkLngF2EB",
  "key3": "34Anjq2uSBnDz5p1iNfQYXbvGKjLzHByUa9X5kNiQDLDjpBGHUVGhweCcSXFm3MqtY59uNjSqfFUEkvDnL2YPmM4",
  "key4": "2om5xXi7ve6ziypZ9xVUB9tedNoNjwx4PR28ovfCmP98k1J4fhQNAGyyccsALqgjkSyjb7Tn5veoGpmYrv6wNSwF",
  "key5": "5hMuzcNLSpM6GVLKgY8XiNNx4NWjzUSJSqpFNbQSjyZhyi9nVpgjy5Eo3sRWudV5wEegNuCBDwqWr99x5tksvUsj",
  "key6": "d9vFm566uSBAoDSUa1CZXz8AdY7ioyMNZvXeqWbzyQjp4JKrRVxe82GddJHyR6ntMHu19Mv3AmYFgWDo88pvHA6",
  "key7": "4rMsNyD7tjUkHcmRVstVmZK4SbhWfyFPHiQLqeuuDjSADj3w9ukELY2k5ZJvxrH1FJezWckyr3CK5P6czTA1TZsB",
  "key8": "4wxdX5SjQ8of2T9VLBA6WfRHLD37L1LQerwneWKTEBfsg1H5pELaZuUUoYZA2ChSNkvTcLsdcGkTaw1b4yctejLi",
  "key9": "4u5n1uafQFX7Jw3rMkoLUDZUHXKqyj6yKnZprzMJ8GvPrwZDBs2H319Lu2jYEmuSCcHPwCmkostcyUw9Erbjdbta",
  "key10": "4TV49DWsmKv6X1L2Ndc1bci99iAzeoik1bPoshjQtDznfpL23AC7S7GFi6X8y5NnwfFhZSXyiscd2f2TKseapxzT",
  "key11": "3XmxEAKCqHP2Pvxp4Q9qN9Vw6V5M9KyU4DpfdjyQPVFvdfHBVwteMy5DQ49xAQMkYNsHjfkWKLjRoxd21tRBfF3v",
  "key12": "4q91FVmEu5WaAMZ1v6zHzQJtqwyrgmfZpcrhZ13RtF6McEnu1c3c7TSfpmksMABTLNm8VBCuY919v8xorHpDz318",
  "key13": "319uVTGy8ukc5ypRcmAbCKjTN6TsTrBMc83hMTux5JGWKkEPXs8tRrUGHsXSqRqTGsXXU4gEXyNX7ueg8L8Ntj8Z",
  "key14": "5YeDw5wiMRgtZ8duUqE4bZrrosc9pab79HKKj9hDyCiytKqCdU41orsRXZXZS32bQ844U6xm11YyUSK383VgaFew",
  "key15": "66NjpC9bBnuAWjRYvnD3TqM3717byKmsP7MRNyZuy3jm78Vr7FyVdWApEWYhixo2bUjY9RR8TUwUKCN3j8oqjE6T",
  "key16": "2SWq6TsHHsJFwHQtqjTy3apWCDoCCX1V1SN7ixXrGgiqg96cu76BhxXfogW6785QN5La2YmQDD83d7ArJxUDDrfy",
  "key17": "5kZQYS21hjd5LdzqcX4yYfDXjKztSyh9g3tGwSytRbhQbDgPPAkoz6SDjrrev8Y8v25LfHQArRmZS2aWgrjo86yd",
  "key18": "4uKYDn1BviRcMn6wyGBgAsD8c33ejmF36Rc2LWiKuAmtQ9Y3efPeLatBhGJq7qsataca7BzK2GezcUbLewFrNj9x",
  "key19": "53Hr3Tp6FYzhWkPT75br4BLx7DdcydnpgihwNzDogtPF1uNNG5z4HTyDmDXXz9ZNWjeWdGFMS1baYMFjqVBGhcU1",
  "key20": "5Mv2gaSppVBY6F65i2AvqST6KQMCs3cUyGRdWKzrqqynXR2GzuZUSD4w3xfJywUeFYZP927UwxEfpsABUQhATGC4",
  "key21": "37KrMuXZLbq35rL8qYKVnc1Snzv8Xqzu2PmAEbrm54NF6E39rCaeEV233fqweoNMUMfTHA7fF8XqwkD7TSuhfyxu",
  "key22": "3gKi1uUijtDSL6vF2qswyi5HeHjkgwTrrxzc8rFh1AMzPprPxRYJXAyDAqg8ZDFuB7gHKyTZTxKGgvdMjx88ELHB",
  "key23": "4KQK4B6VCn3UWhGMmnU7yg5trGXKVpSbAAEenqRPXpB6aPdhsAFvgZFdxHijqmMA3AXt3HMoWJhAQsX72ut9Pu24",
  "key24": "xvssu6VJAo51XU75wEQeR6u9Cz4z58gu8PmBy1sZMe9wvdmtof4QgmnP6MVj6E74sK2dFXcu2rvgRbQFALeuKLX",
  "key25": "4w7LsDaZsSju1C6yRqWYa8TCJVq82cTYWntH9KsYjHj3KRwBp3iVC4f6oNvjQEnT1EscJUAa1dqh5T2z2PLpHNQV",
  "key26": "4obuSiDKgBQo8FJ6AqP6SYLcmfjVyVTmdHh9bQfwnn2csoRuNwpDawZvctYgxVxH1vg5UfrE9ZWAUPDzh9vg6FLN",
  "key27": "C9YHjjg3Gx6RxV1GQbhNNsG5V2oaQasYXJe74fLqbr8pjLKAG1xQ18e4g5BgzQuZLukVU4yV2v4qqB53Q8H8u8U",
  "key28": "435dUxRYCuWD4HWNdVnMKxbQ7gUvPaJ9Zm4gGcXUjmPyd4jE2PXnh1Hzv7FMAx1qkSR7THJsGuA7PLQfcTfNmKGu",
  "key29": "5nGfanJVeSws8wS8xNrPtVWBqTpej2Z5Peqe6vPGPxUn8YfdTDXnV2d9vi9kMDNLwiw29L2LEFLF9vkgDvvT6VdE",
  "key30": "bvKN2u2yLPn9HF61usoi47tyzhxANKLYWKLWM1UqM3eHB8qNzAkFdoUsGjSV4J9NtnzvAqKTEiNVkcmuvsM1Hw8"
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
