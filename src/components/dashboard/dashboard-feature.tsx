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
    "3BuSnSuXjoJ7fVuq2idcJgXPRTTEGnkUMdbsUYKLioH5NCXHG3RsyTqYZnKp95xGw8qFUY5Y3NLi4KLepCdGG5At"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P4rwFZTCsMnckt1okmaybnudWhWBktNvEe4NT7cQ1CA1TfUpc96XvEje6PHMBrQo6YFLgCjwANc9jTSLSdWBPJW",
  "key1": "4N8aRPfAMeTEwyEaYUgQGM8Bv1nZ2iSgpruGKrZGeD7AQv3XqHr3ypvwtwdzL3WQiXq9dAYxHWXLw4Zer9UvjjTu",
  "key2": "4SCxHHvBsqFG2CgVMAKeW3BqhNMiz949B9x16jGa8SBL4BnnSe1frSPqkysMWQEQpPbzVGoK573NyUFycMjNKuDf",
  "key3": "2v7sNCJG8h9SNcu48xeCTfnBnEB5D2zQemDunkEEDBAdDsGuWteGHFPMGEFUPwgbR2imvfYedQAjg5bqueqtnBTd",
  "key4": "3dpDdy1bDTPjwxJUttLkTpmHcakxacXwEyDUSDW32tNCw2VDHkaMffQ7PXmB7EzCECVLZp8RDaP9kGAbnTYebsq3",
  "key5": "t7JHoPGEx1jmVfqncNixxMZjzYnTPKzUfvGuNoSwoyNLZj5BTfM8coHq8HDRowGfxTUdYTBuDa1o19ZCdv4A7QS",
  "key6": "5rPZ4NZ4h33tPc1uVp8pKmqstq1g3Cjr5vqYYit7EgNuwTkH7CgjTXigCYUZ1dutPE2Xr1ME4JjKC8aQCZZrphxp",
  "key7": "5jaCwgyX5VMgzZpfZVwRMYme5jqCRjgBWNPdsEjqNJ8PxdPZCgEgp9Y68VPKPpryMGSRp9BXjAodnPSVBWABgkph",
  "key8": "em91HWeoFhRewHAFHeF3EuuLZUW9KL9cMNWbzxmR6QPuPnP9VHbBDQmX49TA8DruGLNkHgBAonMv1nJCc6y76jt",
  "key9": "4k8AZ9gSw1TuaciLssZZiCcQN12gwxjhY2kMoHtqjFYXpF3jfskwAX4LkHf3hb96UCZymsZoU1nBsxFpyT8PBxqQ",
  "key10": "4sRGFcccURmUJrV9X8Ap72A9WZUXBQTudFMLGbrKMgCuTvVCEyLCDxugRtDkEeA9rriX7vag2XfB4SiHnSswmC24",
  "key11": "3yC8QXm2y1pHPoeGFKwFGp4nrjwbeb8joT5r4GrLffPwjgZrCftvwQ6UWteA7mkyvjhsrptfdkZ1p3wC3Bn12zWQ",
  "key12": "499fBDQgMWztTxgRBLCqzAV39Q1y7nmb6LdxaBYXh4GPeAfNEi4kjuKVEJPN6u7LJVJtf1cXHaPQaWfXAXMi6neg",
  "key13": "2uyXJnezUiDU1fA2uszRX3ADNtT1T9Xwd1cRm6ssBMfPLsi76n3JMtCcfnrXs6Jf6AApGrpWmLxyftA8F2vJuCVR",
  "key14": "3JX9Rr37e8AW5uw6xtqsCUjBA9nwmnkMjNxpRHcX4vCPkXezzY6gkwf2Emvjbq5yKx3Qrcqtp3bCanAAvXBcCPY7",
  "key15": "5e1wMK6wrupTEd12SzuY2fR7Yrw7eGt6JQ6j465Z6RgQCSNhZacYvsrz3jiPe96sDvKHS35copv8dkYHqRbqiMKT",
  "key16": "5qVWjwkFYGijEVRD1f5RrFh1RkKcm6dDp638dGRDgTLisE77Zi8H7RcwYYtrGofp4kdrhRbqqSnmpeJMaGRE6gTW",
  "key17": "2Wi92cJBjPipB9FuX5Tg65WB2arZNvf4LQdzPQhJico9JJ9E6VxxzdqBBfpMVevT5DVxEFZfAyfmd1R111ev5oW3",
  "key18": "4Grr5y2xEaMQqqVEBkbW758KBebMJe12uzks6o5u7vA4nCppdUj2HFSLn2BR7AwFRsKAkjXqkVAbQ2Ks3maBXY5n",
  "key19": "3uZWHtPxR6Bz91eFNc149yoYkBXi2nnfqfYvztZ9v2d5HJRLLJWSHWw4iFzpVThQ34Sv22BnMtUqUpZvCc2RcaqT",
  "key20": "EPb16ocxoZTBUMneQ2AuUxLFk3AT8D13v65S1grAo1KMbyvpJD1BzBuRdbg6dx42duYDzvq1h8tbqGMmVGkJus1",
  "key21": "2uKtoYGVsiV3pUwXX9hoWsg2Jpci9jWtBprhHQ6idcDybhAZS6M7C7ajsXRqiCPV9h6CcMNve7E4Rh4ekNd37diM",
  "key22": "2oH6Ci6XWWJvcwxR8r9e5rRzkr6Uhxkcij6SSbocU1tC8LaXL4CAntqdxx9R75WGbecZeE8TRCWgPNfkZMiyiNj3",
  "key23": "5nmW2gbBrXTg2EdjDexZEiiBiKF6aUfQiHjg7PPXN4moZ5kNZRiN4upztLZchJeN2AiJViMq85kjw2crFPW2fRdk",
  "key24": "5wrQWvf7gE6bZRhMkTuwyegBhYvdiKojZgGBqw22gf7iGuKFk3fibN41faSc1f6RYHEw1CfyxvUiFydQnSS5HTgh",
  "key25": "3NgFAx7CnEzS5bMbwZMEdbFgEESFHes1TGmUrroASbBJYqK6nvF4Ct6B6CprELQ9XU3qjPqmK8puZrDkP7ferAiF",
  "key26": "dvBGppXd4MMF12xC1CD3RJ8DJah7ZVQQruc5oTxWGuqnBNJ9VzeYbwJyG5rcz7aHP4PnT22jH185gyMihRkmN5b"
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
