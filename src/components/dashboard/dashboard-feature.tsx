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
    "2FLQk6XCgn5A2PxvNrHRsixpTXKubL5JTkytQpU7hRF3NAeZjChy5KTQh5iua55kWCALr7gsXidx5d4oN3yAgDZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q5vU22UpSGNV9AET2bZeoJq5AAqC7jNUhoKYbpSYXzmvRXR27QJiEdyV8ygEHgupUTUba7jvuKAyzPijKtadZTj",
  "key1": "5As16tJZyGqZb8mXp4NbLyhi7ecPuo65Hrav8xoibtP4FQ1XQ1UKEFpYPjnWHDUDiaUApJ53mCJjzVjhZt3LLbhW",
  "key2": "3jBwD27KSuZgwsVFG6eCKqAevtYM455YbNqKL51pVFMSP6PdfQ31L1Fm1zeZFJAN5qzKQoguJJpb9FLU43WGy9Jw",
  "key3": "5u5ikvAFzb8oN7wG6anHYYEp6WDbtsQzNJHnh8XqpjstHRwaWikigRCEYP7WGnrNUE6g9NGpMqaMc5infaqGANoq",
  "key4": "C2ZyTnrY8aYr9Q8aKXbNnYRUevh4wd9mGfkHPuQRda7UcZK1uKqC3JGbCGg5Pk3V4mgVobSksKRabEtxweFvWS4",
  "key5": "5qHBYGvnRFu6kj9GpPVFe5e8EvYPkX2VbPCCTfeUjjfMEmDEjVV5jFAj7HxSwffAecR6ZGMLtwVhgxr33zvbM1FS",
  "key6": "2RxEd1Sa2RMSvNwdbtSNNTMccBYQz9wgZDYuEZQ8L1HncNtYeuNpyMZCKYLu7XWmRUk4H5Bvimgi3GiYJekvDrgG",
  "key7": "4p9jgW5fwDTMuCDHRmrhmCezwhmNrmBe7JQGkCZsnuihPLwHcJMnXvGpkQ4d13vbYnzSP1Fs3YNGPa8LH7Fw9BzM",
  "key8": "5otQjLBgYvPLLC1Y64PxP1cue9Vuw4Yr3dhgzDgKbEQ78DnySKTk2dWzK5Xb9jfNeHDTnbEFCHYfAtWbdhYthzy4",
  "key9": "5sR9etirmikqiVMxUEYKKN5e64ERi95xxvQTi88U6NpPhwPr9JQpcHaEvMj5haoAGeQrqvbxaWNwiP5FziDKZrdH",
  "key10": "2CLwEsWCUMYsdxwNuHcaNHX7Y7CTZyP1RxfdmAZmfBwcgyqNThaL2tq7Ro5EgHvCRFbvEGt6smReA9EYe4ggHNdj",
  "key11": "46faVcuuBfs1auXmmYry5Ck7FmettKF51Jw2gv5cVG4LwzQUbzodZqGpizLqFf6qtSyfeX7jBpRC7PxjVbYnfxD1",
  "key12": "5aayM7HqLPLyZTboLK2yxcyP8H3gjN6APCBGhYe4eQb6Pc9bPMg97MQQzmCUmMx9j3xQxnKFCdT3nv4B1X1Qw4QW",
  "key13": "46h3icnxEMnkZfdmqYhaSWV1wxsqBb66JxTWgy6tEPNfAETff6XR9kNET4uZSoD2j8xLASNVpfksonzssK5Aii7X",
  "key14": "4TRzfGxK3iZg53Z4DmtzDiXsMWGM2J4dUEMy7r87EPucJ7XXakaG4AoBNmGJ8UmiiCWXrK7rD8dSomGLjDfaLo2G",
  "key15": "5GFuj7gRTtH7t9dtG7aHXZheKd86zYzkxZkYuYthkVAKaVWppJFi9qGwqgBpue2BX1PjhojZ8XKwjiCZE1ymvHxi",
  "key16": "42Cdh31n8D7t6WEBwuEBiT8TSBGChkavT4DoqzYtuUZ6ViBzEM4PpUZ2X3vhqQc3zscaNm71uRVYSe9Ytm39cBNn",
  "key17": "gJinfCmmPv95ypEFDUBcMWATbTHKWjiyUtbDE3dov7c5MM5hWScstpyf48mpzKTvfWRcXBmiCuBwi6dJtmVhco5",
  "key18": "4QBNXFWFVfoe6Zd1ao54rfsevjBxo9owG6toN4tdTekxeRdz9CHSLjc3soqW6BtFJbwvJjkJR2GKtwkAGrjrxEWk",
  "key19": "5ne45y9QRLJHqBc12wNWJ6KLq7GgjhyWgJfpiPVNX3BH4NJLUkYaX189yvfU2d5Bp8RQGd2qprFNn3dgYfkEognW",
  "key20": "5DacDBbqEkMo2tWGFH9k1ZHFUxFe9ogsGwco7LyfcQfYhFavXoUjiV1SYUoLGcNKDgTgn9miFARnLhyYwzcEwe8P",
  "key21": "5na6M2XwUeTwgDLFyHxY86Dvfj2WReZmNqib5uPxYRnp2zaJbtKkc9V8V7xUqDcchwgW2VtyJmHoER9WtqrXq8z5",
  "key22": "5uYhDY3nbFdyRsXSgEyTVNGRJ4m1KfoGNvSagr9cf2cDkfX5j19BNWWrq3wgTV2pizhHc3DgGJEQSxnbBrhnkTKw",
  "key23": "5732YhveAViBgqxUxwg2LSqhEcri3wX1qTbaGWC8GKjwqiuqeYi1eW3bhvv78uojZfcigSgfV8wRDtBRHHF1DJLY",
  "key24": "3GBUfogcNhKJNQXpSVpHS9EKNbhn9sNEYJWSjT17acACuc9o4avoWh9xk1f4wx1R3pn4LEcoHCFPzuEk27vemTwc",
  "key25": "5PDmD4DcsRykpQBHudvS47YCyYjpacAXJ2J5mk3efn8fPAk7FwsCFaukrUwv4P3rmm9Qw91UG2PPHSEEezGKUUWb",
  "key26": "2PTjShkYZie2TqLxNPsmkfGtb825MXVnHYAn67C7e3BBDN76bDEBPcamt6fwjbJAfninhLPof8v7oSqmr17E5V8e",
  "key27": "RJnxfdp4Pb3DYtp1apCqWG4vJyntYNVyR5gi5NKUqHkT7rHueJscv7kKCyPUYKcxzeV71Rh4XU5BZKQcyJ2jGwU"
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
