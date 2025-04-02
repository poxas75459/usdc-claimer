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
    "5ZYP4VwhHNe1cD9gLzkCn3wwNYrbjcsVdrayuUpGr6srMTwbq7EWRDLNkqxxuJ9TmiaojBd9uCqJB7vWPkc8WeAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nq2KDQPpfwnAZCcti1QT9v9uTEMEqeRQeiGKLiC7VDxkFTQxRFRmydHdmaL69sNvQgdFxJtGVDxRyHbQvaGebfR",
  "key1": "37RnrPwXAKPjhEfho4LVuvWT8eXZCNDbsaEbNMjtZiHh7vh2bTUGqA14w5MQVoHFyrJwXDH91yWKUH282BBHNVMn",
  "key2": "ibABRjmNbg5kky2cGXnZWifu44zYdDmG21N8xtNm4RsWFPb4wtHDhfZ1wVoBNCCDRqCZM7oe54Q5fsherhNmpRj",
  "key3": "5DwH9oqHNZQGPJ6vxHvYvtZu9R8zDJ6nXCw1FSKDhiis8ut7U6TZbPwKjjTAybEATXjn2zEKsRnXXoZsMjMv2WmS",
  "key4": "HyJKCJ91pnwBscv5qUjC8p9hFgTQXNSHfGKEaiWCVh1XbLifRXWSutQpqFXRw7Mekveouu13jpnovYFEiLyK2Y8",
  "key5": "2UoFKKYyBMZ8Mwr5GVtisvozcYr21QWhmSiCpxxRfT1oEAHnQQBopirAqVSRPNTh1KLcpLd43prswXLUW24qMUWH",
  "key6": "2uTHmdHC3BQL1fgqWyXiPLWrmiMZARZQM9ChH6EJ3iVD4xJ4Kh2tvTg4PP6scovwi7WhzVkPoSmkgw97jmghogQL",
  "key7": "4EYRWpgm8WmMtLhXMeDUjCosmsFFU4Y5wTWFJdzNmANbQrh9W81MgKcLVv6A9jPCVeqaGBqVvAjALpzxd3wktWve",
  "key8": "CYpWC13FXqffWSMDbafQikSaF4e7So3i9o7s8nqRK74MoYYBTGS5Ym8PeXtC8PTt6m3MmgqZg6u4HGsmKzkKwkC",
  "key9": "3F8NNBxwqhWutMGqjdYSzBSYh1jQeDiP4Y788E3UbemdpmUeAYHDA6YPtPRyXtZmXmqBYo59mZaL71eNwphubAh3",
  "key10": "J2dCzm8CQbcYZzziyMDzQGY5sqdjn8U8XaCUMoQGY1ypV9ZtPXcfYanE4j44vqCineLYXprPbSgFCxySRBpv3qt",
  "key11": "2swHcZKoEKm32sKsYbKUY3WTyrG7bkVHHry6GV82QePsZ5kunjY6WtsaBNeSTnrtnhTHhrmZKxbcJ84HN7ZvXg6B",
  "key12": "5ErhjBjca4GFRvAY5hS78kmhGuraGGfDfs7D9g6gz6QjQ23qJaZLPobdREizm1Tq2dgVrLaQYqBPEHsxY17LtGy9",
  "key13": "4qTtfNRa7pPtBXXukkjo6AejBB3KNYwhq1qHUYDAXnrDoQUf3uGT7d1jewZBEHgsdsBLBE4KpP7gGsSGKYcQr9FN",
  "key14": "2BdovJ6Zb3uVwrSuwNqJkJ7JhSqarrsmLsSsobtYJtBUjQzZccANKmwDyP1Cj7nmhrYxNpKPXsuEZ6RXwris91F3",
  "key15": "3jSU4GNpDWJGXwGKk8mbU75Q4wLvXQteKRPMKVhkrvYszaX6eshsxE9CWXKS1QxJJxL7RDRawYTEJ4YaK1vnZ8jo",
  "key16": "5eh8Zs5tdgg2W4GkGA1kcWf9F5gRxgQnTkoJ64p7WjCNjFRotk5mDKQwC268QCRqXjMqwP2Lm4ScJpGnFRFKq6mm",
  "key17": "5kyTpw9ehpYPmpZrTCNr4QhAPRemrkKXtt6SE1W8k47dR34s8zNZxAe9BLxv322ibvbFiup3TEofuK73JsTvWfRH",
  "key18": "zVt4u7Rc3ZVxfokboWia4gGryxKaJgVjLHUXTB6f64Rw2vRxanfLKApVYXtn1Lg4mLCgjCacREEsZvKWvPwJoEi",
  "key19": "2dZzHNumW7WBfTpkwZJhQr7Nqnd7uYkKuegqmXEEtckcExXVK61ZDqfaBRMA9syWWzpsM5WqQqr3fFy1DYQMQPUw",
  "key20": "63Fq5UG8f2NZfVRJ2Y6tXgBAPqz64rP9mdoDwMVUzHPxqVPHvVA4t5nbXrUmk1WogMBdJegcTyKLSLo9ULXNs37g",
  "key21": "2JeA1E41RtpF26bJ2A9tCN3qhVvFVeTobpdEaNwVXRTZbmQiK8g6a9k71EW7BjzmRS4fb3ZaMGDvttbfdzLrZ72N",
  "key22": "3fETk366aLFPV5daVBUMp2eR2ocJE1kBvBzMtMVraxLuLhn27yu4XuCDna1LJP1cfmigPzBUpBB9xxAV1jZyKnMq",
  "key23": "3AWrgDd4Jda14U2zCdXnxVCihTpw2Cq8cWAqj4H3S1gq774BkUpLcDTeo1G9J3yKbKxEu5kGcKwDXQvhYLKzFKKR",
  "key24": "3sdZeYKbnMGL3oNTizuP7tQ1wFpz8P1axacMcXsEEyB6gnNbVD6nHk8CZfw3JJNBYtUKHYyLdQnwY91R4BDBgm4h",
  "key25": "5ph4T89uPPsvBwpCiLJGFSk14CagUdUXdcGMQ3HuDzy6WEPowQ6YnSJczaWi4EBwQDEVmctmAQe8sNaUvuaPcKrZ",
  "key26": "249cipWA7eZ96tpddYumauERtbs74PFPiXWLBjoyhLkis3GUB2zoCaNfmxPYPXbdZcdozCW8PDjjR2iHWtTAchcP",
  "key27": "DbkoU8GYKdvtN6GU6PV7rdqvxtxnYBQsed3ctzEAmbfNDaGKHjhdN8CbjbTXWBiQyktmtVGUHFZAwrrRGV1MAwe",
  "key28": "4wkKS5VQUWpqsm9hYXnFbtgXqjXGAizFnGeFps2sHMLeZtnMh6eNAoAQ2HBLppw8vxBSSXwfgWF6LYQcNJw12iYL",
  "key29": "488X2Kf4HekAXSB8RFeWnBakw9mPUE46h2QgNHX7G2Uyp6cA172tLS2qYY1sffp8oGStJjLen1WA2VbrUJka6w8w",
  "key30": "3K96hju8Z6yU8vN2PJdcDCRUhpWp2sLe3K6Q8G1piqKA2Um5fEEmRpgX1Bhgwi3hFfHBWzNV4Bak5APaehEtLA7A",
  "key31": "2eT5CFJ29LJ1MGyJ7StY8UeM7KmSncMPf7ZNM2UU8gKVNSv7uwCwu1JiiUNkehCntNrPZXKLm2ehYnqLEb8o3ezz",
  "key32": "3poGzaiu1SyUBJiLoD1EJWrA9W4RicLkV57RKvK6rCF4wLBCohNkp7NZQQPYGpCt1Bx6duWG4KSWLZ66DiewuLJE",
  "key33": "37DwRpMkNBMqWVQT9MKLbRuPGVC1WjiDykowDznPGM9mLgdus7HfJYkDSEUum7x1ttuT7fwP6DrngweLvQeuD6J4",
  "key34": "22gcEuVLeVgFv7eGngXsX2QkA47LJ7UGdamctwA9gEw2hKntxZVkFmW9MpXXbtkBMdB3ZDEZAKdKNPrNdygKWjEu",
  "key35": "Fkat5arg41vLgFGsp13mcrUYm3bPcAE332ix6qBjF3ypesNnF9LgKRoLXj8m1GkMtBtkhhcDVufFrNGMFeGd7rX"
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
