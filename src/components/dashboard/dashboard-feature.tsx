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
    "2fc6rMHuagrVahNKvkfZ4PMJHk6kKsBcbvJLxDk3ZwQ9JeyjcSLhTgVZoXP1LbnknJc9AUss9tFdSzARFNFFXoCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rNPBMggoaSmFkk29mvaLJFZ2qLLH1gVs6NbiJrLZ1FWq1JorpaGLkvfnBHoMhXbfG6ZGM3ARtbLgjXBYT3MeYfp",
  "key1": "2szJS2Wstqt4GpnuGE5hi8dKL54gXgXiFJCdVyCFbhdZELrqHdoF88N1J3Nhtc2xXn9obmz9sPT37vpXx7bbz9RY",
  "key2": "2dGxmCwRZtAw2Aa1H8GnkLuniED6q8e1TyZkQQ2BfB334uTdtr2iyJ6VkSftXpSFyvthLgFfgZz7ZAFgkNxnCHPd",
  "key3": "4ccqSu3trMYZjerURuXgRpUqiU8W8VhdHqUDBNigx3HPd1ZPxmbDsUC7GfMds1WqpLnPyeEGS3QJwZouzEtAPzKh",
  "key4": "31afKM1VP2znP12edGCk4efFiikKfQJtVECV8ysyDFA64sRnSm1tT2VfdeR3Mmu98e2HyyR1uJkLhgrtbTzkeEsR",
  "key5": "3kTSHqmseLwXcKMMeySCU2MoQBBpnnaa1i9BYA5RqJWEUjErWmQmFMuaQDhGxmPyuGXVpc9SwzarUZWBeNnLQvhz",
  "key6": "2oZqw8rYuUZqQprhCmPceKwC8xbRjaUTT8tKp9RQkcT4NAWTED4AistkLrb9okg6BzVuhh9fMUYQDFLYs7gY5Vcd",
  "key7": "4HNukYed6wvEt7rnSVQe3xUm7M8MqYaRwrcGt9bKCukpyEXEii1hy7rzZCqGbGQiJ7aM7b6wfF9MrGFKigfVRMsh",
  "key8": "5ZcZAbyYXt9Sk3pZYehaseqo9nxoZq6cEasUm4bLNKcZjWBFs54zHvaSG4SvzwCRoC3JkzuMYV8va1R5MeiBSZWh",
  "key9": "2PUXEHVbryis3LNJrK33XHk9LpgaZmxc9Fy4idmG5de86cBV2nhSxcLq5tarpUyQXdVVkbo1Man61XEAQe2hPDXh",
  "key10": "5mxsRDU5Lpngcc6pLGsXjfs69bbxj9YA4tDqkdc44T69dqB6U5Zda7bTgGH9NxaNCkhhp1rVbUaWGiyJQHyWAZxd",
  "key11": "2kwq9gjwMfkaHjrfZptNJq3MMHXitTCajwKhaq7Rxqnuh3sYEXiYExhWp2FcvjhhxYMb8BjfV5UZ24185qNK1nTK",
  "key12": "427xoNYrUWjeBN1MRpeqMDog545RiJKXNPDdg92KapLqjnufVCSjGDGRZrL8dwUZLNYJoX2wk9tXkFTzg6mCCTYM",
  "key13": "48yx9zB9dS1No6h9qBBwVvt5MHMcqJL16TB9bkqgSPY377zSjm2KH1VLiWknApHJTSaqsdBmrfg1zJyXkT7SHPHb",
  "key14": "653Mc44MyeSqwZ8rjC8LNRfFzk1QQRs7prK5JthLyP6Wi8iQ9NHDJhFJvcdUXF6Z8Mc2Pt4ypB5XgpwJVEi5uumU",
  "key15": "5mikmdJiy7zhFYNg2sm6mYDPjCvCVsgBYA2VWQAD5i3dB11AtCXELgS9ikC7nR9hSyp5bLoX36CWp8k1tq8KxS3j",
  "key16": "5wxWaZVk6f2setvxDJqcxVYGoqdwrepdNztAkhmTor66RvygqoLzfQ6oUqc9YyB5Ufzm4SAcuNrpXkmJy8fe7HtF",
  "key17": "53nawS8pMhgWKotQNq6QWBhyVr3f9oYtkyVYEFnBkW33cKRXGmskmh9JpFBceYe8As4qybGGXTWEpssvamHJYtvN",
  "key18": "3naU2jYLLPF3cPJX1mdr7psZCqG2SKWVXQVomEEMwWDr5W7d2juBXKAYnhnKXYhZqi5rW7oJEr6QhqiEzsQ6Rbaz",
  "key19": "3En4EJpY5uXQFvnKsEisgPNs7J9FQN6m96ksJyKWadPADtShvTVtv5FKAtJn8upXUUxcnqyp9q1xz6niX3xqAt4s",
  "key20": "3aJR54ns4TkfZpzSXbNLDQYxqmS13QQJKZt9KgrPNfoBG3oe42QUpUFQRBifmhTumHPPM6xxzbgqQjD7dKUbtjEa",
  "key21": "5oFc1bTT4dyTMgqwFyQNu5BEJSRJnxA8GGDFfKJhegGSxn2xdKLVENCcMDWcXmA5qM39Kqd8dsvxuqR83knx15Q9",
  "key22": "2S8Bmavpy4qHUaQMijNz7akcsyCdALtyovisB1eziPsJEGETWSTVp9DCzUatDq1awndW92x3KuPSKtAy7UcJAKfb",
  "key23": "KdWxWESNmFLK2bDTP7214w6khLwjN7dDAVZ4WssVRuS29RgUzDn7KeGq4S1FQPXJYAiakq3zoameSoCRU2C474j",
  "key24": "4ms7rt8gvcuk2MhZyCbkzgxoTbssBqekxXdKxFKFUbrs58k4tdfnUsXKUAiP6ZFph9wYAa7QVdyzTnq2j7X6S8vG",
  "key25": "589capBCPjGkYGffArHrCjrH11hbKiXsUAMRjXVhXWSJXkURkui8pYpZRCppVeyxchx3yKRQg6N9LAj3GqaLY7Jd",
  "key26": "5VwEAZMYS9YR25UJhno1crFmFGTYHtJJbBHDxVA5yq5NXVDXsBp6gJhvsn65dpvMmW7F6GG9cGgyEspgy5nbs5Ey",
  "key27": "37G2pfY7rFgXRQw1xuVv8NF6jrkHph5vVvA4jzECP9Ewg5Uk4VcjKcichakvh5fbDRQa477AhBb3222mrK6fcFYU",
  "key28": "4L7YXVpnhqJbuQhydhNivxAEChEeymqEc7QrKPzxNEDxh4XK8QKzvYifRJP5eEyNYxottrVMmRTyD79yzvmqNgYX",
  "key29": "4VbA8NuTN8vQJGjb5SBJ6D9Lru4rYHdu9kocTfUSAjNC5UYUj9wsTC9W26vSS4yhXfxmetVi3mLrKUEvgkDDs1VQ",
  "key30": "3Am95Q8YAjso9ZrgWEoqZjSjdtYiNHVmq2gNSzRucpbg627Q5DpuvAj4ybwRtHEBiFgpYtg2nN1ERA5HioBLxkPG",
  "key31": "34kxwvywRXggNTY7eupNjQUEMje7Jr7uZTGxyVK3pajBSah1zTsXbaEbHf8v1pptP6S9SR41gRFp72FASijGEfrz",
  "key32": "4nqkPYd9YDDcNu42hyqJaJ7T2JVEQHe6hmfopxDYJPJMWQUnY9hQbZHkDST5nxWpj6aA8W29vYozQwMkgPfocvs6",
  "key33": "5pTRjWKsbjkkpwAmT7ddHvcrg6CYTthKVzUowoteM1CSBVyo6Ro2Xs7ZuzLoMLNWPXQN7Xf93H3AMB5dyWEiYTrb",
  "key34": "54YEU5vbqMN3LwmTkHzvC4z3H89VpF2nRQGPMBMBT61scZnkRQ65hfTto9kULWHvPzd9vb9s5wvqBH5tVCUhUaRa",
  "key35": "23faRYrmTPa41T89vWtE1z43hh8RwuRnoNq582jd1w5BaptaPpZDF3Pr6oSPar9X2d2FHXGVwqPKKuDSNAu62Mwr",
  "key36": "4simzmsM7pwGfHQVZM5p5693xvb9S1VEFeFzyTha5uoJ5ppcjurBZyK6D1DN1YCsjLtUj8xrssQv76gnSgAf3pbW",
  "key37": "61Su87otbFrMcpNMMtURumVtMGfehumyV4285zBc6dVS2sui9J4AtgzPHjXYUQfr8dBy4jdMDx5JDSJNSrA2zFNn"
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
