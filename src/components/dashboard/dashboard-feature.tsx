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
    "tQSDP2RquRbs2fWhqXjzsLLf9rQogNznsW21n5xX2ynrCBkbkUgY7awYFCAkPkRQkQBsn9FCsG7vHr4tZUuivpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e7vMFKLksmpuEPmXykxcqx8TxyQoEKJE42mUupYs9dTD3sEFxf2BiowYqsoVS6K1cRinSbciYeUuVwTfrWMS72Y",
  "key1": "gjCiJizh7wuJ5GdCyAPxNXzJn2VJoK4DLmxA4R1dxkFSpqtVnseivgLpXvkWkYEnCTGLfD3BZraXbU3rUXdqXdy",
  "key2": "jyymXPaAHMKXYA7aWUhezTw6iXkcKmB9mnwoHqaby5DnRQ17ZG5ydQCxYU7aatH5rVvC5aM8yqHDb77ahVPxwBi",
  "key3": "5fFvyGXpE47ovwgKNzMX5pftXDL3B3rGRVEpQztYm3sqLDTL4ZE8VSMKhDfVHDQCNZn2544ZeBGbBxXbDpCHXvKj",
  "key4": "3gzoAGBUBMMcVgpHfKK3AzGj3Aq8Rswz7Fr2Pj2x3vPbvLybDoCo9zehMKFZUDr9f5oCN7vTxopxkKrtZpDcmKMf",
  "key5": "5kNWU9ddGNmDim6QNsRbFpyqdvc7pdALpgReTEY2zR7bKqJQmGJerJg3QHX27rfL996DCnSSCpdbakZMWXPaW1yo",
  "key6": "4zfs2S7v2SVagNYjTQQckquq4gm3QcSZBgwcs6NvuyumHzW2HNi9NXFJqkXtqfsvd3wmgjqSkBMQ69PCvdzjES4X",
  "key7": "27Th5CG3R4cRhUdYsBwJwtgwTGQXE6g8srqgbCK4zRRNx97C9Tyo41a4AGYHD82nVyQzoaL4JzNoVGjMrHQdKaLm",
  "key8": "3krmddFNVALmPS8ti59NKgvHR78zQDBT9aWQPDwyXL4gVx9ZeSgq2wbXY9TxUx6JtMTUbB4L9ArDb7kgZhse81ye",
  "key9": "4KnGbWBYE2PoxYFw1tb9dHdtqiFy9b5GR54WZ19nvC6LH8JysJsjpQXBuU2UVNgesES1MEvi1VBF3DD1rR1jDYen",
  "key10": "2sTj2G5kFfQKVHeG1E61faVetinFMCdkhpM5AxccaqBYgqeWJxPVk71Q8RFDvujRtCM4BM3nZfikrop21Ny2BGEp",
  "key11": "4kHPEu5wxSMun3KLyrpGDcAxu6Qv1tniT9dzbjAEPUQHEPUdnnt2goxkXrPcHo9VcHsfGmN2a21uuXa3VydL4viy",
  "key12": "2STjBrGB7868qgNe8DAPHvWGjzNVWTnaF4CkKYYqutR6f8M9MPyccq5faozPjdU7BCEgFD4bMp4wDprkrmFUYiQv",
  "key13": "3rqfHUdryj2gVuJ1FQ755J4CD5vM5mYU7khkp5jxPyRg5YSQQAkZbsdPhjwVtgBgZifyWDymZd3J9weMb52WbKQD",
  "key14": "2jXAi9izPrtTr4jYtfspuJHgVJDp71GNXazxt21ahuzei6D5SpW4XYLa9J2nzkpcEPzCKGLM3cbrG8sRQc6R1xEB",
  "key15": "5YoCAfrAP8wZs5wRUBg8PgvHREzmrTni684waH5weyAZ9GMWCVepv1rbAg3MsZNLpLP9ijmmBWZfrwF86rMTWo5R",
  "key16": "4dM7JyC2eQeFhy6mbYq7H36A5cwDHPZwdiLcC6nAxiVbQNntuFeysag9KDPPs4sYsozApCaBrS5s2FBbxsf2QYwT",
  "key17": "5MdKh5LvbbLwsEFarXKdDW7VEBe1JdVHrBLDMqeCebBnUY8WDW6MqkPpGpguUEDF3MSMimKoeFVNZfPbmmBx5Wh3",
  "key18": "3EtCewhCgbncBs2PeLGd9wzdmxSp3GuSY4ExryxBjtDa5J8ocVvgCPAzPk8aq82hC6H4TXWmWrV3i5pf2uR4743A",
  "key19": "377Tzjq9iExEpBjRTCvbct9uMgVZK3QTjJ73SgguVgbt8VZrPXQRWe1N8ATMxhadjxJMHxfWYjJY8TzjSCsKFU1z",
  "key20": "5Mfmu4rfzgRqZ6tgcSg3pWzEFMSBKirbcNr2ZK1Ah1aGqXGeFidtBj4uDmxrqhmUzA5xCYaPX4wyeC9WGqtpAbek",
  "key21": "4eQFRaYPqnJcRoShmoKCAVDHq9qPhou2jfJV7SFzT5WotQeEm8E3ZavcLm9PegPLcgbSyKpWX8BtThT6dDBtiFfm",
  "key22": "xpzCyzLnBSxdgPZcKQ2jux6FREhbjsCGy3ZBPyUfuMugdKLYZfK9CHavhdA2NunbY8c5U5p95rG2pSUBqUxzGqK",
  "key23": "2bg4mR94KSE5AMtE1YzUyXqKQwyMJc5E65vjWPtiBWtPtZAmNNDgkVxa5HxQqAgkEiDGuozWzgYNFuLitNaHE4RJ",
  "key24": "4Jjw2oaeTwB6iaMbzKgLNQ5ekeL7uUohkZhBbH476cc6DT3KeREaWVBfPcM6B9RGqULt4xGdgFDJsLEPooQf5EWL",
  "key25": "5BNXwGDxMm8CwQaHbnyfkwR62rCac2tVKhLwWWcJXTPKraLQPMrvAnStjN1xdhnaDvARWfWaL9QbetRbpYGwnCa6",
  "key26": "2kiEJHG6YwvH4KVQtpAQNYT6YX64SALHdeoPeBXvp1Zq8BTUn7TSBZyHVSaD6byXQyw5igzQ3qyDdtjH6tzJY1tZ",
  "key27": "3NuwGjoHzdQRB1RFVPnm9xhk9VT66pTWANk3e4nqrPVAZgY4ma6eZ1ij13dnodUAX1d4JJS4oiuHfpQ3HhdYn36G",
  "key28": "4D5WwR3jJ6Brim9cH1RjfRimgdDz1ufqj15P8rYhN7WesXah7oVh7jvhLKJjqXVxhktKkpUyFfX6qUrkbqigjxBY",
  "key29": "5wLS6bKZgqHX4tXQQBMDM8HZCd6jPWFQjxrzBQuUwC5How7EpFoJ7nBCayW8VvNpeSEKZd985qXEHds4y7hzYXCR",
  "key30": "4sArmYKAXXknFKzkVNifr6DdysnGBWQmDjukCsftr1YAoSCVjJ3vLi7rwcxuvoNucwQG8nkr5tYJDyb9gV7ePRir",
  "key31": "4Q78sV7BfAuRbJdmcsYV7BCFQ1KGY4iLKyQHbPRnCgtopEjh2MBFrrPw23u1NTKxgojVTfMTn6XoZJEJZdsg5PXq",
  "key32": "3spbmdtHGRLeVXDEM1BiXhwJDftqSNpbS5ZLMXTiPjpFNw2Hr4dF6outuZHf7m3V1rw618pXZ4S9AqhrL5gD2oTp",
  "key33": "5sFXKxs2xXdP6mqEg6mL5uqrh4kN91ky6pUJdzSkGcGAccDdUnJNbhusRTCn2yEEDuJsTpEXCHPj7jDmxsUxu3Yu",
  "key34": "5WrbRPZWfEUG1mpVHSaz45TNZSCwSaubP6Gk5kzVhx9KbdTTLFHXCjRMMY2mwNr24ATVVnoZnvg9MoQomyNUVJDJ",
  "key35": "5iAu4hHx353tBEk8EGQnQ13gcSn9XjTEUq68fE8hKgPDfPcdxzEL4G45r4VnSczzP1K5YyXTqiUh63Rp3dAJAL6X",
  "key36": "3bvJP8nJiTXRyuytAq8UERPEKmeL7N5VcWznUavekKBDa1JSBe1nVdd5P2ZjcpyMSaTGsmkbfovWszsF5uaVkuhP",
  "key37": "EwC7aCwUhoVDu8a4HBud9a6CQ4Vhz3PFR9C7CwdLXv5sFgrc9pGACcD2yHmhopNGPxDdzNBNFLzvA1pP4awxqUV",
  "key38": "2PiYbK7QUTTN67jacFdRNkL91PVk2B2FfBR3bq9a8YLvauVxfRzrqMv81rfojfPAEqtRUqA76qQShdDN3LkqhqbU",
  "key39": "23YPrTap7df6jiKCaqnr6MZoSjQqj5b1WyXPUYp1up6a1bFFb63QUFbP8WAbw5S9CWpxESozcyPBeGrS8w9znZQj"
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
