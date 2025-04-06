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
    "2bgDWUwmqiS3s5DEC7QYBbTEx844qjN87z5i18okuzqomsUbjTD5BvKhgufiGrNjEvM9ipdfm95NgkAetTGnapYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56XNR9vfUEw1uUDp5Dz3uGNwgvuPTwm2FkdYJhvfMAJo4QSKkTFKBVAeTFnEtjk5ukZAzPH9kpt8sNSsQFRP7bb2",
  "key1": "5KPYHLJv724DpuM45sfx1MN2kYrywpaHzx6y4LdH3GQo5DtsH22WAdyvrkHarPjCGFTN9iPLARbroD9WYrVz3ke9",
  "key2": "4uqvxyRR6Nq2TP8cVssSKBeRy6J7dy2x6TfYXW2QRjjXgHmRNz2CbhcAoHN22vkuHNtq4UmCn3R5Wh7WvP7WeQ1o",
  "key3": "42iZxWod6y2nzBMra9Us8Hn48ajgN2svLigYNKdUscJdNSg9xZC7XYtq1EMpYbkoLRbxVHov4TNPJEBLQyQzwcRP",
  "key4": "4hJeg7nnDxdSKUGATEDvM7pymyZYBDG5Ctw7dDCEzNsTQhZdJxK5SqY5ALbjXja7QUyGf1m6nYKzZmrypfmuXfXa",
  "key5": "53uKJtycU4ZyNiT6wcpjw1Wc9WNEf52CTkrSN8B9UCxJHvNP7V42w8ZdyMjFekUf6kqTACBHF4syY8jKEX8Zw4L6",
  "key6": "4MEQbLqvD8E2E6y6d2nomy6epqyGCxv1jh3tGKCRJCNSBWbwA91nLWwGrem7e7BUc1gzEvwLSBaZhjqwARMjUTju",
  "key7": "MEpmzU41KkoUQDedy1xcCMFG3eJJqmHNzdz3xVApgZszTHhgZ4qrVpfMY6zu5J2zon639JGGRv12e1yBYKexJZj",
  "key8": "2wiywg6UQ3GL8FQSJvudaoqvLrzEuvX6YvDcSqjae5s1EBokjZo7ZAqTiG7BEGuj4xrSK62bgv8rY5PR2qCKd6DT",
  "key9": "5ZrS32qdF8tmGQeeyfh5uLxDkzZf2Auqix323mrx1QnSj2aMoyQrZQdw1w2HyxoheJmMtbfKS8sEGdMaHitBbpai",
  "key10": "4HXFT2tkGo6rCzMyo19fv2UKcKhU4HFP5J2hPqcsFQWS8hQ3KAnkeo1BFtBxVtBCJYdCZ54Zpvsq79iNGbt5aNW7",
  "key11": "5PcTUqGyp1vWkBTjEpqqhc2zth9RMAJueQJL79n8jaZSuKBNNn8N2fDUhgp6Zv7pEprRsXyi2cvC28F1FPoUyRSM",
  "key12": "5QpmuxnWHJ81su8iYRzL7zZVhPvMEtkXBVFWkrTxx6rP9XLnUEnUAewsWDKXmjb4GA5iXWjphA34u5oZTsXU1U7Z",
  "key13": "4QmMC6pgWpmWGZDH7eDHXgHQiEK487EFu1BFqixfQroe57HTZzy94X1cceBQPSMFG8sCekNCSiBmmWKW3rQqM9RZ",
  "key14": "2r2MhLWVBzBausgUvsPrcK9VMegM6bX4WimVzT8KpTE2JAZbLFMjDt7sTopoHYEyPgjBa7FdAwQFoiwpr2m8RWKP",
  "key15": "37fx75Si7tVRSaDtVAYecRimGv2HP7h5dg55RVkixNHaHdFrVf5UQ8FHZVjUXYdBGyDdenE9kp1cFuFqaqde7opg",
  "key16": "4kDtxajiyEi1pT57ZUbn2fCADBgDSRdF2br3ytnXHh7ekQHo5gBXm6WsY6r7vpjmsfKkKxMPjoA1EJ3nRmzN5FBq",
  "key17": "3etu15aBTVEMWyTXnQTvuZ4ofzLsN3y6rtG6K4j9387v8RSQNGUhEubU9SjUTUeYBPEvMzRDF5J95Mejivb4AoZ5",
  "key18": "3yNWEjBHqMY5N7eE8f7pPtjSXXLYxqEbcNMowKXxpAK8CWqikyJ38nw76sZZ33UfYgAuVRbL15UpbYrghA66m9QS",
  "key19": "RFGFKBpgHoM2PsVjniiqHYHSHvZgcKXZfbbtEc6UF1M8bxhcjLJpxciACN58TNSB1GqzLRHgPRKm2K1KSwt3vo2",
  "key20": "5nWb8eeVgkjcpHbcSPZ1moggG99xwpFmAwuAErwGBJKRkaoJW2WN9L2kUbFnAY2pxNx67K895aLEyeLoepbn1mB5",
  "key21": "4SsEMQCT3znDbmvBdiN9Ntte4cY34tJ7KawJCS8UcGNA32NRFZJprmRvef1E9Uo7R5zHGHE6C4caYVHqpEHkm5Rw",
  "key22": "pwUN13vUYZY4jAm6SkoxS28b7rQdG3RX7S98Povp5mXjFU6giht2rDDAaotNskjgj9pTbFyM1VdaBsdK41joZNW",
  "key23": "uvdUQZg9Hfr2o3jzmTyj8Ko4DsUr5idUkEHFHNWveC8SxWBV4okyfN2onw5TAPWcMHcuRR6hNs8QWquLmu73QpT",
  "key24": "5k2BWXRcPzEXiXktyVe6UR3kL2hhX6U674fNANkiZXEbkkyQQZC5Za4JfWoiX5J6G68Bahnkf5bUSxK7TWhVniC8",
  "key25": "5wZqqz7ZS9RBUxVMRp4Y5pbw6EwHK2WK3wiVqPh3sscgmsUZrqH74hpQvvD7jCHGbKz2bfroBEddMYTjJ8g8LyLn",
  "key26": "3D8AYtmfbUKXdsZu1nT8pN4bSuaNN7N8t5vpSpj2v8Z6AUc2siSQ6CzdF3TyQnsrKzXCWaBjBhNSk6ahvn6Q8LGW",
  "key27": "5z7UrYECkQDFHpqdvGhdFzijPGJnDWs2SF99BvUbHD3yJpawKzR97puHKrWwQ4QwdN2W63CqdwT17bed6NxaLP8X",
  "key28": "4Gr6F5sFWYDohyRyrCryKi7c9s1PJ8stxQc2tEGcPk1XudThU9MuspFmQvYFNHqpRStbZYscFXdL3oQKGGk5nCa",
  "key29": "G3mqPo5VETPAGih2taVf88fYCcFYMvJ5jiVYGfDKn9AM5UhGivz5tezDh8Luh7XaSdFB4r1zTTwLzuYorcZ7UWv",
  "key30": "2vPTJfUDgLuGJbVvwpWTJjyybuFTpsPtqZ3xUVsiRVho3ht5Ct8ggaBksDo3yTVhvWzWu2D7YvrCej4EzjB6TMuN",
  "key31": "631pMVyfd8iiuixme2Fn9PWm4ubf1fz6KtziGV7BjPRsUj4ALxoz4x25MLkfZDPGpo2CA6NpStfweetqa8JSTa1j",
  "key32": "2gDaBDNG9hpn6ERRmNC2ZQXMmuewa6oikMqbobu3xWgDaExP3eswhKWeZYfqUCs9EDgwXeUN6u2S89Dwu9GUTYWc",
  "key33": "4wXrkBvSGQidFmhsjxsJLTEr8jjmCfoqjT1WnRNTr3Humy62vSnMBYqz5AroN6YWHK6FPyY6YLeWbizLa4fe4SUh",
  "key34": "5rvCppwXT8fgD98jzJhxcp1JctnvZD8Fgk84sGHmRZpP9FvVuSv23xKCTwnpF74wfZnAU3mQ6VkN84J3ihVXjTdz",
  "key35": "3gDbsG7PX2mx67gKKehE38HL4jjdyFCkR6kAb87Afd1tFauuZZ8bV4EYfvG2UuuLFHxRaNBeuEKFrj5qgYnSkiPU",
  "key36": "4HpwXk4WRS9CzAaKQBA7qdvdnbqd4H4LegSqYAAFyrLGnxPAYnjJHnNVZMREHKkEFQz7jSK2LVAcFt9BDFrd2Qhj",
  "key37": "5WWbEXGvVd2rLZRNPXD94CmRE54yPBoD8DTNT8GJYYBWMyeoUD1s962dDcgftqV8S9zdbLWV9vHzkFkBRAtZX5RK",
  "key38": "4NkSj9KFQzmKs9WXbmeTfnWMaqbfmLAuotmUo1ZeMV8du3PjiZgwjseaAfFBYKE4c1fLd92BvvK8MCCBhSWL2YaS",
  "key39": "5JCUKAj4jgpCfeHHWQo6kJehSyn5H7B2GuRGUwx3UWnXYqYbYuSfaHgCZKiSnt6swGj5GP6PSrQDHERoKqXtr3BK",
  "key40": "4JozZm1RM9UnNovkjArWaiDTXBqQAT5RuJcnTFiTcpGvEoUxXiRbQjek7BPHuGqke2iE5sJHtBhoytrTi2RwmRtD"
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
