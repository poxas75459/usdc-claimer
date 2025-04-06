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
    "nhWjpB5XZVbGcmEzcqKBz3WYgcqcetzFFRjwBTeB3veMwGTjGTCqR3JN2mFkvaBgh7E8ZrE7NVhvbAV74usHCu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QLXfZEfA1JZDCXkdpjLgGGTvSrvWxCE5W8t44gPu6gZpaQGHEwvp8QS1BkcCrsHeuMq71g9GXUjHhBXbwweXsCH",
  "key1": "3eDTE5yEfj4V9nKrmhAb1M88Ust5rMAhSE8GjyprJJCPh75znjRZnCjwdLTiYqtCaVCCpmRV1dUDN3HDXQau1GvH",
  "key2": "2tAUSNLRUrZ8qpon24AskHP2gCaszNJDheWm1YWBrZ29ZvSiUVcpBbRVMA6TKcYZaZgUyQSyA9hxLHdJAVTv7TVP",
  "key3": "2Wgs25tNVZcPYdqGyVKdE5uHhrD1PZC91F8kRczxrhqpKnRjYoEZ4c2p3GfLd5M5wnScpDZ5GiF5Ste7bCVaHZZj",
  "key4": "3K8fgtq4oH92Q581MNmGzzy3TXyK9h41tuYCyX8th51wPxmy2QkKxWisb2sqFpM2KykjiRjLfU7tBRVnVpvc3egN",
  "key5": "GgNoX4aeJTykBkrWwmt7Wx3F2m6jJai6Vx9c6JX4ZQon5oCeCo65R118eG1CPMDR49qFjfFuxBJZnBWUSosWRPh",
  "key6": "1vr8pd4AxwZcaLo5RWcm3JpAzv2LcYF9ZdaXd8F2bqifYoUUX8xLSg8vZ9PaS9rMa74mRvoXVgGSSRGwsFGoUW",
  "key7": "P2DAc5XdTtR6PrHz1qMCua29cZabAfyRPbthnkgm5RYKWNHJjbteEw39HES3ZQmhS8EJmKbyS2C4jp1sm4x7gUM",
  "key8": "5NDENby9oRPvfLWjCDjU2xdj5gTRdkrWKEPCGkuLK5LrJcShQaD3oviSganmtLf2kAD8AoycaxJ8LPCygyoXkPU6",
  "key9": "PN889puqfgheXkWBYNeoVhxcYDhkDpGsQkak8C9dxmbhQAGDiSRu3HuZ5SxXzB48QXNGNSoXj3JoDzgmxmgRDuB",
  "key10": "23sk6JVp4ZQiKD62DLEW7ziTdkoHv9rc9XPJKqCGLfsB4y6FSDKRWWoMRQ5Sj2JrddvKrCHoNK5pGZBWQMzhiFdW",
  "key11": "451iwEsuTm1avXb6YT1R8Vzqp5KBCkhRtg51Rapsp9J1eaDPfNdcy8dL1qC2n5zWaTNj97T9Ntq6EauqmcyYiAxw",
  "key12": "GQfGhhMSg3qLpfg7NtdwV1xrK1cFjpwE4d4RbzD2aSzveRwEByVNXXkAkgpVbpjAnQQRWTHTDEhLw4xEzkQ9ybn",
  "key13": "4MjVSPoJ3Jg7ekcYT4XwJeHkYgwG4CAakfCELKbHWE6JMvzkXLJfgEnDz13VGackXEqz8zNp9XZTJmsLYUYYGfKx",
  "key14": "4BuT1GQwaCg4xTsyh7jRkrpo7DJZg9x5ZjfBjJqDxs9ZK6Q5DStBoYrRA1dXxaszhzgj4mEtu8YqPCV9HAqcKq9r",
  "key15": "5fs2rXz1XbFbD2hsZJuRdmagdV2dzSNH7nFoeqNjVJrboChctBuheQzHQWMm5hxL38UJGQjraQB49qWPfPF87iSy",
  "key16": "5obmC2VYoorhp3SnQ8VRYf5txPm2kRPL7XmvSaK7t5DXhG2VEqnTxinVgAX92ptpAhnP5QJdYg2WQjLimT9tWifH",
  "key17": "cDCqMF35L7xKQ84rhE81HHa8bfi3G4VK1XMeBzixaREML5to845ub4iP7JzY6ceBrbqWmGqP7EWRUKwoyRQzEBH",
  "key18": "3n2ZdhcrSLxvr2rzQDd8kwb6XVuoLGwXURQ1BgyahHXn8Bs7N7J7J1tYKUVvPhFfBv85RgjhPtbUPWDS4svVseP",
  "key19": "2fodRrAZ5f9Rm8zK7JTuEyQmetBEtATDU7wLTXwwTyh7zBpLMiThTvqpDLqEvKFkUvZpBbNeyNMkcx7rHN4uAA1r",
  "key20": "4pavg3adQKqvJWafdE9X9o1HcVejK838K7tpSobyPS6CbpgQBZmPZ9QL2njQd7vXCjayeGdTQRhbD9yiRzx4CRzW",
  "key21": "67CcMgtZnJj18uutgK259EhkeHPE3UMyWy5Vuh2UBvqgjqdXoZa1QTbRCGdpVZZzuRaigMeh2nHVaHRrgNP87Jzx",
  "key22": "4MqctnrrmnaGCxPmmNwceoK1PhTBv8B2t19cRjTu5uAb3GN9XZbTeXjXSXrC6BuTnzgrgRWGms5RRWUXb54gZdJw",
  "key23": "2bcDHdxbeZRTED1gVmXoNGw197785mFYQZPM3AnCw2MvwTYRuUwJuertbtGetN8Ffh3w4T513uXXziHGsZ4Ai6Dh",
  "key24": "rp9irPbaoBn2jM4f1D2e5MysWqSm62xBekmqzE6BwjunrKPku5aFHgNyyMLAjeUU7ZjL4gzezxMXbcumbgQ5ncx",
  "key25": "3gf77gdLSjHsnr6HrPHSr7FWwFKAkhaHwWvi3F7oScykTPPGR3ECovtNQ9MG1zHECy5DxPmCq54CzhZtsosXqbUw",
  "key26": "UJiMBJ11w5MhCkt7fNXpMfiCaGvR7VfZ9LXXjuamoqby6nYv1Tcd5aaNQD2ZAqHZH7JTzCAdZZEr2SJ2eXq3BSE",
  "key27": "4Vd6mSJdmi7Jg8PRv86cYZD1pJ1rq7EQ3f8j8idNAcikBwwW1eGhzGKWMmEQApoDV3DjHCrPrcNxD8gPpz3Cygdj",
  "key28": "4kPautiENHp5we5GBvxixfEDz29o3ZJnGYyV9oWbwUKY25curL1gTuBXvcQNJaPtNckXHahWzrSzFsdeKLudsL8j",
  "key29": "3nasundCaRfkP5cc7jxW3YFXnzakDTGqQMghkpw2eYv2rPn24tiaMi8YDe1vWt1Qh7u8DSdmoGAcSfp5uSBmqX2s",
  "key30": "4WivKM5vmeTsDGmwQYGhfs4GmXnJwBJozqWyEpTSKP5VmpvhmhsGyd15Qa5dkRCF5UwBsDDBwFN37iW8cLgLkxUK",
  "key31": "43qyHAKJPk8y3gC6RYAuAhQrqoq2Tt7EWNJfBrme2vaMetgsgzBrciLKWm15VzmqzknfZPe8Mzm6pqFuAsvmiPMz",
  "key32": "3zuzWRUWM9933h55C4Bneq5xdGNtXXZTE9X1bQAC8ApyN1J8HdhLXovKB3pdaESYw4rPi3XSVDUBVyVfBBbdThNE",
  "key33": "5TzDZjne5Apmrh8b4TzqrekvTtC8VhyosaqizaAhqNoSkrvcFSb7J1fx9BCkYRwnADW1ApET2wbePJi66AMdeo47",
  "key34": "3qDJ3BeKSreCco3Z3xERkEt4qHnU9DhR4GHg7XPBgiDs6ddv1jUnfzeSR8yosCTHouNTYvn4N2hsPQtFpve6vx2a",
  "key35": "9Jfm3D4TKTYbkRcWuBdxYwimmmS2BL19LGYsKfx6dwYxvZGmVqbewL3ZCKu6dH7iQDbKzyxY7cAQBhAH5Vofnja",
  "key36": "5LoVRwTrAD8GxSuMrUJs6Z6HtUNejoyf5vH5wSEsv6sQBnyMFbh88tYC3x8YZdyjR3zzEmdiNbLbypSVjR7UcTq2",
  "key37": "4ToA6DmswwAoFLTnUSJfm8UHRfXsMRCCWJYvrJhBc9KFdYgeV8e6nkh395g8eEtfzMwWykW1A8WgkvBxn8f2oS9L",
  "key38": "42c64myDTt2HASvFDfHEj4k8AC8f8jQjY3Zx5yj2CqASscRGEab8r2MYub9gGZPhWNNTnoktYnmTvdZVgfkdijrY",
  "key39": "GQBdrjcCM5xCZfu2oAwdD89AGyGtgmMBbRJtJHkJSAqggkSqoc4aQWwcTJpMJ5TDgEQYXhXGs9nnBMRmBC4kn7b",
  "key40": "67k5y2zttDjVThcCzVAZp1zbvgwVw3nZibb83H8CapYSszWgiyw2PQgdxrQTxqrGKeCVaD8yCmzEhE2vuicb2veY"
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
