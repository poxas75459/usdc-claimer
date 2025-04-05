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
    "NN5zLdJqXzF9yHoijwmEkxtdBPweJ5RHpb9FJRtDj9wcfCUUoace8NEtBdC5CoU9FqCP7XtV8TuJDTq5DMZMyKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67BHfM89BFtoo4DV2phBz6GS7rfay2GGy3KCpkTSuL86ttjs4iBHLgPEjaQ4DQx39vu8RWbxkenkuew2eFUBz9tT",
  "key1": "3uzSu8PEeahiYDdf4WQVqZJeJ3X8p6k1EktABWty9QdJbsmv9kHWcVxqxY4M4FXRqGCXKV48cmN5xmYpZ4cvotok",
  "key2": "5kyW5kxxdLiLjTWFzY3WBKUG5PLsWJ5acUEn55KWSFDY6tG4R6uVNBTAZrULFkRxwSsSSEoZD9g1vjtjBsfSkcoX",
  "key3": "2fPsvtBikAMn26Zcs8PL1Adb33kF9JGsu6wCQmV76Xz6qNZWEpXtezbBXugDka69EaRdJpN6gMceM3bgaHLDEFNS",
  "key4": "2syoVK4h99PdMZ5tiv3Z9kp8PjAzgqxX2cFDzTuVYxSQKQfAuki8f21JRVeDZaxAyzzPVsEdq4NhJoL391XXg3d1",
  "key5": "8CX39ukbUAus1Uz6aq2CrkUcJHi2hNqJtbqj1SEVyCC1sZvELeJVHynDmsyFzhzm2f5LdyjwiYn95nEZfZ3T5nR",
  "key6": "25YTTNGYramJ1MuTpPanGTMqUTRnfspjrYXrgZ2tGyzY2FjxV4uWugfeHrpXCHMseF5PPZAQvGeWzc3jGGP98WeV",
  "key7": "3yff8sA3Skg36jyruaNhtZgLVEi4KJji8oEgjQMhP4q4fMZZPN42X92H8nCeUBBUvsXAYwtjxAzuyyDyze2rgNbD",
  "key8": "doPQaXcZyogeLvLeLNjaQVfRSC9VAJ3ULYrhn27eusDszimYNQ4Bza6k5zGyEh9EDvx96oEmB34y78fupVGLkgW",
  "key9": "2vEa5dPmK48Ax9S7Ei9wXfXhLkHqgrUV6TCLpSvMZCwXAFaTVq37XjC8KKSPqZHzfi7rU46rRG4BRvi8vGvaycXS",
  "key10": "4nY7FKpEojdJCPABDm655yyuWEuBPqbecyqDM7t5hzAz8VSoLwoACWFxHcGmdP3s9Eh1fPrgwbPaTbE6YW9G8xbw",
  "key11": "1vPuqas3RmF5N8ADWixGkjm7BP9xEUptv2dbuMDHutv6udTXfxZ9UGGvxicDaht1HdkkUTR8hovs37zBVJA18Ts",
  "key12": "49HEDMN1DfMLQEReTUcCkdFq1neHMLBu9cdNc1NpEw5jtZEsezZoGab9JrYP2qPR1FL8Gi4cRrqbWWGxtiDEzQ25",
  "key13": "pLNLTQhGZNCn9aDk9CmtLVHtNhfqWnhfJvaSDKeqbeYRzuxDtQwh6UN7VL3iViEoikcJUCHAfLDfP4iLhsgAHg1",
  "key14": "UdZyxXNQGHwcryMihfbyDD9TtCbDLzxQz6xJrXdzKYvYG2Z2TmFcY4YhSzfwpTwmfEfgTb8bTRHoi2eqKNjYCh7",
  "key15": "3DQhU4w9NTAj4C9xiv7E9cpz1EA2zTh15pfSBespFLfqWC1foP5UZ14HeGE3dWWhF3H3EePVvHExKmHbK2pz7tjL",
  "key16": "2vcHR4pg6q5u5e7ZkJEq429Yk7ZccjV9tuibxww4GVvZeDNud6gNDXr4KufVu5LTYggu96FvES29yPME9qfWd4Xe",
  "key17": "2KHoqmq5T2MYdw4qcH8YmvSSqiABqM2zP2EfjXR9d3Vr8cvSkFaZ1e9u4hK8G3wsM9dDQUxi6zrS2tFtStyWXvFn",
  "key18": "3zSvmheGxL4dj8tsYEQK5VTVVfdKbmACFSXCqdAjiJDEU9qeZ4Xniv4SueRvQnwa6KfFkvHgcmEnLGHBTMnhoWkd",
  "key19": "R35yfZ3hnAAX2L3vFCGE9vS8AuB4Gq8BxYVjmk9HE95ZsL4fiCm3Lfxu1FFdXYQG2ggipPFPTLWPMgSjGeRUgcd",
  "key20": "hiytqZB3tqCL8EA3LmcuBEGvNo388KkkRN418pqZwd4MSFvj5XEcYzQmnPexLsdQ7zSLLAKy8vPDRm8f88GWkLj",
  "key21": "3MuRoUfQWBZnFwAhhHfpyDDNPdLJ6whXwPeDsdq2oHfghHXL9DLJm5mV73saw2tfcR1QEjFaiFhY2dVhiWqKJW8A",
  "key22": "3zg7GQ5YkyFLFCW8SZoEpxnAV5gzhAiv7sywsgTUtwziYurktFZpiXHvK8FfqwWy4k4dL3ka96ag25pbD4TdUXep",
  "key23": "9g2iWAiy2grhTbykUXC7yjjhzC6j9MbgUooJM8QkRK8SSVsKhSWE5VMsRygVhrC2D3qtvgKoa3HUyzCHrqoY7fW",
  "key24": "2YMX3gPEDMCUAix6JpVgJ8BVvV5RCjE1hzJiwDLQK89v2szT1qQ6H25PPeHSvLd8zgKBXqwLZiPmLEy5UAUbnnAx",
  "key25": "21FXXZh6KMDKWZGSaLmUMUHj5TfqPb72U3Nzm2EdFtKgPTpCBbf9H8j2oX9kEfYXM6Lk8BsV4rpGU5eu6bQZPRV4",
  "key26": "5DuvWoRsdXgre5TTg6UvXXvBwGeJdd2zH14VYHRZ4yY8hPDh9ifJAU6F9Pj4MuheBLkevox82tgk4NWwdQs5GWYc",
  "key27": "2vZfyTXFcByqtjRDhzacJ4k4mEeUCBKEnBAQVNNrXq4GKKHLL4QoM5MbyFaVHXHMbGW9gjv7LLiZuSVqAiJkjr3v",
  "key28": "BNoXAWp7MLTSheyrSrxhUZ2gsuDH8dvDprp41dsaeQgyhdn4ZJ8af52puwmkbTiLG7ibzbFeQw3tLbLSG7p6hLE",
  "key29": "341raYgLFmuL4j8AehyPVtC7nwxx4bJrumQkrWcpmwwwb3LdoyxBPPuNLn5Nzd3U33M686wFoahRf5jTYQsS1YVX",
  "key30": "8A3cgge7XKJNXaV5Zm6Ktttcum5gjxfCN1hpc2D5v2YyDQU5pdJxuyizuoDkTMmGY4zmyUEUQpfHCYjMD9o3V3e",
  "key31": "4y5Jk4kzQ536oYSWPmphjYjDoBx9eF91NhV68hd2B6jAnyWtkzZs88mgUAhtFcQqHWNVE1xxGvTrxntcyrtAQxMs",
  "key32": "Am5bvRmxLofBZnqXk6ZwaPVacb15eBRqogdz1QASoNyKXMCTeuUCofpxJLiC2Yet1QpY2NfswTSmGLKx75akyjM",
  "key33": "2oynD2vuvCuF2DUZpBhPn1igwS3XGEKfsWanRxYn2NSC8ErvGJBfmkEUoTyGaY3u75mmsMjCR1oWU6eQpgqpjgBZ",
  "key34": "3bPEuouo6fxx2KkzccSbKHQ35Eur6nMV8znWcwGb9LbPHDM7nneLtKm7Q1nRG5NjpuAniJeBSP8mae5srSoJLama",
  "key35": "QDHpssv5TEa45K8fejGaEvdUjxdTZVPT9GYggFC2XHvpwvQSnSrWttfb9gvNh2y7S1Yu564CAptcZ789nX9tsUY",
  "key36": "5pJcRKYou3aAYUu6RbsiSGZxPtpykxkawTNrm558kZuQog3aHLZk13j5PAJJ9STHxoeHwC8Ay14EW5wwEwBFCHcV",
  "key37": "5axG24AJ7RYaFK1VLVG6zgNmxmiC994QFVeMHBoQYx3oBan8cVtLjW2hczSveQtAAG8Jn9pABPkAjpCgNwKbCjzK",
  "key38": "2a6moMWpCugTnMzzmR9fFKniJCwBaAKaUttpKBFd3kDETHYAiDr6q6iVnrWVv4v2VVEaJpCFNU1tMFiFMUR8CAKh",
  "key39": "4sqWv4pnK4eDVAtS3VH3QPk9GLXgjVAsJFTHE89t8bU3tuNpbSYyrpPBn6CbKp8SyVoRwjJqSTidA29mqvz5ysxj"
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
