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
    "3iXc6jPT27MpEeJc5oCPEHXHYptXxRAbzYnryBQM1n7jv8vfynF4AjiJfomRxi1oEJNLZGPZTZqbNx1VKJKMhgZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zKRZ9Fcf4bAsRa4qJR3XHm46fr55gG35iRCakqrFeRfZVTQSpoVyXPuWGYxsL6r2GFFJAW1qCTyK9Up4XNMYDWM",
  "key1": "2ZhHVy97Rjmhe5DxSSp59tw5jfhiD7pT1LnbDmzVbJtQPG1GpBpNREPGA5CJJgfhrPfWibigaXuQ5jetKPyDtus",
  "key2": "5GNcd4id68RHqKiBqNV4Xz8PqZuYSLGUrKyVViVU54A6VYxoDapL1muKoFQqK41J8BPAGaiiRrN5mT8cEsKNniLX",
  "key3": "2GbePuJs4reZukvxRrqrw4eWLgaLEmXkyUZ5oxw8sFmNCcmbEouwzc5y3ZQzXQeD2j5RXvus8pC9aHrEN6FrkzV6",
  "key4": "3RQvi6j5G6tCtDtfUCmKVYGnsaRBaFdZVxr5UNJvvjCqvMCiqXdjLqDsEKaZcTR9L11X43a7qBxAHqxqTuSZ6cuz",
  "key5": "2dr3e97MyhMB1BtXwvfyYX2VNcinHbjZjaTnWXh4BxRLd5xDYiwSLEg9k2DerAeJ53o4e3uLae9i5U8v8t7CpyXv",
  "key6": "5uVuQ81qJnCpCt1z7jsaebBg4jxGYk97bAQvmdvWxsEH9zYGPMCi1DRGP39XPeHBH4ryV9moJkyiGCJ426P9SrNR",
  "key7": "ucBMMK9dZQXzG1euRThgJ3JqjicV73zmmXSBNWsf4iz9NBqrUdk72fFez5TcdsyUawTjvYoGUVs5Qm1DJfJD8Yo",
  "key8": "25xuopx1JWpQiNj45wgA6SzLAHxvwDtZSvVVM7xq3QjKC4UGJjHDwLhWfGn5iierdCUmcHKEeYLPfF57CD3T2gKU",
  "key9": "3A8KcJ1VnNhdXKF4fuDchTH8fCa9fXjYcfHZhwXAuwbEBHW77YHWpNh8YepGVG3sronin5zDCzhgapnanf8Lquwx",
  "key10": "pqbesJtaAJGwK5EUa42CJ2cjhPDndDajC5Nm4LvHZNzzbeixhdU5kSGTp8GYfRWgie1cp77HwNehp1VQ1XLtBSY",
  "key11": "46sMrvZaRGnLGDAev3bJ6Y7odeFmWMY1mpKXU55bJuxUUbcp7DvXDTNgTh6fFr8aHsm1nHbqjf2JJF3cTMW8TxuA",
  "key12": "2jJNKytYiq9GzAKFh1kBPtKzHVmk97qCgf7ZZp5dBGejiLWcRkYGLgbwTgRfKG8UeXUXqB1p5m8vDb38e6WsKH3P",
  "key13": "58V7HJhRfmTrbMWnzH4SYoJimQCvMNnZ58FiVa4JNLQYDnZpt7mC2o7uFCU8vJEh7XGE9a1sihyG6fyJAfN2jT6p",
  "key14": "srowESs9x1tkH127a8719WgMUF2177bAbhxT2BzPszBgLJppctDfmZVm4XsSUCZCyuC5BpZyfUVZWCcfXTrWVF5",
  "key15": "56riCKE7BecsKnUHMvUKD2eAHacgwM8HeV2J1EZ1c3bqJbF1i4mDjqNFC4HXr4kHyGE6Fm6QpwEoGmAhkf9fRsh",
  "key16": "3nXR2iEzpbYMfBbheN2BMcWGEWycYGPPyhrpuRXD1vHpJksX9wA1bLQZG2Hm7WpfxhCvfUWtEqhR1RQLa4ANZ2oW",
  "key17": "53hZb26RY1Sq3tDPUXaw2BoeeKaCbhjbZ5khg984KbUfJADYBbnnoNqKKdLsBa5SJNgFaCoqXf3AdWw2ojju5bf4",
  "key18": "4nHGyHosmkr2qDUfNpaydBciMyR5gqAF48NgYvw7KQMZhxMaoapeho4nPDxqtB8KUSTJgnN135Ag7K8S7yASkUhZ",
  "key19": "3aUJA3Uc3McCPx5BhEnLY9bk2dPkQbiCNGv5byVWjiabbbbj5rx2waRTZgriR5ZNb8H1EZaTVs9N46BmCfz8gCUU",
  "key20": "4Vueo71qPxBoUknSqMEuykA9cTYJokGqQE21maveteYDqrSHg7Lid5xd1BAw9oev69Z5nD8213aiV7pids4YrNM8",
  "key21": "PF4Khva1PgSenLNcpeA88uZpS2FkxdLVYeHZ8HjqS8h5Z4TWRsCXzJ5ivAMc3r7Zu3F9hmo6SefYf582Je4GfED",
  "key22": "q4pYtxxPd8b2evz46y2qQRnTpPuMRaNoGyi1nBxggUEPpVZQH4b8P6xe4uz68BJBgEBrLoMU4kiovjvAExdo5Jg",
  "key23": "2Fa5Cx1KAdmBzQDKBQwWa1MWhzDy4xb72B91gdcRbW9F6WH8GrcCnUJL98Lssc66YZcgSWtRRKPK9UhmB6Bjj2o",
  "key24": "5mTW6bzVJodxkbW9FStCP5nV7Zo3B7Yhso7RtBaWGsK2oS8iXvRFpmritZ9GWYuvZs26kC6YB51u4HPxiVjLrKjH",
  "key25": "4imNSSE162FomvgwdKfdPxmtfAQERMvFyJUwPsmafexCXGZCMM9qXbAGYMkKRGSc9iKBDcbxjFSyAoRB6iE7MVeh",
  "key26": "vx8BhqHiuUHnX1CUhygRCP37LBzNCnjHMytecEi4kbmv7k7WhtVYDhEJwopQBhaJXLL884Map9ZQtx6HKHWd7UB",
  "key27": "3c1We2m87pAKXE9Q2qa8q8zcm5UjyYk5BSNRbqz98cMA2RB8ypgqCXq7Pwb7oUZa9ibnk6KxcJzy4ZAMDWPVHzPw",
  "key28": "2gU2drEyggSjsSen58Ei5nEEZ1dZhTRF4WoTP8bBuUQhmrj5QFyuBPitrGnp7YYkTLR7hgQShDSjMvZBNUVHJBHt",
  "key29": "3pfo9pdj7DRHHko3ARaijjo1EbCY5n9tnRftBQmPNEc1AD17Ggi9A5v7NWouuhUwEKw6ZM5cRNsYE8chsAakUqDT",
  "key30": "5aR76UKCHunbDLhxaudqgEErKbRZS8mFSPnsePExMoUSojQrBCGjtco7McJTXAJA65ULYieQBG382hPZMaBkdBHj",
  "key31": "5LLLKq1eE4yN6xyaNytsj7KrCTcaqzFsXys8FrheEJTuEkPXnXvxuDhoiWsoNWVugfAQ1iNBHBpRnsT4yiijks5t",
  "key32": "9g1qCEJm9GHm96N2unDBNaJec9MAFUumpbyd1ryJgzYMreXQETHbqRiyNVTnHcy2gMhgxKqhwrRnWNEUyVmGu7c"
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
