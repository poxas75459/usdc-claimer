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
    "5SuKZWfDizgN46jGG9LTpbzK5Nf2Lp56GfbCpGwu5XMQMyU9Bm7XvAojnxG5pUMYHAMcwDuqZZrwiCWAuBFfWfBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WJh7aD1HYMNYtMjbz7yfE6BnC6EfCFgSE75vth6K6C7k1fSFB4R5WS8CtUm6XTbPy4PEwYwnLXVbcNi8GfuLQdH",
  "key1": "4htJgDgkeV2yzeenQ97ixVPM8mX59uMHTy3uZ3ZMTKNvyQfzTD4bpCkWR3wyFDaAZBAmKgUcibq337KsLgQsTowP",
  "key2": "23Hcz1iPtPNNireKzyzLZerTJWuyeTC14gBTXy4hBKcZoUAUBCeM9fTLNFzBLvuHjkEUk4DUd2VLM23bRGEdfj11",
  "key3": "47PqD7uiHN9g54ejjvmqafKoayPmJCBqkxQUVvoJErZGqZyvvAAT6e1t6WHDCgJGFNcLz3KocV2TxXLRvJ2bWX81",
  "key4": "4Mxz4zmnuwMbJr9nrkzsCfQXyEdrhTCATMyEgYxtSPmuR3FtMeNcdNwohPB3W9PQqEDyrYquuuwcfGoHCXUrN8pM",
  "key5": "3c4FQPeUi5rsVYy7AS357x3RrAdmMhjY8pYH2AEahLc7ZDJxUNMcUwKZhKwyhQUo3JXi1HrvD6LemoVj8EHTr4bT",
  "key6": "5GuGEKuLzCsbso2e98RwDTAGqvaKF72YK9XYoDFq4yhM5aSEDjomsPuDCT5KZDj6DUwKnnRNNifiid3syN3jUaEE",
  "key7": "4fzVQm4txc8gdxCLLj6o5vJaKTV3e11Tv1p3cAJuHqjzQMLNnue8A8Um5jhJJzU3emRs8AFaMK3P31jsgZowjuMJ",
  "key8": "2c7A4tF4P1xf3pfzBqmKH3z6mqSx98G5XsCqKertMM4jX4FxeGQ4TJxAADhzAqtLWYnuQTFQvdSNwW7bzKsrm61H",
  "key9": "zqQYxiXD26oxnpwtF9KFXCKKztwAwTdBEcsKahN5yMAasByyRPo6MWFP7eeH8GcT3tuaigYLAK2yiccDJspZmdT",
  "key10": "4x1KmppRbgryBePasYd89UhXdGJhkFMxf6oGRyoje6s3dp3aYaDgUH7oqYDjKcHksnPERPWaCx6dCc9dTJB3KnZ5",
  "key11": "3sJHDhNLeb4BG9c6kPGDDN9kYq6dgg8KQCrL3Dd61u4CYcZy6QERLwo1xVqomhjoic2fS18Yhu4bkkaFy9fQZu34",
  "key12": "46bnJrJdJEDVwcDY7uaspCQpZM7swbiwfZwhEwbHpjcNq7Ms2fy6pv1dpqS5u5wW6nTGMAWhtfqEvtmMKyYeQWwU",
  "key13": "3MbPX1oUwXRqahQC3wjmZcSmf41HNmqJBHtZvWghwbAoMZBkRUmyTrjGKibqbDNEjJvWeVr2FGMsThbj3E3inkVY",
  "key14": "5CQA2mJdDbM5HfELCXE53JPAKzJyfyswHkC77QuTGLhAqHSPTv31om5Ri6ayZYb7Dqve6ysZ9vdoRm4NjeSHBaBm",
  "key15": "5iEcrvqwKK6LLZid5cXoq6Ln7P16RSKzmw8aa68fSUbjP2KxxPbeeJg7dXFXvS7b5qj5KFtVWoj9vKscave9gQ15",
  "key16": "CbBjawBGwxE1nsK8Z8gPoNBfqt4jKyfcF9CTJ96CqvNfFSgX4NoadKfYSBJ5FYV6W2pyef65i4X8wAWQeWoVeJh",
  "key17": "wwokD33d3prXbbwrWGtpGGvg1pjfJS49xYgP7pfivXY4AjnGbgn2QAFVKxhwBEjZBLbCJU5g7vPszjmo6Ho6XER",
  "key18": "5gfbwinZZmJrYnjcAxAcgHkfpAgjzdCBiEPjBtCwDp7gCtfFEY1TaETLYy96AncMKg8kS2zST1ehCAgmz9sWQZKA",
  "key19": "5HFhX5j9GWHfRpz8vsAxECN8U1dr38tFkgQABZ8VFkfepBwpd1iBypx2X4B6yzfZVgVNT4ntrhtGDhsfWTMEjBmM",
  "key20": "4TouUZjfMhMpVUyw2GzNEHb77hCs3fXTncgHV1f6RDkLCHofewGnbkUHAw4h7s3Vi2XErz9hG5m8WDM7TLcf4xgA",
  "key21": "4wDgKu1cBwV4MjkCV7LyXQHTHEmY8byoPTX4L2Jd2CF5nkyKf1S5qkub9N8Yo5YLGy7NEMCT5SEwGYzVwsFWQ29u",
  "key22": "67qW1tsLy3pJTb4tzFCafEbYSpkxePiFURVVV6fbBuQ7mqknm37ecyeKMvvDKubZXkec1sKWrAxQLEQZ8kYV2aHs",
  "key23": "4JoTe64kc8CCL1DzhxmenGDKQPgTQDqoXt9t7Zpz1jSRzJingQr3LJYSFtMwE3kYq2m8pYqAZNqBGUr22xeV8nzz",
  "key24": "22F8itMSTzmmSyqiV1CMyihzfQz5gLoz8isV14B3fnGjc6ScuF87iKpD2Z2CTpmk4YqYitSJrN4UCQF4PBaPFvT1",
  "key25": "64m8gDEYCPsa9ZFdvbzzx2DwXgFz1DDdsGYadCN5CSpZffm7pkoDwjrpt8hCfohvAdSXgLRKL5R7odwsFyPKaPQV",
  "key26": "3DE2fh32VrkRqPDQY7cAr15Lb6jfPoiU8nfFYR9AGWyCaRmsbrFCQnyYTqWmeRLEPpAcKU5T5neGn1uLBnvwXpi3",
  "key27": "31ioohSFQMGvaWKwBkYXaQmT9eYH33xUSUHvZ1TCszmShiq87wZADUMH4jXEbbtpMXsaJtHQtp5bM8NWvYNBX8Mb",
  "key28": "mrxAYaY6JDA3Xt5b7A7Lxr5ncwkstzA1TDgrzFE1twTxiUhNusPe4JbGWY2cpwYGApLs4JKFDjKu7cgdm4Nwu2n",
  "key29": "3ffcoh5Skk6k6aVRKYNedFweKfMyf56gGgYumLgj8w3zkEExY1e4ARBTrpBCdSGjU7LN45xEBdKb4k6WDxHvDcjb",
  "key30": "5iKPxGRCVAoC7yChS1fdo2GVFQPQivp2eRdyNQuKAfTLxndkCLiqbzkzQsbmmtYZnFdgiBRV2XyEptccjRQrng2H",
  "key31": "4YWQpp584riw6SLpUoyiKPuyaSQimMe5C4KRBbJBDPtpnVdAjuh7pBNVhsbe4o3u5ZEH1BGSiuN8sad3nKxW9c1m",
  "key32": "5QUHLMWcCKPNzEvmu4763rqSJYXp44x6rQ5ebTy1dXCe93dmK69th8AqUBGXDQasVZFdYATzw4bBhmVoh7X3NFTJ",
  "key33": "42h1V1pngPXSRe47CUHgSRAp2PkK9csjtcjFrUbfZMSd4SSKncq3tXAM4GCGRrVxhTMqrnVN7PEQtXETcu8q4p2P",
  "key34": "796sumWmgLpLtiZMNo3b7n5yMoeMm6Nf9P9Bq7Sf7Z9gt13hyJeaj8xF4JxMeuhCm58zrW1fsetguvKFpqaNhvz",
  "key35": "5yY41SEXXoLSYR9WA9gXuftuNhtYFxPgd4B2w1GVT4HziCq53E5b3JnQ6NgY8udThnhiV61KXhmkM7VrB7wgZDTm",
  "key36": "3z6WqvEZ2LRMxi3w9UGWmvKi8WPvesGtxDanbyDBtNbkRKt1KgK4X9kkVubJNyo3ru5WhS3NH2NPyKHheuquf8jj",
  "key37": "3PNsvajRdusfBZ97gvmRBDNon4rfJvUd8jgdwSF8eSK5T8pWVrHEWNUkGyDod1QzfmCcT4vCivG92XHK4nAKvusX",
  "key38": "33og1cbLf85qB6ZhLntccdsXfT4RmFhX6i5gb9WrR6qJ1wPggbLcZMgZTxkNWm8Q9jRNcaE2oPA4TfzWEFX7Uyd1",
  "key39": "32nuobXovgVcAsRbwyfega4dokZrjBEPSfuFy65bUCUC2GNwqLBvaxRNXeDPZYbRy9MXWusGg5zwgLMxRUjdQ2pJ",
  "key40": "63RF3PM8xb3yLku1Z85ptMcnSp8Dvvz89nNWUDvrexGJetJr95VALUEa96gRZiGt58poCX7spN9VWDswiTdpXoov",
  "key41": "54CBzxbuQYN1f71X9hBKuSXEJQFBsnYepotNNsL8EzZdCG5rBUbeLv1TmgLcQV1vJeybV4RL7CabvLMeYhA123tc",
  "key42": "2HsREoK9oWUbhqysVTTKTHMPK26YmyWZ7BF2Mb9kVgF6CZayPpMvouNNg9YpLWhARxMcWHrbutEqh7YmvGsUrzuJ",
  "key43": "28gCyhJDhSXYpUZMZb6aRkBJqxVtFYv92dcE9YGCPbVFNNXCVSj8QWdSqwKPNoHf7Nx3cntFP2Nsvp7Lz6jhbsBc",
  "key44": "AcgLoEJsvGJsUzazAFVwVr89qG3UHK8QgpShUu5ph59f5MMEE2A9LwSedEyRhQbNQBFZWTinKBF8L6ZcnVW6HqL",
  "key45": "3xysEHmgKsBxiG95Hn3fNY6S7fKfeez3XFaWdKsX1aeaXa3Vkf1W8mmhbgxB4DChcXjKr7xAKa1xF2RJHioGDUcb"
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
