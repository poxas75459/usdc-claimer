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
    "5FGeGm711w1ce7V7ZaEdBextiMFxU2sue1Ks73LevoEz4ihufX6cD8i49a49nsewW8bc8PirKqvFLkzxpqfaWdJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39AdzR6twKrTNxXLVBGMj9FwBwMg8rXwNScePigofH4S9nu7t1L2wcjfvXbCxqES5h4pkfVhXH3oZoRa5HR4JgZa",
  "key1": "25gjPoJfPwU9y1NcRiMKKcf41F8CyciAn7ZqmBE1YYywLD8qUCGjcs2inbfC8gfrmA95huJVZBnp55WFkMnMba7P",
  "key2": "4Wi45rnuGBQB4eWybrFgmPMcSx6aYfTXQj8iFVrbXNzyUYe8tAmNZHEt1Htymo8RCRHrB3Jzp4wj6WiLuDi3R5zg",
  "key3": "339kseJLBpuNgY5sXFh51YFLjSamMi6ahqfWZmYSPAUdLBHzX6tJaavhcV9b424gMJpf5czn2XaMMfaqX5eJhSt9",
  "key4": "4Pff7JVnuFid9JLC7QL3apSzdKctVQg6DJnfXstcLs2beSih4DvBS4Az7418YzSzmcKzXCLDuWFB4omRBqTZ7ZXY",
  "key5": "5gjuBexTs43DsHEeAfTv8epfe4pB8qnvPxcKwNUdo81y3DNPzN1JhuZaWtxwfgZU6zZWELxDRxo6Bh1iWt26AVuJ",
  "key6": "42j96sMgMd5bCa3ubkhYeftBMP7BT1UPdbpUcp49g6BtrJd7xXnjih7UCjvabN1Kqhc2WCXqKM9aqsMvqRfWxz5x",
  "key7": "EN4yrKmpUWHZqJ8WAvgDnrj57RYTWhWNF8HfNLekC4sjRsGNK9s9PboHgbGyBpoH7vnJq2icA7BDfzDaBvrBzZv",
  "key8": "29uoHBQ5F5G8pwc4h5XiPLfsvsCpBJEyUiqwPj7HwN2KSGZg343zWk34AZipy8Dg8fetpNJrKfFv4vSZh41aqu1L",
  "key9": "YSCKWfLPtDWnUAEkZydQUdjTTYjtf8qPQ8V1RZEEqbBPCG5aq7VPVaDTzQenmsJUod1Fx2KgdDxg3fY8NZSM7jC",
  "key10": "4Df492r2gYYeySUq9jKTB4AKqraJwRnDueFQKkXPjckWnAkzi5RHVjN3w3DQTC66TFeoG24CnKYAoLx34FVDp5WU",
  "key11": "Hjrc9TLYwiPYDnrgfgs4CVGfbGbfFgd2Xe9tGKzNd7NZadG3KWW8JJN4aoPax2kCkkJcQkFPvhEFHv3effySoCP",
  "key12": "4mdCZhbSJCYKwQvasP2MgB9GEocs7s2xV8tx7sTRniGcLTxJYRuwYHV6mwhEoZSSnwHkmpfzz4Dbxj2Fy7D44jq9",
  "key13": "59K4oRCHpztzRHFTjgDPXFRZ1gEmfqM8UNaEzQx7A3UhLt32xF7k2yJqcyfaxZK3Duuark9gjZHsFqUfwSMby3ez",
  "key14": "2GiHMpfNfZ8AUCwggHNrqPethM8kMErBsKLjKNTyDBYV9v7iwkahryKULdfYNoeHDpbfubA9QbHLk7dm9n5fujEC",
  "key15": "556yjPLWqv7TQveVELPzNbiDjGxoge2ZWUi43BB4iynH4sPc4yWBbFQpa464Kh4QC8a9rqsteRoPuLBHSUJ3kyXQ",
  "key16": "NeV9LqzWwhyDrx2rxCiU42or3dDJZHqi45rLdn7KcGNtEn2P994YAoqxBiKj8pVBYkbb5kwextQ9sGXLiaa4qMH",
  "key17": "4idC2E7AXErKfPSZUBtzLLZRJ9XRrwFJsWEpkMABQDG9K4r6f8KEmYQotYpi8d59AQuTqKMC34FgAiBEHHogS6oV",
  "key18": "5rfb8FkHFA7yPSkSrocAGfkChnPBgFWzmpCaxZgVRmCGDN6QGebp2EEysKswELTUMNx8hW2HYjS6BAEmyEGyJeUe",
  "key19": "jyhEg5AZp2ygnwCgYjKdYEFSUfqdbdgqZ7RN5XMdrGDSqpd6K5kqoGDw9FvzscK285UJRxxoMmZzfXjSbN3e5dQ",
  "key20": "3MhbWepPCD3xZocDiWBwGtFzwXXfNnvU3uPbRLFTsEZRyfFeGgi9qw54M79etG3z2LPvP8jhCT3XHiyexuyfBtFo",
  "key21": "psnRKPDBjvUByBbrfuvzjz8WDqUNCiJLENZt4WkrMq2dE1p76rN5p3LZt5xNUV6ZcQeVLojQkttZb7ajDfXsir9",
  "key22": "2RWU5zaGgds8sFjDXSAcR9G8HyFawUZ8tuTfDWF9drBKVYVNS3PxQPcWGqnRi5PDoWmqWe7JdK2cxJAM5rxjh3By",
  "key23": "3GoVWfYTw1FGN9fU4Jq6hKXLozwHrZWMgxJAXp5XDo2QTptBUDm2f4aEXHMqCxcxmPsQKREY1ynCKh3acDV3eF8C",
  "key24": "2D1uo7gzByJWYkv2LKVJg8qBogA6MjJ98fTostFFQtDKZUhgFCk2EQGQ3tdizZJaJ3827QFQ3r6LuaxxEWh8rh2N",
  "key25": "eTvkaxojX9dECsGu8rS3gHgHadabyW6THvCrezFxeSthr9N2RcFXwEpsAFBh9ZCMpdzbsnGhmEx8Q2JYdnNNFev",
  "key26": "3XTcDYtkTwrypvUxWkK6tRfLTtjbr3xBKNTwahuj7kD435TWixED6zoXipijnRJLeUcibKTZeX2VBskzg6mqPQR4",
  "key27": "4dTKMxs3ntL1qMRRax5hz5PPvex5Aw4y5Xxv5yXwaAocyNH8e25vQKiQaXZrFbvDYNvMFKp4UE5cXteqtkbpBFVR",
  "key28": "4VFqgcgJrNn5q2A4xZNQyoR3CjXr3LEDx6zkXZrp4n4nAAVcEbPdkCoe8wiLCvEbJiJbwsEqhHShRnmJJw8o1jDz",
  "key29": "1QhvJZkFu2hELvEUQpUqDtzLbTSYc5twGY4HVHY6C7AQDTJpZTQJDixPqWAerNGEXjXspUBXvEjGd9TFxVPnxZL",
  "key30": "2Qx4zjCYZptf84ds2D1F1ZFjgfXWY1zPyxUFDeJEdqfpFBpDwCkaB4Lxyjt6NLA2tYr65MYUdrucsKdKxtcQ5Kt1",
  "key31": "3nhLfdsDfBCtq2cC94ctWsAjDbqAh8FxKUiqVoS4Vn8xWxNs4PUoPL5pefTiyRPKS7tx3jHcwbgFr7PevRSudcGd",
  "key32": "3XFHUuZ99W87dnhBoYaZAHq8MntLWx9stcx1sLa5Mfr3TQpZozezeyZui3BBnhsezFDEPLuSRfEoYKSNoqHQBxRZ",
  "key33": "5RZvAqa5nAtQqsxGJth6oHbXLoMoBSf6GbTWuhXvr1Kn7GeerCKkYH4BrKEETgVQaCAEjA7TqYTtX2TvwCFzFfTD",
  "key34": "3p483kLjyrgbr3dNXnPPPi89y68fjQfELQiqixKq9eELhQiSK3B194Mq6f4KCm5pgKyiDf93J76CKw2b8axesDez",
  "key35": "mDykUVL6K3xfQGMDR9jtbxQ1CsC6uH6x7uHpoYyYWRfAk8U3ZH3WUSxZpEfnegjfBUewBES5ouvFkPTdC2DeHRC",
  "key36": "3vs61iLFkL9Yo4qLxuZj6CXhACMTX38bkj3Jv4q59BGhqoY4JVC9GCoUivJiiLFGpby5taZsW1gPHGjBNdw7JuHp",
  "key37": "4wmeJA4vvXnzGNcXCvzBwjeyDQn9rmQnXYVWVQ9UAS9spSTiX5zqc8wUu4Hx7dH5mvMHrBSP7Jhku7qojoByC4ZR",
  "key38": "291DuJLtVu1oYaf3UBGcHe3LP9RZu3kmisNvzqoD31e2xev88FgNiMy2QpT4qebK67N7CiTtoFc32mpvtx4YxKh4"
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
