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
    "3jCz9FQcJ6BDERjMpVLWZWayS8fhYAfbkfQpUNfWbYxPBXuAYazfqUs7WA42zzpi9JiVr7UMYaLU9k23DsnEhWDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X4ntzjJkmN82frNfZxA6EgA4YgTNTaEYZBmiMgg2zUsY1RSgSALvNbn1sZJWY1P9NjwKjT282VX1Ye486gyuLhh",
  "key1": "3AFAxgt5oH9UGqcEAPzhYnVaDNubfRJXZzv132QNC449x4EM2qVn1RYR6va86v761mVZ7WXraadWsDonaH6csyrw",
  "key2": "5SmRtSFPYTJmiUYbcnYgRjkAWZjUs5fotqPKM4TSvUkoH1CJeaoMSZUyZxFDWmTJYRdwTnR2vgbEjoZv7j4bFNHh",
  "key3": "RZATNb4itsFHdwXsQbfav8jVeJvfdY2yM544kHAjw7okdULnaM6WNZSoru4aHETW316LzB7uHKTNbeVELgRvvTR",
  "key4": "2wR9rw8ZMukspKJCRSJcKt9ZWc7cGCQFJ5pHtmdarZZdHU5efUgNRpD6j5DG4t8gjDvAmWxHP6Bj2cKSUU1aYEdY",
  "key5": "5L6bxYyhg7QJY53SUCFnrREQ6hQKmm7AP89X9GTEvgqdg33CmVtarXXV8WbVmCna2KunjYAsAEg9Zf3cKnpfvmut",
  "key6": "334gR4vjht9aSWUF6VM17NgMcVnFZYkBmS5Ea52ELHdvoARDRqPKjbbgVZFQ4VAEMNhpBg6jV1aLJCcGS2Vw6mDu",
  "key7": "2ExfEPMY6ZJcLWAWhQAXkcyjs3ZT7XAm5kpbpYMDaNSab6d2mtas8czaJpz3PdvkzWLTWMqmEasFiWMAZwmAgtvN",
  "key8": "5AuAWFwnvZiJX96TVxqJ9ArzVHwbYayQ93VFk57N4NxgiNHTo8oCZifEK4rBcLCBuZhaN83p5aV6prauDhiRUFjH",
  "key9": "5vHZhWQq5tWj3fdpAV6dUS68rfU6GkfjpdarnnogBxeASsTwxbH9sWaBcaHXpK8kHoPYgS4WfsZ9D6tnTHbprMwz",
  "key10": "4Set2Y7CuHREh5FvvP99ubYgexvjXEfx9pKY1m4WqBMruuZgnghE6Cd1P95MCKYLsU3mRLBm8KdYSRibMi7fSMB",
  "key11": "2iggERo8UR3CJKXCuiHwptbpxKHAdqb7NjZ13S1bKvfZCsD9dbapLT1bZNRZCpxDeADhrkv415jnar3g3oihbagh",
  "key12": "bEqgL1j6VXCqwuFG1F8G4PommjryTXUpHYRv7ZPUXr6LS6dPfejeyxKxAm7zHC1ahXJyDACKTpsSsDRmKrdoPsG",
  "key13": "474DZaqJqydaCwh2xcsojuMFkvGVVoQjXn8vTLaKMaktojPSi1cw3yL5xWMe1egmjS2L56VXU2mGJwvP9YP524eL",
  "key14": "3zotzeJS4XG46PajNGfnZ1FuUgjMTbR1b36bkHuieoum4TZZmThQUDVRVVZpEMc63tipkAwHScPp8ibdB6apXVvy",
  "key15": "3MwSNDUFvKuxGQBZvDBAACL35vSaYBNe3eAcJAH1ny2ZAxhdGxeW9pMceESrWWBrLPFHNq6FdJqCz1npcaUPCKd7",
  "key16": "2az4W3pmoWL6bPs5UivN5YgRhRgq6RnTTf5vQrbEi1CbzE5bNB2Qk6SHBXZhi8eNyghjSyk79ZhQp8zBYfq3G2si",
  "key17": "3Mj8Lf4BH3q7dBJrB1MY5Sb1tCjwq1inWKmzqEtMxz8qaGcz9MFnZaf16rz9JET6mEeqvWaJPuvKqmpzQg6Xkdfn",
  "key18": "4VpP2idoYMHeigpiLzN28kfC1x5EFapmDoVxQZWU6QNHSzV6apwJuMwNnMvJz9jVU835KDuM9S7nZj4d8WDz5yeA",
  "key19": "tvJP4xEjrVSyGqUZy5K4kAkEj7wU6ZzbYSpB2HdCQC72TTjd4ksKNMAx3Yhr7omd1nBMZL8mZHEVYYicegm7L5o",
  "key20": "4q7UWFWgYsZtQ3FDKC27iGyZn5ee8ubcZu26GRdbLJ3kkkUhjwy7Z3q8Ui6auZ1xQR4EiaZCfB4btMehk7T39Ein",
  "key21": "2Fa9njyJBgBFTMzREDtNZ1UV46nSQnSPc7CQD8YqKwmMi27J6JZ9vfHcAFJoKtdxGRtTJbAhhQvBXXx4LuwXCKKm",
  "key22": "2RYeYjzVgDPmXig8GHEuCtFbfr84aG7U8yRcxjWoHfQA7EVJXPcqfe5g5E5MKyDDWE7yR9zWWDz82t2e6Cn2kcbL",
  "key23": "3v4DBZRzmBAFAQNVWAq8abnoDakqa5b4RXb9mLs75wu4P2hSVo3iA1T4aGjCSKPPLjMcFtcnbvh9AWP4adZmW4s4",
  "key24": "MoPmchThyJc95Ujv5iy4oFW6ndPULUe8TsBrdcCu4pD3dJ5XrJjk1NTDh6HK1LsrEHSd8keP3NArrGscFoRiBRj",
  "key25": "4Xy1mczoPZAfUREyPZSdMu6pp1vFzD9Ck3uDxBsAfxFq6B4xqg356RSmdCXSSn8joUnpSESKGENd9fFhL6dk1zNh",
  "key26": "3erxb8EDhNZNM2ULRrLj1za2BM1Rjr4aHeiRmib9sbjwJhnfCdYSDcnquivSRkLHYzHtFDGikdhAiYfWpfBpZ7Sa",
  "key27": "5wbZH9Au6Wc5K39bn1pXAPoQ9z3RAkJ9YsEQRtwMRRNQxRqpMTBPDw7nTbP3m11zMaoYAuvCmWzyFQcMzSS9bH6k",
  "key28": "3k9qyvkeyXsQBmsrDsELJjWkDFXcgBFbPvUaqKQJniH5Kd6m3uH4A6bzzPS18ZRugPw16KCw4cNSwGV7exGCMJQd",
  "key29": "331HtuyLZFmzAZVw9Dt73BYALLFwSQdgTmbFE1eKWxmoN47MN6xCo3XTc1dqRYsqKcax8JoWWBUjqdzqxtgSCpsa",
  "key30": "CWEE3hvXxweWzgqm9iLh6LBi9BpNH1eaVqiZqpSR7mDZeW2tm8FfR8RP3ak5477PY8mcShMrNE3XvCKB7Za2DiL",
  "key31": "Xh46T5JvU9Utab2ZXkvDJgLgUbXCwRe9Riu5o8HJayKTqs3SGB6uR66oMJ2wUNEWLtxiNViCHiL64xiBuHBSrtf",
  "key32": "4rYPz88rvbWM74Yv7JpgTNJCnTQQHzwdshGmnzSPrhmUiiJLsPKAJwV4rVYPQJSJ92yFYFs8StbmSBX9xyofTSDA",
  "key33": "5UxV31a5XBRF5P6bRHxfko4dLLpp1fPBrvAepsPrTzAyKDxjb4HMPTfUTZXWieKLZsdXKP23ZQatTzZ5hTPLa1ht",
  "key34": "2RoVds5xsn5bjJwaSaKsaGZE5AnDx2QcZhA2GuwJgACDD5hRY5cvWGwPhr971tcwsAp6EaShQj3ivGcYoQd6i1wM",
  "key35": "5a2uUPAddtPuXn3WvVrr5jJyod1eQY6Kx53AervyCMHfqAEMcuJPfgEbQZWjY7iTyJ95z4mhuKZh3z8B7nGyK7hY",
  "key36": "4zL36YfP8mL1FRPJT4Fsxhik8e1mj42SSzNs8f7c1yKuhVKLTftpm8sB86mDmZaxnhWTK42oExPnXv3nuyoE1zkB",
  "key37": "5r4J5x25T3q5vUVr7haYWesPQayFFjvH4cLToUWAWawWPUuccX7Xeve4ESa849ies1ayrY2F1KJg5w3ohKHXCZZB",
  "key38": "4GXMd4EqYW1PXrkYd2y8n5RUT3uUqunrC8oqPJfTANQq7tJVWu9DGzJEds5Jgr4tGwFzRKK4PgWFYtkkyjHtuSL6",
  "key39": "3QnthSB9FdMTyQi4LuFX9Vs5Xax2P5NkBb1JNbAGkiVtXYH31doegZZBeDD9HfUoFYD5PR1sw5KxfAMyhtF7QxYF",
  "key40": "5fbdZcqEeKof89k3wWa8SHzMPJYDzDJdNbSuU5AQVDkmMKeAErf2jhLSLZ4C9tpt58zZihWDxQzDa4N2bHtVCeKy"
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
