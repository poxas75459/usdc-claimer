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
    "2fEcSVvYDuUanBpDqrzS8cYMtxkf7g79RtcVUxHFEBdbQR5QYFQZb7Y8YVezpQ5pVU8VmAs2dAr3PHQCRFU1PeDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m696LbNHeLyBhFrjCHXaHWSDSKivVb17P4Qn8uEpSgnCkP4SyiPvwrRGHrjokvfDPuj6cRyjSq9mSU1UdyARR4J",
  "key1": "5EuR3WisJmyZKpSqGymCixgzuRM7RPzgyPSSg9Y6baYxoqubZTLDxpZyZKzinw2hVo1YaAqjFHzk5L7REVQa8SX8",
  "key2": "65jPZCGiy3BzC3qr95XPG3qCueuDQwV6tsVvEZRUX2KzX2zZ3kMbJN5uHFpivYscQpwXaYj76vKm46xwPNVrZcrP",
  "key3": "41RSzeuNJ4TwyvbG2i62QuJXDotgdvhEbkreGrpVK6zPMN794akZ2XZ8qqr5K73mkTG9dr1UT1S6Ms4s5hVyNckD",
  "key4": "2R4qWMtEmFsgBsGxKJ82xrHkLrffMbSnMRCJ5QhbaDV942JKK45MtW2gbP2kbRtfNtgMbpv9p8GwTSQyBHdHGK3U",
  "key5": "5SxdENetixWjPkRkmoBJ1ykxm6T9fd6nKkGn1LcsgdXt7iPK1PHXcsJzSfrYsfh8nTy6Go85eXNi2sFWKM5F4JWu",
  "key6": "5g7nnZb7ccp1Co3fiy3CPXKQNcGJMFf7rmqTcjtgcareCvVsRsgjCp8GUb7haEHcTYezuR2Ksox89dbgZxYa8F2u",
  "key7": "5dppCYWcyJGsS7Wk6K4pgs4fGzd9VLBPGGGvUMKxJSwSqcqMCZrw7aLGn1ek4q6Cn2Mu2LKpojCaDdtgRGHK9N3Y",
  "key8": "2EbCcrCg7cqcCDvGZvLS4U7mS3DTr6rJdMyfN4kjEde5UzDP9PJWeW7oXGKqtz1X2rtGjMRdKGfTAhvHCC3hL1E8",
  "key9": "4yXJg2Uog6eRhj9YsjfXmGx3nrKBYxkkuoAWDDqZZ13JDp4FdyY8HeVghxxBuTcQ69RNH7mg9AdsPFFtvgqLsK4H",
  "key10": "2Q5UmCBzv4JY4iPNFP5wCyTtW3W96zffP37idvYEJWjBYfkPYTaFgda6wpkQFU77SasvQeXvf4pCU2y451ZiAxK5",
  "key11": "3mBXEKdscjntoTy7Zw9B9ngQrxEv6RPS2wvpsimLsbVxmCQk1KbWZVUBKsfdpiFjyA6zVeQMKnp4t7B6UrULBeTo",
  "key12": "343SXKxQUa2aFGyu2fdQigKxytYt6S9BUzD7WZAJsNTxLTngQDpX4vMbnGKKQR2QLYSWE89sbLJwSw7qpDXhsBBW",
  "key13": "51Av44fAVZ8aTYoLYkSAaNhfAnVannJ6bBA98u8xZXhU7VybR59PYzrH5ecVWNfN2x7Nw5wBXDm1k8Qni3yUbfLi",
  "key14": "4b1VSDcnA3aWSYQLbsystx9aduDUB1H9hiwMEBUJ268W2xpPhiVYLv4AiwxQZxN3W5u3NYmRMjM3EBCkHkYncPuY",
  "key15": "2vYgmF8AZVrgfitnChfT4n1RTdnGx1jgj1jud8drMmNU9YqDwbTpqFgERpGKhT3Za6jvqojuTghjsFuD4Z4KNqqt",
  "key16": "3NqgdFBrfPHZNRbr2BVZ76752BG3B2VVUxtAThsk7Sakkg4vvKwip7G4Hs8Bbvxn6WkNju3xVz5iNp69NzgcGieN",
  "key17": "3xmYtVTHmXoGP5bqDT5SmRF277edKi7UwvksYD3oEPztDjuJfWpFYti8PSzmMXnyCLSAsNoAiZip794uNypUWhRY",
  "key18": "3r2ccszHNDjRcJ8cVLHo9b1gUVE5aUqnmJMQyyHH5eEUHKxAMHJJYbeMVuUzvM9TEbcVKDDtKDtK3Zi8WGDPjr3X",
  "key19": "fJgRT9AaQhcQC8hRryTUTafABXNLJpayaJCt9b8w26YG7qTxdR8Nxt4LMhyGyfjiRqbYGhyhmdBJN6QHg81zW7Z",
  "key20": "8xx1NZXNsgHBDtJYMMgsyH7iERz8QpNj73wo6Yn1fuNf3zmhkbH7exEic2n6wrJospVLqYoU7RkbscVvrtggdqs",
  "key21": "hjrG3NWgocbyzSixbFPgdwuSbqpuixrMeRcFmj7oxjUo3X5yfM5BgR45FjnjrnLpHJp6AuQWTHSjyDnnTstkeQe",
  "key22": "2u8f4ZKyNjYJcN6SkaS7UBNa6T8EG845Q2jkfqaePaegsRTP8oTMD8NboccMui1rAt6H5fCwQCDneqduhJxdYQ4a",
  "key23": "4pXApUuKtEjZDeUMFFTM1bEViyjKo2ZqYxMSQ8QBP2QZbNWU9sz9UWrVCRC6dkCQJvVy67ZirYvZZpj7rDPWQCeW",
  "key24": "4KQRS2y69k3CLxRMD7wm3veyag4VwnhpAu9EVo9ss9RiJBBnrH4XvaJsHWB6Z2fpR3ncrUie8P68FwFcum8wfMXd",
  "key25": "2jUN5tVyR4PQCTKtEC9LfRqcnoa1YEYJcYAFw6rr4WVvCNynYTj6P1uJzG75cBCgj5i92MNWpw8geTLZkD7HeuEJ",
  "key26": "62TJhVCscuNLo8cJgpAzcKNREVg8e2ABAshBstopg3WtMWqJa1aCd9VS4n91tje7a9ZCEf7Z9Xc1xRJzRSKNFdf3",
  "key27": "SFbdjpJCawvVsdsJ8Kc96bKX3y2nvkArkAeTchGaoLFCJupLjayaxTftSXYUVftcT9NkCdhvnQC2jdFojciGwKf",
  "key28": "2m3WxnGGCDsRRbjwQKxwA6gCEZfLBvgPN221qGn1Ceohii1qVRfuqXvSDytf3jXLFxEgxkhJf5D9V5Dc5vyL9nUw",
  "key29": "pZC4NFvjJZqciVSTK73A9pQKfw7XCBW8geJwDs4GmFruugLDjjBcALNnL48JUytLEwuTMBpKXbAwdnhVFbj9YSJ",
  "key30": "24RJVSPTrcQcDuj9KWHqz9TbF2SDvgV4SUdtUTkonVtLxn9poYSvefE6ryBgqJyq37jwHWRPQiqXTJZoMhouuw9B",
  "key31": "2UifQGL8yJJmzkyLFVof8xKH1WgZe5LvtPeM2KavyLL1BmWDNQ3hhsQQnsc3qxVkcC6teT4BioJC8Cis1pgNqfLE",
  "key32": "36TquyuvJXJhLjkipdetjjSGcqvPQrBm68XuF4GNr2Js73cLrLzyZBmxCmx6JGVzQgv5iN2SFyBavqYjm4Guh5pU",
  "key33": "2drmyh1QeddA7vA7bh7n3wrsTCjkyHVDqWLDS6JzUWcV54zLfG6ZWKRV58ReRjUdb1VM2H8Cs3wZBMmSrPkK6yzC",
  "key34": "3mBZua9HYp4oSC6f1mVuG7Mv3amNVbxvHfvwWc1Wek8978LAJpF5QpDSb9zP6HcD3Nji7TvZXdAzhayVvQu1N7jK",
  "key35": "5ZKqeNNLy3nLv9jDVb33cQXhnQ9wDtjFTf1wUGGH6t4z3uWRwpVS23SZ7vjoQe34V2sdyDyCm9tFnLDHgyUQkqEU",
  "key36": "39R1gn6K7D5rP5SY5nQQKKfwZsE2yTNV5ZivKzyMEGHdA4Z2ZYHsMnVUjiVm5sUL7DXdDENxLrC8hZztitLZ7ppk",
  "key37": "5aMtmkHZqrfGsVwYsnyUQypqGPB864chf7DTCamnaouTmnJHUnC57sGmmYA96YCxqaBofkq9PtQwF3fQ7zQHZbMK",
  "key38": "5sADpCvckSs57NfrGaXYNrEf9Ly6K5DdQp5N4c3URRjyfvyvPejoGGxsphdjZN1tFFTeYyjn46TNa63co43hc7mW",
  "key39": "67WMPPmEcJqyAXHMCymYr4jn4n1YWWXkX6xnuHLsYcok15g63FVxEf3K5i9TgzqhC6sM6p4QV4o2z2AswH7W1gvY",
  "key40": "2Q6QtFewNWh8U3hFhsYL8uET7rR9bRhCtf291KtKDdJ2H5zZ9fixGnruXktRuorREnwWF5Fuvt2RmXyrW7o4ZhZd",
  "key41": "thXbYJKC72qKP2nAJ7cdaqdjcsLUN3y1k79qz9zmsnfCUCqT6Vhibu4BTPTsA6jGGbjXJGuX7AuF2JgARoTP4rV",
  "key42": "5sMhFPWuna9XjDrZDM7V2m6mU2K1K2ffcsTvSQ5BjcD6JGUavwfqZDmATktJAL5vDMCfXQEbNyNH4CUgTf1bq5NH",
  "key43": "4KHRYVCgVr6Buz4G7Z3eEj5kECP7UeX4cSexjb6zqcEFGrxL4kXeB9j6B8kSGKMFrMzZpNasimA6w69vXJtfsosg",
  "key44": "v8zBbqP276KJJffELZqVVwV7uTWaPp1BEGjBDAYwbZJ7BiTa1RsKiNYVN7HWPTv9rGqDPvFqrJLUUJLTsQPv7jo",
  "key45": "3fQG1cYfDWbSqs1zNdx5kfMmEZYPSpiUstskVSvxzteBwrPdj2j297ddUDSFfap4DsGJYUGPL5CDvci6Sd1DMunF",
  "key46": "27iozVkr7YzP9C96rjhzQGZUxncy8dzQ2y2rH1kZfmJCAbSftiGB2BW5XjtcYfB3q25Qd7FiEJE6YoXagDniXyYd",
  "key47": "4RzvpbjgivxU9pbAjjBoxxVzYxKXuVDGGRqBZtey9JPtResupfHnp4f1KP7QzsMSKqwYKbgTUEqivuMtm3SZFfPb",
  "key48": "7Eajr42zu3F216zNaEk8kX8NquC11chCUQPgvQ8PBegutMm31Q7VtoWCNY4xkv5vBUm2b5qVmnPC7Hv4w2w8zww"
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
