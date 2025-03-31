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
    "z1XcKmRdfsBGkMyXuWXK2YHDYpHSFzpYAAjakdYHucdvoCJKeqa3GeeKvfYYxEPxHAsEk5uYecC7HbMTK3eb2Ra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wp89z9rQd7sS3wqmgE8bEjugKcFNrLwvBaYph8qUsdy5LwP2rhF6GeZLqVG9t2pixfdEnXsY72PUwfM2vNTKS9A",
  "key1": "3RaKuibeAJJj2kuiVJu8xyVFFRimkPqCRrjG5gqEkYLujhprkuCjjAKCnF4jGNvFsb9r75pA9RiDTBUVtcseXcfR",
  "key2": "4mnWhkaVmw1QLdYJ3GVBDZ4d6StVEZ4iN6rApLnGx7TBoPX8LHauFbt72jKsNnFgnk3AQ2cBfntNo1vnfDFDwNAP",
  "key3": "3hWCLV6rRwJEnuz2hNgUNd93Rns3YxfjqAXcr7iS9jXVFwHVjrPgPbyCv8kTsWZinGXT9YgT6USZZHSnrCy4EbD1",
  "key4": "3C1QetMfndQYxRcuJoPjXVhra9QLVGRhTrdeDFneFpdTGKftMZTiELiCrKYUj3oXboRJdkgF4HXqmrKNUAjxXkgj",
  "key5": "xNgHHfj2kS8UdFFz4zxVG5QpznJLQ7LtXk4Cp6wZD8NQYgbiYW6JBSRERHP7vuDrxde2GzgAJs2DJkKpF4AJfvn",
  "key6": "9HFN9YhM4DFRps9tVoAMCmK55dc9bf8vQh4zYGXZBmqbMRuKEYUib3ehPFgKPAqoaoftQTRi5QZenTEjYjgJhNW",
  "key7": "5S3zBJeb9AeipZq63tK3s1bRAKnzCydtrCakhe3SuR5YGPwTzAZzyda8GJCXVJ9Kd5kXV38zPbFaW5fCwBMV55gF",
  "key8": "4EZkfvrVPZXZPbzUtnyXLPzk68NfbWzYMJCBAsjjL3FzU1ofpx3rbxURkGMaB2keCSyhjKrYb8YtefiTCuHnnMxK",
  "key9": "5D6SgKZFLoEZ6Jcx1ReWfUcvFoaavcyAV9mh5uPtysdUtoWWcR8SQMBajENKcn8F9fErm8659mok557yamFvbvpk",
  "key10": "4JkUUFmeFq2WEzNN3nDhiGVxRdk7Kih4RmhRDG4G4JDyjz6kHDyAi8uWkSQ5viq3kX9cnJ6Q1fAUUqwQNN9pkm9w",
  "key11": "57amEMiB6j9CRP5PJzMjfgzmoqTbZkcXwC1QHBv2L78gcCj3WcCQRDh4LsSTDize64HuKjPsnzQMhDABxP3MJ8wL",
  "key12": "59ttD8JY7UEsNrgM584DGJKQHTkKZqabrXh4xYPLXjGGQebwTbYctFsQAFrTradDkbRssepQbA7BRbAZNvgckk4Y",
  "key13": "33FjR37ZqQBdHnyQWw7Uv4psaLdhG62JG2Wcf2c6SU1n17vwyEXy9Di9b6M3pHneJwtpr4XNRxSzXLzhB5ZqcdNH",
  "key14": "588wA5rbQ4CWjSzAAKbmfYoiFpwwjucuFeDAz9YbfDdnqoKAS5VMTHjww8sUrmaArarsj4tydyCB3hTaW3p2NB7s",
  "key15": "5mGfAyLp23RyGr3YEogLGVVmTw7s4fgc1LUYijbQE4eVr6LMDHxEWDRoxcZwLNGobNoTHZJGzFgLa1bUocNsLLYb",
  "key16": "2UZy9bBU7HxkD12xzLCK2BDDULu3cGfkHsZVQ4dNUDVXMLKPJiwg4mVJraJk7BvvxpwvkMBNNaY9bngLGkbcfGJe",
  "key17": "3huHLvU3p7y8Mzi9tkA4HxFWFM9TmXihKHN9fEp1QaqmGUcBsaUGHwVAV4cWHLtDkHJUArrghFkZTHvufpDX3JjS",
  "key18": "yzqGKAZDZgaZaCDmLDPfX6KrvwvWxyQ2pNZPMHeWMgvK5C8QeCWc44dtPXX6EdSnhZjNgZR9fFCZfXpAEXUz6UJ",
  "key19": "uzQSsx8vUyARWwLZ8oarxUCUscBrM2ZDHNAvTKxtsXbFXxFb6KYsguVBsfRv1ekyYvKsnCi8Uyh8TZq1Rt7a7Ux",
  "key20": "4YU6P5nfHk4zLM9kccpjsv2KczdN1txzPT4D1mevPjUfzPwsTdkwtQfHEtHgycuCm96Jb1p6dDeu7X1dWFWMEpzC",
  "key21": "4xiEiN2kfpfW3Dnuwju2HgjYQEhMH2Qgm7tMV4Rv98QMXsDs6T56vQi4xk1NwNvL8AUMG8ksuDVipgR3xzEUm4UT",
  "key22": "5viQyx7wQgFJWGykrZce5RFJm8nYo7x4KG55KhaLYm5UvZhuKGFyTmXEJ9kdmsGrU1xK3ReG34qfgcBQeocz24Zd",
  "key23": "35yUruiMzjceWLxQkepSq9HjCsenes1K6a8n7nYddmd4wHgUnthTqs9L8omCSLr9APHdqXMTnjFr6GgEYgrxcJ1y",
  "key24": "vaWo1NTvYM45uRojtW8SAaaW8iSYgt7MXPFf4axBRRVKjP3tZ5kD2XQGA39eW48vsWeE4mTkx3yDJudbpPnVXSA",
  "key25": "2qaCxp7cvz2k7Mn1wkGujZYEbq9H9DtY8xhx3Jb9nSSqT5V2EzTm8uoYnTqpXFCdhNyP6oaA8dSsUH1ug2v4wTnw",
  "key26": "5KigkvQnjTCGZEnsDqmLErmEf87o2biDwYQXA64Rww1idB94CoWCwh7Whn57X88MLwtnPWCmacAaDLeLdoq7dQQn",
  "key27": "3sZ2RvhDJ6dLG2ftSu8QuSJ1ncAh1dpaapu5dBZD3EKQndDQWsiotoyKsLBJ9YiNRX8dYgMcFVDD78h2Sw2BJpD2",
  "key28": "5CwxvcUDzp8FF9tNdsetAQTXP8NCh5ouk9iRZzN6SfpJPFFMeDSUCCCBsDTUtFuHfGwGYFaCvoCUuwK86QKbxnz",
  "key29": "237X21pejzWypkdxc2C8o7A4XqQHZsdpowZ4pzNjkwh3fRYsYmDc5wLq5cPMJRuQbVotRtx3h68ZozBTX8gXb4zB"
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
