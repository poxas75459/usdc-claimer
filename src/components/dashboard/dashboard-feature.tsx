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
    "2hGz9fvdvB5VXw3MMqjpqmi53tZY8cycBYN6fFkVPz7Kh18hTrkS3yPwbryEHK4NrJiDZHyADpBrr8xvqUZUDV2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ohhSwS8dQwMnCNnchLwV4fRDm8YVE1kHwBR7U7pqeBymoSE5xCiKRUSUWq6hU5Dha5LqeD93mEnowxL4ZYxRPkR",
  "key1": "4NT3K5EEjW8cd6SfGf1fmgrQSpqCVekeHsnrDgAbyQUYnA17buciKwT87cJHAzLhywjsqKDXFxsP8j7AA6aWj8KC",
  "key2": "5Gjit8yqdunvYsqLtwMhm3QCVLhBdP73nEbkDs1Seoi86YVgvtFjd3XDmz6ExapPkLVCqjJp49Ub9xhdTiaDYZPk",
  "key3": "3dji6w5sgX5zosA8Phg63ySDXgdn3hYhXpBoQTfjSUmMjfYq1SGxE3o7LfMSc2yT1TQAN7NK8kt4t6XPMJQrU3dW",
  "key4": "3cRvNCBqp4maX6CfBFcBRAs5c4BsLbD2iVHHUPafeoCJSgUdyKdNDuJiM84LvcL9mwvD8v1U5qWfwBDudJinPdiu",
  "key5": "U8zDCypxjmrRdfU5ZhAhtf5Go9PFbQAJyihjSj2BZhH2FPzi29EhyTkqgiX26HsS9aBRSoTkzZbdZZwJVP4BgGo",
  "key6": "Ftt2TwafhZ85deNDCw31x3N23UDrnm34DKpdzxLTMvZ5HyV4KCTYYGpNEvhJHgFmEHoHuHLvhBUP1SLAm12LDMq",
  "key7": "3BR1yBYd2aJdZqXQXZJj3JaU2dZvTkJ3QXgZdZYjFoRjWpJrj9my1mrYy9Mkdt4UeTcfDVKMAjJzXvDHnjqRMJLY",
  "key8": "5HuZk4zXXtg4opizpoeYNi7V4Z7JWAr3PXukhycQoMdYVuhqWZ1Qz1CzCMVUM7NtMeq7p2asDyDj6jBm5XLZ6Hyw",
  "key9": "2GNJz8FYEwGN5LeVwo9UQPHKjQrePYXyxjj9tpWjixD9Xnov5XymRsGjZrThETbbdXyd865TZnBXAmdSxU7xgLtm",
  "key10": "3Fg9VK4ZDS37T6Xjstpfkojo4YwPCnhVFoXAWPDd6WDKypp3VkrEjHEvwW7cUKq2TGN8Tca7yND3sRKvCoHRtLGE",
  "key11": "378ngQaQZp42x2ycKAXtXvPvCdNoqCCXD5SF7XCTUGu74DgddzoAVmKgF8Rh7VzUWpJSQciUsxCJ2CdRNo9Z119Q",
  "key12": "3VGnWap7uYN1NWjAxcHEKbh1KyxuFFhDp8m3DyAD6zeqydVYfsspMAtDf7ZoZoKbyEYNtDit7Qx1VejDWVrJ7zXD",
  "key13": "3B24L8UMFP3g7VwjMn6fUEqMVpdLsqSWM1VQhUymaFi5nKyZLh1MmMbYf2PwacGG29vpyTporqTpZL1XCXXSYQbN",
  "key14": "5i4mwN2TDX2KJoAVVWMTi9MJ7QZXbRELjACHUu3E6pCkWn6StSsh6eiXYHuZcqytXEtWA15gUunf46qA6bnm64co",
  "key15": "54q43tvbtKyGjEyJ3Zvd1ZQwTJah6vHLZVvVqf3w2ZdC8uB6sMPcAC2q21eb8tcefD9xUNy61MxAFy6pLTboLKUT",
  "key16": "odzxUz3oFSShcCULLkthXKXxWhpmnHhAEV26nRccrHrcewscF9qrQak7gveMZtKPubz5M5CMvRbpzxBHrfX9i9V",
  "key17": "66R8XHUxw2zc43CXuKjvh2ptT9gvBHzWD6BP3SkKxvgr8cepeKDfgpMFA33w2rG62pRRFQVxe6GqNhCZ5KbWeV6Q",
  "key18": "3mWtoTSr9o4YyTBvs2d49fBBbggXJ9ZGsSAu24AjjPJfyT3bHhNEVQxKsU6oX1hwhCpu2KbawZB2qTHF3MExBUp8",
  "key19": "3ErbykGsCTJahbkmUmgg5dZb3kQQ4b1guxr1p6aEmZXT8tvwxwYS49XTPaJqhMi3ZCpecjZJ6XpcdJoawJLtD28C",
  "key20": "2auQVERoNVyzMyEVXnTAPEScjDsgkJ4L7NdBR6tRVPUVktpbr2psj7uXbb5x7hSK36p2PYNgdaMysHfxszdFvzTj",
  "key21": "31UvZG6hGhjGHv7NddAgsxvDXrvYj1r8g8mL4kdhCRFsSPff655y3Efft1kyonMiSNwmzRpjGaGyygJT8NZXByjK",
  "key22": "5XBu66VexipCXMnbeUu989rTxYx5doszxsLrGxcW5txCe8mhDNVtQXo7rVZvmtizGsVzeTV3AEUcmRHtLRE5zshH",
  "key23": "22KtjBSciRA74xwRAAhcebovQASu3THM4b8JFhYUHmn6rRJXozQNB8TWJakiJd6nnX21EasRf1biAwXNxAw1gD9H",
  "key24": "2RBiH54LTbhcin2PuieMJ1pTRMo1WZGmy7xnqvgeDPX3vgmzHYxB2rBrBgViJLjs1qNyxtCRGS7FuUdrb2LiSLom",
  "key25": "2P9QCrscf9MjxBBU2cJq1TP8mJssJSngLQxDxfF7AkwMuSWt1msFHzp17W8etuiEWVSpMY9a9PtX34AGtyDYBgvX",
  "key26": "2nWDPjcrSFaZRGYz8iRDzZSvWYLu86X2asskiiDt69gEtibpCEHwQd3aFgasc9TuitpFtbKEG5EzYoZgEAzzyDGq",
  "key27": "4BAvyccrTtJnp5M4TyePuEy4bksgEo6yujCrVx7mBn1MdG2EfKitsQhXbpcM7VmmfgPop7jHWD85MuArCAcR15zu",
  "key28": "4KnL9kJqzEDEyhXZzmb92NZLp19baNZdDuLuaQmaEEUq4zUaXSEaqmreAxSiYn76jWoVVNuzEbbrK3kBSFHPPJAM",
  "key29": "3PYo5YULTsva7mMXBq4SzeftLnuj5hvbp5K4EGsKXZLfc8hjGuA8rRpmBZASmjMmLPfbaGbSefAXroV1SaPS2XZt",
  "key30": "2H8Sb94Z5PAmrGoeMJHni6qctVpkVQezCAVwomZWN9SfK8rA87W16wJG3FLWd3HLcTLHwMeebkgqMa4Fb4Qg9mTH",
  "key31": "Su4qd7yzsmmmcFPJMVEbyPKoDBvDHqYyrybDxahnZ1KUVUk6nHf9kt3JAjw7fQofabaV17axh7UF8JDacmj5yie",
  "key32": "2ezRmppmKasDjVS2ncwCxXZYrF9LbwkLxPKWAXRgCWTcUiKiq8gCGiN7YqkeXuqTmFZAFSKoeXyta4Ede5VtrFZW",
  "key33": "42g2EpuVuA1sVaF57PRpZysHWgBa6BrD7bBpPuDdxocKCXbKX9L3KSAogcXgHdzGBdBm7PCCnTtDBC85DDNpg7mV",
  "key34": "5EQaGqhzyFFcatbN6HfwAqDk168erbDdyzvTsL9VD2D6b1BwXVax9kvpRBrZnXPcErDMb39Zp5M7tvdx2Xra9HmE",
  "key35": "5wSj577WZYtk5ThBXnCZm2vhCYYzPxmfKLCXxTLzNNL5ByNmUNUMuL1LxfNsBh1KLFZiaEsd5LYyquuCmbUc2i2T",
  "key36": "2zvu6bjzdcauwAXv2R3JuGgMTjKWvzd9kchZj4MhHRuDrPLdSnCCzKysphxWzBTUd1cy5LCB7rLqADUoUktSXxaj",
  "key37": "4ndJ93YYAFvaXx8bRatVit8iJmzykPbLHuBPzuoAT7nKEcXTHCiUYfH3pao7SaQFUFtZ38dMcPwe9UncTDMjADP5",
  "key38": "2u4sLgERczCAwt9a1iQJg4m1C8XxwJGJdZUw5nvDEcCo5gpFQXuyL4Eab5Kv18KNjhcu9xRxMUZnyEH8rfFSSh3p",
  "key39": "rmvGffDXMyLGoPwZDZh9x6QhvAQHaHhoUyKhBY8SXfBGphgPmq5Um9N8C9j1se35ejpzDijduZo1oaCWcQrmmKv",
  "key40": "5s5f5DvtSv5WXvp3oGZG749t6MWjaZCcHdU1kvujBAmVTiAFod6apy9LR7vBvJ5uNaSQ4RsqGFL3oCSzYJ9Zper8",
  "key41": "37N4XVTGeiYD57VPPYsut2Vtf3VW5VeLrUzDjCMNc6hRtdykEKFW6TiFZMVVxxev2ZaoELhWEU2KKY8DSSHkJnL1",
  "key42": "3FhZ2RJgunJdCWUqdFD9wLPZ96PpVUnWc3FgoCvkPphg3WECGC6k9p1spzSQGee3TGnaTnZJPgs8tX7eYRU9RdZ7",
  "key43": "2X3L1eVBGmhuRRcMb5fxmod66EaKLNuRvan2hv3xsQx6vEhsqmzDPo81m8cmQrGJXBi4FqP6kNXjXjQ8qLjsHFpu",
  "key44": "51WkksEX43xv8NbhZn2XkSCoV9VbzhirJM5UgWaZCyzwhkGqt77jVxCSsrszPPZzbXz7kWrzCnnK4gjyHiQcbVXE"
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
