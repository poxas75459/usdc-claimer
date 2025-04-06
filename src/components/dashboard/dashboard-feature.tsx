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
    "5PAY9kWd3u7sCy9QBojzZS8hRcQZmuEjRzjVq9W5tezTUzz9WLevN95hcQoMea2ygDhbzaYipZLZDYdt7w9rVagM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RebrYccsMxsFVNttFJmS1S8j7BodKfXNkAhash3ENnSNQZbzcxZM1xgckRThSQ2f4AfbdkDmcQaS5X9HgT6bUGq",
  "key1": "2CHcCfgyrdDnSVHZQtM5K573eEuSA72yKWJih9LgvcFDx48erXv4VUqRt4SPdG3uiVDnnCVYGkE9eZ3DPNbzNppf",
  "key2": "GwuZnBAQHbLTWB98n8H3CH5CTBrxLbzUQKqTNHm2k1qdA186YV2aViJ5Vqu45cLrr58kwUEtVdS8zemdDLwChDr",
  "key3": "4va6VwiNDPiT2pp9WWKYAaYLmemeon2vFmJfz3DyzkbxVdamD16ir3XF6VNcXZc44nYD7cdsQPqba5QzQmCquQs",
  "key4": "4td84S7Uibefs42QdKehkKUH67JPKWKo6n7RQNstjbEXRPFT2aTiBegnjJ197wHnkS5UeZBUqm1HgUQ9B1rqg9W4",
  "key5": "4d4mgJz3p11Y7RyRAWyWgRNVNmSwJwgtPJ1kw62jJnzpg2vtCTq1db74PZihAAJvNQY4fGFsYUq8QQdC15Yx5W5Z",
  "key6": "4MyZ6wgKZuFyz4rgbyBm5gct7qKPFMUzowLeUX9sZqWdphXuZ3gVyAYoHXZVudLLYeninBx8rHj81hdx8CggH33i",
  "key7": "5VKWZQK7uPBS95kH2Yi5C8yApZTMh2WN14EwDSagrMfHAEX9ctvboQghCUX4ZV3w4Kf3W5G7jHzKRemBbQ7eCK2a",
  "key8": "664UXtqLW1LqRVpHLAcuyAarVov88Ax4yLBPDEDgguNs2JsvMZVEwCipVwp1JkSdoQYfTShg2Rz5wA3jXhgYUVSB",
  "key9": "3PC2U2nHQsctd1pz6UrPpTpzb121bvr38KqCRaiCboD4XfW7Sw5ybhFpWGuoGaBV34fPWYifh1AzK76hQT2L5QJz",
  "key10": "5ubm1NW33i7XuySysGFLhtY4S1y1V94nmyK6Pdpayz9i51JyitEjuVtypgMZbmttVczK5P8YZzCzafFc27DnaZ2H",
  "key11": "5ndmBiCSWi97e7i72sVb3Wevs6hYioPMXVQWfKDqPWDHcsFwsV8eM41EP7mogkaV6u9uAuAa1FuMBu2FYn4SiX1H",
  "key12": "2RDHCS24quwVS126V7ugN6UbXbZYbfPJjtvAUhNJx9mdXcXn36nTro44q4Lb2F4BWqU5QNq2kdkQSotZ8dmSegg4",
  "key13": "67pDCFawnFDSAMXnSaiRS9heVXyVT3jMCTuJ34V4gMDxan2w6EFzR1xBtoKQ3xuQXFf8fa7YNTC4vAwS727mX9F8",
  "key14": "43HgY8caPkdFioySTzd3v7dDu8zTP3QTNuoPqexqRXc6WiMbPiH1nvmB8zQW12dEWdLX8pevDVZLkQ1tFF3Zpp8c",
  "key15": "sAf6d8aBkXDZdvmWKGLmJ1AYXXD6DV6pcgxVxPab4Csmbdi5SjVMFw6aE2NsM7ybS4R4ihiHDJvrXx7VnzhXDcy",
  "key16": "54ZLmPM14xX5GzXD6sN5eb4ubsmTKYPkh4GJ3tztLcgngc6Utm1DrQ6bp88nbMW76W173iWbvULmWH8wk282oj19",
  "key17": "2Hx8sJo6QgaU9qopmB9P7MzQB4EbcxmsD4wMvg65L5wSB6p8RREwyzqTnKxEMuwKTZRwjoLg4jVxo259tcDtT4aE",
  "key18": "3jeui358fxWwSzJScx4BT7mvGwFCkZKorgSsfunC5TSkHyC6hU2onRxa374LBgPzUESqfPzbHfUL82VrX1cRKDFb",
  "key19": "bUNrKDBkPumYiVC9v3jut9VfiK7t7J3kuSx7cuE3o2yZUEihTX6mcoj9HpG56HF3YQtgmJBANyDQotRRAfy2jW7",
  "key20": "4fctifErMbyvxaGwJfRgiij4ir3rx8kqqKmuGgsZJScz6FRHrDVYJTUHMtYaXrE91rFwaR9kaDHNL5xfYTywMvnw",
  "key21": "5TSUVHieK2gtZUc31ekAk7E856uj4jQinKxeGGjZaYjgQHQqWBBpVQcnzVo7U243pDwyaG1YxT3bCMkVNQHWxtZP",
  "key22": "3C2Cba7zaNATFoHfpdvyfScfi5MMP8q6kJTYT4wmsk6GuMuMXDijKA8kqd61VmwZXW7v3bzcsv1wZCUjvGQF3dXj",
  "key23": "2w4G67yYuoezVLkMxe79XDTAphhMssSkAQGJbwc9HPhNvUC1tkUDt2KWQjD4rNuWYcEv43aoswBsyS2HhYAEU8u9",
  "key24": "2YJWoKnVYJyoQMjjjLXHQ8qCknYmgPEB7wLeoY2Vo7FUehBN3CwwUoKiXQVd6NZF2UergW59L12JVV1MGU7KHMtp",
  "key25": "3wJ7f7BFkyEvPZTxmf2SnzJT6kaztyLUNMHaDBpauPNyxQHBG2Gkg6z7SsWyThoL7b99XQGxYdCvaZhutLwCNDP",
  "key26": "qMUK3wyryMELfMLg5Rk3oR2QTz7B1SS1UcTP9iGyt38XRsBuk1MjqKRQU8vvwmhU7gwE5QsbQXNqgvXRNDmpJmR",
  "key27": "ypiH34cRFTpX859LGfcF59MWkzxr3BNYm4Ca1nJgKN8CVdKXAKbQ4j6CiHdsXTMZmyHX6naqT4n1vaZzh2bUYBj",
  "key28": "3fHVqmRNKjePiWBoNSc1DokwuSuuNz1XEVAjd3Vrvbv8qzp5Nf4fBQPmDbPXfJryyDTJKpRXvDyeHdDJ8kuUKopY",
  "key29": "5mD5xNG12BYbpgdL9x2xPFwpmv6au7sc9twkBJKet6iuVj9ofVVU33hgEksawCU7z55aPVwiVz7zokEWmSnnmtPk",
  "key30": "2zbhdNyUgvzZfe3Gf1c9MAJuvXW5V4KmxfQZ9WSMKjCahFtyCst1inMcDxVquw5CZN4oCmxR9WDHT6jyLXoyce58",
  "key31": "3VhZ6Y54ZxEEQ19EL89upqXcvCyetTHAfg6NL6PagV9mDEoFnejBLNCycuPRBEJXdWtjZ3pnUTF69KxcQHbBV9w7",
  "key32": "61rhuLr9dmo7zjCcMyxTQMbrpY5oCdUwxZxRqXpn6GCvYvPEpERQoyyMpZo6hMDmt22RM8MtvD8aZ5rBXqyxEqZx",
  "key33": "5C2XwWZUbLrdUE6ZJAyqo5FGVfTTBkvHGSZVJWKchLnNPbcVMswVpNoasFFfwX8c3xYvhdE3wRuSQ869hjD1MVJu",
  "key34": "3uz23kMoRBpjixJTGFwrH3Rr64iBNfpM4hJnCk4gTaJVkCrBcKnG4MShVEJq5tA7fLjW5xhbxzUfLAxTNYvFKCvb",
  "key35": "3aCZUdL8W76iVfTGJBspHEA9YoAy33rdYh8RxUhLrQsnwtg42B2Ydbm6XCWSCUpJ9cwMnvCHWswZyHHvxpU4gv1T",
  "key36": "3jRmpS51hfW4XppasuacstzHXhsbwUy8d3uCdy3C1vKjhJmPkzg3UUEu5kWWMqxigKsdKAi6DXRgiypUAoq2Lyti",
  "key37": "5BNh3PNqsmpT5TC8DnggYomYQrfvhD16jFRLAoMbeSL2YSPcPqeUT7v79qwqtRMNJC64esskiRjDj28B1pQa2jnR",
  "key38": "5SoAcxhK4E57wDa3s7yQDb7cjkUeuQBuPAS2dFojuFayZYBNzW3AbuWf1sK7s16JxSe3JSuqXGhg1vTNSZDNLU7K",
  "key39": "4DH9JReXZUEPrzsEtZG6LwhBZHRXNJ16sGodBBcLywvUgiHfaaaEH4sTDRHomGXQJxbdankM7PN1SBhGVvmi4gq7",
  "key40": "5iWFoMeYHtJoZ8QNh16q7pjZCKEGdtW3HMu2tii8tpYY3KT3NCFtwFhUN3f8GfN3hV3EeiVt3WauEnHCNPUR3Xec",
  "key41": "2PDojhhvP366T4xLwDpyg4nRaMYVCU8f39TVScQDvmzRVad123uL6cgMktnYVEWKVsN3TQhnF8mAqsoPYY3SHhC2",
  "key42": "5vps7jEaW5t9GAn4FS7FwVsPL1tBTddGBFcAjQQugKaGR7asebBnaWyWNtyYw4QJbpvraoknyvUsEx8hDYFmWphN",
  "key43": "jnTTh6JfjeHVTSVDv2pWhY3tpeC1oqBTJxqBSMw43dVrNDLkyAngkMzqLFPasU9y4xWzmde3iHdGmBVMhTV8u3Q",
  "key44": "7ZZkShcnhyjRWz3okfK9Cgn3G5CNFPNGoyT3YMr2jndiJYyFSVQ6sHiU2mjjksZ1zvTpJ32oPKeUdUL6fGB93n8"
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
