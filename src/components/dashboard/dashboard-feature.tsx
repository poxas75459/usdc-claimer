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
    "JJ49pnwftWV3wYmLcrRsWLgUrEKxiZKyCDiF7QmckbwC56zSfS3cXp87HEy5kh3cMBmT49ooJ1V9Lu4hEBjz1y9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23ZYH3QB9TWRLKTj1TSCuYc135zLfzDNcAZjRNk3YAowmMHhfoTUvrggTWEEiBKQ4NqZqK5YA7cg4QDc6HKzDoEA",
  "key1": "4vig45EaWPXdRPkUtuZUFJk8yL7CZVo4tGmpytJuuzFJekjQkxBVLDwUFpbEMSwWU9Syb9gxCFsCSKmWoQvPqFXZ",
  "key2": "etd6Z9FkpVj7mPMEDm1eMkhEaDiPsWtgdY8SE45L8D9VfGtRtgusG2bm2r3ncLossh8Bb14A4cLbZyJnh4nPCeS",
  "key3": "46N5NXoBtaGJC4tCAhkmMXYsaN6N8SamELFjJKneTgEuGe5e1NHXRtZELPkhDQqFAKgutk6LXFNAP4KGbzuhaJxp",
  "key4": "2X1iRitmSHDXjxtVP91YVopr9ygBkd8Q4wj7VUvvGcaSTL3TdXz4Srbpx4kTKCPFTuFgquUjbdJSx1jUn35ErudZ",
  "key5": "2zrZ2eQTp3iHyHgydcSr1pJd4nU1UfyTsnKMq2Ts3kDJUEr9r7m2Wf6B8u5pXPYmcAhNzKKGqGSz3f2BVDTrkfwh",
  "key6": "3bGESr8pLuQMAqfCQKh26euydYfpuVwF7S8dEyjCPwxfhpiECCQYHh4Rt8dweYoJgwxs9wgdJwvP5t5hD5daBMs5",
  "key7": "4FhehXze8FcT4MvREMceVEBtEwRbFVnWCrtFFivHePgzjeaFwDK4A2PymFe5Mz5UG1eB8kqscRQtEipZdGfpjDtG",
  "key8": "yAAMVtujUSYPTaV7V2jthBMoEoBxLTNbKBpeQ7ZmyQndvTw4yHxrNFEqRCXLEM5zexYJfG9Wfah4qxKNr4692wC",
  "key9": "TEF1nmwTDasDmBWWjCmQwRXYLs8NQc3tuDi6V8faPHZvWGLzidqmtmuKGsGjKsdQiepmB1qMEcxTuLTCmo8gs51",
  "key10": "3otTvAb3PipGbYGohjkVSUpKy7ZKq3Gx7aD7MpJMcr6pDggKm8LaVcuw5WkbU5sy4P1VwyfmorTaX6qmuLzAR3He",
  "key11": "3W3NtwoNsrRHxFYrz6q6dDFdyS87NPdxHai4iuztt16odaH6rTAFEVZLhTtBGMehaThFCBENWsrNrPUnowL6KbBx",
  "key12": "JB7DLrR4qzosUWcLWy22kaobhjFDuaK6yyf9C4kZGY8sc1iApbB5dsUar9AQnzJjLjspHr8T2vquEDVsnYJkTDZ",
  "key13": "2vtzUwPs45MikGtrr8H3ZrRwAgqTFusghSfGGe1ps5JyQ1vh68gxKgiRrRUcCMfaPcTeQN4652GzeRSTUJovWbge",
  "key14": "5Go8g98XpUU2ijhse61dwSrr1D1jeTmb9kDZo7FynVWGhdxonWwX74429LVA2yCc2iXusLfrJPvs23haYuSjDjdD",
  "key15": "4nbwn6t3ZM4pGqJox18n9F1D8b4uBNtKkdHxoJV9Hj3DsDy2BdKSfxVydVrtso8Np1x6JVYAf1r1qP6pGvxqLvaU",
  "key16": "2gu8NYsCn1ZbupiTRd1PG28LkLnWyPZKcQwdyDoAjSVBLnAjMG8Nna5aF4NULRpq3GfFVAR849J67bnyrjB8sD1h",
  "key17": "2QRQizFNgE8wJg8xDGT7QQUtfpR6q5yhbV4DKanUisKW3qxkMApea6MmzBdCAV8RnSvcZ78dvQE3ztDSy3KvLk5o",
  "key18": "3ib7dACT3mKRTgYXoucqEKEWY7AFk3tA4Pg7Qfx8y5v5fV9zBvvdKhEG4MKtETQoHVTJxS2a9ipLnSmZH5oZq7Cx",
  "key19": "bJCEEcHphidVrGowSJEffFsCvLtkUJvc2A5v5kmz4W1NKVbL7aPsjbEf7unGBnuEYMUVCcqYqHumDfrnw8NdqgP",
  "key20": "21WvDiAdzvbaRzvNDu896gxSUDJMhbGoJkCKmPWTrdgR6JBQMqCso4NMDqzWkRBSK5qgVNKG1JDKwJ8q47f1zYyY",
  "key21": "4jTa7exqm1oeJszsSYnqofLxgyX85ECNQmQhUtmwogVo1JvH94Hr43iFeEZZJVT6dowPfumUJECu97CMutsu4onN",
  "key22": "tnDtC2BNns4Fykpc1FyX9F6WwH1on5tEwhSiSgVMJg1vi12cTXFtXonaP1vgkHRuXhXNvLoVYcJjR6SDN12WU3n",
  "key23": "57ekTpnAvhR9AD82dSP4tmbUuuuPBrF2GMeP7VidNgGQAL7KjHXj5Jo56dfeycAEvJSDbgqX4jj8qVj6KyuTay2Y",
  "key24": "2RX7Gbi1rMfQwGyyh7DbGkATRbG8fry8HtoFVruCXiExb5fe3eJsmHKmnExYU8rQjcVEF6GYnsVg2FxpW1M824Bh",
  "key25": "4sTAZNEJtfDVN6Q2nZAMFdJcdEfYvjDFRHBBv2rdNXXkWikhuYopKa7MJmNDJvgVwRQMvgx37TL16rsxr7tu5svZ",
  "key26": "5eJYFNL4ywEETnWwEBEWU2g95LFbE1aL3DMyRRKp1bU4SsQWrWY3WPFUDksCfkKh6xeUUUS15u6w8ovfmECk2wKn",
  "key27": "56gjJMNZbx8qNz7pZqa1MtTHURn8LdVeSwPzTt5PBunWx6LRxBRwGeffBGyfPTNAvktgQ9Wn1qpdNqLHYxedb3Ft",
  "key28": "4hv4frToyaDQaU6FdAnAmGaBv9tDCWtkMAQQL8WKivMdPgiyDLYQXkodME1vfo3Wiq3AQ7tXH1bFgiat8qtiiS6V",
  "key29": "Ex11i8LyGTuLbXrd2zmteVHqiyb5nsxmkfvnRA4KXq4KovVnavC3vbp46hxPg3a8Ht8dDWYhtnJj36DNcumHtXv",
  "key30": "2gF6LuPqrdBp28bFphSm98Pxs37j4A3JDXE8mCrwWc2e2Qw1ywcRikfdqn88RSxE381VcqGPUNwCkQBX64WHoC5R",
  "key31": "3E7mhzAh3dXRZT2Dg2qqAPWSLgFvgdBRj5552KDCxw3gf2fLuCydrkmkdZEdUVGjP9sv9pqLb6KNJwiZQcu9gK8U",
  "key32": "35W4uZkVo131d3Mvv9ECiyFAXg1Y4WyFR6dVTRn7ero7Wt81U6TZ2C2yGXsDLZBL9rYc2UjaA14aczBiKixenTwu",
  "key33": "5nsuFY4jnLU3mfaTJXfAkPsvDHKgzEgotQpnkrLzBa1xGeyhVrUDbNRXyHcHibAXvSZnAcw5wNUYnRspaoaW7p8K",
  "key34": "3yxKXwKpS8HkexJ1GxAiSZcD8TRfBLieUcSfn4LCX6boAnRtmZg7Q3tAiYZ6oAscwHVZok5Maa6Egye96yA7khD8"
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
