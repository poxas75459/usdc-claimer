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
    "WTVhCHF4ZQ6rhzYZCCgUbUTY3Ywg19ziFNvmTQXE513NjvjnZkR7crAprCPJT2dA3zugGNagrXrbbEvpo3Y7xnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WS9Q6NBcmgky2RjEFkktNxHZEcMg2SrbyJ7SgiCNasUNPM9cBfLEJtoA9TkTrhawA3rKzkFuxqcPmXhFo3ca42D",
  "key1": "3Bak6kroS8EdYYevZYnEjCLuf1FjThFMVTcnDbCpd6uEe9zziRuCT5HR9KQtSwCy64qdJYZDRzx6D2NCtNo3XPDp",
  "key2": "FTrfnyhN4ipiK2nLT1iRqXNhGnHbaXCgWHKcWCtyGtjASY4h8YpXGyTWnfrYAKtgJoxPEJgNAHMuV74z4nMsxfY",
  "key3": "3DG7ffifr4VeNtmZ4ViXoXmtyMDVNyG5wUN1s9b8mVR3RxuceLH7doznsgeLf7vUkG3ScrAbJLYcfxX9Tx18qRkF",
  "key4": "2sHwbYodU5cG4aGiL4wf2JF7WpjaxKs3BqqShyDZZisNM7x88kHTixSpWcgp7EpiqKPsUYuVhAq9fo1fCzsD8vCg",
  "key5": "4agKTNzaUujB5GkQ2y4M5X3nsKHzfFPf5dd3DhKopM1wvZu8GeC84L5VSruM8qgCY9rSGGJ6CiYoH9VyaLBcKjKU",
  "key6": "5fKScHkzWPzyEEHQsw4iWDrfhK8CpbAiguTQ3hN86eGdpesYMYnuJFMPA3A6P3q8iF9UCfjBGaL36nFvFMLayz3g",
  "key7": "39R15B5AGurrjdqFKjNa1HHVoywrYtgSKKxXiseCX7HXro3TqU9oWi9e3pfSDXjX3FBzPvbQjC7yhoqFYpwgjgXY",
  "key8": "3TPg5XdHphVhaaoUL1EgBcdUwuqrKHPrC1Bz31L6FoH2t9ykrYVspnZTkGLRFDi4b3iuSgLk5daMoQsDbznNUP5f",
  "key9": "3XfuXM2JVe29NNPDeDdXVtRJWgzDEskMMgvUqGfbYgHncYdtQCm4166FJfyUn6Lh4d5T8oVgXdPCwNXUafwYT4o3",
  "key10": "4HAzSm42HnJHDr3cUgQ3fLFUGgXzF6H1fWegsZsCYYmgQ4R4vRkFJx3hk8gSJ4VFh3jwYTbPHSdbaNcrFE8vE5pX",
  "key11": "3LZmhtpDpge4GgrmMguX1yNoUoDTUDDwjeMS9pazDwmcqvFy4qu2dkhuxyrrH34sy5BzZcBVz49cbELSnjibEMK7",
  "key12": "3SPxgR1Wcahm3WpFhzrJixd3xux2G5Bh9YtkPmk2efzoCV6fcLjqLzNajaqB8TA1G9tMfCwQ32fqPoUNP8PgPVAG",
  "key13": "2TqKNBXN5QkYWWErzqNhg5m8qrV5ibZrSdFapYU5iRAH1k15KAUEFFCyrvPuUvSrWpyVXRYK98EBknxgZgGwa68M",
  "key14": "2PKXVeYXrLKHLEAzhjYJELhf2eJ5Ac7vVobyxCEzohykoLBYfBVZkYQGPbEZHPtFrs53jksZHVK5JMgfT58FMaA5",
  "key15": "2NxDbQ1NDtUxoyvL2M9pySwFyveVRHAYtLvmGJJTruyrEx5AGaEUCQUwE7LvTuZK6mUdDahomzuvJUhPBoHTu94j",
  "key16": "64QULMz7i6aFb8cBniKgzrUz49CMnuFpX8EaxPKKH4uQWSKsSPP6GjDWbvfyVg9DprNJCKfNXiPKSyDf5oc2cuyY",
  "key17": "4EYTaBAmtJC6fZB2WpjDsy45S9Huet7biG3sQCnTvqMS2Zky6XBro9PTc4EFMvA9WYhXUGPRkyb2muEFqx9SkDA8",
  "key18": "2sjA57sm5yx8ovWFjtDYLnAHRx69SxUdpYvBbZ2QrxJWqpyETYd1gMm9HB83the8ZVnCEuDvJE25nDWmSp4pqZFq",
  "key19": "2RJ5aAgovjZotoR1T6skHBXEVvandma3pA64td8q46g9575pfqwwwKdpQrf2UZ9JNa1PaEmk68YSJiYyW7brUv9k",
  "key20": "3tgm9WYaiSp6C8Wom2A6FHLLKyhe8BWbQ9PXPvXJQ2Zu5LCyhsz35ytT6DURahpJ6vbGqV35Cvg94JykztCvrJfa",
  "key21": "2jDSBQjxJ7g6ULKXD5M53TRwyBDUMpC9az7q28PKiLrLu7uvMNRiNkqNEjeDQ69CYoQGWXzqLs18Vj8yz7GCMugH",
  "key22": "45MAfAmVva2atCFRHhNM2MaJMbFF9NnAxQrjvYQyKJMfN94Bafs7xtrMAZQsfKpFkFXQfxAHkmXzqYEN27w7PUTj",
  "key23": "65i96tMEvJX9QWyt7G6bPqNMYTg4uHE6K1XTtSBcfS8NaFM2zYmCHaktaDnfW2J1Ey7CRerRFLx3ESgT8KXoW5od",
  "key24": "61xX1zKKbzPEdzXq9q7nJJ4C7YxBKs2zeD8AcsWCYYNxFr9k7HuYRgUaJA696kXpxcfPy19jc7ujPhYmzyNA4v5t",
  "key25": "3oF8Vg4aiB3ZgxBBfGpbLZJJcMVreMej2oef1M8dXSJR6s5fHd2TLgVWjiu5fkb3JNbt2DTZXSRS7nkKCYnQrUSJ",
  "key26": "3BKbNfkNnk5AVNLxxKqc71xV7ohbZVHGrAaEET9vz6XwsA8n9aM85v1XwWKL41Z51VNSWsR1fkTF6gFWh5pCkFvh",
  "key27": "25uY2bPLooz5KyxqXwbLzqX9mtK5196zktndYrXvyBufx7RLESp5GyRqFJ44Z59xiSwkra1Sxff6cG8AsYMRJjgP",
  "key28": "4CF8sNr5tVeGHqqrMmGrE2xsit6KRbgdAMmV4uAURsB8uRqP7cdkFMCLKDN4ydeGPCXjgigXc56AM3MvrP7Ht126",
  "key29": "4N18zS8MiQY4v3UyAcif67insQMK4q4XAo3U9jNzU5Y3ERzd7JQi38iwVm3dBbbPHrijGtZqTW7kvSJyEdM7kr8R",
  "key30": "2Z11wDZYh4nVn4A5HsuNttfma4oZ1JXCwpDmTyVkQBKmP2PWHmzntvTPcKsCSJs9QcGoZvSVk6QcxKSXzE5SmYd7",
  "key31": "3K7Mmfe3wJeXW4Dit77N3Rnqi3akbQVa8zAUYUm3tFM9iurPyPkrS2xGre9EqUJEkEjADp3QtcL3PpDjvL2yoPCm",
  "key32": "2WrV1xexvks7NUnc1XwYKr8CKmjCnjvfbwuFxZD9LcKQfohFhYfCMKoJ4xnN44HZ3agKq6deL2cqjJkRKtxvpcgj",
  "key33": "627hFzWAAGYit7R2NzeysYoS5cqkKeZMgLbJua3AB8KmA3UXg7YztFa61eV7SkFfQjzGjgdvsZs7qGmxm9o54Xeq"
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
