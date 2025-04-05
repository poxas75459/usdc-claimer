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
    "4FdRon232svHDZXyZGQpQxF6GRyTozQJmsgfHxLsUTV9SRLUH7iyJMniv4yp14xXLsyNMKUh26qDhBJeMK7Y3kN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YwXfZ5xZkh2gBKWev713F7ZpPpWGyP2ELeqhAF3GGibuErBCkdaSDhm6i9UP3hvhjRePfCTcteZmh6peQXPNHYx",
  "key1": "4T5dV32GHVvQu5feNavePeDLVtBRfcGbQq78aMVDLaMuVnkBF7t6VehoRH5eLf1T8Kg65SwAvETkykLTXXzp2Htj",
  "key2": "47gU8PT3buCF8LiaVrwN5fccNhzi49g2svsnex8gfTBB6QNQoqwozKZFKoVTLjxWhJQ9ZwEQ2dZr6YYogXkjrYzK",
  "key3": "4gFzypSUcPAA7RT4LYvaA6nwVMaMSsk36F4UnojRWF3n24JEuYrjTHJ7gLHsCMZg44jLLZGkVktq8185w2YH7jNo",
  "key4": "Zs2DvwMc2e3rcvp7PdVU8qBA6eLQqRGYtK5aw69ovLgLjVL4RYEAcoPRmhKkLCu61ztNDBVVw1JREesfsQnvEVn",
  "key5": "VowFsVfGPt2nPbxJidJJJhnDZqCH6UUcQUGJqdm3ku4beGjS46qMiQKkQxdUkBszFVtKWM5MkVLMMjofajAEWkq",
  "key6": "5xa4SZADVkkVCeievd3iH6KwiS5MLG7HC8W3iCUVt6GHpoKAR2VUzTP1PSgb1kq5BVykFoqKLTTskwTfqWwEL8ba",
  "key7": "5Z8EszmDQqpvXWvLiCNx4wBCB2JGy2sG5KPAc6zMrH1KmU6CFg7r9k21XtEyYtLU7zaM8vDPEsZbGpJ7cAqa2Yqt",
  "key8": "2ejf23iNmFDrp773Nbg7ZW7jdP7SQetkktW7efgWARpUswtxexSbZpwin4BxPEVxFrUi7DMjFhW8Z4rrAiu92tgC",
  "key9": "3ksKBfS5sZ3VcjPViqFq6CK6CCh5PMPbASa1uT75eVvEg4pQNCFJD3FSsTppmK7fBYdEFAd9wshEBPy2qGLBXFRT",
  "key10": "46BwMwYaeEcnK3hYB6h6Aeu32br2aaLhzB4ap3ZfvC8JhN6aZDJXbdZq8UAREc5tQoRudFDMKFPtwvZXiZKAVmuh",
  "key11": "2om4RqD48MaFuA8THpKMkKoxDKEG3vCkXHSDoY1ZNoUjRcUsBiFYpv4nfRU26VVMdAm3kGvdmKU4nFMWCVP5Ngwv",
  "key12": "uCLNUcjTYrFvdLCmAzBEfo3Zn6xjV4N9eaiYvA4uDf6Xm52QPUGVh4uJFx4w1vjfTJFYChAwcRhgSwwhfzdAS55",
  "key13": "K3EE1nsChb2jjEfXCKvnjC2WfkfUqjph9zafFwTZEm9Y8Ts8mufJHEwUUwvwxH9RGRLMxCfUquLfZBsa5FJ5kbQ",
  "key14": "5cauuoWR4NizssXqHZHvhoqHr5ZWQooHssJ6KexuktutR7GK4YpbDr3qUz4dwm7dYN1chQcTYi2dsba8JfD1p2QW",
  "key15": "2NKqsNVqKHhXzR3zN57zT94YTKkDaCvsRDMJQMnHxcAgXf2eLWw6s6wC34aojp1YGgHNpLTnLqg2toLZcSHS4WYV",
  "key16": "5JF661BB87D3cLrsX5M7zHx4Xt6LPSj5LAzGnJ3j2UZDMz7EYM7SanqcBfaCAKYnKsNJuNx5yQmB66MHWvrTwiJy",
  "key17": "4WpfYs1463CUPNR4Adb3JXU4q7G3RZ7kXVGjgYsGGcvJnw3FXJH3p8J5atvgWfqgWh4PJnqboFrxp8KpLCQmUyFL",
  "key18": "3gWoLadXPq156dZEqE3tGGT8xf7MesY9XKzmBbJ8iEBE2nEocsXspHqtXLs4WnkmBrjBbeHpctTYG5Wck6snmQbt",
  "key19": "2L61ixVEk3ZTuUFiNmfMBVcNrz24CVaG9iKMY6HM6VMa5rrNhpc8vjXdEjoH3UxomgQjLkeSAW52ftxUKTNX22aL",
  "key20": "5fZuo1VaRpAWoAEEcmvCCk538iPWbEej23Ke1DkVbRR5JgRs2qWwmyAg2qVdwBqKBZi7w2FXhcsAwQjgn3aqTNio",
  "key21": "3hKoW5EKZXcLk7BndXS6dg2qwSF2EbcEDdKuzGkprxZpBh2xZ7zNv58q2CifSKiCvGZG8kT2SFpHttixwqs4pdUU",
  "key22": "3zmv2Uwt3ZBLZFzzY66jgbHPRbRwPwjmrYCC87H7TPkHsa3haeWz2Gutqn9KwjkDgqNc6ZS5MXVLptvhstM2DkCY",
  "key23": "2NiwgkLgSvB6ReYcjQ3gMVbrcHjDcpTiPVtp4U7KtncpkM9KRncx9mexW9YQ8ULtpB3npfihqf2UWca7L1hb5eWr",
  "key24": "3mDUPCxhNUDzUjirVukm55Mzi5EZom9p6eAfvWAVhAfFgHpt5oj24Fh7idJSnJLJCmX7ufTd3S6jCraMGzvRE54o",
  "key25": "2JmWgTcB5h5tKt3uKojz7oh5qzm88Fzu3GPxHuSY8JG35td88tfRzSZ5opYSfuqcm2UPXwNgJvbBKpwqFon7Gha5",
  "key26": "3FHBvdFUvQcejMEAWcvzQjFj1oYUf2ZyMsfKnSgnNeVtR27aVtceutS8QP4tj15Ykjxu1JGwLaTCrdFSHvhZ7arx",
  "key27": "4SNf7AgUtxertiLKZyocFVKJq99FkJMsyP5RKZx9xbZ8D1PFyMFp73i8b5VPREQfGg3BDNcRtPvPjyNWarDQEmBG",
  "key28": "2Rp5Pzp4Pn3PSj32wnr9ZAdJTNTZB4KkjTDmdQ3KwNJUp8RxfMpMtz5JgFhAz58az1TcddB1EQfCX5EaqeCiSHZq",
  "key29": "XCPhzVLM3xpwod1JQozFNgJruwqFQyraNiVKc5uD2DaE6bQtJUqJdCamSShQWWSTgn65o2JWvi4ib9wG9gtJCB5",
  "key30": "2MtY9xbczbNZajZEuSyRStZtz6qcZDgqSn8ZX7r2y98TXz5JAZTDJeDwrNr1RKhJCGJghk8KKJPVoxUJnm1nPvAK",
  "key31": "48tRxnxAuMtxPvWq4uc4Eiuo6e1hyYMH8mpwxrSZwSLaorzqLazKaMqMvSzfF6bgWVFj8pFAUs1RBfHszmNABMwC",
  "key32": "Bj9QUrNpes3UdXhaS3qKzpR4HXqNYZXpFdj2GHCsXnRbmbZ9xMWSA1GymSjjbD9jZYuieHCfVQ7hoDwcrs7X4Nc",
  "key33": "iVMkbLjVZnrvF8BJgbXj8YRF14jDRfv8f8ZJMw3s3nvBjBcR53o6zazCp69H57Dj2dsVmWqxxLm1mLXyzjj2YQG",
  "key34": "pe2uEZFMYVBt5uFRTH23sRA3zYYX41mCfnq34BajwzvFVF7CzydAPs9mTTWrY4Fm3Y2it5XYZnNoRPsUx3DZ9uB",
  "key35": "BGE5jKLeCD3YTA7BmM13enBFu3iCDSdnhv6Gw4GJ5Q9tkLz2RJvDGr4sqpGT4RYf1sPMM9pFTBtHHQjAhNMjZjx",
  "key36": "3D9ancchhmd3TVAcwUFoVphYrFwqRaVjhom49GYDwD2sbmEBbSYS4z8VmsdekcEK7U6jBHRtSdTCwRYNWKgBSEYB",
  "key37": "aCgc4uiV4Qb8PBEuLMVZNXY4rMW41WvECUwGMsbTKMvBXfLR7ufrJN5TTpWVXWgZ9eAhKvW4SsLnQaYd4WyHR6p",
  "key38": "24uKNXNjfYMho1rjzGc3KKA4rSfAtDcMnL3bpDsgYikifnQfhCe4H5a4MbqY8QzLc3JBmcbqc1z7vdFyv8st1EPp",
  "key39": "iLvgrx8pctbua3xtD3sKn5hDHSTvMaa2nA48A8kAfDiSLtjuoVQRtNx9sNgZRk6Eg341ai5Yrhb9LQbVCBhRWK2",
  "key40": "3k1e2nKV9eff6b62VGXJfibAogrtZhpUeHm6k4toh5pxqmdP7SerHFJNXwyp6PZxkYGug2VoRDepiafkxXZikh9Z"
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
