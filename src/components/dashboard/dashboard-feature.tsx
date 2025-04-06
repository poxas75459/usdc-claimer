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
    "sKvka3hNsyg29am9ThsqdT46aaopFpb7BRJiSEVHGBwb7aMApCqBNsvfS7TkggMmxbgyz25rQCvyTGBiXgb59tt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UXekKNPxmCuK4naXxazmFPgoCx7DRYEpKqgWxuVDg8gYsevNNBoj1JhrojXjbmVTmyfSutQ4CvAAAYGY6mqs6Np",
  "key1": "4yytwwF4Mig6YH7eZc8yXDVHhGv6npC4Mu52aWf5kZNimi1HpDVh8FHpyxNr1rJEBqZ22wMVArmgknHHo6iecTJg",
  "key2": "5cghjU2SVL2r13vcxV5NgBthQNYryg6mQff73yV6hUBhjQATHqmP79VzXnFB94mR3in7P3AphUvUg4H3K1eCQwdj",
  "key3": "q5CbAzs3g3WVtYkPFsp3EiqxbTsrxzveNYEB7JpuA5Rid3XzazdWdffUVv1NnLQjeWrMUziCnxyuMuhcr35SbEY",
  "key4": "3NLMWJv1ubHbeKjdscs3uP5TUqKZ4BJ1vS5J67zNS2ybdvtc4W6kQtRm3ryfFJF9eLhN4NvgXuji9dt33hhUgb18",
  "key5": "5fm1eub6KfxnQn7hyJXmyYbPWvryaCxCKvhkHF9XXqD7MHpwtrKM278vrXqjxpJhdGCs8vB1haLuvp5PEBmYfh9t",
  "key6": "5FHCVuq3Gdy9RU86b5aSCvZ6NJnZ7CKiM4KQKk29fQtggTSGzoJxRsjY4qQjfRbv5HNG4R1yxxHrTZud1uUQHU9U",
  "key7": "85C3akrZzaAdYNyhhUNxQoqM5pzfcwmqEQU3nVsLfTgcjz4NTBp8A7YpxPu28wVuDN4zsNgD9SgDpcX9ud7ZgmK",
  "key8": "4gXFJNEz5fbi2N1MCb9qH1q7zXif3rbMzpa9ZZ91Zm9PgTcpSEDKxQcHMYT7kVQGHCw5f9nkK8VwwM3WfS4igqyL",
  "key9": "3bHcdg7DRrH8pZ5f9kB3AmQrx6T6Vs6WkLPookKQwMRib4oCcoxJpiFZArpJMnSms2uP2UuComVegYuJbJEM4jhf",
  "key10": "3V5JzA1SGRS5YkoackNWeUUCEX8L2JFWctjkKU3piDwHTRXz6sfPhqvvYRDXpLV1zoFBXk595dWpugcf5WeHvWW3",
  "key11": "3JiAGHpq4xJ5QfikKvX5jfHfHzH6XKZsfkqqv1HHX1J68MfT44GABd6MMsza4WpC4mE38Sg6K7nASjhRHvQ4EkXz",
  "key12": "4JoCDJG75P9gRVnF1uG24C1JpnBcwxzigUSjJxz5Ape8HSZhuVwoSYuKu3fFdYXK73iQhUjp6gcnBwrSH7sEuUJ",
  "key13": "CxUFpiuwiBirzEceAVpSHMq1tsW3GjPMX6UtYoWLwJy5LYMnXZTvghV1KzyAQiTbSfCX5uAkAxGv2Zgec7e6FEP",
  "key14": "5pJcnj1dKaB63uGJRXB1TB6z1j8gCSGVCfwmSmEPBs3vrmUb2RUFPBNt5otHSGoNPnAKxuxZJYjkbPYR3go9BVRY",
  "key15": "3mvp2Jv3fq2Ejbju7k6rYjPT6sDjYjLokLs7WB3LBvjJcPMAUQ1CwFPwM8ghync9ED2KxduJKcmqRQ9Vv5gSedxi",
  "key16": "51cuuqQiDgobjQ1QuV4LXPY79tWbw2iYVEY2T8KGUFuUwVivt12mtY6V9CvfZ6SJrMBiZNzY9oibrgWngF5fWUTm",
  "key17": "3HDRf1gTTA2zS1zb473zeoi6hicN4j479D6xqQ8LUyCWoPk8e3UiVDKkMj4UndRh8PV8upBbh2qxPNFUXpSssWfG",
  "key18": "4gTNeJthqRV77G8igeNEe74MoHPVUPu4nppGHhkuuZVGyDwzJyLFuvuYPWAMMRzuWQo5jG7Dd6qPxCFEhNb8q7yg",
  "key19": "RYBRTsPc3az2ScbP3gjqFDTHzXxwCBx6NNwEucBiXSrBMVSTkDZFoE4u5Ym8omm3fYnE1BHz3JFE1E5PcXU9qgz",
  "key20": "5TbDiiq6gNRdbErfMMsPXXBwRoDmVNjxqLRTXNbk4m5H9Rr4HLJLRro6opahPCkUMSjGfSebqAzEqDA4nRYtZZfU",
  "key21": "3P9FCdBYbwHtQB4d64mGrJAQK8koYiozycDe7RzCPXwt4XKw6ScCVTgbXE4WaymLQD68dqYmfBApuYRHYJDWb2rL",
  "key22": "nyACggosz2zWeetmAqiUQwCH3pnFxDEUiJX9QumeizDmUUmFavHn9qj1FUUUiYMBGD7ujHdQyL7bPVdePLhC8zb",
  "key23": "5PTz88Am5Z7GMkreeHhB19uMWCropkpxHexpAbmD1fchiSUnzWxUzhWMQPweHn9aLgVruSaE98E81zbbZWoZtrBY",
  "key24": "5cocv7RyBe8XaAXJDfJbMfMXiHp7npPehGHTNi2pKivwyV8o6g7UrSXYkYsS4xf5p1BbZneUEnEAoHYLzpZRK3Qg",
  "key25": "3c4Evm3Fzxibosmz8oEqtWZrmfCVYR2hV3oThpEkYUz3NZ7PahnU2zgBfnFwMc4i8iSMLMoH6MyFsY9G7bifLgKo",
  "key26": "4iu96N3wdRxcoX1Sy17hxyu5VmbkpECZ5bDaML3fyJ4QCVupwX8vho9dfRUHoZFYUHogM5t7UYpvc32psLuysv7o",
  "key27": "23qjFNKGVCnS3ktp2BX9jSb5NvJ1zWMQgY5rtqs8GZJpLUT3VM6GRFe3LAxBcC6DH2JhB8ecNBC3XtqQDhAbC1i4",
  "key28": "5db1882NN8ReQU6yGgYBRw7XBKyU2zrQxtVotS5Dbw7DqffpdrFnYbvxT4JbfjDdMu6Xy9rZVpZzEPqAMm7C6FLE",
  "key29": "38rKQxTLiK6d8PBAu9uShw9TkNoKSjqWcmQjtekrSibiEYxucAaUwcvcYPTreYUcajVenBZiqG3wf7d5uW7bjzka",
  "key30": "2fR8FSLMde5iTL5YZp3zadTT99j8FwPYoXTpdy96yK3Zw9FTuHUA9id5vaehifotzaaSJiPCh1F3yP35DzmQmHyZ",
  "key31": "495V3XzHfnyztgwGiGdXsfCVtqPcjaUVK2ZQwWETpqGkWCThTuABNpFgFrqENMHFCS3r4FPQZvEvezo1xa9aofH4",
  "key32": "3DpJJ9NUzExPfDesjzeAWMFdHbZ1FgvMoGSK8vEuqwQfj93ftPwang6MFyzW9oLPjakeWntXLmuMhvvNmHkBQEKf",
  "key33": "4nPHsE2dvpy8i5bwdmPDFWMoAkTvag5YJoiHgE1GL14im7ybsCVHHAmomFuPwyUcJ7q4vqrSpW5gjENWL9Q6maKX",
  "key34": "3MqTavqY38wjHMtR61ChqA2TLZgrWBJiJsnsrheCvhHCESRXEL9uxnHNwj3BznUkWjef2JG9FFrSczxT1uTmFUYc",
  "key35": "2RrUVZUfqH9RpiDvs7zaag45cmGrgQVGzzzjKJaYxrPUS4t6sjWbMUkbcAFWTdEAGd49xctpLW7Z5pBo2HzUC3Ps",
  "key36": "3xVU3AQujLDvt4aK6iZ7VrgGbSUbB2578V6rm6GrLBgoAHGFNmUcSyGMrpo2crDjkKw8aCY2NHMW3ShrLh2Z6VTt",
  "key37": "3GEzhYWcBKA7wCig2Vf59BXcKTwLM8ZvUuL7SowiqWgwPF1DzwHsXUktm24Fsu4wYvQcm8rDgXCLqV4Wtxe9sN3R",
  "key38": "3Zq5vgDe8AzEYwHoSy6m2QPbLxs7oothnrd2YtKJ16USRTwrYh3vnfjx2VSinogVxm6BaaRtKja4UhVo9casyHH3",
  "key39": "3GWmaSjeVEhR9j2o47LknqCuwpifupFpv7H23tMYHLn5owKq3QDVjYqGXVP3bAfskpcGxMWiesVgSYcfGLtD8n1V",
  "key40": "5SKha4s8k1LfbRodPv74REoPaoRsb6T8CvPFiUvUQzmoUUGFHFB2tqVE8emrDk9g1DGmnexVXPnNX6v9vAqUoBVf"
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
