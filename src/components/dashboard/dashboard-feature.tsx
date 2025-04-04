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
    "1BvCovhKoFGXG6HdGnndjnm56eJvjkMvyaseNQgjy47fadXXDBtdQ8YZLAiiomAAvJFZtUjAT2mvmkVxmvc4y4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m6upv1EYL2r9GZ2xWJBVDC71BxgJqwJkotDda6JunnwPsYchqnH31KQrfBmBC4Ghpgjm49ckcjQHeZMWQnaFVwy",
  "key1": "5zVWd2wcKUDM289GfYEzoxBNYyFxi1dtAdYC4m4eMXPBRm78EmABQTn2pSMfmH335ESmnohq9JESnRnaBDHWV7zV",
  "key2": "62DqhxmjXM7MH5gxXL8exbigsjoMuFZHfsFKuKAEcsyxxgjECGdJ4SovBExkja9huGBWx933Zk56cra5FMx9dkew",
  "key3": "4Hwnz9bo9y6Jagyoebss2NmNzxx3cmUXYXNcA2Y2sFhgyZBVnQPcSohFY4jx4PUh48kWhQypnsq8Y3vYgZ8myjoq",
  "key4": "4S5wnGQMyBabMceQqRTExCksMVN9C8QCQMBAHZqd1jjVdi7dVdykPsdAgCzr5v6KBJ8k2Bnbf22dDHBmGHWRU6fj",
  "key5": "53t4QGCR97fLEsWEWmCuezVoRj7LLNCwaXc4uBW591dK8DbV57w7cQ9RJ4h2J7cMZzr3oKVm15NPiDCgU49EPgqw",
  "key6": "4aEMN84USV8KJkyhuckjvaTD12vCPHmRhT9iFG7V4t2CNsznrmNgnVBzji3L9hb59orS1Q77JU61HUj3p44sHVcn",
  "key7": "4M21JFKRoNtwmRWd3EhDTUqMFE1LRNQNqpL4iPzhp3sn3hy5m3VPx8b1xgGzSRgYLg4j24Xqd5gtiQ7rcmAQ5rME",
  "key8": "MK8kAXoc3pRF5ZEF117YQhPW4XaiEHUd66yYMeC7UqCDLpu4m52BRK8CMeKFVkHub7m1u1FUrBJZGFSjhYR6b7i",
  "key9": "6Zwe6AxTjELu4hpindsB4B9NCoNP2dGyREfUjQa4k7Uyedaw8VtgAuizxkmNqsTakRAENSZPE6Lo4PSbLZurfHn",
  "key10": "5r6XNTCrcsj7hbExpZpzY1tUTZkAN4Pu8XadnHz5TSkm8SkJz7wa8UrTWYqM2fLhKq9begKVixLVJKJifBvFq2sp",
  "key11": "fbiWKoaJt7miEgttrQQY8pRvMTcQHPpUdR2g7rGyPLB4huwaHSYxKsZ7rwyMvqPVa6QkmVvPRrMuSQXEAQrhpUc",
  "key12": "3JSkC5srxfM46x97zb4fkZ7uSwkkcDBb8s2az1hDwRuTAX2M8VpvBoJxgZruwu6uoVLVUiotnTHdMCMgud625eMJ",
  "key13": "6arYA2AcDEF2PQDqLwhkjhsjTCo1qrTCEjD1Dpqat5LsWqZoTixpF3y1iq5sYxpCH6rxX5k6LNH648ichrAaVen",
  "key14": "2MvY2McffnA3mFBqrfAkjVsGNd86Bj9VXaZdRbEszk5krnN2ene2FnPmxZ3KoCVUj9Y8wUj6i4CwefnV7zdFXRvb",
  "key15": "2S7SveVQ7P9fgjAaEQdkAVXYSG2onaJ35sYegPWDYvbBd8q7VdkWDRoneAcAkZdf1nvBufZnzmov5Q88xjeBwtHk",
  "key16": "4c6oufndfLEdQqwLa1dVZNAJ9ajXdZQ1fybP3h3huzQczNJMsGv69SD3SkcNXrPXhZC2gCX9RHGPvq788WAomQbJ",
  "key17": "2nJATYrTEvWibVZkTAG3mRzvTUWS3FKWdpeBoMDZKrrqV24B9vsMgVM93bXFhzmZBw2fL14J5AD3sTQTYQmea8m7",
  "key18": "4qse8Z4yJuo24Dh9ta9fxZ5fGQba4uhEXaFHW3jAfo21yiXUgdSWE6DzxAbFppsSVhyz8EAtaHbQncHkNRi6z1qL",
  "key19": "3gFB8kDh5w3ZSQGVAB1h3mYU6J21uomQamAcVGZBdAsJaeugqURLTXt1RSY8DE9MPKS8Ktsd5mjjyqHCjHjbNr31",
  "key20": "5rvSiRehD1nhsbZUoNpszYHEt7kMhKPbTML2reLjqqKRrZbCky6kHCkouM9JmptGowymgWgHYzu74z7fb6LPiYDP",
  "key21": "2e1cq9HB7ZeJDyk3zuCZYYRHAx8WERBYsKv7jQiBgkLQVAk35QfabdXMCoL9BKPYSJrazAEhRhFaa7F5hPFzcEnx",
  "key22": "XY7S7ev41FziTkiUB2tWWPGQipNXGMWVovdC7JU8GR29Qj2h1Xx4co4BFhm7mEcDfLYx8W6TqJC39CAWydx8xYv",
  "key23": "3WZMozaKcaMnaM85qNvYvUjWztmihTBTEdimhaxh3mP1T8Qtet674NJSFfrUtKohLsg1AgvsQH4u5C1J7FMyFnZJ",
  "key24": "4De56TKGpKz9uUH453DLQaXxjTdPqJX6wb7GQAQEd3hhMVQ4Zc35MAFNN8HWNVoGzrTwE4b2QFpyKJySoVLTPaHU",
  "key25": "2QtAsFR3qoj1UBWgXDtHRV7qeDnx23iu2YtWq287585ZhfwajT1TYPBm3a5UM9cszMSBk9YboqZMVxjtR8wW3TXh",
  "key26": "Pb7jAKg5CeyKQnEx7tvT2EcAtyCYYuzLUeLJJgD3daYYG9ndyaeFLjt1iufcWuAF5FrT7uc2AFzNNLM8ocD2qAZ",
  "key27": "5ZSyGhuHJU2S8PijbXJ5cBtC3KWYx5uDL7ZWMBdeCvKZDzfX8jPLLiTyML65DjVY77ijLGo3hrTyEMXmkAw1Wz9g",
  "key28": "5Vx7LSZynhgE5pKj6v51iTHR11ZbJwFayZtgvAp358fm9Kt7BNdzuabkqgQSJJkhjeHtg7E7M5g9vVs7gcCqRpqU",
  "key29": "3sX2RxBvCzu8CcN3DwAgp8vVSwtqq1FoMEoioU5Q1LQ2HJKVSEWtjht45qodUFnsACVBtek49e8pD7GWi9muxBSU",
  "key30": "2gckRtFSrBgSiUF2Mp7z9TFutEmkp5zbntDuRGueZZ7civsPu7aeJGyH4zC3FrfvUWhMcMnvMXGCQe8jGGYbm9mk",
  "key31": "5igyQquDXxLCFDu2aKeh9dus15ogeT6ePW2hLbcyadRQ2dqDPv6QWvH4XSXRZZPW4mUaVUFdCmai5Rxgjh7MEGyE",
  "key32": "3GaryU5SSMnSxXbbcp9gnwY8EQd4pyv3nWWmoFJFfKJQUniVdhVPYMQSEwL8SWNSXUWWRkrxhwBbyWWSm1fQtUzB",
  "key33": "xqbNdKp4EESxGQGkqAgTSdS8R1jTgdkvA9FFAHbPoWAPMjMJr6BPGVjaV87knanRAnsU1oK18cvrfxs5HwMMjPS",
  "key34": "2fqS7LZkmUTucHDBZrdWL9yufmxB2pRxcX6arWitKjRZJhoAvyqFxuHus9o2edUhJeaRPmEmaYBbrb8MgmPwLDG2"
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
