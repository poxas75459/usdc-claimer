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
    "2DxfLsZTfevL5g1WgL44LTiFD6WLKCAVDYksvL5Zus7EWwBcUw1hY8wHg6YVSyHDdTQQrHyySb2qUEEzcw7o5ovg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JwMWopggcwozr2CJuDW7nADLjR2BGpDWsHGQtnWhMTYpjB2trcDHfAyWTch6sK16ukSDvRfiaW91phFordUSTEb",
  "key1": "28wRB16j39qQQZ5Mm9q2P8UhJxRE12erE7VnG8HF8E4Zup56aJe34Jjf6CobxvadsfpUjw9ucJcMkyj6ZwECqNd1",
  "key2": "3oz5NALVyfhXfKnPvA9xD48QYLHRohhZNi5yyks8gjYHWibMaxu786HZbNngzQE1BixCAmB5PoyriMtG8i2ZDUQg",
  "key3": "2hyvQWQDR4zXW93xmeDNZMKosJDQz7MUPsGFQ6PBAKGnbMUGUpvT9VGxkzRNSK1TJyWevzf8mi2sK3PfX22RueGs",
  "key4": "5o9xH74UL22pQaUr1jKHpB3mw7rtNLTZ5Qu3GmGgGCFbPfFudmJLi1bJ61Ke7LQu4jiXotMx3QwaSHm4qk6vR2y8",
  "key5": "2rTpZehu47EkSEbccwDHwm7JXCpqH8JsbArtgLiodeUgUKStLFtb5UVd4UxemvGcW4J6z592467eDnCVMYmBBAQJ",
  "key6": "DfkAd8UyMdV9KDMgRNHwNRCtmBnfbYcYifRnnpAAZjamryUuv8MfNyAkWvWUwXzMctJkayQEDLPVvEdy6vRmusk",
  "key7": "4jyb4SGn24SX7sQY7FRVBpFK2DFKnNaw1KiNZr7Fehap39QR2ne1xc1kbzy4H2kBm7TEkueBwRyXcH2re6iwV9sA",
  "key8": "JrsCLLwuzjgunDqeQmQj4jhHyxM4UGordzSZa8Thd3MXSTz5cGjFTQNZry7RMQnhFrPVjd2DixGUWAiS6ejy1dZ",
  "key9": "5UGXDQ8uaVqZ5EmdriXypa1PsgdvWVaKr9mizqYdwX5Vgp7pBKYzEZtmdBW5oBuXNjsyCTnmQvyf2txtewaB71q",
  "key10": "C5xeGm8aBpqeeanxVSYpTqgHURiGG54LxaVp8ENnkZexriwUsmgCqWxQHntxYxrnreUPNEAD79P3LwW4E1Xp224",
  "key11": "2ThYkda5N3madfdoBuJo5DfW8rgRnMpZSHb1RjqysgqE3su2stBNfUJPrUNaoLsVfrbFrqpvL5cm5fbG4qDXHtbV",
  "key12": "4a62PSrYLsk7fXfTUsdeARkdqNoZbJhYdjLMBn7vZwbQq886S4TYeVAPiAb2NDC9KDJxH74JkfLQA4xGvgRC64dm",
  "key13": "4nTLKTwdXMZ4xPSu7FVyn8VDpf5pZGBkH91uB343RPraPstc4mJU4Kfvg72NLXPT3hf3q9ug9ZXyK4ZYp2YZJ1Sv",
  "key14": "4xDLLVXe3QKxZxsdr9HHJjqgMfrujd77uhtoioEn4fHDZMQqW1DH78xKrftPrgAFJ4XBGgDGrZSdXQHYkCmtRA37",
  "key15": "66oh16Y3BxizUsFHdzSvLRuL8rwKuwqodS3LaReMWtMMEEPG1jRb6Wp5Z1yZoYWjHre8rXKtWe1WrhGkjjZZ9eNW",
  "key16": "2bkRFwmq4295MtgZsxoSMRx2zKiDVX7aMsG7AvD1vUPPN2SuwXDJo8rz45DVC5EfTz3VrEZJzZw72R4CgypaWXcj",
  "key17": "4oTLQqoSTQLztRvChidJtBgMc6eivtajoPHhjn3DiJN4jyZ6cxZeZeHo9RqbWJKVfjkYsonH25BuHtrooyXZDZDz",
  "key18": "3bJGEhx2GHkGvMWhRMFjua2VTga3vhntdwv4uurnXk1AyskoYABKYMFAMLatS33aAcCapRgEDoTZHLcPNdSjEPXR",
  "key19": "TNtJ7TDPcxSzNgbjbjxnmoqUtL9aqTEXYAxpDYj1MaPkNyuhXgQJwEriXmcNDiP25Y6hniNBL6GcY6Y3RbAwPf6",
  "key20": "Y8aSmhho38ufqJhcTWS1fopyu1S5wjZpeCoPCSGbN3qNqJriwwohPN3emTo6vipYeBW3c7Z53zjGExe1rh3uZUh",
  "key21": "u35bp6WCkQb27yEna83XdXbkScKwApwg2xL8b1F6i6o3nELSiRXo4k4xhoh21FRou1qEX3Zx1zVsfRzptxTUEhV",
  "key22": "55SQgZyt47G6Z8ZqNfoynY2k7QBLNj1ZPqjm6LPsXiuint5wjXxtr7fu1PyPHezR8ki9ei6eUsP7F27ohZuphdos",
  "key23": "5XuXBETW3VERTFUNKdL3WBhiBYoJhSHCzyxsEEakXgh9jT3kPBANAM1F5HWuLvyD1KZEo6nm2rXEYAs71Vvd2T48",
  "key24": "2uY2RpMHgTJN7noK2B7GAN84P5Mr8BWxqETnHvumeU4QcFNK3B87MGo5tJhhXUJ1x5L3L5GPcbMYkQH6GqCoUwTz",
  "key25": "47NYZ83NyjYZVgrazQk14SfdkGu3Tdz4F54436j2MHxK4M12KLfJf7SRp9zmPfSuzF81G953z36kWQFYcHtgSWe1",
  "key26": "2n6f88aaJ4pjMPzgawU6KffH4DqwTYKKgXsb3VW84M3W2tpVQFyy1DpWYVPSLMNGTP3EtJskvyNZkJ58CUNr8VCd",
  "key27": "3Dfo5QPe7J2EFCkpW9PJ9UbxSD2VkQzfzZ96N6WVorNFdGLH2dNJpfKQijxxphpPQ3VUrGhHcStuzCghpY4MitC5",
  "key28": "3cj7TntfzUp4Bxi1gdrsErzgF7tzLEPde9eSB84Duw23e2eWQfQ48zr2NNsqsjdVq4wiLSxEL4KLFco6N42FsyNb",
  "key29": "J7PdU7unQA3nADH95U6huF7QJEBeouiJtAeLdbr94nuzfwSpSKDdVzgQoBhArukjRQvMx4UgCqDdS7eb6gp3YGP",
  "key30": "43ruWarvPuEcansHfjbiqA31EYdzZvu3WvgfrwTRgUb4Wwk1xrfDk3RobPgvTrUTfaPR4zUfppQFjzkjNeLM1JaP",
  "key31": "ProZqmmdJTPRjCWfN55kFB1SrCbHczA2RhGxYazgf7fAD48vpCirEwwVFt1mkSRRmLRfpSoB3nc3mTiiW97SHcQ",
  "key32": "29PJxcyCAa4EkwFyUpZ2GwsTgmVaFbj6DxfbuGiD2ApHkeQMevpQPWx5tchQ4SZf9emsF9mBLEQKfgG4N4hxQ7R6",
  "key33": "R1NXs2oqFn9UbV4HgYtAWizLCGRucjEL8ZZZTp35V249rNSZJy6jgVKVK8RpyWhaaPrDXzJCnLZN3hH6q25rroP",
  "key34": "4j4g96d5epTndwoi1xU9h8qS82txT2zwh5J1VDYQp7HepxGfhbW5Wdf2SiAmNoFzfQat3NnWbWhFfAQV9serRGY9",
  "key35": "5tZCoNtnpQc1X7gYKwt5oD1NmaRG4UXPKuqxjdGAjjXT4WMncVJq5YbSq1YNM92oQvdqMe2zoGtsNYDrdNPtRpGV"
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
