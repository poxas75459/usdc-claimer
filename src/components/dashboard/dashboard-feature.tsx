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
    "3vAYgcEBx7RwFE5jqjPg4eE2rUr6eVwwezpp4UCqqfNjbYHNSPCHB27DX1fAG9c8qVAyDjzsn9ZNw6qobzFE93CP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aCwi8SPvnNTdBLU8GN18pC3veZCfKPS8AsyrHyMQnQK1HqqmvUeXKnSwYEBXeZtkA3E9m9UCqnpPoWc4aPKre4J",
  "key1": "2au2h3F3PqsXyr3McUB1qa6XZHQuDS8HaDa88btj1nU57J4cZJU1Sh2ys4V8jVV7BN1oTsHmQNSxNidZV79LACeH",
  "key2": "59BhJQeyXGukEVUiHYNTdj34yPwWkZyfL989NLqCafCjpgSsiPsWn3jEUpodV6f3gWHV8dPK4gHb8FSBFiSjxx2U",
  "key3": "2Xmun2f9xUQcbj1yCEinbyqS6pSBab5GsfJnJhU9Ro88nsqXkxmm72ToYbNhZjV8ChM8BufL771yFmPm4XwN9Ugp",
  "key4": "3MqfszYvHULV1W1wMrzzWfafgHtdg6ME1NLWoqh1U2fDChg53nQeZj54nPpqAWfZ7A39B2Czu9QTV3q4BXUJPcaj",
  "key5": "3VzjuPKFuXdVV711P7PaZNQXaPR8sgGaMEYckduDPJ4o2GSR7mi5ouUb3HxuX49kortFp8VDWwYgf1BT7u7z4JCe",
  "key6": "9ZFvmosndonDee1GZT4K5T65K7FKxtPUUXRaseEzG5CQiSeESFhDZ8hHRSeWqq8TCjaK9x8CMCPXXmfNcFr46Mp",
  "key7": "qqRmDJyxhriF3QtN68zVUmRFQYrbbTQN6xzcv4fyDT6EZfGshT4kaHn15ZAzwVhJfQEZYvqPnwogkapoqHVe7hP",
  "key8": "3PV3brHadr9ZvTLjBoVpgZcZ46Zdp9eKzXApnjs6AqTnryHQyFQQWC4CBBFc9h162PDr4WP1AHAzBZ17z74jaY6n",
  "key9": "4e5mZRJ2z7Wkwark3xyBXbDUmBEN5B45jMpe3XP3SnA7yq241X2zxqfEa7mW5Z9Yr1tfohJdqjqSUyjvrDzAeBJ5",
  "key10": "fAzpGeoBt95j65p5FELCtxXPnvgMLEunJGzx9Arn3YD76ZQSiEnM7QWkwAcuZvcrnPeJpnp4U9xNxvXsHCggnqj",
  "key11": "yimcvDv7CnnJafX4MYdCvXvSXtb9ncvjNMYUm9EwynHfR5Sy3arrtubPmQVRWbh7p9YKfBwscb7dzzogHHknvkB",
  "key12": "3e7MbUU3h8Aw7RXYfAvjg7vy2mCTL1G6WXY8jnYLvXr3sMuZHi2hffsL9ncXheMkxWEJsP3sh1Wn1q4dxGC5M3rx",
  "key13": "WcRfu7tFHj49zmxXwSPucdqgJt4pWLiLoRMwBf1SqF3qrJcXaSdwrkMjFNsVuESipJhbLzMjk6FbZpFRyFDbRLA",
  "key14": "3CbtZRDNQSKb5xDrJU5Cp4Py8dRT1CPp4LGTa3oxZKihp4ryytTuZxYTSwtNuwuUCybtpe8ynDLCgiyf6SaZKRCs",
  "key15": "Cpy6cdwT52AFTdce4BStsnxSxzaMdVPg3igQZD7NJhXyR3MngBshCjJ8mCokyzfw6FezhEcp1kmekaW4VdVVBMn",
  "key16": "4y4ohUE174PrHfrNgKpWWbLTiYcMrU2Yv3StzF6fNdzEGV2VpgPSVRHNSssHgY6DDoYaba3pZAvrXDsaNar6Eqnq",
  "key17": "y2ZsrjzVX5nWNkBjpcL4ZR9MUAJDdCuwv2hNcPCpkoY7SSyDYqbv7QpZPFJjQ2i82dnN7CyFJTz4iHQzta54Yrx",
  "key18": "3uUHVW4hJeUWTJhU34AjPfXuASfQ8fGxLrPJaBg5MiZvavT877HMpHm8ubqrKfxK8wTxEsDGQ6eWyFZvGUVXiuvL",
  "key19": "5ZKRLD3YyUxDbSj3c5VsP6wvDWe3nKnbow4awKBjkkZxHHFtWnpbAUQ52XHRE8VbHnPqJHCu56sftbrR7yGacVam",
  "key20": "qp4iN75tXYXA1shGKCcAYLtfUphWbp7ds7UfMtrpvyBpafKKBBTqxQzBAV4HWZuJLTxfpLNay8mqbHZydkvGuzy",
  "key21": "4oMvN6mfHx3Jn1RYGZkXG44QR8dBXNsW4LSEfFVNDwtbAMXWYcudR2Xm3RE6rFgrY2KRBSzrrVeXcP5ML2jthNQ9",
  "key22": "4UZ1FQShnGcaz4uzu3XVF4ha1trK3H6oRHZCnM56FcAPZUMd8H5mSBLDYd4kv5XaGk9E6ATFGWzvdvpu5HLAscgq",
  "key23": "3fWr9xZqgbPoc4WR5Q9nQyF3qLjA7Nnj7DL4dfsgZYRDr5wiYBefE85BYfS1eHuH5mkF6kdWA3Wt9djPrN7enkYj",
  "key24": "w1Y5rMSJ36k4k8vaLeFj1MWuMxiGQajjfiQ7Xp2XWYxmE7vAskurffpSG1sbb9Ewt29oLaVuMDmWwkZcc8YWwty",
  "key25": "7bq68HNRJhEQUoLF6UuFKuH8nk8ynaJzd5nKo4KNWMPhiHHXkD29i13PzxLrQyfBf1u2YREYSwjR6c9svff3kZB",
  "key26": "2e1CpK5nFpX5oAeo8qta35eSMvjdMPH3oZErRZQs6NVXUH479LoZZTjpPbrJnBgCWcwyTQuiS25dCzNpvLzjizpq",
  "key27": "4boftP9gSFVwYeEdHfdgu5eg5yPLnUXdGDkTFn4CCempxoSpB9RPTtRxWn5gtP2b9ux1HK7hiQiSZEbfKk4HNYYu",
  "key28": "5HoyrJdntvMFTZzWD8cX574LNpoLuxSm76ChSirmuKPMcc8Gkn9iRdxv2RwNR2Ahn3yMDRiHcGgB9PZcdHQdQ15L",
  "key29": "4xcWWQ12qmSXFWjrC4nebtmudsUWztuw4vjqs6LVTZP2GTjdkCc6pQeLHE23zhMZYpJPSmW2ZvCNrbaBoCcHzuFA",
  "key30": "48tMFSP8iLv4nSTY5JuGPb7iJEw85ozK41SXRUoa1CfzcFnyTxAuWMBvibZidXR4zNmNyumWdesrCkY7h8RUtude",
  "key31": "3WfHBpxKWin4vUFZY2Qcni1p4LTZuCBsZgF8bRTbnUePRuNYkT2Ds3dVHqobhqT8Vmg7u4ZDT5R52Lv28KVkkXnH",
  "key32": "rpGZQzwxnTjT8mqrLijmVnuZFZXUd5i2bkFoomAhmX2MJ134KAeTqNzYYJ1y2285EiS4uy7yMy1rzdefwPMf6Jw",
  "key33": "cNtAKBsqtgsQUWQTbVSn42MjXUEVfiEtFyzXUM48fD6bapetmazFvVV4sPyULerrUYAH6gW2PhrRTPtZpE8gCbp",
  "key34": "5j4mfFTZCizwTrcqfBCHByP8xMUcjYRBkZMkXLLBvkh2iAPFfyXcBwYgPUmBYHBStMWxvPXHSZD3cMBa5ATZLwN5",
  "key35": "4nJ3yS471zWNpHMG1gN174EaM9TV2CQoLEuxvtzm6A9Skt3xcfKwTnRhquCVafEvAtksF6eAGirHb5RTav3n78ZC",
  "key36": "5iKzBRDH8dQJRUteaH7hTaQrk7wAXkmc6xr1knwfD5Ty5mqYDM1CbCVSJa11j5PNMQuFhZHfJ7r5iR3t5edkMssJ",
  "key37": "5Ace9BWB3mnrJoooRZccTYXtsbah6pGvmT1fHH19akzBDhYnxpcf4FiPwt9JrcWyZ65RxmnmzH2ZESZG5P3AQMYS",
  "key38": "2bnbzpDtMpRfcKQauRnUBLrTgx25KAKxKEVGqseMtAiuNr1yfBfQJjT9NoWWH2fgKZC3tYcg3tCzewwWwaFzej5L",
  "key39": "29b2hC7FVrzur5yVYFJppycrWJrxzGvyHbAAJJayV586znJYmXjfn6LCFugJCxKqepg8eSHCyxVW6JYknKYdVHpA"
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
