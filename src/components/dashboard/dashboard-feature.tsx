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
    "58ta4kCjUQPCmKkYHEkcbgdsysV2AWzaQXtHTFFB2wTLdx2ku4MopHNpFKEhRSx5qn3PiskFew3GFYxFXmoNUovy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9us3kVWWg7VEWC2C3aS4LnVtPVHKoURJRXak9ahZqfc9Y2JznNH2DRM2f2jvgkF5dCETtQJoBtE1EfCSzG2iBRV",
  "key1": "5qK7prkNMrkTdMn1sJwVUjVQpwAmvTGZ1o8P9sRtVcBd92DEMhZt1t33qzo3Yk8rffYXudULeB75mAwgKMEJmLGH",
  "key2": "PQX8LoRynMF55HJ68MfVXn5NNGSL3jsaN9qEBNceG4wSczMphEbjD4TWE6efsxbwuNctA6cbhjq17rYs7Z4C8Zr",
  "key3": "3SSBJfcg3DNkrmKsZXpstD7J8Wj82rETjM4yG1Jbd9UgkmkJVJUzPUs6BggmegRXH7yRgcsNMaABaqPTXgarkWer",
  "key4": "5BEFbusgucPYayeUaF3ve7zDDHfvTKnSooHPVXiBrmJ7NdexXnacm6YtXTU39VMnwroXd44oKFmT7wjbjodeo2W3",
  "key5": "3gFxJYAY9eEppaPNWUMgH7CJGf939VhAV3LvFPwFcr2h9SyRdkECnLwV9qgBgSi3kHGYyZ9FwCFTxHBZkrempFew",
  "key6": "2zyuBJnHSr5HtsKxW4FTFGQLi2jefoahKKiH3Yimf9dKFJhynTEG285VSuX6BdA71ZMW5neZRyaKHgqeERAWgWBK",
  "key7": "LxoefV3fHYNn53Qvf3dphMjv3F3AHBT3Zeq1WRhrEw6GAYC1xN8StF6ntxXG1EsvWqWowskMAAXC7hASonqDssK",
  "key8": "3fnLMah3MmcHeEkLmjYVHUbCbiDEPkQbtfmcxeoqSq9JvVZELMRJXjnq1XHuHfic9Uxc26ZEhVjdJQxtUqqKtNg8",
  "key9": "3Dj7UmD9p8CMnYWwZ9rYg8F3Uz3SZTuXvjNu3DXSThTGRQ4L6NeUgwMU1shHMa9kSDmTqfYfRjFniEyKqFckZB4D",
  "key10": "3wks3qwQeHyMGTGEYoPHzGDZQMsZ7dV1JG7hshZF8TS1W3H6DfJyhqtRrFBFkW1ydAmuxRjcHS7wwmuceAQq1Xtv",
  "key11": "23rMf2LevvoMXwsT3W9M4ArBfNjzvuih3hcV2nsiRSxiAzD2zqKd5catXJzuiCo48E8KFgV5CcuxTQ5tX9p2F2ao",
  "key12": "4MdfeD2Br4KRmBdDYoKVKGsWZ1tFYfWNE1Ngzvjba1YNR7v7pBXjtLBUieFocZ1LYD6JM6Sfg4U2y8z9vGjq2RJ",
  "key13": "24XMVP7HUGx5nUZpe9CkPZYV8qQGfUn1o9PimwYawe4fs7kHGbKM5haWJj7jLecfc1mVJM9SWYGLPWxT4U7LU1Kn",
  "key14": "39httfRnwQWg47Vk766D3ev8yt3JfYsWpvB1BH89PzDc9sg2Cvn64MtYoxs7gLan9qR6BbtSA54Sv3yqVBrduvLS",
  "key15": "4yqyjpybJKG8hrm1S5TdVWL6fT63BGjY6ij7JQBNVNsaBmWu7h8iJkffH7ZrZBUtRc88cp7cx9RPfTLaKUU6pjfR",
  "key16": "35L9P3CihjvGid1kK28ksKJGjSmeJyTBRrfB6MKF5tk7XKQiyfQhLTN862epf2HrWjG7DBYTgXtu2mcm21DpeU3y",
  "key17": "2M8YBmoXKQCgiSKZWRU24bjMHzAtjLWiNrLAm9a6qgYYruYwjfFw67smm75egegtiFgfC1oCuYYRZoZ9JYMvUKyY",
  "key18": "2fzeCMvxCRkcDTU44MFHYJMP9iaqJAdsQ1G25byxjUsCNbNZ6enyPJzkiBCNJpC6KkfQ1geiyuEF9HYr6Jpwv4y6",
  "key19": "2zGyMgGCHWUkQESfJP66X9hWrvKkkGP26ajwSqQT6yXfj3dQ7me5Lwa6jKCvLZ64RqtEzDXYqE4c9TywCP8uATz",
  "key20": "5Kr9K12PYc6cuY5JQV4prJm8p5XVK12FjLsAHvQJCEfnZJAcRs6gRN9ZHrCpghAvR13waqAmUjJXTzrda38Rrfbg",
  "key21": "5LGKpVX3qmZuBCmDBdx5ptKVE65nYxLxZifGeX55RQtDbhZW1vm6Tubnd6pD9WxJZ7thPWWN9mwweveGFKvTZaSR",
  "key22": "aVpG3Ff6C6xkmuvJkc16x9jgU92QT1o535HuL1ztTM1aaVscRdcrPU2VQ1kaLScutJTxQjpqVX5mz1s6f7ajrcW",
  "key23": "2JVSBEzRPeMQghDcHaJiu9ub6Lfziic5eD2gNr6yAxX5XzqfySF8Xf4zJgN4WMVENiATQYfMbTJiEjZe974yC7vC",
  "key24": "2GK39yPuPVXxtz1jsTgHUgc14ckeJpG65Y3P3fgdd8ycYxmq1QX4Gqg7ekbDcm2TLDP8vtMiBP2o2doiHLh14pz7",
  "key25": "4q4u1Xn33rV3MAEnib1H7NiuhtXHkVJHYMJQ1aCf3jcxqu2DjLu1FNQA2v9eMzXjZXyWcWVwiJkQs3QWuooTvJDW",
  "key26": "439kguAGtwzyR1fvWMGY2pqpxENsa35EmeWiVtvfWhBF1xHbJmWNrmCfvco9YDTmh3XYG6BK8mAA4n4c2s3s1ugy",
  "key27": "2xLsSaWAag1oyBUezRhPXyDYJSAKjvvfncn3sak3NGRifYLUzSx781u69w5NRMYfsUF4u6ddDyCKPzWYHbgJAu3C",
  "key28": "5gwR3nAX6pDqh8S1f7E5kfi97zLJJDovN7Q1jhK8GgAEZ9U8S97Cju3VDsp3LLWaSqxMkBv1BrCSsKgMt9ARVtKL",
  "key29": "4beBfccUeSpNG6i66E23JZRCwverNquMvWtDAniCXCMpk4KgoHaZiUnwbizAvpJVUhNLT17Wa35rePwTkLDDeem9",
  "key30": "4rZNwinCL4b8PYzGK9P25kQz3ur8VC9tBqLZubY9hyLjVHdgXZfUARzVWughS1mQ8wFEgb2dyKuFeZc8eeT88P4K",
  "key31": "4YnP5tt7kLobgWrPzj91AJ6ujZCagdh7wwZRdmSG4LwxkNG4gyFEPAAJZK5qQL3ZAs2HQT8Xjqac3DgyqQiGVvXz",
  "key32": "54cuiks2DR8WwEJegx9XoAUG5QUYDz7XiD3QgRHJ4BAN6GfZNc2RDwpvu6nMXYwtg7APP9GNiGUfcfuKo1JhDzXy",
  "key33": "3ku3W9H5mU74eaqqKuVFxS6A6cR3KQaN8prYv7hei61uKrMidp5NwoJc5uMxW143VC8zKyvSdHKyquqhwszQPRyD",
  "key34": "286aQLYNCnsd4c8b8TeXoJcgDtkmmcxC9dQebTCYUx96UtfTJPMzYfA5SRdpek2b4dBUczQmoXyW1iWZ6FBxDaLn"
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
