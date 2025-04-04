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
    "6Dcn6H6kogWJYx7i8gaLZLvD4ZeSjp3H6ap199op8jtGurrL9rvBSoPGu5TxPU6W4SwPGv4ztnmjPGfcPB5cwva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2asoYKtyy1qtHqHLUm8r1vmBsY9jcEJsEYrNhnhBf3BgPCA3Q1Qz68bYxk71v5SJjCC58pNJxoUb6Xh9j3XpPdYM",
  "key1": "22qwVmATToUQBJ47P2fAoPKs56xK9VKdH5eTM419tuyqkL9W19vcTqMJN8ZghPybLabDXbJLBwaPm6ngsgDzLHTR",
  "key2": "8bq5yzGrqSY9D6KsvyWuAYM6WAxfNA4VsR2vetqTqxrWsg6Zx3WUubyuLjpbYV3T5esW71jihhpMR1srhkA6NEC",
  "key3": "484mmSEoxhowjYuk192t2jQxD1poruER2saSJcVYgw3vcdinctHmg9pUDgX14vC1ni2BWTg1yKpEAzpCPHFZEWTg",
  "key4": "4cNWUceD5AWwNgb6RfLFeaCx8WCgMhnyCTKuFrFjUz8WQrXZ3ovhxALXCFnCiMZQh6bQeJqa8Heqdmz92DWcTPZt",
  "key5": "2wdkc1xqcXtDDoHjLo3TNQsxZA6yXoJxmx7r7TETEwAqB5PPf1CPonAj7Zsav2bs22FtSaPtZb8hoTgSk3rFuNyp",
  "key6": "4WwfCtsjcPdwt4jTyxbKxuXMXF6uoJyQg3YLEv6HSyhx2SCxb1NwUFuFSaDjVRQoVyCAXstaeNhov5sUXXkiX4ud",
  "key7": "559P2MeUXgGBc5k49kfz5XMiREHf2mZpmahLiaDk3J1VtvGNouXqVRq3RzdHHSzgKDHtScAyBNHntht87zWk57F1",
  "key8": "4cDZ29GeLFQFfUGXVNHoSXd1YhVx3Zfe2TZPgn5kQPWzibEYz6EQ1apvnAittFHTEFMLHkNt61uupxKW8tjihtwr",
  "key9": "oEo3xuG5Un8oRQ86QyUoafYg6kkN9UMUXpbYAR98RfvgQ4qJDKzBiW5jhszbBJaz8vaRUV254i74gdUFdBVgyZZ",
  "key10": "XsAWjwprXHVcjz4x75KAmxunzCyysnxADpz3s2rzcsuFzRa2cdv1F3bax28sf4BCDCSoG9GhqWbj4SAdLFHstFE",
  "key11": "3bmjqZhjgJK1AQDvdcRqxCus78meSGBviW1ZVgaCcoPQbFYJAAUaoKx5qpyLaFqmqerm39qtqNGYP7wKARA6YQTt",
  "key12": "5Qqr1DL7SB734ss8QBjJhhyZhPvKFdG9fUtMRx4BKXDLFEmxSiBvqt5q1niopFpBZqsT9fAfSTqnQrWvZyKHhcne",
  "key13": "3V2XraWaub1AoZSCHxaWsGxNDKCEFVRmW4QnUsJSJqQE5fFQMmgJMu4fyKcojvsLPFBSh6DcMyGxKgxsQKvmFFqo",
  "key14": "37KwbQL9Nsz4JVeEZsTP4awkehMGWzW9uHfEEKZD2Ad6U5DcnMu96AdsYss47QJc55NvqgGQEdkBaar6yk5bViP7",
  "key15": "5GsuuVetuJRU2983XGywGFFasUXBXVfvJDyR37VV2rohn1uhCRJ8E6xNAsWdtqykiuAqTqSXyYFoec3eTXeFCmEK",
  "key16": "5NbRfjamURxki9XNUMvYAF8iWpqnmGPJ5xoXWWVumD7yAivYQJ7W4iBjKMpcA1LmM6G6HhDspqiCHd8kwyLtn5z9",
  "key17": "3t7cb2nBcJwFoQ1byS29jEzbtuWtH769QAM7bDEY7nnCUDRNrEHWRDykt4psygt6Hv442MtDhLTDD5RY8oJgMizc",
  "key18": "4yNZ1pDhUDYcHpm2nfLHsaZHEN5f93DNMhBUWfwt5fiRmUFbkt1EVhYtfQasC3ho6Q8ce4DrmfK6dYUXR3KUfdpn",
  "key19": "3Cq68Grgb2PvdpvgGyRu4VyprM77Q9o63zbagDE9pJ5EmgkNCTAWfoFE5UNYFc9DzrjDpwuKmoJKEUYudLw6CNtT",
  "key20": "4By2fTSAb58DboKCX7BGmZP61RvGA53R5cCx3pYxeVEMH8UyzTLzB1suXkwKpJNt662stcHpKSYQ5CnWP4YrQzBD",
  "key21": "48wvzk75CdknuKkG8V4nez9rAqWX6LKod5Tkwv7hJwfMbSnAUo41MM3CAU3LZnh3H8qFeRuKGo6otK3CxFPALt79",
  "key22": "5pB34NzfS8SYsK4HovpHeEmq1CS2hYQzo1pvTkffkwK6QR784YYQHCtZXbk2oQbjgv7AmiNAvwMJQSrAfguqBUmC",
  "key23": "4VhyRPZUPp57QG84J3vWafUhh3g4rJk2nMDLLRC8LaLYbNkj3g7UJrey8nE3MsVLFqWwvjA52LG1hTqUFssuCXmM",
  "key24": "5ExG58U535sR4SpGp3E6tMnZgu2jRbBPdXJoqoixrH1erB3aVCP4ezgkitGUWK31WErMrK9Mk3yJZA5MRhVdNah6",
  "key25": "PDQ2QU7Gs11BcrbKErMSEgmGQiZ1zDEP3uxg5rwrv1SEw5RjXZJYzPNepRkaoScKkuzfPddFftJL6HooShH5jvw",
  "key26": "4HXpgd2v8WFBw3PnH6NWVFL4JsgH8oTVwtM3KBg7R9eXXS2WBuUmrVSN2gvBT58RhjAhEYQNTLjHyQ7SDoPGGspU",
  "key27": "3LGstLgvkCCanGei6nKQzoYgaTd8RwG7YTCpVbeYDdkNbCSnzfzpgjWe2pp9KnAL5gKMgkbuGc2aVeoLtLqaZmSW",
  "key28": "4F5UidaafvE5kVL9SFFgtsqAgXxC1jxCT2qLKezGpr8TQRN8FC73comMgUXNfMzKzvgM3ccJPpvugqbvYNLRR1WZ",
  "key29": "4b91GYZnTgTpEdTRxPMYf87wsyNKZKqAXcBQMsV7pZYEVSpgwt9Mubyhkr9NM9XrmqKSZ4KH4fq5ChThrm3v5cTj",
  "key30": "DsRCQX6qrJZcLZyNtoR7PqSShnRe1dTXrHC62QM43S2cKC3LWLR8PxB2zMUFEGCsFYYQtMQKCHpBJU1HLRyngoh"
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
