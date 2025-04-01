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
    "63vWbMiDDsKzAceYKGoBM7YnDek1r56rm5KHe5Z3t3inoQbh2axZszvALwTJfg59QujWZt4zw23A6PENqnScpGZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pxaAkE3kiLqoJDNZS8WbhBP9dhFvmLFTSu2W71rjDQFfU2X9sG5ZG98kCEFve4CccRsbjjaoosubhmnPL3ddzMG",
  "key1": "3yweeZxHrKrNGgKpepxdTtf6X8zvEka3GPkjMEQZQwxx3DXZrj8qSqwEVGLZwQ7faxCVYFbH4x82eFi4sQjy2sQN",
  "key2": "4huJfYDem9sbU1SmYR36xqpjPrag1w47oDL6kCgv4eJ94BobRgPXFYEovi8uVcr68tad8oWxL5xFURhoi7y7CDKX",
  "key3": "ZW1KvgkWwxJY6JqQMsNtG5zqwkL9jhuJ7CqZJjGivS6ukLk4F3yUKXHVMtQxuEk1a1ci6tEb8fj3Sj1sFmTo8Ey",
  "key4": "5YYeJSBkr4zg3XNuPPaj9zRddZ3wYysoYD6vJJ4hC4RS5ou7JMfkX94gMDXc9kiMyabTfEtdm6wGUmvnfhbit5ZC",
  "key5": "bh4rbdXYgnfEy63xnLQXWoJt64o7Zx6Lfj9ngYRgeWKSdorSH9cjTywXMxTrZRJaSHhA986ZgGYQqjjT4ieyYPa",
  "key6": "37Bo7XgWVTNdnR3qsmEmgUqz4oLPXzuderMkC9e3G8UW2YF2i6CzZeAUfEPvzfE34sx6rwjGHmcNbsWkFLTYfUAc",
  "key7": "5KbufqhAocfY24PWFqR2UV3Hq1Atx3R95NUaPXHMLhY4NHmwqsMTmuH92KZ7BZtV7k8CiWLRMEQ71pbYXcEYhMzR",
  "key8": "CGvz4xj1Nh34s72ubNtCmSfSjy9EmmFUGrViG5ptE6dL5cL9LwF1QXHmRUMs6onKGnBeTgyKvN85RjyYupnrgry",
  "key9": "4QGS2L6ifSv1T6W6sya3azKo92mafaVgY97xop3S3zVLne5aSDgbovxJjYLKfQH7M84YvBFnM531HwUxdcYAMRuS",
  "key10": "4cs5Ld3gGtg9uhEAyWARbqtyJMtmwwTnndD23aukFBcohA64RqETWrB1WMAY7P5jNU5npyW8jFfy4UAsp8LEbVF",
  "key11": "2ahbeVWbYZ8jHtgjH2g1HgkNFb6rxSSugk7fveMrXhGbdjDdZ2yRE5aCH93Te9eYxgaDg7ubbDJ418tpenUAZbPD",
  "key12": "3iATbEXJ8aexFYyGN4MSKQVMGf4LXtUZChKQAUzsMHq2zc1NA54PRu1yiWAhCPRpau2YK6zH4qgkVbBEvneSf5Cd",
  "key13": "23DTGutdZVMLCMZqXzhYKeQNVuSqrZWueYAewy2sUZu3o9FGweDKVirudaqHoYCVcpYQwiWC1WJuoEWCMngk8rv3",
  "key14": "25yJpsfdqseCnHRfAN6RzsRu8N2b78HPRFbHAjt9HC2M3qc1bEV8C5jouA6NfhnNZPQizWdfiJ8vBJgRodu8sg1h",
  "key15": "5hdXwG2QKNAaGRYm9kmWqXzeYVyiiCtrFuTydJUoFmpLryQhNrV93FEv4wMrtgQVqwW3iTkSjMiCKAUM1nxEUjuR",
  "key16": "2pvjq6YZtB6d8UrF4gjq2PvAiEAVSi8HBv4LpSykaSd62pDsZ2C5cv6Zj5emzRxG89c235gHy4izvjuUg1PxTvmc",
  "key17": "2vkbPoKz7n8iNEZVkGV7zqWZMXgkKGU17Ao8BtJqLA6PiL5CAXEwC7ZCMf2LbhvBZ5W6LRW5LBkXHSck8YPgD8P6",
  "key18": "5nHLHUW6LbVEkvpJo869DA6c8tXKtmtb3ibm8Y4MdiamcrTZomLk38NKZAamEj1CTXHPnp2V2bWjMFK9ixV4UaRU",
  "key19": "65NypaoVsvcsVFrghkAL4eT38qeZ255S1yYFPANfma1xqJ9rZ83KgvohFydKhiCU4C1o5yPpFe6DTV1YPu21yDXK",
  "key20": "3fwQFmfZ3e5ocgbztKeYXi4KjmfrmeiFjniUYCohBkKXESk7cJNg8QZ2PJ8hJiat7NY5n4Y54oRPhKKidSLPanA4",
  "key21": "3c81TCMpStLEz32GWPM2AQeX5PSkihYyHP1sbJun3k5V2RL5Zr8LXuLN2L8cZXK2bZqnSWc7ujK6uGQtKKQrxguz",
  "key22": "2ehUysd7AKf5aEVGUxkzhBgt5HtAnUeF6kTAK7D7o9o9Z2E7fT8jsAzvPbGDuZ15DBfAU8CWEuJnZc26nAXRCCZU",
  "key23": "45sVrX4UHGsCr5hgdcHRgXWxR5n9wrauc351cGbfAvTyfrxdHJPL8zTmz95G68S88ymEn6eXMsmq2Q35XA2BUEev",
  "key24": "4yMdzLDNrM38u94HR12fqymjtsqfpWsAP3YFXWhGonu3MSGNxk4xYx3mW8i2YHB6aCewqEC7XSHZ7wStb3KV83D8",
  "key25": "4dtsG3V5JkknPpGYJp8qopt4SnNEaS2CPkdVVitkdHrbgoNbYRw5GdyDm166DqWmkcp89KZThuqt6FJZ8uRQNMmT",
  "key26": "5Nt88JqefCYgCBySx25MvijEg7HvH1Fc5Vw6z7uEZMjTBnxuhSNLytMaHJL1GHKha4WRDuevXSmoLosByjYredzp",
  "key27": "bvmvAMa3z5HD1gV7e7hwjL9y8AmHbt2zCxbE2VLR2ArPbMuqKhmzJonQbp4Yq4ePgFLnbuDw6vkaLHHsvPF4d3b",
  "key28": "4UX2xWSkstiEG3TwUBdVVu5Dhk276o95EvbMbS3mPdmEbMsG829WXyWDUKEp4vNqEZHwyzPMuP76QohxPLXyuWD1",
  "key29": "3Em5jUgAsriERpTjNWqjhtFFer2QLoGA1bCkhYqPmBfEA7EJyS41xZFSxdMHU1VLKB6SLTFgH4tye3h5RFRwS7yB",
  "key30": "2ErGWBxxUBda6qSRSqiTVrmxtVADzYUe7s2B6tBo8hNkFQkcLuFQSMScgb3NNvUKZm8WsHVNNvrDyCJZhY2WnEjn",
  "key31": "uA6Br4fKzGNfRJrrxy3vuoTP5C6zXzKF6sJW2P4cHtdcWYurBMzT73AoLm8JJXEE7P8d3cj5iopfd3LevbYRJxM",
  "key32": "55AfRYc27xRB4dvkZDbHukHDFcMfmFft6rsdnZLo3veboCyfuCYTPSKS53cwoHV8LFTyGZEUNR93Ci6LZFZ6c6PJ",
  "key33": "4bYoEgEc9Afu5WMjXWgNbwBpnkBRWbm3mdJihrekWwHniMNppzC5h1q5wDqRt5ncKcHPHtTG2QoNC42ZgM4UXC9d",
  "key34": "3FXoA8i1xpxgQ8VTojvpZbUVPNJ7wKpDBF7bw5o8RQvcY6vFUaE7RDWjkeegnUzP7piLXqk6FzRomdqfTp9jH69g",
  "key35": "3dPyMAPmyqMUzQNr7Z33LaY1yvdbDrRxooJHziuci5y41nwBBdYjk8WJwPSUVFsZPL3t6udsbS7AkuhoG9Lr2KGR",
  "key36": "K3KC91hFzFQeDiEtdnXSXYNxG7T1zvgTLFrYV3SKTAwSA9oRer2TXzGWjzgT35RgXVwFY7Si4uesmbbv6Xn2XLN",
  "key37": "3W8YjQa9xCL384u8QJmPbRM2ViH913VoVSipY3g6hsJBawWinLa97nHvwrPuxeemRJscDBAh48n8AxPgXRdMxe8j",
  "key38": "NpYGLy7XSvVR3UfU5xDgGh8PKtuWrouomxs819W7sjvMMk1sk8ExV8LYrNqueZFPbWtprzBCKBb4cP9TKnhrsyn",
  "key39": "4vrqCL4Hu2RkKFwWXPbsuEBCnxnb8QinwMbcDRbhxR2qY9EdQRjjm3k2y1uSP7xXyU9txAUcKwMiwv8ym1Ru9Kty",
  "key40": "SN8sJ49eGFqYgqxSQ7GNSWQGQ4KMDVkxPU5Y11GEP2fzXVZs9ZMmVJYPiJ9eGeRjyaa8txfMDnuP9qGtZ14sZzx",
  "key41": "4Da7V9YShm3boM8nhGdNUNCu1QrnagPwdoM3f6uv5Vuva3W5vo3GSR3L2jNd3QtUew8naZaXvYKXRnu9nf87Zc6m",
  "key42": "5P7EDTANyBUnBxZuDAAAPt6f3FnC5Hb7Wa4TfcmuAMdJ2udDGfyUjjWTDgMkB1uTqJ7dAVUxwd89GtUaYbfPmXDQ",
  "key43": "5oJ1iXhg3JpGkBd3T5amLk4aanq6crwXcazNojLDkWThpReEtRSLYGykg49SZJiXs7fCfg7yK8HPqvJTKdUd9Pi7",
  "key44": "2jvWJ5p6DZj63wgzgQwJG7hob7QH9xxy85L4MGS3QwnNoc5nVqDiK6XjadQZgjRnqzYAEndrfG7ZUWHtUbgHVFhz",
  "key45": "2UE1rtsMpShRRuTWfWGUdGSA4rMtJgcbAKn8Biu8VJaLi8VL35YyWLCqCaKiZ2vky1uzZDbKZNCfRKV71prBMcQ7"
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
