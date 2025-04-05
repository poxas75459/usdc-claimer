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
    "j63NJwW25Av7U558Mm7ymJN7tCAb2E2uof6uj61aFjLdSNo1MJSKnf3FzAJsg1f9hx8afvnumXhf5GExBk9dDZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j1icX63pngk5ebiywk3cZjq4iR5GaQ2qP3UZhedAKw1pxfVb871BZY5qEqonc4kPKo6svoZHStcZ7gb5JKqxefq",
  "key1": "5BU3a63HWwG3xg58nQWJGpdHYd2yF6UBG6duLFYW2KuuQq8V1BbU66YuRcoL17qTY68VQ2MnNoQ7g9pU3kwe3ufB",
  "key2": "sH52s5tgyaon3j9sR7i4Bys2Cp8iSoMWqivormpzfJDtK5vLKBPiaDPDD9HcCyTSbsfZvQt9BPThZZPehduTSxg",
  "key3": "5N1BsRjsYDR3F74QHBmobvkGG39Lf4cbQSqPDzHA2vGya1XwZGoT9SpQMpqQXyKYRPH6Vxk6M3jUHQtWTkasu6Ed",
  "key4": "3rjBaFtyDZ2jKoUeQFzCZyAx76QgdZofgJhcJfnseeudmcyCoC5baFtErsLUQ2CgE12pDMrQVs4N41kbyKPRxAqb",
  "key5": "3dsjdXEUqQmHwLRzv3S7z58FnpczLEHRU6aLUv6hhwAmJ99BmMcJPUiTV2msz68V8TMRRAiSDt1xYWL8xUcE45ch",
  "key6": "3zHc9mbmhsVFShkhdgbau1XcZSEbXrfgzJrZGMdZrqjqQQmykw5pCAptBhs5GAkdT4gEULseC9f1HSHouoh9YmV2",
  "key7": "35QywFqMfjo8L9sQmMnj8jjrtMFucXkiTAH23gDiGjndpcjJg9a1Fsemsa9fFnpEMWp8TS4iHyB19ivySnvpjrR9",
  "key8": "5T7JE2Gj3qkEgfwCq23tyKgQZPRLBew9Y7AFvYisamsTfeZiGFkinjwM8XheA7tWSmn9wxvNBWYWj8RehfDzvHDm",
  "key9": "WqbxNEne9GPMfGqU8ciXUzkj7yTuSMpTpn876kn3fzLP7UthsXf8TJytNwj7o6cMxmCbsHEnboSQDVnY78QsY3B",
  "key10": "5XojZKb7T5HvX1PgPQv4wuFdeyJSeacXDxX7nVfcejVhtmfXLeCA1L5VMMH97dT8fRwMrwPKxtiWyBV5pQXxEbRb",
  "key11": "5qQPrfvrkQ76aAbT7z5tDFVykvKBozAjS2qKQr9NZUgDBFDWpBC4bBMLwkANmqhQgFSPTxUiveYwfYMLEuFkZKd1",
  "key12": "5zyGbMecL2qMUTLPi7W8irn8D4vnVQ7QH6rYEBxXNJmRhWEJTPk8RmVwVkJo9Yye9GYy7Gy6PubK1cPEFT3g1Z48",
  "key13": "mvVCuRWjQeNTeaGGLBVRYEKNxoe5ZyGaqXtpNJpcXk9bFMJ3CMmd6YeWsoQVheugsq2qyvUZKQ1vcgaM9aqHXwj",
  "key14": "4kvS6zrzYnvQaThC9xQ9EQTR4vvJvXUHvuvi6pwtCeQuYy55m7FXC4GjfUBDMLujQ9oXPupJ2NDaULpV1GtPt4zz",
  "key15": "5x7RNjNCn7dbd8e9E6kEiaCCftga1UFYEaEZX17sfAeYb86FvbGsAgW9pGyHrpzvAcZU86eKUY2QZY9mHRJPMTqN",
  "key16": "ytMn7C1UJ15NuP9wdAACY612DDR7EasQV8SVzL8ukGw8R2Dec8gZ8x5h3F3qpo95m8eiTGDCp6w1ehksPNfBkXi",
  "key17": "F8uPrFSo5t3XtHdaHUvsA1tAGmm8QMPYz3733FezVh4YzDh12gZaoS6Wcw5hrrnh8RT8ZfnGoNVVpq6LK5WsANF",
  "key18": "2qzZQJu8iK2izRvWo6q92qE1RFGVUkwFEV4bMiorqjj69BqrKM9axy6gEh7ZMhTPz8xvS2NtgRFTgxgMijqTE3uU",
  "key19": "5PrBMf8WS1i67dkX286sgnzR1mKVd7VgQdjdPJLUY51VdBcZn21WafLFh3on8S5kQe4Td5Y2Hmy6SsddFaRAUzDY",
  "key20": "5wcijpxE9zSc31mMoivayWD86AqhXg6DQQUtYbPR9AmfYsCnwxsqyYzogSjHykzxJmBQ9RivdM1p2DB35bs5MRya",
  "key21": "3AMd4HwMntAHwQngVpK49k4qPypaivHimZwxS5EMTipKGsHytwtuQBaAaMckYiUFrFGdj2CthbdFZ221UdWdF55Y",
  "key22": "3r8zSiebomTQqKX3Akao2QMBwBFHjHrPSfiHifqGSZfF8n1RY24uCEK1vAyQZnkVb9JSAzcyfTNm1HVkjHNtarKt",
  "key23": "4p8GivjWpA3RWDdaHTswg6kM8dMk9JfwVAwiJ2QLyY5QDQwXTF8VxLLYLy4wD61Y8GHEGEz9rJnoXkpdK5DduRP7",
  "key24": "5qRKEfzV2PnMdD6xuXdP9E12tmpFg7BZNR5bwXhEMfuYYMiYyV4dybtMvwwJiwmTZ1AcVgnfDZoDJKh4RC1GmDNv",
  "key25": "5ZdABn7BHPoavsTzK6yRQ5Q5mizhn4Sip6MRGocyo3eDAewo3wKp4AwVujX1U77caP22MtQLKqFvVMecindk2Zre",
  "key26": "3pyz2WkYSwXGpEpLtRRcAqAc1tkpqiXXRcyWB1agDFbcUQKLsunaxHWovXarz7BXFr8qnDwVsEhTk5KcZU16M4DT",
  "key27": "5dqGCeo2iN9YMxPwAHKNzc3uRf675n5no6v8YFF1JvQ8TB62DEMMm2ivuaqPvKQVrVcp1QLVFDowPKS3tbVceXeX",
  "key28": "yrwkSod7RcyAYPsR4wRRuvzLPnWbVh1CNBCyMhKUsyrK1qq89r94cxun349ZhNS9W4Cb3ZyEfopkgo566wmkEHV",
  "key29": "U27waJ6BtAhCYS87Pz2Ry2NQkAepFRcJjb6bvRBL5Skr77nf15CrT8BCQEqE6So3PSeT5ssPhuYkpYV8EZ4C89o",
  "key30": "3hpdigfbw4TMWdiE3Ga88xCa7xMkGgfyRJ5MqjnZpmpREg5X3mH8LUCUo48n9cfhUKmboSmWTTC8YarosRYLiv6g",
  "key31": "5U19dThG8AdinuVM1gCyXxKBvAw18YjejoGkEZn7iPqNzhQwiZafSmgqcgew1kvXQ51Xxds1JVj1REh6xrkMnHe8",
  "key32": "ychTqdmLjhpbn1AtmSbbM1JFWRzg9C6Gx68fCRBjGUPHDRK2r5PrKxcBp4KdFspu5BN818NJQwNCTeczncoAXkT",
  "key33": "baWJwU9prL6EjQvfTBz4fPcsKPHE5ZibemNiQ5SrheSqRnovFQQpqPvjNJwEFqJeDm6bLcjmZZnBCk4VSNwtPMN",
  "key34": "o6ztQe7NDue374gub3E5NpKJgRYnkBRWf3pyWM2NB2jjigNgvZzeEBmcHqHNvyJvPHVEgqrjQbHwh76zXYw2uVW",
  "key35": "2MW29EuiroM7JQW2FxTLemwxLgTocz3cBATKmeY95ei3GfLkqcGa4A5f6USSkiSheLejS7a4BZXdDgnF2rsZU9YP",
  "key36": "TKvtGzW9kCa6CpBC5ngQXNLA4oQnr19qGjgUwJDx7JhVAPZTju6i13mhHaGrB9kFbSaDGM6RN5e87VXWZdkZd3v",
  "key37": "38VdHQFCi1XRLTLx1REt4fUCBoxMTUGTo6x6XArUz8J8z4LbbXbRGy9HUDxBCuzgYBn21S7isXioXkNbYjtS6cv9",
  "key38": "4DzcYdjuJW7rYjQEiYhNdksDieFYKTxbjA9FnLazNLUcsT2kHKm6dC9fdV8PzUbDBGRfRUdpDQ4XVoo8cstk9EX5",
  "key39": "5SbwTm1qdgtsXhtEHz6uun6Af5Kkym4Fu7de2y5NyVaZbswxQdmnKF36sRCHoMsKcJ5Sy5dPkQpWKP3DK5JJbBJU",
  "key40": "j3yoqiZf12M3GDA9MRFKS9XbgG6KmQbkG7s7cmNJLXo2Bb1VHHTsNe8JFM12kKY7tu2Vue76cq9itniuLbsnqqD",
  "key41": "2RnuUqKugUGSEtXosHhGMxW6zZPcV65t6tSBKZgBX9J2SdepCwZxey5NTsWJtGU5xiwAt11zsrViUbTR4HD1vJ9a",
  "key42": "225y5i4z7djx8caJKDyW9nDfNstc9ehKQ1qNVcn3hzQ2uy8WjZhnUae4s71Q7bJ7H7XWYtg9Vs3ptS8wB5YsAQMB",
  "key43": "67LQbay82XfUTpzoedWBPZhpL7JaNyH51oKy89maBdN5dtj9RBDw8wHBaAanCz1gn96CgTtLmXHKxPP2NnnfoyQ6",
  "key44": "4SdGq9Gad1FQbULDDfgHUniA2nMLPaeSnWn9sv3NHh8JqVpECVZ7FPaMtmjB89tUB1vgj6F95uJoX98NZo3L9LBe",
  "key45": "5io1EMfEejpAjB678by7QpJs9e6ARG1A36Qowd4eBqvoYt6UCixEFnURoc4ELe8tpoboaETSeBo6bn2s8HhNGkvU"
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
