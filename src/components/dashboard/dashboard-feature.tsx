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
    "659wy5RSoTPxMEvzp4rCawAJRJBXGdj2Np938TRVc3kTZTg4AG6qzYQsfiyno7xFhiBjbQS1eHkJPigeqxbjQ5dY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NAe9KNCSq14HCfqxLiFabokSnWiNEBhBkgfv4nBUaTZxJ253YZ1pVb5hEEmND5jpwLq2psfNdg4LaMAhZ4tEDrr",
  "key1": "5NVWhDoNuyDvyU4NKrWRVrxvKEnRLn354n85ZVxBfDAnKfkQCYg5uCXCSMtEYheCshvkuWsUTx6sx3hdUBqkkgK7",
  "key2": "2n4UrufRRYH8BeU4NvRx1XjRFvfUPvYNDiBjtzeSBuDQgb6MRAM81oKitZTDzaSCqxUz22W5e9NgzbuAtYRmZn4b",
  "key3": "5E5TEbqDoJ9RHScpc2G1yDyWAgjatKTZKkXqfPEtVNjRYxZB3R1u7uLmomKHvDcpB7CDEwAvBsaaQHUyrVPKHfSn",
  "key4": "4j17QAcu2eQ6a4SkRXMb87bbs4wJ4uhgDgszPVdgwoVp3FBkihKU3VcixhdU86LMmMhZJH52Q4RK78Z2Qgj5HDZP",
  "key5": "Zh5eNKdmD1ZdSzbucu7teeSfE44H1VmTf9CWu6eQKo7pBsHFkjJLgmckAotXgaaUcUhfc3vCvtQ1CcaojzZVp9Q",
  "key6": "5mbk7zqgbMHXe7yYgnr4CzVPaLPuCenTFYGpyhxFq71RTotFrfuVckRGU3EG6v33k4a1A3M8xLSnoZYrpUPj7gM4",
  "key7": "4yMxFT86EDWVFttwMPHH31KLr8enzJnB9Ao125W3mL3Ub4ega325gQPRCvKoVJBE16wboKqDFAvtHz7P8b8qLYGJ",
  "key8": "31PCp8MniGHjRtpWYTHzEfGcPkzBm68NABJjtzDmWm46eWsoEdxA8f7irF7R7FQXcA6DKZ26oANhWhFyTENqhNAL",
  "key9": "4AWSCTwHD25GGzPgAdSMraii64FasWRRianaizZe4ReJMA2nXjV1JeuHxCSSZZCZuTV7E9ZHkozbnMgAWvftZk4M",
  "key10": "4R3pNGizm7BgaRp9f52Tq3uxJ3FKci6hD7RdzMTNxecZTqggtdk6o877ihsUiJRNG51KPssNJK3uUARk5UrBqTFe",
  "key11": "4eqwaTLfYczNYTZd62YHUyjsxhMK1si46Be3muaZ89nnJ8QKFd5Hur5WCNghmrZQJ2AX1FRmZi5BYyMvBzn4zn4",
  "key12": "3QjuAyEoRreh9bztUPd3Mmrx3AQaynLjfCajs1g7dWDZXvxoYAjAnJA4zHoXej3vafFTcWJZUbugqH6CdcGEtT9K",
  "key13": "4XprEZi9dJYrcwbgrc9iAToi5YgUHudWjYF1bCAChpaX1Ay2ZNH8bmVWGKiJVQWiGNKcKSN7KJfVS7hZzBhD3jcc",
  "key14": "2e4xzsTHohWwRTkUgPZoiuFBX6H6nqiU5f6vJnjLJBmnxAueDre592aSGKwDjcq9eh7pgaLVkdiskPb5PNZWJFis",
  "key15": "3EpmsfE32sxfjsfLEBZmsNh4Xuj4aTvY1J7hHomNx4f1CztB2eQ6UfgWtuk7trUKSavny6UYc2nCVP4RvADzE2M9",
  "key16": "5GieE8zybnfdm5hQv2TyUkcoD2BivYYBifByioCGggGYvVHV4EwbVeoju3NVioGowfDBmYuDb1gdRyFpjMRDamYf",
  "key17": "5RvEQ5gr6XFRcKDSYL9rqcAvxSHZDLD26zkbYwVFDDKw7cT1zWjVbeG78vU1RRJ9vPxZ4bHuaSBpXWZUbGSkr6z7",
  "key18": "3B1JJqyGPmR1b4CdKnomx2FJ6ZtppBBbYgP3EpVX5N6e8bf8byVRJDUsr2aZzMXCot9TiXWiRSRNSJGKM9GmZr7q",
  "key19": "2vQERoXZ9cXDB1sRi3DKTBkPWAaWN6HL6onui8ZEZ1q9BuZxNoLiEW9eqAsAKbhkHbMe8NHzoMaGPVAvoGR8xjsy",
  "key20": "4xYAM7QhZetqQNBNcFKioRBwirGs3JPe9QzWtd16SJUgopzZpV7oY61i2cTezbcoDMrkoWcjhWFJ6RU4nbjVFu5Y",
  "key21": "48cRwnPehQ5AFeooMXPecTNPXKZnpcyiismVSKUPzkEcMWQFvws9m92eex8vUvnGXGohWhg71gxrjNgTZNqwqeTh",
  "key22": "3j6vEysd1mKDKqMhZz58eNk1NeKHouN6jLK1kmMeZ2hK1gbihvgM65egHquHv3jjf3G2o91oyxpPjufbuTV6Vhmu",
  "key23": "vRqDfcbNuF1v9mbZW4Pc9ezCwfmsTPTQv3JsDpsFcG7iyQvCfkAT5711Tbd42czC5zuzLEp29U1Gc9uNkcAL7YP",
  "key24": "2EyWcdAcXWzbosCBUzjQq96YFGYy7TAWNGq3pHANJNkdxW3drZxscwridRd5KbDLXXQamfJM9QexZnwZqqJmWnnA",
  "key25": "49s1DQuQDQjSSJar17b2UkS8X3taJVCKDsKMdrvcYcLKjVPkbnBJa7mCqwLQqyuMbLFSLmqqbdqPJveCJz5gLiVj",
  "key26": "zfBfLSiw5VPM8V5JVVX5jhmTU9JYYHtMBoGzaSBr3EU3911DyU17TvTWWyE64rXbtTgAmiNoMLgvzK7Fo6nYGWE",
  "key27": "3L4HU6P58MVEfTPbTynPAwqsQpbpYsaACQEVtmveqEjmAVAFsTEeducJoZkPJgwm5KAg7B2rqN2tYzSeYygzbMPH",
  "key28": "5oBoHuh2VjwBdj1a4ZKWZ7jhGoQXErvJTYE3LJWQGj2vEiamSLqDarQPpy7dtakcCbdRFrd1xFdHxphWQ2pQrAjD",
  "key29": "35LCeHU4KbWuxmDKGVF8QFe54PoAfz7HPUUVQToJ3RSfq2THKqjo5HPPLzHMZiSh545T3DsnuWJjbdoPdAczeYum",
  "key30": "3CVQEzsaeF1JjZx2nmuPnLxX2UDtMnuDJb1a21QC6Xknb7sxBfRXNF14DHckaAp7cxRBQUNrJFxBUp4gj9ZaAGjV",
  "key31": "2QqPPqCq6LXzEGnND6U5eWHisYzQZq4ZPGXuhFEQcD73pq3uRQE1UNKwBp6ijENek7nseKAg5YQEKhrchCVmHkic",
  "key32": "2bHyTT3UcfyTDr4vhuViDaHgsat6AszFmyMgP9rEiWbeh7TnwmhMWfWYaz1hPjpmGA42DXsu32WwiwrJLbBLW1A7",
  "key33": "5smc2ydxq1rmjDJcpsYkXkWqGGGfZ7v1SVQcTnnJ3DvwJWB6pLLdD1PZtLY553h4oEdjG4sycrGwrZuM3G55FhcX",
  "key34": "3egcUxCDa7mtuLBkgthM6sRqC3rcz5Go7yUPsFZojBYzVuQjUqFTeYztaL612rCxSLFYJAtyAzcrV46VsivAcTs1",
  "key35": "3WxebXPrbHvwhGGFomguy2gHh5JyjznQfQfyaWdT6qwwCJEFDs1Ww9e9GKnphduxZuawMcNZaiyi2xkMqsybv63j"
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
