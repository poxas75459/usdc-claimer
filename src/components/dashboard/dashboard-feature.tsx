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
    "2oUY56zFw7PxAzoN3LB28iB1JweWF8ogEEvPEAV3EiTLRrV8bYfyrnYtodcY15F8HQ4oWPmSpH35Sj1gB4XGZomd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tupHf8FkdY4YDWVNBgvzhqF9RhEVqXKWRV4dAb1s9h2aymGzhTdbL8a7J24MT4VPfDFcmVhLt7F8vaS4ZZSJCmN",
  "key1": "2iNWifzsoTDindg4PyZ4nGf5wQR6JswmXKvC77MVE2N54khoTT4w4eKD7udYjZiTeENFShDB4aDJu9PLbq9kxhUh",
  "key2": "2hPKiEG4vG511pbhfs42cLFU7SuDEAoKdANxw9V5oSg5TMDZfgFeGL4KQ6ByFq5pcojh2ZXjpRGAfHRVG9i6jEoF",
  "key3": "3RyBMy5RNd8rLNvRa8pRRpSpFu5YEnxAfk8hJagoDu4PhsmGTXPN2Ly8ncYjwDaSds755hUPVT4TmU4ko6Jiyeeb",
  "key4": "2aNjM9x9LQGywF5EZuZorkEf5NnL8ShJZVuNttPPE83g43CUeQg7vqosa1YHQkG8eYGdBoQAwHmiBGyWo7mjsh5R",
  "key5": "4REBXfChZ8ykCjZ2WEURCBcULURMb8wbrhPs1cXouREgksxTgNqY6mG84iX7wu5k8YWRGGa6MfeKYytxNQLTG2Gv",
  "key6": "5zAHrrQdE5eCFsuCk7Uxdu4epiAAAQTiBSNVYLrwZ4wKRTvSg9wG6jbAnAGataneAyQ8iPBfv8uo8oazSP8AVDxY",
  "key7": "2XmpJq4B1H3Dv8EpJvAfjAHrNGppaTssMM1m4pFELpuSbvcttyPrPPNeBZMqZBhHGyV4iZGhVxeh2wP2cEVGp3Wj",
  "key8": "2XZJVr2PkjkKbZeUzA23YtswznE3C34WWGCJ1S3X1VkDpLg5Mka4Lo96XM1s3iekZEb4xczqEyTTz2dt4DSMDa6C",
  "key9": "3P1y6eVZs1Rx44JhJmb7Ai1tBeP4Dhhcym6pkkSQjdF24qhhXpkx5RwbzMcJmqn92x7gbsTf1B2D1oLAbKoAmVp5",
  "key10": "DEAa3qFpLGAW8KUo922Hba32ZH4qaXHPeNjpGTxmWcDCsCe1JjynqbvKTWZhhJWXZsgJvfwLCSHgtnzeT35Guj4",
  "key11": "2xnqgG9FbY34zS29qm2iqvn5FfLs5kTt1h2zpkPcyQ9Gb2gLWbj7rTjei2f51m2k2ckDZpymbXVeqDvEeTpebwRc",
  "key12": "5vF9zo7b87h49rb5fTGzVpxSgx4u2ghU4J8dbG2KDZciarXSnFG8rkTtxjNdfepDrM2LwxuamMKU1YpnzWohXGim",
  "key13": "2nVsFaEDDGgjEGTFXUkUpw8Pb38Z2bkwMiRfuH8s53UvDZ7kyhuC4WoxtQQHD75kaMtcpyU3nfavR2NRuMhjacPE",
  "key14": "48Xcy6K188dmarw8Qm29wnUCYuLN3bR5yL6LDzoo1u63eGHztfsi1LLHTEzJRxzZ8EjTxRrFk1Vi5z5okDQHkpVH",
  "key15": "5fAq8xFCwxG31MZ4kkSWkSuFBbc3UQ64W5RGTNjV6d977iupX6iFjj5Wkwj9rna2ae2cbkGw23i4nNggLWnAW9a2",
  "key16": "4aYR8wjdhLjgE8s2UjpkaeawnX2SLQkhejncQuG7ZnrG5rueDAFa8p29cVYPqXJXAXq2NgFeFakJakxV65qJNbcZ",
  "key17": "yD69BTiTWGhURRYi6NPZe9SpY1KM6HvsTYVmBWYNxbYwC5K285XMar6Vt6HHrq5m12ED4kEU4y5Bg1DBTQHfUGe",
  "key18": "3aEABwGL8WaCgmFPJB1BzpfzpMyroDxQPuTJJtwU8XecmbbcH18ZiXnSX7Uv97zP2wstKm4hhnTSdr7yhQTeFomF",
  "key19": "4KMnfcpAcTPx9NzmLAQ5j4fYgrdRmwW5FKohFB7j1gz7RHcqsq7y9b1k7m3xoV3UNCJsJMQX5x5D5d9GmgqdvHTz",
  "key20": "5eXDSQo3Rp4vS72NR36pK7NN3QzXZxrp8UexCWMWjFLS6YFLY8bdFvfRKWaD5RfbuJPrGKZh6Ci3WToqSw68s9RG",
  "key21": "52TTrwUPBv7NeK9LVYUgFvGHk2U5dY4v8DVqKTzJHfpzHfJFHJ34Y3ypmJdyE6BfskxsAGhWLxn5Yg1NJiMmTeML",
  "key22": "tXRcSjyLyJ6xYE9fqaVomvZquo6FD58MgJPVh1qC8y2wGUCAoGv347n918WjgQ5GcYRpAJtMuPim4MgPQ4KhJFa",
  "key23": "2PYCqz4zxexgUPHbgKXreiYsrMLB4k7wvGMpDeDsbA32RmhkFCUAAx6hiamv5ctvKynB4UE6cd25rZhC9maT9TxW",
  "key24": "5fKsZNKWYQC8HL4rMgN2wMCdAu728eBeEEp3jwUFJdxvVuM8N8Mx8tesPFqnVcrp5EdmEeYtBaTZ2GAyYjXvH5nU",
  "key25": "3UJiEBuQHRWDK5XyAS2oKcZp3RxBqUCRbUXGBfaHzNkaT3WRGeHuCMmyTBi7sqH96T1SXF2a41f1iYPsE3cbe5mZ",
  "key26": "2uZHRTmuhzR4A7Bt7iw3KHqyZ9STjGMqpRoChiivoxHvQFkp7sgYNsKcowkQZ9A9KFcF1Fd4kRatucvmNP6jHsds",
  "key27": "2qHzMYTjVkDfyMRG1sdHBvfYQLq1f1Jx5XL75xucaxKXmTrvhCzXzTdLBz3sgGVXKc6wR3W1iNNVMngkWBtEkJ6Y",
  "key28": "2uPXGSy4bsMge5fmnoCscupqAqEFhubjgqtgYY9GyUCZcvbFLsmm8pfJawWbRATJTLw7b1F1L7Vp1ALKaBJm8wyE",
  "key29": "5pQWyr91RiRQugYhU7XfA8yhisAk4KCSJLdkRscasQfXDzr3QdJCDXEcZGmoZEbuAEvxYt4JkgpNHsEyEwQ3Qm4Q",
  "key30": "2b1zqhvwRKRCgCtUDPokvag4DraojEzfPoDJunVTUSGWg6xQwftypxtCmKJ4NsbH4L8PThEwfpc2Wf1emjBwPyKi",
  "key31": "3JDgR62aHoiuMNXQoxoZKNH6RUrUX9VFkD9xRt1KB6AKTW2J1y4Bz9eqRWU1dpZ733Cj2yPTXo2q1iRiPyvkQCah",
  "key32": "51BczUu5w6iZZt1ERVUc8Rxqvf7tokhoGjkX5Zi5E5axic5z5NQJVNvLbsqB1quDwLTwub5UvTHcgAkRRpD3xNc6",
  "key33": "5VEzRDBfUkd3YYftDdPNiEabASKucCqFqqekiffetrbb1FnifR4hqJnPscpBgGA4zbSfAjhQEeV8KaRhRnMb9CVj",
  "key34": "2gr4hHw1e2kVMvTzZTiUHgn8dm7uoezQ3wnBkE4dJF9bzdkydPHLSpzhAQsSAAUjkhJoMMXyJQmxQhtfqD2kdWJP",
  "key35": "3woLDDKM8rvQoddfNsbfWkDFehXLmKiNjkXSrGFdLhY3vvo9jZDCJZQ9vewpJ254XaDqbxwPxn7ojML87fiJ9Aku",
  "key36": "49aaAUdZn4aMSXnPwAZwnKkQVz27LXeBXCj9xe1TpHj1wSUx5GQ5AmXc71sc5BAgWZqxvdixMoFRQL18kUaJaQXc",
  "key37": "3BLoSaSwDz5pbhx4TyjRpNdMzBYVyDT3J9C3RPjDfaabsSNWjznjHRUJFDYMeV43WspqKYgckpEX2i5A9BUmMkma",
  "key38": "4Dbc1AMgomVGLfvmxvFhEwtrzWNKkHNad5i7oUjoews6ymgCayxnFqPwZt75a1EG8HWL9tSHLn1reEKEa8SM3ZaL",
  "key39": "4VN8MQKHT3m9XpbVWUmcyyh6yZEjKE4Mw3yNe6KJW2QdoxeU7HQT4dUirD1qyzabgTtr2sXkvjTSpo7b8J1ca73o",
  "key40": "61Cyx1DcpG28E6wwCXcP8WLtot8gwpxKHNbBf7SsSm2tQqbtYyx7izhChxEQLXJq9FcTw3ADkuttKpCJr17cmdMk",
  "key41": "hv6T2bwsJYuCh6RQbvcheoEx5uGDzBo5MgQDYobWaaKCXVPBUB3UuftDeXmFgoQuHCkc7Sccoj9uts5Ez85x6kn",
  "key42": "2sztQdU9MCKrLSRjNeBWSeJujDWfSHJXW3A6ZGZyS4wwXcCckX6MxFSKfp58xPB9YWJxseEzsWJ6Mj91bxg6BnJD",
  "key43": "3zfYbtbLVreMWy1CaEcXVfR3mDNJqGYqxvbqe4jF7TCbqyD4h8oAZVBfr6meFUbK8F1Ut96Lm1xm3gUUQ41CtszH"
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
