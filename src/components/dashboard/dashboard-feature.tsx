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
    "g5ZxbDCS4A9aUrC6GtT6fTALbbC8dFx4WVpvmfrnyDZbDSY3x7ihbjNpADcn2aWQ8vpYNpzW87Wqvw4F1Xj1Krk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MnAob1rN5ymrQqjnFxEJfurmiGADz5ZJ61z1TwUTc6HAynVaPurzRLher9FZVoQtjKrfDB1DMsXTxRjcUynDt1r",
  "key1": "5B9Xvd1sDgoWMqMXS3oQMu8fQdbAt18tFx33LyBxaPwVvLkCuHX3GiMpbDVsRSfcbdVPVdyfd16BfZSv4Q7b76zq",
  "key2": "qhsLmccPNyXEe7V1ou773gpLn1b63NKZdtgLWq7XKRcD5fyT363hY2R4BnJUfstXKs9MKMGoCbanaipaFuZUyBk",
  "key3": "4XhnURqxhMaKtJoR8raCN7LWEfqAGUcbWpS71aBjijFP5wsYPzFAtMV5qRmD4f3fiPQW1amMAVsHmfCoxHZu7MJr",
  "key4": "3RRp6ZwHWSWGWjvGQ6eVZhoKRdfJutB5g3eYC7LZAHYnPeBpgX4XYfZ79re9JGjPViMmrzTy9Td283Yhkzkh1rDQ",
  "key5": "cRT29zVZwCsSDTK4JLLoBCZcZaqSTuEcGxqExbrmee7x8R2LwdSoTBA8TskEWiYDhMf6rgwGBH4NhwQp8gUQq5E",
  "key6": "4bWuw5MvdfmRXXYr6JB12xP9pn2uAxAwJNj7YjyXTNN6WFCJLWYBGQNr5BnrHiv2fGKANZVNSQcSQgR285s1qvYr",
  "key7": "2Noz4QaCbuQEW4DX1hfc4LR8jdCVx8AfduSW2Ctk8RzhQfUmU8qyHwbgVmmEZaHSYy9qP5ccaKvunnEqRj22h2Rd",
  "key8": "5sTok4sLZPBUj9iszsF3RXrre4nrDGVpKoefb2nB5tGCwLKtRyjCZCfRp9FyCLC1eQvaQumE7ehxQFHrJ5Ux6tSP",
  "key9": "3zQebRowyADGNyYoz7PTEZ8xfV3pnzkRaZCCQyCxBDJAd5BTRXtH97U2vhqXr1jcAD7yVZ6GMCogQFkERx8M9quw",
  "key10": "4jfxgn7MHLiR74HJsGA4ptLrVJ4eLpYhPwZRj1gKtpoHv4jeVtn1S9fgz5hDm8gFNmXzBwhdWoBgBvXqdNw2pxNC",
  "key11": "4rQMbsmD9spbq6mwdwsbQgZhvupCxGPNjtTaa1LfPV6LhvUqCD5antZydwCP9fxvanNd5hpfmaBe5gpZM14SpNp3",
  "key12": "36az7ELX4GsXuYBhm3r8YJDqDNxP9G2SDFex51RHyGbKSkpgwMqEYmeuMLg7x5goQvxS9D4CmiLuwowhX96uN6TG",
  "key13": "3haYncrBSiM9CNJLzcZpDB7vHLyPKLPw5Cqw1ikSk8ThQ9Uj4Lx7KgHfagYM7PcSjdWgu3sLGBgMEmajzqKsgStD",
  "key14": "2A4j7Ypvbs2NxaTodjPHLq7EgW1YbxtQ6gtQasARn4sZ2fgVUwqV61AqVyZn3uHVuS4caRPPUKjENvk7v2sMw7QG",
  "key15": "PvNjkTEWNmWUBofjzhXUr1nrxKBeBQ93qTMboQbCBXN2M3ye9w2SVCWVtZwkAjxnbWEuFTzyRg66hVmzmhFzkPX",
  "key16": "5WATFcuXkCSR2fnWrtwKCeSDJk3rD13Dp96KxR1xUzBj96HDRRPSgusc9NNoNPcsLH6bnfV38pgDtFQmMrgVMbAG",
  "key17": "33LPVhpFfCWk19QQtM491eSKcLQwsUHo1wnRftBP3RYxjytuBAJBFvC6YBbX177ywiJveWZvHfyZ567pLiVRAV1G",
  "key18": "HTVMUx5RvtuMgwGSvzpmCk9TmgAvmfx1ZiDbLwwNT7aCxSqmpyTzs2NRJruTpLn9XgC1b2skhKCkasNFqvm4o2J",
  "key19": "2p2Po15sAHMCCkRQ3SW1wVJY7rH9ukctzjphYNDRRBnL1zU9UwN2AB8WDgtYxRqHwdDwkafjd8Q3tdqCxXm3zNKT",
  "key20": "4v2dv5eswGUWnsekXNfQaMceK2gvvoUxWVgiXuE6qyXVfjVK29QzMmuiEmEmhRYYHUXDTfbWokAg74mrt57au6A3",
  "key21": "2KEHNHD6XbUmtNeTK8sVkDgckCYtC4dzxE8wdmgF3n6AF2fQ17ctuz6fMMwgk46cNaLRDwGGefRUmZRwHwkMyymt",
  "key22": "4tMSyZVfsr3DQjTu3QcFdKfDhAqYc5tRipisTTG77ouNNGDttdf3Rj1h336Dn9cn195c2wiSUCuh6Gz7SzpxrH6H",
  "key23": "5Psx5YhmQzaHwWgkqToS3HxW25Mp4b2TUUS8gxcyU64t5H6UriFrz3WTQMHGJAzcUUoYsojJLyJhJ13fzx325kab",
  "key24": "tiD68PYnDe6cM2LXqDafCMZ6SYU8XTGgT6BqUmdtFhwWDtfuNhN1rmzYtnD6p3ApDso3ZxqvwRC978BPkUYBfmw",
  "key25": "4DpWs6QdCFmg7jux2AXBVi1zLbv3fmTeZH8Wx9e4iaFBsAteJmN3W97gvVLJJsg4piF7oEukwZYvrfPfuvuUniRo",
  "key26": "2kkHiU5Km22wAHSVdCd7phaTHuDcsmNQBa2NQLY5tXTLFDwwDkF82G6NuQqsAZgWs1MfQteSPPP349CC2pTofzm7",
  "key27": "5cWBJYMzW4sZ3PheBezhNeVyqGTQ6NfCCeHXuttVkd2oak1z1BqLeFP9bZN9U1PzA8yUpVndjkNy8iBc9ZtH5QQM",
  "key28": "33viRJGe5wB4gDTBwkSqJPu7xLbz8p1js5LzyHmRZuwx2i1suCSkCyHg9ZmnJsQe2K8joAf1ddEsjtgwPABrVUyP",
  "key29": "4bSnLd6SS5HVSKDUBYov5kMkmRbW1eug8eDAq66M1Z7KCmpCULiju4gZmKV2CRNF9xN76MGJftuadVUP8H345qUG",
  "key30": "3fUFw8JmvurS6iusLBQHfxbHCV82g1VWfNgbrt8jMv7gWQL6984HL3GogxMcCMr3Eyo2oT3eF1ksU8Ueekgnjmcg",
  "key31": "3qkj29ZPwEQ4eZRyaUxKugMRTe3hFu7SYvDQYRUdiciCDs8rkHgEmz944C5NwDKLqeudyiwU1CjdutudEyypRm4B",
  "key32": "3CHrpaKpdDxeDYs6Kv996VqxYszknFRTcwnpWVinyCJ1RKygetu345oBBATUNwsQonG3p1m4gQz6PBBsy8VyJc1N",
  "key33": "3xGpycupHPhtWG4A4x2GQNXwzyPQhnnqWfnGx1D9zk1jew1AuSiffPwTj4n4pY5DqQQRgsWQR7jwXgT6W8ffGoFA",
  "key34": "5FcCdAZpYzixyN6zBqWF1qJjiqmefdXM7tLsYtkdbiZtAyF2SQHLm4nwkHtM7pCronF6THRizjBX9DxgnDgifou2",
  "key35": "76i674GUeEpQekNiCAsHdc2Q1hivf8Ccrp4cZog8YwY4RaLtUPQgfrzJU6n38Ss65DqijYEhowgL4yt1h73iWeG",
  "key36": "44qKq3mST6WMQBwibxhwCvUVKJcs3Wnx9rvRKN99AH9XKzubTLpYB1AgPAZZZkSy2D4sbWFPnApmkcG8a2eSaJ4d",
  "key37": "3tni1QdN9UwJUHjme5cFLr6TaS6Ty8xNRc6MsBvKjUJcdP2Y4CPUQwGDNQstWSXsUSp461uQ5GTHeNzymJpXyTW2",
  "key38": "24w6P93Krxae4FvhksAe5G5boxFF7NgTmXnwRorUkEsP7SpAsU3nyLbrtoGxekSK7FQVikJF1R9dHXFUfhEqVtw6",
  "key39": "35ArqL8T6cyAe8iC3BegsaoYtuwtTb1WuRpFZ819DGCCn5cpwFYZKMK9ASqRDUrofcYfmBkghVW7qHsMndEAHmgK",
  "key40": "56uxrxQdskMqWTQXUPvFhuxyw53UkvbWUVCuQatDrquYXWBgm9HCvUBetC3AtMHuKLEBvqogYLq1F5CrbupmLKPg",
  "key41": "3k24fmjuidgCq1T89wC22GJ5Cy5s4CoNwprPCAqGZ7fNXktSyaVc7kuqCznMphWDPuUnoDNWSKQYGxF7UVgSVyit",
  "key42": "5RHQh5SMS2DpHZxfe3vZEPTms3JWExNUsNMzA4Nvv3jRmrssUtgcNi4su2A4tZfngP1uM4ZrrG7CNNbSFUsGRQXm",
  "key43": "gsbuDCqnASQRnuN5EeF5cCeKVZFeDPUFCa7T9DeWEJbRhipvhvPcJ9HLeTLfGerUXy3EaBVWhuTmWPDWbqBuBxd",
  "key44": "5Zij3xrxjioYxHZhJV1LWQijD6VmtC8Y9s71YBtEF4AGs1J446WUcqCfCyz6HDfj54td7vLQbof1332615yi8Ymh"
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
