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
    "2MtWg2ungh8cVbBqCBigA5sTDM5YtEwhe4LBRsRU92bxwHTk6BfbonBj5nWyQtiVwMsqsUuZyQcn1Miu3bbiPXAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m9Dv9m4jZfYrjVBGUxFysDerUFM4ay6wQze7YJWjEvArtdpc3ZazfnpCzYNGh3NiEohxCeRKVZJtNSgQPz7fsaS",
  "key1": "2aG3tSeYeseeq8zmjAT78Lf81RCUDdYu67Ho7svxt6rJzq12wBPkzZ9hZ7rc6UMspkwdrr1DwH4U4kLQcUsmuXpS",
  "key2": "4GMGTJDXsqeQQQFwgiWfZ2jfjFhcN945o6pUFXmDwNXZp9jTgTzd3maVik3m9gHV1Q6qyfTnvzxfmT1dVSE32eY3",
  "key3": "2pfbKZkpmQbChYRmcttBsqHD2ttCoopVMZyZSNbEpcvxfj7yXg2say6g7p2Z1p7k3wHzEfQX4ZXXtCpDjjbedXPq",
  "key4": "5fhjJctJGjdHxcQ9jAELJdSL5pYE1fYRSGoDcERuUUFqRs6RchVo5fU5SrnGo4kB2nko7rzbwmNVWJVdEE1TaPX6",
  "key5": "5FvWLa1noPqDdpGMRMnD8Mjt6JtpsHtXPCNm9yXPC35xMnxmJe6GJvoawQpdv64q3RUujWLV37cSYRbgVnXry1n",
  "key6": "37BQGLNmbuGDcaE8BEmoXBhHnpGqmbhAtTUexK1LSQzEQxRc6UDiXg79cDPxLCkoVZE5VB7AHhXcUUn6F8oMECr1",
  "key7": "3qworagyUWpCBdppeshGUGUwytVXVvhqDP2dFB5zSC7W7fVcGdVgdYTfyxc6QcWXgXiERsnQjcR1ojXx57j49XmA",
  "key8": "4u2KVS8z8pQKgrNBsyPXWAdketnWyNUjxnFLJ6Zggr6xTQCrs24HafBzRn6VxkgZSknpypG4dtneXAdFxmprCRac",
  "key9": "3C7nPMPnTLgTkbFvPMzWZE7K8EqvY2QdK5WoJ735wF1VVRgn7n6Ks9aiLpq5oyCeecJEzFe5wuwJdypEJ9WKb9Vp",
  "key10": "3MQmiCyFhaxZrYU2NMhPy8moDQQvZ1JKPLPnVuo2jTa36ZGGwMe1jHVs8pTDMtD5ByQvtf7pT6dj7GxRtQN8Qks7",
  "key11": "48bhKRXxNwww1nmQVbxDC3nT73G5Rv118iBn7c95N64t7vonSh6ZqaohE2UAVsU99yym3pBcpCjpQytJkvw7aJyD",
  "key12": "4yUsUdDdg6ExH3vZ8ZauGjw3UjU9qDTwtoptwai9icv4FJzHLxLxyPp6LjdjU3ZpP5SWahS2RxyTi2cMrt9Za6tt",
  "key13": "CyLte3FnBhvLqNidvGTrKv1gy4DapfNpkS8QcbqdJA1v8VpvPzzFwXLPC7uBYtohBuPrWboaTWZcqbHzaBLvaMh",
  "key14": "4m8c7QCNUXpsS1ihEuKiXxGwCkwfY62Zi1gBf7KqiuxDwLgFrCZ3JHSHJjabf49vxpTtwMaypyqFsU7KEdEBojRS",
  "key15": "ztiPRHCZsPNx2uP9U1tmMmk2yrXQqCTAjV7F4hiLcQkkr546NTj9VqXTrWEsWBG8i7tVFHckSddCM5fhC42x7ki",
  "key16": "2sH5g4PVcfQYvAjLQh2e4Y72MSNAnHnY53GKreScQuCi6Wea9mgRaphDuu38e4FRykLg5N1Pzb7PyrJ4WSRR4L6z",
  "key17": "4QFpTuRTzA2VrE8W47eMzqa2Vwdu7qa5M6DZH4fdBumzUxMuLfNrrS97pH7eAWDphnruXJsUzP97tk3yn4Lc3g6x",
  "key18": "5YEHija5bVBwhpSHSsbbK93sxvHuB8zPyYPy2nHmeKWYfBDzYMEQaPRwyZiHUxdbKV5u2BPhqBaz92svjvXx2n7K",
  "key19": "4F64GscAqsmhcg7BHoDH2FHPNyw59bS92vb8q3RiDTV6akrJMT27RJq3FH24A7L5rJnSJz3C28Np4oDfuJ4gL3L9",
  "key20": "3qfiJuxj8Br7RXrgt5VtWTQ2txB5Shc9a2oxi4cCEWuD8rYHHGxrgL2x38KRLwr6Xee2iVmJGPYbaHPUDvTkZAVf",
  "key21": "59Zg4ebAaRqkrxMxfX4evgkwBazG5Fp1PKnS1o33CUft62r7dJKHJ4sZ6czoFKBRJut142WvDsdBsAn3KyZfFGsi",
  "key22": "PaB1TzDAYpJBkN6jMTBrmsv6kfpDPdL3RuWF8Jgbxm9uVv2KHVbHz1oDXcjRuEc71MaMLYPx931htPmz1uiQzrF",
  "key23": "54ZrsZzSZemiT8mdNyHmf6y2ssRDQF9xDrG8X6jS9cenKiKmQ4g5Yfc3D6Mi9R531CdDLwYNFw9uz1bFUJpwwSrX",
  "key24": "5yr3MuSYWChZXKQNJZuPZ2TrU6LQt8sZwVYRsQWob8Ng5fjcqnH8kLRheFmzVPgyVQLSWkMUCyMSUK4oYgUfUX3d",
  "key25": "4fv81dKw5AGgNBbXMEEwxqqQJwdARPhSK8VSTtdcfWz57C1WHGW5FugKsQHkJWcHc6Cf1D3S3j48y64cxsEY7Eri",
  "key26": "4UhtdxNp8FLWbYTxRZ28L2VnZwUujkSmcssVJp57kEHK9QXLXhAJ5NShCSWfZ4ZYrBwvcHKPgs17soWJMAeRkja1",
  "key27": "8ASuTcY8xE5jqPnn1SWmxfdrB3BBGBqJ195a8FKQ7jzuFdF6n6EKs1h4xQksKXR62ARMcY3c5ThKebELZMbAB1E",
  "key28": "2MjU32YYzseRKcCDh949uURdTCxqeWmnDWHNJtP9c57fWnpQYwpLKva7LtvEGYnFnKNrujuUD9rm7kqCccy5vUNE",
  "key29": "UN7gNkByHKUEgGKenzrc5AR5UnUiwNNcYkRwxShd8PSqqATiDqNoKEahUvUaZavPyJcmx1T3m2C2BjR3bgonnHY",
  "key30": "5c7N5sLgSptxRtRUYvMrJAseCyE6oaeeYgojFUWW5GcpwU8zoTyLLBn7qi2i7aBNqdW7D6ufbtDb8hYGHpuW69SQ",
  "key31": "4qEnWQmbbgehJQF3pYvjsrXVGESJqggk9SdWuTdimfA7uYzGXFgfus6Cw4qdYncXbySJmf4Kp1i1tChvk6CinrNc",
  "key32": "FAQPpVZ6wWDHxeKf3w85cFJcowksXbxAYx1RmzH4hhmnj3YSZ4fJpUS4zoSeJ1iZELuRcZ2HZP9GybQcAePNHYa",
  "key33": "5QHfNEcEFBwPmPzkTr428dKqemuTjKS2m9FroR65eLsqnMxH1qGenUQhvSNcXmReZ33n1hEMNPcWubGSnvswCkAJ",
  "key34": "26UG7MqwD8ve7tZLKUbpyG25y5f6tRvepxJ5xVQiZ7kNGepVnbPqq1HypGaCcH3Qs9gYEgb6CbqijUSZrMBvyuTo",
  "key35": "2mu9jMnip2kLFCr9q645orjkcG89psyBR7Qd86B2u4CvpZgyrra2fyeTYzmNSFLaSdy9tmHxXbZfZnVVBZMfPeFG"
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
