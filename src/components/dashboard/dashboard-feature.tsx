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
    "4YUGMyzFeNbYa9ycyRXVX4Y1Khdkd2S5ttNy3eMQdYhXcCHzq9ttSFWveB9Pg2qv3A7oWh2sdp4vscgJLaAhr3cY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ePrWkq2ms5LaUpuaK4ZgmCgu55ckQvStowkMxdvhWBMTuxJQyDzhk4K9VJXXkiEKAkgR1Kiv7DZxEj7TkF62Wmb",
  "key1": "2jZnLNydHJFnnjG2Ubdi3KJU9H1biaqzUjmCEW33Ciscy9mMRQtD8n7obdwVktvUdM6vyDVguPKiqG2itqAgoqkQ",
  "key2": "vrvhV6vqCynJTxZEPJD9e7Heo91WB6JDqX5JyoJyni2nFQhfe2S9KnqR7Gt8zk9v5CS993ws2ZhCtoXzEX9X5n5",
  "key3": "94eLPZnPPJD5GaUfNBnxDJ2ttTREER64xBc1cnSnfgp3TmvcsahJdk3Y8eAH9VtVxbscpx5U1QrMS7ySDunEw5a",
  "key4": "qTqbh7vzy7r9kM2Bps3CrfRk8tL1HEPPhnk8WdiqXskgrK8FEGyzN64nMLTDTQwmWgWVTs794jpyuxTvyW4agRn",
  "key5": "k99Wrx2xUPshT5bjiUKgzWuFQ4YUyUPM449A6b6WtbFAxCvV7xmaYKWqvhtiVS7SFuMnZQCBXeDiSkSgGjvZ7cu",
  "key6": "s1dNsMnhXkjKRDp2nDr4Rjmkrn5B3F9jnffZxRh6RsbZyy2naL3eAu6aa4ippX69Tn4hepBF2yX1tBjduDKKfwP",
  "key7": "HC6DxBtoXrShWVbiMq353TT69CDGyvMdN5dHxJXAruh5KdK9Nf2knJ5idXUKmKyHu96cQCWxgdC78LDYh2etQpU",
  "key8": "4E1PgKWmevyBSBbExg5w3SvcyR2YJqbJ9MSWQ2KfoVxDJF4W9aHaQWAmHQaSi5NeEcbY7iV5jUPpUfnqUWBnaDiG",
  "key9": "5yYk5V9qq4uFuLqPJPQ4ta5FfpLivg6R3auLqZLwMtsabwXpBR9aP9fyMLZ8fhGSr3GuvAK28FvYYUKCMTMf6UaT",
  "key10": "33JoNKXDBWZSRtJGRhn1tq5LnhrrGsg5d4Q4qYZurCZkeFuJnCdSFUUJwzf7zLAUiNaAVA5JdbRLT47vdqGedELH",
  "key11": "3zAKVyv4RddJKxJ7gAeo3bqd7dNXbCe1o2cLZ53bN89kaJEkhARF2FiUiDnkt9VDa9AHp5YNMJtszpmurENBNXEK",
  "key12": "42TiFcY6oP9tfNEKm135jaDxE9GtPtpg81aSJeAf3CSSzUTryryXKZZo7ca2ege7rheNFwsBGaU3Zx4diSHmXxT6",
  "key13": "vDGLft7bddZ6D1XmdQaTKdmKwjH5Kiu7b936YVhY5RNX1pFX2vBbJQbeZf3X5TAfh4BuDWkeXDr81QVgSASzUGq",
  "key14": "4B4Ljn2UdxZcH54v9jMD7FoWrsz1FS4be2fr1js6tAE4ZFtt9NCBM5JRtKtqgB7T5zsBHrjEo1H7dTfS9JKmtSbY",
  "key15": "2u1DeKivHqj2fWt9sh1gn9kyy3f9xDTaFzJrJDwHdqDqhLzRWgpYPuZKSsmqPgYWdixFBMF2PvnjuQL2NpePgHn9",
  "key16": "2974doR4gHCrH4P9AzpKhQjTuQEYU4hYQMkUYv4FXWXediHs8hXJgnTriegf93HppYtuQP2Jui9JpTHZnzyuyR8z",
  "key17": "2TX5PHzHSQjCBW1wZeXQYXggUS9NNQ9KwRKAAMjhJWG9Rc8tNs4JhMRHzTRvEjKHKrJeUAaz3fFcCEi67ZGrozSL",
  "key18": "2N8tENUEmEpCin8kusD75zsUGznTtR2qPEeSNyp1hBpzzVxmkP9UaNAhi1RY4Uuwt7Wo2Jb6R6VPPLEtpnJWyZcj",
  "key19": "2yWEsy8rW52171NoVmYs11Havo8FNyiKyyRzKX4ESAksnFPsrt5d4sWhganVuuDEGCHA695rajciRP2xkXipUxFL",
  "key20": "3HyntffBNpLAiLowJmevqFXrUsUH1LEMUPUFXgaZZD3nr6GMSvutDGydkcN8zsLTgBe5GPG2RfCX48RZC55RQ8hR",
  "key21": "4FZf5w2PcywiZtxYAT9CgMQpxQ1CQDwXDVFhyR7wEtaGtuJKjeTdYfog4N63zn8TdiZnRB5d9imATVVp79t7SpPk",
  "key22": "2DPhmAfo19J6uAXq9SrcHSLkioBwKZeqtHYcwsPVAU4eaBtbRBVTZYvxDvN2zmwEUaAs7BS91H5wJa8q4Ae9o2Ks",
  "key23": "4sexXEZruS4xtY3UmfKoWy9KZZorjGuhm2WBhp2i34T1pGx1TTY58UyMGgAX41Pa8jiomZHmK8yvDihLGikiA9cU",
  "key24": "4ViSq9pakeBfRg1Dhh1dw8BEta9d7VSnGQp8ZjAr1xSK2jBuG1PDFZhd1NnnZd4r67rukudnbnsSBHSiBfJY9yE6",
  "key25": "4JNXSSFrHgeJe2y8geuwSsk9UbC8zA8Vq4e69h6XbR8NRZuVgWX5RVdMCAqAu7rskTSAS9T8CAysUq6bAY2kduwT",
  "key26": "ruX6Zb7yBad4EVyTg7NpT5kF8UgUYGSV7HfCFuevKNigB8G8QDcyVzwgyjnkPiwjjoCyuZ5DnebQxMi3JfWBZ43",
  "key27": "44irYLjdoUcPf3BJmHuhDzN59CquCeicro94jiCfoqAJbN7A6VxwSH9Mqufh9bihuT1dnBvjBj7oTvYTjRNEMQby",
  "key28": "cqFpkPj8kpnw8LNrbDep458wEXCvCqAZQ5L34e7uo2W7m5ujcXQn59Vfpeh3TrXCjrfyotMkigqViUmLHv4vriZ",
  "key29": "5sfQFaqJ6Wk2QPiXpghwKSebMt3kAySgeBdkuafmSG9mKsL8U3MXi8YuXPtgJWRVLd5s1X6BmrQHNLAegQh7A5fC",
  "key30": "29Ko6EXD7KaH18UbjXGzUsCNpRvUwBrZbMM5RyzWQVin721cwKZwLR2C8vGdXcLSxsQ9QYwWg3ABJb8ucTjPm1QC",
  "key31": "vgUaYaaSRa8Sd6e8foVZ8mDbj4KjcyfnxGTpZBdAME5ZJZhaLjLJTAj4eveBfCVAXDJLujeEfdEqG4LMHEaPkUe",
  "key32": "2X9jAntcFWu1nkBZ1ckKnnchY4YowaU79wA1nTFXfrJVyfLjkQBtzyy2eARZiEixPXVYfUB9zXkoHoPw38zB21eo",
  "key33": "3FKFviZY4ob6SmYarkGTurKoygBvnwJaHF28KhpZpCHkmNenovYtd7qDy6Mdk5FSEKvzc3NbBgnq5hkJHymP2taz",
  "key34": "2eJznzMQHLsst1jPaFyyKEcR5vuEvup2bwudedD52TMkQUb2DeYECByfsGA8Sh5jC6kR8E5DrFP3wHp9VY9rtjcX",
  "key35": "wdh4bsKBbY8d29mr9UXRrvWGDWncQDQcGorjB44Hi6rDfTVFTRoGuXTWPSscw6YEkvZ1WFw5wM5SRpGh3zSGEyv",
  "key36": "53jdaTzdBdrtiW5jENffdMo6p6TTQMKCrkPfVXCjjMhLTTPVVfvH5yLuhzzihtEzq9fZV26EszUP2y8YQbx55TBU"
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
