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
    "2BKTkuybakLZYHfJ7t2Ajumwc1FskVbJHRahZvTheopdn1DAiNLvU3zKf2SmJtwmkkYyS6waQb9LwCCiUfsD6KT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YS6nx6xtwvM78K5gg7ck3QiY3ffj92DfUe7Zh45s4nNRkjawGAorauCPpvTEwHmVyQwyx8DYpxSQ6t2iiHw4Ugi",
  "key1": "4KMdN3hoMrDvrAsQqr6j6ufEhCcu9xwAtwrQaC9rSbrfngPGQWxyTwajeYW2nUr9xVz8HPpVZJQNe2KhscXua2rL",
  "key2": "2fcZhnMx9zfhPJw2s3Pw2CT2671WMTZ7HXnvcJTBaYBmNZPQr47JiLBApiA7AX8NiRvDX6T1reiwmgV6pZM7aCF9",
  "key3": "rccFnxtWGKDjvgvBKxixpBA6Ybqmnf6Zws547eUfMWWHrvrntCYEUtXuq5wyKQzgmbv5DnbjycmLwe3HLopuqyC",
  "key4": "2wPSA8F6vPcVAHCVCVFiVAF6wdPHqRKx5Xitji5CGDFow2Zo7E9D4VukoJQs6iE4NqygiR9V2xkTzkpSTextXua1",
  "key5": "5GJEJupYBB6n1b39bMJEfdZtkyDHK891zznRQvHuuwFtr62UNHUeLtqo1tphLYD2rigmkT24uaGrpWyYBNbhyKcw",
  "key6": "3zm5mC7WYtjKYrDgmuttHb5u6My573xPAAnsLhJGbNYuLzQLojG47GqsxEnVWEJ2Np9JkMz2DvTjLXiD1aHcg7cL",
  "key7": "2hMXXZRcoz8n72j1VaZ49UQ2bcEAzFX6EnNuPM5bLNqZLf518A9MPn3hXPkVdEmWsTr5M4hmgqDM4yGsTp34Lz1g",
  "key8": "3GsmvYcyuX5wgG84LLZM7uRTaypbenZKKR7WryvN2Xco5N6NKGqUzfJiWHgmc4565RVgqxnDdeEKri4CmfDSMcUx",
  "key9": "R5xE2CZQ4tyfVcgjkMMGrrpK8po2SMReQYd43Xw5KLErQ4aunBm3nzf3t1wMqfVWLK6xJaCWgqmVWtWU15BySmr",
  "key10": "4EBeXrFU8RLQpmgKoLXnDcqxR7JnF2EJoyx1AcgZJjj4xDwggMh6JoQnZ8GJVfueyig1ophGetHEdQ923s4xY984",
  "key11": "2TdkDdxuezVBF1buFYDUtHv7sp1iFpfgPbcQSCSGrcTxsV6pGcBqreNGEMmNpNafeFanAnTzSPEaD6SZsaCga5ow",
  "key12": "2hYryn3PoRXhb3UmfT3AmA64kJtWqtWiz1xWZEsx7ZPm7rJcUannePrd5kutzViQzYDajcHHXajhjjjegMDPUsyG",
  "key13": "4JDimjQCG3mBuya4jNnGxVGR7oQ888EUrsTXhub8XArmvZNzpGxN9Ho1EayNAPm98atZqPWt3XySijHUKskzENB4",
  "key14": "66byERswiXg1n96AZLd4GWGXDoLaaW67mjh3r6vfEaBBSgYQYGnpc9tQXnTduouNoJhj1UvECAqrTeuKNdPbdmA9",
  "key15": "39wZKNdv5Hej5Z5RKHLXyNQwrUxRkh22ZC75M9cV4Chyhu9DdLQtjmpy6bodbqitxop9WVreTqA5g9qsjgmnSJDW",
  "key16": "3AHfUFAWqn8iFD9kGE2n2ezhExyD5CSR3fyu4A4inVuCPAWBvL3J95hyRQoiEwJCLvYVBJwajyeLDSmqjDPhX3Rc",
  "key17": "3aeqwVEtJkEhyrcCBjbm7QFZstvFTHkJpJRfpRLJ7RN5iNEKHkWtN38SmF5Q1MRW1vQVjtLawuy1CmEaTLdtANWU",
  "key18": "3ZZNLZVFS3a2KJiCz6VPXP69DzqxRYEoWS184B9Ny7Wst3PjUMbyYCDUcktstvw1PiJnWgU7aZ4JDBBdQCnPBRPP",
  "key19": "3J22E7ojYpsKKpQ3a7Ln7vgaKe5BNt6x7cvvUV8cAVpNqpBoUtVWAychjSigYnLLkJkC1dWP9sf2YmBnLs7XcsgB",
  "key20": "3gnrED9NT5Gq6FZLmEjhWoWQwbf1EqnN6GfpwtM3zrMFddDc3LrTWWCrzaCS5iLqyYfszyjZDekqBZKGuavEYuBb",
  "key21": "4nFEygwRzLfDZqKgbZna238psnUz6auwkCgKszAyKEV9xaawjhGUS4653w83tU9aALdyJdKAH2gwJeTvitckDLi4",
  "key22": "3AJVwDo7JTHXynYAFUbRQBaDWteNRfQAQ3ZdNexXiRbkgTkj9AWmZGcVzsKGhBixaQtJB3K6bMFAQsyoeRYuMB4y",
  "key23": "2zu41hhHzJfUMsNKABoEciJrXBhZ35HbjAH47785RSs9nemrBpndzBDgKFr2UnQnGWVc9Nt2siLemaoPGVNWPwbi",
  "key24": "mT2Ses7g36kcf2fZ8VS2cB8jcFY61hCNL4gZ9VM9BeUCUQ4nPrN55Zdr6U8WNgh8qFurWE1EdwejJB8aKWmU6GT",
  "key25": "bHdv1jGEiEvFmQnAjnbihbw7XvhfYfgs3TW4hPXzTVJeVq8SkxQ6DyGiteSbp1s27HTqZ5YTeyzX7mpyuw2L2mB",
  "key26": "3fAA4qzpbGGdFxTVYomHidbcvacxkzwbcLfAHYSywUHs4DbSqWJ53zDTVNHyyC7Zdo6cFh2GYNcmhB4FbBEPputR",
  "key27": "4dcEjNmssbix1t2dvdEzn3TY6GaMDJY1ZTooBcP5F6G8T4QgguzyRa6xoNvFVqvK3kcP4pT3VyXLRNm9enMvHMgb",
  "key28": "3FxuosUtZPTEAtL6Ud21hoqdPJiZhfXXACDrzQ2ngJUQ5piyfGbyAyGSGK6hoVuoKgNhYi5DUBRyiFurQQaTmgr4",
  "key29": "2VUocAkHLFZHeSZrbAWZ6n7CktJZDNBkdM3AkS3RW34UxbFEwCdsM1XmEw8PotXSaPBXRm4PDrqQVjgrmpuH6Hni",
  "key30": "2UZ6j5Vu34g9UiaVn1JBfL46NEEsiBDJvuAe5RzzdBGSidn9PRgxBnXewjN9ynwTRSg4EeC8Fm3yJ35dYYojBPDW",
  "key31": "nFpJVJPoCxiQq1T5TYQSo4eqMuD7sVyMi6vqvdmW8QLqoZH4TtTkyTirJXSZ6UVe4FXjRqTg32fFmujD5yWGJVS",
  "key32": "zMeaX6E2KjiptNqH44gycwtnN9K5gXhA8hRGBaxteGhmt5V64DrJ6LqY4vCuVn7W8qG8vdCY3ALSrP2gJL5aGax",
  "key33": "5Y7Y7v4i5WUvR9b9j5hDKb4yMmw24DwdWcSgcVtUVAWiPQDrBKMaTdQB2Kegu3pFVsAT6nY3gCMimFU3uTZfXNQ1"
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
