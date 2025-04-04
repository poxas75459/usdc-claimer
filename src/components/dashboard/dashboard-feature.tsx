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
    "51gcJ7oHjR37L6dHMNxmempXTDoPG5uxvawv9mzSY5SutRdXNbZktdHtMc6HcwmuJiBJZC4UmayG6jptnuYKeZ2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KiirEYGbhokyoUJqwope5arvJLNvJwHWvbEidh2icZUxB881FJAncTJcQfX8ywWL6bCft8eeyr9519rBNXoQx9Y",
  "key1": "67ZxeJgVFdXCGGsvcTy46E5AkWM6P9DtxDnzqryTxXVFmj9gzGmZzYcS8dSWuu9ixLCBtWyMe6oiR5rnXhymnSqd",
  "key2": "4Sra3xFnNvTEZLfLEeGGgtMctFDpneZcKGGiTuSUyAxU8ezgaEyecLpJPyTmtu61RpyX9Bx8CpLfjH476YnDzcxv",
  "key3": "5PtmqPNB4zffGFQ4UTqoZmyiiEiLKneKPhUzhuX2NuBokDEaKJx78Le7HNRpyiy3BW2bMYJUm8qGK4rK6yJbigcq",
  "key4": "4WdXh4aceTFwJBeHSWAuU78JvkrHMMS9y4FWrMLziqMvhTuYyedrmQ1Z15LYAfteET62qraSKd5GmGEtfErUKFeK",
  "key5": "3KZJ6XpzaDBTtvB5SDaxcoUZRYhEfMvZnctK9JBAsxFLiQMTLfFGWihEifmDFcuVnLxvjE2AsirFvAZvMk2hcLN4",
  "key6": "4whEp3imz3uv4pv797JhJ8TCv1GGKodxPaapieX1UuffkmQFHFyhAUpFbABY8AJDJ497Nga6fyj2gU8KWCm8tQfB",
  "key7": "2rFEu1aFXEoGoba3P3e9AC9gpQan5Akn87S1jaUgDHgmBBVzmLk56HW6jQHkANvTRq4YwTfVMoZdQsKkdeAYQhD9",
  "key8": "5e96iriTxs3qPEALGSLRjYBVKGbpecRMZZkr9x5XXffgEiRTPn1LrzZvrnLXzzu14jwRTvfaPNCf7kBjHSZxaV58",
  "key9": "PGo5BNqJ7YfKnxZy8Zj893jot8vkzndKrdhZ5FzEMW7vJPGaP41cC1EVcxY9v9Gu14Zm43o1UPf8NtzFiCZNyFj",
  "key10": "3sSNjw3xG2v2vdh9xXyAaeGQc4sdmv4Hog9zSoY5j2hjfHoK3LtMAiVsJu8NdGdXCHksA6x24uww14r1FeHCoho1",
  "key11": "S2t3ZuTb9vtmidAD8b33Zs3f9ZXkJkzdzEB7apGmmSnEAjz2VbGThcHMBkAGoXmpvbbse74Nv93mYfJ3WXfxxdw",
  "key12": "2FviMqX5pkvDDE1S7UHTmdUvuC5Rrgc5Zah3d1Nd9XZNFpUTN88upRLRcgMMzDJKRFzjRjx8ywuuvce1ZTEZJwyD",
  "key13": "3DXurG8ky9caFLBWwg1RnmfUy4JCRQJ2tMKuGAfSgpqCCS4KK5oFnwtaejZVA2QEpgqfBED1EzySc6M5iJiSWtPn",
  "key14": "4dTTVnpg8JyeF7G78WacueS2i6PS2sjhjibZTVQRkeHkXW6PP1VGKJBEqUrrq4J5CfTELxxuhMC8aNEDinJ9kHJw",
  "key15": "4XcE9Ws75rAoMkXETVQ4TarihdbepZsngTXTYQp4rQmwbSfkt23EzzDhGYbtPHFJLNmaxcPVnTjFb2iHTwmmA5Je",
  "key16": "3MabjpSFX6jW1PC4U7NTKu9PyL6e58K9wCn7yQWQYmREUfXZCkNSyZTxosk5zNdAcJRCAgTpPNGihZR64p5cjYci",
  "key17": "MCVGiq4teuNH4XwWGKad4XzWPfsvmpbJKzJJCuw7H7khfm6PT4q8s52hDwjSjJ7bd4NsuYt2e1vwR1AhT1qWVJv",
  "key18": "4bqMmCuWeXZC421qyNQUAz8s6L8PYchNQNGUm6m1tj9PHf9h3fabwYiumkbRod9PSp37yznuDpGYrBsopy3HYoUv",
  "key19": "2qJmwNVknzPjYNBu8V8mmL3ZdgZjBvY4uVF1eNYCgbXot1gSXbF55KJZZWwmaaNf8EGjQkXC9ncUkjTpJDjTkish",
  "key20": "2MA5dTgRrc1FeWZupDjegJHyfYKUSGhMQXVHtd17CMsA2bQ3SjH3YUMoHqgj5SXV6fS4Xr41DjmkkhxPyMGUwtoy",
  "key21": "5qtnBAQR72AiHUPofLuuCeCGQ8cFTDB9QMd962eGJ8mVP9FQMDZt39sDUwg5YAfJjo81LF3nJR7f8uTbzziKpXeD",
  "key22": "io3MGtzwApMLFE56CuxPLJnstDdppVDx9frYDtqhcEwrCHNGNtzyjUiw4sHyarUP9qZ7oTvkxd1xeQjhsRuW9QU",
  "key23": "2UtANFriUp8jP77kdeoBVravXkv6s4qkSWFKb2E3mX1vNjKULy4NjdchXFq9T56vvBzK8GsTtsZiFzX9EkaZ68kv",
  "key24": "3jKiUmA2HaeHnG6RPT97jJPQrRsQBMeG3tdGiwgMtqVu63DNKYmKqLfxokAVGxmsiBsD3HtrPdtrqLaHyvrSYtsU",
  "key25": "aCV6NhAsWTXx9hE4mHipaqotiBGzVnGd6o8phsLEvqnKLjN6Pyihvp1J5ZYSBm4VR3ZhF6M7Jg5nTcYxqBQhboR"
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
