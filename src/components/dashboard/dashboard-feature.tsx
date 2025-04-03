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
    "5fvacY1RYxYZvQ6SnRj1gqt3wp2houZY8BecoXggGNcssjE5z2F2c7GMxW22VCwoiTkVM9RQPSfZYZVzJ9b7oz9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27quZTfnovkPfqfVfWBcM4Q94ozNmkm3Shwq8jsg4Gd79u8U4hDE3hjo4nxiEtMqzSxWNeJrKQc76mUweyqAk7jr",
  "key1": "2t2e5PsmLikUt2RPp8SrzW9VFF5zXK6kCNJNg6hHQDxn79ZnyTvULzyCRseQifQq9FATUZte7m23moT4RpMYi3Yy",
  "key2": "dyHmGvEpFApmjcG9qVCmdbnEudKqxV2brrpTZMLDTLEyHZAGALqV1NLPtzQVtVonvthhTM13BeujSzRBeS86tmZ",
  "key3": "zHTavYtpAvRqkncqGLNaP1TxF6eoVeSSFLPwVqCcGk5fj5oQiVBVSsoMRtCriLqtuDN6FxUFc6He327zmGNRyuq",
  "key4": "25xXw4uuYqVxVX9jKJBFxHzUXHZE1YV4CyMiKYve74ppiBoGnEaG86D72MFiwRi2pzrP38p9p24ziAXrFgxdWZrG",
  "key5": "3Fsp2DtcDQjFmjxG9vAhDFSCJUN4j1erkJ9CaNmfKkj6cn5QJNfxwQPZDQFncQhTTayAHnEdoh2SUpxqR1EbCeDn",
  "key6": "5pEoRpuAUAekQ22GXQEvmzsB4hTUuDsQrsCKcUXiHb4wYdskuQdtBC1ow4BGb2ZMQvMsMN1BUgbKzGpXbJfmkHCm",
  "key7": "54N787y2UgAZ9GQ2yqgaLup6P95bi8ZArWugWz8LtH7tL7JCZHkYcubTapqp7z454dSaaC1Am3GwP5ZzN9thQouL",
  "key8": "3ydcMFwkMNpeEfaeQ3HEnNgB3BS5uDZn1jvohVPh8npeJiNBbVcCqxYQjz5ascQWj3KgGomYZ6SL5NgXGpuswsjZ",
  "key9": "4ttSwerLE8Xm4R2bWse41onJk3zQK7MHgmWZucfXqMhNW6qb4tUppgBG7ETYCPxffGyDgUZhweTJZWECyiHY5kb7",
  "key10": "2EhzooURmGRgR7iQMAbYY5axKS8Ju6YPb1E4LNvQ7FCxHgMveGXYi1tQ8UgssmvW72RW4KRBsRzHsRy6jqvNyxE9",
  "key11": "4hVoujC9WxiUbMFt26NAfpAn1p6aLVRMfU2Rq29hHAsentrUW2Ac1ogTh2UX2AoSwVuWidQUdv4QN6W1paa9T2EH",
  "key12": "wGMWBHAk9kg4VGX7KCSH7KM67NLb19F3QFvTgWpv9uo9VAcLbdmgZJmraKjmteiMiLCXGFfHwaXswxKTZHE2FnA",
  "key13": "4HN7BndTAtX5AARi8nRwh5b86KWEAvTbZ6udCCqUFrFwqtHiDVyDdMLTcehhX7kKhBWsGGdF8DVTPyuVBWrmNUWh",
  "key14": "4N6m8j3ELpLumpMPyDSjycZ46BtPKkKCJ8JwokZcaXmdHYt1qwgzoNivrEtLXc1mJK9RgbKvNfaMbEjBna4UmtdT",
  "key15": "4gyoXTFdUEtcQ1GC1NmkFQ8mTubxfAA4nkxjicKhsvWUUZ3DxdjnRwgHHoh1Hw3hXH6y4YG9yEKARxiCTa3SWH5m",
  "key16": "2du9oCUFe2YhT2Y88LhCM7h7eoiLX3N976pjjTfGMwz3Y3qL68VN36qRZJij33TYR8zPJw7VQvVHu7YkKMWY2ryJ",
  "key17": "C5gFsKY7fpxRx7TvS1WoWtn9WBod6nRbjaaus2KZM4z1XxhBwyrqHTMeSqtzqWm8mrJF9yj5rbZN4XedDNXHbPg",
  "key18": "rdcz8Tg8Y72CzLziDDC4SAjEnBnLjsTM7GiXsJHXkTZHF8n9Q5ZZbWwjxPFBcPBWYabSfQYXYmzkdV5Ny7NLifC",
  "key19": "4VW71gEhpntCXGAWgFvGovp7oph4n1si747obHmpTYCBBRb5fEY453KCNQ7TnjDL3ja9Xqedr1LjwMy2LNaMA6Br",
  "key20": "3uZS6oPoNgx4m7JoYHyZXg44rJ46utpoqqunWfiASZKNUhC9qzkR7ugd1n3ZsknEEpWR4aKV85BUDBZKNGGSEYR2",
  "key21": "46s21P9TFLDuFB5wpiAVKThGXvZY67XCsV8s5B1EXyCyZWp8P1dP8oZbEEAgsd7fsyG4QpDUQ5as2oPZfH3iJCUk",
  "key22": "2EFYFK7TU9ajTD5svyaGqRJiHRwwFWUTYceDD8BwzXRRtDSekDXnGMtdtY1HFHfiQrcU8NLnrUPf2DQNCiyXrPGQ",
  "key23": "4Sjc58h6ZMsXChqrySKX8hhyUxtQhog9H85VLBwwMKQ9KTPJ6kkyJAkA72YRc8WQfjZMy8FLc3oM7xvYbFvxGpQ3",
  "key24": "sLqEz6k7bA529v7MYUJvyLTGfsjht3j8T8gpwH3qTggShudfzBgy1vxVNqzwGdzzbwv4Fsc3G1U8qtuBzsVPXwX",
  "key25": "2J7k51hPPYo16vPjq2gVW9UTgTZsum71GtaQjwEqvJjr2LVC764qjpEJQA7tSQsX2NUghuHzwuWiVuHXqAKEKgdc",
  "key26": "2BKHNcaKb53DTC7LaRbmKT4Sy985PhBnF3ELB5W8pZTUG6g4xLvveAuGGtAKxTj9YBMVqeYgCppU9nbLoM2mPF2X",
  "key27": "DnP8HB2RRYieMAYXi6ceFbYfm5iUXPed29uvAnwpAz8muJT2jdB2aBpDupMZHydTyUhfYu9zyBPMEjXrhqxXFQ9",
  "key28": "2qQ2gxAVRKDt7LfVGvFrhSZCDfRRW2oFB85XWkSXneZaZvaDpAVJkn9goy9YqtuyEJCHgBbswXgibuDniXPik4a7",
  "key29": "5BXR1CxheAtggLSijfpazpiEHuUsx6GDZi86j3pXVeDGvjH9XHVdPuKj97TBBY6HfVbHpSQhXthUa7Mbs8iWK1Ww",
  "key30": "45xZtx5tn9zWe3xSgd4cUv2z7nqnujKphE4bRVmQsdGH7Qjqcp2DFuuCFQa4FtF92FHcGQvSiAu2Mf2yAzqC7Ru7",
  "key31": "4d1ntcwyCVxzYTYYH7EBGg7Q1XS1kZ5SCpcYnB4jheBhFjJsGq4P2kCAy3eUBp7UH8cwjJvyJ71gEx4x48SNLCev",
  "key32": "2TV1NGvYnSUMJqaEBXBj6T3F6RgAbo964e4kyAyWDvdR5sQLFMGqeso4bJvKmx3Y9hcWAUjW5BmCLFs26xKQjkMD",
  "key33": "2Dp4hMnj9wVw6un93hSpmg22dVsHjiLEEo6SNyY1NHuV3SKx9fvQYGxfzY9QjFwWBp1GrnrX2FMuE7hW5WpC1yuU",
  "key34": "5xXiLXi7b37ESMAiLs8GDC89WJWwcU3TAeRNcWVLeDEhHSZqFToNXeV61yYPbgTjBJ8nBSuzxV5YSq2ELPzfpHGa"
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
