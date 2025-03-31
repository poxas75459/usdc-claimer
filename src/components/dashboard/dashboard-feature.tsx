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
    "2NZXCKtLLUbPV48FhBwCswz5TAr1fYJtPqRiby2iQA5CckKnZKbzbxS6VdXobhLfa5STAyhS9n6CfKwdtSsamETb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EbG9o9KLaxGeT8Q6EkRSnbmTRWZbCAFhkaDo1KyujsWFJyqs5f8e4gZmYqP6VDj4u13eMqnasZQHHf1MKwoPDdC",
  "key1": "4ixf54BoHQXhdBJmEuxZbYiQmWVocoPHL7K6bvDV9im639AMp3PgUHvzycZ8xpnUtyFnCAWGKP3faBXWWxB6PJTQ",
  "key2": "5U8upnhfgiMECMYqz3GvY9Ra9UCsmNCeWs6uaLRWidCsWDw1FPPkLV7fT2WjRu573YVvzC6vZH4G7VU4HZQGizQj",
  "key3": "yUdXTpj4uRDt4jKR8ACTtJV51UXUrkvLecYtEMTXNLEZsYyncNzpvXPAGtZkE5devS5ho7t6CsxkXaRacVbQKjV",
  "key4": "5iUXY1rpwEBrRSPSc1teqkCUbqw1hUD55uzgcmbfRTxHUBLiBQnS46dmy6nnZE42YmQWNYD7PWcGopeq5AAVtPYj",
  "key5": "5LcfExkDxHuNdB2A4g3C5mKLikYMu6oCyzMFDPMSKXA3erZHTggZKEC7cahzfMpJp8pwFccge32S2upkCZHp2n8F",
  "key6": "UTnExr1EESc9WvFvfcCjjoWKDC4sdmPLT4y6SQuFrpof2rHxp2Tj4eyQ4wSEbZS5SDL7e4yXdbapU2ZSUPDiLeY",
  "key7": "3wXjY7QbSNBipf6SaPJpBJELUz5Rbthf7XvtYsEXDbmEGDgE4qbA9nvu6u8jPcahhnrt65zFn1o5o96D4fWbVXkK",
  "key8": "4LJahazsyELGDEMkrZbEXPmYBBtnFshtdT5w4J7iGXAF924CycQXzy8tiEjmvryci548UadmeA4s9j2KYa4WrjWA",
  "key9": "5doSvXmRT632WndfSqEBo9kGqiWTwXqNCRssXJJguxt585j2CSJ3UZ7MXFEmtJ3u5qYUnNNSNpheL4SNSqYKNJxF",
  "key10": "3hHqnc1a3EXozmcLGjpbRqziVp5tmAf6XEwmqMq4E6mtH7yqpuFxP3e26fTLP2xSdJAVZFjHDq4XCkNARLAXJk8B",
  "key11": "5CupVb6ddGF3qdnuwDnoxEKwsT8PmEAbYBkWoHgNTC5oFwpvaQSeAs4qMiaLzfeiTbmKcdJd9fDBdaVuQwQxG3Fy",
  "key12": "ATKdoBPHNjZiLmXn6aHUaHg5kgd9Ljh1F5k4B3h4g7VEnpi3iRv4SSoPKwYLoMecYQcX9onSCE1mseHw1nLQui2",
  "key13": "3TrDWTDv29mHLPoc2grNUxeLg8Vv5E9VcsvUUubqtSjRyQ2yWKvfQzEwa2WECgeZStihs2XSUEFGaLWCamdReuqC",
  "key14": "WrwDQH873GLuP5A3EyfcWJpp3U4mcWbnjLaCKAaquVbvdJSn1tTbrZdUXbyj8t6kPKqX9qW6uo9bSEXh39Lmg2i",
  "key15": "4qXbmng1eWGjyCtfeHeZQbKniLXWmbQvkbKUWHmRCt4ZUuDJVvuNwZNQE6xkZNcYuv9RqEbj4GFa76wDh1CZbHCF",
  "key16": "4pmJYNQYnR2rsGPx9CAhf28MNdSYstf65KeijFh4VFmAd8XwetC71i7MJTim5iL4YxG1jjUX5L9rU5YXKJ3Zbpv3",
  "key17": "2FZjmk5BXWPGRzT9NeFYQdho638ACmwexbsj4SffUatNGj2kKLsGXnieFsnGmnhoXnRnsxUC57Khjc89x3XP9PLR",
  "key18": "5BufNbusEsyqRLCJkAgH8gdw3mL4HjJqKLJjoFYhavA63dggcMPCXTAcEoqHXjAH8Mq26DTEGXDMXMw9gsr3M3eC",
  "key19": "5nofucts28QK4UA2JeFaWN33c2LhBxvLnp7FqKPHbPfoUgJ5fPLHQYxmhWxJGYbk5xJyLtd5cMewXTNUoV4PJJ3k",
  "key20": "25Qpc4FMiGpGiuSPePktv1YaByeGcRGHGVjCwPEivz5ZUab8GN8ouEGwfZo4CXhiA96BB4gwQjmHBNCWFmoQch1H",
  "key21": "3vat42XLV55UBCmebZbw9t9oknr7oCdu4vEgdu5K8nQ8kauh4mSEGZNeLQTDSEzFRp4zWaX8iwABN2M43DM8poVB",
  "key22": "p8YnhVJgPsBiesmNmj3cyEvxtLGEn3NiyqYwWLvyhsC5oSH42xi3HubNdrdZGw12TbSvuUrNNMDtyHoxEtA2JUu",
  "key23": "LCqjRmqieydgiuVEMWQjkkkLv9AokaL2VwTjCQTpNC5V7MaaoLsEjwAaVufDvZ5J52VzQzk7scik8eRxFCsaY7U",
  "key24": "3Ui2sTzvK2E5nJefK5GoHXEWwqgMws4PukJ2qCaVE5sUJTdhDpXrrcLH4oKJsaZUT44CJZfUEdVftaq9grz6VTC9",
  "key25": "4gExsw487Q2t5bcw5JrM1zWfR8Mpftw4NLvZeL1k9rqtWxooAdauEitSRe1vMDLQXnXyTwCBF3eYjWX3sFgp9pw2",
  "key26": "3yYCFbhTwawRzsxHceZiTit4ZrvEpkz895aYUXj4ZYrokEULKQPiRtnPQowknzGVY57NWfCvsdmcnGLhMQwy8mEj",
  "key27": "4VxzRqma4wWKuuaY5qrSkTAYt3EHnhM7EKo3we7QcDr9Spdk9hLj9RjDKRfn2oofLVFWjit9Q7YJB16gqsmJcCLq",
  "key28": "2cHbvxVQHNUe27VDHc8p4QSnt5MZp9DCLrFEFpfPg9c9M21oN7eEd76UmCarnjaEHFy5pSs5gt8ALEQb2UsTdeJi",
  "key29": "2FpKEgG1wirRX56kDS7Hm1Z5QastJr3UW5pQgjP6MiRdf3WUte7Fuo9eEadTEfmjM2goGxHr3WvXcmG4AuN5oyjz",
  "key30": "4ApFSqk3d4t9e8m4Y5Jvz4eCCe8nCfQPuFLSfnsjdzmK2ehiwxaEVdnHNTgvzAJgi62Xt6W9tRC7rsHCgWDKGe1S",
  "key31": "jay6J84DKUPqaukvu3rm4oEHfJuL7Q3WPJChvRHD8yM9yRmyGPJma6nhTr8Q8tJVJ5LU8D7uFeqboQe5nRjfjxw",
  "key32": "5NG22T1862zpCXXM5sATUWa9pYsPmtWnh7vdwbySY3y18QC541WkZv6Y59KBxacsyTCk7c2MBx1oS8t7tPrVzwd8",
  "key33": "9PEbzNsvyyfK2yQGsNubhuXRZeCTb4qXDjvhiwXaFg8qDWMYMw9d5dbH1EEAWot3wGje4hEiEcccpv1uvewSK35",
  "key34": "4CKn1UENndFSXZaGXYjz6R6vedBohciAMGuyTgLvc6yJ4BDP8RWoZsTEUsKnSXid4skf6zqjPpTLZFgkGrizR7me",
  "key35": "TniK7BWPZZArwtUn2wGUVyK1Fwe3BWM4Prj9KAswXH91byGvuc5xQTarnGCbYVyyWKw23uWXneKHWNtEHL1S1y7"
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
