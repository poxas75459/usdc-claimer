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
    "3Tod9dvwPToSoEvhq6TenNsKTKrJFkBZoy6v5ViR7yHyzmH8ZsRhisHbh1Ka8yd2ESyH4mCc6JFtpcC2s4En4JiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xVsCdwtjHXXh9tetq48qSj3KiikbprNppnfp4WUj4uxeKYdahgS5SvNnvzpt9XzwRM69Kv8G2WCz2c3ibcy34mh",
  "key1": "5L6PPTSptVao13S7WQM5jHuZT1MNWcNUs6K6ST6Y6eoeNxNKHz3MjWQ62f4RwjPbrMzPe7LwhaKLsXKp3aZ8EFyg",
  "key2": "2KtwtkkPEaVyMWRDn3FbxwMcwQ4D6zh6WENtPRqEX3HhT7FbknVpjvTkHBWZrCvytcKY1JSwKkH6wAfLBkAYgy6e",
  "key3": "46W62bhhw7CPHzVHfP2MUM91VvPK9hPhyqoHbkmfifKJKPUjBBq3dLYkxcyT92Qt7Fysd9jX6Q2QeBvguYmkaMfG",
  "key4": "42CQBfpomm6PYGNJpNvc7JGkqrzaS8cvXSDFhMsdG1wNgSZVQ88BF9gi7Xapq1TcvVGfss3afcwiCAjGnaaii79c",
  "key5": "3u1qa8aWVfJmtV2tW6n3ExFsUQdu1cDKHJPPmHoz6Zogb2R64reaAkeojTZM5aZcBXSafN9givrdQDYeVogf5iwH",
  "key6": "5HbtoSzL35sTnMDyPkxCde96eofgYspPHidccgMoXKcfNiwQ2vNgqsM4sUCULYL1T772yL1bWHAxTPyBHe7ASrwa",
  "key7": "35dMXoqdp2AZraDkatqJignKvqHcJJyDhX7skLBWNWXKNEzUdYjq33781TFFbgxViSrUJJQo6g1LA8zG5syJX7eA",
  "key8": "ZgMqgDDos795F8Yswu5oeLTWspJaujFxKvh9HNwWWqLcJtdUUxuV4BmzotzCCZpUeHgLvP2uaSopaaEFcznNU7C",
  "key9": "2WKgSRgzWeUeAGcGahuAx7CCDDEUFvt86mUy5pLSnzmka8w4dpceU1vUE9WxoBhPPYxG7fQutFxtUv77ws2hj38u",
  "key10": "2XMwqvwDdeRGZ4AtRaCgDsZRoXScw7ptLR5LYrycFhZV9Y7hgjmAXH3njGBeTUDQZWCvQ8jNfdmc1HTbJBbkzyWQ",
  "key11": "44rksndnqiAquTvbKGdVUet11pntGBrc2hKnJbB7sXh2Zg5tvaHtX5p12YVX8vDQoefdv4b2Quk4xBKR6kCAmYFx",
  "key12": "2jJ9uxJFTARFpXzt2tP53FXuSnb19LaJyQHH1sjBhTY8Wx6og4jtViSH6GdvsPgi8kFaQv3sewj3SPEgTmh8ChAi",
  "key13": "2wgeHCTqJinEYtgU2uEEuJ3TMixdxkQhG5tUrvCpubJW1U6omuFoGAxSV5WUQifoTCHByPVkbMQFqrbMV94sZQwE",
  "key14": "5FVLv4epU2YFnQM2SRN1ghiNRVhyVBRn47hT2Y3vPZQo7Xzdg16692WaNWmiQ8aR9tkBzmfLsiLmWAXFDxbUYABP",
  "key15": "DWPJuHW7FxfCupYrMnfYzN4jxG3UFHFT8fJwvyZq5gzcafSiSJCLhStv17oaLneKjeBDGbK7MpmARKHuPVRCorA",
  "key16": "3XxhbYuHD4VNUjTvWWuKii6yRjwyC1c7tD9Mm778Ux4pD3vnVXEYUK5W9PPp2azmdiyLmi8nKBZKtZap192N6erk",
  "key17": "59MTDpbVAKF51yHsGE8nyC2JZVz2GePGACtpjYooKdGtQGgnTzBUSbGm1NfuUerryhTCcTVGgqxurVaVNAFBhcQK",
  "key18": "3oYoSU3iMp79SvCVdCokCEa5fJEEUUddCTDuBTaSF8aD59YYi5pg1nKmVaK8dAT4hpuhArzkcNYevwdazeXDLCng",
  "key19": "awhgfjvm73Qp1eJb2jCxgcovEAxfVUfK5zNxj8NmJdKbAdxaE7xRbb4i1ACutKvqPxztrMFA8PA6xZvKxYhdM11",
  "key20": "58954w1gBbWn3UQUKHbq7afGuVMBL1JrgsgCERRfdsrftVQEEbvkr9uHg7k1ToryAnQqhMb5ZQo4teRgtfuGqAYm",
  "key21": "4DNK9hupAuzRVKkW1v1SG872kLoDPo7gXB2SSMr2Hnt3zNouYEvRVPFQFxCjetwGVNUK2YQtRA3VNw1XsTCAwPTh",
  "key22": "5PkGdA6K5EmZiTuMczdatP7svVg4SPup7uwys1fFGxfzY1YbrHivcmS88hiRS4M2jeYAWbM7Apbo98wXZ31CEamh",
  "key23": "3L2UPVzpMag2egH8ZgAESfGgLxzPvKaQKSsecFrdu3GJbg4XaggFpgq5tcxsNCnVz26nG2JUPkTRYJkNLGysSKPW",
  "key24": "2aiL7qKuiqc8n9h3JLRRNR7poadC4axGz2hGaoJfzHQ5tKhbfB1FHDhVMdZHqX6waUi73bNxBgsqQY4Sm2aJ8gt7",
  "key25": "3HogDENG5yTceKZUMyhrbfy3PKhnkf8PogaUd9ktRHoj84ffH15WbDeQUZX6yJPZLSY7xpWTCoPUxzUWQbZJWWio",
  "key26": "4PLvuuaSFnvErEb8UugtxDUvo7a6EepNf6KzUUG5br5r1UW5R6XfA22ztWuifToEUaG6MhskjApfVFNJGqZmhbAt",
  "key27": "4B8XCeNeGT8F8g42NJocHq7EpHxH5eXS2ahjG1qmT7hKeeRQPzUYGUF4jkPN7HsgibWk17yxVdg4efLh7BbsDoML",
  "key28": "3bsRRPACrTThrSQsGnsZDemFu5tDTM4R7zMvbFbxeeRqSFonCKCE31LWWPddka1PJ9PzvreD4vQwJvKT7LfdKQJW",
  "key29": "FJAVWVYxdz6vxnpWp8GBRYVcYVp1cjsrMtP6hUx8kX279zVmT7mZbAjHRGm5GvSNRXBmEqpPSJYMo4B16B7XVhB",
  "key30": "5XTxHoB6rf9bh3DQhM85rFaRnkRRaTAKMtnSn8Yi4tXhtSisAkCejVx7bUKD2qFpexJ2b1PM4WJmz9WJGVwDKVpr",
  "key31": "3d6GNojZCqgPx8P1AoStCQmn5j3wEetrHxt5dCkk5a1CkTVUgGXZv3M6RhN7SGC8TSpfZDp4Pd7y25DukmVf2Bru",
  "key32": "36RBUA5rHJTJHniZnSWpffC7b5Ac5HohqWqkQX2bK6rvXnBgrCLa27S7JNbU8ybGpnpPHZV2dS1xUHtNiUYLRm2v",
  "key33": "4HS2bFFNgWxVCw7AHP6c2gsdNcBggoB4Eb3GYKmoh9aZ7owKEoA4WQUoAb9qvFRZT9Zvk2ZQYYMDpNSgSWEoHHKv",
  "key34": "cSdbDHnRFaBDXAB5U5eXYovprcyBtMHfGMYpmcQBrN5zvXTrrYZkhNQfjyNvNCkqN499aoQjnGyTp3uH7nJW3gL",
  "key35": "46baFVu5FMPgJkkZejrVW7FRx2ijxBsyTDKvDRKJRpXabXuCLAAZDecYuon92NVkPznKE1E9seP1ghuYwmgWZt81",
  "key36": "4UPtQbcxprU8iPiyAtQgeXBW4ga7cwV32y1WdWTZ6XiVNEDRbwksQJwco5UeDhqGd63kjiPtaL1bZYm5PCjLjZCq",
  "key37": "36KiBEmk5Kt57W2rY5D6rKT4pLz4Yw4nUWcEePgowmAeka9bzqJqHNFvdFAtrqustZGQ4Ty7unRxPyfvBNJzFQ19",
  "key38": "6yShLMNekkJ1kCwsDCJD1kAHb5KPGW1oGpmq7WmN37FBJvgFNCTSpfLix2jxuunBoaLMRVNZYQJRdAmTMii6fu2",
  "key39": "2PMbuVfaFx3uJjDTYVJHoaPt1FpSzG9fe79c7aXiGjybga7TmZaiCqK3S8CxjbcdrEim1Q5KesQomWHmU9RciNV1",
  "key40": "RM6VDdenS7iCk1Qpy1XC2arExaBLSxVe97tvnWWofAfjPszseMUyFjDupPTzko1waPdQhYv5Gd24qpsH4J7RDSq",
  "key41": "2sJenh7zNhSWwsS7AJNinQAe5yXmWKeo9Qwh8hb44ZznpQCeP4JaEfJL2fuLbzdeZXKTY4i4xN3zqwpgfSkF9By2",
  "key42": "o2BmKNXX4MX7Aohj97ESNA36zWXw1tuUVK3ou3dQFdYv2fWh25mzhDj766xHZaB3pLZoCfx33QdnhcVFbY84Pdc",
  "key43": "3AV1KesmymYXHqnsj9vec5xDzpvqtvbCPDURfXruLP5jKDvfyxEBUg3PUVigHVaJ7BbDZyfLQG39bkdTZyYLXviw",
  "key44": "5fj8LpY2t6JgjUaXMU7covaDM2q5ftk2QHd16n4snC8svnRS1pUJ14ys2q8AcxaBJT6W3QYkWRjntSFBcXCSaUHm",
  "key45": "4RCGHEL7EV327vGvH8iCXY1zha2MEKGhH88gdr5yzbE9FT9L4UkBxbpMrAfFGq9NXQs7ek9AMv8mNQSch4sTZLt6",
  "key46": "3vJ6RKvhxaqvgURiUcVGYumgNDCzFPJfd5d275iszPKpaJMJYscZ5czjqy1yPNJwowSihs5WdGTyMek2hxP91U2P"
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
