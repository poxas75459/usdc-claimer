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
    "2kfEwQB8REMG9zgfm2GZEy7ATKVhYRyLsehas9kL53z5tqSeMtu63VRqWxpfDqT4rjVp9t4ZyTQM6ssNmYRPQEzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tyCE4v9xq16BLnCW9twdCEjZDtq9Ug5kAanDiJgk5PwZgUzmy9VxpQoUQug9GjKcvxwgGBVsQAEkqM1Csr8i74e",
  "key1": "316RxSrPLtfoAYgBeJf5j2xkGPMZQrn7jtQFD685VCekr8ccSnHrprg4jm8kVgFB2UJHaLx2HdkTVvtPnwn9Rgzi",
  "key2": "25Ti4mvAfbTGmCdKrhpUCCckUBb18Cwofrxx33y8rPi5cqfgsaUXckzf2bDtgqXzA4K2kG6D9Ao3qt7SYu7at5D1",
  "key3": "3VFwT1ZLk7BWJ1uR9L33rPi24MckuUrT91LT65CcYfnL6ny6m3U45v92dYYZ1LJDCi3YPoXea6PXAAZCeaVeKY9i",
  "key4": "5xzQc62LhnLLrqbmZ96ssvLxSA2kskHL9H9ABCQJJFKkJvBuZKWDfHvYGZuymLrHhwBEXgY5f1ynonGykJBqgH74",
  "key5": "5SD1b1hwmohhkZ2vjHmVv1gDiaEtvQAtuxhALLcfqBcsJrP5WghVRSYNMc84kqy63aCXo93faBbmbpkyzxFYER6z",
  "key6": "2hohN5JebiYo4s4x7q1H9x8AWbmLizMxq78m9td8TCKrCiYFJhjptBgusqHgej2YpbQBc5cLd9nUcDj3Lgok5bx3",
  "key7": "3rJTGQSS5qeJtPnj4aVnRvpmZHXfXYpMJTYKCN7YAoqcMwzXoLPQrsy8n4orgAd3wngGWDJQzGXQnhB2iwdwWp6h",
  "key8": "3KbSSUJyP5KWEQ62DzdnZZcsbbF8AnXvyG9izcjc81mgwmnsBZHnhnSzRbzueXcS9KS5K9hNETXDUAScPzrbV7N2",
  "key9": "dXtEhuNANUVTPJcgXSgCvLANEXxdnNCf8Hh7WuHhqZprqHSrDTrRm9Mem9gwV7XitUzTLBWw1MiFVuDZMj28Wr1",
  "key10": "AVX1cQDQVFh2T4yjqwuKULgkjQNeMQYJjoXbgYYsNkvkcn9H8JdHAwAtxLXXt7xkD9ksjwzz3NCBTHNH7L5zgMH",
  "key11": "2HDjm1qn8eHMRws3wzTx6e8rUGeegCZ8eVeWd4JiYR3tFEEfuKJA1cyaZX5ih1avaLBykmo9ZPytXHHPw6r7dbvp",
  "key12": "3pW2PdYwhuCUn7rB4xQ84PsN3U7SkuTLGVEnVHaGRvUuSeDXA6yGd86bHAfGjvSp4SJxr5vMomw5JfZrES4kMCbV",
  "key13": "61cPtCoBVbmk9BbtCoUDfaAWKtYgxmvksJDayhq7prGDhMKYbp2DgZ5xfEwV5yj9WL7nzQzSaW1nHxCbE4vTrLK3",
  "key14": "4kr6DFfcsavucxAgYSZKJWRfpfzuAVSZjbVTP3sqzD5sEkzeez5QRkhvUhodM4ysz2raD7XPZQEKBfrWUfJi1zMS",
  "key15": "4LtFdJHMCFi1R93KXsDnDPBMvErXi6kW8611ajzre1xrTWn2H56D7QBm4UFSR2ujwTNuNx6LbmjjAzKZuKMZTHkT",
  "key16": "35iSzvSCTfwdXHyHFGwHGPhyBDHTvYzrUFWcmkShnK8EeQyxAGNdcPLNGvsEG15zqj1PfGk8CgnZdkqi8uD2NmUS",
  "key17": "2oAK3DxJyiFeKj3sn1C9v4xWCC8hraYRw4PYWXL7mFPpJQB3qBnCmNMMfsKnCaNPSwwht4bSBi8YYzZPCbcsZX63",
  "key18": "5tZcxawYXKDyZUdx8V3CNRk4DZmvJATDCwM3VmRX6u4Lz5sU9oLfArM6bk5BuuaqDvUc9LEHpMwbfAWXQqaz3sL4",
  "key19": "3YqxtBgjzQt8rP247xT3oc3ZGerwdmY4sezSLibHDCgTYhJS93jVgAejV9v1C9BCvku5BVFuztSPQR6AuBc79dLk",
  "key20": "54ffGvTxjLfRmrPp8rtdkK2nKSMAtLuhE4RSaetP7HhzuFpdfF3Xfp2hKQtmBnxPXRShfHibCpbsvWpE3uid1eW3",
  "key21": "3vJThCxq3BDWzofoS6ZsiLqcmcuz2kQbArEV8hzhBUvPUquExQ6zP3bSDKfu8ArJuT65yrYiXwEgWFojfbkRXeZN",
  "key22": "4d4TioYLnFu31UPhZHdv97AgzpPm1TyWGSewGuj6oefeudT2wLEBAGKwRg4ES5FX7T5UJLtq3CCAz9iqUee5CVpg",
  "key23": "3fKxgm8ajCg7Sxm3Tb1xixcLTEd9Eo9JXUmJbDZGFKDfo91NnQNJqyMNJr6NVcuqBwuG8phzDguXZuxBv4YCJDLL",
  "key24": "3kq815RXqXfyPoiNQTcMTZs7yQse7fSm3QYDQberbbgbNudmnxXoqobizcW3hPob3dTfFHEjgmJQVZbNj748sZNV",
  "key25": "dixQwf4JJpfNcZAxShiBQgJVTTkCCeYWYUkcuidrnPapTqiweS4F8TGBuz5Ckj51XxouRpeX7p7Lj4WjYcJdVuJ",
  "key26": "4q9sAvLLEreLckStMZzE81XaiV5CpYm8rCVxCtRCKtkEfY13BEMemZcjNFDVzweyc2bJ2vz1cbW2vAVR3VAUfJk9"
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
