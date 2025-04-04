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
    "25Er61F37zpWoxmuf9hdCT4DjsbpRu1CEaKkoH6t3WkPJjPwAUWr6AG9BP4gbZV8gZr6xY8jRGbHy6eNH65Toymi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67cx48bGHeEe5xKWRiSoK2Ydbrgy1s6BA81EPMWFq2RVPtAjSreT8VS3PbWAT2TLsUaMQd4EsNRKcFgAW4mLCQKk",
  "key1": "45g1musFVExkvsRTKuAF5RmafpbzVcNUudFLGtg3TmQ6qGm7NmKuMToFSpHTCSGQGxs1Qz7GSoWsEU3EaBXYQmMW",
  "key2": "3jfM1NysHbGu78k3qHCL4ZgFnJxZv3MAE7bkUUsWFpgdQZPAh25ofQEcUVoJnu8n6JUjXAfuBJUWFmzY5gnV8K74",
  "key3": "5HF5rDnKJb6qno7KERq4GCNKD35Hhy2PCVnkxafr9ATevx7jkSyE7LdaX9zpktYLrwTSfrvwN7A3Zcu1RQgANi28",
  "key4": "HvdtmfExc5mRhQ3zRmLCHWFG5wPFBUyBSTadpKC64vdMkrbvqgVD4XyH6oWLNRTWj24kvKY51qecQunV9Yf69hZ",
  "key5": "3DjNdthCG4fN9GRt35Yv2rwRCCzJ7QxqJTs3bYgSKFHuHi2sX11PdQegP1Ya4wkN72VeRPNL7bpGhXBqHGNF2brR",
  "key6": "3wn4jXDkhvq5DjNKtWyPKa3yBfLKCMzZk4Lwv52YpMYxbVMMsQKUNywbLtuDS8rM5a7Ukfb3sodSqEGQRALomcn5",
  "key7": "eGXojZVXifgcMbuiUfjR7fXtcdJg8qGBYRd3Qky4tjnAhBdr8NfZQLjvQMHybvNRcqbEnP3vs3byV861xHw9FQj",
  "key8": "3mH39Td5nsc43gugx3ssBZ79ovhdQk7yez9SteS7cVDm76qZB3HaNSLE4hFMeGAYsPoCzm7b9JUezZ2aXXgn9eRE",
  "key9": "2gKvwQ2b9mWrkeJuP3XQhowzxQnpHsW1dtQcZ2rSnVyoSk1dyqpVd2D4TtNSeBjvEmY7JpMEYsmTPrTwUfyKwwai",
  "key10": "4oWeehnbDvg4QekS75YPgqaEXkEEmbiwivE8s49cDQowXCpbTtLgCvvBATQzA1k5F6srTvvdgEyjQvv36eNXWHsZ",
  "key11": "4nz9qJ83QgJH2YP4d3dNkUm9g1WoWmSq11RoqrNK7VMJdNoG8knFXJfA2rhWeeKMr5vMeA6DYYiFK5CpaQeAmssp",
  "key12": "p3tkGiDuwBd5tXg9S1SbE3SPRC2RoFuJNFX4YcgW3xH3B6Ms129sJuriv5xQfEdN6MoaK9XXZyMugPyZU1Mpbcq",
  "key13": "5G25gt1XXc6PbsCof42xCy3VmnHpxe9TAM8XnjoT3KMi3zKQ64kYWhY8iCjLgo4DCcLdDjFEURRC7ak3nCTEJrG3",
  "key14": "44mXkXtFKhAyieMbhA8ds22dDdJBvGjYXomuPoe4gFVBzsifauTcxpDfuDC54rKT31wqaE2qsptGNjDi2k4FwCG8",
  "key15": "4mAEqpVmUeJ3EVAFnhpj2jXgqf2zmWRu21cFvQtg63R9Xz8fpaRmhtxLLFZtZWeB41SJzcx9tMJEBHMJTn9nKmm2",
  "key16": "4ugabb8zB51My63Jxiu1f49LCCDzA9rbPbboifootpMifaS21p6XCqSCRj7DBYhmWsJu4JctftD3iFnxvNp4B2r8",
  "key17": "2Qs8ze7r2dTt2T4sVXeWsLW2oE1pirevVKyA5tTxMWiACiEJyFTRC9jskMqBYyNSLAas9Ho6Fg2LLAJrGjgc85GR",
  "key18": "3BnE92TpMUpeXmfbLKzjEunZ8TJqyCcoc3z1niPze1DAgcbsix2Qo4waGDG6PA6FJWmiSMW1ehSm9Hbqw9d9CoHz",
  "key19": "41bymLdd7kCnGpG1B5KbnbPapjsMooYSSJmYxvvrnQLPKMxiNRQPtyqWKaXt98tNSUbsz4sN74fh94VMiQMvNRDp",
  "key20": "4FoaqZgzKrm1CsvMcZ92JfpdCDD6qxZ2eV6yWjjQyi1TyfGXK3AzRCvzmtNkvGvNPNPHZVoy4DtoE6R8QPxrWskM",
  "key21": "5PFfPGqtH32DsjJR49U5jsvRuEsKsgrGHCmDikDToXX4a1QBsmDHgzhYoyC4T4wY66Cp6x3Vo7RGKeQeyJSdMQj",
  "key22": "4sfuU5sTUtmh36NmM6kHpEDKSFybmMkehLfwktWaQbMcsu4c96jSstAXZJFxB3HKU5oCapfUejyJUejKNBBZg31Z",
  "key23": "2YvmFvdULZFFRPW7dKSC82Bh4SsPoBKxmEixei9vNJaehuaJTMhukdNEFr4FH8fvqK6JETXVKdn41DYAbjjMisGh",
  "key24": "5HML49ihAkXhBjseByEqbzxQnFXKGP5b53nxjhJUXftLWWF4mDBCWprjieijyxJv8deYGtKUmdLsPn47n3MNpQsi",
  "key25": "3x7y9isPfM69kxwZnn6YthWo8hU91zCdVN2Z7HWGCSHHnrbjvhW9vkxamPxhMnqoTP6Ko2igDtHwKg1mFLEUrsQW",
  "key26": "59eiF5hXh4XAFh6DAhyZFedoobQdy5ZEy9Tzhft9f5pHpHXXDc5Joz5fxQHZPhMp5XzcsGmweyjjn6KPY2h1KVpu",
  "key27": "49E1mv4HX5yt9EmMkbEkoBMZtsbcZJeSHfubMmuZUN9rEjGycj2RzJ5BARnToXJKGNPS9wnBAV5f5m7qkkZWqgQj",
  "key28": "3o45QkB6UUhLmSEyYpiyDxb48kCgSqUb5GVgcquWdB1JAU1LAHL3YvB914HwhiQCcwdH4YKd4NiSRiZj1HH9sNwT",
  "key29": "3dkvw1ArCA1es5WuLZyRSdkge5HkL8AF8kp1aP3cM3KN62kBkR9xbJ1HbjeW774ndX1VRFpb7iDB3w3sUZXZSavQ",
  "key30": "5Kkf6JAJ8oW8tPKP4tgsH1iv5DoPjxWfGdQaA3nru7QwEbqpHeikoyhAdGtgJFzMnDRZPnopUY7g1jH1kSPNfC69",
  "key31": "2YR9opazfFWPmyiypXtnbjuAVzHjuRrmvCahtoC49nAnnNThb1eb1Vv7EwV6Gz8gsN4vGWhMoAj6YN8WrArJA5w",
  "key32": "59oE7zHHdPDHrQaxEFv7JeyzdAnJFfudDf7cBBPjZ2cXJXb8CYKYhQT8HBeADL4VBtyLwkeV9tkA8Z7dSSbrZPpM",
  "key33": "33opqcWYZ6SP3Zc4Terx19Va7a7inAWWynWSW9neXKcUrLc7T2a6DMYAdRiASprYBXSAe3tfNp6eJH7tFzJ8Y7aD",
  "key34": "2mus9eAsQhqQgHkx6yrXvB32n5iUCZxjf2soD5AFW7LzP3qrgKjsFpX6aQ5YE9xEvwSQveuD3amdikL9XsNRrNw8",
  "key35": "4rkGYinTp8WtBAcmNyNGEy3TPqBSsY1hMDLvP3bgBz7szo4x4PzmCAfsGU3dLy1gAUhUemS8xzuo8brkGDYdYQwA",
  "key36": "3reu5G8sRnDdxwcSQx2hA8iYuBRow14biUn6LsFrdfK23coBay8Br6umWoMKvZp9Bs7Q9XmbdoD9VmVUyK8G3UNx",
  "key37": "FXGWG3MKWAQJ2nNQysqvYpNyMke8zvPzeobzkATvfSYm9BphiRTEZrKkzRJjCvL7118PkBwtD2ZzDYLDW3Ao7ue",
  "key38": "37KQuiejLNxQfPz2nehrbaCsBhXJMQYwmof8127s1pZjdjHspwSCUShNKZCm99D6PB3pFH2zbGgXkqLDNz8zgnnV",
  "key39": "3LWHJ7v6f5cJGCr6hxiVwzm6SxgzoigTSeDLZoW4Xx2xf4QDyc8J1Rfp6fQYhs1kDvLRtpLeTcXdhpp4xCKhQDTs",
  "key40": "5S3q4264zWhtSxB9u5XA2DygbBGYXaURceh5keV1nmRUbqtqMGrBCAMiwQhDTkhA8uE9h2rpmZzvkqJ3Y8W8uDmP",
  "key41": "35mVtRzsYZ7fvJzqQJztppMfSo3hfxqDu5Tg7EfTbaRpeUUs4pULNcAVUmaBArfV37DV9kTRhyfqx8uCdG3kQY5F",
  "key42": "5WAgk2EcbBtaZMsKnANDiKUxMUEqxZTABG3N7WxJ8FG4emzAaiosQHnpJocHF3gwwvWgBALsDXjCbneDivnLNK51",
  "key43": "REEqXqGeNsK1LSF3ZrsRxEXVXCsvMqLum4oUTw8xfDhvX6XwWpfuVoxJmjAgrLaaSKeZW9AJd7rDBtfg56ctCBD",
  "key44": "4iPHEHD5uacJogA8qNB9Zuio2knK2iUWH2E1xK6xeqiS6UXWS42UPpsj14SHsjYadp8D7FxkWPWC2M9ntYd38EFN",
  "key45": "4b2UsJ1c37oWEF7QquYAcXeEWRLqB9uAjBbzcgdoWC36nsyj9FEHrq87asWmQuUKUcSNYsQErFieZQSszkjZtgeL"
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
