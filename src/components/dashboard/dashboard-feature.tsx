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
    "5c9ZiCyEfLMUuWAnq8DveodHfa7t4fpxR85Bt7z8xZotcc8tac7zMTPWhcPQ7j1CLwMspyD5qs2qm1XLzjNjVDmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5njGUcFqgsr9quNEgGsuxDHasY2mC6ffwvCkfKBiBQqHtwBEokZCGE19LSEhwPPerCMj3PNyvaaontgBKYwesrCM",
  "key1": "3omgSYWvcyWjrDQnRzmMyMRTj4R2Eicy2Q5wexSyoRLZR98LxUZfvsCJqrtqSZcPPXWKXBpPFYUk7GscBa16iXqc",
  "key2": "5hwVcqLdEDxtu8qTF3srLnt9fSTuW1mxHhZ56JdKkjMXtsrKveRYH7LbodPLDErqxbMi5CfGjn7CxodseBJTproX",
  "key3": "3kC9sPu4B4cGGgkstY6HLXnX9aFfX8fPAMey18Hdjs8cFYhuGPD3SiYBubtvnE8HnXburMLjptK8LSjokiZU99jS",
  "key4": "4jo4rj2Q1kDvwV9MBHypLZECZoLUqYqumDNMo8VXcpJvhtD4pswUk9JnaWv1eFBPsUkYwCNrpGHu4pdVbzCe6Bcd",
  "key5": "JqHRHZJbQEZTmHJzeYbiLDZYsa4FGHSgTknGRCfFEGTZkSbm6UgQFx4SZEkcN9nEdSjUHZu4zQa6FJZJGUczLWY",
  "key6": "3z8fx26bmJAMp1B8aRr7GW7QNf6BgdcKgCXafTUCyMJxhhnd5YxP5v6PqrBSFUsfmar5Jr3nmrTutATCwaZBnN5c",
  "key7": "A5d4jRJBrBJL7sBMT7ij6RrKGGKEB4B4dxSZX4okVwwLerrVjiLRqNeyxpE4kEKSTT2QBrp9Wc8zFgJQPDBgnS1",
  "key8": "23FCDCxiBnWdsiEXN8CLdwodiJXPXS7suUPD9kDwxnSU2DkY17WAYUEck3RQNJpVGsgTuMfdGy86kiz7gJgpS37J",
  "key9": "5frw731jjfthPqX7ru8fWV2wssotwTSgBxeXdHaMVVCLT9d6vt1QqmukK2sH6L4cZNz4kdabxo9HzWiyGmLtedhG",
  "key10": "5PdP1zX4WhBb3voNnmBMsyZrN9fzhvACjPFaaZXJi2d8ERS3b4Moe467x1Rfmiav9PvTUCNtyByAUcXApGFj6DoU",
  "key11": "4Ux3JiTfJXrSTTiQV19rvJkUAry2kzinTQRn5A2PWSEv7nB6uczfhaKUDMwMFmHBNiGAJW8HZfAv8D3xZTYCFotJ",
  "key12": "4ABJnGGHo9C36NwnS8XuEMVWRS5DVLDFXLKu7GBJ4WFK1KkTgb6NijapUmBbNXw8Dks3JNx6uV3kmX4sZSKyCfcw",
  "key13": "4CnLowbjmpcR3nEfep9g9DUHDHyDKayCh8abyBP5pzZpJ9UBi2VoXXxRV2w29zxHhUeWwakirCrT36uBTMgXJdYN",
  "key14": "dfNJimqLHcSeUjTy7CQvPiszijdHmc9gnR6ZHBHVnS55WZ25Z6fsKqP2Z7JHAAKoyfgr6mf9SEAaanqRpRDN47n",
  "key15": "4vq94xMHA6FUotAdeZnGXfkgta44st5iRTXt7SqEFFroFANcCFAhGgLeUzdqFnMak8sRZgW15e8nHaJqrKJB838B",
  "key16": "5SwFACnyLDcJtYzD6aQSwW4j4DduJhnb6WPvJHgWi2a9jPxtvNNboqCteR7PXcDWALGr9cPxRcTEiXCCGyyq5maG",
  "key17": "2dTvzXQhjXJSAoNVie4buHXuUQQG8618HXLNxAVsC3qC3XZLKbaXnAK667jkWKpLpmisa124P4EKzXKGieEKDbWc",
  "key18": "37fYkmqFedqnGPVLYfGw3SjHrEXTFoiuLB7A6xxuYr8keZ3oM2P6koga6bn1tw3DN6pFcxUaLrucBFQKPJ2M7gGo",
  "key19": "3sRMbKPaWG6cwy5ij5HiUNBcytJgHvqG2a5yXhtUTgMwhFBb68wph6kDoRiSFHZs6R3CPDG4vEUv3zxaqi37nLyr",
  "key20": "LYNZVDCXfk5jHtJHt79T44WxPT99y3HtgqXx36fZfbtWoAAGGLkYSNCfc7rgniQPe7uy1UJj71RKRPM4ntGk583",
  "key21": "qQdBEMrn2UiMupJ6ahJBq2xxBRA7GQpmkawfUvcjUZPocyVvRYnD4QRgW3afmJUtfVrAKWPyQb4dNW5z788AUB2",
  "key22": "HqMquV727GUD4C4fB3GfTqPdKTdxKjug5v36LneBsxKLZQHssu6WVdHtgNqkZK5mKzvj5t24HZdSnN14eCobBeZ",
  "key23": "2L2t1eQkjJfzMxvU7ApCd6QMZ1HP5B1ViFPtsC24YxzQNwgW9uAK2QiW2ExBStucZyTHqhSUxfMDcF1FyZZqzZDX",
  "key24": "5CX1bM7FzcT712KL4ozMZiDBL5Kpi9eFyQzyp5pSTd9UcrNk5FX8E7tP3m81mhpbxhPn6cT2tXz67U8A6VYkHWti",
  "key25": "Wb5WRnjwkgrik7MGDpMAXtqKcyCvFeQa5WqbQS7FJarGqJX5LPbj9zs8VcYJLrARnrriNzBuSsEd86jDo4YbbdA",
  "key26": "Km75gxabSPzJkqcYiXHP49W7dpLjYoaBoQd6BPNgoAkzUwktzXRiFSLg6avEjQZeGMigt3cmLDWRQHhVWRK7qkS",
  "key27": "2ug7pDnfxYdxWgwo1WmbNEjFmotcr19fxP8RAkZsbRPD1Fr7Fm1hHLLqEbEc4UpkuK2BxYyGda876A65gwrYLfRp",
  "key28": "2jfjBJfsUKwVwtGLonVd9ZmHgWLvMwnwgrQuwx4f4uoz4FNG4QWaBQ6uHjBRr23QoQ9aXpg7HdvGWiSowK9fDFqS",
  "key29": "3e4Mdwa4i6dkpVPHUWNBqo2yV1hLRkvdJT86RoTMQ2LKerK3co27GZB3inPVL4tBCSQw3UeSNJgXonofJRMg4svP",
  "key30": "2vGsQu6k3vQGuuXgUZgx7iasRoKcmfoFp2XZASsoatGroFjBWC3Sd9nLffVu31jXMEGqqoVXchRvZKMRCmTxcn8N",
  "key31": "47AdwK3VHANcRWFdNkBFkXvDE7BkBqCgLiPjJ3rmvxdLrKuAv5fArrA5e3BdDCHQzBLiMiwTwYQ9BjLWtRJuPPB4",
  "key32": "3vZs1VK4KkgSdyNoqjVEnyYcrPX9uq2GFawMSuzYWTHYFg2xxcvYP4nJ9YuCju78jcH3FFdKkBxa2du4zB5BhqmR",
  "key33": "3w8BVUTt2aqe1JStUtRZ6z3k7V55YwL68jzZDfHh9KQvxTHGP3xnXd9gWHjxy3pVTFLrNo5sJ25DYicyu8jXn6CW",
  "key34": "4bnzw347k7KDdK9n1MEhzGPnvjho32q2ALspn4kTvJWQxH85JCWpCTy264HzGEGFnJaqw7qLRExtj5atXFbwVpVQ",
  "key35": "32n288cEET5Rjxosb8QVn7vg54nhhKgZWnJQS1gpR16fgKnKSYw1kGaeHEASFZX2z4T91KDFcffoPpsfJnuU2AXV",
  "key36": "41GsSt4tCdmyEzU9yLNrP6isNqw24gnqXVJrkiB4kPCWAyJFiCd7TT6DMbgSE1EDnqntEfTbbzyScPUEx2BT8CvF",
  "key37": "4HLrN6QVkQZBJWYS6yaspsVyVdXKMenQ2noJ4SwxPcGvG8bKWa12F7rwM6JfRZvPY22GSVSfjSmpave1qKjLbn5y",
  "key38": "4hPmHtP2zvHwF7GBgmbNRnHEp9ehPJhzBaZ5Ja6sHncH98SpxEAda2FA2Z3WWUk9PPYrZ5HELZuXegLkaUeAenRS",
  "key39": "4D3byGjxycdHNHZWYF2UkmM7yFdWW2BdM52JzDNg9SVHPMp88G8w1W9qNc4PyBeFCBT2Y21R7euz79wxZnzG7dRy",
  "key40": "4mVQcF1TkBVjxXWgb4rE5d37nHJRA7AzZqBBgfB1vTh7NdL4BNL1ESELg7gPLLS3FJYpXPowjC68WRMGXixXe67t",
  "key41": "pMCdxdop3QNjdA9bF52HXGMszVn4idjf4mGhvrj9nin5ooJP8xyiRMG9NUVMPLXD2r1jtgAd17yn3dfiVyPGUTw",
  "key42": "3s3282bqY8YP7EUuBiZxdEZQRk4J9rf3WSUbxBmN481vdyK5Uas5Rb6kfFNWLfJjvvMgZDUVJJt5NgLYzUj7BEZ3",
  "key43": "3v4vG8LPcXAptboKHTYBW7Xd8QtgGvodqEddEWaFdT3YZ2W7j8rsjhGj1DgQzTnivVfTUG4QPdX5x1hEwdcg9Zx4",
  "key44": "42p3n2KbaytPfYCAQJidGNrUEBLabt5nEmJCsU72T95Lhzsvce34owVNQdhgLFFrM6rUSDzoGW75DKeWMti4LxrL"
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
