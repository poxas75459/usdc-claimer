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
    "3hSTqvfze7KSJEbZukGCxUipBroco7ZuZfjLWd6Engm18HjFbpdByjwRnvQSSVQTfuSSiiAEEwGpf8dVTXSnfSXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J5qwfFPhQeUAuLDUoNzxqhWfURnp2FNCaesSEt86G57bszoUiCSWfFKX9fpkVSsSGdVNThqrKhAHnoKU6Q6RXBX",
  "key1": "4YDnzzNAkmkTvsSqSvZdRz4oTMuJcfBQLyHfg1kizaucWPyAhLkUvCJZLAGrxb6Qu4iKtPmnQmSW3ZxJFdwKbpfm",
  "key2": "3ERAYRfBHAczxjCH8u4uWTaeqegA3e4JtBf2zDLe5vrKRWZvJpywG53Acn1zb9BJA9rcHaFnRqucwQkMaWAq51Mw",
  "key3": "4khcrZnReT1kfwgCN2cqv68G3xifUvuTV4QEAAtBkKHJeVWaa1zVqqsYQyDgKu2VVk2YEiaanf7UQCz9apBCsfuh",
  "key4": "4qUuY1CidcawBnFQ5vrTsVncBtYmgVrZoXLwnEjdK2Fz7ZkzwYp1zLqdsnk2uZeSiKRKZQNuUaQ1B8HHr1LHsySo",
  "key5": "4YtfyVnxFpndqqLgrwQX6kW4THQsaw1J7WJzbfiPDX7Cw2GQt1G8SSpPes4vVK6NNQcebrELVs3yAFMgXgaEQTEo",
  "key6": "5XGGNqaGDnpKoqArfpWNkwGMdwDh7g4gmuyD457S2f9JyiH1jMQWw5vwUuCnqNr3yq797kvsaexVobge2ppFHALq",
  "key7": "3LPfFYscoxudKZQHZ6vjkhYu9VwiEYmZ7dx1sQYYdNf7LwHSrYhJUFUWXFD3XznYVyRahFbgdEAgEpsgLEemD7y8",
  "key8": "2JRwMvbP9dgKDcLHiGzQLJn4sDZCXWWVgqWFAVoFx9zAwW6TvdSurLtYLb5BgaEE2iZmMoDcMajcciN5mPvMaXS9",
  "key9": "3G1VRycyHEDsAaEf6bWb2ihrvJVFYcUtEgmz43oxF6UqQ3LX22Ythk9Wd9d3WGTNheMMXFB1TeFJCiPJTEvch4Md",
  "key10": "YwFznfq83QoQYZA16EFpB2VXt2rREU9N27pVGgT3iTgXMLVpnikJK16FdLehCvZPGnDgwdNxWqRZFfAUGD42sPY",
  "key11": "paCDQPj3Pn8MuHs62Hm3Nvgv2jULfpLkoduDtwxNAFABSgzzjicjh4vXpS1LcZ4UT1eg8ZFAUYQ42KXTjKpjKjr",
  "key12": "3dmmmn7vZZe9wgm1mrW3S7KZ6kT8wsEusZme9LkjqnKhjuJRi3SLyniVcv8ahcqXnMkAmKbf3T8nDVc1mTFarZ9N",
  "key13": "zR97wcjnXvHL8G3EiApoTo2kn9cXw9kreJhrnf6CPPsAfarG6LojjZokcLd3r6s6FT1jQmxSwPHYdGdQzgig7LW",
  "key14": "5fP8fAXS2Q8jEDydHCifcWSsLe9MD58XHzP9APRrLkm7xHvwZbjAwdmD8skYxcAY2vaAZzGDYCs3TjgWJRAia7wN",
  "key15": "1QmQvgZBVrojWYcgET7FUjGhwZ4e6BqV3nRLguahRgDsS2T6WqHxLQ8AadSGkBosb9jngdYFiRRgwLftVVCKsjj",
  "key16": "WnSrysuC467a7HmLRSjRpNzfCq6n7VjqXXEzbV7L6NNN8YszLW6VhMPycgYbBQ8cRT5LwxXDMQDLe5hGDoYbARp",
  "key17": "2xewD3mTv6EMfYe626LJFGPHtDQyHQdMGD9G3WscykRFc1599n3uyKofWgdsF6PUYuBaNPZCCEHNjAczXHKgUTir",
  "key18": "2w8Rr1EM9pyAoXDjS7SrjrEPSThWNTf85D1eWxSVyqajVW1sRL59QCk3X4V3pqSAfxKKY1Um1snnxTxJF1QL8oU4",
  "key19": "2C2rPN5LiybTKkHi1dUCA8uVetNEKWVwWsDsWD3WjdENqKaMvCtGRUwk4CR3Wxfh4LHfQB8CPvvXTRbdSYJGhf9v",
  "key20": "ZCDkZqR9TmbDXaBMC2cL7PEeLYDrAkEtoG3xJEmnWLmxvh6eJJX1MCxrMqwhDjgm47fVmhgRdpWgj5QgcJdQ8qv",
  "key21": "5BCGqAJHMoJyHhTZpcyhtQWhrBxUPGjHj6Aiac92Ccp2vp8WgLnUmxp3pEjhKAwDWeJket76WxGM4i1x933zYB7V",
  "key22": "5sFj2BWgjk2NikaaFr7ijRdPc6yq3nGKnD9kkmdGv4RxR7rf9PyxhBsKPT17ZEem4uxPZZCLbRDYXMXo2a8QGrbA",
  "key23": "631XSshjEMBqpmQR8FPpFpt56EnzjgCxZE5k2hZYEJZDTwZGYkLvPcxBwzHFVzvsehoYnrtZQGbfP1rvtW34nsw3",
  "key24": "5zoTHoUa8LUhy5PteR5JnxGeVbhxyPHNAaT1TTxeJ9Yf6VWpo1RuFzmeS9P6QFuAN7fqSNPgJTT5mF6ZQHogqDRW",
  "key25": "6799L9A9mEPtqJ4pDqU8D61obJoScvQSXa95AnYT6GnRHA8PaJyG1eG3HWBBKt5EuK2R5453VptieSxWtYfycN42"
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
