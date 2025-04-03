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
    "nhhVhAz1tdCLCW2esmNLxkqbLEBUu4q6ET4YYqAaoVE4oPN53ZSCgR4bKcZtU3ZA71wdf1nuFYaRH14AZQ7xu6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TWMffVqRh7fyjHFuCgzXyBmjKnbo1dMkPaCJwq77xLbeRyjTyN6fNW1BTyDoZCCLCDvundw4j2kUPWtBAPW1g5Z",
  "key1": "3msk1jVSNsexWupgGBYN4sRPSjL4AqDnbriYQNSobU4HS928hrvXifrar5CtkDLqurZrBscwYgb1vbj42xDCxhgM",
  "key2": "4uDv3SEjtsVGkWmUvRvh4NhaVqwTkLYvnbvPEuWuYnJH9khAAysQQZ5XYadBaVFpGDtETccfxzVTc9rc77AKZQom",
  "key3": "5vbn3R8nAD5PezKjmovg3rQq7E4QYELFAgmA63NwZC58f9JBEsG6TCvm5BN8wqkhvVHFG6iGeZsKqUre2NagFZUb",
  "key4": "4EdmkG4znfiBGH22cZnmZz882wgGVBzKreCNCSkgRDtRBuNs8e2KMWN7GMx2cKSb6zNJcHSenShMek2nsrQWwy2M",
  "key5": "3JA85BDZsBmzPtfkq3BeEJ6g9pCzuwSn7uP6rmLGL7agMrnRtn4UkAqXYD42kFh1zn65onWt1sqdh9Tgsuyk2qER",
  "key6": "38t5PhNJZqHEZBSxbRtVxpzZRFt3RRxF12ZVj4JEamuCBeSpBbfN2seH1o4nLK5U8P2x833o4BMxuv6nW2jHWwX6",
  "key7": "4TQS2R9ShrP9zs1uvRE17ZCnme7GM1ANUUtXuSMnGrEBtEKJsxmXTx7FZaVDGwXWwX4Z6RQuJ79bvkGFp6KYF3cT",
  "key8": "3GBxk6JPvdE8QzgawfX1Kubt7ajEVdPkMPssE469SmN4TaYmm7fUDXBgp4JpUeo4X9v57S8nfe9PvTGNuT7rdxPg",
  "key9": "2RMeodKcqnPgHEu9MA1ToBgGWEcoTwu4eDaHn4UvzVKUuM7kTsfWajvdywQX7huRpMfjHnDPRuDT5fpZguYsXCJu",
  "key10": "2tr1f44ukWgZiecjjQexhLjeBZFynYsbaZeBgU7NdNUfWW79amceGXZBt8aVZtJL5gyUmFF8rjzjbfRS7hnaKbfo",
  "key11": "5JnbDUAi1ZM63vXW9oUmXZNzpwiwMBkGAYV86DRaiWF3n5EX6pAuthvBwtPRn233FKEXhex9YXYVGZPuEsp4vzMP",
  "key12": "4pnbrdenDxPto3ruRvKWP8dfJDReE2S2cnCL3w4LYKsod9JjB1TWXpKaQjiTiUdvETSK4MV6ieRYo5jyzioo5U3k",
  "key13": "3xZzghexCQu4rNUoBfnAX8KTRtS7mQrAZNK9XHDgXVk7uuS67XqqxPB2a97nHHdiSu7Dkbffx7i7Srej8HU9K22A",
  "key14": "3u3LWWbdTtPCrkWpPpbGiSZ2GTB7QAimJdzv9Zywsi5Z2axFMcKxzcnMrhDcBPH9XKYskg6qE23wCp1LatG16S8j",
  "key15": "3me9gBL4Ba4HTLgDiC7F1Roy7FW2Mo1LNfKFjgsgE1aJBVgxQyXQH5ti1JxN9psabAmDtuFJxLgX22jGk2tvL746",
  "key16": "2ghNeoWJcQhvZLWz82EFFbaMgVzrdD9CjVJuqWg63ivDm3SdeBHFv7onaJetV61BjXNr38Co8AyskgedNzpsbQGv",
  "key17": "2kyUrUBBJBEsuj7kUAyFLRz9cFubAm5AVAKQxhtH3BMRttq8uocVWbmnYq2bGzKykyGQ6T3TKPLmdzD46jg4JY5Q",
  "key18": "38yvD9GtKNxKZyG5JRfxuaC7JXkFzEXFfpLHFRxaPAvyBAL2iNEGaCtRjpSKmXHi5gWuSZpckeMcjWmHnCafktHm",
  "key19": "4Pe8xoFgMha8UTZvmLdwAwRpcyTWUTXxHcGfV5BqkKiA2hMsn6gEC1pQcQ5RXqy7UoyjYnYQL88Xkq9ac1fy2zvE",
  "key20": "3NUUmGCTfZyeqMjbZ2M6bkasGSeaQjhTd1R9MHfuifRWd7KFJpEB8TvuMRLHujatM4wTtKZcWwPHc8wdxj1ruDGn",
  "key21": "ieeHDZXGoSny9xshsgy7gDPnNhcmia5nSQjLoFzEggfRff5Gno61YaaJC4YXEhzfehUQBRdFCzeYagV2ULHzqk2",
  "key22": "5xEX8fGy1mHxcjY6PQNVohRHAmUMzM4cZdZeg72iwEW5kECyAGrMNcqNU4TXUotwDH3VMas1gkFxJs4fCCSJRjfk",
  "key23": "3uJFgK3L8CmmrnhMYsGZsYqZUk4Lgdx3kSwAhhC2xjTSb3fTuyntm1t5equgnWcgcsgK8sAWU6BNwegq4LWXpu9U",
  "key24": "2mFxz7t1MTsPrENNsaQtN2uY2KRnSSj3VHKsWEqLALbGfBJBsUAns4ymqBpB6VEgaX5LXi5ty1BAM7Rz6QYxcEfh",
  "key25": "4yQxNuJKMyeB8cyxjJ9wCZ725JzSUkH2yhQUc48kTWgCZL5CtGgR8xhqiHE7gcLxE4MAodqce5DbbF76yNm4dRcE",
  "key26": "2zJ7ssuRkGYVsYn2i69hLHVMhjsUNbrGbzCJx5N6pUk3m1ncpySkjuRWhs4iyXWpdQ6JenMJ94RswGcjS2tx6QGR",
  "key27": "3hddbCgPmaux3pAxaGmtWHhaD2L5HmWCxaGhaQwCUKLg6PV3Cp14y4d92qEALG7UCn1ZCujPwPtcZhvc2CQS7sox",
  "key28": "25AprKzrRcxpr6KJnZTErHG4AVp3zEWedwj6fhD6F7kphVP9386J8wPYaykfmYYER5oYu26hj9RwDJUgvWP1rcLr",
  "key29": "8fqTKAT1cUu8pM2mbknmxwNqVoB6tZEwjhwevvHVP8xWKuLojJ9nL4xYH2AHu198w7YB55rjUmgqfRi3b4UNDRt",
  "key30": "2dJXfTd7MEdnFjJJrfZeFExJniQXNoFihKF68NDdGtJYpF4eoJgwwDmYyPSuMDjBD3oVv4Lq7nPPd2suqpr871Fh"
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
