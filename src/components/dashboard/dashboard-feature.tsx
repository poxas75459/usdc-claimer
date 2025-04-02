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
    "5uVvTDneuemwVmZywvSs4c3f2BpUxanVmSjJ8fmw4m8z7joa16BpTtrqA53DEKd78HwPob5ptXouH21cWFrjfAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qW5VVpdFMqnUEcGKNNr1B5MPF9J5C9tWwkD4LZNocrBuioB5KGdUUV9ix2qma4n9MEz8sb4M1uM8aFTjTbDkJYt",
  "key1": "23GMtKQzUha4LntkC2WN9PPoeNBE44w52yafouf7WcTzeYhsMacQcC4ZU4ZehZm68YPScaxYnecqLFMrEfh4iiUZ",
  "key2": "4gEo4LcZuEJAHPoTY5Ma2eGUgM52iirNGJSwTynxPZw13x4tgotfcdeBvYwe5UckZ9BjVAeTCQeLamhzrUhexL4e",
  "key3": "5SQmPacQsUJsvKheUn6EKxuYdFA52Pnvke187v9pyjYXCKKDk12DbxbZHD1RHXw8tjPcJ9KcxmjNr6G83hb1P6kf",
  "key4": "34zNCRcui2dfsCUNaBiH7KDj8FXGhkFEF2DNeir6ZSerhvRAsFY4Uk4odk4vzZkacQXCJDb2dykaEivDva9WFN21",
  "key5": "4dYhtFr4fiosAxrYvHVwCndj4JQPP9AhnzNKaNqeLPkijpV8CvLcdAJc1x5pPZ285LEbtxLxckSo4bKiL8q3gMNo",
  "key6": "5Fn5BRC9R26PoTvuXpAcbmuE5D8VoUeTeQVugV4LYy1A3daPZEKWHnjobG3imuZPL9hbQ7tNvKT6YM4xSn5yM1YW",
  "key7": "4eUpsuRkNh7iKRTZvdJvoB9JMzsCRd2HjmD662HCBPcTJJ6A5rzpXa8sGzrzADhqg3pB156qT86CLDEuAAjJ8UqJ",
  "key8": "mRMsphSRp7XqUZnHfWQ6yErdeBrqb2RSt8btMYV8hdtL8rf8QpLGTXYGyp7DyRv9UTbchXnLkL4QjPDzgWwNVSg",
  "key9": "41EiwZEr7QQ1woK2A2BEEWZxzLHhwTVsCYPstfpNdaYZko2NEG9dY33m4cu6LrCqZa99L5h8HQuHR744BezG2TFe",
  "key10": "5CGzV6fiCNSPYUWFtHdgbaehTeeFKgjof3ZRxgrPnZEvCncLhTdf4NLWqLEwg14rWzmQH4tLLM5DbdEGahZNJySd",
  "key11": "2ESJpN9C6N9TwmmTYk295hdMdFHQ1PW2ofCbdzJqv34t9oobzq2nBQi4sSPWeZZ9uc4JU2LE9teEgfNgqy2UWxf4",
  "key12": "4eGTMGMWuRARWeJaydFVhPNmSgenTAnLsp2xUyyE8mB7uV7XiJnid6db1Sd8ZkJR76wp71kqJcRrLf1QrucMUVjx",
  "key13": "MqCrBRZ9iSxeCXTTDBgG4yXfF2T3LXqoguud9V7SDQF7TcELDp3QcbdjYVcMuXfCdKLHTqeb2hkWkHLQ9GJAVy2",
  "key14": "3h1EH5jvuiiEKKv2rykvKPdushZnmehtqd6QXUad4yu3ACoTNLvtbKTEw9G1uZC7Cfsk1Ww3jPtt9g2Hv8jfNeXm",
  "key15": "62kr2CiM32E4JKdToUV89nCsif8P27q8LTJTYFWPTh9vKh3ZEnQPRtCJ3AjUJvNU1V5B3uBFKSAmk6rP69e9DpC",
  "key16": "5xtU3pucE5dygctQPzwKpE8c5cULvMhHT3LyaauAeVi1JADPmB8VePUBFVW7YDvGsk1HdVuX6ry1PprKNHgXjhjv",
  "key17": "FzdWz5XQXzPEBiJqE6BBYEvum1EZNr28EqRnAEWhxbCfEa9XwYA8otLFiSGWn7mnSw5VKuEoGcNrx1Hx4ZQUpKo",
  "key18": "43BUceoFY2XDWqM6K1CEVe1tXKHqhCjujytWQ9qYV6xgqxcySEA8qX6zdEzr42BvARt2NB7uRRjgQwjhR9Zm3yyP",
  "key19": "2pYGfLjfc68DJRmNZpLhmLB1jANBkwdDUSjHKMz6MKBi6yDoVPuYuvVnxy311SuvhQf8Z2Z6er2T91HbddyarheC",
  "key20": "5hmWVMuAQr3epJVmFF63yrWSCzvEJpzqPCJwyeKUcP3B5gXWdzcG6FzA2mX4RptUNDx7n5nKR57vtTbequkZzkPW",
  "key21": "3k2Gmy1uRtyg9nLnguf7PLesX7GLurh2bYChYJVVBV9QG49k68nfbpVULECxQGKwDZoYVrsaXJhTaguzpeG349nw",
  "key22": "3wTy9ZQAQT7qU7XHMY6CWEfda7zac1fVGkgfAd9tidJxCzTnnHvN32DT7bYUApCNchpMTshaFr3mb9wwEqZTHbLH",
  "key23": "3oQ2u3m89kUqhLvQ78p9XCmXd1xMPnYBa7C7Hkp6RA7LN7zv3nCipTM5CrBUyuvrN48912UtKaKQ7Nfsp2bmgw5J",
  "key24": "3sLUMT7AjSDgSps8wJwkHoWuQaxYKCJZDpn3ocFAkqk2Dwt33QmkexehioMusCqFb3ZisH1tiKpuAqSCvP3Hk2k",
  "key25": "2dwgMCWoDY35Pp25abmLdX3zQ6Af8q6MiVMoHFenb1Yt3ikK1Ho2xnHE7ZLK7tBHmDhET1F75XwzmFuLMo9Z4Wm5",
  "key26": "2NcKAwH5vDApvTSquLg7SMSdGHJTiiMUG1xri26FshqJfWbxC8uYxY9YcQ4Vddy6ftpCyxz2ZhhoSYL1BLq5AFNe",
  "key27": "5nZLiuz4sWe3bjbgJKGY1ikhngHeGdiqoe3mps8VcqsKLfq32uJipKDfzkZYKbrDRzZJPv2EqSfs8dTaqs55JJNP",
  "key28": "2EAfwaBpsQocAXNXz33exsq1Xwtms1ManAdLaCjfkzKAByUiFQNmf8BiCqUjc7r4fn4VG4J5Ls43MKS2NJBags1F",
  "key29": "3Wi8mrRXCx1GJbQwUEuRePhV5tYQpucvbhQX3RRszNwPQhh3PXrvXBHYCdscJwVtaBaSAPgUuaPLo4ypxQaxV2ay",
  "key30": "2AMdMxr38mmZz5hffpWVnWibVWCFKQRFbYPXSnhKBqevis2WJuQpC7FRzTu3uLmyLK7WZ1HSDumnB7yUXmokSp8j",
  "key31": "46uFhC1C3T7f6zPzLRx2VqCZxBicJTKG87oPHkD511EEejeZfYfnJdj7fRAsU5Fz44AZRXGxuvxo58A36iDEjfSe",
  "key32": "5YXrLnkNVRo6TdhUF3JV99vjkXxusC4baHNxQUL6gTK7wuQ6eT9JtohTmSyW7NSYyeWNdct2qtLNpr7puB1WWwx5",
  "key33": "3rNug2X7VHLfH8yvDysbmZcuyxPpBpVcD3uPLyFRFCELZAB3UsBagRqRowEzkFE6AbmjHogFeiGYGDJPMwaXFS1S",
  "key34": "YBcY9fE7KvNTqjbhVvEmcoFG4VC88YL7DnMSJa3fgdy45ddt7Q2Tj2EFtvTYmereC6bdoGqfRuK6jU1GUNcnjDK",
  "key35": "2fyEKfqRdwpwjroBw5KuKg3JrjPWvt4x2pkAfihRSJo5vveP39vQ26S2agerhv7SJ6HUK9csPhA1r1x4jPhFQwpY",
  "key36": "5hVGBEccbeGTEzQVKqXmV3SUaRrKqZMtcXVjWWWTLbnoTVpfdB1Aoct9eaaAKw3WeBLiEX4VrDno6wpNiLCXgHPJ"
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
