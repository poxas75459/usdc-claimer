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
    "28Exq4f9UCteHmXD1S6hhAwGRPvwX12Yt1oW372S7E1FdA4QHGGowwhVFeeJa3HW6D9gseewRfxR5sirBjeJGYAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KwS3ad2L8rqNAkx5DnXgjc99AsSC8xKCTG5iaCt9QmVPtT5mK1KScWggsgyxgkykJsrU7qE8ctuZzxzFYVvyT5j",
  "key1": "5n2UDYara6kC76JTcXtmghQKH25CU5BM6J9hhHGrpCWYw9RVniQVKkPCSaV3iLc2DjNJSiFYyu4FctGNfU5awdCH",
  "key2": "3HwCgwWtiBZCnsVUT9FQDkiDFeBnsY6zu1YLUjnfuSzMYtuQYSVPZQFGqJDj8pveLwzmXrJmCDU6zEKg3Zq5Br3E",
  "key3": "3D3TP3tg5Q5DTYkbqTqGUZNicwqXz7mp8hTtFsR3t9pf6RekuWp7UG8Jtypi2zUf17rRSCgN6m9Qhp3NaTKbh5hd",
  "key4": "3NQLcvUzsof89jShYjED4AgJWcXbJfBvxk8nzg3rdLxZDJCjg2LwctZN1w4ijNrgNAmDZYvMTbenMrjwoU8asxyh",
  "key5": "4ZBsQXt5h1x92Wng8u7SaAznnNua33eA3bqexYZKp7Y88gvSWnkXqnqf45sFPDRcDY1nMzyqk6pBSpKoyVBcZ9rq",
  "key6": "3gnEdCFr9HS4TLUUpKAXRNGPsPMSWiBbaWxSW8ZByFxTcneV8tGt5uwLUGABDkpYzBUfNT2MiBdSK6b6rLd63Uqe",
  "key7": "4PpGMS6WCAmQVpHesj1kW2kDV56UBtdnCD6uTPr48fKv5ykk5vh9csia2ajNtcYjjGasqA5wpWWRypG1uzANd3yL",
  "key8": "478nAc1r8R8WrjUDhxHELhYTAhgTRUVu2nAJvC49o1Q8BNiFocxioZRyGHJL978tA3YawTmgUtnw7G6BbQYkh26m",
  "key9": "5aJfNzTRusVo4qPzV69PBt1DzXAsovVmTaaWqWXmDh6QpZwnnRNQNhfFnNuK2y7QQ7y7k5ACVuD4u91GWikxehuH",
  "key10": "26sn6hsGRa4iQiobJGZtKvcqfTz44GvQaL1QWV1Fh63nTn13caze7L2VDCE1uDiHEPTitQjYR3Am8jBxP6J7pKSF",
  "key11": "2ai2UXRWpqcLCh3qtZiszxsHs3y7WmEF1K1WbQ5Rwo8v6ALj99UjjrSS1x5CxFHHXS5Zz1n3ktfnvGWMNWbfeFfw",
  "key12": "2PfiqK61RsXarvEbuQFjZbJXePYuoFE46bQvvBiVRAbJ3gyoAG5YuRJipMRor9cWmTeda7B6KXs6KDe6cjBSuFES",
  "key13": "aHpUT3KZdKcis7FHFeNR3Nnbmv8Udk8c869FvjVCHCvHRz7rHqR7kbtiBh36RJnPMJnQ3av3AWp8kknEcQ6qtDU",
  "key14": "56XLSkgCck6xFFy89EcV8eQ1EmXPjaHAQ6uvY7rLtY13FG4nJSTKYcstd2YrcMf2Qrsij7RkxB7NdS8p11EAZ8Uu",
  "key15": "3MaVhvxqxK9Uriir6ewUaRhAjNYvXvj8GCyLFYP1PuTdUBaMKiUMNPR8M4o9YormS6UWLzXUUemmycgndVU4Ax5j",
  "key16": "57Tzo3NA6L93RLV1G6FGrYYyMuMms7FSoYKBBtJ31BsXjNAYo1oc5nWJMY9PMothQM2HYVpoobSdATQgCtzNCPXX",
  "key17": "5J47sayefFE1opSaQ9Qps22HnKpHxABRa6r9CRc63o9vqsvrf4nXsbt6t3Wzdya1Rscwbm5QyTemwFaW7PPBEcF1",
  "key18": "vUDKff2uasV6Y4nPCPKS2PSEz7qr6VAdak2FhqzE6z3Pp7VrfQSmM2BVJodcMtPd3MSH88UPECxp3XNwtRwRuDr",
  "key19": "4yYaYV324u6jHU1dUfRpx3vnzTKgpJjZtE3tgr8hjUszkV8gDPVdgnZ8sKb1rWa3HhiCMJnBKvt4xurTgu8reDrN",
  "key20": "3SZXpjs2EzsoF6DRttwvtfJX5kMk79NaPMcsobK4et4Dtk2RbMrwa5rCUtP1eNmK1rnCJh7ANno5tYcpRhw2gh59",
  "key21": "43BUa4HRj74gPrxM9HF5STN6tAp4qCUYdA1BEhUb1zXRmfhYYoTZcDtwu6wRS955AhLu9PgEJfFbS2qHG98LRpBw",
  "key22": "3AX3b23VQJpZ7gPFaHevCK8uqkaRZwo8nYQdm3toFzYGLPob7u5GWWuUzk1mUVfhci4dukN3Td3KHKyN7p49h85T",
  "key23": "22jiPFXik9jvaMpbNdax7sYqQrfdx3sM7K1UpmiWNDn8D3bWTzcgtMF2S48s4L7c6wDNW2wXMAR58XTy1JFLJSqu",
  "key24": "7B9owK8B59gg3G2oYDeCnRxXjFn8rcpcHcbL9vZaknUkHzMrdzomK7pbkvzCBVKEWY6JQ4iF1yyAg7rcQi7Mxge",
  "key25": "5DHSLrxEWhLGNLhx3U5jDy6Ntjan8GgU4sbEJ43TPq7vSnq4CtBVud7CKaiHjPiPdGW3fd7hBWj9tSozHbbtoxFs",
  "key26": "66uy1hV8xHxLwmvBDyLAS732E3D3DuvDeKBRPQAwkZiprBTwxP3KjEjX1G5a5cTapSkEe4qFgRT7JKiWLgsZyw4y",
  "key27": "n7VQKU8Nd3E89J4Loqs22ZXSGqhn5vyUgPnADF7DHubqWMhgczAGwAYRRuBie2MpUszbuf5RVgvVxtqgtc8TfyD",
  "key28": "3n3WqSVQM49Kkd7HuBSPNXAcWDp6rB56hBtoidBkJbzuZr4ewBd58hWufN4HiFw2mMZwCs2i38QRTiQFmgr6CQeD",
  "key29": "mrmMSFwno54UxzwDKn3MGhnQWTNLRfirsfmCAMZG8sVCufUGq5SDXvZDMWg5duZpgRWsMrQze2Yp7Nbd4r5SEpj",
  "key30": "2M5KSF7kFSVghUE3wtvCCVy3vwaj57Y2Rbyhht4LxSN5ijDBE8CBSHMY5gVRyd5BZUGzifzFM7fk6nhFpKJZZCfr",
  "key31": "3hMc54mtdbBa6uTvTshSZQ11FTJTYqQUA71Aq8UCYkXVZgU4747uHY9EVMdnNLKYzUdd1N9b3uNNhWvYW1tWY8Jx",
  "key32": "54fg8hDBFnfgs4vVxxX4MXc7bFn4aFMidJUMJpadBdo8zcCkRumCq2BhbkZ2ihuA3nXJckw1PJ3ysZdE2evc1dfZ",
  "key33": "5LBg2TUbPB4Lb7crMV394wYD9JqwqyePR2rGyJkf2EkM6hTajeyN6zmrEScaJMY8JnpaYvYW3YNp9HydhxJ8Ljms",
  "key34": "MvDrSS3HaqVyZWgY8pDaXNixuYYRfNjQ2BaG5zqjf69gxFG4DE7iJpsTbfnZer5AKtqvgrn5J2n38XvQ2jkKuac",
  "key35": "21cR1ijHFADEZdgFpN3nigmXZJPkiZhWBsJSZPWoFLNu45hYCZV3Bcr1C34raemg4bnfquCHL38zDJfLFjEzT8Mb",
  "key36": "3t4735zQoptB75YpTaYKdf3KMNiQ6kPB8o4uNvYJKUza2jHZSPH3HFbMVwgTaD6JujVpvc81YQzXBCQjeFi28b2D",
  "key37": "5SrZkS4dTaJARai7EedFKKGcuX9ce43Cdp631xZKb35Wsm6VJEyKzq6niRg3fWLv1QkgnGVqPUBWVu2SSygxKAdU",
  "key38": "8cZPmZztJVbWipeXEjwVxQJ1a2GE5gQMHqaCMLBQBhbGNf6jh2kftDaWxLQ3aGYrKFnKfc81Af3VMoUXEqDfJhi",
  "key39": "2pGMgcCdWhSsPr3jKVXYfWxrxmcWdxyEQCR4B8KnUrD9c8Fm2x2C2bYxAzqwAhCHYnp3B6CxiNhDY9G3Ctnnfzc8",
  "key40": "4o8kcrB8LXZpuWut6KWNE8dmYFn2wgGs86fiZiKRSBJzJRjzog4mUmEFZZCz5BZfJvtFffVpGCYnQndw7SDUWfZ5",
  "key41": "3NaWyAtJXNRqmgt3TS1AGmHELcaMgM8fAfucWjPU8CSVbRXb3fVR5WYJB8z9WfJQKXMxmyFTH1prgfvXjKPw6NpF",
  "key42": "7s1C1fEg4C3ykvZ3qwqjNu9uw1KLy5Xh9b2ykiXJthKXE7ZcpGtc8p4F14PsQ29ezWWBER1pybWJgeFZAjSCfPj",
  "key43": "4V46nA6WSxFSww1WYfEHhiJNSwYAm6f16Z4QsQueon9YH4sxCMxG8LEtE36dZ8pu1M1bwarYZSwf2h5tQgp2rFmP",
  "key44": "2WNjWQTK9LkexG9S7cdGPiyXks6DN5eUFJfmdEHCshZN6k3Kw72fWUuhZg3zNuS41vveYJ1sQnXvi5UxccE4UFM",
  "key45": "upuhQgfXdBupkFQNyhbG2pTGFpB2NWzTKZ4GHsBY1bTkF8F8uWgXAym6gWxug9qhnnWYkCJTXZds58zqm15qc6m",
  "key46": "4pNyPNDmTSF4g648J8D8Js9jE4DxhWA9Myt8jWwbPpsAc2mrju7nHhEonn8Q3SHAKvtQTjvB3Rv1RHxRpovgzrLZ",
  "key47": "4h4iABp9Ekeb4BiLoyxxEg71EqsQoquCr8tbv1touaxcHGbSaJ2V39RXqp6p88NhyHdD3N86K6uX4VMuwGQVLw9k",
  "key48": "2K9t9Hbkpr9xnu8wZD7rnmCFLWCGGbpBzLex3NrLUYqUjbanG1WHVVUevhWvXsm5BU7iQU2ugDJmPER1qfKaVx8R",
  "key49": "5DRtSHHaj8vTBsa5MtPcF43kmqgrjEEAdEJo3YwDTV6iTzo964qV5RGcv5TrzFxE2YpoGUitCz9S8WChuuAvbCyf"
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
