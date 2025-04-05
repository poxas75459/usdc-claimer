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
    "5wFrf7ajz75uGWCr4LExzFtRz8hJvbFuwWZtGJrTfqDwKG1vCwS2zSNoNxHdMRHGRTZ254JCbg342fSq5jHXs52j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R7ytGvXjSfdgTja2a7J6cZiqgkCUPoom3owy2LyVg8y5EVWpnBz3jtV4XHdfUGVRcYHGLrXXhYdSXQRdp99X4E1",
  "key1": "4LpXjK9U723fmdiJUX6mnvf16F648r3DAWkh9c8SSrdGEH7ikFBULYCEjueVBCEJNR7jtYjji2fSUZFvvd6eKj4s",
  "key2": "3jnsXNcfpRFVBdD5vfxpZA8CmTrJDzC2fqz2GP8GiVCNxq1LesvCgZApqZfoYy9soiHADZ2oxc3EFxzCAkggxcvT",
  "key3": "3LUEXtFJiheN43av8T6VivtmsPL5joyc8H5k2gwH3jBBZe54Ud5wQLNDLMeeg5TfdRHmsi2P2EtGykRrJDj5VQs8",
  "key4": "2XRwETKo35ELfukbFn9X9bcS119dSXVxbWAEYdMtenVmGV7jmug5WMh2k9bC88TkZToGEt6u4vPeVtQuxaoRSdL8",
  "key5": "3p5YxusV41B2QioMYBBCX8d48XLhMyf9Xx9u3s212RZWuoFU9MDntQzdTaUxq5AaA9R5F1zdSJqxd2CcTCwj51GA",
  "key6": "m4inEvDjc6nGc567P6cQMxLcy6Nue85ww5YZFyzp2cEUKYZDGa33KwWxjrGpUTpkEJr89Vs8zTeP8jbuQTSLRNH",
  "key7": "5bsogDv8YCWDH5arNdMn3Mw7mpDsJRAUeHrCHJrvk3RZoC2XsREpzATfeoGP6cXiSbgHFHadG9dpEp8xYEnNvyuL",
  "key8": "Cf4U8n7w6TrsStreyGcZQy4NubxK4kbMM2atKjX71i1UXnaNS9zd86eVFZ1t59EWPGPo6mxuoarPsoa65PoBpw2",
  "key9": "4t2bmRnga2KTjgFRtvhozHMX66ZhUSP7KgpQY4a5NJLmiPkT6ULXccy44znzqJujmFpgncjw2HusA5K32bPNhnzP",
  "key10": "3Tnr445hGbH9Spfz7ihUQsK6kb3Kc2iLanNYLJBSuJLtmLUPVPxnm5ydo8NF81a1wNkToZtfSMLjUdU3qiWcviMT",
  "key11": "3m3YUBnARPZ4TPkwwoCKXXLonMRzs6eTLLK8mXJmUEn7GXxDtyL4cAxwR1GzLuGUWDtnZw8ieVwamZVGgaJrBaTK",
  "key12": "2XHRfWVfnrVTETLgNwhDM6BzinHqNkRyryFmTSUE82bYv5XDHGR19XCKRSkZzbmq2S3PSe4dUYsbuSzMcdzRQ4ei",
  "key13": "3u9T3DT4vz6gAtfA5o7fUSV6honPnumoBQq14rMuMzuCHhNRXWvrxWWR6u2QJJL8W8dhGizrMWTY6j7vLJbavkgK",
  "key14": "4MUuonr8XU9t841S32M7LavJKoZC5UxsP7x2AMfYyBnDuRy6TYLHbVSNMuCMW2dvkSuMGja915iwxdi8G7mwqbWj",
  "key15": "2QvJx2kHp4YnDxA5L1xFbUUduQ6a9wsnsSbUz9gsVvHGMknEe6Rki3zagYnvuqNXZnFL2diPJ2eH4LTfZf9UDdpv",
  "key16": "23AhvBKU6uKLiXprRMXCcs1eSgpFghT9LdKvWnfcJFr7L1RnN1HNyn3fh7dh2RUwgYuwYMk9kuiriGDypNkEij9K",
  "key17": "1bmruPvWzBmEhgwHSPXN1xAfWRJ7a9pubQFgitcKFAcDbTLf58AB11kVbCxYyygyRvmEBwEu4t3qMXDrXWMi6M1",
  "key18": "BhLMC7tLosatGAhfE4ZAnaKYUnyTq7vy4JwwyDEAG6tft2rTtyUyEk1vy1eEeF8BJHBcX83poXf3BTG7GWDWK4L",
  "key19": "5ZRaM2jHvhP5it6QBso3e1qNgq3L7XrKSwxE4zfjzKGrcwNEpwczpLHqE1zRnJ47UBaDCZUopBUXCKBUVZ6DnPKx",
  "key20": "3YqUsPGVQmauh2JZPY3QyqcVzXhQb8TUwyvRsuT76BbYCcstU6vmy2D12x1D8q7BhWWe4Xaf28wTVhxZryVYmFE",
  "key21": "wdUhHfLZmJnanrgJSPWpHU7f8Uc1B8FeVoiVq27iLwCVwEJcHuiaHpNaXPsWk74fMDVgsEhkTxFYFQctuAY6Mu2",
  "key22": "5iUeLiVdZjN5rbCHBuk3mutstDv31EYxghV2iLHcMk11Nk28HKkvKLfCcbFqeDvPNgDcm2BzFrJQukzfxxaQ4kz7",
  "key23": "5g66Rx7RMCLikPFYpoPXMTK5iPi3oU1XHzj8UfoZer3pUhoTh8TgbDwCXU3aCJADFWVTYBNoY5kzmaAAeFT7Zc8V",
  "key24": "5E2bUPcXCWshNabtVnvzurZHioitaBPUa4JYqabXP4sy14gDnzN9BbFkyw5oDGbjYbxhXt8KeawJX893HftVxAhJ",
  "key25": "4gowQG6ny5oGpYKt7FojstmLZbmPNLx8tMYAqTGmqsUz23PmppGyAHxT5Z1xASXCYzTvrgC3X5eYWs9oN8uWiWtv",
  "key26": "5cRz7BwvCoGwEr4XdwbNVvzfzctqGsDasejVkUgTqdHHCFBTs5Jym3kWWRvmE47SKZmR1LeVxQH94ppBDBw3QwrM",
  "key27": "4XDNpGeEctTRThrJR2nEPnzdC9gdQY1tmy8dWJuu7kW8sE14nkNzteZDAnQp3SvTFJZ6LkQ7u1dMQ1NQp7rqESH7",
  "key28": "2k7qtQVdHyrKDBqhbkHgudbeGULx8TKmSDQ7s7www96jck6CqkviiWYDCUW3kZDZLrckTjmxcdvTEKDE1Sovd6qb",
  "key29": "47f1hsDpywDjT9QgDCxwvwS9Twqyfy5mvtuMWcD9Z2mPnzGBXFgTJVdVX9tLPSKtSFQsjaGgrfZNDG2DFiW4qjcm",
  "key30": "5hhdF2a1HKP4oP1hzbKRtW9DNFE7cCnXoMzXaEQHztUpAiRE94Qy2t8viLweV8BzT9PTWdD28nBgDJZUANzY34gd"
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
