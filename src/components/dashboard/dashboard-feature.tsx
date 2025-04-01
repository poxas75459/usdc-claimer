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
    "5nEcSnzPhWsgZ5u6TzRQyVZvPj4Tg4fFZCA7kdx82FzBb3D9hZgfXn1sqG5m2BJeUjupVMRNTrwW4uLvZ6xaur7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fpnXhBXsgHmwB4oNgHkSeF991ujzFRu64Dat2PhjvDNNs9F2r24UMYf22VVFTa8AtGw1pHGrT34tdR7SmWWkUpP",
  "key1": "269RMTxmqxXwEigwzG8jgRj9cxWwaTDqgu3VqN215ApoL1YFom9APsgTto4Jt3LkUh9xvyHYtDBTJCqMj2a2n9Ka",
  "key2": "36ieM2rsiTd4YkEcBe1Fm5FXdDJK8wKX21MeeDWo3DAgpbNNAwDMFZzN58TVtaBiFfZQFvJ92Bn3KVJiGWiHXTWS",
  "key3": "2wtgKMhtkzCRcXYY4r3ZoGd12fGjSgp1uhWQubfhPS6RWgHqX6yF4URZ9LGTsyAxx4ih8YN75CQDQFW3E4g9PcBd",
  "key4": "5fE9cAvLKbS6haHFpbajNRgCRXVySebCp4BPc6NYVPdk2WMwMtJBBxfheuyXSW2v7tJJ86w5t9Ee2SMzAbFdGeEY",
  "key5": "41noCjiMV6Ej4mJSQ94YeExiNhfWgopdqJ2N8RktQZUe4w5r73Kswew8cAXEsvhaZDHvrsp1FakkY7t3hFXkXNHB",
  "key6": "5Z5HUWbp19TBDzpzvGizDR2u6YVhCM6evD2W981efPnopSydVsoenUpD49Z1ptBKpyeMfZEXVLRrPRvTB7Eus7Je",
  "key7": "4prDRZCAbTqi7RhXiJCXaHnQ86RgLW4jzuYSYwwfCiF9rvzaYMpXSU7yNF3SZArGHzd7tCMpsGneYGNmGzgZLPti",
  "key8": "5nzaxgfVECpoXxXW35FBNZNEvzMb7H4ZPa3aQP1MbpjUM6qqtES1caSTbxx2CZyGQ6eXai1rw4aeyX8J7Z4q9UYB",
  "key9": "2Cboc7GT3p2UqMtKKowCgXCx7gCX1Ewuo5aB8m6RpVxRDan8dFvtX7ioLbCPUy91Q7QChf4zEx5tEhqedQ8Ya2mb",
  "key10": "4Pa7GyZThfUHxXpxi3GYQDDePzEM8WRUrQB1X5dL8KYZzk13UQ6JV5q7Dbr3r9rPBha6jXGNwn28WCLUe3NiVzzh",
  "key11": "32ug8AGeQ56eJkUNzdyu8ms4R5Zo9XzeJvQKmH74Ez1gZeyyYj5PCUhP56C5caQkQAg6LAHp4ZpksyWreSywX6ok",
  "key12": "4imZBke8D1pGpfG9cEiBrb9snw2gs4qdgAxouVvvhEVME3SEKx7UK3CfLWrEDCGtF6kYDTcQj4vArZdBYH92vt7j",
  "key13": "W7yUoBcteszF2Gs8FyAio3vwwhsM7ec2XBzZF9HHBiL7PzkvVYPSD6MFKqwMY9nJaejykQhgn5xbnELXw1nNa6E",
  "key14": "2oDPDvP3qpUaRL6CDrQeRTxLifSGWwyhdBPamFCmhJpUACbhXMtrkTuN6GkodWZ9PcJPwgqcd6L3J9boJuMMvCmR",
  "key15": "3DPVCX17Q2tyYdn7fB3cb78fsEteicmd3opGQEPXWAUakbWwTUmZd2K2WjQNfu7cT1UUpVgiCh3MZFCGXA8B5nUr",
  "key16": "XRsuLvLoUGaB27uDc8rCYFhLggCpx752S47nPtD39SuLb965hfbm3mT95E2br1SMizEbmKJoEcCHzB3nmBvKiyX",
  "key17": "2Mp43cWTedCtRhFdfbUj38FwUZq3SeqGRwJWjxAHEX6TE74oNMPwgAxnzUR67gqDuNJe8eERSnvwdDEpgHgsSdye",
  "key18": "4LVUDjhUUSKWtgLUq97ctdx6G8hDSgd5iFUxJimXAMD94SvwDZhGb3xUGyyzgm1BX29LcxYwb4QZHkiMW9PrXcJm",
  "key19": "UM9koxd7opXJtaijm1vFgdFyRCk2XF7eNeqJ1HYC2mm9wqzgdFU1eXUAk6i5a5fSarpGZg5RTJGXmch8bjg5jUY",
  "key20": "3uNptDguUREAm3snX5u8y3c18gBDKKQUh1PwMkGxHieB54XTon3aWQKQGoPkHszsxp6YUkKgSAPX3jRDGHGh6nqo",
  "key21": "ofSrKgku5a32EQQUg5SwcH6FCsgQnh3TJJdiobvvwXZ8twUj7L6wow4xBh54uUwaehu61TrXruLojJruPaECcEa",
  "key22": "2bD46twRzN1unh8iT729eSMPyjrscaW4iKc3K6Aprwfrya4JGAs8Kn9Z5FwJ34cnKmnWyN2gqr9oPndShph7zoLG",
  "key23": "WU17Am8FUTUqRxxbGxPZcdykRQxcYLVyqguvQhYdkYmWHB2ZKtfJsnvMifDVLSvpe8Y2NGwnTypddwhzhdSAsQn",
  "key24": "5RFky8GDcRmsJ8K72xGD3j6sXRfgJCzCVDqFjW4xjDs29cAwUP8DyxHvRYwtKmiqRneFTXW6GwwguuXBGTeGDSeJ",
  "key25": "43FTb4VthwYRB4s1RSiTsyaJE2MtqjMmWjEbSqutgEoJETTqLNVJgmji3gzDNiR1d5dguHqfmRY8oZWsjcnyT2yH",
  "key26": "5X6Yqff2Lqt6ZmBVZTCDd8a7mLyw7eBHMgjCWac2HYbhxLi7ecVuDvW4mXo7fWJgkMHWBF18gzWdfjkFbJgBXtMD",
  "key27": "5RSGndmth1QaogEhF9DLuRFKhrbCNKY2QZ3cnzy5Hn3jcvuvtCR18yJC2keWSJAyfrVSfKzWmqP3nEvTrsysPLZm",
  "key28": "62sgSNNimfk2HGGLvg1XzyKKX1AAwiLGVbfrvXNZWrXX2Cpap2pdGqrHPBNSK1qxHCEK4wZJt5YDaCz6MpSts9AT",
  "key29": "2qnXq8WJP3G4Lk4oEJopeJoYhqDjqKHB6jZiUgj6M2i7MBYQQ1kAew4Q77HSmc5uXgAXCsSJngwmAPLqZoz9Qts",
  "key30": "5pDpHDDnu3fw85BmYcat9BhWxYiXQ78RyEMPjCKDHFdoGJKthHKQPj1d87hre5tdRqVKcrxMs8mLCtiRhGC7fD81",
  "key31": "4jiPzCEQPnbs4GcGr2BBYhPwzHbRSnAENfi4HeR8w7cBaDo1SwekwenEKWo7B383TQcNoTUQpfBHKEXRYfd23zDb",
  "key32": "3qSqKPzZXoXymK6VwywMS2858zkd3utCU3W4Pfugsj7ttSNJ8B6d8uXYhfTsRQncizSYPMNAQDT9ezUBTzPxptCM",
  "key33": "yKhPiACdoHHLSZCdDYLbRFAo5dZvB1xaknMMAx2ZT11H6ySr7R5XcEiaSKnGvAgp157zpdATUmHarxiEPFWnwF9",
  "key34": "372GHF5GHuzWSwCUXzV1mWNqmjcF8Na5uNr8TrrsyJaT3ijTyWFbeC7MvbX1SqAWBmLxKy93TdgCYbZkqvtQAxc1",
  "key35": "2REYDmDamDdRhqAjPNYAUX49h7TKpbvfEbQyB6x9k8dVV9abzddFnwrQxHdTc8vw7iifpNWjCFeFS9vfHBvVsR4A",
  "key36": "3U2kJxUdyirpeyhk3nxWuuB6yqNYuZuwnnhfJZh5kT9J5knmQPDt8HoyRWKpWiaZtAp997YrqG4PE7t9pcpTQoge",
  "key37": "63jDWdKoLopXXjT25dmb6Ucm6Ch8edYonAgCUmXxhvp6NUzMC6rXkriXp6gRKBj8Y7sK4V91pC3G8GyKqMUN2Br4",
  "key38": "2Gnq1EdZoicUmAgHD2YQWNWAXaHAShobSvgd7EX33QtvpFN64wnWNZdHYNRhJDLv97pGnxmpWmn99qzd71WanGFQ",
  "key39": "296u3cosYQdQWSporjTwNj42jcbpkX5Ta5BgFhPPpv5CoxDxy5vpjec87afGucj6EnZCsjckYFiiYmpVFj5XcRKe",
  "key40": "5XoHQs5YhAvjsmMjkMLuC6JMerkeS7koz3DTjB7hEWk1cG1X4ZDKJRf9oXo44Dh2T1uMpz6oLSWz8MN1E4f8x5Gq",
  "key41": "5cnHyoWkf9LGZvBV1Q4afai8K42yuAaboLxc5cKW8L5rRyAYnuqH4VqfHFHYHsTm7VsTVfgxQUsvangcqM8y1nfy",
  "key42": "2bMq9ZjcCU7xbJ8BW7pdLPw6WDtp8UPNr2og992Gz4S8p78seUWoKLwgU565NpGyu5CVUAcnits83Y7JTz8Mq2ss",
  "key43": "61uq84iJNABMW4Nn1LUbjKw2FGTecaLCYWe5btF5ynbdEeiyobmFmkRKGMRXCD1JeUhWjPj346omCxsKC9DPZ9ZM",
  "key44": "66huJvQ6ML8cnaFNrzfikTFHyLav9gmNbZ2D6VsHWMgvPiQnztrJ5CmaCMo1FRrLWDXPtc4d89mEFvj3ZJnGZ4v8"
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
