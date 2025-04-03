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
    "4SD3QE99FEy87riHbuCe6Aje313tteLjUsjciqndD6W4USMEZ2upLEdKB9GaztdVKz5Nj6Qqhofo8UDYJMCijXKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28dCbG213mocHQCHVm7a1BMLhAYRbvDB3SRt2Wy7bRBFiPKTeKDt9E2N6DJoqqyiGG1zHd3eTmj78C4ZnFmJbD1b",
  "key1": "3eKxFhGAEVLqNgv1TcQe28sTkT9JJniQyiinxthusKtgTRPJzaKAFHoYEkHBzsGdhqpVsWcJS6sfL1fHD1E1GX5x",
  "key2": "2pyNKbNLBusP88wGXg6uqDrDHrmqLo7SktsyBXnn2QfQx2b92ehKjNandiRMjyPmqGkYRnkJVcu1yQDFRs7YGtKY",
  "key3": "52ozmQFAGib9xpyqvnZSCk2ncuVVBV1Lb7CLM7i2EvkHT8K8p7GQjFRYHPzxeE4ptyLEvGAuoE9Jxpk8zHPk16jy",
  "key4": "61V9XcH9USJa7GsB8BUGqGGMjsydSaBzubyyfFJivgoVnAojSjPCHpy7LBMNB5oHHk68GbffMkAWvjGthUwRqeL",
  "key5": "2Q32vLwBjNibU7JyvJ2FZnuFv3w2WiMgRe85YEXvAzUYHiLvuBeNkmcaocAAvcCoEJpcKGdxSNh7LvMwT1d1daf1",
  "key6": "2g5v9X6piVS6EEo8v37n5kD6F7ypQm2WAEsjZokm4xvTPUjWYe1G5BLmJok88bXeK95B3eHVxHb7W36Y9WXuWN58",
  "key7": "5SfigNi7C7GcFTbSvWvGdbEARfgiEQ8jZhKtpbDWBQZY3XwPinfpY6fuhKeujoj6hiKGNqFbPqr6azaVYWBCRruL",
  "key8": "211PRUWwRSwrLwGcYqhGng7VtpQrCopnFnyvVm9HhwiYHAV7fSbTwWFz5AiTeRLkrWrv4msfQQ5P5yaWvawYdswJ",
  "key9": "4cEL84QXGyCFNdvF6KdoSREYafsLpo7cj3TEBAdruXNEHUMBppAR8xTKC16joMV2Q757sNdKKvWuPu1MnRNjHcSX",
  "key10": "E4io8yJftNBUoWY1vuBSRWfZgbcDg9JRbucuE5rNM1Na5DDxfVgxpJaeiGd2ZpkwCVBsMM5x6mkyiCZtX2P131v",
  "key11": "49vqEJ8cTvCW7YtTm8NriCUvPDkP8Tx6hprS7ctzSkPnMZhhxwJffe5L2rGjJN26MDMeqPQGAuwx45mjbyvWhAZt",
  "key12": "3TpBTQnkgY4pmNjv1tbvVv9rsrubnvd3oMhwX1G9d4EwsKuNKfYy3GpNeTHvKHFcucmuZ7DvR26XJ7FRGFX8HHKF",
  "key13": "5AvoMhfmUiGzBDr1hHgmqCYPK1vmahnhivEpQNfEZAQWLFWab9NpuDsL2RxYnLdve47cvBPRFi1FJHgyzS1mJq2L",
  "key14": "3RxDF4KKnhpkuSTmDPdoLiH1fZMW6bsBAnhf2z2AJWdRQqS2FANQheK6BGh75x1UBEMPMZYXeG9453UxqtBnpcGJ",
  "key15": "516UBNZZ8ErzFSNjw4zUZX3XUV4CMHk317p7uY6Dc7rJHXBRE38bfc17xFRxxqv8wbZM9Q68odxrHGetuikLyZfZ",
  "key16": "3iNjw51L5kyHc6brscf7NXSxu8XsKn4aijiZSpbfoeNGZwvXCGsSqvbUF1adB5FySWVx9XtFK77hBJY6b9wdBd5b",
  "key17": "3ug35PDsDc3nftBYPuNAp3Jp1uLLv7KEJhT68S1PWC9JpGKkoU5kjGPt6xJWSotjL8mdkgnvdnR1t7zF8U1PZicf",
  "key18": "24t4RvRSHR2gimQL8zoXuQSvEL3MhLZiGPUDeaQRZDmVNsVp2qaQLuAVV3Ljasj5fjRVM2Zwn7qg5rajuRTCAAs5",
  "key19": "227qZGRw6kNLjSfQDca4hChaLWNp767eAJokmhcE4MxFXK61AbDH18zjxbdTwQDWUNrPPo8r1BngZ7UHz8o5pMhB",
  "key20": "245ghnUYoULe3RbNyb9JqJrRY83aZotoi3dMYXUX7QetQoinmSd8sqXb75pmG756mCiTJntxJtLiYezHFhdTTjcM",
  "key21": "2GAjaM2tAFHXUnUKcqsdbDRniFN8Z6Wj9RdxTzrDStrjFxBwP8ofy8e1gvm4XJCn7QAJyLrgPoRpZB3dxAE5nDb9",
  "key22": "2Gxdwih7KXnyihQbKc7iQC2er8y9Wm6QLPGre5R6FDybDefwKwpEwjBYpRbsam9odUWkoAGJjRfLVGLdwsyjJTg1",
  "key23": "4TsdCqDxiqq9kr794yniwAgqb2srUk4zBhup264QkYJ5Us7bPExFnmGqG5R2GayRYn9ssXfzpBFdqrSSuTqakYEE",
  "key24": "2UaEmxy6F2nyMPiCnhmJeHiKxZ22K6goGx1KPmvGDUXDjfBZRerpffSC8SdP1HuunnVdyFKNkuVuAvMUoAiEknLF",
  "key25": "291ZrZNxy23tw4v76i1NLcDoDn5iYYQZ7GXXusavRX9u4L6Fzkt3QP7WDvFDfMwa6NErBLPSELfNpAZqLfDCNLBv",
  "key26": "4JBzYbvo7h5mDNobhJKUEfZmVDZ4V62A3BEtpw34o4sWKQErLPuhQQCpCLYrAzxcZmznrTXCXN7ZzA3TgSAKpbtS",
  "key27": "63NUZohcME8ffUMDzqoENiNiEEWZifF2xQvxPnPTcH5ZbhbRdkEJesCyE5NyRdTnPDvgzNJrBSkNaFdCP7qqFxyz",
  "key28": "2xrXovg8yNrNsbixvL8jMLjcvxtpSNF61hfHSXqqVnSJzN6u1XqpTtUdqjaJi5VZKnts2FyF7e8ZN733iaHgXqgM",
  "key29": "5ujnTvBjdLYgN3tdy6c5NPk2fNM5sPQWXxNX1GsVb8ku3RChAbmi6ErVWUAqZwFCiviToFCv48Bkr36TM9yqNUJU",
  "key30": "31rdAZVraod1Zwhe8ubYsRjxAVYrpPEXwhUyaHUPPJANAbXBpSJtCEtXZyiGKvx9fumNYNjFiMgFs9mhtHQaj3kH",
  "key31": "2rZDpF9eqMrcUs8BLz2yzJqzUgXhuQmfEBWEEEauY5Gbmym63RLyXoiaSD6LZuXE9qvQMfqzZRVH8PEmsxhbk8Fk",
  "key32": "35kkQzB4ufk5fTTrsPyFecAtQgaoKCRidcAchhaFman1wRw2vDDVeUrPNAyadwEgRknT9gwrhtTdu8vBcDmVUV64",
  "key33": "3fxuAcC1mGJ9XRcwHrPKLehJY8CC5exx8wd72CpcpNT2z8MoVGfW1DFGZUQdizx1Anivk9cBepwEtcgi7qgo3Ym2",
  "key34": "38tqQz9DVXc9m8t1wQkc2pRSqPNSjY7q4n2tfw3gyRGL3aiEq8MiP8ManiyvXkrLiNXoA2K7oefDC7uitYhrhF7a",
  "key35": "4qftnHYLDN3JS6xTydBRxPN31XLgKitJ4AxaeZwaW5Q1ywB8rd5iFQcfWZUhA6qFUue7CvMTTxeebj2HFh3xuaqW",
  "key36": "21vpcS5fpaPv442VVkdLTTEiyYb41UTDTeZaQ6JtHLNC2KcC9cEwYhN1kgkSrJe2xsFdX25Ti9V3SbMAMbjtEkKR",
  "key37": "4UJNETHkdazkwtJKNb6uTsBd3ZbBxeVXTR27T4EDHkjtXaMmseUz3cdSC9wzBdQqjNV8JPwSczd4sUxtDbiVKgrY",
  "key38": "3KXzd8L3jhsEBFUD2NaX8Lj4d8i5CjGj55yREvpuXaLG2kW8FBu1opZo3e1rC2EiGrVHKowvhxZ4thE8J6HiVPmh",
  "key39": "Nijb2g4QCdFJazkkfx1VP6PDaUrc9MQUo1m2wxGRTNRDPQ4k398AwATYLy2XzZhAL7GJUGDrqgQtbVQ5Vk57ZUA",
  "key40": "Aq5UT9nabPZDBandEPgKsEombzy8mjazd8y93xemAegUuuN4xGkPF79uWsvAvUrG8pPKJh4RSyCckXhdwvaqawn",
  "key41": "5g4Za6qCtf5Fc3CxzhSooye1Rher7FwB9rLmWQ21RiPKnnjf1xtdtQQmhnsAPGH1SsyvimFxTNEbYyJGJGYotpu6",
  "key42": "47W4PhhSUksp1Fekw9exoNMnKc47eLvmVuALteoGL8QMcjfjaFxpjv6ug8pHcGTT42ZjDA41DonYvwv7nBAptVeF",
  "key43": "4YHZRt7omS33sczavMk7rEqPUVSGKPog9D9yg3HYxrK6T6GhL2nfyqr79XSRhpmY5z5XPW5FbFUfFuGqRz6BoE9m",
  "key44": "3abnbELcZPD2yD7snEDT2vp4ishrsfznxdnnfunARwSdYiVnLzNojHNcF6d2bxo5aKNvCSdjbaXr3PtKAPaKSzj4"
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
