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
    "2ro79H7fYvWkiD8qvqp67UcR9b2r7YZpYEFNoY5zHJ1EbbR7QunVyA2bD6M3EEuFZe7iDscuwi2hbUM2sxF2jJwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z9JQ7qpPbzcaycgh2zXsvEqurM9c5FnS2y5sBojVyEjQxpuLdyjXbSgQFJo5u5joqPR5L3WWeBRntcdN3PqudF9",
  "key1": "22DV445bVFDMG69wuvpiHYvq7LM15yS18HKNZDASdACLdxuk9Y8LCBNYzo9fprkCbq3nYzoQ1NeT42uDyevhmfVC",
  "key2": "4BghiU4ahmCP3yooHvL1vAsrGPohoBtbNnx1nvE7Sdkv2qrbTfSW6Pcb8zGJxMts3yyfKYnDmW2VekYUau57XNDh",
  "key3": "62Zq3VB8aHpn5eUhK661cit8tfrx2wwGmcCDTSSsj3hVQTsNXHV7ajuMQsfBTeXi2qACr3eWwDEnFyhtFecXyL6m",
  "key4": "adiHJkx2zCW6XTQdKFxQoxvhTS1yQAcNvxzvWBzh6ARRxNZEjej5uELx5ar9r5oAE8rQUJYh1ztscboEZoDowas",
  "key5": "4kzHRTTEzHyVStEg5885KnzRJdUWpDDrHYubZzGAPc54qiPy3HSsPoFaXm1xDNb9SVBmTS7SjEYvv16nZBbSU1sE",
  "key6": "2KjiKriSkYY6EcDg6brxkwwJUVcfEtrAu3awNDuQsny9NiKAfVi2hUn4Viku5m4THrcHxbxs57XNjmyJfEG6Lvv5",
  "key7": "GEu33522b26a8QcsDf3e919RVN7XRThowpqnWxLwuMpa6yLWWmB84gGYKQgsFfSZxRrWy7uNHeg1Qq9UBWvuvQP",
  "key8": "5pmcbC2DtWR2MFWqoHgrxBAfHKzwMKZreEsM9mRtQsx5ph9Pm8qmNHA1n8Pa9Y8fZfMA7keg2unoxDED2AU2AywZ",
  "key9": "5CnA5RP59ZBYb2W9GuntjmjtnuR8rSC9vgu9CGeNVd2egkfzKQik3tDxHdCTAhqezVvR58Cu6aSNU52yPojXhwDN",
  "key10": "4iDMyXgqHbNktZu7UeuFARh3z8tmq4EZ4xnmHPstjYY6ip2nvPvgYRWw4skM1e4kCrdwoKH4AT87RyFDfvE6gotm",
  "key11": "5FP9WfmYcpVHAPaFEafX5RbQUj5ayBwSWMne5cb5px7TX13vzMcNDQr1FBNb2aNHKufUZNJB1gN3WCRd5e2b84Ya",
  "key12": "5qANTRGUgJbwzyAyXUwY3XA5HSVAgbA4eEhW6WKYGJFyyQT7egdfgacmnuhXYjANxDzL1sE7q8Z4chRknSNr7y7y",
  "key13": "3csX5kAcjCjBXomM1zVD724aR2aDCYgbSacLNUs7j2bY6sFc3L66UGPk95vGnLbtDeagoFCsPB8CWDVGmCDFYt5L",
  "key14": "2K6s2iMkGzJDbMPmNq1KBMq82mQ7BDyevwUc22WW4r3DgxHSDgfkGmRbnSeSJ3iReao3wKjBjHwZTYrG6QGxhUqv",
  "key15": "2sxFYmxShqQteQnd1SVou7QHbCpdyPQARf7SqFmxPFfbEBuJMLjqL7BNXznDD54DR1uwzPUjmqbNjFEv55gVCNME",
  "key16": "hRpeAmE6RwZwRfLBU31D8wBAamF46EznVNvg1XA8YU8hbRo6uhd7PDyUSUh3YDEtC6ENiEtdU9sVAgJEDWnSzxm",
  "key17": "zM1ybGRPEYgbFAbwCNC9kE3jBsX85jTWUpLtGaSpW3EzeY7oxuyNFtX9m4jZyByYdsL2M6rdBKqkjngx4xAnN32",
  "key18": "WsxFqQbgGkrU9CZnd3QmsNgZdrU1MfLR5jAB1ZNQdirs2v3aXeJU7vYywUMAMdYmpv7b4VET9YmLoXSmkFkQU79",
  "key19": "wbd9urSQbSfw1btGgbLijfPaywfQ94ER5sTKoPnj5tXx3VpwTTHjm89zbK7HcrYXGDFpGXsC9b9EmyFktxDq2Ty",
  "key20": "5uNW1SwSR7ViSacqmDRqaKUuaW34LTC3cwhg5q2YCuRXvi3ki1LXWQ1w6GqD6g7VvUTkveM2KETAUdGGEqTGigfB",
  "key21": "4hVho5UFdEni1L8TVanE4wNVkoUBENT1hMTg5iEEjXjoyqhqWimcnqXMhr7dyvanjDNvQ57sshqZx7bx4odP9wcF",
  "key22": "23K7w3k2EUBbC6CgyeqDzEHerTaigXQa1piGHRXLpHBGNXR9pvTysvmLeo9ZEQXQiTgzWPEaLRNFaaLkuE8drcsZ",
  "key23": "2kCJ4KnD6opoR2myFhCUVFS1F14wiAftBGjDp4L6mQkMCCvyHvxYLvu5MKNsaRzAf7q83XVeqd26n2Bnff5MqC3J",
  "key24": "3Jp1LjgLqZ4DeSdHEZ2ZutktXrEnhmC55NgK2LLLAtyLDh9HzoVgjxQD9D8EHLgwCcrCcTE34LdxGatufAgkE97h",
  "key25": "4kfgeUmowYFFLERs5AiqAvwQSUFaX41Sfv9RspaYfzmh17uVoXPgNQ33ivWpPL6dqFTpafNedZKqJn4VojQkkPZ4",
  "key26": "KEvKfc5wcC2wfvyPP4mHHo2RzkMW2UyVYH1xxX3R5Mih3wD4w3ka4AdaVcugDKqzgSD577kTwoeFLqV62oP5Ut8",
  "key27": "28P22HEwba7Vxoin7YUxm9W7BKeuGpovL5yWNJ7ZMTprv75YfkusGks7TapMxYNHdmJ3QH8vRGQxEcTzaY5mXLWt",
  "key28": "3nth2xSa1nQ2QmGgwHW67fvWzEVM1pP4Rb1ZytgLwhDTzAAJHgQnwtE7MJyAZCCCuXz9A47CrN7RyaR5QiyWTcYx",
  "key29": "4HPgvFu5Sq4ToxYqngN8kGizW3eG2FtmFwy6JbAHPKfUdYx14LM1oVJCzLeJgXTGkJ4CC3uMWgCb4TM1mdw4WE6R",
  "key30": "2ZrLyswBZGzTnSpQAQ71sjRxu6ayxPydzZDF7ChY47qKJZbreM4wS45zwJN3zmzx7uA2nyfipECNEFMo3WdNjPiG",
  "key31": "wrmjA3sVDpZ9Ufhbtz9vTfVtQEEBttpW48Qj4GFFJXf1U2VxkMwpxzp9a6x8yK4wQzkhfRc4QffTKrrXDtBjae9"
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
