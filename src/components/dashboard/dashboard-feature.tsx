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
    "26ehWybcMvsGGtKZyoCq7Qjwumoid4YXPsTjdk6RfgqHq6TXJUXwAZ9z29bsgTKVVCj7SQX99QJeQ5P9gjzYZnnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GWjS9kFdt8osZmRb1xkgv2KRXt4SnGY8gctW1b6Rn5ktFmzBQ5Q41ZBuXX7KB3PUNnuybwZeiA8iksAjBDzKPfg",
  "key1": "4v9wDe8RVE4fBkaJAjPS8M1XdMEQEzNmnR644t8rVAVdWRAYLwZRthqp8xy7waWEqTxDSZsPSSKodbKKS7VA8sBW",
  "key2": "2PFy9RNR69bmJxQZuRNNcAjoRV4QXo4MNXbbK61R5kg7595K8jyYg5bmmCPFqvPLXuG5CH18iAgxDZP6knZAmy8g",
  "key3": "5KgyvfiXN3Vjey1VxcyebmQn8G82CsZXPHsTKvLqGxCnJVFLuJdP2P9emR9LKd4roENJPu3CEvoV8WFLcPrbZQo7",
  "key4": "4XWihC5mmqgPJikyspunQuzJrTjxbwASgsya98UPBrk8szsgwSx3C8PzAJyttr5peKVjKRPpU9uHiFwi5SnuomNY",
  "key5": "2XbrFEMaAfaR6ZzmF36Y7bReRyfRKZS27kbDxRW98EnNm2ncWrxkEf44nxDvUeoeQwPKAR9vc5fwwFtRMW5WV8LR",
  "key6": "3EafY6w53trVKWSRwBHSsnMNyU4SakTWdTY6BcqsbkFix9kMdiYe3kce5wReybzJjo7W9iLM35PGkEy9n1UEwUYd",
  "key7": "5AJR4mbZKti8U3zTPBmJyHucKZPsyHK4WnSLebm2nhTZSu1uVRpUyFSdyHV9Go5F6E8xyxwDSUstZtgiBPPcR4e6",
  "key8": "5s6wTdShFauwDgnuKML4C1GVBniKorx9a4Gnm8XupZ1pE6JeCRQrc38NRWyQ3EZtt3CN1Pn8AMamFe5RjrrLbTSy",
  "key9": "5aeXpt8SkBbm3dwb1E14gnr2CVssNS5Xsgi7dAX75yiEyycGLNJDL7rhvZxfG1dBmK7Ndcugi5G9S5DqXmiU8FKi",
  "key10": "5Saw3tsHEmUuoBKBkL45FrUq8mXuq1V3RjNyGzdhTSoY1Xip2k1BbBP3cj1jx5gepQx7yk7ehGy3iNcMNYE7TXcq",
  "key11": "4JQedE2YnfvVoRdp2UHsdbTQtY8iG8L92ejB5W4SrZG1gKWr8qA2t3vmEU3GpgZ2FNyt2W5KAtPqetKmewDRh1Dg",
  "key12": "66hVVU74QxXrefVaRN9FqvSYZqB6QJ2zubsSYDwCM6iVkt4Sine7rzmF5VGvDHJpGmWZ1ASGzsE62TF8cmC5LnDQ",
  "key13": "4Y34PXedMEvUToPXvJAt85AjGe2yPzHP2YEiinbduir12QAewAhFX9cL6FXLNVcpTAU96ezebVJabWv7KC5TuboJ",
  "key14": "4DjhUBZwSk699NZcKRdcPhe1aD25uLUwpwPAR9aHgrvfYBYvbTpE2z8ETYo9283Jk1Ya2Zwz4KKnb8WaYJUzpUf7",
  "key15": "3BoqrUJDrJLZWvEDo8y7j1uK7nhy3ypgPBzZwasHKXsgP8xKBwwR1tCaqDqQoqn88X7LJEWtJZ8PtWf3ZSvmVSR2",
  "key16": "4xdDs785VwqeQ4QkgkG5PdfEH1XWAEbkM6bNWgfMbjaeuEx4wbmwGGhLaVGaxMyffqqfhXYzpVV4qPpvfYz8eFjF",
  "key17": "5cB9NHYzC79Qy5XDuQiq1ZZ9DW3fCX4TZkTYmtwzkdqKPmECczGwTYbhTLmyH6uReTo7K2PAAqQbPZdK2ehD1Ma3",
  "key18": "ahxHiEYAALEzk4oWtkEbQHXaY9eZKdcBdwcaY41Sn39xMPuy5siubBiBNpte6utrNveVCUMF2tysFZNmLGQqqum",
  "key19": "523JuqxNhzD6XCc9TgzRsNfJPitdHx1cwnzPawRXUDHc5bgM1rxKoepyazc7CVpAwN8u9NEwLJD5bxtEjYz5ekuS",
  "key20": "554YunaCDGBDahy5EU6LinMzPGqCJeQYX1bUZNf8b659zx9T3wHAwwzTe9SAH1KhUcLm9CKSXgXMEsjPZ15aCmmw",
  "key21": "2UJkPiBoY8Dcqs3XweFcXKWJGyJkxeCgK92zCQreUp434Duft86krhYsVyPR4qyA1RDyabLzCbDzfsSrcJj66jhK",
  "key22": "5dkEjFXE9iSRjYyQG96knEmgviQv2AjFBMYwU1GKYQyLRE7eWJBmuuakS9onKpUA5NEktV2ytDQxNCu7PPCLDhuA",
  "key23": "3CTpnTP8JAVsHHYA4X16b9FwPmt6UPWvKzmC99ZCYRnJxMAPefkbJzrW4BSroj7C1jsfR6A3FdBZ9TfscQx9M6PR",
  "key24": "4ZDQ8zyHihuc2JRUZxL1gpGE7yXP89Lcc2BzhDRGGWz6mghzLmLRvoU9rzDzi7bbNRCg71vuTBjP3A2Gdxh8YyzE",
  "key25": "4firUke4He9HLgCovK4vmHGmWtna7REtu1UMyVodsqKSYrvewZsqbFxVtkvsb5mjknPTteHS2Ad8jeSSrUKwmFHk",
  "key26": "4FJ6rpL8KsEnjqVzhejovqidaavHT2b2H6ZDMGFHxFqhcDZQnz9wt8kqeTAXKUE8paySa82t4yAvTK7u6LjW6dCp",
  "key27": "3xdDr9b6NFECzrvEx43fbFU9NakLizkoYCz1f4MgECGFhDMxb9s95Go9mcttLLX2VA42Xju3Njgqb3Sd4NQxrDEV"
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
