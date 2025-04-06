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
    "vwgoW2u9Mf9aVXHDW1obJG3VWofFVZte8hUp3kVXS7QAQPWAoP7y5QUZGefKa9FqoSECoAhqHY9ddp84xscig68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AQ4pbYXYoCoVHgn2RzKCAYC1pWc6bnV7E2CR9i56f7axTPXmVQpGTmaRqCechFVkQRsanA1tWNJZexZduPcaWAZ",
  "key1": "2dXAsoyfL1WMb3BuZfuRwtN9gjsV76Fr66n5SWzH3gwxzivRfe5ECg4Phiva4M99EYghBbqS4LzjqGMYEbvoVgr7",
  "key2": "4bqVKmPuRXVdvsoVvvcC2zSWr6nK1K2PfBDSraxweiWn3xC88gRCj1GBSkPimuXus1Nf57mcfMA7Rz9V4YKwmcXu",
  "key3": "4wVpW8eAzy4n7EqqVCtVMxEKRbzbLXXzysQ5cNJuuAWRjY6HF51LNGPyviaz2iDz3qAzh96wXSQdkkM6wbWeDvzZ",
  "key4": "4fd6JQ3afoKUGYtKj7BKyq1yuE1R2Bwo3QarpG9PiDNGDz1K7LyHTKw6osEVDZpC2JqDHbVzt3DfUCymuLCxQ2c",
  "key5": "hWRXaAuZt57ZyQuZQNZuq5Po9nmxWBCMgm8RbrQcTuERTADHSroyXNoYq8Jyk4sLCY4AszqgqWASU8MXSaQrBqv",
  "key6": "4hGKxuvNvaT3HkBEjdPd6FGwapfosncVH6PhSz1eFJsY5XxEDT5Jqdv4tDs3NuoHbHqgAuRKJVvoCF4UdYHh5DBy",
  "key7": "62NijsAZL9xbjFNuaFjCumhpeJqoipy5WqjYnR1Ds4kR1o3uMybXt5W6ngG84mCEWr3HkrjLyXjmYyHGrGuERk1",
  "key8": "QcuChyNaoM1nQUVJA2kdmwMLKNXBVkydYU9NH55jv53sjZJ2g9NBVwTBMMhT3auNk8MRaocxnFzw3BZW7K8A6EV",
  "key9": "3ypY9s9Ce1HwiUy1QWqSKN92p6F8fqdBSx8pPLQMnHWQFhtdMtMAYhhxcqkdbweQeEs9rGmzKJ38iudezqsMEsfT",
  "key10": "59nN71riWVjirEjDcaoPeNbGKrdVQHx2DYdGbSD3ECfvmNtWLWsmGZ5Q8FsQqXWJWBXSnJ1T2uaYAWmM5LWZq5Kv",
  "key11": "3GLxhHz7U7heKv3zZEDZJGWp5nSbWnWsXVvXUCW8bNfWQ8pfVkrJd6zQvAUtMTBwvtuvmHgUrMYUi6fXcSozoDKz",
  "key12": "2i6bTa7WtKpbzLkx5mVYqtXqth86aEs4vBTydpJxs5StkiQgZ7Z7K8U2u7HGQiiKsQ89fGpRaztUjew29GuqMB3E",
  "key13": "5G2xbDMVT8RzyPnQWFAePujPc4CZh5iLLN1JNyTfMrP9fPpShKXym3YsaniZKtLteLTtf3M16mzerGv7gBoYP6x7",
  "key14": "qMGtztQRBGdaAGoSmE3BYKRCVHi56NBLi8zxkf3UeMjhoWD3JefPnxLwwNnNiSpPd4u724AqoYCykEFd2sA3r3V",
  "key15": "41Vro2oGwDrhYpvyVMcrBDcZBmzcegurnesBhHWt5vMvUd2NCfCbfWeFjS2Gt2DBy79USs5avV8cEgNDCu5uLdRQ",
  "key16": "3ovFi3iLdfk5RjZwBh3dwZ4w6hUUk9xwnhyufEb816AcvHk8gyqSNwGbSfPpo8s2PaR53ekJAGg27CjjdwBLvZnr",
  "key17": "2msyYYZ9br4GYWRTj9zt4kejSonKjdHWUh7x48NJgfexZtJxr1M5zcR8rYnhAkvd41adxPDBfemDXRZvC7mEV7y5",
  "key18": "5iW4XdRKraxw4myLTQepYMgXSsgHzWZ3DT6AMw7m9JxXPURMLRLubHfPpzXPz4T6DV1FCfQ6mKeDrT41QS6byDoK",
  "key19": "2LMQdAG7Frg3iRVr14mRki4S9dwMwFjFYemXkuh4RQqdjGYLvZqMyCVjaNqi7JjMNBuooFQb5sJdHm5N4ncmN3WA",
  "key20": "5tqxXvr5rA7vyAapVDuwMPVoWf6SC61f6wvuhdmKeCTiZEm394HWdLmJ6waWqix68sVsSABiewJCMunscpytBaAU",
  "key21": "3AravizmwjnTjbdfX4G31orEyDMKKfTmRPgFg4cYgRn5nYkD7j4r93pBrGfmcB1f3stPdqFSoVDcbaPDDhf1T96o",
  "key22": "67S8eqUtUvD6YMRav9L7oEJt6E1CK9rHRxxVBwsGngtHnZiwqRDiW5keRVn9ywnvgAUDS4dVcLUkdqLEYKx5Hn4E",
  "key23": "3UhF9vriJqXCQAqd4WdYdVYRHzMpx3mc7vdafG6VgPVKMBJZASqWXGYxgh4ScQbdBhnhnGs1VZAUgz2rCz6jDcmQ",
  "key24": "X7FvPVK2HPDsch3C7YKthSGKXKMMBMvFTrT8Vgfms3dXxT8CgmmxUDmfbXeX3gE9wFLiPuPrc76oeGGRHXvu2Rd",
  "key25": "5U9BuoX3UdxweGT8vMUq11QZPwHziBwXnYxkpXuk5EDs6hDTQMdXDrzTnNZrdzFq7hbDy7gxpimhuN5uUApSB46c",
  "key26": "5S6ZfBQhpaiSeoCEGtx59zzCxxmLgidfQEK73pkxxwLXQc6tr5NcrAtdeDs8wFhaduLnProxKCHidG8BvFkg3R11",
  "key27": "pYP2tzXTTV3aWcCepPRCrWS9DLPYh19CLcYKHESDwym8gcqTYHw9ehbG2rXAZVKJTFpehJLbtLVJyucS3W4At26",
  "key28": "NZqeEzofNnWhCK3rWaN8PJQNZTPEUGkPmeG5u5Fqn9FRQx1hzWaBS9ANMmC9Ui3Y2crJy3ArETRCfSc1uXwKFY9",
  "key29": "3HTLYhsJn993A2aNMd73ZV3Yxx5aaRKy28xMG4wLogL6t8E2125GGvhzV5rERRaz9rum6xwUtL6VRsqgaQBYEAk8",
  "key30": "RW4RdmHCKxaitN1QihPhUthTJ661i9ftugzyM7pAVQvTrVyNhweRZDtnUepRfUFiSjqu4mhU1maGg8BYDW9fF89"
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
