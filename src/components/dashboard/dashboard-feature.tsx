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
    "4ByRMaKJ75DGmQt4PopYahRb6LgDes4eXQRQMeo72WX7DgSpPFDLzhnb1hhhquyD5HGQw1WSJsix1EEmXNCo5n54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WaohSTav9u5poPwca9aCPpECDPR4opinfQhg1h4WXV356KSbqHM52PC7ddSYMUCB9TGNDmSCD2UULZhEi2PPdG3",
  "key1": "4Py5Anmv1DMqsNnnY9uffihcx4eY5PiP173jRhxqrYd1p9VTaBa6bjoPXPrV6HS8oUWTh2aeDW2R7P4bFXPw4uFh",
  "key2": "3AiFtXVjaHamJRYth7xhRoGaQ2V1bvcDACKenAiqmHHs3TmrSnqvj5Z8TD2Af93zgqd5VptXiUwHNZ4GiUeMy9wa",
  "key3": "pzTaqiCxgTFnJ9KZfikooWAGknny5wtLHc8xn93f9fxNaAosxPRWtrCoPqHxchpR7EKpnh7rwCb3n4A96gzZhZU",
  "key4": "46etckzScGxdTr1s4JgFaEErYsrdpAfv8QtLZiWZa9ueY4oXgGZ2YNSvxBSJFh5yusuBzr4FPAn8cyMnAVuGyR4t",
  "key5": "3ecY2YxP3Q6s5RCQ34SHHaeFSL9pbGt6LUE94WrsLSMdQJPTSqzssRwk5GsxB6gpVU88sua7yk6FBPUkLeGtZvrd",
  "key6": "4i23SzwPJ3w4pyjZ9HW7N73HtYkjeLzqYM76T4Q7Ta5JZHewrEc1Gv2ozc11vFm3GaV5rQftN8pBZh1uhseZb96w",
  "key7": "4cWjkVv1pnuQnmAo4GtXgujht8hAKn56EZemKG8uhicfGqZkNUyo7rPMcNGCq6N7fb4oVBN1ANpgTUrQ8QnMa3Pc",
  "key8": "5AqH85geX4khJdDJjdJdffL1djx5BpvkRbSPXAe5ZPxn8v2RX6m5qaYiqYoyZC6WgsZsrhdJE5qxe7K6gQCgs5zV",
  "key9": "5KXSMCwKMdpwECoSe1arPFzitJ7hCd9p4gk4wfLM94Wwv5sqEXK439m5iuVASmR1KVpM5EZrNv2Y91cZVzdiQ8cg",
  "key10": "4pA7qj9K5CTC4K2cu84jg64caxGaayHWXg94wFtrjZoMNyvvuPKbEoXmWmVH5unNZbQvTStMDzM54Uw2x7QkN45N",
  "key11": "4Fi1ydk9dJQysJfxTdTrHXkesgWUMZanodVHAfo1vyH8DC4DnYo7YZmQGtxu4bjZmM3SYjYjRfP7TBFw3K51h9Ms",
  "key12": "4oSfbZJLFcyfw4H7tRpKt9XjkwKkiXrheJs52EkvYxKq1ngDGZdpQZExBU735bKPpR8tHLjEXVB8rFXMnmMCi1sb",
  "key13": "3sXfDK6ragJVeKpKkLiWb8xbwPbNjhRpzJku14uoTB2ZjTGAAzZ4mUFHA5PtNPpPLYfcjx9L6xCxMouQGHTbvfb5",
  "key14": "22v8qDMEkHqsmUysStHPhQSpd94uNYRvezVehZ8BiqzHA69a39jcMngee1GcLYQaVbjZa7aAENsiDKQqYM3RHJed",
  "key15": "XbGByAbB9om8eEGqbVyriZd5gqkihBvxcBmoPxkRmbkegrRoj6sesnrHbnk9tyLzmw2P3o1er8M8uGNYFkruMmz",
  "key16": "4qwgbCjBrjQpJ9L6Xf2BD9kMuR4kh6wg7tY29uNmZa2Ka5CCFY6HQyiHEEv7ZcQ73X3uh1ww8jZd8WcEC16RePfY",
  "key17": "2iURY4e7QhXgPHVmqyVcsrDdy1Ah6nkxr9Nr6wdqWTecT5KnSgXYGjbyyBfd6jsNikugHyg2kyvQw11Nccvx96nf",
  "key18": "5yV6f8eei1cP1TLgiCe2xKKsq8GJSTpa1HAfE4B5Zec8zAGzQM7tnRT7vaNDRLuc9qcfzoY1vRzQuH8aRTgVgiFz",
  "key19": "2q4TSwPbAtPhSD6Y1rjVx41QQygkSKXpYYRxvE5MBEwtnHW4cEDxXWCDaDDgXUTYDz8TJG1ZGybF17xPDmU88GSD",
  "key20": "28zqeYfMV6bDrZVcNyb6mw2XeirNzWywcWHXLpwg5CyR2DCXqoPCDa46mDwX3w6x9wfr2HEN8tohsUoFB7nSLLVw",
  "key21": "HZ56ckY1qUGivAZg4EqBTPT5Kg8QrLtmFqkEUP147fPCCtmvtiGRwXbiP2wTNetuo47a2HXB5ysnaTACdZiYruD",
  "key22": "z3gmZ5RL6C92eWDbgEYbgt8cyK1ywtjJuCdp6Y1PYXoMJSeciT8sKuumy9zjnBUE27kLz8mGdnNS4HaymzNnHoe",
  "key23": "51fUZALanZeDtK3xdzYq8FCCQUGrfJnaB3vaFSMbef6aSin7pMuXKBMm4TqGzcpgGgwmmTFn9Gj6iFBFFZyewLc7",
  "key24": "5F41VkHara57yGdKU9EyGraACgkWEBZVdSpJwEycMjwFmsJLn24Pm6EUDEVUccgdr2YSUWrxz16ZAFTFxxqZnXGn",
  "key25": "3JKoeDBCqR3rTpmMavGwibjy9EiCJiPX3U5F4c3miixjezwES7oyCkyAysCs27w77UGPTxuwNqt7FmWWGExfYshs",
  "key26": "58dDUMf4KRKA5H81ooQVTBXxD8acBoBL84AeySbUvt2fSeo4sCPYJs5KiYgz8GJ345g5GBrwir9XuL42GqKriR2k",
  "key27": "xtrjL5JbVx4XPCezyfXj2FtqSxST2ShSmtB4CoFGjyZ2j9B5Lbacysw6vnYefBzoEAWZ81YvzUGiy4JcHqxJJ6H",
  "key28": "LFHRHTy6EnimMJQfMAtpJEPZmsn1wLSBDMEM5uuuA1R251RZVHLYecrHP6t4p17DWhzN5ycibGyCiKPipt9zgdU",
  "key29": "67jkp7TbjUsuJRtt6ZPtJFFQuuXueZDqH6EvDXuxrZorfv6mucFuEEHWWAB44Pm4fAbAD8x625ydafG43Zd2r439",
  "key30": "A9XMVR6jzmbyMxMwnLq7ZCuFj7Wjc9kSFGzq1LPzirg4gjGWVgc5oSQzFpqaaoaqzKdgfU7XMF8mtLkart9y8eV",
  "key31": "3ySxB8pKdRZS5syZZRKVpjQw4mnBDxmN4xxQnbVUU3t81eZ5RFsQguXr8FcqcPyqjPHGscitxFQ7Wby1tW7vnyaS",
  "key32": "3TMjcJsrxpFXzej8Dh4YgKAVBtipyeFjCbuj8YLcQuGWCmbUq9mkD5jpNquPG6zmnKhPaNPDSXw3gKWQW4UhQ4Cb",
  "key33": "5BL8QhTNMpraJnpzWhgvTjcbhqpwFLH78DuQKhJnFjgi9gaVe6r5TU3PKRixv1HfSsYPcnfdnCpYzoEAbP9TL24G",
  "key34": "43yUNxFcrGADQWohpU5p6qj4QSHWULEC7oaibHRyKAQ1r6pb7UBRJGPMsZ4hMVLEXDm6BwwbAZkrYZTdbC7cFvD2",
  "key35": "4meuS8mBd7fGGNzbwspLN1hArwn3iHimJBS8gDpqEuaHFT3ypKTXHYNy8h8an8sDKvmiVsDAft5qCfnxxPizGTWZ",
  "key36": "3FPN5dKBFYx7pYEtHpjsXTdV5aD4DLpCJM49iii3mZbgDVfC9HEPbS9tDZN8Gf1QNQqvKCBDkCfDCqfrJEyCmZEk",
  "key37": "yxvTzniZDGjpVBWCdNnNb4KAwLqeLY4szA6zDtpgmHjeQ3k8B821aksE9ac9hbsgCbbf7fsGB1NhSmPh1yvBi5E",
  "key38": "51J36jzkDACVtcFKPJJE8MgMocyWy9YmkUYbDFTLN4dzKYhpuYAw94bYwwUCNMGWhjT2sTm3vTkgXJSeco4W1GWd",
  "key39": "5CY7duzkZ6k9hKrdQ4zmghEnMv5JFw1f9MQ2uq2v4kEibXdr3zxo8SxKvpUEU5G6hRTJXtbUd7w5x7xXKwdkftsP",
  "key40": "3aLLujCyyGq3JYK4cX9PDvtMbFxS9nD92S9U3Hu77Hfa4FkUvSdqP4LPYfdDtF1SWPM6aQymHJNsw9Rei7NnTQRV",
  "key41": "5HVcR9np1ETmy9ESZYD5DYorvvRJVVgWpEVFxEvzjw53fogGFbqupWKtZZRy7GhDsVs3aJHKmSruaAsWnoDKq7B3",
  "key42": "5YQtGpZdZv7yng3dXZCsUuqY29kFeMyaouesqBCtiqdcmcTZPTNPJAKAiAQbHZUNRZPsG8MrGSzJpU99azuUQ8kq",
  "key43": "4FE4Wnkdqu1GMQkh1WPYTHhH6HruXKuaJ9wdTKeyD3Srjw4htTfcoGcKAF3WzQ3CjLn4H65vhtm6aNhu2FJqh64g"
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
