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
    "5iFJw91AjHtSXSYddNESJvDPT4Hi4GyzEMQVGkREasy9tX5e4XR9KrgsDCzaUDw77smoumQHRByw8QPXPUBeoTJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36UzrXwuokDKMkrZRVKFfAbtAwhz3JPiVYsCMm8T89ryrukCTVxyR6nfNrqXVasLPzzQJSiYXnR4emfQ9jLosAES",
  "key1": "4NYAcsXB9YCqfxfvFpGS3dtAqhenbGqikBR1cvTLLzQzewJtjkczzz6iG6d8WTWW4e4H8TKBGuDLMXciXUE7EMxJ",
  "key2": "4dpoeEqPe6MHt7AzM4dF2nStuZdx64PSX5Wa3MxDWNmGkDVtH828echtizuXnjTaYcMks2fCGUzTUtRrUM2qDMrg",
  "key3": "13hVFwxWaUyJMiuER8v8RsH9oXzF7bsAi9J8EhMENLESEkV9RNkoFz7ZAmyhaL6Swqq3fjGUXAL1rheiU9y2pwo",
  "key4": "31uDxiyxGVrLcZLzVjwsPdZCje8Lmg97E12FiKxw85t2eCWNzWGNtyJR6Z8RQEijvAaKAQzxuquJyoWnnCP4A1ob",
  "key5": "4JXfac3ezBK2zFKyEWsMKJkJ9shCA4enW7BCmtxrhMR6Jt35fpNJqxxxWLfoGao4VLQ58TVmS6LbEKSJWiq2KgpH",
  "key6": "5KHD5nVTQL2rXVh5cLovRw9Q59Y62sdRKE9eHouy3o2RKV3pzo5mwrqcSjQuaxsxH7Gm5jS8ftrfr6t9CQ9dtF61",
  "key7": "57xbuJ6Smht834m1HV5r4y3WLFW4BAuyVy9RWcHcoV4hz2UTX1YdHF7K5LPjjzrPt35RgW3bJ9kERzz22BrGfh3N",
  "key8": "imMPiD1XgS56yEfiFTajaHrxKqxwhxUcBfnPEs8ozLBiB6uuLHRjCgCrMzHwrMkMZQTitmVUBvse963CU32f5ke",
  "key9": "4PYrUcJdNfDCyT8JyTWJxjeM7neH9p2dBjLFtb8cJR3VqX4TqnacQoYKwY5Zr2yHUgrtD2V26EYo5aixBbpatdyS",
  "key10": "HTrrbPpNhc2y5938FURs4BLWYyDm98g4kgBCm4BQaeen1RS2VpUrzv7238zjz9vpy3DWdXiVeuMtnju4w2B26Jy",
  "key11": "3VehSkBaGBKXDZMHWvmwFmRczpoZx3fPqH1apnnLmBC6EFYY1hcoj2auDK329Er8Z8jnLm4BB8fcEQTwAuiCHXFa",
  "key12": "4GtQbdRPZp6qyhixZo4oq2tb9e8XzV1mAjvQcPp93LdHXnZFiAjLY4ExwvQ7JuT6vDka2knZsF2d3RMvQUeio9NY",
  "key13": "2Z1jLzZPqZEYPxFxXkfQPox8aMFsasMD9cnq33gdiynmsnMLZdRoYGGJYZPDsGCFBBgMgyNW6NkRDFzYaPLimW2X",
  "key14": "1uuKDm4zcfmFV1Q8ktoMnnznGmPZMuvWB4yqzCsA2XC8EoyNm4AyYziggAFLHnzot87oYVvaGPXDHQgWJ397e7F",
  "key15": "2mt9izEEXZvKDnjPWNVxbfpmucm9Nwkx7uAsTAA6uDaLkWakw298apAZ2gAot8n9u9Lu2rVJPF9VaEs7kRCeuTfi",
  "key16": "jfqUi9xB86C77q5tJdVaC1MBVruya5uWX7yhvHTEMfWekPYEhC88rWFoepSY8EKa9vczZ386bpiijFHvcAP7SKf",
  "key17": "3QdRu1Tvi9oUTTv8npyPx94HrRjPJVpivztwEqvqLbaSDXMBtXV9dn8smg2LVj2MW3qWoKdXPDMBUncnwBVeUXSP",
  "key18": "342BJkpye9XPsc3XtMzXgCvSzH7tpThNRhD33hrnJ3mYKLFUeTdoPjq6uq3duDMGzRP2CaL83pdLubAXmsHKce78",
  "key19": "56EfBhYTHryTZLUFWQe1NDEcrunJu2teBcnWLaWB5MoQMZw7RUNzEKrJRCuuf3gQ15GdA6n2HmnKNMe1HYCqMJw4",
  "key20": "3CnSjEicE4uLqjJHQnroVPJ6PuDSoYKseXvefzmxfpQSkDgRSXPYwFGpxMbZk6qtUocfGm2stL32jYeAn91taZET",
  "key21": "4FHfTW85hQ4MaPV8Lom4tTDzREyRth7hxoACaTrQsgCfNoeRjHCXmqCEUiDfqQoJfNENwADJREFfJDiapZKgzDnS",
  "key22": "5XQZNbKmjsbiKgJ5iUTwJf3cdARioUkdBY7HyBoCT5tV1A6StQiWJ49N2thV9SbpYfrEjkKBDwu9qCbkWVDGCRWj",
  "key23": "5UZKJttaYjTTjTdnjZmPL3apRkJSz4VRHwfjsixmJQuLcBi2QAi5fKxbLv6sPvGybWNfs3XVpZ8ia4F6fqEnwnsr",
  "key24": "2L9CQfAvgHXxLEDcYC2REkJrBDhb8Mz9j1czqcg9C4zJ7m1BXeb3yJAs5yBJEj3GibRRYypStEP8d6LaX7XuPnxX",
  "key25": "9dAbRJRymcsuACogsDeYKnWfp1kVpjsxsAHikbgFnoiG6SD9TYEnwLX8XRuthTKgFoH3wRyezTodRwL57eLcojH",
  "key26": "3gXoaEX2aanpJLjD4oSGh7HqYu8XrTf8ij5CfHv3WH7kGruhoGioYSiJsPqxQFjfBRtSf15KxrEishNTjRoHL5Jb",
  "key27": "fMhwnWxd21auPfkcYWJ6pDuuM4zEqAZGU6QpjfK5tphaZjLBjGs65eLyaL4G4PDY8cesf5vuA43Xb2QK3ec6hE9"
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
