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
    "5qyXmZhguJkxpyoUsNdAsVvzcNN6E4UtqSfJQWnykbbZeetZqxukGjUYVGYPLhdmqyJsuCPcxo8npfgRfkSYqz1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vUE9tLrKa6o49EDYBPo2oyR4hM3hNU1rW5EFg4XcheE9sRYXre93rT2JuGX25KWRwXLSwmLgT21FaHP3jZN36Kq",
  "key1": "25nDyur9KHNj37CVTM7U8n6EJHBm4ysg542Y8hsYXPnxTL3bcTK8i7EFPhu7ALKzJ1M1PstYk1kkrcUVfyrGJPjs",
  "key2": "5uDHsi6bEmvThc615jKzfLnrZutfruj9ux2HBGEB17pXx86ezNmdwB24WRxuY9D4SCXg2o5JMC5WoZom58ARhiYN",
  "key3": "2K5JYZmP4B5Zewb8y55KYoH1VXBiyd8GCwxmyDRKVQPE4Uu949vz38SMVKwngr7v7UaDjgWErZiRvLc4tokipdWL",
  "key4": "7xzWD8qbzqNFYkc1BZAtDUjHVeqgn3cKE2SgmuBvKHG8UbiBbQNnTZ36W9RpN2J1jSK5ioqQPFrFQgj72T5S2Ji",
  "key5": "hVjvV2iGuu7K4m7PX42T35oKz8rKetpg7FaqggvWDCw1ZhTBpGSfiSYRQavAB4XQaXBEPzEjzHf2eUsUZRUpsi4",
  "key6": "5pRb1pVzWuSWwGuAcUpbg19HWV3kCN5qwLEQvYaEzC9yDheLHY6WHcLVLt4ssjSvtjqJQGce4SuVEzkwyafte18D",
  "key7": "3EZUo9YDCA6RjfmcY8HSLYfCZzGfK1PfpVd9GsjtQEmQHUh6bFiQUVhBLowTgSqg22mkiscgjHm3VXhb2DMV9T7w",
  "key8": "2unZ5YYNt9omGvekBgqQ4zAQ9mqeykAhHBE5PGuMe7aEo9dq7ZPjX1uJ31WhGiuJ8xGmgHU4oS7gHWrpxx9TtTYw",
  "key9": "2m1zmbCQy43E4LoK3MeBYqJxALZ4N8m8j2t9DL6WzxnTEGUQu6FRUio3dJWEZnabjQuwapCsaLEJ5ZCuK5aCXH7e",
  "key10": "ZbKnaxarUKdXzHcJhwtDHmGt9E8r3NNXzuGT8mH2ErocUNd9QFRYHAQYrnu84FLyXvX7FgyBapx8m9FJNAP6wo1",
  "key11": "Z3SQ7c3m965hNHyw3knMe34un6iRaLjRfH6wEryWFa1K6n6dih89i8nR4bjz4WCxmKG5yYY1dAvxPV2v3om6wcB",
  "key12": "3J5aU9aPGyWq7Mt3Jd7FG1PWVBGfKEx6oUpGEybDBrDhAu93ZMLF4ZLqUqaY2UKkXz2s3Qfrxhqp39Q8zo6WXckW",
  "key13": "98vPZ369bbpFe7ktjDWjJiUAjVqcGftMFDHWY4sNHCdb3wG9UUcadxxEBACXcT8J8BmBQY4n4FAV7J3rbqEKtGe",
  "key14": "mELP9P542Qq1fFHbYm8fNuJ38dSeg8aAyqk8MfMqvBUAiGmpTGbxJUHni85rmMrbyCAruUNMF2ExUzkYgvbjzZ7",
  "key15": "5mgpXMYiHEreAwZ28YCb5Lf2B6FyCzuimLcLnNztpMeNeK9Hhn7iN2jYwdf33jiiLCP3MkP1K7j5NvywCHqcEdhF",
  "key16": "2Vtm17oaswYirKm7BMKUCsFcY5ZKjLjiJ3YumCGgtf8t4K4zMaEi2iixMzsbi7KkxG4wioX5T6KXwebx9YbQ9C2K",
  "key17": "2q7dkN8CRBZmfoguXKtKrSDaH9CAPGWC2CrYqMTeopwq4RafVh7gGpGp9mSne4VhUST7fRndzPa3ANpQZcKJT3Dr",
  "key18": "5BByzmJNVzZF5vk6ZKc5v3JdvcnN5WxfM9YaB8qCLE9Nf7f8HCAjnQ9JSbPUeAnHUQPgK7r27eLUQoPkqnUucpfm",
  "key19": "2YMxazqzoFZcrcXRnk7j61StocxzGcBtUv96e8HZBwaUqK7igPxuo4WHQbNccpubgt1trJ3wxCw5G1i8zaCrNbfo",
  "key20": "35VNvZ7gGw5jbVAgJHkZrYnLFANDruQy2Zh455gHG4nbTtdPBoJNjWS45XYLyoX4ziCtj9JhtFi4mUjeSDaX6DeW",
  "key21": "2tAwfJfCt3Vn2ss5pu3Q91TjcuFYJKktNChLh2ncwbbnF1HbSYBzoMZyXjZmRPZJkJnZsroQmf8W4Fq7SNqyiUFt",
  "key22": "jS2tbLBftxnGvQyNXzXEyo1yxkfYyALhtWAow4H8ghL76jAwEpoJBD3jSKzkTuRRqhDSqKV6Ntjz4kk5F2jAEYo",
  "key23": "5JzE3Rgb6T1U2wmwP3VGPwAnJWbFes41VPrYX9EdkvEEiPnQnxxGatY7htbgbckfWYHGGW15mSMisCQC2t1dMV8E",
  "key24": "2z7NTwgwCm6PwebqF44PxPn3SZbYC9axS6RhDeiHm8cN7QftHkGwHKFnyYWVyLHodXx69b6VCTdpqhZFzjUaA65H",
  "key25": "5vz4SXj5gXG829URVPoSURDR7UbJmmuiHgT7XxsmpbmQFHyEWDGwvwEgctEbJ2WV7Etr3CfzD2TxBppAHcZZvZV9",
  "key26": "3PibumkTr6CSGaNuJgTiSMx7R4anDPtoeS1Hg3bw6yUGKYUJGg1PMjWcoPGXAERV448XidmwQuLAPJwXy8vxw1nu"
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
