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
    "4Rbpzxj3KF3cdr7MdZ41PmqQVvFNxK7zMCc8CjjV2WZ73kRTX6Vpucacsi1SMD4oj7ZjrtF67R29zrjeat3eB2ry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qsuPvQ7pygwCiUF9ozfXn1QDKid768nizt5gDuX3tM3YkYSX6j1ZG1E8nYNLk6k56YfMfFtKVfLqeyLdGxnL4z4",
  "key1": "RF7RKAsWhx9HhBYWMsHxWfgTfVkcpBHFH82K94rXVzuM5yKkEXHkzmHro1q1w3XAFcSRf7S1Ao72E9abX3vcaMG",
  "key2": "352431u7ho6DCNFzekZGH17p7iWtgYZY9pkfMdCLk3s9EPUpWwhq4qZDu2P8FBrFwAGH44r5rzxJN1d8hhznQLz",
  "key3": "4ibYPUCWhdRbwBvq5P8CiYp3yidg4QFQDwt4K31foaq72LBY4nV1j4YvG7BX2Kf4kQ1gHAr13kVjg1ftEQgAs5KB",
  "key4": "ByuDoxb3Rm59UboU3nPDYjFAEYTySSLE4CqJ8tbSAdhEry6D6JM3EqW1fZpdQmeVDZtReThMvnQFGw3pBRrCwwd",
  "key5": "3WoydrWFxzjEkD6x77SpY1NJHpQotpXxzNtFGbpNPJ2Gu5T4icUtTb3YeVUYTV9u3qPZwruWRzLooH8eawL279mG",
  "key6": "5kovi526rJQ7EWJjxnDqydhYWA1E5zFNyDjhgaUCdqV2RqwV27qithBvWzL9TkJBNQV3qRephFDFjh3h3MDSQgtg",
  "key7": "dNpu6e5dYoyQCxfEp7p6QJzcXUwUfvJTstko3ao1Eza3UmW6svb8UX8HpAj4ihVfK6EdyBFH7zAUru4ZHZ9Sb9e",
  "key8": "2vgZy5Jqg24fnQkSZTQdQupn9PzE8vAav73xUwiCyvSt8TmCKmGjEyvypobzVZbbi5yjCpXkx9BanrRiKQH5SSFL",
  "key9": "2VwVJYUaDxatixQ8FKwX12AtfGAf876QjGUHsZAmoG5TZwZXwk3LnvYp9FzaNZjygYDWbxpMHtL2J6fuDUXzT2D5",
  "key10": "ZaK4SQAwMmMYpzuzfB2Pfagvb5XxC397CcBRsF1vpsyaMv89YQNQZLrDx2D8LVVFyd2s7LNyytYhBFnwe2a3eLE",
  "key11": "4BkaijnEDiSeZNKCSGAx3rfpwm5Qkbgf1AxWkhTTAAh7ZLLxS1nsmmfSLJTCL5foBuBsApYGr89Laue9cuAg4sWa",
  "key12": "5vnRZpX4L9YnmCsC7UbU5L1XRjCGrH3PNUd7D5xBFpdqUjYDfSMX29JyBnBLnqaeeJr13q1q6CiRxpfr8uYM48Rk",
  "key13": "LBdTV9WVj7dKh6N69gox416FBQBkkFsdTNT77zjUcK29CMwGyyBKH9bnttTZRdSS5pMJZV9q6KQugS22cavSMg8",
  "key14": "hocN94UPh173AGytegDTA6d7Kzo5QqTw5NE5RttMPGRYYgEPDe5jPpihg7PU7YEjt1dn8axH4q9hqyU9DwQ2fMi",
  "key15": "5Tq3REoa2M9B3RKh23uEYKTfu98raPzcp2sXpZ43fMHKmz8vwZXE8poG9FzCs5dKXKCRoFF8Bno5EFbiTbHEx9zr",
  "key16": "4Wn8BcMKoy4UwwmWpbicwafSdfpa9SgrMJJc9tej6jVZk3MdpZtW3q7LL91ZDA345cMKbaNgaqUjEA6rWKLJyowJ",
  "key17": "5WqkDnpNjBDoUJt7xmNd6LmVu3WtZLauwTkWg65jeB9SvS7pdeQZw6XGPN1eg5zF66qKxPZeG6toL3BsT5PJNHCA",
  "key18": "321citiJtbXaJnPjN11Su7N98hPp7rJvGvpxa5tdmwRJTvr1v3GXYZ8QKBDDRE7uz2vbxziC4Zx9G2sk9izgs3UH",
  "key19": "23g83GRmypgqdMvfbvoNWxoyPrvgbs3JzSREMb9dBLRvaxQ5FghtkR4Kbj8svZmLT3vvwB1nC29mnMgSjUGhzxhQ",
  "key20": "2sesRafZ5G11PMHSANA7JTqNSf3GgehBBthhdGwKnJa9cQpEM41iLs9EwAxVb2Svk31XX9makWtFYbsReH9NXx1G",
  "key21": "5ND7fRRZk6wuNBvyA1CxEkKJRXNYUPWQZ74NAGaN5RdeEYXJTbZNcYipzF8snirqvDxHK7qAt9CkrjMYTTXmkq2d",
  "key22": "kNkWjahDkk136vHeKwZ4KsJ8HoDweYggZwBdvhkbgo1n8Tj4nYoPoEgVWB2oAzvrNZ4HjRFKBTRTmoJrxMsx8pt",
  "key23": "3WydcKCQYrSGETfP85enLDH6DwSUXPmzoacpaxssDDBs2w36eUR1YkiXa45Dt2tM4qMctmRGehGGiaETDYrptdPF",
  "key24": "4TwsJFZXo7PNNuPWyEughdmnogJ7CpvJ8cFEkEjR2w6XWn1HVJaMDNhA5yQVmVNS4182qsTkv3Um4ka5Kx3bW24Q",
  "key25": "5BYBNrUKR7NVEZTwvW5RXPP5cvjzJ7Fp7SCW7Den6jDnNS532dGiPP5YCPktVGWYQGmBB875fsmezjvDmCrH9DMh",
  "key26": "QXEHzMphrrrRyVSxPze9fKn9RKqPkcPvWVCE1tvSJes5boWmPoyJ8RvxuwGjCGACjpm21EkuXGcqqERh4V4Tuft",
  "key27": "RpPNbrbjKjEHX1VxoBNgXeoj2cfWrToGcuJPVQRRzKXYwjiDuqBmT76eowsWSmdLmyStEzkRb7eodiKjv8L1BEY",
  "key28": "Nry27eRxKSrhXMS4qmfhDLswZJuKfBhVsrBVVwaCgjHY1SpyzwEF6HYMxN1jvhvPEEgvoyVt4cWr6YQA6zzjDHH",
  "key29": "2wQMbz3uaTJAtvM1zPywJHXfiL2HYkvqUf8xiGKSDBa71XsJhPg2JSXshLsMo2xqRWmiDcMWWVRwzTJkaaL52Mui",
  "key30": "xPScKaE498vRjGTEc4tksJpp8x9J39NDwme3H31qBnGfgBYUGshVbqP5bPq5kk7XVsksmacyDRews3FgmJ6aJ2d",
  "key31": "3m3CG66dkJpoKxqhNQSRwfqAheWv1ZDWvrsUTGUB37m4ykEmyB4m6Wvii5zidgC6rxHFGanfmykKEKHTfKxLy7py",
  "key32": "jNPGoyHtPykASLx44DudEJsWyqNN3BZzAx7iEz1FEtisHTNtNv1kNJz3iL9pvLmuvvxBX8shotHUEwMBqEzj28X",
  "key33": "P9f69kmWtmsgwpTtx8JEvqPSMZdUSK1WYp6uoVhucgNzBqmVTKPKjr9mSz1Vv6fbhzyq6vB5xZyGPg9Fr9XsKFG",
  "key34": "5u7hpkAXDJc4SsZoxwT3Q7sxYv6NFwqrtZhRuFhUxQnHz3cnU4vCAjj7xD5wFaEGwU6AfphejwU45uk2Kcea4UbG",
  "key35": "5GaiwvfNuvRKBkRjcZmGixvbg8r4QRowLh2y2uJyrBt7PnY8upBh6VMebwXwxykEDfT2jPbBcvdqSt4TjbghsoE1",
  "key36": "4cPMXWVfFW1BJX3AteuhR5mKzbK7yGFfwppeNSh89ZfykFimeyqHkESrGTCVbwYEEAgMxhqsnqjiYPNCQP6VR3uZ",
  "key37": "4gD69Vmh4jXnutmuNGm9TGzpuujarNrcuibtNdYmkK9nYWqdny1nr3x1Nmhho5WtUNDWSVhWKpop4YH2qF5GgCg8",
  "key38": "pkZ1uaQ5tobat9HkdKCReSdbo9guBTtJ1xGwW9H3cWzS28QU2hhwT32o5sdf8eaTnGMhx56ehiVzUgW55MQMRhr",
  "key39": "5saSufLEBTVbanUBVmGdXxcc69f6oJa11YXdAEagUBCyoe2QVSmoYFx8GgMp6mnC3NtQ1GMgodB9FeDg3tFV83Kt",
  "key40": "2Zvo1jSYAKH6fFpB5ZupSpbKYrLRDZM6beWFLJcUkiSdznA3Gb5ZfFgqyPHa1Ew4gDDPkSFwVePqqsK3St8kbjHy",
  "key41": "2fRhPYs7CAkNwewDV5pRGs4peqAXSDA1TktE7NMSLBR9gddck8Go6Z5pBLj6nn4zUCDnT3seKd8X1Aew22xvZLvM",
  "key42": "2SJR4gx8Jp6enokUNBZdjF5V6hxN9q7Z3H62t5kuV2eKQ6RtTvyQmL3H64J1tjG3u9NdteZQ2oK73hqcC7JDHJ1Q",
  "key43": "1XD9L9mwxNMM8Nsm43GhZtDSZc6BUzqPebQLwVCevHYD89jywWvzGEWAdthnCri66T5wfY5uGqrbnkVk54AqWSx",
  "key44": "4Cs18Y6HgwCubnkJxrnVSYgvvqc3yWLMEYz7aG1tWUAurb5VrUCjEpJiY44uHo7nDeT84ysQie4CRfNxhzJvJ2j6",
  "key45": "2sfAd73ozCQfeBHif6KES15wF1Ktjxwe88XDW4qfY1JmAxwMVgVYEaiUvb43theXEz5jE6Nktr3DwL5y1n3P7PMV",
  "key46": "3ziebs37CBR7uoyX2qYAqCwUCYQkob8H2qfTU1hrJ9cH7VUbnJ3UpHkQikcD9yCqGkpwGnrjNvJyU46TxDUk2UXy"
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
