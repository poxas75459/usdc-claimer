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
    "3KVTU1KyXSLU9EyLrFEsUwfmMv9RKgpQ7Tn6eJcTGc3YyCgVLeJeauRfc2PsmhGvjsX8rqcZjmdGC9zXMH2BtryX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52tvYh1JzEHo8wnm1vg5zpjnVnJJ8QB4TNp9TwxT2qtLHtVeGgVoS8M9taaM1kgBj6AWSdnRSqgMSzXvcf4MjGJD",
  "key1": "5F1RZmYsWLwe2pCEZuqajuJoyAHNruYR9oiTpDce8sRuoG8fcDVpmDxXpCAqxpCkBHheYGTgdwqpJHSE3FMF3V6J",
  "key2": "5CuphAY5h6eSA8Tz8rUCcsH34aYim83dw1vpYubGs2TGxj25gBzHTKQVqeV82uSpPwDQmWNhXGQLJXa1nhwWbmHX",
  "key3": "4qBXhr6iCJ3rCEABfTnbK1vz3PbiT8pV3QZT62t6L7na52ujrGU7qA4wdgvkA8HLymy4bJnQbygetZBUXyp5ixT6",
  "key4": "bNZX8P6Vj625kEUkKi1tKBpR64PaNPXjRxkJ4SCHB2ypVcM1mr12o8DeVELa1qUrQR1YCTTgyokKtD36n1SQExt",
  "key5": "4j3tk5AunepMoQnUSRT9bmCQ335YSpF8ZMWbH9EMhoKZAUg7nEzcPqBprvEWJ4BGBwaquaSsXxtj9AaCeJBHzgX1",
  "key6": "3vxJ2QcDJLR5jJNvnzkdSfwmPFFYxiuaB3s8bYD8V1hwuqUDhy1p2CWrv4AMwVMZWwfTZ6bg7ENRijd2KnFa6VBF",
  "key7": "5CxEVHhZPKeBopt3egqEE6Ru5sfpXNmLiC3cqmqb3Xffrg9z1hHcz6SB5qsTrimWV1oUUBmxkwVJR2iCxxP1Y4ut",
  "key8": "5BUT47i5VRhh7QBBg5QFsE3wz9u8nxPXAi7RftuaLLPMueAohDCBbmAFXyCiqFFrMkXPTU9PWnkRCtFN3t2hYFpd",
  "key9": "2vqPRFEALQEWoCsufpKXtbHsP3skaUQV831jBKtZdRMRB2VnSNE7nLea4kZRsdfRWSF93mxBBnxk9CYwxjTXxE5C",
  "key10": "4cyNXg2BC6yVJ1MtRNytxpzSCivbF1kE1QkT4jNjWcYjJxApsQT5GcbcRSbJdq3NpzsCEudgDeCq2h9pk76UVGGv",
  "key11": "e2aNsfGobESoSqcM6JtYDMmZDEkUFvQcDpCaikCfu8GqLrbgbz2XqdRK6Jhn1nxYAVgtwriLK8WSS4QopECQjhk",
  "key12": "4vgnVLMTWa85onriNrWQKxS43ebRJ4GDrSQn9JHQFj2iR5a7N113KNbf8a8oCrmczwq1YFZXzJBhoUYXcVwvshTZ",
  "key13": "3oFVokWCbhc23uNPLqttLCJT3Nb3gq9BDPMMG1ETrYSiJbmucnHcNVeFqZdthpYx7o5DnbcvJrbR4vPoQGGg1qjK",
  "key14": "2iKA5GcZUhkccDtdRpUHu2q1Yn3mDD2S1vFnjoBYpJvihwdSBfRTj37ZLSTnWcvch2FuGmQ8bDQxkJc1MdaLmtSQ",
  "key15": "5ymoeJ5EAPbS7aSrciwkQj9Ycu3aroZiUyt1UMB4L9FgAC4ubfBmZWc34ZGZfAX1kWWMXgKKeE18hQxSUVSmWg9b",
  "key16": "AMmVnxkbvBehY7k1c3Lw6NGZaVJ5kGdmU7ric1tBVr3ix3idCW6QnYLzuiwfBLMkiQbzzzZbWxbH2qNcpodsB8R",
  "key17": "4yNXGMjY1hcnc7RdwcoQy9ZbB6VWJBwRfw92qoW9fpvLocbhcfGjkoBrXXAQ7AoGxPPvWwMGB5zbbrdxT9hTUvnq",
  "key18": "5xyPBc6hHS42SfLcVdM1F2U3mRAs1tznWBtYcTmLkJz1emPyEAoFhw4QMpULyK4kPBf3rCPgqVTqEwrBQUj9FazW",
  "key19": "2AJbxGqFhzW7LqYVc39aj1F5xqGBbWsW12qCuePmGjpBJUEe9hviT5VWbYxL72zEe1SyMdHrsatPzz9F3UzrgUFx",
  "key20": "3VJQnw5RBXthK45oxyPbwLVeiS7Xyx1RXJkp11rKMXKV19nMB7JaLUoTeDnReZkNu9DZu8DZbAqn2m3uNxWLhJM6",
  "key21": "43qchKb1LCMq1q72JoLqMfCy5Yey69t6XcJ9E9QEru3rQeF4m4m5T3XqEkKQs6jfxUxhnsfCYJ5uxCnJdNQJfBn2",
  "key22": "32iC9fnEneFKe8Swkhev7YKRS54LLWWTHRAZEhJZW4vXjw49mtseshC4m4q9LqDiFD9XzXqsjXupMUuCiP85X5u9",
  "key23": "3oHVYQdCW1rYWe1cENxydt6hFjwz1iARipnfh2ggFyzMhy5ZdPj155fgg1sM4qRKTazYr4mRN6UbkP4JE4j9c9od",
  "key24": "3fbJmUsU1JmMUM7sgoJSjU97BDR9L5H6pFVzQnsNTfx8XmvNJVNkKRry5873waWeg3mrAQcmc7jXqzwzxyEV7eQu",
  "key25": "GmPBNSzG42SeSNkdGFa1HAniWig6T77kCFC5H96721ypS1FosMnSNWcCG59gm4nisAnDgMywZro1Ah9DTvMCHtF",
  "key26": "2ykV8w3fbCgFHaxon85t9HW528S2EyYdEVqCrEm5JZ88ZMfqBoei6suzGcy7537vLHUdGh1vSuAnEDCnR2JDLDXY",
  "key27": "4NXbPRzFK2jF5jL2TU23HWyYvr2y5HMBUrtCiE57Y9LQ4K6bYTphvgfUEprwzmTc6MZ9wc7jRBSk5ukCES5U3Aqq",
  "key28": "arcWz36EHUq6YmUaz7nCBEjFAmUPfk6tyWonU4XzhKEwhWjVrUw3oZUudqpM6YakEXTvzypK9hFHycpVC4WM2yo",
  "key29": "2nnNqDpUAQa1AxkRH3PFPYmCGqwy3SgoF1cBjCiKFsTuGX6QYHUhW1sJLvdvTcWwaUXhdfc45JuZhpvxLbodCywy",
  "key30": "7HDHny2irt6vg4t19xUXW4SAAf7TEMZLPSKm6XcXfmJqzwrM7SbVjjcdsNsL3gYyihjNt97mJwGHtZkVGE8ztTE",
  "key31": "4dJAqkEE2u6Qu5BFhAfDxD5wDBVEwRE37NVZgc2iyH2TJoUqjdATH4JdcDGZxSduPLY6Qx5xaUe8fnw8QqdjCZqB",
  "key32": "3BVYtsjuRFntc2aRXDztNahCjfqyf2aqwPgd214Yn1JxxzkRx8zsqQVzvWDpbhq5jhiCqnmvbNxscqBUBq6YF2DZ",
  "key33": "4SmbfTJtanmiHSGeNGUmXk6smYHJT6rk52HyQxUiUAqH4ye8KTS3TLYaBMdzEN6ZR4qvZRCEAGAbCNmSWMQibXy5",
  "key34": "5MrXaXqtR7417wU95w1YnjEM235yuDdq9Xuw754zyThHvjNQZrVHe3HEXMHWGAdHpTdD2qPDEBHhfJxNRrgjgLAS",
  "key35": "ygJ7CMjGhqdTZA7LtvW5FATY3ByvFzYh9ZezPVUQeVf53bEVopW5gBTvSmWPjaqznYXjAQb67AiKRXb9FNu87o4",
  "key36": "151gtBUdbTRvE1TWWxTogcX2sCKth15e2pkacMJewRi1cFXy9cyPEeuFJFnUDUQYo3qpp3Amj5SaJ4stS6aqZcz",
  "key37": "2TV2psaoVHZTc1c5YJeyDGqFsdDNDiaSQvsrQtanQrHdaDo1mBrgWJaPxdpJRwB3icguhmVHgYhfiQd6viMUWHJN",
  "key38": "5UGP4pZoULknCetDu8CwYTbFhSy2kZ2EqmhASNijeXSWfruxy73fGw9ap4HrFWYyPffHmKzQce7xy65VgtgnksHP",
  "key39": "3icSWbjfxJMB3kiqkZAwjFbXRvQgk2BbiPjQ6yCv6W6DqMzZbiSEtAT6UtUnCrCmBWCXJdFx2vFM69KU5XCLtseX",
  "key40": "2mDB6RcMQozF5NCP6LwkYfXQbup6DwFbdhxiVXXtMyB3Wu7VSJgZxvpVJCfBsDqW5BYNW8W2eJXFkc5JoSrK6bHJ",
  "key41": "3CyemnMd3sMAjD1QVhpXZ4iEiGQve35Qwe2L7BpU1ec5KDErHhoyTDZcSVDzxdoJgEyzjDh8YsGkYu6Fvaq6Qi2w",
  "key42": "2APsZVHS2nFu9tfGFVGFt44DHr6jzv8GEq4PcDJ4HsPypX2AvM8Tdnq9rgTx3PSzZmxdYh9o7ZAjK8oPvXHYbC69",
  "key43": "4ffrup1z7mM6ye6nGXrfTWY4kqi24f9WXfTY87vrPPwyp612WfFVpsBAtem2o8Dsd6kb6swXnedoQ2GmnEnVKBQG",
  "key44": "27Q1o2uo4vV7u9vKzKx24ghYfbLjy4UHNTM5djAUu36bUhQm9V8v5waGJqWM7rDuiShBe557evkQLn8588TQqb1u",
  "key45": "3BZFexg1hAPtB1JTWTpbmM4Dt83pbmVGfx5t2PKss9Am8SzPd1aAAHh7JhiKKK9zfRuEfwRxNctvbd4iNDG4VFdn",
  "key46": "wNcYLH3q3QECCVegLwqa9dc66GQTEWJL9LuFdSXrZgSLgpcnbigyGW9vBSgTqzrHH1GTT7aBADfxiyw75EE5Aeg",
  "key47": "2n9RQwvp5zuPvjCnkcPMZBXofQg7YfUwJ1UzhtgP6wq9WzDPtZ7NkcZZnMpvVzHVyByYFMATmkCs5oRRrd9G1id5"
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
