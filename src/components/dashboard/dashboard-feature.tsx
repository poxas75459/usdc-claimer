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
    "5SFrXVQrG18PK6FXM3NAxJbWMQwzdEN3uSorXdK4MjmxhZiPwTZbFcqfoJbcieTidRPS6wbSz1rtonvbs73q6tA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S3TF5xq1gwKFdSDSytwrzCC5yKernFfu5jL1dPRapXW2cWC8tvstHkHB2RnqcTQUPmbvrksF5Vymp9vxAm1TNf9",
  "key1": "5Gsj3kwb8X3FoRBqQyhPpVCT1E9ZFGDQKokp6xnSBxjEH3Z4bQRyZpsa89HGctEWJxtxdNaBhtHapRJos8oMSy7W",
  "key2": "3VZSQQuDdsWw9tzU9xvoEmxQgTzNHaEtk3kVNpJBEXeyUautH531vogCxVV31pEg5Rhi8LBUoCQPPUDH8emXDfPJ",
  "key3": "4vz7sHY7qzhRwUj5enLfCj6ZQMpp57jaeFQoJy4WJfAgnruDDU8Qnk8oViSVdQe1mB5L3AfqLyo3nAJpzUTy5bFP",
  "key4": "4cs5wPpRJBM5Zn5GvsHLXLMeWfaHfdTqM8X8AzHbh4gAQ5omhvJdKuUzvyzrqMLPwfajPkpjkyDwE8UQX6HGAjMR",
  "key5": "3Gri56QmXPFr5hFUWS52pM3KfQy19fT26CGwUQLqVqMiujckKYHhrq9cVwhWbPqG11zTc9GhFNcooxB1H4LkLyBz",
  "key6": "3zDwEUhENkcvzbK51CdU5oxFZWSwpW7VumqbgcPbREf31BHoxU2jfvVouZWurM25AgKgaMqvJKfyPdBMvb86v99V",
  "key7": "D69eGe8K3Ub4B4hAZBpwpFz9jhewVQRC5uSEvHN9JMpkLgvwvyxEW3HBtTVqUi7EHwPsgyDyEcFLv8v1UsPbnd6",
  "key8": "3CybmXxPTk5fCxYYVri9xw7MhKuwj9eks968A2yo6L1mbYB1Xr78UpLEF1t9cQqNGNNJd2WcHiiNJr6zycD9Cxwg",
  "key9": "RpDSgcByXfQBb2EXiq33yety8anLxQ7LAGB8HKd5kqahUMZ8Qi2eT9b9ziUrAyv2h2AcpKqvnwa9Bk1zMoCxBPn",
  "key10": "2NYeD3p4gmvChEdEdnfpYV3wnzY9VzepDeShvNQEgA7aPkPxAzq6abmH7DKzzUSFjQeTQk6nixqDt2eYgTqvwbRg",
  "key11": "3ccmvMFpNbaL4M9R2xiXxpv4crgoJdRdP3Ks6fHL2iyfbdBtLwe9BRq4hHzcHUEzF73vESACLKfjGTYHMQWnyFdm",
  "key12": "2PzNrDe8RC6PPEokSxtxdUVr6FwWWhg2xxvr8eQHXibVZVhqbAozbgoV499zDVNyroSUFagCRNH9ivnTTm2nw4jc",
  "key13": "3zKVrFpJ7AHUGQVnzC4TAdNTFjZkfwGFXC3mN2gakFxtjVPbaAPmaF6xtQ7AK8vNinskdtRmJqJAmB9x7LJeMk6f",
  "key14": "5S3Rg3Rqm3hFFpoBfMRtXDX35dHb8P1rgMq2kRzTAjQdtxbZRnRjaCvezhJdjiaMT3r7MWwBRBqTWppJN4pEoH2S",
  "key15": "3Z8eXqRqh7ntuMih1yeH9LYxXSpNP1Dbj7MDsGM7nGt9ZgsWHtP8zfnLsEXbUxqzur7LrRpeXe1kmTuKntkezB8d",
  "key16": "2NJX6HzDU8kvcUbLAQLQc7xN5zosvsa1hjWran6jeh8Xd6ySCkyq8XRMhhaZFVjeAU7FuXYUqQmrJ1mskgzXzTwZ",
  "key17": "2KEbgxYmcwiKwBCMhGF14BpDVfVmhwwUzwj4uDautgoSiCLVdHGv2Y4z9QJwgKecBtwQsaj9xVcNTF764qZvH2tE",
  "key18": "42kKGMC3cmSWxAhBL7QojDT4xnTXZieszQjbWmC9YX7zYSHf5u3CDHTFMNJCTrYtS8xJKL1BP4F7D9rvG1wPYbTU",
  "key19": "55EAZReZJDpoKRQuQuRXNTKP4n2jVLW3W1ZKdPMAiaWMBE5HViLXMo8dya2S2SsCsc4dRBTm5HXMHJ6kf6piHXGa",
  "key20": "4RgAHoqU7riJYWL4oUyuFwpefVBrMcQFiAf2Q8hxqkiAaq32GcNX5PMrEmY3XRcSRqf4Ze6RPLXCnb828kkVzzGL",
  "key21": "nsBLoZUw8WErFZBffZijGa2g5CDdojpcqmzjYGHsvSyNpTYiVk6tQAabi1zgN3BhGHgmRpXvVDMZTDSjj9quf9C",
  "key22": "2EpydWoDqvP58kT8muj91gmZXvzMsGQLCefkqQy83UwcDsowuApfG4icLgeJ3797oP73t2xKZzNSBdrirT2TdYk1",
  "key23": "5nimYKzexDwimT6nM4sTT5jN2xeTfrqrbAmuPiDkKQXEsR5WXD8QiKH6derkBUD7yfGoQRf1mGRkrL4RezTLELGu",
  "key24": "5tDGR26XxjiKDTcvZKPV6Kb9pHck3SvQFmL7ywW52MGErHeKX25fpgjCxHK9ERC4K16VDmc9W4UFZdHcdxRgc1Wh",
  "key25": "2StYMzYqjakcGLroKwDkCHoWNUcZqeFHa9yfnRSbWovBgiBZJH4y5r98L8ghTGnqWkqUP5E4GynJ4pCMkmeUk1Z5",
  "key26": "4LiQZuhvQyPQCXSA9WcVsG4DTq4f5tJ2wXJ2UdGM2jT4Lbn9uSMSdfirRHJkvDJmnxif2c6z4rDtTqxk5vHucRAt",
  "key27": "4yvw8ZANtALmGnGCPJs4m5GzPbpzzKFiYrBx3DDgyRDoiquaAJzRds8Nxt69UwBRHMZqLY2AbrZMs2yU7rVmA48F",
  "key28": "5kkPP6FLcYuK1xUeKj4FKLA5T4e3cMSV6AcPvcWEw6cwUX1sPbRm3GfYTR2QqAPTnLRV4GUKvUqCRA2TfENu6VBX",
  "key29": "3ww8Qvpn9RS2kU6KCL8weJZxP29g9CrX5anUA8kDuzEDj9iZTznST3EChjYVBHZ4bqaus4hqyLJcscPR4WqjmLzH",
  "key30": "3EQarAnKsfXGrE5omFYxbtszmd1EFUhGfR6MPSmp3fbgg6iQLJkZoe2jZDAGrxvGeFCbv5jwG2FnpSsPNe8N7G1M",
  "key31": "2LTZhvL9sfVSnLrBWGZZVerpQjmeAWvx289F4wdpnyNDfBjZ6bfQy6n65J1NsyYeE3hYivK5Dm5k6BfF7KbBWAuH",
  "key32": "5NF8t9bWvhpxPRKYMzSXkb85yhVxjWYy1pWGnbdUA2nqMGgwemNjdFz7PVzVtSRvmvthEwK2aZyM9aJJpSgB1MyN",
  "key33": "21wQdFwqM3HiYPkQ77idnnBJWQYwCA6LidqksPTBVnSuR43Gzy1KJLWfdZHFzxvz6ggcCrby5iHNCzaABUk7LXCg",
  "key34": "2jftD4pGevZHbEJ3UVsCtcwe7kNbBsgEdf9387iFMB1D8k7oWqLmR7UCCf6XwAXwSEGDC7JC5RG741zqUDwLZJpw",
  "key35": "65iPDMbJDDogKP9YiQoLxvNhFrE4kKHw7aQiqL23LkYSnWCDj8MGK1oa5Fsd2RJnRtwssQDvcCEji8wfwfNx83y9",
  "key36": "3eeVUnGydeEfRaXLQRQPFFLRY46BB2LGXFcr321NjKEWD8JDyrFnytcu9FUYoD14Va7FJTKeJmmSAaZwAkMbaMUW",
  "key37": "LWWLS3ALmjFgCGNuWoYXcYYaKwo8MQYbWrQTgo3uMZwxHq3LagQoPNzcpvu5Zcnz5TogGGRbYw2jCPtJznvzE8H",
  "key38": "5bthkS7ZmQf651cvuHaSrLwYZUMhbQjMQwQqyQSFCsJWUmNTBTp7QuaRn4z9rqQJjUAuJ9D7Z91HF31iY9Jr55So",
  "key39": "1aTPXef7shxHmPqJpikyTiAgiVwEWUCFhGfNLkrL7oCCgxhBN7ZuVKm4GyVbBhgr1AZYDuB9KjWWR82rf5UvkPn",
  "key40": "58y8yKMbhzatsV1fRR6Zcbrrq8W5y77UEQi2tbthmzjFbCXyXwrZd6YeatU1BZREuPjibTZHs9CgKegLaEDnoU5X",
  "key41": "3ct8c8i89CZ5usevnMvU9Wd5trkGjpWGDERFAknyqXBaAcwaRjngJKgkymkjtGvsVVgRHaKA8QnBDshEzDx71Z9v",
  "key42": "3VRCTdqWVftveoJRDSDngFvVwUwBU3pU8RWWAxBby1GB6aW2xw4UsHDSTZ9ijvwu9YKz4YR5uu2pRiwY1TPqVHEF",
  "key43": "E4VfvhzskKLjWp5qJHo2mDLF2fUD2hopu5HPyqCokSszb6r8BYSFMFVkAcfkgzGDUiFPPX44s1qvmLhRcY3rai1",
  "key44": "2rghjaAnL46PEpqXVuD6EeGZiz4CxYjButgaFG9USrjGDvBov77fcjrpV5xTta3zSUHW1iQ16ZkPDoN2tSH9dx8S",
  "key45": "4Rnp688FjExapvGrNTkvmSN2YyjPBx2BBHVMpEFfAsDKxagVhDTUcxweJj5RHV8V6mSCTRtE4LACvfdSgdJHCQh2",
  "key46": "5yNF2Ho7BUZnVTudx8FvPjwz8uaQijBaPAbeQVz9AdVJF3PxBSqmpQVFMHkC1g7ZUmsERq9XNL8UZCe646WXHJE9"
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
