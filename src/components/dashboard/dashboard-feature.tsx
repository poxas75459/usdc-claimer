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
    "5dMPKUQWDEaKnpgbc8bxuf313ESbHmyhmx3ksFUjzYCpGvGkAJvBQdFcn8Kcv8kVY4vLfbhKgsupWe6fmUX1V8SY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ou1y8fioVSnkT1NEridiZcUyYoSj2SrYXaRMbFH2aW5nfSJBZbBRD2PzBhC4eMxE39mLwkkGGFcLrk3UecLTzAC",
  "key1": "5zPExNerzgxUYte2dHBdKPVM5d4R34KXiHv5CVxuk5kuRcZc9C9NB6BLCD3Vr4jQydStwTrVtukbFYfeNgo3yYuv",
  "key2": "TgJeUoEQfHMSLSS77BtpQpWps3NmsunFQMFRWCL5qZhhMc2D3A2XMxwuLgcy3RBPARiw5dZ9Wc2DzZ9rDDfBBTi",
  "key3": "4PshKXwwYHswP8o18f7XkFH3mxoMWfMuvPpNqXac42fm2SFkgY8kfVvgezz9wg83hmiYGY8k4w6PxboEVPEZ6BNQ",
  "key4": "4nBmgWjmqgXymtdJ2ZCFgLwr8K4WLLgoM4tx4dYTpsZYacW6X8FXrL1w37szjUdPL33cFsCckvtRnsYa28b6aper",
  "key5": "55SjXbukECgBJEEFnTBwCVbxKU5VaRcUWdLrquvmJnNNrxVoN4Qf8eg6zs5ErXxQPiaWudQF3gLBPNM1YbrLDNqN",
  "key6": "5XXbcZ57se8TnxD35iTLNoVTXy1btsttFUXtpJhpmqAa4uswgb5X6qWbEma78NE25chDJTFL9Pmjz4M6kfauCVo4",
  "key7": "ex4BUCQWzcTdTb6M3EoGTnHLQQn275iEukSN21puDEagUDygUu3pfZUDY4b6PWECa6gsi5mPanePiFv6EMg9SrR",
  "key8": "3HqNUmx54qfUtQYdepJHu7FNv1qX6Ldf3poH6UHGamuFkuw59MAEV4Henris5Eaj1s5QQkLNy9Ef466woD8vF87e",
  "key9": "4cV9zGDUW89i7oPAcDUVXRKBpUaKVYCQLM3UBwontz49P3daVWNwNHcpRBBmiJ47ZmHxVpdcYNYCnrUcDyzmZQ8u",
  "key10": "35woZ7D3Z7FXUfrAB4YMHPeDNmDTz1BuuuNMLj98d4w39dAXSmCJzYXyjkdbTu7HBL4gZ8j83sKi5CLy43ziztCr",
  "key11": "58j247RZ269N5dbmMUSJfidskDT9Rh3inRB92tVEe3eJ6b8beuEPYDgdTBgZsrCAbZNYhGmqKoDwkJQqvwpUHKR7",
  "key12": "4kAWVHBYvipD9bLNGrde422A3JXghAZX8JLDcrkdVxuSXxcVRwEsZj4rKTLA4FZZWsh5aNGZVoMQqAew9h6rguWh",
  "key13": "5XZVimgQPiCGdVQwzbKvBJLsWgZe3Gd7MXnLA9wC2mkrVuKnHrhTvhp48AkTa7FSVzeyT8WXHvLQdei4pyxRcBap",
  "key14": "4qrxzpTukZFKcDw6LhqVc9tcqKDfqPKkZ3wERD821cCczrTFbwApt9dNVSLx8XryPjHQFhxYi2yRAZuyCc1ierKt",
  "key15": "5nK7cj8DBZvjiAavnrhizzUhYhaWM3vvTZYuMVYXY2vzwLX3nBXgu69em4rEqtt7qDYskYuRMEPatLW6pvX6Et8a",
  "key16": "488CFMB22c1T6yNCnGCzLne2cKFYQ6buUxpafuW4My8Ypua37AFXm2gN32WBjL6UZTKPDpm8eKQeqB1QcKtL9ZAe",
  "key17": "3YKQdnrDEYwVfrYHLaXQUpHJmKwyHAtgB6MPCntB8dZ7qGVfix53zRcxQmjg3LXrMn6HSxZnT594JqXh99GgihB8",
  "key18": "2b9UAipxL9ihF7Zyj7AFhhju1471bDzCvxKUZFQU26Gd6a5nLvKBjBHhu27Ke8VUWSftJ2wTYXefeFqWszfEBJ6Y",
  "key19": "4FDon5Hy24y6cicRA4FRjJXtyEjZSYFCdqUSrTLxnDkyK2MRpZr3dRZjLcqK8mBh43GTGDWBg8qx1DtWxJhDUS15",
  "key20": "49uJc4fQy8AWatZ7ZkU7Haqkn5dy6AjdxhtqBHEBpwEJHNqkCt5xV4rN6upHYWQDme34HKVpHtZysjLuLM2NBtnq",
  "key21": "5Dt3sxBkyZ9R7RBG8WJ4mSMgo7Xro17oa7qQqqS1DBEYtrg6DoBPRNVxB7tLzQsmiRxbkBvUNdcxSPxKTme5TMN1",
  "key22": "48e1gZiNGre3nGTnTPcFA73bQ5pu5MAYhSGL6S7FYmdyRnhCxm3thi9AMHNMqXbf1WKpwdXPgXmpJCyHTGwdsNi9",
  "key23": "35AqnHsqZS9MfiM8GEE5bSmNMMfWSRuiKN7R3f2EXvazY2dXADrVFBJuXSHEAutGTELveqHbL3SWfiUhgeZfu79N",
  "key24": "53cEWpqASgLFBV48TTfXTkza5qNqAnKyQLx13gezxgJ3WK8gv4okcsywesCyKuf1SMRpx2nXDWn26RqNHYih64Qf",
  "key25": "4g6bAchbwtSZUtuVJfZEptfjLW9Z3TnNY69vMbu3VFZLRNZvShkPoUrr5d2p7usjymVY5bMmxZtq1pzFD2xJcbQb",
  "key26": "5yf6vWfURuFPTCfisKziQS6VHra7gFCjjD1GWh89ANp1MtEZxEkucQbgtCuLTUU2WdufuXh3rnYj6hUG2Y4gSEWu",
  "key27": "eVZ8EqatftxhiFpJXcGvyZzjUxvesrH4MMkDDKzQP6Sj8xg7DN2VkG4XwHYhx2ENRS9xePdM6yFv3iqWwg4pzCU",
  "key28": "4Cva1R2Lx2AejoqyfgUH5Z1mbs1CpKn4759qCxm3EAR43r8GsBhL4o1TZe5Gqy3PkGXkGwCSF4SJDJuewv8zkdYh",
  "key29": "QCGxS4b6muas4HZmfwpjR3t9TodmtB22zexV4AbGwbZAmEFf19Y8JAs5sYDKK1SuFPTfZ15ZAehi2JcPBwEA5B7",
  "key30": "4vHp787ZVXY1notQUMTXoVGQ37x7xPgHLQfDybyHB8gJfC1b3k3L8qcqE2tV5vEXu42Ea9j6q1SQLBpcHWkio8Xh",
  "key31": "Vr8kuFbbd9pPCtEkE7qsq1yM9ocisHr2aeX9jQQBaMfTpdcs3USuGZHYhNMqBuVFGiM6WBtLpkJTXjxs3sWFtzm",
  "key32": "3GLUmmFXe4EtWx4GCxnK834xkmpvCTkgNZvmVgkHvw7Dh4s8va5PA1AN71po1W5mTd83KuRcjmSG7BzyebFdB6kx",
  "key33": "2F7xG6Cer7SeWzNxFDctgxD4vpy3Pi8wWXJ26SMv41AxmW41ARDaU1nNn4on2JS7QEw1pCeRVujLgsLEUQVrMLW9",
  "key34": "4Krfaj3BHYcPJkTK6M3283vD8UQWx2DT3Mb9gQuxEHxjb8mEgyDjDXjnt8Vg6RiZjKk7LXkydXkY6hRYCubuJGEn",
  "key35": "AXYfXXXQFK3uShfup3KTgq1csWCtxVAvBo8UvrrPVnmVz7sgbCj6zpSefMK3VMM5MwjyJeoJuJ3tyLZ2eb5rC8Z",
  "key36": "5UebUMP4ogqyDFCshuzG8L7zT3wtmGky6NMjJiW7CT8RdxocbW4pAmBFTVHjqXZsjtFXSffu1d15xHsU3zdvRdpW",
  "key37": "gx3c3F2CFGQV5XdNCidKEtw1S3Yt1NU1e8CWqmkXVSv7tJLY6EwtCejt9NuzfAvWspYPZLnLuUtcpo7PUokHGqo"
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
