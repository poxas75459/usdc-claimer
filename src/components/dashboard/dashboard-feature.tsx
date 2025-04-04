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
    "2oYdaSuG4W6vGaVT6sZKSYPiD82GNQ9wJ6UKhU5zetEXKWAaJPwya5inNCHXAUdcnWW3W53nX8pbor9iKYkbNRW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ffuY1jzsHrog7TFnLw27XmfyTXjMWfoLh9HUCSRu32CZUVtSvZ8ARBCDtYjaZzqKBVJGZBxji8dLGWXPSmHG6sV",
  "key1": "GD8RXx5FUREEspVoEjwVHuDsAesjqaQtVgsvHSL9YTzC7sitQBmqpjB8XGDBYnpt1S7jQteMGrgR62Hpr6N2RLo",
  "key2": "5ahKyE3n2F23r9Hk1kgWtdkTsXDfPptaGeKXFMWadpsbArDLnrdc2xHnFNdmHaWQXzj9kSmBj24JP496boJrzVfn",
  "key3": "5BZyHPjH32fKqM56urYsT6MBnsTs3r4bHkbWvuuaonivdQrBuAkxVisNXCWrhJz3ASnr8comv1YCShPWqQj4ecbJ",
  "key4": "3YXr3XrLhtbtGiKo4rdiE2GphDhUsN7dQUZaCKgxhBnMo2agkD17GSQ8qzCyeK77V8cvrsUFmVNavyGBJTxkw3GK",
  "key5": "k6kgVrUUkMFxnPccZvmV8MbVmK25ysih4Jmc4N3Asuq7i7TKvf8CnyfpYSJKDHXtPTQKwnbdYMMBgNu9xwGpKSp",
  "key6": "2MZNHjVyRq8eQXneXjNgNcGV3Y9q5Lr1JMjMsZjBxqbv5KXS233tYGyiqkAg5sQWbCQrDib99pSa1dowdLC9QoUL",
  "key7": "29zrHYwgWPdcK4bRTnBCkL9CzaSdwBC43tyGtvDSAER67G7Gw1ttELy2aUpXw1ydRjVxTfepAnbW3QvAh7h9vJrS",
  "key8": "3nypKoHiQRKj7PXzHVhfe1DAL9JGbAhyMG7RB1NsLsU8CzCWWNoWkQUwxhygufhkhtGQcJCEgAPJzT9f8MhW96nE",
  "key9": "5UQ8tE8JQ99KHudpMHSHE1sXCy2opXKPnkfsrrW8FSLcZcEdQ1Vv9ArMxmEneiEVmmQhKHvXimTSdupEbMarMbkc",
  "key10": "2JsGj9fvEroDt4qPxf7kwT62RkBdLM5hLrzVSfTTqL2yug9hEahe64Nu1sacyJmuHp5m8m6PHUK6PHNcD4eps17c",
  "key11": "5kpibKScHTY3qx3f2qSvAGp7pCs7c135wTqzvt7j5U7nDcVV28aqGFu1uR8uwxhxwC5xUnyjqJjNPWwKx2rWpDWD",
  "key12": "5NnV3VgxqD4SKbRC1TyfJtPjL6Ef7N7E7aHnFaiP9eu1vtwxhqjY4BCZP3GKSoGVjqt4J1Z1cFzzyUunYoxAVLBv",
  "key13": "48KQaxUkUDNfYDFtVsuscdwhktCDyY9enNQGTFPzhsLpuPnzW57YpxQgHmeXor7Mh4zPxQye9t8e2XhLiZoVfswY",
  "key14": "3nP35a231A8UxmTVpaCzsrihZbAAf3gohtYCvsk2nwEPddhqpJ7wcG1WjBSjZgGuS7UjeaCgGMTMYbmqEfRUucUT",
  "key15": "4A6FAKMD1RXWk57HpPsvdEuiVqQSnqz53GUZGgkosM6BNfGa2NC7bcmPmfRBjhdn4ro8Ar5w1g1TniWUUzgKoS2P",
  "key16": "4yma8XErYXepS4ZB2Q5Y17VP9HkmUFpoNosZ5YgUnBvnXM3AMCx6dcQGnbp5CNveqr7eAej5Jc1t8H8mteLDC6jx",
  "key17": "64oZ4J9iKQyu4NTNHAPyXd8Bhee4qd8EbK3miByLaweUNp1CdmBExieZW4ycQWh8F3CRrjiT4t49BNnv2MCnrSsh",
  "key18": "417asZF7yv9srQwCPCwR4yE1UkAFFzpu9VNCFFXfAw6gdUbMj3qFCnf3t2eYPaN9zUrc2iQwgpwgD9Zic3prX5qx",
  "key19": "2B3uCPjea6ZLJxP1DDqfp7ux9wtifTMwmTiybjrW79Kms96KBKf96P2r9gRHxDWJE3Z9zDF5PMSEmUXiZ9ZM3DeM",
  "key20": "47ueF5bVv2CKJTseAxwn9wNy5gm6yeXHqNsMHSFgamUQHRDp4EFnFgF6KwXC2eukzFKGQSJB4JVi8QbrPMpXUbdP",
  "key21": "4JD2QSsSsC4sx9ysjzANKzgUZzuqYUZr6wY8MVUASFwfG5UY4zuNnyuhY6nCndd37EphnbPAm8k8Snkve22zUM9G",
  "key22": "ZAnNztp3DJ8B7WGkZ4j7hZqD5WLhaF4YFBENoMZfJRGwW8x3rEt9vR6C6Cnc7RMm65LLNDZGkbvoGZTvaxYTnW1",
  "key23": "3yYttJBe5z3VjTg4LK9fpmCEBRcDoTomtyVNKmQSmGMr8rqZNeMNSMF4PbHBpwvRm5RwjVvQ5hyrzgTLnSKojxHs",
  "key24": "4eQk26p4mb53227fXfnqA2XBSYMjU3RS165D1gE3o529QU89EDTnHWQRyFtQgT9ytqNyREf5UHCEjHA6m3kyBNjp",
  "key25": "5BGdSn6d8fu45Gci5oW3V21KKhB1HXdGjSyBbnw8peAhDiBdkmByZSYkDsuEXLqim9NRPfjrGSCy8pGVXFKke4dw",
  "key26": "3U8tN1nXC6k8G1H1g4SDKbXWamAyswuKNa8AVN4Lshu7ukrtcUz2sJuXGjnJgNU9xCYpTYUaz3knAAHdyNm7kyuD",
  "key27": "4ub2v8Vve6jGaSBP2TGcUT5jBFUSnjHX27rFdQQ8BJP8g5z9fcfw7ivjo1CYq6xgi5hDzQtbjurQJuURTMoYeinU",
  "key28": "33nmCvp2kHqt6UeVPjdYedps6JytdSz1oaJHLD4MDH9AYTaCPXZ4BqUUDuZUwBKtc2r6DrD4oz5qEf79ZkEuSWdd",
  "key29": "3yahHMfHMFLVrtT3fvTpQNQ8ZYDWBmFpFLehcJsebTPiQK7mi9LooGQx4XYt7irzutvvBTEGYanRUcyPunGfDkjB",
  "key30": "3aFf7LcVcpZg64pVSbbtM1ywBAsTSiw9icCXzpJRwfabAKSuu57ZjS6FEVWHUgLh8h527gurJYTvBD2DmxcF5VTh",
  "key31": "2eqFXjyjNJEJCj4SVikMhGHMhk5wyL5zrYvjf7yLfVsZic8jHR7UVngdBfPKSPi5xhVeXdzekhfqn5UFbawhjixd",
  "key32": "3yoyQ62iNkgrLtGEp3R3DSCNMd5AJfbmm26AJqgMhXRgsHX9HnC8x8fiYrQ3vGQokW7BKXcZXyqPajQrS3AcJjcv",
  "key33": "kwWg95YApAxEhSYNosrCC9wP67LD3QRqZCjEMR4vEjGDSFKGLvCeL4STHJgzq66o8NJtQag4APcAUqierbUvMD3",
  "key34": "576Ew45ASJmj8TMXowhL5pKWV5WAtA1NK7UR9B6oUJn7xmorhnBjomnWKNEo91qvWuZw4CkYbnELQTyJNd5XYnzP",
  "key35": "2qtgVf7wC9XQE8d89XozHCD1PEuGvErQCcTidG8FgP8WsrYXNoLbDTGh2iHtdvUKApAbSWqqfZUysyS9UAV5AkJG",
  "key36": "2BfRq56TYkWtrSnHKAoBF1Vp1QfReyoy7dLSozZMWsX2V7DtQjW8SDU7LaNvx6BnTeoqK4JKYYWGvBRdNbLDLNcq",
  "key37": "3f6UbSatZyLVvcaooptcsbgVkxtEJGXy7ayb5njrN8ZKPATvc3P6KEHVqZ94jLxyf7AEHegyYv8HfBbwGRVYVj8K"
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
