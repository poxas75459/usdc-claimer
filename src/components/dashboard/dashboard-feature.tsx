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
    "66qASKzdPD8PywsL5mET8uSwTbihiERvc44MdADJE9KkfuLxJK86ZmJMfbAWQVAmFZJ3zQQPmEkuuM65rZVeZXt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nn8RjwRnXKKYQEAWuByrY2HhDYRBzQmDgnQQPg52P6NNQj33NTPRdcnDA9SrRwZpHtNUbWmU4Qp5WadRANeSGpA",
  "key1": "5oGDdHqSQsQmkwWweUCsBnRSTKyny4XNx9UVgZ9KggPddG6SLwSX89kXr4CgqSZcWQmgDt3Cyz1Z3j4wVc4vra8s",
  "key2": "xC45oDkW6Nxe21qkcovpRpjbZnizx35c65uunvVP9PRh9SxotaKGEoE2QK8SHZ6QEDoe8PwMKTyTjNBa5xuUsM5",
  "key3": "4bYzv9ywztiDRZ9VcQzn94XKBWYm1ZXkVLcX3nXEapTRUg9u6NnyjEwfcsZxnSz3a32pCAqm4zuMbLPrQFpg9dsN",
  "key4": "3asBvgHTBxSCMokaXGr5mGicSvY1WFqKKW2bcTtkzBRDXPzvRuitTYR5xFhkTbpJKmrRo65aiYVE2WcXfvSueGE",
  "key5": "MvziqG3XsPWcmxwxVTo1dwQ8o9UnHbxcSPmtewrfKFgxqAaN4EeAYmWREASpz38sQuUcyWhQNhSku6kHycLBz2X",
  "key6": "5areRRotQg2RHXvG6rFqdEQfpSHFeCj59XJkJ5YM1ZGGJkwRS4cYyCtvQk6gsSrFG5ibbt1ypQcjpYz7Qczusd5o",
  "key7": "5TvSBnrPnQHraF7rqFnBBapHMvicgbM4LV9UmiWV47kkuZoQjpmwQNNXJUydpkTEmUBSfdXu922JNkbPsrbLhZHU",
  "key8": "22DZAvSSxVNSU8mvfM8DSzJNG5Cb5kb2fdk5JzQuhp48roB78yrjQFH1eJUaM9uM3zr6w8aUiakrfiGZFAZg5LSN",
  "key9": "8EciAnr9S5zGGWTaMnR6T3Ze6g6r43dYnCtDmq6in7tYVsaqV6NsNcxAMcahLSGqhPSCEt3DQhSARrt6KB32tMz",
  "key10": "2PmCWvfw76GyRSbxXcvkY7uKcSFmuMKNK8kLi1AWP6RNgdbamFzMBrmrKHcuma7NScVLWx6QPCLzigBAV15g2jjS",
  "key11": "2YuMNGwjnX7e8XLmgygxiKU3JvfCEgonDx99yALAm4BkZJXFigco6NcpF5fuCTnDb31GZVThXSVVT3S3udtQ3r4y",
  "key12": "ErhnwrKLNAMgsSULS6iS1Xv5ufsiAPd46mQgHZUCZsP3JAJVsBo6HEC958QhP8qJUP9pPVgxJz9VenLqdiHrhqq",
  "key13": "2gd4kfrSkFh4pUTfRAD9eNtYBaPExQ53pxZ3DbxZKfoBinC8tsSQWE2ByZMxNkvGUf6e6ThBqpurHh59vjVDwYcZ",
  "key14": "4cj5LKd1Re1XW3kFfiS6xCVkrniLdWBRgMfmhKusnVKpuatveNYSzs7dJ4Wv3jBL7i523X1SDfuikb7LZdi7dmTx",
  "key15": "66B56GSeRQNTRknP6ck9Xe8aNG835iFDency2Xq4NnTU2LTvaLcsSoWTXZstHYz1tD3w2nJvtxcSS44VrT6v4LXL",
  "key16": "3mgUwcu5nQ44tw1X1N51K7NTXNvJXdTn3uWff2DAM4tt9SqyZADdMHcoTi5PWuoYHTpqAy6sLFx4PUziC8KoWusW",
  "key17": "37KM3b1Ym8i56hqp7VkDStMuyZ15Aucxb3mRsR5MP8kavcbiUb28HjfXhdx8mLy1HKf8KM93Rg7gbR2uYNubjJBU",
  "key18": "4N6G19xHmowqWvP1EnteiVeogQfKM7t5WPkHMYmrXgCgvoBehusM4oU6xTxjuy5AUCmM1Xd1WEgVB4y5FFQFe6ZE",
  "key19": "r4bpfq2WdrK3ETUYZNAAAPLpTiYxFomgTquPhFi5ABxS6yQXagt4dtbNSSsC7FMngeuaW6iUNquAdEGzKxK2Cun",
  "key20": "5Tn43e2jh4vmJHfkMqSsBKzUYrz4EAvrfktma3PeWxQyRCE3sPNfSy5a6m5VVWi8qmuFNFPDVmAcug3qAZdLrRis",
  "key21": "65P5byvGYrwrsWYU2BMXVMURoGUAaM3LE9TPxDjMZcUYCrXrjTC1q8pJ3mT9CSEcp6tYvSxap72r4RbssLkRDYyx",
  "key22": "F86MxRivnBXoEE1wjQTXhP7CVtAS99Xq8HboGZLP38Zua1cGiGRuSLzpcApKTSF7fL7dijXgesVJ2uuScBMaXz3",
  "key23": "64d9yRKP4TjeErhErfLpnFRXdnJ6TwmqLYfsiWVwQe2kHJ6hd6jvBiRpCyqdRYY95PUhkqJa8prh4D4XCyqBJbYQ",
  "key24": "5BMvuWUh82TZvwZCLLLdzYC1V9LxE1bYNhFyW9DFdiewbcTiRb7oZCQ4AqM41UdUnvjcARmJu63Gbpz9nCx6herL",
  "key25": "5j3unhrb8WTXWWjKTHjpKSJMb7pTdKuc5fB91XxsW5U9H8Nco7j4G1wDTdYQ7StmNKX5ro7UwJYQoFVEeFQHsPQY",
  "key26": "Hvaw3EZUuqxhi8EVb1tgdiuHgRBKiwqc4wYUo3t3hBoQDg37vE4qMqTGeQitWm8t4XMRVTpaYnXQ5zpt8fLeswp",
  "key27": "5mPxfAhN8oDSGBLaeyFjK1hnNSACrLxQDefY4YU8s71MM4mEZbujpTEcPdzt3LXHJZMyJ22EjJA659aowRDbu7Zn",
  "key28": "PvdmiyBMVFdjMBjinKYscgcUFFzxH5giyFZYZuEPcvteHFnN1s6SxvE4pwKVPZwUt5DM8WQ1YvPKmN5ufWUZBP7",
  "key29": "31XgymmDxwFY4P2Cj7uMxM3X6N3XAJ3KK2dRgbQmc8bwkd1YRwv2c2477Q6qwEBU4axKmPkVTUrsXB5sGAvR6EcF",
  "key30": "2QLCkhzdonBL64ZFSwGgRuzszfQFA6LESs3ZYUsfUFaTMHK8kzNQZcKbJrzaAjMmCPmUZ18ZRMjPoCRs6iTqz7Va",
  "key31": "2VoA2awixxxrYh7TcUWWPLN74AMR7uc4i1jCfx1o9DJVMsfstQb47D4fuWq8KCceiSLLt3nq55N2jFoc346SPg27",
  "key32": "4XxsRC8gQjg6syRUNvg1LWaPE4gESrWG1ig9Us6TosPV7cLUpq5EQ7YctxYTyy6ddaVXU4Wdn7TmQvUKhKm4bwew",
  "key33": "5kMMrUk2TZatSKT7AVjyvYgDGgkCHMjKcTQHo7EGQtYUV81MwEtnuByQGJFYwUkrwFhZkRgH8LytV9et7HguRpLK",
  "key34": "5EQuVZ3vjDuiopuToLmrWDTM5YM2xUuqk5MyNLHfE2T1xDtpc3J1ikWwQ1NzietALwWGiDkGTZALkVMoP9a4CTc7",
  "key35": "4g8rhVbEdF21e7J38pDUrupjYb8bB8rGtaFA2NWdGxz73Kyd3RMNMLCWASjBnobmTfZ4SAVKoQQAzHQdu7rF3UJ6"
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
