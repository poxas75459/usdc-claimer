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
    "23bn9XkKQfr1HSBxbnAXyPgFP9F7fNxJ8ERSo9Y16zv9CkYAExNdiWMnhcb2nqPHdWGXXxqafc6UGEPNwtxMVT75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43msup4A63x5EbHsfRhvmPggKV6Xf7j99cCwyteG8nnikLHErd9xrMTN23akznM19Pyk4FjYpVhY5mH5EVMabje9",
  "key1": "5jzZ4GLTsNrjF5g8LtXgV9BpD6TuNUgzkDTCYA2gzjGKU12AnvkTzJ9yarrfA2528KE7Rv931nskrqrmCWwS8Vgt",
  "key2": "4rL11zJDh1MyRkcSNNB49iajdqv64GZ6cHCEYaszWD4yQoCdsNiT6KikYBfJ2uHAAi7y9EAhGrG43RQruAtz7hnp",
  "key3": "Q46sX6VwdhyXrB5n6QVNgvfAC8K9xMPBzbxyp6dkfaniJYJQopYUgmeDrDxNbqpvJxZ373mhKokXq97wDeukKnL",
  "key4": "5z8frUH76wgXLhQBwD5m2Mt8EtsM99hQwmvy91iU8VGCe85bNEi1wJTb98fVacQF8GtUdyhu5yEiSksqG2JPf3Aq",
  "key5": "3orz4bFfaK7fhGsaNkpNq48Q1WUyEJkoEy9vrQs2i9DGezzSbqauXZNzv9kALcrmLG3cXmedLPH43cwEGMjrJbiK",
  "key6": "3LC3o5WJSEcFDfCbYAGjTvFRid3nkBeP75cSpaDPFbqmp94ew9R1g4rFfWAntuugR7927MTqPibq7cK687qodcxw",
  "key7": "4W45t5FQhAH46Ag19RzmxYkRAyof7BZ78muLVPWZQHvdqnenyb3uv43z6pTmzpSsmQJm3oLu3fNsUjFyyiUzpQs6",
  "key8": "5CL6LWDs6QaPkDzXR5JLomxw62CNsZLz7p3fZ6wp8EDrkaBH8fENnH6rHk6gQs7L61yogRdBuvvTnYJZyEQ63oXk",
  "key9": "5roU2Dnp6GrGz8sM3VemqQfxCaN3gwsTfvmfXMnmPmx5r5Y2TwhKh51XyFF6M1gY5zTwkkotHCbY9pTuigS8R6PX",
  "key10": "5jnFkCN8fG8kzUxLuA71Kws7pr5tkicih4havGbvE9FxGF6XvVVvdTPCCrKuVupV11uoD1z4d9dfB4jXbgsgxJL4",
  "key11": "548U1LkAGkMZfUiGCHruWQo3SFqsdCCLxQFk4E1oR3ijrxoxH89yDjT83JtgLoDzh1BcDXapKKMsvEKFbSxGnaYj",
  "key12": "3xjyL1R75AJyychwghJgBbtbDati3viZjNLKWHzR1f3rnwddDaUmHRYyNGKL1j7Av71QjYXoetNgR58b3QSbZScU",
  "key13": "4bUmwGd8JmNsfpKHj5mqaV8GnKTJEMVzAfo77G5CFjtxy1YZ9x2yxhzYowyRJcjtt2dFLqWcgHtWwckwXhtUyGvS",
  "key14": "3EzyxL5g6s99f8s6UuNUmgGznq3Ebs1K4qduUEkYSNpqyGBJf5qwphz1qcXAS8qqoqfowRrN6cYmcEcPhP9yUuDL",
  "key15": "3qMDQdzMtUnGs2eTmnWTyrrFzizxkLWVcQshDQcysSEGCgYJNM9ZNsLUBHB24K1aARdAubhTtKFGhQJLNBD7JSUN",
  "key16": "2uPqM6uTRP7XRJKtdezw3vNqY8BZrXW518nNZpV4raQNCcB3w38m8tBBEBJzkNFamPgvvDKpLjmUchjzcvc2HazY",
  "key17": "4acQS7AaUM7oi67bdtXZEZkkLbCx4p55gM2sj1ZoxCxTHNjLjEokvT86L62WdJpeCpyeB5WRbFrntzVqwi856FUJ",
  "key18": "5HUikqLtEzxARQ5nhe9TBLwcu3h6PcPujXDL7j826jh74q4aU3utVn2kNbn14H57ZrKZMEQ2UQR3qGCVKNWkgtCR",
  "key19": "5Mboat6UGRmfLN6S8kBbgs6sqYwEYDFt89Vvw3YcCntqJaZYdqU4QCyufQ2nMFVZnLSKnQF5vBdoeDZghzMYiW8s",
  "key20": "2JcuuLVcsnSabzSMeCeFTRt6JUSw8fS4qW8mYthsrqqPYyV6cEpexjdTDAj4PpwdzQVeQm9JCk3VWpA6R6g1yiuM",
  "key21": "pvHemckb34CBkD931zkcVkoywrrEs9D5C6xXCwa29d7kY6jtA3HBz9vejWpkJw6oNXvgiQt4v2q8Ldn2dbHgyu3",
  "key22": "4PBRSGQR8M3JhMEDoHwwjPkWdYkTjcg27pQQGm5DM6W66CyZ8rrTTYyy9ryrQSnXUrCRySNAH2rTAjWcuAo8SnPA",
  "key23": "UZCo6bhR9aF6qfmdCPEojAqvL1qrYmbEJnfo5G3ACnyAjJoDqCMN2XJwFsaiDu7HMhUqMWTA7YtXidmRbCmTvVc",
  "key24": "31TSHAeEQjYZV16bi5iXdZidrL1bWVusFFUfmNiNTVJRMcQhQugHcmqD6QDfy6UDVkfSgWKAWkiD6QkhcuWoGLDe",
  "key25": "qx96ZkU7qnBTYyCfk9r14La5MHX83eYP8MzdGBhUpaSLwzhKxhKTNva8LMgdkUyWAjupmMWpxYxwSQaWAd5VsCT",
  "key26": "67dXnNwp9fmscKQ8dxivrYzJts12cc9zYx6pSHutxEabx2LCdqGe6GdDVZVDVjcforHpLS8149NE2YpbPaeKEt7w",
  "key27": "4faak3Ema1wVLpZC4TheDN5ay6SPvCt73UC1T8wRz6Nvch6bjGuo3M6ziAuR6QJeF3mVTKA6y6gFExs4JtE45neP",
  "key28": "3n1BM4VGDrYiLuo6cH68v7L28tY6QGnSt612U1Mo57zao3vdaLrVU6HBzeptiFjUyzxfSRZggL3ysZNuWmXqPXD6",
  "key29": "5an6huSWBdZqkJhZeunKKYEH5HntcycWkoNyEVxyzgD7Z4zXyfg78BSKekvREwVkQoUfgBUSin8AnmwnmotMARpg",
  "key30": "3dx6PGs7Sau172GfgyCNDjnvR2YuinNke7kxKuop8p7vVt8W3e2eVN9v16WvAMj8nter24aKNvEiphQxvFMCtXbm",
  "key31": "3KZu1PgKF6vzYH5n4ciJwrqQkpJ1VRwrH1Lq6jBv2DKHcm2ZEJgFtL1NjVf4hgMNDxqbpZ2h7dsKLnpUzzHLJXwH",
  "key32": "4p6nXu2sC91tMHaAe5Xmhp1XZGBBBTjxEaMRwBnjJSfupKCBg43abHGA8xixSrTKs6D4S1qkDRN1EdT44Z1tX6Wh",
  "key33": "444fSjBzy4HVDmRQXLHxyyRhz1REn8aGGdsBzX5Dqqd5ToFtnYM1c5sx6H9jJVFgFyfLUw1dCaZJfAkc6YwgoMse",
  "key34": "4CRAtMYpF3VkWUo1yri2g6KUFHvTuLwYpVQoW7m1m5dmnFbWN7bgsophur5xekTK8F78o4JZNqXQjebbVMSJnce5",
  "key35": "4QKNdvpAccRcEudhKWskCHmpidq6KejjmeDmUDnAZ6Cxh4z5LG3MAXm4RrxZXDAYTDaGM8ysfk1wRioG3gB2sQP2",
  "key36": "4LcdN2yFqzr9X5JmFaTzgRA4mdvUEq9DjFs8smZqaK5kycgUsncTtjHm4dPqQrPN817L3vZUP5dRZmBdvwD57SbQ",
  "key37": "43nUN1L6cmg1H5WxorknKZq3Dc8TVSH1ycYkyCDcZ7DwppnYkGvQGKAawSgMwuvopuQJrjaYki44yqszg1hqkE4r",
  "key38": "4b8fmto6CKuHt6drLZmAns7KJQPENY5kwdPDhNg7cvU2ip5dVTLEXH6LG2Jogv9eaNcQGBevmfTUq4SATsru8xuj",
  "key39": "2aFXG3cVgdHoMFwBXfjhtyPb4ba7awTqh3isGW8tKC2i8sF1w7ZgCx3xRdVLm5YYyj5qyYe4iL6FawJMkUuy7qCd",
  "key40": "5u6fbAdoYpg1EYCwsxbSuP3JVeUKtNV2wRbY9eTvpfoDbeZydGSrySiqNYe2WoexDnYJ5YJdbK48iqN41dt3bHRL",
  "key41": "3jNz1Bm5cgDV4MEs26HEBx7opzApTt1q4dAdSuiFAso3bAaZSXFUwdfjYg5ZK9ZhxpZEsToa7gTbJy139HoFtPMF",
  "key42": "4FwTJcEqSdG2q1iMPMKQ272JCaT8WPFzEWkseG41McyDAuJRtutYYLCqHjivkXnTB83Uz3JhDdKsxvZSaRU2jU1w",
  "key43": "62b5nS5Re3cXZpLiJ7UktQRjA8JD8pUsCQAhKDptZdP1vyhZ5u9PA4F66NaSVNfVHh2UUMDXC224JRQet4wZEJvm",
  "key44": "NEayWREAsjJR4sofV4GC3ygFykCcLDXL8dr6Cx6KEQbTXk5KqEt37bEf3TZFe8TiSA24Tc4gCKpgSbZqFau8HYy",
  "key45": "3zqEexS2YkhJRUwa76JarabgdYi7EvJze1HyjkFgxb4sGsTHmDqKFDjSwNzz59RMyAZJcir9EqVup88bayZRNCa8",
  "key46": "2gVTWtzYqpks9WbQ9jsqutsbsnQoDhS5XEcSo1nJPq8BGsy5cPsS2PyJNcTTXWqG8zABmVWTQKvjETDBmjLVLtzc",
  "key47": "3ayNTrmDpCAM38vkykRPCen5Rcg3G7nWmNBVbNVn9JfMPwzkb9QRzfVW8i8Z4M2aBgm4zdUZ38Vm7yZh9TY7xMFi"
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
