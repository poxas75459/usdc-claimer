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
    "5nJqhMHhzwUeTFkipWRZRrbBPDDzWyCfaMvgSDD6XJLC3pecD4SsJae5B6QJbc9s1Dvugi8WYQvGv1cq6SXMVvoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mXNsorb4xUYv2vkCqBRifC5RqTGUdFiihspVyERzjLRKkK2mQeJJQzwM8zKCrUuArS4yeGHdqwwqeHG45jEi8a7",
  "key1": "3VdpvPtf31HNraqqGnr8cdMYufXB2TWAgpfrD9wToxxtJF5NuaCenvRAjd6279Y6gpoNnYcecudScbu8Afz7aoZA",
  "key2": "CWeGefBqnKnagqb23uVc8sP6D1oioDWNAQZgCF5q3bo6KBCeYLd7VirHBGGSorh6RFsuPCDeXn7zCigqmTg7X9C",
  "key3": "3fAXn3vTTtwQXMmRtRvpK817Zr1KDkSnEBNZyHsTpNKsPrCvo69wUqNwBZJ3CAQXT4hfPHBCoggdbTs4h2gCquby",
  "key4": "2twcLSKpZ5yuAWSW3JoqBfQxx31MN7cSD4g6dZT9L6vzrLtHYF9yknXy84Gs1pZVXiWzYJRJc2DhPfJYY1oSwnuF",
  "key5": "4DvF8tZ2mr3a6wCqjfTq1AofbPNXQRdKAuBfEVWjmWdj37ji5WAB99edYTujbuvMCVP8gA8tPQ7hmuhLULUcghSm",
  "key6": "3Aqf2gZLRD1kah2oNw8jPbR73GKWGZPfvCjn2GbSqWhWEZN9zNB1UL1pCHvtwK5z1ddpDaXcQQ1gKLfr1k5Uh2tw",
  "key7": "3RGqzreHEy6jrCyBrABQZMas3s7HUbDftABLsA5FoJx2EN8JUM1pvJPwwxvhWCR38SyjDcrzJtmGv4KuAdBx8e6C",
  "key8": "SjMoFSarpjbWD7nSbtmVCEhYCgvnFYJC42GDZa8mL1PDUeHnud2j3mBYNHuxrKCQAWmkqySK8niVN4q9aMQRZLv",
  "key9": "R8GxZZ8mfQjK4UAQeQ9ZzwmVdr24wofDoFB25N8MqmawEeLSUEdhuCiSyWdGBFLLMcNEv5xqCszRReeoM7L7LQr",
  "key10": "3XEii1wc2Jx5c834rgn5JPaS7FzUexXfKE8B4THFkKv5ksMqGA4pRFifnRaYoTXyZdzwdzMLNDMa64jM8Nm1ZXHq",
  "key11": "4aNNiAdzraKWeK93mxLQufseVMRhpbXgSZWQ4pNifaTfyMY14t3vtqbSHsxh3xZC4wayvaKh7ay2BvSsyd66HWkr",
  "key12": "3Z6Cejixhj5CQPtU2Rp8zoy3BVL1GfdBjLmCJUXZuTUAXqfUuoyenNvk3zbzkVjkc1TyDGodX3N5fQ5hXZE1KfWR",
  "key13": "2ZuqNMC48gbtaa2fgXWDmjSdocHnmxPK3nbxxkBGnStUoD86ij1Bn4EHte9LT222p2KL4AWGXrgiZhvZVCCADhsd",
  "key14": "RCHnytMqRf1STCgKcYiBYjDg2V7QiC2UECdwkA1W17XMx96kZtwNGdRgFk64hw93TwG3ZSvbDsLPhTpsRg5pfLY",
  "key15": "2tm1bECBvXvnNE9oHiXJ9F3UC69yQmz7SBVozcXdQwFX5sMGrdecXDD2q8B6zXm9H11vmBJd6jQ9FGS5DAjx1XLY",
  "key16": "4q1sds7FQyp5kopPGXbE1bPzqq2YNHsxo4odehWwKufnR76datWVszGSno4Knopra2tYDZngKFdAucF6MTauuuy8",
  "key17": "5ASApwpLmb9bz83Gy7WqFEa9K4SeLiKNkrDHG4kiYVvcHz2zTVjqNdqsXbYdUzjL7d2krj6DQcd6TK2E84HwQqoA",
  "key18": "R2sS2PMdAvTfLZ2F1dSU9Wx7M6GCduGGoiwjy1Gu8aSpfWSwmCU7QjBsM9LrzaVGVgkBXzY2Sy1aJ7MDU6XcngV",
  "key19": "5PCiy87Gh2mbSMMC9ys5KonYa7Qj4r2Nb2LaopC5tsMsJ79ZUBULVgy6BY7wvT4Mm8DWzjyS4QyetoW8b6bdcf7F",
  "key20": "22DeuteDWtZCHT5gzrPCNBUNMKvsHH2wakyq4JyKMJFTDTJTpi6g88SXH7KNLoCR46vab4tpiTUxuKJvcUR6NQw6",
  "key21": "5xXXJc4M82nrE1gR7WcMST8Nu9eZqFBhibHj4qYxuRgbVxKHeNVU3MwYfzpFXryZku4Jh7Bt5apkk9VUMFs2J41P",
  "key22": "4LyozgHcCVfwigPS8R16U8VRKJ6X99ojgsGhmJiV8AWWWyZaM2f3qPL6D6oT6gTuGypkBMBYPAe18dZs1cU3Ja8D",
  "key23": "2QFEVjUPETcMATnKAGnGjqw5hdgL6bFhFjHpu2TXAUbuy8m2qtQegHPzaMURmFJLTSiiwFr3gQEQviJFuSaqiG83",
  "key24": "5ZGYqGH7zL2Ua8AzvwSnBJgW8ZUHCDXPz1AwambdxqGdG8u1E48eKgrPuHrLzmDcUATkxTnQPqRhHM1ig1SHUpbK",
  "key25": "5zNrmvKqmy8cLjxEU4SzSM9CEJG91cewgw7qJ48t8MCJJREqhc5E1Q845vJZUVsbREJhLSeq2CwhvFSWrJYnbWoQ",
  "key26": "5LfQWkbCphmhgxnAPvcj86v8LWiSdJYsNoPXP4q6R13SdMAsEdQXY6aYTCP77wuhMaPSqKKTEdpGqKGV8Zn5uhwY",
  "key27": "4so38v8Pz1ky7dpQZkpy7cJfcQTrDZyV7dL3mpcYdgvXQGxP127VzxUNxFSNYzH2jHMAM1zujbJ9p3FPGCWZk3rv",
  "key28": "5ntUrXeNm5qGNPhVVw742JmabsFA4fAsgftN6UM8D1hDgpoUoEHUvKHdpWep23m6NjCpFH5saqpTzhduh5vwojx5",
  "key29": "HHHF9fmLSG5Lg8VRexexw2i6BM427oqP4XreZsqutxt7veUnbsjp66Evg6FHB9UcGoMs8afmqGSQSaCuZziKNjK",
  "key30": "3GCMBnnd7msBXFw4JBQzEWrsq4GjpPvPomChkJZxeGuG4Ko9KrMdDZXq4eJS3rUU2jYpeMt1sqWXiKpmD9uoXQWM",
  "key31": "4LLNvuis9NeL7AD67DcCVbqh5smCmfFsnQ6mynmkfHZvUjFLT5gXGDRxGPZ9Z2iADvTWtZGYwz3wg5Yv2DQTQ3AN",
  "key32": "2D4zPCxWWLA3NDKmBwSsEMewtBXDxx3zSbbsQ1UfYrHw41jA4hZuT6r3Z3nncVgrU8FdguyTRUjhQa7XbvCaNuux",
  "key33": "5hjXbBoTEVYSvo9KMV3nGzz7mQdunHbR7g44qQCtQ6TdMBt1jsQs2XjuWzAZgonx7ahVrmjyc3UBFfbrzkSjrYgJ",
  "key34": "35AtbyLbHxhfLxpuyVQrdPFCxQjEZQTCGWoiRvTTrNi1cSYYu4y5FBaSnYcWm6oBm1aWFK2pAJfBcCzERonXj5CY",
  "key35": "5ApfdwhCBd8bZTgqEdr9eFG3RwHvWkwzgu7kC9qUJaFVPWbDBJua9s9AhuD5vwuE9q5vUvGZYbVRRYVrQQQCpTws",
  "key36": "4zND52dfaf62LKpmWyjBQLhN1YDCdq1JTK2b1zZLJdaosgdaAJbqFeGKLocrDkBuU38q2CxtkaTaf4PoxCLLRgZE"
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
