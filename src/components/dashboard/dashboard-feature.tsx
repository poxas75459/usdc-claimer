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
    "Pay1op7ngJxAYMG8tDxbwrRPsdBsbsMYytdyouLu8wdup8UWoyASKSa5dj7Kq4XSvwdUSsUVBaYYbKfexBA8azj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yKtL6DNvuxJNqmTvEEZcnT7TJc28GrBRRq4JsRRjYRXwyAMszxJMk1ec6AGvVrKA8cK7dGNFCeUtGfJB9q9iRej",
  "key1": "3ieeDqJAuW4y6tvn5PiSSeg7Ke6hVaVaS7abkpbXirej1Tb2AgHuj5iYZ3CU8XYDcPfnMS8o2Rgnp5At5GgRyUEe",
  "key2": "5nMQaQUBvNGeCpXveF3Nv65WbRuxp4tcWU6KFR7CrHU2VypnAzPjejxsoPZQ4aSuH6CDnNLda3L1A4xkjTtKTbxt",
  "key3": "vqpAiRXud4Z18s3tncndNb3TYUUxcdYqEr1PBgZuwnjSYnpKwv8ksUmDu483L4nXKPSGiCi4wxPJVnqQ7JhDMcS",
  "key4": "2HFwBndHywRjLT4H6FNdSNMnFvBCMmbhKd6ZeJcfRNAw5DgUEvwCCjbHXWdVrNAtzhUWJ77nvPjfKTZRmUr1cLiH",
  "key5": "yWNrqJreCkxt5HgByFzPRCwVVLDRzWawf71ykaxDGeUTJKQpiz1LUjRGc6SZCpoRdzGU1JLkYSz1m9zpkr4jBFe",
  "key6": "41siH4ifinWVxjujfJ6gZ43wj6KXXyChJn9zpFewe7GwJiwYJ4iZgAiHbtJSMQ5mabSNRy8YcfxhGy9iV9ZMu6WX",
  "key7": "NDkZEph7BrRMRXjy5B9KND5yKUHyS9hhxTNZVnuSqU2QbbKnBJNoA3sJFvvSvLeqS8WYzvhuGrLwMxXimZ5KeaA",
  "key8": "2pPq1drx6cg1WwBSapJMcDnqmyg63YtHUTZ1rTcpQMsPyrQ3UNFs2a3RxQjD3mc2vyShws9L1iwjr8qbvhsz19E2",
  "key9": "GJNeYW2iY1GCTsKvB34P7USz7TuTRjTuUtLEhsbFmGj2zpyUZjnKpVvGxs5UmL2Wjav7rGyztwKmHbJLGmYkiqE",
  "key10": "25ZgTGY255REtmxigRaamNz8nAnCMbKAqvEBYXMy6bNAj2MtYM85HtAC2iB318fWABesCjN7y327QpFQuhukMgWK",
  "key11": "5REsTD3wvLv49r1oDrGw1ccpMMiuMQsSxag2FDQL2dDLUvHPKmrTTXYTECk8VDtVZ5ym4ttrC7BtxfsKJRJQC9BX",
  "key12": "528GgAchk8YWyLKicEC7Vy11VfusZq55qPigHiWySHEzpenBGphUMxqo7HnM53oNQF8FPugw3cLq7MfwfwvXLL4m",
  "key13": "3y5ZNL9dRg9ksYFDKTCQK7CfwUTcnKKTuMkGgZkgmT3tZKnd4gthrqoUgS2rbgandWxJzwQd1RdmdX1SmLc6WnE3",
  "key14": "3dHpiF4rVBzK7eyLPbQBYnyJkeRZw7jimeD6D2dgvwqFw3PqbUGXqBkVCEnzYu7h73RMLKy9ZTBq6JWumW7ePvQd",
  "key15": "3Wp5S16vrgMtd9UA6HNcH4hTpznAoPYoUU9eqsYFiXKYSDE3gbQWTqrkppSGgDa7uPKuxJWa5wnmPXRiS5KzFthB",
  "key16": "3SL27oa8t59Men3uy3nK7xEocFV6Me9oB3jXuZMmDVXCEYg1DxuzHUyDyabNdNHvvcsFoHrD4FJojZghEBFQUEAt",
  "key17": "4eqXffQPki13Bj3BDJh6oCNmyc2NMC29uw5ENtVq7eih7pUrHLvQ3KqLPR73onU89PVnFm4R6RdmzNEXktQ8rNAV",
  "key18": "4b1ybjZ2Du87Jk2hywJN6n5S38vkkzNzWVkkicCi9a6rqAn6zjxcMZ3eCKySoS7BwGxKVJZGtRbfGvGxeBZT2y2x",
  "key19": "5C67UVNL27wona4Vx7MNoffXYMTuyUJ9BTSa8HBGX1Puia3BsbYBJ2YcLta4MJ6mrkL8jSRYss2Jz4XYtjLimKYb",
  "key20": "4V2n79Lbv998GtWS8XDMMCAjKUoqtBVhJbfUJ6BDV4muHcKAnqsj5GStmtPp9z2MVLu4qpBfjis4kGw4ZLxbTaN5",
  "key21": "NQyEYUavkRD2dcAYSpCeFjmiH9HiYosiVrjHKggNXpGgfmtRKahRLcxBYZYUCWJvdenVpMGgJjiXEAbMMUenN3K",
  "key22": "53gDBfWrSLUitUTbwCBwimzNvgq1Y72UAGcazezczLwLSLwEdtyKEfFQqp9QuscBbKyHxZSS2Q2FdavSGAFn381D",
  "key23": "56xXN2TTisM6QDCVNzsjzaKUyimHHxPXe9VDX2Ur7nkmD1oJ4mMU9YdhrJD2jHoutYsTkKosbjyRahybQn99MhjH",
  "key24": "5N9Fcd7CHwm6GVRr9pyywTt7jdGpGzE1aKr8TymCHG2XqQjuLyDRpDjE1wPXWh2KUrz1Dsx7pfEteLLCimqrdkPx",
  "key25": "4AL5FViXjhf29DaJLuEpzKjkZoPGA5r9Cuy83Ju23aPoMSXSRdvKRYEXbRsjSQfbGdwJDNrzr1Dqf84XSH6p4868",
  "key26": "49pmoNdWSXjfMWL4Z2KkJ9BX4x6E3NPsGx1bzt72Q3aZeMqH9BQnFw9VX6uwXguAaC1fYk3KyFMQUFyGdkEHG6ss",
  "key27": "2jtjUSBwYYAn1hQ4BszA8Ubo4WAgJbZogHW5ViS41vNki8AeBG7WTaR1TzVdc14hCqdVf8fba8erky1Fa7H1gWfX",
  "key28": "5y1FyvwDEeHsDbVpi9UcLs5DGxC3TKbD1YcrQLwaVwvx2K9Fs9AZah77KiGKWTch4Z53VXqDJEDXQUkLVrkATh17",
  "key29": "2aYdtoti78thWScjStMy8JAWhEkgDJF7Vc9BZ9ft5BUsAFzzg3L1XrmD1gsks4ZpL2H7uYquXuUmDQxUkAT4WEnR",
  "key30": "4WTu2chiB8wMQgUUvRr12GgBLkJCSZHBHAsKK4xFWmFxFjCMKYAXft9rxUc2RNWf3tifZ7nLtsqDiebv2hHKtYab"
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
