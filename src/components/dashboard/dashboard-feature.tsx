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
    "nyW7R5yjcH51Gf9gpAnUgf8RetrNsHtRkzaE1UXvCozUnxwsCR4XaNp1jnHhaKpHZjiU3qK5NvhwbyKYqSGMgKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TPaAbbBfTz33JNFNKridDgkzs1RMxU6XtZzv4TeKrLMpfmRRzLKgYkCBehQLkiQs8HLYNACqrWUeFzHZGCAvLAH",
  "key1": "5FzdUmpeWpyqZbw4d8xbMrmciLwqH5jSdj6ESRETdqfCiWLEgbqhkGiQYqXruKR9nFFCNgqTN8a7S4huxkk1bXan",
  "key2": "4fbdse948ts4VuzLzqBBBBjkkuUntFQgHbLnWPeMFaYKFQXr6iyLerCik9LTpJXz2iUsstdPeAu3yV5NUiD9TUGk",
  "key3": "5sX3aumDmQGMGPvc53jUjJDZK6maBJnPDme2SpQRtj5PcdUWatRMPtfmATqWvkLtNJrP1NbS6Qb3BM1xeCERGLFg",
  "key4": "42qFf22bGn8sdFw74KtuNKrFeDhzoCoiN55xeUmukAGCqmt4bqmjrZf3XZUyfXpfBsftnGU9SNxk7uvwMi1nXnM4",
  "key5": "Q37qQ9tdsKxXGsZdx2Z1UjRJ3pkZgjyspC8L219cQSYfmzmz9dQeJ9Yp9ZR5xBBdwxRK4CvDEND2ZZ1ZdVcmDWs",
  "key6": "5nmNpKjnMGUUnjfr2BxYA6wJ7QmVXdWbS9kbYKJouFW1SKDFdDXFVosKbve55icSD1fKUz9GN5F5WtWWuYX458Tj",
  "key7": "7HbEkhLMM434wzRBr41MDMP1pHwNWtpQfPCC8idj1WdJ8JEHAQizpe9XkMStW1GTJi7MvUtWyq8f7MD55zfzfky",
  "key8": "2XEbVDq5qSuSjAc85h186kBNUi3zZUVL6PPpYLJx3f4MG9bhJqLfnyFEynQriMh29kgpfeAzTRbDqzZDNY2mdydF",
  "key9": "2pBkNcHvwaXbe1SejxVPfupfTKaq1tp34qe3t2Bc9gaQbtotBwq7ZGAnaYfEdrHxkM4D1KLaa9uCuALqJ94RR7n9",
  "key10": "5WqDsrj5rtbdWP94DEVHr3XUPYWctVZcaDV9QMKeFpS7SmJobhyrJqHW1B9mb7Arry2BYCZbUampGmqdwxVHqVaG",
  "key11": "62QBLG99swMNEtH2k6zXU8KBjZqnj3CmR73Q5ovHaHiqnC8Hs7QrEmM71MVbAjyPRrV6DmPfWYrK4PL1MSLxVvSD",
  "key12": "4UWQzuFsqAiT65gFK5RJvJMCeWN2Pd3GEG2kLrJMphPyLfNnsYon8UgV3yioA5mmrT3pW1PpUUPKC6TVGVPwM7zd",
  "key13": "ZNjcsKWvYUUP7f3WktaXyoK2tQDGgBjLmuxEM4MgQTUEhqvXBhPtUUwd2WiizAkr5GgTgtW6en6Bgp1kj3NyWK8",
  "key14": "4kRKA8Y8xuZbaqhhBTPT8zDXnqUBFSHEGN3T6smbU9kZUafrKn9ALbspdpv8ByQdVvmUjsoi9gdj7rcoZaVG4izH",
  "key15": "BZbF6YjR5FoQo2jM77Bxm1wt1aD5cbVnrxa2PbEndDZJmwZ1ySBMq92tvhdsAN4pzAgwvMQnUgooB1dqho9wSYX",
  "key16": "3nMKV6RFZaY57SRXCNUNJcanxGvtbw8KjcjjvwUgme2Pt2ANLKSMCDH9Jiv9h4SPF1249MTRfde2CrKHizxL4zCh",
  "key17": "3QsK9KZ7xZuqG5HneaEFvSPZkJMsvUXahhyU3tq7gtzPmrVqayYyfg8o8iUe5vumMMT7NqaoTtzFsWqQvQRbuvf2",
  "key18": "4eTinwW88JBCcQLrJPeSZLEbLfeu4JGvCx7RJ5pgVNJDNPyDcesnvdfuxWSJjyAmCSdPKcRr6gPPnTDo4rT4rQFr",
  "key19": "2ehWTJ9buHrKHj7ResvEFSzctfx8ckFytvaPWsJZKqCbCCH1cGRQuM6wEHz3X5NBd5U7Drz3n3Nn3a3mk4k5LaBp",
  "key20": "42ZEk1ifNsH73AVS33Uv3QHgeQBjR2qGdbbZj3Bo3sNWaut5oDDibQ8XTCp9Xwvf96YqC3N4aAwk2GxAHctmYSHP",
  "key21": "3fuCV5UoYbaPzu84XasLWSdx42vuVxsxrZyLcjLhoUp2JthRRrRw7YpYriYMQWCyRxPo7sn99SHZcsToAUQpiM9w",
  "key22": "4WRZxK2atkLHbntxWv2y9uz3qT7aSzULa8tLm8sKLMrXn8TWwDH8zDYMy66yWKx69StZexWWu2iyMTuDq8Gw5kJV",
  "key23": "4A46Ki2EfdodFPmc1fR72niBrQQMAdZeQW8YufWX8mom5DhEbzxj2afiE9eFsTHEopC5T7Tg7zX4CsfGVHmzihSZ",
  "key24": "3rqQugfjKxxnSGmxhzLFYWz8oZ7RpST4F2qrAoeu2JGxXMv7qqQ7bkY67AiGM97f7mT5vBhjst1QuG6PfmTSsuJo",
  "key25": "2BE7tw5t3WcvoC4b3UPAyxPyYCeJPkfpgu1GseA67iPLnaiLyoXAxXFYPGqS6L5XsZwgVKueYCauhbPfm2PCqBrt",
  "key26": "QXdmk3t3fZMQYSDcc3MwxKyZFV3n8iNVvA7cTnuKYL7wEzQcj9yB48UPE9cebDt8wfzxVjrSfGuaHYCoBmaUJpE",
  "key27": "4b8grKB9E6k1camtCtAthEkfjKkswnZj8r5wFwCqrmborUsveJjcJLgDc1wtX65V1cKHFs187GeLvLTR82WmrHeB",
  "key28": "7vtEFgYYUnM7B9GbuTixyaMwANH8A1ZS8PuFMwny8GvRp7jJv26xRa2exB4sRadBD4KHki1vDWoUGnzrLRHXbcm",
  "key29": "4yRsfVFL1dwJyf8gbqyMfRCcQecu4348Wcr8sPRXXErfg6yPjguMZ1ZyZxD6nsKmkvV2GEsZzQohpafjnn5NHiwv",
  "key30": "5c4WdYvt9L7UoKTrgmYWz9XRj5RkMnnvzfnPPU9GCA8EvZ3N3dzgecZf5h1kdhVpruAU1PxLzvRa1oRvPdcqZbnP",
  "key31": "5A9Enq1VHs29xkA3NBSLm8qJ5AUHyRdtdvS1hJFNJXyv8XhRSLqzTBfQxceGs6HeWnFGZg4vo4ce7zwW961zNaD9",
  "key32": "5KA5qBPaQovzvH3W3GWadFs1kjE8bWEUiT7fgmaqphu5EoTsGAGchsEJnZBgNoiPgi6joQ9fRBciTTNn2ofqR44L",
  "key33": "3Q1U1g1gQ4ZgVpQJG7zAvpdQ4UukuY4129KwVjpmJML89YjN294mune96fnYiq9HAAHdbZFmFtqsG6K8cu3Vx7wq",
  "key34": "4NF7b8WE72wp4sQnwjsmoCsbothrxjfoNxaBYDgPNWBkjgfxrstur9Q6NCJdemws95AwP8EK4dZMPJ1SUJQdnKWC",
  "key35": "5y6Yv99Fgy64o38isZbXmv2aubAiV4cVf2mLXF98SrpAZxtdw2Yo4FoYL72sUGhDBAXynkv6iBvT9fwZwX7iLrHH",
  "key36": "3LrNJ7VCjiiSDCjgKYRcAkEYSM3qXVGxkarr8nekRh5M4pzLSCsv8igHk7tw6SWPG5Em69nod1NawUQ9whdDbZjT",
  "key37": "3BLE2Fw8s2Km2oWrR68e3pNP12JGR9K2EUN7RF4t3wB7Kf9P51FtF9rHWrf3pyu73dgFwmUygWHyLNiaLeYWqcTk",
  "key38": "iD2zfo7SgZB5NjpGsxdXwW1JPhDaaksH9yAd15ASjXMio59KU9ZSxctGHyCjcEoYZfZ5N5781KH1J7Q7DUfKbqT",
  "key39": "4ZexZaQ2Y8GjDjqQbM6GjZJxZUbhjFmc5KKvAwHUWJ575yYaToS4e17xRQryqiTA4atuijjyr1bHdpb2gDqMSkfC",
  "key40": "2gbDNiWxZgPVSVbdLR62oWy2u59PWbztwuwiM7F8ezgyu8bCScK3z2eTR5VsLyWHMfi6gbPqey4kdJWKryc1LqmE",
  "key41": "2kqVyeSpVGxrppRUUcW3efr2WD88PrT9XyJmPoizekzNggACrDUNWhJ7qKTvqiGTWY7dBNTKnWRqAGGj3q6TVw6T",
  "key42": "4FHCxhSQDBDfSVJ4s85Li6eXJ7nvD5rARhTQYnG1npcZxJKFd5EKAvJ54ScLQWPsyEoZeHdf1NPmDT8ze214Utgw",
  "key43": "2WH5Awwx8RfBzvKWWnFrgzm5SeUZHtA7dvvz1VZqChMBzVwGn1EFiWZzQSj49nRTm3SXBXaitcmirP6oB88iKqqN",
  "key44": "QXQUswaDmriAW4dajGjJDcQSxg7FPdUwLnCRsrokVF1y1kmj1RkMeTXadc3M6FGfFrnY2c96AFZgar2PurvJzth",
  "key45": "5ipcnWavSo22LczUkWRydkLa2MGXjkqr2voocL6zaP4LYk8y6G19ydREMBNTHvCSsvSYMdintRdmU7xoY1X9ZBsx",
  "key46": "5wxQjnjgMcTSM5e1ZKGXBYvwd7ENvhMukznrb2hXmbAcPvj73qDJhhEqh5wQTYGpWoAz77X4y2iRw29WPZXyQdgB",
  "key47": "BWgasKv8vfG4d3toZye5Pnz5vBnqpSocqaPzA1GJYhmtWYMW4NXep991rPhBfSs3iAzmgtkiZj5rsGYUx4cYGGZ"
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
