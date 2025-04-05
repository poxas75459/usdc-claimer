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
    "2jsyE3ge5GPSccdEXkuXU4zJMGsMVNZxSgZqQ7AVHfej6cKgVdxUACerjP5PvP1gKzEoHYWkcePtcJmQgV3SXtqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SRFDRfgXtx6oETxZethY1SVYcNGcEC72CdcqRR7SYsjfY3t7Z4cYEvQjFCHA9Dy89SwwD3x9WLk68U9De5zXmL7",
  "key1": "3kb3nHhMCVuXHRwCsD7BFj4zWVp2WvPWet1bGfMNCVfwA8qp6MKk8Mffg8fxerAwAGKMvze4C1Mg3wLEYwtzMJsX",
  "key2": "tpm2jdNAfKNLJr6PYTjBnPGFG1wrwZmWnFvCQmbk6GeT6erFknpepuJbVpg6WeGC7SwhB89AWC8XapKsSMEF2hR",
  "key3": "2Us95nz4PWchaKvTYrEic2BEo1qU8G2hGzCwYCA695ZoNfMfm6nGdF2Fzhe65yPEhvEFi6ubwEQL2jY6h8KXD9Zb",
  "key4": "3F6z9WTbwg217jFpyLxpChbH94zPPKLyk2BvWsiYiXsEXuHjDjnmJPeB9oB3JBJ1vyB6r33tsnzy35Px9t7G9fCh",
  "key5": "36ifFSwaaJbGhd6jAzpW2jNAugD6UnoHzA3LrnhWWpth9eB8Ze2qttxVozc7BbYwYJ7VK9UCK6HxUxKs5gfChFvG",
  "key6": "dzYh3yzodhtjGcXxLvod9rYMhAWKG9c51sJwdgY7h19Ut9zjtpoWfQbrhXnKoJSejz8dB7TXw6YSK3MBnEUNE85",
  "key7": "2cGbHJmXdvcLfspnpWtA1bjrzXTbdGs6xaUEm75KTR8ME4FjaB7UUierB3cpCs3Kh2aJGVt8F1WEHNwwGyjurMKy",
  "key8": "55m4MAyPxhNyND3HPAouWMtRLVWikaUVnosSJJMpyhsagmtYqyPxGytrouJKvPs7SNzpGrxUYKDeZ3Qp7a8y9m8S",
  "key9": "2FEkmE85QiT9N4uS4dXomJW6uLiYHETFzWtan8XCGuAmLx5JHWYDncjVMGHsUgXc3xfFX4JZpqinRquLySPL1adN",
  "key10": "2rfMVyLUboqe3Y3uCZEQRACiD2YhqnVCETfTPiAnoL7jzqtPMBVv2QVWzUyVaibNiZNvCegEXDmRWSMafAHQfNAM",
  "key11": "2mG8otyuFd6Kknd7R3KE6KZjb9KNv8R3t8mJHPtkiRCAVp2dimoohTBDEoon1cCFtr3w6X9vCKfRvn19W7YGuubG",
  "key12": "668ipZTNtLpHiCtzsFovTqiT9sKJVfgx87YTD7nJbm7VRJmYrzudZgE4sTVCipXCPJvJrdcXKPuVqeE4UJM3Wz86",
  "key13": "5XxYyAHazhJh6oM2uQPonhTb1TKB6uoMVK4k59xmdyJ2BhDmkkeWq7w2t2trkHZPthnMbbGXm9DDTNoDJbtCPdA5",
  "key14": "2GXNgfYnS2WxGny6k6nbbmFWBcnsaRKySP5UtP3rU7NqKo1mjJF6rG5bU49nrMuRP9aFhDYFJ4HJXBHu3r5b6ngr",
  "key15": "8HPCjMQ5zazD1GU5SE6iRxBoHbU4Jc5GYsHkECY7YNLXpPtXTnp3WfUUAiSKrGuhyGKEeHjYkRfZJRZCtLNauSY",
  "key16": "2LEM29ugmC42hvtQsQZZmAvzxK2nBUjUmGsRRTT9KNMCzWLaq2CXbaTXkbEx4gaMStEvyYCrxLpbmgBifSJC8aHP",
  "key17": "oxLwGgJfDWJ4f855aWwoenrvQ7SaZkD5pSmokZr3X2JGLgg5iLtUfhVDUD6snJtmr5QtrJJN5bSNCaC8AbgKhEM",
  "key18": "4AsQJfuaB89cNuHf9JCakmhRBLLXaB5wd8r6zm4MFmdHHXwkJybH6YXCeW7BRfyu1mdWasXUCg5agdsnBRaQQMvw",
  "key19": "62q9RxyAAWYXUWSMCuwEFWtsXgPhGsFSdzoYNzpmxDbB7wJTAJ1VMr6ikK2t6SumxLxhXHHtXm8icsr6WBQdS22Y",
  "key20": "3xDko6TTXfAmmvw6CANiNrPSb1KgSFUonjyKer7gG67U5Cp7naGEB896Z2wuvVt8AfHR7GqqZNpfBRDnLR2iDgxt",
  "key21": "4gokvwUb9zFQZnsFFhAhEwsG2sQ2QYYoMFLTh8T7WAuyNL4GdW7i4qFsAb2Hsev878n7ayZ2btncA9j4fdLsY9dz",
  "key22": "3gzumZKQzSU6ABXrqqwYMJPFFwnW5sC8Y5toKxamN2pMuuqYCy5NozfbZnyLE5JSVZNrGdAfGu3TSFewfn9xEPnJ",
  "key23": "3CN3a8b9RpT44GmBFFX4eSUK9piMaN5w6MDV2tVaFs71avvfdoAMppYQYvvxrBbZrJkVkXofnztaFF7G7rkUznc4",
  "key24": "3LqAiK2pebHhLk2C43doSBFMz1G7MjjpPL17JZXdSuRcP2eGVKNcYeCYpAkLUk6DSUfMa6mRL1rAnJpidAigEKbj",
  "key25": "4CigxYgs1eD9tbDRPzFduWLR9vUrDmnMWizZTHegoiB3bai9Bckv6dkhzMt6eWEFP75j9VtGY5WjjqBs12oeF83n",
  "key26": "QmLdRiR9BVS9jGq3UcuCsVekwK2P8NyPAxp4vPbSLP7VPGnDPvWM8MRnVFs5ag7WK4vEDx7Dve1YknULXTsg7Lm",
  "key27": "2HrXSFhXFyzmNxXqtgY8tKvpiDeoiJPJG3ht6LniwAD8VzFX67a8DQZ4yBDhiTMxpYLauDWQ7ka36PhH3UPdqdrc",
  "key28": "3QmU59haKjcGAe6ajpqF6nQ4Zc5LJVoks13Moqfv7ytQAhCVqx1YUSsbUQCDLkzV5Qw5Vwv7Fmwm3RLdbgp1SRCm",
  "key29": "64tahGj38fX8bz5HMMLxiKWYgV4vk6cgaHUouqQ8cUZQ2RX1mSrSkwUKV8NVzMeoPUQ8Zay6gL3mZfGCmhfUvCfW",
  "key30": "5tNduGjg4RyCPm33rNwJpkewpEnWer8ApKqeiW9VnY2YnwoNUrdZkPmbHDJgnacgYBqrpRY8zmvagXxQGRCwTxRq",
  "key31": "AUZ18XDoaDzKj2NL9Dvy1bex2q4kNZm8zMaQa3Pxi6vUPdCK5g6RD2HvGUp9jFK5ka4Yd59CVtq7oYyaHJzYQ3b",
  "key32": "2tH1EYrozSxzfiVKXrEpP8rznTiL1MNnVe9s9ADE7xLMZt7dsCiwvvDZZdBghBvbjz9ZsULChZxCzy1Pw1AWj2Hx",
  "key33": "3EyaXP2G1piNKgHd451ZaLeFCA2gqLMtkz9fSGwAq9NhRc3ckcWgius49ADZJS5Yu9uT1JLFjp26Z54tfa7Y1v8M",
  "key34": "3abpjX6RXvkz9DMog9bx1DBxxPEjd3QfJ7hEqY3smwBvngjrbqPH3GYFizFULsFWmMzLQGp8ZMuWC4pkH7H4DoCc",
  "key35": "5YunjED3Qnew99FwzQLmDG2dbPRTdcuRHKF4FzNuPeP2XeTgKLqRPqTTuxpmz1CQvUB1aWyvpkSyH14mzwiqfuSn",
  "key36": "4NbqNrRrsM5XooEkAq6DgdgT1sn78uHxY1uk9mHQdcDW9uh5Tb6efYG2pELtLiDrTtky5JqXtZ7CL2KpR4fvNmBn",
  "key37": "3tedMzewW7HucRR6jpkKHL9pW4YAjdbEDF4MNb4Qz3zQsyF9sNLU5V58kLJZRHmpt57SUdjDqaW3bXHAGSAEb6Kb",
  "key38": "4E1JKzUaSMBwxXangrQR8W7139BkRBjfc8Z2xSrhkHBk16QGN9ZZxUCGtyFkrpJbduPY3YGcYnvnk2N3ARxZ2D3G",
  "key39": "3dDFQrKw7Ch3TsSXX5it3VaCz1VXax1GxEcxqMRDYcrLZbGK7akGKM241SEJERFDH8bqCA1zTH657ioYBwMm6fez"
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
