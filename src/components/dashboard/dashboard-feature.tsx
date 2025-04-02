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
    "zTy3UzV2ymhYVwyaUSBemLZPGD3WW2hYjD5UmgfGnYUpbsmbciG4C4SP824oUHWropaPXyyhhgS2JrXrAcWQHo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KwM4UFRnt6UZThfM4nSHWkvxnpybYbDooTmSF6mMgW1XwJePWfWv4KfsuwXhQ64ZrqLN2x3FwHDEKsNjiR5zRye",
  "key1": "51JtaV3XporbGk5e5HUk8ajiNqFmAzCtwSn7fGXWP1cbDZpU5R3evL9QS4yhPKSHavBjrjzXCxLdRanW3PQCYmCE",
  "key2": "5dVTrYt3ozRDdqBd2uzs8FqPEXGoqZum3JaZ7JYNHTNfnzTxXbj6wCiLpNenvVYg6v568vPiwrgxHEXddL9StQoR",
  "key3": "47BSBXUhkTzYie1piG6H5Mi2Rz2m1x8UBtiiVAmPUb7jBrjzgRsrkHC32i925waP19C494L3gWFTxaJtbVTjFsZm",
  "key4": "3ZCrkAxR2k65Rhv3KtUwcYmrDvV6VyC3i88ZnLGBY19o8dQTMHzq6Gd58A9udqRLUaPZonPkjK4vRo9eCvtuoXZA",
  "key5": "5dzZ3HJAksM8iD5QZHiDtqaXAarmyXeGjHSX24VLSLjSdngqvxHEXVNauJECbQEkEMGzKgtRMu73VT1VyQwwCT61",
  "key6": "3t6YtVdodMVnGBohwWRM9cJGugQhixAwRi8jCVhrUGN2pxu4YvGqPN35vVHAqXyXV4rVi8aUoQ8jc9AfcW8Gwz9S",
  "key7": "4FjQfRYXUQQ3AedVC5jjRDW1ur3oGetXPthSwb1PCi1Lit7tt7Lcz9ioQLVpxc6aRMBrzJDG6qgsW9FQ7nxhG2Zb",
  "key8": "4GSBXSfFDpMwUdGEjtRiye12pGEtBk6RinYKzQDGpJJBkvGxN2McuHMLqQPTUVMHYtpzo8wYMM4HHbMs8E7VeZ4W",
  "key9": "3m92vqT4PGfLvK6D6jR28vKeTyQgVR7NyF6WqA5uMZjCsTRrnhpmyhh7R16RLzQ5bP1SP93St1MYVfcq4dMBse4w",
  "key10": "2u7HR4G97ufaESBVMyXk5bCBR67oMprMiw1h1zNM5zbJeousb5kN1wBGs3RCZmk4u1ZHnD5cpRxL9HczQ9jGEiqj",
  "key11": "hCimmF7Nh5YtFxbbkZ8Z8KPRAwbQ4waJhAb2Yq4JpcPWADJFSssaBqYh2Xdc6MrQLKwcKHcRuskYRQrKAjkjD8q",
  "key12": "4uW3KU1TWbqWDW3aaLhADV7C2LdpNfdKk8dcCQZvF8EJHB7PLFPhjtypwjbn9vFRXWSKaprEvMFH55xYDrrgseVn",
  "key13": "3PPUCGQNhXgM6uiB5aaJSYze3VN5TdRWecULsPAkw6iW2pU22iAUnWoKDsnfpZ32D654HkVQRkCWf675dsYzx7uc",
  "key14": "qjNXyVaHNfoayFjLn7BT5caJUL1P9Uc6udanz1E9Y3pKcSPFTdQPJo7jgSHF8ouTbZG8PwKhzirNQd7cA8uesLz",
  "key15": "2FH9EqKcTvrty24GpTMiWwtUwBcV1poYxh3fTzLPvCfsWZ5ycHrdVsuHyLEcRWU3Cmu7c6ZhccoEgcYCeYTSsSRS",
  "key16": "2sdtzdbEUq4ag1LnV3eZTHHitawWp4HBKuhkZMGHoAaJkNSU4Ba2ETwQVBTWDXhXoqqKo7QNu9SCFytjDENJqd8S",
  "key17": "122FYxhhgRpwYoFexFroCn5tKY5tGYPWWA6ahh3uHivTPTKwL7QANS9WmNHoBHczXy217Vo9y6t1FepN8GWSa8w",
  "key18": "326hqgWFMR114UuiZ5hp4zeYusY757k7yq81HXwzNdrjNYzvZpGEUYKY3iAqyEyNXiiJDem7R9GFP2PenJYVBnxu",
  "key19": "63Jm5TiXKn4cBHpD4a75xYKdJ6sSybzETyDhGcYk2GLwBgmvXAEQvRpB9dLiZKdcizdVj8TM6YVpUobYTAy1JEWV",
  "key20": "5sHeZwYi3bGjGaGQnSCuUL2KfC6jbLeVCTJ9LiDhbX1K3Ca8zhLzhdKeGtYcaPhwV8fUh19EpgdRne9ex7Jh9622",
  "key21": "2JhanXheLoS78UMCYUgkWadenovoygAR7T7bQPCz8A5VeXZTHRPpGd3rVQMu6vJ79KV86uqLVWNHjRNvxhV3ZATQ",
  "key22": "XUDdibBnhzm1aNnzDXKwARz5GjiKuuUgf8pGjHbGmuCvBHh7puYu7z71kwE5saPnovdu9r2h8v6kRp5AsTfzWLK",
  "key23": "57vt3fFb7TSC1AyoW8ZsmBVtkVgNSKC6QbDgYuZBRTY3qrJPMmakvnUYsGjwe7tDYXcvK3CBNaKeBJddabmBfvdU",
  "key24": "N1vxJV3v8CtkHwiPVDre6zMked29X7BCUjmYap9xFBPSh7P5qxe4D8jMkLFi5XSSWKwvQ7ZycioeyeUKqYXsm1y",
  "key25": "X2FwHvXwtNVMo1aYfxGdDk1iKNZyhGKJMzrtFgUYJE5sLTbwr91DkbKY2ptHjrPZ8xvjZYuRGXJRdF63YGyxWXW",
  "key26": "3eUysABqaoEYKB69BheytrozSdAXYovLSLQPh2M2sQr3Sg9ghHjH6pKwH4LQd8wUCnyRNVQLG3erKCNMhawiBjpA",
  "key27": "4MDox6jN1wTdn6CvthKfVTFEmHYsgSCschAY8MRpsF3VVy33Ldd3vZtpSsoxBS6aQnwEqfPt2F7rEhdXBYKSLZfQ",
  "key28": "29UA1NQ9QdGZ9rk1YCLj3pj4vNCBoUjfABunap95QeyThvcpfde3HJsK8Zy8j2YD5tNUDKhyWG52hJYwBinP9ur2",
  "key29": "d8MdFNuPdyukaVzeGqPykEo7dsLfRqQuLyVPfyEKLzVRgNvfezhPrzAdth6kN8c4CtWdPvd5JSYb2njbRdSHkeC",
  "key30": "3nB84RGYZGJy9N6bXxBTFH4h7ZdvCSWTYFG6PaXbvnL1NegDsto6kKGeWXh9ji61mWNvD6rGEBatpjeVntmHwGox",
  "key31": "4hivif4tyosPpKgLJ1cyNzNtGZTpYFgGi7VfniHDm6p3nawRaPmGoC9kQgb7trUjRshsHcVLpzCNSHit8MjWDyZQ",
  "key32": "4XQxXWJP9JeXqteuCmkArBgGSnnQrgHUJjXLfUf7Wbg4EGLX4TReVM5WwnLFb7ET69q74CFtBhp7LsHc2TG1BQUx",
  "key33": "2EehcZUcgDzy5WHrKshyqsAaV6BaghT24MCyMBs9mLySY7ADZrF7wFW7JYoh1QvfZu34HetoSCb5g7hx2obPrXq9",
  "key34": "2XgwPjD5SULXXK2uW9Lr6AS3VjwikkCnkdjJFBR9zxAjXd4JcZHpmqeKJKT7oqzw9MYkf7Lj5GsJV7CzF66av5Ea",
  "key35": "4XRFuZ5AWWk1H6FWVGVcEy5ZuToRr99Jcwnb98sVjG2sUtRLnt6N9nS6YzDMFSJpF1mG2R71VkVzhY3ZAkRzZkvA",
  "key36": "36bkwuLfL4P9W4a4PW3yCuidaBZbqj2yyAnRyTDaN4qFwRVvep2MprtcqFqF1t4qHEU7BAPkyLonf7x5sgvnmsPY",
  "key37": "4CK9FJWWBFXgDBgokneFqh62kWNKFYLyGP5744gx4JawANn2fdhKBqtxqA1ZiCbAmPoCgLPZLJkcNZ2sMPBknmbJ",
  "key38": "G1qV6FjGbo2rr7rBC3eLLdrG1kSqXAbYyoCCkiFnuRURrAPiQik9bJwD4di3dEFMrM4W9XVouohcnPX236UGm5H"
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
