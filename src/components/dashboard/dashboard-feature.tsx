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
    "51xDkhH4WATPJNx9t5YGdFeweCMDeu75BhEtZK7pjFSAYoxqmYaTXNiqbpUGa2LShQ8Nqvz9QGXZNhpefshCRzZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42UaxSLf4WcL2LJ1HudrVbFDvgRGpifqJJUNxaTStJv3X6w5vVJq9LQvkPiN2whpQWEkXsf4fkqXZXVePk9Z4Pcc",
  "key1": "5oYP3ULpYRNZdEyAuWkuZm6NG6kYERchejyGqGg84FrjwGFUUFv9Q7akLPdMQJcfGxCiVYc5BpoRgm7WopyybWbd",
  "key2": "W17ue7gocm4SZpoCz1evWhccwB91BBxrfZWMQuhAGSpesRKeCw78ZBcvc3RjqCL77S4Bzp28WnYt5z2VYXrK6ZL",
  "key3": "2gUxhW7JAPbhRAbhCs7qxwhubrQYPjDdbW7F3YGBHNaYCwG8J59ciQfhdNF5eMrCotLrjNfYVzSnqHvXiDfLjdRU",
  "key4": "67CQTRVSwgE3arhRUezu2MfKZhJzPv3prx67JwX9sSpYpzjaSkk2NC8KLGBkZ3onbB4sTSaJ7VVQDqTP63cPELXM",
  "key5": "2UFxbn3ifXGYfUrBi5wjLTVnX8cGW5impzJJZgfvrjAxPFffMjjE5K2yXXDW2NEkZXSuZkCHAzRf4h7Xrs4Gk6se",
  "key6": "BP73MUzAkrZ5Tu3tfMUqkbuFLokthDuKVQcqZMC59yXmBeE5XtfAPWS9VzTXwHmfHYSjhjWiYdyNiW7RPz6qbi5",
  "key7": "25TD3WhUhKkoeyp7Wpack9V89gdsMq35YqFj91rDayxJjgSfMUUWGAj9burLXkEFqv5DNJn2jhmtVV4tkD29JKm4",
  "key8": "2tzaDTwPsMNGysjqcDz6xMD6M55foudbFxyzA75qGLdirDKraU4nnHNLKWJV8LWntWPmDUG2Hb9Cxa5C56ehjh5n",
  "key9": "dx5sribhiGNUWsHWN5jv8CHRJBwMSMw1WUBuZzLBvcG83jNjicq77SAx4Zy41Fm4v4wF3trzAez9eHXKponoh5J",
  "key10": "4B8v5qpuoXA8GnJerGPdkQ17PQ7Ahyj5TkbT3E59BkHctpf6jpt4GLSWhGf4rNPj2ipiiH8dx2UNd1qTh2QUPjNY",
  "key11": "4dzpLkTAKQtm31D6GRaXpM5r1dzqZtET82J8ALhJqjYw8viNsfFQPcej1hVw2uUN3Ee3rc5kXgoQCy5YXzAPXkGu",
  "key12": "4F58TtgAHY6zctcJ8wdSkBcNE35JyhTEMbq4UF2whJKYNmMci5KnBi71WCHiGMXHP1nA6Cu93gNVveUo7HqvEKeN",
  "key13": "qf7dVPqzpwxDtiG8aueoxrEPqZdsU9JmL7qtRMvY1sXjrwXgaE1bnXhFrFF2ebV9pRDiw1CyEe1cUnGBp3qiqSP",
  "key14": "61ox2cnNW5i9xs6wiZ6TWKU6uNTExUUNkcrBWGAwY8wfkwhSvg5NMVR1SdELhTE6Ygzpeu1c2E9ttkkjpeN4upmY",
  "key15": "ELEwLc4c6s1Q1uu1bwwVu6CnXXoFkL1JmbgFzjd9UqLBoLtbopXJt91uKs4xhvsVEbkXuDJTrv9QA4TPh5RWWYf",
  "key16": "46hFuFh96UNe8zagym2AfNCw928CwnWw7xtyGswvwLxJMaWdqDUkd7hmCJWP1iTdPzMNj4edq1ttzPrHdUsZ8nFJ",
  "key17": "4jwYUWaEvsmKMNmFqhVwBFDK7KuxoyP6qwJPv3jbFHb36Kguw22hM5Y4oT8U97LAGsMhs9JKNX1iz4hJqJQm4ooG",
  "key18": "7MLzVQ2UbG2Zak9FUFcGFLhwrLw35ZVwz6JVn41ohwG9bzVm97qtBQbHoYRUBXPp8BiEX24wSbqhqxReXs6KfUh",
  "key19": "5DozpCozYjZAZ8ZajrAMUoswHViRjqMsjAaoNPHdUBenRc1a4PCnMTmmvAJuntjxMy69uCawUK6zUV6dyCBzLW8S",
  "key20": "hwNjE5f2KNsvY4HbBR6Zp1GrNYmyWkWidXbWPdg9bAwNon74mVryWzjHFCWnFbam2psMGzN11XYNtVGAfJVRhKZ",
  "key21": "34qAzo4xYrjxrAK57Kz4jZumfStDSFyMTKUAEaZCkjxctSxDMVNtMb9wk7BXW2hXdsYYUB3uzwe6kJQivENmVGTh",
  "key22": "pP6EN3w2QRx34Eq8zvx8NVxVAECom4PG9q1JzdJnbMAc3A9KxxxyebfGteEZPDtC2cwaNg5JUVtKRYgYQAQGHsD",
  "key23": "63pHY62mVGvrnrXiWbLRjz44meRk3TSn9CbCRCX4gRPfh8ArU6zjeYCDZXWZ6f4HactGBHEozgs3RGeafhqTCUsd",
  "key24": "4WDQQ7qJEoodzZAPygo1fLEbRRi7sjF5dyyXtikDcX2i5sAEhdANYyRhrE2c51J17Qd15B1s5NsmgfeNFhbbwQZZ",
  "key25": "4YPN7gV4UZy2eHQUZTan66DVHUiKdPjJHNwV37MGwka5DNwGDyeN1cxky5y58NR6CZaE12jZbT6ZkenZHcuuJQoX",
  "key26": "3im4ujMdf8diwXF1WDqujo8SLHD2cbboudi4VqMAaeQ796f4ufbiEKzJhMwC5EVVmHKaB9Ao5979WwuddkBhRymx",
  "key27": "3KH4BkB2ZY6Fb3WrMghUGJZLP5s8vneA3AJe8yCmTN7NX7EsqofzQmeTyUt7crWpe42Q497qZGyPGstyF5k17JgF",
  "key28": "ySQYfnfxHZ2d5g9wmhmkYiCP3jhYuowSRuA4oH6qaUi5XWb2wmaXphPnJNsAcLMMe1fQcXsbw61TafnBjewA4YV",
  "key29": "3MGzmiYXMBF8BgitTAvWQXJpNxMLb74ZKfh88nXXMcfWHEXVSfbSA3qnyfs3tJB9jBm9gKuQMRSCgEa3Gs2jpezw",
  "key30": "28rZScvd5Qne7jcieAamDXXUGQoYtaLrYpAHvMYywgefciKKW2KNto4eAkaLT2kEJKB1xqS6fQCcLwLb3cedCCcK",
  "key31": "fZ9EvNpmbi9g8VWc5fVq2dixJBfZDrV5drGqTJf3nsPu8ZmRuLGxEcGyZZDRoMFLLsPUA6ttPXxFUH4Yij6wEGP",
  "key32": "3Sv5YH98rTQBKQ2HVFN5yGy18RagE1hP2ZK9S12ZKJKEiKTsJvkZGd7RCs238Si4ezxqeWePJFgmEAc1cmBdT3mi",
  "key33": "3Q6gbPpfebgqtFDvRC3cVQ3ZvpfSnUZVuYtZmtjqyufXc58nzJZ2XuMjAThCoJMRtnZfxSRd5rmnXUwGF1BrFEc3",
  "key34": "2mjBMtSnbKmFznW2uscdrpUFdpTAY3vWhLknAW97CsevRYNSQbzUbwWdeAz1bSs8XtGdB2eozmYmCTWpT6WZA6Mq",
  "key35": "4pZCMLmGNmaoYPNMxoG9xNPAkhBrsn8ATEzPPqA1UPD8SUaBHS2QxCQZ5mxefDcC4FMEYUsSLpuoSWE5tMKXUnqB",
  "key36": "62HmVsGgkCQ4V3LdyxerJgfYdQxsudoEgEesuNU1HMEx8bgBFyHKkTPnYScsuj6Rp27d96CdsfvmX61zB4E4d1xe",
  "key37": "5Rna3ZGpRVA4QJHywB74HiyNtzU3fw41sdwiNWsLhrMyb11kcz2kvWT8xpnH7NyzShBXUtFQ6fznYhukAcEVsUKd",
  "key38": "5WUkXU4VZvSNZpTPsa38NyaFGxiXFhz4XKgKRGGtLexvdqxEsdqS2D9ZPNnca4LtBixrrA12vwsXFwBqLhkw7hto",
  "key39": "4THNGPs5drozRHphmekXHkhHtbd4k8QWv7dM8Zfc4LLweJ4uk4uRvonjW8aZadGqwCesi7CCqd86widacYHC7okp"
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
