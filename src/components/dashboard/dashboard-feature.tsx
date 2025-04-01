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
    "8B6ZkYVs5Z74a1Z4QDUyNAvpLAhdqC4nFSVAFM3UqgtBKUgSaYKo8kf8HNX7Shc66PH7BG4HBnC2EdpCxjoyGgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43VQuiM4Z4HXqvR6rNgn3iaUQ4GSbzLDyc4h55QkyHiQSbBrQ4DzQsWrgR28YXEafGWEPLZkkogWxmxTrt5hqKVT",
  "key1": "YzDuBM2qWvS6CU7bFV71cNGo5NmVjf4zaaHjgjmFv3QKyPYvGuNe3JoyEo25e2KFLfsW21VxwhiumQGwvGvsUs6",
  "key2": "4rKmGMurEBxzAEjDzwXswe8uY2eYBG9Xqvr8uHrNLgakJRhuNv7M63U4hFC1s6uPRPhg8nWkZJj3HUx7bAYDdpmT",
  "key3": "jedXtMJURBPmEvQdXAqLmAu9TGBQWSdH7rhMEuMfDey7qrvSLvwD1xNwS1evHGNcpsMycX51wdcUkQxDLhtV2Kp",
  "key4": "3rmMhNSzVmvEN4CJLh9wmR6izhC4xNbvtAeCFwhFESmwsai79EW1WEP54FVLK7MAH5zjpQ7SprQy9ShkkKzavFqF",
  "key5": "3hLbTds1XtS3gcvdscbepcAz53JS5aK9uc6cYiJ433QtnnsPHUYCmPU2vbMDeWmXpPwBauLAAE5qwdTNiaysFDNL",
  "key6": "4dvnK5XzNzJFJFPZkUGA57j4fELL6T1XqTtbq2t5czgbGfSw1H8VvRWyyrSoNye9fpjYdZcdimDzwevMLdK2NeJg",
  "key7": "3GZHb7sbR2NW6TisvzfUCW1C7G8DfBMWxRg7DaHzautszrfU2JsuRLnkcSt8rkPVS9nB2J6EF1SojuuTi7dBGqQk",
  "key8": "2qkirHtDbH8Ci5PxgJViZczBsp6Wud5QbVSzxxLocLg12PxKJgcXj1Hy4JEm8wdeFqjz9TP3a86ELrmL1nu3LfrN",
  "key9": "2th2i1tWJJGQgQQArN5uknKWDqzpQYuJw8tFW8osB7HCnTQqsg1eJxNcJ5X7nWtHuL1auBkS335mvSuJx5ZjiUap",
  "key10": "Ypoe8QKuCNM6eMKK1H4tunPFtz8ybDiZcz3h23N9SWMz8nXtPiUvoedXeLf1r8wDpvRY5DUpZZXpMEjf25CZ32A",
  "key11": "28jo3tQwQCzCGy8eqquQBy6adoaqJvLHNxvmotg13f3vT6hU7ec7emDBjiPuiQnxAQaqm1KyYJmRiKi2B9d9tCeD",
  "key12": "4vHb4w6Ke7WAcxm3YA84JQsKKS33hvXiC9t65Y8F6Kee6fRBtqqersfQQuRUV4EcUHrbAVteka34t396eFZtoNfH",
  "key13": "ef336aJ2b7RM5vnzFoJtKFgwhF19kbE1cnkWqzmXwsjx5UrCTw4Xi2SSo9EwQ1vboa23rXURp6oPHmLsTfdYGB7",
  "key14": "2BocPoP6Sz3PZP35WoZ1h2T6FftWvjh3jUxSAv8dgFtS8FQKetmU9ozXVsXp67qETeE78S7seXbrgjj7haYt9Qru",
  "key15": "3Ay5fpJVvCyZ4ohMbWrjAMeHUm9FTZYnWEVYjznoX4XtC8pmw53znibt4va6P9bx6iQdhUa1AykXqvy3gRn3xNbP",
  "key16": "6SaNtKr4g4R2sThdosR5D8QYGryaxBjFFGbb64BJKh7gTGr2MMj6Y38mFp98FNeknCer5B5kvPkXSkumoLywwJt",
  "key17": "3CH4BtHgcQJ86xP7AM9FYhieKgdzJFKzhuKArdGBBVXBtWrKYYHNgGX6HKhddK1eM9hEJXxxQLrgqF52GYMu3Fi",
  "key18": "2rc1U328pYChfvz8tZgn6CD12hZav19uESnRzJd2htggnavF5V6S5RnanXWK8Fiyy5xkL917BeDQ2mJdhY936TLW",
  "key19": "3arGLXctzro74cnrX6KH3E42hNCoHTzB3TCJ94q7nCC8MCs3hz8q6VZ61DqPDxSUbpJMGhtvA6FXZNzpHJALRgTM",
  "key20": "3A5PzMQjCNcigRjYiScy93KmCgiivu447gb1vqYSdoFRsfUWtMmTJuCLvjGa9pSMszPsQVaGoULD45UopuyHXpoh",
  "key21": "3Ayhw67t1EC6BEHs19DNAYvzShb3JW8RKHXJWSyyUKkNdj7UDpWbcQQfvMPHSjRt8VkZAtggbXRvMw3vk6FW2EwV",
  "key22": "5AW6T8LqVnt6Wjjd892AN7f7N18WVU5DR5KFMCRJbA2dfqkc1vke1ps15yqYW6dzRAXNcZDYRnqZMKmErNhn7tt6",
  "key23": "642Y1St4PAwJiZgFaTerBrUvRDrQX76HPUgzPTC87ZUT5bDEgYmHMTMqhyBLBizrQ6wZGdsaqUGKCs7WdKetHj1o",
  "key24": "2UdBMuEP49Y82wWfcpMxxH1L9M2WxJWeMEejLVJsgfqNXKxCtHb2qyqAX7SEZkvwU44Z4UygGGmwZYdMFdxpPje8",
  "key25": "4RFea3ZumMoH4fUV6AFNRBL7YumJQ5rV9ATLHbEM5p1GZwaSCQg87GVAGnKAr5dKpJ8g9LxGKS8KQ5goEmHHWzmn"
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
