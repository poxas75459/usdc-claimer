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
    "2PbwQbxVtcfUg8AfDWU1AMkPA5eKccckUeDSZ2m2cNAJRTgf5am9R2YDTE5MDMtE4yyG1pVq1hfZbZM7bPu3Tgy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41h1fMEBH9iAeuxub1yv6yEm6r5AQzwf7dJnM1pUii9fKrVarVvuwTpjaZahRYZbYfXAJ9M56i7NjFYJS5phZpYr",
  "key1": "3z6Lvwt8GGk4agNwWZVVbsMvAH3d2L7EprxZsvrfMATMZMLeCw689LQjU4kfQoS9xTbmqq7SsY6sKnCpD5Eujc19",
  "key2": "4HsSzbQy3CSDHvNUeGRPmASm1YkTNBZ9ZvnNQchdsXbVnDBsvqzqp1qku1HBzESj96NXza8px9wSeFV8evq8sBWz",
  "key3": "4ePAzsRHf4cL8EUVBta8STgZdD6b8NsnMZQLjMpcLA4BCAGTaQUygGPAxtSyarF8JeGPAbZuLZ1SvWyLNEY9w15v",
  "key4": "5zRJjZBHypXzpxHim5DLm6Nhz6hacBhfZPTsRdGEL2MNYiwkvnnNXFVLTxkH5bbsCdiv4ChhwDuMe6RpR1iUEZyJ",
  "key5": "4ujhZsj14cD13Ep6pLggXZDQjdtX1gapP6yWeuZxbGCrZotYaGzp4gmGSpefiBfc4v5EtPjd3ZszhpDBXLtbQR4X",
  "key6": "utwKP5NU4KAdkunKvCVkdXgm2etzqJkyDcdWsQpPBFd7NQQ4nRkouk7qo3DGXwr8gAewvUbcxSu6nJfiPHjumGi",
  "key7": "2B6ixkiL9FZsLZ4rS7L3KzydnZtNiMbsEWuLyjDzv7yeszipu8XpjLVpChXJV9CEMM36jCvWLjCiECawpaW8t7ve",
  "key8": "2Nn8SYCGhaDzUnL4cFKGZTPYj9Y3oqbsVEXmDUcymPxFgFQ8t2ud9ZoKnXZCUP3q4phezMFc9v4zoM3XTrvsTifB",
  "key9": "ssUY6Yw7cKgnk5TTTJRGTNDV4D8Fxkc4UGi9xLitC3n97uCdXLcU5p5HDMLBJVGBy15JnShUNJacK6BUWRjBcJa",
  "key10": "35wDtDGdsYT41GAYHjxR3qhL3YvTY3LsrVFjiQgTSU2a6Ky6QYcY9vWBndatT1kukUQw5tdETCYqFQWLsnR3HQjc",
  "key11": "3iVTLavPL7ZV6V6ruTXYu1H5WHC65jxgEGxZThM6fgVua9zGwA3ptUFqdoBF5usjtD13hVVsBYcCe3uSFrwyjgR7",
  "key12": "3FSCBmyruvsT7dmk8U56Q6ci9Q6ME5uPhF6Rm7x1bVED9693ZD5pEzTT4ukonWzHEYuGUSFWRyqgzcNhprf8aXTF",
  "key13": "4nL13HUheFDfXZKfwjL3AyJiKdCotD4qYoF4kS3J9qgSDAMgQKXmBPiPteruYTAW6gSfNAsH6vLwNfGjr7885RBQ",
  "key14": "5oPN6wsen1XUbmmtcWzF7CxMXZdNdBs9LHCEsPZ8TbLPKqDcsu4d8SrJ4GDEigNRD32SLWA4g6cQDQPTgok92iKq",
  "key15": "5LqDUpsvh9a1gHvxrEY8hSQsqKkXjQcnyrvxmCKRP43Rvsf1MAdBAwRTk3U6a53HCfZMhBJGaxuHAq7tbVVr118x",
  "key16": "25ZHPPbW8NaXQAz5nnhaKyz2Ec4Eh65xc91qxiPWFsYQ3hpJsWfHwGnHDXNywVmxQHiVkGZW64e2tTGaGqZK6ry1",
  "key17": "2WEM2pytXhepuzCgK3uX1e19cB8a7qD1ZHDDE43eBpbnYuMS35KG1K6QUh9aHQrTbY71pzN2LzeyNmK4BdCiqr2j",
  "key18": "63UwHpNqaK3o94EZvNehHStn4JA3HCdA9cjpTXqJ9Qt8NNMQP1T7QMWraeQCzZZwAW4PzzJZeMoAsSWvDkS6Yma7",
  "key19": "5E7HfffRyeP8hTEnSeBMhnbZ3CzrRWwCdvm8BW9nYSxvVxoUXxxoQDKVphKr6BZtaVmwMbdV3hkK9Gd6mRkvm4dQ",
  "key20": "3CkdHwgp3L3J1661LkNADXLh8UaBbP4TpKJdXBexRN6adQhMdLfxejZ9sCj7tHatr21j4ituhSSfgUXswnSj3ByE",
  "key21": "X2brHnFKA1Bb5vngTbubwjDymVwfdSx1wwGuaYPaH5DTyW2ENbdfoCvMzLnUmpdPcyvpo2T2YpPULkSKS3T3uYS",
  "key22": "4DR5ffPMYHJAqCnJWt9k3XWNBsbJM1ctW5MPHKkP4rP3sK5jxn3adsbXWZ5K4frodrcxDNeZxedXW6XJYerpFueM",
  "key23": "WkcoTS4T28Dp2ai92tZZhJEh5jdZgEaD2sUL3YKieNA8rhFndSRE94TYKSsnTy95P18gdLwuhvYcXRbJ3RB2kcR",
  "key24": "4RYhpHgjKnx8adJRhhqb7purD6vqvcY1wbeaAQE7jR1aZGbsBWKV2bEPupBec6WZhf6jLs5U9Cc9i3sKyvA18wi",
  "key25": "25KdebZHpiUwzRPrbjmQwwNUALsdpFqNuJJ1TXSYg8HbJ8xnW75AThZyUXgkcguD2WPdytW26CQpwRY3gXobXLVU",
  "key26": "4DzTQ8Vb3ULk8cxaxM84hHsC2JXZLjVRVLAFv4V1YES9L3XqVB8bEF5YpJe9yJrKtzTF4DArYF2XFUxVtyoGtvN",
  "key27": "4K9CXHhGxt9xie6PVaitBfnEw4Vd19nEQqMzr2aX3EAQwveB2tE5UvtLfDk9128smj3WQc3DWLSPfca1ZHskGmEM",
  "key28": "m4TdrAApK8Cp6U9B9QvA86FduJwi7C3wdeVUbMZcy5TWq1kqPnB3GnFAFJrWmEcfL5iSwabyLWibi2JCGAfGa2d",
  "key29": "3vi7F2gxzNqkj6b6kGqBKaufuxbuFV7A2zS3uQeEpEfqg5GQEJRtWzPkJD2sRcgohKXEpWG1yW4Sf7MffR9k3NzM",
  "key30": "5KxqGfvmWTz5PjbJaL6WGJY7P7v6z64g2uxLhGrjAA6dWCCbq5R58BMCm9jx5fkDrnpYeH1kerzAUVS9QL7KPn2"
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
