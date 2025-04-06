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
    "z8jdc5e8qLKaLdF5AMWY4TTKYF9gwoJHJwC2miWjyoeWoXcbnatjWKuvh88evw42TJdL25nciZoKvSGSTcBUViU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "516jj8CYtwEAG5bbfzY6c74vUgb32QBLBDzMkh7HvrEZjrZKkFMFdKZewkEMV2Pn8g5T4qnL9S9MyqPqx8jhdfp9",
  "key1": "5Drs7BJxuEcc4kQ57kLr8ifTzAe74cJsHfFXQDYipsdjZ16ntvwAtHAUJrE7iX1kJxAEBBqPYno7MNjdMd6S5x39",
  "key2": "2GHW5vWX5Mrv8DsJGcvYgRE93odvim5MwwvYQBunvGX9UutsP4tYT2K9hhbQmGXhVTzB1o4E7b6dB4cJfXbpFhQ8",
  "key3": "3fWEujk9pkdgNQZe1eVV3TXA9Rm6Wf8RGWpSPPJFQKDvWfFcFfjM5bx4JFY3P2SuwZVCLDHYZLVqkopLt2XBQEoo",
  "key4": "31QjWnMosaZmSeqW5yijFqc6dDG98EF4TNdBfzNSU7CJbuKYkzMN12vEsKVnrbFJyhYkDYAww1tQvW4Wk9JuoLUY",
  "key5": "5gEVDkAnyP7hjD3UapFhqcUJakSCibzvQMovn1VEqusguqNtYVHdUTcC4r6YqyVnrCsq6K78bD7fBjdyA6vxZuE7",
  "key6": "5r7zhDkfYD4rFTxezTx9QJ2p2gLAKJG7iyQrYdsKtLtPgfi6gDLnUtSzBh2ASEbPcyj7dtLu2ZKa7ADRbaV9pgDN",
  "key7": "3mpyQJm2JTDS3nsMBMawtshWTyK1e4SunMjbBWWyDoYxKKnWB9djUU7QspNqvmSLvaJPyLjGGhc2LnKq3ArJrivw",
  "key8": "4sWZwuqXXtW3woorNeiSMJ9aSDcC6M8MNrX3C4tZAMsW6j13ui8LJbTnCh5nM6Vm9uRjuZBUXCP9XZY7HSriWSTQ",
  "key9": "3RyvqVir6okLaixxdqMe86EJwLA5NpDAbr91MswPS1N767E2RFybFTonbYM4W1PpH1g5rKR4z4MECvpeCiGxxNXL",
  "key10": "RmhexKSqQsfVjARdgW1Av7xBSbUE5Wykev7hWKEFBDFmpx3swvVKk7X8twanvxd2Bv2AnksWK5crXposF4nyzyt",
  "key11": "5MDLDyg2Cpgxwh8RhWm7sZ1cG1ciSDTxnRu8bcEjMm5MBRMsk2WPqP4j66zNxZXZwpnSbtuKWCKFcmbe2YctcEb5",
  "key12": "5GJ3bWt9dSj2zbyNrFDrUgG523hGdCiLoDqhp6Pb93KSvsdkT9Jxv1MNhRWH7fEHozEM3ELb97d1erVBt1RoUKZx",
  "key13": "29p1aFezpVd7SdhjgH1guY6PG8GTrPy8p58nwSzU6SP49rDAeSQiUo7CHLqxL3uANKvbe82QZUnQbNKKkxXVyr7a",
  "key14": "wEK9YVazCCpimhgj3BTAdNgo3izWa7YK1FKGGxHzySddhMx5xqWRYAZKf4x3HkRyTAENaiMd8fumygMJMeUdJYv",
  "key15": "3GusY4ksybXCzRdyVJqx4EFboLj5WKYzaQtx7Sr6e821bGy2UXqqDmzLvmovqoj4Wjjz1pB1UKyj8bZLH2ffxAtn",
  "key16": "31BxE6V7ssaEK1KLxW5pYZwHn64iZz2ebqAm6NJt5HzB13CnMGhoQNg4ANpfHzhdugXrbBux2cYgLNn2NafQ6enD",
  "key17": "5KBWQh9gYY1PAw986QXv8x3j5EVp3XJgqRxU1NMdVtEERmsjTXAfv9wCLmXax6vPqD5xBoAesYoW2yhkZJ1RWvAw",
  "key18": "623o8rLFihPsYgNdekDSpdnfPnAQERr5dPPXWV4hBbm3j5qhKryRVCUDzH1q45WPLLdzEeyGe7DSXhXe79yH3bgy",
  "key19": "61V61XbTmiqqNTxBxTLFvdfP6B7LBsaNRizYK9fjg5oQ2XU4cXxgq83HqbbWcT3YaqBUAfN4U7Yz1WHEU19GBA42",
  "key20": "66h2uDqCbzcKKxyZUQeQN5yhS3hKQ8So2TykwE3kv1b8bKrVJuvM4v3Fpon2d4MLAHbLfA6FKVueWLyxNkTEkjxE",
  "key21": "2W3y26Ujh1ZFTrKbnm16UiD5yJuLy5C85Y5vqjhR5SJw1u68g1MGHpT9PckF7phcvpDx1MouBxpELWYNus31CCKM",
  "key22": "3n7mdyywWLPVG2cweodiy2sYxPvJzEL4F33BypAFvJk8JBRCfTCstbk88mhqF2Ao7Zdb6ZS7kTx9SkuyKi8iZwFU",
  "key23": "hgTA3mo6Awc3mM4d2A1zzqQiHLD2G3AxbzUB1HH5AyhtGpVrPW9UxvupXYSwH147YwEHjoJNH8XLYLu99SgyrRd",
  "key24": "5npJwtokPcW5BT9V77f44qUs8eRwVPeT5eygK2Xii5KcVHvG4RghQDWHwM9exbgErJXGeLfYmMuDeHvmWodjy2kA",
  "key25": "4upB2QKhDesFGmbs4t2ND5MtGaF6UX1yzVsmNe9ExcqnhCxCYamGoPTXKbS4hKfDjsbxy6KfpC8wuQPWs3b7g4ct",
  "key26": "ZpUBzQGx3jBMyXhVyjh8a9izsU2Db2rxUwmmD4K9JaEsXqbGyc2rkWbHGvoPo1Gp27wPAc8dQRRFbwBFVwYANMB",
  "key27": "5YhXPkDfSqmNHefZbauNuEnFjoWNFhE2aataRE7QSBaYNpGh5NHEpLRtCEVYmyGwsFaQNKrjpNaVxJ8omsEP41X5",
  "key28": "sd7GGZKM38743ZGWFRrUx26p71meb3QmRv3PRiXNqKyme3fY9aTuL9AuaWcocQisD2uuN3FPQvyJeBD7w1S6W7d",
  "key29": "24CN6qXFXFUrBfWKReaVJ3PuQes8kjiXyHworANnJg1pJR5QwPXgFqCuqfLTCwJfX7HLhLmm8u8fB7XqXHroyD4t",
  "key30": "3zFjDwVv4hrNKvRgQS1cYWkBnXwsHpd7sxRaa4jUnQGj95SzG5CsJPqCy8yLWSPXVxsBpupEh8qEfUfeaMdELkRk",
  "key31": "5kuYXXuntFMzdMfwJL5u8QNV2e9sskntk4Bs1BKRcQ9egNxYkeBPgJK9qZ3Lovtq4ziuAdhm3s9gLM6epUGHxhyZ",
  "key32": "4RiQzhPSpMmuYss2j5ccAzRPpkVKVTNv1dWeBf3KDzcRdX9zzrqwLYk4sfKaSpDDsoTumWr3hBmrwpPoZmoJo23s",
  "key33": "31B1WMxk2EMMunePkP3iXmx8v6GN1jrf3pqZHqWyHamq5D7Wk98ZAWaVDfFJXnQc1U3Na9PSEkRxfEN9V6ztxzvK",
  "key34": "37A1epEvyKiQ4Qy7hrQvZxwRYDV2ZaHg9BoEYoK9kAQ7M3uMuU7B1WhCiGHHHDKN3AzeZBQ9WuFAhGPuYhsKoT9v",
  "key35": "5CVrVHDLeNf35CEFwzPXSyzW5hY8nvNsym8TMx95DzTa5N8hXQvWexStzewQX1mekvnrwjqFZK7yRWLFvF3Zp5Rq",
  "key36": "2dpiDfxzGLoEci1woJhRnvEXskExkpPhJuFztQFmUvT9YsmGV91m5Q1nW34APZivFuKfgUcZ2yDyk2yJXhSXcBpp",
  "key37": "5AsFawWtkM3c7nyUkJowsy5T5PEyn8zeVnz3HBM3utv2vMxt1gKvngy2zddXouEEn5CHi4QiXuuQQA49Gx6yYERA",
  "key38": "45zxqLYLACRhN2AgxyWy4A3g9U64emrCxQB6kZF1shgLAvHtD7r6HXUUxxMacxWyryuymd4fpg9ubiyQSqMZHTYR",
  "key39": "4BjVw8LobomMfpVDZB1wRN6sF7hLNCL1EUsKaXj2apyaK1L4HDW7qS4WA1XxtrER59aq5xcsct8kMeNXMM2ERnMt"
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
