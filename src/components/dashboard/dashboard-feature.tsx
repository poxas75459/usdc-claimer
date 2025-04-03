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
    "3ya9Vv6WdTzwCM2J4DdhWd6CCkh8nvcPXp6MfKJWS3CGmxTUeisG5mfoHSYDeirT1KdTG1gETvcxqdhB6ysM27ZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rzhm6KzeTT7dbDhPQfnAqZaAs9dQ5DFKp81iuwzegJiJPH4u5MKQgAz3arEUzMAy4x5aST8Mb5PKTr3iCtFDCQz",
  "key1": "37jgjmPKXhS7s9aR515iso6m74yA6K4vN8ETHiQ1BfQE2k3Gur6BaqXhRWXCoyxbkAPQke9pWqsUR2r1oM1rYELm",
  "key2": "dzWTjqi1jUUdUHMEm9yhCPCG4aa4o1xF9uizLkPsmeCd5BM2Up8Mvnsw1qV7quRZoSpmp1WPUaai7kVjoSaXRaj",
  "key3": "HzrJaAZchxDX8MueRJjy5sGGcf9qN6sVSbmX8YuMCzVkfocC58aazb7rq1QpGFwDPZtPML4gjAeZYhegfPafKcZ",
  "key4": "5ze1xGi5soUbMb7LTdSEm1hqtNUHzHGp3kCmxkyNTYHNe12Phr9GpXfputn4uzq1qoC64HQBfwmdNsZ9spq1md2E",
  "key5": "3DsEefAfpQeaMphLJbN1gTGscsKpAAapr4swXrS3sQEzbZG2fHFd8UBDcwLSgDSgcKY7VwbeCXSTiUfuhFG6HRYK",
  "key6": "59a8bm82VdqUKQbQF5mhxs8zTP1Z71EadQjhCEV981bzhKF2msD5fnb3vcNvXtGm9njvLbbKZgEgHbjKdKSc3wWQ",
  "key7": "4WPvPN2D2edYeTgQaQgWv8Gi8YfUvvgBwnX2TTzaTjv6Qut9naeMKZeUfuFqaSq9aC9Rf1v9BDvJTgdN1iQvzVhR",
  "key8": "5sb2nZyaXs9UKzmhbMdjJmhd3BqdQewiqUt6qAStTp9fUa7xUxjHrj4UP1DUeSLkcxNEGyGNJJgLjvxiHNxbREit",
  "key9": "u28ibe9mdTSkpbNR9FMKhdy8m19KPGDCwYJEjiSVx9Rdfamj6NnebhtfH9Wup2hq27XXUo6TqDfAQNVkLrfwxDz",
  "key10": "2TzyFCikq6jbXw3v1RymMawBTxeGQisVtiSANJbCg7mubWf3uSzLsXN7CLeRaTYvofCz1kgysW6Tw1voSZ7SEmGp",
  "key11": "5Kd6rb4CyHadimB1X5WUmvE8BK1KrUodf16sPnD4UnsjPyi6oeCwb8U8rHBxZZZKZV97dRfxTBPXAkAQnTnkYJCg",
  "key12": "3AdHjZYUsKpEAeSdQbzfTV24ukSnXHe3qeqheLj4qjUrEi5VafCN8zQ9QhyD4eK7nG7WmYpJc8YpXTgaKG7jgtni",
  "key13": "4LmNnwXoVXZCwrq4Hn8bxouxYoJPJJ2a6yxuYmNbUMgwojCYWusQqotp7XWx6vzDXRGzKoD38WQErG1xCybCMsbv",
  "key14": "2YmY6imGLbnWgG2pokKrM1TQ2mvgDsmbQPxypd7zkn2SBTtpTgtU1xdaaeCKxk3hvQu6pzkmcsag8hmrwdUatt3g",
  "key15": "4n9eaKQ21S3g8FSdqksQcomxhehFJ9bNVVwtV2vMrzdYwjeC82UfuZkCnodVGVjd8mCQRzvSnsaxeBXEcRjuMyCq",
  "key16": "4afdDDmkv3wwR1vTy2kcXGH2Y1MEVBQ5hSJDnXqFvB9ULfcYJHs2HQ1zqMvuT6jCrbJJkMe3eCLqG1cPCjtRgGV3",
  "key17": "PeV4aVHhAYbQWyiDWXTzQRJeMDTqYuAYjqx8EDPAkWzLqd1BL7NAbdC9eXWoyUAHzgAsV9PGQUe22fHDVPgiDDd",
  "key18": "379xMmUyoZf8qmgRd6Muk4y3jXT9yLqRdJaGSWXhYT91hXrWwdKZ3bsEMxiCzLy46hYnrh835gnrJZViH8b8NgKB",
  "key19": "5YgxTKWvKmMp9VjwaUY4udHwL1HdF13Add78CbRsygqitStVW7ZyE1P453ChAEnZwAaT6TJkEbbdv3sD4FoNXggy",
  "key20": "3H5LfbY4cnE7XwK1rzwp3KND9kF2RtT1yfU88Kbpc23A2P7kZwaCG1sWKzwzzPLBTWSmDtqtLTPGoW9Z3ax8MGnb",
  "key21": "2XE55B6ocqn7y6NFcMYAvQ5keFgzp4L8v73WhDnH8T4n2HtqMtSxkBXUxraEJTh6CcaPYCts6MQo4rNTKaPdd6Dz",
  "key22": "496Gq3uoE3geN11uPXcv2knhowfG4pqE3c4CgPM9Z6ebnHxz7LfUdY5px83mvFNWPFabFYHtW7tKrWZdQUd3REGr",
  "key23": "5M4usUyUb86YEMJUmVWwUsAQdbopr8N25QL39ArWhYHKZJxCQRPT4PRnSAEzyFw8cszhmfgr6J3EBQz2rsHNF2hd",
  "key24": "3KMgX2ZZkY8wfK3hhpjfCUACQjg4rvVBFpezFJZ2L6E7y9nHPzc3d3LgTxcv3aTGdRR5jDNuz5GcjZvYey9Vzc1P",
  "key25": "2Rg9DZWzSWH2QF3A9HU77SGe5HJ8rKTzhbrN8P1bpHMNAVaacMKSzNLKnX11oSVksBg3MnHQL9wEXEwEYRfA4SMm",
  "key26": "wJneBQZ3DXt7aLYh26n2NjwptreWxFz4dM74f4ZR8rLd7MwEQcSrZt6jfXxnFE6ttFgg8ReE6yhpcGx8SaQfv5Y",
  "key27": "3NSiNzbiAHzpPmyQE7dB2TDe2XyPyNaVFz16VvMQx7LpPF9yK5h8wJj7miTYsM8N8md95QSUBDN36Kgq8zNd7VBQ",
  "key28": "aymE4sxnFu5pUgDnvWSxeryLv3yjboYubBxiwCSXcwN4j7pAwyXkmC2fhAHjxz6rFbrTnFhfTWbiNTSzzpzZssC",
  "key29": "BpgWq41jfVnL5SBmn5TZMMSSDDfGsqY8XF5PqCkkGJhdQBQBRVQ3sAibytJHPRMEqZ72RAiRH8cmvfpLGvYknYp",
  "key30": "3wp2CtHyXSWjhmjgqfs53AeR1NvmmRCQx9k4wsvv3MSCexG6jGo98wKbxLx1yndGsqwcxMQn6QWKWqJxAyjkRAXi",
  "key31": "5P7NkNyszhbnUHqV8XrGX4BfR3A9Uv3uYt7bc5k6aGAsYAhRjz9utNDDApzsaQnURT1kRTrjMsPA7edPGPkX4ei2",
  "key32": "4srPJWDGsHpRBYQ5xnphCtGet7RRinGJj1Bd97347XEt9kbHKgVEaJQVK2PMjesh6CjngRwbVkvpZKZHRHoGF9kj",
  "key33": "2PqLRyF5kVmhzdRmadcQjF6ok1kxCA94ZBoQC397wpKLBzcbJ3V85ip3gvEAeQ53Mi2ciS4gAVXh8hqhprsqB2Yg",
  "key34": "2F3Xic74Ubhsf3RngMtak7pCkB73eLoKt2AVsKsLFLcnxXq72yuxUFDTUfY4scsHWbs14zTxpRYNE9JepC96rFdM",
  "key35": "2ddGtcbn2s5RNxut3qXRYP1rD2Z5iV3dyYhpBx1ZvGbPDrmqxkqumeJEZtyKWXb5goG11FHJ1AetEQq9oJW1NSnw",
  "key36": "5q9T1wF23ipmsfvi9PXh3n7dXQyR4bGnvrSnp5sRQxy83evWYnsvzV2uwoH7HpdFaFe1mDJLHLxFQN4ysZDaQUJH",
  "key37": "yK2MZB4PTqzEP8n42djSo7XYRjL8HwdFSF2wxMcXXhW2LAjHpJeYqThj67GPkrhCxwLP86qrNdDsDHNvrnpDsh5",
  "key38": "KPLKGvJe2VA5j5i1cCTzy7o23W2A5Ya2fy3fKg7iLoPJaVpzGUehsbwsS3qRJGa9MgHgUTAf2wccCd4r9Yrms9b",
  "key39": "vUgu8jF8RhpR3TQhEnNbjgLUUw4c7Cq9r3BEW7jcZkf7FZwYFTd5tDWd5sFRhEoNHgWckqCis1fVR8zPsxiTbQv",
  "key40": "5XXqvcEBEW8h2PqFdwJjZGfRVpKkDUwjRkbgnmkCCyJ2NFwQazZpGWw32Azj14K4zkaqwU4aYpfne4iWCjoPgqvV",
  "key41": "5pxKpqUavwt87xq3iUwZMiAGotKyfzHRpX3jN5C28DdJvbaK4i11qtVZ2fFsjFJeJsEjvqZjjQ3wHjH1N9g52cmk",
  "key42": "61T8BZvQ7uxUHwqgfNQ2D9GfdYcVaA5Y7BYjrpY7KhEPbggBbN9SxZ13RiX721SnCAqGeDLcqb6d6H2UQDqmK6Ks",
  "key43": "4JqTRkcvVffC63u9CKxnhEo2UZADSsUJpr3HbYXQkMN8paysQswYaHNXFdsgJNNEN5j6bmJdnDkjsXEdC9KLPodK",
  "key44": "2KZya4G3mWAnQd1LLGCKEnNUSj26TbDQR7n6wdc7phsGmpVP5HfJP4QWmLCT2iNZidA4r7Q8MYNDJNbGGDGVbZ6A",
  "key45": "Xd7AVSjjxt8JwzckpGfQythNsUWUpbhX9bdENzQhfuZsMxHY8i5Svz9QYE4BGE8omVYkNbkv8wgYrs5ZwY2yro3",
  "key46": "31xxHY3eKYrmsWAPagX2DJpMuQPHMXiEWFyqbiKNbbH8GvCQtnSVsifZNuuvaPyFRKyAvY4gnQTXLCGhch8KXS5f",
  "key47": "2KFsWFEFPS3ykfYh43mtWWzpEArEM6LejhdSws5ostdGFAeRq6SgkpCbK9esPiYLcKz4jni7gEx7aDoWjWrV4R1y"
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
