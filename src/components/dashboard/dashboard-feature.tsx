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
    "4bdQhbLwmrgp3gYymsbRNQaxgACd6SM6NgadgSYvKY1EoP3Dx4GrVWoNV2UCvz39DpAtHV9BLmaT5e5mWGc8jWru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yuz9C3SeQZ171YJQJUxP7MwFh9ZgNncHypuh7hYamCR8TFse1g6BKhehMrEhNCwM1Nwpb1Bw3MHuiwK3VpAH9ax",
  "key1": "ENaqo57VySs4NSrCxWvyHCJkenas28wYsWzimpSbH3iZFevbfMH7jPzNCwkvEiFSQm6krJv5DgEhTQoPuQJyEde",
  "key2": "21rjGoggs5eqExia6fo73MUdDJvgZ7HY2UXwQKyAcM5pzoGvHwjDVxkB9Jtfv5Ny6vdjTtQ6wVLrcEiexRUd55Zk",
  "key3": "57SNCbvWweiGdGno2F6kvPjuz6a3NaGWGFuZQLyVUMchNMqjDCnCef6WbqJJyUag1qWwMbEoLmKcSasYbvqZXR1z",
  "key4": "4BbNCATSSGwhRf6E2c2QMrzV5Hz5ZxUDv7eZ95kcSV8KDG6HGX79owvF5k6HtEzBfuYQUwgaTNRtCL1hLeeK2Eei",
  "key5": "4A1J2nqFjG6WqoGbdaEW6jrvK4KMhSoq3hPSDJoQLA48oCt1r2NiUU1AEUAFwyLGAszKr1ZA2AywZiGr22d2JJtm",
  "key6": "2A51SYqfWaHQqBpYhghBSYe2sCRkNyY6DAEuyQDpzNgcga9ss9ioJd8wCPctCcDhYGD5nyoRapCa98pfR7PaJCy4",
  "key7": "24ouGGJzww1rGSt3advTTUnbxmxVwHJ8F6aWMzt9kiTXuxNhESECLf4SXgtgoH7vS939tcLuGYNdMaF7s2jBBBe4",
  "key8": "3UkMmobpsqeEUYP3Gg56v1WUP2ttuqxqnAfPZZzGB11xy1pKqXcbY4fX7SuojkGgohr7MTp483gnCT7UmjGtfKck",
  "key9": "HREfSypZjePy7R6UF4PmfibBooFmSGKFXrXbcrNiSEBRHWQvAcGafqsY7TUWYLCNP6oEtA5qbE9CceRwqsXuY1t",
  "key10": "5N6qPrYFbNoApPrAaHqdPuTMzHDiPUTftkkkgr8w7knBkHWbEPiFaGdLrpcBMMg57qh4QdbhM8UYeaD48Rmve3Lv",
  "key11": "4wnSnDfeWw613WNgTam4RfAn3BvXwmR1KZTpszXza2h7yRZnYvE57tuwMDendZt3uSPq2T8PxtwRs4p3sLnfSKhW",
  "key12": "Z8FA5Xdamvi8qnhtpR7yRTvNrWPJ74v6akTgiRu6pigMKEk3aEpUz5Z2YyiWUFGpKettHJtCWvWUBNbpQouX51Q",
  "key13": "52n1sRm28zaPXqnEzNnzcHMAmM4DetunRt1amxZZ5gEFJugFm9FLMKHc7HJhqQDQnP3AJZWAFQ4t6wBv5ohr1rFB",
  "key14": "5eW6SHNCMDNw6M5DPZRRrvUHPQKV2geBr5ZAQ6wgnYcU1ZGLQjQee4sAz1ngfRFGxsNoVdyuXKwyqvT8L3tuzQD6",
  "key15": "5m7ZEWsQpVV1c8xjxwVRTuzWUPedUKZWGHZTrooCz8vvPjWQSLUMfEahszFnJi51R9P3eF3wFAMG1HiRHopVayPf",
  "key16": "2b3sFJsn58UWdy9vMN12tiEBvrGL1AvUVFaTahwafLVHPMU3RyWWPFJNAUGoEFYdspdSpBKLwEy1yufdbHMkeyVh",
  "key17": "56GoEhf957XiYqojaKK86tQui64q7VHMfgek8YdKWRJd5s5foRyDWZek1cb23E6CgnZratHfH9mL6fnkakztYaqT",
  "key18": "4ZZaLfwf4FA8VTZb3BTFvZnZtVtcFjARGTfA93vF76zQJUuAgu6acnUegYCZam5Zy5vxf3N4YyC7rc46joFuBPrU",
  "key19": "vgRcTtv4P3m3WZK845gQjJWp1Jg7fzg8bUVnmqMGS2xtCtsFPS9gMvumygY1vj4Yp4u21A5T2xPBMgNQj5NSYLg",
  "key20": "2pWH6ZDAndadHastkEAwivjNxHTYG1tTe4VeJDue9QL9zLS6UdCaAdyoY6xmU381fx8ancHCfhokQZSzLkNfQ3Jw",
  "key21": "49PUVS9p2yFkVe4KhogkhX9qUcqyzoT9MwntoZeLfBm7XBfqcvzupe8L3hk6uGzaJKj5N4Ae7qmLZu1WHB8vDxyY",
  "key22": "2KhqHgJTwLUctbGrbVYU2ZMU4EUxKtxPNkZLJcD2xm6vqNq1tWCKFjz6BPdsS4WJFGNwSgeXkq5TsUdHi6k71bhb",
  "key23": "4kQHezhs16VxYEAgZGX55hAKKXhRqp6rgoiarg3VgVJNfhcbiFJQwVkU2qjdPYp1NQNejyKeMiPsk7B5tz63qByc",
  "key24": "41wydFA31tD9GSM2FoQTpjKwjaN7WUhjHB8QAkjmGPBoBmvxzgWGTizgrYRumPGCxTmdT25Wp1YrG6jKAei4Bzmi",
  "key25": "oWKqMXfQtxpGGT4MqrdGoV6DQzKmDh5nx3JV73ryMLticUXi8wC3ofzAadfoaaFpb8cmKhUJbuVdqyJB6Z1tpG1",
  "key26": "1Rr1FuzBvmJ541oBgXHyji221fu7wYQki7zCJ7eTp99RNYjwYFpU6ZZpGUnhUCjfHM48RNmd6yzMCNBV5PDsVCo",
  "key27": "3c3a6me66X74oDCFEPCoBHkT1PwYF5iHi3eLMsaHrbkzV8XqU6CpNKuayU6g6s8jfLub2hY1nW93Z76rWV8b1KCg",
  "key28": "2ESFK1GUTKrWiJ9cFBLr6KmuMzmhMPktiWzXvMfpnDLczYZ55TJfLX9QeFJZeov4Gv5tnQvNAdSmKdaMCUXZbCcc",
  "key29": "54iNjJBcxv7rwawoGD3TdmC1Wqif2WrZ19qDPtaGzVi2769jkAM1VWRzx3J5xuyqzcjGDJQvZ9Gb2FWTpzjmUTXE",
  "key30": "3LRynsKq4TeAWJScSbcvxTvW6d6DDBrYR1iiHhjeZFDXXXZGt7Hi1ufSmZT7hGXyVos2k6Bz9LpiH5PELvyNa71X",
  "key31": "63tmEd66itUKJucQtgqzJn2CoxDRYtfapTe3Leb9QNCA1jC3VEgbb23Mp55zUG63y1451RbvHe9KLxmbMq7xMFZD",
  "key32": "QJb48uKbuiWTBMmhs2tZRTCiCidsjTtCpUJhKZHfrRoe4LAp49WyqWJZuSghFBHqtwxWHbpE6BtUAhxrFxAte3S",
  "key33": "9ApJ4j1sAwrg2kaxZGH5P4h3q3Yaos4WZYmTuMAES9PJusmj7RXjyvL3DW6o6BUx4d4XvMFEorBvYji4GjGHNjJ",
  "key34": "5NZiq2kEYyXSD57Qi4bp9xFEneQuTzKmF2yVWpMeooM7eEhz1PN1gR4Xp2C2Y5ExLQF2CCJb3AVfDxjV2aoBw16e",
  "key35": "5F4Qsn8dFn8JpPmLXrAucNp1QB2Nfq8BVzTz4Z6FooQGn9KkBBxqcDbcnvxGTs3faRkhxJZojLzox9y24o9diaZB",
  "key36": "Z3tFYup8QoLC38Bg9VcRCambWMDN9sLc5fE46Zar7yotoRBM3GqTS9EesniAD14xaA8H4cvHHbrntczpeBDiZjR",
  "key37": "apQ2oZvvrU8YGpHQnU3zH1DQf2RZrShjkahJMyLk19W7dvyJ7YLiNMD47RJ7RnQJwktcSAv5UEw7bL6mjcq1TmR",
  "key38": "2KEQtxAo5mMtvtcpuDtEfF9c7A25F6hsH3HTazvdThY8hUEuGJxamKCVCCT8kSVwbDKo76VQMQxEnnwcWFwW55zM",
  "key39": "2vCumP536YTD6PEpJp7vTvg8PXbtNdi3gRsxnKjHczK6fvPBwFfbpGLMLzmQv2NhLdJoEGqfZH92ThLRRxmDF7Jd",
  "key40": "3qB5qLUGd2aSuxwieCxYKQjfweRRDuXWqYXkq1FCs9Rqzv5taAXCrhis4fd6FZHT1Y9YiSFXgq3iRu4F9cXAA3Vv"
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
