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
    "5YDar7dxCbPHVoJSKvyK66bDaqma2nfJfsjekmezhoxe9imKVMAW5e15hJopydHZCBaeS4ppBpakuv2pWLRJ53J3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z2XC7zpLqEWsNeNdWTFDzDQT7W3EZYouLrXgTp7hHndv83iXJ7NivYMbTDcfAeg6cWKWnzE4yDKuvpZiPvcpY3u",
  "key1": "5QJqfRKFqJuTVfK4RqCmNXye8yzH1hxodE8Zdunbf4HDG3tdudAstckdQAskEKr4MktHjs67qEsXgL8qe2Tgb6rb",
  "key2": "vWPTqR2TYEpBZ8G1D88iXqdmYwCniT9hgBwSjBmdvpH9tEDhR8NoX3bRjpeEt6w8faLzr2b63kaTF22SF3JZLAk",
  "key3": "hxRDCzVkC2XXoNSGYP1iXNtJk7jDqV2eNU1htsYesYz6w7D2p3rWkR9Mq5HUdsiYCQeZWZiisK3iBJfhW5ASLrC",
  "key4": "3F8T6Kx5r6rKrZZwsbYCYaV9ayGb32YbjLUxZXNq81iSUaeZ9rMpVM8vmYLPZzH2e9uCqQrAMHxXJT97CtnDkebA",
  "key5": "5LdBoLZMSCTRPiqE7EzRTzBrSgqLR6hodvAQwkS1gxYZNjgbZfEDPu6ZbLy3We7sQqf79U6TETB8rRuHXCwwG8SM",
  "key6": "34d7qn6Muvb4fWCiSs3ghJNGJCi1KDY8rRrBbmAn8wjMCwDVDu74wSaNtcsaEwCTxRa57vAvUHArkoXcamYYBUAf",
  "key7": "4BC37wnFCRtPX7bzNje2a5jzsdJXdUZKMGFqnqxQv3SEuX98m43TbKXiz2YhUkgiH76CZDZBdATeiDwPGAn47SKW",
  "key8": "5noLDvsuQZCVBnSqWnubcuvGoQWDVEF9my9kV8csFJSF9aXf3wRHFjuQgJLG6mbjXtNPNSKfUSCayCVyHmFFgYKE",
  "key9": "16bZKiNrBQsY7tb2mRje32Nkua1BuuDyBNqeUaXkixMgQ7fUwdhHba3UmomhomnYfUVd9w6YHqd71YLD63zwwZS",
  "key10": "5wDkFWyhrmzrdL8gRQPS4m7bmYVihtbXMoyT727M7vhjmjnpbQ2DiPSZHAg2pqPLHaNmqP3NicLZTbzaYUBb6BNx",
  "key11": "5Z22hxcF2NEkZ9j4T6ps8cfDZ7oKigoffGk2pPwFUUnNk64oNu22bcKDUPf6LRzpJLUVN27kzuzjxkEQShoZrzTN",
  "key12": "2iV4xCvKCgteYW3cG8QFLuLhckPvjnmAGawaufUnziexwLn2ZnDeuvfqFjPWPP7gsUC9Y2CSULkx2tw18RHkLNZi",
  "key13": "4jKuua8VYsDxmJoA6gBgZxadhip4TPFbf9xmnZ218ix7driMWSNE8743c6h9UqiVGfuBjQWkMxbWjHwLX2NTZcBr",
  "key14": "443Csfcyc8ieudLyiFBvPuodKUan2uxQFaigHFbwcLpkVa4TFSJ6YiSyU9D5ghPbWAKx3331147SiwcLdykfH9FU",
  "key15": "3VRW7rFJUDQjx2yFKSnGoRppgndSb8wPRnRmUDTJFxw3bvSdnWC1t1QvWGDDeTg7odPSUczwe1oH7eroi1er6krC",
  "key16": "2LqL2JgtKiap9dQyLYPQLy3PFtf6Jy2vzeePNDKpLVHudann6NDVNgkbTf7NNE4v9FKoeNCHfmZtX7FwL7DtVa92",
  "key17": "42XRy1626cxcZNJaLKRNqR1v3hUPVDL3pTQ2pwtPtTva8FuGBNW3bk8KXaMdeoP8dV4n2vrdhwiFQ6a3wFTcdGd4",
  "key18": "2nKtiieUtMC4kR5G5L4kbtcZeSQ1Ek5wRoAKKyEB5RFczBBy6pLmE8wjzjJR1uYowoi4JH3Grng1y19KPHdb5boo",
  "key19": "5cjghJQYskEU75kVV1Bv2yXbNMv2Eb2tnYpTVxAsAjWEQuEGxc1kqrTKAKeXtZkDAzXhZ55gqcQpAumxDsWY1DQf",
  "key20": "3Tq3wouP2W1bBNgHyuNkCvPdPBBxagTXXTcoXG2Gwo7D6duv5yNRqLRL7Zq85j1bJSGvet447z3aCpcQ2XMzKASo",
  "key21": "3TcK125Y2EqC1fbJs4TkFBoMgGpxYHsNHrhVLdmwU7Ss2p54h4m111gor9JgKeF94jqJwkUUQaDbcAPxzkEcsDc9",
  "key22": "3hrkwyH9SgpxAcpLG1cie8pzTMxEoTsDEEhdCrwTq3dXAoDgDrVRxoHTMyBoGCtcAjY5hYMzGuKSYakNrDvWHQTB",
  "key23": "2Jj3fuEHzoSxqk5oV1rBpAzMGhJK24t9YZz5f18GyeRQNYWnem9aeqMhUBjmSwR571kXvvvfK2rS8visN7KeXi2y",
  "key24": "42UF7tqzJB2BzQyY2tSLmASS6mkEh5wnRm5xN9QtczQwmFPcCw45nPhYeHn8p3TvqJHQDXYbqpwiJgxNy6VRkp7f",
  "key25": "2Je2vr6hcJJ9zhRLmTw9S6s6UHZi3jF65zmJ8b77U1ciVRah6toFpf5vVwUNwUWJ9g8XxcDK3AcyRkkTQx5oUHYJ",
  "key26": "PQJ4DTBExNZdN2Xd9JdM29uiPRL6VWkjfKkSpaFURg6AbZnWM3PDNFuxiQfZeg9y6BoeYPbuySgQqnKqyY88q4q",
  "key27": "4BeRagw44x4uRZAZtSdzTASUqB4TDt5uw9HtKVnqS6ybJ5YR4eAME5VKAKdHqUFmzaEi1wVdW4vMDYrXAtRteSNc",
  "key28": "2KxrmkXzeDvAnoT4EN6r6M3QcyMUn7KrHJnu1pqHcHgYUniQcUZXakJVv91QWMt21dmZzjFZ2WvzFaV563yrkP94",
  "key29": "5RsVoaGhSWNL9gGN2jhMn7gstsVsefGgW43cM7CFZRUXEHpYc6Aq1XEwesx6cpPZ9KMGcHS1LvCMao3w7UGxi3yY",
  "key30": "3CuTFvPv6RmSz2epWZvFbSiZksvVguGFw71qHBCcqL9bNyyxJxDQez8sSvpw7osNCmq5GnQLk44v9n7sGHQCFS2p",
  "key31": "3XzMmF14TT15w3teAwbWYtxRE3EKmg1ootc6pJ4LrFJdG3xvcsge39FeiunLCYmVT87gA8VbYJnV8PsevcxAbVbM",
  "key32": "4RbUCTzG5DJnVGprfG43eoFjdaaRNbFvZ6HZxhyXoG5r4uuvQVzmWu9z4HHvuiDW6KMkVTxuKCkMn6Z1f4jLPiKv",
  "key33": "562AJfdZSpULWE88tvMqTJ63zSQ8xsEq55x1J7PTqfMcF6JFU25dVU2NVYbacPKv55kk1TMgRwHr8gkKzEsP2Bzk",
  "key34": "Bu1kE1qPexXkcy9Fy4MAtyDbdaQVvcpuHMVH92m34wu91YTU2mNFMJvD1htyauuvciJXY3TUnTY97rViYwLyAbv",
  "key35": "4mMwEVdSJZUBDq5hzCAH2zemPWqj1pFaMwfQDCKRXvaeesYZAH6uBagVCBJEQVDDQ8L8bebr2CqM4LJhx3nNftWg",
  "key36": "54fGjmnjCZS5KHc8VfdUaed2mPCmF957wbe2ZjhnsQEBuhUPEahHToLKDWtng1N1fJGhf76wUpjyjEAuHPQVRYkD",
  "key37": "5M9GS4spncuSFuMxExwPUgqWQZm81bxfw98ftk2N6T2MQZ1CMA6PmKQoCPK3mzkWdqKxcMM5WdMS1x71VAUu6HK9",
  "key38": "4rxvb2M6wsUHZoX8SnqrqaXvkU6MyFTUD3HL5KB566Y9secDRQc9ye44DjcevN8DPzDcjqkjdDa29tciDCFyTVsN",
  "key39": "55VNU2bhiSXHPtUoeAmSxNkn5QwtWqyTwnXeay39v7JXEaNWEUi8kuizrwnYoivKNybHiC2JFrmmNRKmAZ6mUTSu",
  "key40": "MoETmCrXH5wVdYKysNZsUi5i8y67Cap1JPYR8NkhpA2dWZfB5m7acNcc7wmKzhhPq3E1TMQaUq5xFg14CiDVBHX",
  "key41": "3nSV1LEnuB4Hwj1eLqrmmrgBW8tmJrnT6LheoGDUsHWuAiu35pjLmxgstDZFcahEv4Sm7pnjhgLj24Uhf5TanT1g",
  "key42": "3tSK7KVhnEsXQnfxhnXVmi1cp3zM2erYHnAwvxujb3eTYKELTypHpS9Lgwu8KCUX2dJc2SfYye8kUnGjWHcmXRNM",
  "key43": "NqbMDpaVFL88GThKJrQQMP894UVwdJ9Mrm6oBcdtRG9R9Cbzotbu3t98brrRwsWDddQ8nRQWFADv9Nzjfcj9887",
  "key44": "3Nz6yWihSUZ9NTM9qrG8zjdfuVdLhWKMgYZGuY3L2Axt18jvYfSNx6hiQZvxoFWsFmhe99hJmitTkLULo6yWxT6A",
  "key45": "2NZp9bNA1n85YT9UYJF6dAfmZpNLW7am7M4jaENESNCyYKpdebeMBe123EL9MxWMnMttHvYZRXmggYeNi1Pummhw",
  "key46": "3RAv7bcNydkMkG6TJbo43oYDaoQNQ4mvkRp5Cy9kth4jaZMdu8uiEWSASQwzCtU2wa1FP34uHgVoSXiMJ1kr2akz",
  "key47": "457ZQMHLcNGgwMbm3iJwXjVKmXAFCVQvAed9xz5234UDz68KLUe5CjywVPcSaH19NvEkpAtS7szwxFNH5t4iGRhM",
  "key48": "5AnmvXrhwRCizhoUBq61M8EZHoeLgchGWfGJx7Qf9dC5vszRZ3w4u4RxGnGx2uvFhKDLCw1BCmGHsX2XCNVQNqGs",
  "key49": "itz2DuPHsrFpN6yVBVgP35GfZLDPLuhZyQqSrwsM2EDAEcXZx7raRazdBiM7mEMr72DJfpiWzC8z6Fy2G3YjDbW"
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
