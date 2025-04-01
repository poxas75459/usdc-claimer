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
    "jBbevGUPCtP8T6tX6vAAV9Kb7udnZ8jcj155z7mZ595p7Gnd1avney4abpTKNfniQR6g2SNb8w8xfxJ5sAZsKa1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mCEXHiuEHBRWt6Gwa483jMNzXSophTKX7oVLwZo4BF1fccKZDB7wQ4dTs3zxFHZFqZX5AMgajzxy4FFZ7A6Ygv2",
  "key1": "2hXeetVzADqLPEJtEjPNKzTBaaAdbchiX8BnF5VprdoVQhK7wptXPhFRC2g4N5nFs3mMTcQg88N4HBUvPwmcb75S",
  "key2": "54LqfKjAYLA24Hi6qayRRSR3Bto72q73ssFsss2Bw9XBXgooaXZfFEKvREB1E1c5RZ3owHwSBhQR8bBNo4mwfZPi",
  "key3": "3gTh9ZotAoYg6rfm3Q1ycn2fumbvQVffrMXhxJszakyPrGAwxeuP8Ljq3shyp4Rr5Lk9jhDqB8TAWjc1vtq4aGet",
  "key4": "2yL456nC2SVsEf6CLXw4kdqAJcGajhxCg7bno3jsrVkYyJY3YHdYVEZqj2y5ecPLmojxL62G3cFgZcrKWzmLDL3j",
  "key5": "4zbN1NVCMbjUx5jmpj7v2vuh6k9q2HQauKAGBg9MaGNfiHY1nBpBAJuatb93YbxNEz2LkuWAiMnzph6BEeDJBYE9",
  "key6": "LSRdS9xVLfGrh8gwSPm4tyeE1tzA4wP1U264dt7jvUjN9gebbR6F3zxAV65k9ZcXMQ3bxc4WEENQakohw7Nx5UD",
  "key7": "Sgrv4QhUHpptiPcGRf23yabX4HFkFAzmttW5ACN33V1CZadgApPWrYhBYJdtBumfDSRkqqUSnJ9xc5DqTrNoxx1",
  "key8": "5zJyPqihh2atkzrLxypNMNLZWgkvvySczzbwkTKjy4uekoUmXrUEUTTPs1HTBrvbMxmxqVABuccke983USqc7sbK",
  "key9": "59rmYD5LhwoKUuGEbLAxPK48EbUtNiYs6w8BHGdD4CNDmqMArsuKfo2hiRSLg6Ty5qxURRgLTDRVQhinvXtQmEcF",
  "key10": "CBPJHYRpWJm8LY1hnRKfWp7ZhJS4y42rayfQ5GKTecNVpeprCDqpyhW57BeMGHi3dmiQdfXtSnX7K65Xc9sduTx",
  "key11": "6564XbTmC4MSxb2rYp124PPPgct65a6pjKQoVWpWj7DA2KXq4YPhWvdTAVA7FU3rf7hmpDzVZhr3MNny3SJw8buj",
  "key12": "2pTZFtFeJAzQRwTQjh2YiJAxRJ5iGCHdBarJYNwCdipTVeweE6r2rVQeDLiXQq4FcfrAh5fRgviRbX3dUMLci44C",
  "key13": "42ngbwhPASyKGNutC7TgKyChxC4WrLvgDDTPF8iDcUax1ZJMwYyCz1FLzhrKrRuZyM6XxLFQ9jPJE7XCjMEBNFVy",
  "key14": "4xbaubq4SU25Q9HweTFogVo381Z2NTAzFQnk17WYazFteCXyhqfoEDv6fKQEqsLKiQVm4vX375KZ8rMdyTFfH4Dw",
  "key15": "3d9MLA4iHGHaCU3TqHR1CJe6zD3Zueux3H2CpU7ArZL674comzP2eXhHjUsxfAQX1w4TnxxXDjkxFL5wCkWv5zsi",
  "key16": "gqtc8QfELofdsu4R4rn38RpC79LTU3aHXhmabk1HreHDaXNeTh6MUv1XZBh1Fxp2WXWrTXTYiTRqsiQsGqrXnbB",
  "key17": "2bEGdz8gQ1uvyyYEhjHYkgXwypYCDg1VCstYju3nVphXefffwwDrUHafURNhXLDyDpJN5QjWr98EF62FL2KcGTBw",
  "key18": "2xEt1URP853Gfmji8KHbSVzqRxuoep3i26Pbc4Z3ApmWZK5d8f7UhZkwVXAJA1mTD6QoqYBe5bac4C31PguppF4h",
  "key19": "2d4dJ8JJgjapP9P7BiDoupsoqapZDfmzqsiqNLDGdYw5ddQYeojcX9n8Qf3cney9Wn4XQqT1zuXBUsTQ7bL8KXTs",
  "key20": "67e5wrqUnRPai3qZuUuUJovmLvaDrnQcrEKiGSuEaKkaHanEkaccPy2yUqrUNY1uMvCmZj7sPDzvDJSdHpqewCtu",
  "key21": "2VGdKYQoyKNoMekzfWtdFwCP5egpngwzEQbzzqXdVdTBuYejBnWR2QjwUGVKgfB5Ar2Y3foUf5A2757BvJjmpF7G",
  "key22": "4YrUTqwnbNXKwmRzJ42LzXkBTBPb3swXdGLYBTkpDk3MD3vmLtKGPiHuQU1A6iUCpeX8N6EnGgvMPoArmXyfYUTW",
  "key23": "5tJUYeSztAKP1an887xkAosNaQKGyBH1TjoVDjKQvtGAUh9GbMTXhZxgoLzT1cQnPry7LYJqxN6dWAXzniQWBDbZ",
  "key24": "3gfsdELtPyisw2QWMhtHeeWy887ZiUvqeAUEDtQJBUf7VrGk2HfnyLBiACLX7ynDYrHfD8K5u6wfPRCgAfRRADQT",
  "key25": "2JBGoMBngiLPqLiotDVM98Wg9fE6PxVnypbWYXEEKv8XLnCXSzvNZzqDNdieX54Hj8CEpWGnvvGscHUMaK9PmcTU",
  "key26": "5m5CMzitZhZDWrjoB4MRDaWohGzDvn4eo723fkawNTia8AJEeR2AFapoama8dcNNnkTC6hLDHpe7GdukoxB8GZbw",
  "key27": "2pd7ryA69LjPq6shGgoekbTMgMLNcw7rSYruhjNB31YMa4MfgQkmQFdHWzhVSKvLz8H4G34jDXthhENY1kCDUSc8",
  "key28": "F8hezTxFxv7cVvawwqbu5ju39WrL5fnj8bhPkFRCiF8efqQRQPAr9VdsjSjSgiYHUuy5K47uLkCLJxMZ9xb4f5Z",
  "key29": "3Vw3y2qgvvjJjmsx6KrWK6ZVSzQyK6sXepUwD5y5RBbMQ3GA1vKfpbjNfAgiYdjuCBAStpPsFNqk3gpiyGTQXm1a",
  "key30": "5UnPGnqJi1AxVWCaTaDijWLSGe3T1enxasJNmPW5BPTSg9rrFPs8gbTUnqhMjpsx8GpguqppeTgPuvhncusFkvJs",
  "key31": "z3FWdvkoQop61HzEGRF4RJ8aLWCzZvkZ588JsYe9jCPtKeX7XU37tQbVGpERKfWA8iPqZQbP6gVE7uQf9PX8jeZ",
  "key32": "fJf41kFJGfYyVfAASQJiUDWzHVS41tSCPvf2zpKCiuHVp1vM2jYnmFhsr4aF5GxpZzUg4MnSWxNYdMPW6fhYyBJ",
  "key33": "SY1X7C4svFBfFjS6RahQq52TfkvRruZfUwY5BJker3bndzELUG1Toc3BBHrcPPdgWtp16757K3cFTzzkDfJLUyA",
  "key34": "3nwiigp5JZ4eSLtEN4HWA9khxMUC77AqUHBxvf16uHPdrVtJjs631YQVLGjvMFhPmE9GEaUeRjEHk7i5wUJg1Kpv",
  "key35": "3E7oq6QE6HQY7y5jYNzMrJstcLpGh1myE39uuPhPm9i3uiVuyAhWgdumqp8LqRqDFomCXksWBcN2F4Soohc6827N",
  "key36": "5oGzCF6bx6pN3n7xaEo87bB1jPzqQzLSNRfuE5EvXSk2hQfbyyjdPKyrMLW74eCpZvnBrPJCoW5mdDBQoJrxw4sr",
  "key37": "PJgoXXbCtX9QdbHgHhHdFn25i4JYbNStvDKLKCu5ZA7oZq5KQBcFQdnyc1oSarvYRgww8QVUPyhbrPky826asYY",
  "key38": "23suJPNYCFkGNS2RRXwVV1T3SyJieCtAZiGsH4qwaFqT7WJ4ELAwsgLB37odzAHszkcQXj8YmX9G3PNo7GaYSjUZ",
  "key39": "4e7gvzVcz1R5qtJzPzfYsrSR5YdPbcoCaxsRHhaQ4NZRKfw9sXpxFZjXq8Mk65aZYU9qsrPLpcXkxsvbUW4Nim2K",
  "key40": "2JnByhg8DmExWh4KbdVADCNXNmfPQK19RkN1f2qFMNMFzQ5ri9k3rm5j9zgbp45zVuD7v9zMFFr6hiDHJgF58otV",
  "key41": "4bkLmhfATcGtkuBwQuVEQgniDrXtyqbTUp7TFaiCLsvPBc8bJGGKpUgpZTgtoZCXgiib4anYEPXAxzsdXLZjSpoG",
  "key42": "aVRxYjpViaVY6jPJgAhJbDgJmEvGqnGpZ9EyGEm1nX5jHk1onQFsLJjym7sPyU6noBtsMgD2bAXqmkbJMUraWTc",
  "key43": "3GyBgPJSzHeZhQfKqFC5AMUxPgP6yHA7TJF6nYc4YeUKHnegEM8A11tvo2S8HtEbMjDhxjQJf64fZoEpLC8zDjsZ",
  "key44": "fBjf91S6LA3hp2c6wfAEj8kbn6TizLRFZd8C2QWCSSQ9Ndx6hazazX7iJFUVcmRXK1mRBzYBigfLsAkU9E5Tytg",
  "key45": "5bPknzXNSv4ej64zxB61a9ExbDC6qUda4wJzYNsWgtxGCeZu5Jw2dwkDCfwM8ZWGUdzHmripi8jYyH1TUUjYUSAv",
  "key46": "39iUBWpqS3MT9Qj8RjFYfN5d6RepKowXj8ZLqT6EEq1CT9hdbaW13vKcL7HRMMHw6RhiCSweMceFPtggnjr353ak",
  "key47": "26xPqmft1BcCkNe1mLZ8aU6zWR5bLkP274eHMz9gaP7654Z2y1wcQmWkhKfpZp6RwaziQ68yRVJ9sveiP4WbsUh2"
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
