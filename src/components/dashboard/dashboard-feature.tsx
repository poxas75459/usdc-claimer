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
    "5SAUUcCWvc8JiSJr7SCc3d7fgLnWrD2FMCrjAJRcGpUaTCHxKUverx4txnt8qZQEYTbRXCQi8nXPdHTrb6Wsc3TY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yakjXeD3DMGWHVFnJRjAHzksZCJN3z7yyNr8Ktt1tCAP936SVEsTf2Gnsca6z6aXAA1T2CyedBoK9S9s6YDqkcX",
  "key1": "4T2bNg8B5BZqNSryTfeB68y1epAYZXkRoztR9Ft4rcvGkwPexjj9T4kSqFWq15Fcjoc4xHUgpoJw276cTR5vXyUb",
  "key2": "5awUzNXH9BnQG4Vs7tWK6DfQUDn9ZPJNAfYmF7ihsYZpHQMQrawyfTyS8B5gCqqdVNkieXkMwjtigSeCY7E97xBe",
  "key3": "BDMMAfQHStuq3mc3FdY63m1iJAczsxJXmJLvHnFb3mxynVcyKMRjvX16yXeiixGVEZej2eqcDH7acAZFW9Ct6CW",
  "key4": "3ii71Sjb8gC8ViirAizaZNvqXRHnmek1VnAAD9kJ9LM4D2qsZHkrZNavps7WbNuxXBc6gbwScuv4jHx29W6oCkay",
  "key5": "4vUyV75KSnrFyw5RMu78t5vzysqfxQJ5FhSSji6FT18bVJsvp9y6xymNcRjweRS9kjBZjg4eqnLb9aHKq9vwx9pF",
  "key6": "5k6jAtVTCFtWiNm9RtAwgkWBK3YKd6TxLUver6dv1rGhoZ5fWLxPGqEDhBzu4sibiWDDfWjBUXnbrT9Mj5w5LYzw",
  "key7": "9yQtk6VYqJ9ayFqrH894gUPXKptUcCnu526SZM39HC5vU7Y5p2U2rp6pPyigjR88aYruuXim5neCXWdmnS7gbYg",
  "key8": "5n3BHpphrA8oZceFwJgTwve3zfWG1BExDoTxgVbe8Mw7SMjY3rfN1AkZgPvYBxhL1PyoTgUDprq3v6FBrFpUHTwx",
  "key9": "5onL5KuF19YdBBDyCuebKRtcDfLTuzLWEZxzEWP3i3uzsTeDp13FPxLWXGszwwET8WhBgrJaRQkiK15y67PLSt3m",
  "key10": "5zAUvDjmyo97ND6cqT9ezxiA2u1m13pdrbw73upoSjVAtni8CyCxM6XzSPPSF8bdoWpxwLb24khhjSPRHUH2vnEK",
  "key11": "42q353DroRaiSm4mENPXNxBFZgmAxrtsVrLFD1pASi2ot6RMtsGvckw2VrsTjWfUKK2XdEQQHcJmy1P949NYC5Ex",
  "key12": "xbqYoyA53UKNuTi8MuRYDtHaUu3CnTVDcggrCW8Ht1X9dLmovXuDpGbC3732c5GUUnpJrMzU3UcFfRxJijmJQaC",
  "key13": "2AtcRyzFKth9kUJNax8UPLs4g2CEHx2B4vKJhjLhp6kwnHdK42jHNoeJAUNEuBirYzeEjyUHB55FqobYUx2sc1cX",
  "key14": "29Q1hxGhThyVfvrscFxKYV8oPjd1jzaCfBmdvnNh3KAJaYi7UtgMFbNSNJYXVeakXAm5ra4gDZ9EuBWaz3tYmwXe",
  "key15": "5vNhd936HuAAYVVfncK6WCw2Fb3ggcKKfNzgnx8tHpQjrWv6pktFzEDhJtWmkouB3ouDDrQrRvKE1fKbuzmcFYb",
  "key16": "5dHggP5WRoXy3v8Yp3JvrSmrWuF4Kzj2y8wHWTBCcCAJWQ8EYoM7HHUots7Vr9RHNsQJNqbGSjaoKG6w7vUse5uU",
  "key17": "2sgBRVETZcsKu9gr6pT6PdSqZX2Q2VTsmszu62NrGEVk1SrQFrtxw2xjqeVrZGYuqF111BPHDt8rnZWb2e9nB8G9",
  "key18": "3M7vQveC4yjvFY33NZeqLKYNSciLLS7W9MMfLsE9msCYYks7uentXFuxiDX4FcVH68osKX2oUkH5Em5G9t2uhxZb",
  "key19": "u2yYtEVsUurxRzSGTQSYkqBYTKNZUz3r64LqS2bjonG9vbZiPYbb8suo4esncqxUyN7nwgfmxk3xSgB7ca3No35",
  "key20": "hHXQUTXfUNaJkS3J4cbCKHjsxGCWZ4hfHLCFDcefbbiX24wSgyfWbFy4MP7xJCsxpJ8PD15JUuSjyhfEc2bc6eV",
  "key21": "4FUXGxiX1RW6wSeNuztQU6yRguaEuXwE7F2mxofJk5q3S9Ktn2rZPj9dAFTbDukiHzAJXxKUxMrvRfAm8s4TqguP",
  "key22": "4PUENgPMXY9mDTvkE3UpdMmX7NTmJEFXynuN6gW8GfZQXqppMWCbe4vUVG6xMCvS33C6Cbowpg6gBCSKJrKfE4co",
  "key23": "5V2rg96mbJnGKovtFzxyY9nm4ThGKzUREGyoPRv2YAREakJco85HxdxjnxtLUmvD9cs166xAWvKj7nhFfd6injrg",
  "key24": "3MDoRkbNF1QTiNUTi4TT8EittP1Y62uvJxEKaK2Xi8opVicmQFwmxM4wDCkovbh4e7w8EA9T3PgbFC1ovbxyTaeL",
  "key25": "24K8sGh7wTSNTrR2JUMNo1TJLwn7GL7Tq2LWAraGZoJfQivbFGKxF5dfjHuPKUstLcc9VE1MpetdoTyzXHJfWcLc",
  "key26": "3TMrifKdohAiEnZ11L3NcKm3gTQQL3kjZ9RpNjhD5T9Gbnkb1GhCVmaxvejq4GRJimvbNvtwSacbmPi5Ab1bjsFZ",
  "key27": "24bG7jsj4453j69zCtLN5wHaRjWrhdTYpvvCkgrUWgbUjmaTPVWGp8RmGcqiqWiRqV9ugJrwiMPh1jRrw9vBkHcK",
  "key28": "4EZnf82FZDNsLd2WAoNWwkypdiQqUYcUmuMCeRvsF1dg17JuSGCrSMuntFRhp1sfuzHrswBk9Q2C5YJ1hjNKHEbs",
  "key29": "25WYMruPGuxo7oW3yf6bsxFJy57qRUT26d5H1q7Sht8y86JfEDPZkicBRJVyRLkrJ4tK52VnexLddhioednbUSsn",
  "key30": "Njz3Bz9smkr29SZ9DvStPA4r2JSdgFcEq9gHuVvvpCspXaYn4L547ActyNzvLRSY6cjTLe1fCKjijvwqwzvUoJy",
  "key31": "skb1nz79ZsEbkvbnTfN6CvE22JiWRkoceX4gH7fvqb4L7PmLnFBWbzrMdDqNdZDrc8WGkmxyRaB419gxK6KRWYQ",
  "key32": "46vmwmq5wXDYC65Tjf2v3thsKcajeX4ozatx2SJr1KWcXKsaRbuG28CTMjsmppSopoQ4K1raTqJSyV7hv7sPDRKw",
  "key33": "34ZT2rzYKLTFmttoKNYGi6E8tEtLyBkgvtNMRssqiJZREnPXLJBJ7HqPeSpuoV8mE3JWbdKgXbD5KSCFt8TU32Zk"
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
