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
    "4FjUWAisX6qmUp4ZF3zvS7GZHdbWvGAxC31HBjjzrs8rt2uZgN6s8zFxrGTpqgNCRT9mF1MwoXQuP7LM82Qorjtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61gHtfCdNnYSh67GDSokQXfu3RKdadxig7PhaxPAEqYwQnJzKeckUWFBt9XemVFtzVQRcY2b2SdNUiqPWctyW2nj",
  "key1": "2gn1fh3u2nGBRGh1bAYWMoYboW5fVH69qDT2zB65gkbSLxrRVX3V75sqMrB1jm4naHvje7pdQDpjJjFfVD2ngJMc",
  "key2": "4KPvxsK1txLtnEXZuXFXJy6d4Jdp8QtkzYZy6jgELCQxei7XJEDP8fkoNjECem3kmEFdM5JnKZcfd4sM8ktF1AuJ",
  "key3": "5UK5mGh4cLPGWchW4ddNAxNJcMM9hbjDLxbtUjePY1tPZzUyjeXvzfHwAdtPk9g9hVBiUxQcTTcHGqZbZQbrbGSy",
  "key4": "3Q14wSmtqNPtvASCCsLhtAMG5pJYYfpT6MyHtHWKVE3qEqAqRLbj4fpcweQKZVF7QKQLCp5rS2mzgGq7NqvMvVb1",
  "key5": "3oxKzSz2BKx66AzayNeQikYfnajnLRt6LxtKW9MgLSJT3F5dXGGCBRaWiqafkqwLXyf7SeHxeATDJYDNrCzTrFYy",
  "key6": "2eYLPMf7WgMBw6toWNebj2AZdUijAY9V1ymrofK9fKomb4eJsttXQsMRG6bTyidqY4WoywhovGHDmMgn514Bsa8u",
  "key7": "67TTJN6eeyviUDgMQXbNrLmGYN8KPiXArYTxWkqW2R4zhReeH9NcyzCBcbs3JQKvMTnmNnSjc7L3xj8qw7sDghic",
  "key8": "4Az4Fuo7GTsrBr3wqH88UACgp29jnBM185zkTWiWvhBD2uV4bqo1kwfbq8N3PnJkqNyGhq23v28XoHNAno7Sbd6e",
  "key9": "3HvfsuDvZG9qMYWXgZNmD1SyrS3uDYkKwJyQL24vqoJ1RTiRJb9ZFin8rRgabRHhbanrdwUFP9D1izfuzWLHRhQh",
  "key10": "2vMEjmTjg86NH1vwiu4eQT1tr7KnbQyZKgK9ohCNKSYaBrcSEUfjTgS9b67GjTxA85q3fNAZaCnKeYS8TiczTHiu",
  "key11": "sA7nvChpiRFnpS4a2t4NmCM4SmPei2oQCdjybwcFvCuGymF8jPsvLr31thMTD7GCcijBE1yWQXngHap8detGQqv",
  "key12": "4Wy2mm7kysAEJkfMdmfVsRrn5ToPvu61crUyngYZfZAK8VyWHGvpfwPMSasBp1VHAC6a8Eh1DbY6JS86QzEnVhLZ",
  "key13": "p4niSuFTeie94bnLyJWTKvbAKkaLoVtvMoyHJN9NsrJkQC43UtsuKYhf1EGNmxviJGHEBM5hB795Bw3v93BZDs9",
  "key14": "2nbBAHjTDMg6WVGWsxBWCrh3bBgx5cfwrCgKjQ9jqLHPdZZYbRvU7rwMhtrpf5H4coiv9jjFmrQyLUyPHLq5yqAx",
  "key15": "3qiyDtgkdT9D4cKaCzytokfNRWPeuLsAjQDqi6QhoeE2dUG7gi4A7ycFtkUXrebrjExZKBsM6qLbTKLTCbRzXqcf",
  "key16": "3bgSW17sPYNwQtjoHMQoBePrzQmbYYaGc4ZyZ6HL93fkMym12gzY8XmzndhxBUBHJs6SzgkZdmJx5Khr487XwNJi",
  "key17": "2mq5SD5BmprsJzyM6WhGXPaXjwWzsHrgiHTTx2aQ3dZ5TT24JC3eata5rXyvhovdxN8RhE8SVpTL4vFnzzH1vZD1",
  "key18": "2BiE8n5KqAvmmBKB9n6GZnEdoUhrNaXMQP6cVSC1nyjocUvC3iAD3Uzx2xSWUvbev3qTnQXAt9mphYsGdbsu4o5A",
  "key19": "2AXi6FqeRggRqb4CnpdP9ECzEuyn5H5urSEnFWVmdGJMma95sgNBnhTqCxpCa4nKqMEmK9m8nkQWiJV4TmYsVAa5",
  "key20": "3eCCty6ZKK8gLJp4xEJL7j1W9A6hnStbBDxDKfAxemRRUTqez8L1c3jsxrxKxVa5decNkqQ1MmyD4ErRnxBjpYMe",
  "key21": "5cwWs2xZYtzjbiuzQc9s8t3sWMkhaPTnbb11KHYDCi2TdiSuJQBR2VEWqCeCVoZJrFcRnz6ApXjRxMj1VUDWcxxc",
  "key22": "47yqjnWCMbwgkf1MQT7StMevYsQgZQdYHPwxJ6NjYhUnQkY7xMwj3e97ox4smhcQrWFg9L23hikUDPjbkEkuSfjf",
  "key23": "2Tmf9TBzFJVsS6rYB1n8DoVtb4GERwebgB6yRWD47UBgkfn2uXf5dVhJE5eQBDZ7K3ioumk7qXEP1pq4n4ifcLQ6",
  "key24": "2rLDZ9GJB1CHLy2A2bdaSScEiAqVRDDsiWyLQNFcyyjzn8t7aBuoN8JmR2VnRn4eq1bz14LoARaSksA258v5GqLC",
  "key25": "4pkwwwxENpCnH59XmSRSeh7Xd7iye4T5r8vZ6rYEk9zdTeR7UcNUn4URLhLfrWcQv5aD3x5bjDyKnHcCjf6ygzaS",
  "key26": "4BKUFRtorpfLLHVpbwnaiNUCZ3VhminK54xDVFCyPbppgc1PYSddM38mSKiEA2ZWcHDhsgdqRVz13wxU7Fgt87cT",
  "key27": "5bdCJdfVFJDdQ8TJDRD54L3PhyVUPUZW9nqFZATPPvR2wXo1Kma7VDgFWX3vnJ2KVanhRTjCF4gkyyiSbtARy5hC",
  "key28": "3of1dAxLeVviorZWsEKqzEkidnnhtVqwraQMRkrZnxSEZSe7LyoVp2YUQbzb4ZH734X6jNvPwoVaqHeZgxSVfv9Q",
  "key29": "46sTGnc9d4AJN74872phKB4w7tEyj6cN2pac1S6msPP4ScNzjkN9CGTuma7JqGFLsp1Nj1tVHdRBo4bkMEbX6Ao4",
  "key30": "JFD4dxXzPNTHzJFQHdvmCbZg8o1PvWXQoC4RFkqDdSWLfpXgAFtu1TXx9tJMdFc6kGkFgvWJbt9kSUXRWs9A7qK",
  "key31": "yHDV9fT5J47FvUPz68YbfJwMTJTprXvtDFcN5yqzMuu1QgDiXtHfrS4q1ZqE3WzuTrrriRZ6kEGjzv2izR1Lq6p",
  "key32": "2eKe2miqyQ4PvNppz8LoybFfJ7zG5pYDQM8cuRDERn4iBRoDfK2A6xQsKsxZ1mXzVZiBFD224Bx7iRcTKkQMmBTi",
  "key33": "48xYSFHHK5Fm8Dm9bcGxwqKKQk1gm2anYhACeyyqgLHNJuAjnoMgcnNUb8rH3wfJheKL2o2HUi8wnHmvsWDogVbR",
  "key34": "2vtfrtixERJp7pPYrYjm8KxidYRbCe1GvQyDAa7JDNmmmQkdjTHWqhsVX7yTQukFEGsQX4mvqSS8jxt4hZXbg9ih",
  "key35": "2vFPvyJG2UuaYnrtdNo7CTXK1566JCuBDQDrFUb7nTPYmrnWdVNxi4mXYpgRGuPzv8CrZWa2G4sMUhNT6xX6s9FL",
  "key36": "5NE6yzfpZtCNWeeiDzSAkq8VRwfkLYgCU7J55uFVxFtgkovU5e21LeCoNg5TRaYJQcKw7Xh12Dep1AW5ZiZcythz",
  "key37": "T6bxyQe6aqFedXcGmx2trnczzD2mY1s7BaPvz8AL77wm3N4FmPteFErWR2sKx4KcxgmjGrbCXJTYpJf9EtTATh3"
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
