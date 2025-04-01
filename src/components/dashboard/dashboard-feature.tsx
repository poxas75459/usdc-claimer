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
    "f1AFdTZyEgfn63CGEVR6uytHn6dMhNPDaaU2GnuFDwz8VpvUKjF8FrRJjocg9cvvv3PHixRgR3S1FB58syLtcr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZrxWgS5o8VKrQRb1EhssJczfxmJtZuNCqhWUFYHo9MPByxHPsVDjkfQrVq2APjP6ht5W5N2WQx1z32iG9rePvac",
  "key1": "2ZfNKLQvLD4kcqJLQckqujeLtFf8TwdpBoMg71U5F5ZSdxG524hPNF3MihFgS43qfLDBVhPdAh5LMQMpAxMpY2nW",
  "key2": "2mQihXGfbNMFHbh52biZrcHFYjAmJKzYswhsHN5aWsUM6C4qzcD7B45fiStFNackYVP9yBK6KnBSw7ZZQpY3mdpj",
  "key3": "5TVfZSA6q31isPz8fHbnqeYA43mKQncXoeibouiJYzKtAT1jLzhmCTf11aAm4X8GyByjGxtpyZTUE9RN7aW88hJc",
  "key4": "3nuJceAf15DgW9xq6CeaDfpkgNswSLX68vt3ut6h8rubwUtgpEQgQbJCTz7FUVVQNvgFHSMYjFzwPQkvBWisahT",
  "key5": "4MRbz7wBNyb8F1XxL24QyBpQ68CcU4QF9fBzsVLaJvxoWe4AVzZPzKEgpXzuXUFzeDmvW5vRFrDvmRRB5BdJ5Vb5",
  "key6": "fFknUuP1UpESZGfF9FPo1uUks5qEGiZxJ153FSJMDJMBpYYrmkaKQkP1UiSfmyKDy1uVUXNUP6QpqQNaTDCWWtG",
  "key7": "U1Bh4zaeENiuCatXHM4fBCEbCvWVsUTW3QAxwEFmvGn9sC1oHRM8PStw1hbAyFtgY4inu9gKGJpwS793jKksE5X",
  "key8": "2BLyGWQNjethHBeZ4cMHuquY1sM2r9tN57PtTkNJpT9seaooWZW7SYsaWUKQfJa76RbhPpenoKYogP5dXyptHqPC",
  "key9": "Szf98GBLioCMjpsncJgvZ4o34kxM2RH5xAaPkHEKsEGx8BGLq9TmrvExtN5h3cDqb6ssCeJXEzBfWkym46AVMTv",
  "key10": "5WGfF85EdeYAHJGNtKDffkeJkKFJATSf8iFw21R472WSDe8xFyhbF4uYp7FJZ2DAAWpeDS5jZSuFrAg49LBSAFSh",
  "key11": "62pjGtq6qrJewvm3fmEjxdVNBY7qMdiMj1oZbTMjHSZwHrr2nS2QHers2RuL2ZmJ4ke1fsZ8oTKoB8tuNxA2qqgd",
  "key12": "4CVEnsRHN5kp37BN5MLGqRiuo46gbmmhtzJJ75XuKstJ3pJXCx7heED7MuAtyeY5rYB8QgiVaiVtoRAq6auufmnz",
  "key13": "2h8hZWNRbSg69cHHRLEh45iKvcuLKaqUAP71GXoJuRBSUnFT3naF6SYbkrWsUt7ayX5175xax1Cw11xg2623WugU",
  "key14": "4E4FMxmA3xPv18shfU1zxGQ5mfdbpDNj3USh2udtdHggRUajp8iaoUD3Fpj5duLY2WrGciqqsvcQw1y5g58crmjg",
  "key15": "51BrxjyEPPaQRNtGCBCSjZAfGBSmJkN7Q9hLjfHdszkMBpwXVNgJC47Jc9qigtqdK2vBLdedtYmv75qs9bdmqPWx",
  "key16": "26Mb3CXbBBrfcua9QAUgZKeLFRtSWt9xQfZoGZLbqjftqMLKqcAxhkrtyqAsPHQ6cqE43nwCFbALe2E517jZZ9Ez",
  "key17": "m7BnnfatDee9M6HUdJjpdGzYG9kPR2Q83GEovyKEQvAScq554snqtU5xePLsbcCjcn8N6ew2WDorQRiTJuDuTGt",
  "key18": "3FqgvNkj48ZCuzvaMaMiRvSLqUbWNV2ce2mzeEsYHfWvf4V2Ezo6dzDeCU19YBkdFbihFfHDiFHtug6m5g7VWKVE",
  "key19": "3fsPqnHpbeQzChmtmPaSLDZJGNHnuKXkoKyoX6nJ83bcn7i9CFXW3Dr51hLs4LPe8jR9yx8bGM1Kti4gH3wf9ahm",
  "key20": "3pn8upGGhD7Gkhrno7bThYiZHsF2TDMAN1Qt9hjpybv2ubrUT6P8pNpC2PAjLkSy4xJrHFbKfpj5z4BBr3xyrRKG",
  "key21": "4xG324c2fZCo31mPnMCG4TRHQVZgrQGg73NnHFjYdKfDRTc6Mk7ad3tYtNLZhMgATV5rFHttDeGuNRR842K3cZrW",
  "key22": "2bcZXdDFZhYwEXmDCgCLBx7mZBeCDe9o5Ykd6kfxZNoHsoucCD2K2S6Qb52pNoNXz32bbbXnmqyf183jSeo8Sm99",
  "key23": "5tTCUZPkm9mDsiAEvZ1a2GPdoVFTVgUFiBT7bVAR25G2zHCNHZqJVg3QGTPEy3xJwy4xhKf6bUX9KuwkzPBXmq6L",
  "key24": "3kE1K5Mi4zTgN6jd5svmCXDwmQ7z359caSMoYsv9fuNr1e2aMzSu7QWRkaayftZ1rPD6FcSRSk7dp1y4sYHbip5A",
  "key25": "66mPhXYLbEQ5J5xbVqwSuFYhXjtEf1ngnsNM4N2FTskG3NPHnWoDP21jwCBk4xoDg4C62XXicF6xaMUJV9Yrcno8",
  "key26": "2uRxS5tDesnXPXG34yAzXemsBDsxDTgyWugJLjZatRvkk5nMJRF4BHtEiNVEiU9LjMEG1HKnJkod8m4JRGBWffUA",
  "key27": "4ucHJZNm4iPU8dqcwpVo3g4x8XKGSFkwnvs82muVkqQpHB6XgZT8NuVzUTN2RU51PK2kGNUCjAz5ZAMmq4RbJp5V",
  "key28": "5CoJ8iPsQoJgFhkCZM39vkKJbbsJ7U5GvZsThZwNevJ1Ski7q1HtW1JsTzgcfyjEFwnDgkywbffeAJDFxxyHrB2U",
  "key29": "43ENfsRt5ge5osVNT9JmpqYjTjLupX9WBEnQTsEv4zU1vBs3gKkzRq8FB6L42EWSMjuHZQSKKgzhFwYXTABaZwmw",
  "key30": "2XSx848KkgNjNJZULrdfgvTBbvuZfbazFnFW3kLBWNACpWgwg9JvspBi53418PkMha2VwMwaCnMg66BDtZMegdJU",
  "key31": "3N8uocrrWKFjTguhigRkv8FN3eCoJ3yzfuJopD66zydNmQEjhtwfecAF3eK9B7cXi8GDejKBjtWWtn7f7xHN8cEw",
  "key32": "4croE2NSk7TB3t5Ctxs9b1xwk2mdfC4Le3TtCn8gk6FwasGLosKWfgfPv7NGtxhuxQbNFiDzjn7JYG3NuikBzqUo",
  "key33": "3sxaBPKekcjz7Nc6xTozKj2Q8g1hH9myxPtp9XSUWyakK3s5C4oU3qtp5bZqiV6kLuiTTdRzDugDnx4P47tLmAUQ",
  "key34": "4M9Byq8ahbX551L456azuuAnkHrKNUUwJhRQ4gicvvREh5FnoEjcmPNtBLbDsWWEDAB6JCyq4xZ33SYxYNWYXcnN",
  "key35": "28TMETPs9R7ajRRH5MHbJ3LB8tPXpqT79APDAZ1Lye2bP86GjY8gvxrsLytU5nbztjsrMLLozcZ6Mxt3eqTyvGQt",
  "key36": "5X3KBwA43kAEpieq6d4T8rj86MCbsEyERsoKJmnNZnr8r3JyonnsyiSnXH9DjV7HCd7eLqEH4xNfBRV54s8iYM7E"
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
