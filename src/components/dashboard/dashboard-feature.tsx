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
    "bmtiStAY5U26yihDK4sQXJfafSuGd18nU5Q5co1vUzrXzVgRKPBMZxtm4ECRtnxrFbyD7NhHbkqBvzCpvWVq1ab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mVzcymMG7LCDnhfRhUyuqVs7EwFoLkcABx7QzSBuViqaSUR378xa42ysZbdjAuFYnYCaYTaGiYs8TyG6Nin3iSc",
  "key1": "5i9d5cuofw2YfFfaTrfcQTSf2R88zrwZ4gnhqvLsyLa1sEbRZ4GXgKxq68CAdVEMRc8PrqyWwsfuw5CPkKbRpFFa",
  "key2": "RSTzbErgdPNt3T5JonuNQxAMai1wQNpAoHYNoWamzj8UfH4TjmunaDN4UNNWYodDP3MKJ94FmQB1iurWuuaKPAB",
  "key3": "4naT1zp4u3TMrTLzaQXp7ANiXzmb9Aoj42WyGeyiq5U3Zy3bYSAgK88Qo7sVK26pxFXm25ndeh1KyWaJNcxXVYGv",
  "key4": "3FXgmS1BLaCuttASQMEfgz9d5M3QBHHDs1aVQ5NURKmEZukSLpttaethZUGHWLNdbXgETs5BWTPxMzCvhkSpmGDp",
  "key5": "2sCD244C7vdkWceu8MkcEJRN3dU79bxe8sBXsJVTE3QygnDnakhLnWKivbSWdcmm36wM5BqpF4nPquhv8iEXTrnX",
  "key6": "2MP3VCzkuZA8EDrWWUVaE45VDYReNGNueBNzQe7paf1KAz5oYaURHXeYo3jYSos4fnKPVTexq8csK5oA7QjRAtTr",
  "key7": "4Sck7Soka8bxTYy4hSAsCYUdewBtqSuBKKNVRo4h9RbdhtNow5xNhvPiU7GBbFqJsCaybE7qpE4WsBdnah6LGHaM",
  "key8": "51D39Vn8z7vAhUEyZHFWRuvYeW6NX9BJ6Qqe8KzwuBFRiduxZuJTdQJTjrh59wZXtfyufbEZwXCXHNLDv8uK7qgz",
  "key9": "2p8HrZX8CuJSpPqJAQPMPnhJYQwKsiHffjWvM3mhCf5Jv75nzgLxDHf93ivJRFXvot2b6fHRZqTpnVqL9zQ8jT77",
  "key10": "62CAozDv4Df87SxcPaMpnYRSLLxMCbNnfyR35VzH5qoxyccBrwjJPgNMWcqjoPcjxWQKtpLSMBQQDM3VKa4pjVPs",
  "key11": "4Jhz557LPNtsUoKV6UtZYp4FDsCPRyPWYwt9UuQnpgHRL8imbitnDFLP9euAQxnokQuPTCVKZ5LimfdU8G19waKM",
  "key12": "4Wr3SAHVesPp9h6HSnquqmrm7PJHeDBTZmqXQiqBGHYfduhMPvWnAuUuHiuEhJGuzmRuvV9m25KntJ4x1f4B17TR",
  "key13": "4oXHjTdtPqBEhiqKhVeh2zyBuPF6PMdcey7jPabhzRdqgq1dsGbCbwAiXub4KdkdrSfhEth5TgmzF9u4Dk3zoV2X",
  "key14": "5vc7EEJ8wZcxSjq4NjYRZBEQZdnMgf76na3uNCD6saf9CincJCfVXhFyooxryzhkNuXCkwDWuhdMddKMU95yVTyr",
  "key15": "5xizEks5uewozFfdo5ANUHYxQuYWoZDKFX1ySoSFfYVZpxTW7XwGD34WApyuFoQkfJdE7dWpU8AXbEf9Dwa7daPG",
  "key16": "53zmRUAVjPuS3pEQFLbq3GRGq5PTMVj7qxje8CKS7mrrkJWCuf7PgwqLVoQFf87Fx799JtKS8VXjoCHEaekXp5eR",
  "key17": "4WvUVSvj1osebQmNH6quCJuve4MgrxgHeK1UZ5zN8Z1UkJPvFDCnL9p1jDdjuSs7p1ypivdHHTqrf4cSz34jgiQM",
  "key18": "5Zrm3XdvqchzRYwJQ5vdWtytrszzXp2XDjYcmbcE8UTTJT7Jp5TGo7uURqEcQ5ydcvfzcsF73GM4z38AXbYhH9Ut",
  "key19": "5vrmvFuFwnHx4TKGuZsSb4Mz3HuT2rioacZWm8ra2cYS7MhzZZFZAef1YmK8dcUtB8A6dZG2bHxLkq57mgMKK6py",
  "key20": "4n4EnAKbiWF9Q8aZkCzyG7kWL4wY2mCWhFanuq8WsCATu5UVQERzrb4B1f7VHHv8qy5zk7aby2KDTttjfRv1nqBn",
  "key21": "4kSr5mxtmJc9wjEQ2jL8AUujRYLWHQtsW8Hj8r7eEtsWF6VgrYD4jcDX2cejEfxMbAGLgL1f3bdcwJcvkJUsj7VG",
  "key22": "3F93GmG8CDovNKZWHhuU6BrF9CrtPrt5dGQKXA3unpNp3No8CABX53pU1xjqmVRqeAWduBhepGjLjAqtgfEYkWtS",
  "key23": "3mg6c5n4vstTCsqzySCdutgGmYpeGr4Kc3VTfrcccKj8ZpaiMnHndQzy1gUMA2GNEUqFXyiECpdHLAjzpiTT5BWt",
  "key24": "B11YW5xa7jpxkAbNGCGwZS38EpShWBQxgjXVxYuKHEjD1RpE795NpZ5pbRknhhpP8eHzWg5b25xG6YVzi5xuVv1",
  "key25": "Nm1eNR58MPuq4YxjXn5VqaF1eRkzAHDvVmYFKiDnzDk66fywHEAp97oUXQrjf5ipYrAfKLysraUvjSmZLGkbEZ6",
  "key26": "4d4Pk7yqJgdpu61BMHX3F3Qc6qSGxTegz3Ft5dVyAy3RGHq5WTUQvFxWkGB7KxvdFYUCJ3VnPmqJusbkvESHo75M",
  "key27": "59ZrNHA8tr4RAGJYevUkKu2WaGF4yZNCYyeR8N1GUGUyLWS317PwMoXEUMF5jDpDBiLASFQ4P3Hi4oraufh1uHt8",
  "key28": "4ZTWRemktYsja8Qn3HsV4xzN9TQwSQtAMTCtbPJHHjbEcC5WS9xk41a4gmHAqV62NdmhiFhVFJud7Nm9j1PgJ2j2",
  "key29": "4UDB7stvGEinYQHrSzuqgrAY7sTjArHshyhuqPwVavutXgTXhBr1p2j6daL1JLtkcyq7DMTN3CqiHqNnxkKZe7X8",
  "key30": "3wYQYhkCGeBktvA5G7hRSzEM4T95oCabDSskymktUVmgznsH3Y4R1FMe5bYJ66bqEFk9yQcikrkRg9fjqeZjYGx5",
  "key31": "281vG2yhXc9gqCgmsjSiG5B471jYgfWkNTPUGY4DaEM5GpAPiGAT8ZN4MLaia5Tgt6BUcK83av3SRmXesMHL2kZt",
  "key32": "HRJqNkvP6YkwBkQGoTXobpqkySbPHsHFW6HzrrznSUBSZZNPhDsQZy2rXQJK6aMVRwqNeSrZu2KWJSBTHE8S7s2",
  "key33": "3FSLbeCPsb2o2wgEEfibGVMbk7uLxpxNPM3AhD9oyFRRNTAZrxPw6z7k3v2tcugmQwa8wvuXKEjbFSK5SEzhzH7v",
  "key34": "Kw6pMJifyjajVvT3XjL2DwyVAzp6vWw7sMXd7KJkgXSN9xBQ6PerqdaEFbMYmNJznoqUr7ijh8DnUMx42Vbg8pj",
  "key35": "4RKiAdP8Y8eQ98kZoys8reSJ9tzN4aBipeVFwhNahQWRRczdXjLbdCEFq8YPrC3mFrcdywHrBEpexL7qioxwdWxq",
  "key36": "5pNDgLQ1i5ZWFQdNFqpfYNYYQWuARDQSBDWr3C9MG9WJocHMz3efcL56GA4Dnq2ceyG8N4ss2z76r3DsTit2g4FY",
  "key37": "3X6gvPNUxfC4Z7dYYqEEmLTEcJKe1qMsYMDH8qaNqG4ZZR256e2ac7Vho2aRZoDtKPc2AX7oseLuy3HbUh2mQBcP",
  "key38": "2UdcFEd37hpCWxhWQUHwtrtzwg8HnUroNLN6cq49nZLtUdaUE4Cg2Gow1jfvg7gevoYDK8uNQ5WTYdMar7F8AWrV",
  "key39": "5BGFC9dec7wkHSq26jMX99WhrLv8Lde2TEct5MewSTQk5nXTnyxTyXH38ZNn9GJE7zxDxb1Vg6hvRVvy3JCNogGX",
  "key40": "3NfHBXpNgwp4rFNygTywK7kPXGz54APV1iWUmFeoeWAEkpZEuKdAA3FzejAxgHq5TSwL9w4fgH6DKEjPRYreAs4v",
  "key41": "uScVMDjBAkTbgzW52jj2rYbTFW8MaNASvjZ1dP7pD2UJfjzuC2bPna4j6M1hRP13Hcexb4g3HR3NVfXJTwh3JQK"
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
