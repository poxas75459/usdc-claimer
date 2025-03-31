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
    "NvcWpy1eyvjJDtjexH1qLnQKP6FZnjeRohggicPk6zV1imuQdgGW6MDmDVvDPgNPHzeUgdHWApWx2TZCwgu2C1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L4YktUYf6UEaqLcRzitwibpmgSYDffp4gDdCE2UtCQmmvkpprCqjeoFwJEbUwMTrKBkUccu4KAPv9JM5hA1SvCv",
  "key1": "4pjg4y9WC8dDwAxXUFbio3shseRGHGKcnVCVqWWnFtS8cqkRpE9DgwukWox8P478PAra4rvpq19L7AbUuDrHK4nR",
  "key2": "55N2RpC7bNx58Koi6GhVkcw2PYiCvxkfcRjJMD5ntBM11EgSDaBDa4sYVnEJLnCZZf1s3B1Tkf2RWzkURseUrrUd",
  "key3": "2eBkwCXBZrtBv5UcbYdfJri3JCmLDkhaJQADdiMtZ6WkU4VHD2eFq9yvZcQzCJ8rkfEaa3WnNyffSgyXqTSwqzHf",
  "key4": "jkyb4ZMp3fAB5G5GGvAgWmcT5B4t7KmrqgqNwdurqkn56o2iGRw69UpbM9Yk3P949LKQkH7LMZJGzBQz7BTDLcb",
  "key5": "53CkQJvjaVWiEehqYeSzp3Sf61Ao7DA6kyF8XFZnZG3oByRMSYuTuzSiskfCe2zsSvZvLZp8HuZZTvtGPK63k72Q",
  "key6": "3tw84cYsEmc4QQ3EeQBitz7mZPHkcNQdnHTn7EWBD6bz6BsgF8S5utDFT66Eefydxe56GHU2BwCo8hV9ZRdERut4",
  "key7": "5vsAyzgMWs5MyG9UXaEA76XBAPrU5Z9kCMtKqmuekoVEVNs3LtYXMDDDXaUtbgPdMLVDeyQ6REY2BWdhmPr45ov5",
  "key8": "5ihA9n84jZSt8mwcnzagsc8qJQA98zuZdX4sw621GF39XbDreX1J6UEjkJVQgHdwQNX4iUAipztMujcx7f8Rpou4",
  "key9": "3URK9RFkK1iD4RDTjsnaepucJTqgnpR7WT8bB1aoAGasLdPpZRPWDRtZcCUMctVQvbTwPUv8BgMcUqPD5PLP6UPk",
  "key10": "2a8fFRHRudSta4tYB9caMDua1UKHgPWjZQ6aQUmwPpLRZGUXmUPfscZ4wZg4mQWXpCKQgUYcXsSGj3mkMbPsHB9k",
  "key11": "1TGACePd2bpbF3YSXJFB9Y8XySTE1rhxCwxqaRH9AnCMhwpgZ6mg6KmGJWzmv7jUpZ6avEpsDE1pSo1b4pWd55H",
  "key12": "3m6H4L4UaDCPbNb9xoJ4pqVk7Jt4eviTG7evJs8YHHiRTBo8MUFRzWGKLtjFRhLBcTecLjfkJ7k2Xj8cX3GpqH9x",
  "key13": "3JekoGfD3zLhJauAK9R9nrKvqv8xx8wU8xH7vsb2sxsH4G6t6jK9WdS4SgYQjUjMo9AhdNN2QApRzrhBvrKmrTqX",
  "key14": "5eqieNrTUfjdRoQjXeMVwkYACizXutJZwE4TLSp7RLUVTVLu9RZXeMptjGHc6hrYs218A5f98qTBxSFngKiKPHGw",
  "key15": "4htFCZXzobSgnboyrT63AWXbPXjRuPCUgSgznWwM9GzaCkhyg39EP321kszR3k9bj1766reMLkNzZSugsk172izD",
  "key16": "3UBNDBEZNeLXzyfR7H1qnoT2B9Dx7VfkP1R5VDkufDv6L4oV2nEiuJuC46DVHWun1eKQP6gchpSUEmeMBqkG4773",
  "key17": "injU8JYR88iP2kZQDXGkRm2f7bnGRVfufekzsGtzM8SupHCrX89PgEPZzu33M1Lt5FiSRzNY7dphMAQa7xd4YeJ",
  "key18": "59m1BKGW8KuQaM72mtWZQpu72WTi4sRWbb17paYBvnSKtKXvfW7rQFt7q3okyVnBW5euLSVMdnUChu5nvGJGYgJb",
  "key19": "3ihYcv35h4yQe15aekHQi7wi9GtJJjoh8jRoF4Y2hzaVLqW7ABjG1NTQgoYJJxkJ12aNVW59JGBBx3WrZZvRS2aU",
  "key20": "5wj1K2sU4Vk8Z51bB3dNue191h3jdt9XsrEGHazhywUfKcvN6SoXcUx3XeLDrk1WDjThQ1bZLGhotkUr56Z1r7YR",
  "key21": "2MufRhqcivqPF2LayGyXVin3eUaU7GdxhfVepAU6ja4ZmW1gLHtniapWyVqnnuKCN6d7hFW8HPQPbJm82gH5CqAA",
  "key22": "3BpLaB4caLp4mMWXH5J5CdbDrhLaAtgH58Wiiubb6xFvYcsvjmGBeNmFwzi1kGK9HhXsNM7zJYRUywKi2nfa9DrC",
  "key23": "34ofhaSm6eVkAiDpy8igjEkxXfAhXWCSEvRKG8JHpZ3FkqaMjVktExbUxEGrtcb7zzp8veLGK1YnHLnbGS6wBDyQ",
  "key24": "32DiNXaDD5j62NdMDkj1VbVQmAmc6eana7Ea17bENHRNNjsnDjaCapoQBuNRSGo1poygnRct6MY3aLfT3xNQWdv7",
  "key25": "iicUA5vcit3P5qUNVdL7JPLmDof9QuBDi5KtiScqjzKqdjE4bMWA1BYvjrEE5vC5pMYWMgtJrForkst5b7kNPgy",
  "key26": "yZWffQ8GGTEcre8j77KP1WEG9VKhpemV3DUeawZU4kjheT7oGDCLQPFL7Kg5McLJ34j2f8hKD83pFKsN6XyM5X5",
  "key27": "5sPjPALhJtKXknZEiLHwCgfqZTgTBgMa77U1vPEa9TFpxMxo8BVNvAg8VfwwGvjw5QDAYXtJJ2nDU9b3REmS3eZ9",
  "key28": "5XDttVt6QxUMcdn9CdFdguBrBM9hsyZ5BKTk3QDoKrRfHR4KnYDRr1EAXH3T8Q8z3CEL5S53pm36kNmAms7Ur7sW",
  "key29": "waR8Dr4ai8CRS1P5vAZJgALvt7bWWxvgBC39M281epmLfpmpAtgiXA5JFA3GodNxxkZQEsd1gwUvF16afz9h2uv",
  "key30": "4kFsdPXqDoEPLEvCmNYq4qa2xprbCgeHGoNM9yHd8rRHAoTAbRZpTi1JuqrHCXxDp9V74mr5w6XaeS777gBqceTH",
  "key31": "3x5ZPhsAwkveKtMVpss9UyYCf2Z6NxG8eR1sm7znP52cCuTxdZy4YdLNxLA3KjJHpui2CiFntS4uz4nUYoRGGWVh",
  "key32": "5rmSVpSYBqpXpmbRmT4eBLeNwYrSrmEhyEL1z45PafdNMS5Pq9BNfhWwMXAJbx7emFQ6wLgXzN2JMpGHTBGSrmR5",
  "key33": "436HkAHokkGt8YPZ2Esb8vfK3ucxN8hbULiPAcncVPCTwb4HTnXsitjCsPwMJYbG4oAWKKGjcW2QrmsT4rVovZ68",
  "key34": "8FJYQKXUNWkF7gtLtCb9Vj4TvVjgyTjyC5XjBhSoBao4k7anCKdnXdDvszvHmwexsZANVPvquWDmMjNVZYfqGZn",
  "key35": "aBY7fGYHn372E8J1P8FzrkAddCtEke4pWmqsCNinH2hjqgvknkxsJvMUjDkY2vxS9qJxnGHG8AMoTSQcsjAoevq"
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
