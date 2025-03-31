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
    "4HoG4Ur4aVbEynfDVE6TQVaQTDHpc5rgYpv7CiKTwavvy4gmKmSpW7sGv7Yz32enEjNVtGentT3pmKzbDaB84cti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RnEeGak3TBXszLVVuaZsBvg8eQFXQdvT7HQYUH4HMqAphLgMTaRXuxB6KQA4eD1ZoJpZfmsCMNnEf42dDBrqWaB",
  "key1": "5CrmmSPBMZLaQU3hCxFzf9XB12BGPSyhpZudbyX1pVePhHs4qHzoAg6JQJV4VGEifWhfa8faCiYaeJSPLz4c7JN3",
  "key2": "X2njkThTLQFW6wqNFFT38XVaqfRHajJDswWybH1BzGJq9AjzwBpNbqaBsmDPXRE2jpaBu2iykdScjaLcchPEkhc",
  "key3": "4XM6p8uxsPxgP9ZS4ZJuSu8XkoJGoAcckdtj3yfoTFEAQqAEdk2P72VEQuZoqeeQMQETr7CM2ASvCW1eMKAwK9WK",
  "key4": "4wLE6iee2KSZ1LvthvMmaGeN5Ef9NdbQtgjHLKapuAD9KK1H5QRt5jrEPrUVPcYexy4vPgNNXkaZThgBuLfgZAVx",
  "key5": "3EBtiJDNRCJeYD1tDapPWwiEvqW3wWj2N3fHJqgZBCPQE6pyb9SXLRp2ab5PVUhyfnDaoXbMYvy34THQjnKJkotw",
  "key6": "5XUck7FAHmHCcSkLE3UTRQ643BcLFEDwPELnMBgRRkJo7oFv1qV8zLPpMYMB3NdgGo1ya7396qD96X6XgUtMyVGR",
  "key7": "uLzHMg5zpokEECurpvro71ZQBWjbNbx1PqqLxT426qkVw98B2wVwP6NT1fc9tMYf9TLjr1QB9o4LVPFESSsQmaM",
  "key8": "2ZGwB6oHbMnsc49Prpaq1G2zG9XdP3np5n8DhxwDecnFfNQKRFSH2mXM7oZF77dHNuqtic1CSeZe2iRr1fVyEoBZ",
  "key9": "3tsaUzbWF8dQ9pCHyLcf93p66dXr7gTBPhCEhA2pV6Gwg2TBKy7kBgArQM9jF3xohcr1YaurUcurL8447LF889Xy",
  "key10": "672YjAZoznruEHwUqvqNhYbaFGg8b4AqTfmKQoSPp89eruixbsThw6zPUAaKKir92udmFa2wymAEhNu2yaEEQCzd",
  "key11": "4k6jimvGRGbrfX2dVDLhuaQ5u6bESN7kTZtBzHrE9FsrtcPQbXMLnR3SbcykQnLtu9umf1sKRM8EqrdgcfkaYeBG",
  "key12": "53tSoj2XWi4oTKt55u6xaVnkMH3YHzai8DtBVZq6KvpPQBauuHctcfqMUvvKYkCE6RAgTyt8VMfFfdGwNXvNm4Sb",
  "key13": "3bD5sfT4tmbVziMsooNJ9jVUqBnovKLx4k1DnoThDt54ckiqnz4RHRiifFRinezhXx9MaQoDrep2QvSF53iVWnFm",
  "key14": "2uaqouQuFxbi3WHneocP4kZrLziTtbWfgqj4exY41aESwLyzEZUuQfHG6nXQcp2iV6rAtozdEXimue846MvpFcsy",
  "key15": "5TcBwcDHY4RwQcBp7dSTkQ7EacSRk9JdYE7hgyoWDZq23GdzigRrLN3DNCuhddkNLFpN9dviLkkJDHfEQqYMJCUs",
  "key16": "3yWiX3szLwJbhaovA3PJn9kLtF7D5qtX2cLmBzDoV2aNc5DhSicbPqqFZmDCFQmfBZqvsaYiPJzEhGSamPwNBcV9",
  "key17": "4C7Uef8FufJBVJ97R2ZcYAvkK2xSVgiMWRx7ckwEvvEdg3dH4x5pHV9YrSs8VFi2zYqDk5BBkB48HroWXrhxj8fT",
  "key18": "3KVEjxDp8NdbK1syZu7HMUif24pRppcombqj4GB4DcBqnFLJcvJnyyS3A5uztZUfAtbzWFRoWJEsb76HpBVdq1KW",
  "key19": "5KfJ2Gjav19CNUFa2928Y3kPKRSJo9SnSzZpFkD7yK5mDtGNAxY7EGsGjQinSwCXmvJJUjym9Ls5wheVbY4hFGNS",
  "key20": "5ir6sbgVZXWT6mPhXuE6PUgmERohqJqDk8uqXDaiJHbZJTVsyWUxHRwJ2X9QR9kVYsHT5j36riG4K7xoTsTamnqD",
  "key21": "2aRCtWZqz8mw1S1zcH5vhaKmi24Mzph3fh9LbLbYTc4JResQDf3F39WvLz9KcZ8ntVUNd1dvvMbKXJyC79eNWwBb",
  "key22": "4w3K72Evfw7DUoe8UQPkeh2WHGtNEBobm6F6rBoxED4VCjXLdeu24SX5pHsKi3tTLPSVEbkbet9CBi5mmhCkRyQn",
  "key23": "2fS1QWxZDLeBjc5cJb5vSyTR1Q3i7oXhJ5MXyFoWty2WGSXPq7qKPp3CnvJx94ZnbQ97ASS9nBTAZAis4zo6b3iq",
  "key24": "Go5WMkkFqdBzL1ZxzaZahnKq91iYotv8GRYLpDxqdDsWemSj7a5S2qx3DFdX8JowhNKywmiqzc91ztBejGTUTTY",
  "key25": "4n5SSPvkj5tSM9PfgDnryD7EYpSLxaBvhUqTSPqfabhAs47PmufKNJjvy7eV7Z8jfKabKZpW7GUxDfWg62BKUbWF",
  "key26": "5PHMGp9NAo2w5FLSp7KsJf63tuhM75qQ8oxbS1brW4ZFwJLwzXi2X3Ao1Ve5tm3XmN37qQbKCdbCspCXEE6MWfUL",
  "key27": "UCUvEZY2pM219tYCboAJoqt4yyjd6PGwQSzbHQfamvFuAoEbuyLfNrw8PV5RnWxUNxUSxYRo7QZ2LKLxpX86YPr",
  "key28": "59xhHZKWZWsfiNL7FTcfdy6qoWyLZkWkdFvxBomwr9qq2cwHERfRLJwsoV9yUtrKntMoe7uR1b7pWXQq3m9QGQiP",
  "key29": "4VW2M3EcyzDjdcHf4T6nynZLZxkzgJ6evLcWN7uSzD9biFxTq2tcgxmFGRT99ockKztSzUU97V3jEPtdzSyQqZLB",
  "key30": "22kzUr16b7ZF72Gq4BqSw8HSZnSQRmYp4NyTGzVM9rZ3KwbYKMxuHoMUCYMDqbQqwFDbbYq46qkJUX2CNsMxhqjH",
  "key31": "4K8oU7f3Fznw7EA2neMrN9c7KnxKYWtrzB5ALT9nWfc7DXcMmyzqdUCjkDHfZHwQAqQ6xLorezYmoAR7Nh7VhASz",
  "key32": "41PCRSZ5d3P3AeupdFWvzQ2W8tC5xjocL2Jq76q6NpxBzuUpPgHAznwUxFrZkLyaQ61qyMktjA9Wg8cCWJXrVpiu",
  "key33": "3a9KYDQ9amrrz8vRzuoKYRkGfUsSWv9UUkHzVu3bjHUsgi42NohC9PJKbXjqDCSPRaRAYC9PiBkv2FVs1QyLzUKy",
  "key34": "3dGziaZtuVQbuv8ZimTgdyHNLJfKGg8TY2gEtAPEdbmZSxDNp41LsdutPZiohber1Ykq4Mim4uaYgx6FB3PggTrP",
  "key35": "3WWwPDBZ6C1FzBdp8XoSNwTX9X1FsRDgjyYoWHQjhgRbwMJyJxiQmi95srBzrDBe8yiNBqjAvu79Ao3h2NL9cPqJ",
  "key36": "A1kwpXJM1enZmCyNgsLhbkZp44y7MNhzNnpJY3LstApCo9VdwAZJRHY9c9V1iVr6fZ2bD1BTPwmqmSWquGVxKm7",
  "key37": "5Qp9cGiDrBpwEzdtmYjXoSTEiFZY47SUXGERgHLY1deaxMyBRunW7VrJzregt5RGvR3coB5SS7ETneqTcVWr7XLs"
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
