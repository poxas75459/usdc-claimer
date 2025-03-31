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
    "63ULYuotZffZT8cehjR3ZnMQgKhQmtsuUKodYQN2Y8oZiw4NGUPLkYQq14unvbwx2FtdM7VizASCqfKrdZWJGfBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h2JMHfJqisKcwLFsjChKAu2ND8Su265NPshZQBDnL5gQU84noA7rvZNcX69ZHTSGXwuNCwSQj3Lry2pcSzdR3Su",
  "key1": "4aehMxhxxTG7EjqZB7Md9iPAL8jKefrUhVTcYsYNw2UnqW9WftLpLeF9YTfd681m6eSnBiFwA8eTeTCgCoZCnXBM",
  "key2": "5Pgh8ttK9HkNAeKsVzN7E2LeC2vmgH6HrS54hV7FzudgPS2mMGMMYHmHkaCbiNtre9gc2zfKecvEKugPF5qydj1J",
  "key3": "2DP2PqZdVuT1QYHFjFiy4CuzM6L4Y8iPkfdQjzdbUKJRXBtVeWeM1cW9BsDv4RRohG488Yfs75X1axJXh9k7YwdC",
  "key4": "4Kwcm9MmUKmgXJ3TgoguYogxVw6UZrGzkFzVWTpPS8VtiW1zbopWrt1Frt81hAkWFiQ9pPY2GWB1hurMw7fvARyE",
  "key5": "h74PJiM9L6fk7w2A5yhJym61hTuGYHm9c7u9oPQRpu8xuLksEi49E1VEHb8bpyji8Mg4PPCYGxTiyG64Ytpw4kf",
  "key6": "5aHJSpBxDmmDHQfWE43NUXdTreBoFoorgSyTHfT1jkv2Z4pEZZYrsho62hXwjAsqsyQMsdV3VQRDX99satYBLYJ7",
  "key7": "2oLnmj4ZXirhd6w4vPrUjUBcAJv5Sd8YBr2xXUaWuGUepPDiSPLTRqPsBH3yA6aTmZEfDzjKdFs3cWTv8tcgN9KX",
  "key8": "2y8m61HV4RgE5H63CLsotnP6kxAXEznZVXKuHepHaK2B3bxvaJtrnocoJsNNPpFREGNfMq16y5nzYHwFKpCdfQo1",
  "key9": "3YCU4VK5RRYLoKqGQAWmYKHbkrEsFtYiYZdGxUB1khP11pdDBDSsMsyQ76pLk9rwEykAii9tKdZgC7Aodf9ikCad",
  "key10": "3fH5VdQp2a3cGRZ6j3vt9k8VTW3ERNzkPKeocXBwnPp99Ar8JE6gjQrwvJckBrCLKGJSR5Gic8dAncRydApvWwnD",
  "key11": "2GnTpmSVUjrviTAdKZNT5dATWKnQkX9L5ARzfM9CKMBPLV1P3GS5riMjCSgtmsU5DhGKT9a5v8pAh57RLCxkkZyy",
  "key12": "2dYuiTpWjh72qtndyaEqXVrDGG4puZua78FrkThA1BV8Rb7eo4bz8gPvYb72op5WAf15zoFmnKTACLmt12QzdfDd",
  "key13": "3rwPWTG7urqXSXC4D3m3dR7h6xywLfqrR8dBJT37EXGC56bL2YX52qrsTMTSuaPeTTfDN7TvAJi2uTqPTpLrouwJ",
  "key14": "5BYxYZnyguXHkDF2oDh5kMBaDVqwAhCbqACzkp4TGVGBBuKk96rLRs3xnkUVryJyso4LGRsoMVxJPp85w4VQKuEN",
  "key15": "55MNK39RN6pLJx84RyorBDpD8SFNrrnx9YEmihP6UiLDYnsfhpu81GPXDrfvqKY8bq2un8DB3EncbgQLVhNQscCd",
  "key16": "23mJuxuke5er1ZunoQaJsWdcGfuvBv9TmvDXG5NsNpvESZLGNahUXAmXhyjwCrv2JeHSU5b299XwGUbgLV4ZR2F5",
  "key17": "58tpk4dmXgdGrb6CuYhWmooseju98NumdNfi2FC6D56iEYHQTdsZ3VkCNGRZ8CmR8DwPhQgfZrs49ZKDBNXskWs6",
  "key18": "59SrbNtWUhYu2CXJLC8Hdm1ydj6f63jK3J9XCcFXrQWcXtR4ytveWzR2GBZwG4WuHzbKf48e9sKDPCBcNcj6La2q",
  "key19": "5P1XA3aWyEnD4oTxqDbaHE6ZLkBcA8nopN5MhQcKKehjMb2XwFPMEnRQXHiQWRWwH7KpkCXaiJ4621diK3cX8hSf",
  "key20": "5jsH6f7qnb5RQFFvZ6FSdWLJY3k3VgZHLzgwUTddYnUSvtVCgcfXU5szZZfcgjYMJ2AS6iAEJ1K9QwV5P4zQ3ieF",
  "key21": "4u6MkAnJUy4FCmSa6B2xRf6FvZm6qRQG42BE4cjbJCbPaJpxGbLDoZmmXhkTt9m5JcvYmRfCtT6v5yzJdBzxpWuB",
  "key22": "NBjVTsacmMp2SBdkGX66kDe5YpWBe1Pnz7tdNx62sphpUnqGxEkxG2Un4RvQeHFCc1b5keXa6oTFbihzL1ZDjSD",
  "key23": "4fAHXfaAvk4Qh4rJcaZA8nHW8YXX3MGM5Bupf4kUrrDzoFQ1nCXFSFUUcKFZY7x5kkVERzLVPxN3WCmpWPWaYJMF",
  "key24": "64A6rb73keKxQmetdUvTLBf91CG9xL8q4nSh641ff76obqR7LdNEkPSRFozixKELHQW5MG2bUfmMwTnXad8NqQZ3",
  "key25": "3LeWuNmruUBUFjY8hpgEp64mXKb6RBSuPFzQzBz9HRh9ZuuTNtbZEwDWQhMmWtwRSrnJAV4YTFiBGrXMjhmVD6HX",
  "key26": "2U3x5CSB84iRi1oHvSYcXzBoDUp1NgJTZd3ZPt76Nf3BmaouqrodFy2z9HjsByjytVgkGDetHv45tGv9HYqVK7n1",
  "key27": "2SPTqhtjoZCV6jTb4rfgmR1wrbjwu5RcfcKBTbcrNNqSL1tPUQP4ymJC15i9W9jH4frhuUkkf2cHHSv9yDuSKvGU",
  "key28": "3Kv2p1oRggR85MN9Pv5SejDQC2ALHJ4M2qc7LYyuh9pZ7T3GzELWtY3zgYc2SSWqysEZSYGqEkhdYPDcDb6LnBmT",
  "key29": "2oYR7rmChpZ4MTpG6aVGHLTsAuhXwpuEDG5Xra6uxCuupJCSrW2vNKpVQrECYpmdinPNvhBkqxiDanmh8RNhN6DB",
  "key30": "HyU17sCGg1W7d1yGAXdAiQFv9S8LiagNCMwAGkgaGQcPuvDQSVt4SdWM8M1FaJoaLLHAUJrtphqHbRybbVDFkGX",
  "key31": "5q7bS4g9EfBGZKgYFnPwEErojoasgramxyCQpZjbfuaaq6B69ajsr8XCpkD98rxqKT8w54ZPAykxSFT8xqN3HfBB",
  "key32": "3sn1XFYsQKkWuSvfgDRneK5Ta1qJkHnMU3kAmWYHcwcbhYj5NYH1RohyHByizd7aiQBYMkT5JcE5w3TMNWbz438R",
  "key33": "3zL8X5o4ceCmop2TSJxVzzzVnn8p73sXY1CrCExUFbXc5aLNpVAAtWMxobGLpJ4uPjYBwWDKmcbiNhCeH5rkooP9",
  "key34": "2huk3i4p5K8djm1Cn7ecTMzDauxLro86wKbMzbQnpSHa9pHiXrWTTzStsVHT3DAQrR68xFAQmEhNfV2fsGDu7vqd",
  "key35": "51bUZHLVMh4jWyYbKFq35JxaLdmA6rzHyRD2uN8ng94SLiSuhLYHbe2MnjAcvrpgE4MbLQBhQpDeWeEc3C4F2iAe"
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
