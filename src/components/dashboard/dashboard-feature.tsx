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
    "5FusX8FLD8cGy58GsVFU91Dagfm8BfukqPCRr36cXrEGWFpfUV8nm8WfL3J3WKy8UdKM5ZcpUbia5eHmmqNP8vsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dynpvKwKmdjggdzKL6p37D5VtwYhLJ33okvDWfg9MPQ97kttKhEUd5n24z9pVtNVtHNN8JWmz5F6bnhnRRotMsB",
  "key1": "ZzVgSFHxfNHQYmEcbYehaeXy9VQBtq4ehDmbZHmEAfkzmZ23UmaUrPKyKKNqsZW3rXrmdhi1WV1JQKbYeSLnrGV",
  "key2": "4nQGX8c7LMCBDP7kgwnA7u2pUDbWtPSt8AtV3fxPgL45YRjhNcbvZnHt27RSnbQqKd654uYBFZN9iooZBDuyY52H",
  "key3": "2GsZsVtTmi9SPe2wc4TPEVnhVWV27ThEP1Vrjhm18wtKTCuB1WwAUfZpcwxhcGWd3zuW93hGAexwYwtfmZAqXZzf",
  "key4": "gnf933kW6zowup4Da9pDbSEahoe6odWu5ndMCkTGzTookeuW3NKJi2vTCFkWze9MtMB2LXn5zKBGyAMTeF97nXr",
  "key5": "2GPkrAfkGWGPLQnDNnp4TkDW4a7NAjfVB4tcg3tqR1Tp5PWgMNipHHdPbURg29m8rwvBVdageUCjvnSFyZJEcuc1",
  "key6": "65dGCLXzSBYR2pzCxcjkf8kR9w84ZWYz2qxkeawSfWBVcSmCLJcBYnxzKKzitFc8uCy3km4YmQWnS4vt93dn8gD2",
  "key7": "VzUk8GsVk6DLSTvX94P9T5iiwcw5uWsHpJKcRFxhck6dHiXhHriHz9ZWzwah2wnqiw6JSkLAXPihBoKMktkidg5",
  "key8": "5FE2gkmnUbC6wRF9oHpxYLx17xLwVomCFMdzL9rm2xNFxGgdEj7Wf7eCGSooeiCKtPFqg41fPT2ZDkvjwE22X9FN",
  "key9": "5KEvJEfPUpJEASHxTvKz8DGyHwoymytJfr8hRzSGgxccqYHZVagaZrCTdTmLsGrLxqixmMXGYH7yQyibP3LS6PqT",
  "key10": "5Be1HrPKrdgzow3Cn3BHy8BrZb8XKF97LMrvJCNyXKJiPiq6aC7PK6QJt6gXUALmejhhrQkLeWjYBgJsuYoQckUn",
  "key11": "36XCKHwopgboJ1BZQjsKYiRNsx3JCe8ALddYaUmX7EwpvQmf2t47eijdTQ9X4cGC4Wv5cLs3Vvv575toQMWVZYBX",
  "key12": "4Vn8NT4ju7fr2qcyprhKcKkbTuNQSqxmxgMXpsvD5GuCL6J8L4BcxtWKh2RVTQoEDFNZsYiogXiUtQp9CiuJBe6J",
  "key13": "TP5ATzjMtGoSWm7X2YTMCJLf8uL3Y2nswefudNLzmqdZdQKk6ZXyuMU7UrBohC8Qx53TJurGbKiQjNxEyrGXsQw",
  "key14": "4a9RJz3y7FCeLQTs4tV8fQv7q63r1pNUS3DYNVm1LkDYk3WqoD3zyEBL8gaQJKsHUNrQDVAawnTTUh6pqnNHPCoF",
  "key15": "2cxSaetDRoRkzMYmN2zGzYBborbUsNxJc7v4TjhswkvK1X3T6J5zEwzLqUG436LYnQ3ffoAMZHjEcDwtiFAAeqjX",
  "key16": "2jdEjBVVHGt8jm5hUestJMxfqLyKkDjD2yVHxYJDgHbMcDvQzTCZaHigoVAv9Xjgybc5M9xffNRwkkkABWAuWVhT",
  "key17": "4QzR3zZezHW5P83SDHhUFc7HSzQNvWW79dGtxAo4pJwk6Rne8bShgd5oJbT77fd8BvG5uwH45ycDvZAUcSkt13Fb",
  "key18": "3JYWfjP9jRaarwsJ6YRJWb7nhRt8qz1h99bpAtm7AGAoJ1G3B1kyHD1u4FAXoaPnB19FkG9qErLaP6WtBLtTTXrD",
  "key19": "2E45GV9edDv8E3ooeAxz8HtVoL2DcS2f5av3PKpmp7Pr7TgodmTGgcPiVanxbs4uzxhRrSTsJh6tDBEZCB39GM6N",
  "key20": "4aC4Pdu3Xn9zr1mHnz28RT5WewikiFYf6iUZScBxd8dj1Xxoq21HVQXTyh8XESVqe4Sf9U2JH8RHfLEnTJ9AmjCQ",
  "key21": "5XBQfU1mQjgnj1gacKeEvy1mN3LBEJXmUe2yTS5t4g9DhhW8z6KVyMuPiALKgC3CrCtSrHTwATiVmuDgiM4LFkvH",
  "key22": "4V2iWAV1afCWQPxY18UkYBavcehECVxtFiGm4rirHxuqebqADYXpzgfkUjoSmahFWy9y1pcjWF2bZF8MKbCF3E9A",
  "key23": "2cxXXGN6PvPQn6H4uo6BbmsGHdo6NVqhqvMC9LGZG1ARtfFVH48JU47c7QnzjEFv22bki2AKXpEHf2hzvnbB6RuP",
  "key24": "3XAPRLXEbhHbsRQbez6DHZKXaq2wv5z2uHRxWo2h2d6Gq61AafbCAK7mmvgAQCozbeYnbQnpdJS2FPgjwhD2ZFyX",
  "key25": "YYEBD66SKf6n2ret4kQRcgCahcapymqPKMmyRdzX3ZSjQUAZkKHadowJTceyQvw4yB8Ydj4buL7wKQy6nsdqHZi",
  "key26": "3bSCyZQr6bLfdMKcwGU3wwhKUzWmRv1jn8mzkt9gGqcrJGeN8aBvVKeG9ZgUco3oJdHnivHvcCA81LA5G3wCEyJ4",
  "key27": "J5aap3VaV6WUAXmP7UrHqRumLTQfPuR1o1RhAbRMmnS3zaGWzZDmDgwBZrVkGHYuiqDbrWWpp6WxnQ2r1UsGqyH",
  "key28": "4SvooUTA1QsWmMJRovx5UpBArG3F25hhbCSRBkbh1ZwkefhzbZivc4ki7nrMbi1bD4K3ZcaWHY7ssQRSKbuQbAWA",
  "key29": "NAY7uYUERPNRWLQiBqJxPxbotfo98AdrDirPE62pSbksvgmHWeDW4Qs6He6Ep2HRErjQCPxCafME1wgiZKwsK3V",
  "key30": "2z6RC3SwsWK43hfmXA4XyMmFbtcwWptDhcPoq9zYnGDK5tCyvVb9pegLHBH6GNghveeHF2ntUgFRavYR8GdxoiD6",
  "key31": "4iMT9Py8GHzxKVMJYxjfVAr4N5AApKwpq6F6Hsys3tsEtzMvPdJxRgU4TXPZ1mgTQ7cexpHme3AWdQfhGdBNG4MW",
  "key32": "2nZyN4sGireY5ZKyVZDXvMLNxY2GYD8NhrT9oJhiUpvLArnPdihcLnewZf5oRF62rbVpNFkkZnGzrRiphKAqLZGA",
  "key33": "36bvMujcKDjW67CYq94ScskxZqjxKkMsqYGkPDpDFUA3KpEqptHRFzqQsKoKpUJvM2WiXs39uJuCwHZZiCcbjBXi",
  "key34": "4F1Zzswc86fZAFpGnthvnsSBJDHdHF4TRGMd61MBqSF8AAReGcFV3AKEWW12SNjbUZpLRCk7PDzFsMoWdeCogEJ4",
  "key35": "2svViwvPq9DDVcXJuAC8oowDaPCkASbv6HFSSWauC4uiSzuyr9rugEnWnLT5FbzHkFDxc1SwmCmbpU9EdonnqoTG",
  "key36": "3H5bYtuAhVk5mpV5ZNh3T4gWTqz6Rzs3AdPDm3BVvJxi9FwgZQWDXzvYPpDH4WTMVq7RvFjjZ661pB3Wi7eh9tzH",
  "key37": "38S6TDffmYTaRY5NYSnAbQ8ZAWBShh5L5GR4K7rivBnMivHz8hUWPAshe2ffHfau9gjnn24LqHyyNvYxyB3FTSHQ",
  "key38": "2DZ4eba7LG9qeGywVdffibGc6ogoC5422jkE1jEXzQDYJde5ZCUv1gVoNGgPJjnzAu6obvmNM84JKraVNXi834pK",
  "key39": "4y1tYAV33i5WMU8hxSgFLjRZCr4b5SczAFYpWyfD98KeV6hxhuVMTE24p2UTc8C8R9upees1CB9Ej3BzsShXjqTz",
  "key40": "4xDfXjakTe9JdinKhp3ouFpPh8eqauQpDytbSeWqZ9v4cFXRZbfaCFPpHWEsssH7h8WiHysrdWpzVNC61R6cnym1"
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
