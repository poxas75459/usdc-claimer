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
    "5cNvmR3uwPsubSkjde8iYReRnGgzqjofEnsK8hdhaScnbqhRuPP29LyFNJXkzG1HUXFKMuWk7XDX6PEZyCrMHJ9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NTVQVjYDzs46SYufikengrddicT7rbqAtB6Wj3H852RHBPRa8HffZk5MEJqwquT9k3CdTkH2rDNuxHU4te2meX4",
  "key1": "58zQyMYKfCBs3osFZ9mbifuwdAM6Jy4G9j8mJNxN9Xu8CzkHyrGBt1GwfCtL8wxJfSbWt2bfq42cZ3TCdFo5QgsM",
  "key2": "2Y434eNDtt6qR8tkriqPw7QEVYS14RykpM9wEWYYBHV2pLf64KQR2q6rgN3HZXVUR39Bkj3JHcUwZAv6JXbHgy8t",
  "key3": "3FXnqFQhMJxZ1jAqpx3gLkw8YoYrqQaoR5jH1pLpP8uTbmjXddnW3ceD5ewyhK4Jh8r8RVdvD4S33DbKpnYUc3y7",
  "key4": "5LrDoXN73HdoHoxnWGzjpsUBqMEf7Mfz1FGj2jVMUZX2BeUP6shD7GE8dM2F3sQeqMjoncDx7PQY1RbxYysAPcAY",
  "key5": "667ohKpDEPkzoGxYGUJzipYC4tuWFDoxTQchnwn5nprsnbrC4YDcBVnAUwbzjmWUzpoMAbe1GEv6M8oFPEYLo3Ws",
  "key6": "4z9m9ptbM9oowigRTPKRRsUFxc5hCdwvnQ1yAAoXbaXcdohedhMduHDFv5zGWBzqfmEQLunWFNjnETYKcEaHJLMc",
  "key7": "2kQThHAzf731qNaoq9atNo5TCudtE9RojU3vwqcAtCLvBq9uaUxyLFJaEorXrv7RXjXyCkN8RiLUmXFFcVMv8T7d",
  "key8": "33UzW4yXYxVxx3x8nvCucgQiCemnxqWMGheVu4hrrfVbMXJuo1hdD8awWjRHg1TzAXpizBf6LPPXbEcvrMsgKajP",
  "key9": "2fygygVqqrPWvn4FyvaEdmyif5kgVGEgDogZkXtcaYiinunZwTYfmujupBtQunJa9AaMzxc6VfeH4Vv8NTxcoGEx",
  "key10": "xydRDHV2FNch3hrsPWK1Ln69EJ8F16cMNS6nrk9gH6obBKKBE29Bk8kSyaDN2eQ61BwiommZSdf9tf1rwA6WR6Q",
  "key11": "3WaQxfj1PAvN7kjzQHARtd3oicubtWYiWCh9nim6DjQywQy5vxaK4M1FnpU9d9Y4xdhKEiuytNX5QVveQgnL8CSw",
  "key12": "4kVaGGFFYANQNwiUaE7EmuM4Y1VZMwrEhnYQqzch5Fhgb3pcdZULaYuC5DbAuWtuTwNQXbTR8yf7WiyU78YXFC39",
  "key13": "2Zc7vdbhefkzg6K84GbV9pdWyCa5Guedzien5kC3pCFCuvpPzvrscxr1nLAfi4S1a44fe8aL15y7NKZPyA9GZJnQ",
  "key14": "4nMqcUUkfQc6idykeFZv7A7HnRcSBZtwi942RcbKvrozZqZ8tsqn6nyH2DgppvgYH3Qhf3Z2FafeH2cAi6okg9nn",
  "key15": "sCDj9iriZhD38nK76n5BaL1kzCV7CZ3CgPztYBK8joQLRTihRwSDAiU8Mu72DQWo4XAQVgqi8VsB7ifut3ywJYR",
  "key16": "5TXojxhk5CWXBQh9YM9D2X6nBEYwMMtgQKuGFY7fCqzcGc5i4FaVaEGsrNSQyBzQPXe3uXDtBNt1HU6xefpMxMA5",
  "key17": "4qCauXGh8mqQ6cqjNLyouk5Q4YEELdfJjBCworDiUzUQpntJ4NtwBZNG81mgbPUbCLMFECC3nrhLA4v7FsJ6v8E3",
  "key18": "4fidFBC8CkYViQ7nif5jjuNbRH9aYBV4eN3Wt41bJHBSpbCfhMqJ6Sv7gWR6Rc9wCRY4uR6EbXZHyRiyJZ3RaiAi",
  "key19": "22kGM2HrrEQ31KEU2SxBHrZs7Jof5rWmfrYRUADkSknKAzu2G3E4CBBdCGWc7zv7fAjYfuBgs41DrDU5nrQptpUa",
  "key20": "4Ai5WifiBc5Bub95ph3MMN493WnhsgMyTFAxJquW4YjpKjz5iqmZQkJamiBDEZu5LVWFzq4y8SYfQLjMtVAVDBXV",
  "key21": "4QKmqaLPiystZ1HLGSvAc5GBQ8gmiMVf8AQDgidoWxq31Z5BwopNBVAVU6y9YjsGFfXwYahSKRGi44W5ccku3FsG",
  "key22": "4vP1FEWVdEnxd2VxEJMQuFUTqFnEi9bLmoZi1DaeJX7dXc8z6W47LUxvZBRd5FhPPq1haxLb5AmcPyGwLi3uirHx",
  "key23": "252JFRgfpnG7KXDUV3BQFpJ94CQSrn92xKk4AwViyNbGsEjxtxPs4b7uaPdopxDcDgnVYmmZG3N4G8DZah8b4kFm",
  "key24": "3N11m1hhRbU4yE4xqDDSgyDgtGwVbbxrFg42ZyFLEZwn82WRsjMEYjz7YXvcuEAzKgUaHMdZm5SHXrZGGhxZLvBs",
  "key25": "5SaswKUR39pDLeWNRrvAyd1jGEx8tzr3nCRojSjWdZLk9vvHPbSxdFYJ1GUGdX8UDtJUvJCxzFBZaSftriyUA5hz",
  "key26": "34FNZPxh4o8s1URaMLo2rv3YgnPE72qrmBMrqb1u4mmpgz4DCycCTXZfaH7qykd2EA6befoW5EqWkTgWwcbecFS2",
  "key27": "3AJg6UmQ9gZ9kVquhQJBBY2pMUzyaqGXFjaFDaYxSQALLvYEzH1pDxvwBdRe1X6VriaZoCXydHHEdCDBQw5wjYez",
  "key28": "4wxTaW4u6tqGPEV7TgMxd949pxpj4qJT4QsjicVcs68r3SZ31GVuqGZsoBZZSbQMfJzbk227KPJ5thcbgZW8wPzT",
  "key29": "U1ZvBtQXTT6sB14HPFsnkyHKQAgULQmbmV3JN8DiLknwczALNbnPZsxtLR7cyKoJ6a81PQ7cGiatzbYxCHqQXo1",
  "key30": "5AqxWtF72Na3rgLyxgFYrNENMNWQ3UBzHeQAZo67Pkfi82mqH2KYyWUS9z1tJyfDMjqQUR1BXvqSK8BCdY7YTuXK",
  "key31": "5f74qmHqvBVu8TUqDdowRWk57HRoaev1kG4JPdehCx7QJbcAnGssvoT9LLG6aZrUPqBWxzoCNH4yCSZ3HdgTwvyF",
  "key32": "3yztxPhzFeVDLTjXrLW9pVQeb7p4DgB5LmzYRPXYkQU3x1DwUCVMWNK2UCWKnHTQftvZXZVsJ95J4s14KKMLNzfS",
  "key33": "5zMQmPCJJCpDx6xveKzmrYYxv9YqHhrExr92Poc8TB1WcUcHMGcuZx8EJQxRntAwqJhQc2fYAWv6W2RCYbUrfin2",
  "key34": "4Y3xs6MP4of9TgdkgMDrstZECAts8yfygiQF9oeNcJnTF9ffDChfqcUq8iYs72SduSMyfyfgzSDjv68M5QGhVDNV",
  "key35": "oiPSo6Wms7DUSdJXDrrpESbST2QvtXK8QHCSNR69KgqXbnKBGCuLCsbB6h6D1APhi4KmThE3kptfrdHtwbwmjpS",
  "key36": "4KdPkKoDzCgfsCfttM5EcDkogHjKCexo2oLZ4g82PAv3UeXasx7cdHZqHucPRMFYovsvjqGS3CGm7F6mXbR3pzxc"
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
