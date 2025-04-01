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
    "2bEGHFAZZayGToiSwgoJT7LacZpVGN95mLYh1tPRpoiwUHqwTGJh9uUdQdYANYkHSTTEUiiJfVkGRsFyrpUgoduD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VNjtEK5LPqeT4SnUyt2m9SK9PSMMeGzx8UzLZDbZW7DNbodTJNGn2ERiciSXrWZvQPAV89uAGJ9AQRL38RRR4wP",
  "key1": "4K5cCmXVtW2PKVqZdGncBoRyUyfzwwJCPVtAjZxcJcKsZpbsXqtKhaDhzaqsRjgy29CAQYuNJcd2rbVaYJrBPjVi",
  "key2": "4u8e7KaceUhTsv1pAqUN5NTFoAd8bXrptev3AjcGVJFupTxo8Cre6ZMkQreDjRxB2oLaeyGufhzFcqRH6BxmU6Lo",
  "key3": "3rs6SSL4KxPrfdPRN7k1nLcqo7h2cSCAYGQYXAyUCtKLvQCMJe8wydCWiwsG32QANM8QdkmcyLPtbKRTZvRUCnt8",
  "key4": "4oyj8XuvJeZsB9gY4mtkC14wkDTXGrBksJu4mujj3rnjCuwM5nqBWqNrjaYveXjruRF5XmtKCE7PBUpSSqxwBeT8",
  "key5": "5nx8VL2MGrA14VfFCzDB2kjzmWQ1prQyybTtgwKFTq82hm3wWBHw3wa3jTf5mxrDXKFhiJ7SNZQxPqVmsJ9Zqn9A",
  "key6": "c38qkTj7obYhCwcPehmDifJcrpQPL9SUjoW6eCm82n11YdbofwaF1aoKpgdAdUXuT1wMEGPpTA23CLERPY5JgW6",
  "key7": "4ZqakJnW4AuSHJKPAdDTnuior8nJZCYJs2F76dQxNAg6LpjhFRuvTUHgd8LX8CFnFhxghNystbAGKWPzy5Kg4fsb",
  "key8": "4sHdj95EKgPYyRPFyKjurieD5xSQAc3XZeRGE4wWmqgXeNW4NJvQT9BjXGh3ngp39JG4T1teYUDbx6UG8E59nSSP",
  "key9": "2KqHtP6HrmYhhHZaFt1f4ehddVDfvfx3gYKGYFdREdaBjzHBptcrBtq9B67AKL8VtdNuehnnUa9dk18UUgWg5ihi",
  "key10": "36TGugLx48QZMUJbUnS26iLs2mFW4zwXpg5NM4dEuXPoEzFDKTkuerBjxjBfMyQp34sLzsBYUKxozCyBzpHbkBCv",
  "key11": "2MgzJfSu8F4cF5S5vJbYL2pFEmvD97GcyAHjH8hiK7Rz5MXmXUMEV1SrRpvWCFgMRoKQpg1n8JAtCAKqq8WzhMc4",
  "key12": "31DH24vkCkteYQkakyGRroxsU8bsbJgPsZ5kgpnUNjsHQE9BtcEQ48YmGQoYk3o1EJwjRaeFXE1q9eVHT5kZYjMi",
  "key13": "4LFTMv2Kv1C1Hgb2odVsVerYB3pA6DQ8aW6jNYhFA59gpnbpBPgawTRKY1rCWythqXsAhucbLvNiDC7ukQBfKz7W",
  "key14": "ug146fBsgYUffjcHUXaeKnt9n7FaUSLMGi67S37PuTXWUUCoCQUH8vD5zaDak56hiPvw2GAMtpxPLRWBT7VLNtj",
  "key15": "2MZ57t9pAELn96hdxwmDskPmpwSqLmqCaPRoV6Bh3WQd8CMo4oJrfPbwju4Kko4cAa19xqgHGs2egqX9xavabz1E",
  "key16": "2v31vw9CdWxqZ9D6rDuYWQtcsfkxqvBuxBEP9fackeqi3F2jaJ4Ah3Fp6c55ydJC34Cqrk1sKQvS5mCbicrX2fXm",
  "key17": "JArUvziAM8T62cG2TXrGrp1mh4kgyEAazQFwTZDTpETi54Mv35Y7v8XdHNsREpAdMsazoCQ1VgXXCoFq5ShbuJk",
  "key18": "5GeGYp7tUxBfgYxffAfyTWc7VnPwaFC9YXacQ4tZVnhHKjwCGVwYFPeHFfWZsQa2LtR6oGH3KDuJu2hVR95NYiV7",
  "key19": "SasoYCj1Jf2czmZGzRVRLzPzobbvMQ8yTcJU8FSh3BMQjXDc8pWwHm3E5wVXKdsbvYDagK6cBNfDUPruLFgAhsW",
  "key20": "3M2qVNNmXPQgWRdTbTNCxBnGmdXAct4k2MnpVzdu5sHxwx6DRtEsezhFWoWe6cXKuUsTFWEfQs6vJ4k2gdAri389",
  "key21": "2SFndzmawPBoW3eSJnCYzGQbYKNSVwiEfqiFbYrpTN4MsXUnz2YZvxDwwc8dBSDR5ypWbCsc3RGH1bxyNETEs9m7",
  "key22": "4ddADV9UwMT14gEw2E5WZKvWU8mSnQPpwMYbhnieY7LcdMV4mPpRoqV4uxYMwskN8LHFtmmVqMjBsvBFJR7oP4y4",
  "key23": "3XoN5SV33XxQEqLPjSaYD1ydkq11ye3GL5P1ZjfHCU2PbZFCwVu5VntrvUU38ocsSiXumD23NL7ETyk4X5Y3JRaB",
  "key24": "585azXzV5rBoYfUxMdVwRBfmdHFUjZC7Vr6Lz2YgQedDaHYtnzpCFTTNxNedtncWpC5urQ1tdKCJ4MoxT78iF7f7",
  "key25": "29YA1ZMZm8G32Y14XwC7QsPfKqZe8ywm6xjXgURarXv4npfJbvJQ2LTJWnbw8xbEDYaxf7RPBUEdquerqvtbFBha",
  "key26": "5zNbnrx1yrRPehn9xdv7R7KELsnRcb4FF4xD2dGTbmZjBqLPx2kUzD2UbtXct2qisKy9qTjpacgD82djkasKfV6X",
  "key27": "3MPQMpNoSPoa7gu43Ysau2YgoSpXhUws65toL3WGDgBpZ5LaTUwPQDkhJcJiNTLvK6EpF3WPJFLnuLMtvxCoBznQ",
  "key28": "Mdy25XtvMruuWfpKUbVQq6YnV6jhRrWXuLysaG8U3vpDyjYfwgLh4tYCvX9nyLP8WecTErHqjKBNVeKe5rgqBfW",
  "key29": "MhNXs8sQg1Cm9Jk66U2kYJeuuKagQx5hsAvGRzoty8H7VKseS1f4G9P5WR1FDNiahcs2qQisME9MJJCE44d6D43",
  "key30": "5TMcbboxkHQNijRjRnRaUMW52MAjKDM2342VrkiNV4J3SuB5i72QeNiuj6VxwDNavzZbHUpRK3vP3M5ir9xBALgn",
  "key31": "5q7ZeSwgexLSHXc7YZ4jVwQ6tG1hnSdQcKmAfVZGMfXLsGdmLBofAJ3xiA3jYLxJogAaN6JtvTvv9fs1vY28wfE",
  "key32": "4PExygYJCXBEPxUaa8YavkcdKeJkXLg6WmX9uzXVFAdtGoPCoqgLQe5pEV32Lm9hmws9ErACFFEQ6b3L93TrHwKT",
  "key33": "4A6Ybv3rMy3HtE44jsq5hHMhuVnR6WwcjB7SHR3vNMuiCrQgChtKSv2WhJe6SYQZFHdFqTnxDBsXqbZRjoEpJjpH",
  "key34": "5JwRBEK2eD2YjTLfGXLD2NeXCZqAm7FNxnQxVDCe7c44bELGj7jjnHjpjhbrkwDE8gXMMr4s2vW9jFwgdCCHfCoN"
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
