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
    "43vhSxDsi8u7cVsEYrbm95bYLg515pciu53FZJiX7P9iQoByy6j29eVf5ALtuXsRabuRm1w2pm57sw81tAXgVb87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44q5FZNbr71K9sas2MAxatLHvrcczP9B6hEp3mcVvM6FxW7E1x22X4wrXSobgQ5cibEjsWCWz775UPKLwvVwVk5o",
  "key1": "3nBk2X1pxfs3qNJ4u6GaFCPUMjAH9mk5qhy9CoYbfXM4LaSDjHC9PUMnjF7PLWuWh1WRnMvbGELCKWbPRiRwrWFM",
  "key2": "3i8L8TM8yDLdMY8yWjC5z2qsUx4MXQfQnmj6koJ2NtG4HpMnNfPMa7mXaJMiQDZFr3v6tSD2z5or7HSp1p86av8o",
  "key3": "2kcKToN4kzFoJN2BvYJzRqiRFQ5h2hkYjA2edSvqQp2Evx9qZ4Kjk4j3vKHizF7xG8XvhMY4qw6N46Mp2iSQmzji",
  "key4": "54bLz8PoAxQeQVrnxqYjf51mQ5DvevtFRppKt1eSiJDiCLe3rJkeiMN1iuqkE8i7s69v9ihMCL8ygDFMXFGFmawg",
  "key5": "UkjfyMpNH3kfKejb8ErrtsWNyyYHgniRvn7A2nKDD6VXWGmWJ3uAQxt1PMbYBToxAj5JQg47SiSzJ6zn7qaSV1V",
  "key6": "5yLDZcjJSFuZwXHRU4ga6aS89PKQiTyrTfUWNDq77fPa5nVF99LCk6mwGCvfhfR2ynAeZn6rsCCx5h1dXYf7xCHa",
  "key7": "3bcAw9MQQETj4RBTcrshakcvRfD8yuvpZFETQcGkVzCsRYqnSo1qVCvp4nzdFWPPJAwjL4uTHXbDs6T2DYoibcce",
  "key8": "5KJYboVWh7gwiZFRq9pGwWe2R15XpHkd3QEmzAjnfhZyVeEfQJ5un6ceCW949U1FnTLi8LQxUf9kvydvx6s7EBi7",
  "key9": "4KdGERnVTThRjD4zCoQhN8khtrRKvVMM5cSW6LRjwMycBPdp4iGXYkSKxxZ16LjUehD7vmYymdyXPaj7eyUWB3iX",
  "key10": "iJgmeYfip63EmY9DvHffT2g124gYpzN8iPZYdDQCGqmjoPjtgrmhz7x5qBmrGfBNfXvLgkAt6HefQK4nf6JwqgW",
  "key11": "3GV7wsy3wmKeK8gYGfqy18C3qCTq1a9a3dviTjo1QUe45F4nPLTW45f1n5UpdxPhETAa92H2SvB5am64Ypa8SdRZ",
  "key12": "2HgZXEf6BsAKCC61fWDdS6kFNsTyiEVLq6DDVXS9L3Y1XbVbJqr7dbvdfnP4eRPAgg33GZ1XFMdLUksizPFoYLqL",
  "key13": "2VNQffeGG7EGaufMBZEX8rfwrAPompMcsU9YrRVwUmQqSvd1rPEQjzYToY2FG3EyVebyKJv4eKF6nvxrnZtCkuH5",
  "key14": "DTPf1inYBdsEnJZmfByqwGd2NwZHJGLMepn8qjM9YdGW1Rk5YRTs5pz9g4Wu1gHVt1UUoCc9eW1hX5jSuYij8VU",
  "key15": "61VAiVZUkBevSN7D5RrDoS8gMf3Fkvhi18ymqn9hmWpVbwrx3jc4Bdjj4Fk5KqPSq4tevkBFqEsThv3YeEEdrLT6",
  "key16": "4HSmQkHA6VJKYJDR9A7QUVQbwJziZbQ9WAJcFvp6Kj4dYQgJi9yRumJfTNfbQfeo8c8PgqphHU2UNNqHPVLGkqBc",
  "key17": "5t78nK4CouTkK7e5PzaVDCEE3wH4i6LyTtRh7MV3W189b6xoV8Ao3JhjcmcivAUycGGWcNKpv2jc9UeKSfyHHGpQ",
  "key18": "bmHPsBEDUk81mYH2PiN23igUzg91X74AUZJ84YLcGH3kyYn7gbX4kEdcmSFMJL9ekE2Y8vqxrWZKcQnfThVxo4B",
  "key19": "61zeNH5eAAhUp7nbzUQWXE5yh9XFnELE5NqVok7WwzXVTNtdUC3wZrkJbQiffwcSY7bFMYCaHe5R5LcAvet62HpM",
  "key20": "W3NYKUo6WMvdVrvo2yjgoyFZ4zWH5hkKLVj3BgsEMC4bQiVWVsavT166D6aYymLczWMqLYn8uz7YZrcn8if4qEy",
  "key21": "GQZFprJnyh826Q6JhFt5YGFYEugJVmajG66nu4LKQijMyWg5XjPbanCuHm7sQmQGy9hqkbqAHCUExn9VKpVm5PH",
  "key22": "4mfEvsKMj2ftyQyFTJjJW6kdh7GJgojQXhqELkEYQ3eZRuysPyYnWizW2tDye3V9NPBTn92jwrGFx9Lo4tgvTwJ7",
  "key23": "56RQshCpngXQtNqdfortHfBG3QoqW2hB9ziWgdCdn7ZuppqAG2KSwBLGZkhEuDRrr7baSRiNzRBUbUtF5kBWJ1UQ",
  "key24": "4soZQcoVJDEM4pL8NsgXGNzVLtfvhTjQ9cy8saksGtQekpvNPBKNSWERzQPQTtRP4L5ZWaqgU3TML1uuJ1ShvbT",
  "key25": "5Ww8FoS9rNuhPzAQ2wp6Bn4EFi9xPV88Twk8z7zP8jw6o2NNzg3NxEaR19ZdZyWA9MmaXkhTjikVKXpV8X5PB5Jx",
  "key26": "66pQchToAxJGkq2FWyJR2BmeL62VyHCd6jjvZqSEgtG32ptJK4rKgXUx2WXWa9WeiShnBr9AuAbiJhMvQ2DmwMJr",
  "key27": "5VPXr63XRdZqiuVsTeQZvqATsUiv5YFRM8unYjmXEubvj6RTGP2qTRUN1jxUXTdHXnNyfKFnxKTPSQ4HUpaBTdFU",
  "key28": "2UCz2DWVZFRTJnr998SKadB7PVqXoSMaxEhxvKCsx87xWV3VbJdvKGxBT9RJjSANivNXGCfAozL8b2Y7FkFT9Meh",
  "key29": "5Da2Cra3ZemZqG3p8R66j68ZXdfoZWj3UhjFv2nFxk1uWmasZDfNr62tmtR9KwwwQpTTJY81stcM5v6FDSj4D3eG",
  "key30": "9DVrdnhUbxS9ikUi5PpDkuWFatt6TmkyuLNjtHeNM1aBCGnepzQX1tHVHDvFngF3LzmSCFt37HQMpzKRXoVMtoa",
  "key31": "3HK7ffDLbJkZuCdBQoGALmurSxvAaA97LvHDBGzYVoWWLXKsPTLCbKb94jm37vxXjWdxrPTwPJbrjqsVcBxeNzn9",
  "key32": "PSrovwkRBcaUyFMt71B5ZwPgpkQZmDjyUUZedDdaQhgCBFc64W4dGsXxk9Yeueohpust3qML8R31FSiPCrWU3Kz",
  "key33": "4kzNJLBCPc6XSCYH6YmmgswqNBYmtwnvwFgry8fRHmVzkJLAG89hfjDHtn9JJsVvwXVYQUs7WgW8LNiYbNzvGpSa",
  "key34": "5XKDVHUjex7Ci2JtsZhQMrMj8ugrvaGV2JTgaufuVEgux9LFW2Emed9u1ZaBgwQpzxkHhyDAQjQVfcqfzJARqV9Q",
  "key35": "38aV5gBW7oiZnQ6Y2giiuEBDUd7XE6uydLYEwhAUjrLF9HLodkHHMGXyhgKrkFsB3ap3mgqqLewWsvfVnYtwaRg4",
  "key36": "LhfxeMKqUpph9gft3LU6xfNYCrtSWVS3yEfHTFiBndFvDppfxNKfiSwW2U8d6wgh92xNzNkNWGP73RP1ExuF8DN",
  "key37": "TP1MpXtpqpvkMNWd2wBiZiNxbjMNoZsqZRUra2f8YbRnXWA21LKMPFt86yQfVMQeXZquBNKsEcdHgV42eX6n4eL",
  "key38": "9MR8hsCwrUzTHAK7xjhktAAvBVR3ZjKMxMtH5dKzGx5ZCcKoj4MefSGq6L7K4FaUajgLkbh2JjeiD6sw6ncoz4K",
  "key39": "5KdWD5gmCCbVtwyJsWK9UoFBfmB4XoAhnxgsqTUzkBPzTbYP8RHtizzQv5Zrmh2SVAHuT9LPAgBrsiDmFFn5GAgu",
  "key40": "4KwhxmkUQEwdyrtFfPw8dKRVLZdCsZ3gxVL2knUtx4tUmEAf4C48kmXy6QDxgWqGQoeBF4Meb7XvjHEsisEuxRgM"
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
