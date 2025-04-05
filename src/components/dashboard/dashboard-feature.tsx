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
    "5Pt4o7utPAGxHDX62SvTvuRWEqmsrky7PGLsEKpU312J1ro1tjV3esjZ3RtdaqrQM8vXUNFELcMsQtq13CYrbE8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4256hSjiosFespnUafmqmbxNGeU3gubPH1f9GoLropT5Z6NrSUYA1hc6u9kUVrQKXGvvar7aTtCV9j4S5bNeHENe",
  "key1": "w7vHnBzAt4ULZFAiMkf1tsh47HZCG3EpuCoiLX6Z23FiugyDQK8xvUYPCQ3s2mUcWFrDE27M8G6cbQDeYKLR56e",
  "key2": "34XGnHar4a9dAurfxWxa9B3mUHZ9c1ESuLjDS6m1K84hTfbH2V4xSU1BWA6ZLHYdFysHMiyHzvcRYPLADQoFkvLM",
  "key3": "preD7dGjGWeZGFpHiyWXmrdqZP6MRAjmAaCWX6HmCcAhr33E9An3LzsebaTSvJwYZPb2tRmUjYB7vHTYRDzVc1P",
  "key4": "2MsZJRGQvFuf5iBUnnfYNf9gQshXTwhN2VK3Z3ez9DNMG7xhgjrhMUgxJ2siskEeVssEN6MrMao5567F7TCRds6j",
  "key5": "5BB4NNGeYdAw7ttivnu8Rj8TLRNhtpVTjb7ehvyS4GLykh23X15VcX5sVHfQ3JnBsYX94w7AMwXyVSqPYgA7cjNW",
  "key6": "1BSReAasEfBA39ix3jgrx5aPW5dLCNrHqW4QwXfWf59DC5fq7Am3uBQAQysiQa55By17mPBNz8EB6KnVvnfBCnP",
  "key7": "5XHdWha1iqdqC7qqwz1beHcojTwcXixU9YRb3dJaysYDWdCLQjQnHpW4F42WsFazCnjcUQoCusv3f6dYyMyVrBiq",
  "key8": "3zSsM11SEEbZRgED2C71u9gnHhkcDuK6Rfeqypkyw1gm5KzQJteyhhoQ2kS8rWLbrTpBfDALRTzhgqdwWkguSJXD",
  "key9": "61ioTKsmsZ3KCrLhXUxAiyQdFyKbMSMz4m6qzeHgrV4SWDt78WXcZEo7k27MPDakLb1sUAbLnAwFASLmKH7djNa",
  "key10": "5M6cLieBFzEaSkNbNsdUzcVc5ghsWWuG3wSxqFSQcuiJfQTq8FzjK61ahvvX6EgjSnrafJp7meQH5xnDsoYmwmva",
  "key11": "Gaiy14vnztPRqtRPiNTvsYbHj2CUGBBnn7WkNWh5fwAsjhv8NDioh2Ug7WYQFT4EX1FPan6qAQX48RnGRbLpWAi",
  "key12": "cdHuBPaHUiEgbZpL5VWQiy6hLSQaRahUWVxQ1Lby69ZmT3wKwQMpgxNuammsS7oqeVfVBqSSaXWpHNjZxiu9mxa",
  "key13": "55BHmj3DiwTNsbu54vdoBnUTJjgqT229WsbJCkYE5Cdb8qxYTVDzyhTkeTXi8x2YVn7wyGajqq3FSifokibLn6BG",
  "key14": "5p5MGB3xEPz5hjhyy5e22gdni6hEHXY3Res6tScaX3Yukvyf9Zy7zrJ4i9mRwFjsmsUqvHQaasNWFqfZkepcfvWT",
  "key15": "WcGc9EZjDvrE1VFSW1NMm9wETS6uW3LKQLu2jjmSZ7sogki912pk6KwoRcv2tpfyParbnn974xoHegz3dYhVH92",
  "key16": "3qCuSEvnFTXr9tRJ1QrYLTUPq1timpYHusrULxksMTZeaXrWXL4cRSjubFKGQCwzGnvwa3g56jEhJUyHTu3jubmi",
  "key17": "48JUUQ88yXJqF4JF4ZULwpmRHGTekyt2fKtfCgt1v6JvfQQvnekF6CL8pcBRvedCh4SEpkp2oWtdB4zHGUEUhU5a",
  "key18": "2nujQrzZU3WeL9KHPjTJgiNd3Ghnmcmg2ULryVDCrGiu8kiTTQGcjXYnEYij47tKD8XoPMf3rTmsw1Q9UmtkqfFn",
  "key19": "5frnbjKwm92oefcrJzHPT4YkRazpgTvwAdefRYR7rcVWUmRQ6hF1FdNa2DggX498LVHhnknjqzi8VX12UQZK9HzW",
  "key20": "3jZkQuQQuo27JTizZ2frSRkHLzC77q6GuzpArd4Ki7nwzJ4ioY7u9uC4GaYxccGUoNi7vusJXmwgynacWLpMPfWt",
  "key21": "59yJ56kV9CJZ57C9yAAHVsv7gckczwRggHBmuKG11p82Wi76z3GVpZiSo75mcHw3EM8ijrDwdhZxiwMjtZ9SyNH3",
  "key22": "4o2BsUdb3KzWYeL7UDhUWiyXdBEtmXdMnvMpycchMTBkH9nQUqG3EJdcueFNnprWuJNkuDpYA2H5XNn7vEQ3M7ps",
  "key23": "3Sh1PHB6sZx7feeru4dK8HTC2iSYeApfwUCA194cUCJYnsj67jb4VmwrX7roHxfEZ48jeC2mJbDMoe12WAeUndKr",
  "key24": "4hQ1MJPDV26yL8LmMNAkJMGJxBqQYEj64wsp7TMrKDDE7sPUuYkZJNYKS33ANoG3Av6inx2Z4aAdPX6qKBb8LgBu",
  "key25": "2AgQtQjVhyMLAtSyLWQhwnqBbqzUQRzagMyHiGgqadrR1MDsaCawxQGWT8gqpB6BwqrcP8QRa2FqtuA2KgFvqseR",
  "key26": "28beAoNnCfu6v9NtCq9gYZtu29GRbRD42HVVRTa45WNJBwybd2KorJ9NtwdE6ZcenXvNK9GV9FNaH5gK1oyKMDiy",
  "key27": "4xYjNZZe6iwzugSFgTT3Zu2K6bu8maA5ry4AZHPvShRpXwvAsM94WsAx888MzA9hmQ7sGC1BFjBojQoSm6fHSR7N",
  "key28": "2jG4vbBxQpsJ5zYyc3jk8t4nYwnv6iqNseFumv3FFSkrGuuFMuTDB5U7qrYjPNWYDQNREFMqgQWUCvKt3rPHAcxj",
  "key29": "3FHchdAsy8Xrv2EAFwRX4D6jLEkuyJqcaDtFYK9GhF6EWftsmeuP7AhcHszLbscLaieSNuoqyRYRdkptq2F9M7HD",
  "key30": "49N3VRjwhdG2wGMq9VaupwcDegrJPa4bWU4JSbnywTGD1SMgtLHMfcYiUQGb8NMhvJdxTmQMUsNLKE8xwGR346pM",
  "key31": "65dDFrFNf3eFnePiDDfhu4nqWSUZPowo6aGUv3vS3u8PqGycufF2ibU9xrUshf1MLQ82S5T5YUayVS6taxcw4ikb",
  "key32": "5RnEN3WKMz3Euia6KA2QVmdAwyAD6z6zKLwdKerUdHuDBNQFxQUHYgceZohjbTUFW1fiMLuyphcxocFdBcMVFFJ9",
  "key33": "246saiqBxtoNDxpNCkoajxuZM6oqkJVH4KpHoAvYCLgtHLiW6LXTnin5jeMXp15fTwTgLCedpS6yzYhCfA7apSMU",
  "key34": "jjr1nDabBKeZyVEdEdJ55aZAixFQgTPVXHKVPnTfRGafDcUAXKZJcbygh6oygKe8XEGPRuGfQtUhtL9qLm9vWdw",
  "key35": "64jxRjUU5o6G8LhE6gQLpkEeLeMKFJhyP3bhp9T9VJUENVr2PYHeGL62cJ6xRnY5GdVT5HKxuaqqvR585zXG2HcS",
  "key36": "4xGXo6JJa8cXECuTBPoHXrPSyxiEpoExmrNS9yDkZHSAKJ63jUjuu8E9XWNNWm2WVzhHpRZ9PcMFwUeX7uacJMGt",
  "key37": "3M1SymQdBKmvNSSecuWgbsiRECAVJnEaN2o5KtUT9Ct1Dsf8cE7tHC7mFn2aiy1ENzytR4nGcUqHWcLXRRLDtj6u",
  "key38": "3MJ59C7eXzBjZNvnZkdYc8k23jx3a5dsfURjmyhGRP9iJaWgY8C4byg2tXHt26Q9mtsAmaZVP6GqeyNUMuFo6nGU",
  "key39": "46wwrgRyU3MTieTrpgPY4PQa91sixTSArYgRKYKFr7oLfNYcK439T1zriTjfCxnfseoYLghr6a6e9dgTncBfNw73",
  "key40": "3WFXFUzrJoPSkBcowWU1BTNcfT1MaU2tCiYghmaGeAcKDBrWH7jtWyuZPDh9rgufUgpyX5FtNcZudhQfXGUqw28e",
  "key41": "2vqxSMoG3NMpY7BXxD7U9cyfP4Y3pB8nL423jW98NRhWLWYei6zyJB1f2SE6ms8gvA8hhtDmyAkCnz24Gjm6sWbU",
  "key42": "3C8Cg5f3ssSD744zDhziHZm7NezDAhg2L2CKbNFsAeS5hje3kMwyvrVmborGGajbcCZdrwVsrnZXkh9qeMtQ3mUq",
  "key43": "uc7Ny6PfcCWfcoXTB2UHxJgEQERGw2Sk4siSqNZmHvsaRaYvj5Z3rNTGsrRSuN5QKBQHicyvBpKPXhXX4ptcUaB",
  "key44": "4GMwKY4V5kPWvXTSHweYTDw1SX6WdQvYyh6UwL7GgHoxFYZQgjpmN6KovZNPEf8uGLbrVwBkmy9QHXYsiza6hdDP"
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
