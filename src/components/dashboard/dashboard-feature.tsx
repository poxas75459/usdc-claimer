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
    "zTu9p4gKTHiJLkdysCmdtQWuA1PgiPawcVEHNax8YHfuyqCMSr1axXdzzJb8BpYUwBZZgbMz6GyH3eHmgodg86H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nnVLT3qExnGSmdh9DuzyCDeLoLR71fEdSQHTUvJEgkdUY36M7zKWETUNhnj9dmTCu919oXZ6kay8wLNVgzUPaUp",
  "key1": "5ZU4dQRHuvSWAUPYdiLqkiVs9rCo1qkBSwGnheXtRiijW9gWaKckUx7DPs6pDV7ZrQS2VLqjH4tJYNDrcVfc5Cqg",
  "key2": "3h3CHbNT5RY9kF4vYPKVGmTrxURAMP4yhYkM59uEuv2Fw26rde8DmcxjQArdnQsvXeYcGdM8RyoDamRTtGgiGQjP",
  "key3": "1M1a2UYXqVJnSvbNyjBeb1F8zMK4swxEEoD7CtGKYzdikZiVsSTpwtUfZFxdT4Z67hmAmfQ9tkyMRX7hPyeNoyT",
  "key4": "rkwHZqqmKJcHk8KNev9QJdmMqYtTRsTwVy21zdFsFtqRDJpsdcssHsEcznHUCbg9HaHchgyT8WtdDkvSkxH7FSp",
  "key5": "7qWwJZpH8cgSJFjP59FrsQhPPtn4Ft5sugsf1S1uk9r5JdfoBwAZDNSLqxHNESMUn8UFofKse9BpFvzAC8gnZkZ",
  "key6": "4irqEembejxeWYfagS1YckG3RpoVHtjaR3m5GiPgjMJoLaxtTwk5qwjvRoUuVyGjrd2oJpCmVYz5AvJJ8LLwHcSk",
  "key7": "537X1hE8N2LvyN7Hc1seQFShaHgYUf8YouTxXUVaCDgEMKLJ3ceN28YLn2vG4veMdaqB7bjD2oCPidSQKAawsVQE",
  "key8": "3f2voVZwkhNCgSwsSpw9F5Dj8TbduxPbRjjPKg7cesTrdLGdBeNDtqYB3xQKko8NxqZ2b2crG3yW2hxvkqp1pUHu",
  "key9": "cRh4LLPo9iBGQZQx3D28TeRB9nUU6bpzS3H3kVPt75GbWvLHkXgU5itLcJWkKDFuBXmEMimUZrSRgTYe9bpCM1J",
  "key10": "41WbxUc2BUNrsrfEwwtJnoAjoXxq68wCeGmiV8dtfJ9QRSxzDxEzY24WcbaG5NPtuHRMw2nc4ZvjtGDqP7TAXoFi",
  "key11": "3RxTL9CRKU2dyKUQrnWVWRGvZfn6TV3tADbH5x6yaJC8S8pq1N58LxMNpamkYH6Q2Nz3GX6E9x43RgLktpSfyWhv",
  "key12": "41o1shZ9ciZKnAYqxUrPm84qkgCdkpdHGYHmAzjyojHss5SuEAQGxKtAmqcc8Agqwf5bEU5emZ7jm7HuHZPauqHN",
  "key13": "5UoUktcRdfKys589CYHVrhee2LjkaVvtXyftu4ikC6gdAydbFsWoAGe3xdeoBJcpvS5T66hazNPfkjzcW15ycwRA",
  "key14": "5GZ1AGQASYvtAyooiP9AcpXqS1Xs9Uc8wGitCmBWDNk1ozMx1jUomfv9uBoNiVNtnYS47YDoWKESeu8y8n9daEUt",
  "key15": "3CWrmyyH9ZN9pLQNgK1TmGmNuWNu84SbcbmpoCMZqsUXDSDtPw6xvN9m4gPantKjYcMamTGm35KqtsdxWFEsBWYH",
  "key16": "rL9EXQZYxpLQih4aji1T8e81wysYy9iiVk35SDUwdUBTDCbQQT5LdKcum28W23m72mBXcdt1aJpVEd9rpMYJXu7",
  "key17": "4JtqmWdDghj87h9WoGCBhW8yPmDd9aqWR7dgYoARXFDxrmbtppNCRJxD1myEvctjBPP14xBA6BVF4v1mCrY4eEqi",
  "key18": "375wUWuy1nUGEbXt2Yk9xUEPLGBFyGd2G5YV3oje71trKraN7yZqevuixzhoLrVzepjYGXeFGMiwUimfpoZerKR6",
  "key19": "2Dsn9CgQ3LCcUYucFAnaPRMZjDEz1YYw8HVzBJquzXF8arLeR84iDARCwXKSpptGA8dDYMJWSWKaYVWtHsfmkxsx",
  "key20": "5nqGxiwzsoTTrkH5qrfAqCY2rTYJNKyE1cPnk7o1nZ9u66w7E8WBxxQJ1TAX8FjvLR19EFsY4Jgfau4mRqxb9DoB",
  "key21": "5FgzfsX67ZsoRWPGqhGPxbBuCUpovzV5y4eC7dUdnkKTvbcCXsePu49xyYR33yzqEf42FKiQE9rKJPHKNPMmWNS8",
  "key22": "aLCoat5h5XBZEsB9VS8dG8d77Xpbsh7vgGbMuaHRjboUuf1wArrxGwVD8y8wC2EC2bz2vsUJcP9jEN5yrD9P48U",
  "key23": "5k1XzhTaBucZ3cGaZ5LaYG8NEtWGVQPwNbMTJbmRPgoGxMYMLUpcJczCA55vGa6QRaK59HXa6ejq431fW4vuJXyj",
  "key24": "3acpNkm8r6h5fmY72NGEF2tAo6E86kw7YArbVA64SQvtg3B6YRyNY9Y5c77S6dnREzs3gAV5VjN3DvLkFqGkcPmx"
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
