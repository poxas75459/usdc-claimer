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
    "4s1hqauWswU1PMorNPZDciR5BDxKR7kE3ScM8AjB36xqtY9tmCyy7YSnCi3C2fWcYnd1bZCH2obEsffsLPpwJjCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zjBBCgNpMu7mGzX61JfLD5hR25CCRu49zbV5AHvF1opajnpMC1dHkDhQXJRbbq2METJj4Dh6UoM5qCDtz6e2tTu",
  "key1": "fz9CWvBcYmqC6EdpxL69PLC1phRHZiMXKPzvLeaZ4nbLJUmQpgcxQxtxvWEAMWEEj492zWrHHCeHWDZpK69KNvp",
  "key2": "5jTMQqjEWCZrsVhQbQm6DsejiBeXaqzD5A1FKLpLoAAe8p1t8rhTPLCtFREc7BFHyioCb9b446Fv9dm2r9qpmoZs",
  "key3": "2VjayFRo4MHjYGhqDC6yBeK5VWQtpD4PCXGjgNZ2NyhxZe9cS1iapdbA2533qvj1Heb94xwrqmTxwcqXUGjo31J2",
  "key4": "rknjcPL1ccwYz2PeMDAzXHh14FiXsJuDPdzKnWWUqh13UiQM2Ye92dKhX6bjB3kaUn3DfYdDy2Ga8EN8a5eaNKC",
  "key5": "5jVbdHDLUMETCdxbwMh9NCXxJKdSDvhfDsELYVM7iBTA49sNdWLWNpP6TTWtAwJrfTv2wcEX7MknihPGpuYVoufw",
  "key6": "4GD8tFNEduXGBFezkpFBd44A8cXG3EJ8zHoHdkF4DTkFezGksXWV4iThvgXL3Tff3hrMGqHkS7yUFFm3HycEUwPz",
  "key7": "5QR12Rzf9pK1SuXxC3Zbuu5bi7rZ6qgr1BEuD4zHbncDnFwqW8NvP2LyBVwpdXoM1Yz2JgxYKaGtSVeXkmKszUFU",
  "key8": "RYMQwSpxuAMSDBTwrkMB4VH5cTjKXd68zTJFDckxEP1JBSke9UUr6HN3tznybBN75pKTz3jph82aWoWnFWJW4qd",
  "key9": "5wUe8sLkPfXJ7LRYxeSo5ncQxdh3FzqTfRYW3jNwZDwYMxQJ26ZseUq2ZJd9dYcMWHYSmAPLjeNz6WdRnSZVRXGn",
  "key10": "4wyetBBYUE61dVibFZ68BvEAbkNzSN4ghWfMgYQn5WH1PUumYiyKv87Xvnkq8s2BpLRU2CndzFysL1uUmkE2vSow",
  "key11": "4ERifNHbtxDQNNCCJVFq9bTNrU3KRH4MVzohUKRhuYwfhSGa9V81HxybToZ1LLMZQ4gD29briqJBvgGcioAD7ypK",
  "key12": "7uvkUYegejQbLbGgFiHF9xKUa1RAWAutPnW9yjwjKbC4f2UMCYvtTaxcj7NUy6imKDyU3Ydv8A8K7odXhFBV5CK",
  "key13": "3n9kzcEU7gc6iwH7ZTc9Np9roTwmX7MpxL1qGT4BG9M2XTBaCXgeX9552mGbxrDNsogP8pa5wMeMmisr4ksTpiL5",
  "key14": "64Y7SHnm7K3r53ayFKgu7vKdL1iEHvP3pxgfus1WFvHn94ofGdbPvuy9tozUzh7a6BELg9rHRMLtK2WdATaoMSX1",
  "key15": "5ViwGEGgGvNtwz2sAyZZ1u4fUyp2vzHzmyCWb5q56GrZN4GXSv59z7dhxsTPzDz8wfcqMkxGPAK1e7GLaPNZat1G",
  "key16": "2S9kBNJ9mAVgcc98e4MZ4zWHcVT7vDFqRpQDkEEurpsP8fPzHyGoCBMWvsA1PHyLFPRocnLtLsRB6PkgTxvD2RRi",
  "key17": "5JqGPysmRbRNWpwjv7cCJT5Q8pGZL7r6q7fx1zAeJMYduYW7PcEhFBPSaKKSA7Geh7bPPni9JaFVAdyURfUWAHHT",
  "key18": "64Kmc4s8hv6t7uRFUWdjsBB9XoE6QH4xUcwHYbjyaXagDm11d3Vb5g2dgrWY1Y5xcJy7hdKn1g8uaY7SAQUWo5DY",
  "key19": "4mPAqE1WRswL6qo1KgcgzTwju2cMuzYgTk4VHFz1XfLvSe7VcDvXdn44UTwuLmUWH4y2qmcC7gn7UXp3dY9tfsjn",
  "key20": "3p363u2bKR1u69AiZmQC32Ph6BmeXpLo77QJ3h6F6tdSPv95FaZqgWL6mkXei9Zowu8tq4t6mS9KFakhJ5hjdHcR",
  "key21": "5NpY49dZ9QnVGsLP3K2Q9oCAuZFmAHR6StasgCcZoB81MzpFgkuCXTnewGc5kjCV8QU4a7rXDX4N9doHJ8tA9Efg",
  "key22": "26DFzKk7BDnzwTM8PGGgEd9KhCM1GnVj1ss9LgQERxj81rsVquqEo7hpAKkMvw8o6hdnhvmxWHTEYx3UDbJbJdsR",
  "key23": "3kgxyyv5pJBWW8eKTMF6ZtTgiSmTrePxAW8CPS7tZFvQrfoej7SAN69YzhXMqMk3w9rZEDxfgS2EvtUadsafJh1V",
  "key24": "64y4DNLLCWFf51yxTRzGQK2Bh27a65NRsJ6NQmsPjQQJ5UPTgntasgHfF7gTMCiHc1G6GiZYeZQrx9tu1zkFoRKB",
  "key25": "3r76gcQpuvSwFJpFV1BF6VPc6QGkKudi78nJ9jbuA4ajw8jVXLezrtDQv57obL4nSBj9Hc2JoRttCTBaUXJQUMtU",
  "key26": "thoeM6oW4U2gVPLH23TuKzKwdXwHeUUF64oiwDxpTp7PC7iBizGzZFLHd4Cj7bSAc1TpZDbQsPxBhpNNai6ou1v",
  "key27": "5NwTuWZCykc1fuShmBbm5hquW8RFXqB6AKepFLv3ixGWEFW3gjjvN6vHGRHSU3hMaF3UR215vnkzfHb4EXkGZpNP",
  "key28": "5srhBWSfLvz2y3uuqpxaXRBVuhLLkj15an89eeo9uJFmSyhcKcQiYReJu8jFPhKoY2wzZCdsJeBzvzRy7zLGNS1h",
  "key29": "5X4egkxf8En9YUfqBsYAFqd2oa9K6SY1JQfHnMTvSRRDnrgr5st2Vd5RrEih9aD4QHwvE2ikEGKykdAfYrjYizLd",
  "key30": "57ZdgrobbmHZH735HLfKsbrX26yMxXF1NCugzgnz2EtiTLH3x9KuQH8zRHZ1viKJdxUW7cBFLNZoZCjoGoBZoRLh",
  "key31": "3CVknj5iZyKwqBMiLdqHtGtok2YXzGrUinqwNnF3hDRV7KT2oCZdJgJWU6sqP8ehnQkJuvT5bhqyviJuZzjZejSF",
  "key32": "5NBPnDWqwCXz8LcbzknuyNt8RiCFy2DvpyMWVN78TjKjB6xwMxMMmG8Tw1dBrCCAniysEzYnHs7VXF1ddYRmP8GG",
  "key33": "4JPhvUBhiJ7KNvxmqVsD7V2X6vcMHVHp7oG3AT2p5pTzfYGXVf4sxs4vCKHRnEvTueCtbUMwwkagPqMrS44yzsgU",
  "key34": "3QRvdYU3c18pCEkP86PLUT4mLqF4N1bQuMKbeKR2tyowSVDVUqaNoRdHf1QjYLHeFT89eLbdz9EdfiGnqJeeqQtk",
  "key35": "3H9VeHNTerpGwjPtV1ZkDc1EUmCGLKuumZEGUkY5yCGADBYGfTdYEVY2Xj2oHP9zzm1du2g9HM6qcdyA3ZorttVd",
  "key36": "4boJ6h88JiKBLgpjTmWffsuMACz9qBy131o3BfELZVanPe3kryw6KyqpaigR9TwC1pid44ijdoWCpPYFgpWKgkGr",
  "key37": "3t3sEUXYKtYW3MBpyhLL79PbWXoQhz72uxBWQH9cLDMtcnzEsSDkL5pLTp1nsvDFWwivB2L4pWvpxgSeYFUCLmG4",
  "key38": "RqoevRzFkgeuFZ9PS93VVsfYkFUqU9RTDexGURZqmLdjnzie6eWWTLv6YMrFWiPfXmLAXHYvbE1EMEJi6KHnE2i",
  "key39": "2UkabkKddGrVo1xVvNuoGm8wFeCM2iZvUCwXYs8q6XF4xmVQ5hKTUgi7Q3WpUhopTjUbRnrHbGUJMd6cwWmQz9fM",
  "key40": "4YLhzCcP54bMqyBdt8sXPS2SsjkZZUv1bGCcfVNWCCNLrzb7MqzjccCAUR55TskZYj6w8AWuCEtZazHCxYW2s7Wr",
  "key41": "4NQEAC9bWBkzNTpFJtvn2cKz44mQoHgKLpsPRbus2Xstus6kHjjDbNxuq4PAHeumFqrYrZ5LwaCLVtq5GAKGRZPe",
  "key42": "5ynoeTVPgthGMFmP2G53hG8WYnGuxxVpoU2DYea6pP67jjWodZTqeJGtJYbRKcE2yAD3e1VcatqH95wV7EXc2ibd",
  "key43": "PSs992zA6Jz1LkxJeB4igQVkrEucRQHgoWR3P2vhEkovYXrH6k4gVjKH5LpkJGDgjY59dppP5q6JUncWJJYb53b",
  "key44": "2GaAxDnHnuBFjvP1YrQpgLLJLGfaytmPEZUoSfkTFzGjVoDoymoHTsNAqSTQncYbLfpsVMUXbK7BvyaoppAkDwLM"
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
