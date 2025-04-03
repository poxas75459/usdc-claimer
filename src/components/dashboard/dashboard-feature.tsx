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
    "5r1QX33GWWue8iM5ibiUNXxHkk7qBrDZFG4ArKe5FVkeDgTFpSNVX3cwVN4ZSrA6fk6vNGif7FWqDxRPV2g74Bo6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CqKN1QEnnTngQL6ttiiLpotxoBob7j9NHNckC2vcq93hjr4Zt8jE33kb2VyoEFMqt51LfWkcPrfpyzB41Yrfmrp",
  "key1": "35iTQu2VwTHczornCPjTxkziDPVAqRVRy8MVL4nGVh2YRiXpXB6jsgek7q2VFv1uMeBXxN9eqJdZtCXNVSbrpmEx",
  "key2": "jM43LRtuv1bySW8AfWzVtDWrHPRpS3PqcpYgNKHG8AU8RJoQuusDEYq42XLVQS8E7GGBeNcwAiczvEL4g9p4dYQ",
  "key3": "4j3eNckcY98S1aVrRxZJVQ99S3VQHKEavFoGDg4QNuNFRvGj7wxgnMq5dCDBkS9ZCBdDfpvYhJUuFPc1xpFUUFdP",
  "key4": "xrmU4QYfSobXFNWAnLehiRnMdafwSkUx9NPFWtXy5KR3KBqhboHp8JgUhgrDGRxHEffL2GvZ95bD5YBvKEWkyWP",
  "key5": "2DA5ppVquFZhPedFdYnDoQeQo92pXBvxPidcMDRpyowaAJ4rP8sVooS7pGBWNmzWEQ1j6aEwTnhR7HahMpk5TF8r",
  "key6": "z6Wvtvp2xRqaLrG4wL95cM37hjWPdRb6iPtCHpU9LiAsbAG7WpJ8khzseY3k19kXsMz24mWTktWiW1FJMSDQX2q",
  "key7": "64z9iFkAiaZhQDzNs4jnJj28DqhaSbEzgRjqCMmAYSxLgMgzvjLagshcczkGCMECiPPpSJjs8gNG35A15kHtDgok",
  "key8": "4QtY7dzbFyx6AjA9NRU597it6zhqt4VzWMv6ryxEpWp41Qx2kcWgcKMbzTUrWpQquekHQzLLqS67ZVY5wUUDdxtb",
  "key9": "3Joa2SWGpPDZhV1R87S72BFtFwLzsZZCjMcXbncfTX1DKWUAcmfeTouYYqGTK5vjyrL7Huo7A8eqF5HG2xZ5zENf",
  "key10": "3PTRn6QeAr6SaAR8uQmxbiaAfYm3eHRi39Ah3eZeKjA3jZeu3vabynnSsjiYNDieftqhVm1tHbLqSruLfdQ25Lze",
  "key11": "42CNGaNA8q4LkXzvz3dcL4jD1j5EiD93mYvoU9vu2Hgbjc4DdArY9SjGQv2WQkoyh7unYhmomqpz1i1CDbhMvC8s",
  "key12": "2mygULLVayiiowTGKZ9n8BukaPdyAobNQk6gRevHqBiKaXCRmYQbtryufwyfJ5RKSRcw3BnkZfbCcMSzsMZPqYUx",
  "key13": "3syXkpagYWuXjSqtPfZFiuuAAsikokyT9tk28oJL6ySGkPoVvtvyEDdKGqSGRzd5uFv3btTKbZj21HkNR8etC7aL",
  "key14": "2Bj7bT2SMX5966AMFP9MEQuxxTQ4dXgyBEhCCe5Zz4zhX8yqcPzE4QXRsatF67YEV74VofhA9F4Cft2nHU1EYKbW",
  "key15": "3BUyn6uZEXZ3UMxazVREjHZhf6Lw56N6u894WRWT2AqYKhLoAf24ke5GwjAgynt6SxSQdeU9gURaCGLFadSZgeTn",
  "key16": "5mSFxBkAJ7XGVmdwipx6DGP2nkGQEv4jHc1Ri7oDeoa8ZWCvQbQ5JZR8qwSSGbhCiBnLGMrYj536TLzga7p1RQ4k",
  "key17": "4T3qMDtJUwPNFNixNk8YZEGNf1MKeQd8S1pQY73zRboSGYa3caiFMqMfYjVBwLJLaRF9Roz3W64cXAUCwoSV6kBF",
  "key18": "2upi7NeK4xgadWYYHLBzrpQ8xA1itzYwSaS1BYcdXFuoFT6ZKMw88prvwGTuNVWCrUbsXDbGo7xsTuEPNjHu14hq",
  "key19": "4yqTJrc7UK645MJ3xGA8qGEPrA7ZtHTK5RqmjJcM5Pz5pbdfYSQemGevaoYLEcLKtafwAaH7NKkc6q6eQKAMvN47",
  "key20": "4Jd5c95k5nMsctgFt7NUtCgRZFhgj6yiru5UwSjK8RxZina8uEaiH3PewKwTPLE5xPpa9vrxTZmSPjt33XVHb1H9",
  "key21": "4SkQdxQsxdbYgtXxK45mHfN9dquuEE2ZJVThNvmgGtFhmk3HV1An2wCqgfRWJSF6qffWvfKAySfUg4R4apYU4cTE",
  "key22": "4zPLzBYYT5WYH4mtjNxdLhp4rGqrHj6m3TFeUDG2mrmA2Z3EnvygPXMPCbC9JQra8HRTgLfXbYyHrQVT7o8A3f9A",
  "key23": "4Q8Ec1v58BkSQeJEoL9oYNQS5UhPihjQsNQyQqs6JXNF2MVnozM5UygmkvBzFASRtKTbZi2tVCq3XmaZNzKBvrNw",
  "key24": "URk61T3Hn3oPSsgsm9B6kEDUJB4RFTjh4TjUCdAtJFJKP3PnKkaMdjT2o6SUGFXDMvAhM9fVwA6GhjxRiXsPEnW",
  "key25": "GgkHqz1s6ZKgZvXcWJs2RGAkvuk1RoCHiKB3hFsvW3LmZ3VfG1xv4CxcbwcHk9CBGAFjdNFvBLPqswWH4BrCJfH",
  "key26": "udB82U3SBip9a4H8MPuKDEJ4M5zAkEmiqftT8dHUnuXM4ACxcCwVSrW1YvkBHBcwi2xE9Q5eKzkJ4B98Meed7e9",
  "key27": "2nJZfAg3AECFvW1k6egMsikczC2JWYiy7BPBSVZYa8V7eRpTbaziybu7J2bYjHUorb7QGoMhBujJ6gxwV4m4Yf3n",
  "key28": "i95QfR7J3GhjvPGG7nX9XFb9VX8Vp3JzpqCAHidEhZDHx82nFgM2G6o8Sv9Ga5Wz25i5FViE29eeRN7ZG76PBpm",
  "key29": "2zh7GWfbqmF3qJ9WNSKB2W6xBCQhUj9hK7NRSYo4VreF8yz2PziC7BSYdXjzzVehhbLCTyqZw7a6sPYg62QWw8EC",
  "key30": "rsXM1LCY193hkFgwpzAiqoCKfkMmtMHqSLKuvuC74bTjknFHSyAnEY2incZH2XBcnbUnQV2hDmVLMMnoTbA6RQ3",
  "key31": "4jis84bZeFjza4hshhLBs6naqDdmcBt5R8KxJWd5n9kybJatFGsNBNQ63UYNg73jx8q51t2nmXcB1fohhjx4gWDd",
  "key32": "HNrWmHJwjZ22vHRDoDR7U6g8xNZuej84tBanpaAX4nDtcERFWQUCfcaU4m5sbfunHfBYBLpHdiiBV54qYFDSdW9",
  "key33": "2dAZ4q1oefn9NzE29fECTFcHTHuuCYxy7CUxSkZux365UYBgFNeUc9EFy3vJBKSehgQPisKAn6GyLf2zSZxmcAdP",
  "key34": "371KWaqTbzjP4ijrd8b9XetGqa8DJGzZnLjAwwv1Pke2Ga7qaQcD9rEw69rPvhNkvFTcZ1wBbthGabgHHYu7wV9r"
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
