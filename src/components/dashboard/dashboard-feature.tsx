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
    "2mZQYCHySALmEDXuPaDDv7WmyYrKTNEFGZoQ7XdjuMJ5cowP99cPqaXUUKD46LQVuqu1J4hjSgZ23kYv76BsSEYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TNN3Yh4vnQ2QtAkrH7ULymozNGdThVbdP6e8fXyCTnGUJzcddrqVKqG5xMiPVS6q9s9BgCVXt4AD6wW3UpAnNA4",
  "key1": "28DtnizFmdxoAZB6ecW81r5RjGLFqqBw2DWxRRVV8t4kw8uiwrZenL2oo1T2XLQUgkH2nHUD1zNszrPeGZk5db6B",
  "key2": "5o6QH9wW9WK4MsdRiXvZrpM8TMbKoMR3CviyECJoUyAwTwMp2YLzc8hw7QZsHYus7XMRXaSDafkuLdtD2omFu965",
  "key3": "31orJtVrAuYubJgkAawYgUAbhBKMewq49FvZR9okj8iFJ8mVX6zuEWF5hZiZ2Pt7Sq8j3emELVVdKUVqdB6dPSwc",
  "key4": "Z9ouQp8PHdiGyfow3bohdPwBDTi1wz3cwRJjbbdjGjJ7aRMgMAGjFGxewKy7NJ84p2RSDGVi3acJomcfNJTT63U",
  "key5": "4p1faQww5CB4VpFik8GCTaaLHAk7Gz7CXvQmtBy3rYQGtbd5LPKHnPMF5ACaBGXDg4iefuAAjtZTbQxUQLgVTTj6",
  "key6": "48X8rDNfgJ21pKzBhzD8RuPUXkvbjjXYZuYyLg74LjiLJKmWL5PYPLm5mBaUwX4k25gh1q1cJYYhHWUUhEpy583C",
  "key7": "4gzQhrkM7hWkgXsvwceGw4CiNLFgtBU6FvD8kca8oRJWuV2etePbeXBCGmHFnHFP6stp7RU6YEehW5bYRXqiuYKn",
  "key8": "TGKKkcBH58RVtjdtCa5C8amaAEiWm4s1Ys7PSRsjo1S1G1938hH8LM8M9SqSTz8X5XeDuWPR6fsyV18Lq26KmHU",
  "key9": "2nGqCkHVgmaf5gWmuHd7bzfADBTaY3BmXWXKFZDk2ctgr7dJLJne95R7t8x46bC9i9AdbTvDVLRy2xEjfUPcu2fq",
  "key10": "3XwvttJG86Eip8jYa8wmMNbq4A5houjLmQt4qoUvKvzMZLx9x5BkatTDux11d6ywJQYHmQ13JDYyqRSdckeB6Lq5",
  "key11": "xPupGPbteCGuFduyQhR1iN6NXrUKV8n7Gf6a8JuxKBt3vvJyo55WNk2TDZiJK43xkG1PmLSv1zWYimB8Y4jmsaM",
  "key12": "5Z1mq3KP725LN7aSkrJ1vsYGM8PEaSsC7yUR5MLrpEYLnMvVLzNPsCzsEvnxKmEaS8HQeUnTGpwhNmgMAiGGKpW",
  "key13": "3Kr1akpScCTM7mHmKAJqJfELomaT5EvMd99nxWTFV47BNgHwHAxmFUXbYwBQ1NLtPZoPhQpBDVfYEy2nAWFbzRSK",
  "key14": "5LTGS17EZhB2kAMeAY9BXUHfuih41y7PQWb6jj85Qfr8XW2jE8bCtjVeJxw8i6LZbBtsxo3ewMQmfn7CSr38aBCb",
  "key15": "3bayP6QRBiEz3d8s615d3mAzKb9dK6uwe5h3zM5XjK7j6ytcRk8j976xuzoZYcPqhqTRd4zFPvNUvbcXtwxbbFYR",
  "key16": "4xonDfVaqi7au25Uios8yzCyU9LXqRRhMg8CbDbEh38QL51EGFujBVk1o9RX4Fxecdw8vAz6Bh7yrhpyUWy7SoLf",
  "key17": "2tfo8ERMCUCKWJCtbUm5irJ9T17BiExoAFey5D9LwdFPdbBBZAxZNedQUXUqFbPKNfmHwnu7WhXmqU1jtTJjy1LJ",
  "key18": "j4y1QqtB5Pa4ks1irsywsus891CB8u9cJ2XiwPY2tNoPmMhyk3RCUdiBpKPFwBaebpNNxPs4g2GNnwbcZaP7Wq4",
  "key19": "2DxYb11KnfuHGhaXmy4Y26m63NprdZ4YW5CVDsVuHcui9YiaDgDaqauQuocRxhzVVdi5FTp8XfNZyrxELyPtogMb",
  "key20": "XcLZ4h6pDU64uvEN9Gggd1gYHLhzcUBmNHdN1Fiowb5sT147pe46CCeYQiKtpaWt8xfeohTcKrUFPqxc6fog9ou",
  "key21": "4ZQ5ci38cUi2Bu3zioiihVyVRDmG7YH3oKjEm85YY7JZtLpFtF537zrJ1szeTzstv9QEDJQdMkVdReE1efAUXK48",
  "key22": "4tdA3HiByvw7X93iG77xpxjGDaHXn85V7B8R9CsqFN34upf9VGG8yNfBUqr4bo2eMB1TGJu29DtpsoKqoXNKq8yq",
  "key23": "4KS9xikmgHi8jg8PeCL7cJtfhSuVKNu4U5N4YLzxcGpTWRuKRRzC5VgdFWP1iu3twafTJeZvEwiVZwUhZrAjQhy4",
  "key24": "4HhF2mdUkUnnDE4V4UzuigwKLNzEoQMmhyhVfh3kYMYdTC227UK8iFr9h3BJf6sXc8qJhnVhaWmdt3eWdBCwXhVp",
  "key25": "5r2xakXiXvb2xzy3V25aZ3E5FkbCNkyiGPDgT4G69PUnGZrTavWc12GZC7pY4FsMvdBK48vMuihZo2ghkEvoQXp2",
  "key26": "61NXrYQN1SBo4mTekCF2BcQtDsSjU7Y9wWkBkpggUhjnTZxgayTrcM2nDJT1Pyg8UcXja1r5tDZyPPCGgE4ZnX7n",
  "key27": "2iXontr9g4WejHJm37Bgn9fVgpzpgmqsgrCdLVQ6v8kNK1FzrUf6XoajSAkKsNWDzGyipaGD15gpFBSg7G5mp9z6",
  "key28": "4NBQQATQ77EWhL3kYHma5aLLKwSXdwNA4SXTUbVCYHQAW5akoWzvhZBLG3r5T1M82RN4trYWUGSMPvuagkuX3qGn",
  "key29": "3NS28osQCPuYq16wrb6sM9vntRtKSdCMZwH4BhmaTihfrz9nDD6bMN8bM8K3BqoM7VTnephjzkPrFVVXGYjJtXyE",
  "key30": "3h5VxxHtZuqa3pYRz3qX7VhH7q3vihsJHQEnJhe5tk6kcknJ2gTBfZDgHvKg9KinwqdC1YDKKCZzH6V3YskxCLSH",
  "key31": "2qFTAFchaSAM91cya4nWNcwXALYwLsKq4rUnCzVbjFHUv9gjLkdm5Dct3Tn4gaMh2WMR8A7Xt18iyfhmDmt3SRki",
  "key32": "3XGcvoyfxUW1i3CsFUTm9couFnbKmB29wXGva6mi6rGiGsKtPx8Qw5dVQcmcbqhDJtyVcc14MTFA8bFB1bvyeQav",
  "key33": "2CqqMNDBEBvLVPWkx5Lby2kLZbAEBHrAqq3Lv5KqcnuW4mr33GZ2SJsVfv11p2QSGji6xio3DBNiiGrUog3u9vrV",
  "key34": "43PzhyUp4WouuUF3ZE7oHnreXXR5LPbk1nGugbauEQbyHB6EtpTqrUBzsYKHruL552XpjqGhK4R9ZgLee9RFRWUc",
  "key35": "tez7rANcyEu89mHLp9SZACgDk5eLycU8PAiyfRpvmAxW2kj1Jd2ikFhR9ZbeiBFUGL3BMRFrmNTKAX9By22wqft"
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
