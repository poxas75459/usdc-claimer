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
    "5Uub3i6NXivtJggZyxpvX1iHQE1tyq6qq7hFdw9r3Uz22y3gMtecXNM18cxbgqsUGjC5fyy2TqYjQY8wD4z5uDxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48nnQtV6bKLH16dS4thuppoWhDCbtcVoxvzwoemaVf7AoiYT9dSCprEERVnm7tcBNeuFK6ndjeCecV7CJDP3sgaM",
  "key1": "3nV9xPmHDCourMhJh3rf3isSyQviJSwDWbW4nFBHeZt45ngR2kPSbZmjZ9QidCR3o7HfLafEtkrFcNHPCfTSB1V6",
  "key2": "4eUoARw4JUMxCSwP5JoePHntvaycfuC8FHSYHe94RjUbwXTjoD8fYz7yGdXBoJWKZpGqxJ5EyvJqngJmxPMaLHY5",
  "key3": "2ywkiJb4YDTTiwFsb86dJzwCUHwDbzyzbVsR2was9QsswBtD8NKP8jkXkT7wXsCzAqRtpVt8qoofBFfF2Xxqt8us",
  "key4": "4whPpGnNuZ895a5cx6oipCtCYG1vrEcmEdJn8sRhnVBREnHFMmQkrfCzUsJm5PTwt9yuR1y4j4nxtpryNHRhNnxM",
  "key5": "sdutLRkJuiYYFT8E7egnTww9AZX4vXUTKQ9axzbzEBtaM2XC8dQoM8NfD8EricvS4AxqfN62thhQWH5xLY4S7ot",
  "key6": "2FJ3jye3j1YZ6kvBVemza32fJxFreJh73nws3LNy5GkpgL6bSfP8SUQjrJLVQxSKgvmeuREF7Ew46gArHNiTxHFq",
  "key7": "sDKCygyMpVzKTR1rYEBzsaBG74vj3Yk4WkzNZhSfQ38QJiAQAy2ML7TeDLxR4QkyZ2duKBihGFHbDSkqSaspmmb",
  "key8": "4x6WzCHbwACnaTwpdYYdyD3opHvQKdGoQb2tTmidDmx3DjXuRNPZ43B5W3ecao6EfRacEYfoyrYVXy7LNW6v78a2",
  "key9": "3JYQ6vFytZrATCSDRMKK61Ts1WtZ48RtDcTE6QwCyReg5xLXiT26sqGmABDmkHhGo8jQXHkXq8hzsQLcrQMZ5TJn",
  "key10": "493m5LYkRRyghP5ettSNhA6PAbgajHpLaBpVWRsSmxuQgr21dJmQFnwP1dtfcdrtx1D3ZfX8GKaEBQWenUqDqq8o",
  "key11": "4x8FMxKnRx87bwTtBaZTU4EvsBvii63VCE4roTCfag1abUHn4Bix8qfUemKf1M5sXCGu94G1QaACn3KkmnTec1pU",
  "key12": "5WS75HXpsSLWGQi3P7v4qKA8M3rR5wdLFqtBivoBTHxW6RDyJQsv3u57Un1sQUnW1Z4oJ8dTJpkNVx33kxbYJ418",
  "key13": "5xnj3Jm4HQ8kXdWKUqddtYxVXKF7gcw6NrY6Nn2MCie9iUdZVbAxxBFx6h9ZUevZaCkoiJ4wuGknMJCEW1UrBytD",
  "key14": "3DpPDxKbXy2J2atHwwNZsHFj5HvZZgCM94vR1d53M8LSYUymkKokh13ibp2TuBC5jtH4JUQRea4DCWmDjYGgssoY",
  "key15": "4qAtUfVuKPTPmaucVxbVsKrNHTqPr3D3TFu9Tj8TLz7zTnXPQz9eyQofdMgqSZBadX3VVxuvXipmaQ2WnGyh8v6c",
  "key16": "2bv6fJ6aEhjm8ZtifHKAcxZ5nn9TJfRmJ5pWfP5PJbMKLE2FgfFPRXAqXX79HeJCSnhj6DpsGdXxaU19wPWn1WcN",
  "key17": "4QYS4XjpsrDJfAF8d9yy6q5rm5ouV8skXpzk5F2MzZMNF48uqXP9K9UftfHc6BtPx7xFrWSmJnrBzJV8poGsBQwq",
  "key18": "3JBonEfbqqYnQeEaiCnXK2BJSJwWU23FNX2ycAv1Tgf5MRGAKGnD2XU2W5g1QRMKLeXoENsgCtuixgrB57iBGgLH",
  "key19": "4t9egDnNjdNeZeZWFfL6Xer2UqmUbpa9XwLvZnyxuzWAL2UngQ2xWfHtKxG1sfpMfTwYmokRbiTrHdN8dYbCjMNS",
  "key20": "5Bda7uZwxmtdZsTrcLe3ffjmzPQRiw8FfJxCaSZJppoQBSRKPSFVMp51R4sT2216SnA7HpWU4zDtVAb7sseSvb7z",
  "key21": "o82Qw9EsXgoZHyzYCaJQpiFmGjk1RVAwC3XHbXa93sm2wPf2w5HVJYB6V4M9SWQaMKR5s8F5SscpymgnWVczK3o",
  "key22": "3wH3oExJ48BnghqrVV2izrYcp8VhdgX4nwiESfWcwnHXHqJ1G8z4SR9YbDE6oQWHF8EB5UTwanLwFEjcwDVrZRja",
  "key23": "4isBa53hcstF67X61azm9G3GTujKCeQCNX3dZTx8e7RXHpTjMhwetWdHiVEM9XURAAkeaJqcBNF1YrrxWAn32nyN",
  "key24": "eQYVr32TEvTUmJc522pDM9yWq4rDrGwyVrBGfXCPESbch9hTQiF6cogc78aEkWhJarPWaUHaNxSZeqYZSQEtBp4",
  "key25": "5ZY9cnfNFJRtXYJyLSJxW9ndhjkGzeuwu1krF6mq2nJbxiVGqvbQh8ZGjcBkhVP2JsY7b3JNHsBAhq7RGBVQPqFL",
  "key26": "WtA6hbf1oW6HSmSvc4FRy3h8TRaCcLE1in7CVht6ouiNYEXb8v75VU4tCKhS4aDajXCVZeLJUxJtUbxpEAGPkTq",
  "key27": "4JDUFZSems5fBg72Ng9geYBkU8DhTQ5k3yXtCk8zvkGzHZh9kmd7apMBrabNmKZVQwvd6dEwx5SHkHa1PspYrpSd",
  "key28": "5QQbsebNHZ1TQGuXZEmkDNxLVCpJthK9rxkz7nrXNczzmGKP6Rhp2YvqBimnrZcb176DS7xwtmisiRF7EF5K4NGR",
  "key29": "4henbfu8HHkgFDdDrZYvScjLgFDmL5ZqDKdNHNPXSvZpVKALsehfFoGakXHivrXnuFc7KVBS5XAArFaxRsXuGrio",
  "key30": "iosf1tuUZwWWfw5H99e1A5yHpw34dgRKVJpd9SfNR4kNi2qbwAyzPkTXytLUGT5MoC9VoMnRekfSyWWbSsF145W",
  "key31": "3Xo8YjCoXQpA7hM9TE7fjvUUoJRxit1zZA4xo323ZKeGG5dgeVwUZzScX6VtUD27QRPQRb25cWJWRBHDzrzJVcou",
  "key32": "L1ySz143QM8ZLGhKkWFHZrt4xvPSBVTDY41zzax2mBRbSqyBUy4EanAKpacsLa4W5tyiZpt6D3KUwyVqxNRvht5",
  "key33": "eQhivNxNU2JQM5tsUbyxodHopK1wngmB7LZG5grdVDAejoQCFW3CvP12TKH2cE8brkiiBmCVSBbN2Kn67vAn6ES",
  "key34": "2fCH77QbYAupGWvvJRuaEkmSVys4PuzvRtodL7p8XJpr8PLAhcEkpvbsyK3bYmGSkvNk5ZQsZNzxqgwUWfG7usir",
  "key35": "649ZovyB4rJC4Th28aEPzctWXJ87pNgHCcgsjdMHPwUqD3m3vRfgic6tntWQKzpCVVQgFHPepsctrWtCxfPQinAr",
  "key36": "5mHsD98sELjN2ibX8fsdmNp9JDSAD4S4kwYbqPoy4FMYM5QMyV5Rws5kyh2Bw8W9Kc8h4SUit9JMLHDhP66k5dFp",
  "key37": "5CFUa6LnTqvtDNa3TL4Q9qJAudcG91urBdh9CvGtAuegMq1duMxHE2FGmuMEtUwZzGARQa8VKrDZuGNVL8zXwtwn",
  "key38": "2aaST44Q4UHWTWm3XQg46m9fHJjfDHkJvhG8KnTNJA82jQy2BwPqsWDQxCs6ND7rVuKfsrkCdNPJWSB26XrktLRk",
  "key39": "27TAnJAHAmi5R3DNm1EpzFYiXrbZm1HawkCyEZhFDVQU2nfG7zRpowUcqium1yeBAASCSZbajASRwUABBbZTJshB",
  "key40": "5BFkU2wtmjHDZpvxMHDtSmZSz9c4RdzbCMgAnVDS6q4AtLbfCjtVLvLzL3pgqZNM2D23YZSxK7J3zn3cnt8YhdsS",
  "key41": "4po9emJ3NPYm8qfMNCnWQZz9jkmj9ioMhPJ4LWGtJwCAxqvoiQAT8DqKPf9b9hBHoXGU8Y178EtR1pbJZKonUc5b",
  "key42": "3tCRrTJwdAHTUCZa1kYKWXVa1JDgieNuJLc8cLR1DbTABVXmTLcuShFEGbEZf8TcY5ikg4ZnbQ6ftH7Sz1gSXfNn",
  "key43": "QSsrfk4JxFTafho6temcEv7E5bgf8BkhDoAuRaeopoPbZ9zMWW5QtFqZjmfA4C8YpCC4Lm6X2nkFcppteRaQq5P",
  "key44": "7SnrLsKds2wbnsUh6aUiquYCX7GfA78bpBRcraTjqQfYHGgpdS8uL7Z2uucm6ST9zzfyVwDp2tJbvVuXoCpsjM6",
  "key45": "67QYYBXRFypjCdwb3hM3dKrCVyuAF5TNiN6boo8TE5XKiSTHpygs1iXQKbcdqsR8zZ5ukv2yoohvtzxFah6ZcXZe",
  "key46": "4a6h3jUzPxtHWZUhGMHy16zD5MGuqSNnjH9iNDFtaDWXnXJqbc2vFjP46jtkicAkH3uD4NW4RwzuLenSxEC13Nvw",
  "key47": "2GJx8H9bCV6inAef1Sc3bNy8vrBPZhMaNbvMoCFovGTH8WSnbxnr6yR1C3m1uuwrTTvCn5RgWndzMRKQAd6SDCfk",
  "key48": "3z5MFdPv2GoyWyGcxLcMqPd53X8gbHQnyVifSwDieyVbEouHSCCuQ7EZyFaJjy448UU9QcDPt4KdTRFjTsD3qWtE"
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
