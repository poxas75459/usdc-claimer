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
    "5Ns2Dp411xrkDg4NCMAsnE7HBNmYyokRSZf4qHxkQcDpxep89o6DGTvJbHWXYgWYqZiTWZ7SSSKEArhQuHP4U4eU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m5Z8TmM5wHHHVqhPYY6KrxBQc5mEJkNHesUnybyjq2mdQp1gH1hJuYxEWkj8ZTgkvt9iUjX68tugZmx5N7t8QLK",
  "key1": "pvHqHLjMtTBFpuAbYWQ12RMdgnEa6TRJTpJTA2xt9pWaFoPobnVUChBLgxrH8tyZ6rhquvEBq8ZjoRA1XtBoHYi",
  "key2": "4syXSbZZMXCykzK8STzNNU1WJGMFBF4wAT1exg5K6gYr9CA5yi54uLyxdqQ74SYzLGa9kFgmecLrimtisuRbz4FD",
  "key3": "38NMbsFudtisLp8ZTzmC4WMBrpgpPP6ZPUC2CYd3KGoE2NzUw6ZEkwbHVJUKGyXqLHKdYiUFNMpJxADYk4CGcjke",
  "key4": "28rDUMkmqjSxxwcfDWSTPSA6vbZfEfBUrVkTYuFw1eb884MLQvek9YYSnSe4UnrXDX6SxgzxzQgUgaeso9rzCEan",
  "key5": "2rXJXVPPXPukZ969iiqDcMrfReN3Y6aEhrfkiEE6J1qPBZy2X933atzzaA4WFMNaYZxxqeFA26ABfLovLfTF98Jj",
  "key6": "3DvM7DPtmkvPbbx55YELig985BjDdKbRSYc6tz8dCQnoXi2Ca3VwSganrfLF8BFwnPeWM88k3NLEy7vNiGSSoJgj",
  "key7": "co8oFGahBCgGzWutovFtJhSjoVteoSd44A7DoD5XZZe5rzaebsKFiCTbBVVS6tEDByN1a9QVS4eCGRpLmnfkDkm",
  "key8": "5jCj6Ey4uKxQSxY75mZTMTE9RxRcVCVzZVL7oZGdyTAyj9rJ5DPJTaeAzS7yTncVseCGkUPbdbTdox4U1fMrtjpm",
  "key9": "2zvfDCN3aw7RttTFQ4nN7XNa53yCFUoQpYGR6GMuHoc9AdR9CWTtrTBAu49LTmKFF6wSw8uc4fyR2yAdpmtYNSkf",
  "key10": "5QHvhuVTrJDpa6uMTw4UHDBZEwtm7uKHAT6vUuLJSLr2SLATFXjo6VAXS3RjTDRvJ8nDtBb3Qb6KNyRoAbMagGdr",
  "key11": "2wLyyJcshKGv7TEka8FS7cyhcGcCH9Jx8JbfU1QcSGcxjiou9Bn4WNx3379J67XYG3dfLdq4nH7pSHc1nLTtJMfM",
  "key12": "3tEjkwwLADBs3aFqSPaGM61puqJNQRfnTSmD7Sdm8zpsDEiAZkXgA1UPMnbctPfQyTFciLFTrEieiTcbjdR4BJoW",
  "key13": "5oTnAVZqsmk3RpTeJo2TzHByvT86TXpNCwmMTvDj4ucyHBefyz9d3ACnzggPVKrSAwpwt6tp4zLZKxLyjMFCa7fg",
  "key14": "3J7HiX2D77ZWA8c9wpdo86tjnjw3eJX4zZXnP8ZfZHFf6c7T6jUHXpmNjK4rDSe7DBoTMmHtXaK5qmMrqTPjTP48",
  "key15": "dLCPXZxwTVLr7rP769dEVm9CqdjS78Bjwta7KRLvw4BL3j9PJAQYyvxBrvP6aGxHdSptearf5GcT7vVhvanhx3d",
  "key16": "3GJqXz9m32T6SqFSzDjoTof7KoVnChqRkAMcUuZ5bfpgL2FrjZMpSp9SuCdwE74uDgSa67xGYq8LzTuqHjmAWi3b",
  "key17": "2eUB3xqpBvAwNJHVJCjTW9AD6g6oFUDfn3pv7FXRJuNWsbr7rXVjWLJzepd9UF7PvpzVPaFF4wcbbMH6P3nkJGFg",
  "key18": "579La6Popoe8k32HMTZNDspUTVxoWDkK2HYZdvz1qPDUizUgVzQJxQiGHZf9mLeTZ9dWSc1LzX31NCrMkFs1nfkR",
  "key19": "5uXSibUfsXJHUnVKc12VuBdVaLKtSaC9ZX5kiW272oaCe6oaYUVR5RqSAaE2sY2D9TjHq1AEroAczGFVaDaX5Jss",
  "key20": "3J9fgH8B449E6KvsoJbFaLAdmpu8KLYYqH3UyXvJnmHedsVekr1Yv8UJrisf5QWdZYqwXUXfmL3RAGTodfmnBGCn",
  "key21": "4FVsHd2ecFnDYj4BUErYxVWcxRHt8P4k6Ev1z5YDxDXeesYSvxVTNsjAFtRdY6C6HVXeaEXz3hBeUdYEP3wA4z1N",
  "key22": "4PSQoYLuZYpab3vGUzWLSiTTCGRL37LGWG68LH1hc81smZ7RgBrFiDEA4YfgtY5zxCwCRF4YaAdrajrPakfNBt2z",
  "key23": "3xUzceTLkX1jmVKFtFBRsrBhyXEEcD3mH2kzxMJsFnQuqRuELGg6SKnPq4mMVjzzATkjn5XVGHkSaDTW3SXjwMre",
  "key24": "4Cz4HenRwCxveJCQQ7WEXWDYWCoSLiZgbHH6xmXLdE89Bwizb5EAiT5rMpxfM6mrBeJRhvw6FWBxmFNadXKjALDp",
  "key25": "ysFSrjBHGzATozAgkJ9MSB4JXzhFu4PjrHXfTiFuXGKqEaRKtoZ3Gpt84u85x14nWRbQ7UNrFGpnfqdToXLnhbu",
  "key26": "2qrz9MnP52qtMFFSpAf1SawGMgJ1PqxFGmDavk9cA4MuNChDwNWqg47q8mCnRSEXznAczNidEPoGqmn6A9uwXufr",
  "key27": "455vmxrEzJ3RgZf7Ls4wd3exbsrMFQn8gShTTverh4WRKV3WvyexaHTBpDbBc3zy4HMmzDGCLJi3sHtQM5yCWsMZ",
  "key28": "3D3JwcN4LdfRcmNdXQmZr9LvTraS5FXcPzpnwecmCYBDhptw6y3MCNNN2XVsVMgPiUuD5Wf1b1LLdGPA1FNPSbTt",
  "key29": "4ciz35NEvwna2GgJCmHrkGHkjHLA6jXZT5PwpzTYDmToHbyNDepQYXQCP5S6bL8nQv8dRWmQQxXdiGLTqULfu81T",
  "key30": "34FYh4K16SMzJfgmFciVB6mYVx5FY1Cc9qWirDHyT4CxMzjefyudF9NaWdHTNR7HyUFQ8BHPmJWsJWi49H4sCpjY",
  "key31": "31FqR1uptvDRsrKnbSrBzu672RVSGBydiVRxpFer5V6VarA1hv6Jez3eM2TGi9d7RFLy9JiB93VPxEKtmjCDriko",
  "key32": "4Z6DyTp4t9mQFkZ33xdv6uRd4AxKwzW4xdGkv8C9oWFQvLQkopJW1zfEppRvMyAdPyDvc8qdWHjt9qtVJPb58ZxU",
  "key33": "3rf2M3BsLg9H2X9imUghhybDwVq6zAnRT54U9F3mghC7WXvmd5irpds3YbrproDMQgfn3uDhXb6dEeowqcueNH9V",
  "key34": "2pEhNgwg6moaeuLRUcv3DePf2TRuCuYSCWjqbsWQBQeqivpx5PV4YgyGWJLcDgY6yK7a6HZkM8ZTkVoR2JDvKMeP",
  "key35": "5johjfSKVUKAjNptj8E24GziP8eT2c8Sa8ZCwaDiTH5KzVaagv9uLmDx4xH7x6mbkonMVYJrgBqsGSExaBsVsQMW",
  "key36": "uYDfzp8PEHXFWFpdaqCmF65efhwY9FoY2TkWGZGvFiZkg3CSg4E9APKPxMPGFwC4Z3ydy8kqjpkS4sSEC1jdXpo",
  "key37": "65ZqdqpXJMa6RmVNVCauaBgQBo18oMk1gQMRqdPzXkmFt2bmyPTTthMo6vhKDFifVFTjriPdFSPT635RnnupymZy",
  "key38": "5cuPbUeXrL8aBAbHskzR3VmHkGre2EibF7acxp9XmNXai2EfnMPEhv1V2tN6bciJVX6irYeDXYqciwHZxdAt7d9B",
  "key39": "4YhgFc29yh1h9FBCwqRNdKywBkUWRszbHXWZxXghjuT96JVu9hyJ8DKBM8LXFciNrYknPUQAEgFKW4QwxY5Btb2r",
  "key40": "3AnfRwXaTJdNtWrzeYZJLs5gjbQguY5URQEyTfKoGH8Toi9LTNsqWQD8tyRaByRfXEmE2QBv3bvoeNwX5Rw48eXb",
  "key41": "67C5kT3Ji4fd3FXMBz4MJAhzfWWo7XEhaH7S4CAPBijXvzk2Jfh5G7HaYeLA4Cz8q1ztR4ucyQDVpAEz1a4dNWj5",
  "key42": "4oXcKJmWhgoee8s2jtTZVEt3ppdv2ga8TFQGAMvWij6p483XUDQqQ2TeQivDdi3mQSmuGkoCu7BGJ6vk3Z8nB5yj"
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
