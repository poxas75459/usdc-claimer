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
    "4CbjhnRKwLC3w8UD57qCugCSDWcSnPLjVKg3UWeLzwdCfSXXzwJA6yCjRJ8Tvi5SCiaFHbKkNqzehLX4X27AZifz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AF3C17fPYq3eHWepcWS4YekHV7un9wpPNEeMzC2A2cu7XTmtGG1pBwJrxJ6ay8scETn9oosQ9FszmDVxKmSa9cq",
  "key1": "4T9G4ap72gp8vzhmnE29C7TELgpnLktUVBm7vNjXCyZkmzx3aMzN8miSS7NWUdhLeRAccJe4T5V6UpMAuTAKUS7c",
  "key2": "3KYASx3txGFYfZmpeKg8p5gCfTT2nZ9FRXJcdW3JCp5ZhpV1GhEPLtsP26iTthUYE8rVm5sJ6zYDAK9jNskLryLe",
  "key3": "HZ3k18yvizKkyfsSEvw9tSjvKded7fESwzkkq13y1tr7VH8tq25m3GTcLEsvPJYHkaX1uHzHxSmLY5S7LEXQ2gG",
  "key4": "4To2fNpXWirkscfsteQY6cxtgQE9BMHHhEZ6TUYHL9dhqmqje7Pdq3qkY4APkMDDGwHrRsNSASgEabbDr2qp3PsM",
  "key5": "4Ur5A91pEK6918jADWL4ErLNmKUGxGftTJy9AKQBm7QqRfA56E6wvcdHBCgDrFv2hHMkMKLgZ53x2xTS1AskRatb",
  "key6": "2Z7t5kNY3YfQS59PDnRke3QGDczppNDxRPgKqfn98T4s48ubCKCB7BvRcguHDwihW54Z3ufQDQ3CYo2pnU5ThL4X",
  "key7": "oWuExvsph49eLRQikJDcZkxCCsMMBRuWjGUrmhf3Doh2YRGypW3SSjhf4X998iZ8mtR6186hpfm9uDSpXYq5JmX",
  "key8": "5wFEVG2cMFEcyEqQKYgnMdwCDZWHRowYy9HEFSPopuAjbD1pJzk7PBRFkVEpA8BkuNw57dpbzB3wsgJPifNiFCsv",
  "key9": "3pxZ6mk5YDMdPA4PBdr4FABHSpkqZqyWYjcxo94R34vU6Y9GRTXxstXAewZaBNzgvkKB9iUMSrXRBpjHq3SJvtAX",
  "key10": "2FXD8Unfvzk9WvsMLUMXLk4qF93L3ezY6Jg6fABUdU1gGLaQznRsNtEugF1JzvpwBx4dLCLsWfLAWnUqjHLSuHxP",
  "key11": "ZA9WfwQGLoDZonS5mHBdz9i82F9QNdB9FY1S1bYsuBEU78jiip2WueTyrAyUCqsVAN4H6wBw2js9Egic6wuntpb",
  "key12": "2Re456WPbkq1oLcREzf6TpLiTNCyPQNkkgMgh5TR82jxuW29MdpStL2af15tevViviTvJsSGNBZDGa3RHwULvh23",
  "key13": "DVsrQtMw8NCw7nqPXY2KKJQafrSbtQjhy8ravMQJYUA88qNXtwJTvpCnGJghANJXcScHK8aq8mY1Cntnct6Cgcf",
  "key14": "wcaGb5fMbHYwWhBozghrRFFJ4yGLdKtSpGazpGNi3K1JgMvdKwfnPj54iGGfe7CoVCkbkdHcEXUdXn4VjDP6djd",
  "key15": "4GbvKwCsCeWEvKNu5e7Na4tYQc7TGEdGTXvZeELspJ3QMyrwfC72BMyLxV3gWqdK72XWzQgEB4cWjxjXrHNxHAM6",
  "key16": "4NE7fphXsbKePan4fJQfYZDBGpM2vsMXzy4MiXoC7jTUVh2GiBQsRxhwfK3N9MnCGhgnqvVJmsT5mggRiP5wLgYK",
  "key17": "3vxDTh5YzhZDWtQ9e9g9eovKSnKbr72A32zt8YrGKV7NCgdKs7DRJhxJiz3P74DDSB43xw5yCwGnt8gjy2QqTF5G",
  "key18": "Lc6sToEkKqCcGFwCQHS1vtFSP6qRx6wLYucsF1XdiebFismRPRgXYQLEqsaqcb9HusYfk6oFPoAgXDLVfkK7p4L",
  "key19": "2fkaf649SRMXZtDie2Wp4c6tJa5fFiwXxEwzXDG2FksK6keHD2N9DNpya8sde3GpQJh9aynKXYgnkS9C79Y98NaD",
  "key20": "31P5ngm2yQ5FikAqTTF4mnHbtiy8GcKKsjSkxVCkkTTUFDs9bfWFemjdx3WKn2FD8HvZzSRAcjHMya4FZfwUgrxn",
  "key21": "4Yicx94hzu8jHRRfVsBNSr8oFv5t63EWs4KXDn9XcLYMZCRr73CGZ98Wsgk3bsHJRqdzerLDeG2T5PPhmimBf8Va",
  "key22": "3223Byn3kqbvNxSHirU15sq2ZtZ5ZdEabz1uWvZTMbx7dFYigbe235su7oDY6XMM5mUdVokmfQEM1snZaaKbrcpt",
  "key23": "5dyXgYFbq3bjj5vLUsUdFtD72wzV1cVEbQU6rCEUHV5rbZHE5JS7EbERq3pCgeEW7QM65WHBvm8ccgxups9EDc7C",
  "key24": "3FHyzDHiK8kEH2JUdznUju2GZiUDtP9PCzQTDPobXwMx7YLREzbag9DDoBrDe9qa157WDrNKMwduCVqciTRdk4CQ",
  "key25": "3EAdF7UTZcYQ243QX4PXCLq4tAs3FsH5sskPxAZTBRK893RBMWzaphw2ESDpUkDeRuDiNBPgr5mLHpS77jQXoE8R",
  "key26": "5AFDqvVisnsz24TQ5ymg3HKCxJbV4cZwNYBud1McsxkdXqCnyZqfPEnmJ4UZCTJ2vgRnzcpF7y16qeWb5oVYD5vy",
  "key27": "4r5Bx74vhg2y5QtsEKdER6d236dTinA1m92wd6nyG26vPsLSgteye4Ay5UUw6WRuD31B7U1VTiTKLzKYZg7eMmaq",
  "key28": "38q9CM26XNSDy3AaY694uY2wazW2LtnDshmBBDTm4yvtsH5WBbkbewGvStrHn4DDzZ9wG2dw4BBauHAfYdABAXtz",
  "key29": "LQihEMoVkNRrLKccieg9rdKc5CJNNnmcNXk38n5t2Py9Epsd6wDdyRPQmaYxXyC6Kj4tcpdXRVHAoiuz45xHkFX",
  "key30": "wEFvMit6Goo4z3jwChkf5CANwU4SgEktRF4eyY3eFDcYUe2EXTsFq1w5u2gsPVJhDDJwYZjCJh7gCgieHb7uUBt",
  "key31": "5Qu27dhcFsek2yyZzU3N68USSGm69f48p1y494AWcAohLDaPqM5SxpSAAg5r8U53NCJQVNTGbK5VpwtjM1DKxbL5",
  "key32": "59W27aeDeezA6tYfRFdhcmda7UezvCxQ2Pw9gxXSh7NWUrNURukEiiBKEVViw3WyHmpuVTxiJFbpo1HEv3wKRB8",
  "key33": "5e7chbJFN69tKJUtGDipELNJj6ma2hX7dHpRWy1M1iLazM4rnwAHif6jKVtoRwAZJSWoo8bwm7MfUXej79q3azZy",
  "key34": "5c22ot4Ruxv2fpWzpzJQZcuzBYNgP69rKrDoHkpJoxrYzDCm1pEN6r6ZBZ7CqeSspxrGDaQQg7NLMbpZ2yQYktj3",
  "key35": "5muguUNN6xLkqLwg2B5AWh92MS1ypVbMZJ24x5iYzrtzbEVf9vgrep5Yi4qba9sHMiFFe95nrX57t1KvzM5RM7Kw",
  "key36": "5UHH2wnNVkQSN2CKZt6c7SCZEvG5cuzHDoK1AZUiD6vgxNYMdh62Vxqg6jXkJPyGsNWNUJq2QAyYU4xH44ZSAMk7",
  "key37": "3jqXwbzcyxxewcY2MH5wPgeF6eL8dmUt4kcP6egAQ4h1NqtmZckryZTvoTQhhtwmLBDJC92SbwUCa8XR5nm47fQx",
  "key38": "4CFX5mnirGqR82oy4ouCPijy6HiZeLkpU18uSxDhEP6w32BKxFnr4Gkz7T1ZtZojXPawCocqU8rxVpe5jf3EZex8",
  "key39": "57jjcq3QuiGD2QSUKJhKn4QWv2G1ZcSiswC3iSoLzvq281naszAJQqjMtfNUawCETRveC8DJW98eAtXJw5wd4W64",
  "key40": "47NX2C1dRZAtKSaV9SNmRDqeVUCDPausYS8zYQ3SAvVvBnqDpuH963PFw6gvVBFpaRs5qWjn9uFhDSVCZxoFkUU6",
  "key41": "2L8zC4Rd8rjsv5WAATp5u3dqD3RUCv1mYcS4uCECPoGuKLjfyNV2FPMkmEqAhBUW4n7DBtqCVi2mupWrvbg7wohs"
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
