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
    "2NKF6hcpq3cf2B2ngnrhPP3co4YyMnRsTVCWnzVe2EMHfTQeJf43zjDeY4eNxCyyrssx6Vy99gPyUYo98aS9bpLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J2rPzQozLqp7czfdM1stAhW7aQ8G1Hu3PbFNULxUeuZZz2z8gZdcuLwBWs5Wo4CeRkacQ7bKmjdY2vMCreQarb1",
  "key1": "2goVQNCCKsPusvy91USP9qXzp1nqWaeMn2Wbi2BKTydVxVBaXoXZrZjFo2zF8ESYxNBuew9FSAYUDRWCxs1Go9kZ",
  "key2": "5LRyScfL5YSmsochJN2g9hTZBhXoUmNuSEbLfEwiECckPjbW5AhUstbP13Z9zKoZpmD5e8gMfdiBgwQH2jS7BBUF",
  "key3": "sQtwyYhepFx5BjRuLueReQpu3Jp4wupbmuXUNf5jYjUmHkx6TTPTznSJ4GGvRfnenPj4RJQbAVdja5naWBFyKwt",
  "key4": "4mnCuoBWTQbCsquUM74kcrSpD6QDGDWcvWEa4Ezqr8BSgfYjv3JszCxtfrsFrZUkmcyYimCyEVobnCgTyYtwdE9Q",
  "key5": "3pgx8SdHYuTQPaWUbtuZNdDbRRQYSgvfzAmj8aT8K1cXZLP54C3HA4Q2UuJrqexvZFyykqJztDWYypkh5fBF438e",
  "key6": "21aknkgpmoqBkY142Z5J71kXYxugHZjMNsSfykW2fZcss3KKC9BxsvXvpikBJCBzQdduo1iv6W1zfdfbMZzU8HPL",
  "key7": "3pVoK7VR1jg7pTqyHqpWuaVoJvzhTTv4Vk2pT97JdqfwyRVoKvpFwuF5z8T7Wdhm5YtZDzshXTfQQgh54kQnCXyz",
  "key8": "Rxnxu1P85JmQ919EsUyfowPMTiBQQqyUDPpRnfo3hP4ebJscp5oTHKpQWPs5nNNKbwu6WozFJgcMiRR5V2ZsLMR",
  "key9": "521fNtqDDgWZjvLTdW4kAHWweWgi3MEjWMqMDPC8kY32ybeexfwqASNUprnNq9rEJgD5HT7oKQWCABdq6HfgeNxd",
  "key10": "yJDtf59uc8N1GBBhJGU5mRhVkdeycxEt8r7tc741H3SsiwJSw9RCnfngxt2Ly5QUtfJZq6TgcAx5KQobvEYHrhx",
  "key11": "34JdzMcNUdSs2ujJMp4Zr7hgKcpPJVhrXL7H7vPdQcbB8frVEsc4Bt6r8AWya3B6rQ9EVp64aGt1esosXLfoNWHD",
  "key12": "5KtZY8NF1yoDmUWhqUPMYCNSNCVmHC45UZrFxqouAxg2CbqvDbRjGBFLiVseesHQCv7PUgxR6fkHkLHzFaDE86pw",
  "key13": "KwYGUpF2ZZq6gsRzv7eUxUL6XGQiGwCWCRz1ErN4K8jAmYELt1vLixUQdjiDJNR5BoY1K6o9cRbmGGpkPmHCFZc",
  "key14": "5UpCTHyyqWxv6cHUjdBCTjELrhCtNZidP5fDKKXnGU3fC633uezjBcpouqpsTj9vC8cQ1esh95tG3VEDEPYLQtJn",
  "key15": "38kkaRkWgaJ6GHuci4pc22i2yAh9R8mN11MiX4aGk5xk7n57qTZuRnJADzMqEXtMJ75z1B5GxHg8SYDL5iAuErJZ",
  "key16": "5rdSp7erL1b6vBzFiUeZUqDVJHjXXFhfznfG1PMsezu39pjZSNhQzgMYTNxRYpeVxFWcdhpHDemXyjst7Gx6xaq",
  "key17": "33JMKDieb6NxQRkzSGoCVRJtgmLoPqbmLCk1hUUQxt8YySjupeJCjTztvDyU3k1pu5Xh3DW2TDwZPNKipqbnwVq1",
  "key18": "3tZGuhLW34iw6gV22cSWF2ASJcpa9J6FCQfkZTdg8xJYc9qocfqmzNFo4u3QsRYP4ErkaBmQcXSN4GMjzZD9Vutj",
  "key19": "VHmPKxbmXemvg57oU2yhyF8vYfR7L1SuSVvs5G7fkwsTTk29ne7q2WPLUfnPTd2yXHXXTd9fyt49mcWTy8gqrd5",
  "key20": "4w31FNf9wcu33dPXM4HcFGppmA3K5p9jc1Cr477yWj4e4uM631h57Sm67mJjjdHHmrVhmZXXcNqgipQE9H6xFDoJ",
  "key21": "7uuaTQ817b5YK2ykzRq2hjvRXixJbg32rRXp84GDmxdnNrR6vmZkvxn19FEDUrbMagRidYo9mN5CP8SnHwnswwY",
  "key22": "4B9NBy8peFsxfeMd7CHtiEDC2p3PXPBuajuSud2MjHXf8mQ33xSmWrS9h6A47g4PvCeMegCZViPKwSchRDyVWugo",
  "key23": "2h6vcWkfWHh7Y1TXGYbejtJ8fPyWKStXvV5bMAVGMsabXpN1A5E8rNfjeM51tLSLmAF9e34gPPdzpMLjS4ZnwNi1",
  "key24": "oZvmV6zEGqktYrcrMQ7vS6xKj5riaWogFPMeepFHMubqHnqgEggRsuQqpbPu2W12QSzhnUa3k7X1rWUVJrEmMVZ",
  "key25": "N8i4fE5L1rzsofUR7SnxSjR6gnzyaLyKuyAf6Vs7xZFLJes5p9rui1K9CZCNK4VRWf4TMarch2b4c9eFynjaNL5",
  "key26": "XY9sYNXfGFn99AjGWhdn4reEyeSeaYHL5uZ9bXPdrF1BdXLAuNmM48h9g5wjVV8aRnDHy3JDNpzDoLE7SNn5vzJ",
  "key27": "3HFS5fA87AtFKJH99Wi5qzzBNdF1ASQoZvpf3YeYnCZDK7nQB55rSdEVCsMuUmMPec1gGrFG93vDkc6P9Baddviq",
  "key28": "4Yg2xAXDBaESVAqqQAfNuPQYQMrnxLT8PSrjL8AxACLZT8ddjsW4rXNc1WsbcFCCTsagatrwbKSGegsdwn6otVMg",
  "key29": "37Y7d4tsqAHuDQwL8LkYTfnremUKTQRQZJQL9CAgsnZ2k5JBx4CvUkT1QNGF8gt7R8tMahSkYRoWS3V7zPm52z6o",
  "key30": "CQftUFVYEq36ELzk8DJKmzRV28ny4gWcQWgdaK6htSxwXQZhwJXqxPgwEd1dMgPfU6ptur3njGgxSU1eCDQLy35",
  "key31": "52perNrPWLBZUR2Q76oMeQy1KdAsQfKLmAiRLpzqUFMnc2bTZNZPjbpt6RM6oPr9i58RG6enhbmyyEM9WemdBRqk",
  "key32": "3EDufQXkVgDL6wG5jW9YSL6uHvCiU7anr3P1e23t44ywgbKJEqaXHJAko8SpFysQy3gPYWBDqDFS6tAwcHK7RBM4",
  "key33": "39qQoTVxNouRQX31pgXrdgMmwYYeZZfbVBh8v7jBGQ8AhXpkUG4Ua6HQXZ4p65Zr3ifnuisZCsJdaQvdbygsVR9N",
  "key34": "4qBhDEhiunyeueNLZZx6WuNHFVjC8EDjpTQ5UDjtPXi78ZBzCMKRa4ELxRPKpKBZ8Hr3RdAPppwugpkPzKAi8W5a",
  "key35": "5V7QSqXbigQZ5RCPa3gBFi7Tx5gJYeBRYiUbbsNK1yMnmXWXTMNvkJ16bkwVrDjcgTuAvCpZ8YUtr2AQGU17vqGk",
  "key36": "2AE4m7RbevAXgoimpejBzmoSdeEYjV848PaA5hL87QG7U55HeyKgFnw4bYSdvdBbs84EBgGtdfNAwJWV1QMQuERV"
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
