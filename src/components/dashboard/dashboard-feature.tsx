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
    "ewP6fTZnpge8fw7hbebFcFy7J8DHWAwN96EHjFAknpcQ6t174YNXJvjUj7z3PRYnhkA4SjaqcYEBgCfa6Nhx9pr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MYCHLhL9pTT6nnnXBfMkH9XWx5UwvmBjeQouVUTP1Y63WTeFqujYks6Uo3oDtPwQppWDCv7Sa8S8YsFPEkDehtL",
  "key1": "ao4x5pHCi7Sknn42BcHR1jNigB8dYzdBK1P5kEL1WJnU1wXmyjb57aAnCdd9cJsYkaqskrzjGXku5bckD1zyrQ1",
  "key2": "5BAzRA7ymiZRKwo58ef4xuL6UjKUXrKogvt22XByKDyhYSdnLfG7JpPcqNt14ps3j6PxJDy4j2Hj8XWsu8Vfk7i7",
  "key3": "2nYVoEmMYqZr6PjaKMKW5pDE4adQGvbJopQzXkCaNiiQ9quHX8Jd2aqEJsr6iaRawAh5oM5iBuVtQCxYnadLUWS9",
  "key4": "5bVJPf6DbFsi2S1QejFgKU9QYitirhpwtXBKEmwsEgsySJqxrkzEwAd6pHeeX8pkN3367M1HZvM3eWPuLeaaDtyY",
  "key5": "4x9vaUkffRJWXwexqyTECKSEojVcBYebFgE6ouPdJkeGsHcDAvq67fw9KiwmWB8hgWF3ymhvdmRPhud8kE6VbPEq",
  "key6": "5ASF29Bq8tbVPGaKL9QGebsCtYeXJ3V5Mv6fqgcWtEGtew31gN7A3FVsewBgP2y1YWc9rrD4MUhEY2bi4Ed1Bkme",
  "key7": "5T6ACEiCCgy6qDfYSgFyjkQcPVBTr9B9RqBjddeiKNLSyAZY4RYtRXaeVHT9zKVJwX3MurJTNPA2YxewhQvBzaSU",
  "key8": "4Zsw41J1bxrExQJ18TcDvjiRNXYoqFBr3iE4J7QNU2LF5AxXexFo2Ga1YSA6JeMabZ6tPPkDANmcvtppek2duUxF",
  "key9": "2vNFR9ZCt5xoxtWpnzfJ6pQeSR1jWgnCJKkrpVmnjziyzN829h9XVN7xyF5EdPc1JRZfHFPZTsXBsrHPPmtemrCP",
  "key10": "5EPJsgQGghR4nhUCS8sScf6YuqNTX61fbHn7HZKTm4ts6YQmW3VdXLmhYKoovTd58NQFAFAtS1W4tMckMXMMBnzT",
  "key11": "2VTViYAb1s2mhSaGRXiKHYDWKQc69wXnFqQ3qhu48tNH5MvG5JwAgDL3R7Aq91kWa4PwodkCcxJNeMxrsPffwnpU",
  "key12": "3XfzxLcgvZDD4ueQo4Les9zuFT98HHQxP7mbesCR6qdnJP9iUZGVj4UxzEUpiGSeSV7FMQwD96KLpkhmBxq3F1ij",
  "key13": "8fdqk4yCGAMLhhVmhzndJjLK849ey1PnjKBrQM5NUJyyozcWcBFcrEKaad4R8af3p8RUcP4tCi8yrCVEh6BYnKa",
  "key14": "3cAgyL5Q6XdjyszcgrR19BLifmk6q5YS1WFgGuEP1z5sZMRVgD3wRvTWdKV5neDmVRxX6HyJFJmm1KQ2Riu5x9cs",
  "key15": "55g6iK6sJzCvwPj6mE6hYN9XrfAp9pF9iDjcV75zPhZfjqHY15HqQDiHmqGEei16GCS83JH7XUf5CswdmJgMB5Xo",
  "key16": "3xf7VWbaiMCQ6cVvWuFLuxKBu1dESr9E2EsKYiroE3T2sdKeZDddRZcDokQ9Udgj7mnQssW22wNcPy59fpRGrMVh",
  "key17": "4V3up7qmvKfEspG1soa4Ww46Jc2Bx8GV4Lb1F9ey6qQ29Z5vDXcBCCr9cKZRYVPofCcesKb3B5rdfHLWUdUiELF7",
  "key18": "39LvqHgB5SsgzDVW8YRcZrJhLxSEdx5bCet3bzTkUdEzQonCKZ2kRkRXpvnxxbFRGvULBq2EWyHPAuqsySkiVhCK",
  "key19": "29rF48L4tgQvBFtiTXG3gNdss4qD6QiMKrtF6jnNo3D6y84rRb5hW6kxUaJ16sVicqwYupxyA5EAF2rxTwPC4GRi",
  "key20": "2nhYEoneMsDnPfMgxJMmTPYFcRgJnUABjk8SqgQqfCcM6jJYYSndshe4LEmE5ojc1gLUbZjiAoaMpmYRCh3MpqXs",
  "key21": "2bwefQvNXMseKVE9mvQjXkBeeDYqXiK5vDd4oBbU4md7QC7bmWrk1F1PKvqTcZywhnuE3EcJMbkdKy6vcGXRcFDh",
  "key22": "2oTjms7RUQmkYxTnziKUVWEfCEweRgNkhqZqD4VuN3qTMu1LLKT5trnGxTp4ZLP4PYebnUT5z6V7RjPooCpprWAQ",
  "key23": "4gN3vPSZ28aAMNH8ytB8cgFbka8LeVChQoyyxW872m9ry7aGwHaCgQS4FeRQR5kFKDTsM8fTk1G4ojKXWHf3ccM2",
  "key24": "3RXgKsQuCYxyfRoB4iJSgUru8skv7yG27kUGPHuAPP6dgBdXWpbwrsCqinafAkuVYz3HcMF4iqHbKkCawNEd6HEX",
  "key25": "2PUpURFaTMzoHBjpt9Ph5Wc7cNshzWfGqo6f4PrW3eRmke6oMAf32hV9AQ9uDZzW1UpeZ3VJVz8j8DyhdKRxBjQr",
  "key26": "VfSaJ9XxrcPS4tq4FLT4gbFg3xivKHgNLti6jwQErBsLYM1PjmgeVXohM5HFhyXm1nVwESdLC9qwQoT8JnwaJc6",
  "key27": "3gYr9ppYEphDYik84VVvGKvGdtd9KGfPtLkK2YKCCBySTBAqwtF3N4LFFyUfMdFJncrweEpFEXSMoTuBdgPVGGCL",
  "key28": "4f8B4hgfzqbeDuJghndPsxacSLTrF2a9SnaWy56V35kUovqbaAGkRRhrZ3qiVRdNPNVDCqXGsmNTPCpw2wzhxPsx",
  "key29": "44f8eZMfwvcbqFUjGcAYFKxVTXzcUzktAWN57JL8bi7z5q9EQ6e9z6jniHeu14Zhzu9dsiDBAKxn77gpbKsMv9sb",
  "key30": "63WX8EEwoL1FfeHcyvinuK9k6osaSEQ1xqjqNWCjfo5hHzuyY58fTqFn9fYM1azYMUhffkRjke1iDZfysD9LuQZJ",
  "key31": "5QFLC4XakTVSbSMzMi7FZEjRqWQPiZv5Lqpd5RtVZth7EEZyg44csQ9Txu7nBGJbcLEa14Fjyk69ixTTrH9ry9uU",
  "key32": "2Bgi6gswEyCjsuWguKPhnW69ZTB1cCzhBjKuE8nwKTQw7VX6452f7sPTaitVpPCcuQkJYhHY5a4ufW56pBWwxduv",
  "key33": "4jx8fFa1bdsEq2pw1LfwxkDSBE5SNxcu6BjrmYeHXr1pKvGmUXxMhboy2QC2ZTczU5d3J6cevpB9YJ9L3fEtZr6S",
  "key34": "5QvPx44ppqoyjoKyvwtpasDbaKs3YghwK5VP58EtFRCbGmBtesTzYZbBFFAxiCajXpJeLPoYp4KNYQYDhTpKQvnq",
  "key35": "5UemV14M5YxknptYnrpsJEzZndFYstUoJrCmL78ByFPC4CphrLHqemK93Q8kC89h3Dy9tFKubbZ5czhqVKbQzXMh",
  "key36": "4SgDjjv85BkuYYsNsjnDf9BGmXbjJpj3z1tRRwiFjGZukihDHKqWQFUPGJs2WpBcTsqPLjnM562nbzbrAC8eMb5",
  "key37": "62sQD4aJUoie8kzE2d7iNJiwHY2uQc4mpb9KMCk8cMz2Xwxf6pwuLrbz8QLF3RWRYnjpTXKnUJScTYVaBGwaNyif",
  "key38": "SfYjfh1RdaFQB6SSfR34ycQ2Vkooj3fxcUARt1pFzAxkZV2JVAanUhFKDNCL26hfwpWBPfxigVQnzSXERk1NRws",
  "key39": "2inGbATwcitJg1TkgRFm7zSSC7gXvR7aKPGrby9T4p87y2qeNTWoyQ62pBwSyqiWarFE3KnK87pMfW6wn97kSXAo",
  "key40": "nSqutygt2QYpff99KDVm5HMomVUmekPuL4nBf9dypvg59Pq5kxw3SZQoFz7HF9TGjpZ1rKQKPScqj8osfLd1Hxf",
  "key41": "4evvnRaiK7twwxTcMqePutKo2VS9vqLVwFzp3K4icxsfr9xpv4GkL15jojfNJnnXCon8rqsDHYtP63bmBr6jLQZS",
  "key42": "4gTSQLDrrGXhGWBetqXtnukBVxgZjSkqipYQX87biBnpaYYTzSieipoPmE9B6nk7gF2ZeFCuixnoAyN73xwggBqv",
  "key43": "22vBh9TLycUQwBKc6p1a2z2Hen8kANzbgbhdparCK8QADzA5A2ayfNmUGwAsRix41arUcp3jtSBAqcceBJ1mDn6s",
  "key44": "5dsTnHYTXRX4yRVpuzkKB7vmDGpsoYwNxbKfHiVVQbzzM6EeE1G9BLe5yvb2in8XdASQJK3rTLYXrTF6LqbENTrC",
  "key45": "crfaiWApujiYGUu5ogyqp2vaHjWoTgtKDZagaDnsJxjCHtBrvZdg6UZCTcYMWLUSVwrxAupAQccrXUDf7R1AzUr"
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
