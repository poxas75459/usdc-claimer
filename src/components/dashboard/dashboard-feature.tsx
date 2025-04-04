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
    "5d698cNbHtFnXdqZTGsiiJcYt5phw5iZypxQYVRTAHVxUMN1EccQ2YS7aKZdDYDqr9NAynwp23PDumVZfovg4bDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44YRojK9jAxAxPwC4FMbtXHfCJ5eN3kHLxuyYXGD6sCeSbqSHbQsnG6yBYnYhSz5ANsMFLbSwYWKwV2uCCQXaqs7",
  "key1": "3JKbgpoJhkG11L9A9QihRXmdQ1ZGykBZquoJxBQLd4i4KoPGF396TkVNUv9wPiLMGuEPsyoohurvpGV4AbymMjFp",
  "key2": "29FMW6nsBrgWJicpd5uB3pCJ5n5wjKkpYVEyA2F36KPoRjLaw7gb7AzeLfDHwLFxJHxVQE7MwbuHda9ASivJYCwX",
  "key3": "37Kqu6W92VLAvPcoAuPbNUHQZKDrxDHFPAD9289duLmE5NZ4zZfEQ2QTpudTtmwioJaXyRfrQ3d3Mk8gU9gmsS26",
  "key4": "ZfBTxe2cRsy9WLNVbGydNbY4GqwXknghuQP9Z6x8NavH81iBK9j6r35K5vEeSSB9tzf5dsyq7vjKNsSeXPwMHYc",
  "key5": "2KGmp5XU3E5D8hSGXDHWUk2uTdYzd2sb2d2ubGq53SzKA88ZkBejDeWucUM1xSpMFQZHjX8SuN12UuUszKDZVcDP",
  "key6": "32gezegjNxYPHpnKdpKrroMCCfhac1q1WKdz7ocCFHj7HPJNM3YLdKfxiPQABwsmyNZPEjyhAspe8KYJybDykG6L",
  "key7": "ee7rjH5QDJUtNQGeRjzkimr7WSkezXiP7KY1wyttYmzET8GR51NVVNHNHeoRKAZPttvW6WjKejNzUm8RBDmpefm",
  "key8": "CAc55RFLXfinZQFDZ5W93N2hSEo2tNLCbwxsa62qqszEU5hUr42jGgXGuTsRkVRKwTSKMvMA2NE6pGqpWyR9P4E",
  "key9": "3kLSV4qCVt4W88bG5ESJDsnaCjfRHNwPWa2AXjJfepEe5CsCyiEDGiG6syPawX5WL1BbZNr6QR15g4auZJecjmML",
  "key10": "3TTJprco3fRVy5XgvdMftW8AaAFvd6mLWUrqxqS6kfC14fsmnNu68x7GBHSGNQGSAZnxnn4a2rZfFaKe3qy5hiUB",
  "key11": "5Cq1MJk2QoB7vC1ymua2fs7TvAa2Mnw8tz1Gin1k47zoiEdyuxQzAPDRzbbHXMpazT3AfS8NTkZin6cNYXUXqF9W",
  "key12": "5mWzowjgchAWkGk7eDML24zcb7BzpoFszBz2Vb2sD5YBHqvZ3rqJ9cbQ1PBp35bUyFnAY5mdpzEtHmYqyuMmffqk",
  "key13": "XiSttgyWadeDFX5EMjoB5nUXeZzwXN8kD3T4uaExfM2A7vjvR1hZYxLsbLFMzQiDZQTvFXhyVRzU6zio6dtvibH",
  "key14": "2eHDGewhX2eKnFFaDe1mVtNAfNWWz49fHi7J5rZCtdKdUggyx1g6Qu1tz2tPfom4GDaVRnZB841Z714QznYqkVQk",
  "key15": "5SXMeLM8jfNi3c5H4259NHgXbhXqKHWdn27ZMtqjkdAhnuyybYjaGv5rc13DNXA4P4MxGWeYfHJNzJiCTmmqgmUm",
  "key16": "37FRTAUjSRG1j4FvCmMEWqXaDbJBMnGzCMjE4u4rSb2X54tNoJcKE4RvRvxLHjkQBgdx1w8SVDmT5HSgDmb6kcGy",
  "key17": "H8F16rf3KL8LwMPpu6epBM7Wn9tzjyAvkqWFxJSoyhscXAAsaM6yDQHizGNzRAZH6uyU2A894xyk1iirorfVecR",
  "key18": "drppNvLd4iNh6MFors37ajQMpXc2VSm1tBkYH1TQJ1DerM1TrsRk8VrF5iPkPeCmFtRURF4Gmo6Rh5DzwPgf6Jg",
  "key19": "5JgodJA6hEXSKN3y3bJGD8h3hmZY5eWESCJUQEU45gnrK42vcBBSF6mTNmjC23CHadaXB4zkyz4oBG4WVQsWq7s8",
  "key20": "4L234Y2LwJDAs5ZGxRQo6BY6XY9i4cCLaqwWagawnLpF6qZXhfyh7gYTusWFjAf7WVhEkYbuQfAQyDUsu6Xu5JuM",
  "key21": "2YFEyvrpeqZWjCdcxEuWSd5x5TRGkgGDBhW5xuQn2Xx6jw63nEMpyx8RdcJXiGR2sbxAmoNeQgupA1cfqCpgJqyN",
  "key22": "41BQK5Z4g7W5KgURnE9sVVGqCgF7R8ahLfAYfC5WjxW3B85Ewx1uQi5XrcZ9fTRNNtZQXHuzpbpYoTzZCmnjBtq1",
  "key23": "5oN3A8QUCiRtkgsUmoWVYeGJEq5iBudWPimZHHETC4MoVAHxoB8D1JFWqzx1kzF3ch1Wo8xLitnHv9oj8wT4eabt",
  "key24": "2UsjFM9XLqaY7KkxdtPx7g8Fi3wsJkYas9es67bYfviEJzuMLRPFKR9N4Hve3UFE14iShnSyLcbsU1Zsx9JpoGZL",
  "key25": "uajiykEkDNmuUsEbx7TpDp7A8dmvBAjf2sHxCJUfdL1NEnLj6VahZAasSJdLpsmakoq3SXBLAkJ7xTaPUm5Z96D",
  "key26": "5G9ecnHAVjARXL7WLWhrxag6UvJH4ronDpPQX9xEAvXtpqvNhE2G4XRLBs2eGhjkNqiNVqLXVHfW7xsq9GiK11eP",
  "key27": "4WPZceNLKHLNPwvtpNZBVicxUTrDQnBnqAo4LJMoL8TZsQy9ceKLwoejC1rgxk1hUYSy2iLUvgztMvGeo7xMBWiS",
  "key28": "5bVJtwujpYHoqBP2RJa4svfjDjfYEKQ4SLcFk9WpmUFya48putDvjHcUuVzsq2fUhJdpe2aS8vvKfKxbuUPs5Yjb",
  "key29": "5avJ3TPXbUHJAPxRsQBxLCD6zuurqGtj6LrTyjtEE7VPReoFGrFXuJwpwHtqVL2nUbFYrJFqxr3A9pjAAv6nK12w",
  "key30": "5d3f6comnAX8Muk5GFJjJbD7Tr9LcpTt4gRqDMMh8s5ei6oV6XTVQwAprpv3RHywg4oDmRxMju2UPSKqxBhiCTQ8",
  "key31": "42CxRbZznWUJuHe6ieoVEjkNfhWTntDpA4JA5Xn5AXDxdsfWtZg8ZqvQgFfVKYyjxGxShQAdqsFuDgAFQ8caRWm1",
  "key32": "3gnNPP52frnEHAF2BHJc11uVWHaiEeHcF3y5M6Q6bzKDdbUTrNJ8uu72rQV8yjY3ZWv4kRNf8sWJPQQJJgsJ4KV5",
  "key33": "3zaUaLCYZcCySWBDJxz6vVtkGWBU8B5UcjTvTMjaNRw3ojc66b23Wf9LmEwZyTTzieksC4TjZijvPqS6TXF2xM5W",
  "key34": "z5j2GrAus8MUDKixNjqEuU6LmWyHyM241bF5Aq7BUCk3VaRWqr533HCiLNREoTXd4qqAuuYcDChHxw5ENaGWLTM",
  "key35": "5zxdc2frZKdUGTGA8VucHR1heFzTQD9qhR9j2dbw1s82NdhaNHeGqpmiQaVntnEo9jWUe41kgzMg5YTHotE74sjC",
  "key36": "5LRNXskJa2GZhKoFKC8LJo2AMmJsvaxeuZYLfcQtTyBrANgDhivs9qaxBdaFcytyGjfzH426w5b1sZLLJTvSyApT",
  "key37": "4Xmzc5276E7hf4eGynchC5gX7vx8Q8tvzvE65EzDVCqcTmWos9TAfSAC5kFbHS3nzg7t3ztqjkQRDGkfaQiQdjkL"
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
