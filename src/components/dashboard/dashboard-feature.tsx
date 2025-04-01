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
    "3jDwePb2utWYbXoeixqEpS91NyLyuQYNEoKXPpgDuoiW3foyv7TTzpuTDZrVG2SJJveQe6XzM3hQmYBqvYXrWfw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y1eQeM4Uo3PsKf7AFmz9QNfEu65neAWHuu12kJvXnG9AhhpEdMeQnA9rPqgTNz7QrSTsWGSdsEaxXA62SuPdUWW",
  "key1": "eh6zxEcky2yYKG3nsouHZs3isEdMBw7chCb4FRmGuqJE9nVSiYaMVS9LiT2Xw4JmhGZnwWWb5ADsZDH2BCnXj68",
  "key2": "3bqPBEXpDVzNp7dCv7T43hHTv6ep3CBHDitAwyJ2aFagbKfmpyFhAXwhVWm4z4bPaN3JVKsS3Vqef2oFTJoMgDXN",
  "key3": "Weo3HgQ4BMBm8t5ksTMUZJz9ZThukgpQFmDvFDdZex8MD7jEAyevXdMbkJAoP2rBH7b2yf6qqGL5CKnFqoERfxE",
  "key4": "3gFbemU587cK71SfEgfjNeEkibM8schqqkwWr5g3tnCV2WEwBBMB7gcM3RxLG8z1yALvutrszexXzMUGekYoCobu",
  "key5": "24dDXWiGuLiDsRQAmnLNAtfNjheaDFnXBPMLWi2hjdM29B9Xp83PF1d36vFBYHBtaMgecJ2e3FdrWD3RmHVk1gNU",
  "key6": "5igPXKyAm1Anm8P2xLoroFwkrDTEiq7uFEjLAsveJ5yHQETXYBJTzrmixtmF3yCynnpYcuqs3yBR6N7XRAi3KT1C",
  "key7": "5c16HBWHN8ZGEzQdkXqWwPNiVjpPkuqvufzuJhCKecDWeRr39D7LEdznYLhVfC4mXqYyRh7tmgaz7ooDUCu5jgE3",
  "key8": "VjhUKxsSP9vR3orHQ6LMJmMj4Tyo4CM1azcCmAaCq7snBWy2eXcoyhhBrpJpcdqnrFxvNhLmpGAbdmmJUqZZedW",
  "key9": "XXaA39yNbosw7ybE2ctFz2VwmJRTy2KEtt2c7bURgD2f3pqSTUKvFPh9uNg9dKsELnDvzKxVfLj3bXWxoM6nFrM",
  "key10": "4a2VKGPVcW1bbre4A5oT9eFT2PWZdTfGh5fuezY7t2vp31j8e7BnHAfNWkFbiRANTFJmKKpmzzTRcrB3LTo3FF9b",
  "key11": "3WKC81MwQwPJA2mcUdNSEzumnyZPbuJLZJHhdxnTx1kebtDQveUYXjzoDAKXbgiRuMCpnhZwNHww9BeeY8NHmcM1",
  "key12": "AT8GA14m5kSUgMiRYZtbJqbEsFW5Ttk5Xt17LdvNhW6svjLFBSiggTjDzc4bf71PB8CKkCkxi3YdDpJERxKgUXW",
  "key13": "3V1x8rQjpwrczyf1LeqVUtCXnLXhgfadvwBrzzT1ffsTjUHH8EXLLZCzvcBPJpiBkeEGindaRGpCfLvJ9G1L6ucD",
  "key14": "2eYpBRHNesK9geNmv1Q8Fat5gcEYUHEAZQFgCv5iPHBLN68bStY4HprVH31fdhDEdB8qjgihUYd1a4SBYt1idpQf",
  "key15": "3q4tYYLpFAUmajQKiLz6YG1tPSXvFzUJi121rxCkoeXPN5WUoFuZHZu7P8ZfJ5atEnCDocLGnUdn8HuujPv2EPKC",
  "key16": "5aSj1AWdHyyV6sfrexH9DJdgfgxJPFX3QPaczrZbGdcjpFFADVcmogXFfDkW5R15wzLYLbCP2LbAp6hqQ3PFHVok",
  "key17": "3Qcjg5yHNb2hczDXEnQVcakWevbmU93fC3uHQcjbU2pcZ5Py9H9wmexcvX147qyQwL6S9ffNWYXUTRBvLZ4UAxhx",
  "key18": "4QRdRVJPCvPzUyaWdc6DiXaL2dGChUw8V31kbf21hAmKZQrQeWfQV527XjMfh6pLBZt9994ptepXNv4jvuuqntKy",
  "key19": "3HMEBEajMckqGkaBg1exriqNhYP6Yg1afgcn8tfNTgm9uuuJjs3dKbJ9NY2ZJMxyWFdFNdcWFvorHxSzzfrEYM8q",
  "key20": "5HukqNTzz4fuCCuixUxojvdp8Q9CQBJiYWLm3BqMMD2EfbEMPjzZmmNpJEnjxHBVwq1zTHfDL36fuaFFVL58QrN5",
  "key21": "44uz4NZP53QiLGY3vhtSTkLw7wKZiTHufepGSJr8hCBdEQPaG4Lxpf1xCEJSJy98fPZ1jegaPAuozLME1BcTeWM3",
  "key22": "4v4DqWkjiAdxEZjn9bY9MoE32w8JSyCp1vcU7uh5n9csDwmzZFp6UShEfjAk18E2xEb2V71h9N4FFcuPPTXUyLCj",
  "key23": "2KN2Fg7VttsHZXLtpc3UPp1FehUV2cXjaEobzCh6bKk2t5Jp4hGoFEKwguesS3f7UKybFeAxnSGupKAJmw2qDCov",
  "key24": "64ax7R6NjzSxjYZdTQxJQetoRx3Y1tnNNL3xMFBf2xPXcdg7fKvbVH9c5jDjFcGiyiCnAh1b97jTnryQ6NRiMCUb",
  "key25": "5f1crc3MQnGV2By2GWcKUirc5dJSjLVx76Pej3Dxh3HUkWhLzjjxcL52iwGKJx1vSzKH7avqfiVoZcmZ8rA61Rc3",
  "key26": "2DAZ9xsdUJM6RLDLEZHPHzvMEE4c9KRjNNZkg8Rc5YNKNJhKjWSzKkFC9mYpiLiWZdUvZn4GrYXUnx8Ed7LBMxXC",
  "key27": "592eC1GkpynvbhGcmDXVkj2RDZSGiixnAtaxPqsPDCXLLrAqeZCa1qui5GdmjZLvC3DUF4PL1Va8U2nHQtNqY8pH",
  "key28": "4f3GAMVi8PSy8XBzAybMCPMZxN4tSEFHWbZhrDgGYVXJQaoLmUPqpLeCEMm2uhYbhanepo59pkNBF5EVNJiBAvMv",
  "key29": "4MdDPcZfxkktXT3qCSdadGaBg85pbTNNDbRd8zp3WXMBicYN5JmQjeZttevVjQYhkqd4MCrw61ztYc7VGdsVS5tj",
  "key30": "4Z33zYVr8uMex1iuGUsWZHZpY3gwd5gHLwSxfFJFvcCPtNf4UF3t6Hbq5hWmgNGYCssJLxNGNXQ6t6DYKKZQM2Lr",
  "key31": "4FtQ5MdE1nwT9FQyr3PLCiLUsMejJXgjWpTMTBfXkvfN5SpU5zcpaR7pPkYYkXgqNi8g6EHNejPsFBUCC7JbcC5N",
  "key32": "5VFNaGvqrvUtQ6CAZYsE5UfqdPFgRKKZnQZ57WNfKxiYf8sVaDAcLES2fTQh6i3hJG2D95xoBuSVPuGdTrj3WQtp",
  "key33": "3heEwPYmBsJpiGcJWZ5WuZ56gvLAbhDcYZhqND9G6e6fpkFH5scbH3QdqTSWCDPxbELPu4AEaEUi5vGYRvwvNBnx",
  "key34": "3jskmrz2z2dK4FUESNyR32hY2sK2bm4PXdkJ9qoCbxCejsAJMC9cs4Y67zWStKsijQqqkTWYcPU4xrRxLqSKNrVF",
  "key35": "44etBvmL2yPmF49EWMN2GmHDs6SmAPnqvAkEysJPESCu6XL84UJhgbAN8NpyygEthxGxo72Xf12aCphMJ5rkZp1r",
  "key36": "4sba54mU7T1SzVDuqAEYWbUG2ZL8zPUXqyfkYWjxcJSYWKs87bChXgRNsyV5bAnB8uQSWC5yp27tMw2Simgyb498",
  "key37": "3cWDgcXo8xYk8u7CKWBJHaqFrV83vbmgKZYTN26XV3fRk26MZdeX5J3y52ptwmq39hj7migxpHYbDHM6V7rJz7f1",
  "key38": "4RkK1g3VQnEGLzR9XvtfAEC8WXzygaRzvQfeY3QQPg1koNmJAPiXgt4LJLiQzV8xau3ZxWVytyaibP9t7aHGdGNU",
  "key39": "2cLKuCtU2thMgP8StsS4V3M4emfXDkrPUN9QCmyhhPHW4F9F7iXE4X8vYpJR4tnxDGWX1m9Rnf9rRuZQfCFJdb94",
  "key40": "4Jjo8La75ZJRCVHg25N6d1YJ4MVg7PCmcsGtLvmiCkrsxfCAh9nnn6D4rbzgDCZS8nBMgSMP6j4ndFZmGN6Bqzgg",
  "key41": "nipLS6YegA7XSGT83w5nhnm3RvfzPZfWkpKDckoEBTDKKRkiC3mo6zAiCC8cfgqBdExVvU45VUC75GZdaVMc5D5",
  "key42": "4eYjigTdWnxHYgeHVBmmnfnrC74p9nfX6yaMXiUw3wCh165oFsGYYCijdzLHWd45c3fsP5vBHGnGzfpVPM1qRSAL",
  "key43": "3B5q9v7THnXSXogVcaaJs3FwUAmeLgyBK2VgTtPDibSpKKZhXAReq9xZV2Vebc4mGX12wKJmdC2pKQjyHN3AqX6W",
  "key44": "2EBCf5xGge6TYAeYj2qvykqTby4KmSmnxA4zDegzteRiA5TkUHVcHq9Dm16GYmCvi3U2qrKnHjTkduAH8QPvfPF"
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
