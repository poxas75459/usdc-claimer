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
    "5DkhhJpMwRSD8ceZ5wNzfDLZAYHZmZmYfcw6xvTGbT6e6LaL4dHcQYcgsjHgQg3dFDMM3PrRswJtkrjA3cN3dzGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49JpzoPBMSgM33tSFKTRUAQQAc1TmPgmYg8VZ2Ym2gwqeK4QvQqoLnR24t1HGP1joataR5n4wDQs57K1LYx3DtZt",
  "key1": "3QtJSJQJkwCpuoiGpyiEdSdwThZQmMgCdHpC3aJFXxPrQ67ndrcqCsjArEkHTR6ArWSmVeif3U9CMgPVF6caH8SE",
  "key2": "5jV4A2rpEBjXSXLS1dfmnt9i5gzHcsAs3ZXTtq5AWFiXunC2nP1sTmmM69sYKCHUkoVsKW6MErwoQMkZ9LVEcoD1",
  "key3": "4CJaBDHdysf7HDcjw9SAFNFTofkUFv14cR8NzuQ4EEbRYGExYEXUU4byE5tDamcxfT6cWnsXddPHAwXD9L2vjETE",
  "key4": "4G8uWNoAkcSsEFudyVBEN7mpKe9c4tWAS23PbwU2FoNCYuNtcPFh3VFv68eiwVjBUudpscC4eZThYbFHnAA4SqFQ",
  "key5": "5vxosNzbp5hY9PpHntMVT9bKRH2nrTPn65JS8C9bLqJNwHm62hdNPTkSF2m1rcHFdwo82VhMt6mVaMmS13kxDmA4",
  "key6": "43qmJJgPDBJqt6k4pGznBZJToWZghahib7pdxrS23JFVzkNt5HspE1QJD7qWkjV76tuexYeyoEkqpkYtg4GZi4vJ",
  "key7": "5K4PHNDP2EKbcrZRfwM2u7qwKxe2NLyRSfapfwSkfowNajuzqqq5eYd4x5WuKmPyq8ot8SKNgHUvdCNaE9fksRYZ",
  "key8": "5zsyGGejb6XGfzLPSy3xQEts5j1UuexJE5SV4cTqXztvr6mFvrYSXhRzevxTupWAbXd5MfJzwS9hDPPj2qaFvZ6J",
  "key9": "oRFiYnPFhHAPoYsf2QTUyqQ57FTm96wh86LDDLfs7EiKSLJD42RNB1wwBdbbmDfTAAoSjy85BBTgwK53Rfw8dEC",
  "key10": "5QQbrJDwNrtDdgdEbQ8ads2F7iEVSGC9HqymvdH1smm222KwgwxCZwH4Dz4WvovUhWvyMEDjENnaQGHVvNqsiHJC",
  "key11": "5XmxtyqZrVqqhKit2oR9vf2o6kqjg4Cmfx2myasUjobxQt8CefADyuNtyvN1aEjdKpQeWogJhh6WVkeiqtDsqN3z",
  "key12": "4YFPK47pdbuX4gQi5UexMTRzPpvJvrGkf6JneZKMh9D2njQbeYiJrcJZSgcJLCZk3rPJEeTeyxJqpHHmVxD7RYMv",
  "key13": "3FoFJP9iqJoCt9dFHj6S22L9aGKytDfUV8qmx4rvnaVXksqoNjM7mwwrdNJ8HwXpAdiZWgJ6yiU5iZJJU4XVdRKm",
  "key14": "43PYyVfwhuDRVARKxiqULSKYsgycEyaNdACV9eXciFg58dR8UejVeZ1rExQKzc5Bq3y3hDcSsMCwTuJsjececD9X",
  "key15": "4CFKMVZyoHsD1ZS6ae8YCqRfTjjbGYkruZo9oZQUXMwaXtxYoXFTN8j3UMcyJULBiCVgjfp8sD1TpzmzbhtqYvGZ",
  "key16": "3T6YUMannA3vs3HGpB8QmkRqtpHLzEkYFdqjSQVE82763EsBP1K1yT4kxBcZUMgbBnuh7yefafzUjdecHpqRQvTt",
  "key17": "3ioEPrvC3pxDuEztNrKCobD1xvnh8Y4bQf23SpdRxKHNjw5ydfea5sF9jMdBFqwewAnrrKqyqedtx29K4bEVwgeU",
  "key18": "2y4j5ect3VPksgRvVGC54zYAkUHV3hNGnJvu5VdorQqAvnodXAPioSD7atkZJjp7q8goBrkh49n71mGikn9DuGeQ",
  "key19": "5Yi56a7nSiyN4KTzfDCQM2HXk18gGngeeywFnB9yep2zgbHg4vDyPuuFku7fEfZH7fCJgUa4UdS6RxLfE3ZBg8DH",
  "key20": "5EiUbjKAX4ecDqC6qzALk67ndatUvkDkpBpwLzNQXGLyj4WSkBTWUpdEqZjcQ1zqf1GzcmGu1Tb2NozDy1ygf4i1",
  "key21": "4fg3epm54ixD7bCJoUbNjpkxj2fcPm29a5kR8nVCyqSSc4JA3Cp8tAL2xkKBkLnenEpT6i3tacoworoeieHExA1H",
  "key22": "3qey8V3YQ49od16fqTg7zhV4Ed4NvAR5QnTcPpWkGpwCWcPAcYQHPXo7JBntUJdG3LPGDF3wEN2zuBWVV8SFnz75",
  "key23": "2GpbokQzSJcRYo813oPM85rguumR16xWYkHr425avBXfPHTAxCMkPrLUmG7cjcBrNBymHBpK1h3redYj2TKC7xx8",
  "key24": "5WEfXjT549aK3wHmFaWdJX1GHUUJD1tQaEkTMFQ6Ybvvf7MxpfvX3dujxns1esp3hzucydFMcit8JzV45ntnjh1a",
  "key25": "3Jom6K1hMKrpfnn7b6Vv7nFRLjvdRUZbdhToDoGgLEcYUzTynsA7vyxg4JeTqVAwwg9KrnRfxEjykb73LN5dsdeu",
  "key26": "5Wj1C4SAfxfqmoUR3fLFriSV2Fwnb55iDaeTHnP36c3sm7rrWcbxS1yvYjMPKPpqFDcd87zs3EDe3vipXY21C26",
  "key27": "XCbDU1f26Zgo6FjyUZqGaQcmJKYkEtDkXPHngewnb7TgnA7GVk3EbKX4bFq97Jtx9GX3oxABXRugifXbkkFXKak",
  "key28": "3F1R8AVSevyZ88y6Dm9f33JbcYF2N9Ry7fX2otDbRcbbUMEYtuPU1skBJfRPEgT44BY9geFxwmgHc1Xs4hitRzca",
  "key29": "2o6sSYhRADuVt3n9SAekbRv7SJdr5WQR3ZfFGNwXp7JAfYKAxLqaZ3ccFZ8wjVoVXd2M2XhoL18EP4XjGhwgAqiR",
  "key30": "4LLVrjHyQb5cwmJKqSv9poM2P6U1XPgVkuoF5HSYsy8DaPBEzw9ziNwXJbEkznVj1tCxXsuYQn52CbratkeKF56Q",
  "key31": "bXY7HBiwwoGCjE9NQDMac2YJxRa2yNwHivFGytHZYBLZaynxNKf9mp4ZqwvCLGyi62bUEU78VAjdExcvSxaW4q4"
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
