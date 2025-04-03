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
    "riLCHCtBuufTpFyiohJkfhKVQCokLVa9xBYpyfQ7gcasYvRLmT67ohzMgbcwWz2TFJuj613qVKMyWT5ygLdtG4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GFwqmS1vxuQ8K5YpMDEHkpo5SSSH7suzStxeFrHXZydjXBtp4xvZxvSBn1HizeK4ndG7kdq4efPT2oKBud7BHWz",
  "key1": "3WheWbWHV5jHHjojekYDEk1RQk2MJPmkj7vvyKPW8vcN72PjuApVbTTyJa6V5zumQGG98VcXfEcAtQYW8brCGn2G",
  "key2": "2cJhNqg7PFBpqtc3bYqgZTdFbz9smGCAVg7FAehpzq6UsCN5UPhYRpMQdi9qMrJuhJfMSj8RbPvoxzbbu9J68t77",
  "key3": "2tuy7qUvSdTBRdcCNF25uyJc96qo8jZirQUHx2ehux27ECqgXAaWFGKJg2jzAoGA5S2hXQb29Znv6unbFyT7MghS",
  "key4": "5BNYPbFjddfiTmC1RhnNef9CVSJkAMcXn2hLSTVBarEKHppmxvgFAAb4tNfimFyaoaqaVaugUfq8pie2xjmPQEKS",
  "key5": "3JfcXuk3ZBTMdFPyUKHWuu41aXSctEc6fT1rWunJ2ec9yikRnqjPrV2fLsVfGhJFqdtZy8mLE9wCKEa1bsEmMddm",
  "key6": "5tPCK1CEbvmQ2z7BmDzTRZAqdibHuzT6DJpQzEiHJDUoTxaBy4ff5pT23L1FPV6qZoEuHk53KF2NKgCT2XJ8xvyt",
  "key7": "2vTc7HiZFWSPNaweWNTzfGD9xyf1XgmR1oS5rCeY5Nbqbn4f2FjYBD5BM6RcAJPjSKy59En2twhbLdHPViSH3a3k",
  "key8": "4JX35a3MNNmY8TB3wAMbaN79SSda55TVNEUSwBEVZGz5rc6HaGbGV3fYYoTuXwNxEwvRBJ1ENmA1KiouuWvV4dSL",
  "key9": "5Uj537SqwxkErbRxsS4rJP3W9iYXQoZ2CLqVphMyzk5vzvmPunN9tGLxAJDiCLU7oR7mDgX26CPjsD9bSddQtZMq",
  "key10": "5rMevM7MnF6DyNsGjMFBqmMDCf1z6m7QfSp5AWpZFAQGXVPifWmuNS58ab2FH61gBVGWKvUZNyjjMkNSXsoKCGAF",
  "key11": "5qqs2ZhXkYfaAmDEBqRZhq5tjpsgmGGPEiRspiapCtn9dV2af5S28b8un9MQwJswMx5sSipzAUfyTe2G3RBMC1R3",
  "key12": "2EycLJRHso1X3ByZ32Rnb23Am29NgM71ViJ94nsmyFMVbALmAR8wnFRu7CokRgV8AjeRgaitckZdjY5N4Rdkmocs",
  "key13": "syvuH7dwEhKypkStVotXphhEtzQMbad2F7v7ukbhFa421NnunJLh4TcFKGLAzSGXqaV2iu9L9A2PAA5cT6sDzF3",
  "key14": "5aAWsz8NH9ZKsEDYLB2aLJavoGmh8YF3GZgwWGw4QjLwvpxuPWg6REYL7UMMeXq4SoK39qmWK1LghyaRo1tEoxKi",
  "key15": "4sjkLcM2NXaMZnN8WESTsYy3TSoUrnUnCq3fAoWRx2FirTnJVz2daxbsDZcEWkD9aGi1pXDMV4hKYwR6kxnPoYP8",
  "key16": "2Vvd7dMFvst8coG1UY2BtKYxbAPKc1tKoAbQipNVaNdvsPoK1ZPiSTvGGXXqZXVKnXiFk1aThJ2ksYdH1WVLzSgL",
  "key17": "5VAzPk8kKHtArLeHjSRwCQXYXke5MvpEkw2T6Lio58MBGatGWFaAqHwhHokuhUZ7HsUx1zLuv8yoGUHVGHErJEcc",
  "key18": "4Fc1ofaoKnDqCTasWyhDVpzALb2NkUpZxp8bCYGHgWagYEMzkq69CWV4a3mzr7bYrg8Ebjhagw1twunMNpgShoWS",
  "key19": "5BaxeTGR3NF2KdEwkeY4fFC3ch3Zad1CxnZyTAfTGcF2cZX3TBVmvRqCVP6Lz4qK7j5sRNBojW1V1PxoK5YxFzvp",
  "key20": "5hj61RYtA55dqBQt9RW53DCquEgyackETdn5gncHW5Z4vTev3S9msAs34mDj8h6eCUp5L4StKFNKgxRwHtSKDWgD",
  "key21": "28ZEKgJgE7CHk1WCNuykYhaF3pygwAD1guSqfyHC5FQDnAeJvuX78VYTpaVnzAs287neobiKgsxhCjQUQMcxzU9r",
  "key22": "5RefUuqaoLZCvNsPSrNSpUgoH29wYLKPh1ACb6NoFMqX29gG8jMTTY66roEjGCuRutUxJfX1T2T7XezUmVNSwH7K",
  "key23": "2E2RZYBpMyvuctq41RVsPgenZJDkSQes7nNeLobDtLpeyxpT5M1kqbMuoLPTJrcqk4nUjA1CZS2hdHD9GpFBou53",
  "key24": "4JbaNj8V7jkPf3WFaXpoF8TsRwyGnm9cVbe76rdWvkKut47Z7t8DjiyQ2sjUkh2PJuLACKcwFfGGtDhCzcWP6Sw8",
  "key25": "5qsZhVZeUi1n7MEo8mRm4A5Z1YVGBVK6xwxnPQwtCFZ39xaRv5ey97jUQ2KwjqwwApkfL2wGHNZMhALsWbHDPSsW",
  "key26": "4Ht8aaFWZBZaq9jvX2ofRYGrkMzKeSx3V31iUd3gh6DV8q4jMeNdijT7KtJ9MF1QbwrtL6nCoCKghV8U5TNrNJbb",
  "key27": "3LDpjeDGjDTHSW2WTyDgBLZ3Qk2e7bnLYummDs53gKUPZ9jMyiSvR4JiahkK53ApSwABE1144thqtwbyTxzRwQh",
  "key28": "4wSUxwVfT8rV1ekLAE5rAkYDhidrTQ7TgzCDNUAecFptWoPXVx4aVk9wpLRM8vsSMRM1P79KnsrXYVMSSANYGqpa",
  "key29": "3oCVPhZKK51xp42N6RyaTkZKdjCB7mhM9eg7aQU2JVFLuDuXqq9TTSdhXGaeP5jA7ErLAjZ5jyMSkeGiRt6gqEbH",
  "key30": "2fNxTgqFtJWmsVsy8FUHhtvZjKfydCQBcnso23ws4coCowwgXr7JehUeeeU7gSEbNEZLGtG6roscCjvFGRAuyVev",
  "key31": "2qKEB9bVKuc654gZiJkmGEoR7bwmgPdMDoSUZESimRdXJi64kALK2Phx7QbWJhAEQfiLfursnVZ8xV6WU5KCq6gh",
  "key32": "59YpUkS4gf7XkRm9Yhs55hKFtte4cuXB5mU8GUYnsLJHsSmoHdkiz11ea1ivmA6VFTVfBykdxrSbN7BVuaw39N65",
  "key33": "27cB3pKMTK3xnt56krmXRFLGmKz6vSSuM5d7KC8nQjmUbfQfqVu9BHDaJjkoXnZxv7BJ2hQQtXiwEGYp5W4ubvR6",
  "key34": "eJactDq2uzKktCZHjGUgRN2tBemZkzYXViJscDQEsAsR4v38QWCYcPD86kH9Gmt4etdwrretF2Sd1SfMbTA5csS",
  "key35": "4Z4tkCzJ5pu88ZAmXTwYXcun2PgwJaPmzahNUpDaAEyx3wvp4ycdQoBMhXfS6UyUHsTnEgGXv3KKUrnwXn6o6jA6",
  "key36": "4WEGVffisuEY9a6a4hKFQdnpZkwzQw8xGrbcY8Ce8LZTdEG5bbNjZ8bdEK9TfKX4ahmopEo8z5ppeFEn8dzNRAVd",
  "key37": "zhWk214QZxfn3TTbydg1n7LmMzV3RWc9GJtQkCvn987RzVUV1RYY72QKQjfXcoKFMvJuzmPqra5goqwuEymEiiz",
  "key38": "3skBLdgPLZAeKkS3QZeHcHw5ykcfrBEEaD3w7soSSexBmJ7M2NQDxN2sqwbD4w1qPjiQPSMKUZeb7pbkx239ethD",
  "key39": "GpJP5BtdK7o62jsc3qfG9uNwHBsWRMqVrdujMXCGtjsCdnJ21gw3c1U6hKQHdaA9WmpqJdCYCnzJMwH8v6ixpgm",
  "key40": "4PJpSxMMevt6hbnsVWzah3ug24QNEQ25gMVD2vJ3sx1TkDvcM5yRTgfVUqrvWUYRQPf9xbMkCL4WYovKMzVTq4hZ",
  "key41": "z1v5iCw7CM8ehcLAU3WcLKDeLPGqj5AqL43nsPMnL83kAdsCLUagEKzdBbTt47ujVKhkHNfghEmfiAto1sTYSWf"
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
