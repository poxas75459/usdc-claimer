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
    "3RpjdDxjErszHpAbYkHMh388BhP4juMbNTQ47Lbm3wvWVgi7rXJNNXGZkrEucPQ214jpPEKgo2uXc7AEdfpX8XSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eQui7HZRVqjWzCqwrBnXfaZoG2MJq3B5aTeEedFrBUXJ7EFXN8Mrzf3gAyXnebwAyAAiqarpAyLFdJLaKJ9z6jT",
  "key1": "4LLCnoR7oZfBCt5SQStXPDMSbsQXMCycd7TM3uyo4F6dqnfaSN3gfBsir2joML3waDvgHYdLhSEmUb4sEYJVtU41",
  "key2": "4S94DyZSxRQiDJc8xrKv1R7DXBZtYm7jodZw8ugBZDSyNxJsTqCmt9wqjRaBkVEbY4C9fZTK2JXRNgbF2Ki4GWZn",
  "key3": "2Qrfv786hAjYokC2VtVoEmq1hBTsXLw7Ag9MrtyF2wAFbi6myw6uvssodYheyKtJCxwgVdG9Fz4UYr6BZzXGu734",
  "key4": "4pv3NcPGJPU2ZhDCaUCFdg212Kmr5BJctPZpPGJ5ra3p93aDZSXckggSY64GM2jEV1baMtqmWRKFqNWcNTmXdnoS",
  "key5": "37x8WrCN6rZCQqD9Gib9GHbC5sZtFVsWFStaRX5m24vrBRpDqyAiWUz2bkAJMHB4foNWj1chnjyZnkrSKSHWVg7B",
  "key6": "n6WDptf6fYAA8Z3yguXfUvgRHNqMnCjcBrYrgMvkqfuo6ZDf7Lbt1MCKUyHSqrJyX7VGfTmZ2kWojsVHwDpLCp7",
  "key7": "4KLkT55nN8va9oZMvurcz1DeyvoSC5CLQrFZtvAdtTD5vsqWMJkT88HMgni8319CkUQok8ccP4k8C5DTTsHjHvj7",
  "key8": "SdupWtyaqaHmevrhrLpUbjjwHfAiXyNpqT9cbyLXBoLUJdt7KR3RN6tRA1QMbumorRfnuaUUifd8QZM2ne8iLXp",
  "key9": "3wYcji1UKjJLG8ehBJj7SzBcxGE81e75qhrgd4yVUfogjakMoTZhuqsHQCaQkkeCBynwPVdhzP54vALqPKmi7m5y",
  "key10": "67jMbJYSkSN7rCMN2b477zUQ8nnViGSzbPd5UzJEz8paFUyKMG761har13eaLsVxQtc56hpfM28xD41jGafzpwAE",
  "key11": "5NWBBThHPNFpSnKeSz92QSpGNpXifxqpRYnyG1BDyHUFnVC2Sm5JYVzeP7iQNu4rqzt4Lx3YPB4V17fiZfmWhEsA",
  "key12": "5faswuULyARTne7AEUdVQcuqGSrhjk22ZosSSYuWiawc58q1T7RE2MoBdTnUMsqAwNT7aoVaZjDWZrihWmhUB7Vs",
  "key13": "3ZV8t6gWS5BzUDgvLxUevUZRPMKp27r3R8mokekSFyyETQ3iCqMUbGRhFP6mL1suxQJHEHfCpYYmZMqoBzGQETLh",
  "key14": "5gZAgH19RTG6VRND4wwMZdwim5Q6GNvy1Ax5CUpjLacHQZ2Jw5iWmxFBU3jtKvVHzJ9Zr959m6rAfMgi34isf8wy",
  "key15": "gRt3ZVF8zvbms38x8qk94aKtZcHFj3hmTBt3LnVanvVxcVmdgG7WhoAYnUEuFzFwtASDCH5Riv8niPJjyCUkyLa",
  "key16": "xMx1AEKQGFpf2q4qCbLCDHCAZBpoS1gyxKTfsJAaU69j1DyMu8c3djRE4pccpNjpAoD157DBdDcXfGeCQkoUW5i",
  "key17": "2TjNW74F1ibeUGUUUXMhwTgHdTJDmEVtA4pMMvFJgkZUQ4eujALzKrNRLXBpPR8MMzUDmq17A4wz4mXLUqZBKWHw",
  "key18": "2hCi5FqCiNFUyFXFYgkP1ZbVTY41UrnJ325tZHb1f3kNJJqVMwkyS5QqPh2dMwGi2UN4HH1RiuT6LMTZdm8eehMm",
  "key19": "3bBtTiHEP84Pp5TyqEs5vUS4NkDyCXXhLCAJB4Ly6ufAUZkkCyNbmgQVZM4u83mwjUJNHfpDRE8d7d22oSGo35er",
  "key20": "4kUDKoPfsUiDn2SiW6vQ8SPD4sro7ehtFeMKsCCvV8PAuRZsmqRaPDEdm43QYdZSfWQZ6Lt8ApxNZ8rSTGVrf3ud",
  "key21": "3hLWDqfkfuGqzyFWMLYyZXHeRBjbBKRaQaKW2jUsBhhMKFDFoKuT2rCeoZPPYNHsfA7XC7GqMCJ5ShrXhcceVB5o",
  "key22": "52R9YSuUYMrVcBxqLesPmNt6v59DnrDpkxhk9Ag7Fi6YYYBiF1QGxXqvYH9GLT7vCZ8Vjf77XTUBPcQcsqA8VtcC",
  "key23": "32bC1izrpJWoiwNpGx738GhR4aMBAgSZzkkE4LaaftP4zdA7wmtnqLwtsDvGhNVsTVe7dKKNT1k5f1cZzFUvU3by",
  "key24": "61iH9S6nhE97vWio9NuiK1kYsqgEtsU2GbHTrgB8t4T5effjhbFCBBFG3p2q1Z3YBuYw53FiqdUA6yCQC2ysqpbp",
  "key25": "5aBtMkjtBT6dfSY53YM5V6QsqX3sCqkKrkxVRBn7ommU7xgufJVPyndL25qfRjkuEHxE7vcHaaDLJ89fxwit3njs",
  "key26": "3G5ZTAGpR5aZ8yLcY5VBUft5f5MAq9MUW6a2GthVXNDmq8DdJk9jFSGKhFjBM9HJ6m6xdp6nsTuocaoqjnTqqYN1",
  "key27": "4DVPArRv8cWseQrMgK1ErbxxezGNDLrBdicvSeYYXUw4o7ShZDeW8VWj2urmhtGCeFVWtJ9FZr2ptjTaMdsyW7jv",
  "key28": "3qLgsPLdGJkvB8XbnzZ2HNzNjh3puyKAw8Yng548gYq2a9QQ3FioNYG1jMZMQWKAT5PhsRVSeBD31LCE162okU6U",
  "key29": "66zBKTvYr5FEZwqfFHHEXkgUk379NHNA7HCgfH1Udt9suG2rMUv81SFDTQ5LFd2gwYQFMcxVU55KZyWaU2FhBHBs",
  "key30": "5YF97AkfbvkvAyutDHo85hSLJC7CJroVRght6WcRf5x2NV4YU9xN3g7Au8cto4abuXkSQgv6wmnt6bAF3iTCCbzw",
  "key31": "537CKiK55MZtfQBZEk8TktPijhv9iTRjdoYurFcWC7A4cLLM14JFcimU3ZpU2C8CuN79Mk4po1afyKmMMr6Hkraw",
  "key32": "5hYffPpRK9GfM1zBiG8vZm6aTpTSzHLwFStmTvJVRuDk2RFm2hFcLRU7CNqXaDSakFnUL2op1hrR8MFmiJQGV2EY",
  "key33": "PyFkXAc9YeEerjH1KKYjhAAESAqM8G5D7jqpzb4hXAHJk7iegQ18fQhM5szY9cqL7EjLisz1h5mF9jzgB5sDiFd"
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
