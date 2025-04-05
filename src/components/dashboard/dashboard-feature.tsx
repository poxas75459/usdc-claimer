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
    "xRcGY9WNBHVGThjFrkGZo3HxVnkR7cfthRjLNUgqkWLrwuUYF9gwc2rUYSRXeQxTAtJgit1fxs2nP7mTs3NPuFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RaCcyKFMf27d4kF4rH5GMJFqxisvMQT1BRNidRgrrABVvjpY63T7KDHgHGvPahnJ5ZjbksKSnjyd1WxiAhhtkvb",
  "key1": "37qXvacwgbm1bERhSgM1tiK3MSGgV18t2sUVZFCttFpLeUooWrFJFCSt6N25AvE2mym18dp5EzjLkUDr4XWhqvdQ",
  "key2": "4J5a5eXcRqkVxpSyrEL81jz5BAkTM83hEagvjCVWvHgLv9i1x4nWh9pANu9sgDuH6e9pToHYLJQhzFBxibwc5XgG",
  "key3": "59D94u3iNXWJNRj4acdodhfvbpUmoKEwDMH4Vyx3S8PjRYqfmFin18F9uTB7QxAY5f3sQ6HvoX8fGNR7LXkdHSxp",
  "key4": "3SbGW2MqGWw6wfrJr4bGR8M6yf27qZnFS1WjsoeWCUaMB3ekScnUSoKakWoCT2UVde4yzUNL8ULVXg1uibqk1xzw",
  "key5": "5rZQ4co6XAvEZoXs9R2W6Gzc3i1N8NSzvxRAZdpr4idQgiWW8WSWmJnd2ZbMHZjPgMYqAFDGdibHECSGiUuMX1vB",
  "key6": "3BusK6Q3WCSZXY2fJLQmBHeB5HUozciSLRj1Ua5yVR5mwK851wiCs9KpKgz1hauQb1XubUpFh93fMdPNvxgcTYYy",
  "key7": "3aTaQsjXHjLZUAJTY6pNEBAJL8rjUaY5fUUf3k9w1Dm75DGj4uST8YQApjhBeCXU4vjQSTRDVu4ycZaxVcrdpzo8",
  "key8": "X1PM3ZYoVWPwJH351UtEBSEtuGyfQC8GkiQaaBZ2ABH8GFvfYBcxbHuGUrrfCMR83B1NKio6d46y9kqfwQqgKgA",
  "key9": "5FgQLgioVQgX3hiLKzSZRAb9j4NDcKhwPSuCx3ULC6AXNmF7pL7bhsAcrk5aFxP3uySUNUhXDG4wdVo9CqipnNTd",
  "key10": "3nGpXtsCHjiDASTF4hpd4dULQGDFnnGuSQtnyzLtiSKdWUFcTksJ3Fr9jxvU6HDgYHQiERapcCz2waqAhCTXXudG",
  "key11": "3D6eDWvnzNCXBZ1MWXNX8B42eguTjwRBniRtEaZgCbJXs5U1oGW2TvBehRJeP5T7JB5eiHFuXx9euCGP5xuUSLtk",
  "key12": "2BMgz2Ms9vLf44fYyo3PGpsF73RbRJzQirSMCYoxTtR9rzRnxN8hKc3vMjd7xXfmrbUcYmizwFi6KBq4W9drCaVV",
  "key13": "rxSvxNzBAFhfZu2pCUAm8HXJL7UEZiT9rs3qUGHZEvYEDdqPWeoVpYqUhVyaRSPbmu4Mh3s4X9qvjhjiwwVzJ73",
  "key14": "TsCwURbnH9EkSr1UZs9az5pHeZoR1Vu6x4Yhh1wAwb8e1MBRMcg21mKjng6Hb2N1dZjJHRjGvBQsJTPTYe7EW1R",
  "key15": "3NUndy24n56nctr8PT6d3L9B6cfcYvnCcnwSswwwJReB6UmohRJLEbDXBQdZAEjv41aSzBy8mWipXohN68K1KgPm",
  "key16": "4iwQxZkew7CjR5hckyxRLFfpLFaVpARHCtZnXZiBmPRWpP13z4tDJkVov5JewdBRAmbDeSEGupCLWFobUmAUmf9G",
  "key17": "24sNK3vevSNxH3KTTzRgpsifQj9TAemUf8bXuNCHEqRmjkt2h2VDpKkhkEVzrL3wG7QfEphvMfG8Esg4tn2D3oEJ",
  "key18": "RQjG3AT1pZkpwhD7LPKKqEFh9ex9u4urDDrBcGoiSjyidfCmSShGzkC1PymxHzXSivXbgiyFcqcmF3VSpXZqyBf",
  "key19": "25FUNW4C7Zh8a1SEGmizLo6x7FBCRX2dPQnJFpf9g5rFwCxWfzpsMuvU9ca6gSzDAeeDhDE39TLUZ7LuPmLGH6We",
  "key20": "5muik5L77RuZqLsy6hteZUMGccouSuQZgcCdxHZV72mAB9f9ts7NqaC9Y1UTTqkfktnXWQKyYQvoviSCtLzQo7Mf",
  "key21": "5Kd9SqrPLSczXFrhTYj5185Sp8hVur2SkUXoMuGUMeDVHPtYXK7zgECNqWRi4aAH7iDADe5ZkaehdkV2YcJ2AYDg",
  "key22": "24QDFuHvcpdMaWhTBrrpPxekuPxoJoDL7Vr4uieg3fxWqMijx9jAxAK7z29u1JgDFpEVgDVdyVYNYfyCAr5sSXzc",
  "key23": "23sxYF4kzpsQ6RugLe4s8ru3G4C4LBALKRj2uzmifKRAVVtRmFvq545prDyhY8b5LpMbLhBVWazLm9Nw8dfSaxzE",
  "key24": "2KZTina17U2xWB3v2gDQJG5CXPsp6fdxMGi1TkxJuHX3nmGkTgAUBQfeKdSX4g4iGyrSAmKk3DF58ybLsvYqsrcZ",
  "key25": "y9CJReHUhmbk69XoFC8NG8ECKQMRfqhYFT8UPy2tTVyqVQgEE8HuKavZkxBVKJPWgrGKtESMK3YzKD9YsY9JzLM",
  "key26": "2Jinxd51k9jTPvX2Y3WzxwBHMfYTvzVCbHLXYtKrgRkSFFkHHqBnrz46WvtisLq3WtGWKKkVEKa4vHKPbX37vmBH",
  "key27": "4Hk37LE3imdPzLr1snZFmQZtaQ2o8wpmKTBigQ1dM738UzsYHhRU73fZcfPWaTy551qateA5hPyPV5nc27YgEiU3",
  "key28": "4Q1pBQhKWqaQ886k2UtbFkkrecetsEbiCeTkCBXix8qANNJjfaeoQAeWeeC4AeLEiKL6B9NcguTEZzXywVk6bZrU",
  "key29": "2G9igXUrGCoa4adSsKFe2YeCYuFc3oph8h4sUrUHhL9iYCY7kQ3JYtcNDPGmGY65ygFtRN48Xae24GFgE5W9AQeD",
  "key30": "4APbJk7b981ig5C5QWbjiykUNHqpp7rFnfbBcVEXAGCHtNXb7gmqVJoNpaMLRRZiaQ1Q4qp6k4TcFpSizkFBdoFy"
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
