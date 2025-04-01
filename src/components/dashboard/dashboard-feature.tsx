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
    "2nwmA7MaS8mjUGqBCMHjuJp4s6DR8sMApCDkGq7L13v6hpEPeuhHuNbzHeynBZecJ9rUhM7u9Ggyfbxn88fiRawq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5okWscHwsxB7QVCwm53QNn1sqCvod4witvgTWTF5wixWKi4QGdFXPAN82t9YLVu7JaRRMdgeUEsJUMX5qbd1nx2e",
  "key1": "2qtrdCi8ABq1rTnMrmmBpuBWNqmKG3wtGJga3RYZzJtKkwFQs14vt4SxfKu6Xpoz9LndG9kZiui8hfnJQsj9eUfC",
  "key2": "5NKCS5YE35hT42GsXBqrrH3qyDKMcFYt17BEHz1nWNnrWRn278F7csZQuozTA5y79VYDFZvwZd7UZ947kwsG8B9Y",
  "key3": "3NaJH8oZuVLoZh5q1macZx7DXMnkHtuhBN6F4HxdKpgDAWA4R8NUidnCPjGTbeCb3ZTxrnrxbS4378bTSL5UvTGV",
  "key4": "8GuG3o5fufL5DNMSaxTwF6EWJwjMXG3s9KRLqisRo2ECSxfiGtKvXSrehLsNAdZcRJVZ9Fx8DeoBtWUkVoNqGqp",
  "key5": "618DFK7qAeKT3aLc5ctCeSVPDvUzsvMYswkFrMWTA5nKgyBnnxCMg7otXSdFGy8fRkRKKwfMJW8vz43zrJW8iJK9",
  "key6": "2HjepH5sE4GyaCCzxu5FwSrsDtbyheN1DsgWQDiz3nSbDNEknGHGCgwgTTQyhPoE6vDiWcY8sLGYwyh8o6buC5nP",
  "key7": "6uSP6rNuBpX7VDgvYCJqnpoLRE3A7tNkejq1WH4jRungbxUSC9bMfcYoxkzHyufRdBguQXRTe5JEhfDyHYZ7Rr9",
  "key8": "4awspRHSpwLg532CQGbbm2hJodbJVy5QsmccM87NpU78vSJ67JczgGpYBgt3p8eN7FW41khxhR6MPsdjDKw7VeNp",
  "key9": "5jx9TghHkSzovD7dKvde1RpK3aMhwinH8qycdXTCQ5GRMgcmeMG7FFmvYoLg8atKyzujbScKd2WT9WhU2f6Bz73G",
  "key10": "51ms7Pxmk5Mf646jZ2XpKmcGBnEqrH3veqcFZzCefHqwdraGdv7TfSzQGFRZfepCFuY7xZJdk2Dmji5T8wHvX2qY",
  "key11": "2FkVXxDDRyDfLBwjCkzZWtnvnSeryMr7uYDhUmwFvKRomfXfLit9BVfWuCa8Qjhx9zi8488VqFe4WBdaLCTkYE8w",
  "key12": "4aE5JZFFZZGooZ9iskZqXT2RhCBnBF4gbDZvTZXEVNL6EgCvtjyp5tm4GzqoaPSfVCf8iqyJHiQiZxKPrBnHAkw6",
  "key13": "m8NyacyiB7Z2kfcDR647c7RJ1g3ApQLZrSxUx4PkSqTWenFFEuJdYG35NaJWx4jFboQkYcJk1Na4NHxmj89QzsW",
  "key14": "5zTQ4uc9zMQNxKxgXYH7GNVEtrEadkaNjZP7H5t9MVef9eywgniDQWjRPiAjPo1k2UwapBYXWGu2Da2nmLwgZBc7",
  "key15": "4P2LYpwfzk28U8K61x3Fb5Ki4Qr5yr6dyz6Y8JSwF7K8krrKdqZ4APcipZiCT9ZgZ4yfCPHKZJ9Hi6TkpkpyTTwT",
  "key16": "2KCd3bS5j59q3TAWAxesx13MRWE4jF2qxN8Ha6YYWhmGLUaGyCjq1Q2v1BVWD36bhc4whktpSUpdcBitN3ceWcGt",
  "key17": "2tNnk4xfVqSd7AmrxL9UGgjofb5oCGRmzQDkAjagwuutJdAfQy31iNH8AoKw6E3nj99MQ924gSsCbjXAfvnkrP31",
  "key18": "4gqE9bJ81EeTjbWTA2dkocUpRb4i3mZekpNexzG18gniicAsMXh5gGaaus1YQTt1ocdutGz5KZtp2JULpRSnMDJL",
  "key19": "57ysZjjR3fC4cUJ97DKFD1L5ocPdga5U7oFHhH3yqCQN3he8RN3txaRveCwkeLfq3uKtwyCG6Dj29LtvnV3o17xe",
  "key20": "ymiNqZx6r3UzcvNv6de7USeXkonqwS1sVSKy3Zo6pDeFZWuCXyMvhUjHwGFw9idv1kvRgMbKG1dnvro4haNWea9",
  "key21": "8P9eq31fFGqFzahpPhegUCQJg4pU6QTAAAFMtgEFEe5dU5nBp249HsgKN6FRsouim84QaykvBUF46vwBVMaCV8C",
  "key22": "47uD3sJqu3GoF8T63bPsaSaHG31VYvAtWLAcEqmADN66p2BQKS3KvmDPotu9Ae7ZBfYP3YeR6TxFagCXg3XbKRUb",
  "key23": "mZzneBf252NMoggemNYMpKXhD7uHU2zH5CEbNRooksE46qLknFL9NsRDY33g1Bb2E2Q9QTAVSw4HQW1LfJurj6u",
  "key24": "NBgC9TxJtFC7JSD4iyxDqjQixrh9cjA7Ce59Mq52iAjaVi4nt1ps6eny94t3dX5JtPYitujj9AW9G3GeuY7vP6f",
  "key25": "5zv8iqE1oufhuVhmv32XCLu9K1Y9p9NGhzz6m1viqrgraDgYzX2NrsKyPwtLTDMB5kceXfuya8pqm9QDnz3ZyTzp",
  "key26": "66VQJmtjpRqUw8kZyW7m2sDy2VKzdSf2ixZ3j8ng1PTtRhXYZ4NzpQt7Y4bGp14ZVxDYHKFjeDQtFRHFGEYbr9QM",
  "key27": "3NJ8Smp2m7UgPvqPVhBRsxQxi2GVB4EavEsqgv5CTGkG2g1orEisR9P62KTmXSLs6f36JqHcVCND5Yu5F7LZ7WDY",
  "key28": "5UG3mqR4UjtoVZN2Zr1dpcGLAyxamcEFW3uZvd7pimkvyDsvK4ESKufCb8DSFTH81wDKXEchWmbAVcxSAdrQgebG",
  "key29": "4ZbTp1VgYyc57KgWK1JVu6AzkAv6JfDNivzmVMkDhpUd76QtYGGZKfeYayhPBAycxUTBm47s4RyW93YAynsVQPtv",
  "key30": "5nL5m7C3CCaQeGx6S2szAButEVnAaNhvruaD7izVxg2kv8xvhmroioCNj1xUswUutMitDnGQxYeABHMprrycCEb3",
  "key31": "2qU92xNLrD97zfNofXjRMVEWFBn7h5bgPYQRWHsfo1imp9xYz6LSuXLPLrCPsq5JvR86kotwS9RhYVuRJt9pXNwk",
  "key32": "qpMrzqoz3RAhGTeNzoWbPBszPUtcxLqjw59CTsPQyJ4jcpKAiELYViTLNKMSgMRANt21jfpKi71K1qf2UJzp4bj",
  "key33": "2pNAGtLoFwAcMLfYArjXEW2Nx86sKdPP1icgCso9BTWs3HvhwpbgB81DAx6hyt5mHCDwXEhvVs2Vxw2cbHYDUVv3",
  "key34": "267xFwCVzuGctUpRsg1BvhtUff5jFWmwB4PAVi44RKpQpigM9rZNVQUtGqiQHCeQ9ND2N68YiKDUjvo5pCDYcPSE",
  "key35": "5WaMLFBGPagUkFiy3qaHwXXiSXYSJEnGHveBtvT9sPSYtLjp7GTKRNtmQoK73DrDcnMH8GGidhSTGibx6EWmg7Ge",
  "key36": "4QD9v1TtBeUpn7Y2GNK3Qyooqkn2MrJbT1vm4GFFbSmY9hECkA57awcdVPAe9myyL3zxjoHt7S2diqkEefGhheuE"
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
