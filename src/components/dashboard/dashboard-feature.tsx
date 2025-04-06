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
    "4MAdtFWq1xd8pw4yke7S5LnAUf73mnKrsr1u2qGRQ1Vx3d65DbE4HkqFXLw6yrLoH8Xay6sKA7d8PAgExcRhM3DT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aSSyQ7FwXUZNMvuqqifs6PwQHwbqFxbPJuHabpqi6Z25X9rCe2TCXPs75kbUDK1xWFVCurTxNrUXe1vHXq9XZZk",
  "key1": "4hHA3EQFk3LoB8JmaKqTk5i7NjjCL7GMJZsuSFLgwuwA2kiULsDfgy4muDnp5DrJGqJv4UfAwcXzPrWE1JN6EaS9",
  "key2": "5e1GLipRvykjoVsQqjMze2HGNupjVW5fx6Cw6AySYSUNB85bKohymtgxyqaoobz3N4x4G9jDPbVLDKHUHED9frV9",
  "key3": "5bf3oX8BpPyvoxWTvfwppFZQWBJQKvBn4TrQeVyCJKmjZbogS6zcnQq7ZEdymM6Qvsc5uwmETDn2ZzevHzEWvjug",
  "key4": "5Lj77BemnC6cvWqtyDWFkrRB9MKEwGCh2zxdy8F3YEh3zVDt3wSG2eQqAh7vqxkoR4yXkuD1k4mMGxLw4Fc641nt",
  "key5": "5N23haZKNCrCUrpL7wBBx9qbLb5UYsaK83BTRyeUB8i1pK9wZ8cN3DuKQizRxGTkPASK4cafMz4XC94sjCcK61FE",
  "key6": "HdUyosKef5xEvZNZ6SapvtnfNYPvjApkh8LPbkbw6hz1wh6KX7KkZCZ4MbxJ5T5fj9A8NDrYWwpyXtkxCaQGKJr",
  "key7": "5pE9XmjNY91ba9cgEbnmQCG3t9Mt6CQKg7s7MwvFE8PbqGpZcs7mWMs8F1mjBMtzp27xPnd34w6UPGcT8WZyDHt5",
  "key8": "3iByKCJJ7ghK6QsdmJQ7JaM9HeA5Mpp8ETjE5jVKkixy32wTDMAf1ZHMoJgQXS9eUYgyqxAzJU1zFTYaPHEAGKTZ",
  "key9": "3JUi611kYngsaoieScB8xQsLYnFZP5n7xWXMKFHo46H2ra4Yns8dE4u4NjHct78K9Xy95vtz6cANahmWC4VcC1gK",
  "key10": "Lweju5UcsjU6AZbavvcGVLRjHTjoWBcPXPG5q8hBh84hXANZNcndSE7RfsycbgrtJHQdHQcBYZ3fZCQKZFn3f2x",
  "key11": "ZXbnEmDrjxczAEe7cjpX78FDK2smR1U5mtZnt3nAehUsvocEfvYTyj7vuWn8DmE8Pr6T7QaWj82LRAwyRthNU8Y",
  "key12": "35WSiqSncLzDzWQoKJN2BwNMRos1WqUevGYBGm2uKj811vSzuCJfu4g4ZU4Sm2e3UVqZbZDmEDZQKGmRDqJZzxKz",
  "key13": "3PRZontyfY3nrcVHYg3binLskbt4dRsNtC99s7E8id5FDf3zBNQbihmj6LdzZSmqD7Qj64V5uh7eYhwbRXFA9ay",
  "key14": "4miBQ7W94VAbsGTxpsZEcMLW7XQuKi8vdqTiQNgpqBdMyK2ifcAgJHnU2BetJMprZxAXBNoscCkQPTMcKpvRuDdb",
  "key15": "4evDApDECiEimBxnMTKQGb2qS88p7fMCwpDbTc5DqHuxT2XTov9hc1gvGBH9yJaGvwQhQmiU7MshC1UQAppsZwts",
  "key16": "4RLxcEq1xCAhqMob1QM6TLNK77qYVkjsc4vFDoBSQj3ZZrPSECzY9garX3vvNHrCd6a1FptmxPx59sfwbxB3Wn4L",
  "key17": "3A1Kj7Z4R29rD3vuz3xo7BjETX537MSGVyMybpg6uDsETSAjuArbMcbNmN8obqXVh5zTia1yt8GRYM7aewGMS6bK",
  "key18": "56R4V2CEEb9iJwoJkAfahTQsykd1QoPFUP75G4gt9SpANyMDVuVCyoncAQhnczC4PPtCZAMLTdnxNQ6eaVmTiwig",
  "key19": "4zYkkGVTgYpTxshMYrtBV4tvYbi8HMwXj38gccmhLb7CrfjsTpHhNvDK2wepxirmEuU31hxQTir56HK34SnQKc6U",
  "key20": "3vSzi4aHAkgWPyAq2HVuHPzPMSZpGQvnaBMLRigtgNdCiMWotYcLDMBqjnJUFm4zSRkFLqi1FsKm7M8QEDJ7ZPiF",
  "key21": "4DTZifP28mJE44LqVz1HxFDPDbBTp2CW4ndsNo9dZRr4xUDymFsYi2ssGvt2ttp1dBe7Wt3jp2QSD5oGknS4Pjke",
  "key22": "26bUGMkiVDD5pMQiC7V5jxnEamLG1QXGuJF1avisQLrNMpRV2vqxKjVFQF5zGHLXufYD3PhajzsE88AdYVkmBcLm",
  "key23": "5KijbZNSkWpLeURQ8GikFrFxLBqQ9fzEnYEs4nWyH643h8C2f1a1oqZWhb7Fcaf9DU9m6FUNE6tY5bYZcHCUCAaS",
  "key24": "27pRXNLqgmEVU8F842Jya113evZmcFYcrJvwb7q6uRSwE1iziFFcuDb5wFz7erXycSU1WbZZRKq8wABehjCiGjmB",
  "key25": "27jg9HmLvX2NnFGQbgshgMDT1DaGvLKZk5XqzEZiTxVjKna9EV8hBCpdjprqghgQKvedkGmRgQi5HAN5ULtfD2xd",
  "key26": "WL7yLgQHCp4SJtEXKaksHJmEnSKBggRtUdhRLorgssWfeq4g5oW7ExUQ191aFuaai541VBqM72HeMK8a2QsjKoa",
  "key27": "WyJA218QxrnFxWYghq7rgHYQS6o48myPcknJKWb19ETFUeTPfv2yZAHzXuhPLJ7QXdBAcZE8wXoEMbQGcuUCakF",
  "key28": "5JWVLmyWS3qUJZtb2fbjiMQmtSK5VuyF1BxDFyxH7atv2KakLs1BECJd8UzybzhNgnmwaqpuDnH8Bsr6tv7BSjyG",
  "key29": "5QXfeXsLrbyV1z41B7h3i1os9qxCsiDEcHvJRQ9yycZUY28V4mUZuawCdW59DYf3BvyqK8i8cBWZWet2QiDJL4hh",
  "key30": "2B2Shdpeiao7rSxT98Lx7aERpymZxpcmCqve9Yqy6hVh41cQbE1Yr99YixLQZiEyTMmbvadHeVK96r6jZUsZZzgL",
  "key31": "2GRt2QnABNCyhCoGbGH222Q1hq3r2PDmVLxQqaTwHZAyZwzoraKuNaD47PvzFgpLrPH44yz19jpPJ6QPdARhrCqv",
  "key32": "37kgBgsMtYF3fz1VbHWLGhdmucKwbsYoGrU8a6iMWFhXdr11FvvUZCEGg1jF1rLkNUXMumFrsVs6AoHD4s8KuHJk",
  "key33": "3Q4rYwiL1wiwGG34uru11MHhaWMbe7KHYwCEiT4x2waErpjskbBUFRTUs46eS6LtawuetXkKX86Z8rr1FizX4npD",
  "key34": "432bDFZFZTQFDMLGiff9hfPbWEz2HvRb5v3KuGMQXJgFNB3nYYdyCNDwTUiU4xE3mGZCGW1iMN1TAFCB1rjAnMwQ",
  "key35": "4GADCegGpiBhcrmYz7pYYwhoDhX8knwD6Yp9roPaB1X5TRtvaB5Y2Xc51uXqN4iRKBtqN7styfAhUbPQC2Kfperm",
  "key36": "PsMbhTnY6QFgZEqoY5n7EmyaWPsReG7Ss2KbCK4Qz33JjZyiopqJfjR8GgaDWyxaDWdR8P9C7adXwzqYscjnggK",
  "key37": "zdVmnhSFTzkkwycuHuz9yKqxqYJqfp3zYCr67sXqinEs1X6yyjJBMYoNmMYgUNYsk6kGbW5YoBe1J2PBpsL354j",
  "key38": "4coSnX4KHEYqDFacHBNWFG3mX1ZHdBZ7V3XuwXBeW6nsLFFLToSNmyf6ePkR8diZWHgCT5vMNmmeKuCkw2cdhSgH",
  "key39": "Cq6yvvTPVPqNCt57isjz3bQAfrUU2LRkkhNXxFAkvY9WwKhgg79YEZ7QyD75CLR7HYnpaYUJr7cB9TGHQMru1dn",
  "key40": "58YYx7rnNmnxYg4hPHVRbE49zrZqjLCNaP268wEEfu63hUHBHp143SNYhDyN5UV6CLehwYhAGvUVRoNoUDWYHn7W",
  "key41": "5HCogZ5NA2YAknWbF5St9ukjb5RqKnXroFctYbGMjCevX6wPyqn6Mw8Sj2Gg26AXCXY9h3wjoSpKjBgDTtgfaqT7",
  "key42": "2TdppVLzHaK6euq1wSKZkaFxj7vVqa3rMo8bH7iuY8bsHukRBB1tXo7zJAv6CQF6peWEwmr6qJAETkMW1WyFF9FX",
  "key43": "SMP33mATgePyBhUyRyjNzYzRT4XMcL93Sc8QPyYfVPCan8dQefUdBXcNB6XNE3jmDfbLw1mvmYeLVQPTJsaJShB",
  "key44": "4PbySndH9S8KnZ8ivmSdxjxcnkX3Q1krQPFXEp4KwRuhxJftXvVmSRVTdtF4SwFR6KvgtiyxRMGnkKjPv7fB4PWN",
  "key45": "2ye7Mnyv1NBV8cAC7y1up6tF5vdULEFvureNrZZAV26UDhKQTnnmg3s48cXMiHJBn9FvccBVEaRaoVcM95FNKMag",
  "key46": "3TonbWYeY2HdwE2LVfXPwsfD1rs9PURycA5tEbcDHXyuZYtFDoLEumbpSbyQetrQ3somDc3XPVSwGN9YTCFCUfgG"
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
