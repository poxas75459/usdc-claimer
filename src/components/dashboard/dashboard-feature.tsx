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
    "26TLQuvXitwHeMxsRoefAfUZQxcHVSEMSFmEU5p28S9wejfp12nwe9Hj64Aadpi4L1JYSXtopQKP2hhkpyT2oxzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e4azo4VSCvbnbPJCS4HiafPEo24pMfV5HgvKtwyr6aiaW5xtiPQmxVMs9uLTHkyFBFdiaK4v1LyCrTnP5kd8yQq",
  "key1": "51RfWjwmTwTVv4nFp4Qy8Z8Ffz7SLAAL43D4tNiPei7S8zhBWRhVyf1dtJmrGzzVHvCXsaPUVbb6ZPobkQeaEDK1",
  "key2": "49L37tST2mQaNNasi69zotMgEWAb7YQQ1w3EHB3k8TnCq3k3tPRyHfZDHy2xe5AkUi2xcAWHRWfYAfU73sRv17yn",
  "key3": "2pepMKPkKEqRsb7jTMGz8T8RYAkM3by5fgzFg2G43jFCfjRht1uJARw3HpZwYNqZ3QkvBpVdRXphuGwD683MeUNe",
  "key4": "4JRHvkoqcs2S5Xm4vpNUMFXpthezZMh7LsvdfYmyfCEBKwPtN9S5TqUQefsk4gPxgiTF9etMYAoRoQwZBp6RFJAL",
  "key5": "4j6qMMw8tzwyHwyK6trQSnJh5PAZneLnE1wwxY6xDokFcoxT72GRZ9axBkCTzZNjGcwpKkfqr7qPbptX3CodNZpj",
  "key6": "4ErHvGT6v21NwkjhX594NfaTa4tkCAYitvUGFrpDPvVMYE61rQk7jaCUiAKqqPySk3qW2NTsg1HhQrMGn1JjhSyL",
  "key7": "4AhFakFjZgSNr1MmTXiodWX51SZRjvpr24yHsajQwy7nGiycjMkPG1KeryH95jcL2PYySZekctMys3xDoTDj7TBv",
  "key8": "5y5eWdTKFwtUhNKpKyDDoa2Lv3Lb3dcZok1PHxu34tPDdXUDDCjCrPwGKSzfGixFLJPpmsgHyxDt45MGc5jDx5wC",
  "key9": "3BQMwE84iBY4sswqKXdLv35Zx7QkhaGi2K6Htcf7f9c8QSiKfh6FeQ7QDs5LteHVp1L722BUyzHs9XSFtZPs9LgT",
  "key10": "32U17fEQ67AJGPLiU5PtC6XuvexzBujmxLVhJBNPtKPKy6MnL5wcKC8RGdqJxnaUQsrCQ6JfnQsKjW1zwNyf23AT",
  "key11": "3TyPcBBZV4vBoVVp2PD8ybXPzCX2vVq4oGYshyszsMEBvWq81YtmaiBXWaWT2UGxNs1TruzzgWUqf2ewVztvq3fw",
  "key12": "QPsAtfgNoUizLKCvkLGvK9vFru7c3CdVF7BLyfC1NWf2xosQbfKBjCNj23D5y4ugFr82TXtogjekdkU28s2BFMP",
  "key13": "5m7ZiGdpbbw4D4q8wN2ZKmsSV4enaq6zQWZ44bqmDipjkauTtZpVRY6WRynyoPGtufYrYY1b75XRjNdKqjDztmAh",
  "key14": "2em6wvf1RskF4HqKzppVDEuVyyorqqM9Yqip1Cu4gSoPSr4r6iSRaCvMWSaSHCSDCM8EL7w2JQLL2rZnwcukdwRh",
  "key15": "AbCiYATi82ir8hfnwgM2x6tvAejneYvnF57gTUqKrbRARnjn9gZ9RXyRb92cokPymzx2zNDvpypJA992QDt9y6Y",
  "key16": "4782QLVSEfawT9hRAwLM4STbS9poXEK6KPX5ErDUeFThbvpRXG7GGuz34cwXTJn9eSka1fZyBWct5yryYBbGx4bZ",
  "key17": "3AeTDGSJ1KPDBvxPVzG4c9CP6CADHhtGiRGHSSQ8Vhfr92SBkfs9fJJRRJA7yew7V1gGtjjd7bvEzt1SAE2SFTLB",
  "key18": "2SntFZeXj7rj8bej3UVBPhsJpComtxd4W9L7G52Y896HtT6aZpWYTMSjk1sEJEmDhUqGV8wYsKxUKxQkTDfQpKqM",
  "key19": "fLWGV9o9Uy2pQwFdaKkYnYXPtzF4zbQiXfW7JVBRzYdeWSMfnMLz2YJya4EN3W3hKLctoW42Uv8GHHEF2kskDQB",
  "key20": "2T5joSeZE7ymDVzDXq4mAmaLYdq1vXZQzsLUdtB5L18rF8yNhQ41mwbfKhmEk2Mmb8xZfEwejy2k5bP1jy6zCYH7",
  "key21": "4XEkFnwDKokn9n9tix5mrPRwSo2eU7wmwQgJTCkbnQdkASTktmmc27HWDhXY9jxmr2HVS6fHhjEZK2DN5iLnHdZm",
  "key22": "2j5FN2tqfbtVk5JuqvmmhccWWuLenUhyD78ZtWUr28iaHQoiwFW4spjdXfARdmcSmHhhHZcwu6gLEq2wDgGL3moK",
  "key23": "2wakqQnVoxnp91Wrcwxxgnw2fL6BXceHhCmS1tHaRPuq95Lsvq5ArCZ4iUciHhoweJTpojN9EY9E6mniAicF172i",
  "key24": "M7CFhe5PNP3vibQT45r7fMMbyPWnq2bSXTKgtedNndTju7BpiBXg9NFoyLmUrHBUPd6hfzzomQTipvx9yaYVsoF",
  "key25": "5zmomD8Tx3iGTnu5AMHi8RUwnVmHaFs3B6sdJDNeWLWQru2tyArYvSzycc8mjb9kAL3YMUDfEepzFU3Y8NsMDRoi",
  "key26": "5VczDZ8BtaQFCjeQmUGHBSjVnkvNdUgN1GG2r33oahfeSFoXJ2USppFKFVJec7C3vQ9a1FqCj6cdj2obLNtX31GF",
  "key27": "5sgTKJWmZfcqKAfZQ7csWyLPBThzFmHVnAYyVEoHfzb4wUsdXHqP5PpEqUFbzyjDRZ7eWTatrkaEZbhNHs35vAYQ",
  "key28": "3FsVbAhPxu2PNu6mWVrGfvQjM4YVRPFFnh6JjyShBLr29MLmr3ameU4KLQRKSkx3bxengvpHzw7HNsXKRTP3k4U7",
  "key29": "2cum22PMqG97Rwdvx8nSXESQoqjQqi78V7SoYpKHJFcSi2nzFsYLKAG4kHNfcc6ZoMbAaGK1CWddWMb2CoXvLSs7",
  "key30": "5KK6ML2rBa7vvkaNMzWPcGdFTPHJKfLnHjCjvG3r8T2qZwbG3b7TLgqc4z8QQUNp4ynuzTXQK6fyk6pA6W4CKcj5",
  "key31": "2U8t3NxzYfJLUZTpubv5t3KQsBZTKRCzCDx6WKaXjZrgBDaxjZ1ZdRTrdfmmzzdAyBb3Tt3vDgT6qNLcp65HdwTj",
  "key32": "uVqRm6YFqZd9GMERfUpWQJ9PCDP9fT41jVPEiNooNR8Yfr1YiUMKUPkGCMtHeXJB5RwkPChNdsbTwa3xJwsM5cp",
  "key33": "2tmREefwCWKaDPikz15vhMaZKCPZTc3m2EHP5cbQmJN1xnyhaKaANcg57SbMWbM3vYXcBYPDaNgivV7P9kmWgRpo",
  "key34": "5ciCfvGjGphjfAQqh22nMcKaNouZohSrfizYRHrkuob4u84kP7DN7kjm3fPN5DGG5uPGrP85d8AzVs2LXAxkDqcQ",
  "key35": "5HToLTmgxsgUTM2sKeZ6zsgtuTuRmXPZkUcAcpg9s2bwFidgsUpPUvYLakZTUSngLrBMBp2bo5xVB1GA8kcnZ9aw",
  "key36": "5uvaUezSUDVhZHM5QMj9BYC2PJfDtL6o2PFRxYNEYAtpUxNw1Meu6YFgUR1jwTwbgq59tMs79J34Y97guFdv6K5q",
  "key37": "5bRK8xdagk6K4zDcZ2nX4mw7RH1BscqXYhSxyqueeaZZ4VtgfKtvqGFhKp1U1TnU2r6XBU4iYB8Htjb95ds6t5Ga"
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
