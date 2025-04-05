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
    "556TiTL2wGZN8L8iHsr5TgaiHCxRvS3QwMn6X2UV4LCsjd7bRQTcZjRdYSrhQ7YLDa7NFamka4ESgkR2TykYU39f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NHkEBaCECgCf264t8e3pu4C2hc86VpUuC68GZEM69VQmgdQzd8GdZW8y3vszEQHBAqCGeXNgw53cw1dXMK57qvd",
  "key1": "4BK9BenbGZ4CH6f9MHx1s9x38BQWAU6fhye17ZN7KjE1DF74ie8ADQkcmp5KYTCNUvQij8GBbPEhopptubWdSrze",
  "key2": "4FmCAqTnZ7azHya2czdXapEBsaNQe7CEzUeYY3fQHZf1zRrH9uWCii7bd4X9SQQVmc1MKP9NMKuV1GyHAbSXpAye",
  "key3": "3KJyJqyCv7wR83ETxjV9HTM5tK6UT86ZhSD7WEdFcZ4dSZY69geov5XNGAye4J47dsXL4PXppDbJKtMqtUBx2yda",
  "key4": "3wGCfbL7Dt2Yyo92d9anaDgvXTctPbKmdt9MVGeZMB27gpHFNMrH8T4fNWPcLBUQ1228fNiVKgdLp4RE5bjnwo6c",
  "key5": "57GU2kCCsGtj7fPJn1Qw8oupUEZFBTMEc6T2MpL4sRa7UPQvA36JEHr1xRMJUmETewrn2uFtdKjC34fqjHGWJUoM",
  "key6": "gsnfAUwLLYuCmmme3ZeM9pTjjkt9zv5XywsWXxSz4cs2q4VVTRKHCU3pq41VZExzkSVLiafC5Yf8qpVSfBbgRR5",
  "key7": "zDCU19DJ2qNafBF3sM4SvwnWHxA3FThQ5LqrAM4YVyqMeecAKcKUsoVVT8kEcfrUfptL9qGZ6AsU7PNuX3PduiU",
  "key8": "2bUAdv21EjHfT2pNyBC43hwXviZjo67cQbx5kPu9ZfjQAhW3WeW783sxJXdKtPw5oEUqGcye2H46eJnsebFneQZG",
  "key9": "37zDCATX98y1g3jsNdZAJjGcw1zVXnXhbbviY3WziMQAfzZbW6aJLuuVGBvQ2JcU8U7EiGxmmZzyY3XJV3SMWyzS",
  "key10": "63bSg63GLuYehiqavw2GYPKnrDVdCHqc1DArQ7ySTBRud6uhLLMuFNokaWJ5ve46uGMAVReBmJCPBHy7xU3dvw2j",
  "key11": "3AtxL4Q2BZo9JctdhUBAKZM47ujT4mTrjVp8Eh5yvGCLrh6gU4umvBAvqgGUhg1aS9w4Nbxtt9NDRsmpvqVp5dpm",
  "key12": "3CwGsE8CSpm2FYT4dingG8vbpDku6ELEmYhmPaDJ7Qq9GzS8pe8a3AhmTiW3FCiW68dDR8gujqmU2LQ3fUb7UE1d",
  "key13": "21eFkroQKWnqfH7gYcwpR9bcwPAUfteLaYRNYDPAWBwB8hhF1QRhMPxXHb7LNacp2meSQ2rrcRebBoZy6zCw6iCx",
  "key14": "2UoJ3MUr8MPReZUN1pQTHBndVpXR2tRFnGgFSigYFLnfMackmCKJvBkhs1nTDzDro4ZHjBVKkVyqFe8DiW9aJkJa",
  "key15": "2h7CFdkfHFSCfo2YSWqJooCVYLPUqHTvNB2ui3cRtw8Ruj3tr6GYw2UZSendjNxsrLfYrn9145TLrehEFFCb2uxs",
  "key16": "341Q9s3xEzLFP7atnTD5aMiGuP8FFf1cyHsnejK4pnX9EywqC38DFXRGZrU7BXTyrvkAFBETqGG99tYk3ZS1g1DV",
  "key17": "3G6uQVTffvqCwbdeFg3Xi1vZzpssoN9dNeMkBuVnxX6J5pHHZnwz3d6NB6PpSRPLs37CLQ9MHZaYdM1AsGLQuXEy",
  "key18": "2Dqdi9hjJZaeazUVkFfLhtdcddJfxbUP89vrvySwSqqtrfSfS554VbMrGESZZgWWe7yQfJiWYGvC9AKXrAeJneEt",
  "key19": "3xePd7baLBfN6n3TFw9xKU1Tw3JXXoShUJAeJ3EatC9AUs9CAPtXaj44AHw1eWnZhKKPek14cL3VmY6yYvsTz1mx",
  "key20": "35HHHmTasAqnyKun2CCRyEfiNpPNS7fbXUNp3jJzbjq49zWTgUgPMN9V77q9NU12w5TJRpKVMA3FPAuPzo1BJNtM",
  "key21": "383L4vGcLB6bwNAUWFnyPbUXxuK59dFGNPVXHcDWQDon3mszo7TByo4yYoz2RJsCLNZHqixcRQ9QK3go7g7qcLEG",
  "key22": "4W6ex8wu8g9yLTwSULAcGTJHogt6xfAFi4xUXRdyCFhyPcMVNw4m8Dep9HspiYYYDPiQRh6eU6PCASCD1yX1gsH5",
  "key23": "2VSCzacjR4XDp9XnZ2L5kBQs6PmpjXrnRTryJEP4buyDnb1rGqqkd1X5WfVe45nTfRLzy4A7oj6VuyqwYW1TRLab",
  "key24": "2JWBkT9guPydzGf2AheScScf4eeNd6m1qw86z9Hkz1yYhvqT98MtYUqAwXKj1Ls4WQ7n3Xvndgya1qTo5CWPnDA9",
  "key25": "5mHumdLgWNHpaNVU5XJDdFc3hRjZiNcdWYWD1QiTzNyYdGR4Z1d2sFmQYpUsAJfbfcAXRvb79jDY6GjfWSmqN5JT",
  "key26": "2wpuFjnxzPCaRVu2PVbcgz7a4X8EqDFjyArM3sjsghjdysxdGVtsEB78J2qcKUxkq1Wt85i1KZ79T3kPnrb5WtBy",
  "key27": "3zAbHAvbw4TwMUUZup7WP525aiiYMJD9JB8hk41yFhGTt3s1X8MgAM2fPPGbDcicaGVPp8gWSSWnboCPSed9BjGW",
  "key28": "3zE9RC8SWLfkHYmywqqxAH2jcHt5415HRyFxbsLtjkCTUBdcsfgvazx8hB27rSfDTuSgMmhRRQMgVuYyaMnMCGwc",
  "key29": "4nXf3Xrmutgw3ueUG6Sn8sF12mG5baU13nqm3ueUuxdSohyV4DdsDwggvef2VW1x5bkYMhderBGBy82MtdTY1hYt",
  "key30": "29HoKVugUe3jf6eeNF2jRr7LTVvxJ3UK9HxJgPnNTE5ZEba5gn37P6uLUX4Tu4TwrCUp5Psd55w8jKStiWRUJbV7",
  "key31": "5caJ1kLpwY3ADGQA1dP5Bq2bUjvxzvmzh1YtptcEDW6kZg7ZTB2DcA4Wx3K91p9bU9MyqSZtsf5bBpWhCUaHKg95",
  "key32": "4pFazHzTekyCXmXuMqnD7ZDQ4t8vXrjSQ7AKCG2VWd6Bs1D7vkWjdPS7nXz6tivbobWKVqGMXfwyqdhCjHtCowXx",
  "key33": "4bFbXMFVYDnk5VNrSeXBcqbNPt7inE43fQjk7YuwY7uhZx2rSEoUwK4pXNd312aa6jZARtV4HLt8axVUpEiTTJDX"
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
