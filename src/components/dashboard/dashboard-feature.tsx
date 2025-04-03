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
    "2SSGyZbu3oG1zdekFVbFHxdGc6pdtGhCjjQoXrYn1LnXrCUradoqrhKLCGYh5vGz6ea8aYW5mZNh68gZZt2FUPEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62uuDqq5K3yh7EbwS2KcdQHAubosonn9eypvvvbwxkUm4Euk2t4VtenM9EB66SUgaijx3tnGxnWKsFVTeZRHAB67",
  "key1": "bY7J1mit4tvd6AmsTFASohPf5NmHgaDuqGM81D4W1yrXc79HX5TtEsvwq8AHNR5rMKVE3WM8pxtYq7tjXCPLW54",
  "key2": "5q99vE2PMYWtK2xumDKRUe6d38erj4bceGnnhy8N5MdatwhsRBtBM86jkRazSzarnvxK6fYGxQgJkVL28DXvLZmL",
  "key3": "22uZtaDG3pfFintP8hgyy4jWm1Cs2XbQ1vM5FtMZWKM57M5hvypUntPw3UafgXUoFXoEmtSrVYPAK9Pyw6cokyfe",
  "key4": "35hFiY49NBtTNwUf2YYRBRg17ATj23E84wjTsDrigrDVP9rUvtTsUnxfUkhkXrJGas3omdU6Lumkjsf13cZ36XqZ",
  "key5": "zpkdudXi8ZmDgz6Hz6WKyKiu3daaEdDiQ8K59tcvRpPcrpUD1bx1ZAxXEjvZDrxTvXhFo1xynZ9X4EELS2kAwFy",
  "key6": "43Aibg5oPqcz7wgG5QnfGPJJp7eU6bDdW5p3MSz1oBrA8MJRjMpmL2ywoCXmEb86Ya8QiqrcR2Q9ACHikD7SsvbV",
  "key7": "qHB2NdSg7zxz4KNsJ7iVoi8RwqpSrG8fcthPg2ZiFYwCpHP1uZ9vhyeT9MvLQfmRyBbneDQuxL8orboDcHts5MJ",
  "key8": "4A6T3aacdtLsVWfDDpVvfQgvvC1pAzwhSSDChTiV7ytZ8Gd4n2RTgqSbKJaAdJtYyyWs2eVVS2xKjb62gtkW564e",
  "key9": "jmKUPa9fdKLqpyqraaMStPptnUKjPa5mNzVcXBmDQwjTcbwMLD58KaD9c6KxGNWhPysjaEX9hfDwcNhR7Kwn2Sz",
  "key10": "3FmCkRjPH1KvG78RSgoNLyiojpEvfUzFwRbZ2NmPr9rVrGqaZ7pPmh3ab3gBywEpF4vg6gvxJpxXTMiNZLFJQAQT",
  "key11": "hYg6WzZaDdLX21M7PMvhMZp89eo1AAvspiCCMvtD2JuQz8fycXRTMZ5Qwd4uXxEg9BWyj5DVTK4MufFDx6tusPC",
  "key12": "5jiUZpfvUa26Sx5zEdnCTFWU72WQU4grMmCdCYDKtHPDMbreEJMaX63JQtgqwrEL6GRnTLfKQuxV92PeieETVqWz",
  "key13": "5tB11oiVW8JBWifr5uBtMY8JYeyjBCbbwdZV5vkq8D7jieCEssmxTLmkAwMo8RLhRsHBdnn1jeRwgmPnCF4sSKq",
  "key14": "2LjKqvHtcVne1Lurnz2tEEu4ryBcxbGoMTwr4NWC3NZME4Sq4hCb7ErkDsLnLsRMaFumXAh2TpqpYAShjAd7GQFZ",
  "key15": "63EV5wx5nEp4TP7uKMT5hdFzaQE6Q7aFwCkPaqCFepvbyWPX3PHTW7GdwFEqUgeR7qQVJLZHFJ4JRSneP8yEosyD",
  "key16": "5vGCSbaYy6uR7hL69CyM1c9BYTtRxyFvu3GJrsCE12TqKDfnwbuKDuoFkfqXk3q8u5PvfkJcxHZ82sp4SfaueFqA",
  "key17": "HamX5Pk67hDpVkQc4DPvSojSKGxVGMH7G4Vmwn9U75tPjmyyUfWZ6dP9chVbo56L44D328cyp1nvaTEDNzYAMXy",
  "key18": "7ygfW1gFLZkSbAUA1HmDBKN6aBwMpmEhGZzihr68dWHWzsq2Ya24LTwu6HVckfMjy6LBeUkpvCKPE6fQYCLnTxe",
  "key19": "3iDrEUF1YvWHwMjuARQSfiSeMA72ikPgTtjC1aD7ZnANLvQSjqFZTUjG8hFXeBC3rgMEixh3Bvr3M4AxxJ31fknT",
  "key20": "4jmYttxY89M8kA8XZMGppNfFVFAGVxzFSKC5X2ZuuTMGEGw3T93rXZ2NiSVQogrFThveu2QPgFW61jCMwnMQrjgB",
  "key21": "4KFbxqLaknxkmNBrTwYJD7RG7foqVCYkmX5E8shY3qMNXFcGPgZnhsukovUSYT1ntGNe98yTGCcDFpPTBHMcC7Xd",
  "key22": "4bt1r4dkZryBMtcHuvL5mK217DhHt9ZnDrAzzP68ywpWSwpw9tkH3gCn1knixDiEz5UikAqDYSWFybPPLC3mpnBw",
  "key23": "4avbN5L3R3YBMD5tfJtRfw3eLH3itRehSXn1hToBNNwW3CjoaSBBZjf4eQwdCpMhnd1ij6Ucciu1EUWrBA2XnCRf",
  "key24": "4EejRnsjsBoS9GdULrMNz3cm1CjR6sAZmaWwoGnz1QGATXwP4PXrtb3oSUAR5zNt9f9CfrvdLZ1HJXWkKd1ATtYz",
  "key25": "4gQt2g3cNPXRSC8VFp2XGDtPRmxymbi4RzE9DARHeZUajmioib3XgVr5w3BPKtZDB5TncnorYeKs85UDKENbyo8J",
  "key26": "28HBRFsCieFqXeLuU2FjC8ctJMDCh4n9w49C5KLJ3axxmKMJR4r9y49MQxZm2Q8zFDEZycaPk9U1MNMjCfY4TkJ1",
  "key27": "2zfVZb3B1bMXrJEGuwnRZRQKZ6g8FnV9mDDZ1mmdJeCYwh2vVq362ko2NYyQMhgGntt5oLtxPtXzaqyB3PBLryim",
  "key28": "My5G2S1Pe6VkDavipDQRBriENRsjLEHM2bPs1fh8cSiXdSMVA22nks8Whtb5bTSpmqsEXymSm1LnabbyHPUcqFY"
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
