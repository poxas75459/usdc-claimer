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
    "3Heeyn9KTF9y94JzPsQDvsxd2pZGoRNYuv1wgDkTxTjVCESwramEbkRvRPKjNfVZpTEm3YxTx7JWaoh6VVfjPaNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "125wxrJxikpvvwC7p6KgwakoyaW5kuSHmp2y1iZYBEAyNNCvmuConXry2tmbRgmLmuJmk1eNtMtYoYjdietsDqw4",
  "key1": "2k1vjjxAjuVmencUgGG68H5fkbCuCYXGMDq1M7kMLc2XfQDxhtEKEaFCP12yrHyiSUYPJycX2L78oWdqWt2iKbEm",
  "key2": "3D4UUcvF5crVFjwkkxemfmBjap2MfRzbBjDhYd7nKrJzfShLnfn9Coi98W8dCfRpmz8dmBz7QSKrKsdBLKQ5SYN9",
  "key3": "JE5ZLPY4AT3aNJkscYW4GgV3zN5D3HPF28dQUmuwt67iGYe7Sx2taEeohwbuUH8Ba36JQY1BTv7RGAt3RWzdu5B",
  "key4": "28AbdiLm9eTeAHdekuYEsbWTg1jFxxCRCDwXJTaBpjZCcPb7VXJNUGPREw9aXdFNGQXbU7PpyCWvHjHJNP5fvN57",
  "key5": "3s67s4SZofFv2qq5xXku3cePdp9cNK26MLhVnZwPxMBi5WpAGn5pzN6MXBPBsVzQbwi847T5hVafkaygiW2apQic",
  "key6": "4Zd9cCQoQhJqSM4iKYzwXQKwzS1kTaihXmBnBuwzCZXDcsY7g3UgZPiPHcJNcg68gZWjZtrtMoLeGaxsXG2MN3Q",
  "key7": "5WTfX4JUGPipX3PSZFv5XhapJ17YiStYeSBwi1PCxCTvmsDnckcCbJTG7x4wybcvWkq76A2GMcWoJDYU6dkMgvLs",
  "key8": "ze8fWofpM5gWTKbstdcforq1q6ZCJ57sDFPGw1mPR78kTp4nFT8EAHW2ZDAiELHW7TPrXJNtAyHdr27Uu3cnvwr",
  "key9": "2WUgesjQ49J3QhU2rxd9Qu2RMXKJwS5zxA4jfWFYKKCpnrd1rXKZiNixva4ujVoiDn29bfguibvTT5RvpVwx1fe1",
  "key10": "3kfcAtXc8PumCrUys2o1yTQ558vA7Hg15keogSU18PT2QhzeoUwAeX1pCxWBCu8UFP4CwkUULqhewHgpE2mPDv4u",
  "key11": "2YFxDZrNRXjYwuDy8yVW1Hu4iZYDVPBzZrWBRgzyJFVN1gBbLU4mhVVe4ZL7nhbD9gP9NdDAVjXmDjxfMFqb7WoK",
  "key12": "TL9r8A7oo7gjHBi9WCNaJDSN2YhjJHNaRyvSB4bxGqiyzYCipsv3ZKyfPcBxkJNjeErmfqqBwZG2WTKLif4vWWU",
  "key13": "4GFDshurNihcWTFVfZDf6rvgdsrpJtr9kKYp1NnLP3c41gpJv9GDnegEybFmm6UA3FbGxumqBCuYGjyMspbiyWPy",
  "key14": "3eypQGMjAsqSxopNxed2uMzxTsSezmQMS8UDn5o4Xqk7yqF2Kd93xMbW9RLrbduijLNezbUmyn3hLncvkVHQs4BP",
  "key15": "2zcbdoS6d2vptLdH4uHvs4XpxwowQRMsyzxsaDFZfmdBwC5STgZsDCWwd275byCqMczYDQyyUsgQsNpsEQtmFYbL",
  "key16": "24dMU7SB8cWptutxBiacrubpi6kY4EnFZyVkJ4M1u4Vao3huE76Tk2nfFwJ4K4BjiX4fZt8yZnCm1vLxzmD9ZR13",
  "key17": "38yNGptkyh2GNESvi5bZPNqZ2h22h9HafSiLx6VsJBjiotUJ4Qs26xhfTxLJTtnWuYbzwhN42Pzrx7FDSaq5PoLT",
  "key18": "4RuK1zqFqimtwPN8HqXv729iW8wbScGY458gTvEUne72WdYayHniXb249Kwk9ThEAJUmWf5A2ohwvM9rP54sw8Gc",
  "key19": "2NrN7VpxmTRqkizBMQRryvjqcrWy4nFHuWWeevjpCiw61rszz6AWvVZmwjoQuHtdy1AZ3pzkEmHengus3fkD5TsU",
  "key20": "2dLCkPbt4urb1G8ZBqP6YQ2J9qsDM8k3cboGJ5j8sWiQLz44ezvfCSjjJX2J8z1pGpBf4cXaCiETyexrdFpMu4Ep",
  "key21": "to63qNvn1Hq6qNX75MSP9xeL3eJpgKvXSNNzFAm9VAy8TmyzQ63AWajs7GpbcB6rXBtAXcA248BPLVs42P5Hrop",
  "key22": "2pck5d3rgC9hWfb13U4poSRKU4aFPhw1svFaYmFwdkuT8BYFjs5GmiBNh8UUPbbTusexvEEohZfYoUFaka7eaxyL",
  "key23": "4q4qBDFfxQJckmq74fhRwDo3Y1oD1EgRZSQqEpSLxC5VfC9SVdAkYyeAbRoma9fJSw3A67G98hHYfZer72NKZiVv",
  "key24": "2xKJzJqLz9AEMtjLkbKEx3jbPu7HmSeeu2gju1jEsB3goqAfxg1seW5F8MmFGQ4vLuFm375E8BqopvNXxBg3X7Wr"
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
