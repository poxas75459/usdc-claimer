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
    "64FFCeavq8XHQeyZn3DDSKp8c76L3UmJo1bujTyEWK19HUh5ivbCiTR2p3yXMyteMrg7EGv3eHHwwHW1hLxbF3ib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64PeoQvEKK1A7qmDgfmyiU77QCEinHPndjagpGnopvbVMJNRBmxGjMyk4EScDTdzHQMMVGqxQyNzPf3RaTCWxB58",
  "key1": "2Vhz7r3VwJNJFAx7emCU7NjRFV7MaYm6872Ts71hCbPZQUKJ4uYZbXDmjQGbVhimRwjqX7w7zXGMTkbYj8JZgA65",
  "key2": "39Jvj87P1JEABduGg9K9e8AiXNqBce8ixKdokzCdsedCvVM2U6JvKCt5ojyJSLKbTj3b9H54mJz5m5ZiLq3DLDRi",
  "key3": "2V1jH4Na8jtmqVWvpTMQ7yKVBZRZ55HpbomLXmUXwV32kNvmGVJYStUTugWE1UxtAJaLLbrV5vkA8FijJyqTEeXu",
  "key4": "5ub4Cix6332vGspZcEauf9Qy9gs1wCin36YyMab73RhNVWHxefChYfJNsXHb78sjiZnYLoiPCAwvXwj7aAonXyo3",
  "key5": "35vrBxLRXBi17gvugShNe59w5NQFfZoWKWfxQ2fLAiRVJP7vNMnew1S5LyLKrFPsY14vAxqLyPh52q3YW1Ez5iRw",
  "key6": "6AwcrVnqHG64ojxCzBnxmfqsuVwkf6QwmNoeF9P6d5wFm1ydhYCxhKxC1vpwUyBNDfsmE9exrabDyJfJKyZmc3u",
  "key7": "3MZyUj1BFWHV5443SzNmyL3AQ944FzVnWZQCE4gnbFmnTYnAARrXqD6GsC8cMUeu7AJZsmZVPyN22u7wPu24XyUB",
  "key8": "54LhXkiyx1PoQaug4wU1zF5V2u61azYFWhbf65Lm4mu7vsUSSYCYRnUvtHmv52jbs2pXAA6jssLRWoNUW7RvAWaf",
  "key9": "5mFdfcjFScacyuCUJii5gYi3cixoctuCqbNU6moMJz5kEGBn1hq4MiiUaoZyFS7AzfNoAamorRDJFKEsRXpBbBxm",
  "key10": "3rL8LnyEaSabS9eju2tNnAA8mKmwzYj8kwrEXuzw3JDVnoAXb9QG3dkPd5aMkV8gG945sV8ZGT8qhA1HpLzkgg6",
  "key11": "4KWYAFRqkCPUyBDarrHvsBCQfynTtfxh2HNJFTZ9AD6RRbuCEL31wbgRGE6ukP3Tvt5wFNvfDQwULw5jeQE25P1s",
  "key12": "3bph1fZNTY9TqTmbXzNPaHV7gDWpjX5eV6nWbrY8Xe7TAo5AJDPoovdkXbrEnNuBjyEzmLgnyqxd4KeiQN7cLSiB",
  "key13": "3XLVuuvxCPhXUdafoZYyoNcKdJutUkPtdXXiYbatJP5zAeRb1Xts8oTLnKrH3omDps26WFogvBh2MTTi8C5eq9i1",
  "key14": "SXdgXii2cpywJ4nKFHhnDJovDQVQTnTK41Ez4pMbmqgmoPh9fMBjgjsfPFtAwm3bSrV7qnQuR9kpdwUCdZRd572",
  "key15": "ke4yKoEvoYytgXwQiwEh3Fz8iUuvWjVhQ39yWGdFB8SEVaA2nVTEmT5HH9RE16T6C7RmTnGoUqUrkU8BUVtuA2m",
  "key16": "3BwrKNoXPFXGaJRvbapRWJ2T8vhQo3VuHwmwS1YbHWnKt3jymob8Xtzf3U9FzAM47wGLrriJAA1WyZPomG8nVBb7",
  "key17": "3vJP5ZLrEN6ibJLge4cJM3T5e14xRzbM5FUoBCiHwjusH8jmmeSytkvFaAxxupiJtnamv9in94cBccyV3DdtsVbP",
  "key18": "3NgcZFCTuDSn8zHgmaQmtTdLatJhkQQxmAL3zgpQGtHnuDhu5evrLgUyuidu3RR5bmSWnZDFiwSZSNZDyE7jTsMd",
  "key19": "S2pwyw87YM2cjqgoc7gPE84BaofMN4vaK5mnWuhLK8bCoWFtP31JqcpG97yxo7kxYfJJKdVoo323woziMYz1vxc",
  "key20": "4CR1eUUN39f2nU9YN5ivMnaoq5fQgUFLhT3nrZnM62FJWLG3HcwyBPLKLyLtJ17HyhuWURT8jx1yGo2LujcqZwtE",
  "key21": "5hkwhh6H2b4Ty6LVVyrrKozYyhDp2KwnZsZ1LSemFVeYsgJXUPUQKkH1j6UAGDL9kupcn5nWXT8hKphH91Tz27ZL",
  "key22": "4MVAjXasA85dTERkk2BLob5QjXzsiHZmVHWyVtXHXB9zh2qDW1xs9AhCc1S1FiuENEM8TcNgr4WVnBgwuLutmuMA",
  "key23": "3eWoXTMyEvniWwVcfJwUuZihTcJU7w2HwSPnpu9Ni4enfLnD9uMSoEsCKJe3YRoXEQ3ACGjznn7FC3QjVN9a5aee",
  "key24": "3gAZnoEmiksHqXbGVBRUZpFk6kLEjXSgoc9UFp4aRW9wK1Dk9LjzbD7J7qomubqJufVoLutnZrDZHUAu9A8FnKw3",
  "key25": "4aBBiWoz44WJfH61QNo1M6hMpzxxR6irhh2598R5P6urA4jfLbwfs5YNFSib7iQeyBEuFv9anCYqecGf2ah1dZs6",
  "key26": "2U8TCPDaQ75RMq8EfxdEGQujFYo5KswHUodURgKrzBtwheEApXTYjj7k6gpSeYA27peopzU1QPazGRAPS74qs7ND",
  "key27": "3WMzxqmDfGKG4pMizqCLSGegKqsyi58ZPNsLCkpQghBYHsGSofnQZ3rTiMsqGLfP2jAxz3kUpS7mQgn2tSW7akLf",
  "key28": "4c6yVediQMr16ofz1Exz1bpwMSMoLsBScJUQsFrXR5jyMzrBBjTvWCij2UDXT2TxtKFigw1RTsDgHb1C8hq5EpRs",
  "key29": "5UWLhpHmA2Uyg935KdN4Mt13gWib4M8gjSXFqTA5TYhwzymMfPhLGqPLRFTChJxcYUD2HNwZAsUT5CgLrToQUZt6",
  "key30": "FBcWWezPtWy78kS2TVGaUtQsewGy5jHBKwTh7ZLEa3UeFhUCbFXQ3dXijhPu3XchD4mZAFP41q4Ci23XbbJhART",
  "key31": "4AHzqtvF5qBpz9fdhtDASwpikDP9ENimxEfN1JSnwNHosa1ujnSNTjreA4bZHxxQDq97REnU6fjp9Gn3CdhFNMHs",
  "key32": "UozN215ffBHrB1ez8KuD9m5M2a7BxBM15XNfra4FPB4sXaQoigYPJbzgZTA6K1Eks2A4pouP7iCx2vqvfsnYr28",
  "key33": "5xAbMYED4QdA7Q92PqaZCsnQ2xGFV5h4oWJ8oXqndLkRDEeq7vTpq73MQ1HXic7mUq6udX6fwwgLuHhr9WXyvsLP",
  "key34": "4THkWdph33aebzBmyaynXAQFrjVtyey2JLqrQV6gasD48rSmPqeKYoMYaEq2sXyFTDp2AvDmiNQESjoAhdiQko7P",
  "key35": "MpyNya8C6E269BB5zR3BosEpyzSUi1byU3Gyh65RiQMS5RxePQAdozWtNA5KS5ZXbPR9qXi9cGowfRWhK4miNQn",
  "key36": "eSnhj2UkxPZ4gFcZa8HueoZp1d87W29HutYMAei2vn7dTfcn5XQn3wVqJ2t8JXYdNaGGxHvBcx98Xo7r8ZPsFWg",
  "key37": "4RHR1Ssyfc1bMjLHXoVW56GyxdJWc3fHJrbcUGQxhdnCVtcfmMTbNbHt7YqpNrWTpU9wSHst7XVibBwxHrtFK278",
  "key38": "rvtmAdVXzPsoASCwnGHm4eUpbnL7Wviz98EU2GVXNf3xUYKNjovLhWWerESQ2nZZWP8RcqwxJpcd8CH1Ja6oUdb",
  "key39": "5wBidEFPzwxx5VB5PpZihXHu6Xq91dC5KfjVdjkhQs84swGFZyMPQMjgcv64iiumgw6KGcLFDBjDWsW2rRe3eamG",
  "key40": "PqyzrVeb2KJK2NnxicQkanWeTewvUD6XTweGfAX5GYJGM2HMRtU95P3H2exTq7vBrFDkXKr1kVCHNaQHg7VttWB",
  "key41": "3eJBTqmz1igiUR1hNpscFMJf6u1YzjBNKtt1ZtM51UbfR9HeCaFit8FhhJDhx2FtnUAwXfeFFU5NnMjwJ2AaDuJG",
  "key42": "2iBiaxvXs1frJYZzyCKzduDv2Fnw8BcjGn1B24dkJU1tvxKgJp1A2KJCdrTidUuDoJxv85GQSP93aE17PGsqWfVj",
  "key43": "5itMDW9XAq5pZ4qqv4QB3P9FYm4v1qVG5fYRRRGmCC6PnMBHUqLSx55bmEMRvxJ5hxCQ8hpcmuJXe1rXYirBm1Vy"
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
