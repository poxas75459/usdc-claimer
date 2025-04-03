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
    "4QSkLA6bGdhB4pMsc1gRa8zvMKL7fd2Xq1GMtM8F8hqKQVD4ieCLGuiwG9RmtfV5jsjguTtvW24RLfFnZb413XDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C9965eyyzMu5W9KTzqfcFw6yCbs2zgBWN2eNYSCJZipESYNg1MCFo23nRZpUtB3PiPuQ72GdechjDwEqkF5KV8",
  "key1": "YHfaq4TXTh8zhxyhvnRgbFGD4Zd1LbWFBhKnX2CyzJi5DPM5uHi1VsQFyuACWhoqs87BVqSdWXGYJHHk1k2iyLE",
  "key2": "XcQanFJmHThLfcqUqaAEAoZMZhhsux6KiroaQCDAAW6nyKkkQFKExdxByXYUmhNYFq5F6Eo4QmAGvnLQiBLzqtm",
  "key3": "5ZU3XRE9iWb1rYXnvkcZsLXXvyu6fsyfMGjCAizeR7nTXPLv5J8g21qaSykM4xBskVwsNcUbqxztp9CNZGc7EdRS",
  "key4": "5HPk2hJU8yhgyXuwZh5xvVJkixeB7wCmLLuX9wDaYCA9HtRK8fbtyji8rhHjSvqtPSdPeJ8h6zG9sCyeAWjaJ3TU",
  "key5": "3q56mg7ZPh5mWvt2BPjmaZzNVdxEQkAi6tYbv4TGb2vR9BuAGJoy5HPV2hE77bD9ZFPZ1YMQBJooBWK26wqDykC6",
  "key6": "2BbqgwFfkwJeFQAg5uwH6g1esksLN5CFqZQjmZzf3sywf8SPMFB2d9aVmC7u4Ye7A6y3Jq5W1VjiR2F7SUKVMX6o",
  "key7": "3G2aL6EwfSRQmYCGisjgXAmXRP1fo5wTw4SAb2mS18SiBY9Gwz1WvonrZCyvnDLrJg18FsXty1AJLrbSn1nRzq9Q",
  "key8": "2nMQ8UoQcYPgDZmt4emJ51DRavWqjGBbAQh5gMsiKTSktfQyvWEVya1KuAxrXridrAAyTHNztj3FS8GemLV55Bfp",
  "key9": "5rTMqJADewyYRpitdewHH3XD9ikDeTVDfkgr9bxuStZ5KcY2BgW8tPnwvaZxCx8pvJ88Tc3jKoNne6Vm7tSmmmZY",
  "key10": "2twZSYLXHGZ7iaWAyWuhuU4oz63EK8Nh2koiDMLgPo8f5uXPy3dqmTS8k5yMBtZZiePFE5Ejs1XDKCd5DqJMH1TK",
  "key11": "3EtzTUEoRFsMV1yrpDWoFLmZEqJUPAysqKfsFVJ3JyxzqLcjbxAYqQnTQdyj581CCDTvL7PuJSP9FadjGc2jJSqf",
  "key12": "2tY59UJi4qRLh7RTDfksGRz7E7LHugvQbVGnVaXVi5WrN7hrv4oW6rxkAoY6S2WsJ9wyaGAUdcQQfJdozBqXyCpV",
  "key13": "5QLjyYJF6MeWp4JwV2BJ5EqDMFPMJ29Zk3ciDyuamErsrQ2g8D2hmML55wNsThYj9J8xEootTYPpeA3Fqtu4LxcA",
  "key14": "xMBto4w4suW4vLniGJKJbG4nksgiwwunDJrwvodD9rX6fcnvycd6PuSDTfqprSrWzCgg9yGmjvvM4xr2jExW7uo",
  "key15": "5SorY6cJTLVPh4HNFFcQofwfWdyuU3aSizaXjDhc9M4Co9kYgWESuL8vsj8gNWzUGTj3TSjHaByFpSb6PGJCjAwA",
  "key16": "3A3P2SsXGgfhwRie4SXsgZuKAuWDJLxbHCb8obR4mcR4qjRFVMnue7E3wWpGmjwJBjJMAhHA8buvNSCghKF5hM8M",
  "key17": "8GV6Uxcx5QHjitMuwdkPar9dTQhVoTsAXtbeu9iuCGEthspqc2hvGnUc6AWjvo2TUd5YLLstAatGHWx8wWPjRoZ",
  "key18": "6M6VCKrg1b1Va6HJThix7QLPKut8X96b7JZxJzEehH218bLcFtYcztCh4CUh9m335jJJTFKHSYHeMhyoMUDgHvj",
  "key19": "V3aFbSjnLmeJZB7vQukJs4bLtULTrwTDK4RWDvmtyvrgkFkSFum4Gz3LegwHU3RpADEUzfZnDKnqMSGSwab5728",
  "key20": "2AzyAekaKJveaV6Kbw1NKmgpb4ysViWqdCpUbfgPfEXJ77h9CXpTMhJeTuZwYrzLZtpbjhS5jxKQLrUQzL88kdP1",
  "key21": "3YD1sc91E62H2aPX6AYC7roJspgmA3e1XuumzFws8HsBhrXLm9UqF6fzezQEXif82c2YjQrDpewVnDJpTHszDTsj",
  "key22": "5tRzdvbjwKHKD4SggyjSNh6H7s5K6rdzHaHtrRJHGp1six3tKhKXr6z6bTKKdcSt4bqZwuQKUWHL4bnSbxDqoAZL",
  "key23": "3zUWRVV2kbGFpuQZzsew7T9voR5qtSjgqc9GCb1Kb4PhyoADoFFGA1qSdjR5YEq4YkqFBnFzVFiXsYSNKUb8sM4Q",
  "key24": "4Z1QtBN3cowJjQsoo7sp8txMJUcTQXAqtP1D38FbrR9dkhwnpLjc5kwDQFq2vWUtsgf8ebGTjKEvEvf9k45TmUiS",
  "key25": "PA48n9Dw5dD4okCnXNaNP3ZZQkrxtbtEaziTDssRKEWd1qUysWmaksiKg7znV1MEhsuum6aAm8yQsBcrXqmuqGU",
  "key26": "2zZUz7WZSZbm2MGvbNaDd4ZL2jMyrr62Lk8p4jDpm1ypWh115TpyGQrSAaRTMMadH3iP93eyaFibyNKqKZvVkNPy",
  "key27": "4cxRs6KX2DxZ4gcXqrB9Tqz4sF5p8bRsNijbYRX7MjZaNagMySbF8uHg7RBtzEEoCjNAhBGCuFPnyw5BALkU47s1",
  "key28": "6384JtqpCd44qgF1TSa5EwZhNj4D6Umup5pS1RCFfiLiqBiAUg9KwyC8trjcQyVsjMofATUB14X4i68e2Wm9nuwY",
  "key29": "wJUzBNGKyXiwFdPoTK7FzbmyJgxTUBLkaNvD4vqBWPR6UCxBiPxbKQtQQXBYfAcUFjUU6a5unLKEWsXtQ2Xg9oU",
  "key30": "mGUVfsw9W8BdYurZxkD2VkJzzztgU6uuT7Nhecydgk1px7KAAHdGWwv27rQKc7Y2ZSoYExuZsVxhj6XMSiHFwsm",
  "key31": "4EbFTyvENqoBFMc3fikxN5pT3M81zKvKp7Tvg6XsPWqs5Qg7CnSCXcWkWZTS4RWTsAVmqaVmBDgkyByz9srciUyz",
  "key32": "AEjyaxvk11Vooxk4Hhi4rJSFGikSe7DM88tRqMXGNy8jqinXwLpPtZNnxD1Tfr5SfAWLgMg1yRceWcoCnVXWpTQ",
  "key33": "4JsYNGrScm2gssYjFu1t7LzaE11ggSSxEZt1jaaTnoZxo2jskjhYJZJKFAQ4PeyBtAN4VD26JHVPUxmHvw5W8sNR",
  "key34": "Doa7sZ6eteJ8D6qabb8dLN9oUZmYfRimWXA97ndPMKKZhFPbamz3yJ8RWJNqiEwxzKiqz94bt3RE5ttZrXWoxjJ",
  "key35": "3LGRFEW6DYq4cfrG7WUmzRxRuNJGZ8TUYuGepgAgT4HGkDSTnx3Yw9RNoeg4DuQRNLtusWYPzP9abeFYq7mv3SDc",
  "key36": "2tGtsZyKgQZRJh7WMxb7HZgTddn1AjVCVv72rC9ufBg59Jzg9FcB2kekkPy6PN8oC97BmFiycnoPCtvcLFgGhJ4M",
  "key37": "5dtisEcnPVSh6tKRQn2wwotwkcb671RroQFfxBVpcGcgT42D313LCZoMZYu9uRroatzYA4o8qrMzBvDa5TqFomC2",
  "key38": "kNy56DjNHNZEdTqcs8ztbETLFLohDYY4bCWejnw9QuU7ijAGtKBh4u8KXXKeMYXv28QeNuthfdeDG7FoXhN55rR",
  "key39": "5VxAhNye9tnY3SowGnihZA9jmbokJ7VN2quZJtEignV3ifgsshxxzm5P31H6K87TWGJoZAfmh1t3fUBdmZCZJFC6",
  "key40": "s3D8cKzz8Ca5DqYAbFbefY4USnehT73t6PYfUBVu1YHRzckr2t9xaMxRBmmFdKsxRDoCxxLp3HWGvsETbd4jvdt"
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
