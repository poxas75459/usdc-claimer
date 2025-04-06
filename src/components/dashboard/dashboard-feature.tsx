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
    "4QR7vHz9UGBuvnHFBN4Jc4rm1KNnocZsm37BHA29RfDXFDgVroD646TGCYsGUbPzWJjsKYsMLsesj3GUN89MeExb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QDXs5nSbzym2WeMeaKbyiFT8gQvrxKnCU6xCaV2PSwZeCrCtxYW19TCTeAL13oMEEkdgM1SzTMJZHNh3md5fcS",
  "key1": "5GyWuVvud1GbMNuo1LfeJk4t2JizTnE7NjMMh18A3gccG9h7h476gMgTv57hE2k9uYchGuM8HanCyUzeQ2WfvJng",
  "key2": "4KM4kXiCQ9W8VjZ5LdkgbT2yRJfCSVBSbUUVjcjnx61SwRdNCmwztVhxdSQjKooinHZdLz1vwcjcvK8s6bjQmZ6K",
  "key3": "3B5XrnjAWFF1ZnQtvZiKPx82nqGHmnsnu5dGxwtJMiK6hs6QQK4W2bzMY3GQEbi4KwGAq8mJa17s9PtRyckCws7b",
  "key4": "3LX8v5sPdBffEvBUYECNdDEKMxmZ6XeS3uwakTDK8F92UFYYiiYVVZjaKKajohX88PReQEHYKaomwV5FFiASbvMx",
  "key5": "mvTPnsTVaBE6oX62J145712Ga1RHLR8nvTnfPik8pEdqVMV1sihGBwkE8PZnNfoCmKTh65K6FT1TxMCK6C42tdq",
  "key6": "5sWGEL4nLJ65RNXfAuqb9ydR64YG7KnxRNxH4bya57sGeZ5btpyKiaW7jPryiAnfqhxT2J1ecWCKLqNhNsvmssBX",
  "key7": "meSvomNPuZBsjLux5a93vXm6LSM8PKtQeLAzmXBKF5hF3fbyMdtvcGdDxXWTr5iR2jvtWdq3C6cNMmRLxW2gyXL",
  "key8": "5Aj9DHsGTaYUp3EaBbcwtd2PUyMJejK5RGz2DLHEGFRGsKHSYiMz9kygHL1JrsZ6Fz3qDcQBHV6i4smWcB1pUvrx",
  "key9": "4hEuNbpin6ZKpZ2ZBW6nWKDGUoRYyaRG1AssGxZwVW1kXrzERsW9Lvc1w1VwzFv6vyrvaupP96aJvExJrdJSxV44",
  "key10": "3MYuS3Lv7qE7F23V96fTi7WjG8cNNfeb8ULsuQS6gpzCsBrez72PaRX9cpRS7Ua4FJg3J6Gkvx3ZmKL7PtSPd1Sy",
  "key11": "5XTAMQUaXnnckAC5wmCowM29Nhte8W4t2BjLGRs6fTGxqKyNojwzirU9ECi2mkdN2bBHuEixrTyZWeiuainVjjzi",
  "key12": "2p2xXvUwbZeMETMiSW8xmF33zYYVn3km3mvWQ5bZE1CD8S7GmagkfCv2iZ12UWBaUgBJcK63eorXUYBZmQLXYTmK",
  "key13": "2BcYT1ahiQvD3vFZVnhFsGQS22LAiEFfFcMY6ZvBvRMAKi69aZ718fdqA3FpzZd4yhmtZhPX7CWi1WSJJxJwVVkC",
  "key14": "3JQWgheWv9i6ViXvcsFFY33SVVkhCgcGXmMhFhQMWy6CQZ5p7QDcGmJgbu1ZY2n3FymC9CuKZTkUWL3kQtiRuJg6",
  "key15": "49hZs487c5H7W8zuFL1VsdGjA6bLfPEkP4jfJuz7cFD2P5WRzXKS4GXMSRNNXxvgchxJUE97DYuzWTi5oABqG4Lr",
  "key16": "yuvyLr9oBmpcfuATMcgU2RZeJaiHDHgC375vJCXaKyFyesCq6btj8nyMsae6YZyCVTbnayQUkSmsUmaQCDG4Xpv",
  "key17": "5nPcxtASh1ypop5TTvcRZtfHg26jkDtfGoMFuVxxv6maGEb19Lqpr9njnqmCM981Dw9WAaNbzZ1XTYYdXf12CfPm",
  "key18": "3aYoVCG2e3qMaqEgumrVMPdr51Vj21fAvygHGN8zgnDkECh3ch5iuUD2oqzxAqjGD6a6hvGuAx9LKGYByREppU35",
  "key19": "5bth2tpeu92sGLnBabAS681YPT64mFHvmPfk6NtLWJrpj2ohzGkfEUweRbMFR5Wd823jPrD5er94ncF1QrS4Z4C",
  "key20": "3AXUbiJ9R55ywN3CBQ8P9sS34rGrFSNvorapv1j2aqg1xQqeMrf7Dcsz5mzKmka8sdqHdroRmDoSoj4pmhmRDnwU",
  "key21": "37L1taZBkCFjRR4dY7x7iTWzECaZN1QHdztqBdvgg31oZTTsbqcT6iPCRsTeLH3gVBQSUPDweyU9GbeWF4qcJJgb",
  "key22": "3eqmRwZAjFcFLeM4oUbPDuGyzg9Ekp9cZAE6hKZpd6iP92kMBNUqZhqt5nzdPMDqHE4NPrZa9KcAUn2Xxdgkfyzi",
  "key23": "hKo8X37d6qQHJSg4nwkjk9G7onsCzp7eHenKHGFS5ek85bpF8pEoxSAyPCnLPuBRL11hjWq1w8m4LNqCaVg1bwf",
  "key24": "5KVbHryUnN9TZsAopEVJRb7kZepdkNQfgURiJWJm7PkZX89xFX7wXqSoXoECJkvfmTqHJJrqm2Qbq3Xbo22c3rUQ",
  "key25": "5UrWNo39ZRrxqZfBEKrNngAzroBDGJX8nmrXMpKBCpY7cmEkAFJh77LbzQG9Vegut9r2ZtpehhxjbwTP8UJ4yBn4",
  "key26": "482nvhiuCtTcdi3gtZXTa2k2c2nujKntpqkp5tGdEw6LKKXs4Kdupxoz3rz5zaiYxCiqyZyt99PRNWTFomfcWT84",
  "key27": "5Ei8moKeJLPghEWDKj7EqUh2RvsacTmdJpmmKeLtHj6B97MVkzhdJAHLE5iRe4zMqc5UwfBMvLAAHwJRfNAtJhi2",
  "key28": "KTrr9qqwBi9hDoVUxj3DQhwvLLaLKnAqLZT3shGW8Me5MMuKkdyKZYB6eYufS4o67vGBTdVdpk614B6CpYZHRRX",
  "key29": "5Nw23sRBAokLupW7bdckMbjmAiUhu73SaPXCU71PKFtiYBSDnKwv85FkyAjJDwXaDjFdK52ZHUwLDGcVJ32rVBqf",
  "key30": "4Eu1rcKkwGiTCTNWdBozkG7TvD6PKCjaZPmskKQyEGJ6wFDYeWESkfVHQwQqNweh8q6d6goEEEovw8MK777LmPdG",
  "key31": "3n8q8P7v65C1rFDaW3RPNFyPA7d3teN6MqAj9VFr4cFmN4dKh6nxz5b27mi3HSm2AahR4CZb7fLHTxbyTqqiTFQi",
  "key32": "3iyChQXbc8zxtp723oeMra2gHDF4Mtd4rnMQJGsHPvnVEyVtjGGDiKbmEBXSC7PPSXQnzFeNuMfLbE8343yS9Fp7",
  "key33": "3vLu4N4D9EUW6TUtxzseS1pkQPe4ruUKiaeQV5geZRBYNCQeMdyppxRegNXj23fMdqiqSuvXbnjnMPgRxHqJStY4",
  "key34": "5Tkhvm6UCMZP1U55Va3F6hWQtJrup7WHNN5Xqkj2BAC4DgTge3xbfvmXVkX1NhLZYPZSjnvjbc6iL3daYDjFLwpu",
  "key35": "TfQwsb5xUEfoihhVuyZQtsf9mmK3xNhDkX7nr32eVA7mGVECuVouCvmdRbgJiG3j65xzX8nfKzDGkWAEmwYb3sB",
  "key36": "5Ndb7mdg97wJkpehubsJGqUBg4U78cQ3qv22Y69dmAD9vsbVpYe7H4ds5c63yD5owvEq1r3WXSYrbFkZKttYp6VF",
  "key37": "Px8FNpA14VVu6afGKtRBgdRbpzGnwMUQo4iUA4ewNt1c9xJaPsP2LF1GBjuNQJpSmw3CYWh9HFzyhzSjrLyxbcU",
  "key38": "5BFi5TxVFyR4QaLaxeBhwhJDQc8Dqz2aQvYGCNymY2B32u7Phw2Mbyg3QQMm1ApdStDs4i3u1dSLsTvdfrC38yJf"
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
