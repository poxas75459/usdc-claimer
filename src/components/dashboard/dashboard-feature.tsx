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
    "4ddQubETDJPzdEcByjvzSqX9jeDGbpQMtK6HvPAuHm7WMHVKSZeVD3r8Quw6m2YDpZCNK8h8sX8QMZroxBgZeCtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QK2B6XX6QwgxzbvyAZ13wwkcRtz6yJPEcCQHf1Y32cG3AYQ35HVghkpJREbBKcvmrDwgDfKuuvgJgo8DopQdxaz",
  "key1": "4eaRRQHe44kmnm839MHQXG4jbqQsV9A6Ao4hedptuRfWpJs1zL3M59X4SFGR46q9tERHe9qCjtoyn922rpgx7ut4",
  "key2": "2tYAxUbiLqaQQVSq8FQQR31ekT5Pn5371on4hcnmFeTvR2qeSXbBMV8HkRTRqCeWFtVJ3UewyTeUMcnAAW2swtSE",
  "key3": "HQVpbZB7KuBMY1pn4p5q4JNHhhc8xE44VZUk5uDBmbmbA2TeZnAfLacb2zd5WThGTriLB3pj678ezpMiKaRyY2v",
  "key4": "5uYoUS8sRX6ye9jH2A56ssNSoJguiKbsSLcUzJuRbEBqQuy6jHzEC3hYeAapYJoBVzemm63RodnZXaMNeZn5eufG",
  "key5": "591ezrZz6vxsGRajQsidRaMoYfyE2n1dipDyJFbV9QtgZ4j3M5ZkfpTwxkQKkFcpQrySTnbr8EqvzS36UDf7wEf5",
  "key6": "5rtUxyUofLsKbhDUpsqg4aWRxU4sNQcm1Sey5JfowjNweoxP3DUhsvJQqjYX787bZpxbaQJGghtV6Y7wXWwr1pRG",
  "key7": "5YJXHXkQ9TGP5kM9niB6VxYNFTvUHKf2MngiTKBUCtDFTxA5VybvvcXxfiScN8U77qDnCNHrzyWm1NXEeJCTFM2X",
  "key8": "2RmEz5TZW5QpxeG9MtwbYJN6wnowifNt9PBP1VLqP9LWTsjVwTcSnLGx8mb9VkN1yp76VQXhCLfdnFumWMJDChmL",
  "key9": "3kc1QEaoKz5d4zUAi2vPBa3qUgVFz9pDMxjGDB4hMHe37gyw2xnvRpsKEmUzqBLPGhC7x99oPuvkdcedq96jar65",
  "key10": "qVq5orjiA3QJJv3QGAmA5d5jNr8XzfeZJ4Uq3hXXyF3Pa14VvZVrwEaiB5z3RPSjtz4ncYV7YRPz21BvMAoA6B4",
  "key11": "2cA5YXd4DrFWMBcW6S7QG6UWrdPHccnER4BqXB1L1XoR3tK7QpuM2xLK55NhoeyJNRYoyj8bF4r4XfUhXiwRhTAE",
  "key12": "3GqxPgPBGvkNqPDwqq9rbGiykHCeCpa57EXmwPDFD7VumD5dFMGkyHVE9aMwxZFh4gkKrRsVghPzq8wL8hUBBj5p",
  "key13": "3UVcWUpKV5qoKkSiwkDxLEGAFjvgv3yxsbVmmptcZwPTrbySm6Fk9FixJCAezkK9jCYM1hAXosKc6SLwC4TWvzz6",
  "key14": "397ELrZ78XcK2K56oztkhDroHTm2vhASmBKJVfGMHh7EKFo9EcQNZXU8ziq2j8MGvD3tvKjYQRynrqMZA3mnqCJ",
  "key15": "9HrDdpphgoKGNxxRTHkPMhgffLTFTrB6E3XD4obWL7rPTtiUBf9qMJduEabriuWcD2rXNvsFDEswzbk5Gstv8d9",
  "key16": "37MYwAfHBGUURr4Hh7QhF3dPbtqTGDsMZFUrinGxqpgBkBqfHtUXCWs5NPSu3SDL6ArRg1qLybs3h8RMrQut6WEy",
  "key17": "sGXGDtRv48WP3UntVmohrSa1e5PhFx3gpqKdt4dAE4vbqgmCUzRqCmg3ruM4owCaz76Fk2tkWTfVM6pWQxBXYra",
  "key18": "kgsa51NdrT7PYfqvb3R5MhBaaft7A52CCR7u5qMGS8LALcX6h72w8M9bhCPU3RyJvogQMurAScsSS6eZd2qm1Jb",
  "key19": "5Vqb9NY7LHY1pX8digC6JRrq4qGtQTHqzMkfHphJhDLSchuVPCJroBo9gVMBd1JQY4YV3xWfdHYUdewaFRBWcQcZ",
  "key20": "5pYsN96d6BkMjm742nLpMw4oRA6XgyyxrdwUuU3cxikXJfKKfb5P7uzFEsYQb6eZBNwpnKtanFxQGWUC1CnM8HrP",
  "key21": "5yCc8fGxKG5FHBkfoGjF3erdqogcSPfDrZ9UHcL3woiT6pojpzQLgTFNgr7R9Q1VaMM4QRr1Ev5JqkUPjPNenWCL",
  "key22": "N5UTBttTuEcuZVY1we9VvgUUDSNJpPgUinstUHuESr5mHeSbXUsnMnXdqy8RR3uHPL9QvXYdaaXEt7JE5UAe7uu",
  "key23": "4Tzzm2CqhjkMj35kBnZStQFvRJwKCnUQjSh8qDjUQR7T3pAGYccSh1Bek5JFH1QdE9cSxS3mm4paMA2p3mjc7tKq",
  "key24": "35KxLF8RF3Lb9JG1CBpzQE8KzwoejDtvGTu8QzR6gVCipHQ9GUMB58wHNF1zAAwhi4TjJ6CrU3FuWGUu73diAzkQ",
  "key25": "4notY8TY8oUB6gDULJjcN1ZwqU8FEKFUCbfyAL6KB6WAVbsL7PahpdqHUJ7twcryg64XXRcdY9CwndccHk1aNond",
  "key26": "5fyrE1To914eWtJbKv2Ei3kEeYvA9ch9fyaGN7oG9XsMyeirKNqckZc7rzndMxdDF4u9PFvth16YX7fhYXjhj4Zi",
  "key27": "4EA6Up76ijoFBQcmszo54XjLzfiFfpB8s9oQkG2aGGGE5ZYcFV6vNz4JD21jZS85PKVwd9zqC5yxXC8RWHBKKNPS",
  "key28": "37Ve9ehu7M3JWKToXdUjdbCgnzfUjzUpqFAdRJ3xjnwXbSJjW4J7DPKqcKPdTqVUuZLJ2j39eMSJCgLtsAziePqM",
  "key29": "5EnjGBX2okXEPXmMbLf8u5VtZtKyn41fSFToZcdNXCYssJrUh38joAYNv9rewvJRxLAhD5JSiU9LdyKN2uVXyecF",
  "key30": "4vsrAbrSpbLWJkELYfeFZy6MfUf3qBv7VgMbY1B38UkQ6RKGfCsYHutSrnv2Pry22iAyWnTDwCNvFLi6WGzSV6Sk",
  "key31": "3W3ncuYRQ6o9Rve4VTcag7mLMTxpbGKuTBLXmwNscwgfTVBZMD4oKU69jV4o5YGCp9JJa56xCXuk7pvp7UKDCAZJ",
  "key32": "42pdyyFJfnB8BLA7zkoP3qRf25wQvkHyDWrCRhhzwL1qLm9QchRqTFvyas9i2fRXnYjV8XH8WQnwfsK1vBdSGhw4",
  "key33": "3RyuZTxjpJbkKCgzSAxf9as7aHLWyvYbqFNWwB7Zf4Jg1Y828NR2QPeUnGyrGHiiJPcW2VyKnrGqu1aBCBo8xpY5",
  "key34": "DuzYXAs42acvd41q3jnnN3PpZeZBXxLVc3c3Rtcgis6KC2QxzuFnWSpdr8WZzPz6nWXe1sUz6gWVEinMpLw8PNj",
  "key35": "3QDhT3rAeSotiLBYKP8Yq8Q1aAFxFEofV18LiU9zqUgGpRWdQNnUeDRfrSUrueP6uDVrKQooh5X37nBT8GV2Q92N",
  "key36": "5NjQFmCJWLZszYcB967YVDbjkjarHu97XmDhDts2f44HLsUwURnXV2WpHiYcbmF2EB9CKAPSyvyPvrVc9rDcqc4F",
  "key37": "goDHof1H6T4z7UcEG4fLM9Fe51VVV6XkBhJ1DUQqvmEceyGj43FxS2aHE93bE4kGmJyzih24cV5sTHsTHHrYowX",
  "key38": "4dmoDz7dXDrG21hUzoWsMG9VABN84GLx3TnUwUmUB85G6aGHSQTbF4ZLosGWWRdsnaTnYERmjkzXQYRDjs4RH6Qh",
  "key39": "25Fwruq2fawnWVnDKhZMg8H6D6drYBerUvxdFc2oHZ93pQYG34TtzoHEbi8momxrC3we6NyJdGLh4GgwyTEb2dct",
  "key40": "48G5fkgYYM8x6vKVZE78AEd1ZLYCF8RFfc3NvL4fuhbXjWVWVzcQ5vKZPS1aLgWB2qBStHFxUrSn4pZi4kqngVrz",
  "key41": "31z4xfjxZjkTUP7kLjNtWg5hTf2xFyC9QZqQFuzuxKXTdKHr79rPwUVQXAoceSMUtsmyiyqssQMKAU84eWcwoB89",
  "key42": "5tLD2gQC3JH1DpX9o1uZaeNEdqwpi26QQyAT9REkEHQsiQddXbydPQtbx4Adqa3cd4Li6tgoV6LEhcSiX8qxyuKb",
  "key43": "5ED6Wz6Nzqy9DPNpXPor1AWgx4HWyPmqYAtCaniGu1XEwDUv5mMyGSKvrFhduLQxDE3y6jNhaJR45fZ7ZW6CwDWp",
  "key44": "Kz3NKp3hq3Hp7LmFh7GJCVvYyiGy7DLmc9E3A8PJ6t16std1UpuQhxJVGnZA6npXdSiQFcGw8WCkAppaRkgLtxg",
  "key45": "4eWCswaHmLiyn9GDvchsn7BJ9La78UPHfa225uC61Pg292ATrXgFx8CdEEWFtcb17gqTBgxXefNEcWfPEe6EsBf8",
  "key46": "DSeU8ht5rjWwqLZ8KyufnYqqgxBu8CFzCF3cANdNA5XSeGn2VtQjo2Z26BJ6CS1T258NvAUzPFLJ5PnzQVr2q2p"
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
