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
    "2LUsAKUvZLg85sWVv9Vbs4DnZAqKfoX7HxQ7qLj4rB5gifQak6TwXcZ8neSrDxe1Krf6Rh5Jz2rpJFvHfKyLumg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gb8uksZtGGxcKHbUMdDJrCLBJ1QYQ5BZWRnciAgJCBghLg2Yxz9jsUg6b4ftN1iFPozvz9BtvuNPYKn7bcXMtt3",
  "key1": "5jtdVtAYjucmYnFLPK2mxHobTUYYCLADXoYCZVFvKrMz1L4sFHv86h2fxYJ46kAVKf8p3NgJGYR3RwRQQDbXVqQp",
  "key2": "8AXvM4ubvbfSuzAPvcYad9AnbGJ6DzyJJNJGp7EJ3aUaQ3GHAMwqNEszbfeKSnfdkDjsHKrmTP6qV6iK4Mj1J1E",
  "key3": "54hC2LHBBEbhxyQnzzisgMdNv8nstPaCR6K9Sxf32fhvsXucUF72RUJaHSBgMLTxsKvxchjVM8HT2uG2xFHZA4Gd",
  "key4": "3FAUcTDgdksCHCuBU5jf5S6yt4chNTQw7Xwa8URChJPxRJMyciq5m9YEBVkTo6JPn6EmaNrE6kvyVy6BEsjDcU4k",
  "key5": "34Rk1cMVBBmfGyG9RrRNb41r1vXhSaHVajLG89gvrSM4r8ASM3oYKycx1k8RLWWLkX76xX2FB9KRDLsj1onSCrbp",
  "key6": "3KGNp5pzFyxqKJEd2sHrrFSUd36Tay74QCS5hegTDYYJQyZMVazyktMhayPqN9pWpji1cG89sFu8SfJn3FawaLLN",
  "key7": "QNNAXFCGr1SL8MgQAv1oTPCJ5JfEDFW8fhNG9s95ppLPLTuBhYkaEuhtTavJoqBHxrmwhMRLoo3mRHr1epn5ofD",
  "key8": "3RxiQhdRMPywoKVJWSZiZNwdLnU3qToizN7SEgsXm5rjPPo6VtjUK8KtzqycsS3YQkq4G5xadUFfXe7hCYF18U82",
  "key9": "5S3sEc5KtEzegnLBYPB1disgAfQonbFjfv4XdGKyMt8TQYxBk9ftkyZ91n2TzeNHPNNTQm96UNkg7cphwGnzmbGJ",
  "key10": "3pihGKLaM4JgP3AudeYHCCrKN2DbFX2Nau5jPKpiV8nMBdK98PhUyb93m82Pfqzi2jxbTzLd4ShbjQrxgdt7yAPz",
  "key11": "2MSZ4EWXVRCrwpBNTsdKQmMajfFLzaGZd8Kph75oBWvZSjhLh6UA7eCardLhs2SWuJCKntmAGWxDVgzUA4A6r6q4",
  "key12": "5644geZKmNv8MqHv1inYAgKj3g2Yyq7qND63AYWagog87X35wjpkVgPuT5YDRvnHnCXA6MgfUZ79ctpVVVEe2SC3",
  "key13": "2tzMkiabrfRYRjkxDdKoS1bxn7TH5h3oJ4kow3QWmtUexvDRwNtG2f2BYngRnNcygVprRgYHBMh4CeuuFQ9QmhuJ",
  "key14": "pWrCPFYiv4NsCRN18UBXiZCjkMwTj2MUsmKKSp65Ss4DkWnJjYLGbDWLPqtxNETR7AdTAiBGcHsuFkpe27a49eM",
  "key15": "43KPgC4whDFpQNKi43tskA2vADp1JnfJ418pAmkBv3EjQsgNmrsQuMH863eYTbiz3TWAj9UAKBrX71tH8K2tcyBG",
  "key16": "52jXqbgiLzDcgsbSdfxAkgBzoYiywhKuQ6k7zXeYJqxfYChpdBwFF1Zfm4ZiKfijfvbQYzGfd7NjrZ21nGwEkde2",
  "key17": "2zwwEfUyJuxEt8Xf1pqdpu3nupHKaMnBWryC9Vzi5ssS6L8yLoEJq7PerEk74Xm1sEcvCjYDcuAoyesdJRQ7AqSe",
  "key18": "hnNdHzHpbAv9GWPwaHyF1Wj8Mtc3dxMz31jRYUwYCYpaV1pWsJhKYjQQ1Ubrto89cuFRvqxUUYCGkWTVETr4aAh",
  "key19": "4MvZ2rGUkFueBa5VgJsvxRnetnujBFKm15nRgi8v3fFMA3qwtKGEsHJYzgjLTB1aZ57CGUXPQSamV1rjajkxQk7W",
  "key20": "21Hm7Jy7e1RLS6bQsShtMTz7xHeCCjQsBdndVSeq71SZbzYwWqYiq45ey1eCHkMHcS82dbSDXictmkSqgbMLRTKa",
  "key21": "3afyWvJ3gs1mY253f7g18H71JAKpS2z3ZxcymdEPBUZDe736WPZb7VCPskQ4HxcmvFPXkowVnmQPRugEiXnn9Ut9",
  "key22": "4PgqAssyBVvok3EYUu2Rg7UL8pLP63K76PTz9qZxX3zEpTKWBrD4MP23Qz1LfjoUNn69fsdV1q4BEMw62tTRfTVR",
  "key23": "41h4PH4WrTZzpomLuPXut9YfFudFt4HtxS8q4qaKcZ9evbcMDMDN7rTJYTdmweDmYrpBg8hkAD45iPkciJ4pNnCM",
  "key24": "5M5cU7j5rooe5PtpH2wArs519ULgUUhFV5N75zYXF43NsHoZmHozimhxq99gPkwLmWKPrS5TvMhsWq39ak62PDz6",
  "key25": "K7ZWZg8yMLeTL8s8ZGnyAfXpARRjJATxv3N9TH227hcDC8RXt1JRjL5MZn4P1U3pidBxzUo9EMSS3QB7UBC1d6n",
  "key26": "4s9kJhXxsZyYY316zVGhhGLp5aibaxtmuHktAfpKPbHBNMdfzumYKBNS5xV7L8HR3zVBzY9KgULer91JrEV6pZ6n",
  "key27": "43VSzMkyB3L5RkKp2jVqrKmCwu9RNzAtz76GmHmkHQrnEydDrgPoFm1e8EsvH8JnRdRY4Bt3VM7U4s3s1FNx5z84",
  "key28": "4UrM73mDKLy7TRFwcxfFH29TXqKerdp7rhBHv3wiZDnUaUynfXC4oJNDvhDvz5bdPrv7vsUVT9LUish3KbGwpVr5",
  "key29": "2Ysy3gmpwmHy5khxwYAbPBuePgqYHcEb3fPjnTvCsHtmCXTGDxPkcp4Z86hNAsX761otSaa37ZTaQrvGutSGxNNW",
  "key30": "2dZPD9pUGKsZZwqW9JxgPLxWnmhYT3yVreonEVZcfenCLDuj2B2wmgNmXhg61s2jTLJucd1zrh6wVGChpEuTe3qx",
  "key31": "rkpDdYScck5QRLW8pMDAM4u6VQ4z6zmaV2RP1CG8pLsAVcNUghFtpKF9SD9NNqa21SoAR36dxGRNGxrfCtFdVAk",
  "key32": "5RKBuREMBjvpT6uAiwv9iD1YqEiewWowhzGbaZRcTjBtGhaUa3wegcg3dvWFHXMyn32hD3GJRoeZ3Gb6Rota3qUb",
  "key33": "5d2GVmQpy6nxnitoPHomPEGM2YMPjRS42AfmD4KLkA7qkiFb1bk4ye72bjgiPD3pXniL47aNaY58FGFnjq6baCn9",
  "key34": "3kV2TjgzXYA5ydgKUvqgD9jNpxV13a78ct92LN4wDSehBnkvuV8LKqs6yq8V5np5gXqdPdRVuS3E5ppk3xFqq6B3",
  "key35": "5A4yZwVNThtuKJRt3U45g81aFHrNP67qdBdyvc7U1KFvotXxhguqoTPdq8XZBB2ipSx2mwvu2KfR3FcpF7GA8U4x",
  "key36": "2g3ZTso9N75wNo6R3ivkPd2vxF9hk2i9SJsUyXpwvXDWNHfGT1JVnnDuqWwp4NHHbKHNXqzUwEdVyjdfUDxVb4ms",
  "key37": "ZwcYmNcGeGq2M6rnijAR5tPWKtWBBHND6FkYXvFddvVTkFB8afCq1gxMQsVoF4dqtd75pqdokXz2WFdUZzuJQ4L",
  "key38": "YdGAW1K4kSJRds4AWFvUzY4FcuWSwWHcFtpqnFJfpFWkdszgybZhn6qg2kL8kqve6xrQKeHcveHuFFTDvxQvnnQ",
  "key39": "2ZqhB3SdxcMoP4fsiRg2psDVPxtKwod3VzBo2qSLArcgJFB2jJwbfjhnw6CeXAgfswuE3Jz1Hv9ZcYFkBjVGz3Nz",
  "key40": "2vTfQaFYEQ4bn2egdx5gEP4H8hosssqokSZyWbJTrBbHZ3TGcRiVSHgzqiXLdbJSoctUShLQcLtC5kKrxupNPocB",
  "key41": "5UT1GjqRL6MePobL4j9Xg3w24PC9vzD24gPKqxKvy9WrSwA5emisuTi9aAVzstv8iUgKcxF56uQVYkWcUfMBjFq7",
  "key42": "27nfTA5AUmbibnrHVBV58QWnEUbuRb2QnAFKDFV6rzdKqsYtsFh6E5eCsAy3yM4bc7tAYxtjA57RTMGqERY6iY3x",
  "key43": "2N4PKesBpYtU1sTGvAM8b1YAvpibaegthhqxHbA9czTMjPHdBygqWgvXN6oDZ1g2Ak4CQdtxNqDVD8YEfL4FUwRb",
  "key44": "3J3VxGE2U4n1bDb887271JGmQsaKkJnF24W4o4pvdWD8UWrFSrETpo9kUzbhxz5TBQNRP6kM2kfQ2JWEvRGrhdGU",
  "key45": "453CoAMaKuqDeZEWrRVo6FtYiAHuMZP57py6eygwEQjGfGmeUd27YMif1o5VQ2roUeH4qcnnphmBHXrJVBwJU3Nz"
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
