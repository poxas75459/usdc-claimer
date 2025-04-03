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
    "bbBoe8L3grre6yuponnHJEK5KCEQcqYW5UiwCEHLPLUw1dDzZmZpYvZoCC5fvgrtBFX3Gxuqitp6aJA76hVXJ4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g7J8dARmShpcWPxg2rT4u9czm2f5tAZXvC9RBhPcVKHmtV9WVGVQUKXr18gk1LZYurrzT6FuxuWVdJppHMZBGjs",
  "key1": "2WGBBpSxWU4jrrk5FcT6D5S2RSusnKq4VRPoL38xw9JFfNAxdoZK7V34kmwakZTiz3tr47aaZS258NRpK1A6bntM",
  "key2": "4bdyqejM7CrUgxyb2arGS9vwzDYhDj18pdHS6Anccw7AmVK9EzqneTEGpz4zo4v5pgFYdK7fFHxGzwn2Ra4fpeWJ",
  "key3": "4G1nqTKrSZqV8bHM3mTPMM68zzdwgBBCPQnSRAhQ8k7cNQFwTnZHiK1oPdRCuw5ryz9yZ6Lxk5XfgyMkuNAdtSqQ",
  "key4": "2bGNoCdzH1bTfSKdQagGCdvoMkVJ4oHEDpxqYo1jFzc5jkvRMqktMrc72mCxC7yVpE8bmeMTtiZUwPkXeq54peoj",
  "key5": "3UychSfxHCV83YGuwibJ5z4DK3jvN8HiAVZcLF45sdmWAtgcBaxZG6RsSW1RjtVoLESAq42wvu5uzEgv9zuD6Xqe",
  "key6": "31iDURg5hZxV3SdVeqxwJ1FRLqM5ESiguFWT5GBgWeuVfhDgQabzrhYxN9H7PVutfRKWFHzHMc1RWBWy1f2bfMqH",
  "key7": "41VuWL393LQthJ4r9bKYYJZ3ELpEFh1NE6wBrRYRV8kNBTy69SbM3Ua4GyVZHRHLv9Jb7b5c5SxTgxZ83i3r2ncG",
  "key8": "2D2CfNc6m2iJsZ3f8tBpvY8Nv61hyqQmXHHYyCc1NFvTxHxKNZkHPvr3bUYHumGP12yN5aFvvRPmtf6VhfSaJSB3",
  "key9": "HKJfZFTgZX8BAL4aRt9DftAV1KWx7nYz4n6iN1mNSRhtfCnFdApaPJZjz67PHpyWKYjFgYPho1spRQojoiqk6pk",
  "key10": "47qs8RFZw8qAqZG9P3qJZrTph4DqrZfLxY3uQbJ82q7H9B9NaQAf12kU31FvEHZye9ZJnF8CrW6DTxUBo2jrNbgj",
  "key11": "3fSPWpSGim6egAaPv5g7yLXur3hN3P7WgHVF34ZyrEkLEjxTRbZrDyiiCVh4m8M8VERcBB74VC3K2Eb9LwijtTJ1",
  "key12": "2qFEPqpkHidts6Y4qgCViNWuww39AHUMQNfSyXiTBmb5C5G5NCDFVNuNv6RyaoNxhtjFAmHGh2811gPDqQymSCk6",
  "key13": "2KMq9XXuWKhv85WSzdQtph81mWL8BzRbXB2ZGm7ds4BYkLtwbC4ro94SxEiaW3EVdqJwJk2HKWBKHJ2WejgYtdrv",
  "key14": "4JgDdbxF46gV9g1fCEodo2JX1ercPMBhKShPGD7NkkMYb3ZE4tSguvtWDCKCCoNTfwSsPaAESszbfL17BQUuGFZb",
  "key15": "2H1w4R4vURtKzfXSw2qAUP8StnLqrPAVXiUCLD3dUVi6A8x15Na9RJV36dXAq8i1sw1hmAaRw58Uv4ZoM2QkhJrE",
  "key16": "24qAkXN93EiQPYt1XqeVJmpHqUSFBpr9d3Vangj8YP2aEe6W4g7DuSGBwqkS6SJkztN8RYVuvWRM24nrQ6212XjW",
  "key17": "oxNcZtwjdEavFn659bBArbb9XdMRj7kSFEzFmhFM6nBYSYqXaDUykdh1PtuYLQBDTkwH2jmui5mByEEmdcp5Mxi",
  "key18": "1PSqxaELZ4na8R5wrLm21fC6kZEWaTUN6xgkfmVrK8ZmpXYK9HaLw3ZfHp7AhoZkVapNdAxF6dqVhSNVKYsb2F5",
  "key19": "eP1z1uJfUyjdgsGzbQHctuzTsZymTBqf4gDVbN2XakD6aXPLxDQ4yif7BwFr8uz8qD8NKkpzisx3iq7NCVi8e3M",
  "key20": "4orpy2myKacFGQL5C8XVdxSM36C9UUHq13a4HKu6B967mrdU3qrtFeeLun896tzDHwK3ozfBtZYamrUxqQbcieuq",
  "key21": "3tSF2NmgsaoKbLCtu78tb3CgGLQBVEVTVtpZGBJxu5pReETnARyBz5y2b1aepD8Nd5e1zUiTkTJ85UEM65GVxC7w",
  "key22": "CAhM6ns8R6ebAZd8MxoUQdjXBHxhv6LFbyMy9ZaPvKsnR4todhBb81eNvp494eomXWGA5HXgCfawheRzToKz29t",
  "key23": "4QDFYS8zQ7G5Ukxsk6TMwQcN3GTdw81rGk6Aue4HB3N74Ys8k8DTm2XBRcUkPY2UrzSs3hNn37zwrqv4QVhZ8gyV",
  "key24": "qXaf5UooQiu6C5VteKbpgA7qoCU17f13p5gFcELzCeuq4LjNfePbYzX8WxPkLti57SNdExn3mXqtVyriPESTyoc",
  "key25": "3JUzNmWNFpNzXrbXVayGBXQsG2pgA4t7WoUuKpd1NMdht2wDMdoByWjnZRb7oUHLm8jtBozjhLQcd6TXLvcKRS6f",
  "key26": "2gjnXK1PSUCkSJKYbZZwVMh7bG5WWFDDHg3wqTzDR8RsHDpSuJ1GAYk5AcADhusP2ekhG8ZRQVgT3zYUHJaX51WT",
  "key27": "GcDHn1YZxvnqL7rfjnaFPSAKtAxn8RiKrJs7FmbWYPqBCmVtWN9RxvgBDjXuA33KWwAu5a6moLvcpUPVCqc4y2p",
  "key28": "3vgn9ugEiwecsMmX14PxsAq7HzvSKzqv97uKmX2UtL873EFYTGxyWCbqQjQ43vUwAtog7Gf4Kg32hGaxLuioowjz",
  "key29": "5bK46xXaaZckQdyDg6dyesZQr3o1EicYS9iUGkCMAL7hokgGwa9LiZ3EnEBrAEHujKWwp6on42SGNaXZcGRT36Ly",
  "key30": "4tTx8sqyYGjfNRBp58Kg6nPfoG4MfzUDLxYeb4d6fpAmxCYdh9zaYbEvpEHPbK1fND9vKFs7Ud2AMF3zcijffs2i",
  "key31": "5MVELVfPyonwVmEbhwbDGaKqPSk3FzCQzdoejihizXDNh7WhMZy12zC143Rj4ubHYcpLE9Ghw6FLvDp9qHosD6Xr",
  "key32": "2otES8AN5NzdMRfYCFhUNHVm5YghRVwXpEoWK4DZ7KhkSAWSk7skWi3jR2NBSqdhSZikYtZJH4YfiFp9DPJg4Yno",
  "key33": "49WuGGpUpBvqu3PDjgKqNxJ5F9yWJqatTaanNYp1oNF1FxYtGmriPiasVxvg1U7ARtjXpBGEKEqmN76zT6nHDoZ1",
  "key34": "4y49Lt1M41VHyZLiX3EDPkuerFSsxgQc3DVQn9pYLnGDmAEyaFL5ok6oCAFQgshRfuTyvxE8D4CcwT7mLhC9x4VV",
  "key35": "2Q67YsSsbs2PXx8e5SKcKQUgMLreiYciUMEE3xtpArNCdn8Zw4HCNRMS3kHsKu5jdiNA2GdGk7YmVcwdLRgUyjng"
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
