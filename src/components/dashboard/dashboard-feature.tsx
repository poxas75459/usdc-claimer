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
    "35oXQpoqZLYushv3CNVDSZZBHLgCpe1QAQxLKn9JM8JSdLiMLe5QGP8tzBZ8TqbbH1MBPqU21nkbyvg8eSKxVJyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52aNKHBkDPqUT7auPBDrLo7aQF3CajZ5Gvcd8ArfwWzzNC4mY8pYH3gBvoSvA4wTbc1NQYWMf8Q2VLq4M44aoQ6U",
  "key1": "4s4K4rcPXQqS1XMLSoyPWjJfMKy93EpNVQL97MtRzqT9o9ULsoZJFik3LqxnyEwgaW8PMt1kLqNV5Bit9UzSDrbL",
  "key2": "4V6gyhLczmb6e4bu7J9X8YB66QxK43kSvLZ4Z7DVmeyK9dFs2jeWNCkravfwSkh8grZMYRLgnDVjH2Keni6kcytJ",
  "key3": "jKcqLzZNYV2HNWTrABK3o5F5zT1mtF3FH7CC33mfSKZWuNJqaChM4pm2YSF785ePg1kGGj1vcb7dFLmf4QTwzxW",
  "key4": "3i1ZawX2TJuMzcRMzMsMBMyzCgaaYAqp6mN8cMaiRu3kuYyGS9zfRf56KN5p9hMEg7nR9VSJzsbQEM9NYhakYnUj",
  "key5": "4GNgqF8bj4Bb1H67gN6Lx9nKWRGpXGHg9DmmYtxZfXoX4BoX1qvCoVbkvMFsoPkSXt5cJTwZJ3GYZASWYBGRvYRz",
  "key6": "3AjjvY1cGUjtmP9NAhFcaNnAwXCazNRCorRUkCPkhBAAxta4X6HUasV4JYFDLtJYe6SZHpL9UkcbMFBkWC79Bdzy",
  "key7": "GvUirFCCteMHhHBthEhN5EXYtDCWfhnqmtbLBHRaQ5aMcDHmZ1DebrutBwNf1jcf1YTmQuqLVAHYCPUXvJ6nF8V",
  "key8": "2J5qrWd2Q593JhhBFAnPTwBCxW1nfMswMqEQ8k2ch95BoGarm37MgEJN1GiVT2DS5L42mcxKCXiquN1zDvsAQWqz",
  "key9": "w73RamJFws1pE6WXpUUTkrau5LpnoDDDP1GmTC8tPS6oxAh6UVN5eoVxHFpzDk1gVAnLPqdv5s3sXvbQKrDcJdP",
  "key10": "2e6Ez7gLj4pFpTVWL6rVSMFEz28uBMkDbPf6PsCJodFVmaNTRGSmwB6imbtDutUHT2ajAT9RnF9bdLaTjFXP3Z31",
  "key11": "2ijsV7ySgsC5yMgwkcvrKc3VRJd8ARGhyywepXxC8vk5M3s2W6mmzGeCi2LfDrpdpAQp8gxpegbq9c4sVhQRvk6B",
  "key12": "5ahhgJ5TB5NrVerfM1YCqV9mMxehFWT1fiB5E9gW14EHP1VQvb2GRpMQQ89ENv1ga8R7uSEezDwML1yLYBb57Tbb",
  "key13": "2cjnuEBZSDRavP5EC5o5FiEtfuEr3w4A6dGk69hDB2nKLLWEfJfPESeui3irkFQ64ZvLrrGciVuTjHQW3vq9NTr4",
  "key14": "5W7XeAUzmqfmcKzHuFGn97bvPfcHArAdbgThRb7UbdjzakpWkSFNHggJmTRrXR3benvuBco6SsqvigWtZR7kCNGo",
  "key15": "2xhgiWesKrpqmnsRUFPXFwDS7Ryvc3yjwLKc1QabMyEsNxKou352V3WEkakeByJxnZ6Lso2gaYvqMdaBPFeSRHD7",
  "key16": "3RYaRxkBdbDbmAxfE1AyV51hjWJ4CAaznAd1e2XHTsumYjKzsnjCj9c6WFcVPLh7ukXVT9bSeFMvbntrsrmneeaX",
  "key17": "4mZEk3QvAYPfwspqH75fy6dMF7DHeo59mFzB65co15XjwqKWcHiPTNdZg9vxueQeppB5xWwPSWVr2BgPrDTJYofw",
  "key18": "4Q1RtDwEuAc8RKEqxcE23Jyo2yKSwBSwd12e9Msd9VQJ1nmhGmqEKhC9kaFZqYobcy9sD47JqqHQQkpN1sXt1gcG",
  "key19": "4aBRSRUcePCFDrW3rUx8txHhD7c4aqcpNiXz3yC9MUdymU35eDL7PwvnrC6Z3qYEs3YcGEXrZ1rtquQWJrPgZh7n",
  "key20": "64bivKEz8wHJpPXv2vYgj18hN4JNNZJtgKDx6jT27iYk6WD6BwTCcoZ8q9Tn2zXyXJL4zJeiKdPA7Xihga7iAh6P",
  "key21": "4jyQJbpfq6dXKmTWzG6NiURNgroS8k35dgYTqXxo2Kb5ojkRTLj6tpCxtbNEzFzaQufrgkX2WuU3GX2iFRsoMUFf",
  "key22": "2gy4zafmE4E8sGy6g21i3sCUb2RdZ58sJ5bopxskLod2b2XCc8SRp5CBQweW6CGne8y8ywEcSZbDjydveFzbDLfY",
  "key23": "4x9BVe14JLrPttVB2sE9xwEbP5jKCZWG3uoopFPqy5zPrZGUNLHGE2QpLdJubZXotxPeHQsr958itCkrhmHBzBCv",
  "key24": "4xEg42K4gpMVG6WxXNeuQfpM6jv9wKJaqqX8zQ7vP3YCq5off89WGX9x9aAzkqFUdSYP4w3Zsn6xvZHFmpiVjb9A",
  "key25": "5omSfk8GqFzLmWexAW4jvaLiXFkDo9RjboFph61Y3DPgdtJxHdrewz91T3rG8BYWunJByDEjLLDe1TWSGNAeJusk",
  "key26": "2bGVpNSGdi6qJpBmc1P3iLu8skkz3egXs6weyDhkc11NCCz1W7Jbuun7RnrBc7V7bdjTjzXVhAQwjTV5bijzDogF",
  "key27": "oAhyUQ7BByWhJjsYc9sQL6WNtxAANhuBeAyUjyChUAZBYZnG3WajbZk7bN1vG2hQehCBjDNL2NNTzqtpm1ymZZX",
  "key28": "3ZRfDyMBkh4UZeiCnrcJMEbMqY4rvHN6XbGXcSbDfksdCQstopeH6rwbFB9rMZM4n8wjZvdaNmbCUqDKsbiSanRN",
  "key29": "wFjR7k9YC4pwjofseg3sgEpbU3bxDRisF2sTC5kXGa8QPMNh94TPuXqww4zhKo6K8kKLrQaSLNhCQYYnjiMUJKr",
  "key30": "4qtxXThiAadDuS8GMnRz6sJYC2ZurUoqsG8F3wVLkkXMoNFF9vgNuRP7tLZoSkU86YB3cMV5fWSFP3CCdFis63pu",
  "key31": "4jWwh8VStgNwGfHg8UCrCZGqX2PMcvqTsLY1RXuhSGwU4btha6KZvecU3vA2kAKAN8mXvNwsEyJam63diAfLXnVc",
  "key32": "4naKezVQgbV5fz26cbh1wWLwaPTbWEpJnKzxyp9MHRQgMW4GRcpswDhzknuP4AfZsYeiiZAV7zc8Z14hFZCQw6sG",
  "key33": "66RwABAboFSvoSN5AY3Gb8frSUvw2AdBx91Bp3Um5kTGLP7DvSk3LPCRj7nkGY3tkpmmv999orczet8jCxFLRp88",
  "key34": "234MMYfupvoecUe7U5yjDj3MY2FTG5e2BzKFB3CEkC2ADdmMLTeTLcNrkJD58GZmnkyTzDug7FpGsudt4P9qDtwP",
  "key35": "3jksVFcv4ZeffnpZRNvKFCJdfhkPWRhWJZ3sxk6dfrgf2AUcVhdLRk7BXrozQ93YryNKpJWFWK3uj2CHAY7CrSZn",
  "key36": "4hR5xUFbxXrNhWSjVxns5zJza7insmW8dq5FrXPzb6qV2LEcbpLLWSgHxo4Rq6SusxWoueGoN5hiijP7ANoxR594",
  "key37": "4bzamNxrqQHGPDkxEnwXUktBQu4tn1MqJGwzx6SFgjn2shmBtKvUUGwktJXGJZJS2qiwDH9bwKq6Qaa1NaQHZ92y",
  "key38": "2t6FrwR1F5yovsubML3uZAHDRACZaR7vvQfhL1JeRLrs2SqGeetPW3UEA4hGdeZRKK6zsxUNZ5ZXFxAQ6W4rXmKH",
  "key39": "3fQkE2PZjRtzKJq71ffcwYx7kMYppEAMBJ1xi2wzqyAz5i3GABPnjhuQRmmRZtvF2T67pRv3bpXbojuewjiRAEJ1",
  "key40": "3k94Cv8o6414MSPQjXzTJ4RerTRLQZtwJ7dBoPXc7xtFtuWkEcGuCSahvotCuGoRznWi77GyZ6qaAf5Zneb5GSN6",
  "key41": "2jEnzCJPLMERRqfFMM1rEw7qxs1wJfeychVCa55483SX3Hu3Cwkpd8HSxfyBrNDMrAWSXBSZD9VBRZ8rPsTqQfRG",
  "key42": "cGnGhXF6fJS66AZQ3x6s24NbabRwMY6gGtAu2vz8HaBP9RhGtv7sdteVBqMXzYLQD4a5FXGz4VJz1R2XSwxe1LM"
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
