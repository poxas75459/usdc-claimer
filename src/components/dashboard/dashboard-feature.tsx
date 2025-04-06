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
    "5Dn26KM3GSWK6RG59CHofSV4DyMBJ9kAQV65m3eDFBEYWqEAKHirR9UEXGwemaKKpBXXA5gj4BLMAu3KpLkGwfMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PExStgtsugcmzJQ1zwiw91pyyCVCouDRVmi6SnsxKwVrN7iLsdkfyiADxw1Y1nqwfKY3LXG5vbwiKZy4xyKS7L1",
  "key1": "L9zVzyASaE8vT694afriUQofw8bmbp6X1afTfEVhaBKLW9uV6AcWXWu5rr8uJoJCMSjqffHcCo6EZAWrp7UhJsY",
  "key2": "4AHoGb69cQxRPNssP3YcjA4kgwv8mnXL95q5Aib8RU9UvS7hihMrHDf2ko42kwPyenvBWWeGvsSKjWrF2Qnj3x2S",
  "key3": "2SbMFjv6xv8qrHSm6ANYS5XVLYpNQJKKYiB2WinxESPYSQpTK989isx3AKokAKyPyeJcVf6krViHvF34rdFSsUz4",
  "key4": "5EvHLYhasNUTR53Fd1297nivS9WDSzCfK55iM1FHkoDifHU6VENNwEpwy2wwQ8ysqm6etUXGtm2GdNZa9NNFu4Et",
  "key5": "xP1xJzEcxjJQHQZr5vZjVGWPWorHCUgJq4fviY8CwefAE8WTDnMiE7UPs6Rmmd5rgrrWb2h8b6HSRgXsXKjeooM",
  "key6": "2xzxWJtpEJLHDE4j7t5PfKKrERjgs1PNryGvR2cHiKC9iqzHkLE2m88VfdExhPwLiYyJYB4bg87H3H4V6gYmjuCm",
  "key7": "UM3JQETP54uLacGf4PVdNMGmKtiAQQ5HFMdbvCaUioBjsVbrv4zs7PiNQUaRsnQNJfP8gbh7FWUCv3qshZuVFo6",
  "key8": "3Kusov6sihJha8FqFmUF6keJYL9jetiinDFJbH2QAtJoxcA2kiMNcheR9PA15L6tHAGj9V63wf73K6BGPGqHzbtz",
  "key9": "vhAgjfoWL1DLLLam4hvCj6nLMfpQ9Nme21UenT8cJx7cgWyt3npVkRCAQLEtF6RxPUfnBARFntP1mz3Eu6BXqKq",
  "key10": "3Ew1qU12iqj62h4HnfedAH9AK6N1dtbrNazpGarC26KR4djF7Az8BqjYdBzZD4RT3BCWX7MdjwEyPBBKzSoW2Dfd",
  "key11": "4bzKN6kJMp76HG8CofJWphhdZB1Tm6vk4kexMLrQJCjphULTjqyu4FCwDqEodcMZNYDLPbSmTZXEhqrJ86ws9b34",
  "key12": "65X3Aj5AVJ69wqaeV3HVga4FUn94zQhg8FT6iyWjC9QKfWgzmrwBsCNN7GgRU43RXG7nWRhnunNdjsjaoZLQFUUW",
  "key13": "2L9kmvarfrDPBzAn7vZRze2GTsq1bJ8Vcxf25aRnKWduE7tiptp2YpnSisQZk3E7A2rxDSMkWNKu1QXuy8ePMcPp",
  "key14": "5pYVVWLdL3Q5yiM4qQYwFkmeymaBAdhiwqJ4G8wo7LxkTjw8cc274B8ZMykx83Hrb7kFTWD9bgqAsrUnvvFtk7CK",
  "key15": "5naV65wavj2ouzC2yWbmKQ37NnbMgvTdtyhJ6JNRpmyycbmvKgNGQczPYzDPvgbQwYHRsU1haX9JzitkgTzqoshX",
  "key16": "3AxdEfSBjUL8WghkNxi9CUZdj7xEofRbFZxcLPNRJWsTSMiZ15BwTzRhnuc9KU48T45wkagr7ibK8RQviv5v14j9",
  "key17": "5DPk6ydL1twULZDND4v4yNwNprNH3Yog9FjaiA528bgfVUvfBB7Tu3mDRT21JwudN3eFHw7qVPkmB1qsvjQDTFrM",
  "key18": "Mef47JG3R43TFgkUDzpT4kGgur9HQvy1wkZE1ozCJiLapsmYzzFbRGaqc3GnH8mtGxkd8D4edsh5FTrfd8bTxcv",
  "key19": "3sdn2KgFWFepwmnp8YeoZWfisykDZPtWUZ34VddiVrkvCaA3fhLmszhs5jVfReM22ABHB9fqe851FT8UNGyQs2kp",
  "key20": "2xurTKxXwbpHwD3GWpZhFs4VVzPsoS81kgF1PvrDx3NqX8CuwENhuubU32fii5fyqvuVwmx5ME7nWFjwV4wkTxwb",
  "key21": "24cTkFJUNBGc7q6Vqx64EsLtrFvtmrvYzZg3zFaStKR4zfvszCkGk5KHTzB8xMQeTnn7vSp8JaVAcR2t51PLDr3s",
  "key22": "bpZf3Gmu7SfsQyEKVnvdYLaLiA5nnaWUN3ohv1v9WPMunbZeSAuzGzSootSJ3mA1k7aHLd5oUkdwofKRVhWdk1s",
  "key23": "5tAW6qgvq74ZWMXQoEJqNWGYhF3oHrvXQL8ytoBRvGrYfN9e4mfkN1eYvyWmqhP5iYELXLjND5aHhDYcW7Zd5ZZ6",
  "key24": "44viGxkbaf2UEWjxs7x3QRWmQgN6V3dd1w6Fgdqi2J3T1w3ZeCJyV95LEvz4Af8L8zgSJ7wyLCWZtc9N34x25EWP",
  "key25": "4osDgJc93F73Atz1g4NgMmA1hTaS1vxJCKcHF7zta4FHQ86z1otEJZd7Zq2tsCgjU4CaE1dwtP62wB6c5J43fnq",
  "key26": "5TTqu7wSM1UFAfb1mAZxntgdyWbRz4CcrUZY7YeRdK3Yq1EUaWUVnrFzUAGWWqEeRpxMnY7tg17wbe672DBhFtw6",
  "key27": "5cUggFX7gNnYpvpR7HLmhrEPJppKBViJQ1AmhmQz2upupKPVmdPHYYmsVVDDE9GMvjtbSRg9Mhfw9d7rsqy9BKP1",
  "key28": "2CmDfaixgTxuGCCAhAKBamP9t3obXqGuWS6jSuRvw4Mjv9bmS6CH4MGDM3JX3MXFRkduCiqMhZCsFbAYZ4HzN8gR"
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
