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
    "55Wd3UJF7m4qEu1LGKjqN1rKJoe7WvmknrhWva8VGTBkXcDWWvyCECR59gnNSYeWJjMBvj3Pc3fVqC55uBMbJqtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29KbZqKC4bvDoFw9zQvD19ckRkPn7d9dDZ9Js42NpiS9MknGquGMh9EjMxLyrjYeDDvA9i4bFUYjQ658XC3W3S3e",
  "key1": "2X6bXCfwRyW3Gdzw9WGq6bL8LDwX5LqpkK7EgFreEJCSHqNeFcAx8KsniqhP8wSw7ZgkfTjBvXtMDetyiZnmBT6d",
  "key2": "35eNVJWJxbrHSPa6JRkugvbkGxPjUrQ731c6jPfexDKzzoNb5266fzVZRtyyvppn7caiQXCMSi7KgV8KFfrMWLn4",
  "key3": "opFDUUxxUbE1t83PQGqizAQ3P2hFg9W4BWedHPkU7J5ttY5yCE5hbw7TLn3TeiG6yT3snRd1bA586mXY2tsmxSK",
  "key4": "4uhXV3ibwVo7CFiabtAav5mqHqakvuoKsv7xtyJ4XGCZxkNsnEZhJ5aCQBpbeqpjQUWGZvqQz1k7T95WQiVw2CHv",
  "key5": "J9poTpkSbX7dGUKgLFN7MJ6DBRn12DD8RHnKfHQbHkjtmnDPLfPJ8dugPWNMWEdCcQYEKdufYXgMmkCQ2ePN2Th",
  "key6": "4rwaGGAs2UW9bTXagpZQLvg7ptusfyWHAx6j7UntKVLUipchNPZPwgSqmntjG9bLjWAhETcNQbYNwVcnxP4L2iFn",
  "key7": "4Qjgm6ArqfXeTGg8wj615Yqc6QExd83hJvMYqYHX8c9httRdTzCuS9BwDeR15MZjotTDWr6p7ATb1eDRteyL64R7",
  "key8": "d1RGBfBk39pRkGhBiBGYLETdtWXTpqJDpovvKNh4ia7TruFMFBL9RQk4CT38iJ77FMxbhXrLaRemLAZh5wipECC",
  "key9": "4BUNpFc5Hj7TnrXzZKhTT7PX4x5wMV73wgdVfSAW6Lu9m7Sy2tG6P2qnzqd1U9xyMAVVfQeU1kSkupjMmjgXc5k9",
  "key10": "646Mbbxwphpp7eVyuwfphJ7tYkrbTya2D29NS9hbRLkt5MJJCDmHqqkhvKxqMaSveo9M1tJHuu44mASH4ma18NiW",
  "key11": "5HzJeRV37JmLTqcbuRbmUmrrBgzjcZsqgwa4viXXAqJ1UGhiXhw6zzSA6EvhLek6ecpWGgMHPriARRH6DLcJ1nQc",
  "key12": "wsYMwcTrEjC31Gs9FNgp42sYE39YTSYJ4oQDUgkEiTTD2kyU7tfXQwHwe9Ub5RBy9Knoi7XmFppMuRgFGMpTBYM",
  "key13": "5PDxyVuBLRig4aiRwKz1MUBrR8eS28frNWY5ozkvfyBmzaQ4J1f3AHUg8wEiwM2nHcFiVCv7MFnNU5uGgpS1bsf2",
  "key14": "3Q5QjEznAojPPPJ4G2KixNdyJyoxgPSUix6cd2Vp8XtFpCa5UYnSr29vfjRC1evZ376dMXy1kqhZJrH5gZyY4WVY",
  "key15": "4qqqfrNZixGn3ngBG3x7uuSmzCGCSumWu7biQbo9D8bJ66Z9B7CU8DfasQMm7Mg3N15eaKBGsAJ2rCUj2psgNWy",
  "key16": "5qNXFWEp24YhPRfctJqPhZW6tX9Co37akwbLd5jTDGoyt9ZxPpLvNjodpWLsEKxRDakM8TmBEd3qbpvy6qke5A6v",
  "key17": "37oXoaSFdgDrSHMfCHsRsr9kt2D9CMuUUxnNiGGmUSsoUDykccNBUMwJtGWBHvD8XyB1Z81Zvhk9qDMusTWPE8jV",
  "key18": "5PTrQ5QHKSy56a3vjKZUvRjsyCBErHP2grefKt8RyJtSYLTxontxu5fCBZenbuhtmozkhbLrz46arzL7dv8UQpPt",
  "key19": "hL7MgcDHDwJP8dnDtM9T4D1UiDRAnRjdeWix7npr1RMtprtWRbYK4DvnXwBnzTxzcMn71FbnGBUsePT4RCtZSC5",
  "key20": "2tBF5CG7fmq8LJnX6WzT62KL4CpAEZDrj6unpFRWchKka7iRR8ru2rKq8zCCznz5XFVJUd7UcFNyw3ijXutovvrz",
  "key21": "TnbPcs4XPaBafePNbgedyYv3ZyHXzKp9Aq7oLbMGF5j7rKF4jTPZM7DvVLA1xT2PpdxB3AdgduNgqoybx7xUX54",
  "key22": "3ZkkY1Apfs2mi3w5WRcMqAHogR9wFFZZ1KFt9Aji6PiADx13Zpwc5bqPbG2yPnvinYf7oNqeiQZeCUrAMS23bTY6",
  "key23": "5Fdf8eRc26VmSz7PMhw6x3BBYDZt5z5qasuhGyu9PMLyLnsHWGQbA66j3QpSGYC9ArZ4Nc589NFrgFe6TFgmzZHs",
  "key24": "4xsAfax2uMRv6Ya9ZAJ6G2G84gieU69fAUHVDzZuUNUCS9UKMunZPqXVbvtBKLHx5n55PRN2pkC5YgzB2Cu3FrP7",
  "key25": "3DCbtZoj38EubwSkJsW7Jj6PoMFiZoS27eyzvHHQ4H7kpTVhGjFUmzQ8CL92ZVh4QLvMxdcT7kVoYrAhNBr7wpeF",
  "key26": "4jvH871dMQhA95rPzXSUJAjQ4BgASwJd9UQLj1YnyCzveHv2awe3Tz7pFtXu6ZkXEbrpLUgeEmRdx3Y2CwyViBTh"
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
