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
    "dQPRbkFudambvnGzD1ZkwZA3Z7JY1re9BDTAttwcDm6M1sQa69Xf7tbJCain7HiScwzofQxdskWWM6xPbHtpZqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28mSgA2xpCdvpUctP3mG7urMsqAvrR6bzchEBAXn6EcdS8afN1TDzTNErvyV4CQbf5MqCS8kVtZaj6tB7BKy6vMD",
  "key1": "5NkmSExNJQA9cVttQpJB5ykQW6dhhEKcDAtpWb6a6D7M35qs6CygXnYDtcdZ1tuL7UNRLN1WVwWvXuUrgniBH4jz",
  "key2": "5NhadYZu3Spcvx5rLt1eDRfBHFYo833Ke1iRkSHja5ToeDrXu3fsBDDaHf6FiqjA15G2EJx2XFH3Wf3HzAexM8f8",
  "key3": "3GmuHas3Bi9VufV1hYTNf2sH9zYpMPHpvU7b7itNrqCeDaRTQRRccyP3c5taF5kM2nLeVMHHE9F8FJFtYM5EADEs",
  "key4": "2vFzSTgMf73nTzjY2bLpyncLtkJH2aJnKBhsWC4v4Doazugochn4CKyLuYvZVnyxbfo7aTdo64c9t85DNBMYLUr",
  "key5": "2aKnbV2wR992AuuwmLbNozgipFzqYdwX47gTjCfwgueBJmeEw3iX5srKJn9KKcuyczAbzg2q9dE3D2GdpqPt7uEE",
  "key6": "3Y2UQMDDszGUS6xUw8HZTNPmfPJBtJYMhyCX4AWoofZw4igp7wFpnyrgtyEJRqtoAU99wzW4ZgjP9FGTqfn5PxCU",
  "key7": "59F56afQxYhurWnYi5HcZCi8DF4edP2DzfhKdVAkGpX63bqRunrMhGkmQZcm9yXsNQXmt91UtpkdVU83XE75xwyQ",
  "key8": "548xHwTPhyuGJk6AvpZYRT2dvN4baGELQb5w4Ax4SR4PkzMPshtx62BRmb4XUsDi78VrBXnkpnZKaEawjNTVfcdj",
  "key9": "5FMb6DdNNX9CuhdWG2XSdVQiV4yrnMQhE3s4YibtvvZkv1N7etTkb2rsRmtyBr3ohcQmfNbPzAGog2hPnqJej7h3",
  "key10": "5N1VQcDvEY3sf258f2ymbzWU5pcoAFZfTTGUoXApLHniEuwSyN9xv6HntiqK1gfewdZx23qQLcXbdv54VA6VrTMH",
  "key11": "4NuDBNn9JYGf7XVrgHm5LY8ua9tK7eaWzwCS4xTX8uiH1a7sL1Pjd34ML5oSusgeUGdGtueW9AN5kyvVxUUwUiBx",
  "key12": "4rzine47U3EeTK1FHVc2XAC35TiXdArMy5QRZTm1eR1rJBKYUHtQvjbUy6FzzLfJKuL6E7BTeaKYwgY7SjkuEueJ",
  "key13": "bbEUkRuhGT7RW4mPSGdfxJ9E5JqZpzMgkyBZf4DoQhxo9irDS9ruPx6R1C7oXUjivhEBafiRNPf6C63KmHfFcN9",
  "key14": "2PTqZzQvA4h9gchUvkanc4ELzP7CJz91ZbUYuu661gzZ7YPnK7KXsnQfSEU6rV1b8wi4D65XH2Rfu6RPGS5F9WTg",
  "key15": "PniPTgpbucfJdbdyx1eAYfvjeKCF4qCYQtNBABVZ6EWpzReAF7jJb9yDXTiBbhUcTiNPa8FqUpJPuyybH3HWRbE",
  "key16": "KqEwYZmi8DEgUZjtMpPhdYQGkUWJxb2PPkeZF4F6ngb6AM6uyPFGYhKZ4Dk8AF6xuyBm5KMHsdfc5nBKbB1ZLRe",
  "key17": "3uLrP2FwwEpvjdeDD6Ap62j9wCETfabkiCxXKE2G17NTzgqLUEW1ynNukTLEoC7NSJQbjF4rrVzi4GBPYrq9xech",
  "key18": "xo1wBVbnuhyG6Nu7fcZgGGVUhuhCq1gHz195CXX9MNEFh1i5fxmHcmGDDjDdEgZ1SWGcNRG3kVrrKVoNbEKRBY1",
  "key19": "CtbFhYqMbXJ9CjRYnvMpu6PYC4K69EjEfvEaMfnSjwqxKReL8BppECRfJFmVb2McoVBrizmYPU8Ugz9MqULqfgk",
  "key20": "Jq1CtwvDenjCuH9MAxTStQgxccT4bLzfuEs47L22KGroncPFvgZzVB5iSmiTvjAjZgde6xFFCPLopZevBWyMFYa",
  "key21": "2YPPme3iebUgQArVT2A1ZBbev2LrdKdJYk4h6MEDL8P1fVMfJkMyk4UwzVwMstoZukmxAVZzp1ePrmsTKNzz1Nex",
  "key22": "4mXqmQoKoAJUtgifWWzNafKjd818v6y8QV1qKDJvCG1gZcLoRtzHFAwQQA92yBdd6YuRW86NFQVLUZa49xVMntm9",
  "key23": "zumApymLpGDEcTX61DxCh3V3e2toEd4rAajiptNzhUcCykBc5PEGMNoaoLmmyw7tQLA7a8KTJRQBQcAp3LcSznH",
  "key24": "2RYFx654PgcZQ1KibD7yspJ5EuYtNAH9nZHxztrPZk9By2nRgrkMUCkruVmDuwrZjtKs7ctd5d2STZeyMHFV44a4",
  "key25": "4HMpnrprH8d7EFYbDq7ofni6ZnUizwethRf11AjgBFj5GPqmc9gY2FZmovygSQLeJvVwEn9JxZ9evKqfSkh7uihK",
  "key26": "rFD7RyaoNB3FtwQUcr6NCZmQXdx6QYW7wR6uZL3CL1tSM8rc75XswnYBT2cYQrKf8MAu7vgjkc3KL477svLKcsA",
  "key27": "4GFejmgDfazNi8V7fNsBMvUfMrUP5GYnPDS3EDTR4h8f5byYQ6Mibrru93XsHkL6GaWPtCtWF2oZw1m7KCzvDCWB",
  "key28": "3b3YYVqrZCxw7BTrJM4VSaD1AHVLjojU27DQmeye8Q94s7F2d89jydAZFDdYgK8FKh2i2wkWU1HiQxmpr7nR1iaG"
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
