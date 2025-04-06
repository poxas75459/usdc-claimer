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
    "5k7Jn6p8v2wYskZdAsC53GR1uaJGVE7bnUuacPYAFtrXytjoqSKEWDYPaWPbLudotxKowkG2whbZsAofcoFzjxgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MMfPyHDMSawqX52qb1XSUE95KMDBGXaUH5qZuQkKZp7Sm6h1hoJcBiysvWHwtxUhbEtSkpfjCqZEyM4T4CSiVBQ",
  "key1": "3hegapymBLmPsrWQ59yNXkPv2h78YjLHignHYFuhpDuqfzYyJgxgHvGqsgiMutEvyXoBscxnondRQ7D6oFveJKwa",
  "key2": "4HezX2tjqihMXnehY2TKAyo4h1DA5yBFnTTAyDLpjRPo2ZQcBWjN7EkDUib2c3fSgyRPjPw78wRGHU5qSn4asNM8",
  "key3": "479rHH1XwCDf3qHQwwsTNfsa929ReMdBKWFemTJJ2SsiyqJhs6znEpxAAQ8D3MgxrRaGu8m36qyvkxu2uL5dcAg8",
  "key4": "5SDN3CkWzS92LeSyeKWbyf2TDXLpE4SHbzqT72DyCHQJ2BfLvyxSDwSfXYoHkkxSUQgpMc23C457Ar8EpaKiEzsz",
  "key5": "5gJbsRrmye2nqSfj84juiMxsxQLQwa9nvv2DFtz39WEqeYDwamytwLN1MYSAmEu5VpQUYxYsjHxVrMnj2gJjrXTP",
  "key6": "21FfsCeAEQ5UYuyBdLu7SVTbRUNqjYTJo4Sggk45i7v1tz7AWJVJWWjHFcz92ykinmnJWodKRUGPW1WStnoSqhmg",
  "key7": "3gDmAbWYEUGuPWkXVoHdfVBb4QUEB5opg2h3wkJLHqfXfRj9SEPHNg5xa6MzmYDuxiXtXDUgMpiAiszeGCinqfAW",
  "key8": "51k94tvCxesGKcZ8iX3zMnfcRzdfjRJW1b1tcpgV2PfviWjkru98FJPnkWCErLCY8xc7peZ8NxnPSrzjH97ndcG7",
  "key9": "n9nmk7zWpsk17EdA63sL3mhHvogk352oKAMaop64tErfGuidKiJrNNdGm8PK7VC1sLNRiqJjyFg8M6iX56VWEA8",
  "key10": "4FTtbkYmGwTmKmkrQMND9ykLry29Hoe7wShmoBAiqYc7tTDEGgLyp45BpYADvdPafQ6MuK9cseGJt9iim49WmY6K",
  "key11": "4DRPEixEqjSEfpnQUN33mW2BRsGCmfXx7tEKsGVb6MGSQL7wvwK6D9i45sGbU6Jky2UZNkcyNoJL577GWFS4RrWK",
  "key12": "4G34yNZ1GxgAkXprxS5Ux6Co18q9zgZ81D7WJ8kRuUrqSMxjJyCGR6gVSBwmVC2U7kvV1GHTiRXpptUFQoFrEdhT",
  "key13": "5YNzoiJVHKtDekTn7F9VmRNz6zTFaDR15F5tfyRGLSzGvHo4upDiB87SSUCT8pXB8dWnuHENfWRYHe1pTDoEx8cw",
  "key14": "5QytS4kZJx1rCjC2U6maJ8pNf8FynTfnwpXswZGNhb8gankmLzzLTTFzvvoqCw2eydXM2Zv7vzCto8kHzx1QCVih",
  "key15": "5ZU1hfiA7Ns8Qu9EnVp2b1yyov4VGiLdZZzdcN9eSq9VqmfPd7QtUME8VLfR9fVYzRAtNpwptgUCokQmJjAaS914",
  "key16": "3iKAPtbjbXpcf8r9egwtzYavaV647sUERtJ6xYkZb4ZcdcWu578JXvCSfEbYTnozbSnUUATFfZV81pB3N3jimp68",
  "key17": "3XArLH8dcnC5SamEGuZmwijKyiHrsSMbzzcrcxuURDNkbv96mZazjdnSkqtNXbHrmNYkAR5G7LAstBCvzacSH7qJ",
  "key18": "4Cq8T2wJgVt3K2UqrRX3fCiwUdKANud11KJHWsKhf755R3AVRtbNiJ3LufzcAXZNbeKUdBfvKjmcKM3ANtiy2Eqn",
  "key19": "5Msz6F9eS5FxLjonNV623AUBK8Few5KGMwFqjXam6mJxPCjcdehh2jTMVV3vmWUPz1SNnbVkTNWouoNApVQJG9Bp",
  "key20": "4GwfZzZERftYyaFTwzH9sGKTzPCrVZBfL1X5PRLFjaifFJ5xdqK71iC1cyU8Ny2trqkT9CZgRRzKpjfgy43DLu1r",
  "key21": "4V1TVjNFhKdARkRY4uQXYhBQop5YukMt4CzZeMeEp6HstQ94XZdtMvPSjeR4ZyrkUcsZXoed1n1PZw9utZnaq9Ux",
  "key22": "5vSU1zqSmmo38KoZV5k2hQsQ6Fau2G3K6xRzHLbyPDaTZjKQYiDsVqHZJ3mUY8c9smR1YiWXjrBhoxkTz3hRz9fU",
  "key23": "3yqNKMHkBeREpNGk2c7rS8ctnnXMMetYigunyE4MPetL9V1oBjvDhpLcsJiJGKq2M5P8R189wsxTDye6jLzrFWqb",
  "key24": "5EJ3c9xLAbqvBPA7PTZBSr7jrzrtwn9sJY7N6VAXdGLnpJwj9pXqvD8wVmfk8bUBnRi8YDSCMnsFjqkwLfCgE8du",
  "key25": "XhyaMF5g4na7rnCdjfyYa7ShGoZro34UxXWBVuuPdjV9ZA8uwJGBWhR6VSsrrWarE1uJfAGXTxLAc8GdUU4jcki",
  "key26": "2jt2jbkzM9GDvqzqbHsKVj61hwnBLw9HZ6kjth5VT9ogc1jjjsw499nsMQRjrwVVc5ihKH355rNHuP8WszsKCbCu",
  "key27": "tCy54hn5hUEuUv5d2BykdWGgfvd4xcRauVqmYAgj8tyAMrpUtgFGg9TCuAWw3LhowSvCemeEMd1snBXuoDat8fk",
  "key28": "ZNHoDPxSzGnvhBpyR7rZeReXsoR4DuyeaAqXqkgDCv21ygdPBBMRFFWwGhM2tbVhdeighakSpHUE4rDSsaya6pi",
  "key29": "3FnECKAFRKyS9tBTWJihFdZSsqTqXj2fsDmgBbikjp4bbrHwYaVarmQL2TfbHJDNF1aScTnPS13hvZCP821ETzGH",
  "key30": "2zpTgZuF6o8EgJX7a5GqQrgaHrbSp9zTwRvXMbHVgZuBuGW2fNwLQDPruVEGVxrLRCR8qAoe7sZMgU6GiCZZz2SX",
  "key31": "55DeZ2peoZ8RTknXxTX9zqNN99gRN9rEw1icLyf6sjbGAkNSGzjmBpqiLHkTuakaHhC68VbSbzppBFrJihxyRmsg",
  "key32": "5W3kESsndZS4PcQZD3eiR7RMucmSoEhwQ949K9kEYSzdMAeSxeDWqzU6ahfaDkSXb2uMZ7P1755S4sRPdjLcxc4t",
  "key33": "3Tm9dghkv9UFZaZyanL9mKVz9H9FKMHGaAbyRE9XrMmnqxUHDH43Dp4mkiWgBx1ypkndyuU2TLenmErNh7jwaaAf",
  "key34": "3bvZ6eiHgbxC7jkpNHnZXJRFmHLX94cxYPrDf2D4Zhi6V5JHYWzqRDwSXzZvdKVAYxSMRTHLko6K9CsUdn8BsVcP",
  "key35": "3GvRf1mTg1aQcMhZcFqbuxrvXXnGikRVH35HzZSrftMxd5S1uB9H8pJvXyHRCzDHvQeUGFx6FVeF3Nq9AnNR96qp"
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
