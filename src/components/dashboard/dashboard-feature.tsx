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
    "2JHNRcSg24t718o6QZ2DEDTmADuWNCCD2Ev7sM79nZsP5vkMJm8Vb6fomQYaazhih9QxzdXNcmQgZSEDjaoA26ai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r8ErLSbH8UZVLrRKv6dus9W9WwiLwa5hmbySkQFkX76dq1hMBf5ekaT9iYJAmAmWU17DNE6KdUkDAFQyNJVGg38",
  "key1": "3vcWxkLuvgRbSr8jv2knUK66jYDCtCjcAf9BBVYzXdKJn9kMhF2fZerQAuXbitDAPBQNrYuDeX6HuC94QJHjGQ6d",
  "key2": "5V6Dws3hBS5ffMoVa4qJacajkUuH2RKAzjqdh1yT4uYDmwZA5Fnr86zdhSQiPBhxLxarXegVJ6aVFJrnqRW2UeTM",
  "key3": "mXAejE8ybxye7krB4G8dsUbfgnXS1LHwFzWE4jsJHRvCKkNF1PMUGrC7jpaN55P5dVp5e8gNgKxCHKtM5juoAmR",
  "key4": "66V3QRcGcpfeHjZWFkN8wpeTDEUXFYxu2QyDzCVJUT3tTSw4t1t2JnTTgVKnGSD4Q3uu3uSN7KWtFXryjJwYsv8e",
  "key5": "2hmszj4bC3AaZKDYzUdeMDwnQJG2qCfG4ixiwUXgqJyyB2RCewmdvYB97eR9Qc3FUxVW8mQn9LyTj5qb79JxJ94s",
  "key6": "5hCWddiRKmqbK2CqwGBGaFZPQt9ntoN92v5aDd98Jr6L2vwMFsQu2z1g4iXwnMasdfDutCxRxYCQV9ekMhNGPUWD",
  "key7": "4gbWAYPzcDYCjbkrGhvWDW7EewFYZKyeKgmtFvYC9DrjRGfk9rVPBiy66CGeb7W44Pkj3nqcqzL9SQ5QzAxct2Rm",
  "key8": "23vmRrBNQzvpaUiVV3MZCWqcpeSpAHgr6qKJGkPkJx3fWHNRvnTRtLSJgLMzxMLmKhJzdFvu9QWAbTs6GZFerC4k",
  "key9": "5frsSnLimHCeBQfMavxMYyiYXwE1U6RCxP798hLBHn5iDwk3Qw6siiNQDT9eEAMRCDuhqX2foFHCtZeJqHcb2NoH",
  "key10": "Db3UiXtY6a1Jdhf3xW7iyXsB6b5ADKhVSi5QEhsE6AL5ibTv2W6pWA55pEjQrBXTZ22ADnvdqYFQtBJZDjvfuSQ",
  "key11": "5zVGDA7XvPBPoUKajTAkfXdAmJZX72xNB1Pxut7ZsTQjKAHHpHe9Gm9TrcSTKfgEiAbvMrdZ9216vzMt8ML55KeN",
  "key12": "476cbXwnYmkPaanb7Dup3qcEuQHQzKsrLbEuoyCcrHpjp5sGoFJGBtVnZ6yvqWH8BonA4uWHH46T5wB8tCAGSfrJ",
  "key13": "5CpJGkdnNytCbEWP9YS1GSVw7xvydY75FpuHjXmMEtB3VWcMzAaaJQVrmDY8TgrPYY5xFkBHwq2joLsNhhJ3PLSK",
  "key14": "3vn2TsCdekYspfjeGKtoAWAqMaWE5MBLSmcFgcv3cQhFuHDAEWE7cwRRWmzb9vMucKfJcNu27E6K2PayGtQ86fyf",
  "key15": "M4Y8ATYcDynWLy19XNPpB3ua5GA29EmRSsmyZCqwuWMrunffE9Dg1awE1smBz7VK2HA4D2v6MGVt4vt6ZpPeJMi",
  "key16": "4HsVMohCw7dY9BeekBA9bBFgHZhww9afvxsbP3piqohSNCE4Wd9wihM2fC11cCCinkTJmcFLJ6neyGAsz8hNBMn",
  "key17": "2sj2bPyyftkgZ1o6omhj2uGbuS3oNfctKxuCg14eRSYQK4YjKa4uhVQtegdpXV4KkDZLRU2eZZUmuYno1rVMvJmp",
  "key18": "45huLDhPnjggM23TNrGBytqtn7EFhTyYEp925gf93cWzZKfpyUXKvQJmNdxZMCzKu4sEsY8misgxpcj1gPQTHRtg",
  "key19": "yb9u3pBGt6BwsyxLc9NWgBznKCAadc1kanVJZJC5VpHn6K6goJ3QxBMRXpF8xXJmxxZd2Ndfv1Q4z4hUFYdt6PS",
  "key20": "47JQJ5nisbE3G4PWpECzzVJRjoTeabjQ75nH4f2E84iXrdjoU9bwdQhYAyGRZDsuvrrmJHqsyAbZmoPtMxDqzWUq",
  "key21": "nq7U8QxjQP8vfYTFy3U96bFzE7jdG9zYdwkVfxEgQuVgSGGcGwBwme7b1bT4is6wRun4vxkew5JqxoQD2ziwXE5",
  "key22": "56kFRjBpC58SBR9iacmDZQ98nzdT6j2Tc4CfQPSE5swTjkDm4PBZMPMJAtxvtrwXuYwkFqPRWz9Yhy3b9V1h28xf",
  "key23": "NaFRa3LR1CKGkxZcR7ZciKnogFKB5qHVqVR38VB33eTn713maeHFN6RseQTfRVLgBnhTA8Acv9H8cGjHe5mGtQG",
  "key24": "5dmQjQNRyTAeDqnunRSE6EUNS4CdawcK3q71NfnBZDMb2eZa9JtMLWentyfAR3BiPzg4ZxknqpKzZmuGAYJFPhai",
  "key25": "51tJq2dMBDme9R4FUZ1btN5QgLNx5bknH9ei2xVLdXJ3NKgzmkXZdPb3YyB4G8KNJ1qjffMMixxW1CxwSQ8bhzf1",
  "key26": "NLfRRHhs9QwJnzqFrHFyWPd6kcfPN1EZX2oypLRihBqAu9S8pog1z2Ky4ggHSR7oBGvUFBa7XjTMPHbobTvHUzH",
  "key27": "63P9S4iR5NXux4rufx5BhmsSWi5WnWqJGgcEvpXuREZpLR5FrZDxZ5nyU5R9vCeTr3FmSGkETTLVu7t2X3kDGVAZ",
  "key28": "2rzzxJiTXH3Ss7d84WJGpXa4uRw2sBPwwAn4y7XdGvoYr5NzqKg8uSe3BFosxbGfQ9TRUNsY411DAG2LC6HFpWfq",
  "key29": "4ojgMLDstKtwZymFAbTmMuZ7YevEz78GcX2YvfinJA9mry4CfTXbKTarsCW9GM5PuyFb9riVA7sdaTPgW3zRaFGD",
  "key30": "4FRzHv6cPnpSTT8bRY1DSU2iNT2pG1kRWnvARtU43bLJT3tPuvREvdZn56DRoun7rwP21FXKkVKZS65yHNiogB83",
  "key31": "2p486s5JqwpgSkmDghQmZ5mVW8eifvE9WhBUkc7ALs9dntC8Lz2k5rxGBzgKYaDKToJoUJ7U9TaFU8r9Uhc22q4G",
  "key32": "5Bf3tZZQFh1RNHoSEGBmpDQSA6nXNWM3B8sQzfouuqgS39L1Lyf23reRT2cEvPVLMtA9YV21MPf2Fy8P1krG6dJ5",
  "key33": "4boQCKbFKPTpb6vEWnsBioBfoJcdevzQYjS15D5KZNxwvEVF1eVX4sMZys4ntoHPFZUKmcTeeLjagzZGFDbwt7bo",
  "key34": "5dxhFpJDrEjhkdCQuZjxnsA7WEy4G4XYi4AKdG6UyusD83VcM8VY5m4qtJNzbKFocTiGKbyjNidkTHDert1x9YWy",
  "key35": "2aAKeMz4VmimhyKzY2qNmp35TiJQi98GUaBXeTghFCfagxiTWK6ZbKAmSy8D3djgDEWG7cpiANj64XVxo4PMxg8k",
  "key36": "2vrhf9qP55SgESA64LujcAGbQfExxAd9XZwoRvnb1HeDRnkwZAWCa3p78T7GkVxqS3uuB2iFMongvXiKdndfrGn6",
  "key37": "3dwZRmq1qS3Bdm5wKUYS8yJAxe49cPd9FFgAPwziNG9fskZwPSZMLAqZDjd3hSbnZr6AaEWyK3x2oiUwzJG8oSoQ",
  "key38": "t9P1cafTm7dczpViVTQRhRuwCJtaUZp9o7fbJzKjWvPchj9cqgSyP8m1hxYtscm5iXGLo6822BJ5XhrdtimFAmR",
  "key39": "4L2KJyWwqd9fwphqZjuvaRPyWuFJUiYT91h2CpTWXEG5obNYtfiNvLKjfnJkDdwunqiuKexvdvy9bHbguUawCHLy",
  "key40": "5uzwhSXHwaAYMZLfcSUxLsEHXPiLZdExTvK3oTkaB1L6pqVJvCEAEwXVh1NsGrzx39GBSjH3XVc7N1F8WGgBrNET",
  "key41": "5bUZ5Px9xERTpusCDeE4nTnuv9QwWvw6K5k6LQtQYVSiG7H71Bh9HwLco6g98G43jPDrSdQJqfEU7LVZNfgbJkUf",
  "key42": "3UuS8aJRiwDtqUdEHQu5Ct2eqB9aBUBDMw8fcoadbr5RrXiEQ5Ls4ZQP4owc8g5tHbnZT31idDeykp1kKq1qnuLR",
  "key43": "3rV1V6DJY4WqeJEWiQ958NRKFwMcZy8bryAFvfra7fH8TXA8JQTmLryo39LhfEDCGKHsiQtW19qH4mqAsVjTKfSh",
  "key44": "Zp8raPRmP8yiREbk6y5rEvwG3SkwDT4SWxABxVDmCpAfKTPrumnQWMfgaMdpaGZgUYY6my5VADXD8pFMgc49tca",
  "key45": "5FVSmkmh1kqASLJHSRsNAfvdmKWniD2z5VbbTPqGPv6tV4UTK8saMMcvm95TzVwZF7BVV97Yb5pgUQs84AbjTcvD",
  "key46": "24LHECUUZjvWgR8xZgAaxXmeCHArGacXEkfyHJTxECaDngQjk5Q1mCqSNMh9crsweW5dFRpYgW2RUivaYb3szvza"
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
