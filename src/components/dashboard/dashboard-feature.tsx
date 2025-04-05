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
    "LCXjVqRcw86sejZaWwreMDFF6Mkrqybo4ip6usVqGeNW7RsPF3tKw6ZUEgA2ZjYPDSyCR95oJEg9qAj6nCSyHAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ygkWJ4AbiJwyfPtZVJVUcMoDYDFJ6YdmVCueXgsL9ZEnxF9BL9yuKQGPr2PxzcR25dRn9NzT8zd8HVXdTfR3snk",
  "key1": "24AnHRv9Lt3ESXa3d3yxNA1E4LD71cC6hPrf6doTMFEMrtzKXpx1n9aiRrR7QQ1keyiXPhaFGQSEiewd5PEAqfk1",
  "key2": "5omGNvmWZcjNx6AHTzE2Roxkb6fLhTBdAmTQ1qJwwCaimHwjCoJ8eAUCo7pdZnsRgBFwFYouJxV5iobiSDbTzevR",
  "key3": "gRosAEJ6RjdBG8KjWPZM2j6w7VfiSNStEvnpEsJksw6Kbq5HBSHHXerjm8Dda5trLiCHXhVZRuLen1NB7mtesH6",
  "key4": "34Pa5b4eHcAcbstFpBR4TWCrxRCWexWd8oQNzav8nwiWHoZhwLAwbrbzh1nqnuXBNspsbUkVvQKnt9JTFty28tD7",
  "key5": "35bo8AxCkciCvybqtMmUxU1uWwiQsTn9w9kd7zexHUEwt81XaSQKbgCrVdB9mgdSSVoFW5vqHcvxxDnPpNBB3vyN",
  "key6": "DhjPAz84LptLoKWLFbVTSvxZhNeLoZ86WuRh52h5FRpKYiUvtRzzm7mKaUjEjar5Db7GPLPjvUJcuWP3zfFWakB",
  "key7": "4fFHyTdRTV3x5dbKdA8btRSy4FKdopfgnaA8eyEDxXKV8dPZ4xdNnFtFUyVBJ7YCG42krForWAU34r8XV7P1X7DZ",
  "key8": "2CSVFTZfLtkaB2iQx7FPuyJS4wvthMyHhpVTWsEBkqDFBGDat1PoJsx4RqYuyUF1r5Df4FXHCqRWiTQjGGEQRf7J",
  "key9": "5jEVMcToUrgrmvT28U33VdFgAPTMdw6LdzSQv7ZSW9Pyf1ZcpvH1x3e7DDEveSBdwpk2sPbfDmkfbCh987Qzxoiw",
  "key10": "4gCmMFBuB9VRVPULjskhSE1ER8m7s4dekj2t3f4UZHMsqrQL7N7KpF3Prf46htCJ4Gr31aF3UfBF53q6bjwghPq1",
  "key11": "5a4dXi7GfrCbfeH6wgdyKwpntaRLAbP9qeTpB7BGmg9Uszj6eZHv5ikBLbQvzYEGAUqUVb1R893dFZqaK1HiZ9Xp",
  "key12": "5M5n8e2gwa9MuY4MaVzESk4aBK2bCcFnvGLBBXfU52Teanf394GkyPHcKkGcfqNGtfDomqGy7UCU3dtT4ydkdx5J",
  "key13": "5qEiUaDpc2obf6LgtVLdwXPDEs8Z97DKNvcxB78gSTFb5KYR8gWkPLpfby654THvYP132V4yCoT9BpeyTnSfqRvF",
  "key14": "3a79GQ57vKEVv9e4xyogCjmn14L35aCVNe3PeTgUHn1qPtQ87LVJ7Y8hXJzNBzG678umxQxqm7zqfXho2mxoVbc4",
  "key15": "4jeTwmKcGSc2PNAtPmFggRKC3GE6LfMJLz2eWLg6ufXiyv4QQG9gxEytUcnwwX3UU3DJtXnHB3BV3J81aj5uZdSW",
  "key16": "66bNSthSKKuS4LrHUpW1JNeJrbvjZGpWyM4L2RNNkZ68ZV5Ed4rmkM76PdKH7desW3Avk7hV8wZ9GALvubFj9a6U",
  "key17": "4txMtVLT6mLB69XDcdpzGeU2pno3L5rnLq3hPpHxGPjvxNGFv1b7YZRgBSgrLUb3ZiyTSViQnCX6XJqdbHks7LRG",
  "key18": "4Pz3uwifgb4X4TH9fezxHuFiG2b9o1n9xVzw1nHd93MbfvJCN766XpTC4hhXrohTQjbYqbMU68EhJUPVorxRLjqo",
  "key19": "4x9CVRnipVNSoqhDqFmLxtHDGNCe4NMTL7nHU4jJ1srGT5MyPGjfKwb18PGpHK4ZcbrGi9VD1eGtxskwub5rh4ou",
  "key20": "4ceQdHGoQDVxu1AKTUdejGpHCWxx4ez8wcKbgC5nvm2eW7a7v9DG8CpPcCso9vxj3NbAT2RT7FsziNHSQ3nhcbpM",
  "key21": "R5Gy9csdZMJYUcot7Bfdbv2ybFhY2SVrhqJjgHsv9Et9StAHgWSpjjBnUbA2Tjc9TVXtLHW2dhLtEpoZwHv2iLZ",
  "key22": "2fmAby19CVmEjz192ub5Mkj9AGySCEWxqMazPwb5BGM2DPixTFV5V8Ek5sRhWYSUUajrMvKF5Yg3iWrBE5JeExUu",
  "key23": "Pm2fuhdQHysRAL5hWy91ARm9k4nEWYgwe8eycFecNX4b3in4JSKGkpU9HyBr64mtdwy3CNBnPiegHuL7aqy5mqx",
  "key24": "521xH121MYJeLysTPK8ZXkmzp5rZ1jLaqAcrmmAyb2ZrKeioff6VLXhPpep9vBWsF3fWEFPHfamAznUCHtXfZMKe",
  "key25": "Ar8RSeXVFggqTNb23CvYoscCbtxboKodf4WzfvSjM2UTBG6wTQGftsn78cw8YFEUW1SEVv3fZ4eqAgpAYu9BwkZ",
  "key26": "4F1erQa5MuznYd1tj9iLFWWD44bUyyxD2aMUsV4dmRzdo1XUxSKXJ6nwqkqojvupRv1zye7ysVH1noWpqmj39xTL",
  "key27": "4e8jRjAQcTuW9ASvSXGR77WFVZ3kGMgyheccfWFdhNN6xgTXVUfiCVz3gf8oknNxbYDhmY35841d1cttQ4HSjq1R",
  "key28": "2ZoQar7hvD4S7HB2NgdWbcYeVrAS7ydp2CT14V6yiDUkXWcnt47ptDp3ofTg3RTL1cuwbZVp7ygnpR7ifTKub7ze",
  "key29": "Kwrc5vvhiL7Cc7pfK5sTBixZ5bDASv6QTfsadWLeYqXEyz3YLn3qGjSj9HRFaiiCNGGbAGKy9d7TesAvZf8uqfM",
  "key30": "G4uC2rDcyFCz1AEzvDwrKbExAhhbYTERiz8DbvHf9iyJvvxwnJt2oWvs4dUYo5YxHjxTz9iwdZNN992QPqiNf1W",
  "key31": "46VkryWDV2asvphwent6BLJjFHHq6qg46YbSuFRpv8jRsMoGg2vZnG5qkhKUVAYgBmyG3LnJDBNveD2nVF5UTHBJ",
  "key32": "3Ld6uNR1GQJmSver9x354YAeQokbxAHA85wHbMhBJqiXX7iLCMyVFVqn5BEqZNtipj9Ph2sHYCWHMPv2BsqZdsG5",
  "key33": "3EqMUjmZtmgtoAfQ1rrBFfnEaLWjfLRQN7f4zVUMWnZ5wEDaULtj1CA247KdHNhMshN8qEQvr6iivsJt2FwhH8D3",
  "key34": "nDyRu3kTmk7ZYayzsFiJbfzEutMYSEcNQhvnKwpjZgreYwHkiw5tMqpVXrn3bicjM2vfCF83BEM1RKHrZwwFxM6",
  "key35": "2tokX6S4Ui4q5h3TkMA4ShCLrYjRhYBz4NCEzzb4Y2qK3nhiW9haM2iGuQUnDkLKKqTfgqzxyBQGGqTGHjt8Cp26",
  "key36": "5aWNLNtwG7jxPJTCQwTZxikVP121Z5So3iGZP93sN75qQiDMg7Q92CiSfmvJ2yeVq3PHu5nEMtzMNM5B3FvQwmVg"
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
