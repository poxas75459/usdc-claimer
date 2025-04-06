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
    "2WtBwvdYXkxh2W8kvaUY4dKJvTFEhUDyGDitx2WgiUNxWEQ1CSGMo6YFgccw9wv6MX9jrn5zLd2pmAPa26KvExT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eL4NkA9scnXSQgV85USXQ8a5m36WMgXmG41kmitpmSkN8wHk9TuMLvrCPfozZyBz8RZsdL7jAhNhpf7bgVGFqi2",
  "key1": "3jBfvUAu2SVDK519j5EQWK7x1ivgLJAD8bFots2aXkCWLeDcit5ktrmhsueGavr15obHDLqDzZanXbMRZfv5KhcL",
  "key2": "55722RBWwuRHumFoSt1LGQTgYr4uFPbBV1XgseHsbWrJwtNy6oHxpQooyk2apAbN5HH1ovfAsnJAQ8WW3nTUPk2X",
  "key3": "36ntsZJjhQcoFHpYALkT5oS6359g7DRWyLwHLudaCYsSm4aVaiBFeFhPuRtku28eAYm7nwHALJtCe2otwyK9HSuv",
  "key4": "42p7fFQMbV6ZK5cd7xHsfZbHvZJ51TiKn4VHjp6nrcoPRHYTkDTr5YBANBYCTwLKd8LcBimPpi7bSD5UrrMdUeSs",
  "key5": "2yfvHUYsg1cdJVTvHRptCMj6ndzbrE9T6X3gi7GByxGi1ne1zHzvJY8VVS2y8wBMRSe1UY5SyjeDJ3TrR4BGpjJy",
  "key6": "5XaePhee9KQTbjw8qc5HZFTr7w4BMXggMz1M9PDvxhifVcDqaakszpik3j2tnyejZN7fuPxamueL3WobPb6vgo3U",
  "key7": "4YtDeBQ89Nzc28B5aJAtkepYByDmUdE5137eQd7bFTkApHprZ6uM3gqjh4BdzsmeHVGLgGN1UhQkn5DzU88oT2Be",
  "key8": "5Q3BJEEV8oDHxfPPmDkLprVB6yPtFk7ChkqAy8yaMxT5cHSDeMiyBcU8yNvTgepopLHy2kaM9Y1yXtoExwGtUSTT",
  "key9": "66F4hrw7SwuFoh6KVTumem2N8G2AjuJgT5KtdWKpCRPja6X5LyoFKrkQgFQ8rt8dXsdXfi8VH7C6pjergvCWfp1b",
  "key10": "5CFJPd2SzudDF9KnX3ZNhAtPcM7nCtaYdxkDcCphTWUYEi9bJp921bmjbtwAipJ9SMTAHu9hP6GPSRbd5DvT6Xzs",
  "key11": "1JJY4YiLDzPURGN9T3hr8BDGVSFJqVj9m3YccEPFwtA4EVSjnHKiQsyVbqM2ZNgcamUgL8FBWMxMzcr94ZKkSNQ",
  "key12": "4JpRtkfahyyj2nsxypWeMvFg1dWjdbjBdbgSAQXv62bQ8aqYYdswEbji9eYiR6EjFhajutXEcK2n593wKwAgoZWK",
  "key13": "5vNMTn6ALEFD67F2YNdtBy45scoFJPbnL6v1aNpCciWpJXjYmWNG5gfBirQtYEExq6r8TLfrNRHckKag9ktdJtvt",
  "key14": "2i3npB7U5iCmCB39fFEwnkVj5ztJ2ZwocQeP21MAiX8mMc6tsoKCydb4yScGYeo1WPWiPbwwY47CQNTbsUALdjPE",
  "key15": "4kWLN4U9erf82Asgy1bQQHiDqgvg2LtVwNf6w313WXwLPH7TYYd7J5PWXA6LRjN8sETvowmZiMRgW3nhe7xTEjAk",
  "key16": "uQzk9iqyWd5tXyxbqutbowvEtNh1Vq2aZ5nRMvMjKyGaQGNxqtXRWJ7wfxaX9j6G3jdCmeWnAvZX2Xm64W9V3od",
  "key17": "39HYN76LVZyxMHW55drFaEUACa2rYhWA1GYyCsZAWRWxBRUnUdTeVVwz9Ejv9cLBy8rJAFctEMcsCNQpSuh4aVT1",
  "key18": "3zdZ1UtNa59L4vtkfpt5ZPSha5DMt4EDAAF8QEPLgZcyekoiSUWQR5vJ2C9RLBRvTjdqQBw4KqwFq62V3Gx9KKTy",
  "key19": "2gzLt7nBqyRMZc4gir5A155943gsuAzhdZLUefc3EA8zTD95JhEY7m5GWXF9aCwxKXbhe22Qumr5DcyRDSFJ1SMS",
  "key20": "1WFLdrJYTD3pUgXfjEXZu17sHFVLcuZ3LEhq561GabDZVPf7HCyDug8uiDBXw2xBKGz4FWwbFY5uLLLhp7zLDFs",
  "key21": "2m8KET8Fc8g3itSgbZ74VHsu36umh8v2bVbX3z2HKhEea8xRQjkLhZEJ5M76PNZfBDpDPmc9dEV5AquKTH4znZuK",
  "key22": "3HCzpEiNAiaqp3umakXEuHCKZDd6T6oQ6Jv1e3B6B4WSdY9vhqKQCgfsDMBb62qBTDjagag2YkBG2zctARsfetLK",
  "key23": "2SsEx7Fb8dzqMhp2jqT9WjsBRCjDrdvpuV6oUfBt9ZiZ9XyKAdpb9sDrz18UxsY7XErikfPC6Vghf4NQEq1WWQy8",
  "key24": "HuhzGTDfkX7oe4Bqi6NTAPDB8euZvxghxMb2xCyy1nmoFcUahkNwGkqwSg2bfHhU3D6kWKys5iyjAeiYx3L8f8W",
  "key25": "UCzWj4MXpmjCXH9AMTFw9wa4dj6d9H46gW3vT8qjUuHuwtpzWhfGk87KnbKuRo3gAitSKR8cvWYNdco8eCWyJN8",
  "key26": "3wikqD9Cw53og62DAcMJPpXn5rdsBb2vrzcS2xUGETsGa6LrhMDyzBRzaqAvHLtNWaAUDemvMKj6Q6CxiaHydYxq",
  "key27": "4ESJBcjDz7f33hatnYVByZey4oxvx8EXmMKaPeDhzRjXq7ont3X1AXTUEnUPsjcAMfJfkqh8rFFRgnsEU4W9bxph",
  "key28": "3DCEKyzQAiTYEt7TGmVsiWFLi8nTWfmXqAfupNUVW9aLXStHoyQM9UrBCgnyRXDRwMNztYduBMVf4GXLNDHduhjc",
  "key29": "KUDhEpdPrxi3fpHHMjQQw4NnxNovmjdRbk8PFdYnhe8r5hzdhoTFRyuP6qqLpSgEWfLSRzNfbEeD8mWU44xujyr",
  "key30": "8NWDrpcCWbBNr3dHmH3L49MrCASi1E8pzhHni3kb7MSp4qEUzrhWCffxtBDffhMwyS1ZDoJ5kbnUb9r2Cy9Q6h4",
  "key31": "4veGqmHNZW7cM8YDCCaA8vzKcf2ZfPvzmGzRasag7zoRaFzTX33oAGUjw2dbXVej65dN5WoHD8zH152UzZNwSPkt",
  "key32": "uTJaL8qkneESLUxiir4v1U1XNy3zUeHiKySCpugj4iZLnd8AP6sbKX7E487VtjQbnS5px4LFAJc7rwM4aifaEu3",
  "key33": "3QbeNC95x7ujCULxGLHEavEsGxvCjtZqLp3PWMDhyqX9NtW3t2ayKWyeKbba5buzxjSaaehPXKYeMgWCwoyMQaFX",
  "key34": "5hXhYCRNoCev892knizspTVTkDiVDyG88vXmW4p6rfMZR78km7oBNVZsDFYm3nSVrJnJLcRvb1Wq8tDmjrTVbW93"
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
