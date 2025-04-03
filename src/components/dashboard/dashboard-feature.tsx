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
    "31xCHdFB9a4vQ4wd2CR7KzKTkQyU4HgnBrshvVfC8R6RxLzLqAZTGhwXJj95NSA3eZm4aqMNzxxoWXfvAUcdN6fW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bqoHsVMmNieUxYSVqiBsEbVsccNX279XCRKhr6jxUeyz3Lbd5YGMHmhE23nA6fsijFLbAzmmGTckjRshiAkGxBM",
  "key1": "oUUu9qr4nn5T5253fCiGxS7xabzdqVBdWJJMGwDEJ4JqqPqEJCLuYtehhhanQffcVt7ztdfRUEmgVyJ9nAu1Usx",
  "key2": "vZWyWFqXSzG3xRjPgfeLb4xr89z8spap5F1QRaqECfbniJo9ffLKUFYq8JvGszanvi7ZFSrwprwuS53tYu6FV8n",
  "key3": "pKc54fY2HRmL8sM3N287kgLaQdwvS4WsapU2BddRR77BMdj1fRHju7jAS3yzjYGvMsN7RdJd4kQDQb3JYFmi6aM",
  "key4": "GDcDVkGevWzNhCvcfw3FhDpmRXRX3WNQqAfy3moqMpgsxDHJuZ4hGH6wXT7uba7yiLcvRiJCJxNiVadXeEwKcjE",
  "key5": "xPgj7KtiDCWCzaHBaCKDwm2B7iUpDq3ZVxPsz4dBuDb4FLZ9fhoMhUYTgoanSWi4T3EYQr7TLwHvMbe9eLMhyPn",
  "key6": "42m95mBVZdMb5MA7XQ3pYJQiTAvAi4ZK8KA319KUruUiEwrZAgjzzxcqhGWiCKHattVY5NweaJnkN9VED2uVEi9d",
  "key7": "4cXgGNi9kRvGmUrxA8CrnEd3TRtVppfcgCBvqeLaL24FtcfPS6FeUkFvWvVLG9iy5DCrzLv6GDXfY4bw85xjfKpW",
  "key8": "2sWEg6SfgoGdKqf15YXj4oEF1Ypt7jW6sEwU7edBcEeeTCX4D4ACqJL7Wom6a7KK71spXNnLqhf85KyVyPDUxseo",
  "key9": "2QtZGmE48NoBhFn89tv47wUSoBrAykwC9s5qV9jeUDc43CsSA8NfaK6H81B75AQJTGheR1pGaZLtTtr1o3afHKff",
  "key10": "2K3bNSqjaExnA3y9Dsdcztg5Y8Tbjxm3JbqK2v8MuRwaCiCnxxfgMTiTaDDgqSrTn7gewUMP2896buFef52Lt1sN",
  "key11": "4bDYi3bmj34RaG6RfK1pBuYsP9EReU41Gh9JHAWqbms5pBxLfTxe4aJrEUNuH5CdEw8Ee23dba7Gd1Rtb7TEqSk2",
  "key12": "3rTnCiu7Xy8Uxfei3N6n7bxNvpBbYyfyfBCrQB1aSv9UMMxJ4Z2WMnLP2rWKQskKFucYKgTqys9nLzR1TGuAeHgM",
  "key13": "3HDNBGzLvZknU1i9pYpU9iMSezArQ77VwcGUzzFVs3Xf8DAJzhuWg8xw18H7Ap64CNNtMBYRKkvBQbchoEPsVZ72",
  "key14": "2YRq8DRWZn9pqB7fG7GuXjRZRT3iytMVjmxb1HkBbiUnbDsu1v9FC8YyYKFw3QY9D6rAdyGHidovwSRr4zjFsAsY",
  "key15": "4toJNT8zuNipmxffkYpDb9Js1RFprbunenpJ2JpdDc3twAL2Lvn4tc7Rp6LKSZLakKkLkHYpypHzUFt5eRkWkULH",
  "key16": "Wz9fNHNUz4EstEBVa1EXj8Qk4njj8CUvoiMRKWEtzs1sXTC1YAgoyXuUnixaJV7C54fNBGBvpkG9JPNSatfCo21",
  "key17": "gF8CcfPkjXebimVyQZup8216RsmY3cMLGJu4udPrDhep5ok8ePkrS1b4sq73iG7QjHHSv8EC4hYx5HcmatYo5wJ",
  "key18": "4vJLd5oaPE1TDC1p543JogcieCbAQUoxb84eMzZYZ4aj6ZttPG9M2JPCHZcDU6csg2wosfL7maSxqfc5p2NnUc9J",
  "key19": "39qX1sejCbsJXH146NN76JQgXHfWYwwAwe6uHS8PYnnN1vfXWaLrYJN2h8WaVNesotFdgs9o3zZo2ctpL4heSi8A",
  "key20": "54rXvgAP31A3qj7jZyu9GQTsNRFExPKn6j6Cn5eYBADpjcxGrb7VRQFM9QX14knhDPnAG6tJsadAkKDt5N686QXn",
  "key21": "PkmGafrgZnwP4G8hwr9uTY5Bjrdte5oeqPCWMfv1yAzQUqTM2rcWKxwz5xFKbXZymEosUG6SAcu1e7LDvXxxi7M",
  "key22": "2spJBwhdRmqbtTx57yqgEavMR8NcTjGVx9ZsHGcph4tVnRWwDqc8EuhzGPrkugTeqcbZbDSLPKefJrMHTk274weH",
  "key23": "WHWpGbY8jU1ktyM2zFXqavghnJUit58P3WV8yWkRxi5xLerkQhEqjmL3zq7efk4aaWAG3JePyHnhFuPX5ck2r7E",
  "key24": "u4XneGGScdUxqGpm6Kh2gFRk89319D8HmNewQEXK5SBJ2PYHG3ZWTXaEAv7r9YRz4RQBJS96E6kW9XtvfkuVDN2",
  "key25": "t4xzcnNiL8NR9ed3SQDjVH1mwBidPAHRP7TRRnxdnp3cHSCd58PsRkKytiir92a8yFFzVB2un2q8hWKFaNFLBbk",
  "key26": "a1tX56kBrEr1dDY9m7hHDPPUSKWmWLRjmP64obsT77RM28eDcgLv3vg27droamYrJyxQxfdGAmLfMW8iNK8VGPB"
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
