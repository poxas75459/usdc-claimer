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
    "2hjWo11yvHJR87dpibLpqKFTF8JgtipbGvJDNAHYXiSLynLBpY5UUkRPmtWsD1C5hM72TGxcnNDrVit6w9yx8TTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aTgK6WagGkEnSx7hn38hQUqLZsTsUZdWFtpFUqQLm5aWsBfwMdAdn4Q6H5WyKUiD51MTTiMFcqFkEjp53n7rRDD",
  "key1": "46D4y7hNNiER9AN3hipFZWa4G2KBRRTAALiPEbaf86i8yvqETGCeq9Cd1fWcgqg4sNKqnUFhYb23wqwsoxrNZtaW",
  "key2": "5jejgc9r4kninwnUA5eQdBNDTP1LbBkUMKQiPLev77VoXb8RGdq2dY65PMSnsEUxPcXhh2hnrULC4CQTy4VxcM63",
  "key3": "4BLTNe6ujgnkN6vzupwr1oxvm9xPCfewzbUtCbHuNeGMqcjng2eems5g6TUsLu2RE49N1DPujUUYqvGdWcQ4q9Z5",
  "key4": "3WrHwAePyx71p9KPGf5U2sgqi2HJBE1mkwC4AvoXmLJzGF1cwojxwPvmybZcG1UG3J4251hyxCQR2UTHrBmibzCu",
  "key5": "6n39rMufPSDYSpBsFchk3ADeTw75Q7HCKHgEAnwsiRyKuzEZof4Lr6jzBg6nn6Ui46ZcdBhyYeChnktmcdpfLrs",
  "key6": "2jFU7oAzwb7NEktvTXESREnifgkKdNRsPAfriB6RwTmMuYmQCqtoiFm4VoDLVCW76HHht3RNpg71iXk7ptQPjTyZ",
  "key7": "2e8ro7MfAVutYCBxKN519Dfij6zbKk5uWymbrcn8GGinFDxGYtz7reXoRSzsUuADtKMfnQPaDZdDhLkJYi9PpDoP",
  "key8": "5Xm32bH4wZsPt2tRqKkV7zz9uzRCqeiJqvUKR5bEhqvrX1HFAaYouvdbisgiZm5MMuHVr6Ur9FFZ4WQdGrtnu3Sx",
  "key9": "4YLXJSd3jrZpLpCoLt3yjANaAkvp2LXfDdF3UorjNTwYZt7sXQKeXRWfcC66iHV8qLqeNS8bvVkKTiBAQ52EnbGQ",
  "key10": "4U4ie3JNxW9bWvqnXiLohCpmpQbGcYQKfV3B1xKM9rp4AUFhLCNCVgQqqNHKnt4TfNvyYoLPpBwMr8MVndvJjV4c",
  "key11": "2RWuFnqTXTcwVaiH9QDLbhcmGQwsCVap48QdZ6T5z8C1gMcp6ozLgTPmaEFipcaeQJBMkSAjdy49KJ5PNQUo7g7J",
  "key12": "3d5f4ACmPSGJLXAJYdvaemqNkuZ6NidS5N3NC8pKx5ci3QQR6oRzBLZyLzHDHJoW5JCTNKq6fmMo62cfwSGKpUz2",
  "key13": "5rDVfnfrYYPyxKzvNRUaYpHwRm5i5S1JYUWVyJqTPoyECETiNPA8bo4t8xnbpYbP9AViPJxk8eD4Rm7DHscHywFR",
  "key14": "WZ1P9vXmcLfxWcPaDt4Yb3xgHcXCx2T38wnJqzAM69oTjEdDLKPJdRS9LfW1etubFiXZH9szrzL7skAUMW9y1ek",
  "key15": "3GHL8rhvaEyGQFxfiHekEDZqxcZv61ZtNKSh5hMUTn42kWnmwfVYk1ogMQ8KvjAgEA7T7jgBomdx3QLxjPshdT2z",
  "key16": "66gzDkFoEg7X5nR3F2WxLWzuJzQyAV8QXv6kuhK3bNvvaGVcYU5kYPWnbPB1xkmDHEbHUmNxaRq2WCuLzrtA4QWQ",
  "key17": "4HLA5hevZm1b8Wb47fsf8xEPF9FLD462j8ThvXsPk6FLV6tpfJLyLPt3r8swevDb5thh9kmNnTGAQD4zbjsf2VFh",
  "key18": "3SanLLGXM9tDNbTjxSM7h7DaUjzVp8fwMjQrzCHPtqjeA8n5PghHHCxfN2pmSGwkLHxj5mV4wQi1ZFMRK2JyDUy7",
  "key19": "5ec5WvrGAJPCbFtVy12BJvao4c2YzSUJuoCZM9g1fCTYRsmQGEZq6oNnsynqvzR53amJLC1EUyWBGhVmNU6pJU8D",
  "key20": "cUaXtYt2moUB7Tjox5kZd6ost5ptar4zugeXoUvueKRfw9umkfZwMCxGWBEX4F8c5naQxctkiCmjPtJWHwrXZqU",
  "key21": "5y9pFLs55q6RL7tAmYhBsDSQg6yGn9nndQmn8WcNiVCrZgKRDrKTcRWqfKgxgzz1fHJPh8G3sLpc9QGe1uFMo4Ev",
  "key22": "Fm2D35yPwf1VJAgjQPXLHrKdfuZNKbyrHJi9qDpnGhkeR1BCjYxKi6SRyBWujoP6XCdVMjhcn2XmpEjjdQGkmGG",
  "key23": "3WYKsJT76KjGRr5hrkSKeeaiMwSvQehqGfdZfvJpbzbDDM4DPvzCBhgfecCfUu1ivQLiAjAn7ypfgN4gEN49F8uf",
  "key24": "2VMEbqqWwLDKVxQ8ZsxuMVcZxb9vn1oELn9Ki9Ewxqt5t2MHK4MsgNnUzUR2PNZAGFkvpU1H5vp5gWyQE1PpVFSa",
  "key25": "4rgQQLKA5XKPkg9k8Be2Zru2PdddTRgSDnxT3xnjLsW6MNL7uZWq6NqPd8qUimuP7NsX3v6HyZwmmjEv5dP3XoDR",
  "key26": "2jdRvEmGU4xoccfrfXG3SV8M5eBwBMeWnDAwZv5fmkjduBZgzd4byfUYFovpiSeu85VgpF1TejfXriXa3GyojgEs",
  "key27": "5CivuM5Rfe6gSBpC8p6YvcxJGeuWvRMdYkT55yEP9vuqUpAHmDAuBrBpUanVUM2mRXtfj4wowhdBfvLPRMoWJ3S8",
  "key28": "rcFSkxoidQo8BuUFG6AcXaCxnv18EdGXrzCmttQDaXo4gAtvqWhA21Q3zUvr9uz32BHpPAMoqZQynYoh19EBsLj",
  "key29": "4yL5sbuYLG6kYAcovfXRhR8xpUExQiwiD1a9PTrMm8y7HUs3NEbzLVVBrXXLHsagYkdP64PGs9r5Z2xg6AYRucFm",
  "key30": "5ZwKFQ1jRFhddnz7Ub783Y9qaZBdqRuHk69GMmj86aK3Tqm4d2v4LgvyEXPgg91YXr4e7fuPW8myuhx5HtkKLjTD",
  "key31": "45AF7cCKeNdzdnKVbeTPz4ZyRPHXC1mgZ1ARKKcDDhQgy2F4UJKGdq2MtzvxqgdUbNHcKJ1oKQvyaTRogcQXTusu"
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
