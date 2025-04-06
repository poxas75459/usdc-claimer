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
    "5QUVDP8yHf2UwQPF5up59FeZhYa2yQxkSMGn1Rc2tKNoz1vYiJLo3DpBpWK4kJmXnjAUh2EpvFmjtShMyPMoeSgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uibpZHz2jnrFY24zMUDm1Vz1XVigbECuGKnamaPsqWfwKYZFpbPGLvDzN3Gdu82PVuSDQKuM7zaBssRhRYPGPK6",
  "key1": "3349FZEoYHyvLrQ8gssNrzrXDD4pMVeimvJhhU8QAMbcJBEYAvu5WopuqLVNLThAw4rqY4VWsbK4KVTf3j1PHMAg",
  "key2": "tNf4Vsxe5mDeHtM357RbUMyqHVaPgvBEYKeoxgjugfusZ5qp6M68xm9g9dd9ToLws1w8ahumzaDv6v5dNSrCvMf",
  "key3": "5AHGhSL1FPTMuAc16ZKQKFsfWZJh2YWdN2RPHLBhh24A9EUJzKNqRPTDLLBn3EqUDg2y3jF8NSbG6QFmmBCmLo8m",
  "key4": "3dvc1mfSPpuuQRDJfh2Pd9SQfA3S9xQqmkwFh5YfeU4vUC1nDSddcXnPZQxHxbTdUmGgrHiGAy9Z9iJvnx42D8wv",
  "key5": "45FZMoe4XLpPGMgLsAhwrc19exLvZhZdhoR9CXFseSamzui4qoBxgapZ7ofEbhpfqQ5rk8bBdM19Y7L34QeYokR8",
  "key6": "3KC5BUghLNWyZxSMJZa4v3ys1t4uxepht8KfKvDcg9CmujmjPiQpNnbz8pJC3V2W1tjvDRLZRmk6n8qDCFuMvQp5",
  "key7": "4FJsUVTGWo37xD68zspaqB55RcQBdUDReN8RcZy2oGVXackQsJkHJQFAfJR9wUCAt4BEFUjd6TmWHjKSFrtf8vV",
  "key8": "zByEC7jUzi7XyqNKQh8itjjGSJo6b1dW9vZLgvrZSGPP8X5jAdVRJABfX1SGcGnExh9L2ARQB8AR4LCD94MYqEe",
  "key9": "SGJTeDDkP9NzEWDeMRzTs2VE59AcidUDWeT47u4fNvDSnDRZGZ7zL3Pp5vRTTbS86xtLtw7Gxg1rGcBubUjjYe4",
  "key10": "5AoSgdBYrPP6dxTG4EasCULJLDkmfcsuhFQzQXsnCHkY41B2yYmKVbVXzc9yVCLNuGdNsYapFVBYETEMharntxNA",
  "key11": "o8VfUstGnH6F4HucR5Tx5TWzu9ova5ZSP7hittkF8iZixzUP7z45DYxqYz73xdPrUKkWHqB4znWhZpwqWZnoBbm",
  "key12": "2hrzkg3u7LX4cD4i6dzbAwEtgEm3tRzuowzFc9KS993XgAJufUQiEDHuGaQSRzy2dXTa2viF5qXrAhGa9rYsGTqv",
  "key13": "3fkYYshPHmdyG4Gs7rpcB9eMgxgCBJQ7D277fxUYvzHSimZr9JXsKQ8ioeKXvDnwDwtdjnRareHj15JvCsKJUsye",
  "key14": "3bZLuaTbvJYqqKajrpf5tDwMoZK6zygzc4AWR457YYoRc2fZwexuH87jx3oS8uhnwZofkFBGpqYV3axBqeTKtVVY",
  "key15": "2QNSDbNRLGy9kwXQDm5Py2EB5HCCBZL7ydAsvBK2tFnzDChMp4MRxCHfCmmXxpdNVTJnZXKuRLtGZfM87vme3CD2",
  "key16": "2TmwCj487w8B5hDb15jF4sYK7R6k1wRCLGdatLUo4RQw73zxFmqhSoHnUemWKHrXAHVCupe1osEGsciHLKchv1uX",
  "key17": "3x5gNFDNTvHncFR9tcdQdw5KheATeGz7uEMSNr6pnc7ewqpkV7uXV6v9PwhHufLuRA3MBxUJGib7h2b1D4kGDmqF",
  "key18": "2fb9J4BGrnd9wSbrWFSQwzkUYRxx5eze3Gc1s5PPViQ2j5HBDsRVW4oba79MuhUzHS9Y89VS1B6f5VpkkKmR2P39",
  "key19": "4ekMS9bm1aksqYT87b2YE5CrfguwJ8suEmZUtyirCTXyZJkD4DuWfaancQ7a4jVW12QaE4zkpZgBfDzG6dU1TSFa",
  "key20": "47kkhvifuUaGzAVeYHNE7Ai1NtREjFHA5Jyb23y48owxyiNy1ud7tFGVsCa1sodVk52fcpNPGajgFoVRDdyN6ouW",
  "key21": "66byEq8FsjrGcM86wA7sLBze41wJ6bznUv8mDkX5cCBdqQMxRhaRWFBkapvAdDSMq6gsWsjztbaXmAnvEUnFHeJY",
  "key22": "56X7v8BHtD2iQt9YYiUFRcKMpftvSJM7iVQRDob9hNerbragtSy89SDXcYKwx1herQwSc1tns8P3KqVv8HcMWfUi",
  "key23": "21aNdWo7VpzDw8oSBTZu7TwsiJjwjqJQpZKsJRuuUm5ZvWG6xxPHsgEnsBx5F43wsMF6skLzYt76vm6Rmwm7eKxq",
  "key24": "5FCyBiJCS89PZW9ie5GgL1Sdckyqb76PQPxmbayq6kLUVj23zYfWsqKj9yiBYiNSYwrMPTvL5GCGhgKyM9ysseCf",
  "key25": "62Fzmc5cSEFmpCapEoxaMW9jqVrWVFj7xEdqZGtbEPmEuBCGDb1g7FmkeYYcHkuT65pvBBn2vKPMG9UezeZEKcEb",
  "key26": "4tZMJptFNAC6eL1WeMaiytmBzfctD5qa89zF6dLREe1Cusv1GRr2wmsVxYQfszAbMa2jGwX2ikVWUNUuDGUKH4nF",
  "key27": "4aPKLeEjRT5XWmnarSsRrgtsVNaWsf9MqZPTrm3e1KFATz9jQcAv3qgEBqoNwj7Qmn2cjxAcDymZGTZGdckefbfb",
  "key28": "3zBG157vqxDLxz6XkPyQwCkjR138BqE9rxYMtG2w1WKAEpZEim5j8p7UdeMsbPV4yh5wbevVnpzxwfCvmA5N43Cn",
  "key29": "3trQxM1hp2TqtoQzmJowDBNGqu1t1n9nkNQCYXV7f9dqaJMyyCuZVKEFimFb93dnAtQDg23eQTAGEAJfkqJgyRXZ",
  "key30": "3cA7nyXN5mxqjTVvaQdrt69iCPMnaikhFzXn91FWQjQQG8mggwMrsmUYcX8BRSVwkj9gGw9gEbTo4ms9ZZ6i2s4P",
  "key31": "2txXRhveYHtphcK4wz72P7T1kHiYFfgaK9f5gJ2FNaNsn98n1X4Jp6xS1aFtaPfEAAJ2ExeaT18zD45AXWna8aAF",
  "key32": "5uV5HN4wBjeLJp4Y9uqSfz18rXKoSMBXZSvQkqtEHjCi2APSoRAkG7AtmQzeLnNt8L5DtRK6wpAi86iJByVZHzRB",
  "key33": "3Y9k15vaiRBsWEorGs5nHHYbKmLVZD2zrqTbzD73SGxwLRQ1swfpwbcVraua1hZLYQcAJXxBi8R4bcbgUvGaN2Bk",
  "key34": "y1ts2jeLzRDzM6mFiDQ54x6nVBf8GdR5PmPdXH371ZTTUZjrevs5YAMm4wrix3YfLhLmgEB5JC1cLrUoLtXTJH4",
  "key35": "b6NP98mNzjQ5CYSjLhN7X6p9i93188JUxEnLY9k3szgPuvWkPjrAZxPCDKcivaRsXBKjLsQLpn4ZiZgGTrCrPbD",
  "key36": "3WL4eWe5ChEPYZuYU67iSkZRyfSVyoduKwGmPUYuvmFFkpxVvSuKsMbQNoyt79MA6tvhY6itTrdp53uTzAqt9pXc",
  "key37": "65vhSstgHndjASaphssToegRhoyTnbsKYMzuPDtvGkp8zfdcWKJM6JGF3dpRQdRvpVrCRvPikyTQsvywxRCaa5Ty",
  "key38": "54TfLnmviY9MXXU6wxZLVATKreMom6enjPge4fMSD4rD9PiPvePWzo6duK6bfgrdMmED4EeRZEvmT811cYJyTNAM",
  "key39": "371wjJ2XBvDVtSMtW6dqRa6YLJSJRmBmPhvVswzYRMeXi4bA8hU15w7cC6Zixje5GPpLBSLvMZ9HfBa6BeeiWnbb",
  "key40": "3rtnFtT96z2Q7DWYj4RAoaQGDRNfcQ2Kfe5Veau3sBPMsvhkGdqdfYtq7dDpsqCHNgmURgXR58fSyTqdpFaTLVVs",
  "key41": "5DoJNrq4LKjYv8i2fXeXx95aAiidCwwtJMssRGspbMZeLti2Z8QQSgBT3XGhmaPEXXJDcD9wvvbtwjWQC2gFRTdR",
  "key42": "5p6hHG13AvQfckFGhP24ezhYLC5yDEWMcVAvZxhBQon1P7DwsaNa5ZGkkPFZnyfhZurFw5UbYfxqMeWV6gi3FfV5",
  "key43": "5ypzNkiUqP1uK4YdnYJWPqSPuTBDTxZj6YEoFXj1BVScqM99BybwRAJu6h56HpjRmTgrLCfYEQv2H8xNa4LWAuyG",
  "key44": "5Gei4i6jGnRKp51qo1QURGJzjWZWjcvN3hytdauAcTveawZGPZ12JCGyhLw97PyrbWLsUPX8jeKSNApimDk86F3F",
  "key45": "WkRbm48Ho7WMUVBAXb1GXMdNbhvW9Uk6ggH7uiTntyirQEbx1QKBCktpxFv2ZQCVHGcpJrvboHtYfSdNNuGznAx",
  "key46": "X3JvegPApjp8jGhAvazyJSuh1Szh66ZZzn7Pc69UpYoNDAb3miz3Z5JAe9QtUrHzZVnSTrLrSoawhnLCcsgShqo",
  "key47": "2odBSFpSeDFfmSHS24HosHaYZHP2KzrkENQVN8s1r8HnqrNyXa9A2UKk8jdynKW5eBsSXXRpQju58ZGax7Bz9Rec",
  "key48": "45sDgBYiA5uLsZZXqSJeKotwfPh4DCCDZNysuunnR7qjPfUNATURQAS1A8X4TnB4ChfYhgxzZ2qfiAQyYKcpTBMv"
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
