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
    "37iuwznAJhYtEDbJcUopphevr2jCUrMjK4pBcp84w6jEZtCQQh8am1beeryXzreJKQiw27uXfp27VntkJ9DcQYDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EgSc4x1GJDMu5mhhcEmVJkyYHnTdXcjj3TCQKddt5mHdEtt75korZDXan9GuBqQXBNCauGXzZ74Jwkb5TQAuTaq",
  "key1": "eybdSLLCbMqhznAK42h2cArN4An9YTiFw5dtvkbmzuXrDczYjKUmLMMLQjhnvLayqXuU8TBSfEjmdXQiHJG7Ptd",
  "key2": "3qxhmiP2Y7k8oV11JGFaiSLyDoLS7krhbxVwoirDVCPEeBiMFjV7TyNYYjPY4w4QdemBe6AX9GjPkfwxoJuUfqxi",
  "key3": "Cazzf6hBpb3syxxsSRXRtF5pqK22WL2Gyri68qe1oTpVi9NGm3H57DcP6YpFwFtTTAixe6Rnpkx8p5RJQQpJdRi",
  "key4": "2vWUb9unMJreVkVhj2aZqoLjnbcuFJjC4qofFxXYzFjiHsQS7NXSrR1cQtqXTtYjj1BrXL1XwJA2G5U3nVgqk5q3",
  "key5": "4nziVfuNB6cwuSoTzNc11V2FwaHSJmL84KBkxZg5vVYUVedXEaors6zpf2zubBCjrj7n4TortdL2U5LB5Bnc59vk",
  "key6": "3LUuxF3eghqV9HD7pxJLWnaGngjzdGo8TMDR11aXroV1sYrsGZt2NzZ8QPhPuVReQnpppWjUZVTkj7uQYS7n1ZjB",
  "key7": "4sWQPJEHFf4juNh2xTMJeuB6SGUeLPf71iKLJ4cmPWyWLabb7m2pBX7ZJZ1cS856yQKmug7QphXwjwGrTy37PP27",
  "key8": "35RCuHAPqT8Njns7uwbKjeGr3aag6ua6ErMDo2mYtLgteaLHH72xuLzY36Z9uuXsbYF1UZPHB3bsU8w63pErKWMR",
  "key9": "3fqusJeh7LK8NLTqMFnMbRJaKFiKubct9Ycrx2q45RkQwMvAWJZTU62GHgZE47tx2wXCjXv4f2BAtqkzDjf4cf3w",
  "key10": "2hZ8NUMF9faycSTCZTwTrN8JVG8YJMz52SLKSHty9cXhD4KbY7af5MUJSAwiGbmrCL5ky3ZdmpWaB9r7LUhqwRSJ",
  "key11": "5D5EVwwZ9XxWfosFQMXmKeKLkagmJ8UEP9C2tnqX897xeBNeVy8iaR16tSVKdJBsm12UMrkhK85rp3t4kT3GZ8SX",
  "key12": "suN4J7GqtpC41cAM6Eqd71kpiTHh2jzpxLwzb87oGySge98UaAVad13FSxDX91fsQ74EGcaBavGisUVhU1kuaVU",
  "key13": "22HuXkW1gTgYa7DSjzGzSpCVjcCt8NjeHSDtG7N2ZbauKKk7vuBGHotVbei6s7m9b6bmXgPYRKajFjGLbpYYfviy",
  "key14": "3zVCxa8t3VvXAtyDeyLKVdeBhh48pviCn8amKjR1xvUD3JMkqtPKC2roQUqieBhU4BMfN7vNUdibBYhAKe2atXqe",
  "key15": "3sauPrPUaY8GSGBYjpMFsZJAus4yLGa2kFccmAcZnWNjM3QwZi5QyRJKL3NuxdXCUwYcBLu3YHijjEhktRxhP8JD",
  "key16": "2JfBmjKSv6u1mwRSb1mVwAaoqc2b22Qu8K2QTwDzvxiDFtZcghZuszMJ1HhezDtoC8WdWLCgQ65vE93iZ18zuvt",
  "key17": "Qcj9hg9xmubJpCL1ULEWgLNbsMGh6GkXN2Wj2ARq5AeGmDCmgpMkLMwobARc2UEL1UgXD4xREN4DE5336PUkCUm",
  "key18": "5YaAvmbMpEGnrreQnbqDynhVqXR2MABx5nDe5TkgDfFrB4NRtfwgkBT3W4dGk4ffZsfUPRKj27Q7v1BhTEqfV7si",
  "key19": "KBe9No68fsEkQXGKaxNtVX3ivVZa8g2GnHpic6MYRAX829Yms1W8mtsKdemyQt8njEqNdGRzU18kazTaCZzwJP5",
  "key20": "2aBM3SBg6NkBhipQ1nCPpa1Bjh3sXKDikxCqMGwbpRFBW19c5bM6iHzgj4c6KsWuNYtCCfe4YDYsXUPH4dRn4cY1",
  "key21": "4PVeguaaTpbsCoNFkKFjD82xoc2B2WLuWdXNBJk7CWMAJ6wAuD3v6ZB4qXZApR1XJcGnAaRao4JbECrwpQFNLogu",
  "key22": "sre5Zgw98hJaHrZfTMaXZomn9W48WjVdWPRV5fZ2EPMCgKqy2UzKeEzaySrPZ1u8X1bRjLL3YQppFa2RaNaqZuW",
  "key23": "cdEpvFixeBirXnvZ4SjYCQwhfGMLbbWE8nY6pDn5srw6bE4ETqn1yRWpYvWX9w8xEmzQHd3vW24m3aWKNYFmMi5",
  "key24": "7S14vsX9rddvMRyjvCU7AqTCfhG9ZvkRgDcw2iacCL1uRuRb5cL7EYHuyxFmAtFuELYRFvazRtByHJho1GhHobD",
  "key25": "3hF5oNbpMBsCd91CBNShGmYQfDqVqdZ4956eXyzacwEWUz5wFeH8REx1N7yQJm8BHUkAWsTRdjVWojMUF7wNJvXc",
  "key26": "4PVVzW1nCbnxiaCu4cF1Sqee6b8LQd2TRNz6znpXrmB5bNAvksQpsTzYAGQ1FfQzKe3zR4PP4raUnz84o461Gkya",
  "key27": "3jPPzXvUbcF9cczhZk6to1fxGJeNxfu8nzmdrs9d6h6FTRPkWhdJSvNTNMCgAjhRvkPrKvuK7GxzmBZj38kLdxbe",
  "key28": "4fUx3SfJWugSTQ5R1hbzibf3QYcd1KvbsDX6t3TncHEXXodQHiMyNgfVqGo5WzTabJFAVBbeRJV1nSt8sgzvLjnV",
  "key29": "SknuqLPi6RyxHK8UF6Go2hKXuAsnh4UKHGEbkrWJV3aWD8bgQzGCHWf1zm3teQSAQDKrtZrbXa2ZBCFTgQH16YA",
  "key30": "5K2TrDhNpyDCmvBgMLfi9Y9nezgv5yXVyQ5MpXHbqN6rgJQCMubDsWh57dqdE2tdKWRAuYuTLrfJQnPPBTjFSBnY",
  "key31": "3sWqDWjik5pugKxRC5DGUm8WQtFDnESREoGzfWoguvcDbxTze9vts8xfrFd63CQkr23muWsPrpjd4BTqtspU5NmT",
  "key32": "3MjVCY7vMzWmrmHG7VgbZDgzwDXMP7pSnmcQLou5qqp5QUfTHjZZBzLKnhkvT5Vp9AUSAZupVpW771XMJbZ54f1R",
  "key33": "4StxSQ2EEPVbjjWAUcjPkz66qR53FHLg3sbrD2m7UxFzubRjmvxyyGQhPS655ZZ5NRER8GRTkJFcWtcRdUPgYpRq",
  "key34": "3SFDyvKZVV5XtBPevtdk7iUD5Qh8DS22xRVD8g9SoR7E96fwUFg9buLv4q6nEQnJ1Y8Nao1FosedRYiA8PMSHKyw",
  "key35": "4DrSou2gVaB4anLD3UUxX3VvkBKDkzPoba7J8Pdfo1PfTsWdVVomB6QeVhauX9E3h2NWw98wWZW4SUoRkLtULTAX",
  "key36": "4bQdL6M8CvT7LbCb9YZLrquDx5LNFS2bLdTWPE96RMdtdqik8BQwU9E1Q3x53mtXz2g3MSfdm3vKuPJzCPvCEZNm",
  "key37": "29Ycq41Moq8EtsjpobKqGc3c7o9m2DR1gznZHfbmHgwmKjnRKEpegAF5TxNTw3LFsdsqSuote4PPLnCDHWRLhtgP",
  "key38": "4b5Kye8cPwYFejacwjxeYYxBDtd5bgYuxJQYK2hcFQ4dsfbbi31naV4kCiVX1SKuEgKJs8UTqa7AeB17pDwhHg1B",
  "key39": "5EXiYBM171FbaAj4cNgpdWiPtkSktMfp7sGPbFyCdwb3GXnhVD7VnyxwQjr5sXQgy5DsFQSUGosSvYdTLP1dQmGV",
  "key40": "2mxfvJSmrjH47DRg5vG9DGA1KyEZFRqTUPNq5YZj3KTrWCPTUy1P8HaJHNPzAqPC7UPin2B24Y7Gx4tJpX4x2Yve",
  "key41": "4fCG5R1j71W7vPFfn4advj621Mh91UB9UdRo7vgL9heAzJ4CkGAYEJk4ZzB8fx9bfYdpFWmBTzqjEr15YLxRLGE1",
  "key42": "4kSSBSz5kBcqH45GyHH1gw5my3AYnxvFrTq6PBmwpoetwqnai85ucTrrdXJCaZuTGSMW1xK4RPxgjx3qSBkK3naZ",
  "key43": "2xwqqGjkkyEMfpoxkgaZr5X5det6uZrYovKi8vLhhJrbDQWUWU9aCZS68es4DB4yv3zqSwxjNVT8ywhz3oVdsgHU",
  "key44": "3pv7ZAA1cLNyM4QaHKRBHMxeymVPMoYJUnuFrNvP9gjnZo2f8Zb3YqWnLij8roXdQeyafENd4JEWEn4hX7iEWBzq",
  "key45": "2aWKrFoEUJmYqXe6PUnTFU6BS4Fdz4MKfbH8VRninjWvMJPbFriiEyYuKDRanqy57UzA9mvQ7QgrsecniqWs1AHH",
  "key46": "4Yh5BQbqr2aHsvSQHT6fTTcYTZ7xgobG5QPDVrRrcuLaQNaqZ5AYUhBCs8cDJsY11pzK3G14U3ytLzgwfUMzCPJ1",
  "key47": "2FcJYStB11ij7rq7D7YA9Ges4SMQxaXadFogNTWiR4LFhCP3EMzQQcUw8nTJRnfeRZrkAEW48LNZvMEHFz9X3sUu",
  "key48": "2RFutUMooyPRY9kTpYzdBXysmnDfmw8YkaETM8s7dsphANwMaR2TRjcuxFyq5o9xv3ycYuXXQZR1TN3EVbUApTmd"
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
