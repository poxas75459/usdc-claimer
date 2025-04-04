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
    "5yk8DgfbyPNYLHLqh2aK1uJCYXvxUQwB6maAAwBnZ61UdkdetyNE5AjJeNVmntMW5QMbYp7D6ZUS9SHXXWpimj8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GcR1gvQH4niiJnp4ZPGmWP2p8NVxVfWkfBkUzomNFC7XDBbC2fha3mkC7yb2h5KKX3Vao5bniH97km6nMkEP8Yi",
  "key1": "4fDmXafpHRwca3bRcKCD3xppW54xSJE5xXf16YS7knuoxHUUAkXrdjKLbfKNwjmMv8SJUzy8TPJ84AJhmjiFu7h6",
  "key2": "5a5uCzsYw23z216Ao3jYz6BZV8Y4FfS6yJQS9yCsUgsR9man91bFuUXvSitdCAUwvuQsaoQixpzCwg1jFaNiwwmH",
  "key3": "2EJyM6k8XTyzS1osSwoE6bg4WCdvxJUBm8yK1nfGqjWvHzg7qELNQvPacQ7ootSoH6scsMWov1sy8PneUjmNHQeo",
  "key4": "mdjsiUjtyTx1dyLA9GEyRPBG3jfR7Rch5astBzELmH2EYJj9b3BFd7feLF6gHTQKpN6WxSzHNeGc3CuzDC4E19y",
  "key5": "4kCMzws1mwyoaAsSuSkrZGtDx3iuSCeZ4qctuVCEpbi8GGu15NmU956E36h4aVnXtGJLUK97otuwq1a3qVKrzHkG",
  "key6": "3Lo4A3bDStiE5gyReu7AaVXVPAr3Ke5E71ieRJP9KGJap5qpvYJzvh3uDHh1sWXUkXRaRvAcJDiK5gb8NsEXux7d",
  "key7": "uTmQmzPg8phBLWBCHqx5DNGTvY8XQrLdLwBGLmU2nwLeyhJSS7GWZu7YmmCwqr3uZyS94BvjzaTHWpF8BAAkP9R",
  "key8": "44GACiCqgpXk4nxvsL7PbD2UcmBZAyNDFaMRcF8PUS3fVNNaxKzYsXuc7WZ4prfN9ho4g4nAsUz2W4u4myFHxRyG",
  "key9": "6VG3tGsLXSoQd3ouL4kL2kkhtwT7zPVJZik8LDhEGWSjoTc2usZSUcN3PHaadoUHzPSoQz9Rq6WyVbt3XLxRNYz",
  "key10": "5XwKqctCgGgDgmH6E6FhYXJdKRhwDSqVWn8mC1CVK1vLqyB7xwg8tWoJv72weok7KvD4eywHFzLN1LHz35VQVHyz",
  "key11": "35H7JVgEFH6Yv6mKNp9Ngj3nYT4JEDA4358PLuxyhTEsYZKaHMxPi9MaZAaX5EVtUZrc9iKqakwxfc3HCQNpXhhG",
  "key12": "4RoqZQS56d7bJgTZEudiGEFpouXVgmnqhYJXqdxnkhXFTKoHjMCyysyi8z5nZ3Ct9WB51hSktMx9vbyQz9PskSmN",
  "key13": "53LJvTpbNRoz7mgjAP7RHUGLxMgonCENEsfmK7o5viFk15mYCHiSkQPFMuk4r6QTSBViJZ7AxhyeBL6bgZ2SgpMg",
  "key14": "3zqsjruX5U7DwRVNUJwxBY3jvBYEpqHmN87WvqtKCBEEFXWcy8ED7UyPGT2xR8DajBRXGR1mAtHUzEmRVMhKg3hX",
  "key15": "5ziaM1bgr3YkH9Gr2a2UTUBrE7muyPvEL4NS3uh9HKYfUXHEHNNwGy4yhNnFmNNGEuyeBcDoYmRLiucbxSTHugF2",
  "key16": "2FFnZ7vPxK6yteUErYX3fqHUJCvjMU4VsR5DcedUWazGyPe4KkSJsseXGU4BBCmnXjNkSrhbQPJPZhAC6jZSqqoh",
  "key17": "dmaD8JwiiUd3M2XZbnJHhKWtkAh4sxCxQTX3Gn9PzuELgAuePify8kN1UM5qbk9R3Czr97JTmv8qR9dAfLpBHTi",
  "key18": "MGQwoLiJt6SnfYAR4g2FSbpHrF2YGNj15RpP5SXnwVAWR4Ty73aQNf69a6YXFmDF51kC78BfHoeqjXX1RmVmesj",
  "key19": "4VKyCpfwTMUUFBKVLEVPJfat4pBumMxqJeLVrMdZoWNiurtwQDvqF74AoXike13BK4iEj9fMY7KeRPmqrYqP1xho",
  "key20": "2tboEm9ioM8FwX1aJh8GqyRDzf2vTGaV2eeQKfAQPPAZazw4ZoQHBUzQo4NUo2btY4yUQdY8H2a9fx921mhyZFC7",
  "key21": "4Upmb7YQshvBFYsvv5TG4fr6GKFM75BYgnckmtsde6CKycEdWBNTJYq85Ddh1MAEWWE9a7FXoPXK6K51FuVzTrjU",
  "key22": "5xeyGMNMJPTFvoaHuGKDgXZeQ43aRkus12e5aw4LLZo2JRPAtG7NeJnoywtxjBfCuj98dg54iEXZhMQCTXdUjvvo",
  "key23": "5i3s7nL5TcAaJNt98MVVYVbXy3bXehvKAPgGBDb5LkNJSrEQmmJyECamqauGSL1vu5PXGbMZGSPkqMfBXe4ATJWu",
  "key24": "31uUz2jnPmrV1snC2Q2d9wqRrAma86iJhjNb6KDYSdkiHZqFDoEKG1hGm4gRXcSwwUMbeve8JLSz9zts5mviPugv",
  "key25": "ugFSDLY4WatY6gojnyNTGoDnefyb5UVdEJBA8Z8yFHSkv4rwtzgr25WGoZEUUUsBDgiXJjJ9jqDdMyAAZxfKJbG",
  "key26": "T9hUL3F3N2eCcScpy18vKeYXgk9hLrb5KiCNV3JPXp662R2fjKE6Y33FXGePBVdrf8hC9dqjFUCK6F8MZceFSSW",
  "key27": "SLGuwXn91yvhCrw7dYHGczSsabyLsnZKSaPFqZMCpm7vdawpxNgGhJqApGeMiRsk1gNF6a54EVSKqEyPAF1A8Pr",
  "key28": "QZ6ecsVoMkJRtG1E9r57VBfBu5jsc4zL4kEhrGou28LpgRyXdiJz55PJw8vYUZiF6CV5VNyuXwFoTzdAgtJdqKE",
  "key29": "2SzCKhE1ZvA9L8SFop3Ky4VVvLeL61uq2w3NE5pEykm3wJbgXDoPcFyWMs9DRuqU8qR9Rg19kbW45Gyf6sk7GRWK",
  "key30": "4wKU49vVfv6ppvcC7Nn1Hct5Y1c6ESmBnaK1V4fVyTQnzoq3eH2iqqXW2sQ7SiBtJC6hdQKWYAfjAyHR8dKzpb7N",
  "key31": "5otZrC27iRmCcWBEpMYVJTKgFi53mvTqWWzpdnBjdyURGbKvvYRJCT3M9FrB3Q6ntnWxMLMrLZxqpMUFtUWT8aTv",
  "key32": "3ZVgQR5DURtmNw1hGTkrzFpjFuCKPZwXRL75RFiSBroEZcPDAYcRAL2j5iDHBBYD7QDx17kAnBr8FJyAey44Ydfy",
  "key33": "2pe1a2n5iDr8AVL87qcSskwzBnGZ4CuxvN2EiUz9SRXB4EsbdtGMYGq9vs1V5DxAqHsY2tAHXQzUZP18uGfnAbUM",
  "key34": "NRu4nJnfJEH2dWsi3KGrakZ5nqmf9TUzKVToVCPwQnWekEmyw8j1WGBVCjzTE7DnXgocgWa8teSdVmPUuSd1TpW",
  "key35": "4r7a2TrweYTmJcnUFpDfwKsop5zsr8gD7TRYwh7ucJRVDG1jnbRyeiq1nsJHg6GiikVTWsJLTxpDNJLNoNEhDr81",
  "key36": "5J1Yq3rremsp5k7RLByaansKCpi6h5sMvkTBHnMzcFc97JS7Fj3fr4EThDtcdmaSa1YSv5vzznGeKWC68MRooNZ",
  "key37": "2AhrZfBduRqJKdNguQFQgRwvuLiXtLgZvQtsUuX4PtLDvb6oc5ibohiPu79vU26s7HYQxJhak2vjbhVoVUj4mVYF",
  "key38": "4hKLf1AR7yRQi7h7tM6uC4ES8JtSARSwKKA7QwmbdjtmmL4ZLxUsfyYDY9mmCMcJkMcwWtnyCvH2WjY9x4AsaDWx",
  "key39": "5FzXKST1RZNjSjDAafQd7PqjtRyiG9Mv8WpSpw77BuWQfVTujTpeQBiEySZtVizcVNGVkYrqAJ2eJQLMFnZ32SJ1",
  "key40": "FG4D1bK3ExiXjFRRWjyuLTcKXWd51Ho7XJzKvTncCe6QrJLx1NqaZE5AWW8RZTE26xodZQ2LUthukXwEjnzzFkD",
  "key41": "4h24zpF4ZigrpDLdmN3f1QyDWa9BCPLqSSTEJeYS5PtBSSHyhwF7Cr2DadVPCJ756W3zqQfpAeVQWeJmLHGjZEq8",
  "key42": "3Vg6uUYuGUPZkLsWEqiv9QkakK5tsrHegpripy6ep2Dh91cQt5CmsWRK96JwjFiodvftHbzW6JnB9go3u2mx4BPV",
  "key43": "5GvWLreZByXqJhY57xT5TsffP3MxV44bpV15ajEfkPF4rE3RpSXfbd2ZoJaqQPQZCD48Gevev1LxAoH48hwdobFe",
  "key44": "2h5MB1ECiE6DERpXsJHQXU3YWnd4XLxhGPastmg6hy5EXZ6oNg1cTaozYN1Y9aVtSrcopULh9jur2QiCscGVCCL2",
  "key45": "5xsrgnnKefaxf7Zw7KBh2H6G4Ndcy1hUxcjmorsfTy2WYxKrizynPpd71z8raBwRoZjLZm4Ymt5DnamabXiAawZL",
  "key46": "jFJbLTNWLwUZ92mXTe2MZUU6QcQNJkLyE7Y5f5TTfxuKYNohYo117dMiCZDaSipdNNGtTf4GSMpXymQrch2uozh",
  "key47": "2CEPJbvSaCht173x2JEFhVEtADeudP2skaH3DHJozAPUuxogaPDksrKS77cs2R5UyjckSj6QpRvFNpsRxoTo5eTX"
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
