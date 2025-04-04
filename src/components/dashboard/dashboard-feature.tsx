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
    "5hWk11yxfnTzSVBPKvnhUPd5Hgo3HgNQgUwAkPhjSeLPMqyo7P3M3CTrBE1vCCEA2pRbMYdmj9ShtQQdoT89P5NE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gg5JE9Ju7BWsYwoAdextXJJecU9HDS2vUouyjAAwz37Z2SGwYDjGqfTASJ99hDaBEA9GhUFZ7RgZrcHMGa1zM2d",
  "key1": "3VxZmNHWK36CdZnrEvbuNW1kY9zunms9X7fNgVs46vZqDayCAWxXQZpksU2g8ApSgVvbPpmaDYuTjd7Wh3JSsaej",
  "key2": "4kcqio7CWBTJ88Atw9KaPWtdZ8dy7JqdqZyHWQXDcd5tQf63a9A5JEagihrw73V1YUPMjjufBjfrRFYpnVDsbqw3",
  "key3": "2ytLHzrvneBp7c1e2nELfJSxmqkgo5iKR7qgrMkPaTrrLHE9yH58ntV1pqSB8M4zcx18uXp7rGaeFpTtH5oTX2Zx",
  "key4": "3DCrGkcd2sDhTDaEfxEUNQuJ7bSxifTk96Wkq1zXetH8qLxonApHQKQP8FpuPxx8HL8RSnLNxNmCeoWSz9njHRWu",
  "key5": "2rcANjjbJUBRqoy7Mrq6junsmCNBbxSpznkSGvhGMxmrZEb46DbNF3MyoN6UQJt675JjbmmMLbR4zbazFquZZWq1",
  "key6": "TYGiBJMP7Qcjfdg6QkZhkdiFrLvn2cZko8ZNEz3dT3uoQupU3NMHoy5djsFNXkhooMoez6gzNmNrAdo9eA9axr5",
  "key7": "41jazYhq49SNxxSoyjDBYUJa5QsKKvb4TPZS23bY3XBEBfdx6bXS9X7jap54W7sLEpmPxUCpkBrLubfPCJdNbyiw",
  "key8": "4V3X7qWqDW2s3VWfpe7tJabopCjCypZ1t8eK5QggzcAXoFkjDDhDPc2coXo8Ve9Wk8313WLMUWBT96qvxtKbJusv",
  "key9": "3XEEmFBUfCTTVCZCSVG6ZoogxutePcWwj5bARNtkHCCVt6RzfHNXLhuuRLZK8U4sz22f8oAQp66Mt7QoAH3GaHve",
  "key10": "VAfKCpMSJXjeG3ngMhd1H5pZyhUPjiuh4V4m7bzywh3sRa1szbqkcitiQCBK3qVrmdZs24rNPuTzic83B5CtKzU",
  "key11": "3rLx3Tv3hsh33eXFhocikPfN2eCJ3Cr3eJAdfU9bVaPmfEVTmTE5dhjWdwYPQqV7xeE3zeyURnMRePk57n331he6",
  "key12": "4y3XK8LxjXDvbirJRGvoyhmhzBVqKfe9RVjrDAKnDizg4vaBkJbY1CxqiS9V9meuFHk5AQtuEq6u7nVFwPM5BhN1",
  "key13": "62QY9pyzfoTtdeUfYHWxxjdsCksBJAiAiDf75PQjxgPqC761Tm3Q5f2heK7vAv8bEpsnvBY7uedkGrCP1kDSTHnC",
  "key14": "5EuZFGaSd9BDbRJmFyTimYENx7YuqaQhodgG3KmZ6wN7HMNpzztYv7QSucm6rTVgQVMLcrT9XTNfhBVLfWDmvvwJ",
  "key15": "34me4cHAWF35kzMKBToM2sHCy2qJ9CbavwYpY4YTVP2qvcEcy4bHtSyJxhKRaLThmS2MW2hzG27wu5trcBrQk6Ev",
  "key16": "36U6jgZaT3AnhXBGEyQT8jVLBFqBwQ47UEQcXpvpsDpRXCRbYQMkjkxKDofa9sned9ZXuW8HAxV5BdmgXuy6TeYV",
  "key17": "4BkXGjJZxKzAQPPuA9tjcC5oSo7P3Mb97chNHudbE2kSCQUSZ3JYr8ZEAGBJo3BVzRufzpHgvhKZaMWhdZuzPBk5",
  "key18": "3gjaScskk8TmUgsRa2BKdFpibcLRAjkYE3B7eG7zdWGvtLdyCf7x4miinBhfAjEnW7F8Adhr5pHTrCWmQ5G1aTaq",
  "key19": "5D5U38dcS42kTtYHsJU5QNexULyKYjXK5yuUXRR7FuQHF5nRjAsr9ARsHrVvqPyAwoi2Mq6CrnZfMfvDzsLyJErz",
  "key20": "4ZR1Hut34PGGoV3AV1ju2DBWCiRtBse7tjKYTihRxKA3z7go6gdjsFVHXXhEgcryQvjE7oZeCR934QAfFGJvoUpC",
  "key21": "5pFpNCNpommCb9Q2D7EArZ4iw9eScSmg7zmVcZNmqpFE97yBfFdNGBqphcvuJs5GqSEpy8hvUJF6cvbasoCiKVC1",
  "key22": "4NQUCAPJupz3jj4QgwRKfJyTUWQDrY8senzdzQRYaUvtbrGSDvsxPhoqeuZthDYJuA9JtUAYkwDUQtwcJQVLXmKu",
  "key23": "3TbAqcnRmumWxUqRZ6UomziYj9SfQfXyZjMjt3979e2D52hbzDoX2RR1sgnaX3zbsgF5Dcr4C5mvU7FFoz2ajTAo",
  "key24": "3FeMANYrDXpusyjKBKeE6mJkvG647tFwUWgnWjNEExPMDQh3NQfVBFDzJ68anHwXrGYLBLL8HrHhoumwznVynKJi",
  "key25": "4obB4B5RRSooEK3M2NpLp7gn8ALCWj2vTrnbSw5QVuGzCyztyrSkNk2pX29p8d4LtRSREDgwxr6FKX4pg8e6p8pB",
  "key26": "4Aw4ynifKTMtDoUAkyd6imrVgpHRbgoRoq5ors3D8WbXoeq9pgBXAjpD8ZUo3AYwKBnJbH4TCbE4r1LNFnRYLP8Y",
  "key27": "5PubgXzYakpQ2n8YGHB7piJ6tBWNTQfdP8Gc7pLzJTWNhuYXTDtSLPJ5po1F1WBkLPX9vcRPxzz9t6S5kPVxioDu",
  "key28": "32b6P2QMoEt9LN9ySkYKoUBhihh2rY7czP5iKqvNr6bLpRw13a26kxyJDjGF5KQTZ8TuheFx3u7mUJ8HTfZ7HgKX",
  "key29": "9Zc61WvNCv1BUGKMbGwroCkFEVhq6sTcXXbVJUMj1eN3TorkXN8isWvFMJ561vyv5tFS6ydtzg4pLSWDHEXfU2M",
  "key30": "49eFjAQxE6RG1m5KCjJqLfM1vkPTXd7RDiYk111rxaGQVnViYwyrgGkPMEXzaJYZf57DHn4fxw2KFkawXuTPqN1h",
  "key31": "3FqXEREQnKixTjkRELfdQW7eEzDFHLJcfaxF67EQKZDj6EMSzjGAZaDF6G7jVgnKkeDBHJoUDYK24cbhVRcHZNcR",
  "key32": "3BjsqvDd7dKMzmBvheYhFAQdUGWeyrSC5PwWb87xVX4SqH9UU1Loy6LsNH18UxfNjouWLXWeFHinferd3FhXk3Y5",
  "key33": "KLhTscbkWRcp6eKC78L4JvFVxybfBbxG1CW6cvbA1v58sJ4Hz9bQoRJoc59hy2po5fXGenjnqzAwskDbb7poiTk",
  "key34": "29d4SqxiYXaJRBKfCHc5vCHde9dnJ7A17Ym9AAqwJ8YFjkRnr9wKUFC9ZS44wiW8pX2QWT6oKkFxN4qFx1np3Q3q",
  "key35": "2HeQLmzCAvLAjc3Bg7qcG7sfdMP2vFfHawhrVjNSK9SZ1ikqg4FdonrpuwqjDgCgfZHwSq38o4HD9DdgeUqyUwQo",
  "key36": "3Tu8LsKEnQk2vP9TL9nzECeXSe8U1bmihvmrR5kTzk1LSv22GFhT2KxeD4jhkzkXAa9Q3wtWWhtuTp7fArzmbTzP",
  "key37": "gFfmnXyzJaZ2XKS9rZhEqfjCYfshfxWDjYzKZqGUhBBdmjRP2zB4PbB7QuPXFZg9Qn22WPUQttRTkGw6qC7j9n5"
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
