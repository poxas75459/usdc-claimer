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
    "3Ui4thF8qFnui6kVkh1AJAyjMHv12zWqd9JdCVZQZiqK7BnKZzSfa8iHZ7gEV68zPCi63CBB4st8X1HKoSqPPHiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ntE7N8G7FFEhaH9mtywq2xJ3a5iLQeYLCJULNmdyYD3HjHcGhV1JybBTKb5SoqRr2NkLvB1rDg98P7PUdmg3jov",
  "key1": "4LL3bdvZVoRUYxpV5jcotM26bWeSxbWvZTd6RNL6MejGNV4FQ8jgLxDfnLMtUE4Uw4ESK7SGksv6mm74wDNVwE6R",
  "key2": "2eByc13oftkXic18q1dMCbxGgdsHb4cLYaZBHZPa3SX5RRipsGW5hjNjfYPEcJPtkfASU4Zba8nNyfSDiXXX6e6b",
  "key3": "SLmctAAiRKjEbgvmyQpmvYAnxSPgdJFDfJSYELYrgzcsQfWU6XJimzB3yvRaUzDWwNjT8EFyZVn8rxFgfyM1Qb4",
  "key4": "5bsdo9UGhLMuRsPo7xqQMinBbjcBBzeRFnSFs1GYiFNu8XWHgRDTtcezA4Y7RHiac36C2Hq9TN6W6hfm3Y2DFesp",
  "key5": "5WaPBdQfptGoaxhvt9x71QoiJ4QF3ewZWdQbTNndDxASVukLbYAdFdAc3cVdSFGUgyp9qMxSNFzqBS4k7zHSTPuc",
  "key6": "3DHvhf7Njx4FTpKzDCmLQ97qHBUwsNX1fdkCqKbytijFEAQtMNHCL8gNh6KThV5mtuni3EbaaUomeZwFrpp89EDi",
  "key7": "5EXBWx78gcGaRQxji97AyxfsUvN3WyP5U3JzhkcYA1myw2zEkHaANcY38qFyh5CyUfEcdtRYx3H9WTvJivviYbJi",
  "key8": "5QKYX3r7NCQ4F1sQF13NcYCuSwMn9jS8uufQ6nbwQ4kXJ5w9Y5ceehExSXdVb6bEd7EL8Zv2zccMZUUdNzDz9MGh",
  "key9": "2of7hUna3i45ydNdfrJQ7NMayCsYLxEex3kmsqskxfCHV9VUyQhjNL1okSFwTjmS393wBUPgaohoLhefjr1Fy1tZ",
  "key10": "32vZvQ3kzWFJTc3a9DiQNgcXYGQPyr12WDf1obfiN26KkqjgCk7THM3x5H5ydQ8SCVbnyPTPHh3iSvavrYpQDMfy",
  "key11": "4TXQEFqV7jCecyezTtnu7X5ZLTsvPe3RYPeDWERrG7fUbs2HrdAwj7sitvxhDY63yP93mPm2yL86LuiviJ4z22d7",
  "key12": "HEWQDn94mjSYa9KYXfxDW231PvGwTuP4i498HYGQCHvfpQpXihUGhrKpLtFTLksUbYPAgye23GU55sHbkq4157M",
  "key13": "24GcK1ZRH8mJrhBtHZ1asWASCEFTCQM3DgSTeFpCTPaaXVPnHwjxVf7USzJgE1ADKgckdMTUej8gdUjcHUKirxq6",
  "key14": "66JiQGMkN9hGyjjiK5PUqRhcLeiHJK54QFeH6ojnfWEzQSfgLtnzPcxy32Ep4ZWmEPA19ebMzL496HQ2GoyfW548",
  "key15": "2KBZECoJtgzrmuuTYJThbxshy3PNrzbXWECBQd9CPWFz8iEMox8rZWpGGPLC1f5qpWVdAvS9Hst7s8z7f6E9AS3u",
  "key16": "613G1dSmP7kYv5mPYMYvUBP27ax4rBpQ4Yi88tFx4uCRVRcQgpk9YSEDafAp7TLezwocFPbdF9NG5pWGTmvzvzca",
  "key17": "2MYDXo6rMxsrQHPNThMNDs8iZjqBSkv4hQgXzNXH2e7RJ97CbT5QYjPAuZ4zA72rtnqGLw21ynkSrvfqGsciySiN",
  "key18": "3S4NQyGMEe75LjVR8P3hxaVYfXw1JXnDVZ2s2UxTdofVY9h4SFKPtvm4sR3FUFAtdh3wh4vCr7PckpKLkVBLa5Yb",
  "key19": "4WGWxXdEddT8QSznFkHVxsMcxvuNFnopakR5fc4P6AEcSrmW1nQbDZRZGWLRhqFbP9S8KQBT3ap4XgUgpr53AgbQ",
  "key20": "2APV88ciwiVLWVdTALb6qvsMLKnugH2SQXxeKh7SjNBDyRGbUNaDknKhXZGfwfAWJtCuvRjG8h2UCTh1fhDRrK5y",
  "key21": "uD7Z3RZWhD2cvHUDeFu9AvSAq9oBhpjUGctsQBdtriB5CgaZ3aL8LsPBSaLE8jkcGagQQtby6MqynpzG3TJYirv",
  "key22": "4dyXDHShCtozVJcNNSMzHqps1hfr5uhFUYGoFuhjrECzDdccHQk9BXFDPQbZQdP8i4Gtzfh9fRHtAbDPdFsEE7mT",
  "key23": "57YdD1RfqzujneszKYzxkU65hSrY5CndhXCAx2ETyY1qmcHUGmffvAhTCkLGDDytD2m2uL2HrFiu6Pqfk4S17Wc8",
  "key24": "3bJMp5dExbbWo4jvyhY1S5ghqDu8nkx6AhxGdvgu8NcUKvqv6eskYhvTBBotRQy4Z6MWeYJyxReemLKtLEghpNLW",
  "key25": "58YsfN8WxjkTmSTRQ6tsFkABFauUry9ZUvpqsUkj4pCgZkc9yYYgJJ71HSuNy97ar1k3jky8Dipr4prGq5wNvKMB"
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
