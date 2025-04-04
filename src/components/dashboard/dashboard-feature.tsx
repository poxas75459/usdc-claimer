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
    "3cHYMMUZKiyvvjshaaQcMb2SAwUbqQHA89xCMnobbXMMeySejrHV2ndrSzGzR33i6yWNHjuBRyRvYqSavwEqPHuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LvjkiQ9rGkeioNMWgsd7eu83yQsdpfnUJV1nkmiQuJGeW8P28QvQnQhVxtxZGd9pkZWJEkPFDvaCnBcGqaWFgx5",
  "key1": "nFQMv4RgWgMbJx7GGtLJo4owaT6wcvKQjH2yzkHZ16hb3eWmrYPiDgonLb5MYfKQccFTUQ16BpG7pcTBsmJZR7x",
  "key2": "4SL8UsCnyW8kqeJcX7r39soYnXgggGLCRhQKYxp7ouxnAfNt1dW26EHHvYv5proif8K5fvEknHQjbPA3SjNUfk7t",
  "key3": "hjT9Mj44PrswLbvPckbgRjaNqLhbQxaWUqTkzkwjGHQPGKp6tHfXwx35WAPNbFL2s3NuKos2fKXxopRaLAocVSz",
  "key4": "4wfyKixcLsTfwEKyc6EXAWJvDh6BPBYuV2R6EJxa6UjpuY7W8bNhfPQ1gKdB9ArduBKxS7yn133pr476DSDYHW3V",
  "key5": "5NNLpvLUJu9xnidwRXMaaN2xZqYVtx5HS5WvDs1YTL5dyvxxpi9a5VH2wq1Qzy7RmzicqtZsicm9jTVE51PQFePi",
  "key6": "66wKPA1E3sWUNYJSrKq7P4oc3KBtTjWfP5tyLUyL6jXaSbYbJDkkwLJZCPikF1duTHXyDAYsLKAzp9miX8BzfKAK",
  "key7": "5KvnSDPPabkonQBJ4jztQU38WnvHoDNKy9eFNqFAkzVWFeUd3s29v4tAkeX9d2fJoGBnKMo4jXhie9VRgGFfAqc1",
  "key8": "2yaCLUP6Ny5Q9KX5ZCPdwUWb7kMQp3BHz3W5RH7fKxWjuYMPh91nypuvu7UmohiUQpbn3nou4cna3tq7JoKYQh6U",
  "key9": "2uS6KzKAp9cFPL1WVufWyatDzczMuRnt8UiiYBmrAeKU8RSMuT5WoBSwKqcsty3Qqpn1NrHwaSgu4LqeYHE5dSaz",
  "key10": "tDu6xwAyig4zos3fq6i5pVFdsvutztsJJS5KAMuF1H9PEsMP53NPnmpg1DaL6g4pu72oATVY75jhf5KB12eV8DL",
  "key11": "3xHEivDqMctazPTRvchuTcvcLT9u6SG6USgphFGUbGAmWPyWGCC96Tsefpxtt6R8eUNqcT7AB2L9MNsnU2SmuDe1",
  "key12": "28sMQ2DVZrFECqkuio6RjYU8nXyUhrGSH79RVPdMRnL9RUkELVjcAFxjm1CrTT33vMcuNVSJmv5ACUwCHY1SgDJE",
  "key13": "jrnMknXbYkwTP7XXH7Dqv3bkz852M7xdNHtQj7gh3x93eLKFAKTmrD4ct6p7EunWVQg4RfLppcLFBg3tnjhem8U",
  "key14": "5MgAqg1b6ReZainzi7aG5b6WbDKiWUyzGVVMNeWEbvqqwdR85dmnQCScnPpAJxZ8yy6G44AJjBsUbpo1vV6A63cc",
  "key15": "5n52Pm4i65arnK8S8PvdtkfGiqzwgfY2bQBgiZ2gExqqbNa5ctcaRepNDgGW7Q1wJaY4YeYXv2g1yprT7yf1oMre",
  "key16": "4XNpPVYUST64kwiZB6wfMLftJKiX9NLCVFZMmmmBvkY9HPTBs6aUcbzbVn6KaEAoZunChabxhczw4GKevRJQKiSv",
  "key17": "38Ly2cZjyYht8e4R4UyQ69ZvDnFn3VAMwtFDt7GrXWyvH6MmR8BMyXkCLYzMuZzqcm2MLtFZzywXnpK6o4wd1Aw4",
  "key18": "3JfH3RA1NF5dYBLSJM6XCHmhtMVRTPKwzAKsk91Qi9aK79dNmYmVbfUEcGVXSbenRr9NfaoYyaaFCRXsge4R6vpN",
  "key19": "5gbp2gmRqMH8ZVpSc4P6cBUzuSv26cP7fisS1k9PEUai6GDTRiDTwyZ5GximDb5Us3nK6XGBktr4Quo1CUHc8LG7",
  "key20": "3EKvXVz9CftRfgq4UXjS2eAB9Nk5NpXx1t5cia8YN9Q7akb95hZxAhUryztk3nKpo4yemSTxmWGDJ1J65DxTuHQo",
  "key21": "5x7YXbjKyf69maYFBNufgMQzuDpgrDRjsBHXrbezF66KVe6pjviHaUqcFYHsUJ5g8Qyf4id53KBH8gZpfazduBux",
  "key22": "2RZ9dFpsFgPW1gCNvWsuaJR7W6MWjuVHnMZU3xJ1Wp4jfbP3dMdXJbCpZLNpR5r5WwD8ib4HvJ5oJhFne4Q54bDe",
  "key23": "66tPsEXaJAugtarQdfqPyU3gJ6DrSFn8xDfZDoMfHCJBrCu4ueaq6RKEsQtwEaqguHBzEfdQo3em7dMDUktJpGSo",
  "key24": "2DtYGcMgSUJ2yHr2qGuAmq5JDjqujMg69nyzE2iYahnQrzb7TCydniF39LqnQdXEBcjCfwxA7F1s11x15KFkDAmK",
  "key25": "47feThFL12RTznFCYw8XncLAwzoQjskyuSruJ9BuG4XxxiZqFDigrA4XE1vW4LuUZSH7AZENUVTsnrzH5mWDW79e",
  "key26": "2EycV955bnCZqi6hYY9QtUKrr71Yocq79811BwKWuJhHMBa5ebuBiwkPXXgNpaeNHGJYVaqmCaUXreyvkyzcFpSp",
  "key27": "Cw2sMjTotgBsjF8mDjHsAUo47nLbZC7z7s8MdoXPu3u1voLHD4T4uwgu5TqXeP5dDYT1RNQLxoVxngKr13p17UM",
  "key28": "3qKxAy8r9MtNRBHm85Rd6FtGnsPS9X3RaBscDwAhLxcpMSC3BtNZGizY8ABHUwA59Qy6BCYaqUSgbyhbgoDjen8m",
  "key29": "5u9JNJcdHXVaK1wBtky5FSwSGTthZsHC2aTG7rj4zogUqv47CQohMoAc9EWWV8epK8hU4rkHJNLh5CUuXJSpoafN",
  "key30": "2gKMxQccGpFsYPk6MqMdoR4Bung8e4uhxCtED1i9KXxjw2rZJxo8gmPwtghmayE8mxD8xntz92h8XEd4ciVAsFH9",
  "key31": "66QWVEaFyFUuBLzKSjkoo3imUcx5hh8DxXbmLG9mvRg1eaC5wC692qbHSeB292h5Uc76A22mGRoU8oU7k7srjDk4",
  "key32": "41ma1E3i7BciwXvh9rBaJmFvsDj281UVSFYSMprckh3EUY52DCZh6mtXVZCBRNYgLkcDQTD22x7QYMt6EKXHsr94",
  "key33": "4n6SsDpdBGqapHjEos47cxtz7GbL56Rxv1hkMwYDRPv1d9nYHePLeddqfgjqCZvmXb6GzPTW6mXQK86XuGrhmMrw",
  "key34": "3VtyHUQRCr9coTxxiiDSAdxojPHxpM3UzMdPoAuGJ51rPbPdBYiniCZWkVZ7VtLm39QuDPXsuUjKqzFxEzLSRxRv",
  "key35": "2FMm9bacLXCzdgSsSbPbe96zkL2pq7iAgbu7gFY1FCzpoPyc3PtwUMxB64DxBVJgSkNS99kTBCJHmM2GDd7WM8af",
  "key36": "5DHJPocA8dK7EvG9qqNtHWbdKnpFTx4AeSi1B3PzpP9rNX8Xp3MPQDNKqGzQmkgS5f3FFhxTqdrGTAWPBGfxTRZC"
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
