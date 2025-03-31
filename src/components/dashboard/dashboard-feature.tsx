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
    "64vsgr8vRzKXc2zaL4DDC2tgNnLgXwV8EWTbVpoq1142gvMfTXTc9aChyqGc5DURrJtvqz5yg3Fv7PnhLCnWvVhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y26PmhFWqZFZEnHsoHuiThUpXe3yKVfUYQeAA8a9hXsHdfrtuCiyitS1mdQKSeaQA4Xtg1xMLsrs1hsexueUh8h",
  "key1": "2vMiLp5k9NhWhiBoExEjz4kooFykm7HFxUNZepHtJGU3ZmkBWC3San5PaXnGfTzG1SQmVkoUccAUtRd1KA43qsWx",
  "key2": "4NaD25VBxpFFvQVivi5q4GPjwvB3Zqn1Jy7vVEQk4Rnr6mVZL41zCNYPXZ2Ps5Ndabbw6ZNbtFSqs65zbwcyanhk",
  "key3": "2mMkrEzecnAVXWengLhVPpUTrbojFhCN44bR5WzJHJRmxGFiV3RT4wYuDPnjPFKDCZgfUfJwUxh3y3e1zrfottVL",
  "key4": "2Nr9nEE9Ea6KiwTKhQ69LMQHeZeHR8dc7LTfguZe16yLgYMHMSGyRoR5XsJ1VNdX8cTWQ4xFn52hBBJLKAjX36BE",
  "key5": "WnmxQNc9zgJAX5yJxM7Xp7iis4rETq58fSTdV7BHNWE6h8CPRHZnA1QQD4YDxfZXwyJcq3YVsgoTpzmq3JWYj42",
  "key6": "HKYLsiCmwxErsMwU9JgFTiFubGXTPv4YE2Vu2JPRbK4kUaqK5ct13QHYJ9pZ8aMnbhLQK4DTmqWgK3FTekByZHu",
  "key7": "nip1Y6NshygTx6wHbX7aYkW1xNTbk67e9MxkFiKfLme6hYqoVj7rMM4W3QH7axYamX1UE31MkBNU1WfTnJ3TmeB",
  "key8": "4EvGVu4togPsdjfgNP6qRvh4KNmybDbkAMiN9Rh7tQAt91wVgCHEvAqwvDF8EvnvQMAdv55uCXxfesnHkzz45L7Z",
  "key9": "2zzp4ncjUfw9GCsxycQjNEqKZYHv62tTf2QbvNGvG63yGwfV56j1EWgKdNH3nosh4bz3bbpjKv2zhk8wLDcS5kG9",
  "key10": "bQdAWL9HaxzAjkGqjSjRw5XboqEjUxGCF3fHXKcvWVbb2JDfc2TBuq3mg1CzepTx5xdhgNeptJs6C49vgLnSo4j",
  "key11": "3XH33d1WAL2V2v3uq2wBUaX6fKUDysW2h877AkCzWDQ3XnokPoSwQ1Xwk27MpVZEFAEYWTg9UUB4e45rTCbYeNKc",
  "key12": "3Nvii2Gi6hTrB8PYmFsoJMRBLjEwwu71sZoc7Uwv3Z4PTKbV5nQxajCnM3X6a1sQPmiVQD2t6eGLZmuP2XG8NvQA",
  "key13": "3Rj7GMg8K5bba8XD9YHcz9SFMYu4YniDE67t3pVmFrifyUxF8rZQYjNwLcnnYE7v3o4WS94te8REyFtHSLZj2QZC",
  "key14": "5B7PgkEhj5vHjK2CChzTnT2882Zhspjd6yMriWaYwv9ishQtKC6pPKMuHKjWkHTLFx2T8KAJndEaMp7XhuuwiiZz",
  "key15": "5H7NEpVR3jC9fDk5T8zVUs2KfUKftV3hPWkETMXjPTE4n8LEnEW44onwXVkUcLrvMNxwDAV4MZbx38EkTWQ6sEfQ",
  "key16": "2ZsaY4S3eWksNymw7m3RrXNutDjy3TSNAGaEp6QP7dcKmUXAKejP2kADTvpyKnUW9tCWbNfHvgnFhHvma5VcATGL",
  "key17": "2MEGYK2Gc8URunYSZDTw74z21zpnVZXf6b7Sc8zw1ELzhkHbrwGq6PCFFknLcJ397T8Xsg5tirr4pMEsKJkT4tVx",
  "key18": "DyyWUCNs2wKoq1g6yn428TcJCk9AdLK3f7QqSVS3txarPJsQ6WHZbWLtNTpfNDX83bUDy4kcASj7N7setzNEGNM",
  "key19": "3JnL9YLMwHXUvSNBmfzfCMkZVMx21Px9yDZ6Gk8q54o1GVhSvfyx99TrB6kskVUt3Wj1wns5fX7rDmAAtJ2Pk82h",
  "key20": "3Abr8oyeDZyDMKZBCKB4WzTR5DsaLgstgRaxiv2ez3ga92iYx5PMXyXAN5QB4KtqB6B8DVszLFufnRBYTM6FnaGh",
  "key21": "3n8ScKDW3b3zMG8uot9QUXXemvmEXk3gCnjcBmK7Pf5yEbMC4DPW512jH3wJ8fNF3ynwbJ4nsLxTg7rtNbCHSxCx",
  "key22": "3s9tmkom1NijVYYT5XAihap6gLhgyFAAbj8yzCge71PujhDEdCN4RSXeHvat6sihh3rkk6n4nDVdhspUaeGUWphm",
  "key23": "fLEx8Un1YSPQBHRBd8M1HtVFPe9nbN9qtq7TdkEYGEjML2ZSPWS2JaBXBN3B2wRt9oyWTWa7u2kXZqy351qY7sh",
  "key24": "3txSfXB38cRSNxN81AsMw62gVXKkvH7ZSfrH1V6G6Z68j2QBaDEbR2hMya2Vk634p9XPEZQAYtVMaAUPniGTFbx6",
  "key25": "5AcePZNXxvojj1TAQG1NjuKt3XzEfs5e6Vjw5nBy36LUQ5HNSotYMyGvzLZnbPzTS975pr5WiiN6DH7MMqZDv7VH",
  "key26": "5P8SVCFcX5odBCqZNsuwtvnWZBCqLRKYy3FwXW1tXAYPNmhJspoQ1KmKZPye7i3BHoPVYC6UJES6kWPGxaboh1o1",
  "key27": "5hH6Z5JreGuCit1KpDuMtNXHnsPqCtf9xRDz3N6ub5SMZ2J1Xn11TbMFh932YoyuRur8dnYvNhKvdeDdj74xxDkS"
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
