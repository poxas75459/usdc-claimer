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
    "3edBg3BPp9GYygs5aQJVjzSY5E9GWfdG6kzYJ1sUi2tFQ24P3s4Ao7fji5auQuwVEGrf6JrCbEi9LVvMYcVzgmws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58S8ni56yJdFduLLjD8c5min53FFXw1y2N3jeDKvE6iceAL9VS5KX4xx9gHpPHuFx34LipwgZwuyHQbJBMgBq2Ca",
  "key1": "5tEixoiQcm9HvSr9tfEM5DZfJEr1qDWY1JbtEaW2R3N3hpSfMGNX2X97F7Jfxn9cie61JvndVat8vKHyS1Pa4tiF",
  "key2": "5Tk8mpJTjBzFvTZ8dqHCMNogQGrWa2ZQNncbEX9CnRE2JQof78XWWiSps6DsupxgeR93KRP4Czm7jBFpLbMpKWjv",
  "key3": "5AqNWZMZAWDTn5D65dmutxjrLirqiWQ8jE67LSKx7KiRiXDMw3zdu4bXabjAjTrLCVdxm75DxfpczMaW9sv8Uhwi",
  "key4": "2MwDLcMC6iMBxkev3bJwAHrK4QoKAHFg3NpnbSzgyZrc7W5Li6CPVgtBFfBX6Atyy9j7YoFxQBJLSfJ6nHdmeNPF",
  "key5": "AwZ8MrZzbvvzSk49LEBymknSFAuSfKPDEhMRkfTatz9oGgguJAxuRBNuLfTCh7znC5Ugky6k8NnRKFAS9VnJFvx",
  "key6": "u3waFHFZex8j5u33vbtn5Gx5PLmMBZBd9sVAj74RuxEsdbvUhsEnYbnFrK2J3Q7s4SCt2JBKAipJqYtTgTDUbyt",
  "key7": "4uZWjPAkjodddRWktvSVBMThYLsV7dmkzDAstj7ysVvw1kQK2JXkb4gSUX1Ng5rG2ku2nB2miH8tbqSUggoFRCfo",
  "key8": "QjGz8oCtvbf3gqyzrNxmNU22CuQAa2FciJcW7EeodDvrajAmfzEy5xSVtNfHUwJuUCLNkD8BHdT84Ed9usdcsMX",
  "key9": "AdiJ3P5fKvLYmb85Ycr1DpAk1jFDXH2L8ASv63E8She63ae1ZCAVLn6zUpL7V4QFQje1LPLDCMCMChTQo6jMEGy",
  "key10": "rcbSDtpzLTGEFkceiBnjdkprEDQ42MDGN8NqZfBUxySVZL6rNVX21pQakiNFuPJW9KAf2pvxkquUpEHQbvvx2cy",
  "key11": "2Qr6GH2E3i18uCazgqhEXQYA3qXrgZssZWXZvusaFwM82GWsHidrNzTZzJzwwJrWGGaX586kC3ciSoCvHhnEWWY2",
  "key12": "3G2RWAAwmmC2qBBS1ATF3dEjkaCrK2RtnecgrdyFL3bVmzRfBupb2JohnxNYAXe2TMTB48uh1GfWz7wcxjkAVNkv",
  "key13": "2LamzpBQNtvUoWtg7joSDChQFpr3cKGHdRyxbUxz3WUkgjhQZnafK7uhUbHXVamfEApnbeoQzm72nJvv2HBaB6xE",
  "key14": "3NLfvifyBNQdW1gZJATtVmeB2cEXBwiZmNsYkYS65axXqceXp3bfffkAE4FE3E8PGQqWhds5yiXXGhRFmBM7x6Xg",
  "key15": "3cEcEZ73cnKBKLGmjD4SYKYg6he2sc6jnXNDzmQb7jXSYo82kuXpzcRsYvzVTuyfNwN3gkzfERynemtTAY1LMS61",
  "key16": "44iD1B2uZVUmEgZtJqV8BnoCD6ejcv7QrGjn1ERfza1XDaYQ8PTMbEQ4wEy1uZ6D3rmHFya5Qomgt15XSvHkXHLV",
  "key17": "4mKBbCbKqx67DoySM83dSi6h9fKCLdWokq43JoYiXT7KjW7JX4QJrFsJ6djLNoYkgt9xkDnCpArrKXvpPgnYJxnu",
  "key18": "3cA2UQMEPTDW2tdtjd4Phn9PvuxbWvgDFgsKKFCNvn6KqwuefV4NKDUXMi6gYNwTrzs4XzNg7mrH6BGRxA28q4bd",
  "key19": "4LRyTh5UR2G3D5VcRFcBbe9DNRHufr7H9emKw5NBMokEpCPPg26GnTnUFfqAEHBWPLWTkk1LgwqE8dbLHA5GQRUq",
  "key20": "CZioSSk65XGwKnDQwmfA39xzS9mqsXqTG4LRT8ntkKKkyBmDs7ddkrZ2TCtKXmLCBYuZ21ypNt99NrixAznzATi",
  "key21": "5Yct6JHUj7CKwVwVpm6fGd3K9YsMcEgGtZSQaSvYxkXvpq9Z2zSyWCWA1LbDcRB27KCNe8iDUjyr45ksiY7mF7eZ",
  "key22": "3vE2ayQHAVAEC9Dje7FqYMWvhdhQBEH6FTLrFt98gcSJuLT5QVtBDXNzkv8RTXFN1dBCHUNaHdf7vtueAdyRDUd6",
  "key23": "42byoMZ1a9r8fPfH8Q2SwVVK4sMEFEJGjEofTUMMXDJsY2o1udAx9EVo9QL9pb1z8hCcNQWTwnp6By28KFUncxT2",
  "key24": "3RVrpo7XmG9CSVvqyr8sorjSMXbKwiC8p8SrNPJsNPtGK47CuKfWavwoNvhLkXXz67dcJ9u7vZtDcKoJtjR6kPbb",
  "key25": "4zyZwxXvNounrHxoaWguZXpvCnjvCcLHBMBrVgU3nZDanJTorG1auBnxbP6ZmCszpr43wa2EozcCPkNhh8cttNzZ",
  "key26": "591NL6T7gPgDASQd8GJmCR3M7KzdurtvwU9AG4DLvt4xgA29zPwG8btpvRxCYHssGonuBJ7MtEdphbNQgtVH3N57",
  "key27": "2o7tPz8KmUHNqZ9sbyijKhFAjmbYWTy3f29Y3wEeYNjaJEyYFLMwXjGoYyXz8pWuPjQPUpLYJMVXKZAd6BYUzDtL",
  "key28": "4SDs3WMtQet8coFyngpsyHsJVLpm9NPUcKVXqDfY26ywtTiUZb9ZUEWveDpNWAR5zRFD5qV8DsYdR1V6TjnntU1i",
  "key29": "DHPAzoCPxH1SptSURA3HZZYDr4tYrbzeLLZEBwXUVnBfsD8E25fNDs6BkjfMnptzG6QYUBYfsHws9NquHT78YG4",
  "key30": "GkL2k7L8QYWETwua91vxjEA9UeLvKsrzLdFHCs2JtDUDeBs1Jom9jQ3YHmHkopSpK3sBx4zsNjV7euWwdKtHNYZ",
  "key31": "26QmNjN2DRZekjg5Kw7Hg67UBiSrTwmjE7pj3oHBwWbC2rXsd1g1LJbqP5wLKab8ea7CgnTYUt1LnxWR9f9Cdtz6",
  "key32": "3xNy6k3HtRQu5uBj6bJ8ENAuzF1H9ibgPD5RY6FMyyB37DsVH5TvSWPJbsUnU6qhimgYYwTE2wwUAigxaAQwP3p4",
  "key33": "3cupK3NK9LAtK1KpXkj5uWTaQyPkGxS3b7QvbtxbNt5NAwGPfAquwKXhWKprD42j9RncXQiK6zAf2LCRSLtkzb5x",
  "key34": "aBqJBjJME3XNmF6ypmu1U47bnZC6FFPgxCjWYajTgTw9Uv4C6wR32gXeP6X7pgJAHLSszyTqsptv8eVaAKrJns7",
  "key35": "5tLxZ3gGU9GNsQtrPfJr5yf98Etz7qGHt13CfnZazTR7Rs6B1YGm4yZhtt8wBVdMAbcywxUnVUZpjds1sEns9t8s",
  "key36": "1XNSkyxQD7u8pxmBjNQBEjD6QhEWabXBiodVwWpxExpKxw69QbqshN1dQSwRfdFQ9JreBBQePrnzvh7ZQCGzyYb",
  "key37": "4bkNJkMxxVA1vpPP9ppNRMrPNGayneNnBgAyAUJJuAz6vrJhhXCDb2hYdpCK3q6DY5iDpVXQfFw5AXQHfQZLuUiA",
  "key38": "2L2AxrC9U5ZVXiA9qHLWs5XtxReDehHQhMcjt6MEYSqaAaGY5unyiKSzaHdGocCQ8d7AW6vjM7j7o7YprtbhAp56",
  "key39": "5fdLVFGe19HjMVshNKBsXqZY1ka8UyDYAJEkXz2nep5zGqhAHin865pHMFMBGGLdxKUUo8k8KfeLHrByb8a9jJ73",
  "key40": "5ecxT7gotBMSdj37JoquwYPVARmtvwnbp67ebFKZ9X5JKa5meJAbFkQhExXgw5Fm55HWAUqYhJtFdYEcAEoBLVLd",
  "key41": "4bCem4C5PmWM6oGAn45QA38KjxrwkAkwiisMkwGWdW9KJEVQoXW7mnjnzUwq5LUY9BFn8yqo2Ejyn8Hr1jTHrqdh",
  "key42": "4CMaPKehsscFAh1JQXBTwUAacbyDcpYfpCJ7adGW7nC65hZAqR4jPPG2T6dA8UfTGEvsM6J4e7ZUbs8LwULkYgMv"
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
