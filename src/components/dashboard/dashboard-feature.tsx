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
    "h7bUB5gsKpbEa58BP7sGjn16hC9ts1JHKWpE2JrAz25j5sdDMGZKTBp7pBNjQxYERsFG4FKZYfYLPVkZw2dAmYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iTW4zcmtdkQW14TogsyBfmdn7RvAE1TgrKfz4HNCEo3ipg1EEYbi4CrKL7GcxdsNsDGeQwfQMDeZLhAyQ8BK1Fs",
  "key1": "P9UJKnbeSzchWy2oCfMUZY9NAhj8hUGmuB3WsaqXZbx9xxpPEZxSz3MQTDL1a3DVvsrAFxxYLXii27cnsdwbmDh",
  "key2": "QEfpP9xf3YTR7j3d7zTJk2PoMdt8beaGfNNpVssiYuz9as3cC24c8ZbkETWzAfZ5zUNDJbBm1CS1ShaCQCHdybE",
  "key3": "kJsTdHuTghkMxq2JA1C5Hu1Kvg5U1haFE3CNQBm2vFDUrWS4VfF5sLeZcv3n71s3YepNKYMJZutBqJKbL5Yv5YJ",
  "key4": "5xh2f7SCtruhy2hWeLFsrdSFs6399M2FoYrnQpRmv7CTZqyJzmBf9nXvd16xgCeszwyCuVuGY7u5SHRTFitmhgFP",
  "key5": "4NDwRVoMwkr7JkbMmnNNGw74EpMuEPmqxg47udxSk5iFWpnbzVXvyjbXQoFbKseZ2BJ4r57ccFor48fr3Wa7LyMr",
  "key6": "2qbXY7DZU7kkJBG3rJR1bDfkZsmkso7KTF1LXhJ7AQ3xVwpdhMgBhrSkJVC9T4qF1dE4dWudprKbvUUom64uR1sc",
  "key7": "4eb8GDMhZbriVwjAcuotpABRjwHoYGgTqaw1PoirjdfUxKPxsMCYzwMxsMiHVmtFenp7SfoSSCFd4KS2mNLpY9us",
  "key8": "yUqLhttGh7DLpjCfTqNv9A9bjWfVwXenSRWcTJALUWVAHQ6GDYqCh3RcoXNEhjGBrew5MhLpZbxHbVQVQtxh99y",
  "key9": "SzdzbizSZKJRDXhZmgSZK9KPfH7DowxLevLoW9S5LKBqEhts8ibAkBRPkXJUK9pANNvzKLbSr1fQ8nbsPhYYjaV",
  "key10": "3NZmRC7sPVvkBGEspjUr6cwRz68Ca1DNQ9dsTufcUwJ5wFfjGcgA2QJhf1gh8Si5SSjg5oGAkRyJH6nMLFPB4q3p",
  "key11": "cLEg8DkG5AbHmsu13iKierL6gZFDTEat8CujqVNXMi6LqSUULG7MRhVErNNeZA7Uhy6WRnY7VjTSQof7CwJRSBn",
  "key12": "4LgcgdhY1RAzsFPyjVWBbFUXdzFjymNZ9vywoujYxC6KmLGvR3NixbEPeB8tsdJRAvQknmv2TzGbeGyTadSGJH3J",
  "key13": "3N7LtHS1RQzZVvre3nfBXUCuejmgnYmguAKG3msiKxWRmQorGMHXzQgj9RNV4H1rd2bNcGrevAPiSohFmDot7zas",
  "key14": "5ZMw46DS9Rm1s2JqV8avyDe89BMBexoKv2hmWMcTEcDz6Ccp5USJDzi1xSfDREobjopvCqDp7KPsvYR9cdB2x6Nc",
  "key15": "whWNwDkdvkCUfg3ZnPDT48GjcGCCs5fEjW9whsMHHGaKeMjzB769wwWFJkttfzLSHCxZcB6XgsRzwEnsBvZ9FXD",
  "key16": "ePiCWVTVAAexJ2cRoQyQmxhUcVcmDwbcvnY5D9dkLz2a4we7SPX3xVEhPEkPSCuLbvB3bJEFYCt3Pf7wCvKpkU7",
  "key17": "3EJeShUjAHktiXv6uJKq1h1etRx4LjBAkoeCzoDtwamecY2Nj5eo2CgAVHxvQPamyWmyeHw1ocoBdATwm2zbiMBS",
  "key18": "3MCw5ek7AXkVxxv1DFAoxqMGEmnLbfCG1uC5Y7nuwMSrYJvBAb5DZpPeXXvZfywUXgF1vzzZL3ANvv4zMyvY3J3i",
  "key19": "3Y9iJB2M7SaRHaZ6CGFZxeTUXDutTQbe3eT9u3MwvYtP3rcxNaGycPy4bFoHN9W1LkQkPks9KPv3Cvnt8sqJBmRy",
  "key20": "4eWwuCfk4LguhVT7DQpvCF9EhC8QGGZevzt8EqAMFmpYfimooHKBsph83Z8x8UDEgihBqgqEjzPQ29Wry343keiL",
  "key21": "2QAfcLB9DYxd6gxsu6WYmGSxrhFtFjbFTt3fkXCD1PhQcPTPagZjYba8kSJ2kXCcsZjDhWAEW7E3meZ8qZB9k5MB",
  "key22": "3Lm9RjsP7dGTpCPEBTTjmW2z55UGTk4sdD8Jhv1KhWR84ZRn51YdAKrZ8dDcHPzch3yJBtG9QqMH6wZarwzwEFCQ",
  "key23": "4ToivwJpFRpfnLcAYQs5DhHzqN42RUiVp7G87WbrZpgsmn8CVDkyocTigk5Jz8ACsKoWjZ3JmrGgFahaWrR1omgM",
  "key24": "558dbe7u9uX5vqWBrxbeYE1mMw97fPHdL6c63XtwJCUpvfo2yA4wJroWrXfcnVxwbr94DoeqSVkkhkbmdWSgXeWH",
  "key25": "37EMDijQ7mMUjjqDgWK4rLxRo9k1nmjpJUb1eRAiwByUz3Tz296Nxu5SHF7678AGAo7TMXE9BanFQ78Afv62VDqQ",
  "key26": "5CzcrM6eyx5yfqLa6Pfoivcm1Xdky9yHyxNAairCDZsSN9cqckg43EMSPbonAsrC1fQYbMja7kWxbaadu4cQaV8j",
  "key27": "5o8SzGnZyMjje9huM8pAhwGhekUxZjVaKmC4YcFTU2FMkY431bPdFYm3BCzBahW4QBhursFNYStUwd8C1uNuCkH1",
  "key28": "8v49yh3P43mkeJ77N5QMwyc9LE8HWBt24YLnBCYu4SdHUZsK7zs4KdV8Jvsjd2cnZvtyPyuM5tMw1GsQupKxTfp",
  "key29": "3jjEBfkFfvuUvYnZiWkokRxQgjqXrtw356uGZSDSHTz1r8L9sKCCP73f43ttiBq2G877ejd5ghyLYeGxbs7wobaa",
  "key30": "BkVmeZn9KNkUTGzBVJsAtwwMwhLbJLUb83yJs5Z7sLFg4ipTMVJ6qEoBBVZVzeJpmtBx83WVAbtVppRW3H4KAPS",
  "key31": "376aY63KvnJfV3fpUJ5e1YAjDqYSQaMTzeFLT2u6kWGw24ACpxuEF7yudm7qLEL1PLoN4mZ4bxcN8JfyGBJdadHd",
  "key32": "6UDghjBSdmbctVqyGUN4sH1vKue4sChFJwddEhbrCrEnZroBPRPAsECcExDZa1hF4256uFmAXtXuUdP3QQkZv6m",
  "key33": "3dRiPBeGvgGCinkK6ipw3DLqzPeQXxwbrDVeArZfgQ28QFny3wkJoZtWTbPCxo4LckcAU36DqXcAS4SHpVTTe2kW",
  "key34": "4GCxugfxosChttXtSqd1yMBCnpS8xonS8qsNnisEVaWWSv8WKHAj5ZsexsnkGcd2T5D314RKRfkKvaEfQQgksE76",
  "key35": "3VJ4UCAEUHjCb4yEsmgPKVqLj6etHN9GMcjvNoKVQKVCtxK6ZSNhdjBbxbsGoc4aFCYBoFoev6fLDTSRNiDnRkX9",
  "key36": "4FZnXLLwcwnikJx8DsUDuLqG1q7SB8f91dodZWJjrzePCAZq3rzG746v7Mwzr7JJBNudJ7CdKsZ4mBKAoQb4vqHp",
  "key37": "2QaSuc78g5vM26Czgy3AaHWbaNHyfPyyTrFg9TGogLKC3CWb9GqWjEtjGvKpEYSshbK9VRuAZMhLDBNokgkoGYpo",
  "key38": "5bV3NJKHWZddLakp6J8oWq893iJbETUVLdmh1S7UbEx2Lo4KWxKGk2S5t3ouDVyTU2UiB5RBV3JJ41bzTQtdBcFj",
  "key39": "4JBnTca1fqGxuW6RGM2L56JzXjjLxuxExh3dZVUa61XTz2ho4hGutyLb2BuXtYgsq4JQjxQwCxTbGhJD5ScNBnBZ",
  "key40": "2K64geC1sJGCiWr59NMNQejqNJJ6bTeKnEoTTSrnwnYDYQ1QFhkRdzBGnfES11zh9DwRhJhMpDypD34HAA9KNfrL",
  "key41": "2FR6GPxRdeNWkWwStdtipW2C44ZcZzujARZLHkVCUbREbot5yn9WvjjsdBETH3QuBw33b652NtxmXvApWGPuScZs",
  "key42": "2CnBX8UpcrrH7s1oy32JX3dRR7gBTh28hvmGijmK9R7rzjwpST4mYqUjySncmZDxtJfRSzMz877h8yqSmtvQxNKa",
  "key43": "4geKckE8V7hs757TJFXnJSHnBbJBwx616PicZgz5vuMgVKqNNBiCysySVTCXYJHEKBu9WKcSQkCH4gGTPu13HFeV",
  "key44": "2UA1ocY4iphAyxbnZskhTjtokDXZVpMdbiC4pPGWTfystqsjJ66EojhboojGQGvfudU7fZuYKHpGuhowzCFtugSb",
  "key45": "3XRMKAQFsjMMrBKZZgxksMa8TM1SJkWgYMYBkaqrddFdjUj2d7vVUVvsuTpGauDZwSGN2pHcKYUinDZNtB8DDwJK",
  "key46": "5Gf1QDGVNaLrN2KGcNq4qm63ygN8ajgdf2auYnz9oWJ3ue41aUfPR5YUgHUAX6af3o2823wKHrVUsY3DfYkt8VaN",
  "key47": "3esjSeeGpqHfLEQXaVeBoyLYsWermAQKabw42YnYXqf4HqWK8GwmW7EtvrQWcVeCgcvYXrpGozL1aSHZsDxxXQus",
  "key48": "2Say6SX72Jwuj1D1AfHuyw68xX3bCEnwcvXgM79yKCBeS55VWnqG8YKKmggpMdTeNwaf9bYEQcdSwvv1K4sMU8wb"
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
