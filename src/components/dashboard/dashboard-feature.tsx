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
    "8ceTj8o3QRrG1WnBJHX6xGC59wHDf9WjaMsmMSGBNsjhB5e7FezpkoqB2qknCzagTC3dA6C3yAd8p81u5x4cpdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GtzRyGgVXJYZYDPbm4P7YAiEwjwM8p2MfXxMHxUdMDTD4fyzw61ciMTgAxddEpQp7hfRGePGMevJfr2doTwpcmM",
  "key1": "2D8ym33sScfUS8YtirceAcsJmCH4XzX7ERet7VLofzpsX3HyMrbZXW1cEKffLr7RDzQ9Pe4UQAhsMyvwsAGZMBcv",
  "key2": "4BezAujFNziWh95xX8UPi2GDJEFsgZpJYC32TNZxUKi1wWfmRm2D7wzkMGaHNWYiUa7s9ozVykmAuizGvhRv8dDV",
  "key3": "2pMbxKKk6ALdyVyTzrsEyrU6St7c5dGjtBHXoHnbZT4kxDWywDd7Qjfzn9KAtLh9vVZ1vAY5YF9AWGs2MB7Tecow",
  "key4": "9NvVJP8mZPk3TGfXgJH71B7ezpH25fFRuy6i6aqx731VLFiuWMNoQqGX2sGh2eDfTawAbEVh8MJmwUCRtCCjMFD",
  "key5": "5dYp1U74PV5waF39gHr9HkCxuQNn3CDttkYMxXzKJZk6jZdM7EmV5eb2B1X5h5EAxeymn3HSfHNPUMrnc24ubmZ",
  "key6": "4xtCGL4ahmbfdrSVXKS7QkTbMwuG6V7GtBCQauig89nMA7q7aKGKsKnMUFXnY6KiS8hTkj7Gt6b2ziqHKbpFV6DG",
  "key7": "5FdcEssufGfnrPipysp6BWtwzar8t18LXasKoj9BgPAQsHWN9rKcyMmewnYi9Lrw29NbDyozJkGBVPqFsYPFFeT5",
  "key8": "2nyLFrUT6ivmAv7rzg4BXzr6k1t4JVuwHg1BRfpoJAba6yJn3kTJWtJRNSKwVKpcsQSERah55BgWX9uzwz5gaDCn",
  "key9": "J7c2VL1ErMjFiMvfS5cPdQDWpvkpXmcqpZAcyWKoaBi9jkKYQNKaCg7uNMsggUyzPpr55rHx6mX7ARKX4NECPQu",
  "key10": "4GXdx1bArSJ73C9umnBvCLkMZCyJrh3FnhQpAPkzSiFzruH95fiNFed6g9ANxUaHVyxMmfpZRYZQx4wiwbKZXjdb",
  "key11": "3pLCCHYUmQUgDoA67pKDZJ4Swmg7oXTE5CaBSMDvrVCXFZYhfE3Exh6Dzenvk48fUAJQCFAt4Bd1Q23Cpbnzy2wv",
  "key12": "5wZdS3md2CjkaTWPT32FhSVoj9KMfNduCszvHQd7cgi3jPTmpfBvgBLBwvVVvRojxiEW35jUHjzkN31J5YkD6nLt",
  "key13": "XZnZFdkzQwvYPQGVbVBEMqffJF9ihnavLZYkuzV1cyY4JgZwYbHi7J1LYQz2DGvqBJHrAKa1sgUn1S2xgqgM6T4",
  "key14": "43BCmBdQq7HymbRZCKa6WhmDxc8jqLr9PcsruUHNu5XBEukJU5D9n63yXEvAV7E4sDidwScCp84giqWx4sqGo3xw",
  "key15": "2zdJopkifdB54Xckp723oRubQoqi8ZMoYUCHwHRweLRZkgd6H75uEuxc97hm4LJAg7EeBj7QCQB7pmTQL6orEfbN",
  "key16": "6887mjwacjtpanGsorkth5xE8uFNnEPYPf1VmkrDpumTpJrH6mJTY3esm9ku4p2huKKhDEdPcaZVia4FAMmbcMu",
  "key17": "5JYdFQQKw27xvxbkLVA8MRBcxPpXs9PEoe8xsJgjgiRRCCgAeiFRRpEJJQRThV9VjgagJQpKfqnmZwaiGEcmzzbN",
  "key18": "1wadvBmMsCSpcbg9g8fXVE9ENwyXEK9pcX713nYNmDqbNJNUsjV1twqQFeY1xrV76WSxdwYpEq7B5sAqnbM5yAi",
  "key19": "4oVVVGQzYd39BMGZGBnakMRmycfwfVAdSW2wAcidkMFzgz9qCHoHGCdBH3NNgM3JTDXDCyGSH9be7VmMDHazxSpq",
  "key20": "4hXRLbxjDCspPbrmsJirLM5816cyCJ5CYFyKXYavGKfd39cU5wCTry58wuyHCdHTq6qfLuoTkaFBLMzqKLT2BK4w",
  "key21": "3HY4o8xnwyz5vSgLwhXqatg4UcbEPZn4tcaoNLapquY5NjKjHNVAkmHwHTyLn2yus8LUu3M21dCRLaiYoWsYwMCc",
  "key22": "3aDnb4CbrP2GYLE7Qhk6VbLUVgPxur4AbaDFgn9BMs5DqF7xvXte4JNDK3hpLL1Q7c6i9Xk3vfZ7MB6fsTSSBjaX",
  "key23": "tZbmKHSdcwHv5pAdT649koHeAYRYKusHshkJQP5G7zrk51riej6ZXYbJptQZwQjBFVEeesUJfCigMWThQc6WzFS",
  "key24": "1G8Q6LgNmiHTmmipQB2ztKnPp7yxFDsfKHa4hjHik7rnZ3s3ZsPVKcYh3pzJzbjSuiWcM3YWTV9vZG2v5SfZ8so",
  "key25": "2xmUsJuBx4kHKn3TffQdaS9RYa6wirszjpZhrw6zai9H4nm6grecXxbtDDaaGTPaCm2QgGmU4C8sVB4PKUrKs89T",
  "key26": "4jK7urn74hrnzTUmiaPkkDoBGQL8TrFMLEQipmC6ijRC88pqyFnkR222v5Wgcs6jpEs5fCEAfazN1BUt4X2J6Nf7",
  "key27": "481aWUAQyGJ9b6YFcrcmZsPwbmvpx66QPdFP8YDrurho1Ye7dp7DzsBjT6tk4CvgAmC1gruXWkRmzGCkcnT7PLcD",
  "key28": "5pcPDBAanuZEGSU9gm6ZsaW6eRarVQJTvkxT7tmdKfyX8j2ULH3WKVSdu2jakJTcXV8dn4XWkk6Pz1mvMmFCCU51",
  "key29": "45uUszm3URT8NgCUfEqZKsGPVJtff3oYd9LtukuvMKRRqdVfkGm1a44SkvFNX4AvYn8wCSTA14pVsfYVRnULEYZT",
  "key30": "5Bt5QikM6WVLFqSqcS4f96g3qwXCQqLJF8Dus76YE6XDYSffwFCV9Wie5xBxN9ZmDKCZ8AVMeiGMYbRoTUURPLHB",
  "key31": "3RL1tMqRdWckQGkqZRchjLvpuuYuCCbwTjRpii8L7wT3YFZYbvo3fSDkVrGb4WSBiMbHCPLQeQMQQ4vr4Km9ZwU2",
  "key32": "4ZbPLutdAU32qu9r3a1UFiCD1pw54QTqachXYNTJ5iwmPNQppQ2kzPQ1avd1Gdt6pwF69yZDhKq8U4q2ikYLU8Ci",
  "key33": "5NpsWL4HzNDdSxXTh8z1N3gFJnSb33hcA9FCJUncvvMMkcDkaaWSx3o428AfXm9RvnnvNHQSEwCS4iTaVP24nr7i"
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
