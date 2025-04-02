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
    "4yZ8RWBXRQWwfK25Hu1938Ztp67MF1zUfSaeheRV8VT32k5C7ZRz7Z6c7rnTWQBGBAfzAZiMBb36AjyaAahC33RV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RHt9eTCN2YjjUiTgFBiLiiSUqa6BhZengDtaibTtbNAzzE9KmxJ83AfwdfNNHJn5bEDLUS4w8YaqLdbXQXiqiDF",
  "key1": "2pqgK7YH1ecqkLxophRm588PLMTUKvqWyh4oDuZAgNn89kcCkhjbvEjwCihqkgAhwRGbexTRx7iDsgtBW2gZobF2",
  "key2": "4Rgrx21bQXfoFKQ3Vq1Q211XxHRhrszpVXTpeBvRHraa9tS3kve846KWhddqNoSwaiRx8GdhN6tEe98nSRXMJMuY",
  "key3": "45QPJf8NcmQdXnPLQ8KZNHaYbNHsH6S4ynVK5iqrTePbJMdDhx1Vo8YM27ce8TxD8YCb6Yr2fMwELxa12yEGWUs6",
  "key4": "3CX3RwSDB2AWM1C8hbz81M8V2s8kgwvcxeJs9isLE1qA9byVfTFGu8f27izTfn2NdFpisvRZvdHhAxLp58xaDyPE",
  "key5": "44jy3xGLwWUs811VJk9D35UzFWdeFeH8VKq18omkFw4ixNEkT416d9d7BjrXe18TMbRjUtCNcRM2PGHzYzhzXTnf",
  "key6": "4RU2u8YKVXFJSFvETrL98j8CWurgfBpZsYFDY6cVvDDHGJA6koDQQite2cmv3RJKVchVxewcHUbXir4W5ffH85v4",
  "key7": "28RJKCqMq3iCDei1hppdEEpwGSiGmXzRpojXtgH4Gi7tSEr9mXitQoFhoCtmsDbztCiTM4kMowLq8btMtWw8Rnih",
  "key8": "RYx2cWPHzHCqyUMag2sGgkL1JmoA4ZTF6kFAGW5H6AD8BL2pSQ3gMQtCZyqrpRsXjkKGsM5HFcP5sRoieBRMQo4",
  "key9": "29xeRaoUomXFk9LQdBgxszMe1cZUY6Zj7eVT7a3AiTq72ZRpgBcwM7GtggDMDCfWs7FrzXaSVeaC6eRzoev3B5n2",
  "key10": "4UaR11haBpRVmhHMSdKfgmFtHoEW8e4ThFDrTNiLpGxcWQW2GML7Cyh1fumwNiiGBjatpUvn8E98bibZNvpr6BVm",
  "key11": "595YS3JgpJwZfK8stmLD84tP5L1TmSjRE2qF8aWskHzxcaqikw4wrcdsUmLgarz3uLnBxxVXYDBEMJkSu7JGm8qQ",
  "key12": "663UM15RCztQShDz7V27DnV2ZyGWXGn7hfgNe666mEA9CWLpo9Rtd1fbu7jyyg1uFsLL9Bo6RR4Ae8J8A5SbFaMb",
  "key13": "2T2KnZ5fAegdV5gmjBFBXQd4ptwDynoi5ddUNWQTbjD4fA8JAgxJcgJ9TyT92VzXtAZxLW21CqJLHo8JWyq2qS85",
  "key14": "37EiVumXDx2sDipUdQZWs42mJ25xyp37R7kWPZQBec6z6PB7dpUe8mKiaPxtzwDoyxZufo2NTEMzBv3Np5bvzvAU",
  "key15": "5XAzzvBKbqC2p3jipQTE2yXsLvu32WjSB3VMU23jnaKeEcT8FEJT93H5dZHRvW7WTzmWYiVzCyzC4BteEiaNareU",
  "key16": "2eiKsXGcyLkBxgZPvLp6Z55E84THd4aQzBJcsLoHBsAyajdMHYT1Fwp8bksLhLcWGC6ATPssG5sjcAsa1cNa78Zh",
  "key17": "2iX17x8GuMTBA91EBixBGqeBJjU2LLLDdb4sy4vVx7usGqazr9UJAFmsNyrvNEXdqtGkoT5bfqjzoA9WftwYXNgt",
  "key18": "4YAPbsMmH3wSSj4rFcRLsPWXKj94TpYc9SHjF4k2GxAfWLNjkatERAyxrFjVckusnHvpbRpkv3MWA6kvewhtQJv7",
  "key19": "3jioqo3qoStwMKHWyZtwbfXbcgHjG8knFXkYJJ337qqAa1TpeyQAFFPBWJQ5iUdsELBw9NUMyiBgFYf1eprG1y28",
  "key20": "2zj7wnA7ALkVT8pGbieekGL3HdimuEYwjxXzgatLUkRQeFsXRNyW6HidjsqVQRBy6BAvSCmdnjhb8aZSx4Mf2g74",
  "key21": "5oWjVph3f4nS7BdUbH99bFUrQ1yzhnkDc7MdAgCHXQDjnQe68rhUEAXTxGTD9V9fQpqVy5j91kmKNHnEAcf9gxjC",
  "key22": "31SgUGwsSha4t7wDpAm9w1aS2iQVr4MQMXjxcbXuTCmtxdu47Jy2aRwaa32iBTQLJKUiGY7fvcMnaCtaVKbeybdF",
  "key23": "2GUsgVK4SiW9HKHTNHKXvfbUgDknfMbr2Wz6FSZkpNQrZZpXjoaxwd91Q6y8eKmjUES1bwGD3wzrQsGdBspZJQL4",
  "key24": "2W8fxtaQwhjDcDcXAHdNrFT8gk3wq2sSKxTpPziLs9hduEzfcKJAZbq599xW98KkGjtgZqJNauTpePxm1sBHru5D",
  "key25": "3AkBrzBEYSX9WVX9gSNTFE9YKyEddqFVMsDuQcpuqemQTtT3aboFCt1RBNpfvUZwBTBGhcUKpxAnycnyAdwaARqP",
  "key26": "3LfRm16xnchBwcvpfDU3XGFyBC1DdtvmF6bvHERHyg8jaV5ydoCSnTh2zk6iWvzhqHifGCQ3nLPeo5DV8hK2jmVu",
  "key27": "sMZxw4ehRpggVxqFZKSUP1dHgzBCRt3pn7Fs99A9Vghau1sz87HtzGsnJgwTjVjAFt6kXwYH91winZva1xszbXd",
  "key28": "57jBvrtKTudiBdUASqNGHxkZMWCD3WWK8Me3ewvFMZ9PRTUADN6srKkzLnKkkaWmcPKNTLLQa2UGWjX4KwpSr4yU",
  "key29": "54ztQSocYa21m7GgTAMYYA8o8kZh6g2qkNGvcyjt9k6wGtaYyDPV1oPkPETAptj2LtRvX85jz7UruZDna14VnPXK",
  "key30": "3JfL4Hwnj8bKf5VVSBkNWxzZSNX58ibPryTTYcNcAJLcWnbkasAX9zXHvyFpjjLDzD3PzGUDQP1yzo7GYasuVekf",
  "key31": "3C7DLSmPaxZDn2zyzrbxMwUUbNN98wpZ5XVUjx3rMZytbF5YCbkx4EE1oF5Z2LxgNsHp1d6YphX3MN1W3o3J71Ts",
  "key32": "5Z1YFYz8FUYTK2CJWKZmWzGqGSfCJL5xSyYVWSvroLMzGHkcJ7bakXJdNDJvRAG7wwke4K3VHeTQGmcTBSNqG8QQ",
  "key33": "2LRNHHwCXJ8zchDGVmNPASMYkBXhp2JaoDRxUdEeZdHv2YKps6TpCRyYThDVEBuYmbju9Nmky7Q63w4LHbv6kT35",
  "key34": "9zkDzpQQZeYUBSmH9Qf9VhYMZJGYWaz9rg4D1ReNNChecuuYKAVZ65kMQRFSkYvAiPvMRMczzKzHAxdHMpvpfNn",
  "key35": "5NHyQK1brirrfS524oYYtWXmzvUpQaHnyapTCkmR4BCghpv696ZT6nHbyJyL7mJWx9e6qZ5ZLDdiPzuKN7iudbZD",
  "key36": "umoyt6AD6MCeZ9hepynLbtNt11v4JrsvFWHhK1UygVJtwkT6pjankp6E5WafWcSmPvzLf1v1JmgspoSCV4Ez4kk",
  "key37": "5sbbhQK68in3DuEEb7JhkLVJTnCBt1cU4h8gHL6z2D5AKAA1dxCo2dZ2QEW9VENzocW1urs6poNBun8SpuW8B9N4",
  "key38": "5F6XkvwhEYQWKfvquSHcSh1xkL8XwuRbbqC2dCXbE6nHYKsS8idfzv5MimkfRx4zgWJhmNvsYXp5DAW1KHkgke4A",
  "key39": "2yXfQpC6eANidPWmqckU5Bb46XM3ovZhdT1nzn4dubLPpkyqH7zbmV8KHFPkx2urKEoR9oUn9Wgs6eS5JDwY749u",
  "key40": "HLLq688htsmACxSNsXYtequA8sJqik2vANMvojFEPnRFiq7EbhGykCpPLybCWYwM4yNs5i8Gfyu8sdif4xdkTst",
  "key41": "2KATpcNgWw35qs1P8Wtzajf7XHfRq8sBtiS8FB3yNLUm9hh7qz6ZD9RkazAQ7rN391hvBD4r2gstvYHPpFiM9hGs",
  "key42": "b7b24mbtsu3sBoFrxzNU44D5SCC5aDLPj7Ze7YNbLYsqTidNhtC3jdhDkP39tbCtJEGpydV9nJNUD5wWnBaLHmY",
  "key43": "4gxc8CW6ggRyh23bk9TqYSmKgGiq6edo9S3ZKg3mfcHe56dWr1pWNeKWUyCmKLvgf53BtuJGBut6A5LXEEojtmGE",
  "key44": "XY2eUUYG6XwfMR4YLGP2LfHCBk2r5rtwtDnUy4FyAdNxV8P9VbjfGorPaAZz6odyJkDXWzVQpNfWNjVFix7EqFx",
  "key45": "2kMyLFLiLixevDeW5FnbAAY3S2wC8gsbG3jTpemf2NFZFb7V6arfZsExUeVXiHajtpxgWFCmK7tPW69DYHaLV6CR",
  "key46": "332MzHzGvF3Uj8owtxdMzqckKxZYo9PDvac95pqqcv1SQaAya3rY8kCQ7A5SNVJzkQVisGwHayTvdQRNB8i3rGPx",
  "key47": "5Uf7VANa49auazwTLeJHajPjonNvWQkEfSAXvdzLdymduJhHP2E7NYFyVi8ZsymnYX2hmzHs2yvimji9NNuQ5je3",
  "key48": "4WWkMvNhyU9BdCwS6Ra4wT6RjFHSKRua73zqgkQwkPfTpz8LkRV74QLxZuW19i79YNMnmntYKvHBHtTni8FX6d1N"
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
