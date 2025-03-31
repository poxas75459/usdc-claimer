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
    "2usYKNYManNRVjZr8yGjDPdxo8P98VwdwQRozM9PUmueYFjNWzt2yVy4ZW5whhUfWz9JAAnbmH4YGQfyp5R1N17v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4obGcG7kWg2zHC4hkaRD7ejAENfDvHi12j8gM9qfvgWQYhcHdBf4gvoQFw6etHk5vAFya9WPQGsuoueV12e8Sukc",
  "key1": "3hTHC7SEWezaukFsgcFrGvRBDZLxTQGN21jdEZJBv52HbVmyyuLdCFTN9VrK7X47FRKZQMhUetJWKnoHUn8di31g",
  "key2": "3hyViimDndsNRQHaBiuceTqoNjnoQHHQXEx9mtqSU2YKuX1xscusjzvqHC9EtdDttqtKG6a2LrSZUMysU2ePaJhB",
  "key3": "4b1DZwhMJ6GLZYzXKwoq28JyWcS5tQyrKuGxncUcf2xVFKaVtyCoZ26a9sSsoU9anRav9a52AERxsKZb9pHvMjam",
  "key4": "37ZYNrHKwzBBekMto8vMjhM7DeyL4WCiYdx1c92NpXRMzbqYn4M8JT4zbKEQWazuqXe8qEg44wtdSPd1dVK6pjRo",
  "key5": "32ntX8Y8kbGQiXsWcXLQRcnW722rjGusQ4oZCRuNyVJsRcU5A81QWTUtaFzawyr5VVdPtXqG2a5puYDThGqJzPd5",
  "key6": "2AVYXFBWYYyVRY1Qqf3gcmsZ6n89KJ4WF9hACcKm5SQZ5iNjewzcUWDavdmZ3K5sJPLPrdbPGA5emy12sh8Hftie",
  "key7": "2EHDhSSFfkrzA8vrPJ47VNr65c61tzgBEFrxoG5udWsWThRsSdcyLEBgbr1JhTaWsD8hUo6t1zWXT94txwPoBNF",
  "key8": "2DxHYeyAPPKR89PoigbuGdyFQwHp4LJtRetysca6w1bTsrbbJtRroTzsf6QMgVkNoMbxnukhiuCrZ6hF4WyS2FUj",
  "key9": "3opxUTPvGNZWDZbfan7tRAKyxrdeiNzWErsHDuKQE32QkwBEnnhNfWohkEDTDi98iiLK1PKsSVfWXWGi2YTBG24k",
  "key10": "5tfGMtJZcQ8AJNHh4muNhm6jZFrGvxqnJ1ZxU6VxN8fxrLKmWqoutzdb2BP1mmG8XkcsQLDXM7V5Kkxav7fm5NLY",
  "key11": "3aTbw9QXwViioY4sAQ85KFdC1vpyUT5hPXT3zwdFGSgJc483qx5zHBaSMomFirvG3v5BKots7FyuVDt717sc5uWT",
  "key12": "2wgDoyxn11oCQAJ8Khoq67T3JJJXwtXSQ1utMF11SrA9DqdLMMb2Brm49d6pa96Npbs4Y7xM2ZL8PRpEMLbuKMYy",
  "key13": "3C7Uy85HNc8XZ7qM1y2APMwEW4yM7s7A8AZLMEQpwAMNGuBK3ibFRnK3gHpJ9dy4Ete8qRLgZT8KedSQn67ihKaJ",
  "key14": "62cWcodZBcquBhwn1ZhHjTs7HWTxvuRc6DzS4DwuSMpd6uAwmv7BEyF3qZvuxGK5Y5pGyWj3DgEnW6e5RnQ5cV1C",
  "key15": "4gSWScbyShTd8LT5cz6UVXbhyKcXG1GhDieCgS9yngMQDXj8k2Dhy5dPJM1ptqzkVSm9VgjcStPALMh5UdCSzHp7",
  "key16": "5S3mV2FDk7goWSGLxH5jsnznVZVHGeQCYpE5n19SrhqYt86ZAuQUcoNMtLZCpXRNi2eFYrvwmwZUHeszddFcLzR8",
  "key17": "8RS3QG4fcmTGxtm3tin5ti9Pj5oyb1kwXbQGkcsbE8T2i3FQa5U6hxrHtWs7zgNDEhsC8u9gVAg8ZxMuhSAqnxo",
  "key18": "qrygScTj6Grq71E41EdEkk2fvMKqWkigAzG7LoYo2iK6S8kqaxi9jTxgyhjb7AiDQhN54PZNtoM1uyzhrBMGHoL",
  "key19": "62771h8cLWrAtRgAsJUfhFAiB7Y4Pu95vDbU8VoUVusBQmh2nTjyvoHXu3irk1ck241QRnSzAH8KVxyYLKRGCUkj",
  "key20": "5ADiepPeiXAriwZpRU9c8pBRseV5TwReqSvhzyDvGZ1mB5PUP9CDDSCoSjGnrh2Rz6k9U4V5U39TbZrtdHSPq4TF",
  "key21": "39EB3meetK4PwFnF6FJyWmd42q4XuBYL3MyuR9rYWcq9uztpK1ErwQBPpL278q4VEDtk2t2fUpFMRQP3e6Rme4nG",
  "key22": "eTJCrN9y2V39mryvt8ZKumbyC3hcxsTiQBcoV21mH6FyhouGHBJbAQZwtwPmDiGTpkBjAW3J36qfUhxDhvyDKcV",
  "key23": "cP8HF5obtuxZ6LvzmVfLYGLcnZ2R1kvqE77CreaTPjE6ackVxRxhaTysfcfLMtMkBkATNTbu3p1D3PipjhLjwUR",
  "key24": "33SQNF5VGukgYxt5JxtpHWwNzJdtRCYASQMNaBNd7XD2yGmdqKwjtjfvThSExFWbrasuXcCDQA1vZs2eoyr32Tvh",
  "key25": "2L8WhNkEw7F4qLFBRriB2nbRy83eu7rSTQFQpbmfzq5oBjVFAxB3oY2Te19H3zM9PR11hrvm6nZ3TBGVuZK275JP",
  "key26": "5AF6aRo6bH1VGy8HLDSz9NA4CKhdJm4xPX4dJ1EaTSmpCouMXXGUU3yUPWpc22nL11NFHdbcNxjn58qHDEcbe8hN",
  "key27": "414yrdgAh4zUSqwoUx9T8iMvTCeERDaPjoJ6xX99RwMW2VoCFQXSLX4zVhX53DgF1uunhxj5Bjmcpb4x3P6tPEU7",
  "key28": "35HC2TyVuh1dybpsemyR6pfLMd7NZLXzNi6Kzfid3k4cBqqGqhaJ9qWRJabe4FKCEZtoFkETwwVcRgEXntHUfDbo",
  "key29": "3j7rR3XSrXLacCX5xXGWVUMUsVTcpKSskJdmAQMymsbY2UETgoqzuyCQC6fsraMg29wDCvHgtpzrqQ61tocxB7pZ",
  "key30": "2QwV1HZ66meX5HTkrYkcVz4J8LKH49bqv6fmHSbA1kBxp63epg1ipLoYnvH3Vn8N6pZXocoLBifNCfAiLzZmGZVL",
  "key31": "2JwtvZQJiFb2GQMdC773qWnozzcQRVrgpgbPduknsP6sWhh44V1wQq1CQb9oTKCstb6oCYH75bSJPTk94X4bnj7S",
  "key32": "3HEK1e7quutbZBWa2kTQJyiuWm6iwFujtijxdQHxmg72iAJaebvZmtNNZB9maaGDuu64xGh9eWEjTMiMkD1NaMx8",
  "key33": "c5BkSU3kcJSuF8QbuuiYU75eE15ZKMtgNwdFwkjwf8oMizaV91VBDiM71Sz3ogxFfBSwDQr8VsdByrQCQpWw2e4",
  "key34": "4S3tUuCvr7Yaq1N6v8KYLjSUckUxhrXvv6pKn2vCHogCPFbZGFvHr81pLaU762zqRseDU9PfnhQx8UzYiiyTdS9e",
  "key35": "41mS7Hf8ucMnEHqEtQkL6oJo6cjKhAnVuooSgrxXweST2vyyRFu5jcwkfvv7qJpgcYtBNsXKwwspt1NasEG5JAEj",
  "key36": "JfRisEYyrc1iSdSbx2yoMWTGNhaBEMAyxG4wsJZYW5bo6D2sb4RY7wtBKE5vBw8r2AtDkE6qmSYWQQ318wkLozR",
  "key37": "LxF2tj1FQSPvMf2nukpdAATVQoLJ4249sydDadjzYUUXH4JB5wgwMvWhnWtgnkit4vyw4Te5y9rRPvSA7JcpDei",
  "key38": "5dVg1C9jd4x7EpjkdfqAszBUF3etznw8BTHj24MoxuMTFQFbDbZXE1hywTt3JddJefxkzjvY8pdaxoBEDMpkt2RZ",
  "key39": "4gYQ34BxLdiUR626Ni7Q6XNDqcvv6Q4EFQxcE192MPpXd4KE4FFLGAqKf3fw7XoXYMTwqgku7mBgoPE9ok2FwCJn",
  "key40": "4QN8SKWgU3tymKoWDDUk63E779YrTNHwxowdxQxx6dTcDdxEfrXL1baq43GQZF7gqNwNSm9Bs2xawKyLLNsU1VJi",
  "key41": "3hZcREwX6idPgmnifHo1fLiieDLAagYZgp749PX3QiS3nzUr38Ye3oPxPVXP5xPeVKwY3utr6M9CBaVFmLttJwgk"
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
