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
    "5jWGQEGwdhvjKCcqNihgUXbucGbRrmaVcDGeiSzEH3daFgMZsEJtd41ytB6nqQD1pDgUtwikCx4eJZdh2yXdkPFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vu1Ky6JPjXZ7FRZQqYWJ6WZzhzewBYiWsDnio44WcQcppjsDrviKoyLWjAMwxomuxCNb4VfqccHmc5vDvWPBfSw",
  "key1": "3xu3tYs2QHJczmhCVz6G82W3xXJgoL5itHvzMpoqTR2ZvNtaEaj6ejz47WpHobZPkgJDU1DscoX77fnmHyY1JdnU",
  "key2": "hkkELP7iTjAjRwJ7EPX2yPM9rPtp7s9zJxdoQ8XjgruUL6FLeikonZGXZnEiBP5UifipPMdiX3KwC84Fc5vMxov",
  "key3": "63Pjt3Pk5GjMypcgx9GtWCc77dLiYQw3jPGyZUNxSdcb2vnioZLtTKTDnQmUE5iLnx5jG4jms2XUmx98Wo5hM5ju",
  "key4": "4of8kd38at6vfX5wgTgQRat6SMfiKn1CaRQo5EWUNvFfNho9Amc4waNWYnKskc1aHbMCa7bLf8qrY8fDZRSo12kf",
  "key5": "2Ksf8nzCuvf7Drv6CoywAFjqbmcWry4hbhP4MzsSNA5eFLuqNv1rxm87t7sjn2thcT8Pu5oNG45rrUbYmfybGUHn",
  "key6": "y4Nd7unEhJitGhUQSttwakvbtwH6hSYSzsrNDyvAk9qH4rNyy3V5j6UhjGxByCTxgAVXfxJXHHta7BqG1WSd6Kp",
  "key7": "4VFtnpV8q7J7H23CnegW8ZGqNS41czdwcsf3TvTQcwos1Wc9Vv7317EdKBqKCipcy5qAbCxD3S9ykEpXebFtE47e",
  "key8": "5FBE1G48KLM4v8gdnTzUvSK9kk7CaSFYjKdMm7H3NBjBUYxTGhhmqXvphc15FG4X5iwcBAsmLjaVWZ7eyicLa46z",
  "key9": "2hv4JDpUp96aT2WVNieN39k4eR5EkZSS2FbbBMKyMzFMztMf7QKSC5QQkzTMY5TVsAjww9L2y5KNrDwRgh77h2Ro",
  "key10": "MDvySxc56n64K6atQJ9nNanSNHdK1nwMCg39N5Ga2FNE7mdr4jSP1jvyrq7FVbwdNwR37qwMeLgvf56rXWp7JWs",
  "key11": "5PsyriNNET9aszPwweJwuvr482kpzhaasdZei14eq87nsrP81FZrJzmhiUdSsZwoj6pBMATcTLgpxsHMLQXjy7Ec",
  "key12": "5k5MjcTY8W6NeWSiVLtwuVuwYnNaap3d2RRDmguTReLgTeikC3eBeXsw3vXU78y3bUkqyBdk7fcjXnhCSgVdtn2F",
  "key13": "3pCMQVZMRdfqLvLGaJd5do5wpTR8gaPCgADD2CHieoTu7Ltzax8B58Li3o7Qhr8Jms8rTHULwRPFRJrjXXnequoc",
  "key14": "4muBhPBFsguauYgrjHvE4xWJhDmg7x5uVwrGHe6ULTqtEDnjP6KseyCdRxTxBB8bEU9NmWBZcAsuxsCcpcGZ9PKE",
  "key15": "5FwNtdK2ezED2fZW2jiUN95nSBESKr9XtCpXLbmMrWSuoY88RV2HEYr2Hr8FwHXNMgivyEAVBNagCvwUFwchtVWF",
  "key16": "3g2PF4yHf1Tarrj1f6VntzFbBqmnaP4QFm2M55BmSauV9KLQHYt9jcYSZMJT6FN34NEPkn63pbBuj69y8YLTw8Pf",
  "key17": "5HvW2qm2NcqhP6k2QKyzYTWEqGPyupowvgQgoqpqwAfL76wsaTfAWVnKVeh9XLw3gi7qi4ew3xJ9GqwX4GY916Go",
  "key18": "3DvWFHmUP2RsJcRwp8tg8x65xmtjyzsTxD3WHxymdcMxK1TfqQRpEdukFJK18CSu76sc9uJiVr1PDwBQpZkX7fzT",
  "key19": "4xviC2z9fuPYQvNxunuMdRD1iuAhmFpH4pwUq3xFsMrmhpUU3bUk6jUNYfMBd8WjxJcsgDzBaV6ELcM1kTFNcd4c",
  "key20": "4Z5uUMYiiCYCjCUK6VKB3HBFK4CX5BiMBiuD3FThH6Y5TMCHCzYbLbLmLnq3mdKseiNX3QCLKh9oGUaAGeroATJr",
  "key21": "5f6G55bxPyccN1BaW4sM4BDCoACxtuzbFwi7g1Da5mGzMhTM9WdSU874odfXD2Doz3rn1s7PrTGuE81qKnrcpsPF",
  "key22": "csjst9Ua29JMvHbDbXLQGMp9nye4qUu9r64Lk6oDmaxXss8dy8fPwynbHKFvmJmcDLpy4Le7a43EjgtRyFzm2Nh",
  "key23": "2Ddei6YHgY1b3DwTo2verhBzAn1YqG543hs2iPD5ytbN3RC9E8KWfnC4GZQHD8W4MDCExqtzaiwd7vMXSf1b7q9v",
  "key24": "65GR4zN1PFCQfk8QMdWwXnqG1btKXcLGvKSSRP73xQQ3tYC6wmfqwnNXWCnqaYva2EUtUuu5suQWpRkzVuaDhYY",
  "key25": "4EXnue3ac3xMR9DW9rTX3h1LAnXMLuQbuwuAWG7AHD4ksodpKSZB47QLi72DSkLG6i3TCbkmg4rRVtcEqHaVuttb",
  "key26": "3H1zav6KF8LLnaWvgjHKsgQNktKtQA6nyqutuMXqPg5tstiXApr5ySxTU8VYYzDx66rwZQCNm2RghGFVBLpd7ZKv",
  "key27": "2qULVKGvEywTVQbd1Y2oVqbzNgJPaLfcQ3MpDLMW7zLg3CCwMWLrJaAzWueyuy5tUF7ccacd9N6uLCtu35pYNEcL",
  "key28": "53g1qRDacVVEPAFYnkm8yf4Vvmcwt8eUFT1oMBbapT9DxKWfXXF4xMD372LMWXvMiKoxeaykGyVZbMQozkcmdyCE",
  "key29": "uT7r6yPcS35xMYoBJ2tM6zVoRvpw4PYmmmJRgzk2at8i7s4A4xicntxDBPrFY3JT8TbQLbeD9KunKnPdHq7EsqF",
  "key30": "2UYVm9XWyN8QrbwGo65BpjP6SqS2kGDeisFt1EKijGNDZ85ScxvegMEnqbqhyDHiNH4g5zGx84GEhennXVyfJMes",
  "key31": "4qjCQAhEAfjUz9MVgGFwYiJfCSszTZktCoE9koyyR9ze6iBhdjwYfPvBqkqNNWmGsSAJEdQMXAKVMNyxqzPxojpV",
  "key32": "2WRrWcqx29B8BmNabWSLbJhbL4GbfsYZjy8H3gPGWLFyvZDGpvUaCwZiGh25kUZ8JPQ8E9Z4GHuWgpgQaNyN3gnj",
  "key33": "maMkZLKSfDdbXBh7EwRhyjtb2zbjzFms2mpLSjfP3qjpHvWEPURESTAZfdJNpWWx8cnkoQMkniVMD9hQ2wUUAVe",
  "key34": "47fVsXRjrQbwgB7fhrW2ihqXcebJyED3o7uGsXsWLnYdho7iq1TbwX54hLQHHNijSQURrsDyYh7K8jPEB9gMrt8W",
  "key35": "bR2UA2NW14bEwhkDppf3H3HEX5vcNJXRYUkrobE6UjZmytmnZoTNrCdWEuMjCSEEcZZiguHnvk5GfCYa6i4ePyF",
  "key36": "5g1wFLNhgDoY5cJNnoUA79suGCb4Dj8UKfF2emCviZPrco2VRDQaSAeWiiT5J1henVSvkrHgdQdWwmFXSBM5EWaL",
  "key37": "4ftmUYJDB1FeB2GY67HfskdRLkpWAaPwvMc4CGmc9nNpkk1BWQDVsCDYHzAPCC9gjrdF3ia6vnaWM7k4RUwZhBNh",
  "key38": "5e6SDwE1Jh5sjPQNBTbNu73j6iw7V4Lwt14mjN75FHCEgbtj1bt7KRfuW9B1398Jbu8wPMXNVkQGcPKskMF6PhUr",
  "key39": "4BuX8imwb6UXhXDRZ8zzb6EapgDo42aqznuvBsRsx8qHDpeNQT4TpwVY7U5XPhFDMqDv5KXLFtjYZ3EywMfugtmx",
  "key40": "2LsMM7xuBKuU8Cwxm7A6LMMnsAYYudf2yfhj8QxH5zDoikX7UeWKC8zYXhUZPB5mM6afXPbdsvexRFsf2ohZBABx",
  "key41": "4nXAjW84A9sSC4PSUb1pDexxZprFcDX131RYLXSsaJypg81vD8DE1BRM5qaRKXZdXwGaRYCeuUyri7PpqCRVHQJa",
  "key42": "41Zhrvzp4LPGMMimbRxHeeQsF7ozjqUMMNbuJP3DsxXDHKgAW9uzTkKnT8K1UdWH5KCe2NuQzJsVbWFW8ZFTzjtr",
  "key43": "3jP95NgYQTmonYAWyrkZeba9DnqS4bZym9fhsVmZevUDQtmDj7z2EuGa7edK49ngqn5CgW5CjNP8KaMCkM7dgrcw",
  "key44": "612bbLbzR2vMNnPPpqsQtrF97MiKhPYbVrmsL1NeL5rwQRi2bDvRfGSmaBjUFyMq37poBnLzQnntzq9UTErXwFNe",
  "key45": "4j5Lwq63j7qu9Cr5cukKmQDtnrdgRLFy223Dz2bPWoMVbYvJkR5QMAuBNpkk9i8q8yjYS6ZKpjGmDW11HHFawM68",
  "key46": "5EtqYMxeHQyRpLYgX7VvvovocWHJA8vkgvNY1mJMmJhvXtnMu6MH3KN7Y9GrdDK4yDoueH5ZXDryo5DBZNxo1vwK",
  "key47": "5YD2xnoXRr4ibVDX5yxYJtK4gekCceYLdWk5UfNNrydZEAPgzU9PX7vUVRHoN56bJ4sDrQeJnGPV5vSDnw5Sm6AD",
  "key48": "24a7UTaPVcFWsXMWt2fc8vCGA8iMnz1tRTGGSkfuzvLhtzuRBcM8Z8QDkjF5R64PrP3RAUXJtq1hGUNwM6TK4zon"
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
