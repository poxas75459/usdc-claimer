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
    "42Xq3E9Ms9vB81e59csPuSNgqcjBJb1tBHoSP6emXXH8awfpHrbYuNq4jaRABvfyrxM1WMam5C2uMpDPWcGkETRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U9vfUCQJubQ2cWU8tMUHMKuuXZap1N796KbP1YLd1VYgEVwMJJ47YpZRXbw2iHdF7SLAj3R3kiL8YpXHvfCvBHN",
  "key1": "4Yq1NTg9gzjzrjBrS2VaEiLT3QvGA1FynKrBXPvx8Gpi7hYBEtBfg3wVw8CXqaMzzxCRmeyBqnSHkmkUJo1dwgYB",
  "key2": "38W3t7Ed4TaNZUCNkRePruZ5kLR2oCVmrut1zfjdLa3T5moPzRXCc8bR7wj7EAZb9JyHendXvxdum9vKwDWp1PTy",
  "key3": "5QxuzeeHokHD2tdftiturHEkV78At69FR2W91VZAcMf4MoaDuD4mfNNUB8hduD1vcEbgabHrg2mbyzxrTkBwzbvE",
  "key4": "4LHhKZmMWNLzxeVh4Q84NyRMnrxBmZqZURFYipj1GvkyoXUtjsKhyXceoNeGL3fKQnznoR28Ps2jpmcTq8zBsJFP",
  "key5": "36UqzhwD24bgcuqXqvUfQtQPpnocGEVV6Gxphhav7aqCcNNrD3Hjh1hd7BQf4coe46R4HyiFdBs6RqmvJ1wo66zw",
  "key6": "XHxPcn4KaCMBNkpb9KfNVrQrc1xxu5sApjtfKhSnSUz1rHGQsBFXGg9kfH7YhKgWN5xVCoQMa1v548jVwhhh9DZ",
  "key7": "3arZZ2XdWR6kHoZD86FQtEAfmGpjioLQAqYqw9CpmZ1ifw7TgDPgjCCDvtNcRa7rpgc9U4BFEgB8rTsTQjagAXDz",
  "key8": "3ZZY8ub6PD2fDHbKLpzy8QpyfVvGrAA5Hw8YubvPqzyeLByNigtPBuWpowck7Wq97mrHx4nXXu6Js3wodvLkA8gh",
  "key9": "5nz2CW8XrNJrGu2VGgzBrNeGcgXjxXqpPmN3yLtwphg6sRVsbJ7D72v1uz5FSxTsA8xz7j29tNnuRKoWqreDKqY2",
  "key10": "4QebYVHuPpHP7ma8DgKqKHwcf8iRAxGfFKYeiUKR9PS7gLmXnWs5VCE2pVWDwu27ibDukMVQjVwWwejbSKHSM2yS",
  "key11": "3j4KQ9MZzaTSTzN8qrHrxMcKdouYKyxWsp9TFxkrr5bNDu2AaSzEke7UePEgHYJM1uBr64xxrpQNrrDDDx7Yq49H",
  "key12": "stzV2N1HZbbyjV464wzXt5USVbJqX3QVt354SQWbmx3ru1DVUBBP6dZU1NH5HGDqZVVhWsE9hxW856hzYAegkmw",
  "key13": "4nSZjMFfwD1P4HUgYwvxpC4bcNa4G6o9M6yAH8hmzQ6ezcD4B8jGjPsWAy9xigdmXBMuYgjz5Qz6vD35cZ6Jw22d",
  "key14": "5sAoHrxt1TR34XDwMkFEZcHFZy4KTjKQACgDayhfy6QYSB75byXyRyfgjcN66Xme2MHsAjBEgeDz7q3qpE53j7Yo",
  "key15": "24oPdvTPiFHrKbF2M7ZAx6PQ3kpw7z3DP2C6zSznaE2kZWjA7oBme5MGvKKBZuiyr6B9eUTDqMiqzM5iKR9oT2xs",
  "key16": "Rosy4hafnjxsF35QxSNdZE6KUEfkkCf6U5Pj65rGx1m8T4DabfnLAG7vvnoCBzowwmPJ41sWeFpLSMoTvMHFAwJ",
  "key17": "61jkLm9fGPuCNcfyDiHQ5JXv7i5hr7RGagEb4cZFfis861e2hF92dxoS1Sj2y9fo7Y6vzNearB1icYnXLE7iua7D",
  "key18": "5LY7u9xUpWaX5G8TzVtPAtbi346faRFC9UiyNKcUhKpa3MkyKCUAAcH75q34jDb3fDVN8XYDeAf5CqT5XgBik3LC",
  "key19": "4bARf9nZTm3K6NzpJEbExmfvU3TBsUrEhEtRkzaL7J5SsmruBwx5tLQyuF4XX4LTW9Zn7yEDmhnURboBepjFzxMA",
  "key20": "3Vqkg3gmViY3P6ctsxir68PTkeR1Mp2MH4CcgKwvqaHSCF4U4vVNkojyYAdHLpfWYQw53wq5K5NdVqn2JipxC5gi",
  "key21": "5jg7X1VTmp4hmpP9bwEsWnB9A495H28cqfWQiMtFXzJJQkwsaRTwybVVTYi3unGzGsPae6CY9ded9nZJX4v6Sixn",
  "key22": "46jczB9nZKY96MWCetgiCQAFvmpuDq2cneg89wfimzQ5cybY1k5wu9wVLSKNufkk7yy6LuCTeTAPoUmdG8L1UdsG",
  "key23": "4Gp1kmxnqgMiyiw99BGTwaSNiVH9aCmLCL98eEmW6EYSTQQNVdmrzyYPQwKZQcmA8h6at4YXAyM86SqCJ8gpMXuo",
  "key24": "4n3wv6mnhAZsnRRsDzjM6c2bJLV5QwBGin5gtdfPydRt8Ub5uEvN27MpHrPFRYW7mkiB8agUAbTTTzXmA4EXWmbk",
  "key25": "44NJenE4Xo5PNWtFkzLU8FLiayppMPfovqjbzGri4AtgvWfaRDbcEkhMh5XJZTfF9FCygqTdf5Pbg5B5N9okVHLW",
  "key26": "5Tm7WxbGhy3kLFqZCBbmFuPopJgnh6AZ1yZXgGykGtDzDi2ZPPGkPEY4MLbc2krQzN2JodwxDyRPx4x6wjzu65pU",
  "key27": "2JnEwyzQFmYj6kEtVxeMsQmNxezpZp7cQjwv7JaebHKnSrnLijG5VJDWFG7Lwd4FJtXeXhnRDso9axJeXZpCmL5u",
  "key28": "4QciXfGeyXZJV94vTjBF7Bx3935fJw1iBEfB2aXxz3bQmZWNhy3FA4Jh177JP22NAkBdFq9HxhpxXA977B9NsEud",
  "key29": "4jUfLfm1XrBPmz6eYQKcoTzm14kPyNMNnkqEeckyJpjpzcub5NquKNUpNs8KUZgoPrSHGfdEzGvvL9zhzUwLfRCj",
  "key30": "24By3AFArHEVk973mjxhmWRM9XQCEo7G8KJ31ZZeB2TqZeqwiWTwiSaiGwU37YxNSqh5rtJWuKYaHA8W3G9GakFw",
  "key31": "5d5MjcgQLnpkqNLj8KeMcHY6nfJhdk8KFudCJ5SqytDomQnTLmqPGT79RwNv4zUk4AvLyTmKDFtVo3NScEF7cwCL",
  "key32": "35SkWzDthpFpDjLXe74qLmUXELP9TvnGNpTDtdAmgxV4nxsw2QN3jTc1odiE8NSJYGTDkVQLtn8QPzXcbRaVayJM",
  "key33": "2Go1LqyV9gUQ1T2nipn7293PjteshfVqnAY7kEN8bzjarQwawA6tRw3jQi6CfJjUMHLHo6Aus8xg4fR3ComJtCS3",
  "key34": "5Z4LJzkd22nzZnYminkiNA9hJfzh93LgHA96E9aQffthkGg2kdT44hnLXQmMu4XRbawsdwWCpm98Gs6ts5tk7r13",
  "key35": "65KhPDzFjnuVHJEHcBCQ2XSrUWrPRzGwL4FAoE5yksaqMYQfroEd4qX31xsZum8ianzHzPC6u9dhCQFWJVTeVn6g",
  "key36": "2sTt94jMWgfzztQXxQzfNhUWBq38EDREQhbTaiitwzMoQXWAfvf726DohnWZHYSxQuDahaQmd7p23VWYStcYEDWn",
  "key37": "2V8BZVKtsDnF2zw6HABfyTork6eGZcJcdLksA177fu7eh5cTV8kKGs1JyeqtqaQzXVYi4jAvrstnNhyWNPgjX43A",
  "key38": "5fxQwdz8RcrMeDUF2iDhskqU6ERwNRmtmpqs8WEJGud1Y9pSqLGbb1ATS7Jg2CGLaKoAqAPyhSCkHWYoPMtcpuAR",
  "key39": "4sBnGv7GJzCXh5UfPbDMeB9njSu81iVGHxdtWuktK5wxQVBuwXrxViAeGMFG3DJYH8tRXaKMRGTrQwSjTfULM92M",
  "key40": "4i9KSFLgBSbzEvTSqfpbDnTLTmBTWB2Hf8MUwkRg3gqaG3JPNJc1sy3bc7uWdpY4y8T3VxJ2DAiZUgcZZPGaD2oz"
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
