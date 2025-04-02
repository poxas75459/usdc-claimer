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
    "5SpGSKx61fPGFfiZytfkzfZmc4tQonxhPwGYqMLXEYqopghexY4J6C1EDtoRGfxvi1EA3g6kkwY5JvvogkSW7PV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43z8pgPzEYBJ5DKc77AeFy3GenkLKs4quqpK8MVXKF6Q9DNqnU4z5Wt5L4t1F4VqbixjEbijDoxFBfjweJgEu9EL",
  "key1": "3ZLXPZE3LKMAwSU7KQUPwnTVutYyuRJr7a6noYRNcxF4PBT9engzCgD5DeiKgfdmZvzMNeMXctGsewdWuCM4DvD4",
  "key2": "3PuDDD7r5g2QfcEMXMv3pdaBpFLycrr9YeQX7UveoCRdLCNokqQwfkKpa9zY5HT3kZi9rhcSi9rJt7TmtpKpMhRe",
  "key3": "2HEJWVnfSFNx5DNtEhdSdGs8sFaAJwUxJt1TBmWZMTrjqrUcYSFkWTp1ZnRiSkm4bQheRtahHtqgsmYiLAZMkhYF",
  "key4": "52spegtEhy7eX15PgmGadcVvJnMvN258eDTQrM9pgxWWAGJDnR5HzRodM6GXm4FxZiaGDDyNbYSTuNWSUxQDq69F",
  "key5": "31SFWNrhUZ8C5Vq1eqKW8o2TN9UL8FBx7ocprUzdYwLMZ8YnFX8EXWFRtZydi9dxEkRN283jGCNgG2U4qTmUknv9",
  "key6": "246n7Fy3UD859EV8tzoV9SmWcJgVWSmcSuCGwW825h3p7hnzqNSCp7MwYr28j2npjR4axc2cqNnucrnbr982jcAw",
  "key7": "3UefoqiD5xNzZACxEiAy17B1AXzaUDQRVYhQRukNAapfXunE1jKJ8wQCnntaUkPAovhsK6oX3t9UExriVzYdDFM7",
  "key8": "3fj8cAZCEgTBibKHXMHuxx7Dd4a9wraoPytfiWokwvE6puy8f5Xf1BaBtmzgYEvccj2ZpCXpfV1Xr6Fepq9sfer2",
  "key9": "5u8wLZ8ToKdCscpfBXoXcWC3QPY1VCWintEtH5cv9mJsSVocmsdckpvwtL7h5mgoVmgeY1VyJjZ4y1TSeFoFdAW5",
  "key10": "5UtvVwSZKpg4PdhRPqBiP5zsm6BKS8uVsfYhVDfEUnogaTWD4MuZ3LFhzQQEkG63Adcy6CR7pR6JqXNJn5FdtJTU",
  "key11": "4sAoUaAqsSDDqgmQaQfJcuYwGNUG4btMPkiFWynpqQpZ7QrR6MoG41RE9UXcy6XiJ5ytdSGHxTJZNm1sCwcDtY52",
  "key12": "3ctZvNx5XV7ozzYTDNRGUWxc6CccCvwn2YU5BwHrecQFk4Actdw6mLuHiDd8PeVnYfdbx8RNJar11kFzmY3dP9KQ",
  "key13": "q4xBAnvBtMqXoPn5eP2Wgt7BvZNmmpBr5PgMTbqS9WzCeLZr66HjvCwZFhbKHZNTVHkKGN3sfoMHBy3GDy6ySf4",
  "key14": "2yUdqUSAoQzn7Qtdk8AVCraoWBfAzoGG8sFnqwKKmnnGH3txnGBTyRMYExQLyAJTFMUVV4y726tq9B5LAr5ESqjA",
  "key15": "28sSYgkQptYUCqCuT9oZ2Q4CNERJLqhqREVxigB8zS9bQ7A3TSvpABgNnbrSk3JTFrqZEfGBp7ie2mL17s6so6uj",
  "key16": "qpuDVgHCW3vBwCtGpYH7VpbWNoemE8oLyZTyMjoE4ToNQZBkEZeBbtWBK85ZQWHbVsAwkUaAvY6sCLhtHDXTFho",
  "key17": "5MQgZ6mmHUQn4hne6MW4BqheM997biwi1qZSnivWKLSzFQ3q7Meu1sBkWZqDpdrtwBrhG7hMqvSvnDrSiyVuBaL8",
  "key18": "4Vv8WR4PkspQ8ZupdsDPGhaco16NY92PfGuR52egLK3c7f5F2d2KoM7Ty7a3RiKKMEk8gppX3DmPpsQadSrtCzs4",
  "key19": "53z8SPXdfpErMaq2LA8xPNQbiPcuuoTWDXKPrVjv6YF5RBP4Lx71Zy7LyziueYp4VsRU6SMN7iexFNTaLLX2jk27",
  "key20": "TxuNuhMzNFeRKvkZDvE2gepkyQaGedgNAUB9MfYypNayvn9nufUHEA8srF5bp1bYjMcJxGSfDW3dYMuirFYQpnT",
  "key21": "snLrBzVJP8e5sgRCFoQdBF2JQMTYuU66nuk8dW2NQCrJ1PNnkFjrQweFeF6hZ69ufy7q6DR1j5a7S4HC9jcTUXt",
  "key22": "4GnMvwVYujtaujWiDkPnoapqVVSKfNzKGnzvoE8qaZ1cHeZb573UDZBpaeFJNJ9tMBT5bTeYP1SAtaZ8G68m23ws",
  "key23": "N9zKsSV4y5SGJZkNKix1nX4tgyhnmCbKDJQYdxxs5xUwzjAUf7H8tAttdfcyJLuTkCSrTJwfYPcaMppUHXHf469",
  "key24": "547DVbX5hADhJAwXyqsK7dsfDnKdNzfRYj9n2WL97msGSRAAw7RonYBdtiayqHDvcvuHLvHwRfpszHJDC3YeFZ2d",
  "key25": "2C54cnWqt3QC6YyCRD4Rmx42scgPM14WCBbaJGCEMYZ99nCwZovUcRsy3PgPEktJ2jP7BLkafJXM2bwi514M9V2H",
  "key26": "3uQuqTuQ4cUH126JA8XQfBX95rATqhy99aCNJYxr3VcAVnr5rtt3fTocNw6kY7NKbAGchW7Dtcocj2f7snAxuFNW",
  "key27": "5JW9CztufRKHxt4hVR51nQx6W3R2cyXAiYyRxcShaKBTwaxYNhgruHhtT7yj75VavA9zMHBhxuXE41ccjLyymn4N",
  "key28": "4w9EJnxVWX81rak3BeLvH9dcAk47YFM3WccS7XPWruaPk1LKQe4ButnHRv8TsvuAqYygZYwTk8nqRTdXbhwNySyd",
  "key29": "6273263zRZ79Q1qnS5da2Q5Qmj92RDuMgBR5xfSZ3vx6S9pnrPzM7u6N5eUsz4zi7dXsFUJc166ffHyqMWceACxD",
  "key30": "4zrWfMWFjyirETLT3mMjUeqWRGr9GnD5aLS84JFjLemsxBc19a2GzcxCCbF235e5cW9ZSweCubWLupxTe4M9LiwA",
  "key31": "23qWHj9pr418jLcxEfsuvzYGYDGVPSESHqvhFSyySTQWAsLvi43Taf8N2tRAv2qL33qwFXvfZMAUy4zdKgC1Q77M",
  "key32": "3gSy9KVYNnGTMKUJMDKmgHNkb3c1vLuDbdoSF1KZ6bATEFSPnqs2JAiNJ1Pn8qNMtmAupnapQ6Nbo76jo6q1L125",
  "key33": "2ESB7CTrnZn2wGarF3jHQDPKkzdDepwX1YzQyFZUM7dkWuta15SfMCNyqsABRVtAFbKfoyfkgKCD1mRWu8CLxAJR",
  "key34": "3ZWiWfok5egrE4ZEeVxbw8f4RB5idFxC7ZyBQcXpjqQfgHUJHU7ZfXEAav24GQdFdVcVDJgAfjwfviu3pqSmbuiT",
  "key35": "4K8Z1sEGH78gjGGzFgeeoDfqbdvFGdkdSiMuYTndzsPVZ8abnVwDcUMTDbDWSohtdeCyY6P8G4MTabJkqReRrbex",
  "key36": "2kVsUt51Z3PyxAdRqow8TDq6EGtPHaAAPXUaHGAtwhbUuzeYNEraH544PZSZpzbD6gTRdEAGs3Hun9TXB8fVJYoA",
  "key37": "4U9V3bwfWFeCsQo1wyZukH2rQkS2n3tHA6354nYFLouF4oSgcKnSPZwpT984iG2bB9KVT8RUGnqh5oEQbxptzsRH",
  "key38": "3VCAp6B9rMjmRtfY1C5kQfkat6gH4fzKDm3onAqEB1b1uXspBuhBthkrpGumPAtnV52qSgM1KoGTYvnboxCadxWR",
  "key39": "5hsMZpkcVmYCKWfEuqywJcVEBTijVCGUNpfas6CbXArPthEm9EaM1X4Ry7EQgRJujKc7BcAApHvW8mWagGxrgH32",
  "key40": "2D9ccukEKqrhaoWdnEr7Xro5q5apE6G5EcyKBZ7xWqh9n5LJE9H3a695pVmqdZzt5ini4vBwA8U6WxKgMS48RZvw",
  "key41": "5dqkDTzjW5xZjKuvTHEu49tJnGmvuYX7JuKXmXu9LoCVjFAkSLqFmH4KJZ5efZ4MvR8Vnx9XXqodJb8TZRKf4QSE",
  "key42": "4q3vmY1EQARTWJnLed9ADgTL4HxHVPemSSynpmTvnh4UjAoGyftDYuk74Vd4xDgoWHKGX9N5BKoQck8V6f2vQpcy",
  "key43": "47WpzYJXubVujuqwLAostSjTcYengkXydfj6kKsohSj6p8zMkRUxQtWh9g6FhKtB6dPjVEfrmcu4HUHHwhsPnVvY",
  "key44": "53sWfKuQVdP4CPpASBJDuXiD3NE5r45nhbwWrC6gfGDNw2uSUPMBWFAujF5zPUYHRiSxq7SqRevoFnCe7hZcWLuN"
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
