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
    "4aZbiBynHwrVUf8kAZYtS7ewDTQHtmrPV8YsUEjR9PS8mek2ZxfvtwfiPhXH3b2t984CA6VfeX7vUGByv6ULn7CU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jB2qdk8VsDXLkYMkMYBhggJ9Mfxg2NnKuHYtXb9FoChtKchD5aZJ2QPNCAig3z3qE5bn87F6LJy8W4KmgfUxNjP",
  "key1": "9ubpoysmwEXgn7rJFpAfxoW5ixwPH4Fvxko1Q3gHgi9Noe6uUXLNvoDvtQ3Ev9TTwVpi232jzEFCUuyUjBawTHo",
  "key2": "4wPvvMsTnXqdV8kQ2wp8yWezkF8BguL3Rhq9U21rJhfYawjuzAwdMhyBKyftv5iPbgUSs7vrZVJmiLKWzTDgh6UD",
  "key3": "FrRN25PCG6rc27VGpEyYjhVqKs6gaPYz91synMmusv8DXAkXHyQXrrtYSacr4hSXzG4U8XHj2T4wMF2svekBVP2",
  "key4": "2ZeLgtZxDZ6j2iWH9AN1EMyLpFwKtipTh76gYTsj7tdkDDbRkt6FcjUndKX1ZVhauJXBzNNTpnNoHJHLfKidi39G",
  "key5": "3r2MVwRixYW7K8Frz7BKwuxkvubhpBnPNbTJogzgJsyXrrPhncmuYzAuiu62ek1BmXKawBD4Z5E1Ewm4GJsReZC3",
  "key6": "3Eegm2K5f2tEuvMSKyE4EYqxRVFFhspQED1kkUZpwfL6jpM9jB89P6xc3ujWAMhzjuZrW6UmwTJ2CETdJNprVQ35",
  "key7": "2QPvNLPGU2S2fTgnt6Aoqx4UbqEDbcbZgqemgR6kSFbQ5SUwuKWBiHDuSB1HNShkneoCKrLa18dazFcUhHJoQQ9d",
  "key8": "2gM5DACPRF7QCnh2tAPseCKJ9wto5Ef48dsT6BA9Towt8VNo16vLh1nx4c46JxdeHAVk4uc2vqzzALg3b8Ujjgnf",
  "key9": "2jUKY1UdvqCvxeFgWjbLzrzTznbocw6xvE25NTNhniS345fZnh762ysGqdAqHPpNma5V2XHhUE3sZwMbWoQn8fJV",
  "key10": "s6KuF1Dy4Tzpk7zotQggrcHoGBnuLajgMKvYHjwjxgGZraHK9J4ckVfMo9m2goHsCcFrDuJsZph87e76LwcHvYw",
  "key11": "33oxDjyX5jWFM95XUeHw2iUC4HujWVHWY5Pgaxa6C4em9j9bp7SDdoUv6nb6hP7y3GxT52hebSbGmNzMDa1v9BhP",
  "key12": "3Y4CyFvpx2wNDwa439bVvHUkyHYxG7BvG8tdtqWVgszChiierzxKvKUHLP7HgMsg1pdnHU8i8ZtyuDAko3ncfdY5",
  "key13": "x7xddRNCJoTqKELfBhnzqnFsDj9pcADpCUuqSHCjj13675t6TNYyDcsUse8MxbdxjewLmHLnzjeqSZhyL5jf8MB",
  "key14": "5jZyKcUYkx7twKE32whn8WxfVWy3mt6jVgT6aLS2KQHACqJ45As5k9FLDLgMUyykYJHsZYEDUnQyQZdjL6NLvyFf",
  "key15": "254pNk5Y3CuugKPhX32EbH13QkXwVTEVp5GZ2nSwdiZGG8WZv97rSy5yHMS1uU1bDyp7jkqyBy2tMpTLRL4zmoUv",
  "key16": "2iVphFDssi6q5mtme637h9zbJ1qgX1whA4an62dTWdrq3VSNjSvbfwJMQu1suhzZteTmYyYDbkZ15jVxgkNAHmdE",
  "key17": "3TjSvpMZz2kAHWfM28mS3Wyrk3DNUHSi3Fhm9ZG8nwKMFJnopSd7SfLCG1vK8sB8KDHZbfENtJ9XJ8cjayH7fboC",
  "key18": "27Dz738XtskcE2U2AeZm4oH5UUwAY25exQU3TqE3h88U4xQNp78gaZfPv4GetaG5i9PNo7qeGEQLiF7LjZdznDbW",
  "key19": "5f2ZZS9QXF8B5pQT87Q1NdKLp4aHzN5n8yH2nBMFo4Jqc1yL2wuojWtFS6WVtXupwi6RefbawVWQVj1HsgAXq8Fn",
  "key20": "5iYqs17MnxUpMTgUKt4cThUugfKEPx2CzmqypyDKaXyHYUJv79ZQTsSARou38UWN9oRDPj9AwEh3kvMtLyCDRGcr",
  "key21": "5qVyrEHC9CjMcqRK6Qsa9na9L5TmCm6rXLquHWr38XqNvRXV8WATt2MRUDQ6CLxcecmnnhDFbAXWBc4QwddjxTXj",
  "key22": "2tVpGYX9CoQyhyH1iasedsui1mm8cM4ZuxS2dDNBKUBnDNrcKp5cK9K1dLEnMNg5zv4JtaRjLCasRVX5kq6z8s6C",
  "key23": "5ViY22tze954VmPDpqvUV2ZRWZNtT4S6CvDucm9gwntTqdbkvHSqYLE5nQjh71BhXukSaL8FN2BFdF1JbKXq8kLD",
  "key24": "3UN2rMJXGGX5VfqqiGsZqEPdbSq3gb6YkV5SWy7KXXTdBqdj8PyPtVVWuyNnqM51mTKdHxSY5D9nngSggNKL37Ad",
  "key25": "5DC8Dfm9iAhaq43LGnqZHQBxuzxeADmXXyuy7gD6t4Jo3mgMhhnhg6wjsr252kV7RxiB16hSKVMXzbpKht7YsCNa",
  "key26": "3ZUpHEKPAnz5VSf82TT9Ph3GyANQZxhaKcxCvrYNGFnsHsRZ5Uhq9wNxiKYAusrJ3eMdwmRtCngTgebPBPDs26ri",
  "key27": "MCYhxjrnqCgcZ1Ac8Y783d6BmLAgivS5RoHZzxiD1eYDGn2TPGx7SamAmKZBc4e3muoEfdJfV2yQB8ZGNMJYLnL",
  "key28": "45Y4ZYnYZADVB3xAz5mXhVCtSxdkaoDrnnMLhbdBZ8jbWpLgpTVTzQdeyaagmXBeFRk65ErJEfKVrDqzYrdToQ8v",
  "key29": "3EPAcbp9R9WckhoFfZifQekiRaocJC8sjDEhXLj64rRViHXeqF5aF3GBh6mo85wpt1G4QYWBCQwLRGtixxcUrMnE",
  "key30": "4U7MDCiRw5SJYBjTSZTDx1aTP5HY4EcgRLRDAHSLT6LSdzxGh13QhqPh3Cj2y7Vc6kv9epVaQdjoacVYXN673DJM",
  "key31": "3JT5CNSHdzhgDwBGFAuk9bAM4QYQtSGEvj9dNi7wTDjn9YPSPLFUT79FcZhVd8R5CqNdMHHoCaUGapFqQm9Vk2Gz"
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
