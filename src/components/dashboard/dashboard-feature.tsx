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
    "4vpziqDAuuk2A3uaTWE7qCN1fYBJGPZbja5zuoP7FTtAhqT4eWXGF132tiWUSh3xrWXXE2yaacJ2KVZc6yP1oUUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cSEYSD8mfUrMeSMjDB577o1k3GcUy7z6DLecaGisE4cXNrLSkWwMWNNRrJ1yi3SeYnj7sSQ3eLKa6Nn6twH34tH",
  "key1": "31JoZTxYixNxznfNArAHhavzzTY6cMMC6WmCsuvYgmvTJSQA2LWQDaa3qd3jUk5QrWisVPsfhanpfimTRNLyFnvz",
  "key2": "xyfZkjqmQisg4b32RhBNN8GimEmSGufG8K4VWMqL1D9W2Sb8wSkh2rDW7oRRfy3zdrFtVCFEfYuYjtZzg9Le8kH",
  "key3": "2si5UjGnCGVTUHYFvEAH7UgBbxcdhLXessrzkRxSd32RhmtnSaxYLMW6fsjmJD4L6GYL9bBieYnxvr1Wmvked5Ur",
  "key4": "2anx9KzKrhdzDaxMeaVE9Z8yDvE1eAoAJzXw6Y9sfcQ3PC46oKfVTgfvS4EVacvgP91DumviLnFmeX4zCvMmfuiK",
  "key5": "2rGWaCyE3n5rXeej7obCvcPFZys5485PAGWe9zkMfjgGDMwjgRTxodm1fXAJfvAsX6aU3h4t5GzTFDZqQADPhF3D",
  "key6": "5opZcsQjZWZXp6iiS247erCckdh55aPhw784XuKuA4c6bKdfsuwZ92FetKp5V1wh1p6AZeoY87C2LTRTAreLvSRq",
  "key7": "4nsoST2DLaA8MKCa1iTDnPj1tHuG59G2kgRtkwYqXFPL28WLC6PVkz7U9Tf1BproYn6dyR7pbyH4ypqABjHJxKz3",
  "key8": "4PoCAEjMqjVUVhhYe6XrBj6nh5TrB5zJvvkoNxVjw3RC9e29W7AREm4xbFLGeaEJoUKsgynPC8tp5uitRdZLLdPQ",
  "key9": "XdHxkKt1mRhgwBHpBtRxxuE2q6jNqjJXutYo3PbeuZf6G2kk87a1J4GEuHof5DZ6gd5Uq5sES2ubHv6HK1yU5Zq",
  "key10": "2F1V7DRFKyFjaSY6F59GHhMu33qcXKyBuKXC38ZJggmmtUeeWnM3FjTVord5VxbbZSrfK4rghiGQ7nHG7c2fNizr",
  "key11": "4Xgbho1PhmtUtpcdB6iNCseraeFMXFzZob15nRVZNqLNF1JegnVDAdLGnoa5GhkBoHrwSLe4F8uPHFp2rycm65kh",
  "key12": "TRnSBwRZhzrtU1tpLksKjQtuFo8qjXh4cGcvoCcC2bsfHXbiW3RaJAPV9Zjtxy4NkvV1Jg6mdJqof4oKv7uaKjz",
  "key13": "4WKg8SAy1soF8wPEomLMt8gdwiPLuP1RxnTywk4HscCacx8RXixFHRoQNyosqUg84uua4dB61Fyk8UEVbkTGPo9R",
  "key14": "2EMRdJeWXViSvEgwN43ARKV7SVb6nptz1wJnkRgrTQaNMjbf2RpbfHzuS93QQZmQg5naP81stAvpFBLM7sRpdMGF",
  "key15": "3CwwHYBU1ZiX9bzfXTejrE1h1CGFSDmByo1t5x5SASdz7zquNNqXxvrfyMobuAezHQPUDywPg1knsqskyymSPu2U",
  "key16": "5h6KH6NzDmrb9csJoBxsgtLPwvMFn9RX8F2qdiTG8RUiR64ZjV92FL9Rx3THqhcTGz5PGhE7NRvxN8JdhxDXMgJU",
  "key17": "3MEmhmqd4nR7XVPj6covc6LkSthn2xHWhYnVEvbmtYuNzDngJfXqCvqwsPmxf2hHNSFACJAymScVkPdfuRNuUNX7",
  "key18": "57WRtfhmgetQuscLG4pQXvtDS5nQm2EdBvG9M4spnERv3j5ALecBHLF1iJ1YjfLXtmBdn6Qygj6YC3AvDATvvsTy",
  "key19": "2fWv7cD66uxjDuXeoe6oh1rLYKh66qsazp7DstK1Z4CqoXAEyhvK6cb1didFBLh3ug3oJks95V8xZp2qrbjKK2Jq",
  "key20": "3fr7Rj12Du8WhqahgGHt4Xtg2kyN1cGTdBRrUHP4HKSKyesZ2KvQ8aXghTqn55qbjUQbNk2BoL3VMnu1LeWwvExv",
  "key21": "2VPeXU1GyUsWqnbE4b5EimBCMpT7YB3KzKZqTAuXp1foH8vVxCsSUSW7VWH6eaRuJwHubRgPwL7pNpb3R3ekyxxt",
  "key22": "2gucaWf7uEtCTFzm5vP2TX3Sk44SxTyWMduhFXa2HKp7tUizRefFnDeaJtNqC7L1c5KCgPRmt5mtHXj2TmyFmTqq",
  "key23": "41NSxmqPURJhZaRnFr69sg2b15z3WvAg6L4xWGwzqZiNwznuP8eVy36Ugzb7BjzzXycsRDUwAvRqwpmgbeHUmpCo",
  "key24": "3T7UN4okmHURLaE5r3sKjim51fhAQStta6Tcpr6QWve8DxrhJqradUq9ECMv6RT9TYTtn6VXuCMmcZqYgTr2hYkg",
  "key25": "RHdXAnrJeyPriBLgtJJ6PPjmRarQPBboTPDZHXzEBf2icWm4eiAXabAqzktLfjMhpdabapu577BYo7DhRdz2MEn",
  "key26": "5uh1TE5vXNVK8gny8E5nFSSrgNtAGU72YYWrLsx6YFcSUKUHGJR5ewALj6FY79hgmzGjuDB7WyHv43SX4RdMe4AV",
  "key27": "5w9vgSd4mTpJ5nnRk24aedSFniWs6TUVeMdVgtHkgZtBwieoSTDsVyDh6pwM9iPqv1Q9KPch3T1mJB98esaVXQMr",
  "key28": "52TCH9VPrwfi2e74o3YHDetTz2h6UcQCihahkbajd9HoEJh1wCrUtpRWJUThsbfX8npEKhW6xevx6Q3H4zstFroq",
  "key29": "4mYhmQ1SQ9Ymwt7zqYP5mQZ3vqTD6UqY1hrfJQznM4b4s6xUx2tGFv3yxMT8QcWGTJBpYNfkcGHGD9DBM29nDvFH",
  "key30": "4qkBvdasSykGmu4nxZMfR4Dxo6wPQQjP2kPcrcxt2cdWT7zaqkFuD5Tg9Etm3XPtqKoNgvx7qxBZcRTdeniQGGuy",
  "key31": "4X5Nf1vUEyUW9CWeLzq574Zzk1FxJ8mYhYZiSj7tm7FBaqSTLkpoKkosZ59h4z6jgkLuFkpXEyrhpQDxhrNWB53Z",
  "key32": "5TgU5hF6XgPsxJBk6RyrToufmKWdAYYSbMQRrACXU5sTvEWZRbE4wPAnrLrsJWb7ttW4st76J7SnBjSUvfBFNgRd",
  "key33": "4x4XzJVAznDFVZPfod7pvZkzY3FhFsJ8W7bfp2FfMiYbEdSEvwQVK8bMz8yoQQovARApDKmD5GkVGFQND8x13sMF",
  "key34": "gcuS4rf192Aj4K9hqZcwBSUQehfuWKidJD83WQcKvX4LFRojJmfZmLTQe1UotTDcNqCkaAaHLUkip9q72Mmxnh1",
  "key35": "2ZAvfoLr31WVuyeQdN5KPLHpdJFwA7UaR4KnwwSFxZUigp3KgT4UmCRGe9c5hrMcQREKzvy5zyHZiEhSWMTEi1J4",
  "key36": "5dV2H65B2VkqkT91qagx6N7yTBC92vet9uo4smBk4CxKSrKbv5yCayg7LpBATEZE7KnG8yoBQtzpTBiAEw2ex7Ur",
  "key37": "2tKULmqGz2uXMEQ3ajMzq7qwrYq44xUB9ZT4ZybkERCtJULeMk8EEAwMrUmt61VGgMXLeo5kcoR9ALpRfSgnK6oK",
  "key38": "58tRi9sXdJV6YpMtPE6hcKbMdknMCFTKw6dP3zGeNqXgH3XnMgDKCw5dLHZuaJ1eZUqRMNDPAouKJPQRgiZAVyUC",
  "key39": "386RYKh1Gahx4ymLXJGVA9it5Ldxfdg47rChqW2JgNcZMy2bySvbbRCfHQAdB2jZqeSU4GRyr2NufwLZYtHsvXwT",
  "key40": "2NZxZox3MSkGYP1SEEKSkNEU4VvZ5yx7hxA2QsqSMHjqmGogFjHetJ3ArUCVj3CLbQrGjpemM34gWCn8akM84RCA",
  "key41": "GwSLhYK1ZpQQZ5KzLrPnHL6nnT8HKXLsSZGnk6mDQDqaNbhJJrZeRJq1gLcopJqbxUSraUAYShkkAB2nh3rZ6MM",
  "key42": "qQhQasoF816XQLiNJQJb38XjYH4gdHUxwjMD1S4z1c2Xa3kJBiFVso2MvU6YxqgW6m2h2WCy2FXg1CHpUQ9TzU7",
  "key43": "4K56yrePPWD9hdU1ix25AnYgcikZzHc4aD9wpREuV5YPkfazqu2ihJCLhaJ9UrVJLuV7ajGmirEfZoZv4Uj6iVgV",
  "key44": "4yNiVi3vzgXvEcst1yoTQs1kuyZJSux618ENFw3kqcJ9nFBgj8fAFCoZuJe4svpMcsvNV2BHcgcmDMWnPRBzJNSE",
  "key45": "3Hs1EbcBsQZQRTYDG3sS7gLyBC6nBQy7wn889VFuKWTRuFKxBbkimSdss78CCti8uD5Sm6oJ625PUnTxdZzKxJ7i"
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
