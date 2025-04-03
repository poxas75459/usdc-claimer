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
    "52EuV1wsLqeQWYZPXwcERadHzw9D37HSKCqRdyavFmocjAMTH68krignYRLkhBrrNnEyGJFWfgZd5SG9XBn8wLGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DLHJ7gsK28hjGY9jpBbiRLbpmC2K93UdZrN3JrMHxACRZGpcuqgUxCQCRiSCcXtVaE8xh8qEuMh7PTrJWe6QPtp",
  "key1": "5Ws1TzJRHv4gzxjW7ATt5U3ujyCnaY2DimLyB9p9Kf2tHX3CfUz3W8NN96embVWbP6qcVgk6YRGbDT8NKBAigruF",
  "key2": "51abz4pMBJzfd7HvKyYR3wzEoB5YDTZXRcaTgQM7Q9FU9WgP2rs2W2SJHqYs3rbWAzCtgPbWbRLzSFayRt6JaLgH",
  "key3": "3HPUeo1jh3nYkirqVsKMiZ7RXy9xGgMV2G6s6MkasvSF386v2L4cgREqo9pxCCXp4SobjTfdkXjtqm97jUfAxT7R",
  "key4": "3dB2vbiCxwDimN2Y81z38RMjGErYHS3qmT1c4MEZMtXZuaYwDEcEL319kSj3tsiT8TDJDDQ5Axc4JH8AGV9dVsLb",
  "key5": "5Pd2yikWA4wZXmgnqTGXBgTgRS9yHbCcsxdmTQFtuY7u7KmDf2Xuoa29RDGVXmD1gyBiEqZJz9MrQYPbqnaXzWFF",
  "key6": "4mQmco72bkZWipxCxgvWAhWWTLeTTRQy8idK3Z9uHbYL91wtMKkxQKZuYMCsxLHr7h1cXzHaAYe61RU86M8dsgVY",
  "key7": "5KHCQ5G5sLKhqQS1CJeXNvRZKkNBX4g3zG2X1UVKj3JMN2VmoM8EnK6LWzq2CnPuVDgPNhiKWt5T9bNEc1gQpL6w",
  "key8": "5Ej1rqPeinpYsCnfEG4Kt5XK2DXFSoqbBrHSWKeCGmCZx21BMoRuasSryg8tfJqSmaWoDnpG5wmCVZYWeM7cSVge",
  "key9": "5yXEhocoKGmrC6Hd31b6NRQqnif3uQ8kBTjGp4VVBgKrHWDrJ4E4pmWLAu4w6TxSCUFsVgGjbFesqieuFZ1VjNgN",
  "key10": "21tzesiqHJLpyBiiV4s1zgg3TS1mz4NvaqRRvG1wfuchL7f91ncrGCpTsWqwW9UM45tCHzK8ZvxHBxrzJ8nrZjPv",
  "key11": "27Tj6BR61kUiDmpfnapWABid4f49FPv7e8UsC1SGBqYWipm85656BHzfNaCGrw58kUNELcg2UjHV6TrQQKbjMcHx",
  "key12": "54PVvjNsjjs53sPLKFE5uMNx8SFLWqXWHiV6Ujg7mG1FQc3E8yJHhR89Ceg9fUFQyTGgC5BmMGZUzsfju3RPskVu",
  "key13": "4zpJ8rMY9HMWny75cRvmHCLGptJivGEhwQoAb9vBdcQZ6vJLsNnKqcXYZF92Sj1vuiU5R1bQB5WGU5vtQfpLjJLY",
  "key14": "2QTYsKxzgbZJqeYx9gcagzGDug7qsRm3zGFeAiqiDh9bupEVhp6EwKJeJL7ZySZKkip1eby8sszVCSRRpDDsGSxV",
  "key15": "4gAZSaDvhjiy53HQAEFncBu2cMJUXBimkbcQBQ92ky3iZUMec8KhBmh7V3HgZL9Ywts4m8AVSdvVSiopDE98QjWX",
  "key16": "4VjeTxkvpU8TeTvEhYKPhxp1TbLKmekGjHfbgy5iko6G2ygf6trGLPRMrcXMLVjzDgcXHTaqbfeTrzvhcgotNKe5",
  "key17": "46WXnS7nEgfyWdUGZPJqAQNKA1dE3Yc3KtiJnH3rb1jqANH5cBKyhDnPaPYWazgaxBYgYxQa89GqzBM3bmErEWEe",
  "key18": "hKQKoz14aNC1zGMSsJ475RX4LLmZyJW8ciez4VAewmv7c9heegw8vwvmMnv8mzF1JweWFCYeBMnU4vt53GXXX1p",
  "key19": "25vzC12FT8hnBw7vhHqCLwDWubKps3RoQVsdgxcaQKicgUUa2U9kxUtszY5q9QwiviTMaugVpJecLVWHhHngDfqP",
  "key20": "4EZMwUSjt375m3CA4y1benJzFz4jR2Km58uRQvGgaqhgEK49d9jZEqYao8yUCFkyKe9HkaQnMdThNQeHzHaKnBf2",
  "key21": "JT9eQH4FPh8tXHvBmNAsbPxCpMxNvrGSBLqLXEFWD8zJ9cWLdmex4dGhhtcN82mQG5ECFrbyHvDoNq7sgiHXQvA",
  "key22": "63neZUhphHCBThWNvBszU1okdPsBUuTJuiRwhoj7PqpVv9ggz6vcT9P2p19NWxWa5jpCRaGV6qRUqBcmaDs2FKTz",
  "key23": "5NFwwz8tUPEaP6ntq8tGpZpvQP9zCHZDp7t5bGbBvvhFRzgroki7Y3pdtT6zp8xvArxVqhuLmiadxehRGJKvGZwP",
  "key24": "4w6wvhVs9LkJKCEvY8judfWSPPJp1TFogJEA5af7LMPAE5Di8Zc9g5fQvVGgdnRCw9adG5a7HP5KWmmthTjmxRRX",
  "key25": "3s4uuV7jHxFu3jCE6uyzgy8F1HwR7oEgmrJeG5oJMvW9AALNusufj3CJPiwUWpKcPfPNjqJ27kiEsQFYjFqTmh3g",
  "key26": "3eLDqzGVRaUz79VY28HYTBnYmjVWTh6e13Xr66FL6t13AhTUXahantmKQfZWQ4NcbhKnTExex9gYPQ2fGEi71Zye",
  "key27": "32w9LnE7rvoYTEsPSPaJsUWnmPH1xPLqLwvZbmQrBWYXtNi1bLVPZkq1TR5uwXQLeys4Gd9uSDAw3zsk7xpuW41a",
  "key28": "5Stvz27UaPdzNqMz1yf6KRCGjaugPUCYXgyunPoSJhiJ7yHTYekBkyk5EJMSr2a1Wd7dWcHfe7NPiSuTwhC31bWT",
  "key29": "sja3sD4KRktZTkjjuiN9m51XRGULGapTvDNkB4ceprcCDJ4beMzUvT1qEshKBs1p4qbAae4rDy38SVMk9kwAsR8",
  "key30": "5KRJHX2AqhAeWQzAXHeBq2thL19HbzoHwBoQ8Rtk6VG9oVPvP6qwA5S45b3gUGHWgc7c8yNcLMpRYq2KGfQCnNQN",
  "key31": "3AX8Z8YMa5Fn2KgZ4bPDMdjsMMt9uxHz6MzUdttNDEwfjXyKJQLABnUumBFPF3eKpq32kqw2jvH8yc7F3tBktTXQ",
  "key32": "36hTy7qW5vftHvwxN8bvAiAgN444qoB9JHeX7eeZxYHRxwFGxroWsoYNF5TEE9KibSKaW5Ucg6sGZsTPwbDVJnpP",
  "key33": "4MEqy9GeRQ33H5ZRt9LzH5bBGykEbc2wWgbsjsZLamxEBrzpTBFBzxVLmdA2pPfFRNsd8zXDg1JA47sjdg6K37yg",
  "key34": "2ezqiWKAFH685WkuFzfqXq5WT59ZfCVAAzi6yM6TtmVBj8hu5eghTkJG5afCbhDMua1mUGcV5nFmTt3EpJtNUzFa",
  "key35": "4t2grXi2KJPdSyWcS7MiK5oaUgR7Vs6pzQcCY2Tk8F9JHmjHAgesTueKjE2LS3aKzKzRLrr8ttZUcV8xSTVc8ei5",
  "key36": "2KkvvLPBYogMWbmJP1pKxswwkfWMAAMdcgCPCPNsbe1JJKenNqXmagfmUC4CKJzFhUEHmFCrynYTsLZUyELJXrdt",
  "key37": "63QB5XdHk8kUnyGizEAXh6i3GxYxZ7ayK3guqPWHt3U8Uu1RwYAjerXQF82PUMRdJdakU2N1VxJAEN12n69DVijB",
  "key38": "4KZ2xgi5ZequduEDzVndRUWkNjgd3LqdNWV4JKERzeyDvqxkfgojHKtprk5LZ4NEXuuDZdTZQ9w12TSLZkghL3Jx",
  "key39": "5Vu3x49MEsVzvwNZP28LLmXVy5BQ7SAEPYS4e9ScJv6f49ZarXVDNXz9sFNcaase54m4kRLRDje3r5aDt3UZqaWC",
  "key40": "3GUwFdgYgtkHYnQmgHyvHuv2ks6z61gbBYBsm55begkoDWh5s8hjsfE22oLdGNPUhPdvf3y6oC5dF4BKKTzH7q3u",
  "key41": "3VBzSTHLPeQE9H1DDgMjjfdhZLufjVH1vHuaJCTHdn5Sttsde952QhgF6zLmvaJd14wUQnLe2roih3gMGTzLA21C",
  "key42": "Q28pBfHktwhab9ofmK1B1Nk9yfo9iqLeNk1MFsSCiaJ9PsZ1nRusAfSSG5yPD5LwELAkeHd69Dr2wNwCpGMMMhB"
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
