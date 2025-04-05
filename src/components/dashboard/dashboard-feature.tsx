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
    "2ejE7vPijLnbG5GRw2viXzdk82rCaTMj3FRNKafzXQZZmmvkavRHUnhFoVm9iKPiiuGdw7R6tEX2rpsThT6PGgxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ejKJyK7NGAbh4CQvAT6s9uUmU7hUxSANf7dNPnpfUNpSW6jTb3r42f6K5dMngTH88Wk9AxBSE7JMN9wtgfGw7n",
  "key1": "49gHuq3R9GvH4a3MhxeSKfbFfjvbQKYM1CWvnwhghyk7kDT9bdJkNDZStx1JFZuo3spXwR8VdsRxLK7h4cxeQpu4",
  "key2": "3PkcGjL9GkZKrPGC58LPxYSLX3YLPviVGxAUj2fiypEKNc64g2y4B326KX18BrQgi7JnqKDqUiLXk5m7pYxUeZ2L",
  "key3": "289k1sSt8nnTH7hHLwAcSmyutrsMh9QvNNw9iq91D8PhwDn42awVypL4zNiC7dx7XbBYN5dVybE9FSmpfw6ApGYf",
  "key4": "3DrDz8Pq4HsHUu6od2oq3h1qVStGYQAUrgxXrxXGe4caH3jDy87CdZb1PAxPLx9cTSqBZzyD79ewG8LWPQrie3Lk",
  "key5": "4Ug7TZS6GWJsFFE3QK657eBivcz8gASA5nUeJNEQqmRDpxoV5n2qD5w6AMbmHN8fHVAnGrxDa4fzKUCYQFodr9UJ",
  "key6": "51i2Bgy58Kyn5HjoTy3f9Fg9z1aU4q6kxutefDEkczu2M2gzkLUaqJHLqjVufcSPWGA1tWnRMgGpij3HmxVLEaK5",
  "key7": "3w3EVzbLHU5z3HacnPx2ccKBCvARHkP3AXpZLS6xAYRW2NwtbzBT9Gg1oYPcSjeieND1rVR9hoqWGo3NY8JREDzK",
  "key8": "29mih6Arc5CcRwTokLs38CtKhwiDoUaocTAaB6VvGZ5pL7jqmTRu3Tk9FZHGnvXEL8vDY9YyNoBBVU1KZTGFJLwV",
  "key9": "5Xvox9dNQ5w2TzvrSGQZ1jGoqf52SU4GcswPJB5AJRrLCiBkgudRSc2wUv7EvBy1CMeFQuL9ACioQbp23HZGK4pg",
  "key10": "3P9VXczSDDdntFUnc4N9GPQ7zM2MVDbhJcuerfPY6jD6nm4w7zC9rJfTnduKhRK4X4deDawtGQqajUzzcAJtoLYx",
  "key11": "3Eq6fJR12zHVnDM8FsgLJGFVTCKDzkX4tRprsftYNckricc3PgXD8cif3QUYnwcEX1BagGQZq1BbvBBkjqzNtLwA",
  "key12": "4sPVCrbCiuYCz1LGzdahHJBVkBYA68ZZqrdn5EgoNL2WZGj1fEDVB8u24K95xWiAZLHAEAR56FYDyMFASoRefs3M",
  "key13": "5jAW8eEhuVYgjUEE8puBdn4u3szU5pFwVfXth7XKACKQX3ZdcnCc2uKDVCgb997hG2FepBehBaRHfrhTPtjRP6NQ",
  "key14": "44Lg5fWjzjCi4Mzj8unBWJBFArWt2NntUfFP36viyArbPGBaFSAwgEyMLzn9HFu9MqBgQ1zF9KecnatiyXjLnYzT",
  "key15": "3tvkYZuQ9Triwnuy2fdFYkZt6LB7PPezdofMSoeyzwBX9sh2Pk1f8UshmZKSyv4H6VG5qAN111ZuAYFtPVBAjAEd",
  "key16": "2mtm2Q6UrE3AKGkukBQ57t5iLrTuTALhUqENJRmxsiSZdifrJPi4KT1K1xKXxVPesjVCRsntjGi2GTSxfSJnqyqf",
  "key17": "ZaFZnxxFLKpKm6Ah2gn4xQJL4MU365pgAfaqgULJhSWRmPAZzYZM6VQCfDUeMENQPnMQjxrUcsTbjGiH7drsDYT",
  "key18": "4N3iygPPzHYdb9TBEs8ZWR6rFf6D63FKtc65rW4QRkGmdCgofBqBkP7RJ1VyjYv4qEc6KUBG6e8TJBKvppjpkBWp",
  "key19": "3iJD5NqaUDFquyFftAWYyVbkWTStyZQ8Xh99KWXBS76HZN8vfiFFWXitJVgnkZSNkJXbjUfnaiLxipiJV7Rdgh3Y",
  "key20": "4YGwnQkqgV26chEAk4nyzVefzmexsXr7TdzP5R96kmzjsc2zsEuPRW6qqQuVsxJpkWzyzJycNLSYs4cnBsXBQ2vB",
  "key21": "2kqbFTeAQdvbq6jcd1HF9xe4F6i629tqA951M6Vwqz6dmfyVtaSgyWNX3GYcPUJLNwV8KfzU1Y8jqPf4ob6mRCSN",
  "key22": "4jBPn2WSGnB1Cefa6nKW5AmA3xUXwHxBrC7dJrhHXvHcUo4bkaj7XXVKTijAXMJWxw8oc5eWDTkAcPuVgMQcTqoH",
  "key23": "3QXe2WpyKB8HE51MeVDJ6KJ6YGDKaV3BuDNrFJrrgW4okEiKMWEioKV7Qjo1H8pDqH8d2BfjhWhUrKEV7MuAAwDN",
  "key24": "jP9b24gB1phB45S7XcWa7fYQ9TcuLrYxBgs3zsR8Y6yU9QEdZ1ck5e4FjGZgVKDF1fWngbFmQwf1rrFb5sGk5Ns",
  "key25": "XUPd5D9iMXMBUFif85GJeoj78kUv9PSbpXpEHaBVzRtQ9dPgbwRog8NnmivLLEaHJqoc9B6xh92JmiyUDoEfUBC",
  "key26": "2nyA1R7Bh74RdR2WyiYn3wQAVzZ3ibULX7wa3Wx5BRYEL6EiAdgUHeCs37nefb6pH26z6VALSTNfgfYZRsX7mx8E",
  "key27": "3Yqa2mfifyTaoHyEJjcBQAUATZkCHjdoGTAfoZBB9BuXA5yW6TP15H9yaJuEzKHm58H6WSdZwnm4MevqAi5wS6CB",
  "key28": "5A5aDvfsCKvkcw14Lztpaj4o9HYKq438n5SB3Z99bKhrnUGrZSRDcN5TDJEr5XnHq8B7zzqwPiExteKDxt1JB6BK",
  "key29": "4615GdoGwn1S9117eVsUWEzEZ3kM9vsa84BUG66APFvtpsP35TV8ft5GzqRArovgsN9ysJM5s9TbMqCoBM3X4FWX",
  "key30": "BZzeif4PF7F61e4yizM2VfzSU8QcCv6Vo9JV1RsjxJSxDizC8G36bnNHDq1erMfL4dG4D5YkXoWuJ73zAmJLCtC",
  "key31": "5u93tHzv9XsJnm3ti2sKbTu7qGX2NE3B6YFixYXm4EhZzbE9xDQQ7zdSBVhnD9q1xQ6SxHUDzLBCisN5LywWxNvR",
  "key32": "5ZGQgU9z1rdYkXUWi9fHiJBJtyVWZfycAGoUFwCnrEMGJJwaj46EhVB1DgpwBb9EbHE74Xxo3xB4RbkQDQ63snZx",
  "key33": "2NMXdPwYaikYH95oi3qH7BJxy3Y86H2qPvy4DFfffuvpHLedD8b2B8kwzbCakYApVRxcpbE9v2DTd1kW1gCkjgSm",
  "key34": "sPVtcpt1eSuLwZXiy5FbDcn1QFQeCvNBARov2EBTetKwzpnVB4K4B1MWXnkfCkqKkzv7FCcJrXn7ohTE5mVMUCr",
  "key35": "2TtwwsDBgqur1MtYpTmKjZy6f4NQcrLT2rcJ2FQK3DcvufDJM5SmcowTZXka95gBH4MkStxkt73opLXLUV1acPMR"
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
