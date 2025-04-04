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
    "3btvwPkUgGieNXxv3LMdPqPkaxWocZFvpq46TruAbLocu2qmLMnWor3YE7TVZbSbnTyb4FWPvEHqy8VtfyiteQ6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rHJbEbZr1A7Pk4DUZkYDL67T6xr4HtGtX3NBAo21PyzQoFJ6fmpQDarsYTcN24PDhSHFzGpvqH5PRUznVW2fwiv",
  "key1": "61RWgQ6WC5zfJRU6knUTy4JZPfMyBTk1FnSoBp3c1dCpFRweF3BY7g9ezBwdQr6fBHc9bKvWza44mqwsPYxjWkq3",
  "key2": "cZXYtZTc7KPZW1MjTWzNxbjs5wT129aaPPqATdjhnXmnN1g8dE1UDFR7uD7RU7vsVipuSXYoSRHBsAEMrjiYiQk",
  "key3": "3SyJRYLMYD5ptsLxhHLxgSpGyBbnwrQtEBLoY5JBCzueQtm2qKFY3faXd6yefaGh3mjhdK6uai61SdRzrCfvNs8h",
  "key4": "5SYt1ecwD4vKZseKLP6dSvtBH5Hp9mw6XiRAAzCe3WkErBc1r4gzi4RA3WAUDfeSC4DsQD3Dh44sPQnAVFWM2yoH",
  "key5": "5ts3oEuz5Yuffy3cuMbzqXU7HyscF8twCBD3hHGdSQhVqBGE22yjZs4qPy95gppSjTvVbEuJY3FjJ4uh2LcKkwxm",
  "key6": "Dhwv54aUhcxSpcPUJJCQ2KBkag8TZdfyeiDrcqiEVve4h7NrXtcuBkgDUBpGUi5jPtdjBvd9NKSGBTZNdkSFuF9",
  "key7": "2oZL3Ebo6aGa21Qseh3fETtfxkaNr96LmaTdxkUR1zxxZcQwnMxrbbSdZt5mfy3srLkMEQvmHtg7E39CS2FPUNT9",
  "key8": "CUhLxHxD7xNJdP9ZbNVZctwwVF1Hi3b17vQZPTKHbHpbAY17MR7oXFhnZCzroyvNAg9r4k5vGM283R8EQQD64F9",
  "key9": "4vGSM1NthJjd2QXMKSzJRCD4xf2cGgVVLy8aX3AymwoLr4WNHdBf6sLYTZqhwgjbdgGVmQKg1b68KXtoKp8DSxxB",
  "key10": "3guorq34cDzsbfj89mXTafS9gCjDjRjL7SHyAKRJ5STpLQcokmJVo92GdQuLhdRiS4fzU5wQAQkqbLRupQ8AuAb7",
  "key11": "4qk3c5LqQ2Dsz1NjKkzfgQETkDd4jc9fvSX52XXopP5RqEBkuvuNCAh9Qq6NMkqKLeiCPdJGWDJwt2cmzz6jLqFm",
  "key12": "34jnbTFXfEWBAjzKuY3iN7RsNW53C9aWZ9CKZtP8mNduMMgjVjUkcj3eE5mezZmBFVzLjFRz8YAHQRs8hiXFaoWH",
  "key13": "oxnVAhbBBS3keGGNA9w9TxLrcN1ZT8bKo6abKFHVU7v9c5S1roMwYHdGtQ5h986hhY52UBrtwKFkqjYFrNycghe",
  "key14": "5pMu1pbtcZM59tJaBmr5DfwWpypE5avBxbYGHiRqa8TzFVZbJTwbj5LGXoXHMXu4UzCgS2BfpUgCfwVcrPiudpQD",
  "key15": "26fpRRiXQEsXNnoXAsUBHZ4tmTujaZytUCXXFbA3xSuy6bJHmHshDzD95PvnwaAmGqX1kRMENvwZn2xXu8DiJCem",
  "key16": "5EaSx4umMZxHjpSVLRqu9nYP9nRwwPu7VYm4FDKT4q635ib7nTeH4YPrTBNi6hcYBeBHR3e1MQoJKGC6zvMqmXfm",
  "key17": "mayjAZdHCccGK8hVKTPF3dKbrUc84isWbrQPeVCpqGvoN4r7bfpPUvpVFy6wsmmbLKGrsQHi65hwg841jvotj3X",
  "key18": "8vHr6BeF5g5mwKJtkp9Sx6k1GucFD7KMsK5VV6UEqde8GFSJg9xnGR55xNYSYJwiXULwNbmXmmg56ofJhnSKzUi",
  "key19": "2e9KaxaAHJ7B98r5VhL8HeLm3mst3fbmFebh15oE8T79gvNHNAvmYSCzCzqRqeReiR4hTUkkShuHpiV13BmeBGP2",
  "key20": "rX38NW6XPuQbsLbtAGbBdVqsM6RML1qYSHLN1YvfkNjevw6UjcW8DXC926aTqgMedu3CApv3izbeCW65UmakvHY",
  "key21": "35FKWE5736eXHHt7zDPEQZ9ZxMZ6hYDLL5g5UoxzESCwpnnWPdcDdz2ow7jy4rZUza5145VsQ3RXDQCBHpm4YPUA",
  "key22": "5GorNtCFqgAhbRMV5ccirgd3NaDF7LL318xmhFDb3TsddvTPm55YKZWNyRYpyeU4iA3QEV6zJ17zUMtofKtJBXCA",
  "key23": "3GgWdTCUg7XSyQieEYZqWzPj8QQcJEgBKoscF6ZQ7dCFznH5BHHexRdVjWmKm6NFHtK8hda1af8zdqqiPxu37JGy",
  "key24": "5Hmz6XDZGtXtwmJpGJP3tSb7RvFb9JVz9ffM3RJZnZkQW4nSXcySDz5gdNRLB3z1JkHtjytPdJLY66G9Wr32TdNn",
  "key25": "4j8vhkNZp8UXpH7ou5WnXKb5BBDsLJ3U71gB3SoZxB7egfGAKd8H1ePqAeWQbJ6C7fRxWFa3SPM15mvjiYWcfdoF",
  "key26": "4GGCSryhaae9GXMj1gSEGuw2Xk99TCp8YUDJng1Ghj1GxTc6Km93ddwPH7ZwAGjMzKgaSyhtuTTEMT2jbhaKfqNy",
  "key27": "5m3DtxXnS7njJZWaDZkZNf99GDCpBm1f7wzK1Hbj1fZEKkBLuJFT7D8Z9PjH6ErNXYLTuGmc5pdkXVV8kwp3SZXJ",
  "key28": "4gL4c64GWPXoMCRgfs3kni1kfRdH8qRz55BAJc52k6U5vhMRRtZbRTAcgemhDLMRpJWNeWPGsumBvruGZUqTa6tr"
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
