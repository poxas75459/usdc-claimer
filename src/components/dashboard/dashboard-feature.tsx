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
    "rjKWPjAB5r9iMEvNumowMrBagN5XKzpjxChkm72PZpw3kAFYSrQW3z1SLu5TPbYKoQ5KQo9orqycikQ8ydmqLV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "611JKir65KNwcnms8674i1MwoCbNCSzKNWGhebrfXGc7CjPH9kQgXHTkygmeyioU66VaE56YQm77L82sYV3evpcQ",
  "key1": "3pbcszNerWaxiYn78ZCWKRkj1rorhtqo2aVpkUoqHyTt5bTeiGv7EY3buz4o4WDBQGAuDKii1x5WgnW4frQvWYrF",
  "key2": "3ZCpb3hzc3wRxdQ5PdPBniPAWCKRYWwvCQTrDyCeY8JVD6p5WBc7Sche5scWcq5mheMrqeJVK8SzDo8TB4KG3FmJ",
  "key3": "2zgznEbQDaoD3KRFWN5waWTNCXd4NeeX9yZi2ogH3w9Ywp4XZRQtTQ9vQUTk15jB2HbmnRKvRUZCRa4qTmXt4cpi",
  "key4": "2BZ421dwxkE3CjFEBDsz8fnxkEzsmyUozUUAxhaj6fkbjv64s1xpkZakiLpmW5ejLpoePG98UXiLj9uhmoDBiyrQ",
  "key5": "nYRX39M5G3Ln9XFjrDze8y4U2TrLkFraEnGsKH4BDzrwi4rHbE9EUH53s4bdSMJNELsYU7hdbamvQxkPzgt7miM",
  "key6": "288iWiUaaB61yLmc6T8AEmVRSQR11ujeCDKeJkM9QKC7zZAsz9JHdXH8RfAvAmfWCL6RYaYgByN49L7WcvyMCeuH",
  "key7": "54tHFSGpN6S8UsoPw2QNMSv5aV7CvU8ArUc1H8EQpujciNP8SRg4SLLsDY7yYsgbK85ztgDgwxSCaTRYTKHMvpch",
  "key8": "5GrMzRgSoJEvmLazdHpbCaTEoVAxYUkD634aQxQzt9PF6fZfMEinP7PqHD78KiyAhiK7Losv8KjKmaJceJ9Tjy8c",
  "key9": "3GpPC2dDiHMfS4AqrzNgrNGM5tWrRpJvEgig72G4vsWYhSmmvDmNpNX6qux1TQQdRXYQJZF5CbCY5YVD5GkUuxH3",
  "key10": "2KF5Xfc5nhACCwd59gq3G6BNVqWcoRTwga623X5o7Pg63dSftnoYjk3mowoBt8EvrAb6iqd7TJraMEepyPTQn1YU",
  "key11": "5jK8ygTKzETmhznjnkSMS2foKPr6xVpSt7iJHGR6CNKsJRUBuH2MpFRYLmiacdMH27WS85xJjWVU3GtdwnxfsPxo",
  "key12": "4KfL3bm2AcFww2znZdkP2YvTiJQY1hZQ7fzzJu9s5rWdHXVYk9xVsSy1AhqVh8ptQDieAod63UJKSEfGrPeSfq53",
  "key13": "2Wx13siGvjLgpHmwwKETVjk6KPFgNwcKVGeW3EHrUrC2EFs8zUi7jjK9GPuXRXF1kQzfcoP8yvVUqiF22C3V5ksQ",
  "key14": "4EF4f2YKeyopZWLCYVyH2N8jdizwHXBXXeKeoBRgPg5mhZYATbtoAiRrwYcnFvjLaqFjTPyrCkAw28kTtKSgJcPW",
  "key15": "2eis6xkGhB9AWthsTRpdZKjBJuxFWs1KxjCgou7JRPpN9wkn7Ux6iWTuUbdFzYyMsRAGytW1WAGYiCs9LgGtGVoH",
  "key16": "3CDrMnpy9aGiVSWTFjhA6gFjdZGA8JzHyWR37bRFZu7pUzQRb65FP5R5i2stewJsviyYt1niaoKBrdwusFr81rnF",
  "key17": "3agSaRF1P1AA5yE99Tz6UBuC2SjcnKSu5tGNwXp5WbvmuH4uyWz4DyMY4VcVudXWRCAGxWH9UzogMiD6peeecUdc",
  "key18": "32DtwCHn2EjNXQmEQmHTUTvvWoA7uqJontyzXiohzBka22Gpdg9AFoBdipgZ8A97vcdo1F4vhgR9kxz9t5gMNwrW",
  "key19": "o1rr9fKEKyHgeixJwSbonFcP9qg7RBk6r61yMtw45KSuT5vEU9zFRGgxu6Q9i17i3y6CrxGiS2qqH3VdE7mdrru",
  "key20": "3ibmXzhPAPyYfv9zwUutPrGJKoL6XNxTJHaN2oXLfwYV8T4uaDM3aoMDYucSUM2bXxtgyFhh26k2viGSACrQwmpu",
  "key21": "5VEDUjv2iHYv7nbLFGSSytebS8fvsGmXYhdfaC8CBZLFJQ8GrRVmjqxPdwJjfa4TsS3VEv1uqkXwFjm2oohUghi9",
  "key22": "4BheC3HfrKFkBxD2qhQVMqB1LpZaUzyWdkbvQHWZCN2BqLeW69aMjNLdGfjT5YM4sie95bByC2txd6wT7SDsXNPA",
  "key23": "8hC1S86vsf8DpB69jKvB1fX4KLML9ncFgk1J35qDRSZ2zVnKXwWxg9YRVe1jgGnbZaoFC2vQ55WHL9mknjk4VD2",
  "key24": "4iQSXHV23pqGKPymsdxscJEZqGArCdZCeHpFiM89GKUfXNASUdHEgMWWmbpHCbwKNqGaXfEJH48TFLqjxhqD5vHm",
  "key25": "5mRJrUWJpaoFoR8xEwemd9rB1mwiY3QexV3HUtNEjFaDC6d4g5mT9CNCXVMSA7RG2UueynjdcYL9KQkrCMprMwrP",
  "key26": "TzL89UMPTkR9DNkuEAHcmk2qsHUqKMHqNCK8Y8CZAXxUNvC8DKTKmwtiFGRQ8bHikXDG8iusDr9f1SijSJNjQmR",
  "key27": "gyNCXQXEB5qx1ru4b5Skb5NG8nqKc2UFe6V2mkXsZQxNUXRVXj8QGx8fPjdhz2s1pcStfzChgw7qWKYRFYSnJJ4",
  "key28": "3fNGV57GpNeCe31KKX3Fdcx4Zu1WLbutdYoZjo7bosxt1K9VugzmpfeZenrJRWEvMZK3F5GuHQPNLANuEyb5BTbN",
  "key29": "5EWW9jfr9FU1pc3TE4czrLh8fWTkobZGJxTx12xvwBB8x9jbvcYiavNSvSdTipa4KJqSHutqRehScrQCEHNNadc1",
  "key30": "3EVAFzuqK1quYpez851JhLjTg59GoV1ce1a8FMd6m5ZKxoh4BgHxKKW1FS42NivYffCWd8ASkAGgTqqLm9r7gP5S",
  "key31": "M7otDADvxSE1PWcrp4b66mhJEUZsuESeYZp15XQuSw18xU7hCVh3Trr76uukCp742YDwdeJ8ZktGCKAqYbi19ko",
  "key32": "5W1qdae1KMwEgW2XqfsPT7SwtarpXU2p6xoMWT9y9drU8cpRu3Ei4UURd3EDiKzyMQPFFABU6VZaJHwGYWEsHNQt",
  "key33": "2NFhzLqURcTEwiDbbD8V8tsWjuRHuwYtYGJSCCgthQ8cCRwLWFevrWY2u33WZ2jQib6e3sG83TvVC2d53vdnPAjN",
  "key34": "aJWdprEa9nFB83LaUsSq7EmDJzrr3emnKxmP5FUTnvKzfgHsaGESVqoqVYbwmnpPdfaxj35rJS9mX2jbECX4rdp",
  "key35": "4jiQJnrHwadgReUK14XckQzRFG4jCskyw5U4L3jeKryyGYFw882cdhZsFEFshEDcyeaUhXFNqtbtn2G3jwkXAN7G",
  "key36": "4hwkr9YVfZoFTHHD9KtGdW9M4fx1BMzGUNjxwaqJHfj4bG3yRtrpshk2KsvDt8MiVgeYyeSUXWqYgYpZzxET9kmQ",
  "key37": "3YJZQjNzFLXox6dC8aTTjfhc4fFBA7Y93kiPo6wy57etBEQLQQDtmXtQKWrrDcTUkfB7NyQQ6ZHoPqGNe1j4f61D",
  "key38": "2gu86vL85mhHi1kvYWL51GG2s9WcGr1Y6mbwwcAEbJpRcyPQp61K7wUj2y2kyHpRdTWjpMpMHFjMUNcPkikS7htA",
  "key39": "5L6vUCoKEBaK39hzLmE6MBmgpCWm44tbf2EaD1Aro59Fe3yZC6itdgJhbm7TNEgq7SitBeXhcoueQKAFhwLPd9mL",
  "key40": "45DsLgwufvm76BQE6TZ8L1eaHSMS6bSrvmRxghZxWtxzgA8Tahuc8wEd29tTXnUPQ1cvx8kMpWtHAx37AnhZqmMt"
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
