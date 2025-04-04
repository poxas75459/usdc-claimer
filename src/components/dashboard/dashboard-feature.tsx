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
    "52jetnpv58qv6MuJMLRZBnyZUTsCdS6LLRsXX66hEvurHiyQCWtqH9vrXKoU9QPGqSH2TXCJ1CV6iLZQiNxCUBcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cyBHNji65mynp5hAAWPefmMQ6ELrgMHbsECJsVzNiS1NNVgUjQU3zzVJeGX965AibETwsBQ8gTxDDUXNkZNBCi6",
  "key1": "2jhUek5ru6QGZNBq75t3q7U3J2jTGEP5iThZWRrgesA4Sc9hbEJE6NFx9yy2QgtgVRmnLFBPbSiNbS1c7X4ADKNw",
  "key2": "4beZaPPpQE4ngGJHa3enbLPE4D5Wa8xUnLh3R3SFqXyvBc599GJPF4rD3ZthxGsvsBG6Euo9rAy4VcXkhLWUy91H",
  "key3": "drrRku2F3LtcdfdVSUhDNW52Fwkd9Bk7KZuno52npTgAzLDsXRUTRZznukn3q25cLtwxWb4WDPqPSbyX1vZfwhR",
  "key4": "53gqYL1Dhf4raLQUotf1TV1Tj9EyPMFDBeT4swkjYCmy87BAbEACxVpeXqBwYu27psjjDeWDe396grgpze4J8knd",
  "key5": "5napxT2Sztfzs2refWMKtNYJeKscyJVQRoFJzkoR7UZkQ5Lw3y4fCwHunkURVYjuNNda8a7q6MW1bEcPPmhTXigC",
  "key6": "2mdTSbaG5es8WvRMgJaoSPK4vfhKhDFKJp4Y16w29apyeav1xvHt7XMhuLJyHJoHqfLg6gdJPuAWBAN4x9Pdyioq",
  "key7": "2jSZozi24JJafsRsCSDihndQtCH5bSmbstKZLQeYx79KACYdvMuB5hFe1zr4xxv4CDpzRmWdp9AWvGdusCMsjVpb",
  "key8": "3FtRFbYbf7cvzHbm6cTEdZketfiYATi7ggRcJSgGPjyxzPjifYRK4ftzBEVGytBoBVs4zUrV4JCgCRDCVRqNPrHe",
  "key9": "31FYMZeAXDWkN6Go14wTGHY7XfFKxUNKUb5RMvygU5FDP8mRYBuorXWSY8NPB37Qy9Qy4CtmXU53ooakYkrTd6mV",
  "key10": "2GmYu5NCUzz7YSmpvkmmjPCtdM3iD8fcZiSCQkyErrwUwngDqrAxTAm83wRdgbbfEZ6GkNWzMujgGq8QDSZBZrVH",
  "key11": "62skGiBx6ksfCzGdpTGaHnkxfx76U26A1odBEhy1ALpKmL6dEXEjnZ3TwaBgkxrRexs2kGBBvQ1MxL51pkfvas2B",
  "key12": "3QJogtJEWdUUTV51BhBKwXMcqHjtFRLtakjtwe6L2etVpRATUSPrq5Y6uUS6kGRaBB7dpBzciPJjF3Ct9iqcWzcf",
  "key13": "LinSgR2Fzbps5Yvv9j7Cq26w397JyBy7EV2sAoWDDifrSX1WVbQ7NDJr3GzH7RDKqcbx3fkLzsn2my6phUcFRKa",
  "key14": "2wYZ2C34tVTPagkFn9qWQUxTnaLnX7TVq5AwR4SHDVXSuhb4UB9zKafK8c9WZZUtyKpSj3oa6rQQSuQATnTYdTFd",
  "key15": "tx1DgMQMqsChPHbUEZpSXvwC8WW673nQeCiyH2mn8MmFvuLQjcBqDxV34e4FxUAz3UEZD7TX9G5A7FU8F8cgXAt",
  "key16": "39d7Kd8Y5F8F7P5UivwEvLmiKvgVRMeQ7eSTQYH4Xi315dud7aa8cbg6V8icNLDgrucGdKYzzPi6yeQULumvC5hS",
  "key17": "3ktv5KPJ4MjyXDTwnx9qbh14tofC5xDyALCeLRTnWvuMB6qeLzjPhUEFkafRdPdQ4KPFfXHKhcJ3HjZkgfGP96HJ",
  "key18": "3LuaNeeFGtVvx92o1spPwQcULDvekrLwQr5uPocNzh4d5qeAdV2tqeF5uVJCQ31kCzNfDDGbPKLDrpNT6rT9mzw2",
  "key19": "WfwVNnehG1q4vro81u3z9RpY5SAqrbWSBENumbJhtk3p7HMZEXWz6k35pjTKeZyhWi7D21XTVb9UnVdVTXpDiVy",
  "key20": "3jrurw9rx5hMoQ5bcvdqTymseGL1eWeYVDz8rKX4UR84iHeFJS1xdmBs113VMtXa9Z9ZYVoQhLtfvjpVdE3FwJag",
  "key21": "2UAqofmjdcns3Kp5Hpex7vLXn8PDxQBMbouMJRHnsPMDKCPzx4reDdsKm2KPMvRtgHaXUSkNUwDr1Whne6Z6J8n1",
  "key22": "22WL2LhEheM95ufz9psbdY21miCqfZitzF5QWTh76GH2FNVWseARniyXWFQsvZyR2yphMNgUD8AoLdVrJveNgzSR",
  "key23": "31UptAvmgnQz14dE8nkcihJNM5CzHMVjzBsZU21FaLunt8k39sqf4RSRbS9j164ULvVQbMBpLdjhr1xSRNdUQ3DZ",
  "key24": "4Rq2bEdiVSxiWJLndGZgHh4U4LwPNLEoa3JTyhhQ96mRMR3WbFKHNRanoX9PiN2KzS2HafdwXQbtqADijCjT6Y61",
  "key25": "5yJiYq4qdQsKKa4hr28TeaH7QacLvTFTfcd3dnVTFU5vk4iaQXhc24NJj4MUjon3SG6NLCxB3vJN1n6jcWxbsW2",
  "key26": "3im5xRkd1dC3DmoA9LEybXp383nJw3J3Xx9soFpzfd9R6nytcc5q97EnMmwxC5PYwm6LvGae2AY7n6Hnr1zMZ2z6"
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
