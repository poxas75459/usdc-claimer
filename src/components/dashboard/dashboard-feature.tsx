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
    "22BnB8SCk3W7bwCHYJAMVMHuojPyA5HQan7kud72j2tBQbyrcM1knn39HeokeDtWBsv2aVyTP1rb1FWR7wozMJFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WsvksUhJuDbxUr1CaFN3BFZHUedR5g3zAKcsXjkX23NA4ZZrYPhy9mgC5u7PgSHZWojhuWTcmvzvhCCHmrMWiMR",
  "key1": "3yu2NttvqGSR6CnCb4a9fUwrCz4USiYfb3q1vtqe4xGbU8eogT4jAH9ZnUHnUmu4k8PBgtGCq9XT8xswkEXHrkh5",
  "key2": "4qhKtbT7WE5saLBpsGgb73DPjCHXqsQz1dmDrBMGET8taL8LvsH8g6VvzbtDPYZqCNaK9ziAMcMuaRaC4dg6ubXt",
  "key3": "4eu7tr4E7qng1gAeVJ16fhjP32rfJqMTrq8NfNoXg8tWFSK64vY54RqskoEePRqFo1XCgMVr8ZU39SRKvM6zymu4",
  "key4": "3i6KgFkkgRjkCUh5VDbQmMJP5nDy2zXpv2yg8WCAtRMs6zXarpdpsEZ8Uv81RN3VuwiUyKVQXiHVbvxvade3AxS2",
  "key5": "3Q47ZuQbsmPY4VbqEuD8o3gM9eTdXLHqyXxFMhJVpERufEUGr2V9hajN5SoeGbSXrLExfVyeWVpZstz8uzryREQY",
  "key6": "5VJ5zSgqn7NmpVQ9xttu1riFDvwyRBiT9gwsEHVBR25nJRb8vvfGNb7yiU1mSQgWyYoUGmw5L3vSmsHXbAWwGkUD",
  "key7": "5pxTp6DQchqu65YuJ1qL85HhFjaokkZx9CknDKz4yRc6Z94e73DWRM9rJJAYYXWaQZeka3wTnpvrnGnvVtgbkA6q",
  "key8": "4ooJQztg87J419CN7xw6VrZdsz5z9RRpJuYLadB3CYHVcs6k1v5SaSuvne7JLAjxoJ7YmYJshsWYbnGVnBKBXQuQ",
  "key9": "3WGDrw3m4JANfHFhn84hqQS9yLovf9oUKcF6JzVBXWe9azVfB4GcdYg9L8rGFZuES9QS8znnhTwoLt7Pf6qnJJxh",
  "key10": "2fXUY45uGeEtWkCVpzvr1i3LTLopzb1wBQ8Mtn4aev1SWXHzFiVZxM9A596JWCoiZiRrKi4XEiatoby3gxL9V7rs",
  "key11": "3LoCQyLStXwNa7pCFkCBcVpwWb7fTne4Qxavbim2zCbXbvqVMXX2qjafW3nfyWfmRHL9NpLFCzNvj2UgKB3VFFkK",
  "key12": "HK9JHKEdPsZLmrxQTZErqp3xndy6m2vsBzLcRAb5FsdDAiL6ytbSDZsDiWX5xWkLM7NtSLWoPsp9H9naaBCopQB",
  "key13": "4dZWpfMUB3vyWqLvWtp34qeR1XCYmnviK8DvYuyXXuMVL824uDNB73zF58N7VWWguE9euv9DDXSVidqxWcd4CREN",
  "key14": "6ctRrtEHoz9y3KHdwovKb1g5t3bSFVcGd6uq1aVywQVUrPSTKXPpg8Y6qwTWYpmjSEdNn672RGcuJEWEyxHG9oX",
  "key15": "3PH2hFggdDYgSuMrw2ChQmgNP4iV8qamxa5HGv5ZSXspdGm1DBPehySPcppbtDS8BskuYoHucmhe7S44p7so3KFB",
  "key16": "5XFZNP7q6bVSyPjspaq1WzfsxHUJUhJ4irBayEdfXyabTP78r2Lj7SQmsYFrcentkDXvERzUFnjK12cBdRJSGJBt",
  "key17": "3jbNH19JRWvMXxVxGsDXZwwxdt4jpVHu2Rmy1pwSNttNdWy8SWCLfY3W15BAe4WVm4st1TS7jbcFCRFypyoDRb1P",
  "key18": "36csCS6ijrrFa4Ecc8i5qZK8GwWph4L2n75uJHZKZi9JfoiLv7uEmx7gTqqaLzFasFbASsZPRNJ35FNyb3wmwoXr",
  "key19": "22ooByuXQ8RvPL6r8M4cgWTcYmz3VddWJiRc9HhhGHRuKhfruVcFy7RReDbkHJdiGCu8Z6nPn2ujt6MQbJe8WivM",
  "key20": "rmPND7r1vP1ZkhK2FWNzjcXjM4r4xjPMAp5UhKAbWMebv6jhhsPdKgrJSdfspDYh1cvuUtguGuPE8VHAwmEW7gh",
  "key21": "zcNfYyJnisEBzfLsZcFu9pqDmHqokfRDq64ZRJJUVmWLuNBxudXFP2cP8uES9te63d3gRWs1bvPKDYNDcQuvQB9",
  "key22": "4UVDCR3VnkrCNNYgYwKPjknccaa1og6qSacWZBiG89GzZhFkmNLKgdkdQbv6684KVBopQ3aS5SQaABY8gZU2REHU",
  "key23": "5BBknHveXT1hrutcmhfuBdU5zBCMXTZ4pShj1Bok1fQnmSkLyrBGLMDY53ZHViCp1mSDdUf33hqvFLx1zrLDSMqJ",
  "key24": "3EdXvW6XarWx4kjYvW6KL4YFd17vJgNrShc82232j4by1AmzcPmAg4b9HLe19gmPJrQM8Qsm3tZNYuUHnCz3Stdw",
  "key25": "23pwAXTJmbHgfjGn4vyV5Sg3UB3bLAAQQWfEq8CxrkCtjpKuBs46QSMn6iisqD4VdWpoBdNHrEgCB8Cfo1gvaYPD",
  "key26": "59cfEfUZqorkg15oU7S4hoA6BpBdjVTje6LxeQ9G7HAN4Jm36jREjZncQyhWwUjBWoMF4vCVJociEXoMJHbFAcvX",
  "key27": "t46ZYjBXWxz5MuYDA2CBob2VQ3CRveffzCY73Uz62AUxfmVEtHJksQtsF2cGn8RaKsucRzpX3BZLZXxKgNDmcp7",
  "key28": "asUPzPbGBWzmdkZvLh1GWhbcpusmYUPNF8cB9DrjY1rknJyX96epeocHX2aLZ4weBFqqeR8iNCDZLHop73gtbKr",
  "key29": "4vPX3nxLoMfSbYfU4Ddn8iDJZ1ArZiquzUoaj7mNgSykVV97CowS64NHnXwp7JNngctRVbTuNpUXSNLAazuKAcjm",
  "key30": "2qUJggKosf8o1cRNUBnxw2z9MZGFRHiQKY4ARCpBLZFzLAE7DQPjhNTHvkKxMY9oG34yCiDEByebRzpSUzYkYxjr"
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
