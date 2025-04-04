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
    "3pykKEbCn3EMeAwL8NW5vszMzABhVxZfnJ7txrHTRbJMqFwpQArBBgSydvy41B5PKfGQ19KravzXYuBL3fTrSUmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H3hAHWHzGzRpAjVTykzcNbgxppNEvj84cx18iMtxRf8NbECzhoYiMGi516G1q5o79Ftr1w1787jovqxBqncYao2",
  "key1": "dfJw15H1jT39mDyv4KqNqrdaNWJ38Bg5oi9MT8KNShfWiihj3xcmZb3rE2WSWiCEC98RfNSCFAWxvHCEvxV7eUb",
  "key2": "a6uQ8XMn3NVLsGVUs43SDaPKC8zQrZQN6Zn4R8Hb3ubvrqS4UwFoS1juqc4vmHhVGq2BgMvUNUPUjubTySZzUgB",
  "key3": "46Rm4v4c7VbpPxkMbtENQHJrK4pXTRt4LxQPiiHpJGSDGC94pjL8HJxQtidUaLyRGZdtXHXg2APVGqGpnzQKdb8z",
  "key4": "4GnKwfkyMG7Ms9EPsZrDcph6HTKwFiuusyLMW41NtHdGfVe4grz4tCYcJwEN1vcJFnNMpv924uNbAH9Bw2NgTL3u",
  "key5": "5JRbnd69U9RRfYmusBPtTZgy18KHWW1Kryp79hVZbyNzQ8EkuHUK6uw3J7C9mFWmuUzxReZe3R5ZeVcne1z6qjQb",
  "key6": "2bMAcnBHCwN6SYhyD1j4bFz2GeGp7RyJpYW7NqXy7q7ucVc8kv7swPX5CtMJ2uscTEFVNu2noL5kWfk6PVyoVm42",
  "key7": "SwJuN781Rpmej9oC7iUkN6K1r9qXEe8ZC67aX2VvaDo3i7J6SUki8YaNg3zSHUva4fYQ5EVbK6jfNatj9Tyu7Yu",
  "key8": "4v7HZjTSHz4LLyfxkL8ri4NWQgza8WgD75Qq24cQ4qso9Gmo5PakcD6NJeekBcUVDMT7F2isqZi2f86ioBxFMx9p",
  "key9": "2bCG8QSroUBHzWzC7ff658iTciVxbhQQ3DwK4D7kSJvU2PmXq8Y8DJMjcdbq5REWviCmUYuvH3GLBoMBW51gYnXe",
  "key10": "3e4mZuB6LXp2UwuhrRym7cRnU2owHBGrmhGG2kn67ynQab9j2LTqh1zriUK5pkaEjPjv2VuS9Wr6KgRbXaGqV1vj",
  "key11": "5d5y1p56GnjGkt591FDz62zWvfQX9he1dpkgQdFube82zdtjRndd4Q3gPm4RsKpAAMPXMVheXg2HhZ4ij7Yt9HcP",
  "key12": "2xGhiM7qXm2JHqpjobw2v4sETrZBcYvdK5Z1bAkiCbyEjbhkVNg2gL5qcwbWZRJa5ZqMKU67RTxCG1zLdEeowGKR",
  "key13": "2m14YCwNZWAjFucb2f9VvbqdMpyV9QamPKgLTs6n5C84S34MLwWFSxgRxVP6jnrhPm7XDYxnQaPaxnypmpys9vbT",
  "key14": "5ciNFgPKbNtQexk4Gntt2VFjPMRqjP92WKatYA2TFwfjtVjkgppMxyqK4sWDhYCKtcEw8632BsvJJ3CFoUgtBoZC",
  "key15": "2oTGriTBnjXp9CxDqASkpF3awSJeZ9AXmUYi8CCUXqHP9tsN4yxKQMRYdz9E2ojsMyAsZPRX5MGq8tJmmuVvfAVv",
  "key16": "LHwBVBPK563faUUpdVxpGzK9xs1tBkUqzyYxA3YR6hppZtGqf62qfCHLTL3TyyXiGWmGs5je4YT3eZBzaEhwT99",
  "key17": "35MkbHuvX6fKurQzKxiCJTkwpKZP1Vn46rdNM59AwgqLYvzyvbvXfBctYzM9msYhYk1yMabKvKVo53ViEnT6YRop",
  "key18": "51xsFxqWC2DVM7mR6hCKJCMpasr9R5hhRucQ7ZvZQK6993D8t7YDbLiKVuRVmSXteGAzyVEbkwHyBLh6cYu9G8qQ",
  "key19": "34u3eAoULA126iTJgVc2a2uZJArZTv9cFqpT4SGihWWtdeW3YiuEBoA17STDuhZmF11zt42McSwWTHpCZUJfqSDb",
  "key20": "51hQ485JbqW6sZmoHU4Yb2pHmFbrAEYe8V8PGg1Gh1kB8ccw6og8iXTpbCyEsa6Hpcueq6d89iRDfRTiAasC4Dtu",
  "key21": "2efENdcCET47uzdaqQf6EDkqWVHcCbwJXcXQFSaDcpgNv8b4Hk1s8CpSTu24UUdBbeHad9ukT1bn4MYGXLJ4VgNS",
  "key22": "4VPCwt4qs6YB4weXLqQGR5DgHELcpg3RLouuu4uXjiHFkpaXXTnEfXsvFpCjHBmfEgFp3o7yxreTuazjRqzamteT",
  "key23": "NoWrXbjD7vmziNximVwfjQ2pvrYCcH413w3hwuc3bPJ9Qf1iWK2tc8fYv4m7ogTpB6Ffq46CRsZdCJBPPK6hjpC",
  "key24": "jmFKLZuAPcL3YCXofrEBhQRs3yQFgUJuTYwYXrSmGbdP2JXRQgQQcEMcqANyZUBxe5Cs2gAiaBqA1amZaENSvXK",
  "key25": "2ZdLsirbj6eonKKUbP6aRRCrBv1RBPxSJtrTY9hkdVt8JBHHoaZo4kCqwzcnQhuWVVCnQwGPmEAC8qxgATeKXi38",
  "key26": "5UCGWcMMxs4TVEJfXyHvUMYbqGCXCZCw7eWqj3cG1iy2fYXGHQtVm1GXjeTurtPbr9TdYLr1FBfUD31ndu73gAfA",
  "key27": "4iT6SiTGpjaF5QhdkzUFVeCCr8PZfizGLFLrTVkqAUBEcStfgvXYbdi85KzoohvjgfnzRt8H35XHBxWGGSAn1hW1",
  "key28": "4MiZ6pxQJSoWkQZWuTuk2aQViZ9UXEfqrUQRMteH6mEhThwqBspeyKmuNkUvotMg6GhDb3XWHiE9V7wnprU7SeQC",
  "key29": "i7XaExA6PcqxQAZMQWsC8BKWYZK2d3ZGrZsrNdSnraC5BE1SRxm2Hin4522L91hkjxA1inrrLuzscNkYxmH3EDA",
  "key30": "5G3WdqxgNEiVL4SFfZxUDxwpUSS35MGoS1VAVojHtwTkp4WtAwN9bx3exykC6J6hcVmKkLNUoBCPu7SDiztp6cfW",
  "key31": "B8M1VLZ8P9KSrPwVefz6RefERWQupUNjkCBAbkobfgyfeq1o5hdsAesMtvqsXRxkqvv2c29h9noqYd5ua6C3sbm",
  "key32": "4ARpaa77EnD28bznx4BYxJ8fLjSUNdxTZyJkLUTLxeXVFxDYpmfEzH1QebSneSJBwPFprp5N6dsmniqZnSZUGWc9",
  "key33": "33xxvB2JoJzcmTHgT9kyqYXLQmwxPAW2sJUvPJPX1JWcsfVWeEmuVfBnhEqR7WB8hBxzJjtuEK7ETKtiDpU7HrRQ",
  "key34": "shkmLSNsVWcHPjtei5RiWqbpPpBKofjaZXKSnJDGYkk7ydm1CDcD3Xf7WFJZQsno6M97PBbafZZj7FgQLzCE9nk",
  "key35": "4u392RgANdV1Cv7AedCHT2ggqvNhtjw4zuwKiE31B1Rt1hHpynx1CG8YHNQADDp6ub5itKFRHWcB2AST569oAzNd",
  "key36": "ZFi8QkmC2iEDDiRfhQYULrWkEL85qn16KKtuM3YuhJx6QSvWxGXtFSAwfBXhEv3VsP3KWe8RLoC9xoN53cnt6C2",
  "key37": "8rCUq6fjD48CHSqF82AMo3BxtTYKbfskgSJozCW9AQ6MVXPbWVV3q6PD3kEU3fvvqCvwWnt7FULeZZW875ZKCjD"
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
