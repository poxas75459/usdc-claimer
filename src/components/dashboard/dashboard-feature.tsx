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
    "4pCxWytaH8QvoZdUpcUoLzGfdEWxYwcU5osGAeNzSZZbaa17xrtbxcEaricnezsiBct4XQDn6jJXUng2CDYw8Z8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pPRVVqBh2DC4RQMxXHckwyGkSidv5Z4o34h8oe8TSSummu3hRQXMcSMeHfTyRTuwSVeXpmPkUr8cbrAYsUBPJBC",
  "key1": "1PVxoQQrufLrJbSChMj7CuJEqdZjGvTVx3GcsFyZHnviRY49son94kbha4R7ELu14SNi9FKqWxifLMcBqZqGren",
  "key2": "64ZmzMMKP6nkMdFriYTaBTyZDu69T22PPA5a1jmwV38GsvKnG2MaqGggJE4ToyD7djb8sWpjumnSgUVA8pwXNs5S",
  "key3": "4C9JavtUdEnS4gYF3Ks5yBKDwxh1DHcwzyxnCrKAAvW8NSspAHFK9FDUKWYKo5G6o67RgnXcPBZSJLn8v1zZU3fk",
  "key4": "4LPAZidYaJsmg9dLFazcAN1rE3Nhh3BUgth6ae6MhMPkUDETG8h6pXhNBroNXAb4htBRcHSicka71USA7inYu1ep",
  "key5": "gyzsqYeRN73r9wENQRomq9czadzwEj9KWUugvD1SYbRzJMrcs5xngSvpGttYaMXGQYBixPzfh3cdLTttrZpokzU",
  "key6": "BwtEnBjeMqqpLYPK5etAZwbwVgVymMP368PZVMngo16sFzuu3zSKXigxxraXMTHbwwsuZRi4G7dLjyjQwVBJ9Y9",
  "key7": "3kNVrq6qo4fZ9npcmoqxVRFTnWY28EGGtLSvvVKugZt6SnHAZ3bs4gdZQ4JKrhapLQ9DoVs7X2ypg4TPU9FbBDNE",
  "key8": "4WankdNerQx4XdddsBshX1BA2AqK7SoqXyE22kQ5ANcWVW62ZmbGZP33sB3TjignyKPcZ3tpuTFJQFpKPU9Q55eg",
  "key9": "HATafF1fEytKPucQg4AqwGy9V847A5WfrmXvmzgZEqU7iSBPatVa6WkFpHQmTrrCtP4FGYCW3Epze4iw2w7dLjK",
  "key10": "46hXFq1vmZzbgAdPvnzsaFeEPZddNKVHMFWMQbUWFXCK2vwKKKeC44W9aVnxgWNhKJvbb5tKA6j3q1VhKs6KknCk",
  "key11": "4WwjgEHNBmzLJzEsx4qmmpHqKS5ahq7XL75tU8oury1ty12jfvtrmZ6NE4nZH6yi1xPX1Sk3ZBsaZTLAEJEzofJr",
  "key12": "J261aDzRtdug3dCbdTLhYuWVCusMBrsnwwK8uPYvpVAyA8KLiamb2VCn5hcmNp3tmSSZexmMw3peS3WrYzZ2ukA",
  "key13": "2QarYoX4ARKyheHwugi2KM5vVJQ42DtKGzzYGgbt5nsJYawoJYMk2zK4s9GKDEVXSJyckYUEDxCxQtMM6DZvbpdB",
  "key14": "2vGecovYgpTerCAQPcmDWPX6btWLbvyKx9EBuew3FUcfYvyLGqU291cViqsfWCTgoFRNsR1Z4cRL5fxQJt9dweTf",
  "key15": "5x1h6wVMTFnFnUTvxacTJ9gG1BBGCmmh2Wb4H62ohsKyTyPxSVNW1z3DYHdu2SSjKVLSPHVmdZ5mxrhFzev4XDVW",
  "key16": "63ADWkJgccKv2am53aAKzJfshzgZj8GyHnZ8yevquFnptmqd3V1xkfBDQaGtBtDNQcJq3JhSxSiFipRoqxVnBM7s",
  "key17": "QH8vZEn7512YpPwrkrDMepCuYRXieGwQVQLtyC25fDJjE8qZxs8puez2sUujVSywEA7avsYpLUjaMJbdvheg629",
  "key18": "2mKhLHEpZnWApma5bXh7jAQCSVTozYr5nBXa6ttUoCn6sMcgt9MQ2BU9TqXKmd8XWJJwggf5kBJMFY2C8pCGVsQA",
  "key19": "3vYZktPdgyTCBgmcKfdfhg99WewjjakoLyMKkQc39sjMVfS1Y9Sc21rZPpaczFSgFxjeGqQDATEzYJnhyfxL1Bvo",
  "key20": "RYe9ZZuuRA9fVZDZAkNGwsg4hYNTgrFgiUWmMjuSGff7fGNVva4NT8uqZC2vSmPkRWtcLf538q4Y9mYDrfAxhcc",
  "key21": "3a3T8qYGfJ7c5NHh8CuXzF1tLBuTYPewjWD82yUvU3uBAnLTaWRPngvfdTt3DYaAoZLpyhK562n4Yio2RVxzFVJn",
  "key22": "4K2rkhhczf5xhRFkW2MtNjDaoFPHLAxH6giwXXroJURhELaDdr4vbKyx6tcApBxjH8J4VGgaDWXRhqKqiGLDvqx2",
  "key23": "5zZ9pqANyvEZoizjoVPCjQFXyfra1kvKL8uKz4CXZ2iP3xk5JAjmt3x2yVeBY9SFWofuG6LiXRhLHeoEVEuwqmGX",
  "key24": "3y4Rk51QGKbASfJ84RSjxefmWseo2oKh4CUBkT2bLquHNUp7Tupz8Cdvt8ZNSLYkHjFutko3aovnWkberbnZzLqZ",
  "key25": "izY8fjFCD3oGqWTUCJ31qaZ8A1p8jZkP8ZYWUWWai7EsxQmut5iet36nVfYnEnyxxjUmwDkVPidNmeLSLzc8P6Q",
  "key26": "5iHvDdGyQgfxAkqs1LuV6Jusia8vG4F1YS5nFzFwnqj1ZTa2v8ivSpsSg1ot29tbEhxrSdXFtZDobskLfqYK6FHC",
  "key27": "4Z9tdt8A9d9QzkFQ3SZHgUbCyN4NdQ2wnunqr4t6n6W9uV3gUFpMHWJF2W4yMLv8Y3aGtH6RBon9bQ2pVo73LF9v",
  "key28": "4uLE6ZxJYpSbLXyCSg9wm3WuuB4iGntFCettSvF32iyMt34hCQVWR2TzjFxAi7ZcQdmZRyShrh1z6SfXHkvrggHJ",
  "key29": "2mM4j1LTVYfMXwhmTKxbCasunhGdpiYC3niCo1rnGugtg46WaWmiYgMv5pHfe2pto7CWFeZKv7zZrp7ktxVcLjuG",
  "key30": "Yp11uCJk5FaYA7JqiAozSxKSmP8MkYAqRWy8fHGrr7W9zwHbLv8835P4y1kkRy4SVSwNRgaQcxutEWD8pgaX3hM",
  "key31": "5nzYZoCwJqvh6oU1kLoHBP7QDFKrGGsWHNPEYNgT7QA16YwESk7G32C2PCDM9gPkMY5vnSnasrekoRbSwQXm93DJ",
  "key32": "3mZonSX8Qy3rnuvp5238TC1dnYJzRuec2hfKfgQXX46iaB8RirkkFcZxuBpJACxvXWHjbYbMqPp8iRZshMC5PqPJ",
  "key33": "3DKMce58gE9VkFAtiCtr2yiXjfA7tDKGX5noYNz4JGiTnvV18CAEmuyRgaWeG8TrkMV1xqhZzcZPJ5ZcJEkoWpGt"
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
