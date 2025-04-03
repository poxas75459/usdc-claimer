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
    "4C9ekaQtBvixaKCsXM7TLRf7vhfynhGy5sQGhvUYhUySMeHsMDekJ9b3teVUbjMtYUhzyBGNY9pUM8Zqd2t5PamF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hmadA1TPnEJoCTJeR1xjRUMbT9q3aDREoHnh6LqjXoWY3hyG5XAkKCkopjHY43LQEFirVmxW4B5FYcepDnw1UtN",
  "key1": "2rm3je7fy62hfHMxw2KuhtdWnLiENZMBUBKbYS7YCVAXvajmBp4i4x2Jnpi5WLVp2tLxTCAk4miDYWFZhWAXFjiP",
  "key2": "44pTTWjSmJxp78DaeyGBXKwLncybEGP9zckYBCFB266qBFSEXheLbTYVvgNeGTvAeQTeYPvErwyD3TGUtNZ11d1e",
  "key3": "5ie8oQe8SWjrXzpAd1eSivJCUwe8eUjv7btBDqYwgPRwNrv3daba3821X6svFNkna8KVCfSYmtSLPZjiBpT1ALZy",
  "key4": "3hNH2JRW73AeSfEHEb3RWKu8Y58PEsNFi3wLvq2bQeNouT5aNyeXws9JhjyWotSsCJCA6jiXyskzCHgFUWAEpACC",
  "key5": "2stGvLdC5isqv7VA287jWMTk3QKUu3KRkyK7mKSAUhcxkUyFW4zecuU5jrJUP1yXT67TZkSU1hAGGCMsFpWvhGmw",
  "key6": "2t4Qjvpx88aHeH8zgbQEyhnYcghzNRq5ZoaQRAT624MNLaQHQS2wPepTG9GqinXHxy7UGC4i2LoFoUkf9w9HrojN",
  "key7": "37PL32gWimBLUJxFdaWCDuMk7VYuBwbAhFtD6AFjNnPfaTn2oecLFbuFaPpvbyR6U79vNprrmZeJzMJ1XqyXpPnx",
  "key8": "uJ5jR2dQYT1yNAT7v1BCAJvDDFXDPfkcyxCYo7aQuHZJtjVGz23BBz7ETimSu2zDtupyS9eDRCEWhfTRjozFMwR",
  "key9": "2ABEpQiuhEsaLy6KmT6k3j6wCWcoW38jkvfFTeWokdcs8RVo5bqn5eNBim3Q1TdZ4aW73nSBfdPmfBtSgrgcd5hC",
  "key10": "2owwkFZ14KG8fM5TxRWdkezoUx73rWHiPRedH4dCZvZ3cBq9dLUnL4DExGm7YRVhCkRoQ1woaRFxQzkkQPqouBjs",
  "key11": "3uoZhLYJCXr424uyhZbfRgoUV8YJb2xQMMRLSemNUSf4uq3WwaZossFcwyMJh4aeC5RMJeQo6Gduz3zcRw66PAFF",
  "key12": "3y3R3bJRMrCiCT7ASsCCHfApdmA8QgUAn2oNY1iGfHgSZzjwHpJcjUCfUff14gsrk4gXVHCM2QvoCV9C925VQUEE",
  "key13": "49dpB7p2f4yQGgmndACWQokUFrGPEmYvQMbxpCE9fKYt9YRhD5ML7zJEQP5uuHPJrQwAVKp9Jza9SzGB24H6eziN",
  "key14": "Nd1zWMC6b1QkwWkMj1uWNsrPR39wLNfghigtuQGomfrS8qGHv6ja8aBdkWCcYvn3918KFAoDBHsdBWcJnfQCsnq",
  "key15": "3FB44jKE6WdpjD8nsKKZknfNU9WHbsLbu9n5TQRGa1tENMt3ik3YioNmoqYjrNubj3kL1JAndviFoMP6gwoX4Y13",
  "key16": "ujcDVs95bxLTRZofYY1ZArwECaiCThf4Yh4gJMrFzqBdu6YGwEirjF2rbat6yYqvABRSpQZbJeR9ACajynLRtG6",
  "key17": "5Gbf7mZ8GkGPghmzmahusCdZKKGxo5n7L4KZdpLnkf1J9DvTQiz1QhzFih4R2WgBfy4Puw7T6ZvidVWq3CQPvvgB",
  "key18": "3eNDR5CmgJ98dtz5jyyiBLCqztyNok77ToyvFBSY6yhEWrAYnZuHsVuNxeSi3cNgjw8mgNQSWC6dDs4exLt5x8pw",
  "key19": "5pHApKJDq3km3391sH4exzFHZNJcpnhfBA4cVoinCjJRPfJswFsRYU2TZdWnTyi28PWbg3HZ2ScmWoiZzyyzj1Z6",
  "key20": "5dvsa3rWbDHgZYeRjwSmWVPoGmpCE7gj1aXp3kXLMbzayaVz61EE6kPmv6PsUF3oeJJmzVqL36LuSRbjo2tm7ZYV",
  "key21": "4iTe5YTrGEqpX6hWcrCDaUSp9c9K7BBxSMUCwBfe1eD1ACoS19xBZwvqBu3o1dhRbRxHg11JAk1cyGqAJLV3sF8G",
  "key22": "4wA6rLyKxxUgvw4tBpXbyoxCUcVN5bWTV1wnJWiQt7TT9zQuetYXaSgbUnrzGnxikV1mDWx9PeTjbTB43fWdBBnP",
  "key23": "3oHqR5AeXA42aFs1wgPD3iaFEhTengEpTmE3bGjG3vy4PRv5zJ3SKpoxoTie5pDNy8wWPYsZ2Q7jA9nnDQ8ipCMp",
  "key24": "65ktuL3jBwvwQqnh4EoFaWp1C9adW9U9GWeH9XtYNWAJLYiuS2zns2DSFoz1EmvYJz3bEPxigfn5Mp1xuYxqtcyF",
  "key25": "2377cQ8WfiNNEiHtAZrFUoUn4R5CRUb6b3EGhphVMVNjxXXY9k7xFNvvoKRBxyFtJcV5bbpQHFEckdHHVUc1nuYf",
  "key26": "355ZJd8RjyRNtopwbPeQZYbCTqAY7hW7jzUqfdTCpbTAP9GakSLVuZM5ehrD28PXaUwUZ7REgzLN8tLohytUMji5",
  "key27": "2cRQqVp9RK9juqJKrFy9oP8M5djifEDnwStUXKeGXUkye8CKbcGm4v1f5WV36xPzFGeQeDYncPpnMhDtCQSa13WY",
  "key28": "gx4ypmoNkcPivojvEi7opWWQR3vuHfgRGniQ8QUG1QyTpHREdAtwxpW82VJipAnBM9Msp9hW9Xa73NSZhBvteg9",
  "key29": "36eiBskF2QXJ27bGEHzY3wsdB1Xtewvh8257Gs3k83ajXh63BDPMoGfQPiHa2pm5c89U2e5b64z47M4xmZbwKcXF",
  "key30": "3EHDFnjvU2DHUjmViBVyb3k5xznaSUXMcMNsbLePmfv5EcFQB8arWX5yCCFnQakvqAzQke5C8DVAGg8zGXsW9iqZ",
  "key31": "GCERgT2VL8qgzWbFnFKCMmwGbiG9WeacxmUcEM16EydT4tnGwR121k92V3Q4wAXFtWbbib8ymmwx3FEFLoYYHYr",
  "key32": "9Wn9BEUYtdfzcDAsNsh5ZygGWPupNMbmeT6Bg8ZRPW1z5L6PCTAhd3LA4UM3fd6jBG2qE8Wd4fgsWjbMN9cMEKf",
  "key33": "5NFfaoqmYUSV2wmSxMwEHi5SNLgJN9cs3CburHJ6TBpHzDjL3F5jRrwiSR2LPyP4pEXL1S6dipqmVuTNdLhr1J5x",
  "key34": "4XpPX2SYLmXfCYoACBxzQpLtuphQSbdAum51WjdFNHf2aHXzruZdU7Nqe6jV38Jm8ZPGGdYjwe2BiZLTK3MTUTYE",
  "key35": "2kijQsTuu1i3pXExDtuWLTyFhQ6Rk1aKqfP4UcKp8oKbbLfh6jA2Cskp3f21sVEjNw2Ko5wEKSUBiE3jhwAvDcgq",
  "key36": "3rTUrHueJ8NLVSsmENLUkudrKRfR4DdUfRpToFXL5jNUvwneLAFTdWxEt81zscAXrEcXHt1oB9NA7w49dmw9sutp",
  "key37": "2XUaR7noNVQepGugcUMX5jH4EdbwTTHRU6Mar4yiVDrqsGJpoKJ9KKrPUVmSNyjvJiNdwESmzwyrnsPHcTCQCe3V",
  "key38": "3KbmxXtEECqXuBnBpqQXMPg4V69Jy2FZFcwgAENyNjTum6DYXZnppCFztK67QvoZ7qcaQF1m3mP4vKXv2R96uk1y",
  "key39": "v5p3AxNPbaL64PiueRKRnxegrD9VuWmWZHMy4Nica2CypCef7t1U58duk3UoVDsAhUwC6kwjWTB9obBvQ9MQeaF",
  "key40": "1afKJPxoxnPiweDbSMgZLe6XNoqbjSjUapnvS3Dp7rscQ9kbX65jtALbyfC8qkvM9XSgtYi4CF25Gw9hUAkf5GA",
  "key41": "2GwFT3wAxnK5a6frxCkjKa2rziDS7pbgoLNdv5XRax6HvE6SBkp9c1mFcsSZqWgjP6az6rKTg9PG9vvh1BoJyzzz",
  "key42": "2iwvMLWoiZhXBSHw5bqeY8LeSqfNttQ262paev4JiW56firpr9XrFZ7pYDmqkCKPapXuSNbjRbEHLn2Em7M9whk4",
  "key43": "3FiT6GS4QhgXtbLxxJ5jgdyeTWNuRVQsENV6dBGK8zJdoipvC6KUgLfaZPwYtp5obMkknWU4CW5XJBtJ9bUe5zRH",
  "key44": "4aHipDUBRaXvoMu18Ux8vizFqW8LuzwZ7XDdgQqYUB19HViCR4BDvRTbzkaTHNDqroLdYi4C8AnmDkAbW8gi58z2",
  "key45": "5fmNPmYw2TkwN2AUi48zpsg4sJ4VotWu4mSRq5yfYpbfjozoDk8rEZm57FBHPvqN2u11B2iMrfmffS8u35nESkeJ"
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
