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
    "wdpXJE6temMGQQcL7ztibeY6WbGtZoZhHLJPdYRnMHzzsyrGVW6BJfF5YfE7ZED4Zq9zntujABKCfRsr1V2oN5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VJzNd75EM8sm5pYQPjuYgQSHBZnGwbBmcsjiLE2fJGBbkd1yfXRFLUpGJe3TjW4eakcfE9Nwnrsn4LMo44BS7sE",
  "key1": "2iosmrZvc2jGQooNoDasN7CAjppXtVafBS7pM4pRPBKFdGGKsNFfKzCYMtwcMK2Da6WazAoPVs8f1oVDjUHoga7s",
  "key2": "S2JwVgQwAYFx7BUDy8z6se6dqgFVW2nGY1xXLwayL3M5vLxvZLunMV7HmTcMV8umGTSsoxiJDF5MQj63a1crLHY",
  "key3": "MqDSx41LLgKG9s5DUmL5PjVKob3LfYbESQzGNpm4d1L9bHbNxidSmys48g1KedxLQytaa6WN7EiHtB5qZorD3Ax",
  "key4": "b99kPZqQGgog9Lyd9EST1L1Wpovv3oZRLJjVaEpy8p8v9pkR9GnfjpstEDoouFyfWBHkN2LWtUrsVZGB6zbDbpR",
  "key5": "5Hz5kSxNbTqDDdeYWuLfiLuSVctaMmkyXD7iPrJnKH4B9QAapon7H1oRAmo8mmdaGfQFi8ai8YxrGgqYvrfbpjDA",
  "key6": "3rjSbhxGy69izEfr5zT9BeU1yP9CTtd4nLkT6URY1sr6vCVVph5yrqRNCdK9mbyEU8LgR3UfrZK2n3j7xskWTMxu",
  "key7": "5mjxK3QPw7AtgukzpJXgsDtstJtoYZTYNDoB8BZLQMamSFanuXvnQ6idM1gTGJK7bfSY6bEnD5rC74sq6mDeWXHq",
  "key8": "3P3ZnHVrR8CtNzRDBjxna51qDcHPVVH19SuW895uJEX2AXyuEKeMmY75rxhgSEubQeLvyrcdJ2CRrbrkPqdUf9wc",
  "key9": "4afvbi2QdFRoi5txbwXJ2HAJknt8Sy1Mu6xRepf4YQHTVQrCRPv8qpZhprAVRF8RgjQqrG1z8GbL8m9BEUcNgBmf",
  "key10": "2yDVoNtQ52JrRfopG5VBzRxMZjWevnt5sr62m9FbZSykDt5tZtmSMQFfdHb6DzGq4tHHZyCaySrrVawvvLA6qeW4",
  "key11": "6gxYQy341cuS4VesqZmAMhMKoAEwW3Dvdbe6kkRm17C93ZTPwCmGdL7XZqiXeE8mK4XccWaLmXNtzHuxFwxXkNE",
  "key12": "2sbpfEUc3PCzMgxQ5tUdgr4pzhQffGSj1RfyLH5wsdGJBX5pcjFcbyBfEYyGmLMtGdJRr3mMsWMHQ7v18NJN1sQK",
  "key13": "2qu8twpaHmi1PY5YadphffnoBUHuDEpxs9dKS9HwjxiLDzh33zUbTqcACiD5iH8aJ2GmTHnhfbJ1DDNWBYpVpMrK",
  "key14": "2tEzq3C8GBoHEcJq5LJRzRmp7Ut55fsqW5Np3hEQ47QGt2TrHgVRrnq6ERAYAGvznt5BcveUM1TtKCY3myHJVGFX",
  "key15": "2VJRB58cFXRLtWHKFCg31KQLSLVM1avZTGauRdH8dpVBUi9B6U9Vxn8Fyk9NMjESm4F2XnspCGzqroGWbVeGFEAw",
  "key16": "SNvLt9HkrP3pDc5p9WQPzDa9LspTLgXoC8e6Go4TcGP2tev3CD2p1uBT6dhpoHfaQwmdiZ6VfcBqDfUUBCt2vwg",
  "key17": "3gvQpfYovJAN1wiZPqdTNgG6tUtaYq8iPdUJSJ7T7u7U2EuTGowqs3PeMe9qfktMam1kizhMnVecX5q9YZp1tkYh",
  "key18": "uGcqqt7Xd9NDeRmW6vrxQYRcSrgq3KJzRp1WMJi57ME9ffbPnegCuLy6TJP2EBt3MBbxxmP6j7GhxXC9B7VPgbR",
  "key19": "4yhSWXdnZTfX339QRwbxnjie1gAxNY9eHYmm2TFwcDBJXZnBfqTqt7tLNSsFLexaYxHokSKqSGCPnRxDYrzBQUfK",
  "key20": "2FnJzS1juDEP2AoabnwNN4kTeDS641gQEQPZAgBkLXoNZ2ERw3gQpZUzBZxEEmLy3TW9M3ZFEysTioktqbGMv8NG",
  "key21": "4ecZshaMvM7oJ5scawE7PNpifxKTExYQ24SdpQ2CYf9vLYkBaoNvUgXqfNmvMf6P2nisxKvigDwU5t4H5B2LXT4P",
  "key22": "3ykNoBfpYqa64CFnG4zSkbAVuwgMaKWi4nwtzmruNG4V4Fz9o2YmiWhiBj3Nf7FYxyeBTuGhS8fTSLyc4BVd34TX",
  "key23": "2yRCpATgq2pF5iU8tvzsYYaYhNZ9MYgWxq3D9JLv7tvXorrPmqQSJdwcBL4gjNuEu6FfRvc7ffRxhrPfwzMqd5bx",
  "key24": "26HTb49pzztzfuvF3FowmGAffqjXxUzt3UGKQBk11Y9gecZTv9yN5JBLW4WydSKAFiwSszBcxMT7xNaAH5kRwnhV"
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
