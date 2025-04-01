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
    "4MVjGDpSQsnmEB6T84Se7RBE7jMMqgGTvqu1HECczZp7h9kT3jcAGtnjdT9KF5afiMfoC2enNsbZbGoHAvPpRD16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZdQ1v9bqQyFn34ZWkoS9uGApMNKGS4uY8oYr9784ifiKucLK2H3mkwaiC7puAf54KiSM27KaQD6mP5DkofwQYwR",
  "key1": "QPvx5LNfqmjhjAsndyqyTYhBKwCihzEvJMwzXm5VQQPDmxZXkPFQeSWukQP2nNE4FyfzU9PbWjCjHyEV1yqbruE",
  "key2": "3zqhKHHrW52FpK72wFkj5W4m7Q1Ycrs64uCYs68iVuGLyoCWzKt4mspMJHgd5jgA7xxX9NjMN9ECoXR29DUMyCv6",
  "key3": "4S94fBuobG5yK3mn6ZxCwRz1GFCmymabUXXkdZYnHnVsYruLW9LmnMsKZuJVEfkrT1GAsRPEe1HDWRKS8oV8j2kF",
  "key4": "5anrXvFuFq8maoBHHpRTANM5QGuf8AZQNQfoPMMFooPUR63CjKkTPrjYWfXhVjbdu5Dx6aZp7WsPvn9HJ312shav",
  "key5": "4AXPbeZm5TLZaqFgUNk67y7ZWvnGtwmR3cgaxzopk2o3opXhiyqC7qiSQdbvai3VnNhZ94DT8FZxzxkvopEYzTsj",
  "key6": "FXqmkuUWcC5QxKZzxj5Lc6hTt9Pc2KPofSC4w3smRBmjjtLzARo5FaaHmQv2QYMnkRM7BUpT5KRuveEXK6K8yfF",
  "key7": "5PSrkrKGUWZS9Q82DgtTcoFTTen16qB3XgREsXEtGusfwQx3bKtvMbM6q7YgDDw4atKztaXNBGifk69LJHzJqHho",
  "key8": "4i9dAeueQqRLgFFsiT5FTCSRTQXNCYdzpg9Pf5fU2QA9J1ri6tNRyh18AV2mSggqx6uMsAXQDo5Sm7fLX9pJE9EZ",
  "key9": "94E4xg2mq9QDqpukemrGS7vNdZvCWRUKkE4d3jRNMxKcLB7dNjLR9S52iYLmPhSSw6x8SLnTy3BDXtNn1HoohjK",
  "key10": "eqxU6ZsjBFCPKJMZHEX4zi8K6ry5Rqb2CbCVWhiUKa4jp9zHGg8SneVs7jWA6JwWTG72FbErzxsJDAmTvht1yM9",
  "key11": "4YCgo4z4gAWWCun4DwS7vPDeTJq93cT6Cyek2fYwy673YMvxwRn3GwPkGht7DH9BpMXmqVg1uAewT9MysRrZ8goE",
  "key12": "2PpGFuUVDEcki68mHSSQQhbttvXSLeRwDBT6RNwU89krQBNZXQsHsPCnQRmhVDxZKmdmXDTcYu96WpC5wZy81DTP",
  "key13": "5NPrw79MW2CdgMnqgFUg9pC8Fwnc2xrwD6CjRnHhthJp32LWPR3R7Ynr2cJ8V518mH3tZ6v4W3Q9oyCJHpNE1twS",
  "key14": "3Pm6va2zFHcydvCY2TC9hffezkpJJC7DQSnKP2bXbXK47Mpw1GSTYwBSehdJGVgY2uBUZMXKKFbK6q2YHjcEqUwA",
  "key15": "35x47ypGLXdgRfeB5ENNzNh2MVN1HCSMYbAvSc3pT45GBkKfPTHhZU9PykEngY1ax2LsDSnjnafZ2XwxrPC5GqyT",
  "key16": "33PLLi4FjgawyGLSo44S727BtDtN56wbmHvkKEjGQFfNmmpFSWoG5qpgqwJ3k9wWhU3LnxUgybNoRHzKgX2UAJjq",
  "key17": "4Nyedg7i8dR8HwM8QxEhgznGzWavX8YETkBHV1pstFEP2htLbYJmnqzHz2Su34Q9zFfJE9YVeobMXmSEuRMWpscc",
  "key18": "3Dua8CHot1sJzxuVdvXatJEiDChiT9choFybeZaokwndxinapnxxaqHP9RvfU9BYZSnwWiicrFP2yXoD3WKK4kML",
  "key19": "4Y6RoiTjU35C3XFQTK7eueu5y4drUujsT2EDKVhoPRhuQzgSxwQ12L19gkY19WGKZbUvqDiqrgqkotWU9pngX9V4",
  "key20": "334Tg67hti9rgCEZfvaQzib1kCSBMrfcjUuq9msbp9Do9RBBEN3aL21KH4mhurUSFk9x1wSmMBi81QHbfMo3LVhf",
  "key21": "7bym7QTGcTWRaQeRFcSFrz8yHUir6zJTK2kWUDS1egw9N89HS9w5tvHqobyAnNLdmtMNwY2Rt54bBwdQDuCyNcg",
  "key22": "q3BXWwWsNAYWw9jd21tDT8qrNo6QV7bH34H7LGJ3HCcYVQDQkJJmXjzcui9J2v7SAAzbayEPFkAcGRcLQ4jiGAu",
  "key23": "4tafzRzxv6LfRXuijqaYHTgdHcS7MYUb993L2M7mVVemGTMw6m12x8DxTcTK3gqC8gWTutLjwBqhtnFd8ghiNhZh",
  "key24": "51hgy9EoX4yfBCaDv6q5V8TosWBtBdRDerQrE7d7xQB1YYHzPhNoFMe4qx2WCMSaGmyLzt1bVijwZwwnkuN3xFQj"
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
