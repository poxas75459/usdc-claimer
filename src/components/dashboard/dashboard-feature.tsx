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
    "3G6RSfhjivMoY9vV2UfUExpb8X1CEusXF5rVYo12Ky9rbcE8jhUeFTmywZ7gwsFoQqP79KmvfHDHe2NiPyft6RxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A21SXknruvcUkdJGE4dmnsgCVS8nFs9toSuxCaEhYDYZXxsmarHX91RL6CejztZ4pvENazjTxz5HpWad3qcCJVL",
  "key1": "4cbnogJtkbH2o1mg6KKRk3GZQZisfak4G5UZrAW88YZwyY5jqAkZqhgwvezYTEyET2SwY1XFZuAkgdttCsjGKgab",
  "key2": "2ej4RgnhjNuHfhdA7pxwuqB7LcacDPCpkd4LbLimrhnJJh2vXm92F1NGa3T2HxTnFtM7zfkrKWkSSsJvMx3AyyE3",
  "key3": "4sbNQ9utMynmm5hqf8Nj7d4p7BoMpJL2u9swkQv1pejWKm1pGbKN9QrUfCtCiQs8hLdqTYxLuqNTfdCg4KnJ1qdH",
  "key4": "mu6jG27zE3gLqQrqurCNfKVeZWZc3buGuKRB86joH1QVwZgDaYqbGBWU5aBrjU9tFpgTMSdeGUow53ZKWC9Yoye",
  "key5": "4jRRJFezLDdeSwbzX5YfAY4jvq8N94NAnHRCgMFR429bEykBpc8N122XPN3fGzKs1PaeqVHRwq2tnSEyuRNBwaQf",
  "key6": "41xQPNBt7sPf8JUefREmbNx2yPYzWRPNVNj7KfNCExRPX9sv16aW7LzsN62tgFbW8rQjWD6oEkqmhoVz9TEWjb8M",
  "key7": "4YoM7gGS38sV6MG2VKmSGm5dunMJx1Fvif92sqzQRRan9Sx3fpgAyoXrxtTXfERbsaMFgE14tk8QwoNP7tqiVTLQ",
  "key8": "2ezrzcpev8zBGL2azfv8PxsLVLzjkRQvKQXn26TyWA24jAimmEgZMPQzveTutiT9Vas6NrULoc9UxFXFfr361kFB",
  "key9": "24KCGUBwXfBepSKad1qKevm53FPHMq8BgLWGpRHwq5VAzc1CZ8mDqfkoQ9XE3sYfkuqan2zjRXYeY6YaVAST4UsV",
  "key10": "2AbNAkVoAo37r9KYPkhKEaVGaiNDWDFXUk1R7fR7GdY9o6X6KMfLYJU2PTtGGAFd2FehFE5pMteBpZtmwEDEhNna",
  "key11": "2Ez5DW7PwRpUqAor4B18g1pu6sX512VYoTRjXugAVb2WQpHrHpCPeEkfcPC9wiL8LN86CuwXcPTUduSLh5aMEn1P",
  "key12": "4efiNHhxCwqPjZCoBWc5soRHkL7bJxGLxEREP95AtwkuZUX95bQS4FHnbWVkhRwTrirjorEh4sdRrSdMZypzChnP",
  "key13": "3wST11DtaALy6PmuyVRczYNpRJro3oj6xteMuxPGFi59pA7zhipfGW1X8kmmrMwfjSMiDMbZifarQ3S9Cqb8M6nX",
  "key14": "3WNHfRsqp8PZuwwju9qovSJiNuai2U9bL59uNtNGyf7vvszvs9c6YZhpztpdEVdrtaaoecaeYwFwrhmkHUwjdXj4",
  "key15": "4EZXUR4WDa4thtPZ2aq7gtDjDF14A7Go2eJQ3haHDQeW2M5Cr37FfpPFwwbMyDfp1j1ocj3hS2upiJ7Nb84rYr8L",
  "key16": "2z3fxiP4JcovVBJteTuXxP6KGyDaTmrGLpGyh3wyCf5h9TV5HFWyQEYrjsVKip9rhCkhStkvVekpAgqSvmcYXhP8",
  "key17": "2yVMXQKQGUoHpSx7ysA2X4X2TRFskFwGnKXqwoJTvXZNDUWcWVFfDRHzAXhSPKDmFPvE1Y5F439ytbcrqcbcQBHh",
  "key18": "4Y66yFyeYAGoMN8WWee2ywyytt3aVKSUrbA1D9MXQPHhN1M4AK6eqdyUW1YampVZL6Y7e1ae9Cg5vnGxs6CbwA5Z",
  "key19": "d7a37qp95WEZthtvjULitT3mqxkNuPAaM9gKNnJGJSatNB3hFNsd7bLYFBk4PckzbUVQSQxhTZsoDwN9fArvg5Q",
  "key20": "BRtwP82Bk9daZonhtPEFLN3tJmZmE9rgk5CQsqMo9iYHVTdsbYqJ7XXsrXaU9VLJUfbPdeGGiGYcruHasRLiSog",
  "key21": "vC7cH5vD7mKEnbCovEhwFFXgqqFgTe3acNThgek1ouB8oimX55i6MRxsyqNsJkL1VzYpSLxYKqUo2YsgSi7mJgR",
  "key22": "3ujxtyHZ6b8jkwJ6rbjiBpFYfqe4nZhsCx8nQAbcw4yBgrm11RZw2NTbKCxG5Jgt7FqfAWUXnYVWLfct43YtZmjj",
  "key23": "4NxzuBYvC6udtry5eX5ctZYqdG1toHJJJZJCknnyAYcU5u5GxLKh6pKyS6aZgjMo6EvjpgV11JRjKvenfjrP3kJo",
  "key24": "W25cVkfcAYKbnEURiR4HuHU4ZmPV4phJH3pwZFM7XSex4yu2kvivj2KGm3reMGBscKgEPwwtHiJJ6mWtzjfMnKn",
  "key25": "Henxraxz2xCGYJsHhmZzx2h1FSTxFVSdwAABcUc2CnP3cGv2qHCDzg5xzWRSni4aRoUDkE93cNzGnyotoDmWLT5",
  "key26": "FZuz9L4tMBvn8svV9y1MPPvEsVguxTyoA2x5dPRevhJCK6ZMw3Ys8uvtH1wJexkyq7GDxfK5XtLKMB1NVTnFeGM",
  "key27": "zu5heLMdrok1pxDELyqNHFnkQAEDsg8yxgN6SsjzUKABUm4NLxJ6NJfYtMQ1pjYJCj1cBdoQAMxteQuj454DcxH",
  "key28": "mkvxQRdNVakSwQoCcQcB9cHJ2tPDTG48BZUMbfXG4u5aAoBe7cM8SgCHzBSqBeek9AxySHyrj59er52tXGWb1sA",
  "key29": "4TaNCHw5uhQt8JBH1B33StyYzKgXwmsb9xgwy8FnAxXpU8syu4ABxur6pbPvbpX5WpXCkBAvijLCwApLPzQDYdYx",
  "key30": "5dgqik9CPNvmWgZ4LFz2supxGjfw7sgbb2zMCr19AHKdRHzWXTjKbU3aRj3WSkzyhctM9tPxA4UMmK2qx53LqWt1",
  "key31": "dGciCG6aUu1LEFnc4xJLENWorH1gtD4Jaw1uq1wqjvGSjQwN3GSvCJdrZjqskQWJuHfsdDHwoHzMde9mf1mQcyg",
  "key32": "3BMzPiiTzwKBNmLxEX9fRyZx7dszDMdqUSe9ybTbxQxZGb7t4QmaFDuUqBMd1Ts7pZjhbU7CjxBxmz9tVbY9vfaV",
  "key33": "4vjPsKMZ1VV2LiVGiAsr7dUSTTPYmhejwEqUeNd5bexiDQvg9CmQ7LYGtaukhUDDg8RH4BgGDgrsYjkYV9TF2p7g",
  "key34": "5dNJBf6ytSyyQeqeEzUV8svUbu2p4k3XE8gJJUccHh9b7psTpKobe3KQ6ZMTbbJ242Aoryua3Lj9YusKuKob9AMK",
  "key35": "RYj8wiqJnjcEVzgBxHs2ynseBvwBTZEV9bBa2BzVTBAm5biTxJSMe4my4MdUqBwZynXKoVHGUCK2KbrihHmP3mb"
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
