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
    "2SybykUdsnyoi9kdEiyPNQv96WfZi3ouRMFnnN6wKv9qLsSATHBQRyFnjUcrHS6EXwL8M1pMAzR5MmDyd3M5WNFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E3o4iJr2MkmrVasRtqJv9bX6QQ9kqhuj16pnpbCN7umjJkM3XcS1Htew441yxDQ4P4a1HUXDLbXKgjs9NFEQsS2",
  "key1": "5dSGJjMyQM3FwuwhUY9tW1V73kGj7wfhSrsJDqGiz4CywkR5NSWrVNnLc2vB7HkXMe7of6YEAoM29CSZxekNeW8U",
  "key2": "23u5yfW9ncaqVu118KCijBcjYW23z7tVsAEVnRtiB6VV27YsM7RmbbJBjs1MhZrzQwbk7kBKgUGoMtG2RFi6Xay7",
  "key3": "5AfyAYK4Bac1Eom8TpqJ37ADHwZCNcienZeUG4ZoN4mphkB4w8vwGb355fPFXstTKRbwzFBhPmxLqqfzPdeFMCwx",
  "key4": "3veEcGN6c7jLSHs3SEJW9op6rzUBUPEt5i3Lso8zzkiNCM4fC6gg7cUpZAYzWfRrtjTEmpCABAq5Wr9iCpCA7DTc",
  "key5": "XESGf4rxoutfgRDQJtkP9VQx6aPiz6CpLepQgSwgVa9raga2cPMFWUBJTohWs2QSc7QKmmroth3giyNR9VtytS4",
  "key6": "3qQLiSnQY3EUJ1Mjpm6Sq6h61y7cnkZoPZ85MvX71zAQUn6Ha2gLBpyDAC4bi5UgvR43HxPLo81piiPqXKM1Sri7",
  "key7": "4aciqBAJyn6AT3ZpGhGmEwaUCCMALMTHrVFWg5i9dHZbSK8YfV5i4Ay2UWiCn38y1DDg8r6a1MKJKZLmzPxD924W",
  "key8": "3odGvfyktDHL51YPvZ5vU83BT3Hnz1tvVfAD85TWixSrKZdsT6UYVRiHYXz7SUstaUmvessKpbszJG7co19EU4UD",
  "key9": "g7va9whCrA18EuqgnD3CnqqEeN93c2ETC3KaDjj2E5EX3NsLWWPThXKnpfmnWp2BgVshhzcQV5BM8eMHN3DxTeH",
  "key10": "5tQ525uyE5NQS4HkfaByrqmLikiyM413veet6JjzPtLW2CGg33JTUiwrgSLKBjfJd2ZmRv8bQBCRcU5VG5fytoew",
  "key11": "2vMS5LcgEuVNKPiQ1JoLKrh7wGD66LAV6hr4gYp3ZyzY73EjiWiDBWCttWc9YTz8PKzFvX87cAUGFsK8pbfmaeJE",
  "key12": "5uNvEiFgsgQsgSDcQVHg7Up5AXc2USStTeoMk7zY5kfB1H29QeDpY5hQn6mmAYD7vHA3NDraA92PBq6Un3DbbXk1",
  "key13": "4xW7TM6iHW9fmcucRNZtfLK4NtjsvfcefoK1aCwCTtNMfSsSkG4qFVXhQ5yfimamPU1WYxNAyBcyWqrVgAzrxFS8",
  "key14": "HfwMeWpJqLBnazr1TnW4DEAH8ruJ7vC2FbNfRbw6wKBY69RNoSNJ2SRgqNEZiMgkfLNRk9VdmuNM5pgi5UoiFQL",
  "key15": "3SaZT1z6hTqbZ88Apeu8CXqF2QLVt7LcXCQXabrwRjG78yYr5YVpZjN4wspyhVZsXTBXFdsZr8snp9dCU3aExE6N",
  "key16": "3qixXQfg15orr1B2yL2PiyJDWr5ERCXm5aXxnTdj9JDiqviu2cNvQkM8BnN2q2u3Zhb4ZPs1TSeJMf7sLg7DQaMW",
  "key17": "3AngXGt4zk6gLv9TvVrMnsRQGdzGmEFpZy2YTTHNRqCkvG7YcvCRKtFjER8NdWmgsYrMTVjqrvym838qj16kgpFG",
  "key18": "6471K8STW84ebbPAHpG8jqfS2UxPYQTsi6aNqZjYoyLxJN4ttnWqbCgRFX7qu4ctG5pMzZKW29V9ujw7tXE7NifT",
  "key19": "5rnLEnpXpwwYyp3jKa5RpxZKzsLfj2kLnTi3r4mvKYEKteH2TB6bcyg8TxUSeXd8PrRUYDyTjELpKcf6JvDmgGBR",
  "key20": "Y6zSpxgovYF3JTBESG1s6HURvLjp5v89CAaq2KwDsdNorafocgoNivvPd7zksjonpLtm8NsUc58hhMCNMSnvogn",
  "key21": "4paN2SHjx8RkuWqAB1Bdd1AB32RYDsr1C5cku2GmZKHQUdDVMAYByrhDtbzc7nHYuYHA3av6sj7JSrRuLQNii4jB",
  "key22": "298eWZ5wPLeGUxVZPTYbwEbBGrKEJqaBP9Z1oxdYFyiu2iUpu29tiBBTcESGrNtGm1H5MdEXkzEC5rY2PypFB12c",
  "key23": "JeYEyAxafkfUjNNUyXUX3yTCmUGpwsMCv2i3YHvv9QDRAHwc5nkMSdkPLkJxayR2S5BXiKuu6mfip5KqHRjVXsC",
  "key24": "4gz8Ae5zr41oiU9gfJRm99a5U4ZkPcpejwjAmggW8L4PoCsyMdaCSgeUdb8XVYbrauztKtNy1n6punYBDj4ZFwzh",
  "key25": "QC9XhAZXioEooWaGdsucrN6eqraH91TY7B5dJVmRedY3MGRPDoXq4xFX7VBPNqvi8V8YWHAsyFk2xtjcV5X6rAS",
  "key26": "5zNhqscuQPYHDXtXuPYmmier5PBwYFPgN96GyDy64CJTVuPrdC7m52dn8759v1bgpU6ucvoGAiHVrLLVcFW7B6F1",
  "key27": "3s7BgxUmui7FA6V9cKWrUEvQK82YsFPUdSNmG2KoBJenwnWz25SMFQ6mYNPy4n4TRdrC1x1LzJk3X6AXHKrgcZyU",
  "key28": "45RyTTYGWri7SF9fD8eWUneywmrgabfrnrc7Nr9AnxSYmjYm2dkkSRW7edmc77LWGBDJwz1CQGueNy8aCe9BUPR9",
  "key29": "3nQkEEAACpnp8DMyMxHZwkAkc5Lj295GrCaWgkk2K8MnJaECyeGgREFawD47aUrjWZ23apAHDXVNYBubDGYQNo8m",
  "key30": "4vZH52tRvmZLu5YegCZ7ZtogfMce4WXMxX4pud9FwKStVCMZLugmX7cy1ppeu63XCeSqSJywMuFukhjw4yh7a4qN",
  "key31": "2JdLwGE1DJwXNiiKT1NXF4pRt2JXjxZ4YAiAAzdfoG1hBcg15i2keAZV32oG5FDS5awHSLiVpz572jQY3qf8U4Jn",
  "key32": "v5PERDtgm82G8yX3yhU5nffx8Li5HtWaJhbKfFr87PV26LmbwKARfZfNoFvVDGba2AiYybqmToQYcsTvKEec5p8",
  "key33": "oe2nDpjf5FsFjTGzWaLD2stmHiZBqifBGQf1GvhaDie4JujRVcS7oLjpo64eJd6T5AQwVWfaWxRoyEvFR5e73TW",
  "key34": "5tLieNnBrqMvQk9NGj89JWQgdgWRvJyp86F116VKr2XdUfqLAmiBdMFYZDcBFDM7Q1jM3E4YteJinho3AAug9bwx",
  "key35": "2dPgX5KHWTi9s26edUdpzQmL3cQMBnRUaBnE2e3GRjjdohCa4MRTLGoRkXKAwvqZrH4pEwQECqApWYUv1amgjNhN",
  "key36": "4c1gHAGWBABNtqxuZ3QbwukeUjFGHxPxyz9Rm3rRWAky3Ne3thsHQ1FENBGmvbeiXqTmm5sW6wNwKN6dBGvmrCrV",
  "key37": "2eaJdHeqA3tW8ffVAno6vszjWXfpYkfvDDHVV1oo38BmcdxSpnjx7JVQsLKDGEkx8GoEEC1t6A4Yokonkw3dWY6m",
  "key38": "4pcYxFxZpt419XZH6ysssrrV6kx3AqawUqCtKZB9p2x2sZSFogf47TuhLv4VhtXNXNRkrQJmxbY6dCkA2xqTxDqh",
  "key39": "gZTzYVPS9EHGW8UfxW7H5GBXhWjLkXAM34Ymk1UuSD1uYnhssUFVaoWfzL1nNgrsNaVsxDncNLgS887kDUVhXeR",
  "key40": "2zAJAJm2SpZYQZXD6vEERMdv4DDi1WcPzvZifPrzUpK7QCoxqpayJVQdsdtFDpcKHNeZnSavMYcPr8we4gkmvurJ",
  "key41": "3ejPQoXGRtfs2bz7PqAaPHgnFLx5dvAD5FeJL2fcDCTWbHDYxWsyzmCuRdLBW3FsYcaBy49bcaUm73MLn6RERLEj",
  "key42": "HBwzzpVmk3RLYfPvjeE2FEw2c36QJa5PVV2eCuHdKwTCwTWdpx5QAiN8iJAq6MpTqteb7YurujAhkcntiGu2cVS",
  "key43": "XzSHRL7P9aMNjrHhNYEiNtsjU6QzYuN9gwvBXZuhX8XNxqi7kxWKb324vjBVnRHSTrkuovP1mTgJqMqA12mAcoN",
  "key44": "2HLRj3VDUJJzyTbVvHZQafB6CDmQVCDRdjUv8U8eSn7SH3P59Vfrfa8jwqwXAKxiD5yzNxh3C2AjTx48peN33hFY",
  "key45": "ZUmBosM2hQWXwwrZHR4s4WhbxENmFwY5ys4YgZqpQUq4WB4JbJGVy1ma1vJTopn7Gskysxcd2qXsDHeJqXJ9QwE",
  "key46": "25SJvmUzPZ1QN4XeLxvnfSme513TW6nUyQz98jnxQBbxNwgvaU5jvhgjeg3BQGuQeo9GgRoefmnmHy5jXRZwsDek",
  "key47": "3cUXxf7nBNAjVYamNGtxQHRQ1erjdXkZuh7HVM2un4p7cdGanvikMcuMdCHC23R3WAkZWBh1KDxdG6mFbeoZNein"
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
