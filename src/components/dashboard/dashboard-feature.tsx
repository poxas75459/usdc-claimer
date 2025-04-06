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
    "KXaxN5ZYjmkjm1r6DKrPvw97gmTLnwB9vMaGsRHN54my1MoubLHng93DLwXkgvs7VxtaygYGcKvRMyPfb1on6Ub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "246EuNY3a29wta8sgBuFfy6CDAvhKkSFfPbHLeiSGJXx7EToG56Fty6Zv4MYNxsfJ3SgDQNNd3z69sCwiRSXzhEc",
  "key1": "32fQaKebinX1SLwdjSQ8qg2rxRAyRQpn95cmnXFXLDEBYCNDmcuS3BAx9g7KbNGWXCnQiFeddpHkaL1GLyt7a5WQ",
  "key2": "vq2NQwgzrMRj3s18zBZmU9hTQhob5jJfqP1Zwd8qSRJF7p6TMgdjQ83K78k37VF7zDrzrQ54TVvXZzFP4Xp8WR6",
  "key3": "2aeHqBGrQTAtL4rZPHvY12Eatru2yq7vPZFf4DRjM6bdzrerz9YdRY3gpLUhokpuusGPxrZnvgNPGWZzPFDPtfZ9",
  "key4": "5rQr5TTzAtCVrYi71rEwji1Vj2qx9wG6uhkdpyTkiCRnZUf4Z9o3Qjx3TM76jUq8R2xxGAmHui3PLykZcxtEQw8X",
  "key5": "3wPK2urnqcSn1eLJJUBQyKLCusxjb9h22avx3Wu1tRVZqmY2tU9J1XtWsWbA743mS7RoEBa3sxt3sAyvtH1Y4PHZ",
  "key6": "4Ta3zF3zVne7Up6ZCQ5DFaxj7FczbCCHvz3az8mSQf9iqnPTJkag4A23zrJRKpFQZoyvqixGq8Q3eqWUcMuyrBdW",
  "key7": "28f8ByCnUVDMVxvKSXEhypgvAcSwXMqAJPrBb5E2MhzCzSXNAmrAjDcc46SwEpNn1s6yEzj7QbmgHKP6FCTeB76w",
  "key8": "4h9BXhszj1N9V7jecbCijxkhimiCbLTUPSsDhuLtEW1QYBLCcYFMZ5BAAPxd4keXdN5EcGmyZsjQd6jLxbRJYApn",
  "key9": "4KthRqtuxrXHbQ4j4sq2pkGQjqynTqQBCDQAij5ikAeyXdjDLHKRv8ehHhTkGX51ok1ebN3rUbJasXJ9s4fAZXWZ",
  "key10": "4PEowQiCFtDeBqzpgaqz6v44ZrCaHojRupvA1eqKvh1PdFphMqUA7YGuyMDXwWAXAaPNB6xukqRUX9dRTy5JGeic",
  "key11": "3Tpza581Yevu8eH1mtk9tuKfioebLUvFyL7sZmqTJbUoxAQTgESWyAyME5R9dbJhDTr2LRNaKVHWDRSSTcJ65Ew",
  "key12": "4j2Eabt8sbRXk4cyUeDPVLNdMumuGicrmRfUMLqpM4naqvUrwrJsoDRcdGyMtKDCMYoDSaSYnRruqbjEkRu3wLi2",
  "key13": "39nYTnvvndfcRv58eUZqEivgqnaKfPZxtBmZXJRPXRDgzbkQghEbTctsRzEB6BEpYtJK6BrMy9v997AtUExCsaVE",
  "key14": "3A5ST3dindNsRP9YV1kDvLP2LNuZpb2xRSRDPcKuBx9RKweFpqVrWyrhiQEmFyAnUt9AZQ7H2kt69DwrdVtrjT8F",
  "key15": "4dRMhh9w881tXMyFLarfDsPVJ1KXhhC88x7DYMVxzjxRqTqiqB9FTFVxRQA5ScZfEFxcYjaBpxpUGnrEiBcTP5av",
  "key16": "3rMSw42cos7bDySkAHzqSZzBn44WDexX9G35VW18CaQXAHUL38JNqLJbokXnkC33UizZGarphBMhvYXTbDXTais",
  "key17": "4p6q9RTCKuDbzk4co4BpcTxBUQYaa4U1YksREvAcBsNK8fyDLfvYqhaCnK6BR9FWrDhjVUC8PqP6n6SFjURBFrib",
  "key18": "5whsU2zRY5JAfXkF9EXcTxsYGZZgiKSN4B5CZsMupDJYaqHD5Te6sVMHqSbbzQeJXHwtuopFjiXLtDjxBa6NmFxd",
  "key19": "2AXfU2zEhfqpJmfy7zZm9YRaTZt6aPpsryvN9G2KffemocmeavkRNZjs17L7ZY7Bn3XKyGF2iTUFjTGVcDCq1z94",
  "key20": "V3xMQGtyeWEd8XY77KhCDuCFCrTPtLUv53S85R1m49mKPvUp8D3bPnrUAhLAwmr4rP28F9vQw3UeQQFiZHoWSy2",
  "key21": "32m12WxjMkboQD2Zc4w4WQfaMk9vtcHRFbUUPe3uqC9JNaiTZxNvxH3jwvJvkzbAv7fv7y6uhjMuLMHnr69DhxVF",
  "key22": "F1vFwScuBcvQhdhdJgh2DYV1XTRQzaqwmGeTmT5sPyRhUnDk75WiRVt21bFczL4vKZppAmP5qaCtbp9PPVuwzKJ",
  "key23": "2GG4zB5N8z5ThZ4E3av62x6N6eDGYUjeVPvf9u8wAHPMD2V3syH3hFj8hwPn2D6vfnARBtfcmtrNTbFjNWjcQdAS",
  "key24": "4DftEWsRgRxGJ5fmARk8AWQ8mP9NG3GqatVvoaDJShvYHnyvhJHwCP5xSSzfVtrRkXY5yB53hd5ic6c38YYcyfdn",
  "key25": "PrKuZHLqZbfvw8R9EnkiUpxRF5YQrjigH5aU8AAy3Suu8PeFKJsnrabeuvM4qM2geaMDYhvCcBaRok1g4jbd9AG",
  "key26": "qaikSYKC875yqUA1gtP8iiEYZfsXQpDz2vJZw4nTRtnDeVQYmPPSn7hGJ2siqwH46ZDdBqaPGR6nVkiWhXUD8xV",
  "key27": "3s2FAjdKajeDF8HrgAXiKXZ63z8rpw43HiRSHp61h29aQTB8chWvNmzmui2qUZdbUuDAc4a9qSHL4D35Uuzo1wty",
  "key28": "21JUXwj2guh5zzTTnrxnTYxaQA5khLDRpr6RRLs35KVUZy9UJUr3wQRHmEQd2WWfQh7sTSEWextzPLeFF13j9A3Y",
  "key29": "4txT8mPAMYqDwgKGTbQsZSMgoqcqCXw7w8CyuvkkD7VzNmqtWG37QEDi4YkApxHD4e45CPZqChkqaRcQuY8KKhtz",
  "key30": "4L36kAM6xYFRgE4qhborgEj7i1ECL2AsrmKhJ7m5txrfZnpCKgu3sex8fTqjxkJSCBKtHfsVfcDnk2b2nFKGnFfk",
  "key31": "5s2qpfy3z6GmiEnf4wqTuAeLC5cKXq46zX2QUCiqKYLMHPUvbRxJnyU4rYo6CLk8ddi4AGbw74EvE91mCmNtfx1z",
  "key32": "3by3YDzk1bYhr5SoopczJ73Q8CdDMBfycdjD9Gr8VEgvVZ4GuERooKeyHBn8VZvHkaxkQQmfFNxy2TW3gcScDe2G",
  "key33": "5q69hWvZrMdPUvjpeCU1JQ5aCy7gQrzrHhJaPFYV9tgKLs9n4TkYhXLa64ikfXiM6dLGA7iyR4RWFtu9ZNJXZdRz",
  "key34": "2fnAa9U3RUreeYBvX27jqREzzSJveSzEavtYRsEQvjDBWvttcaUKEqxSr8hMZFXUdcK8MDBBGoMaw7x8zBqkVZu",
  "key35": "4REFj68rFCV57k2MMK2s1r5ATzbizv6GTe8Wn2iVxrtVTbGYuk2Mw6kXBoc6om4BuDtPT3gcx5Wx4Xe2XanvR5pM",
  "key36": "QCC2nNneeg5kEpPQN9MrNyXmmvHRB2BZidJTEGsktLyLfBecWY3xWk7PhwqVCyrNqJu7HC48TRcKgGg3AUpj2cc",
  "key37": "ED1QzfPQBub65Y85uh5wkx8BRXQTTwKuTwBCGLMymMPKopNy5yaKZqrGD9bpQLi9SkQ4nymPNLqxQVgfqS6aeHM",
  "key38": "3aLoeSgedfxwMhKqnv4JuyDFLs3cK6KwtzXWnnNHsjwVBxhRwJrbyesGhvTEymac4w5raGzvdTpWhuT1xcNEwd2C",
  "key39": "4gmnzFBMtrj3fzJJ7qfz3LbkBbfTbZ7XYkG8dqvdJqtJvQoDVgNYebVUVUpDAdhxVM7hBNQmchzXUzjbERcVXpHJ"
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
