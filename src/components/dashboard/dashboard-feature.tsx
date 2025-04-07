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
    "3wNA5kboMmaBKDEvK94GfwFJsi2zx1pyjpB68h17RyMYb4kcBLBeXR6Vo3gXEKryZ23fSEkPebcm9MFnEVbtS62t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jwx4PeNG9zu1f2KjaVsmzLhEYeq6CpDaUb3LuUzjJUsWKm7o1KTfVeq9ihh54ZWdyuGNzdE13GtFoxnb6LUHm9D",
  "key1": "YoTmeem6wr4jD7LyMm56riFdeFkKQ5insihtB3jsHE3ezPpGEsGKWCVamXRMvaSAn9jsPDpvrK1GvfUpRQgLege",
  "key2": "4mU74CLYQ79hZtMKUEanvWfL91uN7B4gkfa1eKbhNboEZ3Lx4zHm6EtEXgPqoViNF4dHJ9BNCDR48DtznVKZ3En4",
  "key3": "5Zpo6tUsDgzhuogTDza65uykGK56RgAeP71x5TDBSVDmirRG27wDr6F3KHHKd2UtJinWpKiSWup4EMiqfkfW7vWn",
  "key4": "2n76fhbD5F8VSK5c1RYa1fQDK7HavLbanrPKfK5kiyi89KEwJWg9WtMn39MFg1cJpCtzV57mkSNqtw4Xw7rrCT1W",
  "key5": "3C4aXxzWfiVUMXXRV1K938x6dqAYNrKFdLt6cN9gRZDJuFQCVH4uucuSAP5W5EaqKkHckmgCQD87d8apDzwTzhcw",
  "key6": "4rGsEZPxXqYx63HaXWhGqXGKgCovrhHud6hJE4QHeJm3RpL6k8QQi9Y2AxRxNdPEiJguWmgNHFC3apFhjTnzp1pT",
  "key7": "2RabZSGQjXrbG1gbZ8uVN8GSshP88ugYWU9WQHDKGowhGPawJAkhJhNtxVffuG9fkSYYq4h4K53oCCVvSd5HmxiL",
  "key8": "7Lc1YyX3i8bdyN82YizRP9BUkG4uaaFMrYj3DhoFcGu7cKKE1aRHfvNhZuRQHZMk8Hps2cqZ8qCAvFoLWsRne5U",
  "key9": "5ED44i87A5LQa3kzi1JGoAeAT3Mnr23T2ane8TBvq38Uf5AkNa5fQjm1RAc33ES13uKgseRbEm7aFWZxiiN2SejW",
  "key10": "2MCQEgXy3ZuJeZpTXQkiLsqWgTP8TH93BSf7FxCHDvEgsJ6qNiFYrdzFZosRQ8rnGPLbgq59ywTzLLUUpS8ernre",
  "key11": "4YVjXAqefnsaG9wjMJaknRNhrcsoEaHTm5eTw3zoAWFXCJ6swL9w4w7tYCPnxnHb8HenxB6wt5Fs3ff9amFkUmr",
  "key12": "39KK4NLrSkHmok86NWCLy1iCc7NE5vP64t5thF1QX8dnaDc6JHU6QzDm5fAsL868DdLJpKMqWAhjFAvuJv2iSYDt",
  "key13": "41oKfCDbGJWG5bmxLWUZC78SCN5BJYoiCXaQHrnWKzsAjibDrjDfY4LwDeJ26TQCvunpdFEzN9xHpW3d2xjgxfdK",
  "key14": "5T11xvr9zcT2VmgMzmFiyqAVnc1CyyQAWQZJJyDrmxCTTz949Xv91eYSECGoQPAfmyNrdKxGNGszRCdfG4VLrkd4",
  "key15": "dM9uC4Cef132z5csoRjjmqNfwqFNPkA8bieY3f3B7tjL1gpDkpYAERMKameWSXyPygroXC2YNgEJ5J1KuWNbpi7",
  "key16": "9NJCvbx6HSGhWcHNaRcDz5DYnh8rtLbUmW4TRKv2suohoTYrceMmJhdc9uoymiJzKjjwDgS4JCfwhdkVpQLm77S",
  "key17": "fpGxYSc77VGGSo3VsUMA6JZjrbHeee6ygoKKoQ95xQ55fd7c93SyiyfYj1MDptoYua3wye2jKvtp2g1wTDra5yn",
  "key18": "53c7fGwqWzUUzkNK6Uf4Ew5KrPMb39wR2EobonCq44tCGtnMcYq6aiT49ADpn6Ecb8fHdcMxrvpJWeBeHCaPLf3Q",
  "key19": "PGFJRvDRfXG8ite5dhWQHUHS8G3bdTxAG51G4ofeD5hLo4nLSgbCPcPyLFHEvZJsU7j2JwMj9iMny5YhVGUeV1a",
  "key20": "3XrrSfr9oM66rUssagPdybGef8HBaozCX3FkV4gHSBoEP9WA26VEAbBTpy6WtvL78Ye5YhpeXSspCyDiS6nrJ8PY",
  "key21": "5tjaiQ5iqVcnjtPkyhVqehsj8JnYypGoj2YZJvEzw7ryggb5EMsGuU1gTquSfRsxK4xDeRP7BtQWXARqkwGbVM22",
  "key22": "5bSQtZ3TGq9vuLUVw4TM5tfkMAbVhz3W6D9X19qtU86E8r8evhWrznCb5D4vEZ6HvX6GYqmDTCTvFhq7BnxB1nkp",
  "key23": "eUJ3jzRtDPrbaGgNuatoarWzvmbqD958qyUTWUUpaTQe7iw9r3u1R8H8NcPiL5cjW8gdzpPDfmaj4zq47abdk95",
  "key24": "bhD3Uw1DmKtdQPev1rGPg5aSJGXBHCUUZTzNcJ5HhYy4wYbf1mKw5QDr4ZcBnp88n7djizdUpMkHBnBuFVszCzA",
  "key25": "5iYMG1qU7KuyGjS7YdKqTeyoydUXUzT9BgfJKTm9nFoKjNiC72ATgZozCw7xfsxd8KtoXy4qgYupMzaJAujdyRPH",
  "key26": "RHupWx5J4r7ECP4unAc4PQEebBdU5Q9dzsCFWKKmdaa4faXELsyVvmFpj2dRiUZU9R8KR1ke9WjSQoMb5JhsPTn",
  "key27": "4cFNGJjYqRoD5Xa58LdAkCj7ViVNY29xWVv6fjTKB8cjTVUh9ZZCvLptQhVb5NuNLPp8DbSTW7GsxVhwaRhEKTyX",
  "key28": "2EkizYbeEJiYNkMSNXmHCQGiLLPoCo2fBxtAKoFHZ1JGQMjLEPBvciaqJK4D3E68ivjPizPrB5D8p2uT8M6CHA5t",
  "key29": "5CWgcmXj1vjHFNXn3dmf4x95PL9f2GznB4Lhngt6yhtcmYCLgfQzNJoiUyVX4UW9VisS2Y6CSFrz779e5VVrpmKJ",
  "key30": "4dG6fzwrmQ3oJ6DAYUbYMJPTibwgNBqLfPbycQZXizHXcJYkCBTpoMHgfA6h8GWy2E7EahHP5VSDNEk9dK8o2z9w",
  "key31": "4pXUCZeD5i4d4Yat9f7ieJkQ6wrudLgWxv9yA9ZVG5yd8buwDDKdn6XR2e2NKNXz7n9nKLNFPxLfr3wWKRPqqEPF",
  "key32": "2WrueDP7QUTj6heWPsePyEuuS6YvxsKkrxMVRSdRCrN6yDfn95aaR4eHPow9aAGNdU4Q1yzm6dmrioNb61AGT5Ld",
  "key33": "4nsFhFLfTN5r8GwUZm7mRZJWiYv5ZfcE2i5S5MQTBW8sxV3QyfjHqGFGSdrj8sSXrqDXZrLcxzT5NnaGL34VTY4M",
  "key34": "5fZrLhhTnuNATe7UuTtcYaw7TKFAUFQDRY8nGCWxMD8gp11k5kfpV84DKJUZYuDk5FWw52ZccP4nsFGrN5qvEJTR",
  "key35": "2vFMeRVz9k4SCHUBv1x4oSvfNp7MGM2ebUzXm9NqKms5V3iW4hbtpTfvA695tDcVxkn6j4DxT7VjXe3PNeof46cA"
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
