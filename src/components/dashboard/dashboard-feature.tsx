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
    "5Y9tGSEmhMVHnAQbVxvV5oi3gjQReWseivnSb4jVxTfNinN78WaTnextQQaYZ2TwjfRkHDk6CiV6fdfmSRhkWBCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FFFj9iPQuUtY9Q9bDmnnRTWbWgVzovd6EQJvUGH8rf7RqxKuyj6V6tw7jLzAyfYoDCPCRC7H5a9ZyaAngmmkcw1",
  "key1": "4K7JKpNDLgdkpAKCnFjxiTLBhpvY3quQFwRtUK2CSSfJmm29TZbnw5WTQTPwQ5DkFLg7NfDEA5rdgCwTWcMMPGEL",
  "key2": "5ohpfVRuv1XLRgQsUSvt3ETGAnrdWSg4yG1fBj8parLNvTgfg3gYadt2J7WCSY5b6YLaeTCJPHSPHvzYBzNRGs6F",
  "key3": "3sFsKCeb9EmdNX5nA3UXkoVcQJxoynPtt6YWhnTnJm1gC9BAyr8RSz4vvvHR1yKd6rVbsNG7kooVJQ1BMmrJkrjq",
  "key4": "3AARvQ8YVHKcA6Bu6RAhE2GXj2n6j3v4RNTUAiaATuAEJQphgvCVgyrFoTxQc6FrokKEY6c1oAhQ8o4e1SK8CqQt",
  "key5": "vk74ZMxYHHetpeccTh43dJpKTY6qrUpK776HT9Rnm36JX7NYLFYLy8Y7d4ac99RmmRihYvJU6J3epABM6jh6ibN",
  "key6": "3botxSKxd6fbwbmCAR9nPHgdxUToFwUwfcT3uEjWFks2aRLvp43hMhzSM64WBfwQLbcdxQzQZYu5MYSDC8A1xjvY",
  "key7": "5vUJkETksG67y1JvAp8Ea5eLJ6WnEbzQjQ8UKVtRXWm4PdYQGkoMxfp4ta4niRteHp5hxwarpQuAXGDfSqsxoe74",
  "key8": "8jtUriYhb1v8SLv6MeZbf9gCdhQFUtV5br7iPSuHDRY5iwhvCcyS5U8gu9zWJc7LKR1urn7qMLiUsSFAGJEVrZm",
  "key9": "5RtkbmxMHoSi85MQai4Pv9hxRG1NnZJBhVmBS4XFv8Rh416PSarZD9WiKm3WcjUzqce6f6FLTJLCJk3vdyGf6Kha",
  "key10": "2PXhiGGvBGS7JDUfj4aS14pzNagDPKQCAP2BUidCBZ3mmVtshRVWNzmih1okMCJ4WZSo8Dy4iGCP63CfMZF3hqUD",
  "key11": "57vYAjxvQq7qKdJ5YqfrPaZ95QGvELAngDr3YY9teFHvQPVNprYfSDPk4Cke9wZ9bcKyTB4nsy4PVFEQ1yoefoxe",
  "key12": "3aU3B3mNRa5Ln2NapeSxBZvhBLtJAPRuHmdRL3s4eu3aZBSpsa7r6fF1f8davwy1rd4wiudXvMSiZVhRsmGNyvrq",
  "key13": "zP9d8Vq4yqCMTH7paZ99fyaeboQw7SYs7M7ZzBErWJFLbgcyYqwzgzrwNxCC2GgDc6XR9crLawwDtpHFCwmACnW",
  "key14": "2p5wYLRNpnGmXBQQTKYoTmHnmtbYodar4L8iipW5byU8ynw6cmXkyc41nPFCTAJ8r6Tdd7qT3sBtp8iy7TUqbYsx",
  "key15": "3KkNJT7zdwkNQu1GzSKEFntbaWfH6Zemc5xotmNkdCpfoLe7gdLD2Ksz25G4ttYzqmJRG71FkCS9YxSy2Bx8kMai",
  "key16": "5jg5PpVmn9KzSucrkk9GUZsH7m6zyH1rcWQBsYrA4G8cjNCfKJZRTD7755a77keEVUHJFFLq9LNV6Y2REWmMMEbs",
  "key17": "635i1e3RG3KQne5x2QNQbJqYNfbmvYvBCU66NwbQMLvqbZQNHhxncofFBsmQZ8NDdoNdDXKxZsH56WdF7EGyikoo",
  "key18": "8vj77voTw4qY7YeBex9EwCkts5Pw6S2yydF3aQ4nvTJUQLzrLptHZKF8yEWrCFdRb8zTWdYgW3QmijNRf8QaDv8",
  "key19": "2PQTstVT2nVByVw7zLbyPsDxmcxfYZDddvPQY6E5GrLqMwLDbam4v8GxsPTedwG35i4uEyBsAHQW66WGiZsZxs2S",
  "key20": "2yhZLLTBpWXBmmiZTNccnn2DrsV2QFq6JVBLkHSMAL6dVoxBkdKuStoSxDnoLTNLFGgNJadfesdjxqy4B9DCKh48",
  "key21": "2eCoZAxz8bYAVajapbK477D8BuWKwYF3Sy7z2Uyyu4pZd4GdSczJNosGuUGQdwnc5J7cgeYWbTfsnLXwVgLhtcHz",
  "key22": "2kLKviHz7NCDpVreztiDhwDqcGj29tiGQ2yQDnTiUuz11P3bRc76TTTXhBaTSm22QPNxAUbHKy2J9bngwypaxkxA",
  "key23": "2592ekbhKYayuTYFRBLocbZuMArQu9tBtAXh5B9QFtwCP69nSC5ApvDpoWGfLYEii6h8qby5TP9tJ2RLAgxYTCCa",
  "key24": "2oPEYKcVTkUyiGJmxGBSRjCbGArMCF4H1RtsaF1A7BdSbtbDUQwEXn1phxi9vMg8ukpw6ytcYavKakZPxqdEP5xT",
  "key25": "657Urfw1bWMBT9gFpBPWmeiH8rKHsLUGrxLszFWo45SoRXSAfNUeHWWqXnYkkxyz5hFWDCW9GuHs2J1dyY85NT7n",
  "key26": "vAgW3hybLeK53BzvBLakJTSpxHZcJLZ2StdV98xJXSFVBC5S5BCzEurjnx5ecqHswZRx3U1S3Z4VF4meaTtVysy",
  "key27": "hx5UGtM5Sda5as3txJoHtY7Y7DeBCeLwfQ1LUroTWoWE4TYJbttVRAdrs6nSywZT3wrpCgU3ybt9YCLbVfRwKTD",
  "key28": "2iegvWvJQhEeAJh5c4Txc8SUqiPx1jnSLRE5tsRZs5cEKrJTbVyHVBLzn5at1MQgKi7AyciZHcrrUJpbbPZWGmdR",
  "key29": "2jLjiWhqbkFMbA8y8EskqCGMzySRJBpjTb4U2yFzTEU6UzrfgcpmUWEW7yckUALVzyPb9bacZgJoptDp2nH3Jhgd",
  "key30": "KV681oajnKhz6ux1TjPmFoJwiyG5LU9ZDAsoJudLzPuoKkuPvvYTDcJCLQ1vbaPQ3Rb6DjPX3YLFXBLadqyEnFY",
  "key31": "44mqttkbeoqFJZ7HqZLcGefr4gC4ofxstH9ziv12iJc149LhS63Foyur4Yxxd23J1P4NRFtUAc92uwnD9ncgA7cw",
  "key32": "54sPUsuET9xQ58MZ7xzFhoT2rMcga7CccnXB5TWpNYPqTY5wLUgvxHLRnBsJ1C6ohTQLrdxFJwQmnoKvU9MdYdsa",
  "key33": "3NWv1nyrkYetySq2ii5ZFYyVEccUr7i3y5w8xzGj4GuSe6fqNjfUmKKDQCrd4TQ4yKnNbLAbNUz1QpxYyrtV4Uuj",
  "key34": "56T46USM7RsLwpazzutBr8t5Xo8PMaGmirF16hAuDSfkEPC7kmhsCVZkAgRxxcUxfDKEYnyafpE7PYpLLS22yacw",
  "key35": "3HTmX5e2SGJJ3dixWhxU8PDSe4t1whQscm4x9XUTDcB9Z32TNptAuHykpe8oEWt3uBKVgpxqbQTDuX6pyXnk3b91",
  "key36": "2JNWfHxsfDRe1yVg1ivRHMWL4DMgvpPXG4Sr3xLXbZWu3ThZLZsbz7JyRjMA8nRdfKiBMSKVJqbBppc6bYca1VnU",
  "key37": "4Meedof3yE4wT1sQErdyRNb9ePw5meftQurksEkCSgsVQ2YUq1bsJxpXs2Q83YSv8PbiZV5rHXLsxUm2YjhdsZHZ",
  "key38": "5HKjDTG8KdVajSZ4jYRTQyQWnxRMQU4bd32AKq9Bqhngin76rKDg7Vh6eYWLGR4xSza9wZwefnt8rkrYdoVmoBoF"
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
