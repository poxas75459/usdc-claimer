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
    "5rmTsRRjjuNiYubRcGgr97EPHampq8qTqHbgJg2dYvpPhAuLZo91YK7W8NSSpDvJMeTN1y5ZcJJZEDBb5dpvgh1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o6ZgUxuML3dB9FsjhbfH42F9XmLHPXiGRrm7V7uUhPNdRDwFmzfAabrnb8C2XSpMxLAPjNztwPtxx6dByDxuwBT",
  "key1": "2nKeFJsG3CMzA5YNTVSim6TCp65K5xV7uyMgRsYcnfJuUTCBxZWGaLM5BXAuKqBtd7JPqb21HZdFDp45qH8uPXhk",
  "key2": "EB77FErDSV6URKeeqg1NyoE5rzjshzLw7LMbYS54MZLfRLeXcBbHD2wM31vmsL1nLP8Sk1bFWF6WLDN4ju6fQmv",
  "key3": "BwR5oMYJiSbTvbdADjTnJ4hnJZE8nKRcitcsrSS8Mj67UdXRn9YXGmpMEuMqtVT9Q97Ce2rqis9obqPsvCv1uQp",
  "key4": "51LvsjtzHixasPJNWqz6wpZPUXApsLAZMxxk6GBXDi2AhAx3hrZ4J8t4FtiPLfm5F8nb1vc8G2wtvjq8bB5PDDur",
  "key5": "62iYkTggTuVG1nHyZfC33xzUtfQyykSkooJzMTmAQdyhBjvKmRCNek1SyiW4hqmfPR7aqThsZfnv4Z9Td8WwL3KL",
  "key6": "3Co2AdG4xZQAnR9e8YEaHEyPXjdEpfLaeyKgpDH5Y8RyT98qxod3izRNqqGb5hhsFpAQ13KQP4trL5wSzU5xUXmn",
  "key7": "2rU5qTc7rAZm9i4EZ2KMREpZFhZK6qow6NTkFHEAb5eLsQYxfLcCJxdxKVEfjbAu31nz8xizsZYoSX3Lx3hhRNxo",
  "key8": "RLiGvYsupA2Nkq18jps9tfsDFmsvNJcpuabfR1xK6rcms6zYueBMdo7qFgLrBTQ8fgWZMKwfJSSKHPCZqa4eCsi",
  "key9": "5VaJ5cPD2czottc7NUG58C5FeLFgdn3prtZoCvDaFDi59tEkWgWvAhK1qTYMBGXgB1qeZCs4Q3NQyXGfNPsHojjd",
  "key10": "4GWAdRE6sSXtfcd5LMQ3edXu4J5gsefJy19w3sJBBgw9cMqf718Vurrvncxoo8KVPCxGMUTYhXSJzWaPLdb5xrrB",
  "key11": "4wb3RPM6NcLFZkBq2nzZKA3krbQAP14LWDbymC9w7gfQ5hpFxpRzB1tBhWDpjwrmwQnhRrzW1TxeiKT2hkT6GSRx",
  "key12": "3zpKiDHXzWnqSqiKW1Nt4zSJDddZ5SvxRtyrzmhZhg8fhamPfVXRu1ckrGUT965nk8fBAV88wXEtPGmL1EWzTVU2",
  "key13": "XHPw99X8rSQQ1hkQNqY3zFZyHyV1TZmhsfDZtgo3A2vhH2JapnqtjhoeGuu9eyKvHadQK6nL61gQkE19kvQFMGV",
  "key14": "3E88f4qaiXUeiLkxp4KDnuZ3heXSkeoQKWRnRocesY85JtmqQ8snmBRLKazC88bXGZWevewNGPYPgHpDsCxcHijZ",
  "key15": "HtPF18WJ1FuWBrh6NRVJYyprcSEsNkuC82T9DzZpRq2xVZo2akijMtEfpYVKgu7x8uL3aUjLkmLzZg5P8dVe9PP",
  "key16": "4rvYFYCCHR4GTxcYujpxcJQnVopAwTj5uxd6JBAGKMszEzsNASADLdsS9ssLZcMMvuZEBxqUuiBDD5j4FZqbTKAA",
  "key17": "DJT6dcr2rskiVZteUEfQHEmNpkLwPW3pMX38pAeJ2zng3xjiWdAETK63GTSi3LkJcJeMwDM79CC15Pa9ZkatLDr",
  "key18": "2sJWW3wSifyhSF44hxF2h8B2QcsTrTcbzD89KKcbKDDaHQgHR25eGEu6SuJj2qY3px18e5StHocmMeJcGWoGdAqB",
  "key19": "2CZYd9kKaY1ENDD2LpdPetksXzhopAkAtFxf4QmgXPgVvqVuDWyhTQz5aXsxL5sUDvBMievuNDspMxdgj4LngghV",
  "key20": "xNqdRNnZjMzimKXdZxQWKtm1QnUKqnAoR6XgD2nsRhdWzi2Xosy5wWJTg1CmRvomsu75ywRdU5q7UDoQURs2n5D",
  "key21": "4y6yeVgtKMBVmtATZAQsRcsy51J3xiJEfTGptkqLtwgvo1YfPnWUgLbsYUnAfagZ35cNcq1fh5g6vpgQP4YJU8zL",
  "key22": "Yy7ncFqp2aZ6dHShsVQUgJGLVD7nPhaM1WQEyaHPZEt2Z7UzmJt9YAHwd8d3zUTfkP3qdRnjpcLL2gqhbEygZwQ",
  "key23": "4xVQ4AkQuwY4vqq5xB6Y3Gqd2opmHyRV6rgrPGkAL6RVekAzktrQoUWq63YTrJ9GrgAEhVpNj1XDB1PGTzJTukKZ",
  "key24": "yLksnZCqmtUKwaCGRDEavopNWe51K1uThPuJJMMgeK1dwbSVWvxQw9eGATsNFMeP6vkbHx12PDosYvMuBrcBEWB",
  "key25": "45y3HtNZP1cQN9TjUHEgdFqDpXHKmTtXciLtyMkXd99ZQEH81yxbNPHhc27nRLrKGBCVV395RxBLPsmQREKwZSKu"
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
