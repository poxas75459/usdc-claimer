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
    "5n15SrJCpcTUBY7jaFXCStU2iixAZNeG1WVkuqVCJN1hADSfFfhWQSVPaY5MfDpx33qATbKG8YRhkYS16MNnqmta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GDcmjrD5LoDaFbBRbsQwnartSvJgdozjiDeVUVXYJSeEUGVx7zftCZom1YRafSNLMKnaeXFcJE8R5cTqSZbEEix",
  "key1": "brA5L5mRb5Rcms9HJKHJrnnew6GPpWdJF7V8XWxcRjobyPAMphYUpCDiCjbPM4bvayscz4D7a8NbojoswH2FE8v",
  "key2": "5diWWjWAzWKRWoxMDLdLBqtUkuypCeWiUvapALw3MY2aV2TNFdwwfVFQvXa9n9nmTA6xj7ewc8D43avKdhFNaMat",
  "key3": "4rgKDqqYJC4cKdXvycpB9cLgr37xFuz7mkjNmNNP5RD6HNfj5qGZzKoUDpoWvLhS7BhrRUabSAjFLVu7iQ1vFxXt",
  "key4": "HBazmrLPNp8mbsypaU9c3uoXrr8ggEViMZoxQNh8CwLfHAvaUAbg1PS3h3xwrsdUeo99Z8wB5ZTiQZ9PUk4fEG8",
  "key5": "3ycC53KriCqUTy1NiS4ErELquR5TabND64zZjBLo44piFVxDLw2VwKM7kbqbmTmh5yfvqkmQcBoY4g4HAk5z2PQN",
  "key6": "5o9mzcT4aKPt6fZE1DKjWD7qksX1RSr6P61HiruWwiRv1754AVcMMqgu6HNgmUj6L69usKonyFQk3eXzqPNLSHad",
  "key7": "24xPRecMoSarkejhSYiRE2G6hD2q1fvd6EyrvJ3UhhD2RXFQteKJbqRyXkhEZMDBXJsuvsT38Cgr6LMvx3SmHDLK",
  "key8": "2n6QjcDKRd2QagivG8SB6GE4XoTnpLrWzVq5648JPm4ke4sHmseRVCLxbnK3SULDyN259kBPPoShnAGqpEStGird",
  "key9": "4nKgsLKV3zVUDirDUaz8QeFNtqSWMxfpZDQsgy5gb91E3ERBaAD7nPhuaMvqH89oUhL1Rsz5NACgXAgswRVwgbEF",
  "key10": "4RmBfpBUNEXAcTymV8v8nJcBp2Z3dpwRGrQzAc3nm23mrxfJnu9mb4ZhiALMAGbQtnMFecoq6mdmvQCsLp3xHmNZ",
  "key11": "5iAUDxUHTh2uewASfcan1w7V3bJAu1z379K4ppVCJ4Nca3oxKsXSovw1q7Sf5JPS2tWsjqnRwwVyDAXd8fH8qFA3",
  "key12": "4UNdzsBJEwmphKKvtAN17uy6yysQ3DWYNiVdj3Yig682HhNVJHwT7F81ux5PzAYJcRAuWnaRukMVTAsn9cfpggbP",
  "key13": "2bk7muxFvXLbvXEQ9R7bgpFASUVSxFMDhbikYUKE4RrWBcb64ewkYWZWsP7oGp7oag3Jytm43yfsWm1Keuiz869w",
  "key14": "4bP5B34hhuDh2Qo6ioC2CBryyS1oUWNq2mnzDfjaztVX3jBF4jHyVhAWDc4FKvvKCTi6YzRoog65dmabC7fHUHWR",
  "key15": "3mPnXN3azUV83MSLBtjJXEtegFLazb3rB83A8TG8dqoQbUSwBjSwBRvm1zh55iwNxiLfE6jDdZCPUD9T2tem9NZy",
  "key16": "2VfYPGxkS3SwJ5oMqtv9yx1cjXF5wiPLPKGW2255ggVz8VaDsGg3a1mrzQCFva8PXWnH9qENdSHSkr6NZHoVqnKW",
  "key17": "28FVuy5AXrGxCHv4JYSAuTNV3SmDvAbFX4k5dXkv6wpWMD3FdWJwgdbqe2ZGNEHkGhWTwt8dsq3mDBVsxcoiCMrg",
  "key18": "496gTxzn2SKgkUR91dAPFYz5KE3zR5XULWSCfiPcN4osN1d2EDprZBsrQH9wE6gQzxMAzZ82Mqu5diQs5YiZH7pL",
  "key19": "5NxAhta9Rs1Uu7873ihXrRkEqBCokNQtfripeo8a2SwaG4KtjtscC9GBD95fqLxxLD8R7Sx1eG9MZ6EiUbNbEU9A",
  "key20": "3nX6UH68rnKCDdQbQTfdkz9SGdBxs9T9PcMeNk3J7HpeZQtSk5Ly3Uc6kMu1z7QBHwyktn8iL6gRbi43gN2AxXgC",
  "key21": "25hsMpTwEFKLkfzDmbd6zsGxjAxQNhk5D7xXUMkcU9fDq69eTQFLwsGMgpwJ4cbTFE2xVRVMB297vCZpMuWfAyEH",
  "key22": "4KPcu7VKVco6kSnMRaQrQ59ZRbjWZZpSYqBkbnGvdpUkq5zYWV6tXVTVjUZD13WsTcAjqZELGkU764zuqy51nnf5",
  "key23": "2DqdjHxBwzuis48opsDzEvzX4FhmrK7keoRCHvpY6pZUWKzWqTfauy6KeyKSd8vgr1sTqxHuNbVaJa3oARByAFtW",
  "key24": "3QMXd1NkNRXvaxujXQ3i4KHPocauFr2sJFVSvL61tAsy7EkDkMkCoyAr1kD5bTMixXFA39iU4rPb2TVYKT1YmdGo",
  "key25": "4p36KZKtCPq5oxwofYbF4foF5a1qYLrSWHVxb8HkUM8LEgNTsZhr8MaiQ4csX7Zgk1mXqU43dEzzER7LwKK9yrE7",
  "key26": "2KDBWLzuN948jnct8xo4M5eJcoyCihpy5Jf3p7mbU8kVP5AcTs3ZD75zpjWT5F3kz9V1LmbkD5HzCinBEckrhho4",
  "key27": "2Hi1dpYNsDWbmGBbd7NjduE3oPqUatNbcK6CKsg7Jq7XDuqdaKzk4hHnYb3q52JRA6X4knAhBVUzx2Yr4w8FYdrC",
  "key28": "5bcZ7oxKjvCYzgnW6q3sPypfUbaxcHG7vBTHCybbUwbcnPsrCVZ1krsYEQ3PbYH8Yaa4mKb3eRbKQ9WuN5rpJvbr",
  "key29": "4vStmwHjVARQoQzNxxRziTY5JcHrNYJ41acu65E2xFFuofzmPvBCYyKtW197C1DhzoL6QpocgAEydcNLdQA35Ksd",
  "key30": "4yY4oFAWDTyvrbbJ69n9RN8ryV3WjLpi2kfp4QjMUAddPfeGtyXDzJrfdnUNsM3EaukpUgayqs8QwxnwcQSMKjXv",
  "key31": "F3vaNWiimeyKm8Pqp9tBvSqyQ36cDAWVhEu55QbaaMBRcuFj3vbGPDMdB98qVitu4dQSAqbYiTLKqxwJ9yuW98X",
  "key32": "4NzzDMi5AKJ9hUtpamRpi6fNUFpZjFfZWB72GGKdFXm8fgZdpio5Ku5j1M2pfAcMWabBVCNtnB2rQzuSfzPx594X",
  "key33": "5K8m6vjhjLnM9hYG4JBijivVG1jpHrpB6o1DTRLETEqSGTXZY1QSaaDwyuMFr6XWyTUZCbijuoinmZ1TU2PmKJyu",
  "key34": "UQyM3pizGGaKtBCszKsuas9C8ESSvByedpeqn5VbSrtVyJnWSVRFXfbSUUojkUBL3S6a8Wontr5iDpGhPG8CcF9",
  "key35": "25oReBTPFJ5tgdLx5AoLCYoSkXpKvjsbpwbPxwYV3krxYeakUAGBEBX4xBaASRkZ4qUaTGR7BikbCHaiHr1Q2Gdf",
  "key36": "4sWEd2XDhEnxMvZN7PgDhvHZ8CFnT12p8vZGXK1D7g4HbQQfDZW3GCor7968JobrVouLcRa6xTTkPPxVbXAqwWYH",
  "key37": "3MZg6x6jCcHzBDNepyTaHkSKwPknBX1R9c3C2Z9rRVnPnphC7rqAdvEnVCELGY41w3MSKZ7sceS35xLHqQw8g7MH",
  "key38": "65sCNmLUxBXc8CiDRfweTfagSCqZwyBHe61WBwzMMHa4yVPBR1Ek3xtkUo4u9hSfgqKzzFK5xSkJi8fT8B7Qaqq2",
  "key39": "55okVepyrai89A1q84NZQvVHt8Xy7zQS7vKnVEpTTzcgyWyv1p9qmcnRau2J6UUyKZfqsAR6GkCcfW6seTLy8Jaw",
  "key40": "2g7eHgeV9TikJNGN1fh4qACT8yKjakiNfvnjgQSSdy62BR7iGPLgg2GzZVzfamZLzRcEi7aYEY7baEZkJv2Dj87E",
  "key41": "2D4SC7pXY9e3fD8bP9gBLG1qvLpmpTnPiukBv8mQ7U9FiVU7Lbc29KUFhcp2sfkty6gwoKEwj9qETNTs6bPtTFWy",
  "key42": "2HcoRnE8xm9MyMqn86iUn2Q2iQafwB3YSdpj7eHSQy9C5Zv6GjLxFFSKoNZQaUCK7KZySBTgfyNQF5zLz4WcBJAv",
  "key43": "5EQyjr5Fmt7EnMfcNgMcisX4L56BXDDbCDigRjCopw9v8gN122wwwZ5KPy32M24m6uZz2BF2soxSQJDbYKiKx8KP",
  "key44": "2WeoMupfJ5QKHwt9K3bGJoSfUF73C4bgoRiNYGRdg3KWwmjJaarriQMurfignc9ZeWJnCSTGE1Yo517jBqGaJJ11",
  "key45": "35Bf16W1FuctiTjzjTnfcukjJR8Y5iGNPV4ND5dCffnJ4aegjg6xaiNWoZ66dZyaPpVLzdE2qDJM8Vc2KPFnZC3Z",
  "key46": "61Szo4h3WL3dVnQaWz523fiztTVdVPZEBnEioVm6etYudMEf939q628kWxvmcaG5X7DpDeUGf7kxUSyBuMycZkzC",
  "key47": "53xRPVHzZMuyS3QtqdiXLyhB4HF8Lwghf4XWd51xFewe5q5onxz2f8uuwcA4wvwwCdd2LHEVUFMtSbpNabH6xi9x"
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
