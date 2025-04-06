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
    "3MQENH1JyWFtiv9QtGUHvmD4LQCrnA8jnuq9aE7HLqxdwVoVKn1GKKpTcVx68NGZjdb6FAaKQDshYUr9RVpo1P3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wJRBCDurHiU89N9ZVs818QG58CVZMkyDAq8Kv87d7EfLuYk8o7nKT4VH2841UMFQUYFKwHYu6fCz5dqiAUgnu8d",
  "key1": "5o7UGrRtFdmBVyJ256rChAfrTJcSha1B5JkEd2Bb3HEeEaiKXtjSSiMLz33HxfuvjRiVB91mLiPKLLwJTcuoKkkf",
  "key2": "4TYas4KFgeHAYXj17mNNVkeAZSZ3CumriLTFpTNWToqPhednG55BxBHMTtjbCTv2b45XswsCQMwAh94WCKRL2Pwr",
  "key3": "5pcx9cyRXR8pyoYUBsN7UP51uN5c5EtZWW2m91GyMra1AhGGipWXwzKZ54EUCFBMMbYC6fUySnGfSZJb714YiKFp",
  "key4": "2LRjv4CDvLpaffuA91QEzF2KYtweiod2hf59efApynCkJcgRZq2ECsgP9J1A3p3U7pRVF46pYo6FfqANrc3UrMMX",
  "key5": "5Ty9oarHms96nrxqDLQfrmGSNjEynZj4McYGNdfdczEkKDfvvFsVta3yXr1Bbtkm8PnxVB6WgXJXqJcEm1dAwrjT",
  "key6": "42VQwgZDnwxhH4c9xxFAE6P2Q42S5FCwzAQ5U19xTRcYrQKCfobZbiYr4tTW767XwdcwqJTvGnQgeb7CjwEAzS4R",
  "key7": "4CFxFAqYYDMKt959W9z2aqhYGWzrMEGUrX4Z2Y8vFo1JWhA5Qs1yeUxMfyTEzg9yPz4kri9Jr4GB1CXoR2A7WiiX",
  "key8": "4AgYPaaXfd6Sc7NaPRqPSHz3n5hPABfmTrqoK555yw1BhhtZ8tcFy1iGbWZXqnUvUff1pvbtmkQb3BbefybdDN8m",
  "key9": "f8zzs69XxnZzBMpHGWpnNMr1mSynFuzhS1Zk4MbdABV8LQS1QkgZpW2pnobKnAebbdW2MdeyKxu7Tqzi4chBCFZ",
  "key10": "3zoZ8KbZtG5iXrGM5UnS52hD1womhvgp6e4ZDNi9S9kD9NsvYPqza1LLdmgY56iyH1xSFkph9Ze2hZp7FboQAboo",
  "key11": "3DGQTh7zbresc9XMv5JF2r4U37yAhHyKX5yTgVUuWGNSHz6SampAVUBVke1wzeyD5bYTSGdfATMH4DXDxFjL9f2S",
  "key12": "rNpiEraBzoVdhwb2NU7ukU9WyyXJqabNHiyWJWJJsKQzxw4S1oJeX1fLyAEMRHwMMPNyh4aheN2qeWSp3hk86KN",
  "key13": "1o1AKCQVMXTL6UXbPjmZZr3Dow7G7RToF52KEJ68oQvBvUUd8mQ5o2mAKcgbbD9RjdRTVkegBB5pczpTUVVpJvS",
  "key14": "mBPJAjFnaNUZF6EQpr8TYFNJKdJwdXRhQPDG7QiQDJTL7UFi2zu7N5meTkh2mMSWJ734iSpo48dtpFPKxJsywWY",
  "key15": "3AJvecqG5xcEnfa8RCFBSjMPNatJCt5DDJPHRx8TVaz3NzwKG44jp1eDw8zbWoV9fpzT4feA6wrgEpCJWywTfUX5",
  "key16": "2MoR42qjXi4audGjTwSqPiH8Qqz6Qp8wjDd93ba2RH9J9Q7KSQQPTF5NqSCW9Gu4umczhDSPLsLKrijaaggGaGT1",
  "key17": "53twLzGsHuQxps1jBqG7AXF4HRxwJpArinx7MGWqBeBHUAU7sFnFYh9YkvSk7hr3wWXhvrnVt3Q2da6atwwrTko3",
  "key18": "5eK3focz3H5jTpdo9hi6PRsCGtszm4gggdi8qdPVerYmfn7wMRpRq4KakEkWpPpU29UU1epHPqqrADEzcWCdg4gZ",
  "key19": "5wMsTTtrvAKdioBzyMUJd3k4roJanS4hhdstP11nYY4HYkDRzLMMJ35x76V3ztRkyV3FMHEAqtCLNsSC4Eey73BS",
  "key20": "2AnffCmt51zTmqSYWbq7wchaB1GBEkZPopVS6rCkVZ21sihPuEKkDsBH8MGNbeRbKPahEgRKLHZ6vigAXQoQaTQq",
  "key21": "5v6P91LhTSxavpAJ6QvaKvA5cSApUwohUGujXSCL3mvzgcrT6PKZNkYrTkxakzgtbNVUFpr65JpHi9EQCwuAGw1",
  "key22": "3BNga6vuogPdJ7RbNdUnKyHYgQxLMuA4VT4gthbKrncWqdWCuXUdaivQQVJiUeGHYgXrDqDsXgSpypTUXvKtWbxr",
  "key23": "rxSyAVVsXW1CUowuMbsX15MiLKrSqVDwxyCWDKRFyfTt7BwLYmwtNrSQTUrtQ2psThhavrtguJdqppbLqUVUhc3",
  "key24": "2LveTY6dskXXd8x1nmJBiBUwsCqMXtrxbcZHuQpPtg5qaVQfXMvC9vtbf7N5F7e5yaqoLBQ78ZTkvDoYzSFWCD7c",
  "key25": "4SSRx8NEks41BUU1LdBq5t1KBaz3TTLzq5aKji7h3hEVVGbvQABu6sNQWkJaSXKfxihE93okHtdzFZUyVLnvjRh9",
  "key26": "3eHVuZpdoRtDF5Efhphw8vctgFTbFdKGqebcLwKwT2KrNjDsMbhJQ7JT59ha4zMnTcE1Nw6dmfq1oXkjdxcCdV1N",
  "key27": "3GEf4fAkfgTmGQ3DKsrkZWvDs5WVuDLxL1Adur5gYz6JEbeuvs6RvS9DoJdRsckfVZv9k8ggHv49Q4tFRLnJp7YE",
  "key28": "WrzKMfqjdfs6ZrhsJZL3FvxaW8pZe9buCfj1qAZGStT5M3ZGbyEmihof3P1asC6sNZZH3cLTdfmsaFfeHZACmDP",
  "key29": "4mq2HExsXTDx79RbBrCsYk47grhADJ3HVGLXN8CYdBXmZbhUrhdwDQNYcFVv9ctwHnUgjVVGgUWKPUVp84428gUN",
  "key30": "4ng74Sk2UwXVrHQj7nrEPzBYyWdBtPgQ3wuiGRk1stLk1XpUKx4EHVAUB9DzukZPRwKRvZQ1iymcEJqHGryJPGEj",
  "key31": "5yeHo5y8kX64Vzy9Zu2ZW4cGUWJLGjbiwx2PXeeia11K3LTwTuSTJJGEBvP3MobFqcP4xTrw54d3Mx4ZgQLE1mjT",
  "key32": "21TQwRMztzAkL2R8jebCQxEYTCubRA1f6jzMFhQujVCDqH93UduLaHXGMaMyRTYSFk7WZ9m5FsMT3bDXHdAv8xzd",
  "key33": "5B1vBVHjBYrq9ZJUK8LLayc9irGnC1VxR28JxCdfzAmxE232au9zDiVDXq8JKcyMUN5JKHCRPQjzJUzBNQ1zUerd",
  "key34": "2FACa8vnc6fRgGYzYKeR5sqfnHVsTk4CNSLsBPag3VFZUjiJKbHUDhET9bXUnbQoFZJKxKcVJAPtGvLpVnsRUaMV"
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
