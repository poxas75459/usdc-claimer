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
    "3R8RVXHNUe6NHW2qTtffeNFdGhWn14YMG9kjcUcHhbEnnsWZswDTq35ceUnqEqMvpAWk4eHxd7c9Ng2vnDR6mVtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XWuWrBmgLScrrw8tjX2vgY6ofy1bSAiE2rShJahc5zjkBi58GQxnmhsFMktq5bcqTyFKnyNBbfqW4xtVAPn9wcM",
  "key1": "2MUYvdo5kyEhmWH73tLHjvFDzJHKJLKfNZeJ1hsESBwR2dFUBuocZPwWkMsKZb1KmRgxmCtxGZWVQgn1CY3o6yQH",
  "key2": "raNMR1Tjrp6iWgZdBMTjZcAtXGUzusFvbMAc237nkpaidvYktdxXsXxd9VYms6UgdNhZsFYJkyMBxYdva6kF7vR",
  "key3": "QXTVev1PtgFwtRvd8sXXfbZz1f7eEc9M4dBuFqPJw7SZmMoFu6tgG1k5bWBqw69CnrYYhBBnhx9cXRxvQUN5XaW",
  "key4": "59HDzzpbrzPWCUASmNYNFeFomZCnuefsDneC4dE4JvgvAvR2kPw4uYa59SGVQG39EWUYMwZKVptX2UctsC9W2DuU",
  "key5": "4RZ6u2fxrx5bFXDUQ4o5ZYRrHNsoyvBrNw6m1aHUbassE7zEZcyKAZ6mPuaqKFbPpetWu19RnekngWKdfknYGCvm",
  "key6": "2xqznjE1DvEuVoexgc3LuDGNKuG6rC6HtWe91UsSAPwwbWRkeK8vLQk2nJ1VzbdhGfQrAFdieyVGqrJ1CEsxq8hq",
  "key7": "5mZFPE6wu6ZRgnoonbQUKdx3friEpFRgNwV79jfm7xEocUMWGmAmH7f86bi7rGxfdif9z6ajZamyt5MTafCqCi2f",
  "key8": "2i65yc9qdwgyMXdJATLnr4es6vvv84SuVg4opRZquz8hNuouSLZFjVyt7PgGmweFAj1pBpLFXgfx2DEo97TnVmZb",
  "key9": "5nsxDCAbrTuXme8m9XNJhq5tbbJ1hdVkZXyRrSYHoU6LaCNt2n4gYVFw7c7wfxh7AtTwFSSW6ayNooRxm588fooF",
  "key10": "4gcSkEdkgUPmCkw1LdUQQ2bFhWtTQnYCkTvFA9P1i3XWpgfGmGHza8ZCYy3LtoSAdqJxPxWLeQU3PTg5HMNawv8T",
  "key11": "4GBFzGtvcukDsaYd2hmnN2UVguChsToC6pUAPQn6aVJhj12cfwHAhY1of7Zg4FjDpYRheDt8mzsSdkP2F8evWj2o",
  "key12": "3Gi6y8QZnZua36Yebx3ALa1xchXm3XpxDEAM7xkmwgu8wVWEyaL4ejucCgwtQhjYtqg3r3LRaFvkh2pZCc35DUjC",
  "key13": "vXUNdfFNkh79KnW3hhB785V1o3mYYDguXW7FafFunR3B8TnpSJ5oiS3HhofS8Y4mVuJq5KPCscSQkGSAWXeWCLC",
  "key14": "2B8HLuTe1KeWs93NP9b5kTwsBdjAB2FCMwDRac8ooZvvXPzRUFAcLGZf37jPgqF28Le6B1YufVTbAGh4zsTTs8Nx",
  "key15": "3Q3bMkqGbQ7m89kp4vYDxh59PUSEeHnHALVbiPQYyDuBKT1mubpbRsxJWf1toiXkofEZqBNrjsDow7yCYkmTJTSg",
  "key16": "23ntJdnHUDJBwh9xMzcWkQuddshGhqwtYkHmYG6EjmAnTPsjV72gmYVBE75LReSGbqKDJjqMTBQg6ViubRJb6sP1",
  "key17": "3zSTdHBnm1QWurkEJBJCkpB4oFqGG1GcWWgJJBcthV4GPaoPWycz1KiTvD96539d5DJ8bdEQ23vZDocqkoQoXu4b",
  "key18": "dkGD9JvQYkJtdyWAmSxd6Cz2KwbzmBwUdJaQW8iHgRfPRzy2PzGhpSCvxKfxSoxcw3egfaCMawNfK4ZpftDXmY4",
  "key19": "99P7eDUKLheUo6mfNLXAcJdC6rkS1efyGYsGTmMDi9tERxXFtESvLC1ryTjdHqTfgmzMrWXDVw5JoRiBqMfnJW8",
  "key20": "2rndhEBTkspTXKSTxMakHLXoubmydqdaPMbbKBVPQ58ZZPsvn3y5owV2aP6w14HEaRjgnedtDBJwK1fuGzLc9T7u",
  "key21": "T9Zx8Rae3WCF6c8hkwRLeBBoUTenyJfeKMXnhTV97uaVLvZayVsKGKGnSEu8wPPM5Lqok3WA1imGsYrpZYUqj3p",
  "key22": "5BWYreU76dW4qE3UMfkKuiSpD8tCxr49Tgsz3b8S2AcrZX45vY3SP7WhTiBTfRg9djmJLWr1yCEFsXTAXLQSqLeg",
  "key23": "5qnze5aVDyirnNQjW5ucyhxjSied5uJzq9mnHDJ96Sajaq66aRM9CYK7vHYR1Lbaeo8LZdad8wFXZEMNZXZ6qA7a",
  "key24": "2s5g57kiqhHTMXNoCX2ti9UhQwJQX8PtFZkxjGfMCY7QJTV9ijgFk5oo6Pk6MfdrKKkXbvy3MWo1RWGDYVeqZmFL",
  "key25": "5VYKdxEscjaTBkUxtii37iZpJQsxvBTNPzia13XPzKWhvUWMvvZ9G4j6a9o8zaJ7szKxEphhmzbYCdfZcDMff7r3",
  "key26": "4t1MLJTok6h5D5Q5Mv8JURtGkb5ehk9gGhuakFZipA1CVLtMF2ns7g1gZgm7usC26fw7QjwErGpU92ZHrqxeCZcp",
  "key27": "4EK1HCjffnqRvwBCRPcZyMnCrSMmqZu9G5rtT8ZhyNE75endybYXL4u8Nf3SKw3xGcoYp38ErsCDYAzU2Q5SD2Qz",
  "key28": "V9Y6kvaxKNPV52SoKHjErQcGWWaGrdCQMSTXXd3QXmaduq7rknAtQ8sKAWcLD2chDAGUZj8GZupD4m3jt4gPcEt",
  "key29": "5TUFnCkTNVL35VzdxomqHBR5AQuR8o6BMRNa2SKzi87K2BLLrakhmkqLVsDPwrDBMFGyW2FPRnZ6JJ4UBT4vQcQC",
  "key30": "4duedgxfhHPjUMZFCFxGrPukyvuLjrf32eGmqVYVuSboKV1NyZXqX9WLVQQtdsLYiSiEow1KLFtxDor6aLwwarwt",
  "key31": "vgFgcfciATDmBsZSTX5P5EgrWkdrWTjETT29ZAHqFKmSipwErfrGfAvcPuqe6LC1ePMAvDZD2FGR9axgifqPygX"
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
