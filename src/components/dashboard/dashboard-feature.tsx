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
    "2KR9VXWKdxv5h667uyB4zRWzwkdmEJ2mhPoyDCBAs1KjjZCAjCbanFfiMBuJrc24RT9n6TaqsDnguHRcd5q8orDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65jR32zXnh2qu44yLNmFQhAGtaWqgtGNh5E6TjMptVEcEomk97LYZyMLS9jfzMeSSeoeyqV9u7fGpkBSG1Kbech",
  "key1": "yYmg8WoyTA5MLSt4cStuVmHeP5dCRd88tt1xMJbaabkkcHgTXVMF2UD8R7YavYYBAsFigSjqis7TMdNPJnPseET",
  "key2": "3bUqhx7Hfw8T9Ampkb2g7fBBRSoKncjTJEadvCmM24BYcjRPHEj7KA4Dfq43Tgqq2rNRePD31ZzNjrrQrtdLzZen",
  "key3": "5u9ywwodu3k7nPLhE228jLs6AAwruPT92nkZg2ivBKoTVhLHyWrVq9T1ZEA7FkvcgUPLeHA8GWjbdTExSREnd9GD",
  "key4": "TBj1NH7guUhZt1w7uFJJxnRbc6StcGZXMYQRVXWbjK2xGJFBR83aj5kgJbUByURVcamYaGUz5hWXPj2M3877Nbs",
  "key5": "5LQLmQ6j5Py1QTfMQK5jZQFJFmXXCe3jVzkFRMJQ3XpztF6fFKW7amARtECwpHkUrvgEGDPLmpYBwAUN6oSjo7Dn",
  "key6": "4FrG663E6Ynu19GBVKGnrtgCH35gHkHE3NeiYVDdnsbkxaE4Vz7ypXxGXdwTPgzckoyiWTR2UyJgpwMvT7fpL8FD",
  "key7": "3MYt4FArYexAgxi728sFmQnzeD4gtF3AE7RLZfibH364BVUDr49dj2w9VMm55ti94gMwmJhjMFSBRr1NYvTRaSfd",
  "key8": "3zGFRBTjJrKyBVUeVBbqSwF2FTms9ft7BLZKqkiSGweh7kij2iaUdzfjhdLWh6mFBf27VWkqRAUaaj4Z4aPNQtCi",
  "key9": "4bMPFX9REpKQGhHkkHTmYe8uWZt74idFoj4U9vDt8g81AWsk6pUXtJNPzM1Tn8eMQja68LTTRVxE4ToY42W7qi1x",
  "key10": "34WdLa1MqVbAK3USceWuS3Hzt27kWfdjEbvQPDxqJmsPT2btu5yHY1CPesNU7keewXLZrWwZRk3M6nZERLiANpXo",
  "key11": "3FrpDECSjTSQ33cRcg96tGA9w9aJwggQg8AT6LJpQaYdRRDLPGHZaNUBhX8yQm3QFPeussfeotyToZPrAqwGs6Xn",
  "key12": "6NQbvzZJVi4vwzYXPTrjkgFzd6JLr5TxWQzaFbK6GnGtJX43hyLT3GVuEpzRobsR6ePPkyHXGkuqyfReFJbxy1u",
  "key13": "35KVZC4wexwroDVL9FiAtsPBAKWiBz25A8fcs2xpVZ9zGun8ckkcYVhDztxZndn7nUG7gNpvDTHffA3LTKAGLTnY",
  "key14": "3cWKMfiBQZQiFkV29o6VnjAWkeb4yrnudp6rPZTYLdMYx5qkHPW11AoETwM64TQnaZJysEkNwtDRWonV9q8NfHrq",
  "key15": "3hAyaQXxXkvCQkooj6b4BDNxw5NWQ4UQqQLYEUkW7cwMWCFhHDoADmGv7kfuJXumKNLBrS1TcsRpVuwU1Nn4Eaou",
  "key16": "22q2mcphQMxTqkQJCJJYP17w71Rzwu3GR7pb1Yb4JywDaEfYA3uRntpu7J2VJ9tVJPeCENi4jYAEYwAxbeSKnaWN",
  "key17": "2hHgJdiDSsCdRuoG1Y93HFYwvEMA1GStH1jaBpmpS6JHsg5aKTNvHFZCWXdJHhgPf9WeG1bZ9RAfV9vigyN7iD7e",
  "key18": "4ga6DPMSYW9p8ffs4yJ6ffYF8vd8xBzNkisnQzhfLWfebhbm4REhy7rwR67JTCML8MPWKgan2NdGy2yRAsy7bF58",
  "key19": "5UHAT7XxjAfB6QiHa9XaVsSQQ124G9gswtDMfLUpCrRt6rNmKerqfbSCHTF3Two8cpuouUTdg7rMtSufdiryJpD4",
  "key20": "42pDYUZHJ1zkLKkKzKw8JMegb7P63RqX4diJDYwK9Ak4TerDYgdLkMWBdhwqh9uG6FPmiGhmeK2TF2MFr7oNwfxW",
  "key21": "4ECvww6jj9gdnNyR6munrPy4yjgzxepsSht4R9VTW1xTaUKSQcPXGAac8UhyHFo9cJMyPQY9fuAXXjNXJx327UKi",
  "key22": "5twtB542iNnf1mugEnknFTwnRiz1NEYAQ3MwgwWCviUAJfwVsUf8rvxnJ6Zc7jJg14oWPexnpj43yZ6fDDhZCM8b",
  "key23": "5UYEQLpKPKisUTUbsu3ZDTYLgY7Sm9Z7AX8nTe5k78zXgRW9FVNmaLVujUnMCWPqmSBDUnQsFt8PiTHBcZwU3CD6",
  "key24": "46M9mu29r8ghtU13fz44mv5LA3HdzA7QcodWwELiUoNUeCTN8HN6PXtHzyBsvZrnKLwrgQcPx2JTjqwkjVuDPeyw",
  "key25": "2qANnwz5RwstUVw8p6MK7GM4rsjnjjUt2NGYpEdwfYnaTBHWH2Axq3kSSxwkhofzD1jP3cjX8KHtHNdusR9Ysnyp",
  "key26": "2Bx3QW8RXrJoNuf7c1KXQobU4XppoMxoiWDCzU9kLWrtjj8Rg8BRBidBE1fg3YQvm83uXVn5Z2wzAfHyAMEMG9NW",
  "key27": "3TQ1Q73xJnmuGM3SmKoRhWcat1Y3W8qoGLRnDukHrTus42gLiUA8wzQv78padCAMhLtHUEDX4u1JdsKdVoZvzhqW",
  "key28": "5UQMDCD4BaoaFNLLvTRVFAbeUjEkvcv9p4xbMKk6LibqbaaHJvsEq3nkTULmEqxrtZqZY9q4JwQB9xqHnxrTmcrS",
  "key29": "4DQPXBkHy2MoMKX1rxCyY5Nc3LZqB51gxNbA57ZFqCuhcWGZGhNBrRSSQV7xrDNCEHXDkMZmDqACaY678wx8aMqK",
  "key30": "5UAr8GhZBjFJ6mTLoNWcP7r1xR16xGH4jtdxvBLoeq3xyAi3BjuQ9Z33BuD8XxL87z58YzJrdUMJ8KFsMhMczkXm",
  "key31": "5rtm1k3dYmhCYnXWZ9rM32eeh2T2MfmbhsA4tvAvgXUirA944GXRy3rM2zNb3tMJxSeZeKABQmzJwdPJ9BXPoYbN",
  "key32": "4qquzKQXaTqNVW9ZDC7g5sbZda8Mn4kdcTNkWJCYAYEsayLsC76vzWzjutxjWxKNbA5aVHN3gbVn9pv8ZCXsJzTA",
  "key33": "2DTZLd4zoTYjcCzxTwZeDwrwVKTwtojaaWBG8vXsXq2AxLxiyf1CBM2eC3ezrtRRduqyRTq68KW36b7wvKGWyJ73",
  "key34": "2uJR6xLpt2dKeiHEpuhzv6ndNQbJbqRH3UNzsTrJKtYGZg8u38LwEgADzq1gorhoUhNkrurmEtRQgcfnQFmevk4G",
  "key35": "ngKBdVsim57RczJg92Wx9Why6v4cXd1QFhuagaYehM7C3CcwvCTpLDjDoWC43GPWvX9PENR9ptzn6JAPGiwXFj6",
  "key36": "TfZurNNHbR2HobFec2vBw97Ype5yWThFK2oLYre7PUa2BjZzMLm6WuX9PuNgbiGViUs2qHWtX93Yw7k4tLBH9X4",
  "key37": "4GYPixnWaffcAR1ZdmnT1ZYe1PgwivEHqFTTMs4u85XWWNbWk7UZDkee5dBGJ61ehDQf1PwPtnn7P7RBojdSKvBL",
  "key38": "4H3AY2KpPT9ukeuyYnHRMrJxy74WWo8q9d4FdpbaVh5KDAFv5hJ1W3JdEGREu2XiAMV83Hdeo3nqbx9cAtGegH76",
  "key39": "49abvgY1AhkfPZhXnhfepEPgQHHqpytg6RiGmgoRhdqnpvo7ewgE1kMPYYCtfigKv9GU6og8bpR4o9BZP6fdhMnA",
  "key40": "558eQtSSRfNsviKkcPAeG3fDqc5nsL6eKZe2dECi2ZkgYSHzomddqStNt5F8kKVQDQ5gnx48Hd13y4p7FXCY16ge",
  "key41": "5h23rvC2cE7AQ5Jt4SHnqzfCuzD1k7cxHxjSLLVsB3PnahARu7Xp1pRDhMxF4ci8Hpo27gKLHmV1eniYeMUUdKUk",
  "key42": "4ANyvWWz4hKFPQxjsuiutAMzgsnv8b4qiSgCu4EVVu54zbZDScg7iXkL5vzGi21JZitKwJTSm8J6HHkHW1xKCraT",
  "key43": "2VHUB8RKaF4FDKGNKmHSxxGNUhiF9fAb2avis5swazmBirH6mo6ENjyDetbvH4xyrUscGmSX2qoaW74hewvtMGCX",
  "key44": "4XPSJVE2obuNcxPFTtxo9DyVrKYPz7pfjBZyBoMADg9JFmhzsrpMiKcCpgsjfaxUVtUpFefpvYjK3fYavnUxy5kw",
  "key45": "3WxhTf1h65SCXUpJxcHM6iZdNRBSKYbAtLPrtbo5o6w7Z89YtVTqHuz6Lbv8wArhnvKYDCfTby3xBVw6wYcBnTfB",
  "key46": "4Eyx8D3F7v6Y4epbAyy8YPgQ9cvZQVaLBwW8ZjTkJ8Xzbbwq6cijYFRSEa5q38jb5CLbvgRH9J6NgsEf9JuoNXEF",
  "key47": "FQX4hm2DY4po5QeqBBYPpGEovSeVqtfB8GQy9ad6yEccsv6xaMoYUiyDv9Yo8UKv84VwHn4JLe69o3aTAdJqw3B"
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
