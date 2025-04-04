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
    "63bgNWEEk6rks5NAa8LD1sXQSDPpa3FcbLwJx3s6VhwACmJdgpuVyHTMR7s27LFam4b5gnEJN9pHHfkJ3rW3dKaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37VfgcRhvL58htzbHQ7sD7LpM7k3agUv7UeaF1mKAS6LsP6QssG2ijEJFSaiZpxy2zBihtbBWBLHTVyqw1CAt6nW",
  "key1": "4tzCBUPsh2DKuSLGAPEktckp5CssXnV3ighRJNEetvHbHDgYmrLTs1yv2EgfVuxzBFRGrYNpee27GPoY7eYbSEay",
  "key2": "2aFbLrxGmWz41fKGgwfBcWc4wLTYS1hCUVgx5cb2eaYmq8WSVCzqkVSMx3dLMHNsLoxpeNpiRNFDTyCS6KR4C1AX",
  "key3": "3ydecdGR8knct14YU3ur4WtnPFLReHgZ6kaihDxba7WZEgaNEaB9goV4gFKeqLznQfQFvmypkasD8QxkRuFitoaq",
  "key4": "5fSvE61yvAmqsaHYEgnAoR6E69LoAdLTzzYd5k73Mits14mEfeUTxqfdwhnFiG6YRNLmQH3KfooPCM3y2bNLT34P",
  "key5": "4eknYNpRZiGDUFG5gZKmGP1WNNoEAiTXff3TfvsmQ2NTytthwvMxFZyEt8iuqixCs7iPfEJcYU9JV3gHxKBCtRw4",
  "key6": "3yZWXk5USsobee7pty7sRsN23a38haqohRwrCATj1pNF6am7ga6X41VLzpk9mYGD3cihTkPorvvvttC16SvZSYTo",
  "key7": "2MQBhWvcqbLaBhzeC2zUtHjbcU5hcJSNPdcz7XyY5zQx7sjfxr8xDSUdqmmyJTvj2fYB7ngzTdkgkuzNaW9UtdXK",
  "key8": "4rMdUpQv8zbKZWhmPjBx9HMQexZj75CLmpz2pZsbf8e3YbydAZJPx2gqGEzFndXi5r4kGJc4GUJtGz8rjadHFv3w",
  "key9": "5pRZTtMdCjBsWFbjc35N3nNV2CR6kRyikP7AD3muvafV8dBeL7an5ehYRTmHda3fjcG8u7uun9BHAeDss9gptLDQ",
  "key10": "5U5EU9BFpFZfRyn3SMwPEwQjUxqkxdr1cJYSJ1yb62xFMoBEEK6vAaivgvjiJ1YHWquKaZZVCimMLsAz8fmjynop",
  "key11": "oEo3PrpefCxpb6T3RrntVjuQDhjsV1gwt4Wveo6B18iARaxQt1iiocjLdXWwtmwSvVALmHWtc1577YWdxPYyG5m",
  "key12": "31mvZRPtiLFeCQofjidrAfDLx79cFvfHpWaoT7md1skgRArY4AFiuEQZbCk4pjeG4itC6yqPJYipASpDy1EjTE3x",
  "key13": "5yy3T5g8FbqYvUHzZfBc5dd4YjPpeYJEVB1it44sWyyvrpVkajyFpgA7mFZbktKb6K26KvHpxCvqZFsRPGUoyrnm",
  "key14": "3dfVYonHTn4PMWfCK4tiZ71fq7zeTNJW2HGwoMppmYQw1LGXGZ15CN4NJ3FN4gLp6AzwKp3W28bFnqgkMByaKBtH",
  "key15": "5cdjGvD7KDGtD5Jn8Hhp2Ys1bHNK3YGcLTXB3v9X81xR6D8QQnZSGzXcsE3GRrF1Sh2QXm2y85ZTiPnPUnghVCJA",
  "key16": "4EqHjUsdYUWQDfx3JQ3HSH6y8u6iCPdTA839vMtjnQawEdfrGxUjpDUq2dM32W796sF1FF71YMaBtmCog9vPVnjG",
  "key17": "2iRtC2s7gDyZXqruEqUVyLGW8vZu6WHb8BR4qCHGr53A5fPSrK1sQJKowvkwT6TjCyoywsiqJH3eXjjLQ8fqHdaA",
  "key18": "2ym57PrabDH2pUjFz5Fb1yDfwLgxZEW1Pjfts346Gdv6iSSuiKbgz3htW2rDWJ7pjhbcsYmuESuYguqbgE5AMbTe",
  "key19": "CnNpy6WQhLeji8q98Q2koRsF8a9fdi8ZBw237ZoutSxqMgF6VbVWJbwzJ6hQxhLX7yTkoPBWvpWre8hgJXHEhAD",
  "key20": "4ehQ6UrLzEGYWECz28PhJLqbbUQ6naZHrRuVSEz9EKjNfnxe132n3Fxc1AK5Vrk5KaVRgkfVELQxXPWPGAvS4aH2",
  "key21": "5hiDF62aX1GUoeNfsaTtaekikJpMkSWQwZ8H4nUw9Bp3KQcyfY8BLbsB9t2cCwovywicH4wYFnhZrL6sJw5GMvik",
  "key22": "5jdzWEY9hvcyZPhWoo2NiV1oiydkdLjVQqnr2qCKFRTwMF5RDLuTVMCJsf9qn52LLv4W2GdBfg2s7YQkkcHCoVj6",
  "key23": "2UcbwusvZBDcPDNyuVH7ZkJX5YRtXYPbhzGbWf9xEHXh34mVtd8ZdfUvmfnjLRMHKHbQeXknsiBMsQHVTwtwbbWY",
  "key24": "ZTagKkxqWAWjiETG4r2UomCqnLS6yNvj84tdJ8YkcAPtxKBWrkGtzfqWPxESWKtNVYZ2GESCgFNL7UcAtzEE8T4",
  "key25": "47PXCfLXaHCbSJPxvVBnU5mVkuKXECBcFLBVwrgLBZquJ9mAxUxNanu3vUHergBzPjE4BtUmqnaXeWhdzLzo6TvE",
  "key26": "66K4pCuaeoMnpGkuiJzDEqvFCAVhkj92MC98oLke5FCjw6FWb4mVzXQYXyFFJ9CoK7Yac3SnWpDwMtEKmKk5EesW",
  "key27": "4HeKSdUy2Zmpp2HePJYUWDMJY2EtT63jJL2jT374e1V3HFd1s6iHN6zfjLr8LYncMiVg9Kd1iaPqH7M6rnSv8nzh",
  "key28": "yA8gjJWnEqTdSSQY6CkBoWvoPNvY5FP93W7EkUKFkN9HqGdBUbm3G1CNcHtX9kkRh87J9d7uYCiKNKTAC5sMR82",
  "key29": "5eTufpLu3qyg1FxPBhE3PQexRKojUUSJhShMq2BXcn5GC8QrDDfrbNYPD5qVuKVhgZ3ugUcEsqoufVrXvf6phrbn",
  "key30": "wphAsw228fAQ4AVKgw5AGVKXmcuhcCpU72xVu4WXvdyze88yt8CiaWD2oNbS9kkMW5tS7ZYUFT6FKmjKNQm1cFh",
  "key31": "3BZC3hhuFeLm23pai6EpMFiRYN5e4MQZyqEC4Gxv38XzdBbz9QmWW5yqEzE4wYQbsH3RZ2c2i5FFLVrSSMgDFK7r",
  "key32": "3BP1G7LUKkZX3YAFJeuNsP4x6HHCeC8JkLdu7gJAyFG5wJmnsxMBkeQjo9zc8N67jdcLcsFvAbDYCHyeG3yz89Td"
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
