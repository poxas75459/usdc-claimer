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
    "JaNfL4rHHnc4fktRjHmUMp8PGBoS9HGN3C3BbkkoPYr5WTZ89mRNR3yjDnZh4KFkmPp15JKmFnELrxsgLodX2L5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KsX2QL16YMSwbJ452Zb3UozpoLYRJ2b7UUscJwyZB68WgAudBzvA2Lv1hqxKaRHDALMQ1xHz1VkyVrk4nLt1eyg",
  "key1": "4FVtjz2uQrGDt7WPsJxu1Fqc53V6vocG8gRiSwW1z9yTKTms475rQDYmk9X4hTAmXgKPi2bxVZ4BVJRUrG3VMaCy",
  "key2": "2Nc8nZFGCTdxuibUqAWcCBhF7AmQ9W9qN8LscnSqXzBMSMWcBcmEiKGC3A2ehJiDtQ4FyE2rLutcep6FN9rpGyRD",
  "key3": "RAZoHKsoRxQEecPG6qswZseNBMwmVyH6btV969gMApNmDwogHLw4ujuCiig1fBABEB5nskh6MKz55Y7bnEqcvBj",
  "key4": "2C5g7DwMwpgDcK7UpoYkFU73HPG7uaNqfsHrsaid7yXE3THapV8ix7mRvX2yMtxeux5ZuVMojkodgeXvZbdo2HUv",
  "key5": "3UkGCd2eovWbbMwpxVk1BUmap8N84wdBooYBiDvXuYgAke3WW3MfHwZGi8MNCb4Y6vSKZHe2PidKJaTRJYhEJ4vh",
  "key6": "rmoN7qqwh1JSqeTHpQ2CUXDC5wwxjVc3sWtBGQShWe2t83yhfnpktB2SCWkZDohmTdfGrVTXT5kNoXaWn5iG5JA",
  "key7": "5URYibgnKYkqY3TNJUvF3QcLiUapWKW7msuZGN4czqRj41BVJbuUN12k5JDTAKMf37ZTEwu32LpV8CbAwL2beZYG",
  "key8": "TnHCVwtWAacs5G74DXvpqvpoA9VPzzgzj7w3Jess9sJniCcBb8pydzd7Nz171xSiukjR3YjBsRarPUkRPB4hSvf",
  "key9": "3PWjV5m4S9gkErnfdHMg8Xjo853MSVx3TtYcs8f46DdPC6GbNcd4tR5ih7zq4zhTJrwrPAkFC6SgVHXwpixvhPp8",
  "key10": "2zwazVxn2busayeYt8cCHaknZpk3ktM1DsS3Fo2MKD3FaC4rMHfx3zewnpobRA2DZi7fHcjSMTguEXBLF34A6QUq",
  "key11": "2GWHaFRfb4Wg6bwhp3XfKFKJseGfLpw6G8UFoGwG9kW8JgMsLfnV2Mpxpw8kPw8H9zBQQX5Ro4nyWdKB5V5SgKNs",
  "key12": "3HtoHHBKtV9b5FYTG7fjk3GGGyCDCdHHG35EAtLEtaBdxHXDW1kZ3SuF8aaTCMNa14LXcuEzEDWFsjUw8PkAAF1r",
  "key13": "ZMDuDDVrLYLgV2eMrHLSEPnBhv7tiR8EprbGzWwnbWVNoDZgLU5hxkyHtjsGp5ZnX25D7D1d61nu3wV9nkbf9YC",
  "key14": "336vq9UTgN3mmUJ47Tay2DeEMUNtTGyw7Y2z7pjK5GoDvgxkFomgu9DtNZTqngqwjHBgFqNKva5vEW6vFah65bxD",
  "key15": "VvrTnvPis941HA4VeQQBJE3e2ZKs8MmHVjWS4VPFiVA6wAVVFvn12FQkzSFdFebJMgqKMSe4uxAKw4tsVEgLvs2",
  "key16": "5Zs3RwtTS1YmyGdjwgUS4PDX6GdwiDHkNZMqRG2xAeCWZG5nroudMyKryt3edYk8wYULqxTBGSJBdJ9EXPiF1R2B",
  "key17": "qRhUNxnx44G43xRvo3G1E6AHCn6nLxMLxZQSAj374BHBtr4EKFZgq4aUCsoTn1XACP3xYwBVrNg7ECoxEwjoeGf",
  "key18": "4yHLFow7XsxK8F3hCs49tEUUsfAPALxFZkNiVAvtwDehJp9cdoF7xX7VAWgX4JWjh1SUXH1b8TKxs2ei2qNRMWaT",
  "key19": "3GXrom6YAK74ojc9L1umqJE5g6gySEpiqF5oTB8DUh7H2eAfZJznaXUKvtNzef1VrZ4QjSbWThMq7ZzHuk1aSY9o",
  "key20": "2VwmzUzFuVR28MN2dws1LxqX3p2jeBmQMhNrBVBYTcGLjTXGosbc5FTVTPuwtc8E2E1vm8JxPTGaar2NW8zQHyoX",
  "key21": "5swbdnTa2Qf9bSrJ1zLjjgLPyMpT3Y9sxN4imF1cYjyeJKsQx8dR2SGq8TPzzNeubJsixiSD3CBvmtq4wjGHqAZp",
  "key22": "4euE2v7tSXKFixo6pfhv5oZR52t2cVMCRDzpTj4D7hZqWaXf27gGTw2UF4rPJ7UVpjJNCpWdUbXnDTkRwUn2YU7k",
  "key23": "264gaqKNj9FXfsGdaQM7jfk8m6Qp5r5VvXPW2WTuy8suM7voWZMsBZuE8e4pX4huzQxsPB6nJKBiseu5HDkCHTAF",
  "key24": "4UMKJVWHPAyto1Co88dSAfRpUmg4vTCYMS8cbytFUiSZpDqwrsPVX95EP36rbPszNqA8jE8QfB5BiT8MB1xiRVxv",
  "key25": "by8yDv3PzbX8hGUMtGFCLqau4VPiaD36qfKZ7b2gYpYr6Z5q8jE7HVzg7rc2Zq4Br6L3tPbXmowjHQzC69qe4Cw",
  "key26": "2ej3t5izsNQWXYqMZ5ffaoecCcX4pzjxCUDorF2JgYoTdPLrTEsoBu9vqjenwEDKddXkBWtjsXhypNhCthoa222H",
  "key27": "XhjtYpzSXw3artAo3vuMiPovdmobDwdiiqQQGzRx8WTQ9qD7asGWwuKKmefi8jixQABPjgaUaF4Mp4fJ9NuZPBA",
  "key28": "3KU9amS24M9SGDbBtDNYMeytfNRQU3FbfYW5GsbfzYtkWswsTpWpm68AcGEYHhtxudbhBhgpGsEvgmNsNXMgtnDV",
  "key29": "4n3i6Yyoh2JkgmmwTasW3z3zgAQDu8dJddti9AdXfMC7HJGsbc1XZERFmnNFsBgSwE7RKj7bCz3TiCtaHVJPevUe",
  "key30": "3iTRTtJwXG7VTxnNEkbZtPLHWV2jqj1qdb5J2kpstaB4ThCD6RoP939qUMePjPszVpnn8ypgUN5A1spEiiNkPRdg"
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
