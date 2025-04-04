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
    "5X9mFtjm4GF4X1kR7nALHzLc5MY8x5CaPfWhK5L7XX9H4i6cSRswn3u5MCjtLvEB2DLxcZjYBqAEsrLKZueRpDMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ebDNG9N5JbuEo2kNJhHUBb5eWf2Yd1kfdDpHsrGw2S71A5US8w8VbqSvM6Yw1aqJBkT46FfAcGzhcepEAZLJYyQ",
  "key1": "2AcSSkYwQzA8JqdWjp3ZWe5Y2uz6zQ36ZL18qp9EJfXkQ5Kmf4nSisr3kW3BsUrDWRaR7G5Pm94XwHUkqkxgQvHz",
  "key2": "35PxDT8FVj73SyPQS59SMcJExW3NWwiH93mDQtvzwvGqZrzpNXQEumnF7qSwtAtWW2qJ2jfdPAu3egbH7JqoJZK",
  "key3": "54Bj9aHzfATvVQYPEjVj6RJy5FWTCCUpLaHgf2WJ7qqbw4uxumx3XqzvcdUsGmhyqEn1R1nZXTYMMCHgXwkcewkv",
  "key4": "3erUtHw8EZ4P4o7tYuK2JtDQiToTGhauQUbqxN8uWVBenYBnJ2YohZTmGzzKi6X6tJ6APhacdpqerLCvkMzv8qkE",
  "key5": "4jxjzDFpCFHinhHxTnKyS4gaJJKkNXvcwzfKBrpQoeBtMyeD2YoSPZhVvjdJMDMKQbj62ntTCJ7mBmWVYC7uwwwq",
  "key6": "64uacZzWmW6sJ13JeeGDFaRohBaWQvJNAcNx9cBhASSdoVy7CRo7bzqHJbfeZY4o2tAFfCgJXRevUuGqJNNidUa5",
  "key7": "3YEDCRSrcQveUJSwjvMLDfpbiKB4hBUvU9RVqJZTNRdvncgKiRMTDNzK3YL12NAZYNJrhFvBL19TnLfy18ZykQ7D",
  "key8": "3utrnJVSK3aisjsLFS8cWnavVf84CvFMGsgkTjJTufRwecxQZQyaqcLYKPu9JpVGzQnz5agCWpAxwUi2RMcdGExr",
  "key9": "4eJGbLDEKHP1ToPSo8HkdhyiEbe34jHHbXozyVeLYrZmQs2AbJDu9M2rVxgkDEpuV1v943NjhTb3YMUaJHe69X5p",
  "key10": "2uY6Dmv2cJbYDksepPA4PVS7kZCaCVjHJvoWKYv78LHN8m1tSizr3AsXBGCCW3kPBF9vTCL3PHt6FofJAPhg3CLV",
  "key11": "2XPqmapj2bhy8wUfTbUGaSw52xDpf6jktFPFPinszX7fD5YwQ1fNi9tSdM9t2pAb95hRx1yaGTut9pPjy2TEie9B",
  "key12": "2hoJDiMt1jM8ZcdHLG8eszbHd9x9yqATpvWjMNDANwUC1kd4ZBhWdVxwKEjDRH1sFwMT3WXHC879bNamLqRJA4LC",
  "key13": "3H22A4fcbsVbucajCF9JouCnebSmY8mmLgByXHcCrLw17Qh5MSGpZpT146AnJaa58TPDu6zts3tA4QtS8JfiyzdJ",
  "key14": "3d1Hdcbe9v3cJyJGqKYqG5SotFBN8ffYQJs6Nwb4cgCA6SBpCrmfGvtaHLZX8McyiyRyX5ph4jqmx98FSr74aNdn",
  "key15": "3Vh1JDmV7Br2WfWYUtDHGUza9TqZUiHoFo8P2fRUYNUSh2gCNjZ2f6fA76T8r9Ctk2UjQfmkUJgFpKgtaV3uKYdV",
  "key16": "2aMNnv48eq7vSV1vkdWZLe5fBV6oqd9LYu8faXvktvRhZW95Aqm5ygjotzaR4RuYvb3PxbpJxUgFEJFXKynHmMaE",
  "key17": "5U2ajwKsT1zUhofKJcwvJ3N7WG9ahU2sYbtkWf7NFiTUkJQKdtGLADU7g2im1pGj1RGNBH4h5AwovzbCUmjs6Qhf",
  "key18": "4x8MC6DUCgshENJ3nnLC7tb3JfcG2N1nZzxbVsUaKnHEZZhZ7FXSYvgNe8dnF199AXXaRj1qnvSiyitkQuNR2LKm",
  "key19": "CN5Gg9B8hmkkiJ6VfRaJjpn58P2XBPDSHY29q2UevLvEe1gbFCn2L4zapCU5KQbKV7KEKkDsP8WC4CeHy3MQA3s",
  "key20": "3VQSCuapW4Q4ii9iMQzmAxx7w4VZUv9y1RfAwC5ja2rCZZEmzEErn5o4NT5JWVFNz7L96ZGztU2AUftdzo86MSq4",
  "key21": "3SA7roFdQCdHmmrniaG3GctQRvEncj76e92oEXSeoAjSGqVGFbrufU5CrMpeqsn1BhV87PkJZXyHDdo2zHYQnLqs",
  "key22": "39xhxExvwyo6gtGanKRXhethwo39cWuubAWxcq6qcREeuThvbwgiDAEsaK5bJur3UftunuemEFJoquccbmHtMzLV",
  "key23": "vzmP3QsR7rtY3VoAqekExKd4ULgZ6Si5Fv3JmZUr97TctiGbLvwfbDczGJe6RXzYarFFButkoHnhfXmaEwVCBns",
  "key24": "4QCPBj78Q5NmiPk3i7779cp91R2D81nvgxo3ijJdiGQiaAF7TMfJ2wFDmNoHjZaw4x7rysmdnuGMsoPvtdswhKWQ",
  "key25": "3hKbUnYPwxNe6xVEVD4UFdGNVKAsD3Uo3RhaEbXStxTuBJ9j65DSa753mFNujSQP8BJPPTnQTkaDun5nJUxyW8EL",
  "key26": "2SgMynJ2RPzcC7EcypVTQuhHMEwN24qU2vkgGro1RzbQbEFM3v7gh1SUfVDJfgFWjaEC82xrFw3DNLQFsheJFUpu",
  "key27": "5x66WmEADm7eEKVne59sXjBFehZJNYM5WD2BduLs8WGJMHrNp5pAYFNmGesu5G8FBjN7unqq1mLLCbDqjGqXeDat",
  "key28": "3ZyBfUdrCjKo91W4jf8VApk9BqpA1q2jGPqNAe2qrkXnGS7NiN88SqYPjStHyNKWdvXuuJ8bAhQYkbJQrRS7gDNz",
  "key29": "5NVcUhQ1tDjJZJ8Ew4UGjPgHQP4nBhPZESCU2tM1yjUWT8Gv2i58fX3wkUeLPEtCvsECnrH6jHN38ehh8UNrEGWn",
  "key30": "5NTPfXPYRUXCzF9kWZU2MHemXZu6d1BXvMKX8J9V2uxwpSGYtnzzNvxb4JFathmapsM2HBbk7h8mSk9HcRAeB76q",
  "key31": "2ETCaLKTHasZSR2bvFG6qfrV3vsXd8Z27nHaSumcDCtsrewGmgPJKjDhpxDsz5YfHNcMvX44iN3Zq2yCdBqgd6DD",
  "key32": "5n7rbqbuJzoatg9oTbhKJYzbTsDpyGcyuQs2D9um7g1ALxe1LxmHRj5sPU8rCod2TPRJeVjYfonVRrJaYHDEvFKT",
  "key33": "5ryVmkAypLnUPbZM6fPq78ZxhrGh4NityoLde46TjeEdZ1oUpsAWRNqFdhniMtzereUBw4dTDscPcAHVNgbP3ynn",
  "key34": "4q17wS1q9XTFGts3iG2QWC697KvcrvZsaHriuBm6r7D9BoFAsM3zhA1U2Mop1vn9VYkSpVT5MPaUjhjbs97jp8Ps",
  "key35": "62SCA2mxTkWmBRbsHfBT6htMT972AnQ7DFfrEGKv3sG1jXSM8u2SwSMC44ZU74acQ23odcx8fRwmsru7Mhx6T2Lc",
  "key36": "5AXDeMrkByzj8D7iTmN5Nibmjf1qHsAzcvyDSeWaKTLspDFdsoUoq5AYFmdJXagGtqNwMXf4LvyrahCWE8zpojn5",
  "key37": "31zsTcJ5g9SqHffK1pccXtvYFa4R2WHcJp2WPZHioUgT5J47SKjTkCDXa9DZHFpQpFHxzC4CnkeQz7QSfoN1hfeh",
  "key38": "dwu3MFQ1WJczzGBqBHGSpz6PEdcMHfEPLnaHNPcvfGkDivG6dqWtFJ9jBRhVfo4Ud91bow9nHb6yoBPukWLpm3P",
  "key39": "22i1vT6Lgav133SmgHDoT8wy2j35bJWa6FLidSRALvf8NRFYR3D6UoTKAXWid4ShVLAuDBKn13kub25JQipverM5",
  "key40": "MugmCnB8PEAFZ5g65rfd7C7m5JsWScQpSDkimPAVusrePkDTVp6KsgE88NWxu93Le2BmP7K6SyzdgLoUwHnajaF",
  "key41": "5L2M6uWZPHVQoRFuo11ABiJYBmFKzBdoeKwQtqHLixJeTwpP4WUSS3NSPyJJPaYx25deMWc9KWhowbJvvzB7ea6U",
  "key42": "gB9xixuhcFVAKeAbfXFyHceaKBznyKAd9mFJiAQZzAyFQuAExCFSSbm3VYonj8kszv5dGoSDakaNzHSYFLu9t36",
  "key43": "3ChA5FimK1rbWbFkmYYAMnXsP25ESMgUzjuj5jDgknsr7GwtfdKEXXyrEdCaFqjUbvSyAo7DLGxHZaoRx7j2oDYk",
  "key44": "5Qpe3hg8XGjcHypwbiVULUZUQugY4wFa3dVFJ9NUdor6xq2oHX3JJnhp6Rr28n1v7wdYrYVwBRs27Kfz82VttECo",
  "key45": "3mEqjrWiGha2oFfZ9YNz5ZWuRWSRnoRXXfHJbpLBfNXCkTERDHXQMmZzdnagkSob7NVuRjaHTxgTPyXpH2sjEPiT",
  "key46": "2bGcqgZeeQuqw5GFn138Y3qKFazdLC4Y8tvYyydexJTf4vufGhjWXUot7K55btPVW6thcz6f8Gd1mqLLxsQ8c4sX",
  "key47": "2AokGBL1RDdKZnr2TJtdZvdgLxnNmh98G6o3kTbwLRbWuvGz4qF6hmnNbiLbQmVq8U3mJJYVSUiXcHwPsWu6w7n",
  "key48": "21o9ryVD5hEEVyWBiudEP5u7dP5Y4MdmwzYw53oyvoW6CbpiDBbzZkkSESGkyZNtbJ67RSj1APP944KLWG9NaFQV"
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
