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
    "5bpRoAAq9HkK7ve32iAxczXXeXNHQsSrERbC6i9Pb5e8QoXqTzZbzXEX8o78EAfPXjvdAPr1rRovhmNte2wiTfec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33pdctch6MF25WT3xmMucUctUmo789p7jtEs9DMNWB6UAHjZiULLwPJQgDvPWU1htAFhMXD3VbB1XqnmnHkbmr9M",
  "key1": "3BFzNmmmBYUtudPa8G8KXHMNGr1HMjB86e9A92UmhYN73ub6e5GGCo5QiAPncmKidrKeLtPtDGFUq3QXkd4K4Yhc",
  "key2": "3XinHv8WFv1iDfauVkz6s1po97dhsQWzz7mybZcf42tPCE4tNVWfLfcFXgyT3jrddHchdE7Gv2AnvCR2T4cmgd7n",
  "key3": "2gmR4muXqmEjmdaLDSaMFo2HJXFgXePZKJVnYGSZL911UJ97ShBG2jB3e8HMqTgMeGk5DycYiF6JqNd4npbhJiVw",
  "key4": "3Qnbkka5dG4DTjMQzxNP52Xm4vCTsz45QueULunfco5B52tnRC3F83TaFjjMbuL2PfdUng2S4PbB7xfe5CHGn73C",
  "key5": "5jzb4KVxJz1fCen8NwRUXFaBdMmKFnqEnR9TCvaz2oLyYxYAzJGBNvDSnsrKKLtQWFWxLJ5EALTj7gaHpewiVUfe",
  "key6": "2U8eVE4GMymXaZSrYUZ8XgXyKe7b11Epik2go5xDuQdjyQar2j5WLHJmRHvNsS2dWvZp34U25XLYP2MZg8SWAB2o",
  "key7": "2nARGY26X1pZv3nq8YKJk1d1fbguE8Xm1WtFN3V62aTGBhnjnig14oAaXXYqj4Vs4tYP495QV6XW3nCJY8VfPKCH",
  "key8": "4PNnHCxtmLmkNKeT7UT2cq3NocDwbx2LA4H1VT9sKiNg2s9HjrbFrsPzG5Ktvw4iCTZ3kUo5Cb43vdGwHrHyJCs7",
  "key9": "5RQK1cSY3DdTbzk5BjWf8jZ1q7mTeccHY3U9mxg6NbHygT7vMn9T4ikav2iUgkG5x7V2T9uQy3J6v6P2a4CwymGJ",
  "key10": "2CSYQ7LcXcMGX96cbz7msV3i6M2rcGUaewkr5hpw1VwzmiLsrurjGL1Ptajj2h2WmnQQbtBmxDUNxpA57whXZTti",
  "key11": "2QhpS7hkEF7eCuHiy11tfG1G6m9NtVEDfLF2h2zokngiknqegi1vb8nbHM9zbom1qA8XJ2JCQfEe5jT3APwtrscY",
  "key12": "3gVsqvEJnAy48q822XDQMsmEHYnmndph6ho3AbreTJdhkcQ51CL5QcQzg49a3uSvvxZ8K6R4WmtfBSo6nXf5V6N3",
  "key13": "3itpmkPdkg9CqQ8jvTtJSUwXPgiYan1UGzX6JfxXEiNmKiQTT5utYSWSpMjxeCE1MSianHGdXbByAgtGoDkWjQGA",
  "key14": "52efrGoVPYUPem2nHn8PmL5HH9GP9XY47TxyqUahV89ewXqP7sEjZ46WQ7Dnf5UFBBZdgJu1fuwT9wmM3dpmrU3D",
  "key15": "3JwmwxEtLg832p1WwR5aPj5pFyxL6VdFtXGrpsbAPHtYArtvUd6PuVKic5dFf71upV9QkhZ56Nsiu7cm9xrLXPhS",
  "key16": "2S37ppjnSzpSSQ9r5n4814oQcR6FF21oGAXac8KRTLTzp5HWadHXiBjhPd7K7VJ4WntAfpdkH5HxtvMBqW2WbZc9",
  "key17": "3Sn8kKvMr7Jf9s5G1b4Te7JrY3fTh9hfH5kT3cNmPqSqEi7adH54bMpy29KfCbwcvWAgVD6PLLG4Y6nLY8nc5kXi",
  "key18": "5mPdPQp4Ap1Zmt8byYZ6NEpTSykRsU75bRsZ1kKRqGLf9nuSHZssFcMWP9tyJPrz7D9UUCPRvmszGdDb2srmos8k",
  "key19": "3RVCkVdLU2P8FUmSNViNpU9KKe8vrsyQymacPuemWCrk4eo1QJwas6fPeFZ4Tz4UJ5oTwNLTeYEycGPvBZMfFMvx",
  "key20": "5WWvr1UWoutFfVnj41PeBDaVQtcKuW15t6mpCSkCjAUKpedXETvYGQrFBesZ8BFWMjZAnyoPucgVtQLeb85Ex6NU",
  "key21": "3f2KXtYXYRyJVSFjuVeDwJhLjLCXXs2QfQThSXvnE1mrGVfXtPnrXRQojsqA3VJHDVsGJ14aAdshME3qUNYY8HtU",
  "key22": "5qm3bedYutGHkYq2k62b1VbiDwVSw9x4bVJE8tTKr5JgjrooMckcjAwSdMhY4hr2jUmtZGWdndtBzXBd9t4stnFR",
  "key23": "4ZrATuVU53FoGNK7PSNptjg3NWApHQQcR7PKp17xiFvf5PPmaRrCup7A65SEWbY6hUbT1frRgaLuwKf7Tqb4wwuD",
  "key24": "KPKfzXKwHBJ4nmoVvNHYjrwPfVAHVNjDsVwbhF3aRyuemU5LKvbkUxhcG8N41V9p9a98jmBE5pksCWkHBYmDjzc",
  "key25": "5TGMynRPfwvj5Tepzd7xHeGJDJoGqv5T4ctnkhHT6iT4D3QHH3vN6giEXVnrK8NRnptn97DDi7H1mCgKr5CNw6V2",
  "key26": "Eb9LH9RdGGQhUbiWgfmLCpBeZjWcPmPQyw6SSdhCucqDr2YdufVqbfV2YqBXfTTLFAMtDB3QYkgw1wshTDorngQ",
  "key27": "5L52oEuium1kMQnRFz6Wryq1s8HQFGw9Q19vcQRD9GgzFt5hL8zq6PuqwijEFiUzKfLm6Z6Yp2mWMqd26BufCtMn",
  "key28": "29zVfWrdqpnT5D1Zrc6HDLJ9ZvMCJ4ZdkikdMNLYCSuCaiCPHTsJfL3GK5xZxy3MG61zvCFzBUbxj6pJUSWz1wxK",
  "key29": "giSGNe2VLw5Uat4whWqH3p3uzNPh91Rt2Hjf21vDUHCZspvAs9cWHRJAAXseQk6WhcTmBYjNtN42ykDW1HWNJjX",
  "key30": "2N4Ruaw1bTfsxZfMJ2ceCrPjE6r5QUh9vsnvGwqAxmGTxAJqavon9oB2PjsVUPvH5ZnSeuv3x9XTSWGSm3jvMx8E"
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
