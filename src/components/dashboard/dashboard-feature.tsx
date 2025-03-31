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
    "2tWqe9s8JW9NFnuBp6jDRktWuqWAKF1MBkUPQFZEpjn74BFEypTA1yoroeAe47xURMLztXWZd32RtqGgLExuFnzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rMbA6rJTdn4eVdAG7ithA8WDxVkryoSyECCwqdjPQqWYJRRZg66uBuzqSX3swqEcET3F7hg32w8L6tvGMJja9aK",
  "key1": "64HkUph8dgkAKAzaE7DntSpfEt2i5RYNqoLtCCZhvyoBaLLXvqLRtaUQUcJPSZU1VnAPT8YNRyw3ZbESjqL5W1Yw",
  "key2": "55S1deJFw8uUj3T5cM3KYX1NgCwXtnQWTik43Urg17prTseE9DTaqVLzeiw2X9NevpsPnHVnb4fZtE8CnsGsaFev",
  "key3": "4P1V3JWRrS9RzawVdBVjAWJj1JdpZwAdA9wCqvAae1FptzTcZg1KUAdtrd659xYmGs8CWciSyMPKAhcyctqsWFgQ",
  "key4": "51avqC1grYJjSqq5eiUqThBWELayHgs553PiX2cHYEMjf4bCKWcjyV4uymH1kEua7yuq7KA73wuovzuE9ppPWzyh",
  "key5": "4cZte8TFrMsGn7VUU5mvyqDv7idTqVDdMmds84HKmP3UdDY6mF6XgCbLkmrwQDs8RtZCZKdk5rwatvYUcuEogNo3",
  "key6": "4hpTn1GLfNEeB2UdEBt4SRPSYixRC3nEe9TZE4FS9CRAMGQzbs1N4peayZq4BHTpXpRCYdWFuyyFB9pskj8eWMq5",
  "key7": "4dj3NHkyu43EmRZjATekQKUW15PPfH459KxGH9hH7k7vCqrdpuTSzRHmtpwU3pWuqv8dKetoCKx3fq114AysdmW",
  "key8": "2fEBtcjCSFZqFYMYpSH8gbzGoBBrsDqsVRd6ZMFoBK2uYePy74DxbaJQyP7QLqwdQJXZM73h4hhXQbF7Dk268XK7",
  "key9": "2fyn23wpkjVrc9hBYWj8HEDc5bFfbn4uRAHbyHkvhajeXCeohP1tsePmQtroj5LSMX9BWbqW3ou9cA5dxqLEoxB8",
  "key10": "Bnneczw6XwbwWH2GuMirdfNRso6F7peQKnhJk2nBdCwixsLqKmFQrAMqHziW4dUkRXTykGFBRjCa4pZDxHachJR",
  "key11": "4o3sW3RYADBKc42a5hJxsqBcgVmTikxqXdjUb9AGEx7wKoTfSd9AKYJK9S7xTFPfAwvztFC27cM58zExn4ZPypJw",
  "key12": "4GLU6QTCZFRTTfhUMeqRZMSVGrEx9pwwxV3v3AUUzVpC3LccJAaJe4idAih9A2t2FP93y22wU2QeqVaGBYrSHPR4",
  "key13": "3wrwQQrj9m4T4stLCdRdvGNKSg2msXNzxKeHdFDGLW4djbtbeGepmvWFohRibWBKjA9uY5z7zRfhXpHsZSffTUnW",
  "key14": "4fL5rxdvwPFhZuKR6YTyDQz2DJHhu7bZJXLGZJJyMizL6wnXYUiFGekRNReBLxQLheNXNkzUXXqo2MQhVvUYPD3i",
  "key15": "XoXSs5yhNQkihr2WMvmgRxrVnhGyfVWxda3HR6DQzYHCwdfRZGNL5srByZBFXDdboZ7kQVge6j61C3d75Bbjz5n",
  "key16": "4xiyJ8KaPH8TVBroaiL9SPcqxVS17NwBoaeg2XofaQLodLCKKPzNYyti87JCfphPHdq4kmv8fMgnNJr9icFAEea",
  "key17": "4iAW7ZBsF1BpwQAhv314NNCn4YGSNhti9gchddzZeA7nLHHVvdzpcJACtXZnZksSRSU38wV2Q7UucJftAXM2bTZK",
  "key18": "J8w88jqFpBvLPjtJbpA2N9wFBFnhSw4aGbbaYjyG6MU9DMwHmvsnTjRMny7FzADvTqwccE12rZdjakQdaoW93nn",
  "key19": "553sq3DNtZbLNKcBt818AhPFTpBNGqtXmF3f4hFcr9eFZXxwPVfFdpHPstWZQai7TVfk5Pn78CKUU8Gx3fidK9vy",
  "key20": "5pA2AxqSXJzicQcp4ZpD5cjEbWz3unyW54LGDihy3tYi7TLEDRLt4mDLZBzXapcJn5zqL1YszNdoqww676fVqJ7u",
  "key21": "3iL8myws7vqqvkwLcZw1hx3C2etZNv6WCrc9UkUP4Wv8DRfe4VpAAviJojV4mooYdZzB9TuZTowSW1J7MSHGQrLX",
  "key22": "DvFYNAaD5MMEL7CokUQgebSSB9f4n68oZ9xK84HAksiQmdJTX5adBSTT7oSnNi879UZ55JrB9CpADQ5ZYEjzSUY",
  "key23": "4AXx9kT8FDfmnphauxGJFjro9WtFC8DUkbV2mktho5hs5f5oHhmMUMzmGWofy7rtR2fAbMq8TLas4J3CaCM68JXj",
  "key24": "4WAhFmGAG6nASLEEbo6P8nLN7bkiAaZZT3Cj5WTwxjzvSofro54VbnHCZrLHYcua2TSL2ycHUZMeUfhdgTQegqa2",
  "key25": "4CK254mStnNAGEe55hAwkXJMgZZ3aNgFTj1MjHuR9Fm4zNPaiYC2VaUvqLyAyrkeMUoNyz43X4HRJg7XpR1kz5vp",
  "key26": "bqAcNbJpR5wRCKiu8nhUKmJ7BTARhZgauANi4xhQgv7LbHuAaAwojw2siq63T4hegUG5Y4vJTzzSxPF5MFGGw1V",
  "key27": "4wb2kSWwja8BXwkZCNJeUX9kSuUsKixUvZcuWM4dKcXzHSFmYD13DhtmhXfBPZJBDBCmaaasyeo6fC9jxSwSjPAQ",
  "key28": "5cyn8MUNbLXnDfz6gYyNCkaeN6S4c3pABqpPV8br39kDm3m7Ro8AGsgggS2mqrLhehhxAKFQ8QHSy97cLMPL1t3u",
  "key29": "3qDQciBPWPmnMuV2WhywGKGVUkP2oEBXWcQSNwEqNerenMhB5MkrZW5vp6oqP9zxkEFaErVG8BxqWNzpf9pZTHs4",
  "key30": "FnEiJJAKzUyivpELsByfrGj43SLiFJ8ysSUqPcUM3AuSdRYqS5MqbZjo9UyxNgie3ANecvPaFpdc3g9N8DEaMtZ",
  "key31": "rqtPYeXTNiGkefruUCWGvAw29wN8aSoUSsvak83Jwr9REDRiRBKLM4M8GtjkP3cDQ4ssKC14gsRQkxYBMWbtd6h",
  "key32": "5JGxsCGnHhvEmGD5vJyCth4AqxJbSxiZRPtmU2iGPyHkmdwy41JSjtSxdzWoqttFdp5xgstLqXuDShDSXMNvzZat",
  "key33": "z3rfqtotNBkXqMh41MPiToHnm6L7mwvHAzq1cCNgy1fonfUGmPXohQpeXDuU5kPXrWoSqUEUY9uoW97niEbSVN3",
  "key34": "4dQiQ5ZxmWVNDoCg9bRC3MCDFW8yRTnNrLDtjMc5vPz7sbKBbAzppTWB3BF5mrZN42LPTL9ATtoYMowQHbAAKpqF",
  "key35": "2w2wHzR4LBd5CMrRnUnk2dkZ9vQxEVny94XqBCPUM8gFkDs9zcinXLaERbBH3fSPTyQdnx3GGMfdGbuaLf3qiH4j"
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
