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
    "5uJiGBidyChUGWeQG8YA2RraZ8L8s23WX4AMsrprMuZnk4vEBbtsMRAi1nZYriC32iWWrystveVE531tASkDmmg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2knUpmimQG6d5MWbuFBxEeTtjhPLndJ5v62y11p5SZqpD2K1YtYUyD18y46fiJrovnp4hhYuxUYZvyVA3h74ivyQ",
  "key1": "4NE5EzZw4c4qbbx48RR3f96xWgBEKM1bfUbgDyKfhVjiz6TCtvazugXLrWRJZESaMocRsoV5y83sX5VoGrqGhKUA",
  "key2": "4gygCbc2F3f8PCaxXvz5ibNv4BjnJ4mYVtyRaNZcdpbL433u8x6kfHA7yzjRrwaajYRZcsJMTvYyVsiuUraL8GcA",
  "key3": "2K8WXeH6saf2QNwoGYMKTzdRrFcGLRVoQRX4nyTcdKpNBU2P3YMvxBj3aXnPd2wvE88h3wy7gt3ymEVpL99sSdP1",
  "key4": "uNZuKkXpmg1CJkWbkDmUzr75MVcAqBUHTAhqFz9mnVu5LHzGQ45S1uiK16wqrmmnxr7boxkiLLoC9zTbVP2bHVi",
  "key5": "XtTM7uxybUqDwgvWonJvGHXePmvnXFhD7R3gkkurEaKtGdqYcRw1QT2QeLedN4roWDp8D3EZgxo3Q8fFYoZBDuW",
  "key6": "5LSfLhFaXPULE5wWBw7TDSdACwEYR32UWC6XeC2E54i5V48WhGa1GVqm1sewGFp7GC5ScC4dmBwFYWqWgu1ToVVs",
  "key7": "3MQVkr2ioDRHxptyztvScrD9W3aMbFLAFWvreGiekTvmqHr8RHDdXPTAGH7zKqHXqYcLTw5agjpAiu91b6za4GQD",
  "key8": "W44dsCJcyeaLs1UD2teKErDF16SQeAKKMTX3tz77DZW8tVWNbtZt8dbhxWYnrBRCYcJgXjirUrvj8RqWqUTpBUc",
  "key9": "yZSaePJGAtWQZk2xxrxW47JQsuozsMNwfW4SdZPX7aBSpSpr72iHB2FcHkcqVUsuY8f9PwyFBcfwApay2Sr6aXz",
  "key10": "2iwhMVsuVC3CbDUwVbqidukJtSvJZibACW9ttfPxgf2PSyGHYX8EkM6Xc3vSKCfyj12eR4fsir99pHwSqwGq7Jq",
  "key11": "36iZvUSTBQaGzqkFqd5RQ7obhcHAiSLjF9vggmNoVg5PjLBzwAMUuZQo4wMgrNJBuqKU8TpVGAbzZV7M6e6W93n2",
  "key12": "5gP9z11U2kr2wKaAvq9991dXsg1N4TJcVra4uZWSyMq6vigrRQVGjTzsxwihw2iu1u1Qr8eqZUejf7Z6uVTq2WcC",
  "key13": "53Ruy3D9ZHveLNviffujutujcCJQdYHTn246oKyqVdDX3kVc8XBevzExqEpqahAEvDdhSoKGYJr6yAfgLVaNxekD",
  "key14": "5bvLpF54jRkvX8aXcoaKp9jiw6R2L6CGdKMbEWi3sMQrdyfV7Zw6vnRibvXzscbSTFp1yWEWD7wgnusSJncJngst",
  "key15": "4fuMqtbhNbTE3noY39gZfDjVvGXjLKZfgCrTwmxHCpqNHR1jA5ep3umfQWN4qSgmS4HMnMUw1Q8z4uZunB8y8ihs",
  "key16": "4bPxLgFWVHGR7XvDic91c5Lw3sYaT5Qz2k2DvkqVBxMEwkSntQ1ZAbMqC6ep6jtJb68gDDNc5uT3i8akJCYC73Rw",
  "key17": "2vV6KcSbq32Nr5UfatUzsrFUyqcPSBLYXwED4jarzcLBW9hGFc5TmC8cLg5jL1MUkrg3P59tSS4UeEro8yTKPvzM",
  "key18": "3pUyci5nXm2yZTWYCtW4v6hwWjppSj3CguVxcJ6TZcopZ4b9JqjnLHjfbRDAkjzS4DL2kYoKB9gcNjy2Cr1J7jfa",
  "key19": "3TP3HgKXZSkxdPtEQ5i3bpFCtoNLjjYGQDoEviP6AWpHZZtSXDBT7WRzf7sbqkcNQ8BqYBANZQR6JMfwb6NuKPLr",
  "key20": "7DuqZuJTeHcZv8hcAo8JdMJg24SZtshYdKGVSdJ6PfUzrQ8uyfuL75mmbPB14k8warUHoTStJZS5RoBx9nPGQXu",
  "key21": "38oqPj9vQD7qMcboAu7woCTHYdYYEgASGVw2hiRn8o6BpkPFTjzWNwJ12SFMpU4wD9xAdKuZxvehV2w7HQ5eoyw5",
  "key22": "5PFJRcmYS81AoZN2iRDTpQpqzsA4CQVtW6Q3kzW3vRSBrLCcZ52smdb2jG6Ncs8DZRMc3XyEfJ3PTd2NAZgAPCSk",
  "key23": "3h4pJE2r2pMpuWXksd8n5aSf4K1RSQXV5jbxyfb29tG4cYri3nHFUDooAAsJy92cqkbacSokdiyYqobbhXn9Dcmd",
  "key24": "5m3Abteoyhqi8q8MMH7SHSnB5UCPRkLSWQ7uj2vn2PxbKigNYJXEsGrBTM6VpExP2ftEoHZDerGbE9Qss5CcgjHP",
  "key25": "3aUdQcgqs7FywrNPqAyN1zcKLD9jgbW7TMmX6v3776eFK96thRki1VbTbVdNkL8JtzTAPFGZkTyfyPT19z1Q9eAc",
  "key26": "2JtTtwzvaEdSxwWTMRzyiBx1duxbMsu8gx3sp5Q2qxHbjqN3u2bXPxhEFsuda2wET8FcbKZwCBfUuqR6PMNcmwPA",
  "key27": "21gTVBB6N76ac9b737qgUi5o4WvH3RxeUf7EHgd3nfdQBcUVsggDa8VGTGmBYnyQ8v5aQFQ8k4fdRYCvYSiB3Ja6"
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
