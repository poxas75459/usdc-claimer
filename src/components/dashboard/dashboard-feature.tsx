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
    "41k16wCCYbZ3upYG311xfiVGUcioJ4rr6ykvkQbKC2cWyX8Wj5JQsHukzHhW5RYCTui8mY8Qy7yMaaAL1cpRVjhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vViEVeqwAiaLtEnqnTMNZ9poCpMVxf7PLDd3bhmTxsAHK85rqDNqzexXqs9cpfSCTdJkLsa4zdTsXLnBix1wcXE",
  "key1": "5HQzViVAkdKsPyRrHZHqnfZusD3SsjHn9whwvQ2Vuhyeis91Ca5jNwDUuC3EhJkFrT8mbYNfSYNf1SGicjrDD2sW",
  "key2": "47GdbZyJ7Xh4vi3DFp4ea2WkeuNaxQiXBNoA7zbnMWZ9JnhnTAaJR8dwceeharXy3chWgVrQyvG8vyaMQzpqUSSg",
  "key3": "4Z2oHNFM8LHmcxEzTeuaBWTxSCDYdR6j1p3nXBVZ82iQ4uJaC4rNC7WAaJupqFigm3AGK2o9JSgpkoWDePMUYMZe",
  "key4": "51DVKXnv2j9153RajXFvvQEXEbfevPNkue6PqdapNGp6b7Uu8PwM4JDhxVS2A7pMZDXpSmPECZA3cQCpSY5kYXFG",
  "key5": "GtXiiWBJhddjnXFiZ21hYXLvDqG8quSS9CdKgnpJ5Htiz3SzfPyA2sBzCSRmBYvyEZow56W7QeokkEXV7M5CxDA",
  "key6": "5PcJvaWKoC8NUHtW2NwNCz1L1ah1XJM7dtyopi7PzXAn8uPKbBKFfrb4BrzqKhZp1j3NEaXexKwiyZ2mr1ERGZop",
  "key7": "3FXapnrmQtjjXUMKux2gf6CoYeb5mPQREtzEHHSBif1k6jFaWNeEgM5Z8UCjq4kdZiAQAMJPgUawPtZW36CcCDJu",
  "key8": "5jv6JupFwEHBtZUN4a1Tyd4fjuqHTVfv3irnHSLgSvXEo4nEcGkm2rtqQJy2fHrMGsoXDBXp1bLPuY3ucLasWg1m",
  "key9": "4sCDpa7bfq7q3QiSfaH7YiduZpdNXggBQMyRAHbDqoqv8BaBFtdjSF2JMSJpFbLmcb4dBP9PR3xSL5jnsTXJmve3",
  "key10": "3VuDVTHkzxkGVabK6qgm7WLeWcz8CSg7zuma8ApbmAkvesNkV7MfaKvYJHn3z7G4njb1Dy7tMPKsFqTGNRz7nMAa",
  "key11": "rTRVW73vKcw9UPVMpZWZvZCTUcji9FtBjA7R5c3UaRQe7ierof9BwpRpt6oC7uRh2oBPboBwiueEkQButpKVgYN",
  "key12": "4kJhTv8TVYif2RXpazEjJCWitMFTwXsS1yrnQ2wxEhtmtWVGxdbbEb8uQLiopRthHGWF5necVsk77anDsFXt3pbh",
  "key13": "3Wnvwtd2RbKs42k1XxRx4ePYAo1VnqytfGmg2F3Gb5DnsoWHunLJ4zoWxwimr3xFjGaZ7wWtbvdMBrqt3vtPLyyw",
  "key14": "2KKnGo4tp9AoDw4fK3pGvGHQg14RVsFdXxdZ6dYVFD1nD5wQg4WWr76fXaMLE7MQdAxGvmb8sAF2ZYtzE4XRUnJE",
  "key15": "5Hct4kYAhyXi3c4YFhkS6Zo6agTgMLJXVRaxTVKfgrw1iKG3LqNxpv12Rr2UZL6KhWTjQmDKPaD21dZeG8KsLsWY",
  "key16": "4y6YnnMruFp7kFbWP9qha6nAAx2R7ERvVDD7uA7vWZoze8p5xkCPpnnXrLcxgS6d9SYBLPsURAWtwNqrMKE8UjU2",
  "key17": "4bLs4yPsfZr5iwA43a49Q7VGsmje4hp5jDvZx6ZxJbdBz3WAFKsNq6XQUykMSgGwyF7dN348cxSYfBMSVMVCd6QD",
  "key18": "63KWewyf85fXN7U5wR2xSKXhj1dCheuqFetssqAjj7L9W5UE9XDtSBZjsUp12whga5BTLSUNmnMGpzaQErdLtYcY",
  "key19": "5fNj7JA8oqZfnvNyLMktsJYM7KNa2Xb7GLAZrLFX3asGfhfmXoVyUSH4x6S688ZscNkXCM2ZQz6RQfWDFyMSvRhg",
  "key20": "giYA8g7bBEBui1uuNVJbTRbgyVVGSzw8WZDPHR6JXniZGXaApsE9Rydgcpgkfvnx2N6PsVYtfVrYfzBdH6DKh49",
  "key21": "3rF6RPedBNCxna4dbMkFZzhfc6QbtLHEhVm5HJ2GcEhfVwQ8SGev1sgqzEaeW6VstQSBgTnnj3B5jWd13VVfriQS",
  "key22": "4Scde5hHFUuj4oeaUdN7i25vgARHWs7ewUuLafgs4WRJrR1r6c1v3g2fo1owQyRMGMGn2mpLDwMxZgQLizBtFtQB",
  "key23": "3Z3CbJVMbtQHqvpVmiXF4byeRn7hDsjgD35vYfNRfTkYumfyJsD5HDHYbX1oVGg6MQJUnefinPorBe68DW2p6UtQ",
  "key24": "21uKphsd3GR7ZucL7mQRkBBxYfehkW3NZ18sh39uKFLkb7wumGW9snsFqREKXvsxw8FumqrXvu8EW6JYRWTQB2BF",
  "key25": "5gMubADfC6MUCYZxy4CBQFotRRriZ9grCipU7oVTP6v4ZBhNfUua1Ejba93akdc8t2aNA9k6s7E4vy4LUXKn7ivs",
  "key26": "4qEcR3bHLNKxdp6MZo39rkPG51nA3HgZG6j1LUJHBLBQXRQ3eqctNEJmDp9MfXkEFhPxdhsSqUhfnouKiYEmPyvn",
  "key27": "2K64wnHf2cZhUVMPTcKMWHFXzvuzcNESPhAmYopRpm1A8Xzatb9PeDAMFfW5D4xXRfFgKkPufSbaHNRXTqfQE5wA",
  "key28": "4QBHtaEY9gD4eA3TuiGSgMrN22L1Z5AbmjdfNAg3DKJygUXrRrGoTifeQiQuJsi8F1gh2UF8Xmz7jPWzCij53hPn",
  "key29": "5VJB2qy6gS1WwJvgbv649eiCY7ywR1o4nyyBtJ7vD2yimVVGJffeWM4ppWNUnKRwHNeDdfR84nPUEJWTUbBhc9dr",
  "key30": "5GZTLkc1bV9qAbctahjv76KTqdYntojhuQU9ZANMBosWytMf5sctTo5XytCvTpojFJiroos1EzY8iVsfPGk7bCbD",
  "key31": "3uFcZDtUcWhoPZCf4EBTKXjTrg6meCo5rK1D5jEAALs5chDHND1g2JNYx8YwVi3waXagGLvaPWTEoSpxGtW6U8hB",
  "key32": "53ptmXkqMF9vrkRB23zKLr8jU1RXxFuX74J4pzA9AGyvDmJuSoGavdebns5RrZemWeNJUdQhqQSGrmUwESDk4tiw",
  "key33": "5keYZhTVvUTeBTeT1J6JdZ38JP9yjE66kKzvUVhAo2xumMBfaT9WAQYPtHMZwUomREwFmGyYxp8QrwRXGwUG8WUs"
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
