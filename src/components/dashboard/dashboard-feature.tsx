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
    "4PtkPf61uKV5H8h3fNThpfQLJeReuguCskCPZSSb5sckdgnBGzwByjZEXczCbJsmJ2ZYWQoUeAbF8oycWVP3bNxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bJuuNt6TwYBpLTLDrywoVwSj4WibWWju3RkqH7vS8pP1AfY6DudzaJLwuqgR1SXG41RTpShpnayRqqBJbMiDQNA",
  "key1": "fP71tWuPY49pj1WvnuQqYhqQ4zrqNEZ6uBw8uAh5EC1Sex1XxngY3xNCnad3hWjpK7ZUJeqSYepdjP9cN4LAaa3",
  "key2": "4RrwQnZUqy5sMnrMrWg7fde8Srqo6efHBJ5aMMRS1gU5gftwrYy5fLTQtngrb5t1Vp7DhxL7sZNN8EBd3KP6ochM",
  "key3": "4us5fVyYhxjDg57uD9Hbx6VJgj9zvXB5p7UC6r6tnNj4UDVku1PdcykyjAXNVGXJRV1wUcQJbUfviQL6oskux4oh",
  "key4": "3LioQLVMU4HmHUkj9zwTr5jFrGJvgVYWujCMZgRcHdzmDpJ5AhS37khXPH8ZfFoXBPu1LnhkAQb2UUYf2pC6JoRN",
  "key5": "2raQnmCWTRDNgbQ7TUuFy8k6FCJ2wumkFkXfc15WD6w8wxqBKsXuRvF7tprov4Vgoya88cRSUYAkaYnQyWw9hrDH",
  "key6": "4g9ALufkrKjcfdYNd4CC9fJPHstPfLHn3TriMkEKjPv2QDmuPqqVwQrSbMbXBdbojfPw1mzfKECprKfEzagKtsMc",
  "key7": "5SKXqm3RBd7JAg51QGq7khu8CnKgoRa6rjYSNBHm5jSDwKu9BXzNkFEMdeAHHfiPatJ59tC7pE1KDvha2LJ5VKwR",
  "key8": "5rs8pGmKF32QWY55kJm1nEzxKyny56qw7YJ66va9rYbwDA4QDEgK6pmvC8dyvEHAKdUoYP4dkaWTBAbhdZYmR1ug",
  "key9": "ZMAz75BtACFKTAMAuAMv3UpDRNVvnXdUM4FaveteVvj2QhBcnALw39tspbPgiC5hGtmpMphBJAUZeWhVxxXLeoz",
  "key10": "4eVa8fDwH8R1JPgTDTEgBeGHcUTD5m8wHNZYLLQvNResFYTs8jpQk32ZcUY6mFZxWb7Ph75yB9T7cdmogekKxT2W",
  "key11": "4ZHUxEQRQW9n8duyMXdPtgoV9gbJKjcfoBqZBwCJu9c9YDeidvGJ4PKUPp2hM3JDPxJSixFiEY4m7SbpXMvB6FsE",
  "key12": "4Zk3DFSnig4g3AtNJeNGo2Vf5SEH9CJf9RWxEMCBtrSV4vdQP2uMjbyLNdLPmoCLzB9xhoqDfxv24iF6ik5HUief",
  "key13": "5XGipR44REeLnD5B5HSPtuxzLssrLjPnbgajJtTXV8jWewRK6NrPMJUZmQptJnjYZ67e64V5dzdFrYJ7vnEVEVeV",
  "key14": "SdDPnpqTRUq6GiQmzKniTuu7iHkwB1wibW9FMb6QjZHA8RkEqFo1zu1suTTFXeS8ERkaveFFQMmz7kfRCLs5ww1",
  "key15": "2v3D5myV6jBrgVeeL99NHB3bVMqGRQ2jJSD1xZtAvCtLurVhLq2T7idfPCX67UhKLnbK29m1bwZCSPzBHMMa9hi3",
  "key16": "4PKkqoW6DdZyvm9LJkrSvZG9hADNSjSgqTfmkNVDkaGBe3c5WNLgnvVsQrpSfhQDnRWcZNYgj9LXuQgw3F8xizHH",
  "key17": "5XWK3J7GbDuuystzb6jbpAcceP6LGVZRdbM5RKUQiB5eRDzvJP7UsGsLF7veH1Q2KBEJDijRatxHJBnKdj2WM5iG",
  "key18": "29gz3MvCMg97yb5hcMPzn9nCX5kBHQHHaNgYZskzPKCyGiHajpKuti4HW37qakMuRoe3Fo1uZkVEwFm8oT9gMTkr",
  "key19": "3LAwdzjAtZLJeK6f5hAbfQjjFc76LEdgvepVuzzrXGFvDBbC5ELnJSXjaEKzuiVmyYmxwzhreQZmfZsSfVLB3doz",
  "key20": "4UzSz9HvRLqpN1oU9Bp4CDpm3T7qqPGuPtNpa5G82MPUrsNS5g4VZjwHgP4zgFTfGiV5VvbjdJLc8XggJSzJ5eQp",
  "key21": "2XJgotCdJT5pnDXciFA74H7HkdiqLrZasLNPy8SWQg2Gb4LeH61C5W14SCXEA9q2mz6GwmwyTaG51PHUF4ZyuUYb",
  "key22": "4gMoRkQAtnppFZBhTvyVHow6ZYJ91j7iVQAzDc6EgUaqbrQWt6QAHvfehLetCrXFkLECnbXGw1stSTdL4ji8iTVg",
  "key23": "2sdwgNWgZT1EBSHFquZzttnL3RaQcWXj86GpBfmwLKLpskZG61MqXj2h4vfZuoRG37AVrrUR3qXCFL7PqP88Txpv",
  "key24": "4UdB6jme49DpTxBga4pQmJNH7uuDJu91DYXwh87mi1WAWjgb2SfWXxjJ1tPdHvBgcv2gH5d1ewYdtKxjn58Mc48u",
  "key25": "EuNaM9CDEvnKQUejRRevjNkJjbD1A3Be1nDWWJ9rPicxvWKu8xanrPB3kHViU2hZnRdUDQAujxdRKV5Dkd4z3h4",
  "key26": "2cVtHeNJPtGTAbEckRxhWpaJv5HCqnkDh3B9SNRR7dDiBkMUbyy6dPQg8o4RemJz585GYCe1KmF4PykwXTijWBDw",
  "key27": "4Cv8ftfc1cQkVJbRekiy2iXQYeUbDPBdwvwSx942AhbbNaiGs3WEkTNoqfJUL6VWScYRyJzXPNfmQTbTdbE4cHpD",
  "key28": "62D3Jv3RzFqk2wZesvSZVyBg9Dn3broR7qMWrB6vmuUW4vEH7AUHo5gaezdUBb78AtxzZY58xLbUDcvs2bKR4Ucn",
  "key29": "2pehsJLGu1i2wDgfXZXiYo5UgpxvhXV85X8vYGBmghGyEq5KVdiwc9sWibwJ47q59vMt3LABjBEQAn3w76bgwR97",
  "key30": "2B7276kkh17MjVW6kE885wK9NqtmtSiLY2D2LT3kUZeWpuSj3gQcw8WGXb5Geh9cKz7uoayGgGiJXLxTdSQqmkj6",
  "key31": "3YXR3CYbf9rp7cakYwDJ97RGYqTzwCExYDomhquugXQcJbTjqP2FC99XsefwCXAJkzYUybbw9wGkDTPDthLZixYp",
  "key32": "2mLy3xuDJUbrYi6TxrVYeTYBfS7GzmvLaz7R9j6Y9ENfVG5AkvFmPktnQG1XuK56eNJToRY2JHfV3TnE7ZXYuS9L"
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
