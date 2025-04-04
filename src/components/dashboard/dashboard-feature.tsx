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
    "2aBis57byMnjsjtYm1C5TJccZLhEYwx9jiXsr2pimZSFq36ZKQQYbYgy8VMVdJoucHQRxQCiXE2DbiDh8cSHKKgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21BG4Bbf2VqwXpJjLKGJBzSB4njzzpyMWwXf3RU3qSs3y5vHo2nSCFR6dpwsgXJU7x4GcgDaZRebuDmvVUBGqMcF",
  "key1": "3LhNB84dixKG74VKc6pCg1wVirA52Sq8nzaFJkeTUbpLm9w2jrpGZUqnHDRNP8Pb4mumDS8q4BxfCMRhd7bQto9k",
  "key2": "fGF6W78HRwEdXkWdnSvz82c7SBXCmtktgwi4EFxFcuGAHJf7ybVMFwYBfhMvnxwZSjZbsv6BJ9LuGBvy19Hdy1s",
  "key3": "FV6oSf8iao6ZG2zCmzwY9jAvLFYhpR5na26VCv4TDkps8K1Mky2quSgJYaGKk3VJ67fMSxUorAHBnw2MwBEZieh",
  "key4": "WpR7Y79sEA9SNp2oqx5SxUkA7LFu1EUyRVAWG4pfqhtNPFrZ8SzXHU2sTBrJg6tZkGzUt2gY8khrUmxwPngu27U",
  "key5": "xPAhb9BRXGQ8tAHBKGtZh9weCmP9nDiuejGSwHi22sZQ85qHT8MtqZ59UXdPsTW2gcJGsx386c1dvrELAkukpQM",
  "key6": "3vvMSrP85vLkRaTJRbvwSRrJmLZZ4cQXx5yNyy9wPYNtCKMEm1j5ruSi3zfvonPeanVP8HcCrRCdoijDfpixWcBr",
  "key7": "3AX1cB32vsTPAgJcUkXujqizMhJWRbGtaKSGMdutwhmYtYb1GuK4oRPWWiFoaTn1hTnU7hDzhcPAtX6eZGMFahb8",
  "key8": "5h3nBFAHcBMQgrj4111PHFCxqXQqp5x2Eao4k5PHLgQfGTrz7bkMqDryZjvQ2o1aJ8HEskmuBJ8SuM1jW2bY29w4",
  "key9": "5t23R8v91rPmvwjfimhkR7ufeUCB11YCBWjFqDijtj7yMNCdGy6pF11BMSRDU3kJUb9fgPm2tsiwTTBz5LdSFt67",
  "key10": "3uibUfEr7EXJMP9gD1cWy8iNJRf8A1BsCavckEZccWJC9JV2dPu85CAERbqqxLWqBjwT2dZPqdTw1s69Z1Dtfe5P",
  "key11": "28mHW4gCzwiz7oCC3sJwzGNCNXQM8EA1XM9hTMsiib3gP54wEAJ9EDM4KpaxXjWQMGDEeaAXLHmTgjeCxJ1pzoNX",
  "key12": "8KPE3MhKEnxSJ4gEzLh6y6z7jUf2QfKA7Pmrkf4SgYcfJsuDdjd4AnTwzSBPbj5674g51peMEX2gsfPsVXtKoTE",
  "key13": "3ZCJuVMhjQ6A2iFpHpanLr6B89qTWmeCuEjF4uNyC5miBENF26zx9THte5pGpbquiSrNozjyEVsdkWz8yPHpP7fk",
  "key14": "4ip1dgyGoLY9NbwDoXcjL2D7LPb76TXMHygKJ3kUYZgHH7RSjwKg6zqPEcuPboFvTVaxXgimRTeoQL8GH5nM8xf2",
  "key15": "3sCmnAYkbGAuBmg6Qfvm5Lm6prRuKspz8GcoBvKmHaBhFpmzZ3sdgEY7PBbEywPXnTJQziwp1tdQSJqp3aMq6wCy",
  "key16": "1baU2jcd5kDC4i98wLtjwnyxVAPD28RarGDaDAobFLGeQnBfLSBWv7EApeX6i1PGcDcpLZmp2zhbex1wkB1DwN5",
  "key17": "Yf9QhD48o99QZFxJgFP4rv6ijCWJ1k1J2VPqhi4eB8SeagoNhJ7dz6m2yXWqYn14yvVpGZhCRqBydJN51y8mq3Q",
  "key18": "2z4i1vbeMc1dn5gVS6itSj5as1RjoPiyvSNdatW9WceZTbq3cU4ycKLXesGBNcD7dB3rCmzajtict8CEyHwGWWAB",
  "key19": "jyNt6gFdNJpKGktD9mdCyDJjdFu8x6hPqnNsxwt55yFhuL28Nrs749jkYSr9RMyKmDygf3o8ujvyFmDGoJnRkeR",
  "key20": "3kN9g75StvQpneVXNfjGce711VvjUY8hSonPHWX4NVYDuPyGp7HtzsFPi1ivwYhm1RNbyZRAgVFyCJ8spcoNAoKg",
  "key21": "29ZAXU4Rcsa6YFXURrKif9EfaZxSBhsf4VZ1RvzZ6KPh1wRcEsQiX6RhXsmdfLCdswJjm3QCJSGGnQ9zb6rw1KVX",
  "key22": "4p2ePHCZJF2VpqZmordek23NRcRAL2P5XarPW7WfyWtkyixUXta5UkDjqu8jAxymeBrfsxrPbyidFcQ5oM5aXhdM",
  "key23": "ZBuzWvBuqVYEecvXcNZrwUG77AG6cJGZYoABHpYPkpX7PkRDZwgCzPRQJs2BooM6nttMizQBRvoUGmyT9HjhQaG",
  "key24": "2KZ6DsukD766Eco8BipsB625rw7zocvLc3ceZeTosXrkSBDzyokwqT1emg1MfpjsaGoqUq8axgKnpq1rh2RRXJjL",
  "key25": "5yuGR6kjAKqaSNTcwmQry6Y4ptfZGNQzv4JzK4EBjXQH8BHfvtrDnYgsY7H5i7RQ2rJVMTMMz9BzgJH6PuUWeWZh",
  "key26": "3WyjZ2VcWKafAM7VNPfu3kd5nyZq7skUB7ozmJWuusKcQbx73EEXs8BrfzkXgcG5oo9LxtYRbs6TJAooEeDACGan",
  "key27": "5fDE6nGqTKAd7jfcjxLnC7dRgnuaN9hokzJfEWoDggUC8eYvEgyotdDr6eAoqdDRq7Kgi5cZyxcsLdHZjpvdc65m",
  "key28": "4itB6KrmwceFkVwCSyQKrMRs5HGBPZ7TMYHZi1tWyVDjTN688SQJF1cttX5vVMjizs7vmZUowanorzuPHZsrENb",
  "key29": "5uwUFKtQhz6VuQ495ED2uKYTosc5Q9YfHimDQQuHTfxQFERgNBgmYc8FYiQjBzCo1iQeSWN381knMvypJL3TTNrQ",
  "key30": "a5M6pWtErWDZ5hDhqheA4cARxttXzPyJbkubq2kko5qZSF2u55BQnLvDrLSrDdULtzkVs5fRPknwNq4b9YD6BuM",
  "key31": "2nKHwSe5gxrwiV8fZMfXSf7CYgSr6DcLMh3pmhjNsh527Qrc5kDbxryANZoVMBVEMxF1jDfx7fcwJN7npVLQ12xs",
  "key32": "2VudFnyEKWVukhALGHhUZPHnWCXY1N2TLRuuoaeFRC5HwRa6BWFaESJv6x6Rw1Ej86FWTjAWm6qmL8i8squFzGtf",
  "key33": "vemV6qQVZHpMq5XkdyteD6Xyz3so5ZY7APMMJ9j8usA5h1QknTHgJSZpzxnBFVzgFmx3T9JrZpBskHvZEaGzUXC",
  "key34": "AZ9To3NAkXaLkbtZ321gZtq5ERZP2KeZ2oN5EtjSe8sBBUpY14DJe4qpXdnrwRHxwk8XfmE8eJU8E2JjJGTqeQy",
  "key35": "31QH62ntubRcuqJdw5HEt2SVFJNoANKhLvRTivXWq9DNPsBJWZczSbcxzouF3bJh3QJ8eSdHNswYUb9x9s5b4Mz",
  "key36": "4EgA51nrbiRptscoitwcDL3Tn6fKphJugTrS83ZmaRFumZa5aAmGEwo1tJRjF7yR3VjEygC7a81ciXPBNpGteRtk",
  "key37": "4Ghy3E3vDEZAJy9kpMX2d7DPzsyEZK1SJBfNpJSoTLU3pZs6GwU7BTkwtjsnN8HSzTF5Zwd2Gs1wHg3o4GwWtoLH",
  "key38": "4GESVLiDe7SqiZNBLwXtYy27MBAk5HnFLKHfswvFhSxJLhP4bGaymSzgDgrwicU5Eeu7z6nmpQpFQtGKfdWUywwL",
  "key39": "3Q5qAATLoWUYHiV6ioaCBtAhz6Y45QwDYLozKWTGvsmbRXbwvoQLn4Yrbu7mqHkNPrXtVH9i8JJprKPiKUMtw97w",
  "key40": "4SumakFvKcsTLzcGuCuFBYQESxqoniJzAp7eLoDnoXKxJB8M6Kexo1us6BJhKyjQzpJVXKDMHw61u4DqpiC8iDTh",
  "key41": "4EKw8kpgWtC3iZcd5A73Z4j2DEgvQP1vg14iULyB6wfCKgYr2ztfaJD2xtEGPLywvPcQXNZrJ1fpeWbVce2HFPTF",
  "key42": "2jUsxQy3KqQ5HzFh4zUTCNFXqczaetTB37hBUSMND79Kosw4NNatHTho5M4xeFKb8t8EDaHL3GN6xHyNkBXyfq39",
  "key43": "4xbJNoh8netfrkGDvKtjS6bX81SD79tQWbmM5L2vfMvuN9bNCVbV61eoPGN1jMNyuQn7WyDLgqAgYQaTWzxizkVA",
  "key44": "FqGqecye8fiLZr77X6QdLgvpc2DwfQa2t1YbcZ4MXGWXaJCZk9mGTbvFaqEL8dxx5KJdbTERXyEqKUT7PUbi4n7",
  "key45": "2Bw2GAhSBZZDrCsSEssvu5bjfsJc35gHP4s5mHMKKV5M8rJCUmPbvmaRuZbuaJoztnJVhoXr3Lszt5MZFKRT4hXJ",
  "key46": "3F8TY2pifwwwjnhbHL6J3V7o11ECmm7BBUScDN8reDqKfHM9MrL8cm9n3QyPD9k9RFPetoEebF9dpdoNFdLy6eeN",
  "key47": "UgG92Q28b1PPBaPyZssEEiw64RZGLFvFtJQdYjsC2RzDf5kasTcWN24YYvRMcqsdQyBdoGbR5Hax2hF5ZKpnEkw",
  "key48": "5eLLH3FLB9UfZJwKrc21RWJc98guw5SZQs3qS1SG9KVJHFSvBW1kgtmFvgER9hFgFeTrfevh3iNEDLoj5gayiE6Y"
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
