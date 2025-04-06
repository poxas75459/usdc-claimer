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
    "4NBhQYhW9YgNJpaKFCKgh89WcZTsjtnL8zJGRnoHJ8grR9UhNyiMUYnbPs4pZc5CNjvmudwadAYoJYFtUccLiB5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zc6dpwW7a8Sw92KTHC5368DBupQHbMdBrwtXxb2AuNHmRR2ZFwqBq1QkMLZUapevGv1B38NrJMrfDf43pHokyGb",
  "key1": "3st6PJ1hYZt4HchnDw6LyKgTdavECeSbRvqKp8BT9d2U8Dp3fASTiV8pWji5UuAqGPaGkWykX729FjWdpXdvSdeN",
  "key2": "31JqnHfxdjsTCQPdSN1iE6PiBH9Ls7Kdt3wB41KWQDmGusi2aG81jY8cFd5eYzBzXTjQZf6zUpvjB4Rs6ca3ciNa",
  "key3": "63YSCaJANLcShdxF57Mw4Z7oFqdQg2yhQQqQnGFXNazuwwcLcEoP4RFW5Ebec7LrB3wDRpFtaxW2LjTEym7u6zD7",
  "key4": "4KwQ5UjePsbEZjN93CdC8sZGEN7Zm48yVsqo2MYACoX7RRSt7ueLYXk7q1t4RQduNzadeKn3y1eD74Niuxs6Sxvw",
  "key5": "5414pykbTaYp25Rz6v7tbztPgTAJZGhroUmJKR86ANCVmfsmeE5n6xSN5Bb7jaN4JdkZHBESjycoEWZEFW8Kw6mz",
  "key6": "4vixkEWkAgwiu3HS9SjMhrnNSLt2WfS3SC47x6VJBRmGdGmemsXqN9ExDJYzct7sde1goxxonL5fskpoDiChhcBu",
  "key7": "2JfdeMCDk5fiwJ1afibEmLbQszeczYzusZa8nCPVffhaTN59bkXkChf7ayyaPT3vegbxEiVrzz4U5hDix2nNKmT5",
  "key8": "3h7kATKeui6U825yqmTYy1odpfgisanyX35mkGb4hAfvUkesDMxjPhynXwS2b8U4U2kYwVPxmakUAchuYM8xP6ET",
  "key9": "4PpCW4QdbZsyfazzTNbnttc34pML7ZAy8kmN8txKw1D1ZudKd4XZWrhmLKL9zZt37x57DED19hWRY6ijKbz7zRDo",
  "key10": "4YPTuzZEoVTWFEALN8DuXAQ1iczxQat57f1uRkRi6bMh7fxscnSoaggU9aCJEtjaA2iaM6xY4o4cp9mKFu28zugE",
  "key11": "3rGqndQLfyTw6QFqNtF6tHL5gfUX8Ai7tpxj5YLqgMBUo8sKe2b771QAzpJiRtsriEmsov8s24BawT7x4SfavTWs",
  "key12": "45hKbEcrVJ3KcnXCUyffbzGjQVjqKVb6HZCd7Tzas5X8J8AXmN12faYThTd9RacUZH4smUDkrjcJhWRUES3YGABv",
  "key13": "XqasDr4mzDY5YA2XnKAQgXP5KabuSs6CZCJxoSDyXMhuseNW1gbEHFkxi7LrxouHvi7VRFB6RpTfCPpfUnJMfYQ",
  "key14": "5wbBuWs6AJRVDw96y5vCNEBWpWHSoAWwi99Ciok9C6RFSyRLL3FoKuiNBd5pTczGLyQz2gYBTtd6LXWfKTyKqHkt",
  "key15": "4MERkTQwMNdJxA8JakYj2R28MzNpsDo3nYi3raMpuH5UwF7fGJxp8J59Wmhu8X3gyRmrWw75YmCTh9fUycrpxdQm",
  "key16": "4rBKBR54qhuM1tUd7anfovg776fNkiBiRWspbD2kWEJvUw8BeLDVGLejKXPg1DhccuQLhTJUsPqi7cCWJD9Hcksx",
  "key17": "5QBoGFWZo84Mcy6PtEEgrVgPzoyw1qbwQUBopEKaFV3wWH67DonBET6FZpn7L9fXgUJ1ZaLAJW5NGWtETU5dsSSC",
  "key18": "4vanMTsU2syz8ZiuSGcYCWB5jtFvLMUkzfC5HNqiQPYGrXCNZAtm3w7irBue6UM33gKZUU32gSjx6SFe7QfA2rYf",
  "key19": "5Uf1wZECep98bZwbpSuC1xS4Ufk933ndSeYiyLBHSpJ48LHBQ4jkmGAPuHUx6gxq4Bu6nsAbCoE4QMMVdH4Mynsn",
  "key20": "LRRzsV1Ai9Vt1okSL5XTxtvBpmKWVoyVqSBAnYbG7zd7StmmQcAQKugQQfozej1srYJzVi8i6HQpNxVQsKFSZbG",
  "key21": "3VtHsHD4mXtQn455Y6XYTFBzA5WYzr3pBB2BJZNXi9oekSUNAFmyJzCJnRReEqHRSr7MNDvYGCYGhrrx2UR6kzgY",
  "key22": "3qeNKZC3wLUJmx5WUvr1dTRRdZRsoQRbisx7uYrLgYxrYwY52RsBhH9bvZXBmKoG6fGrWLLU3Yq3nNrDXJFT1vkA",
  "key23": "4dnVMYEY1crN4KG4Pcv4QEF465dyGPAzGsqhr2nef9h1EJdFcR1ixBe2fR13deNgZ8bFi7Z3NAtoTRUdxL7hxdcU",
  "key24": "3mBPcFZz656EcENhAXW8maaSKQ44W6H2krLFFXg9b8GYJhiMrrFBj9FoBtEeKR7V4438719rLxDtB3obwtiCvpNq",
  "key25": "4Sy6fbeRCooVKP5e4ASNVVJxjeWrxiLhJQiNFRAQZbwd4ezX7cpqaW2nMEC6sibfMDsVjyFXjrXdBTTZixRP2GLR",
  "key26": "4DA5GHHbxmBiCtioUW8yuYNk25Gm5JtcpPedXxDagJTr6JtPJ6tn1acdVuznSRyz9rhmWcD51Wvc4M74oapxFNbV",
  "key27": "32wK6QXpNPmAUGuyhPiFGYgkrbjD3EYoQFre1Ufb9GAqL67cSQdF4YWSRDo6DLDjmtaXLi9bPbdWuosG25Ckx8Zk",
  "key28": "5BDute6GUFeqTp8nkRdtrkRYVHmfT1nicMQn3thgzD9U9nwbPPonAHXQ7q8rCkuCZGcW8SzBfc56c7SCgaQA7T6F",
  "key29": "4tPnej5wb3hqHBewrvGuLd51awUZtoev3cYWBmjZ6MqG9bT6kSZhFnNGXCBw1EnsEY8VQuyJgY5UXubvT28kT4J2",
  "key30": "4tqB8cyYPGCL1AW8hjbL7RhB341d9SUrahREb7Pi4VjfBpjUHqpeRZbyeFgJMxbSLHbfBFfUEmS1GQzbZ4G3pM22",
  "key31": "5yHBCG5xFfPPwiagDSPNrmDq6oBszTBZTrxBtPDfGgr8kyGBmbXTT2tAMmTHLXHAP5RKk6eLfsKGZDEn7gd65yUn",
  "key32": "4fZ8NvaiuXhH4MfcQekgdhHDn8LqMnx3N8dNjNdac4S1fLCRaTHE3HQfapW4CtYhrenoChQX7bs6M9tPZqdFnxeD",
  "key33": "79A6uxSAf3pzbeVtGX17z7JrmqZAmDv8ExTp3xvkKRGpgfhDCKyXbpLSaM5qhSNagArC8QviMoaMH4FJZiPmQ2p",
  "key34": "4fAnhuqbYX5BEs4MkPKpjJgGkYDxSBogYnz6WLV4CVy9CbSdJttfuffcQX31MEGZCz4ugjEHEy5QHS5yiVu5Com7",
  "key35": "4xGj8aQwPjc8TKXcPJm6L9Y4JiW8mJa64MNyzGUNTGG64iKTnUe41VLyi9PewGa3jA5p3Gfg4KPL5qEBHaePtghV",
  "key36": "5zCBjXd11qqGkEUvJJ8u37YUQ8bWM3LxPyN67UBXGo2BkVqoFx24KnKn8NmVX39mVf8SPu4onfEXnBAheYgExsRY",
  "key37": "DWuvu2yD7jvAX1xGsnKw3CeYkRhz1weRkTLWjVJcRCGAGM6mkgoMRfHwLYJof3dviDBfA49LQkbNd5sZ19udUFm",
  "key38": "5qc7er9cNgxvX5f1chFXNdozczRVsYmaxBHhYKWRfsCBjhJzjDonU9fxsxjBzgD4ZjRLjDfgYZLCGnY52v2yYfEf",
  "key39": "55TCWSCcGPzFP8aiv9w5MgUK8DwC39Fvp2haQnDauYrU2DQyiqBsZJQbMZTcs6WTXHUZAZnrYw711QhsYcvWQc7i",
  "key40": "3YH4Vo7oKTQ5kbpSnLWiP5gqLXckfjQHHPkNhn8vJ3bqJpA2PhqKATh62kCNLWibXkk5SYyMQ8YwqW12uTqmLNpk",
  "key41": "2bEDgYiNBj4SqSiwq2LKyeoY8dKcqqn8uQzAed9HVJKFZB5ThajAxkQPgkUazhghLhVy2BvETiCv91iANAyhJPbA",
  "key42": "Zx4MRr8KTbXpJaVByT1bq5VHHGMgbc428L1gE5kaugvPwg69GPz2MW6tC7o5qiM9CM8GeQLQzNYQQWgGTrWnSNc",
  "key43": "3AQ3ME3AUW7M7Dpvbg5iu5h7ue8oBZmpuP3HERfeaPVEMZP2FNhJ7sgybyZuisiULidhN5yxK66hLmxMj9NEgLeq",
  "key44": "5aUcc758pMrnhZ935sHTtyKu3wQniHj5DkTf4netqjZdxAbUrqxppRmZpV8yQXUH3xschqBzMPDwHrRCDAkpweAE"
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
