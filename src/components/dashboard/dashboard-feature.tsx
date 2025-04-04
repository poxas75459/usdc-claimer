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
    "iepScSSQAqSA9Ygua6U7uU9bihfct2T4Fi27EAe1tPaSk2PVFSxoEiePRvnnp29dWPoAsXc2fmG33AVwgA3chdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zi6vrq9jxDHoLNCHoEAGviVnS1EcsK4ddZhkCxePB3q9RGVh3LcAnBs5YMzdnpRyGNG1d71RTyTUUf6UomJMCri",
  "key1": "4TyJzhULMfwvGda2FRNxamCde1MfUhmW8R282ZXPS1PPJ7VaTMd6PaxMLczPjmy18EDBLqaz3XpVZmjuqb6Br8qW",
  "key2": "3T6GomiJMFSojDLDsDsh3AhuYGczjibLAxurnsxSvX3NFP16QGAj4xTQXmnazscLp58gMF4jNicBxL3mu636Qgto",
  "key3": "5XFp6Lk4cuhLqiA8Ak8qobhoBYjr2HS8vPxM9kdA95WFcbbnwUTSqjwuPqT9vUkREk2MryryDPdxzP8r9Hfa7Ncz",
  "key4": "5jh4qKnntmEQe5mHk7Fx1afaCTjW4fxrp2AQXWkmJmxF53UJbGQCN6Kggkg3cAdAFmGbvGzbCHLBAw6aBZQvtDT2",
  "key5": "5Hn9Kfu1eWFgJUs14R73RjHn4gFP723WsGEyYandUWMgj9PaAyTZbUErQqukyYrMo7oFAxQ5Hehiyoy82uyKTon6",
  "key6": "h3eedeNWjcdMddcD7gGNrqoHtUMGenzXWtNr5nPE71HEmxnJZWp3nDf7f8qorCVKwagCkErYR8ipgmo41L8xWma",
  "key7": "4iPspsQwTJXPgyEvhSKLP2B4sBFjtbxUsPyaVcPWDW9CFAbT3gqD9GLU4LNmgFP6KQZ3RCjZfU4Cbqr8mq4BHmZp",
  "key8": "3QojvEf3RVvNrEgGgjsd2ZhSkoNJPc6thLJmDPH82chFQ9ccStePas46pUcctMaNEGtk4w7RG2jLcqGPvWabM1LK",
  "key9": "6124pmafD6tYAYj4iYojNbf6CqPXZhVRLutR5DhkS3Sy28aXQdzW416oLaMZqY6UtL9w85DiRtu5oAzNoEWfey4U",
  "key10": "2WdJgrtydoH66usQ9Hh36NmZynoVEv8dL13s2DbeoeiW8C16XEm6Aropf7pvvamhgc52jgsMpf9G1d15Yhx4fkU9",
  "key11": "2Hekz4QL5qERQbmjEKWcNkhyr8e1ntJ6PmXL5obcecZ8C2XZ3o2c4HcPsgEsq3dc4tfD1vQgmqrbAcbJySxQWefG",
  "key12": "3GBA8mRCcaF59zyeyaNWsYVXTWpGE5YpaqWxqn2yzrUU1UsGCQkTtekTHs82VDUdJTpGMZ14pehDA2yjsJRX5JLw",
  "key13": "4bSJ9eZZMKQQZ7YKmCYj3w356hZK6sDk9ZEdWMWXpxFSFZqYw5egAJT41C2kLYn4cDV12DZMvRRw3ddBSvWsWkU1",
  "key14": "3YdW3xBL7c8ZQPyru4jkeEGJcdAPiAwPJXFB81vpkEb9vziH5KUQb76bvzQtNyoqfRCqZj4fnm6RuaPaqxd53fzW",
  "key15": "2PfUxr9qaV4N5oVowpWUPKanCMdapjM3NS1uvxwLRPCfZVQMTYJcnmR8yNd3bnq6wGcLTpuRpdh6wDske6dYpNvh",
  "key16": "3mDyzd7G4zyXNFwBsTqcmwzfq7VWZqEZGp39JggcUjDRfN9j53Z2sGdWQ9wWV3JEWW8FhJMwWRGoBgFTNQyghX1n",
  "key17": "3AuMx2Qk3PeUMoyrcGAvYuqXP2oh4A9vNn156EGmbRop5yij17RXwFenrPNa58qGwZuiFnU911jdDD8emJCK9NJs",
  "key18": "4iJm3GZtn8W47kqknx2rEhMLMjmg7RJeT7mMh2D1GQWdN79wBkqnw7XavDQaWtmj82cu1pAeouWr6ktz4stGAKmH",
  "key19": "2jYErJKvLVEVRmaMgRvfJZMarsWX2EH8UBSGDC4hVjWyK24PMERLYXwgFJHVPfjCPmomLp3zsCq4nuL6nMQZZBvt",
  "key20": "5fXB7UESvraksEPGZrt8HCMXcwntQgGpHvkNRFiU8g5JZswShmEFvcuxtRipwDnHfX1TLjQtgZ4C1M2w9LWBYK6n",
  "key21": "Ju2TGTfU8mAWPfHCAJPNJRcSgBp5ESNquukhqRJdjLYFUxXf4BssXnJ36vSYwkALm9xEaLM4uJXXTh4QWUcyYBc",
  "key22": "2S4hLeHpanhKrNpjZsyxUWhNootWX9kmeTZJNN8oXrNXuXigcUXZ9v516h2oYCi9FKoRGoEYg3LN38vLmwTroDfz",
  "key23": "KvmRKbpZiXRWZo1fNXranc5WCgKnscH2k9VRNY2xJZ516nB8Wt3GJC3F9hpEVtWfueoUihV6tLsAZ3dpX4YsnY7",
  "key24": "3exBiP2ynDDZkKHm3bHiWNTzm9TtrXP94SADxgAjMWvaifkUbYRVHmhqq9WnTvfjmQBDWd23KtfMpUuCJ2razGu2",
  "key25": "URwyvTRCneUyJPh5jZxMKNUW1NkL8C5MQJ2YXvU9bhrsGfA1C9v9sWc6N4pWmUnXCqb9iSWdHnR2kTRJGhshBJn",
  "key26": "5RahxYSAQECsdkMmp2kyNXap4yXDTPcaxPL7MwPymT9uC1gpuYsLHky4fnCoCYVp2es3hLTMtbWXLr3vZXiajgoS",
  "key27": "3eaYDbrZhreZodC5gLgdtDADidFvXxNnDC5wAUXbB3Rbt5cBW5pydQar32QVJxYSVXJcZEEFkdRgigfkSc9cn6JT",
  "key28": "5uMyQWco669ug4yLa7Xk1cCth1GMNmGNT69aq9k1dRxBb7gGtTzfmFsDNKogiMoc5M2berQBBkJXTiB79ZBo5KB2",
  "key29": "4HNDZ7kfj4sDowWYPcXfkSc7FZFXAHhYMp1U7oTAFfnnbdg4VQxuQstuazMHjZoutNHmVgSGoXp6WNoMkWMkJCr9",
  "key30": "5ao7Rhm7Rp2RaFcr9c4ryPZCCAXE3yThPKTQKPNwanrUR2P1fEMA6HnqFgPJ9aK8RdJF7mKLyVbuWhKJV5rd4cGm",
  "key31": "648qwUAZo791tx2Sgp2oU6LFd9F3f2yRL1d6pKreCfeKKGsckyYy8uxZZz4p1f1KKCKDF6s4hhiwSvECTYX2Mj22",
  "key32": "5YhPqadsxCTwJWhd1GZ2EG63M9xrmzMaAzYDP2F9jZSKqwj2zR8EEUCMY1tK9BFixNm8unRMsHjQPMD7bMuzf17Z",
  "key33": "3pfrC4ZfCQtMsud9779opqtZNNE5FX52569ThRK71kVacSRfF51pPhdXaGqCQQrpPp1b5fxFPU6AakzX55f6Kaud",
  "key34": "5t18GEzdPnx22zS2x3MiSZ5cE2xpTSY3P8tr63ZcYhcJiQAjEu6Ecvx37uvtwyYJgMoFmGJVAAXMoLpQihPR4YMP",
  "key35": "2XRviVJbAWDy2hXroLCxvn2ye4BEmxRpaviN86GhkNts1r2FzceWhSFiLMJvVyKpvRNibBeF4fiarkLDxkaUrTFG",
  "key36": "4xpHgf8bzUuSYNUoNaAkoFvxoDj2jXpdj6gC71EU33ABhsYYhZf4MA3hGtPGVK9qU5LBUzJG3LAxRuZpwPPNYJWq",
  "key37": "4vX2i4vteRC9wZbo7LEyvxuAwsbeTbFJrfDjv1nKMxScsh74RFveSr7sT2ZdGdaQ1YZrcwM6LMRBmyKX6dKTDtMo"
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
