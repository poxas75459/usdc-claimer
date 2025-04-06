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
    "4j7MqHmLKT8iVCyFJZCDyCYDsnuw4ETRccQ2w42gXc6kzWnMk7WWs6gedAGyttxdtk5brK6NvqNPvscASKnFEJmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QV3gEH1akJq781dCAgcTSrjXLX1bYeA6REuksBB86bNbM3aX6Wc3qe8VJMx3dji4Rxhc5zLbgzhEvRfHkchTAPr",
  "key1": "bvwfW9WKcofPdRE48TqniVzA1cUbkafv67oGQu1wtuitc35c2zmuqkeYLjnzHg6pNuYqYUrzoWWn3QNJRqUaiSc",
  "key2": "5ufwycSkzDJAsLfnLaKGXtwv1cwyLkXc9tBFW2WSMKfXmbEhw5AaN6zREqSK5WX8FpC7P7UrPpoBiUtzfcVXRiJf",
  "key3": "QqeDCmjNSuevuEuJJCUgs5x3hBPh8CdZdCeXR4zYXEMKAayDLFRcGgFuXNNbhRiDuSXxAET8xWuheDQRv9fhmks",
  "key4": "2yzu9KSfHX3f8r98Y5UNnyG4q3sQnExFTHRXwKEJMKMAf7VH8hiGbhVrnWoC2iGndjQBBZmasB75uXfeBxynvL24",
  "key5": "3Jw7ACVS6hvN4wArxa4y7gmpn2wnZaqjAjCDAer3SfZsLz3zLRMmT995ANnPkX9w4Cw6SVgcavtHQfipX9uT77WE",
  "key6": "VCexgj5kQa6eB2Ae5Amxa7pyAUXCaGdr9Lf5FksGbWkdnapCpw5m7DBVwa4c5BkeNCxTriuZ2yn1Te2VoyZoTB9",
  "key7": "3soteyGGrHUH5vrXe372Ri3kJBgrjDT5ZopHw7fgsLuJ51AKLKZfXyo7wgHSq6z6x1Sc8jQx4g2J9EDW7eF1Cxjm",
  "key8": "5RMhwQbyvQGsiUSFVwxM9LNPPCwiCcmgWMRgEqdHaik7eS8zG5hiuARnET6qXCiX8PMUxGqbG9FXRmWBjvynEmpa",
  "key9": "4NbcCsza45SaR4E1vf4JEyXiat4789zBZxPy3fh6FYGwwgUwrXh7nbAcoqAuVq4LRR6m856MeVaRMFmf5QX81cJx",
  "key10": "35cUK45RguJjWxDnWkfR9rs859EKTvjsv3BtKPtbmzRnDmgZ1eaaMNDZxCkTjfyw1XnHU58nrw8uKcdLScfTV1d2",
  "key11": "33s2FH2CRypQT77ebS9MfKQ1Dtd5R95GrnnxoFJ7ags65NysU1gTXd3HAWTXy985SecnvfaKvjeTXwJAsZwLeNXt",
  "key12": "3piAmKdDeKtkmxxVjcAUGmfKHxwGcAKzLcMEBqUB94Vv4zcr2rXKtSqacqm2WNYRXWxEqDFfnwiB78jHfMTvniHT",
  "key13": "2uKiC8V4my9sq4nGUpjG1fR8xCTc2JQEWrCDnw8CzUSVzBhnhfBfkvyMFZMCNzLUTycis4P22V3LsTJJsMeBuuWT",
  "key14": "5KxvhXY9QDGXDjz8RFm1zm9PUipn5DagQJpNu2ZepponB6TbeJR7ffkU7mVxeCf2gFgGGqNN2fPSuskVWNLd5PuA",
  "key15": "2oZpZ9iMmWxGpnHzYUs7ASyVYi3sBNdqmpRe1NHdGvNBtxccnECEiVxgr2T1YKc2StLY768Hjzq1xstbkETEtvUN",
  "key16": "47cHHo5AMriJ8TzEGCkwHiQuQ1SBydS9YoXFXP8xw1Zu7ZAK9cMxpatwFXBWFYZkHLAaHkbNuTJUDoX3uMPH1sJY",
  "key17": "CMMSaBZbD75uYzLRkUjKr9STwsDMVvnqkRqN31v2TQFG6gheSGziguExDttoENfWsqr5rbYwUbFV2cpXuhQMxpZ",
  "key18": "rAipLUBWbpFKkiHimC7HJBSTRLAnCsedYtEJA1g8kxzmcdeEKdvSfanem8cQ3ZVVB9yrVwRiMyeCS6KGLa4xaQq",
  "key19": "3TvERMDQDNNiFjeTpGp8hop3QFWgGF3FiiHR2s4SAQPeovQUk3Aw8Tzc5oEC8YrKCYTPqd2hhJXywvg15wq9fFvD",
  "key20": "4S76pXxfNB47nvH5QjH4SUQ6RLAmdvhERByXEdzRLUvQ6EJVJ4ghMSh8HLkHrj5miQDq4qKPP55bztQox6PtNAkw",
  "key21": "2zKiDAtQxPxrijzS4zLLAksxKiiD8gMM8AKC2J4csXv6az3SS1SRvwEvyL9ZTJwTMLtEeuAmqa91TkgwHcT9U6Ky",
  "key22": "3Uup593J9VxtHWM2vdvQmYcvwtu6r8KuRuM3Qs65Lzhbgk4gJ7AFdmFpPBMZLhEfSxiAjbVqrMoxjAcayk5pE9pk",
  "key23": "3cfYSEtEvBBU2giQdF5buWGu5KBQi8Syik9QDRbxP1rQTihSPiBYDdZMNwRKcjdX1N87M8KvVvcWjPAAMGYDSUvM",
  "key24": "4WxLPW13ACc7o2d6ukwwYbNFgmXgUXanFfbeGb3Had9a6MCUREtQtwVRmGrvy54dD3pgkurGKoWyqSwnhqEJUV2E",
  "key25": "3VNrvNxqPL3SU2hUNkcagE4BNJNUaCybHdY9qPmuTtHY94ADsCMLXfvhXU2jupbg9nj7b1PLyo7QjaoFYjB5AfDc",
  "key26": "2w6AK8McbXK8tRk9DmwTjpZVpVC5EY4HAoVCQZkxfN2YQJg6YRRHbJmbgeMwGxrdTzdfLAGFxA7tHCttDzkSWVQp",
  "key27": "LeAdGJ1FQ4YmtK9jnGEo96X34ghdc493zyTJjXqYwX5UoCuyrTZ85izuJPVs3PFKNptrWXNj3aJYXpmZJtvhiWT",
  "key28": "5wrAT99jzWRAGTK6YSADUdgraLqjFKjp1daxA5EzKN4Z568LfWrDGLrR7DvL36cjUMV3pjYKzkbqWgBvzgmpvM7v",
  "key29": "36EBu1cVnU5wxRe9FAyfHqBpQCHTTiSEgUfShtanNapxM7ZaTSqNgxW6ChYQpepMUwu7JRw2AaBKBi1zMPkomU8s",
  "key30": "zwTcHXUAyLjpgBCVrEoSwkd1933kfSdtMgJ5yuUx1YLuxqktgCc6TuWLxeuVJhtnCrkFGH8Ce5zsi2D2dW9NVTo",
  "key31": "2zh87H2oeqsrdRarZDkdXXCgWEdMFa6Aih8TNiJvJyCAmu17izzDnUEjtydLpvUgrng3dZkdTjejf3wGJTsJB7te",
  "key32": "Biq7Yu7N4ZhNe42JMfDTZvhMTQcQLoZTtvBS7JnB5M9vxNebFnRWH54cDQJof5v6U7cLvDimxD1FsqsAS825E1A",
  "key33": "3VcXnS9Ny3V8pTZRs3jPThyRHpvGz2K7sFb42xVhm6TTxahg5Bp8cD5NaCwAiBsSVikdJzb4DkuJs7p8gB1DgoYF",
  "key34": "5ZthSTTfbxNfqNc8N9GxJ3h2xBeqq7gpkaY9uCSxBQavFrYsq6v99YwZy4prakqkWxrCg8LciDA5bNbfdkAJ2UgG",
  "key35": "2HXbh5bu13ei1g444baw52LX2ArTD7vsJB6HqyMC9ZVP3j9Q7YvqKAoTk3mPvY6eUxLV7f5KjAxKfooNYPsJnULm",
  "key36": "5d4PBfve7d9SZQP4DpGdvit8dG8W9yfiHNa5optYZXB6qXt3KgH52JQDsfMGwoR2QJUVMCCkCjqKYzc7XWgg7J9"
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
