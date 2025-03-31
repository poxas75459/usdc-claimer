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
    "4po9nn7SegTUXorLHpYFn1rdEmF2B7z6E8kYBzowUuwCgPosZAsk8m7CMQ2QEN6soyvaQCWgn3dd2bdTqc9KYJs6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S16rbtiHPcXK5EcQ3TnMzBTV2GM2x6zakeEDPT4DN5a7yb95oS8jDeNTjJ9FVhduGNuVMLbr9nPB3ReteCnJ5f8",
  "key1": "4AUS3SwmPxwvuX2CGiDJUFF3mba5gf2b7KnMirQ1c5r5pjRJ8VxBYJReqBzjbEd8gvc25BMiC5XBiV36yyvR6A4N",
  "key2": "5ZcXn5YKQaWbrqgvB4CMxU7RobQmpS2Z1SvNkSoSwBWo5U2UEMkUuHgMYcZo6mB6eob6j5KydXWF3vYG1qC1R5Lx",
  "key3": "ndfgptWYtVtcWdQByCWhCRLKkcMedkjfEFysDaohHhJSVePXJnKkM1mfR5xbY9w5ech6KpUpQLGhjQvQapbSZwS",
  "key4": "3vTF9Yt7xqhuCgG7CZtL4nCD6Jv1jPbzxcS71U2yzpqw9SHk67k3dUkH9CBCwvgfMVRDsgXLVkc4MT5kjYi95pEV",
  "key5": "3fVZbvqXCM3HZctYsCoUAgYSKDHGUm4iDrQPbiEpf8C8MLWVSMGqeXQHFaBu16PYTg1V3TTYktHjTHiJvC7Kpf6B",
  "key6": "39nmWCzaSqgfjEXmH7ibh1wTE6JcHuGCWNadwVWMvXHWY3kJ7U4cKmm5vPX4DPY69vs36GigNCshTQ7qhhhQt8E",
  "key7": "65VPcG1PMQ26Lo7qToz9gzVFtq4Gu8rNbHcqbm7JkF3YCnQy4wxr4dagVSitNSrSJcRQtvYV1L5LSQsEW2VZkAU4",
  "key8": "51XZ7SkwKbTb9ENbz1fBnS7Jpn67DA8am71qCSY7tDcVnciPyzpxUJqno4A1CXbDLVQgMS4nHCh11KeA9Kp8MV8R",
  "key9": "2c8XW7EKF5aKGgBynUqvt4RN8kBY4rDPJGq8PY21UHhuVir8EXZ78jkdpvHWjN2LnXCWMb7g4bvCzUfsAc6G9gW8",
  "key10": "4Q4rnJGN6GQ6WN15H5RprAYY1YZ43SmSNtLnrTDoDuLKcEgooEpGA7pVGncu3QA4BTZcoxLbVFSKYZMX2zhgxaFX",
  "key11": "3ZFf76yH413MJkiwos1kJjU2DCac3bPt5yewDv3C5N9rZb1QY6L4YHCPeyEQ6JGM4t2qBZvCVtPK4nbEhqoG7T1J",
  "key12": "FgHhUHZYxtkj4mKp6KMtGA6xJGB15qMP4fvt2QDLLrRYSBS4m4Mi8sFsAogs8NJs1Ju2Eph4j1VFCPhVHxgbNGh",
  "key13": "34gNNk78uAWJwF8wrLCFviA1nzWs3gQYWWrg2fdZucRWn2k8QgpPgDXJyy7oy4ohZJgb9Kw2Y24KURssWB2fzKau",
  "key14": "49yK53cG8XSTLHsZoaxpmcUfr22iy17DkvYairQahVWwAyDaZYhNSRr3cwkU2Pinwmq2xKcMeZd7aWKN6AvQua7D",
  "key15": "4SWEj633wbyLrTZBTy4X44gZ9qrGdPZ3cH5zf5f2VsZpYWHG3fwfzL5xmENVY1s8PXMLBrNan7P6sTFM2yGrhDP5",
  "key16": "4kEtYeoLTLCfKSxeWxYYf27iWZRXUn7QmVZrpPryCFKxTEQfe1zYDjVTciZwNmxEAbU3Zs7jkmvu4hzgWR7vBo9b",
  "key17": "3ZiUZSH5qWw7goHKcgRumvh15DqHhpnd14AVeXDcYYHRfhs9bqr6aFgGVybFirMTuQve3zzchHDRiwVZJ7SLRdpD",
  "key18": "2idMXLMVnTAc6muPMk7qiDW5xSLUweQutpA9HXbAhYmKa1AWWT6X8BFW5uwHqaEJZnxf5VrWUhHiZXLpUWT8gqse",
  "key19": "2HWjmaKFDqiaAcfxaZq9bKoCvCtsf2Ui8JeQ1PUJftp8Nm8Cfz4mHu416P6NjftnPLJfDKRx2x7g4NgPc3P1FUz7",
  "key20": "4T7KrG6NxKHh2YmyDF9Zcrbt8VEJz9DbL69mCsmGMro9k1bRbj1SAT1xtsS4D1PbuZMmTNfzw8feQRXE2FzMYgRp",
  "key21": "2k4o9K8MG8Gs9kKEJa7xsVa2xc4LVSmEWDCbi5RNbbTmScewDdqfXyRmieRVqY5UdBvnrxQwm8UNCjjRmKdq4GRm",
  "key22": "2fjQKn8fC4E2Joyu2mfbN6n8XEpQGZY6PzVg8ZFEDJENeaQYHF8BmCgEA7jtNQmSox1bSjfQrGHXAXqKH1Hzmrtn",
  "key23": "4y4HYKu81r7Dacg6Ed6uXP86P9H5tUyCjtmDbJnsQrkSUVzJTRVtvrqXJMWZNsTQLYmtVprDqWXXmCFvXbZj4Cjj",
  "key24": "qGDtiQJER5MrDR6TALw9dNACyP72Q46irxJiDNR7MgBEGvZxQT293vJQZ8FsknS5homZ8jCPswayy2DJzNdfers",
  "key25": "jhKz2T3rxJ3cMr77MQbyebt2ki7NgDjsE9KZQCey2Zvu2GPzyRQnaZ1xrQu4CGA63DSDbVZBqD8mDk4oP1fwLMV",
  "key26": "26ULb4LsPxoe1qpjCC279fH88EVbEyMY27GdT2e3MgSdJUnoavx9mWtxooy84Q6NmqiraPkDVWTwpT3NaB76hhbu",
  "key27": "3jqgbZB2s9qaufxrz2RStHseuKT8aGJpZfzk4s1MUNotEWYDW8HaiMs6ubWW4k6kM6T7SznyeEVKCue6jkugkQW6",
  "key28": "43VytVxFK2DZrCgbKzeBSaUXmqzh2okr6VJmF2373ysS1bVw8cuTjATkGUwQQHmCFjvqDHkwCZ8pH7agsD63YBiT",
  "key29": "6396XAPXK3vtfJwYQxMBf8Rb6B9FYYZVJAoY2rbu3vw1uAnyhrWpUp1A2xrwBb4Wbz8eHnypHdfbPjRZ7hhce96W",
  "key30": "m97fa7AJhHa2sBfYuCvwi5w1NgLrnSPAviKeaPF7bnAu6eahNUTfpvF6QkFvMvFwzYi5b9nu2xEb2Vu7PeBvokC",
  "key31": "5Dpi92Q9GH4JQhWJbAQBsSnyQce4YiEHE77XBjvBrH2H4K6i1LTu3Aj1dt31ZFd75RbH1vvz5MeWr4vhqZXHzy8X",
  "key32": "2aHhFWrXkQpKnte6Lu9RVR7P5ee6HZnJEbPKYJeXjTiy6Zs7wya7Mezmpq69fhN2LbYFjqYy3LHcHQ19BdE3q95D",
  "key33": "5nZt53HCkxgCNHeAym4KXLZBUGnd4iLtYsGMyDU17AMKikhNP6XKcYnbYfexbxzh7RxwbKM7qHtPyJ136dQKoeo7",
  "key34": "dQ4mqdKMh5946SUc1GC1cfNSRGUf5JgV1tcxbeoxv8AKdpihzAbixetp2nbFwYfDXsysGtK4rJQu3xbGK5qmPMD",
  "key35": "3ePLF35eedmJ8M3W4LT9AykHL47PamkKVEzfAoWsPhmLL5rJXzmag7g8gV7Su6hsWgeqTEoofg65hz5bEaKiFdRY",
  "key36": "5j8F69qxA19SB3DcdFKBYobWb4GdCa2oGxqH9EBB8PoGBVzvnnSaDSV7gpr3BsFLbdSc4mxZQVHq93JqDyuAYwLv",
  "key37": "2JijL57Csfkhgc2BhLg5HPcxoJncvXrKmHnGUfSqxtHPxBSDYpaFXWv4ArjMj4UtLmpNoeK5yPwh1ZnuKAi3eALQ",
  "key38": "369AWWon87JGz4Dp1hywxHHYoWVxagUjhBdFqj5ZXqBPdevM2xQmDia2qaD2hicCzwVnfdN199jcebLdbaMQrt5j"
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
