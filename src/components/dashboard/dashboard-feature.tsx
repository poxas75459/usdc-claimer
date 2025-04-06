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
    "3oc1UyTZGASUp6FCd8KyjuWYefe87EPPQbHux9tbLib88E6uesMC3dSw7yz4PvrJuFFyWmHkcVsYuuJJMcPfHRzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XAomvJSqqW2m24Ue185pj2aaJ4xmbkqBBzJyKmbRF1V1jM8aMg6a7NLVhzHh4FUCVTcxdMNcr3G4FEfkboTVzV6",
  "key1": "42wW7KLYqAYy7zxeHWEApGCivrVZVJdabDKmnidS5uQNHsiDYrirdyPf9xdZMwkdBuboTQZFSB4aTcBrdJekWNNP",
  "key2": "3q1vJPeTsAJ7cFSAxpfWJvekfmgTVAgkGUKgNhEFp9zwXmQ652BtFzQzaTirnarDaAkGGpEA5HtzakC2DeD48FE1",
  "key3": "34ybV9gVHM4mH9a6XtJiqb1ABVHcNPFX3J6S4bTDP5VmeRfCtydf22MA778c64QnV6qrVe6vpRCkMx2EAodVx3Tr",
  "key4": "48v87EzVDbD23yuAyv5LdsMKgiBdbuxidVChxP9eVp47ZTcYo1aarNuH4YKPhcyc1PchUHWnQAsYxSy737NwJrdB",
  "key5": "4K2PzctLCyKwhftaZMAVrBKWaC1e12v7fjNW9JY16ugmCrL6G8ngV1JeBwZBW69BBD4ZPxQRn68q1iC2BGttMRam",
  "key6": "4y6cgcty5qDWzdyiYqXLxQYEraMMNbza3wAqJJjKSoRtkpQV7AEX6SYJf1i6qj1gMNKvHunG3tqgiQF6Sd7Vy5RL",
  "key7": "5oydm9D9AiiJtQndKmgAYufMXaZU8NRPK1PY5GdypN6sAJ8y8k2BmyqTArSXpFDA8wUhY3YP47RzJi4ynSe6DbMZ",
  "key8": "3bZaeUGWYy95PWAYQsX5ncZbg3BJo2mgcZmT275APKueBtQ8YK7Da2VLk4stSwuhY6kP2N5KmkPr49TNyrwokjRh",
  "key9": "64758BhrWNX9ZJdzdL3qDRHeVmszhr6aC1VXQoe2zg3VHH4VDcBUzYdLpTrsQ6NAmiSTpdDQykCuoZaJzMNMzuoY",
  "key10": "4JvuZoXKbJFy8k1ei1XBsync67nFYpx58FmMzPLrQmhkxNYhqm5bEGjyTdMC9YAx7eXUw663qrnEb2xWdH8S65To",
  "key11": "NYTNwcAnmYjrAGGLgCNhCxderG4Y95t3FcQJhQngvGhVcJe8jAZm4c3Vyt89AbxnVJHAxVnD1ycbys9zwKYEGXk",
  "key12": "5yo1EFuDtzJnf2sAxH4kRPBxFJbTW9DytV1fwyQFxoqv9LUxuZxNwGsfdqJF9K7cPhBwRDdTpgQXUfcFbJsG4bPD",
  "key13": "21fod7Dc2WXy7Dbv1kWn7dnuct7LSGr3pe378utTbHzW2tLKBAwVRYmXiGeA3EKVSgYUp4i3tYRxMKF8cHwxjJTu",
  "key14": "3yAtBKF4wD9c6dNj8psBtKhXNBKQRhrtqCndLvHP8n25SJ1ffAhamx4PpiH7kB81FjejQ7R1HkioAk5tjbVf3AyT",
  "key15": "3Kxm7FYhn9mTnndyYUsJPbWm3jFp6oZ9ForgGtVB9DqzRjSFE5WKrrxJzKVPNR2i3BXbjrk4r1jAsDNmyUPwHX1z",
  "key16": "2GybgLfjcH1sXmXgVecxaoeqHajK9ZFmA1PoCANJP2hysTiA1LjjTUUQA3BJZ6MxbmPtqg6SwesRJC3V6fsca6Xm",
  "key17": "5JbZyyQuFWt5dWovUQxdWNW873qrms1aE8NpV277kvL1M53Tcg44rkDvm6uUt4kBN2LueNxiJV9JAtGd1dBmwArZ",
  "key18": "37zpdpZCryYtkH5c1oR9sHcFr91DzC38vssdyAJ77t2rjD7VCCBSYQmX6k2KDbvTyhzvxApJZiJW55Vg5tF6nJ2N",
  "key19": "5DX1qYcQdEbVBCZvuHr3cJJokVvE3RnYcg9JLAx7swskxLcxUz9iyVB7Sd5cAvXGmBaqYd1ecA42qx8o7npNytNm",
  "key20": "282AHTVJBSyU6PG2k5ZtaSEfRZ8e64RevoxhKjUvd99oW8Wsw9ZEEv5WWGTR1yhV7jNGhy6Mz1ZWWJbAMJdyv19e",
  "key21": "1XCJjVM9ST3mYN2setn3aVovHE4F9PFaSctSFWy7k8HzYrJe26Br29SrkqxEn4Hyib7a1iV4Nt6YdqK18iFUM5R",
  "key22": "3hvuBEUMTTLi6eFddmRgrHCT11A2tb3k2VnBfZAiBKf9H1G5CjP5j6VDQ5xnYdJz7vDj72hG39HXUwuZULA5qTP3",
  "key23": "41rjNAQAuPVCaqKkBZkUWr71Tn4MCCcYn6ANyoY7Z3QyzCWRu82qbJaGmQZdzR4fMu8sxU5RCgKzNRGggu8wNZxo",
  "key24": "4Rg25pzHA4QG543QELJ7d3tnRv2PP2eeTQkKAZPfaecMFPLsPPEYqq9jBiMP23bzdjqYHrVAWmkuW463JSwJWjPE",
  "key25": "28C1r3zK1kbi2EwD5oNwYnMKpQU1ybw7kgxNkn2XUJWkfqPDpshg2ChzsswKqA81NUxnet6fRmz5KV9BuPgLTbKB",
  "key26": "5HuGK8zTk3YQbrVGRshhdhHS8PttRYPmkD77RCB1r5xU2m5UbTCdugo17wPbZB3Y8vymajBksyMKwBZAFD5Emk9x",
  "key27": "4ZVnRfE7KBbhEDQTGFT9FDZTEQNynSZVPKXE15wzKZhVh5323UcjZ4vtTWccHDYSH6oGf3Wfytnws376v8sAvDWc",
  "key28": "4vqge5kwXFMUKE6H7nGX65r7Qc3RAnQMsud3kbJZ4igkWCFeP9jJ1Z5ABBcdiaDp9bQfpTzQ9MPRTAMPxJq5H41z",
  "key29": "3HmZj8UqvDkUJKgAo4UG7BFyGB7faEZeYqAuprhyYBoBTHKZzXNq2VSGoUwfHycwdR7p8UQ51JQn7ySHUxsw7oZn",
  "key30": "4z4DNewAN1i6yHXsZLjkC2bNe1BudSLMmzPZVzcFQPWzqrjRmnJpck4iXE7nbD6u57qRQEzYSrQams6TqopUEWfT",
  "key31": "5dd4rGVosbMpSBpHhfQj7BJeZjdqKVef8v7qZhc9oRcnsu8bQBBiBrEMPe4BEooE6WvrGCgMoUEqKPvWyGFf27Ki"
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
