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
    "3k5dcWNf3DGwUc31CMJXSFJJvEGr1YWQ4AHZbGf4iEj9maiau6wxjhJfFpEWhs1tSPJ4mJ2X1KZuMbtAdMngsreM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p5R3VkCCJGuETHWrZRbeNnvMMeRnCLe7gMBgqbBCusTUwdtStxEN5TsGnBXXK7QxgGqxg111g5vAexi4Q79MXUs",
  "key1": "SXAwtoyaxtjYefgoTi6bfAm6yNd9PWXbPghokNqXdzZoUCEXCoUvyc8yLkX12TMWmQ9MDMe5K1ACwwHiNoPG3H5",
  "key2": "4gXjoyx4ajZ1YV62mSpgSfwdxyoc7QqLMfvkSwB6891fXQM4xM24py58ULxKcLxA831Md6kYuV9axHbsgUUcEkR3",
  "key3": "3G1JAbTicbwFbkakZJSaLCWPAuHSMMqxEeHiNCPayaoQNLMVfFgd6E4UgkYeQCjCBAPGHkG2XKZy4EhjEs65c2us",
  "key4": "5qg5SJuu4W3sso47aLcZAuVZ4C92CTXvWB8JaoPFn6dru2XVRa2GxocTz8jCFAUJYUzCds6pXykydnwkCii9YX2m",
  "key5": "3ggPndAtNvJeYeBtsF4p5GoGTVAVrpnMVCxGcwFXWt5hCejZWKkcsCiKmSoRQCtDjCMbstqbSS3cSj68zKjNMtKE",
  "key6": "2dHWbb2ebkLoGDV2QgjUeCCahfM8FKaoQc2AuEvEw6QJH8uD4DsHEdUD5iEPTdNgyod7hxzqUK86Xy4XN7FfsWW4",
  "key7": "5MCcw4Cwu8bxPSiQad5byjbXUhYhBRLcvajXYpy56F4TVZv66Mvp4xUES5zyBb1NyNqb1Nt485sYboHDT2eYAJCJ",
  "key8": "2QGNzZfHJJyXozqsq5qFpTkKG1JENTStZwVMYUXjZrsa78fWexCpjpWuVzJ7A9q7orG9edENEKHZGefG56Mot4Qd",
  "key9": "ocdWdD914VfZiHNvXpebGfuUyECtziFZQXbHdUHZLmMLGYBfnbuae6kYr8HZwvYPJKSVrosyB9YvBJV1fpCJYWC",
  "key10": "4S1F7D7HQ9SSZWNoS9YjUF3Su7dNRcwJRWgp6jTEfpibz9RNHbnWxZ5RmbAPGipHohFTKje3RjUhNUggaPXz5Ln9",
  "key11": "2H4aie2a2SkurPiGBMFmDZHfWRVn4tJ7K9js9vFLxguebFXWZJ6B6FgXqLxMJPeeWh6UTLwTqNpLEmEaCLgGZ8wv",
  "key12": "279dQb6AhDFZQNnibLs4DZYhuNMJQHbr2qP4KgPDtBSbmP5efJS6fbrE5Koh2EcCxsZVyMAtxntk4bHCRsi8JtzR",
  "key13": "N3biSwwmgtP7mx8jXBtngfYupGjvSuH9KHh3pLJcn1zdV1xCAxfV8cbDQGR463xAkqsTcdpfdXBLYShVUu5gytB",
  "key14": "5XJi7vmNr6u8S2Gsm2gSP21ZF7RnQ53zqjggtyKjQpxbYebNNq6JkpaW2tFscumLsG3aLeTJmyeSxnRBiq9NGSRD",
  "key15": "7iuHdi5YUi9cxYCmaAaRTBmmC8wncpLZ6mebePDo8TyhFX8iK1NPyZZKhe61SThyogeKJMdzMBRjwXitjv64ELY",
  "key16": "4EqonqeVCV8UHzGfQcji6vZLuMKfbhNTi2chHYc4HSs6cLJssnsx8ovQ7aoiXJDmN7o8z97YjRgjno3DhWigftQd",
  "key17": "39tw7fFgqJ1RFbTPKbxhBCjjmUH1fzgoNZYH7EDA5dczydaV5UenSeQgvAan8taVKhXVePHGiWvFN6AsgEEJVEbb",
  "key18": "31HnHuW4oxWkYk61FkmSVi16p5Kz5n4CNMJrX7P4euhR1vHmcEMXUwMRLM96ayLfES5YH5Pjj85vLBVutaEDcYvV",
  "key19": "3S9Jk15X8QTofUQJ3D1VkMQPDjNqBSwGucrzu5Mi7CtmaZtiC8v8XrefskxvJ8mdTTzVZhYRFCtqnsC7EQ511XMC",
  "key20": "34ALhMcAPHxG5Je7SxkTGjjamyx6qJXWpYmcn1VtT6vZxKJ2i1Zgi9WbZ1tRLceHF3Ga6BcdCUiQcd6P59XaJwcp",
  "key21": "XukQPG7SDRao69Hs35FYUck81joJ3HGNLpAEwFBAEE5zv49w9MGyfyqxnEWt3sRipco96MRPrDzH74PeiX42YBU",
  "key22": "61N8QfKTquNeE9zxQaQsFnDgixCuhrxnnNkaUSrgP4EgPtN41CSKFgf6YR6z7RrJKuh9EKe4MfSx3v6VDq5f2xtm",
  "key23": "Dk13dt6baHyxj7ZosJcz1bK4svT8bdD3QpDWbcXAzJ5yuJd34aJ5wsA2k9iYRj763HGqD1o4TZcNePK14ZWpjMg",
  "key24": "W5D48A2AfjUqGamGo4J5scmHPaBUo44Lfwcyo9K9aGGMfqso6AremoydE1KiRVs9Gnrnoc9E5mY1ttvemg8fybk",
  "key25": "3RtQo2kN1U1BtZYnT4RddeMLzR71A3dCwarYaG3NmAGiMSAtMjcK8aT6gC6Mbsumpe5RudcFV5QHyN7cQZDCJp5J",
  "key26": "4M8JQZ4iF3wNVM9fcP9TrQ8bDJfyW2Emn2F53DBQQLiMr8A7uJUPGEELKuQm96T5223Jpu5gPgnwTd5gJHLUTjQm",
  "key27": "3mjakjU3Kqs4GYWxPD115XNF4z8FrsMfpaAX2h2CXZLTiJ9wCcurnJFAd2TtndoYx2Nw3tXA6uvMyPGYxcPPke3m",
  "key28": "27oMZN7hUXofiELJKRL79KYhCyWEwhQnbG5GQdqmeqdhXzJaps1VUk9gb7RUEgjEqVu11jnnyuyW2PBxgmsY1CPA",
  "key29": "PzvfqmkWm6Vi4hPhM71pTV2Awb8bgusCcnZR1nPffQQs4ZJaXcmotWP5Jb4UqD3sNB7AasWSFAHj2Hq1u1xWc5z",
  "key30": "q6betuTgJGVbmFwtrSHCsrCUCdNovFeE194fWmKgm2LZ83q6d7qt1i9ixpUFJzMchDjbZMGHRysBDnGVNHpqPXi",
  "key31": "5gmdsPheiAp4e1cUEW6D3ZDuxrBhfyQK5CaQkKWXjNATwoSiCezBnCTNoJyy3TsTkRihjuE1Va2UmAW8PCM1KJaf",
  "key32": "5ScieA8YTxoxjm49JL2bvunSTpLsFYo3omYY9FoNxY12ay1fvqzTRXqBCEVCMG5rRNifSAppaMYVsHjWxpvVUWDA",
  "key33": "mVdA9UskfdsqrHEwi8Js7uenZXKh1YqV4RJdM2JRNobHuGfayKgVucCZqn723EQktqPknGMhVf7QeRoemfnoQPc",
  "key34": "5ftKWvhfmecqcF1mmfusBmVWWgoUnwnKZYDXwawtTBvJs4xiD4tQ4yFh3sKTXagSS4UM7PRu5PvUiwipRF8KXb8h",
  "key35": "33P411ZiXnURLzzhEVxuX7rtgGGqtAEuPWg1SaBuaPm5o3mAyWD9WjqnwYpmvsZTzPAVL5j1YiPa87HHfS6cvHTo",
  "key36": "3erVjJvsTjcEmwBDVbK4Yfin9F7wmFmw5a57cqHiCTdzPXACFHUQ2zyUKr9rWW1tkNEsxuhUKR7XtAsMT74Zvijn",
  "key37": "4wwYeDeErWPq45mi1UgUgyjHm5UoY2LsQusr6EWtonAuZoNCopJ4xZSxrMpWxyLD71LDGUyn19sGSXk5Hh1fY2oH",
  "key38": "2Qc2wYjCjFcUL6YFpkV4tu8vWTycUz5KJC4htsUCVRPuvfZmoH4nDxS2YPeZe15KU5KiFshQe5cLxBZrbBTD3LfN",
  "key39": "3new71DjnHRrrYh3dEcXhxbaapBHskEeXZ6pGWrDWRw7bX2PaCzFXygQgJY3k2xpM3bWFZorWXU9PPiKxYpPSDNd"
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
