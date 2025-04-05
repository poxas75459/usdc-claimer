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
    "4HSRiph8XuvziG4HefRmo4Yhzc8MFjv1pvdNUEstyVJFysFVnt6zuaDBvowbk7a6E5Ppsbs9fpcYCoW1k5PD18ik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cu5MgciSGaSh7wn7VBuTwfMKSqEintv59G1d9vMpQGT7ZncjRmyWt3dZvpxNrpvKnZH2TpWhv9wejpeDqp1oZcg",
  "key1": "3CpEGCLioU1RrT8gGmrVXPeUPR3xS6NQhFDcdMxRbPXAgivZrYo38erhZSPT7UX9nWuSisWbf47QhxMk7r4nKFzT",
  "key2": "VAcMdiyAzDpYyxnQ3G7CnfgZDkc4Ad3Yg8ady6gpzd5mEJGAuUNi4qzzkGeGusRoAxYHC2udZmNEskCSPDncbwC",
  "key3": "49G1WzUcg9t1pr8nZbMTZMr3BbQ4qix67ZtbPH46RXatdnwia7Bt4ovU8oaSAjg5QinzA9dcEekA9JXTYcyMidxt",
  "key4": "4AFfyRUPgLSaFPSXsaiZuGgVT4yHQ7T4H2Uqvcf9zs2JD3upKxpEWUsKsu3MBfKrM56mnHpDzVCHDn7yXrGev6im",
  "key5": "hsWw8dn1mWuoHCEnazQ6AzX1MXrHU8ECDFJEUsCczgKwQ9cUZ5kQmPd1CRUxeWdsfkKsFKz1n6BigoNPTKpiDkj",
  "key6": "iK4hb4G4e6HvbftrK5N6nMo5K6ocVPQdvKjhBnaQS3u4zrZ4FZphDxmDXkkUozkzp4oTr9ercZ6poPjZU8kbK2J",
  "key7": "5gnrF7wu1siGVnVhTU2j4jnffihJvNYD5qprPTuZRhYDosjFWX69SxR1z5etm3o8jaaZMA9JLcvr8YcYN2Y7CeSX",
  "key8": "4hGfvA5h6F1khanPBabfWf5wJARZQkpVKC34z3tYchsBGBXhGJjwHZaFWy9gtkeMJvmGpLGuBDC4fXi2tzUBXpm2",
  "key9": "5zYAc9gkUu8wzTPkQgxTk9U3RZTvCZabdzTZaWrurzVfR4XV4dxk2k3LpK9xBzW1pY4x5fLRJJMai1LRbXa8LpH6",
  "key10": "5jFfKr8iEjLPqJdswf2C6AS7iFmSXLtm3kNNVcG7tjeYNUMqvxR1M6CsMoXaAXK9hmcPtdsoaTu6ZQK3fFUAh4rq",
  "key11": "R5uzexvTcpi3yyMFZwm2KqVksEc76sLdaZtFin3UkbKj5tSuQSiB7v2B7ZuopdeT66tHU7EA5HRRTkh5F1s3MUD",
  "key12": "3n5hGnCVJNyn336cVBqsbWXDvRAWANWa6thZF3XGM24siMVNjjMpcBvXYnEVzRLkHTvqdGkNmW3DhT5fczcuion9",
  "key13": "5Hfd6vC3syEV5KSpNxYzmW6XyUjL4C81o6qsYvPsjMfVoLAtKrqZ8stHBXBYRov4rDabxbWwYveuicXJM1FpnVnp",
  "key14": "4hmvvcXxMGkKHgyFppVpQ7TY8Mmkvf1GLXJLcX89SY9vZi5weys8FEps6paK1NTBfeZUgsExQQVmEtun98XYShfi",
  "key15": "28m8dfDD7j3koN3EV9zQRpAhnQ3LP7QGbsNWg9JZZDvYFgoJ4uBjuSmU66nED4AycRVbCvu6FidjyHZxLe1iyA7S",
  "key16": "FxntURpYUbjvjSssaqhvRMhuJGAZCLoqtTPNNQaG1bhxvFGHSyNL3jnJsy1zfgmVfKwgMGBwfjyNCMz63amkodg",
  "key17": "35ST8UdCcLwStrvn3So4WefnPdGaju2UfK3jsgiioEgKiR68H4cTpK1NCdQEVLqnqBUfsvNKMoncQSEgfYiz7f65",
  "key18": "2dfYNcx7TDJ7CsFxuZ4ghqwzdiwqGGrKXncvw5HXWGGPYaV3LgrF2YHkgBizFEM1SgxUCkstYAS3g5ch62mPL36s",
  "key19": "4QLStFTC6M6KuYoPXvrTnPRfZ7q3BULqwWJEdwua33vMd7SDNHMhQFTL1SDusmzXBWHhKW5WDkCEk2Kr6CzsDNuB",
  "key20": "3mFtfGyxWrCzpgb9qb2HPBTdzY8UML74eicBMkroPNX2SowwEXwQQXmvt7poxo4YpmtyLppddaB147AyVZS3hQMw",
  "key21": "4gyvk6GSerNRkDbGqjF7Xqm9K8M6NbSPLTtvx3x1CrryHBPYcmrieQyJctrNULXT6zpUaSuWVb9xLuyXXDW9Wk8b",
  "key22": "39W7TYrbiWaxL2E4tGW7R3DSP7N15easwPmDo6PUeFFpm9qDvTuWkAgnagodRFEzuDp6y6Swox1Dx3EEjBBQbMdR",
  "key23": "34tGiG1PPxMzDkgmYaPtYjk4afbCV8RycmfiDU98uSHEEBcTphLhmqNW7RwccZpC6dFUx5SSrCrusCrQVW4nCQX1",
  "key24": "S4wvfGieNEDYbVaozFJci3MxMMADtNkDUTbjpNxkosnfHcmxJKeL3PX9nzssi727cPtYFwEiNeS8UfshioCKuGJ",
  "key25": "GUxrpgSugcn9Qufcdo5ugfBem4To9UWoC53SKkCJQK3o3T9Q4iBtSpxPvg8sps21qStm1npaHf2KeZGFKtBFZeg",
  "key26": "4whfM4ZxoAwUsSJPR4CoNFEb9j1smi1AC8UvKoP9McnXyTbgsT8w8y9TABDP821ToV3M5kJJzHxjZMAhWyWXsYra",
  "key27": "4Ly5J9JFShKEMwHQYncguL2Lb1WVcGjP67tAQpPPCjkuuXFk5DNR3fr4VNBJDpb7Q7dZvQ8Di4NQq3qTdvQ2rLxD",
  "key28": "4sEejarjsu8vnJrHvCEBtAtgVRF8CAgnm6mUiiNbeVXNELTxEwDLRysHUzMH5SXCvmpANLKjkSqK6DLDLYR4UPMz",
  "key29": "31aKGGUTEp4quL1U3AF5MHqdB1278qfeWM1NYeFjJVzP4PuN6yRBB5wmFyK3ADxgeiu8fgZzTrXEeQ7o18SysaUW",
  "key30": "63afyF7A3zFkcMCUT7ex5rMTA6xYk9FXqzCfaMrkPPdPa54DbMqrnkgrobNsusJciU7A662AudpTGsaKvEkub4ou",
  "key31": "5GYaPYtFBc1BRTW1HTfra9qUXJfNiKQDn7QQ6f8xzVwoA3KHVTGK6SxcQ3oHMKow6EnJUUnhY1P6mKAhtN4wbd4a",
  "key32": "5yPrAJveik6bYy3woHqiAsawDLQ46LiMLJxD1ukrnfPkRwqUUh9msrH5YvJDchxbMrtCsVjf7cBuG4D7rAVDoE9S",
  "key33": "2a4GezPJtaa4k8Y4DE37V35TN37w2hfTe2ucJVET8GLtiqF4Bgys5A36ZH6eCUieDTMuWArsmZxnY6AJmCTxCgYQ",
  "key34": "3BZKL53dA7WCbd5tYpFC2mPb11JY743Suvfa4VoPuR5mADJhAS9bW59FxFPZ2znyXVRAz3Tbfvc4qBWYFYTkDtgf",
  "key35": "29WbQQcVe5U68FoWE8T7tx7KzPYKwQqiumHwtCmisvnvQ3ar7Z4iaPQftXUJKXaGs4rtkxWQf84qDRHqkWXLGnFG",
  "key36": "5baxtNUGQ4WX7BVG6pFiFq4hA16THYfQNGQzUrhNLJNDNy7MywukUvLAqujmR2SG98gaMYU5QaFtGkKHfcVtKox3",
  "key37": "543aycNFjK2jpwVzQJeEYzLH6uMCvS59TqG53AKcQGW3EL4SNmkszr9Ak2bzdYY6qJedcHbYRAnBhP1mtuEkY2HV",
  "key38": "pNDbsEwRAevn7JDF6tNQJFn3rrc4cBpv4Ta5VeWQ8VjPzRxNpaiLjbzjp5xPjjajLkMUAz7M1nCuKWqDSZhno5S",
  "key39": "3xFRSjp6V9nk37xscPAP7UwRxHrupkLB4nvUC4Y1d1SXCA1LrBWwUuKuG8r3NmdokvbyPdsJczXPKivPZMLGVq4J",
  "key40": "4aftMuEgYQq5asXrwfCCYPwEAqRELha8KF1HapkrRuC9Ls1fqx687KoXdgct8ZKc83YAc3uEdV69ZxovAMvoicJd",
  "key41": "2HKRrM2QSbUB6w3LXaRtm4MoPJVxpWWGvgF3x1SMBjXrCZF9sEjXmVBX8c3QSpvm7DBoDaitKpaEjbexjFiPixK2",
  "key42": "2iJ7D7uoxCg13rD78ZWPEi3Tm9XTSYcXs43FcX4zAHa94WoGM657JKHQVfcqYc1wdeiZRENX7WqY7MDZ1LozczLn",
  "key43": "CG8yLwim8ZJvwJGVBsdTDaHB2Gd4kJaMKPR4oKXMjXtbdFoPYGJhKPfK8szSQwe5j7ubQj3EgCAC4bxmzeuGUwr",
  "key44": "4FcELLSWueuEr1Vc6oHaiSqwanBbLiP4JVicg35XZm9HubZKnj8a44PtU5CGvGABfkQYFNp5X2vaMnYvbZ8MtQ69",
  "key45": "2C8wcHXKzgr5VfKpTqzf3BYQoHNKfKs5Hu4gTgvZfNfVSwmdqK8KtZyP11RwtenM8UQ9T73QgXjte4PqA8qkfMZq",
  "key46": "2o7fsXt8aUcLRehHpPbRbWgt1DJF7V6khiZFJK2DVSuHKEy6i9JUD4WyiynPfU4w6msd3ggzJzAiSYonUHqjJSJi",
  "key47": "2NXris482MHaTr9swKNFNo2kXURGj3SeugH8bEPt6TdyjHUMJzzHjWFnSJL1nCnA2rQ46VV9DZVjD4cTU9BBX7Ch",
  "key48": "4bHLK84iCcbZpzL3LrM6NFMCV3mWs9hXKug7qcHxQUZcDBDxS7XTPVtrTWvhyshWMd5JXNocdXBFNenFGYLTk6k8",
  "key49": "eLZ55yd1tDTHuNupptDtPxtjQPdyXzBf7ENXgFduPLdb61rtaWWyZfECmuZYTcD8rK29XK7DYWM1hVxc1LsajKw"
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
