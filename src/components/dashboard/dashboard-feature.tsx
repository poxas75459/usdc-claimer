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
    "5ZhbYNuZADoqzsjQnFidwuPK8rnhLT7s1nw6tWkpZSNQ8BozZaMZSqqz9TwHUNtfC82sPvhoRbDWL8xaHKGEvrV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kW3HTmqEg2wqfLqpSYqUKD2i3hvGQVsnnqHtX2pvdTo3HKFW4PuXUnsecneFFHQ6L6zwpwTcbFsKq7ekVZuvexA",
  "key1": "6RzU5CeqTiRRW3MST1CNxJzAzTNzfcyTJNcfie1eqZFMNebMdxTovtSCt8CjHgPSuJjaEhcG81BPRCXbHoZ8Dfi",
  "key2": "41LsRrM38kcuApbi7BN9JrruDWgLKhBwayioAxF1bZ2yKcDNQkvv6vzAmasjt34NqxjX8PgNktbUyywseYaBv2co",
  "key3": "mAdFQuDWWW2GPbekwP1qJdRjz61SxfGAYBoJ43SvJ7hfM1dWmSiYdn58XvKJg1c7pfQqBPiEJo1qGMZ4162wEck",
  "key4": "5Z9PxHohmbbAXVxdBdc5kicuGwTusLRQwFKyRs6Bj2Js3QJWjMRe7Ztgo7qaV12UXvXbcd63YfKBkEM4KeX4MWPk",
  "key5": "2NPqHbzqLyEAiDsCfy9zgKoo2H78aj9A5dNywXAbmYborMusxEMaY7DKUcPgWXd8Cy8oFYFVYu8TBjbt6nMHtRws",
  "key6": "YpVSNDx326LQdZ7DCQBBk4EjrBmocHpdtCuyJ3Zx7g3ukEErWejdx2moC8MyzYSdQV4Uk1PrHbrBUrTRDgcPtJo",
  "key7": "66DyaRjtGY3SxARzAsncNDydqF9qdiqNFd7nUDaeXjGGANN6rNewgJ2P8M7UkvosgEatDbCsRUrF9znzhAcvyNY4",
  "key8": "3jrGf466QgqKzdHpdSQXzuLFMC8wQXu7FBnZL92RhRfbMs4T5KjvCcoQALem5PYT3adjutdF3UmzZ9YyXb51YeR1",
  "key9": "45NoQkHDQpxGDtPnRexpzY9dj4RfzA8XLemBwsTCN3amQhsijNW1dToxxhFrENcomSBDQ2uiogiA67n91YRPVPJi",
  "key10": "3ZZdYFFrquFr4egptaKphPxEt2rZTkBQmT5H1Wv4x92tg7yuobha8iiM2SQQvBDDnJe31a5kiZfCeD2G2irusXxV",
  "key11": "5NqaxBj5hWzj8PiFVZpHqo6cBim4sVJfvvZ6scBQV2YNBMDbLaHVeELATfkmx1DUW374ADZZBh4pk9B6HkaPfpet",
  "key12": "3E6JjPLpQmhvkcPaxdAzyyBFTjqSyCjZfgyyhTYtgJ5ix7Ew9Dr1FpRNWUPJVQ2sJ6pd5EEJnR2sx1mX8bZ1TrW4",
  "key13": "5nwdjvQxpN4Yq8ZqENpNZvgmi1Q69pmZcZK7K9C6QMSxegbdb8jRgAxZLhpDgwzRZCC26YmqWFHu3kpRm7ixymXt",
  "key14": "57hrWQU7q7ozdGpyrKYwUSRTF4D5QVrR4hTtPS6Af3hRjdCoKf1Er3eKVH11t2ZQzK6JarwsPMpVczT4TvPvbXLa",
  "key15": "25kP31UtKT4Y5gi4W4BubRgRXRqUcCRWWQFan22hPY6QwZTE2SWjdXfkFtwp8TGFPB4bjhenifji6BHPuyWfETCV",
  "key16": "2pHJ3pt2PqTkNdyd38EeR2Ufr5XxGaxNJA7EtGF2YC2LPHDFCYbfPdpdd8QexE6mBn54KJ88umQH25m4FpVMfzFf",
  "key17": "wAYdLSoQQvTsXg5ca3WRMLLTv1sH2dNxcYdnQx85eAyQ2kaH8mfMcf2mfukAne79mwBF14BJvgCfXBZtvVX8iND",
  "key18": "4tq6YMemGgWYZW5h8tzqxMbekJyYmGwPBE18VPCRofqFbxwoeiVoeWKJpWN5afqKVLsqDsWZcNVY8vK3vUoSngn2",
  "key19": "6JebV2cxvfF4FLwU99PhLojcphLEd56zffA6bMeBEneEnVPho18eBmP9FG7xGPMGg6LwN6m7vPxywM7RfMLQS7r",
  "key20": "46kjiDE4T3e3CrV7TJaSNBzDFj5wdRmnxYQFU4QQQ7Nu9Pg4rJJFcQR4oXQ3G6vHGnsnpoLHbS1rtvEeQfg1yPvT",
  "key21": "5MGdSb5Ue7zX7b9W6ACxyC7N5UXKPQ4wzVS1j1pn6WvgVJJwjE3VMrD267JPmGwec7zcnLXVhf4yFD9A6fwvGx4b",
  "key22": "613wfiCq7tT6FKHbpBVDxHWm2iG8V2Nfz368wtnNQde8wDwu5g9E1ASPkC5Y7Wp8YRFFdBHNhdR8cTn7kwLdevRb",
  "key23": "36fuDeDWTKitfgeeJUEXniKaJo4LuZJ9wYzD4prMzLy6JssPHTtNdKWvXkYXtxthQkCZDm4dQHuSfA2eVeKNudQQ",
  "key24": "4BmoG6PKKzTVZBiXAN9o8pd76MMDWwSRxNtn2pswnXGK8wh5BEpPhbRiZwfQzBLPSupZU4xwyA4xf6c36BWNLPod",
  "key25": "5GriFobaSyDJHuEX855QXJBzjkjRPnAE9952mWopBcS4JrvArbe3aLUyNj6f1BnSgnwxZns6QhWRP7fogwL5Umnu",
  "key26": "5FxUSQq38DtFBeAK8yJwAHGH5YRTgmRQcfRTXFaEqpYnNb9BmxrrpR6G4bTXCiiFewg8mEkAn1BUevQm2YG19g8G",
  "key27": "4TQBRB3cQ4YYWnhxov52ANecm7FCsAWsFFy9khTRiL5L4mnpimFbE2VZjDSWb9ApZRKxPfoDqGmxJc43EFsZHkdN",
  "key28": "5sSboVhXzSPkxfcTE75HBVUH64zqrJgX9FZrERF12UwNnhi22Qp3dmqSMfRCk5DDiL6VyKrq1ZrkKdmd9BnCqz8c",
  "key29": "4CyV5AYwu3yvs7cZeWR8S7Zh6uYAxBiZNuXDcg2CraqJ3QA8DnhMgU6dJf4TXFZfuyEfcExWXKSVVgQsuGuaGiN9"
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
