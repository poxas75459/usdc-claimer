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
    "Wod3EZmgE2uQpKkB6BJo4FXexH35G8uagD4NdBWjtUzHYL5Bc4B1BNxTqWwbqtmbRJUgLa79y93hBntG7Nm8NPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56bgjnLXtC6A44ZALcqRni5aDNvSZ35pKR9Ngpsx5xEBKBysxcBSTSREk2mC2wwy76SLqRkQf7kqfw28ypL91Gfz",
  "key1": "4kxKpTV2ZeroaQ28KzbP3Vf9w5AVcvuiEbXcjRY6azfooJQdtKXXkHkA5hz9DWTqQkWc8Boybtj4M5zmF7p1W2Xm",
  "key2": "GNnASS5AQED6ZMEgiBd58QF3y7URcc8KdTXgaM3bWb5PreU4UmbMBqgcuJq5RgmBDdy7PZK6X3W7wCtiQuh79ci",
  "key3": "4fuznG5qZrwbt7AC5muJxd4JyWAPz86rZa2phfGWXvU9XCaSFkQNLJCb5GhofsndQKmx6d2WBnXHJdz6QB6PAhH5",
  "key4": "5vHSNFLmZp7KH9vHBH9XvtGEoy1J4ByUofYBewKBgdpZRvumo65Ps6MxqivqmqAHLZXdwdw8u2S5aN6UvR69Ez5U",
  "key5": "4ibfxK8fNN8puNwVFgNqqM1DkBSwawDPwmv74z9Zwvjk77LGrvH5cmWWhFhW6wdeYsCGWxmay62AJaQnmJEvrvX4",
  "key6": "HMaMtmZQ9VyATHGEJvRChmzAAUhBA5vHM5jm2wYdXfZ1QFCiTTXqxfGcWvr7b8tMk2pgy91m3i5F1Yq2SBUaQAc",
  "key7": "2SZUYj7yqM5HDbLf7GKDmxkz5HjQneGm5YsyxgkcQQYHty5TEmj66GfCoFnUGSDJ8HjZiim9gP8YFzZgDdDRTCHh",
  "key8": "22bK27Y54mbGnVQGyQAUMNRckkrJpPpuTk3yDMzMKtNoDUz5nuKBabMpC6g57bCqb7CuwSD6vSUbSsRyyioXMjVU",
  "key9": "BmeWtq1jdfXBmxf97ybgaxouexPrb4t5rgkpVnzCbou9jYQ48VaVwSHxyiLggzCaokWyyeGf16bH3zMxx3sayq6",
  "key10": "5TVEfk2rCbakWeofJuK4kYhdsv61Wk545APmMuPWjeo7AKXWfhzjZR2boxCJtiHufeimHnVrXvp9xWntvf4oW81i",
  "key11": "2cE4Zq5NqmDgQBwHYA9kQ579mDot1S66omWEg9662sSfLGhRxYx2gEfs69ZoRztf6AjhiT9GQS7mCzdiMP8Z765b",
  "key12": "2Gjk4cz5B6oQE413w3C1NeBrfP9RXuBTYF5BntfxgzpEaMJR9KUrQd3hi47YXLmFg2tagS7NE1E6uMK4FVjKeztS",
  "key13": "3YgdUJUkKfMk75pHqhENSig6JLfvPMgrF3U3wSbX2U5aJ18gvuwHjkTAzdk7zLRWZhxVeoX7MAzRc156EjevshFP",
  "key14": "5R1bdov6a2bj1ik6n1FnW4gcxEDRAQVm4yXdK4gEeMexbCsqgSU2FQs4xGSZY1XiryPttU1YUYCWorc7T2Bv31H",
  "key15": "3qVB9wiWNimYZHmKuLMJJHbPRmsnAQffi3GwZGcLWuMYPNRL3FbftJimhHTLY1GZhqecUo34M7YwKRBVqcJsPRUu",
  "key16": "4LoPWJosXATttsmTziXNaix2fkBvBJWKPArFTXHdc8vq3NtLegJZQnQsJax4pRYQ5U8Fg9kZMYkNFCLdBa4xkjB1",
  "key17": "48SbcpSdaeMpJibhzDjoYNyQtMv26twrrFHKfr7L2CHdSQkESNNEMGPfhtVkLSzGeqXk2N8xMMnXB48ueobG1sM2",
  "key18": "5oMZPjuK77yqdyPdYyVNGqRVvgV7EA5wCxbWE5i6eG7f9FXfUkudKVvL2RxAtBBurPkbPosbiRr5VL8pxKdBrZYR",
  "key19": "3qtffBbXpTXwzAWS2peBX1jdJk73HtxzrxiUzBJUWGKrsSbu1PWi25LoNoqR5wB89C4cEyFXPk4BzpqAV86DZDja",
  "key20": "5PZGoQsnvh1Vaarj72BzQxPmZLVew5rzcq5QwL6U6ivratQyBz6hkj4b4HDjs5LajtVspVZHbGf97yLAuvS3AHrZ",
  "key21": "TQF6VNJd9U6AMozCxGe28hZEVsDdGeW6ViAUW97jVG6nXNCfQ7oo5MhVo6G1GK6aytQ7s4syzxr4wb1eMushU4q",
  "key22": "21ZqeepQJDcv6i5pbd66u8nniHDB4PQKBnaf3WMjwGFWeXDdaTVYLtajszn1WboaZmX1PsYQGtGB8z7a4sWk45R1",
  "key23": "53MDM699jspMc88bhP6tExAWT4cysTU3zQrruEXwSbRLoiGWCnovJG2B1fvPpGa4Cu1W2DHLAukRHv9d3zdNxjnY",
  "key24": "Bntf3BWBdhCKMiXgmBB3bFfqbA4mfRH2rLSB88cfLEfePoN1WixwYZ6Dt8SLBTG2W9WHWRufq7FQEYNkswiFPSf",
  "key25": "FmvfjUvNKhmnY1LpG4nwAUYqbCk423Dm2TCrV7UUSuErD5vp3gpqWjhr5Fjw1WYrN4W8LaGWMf2BUuEcx2gk89s",
  "key26": "5B5BU4zWsxcPz3LYncWoiRzLbMXrmiPDVqRMiELKQT182GQ8PV42fCHTPySFkcwubWsDZeAFBNntE495DjRkiKoJ",
  "key27": "3G2pdqP7j7sBTULbM6MH27foztKTpgY41i68js6qaehbU7GHMt6T47bRBpMBQyW9bC2HduCWRc1YfWnPp6KHGVgt",
  "key28": "1x7w3dYkoQZywzRcEJpqMBJdQNixRAftiwTfajx1adWYhm7fJ1dJP7rDh9kaKVVXtmZE16GScdCKy8wgbB1BEXg",
  "key29": "UCAZxCXC5K6Kbd7ZmiU6SedYfT6p5pmJN3pHaMFNJWQmE5TDoVUY7TWVx1DeMnSZL1JiLKmXd1s9FVTEoAA67a7",
  "key30": "2Pzr6QzUEZDSwbFWwwK6jjrfL8eCaKNx3ys88gWWuCemb9DKanAmFfWjURCM1v2WC6hbwFmXpcpP5jyw3ffF3aFg",
  "key31": "2ZunFVH92jNvbwr2MnNJgAaHro6gDofKRQs1sEMLF4WGfiYYDbJD3Qvx74HUnfrEweR7GgF1Wx7vr6DNcKWj4hqk",
  "key32": "9qsc6rWPkihvzJ1jBnyv59rDvi7n7cfNrMz8Axchgt2mZ7koERaXMqYBxuxSsGQfA8UhrcjtZQeQwwSqnUd2sNM",
  "key33": "3pxHi7gm46Eo9Geor5GYSz36qjmy2QsWrK3Aj7WL29zG8yH9Mdhj4n88oEyZENuvaQM9TfpW5wZaKrLTzhP6GyjR",
  "key34": "5gKsdSfYMfchUN2f8pfV9DocESvNiukuHXvxYquZ6Cfsf2tQKPqh92CNVJHk8r6HMomQuKEw4RMqXpcoMEH2Vmnk",
  "key35": "FZyaRPRtjhchNCNRpVEpAncpcfXvx5aFS6Mk1sV1sbk6hBP9omZfKCH9HCmUWjUSaDREeX6PSzuN7mm3pn7DJiv",
  "key36": "2By287pTiUDMqNJXPSiExXUcdVAqYH7tE5jkgs85ZsxYVT5q6uh29PyAsq9YZV1ze1FbYnB8WNNfowT1epSb7AH9"
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
