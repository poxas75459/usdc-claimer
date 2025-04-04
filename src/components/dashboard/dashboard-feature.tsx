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
    "ta9ssUEikNcnmpbFW8mrEQXd6EN42jQ5LxSPRN9B8uWufS8syEmJtHNoGDMGngLLxxhxpB24Q7Y241bCRzkcqqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vfqpZcu4itv18MrfngUP58AqgrcGc8eoVvrr5GZuVSMA87tZfar5YAbzLjZHnztJVpXS6K7jF4eshGbo8JkGheD",
  "key1": "49gpaAAXtBWM1bAPLAHFtpmykoKtRVQFLoZMPD1BzhSCHRKvm8vq5SNbAaP1FJ4cv3KVxkatwiZ3oomgstngvMxj",
  "key2": "4Ff5XnCPE1a4q8wCtAPTuJmQAReRR56LdXfBhbujg9r77ioszbQwKmucRxx1CbD7suHVnDku5BLCGv4Z2AUwAk6D",
  "key3": "5sHAe89wnk7Wb6tCK5sV2G4dSwd7ikRjkFfwB8HnBWGpbjMe2XcWSxHwCQUZk7W3yqhYu2jbzFAfkrJQ4uxwiDc8",
  "key4": "wi6eYNipQ3ukXP3CWZ6AjP2ir3UcDPxRcSjaW63Cw3N5KTcSYeWYoSi7QmGd7cnHAaDNy85eWNzTW3hdnRWM7Am",
  "key5": "4HZMGJL6etoGMweGmNhL3iZxFsZFMEQtXVCkLpcBXfpw6ARryLeQgApKRQrn85YegB5hDa69V5kqkk9WGgUxzRT7",
  "key6": "3PxoG25D65LtyQhXw1WRLiyHJgSQjFskzq3nMpN6A7iLHAa9akQeziSnuxSykJv3HjrMS9qjj7gCHqTR1spKiHwo",
  "key7": "5TQ4bnmWVSkhr3YQfoQtA52p4Q7mBGkVRXZth6tJ9EkMU9wrPGtvkWAwCCvEtTEhr6MBNrEafbsRhEe49QQFd3Ep",
  "key8": "EBpAJ4Y2Ni4LBRsgqrUSYNHy7AQJssASQbka8jDoLXXsjTBvqbhXFDTCPHDT7df7EU5cFwFSnq3SYGca9Mde2zV",
  "key9": "2e2SmYdNJBEbz7qwFU3jks6SboxRgBGqTXG5YAznXcHJ1HzAzgZLye4tWTGidf7sDFCg5Ty3xeBFxZ3fd5beyKkX",
  "key10": "52XUVWRkDNKp7jTSrZ7xGavhoy4pToCbUBK59mSdms3ZUicuxNPdVS4vdnQBNjJQ5wMYPdA5aFXd2bH1qWgD4ywm",
  "key11": "4RWWfeq1jBqLAEh3G7X5zgbWRs1a9RRsh2ayo3gJxQGp5udfBXdyuPTKidv8GhNrVUZsbfaiRhPhJRyY6sQf8HGs",
  "key12": "5DcYKyh3tjG1j5XMaHZYaiTKC1sjFmxPrSp2nWHxtcVHkLE1EsqaAsdFciNprD7jH7QXH1AcDnT4Rvq7vu2poSyd",
  "key13": "H3wXJyQmQWuqw6HJ2i1JGRv6k7hKe9G56oJdJk4Njg6hDnAZ5mAqHceVmCb3gigyBtg4Sofb2AhszCnRypPVV8s",
  "key14": "2vjwGNFwGAajWp1paeFNSFvhhC66tG5vfWm9QepRLvCFQbZyHgcT9m1McT2fFHC7kTmArVbezqhB66eHjwZ17Tnr",
  "key15": "61bnRetB7DALs8nzgjyJdud5XB6YRQzaquUyc5SS2PMBfzpPXPHvc4PVUzHMVkcCrvsQCw57sv4QHzkt1WAUrwTS",
  "key16": "5kEgGrMJCss9DkHUHomMGGFbmW5bRJG74cDBtc4ECoAbGNFgmqmL4hZVjD6bvQYY3h4XZ673f2WGWPCB9Zf3FyPH",
  "key17": "RV3oaJMdoJHCxyyv6nMH64sRqrjQJjob4oLG5geDLvB4kRHkFfqP34JepbghUZG6YrRBh7syd3VGZhDEH7oyDej",
  "key18": "65N4KMjnVeugoGCt47D3sFdzTR18NePSvDcz2SuziRq1DihYcvW2KkZ6KEDFWYCgoZYGm2tTK39AyXYfPWjTxPcT",
  "key19": "5SnAekTF5AzBVuL7XmPtpDSJKkXfYA9bG1wHQoXVCuCvYqibzu6meYTcf3JM583YUja3KBPea3Qi2qXWmhDXwWJF",
  "key20": "yeUSLXEJhbFKC3fD2BkrzsxXq6h69E29YaRyo1eeyqtmrsMjvnTVeEmVcxzLVTzJYgnYEVnNbdSDb3PxZFDwAdn",
  "key21": "3nYuYXnHmpruUaqR5MkoG8JpfBRJarhXXego6F4E18BuJPUHRgfXoGobuv9WLs8x9ASrEmwQcu164a4hV6WvZSMK",
  "key22": "3564qETimAm1mhSB4ibHf7qbMJJoBuan9yWrSyJwJrvSX6eZe7dkX3zB542TuvQVdZi1qkZgwnzFpfCyJVAfRReA",
  "key23": "2GPhJXkxE7fLqJk77Q61YhKKuo2nGtx1wfd1PMVw4wwS716ScfVn2rXqGQzfvDsS3fBVqXChn83n5Hj5oDMKCwQ1",
  "key24": "3CFGFQpxteQ7LUEzxAE3G94FXu6KB1gyj9LmgVRncJqtFzB8UeKGxjUpPEEpnGpQKWsqw68dabs8grGkYUQ7T2JH",
  "key25": "58JdekqhDkrm3nCbeiRq5NKEdT6jGkZSsKTmUShrUXQsZFULBavLjaQMoMXNPj4zRY4c8GggyCnVxc6Ct5PLtzTP",
  "key26": "3HSSxHRpjBRMXmdSzjUizYpxe33AYezvFdfivGPnBjM5HNJ7zxPwJzvHhXZ2d29FHFnxdKBCZ7uStenTevLLbWqW",
  "key27": "p7Cij4rjMxS5qdcwnj5HNd2UrU369DZLoEaUvvtATFaq79dDqtPtZfwNqGjJwx5qBiNqapmxLMyEP5kEp3GZWnu",
  "key28": "4ad3PHCUG58ygMgM9SzLtPb1XpgqUvEWgHcnfnEMeFxjkF1hy3QxgbCJK9ChNSd9rHVW2NMhdy9yLiqNjKED43Eg",
  "key29": "2JSQj6eGfxLz2sLHSnQdsxb6HdzvcYrEgMfQnXNx5PbshN4jSjVDRjMNwBM9J3ioX6ePqNPB3e48TGezS4wyVNUg",
  "key30": "NDNGAKtSAtSkga1xDukW1shEzNCUYJyEjkFu9jSSZjT6EESxy8ywgswUySykhf4HukWzdoFseyasLgNXndtEr8h",
  "key31": "2S298JEhHUnUVroVAnE2QU8x5k5qYjcMufzeZU3nY4qEc6LpZ7ad7ZmNJeh7VXXwWjzTk4KKjeZ91Z3dwp9UpA2F",
  "key32": "2cS4xE2J6sJj1FxjPtY7BfasfXmeYcr18Eaj6k71QTQPBsHYHbeGqnEQBX283EvPCjAVo2uW7VDMKFXj2AAUvYHA",
  "key33": "Aa4fw59TU3EoydvGUNeoGWCMCoEwMCmxZSRBgBUaF63ZdTfZKLJspDSoSVCA62vvN26A1uMhKbWnP6WHg5jxq52",
  "key34": "5WgwzuPT6ys5NTP63qNqDm57zWtQ5tGy2m8RGg3QhoMGv6dRZL2bxhFgsg1z6CdBy5ZFXn2kHDwYEZwWKWUkHeYv",
  "key35": "33SjQi5nxAGf9VBDkX5hNpdRGrkovuLc9JjK1A8hVrfG8o6e5ZswU2By5dRLEBKeR3oGbNRDetHT7NEa8sW5PLe6",
  "key36": "38mTv1S6kDQDLUwVeTyDL4vkLwLq45Ft8hdA4n2aMVZvmztAKkzNByiTbuwe4LeB47NNArJwpqnthVYUEnyXPFgP",
  "key37": "39P9VvsZon65gM3SfSaspBDBRc3ASjRg75RwvStjcFdP5K1tG5eYkPqkgUMqvopnStonanETuW1yNLad8jWa2ZvF",
  "key38": "ARLmiVW9kiJ6x3Wozj9YFa71RnsCjUcHi9h4wz64d4RA8wN6zDTSJT79MYQuXj9rUDqmsS3w63HTVgCCdusydNk",
  "key39": "4SvEnbGLiHjqjzQdsPYSRcREKJ97a77Qb2MkuXTHEVcqiUty1BrrPgMQv6tZNQAHw2d19zqRHs44UcZzbH5hN7Qi",
  "key40": "5QRZuJesWo4sNFZEWqfg2Cp8dCy8NVHZqpXVLFoqnYQDTVHKBvToU7tXgnyHVPxfPn2z72jsAfLvVvgonxDyAmhv",
  "key41": "5P6RkTePvWWRCtZ1aaRVACbb8j2wSjSqhRYHxsujDxUJQTA1um5hnkLGNgT7TMbUjMFrwrqSKxszfUd6bsALXAcY",
  "key42": "3DFb4rqZumNsEoYFvqK8UvRUfWipdFhq13q4xNN5Hz3jDYdDVu4kBFzxpjDmzt9wLNcFPp8dEewFLyoSWw96iGS1",
  "key43": "2rLPWfQNNZ5FMudTYw2UE5gBrWBvkfwAECXP7yLpPJ78aK6PKNFXjePBYKzxcCKX6Ltgsu2VJyYLnrH5wU51Dv2F",
  "key44": "5smz1xzBAF69W9QWUhWqPUoQGSwT9Z982byVsJ6Fhoi8oaWqfshQDYQASrDQHMYLxBCf9cgqCDquT1rHyq5Nc848",
  "key45": "3SLZsse6vCb1P1YYipnmeCCmYGSCbr7f3FNZ63uDXpgCziRhZ1edrXm53S7X4ZwMvWanxWCcfCoqtWZuXC5NoSKi"
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
