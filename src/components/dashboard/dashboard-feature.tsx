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
    "4a3NppMi65Q5V6br3uRNLPvjeoT6iFs8y6DdFoGJa2xFEQSPuPBwoSZeMfbbHb6NMxBQnaBBcB9Bvw8vfwemX5bm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ddRFn25Mxuw2tsfbRkHtEPTfvxZi6zuMpszx26FtBAie8iCeZCb6ia7RWLjekxReJaKSUf5q72g3PyTykzkeV8F",
  "key1": "Yof6kBbKudiusEtFhMiGuipEJTbwd6eMBKFi3GbtE3YecMjA29HnXYAvJxm5bqQvR3wN1fAP3sEG7fKdUJixD9v",
  "key2": "33NEBM14Jnrgrj442Kr7aAyMXpchLqiuiGoRKguCy85JjxuEFzZSALRxQ5GC7TbLS7hYx9VG2ZdsmBmr29CH6HBF",
  "key3": "61NSBNrDaaecrov1BqzFKXRi4vou73vcPVjQntZDWpS57RJbQe5cjv8vWzFXKgM4zcxtDuYxZiN6L3674yjTNBcw",
  "key4": "3VhrESghKvqujTgjHiCwJEbN8GCQM2MbjNWJWNVyf1UUekRwmuqHHSRdr9d2H4RYC5yUa56MUYZPHAgoy6KRZ8Ev",
  "key5": "2x3nhPFr6WFaBfh7gjTSVh1b2588ZUYXYMKfqRqzFsR7AvawVxhMm53VLaZwKGCpjgrBeWkwfh7MBVeh7EqCHUb",
  "key6": "YDuFsqpgcCm1h1awk5x37xjrfLCZxecuaYp6Wf6XMuzVqD9yCUmZLZ6ncYQADC6WcmZCHgYFhasHSMFtp3UZu7W",
  "key7": "61wAppuF2TqRuwS1bbA367TEJHR1gXj6WJD7VbcfYqgiqSRcXaUwUbYpZndKYzir7qyB2DW6LsZio8HrbteUEWiv",
  "key8": "3Zfx95N95hWqsAhbWern7crUDaii6B5EdX3L9fB1RSga9kxXkWhWnSYTUrGnmDanPgHqwR5FqVVrf7K9pTQmBAAx",
  "key9": "2KBTi4Rbnh95mKgZtrfQJjY17TLrJzw6bQHK9a26vn5t4Q6TdUpcycE7C1LTpYP4xVdGty8UBNC2EfXsBPoewAfr",
  "key10": "2G1ro7Fb8yJN4FvUsrxog4jjRgTg2Ak7LG48YG6UJHs7i7Av1JPYLHUk25eF9VGsKc8zXJUB1UJ1UanWdEoepYku",
  "key11": "4AwRJPwDkcUCLgJuNSpiCp3wP71hqPCBoTErwpXTMubewqfki6qAtEfJUqRWisfiwnL3SmSRAsGKKBQScgNAE8RZ",
  "key12": "52c3pH6MYvYVErEJZ54X9WUKjFEGqK795fKv7HF1p14numFw4XcuoveLybv2HHvzKEuXURgWX73G24Qy1C1rS9D5",
  "key13": "3pieiBiTGj6D2EP3dbTuwS3xeh6SBpkjP2d1spVgRmjnB4dHxLzYf3EKVBXwsBqaQrQp3NWNvKZY6wFeMFVLm14q",
  "key14": "bRYZpoYwqx8yJTD9rhj5sTiKnggJPsvY8UtLqFZv8c4sUGwGfk3wRwCUL5nvAnDcLgibD5pHtZEFA2puhb3WbQn",
  "key15": "5qzNQmdg1MiWxcoDJ9VJJpAbPEUzrZwUfbfEbFGLpQWZGgcFSXZpi9tQpvDK6V7uhypc4H3oNaAP5kz6ThpzmQd",
  "key16": "4ev8H8aZDA6vB7X2W7ZQmB24N3PuNK3kUyhqqL2TrdyBfVoLYxYWwNDUKnr6Btpy7L2Zi9ipPa9Yfc25mJ4KDWSy",
  "key17": "5SgRkHxcTtE9esFpvdQj91hNb39KNyZG1VvQbbheh1i4W2pY86K8rBw8iqi4MSj7TyK3fgbwrR7ZAWJh8NuWqR1E",
  "key18": "5n2z1AQhiWV5ofZVzUR74m1CqJMFa5tUSe9Kw56miAQW9CrME82i162jKV7N4UeJb2c9iyUvtVnYtJJDgnpKTA8B",
  "key19": "9XP3GhWdq3DvN2e9RganHQDvirk8r6ckUqJWXZUcoJVXq5qZaM2qaLcqXfztdtVWCAfdoDv35MasE8ZH29Xu3MK",
  "key20": "iqbq1QeEAMXMcUodYPZqmnfFDxx7kG1cwvQARLreuwxA1giVWReTAVSVGcWK2wJtUb8a2Ssm4WNbSM4JB863QKZ",
  "key21": "63Ge4H18u1h99s118tBzEWpRoFZwk2epkDGxEZghQP7jWpdMSTGB8YLocvMmtBprfTwizydjQzxzFiHhj4c8Nj1t",
  "key22": "5bDWwXpLrjHKVjPZnjNoardrH52iFgANki7F7soKTPNAzcohJjHxpfty6oCXWXurR3P4cGoXackpnwAnCu2ReVjV",
  "key23": "4Eze8BfaQkyJh1KTAm5eXsn2bSzKdpJpksP9QiUsTPfx1sgYXB7j2FyhFEPnJzvoRB5BPDf86Fk72GsB89bBDFvz",
  "key24": "34aDxnoP5Q2Y2GdY4PDNrkcQUAdR7ZzKcVG2Djb5VYX3kw5FciPdvidvHyfjYpzWSVWStiLKHa8L5sCBEVVE7fw3",
  "key25": "pjFcUXNNAYxavgFL2o3cDr4Gfdj2xaHuL9hKyjyBwXqxjD4GzWUwXBCzCjAYB7hKp5hBHn4YFxkQFYjhjTDaWYs",
  "key26": "4NMQsNbj7r3A1cTDqeaYf2wu46MsKaayRJr6YjzmzXvzahwcq6TeDrtg5g3hnJBTBUXzb6pHmQQ4hmpM5cydSXjU",
  "key27": "5D2VP5vG4PQccx1pdjaDWNUM7Fnp97rf6mFuzyL7a5vsNnbTtJkJEbwGq7jxndpdngjTcreCmGNdNEC7LGC33nrj",
  "key28": "5QEiLFeiGhWZ1piCUAHdxJGHXfUH7eWvxTyxAS4MwvPvQ7Ne3ysXjv59E8vEnMRoCwKMArh93DEb97jPFEtNzvMC",
  "key29": "2VhaUhzQgUopswL7BWohgxrpS34BbNdrCtx3DBNUYeeEfe2kHGFWfU7QsYibn1LqvHuwepKRF9TkaUTV8kmgPj5M",
  "key30": "66MwzGiyHdwqWyFTNaY2XUVoE32Mqa5Qa4ZKHHqv2Zv3ZqFFGbH2x3u3buUj9wpprNrPWAJjQQHCVFDtXEyxZXYb",
  "key31": "362gVsH7aYAqgz2FuDNpdKpcRrNjC7XdDfQPbiLutzfUMD5SUJqQcxBiF8TLKWgttJEWVemYAmK3Tu7z4YkPGKCQ",
  "key32": "2KneZgTHGfS72WdLdroz8njA3bNMVjGrVj27DqwziGZKCXgJ1oQtha3MQ3xVrEquy6PR5XBcLiLASR6v9qvSRCW",
  "key33": "2D2E9usL5JsDJ3uhTGRsrKt1umvxENtvmqjKHhXJpv3db6vk9PvvqjTbDNTwZeRPfnA34YTxtAKC99tQivvaKqRH",
  "key34": "3tJoLYuJS7fk4ytq4E7Qs1396s15uiXVoVj3kyrbnWRcmaAD3TESRL5ZtikvzXhyt5dwvxvujY1NAr8CHcjkCdfr",
  "key35": "2edsgQQ5MmTZqNLpV5tSGB9LWCeES1tbfMaNiJD7SSRVSpv3dnXqYN9pdkyubwLuzjVFyLpmj8z3fLHmswDmxe72",
  "key36": "512ZFk2DRzBd17kbyZfVoCTCchLNUfxG8phoL3CLDowjTdEpaEnw3Pm14expNKGWrxMvLdQBdHmEDJjnxGEXqFmA",
  "key37": "3mrD1Fg7ch25CYxXV1k9CoDsv3UR733XSFVgen1ipKyjCuVE7Hwfg1kvZHEWJ6eMHKdCCDes9NgWv2Vv2uE1Rd2s",
  "key38": "213FEbcgvGCxvw3hPBiku4XKm1r5dW4JubXBsakojbNf2NPqkSBfepx67uDUgsiuz5886dXMHhNF2Ycgb8g29obd",
  "key39": "5bGKiCZbS5Vto5LFCy16jxah6pxk2rrMa8gQaw2Tpgku1jgDZDf9U1SQAKJ4AWLwUuGSsUrgzcjW9gFe7e6QxboE",
  "key40": "3mKw3ipmTU6eETYB6ESEtjSVacP8fPZ6bPhjLcCjGNp86GkB3dAhGM6ab3b4r6kZswezTfiNHc6EBQK7Aqjh3kYm",
  "key41": "5fKXJHubrdy64Mro36RtaivRzUXG6F3CJzqxtNKUzptnAUT3pBoU6Auut5ehSdEygSvRNBoZQnWiuWM3pBsbrDFx",
  "key42": "2yENbjyeUb9XAefHwNJvUxhdNvjCYuQnJGG5aF41SKsLcQZETe3yVHgvXvxvxVDG7miaxsvZzFX49Qh1kQikNtyx",
  "key43": "3VFDD1SiuQ6J1DQJ55gzA7o7Cp2gFGCMqanEaxrXec4rmdHTM5C7LWGEDzVsEroCE3SnGddoAymzVStzksKfMiSk",
  "key44": "4mCbQERWNvSxEe8feJ72K8ZmVFaPdo1ypLJmw81EauBq2HSV3eCkPWMRJUbY3iq9bT9jhQJHrutVWFmKtq39NGqJ",
  "key45": "55YkJwbRj1CUjgLnfbbjZYBaR5UqSedzEPR7SJFyH6hhu88bMxJ5UiW2UZroozRQt9YBgRhfxu3QHhTNnhdCGRky",
  "key46": "544RmyepK7Wju9fkrELkBJbVmsr33QJp1PVwfcDiaoEuWwqmFpq9N9ZRK4vxQ416qZHn8UjUgpVuQkXtP9mzNjAk",
  "key47": "4VZwJbZ7GvbYvYDJUixyXBpDN1RCLiedKr6dMXjofWd66vxRcN9crxUgdWYpYYqXeKsKzR1kaJTDYbVA4NPHVpAW",
  "key48": "3rsCmku8Pem4kwrwZqGtmHKb7Ra7Wm3UpWNaE5teQBrgiNRcRvvtqXwo1XJu1HimXD6YbLWCrfAfhySzBuWgVLwy"
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
