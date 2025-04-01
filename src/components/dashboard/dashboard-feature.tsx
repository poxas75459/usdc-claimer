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
    "D8NC4NAL8LtRCoTCjvuKdVhwHkGAWxJmXirbdhu2CvMiJ6F5AqWLU41Ykxhm6JaL429EinZUXvYgwCT3jv7omSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7oxWd8oQBJwyG5ZxvuH5dLtmtidU5y9sLb6wUVwDyh13jvdkiWV7WeyzS1b3i2Db5pZMuHTpdzVa5TYHheMwqJH",
  "key1": "3MRZ9xKeLsnw9hWczZzTj6BQogvwAaqQfyErwBpFvq4TST8kAtKjMcpoAyfTyPn3wSrVgMYpS7JdA2aTQLuc9pzQ",
  "key2": "3iM7ubRrKCN5vvJaV3X6XQKrdwWKjbde5SxacKV84WU7DLSBQSb47mbv6SSTVXRE9hkVfQ2RKhnxLvcGV1q9DfEv",
  "key3": "2cYJLE8cqHqWrUcZEVbcNf2ZW3GHk15uhHVpTzT3fTi9ZdQ1xmHeKroGhDi134jxt7bktQo6w7KmjwJfJKWEUYry",
  "key4": "24sjxCmh14UGLoFmnegz2QKq8nvDPTYhcj7VDk9FEr22iXdqiZcQUf8EvfxJQZAGuTDNdnhZ9m9gwpHzuWdTsfhQ",
  "key5": "5y27KPYSu7AQbiCgCPUsEjDtS6k1md4gwgreaDqRHTF571wtiikQvh7sAWHukrPZLUHXpgVm5CVzCKBmmgMSVMmc",
  "key6": "4DEX69qcC7zc5C8CHRkwBiEUfjBYHLnTNwwgUvdHv88zUZ6TKL1QubK7wuTNfeWRkUma3ki8n9ksi36m1ev6JpoF",
  "key7": "vp98iL4YiiZ9oxvFp3BH4hihMYKu4f5jL7RG5Rb8wvAHegnsGL6CujBpfBBxz15VFVYhvsTMmoF55waupwQvRVZ",
  "key8": "3VQ252Lsfz8eZ85LeenCU2j87hBmMqUxe7auJBGQ5kSP8j6twsU6Nhmayqd9FV7jEugssmPUrruap4ftQbhGJTs7",
  "key9": "3x6RmoWW4FEpY3qLpyXvhwXJfw3RXNFJb3zXk8Aj7cFhcYk8QDm1SYyoifEMHaAQcEDhgQcf9wwtBDrnAHj4jKnp",
  "key10": "smV7SKeQg8qLgSgCydwNjubTeYD4LGZtffmzvNiKDjcRVQeLufvBX7nxt7ZjUmo2trd32kFjmCcFPz7Whh5n7GX",
  "key11": "4fytQzrRUtL3k3GSTTN2g4oTLQPd7ArqCoV8oPyRjQJ5TNA1sgQCCtkcFtfocMnNTmSdZNpmwok7L2qJ1wHTvg8D",
  "key12": "3s779fFA82TzSos3d6D4R9Bi5Cvi9hskXrRYk8tPYVizSgeQ8tuCtYsiv5PikJVBXu9cDvS5MzJ1Wz47sv1SVQz1",
  "key13": "2fxn3Fh9GV5ew8XtKgBmoTstknzeUChcrJtK9VzeQiuY1wbpR1KXSrYV2j3VinAsXb47SqwaZj6wjrPHNbLPa1nS",
  "key14": "2T3QgbHkfUyqEtr4TWkpeeMVJ7LLeozZwvNvWeWsBni9AZN9A7xqrLXaobtS36QBDBmHE7yoPM7WRKoG2rsbmmQC",
  "key15": "Y1GBjgKTWEwqUMFbumFBfRU8S39zqsb4yR3NGLgU7NJNQSqoh8vQZNCRKJniQSaDE1xvCq7fqs9M9partCKRMgx",
  "key16": "meqgsEUrwCczeXnP2kLrNkE6P4zUpxcG5VBpTptZLtthezRu3VcQRcPMAxJDGzLtMPuSC2DZXhpHzoNCCmuLnXy",
  "key17": "2mg399PuMshVKEBigpFoQhxtg41g4XdmKPNB4YAZG61hAbh38Qif7bULrw9Tataioykgykx3iVP6aVPgWcsJNRPQ",
  "key18": "3rRnpaDMDdCVQ2nCC5rKUCouC4BV3VUR5yjqzVRahxTThkZRygZZxvmWVhPvrAdwsgPDCM2ngHGqthnzUC47Twbi",
  "key19": "4cmAfrZRmuS3nSBcqKZi7Zj85T2sgws6sCgSV4zGBWdZwt9XPDaHdwLMqNAaH82c37prcYMWpxuX28Bst28RvE6A",
  "key20": "4BEy1huqmoMV9U9dLEf1e8tcdzbnQMDkbxfmiP6ERC8iHzB9tYziM5TMLyVxfx5Q1VSQXtfpoCAVPkoH8AZpAqty",
  "key21": "2RUnemMpa1R6sadeNJsQHT5MLc4Jpqgmo6SSFStWTgZRKBKy4cRZsc1XCSt55poNDU9maxBvepYY6gRnCqZzjTwg",
  "key22": "3yYi6Yt9KM8JsLGz1ys9XSeykqeVfPN9pA4Cp7N9F6U8rjNkyMERLCJhkgoBhvkCRnB1syEvUyc1HTpZqPgZdti2",
  "key23": "1tKCCdcL6VKGBXvWz91aqYgbC7Rtk2eUgkwddrD64orawLqpZNE6hkFEQuxAskorMPvtCtCHSftHNQK6y1e7FZp",
  "key24": "J7z2UL8f4rcPmGUeDAhtJBEd8iEPdKowkVK8eREL8ZezPjgUpCPpinmMob7PbghWKwqmptggCYfoWQw3GC962ty",
  "key25": "4CP14u98544NyKfAcrccwfAFusMK7LZd4nkyMZikPLHMw9efame6o4kfSvbJtfYkirsfCqKf1fYFYFe1dKx8DY5L",
  "key26": "53yfUfe7HY3NsRKu1UYZ7sjVD1AgWLpqVwyJMiVJcxixa2JAbNVBx8qy35iLL39KsVRbYYGbzDbQaiV6RdbNRNzk",
  "key27": "4FnSk1dQ9KK7G4c5yNSmMQzKxdGr8DrY2sowuKSbN5gcqbhJ443BQTZWjFU3hVRm6dsj39Fv6UVaD55mATbbk6ih",
  "key28": "3jWpNj42M3ZaEhznCRuqw6t5g1XNcce7yFauLre9YDtG952ksb6cby31mecGixdKvDbeepoZQkHcUKHC74CR2Zme",
  "key29": "2ymY7K2HGoQXpmWYbRd9uWaXWAu2pUr4g7Gq4ghHnuFdxbPWrrMJQUbRVKoMM1fQSRpRa9ZJsAXYpLqe5iLvSZMd",
  "key30": "4US5vJGXFQ2ySFbsmWwXtpMLctgfan1aUnjvFCirsKDXJkfWdr6oTnhbrjkLjpGXCegPn71msFPWSUfHDAgmBRQn",
  "key31": "3ob1ejgW9gHF9hN7huuwRKCrkKfkhCFgrSyqFBBU4PpipoqwUpcK4pVfbY45S3UiwHg4DxrxNLn1R1EhnYzV4RQ6",
  "key32": "5rkTkGhjjhveW8gfzXNPxve2LtJ3Nc3K9QA3o4C3Xf8P6MVS56hBDJL2iSHLXjexstm1m8RSJZ3wfLKxezP82CWX",
  "key33": "5vi2oDvrEQb3hR739Wy6mvjQfnxHa9je58RHW91crKghMWU483xE3bvutofuryizBoNErANJWvFfoHQdDRwpcpTL",
  "key34": "5uUKnTNz7eiZAZiDFp1gsJtnvS6K5oaTrBM5PK7ALMKzEyKTC8yWKHCq9buK6C8G53vZ7bQ9oJcGKfhz3E763VM3",
  "key35": "5e8xBncN92DorfLiPiXTorSnb8FA7et5U1vXMu4WXx4ySfiA1VzN2xy8hYTmXhqptjmSnn9JMR5a7p9PUdGgPNTR",
  "key36": "sBy5vtRKv5qTSuzjfNc5NESjfD9RQHZRoNyVLCmKPHogJoVonA62rQSrEfrnxoHuCpVhgoUj2uutiicgvsY7NCv",
  "key37": "45478pfD6VeghxejRoTSYGnfDVvvAvvDsoSXyUBRZr9TWwMX99BgnATZ5BHWdzj9HHScBefbXphnQ3JMck9ZzS7E",
  "key38": "4UEXgWTGWAGLebp5tsALt7tb7jRaS8BHTuVc7jE5R319BbHLrvXFtMt5gL3Q24C6hdgbjRdUoLQBN3dJYEKp5rQB",
  "key39": "SnwWCEJnaJ6jUSvmUs1emAGfMpKw2vNH2qMVRMq9RJG2r94A1w6mZC8NE5pf7UVJrNj5oL2v2QqzTbi3Ljg4YXe",
  "key40": "4PaDpsJWPSPxQmWsx1ou3z7W7GXNmkkSjphDwucWGibBn2RnpmwSk8k8foadoHDMYCzX3zvmAKkGunCccHcET9TB",
  "key41": "3YvL4ZLqcQPsH2rXoaKL2FQ6XFUxTRnF8CveSVCBBuDnxqfGZW5hktYjrNd3JY8vtpXXtKLtESDLK6qyJs9QLDxw",
  "key42": "3yBaBNq5oUSLaZkpeUu6tMuomUKER5ke7iaxnE88awo1mPd8wkHWkcexWorsXojy4b9NvdtpRnJqPm4FqXk3zyFX",
  "key43": "5ssWiSU3fTG7iL7P7Rb9veocFo4t68SKL9axDnGbrYybD1UkLGsXjeH7THMUuqFbWWZGCHpBseJ345T8WdctGeJQ"
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
