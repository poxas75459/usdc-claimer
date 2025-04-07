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
    "58xEyDAULzhtp1WPt4bNCCwF8ZYJHidEpRyqvpZKBLMkZEB5WhqhAPeiduhjFzJgMzicmKnvVXiy2MyAnNU8xDD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3meVPj9NuzhS5sBignwmyxZtVH3gUb6q5JyYdMbLPoC9qTgEKXYGdXE9em3EJMNDGukWRBJkaTcdetf8QPBVPkjE",
  "key1": "4UhZJz9UJevH8rH9PQt1b6YJF5DDzNsm3y4vts3r1twRdse9j1PEiyt1YuAfVuc1thgBWUNDxELxH6HLZss4tEmK",
  "key2": "38eLxDFYHWUVyXpndNt2xjpQ5m4gGuSKBPZyBDBb2L1wmXga2Pm6uxVHo6Ss2gHY4NXTJ5HouxWCxoKTSwLhZrW",
  "key3": "RnMvbehsYYdqJaofYfpKknHt9b3MGN7tcakt8S75n6cwvo15PU5vydoTyYAvb1JsbpumA2P5VPisj6KNhSyKkTz",
  "key4": "4Un2hBGUdsTJPFGHumc8o1KPDjgnistuhA2aPeu3CjjvbqtUrtFgsGsm2yv2KcBUFYb8X2fRSuEK7jGQRyBNsrEC",
  "key5": "4k4e4NVJAt1ZyYU9urvMgLsfqoVy2asshYPF4Qp2GT3HbpYMZhu4RFfNyaYY1yBbGPhoZW5qxxiydnZDkioAHYWA",
  "key6": "459nSy1SEutVw9cuZzaikHK8F25S5hEziS2Ev1723b4KB1WTKhiNSEB1xpGgDha14cUXfefzjG8fwJeZMSxpvET1",
  "key7": "547PKg5nF8MBPtpsNHpAiVa1mw7tYo6yNPZM343we5QXB2Sxn5oqn2xy3nZQQDebnpYuxQjkxHz1c7CUZRnyEg7N",
  "key8": "4J81fWj2PPg2hkgY1CCvpv5i8LCzkhLnhGL2mSQQbfe8CiSJAhe6PQFGCoTS1pHQspa7Azkk7yQ52j25ZkvnzQ18",
  "key9": "zoTssfN4UDZx77Cuj9jPMvYSUnEFPEUVSguDH6oji6JuhWcvVkPgQ3tEpkLocTCYKRd8xBjrn2oy4aFudcucxBw",
  "key10": "5vzSfnBNpj3JXMYSmBV9K2Fu4woZpaQRxiC6PrUUQx9p5ZqaNpi3kfMG5noowAy6DnrTrqk4ef6Ncn6PGME2dyRB",
  "key11": "3rtNVz7iDnB3iBWNMZCNsi4Dm5ELMAmNR214T9XiTzKLWYGXYvZe5mDM8iSb9NqwDgWJsoTQxVZLzGp9PAQKrU1o",
  "key12": "22cahxqK4ySP96VCyvPdqy1mMrwJakF3MqnqetWoMg2KLpXwL9D2RKx4tMgYXa11uEeGSsXnbnaniReK8P2SCsyp",
  "key13": "pBPwNL4eNTVy7giD6BKE33KLaHo7Jo2CNZZThHhiSN8YGbzszUaRdAf62q5pyUFgBDyFwRT364WmTsJKUgjgHL4",
  "key14": "5f7MWFuGcE1zPas2KnpQAKLtZz2iUd741r6hfnfPmiJRVXZJG528Ex6ehco18zNZwAf1YTR4tJmM4pzmJV3cwNch",
  "key15": "2Dxbyz88dHvFQzUyHo2TuSsy2dcqU2ZUXyZwWK1rccMzgp1TDkzLZ1wVzu9REZJpZmcQjtShk3DJ3tAztZKhYnFd",
  "key16": "EePJ8qM7McunxUqG7pFDokJwPttmPCsjw7ZuQqQcLX3uffZsPR9biedKbUn1XfYfu2nTo9GvHbawyAKjvcvXxaP",
  "key17": "61U5xxUrRF7xqQeaeZEEBJ1LaEfaMFGCopFLxFjsMjDiPuV2fghVk66L62krx1AdEQhpTBexL3CZNPAy43S8vcSn",
  "key18": "55SWTodSjwo5iSoToUi6nWYs2mgki93oofjdtR4dveizgMM8tap5dvfestUPNyWGhQ7qdFMD1yLiRuW6G7pBDgrf",
  "key19": "56dnT17mF6sHubVKc9ZWqB8bvsEykA5nBttbf3G2gZLTXfjNh2UMEXSEJXz86z2mdSJiWdAP5gZi4BiEMbsUjyPt",
  "key20": "2jNu4YWsL9JSdEf9goNR9ihBdFuD6AXwGL2ZdjqCEHaCAxkW1sCbZk3K9w2AgkimBGz91cdAjRJLg8g2vPfkAtva",
  "key21": "5kVPmhvfZ6wUTrW2GLp69kF5ofDNz6qQDTwFUCPKDjmQj9DptMSRH9hZwmJYPwFHrWakTXphgxzukdW7jMWsG4dH",
  "key22": "bRMtJHnESbuTBFaExXfb4X8pyBVPCKwAEwYxpEBVEiwPF5SWZWYnz4RTZWLWc2wFZGpbqXGzb5MUaTvEC48vXzp",
  "key23": "Ff7UjNyu3YW63FfguupbkZDq67MoTE4yA6rds8bfW3haF72zzULNgWdu5DfosVPyW8imK5RDbc95f7hwPi5iuaU",
  "key24": "5DodK9d9S9u3Tr2vQqeGoB2DcG6MHyUaUZuqYcf8fZ8YssZ9WTSGhTow1JnkzKzme3Bx38pf4aXNPb1n9Ld4c86L",
  "key25": "3KbL8oz7aQ8UuYBEMWezE6mcU2gijjSv9Rk1U4kXZeTGLjjf1J9sgZcESj5TohjrEsuNStQpFVzYUZemki7Pr8Ah",
  "key26": "3XNexSydgStPdjswAVSm1SbS9cdUMXQA269NDYBdVsNBqm3ef2qGm6uE5pALeKuGojeeMQBd3kT3vCPsVmurqLFk",
  "key27": "4Mk3MsfpJ3DBLMiZPGmeKTfqPGFqVEcbX7qn2E3ZSo6TZ2v7nmFoZyVvvX4vGGW1QTzX8xbWv5ZwNhMwZHSB71Py",
  "key28": "2BjJfiG55zWmM4BLLAfNzBDgx6upcn94L5AUzGAwzB83kgU34PUqE2jNfs2kvBkAKG5sKSiqAGwnJgMKsnATon71",
  "key29": "xjHMr3cFqtgu6ozeUjxBMcfmTaYvq1WLJPaDay4k5PVMS1kAvqDtTrjEPtFgxJDA4vokAU21MrCVPN3kLZevz7C",
  "key30": "4PQ6UukJ1kPQZmAYKZmCo5RjGeBjMzvR1WMAW5YRurGQuS2D149fKSn3BmE2CXrLbC1nSb7CEN2uHLnUtseD1q7i",
  "key31": "vwJqpfu8DwVYYi6zeeMpqcYEanj1C9wUUivHZF5RpD6rcDG5CNKyT2usUrGrkXhTFKHBb9p24Vjbz6rAhBqCLEH",
  "key32": "4GoWFmra8s89ERjTT4gzraDj4zvDuzYWSCZYKB4eAG622mykv5kEX7ru4bBvK3tQCkbbVDYLmgYoGPSn7GAJauf4",
  "key33": "5XPGi6q2W3RYNrU7ykk7upFXuSzREimu6pRXfmBecpvCRi8ZLkPvWyaiZMMV11n9C9xFrGQDu12AFWmdnLYzBdxL",
  "key34": "2a4yGjjZHVQMqSLfFkPqP8y7C3C6e5RKSes7Z2aXLbrhp3W4R4dc3BqzohHfpa9yxZvupfFCsv9e9YwmpgRbLQPf",
  "key35": "2LxQTMQYYhMMMJxgzYt9csztuURFJZpccuLBv7BeSC8HpfAniJwydD7dE8ZVwbbzXTEALDoWdg9xAnEY3qjB15Fj",
  "key36": "4bjVsPKrngqdxjKbEeeEhP1jwESGXDQr91dfMmo6QBHYBzJJNrZZJRBRnjNJoxRTpnDacP915VnYGGcfcVumjTdb",
  "key37": "3BQXoo3ipZwZrvic9f5Le9AcZn8BmRiTnV886izKt1K6pWeKEXCfR2Thj4n8GG8RtfmAV6mANU9HVDC9yoeVhrw",
  "key38": "2QxtMYWMiEHPAeWHYSQpctr7WDTxDTCun1mmFEwFDi7NhgSZ6apnFbf67xidsfj7f7nVgx7JFzTPbzcc1LgBDxnV",
  "key39": "41fUhsZDNSMNm48xoUUZQ6c2xf6Fpd4PfCjqjDLuJkcTwsiWViqWRMoTtYCqUcinWG4nYGKR8JjAUC4D7vKjsNqz",
  "key40": "2wHjZAfP31uvqY3xDoGeauY4MR94t9zRT7iE6Ro68htjkcLaaK1gNMWYoMUuBwqfbkroJPkgUfpHE7SLbqmhSYy4"
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
