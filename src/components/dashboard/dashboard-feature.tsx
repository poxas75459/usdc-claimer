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
    "2wtfUZhBikupwUH7iN2v7x3sk9jfti3XbFefD9HtS3TcAo9oXc2Q7eXuKzXSWmbQyV4qitoTMybReV9hz8N1R9jJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7YsmboRH4jbS3MTA5E5saKCfipeydgGe7VqomwyTpDopVRWeABKciHqgpniCGpKVJfyE52nZkftytCojheXsvYM",
  "key1": "3NSqaFzG7Nt2a97vQ2zfYMiyFvxJEjULjrHciCsG7hPkPUCQbmurpPyf3Cvr7CGze3d5wfo5ttebuNU4VACnxgJb",
  "key2": "d9CnrUgEF2Z9NVZbpAMmAZyQJxAM4df1csoRUK6jwpRaK2UZscin7x9xfcFhJZwNQHZqFdhxbdEEtBU6xKvtuik",
  "key3": "45SWQfHodJ67beuSZaRBkCtZwVXyVj6tYPnUsspyvUPWbAWT5UqSHEmmfUYJF2nk2EUGcyrXJ1ZGtkLkRt6sdq1U",
  "key4": "34kBcMH7m3Fu6XFauan46bAcJcmVEKNmnnTbG6eqWrtLRZsEvHBVpJ85jUFDJ283mxsVmnfxskvfZcgo6RzcpS1U",
  "key5": "2gN19GemgaNmNPXpnXoMcVZKL2FD2jq7KQ5HXkwMsHzq8PruyawnNj3pthexNecNdAn3ZwfYEutVKYHb4McCLPX",
  "key6": "264ysRTUU2CxLDCWEHtmoAdW1DNdxzh9Xgzg2eEwn8HqDcaga9dwAqN7oXaFHEAWekh9CatEV7qU58izRSFBE6z2",
  "key7": "ptMZyvhCbPpMF4tq85L2W16CmDC8TGevuAiTMzPzt7m3WgGzsuJb5S9Wt2NBQBfQ7f9G3ZnmKQCTWdDwPU2f9tU",
  "key8": "6KnBo6zExfDdsoErNRrGpK8PDxKphRx4XiZbYyPUdYk3BgG6EvSQPhkm9aPkYLbnr2gMBQtMfqfT2hEK8qenJMX",
  "key9": "3UW9bwGNpACJVx3fgePZBapRSiUvFJpnsPobh4mY57dhBR7yeT7evydhW3CAGiEodCZR2xTzVy2hmofSADbyoRft",
  "key10": "2C7e34brnWcvoHqy2rVXgJLmPuXgHyAcvpPb8j48PWrvTpUeoLtWuLgLMMSfP7Hcm3rjvWqiUgGvCkY8Z9KHbFCE",
  "key11": "4evU4RzJAGfziSHnF7xNaYA6nbJKE1F52EdChcmSmeQhidKSw9FPBD4kBdUMNsdP428WJx2TMptk6iZW2qyPE7Ji",
  "key12": "5oEpWanwdEJQnGfi9DiC41WyY31twjQJz4V2A6wQC4LBrEf5yhnjPC9UMHt5UbcgMjprHW1sQWdxurKLGpQ458bN",
  "key13": "3pxWSobQupwm96rMZpvj5f6wvDfNNtSXJv4u37xpDJ9aqKC8eJPG7XCDFYcaT8Y5Mqyk3qJb4oMMBA4DDpDgavDz",
  "key14": "4LpAG3V9L85aMK8Rd7bd4GG81FYF8SD6jM4cq6xLXcZ4zt83wHdiwuzWHNDwqW9njdpJRLaHQwU65QakJKNEpays",
  "key15": "2aTn3ATuL2YQYSE5dQULgXiEgpP8bNG4XDe87ojMBgqKD8mGDzVaCG5rTfsZMWk5xd8UCAHFJ13ZwuknJL1sj1C",
  "key16": "4F4VhhkbncpcxGwH4aSAniuBkpwSRjb4f4DLSzmzvWmuSox399sE7btZbUx42TVm8XMyxbhXDwu74pWpuSPtmgyB",
  "key17": "2LNgN7zg6Sbz1BanGv3ww3VtXoef5S8rrCS5oHbqsZjy7rSkmPnmLXkyKF4T9XrJSGZAEaCTwAEkraHFKC5AuAhv",
  "key18": "3R7pX3S5rvRpVviaEWWgnDsgXb4kdJLKWSy4WdW1H33XXwUng45rXtPMb5BRnvF3AzXwezrrPdJPbPyDrhShcErX",
  "key19": "2QFJSbjVtKG2XLPpyLbU7gEmX28YJL2nXxRX4mBDb3ZMkR5dSiJRVFtKfirW3tVRFXkCFBVSHF8tDt1zwRmwgFM",
  "key20": "4sWsoV5moqVvXgdZDT1FEvtdXvhGUjz4Vs4kgjBYEeFMbpcr8seb5jv5CVykKRE5UwbrYoZ8zk8vbKbXbdeB8hQX",
  "key21": "5voiazzqbdheBMkXZ4d1e6iM2X15Ktg6nKeT65BU2GNmHPwGuYpfRN96BtcNVgEWSLGtrhfjqowG6iR4cbx2PA1P",
  "key22": "46T8MwF3WHGCxbujo3LjvrssktiXmgHhod5qCnWYhztcL2AFVNPhaaPxD5QR6xEX4vwpaMtN1QFzDuoJxfsEKfew",
  "key23": "bBzTjMjxQK3sc5LNntJn2LoQar12gSDXbqeMaCMNYbSaUo1XtR9AHNw9Vk4BDW1JXpugcMvuCSHMqpfuZYqA3A5",
  "key24": "5abKtf1nqRX4FJNv3GM6NdLLpiuQrcCRMVX7MvPZFtprpfC3oJozFYqEnVc4BHoFs1tzgVj38NRXBFZc5FR7eSkG",
  "key25": "2KbtfaWHPBJQjKNhgohCmoiwo5PYyrjRnkvWg25rLfAHPji2xY9AnsLpQazsb8FBBfCdXrRf7NJiJVWH3ZBhGq2S",
  "key26": "4JcJLmQJwZWo7ohRCazNoMkZaSz7JY9MSjAPzXqJ5rhjoz89ZspU8kdhqnXeyKmC5MRwQDgg9rvXhPpBYWacs25d",
  "key27": "5u41XmKUZrvvQVXYYcG3edVx7Us3MQYztJxB5C9vdD1iZk1w8769YJE5X38DA9o7pk2ycWSrUMUnHhpAEfmcWz6Q",
  "key28": "QDHzoa3YSdrpTiVqB4wPnyA7S2Mxcq4tV8HMkqaukPJjpYcGbT7e9SuBgVxdm67pgmKL8w7sQAh2SDWBmMofsce",
  "key29": "5SsnRWa3ocPh1824jyXpckX4vSXiogz2TUShM46sH2BwNBVHj3sKsvnrv52U5fX1svsmHsEbnDxDF3hhcfZ1Abej"
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
