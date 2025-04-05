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
    "2VnFWTyPLp8E9hEScnpcL1CPi3ArUXpAjtsgtvyP8ouNzdTr5uhhHWtHdvhoYuhrdhG7h9N7tMWtRpnHxY7SA8Wg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JgNm1Q8eJBGXDkAaaJGvmy9uX4cBbY158coMZq5qCb8MxLkqG9GsHL2PagC7HJSkr4oKQsuavnaFPGSoWZUbRc4",
  "key1": "5AeXjJ51HnZ4tWd7cjJo6uN4CeRYWb5pvNMGWFDU7dH7ZK3L3GbFAz6UqxGccHq3JuVG87darJ9FzoDyRHXUxbvy",
  "key2": "3ioh9feZZNus4z3EAQbr3SuWp7VaFufVJ2pgzAdnNBGd3uxJ1mLcYoaPB3UaCuEZZMrbGtkUjVsHEhbGZbYqvxMN",
  "key3": "DXsFfwajPQAS6ZCEUYtcWs74kLSDqXu7rgZjoF3CYM14rLrHdumHMT7Xe1aDVmJzcuyuRorL4j8uTMhAa1cjh3k",
  "key4": "4iT3yL8t4Tf3RvVFc34FH4ToPZwzrXjVXQ73qfL6FS5tsdJqu7o7eRshP3W7htc1JTkmk5AnaRVZFSvpwPnsSFHL",
  "key5": "61uwvxXCFh86yUDn3NKBqSvsJJ77bN4JLEwnFXT5DXS9JMurX75fzXPFKCCn2AnwT1jqGGwv7VfDt2h5FBzRkctT",
  "key6": "4Gsfu6ANReYxQDMUaMnDSepxfa2rtw3uAf2NRZtYkKWw1E9FRWQeFvkNgRD98VkajbAFcsJ7qDaAVy1ffAhjvQv3",
  "key7": "2vSSvLX5EDH9wmtnUNbV1dKh9DjecyG1bPVMyQx6hyMf9kmAD6trRfLqUFq94Tf1DvYU9D9ApKQeUK6N6fDrq4m6",
  "key8": "9PRpZLG97QzLW98UJmG1yyZy1NSFRr7CfKtUZruQifeV8MHb63PK8SRG8i3wVLYUwWZX26YAdk1Sfsp31K8oB6z",
  "key9": "5rswSMgoWYavwsKFzx13waaKDBN3XmoQN7eTvhQqS91rTxwF2Go7DVvrDiEJKU6YGWSZRisuVb9ZU9RGXPbNt1Sj",
  "key10": "5E6rbSpWLUSiZAsaUkwwf3W1wAc5jE6bnecE44CfJsTN9uX9PkiC5CuJ7Z1MHz5hX5yBwnPk6spTtQXYkyMqTfa5",
  "key11": "3GLQUdX5xopTUefAExdkVtu9ypzJ3YSycFYurQEPU6URyCWXfqgXfV1uvnAfkDQMywvs6Y9X11Wnvg7qdebek7hN",
  "key12": "eubGto8xj8RHn6XwMY5dBvpksMkn6KgaY9tQJsBADzQM2TAoFxTzo16FM8gmrzY9tbfVQQq8naLkuFGzepxP5JY",
  "key13": "TytYuzWYGJZu4QTpLCertV1MY6GtVJ3kAZ6DADkDvW5uiivJRYo5bAzpttyc8hoDmLGppwWSan3XXxHAznxGzFS",
  "key14": "7JDXJHx8T9df8H6ACSgvjvttdFniWAuCDCmxuYyM1FQACkcsC1LEZDqDbAYXXjNXAGVDohFwzKrWPkiK4RoHLtR",
  "key15": "4nJiMHKab1jyWXDGeBpwkjWY7SVqgh9R8pDWx9Sp7TH8zN6oo6Xe5QvxVioRBhZgbN9HCh9eGqAjLxNhZ8UEqb4E",
  "key16": "2X68A58WFCT7QAPQpD3kJBnoqRNrQpee1W73Wn72H9BLvsj4dfQ27UiXPdr8uaRjFjkwgwbwawUqzhUG5XP8cJQc",
  "key17": "4DzxWJLR6yebt6s5dY4Wdsmk9FGbCPdabayeWGm6k7PyhaT5tpndzaNWqzphXGj66K9yxcDERT82dWZkLav1qzvL",
  "key18": "VEMcfJhPAT5FyDvt3F5z4n91nXuYBQ9WT2fiiZqddgfhcR4RSawERyyoYNwMKfKcoUs2NVg5CgSgJyRrvtKyJck",
  "key19": "M6J1EFj4sA1GFRzsqP9e9XwJxBgSCD9NmbRmJY1YuJ6tZEEutFGgdzfrBAqmXkb3qA5PXGr4ruwgHeyzuiMEh4B",
  "key20": "4bBYdXr7uUm7Y6DYyQFP7FyEJ2AdEiUXca9UdiRDnXSxmHw3xnUrbnaHk2RsDh9RgioU4H6AYdY4xtkRmRWiLSRN",
  "key21": "4qy8ArxztuSwEWgXvdsjg5f8kby9qDUAKL5BgXz8a73dGKn5m1TdcdqDtdZcwZAp4C9LbhWYj3X4KvdyapD7VjhY",
  "key22": "3dvMLwLF8DzY1KsCzYPixzwS1wRZA5TseZSSKeVUv1PsfDweTsc6Fg8zfmuoqTTzjzh9hL6dBaVG6SwSWo8mTvqW",
  "key23": "5oHoSfam9uHwH7cy6613v1z4H2FB4yXvSo8yAq6akx8vts1GyHNU5NKEnXz2EM45N68XJ6VK8rqKmbUc5484kzXt",
  "key24": "2U4EaiZ3xu1LkeKHMjvFUFUmy6dbKvhSZevTY3mEC7PCzSLvNYvPYpbzhU5pHv42VU4QKiBvBqSkA86NXdeM4283"
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
