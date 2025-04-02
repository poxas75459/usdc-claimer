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
    "4N6MC7771LTBamLruw8rGGtcnnW2U9PntnNwcExi6Y9eZrk5ij1Um71Wnei54CZpmiaZBdqxEMFM49d5Kq6gp5W7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cZF92cVHwese89LnLcE1DvmPsBUTPQGH8UV1jDRyadnfeS6pD2gay7NNKsqskydY3qJhpVaNFp9WditLJbo8xHu",
  "key1": "5LovTqD6h3eYJsFWaWLdMfHYAYqmKYRqqGqyT5dA5bK7WMHddX25AAh62CAmaDxubQRu6R6guiXBA4gcSSgxYYi8",
  "key2": "5mzoV7ew7HGD7m1jJuMfyAM2f8bec2vv4YQj8fsHJuaqkPezf6wQ9TAEe3umaa87jujR2v6vd45jDMQ6Mq1fYf6T",
  "key3": "3Dxys3KfrWBuTSfrWXn637D38fnAR3cvHpusyRhB5pDX8Mdu9YWxJRTAiWCxC2MH4T8RtqjBqaCBSTLcTRtUi4cB",
  "key4": "2aoPW5kwNY9Av193xfrkp5PrYqnWFgGX8UuvFqiism4wM9jmvYfJn5Cbf1np19tDq7HPKRymbkzKaY8RY6vMUGFV",
  "key5": "22uBBZwHE7S3Kd9Tz2aHwEq4XEs2e6JDaaTBytMBcYmho4pxmyEETm7GZpKPnHmb8nkKSEqdQSS7EPm1aRS7qZgc",
  "key6": "4ZEXw98qSTvRh2ap3yW2uoUAqFLwB7PbMCWLDPhk8HNLqTbw6U8xsCAmpJNSmnLmcR1a7U1BTT1DDrFZXHFP76H5",
  "key7": "58g4MhCjxHSNUftL6XBMPUsTzegM7JK954hiarNrHKxJVFNxmkJU9q6uZdZKSuNu4kA8ZQigVKtTjkAsJ9iWgDkf",
  "key8": "2cKPxoA8qqHvPVAA4A8L9DTTMnVHX8v7EdUXzhUzSvNfsYcNcFmCTjvQw7CWXfpsPN4uvMzUUJakCwgdoNa4feZX",
  "key9": "57xGuyjunBzrpRJmq4BzLsv6x7n298f8XBqAuiVHbCxqyCPkjuq5sV99RueCvBKAL6mzD5Vato8kYm55hasdED2F",
  "key10": "5FsPv66SjezXJRZWaSz7vPg8vSUd6qyRTM5gzovV6afbo6jytpCGc9BfHz77N4Zz3ABZxxxfnWmRcF34mT9qqnpW",
  "key11": "3dTMpttxaXHb3d4SwbKHugV59FBSbBcbFxQPUKmjDgdpVfNiEu3PQ6XNyZanRn5rAWvnJ7GQwh9R8vrj4Wb4eZ5A",
  "key12": "qma5zaFzXha8QGUTYb9CexruceV6jQQzXScuomF2CKjLrFkbYuyfcdbvvFhkNz712ehmaVuTfSsV8xcBfytdNxy",
  "key13": "32Js2eDxJuPXdppZ9T5hWDhvnzxLZDyz9LiJkgDwAr6ibdrXguTvXNbLX74qZX4puHK1vLFwLZ7wmwo5iczekDkn",
  "key14": "52atLU7CEi9f3LCoycLVoun3oRqfACKLMiScYd5QAPxhwhHf4P3YqFmwK93xbtpo1fqNhTpuwxMRh9JmA1z7f28u",
  "key15": "2Bp5pPWi7UwFQMyz9tbuSKVr8BJtQfzcFGmnnGxBnzKMLSR8Nw9NxpiSmZvGa3b7F9TWk4RWZmYVjFoTeHWbXJqK",
  "key16": "6yPwJQBvUaATinu1ZXheSbYRKtma9o13pZmtR6S73NsfGde2HxmEKMbCjD5dnt74T1LePAJtSiFttLan28kdXQT",
  "key17": "2jDHE7jjtB26VKicep2iNw42RuGU1yDgGf7uKVupXiX76q3EiH3RwpSWKBghnsUdaJ2QnFbbW8GuNC14jSxXJycH",
  "key18": "fb1zyWfWyku5T14iJvLnRVz83BZ6uvmJgwHk35HNnVgrVULCW6druHcTEXifWec117g39d3xm1M1Krfu8K4TKei",
  "key19": "5bxJaRuXFPo2S4GF9B3NVjRR2W36nFtSoFCGEiXzR3ZePfQam6Ys52VV2N2syi61KpFVcxV5RrypBTAfGBArB5gM",
  "key20": "y4EG6PEHTKPUoxFzwSAUidkZxAA9JRR8cXLgbb7r4otHehUKZDSTWyRE67bUbk4W1baUMCMgQY7cFxJDRY91R61",
  "key21": "59cPY6gJPGMGz6UCaTUemWmR11qFPbDjxegbBNjPAUzmh9HXxGynYYm2hw5s6mMx1z41nTue8wQ5d93ECKJg8zhW",
  "key22": "4qTwBfZLq6cdQC28b6KWrYJcmx23zRuWG4gMDC2D7Rd3bpyLLcqaDxiYQNP5su6S9drdSa3CD9S7MoEdvffcPuyD",
  "key23": "2apHLarEjJsrr6kuAD78fgHy7th5gk9P3kPmyQwKA4aZ9GqWGKVrqqZJ1WV3vBTNaMxit2KBFToUQubVXt9zJxtL",
  "key24": "4vyRJJ9Xj9Ph7su2rSRrDoMv2y51qGGuXWSyfk4avUy5EMdAV5DnC38x4NFBo4QXsSa9VsxEPZXfEQp4vPEYsZoC",
  "key25": "4JNiHA6DAUg3kGjQJDb4SkDysr187inqDrEvXVZfKvRKazFi3wpsGZ1V7ggRU6s3mL4SQ7Wqo69QhL4HxVftbQhT",
  "key26": "UavHW9UZf2i1eEoyEUPyRc1KydLfkV2DfisE7JbnmtrbgPZMYM8dJRs5gyxkti8E2bVqUtKVxxFkK7h6A34fPsy",
  "key27": "2tGHq6ceNp6u2kACrmCLJvnFg5SCq9DkdeHmdpYkjv2WiHcCz4FtL9EGNuWhEXFNF99yRsGQM3WiwqGwf5AWUEWc",
  "key28": "ePDS31BFTJkHcM3zdddmBRCXrJ3vKs7L5gdXUut5UPMBQ5RyUtrBamX7q3V4nrQw3Q5ATDcumXvJpj5zKCTftvP",
  "key29": "4nkDNEtMaXHmPMJNY5VE6u8ivWF2imW1FJkagZjao66Rut9XRDuM555FDcCMHG2oHyR3gF7MKfN9zA3EzYoCHBV9",
  "key30": "FtmKrNRtZNMm1NEPjpzSMaPPGjKa1kKToKx4MsmBMUuNiXG1eAvsKwK9h5EJ8aMiVrUxDYFqhW1dPHHAeAmzMAZ",
  "key31": "21V3tkrVA7wZsCskenA33JbrcGGtmZhvkFoLNgJHW8tYEsjCyvQ72erQirS78KvtVNBnRCTompQjeBWswza3yHAN",
  "key32": "3Ga6QooduxG9wDvGkhtxTCmHwoCjaQ832fnvr1MVst9dvBhsyPXinNHH8USpReEH9MVmb2MFxtowg8gnpYRC4nrx",
  "key33": "aBzgptsZNzZDopoFwJAYGgEGYHD8CBjmMgTq4YZrk3DqDnES2mJaDH99iGoQzzVocKuceUNRgyg2A9w6e8T91hy",
  "key34": "2X6rzLZbc4jykQNWcYHMTW5UP9F4qMz4kK3wXqkVvUD159yezuvHLetP2jmD9BztB6gYqunSnEu8iBarpaYiHoF",
  "key35": "5p41K6rS1Ctux3nFkubfoBUnvFyi2wZHbjXHbSd9mh6iHGZEjPjT6HUdbuKzg8a9e5zeemqxZHqVT7QpiVKmnmN5",
  "key36": "2RG41nUoNFxjUD5dZaJwqo5Q9pqqPwS3NqMGapP7ztnQmqyJd8d1eEgw6Nrd7rJCE4D6HuJzDPebnzbRBLsQbw7q",
  "key37": "2ZouqMb4Njn1jvgtvR2tmYvmGoY5nPCY1duBwFrVVSL47GDkenY5wo4uUiYJWEYq7ipGYQPJjWdwsGc1jFGMQPYJ",
  "key38": "34KESrbfaRtWsnXUrXbpTcWbr6sa6Va3uygtyXUmrNAkbAc3661w8NKy6svmXJvPxUjckJEht2WMTGSbYNUHHKLQ",
  "key39": "4VchJjrnqKmQn8A1UrmvqErboJy8KvXGDotFuwYu4Eq85tjnQgzaRLNceoCcUgTmiqBwdvWsiyhFzCmZwwNn6eXa",
  "key40": "5rigVg4NkayoBxZK8rN56HQwChrksw4abq5oXFdJJPbi5h3xiGFpjtfRZDe9MJQXfRc6XFuDwWcmUjSEXYw4h7eu",
  "key41": "5yEybt69kBVyVEEH9dJTcEWcaohgsCeakdkG94rPknDa1CWgFEuHRvnMYQ9Rd5NtymW7DqejSS1tZxhdrXa1LM9T",
  "key42": "5ddtPZFTKwc5XbePeniQHN8m8JxSfkAj3JSQJByFAuWdobmEFK7MA6bN3n2LSiCoPYpAfCuqYyc9yDNSHDPHhs2p",
  "key43": "2GKVCSFq6KzRRUaQcYTJNNB6HQmZAv9fWCWRVyodPbu3MEptSPNfhe4i54MvUvj3WXnhcs6hrpoAWh8armtS6C3Z",
  "key44": "yMoocRn7JDkL3382pT5HDo987xB8LRK8xKTCfAdMEu5P1vdXXTpkstHgcckcZ4HU81VPRBXefERYaNGmmeFCCCL"
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
