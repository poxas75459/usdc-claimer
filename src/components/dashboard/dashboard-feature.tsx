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
    "4yNy7vxH8YRxYicfetWYH3TMm43soF8xeC3WDEdgNkjSHFzAPgNJ59zAJXx4omkXuBeLoM52xnxUmYiMhgSRH3xj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oLZgpMWrhSXZcTBoNEKTpufV8HusjvtU9VFNb2zdJQEzyUj38KwT18hiBUeAeXxf2ENAoNYqwUdWsuGz665gXGX",
  "key1": "4SXAPMR96uWeo21Lj9zRGiCgyTRVU9nub9JK1GGQDctoRbmphCwBBckeGKth24ZWa2PrrYW4Eb2ny3TnT4REvh2n",
  "key2": "219qLStHuADhBGX4mTSPCEnU3TJH9z9DrkPC4Q47VLicKGekGQchcT7hzBnNwn5MzvkRifimL8e3ZDcjxxJS6KtD",
  "key3": "4UQHEd3163HqPjbCygkH8P2XSY6BFa2Wn5TJMch2iCMVL1n6RtedeotoXqUkCUu5Pjqb7Yrb34U8tDfCT6yJPHTc",
  "key4": "5D7aM64dLb7HBuMmtFv7S8x7vtZaaUGE51LdTUEBFjAkkktwYddvz5NETwWDibJdz1GR3skUVrsd26puqqQKXxrh",
  "key5": "2PQafkEzvkUJyqhQbcf9DMepAt64aoB569TQWXCMFhPqbM4oKHGjGX5GUnngvrEExnGLJUdYkXfeXM7ALKweBVvo",
  "key6": "3cAcJFEMK5CxRX3vWeU9CrRd7mKHNUdNjUN94oNP8on5maNn5NJxhcgLembNTNusSKBBj6nRmrq4EHCD8cRubabP",
  "key7": "EF1d5FEq2nT7dbwi6Xymit6fGksGPtFfGHAiiriiuhBXfK7iTp2PdWcP9Ct1gPzhsHsbTBRKaGDAWacUZtfCCvM",
  "key8": "3LwvHJvFVWTvVQvAyE7t38T1cqwayCHGbiRjDhyXtnqo88qUFxTxUCdyPgZ9L6vN9vtUTU7jQXABsLa6Hy2uMKEm",
  "key9": "eJFfcqBTazo2iUGx12Kfh2bHp9wvM5XLFon3KqRQphWHqm6AYcdg56x5tzSJFVQg3pefKL6qqzcUghe6yDWZnLx",
  "key10": "4qHzUzfkwVYqcuJFgL9VFvqpKxFRFMdPkc9Sk26pPM1xGMS9XDPzco7DhB33A1hGYm8fM7758ENtfMsMdM1m5e7",
  "key11": "2HMNu2q7tFUjDmrqExBhgEwavoR8NhASA4v85J4ccLEDprv6nmPLcJpKiaFo2QXaJi1aCrPh8GJjZAmNV74shTL2",
  "key12": "5oPiPk4ULsKvZ7cpscn9oW6Nj7NXuY52DWe2dSiY7TJ3ByvuyK2yMMznYNiFGizDey9ZK5PsFRmEFVmKgTb7FYbn",
  "key13": "5yzdhBbrE4jQFjq13cQf1Gk7AtFSw2RwLvGwujSmYT9U73bZ9tKcNEshvGyjzkQMc4ZhGACfAVJiNMkarFzaJS1U",
  "key14": "VJB1MrCzw4dvbikPsExGWrRYhntaNDUWjrBQSzxYeV66FMDLS1L1d2hZJd3ctcxGGKMj1kP3JCBNJJrw2ZAhV6f",
  "key15": "5WqQqradFgH9JsUQ8oj8ofdn4C7H9K4VfS4PvMSRTXtSfsf6q3EwL14ExVtQ4jcJZg7AF1BKtbmVG5DHJqYkE79t",
  "key16": "2cfrMaYJ3MH4idNWsr5QJSiYWrmH4DNLDPxuXNfP4WjKoMvr8HdZwDVVVNydrsTcrScpPh68QvMRBM4v85K3XqW8",
  "key17": "6DjjwK9BQfyYLynbTNd4KuqFWUnvJZTGgWvDbPdAEhiae2LzBZoeW6VCF1RntTAo5Qbw54vkvdPcqndRCDqK4T6",
  "key18": "2FgfUEUpW77WHgWkBAL3rVSHBVGruu1LT1jsZ6XhfPvzCMJUHk9gbBA15Aee1aY9q5kwneUDQJ19NXmSekSWPUoH",
  "key19": "3Rv66He3xTaktWfvTzj3iAfjZjgsSghvTWZfynSpvZr56sAS2V7giYMCNegmWgyuywAMb9fRvcW9NY2G9gRg2AHP",
  "key20": "65WbbmiaUnU5pnBcPnKbE6dFSyZrWByXAa1Sx9SJUHE9qs3N4j62eyHQUk1tKyH37BYFpESKFf2QSJMuXUEhP89c",
  "key21": "5sYiUMPbEpCXJfMK14q8vff1TCreSAZWg1hKK5Cn2jQoR5vJwoyFpkqCBy3t3Jmiyv661SybjnjaHuZRjQQAJf5G",
  "key22": "5npn1nVqeeUpqsyscsTMseFWfghiZmhLcu7ZqmQPCVkJ3M5SuUSqo5rtre2B2XxLbykFg4cgAifwzZ1UU4Ucy3Jk",
  "key23": "5yQsb5BnRcnj89hP1ACUbKyBMeg85a5upzdcmspQQomByoH4Jbqqe21hxbs2Er1N8Gr96wBWW1uXDvWtcX56sG2v",
  "key24": "5GBcPHE8B2THWz4ZiATroR3a6TGYer3xpZqNHUM1bzXUMRJ2RwZVKEXQM5upvipQSCsZrk5zANgRXnGDLNRadiwN",
  "key25": "3BCpmBTgFvhxgryZ1hZAewBrXRvgi4kNJKay5qeLSFZygYDBDbcTRPBZf2KQkDbUMpZJAqnYYArSSX7SzYRmkNe1",
  "key26": "2gQBQxrL1jQc8hcf4LmdaAhprpo23mCXHmaFgcqgCFqehii27Ho6dro8DfCzqYvgbpwRKL1wMdNcTZdUxiqPzoQx",
  "key27": "2EkARRLiBqq2DDfdhPd1Aye7KkeFA11Np7r6JDE4ANKZr6H6EsfYD4XM9p6dmKU7uHukq3KVRSc5wrCRqQcn4XSf",
  "key28": "uio64pZvzJTwZGLpVMmMzKX2C5sNq1deqeb788SZsWXEDLsxDRSYesp4tXsnH91uu9xqnqTG4jZRVy5n85AYFPF",
  "key29": "d7stfKbenzkAoNT3nRH9PFBGWyHCce9SJqBfdBQswcyprwUKv5E5M1MtiiqXSVYPUCuKT77EECtHuhd4Bqq6jME",
  "key30": "4V7eyLJ35A2hHL8Bz2QbeA9KxgLmhLNJ6654FaKjbJC8c6s4YneGHAMHZ2kYqC5dbQb6GuzAfnjdfwUugZ9ZW7GZ",
  "key31": "7HccBvVPb53LUpK1JSgPykyKjVyyaNdNsQAuifwaCEVW4yN1P1YwtQjtpZxRdrLBS4udPnRAnEGorgwHH7FBCbZ",
  "key32": "4Nf7UZgBMuzxkQafpHyg7r5CwLDK1XEKzoLQmUrWMp2sDkC9BZcscyAP9kgTiqq9QxaKzQMfh5FSUrgvoySQdG6G",
  "key33": "3oQthf248mGumHX53Neg3B2j7kwWRWPmeSojKsvGLBhumH6GSpa8nmmTxQQ6E5iyvKndnEEbG9GekYhVtJ1iefUa",
  "key34": "2B9Xi7zPVKrErp4STCixD21XP5ea1wa7JqeGk5jKqCcwNJ7oY5syKByE7vtgFNvBzh1xd7WKA5u3MKegG1ZGbhHT",
  "key35": "5rXdXEzshptzM4oc9iLnmCjNzkzdtYWdiuHG9bCUp235K1nkYRuuqc4Y4TDBCjAw2wMBGa8tY8nE1bk1Qq2DSD4h",
  "key36": "3KvqoWSFHUrUQawECkAVPoY7tTKF2gXRTZdRbu8iHWNwGTcGicZL264vwzoSVRjvuQLAcpVemU9MPJEppasa7U5J"
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
