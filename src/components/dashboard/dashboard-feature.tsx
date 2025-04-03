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
    "5x9k76AX8g2NTEKYDApCGQk6iCXFPqRww9Z62DGgQ92UrDU2akM6miJ7bfWyhS2xHzojgBeAkjCVkwAyVASse2Ah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pbSGE1Awn7tBvYsZ7nSz31oaht6p97kmfonSVeCAouJZ4gHU82MdGHuCyrycpRmcPMmvwvtTu5tYivRUTtQEjwc",
  "key1": "avNwj4aLVLbyXv4yQjqc48erykLhiPBrfqbuFmiq8SvgZ6Q1BLQtM8pvYEeErPKS6wkrZMVh9WopYZTBxvEiPpx",
  "key2": "FfSRHBEHai5G2cUYXvD1QJ76pmcCiPKEVgscDTwfYuMiuBAVwYZGtAwVDwiHcSE4vw1y7LEYydh1TxSw9yACKG1",
  "key3": "58UaRPrcQpy58oSEJVvmuGQtBnRZMTaiz25ENeX7hPwyB3Umj5WQtB8C7v8HXiE7rE32PGcT4sau9qBL7ddjkdRh",
  "key4": "3k93JhG5R8cVTTyapZSUw8pMnmSKUpdCm7R7C8fNQEzLkKfd85zgoQK59tFWcGGJEaQCAEDPs5bt9akxFfC5fKx6",
  "key5": "3Xo7oSH9yvNFS2tD1GQ2xwCWbBis3rAJS1KStdYRg3JgS2hsBXNUM4S2NkJfnHbhH1RgJ18ng3phj5tHkYUwM6a8",
  "key6": "5M8mZHiQjked2NuuW7GSpCb8GGzfStjN7LfZC43gRa1fDTypSYgQKsrgWc8s5cbnAmoPgQXw2NmpYi2R7K4ZktGo",
  "key7": "2hBsiEp2Qo5YR9tqWcqLe3pcXkLENyBUneCL16F74Dnzr1PA2iHswgf8vqM4t9vs6sU7ZuKiWRnjoNgG5r2Rse8w",
  "key8": "3GfmNW4xow3XQ1CEZpG2mR81hSh7QA2Jgt8ToZPjjjVkVyAyNJw5kVUUBNmcMMiKWd3ScrHAvrHmdmjEByfkXcQ1",
  "key9": "4BE88B14PYd5ruF48JmXCECBUfBnopE6bExjVU4L8ZvFaViACydB2D9GsQu6Jaadrn7aA4cRHknFaGB2Dm7AU8cC",
  "key10": "4Sxz7DgYTq85ihdCU8Y6L5yPC1XFoBLnqNzcgxD8Pm7XRTK4LCz5uHeShQs9TL5gZ1EjXddGz5PLYGHxuaxz3kyv",
  "key11": "4mqXM3fMBE38MiT5TGBzQ8AkgmTngxXE6aXDuhKgvaDvLSh9ewRFhyuuw4QEiUSQ29WSSa7DvuQSkYreDbQHn9A4",
  "key12": "42Driy7cfPFe2jj7uKjqwdAHSJYXNPTD5V4F8BP2fDc2FXRdM4wNY4pTfT9ErahH8MyEqnznuSufoZrmkf3Ak18C",
  "key13": "3NT3XfuzfRYNUvB4CrzRgVLqYjvQcWLbLUEJgXwMv8Ar58JCyuYC583HVYUg3FMEeg5n439HycKEHznXq8qF5CMd",
  "key14": "39PaRp1EbFmy6N7CivQMphqhBsGcypPc2McZjt5Gin2QNuzU8jyrQTEYsTNuWXiMCQ6K1a1RRm5iBXEMW56egJLN",
  "key15": "5F18h8JVicHHeo1z1Ur27dFHdhT1Ejww5N1pJJH3TWiZpkfygBSSHnMChyiLEVK4mbTVjzWnf4GCjdKCN8BFdUq1",
  "key16": "3NFZGVKo8H6hUZUGTHqn2JdHzRMPjg6fgNeLMYt8qNCaEFxT7C7iKyREjzuxzepwosCYNxSgJiDVRuGcsM7vNemp",
  "key17": "4fn2SPnuTU1Qzbq9ETt81bvKEfxskiHMHcFvUXbqZfS7rzmitq62PsAfMMF6tGUSCApkYaoetBRb9pdzmZpXWYVy",
  "key18": "ENXXgS5aapNmwkTMKaiEtHDDXjiafTMRkqQMQG3vPbF6sSLDBgbAjr5qqRGwZWMFMXz2WVpw4GuGdC1Nmrv7a41",
  "key19": "5VJCfcHwYcHdhkqUADQ3NkZjjcQFA4fh8nq3z4wRY5CJFkJTFZSJdiz8qjBSrtGWb8MY97JmahycZ45n3XLqUUfm",
  "key20": "2bsVXGYLyTj76BxCrayrnpRrY5aP2Zocifghk1Drgq1aPLP5WhUskUwT5gB1EnCR2ZJDc2ZvL2AS9Ud3ToAih7G4",
  "key21": "3PYVVzTjKgk8eBK3r6P6sKJWfrbjsEpE8a3UQ49UoJ2EotpajochupNSSWSEW7GKCV6KuFjdRMycammLBM3ESat",
  "key22": "4us4Gn4TXUiVc6NrwHikKBXDRcsVvZ3uqRShFnSzJGXTHZB5nHNX8nG2rbtXUpR5CS5LaPbPcz44WCKwXrz8XgrV",
  "key23": "2kCez3QmANZwcMrN7C1Bawxv9CDgbHyy8oNPJCkNB2KitGSqLFgVMHDvofALiY7Q4F67y21c4Lp85wJPKE5QLeob",
  "key24": "2jfeontLQutVL8ZEGRhBj5CTj6i2vyzbPXNpCBNCf136XWywsKQCtkAgvXvFe8tN7iLX8ZNjrKfcZ2PnynBzTKCz",
  "key25": "5HPaZKCwrnGi4qCVsASTaitGuYZD1hYdMryUigqFUALnnkYhrgBLaJxU4tDD4RZ7W2LGre4ZchC3MAVYs1N4MFp4",
  "key26": "3bLGnnST8xb5ATsFhs5VhxwYbr8Jfb5rRHKyo7mcm6iAzA57gjSHwXUe8eYTwQM87j6SZ2GezpqKVkoDp1QWWZHz",
  "key27": "2qRNqqqQdnB2kHez7KoTMXCU5ULrYWDbLqC6sVj5W31dj8jafi2y2bDDbRoau73nVg3Dk5ehGBFNJyb48np1Ms48",
  "key28": "2aLw53aVRspgP8P4S787w4DPyQoBiSSNssjZeZdyg4aMSqK5BPJCwEtBEkQ2Q1vRmCVacUVJ3ehQZ12mza1HxF4L"
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
