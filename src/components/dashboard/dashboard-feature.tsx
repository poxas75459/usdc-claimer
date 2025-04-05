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
    "39efDf1dGCQM4ACrZnywtic64RCUAWNmQhry1wLZj9rZBiELdxzm3rXAcyqvA7P7qpM4xG2ny4787nzi6yvfWYNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C8oMasTjeooPjyzhV6SfGZKtTCnanYiu5VNwZUNrPaei1o4MwQCX5GujWDidxtovNyVmiTjSahEUS7FJA2dagf4",
  "key1": "2mFNUQyZbTbhZnEc6GP3qX83fXTCFnUrZR6TW4isyEDQ8AVBryqwLd6vPyJzWheMuXzaXZajVgZm4oiSAuMuijsg",
  "key2": "4R6s5XW7TDkij2BsjqgWhcwjSYnZ17vbuhWqwSiD6NTxUmsHzHptzYMHYsviWno6DaciGySLzSE5MNeKKM4fKMJ6",
  "key3": "4WdqjZPv8Ng72wHeihANbUfZP1M6fURTR1LZtxKSMq2KuerUSiNdbj252PDvbUycZeJuN7SBf5sidvGACZDEVnxM",
  "key4": "5dzDc8vKE7Envs2XFjxThsztHtVnb6LhXmEtfucjjvE8cRdEf1UUZFdsmyr8VqyrbzvPUfqK7TtMFAEj4475SBda",
  "key5": "46ZN6RVLV91k38ZnKtbUjexF2xaTFR8dvM7UD4AGyoUQMJqDKUHLmMKgCp3HWTbQ6mEELV5fcdfXqYBTLLvADNjj",
  "key6": "HUGwt9EvKg8VXAmYy4Teo93X8yq6ZiyBxEPZamppHQM1C5y4oBo8RoQfZsaomqrmcX2bFp57usNzcdubgaygfUF",
  "key7": "5tjFm2UvZtmYypKc7ek6FhAFV5raFVRgZQUrhTWSjCe2L4At3iqey9idX3izdxyKncvDyCEzvm6aZ19eZbBarYoG",
  "key8": "5q4Y93iBd7H7wjr8Pdgeqy9F3e66CE4EViUdBhc16CHbMSAXPFZdBp25smbW8UcT1z7sLaxN4raCdztyfAJnf8Kv",
  "key9": "ZAtQb8Yu1jziNUUuHUHHh5EJYvLncpDxmJs8JrLVAE7i4mFiuUHTzCnFB8LLYSUU4Auetgev6xwZUWrqqMew6RH",
  "key10": "2Arqv998dukBWMQAF2FqChQz4DwW3HxcKvxAAVDRzAwiQ2TqX8ZbULgXjwyXgbTRh85uEzDHfdmWmU6WqY4n7WA7",
  "key11": "29Y8SU6qD2fDbQPDkbdKQEPQYf4K6UowutbQjHfLkDZXTmWXo3gsxU1yW12ttf4wJJWk6nwQnBuFM8C3vgUfrT3y",
  "key12": "sK1tneirbWLWmAuiHgmdE3yabf17U5znhSKZHSXRa9Qk7vLEk7RJzjVRZ9WMHeVExcDTvadisNcifzrJLuNPD9y",
  "key13": "7KVhWa6HZ1scd76TJQe9h56RP7ih2Wds6dv6edGEHWeyBDsg47ENei9FrzwoNcawqTMgBzC8Drr9XsSeRegM5m2",
  "key14": "2JXvtYFgmtmPBVQyvYAA1XrgAkev2BeVL3jReDUzkDsiPs5y7zXKz1VPiqZt2WqZpivgoLm4bKK2LDmWggzQogpt",
  "key15": "5KncV39rQQVVpNCQoE4bpwVSVLgLFYuaZ38RLcYkGkaUNkZqEYs6kTFDJJsnca1Fi9wpwhPd2LPKUpDNAzvrPHr4",
  "key16": "QXFbGEx9wngkHhs9BDnCpE6q9Rh4PZ2XBmUiZSU2ejBr1WNiB9po7ZLb7TNrSw3L1e37JH4uFaGrGyhNy8vyNye",
  "key17": "2N8pGoKsgnEi2RMtkabJUwCCNkYPVYBwsQpv6v52P3ppUgYmkgEvJp4qkZNkbboGVFJV41nZHHfMEduoDuwBtNUp",
  "key18": "2q1m7ZFSrkgojfSK9nNZTjwUzpwNp6sdXfNR4disT98oS6XHLtbe4Gxq4JkgSWHDmtMadjoxREYfEPD41s39xdCh",
  "key19": "4b6ysoVUsYxUjjFDGyEScwxeepo247M5nKFkTDtL55DBDaWkk6352VScoYL5DoHHbaXFxLcnPFYdTZB7p4W5XE4H",
  "key20": "razeNrXMn8vjWxUZoXeNYFsvFQMVX1heTLdzrybSZAi1n7k55GwnNGP1pMrsmShhmhh52aiV4MRzJXwKux4kyLB",
  "key21": "f8Mssg2i9QDvq8LLWGqx4drWvdPwurQdtxoHz5gByqVhoMRFkm7zqGgMXo6ywitRmQZJrJ4qQuMDq4LukxknsMe",
  "key22": "CVDZMGgmkbPWHyErHvUnsw4mGtSYZYEfnJvBvR6NZbkxDAyVk7WCPn6GMXMma9AHDHfig7M8mBCNaKm7qYsnyUa",
  "key23": "2RTUFsCx3QKHxsLzpAWXYainwvJ5npj8y2AuzsBkwyGfr9Zf67DSNtpDM25qRzqS2VbMTUvdT4apqTKJkxkZHt1b",
  "key24": "2fhwxmpXDPua4kkPrybgRP2VqoVpLuPW8sj7UeckssiNLtE5j3FqZXeLjSvMTHJkkoL6UcUSRbqxhQoWn3T6ooUc",
  "key25": "3sM3WLuWJPa6J1JrnJQZAqPa629hLKjLAEWQ754GA76YMCnQyN6Dih6xMMTbxcQ4sEQ4xFEGEaksBYrDraHZNPYb",
  "key26": "5AdprGkx2nZbZo22RiR1EJsPm1r75c5SAgs8hu9KnTD5RNWJ6wLESFKffk9j5awCbMEvSVdSCak1Q8679bUEsmN8",
  "key27": "3eaZj1uWATw72DnrNCaWFcnJPWgZ7gK6UW66z75fkKWHipsCuDeAJs1JjxbevYgzxRQM3HGkbbwpQqgn7ZYcTMoT",
  "key28": "31ETMa5NjzcTGvqyNdLmy289FDSDXKffD8q8V8WrXx57rz9meiBC4ChaF5bK6CqeSaqn3WFDeEJ2U5tZnnb3zUBz",
  "key29": "65ULsxCvu9vsyswMSkdX5yQ4eosAs8FjMwKJ4czUWHoSjPkN5kYumTepEfW7wARTjPuPveMdrG8dDDVFU7E3rEKT",
  "key30": "YSd3DKZNkYEWdaEA2WZ8CBPT4kkVeVMas7x6EZpaVoUiAjcDp1JChfjCJ9jV7MgkdPgMqQ3vMtBwzhVghYT1oDE"
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
