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
    "1rvauCrR6AN3yMzu7XC3JaCwerf9ARHfXLB6ycvHfM861eF5zyWsXJVwtRRqSbuw9QmWoc8Tb3g9hfKioba2pKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FB7Yf65P9c6nWsjho2kKvp6uaVnueZb5fxjV6EW9ZYCLXdidcbEm1VND5kDBUdq4QDG5erob4JYmrE9qgmHZKDf",
  "key1": "2aWRYnyEhc41i4rfxLdAea17zEG4Mk1xVctoWBTcEaVh7yjGbH99p3UBat7jXRgX13jSbbFuWEniVfb9VnpzHbkj",
  "key2": "28ZrLivHaRwe5Q5DzhEeqEetm847rzhKaceNAKyPEEKFeV1b7dXdA9WSc8JaPiNDqDEmfCbHMuy5dtN9ibhwNweF",
  "key3": "nBRuNRBJuDHCjhbRQbyiT9X9c4uxETcMsVWTTcYzGC7cPV2xqdbz8CaqZSUmcnqT5fDTr4rgXK5Ho4z6ZWVTZDh",
  "key4": "5GAmrRjQSvAqfuiaVGqbP86SEs1JH1D4EkhyYYUBNv7BpQiH5kpLe1KrLnKePqC2sFfswAjxnjPeU2mG8TbByrFs",
  "key5": "3k2GtZfR5JXdx9ZWBxFp1jPcL6ZqUwGVzZ3bE8JeXPaLzZF3KPPAoAdZNEtKK8PaLrQa3WAJUzFcMoHKpVcHjr2n",
  "key6": "DK3vyk2kb9mCUGYzdaTTYTmrqDG1e8LrXAH9HUqkZmZznWjk83UW4FyWWKSg8TJoo796LjdtLTxXpCnLvsunBhW",
  "key7": "5UxGBSdrMWJZRwkxbK2KUBjAJ8gUL5HBDHH8hjg3cgRc5CvrqEkic5me5uFx7vgiPKa9pKc3DvSaWaT8g5XSFg4R",
  "key8": "5zEn9rKHAka4XRXx8sNEAiU4BgNrse7Ki8geZkP13PSm62UwKLFna1nUgNkfyyDTPZBeeonNc37r6Kd7dtvvzck3",
  "key9": "47jFHXxSWoUWoRUbB6NJyc5woibXfuZCQs8JK9hxRrFm85bX8GZwZdW1sthknTqiocExmHWbJAvrX5FfUyFSSaJg",
  "key10": "3p69uoMRMoKDvD1JR2tWAyrq6SunCSnMYvv8xzQb6ZH81s9Ltk2444uLVjDMEdyf53ma27oaVGT1mdZvAdYdDjiJ",
  "key11": "QixJc86FMJbE1Ro4WZVcKDUap7FFVusWd5gboh2Xatoh1duVhCVHGG4wNRHnXxu8ug9DukAAK6JGR8YjrGHtjK5",
  "key12": "RNPuk6owqJrJ3cnncuSckBE8gFJRSkJ4SKwhQhbk4L1p4nRtx3rwk4RnecPs6NyJWwZEBLwqtFYQP3YCXzhW3uE",
  "key13": "2PAFGsKGEwjdt45W4yPFgYfJq6BeFmHix2WH7cNZXS6T1Awfpy7jaN1SMbUEQFbeE4xz7aEVT6vpaRcnaJP5v9VZ",
  "key14": "3vwnwbNUPptTDFuTGfXFwJ89ks2uWFdjgMGpYg3ggJ2bQ9LenQfsHkxY6hQRfoHmYyQUtRbyFW4HxVTdZx1sBqkF",
  "key15": "43qzAvKE9iMGgkJp9WbyzH3w8FnSzGQn7UM27C2e1BnsUXiPDFawgPRrzsd6rfbRWMb7MmnELeSbffbwxztQ87AY",
  "key16": "5BScuxeypdPGHzY4YkFsojTkpWSGZGTWRrJhtNRAUicxymUhibuQFCBj3LcrMKWSoFYRMajKj3AsdZJZzUSkbXJZ",
  "key17": "5bAGKBZjjyNadG4JMm2NojyELZHzbQDognvgC27Z4uN6dBeWdy6vF9XXtjPoiv2KDNAcqxAbwjZkeUgKaCG6yr5T",
  "key18": "4Nsqg9txhwzHfssEEzoTEaUezTAgwF7JDg8aeJkQGp78ohSLdGLvFer5mkuqwg4dEZuc8S2LrJ2CnE6XAm3X4G93",
  "key19": "26WNn1rtnAxrFPTUvEKi6jFnuSVywqSZUQyZMvjxisgYPbhq2PNBTH8UjKVrfb9MgKchyRu3nBdzF58uxFBk2Tmr",
  "key20": "58KNHrwzQYzMEZP7beHzPf4uHHQCTBEDrSkpQJ5fZynUJ5jCLFZQi9ZM8Fvb9NCXSdmLVvBhr7ehtiuPEBxXCs2q",
  "key21": "3sJv4MMszeVvWBaFPoHYjR9RXTjk25uA9FmHbJ2teEpD7QX6QbmvhsYd3qHEnJTeNFVXKLEphZm9GjsckBhZLqUz",
  "key22": "2jko4K9Y8At1C4f612TPJVU7TFBGUCs1BRTtBvFvGZQ8VD4cL4uit8dSgKpZ14Z1mUAdrbbu1BXCec4jQSLyEfvZ",
  "key23": "SuDK98BvESqXxj5n9zn9tFF7JUXzJQKZgYy6xhkzbJy4SWkyiotjBosk7BBPnqpkwGNeZwxYEU97mP65RH2nHV8",
  "key24": "2LToh8XrmcubwRXmUvDZRCWyLabe33rSoZsZMPwz3fowbtpcSbvCbqaVKg3r8hSevWe2gA7EPRaCYAunKjkmNLDe",
  "key25": "2yr9rCEij6VbfKUzge1t7HXG5saue3UaARzmHcUThAQhmLCkgTkAb7QoTe8D4XbfuHC5CMm5D8vo1mFJxW7G981E",
  "key26": "5tEZ5ZiLhT9FAq8VvaqqzmN6P6bh37PCFe4afUqa3X6ccyj3fRa9jH7g8MsbWsJpC2aSLN9J2NiWXhhe8PQzU26A",
  "key27": "24tBQvvKXPsrR2h1RfhUWjQQm9CzEh9K8qH7Ufv6zukRofdLnEpgd3sVZyq5DFtnBdrLaZK3sttCwnYYyKtwu2v7",
  "key28": "YGWmyofWfvnmzGXSk7rotQxQP36Xz3P6uifpWq5mx2pMUDrjociM2Mmky9HiuN6pNXi4GnHgpS4YnSzhABZnqHx",
  "key29": "58py8CqRVrCt6eEJ9FMpU8eoqBZfFiNUfMSVe87YGdE6Qf9fVbiSZf58TVdc5CMxGxAFvuhemxmuZE6RvkUXnboD",
  "key30": "4DDnx3NfPjKHAL3fHHS4Xr5QQjtjPd9G3eHo8PJPnr1PosGZGeGegiEQGyDsW7U8sqdpw6hr1CQbWHNKgdjknixq",
  "key31": "XaNY84AYCCwNiY44Pufhc85ZnGfCap3in22Rig1Jxu5JBuaP7XNf6aFPFi4xD24PgiFjEYhPrQTQtfCz3kDrWvy",
  "key32": "5FVYtUVGHMQSrYXZd5ypAgiC6NDnf1N3gMUQcfsrGSXQAp67QjbhR79shFbu29FjMzdbuzr5Dxp3rpJTtFk6Yyqh",
  "key33": "3E4ixNDrXAVdtQv9CZoG3gUJzh51hMKi5T3ud6tXJjTeRzN88yL3xyyxVvZYmUfUB8LDoj4BScLoC787WfNQ8xsb",
  "key34": "SGsyu5fY7b56Mbck46jxoFKfUbZTz1QQPZ2iYw9R1k9HdnY9FgQUmNSeVKk6W5R6NfhCgCTPLXqWFgGC1KtvkjG",
  "key35": "2BF8i62A19DPrw25X4QWEYbxcVMkGxJndBZG8BbCRYBNM5xs2KNnPPCwusb8nnbQBc417Q3HkPPj1xPhVvr8Mba1",
  "key36": "4ghCjnuHGtXL4oiPCgaCoThBgn7Dx3kApRT1hdeLStM879qsTq3nkitRNFPEcFHxeYFwbqKyfBHZBqMfDytW4gd6",
  "key37": "4DWSKB2GrFmw188ZCQwYPF3eQ32Qze7kkjGfsisCQACA99vZLAVEaoscs3VY66UGR6BqkEeCpSVJmAnCTZzRp9wr",
  "key38": "62bU53NDef3zN7Ejw9aRNK2zLqXqQF6JpGMetGcw1nb6UnxkMbBF6EvsXPbxdovtxvbjAfTF5jBV9zSvhq9F2nXr"
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
