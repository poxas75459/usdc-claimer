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
    "5tA1ZQAdc6ZpMiAiYBKGMxbFZecMLYpmJC42zYvRUQan192cZ43RaQ1FwHcsPckUxsopK1XyrdpKXFrPCau5FQKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eAWYM4nKHAhPgMFds5SPyYZzaSfffHbTF7CBnE5YybvqtMk1gqvXichCFEM3v6j3N6CpoqrKDVtngfDGjBHm4En",
  "key1": "64AUwTB2UcgJD9xJd4ADYDkahKXjLNrGLNvzqX6DXzaeebKfqtLoQeUQ8x9pH95Q1bEQ6ETMGWrR5k6Dek6kvXU6",
  "key2": "k6ozz3td95V5KeQahreEBP1xUgJ1deusD1X6kWue8Bz7VYzh8kD1vfuymZ7Lc2Ge4Xd7fT99EBEdyh2ZdQ66fFV",
  "key3": "5v8pKGbhBywSVnDfTVamqTaLQcQi46kmeui8WRdZXzKZTgg8EC6iGVnttTpsgS3HX99W78dQwgmiGQanEEZHxCuf",
  "key4": "36hFEiqj59VGHwb6nDVz8fNoJTF8a58bevQZsqMLcihrAFG8EBvquptF5AoqfVhxqiqeAM8cRdudUgUdA2nXoDN9",
  "key5": "uwV61tpV6kUrRn7eVRd9bFPjcK493sYMo7kET9ry23giNngKhqSp3QPCmNwitddrNabNdEjwDg6ciipUQyFciUi",
  "key6": "CFhMCNWE5HhBao8ZXZmW1BshdupmGgw1ZbFfr2t2WYmDZj9dWRDYX11sBHdgHrz59aqTUtgBGYV95zqiBRutdeZ",
  "key7": "fF4vHMcqEkq1xx5yRohnCn3ZNdLkRQyBjku1dUdnKmV9yKMt4pU8pz3uBVMW4on6XRuRmrUXLCTb7bxieEiHr7g",
  "key8": "4szonkfFgXEvFktqwWBecKEFR46aoinVLp1z5jib6UZZr7NEkkr3n8NAL5Gr454cdcNmqP2SpSYKAqP1AKYcD5LZ",
  "key9": "3Xkgw8P6qfSxBQyZRRgnSwEZbjLboHrFrcgdD8shstbgYsZ6BKjX3UmKxr8PogfqNhCNENdLBKG2KumSotk2AdcY",
  "key10": "57hqw8mPSkz7jDb7pnQzKXajJqX9KgUtk3rp9B3eYCcsuKR66xJVjvMZxh5Ex3zteZjdGh1ff8fbFcQSazHEmArs",
  "key11": "27BQkFksSPxPhKegSQd1MhAmRB54VquXNq9FxDFof1LnsuPhrd87ESLUv3LYw99xhS3FtKpAKiide4gkPzMiPVn1",
  "key12": "FoGHQnw48r8j1eE5QEaHz1rCixd3GfhWF2vZc8iD9qFJ3Swm64w1RkY61fAnAynSCx92Ywoh7E7AVxguwSn5Ys9",
  "key13": "2xQAmofk6mJtDxrLX5miomF9WEpidXtKwAr8vX12LXH3jy5a1kwyWRHABDmpP85VT6FVfgvBad3SAVmdto8su43r",
  "key14": "3pAH2ZaR5obcFbVgac8gU1yVvCpBiK7BTcdsNr25T2SqRYDLdY3BnkEnwUGf7DRE8QMWjqGahVsj2zPATKSXgbn",
  "key15": "5BUXRqT76iANL76XngykwSaQjrVy1iA4dwd53dDHmf2nmViMjm3PenCD8UmnKuVw9CTjpvHa59tnWgU2bRCWRr2d",
  "key16": "4nAsquTHTg7VqSA6dCdM5P82DDqQFymuaXobsVidxmy3zfChWCBMSkWVRssQw26Kbn4av2ywaZPkxUKBiseurAm3",
  "key17": "2fmh3zPLFB1LxwirwYfyQ9eWJgjHKPEDy52W2Sn9gWNVyJcaRcv6JfENM1e2qFHxYBJ7UdBWvkBoGV2wrk4SLb3g",
  "key18": "5puBwRSx98eiJ5cwyJ5Zvc9fUppZN6nhis156Rxv9a5yiCwdyEfHLuuLDm5qAt9fDdFuzcufT4aH3Q57VF54jdDc",
  "key19": "4xYaFBLJyu2ErUixsQe8Jw2RG3avbfo3JsetcBnCPTs56LFammLChgvPEY1o2Rq67ojM9WEK9gv7ybmzdRw842MB",
  "key20": "2WcngRqCoetU2hnMvzE7mkgYv75q8vFpz6avrasuELaAzJuQdf4yD47nxPJLi1ErV94dhwJwZEsUbiwBn4CMiscW",
  "key21": "2TMTwo3ghJJfb6p5rs8shSVTbbyrNaqSmgGgnr8Qdg3RmVhvajocC9j2kt8qAhiEiqQf3Qd1zw4nLfT3mXCrsuG",
  "key22": "47LKA8XcMpgPZyVpr1f4GZs5UF1K6Aj3atz7h7FGRvY8Cx8MhusGGhXY8X4T3dJ8xZaEY4eZm7bJrT5YdwEMZjcP",
  "key23": "29xDmmhFq7Y8SrPFF2EkkVsZ8FPQ2R1DzU1p52Dwzid3hdFdCjpHL6RMXwk2EgPR5SZ8X8utAtBtcnKrV85VYoRD",
  "key24": "vRyCNjKb1iSKWFV2K9GC9HMew7jNQLwo7ERwEM76jDpEFaYgQmUeqNFzq1NYDfVUAuigAjHbw9v2ULgGLEeWxAi",
  "key25": "51aLQJHgWKhjwErK6AHLv71GT4WVumzWWEEqWNnhM88KyoeWgtxjd5iQtjVudFQSUdnR1VoTbgupRpttAvnFz8rs",
  "key26": "59jEEhyiBGPFWfR2KHWySzoGVCTCeb7eP8CxUYgrpWXzQawFfZT648jcRzBVB2vZHqvBWWxnQSguYP5BRHJ48Qf7",
  "key27": "5K6mKTvw3mv76rRkPDHTYLk8cx1o2V4V5CsEFFmRWYgsrikGLeagzG6Skwca6Gp7ttVmFNCrHRPk4VfRZKBvMtY5",
  "key28": "tWdUu6iHeETE9skuCakkP4Hg1djZKQSXpaRshMrMYEJbJMEbP6LA3syzdrFpemTVziw7kw8ZBdPRhJS7PxGHRSC",
  "key29": "3quain3H5rqVKxmEhM6Brk7B6GnbCzBY1WGEdwcUoweRx1bF7BsPyoCG1kham9V7PXBhH4gJ4q3Q48qwdQEQyiKF",
  "key30": "3dTrCkEvEVjTjFm5HTgesUfLQcp9Kt6LDohK9M5PeF2S7KStYNQJkh5DocJofew331iu5H3Wd3Mr99vJoxhPPxji",
  "key31": "2CMZkGLJTvwfYn6kdW8KsTRCMkPuFu78Uzh1Zh4QhCqHfQwRZVRFjtEn2ZKZSzbHBx8joTXzfoV45mnpwBnCvfMr",
  "key32": "kgQHSbaaeHDiQzokNB3qLCrwoDwKxG6DfTh6CL6j9pXGB7RMjwthdWfPR4La9h3uXQhETjqmhFHy3kvScXQMkG6",
  "key33": "5MVUmx87WBnGWHEmG4UUsonbj6MUvx75hqkHZ9ma9J6ALkB5CGqVmpBT1H59mrzgQFGWB6Cy2bDQonVzkk5qd7ZT",
  "key34": "4srqKUr4zmk18TdT9vzv2Nf512UHqDFRNtEebnc91S2hpE6dx1ae2ehDg31N2fhsT1LqDxq3CizD5itTok9XNdL4",
  "key35": "UN4xWsVs4pFmjdf3TYzjxb3xL1zAy1u2FGgRRHzT18xcgpDFdGzpYAvWrRjwe46KN4Ywrf394NeGNZ5zGk3n8aU",
  "key36": "Q25aUWBXgZy2YX7he3mvkGwJaUo5SoMtusSEMXJsC7XrQgLSCRBF8iZkGWLhGkFJtVeRbxTZVHRMDbwavCXuY3i",
  "key37": "5pENtjBjX9DugUqFzgGYnP6hmFTcYitjZE2MaNNWMFhgkEgNEmNsEvkdgcuxD17FdRCmGmXMkrTcriqAnEgfp1oD",
  "key38": "Gorqj8Aktgz6K2PUK9E2hfEKUfQhTpzv4WgfMjbEKfeSUjcu1vC8UDNUHcWV6bPV3rETzgshkgqDy7FXtcpEEb2",
  "key39": "255K77quhUmZuv6fsCnXJ4V8xzsm8gfT5ZWa7FCvNHCebPL2bqGN7grWido6tGyTphP4Ti577YqktD4HpjNNbYH8",
  "key40": "5KAJ3eKTNj4bFu9Vt4ieyWzgD7sDzkVcGoYAWEQtboAB5aZ4xrSrFZ3W5DtHtTQHRcbJubZZyzktAm6QRgSwmDCy",
  "key41": "2CvxdqQKPh8F1wdPgkGVawUmgf7xJ834NjL5B999FDaBsiqAFAc2s8RFTJCX9CJnEhuDTbnysxbp2uAsKQ6YbGL5",
  "key42": "pusfzFy3GqTJS88xi6KFXEz1DrUm2uAZTgs5mCWcaByYHNgwYP4ixTDvzqFWLTkG7qUE4yy2p5SyD7tjtUZQuab",
  "key43": "4x6A7xy1EBmvbFMKNNTX5QdPMfbJkeq52U2jzszrhuveBsepDvhLJK2vKmjaPuHTr5VEf8ZG9KhL76f2XnZmBj1t",
  "key44": "296rEMrikPFpJRnraN1DrRsNQaiopm6hU6VXc1hgtS4eof5eDC7pN68W89RTddaGB6HFYD4N6QkoYzpWSHeMNvn1"
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
