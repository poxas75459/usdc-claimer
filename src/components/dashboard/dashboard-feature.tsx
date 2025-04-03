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
    "5osGAC95oK3ZfhEBKG49kegaiU11FXtrUjHSLM8U4jcT6TKyXKtSFGi4qKdL4mvSoAgVfQs9oUeub8ZvZDqn6v4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NKwWskmmgX1uAUoFUn4MZAyyATu9YfrNYVB3XqVfxznhz2Vam7gHsUy1ve2L8brF6gfpRGHccePjWQuUZqY8mgQ",
  "key1": "3V6CcFoFt1LueWmfZc7gVLM3ZSKwBe5tphw5Jwpwy9knhwwk5T5BrrAJR7rH558cEC3BTmFkHomuEFTojtgNdeSB",
  "key2": "2s41tRpFYwJAYXpPHqcV2zGvbcDJCwVE8NhqcKSj1YZpZkiWUeJ3BtknkQJkANCN1WMFLEWXA2vAMiYnYNZafdYD",
  "key3": "5xDrQqb6JLeYS2FaaH1274dxb4SNPRGsye3Ga43AUD16sTQ52Asawm1JxYxhCdiaZYVecQybLMN3scUmTHUmZ6Kr",
  "key4": "5VMzhEvyeFQKP5fHJHdeeGf1HHsvPhsTRyU9Mh2YYx61fizF7PpjjRZnae2F1YqDcKM5yJs4C3EiRtXUgF4JmLRk",
  "key5": "3E3GWXgHA2CurKUkadm1dikoNCVfzNhGYG1k3uGDxJ5hchgoKHF3TztJTtP9nwTQXCwaQCPukRkWRKhkMtaoEX8L",
  "key6": "4ULcFkRNGjwRdGFXWLMbB2DPsmDh9j4RC9hTHX7cg5gg863TS7HxDvRJUY2hDGggJVKB5uKuFdTkH7BxvWsWVeLj",
  "key7": "4VwM5iFCxuaTLbpKL3VUPbg3Y52HfPGenHwh4F8gk23JyY7yhbptrdSwsFqDEEvRiMWegDdFkxgX339cywfBTZHz",
  "key8": "iJazYBwDffZrTGma3DdUJBbyKbseRwxoMP2QsCH9WiPTCi5ZDR2ycnHbAmnuLD58i1B9X5hMbaQXmK2Ew9w4Vq3",
  "key9": "3xPvSmW8TQFEPQJU2uBoeAtHNayMShWW9cNUeCT23721ZdkLrEGwGtP2vVpZYrPSEVLuN83iEKGPWAAi1v8WiWp8",
  "key10": "2EmR2weuKm6SEY81rGAengRrLS7JpKfYGcComnbxmhpUHPCGj1AUCwdWhrzSArYUx5fF6CpE3USSzVMHHNsnzDxw",
  "key11": "fDMPdkXYzE79BWrJgKw2VnfpFz3UJwvmc95R7rFFzjvkqKm4aUivyzvXTN5Ac2YzwvKEwX2nAE3LSrfMvfqJkiS",
  "key12": "64yD9ip4K5pzerwKqGVspzQWJTbANQwZNfoX8mazcsheHjivYe5yZNiBiTLur6K1yzxTArMBeJgv8sL9Es1DVPWk",
  "key13": "KyEwdKnNwxSbuWkL2qmN2A1rmz9MJ3PpHZ1JRrTUfwYBbRgnAzfE38PidDuaegzNzxP7qJ1wVUGGTqVjDnTiUwH",
  "key14": "5Q84U7gr2GEh9yNr9HAMZwQtYCknkfr8ZWWnCyfzdFUr4e9njEmyA9mDxS4uXZ6v6JA9quqoUaH8RyXos9Y5z56Z",
  "key15": "2PAbgUMz9nHkvVchjm99QBzNvCgGiTm7xJJBi3sQsMYHZnsdJPa6ikuw52dcU1Vd157T7wUW9eNNQfeKN8rLgC8Y",
  "key16": "5Q6U4tGUsmASroa6kBZNdHxPNjQ5vk9okxiPhnUYjvER2KprKEGGkRsUJQUrpoiG9UZG6pLc6YWPqdjeweFwuZbc",
  "key17": "48uqTwBBAsuTyd4oJnyb8L2kr6bfzmpqmjCeeu8U3xYAip1ae9FW1Cm2sQjTdjiUxdt7dGuBLvuwKNdPnBfoZnGo",
  "key18": "4XC4LaTG7aXgWcT77yBC9DncZC2frzdtHQ3TgmPRFNpto2jbrK8jqkTpbcEAZBib3E15s1zKtFr8re8zahkox9n",
  "key19": "BqT8KcHovo6aLNNuKzLsi8ie54f6iqCpZtyi3CYX83mj7R2rQzfKP5t5jf71f6GMhAw1cZdQWyQqTtY2AAkx9CE",
  "key20": "3mYP7V9AeoL35wgWWfQcWkvuj1BHEvapjoQsoz26AM7gQoYc3k36PS6iabJeCHxjZYmWGeYAjypfq97UdwS6sd5X",
  "key21": "24GxqazQDLjuwrofg7o3PqMEPFGv2KejPx1EoehbKycpNoVRbEBahAe4PCz2ydyRBcKhxMfJTrrz6HMcAde8qi6y",
  "key22": "QotqapJ92j5ZvAVvjfBSDE7DeuBhVEEAmPi8E3bCrrXyeQciWLpKbLxer9xBhBPcE45ZHzAegPGKaASAvyND5FM",
  "key23": "4sSGLKne9rz2sJ9t7vqsUUKozKo41Y5j8uEyUes6WqC5ibfe93doRxpn226jPd4BToBLn5xbe2WTn9aK7ZR2Ljko",
  "key24": "2dJ8GAnDsZJ3irzumL2rbeNAcwBtdHvttt9FFQRECBtjT2AQSNmuz3AYxn4XzFz6ZCPtjwtiNC2EzoUtg4sqRMvf",
  "key25": "39J22hSFyr56vPa6dXNdyWyeeeom1yzfKHYbjK2B9ttHRvyU5LzNgazRNLCzU6c9niYXYjKmtRTU6yJzAUGsRYQn",
  "key26": "49iFGXN9bqVFaMdXkLSNet3HrKUr9EeztD7kRo9nJRYspwep3pS95Xbf1NXegTmRuHZf6xRw5zGucjZUvxD8z8Y3",
  "key27": "pKh8ZGkapgEABSsbubbZpyBcNrTjV4tWusnBZxSWuPPzAay6ztF8d6S6htcp9p6DojG1hjxLeUoT46dZNVJWsH7",
  "key28": "4HdfcxhsQHB74JpwTCppPeKqABzoc9RmoNGYMyTMgkWtgmkcETX5xSjoKBzfFGisiwzCBopeXii7qVcGshJsDKbq",
  "key29": "5SZ9bP8E3wRXjYpwYhQZ9m82QsMTYKh6JYqiPS8egzRtkTgjs5k31XzBK1zf5BLowAdXH6kbWiTu75KX1EjepXim",
  "key30": "2GJb1HD9wBCos6hDT4cDFswPnQBDJnHinwikApBQ4qXfupSCUJfUPLaAJvLNDZ6skL3LrwoAwcLT3rd2beUy9mzV",
  "key31": "5CUZr9P2FaDLkRvCi2H9GYiRo1eDbbyWjXoyKmCLad9UcQEUKAHq8axbpd95aXJEuE2LMrp1Wc7wjmK585xDcGEd",
  "key32": "BB9qihX5x8tZKmNFgQJCVBcRcA8Nzee9bSif8A6FLPB2cWk3Mx1Gdq13BxdFdF5uRtn5gpFo4jfUEWjqKwQcyFF",
  "key33": "4C41yDRdN76dLBE9vZnm51dmc8SMcziSUNCiNr5EuiRQswnQ2rtExmMgQWdBdMppFKNdc4CsSNTsZVpdXY4euJ9L",
  "key34": "32ZAkEbU1i38BikFW8jSYHYFuVqpEe99mcfupA6ysCasVdhAWCqPpgiJSQvrAS2FY5ok98E163NGy1LLjLiiSjyE",
  "key35": "39ZRt42nH5itRhYJMsiscqrftqiVuFFBP6Sd8uBrBdxySbao69qgMwMTPURvhVaViHSGQHq68BXiy4caa295hhc4",
  "key36": "pWKvEnWxzV3R1aB9h8WiVNZXFmWZciGXTDStADzNaAHDucSyAUYAyS7jzC96gXTEUxiqdFwifyjFjMzTDEFqXAR",
  "key37": "4nLJCCQA2ESHArETnyn2EL3uLtZT8QbD3z7doLaibTwcz7NwmpFHfousj3vVHe6HB8zyDRNGeowfsC92eK2US8Tu",
  "key38": "3dcDXvxL2FsN2jfVqyLFQUPXEzpLQNCBTHXqYXFQQ8VPcKCXNiSb9Upk7gF4sVJYim2waqNge8P1SLAU4KcqE3nv",
  "key39": "4h1R8KVjoCMT7Po6MDXBHX8yKxSE2fxGzTtqKs67fbFaMybi3mBQ1YuFXgEWLb223wFBu4iT9pJgkmz36sv13GZk",
  "key40": "5qwnLFkNiPLEkJCcDPz4XaFksU8VBkMT5St9Y44UET9UCJMmkDUKAsy94iL3aMycJcdSuMTNmrGYGbNXJtUXJ1pA",
  "key41": "4XgoRc1CZcMHsh91c1bZZRFZ5Gx1xKK3guo2bzKzjG8Knp7w56mybSKZ9DuHygkqQScQkcxSPtppe5zcsggwzvrW",
  "key42": "2zHgXgnsZYhDUMMo9XzNJTKKQVcp5Awcxs4UBayPZ7uuvSvzH4aQKPf8LP3k1qHPo7SbR83nDu3brXV4XDEoCgZ8",
  "key43": "3AXhFJYynah51apqQPsRLwGoraED7B3J7CFobGDBWoxm7TgaXeeFXq5nVkLtbq8eqasi1DTRSJKLbAZhvVgs5A8P",
  "key44": "2fnmwzodufubTwyVF9MGhcJYRCNMXrrrEkCzfQi3rTHWhrLmc6yrFZ73YgnHCZtLCZbJGmb5AJtrsoaGfXceQs3A"
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
