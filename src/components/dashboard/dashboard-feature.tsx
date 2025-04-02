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
    "5gpqMb236JHLHd74rFjXsADXbrLRG48AoafnQ3GeJpHkwDBUSJnwS7kg6KYp1n76rcJPy4xQTPhJ4SqHmjYgcN5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cJWXbbipjAnoPMRHMnPs63LCggcGV8Da5PaWqEMVxwGcPJQDgV6xf4ncPj3Bm2amxEx4EaUPwZX4GmeNtPvU5Er",
  "key1": "4bUKcdoHaU4p6ecdUgYsRffGFpUEbBT7jyBqjyekn6arzQ4z5QiNNbj55F7Mex58UkX3LLRYnqBp1UjKAu3YgBm3",
  "key2": "YuQeaVq1w4ihpt8Xk4F4TKXseJ5QgziPocAXFDatZtqVyaiueAS9qtRqSj7aofUcWeBHrLDvGFMac2YJgSgRQxv",
  "key3": "2sopKhQT66r2i8PAbsjTFdmuT6yAF5ZGngbNTKSGGkVdUBRFDfcNpmvGSaAUt8qBETLjykKrKqK4puDvZ5TLXDgE",
  "key4": "5wy3o7cP1eAd3fX9tnBCPrE6MnVTYshuXTHxcv5PxwH7z9bSzovg1uWgzJRfe6qUw2okv4VXHWq7cLf6AUFoVBRN",
  "key5": "2Y54EYNE5dGDMrF3xTEfDCXGhi2rZthJYxTbsEBwbVjiPNZHNFctWKDiNuyHy4DFeBhX82xs1UCZbpFtd1PPWi4P",
  "key6": "2GzszssZyxrzrTfuZYyqecPR1WAFBxDJs2vFr3CnAf38n3BzU8pXnf3azL5pneQrjxpXG1JsDcnfqRBzVEPqTrwX",
  "key7": "2JLcVuWKCF2vMtAQPUd9qwQFsWHAqDo9PhwdfWdWZ31zc4ZsBSmdY3Pxvqz68ALMuHabzsXEqFgp9qDZssRkLYcJ",
  "key8": "5WRj4ikaCtjzexHtNsPR7kFDSNnWZqrUCPvaYPpCG8uEivU2TUeLRSAQBAHXhAiBsoGFnXgREykvTWrrPZ3mauWH",
  "key9": "4GsWdZMjbHqFs5WRdohb4t5MYDNGzc1Jx2Qsf7GF8m7d7SmeNVEykkWkBo2euwe5FJX3ScEqzShUpzvtoAYMB9Me",
  "key10": "4xsN26TRk5v2821wYz7Fj4NoQcNxVBFVxhYzbBEaVz47bhS5FjUTvPyJrEZeFPj3GRsp6HFgv9NKGtBPNak8H92x",
  "key11": "5sSAM4LJTDhQEQYc7w71ctxYJNgJ7xSvaUp6R3wEGWCsgWHuF82BMacpaJn19Sv6BSfJ9nVBM2TVqZASbmGd7CDi",
  "key12": "EWoFphwTuCG5kWWXDXgbitpKkbKY7KDz6xFoc2goiY9Gk4rucujme16xes1brQLcTZVnneQsBNqemtHrs12rdjY",
  "key13": "2rFHmBCJ5YsDX7n3RAME53XmoAYrcjAGKUDh2GRMNZLeoL4dXjKrmQMdfqAboMBjKojrk3kbKir8ysVGyi249S4Y",
  "key14": "2TDrxnKrvqXw6vBJdtq1NhQurPNJyYxvKSWHLDCTvnPoBbXxcqcVU11UmHVCx4GQtzeumx4HD7L8G6y1hAG5NsXE",
  "key15": "48n2BZT2RAqWdUb5nDMZWwnGsmdpeKcSeALENRNuMwQNjnhAvdyVkwgy315mNEzRu3bypUx9P6beVWQTm9Sd4iuq",
  "key16": "2ndRuGANE5XgFuPQ1FUVeFPSFAZFSH6pZEfaa2AVftma6rTntxpTtUqk9CW4XLAng1123PEE9yM4rqduVGLHR7WM",
  "key17": "3toEekhje7pXAPKbvFttkbJk8RfWdiAFiunBJp6sSWgbauaKBr9hQCC42DhqXNGn4PEBYWTaZLde9XHdA61RyRMD",
  "key18": "9d6EabeQ81p4cdJKPMKcxpgvpGCD5PsSA5Nbkp3ELsWFb5NUPGsqzWygde5wDJik4FRYa4gUAxsjrB2cuZAfPwa",
  "key19": "3rdWeu4myDog4KEciFm3UzTeHM4QYP3usTjuDdLouRY8hya8d4Lx8uY9quKt8mrV4QwWHaHxbLf327HFVzXEAzW4",
  "key20": "2UXhdN3mnHDRBhwqC9DUt9XwzRVt2PUUrNGYvTeiMUJmh5TP1pTBhBBovNA3yvgPvU8a2QcgeMhg9EJcyQ5yzuWC",
  "key21": "AGWsSReSF7yzVytHsfAiGkyRxBkgYXLHJv41a5bUexq9LgHZvDdF6TzX25Kv332wwitVLpHKrLiKwcXeGPSiuha",
  "key22": "4CKSB823auvbnHCu5d4u7JtF1Ri8bzfZ6UMp3tNf8cxxCxfMGwFyiE9Ypyy2TDFT6vjdKgoyK4aQVg4rxteXXMuE",
  "key23": "2HgrJEM54kkhJrEibxe5cGuS4HW52t8qCUtgCMFW1Gvo39kdbGbQvgtmKSixuDz1DyyJKeM6QFaBRxj49e2jwvM5",
  "key24": "61PGQJ7KToSfwryfrJds6ceePv7j18QTYw3PdQGfDnUwz8a9cHYSayKSvbHBCfi28WNpJLdPCn6Wm5J1S3cKBVvs",
  "key25": "3d7Z6cAVVQfKHxsb2cGB8fQ55Jz989deN3cJ7LUS1fDsX5XXupgwVwW7a8pRofzqcZZTPYTDqDh32gBcXAMLahr5",
  "key26": "5UWUNyKP7qn6q7QsiyMxKVMHLdSsPWVn8kjnVvNcaCK6moThGvo26VrhvBoq5XiF4JjYraBY4uVRBafaTcRtGzvy",
  "key27": "2DwzwS55kHtZUDu42dUJeDb4PaSRtDCKQkEzsrEMBvMQrZpqnDwkqWsnSHiizYUfgwmu2dE1joeqd1ZvmmCn9HFs",
  "key28": "2b4WNmUYHzmojRcvHp6n6h473jn71DvHjWihDmU32wbYcoip5pqqgnVBHJ8DAfdGzgvo3b4g5DTKmVQRY4P759Zc",
  "key29": "5HW2qa1gDgJVaMQD9wJ3VTj9e6Fqfz8KYZvm39QPDEG78C2bweEL4QTHHDhEVTbFoQ4nkXBqQsFmwnPRoo1CCPF3",
  "key30": "2iAbGZ8PyoKSHgbGNWDFkz3C3m7YuaeoENj5CwDGpXssTjvFj6SPw7Q4jgW5nTtLUtvYeTP87J1KHnzi2s1BLes8",
  "key31": "4qt5XDDA7SXJsGzDTxeJb95yrXUPACh998VURSXwvYkudKDWHynLmHrE92XLv2icaAwF5tSfyThSXiZ8D8LL8t2C",
  "key32": "4gh96oH7nzeE8GermnddZcwaN455iuTZaqoLvY7GMRCY7GaeCLXkAHk4nz9tPKDJySdv9R4YHnzBhQKgcxR7C24N",
  "key33": "3VCdqkE7N62TqUd1ZC4GxcDmAuhGu7HqbxaAYo2ZjPBtrBFkh5uxZUByU2w8L1uapDceabb2BCH6MSen2BZF5Gia",
  "key34": "iCQ5VZygzGd5KcyAzKriHfYzga2WFph5vFxwo5PpFHMr5pkw1apvN8GHo4E63XfaydWf3fUDod6Ymi1iTiQBAzW",
  "key35": "4MAH9JBWiH1a1GXzsbXGHkancRvK29A6L5yT9HEKVMWep2zHPZ48P7UUeZdWhqapFvr6odP59XdHq1PHUdyR16Xw",
  "key36": "5XawMzcf6NtnPEt3opXKmhK17fGrnmYBg9mHiVrEZtyJpHY4mDfbUhaZCp6on8QyEJyYDaMm4Rc7Mn1SVRUv9AXc",
  "key37": "BeLbXMcTX8vZoECP37n53br6aTDLyVzmJGpidzjmeTNancjjqREmLbF3deWmVSXPj5fiks8fgVKGtDJor2iiZmE",
  "key38": "54zDGLyJKxEV2AA8h2vE1E9E6Hy4K2NVTc856cc5gC5es9UZ8wSRWX8Gq4w6m9j6ndH1wbUbSVsurHtT4eFGgTTK",
  "key39": "4Kib1a7gUipmcMwNY2Zv1S9W7sY6h8kQ6toa8cY4abJitrVC3Lh9Ff9zeGDBgLiDsb98dutMfsfA6jz91yj5jbF1"
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
