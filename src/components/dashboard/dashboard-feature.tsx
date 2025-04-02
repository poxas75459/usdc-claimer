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
    "5d186yXn6avM7GkHcXxZEkCdDNvhWnkAww8GtZPKj4fdvXJ1gd2RkZrPJiLoxTnEHcMGnQwnmuxVN4LdArr64BNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ghWm92sPU3sb9jZ7Y8U19vv5icnWQL3xSijKxhDhkwNSGH7n3bM6Qq7i3YazeHAVPebmX3UsUztRvaChCQhncEs",
  "key1": "5wDF4cMXXDHnKj4ESdycxXXMiiQRABd7EdY6qHeyNbQRLHSE3Mz9FQuDdcnGyC4hPTuAbZVgR63nfUjnCmCmketh",
  "key2": "2w5SG8jiHcqZ1aBpVsWgTo7RHpiVTVzNYuERNvMTc7q2ctg8MQkELEPSqEvrsFf1Xstgyj8z6zKP6T4PPcV1BHqn",
  "key3": "5MgZncAak92FM27YqMtPxF33uN8a4BbPPBKGEagb9Gzw5FtJzpiKhJyk9qS6ZGrvDy5rDFnoRzrVrEh5zzqGb6Lb",
  "key4": "3CuHETEPEXKHCX3dTiPqbVwg9g2uygdkzNq1GBTMr62XbcaFNoQnvEcECjEwzdhmPjCg17mR6vxacB8QPrbHd2x6",
  "key5": "5CTfqRa211FPpr4vsrH36srY9Xp6mmShYj3io7sQnu2bH9xn3PUi6Bv1BdhnhoWRTxKK9JvoEesy9Nd1PsFcBTmi",
  "key6": "BrMbXyGGQGLRDuPF7KHpye9oZG5MV2PUVzbcDFRjJhwBTmJRw9qsgvbzRPydhJt6ARQYaJLxKQtCNdKf64hanay",
  "key7": "61jsrPapcgLVbVor8zmHPp4YRzN3GN1v192KScTJy7kG333nDGu4a6tqX8iUFsacUinPKjWSv2cmkNzcmfxCLNEE",
  "key8": "5gFh3XfGDhLPiW18QAF9UiYEAi4NEXpApKp8HUY2wnpFNNuetST2yuW8zUFwF36Vuz2FmsQey21YAofeTg6PL87U",
  "key9": "5a78SLbqpwXM8U4JSNr3CbMatYNJQnKSmEXyDpHubXkG5xexwmGi1UpJy7ASTypXuzjm4NjcaqvWRvqvj3DZT9Wu",
  "key10": "2wJP8SGAWEB6Md1kKatHhK9fJnYaDknAgjeQxpKbG1VaHGnwUv92YidRA8XSQneu2AK4sDLua15qXmCvLg529zkr",
  "key11": "2K5NhpMJUnvnfgo8ebA8A6UfTyQX2HtY57fvJESzM5o3BVTiyREWSYdoC3D3doNtqJ7s14eTFs6EnHRCsGebHV8v",
  "key12": "3qKuW6sUS6f7gr2y3LKYNsQazZGw3t6CfVo9tGBgnmaxGz4mTZ6wS6Vx7zdKsPsLAhf3zq7NBaebjkXTPEqhvdDd",
  "key13": "n1Mwfx9pXbo1KnTeV54aAKqFRjQzyb6XqA5Qd3dQcwS2qCtFvL4NnUjDMmedSP7mqzzXfp84MzTmFcLMRyB6gME",
  "key14": "4Pkq3HWYopj7Rwc5V7vDs23BcduYcPECyajMKkbhvMkDetPrNxv9Hjba9tjUmZE2mx5LG1DmcnddwvVpxq2LrvVm",
  "key15": "27jNjWSpbc3qfMwF7ZJvPkCrR6usMssPYLAiThSh787hxXK4yTaCJLRfCeYF7EeZjsoAW6EmLJVYSgiGNKjZqcdS",
  "key16": "35Qy4bXrczLXkjyH9gmHagwo1sdKN4qCFCbrT1PXmJEiPJCSPcVafa9uyCvXHFPfhnj96UNaDSHfgC8PKbf8gTsu",
  "key17": "4hep3pz7RgnrmUPSrEjbcXKQrE3r4DHQHRHDqxJAunXpBpDfjzFfKpnfpcxApXBztwL9Rd9wyFzdqsDReK625Hpn",
  "key18": "4qMKhZaR2YWNsArfoFFvDMCsp4d7sAL2wex1X5cZ6wh9sv1E87e2sgt93bDpL4jKBEkfBp7omBuXaKJtStU7pZv8",
  "key19": "4xczRZzyYCrEPCQtcTrsuJ2Frs128RTxFyVp51iQnXyHfGYWggVyNJ1TxzfV3AoamUdDTBRdZVBySYyawTVonVT7",
  "key20": "5ExvYuaHboSboSDRQuk5kbhoANxTFXeFb8xrdYUg7dPx5xgfhL5re5s5x5U1R5iWfmcyme7pXGejU8YpWba21KWT",
  "key21": "3aRLQqDMEmFeQqye5eMakskp52fGhutsgTguhsApW7yqhhRW8EH8ThEQ6kCcuo78YFvzJKABFL2o3pe6sSuvGn9v",
  "key22": "28xmxAWoyLG5FptNKBaxq2vy9x2psiMBy6uhLLANJDoqA9aVB8Gz7Y9qXc8niNhbguza5oDZ34U7FYuKTjCmF7jU",
  "key23": "2a4EtYsenuA5g9xAkJfUEucr62rS25d8DWBqynZ4mr3HjC38GpD3w2d1uRYMSyfYvx7hrTyTbopzh9V4r4Nuenqa",
  "key24": "NrVzLSJ9eEfEvbCy5DGaCsoD4KWd9Zmi4BQA9crH5aeup6KjezijSrfcC4KTowKvDPog5iQRzidERb9Ebuxoqt1",
  "key25": "5KLh4wqQSDJsvcEvPYS2zHpzhuvUexUaMH6EFVAXSVYNqfRNVyKKDPVwt2aJxdK5EMHBeLnLzFNfGGtCm9fgabtr",
  "key26": "XLxw23BxurDDaGYU6dSSY6SbMhVmcntPzdhtW8qczM9i7G8qMegk3zjtqdCzjVvu1yoWsDgoNoMVxz1idx1XGfn",
  "key27": "44ActQugMQocRCz5FQfsDupg78cjhYBbuq4ePUaeAeNYe5TYkmcDjv26Do235GRLd4rAxQ1czKrJS6GfvrR5iYM2",
  "key28": "2H7NT8ty9Txk2sLyeHnaq4SUtUqPaSbGokHWfywdg6zeYYwxUdvfR1W2WX3i4V5PJc8CGWWuuxevbbJivhvKn6ig",
  "key29": "2m2RK5oZWRRoXdRqua8W2ae3bxza8X6izfZTk83S6sE4Cuubadm6NGjzByDstBQzaWBgK9niRe4TyTG36FeJGwLa",
  "key30": "SkVsK9KKyHZwub2dWFt3jPw5YpMYJo9pucAUeo2zRdsH2jNXa7P6sBrJcGTsiseQSxKHt4dEWUxK4cEmr6egp6a",
  "key31": "4pLoSkMXbX3exKSwcE7rFJ3oGeutLj895RfcT7Kx2TqGDmtAkGNtbhcv8dgduu5Uy3nvzBqd2xYmaZK5hmGnfbTz",
  "key32": "22Fna2YEae4KK9jEV54AzWBM5PPtouehDPnC9HRXjvZ2cFR3njybn93wUf9ymqTuBrbcnycxr7buxZGiZKtec1DY",
  "key33": "5o3qsNnpTDt3vQZ2dNzAurHDnsfDsE7k6pyNZmhNifoRnztCVrbYdi7r6Z7tzZwFa3czLwwzCWN9DPpemQJkGVzX",
  "key34": "1kdZNMyFk8GHZHmdfx1hyFWs689UTdj4hw5RpL7xJdjrMagbGUcdKUw72jZB565BC4EhuvdrbrxBm3wctz6G8h7",
  "key35": "2u3GKKWMHrCDLGN1545odL8zpXrvw8sRLtPgh2SvR1WJjouyukrzYYNJFeS8eyrpMMBXKh9ciRJE4ep73KghKMnZ",
  "key36": "2afwpmbZzNuLtB9dTY64M9h35d5tW1ptAQSCFo1SoSqyvY6K4PhsCHmCL25Sm1EUoBd2Z7zkT63jrgELMvkxKnzk"
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
