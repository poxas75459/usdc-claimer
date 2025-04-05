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
    "33dmyP8mjrPGgUpHQECtgg9QCSaPSCL9d8aV7kP4WmRBtQsVx3WCtEA8xCyWc9G1EdJoSao7zpS17JrM6zYqt2y6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VPYm32XTWULZgTzeuMRDZQjtTZd4SohX6yv54UKmEsww3vYF1rWxNR7yShUqGz4y3xkysoP5duSNQzT3XwSuCyM",
  "key1": "2rAo9vmEtxrx8kgDze1FoxsUpBYeUKAuc4tAbHhW6jEfTSFi5UU9yRTJJpQKfY4vL9b2NWfKYyXPUjdS1ZS7tnXX",
  "key2": "51Zc4tVqowKXC2wXpaLMcZzXyYKAKmnkYHJuvtNsoDatwN6VMbzjLUVDD6JDqx3jBc1eRDAZJsQusLwtvVeuEJ42",
  "key3": "4Tsdk8TjJC28Qe7RiygdX9tYXQ5ayxmSnkMLGDeJvXjbhe3SJoNbuXPSynyM24LcLbzXT1c73agDbib2QxXapVkX",
  "key4": "4NmF9vafZiC3wWxHNucmfwzEsRqeXycGJLqbALbKpffhPfkdhmCb5qxbRP8exqHnoLMbYBs9MSwUXJG7zbuHjtpd",
  "key5": "4Wk4fxEpDbzXjWFNpwbqvEM1ew6kosk8S4xULaGY3eVgiqGySfhqjcbTTeCASB3kbuybECj4mx8c9Ceut9BBi5gY",
  "key6": "2tZea7pa5DnEYUAxGmNgUHsD7owVZkJctuHJzcNvkW6NiTnjF5ujMas4HcZnPU7B5CHGWB5zcc83932zdzahTuWQ",
  "key7": "3vwKBiLijPJY34sNcsagW9yCFivj72Xom9RmQxLEbwJJebmAW58roiSUyHGJsJ3eyK8gL6rNb3hvsaPA74Me1y4F",
  "key8": "LyRkPV52Ws7gtDkWDSEqU8mHpzCrgo7tiWgqe9EaeZ4QcctG5DnP7sUYFv1m1MyDBEa2Dk8a4yAdmmxFcpxgXHr",
  "key9": "2eyiBx6TJ7BDPXJz3zQc1xPJMuTJvJivCqqNScNZhRC8zv8VwtgtQN1JjFbXvu5FBTFPJ81RHqNjGr56ncxiWayU",
  "key10": "2XUdKbhA3NVsMNFGGT7N28m9DXuCxuqsiEEktHGXwxe19FbZ41Kb73xgARgYtuiYp4chNmQRVi2gvbUULXPq7nNc",
  "key11": "a5rtsTuhcwTakyycttRfgMvM25hpyN9NNBApvW7sHK12ftYzrJFYwm7PPBKA2uFv9BiA7Kjw8qdRG9pALd8ebSR",
  "key12": "3E9zSkvPqpL1nEhvaJwsKeuivR9wTRwUWHSJSvA6fgsaVw5c4bGvunsVftcJXPWmmpxgnEv5kqQ4W3QciDZxfa23",
  "key13": "3RJJbx7mWjBijVDHNmt6xf1WvcJSqDLmgGXkoCKReDtDdAKmhr8ArLcmfvTJqP6krY5DJSJFgNHrLtNhxJBBY28t",
  "key14": "5zsBJBu1KkPLnLiqs35C4DpfDHpvEDZqVzN2LhDBKgCZqzxa84XQni3XqsP6vqST7sjBF3xeAyy7diwqs7K3wdYm",
  "key15": "2EVB5zrsqyaok5g4yomXrJjLkkRPiUMT5jBZP1gsUQqcsD1dSmvupJEPsbMsYd7SiRpsfM5EnBbhwD6ZVQjEjwNF",
  "key16": "4kBmFb4DSsSywc9kFkDRaCcnzKVxS2vkCiYB8pYYQdSYUyjyk4G5RWi2kLoaynd6QwSdcW79U7A1cBQwgQmN9cGw",
  "key17": "2mGHQRVe2HLckWsXWUbdu6z7Rs64A2WVV2v1TeHXps9y5Y5BBDdbgCzgs9vtkkcrUsdMJRdpNGYMwXQYA129x56K",
  "key18": "3uXqkPWtTZ2efe3DzMjDejrm4pyi6HhY8Vhe6y7HW6q6po9J7JGT1qsrfqCizErMfBgF5nZyyDLYiL7ux2t9HebC",
  "key19": "2r9EkhJwdAKa1dQeLBRuLhVX6yvdHmvRzxmpBTEexqhYxhNxocZawLJSNbu1jFcB94RnJUNK6fN1Cb3ST2CyZKZY",
  "key20": "4JALcxBL7aDXFFuGeWSwUqrFJsy1J9RzJC9ogZZ6prxCghuhJAE3J6GVgN4Cn5CNmeSdvrpaSQ7gonbzo2nzSLzb",
  "key21": "3MAW1xpr4FYogremvBE2boN8NF8Lxq7Vv6yh5U7bv8GGCj2PrAekudr2yQ5PeYW1axaXFrQ9Fw1Zcj18cb6K4UAq",
  "key22": "3XN58aa4ANs2Fc9cGUX5DWp3NfJEtY7bVb4X51rv5f5eW3qqfvf7c2dUxKuND9uanBh7p3dn2afdaTtiKt1azreU",
  "key23": "3fyfnfR58hob9aTmQ7SPC9mEKoGs1q8T2DuW9xEnY9kSKPCbEWrn3dGduqK1KsfN7Yv2TfALh8c6h4YXgx51jywJ",
  "key24": "R24r7nLTAg35JNcC37dijWvUU2QuRgrw4SXjrxBPjHkxPhm6iicCUBWkVv2GimTAcBo6EpjBHYgK2QAyvUb8ya4",
  "key25": "5ZaKJPzMXZrj6Ef3EatXm5btExMD8YdC4R1VXh4RJcRPyQzH4fXbREmYsdudcSMgHXZq9rL6TfeuzpiSCD9nsqVS",
  "key26": "2madMFoganaY77j4KCbwaNDA6HY2psQeDpyTS8nyrtVAMzaye1KVDHwSJx38ho7KxwFR54xTzvd27BFeSEKXAHzR",
  "key27": "5YCbnbQbEW227XBGG5nDwwFvZ97SeaPvrGaoR9zg9RUisiqWNCBV5ebX3BArj4f7sx4LQaMnxF7od4SoEkiBpo2L",
  "key28": "5YfKsdHc73rG8jvJp1yp11XcKmxcdGdN4YtNvWieTPaLVWqZDTYEhFBz7U3W6NRqCbR1fDfpgMPPK5sXwhg8C8HN",
  "key29": "3sbZy6ME3KxgnF5fdcNP3GxsEnYwcaZ3SxXGD7EENcvMsadmKmZ6kGGuJgA5zi24Yb5VWdM4jDv5oVPpfc7cGfbn",
  "key30": "4a58SF68TbyduaMbcZmGSuQp64EzdX7QJxx7NWZN5zvXjgpx5z7ALCWGZ96sTqvr4zDhHaw1DpVKVjwUtNafAQbo",
  "key31": "3iaEqcq2V7TjMViGgFVGH1GRyRDrYSemSEQKT4vx7TacmDL73DjFvGGkpBD61Y9nqpe8jLzQuP232ywthVSgcq8T",
  "key32": "4sjmfaUd2uAYC1x7pCg71uP6H7MygMMSCwj1oKrfUS8LVnnzWcukcuaxCqrPnaKE5bRPGUAqXMeJyHcpqaznYEBF",
  "key33": "26kUHQTmNfBHAxS7FucW3w5WQ411eAkRhM9ST3j1MUzJqYcjmBqz2ARczkNF6zRD8mgthst31ThsnqpuXphaHBir",
  "key34": "2SVrs2KEmBGqmCywE4rAt75zHWvD8PJPptyMew8dJU3v7hD58YSJBLUx13KUQQ731KX3B5TmuSGw9ChXXUeCqBoQ",
  "key35": "2adfFWG5EYHPdQDddsCYEiYcq39f151Yy5zDZuUASLy6y8u6BEzFfWqJEAue12YWu1bc7A6rVGzpRiKyJ4iUGV3r",
  "key36": "5dqfsAjkHrHhDV8ebzf8MQRXYutiVSmb3tRUNwexxoGYrFin5tkc3wBJExPFHCivtEtRzriFrHeXQci1P6sQYgEP",
  "key37": "2AaXW5nkgR5tNrpapkbFCfDdGgWjRepQrwqs5EV4FB3CHjmmmQqLZ2NwLpzGVwgpG8vQri4ngEUBdPnGfnNazb9r",
  "key38": "398EwCgCUwxk6CmEDYPhz3xisFcZDmc1QvdmvRQfKp4rsB4yn2AuqFg8GkZWt8iNxZPgvUeGSQUSePysS7BNLg65",
  "key39": "dEgmNpezUUGQaVNSqTWqLCpK7KkdoGtUjAo5ogMQp6k8vsJSmsYZpfFoagygWF1V9fjsJxf93hxjDR7h3BGQRL6",
  "key40": "4YEvbcUb8A84KwZFoe1zi7qCJqLqQr2RRbMX8aqXad6L7pwtTHiz26djwg56vXoHw7yMgNfgt3XPDDXL6DNcgmbq",
  "key41": "2SBueEjHKeYQ38NdNtCBsZ28q1gLVBiLfui4FxpjwpQ8tWBuy7KH2XsQ8aWw1uGk6HvpFfdiL4a8goHCy9LiKyna",
  "key42": "4bypF7syki8fZBc4YLEGXf39Cu9tmKEjAgvs67iMBksnymC4ukUh43qv8U6E91WP26Eg8mjiWxdqMjhjmZbYfEFv",
  "key43": "bbdBU9C5wLbBP6Tb1eJhASuzP3XrcLfq1kN34MCLL3dzzNZW3oZNzugHd41ntYDT4sf8YVvCQoVzC5eNXDoowuS",
  "key44": "2hMYPiDfyUb31cvDAs3VWwADyRruSX4Ln9GTuXaH9WK1oTAkRZB3VQdmccg8jUpxRkoghkUrpWKM1KPs575YF7ox",
  "key45": "2U7PkLMDQfh7BY9QP4SxJPhhkvohMNA4vbsrgzDn7wAFDjfrTKVhpGkHoowAPUDfSEva1jwBKMDkxe7jichPPYt5",
  "key46": "3odC9wsjCq9zsqFSfoe2prAhSvy4V6b8C5e6xHUW6smuEbAXDRKssCwZR7fTGnEp8xJEdBk5uJNyC5wozHhTr383"
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
