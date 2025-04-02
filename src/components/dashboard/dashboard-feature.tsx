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
    "4YP6NTKNHajZBXa7vwRrkBnkXihRAeDupzGMGG2UEktY9oQes8gJFbjos7Qa8ptoemzD35mF956NMpmES2f3JC3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qRRiE2faRsBZ7MwmX4p9fpPQw4ZqRDZQRVYhFLynnrz7xgfSBNU9jrQjUjxPXWi3zVqAMM13CyLaMWtHJyQrbX2",
  "key1": "vzLkrqzJ8Aisx4Ru32ob5VGTwgnNbT4rYwuYAdhLzXVq6uFbJzVDwjGb89CBj6YD17J3ZSr9CW6jJJoTVBxnKou",
  "key2": "2sKDxzu7pRPnGJg2QBwSBpj9eXedagTtVssuVCNNFuS8GARqU3STeEXBRcpFrh8LDmVAQo9GhwdE9Ma3aFNSHKrj",
  "key3": "28Pc4iiTwwAY55eXFrGsTWvo1jnRNvxVEZ7ukXMz1xn4KaX3FhqTvYk34N5GrDvtQvSZxv8ZNkCWUrxmBSpoDk4x",
  "key4": "2pZAKy4AZJUprvWznfisQAvtvCcyYKsGGvu7giSvMjBqf8bRKh75oiLxyJvMryXCu6BkAe4joFCBEapdAD2eV13i",
  "key5": "5wAhWERmDKc23LvidTij1TgLse4cVMThK1HnSZ2d3atVtcQsQkEuUwREJWDTYFU8zAmsviDqwk5LgNKPZaFZ6Aft",
  "key6": "5T5hzPXNcehCZG76PKJGLtKh7WeqUSNWWSHzupxwNMiiq8XpW7fuRgyqXQrZfG4CJWdKgHQpEBSBA44wVM2XHDAy",
  "key7": "4kUW4bgeYmuF2cA4gGMReuRKcyxeikxsGfhpLUfTYxYXxQ5eRUcaZXChBKFgUawBShYipNVfBayNMGtNzUJAgC64",
  "key8": "3YzdzcNy5wHLZPHPgF3PZYNTqSWfeyysxA9X6EpdfnrGWB9e9gmAkWRmWPuoV8iw3cLonAvMErTAVpmcpWBANKvR",
  "key9": "4XWy5mHmoiArD9mt6o612sCNFXGRpWKMzdYcVgxdRuWAbXnjs6rtgg9WCeCLgffoY6Sffmmjrzz5U8rdSu8Pqaak",
  "key10": "2HfDkL7fspeH6pKr7SLv1tF9RJkENR8FixjdgTB8zNEL8Y2AmauS936jNQsd1Yux5PH5HmAT2dJGi473zjCMErj8",
  "key11": "2WUsbwkydofDNmWzpAKQgADTQwGYtD2iKYPmDUWFATSVdS1ZEjwPC8A3MYWzfgqHWasnBvubvymmRqCFoQwxm8RK",
  "key12": "2SFavBPmqQYoDa7zozdJzxWUdTChKVHhHte2wCYBUQLwZL9Jk3jfUnxeuer1fXNyLPHKtCS7pd12QE6ijiRGsGzM",
  "key13": "3VSJH9L8PZAYmTRb5tLNVQwLXTTs876pvhLMec9RmvUPEkDRBYRSFUFuBbjYV1Yf7DJDwGvkkbBp15TcjDgmj75Z",
  "key14": "5jAZQHJ3ZiJ3RGU5gK68JaiuaH9b21MwHiWkGVZqxLMNTAgRSSKKazy6pZvTXeiJN9cH3WeUdSe3AbvbkQvSXiuy",
  "key15": "498GALLbn5t3xdo5cejMWH5QBvynS1iR6dvaDuQ9rBCZELvg9NpoMtuAKRaAHvMmgYt27M9rD5Rmkiwr98K7R6Ex",
  "key16": "5twcdjpAv22Vpuf4o881SjStuczVPgYSJgmH8u6E8b7pVjhWRvb4d5wVo9qHBCUVFzyi4M8Eb2MEN5hSFw8BBHdm",
  "key17": "4BBRCxsLwEhDUJxvAC9V8mCtQXxYWGaKmq99zq2g3JAmSU6rt4CuGpvejkjwrEBaYBfwSVxt4PYg29sycacTzUKu",
  "key18": "PuPXdkeLXEzzoFpxYYWUAFHbkscXfJsRwF9JdTvX6GaM872ZhrEXTPLuy1i3Vi8Ee2nb2xTAbf4XNTiFdfFMSgx",
  "key19": "3jgUaktbZcZ1eyhAo2bvY3HPDdknJ7LZN7Vgrz8ZacxbeegZ7FLrJFmT99nM7mbBuUQ7RXwSQKE65ZXik63QHZfw",
  "key20": "4DrAitt1T761wTTzZZo5bT2vgeFTeBs8cSfNdYZ42zL9cruWqsLLJGCr1UkBgBALXdvMEYnmc96NCbA1JmTwpkLU",
  "key21": "4RbRBybfhxWL97FdQzmb6yiEEgQ6ThCQ5EK9cQdMAeTqGcS4Sev9rUBnP4N3mgYakgmzz2ASCcVkKjyXSMoMT6ka",
  "key22": "2xowvaVk67QmxT9k3nBfFr3LoKAHabRfZybo2Lj2MhWwx4i6ETCyKikfkpixvFnx3tsSy5QGYaJprtP7vZQwvLXh",
  "key23": "RTbWBLGWuZ7D1YzfZhAdLXkoyCPXmku8xe4PDMjKmhV7TvG6ytVkkKxY7KuHCvS4NsC7WFQsweMC8Bx1SvGXpKm",
  "key24": "jkT2YhCmUzroUxcXxXL9N5H8d9f5k46MB6HiUNyySXqas4gs6TWUCX4oxUU9SB8aeSaera75BfYP6koWj3Gnq6T",
  "key25": "3JRB37vqZDBgpCtLzL8MHbPvwRXRU6hVuyY46X9LQRtFtnpBJvhLseuTr77TyTis9GNLGJ4bRr8e7MARgZWvYuq8"
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
