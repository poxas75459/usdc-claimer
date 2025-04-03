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
    "QJ7Pd4t9ArrrrAAEACVpnrVssGkQzyHGCTm3rcCNoN5mBpiPeSrVDAzLXWSUqbQNh7NJGefp8ACxBW6V38py31F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q2eWAyvCKdhdMZmoDdKJFbBpLNRbnyLjaCTaup6Yn2upN5tqdMWEysey9ArkQzuerXiE3JmhwZbH18iaWKF3eRu",
  "key1": "tmoB2o5z6LbV9yLTk2w7aLU1zDan4omNS9Sa7SokZJikTndzv1qphN7GAGAcJ6zjLg6pq2WbbYHBivU4CCJ8KNe",
  "key2": "4CzF8BMj7iscgj564dhjwkxZny6KNPymKo2TCXhnRa7rrkYXFnFGVYTzRGBmVMKnBq2ez4Jo3fhL7e447ySixYiB",
  "key3": "4XeL45d16kR6T2QmnvgvTN6MbZgHzf3ZWd24i8QUjPjaDeSsrwmNkTSCczJSWDEWkcB5yU4Pnmmsc3gGo3apdcjw",
  "key4": "KTgsH4my3uyr81VMkPYWWEQDLqUp1STorUVP7L59XimbmX3Ky1zyngJrvGc84SD5isUk97bJXmoXwyJAJ8Q2u2s",
  "key5": "7MQmcUHWu55o2C5mKGEjfUVaLDQrzeq9pjdDR4yfB8dyX3YP9wNZF9Fd2Wu4iQm9DtTSTuVmvee11NTY8ZkYv8d",
  "key6": "2hTA4ZeEp4PTuivuczrq6xbPhfTS6oXhidWgUHQMNrCjNcjmYSUReXmTaBcTRjuVgnjZG4esakmVaMvxYVCnZhwf",
  "key7": "TkzAGTZ38x5nUENu4rM5H5gbNEyzmY7rHbytDRWqWu6x8X6zxbH6BWFRKzhUXzAiHbpMUk7m9X5eNWevnF6VVgs",
  "key8": "4o16jCErnmUdbFkzuAHjPLnh3j52zYpRV7NwP68mN6NE1ZiE8QsdqfWkQVReURHCUApdyPGWwiietsiKEZvWSBRE",
  "key9": "31jiMXZLthixE6PZT9FVxDiD6jCBuk8FCFkTU6XxCNzPXpQCc98ndAo5NMiQRYz3MPXP6qhRChtCfGQ4s6e7LX4b",
  "key10": "3ktMHyBiYzYK6VYnyUUoG9KoQJDuAKAPfrXJoEXnMNivB4D7GtX24Er5h1jEr7GLrPwzuhNGcxNjoaFRKigt3aFY",
  "key11": "4K5dM8JZuy6kvJLgvayJX4GrvqPENwr5cRDEWZnEAL5daNURbR1gz11NKovjfFpLERmSX7G7bzuUdzADDutrrUeQ",
  "key12": "31Pqtmas9j3zpMJQitpZ6MYxYbJV2VkP2cVAL7SMqGtxV5d9Mg9zpiabNzxX9Nxw2JK76TjWvUN5LW774Rxw8bFz",
  "key13": "tAgZUSgEaqm3vrCRhpZC6mksYBc6G8dES45WUvdfdhPKU5sAPbDpRchLHnF4eqJ6NqTcRtjgtdEYbv8Cvgdnv48",
  "key14": "3ZfGpJBzwdh8BCbEKebgdsZWrSeGPiEnVsuyAaK16jJgZdzwcK75MtfhYM8CYyL3Pw4HQkxf5TCjW9pgDh84HVeu",
  "key15": "67YugaMeR2Pn9S3oVo2cdKmGmX4N56ZJ88xNEEpVfMYL2goKBfejQDkMdMJNNSjZLT2cvkBhA9Y9Q3uwPtha3jzJ",
  "key16": "3ZwwQRggqrBGW9R7Eq8wJjUYTN4eAi8UL7PvqG89gHyTNEzkjVKrvWxqqYEnRnc8RQLrkPc68S2kWoeK2eopDRVW",
  "key17": "341Z5YmFZcEELauxGZRXFU5wN7e9AD4vXJjh4RdYo42VfZ1EGddJkAjEjPPmo3AxDxqnyA6zTbUZfWCTQGfjz1N1",
  "key18": "4PkCZeyKRHqtUqcZJ94uqsokL2vnudwwZwEvwMEpXr2vixEFFSFe1aubCPgS8ZvmFuhCra1U1hqYGzzfvHbyX5Mi",
  "key19": "4Hn5buNti6PXPC8pebdyBbNMqWMF8RUGfKvAnTZoJE2D1FFUiLxmRobYmhZXNNPoGDEUM8XbWiDy4UjG5YZdJDTZ",
  "key20": "fMGWoJMm7KD7EacESNmVU1wcvtpbmsQHi1rooN4HAjFGDKgDJ2LhrDvdetkLJyweWtkcPaGSVDsztATcMLyvW2g",
  "key21": "59Y7KU7ZBhNotRjPQV9g13yGBwiqRDwwS1jSd7g6RansWP84sqsJRksRY1RNSVmAcURYQ6NR5k2dycEVho49erPd",
  "key22": "3A5XbFGRMaxHqthtHxDcBXkNxAMbF6LSEynyhk4EcfhEraT6ekuaBsvk7EVJ5MWg4jFTsmfLDX9rP6NHvUQYpowb",
  "key23": "5aNX25Qf9D98PdCipgp41aHyCdEXFZ8A6zVwa6QzQvMBQSqHgNT6isGgXFRQtTRSvSj4M2VVk5bicAjVtV2XWGAS",
  "key24": "2QT5ssjHixAKakhzA5aw7nBSTpo5YufCsxJs75uFXQt6qA4s7ZiXCt7gpufSzY6DTd7RpPoyZKqqVjGnyiVbyqAQ",
  "key25": "2pPi9wM9ZW5HaqaMNCgiziMbNZZoEvciBFLA4pV61QXuaw9WhRYWuLEDdDwmcLqc6BZVAyzFJ4M4MH15FDHFwvag",
  "key26": "4bgNPuqHqkFjEYppKGKT13gXLo29EMRn2RkWhVyBimsZYL9jSKGVZ2wAim94RBJJfYNpX1uXkG8XHpQHkHorEwiy",
  "key27": "4jRfQhAQqEYzjuY44aatMy9g8UcB7cXAsm4yxNZiTv7fyaNxrVZv81su4cxenEpS4S3u8cVeZNCArQ5APyWoveVE",
  "key28": "5PKVvQvoxhZCz4mTPVvH3a3timQiCoUZS1hcSqoN7Sk3jGSqLhS7Va59eRCrYJsFirtoT8TucMbYJwrfYXh6udG2",
  "key29": "599E4D3fhdiWv3pZ9GjBm8EzUsmWCC6kYTdRwxbKufcjy1wJ11wd59Wvyq61gNmJ9E3GVgk8prA1zAGrJrUE7xhn",
  "key30": "jQSdRPdD5TU1zzraDpBx6N65zJ3ykQQXicTjaHwXA8uYEfhvqJ4tW9NeEyjQDUXK3tY8e3nUsHXzuDfZL7DsnSJ",
  "key31": "3Du5wYGWEEmwG6LuaPQBoFoq3yHa85jsBNWzxBPVxUezP73ddBVcA8Bt5FUDXZ1v8ggYF5fLxMZBoSnaqCm3Rn2k",
  "key32": "3g6BNAYt2caY5hm5PUW8py7P68V2cK1TdyaxqCG5vX7EEskXzxhPU9q7umdtgq5nEotPQQrNx3qRsgzzjZYsB4cQ",
  "key33": "51WcCXiqoF6LKKw6y3myENTFgEDMxL7aZuvacoz4VRJobhgSfyCyHHFt3zbbn1hrSMxBorCjEvtbbwZuehoKBDyF",
  "key34": "3kwQMDwPtFNvGqmd8PjsAiXYTcdqyv92G293ZsH8EaUrMf1evUVSxYuVW68NdgqeTgARugwXB6N8cqAgkzYLMU8A",
  "key35": "4m2Jdy7uYuHZzYfaHipzZ1LXmA7XEuq6hpEdif7jc89uaaCcJPzA6ANBzDSAe7MWBtzramzDwRni3EiNqQHpGEQ9",
  "key36": "sdcK3wGGzpPvt88QDG6TissrBqatrVsCNxmGQU7uqzNU5MjxD5uq9ckxdZJriskGkS3Ka8AaPJXUVsxAVRi3dkz",
  "key37": "4v8zn6ud3RwuRTa5aYknPSJqiQn5JnNWWC4HAvJwgExtJGUSKLg2wDKKzrCJNG1pu35dxegK94RYzKgUjcreZ9or",
  "key38": "AVpMSMauuka1LVXqnudDFtp5VYKT6SfHZnkU5rqqisVRqZJnuBfyWjh2Fx16msWWVUWz2RdiwimA2N9NtMiKZJY",
  "key39": "2HCwCqEjcc5wNqPCU8y2Wwf7qyeto3ALA92gxSHdMbTrjuC1WpDhhMhadbVcdoNt7uuAMW48Ap4Ldp8K1aYzhmm2",
  "key40": "5fJMyQ4NcBkyHC4n1Ek9iYm2iZJF9P7cTxNyuasE2Y3B1DCdedAvsdnot2tDas7s6DjHxunVrud99eG1psTAXjnj",
  "key41": "3GFhfjbA95DMqxgRWgtDZ1fFhmaPQdJhuLCZjRGE2jHLG4Fu9qTFHxhJULP32XRZjVsZT4cJfLFu92xab1yiUxyK",
  "key42": "5UzXDMC4VF4b8ZBaVAxz8o4RUVEHSzZgfgVEVD2kxpYcmyC8WTqSP4EhSuoXnuJD3e4WcXCNv2BGdvf6FUwomWFS",
  "key43": "37xQPwK7BKXKKX666ds8PnswkTM3QdarBrgpyx23rVDroBspinyAyA3ee1xN5x2SVR5pqza7GJVJMgNgdAaAay9b",
  "key44": "3TW83ickbzsTWrZ8TCru3VbR5BTTNRxPxDRAQeSwNTZTNTcucvBzxmL9RHXjMstsVDKzEwdo4gAAo3qLQ7ezP7Lh"
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
