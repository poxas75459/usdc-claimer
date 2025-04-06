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
    "3iNq924PqVdgps6AXGqcqTVffSQCP1Bhbbx6K3C8JksCChgUxoKo3mNXFQjgnJNRNvdehGRvXZNy8KLjajcbjDxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MzdLzUcM72LWsp6j4VoBfxkLoeyFsBM76hJbUARx5C6o2vg65hB8uPo3yvmupHqbDB7GkpmKVvshYBui75abnvc",
  "key1": "3yFnfcvb7BaXcQmpkcQe8xEjzjf6vsgA7F3pFvTGg8CN6eWSA6BBNKQgcjAi2cfxanRJiBX3fGeZGTdYrMR1uUf5",
  "key2": "4po65t3fVJWp8dKxBB6SeBVLNsCCwGMFJXFR9aK2rxbMB3zgeHzdcKz8JaGjDzw6S9GXCfuBSDN43tzzHep2jnPK",
  "key3": "61Ps1PSoWJ2xrYTfdCkPz1QkHnw2JBgz2Y94J2N5WpvcEG3hkJkJtKn2GCxg3q7WMkZvKoZAcceBhCEU91vDSbWY",
  "key4": "43qpGdey7uWXoJSNhK8VAjuaK9YxdJ1rLUhLGniRmYmZZ1u6faVNB4zM6TJzi7fRGkHqT5p6XtDdLtkwi8pK1r3A",
  "key5": "7v1rkfh1sZ7r4oh6sWkM85BRiuuXyKZgmULYopa38Y4qSfsPpfguSsv6ZruvGmZQKBrpNRWfrhF6ssNYUHYj82t",
  "key6": "3YLshcdzkLZ6Vpmi6VfNTxhHfU6muKbrtV7cWFMXvkSd88TdXRKpHyMcDfjg6befm4wXBv2dZXvUS3kkNntFTWgr",
  "key7": "2TnTG8Fja73Ri7bwWwmwBQmtLV8r1biZYhPHdZdTn34oqJfz3f4RiaYxMggXjhvxsHh6TGnk6YD9Dx1RCYmicFmq",
  "key8": "3oi7iGsV7zbgLvm224HxrZqjgkdZQqWpcef1PWY7fNDqUDvWy3GiARd8GSNGr5Jhnt9UYMNwgt1cjJv32NCtPL92",
  "key9": "3oHSapPHEyBpegAufmVo5RR6R4mxMagwnqg7iMWrKSQQJxhYKcWVVg8ju5tMJpRDN6Bs6CJ1kuZ4oWE9dBtcKxx3",
  "key10": "3b8L5LK2TJnFea5CyGVr2gTjQvamiayZHK7nG8CDPvLVeATwiVcyPoe7u1z388DoAznx7Dctinb16irJk1bEAa1M",
  "key11": "26f5dq7xsoFyqEBU19oz2BNkVUfVmTn88N6tsPw3S2k6nNmzAmB75fnQj815QnmxASi8pFPcVCqVzn8vZYpETrP5",
  "key12": "JCprNLWBiVdhHZVkS55fYivbGA4qSfdQ5QtXRtyxn5AmxMUA2wBksPnod9wsAuqt91hPiAc1wf7qHdePoRgZg9c",
  "key13": "g17pHhsme9xF2WvDC8x7x8qnXWAChFjNsMiAyHJpWMqbxjDe6Az58QTYLxiLp4KvKEUJ6kqEw13kUeNdkwAzqYh",
  "key14": "3y6ug4whfSkQrg71ucLD1wiZsHHs8Q65snsDPwzj8QLtMSSbGeNf7DXUB3HZkbyh2rdq4E8iFA5h5H9DK48hQmSj",
  "key15": "3oNQUpjHFZNvP1FN6aBzjy8bv8hN6WMyy4wuFrZReESdu81Qi8AFyEAmNe4g5sfR1sggpohihu5nJopAsHHdJHq4",
  "key16": "4XsmjdC7r6MYd6hNMfQz2eMX69n8A8HriVuPVsRaSbU5r2tXBuQTjXLDK49rJsNmSUeWgvTagPnQCDHMvcTGVYAt",
  "key17": "5id2UJsJnoDMLP4E61iLSVii19qHPRNVJeBXBBWWyzBE7AAu2BpyznFQBDxAuLHtk71LbDH7N5iiECQV7SnYEVhv",
  "key18": "8N24nYxSm2z7kf1re795wLVjbdUZc7Wa9c6xb4FPMd9UJZeqCcQpjMzNoufEa2dEHqoagHtDBkQssGbUhNyhbiX",
  "key19": "b63k2CkUPuHcXvtRrvUUhRYyAGrbhD3Xd1DZP3hKM9AJ4jky6dajNV6B2QafWCwDSmtLF3yiFu2nyvYPha16hWL",
  "key20": "3TqoT59G3f7DS3JMQdmf3qYn95pHRRtTj5sUyBpRvcjRSEJtM5GvHZdMFPq9XPvguWSQLPD48eSt2WHrdt2u3ypr",
  "key21": "3D2ep2d5Tyvs8Kyxf6FwKPM8CgZGZwd6pfdWYkAN1YDKbsj1KC7phKi7JMmSmzZsCC3N5p3wcB7WZNYdL7CnYMaF",
  "key22": "26xuzkDYfnV3KKFzHvWUbGBd9ZGCZk9KySxuQYNqrxFzfSdHKCmTsDUMqfsEs9DqjW2j6jdH2FNHfEn3tKXKsfMs",
  "key23": "5cnkVNe68BYkx9HwqpCc48wQ7b7N9SkDqk9EXb5yA5jmB7t4YdP8ZJrAYbvLmyKYzadPCTH8BdfadQ4Gz8Kd6Ceq",
  "key24": "5NJboc6cFLhcLmoBx6LDePp9o3TMJVz8mXB42UyqGZ6nk4hXri53tup7723ts4oWeC3fKjsmPkCSZzk98wHPCCf8",
  "key25": "ntbz4zH6q5wFhqGtxgMrzTxjaWC9Ew184G5NxeXQ8zit9vPqdZ2wtV3emPmSWyQT7i8x3JTbFjwMhfkrcBwirUT",
  "key26": "5cQTuveHjjtn3YLkJcAphXPmCvsW1jKmrnWQmqQLLWKJaUexA91muKjy5yTkxwX37x4UwmWmeunmytxh2431yzvW",
  "key27": "5X9sEXkfk4EJbeL58TFJBuMbhr4ET8PE5is1eoqK7u3njigUeKcYW6LfUTH3LJMt2Tu7fxMxG5AMHvLKhBhBaY5d",
  "key28": "55tSwfKNK8N1eJxmAayKku2mYvcxrhnpQu3iRfUMCZn3ESc1hmVn4du4VHp49gC6obswPAoyLfBBocdQEG7dvFcg",
  "key29": "31toN9snjn3hvu4qUWhz3Hnm3eEkEdzBEQ8rLr7oaSkqVKeQ3FsQ6xKCkXTBEQCCvvDTYa57mbAoAQmxbArbEre7",
  "key30": "3yTXpwojg9o9D4RbT1d554ydTKhL61bAq8crSSCX655ipjST7oMbEuixgYThn9N4BvqFgt2E8eMwWCS9ghaJLKge",
  "key31": "55JKnXDuvsRJdDxKEkbXn4iPaoEq2WwuNMWwBzSJ2i2cLH3TdTW3gkMVMd2UnAFkzFAcL2P8z7sZS3Wdpf6gF138",
  "key32": "2GfHvtgCtbtXqZMRxmDxiUtiEM8YYdz3rdqSdUmkzsEz5mrf1tVsSssbMq1ySBYKhS3fYW6nGomfq2Vkeq8dWbQq",
  "key33": "4bdqd8K7ktKZ3Q8qUvqXnTPt1pv6zAaHuReWdJ6Z9URMgxJF5kV4sT1wUmdGLdTAk9V8GYvAjhAoMu1y1WjW7zDu"
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
