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
    "2QPbPoBscvC9A2pR34Fi3j2QKv3SnEK6w38anP3vVr2VAyJanPAnBpDp1L9xni2KSPg8oQunAj5vQYpDARntLGFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ZStQdcJGYNxxA33dfFrZPKtt3uL1ijwFZvakiSoJtjAYHgf3JRj8JM7kJoqUi4jvr8vksVtShi5biBi6X4G9JR",
  "key1": "2hxaeKQniN9PDhDEc6vUj5Rq9FBn1fr2Tsu53mzyr5asadevZtWFZa3yjCLJTs2F5Kc77xTW4bXFKXorpubnFKQr",
  "key2": "5zduQzgmKgRMKSpL6kGepGQ3qxckAimXejWXU3NoDKv5aFZaCn8qwinJUBDUdjoDLRz7rHmKR7hWm4EMTahANy8G",
  "key3": "3e7harj2btGBKDiikTRiXKyezMKDvKH39eQZTr1q5h7pFvsQmz8ebEvZREA7dWEQgg4pp35BFEuF4V4gTcYB7rSJ",
  "key4": "2XJDgLyXWLecokuHAFDgcR2Wg3MFNPsVdxUK3Z9bQ8xqHQRsVdwChh3VJVcVWS9kqXgJZDvA1N7GG4vSGVq1rjeV",
  "key5": "4Pr3t75m9rw8sNZykTYSVLux4X2Y8XVJtS82JiSw9CxVGXLaAVa1JNV336vLFLfFi99ZjY3Tf3ic6y3CzH4H3Xjq",
  "key6": "459zPppZYgcJppXRhVqEXR1c4TXXwcWC2mHpkBMTVhPfT8UJcr54kBtoZfxgP996nPsRFtZjhVCaKkheUDfWRkqT",
  "key7": "2cZcHis5itiacQFqr26gJxqXUcLnneoSo1bfmS5LTUJuDkePE6yrjn2ANQGHTPmahP1ZnznhTwbh9BusWzJrY9uQ",
  "key8": "3koFxdsB4B4AfWXwvErCQz86ZWrN1Q7izsnLySKp6PvpaJMKrmEicyae88HNqAW1yZYkCmfbVyU8K4WfdYQbQeVd",
  "key9": "4JXjSoUpoKRGhzWCJECk2eWpfbdV8Dm8efNohRnEWCRqYk82JDXs9qcVTu8RvnvmZAV2Jn7QrbWYVpzUzzNeB72A",
  "key10": "3VHzRHShgodFzRG1wNmVQzZoWTWrfXEvowEeSXdQtwib4otmnxHLN9Sxi29R28T2rX43ZY51qkUSFUoamWRL9hKv",
  "key11": "AKtybWEwFNrxFfHpmcmHM9y85XwnkHWvJWaKHjTovJjJ4xdsTtqqbFebvv1NPtq3f1G1cYQDSz32HqZaBaMRW8Q",
  "key12": "4pSMKwhAToutsNnCdtdZZxYP1U6kDCkNRfJTh5yrj2jywVcfVtuX8wKcgb2ErKNxGNQZXvYUUa3qe9CrVT1ersYd",
  "key13": "4hZtFSsHA5U7zaCf3imjkUN6gMcXVaSVnjUBRQtueNKndc1932129F7to4ryd8j1t2kFnxtZWw25ip115KnVScUU",
  "key14": "21WdLzAzSTEQFvcWwc41nnhvkTTMoSeH2zSfhCmtiFX75qZ6VuSkbTey2j5sHMw4zcYmcmvn1V982vzVWzVK9tMU",
  "key15": "5fBkMaVeuE9wfJaPbvYiRYDh4V6odjAVdyJSwtma8oWu6mFQXmkG1PxjB11JYoeN9aR8JUMA5qZjmZQ5H3fpNRCF",
  "key16": "54uqkgGAQ6JcDSqA7YqpYmPeXfnwrMbfbQxjH2ayLFgz1ibeQEXsJo1aZDW3auhymd8LkFJyZiRi7ox9vf6EtihA",
  "key17": "47iQyBZAZxtRMHG3RAbxhp4JsYcsYDpCprg1SQR8vgzAfBoNGc4poe5H8owDQdChwD5LifiGbamrBDddQziGZSUe",
  "key18": "55RkrBm92k2DRBAvqeCjJnyxHrCYZMDBCgD7Xy3FGmiH7EbpQSgPM2Y4PZSKLGyTCSXsvoKM92KhXg2avKB6byX2",
  "key19": "3xHxBCsrm2dNjtXzKLUUiU8boYjRXY7VHHbRnW52r9MGYyHaZa5mrPtjvUv1F89Pxq87wu4Gmq5xaP7sWC19mcWj",
  "key20": "33ZDdbT8EvxcvqNKMCnFVFQebJGCVsgcaA56TQjRcjKYEvHdNZ5ghsRsoo37ta8i5yMsvR8U7YGPu7fEZBndRnht",
  "key21": "66kd7d62XekjsSi76MqKJs1deweLZE5GfMdfVukwNrzE8P3NjbFR44Fd3CeAdBrw7vo4ZgJC69GFKMU1DWTTGTKW",
  "key22": "3WSZ43hsrpvqET4ES3zMKzgnSQQF6UCoXBzvdL5FFzgoS5U74AWgjjuHCs2avvG3CVydfRp8bBUytVRVR3j6vWkA",
  "key23": "3G2HVdjK1v2NHSBreEaoayygj2WaZMptFRdByhkvwqrAWjz3KsCjbvk1Cvik4jvzTjRR4CUUysFkMEThxdD5u328",
  "key24": "491NbBn5TBpvDhfEUNhFfLC6q9PMqfittk1Hy5HYakeZH2rWUTaCAx2W8pfXGJ22AvRgVZj6BN9BRfwDYBvFRLvX"
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
