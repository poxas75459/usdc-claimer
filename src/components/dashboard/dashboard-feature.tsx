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
    "rqoP7xW1xqzyfVEVASZagNw49wp74SQ6uLiHpywQomhfmyNmmg7HDGLYbcWLG9s72XywaDaQKPSF3bbwPXr9Xgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ij3nQrr5Eyux5sArQ3AGG9MmV2DS9FZSyENqyFzAM5RbXRcM99KAqpTSpinJPDF1u3rdpzXsZPQk5vsmoD33neg",
  "key1": "2JuRN4TJnidqrpJKoExm3M6jx3ghdegbdY51jXt6LGjH89ZAi8Dvv3JzPNNnszqzdWJ1Dnaf8cCweQpjKD5Y5nxP",
  "key2": "5jvzwNZhcHAMH6R5ifM4jWiq4xs76cNZ8epw1fot85gMheM2GGNrHt4BVN4FoCQYy3zS94uryD7kXC47qf9f5jVz",
  "key3": "43Xa6Gw62m9pMndsiVVW5kDXkLv17jt6QNY5FW79jQfjHvS1mjrs3v3psB4GoAnfbvgGvtvNtKMDDGXWoFRQXsh9",
  "key4": "nS5WKUXtLv4fygcDoBzjr72CwzDrWSSYEbuRrqzF2zEdyQERhjBh7jf7pyA1LzS2nGYBAzLq4kTkUfRfVUD1fJa",
  "key5": "2NowP9rbUWDLA1iS4iq1jRMb5UcqoxfojVnPXq61FVa46GV7Y7LiyUossPEsZWyjwaHADzYCXpAa4gaj9hK69LND",
  "key6": "5aDxDcPRYiGPDE7XoJcUHFvyrGXJ2YNZCqNB3hS66HSeAPMbVue1bQEmB3QQfL38teko4uuEJVinPksY3TuGjZUV",
  "key7": "q7yBFm2eTe8cb8epGGwzuZs44aPNejxBCdW94tS5uzxHpiQRDhk9DmPtBgqTzDtcAWjr2sopFRDWMKPEF8RGdfq",
  "key8": "44j8WdePJxgiAkq6ZTPrnTj77Aty4Z6Nfa1vJ8RZW2rFok5CBvKzQK1tLibWFFA1craCStj8xsNANVG72rs28cpP",
  "key9": "4qhtnv2pt7WSABzMfD7wDu1hqYEuNcVCoMN5xEaWBjDo6aYJhU9CtwvScUHmZ4LFcc4mW5sdRf9XuDisHSTzygpV",
  "key10": "EbMo9BrjyRhwHiyeGNM4HSxYmr24v7wbKLX3a6vbzVWJtYQV78pyhaEeR2Setms6Pq5qfGD61K6PuqUA4H9rYT7",
  "key11": "LD3hqYciwQpuTPjMdSuXgbqrvZaMsZMqLSpQmFUQNwWiKdACjLcjCst5bYYXLvnYy7LXze2zgsB92K4Zb3eUWRn",
  "key12": "7RLszT9SNg8dw3o2UuerUxFpffVoLoVzWKuEzNBMmX467H7yiowHEuYjUeP8Tz8FRFimmooK96DF87TdSBfF9qn",
  "key13": "5WcXDrZr7Wb5ruz4n4ZgpLDhDEbnRMmKRRTTh3j3iVyzfGjCseLiGYWkjsVd6NfD8NvwFCoMUvWMKdZrceSWZFDS",
  "key14": "2iTVuwXetMJdYr96Cf6fHSxmk1AQ4CCZCuBRzCM6CApYGmLPdX3Rg9Z1bqRbvyeJcuknYegVPJ4L79DtMgrm4rn1",
  "key15": "4Lss67LSc39b7mEJKQCHcoFShC5vVMK9mdz5fGXraTLNnh8ZEx4GjLSCHXHgJDtCVX2AWZcQsvF1E9oN4jVkTgMM",
  "key16": "38CZTnjn4ydGmkPkL7S8izcQAxBrggnG4YGrKcGQHKzHkspFAL5ovGAjQdAbdan15e6G4nV6wDENYu1RbMw2Y2R9",
  "key17": "4HNatKUCg9qAGiSYPHLuH9w6K9EaYXnTjJafqmxn5Vu6Hhk9CYVuzZcfbhqrUG7P9anrijEBx4wMC3CXQgntfaQH",
  "key18": "5ZuN1jML3BAvjnim1wi4h1USXvbmy68WfMPEcWXEKeA6JbFJt7YoQp9Hh3VkBsDB4kj3RKVzfBxeRHXxKdx7gXdf",
  "key19": "4yPvx6d9YHdmaMgEwDHNouXwhPiY66tndzapbMvRKCC3Sp2Fw9TjTBsVvAtAqdhBA69tWxLvixxnUpjkeBgGaEXV",
  "key20": "4onAqQ6JNfN8YfT1tVvF23abGsodAcdActtWjAaSvPXTnRDuHczk4xt1YzeRj6UrpMmZLJQU4pFeJDFdoxsbSfHP",
  "key21": "3wdBvcwJ5f47yDJC2AXgqgG6xAEgiV9qYG23CwWnsKjcxDKgYakCxxc6qn6ttjeMdBfZ1Fg8ZNghZewLg8CGxdT2",
  "key22": "65jjNyxRT4UcsH1PDrEAA4WDxcHvQU4Zi6ghcJayNfMFYoiGuyS7tLPSaoVGhvbDHYFRdkLVyRpsqrtsj1gbWcXP",
  "key23": "22J2PCBECjndBCn3QBNgDurRLdbgQiAkVFXxr8oPwA8uiFo37Ldr6vdJ732LQacQj8X9ZVSpr3eURtbuvjX8yQ6j",
  "key24": "3FqWSC8pruE3wxDvejhHdWBV8dFQJYVMnRpKYY5nm35akzuRnuNMKynLjUukPSrVBQsG7SkqRPiMkrXAPWmjofn8",
  "key25": "2WbAM5muiYEGhdB9DSSaEciLfMSLDBy7M1Nb6bsgdKZcNcp62g61mLEJ3B9ZsCKdAPXE34pGw2oAem477KALTVdd",
  "key26": "64gaDPo5EYZ8q8Lx6TjhGBaWuvESQFwysNCwYPH2nziSNEPWLjSxjFi44Cx19FcTgPwiRyzhN3VjoctbNQW8vTLc",
  "key27": "5J1S597HRJdZK3XjzqwFpQPLrgrbRtYY5sPvUPVv49JbsaxA6smXGxHjgD4Z5tReKaVyGbu6oqT4QDRoBfkPYe1h",
  "key28": "2WT7KAjynpRtXB5GDym22kAxzS5L7QTkAJc62RKMaG34qYfezvrMzsgXixitrpVspKp5xigNbeNYz3MHYJKH9YKZ",
  "key29": "3KvCkw5HFESmyc4JtQVfS9FoKcisPTotvt8e1Aa6Eg1y5HuZZwFBSxC4mVdj4idb9jeS6mkQ2sG6aR1Jf7YBkw8V",
  "key30": "2Piov7swmRy8XfWttNsNHsofkNUK7GAsrpaWVCWXfc8oHgj2G1iUDZPtShrYW4gi9kYf3i3kuemYppwd37Q3bMkB",
  "key31": "5xBGhYuBf7UfjRiaWRr2ZuhewvQP51rAXYptumWoLHgyo8RcqsVyGQVhD39nAZWCrCNtF1uZmk7hRWuhxXtBWb6V",
  "key32": "4xmvVMuQNxUtj6X4pK7j4rb8dYXuLjM71m4qYPJZQkfb6PRQ3dX1yvzW3kQsmxGytGZE639DS7scRe9bGpXEZUvZ",
  "key33": "52TwXdxJV8ho6SAootv4hEASBYyXPJ5j9z2BfHUtGSDLer3ApjxMgJZFirJ8ZkMaWgcT6AdX7jLABi27RPFj6sxN",
  "key34": "csmzQaGVSrQCkfwidMbKsKaHkHUogL11cVpScF97P2FVW8Gvwes5r9q2LMapWCFQpoRNMFUUKvTmYQL4CPXEnLG",
  "key35": "64wxKXAuUMqzjNhG83xp73X8Up7hFfngkkouRkuzBffHSdEKJSXtDFAMNtHcceMwpfWKwXHTsuTu6Hr86CDBmAwU",
  "key36": "4pJ4cBP5ZCdS4LvkEGGAKY5fo4kiBfhKLirrGPvR2kfAu1Kc23QuE3WxRAWqgckkzdLE8LfHeofuBzk8x8jc1KMg",
  "key37": "3oHM4kfaxKxifHAtGsCk7LeKk7Sst147eCzt6uYhbXSZtcyMo6Snd2dWx6fJicuPTLfn5iFo5wjRtcJy4PLd9Ru2",
  "key38": "2AaeQ2p8SEBTUAN3ncdiQMN3AQ6hUaB1hBJt1FjRcfa8f59kbRdBqgsqZq6UpvUmaLoKMBD9DJinSVWX1uMGJGDL"
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
