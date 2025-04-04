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
    "4z4RaXcCAvgXxKgqXKFPve8dhHCM9QsxuLEhaPmbQQEpZvDmW9n8cp7d5j7J2f9RKGZ8V6HuKWw137Yn8aWiveju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1GpfXpnP9DucAws39VyXUyYiVY1jDffK9Ywhi8mGTicM8VmKjAtMH4kJwK36CUX6MPXCSwGjq35fdrb8rgJddNu",
  "key1": "2Dc2GrborNWApSPFSVviUeK1EUH5JHsYnLJHXUT34qbNjMAW162nDnZYeBSMkJUVHvxxijrH83kU9hnu3Crrkx3C",
  "key2": "3don6HdWZbDVpD6Lf2m78q5665Rvk9Y2pXbfuSNAdmL88UiytvjvMBV7FW1SnpvC1LDYbu4o95os5pJc7BwmGnW2",
  "key3": "2tHNY2KMqHdEYKzGckyxvfea4R1LcsKSTrqjCqsyRGG8SxFXkxVwTYRGd6M5U5TQcAqhRbwSwhTnDLK3CLCBYBNs",
  "key4": "2KVFyXT9QJHbuvNHA5w9f4JiivTw7rkMWJZMzZ22au1ye5PBBfJaiqPKgNM7eLYVxJbmRLJL3Squ8bGZ9qGSkyj2",
  "key5": "4Knfax7E9u2ATym5SMxgsdc1Gx6eWnJt9WkU1AmpfFdhB2rcakiWqvCdK7vaug3ooaCxiUHewoAzk3uub89zod67",
  "key6": "2Q7AF3TMe6JrCWgmjXryP6crbtaxBVj8QxvA9rveDC3vLbE8T67C2taL57mmnMKug8zsLnmMpFE7Wry8wkYBcqnB",
  "key7": "3f3xpwzgBdiT63tkgdPePVzJvKvF4ey4fsj3vPGraxY7h9EiaPkvpP1Svbq2x6varoF2vfHXsJs4dN3eaHVd2NDF",
  "key8": "2UfJ8Q3LN3EnDYPXzxSnVmb1tYoYHWrHzyTooRuLup5anSDyJVTKKmG466DxNCnyrktZDsk6aCfY9K2hrftGPyPE",
  "key9": "5rFsJ1fJEanZVNDqCqYbic3msiyXwmpuUTaH3AeuSgaD45ZXLRS1uXKejjSGgCGSFW19786UZB1zxEj5v6U9h8ur",
  "key10": "4s81VwVtQXiQiBaVkBT65j1enTqGRk7aWfRBkVMHBBMDfySbS1p5posJ4dWd6apDBg2SdA19e2TWo6L5j7DMLkHW",
  "key11": "E7MjYLm3YG6eZG8ZGEuU2YoUucghwuzUoZ5N1yDxnCJwjLEbVjDmdSp2zvqw779ogpKR1xHqPPWyrceYZSavUVv",
  "key12": "4vwYCQABysr3zf3H5t5qTmLf9ooKz4Y6jd5wMX8vVknsiVKtLdzw1HwjrZMZWt1ReydXrvLQufxARhvT4Y1eUVKq",
  "key13": "3kXCUQohchfbPf4rxhXG1c6Y2ZofALNu6Q3UoCLXC4t9i5K8V7Lk2fBP4TeKgcHkzEKLCYpyB9u9Z5ngG6y3Uynd",
  "key14": "3fgJwD2wPiGxYMToJudPyr6CmG5pt82xB94VeV7LAuD81seVjFw3uxHrsKpk9wAnsv2f4Sei81HudsRFwjpByzcp",
  "key15": "gPpYvpNrEeHJ8yNoEqA7YL1rD3pXQkQaS6THBKghjv69MqWC7QYjctebAY2u2VbJBdh1qjNvd72pQoQYbr4wbSp",
  "key16": "4aa9uWzib477LcvwxPWu9Y9q4stcQ4QiDjAh3eHVz7WAo25Vu8X6LPQt3C6XNK7d9XqEHXmexdUxdzESSgb9CDEC",
  "key17": "ez3ftRYaEMgRCVbRdAqd6SRV8utj1UgbrrfPouKUHW8vr5s45Wu2w2hJBVB5C7vEsHEgYEqYCK8G8g76aTK5QTa",
  "key18": "wFzxXHoURtxsH7TG164R9LPUEBM1pkp9cUffmsDudCAg6zu8SFeRZ5repJ3sG1fnxm6hu15sEpM1t7zGBwMNZ7m",
  "key19": "R456auvZzL3gS69xqDj1DnfEjZrThLFuui8W7vBkFU4W85nWktWNJf5HLp5f3CbYLFp9o38ttkhS9N2wt6NWYud",
  "key20": "v3ShUuKiunZSaBvWD1dePmXCK1qQDbGAtroFxJkd3xZKZUovS4nk1wNS5ghKqm7LKynryK1hd8eiDytM4niAiZM",
  "key21": "55obVM7qKZMNBAG6Z8xdKY4HWpGNVrkijBVcnwuWLY8NNUiJqL4LpfyoUW48g17M3CS2YoFa5T6fyTdCV4d8Z1LK",
  "key22": "5sGorJKtCfMFuDNCY2uPAKaeaZy4iprRu9ycXFwcbezEEXwHQuKQKogc3hByGkACjnWV3MyRbAWQPvd87Mk6PWSy",
  "key23": "52p9hFp8qjmj15i1A9uis2oC575WKE9EmLSdnaryHgXJnc8WCGNBgGpTNwYabs684F8fTZ2VrTbQDdj7sNgYSWmg",
  "key24": "3WN86YcrL6qPxtt2UfonkJzSLmXLMLrw2XxqmnupeCAqHUSTK24kwCFeZsVX3smhyJ6cpnV2YteBDt25qJsNt5de",
  "key25": "3XJD4m6f2eNsNLbwhiQqc3b4f9vhMtwc8t5KuXtfcvfSWDQSAZ29uAYBaRv21aCVsAx2WFkp92WAWasAzkhSvyRH",
  "key26": "65mtcA3aUnYJVreYA7xyCmFzA1q7DySPx6yoKNaiEKLmsT2yxaL2XcpNa12SeKSwuKz2JWwypbiznz1rqXB5KYr3",
  "key27": "isBv6aCwgWePwqwNudMS15wnVqq2K6uQpoAZLPpDGyyfz8NW5A2B1rqqBiWwCKQfeSHr23KzbiruKXBYyGU3uA2",
  "key28": "2KZ62vfpqSuqndwZZ4zmTToCno4MTXL9mHKSocqnsF21rb1CuwvgZ12XPYkfEDNtbgNFXuf9QnkgTV36XXxACcHH",
  "key29": "5Ch5Xyo4vHp6guH71Swsq5rj4jT6gsfDVXtkZFcNzxXYDMtgAxLoLogFCQV4uAnrsbPiPPDouizNgRP1JSA9WLTK",
  "key30": "4oMyxoBhmRSFcZJMWMrEuHnT8rQQJ8JhZRZ1ytVFCQbSN2SLv7sBd4R7v7hQawz5At1BCc7vUBun72GRQ4tforjB",
  "key31": "fqeEpnbRNG5vBWtnc4gcWR9QskY9wbXJrAzMAzXDR7mX96b4jL7hpTVY37KgpLVU6eKmsiCscPFKgN5FWQiSkp7",
  "key32": "ToiX6yZ97RrcG6W32pqr5F4mRkpgd4NECMmZVvRrvCSZsGbEh1KJ6AEdtbsmt5XiKBWnyBSvS5m19UivzzYFzDm",
  "key33": "5AyMg5fmm4s1imBn3xmtrFZzGrHAH3ivAMDTg9XxMgsBfWt2nEBfyuzig3j6VBztaQgjUJigNYSEfPFdw67aR1vv",
  "key34": "3SQVxHHx5utJHMEk2nRr9mf7eBXWDPngNDKsEhZC8FesriSkmcsncoaU9bJwuFX1V1Lq6GuH3K4rDG48wBDp7x2t",
  "key35": "3ygvz47hXUh3r6aLJPkUQujuCDxFHK2pZPqbJtpnWBuifi8UQ8rZTgagLEFy8NhVUMdL54KhEJ3HRBcCnLYtivAx",
  "key36": "31KUHRdZjaHV6VWkJFuEe7cnJYmf43HU6HDZ6RrETT2iUZdLVTZJ16f3dWV4qgENxae1XUB2RAXoGU1QBFJ6jjHu",
  "key37": "3iAQNaMd6z17ZzA1Erc42aJXDA8ZNWJNrxUmbcv3uwXC1vPvdJRo7AoP9mWCnoK5m3w7fYuC1pSj1rm7oF89cpx1",
  "key38": "2D9HcfthfSPxpgJUZeZUM24SeTxH6w9Rpc8piWPDGqAbXYTxCSnSYZ75zVCxvngbEysGRCq69k29TLvhyUy4wF25",
  "key39": "3KCkCscuwyQB64wwBrBjEtMULQ2pH6Ra7dg3QCW88aSwhPybCXAxsyZg5rUjDFQLiXUPiC2b79DyWReAgCTPHvBD"
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
