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
    "g9kHNSYvdAKDXELpPbGHfz7QXBfVx9g4q1kzUm3H36on6dRx6CXSM3TqKSuvrVBtiBdEte3u7uYtrtMby3KFfjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bP5CP3jEckcnxH61ZVJQmcwScQAmhQMrnSseMjDQWUhxfwyLEVnYhpKkrMowvR1gLzsHWWtbW4ZejnTRN64Qhis",
  "key1": "4urGmBRddL6Z3vQQm1ATn27xRxtg3LVbA57VrwZ3MsniTC6GZLTru1bPTRmgoXMNMexw5HJ8XFF3VaGedde8HZc7",
  "key2": "PaSXJwBHV2oyeTNQQ5KVPTNZuTfwPQ3jV2DFh8V1EU89EAX5o7TGYpCDUAezit9kwScKm9F9yzyDwRDzvcDkPs7",
  "key3": "4JXTKAttfMzSKowiHHSD8anFZdKFVEBLX9uub2qNnqxAncHcpD4apHLv2gvvai3du7WyWJKwHc85yqiV6R8D3cq1",
  "key4": "4n1GiA6pqeuBxwuZy2pxFSawzfdGYRwpGiJrLam41rZq3mtmNw2RgroM1rWQ3b3NYL5biEkZHAVp2bWWDDqZ2dhe",
  "key5": "4tdSr8pzKXe9amhCfzhZEX63jjLNq9vzWuMv322KmFF9Vh1B3VRtXev7M9kCgb5tJPd31nFuSPzvZTqFUJhk4JoX",
  "key6": "5Ypqsh6ZNj3Ao79AbtwVBZsT22M1Y4LTUWCTAxEAJvdZpNQ42FepQwUnBtpKiB1G3BLkPngKocN9APbjSrakDz3r",
  "key7": "5rs5LEmCnCm6CSrto5C9NnUkxs6pZN2BDYbJDGje7XqYEaui1t1cuLoEMm9QTDxwzWyAkMuroGzR49C3WCQ33nCm",
  "key8": "4hrZdMe7kCMqHLWjXrjfwBMouVJCnpFDdqEGtgBmt6ZUoAXnDFk6Jdvs1KqKwF3PDACyPH3tinqH9Mbnvi6cWNyv",
  "key9": "5LwFdHLJgy9D4d2q3DaAUv5ntKfr4aScBBPbAxNceE6ykRiCk7Q543XztqwEckU39hzxDxchcfgbVNcu7TiqQRa9",
  "key10": "1dLqXcEwRKiKbvsAY89STnPfBs2JkVTZiEnM6nRw6oo6q8mfQshWtcRztru2X7ywX9HoCcu2pCjDHqjMe2YKTzx",
  "key11": "3JeuR1XAUSmPEQJSXaHEfa81cnJzRFvHGeMZNCFUUaJ65c615a9B5fm6D6ESaWJs1epJcag6vcjtA82iGdfXKKHj",
  "key12": "5ifCFf5XSVoDr5L3jNwukCuuKYfrquPgedKt7izsTKTiJXXVBMF5u9tZq4CNLgspTgavh6GsaeRy4XnKUxDR5sS2",
  "key13": "64NfEw6PQD9MwmX8BzhGGMgPiTEzjiGt7WCfoEj4oL4MgfC6ktmd7BFAiVqpJncFbLqBcHcQGGV7Nu75oT4nY42g",
  "key14": "UcKqj8nH5LWBJ8KpD3G8PjWYDqYd97ZLheuchipJ1BELhUHX2JMoPv73KGYKLPSXbU8afh579bj9FaxNYDFfbNh",
  "key15": "g3pP1CwasBAWnkqBtVGtUnbyJAVy8Y8L754Ps4yS8pSyDuFaCJbNnmwHJD7FqjmW7fSUCbu23bDVXGppUDyeYxC",
  "key16": "CMe8McL1tGHyxbaNyC4JhJ6mwxnVH8itieikrsUCQgVMM2BSqaHcREQ8rMbbribGKHhKAWLpYbC4zoLeBibQM2L",
  "key17": "4s2PqmJpcM3wZXvCiY6MUdeJjuRoLAvZwXbxu5RLFSiRnQDWvZSxyfHCQ9g1oeNhFkrh1dVQu7dq4NHSqNiXiv5M",
  "key18": "3hDrQjtcbbthzgX45CNweqHuiMs6JQPskzAcUJxU8BEysMgaLyJkzVLyVuqNEgeYS6HFJFVSw7hPcHYeCTJy7WoV",
  "key19": "2PZhz8iNzSSTBEf2uN3YikSBd3U7QNyBY2pYcdUzzzsWjmbAKtitoLGSyLoPMhoABamNjAwVyYFnraJ7UdLBxn9K",
  "key20": "2jJCXPky4qyYomDDe9gF5aXDMZtvnH5JLTBgXxKAX7LDnudVm53e9op4rSZe3HFcpjKJEzyZSJRVqoy2YLkkbp2b",
  "key21": "53v6rmspzm8SP4eKAWJn5VnNLNwApNLu3kBzAnv3WQQBWY43zaE1CsXo8SNv29mS7WhL1R7yVsDrM6PNiNPCBUkj",
  "key22": "2x1PUS62rNvMYdFCPshwzME1WuZjeTb74fd1Q8AgyGqYcsH9nY3vYtsrwKTJP5ZTmtQV6kbzJiSusQLVaH74cWb",
  "key23": "2AvGdo7Ean9wpL3QhNbcMgVybyjeammg6NKaePgotLD1RzfhAGjvcCR2oRfMnKtjXdc7Tr1uL6kv5Bn15SUxoVwH",
  "key24": "2kMyitnya9zGtdGAZcXyhQQQWZVKUjP7bSwSFZBNJeTwiQDH1xyziAGLpPu8D5WqnUb7ZpbGyyT8V3nppTp7EKwk",
  "key25": "4tMurup51z7WBjft5wi1ADKkAxXJx1hbQANBpqiiic2rqVC17fv8kJ4C1y9UczvXVJ9Y67ygo6JVjCw17LZ7MWyV",
  "key26": "3yuxk1owTnzCtKaekP72tDiqSYpJizZBvgM19TVAegoBnp5MruHcKVpAzjc2DLeVrjMwU8MDDDT48Uhs8B4ZJaUx",
  "key27": "26x4UCsqL32UBpjhNTrjUtYXhBSReSukU8nxroRtpbQQzkhsJ8NPXQaqrmwzLHmk4FgaKXRGR44cPiVSqto1T6f3",
  "key28": "SGN8npDctQhqaW1yn7TUKLhLRK62mdn14QtudaT3JWVQTFoySKJ7hXSEmVEwTnaV6aEd4Jo22u5FH8JaU4rw8uo",
  "key29": "4kNBEo7Jdw7kaBz3Fu4yhgGApKa5mmTCuPwWo3eeFUm3P7eYdnKqSK6fqK7f4n486qPanrkB2tKYt9p241bou5Ze",
  "key30": "5XkJnh9Pbd4wNfbgKc1JhXvq7wNZteSRRET2DR1F4ykSrKUpqXx7ngC6wEPUEUnAT5uyzaUnXW3ChHrcb1TM7Dz3",
  "key31": "4hQGWcxq9smVVL8RN7NwU6KMAexmRnMv7G23BTN9nWFSY2ZXTyAgw9kJkvM8jsCrEKxYL4ekGx6DBByYpN7Knq4z",
  "key32": "4qVnEzmTCft8Legy4Dpg31QpwVw1kBzctGzzvTFxeHsj7jdUzjgS7Atzfn7rujGo2ayYTtYC5kg4tbNPZgWoG8Ke",
  "key33": "xLLKZPLfbVXow1VhKKeURkhxdBDtq8tKzec1UmXZF18w9cajxvbopsJZrYjBfeGFvb2fUcfZ83jnkpzRgzQQJMZ",
  "key34": "2kWTHDthkgGkHkohmECSHAMo1gU7zCPYWzr19engD7zpFuGhwYrM5RWje2HeXNXqaMuhGoJh3w2qngZfrperPmwu",
  "key35": "3nvjREs4ELaQfvrUbLy7eR5v9EoGe2civtW7aQESqftQczBjtfV1o4c5QNa9YmBzhsVeZbqr7PGBjiFyU674PRwG",
  "key36": "qStLmHPzfZEnysjuRhXvJWqApuwsNVmm5zyhed9LCcKtMwJzAVrAC4EdSbr8uYKwvcxf8fs9nkBpQDsw896hpYx",
  "key37": "2kG9Qv7XgXZLvuhJGfNMAjYKvdhWk4GPbHhRLzXoYArm3mRt34zXSxzkDzhiZJgBxPAur4FLZAns5eo6Eey3zJVy",
  "key38": "2JjYnuGDEj14kWGpHZZoTENACRacNafwMWZdYXEHCoTJhbS2mYAyGHUpKArttP1FsHNw6EqyFmFkNh79UHFJbb9e",
  "key39": "NEpcs5mVw35NdRuVnreaFkbrtgihiHa91RgmNXFteMAYNTGni16m45oVoSwGHtWdwr26Uweso82oww4SbrFGGNy",
  "key40": "5HE42SggDPwC2MNd8WTgf2suqpBq3QmKNR4vctsSiCYXZyZmhUt7WW3ZKbmBCQFMAxR9U7gfGHR6MjUKvk22oUso"
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
