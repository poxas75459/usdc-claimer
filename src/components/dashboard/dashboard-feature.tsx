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
    "5QfSagFGaLYLFNYnFYaa5hgLm9KbWKShm7yL8gtJVbw1dYjQKT4sjARtcPN44kAs9UMCAMETR8rMc3DFykkfhnHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PV8bwWGg3jAUg4EU4yZXSZj2WLUbgrfFh8GzfTbGqGNeS4hoeSZFkk2EEAspAcs6brYX39TUxZy37vFDTsFMSuG",
  "key1": "5uZzboWag6Mz4JpwzcmgMkqQLFXdTpJrPLzK79u2WzBnyheDZ2PRj32FPNEAhyiBYsZXjgmUNTP5otUksKWQRAN4",
  "key2": "5rKt5dQPRUcoLrKiQbhxjdMNsPHH5G1JeKgJQ6rYwbX7zrxJuHmxnG2DCjbMwALTLEA1mPWcfvKDJViMQTfnExWm",
  "key3": "43bYRsZNm9otrESC2yb4CNSXG6FeJxLvwjHQergxbSBVwCLgv9pf65kDAi2poQ2Av81r892bfMyBsN923XmreYMu",
  "key4": "5XMMZ9FmoTMwZXvPqeBdz7AynB7yVD7ozaiMiutGwPjYtPGsJitgpwRgRRDpnwjioFj5rcwhnHNC55LnArLz1pkN",
  "key5": "52SKRbuXtZ9jTBofFrHKNPUM2VchVHst2SXx2zp7911fLwpQf7XZjQmbTUPWRxeRpz31RyHxge89N7rBLh7kiUAg",
  "key6": "zuxSaTQqrUk7Tf8zwbgr1i6hXtSRyWk6gimS85Z3Yh1kk61mzeBCk2GvC25CqRqZq8XN6aeBQ3BQCsZf4AnPFxi",
  "key7": "4vore3RdVwEbt374GzNTpDNR3fqjoFFhEwSJ3TcpCoP5T4mbAPFJRpLSgcPZTPURA786dsuRd7yu7LHkmmNHJGv",
  "key8": "4JMid4rHMQBrZ6TvQRoHiEq1Y9iKwTdmCWtkfd3HCrUrJRG8oCsHaxoo6ceywomHkngFnPjYkZyckKSAFGmtFoCC",
  "key9": "3sdcPLNUDgesGFE46hpggBvdnZctZM492xCF5buRSBwE3H2dmydGUjftVkEfCtkT6hmid3HuQR9mdmxJ5CR1yQT8",
  "key10": "66h1p5JwZUFiJuRyo2NojeN4GvY6ZtBAuZb38Bqg22baC5TFdfiZNHbn8gZ4wcZhWkHhuzadELFK1eMQvawxAuhL",
  "key11": "4Nt5L8m1ZP5x6XXxiG12TfP25jBposkWKr3nyFHZGf1vScmVcmsoPYiU6na7D5Cj2JN9u9TgU3kBgVDRKgSFCvBT",
  "key12": "2dr76EqmtR1L2YXmjR4i6MhCS6yUEzUJoTpyVWsaLcJeCrDFxyRNeY55EDADVgK5gPHT6GZ1xtouu1eKBoqKJ2fY",
  "key13": "4mUBYKQovZ28bTczHKaH2rvZUqQ9uFUTEDAZTEXNMdHcGMGAvj9XoerBbCJa5JFW9QX2KgJDVCCTSjKSw6Dqb7zJ",
  "key14": "2EQZvWFD9PFwZAM3hK8cS965NFiRrxcwBP2KoKXFvMKdCStK2Gtf8L8dDwJiop4xVP3Jj1ki877N3Ksg1jg9hw2S",
  "key15": "4TBrYb7CA3oUur9j9L2syGKQhM9baogxKR7UtHayPzimwkzNDLRpprxrboNQaYug1gKLBVHoTrvnRqi63qGmRaJF",
  "key16": "EyZbBkgcZGweqTJPRYiHXvdrntipii6Stj32gU4U4GFAGhYXPFkf24dhYwbJhmZu8W3eLxt4KiHsm6cF3pjGchu",
  "key17": "5erhUbR2nL3WwJ3n8A5iu4MR6Q9DwCCnPw5yDrEH5tvwhSc5w87YQV5QMukHXUPvnDLL3A7hDU69Mwa6LrAmyKU1",
  "key18": "45og3XxoGKmoUcEz3Hmje1RCLje6uYgRLhx3c8cujPZeHYo3cfvFz7vNgZMszLxe8NkhURvsThVcNmt1d3XmRoMx",
  "key19": "5VPN7oLmyiyyd2MXbBypXpWATyExA8868qqyfuQ1X3EX9NbcRt8Uz7rtHEh5qyUNgH7TkJYMZrfaKgfSzyDH2oYn",
  "key20": "2XVtgEfs5gzephe4yzpD5A6Xi2C76h9kc4N5CtfvFch22jYAkrs8aHWxP8MWavTajng9c1XuQBSEBLg3it7gYMH5",
  "key21": "jSJsuLfpnNvPJj6aWnvXb7qMmLgiy4hgWhjqoBEs9LTcgeBMUBgE4RPxhAKNM8XKcFMKfjBY8DwKjpBWSoJoUGr",
  "key22": "2vsSE3bnuwjS1BrtqbYJw1BQYqDT84DCuFKjnFpCcQ8tu6TpWhCXmVXw6eYhUCaSB1FZMW8arHAexKQKoGzgrauJ",
  "key23": "4Vq4dSp88DsYfrjNgxvEPLNatJCQYHbtfGkfZ8ziUuGcRyP7oYztD1rzSk5whZ4syNXwvaPWN79rcU4aX2T885wZ",
  "key24": "3uxBkuvNh4RKHtJZsaAB5PWJNmwpZihz7yKUhqHcqWHjXVRvS3vGisxtWLvXKBPxpCEzNappKZJvkAp82xqpddBd",
  "key25": "4x5SWNpGi8i8CB4rVJ9jdc6DdURzcp7Qku2UwtCYKx1Qu5ka78kjXqyrCJd9unQ3xm5df4ie1dHYP9DksCuQ53Qu",
  "key26": "3equLacYuTSbLpKSzr8ahTGFmyHdqpQA2b8xijq39ncaEEq4i93xC5U3vaF8omgwE3cqZ1C4ZGVmR37rqzJEJHGq",
  "key27": "qqSeF8SYy68MZzECBfZyjcbVxW9cg1y4obb3wF6yV5hDmABX9xd5KoVPFS1sfiHqRoTrMJoyyNZkhdKJuoVLAXL",
  "key28": "3X5mdaFP9NjJQpzsFdZte8RRC59uWq9Je84kPmGBamxadJVJ5MHpuHdQG8pUgk7ydG5TUdqgfdNxzVFiPbKvE57B",
  "key29": "3vPAAnMr15DVD7148pjokuN8hqhh9zmkynTNwMVUBJP3ovKx267bSmMCuc7hetCz5Wft99GGfkE5E36kYctC3gEM",
  "key30": "3pV2N2d2mKoJTuUXKr7baEY4XyK4dQvKXFU2GYJxU13nafM1hJrcGVnqVNzyWT2RLw3xDK9HDMtp4Qa5qhb6mXuX",
  "key31": "2WGZG4zkF1EtXaTNeaPF2yPNZS4BG7pkMkmbJBibkFR3p3vrqEBvFj5dkZ8hoHfRWQg28sH2BfmJ7uyewFPrHePH",
  "key32": "5iNyfCUsCJnYQWxQXt3y1crN13DBnyFBVhxHUPAGioQm2vW3936vwBAT6MrwVYmXNU5LTsYCxgPLj9cZoSJ6K2A5",
  "key33": "3jMU4qSb7vQxCDiweFpAKL89UNXrHrgphDbeGKFhZGDi5NcARZbDU8LaxeZ6xFA4Lj1G26c18fPGvKRyQDXXUnSY",
  "key34": "DJ4gAEUJRRm65m6bNeV3DkgXSqufoz1cnuJi9bbWQ3g9GKNtwM6NUX5cPFQy3BYxKPqLbdzNYmcG8epHMaY6jek",
  "key35": "Eet9vGRLEvgxpWEZnut8U4KLxphQvpTZrsGxW4DCGn5L7rqY7GnrdjJECFhe9QAuQCbEEmfPFzQSVBTJMEPJtSp",
  "key36": "9amMH1oGYYYFdnNGhsKVWxRvU6R5Qw2UXCS2EikP7fgmyFcXDprcbDtnQDJfa2N6uSuuW4YvJy2eWs2eThi3JW7",
  "key37": "2zeZT4R5cMum4duG7LEVWDfPovRjT2AVhZQ1M88XrhngnVF4Cb1No5MF3uQnJcrRRia8ap4ZxkR4Y8VmT9iEdTWB",
  "key38": "2Rvdz1RJcqghwDRTAj6XkEuLWn1fRUaBv2CatuVuu95KBPW6yBdqTpuZ8bH2fSzHH3dRweLtC1nttztzTFXVWujm",
  "key39": "4G5MFmH9rJcMzJk3Hs1rZfnxLfMLHveTToQk83pkXBXtricSstasS2s9hohDbbmXwjAAEjF11UY7BWDGSexfnkXN",
  "key40": "5vGU4nRzqwFaCLLLjGq4qUve9t9zvk2V7S2TRxxkcvguVneof4VmWD2igiFzCSawfEdLmjhibKU1sfEXWLRWzkBn",
  "key41": "2gvr3ikhw1Qj2n3naZaao8tuPxPFDkuWYtc7KPzEoTyzKDRqjDr7CWJ9ELVFN46PtawmVi3eAe4cT7tknvP13G2J",
  "key42": "5xabZXVJLtfoXq2xWpUtXeUeJVPKNi6q8J7mtTYKfqDrutjfitiUU3hDuDwz6JuJgUAXwZ7odr2gGfUqqjWTkfK3"
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
