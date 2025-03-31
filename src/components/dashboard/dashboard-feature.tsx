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
    "4dbyiJtnSgERa4687SszZeoVRReGsNMw498zAgskxzMndArmTygFT3CerA3QfYS7UnkYXujjZjv7qrGLaCs84iMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29jdnntUtwtCJH6hbwbFaaHZsehhMjCKtnpCsK6yeqmEbwbN7GHQSgqEtSyRkXDhKruX5wNoSpHyiSxia6pC5oLx",
  "key1": "4D2xj9psKVD9Rdra7oQBcL8uhJSZagVtFdf3S5sTWyCzLegPYuPja9b8utWPeUBUe69GcgkAgZfbu4giWqemf9Yj",
  "key2": "tGKTaLPrGuM9raApD4qCK1NjHC4Rua9ghpzTvwB3g1pQDqSupKm8Lc6LYpe5xcJSnCXkEzFck9Sk6bsYkarm8MW",
  "key3": "2qvTNYqXUeZUKrXpRsGSYhAdpnMqaT4wtbca6ACDgG2FwNEunxQy4D5UTxMSrRfz7GjL8xGCyB9KHh2X79S9eSZy",
  "key4": "4ZFKmAKN2m9GSFWMhYbDEgZhLWs45UMnHBrWbwJkeoHfzne66xnZMZxfoCPMvyAzg3TZNskFe772kqWMcf1p7YDb",
  "key5": "2ZRXJtu8cGgCP7zwXEhCqHGepbkosAgZfhUKZzCvhFLs9HZyfFghvJB3C2ubjvQFx7DvBzfaTy5ZGFGGisrsCZXX",
  "key6": "3x8djWtA6Kq56HNvJT7tfHxyqWMqNmS8XsKr6Vpr6QQBwGhQxBrgRZ3LugHwqmKuD1R6hnpsX9KU8u9BEopqN64F",
  "key7": "53PoQAJn9UwprQyQQ8tbVy5kJqQyA24K1aExByot6sq2NvRs4t6dkGDBLGj1zNn7Gks1cPedBT8TX2j7i87TkNMw",
  "key8": "4NBj3wBHAU5eSGkr19enFZd2jgDxJL72SJKszTY8cCtXnH2xChB3eWJyRUe4vbRr95YfLSBrDjLwp3PxUfZXEAUj",
  "key9": "5B2wx8Y6rUwRHyH9MrmWm59nhRM36sYwKaUzhLHuu1yje68ARzXQA15ycTDeyYrVKeA6W18EnqXeAhQYn7EABkDD",
  "key10": "4D2FetLfNU8th3QJKXPUgW18ab4FAh5XnrxrmxAM5hRJqPj2KaFVW6zGcbLHhunVp1AzNSYLv1aovJx6LnvzUk5g",
  "key11": "3wco6LfM11KfZxxNwrV6H33ULNhqaF5yac2rDmAwEd6dVg1Evvu4CgTx33VWj9Qp8Su6wYbd8eLGouZuVQFWybE8",
  "key12": "5G29SxCge1b2469rDLQNCUUsRJwLPTEVNaiSGuH6b8gwNnvkReRS7rRzPKTeJg541dTaeMjqbH7VDK9hZRr56TaG",
  "key13": "5FWmV3Bw4RaNLTZCvaSkh1MSUR5sSMwHy1HvNEDWv2unLq7kpiQSLJQG2hEJchccB7tVY6duqAEYngzoLCVLiXwt",
  "key14": "UHPoH4qsJH2FtfkuDZhSiQtqKccT7hzhkNMPTznLht4euJNp2mtV1rCQ2koHxeBXCTXWrTsp3Ni47BnMP4pKenB",
  "key15": "5eLbnx1urDrHxLxRmcppE4hGQDYYY9nJ6Ci2MixQatPhVywWUWgXjmcYXxE358S3QUDVxCcT15FMm34TAqRjJvHL",
  "key16": "2Nz2RXR8cA975XfPJSP9Z4fXfXB1e9Z6bGvjQzRvFVu6uRsijq9niZYmSSnnnEMhf6u6jCTBSHnm95jWrwCVdCfg",
  "key17": "39nLz7TFLtZ2ra53oqWTQ4QZ6JUzyMxH5jET4AkvzZEzuyXfYwa6zDxK9LdECzrkP6PzJQdaPytAVnAkBrw48wE8",
  "key18": "5bX5t6qTH4YB2gBzFu7QfuvATEAhqh5LXoAkrRrhWTWz7yqo9YRM2HpY8wiGs8JqQCiUYcjrESLgHTCXv5RWPvjE",
  "key19": "RoqkmMHXmXTwfkywpffPeAfF9ARAF2tDXQe4Ud8BXtJur4UCf3qwW8Y9g4AJZfM8gqxejUmGs5R5iXUPgPNAXUN",
  "key20": "4M64YzSH6yavypnYLeihXe9dFRxpvFcNV3tkK5eAihfRPnkDArgjrgEXLNWLJbRNLixn7edjRMUvxwUw3vSnA4ta",
  "key21": "4J9hVXbYNpvKdGzTNbH5KwoNz7caYh685zjNkz4yabkPmQNwCAjnAWTjuQuD6wqtfc3TRSFgbhBww4FgyN68aAQA",
  "key22": "y5bVUft9PZJQZszsetfeWShE6uPvr1RcZxib12M14amrvU5cyiaXmtVjt54zE8sdSdrR5aK8cM5fww6XQpeLC33",
  "key23": "4caQE6UwN2cCbBbK2pcJRvErPtJg8VXbVfk14pphqAXNmhi8u9qwytHMp96neuHP6epTWiFvh8BnEAioVk66qgRG",
  "key24": "356D1C2gpDb18DXRdA5Fi3eFjvTyxncGMv8MK1HLZSTUkhfZQcbAYqA3FTmxomRLpwRH4UYzKpQJfXkHFdVgwTSF",
  "key25": "5h8WzXKZJo4Ab99YiEqVzqKbVjrJv5DFC3UBJpu82uvjq1tUWSv3TR3KknR8sKRb3HDPvwfbbwTnhqSocCnMDmSD",
  "key26": "4CfEi1T3NP91pnQBg4Ycv6v9YYKTwS8SoP1USC6WYFTxk8zsYyXe5A9wdYxbr2CdxnXLpT6JjkSuByTJsqKnzmvg",
  "key27": "62B9CQqGc29kfMXDrHjHeuarikYxGQDfy13GoCG6XYdcZC3jDGU3C8bP3Zwe87KTZ3MDEbUoBDMQCLqp8ttAXE7A",
  "key28": "2cbiAQxyNyC1jo7zi35DWKgtqRMPMpyi1mCYnNpsdGbpJ2wvKG27kDtvz5EQgXCa4T66bozLMuPqfBwE5zme16BS",
  "key29": "2yTcPW6mP9prnT9fApDq5ZRHWxGjFoc1rjvpkEnq7VMpdkB1571qFJWooppvyyyu5VtbR7HTJg2bU5C7Cr4sHsYJ",
  "key30": "63ZrJHHzKVmRd66d4EPqcSrSjERXUxEpqguz3Tw4pr3Tvyr2CeJLXqf1vx6uNi6MYUvzrWNi6QVysg9nqao1vqta",
  "key31": "4DT3m2cVjKJSFytYzP1RLYD9XFmhnqrDsWwPRpPFGHMBKfKy2kfnMZLomCXeAmFFiNUs4eGUVbmUviQSywXw3GJx",
  "key32": "2yft45XALGZRWAt1emj4GBcdLTy6N3ZQpjY8ih3TUCFT1DUzqk1bdVV4bxhTJSQADpBWgLLaeYAvQRdUbzNpJGPa",
  "key33": "2eEjCZU9pQ187xK3HyqJa63w5JBUpxXkv4SoVXXENbyKyv4ahwmjeG2nyf5J5BoKgicWSqPwFKtNFhPUrLASLVZj",
  "key34": "3pVU2N94XFVj4z3nG8aE5BW3ZRMbJTXXmJgy6FMHK6QF88f25LSBwGVe4FQyqndrFKG3LNNosHqEH9u6hxXGyzJ",
  "key35": "5cT75M7EGVfd9DuBKakgH7PGA4W92UcTPQqaD6Jo9Sy1fvAgg4Ykt6hW1v35qpF15pW8gA9h1BrioQMTmaSe8bnn",
  "key36": "4LxAEgfyto2ABZJ4ckw2j7FxyRJ1gAdJRXkRf3uzj4XvZ25s6SPPHbpyrcuuayLSWukcwVjMw7oqtiqGPZfCFZS5",
  "key37": "5RiopNzJCLu1Luawkv3urs47QVbtunJgr3PWTijFWhJGgYcLJcWtt7KKzNNaegwuY6EfTDysJMF35yqvrUgDG9is",
  "key38": "2FvBjEQm77NTcc8Ek34be6hNLpwY75x3tjH39UdPfiGPZWMRCeH22LkaqUnV2rihf4GWuTjRudknwxfKe1QQMdNw",
  "key39": "4opd3RSWBZypfLi8T8mEp1tVFHhiYsV4ZdLWjaPddJuueBGuRCoGJs976FFNqdTN3PVHwNf162rTGZkCgbQxGUZf",
  "key40": "2Mn9o2ZdHjWLNgwa1bqnd27QtKdDjE2RyFxVNwST7XV4GzX6e2TJeHCs5TRnbz2gLzck7T9fwGLF6mJQFWNZK4U1",
  "key41": "34vEdJYmohTNCGKnoAfqwtsQUr3bFrpDtVVhxuoqcEkTnLQzrN1uQF54Af562pP19AVFcdP4XngncjzvpGDfpzPH"
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
