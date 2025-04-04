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
    "5Bn1N6s49ZPQBoYgkJcMj341ne7Y3UcDQmxCNizbfgooQFVRVkmBNHM9BjaWyVc9YVVrw7GR54cWnXoQYVL6QNxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PrLdacUKTeUY34AgRba3k2vBdBt3arQDNqYb1M9NyjvH7aKHoxCiQRfY2MqoAEmtPt3GwPwXePKjQgGJYQyvEfL",
  "key1": "4TPuVVYviW7hnVr6KFriNvnfy6dNTGVWtNz9HVh2u6G2pAjFocWPkAL9FP5GVkeMRNW68NJpMPzFgYwdJF7Qm1dZ",
  "key2": "3NEgeyNKUme7M4zKrP588P76yNHwgSEo1G8SWKCtQ2gHzG8Epr85VWCwuRwHrWBYmVEsiphfHzb3Dju877vK1fcM",
  "key3": "4z65hXGreiRYpxhMFVs9FgnjqUAWuC4Cfb7sRVzyBEPemydUp8vhaLH5zNfTw2ErfxLUs8etSbEYeb5PXKi2on1f",
  "key4": "3FEDBYLZw54P6pNX4av3jnBXCj62nvg92C4zGKJ9yXjbeYYCigcxj59KiRDQftkR99CB5d9yXb5T4YvvoskQqYBQ",
  "key5": "2N4HsohD5XNihr8c6apuhQxC7omDzFKxm1GDFJ44b1jGRQE7VF8yUqrfA9k1YXZR9T6GpsNkw4ni2183SbA9bQT7",
  "key6": "5nAu1CZHqfTSR3RV1iL8xcCghXtprnFampVP7CnvrovXwjyz4JhGib6rs33fhZHPZBaLJzhhmry5nEZJ1WAZ7UYo",
  "key7": "3bs4rozXuH19M9hkt1pkLZRr4DSrc8DCchiHB1HUmJm7gvAxj7ti78A2jtHgj14gNoraXB2vjQQ3KnJXXuANUUEi",
  "key8": "5dUprmQyejLg7L3b8wGQp9QQA5ZyLCCo4ZtYcxitZ4inxLJw6QakFfP1FpFiXbq7ws7EWmQD2mAMrc9rSQFxRCMS",
  "key9": "5UdT4qHh95FqZ5mcD756Y1xpthHeVvDAPXLnkWsy89W3Q65eX67GKF9mf9L4Ji2kXUT1m5wnQBFi8ozrvP9QqHMM",
  "key10": "59b9eC8V91oZjV3D6PVq5SQFC1tnV225sJ9UAHY4y2sWSgbPCYqKaF9cBF4dd9UsWyXchHn2g2KUa9yhwyX3LkDj",
  "key11": "UNT75vt1HSCQRSbfPmSHXF3XdFxNYayaA3kh29ammpym7FvB1G713KERaoK5NffGYDEDNhrHocEcCKyVbMP1vS7",
  "key12": "3B2UbCgBzHMBaVvHYxmrrvRqKbXeSiyRCwxwNbzBYnCvMaD1yJr58LoAyHZhMcU2X1T3GVs6Dgsrk9UatwFUBDUD",
  "key13": "3nEEjT8PRQ5cGQkKnZYG5eV47LF4mMEKf3zoRqAuLejm1s9FaHmNvCq6e3jtjFSWF2fwvMGYGEmzp9bsDMYnLEag",
  "key14": "2n2rToDkpD3nDsVqLWz2WeQp9EandcuyvhHMbMENbz4i7GyNrG1BxPLUfKvRLXJFoXQTuBtNXMEbB7ccrge8ss7e",
  "key15": "3igDd8sSpMrtMurrAdP87Fpi1LKJYUXoYv7EcS5QLwn9y6GefBzcN5ckxJARaGp1GsC7BsgLuovHQrHfwryaYNQR",
  "key16": "4H6aD4LkUc7nyMUN2GSNnP5NiN6JqeLWjDvkgSaZJ2EegV1ArB9KK49NWEdJ4DV65bQ3fKqAVnPj4A3Shg2wGgoP",
  "key17": "3UUnFcXBtnHTqEB1kpecHzaB2Qed45tQUWgkimQ3p2dQGgTt3G5qGASdWNN7euKQ6UJhoduYdqxJHHZXfcitKAjq",
  "key18": "5YSeUwEXrTE2vhe9gMex6ZTVvP2HogoG5z7TZWke9tH27jp88xv6wJ5vopxQMzLj6u6dT2QVXhTjzXuEwNhjb6ak",
  "key19": "Rm6M6CF9e37qye4t6soeFvF3CVdn5qvtH1fJK7m11sEaQVPV1mtZ64K8G2Lgm56sxL5qowQRuGx4VoEYTSH7XTr",
  "key20": "2sqs5e6aBgva5hwF3PXQAkGnFGNjNEJkum5m84GiN21M2Ftim71xBykRXxKoUJ91eXM8C2GJoGDVr94ttj1wMdbr",
  "key21": "NvTEATLn1yogFxJ8wVKWExXSTcHqTQwKXYhfYgj7fjm1PQDoUBfDFuHUAGHhyKokHuM6gJuq9Hwp8mwuzRR5vZH",
  "key22": "5BxF7kQCa7yCy3v9h4sjuNqEEBXzwnroC9w92uX5ew77mrhBkPHdkFz1QC4mumDVZD5YYcT8TBvd3cfbETkvGs4X",
  "key23": "5rxPJhuLp6dmBencVaEtGjyvatfmjij2YzU8gfmUm6m7piAmjKaABhAjwa8YKipcxjxZ8tzDUzyZfNKfdtH5uYrp",
  "key24": "2nb35jVFQSyingygypTHCJjUf5Cz1YrsYLMGfYN7Z48Tg99LJHHqTt19pxWZcHAZ9mpCfEbMXK8m8umaCb9uLw79",
  "key25": "aj41esGZiXgw8BX72xthkGpxDEB9U2ACTBiXiN5f7JpPis3YjcDSnyPfFFUnCE5zGGXNT5jiosxkhkoXmJCjvJq",
  "key26": "5qro8YsANYxnKm1JWp3hH9fFE5kQB1yEQLGWXVzDkWesk6e2JUncqFpJsXBuxrEhKopedicgNxfesUUQMFeaTh9r",
  "key27": "4HGfMnqjMmCL7bYdtuKeRRGtW5VCjc5wUFGPi7cdriXGrtiMZ7kcKZgomtk5LpZg9W7esqg6edEVXRn1yYBiHbae",
  "key28": "3Q6sqyyvRjEVvjPQiv7ewzoc9ifQ1kFQPQKrH3CFyvMrDHt7FAijYWPQ7B1jFeFhKBNMZg3qrgvbGvjYfcq9FSHH",
  "key29": "3wgbyPov4n7iB7T21XhrxDhr7uLxAEWj1QLPaEK1piCm2TVnjx9o4E6c1KU7r2DxWkVo4dfngU3jNPSs32XdJG6q",
  "key30": "2S7bLVyjD4ssck1V3arvijrTbQhp9Arw2EQwvXrnabxpHr2qoe4UBYRjR8bjQChbCt6rgzsKbuSURVbK61KNGSqp",
  "key31": "3jyxHG41FwAYa3EZHBTs92CE45iy9ViJviSk1zGjpeGysaMoi19KT9vE6ZkoBSvVsY24qypqUX8xg3hhhKqRqjmt",
  "key32": "2UpMafhWgV54j88xme59er3BZDx8zDGr8q6zJuE2X1DDB5y8VbL8xHApJoMxPArFZEp898QWFuRK9AEwyxJGgwgh",
  "key33": "4MKqu1iNX3NodRAKbXN1SyQP8xmsSsySsSUtsz25QjVTTHUXbRVihh7rjfSFJG7osuWFgwHzwH9wYrbwoPaE1fgs",
  "key34": "HV5db5obFyfSsew1X9qMJMtnxuY7x7Peb91uQa2SqLzJwGp33wM2ndPrnHxs9KpF9F2GPC4oS5ZF97yzFHyL4jd",
  "key35": "4NGh2VLb81zrEo4tW7TBeXLgwhB52KQxKWZ8JAA54mcYCVMVLh4zTLw5UQrULysTVMSX5qab6qbpkWQo1bt6F9N4",
  "key36": "DPbhVvr3v5MrxYbcNMtScupEoVHVWEu54cH6zNhCNQQzTHQTB6xeXDpcN3N8hoNY2roBJKmYxXu8tePmnpHHhus",
  "key37": "5Pg8WCF3QSDtTUq3D4yddd9XXdXH5CruSbxha9awvzcW15taTYeutsso7dF6guQh8hWtixHfVQzv7t5ooosLEuFQ"
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
