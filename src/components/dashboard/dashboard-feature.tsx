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
    "3LALsZxgegRqVprRvBD3C1ZA1XqQY4D6iDUHveao2mJXjadMHjNvTVMLF49kGArgBwgGXsG1fm1zEfZf6FJYBeDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JHzrDtvk8b2ptmqKp1fLocXuFjDPQXhVoocZgRtv8Pux6Knpj4VNHF1VVtV5tCn2MRxmz8joyCZypUF54A3C2gv",
  "key1": "3DzD29qt49aKsY6gd7RqSkGhM7z2vDqqc1Ag4nbokkQW7uqg8eiyiwx39gzwSmFdfh6Uzgw7N2K3sMo9P6aQLjEZ",
  "key2": "23YG3VP45S5uRn63ffubhnqbizqEexjm8d5dVi4iL5ZKdtY6JaFJK1kU8BLn8RkPDTdzPH9FvDvi4vqzYYQmEsuU",
  "key3": "2X82BMDmX3JLfRC7amcSPFHJ2NnPSKsab5gYa1RghsL8owgGGgjbhDWCeDfft6otsXF7MXfqEnGueJi2aN7KwdZM",
  "key4": "46Q3j3zvXMFHwMVxhRMe2rkHVaa2S7kwhYjBwYJpNLEDv5U5LrdNkFY2Bm2sqBFT2HYoh5esyYX5FtTVcGsPu1W9",
  "key5": "3hRTyutW8zhFoU9YZRqEHnmrQTy61nKBBJmJWm2xFYTnEqywqkgZtF1qFrW1cfnrRoajwJ92ecess4ncK2BF92hR",
  "key6": "4z1sZwQbSm6pYxUeZi43saR3mcTVenyd4ES4c7mWumLk2Q9Qu4DC1BwQj5vNK1vJRiLpCL1f5QTVqhPVUjtAq8gr",
  "key7": "5ZvZuz7z3U9oxeafm37qP7sTuzDe8ZpsJRUw11Vy1kneCaejSB2Ui8w2peCzeeSgYZ75dYuq9FvcbmEPhaJy5kLZ",
  "key8": "5SD3EpS2nFrDdeGhYS7srTgBYjJPeYFD6YYmdQLQ9yC3qPz3HR7nB81M7stgZNXRg29SUJe9BSzsirrGKP8fzH65",
  "key9": "3oZZwc2mhn2AqgZ5EoiryS1CCmggnmST8ZQJYqWdu1MUTrtLbeoXT24eNCRHRLtaj6iSTnir2C7Q9vrRdYuvTMjd",
  "key10": "5PDq7kzdpt1aSjuwnw8fmtn5jbWUNgu68qVP99k8EUwUCXX2iARpXruH4k7fns17YLu6SEcbrULE4nQYSMp9PCAa",
  "key11": "4uTpotXAFD53mfsWgPa57Tz56cpyAK8DpY4aHxMNcqQrerWqsWJwNNSmJcSJEgYPkQvtCz2gTAQGTmy3YWfwWb3A",
  "key12": "62RZYAn1tTtGaAdKZwHdM67GZxoh5M6kUUPU3dw3r9WrEy5xXXydnJ2BxvhAcmNN9m1p6oe9jb1DUn67SonA4iFF",
  "key13": "4Gzszxm7tXiviyziXc8ZGrQe41HqQRjp6khixXohHJuMqtbZApCdCidwp41JEZ9ucqrSAyTSr9bxCZRrmdr75bX4",
  "key14": "4AszmycxCgRrNvHho3ycDUiJay8Hr8xMaDbbjv1aczHv9stSanuJoEj6VhRTKxUYLpCpvRZTwuM9CxnbFae5zYa2",
  "key15": "4YDygrogJtvX69KTPgQo9doubad68XKaDjmVBjTBgHa3CjX3tvhRhsiNKvr87P4cq1mbLAqJrsRP7xAUtbMXZxdU",
  "key16": "EFE8kcreb9SWCXUDDPrhgWXKV13iDrsrhcMRMMt6YzTJhwf7HPrPWjUAEF8y9aEm9ioD3MUNgT4GMB5767rYPq9",
  "key17": "5rHcvXw4cQ2Wb2TPXM6iHVcdhCMrQBSAn7K8HUB3mH4YAiTtoPq3FAAWgdQ8sfR9uDMx1U1MQzXQVNCBu8m4reoS",
  "key18": "8PZCEuCvpEZJw26PEcHCrSUNaR3QM8kZA1t3V5UZwWeMiTSZ6voJGqDdLvPe6d8aCd45fEScFXt5QVQicw2eLLz",
  "key19": "VPsbVest5mwGzb8QpJ4urPbfCjdkSsThtGpqJQJVo8hDePWdvz2c16tmQTXMNxFe64HmPnopKyHma6VoQFjoViz",
  "key20": "5udNWosBY4D4h2tAKAKKtEiPDTwcUYDRZaf1Qk8LKWAwyGkVfkJEcT6NnA3aBLEeq7sSjg4aF5HMxpnn5RSMT6hj",
  "key21": "5RTNW9rsMNwcBjVjmfxGf5KiSgSZsoff8CVweoPjxJPPSZRiFzfVKMHy4hscMojRS4zUqRACV25C3PWYwgyq6jaL",
  "key22": "4eWEsHi7LndjMfscAGsctZDotoFgppD8jvtziWPWmnvHFSnptR4vu5NDbpAuAVwN3gZDP5xv4jm2YkeZ1pWCh8P8",
  "key23": "3KMEqUiF7r5yu2PXs1nggPvrVTsrvRwnHXmRtRx1rodFu5mn7KA7KqQc843pgFFzstQKrw3Dx78vuCijcRoCdke8",
  "key24": "2ghUg1FwmptTpxsY6iHw2Lu7rnsLEX7bUdjPdgzmcq6j6fuDTQADAHNRf4d1oyP6EvmkiJ3bWACLRGwwZTcMBCQk",
  "key25": "2LzR5gsVJpGPwncBsz2oiK3ZMJxgFH2hsc8iNzsq7GNMFcSfeQcVtKwKvqsD2RDCCmH4JZc4N1geB3P4PaiLMGVd",
  "key26": "2KGhnBbsnLqpwjbgn914ovwxoG6Nvg3XTdEvZ6VZhi9EvsHM2nZ9izyNcyog3CC64NmEwZ3gy1LS53kMRxNS65Vv",
  "key27": "4LgatATw9nAxb28rCUQABBaYXxDwozL7JAiSB9U379YbK3wCtbeJ2fJfVTm2xKcuTzS9xeWkzEUNVri4qkYLZo1J",
  "key28": "4hrkEoroTeDidcrd9mVLjbBsDSv3HeB95XypLcJWADmLMXXURGReMCmApRvgXhk3hm2fbNnABbF9a8eq8TsdWRFK",
  "key29": "2NF9UwumscVuTWv6TJAP514JXyjeSyv8j7pAsVsdFj4LcKGDGWJoxKexSj7echru7TbVDxpfG7wiPRaRSr4RfrxQ",
  "key30": "3BgYj11mtn1KgTPRH6N8ieLzUA5v9pfmdUMn2UYzNnGc8Lha4pPBppz2V5udg2W96zQsLoEch6BkzQRQm7uHKMSD",
  "key31": "3Hx7jUXAZKL5jJ6PCGx5iczaD8BZmSrWS3D5VNu58u8w2XHGQvjqFPQ5T8aEKcSPyJLC4BY5L85uNkHfvykYKWyB",
  "key32": "31tgdv98UhmWnHD91toGhCfjNgqS5B52WvGpkPSnkyeqfbJRbC6PEiQgJatnNm5GgHANpyuakZ7eEawuFQv1SSyi",
  "key33": "YrSKrTJ2jjNq2ypYuMBsUNPxevd992e7cBmbocxSHaKaWarzL7rBHg7iFUgE1dwEepT8zuUCJTwiZZokDv9W3Hq",
  "key34": "5D1bjszKSuY88chPByEVBpJFgTzNi2pgfAUKWnC4uHRJZrA5xX9h3HenRzwp4givo51ZuM9YSBdsyKjpVj3wRezr"
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
