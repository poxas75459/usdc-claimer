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
    "YgdDwgnmxYoPoLN6bsenEDkZu3BovJnasmP994vXeCKwZ7eqdqEkPFL3cVfYSFwxxrjdVZCDYYmQ5hmGqfcR5Rz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Zy4puSKxyAcKBdm8KbnX1w6yywYrWVrRDF8oExSWUZe3hBmC91PaoMz4xfYoCUfHUBCiQQLGMwMwVhtZng2QvK",
  "key1": "bPNP6CeHXzEb6S2wrxoXmU6V7gqiQ6PB67AqHaVxiqQ2zUJc9vCFrVdgC9Vsdvu1FL9oScA8RLkTBTPaSqcAhmR",
  "key2": "2fFNDKCeFu41ZVGxJmoammnzRB7NrjYLrow3YR4mdRT634WNqGwMXdV9oFsJhJggsYL8HqMhZwNDWpCuTdrw74y6",
  "key3": "3N2BbneXLG3XzyN352ys3Y79FEkRQEtTLRPSAVPVjXT8Am8uEfTYXQgNbYUVGK5sy3D4vE375nBrCLudMWR2aj22",
  "key4": "3EjEZVV35Sh8a63L8nHeBNPZXVm32wevL8YzCthbtKyFC5NKwzcFEjmM7in3RpDQFaaG3DwZ4QDZhwG4BAerf7tr",
  "key5": "5hnVWkCYoUTeai3BBfM1CQcuXvUQFJkHgFNMf8YTGTe8aNDpDEeWdGhawrJwkCK2G7MudZQv76amqndzepuAc65P",
  "key6": "DpFzTcf1y6LpjLwCx6VyfnQnvqS4nQ4v94kNrSu76gWtw33VCvnHVLbVLUpqrfPR2K6HaTDhKPayschEQPtALZW",
  "key7": "3agmgvBgwAvA6BRapNLDYm3R4xj5cE1RbKF47wfLP6vPPBPr9vQ5JvhwKhsDaMSjMxzeewzyshaF2pgbmzMYpLkv",
  "key8": "4FjWVMqduo17p7LW6GmXyABC1Me69HUfyhjqqpuuCHC9fmWzAoga6UxXVFsFtXHvhy4wJxy4L7NxgjdJrGNnqFRc",
  "key9": "5VYiMRXuXauCFi8izz3cJATyJpiz8UFC6Vx8WtWCBNFgEJhMW7jzn87irmeYHDAEiUPvYxmZvnAuAqFwB7JkUebH",
  "key10": "dsDe1P1LCWtR46WTW8wDQdUPV6wcRLbGJMMUA51sNvFZzx19vxXKG4GZ1XABkSnqb4LHPmpfRLhJEZyn6jsJcP8",
  "key11": "5ZozSzR3xpds8EFtifT7pyz8aYUMpiJEop6ipAjUuYBT8YjL2ShhVF8bsZuqz4mJfpp9HdDFT8RwHQHaSQe4KApu",
  "key12": "3nQh8kcoYupf8TzWmvnC7LPibFRzz75a8Me9iPijShr8V1UH5fatmacvLD6T1p4q3nSMf3nEem5tG1T5uAsgPcZ1",
  "key13": "38hmSYhNxLfWamikgHFYywUnWNN6xh3vRQH6bqDJzYTzUMdUKDucw1rJxFRiPC2TBQPQ22X5scb7H22nmnqK3V42",
  "key14": "616i8B3QtGD9Fyxmh8B7NP9fLpSFqMxPsez8g1qoiCvgGTXQ8mcDByxtAhXGi4QvDSdtQkwoeHVCQQYSsd48N2R4",
  "key15": "PhWKD1eeuhBgrN2ZdJdEs2wgANRHz3H2Lcei59BB2HzyEs5t1jogKaC1K6H3vrB3VCondZsgdg2kxv44NSCDnUU",
  "key16": "3m66aotDpBVbNFcQMf58U98SbuRfS29YSWQZSQk2TjZ3FRtCLNLtaP4KtwfTNi6Th3i9fcH8EtM2PveWLE3rUm8c",
  "key17": "zWqEC5QZxykDCbyLjuMxTZ2wPxYhJCumaAiSNqzQ9LJJwNDaKu8fQNuW1FUPdY6cxAWZ1GQkHckxPBMecZmQH8z",
  "key18": "5HpS9aqCi6DozD2frqwqdGZSjhhCv2jVRFHYEeQtmy2UPRi3mk9aJxPYNo8URtBb7bKDW2uzKqotwQq1vcyapMM3",
  "key19": "quQEoPTwiPJ4QEm2xK9YWXhP6KnjxFx8L1yey8no816bhDV8GQyPSyGsLqxsjcrehA98gcpgEjgoe3pYDPduycc",
  "key20": "5qidhZfsRdoPs7xJB1S7zYGQuzh4zM1U8Sv3TKG4ibAyeishc2mFK1QBL7ULBthHiFL7Xdp4QhMscqrSiZQe4vsr",
  "key21": "5B5QdZgdhDAYuDQVFFcfJjYe8U7cC4WdGChhZ7ocarWt4zoJJ9eMKhTKwh7E9wuYswvnHaXd99ib4ksLJnvb6Yha",
  "key22": "2bpULdx9rzfgK1XRE9KhVw6Q9hNku11K7wYN9FV9YFf93gZLkBUUiBUGpoxxqD2WB8J4SUN5CYpRSXMdDJYi3oWy",
  "key23": "2gWB4FtBQRY2yqNkWESLs5WzupxAQdjPsfoeacKzNo5yDFzp5Wb6P61ypMGWvSpCwGJGL68Mw6LH4AZZ7NmriSbT",
  "key24": "SYDNhmnsrEXHURGdFEc615FKpMjgFVQDT7mobxPezQMhjE77KHYH2ywbNRWM5zdEhxYGRzZ2ydRx2jKScxqZC58",
  "key25": "iRTQssPGvXphXu68rZRvHWWM6wSCarLhevgmuSsyQiqwwox4V1HmpQ818gyd1mLyYTxscSuawZTRPhV5TZ3Z5ML",
  "key26": "3DWdKkSREMiEbXsx3LFjKZLhR9oLPVyvwwWjaG8wjXeCDgithiSV3hE8Ukd2vcCGK6x7vRm9hR16o2EAptb111yi",
  "key27": "2C1Df8EwKLEqrKKCTQZpdDzVHHdGHR9aZ7viPX56C4P93Y6G4Vmr31mGToAhd31HyfK8esME8JPXHTdAv4UZqq9U",
  "key28": "4GvsbbbfVGXWGjyuo3jP1CfzF4MTRzZbzkNvtNeJywu33kb3oGboyM7oQGQKFSfCBnL9Hz74sFD36KDEHpJo8qvv",
  "key29": "4gWUVEb2izkxF2M2BhNBP5a216TbbmnVVwJp7SJ8hA2egPdCh1rgWhFcjCr9zky6gwiobkEXJQN1cxaKmqPPqYbz",
  "key30": "4mtt9fUkN1HoTfRnbipKMq5vafxsurYL3VX4xYbN9BiDkw6Wx9TVLWHDBGEHtNXgDWT5es2KcdS72kyWR1uN9WZH",
  "key31": "4Tvi7yKStpjPREgt5ZokKVeEmXoNbRwX9jNo6hHZY3JUtP8E16zXihwKKGa3DQjjfKAeTjAmay5TTTqPQU7PsN6S",
  "key32": "5ueqKUzem55Cc29mXyGF8x2MNM3Yddf7Bm9TEf7oRzXBYbneJP32k1nYd2WLMCmcEzg8dt9ms3aApR1hswNhsqfg",
  "key33": "je4oc2SR9an1AgFs81iaK1dPXecmcr7mKfBfszUc9SV84cNUvdzGuYLxypYgF8rNA11ZfziWqmoJ9F2b4FT4KM8",
  "key34": "5vwFQRuJtEPgibp4YKYUFqB2QdoTtVPwuGPfpgb4ZVwcyEiVH8hnKSAYo5eaH34A5CXiUxzYtkjmLfHKAwwpsquJ",
  "key35": "4ikQwjpafbgjKU3g5MZZwTn5cCAqD2nuedqM74nfrra3MzAuuiMxfTn69CTy1SH32bJNb2tLrfPoXTgxNzFQEmgp"
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
