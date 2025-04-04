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
    "ubCFoLVYRXDRUaKER5yCsnYNbr2mn8ynr9VNkxzFtsaVKjQ3AcUthQRRJ7Jo7dJZb7Jr4HoSuk6ZVzwDTJzW3iv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V4exdicWVqXVqk1xGkVW9b4JLnycktigQBQHeWXDBBsEy1CeagAo3Zun9vDLAR54wSd7VWXoUDUkPbopjtz3aJX",
  "key1": "AY4dAaX79jZidGZ9hFJntWb9w8TE6FfN6xq326RNgtddcY6zeX6MMsquHWwSftwjgJjZB73x4WbePirPmY3eSmJ",
  "key2": "gzC3x28D98X6SEgV4BSRw8wNeaujayozuSjmdvjpuEtUzunanCvtFyKDatvaxqdMx2tbA8HCR96yZo1bcVyFtGN",
  "key3": "2Tg8CtLadPjR5SBtoZfiFLrXEsay2RAsZEAScUaXPFasG9VqwrAfAfBbagLiGig8SVWR2YJGQKSdTWcKv8xjh6xq",
  "key4": "zCHPSfLdLgBJSFUw31wAAxM2DkHDnSE9qpHmxskAcpPGcZoQV5TjLpdhxbAJADFKJWWGDhWTREoFZjJCxuZd5Ex",
  "key5": "2nBZvHi9YN4RAszzmPMsuniVS9t6C4UTUCc1mfQpMV47xX4TcxRjntCgDYQPLamjeD745Hz7CfaZth1F5SohA9rw",
  "key6": "vzUPq457i4hhF6bcDN69LafnGBmRPYbHrrA5i4cNeoW8VKhRbCABkcbE78kwELA8LAbgjD4Jp7z8KSWciyfzXTx",
  "key7": "5KNKMhcTSUSA4ihGsQVFtZ3kTfdfvHTXwuCYt8Nfp12e6joE7empngKkMXMzY77TTUKK1V43DCxCuXAhj6vdLQXY",
  "key8": "knsJvHUxLA8YRmetGewreMA9yU9QL2bqg5BkxX67bXCwYd6wLzYL8SX19EJt2E12jeoG5yPf1J4EvNy4vrkN9Wi",
  "key9": "5HqjxQSXdFJd6Fppejo9yDjk3SXXF819oiKaewiVRuF9rnbKM99NWjSjdCUkybhxMe2NNoCkUKxBMLfczWXoenhJ",
  "key10": "5sJDXQFBitGveLmEjHVyyrjNy4KrS3KWJaEukHsbs3kBGG5dWQVRkh86AE7EohjEs6AhM9nDjoumDnejiSvhXVVw",
  "key11": "5SFZxVT4HVZsYpwsLcg2fcczHYESNtvP816vy5WahCdpFXM7iropYsnJ91zZWsZM7BSbK2j4TJEso86rMvbUHAVm",
  "key12": "pkQMdU34CM2vTr4yFXdJQKNgocPqY7EakbERGMC8mhpGjRzY2QuGxjqUnwU9SoMpkVbJTKZvJ6Rbb7EeX4bfbRu",
  "key13": "6WB4eQ9Zbu2nK9R5n9hZ9KSfFh6n7p9MWwqKTHQNtGspAS4WFxpacaxNMBUvBdZGYaNgCyE8vgtK2jFjgMeWbzt",
  "key14": "5XSS6puZRQtyLQXhRdJGdyeFvXBM8qTVajpM6rAvn66JdhDuuhcpJEJEjJvFRrC59cPWQngJx1Lx4ttfVuQ6FZB3",
  "key15": "4G9N7ze5NQqzLkbAnCm1R2YS8vgSSds2kZYNYYTJjTqkQJfXmN2bhFmmHQNdJmieFWNxcrswmk16G3Q93VJCoeZj",
  "key16": "2yqA1u2uhpyBJAQVY187VsuEEdrGAEfaQtbwwKQaV4ss3rPSYSeJ9axoVSWncgTFoG7TkUZCkRLkxysLc5ZtZbUa",
  "key17": "5xwZJjKtwH6JMhXvLV4Bsq4nnCZdD9F1Bb2pMK3Bq8RwFrcnQEKiCCZnAiXogNPXyG82K3cHE9J8PRiRvzuoHAHd",
  "key18": "4Jqy8NpyMrsP2ffEVLGSoH2PcEYmDYhHAgaHBHXMBRovnpWr1cCRaYAD3LZe5biLqumpVYrGUVXXuvMRopfy1w3f",
  "key19": "4Nyt5KMsLYna7dTc6MHbV3jcEEjFu4Kg3rtfEmiqqMHhrHiN6aZBPaxFJ2WDNz44fDU1K1WG8HDmkFoMWg82dUyA",
  "key20": "rBBavwuXLXMrgEe7tKhd9SnD2KLWZ9V6ZkNdWBs2AA933mSpLxGCoSKqk6CoY3AF8dUXT1S5FJSCuTPgo6vuFS8",
  "key21": "2zqzP3F5jpJFHC7HbGe356BUE7m5VAUcwaXJdwGcZSeS1vwQCxajY5jJBGDbnUTP6AJDWvtMxiiynG7xJyTCiqkT",
  "key22": "4zDhRMX2FQUxbJ1vJcbz6WU4qdzmSpANtKHUeVVnaVC2JUYFrGLLtwdQVgJFFibExW8QuFFgQ5ZdCxzwBP7TSvd8",
  "key23": "NLXapV9qnhZxMgYvABXyxpTR2SLmsKNSv5f2aiVDSt8g9g5UyYEcJfy37GWks58sVcesVMKzDBWuHPoyydWGfhL",
  "key24": "uUfjFtLKdtUew2R17NVbMRPhoZAXVSfdv9d7uoftofJCjTD2SNPKURGpBa3hNLUxGNEiCVFScCGU88Vvru74yMy",
  "key25": "2L37Njipwta4zvCQHHEZWPkqJZFcddn85H3iPHUSkxp4t3QCD1ygv2jSdRrs2JepydMQLKZ6mEvDMrNHhTvkbKDZ",
  "key26": "4L8hZtuwPhJgh6pEu2XoA7E8yA6pJiRG59Ae5gVdECiyNVThDYr5vBGGBDc2sLjFNk8TtpecRR7SDFd96Rz2S2eG",
  "key27": "3XTfQDarJvb2RQSNPFCEEC4DF3pJ6FdBqpHwS4ERap6gmLVLs6qtPhHj8bXRgHk66LAFDXWcP2B9bLh32sG8LxD7",
  "key28": "5BWVQteaUtjFkcbckCgYhYxoruSXHALpoWsAyVGSxJuRQQ3uYfjJomhsLSDhHrjbS7YSbKAhQNpUQViKzFM4QDr9",
  "key29": "5hugH2XaCxNJxkjZn3b3STZrwsNimES1QLvP9PtVccF2AVuLKpwYqkVkSVqpn9qLigfCbMpnKpJx3VxmE1t9KXGV",
  "key30": "5HZHo5z7yoVH6PcNecuxp9Y3MoytxaDHC8pnz3zPGQhpWHXsAbyBr3cxWMKaCEsS37Sbtc98vHbJ6o7ooX9fB3ve",
  "key31": "4MPhxEeFwbViYWsUxigw9qkt8UqTMT9pQFb1oiNvb4ZD65taXMxDMLYs7iY7Gv95dGKV3fP92CG6uaazP7nHi67f",
  "key32": "99eCSqa9ZsZUenjiXWRwRPtwjKE9Evp5onvzrxpVmfeqeorg52mrCfdT8M3Xi3Y8rAjre2WjgrvJ7h6SNVJ3g7S",
  "key33": "fhjhZfAGC3BQb13qqFkmuNYU3pW98cX5LJpX1drZv5NpnXMe9FtuEy6fCQUGbQdscqdsLaVmE5y2K1hx8rJdvXL",
  "key34": "41dDKuTT4R3jmm3MAU2AEZKJxR7Kzxwyh4GSeYN6c8jGbrNkzgk7cvQKkKXyMRPYx989JnbeJmADniDbWAZ3PrcB",
  "key35": "5BufVV8DLT6jg9hx8nMT8F9pbCwut6G3zZ6XnGKkVZNf6JTBFe3yCraqTb5KXSn3szewoM3ywZHu1GcxDWsfZSwf",
  "key36": "zsvLGfpLon22xTNPbRLZYmVByZvHbkDiaLsKpV9Huz6NXFodMFmiWvLdj8oqBAthkZ6P6owLTDZNFFqXwoX3RRi",
  "key37": "rENasRLqtBKcRcCBP9cHUze8DjPpnoWwrCqrnTd5LgvgVdfBayuBXnTtzxrNkyuFbK98Dga5qabcJnpbxL2MBao",
  "key38": "5wW3DR5HvbYk2hKhcmUiDVQm1c3YP8m2gQnf9PAQ94ZW8aSKEYFKb6JaHSdDDFEBZXC7qppscExMtnJcWWjCBYsQ",
  "key39": "umzQ8oKgVGuSUYEH1GNqWyo6Y3XF5shHWs2FkMxsRVcqNJAY7V39J641PZgRht56SwaoerGcenwgD2v9y7Vm98Z",
  "key40": "3YhMKsCvfmeMHfFJiZmNppB9kgvmri63bjSDVD5QXvwAGdbBWHp4DguJagFYhP6gnLdEYmpUZcuTAwFNtxUNd8xE",
  "key41": "5oXTVFtKo4etLN48xAYCVEY7aqD2Jm6JVPd8WuRR3dHhUjhC3kY1TrK6bWR7XiYK91bV8Zp9SHs9g8gYWxYbMruW",
  "key42": "355K7qoV5N68CLNAhriURXkxer41jHejotw3T9qATpAWwuTgvX5cknX3Nz3c4t4Jw41cTvNBmfCWvq73gRk8ATnP",
  "key43": "kDkHk7SyLxpGawU8g4nKBEnuRVBzurEQvcMYM2NB4qiyLDpMvBcncXrADJ5UmPmYfDyGkxii2o32BJKmyPNb4ca",
  "key44": "657PbHYe22tj6g3HTjMNC1jn6FeDwsrsm5aoi2J4yEBFTLaKruenvt8t36mMk7PNgQ51H4HCufZAxtJPDLJALqvY",
  "key45": "2sfnqF1hc3ujdzNAH64We4ucmF9rQ7MpF8e88xooGWmgG8ceHa2Q4GVLDL9jJ5ocs3SykdVjXKqqbZsSv3ug7mCt"
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
