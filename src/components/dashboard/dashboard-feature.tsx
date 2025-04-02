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
    "29kMZAgRmQsLcgaPu61x7ahUhgJra3hazfwnyRHhfxKj7AkPrKqQh76xPhnFJvxHM1rU6U5vFs6hNu646wW3fGug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NJc8ziX25neXTNajdCwrjZh9ZTDgjHGf1GiYffXoWfhLCAqKnAtfKKtRkMi2R2zz4b3dSACc595ks1hQ3QKbfw6",
  "key1": "4VJXJ9K9RreXspYedjgvXDoEGNNZJWd1rSnBcRt9q4dK8qTcCR1bnrwKTWDBXNnpm23JyJ86adgMnFsPm84uDa4Q",
  "key2": "4kRU5AGpkoDGtR9AiviCb8AFsCM3oRS7FWE555DwEWDbkhfSo2Tn1RU6zKLniBfkVDEmsJFL76HSYNUxn5wAQoJ8",
  "key3": "2XSpwGNghdRJkwQf4nZBFdc3RurkQot4kYUc6svj7pZE7j2o5rkxzrHtLvzkkpTSU6kBYF82vgcQkAd5zjfWTRZk",
  "key4": "34twgvGcymNkvtnDCkmrpUSyv9heQjccU3xspvjbmHXJgyzcEmCToYt9GnrzEnZ1rcM5tFqkQK1Ax4vRWPgYsQUK",
  "key5": "YTcDrx8T9qWrwwoo3Etx97RiGJLPBqw78UBSNmqcUJchPuCES7xuMZrz4JhYVfmMTTGqrPbAyrKMKE8ubEDkBqZ",
  "key6": "5s9yUHaCNSzKbaMhHdKBnAfZHiawKcG915fBpcpA8pK9f4eyrKFwVKV5HfvhwWm9s2j5CKq4jz7AgpMxEimPMco3",
  "key7": "4mi5XbUrFMyyNsvLnSWhm37MXHtdhMLMcwkS2tPJU5XcEcWXSqh9PZF89ULnkXKBq5xCaD9NRTpTqw3kMgrcXf4p",
  "key8": "4CP2gUaX45VXuv3tjhgzNnu3zHydDCmrMLEsTdsrMAwFHTeRX2NajHrAkt3RFyLHiJ1RsN5YdTyQujhTgeBjBLSx",
  "key9": "2VF7R4HYqWLNTyN4aAY3EwN3gdazeqwpiVmNkYbzqQznAabUYtTBM1DMJ2L6LTNeAdTbP7tTZpwwuTm7TdwWBudu",
  "key10": "5WgcUqh7aHVhJRa2ttMXFrgwyrtWERKtH9yZzZtRWYkGcfxPHba1GNikeT63jNSVctfWxekXiwLvFVVLBbJmW9pq",
  "key11": "4odmLsMMriBtMgBeKuXNMxe42QT3hcDE6a8rsTcHCzucrTtLcaRBzMk8v7YidEfAKMPmgBNa6E9GbbSDCqd5FPR5",
  "key12": "uxHDMtnDtgyauxd16BoYa4pD5oy5ng5fuew21Ldz1jhcrVzM13xA51gteiQfT3xV298YKKScxSGxRu7Ayd3RebL",
  "key13": "2keUbvkqNC2Hb1YdmgKeH3LEGevQsUEDD7n6KJ2VYY6xiwJ6egGGN942yTdhKzpSnjpDegvNmyNiZKzEgWZHNtUJ",
  "key14": "w8ThkfpJWcNtE712gHmgxN7W6U8baYhECDRWGjC5aBkoX2LHfbqDwyRjgFgTngkZdcsaQKbEGqBh4KeeS2gt1Uz",
  "key15": "4N7Jkcr6ttesQcCtK46SCRs4ywVdzXrPLksPAmqLyBo3mx5deXe6mGvZ5h71nKu8SxfdpccZVNqomqUhMUJttpdZ",
  "key16": "2PaQczhUxpaGdEcx59uPreedbJncztB1qoZMf7w35382eytwhr6j5G3HGXXgt6f5CJXwQ1TKSfnPHjLM9hcHHQQp",
  "key17": "GhGCumMqh1aXD4h2CEVAy41SspySprj7dcnxCeUufmk28WevfPSxQAFUh2ff8VZdxgXGN2BbZzSTLUo7BJNThUy",
  "key18": "24xBikYkUEqjxro2WeUMGNzxQJ1DqWPbfSjspjGUE5NCiYJ9SpKUgSBF9sWJcp2ANyzJR5YxJwUvyE1PFTq3rSr4",
  "key19": "qWeDEvcL3VKyyhbSzATZnzuRWj3g87PC7377b6DMRsYZGp5iqtxkHzchktPSvctqT6L19HnjrnHKsUivWyWyG7B",
  "key20": "4ry3wgJcxW2EBMTSAQpb1Fq4ppTMJGBjGKyvv7MzPsboeuKPbzH862eEfttbp46FfsnUBeXhwaHrjx9rKs25eb3c",
  "key21": "mastREYfBchApHeWqYa3Q1DCuLhMCK5MCejkR2Vgw1PVSgu4bAW22UHKKiHsvF7Rcp6RjeyPjagGhWAq9K6NBYE",
  "key22": "28EQbsp2ApPTCDAPgaEocQ6A723Y7PRjH28aiku5EiZYq1ouqB6ErRLpuHNKaERnD1V1aF7YB9waeDcRK52ymvQN",
  "key23": "4pAxazui2f8TwvAXcBRR2SwtohRJ2SWsqbLYGovWja5yTH8Yg48ikQLW5q73ckhrSqApMEx89Dy41GLwSWRf7xca",
  "key24": "4cZdjMWrYx8pZuZ7dAjQbBpGtH7otKh6XSTfBfmspG37eyypBtHzNu6JBMLLwFKTVufMbKHhdVvihDmjrLXxbGyz",
  "key25": "3ke55PZJa6LZjzcZ5EfXKu1jFDY4mr1Zv4mVr7h5UCFyZHM5j2a17471Skhfhe5zZccy49Qg5DAQJCiQegkwtkcG",
  "key26": "2LHDkZK4Uwkku93kyzEj9gFxUEvzhdLp8zAGNYPp8HTWh8Eze8KsZt23gLQ7Vpu8yiNWPmmefouWqa7ejy27AMai",
  "key27": "5VbGPWmZYMmzicTRuStJmqqV4kwNVcuK1QmBJE2vf2GFcxWNkMyw7myoadj63ihAtVo32DswMapEyCWsoPzisz5D",
  "key28": "4zx447aUy7v5yihCJrWbCBBDPwKtS3MajT4emRPKn7Qo2SRzrRUWA3Z8WixGTZf7RH2CqCKcyxTCEs7G2UwWzuCx",
  "key29": "5p7WY27DD5jBSNZBCNG3UvfZhJKy4RKAGehbTUYToKqQdXvJbU8AZtTdYtTZxPKwFb8bEqg2zVmUpKJ7qqrb3Gwi",
  "key30": "58eB1vZFEKDKb1oPLTCfAtdTtN8ozKqxkwBAeQPynmM72uLtesWjTMHTwTziuxYqhZ24A7myQj3Q2eBvsbhhRXv7",
  "key31": "2pwMiRbd4rG2qNGw7pQtDRUUAsL84VMtPF7mfgNUdarEEz2n2nvQJGMi8f82Cx8dk3a1B2tntjofMtTaXojJjjJq",
  "key32": "27HEPjfzH75iSwXmozeFYQoqjtngNKqRG9wgdVAetVwxxyN71tGjeTUGVFKohCVGigQzCirZcDY7KGsUSeE83Kss",
  "key33": "5fErfcgygvXQBgLaiJ5quc6EStX45CLGyoeqcQYzZhjjPx8nzoE2nH62MPtPNsXktD1ujNw8AAYhGKcqWDN5BeSX",
  "key34": "3MQs2bamZmHHz5Cd3n6hrKhBWCDwbv821Z2JvX3weJiCAGuy8ApaQjskQa9F7WMXBmqjFH77vKwXnGzaZBKZBS5z",
  "key35": "4z4PL8Sd1JnvX36NnTTVD8EfnFHBphizWQ5V7bTdBxEWUBuHpG9eCAMW8DZG76anUqA7NgjLid8MHs7XihbWqefP",
  "key36": "HXsPaizaCSfko1yPwN3gWQJuJUzGYTuwk2HQXPuaQ8cmUjEpyBaR5pK1Kd6xMHUmutrBMcVm9rrMq5VpHhk3WAY",
  "key37": "5LLWHfDhQ2m2g9S2BhoARcFPcyVabBG4tuJsyE4e36jMmzEU7xX1EaC4nmbQDK1GnidJurGEGcWK2xTBKB8uDist",
  "key38": "24cRByBLMfvzvTt8qqVnehqStXQWa4js8HiNWwDivJPcgs34aSe3UVFgeit2gdTJFeSG8SSKkoiE8XrVMPzkfPgu",
  "key39": "2HMxD1nyAJa86MBhfA8XVhhfn7ogBHaMpRF4GmghfSGLyhhnDaxWVqcSazbKerxTG3uRSThBnNy7Y395ZqzSL6gH"
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
