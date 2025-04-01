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
    "4e7vr5VPyRpY8QiKZMLmZayyHCBFjSo3ccq6igxzWMprGMYUo9fZMnCDdk6rNiQ9XQne496tX4BbJK22QwhQbAB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uJdWM1KWpGLSgVzCy4o6Qre68xkocmcJLw75g3xqz6dREpm9cGcpyoNLFqytMb7rpi5nChGcKUdyEtWYdSxacQX",
  "key1": "5UPqtwLNZTaxFen8cv9sdZrBDRn9Rtnpd9dsFdP7AKrxYta2ghuPtVNL2EgtPCanKuxzKxmPPhdU1V4HXD9g7oY4",
  "key2": "66ofswtWKLezE4mDGThfnBagzPXjQBi8fpDYvx7RHwmainHZuwyuPpS78yaNynLYuTiwr98SUSKe9PWkWKeWjJVK",
  "key3": "26TSDnxgJ4qFmTDNJebacu4T7KQN5qCesq8Dt8htZtMG8twuZ2KbtWBo5oJnCG71A2nVQsRpiw2Dn8ZLJNzMHvAG",
  "key4": "PxXprTDFSKDuswTz9Pu8ooGeTsA5ChmhKTHCoMNFfdVjsDUZyaRh7LU3etD8RZmr6iggRWf5ZfRSBhx899TrEzY",
  "key5": "yBRXNuUJQb9hZfb9NurKhw63gbHB9gtwjakzoZvMnY4Uko1Jpyj6VQFz7JgCtWD4jeBjJ9wY6v97nrAcHuAr8cb",
  "key6": "51ug5uFsqahtzaVZpPRc69VygrERxBx1MXXuPMaUv7RSV93f5YVHG3Sonrjh61oCygJ6eqB7GMkibvqWfNf6qFni",
  "key7": "2Ce5fGhJy8WNetX53yhGqjAof3hNGH1zBy8Jn8usZE91JnRw17Xhpg1XTJJYErUGkd7fr2mbWRaCAmT3crDYcP5r",
  "key8": "5ARyGLGfHu6NBvozm3mAtnoyajEk3LRX7KrtEjyt7vDNnDCzHLoMV8RaQtVeKFNechBbeJc2GpDJCACyoUyTA3dx",
  "key9": "kjzgEr3ruHazHjDycstC9qNrdoRPMBLNac34ZNqwsWk7hp8d2CXQwhiUR2zhTBZ5uDQSKNVCSheiQDWCTzuAa9E",
  "key10": "41LKRtSmYnc1VWyEJJkwvzFaBeyJ4uP2snkGTphkhr9jHxE1HGYoVUYvsXWMopXKLfq791M6D3UZStCv4hvuXrWy",
  "key11": "2DcTibXXMjpTgr3DqJnD5QX216FCPkcg7T94Mio2iE7wUhATRnVM4V8xKm9qEm6kjKi2askLA65juTR4Hr7tM8od",
  "key12": "3Eb5ySFhrqNAXN8wPEjtTj8aU2v2XZLHgRubadj7roHTGoip4qhf5LPfHEZuzC9BUSDe8wLDb8BYEksmhinSDad8",
  "key13": "5SRD9dJy53AQrb8NojF5suCzcEL1xKbAMwmTZT5gfrMxEawx9uxx875Gaxi1Cme7jhTGtYB3MD1TpqyRMjd9RmGy",
  "key14": "255aAmC8CoNZKhhc5Nc1YrF9hFZoeAupnCRib582b49iH1Xyy11NxmuL86MsgvaHe9G4r3Wr2yMUEsFDaPPSesho",
  "key15": "3YvEu8XEFcNT3WSZedp11f3wAjxK9AsLS6N4E9fVGDgqJcgdUfaEh4MyEvPZP6giC6xDjGFZBtX2o7ZUa7u9Z6J2",
  "key16": "4urJ8Lfe7bYKTSu8B4iGTomum4Uxu8gyVB8fax9TmW2LLaAmPLihTBxveU6SH6wF18pwvswrzZHhRcge6zegyZr",
  "key17": "4zX7LJCyWF1vLJB31rFAzsTkrpzfS4mV5JnHwxHAZQB6QNBvBVgvV5iR1XNT7Z2idjUHfifbAEVcYq9THkVveTPP",
  "key18": "5ujvbMgM6qyPbkZ7RgJ65yeNe7i67rpTUB9ZckWtNaXhXtvSec1ksQ12ppg2MoS4Qyz7GDju8sQfV7tBQmt6rxEw",
  "key19": "3XNhyJkMcg9g6jL8FpQwmFG81978TtokeQdWdDqe5EZFcso9nFgrhZfrZpnA1ddrCRGE2v7Xj5t2B4TrtnZWsTRZ",
  "key20": "4ok1unQCvGSfaaMcw2NYcmQ3VX5bosbaq6bHcFk3E6uMB6GQkZgVBFNGy6hdvfTDAisNaDaqzqqM7u4BoHuMnocN",
  "key21": "2kChfAS6PCtMXXGWpoYjWTGjZUHGKnfEshJhx14qNJPujEnNcCg8JvJsD1b76N7Kh7yYreGkcNEBDULGNvyvt3qC",
  "key22": "63L1VLPZt9Eda6c91wp4VvSXdPySzghrgqSd6uFney18ERYJYgqULrBRMz7bANPce2MJbTuiRUQ49uoEJEhbqoS",
  "key23": "4SKceakjXWxsbBu7DbVDqqcmU1pZtPwKzdfuFfWsshEhrypDfJzgKtrRLufw5oD4ycZpk8eeUrtqJD5c6mxDNH9t",
  "key24": "1iBtCaCWUnpq3Uzuz6Erj9M9dQ1ePEJZSEVNnoKSaf3nR5hB4kJKsMUcKCDmBuykpWugiQR4TsuXoiJzjgXY7v4",
  "key25": "3NSc8U7FmueTnJp8x1GwVhojE4VRjAL4JrmFgJ3YZjrQXTzRct56rJHfygnrM4t65FGN4zo6XpZMRMrE8mJcnx4z",
  "key26": "4939bxMZAtVB8z7toy2ECteS9HNJ2JQTusFtKnb6BJChpebUt8nPqBJjBkLQZKg3NMip7XRBR7W1UCa4YoRwop3T",
  "key27": "wfAHBgb42DNvqZrqWQAZEM1niYuEuZKNQ62EqBoUA7RuF6wPbKEbF1Eotyxk7tS65noBq8g6WNtwY8TmFXfLPUm",
  "key28": "368m3h8UnRBQkLkZHvepT79ULStmPDEL2AvyY1JQu2DGLKEsLtSw4jvuYx3UF2G3HfUMiCV51cT1z23Y4VKX8nLS",
  "key29": "271Gn2DVh9wroXQzqCuwaGbg2tdtSH93VdoaXxRXkayJNYECtKfCJASJpaeodmP8RQgCRtFozKFcgtFGXT45Q3Zc"
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
