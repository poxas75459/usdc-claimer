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
    "3Sfafg4jGZgAe2ERCgNbqBmpqz63DNayBB8txFvPSaYQ958LKnSuCpAdaniS5HcHnp4btts1M96UcUqojb8xfVn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EHZE2D6uV16nDJH7RGC4EHBPwKHyMT2WqpkVrWWPAURHT4R4aAJ71nSCD9hj1TCWvVDm2JY3Uri2QUtL4ZUQ2tb",
  "key1": "3nuFaRZYV89Eue6snYTpynqw8JUY42K6hgS3qU7mhJa3zigkEwXvvDJvrsU7MacH7iRWihGC2WhvbJsT4JqXgoHE",
  "key2": "2XjTfbnYGbEFNZYjLQ6JbCLwVFGXG1469sTbXkUD1Y7uJtZXbyPe39C7uvFKMvshWxxwV7MBFS7hpYVeWMq4e8eD",
  "key3": "2rDZ8W4zjcSPPEU3Vhrgvs2ozeqB4gD5EGwe47My61HCjXNCLEm5gNdghpB91w1dQ3JvhTS6uPPLVh6TktgfP8q3",
  "key4": "3g1sPet2wXxzLgboqR4RgJ4tZHhxcm3vowtUzypTkeGjr3exWwVqbKNNQZT7sotcDuBzivVJdA8svBhmucx9GTmk",
  "key5": "2kAB6LTqTLg9QSioP1sRMFLpk6di8o99RM5YjBmjRmA41Ramqyvk8fR4Axv274gqaykQRdrTZVPQGSkjw9Siac7t",
  "key6": "CCqRr9MTsHg7FRYH6JrNvXuiBjUmTK6br4DwB42PXti542peDDXZduqy85juSqiEbMd5DmYeoRpmLdV6uXxPYHE",
  "key7": "2eVkYJrJmydBgJSEMXpeKnmj8LgR9MPSSnTnXSamAs6mPkfLtVTCkvXGxDxyWpE3VSG4WMc6oWRFpiRrL3wgGEiV",
  "key8": "2XCqfD4EZXGQt1o4BJMBHbpNc6KzDjHC1J5vQhnGGfvxFyPyzuVzedWpN4jLtP51Bp3qtpe2WvZsdYjzkevt9QZP",
  "key9": "5XHzFMb8no6PhKxLcexgNxARjLNvTCnx7x1XEe6VnQf9jnrMUzw1ngRM2K6tVyiGbW47Y6VaM8yeUqtCoftrzxTN",
  "key10": "5RM9FKFhQv2thtYjQVkLQXP5qUPEW4CAmAXV2CzgW1XzsGts2nphX8BEDCGzzkSBwFF4dREnsYoq8PuQHCcfDML5",
  "key11": "4jrU8rbWR1nhpnYs59Ejvoby3e4cbXTVD29jmpiBMXYpb4LuHRwH7QuyRSCsRJpdvV9NC9eQ2Q74YTGqsDJySB8D",
  "key12": "5QkJjKqGRFqq3Tpxr1NwQc1Y93ogBWi6p5uBKKMw9csnt2tcg5ZjMYdnVvgmFhc24fd3U6KBVVpffv6VbXUoCN3i",
  "key13": "itsqmyJEB9CyW6VkAEmfZJtfzvCCSnjB91cLVrrrtVFHaCuPiN15JLkLH3dU1V8GaSJkoFx5E6u3BF8xvg6pXfG",
  "key14": "5cWwmHLPVhaWrdztVwvjNJNZ4KABiCruMSPYQPsDxE3UHT5pirE8MvHb9E6d6JZSTrr7EQ9m5ZURPZoymAqMvKby",
  "key15": "5UK8PKoShsE5FP8QFYSSP98qesQK2PcZGJajCi6xMdBzm6RYF5eWJvQaRjauY4XfnkskaqYVBAFK181QJKeWu3dL",
  "key16": "2sSLEpPMivBqmCkzNLFbBHtHhmFd11xMrN1j5oPZbh8GzPkeNZkTMwqrsAFpMV4Fxqmpe33e3vaXFyjpxjHjLYNF",
  "key17": "2xXjPpWjQcbb8G8HsXVwPcjMbxHRghLbzFssKTeJAbFyjK9WzWKd17BtgLKcvhic8r3v1vFzMKkQmDV8ekfvsqCW",
  "key18": "67p1rPwE5YFXyQ4tYgBjLY1BzPqyVEmFgVLpHrMPdgZ7J1dCwvbMSRLhoqBDJRRyuZs71s6duVrcfmQDBXeFQdSm",
  "key19": "5GE1x2ChDQ1SCvuwWcgf5xbiZQXQmTMKh8DZVxbFgw5u5SjCyriC7Q24bvjM6ZgfCY68tbwNaATpcmxYuZGBLD42",
  "key20": "pryRqcsxHLkM2Mv59hJVDDKQRM7YqS2wdmKSt2EvmVWfmsKRGpjg2DmCkPM1Xcwxf3KVw5z5E14ir32p2mkSTPv",
  "key21": "2LMSnTmPMFKBEWLn9adprEXu5fsq4WTsNfHpjLsVNP2DogBjoNRrbvzpoRnMra8M5gWgxcEnA7ZV1RgzpzzAuG4v",
  "key22": "aAkPtLKFmX7GDdEPWqLWsFc8tY3FGJGH4rzwLhhcE6Hk8XDTypMCkcNjAzm5CAvDb7QAaDg6WY87vxUxMta2N7b",
  "key23": "39DQ95oF8J1VartnkWBGE8LcUHWdXuQVXfcysuBp215cnCSHYGTMThHaAvAo74JqjtsFgKtYMXaSFNDHYx9whwtK",
  "key24": "5krQbqEkz47ewzRr6geHNabGMop63a1CVJkCwe5ZpQ9Kgo6VXkKkexo4oKaa7WA6oUELwZsmhbyDhrmVYh7Bj2Tf",
  "key25": "3wyeFDc818CzFT5YTsCfoeNFePwrFVng7KMG4wJNkBink5HN1VEBfYnGYgaHwHJzMxzNuH4sVSjNHkJrCx6tzAxD",
  "key26": "3eNQPYGERj7SBWBhQtSaNJMEt1Jkcv8qBrLKnrx8feZ3Q4ERCWuwjb64C9ePHL8PwVX6KZA9hY7SoNRuiX1JcGSQ",
  "key27": "4h6FzxtWXZPz1M1j4JtVyGs6pRmKdTVCPCWpACKajaHAwzQcG6G5rVBMiGAZkFDwTgQggkZ2Fj2UcgJJyLqoV2UJ",
  "key28": "5orqXSxujrMcWaTn4bgsBFB5HJ3cEL7iEmDYBmcNBjcPMBQYXdMiUVzhLb3jFfJLVo7aBA3Wt8ZfvWS335cCbGTs",
  "key29": "3MG56ZApTZoQE59qmh69VxAKH7gC6myJ8VqaXJvqzCqhC3G4XvM7n2LBdXQttX4vUSrBtjbwV4MDr2WiAPfDMyVJ",
  "key30": "5TMgn4NNsFgw4GLjTfuLzG1ZTNuRJznpGDkSZ5QoUvW7LkRQQ2R9x9N8boV3hyBbnKPAqLnqpCWCzfTWw4u25aLD",
  "key31": "2figLCG1G6t2cs3D1PGkwfyoDbZsfv2nBP7Rs6FxmVv6ScceqccmqgH3T1WLGo4i1x1wDuuKDU5D1ooxncnsWvdz",
  "key32": "3EUgVjtkrBn4JqycNu3LkpAGoL9SrTrzDMRmXhVwQDxk5mZYbSJwu8UjZ7jWyVBGR97nJnx3UbTYLp9WsHgt3nEe",
  "key33": "Suqgmv33A9SgjyHCBcfp9oiZdwcdBkGGE3ujLSXzfbGiiFc1pFGgrJHAYHzKc1dsx2YHUsMjTtjP6JwMufjKpPV",
  "key34": "4bDif7368MwTX4kuBMmkgNRdGegLWzx9BHo1P97kfzkyy8EE1uwPnQJrNXCFLFQTs1HmQUWUK9ZskQ6yfpiDUpfx",
  "key35": "5Rs4wt7h5bZNFZuwKuoQoGMzi6uKT8ngVfagKwg96PoqjjJTmjGLtSszGQYBgdwwCQ6UfqEfvKqfZhfM9BupoUR2",
  "key36": "5QiF91eZNqfaSir4XpvtUUtFk9qan9cAhCoYFygg2V4juqtVvnCuN2yiqXb7FzxNcXDJJPckuqFSn6T6CtmDgFDW",
  "key37": "eSnvds1ELxh8PQD7syZgGJemami7sVgNbCSHKE7YxTNtbBYFdcwjoEfgrZjP4uroqoRSxP88ct7XNpXLmATixjG",
  "key38": "2YPAZYWYXsk5tWVbU4CpftgsrJdsC3Ytr4r8gkXZ5uDDRVtqokU68Y8ezMc5hyfqVBTLikyUpLHyuDKqpmKmUKVY",
  "key39": "3ix7ks8mmn2HDS5eA6xS5Wi4JbByek65FRXPa9F1ZAkEX4bCQHFK5ScN1ojBGtxz5PR9qdZBraokgFyhdTo9ZxCZ",
  "key40": "5jsZDCEnCUL3wzkM59EC1N4szmM2qnigtVcgYKzzBX9A29oP3F38BZrBZKeJ1qyuTTGhbmZ7RYMeHx9pFJzKyfYN",
  "key41": "5MW8a3eWm49QxvJWJ9ZGxdbCDBpeZuowrLoBqBkjskY95YkfWCapx5CzbNPnNVo9RC8a2gcL6ZYwD7y3sEanchuw",
  "key42": "2vfzuhvXLNuy8bkwDB2CttBCfpeASL2bKfJtoWvonBrCrcNZnUtE67SrUsgvgGZpiJwBYzQCJjoyMJWzvF2ATWKZ",
  "key43": "5kaSJgpY93tt65ocNcXPPjjasi15yToSyhBPBk9y8LGbhVG17fFvameZsHvTkbjUnMaWKSM7gR5DVPCbrmi8FAVp",
  "key44": "cNYuJ43zhixduWu75C2UEgFuaCH6aXzbTfcrajhVhFV5VcQDuL6pfTLKmdDVqQoQJtziXd2EiB6PGtdYR5zbwkL",
  "key45": "FyaznURax2NHwyQSqEBE6TzYKtQDqGzscvBme4grzpgsVUSGuLVPo6xnCu1HyxJnU2jwgKsibi8JqwNGAWFXu7S",
  "key46": "qiVsjWnt1JXbLj3V8zLatmEPqxeNVciTLCNVK8XpwRwT3djVs9Y6VkYpcdgx2S4Z9nNtW2qTpjXJLtTfFenLucU",
  "key47": "3TnvzmCSXTtnNAgUjfvy25D7L1fyCRwHzEddxTxpEAqUW8hWNaFQYj2Jb7DwCVbisnXQKnBytwdYLuKquURy3WQK",
  "key48": "4b212LejZrpz1JvSfjbiMBEHM1ypQDNCKkmu3hbbgbNjFeZkDunsCQn7Ztv4xcbABhBCQ5ECLXkFHWFGgEzPwows"
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
