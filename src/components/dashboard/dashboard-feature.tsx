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
    "36m6BepGhaKngnjdXbpJsW7FRW4APPneUMfnU8bQh6jqnVbgB3gtRHbZsn2e3dD6PsESR3nBxFKxnWVnB46bvCiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UxsgmDC95ktWLKoRZCdim3W3ogdNnKnSYVt7NdpKZR32N2au6kaJ9kk8CPS5hQw8YWNsNRssXE6W1T16qvxHrNZ",
  "key1": "2drAdFmvBQRb6SGMGtb1VGsPpWFzdYzJDCNe7ZHaef5FWFzCJtdTJkNstLFcYGhgti7BAoPsTQN442WPFfPujsXB",
  "key2": "5Xdjdxew9M6RwGYzgFvAwgV79RKuNuUhPeSyQvJyaUMFojuMF1jeRu96VrTkZvM2hxvTTDGutbyj7bZQZgGe3BAK",
  "key3": "4fDsuGEkZ1jT9vyoK6Tygs4NMcnQo2tCVuYdfoS5kYz328tgg26QT2ko1z2MSPQ9VnRTZ8n26vV7rs3jKgKv4PfS",
  "key4": "aSwLL6nDs6myHStF2naGqGofGXeuimfTAQhJ2NhuVceFzPvawYenijtTLbWs5Syb5gHzvrkksS8YzB9ftigjBnf",
  "key5": "4QU7uNCMzhxzB9xD6fR7eASALTB5N9aQVqD9Ntqx41UMAaa3m1ven1uCxdfUbNa2mujgVWtTwq6Z7eVTgLtDiAFX",
  "key6": "21PXc3PXXW3criMTbaAZo2KJqy8UmkHFnypsfwBbnMazoG5LMQ3sGcj7eipDaNCmgksWCJFMxwGj4poRtrxC7qsR",
  "key7": "4aN7Eatfcnq77r4KApPb52kQJDtPbkvEks2M6x279Lma6gPWcuezCunsEGMXhodQtRt8WR6XR2i3Q689G5ZfPJzN",
  "key8": "48Q5ZQUXcbg8e8oZf26QGw8vPQUdKA6JLEj47dtBtY7p7cgXNzfcs46r24yvWnLcmh84nQu38Kik9qbWp6fiwWgL",
  "key9": "4eFJsUc3zKVoAXBATV6SHzq2uqJmsSbVs1gsgGSvjXd99qFhaV1Uj2QWaNYYpM6h3LwNT4w8YFMA7DpBRRB6fwy",
  "key10": "25ipm3UJ2ZsnrLt3B7KucnGbFhLKkogsg2sC8QnXk7iwpVh848jpd7L8LvMakad3Ga2MmGWMiffNe7a9LvtED2Lh",
  "key11": "5ikJ3o7Z3mhap3V8iKqTGAiwTFcF6n6CzVB95nuDWbd5NTfNbXsmoqcjfnMj5RBstz1uiZpeXCZSsGmVsanist95",
  "key12": "2uugksFb2diGss4xrAPBThWXBQX9gJzFjoz4qkcuWrzC3F4RsbycWPsUzTbS2kqpbvEG2sVxAvqeMEoRiEYCFixN",
  "key13": "8WHb4tz9NiaCdQYKQyPCRCNcpBuN42jdDn5ELvtPLn8BKUtZeiAjU2PKZHuncLcQiaY2kMmgsQbFTkXqcsg8ujj",
  "key14": "b92Xxgf3FfwauxsFgxtMFKcLFfXUncPbAFCw767xT8oaMHY9HGaeHekeFjx566p9XLivz8AMTrqjVDXXN8Mb8LH",
  "key15": "3zkzzXkyDp8ASgsrSuvRgkdvut3xAzJWrRjLvKyoMdyhyzBZiV1sV2vfEeEPg6oHdpiitBfg9ksSB4RxkBMq8Kdb",
  "key16": "4qdBjGQFPMr9mgs9YavpphEYGowW7DE7HaMR33kggWWHSfzZzkEKnhfULQpyJtQwhHDkQX6iNe9MEJF2VjdcN9Kq",
  "key17": "4coNZfGYmUaZDaASwGX7YMXGpyqSqtq6qK2omiiNXQfWUar7YfZz53EcWbisgPUg8vXkBCtddmLKdcSoWuBYy3kC",
  "key18": "2ArVTJNMcDqmADgmoyRELaj14FXgFtsXjJtyw1hsWgdBRsMbtqttVhjHDG1SpFbnjdhaJ4ksky9rdcxLaL35mSFQ",
  "key19": "5CfekJL1e2smss1hsststwQAzme54CmP48WanbnUMD5q3fmhjhtufpoJxksGNiT3gV2Dtvshsb6e9SRyV7dUxTtN",
  "key20": "3FgPwVjP3g59QS5rgAToVx9HVvij1d53vQRLTJU5eipV3gZWQizTcYcJ4f4ng2TCCqXqNwf8nJNHmvN6dXNmWJnL",
  "key21": "54NJCYb57SaeCM1QnZxfvLm7DSYGcie37VwPgUWGExPPvG3buTjJ7VyxtUGB5ookdPSiaYnieg6Jgq4Lyi8SwR9q",
  "key22": "4cpWXARV2mbSKVaiwAe2P2nFWszyj3drDKcoA2xsQ6fKidvSTnivsYy79q7SXVqFwtArWA2s9sE5BbRq4kt4Kigk",
  "key23": "mXz5vUgbb2winge5Uy4PcYKdQNGyArBxUycR2dFP2LLZL2mBuSgUcEETyK2WWeko24ojU7rrr11HVvzxJCM8Wn6",
  "key24": "2VCgd7orE8ZG7GF9JB9R3JU9Y3Dk6P6unYx3PQ7Czap9UoK72kswxZbqsuX8KP6MunahTtw8eekvRrUJGVc6Zp85",
  "key25": "4aXE7tZ6UfnnL5J4ChhqVya7bb9q4ogcQwRC7hXwVn8VN9HEMmT7xTakDhxAjH597TbRySymEtTYHxTkXNrDSnL8",
  "key26": "5RVQdH5cJgcrFnbY5bStD78aQ6VZterDTNt7176wMYXJc3GQmtNgxq4dyPjqQ1oqEEP4zvHg2WDG28VJTnSga2o9",
  "key27": "2Y2R8BHjB5FjwxXGyUVUHV9Ur49qZn8MazeJc2ZXovsm7PYakuUbZvqfe57b3uGiV3e7eSda6krYjfKWmntfRRF8",
  "key28": "4nNai4hnHXdFf3CKSA7cYirjqHejTUDCNnwqftLRwyYCbXVPjCTXHyX3cgfQxsEwxJKx4wk7Lqfpe7uAQw9TYDMa",
  "key29": "5J2hcpkKrHf9ds4KouVuSeqC1CgsoXEjWFVYbS2udeBSErN6AiobFdz9w6MuGyoFUNzvKmLhzM51dCV5f3H4dWPv",
  "key30": "wn4UxJUGhXtHZ1ks8rrxGuGCou1CMEy8Mk9rrkA8ZM5Rj3Q23LKXxP2pQmcPv2qVYTDcjBUEjNhckdTY8MZUQzt",
  "key31": "5uMP9UXuPvg1BnvR6fieTiGM1g5mRrpBz9fB1QH3hiNjWz8KExYc3K1y6xyG2apAQsdiXVqpyMZE6eVvYQACk6MU"
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
