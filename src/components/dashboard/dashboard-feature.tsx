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
    "qVBCSqYWdRu2JftUxAsd3oT1LyHBSM24MPgJGzg8LKxAwARtwU26o17xfGgW5pPn6aModESsqDmiFq117Kh4KZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AuHpEgWVYQeULuBneh1oMLonJC58qA41rXGnqLNsWhiDsXZL4uejMuy5QsWTqejrRHQexWxayxuptTDHLZmrxnc",
  "key1": "bGqBxG8xfeNiVtA1qMpEVwe2nZXDo3bmkhoSsFA5GBRZZ45qoFfckJXk4tJ2TifZygk3mwQyFjfRTSsuUG6hGYT",
  "key2": "DTA6UmDRWuNg7HtNC5hEsqk8MBr9or7VzuRMuskLhGXW5U7aMQnGb6u6PWiu6b52BceJRZKQpHWgc85FQEhdptq",
  "key3": "1KbpvbAvhSsC2uS4jo883k9JnUnaDpgCFoqPF8fz5ovJYm5Ej8UybBY9khnpGQrQiqEEmEK1fc7PJSGMhwfG3if",
  "key4": "3aBGNK2rMB2YHw9YoeVB4iTiRs7fma9raDXiJvAJe3tiRi2UxTLC2UZs2GQ6bESXG31PZmTB8qbLd3ELftRoWPze",
  "key5": "4rDkgwhpGoo4RRojpApHSqffNbejJCNSEYYHDw5FE3AApMAr8dFMdDfV5bZ18uC3fjy6iJ3nrLUxHztuQXbuarKv",
  "key6": "4CN1CujQy1GqBud3rDhwsCaxM7EkyAU3zeSQPwvo8Y4otqKDFLozCQ4Bx3x4fDcj1QqhKRvmukUxN8U3rdQjdrYC",
  "key7": "28bgfwofa1S2joZMEg5bqantVsJnrEPEd7cmQnGLbD2PCaLyg5BXn8GaQkPriU1sLVB9abHyp5qjL6yCgzaPiwdR",
  "key8": "3wy2UZUwxKfZxEpPHLYYUabvxuDMpxZSrJsA3zTUztveqwmpLxHvKW1fWnVm5vHQnnNXg3hZKiJTCX9mfFosT1Ar",
  "key9": "2xm2pnW75kHswJFu8mF7gdPVRxKimqbwckJ4CWVvFixVoUPr5JW2LiZ6tz4AcEgfVDmRgwKVDtbJmXRPetCKMmrx",
  "key10": "4Qo7619bxYv3gKSJsGUHXLS2m3nRAM8JTUoqmDWXWxPjDnL45v7VK4dAVJkodEn32cManWjGAtj7EfqCbk2qWxLs",
  "key11": "2cxGDiCJrFtgamMXmqWXm4LvPfaj1TXeRftvNUKFzAhtMnhwWKNLbWR7FnhFZPhfSUMxPNK56MxX8yV1Pp6KfVZj",
  "key12": "4K73rwDte1yDWtuv96fPmCNaPfg9MksFWAFohTGGZiHSTKpKVb9C4gWU8ciZfqiWNKjwEcHDTsU8M3cUZwc5RxCa",
  "key13": "3ysudfER9RKQTduatkdP9prRY1YeCvMQ2Co3RGm6PDsFCcGRfvSfvQEjdsF4JXFw2ocMs3yxVaRsmbZ7XipS4EYU",
  "key14": "4HYfxA8FZnt2aeboRmDEgLpS63xzLVzZuQQjj53Nm7UUenQfvugJvx1QeyyJ8ygyDqQzUhkAcyvJmojqrPhfa3o5",
  "key15": "2EH6SmY23iCZw565gxL9C4bbvz9SFs3NUkuTjvBQQa5KKu2Xgd9dhnfwRRX5JrKwyPH6NMN44QPykmApWeLVenQv",
  "key16": "46N5h5quWHpCQz1imRhr72hiqnkrGydaMMoZARf67KCFYNWdT6kmpWQYqM33w8TmC7yPvYfoaChUafa68Dxrnah",
  "key17": "47tM64fwRtbnCmjoSv2nrK2yntHxpq4BajY5z1XywZCnJ5CDE7aTuBeT1bnt6C6L7BNgYqs5BetT3Nw1ND7BFh5t",
  "key18": "27M8ZNVrRNaXdY3E9hRMHxDoUheGpmSBQJhSr5LLAcYngozwtyTGE7cykBXy9JX1kYfVW5H3aYZbj3giYTM77WQ5",
  "key19": "617DyMcAoDHBNY2HnSqtxtSbzJn8bLz4YdXkTrD2pSdQAHTP9KTaYTqU3SphjUrLxnWssjfr3i3GrxqPuXcpDWaF",
  "key20": "56DUk1QrFbTLUPz1FNgACz8NMf9YNAwNpi9dPPhtohaCtTgQmJrBgAUopqjCF8FuZ4uHCfhzFXk4XZQEciyZ35x1",
  "key21": "2PH5kZ46MMjCRSPTVA9frwFjsPWu8pg5UEZ7ez82ucVPDxdCad2r6Pb3krNusG4V8zx1dgcEp4d8ZrGtBZS5zSg8",
  "key22": "3w4orYEGkmrnbQy6pMW6yu5Ji4FMVjBWfChHRC7Tc1NnJMM182RDWQX1xBoEyhxn44qrEB11VCkiZgJLMHLykbvz",
  "key23": "3LJPcDw8XtMNsi7SzFiaMiAZgreNxt83J74rW3TQhkRJmHGZWXYUV5jAdeFQrnJjvo37rrDLv2TdDxbo1mZYenTj",
  "key24": "2Bs3PjqHPG95ikYoDXUXuicxCh6bxBibPnvRtEKK9UQBrDdf1NmgXaCjuS2nx6D5YZXumyHVazCbduYME4U8pmgt",
  "key25": "22A3qM741VUFuYiHmxkitGw7mUea9bmpYsYETDshfZkuVtqRU1kC3FTMGRDf8SGXC7sBAZ4KJp6eaeVxmdYzMwQ1",
  "key26": "5Cd2SGosqhmuKjYfdk3NS4GchseNn2u9fdwZSmSRkZz93t3856KEnmStGqdqbPyzYMj6KXWn8a5TWykc71TU38nD",
  "key27": "4KdE2AoeQSTgFgJFfTYH6V9Xv8gCdW2AmkZK66SLy7HH45efAJY3DfUgSjvzDd3t1MMvtH8CU8P4Mc9zxrVk1xxR",
  "key28": "522EpxTbWcufshePGuWGs9Lfp265KQuihjfnHty67TcQGuqBE48qGB4xUAeWjGATVpmmcQrk6zAtw1LNjQGYDU5e",
  "key29": "2YEHguq1eFD5ogUydjHXteengTqkK4V3QehGnwi336dqYA7t43FbV22ZSc6dXFjx6FxYdp5SaRHvHUG4QuSP8NrV",
  "key30": "fkjRE3NVrCxCxrvn9SaMoDP7XL5yTzP6seehADUVWRa9d6rj1p88KPviUjQC17cTtMLi8oGkVzyaSmGtGZniVuK",
  "key31": "5abeKK2CHVvoQydwGW3JAMRWHUt1vfpyDZDrQgB6hA1UE3q2XFnjks9CFcMZnQ9wv7bS1WFQ3skhttt1xW4s8yHg",
  "key32": "2KEV29MyNJqTABqjDYiJrzgZaUqL4E2ARgmghAob2d4ZLqaZU8PknW8BAcXVWH5XJVf8x323AaBLJr4EN7p9B4sv",
  "key33": "ubSuwNDpjgzLBPvxKoCQEkEDKbxxBVJ23tA1Qb8LD4tLoPmrfRNMnkecjA5qFygU3Bw7vJKqg11oqN5jx1goywn",
  "key34": "3jRKN13vbFMVJfEgaiWtQqm3Qd9cxHSiH5RsMaLATTQJ26D3j7tuvhGCwowefmxbqqE5n8spuSY6uMpSRSZeFfL2",
  "key35": "2FoCaHzsdrmenW9EjKRdYANGsD3TghGBKnpnTN8ARZsJN49aRWHLb9fohBCPVVGcC2whnFFL3q2c562Wnfrd41mR",
  "key36": "3AheZrE7LQCtEpgNL7WRTSNAnrtTJafouNZDCyRtLAsFVk1pNdh2rfWkXjG86ofXJMScRQMaAXK6foAWD68uEvav",
  "key37": "4RdQ96j9Fx8hkt74SKFKmQKpWnAKrwjBK8cjoPVzgrNhWrbe99TJzyNWwT4z9wiqCeMkaFFyNz7zDSgDF8wJqVN",
  "key38": "5EeSkaGWi49GvBDfNzKUWTYyvo4Raz77vUkn7t8dBX98UyGUCf6hbNrsgZ9e2Vw75CTUq2rKyBHjaTkNydbxzEiw",
  "key39": "2MVYUNs3mT4UQnCNC1p35q1j7NNMNXadZVuBhNqLMkhyVp4D5HwfiPckKkXWXV3BxXvtxfZuZiGSbh54fXPNRAfK",
  "key40": "3kPTm4EVjUbtwVsqY1J83nLp167Aniy2UbLikTDbb21edFAgd6d5WchNZWjx9crt6hWThTPuVx8p2gmGszPe1Xzh",
  "key41": "E6G32JHcRDAD4gFhAPNDBhSrCb7AnUC52eTLKxcWGs3fixVDikTbVprdVBaj39WqU5StwuKDKwqSkvMUbrqun4P",
  "key42": "5sheep9CsMMwjqq5hhrSDyUWd78U7rYy2jHRakcFjYNJJv6pynZMeyTxFzUxXcMWxuCWYAmC2uVKxii3wWvZDt9s"
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
