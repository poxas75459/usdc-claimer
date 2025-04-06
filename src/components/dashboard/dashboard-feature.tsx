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
    "37rm8cQMtoAPyVASkukbih8JwbtpwUtNFgp7zD64mNy9DdDCutfqEHRdNuU2iasKANeoSELPL1cgRAQcNJjCaJcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eCND6eB2t2wzeAjy2xb5nFoBGfaWrsjbaP422otWkkcDM2GGssnjARUNBskknhuXoSneAxEyHUWEXUFSichredS",
  "key1": "zP3PrQTGXcToN5d7M2FncprQMrHuK5XPXy8sSqB4A29jiDFjknzNPa1E6ZYy47r6eBiRPH6pvA2Wmgu4wuxVgcH",
  "key2": "Z2wjz27yxwKpt8FATFjPy6QUWLtJsVdhnxWbCoxZRmZW9XLAX8MkPh4B9wQWSc5XRwDDCEGqNrxcGirshETHanR",
  "key3": "23CqposmE4wWmREwssaMcRajx1FUzeiJW4NC7Vq6e3G2rsZVxnNW5S2o4ACJNVARmaVdwGwWeE9DsUtZAi61mbiq",
  "key4": "3G885KmtbGT4PjdiV2qLJJZFrprteQe7vegcrhBq3J23Y6fH7vFRtqy7Y56cA2RgfcSqNpkZWXPnxiFQP2iHE1yx",
  "key5": "2n7BN4N5EpX8j6yCrBRF8qw8meWUCoVw2CYFw9bAVpXUq8SmRgtKUv2zpVvFLPR6QWrhDmTRN1zytaooUQTjVM1h",
  "key6": "4L5ikr1Bo3ks5KXJFDJiUe2Qj2mafDohKft8pUxFfvJpmQWCioavnbQ2wE5w7SPAqtfC8gh9jZAvzqAugzwujixj",
  "key7": "sRwBEoz6adFChrnp5ecfLoET7U5qcJ4bRbGeKLMvkwJTbCwbPV7cuVnswJFZFWGJyuhGjWZL718hGaUoTh6Uamx",
  "key8": "455V1WAJETTgVVPFgf6MVE3oBm51njMRRTwRxxdeQai4yEUEakV8bvLz7r8QEJiMrCCP2acroXMWbnLFHDFeaH98",
  "key9": "4qF4SWSoXtTRbnLVjDfzrF9DtKj4Un5ySfSBu8fsgvpenxYHwgMbdkVrtuL26REn5pn4hX3MpoozYGs2UQqRfqXN",
  "key10": "wifeS2vjJehm38i6uhjzS3dW7Mz7xAHoJF6Tdog16Yf6jesBCg8CZRrFTrA2SjeGvavbbA6VXpS1STyFQFWq4kK",
  "key11": "2A9i4kjPtLTsEnEn3UxL1giL5oiXuvBTSkAekaRTigwsj3kZ4K5ZUMhcixA375QHSJxgRuGL5UpKHgBaMPPYWDLX",
  "key12": "4EWKnLdL5XX3kzeZxrUruqSKy4PrxvQcApRXyU1atGgFM5QGK4DD5AyYDzFbtDQ6BvPiAANdneM19yBevVMUGwG2",
  "key13": "3QwKPCqYUx53F4MrYG62VqXuhQW7unkMJYz7MdynVXtqT6fGv3UpnPmT8YTR2w7yxkeD1qj34B7chYLKCaoSo7Xb",
  "key14": "26gmmMMk4svQ6Kpyg3ZU7hNBQec8KgiSkRWXBevQiKk9G7hWBhp7BtTDXHccnSox8TA3uUGJoPFV9n68gQHAZmSa",
  "key15": "3QDyDJjGuPZD3Tai4uNkBdzSdnR7Xaj5KxfTK6FQMhKG65L6VaJNVAWLxy7uRihrgEdUCdSdCegCZQhoeB8Y2smL",
  "key16": "ueABtwzXYWY4DfCoNphkymdV7eW5a6rWx62U1sxTnyk8E2xwwWmoeHNrdN46Ujn3Sz2JmnaDakiuK7AAK8N5ung",
  "key17": "5LixbXQS4nfNT5JrFPvQKZLtahnQcYJtqymV6oLeMHfMquN9y4vRfigae8nDijLtQy71qPcDxcDsAfSbfb188Ci4",
  "key18": "5DsLq23FKhuU9RaEYwyDJUjrgfNh1MPn2MYn8d27Khhh8Frrcb8axHbVDS7i46cKNZ6xYzRWnqJtN6nWqwcZb9gE",
  "key19": "2WRuBJ4jT6rS5vR8jFFDAfaeYf6rYUFmVmBW6EdKjs6iSXe4LNu1BoHatkvKTdjpKFMhx6bkWcTVs18vYkj2PvSA",
  "key20": "29DZSSxP5yrQcURG9RM8LAcHtCqcSwnE1LMcJA3xDLsPA2wZogrVVPn5NCLdRY9f36ZB1S9zLRgwdq9qgKhnN4KA",
  "key21": "4AnbEFoyj8qNs3zHGajv4g1tQy4K5VSF8wnXdRgkyVNf5vLE6V1QBE8tBu1J7jEomSp9dUx2UjiBKG1P64DW9KzE",
  "key22": "2THg5joW42rmFQkePJShrt11RPnbhVKU5gU2Ai8UbyrACqgdfo3HVJhyyfGyZkKMAQDXx45nX6XhfPDsu7gVQ56b",
  "key23": "2nNL6tGA1NN8zv8Cj5zsUNTWPBL6kaZMdnH2Pb6Djt32c71UtwzTrMDhK5u3bxLrUarZVQXmnZf5BZXDcmVuQDPC",
  "key24": "3ZnV4kgXncdCP4TYgPA1B7mzouhy3Tx9oZkbyya3EW2HgPVMaDWUpttSdXL2LqLu2drLTH6Fiqxia1RmD3bLecag",
  "key25": "4T1cyapiHu3UXNhFY97ZxkhsrgoCed4SPT13pGBrvseJVDcoyRatCpDEK113EsSoVhawfSvZoSiRmUoQDYdPoZHJ",
  "key26": "2aAZY5o13uG4yCsW1hyiBwRdEoukx5P9nLpxZXFLiyeCuB7zHM8UVBQuGGGDMhyNqXoEnWR6ghbJpWrXEBu3eVGz",
  "key27": "4LM4KxPgXJB2AeRHfZm2vA8yarZjbDMDmQv4s3iUZXDYLAKZqXkfsVqo8rcBKi7irEWpQeraaQ9gjmf8Vpbx5wPS",
  "key28": "3wZ1u4x7KhyNGoeaRZrGKKPN7eNzHUqMSdCk8ECgop4nXpQkDx5UAWk7qEQTa3S8TKjdbMeuAGHr3DbqLwN5A26J",
  "key29": "iAfYgsvDrM8G8SzixVxyTKFVtGHJJM7myf9waNASvSfeEDZ3tY9xiZ8NAeHSyiJk5vZ7A6mqYMvHwSzdkK6qFuH",
  "key30": "4aDJBdhD6ZZHWMShSgbZ1wpED7nKpc4ksfJci9tHZxtf4TyD31oTpTuqPMdfqYn56iq2ehh6zd2GCph7GW4NPfJa",
  "key31": "5TVRGBMZvsAywCt6BLYtGBpAfPoKvzy4MLdf4qM7yS7Cq16ChmUbK9Z2GpcJr3tip1R47kzBwunkrrDpAsxwRn8s",
  "key32": "4KR2t1X7gJSFpTmwKHsTa9u1o3Tmpiqt5cLmMBLELnGEif38NbeTt3xSu7Kvm3gLSepeMyoYeWriXHPLZmwerEHp",
  "key33": "63GdWVJLqQwC28HBHPsmMV1ttq17DeSLg336s31xM6ac6XJaRBSAesnZNy9Qu5pJByw9KGDxNGbiNvEJri6vMm3P",
  "key34": "2LRjUfknkn9ZCWv77fMi3qzrGvCgnheHNoZpJqSU7qdVjJsHFaNstyoiQBnky51kVZaVB2jnXtaFi2d3wt3C5x1Y",
  "key35": "D4L6qMse5xfbfjjPdzYAhrL1HcqG5yivR67ujsSicWunyCk28AHfU1cKFuaVZA7ht1fK6o8s4k8aS8pfyXrzpVw",
  "key36": "37Ky4HVBcVcD5TBRidciC9nLHyUJ6bWKYKDvBpTz2vKr2yrQ85m1xGMYKxUn9AJ6NpXXDEEsjj8ctzZDESkEFMQ5",
  "key37": "4NtxDndUGvAmashwFR64rGUmSWaQddvhYkmDxXFrtzft629WG3peNrnJ4H3nPt94WixzXyapqarea33PtsQuWCh3",
  "key38": "2bjHbE8vgnRrdbrjob9yX2CmeaCsKFvpyKjcn7LeeF6xf78d1f7inTqAzV5Xvj9FTuTaa6n5QeaNcoWV2hWFjX6G",
  "key39": "5kHkrPMjQR9HohwvWgEYRpkDYPFzrR4d6YdTy1WVfNuAFLmHYggFMyN13WnaQiKJMAoayZhuC1PWyJoBjgYjLZEX",
  "key40": "2NYxsXo61jDZ4Q453WZf4Tzd7ahCCKzE29AymNZiEVrA72iPdYcCPFrX4Bp3CfVNenmbg3aJ1bub7W9M9YNpzfc2",
  "key41": "3L7Md1DUZFfSdGaRi4CgNosgM6FjreJwjQ9nQMyZLnLwjcoudpPjRiwowYbsrWyaWp3SzTSyHXfWr5CSBnwbxoT",
  "key42": "EmWJwGe4JGFcLj6D8iMYaDUZC45VQED4e9pGmzT1rZ33jBmikSbYsnrf5B6ezPQTgy9MLCoaCFUvxgMroTw7iT4"
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
