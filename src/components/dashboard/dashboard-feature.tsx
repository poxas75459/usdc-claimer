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
    "2AuN53ktGkyfcnPQkX3GV6vBYcacvasP2mYw1wyD5a9uDCgt4rVhZetawEWaBMXim8pMaVvkLytNkmamj5UGqPRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26QJ1v1zbQ8DpnXFLDkhZM2zdX5TsKMPNpTimL2CEVs3ZufmvKodzWHsTZjJQAqiywcdv8T7oZpSqaFrGi6hrWiB",
  "key1": "5Dq9nFa5tRDk9aMtjrji91W1Me2jSPyqLxLk8qtvFHRFYGtJ6BRWqauvt4YWKhBGhE6Tc19cDw61eB82xiKfvp22",
  "key2": "2Z2LS6FfYYVZZBommE2s1d6z8btHgvhtxtxSZGpjx81Gxue7Hd4DqatYkak8fKXeHBnefPCj9PGHVbhb96jRPX7Y",
  "key3": "3KMHaA2JDFwDzY8KYRnsVydb5h2TfP5tgCu2zZSxLw8n5aQtYCMHohsEENQCY7UwiK3JongH6BrYDXAgKX4cRJBY",
  "key4": "4CkkawBTQYvuMVJrFyaGMhkCx25xFoFCPSC18DyioevCgqhBZhiuKtXqRayqaoSyoXtCPjPCKQ7Gh83cbEp1pJqL",
  "key5": "4GunR1RVjVo19axjQcN9P45HsPf4tQirU1BvEdzpWYCNNV7wGLsdRgpnGSk7pzJae5bUH6QnstreUFvKc2DmsDxr",
  "key6": "qhwao7PT1rzx5QmA6Y3T926U7Vn6qznqLRX6qoUjVqwFhramkiTT4VG8iC1HZuHdJgBgNuSaHPzKqZEmfEfDBWA",
  "key7": "5y1czcHem4DWfAgtEbkvy14T8CcmjsiakoKM21VH4PSzRu3URtPgiq7LCncACiB8JxsSzJKrs2KkeJb5h4fXPLxD",
  "key8": "2vQL159dR2FR9mbRF7egThM6i8oQevwmmEP94SAGwFAk5pV7mhPDdinR1RsqBTs7SdSc9pmEYSF3kLtAE2nxzQwR",
  "key9": "3C8Nw1jgaXSDacVRz2skUR51Ghf57YNgtfzkzbyYRdeSK1PgwRrE5Us2VHnXY1oBo6pYizMwSjgnU9VjEuDFZrZV",
  "key10": "2ydPXcVPpnmDHHGnGnWZnQNVxqjvCDNhdq1ctvPRCsmJGZXFqE5dZzdiUsYEiNdwFzVRd9Cb6U3dsVC3aHUAc747",
  "key11": "T7UZaKj1vp9nydKYffDM9ohrcLnqQe5Z3GK7aVsMf6hLyDrsSvZ3npm3NzTPfHFHbW5hndjuuHWgLwUK1QYYJSf",
  "key12": "96wQjrDZD3twU64uUQNPnLvtPNdWuXYSokQAhEUtrsdYGWbabM6LbM2cc57sHNkFGkP4kHJHTgTg3PPMmzAsCBn",
  "key13": "4xYE6usDXGkoWYV5tiHJFQZuBW2JNN6cMj5M5MrVMi6iB61pFCbVK2h872p6PFa9mptRZqGzMPVUWqUmArJW2XFP",
  "key14": "4JcK12AivR4Z3Jk4745mzPrGPCpDc3LeSsPrcawWrcV7rjxm4pTqVLmmjYyJ32FYPDScxcCwbwQMagYNgmZUYRqS",
  "key15": "65EWm5hjqoE5b8F4RwgMdjS1ftbqgqKw6eEsnydHe1s6qNBYuyfJJBuGASqbb3Svnev5ZDHsk54V7QTUBRc4L3Ze",
  "key16": "2nbHD6yKo37GvVgtJMVhbZmU1R8rdDph2W7VerGtdpM9f388RcZgnQR4dFBGzJDc1zcrpLe7sdERDzHEQHG1WuDA",
  "key17": "YruE4uVVk3jFym9zhY2qUZhPAAQKH9XivmM2MEtUPzNjbK3AjpiszUPgP7ga6pQxanRQmmn1J2GtLp4VXLvrt4V",
  "key18": "3qMtWhMXxeaUMQFrdtCwLFyrfukVbZN2R1miaHcH9qFAKCLYg3hU96g9cJRCYVsWf6jgnU3Cc5zmzjfRsebT55CA",
  "key19": "2MTNJsGXh2rsnPu5AzEnHVA1WMy7KaStuQApynqckANVmmdDrFTBEYtnnHRidFmXWXfchapZ15xGfNSM2K1NitQC",
  "key20": "dvYck8qkY6U1Tdc87RWsX7dcm1oqYx9sDkTYm3HqjbwqhfaDsSEVvkABjAVhggdXGiHr9ucB7V2NPMcJ5d6HTkX",
  "key21": "3HuWEBz1pbVBahCJiTU7T8tDtdo1hyioQnuYtRsMemoEQ1YVZ8deB5pMJyzFJr9wuSbByKfcM9P3sVwWiaYkDzTo",
  "key22": "2dug9tGsQZjxjS4fMbnBNdGMfuxYJuZKGBJskyiznHkNExR29rfD7fU4YLyCE8aFsbNA4mibovMyy7v15CUDUwRh",
  "key23": "2VVn28Zrjn6Z4VaYmkuRtsr4PQ6wRZHgx3NHSjQMGXYKk6szSMHQnv6yzEHSFwwXm5Zsi9TNQ8GqXw8qspo713ST",
  "key24": "4pN3CoLCVWpqmVxVrrX3eTVR8NihSh423rn2zaY4SShFf8W3UXQAtAk9258a8nDpjWqaTZGLJqnnytVD6FiMXMNa",
  "key25": "43SsQ3KdbtXcy8e4cEtoofVuGGyR9Dp81zpzPqw1c8zUpbQbg8qSYR4Riofe5v6ejiZyQkvkjgzzeGqPoXmYnBHo",
  "key26": "5CUuihGDZt3GbiHwbyfT41TnkpLCmpZXAeUq2gJvgh4UnhYrxQXXP1oaeg1WD3U4z5c6MVhYh1ManN5TR6ARiF9p",
  "key27": "48PM6AJ8Z4TheEdoDGz257Wycx7cTJj91ibKBn8BZkC4XeVxk7wpu1RPsLLZVPYatK6njp2oTyCqn38B2Uru9GJu",
  "key28": "2jaWrnekbAMAhkYzk3bRQeZkaWbhtpR7zFHBbwQedPkmqnqLk5MJziN8iQA4zPKDVT3nBbJdQnLmARvW2Byb5pQV",
  "key29": "2eFASkXS7GSo6zSXtDNqhvyGt6CM6KRxXJg5Q5R3N8yCULWnBjhovQBJ4JQzJUSchVCu7Lv37Dwz65S5WCjRh8Bt",
  "key30": "2xHSJfmBHx2bmoQ16ZKTNgyzirU5XQXYaDFwEmGSLuTDV1EdJvs4Mc42FXSRZ8YG8hshqxgMGexSBn8W3gHAuThF",
  "key31": "2kkTQcj2WSvzYxBgGQZq9rdnzuYTmgKvAScmFM57gM2gZSXs59U4tKvhdgzFwGuj9Rz8GnE44eUL9pHF644k3fUE",
  "key32": "5yUJEtnFPuZ6ov7U7Cvhxv7PtWgMhUJSSo5cnU349MXYVG77hWdAvjMmGgAjTg7dbg5E2x5Q6mcZNkd1eYefnLJy"
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
