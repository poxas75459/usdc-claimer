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
    "3YoBFbMycBdZ1rPeFDgdVQPfJduc1rcqQpxpiYGgCEV6H5xys5hgQPNPPuHwzTc2D1w62MjAXLNd2dEcmRDnokGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G12XBgzSsTcvsiAFJq7ajWbjtKvjGBukNvuGKneLhnDHbzw7RMDBdUd5sP2Tv4ypg1dDiHyGkqu7rYkPJj5ZdST",
  "key1": "5WXiGhyjsRZxjeX7kEfmvKRAGTMJNUihwwYSKJ3ExYtBfnCCDNDSXCHKRHEmxezwGDfF7naYxymZYupux9VsQNWb",
  "key2": "3BifjMunCMELbmGyEG7q1MkcZuVutUT2fCqnPoC3HcNmkHwWsxhLXiP4t9NMd9ShBxujXTKpk7UCQJUt4iYR72GQ",
  "key3": "25eqHh4eAyGKd6jmotm5duTAEqn9RZMsfeUtWZCtGnA9Ld7ricKP3JGd4i1ujArUz4MNKrcmuSJKQLrboPCC51Pd",
  "key4": "55K5Xa4NiKWjy38QrnoDNkczyP7p6KZKTn1QsagX1TRMAAkGb6nZz7jgt4HsyAxLNrY9JVPFDdX2PyJjTB4EKsYD",
  "key5": "4KoxFMdTULjr9p2E3dKppSDakeoxHNRw7N2YGnAyNe8f8jfvsEMFJnvrLHbQiAY2T3FDxRYdUGSaFiX3eXXQNrmc",
  "key6": "5kyH9vPmPz3hW2tpZNRYecoJt1TUvDhvx2dxm94TuqkJrYyLGgfSVDXWT6xjp5HKyQCbjzwwLGMdvmgpSsV753hm",
  "key7": "4hhosh3dH2rJosVhHLALmxzMJiFrywwCugh7CB3JifAdtcTEy72V4sNThLvkcmcaA35MQZnDa8MF8FtLhLhYoBPJ",
  "key8": "5YHZT8FVhXYfrHa51RwDix2vnjB9pGtK5Fsn2PurRjBHHqTD9cvtit6aBmMoZBXbG5trzbPLiC49q6wTzQk37afQ",
  "key9": "5r7tL23LuZQgakV2uWJFb1Ticm9KusMgfhsf57KRcK2xZuYwFg9JAcJrUYBUwEnXjjem8MW2yeQbkNFE2GcWxWcQ",
  "key10": "eV1PSYVX8Kd22cTMPSFG6SRpcJrwEMikDMx1Gy3p38pgD4fT1KzPjxDVepAS1qQ4vpy8a2Wxu2cuLmUUSomKjvd",
  "key11": "4QoHv58ux95RHfPZWraBj5AEgayb7Sk1GKkCgUUtGh194KRFV9GB7Dici6YeG4pEmECaKAHnAdno4WrNBLpMfa24",
  "key12": "2wCa5gHtDUTPRB4NFwCyWkD3sVNMmmniHggfDGuLsdQTDDVsHJZxGTaridicHjYNUy3sgTpwMoNsLubcLvZh3Utt",
  "key13": "2YSPj19pNdF2Vi2EByUDsFsjFhx3rtohUqHHqfXqakvxfLTvBCqdqNVA1CS789gAcGiqk6QAk69bh8tL9feUPo3W",
  "key14": "w5ZYmLm75VbnbP635kxFxkYJ6fne9XabKo3m7JVdhJSqDktTW4wr4kqx3Bm5wyzPr7SYMq1eji3aBLRVV8RfTzW",
  "key15": "2c74Nbk63iWi7GumXc4cst7bX6sAJXhDR3aGYvuurC7tFHHJBAZGxZz5NeNUM3PZAcweV3Y89B6bw949ir3edpUx",
  "key16": "2N72bvCZ9yFg52ywBinWKKnpbXyLkhvh4fiTDfRtFHykQVwXSX3Mii4zsY33H1U8sLYHfBSU4TZosUq97tNUmd7V",
  "key17": "3UfPCw7GZJGrthc2bQVU2gUsgPj1rrvxW6PJGVnQ4SEW1WbHRuMGjmKhn78naQXE1tXGMSapuimfwi9woiDoMWFX",
  "key18": "74Yaz33XsrbFrdg5JAow7NssP3qo8XiMuG2MdaiaQTsWAvChcRQjD5PbFpKqCUp2dALbDJYAaKvxJpRBq9ecQeH",
  "key19": "52Xf55xyeVTwbWAMR9ogYqTmnv6pyZBGuPibixs5GZ7zQS7B9F2qL6wsiYPq3T3mQakdAXBDKVZqNYhStv2zDtNe",
  "key20": "5da69wFHrv4PfMBBAVFew9yBXcdnAT6RMnoLxs4Vd2Z3Zbo5YmZrhVMmtN37eg1XM5CqLFLLBCzpZCnk56vshoBh",
  "key21": "5UZz9Lmr9VdAHdBjv79TdSn8kDJzGrWztcAg6BptZPFwkBE5qdxTf1aYbvkqYdJs6ZNdXEsAKJ3uJhZVdgr7K5k5",
  "key22": "5RqogoxsXJRiGqevfLcpE7DpcVdXse7vonxZEXu7z3Exs5mfrAWaBTRWTdcL42zAaCnjEZo6o8BMGfKNP2o5abX6",
  "key23": "42QPy4LeFiu2iJnoE9BnyfjKHQCNR5pP6LLNpKPezwYFko8au9PVTs233pSLR1g2ffx8KeYaPSCDpMNhhb3f46KY",
  "key24": "226RguyL82TBbaJi95oSfjX8GibbUQJbkaXzNZrep9b8zKagk9oq4FzfWu3n35JZk4LMdxURw95QxJeUYFp8ZWJH",
  "key25": "4xusb9cY6xf9AiJv7dwXsYxwrxdCZxNccaMtrRpXBYB7vvRvtomCg4otRLMxbT5gcpzUkNqeQ3wHSQCZmoTkL9e9",
  "key26": "4Ewbm4ikMS3uWdTfL2c8gjpn9ZooDwnrAWhXyHDkQtBumGWjtoQZd9ETbKnYRKwSpoAAEdrDheT7UM7GYZLYrBqF",
  "key27": "3CoXtrs3oaBawLMKjpt4WADPGiqpHBFFPTaFe9aLFxUkfmWvy6xyH9sDaTPyCmHLLQuUKHLbXhBzLP1WA6aoBen4",
  "key28": "2hYFba1SssEHyVjBWkjXUSJNEX4imt3EdQPcjbyCdUnkL3vSaxdMyYrBtkP74i827koRqJDfra4gmayL4HLq9ygG",
  "key29": "2WcGur2ZUUDfr96SKdjq5JoyfTMxUP1GQsp9fjXs6ogzpY7FQwwGz6LWPQ8faCCNWW4TBN52LjpVvziXKTCAu2YU",
  "key30": "3AwR3nhv37tGzEBoPE4bdMJMzJN8hwrpV5MAxSjZnpaSjYiC7jxh91Bh2YHqzjex3ou2VrxtojSdPU84p5sSBzk1",
  "key31": "3kLy1QSGUx7C7V1zP98iXTMkNTsY5TbMyM5gRtx65DxcCr7AysT3Kj8KSDMzVVQabZCyR7jpSKZwiFc8Vhpjupof",
  "key32": "4NDN5cQfKzskQSFS4iccVoFaEpT931XTzEMghXeawGN3622zJ3fEuh6JrN5PV4Hf738vECV6rAB2BY3hQo2uUXG1",
  "key33": "2hP2JPqqJFJwdBzbuR5FaDHvknEGeUymzSqr5kGsXtkxPJUf5uTMGfNjS9mBv4WLJvakS8H155KGgb25SjDnW9v6",
  "key34": "3BvT4qQpS5bKeckqbvpFfYJrDpJnf5sTrSZNg9MeqNXVmgvQnccwTyfeoTm3tXz6qQ1AtJ7K8Xo4MW3JnqKQvdmc",
  "key35": "rxRyFBk7yzSSPYNPTDouzdDhcRdC9xoZ9oxevPccEFvPqinkGdQNwFYZaHou3ym6CUvatbVhCPefjSneTcda9Nx",
  "key36": "sHRAbEUh8f3gf322c9ZD15YiQ56RPqPMgUvaTWehRbzWTWEqSAf9EVdb1C7TNkXhcM9Gi1fj42cb4xxXazS5iQs",
  "key37": "2Pk1CUhMBXfwUy4N9Z77jCYrMo4o5h3V2Kitm8qCM3GeNJf4aiWxv7y7bxcVeKsV4fq1DaSp7KArApmyumVGfesf",
  "key38": "5RPm4PxwKpEM9tgwizHTGPrkW9ymsBbNzYvyuvhRwGv8eGoeTJBiqorQFQ4AFDbFf92H2t1z7jXJcD12fuRv5Y36",
  "key39": "4tnYYwp5uWkmAAnTVJC96AhaBY2D7ybyxC4tV6df7mXUBw2CaG9Gy77YTgouVU3btXjXB6rfbLMfctJvF9KvvrC2",
  "key40": "4TqnKn4Dm3M9rMsDcG7q43jDmPDNr9aNKR3X6CWxiQUK8dNHJPEB9DuQohhDbHy9Xy1RcQi1wTPAbVhDC98VunGt",
  "key41": "1L2o6R5SatgQieqpwFy7wbeQZLUAW23PNY5jdx3HLKYLLbaYPSSCLRWMo2evxMsPUUZaYfFzX6dWxeKmZpdmGQR",
  "key42": "2x61hYypfxqU5Rb24J2nN5FN4usZhhsAj5uBrP8U5v8LANHeejuE5ZQQH3Mr4DEDbWcbmvKKmBnuzRKsYwX9RRcd",
  "key43": "evfaRsJB4JkGyWEt51vDhSRCnfE5kAg5zkbyN1zVPgiDdGVNZ6u2rohdY1Pg7sXLx1wTksrNgJ8Ew82eKeyK4J3",
  "key44": "JB5Q9CArBS6RYLcV6N7443BiEHs2Qj2z2wxnA3TJpFzFrm1ckoVWREHefWGTs6rcMcj6yzpvXgkXjt4dsJ8MMdt",
  "key45": "2QsyHGuK3DKVE2YESBD3jCWEuvfKpNHe8d79kZ1UAFXb6uiuVp9A9AwbLNHYX2286v4Pj424dVNczdtNfo6ZoL2p",
  "key46": "3RiW27dvJ29MdUcvEPJNoFsnkncEjVBq6TjcRGaeyb3hdoUS3tq6i81Z76mQFU8T76RA6xyjcNjHC7J1bSnJdn8z",
  "key47": "2g3RtWUd4QzM9P2YNFvZJ9qqrPTd5x2X1A1CWGFuYwBpg2TdXMsCzPGKJrNV9fZcgkQj9usnQ6HqN4LhW14Lzfsc",
  "key48": "3ZQrCZKzraWXfG8sJ9WGuH31tiKMhYyX2HbSKoNvRPmKJzs7ZDGxAgXj8oSLWsyjjeLeQAnhepXFY6ECm8xg1Hvu"
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
