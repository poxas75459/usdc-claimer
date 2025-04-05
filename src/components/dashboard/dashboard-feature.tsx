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
    "4edvFCdeoPAzV3dUgvMVeJUmZrnDHJyRHAZJGd5Yn13VzHMuWHopMkkYHvtSkevD3VKhC6JLtbDkpTUvHWSCJkuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67DuSetxGzMx3D8YkCEcqY5hdszafVzemnBKxzRiy7bCrdDdc46gL7VFMrk6TjxwLRbQRT2LbmJminLsJdYQh824",
  "key1": "35aaYrti5CZpwyYuSF6rafkBAdtARjic3rLNWoKu3Y9KRV855JTCXT9HufEMrhDMXwKGK8nR6Qxz1zRipxCvW6mT",
  "key2": "4K887qmBkf1TDxWM7fjELgygwkwbeVV1a69WMT6Db6XJ6H6TkeSFGLgjDAQA5gU9urJcSQ6pzNAHVGXrJ2a7FY6L",
  "key3": "2ae5AZsxMuTzDdcqQkQpq5cf7FNdwM3sfp8CnfxmKdXnFjgsiwPXqwEfkcBCPMQCdybXX144zx7Cjpxa8fXEKG2J",
  "key4": "5kqpk3VnARiNrxRpVbCHwgfxykGVAumQ1RY9Q93NexaaLFMkVFPSRy45cvQWtkYBqfgSJ9zm7VgUh8HvmVEYC9bS",
  "key5": "4PZ9W5P1yK17ySFDXhvLAsvFkJkwJBoez8GY1J6S8yGJjC8HkALJW37Gc77jCg159MxgLjFdgVFnZk3pJGnjMqxm",
  "key6": "434h1LGj9HNKmjtjHQmtRc5MM1am9myboG5A8AnpDGZo8AhV2Up8KcY7rgVw9CR5BhjKDeK4kXDEFfWLPwTabnrr",
  "key7": "235YRNF6rCAUhnbJ49xTgXanzmYSwzkjPijEyqCqfT31bmV9A8w1mEPwwCq6AzVMPf1QSjuUW3doeVBarsgma8Q3",
  "key8": "eMpwcqknBonvvfU3FDZFiPLcbJWuWmKcjxnpDer5S2BPBKidxcWzNoYVy9F87WbZh2Z3buuZMePM1kJ1UjyWiV8",
  "key9": "48wEwT61a3UyStMPYHUeoaX4vbQ55vmUf8ZtK3zvcbEorKpLSJzk19VewdxyyHZom4v3NkhqBNBCRPT3vdqgjZFL",
  "key10": "5w4cJSzWBNHsetdbUG9wu9dSiGWvEsvkaBkPWtwqH9i3nsqv8yjoFtcDp7vZzx6CxwkGJ4LFHJGcw863kRAqmduW",
  "key11": "58E1F4JswNk4xxBERsyeLemXVyzGLbhRzABpm9h5CxAh4hXKcgu4t7X3JmHfCNTkEDBDcPCPZnV37oktEKEvAhYD",
  "key12": "4xga2WayQMprSr7W7DnZqTdMoJ9KYoc9DCLmutE29NuZjEBzRBAqUzmdyEr5qnurtZVqeVcXDEbPNjNXNn6nNiJk",
  "key13": "4TMqznwZis3bsz7CyC3KKUpA2ht9WQHihigW6auRZzD5H9BzkNhJMGzxK9XLb9RqNmwgyNoKiDztjXiGeV5jfPNg",
  "key14": "5TZkBjBxJGcV2Ux738wzeQUocy7xaKQvwLSPevvNBuNrx7dtThoMwY1WsaeH3mY8AG485EJHHRmJt9S4ritEMUAB",
  "key15": "31vpr3W9oyxGhtHpaM9Zq5FQQijmvLkBfBAvCRweRVRGwFoUyNU6ManhSYxmwPFSsce4oRgmBZAWaXmLV6wxvhZF",
  "key16": "2uCpUu353CiNDRVGictvHAto3z1VEaVdq6T5Xqu7UeUQFp7ZJmDg7kbRvtJhAivAgFXmeRfAXv15ZfjSvbTXPWjy",
  "key17": "WnLjBxVtuGneekmcjGMtS2M881byHQST9ukBPrfU1UKLyogLHQWu9dD3imE9TxS7KDxvkLvz1UisPsePhAg4xqh",
  "key18": "3TyPp6WXJeq72D2v2jhcUrBjy1P4X9w1M1kihUwiaUo1kWfUxZ2iASU88bFm37LE6F5Fw6YtR5nCtssGEDGurgUe",
  "key19": "49mbQ2Yzk9gTN1iABktdxT24697keGy6HqF7oyiJ3D3bW7oCCWD5RCzhUgThYF4XogECqwEidqVcrEyiE9n2Svh",
  "key20": "4PQTFJBGJ2EXF69xgbqNsenTvRLR2zbPbKDgpfhXsF7vvHzJdcusCyi5qbMPkWQSbFo3cUh9mcrbQ8PTGMEJB2Rg",
  "key21": "jMZ2grqXANNBCMCVeKq7Mx6VsSTCEkSbDf9phfqaqR2HZ3ym17AqDdFxzmagJ1atu5TDZgnQQGwaxYVi6AFNb9G",
  "key22": "4VXk2qc5zHXU3K4XJiLnVoGt1UmQjMWv75f1o9kRq39EzF4kSHucNuam8YGYdT3ogman4hxscX6ZZNWsd9VY4rP3",
  "key23": "5vY9FiQVJcyHPQHdgQSMLaPQnZjW8F2419o6Bu6bn9zMKiVgxx9dyFzwvwmaTSJaKTBruqwsDfCzRV2HncKgF3kK",
  "key24": "2chvV3fhsnkzFNuq8JmyhJzPQyVZyfe79JyYxFdTP6bEnNmAnHcDEnSpkv5VmDYfboocRf6MJKgNMvX9157zHq1B",
  "key25": "2xhXD1ss4ceZWu67gVHG4t4PLbFK1Yz1485VZRpuTLJVwP6Y6CZLEUuZKyK3bAPpphLif3oU9oBj8ecGN6DzpgjH",
  "key26": "641qxM2s41JxUdg9QyaKPbS5JipEMjpwKCudb8qR9yrD9jVLACSDeyvXDvthLqWJodwx61vf4U3wpHbQqsTu2igY",
  "key27": "29G4Szg7PX6U35oz1yXafDFMwcW1Ev9dpJaCn41uGG1ZNeZUFGDqdNCzEMREYsFCt8QoCCF2uxP9TyEurgWMBjkY",
  "key28": "23pqtz3dw7e8Z3RvwzUneYQWpeXPmKb6QDsHVJXoGRm5QRcugS4YdCJdGAtyK6i3NzxCedqfGPSh9f3CM4Vg6JSM",
  "key29": "2WXMGw6RxuSqcZ5UT5ynUiZn7ro68nshgaXiPMiW9QshgAo3USfjUhE5XK4yGnFH8TH9C3ziuc1c8w6WJK86Yu6D",
  "key30": "63L3Y61q2nHMBJ2kEpHkz8iZxYQPqDCncEhaBd7zYvabmDXsngESDtfpWs2XXZ4ghQpHEFW3kpFvTRA4U4Vs3xUD",
  "key31": "4LpcCcvhLhWbqZXFtBFF7yyL5uJ6y7YfzrXHadFSfsVYJdKQpEH2uBCE3VXAcFvhjbSCiVnkZZrnj9bEYanXct9",
  "key32": "riaFSJAyJGBb2D4fMumg58wUd6Tu2nLdXbnkbkW8z5VtgMKTajuvxshciGLsyozNXsJCZZM4AjfBM3LbieHaUYM",
  "key33": "4cfCC1KuAWnu1cqUXh849wbkDzzqLmhBeETtq17urQ5Vp3WT24jwtnDuspmC3ts8ukrpuvNCDks4zrvdv1pDhzu3",
  "key34": "5RrsS31dD8XmV1sjxHEddTXvrB6384tQ72LRsVT651fypQdJsDTNRj8DDKvEkVKmPCTuDLuPgp4Qr1zNdW9PjDU2",
  "key35": "3twrKGGJQvuPvRDtDr6UZmcGUvTWo3E6v9V9o4bfGTye84BPEdoiV6EP4hvVYUfqoseMF3NQmWqMUyBBaX3kss3R",
  "key36": "4zYZzAvjRFoZmpzAnbKQCMu1PXPtAZ6uJooXCjyR4bcvphHWgiTLKFqeK3wsRBi6nSypzARTLweb7S9ktK14mERm",
  "key37": "56Jt2RaLyV4e9LzSdV5oQ57XEhSkTmjheQKwsRCiGZ7ShQtr4r4qTkDKhx8VQmqnphLwsWTd3hTgkt3bdj64r2LL",
  "key38": "2nq8rzFCFA8YFZEM67mHgvf4FtyqivCs5iRDR4go1gMK835gL6T9g2Dof9ptsuw46kuBxh67ox3xgCUyPu5bzkA4",
  "key39": "3Wr2Mrv8BgSXNTh9KE4cafTRAPDQac9FYCgu12wUxxg4dynsPfTnCno1mGMPmdcqouvwi81D6Qmpo8jFiJ25kuK3",
  "key40": "4KVQHTgrzULnv25TwP6XtH6nNC3zko1sv7ui5XSycQWju9dM3PYXbJACoQjctpYe7RpPPqYEE38k5GES7q2SsiS7",
  "key41": "Fcsjvvuv6EhPLzNEgyHEpYPXPkTBVtSYp3tJpNRX5AMveuBcqc9aoZtqpAnqHfpaZbSLJRZhs3d63Zhd8GCShpP"
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
