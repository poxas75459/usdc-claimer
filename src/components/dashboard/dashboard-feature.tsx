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
    "33EpxiKZtkMuveVXtmy3MjEyb7scqHpD8hKNQseNM6jkBgQugG9KyhtG85hmVXW3NjnFDaWPboX5W9vs2JxWx963"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aoY8kuXjjKAMGy1BgT8tcaHAhH92xCLz3Usvz8sJ1ysTyEBHTji1msrGiM8bMFfYt7PZwgk8cBiDX51eYFaN4m6",
  "key1": "UDt7V7Xr72MN7673gxXyxSxrXTtYSxTeRV52EXCLSQHSSvKqRrMdCeKUVhHoACuccxdeAiQQQhLNVDm7196bZrQ",
  "key2": "BShS8ertxGWqW6FQzPdfaWZgyHnRzkTEVMfAE6NbRV2zMQni8aVNHZ724gDrNv4exrnmPGDsBe8kjbHbHDML8oD",
  "key3": "4sbPKCKFFxV5wv2ydWZgnhoNG9ETjwGZEXCyaBZnvikqYgyhdBYupd31h2xQfk4g86UZy3tTNZAsQrwKgEWjDwoa",
  "key4": "4hFXep7A8jHgkSkcSNanyoWyo9H1heAKJykyL26nJxqormQ29gek9BjgocWkErVZeZD4KVYjVYRNtyFtU3PjCydN",
  "key5": "5vEAoobbzvJTWTD5L1Nb9f7GD1VBvvnukdJuJTqng8jifer7qKj7yT84egBu9RLpjYoK5KhEqALTR9Mh3WQ9Mp6N",
  "key6": "2RaQXg2KjxetoUS2Nv1BQxr4BnANkAnZS4u2K8oryBVRhShwjGLNKdum3dzDtZY4RhAFg8FYsmaCRERASRCHzvsv",
  "key7": "2xPwstXXnkyCcDKC1mgcpagscDAf7bwnhehkHqaF4fRjRchRDissMDp2SdWJSLusf6VqWUoNNYiV7Kh5RZsiGkch",
  "key8": "24cauZtzAXi44QDSKJVw5N2HDJYLxFbpMR8Z6ob5Rdu7fTMosfxA1c5F82XkK17KRzhw77rJC65jqrJ4sJy9pcWe",
  "key9": "53JHJz7k54tGq2uHX5XAt4W6gBEVTR1tc58TrTwFCSLGoTMSy1G2Eido9usMV7fRAXxr5C8qErCQmBULh8ppjanF",
  "key10": "5zvDf9aeJSYBzRBRMZ2PjBnuTbguzVsYwyC7acMpo8XEyxmaL9C6fYJNAi191moD928ioGuPEN2b9jwBFFpQhw6u",
  "key11": "4nP7S1x2fKj5sMuPJLC14ECRgtxvqZbDoDbHvwNoEKGPVzk8AMUcxADbvcYxy8ahgLKg2bxKuTWxLwGhYEMTJaar",
  "key12": "67DNggawraGkKfDus8mtBFcR3eqr8kFeHRoxETVFKbP7BSBco6PL79w8gjTbvQ3ESqFdMqfFAmRs5K191qX78XNC",
  "key13": "47SmrGU47NjkgJr3uhBXZ5UssBTvVMkPJtp5u6eeFLjzp4prAtZjuZALaR356K6V8FawS9wGQGrcpTG9DUmQz4Td",
  "key14": "2eG3LLuT14uHQ9gTfVmrCwLk4Wev8jm5mEHyXdvUR1rnPped6JxUF4qbDWKaubK6UfdnXB8cjct2pQBzA4UTBSp5",
  "key15": "5RANsRuJr228M76veyCqfUe9jMhc2aaivj6UHF82qg2gzdhi6jf8GU9RW1cEEZd5WVnxo3JM3gMp1Se5GUfwCrKu",
  "key16": "2Sjk827GfAsrpeu3koAx4KwMoYG9D6nUCFMnWAqyZRkvU2bjAsTqNefAD9UYKsx1YkyULxVB3PrxzDmpMKUiHkpw",
  "key17": "4TivpNs8z1EV3QHv5b7WxuLgEx3BePtMyDWTWQBAa3LMcDrCxhd8p2CEUUBMuDjQLJuoASCkKysY8EPqVN7YqeyS",
  "key18": "2xoFAKpdPnABjQsWmzRaVYbyb4dfotpBXu1rWHW8NRXVNSKXJPfKTpkqDtV66BUkNcz8oyxMkVrDsG1ae5eDuJhD",
  "key19": "2ot5zUXRc5HFoVPFq3kiPuYTVmbFAvSMA3FCcVSs3S8Cw6avbP1U1iUXEMtwBPJ21KeNQcC9HXtbNhqPop28MjHL",
  "key20": "1dRfvfZoJAut2yCJQsgniaGQH9QFznmgvGYnEbb1nkGJsqcJ1ZDGerCLc4pAHBinMoKsFPMR4qqJTABzUf5iaVt",
  "key21": "5prTeU6yXKA6dZaUFuDK2rQJStDMmha8uGj5BjooVfLjhXaRVpAHro7jEUcqbygkWYbPvhGkCkwZ8wYamfwNWMvi",
  "key22": "2WWUwvdSHaVySKKU9HtC7mALbEhVo3TYkb9w8apjrcDRihjBauP7h2yoxSXdTRzTebSbs2kkC1Aqr2Nm1BTyynqu",
  "key23": "52i7jzLJLjZW1dGKmrTikpqC5XanDvUsGzWqbmbPiuaXi1KhpGTS55k43phE56Da6hbRwJP3jNKTah2M86cF19Ls",
  "key24": "2tEhmcV42x2e5UywDBW8QSnyDfu3SY9J1mb6PCVD5wxCb6cHajHf3khEaQdoysLgTri24xAgYLVJe3JA5oeiiGa7",
  "key25": "EkJzkjZhN5JwDJfhV31Jk7RgVQYsTfQXUJm6mCPAmT9NDpnZ7akXqarytbVFr7Hd5hha8ZXdGKr4CK6cfDiwb9N",
  "key26": "3vBqL3JFsZpyPnrAZ7D3mJkNBfsCpJ5h2cNmDqXMVQC9oykbkWXCqEnuwDcLwy2x44kesPdZD1HhKR7A4tHRsABP",
  "key27": "3wx78aUSeZad8ft1LNhsC3qaUdcWgKAY85KpjKGrA5f4mMXMxCUoAGVX4naBMjxLH3DKLjNSdZeAuShJRwBpyTLo",
  "key28": "2mgTcbKRRfT8QLLswvpwdgxXR9M8wqFNLyEE3pr7CpQAmVJSbEJEdQb5MQKuFhmXNzpbmmQooPFp77usVWtgdGHR",
  "key29": "5D97nQ6Jg7Lth6ZnAR6doDsc3F2aYdL7diovLS8MUnaD6HsbqKNYSFtjnLdyGv9sfdLN3tEcborZ3UkBADwGDtP6",
  "key30": "4oqgxtMMyJ3SZDxu2TVu1YMFyrbPUKwdnNg93fZ4Vk1ZMQ2SCjo56eqae2a5R8CkmZZ18QD8SKVwU5TL5WBUUgrz",
  "key31": "2VKwee1a5n6Cxe625hA1CSkDpU1jM8AF1qFrmfz2VmLwyUUJ1zHPQKLaZn7k2yN1byqU4GMttpAkzy7LqkewT9tu",
  "key32": "mckRuioCMXYBSxWXsFPv5Ej24samNhVCAKb4J1hc1ZrFQNUsZGd9StLMRSfa2J62KFRBmDnnzNZMReZv3m2XXoQ",
  "key33": "5xaSno5oykG9UCrsCAk3hB5vsD98PAZ5cAfPVozaAvSLQBZ8D1U3pKqBAc75F5aXCiTv4TBpYjCUka3P7f7k6Gvq",
  "key34": "2WSKqbsmuLhLqragtwkcQuSy4g8YcjPDhUEMb31b2YP7VZ28VRy9VxRHehkWMMkkkKXWKnsFBLowkrQ9AG6WmpQe",
  "key35": "4xrE2YRfpXWAsD1CmGTfaipZWiaEcPrLzkCmXywmNMpCEQVHHKd9aocVw9PyHU56rMfxa8RCfmrZM6x3Zaxihr4T",
  "key36": "5kuDHjYDT4jVKUmVzyDbRjZhbFdtGo2PSEghDTov4TMLVFg6sCeCA5vgCBXRDVZfma8YRx3bDNY9kpCvWwzzp2pJ",
  "key37": "4A2GHBvgPZvtExHUmXqcQ95Px8iexgSmRvNTyBFVAwUPpnoFoZz5e6r8y8d6XzJsuEoK1Dc1ENrnUNvN8CJBjUsZ"
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
