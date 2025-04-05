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
    "ED55YFrN6wdGGnwdCRUDMbHmjrgkzNgcAHEqfPAUXkZ5zRdnVmqmivhzhguNx4fYy5m5s1iz5BpnkgHDnHrfT9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jTHaNNb45mq2ZdiFqXbXCgHW7jEFQef8A3QawwkFgQ6Wyn29oNEQ5Pqxiu15Gramzw9oymv2fBjsxBs2h91r1Xf",
  "key1": "3LyRUxKQu9RBfLqRXoohzbiDg1R9tmrpnk93oLX4aunfJXAdLeTYot8bWmWjJQyeeN1do1UQMdrhHsa66ZsUw7BD",
  "key2": "3WmFYcyTQMQC3RDWBtjS9n7Wve28opvjMDPEa6PtporDcFwBNu5MAekxp9BYL679G3BUZg5M2qC2datwxzkSW9Uy",
  "key3": "3gHEEFSfqAHqKu69e5CJVne3UwMKy5Qbyac9C6xBn3grrZfhD5MjyfioLLrtfjecuCxP668rwJ7Mpn4Nsa4KW4vA",
  "key4": "61KM4XHt3c7nmYf5zDW8EMC4NxwdrtzNNZzCQwT2ks4yG8u9UVedUY3Ndi28md9cBe7kKZYdo8XG4Hk1cnJfGKn4",
  "key5": "4yrFEwiTA6YehgLBx6mtF735wo49pxYShHeA1AfTcMoN7aKcXPYmASLb1G2VqxoBUJffCz7fvjTKNdanBEsPPvLf",
  "key6": "3ZZMnLhpi43D63TA2kSPugHFTGxCNDdRWhihGNNGiYsXJAGBAf1XNvvxEhMVYweTFK2yG7USEH8YcJVvhtveVegR",
  "key7": "3iD7Q8N1ddkteyJWY1rWQJ8JAGXigvvcgkdJ3Vq1XvhUTgZJYt9VScbNpQbpcgwNAWgpvaR4D7fA4QscJRghDdef",
  "key8": "3MLCWAVrst155t3sNivCHsEgaUDna8XTcnyJtPTcoZ9hCtnaRfmJLX1jof7mCPutFRKuBqyeBuGBQzJeB4jerK7g",
  "key9": "2kWBYiVp8dwaYxHKj2SHYKDnfAdK5bQfxnUSk1EGA3k3z8PDeYx95gmYDe1PbNCgUn5qvGuh5DYKFQBY5DYpWuLF",
  "key10": "47g9aBrbvwJa9jVqQY1yN6eQsQeX2YGbvH3zapjyDEzA3cnr1n5gESsupVAbT5biwFeTxFuVDMhx1e2UU78eWWNE",
  "key11": "4xRGq2UUo5u2HWzeS9Jh8HVqqxLePgW5jda1bK4Hu7nkTbQPngtkrmrwgrBx8qGWus2T5RqVb9pW1ka21foWCnoq",
  "key12": "2qAdUEsfaxLWYdTExG5nPwSeTwkZMQkj5ds7KY9hf3KXWKZwfmwwbpqmV8JqY7o3yTN42Ntv2j79WG4CJihXpxUk",
  "key13": "fux2QrsqA2iAqmBGMvdA4z9LSBzFfMsjw9SRPsNZfCbbkWvU7y6pAv7541t43uT51fv57qvkmUL937hhbmD6kiA",
  "key14": "4JnpEedT7ztXfnCa2uyTXioxzZJUkS2SCDvVsNQRnsJgvdpqje6oeYsVaNF2KVKpLjXfXekGddTwMjbyigiN1xni",
  "key15": "274dgDZJFcMNUPAztjyHUvJN9LgAkgoub5HATHC7zB6b25oita4SLP8Viruhj7VyEHxKA9awxGw3Fi3GPPXAuArK",
  "key16": "5QAVGGNDeZUsbht7Nux6xc4Rat3GocmACFCiPGZgPgt9HT3MaHaGzXGiYuWwXvfZ9TBdGD7Wmiv2td38kLNUHvTc",
  "key17": "4QhTUHHENwg6wgETa2LgSrbwGzjJrF2e2txHq4o2aRzzHghFjCNLPm7QRs7bhVFE9C7F1vbenSQrdWH6yR4CC6ii",
  "key18": "3sVksUncoBZMpXHjoA5iUgTagMVrwzsarLKXwKKMKaspfKL9wVMhLV2Q2B1ZACTka2pZb51UPznx51erq3LUNg8x",
  "key19": "4FkaidG696NUwUmVFVbTd3sQrXHWXNDgLfbnnsjf2K8mZaqsGxSnPVUUhouTdnniEAuNxhKm2sa7UQajExV6Low8",
  "key20": "5C7ymfNMhhAHwa1atjBPNYug92fyVoZXphtZYdDDEr7qTnLx5UP1rscnavH2conFRnZzeJEGNTbe45gMs9wp6TgM",
  "key21": "5zhAZ42adPhc4mQSbzXeHuR8hVMYKkiBWdJpvxnDDj9C2JVQp2jpQKqpKVk2nZqthHeRvpWsa5wA1bev2tq31whx",
  "key22": "43SqH7hmdCpLY7RmAbVbe2RZvem5w161XwN7Vx4eHbsdD73hdq2YBjjfQPMxDqaWAN9ek2zuv2BQ6rRdRGtHFsdn",
  "key23": "3yQS9BmsmnNYZbV7Zqt6MpRj9pZ1KHidJyvuXR8hyL8nqMTtt4t4FiikbfPurH5TkPQSM95XXkgRLYz8ppFs1ibA",
  "key24": "4fDC2CVx9BaxmJri3ehmZGZej9nXPvmEdoY3iv8rxaVdme9GkQvjyMZoHjSSt1yVujYYQ3LbCfRY3M5eAw8A8y25",
  "key25": "41fuDGCgU2fWp7zc39hhfjMVCXzHr5WKs3Zxxus4JnCbY3a1M6g5V1v5o4BWUe1Cg61YVJTTWgZPKdT72HJefdEn",
  "key26": "5ZFFtAdNhJRKHNqYn7ZqMgErL4vJ4AUQUYZBDLm5JsRgFWU1SnhnZBzzBLk1swVB8omQmwL3xcM6AxNoK8kCNsRG",
  "key27": "5BscYvvSUCQEwW7XMiMSPMWz2erJhw2ML8Qs635gokEmjXLqAqWMCBQFGryPfGCSU3K2L7pANPZCmh7tqJE6xCF6",
  "key28": "3oxXB11ruzwmSQKHfxPKuvodFpNhGN6JmNr6wQGkP9aJAwWQnMgE6K98LMTBBoQ9SbSBfnBQaUPr5E7Y7KAERadD",
  "key29": "2CGMtoBX8ijYSwQbb2STSb4HyBbE3Z34KEfv3Pew3SPRnvNWANQbkqGJw4iXf9tvPA5PZP9gsrZZWGiNRxgRffZj",
  "key30": "2NyMgNMc6uoPxo1aaTiT8XVWH9yP6RnGndcYnpiT2n5TPYmbK3FJMXn7wmWmYoP4kaYfUndbkDYqMNhp8LdnZTrd",
  "key31": "288bfBHqNwBwsNpWwpwY1amPBph4YjgDxZwVegsPWaqgdCbGqgpRyrVNYdF5TduiuZbbEAphFd9zRGyqTAtMFXLR",
  "key32": "346QdnCvduNNTtvS6y6qaFXTWxbCJcpTMHF9jB3uq2SKZmbGLmLkxicTMJvoQgVFgHnm5itJb14geFKYxcES9XQu",
  "key33": "49eEKNo7dHR7sEYEsgHQvgHSdP4eXVNSwjdQ6VJE57nwHw25rSA6NhWna6mCeX2jEmqUUsR4beFyEtEBLRiuxQf7",
  "key34": "5D2vgwQQbVy7RWLRHkX6rChfu33RJvFHELP83VtiwNEw7RU5F6WkW4pe6UoQWFyZEC8NsDtDtCwKVWRWx1LmA3eA",
  "key35": "57JcdnrwHoap9odrTTDRAgNu5htoAWh9Sbkvw3L7ao3moNPccjVRixYiRousBWZbasaerDNri6tPMcgqEnYbxD1X"
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
