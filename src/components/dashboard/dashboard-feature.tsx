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
    "28w6jmtbYDjkF9C9UhdiGEKCCqH2DnDQfsupWdzTxDce79ASA2JBD4NKxnv8is6MJ6pJQ5pRU7ij3JSFSn6wxGgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rT7KMDdXetZPdUct2v6o3JohafokUQ24VRuvvguxRhpapZxgg699xSooYMUiWAvbmBZGaSLTeTP7NJXv7LeR45G",
  "key1": "JEPWBqRH5AA7xdtzd6LsD8K1aTxDkx8u63YiufxwwA5q5ystkP1wwt6oxp7rDQgXkPbP8EaGdPzABD2GFJM7jcd",
  "key2": "5hw5NqHTxuLLFWituCiaiSBGPvmqya4f2gG7XvNKkF3FHRMdPo3HMcQcFsReSshBe2QzStkA5AuE3vyH38KHVJ88",
  "key3": "65xwT3kHxJhdaSQZ1xgSVzn8neAk95U31RFNPy57qLQui7FdgQt8u1p4RPcMdHRLgw12Crvd1ddvZTYbwz6kq6Fu",
  "key4": "4bkDPNaWGjpNz6JbYw3DZcGGCcURTzoZEivvKQvK3yFYsRLpHZmkdN5GryymZqMXk3oUiovwE4fJV377xevBxN9W",
  "key5": "5SxHidV5FoLBrU2c9WFEAeKhaj7uBoLkkUMYkC8HBGTcQAtdktS9oTMZn1FESykrBNqvhmBrdUpVXHTHQ7SHXtCB",
  "key6": "2VvGkvQd1dc88nQDiNWZgQRsVMgnKknUCy92g9CXBvLMH5mgUWRuzR8njcgQHpjcsuvZ8xALMy31D8v5ELJANWLL",
  "key7": "4xm6qcVjLtL54QdiiN17z7BPdLvAy1LXzdQHiaBoCXfA2BD1QvPAw17pBjQ3nKX6SAZyv7ZNRhvbcAVV1vB2CEPe",
  "key8": "4asg4rycdX8PF1tigACrL3HUY8nMCnmPPccEJNEMu9X784Lm1RKZmuPzGhtgvNCTs4fLb13eS49kFpvgykmY5rkg",
  "key9": "31NKoBuDZp4RMDuyiZF3xbrGkPzaPyCvqpDeXLkv99bqJdAZdkmVJq58bxfNXXJuMLKf1GyF5YTgLb2KsvFiEyEC",
  "key10": "58i8SsrLxhYkZhEXTmSGCSBSD1AxVhKBJskQQHy6Jo1sJ7BdxNax1q8QbCJFJCFbLybi3JrCfvw8dU4Y5hyqzL9y",
  "key11": "RJcvgJwyEKaNag4SPvMAPAMNpBgUgV1cbUmKmYyKF1y7p4BLZw9eNTGbXkD9u5uKYHDcxLogYgyac5FVG4jTBya",
  "key12": "3F2wZrDNXdTioZDC4pTSPwkF8NoG7Hy5tku3Ck7b7G6SP88bA8jBTNBa97qn116U3n1YNC3Dcf4SUF6w2E94CLRU",
  "key13": "3ZH1gGuRuuEKPDu7BikxTf55raB7JpT2io78U2cLPf2TkrBNsUW54CCyPDpTeS7ropyCwyZHJ57WwZDFzux9nHjK",
  "key14": "2XYmZ1WcrpwUj8U3QgJVnZF4YXDiQvCtNoNPPfYxog9EzyWQELru5YFJhn5TkmnuQRqHCAC6ju1jbAqdMDByVN3c",
  "key15": "cUtYSq5aXRn7q7EHm2P2Jsht5HV5fRWJfEUhKPrrTwbMEn3XNTBEZqkYqF2EPKeHC9SB6K1jUBmP88gGV5SdBbD",
  "key16": "5dhrQnQaDBxi921yDKEhMvTARvR44WDnTiwMpP3A7CC93giLNWPC3LfN7u29j9fNFpBVk5nddie8jAYWYKYiCJn7",
  "key17": "a2B543LsyrqyAuG1VnMqN7qJK4KUTYkfzefXPQumJJsJNcSU9mnRWU3PGAdPtxrJQrYYTDKmkoixyZ6uC9aCFxH",
  "key18": "5gmDrRG9Qh5zrJwNBezpQ6qQKGQ9JZ9tRdGYCeMkY7bzkFXxd1WCDa9vZEG8hBxT2vHG2eXfg8Ukg792DKvJWM4k",
  "key19": "xtegSNqxSHY3bbVGzyyVpwQnVNAuEC9tYyX4zggyZSQ3qqjNyeCg465suhhLyyMfHBuUP7p59ngV1TupMcbrCZg",
  "key20": "32c8fM5AEeam3YzJxjMBTdXS6QmdQKhk8429P6VupAeRm8xuirXWkwVUinm4Rgyto5ZvtJzfr586H4cStFgmtUdU",
  "key21": "r5uffFwXAmWGyroaiUji6aidzhNW5a6Vx8sZnKjMAPSPKkKB4VKsKyDhcnQFQmS6t6R3PGRy8Jfd1zrbkERWhrv",
  "key22": "2DvgU1ZHKPLNJRQHoA2zJfbZg6Q4MT81NaVxHaBmw1eFKUa46c5LZYQ6s1p35zK7FrTiF6nJzAeH1R9nvrHreihh",
  "key23": "4j5s9t4mLPgZrBfgtrWAcuBeUfE4J26d9z76eFCGe9mfUZNQSaNbznfEEKyehuyBXxcG1KNjf3aBj7R3UAkRZzG",
  "key24": "2XAMfAHKVhyfix3qnte42t6t9fNVvmj69J3pgs82s3JPNNKqa5LpfcKwbCQh6sbRU9upxxpYmQkwjNVy1HmAGc3i",
  "key25": "2kPL1raBP7w1WZtFHCJnf3hWdzzTuLxexqAxd3sBmFWraj71YzaM3sMfrneFdfzHjCW54Hzm4yfwqPULmhF8BuB4",
  "key26": "2aaPFJSmddJd83B39z2yjxDswN387gvGeyABAGRYuVMpeZN7TcMeLrJfbgKK4XwVoQtft8KPWEdPM8r5khufp3Mr",
  "key27": "3pDnGbQQgCRVdXYNtZ1gNvhdbXQUjPGu3BgzFNZeXW8jg3hkyEzjpxiEBRkTFHFF1wJ9tL6NBQBt3mdgZAr52WgP",
  "key28": "5xyUGVQ22rbbWtYVt3y4xf4uqm9SHqKcaaDLhg84vELx7JpmbvRJAgDCefViU5AMES2P8AvzBs6mrHqSGg7DuoQ3",
  "key29": "yoCZkVApMqw69UsqF4hb9HgnpQF59zEUbwjjgvMXfm41EdoDcNS8Cv5fL97JcNsp56HKtWzgJRm4JBwtqDD91vX",
  "key30": "jeYBpygwCEst5G7YkYb5rN3UgnbguTQBk2ofHkvbGV3kWwkk74YFiQ7SftwXpWPTN3kijKAnWZKsDrgQiMNR67d",
  "key31": "3sAvA9JCmyr1QPygaDE7pSLBN9Zbzy9CereshicDEqP1u9esTZ92iYYp32rZ49VVff7VDEwWFknuPEVfMmCxPhcz",
  "key32": "2vYmaAmDJwjAwqpB55t8jpfjg1tak6ZZeYQd9onKV7A6UFCGGZQXxrgcaC1obSeouydtqzi9BHyGAJSmgvjKnYkn",
  "key33": "ASF3jZJSDGH7xjg296fu9HE6nKsYYZYRActwu4XRGBbGi8gmXqVUhUPgKWHhYCkhodcTzDrx3MwZQPMeno91UwB",
  "key34": "4yKggdM4D6WrdZncdMna9hULkQ9vqtynusk6pkasFtJ3YVKRh5wKniqi4A59Rrp8cvxpBrGwRbMBVMrexHydTZxP",
  "key35": "2WJqbYHSwDgM2bPuJSLU7mNgibm9gSBp12zpMUo1n1khYcVMovnd3MQF3rLANw9sr8emqHC57k3LUTPQLQknd9KB",
  "key36": "55VzEetWqd5ZBMNN6nfwDjWSPwgvyMEZVWMAmaSpmH92AWrQKhDPWjVGXvxEVuiBdKwLsgr4QDjMj2cjhpKJ4wbd"
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
