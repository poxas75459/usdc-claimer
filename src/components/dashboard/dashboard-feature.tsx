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
    "ryRWQPpHbuqwEgY9oLD4JauWRN4PsDeAo7LoBaXDSDDpevSzCNcCZvJPbjiPS1GqPQ1MagV9AmcxN3cGvwDtong"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ovAqZjfkdpsF94KqU5XcvV2upY59x2Z19X11EnyLtgqkpWhwVxzguZuAcTs3GYfrubAopUn2dnSyN35drKXrNc3",
  "key1": "49ydLz1dQBzQy529arhkJzR7JE9Wr1QGRi1vzYsZXX27qH5m8wDahKEwvHe7VmJcuYuzb5i4C5nTMWkVbuud4e7Z",
  "key2": "wgQmHhw6FZFYaijAKS34Mp6G1GKb3s3Zu2AFbd5FV7rwHN4xz7f9r485kQWiSV3yD2CScmxVmAvGVpnHDiFephn",
  "key3": "4ffzspMgLh9CoQgUSUiwRSG85wsby8cpEg1M1TXwgKfdUDMpCgCXsJC549234RnKbkJHqZ7DseMzerXQiRVT6r2S",
  "key4": "5NB6ZHh5uTDQ8wqFhLARHA2YXfuHVyygTNZ86KVFhs2ExrUrF5FoGmg74BH4y4AFPinEsj5GMnu3CdeD3i1GBdeE",
  "key5": "xDbcajCT1MjykDbFX5omiWDe96mNhLZ6pktcGRGAaE8VinMgKjSqvTSN6kpXcsSAQcJLtVLeEJiBEhnskKMQguc",
  "key6": "6cehZRc5duaxvpEpQchYXdLXzhtNSbd4vEszgF9HiM66EsNSthHPrMW3RdXb4hrVrgfu98V1NkURhgpwk81cMcQ",
  "key7": "65EnZD7h159Cq7fgzhfcdzs6edFSEC2KJgPRr39GK1uuKoBGfJwrGxTvN8jQVAANHTKwdC9ooWNz2xQwvxZwgry9",
  "key8": "nSbShXiSegcjRcWSktQ2BMpjmnHFNGSHxWEGZi1uCzvoTG6UzvGnUqgrG5VkuQiYpNMrpmPTwNUdaa9czRkwN8g",
  "key9": "5eP3bwCdy5b7PntxwZLT7jLDmzeGwDCA3JVhvApjhkkTJE9qDrBjgSWEJ7qjxjNWFscCuZUGbQN5AteGpa26ZDsH",
  "key10": "5hZwZaDej7U2MdveFwE7HWjz5ba6V1sdAEf39XeVnUdsjucxYwTx1inw2ffh6zvobJA75RLDW34Fy9ru9WEEzdgG",
  "key11": "3vvAtEoy7fzXGUxnDg6bJSmjXi7EFYF9qtK3pLn1ZJ8JxZwoFsYJdAWAUTJEZ9nKhFjs96QRtiGCWoyjU2yE7DtY",
  "key12": "q1L5c89yxQqnr1BXKioth5kJRnNREcRzLKDwET9ov2SSJuBmcf8HN9GK5GncuFbfV3bADWfVv6invZurmGnWJpD",
  "key13": "3DYxKMheFGkEaXiPmL4buVkkiM5iSipGtvGENoc7uRe3kabpTaXyJS7RX1FpKshkh5k31cL9rz88rjD75SN7EU9b",
  "key14": "3eRYSF6bGo57jaH9JRdeC9hg7zuYUMfJxj4vEzKwjHsmCKZgbvJkHAFQVtzH4LN1gEv5qTwPkMMnwCJkD7czy5Yf",
  "key15": "67FkyT46GYQgJTXN9sgy6eHVAZ29mg4trmLNeRWkvVDob9Lz5fs2Brq2UFujDKHavhQEMWTFULcTP85oeAaPHaAE",
  "key16": "KCWsReXquUdSmveaVJANKKYA3aAm2zuKNFZ23HVDkvgsfw92mziM7vwxa4J83QS8hnbkoeffXmWvv9zBHsoSXZ8",
  "key17": "HBP4yjUt5cdZDFwLA2Wuv2f5TUo2o3RJPXKVrCZBbpPJXz6EZqMwjU42GNzUHtA7H6zcoov2XJdrVwxeLD8cofs",
  "key18": "3yQww2sXnxtVPFw3GLkZfVL4kG1bDfZV4vLvVJPW8z3VMEPC9RyhtxrKYApr2oTBPaNgACSj1RPSDVWa8QyoHVAM",
  "key19": "5GdGd1LKSscscgo75zcy4LuiRkPGXxmGvtf4eDSGPh4WDJS4KkpEjf4XaEx2Qpwvz4P6GCbJes4JzWdzanL3XB9k",
  "key20": "2RURzam8PMT2vZ3NCENwqnDfzLgTVQ9XU9V7NiXfMUzfPdMB5qYUuYTmYi36WiGJJCtnENMRXonVhLXNijckBHjL",
  "key21": "49m3vcSSexDFRoiMpgPQvLwUVPSnGJ2Wsk6ymmpwh7q2gF8PooihVAGE5NLZFoBdZEUyGe898cBdkMZ5feBiWmPp",
  "key22": "4dLcpkWwBTGgmgubqiCWEgxF4SRVziS96VixChBoUotiFtRVX7ui3CpBMM2zrtoe2u7hKcaBPzxgqDpWLNoZZ3kZ",
  "key23": "29KW2UY3ShAftSoXZZhxJ2jfQRxAjX1tv7STnTpzSAzDtQjzSmTQbGHDbreDFRUYzQfRj3qMStMaWAww4eiXabvW",
  "key24": "2GSxgCQ3FmB1bb8q8FMSQamXgjc35Ro6956HYkNLWZ5XpcNYEgE8LDiYfLi4JdYKSq1wXgcsc2vbTdzwgvopvR9f",
  "key25": "4qfRDsuk8yRtULappm6AGcJZB2GbZ1haomoRrq62YsLgSTjFVMtTviEBQeo6A3SUDH9v89aiLF4bRGgoNLgym6gJ",
  "key26": "b99oQ8Q58oTeBadRwwK3C34Dpd4DA5TT2UUvpDx3Ry2jdKGN1tisSMbUZFbc2cyaoSHcXiZZ3b7xk4TYAydk6R4",
  "key27": "giTDu4aV4rExsAQepSK4VjtznAGyjiuEeDpEb7EKkzg66sBRZCAhi6gsyEWpKJurvNyz3EkwJJ3hWXz9WT9AeiP",
  "key28": "5gA9VhFxxrAwragRo8bVDk3LkBrfiiB85KohpEPH6YsBxxneY7HRyteEsVTovB2RNj7mK3gSQgWp8HCvXcN9JZYH",
  "key29": "KTjfVnevzrPjHqShTCFv7pNn4vPcLnQQMF93ETNY8wYNgD6vxWgUKXjdEF8wj2PMrKApnFUW9rA1MonAjoUEdhs",
  "key30": "3U8DFenyQQvmbhpXgUWXgndU14w3KhkcqeFexM52KdYS2c7LaKqozhSCekTipnvbPHKGpVJhG2C55GV6wAdGyt5E",
  "key31": "ozLxe9SJr9LH6gdvRKDVuisXzDRBSSzephwPaVXgRE6QM2fB5gJG4fbduhkgna1qed2LXRpGgjohSRoMyEaxfi8",
  "key32": "4XtAWFQfFdFJ88TiViiskzKnFfEhSxJ6nS1sDXDoRB8eLJBUEL9RV221RW7bT43TiFbWSqTEcnAXMY3TLUbJPPhV",
  "key33": "RgqTQWC6V6hmwWugQFV2oSsHEMigYq6j5v4tRtJ5P8z4qocZZWiGLet8tfkX1WaAK4ZCjnr63VKtafbA2Mde1Gx",
  "key34": "3UUuFtPLhzh51sgo1RzpywCMuU5xp8hoQLJAjqBoiGtD5DetB9yf5SCJK4dW2fTwSAPN9BDS5fvC2NXJVtdePy9E",
  "key35": "56jkTtCMXZdTeipXJvaAK2LfYGZfuCzWu9XkytFdYgRthT6NK9oxXVugXJGY9u12dAZ4Wao4kK4Vytq5fQXecPue",
  "key36": "4nowrWCdQ8FpxqzxyRnA9iLpzdpfg3EmZ8Gb8tTdjtM3Jt6vTPGYK7aovPgSRbkiNAfi5j4DYnuXB3J3e3RQDJr",
  "key37": "22QyH8NenhtpbH2MxrJ1v3Fwjwzdw8HZhy77vVdrkUB8KLEsbngpm28jJ9BHohriJjPPxt2dithNt9aSnPCi297g",
  "key38": "3V3kQABMVpzgETqJeJKZmt7pFq489xj9nomQdk4NYwB97q3KAYoakXs8iPyhQEBE7GndsTkdKRGE7etFKEqGAZJ5",
  "key39": "3gSWE8Zam5WK7uGYCnXnEqv3sRxVRKckE1zZFw87BkjW5urtBz89Y1aDWwgLPYXHX4jKbK8G6Dsk7P7dmGz6JKLJ",
  "key40": "57Mkf1qr9Eh2jFv4hhHmpxTavEHrf2os3podWtYU1LQq91hWEGNWkUgb9zRdyTi6cwWTXb6Qmz92nYN2kdy9VbEC",
  "key41": "35H8iWD4Cg2WEbeBjUvVAHySKshHEDX32cpu2LKFUaejw13NV4CYkL9NQrGRbGoAMrGkmz4CyBDhgnryXH2qrsWj",
  "key42": "3pBRrD3WPpoqjZEP3SybUXWAVoEi5uwzmk7hkWUeidFmi9frqv5ogS3ZsnD9UfNCLPNsuSNnPkmqoNfMvmzAjz9K",
  "key43": "3pyvetCixXtKrHkj55m7eX1kuzvJGKN25qjqC7zUrJY5sG1RMYkdRy7jzWjXUvn5Mc5D4tfEsaShyFYwmPYMGTQz",
  "key44": "2pUHjP1ATWa8rHqe6gxr8xcdkqEJAPqh8fE2gP33H3LTMzfArhQuJiRbM9BV54sQK2Se7fw4TzsWfwKxu5SxhRsg",
  "key45": "5fwfuKeQ3HoCmywh1APUL4bXGsAYrgsFc7QHJvpiK5FUAuhuDn86iNqhce3bmTyzYbVQ5yCkSGysbwE3M5KJ6hwD"
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
