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
    "2N7rtEnbYsa191miqPJhyXbNUwbL8sqrrhP1rJNNV9w17mEDkDgVxEPkoPCbGF1nqY7mXRKarzsP3VMRSGcvDSTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eFURmTiyy4UYD2XzXr96RuRgDd8j9EMqsBHevDS2GoGieuGJLaFvRaAC6TBMXKaS7Zt2LcWVxygtFUgf5V8irmp",
  "key1": "3DXsvXXKSbg7MEm4owq7dnJnKVsaWsdyTAkS1bsRkAtFUaqGWtdMhqvZJFie7eetV7SNmfseL9tFwvPEoJrK1Peq",
  "key2": "5Z7xbHvpATGa7AQjtePwVzokWGjeqgn1DjhMHVgARna9dFRjwAWGNjnFqeCNffS3J1y1adg9yi8uqEUUa1CGFJpq",
  "key3": "5REoBgxGz7fBJDzC79LcogessrpCNzwLRMiX3RhwDL68VwrZnCpQ3278GcNJfojwUxUa4UpRSLJ2YoUCtJpPzTDr",
  "key4": "3CJsGwRmby9BpGtfy19QyRXKhsAr4e6Ymio8xu6845xS5jrD1YR58LrEv1k8kHR7oJGUfhpUGKqqHyX1cCVsC8bh",
  "key5": "4P7vR6pm4kbA26QjxsiPN2Daj92u69FjVzRGVe7ZXtd6G7T2fGvKThhuCvgPBpLw9BL1iLLSVR9F2tppxVbXCChd",
  "key6": "gy5kxtVZUp7Aaky1AazXj3681yj3EatTc3bMbH12WZU33nW3rqPG6CXeFxsgvZyt1y3Ri2DyC8VbvxEd8GhtBYb",
  "key7": "2st6gv7UZD1FYicg5fcAkGmkRnn6QGEmwYpmt8mxWQSMHWgzBNQWpqaJGsqJZyJCS7Xb4YJRQjv2nFhwnZxQERrb",
  "key8": "5mBZBoEZ2zdcwWSm2F5L2f7yB7orBn1cSGPwkMtgJ63oM315ufywXKo3D9BorW5mdZAZ6RetDY1TEs2QYGRP5Ahn",
  "key9": "21vM9vPBHi89EFhfHCTP9yXZArzzxaGft8ouETUBhMgKXw5Ty8Nb6aDYXTDvqC9tVZNS8chfKADFFtQ8c3mEzjNC",
  "key10": "4GMzaWgEo2zCDqb8Ty5Zqg1gCT81yNX4zghVMd73XZFxj4RjW6eps5Mkd8S1caJ6Hi5pmT19k9aGvwFCBmrCCDA2",
  "key11": "24EnojaQ91T9m4Pki2LRormuzwcm5QwW7dub5JhYg2xxXLzkb3Xf6eFYf1Vn3o5RUueRAUVxVWJ1PU7B41Hd4N2z",
  "key12": "4JKT8JRHfkdin1neLqYSw1Q2UYunkJ4gVXTNK1wmEKkCEh5E3UsJU5QTjHRyYhaawpxrf67Es4oY33KH9NBvuDHr",
  "key13": "3fd2pecy1bDX4LYMNzTxWmoeiWEpchHFVRffpWxa7QvtfDz9Cqk6NDoueu2Zm5G5GSBH4CNfAPSzVW9PC1QCn4oz",
  "key14": "5tnwHGLapa251djBjE44t22BWUxrtUgDdrAQdbyeTHcLWpodAKCBz4VJDPqJp42kwxGYBJeRi92MocEP9yGFExgn",
  "key15": "5qR8xHYBzDGvFvGfGUnumjbYU2u9mtFfdMEK5FRADqxgpFm8upncEpK7Sd4qWqk5j2ZH3YUwNUe7d2nVb5HHmsRQ",
  "key16": "4mctAkhy8PR6n8rBg5j4hczQphZH6hxaWHHAkrooivJ4NT3z647Cq62tqCra1gnk4y2iTwDsYCg3o3pSYMiuAvbS",
  "key17": "54dUeFe9nVtVm6DQ2z3e3r1CvTCDGvwK1GLvwGugJd3V7FnMvQVBNasE5bjYyZt6hkeMh8BgG135z9yiKtXHQAUA",
  "key18": "2pJ1wyRDjfL8UZabHJFpLYGRqm7tkxQYuaYSCwTM8ZRpnVLFotGjvgSE2NZm6ErnUsA2TvQNM7rtaWcyskC7nobR",
  "key19": "4MqgZTjGoWDEscKCJmLZfg4KHqMSd5Cax8KD5wAuueKWQf73z2B7Kg54Wy3qYDMJ26LuRRGKKDm8gXDvohdHMJCT",
  "key20": "5XDQ2G7gkAwpwQ4wef2mjDqwA6Cg5qoDxzLQR8csURo45dkgtpzgk6YMEdWZVqgg52tWbfr5BdpKiU5DW4JjMUt",
  "key21": "46sSHom9QuSf9vDabAqquowoJqqriFBxauRc9G7AxuZAHi6K1nvWkUCEWdzX6AAj5Qzrt2Y4ZSP9AKBhRWcsahou",
  "key22": "7vTczCYpvLgJ17K2JW3b7Evv8WQYAnF3CfD8rALNhrTzFvvdPyvNktWCmU29Mx3REdHqkiQHLuXVGoQ9ytFkexS",
  "key23": "2PHG36d4jUPCWadpGpGULRmqJzh3dTHQTiriKfYwxKZRBU2d9ZF9TeLLbjdV2n3wH339C8nQ2D3suxSqF3JFnX6G",
  "key24": "3gCMp9THFw8omXzf5ma9JxTPuDAikkT7KsXpnckgjCMovWZz74J8pMdcAqtdmdkjjcVAHywCoKPbPjKLGFAhEKwL",
  "key25": "2yQTHZV5punE26jhaknRzPUjRMw5E6aFCi1FguagDYxmwQpVnADT5KbMqnroMSx2X3BUCQiSTnhCEBndWJKVmVmc",
  "key26": "2fvrPWDqBNYbPh1ygx4ZcM4rTdmTMcyJSVp9W9MQFjWCc8KYiUBDebUuiimjo8G3uXMvYjCNG34YN5BMfMfJ1GKn",
  "key27": "4gYP9pBaW5SuAXP9dQccuTDUZPbTCfa4DE9TsJtfLX829sqaCApu5AdppGCkvKf1xriQjcRZE2zjAUH6FTtzBC32",
  "key28": "4kiAZwQHwzZJ9Gg8L3o981JsL6c4MiNQ3DAUKjQkpXG1nQMXss4y68CxzH7AtAxUNvob1ueEZfsNbuwGNkD6367H",
  "key29": "21ADfbigf7xNBBwEtaUkme1P7pBwAvvQfsEyamYFyq8gejAzZfJCmPtTxjBGYTFnQHuHfN1Gf8eHDAWX1ajFWFwF"
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
