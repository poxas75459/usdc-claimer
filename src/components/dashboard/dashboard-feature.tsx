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
    "2x3KHLXZfMEHWCAq7Htjzh9XZuLmKEGF1NRdMp9sWmeKNQNPyKHcok6zaEoizHV1SXXDrj9pn4MzpRRm4ZR2kZcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kHxCKP5zVtkwcJbsNpn1FQh6nJgFRj9ouHrv725QYhQ5HdpwUFfKP6xkFsfMNhJmAY7EDXEaqi5rZoACRk3grvJ",
  "key1": "4f4J9fUTLPQq78SwNhdp64KymsAXRJ4q8bJoVxgNNNzVtJi3tdpRncaqTKsVEuWnGNuaEdNznR5HAf5MLvrfDez5",
  "key2": "3vC78yrpvxsi7kwVA95M6zWHGsYQ37iT5Tn5h5ujTj9mTaFrEosQnBKjUj3fxSN8523oYGxnc8gwD6TbbKSGgaDE",
  "key3": "5KbcKPybKQ9EVWGLjwyM1ivFyP5DzrDJWDgiR1uHP4hpyVuaZ1TxPqyonWLuWZMTYrdPnp9AVMwBf2KtmSLMGUB",
  "key4": "h5fZ2HYeoJtXUoGJ7mad3HcMcDqav1Fh2bzTXCpE9Q6ofFwEeTN2CNHykNbFNz69Wu1GGTxHassuQEo3vtaAu4Z",
  "key5": "2XdKNEWC833senqkH5KpcDonFMBS3JiWqNQTXRPhDpDoUkkFyThexuj7v7SXPdU6KNz5TWUmwiKCwpZ8R5fC1UGJ",
  "key6": "5o4nQBncgBtsNZ3udesGEA8QYstKmtNPThFUPhTXvpdTCCN7Zq8VPwZfupfiUFLunUGnbywhRsnj8JXLGEwBrCEz",
  "key7": "5hqUEvyeZpho1widYiweVW1zWfLSeCrZCWq6CXx4VSF5hqBSvYkVFzPQ5DQzvfXYZNPM2prvofDVqxdHDt428t8P",
  "key8": "4RaEEg319ZodJHoKV8GG64bX4FXW4Q4mmZApdbQyMH2uzy4WUt35Xha2PTi6xZVhHFVHtRxcPTxd73khsQEQrNcy",
  "key9": "3YJM9YbjqgAM4soVp8or4hSRUtxhiKwDMGmfnccbwZZizFNYKtBWUHi8r6imizujZgtAEA7YgLbHY1xCTEQg5KDU",
  "key10": "3D73AAR13yrkuv8uuc2x4Bf71mUXzqfa2QQ3zf2z8AfGVtwGLvsqeMJdGaiM7Qu8dXnyQ78BSc8FHq4p2kcPuUZZ",
  "key11": "3tge7VoYEZCuknmyi88rUrSXo3fHvAUtUqhmUrc75QU1cqjtzw218v9wjEGwypmhJfbJSs8QQKV4Ja2m5Y1roxSZ",
  "key12": "3v7NrBJbMCtvSncYk8GhJ7mihhEueu5v2xSYgdGGTbAz64EsX1vqyh1eGQiahgZknidDmzQ5PFt13FHpYvBSxpKL",
  "key13": "5srydabaJm59NAY94SzqbNnL4QN97hBWWBpumoSiPgtaUDXrLfBD6ddGb1MaP3hCcPzDfWX9e9DXcqnGosBrpvNg",
  "key14": "2AhDrjJwmqndC4CsMSYEJrQ34Wg1UeAeP8bYqJYVZfiSA4ptWwpeHKywXrzxBc21e5EvUqPTnSY9DXHP2ob23Shn",
  "key15": "4xAsmG69MV6HASxMnhzVwX4tHcRogeaPHpJwL7VrVzMYZiPX76crAnmAgHiZSgHVd6o1FiUQ4J3BM74Fhh8HoTai",
  "key16": "29eUUKMR7sZCyQ1UxUxT7FM3ir2rhLCjbviRsebJJuVCGZNc1b662nk6UD3jpFmkKSHe9kvQH9RKR8CCrZrq6sbh",
  "key17": "4tYzjuosk7xryPTwY9MKsPLnXxEm38E1AisAFNYvm3HBVnRvqiivC8rEuKBWoboznKUr3cUnT99pwpQTvA6S8BuT",
  "key18": "3XcLRFbgoME3MUH7Bskr2AzZgNfPTsCD6ofWA3exFURnxH6wuPq2xq6LNTKTq4GVz8XZrnPdDTGhS156dvpUHUx",
  "key19": "2fjn8hisAd3sAXWk7k1oseizH6QZ24oWH7E96EDPsVKwBKp9KdXkqfZTXEMCNrniFR1Rkw1m6UYA1xDda8SQAuWa",
  "key20": "28TLuyfNGzkeztyBzTcdJRoRtYiYvRnAnwSWcjk9FPaJjXVbDA5BntaSCxz7c7X2Y6qCBBhSH2QrNDb9jMTaw2Rm",
  "key21": "3oSq5xtVWRyYXUTXzV5zLtpjUmcVXSZoMCvkMyePD9MMYvxBWZJdPmGp3jq8AZoQeeJ7EF3VnkaLncyDSgMY8sio",
  "key22": "5LzhTtgkWFV3b4QxM3KajZ1VgofX4WkQepcrknsrQjJvxqzdsmyook5bTz7tQqXYxsBiZLXXfMymdWCmBkkmyqTs",
  "key23": "3vwLAS7UGyS4QFp36Br2vd4wgpQMaoiMKNfA1sUMf3ovRc8fjkuB8CahErH3o4dtiM8nZ9pbyast9GM9McWc7Zd5",
  "key24": "3xM2M3BqvXhTtfrXDVwRZbeH975fePnnJdauSTWfG4UXPuASHFxTPNrvQyyvj1aWy1tTnxuBY7cpcefXKt1nKSNy",
  "key25": "2oyGri77GFJdmuSzx1uWVVN5DmEMBzyjw6XKsHtrXH8Uixr3A3JjBrSFB5upSnk5fKGJaiaxoxeb4AbWcd3F5q3K",
  "key26": "fNFFnvL68i5yEdK5kNZrYZ3TGU6XahoKe1sTGQibXT6tp38uVF757GxUmHoPgLntFG4GmZ8sYpPGi1tGQRqNNki",
  "key27": "TwzSRdp1ZgtkvYc9hWAgLP6ZKZCeZ6oVBSTFgmDfXYeX6XCbpJVKn8BeBD5eEFgNCSrZFxX75BTZ95bB3FkGux2",
  "key28": "5exPZSJ6cAUfphjJeoHKKZ9AUsYTcER8a73Re2wgJP4q5ioNhCm1bhjPL3gooYKjwoKQFYxppx391dhet8GLitkN",
  "key29": "5a4fNRinCcFA3LrmYszmbnhL5fs7CSX2v8o7BageoPmstvFYnR7DpVHkf8U3hujLSWXw6MvktngzTLWWs892Jx26",
  "key30": "2Pv5xuno3uLZ5sWVFDLjaYANU7qJx7ReGBUfEx2XM2nBVA8kJWapbhYrNqRLKN9NAGHNULUs3WvyPTxWYL5jWxvG",
  "key31": "n9via41Qq4YKHBqWLncMhCkV229AZ3LPZKxEtbHmYLLPm8CrCiF4fSCSHRZFdL5DNw8cJkt3TgyrCCrwEGuq43c",
  "key32": "65pojsYVqEsjoAruBw13QQPrDffvptLWyhYZTDkqKTTmNfVuay5N8KkU84fuMryU6qrmxccfpmkQXhumz7cjur64",
  "key33": "5Tkw52aHxq4XcUVYXz69YsSyrPJpwx6JBg7i81XdtfeUan6iURtMi3ggwZkiBxmAEiWDLDEUFa9JEfKnG83N5JxU"
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
