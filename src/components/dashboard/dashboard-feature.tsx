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
    "7Dz4qkAkyh4cBsCj1B7hLrXiiCufmnMxuYuUpTvunJnHetAWJoLJoFmiwUkGwjU7Tbk1eyrsS3A2fMh3VMTvA4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ofXU5yPjZfbxWvR6ZmzJstj7L8WThYjTDVeaMwyGW9T72nipAe8GvNhdinxFZfDGd8kJvfQ6yrqaC6qaeMGF8o",
  "key1": "WzTJRC3nYdmMfm4kCgyF5NBBBaECWMQTRmismmSJDxr7b7USpyjVWupubY8CYsone7V3N1Ch6XYRKZMYgawSjKB",
  "key2": "5bXUsPm6JuKQ7EqBEYH2EzCJQfeKerghMjADV4UMoDqmwGEwTQNxpHvJnJbEJ5Tg8b6YEzU9a2FgbLcBEiCsQNiq",
  "key3": "3fTqe1sAJSnahXiffb3JgbCmdDrBdqHnu7UeVZA2MLmFpHumX4vcemeh7AtRL2tAZXtn4QWu7hMAY56UywvQRE1K",
  "key4": "29NjzyDweR2PmA29xJf9gonrgLtLt2DSX46wsxfXipCNL5y35XoE2B2ZJet9JFvr2Px42qcs1jdeSQKvk5dz64ea",
  "key5": "8rqB24VgHoHYqQgABjtdtjCp4itYgo8cBHJwsefjZpnRotokfmLQUmMfZh6mt1aDHKipictg6MB97UwScbRWcYo",
  "key6": "4jTArCg4q1EDTnu1Mb2av4J6yKeP17SnXaxNvubbv7Gfztnywbbo7HchoaNvedZhPckVkmARScKf8dD6VF2D7oML",
  "key7": "4oMUbcTu8UqJg3GaNtBZ1xRFkMewBec7Pp8pzw7JAgpmwyMc4XoSumpUrLXQTtszDDiV4A3usekJzcFFtkVvSEtw",
  "key8": "3RmGNEjfEedG3YYgbyCTKzduHr3U6adQxQMCYmR33q5XdkUKjzcLdyFkaL1YniUmY3HF5EpCmftwRCJS3QvyrPYG",
  "key9": "3Wi94a7Fq2AiroaSjYjoj3kBhJqRm8V9JotWbE1Eubn87jB6Ke6Wbjva8srWWDnQrQs7H63ZU3YmDPfnyePJLz8x",
  "key10": "2cRsz1PNAxRvvKwLn4N7JKAHhBHoP5U8FPvcSuuZoxQVcrhgGtPwPZpj1vXxJNJvySGrE2WiPBfqAT1AVoACohYE",
  "key11": "3TfHQqL4Tbfe1pDvPmr4UD646vhJVqkpuc6SwRTN28csEsdEV97ko5EPPsSH9Q9d3pH7NF556uVmq5eCqyKLV5SK",
  "key12": "51ARDm7LpvA1PqWkronUXzPM7XWMjHCYDGB4ZaUniuEfajxdtaBskayd3reUViNjvkgsmkSWCywCUk8MSwnvYDkF",
  "key13": "AYcKeZeecujnbZcbLDAWidLnumnen3jDCMFvTAvHpFzygNcWUdNspwBKpYcRVELEeDcWciCFSGiR3sJzvYaU1jL",
  "key14": "595nSYevetQHTvPDH6moBfaUTxbzzM9oGRoV7KXnJ6sS4ZtQwZfuh6HM51Cz9YobdGBBc3jX5xScgafj4Sb56UE2",
  "key15": "Zzz94Xqpic4gM8hGivGPfgTGvaX9rzfqxMdahNR69j5o4nT8hoP3YE1ScjExaGrD3XX8Ary9N7mXdmK83EhCtKH",
  "key16": "3kKZRaFspEWjGcAUsG6SJcPtGkGmsBAabyPNsy6cKDdgtH3TuJ1FLwii64JwRmQwRon8LLCRdvHY8ZqkGAVr9oGL",
  "key17": "CxdJvgZJnQBR3A3nzLLX7qpqFGNLLzFKt3yVnxHQoMhBcGBxJokM8TsmXAifUKnf85q41tyy6jvg9AQeNZzLfwL",
  "key18": "56bUw7iCJ5ooPuu5GaPRHVzQaJbDd6LuhUPqfL8vG8xwkvgaNusSbLQjhU1iR7AJUNwvefNGXkxqTk41gj84X334",
  "key19": "RkJssLrupZYAhkZMhmAdMYkR32dE8827y7kbEhmsJmGk3rDn7J8u3uZQzcZHF7aWvsHpDi5AnBh8UTaCpQQqChV",
  "key20": "X7w45yARTiAJUtxw6co4kEkdVRgVQuKDgYUY2vYbjGQfyKf1GVCJqWGP91xYBe5LhAibunBvbe6xUe5i2CdvLkG",
  "key21": "51swypsCCsCrmDUep3NxhqXFQ4MrE4R5NshRwZBtoPEMJkWDHXW653kF11GyZxCUJQCxbixcZ8LJiZxoJeMk641z",
  "key22": "4PP9UvwH5gGPCWuRQ9ydbHLKHfCDwxEJ32m9TEP7RYY95pv6DFsoaDL6LGvMrmnV9ihA5Q3mai8Qd5Rv4BsFs56C",
  "key23": "2BMEgiCYM3EcghbGLCngMnyXQVSng1z2qfz2Ft6LuhBwufuuSoeW5JyQyYqnBWxfyxH4xzKpr3QUaNVNqV9qPVai",
  "key24": "2jgF7aBDG9u3k4ZQzCizXiP4rJH6q8UB9XpurprT6av7g9bRQxvuYWZD2a35LVEM4Ygju1UhuN8WGek4oqr9CFsV",
  "key25": "2zSbUQdstx5vYd4exyXtpNnuMyfNv36hYs74p8KrpgxxM8HuvRf4MUXNK6ix6Qpv5713uXsCmTyXGp1Nj3HVWcDz",
  "key26": "2nKNzzazrDE2nUVL8qgUKTw5Y7gavpbCVd4ZWU4JjEL9gxnHVth4dnRy4Qmgmt7sTE4pzc2bJ8JP3QPrPGbHoM1n",
  "key27": "3RKLL6gmY1Me64sne6Fog7WBsMtitYuLr9LuzYVi143koQHpQVmttKTVFvf395kc2rVbY3Piv9f3HKGMLdpefi9b"
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
