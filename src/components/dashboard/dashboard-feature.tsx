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
    "eEgneBwvewVemvJwdSFMb1t9bjM8wQFQifVmG2jZC9UhwtK6NBixkt9Gt9DQRQBG114jJkV3cSC2zJN8ZpjXiki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HWt6bkK43sKsGrwbFgz4snmY9XThgud9SJxnib7hboggd3K5fBbxLT5GwFUqhduqBPvrV59D87u1CRirb6DdwCW",
  "key1": "3ZdmKLRJCiwB7bbWFtMCYjzX1rRKWHJ6MUv5ZpSRF9xCwzsYDemvPLanmtST7PbwYfBXU1afdofMzWcfYbQWGPU4",
  "key2": "5sPharkb8wE7qLb6LMXFuCJj93s1MiW5v7DLBWscfPjQvWz2Hs24SFnuy4imHbPQ6z3duJH8zfYDEXsyzuAQ1YsV",
  "key3": "4MxWkvQEvF173A2xLmELAXDWSALJr6kT57Bsyjj5EmCGdFUXVMzQpBt4R6BavZv7sMiLPsdXkzUy8GtCJGC64kwP",
  "key4": "2xE1R98ehx3C7yPhGBRZGKLFusPLDBGMS7LvjC9g2mpxtyZBTfXFBTLMdVrHGsB5kbgSEppSutkynSfq2Webj9LY",
  "key5": "3nPssnzUDQDFpGVs74goxxFmrofVbExbzZnKp4YZq3osXojXVKKtR1WrM5SCKebo1PUTwwQiXwUAcjrCkRxnwdrV",
  "key6": "4Y69Amn7coiRuethjD4D86BEcLbV6snEisewfqf9KKVJHj2PDHoGDpWBVYANcq8Kynoi1viaJrXvLTVeJVXi5oQ7",
  "key7": "3aJpuFR1rgLcvmy9egFdMKPeDPB1rbfR7DnbsR69D6mqZPuFL6BaNfDQDuhghaPvo9EzLQKTur3XWzTJF5dXA5i3",
  "key8": "5vgXKaGcEgs8MaGtSaCv5YfmCQfXpZaMYU72jLo4nBv3rBZqCq8QqG5WCofV6z94eGTRTfaMQ2kfcob7fmzCwYZJ",
  "key9": "kbegQj6eFZPh8eKD1nUR69HEpQP5ygchfL286hZEkuXziqGmLnNhnj7FT3EWE1Na6KvcL7xrDSbZL4LZDzK7Shw",
  "key10": "5tDr8cmSzyGLGvAv3WdZjyyn3h8pM9dvSqfZxiavi6XwFGMJfJ8n5Jd81cP2JgcTaUVGqVMyVCrPbDdTU4Lr7Htz",
  "key11": "3yEXwtBtNB2Dqar48c526jmd7HZz8UCC4NR5Qt2EpQHjyyDhP5D3hBuhUgw2HK8WvevjV6vvT5tVZiLVB77YGDx4",
  "key12": "5B3c1rXXxdx8qNaQ3x3bgLWBPWyzfCwdiwqZ4nwaU3GL9DpKweyARc7xYzM6JwQmFafCgs74bpYA1U1hBeyitb7a",
  "key13": "55sQhZ2GGaki1rAvSssVPAtgL5uQFvZJpPQvLytczy6L3EUkMYmkFBQBa4vBYT96ZJEfJbMmQnWcjQVaCwGVQA6B",
  "key14": "5hA9vZcqqtpScVUsQptdP58vm3GX2MgZi7jT7go7vbVqq4EZyorKx8E8iNJNBMp9cnedmF6obCwrPGHJnsxoXE6h",
  "key15": "4DJfXAkaDK313FDfBzLbYQBSPYzNE6KB68APvv7bqYdbBQJQFxYDqnphoXeTQ92CBG7F1yGfZmeewS34V4monZe5",
  "key16": "4uZYfjN1D6mR1dLb9K7gSK9pJDZaJZDbo5RGDink2r49ZGJz8cjgbcerMba7UHebehpbSrndp7GAgBvEJdZ3ZFGG",
  "key17": "31vQTBvLoVCtsp6KrXqhFcVhk4bqCEEpmEwWKpxVq6YWxt64RFvCHp71WrCm8kApjGH1yHU7cD1RqJrgVdGkSUBu",
  "key18": "4sAJikFTQHrQ8KAUoptqG1hSJYyHC3Zznsm63QMnRzVhzpKTcQw4h2vUCavpsra4QfGmF3YghtzrBjmGujYUHv1F",
  "key19": "AUapGQaXxHh34oXMWhuJTUHZTbjcF8yDrcKLKFeKs4f7DkV3pQP9Sxy2mYi4xiQMDW1dhdL8jSiKAHa8aEnNmtp",
  "key20": "4xhyTQXNdw3M49PBsQnfe5oxsWi3Qobw8ytBRmRVhRAr7pPYfT8PpUk1PAqYHqYX3BR7tw4cqD41XPSy37XbBYDd",
  "key21": "3ZqN1orqpWWwjzhtjMXTgqJbJSdGP9eBnSpFbr7jsoEXsSPmQBVwWekNdGtqTLsotQ4r2bQrnpWvfyeVznPouZak",
  "key22": "339BFaKJK6MdPx7sZytCcxSH6vGyxuAT1XZThKc4vzjYWVyga5F1EnP1yLEJAadKTj17xyyh3o26LkThELakLYry",
  "key23": "2NyjMmKNQ7iTFRbcba7aTM3hRA6MTcamJzjRVddNe4tJ2665GBUoApmudx4Mtd1h6AhumzhTFQYRzSHQTpNzFauj",
  "key24": "kTBbxvbJYbp5aH9gC2hsVFoLkdcerVQBrgyrTb5omCK96wCgbRdaNMNCkhaCyxGMpK9UXvzjjqd9v8VwEiTzz8a",
  "key25": "5XFwzLxAz17Rw5S2aN8m4T1hWLrfXZfyCY3AhBXDxqVgXLuBpi5N7rkAQCjWLFgYfLnoxLu93NWVFQKJtXuDZwnV",
  "key26": "466gLeqMuM9CG6a6bnYGbHmTM6qScByEy8LrTZ5meFSa1LrcLRG62qF4eg657RNadsTz2yxYqcXmPMyMSXQbNK56",
  "key27": "4H3skhkoZz88tqMTXh37BKCB6KKz6QtiFr6fAkA5CPjAarL91k4MvMbL6ozRm2u6fXqPtYZtMDu4bsg74WD98h3u",
  "key28": "5wxYEwvVY1QhGoqvgtcRJKYVyUBmuAGvTn5FLSNkdbGhHBiydQ7aagbd8htg6tb1HkexMpo9VvYERZsMwGhc7DHK",
  "key29": "3bcyZoFmZvVXrLfJodG56Ez6dvkkUogrEZ4A6s4S5EBGi3uqezusJKnpmRNB9gk8oimECFh6qXTzEw78rQxfVNNy",
  "key30": "5ioBntqe8jkah2hcvuFWejS8dDrq6weDzUUxJ6FBRrVpH19f2xvVRWEnJevBG6J1pCS2R1xYUCm9DFLAwunXGAko",
  "key31": "q7sVwyQzE9QCAgCmf1ZGeT1WLBAkKvDaxEYEiNGsomGP1KAfYjoZf1K8D12arXDNgrXPw7xNREGgiCgNWyakSfH",
  "key32": "wrM8h1ym3Ze1UhjY7LRxGdir4T6q7waUQ7ZLTnKHueCSsTG8PEKdmhGJ8V7XrWYLdg6znJWRCFmV1fS752UHURZ",
  "key33": "2uamDSe6jMDAe46AQ21QD6cggwu3Bhz99NEXxFdKTGAFVuEKqZqjGGCquUACjDYGKthfLQaEJNnaAUsC5ALgJtsb",
  "key34": "3CN4vC5KrE5Y7UnZu2NJTCiGc5pFTzcYNuLDH21BpK57CPGLgybpYYdSdww5K3ydgsBkxYpg7yey3Q8DADZybeXR",
  "key35": "3ob75JticsZ41SeBBy9EWnSuNWBFm6J7cAzgJhjsv4uYbsrkREuo3qKwjDy5n4m1yDxLrv5xmt5gZ8vhEMwuBEJP",
  "key36": "3tC4mDtZtmiSbyanc8GJoXWLxTkkGuxDx2Q9y3wmHi7ZHWp4w2BmePC7UbmwrdmxkS1iHNP9MHZ8DZZ3VCLaf4Ly",
  "key37": "3iZv3otAwhJTnL5E4BPD5TciejYE5DG46eFMTGpvrbuk1rBwKi18szF21FDAtAvbTTHUUU4H1mpKJsjVsigdsm83",
  "key38": "3GUYvT2DtPutDRgLTuaYwxqW8mQ9BQSexfQjDZkSfzrXUkfc34twPTVMbVzmQNahFetf3EfibgHVGYSVxeH2SwMv",
  "key39": "2FNvrWCpK33deH9ntFjyTUcx88FpLHfQ3Yt8ikUbgsRhMWMHijxCPVxSVVeBiDTS9qwjjhgtiTS94xN9wHibZ6HF",
  "key40": "22PXfpd2dw1yrv3S3Z4n8ffQUJ4LCtyKZpt1KomK458SbdMMz9U3dSJCkupzGr1X9fX5FvKMZsaSPeB2oY8pffcb",
  "key41": "49Ass7GUhhV14eMoKA72NXt65xT4xC1wcqneNm391xRn1fv7MWcLGX6S3tzpd3BjBTwC43eMu6Xniuyf5m29gALU",
  "key42": "5NjDR1HsFh85L4nEiHPuUHEuNsvQXNrj3U121jJpiRsfWcAv2SCMPj9ySLnoVZdVFJddRyRY5d62R7o9vqPopXcQ"
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
