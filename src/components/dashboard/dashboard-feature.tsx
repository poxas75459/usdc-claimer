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
    "5TqpBB6UdsXfXCNdEF4MFSqkSBrkZvCgWYkEsVF94RFMYnzvURUJnHsTv9GgshAbT1cMCyExWS1Cc6dzhmordCdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XWCA8R4Hz54BVJSjPkMu8cAYpPGhSfR8V4trZhRU624NUY1w2kYRRMHgSvthuP7nt3SP5bscsM1vyYieoPcc1v4",
  "key1": "5U9RmKiU7EMUF85hdGRPTUHD1cgiE6L2D3QmVQNhgAvUYjy83qcZnDDSwJxei4CcomnLdmXjx7UmkphBH4cAGF3H",
  "key2": "47x7jgU4Cx4SXDmu544SnoY6naGifPJCH8q5DLrJsAchZqFwp5my75hX1zJMdP45pWMkQHA5uaVTarsi8RTzbJgh",
  "key3": "9PnVKopDf4Wg6755kipr7DUoLnrjUheEQi2k9LBZCzwGczWPB3RitwwLmgDM2svwccu1Wo1YtgYAbZGAdDSJaLk",
  "key4": "1r9wS8ZzGftCMDkiehw1ckunrtYAmi4Ge6YvobCzra1BLjcTQg6TpMDNxhiDmxcvwv3j5gRtx8AnkwWBo3Vy9rw",
  "key5": "tqdjAuDiRaqj2wKtkzKvg6tk9u2cQkTV3m27gBLVN1571XD7iRpkc5nk2S2JqrxiqXZdTdzyBojjp42jjqWMQWi",
  "key6": "5M7svokqkM1ticbFnTmmtiqXmWrHjfhBGd4NVh8ezY85nCSmL4PW2oU1qW4A2bSNLnRqne4EtLqvAGaft6UcFbHh",
  "key7": "oLHiugs9YxDEDZoGhg3bmD658VgBbamkLXQKVRw42zwNBB52pkyRTMdMr9VxVRg29RPuafvUtmFsMv8QdRQH3ua",
  "key8": "4pCJko21Pni7HLHxZBHhL75g7d9ECFFZTddvK5TLNm4WyZ2rr8wnboXz4NdjpSfeez5dZZmGmfWpZyecMhWctzFw",
  "key9": "2UffS2dDknoZZNVAQ6BH6DwAGBbZPo4VmtZd5SWe9raBXBeCVgWCuRRr2pZaM5Aoes6EfYQdwWtq4UTPa6Wm4zQo",
  "key10": "32H8JoSiKFArYr33Pngv42PukE6XHRHuTnHatqegbgP6gpgXRdVTcPm4jpaoZzSpRzoqyFyU9ZoCtoZnk36nLGL7",
  "key11": "52t35t5b9uH9FroBvxKnfSMTTsC2ynZgmgLpVAKpaqvZvJCaCAXCkrc6EHREcxp9RnZpiWCtTyBbVQvX22kuAKfH",
  "key12": "5xGAcRoRXtY7rXiqupKXRyMMYUCtpQqovEQzTzAamYRP8ArZeii9AC8s8dc2YWWZxE7QW8yHPyHbRisHEjYGjxo3",
  "key13": "4QCGeHek2HCbMyqmfD4AMEMxWm67zZXK1ZWZ9CfyicMmPewBqoZMnUg47sBvcv8oEdEU1EtZKJim8LCVi1cX2KV1",
  "key14": "4oVYmUqnuyUXGRYRMWXH9hRjYFoLFxgyb3XkZCfUqENwfV3GWk5mKK4Ffy1sZv8pN8tAWZD6MmDHDMMMMNvaG6af",
  "key15": "2vK79dod7NZm9SNAuvdAdGxgfJD777biMGuWupWY9rGYLxrg8jtyav3vAGf5cSLaWcNebazHsWx5vBBdgmMQYcBX",
  "key16": "2c1cW9zu4KmP5UNaTs8DdKrNvqKDQ8eMzZU6e398VSqH461NSHdnJqK6w7Hnz9hypGkPkPEjY4ycKHJSbUGoo3GK",
  "key17": "2Xj3UigDh9ciNnGWJcnpWTi86mL3Lr73TQT95UzYCUQAHNJJmkBBy4e3LEdaUzFaDawkA3n8zd3U2nywbtjSagpK",
  "key18": "4w1DUw6pH4PCpEABRg9XyyvAG1WRamDiZCcP7ffqWzbSuvh35jiJz4y6xZjfJptdEBYEDbUvp8g9rx4jo47wT7YT",
  "key19": "2tSj1G74pb1SEVf1Ec2x6cBbVNjLrttuAjkePGki3o28cvcxJJEt53MjkFGvEvJ5GqdzmUaEP9MK5UuLFvdeoj53",
  "key20": "52f1DNKYoi3dUL7nQrZoehRtEgiAcTdZ1qPkjwuuw4wFRgUvjAy9MwWYDfmuBvyYVgnAWGLiV4gAkcLMxHrNYdSq",
  "key21": "2poSV6nEMBMnRTWmvsZn7iAVvLotatDBGWisnZoQnuFF1uqWjmgSy3uCCa2SU8GG9gVAW265M5ZcEWgMMNB51A3R",
  "key22": "5vqf3NpWvcWpucs3pWVm7MeVUgYj8NCorfVVx3fgtt3RPZ3Pb4Ed9cxjuYxvUrkEGhXXJBTRQc4d26dZh2kBnYG1",
  "key23": "QGtrNF5zd8iP3BCrG3ttswBdCqE7BB5nKNvVd5bvtPvppTXM22mAxUCzp7RiQZRYbvJkVfGmtKX8NjY629Ltrmy",
  "key24": "3RoRqRrGHJbsSjD9KXWG9KDWJ3v8aMjbEHr56M8gxc77Jk4E8WfGdQDGBCBM5t3pvusApuBebwmQdy7mTSrQutbV",
  "key25": "233KDrDJcRjgNayzVikzCwnfZXtDafeiENSwwJztnLjqaiMhok53R8oEZMXwFUtQkzzzDsd6qTfHs7VxN7Cy5q5G",
  "key26": "2qKRHrxxotyNqH4fCxAi7cmKoZH3oEv2LdQqUdm7o3pwib1wceGNuXrQd1aeCsarqCHAemBSk9pw4HL6sW3BJsEo",
  "key27": "4i7dx6QFuPscig7r9SX5qKqCy6Bcad7Rz5hGCLf2vdUeeo54M6CDE5LFG3cMWVtpkAfU2bxAkyUwJhWho3ZVbXYw",
  "key28": "335AwsGhzXBhebALWHTEoc7Z9ooUhWwZy5GwGc4W1JyA1eFB1DXaKpkNNp3nDj2qZPJiQ5PGqQALw2rP8qH1cGTS",
  "key29": "3FoT2hScbyJizc5Dny7J5qPXfaQpXbhq9LTovjUx8Dud5ZUHfUq3xjcMgJqAnzxYgPnWq3sRzPN9oMkqm6BNUcwq",
  "key30": "4dHAztFKC7RbEuoqmj6vB9KoV6ZLUDiSgfPSkz2TTGnba2rUfnfZdmUku4SAA6raS2jBrqYFUSwjD1BVaJwEviGJ",
  "key31": "kzZU4EidtrH2sm92nGZb2g96dTxwzZ6ghCHvqNSYmoYcnxq2YoVtjY7pTNTndr7N5wykUZWUxjWDnJ8ifCo2gm7",
  "key32": "41x1LH4oQAgsUm7xMbQ4zWoag6pD7NNJy7rvQVhutdoxGao6NuMzLZHustPdk9VYBBxRmf6p3EqB7hcn3nCMciWW",
  "key33": "2rM6Dp8F71vTMthYHyXRsobFa9nSzZQevRVXWnyfwo4pwnExRRnZ1UdFryqRTzUggfusb55EfVUfo381qFvZLgT6"
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
