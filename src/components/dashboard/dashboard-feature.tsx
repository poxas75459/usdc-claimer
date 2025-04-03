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
    "2EJZCoTF49NZDPECu17u3v5J5cVyrQ7GsHJ4nCPHsLaecbMnrUF9M1wUdy8cyqrKPJoqUBC1rmSJN4ZCHyGZjPLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tw1ieS7JTH67pU9NC1t87NecmsLUZFEpMpdZMak4CXRodQRtQyrQX5WCDM28xARd7GiUZDYdMCCLW7yxL55E39T",
  "key1": "4GgYAw8r7E1QRkZ6731vWtVmzjXW6dKjjEJRt6yYhh6MJk3Domeb3xJ4bnWwWNUgjHdWBYuyzWbj3uQRksCK5riL",
  "key2": "2cQDsqosGeGPd9dU6Sj8BETVDDLBBrBvtAZKYFJ2xFUNjYMbpVBNiJLhxDcexwfnKkWGYpaoD5muMCP57LayBUiC",
  "key3": "325iqgDPPw6EB1sbDLc2VvWcC3kgu8TPeEM6wco143n3QdjUwvTidDQEgXpjgv7UQHEbPja5hS1yJLvFJsjuZfhE",
  "key4": "29ofJC4HXDDQRQgwhXdpJdk9581ECb3gyUvRqq28YJe7TYduJeshiD1uRCZQBEDA19vqhfLqyaqmD9T143xiaPno",
  "key5": "2rShKzJUumXRWZV9bCM4TozuTk6VTGdck9nWVgidRmLTv1F4Bsx6Cf1uJjCWuPqBiQMMWC2KddvfvXABRSJfNChK",
  "key6": "GuNwGT7baEr1yPSq5Cj2r8aLL1JCu8uEAsyq7TKgW4EtcQE1E9ztzF4RaiMZ18s3isUyLXHWPiuxTVgzYjEbA3v",
  "key7": "2msJsYCoBkSsS7iFSGTMckYRJLvsxzhNzuKv1DKzy9PNN58oXiymmmH8k8jj6GomkA1amGkG4ujbyyS2cQC6xAe4",
  "key8": "5U45PJ8PnGXnPxeGfRCbf5EzaTtR778MRtLfNTJjMLRKVzCHMneAZTi6W8FXVPQ8GyS9jt2kr73TrRN8smEpEUNa",
  "key9": "rRjvixGpa2zU4iH8E19pGvRgCZqcwnFoMCQUB6kzrSZeC6hyyi6zPFok6qtUxXUCTQphr3cj9musAfajtUy7TeY",
  "key10": "WRBgMbkXGa8JF5LYBwBcDxsGjj1jfcrxbiFF1V4jD6f39xcykUdpfBQuKb1wYfHNpA384iEhLwAFN9XApDPv9rg",
  "key11": "2cdv1pcE9w3eirDhJimGUAc2t7uzTpv1eSPjNJDfe4Ci1yPks6c4bHAMXn7u6J57R971ZFrEbksC8s4Aw4noG87x",
  "key12": "5rJucucqnyBBewNLEsNMHyhKWuBBq2AvnHwyVhdY4vnR74GsibTX2M7mSAsH6cp2JQvTTiYTZRcQFxyoDRasqob8",
  "key13": "UV6ZEr4eNz11Tx4D3o9xGAAwqSwJ2tZY4DvPbGU66JDX9V32sfb67z4pvgSCX59cAdMJxHGKgt5bKQdfKiuWFwH",
  "key14": "571Xp4eFWhhVCPvq9tnFj5UyRsFuDJkr3yAmoLndyruSTrcbRUsh4W92W7vkTZDjptrAHgUYgybuNubrwViyNDit",
  "key15": "n8gV3UNSCij62kUf5VbeiW7Bc6U9pMR8Ha99zZh2Bjhc18UMZvw4vtGzX5F3NgK3GiBxn8V87Bn16KL3snwJjGN",
  "key16": "51qDvkLBVjRifWTkrn2bkZ4uoA3AkvjRbRXEoZYwdziMGjPC6xqkFixNGixq7HeFGVFasFfGTSChpEmncZJgLv5",
  "key17": "CwAs9311HpeWWuRK8uDSidzbtSNzsDs5mQbdjKedCTEki2SDm3TLVsd95xTwaR3eEdUdxdxhDfs4HhGEDBpiZ1c",
  "key18": "3Ey5F5MbANw2v11UdorrstD8zzV78wW7AxcfWQUPieuPmJu5ZwbKRN3v2ErjrQsy3mY2tfUTfB5aBXHtk9jJbELn",
  "key19": "4gt9hJC1AXJYS7MNpjLMRrtXe6xDHee1hZTshryLZ7peRQAnR8Dqnv1aydxUnVfzHXi8iDTKdXw9nJyMS874XSJ9",
  "key20": "4F1qEMbVTSJZFLDN9x157vTCrx3d7KgsDkMDyeYognSi6DnutNi9dwVSWcdcsfPbaCBtaadQ1tX55nmRadYPJZG4",
  "key21": "VtJL6ZVhdqoq1Rfmw5Au77Xxi3uNziL8RXbe1UBCqGQzEb7E6C7ewPEG8sN5GeNnzATmYsTXwXVXgjLkETsoEEm",
  "key22": "56YYgRutXGsgxmi3uhfq7dSatoRQKnTzqWDpLwFY3GBVCryvFooMGz7Y6hQDkKgnSY3bGhoyFbx2E6SZVchC8HPA",
  "key23": "3akFGpV6yibF2DxNrk8HpG7A4AKs86gjmy1swu4cqj99bDuogsjUJ41CwrybXjhy6jHC649KVu7PCW5aveSrMCar",
  "key24": "23rQgQFHcrMTb4CMojnZbhZDwAMs1UfkzQduHJmpnN8fvK6aSDJHa8rHQ9CuZp2BgWo5QiczsMcPfe9BsAW2NMSw",
  "key25": "2tsif73QjsBt8hkZB8ooaPK7zv8W95xkv7doMtkwA2fbwgxK83poS6S4umdVpgcNmN6fAWHJsmvyehrRFFtBwrNU",
  "key26": "LUQKjDYwFyjmt71bswjnowRERvBM9LUUYC9828dX7JWWFw1GrACXnz5mpyJ57bxHzhkfQR4kd43LVFQqLnvSFWB",
  "key27": "2G7Shy1fMwudMNKgVoN17iFpBy4wKm68e2PfqKZZdPe4VFGdMV6SsshiYEqr65J1vxF8FbJ9UKHhYUDi6Btzadex",
  "key28": "2aDDczPybHidgyLaeYsiEGKbfAZG6pE2VCpjj98KkAXKvw1pbx8KaNgiPjqx18NLgi4taf391vQUdqBZpLrZagQ1",
  "key29": "V5uDAT1RvEBHovUwfegB98Cmicokc8yrqTKTvTRADsvF8mspnwnfHx5tJLdAtEMjt3CLQu2ZnEMnvqw693tMZxg",
  "key30": "2iKLBqSemyjKsiW9LBCom7SxKssiUErdukNWoeiL6MbgYQHBk7AF6rgjJiJbM17wheMe6MgYmPfo8ReZWbUiBExE",
  "key31": "4Rzobs7g4VfzX9juxk6kEWRYU4yBkaphvy79hotKF75Sasf9BCQ9pPhikyXXSjGWvWN68ccyAch9gCCKhAxEPvAr",
  "key32": "5V2c4evtyDTqekfT75qLwf3zR3QmHaLaSuxHpqNzCS456PLsbkm7g7TqsA8NYweKhtLmqxYJwzyN191rt5BojPzw",
  "key33": "a8uYxhZHx7zkkSSGXaBNpkvJzXFx6n7sPsR95VzersqM3pBwXerHCwmDGwkKQZGcxDrvEHagVz5RnQCsPeyucBx",
  "key34": "3HBGRsMt69yW66JvGjuuD6Bw7iTvvS4cqaT9XjFEtujpAo8QkhEuBQBSmFUE4RLpBfeXNu2pzCyfzvKEMhwDgskQ",
  "key35": "MeUb9oQuKgy64P61FdcbU8xayq7D3D7kUjjweVB4XiDEzx5jpFrf94ww5Nr4Y55H6PLo5Ni9dsDnpfmwFtQSgUY",
  "key36": "4b8Fjb5JinMztxWfCDZppB6ZdrXftVH8Kw2h3Wi4aJ7vnWa9CMWCDjMLMqXp68QU5o38BBMVqtdYDJyci1xRf1Ln",
  "key37": "3GhqCBtfftMn2GAGJKNrG6S1XDj1VPjRz9NbqEZeNVhUvY8wekcjfYASCibpQAmMp4YrQhScCsjAQPLJBnMyJk8s",
  "key38": "3EwJttgKMNe5PRG855ZdFsg9REHbyybXg6do12vwFuANtCeWru6qijwWoUY7Q2HLH8EvQ9uHame7t5WVTcvxAhJ6",
  "key39": "2VLQsgGJCWztvU1EyQi1Q3sP13kneFPtS5S99yW8PyquRHknMPM5xwF2RNKGLFy3yJqLUQPqSqCrzN7bbnggyXVw",
  "key40": "2gGgZpA3mEUpgdS2jaZsmYiR2aGXVQJty7HBCg1pAZgtHuhPQortSuQVSj8HesLzuZGV2XpK88uFHppScCuPc2ZY",
  "key41": "5ucgrpFiStLWnE6GtgSg6fDH4TfRktEGnpjX1N9kK9fenqWtp7qqDRkAnPVQZzkRJkrYhsG17UcmVhWVCucwmKCc",
  "key42": "4d8FYMAySuoDvBrDPrQEASrwNCtv7QCUdGUv28jpwkEYRERhb4hwWHjg9SdRkfmkZ8Yu54VxVf1oT2HakSTeZRVB",
  "key43": "2RKTWhsRJjnmTyHAhe361ppEtMfAnxNsU5WXExsGXdFMDcVuWAiQ8oZMq3vanieYJfgYHViJ4csuRTppvbTQBx9G",
  "key44": "5udXuP9nTcN8KQpexmVMSWH28dajkJpbnwU6eGngGTXiFo7eGCAESEFAT8wrjtiugp7oV6SLaWQjwjK4JzMVQUGf"
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
