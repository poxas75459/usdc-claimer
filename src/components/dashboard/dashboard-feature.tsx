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
    "RahT63pmuzcJ4jFvJgRQpaBxa2n5BRtDVTXuXvEoH6x3XHWpP6ykreH4ACD64vr62K4x6PiRsxxrNDvN5uJHhhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uorHyqSDdhNG8Gk7znTbKynMYSujJzWnXEbTqpprbo8hbffBro83CLTJnpt9TKASJscVThXTgEQqjgscNRSmjzg",
  "key1": "2VQvAjiKJ6nGG9GahgWPT3Rmo2Eg4wxSJBSkGKLWqoh9HC3P4LAqMCh2PsYtPsFSrfpDHmPCHrao48VRKmnNAA8A",
  "key2": "5xC9ENHC8pRG1AN2f3XaqugHd4cKcyc6UpkJAzds9RN985nFaBwKkQk1j9NQEwkn8Z1sR2xdF6GnYwA7U6V8DF1f",
  "key3": "3o2AbWXo1yPGuBkGSHEEDvJiLpjRYRMAeqWML4ADdtTcShBPSTeuq5XowzfXESyyCxdoQoxDu1s6rVEiN76BB7Hq",
  "key4": "5hn5MHwdEPAd7DnrpJGC9srWDnVBLN9jP6vv7LKQkYn5MboDTGL23dqatJZz1yD9CfqdvDXHascXSiFnsZwbH63A",
  "key5": "P7ShMypgzsNgn2M3czVFUPj5vpxq5KwNebeFVFBmcms15oUgnSTrJH9YNwxWwyfgQaLN4d2yuLHXEurwVHYvHSQ",
  "key6": "3fQcnuRcHJeN8qPiQy5dd14FGBBdtHTg5Ez7PGmVqKkexPyRW38dPV2u6KDPNVo4dzjK7wLwokc5zfsTPznvZKZc",
  "key7": "3uTxTa9Tzj6v9ZCFBq1zbCQRkf1z82unWfazFsFJmcYpFcFgewAqTgGqjjoRJNRwYyHs8yzB8241zoCBJmanWdzw",
  "key8": "5ABDKKCt2zidUxtH1Ny4hLWctWQodpU1KzWgCJcg4VnuVrAwgtfVaQciX4rTwRQUQjzUbt52twKDuyRpF46Aq6de",
  "key9": "4zgAgVPXcEWuNmwsBPE4CZyHyQRVouN1hzSHnFFv3bEdXWfH3R3XoDeN3KYEsSNJDhYSaxkc3NzPjB39c3HHEHUP",
  "key10": "45jQGrsXDoezq6v4tA3Eom8fbVBLRjrBjkRMgkeyt24KbvcVCLYKxiu3iHEb1iR5r5k9T1KE9aKWA98rXWbaETuj",
  "key11": "iMrfFeF5mAhtEsYZy5dL4YKufCdSonTSxanzPCKC8Zz7kDwy9bQi5zjwqd4DsQ4RWmyjbo3AHm4ZydHExfqHNNk",
  "key12": "2E1f4mrEdgZXoPkL9C9S8JcADyvZ5B5sYEbyvE9JcauEzM28QuxWiHZmn2v6fRQHrBGPPAWkxjs95v9wpKVkojy4",
  "key13": "3Mcse8xQFb4u9viJTNS5kiRNAo2VF17EbtgiVN2UiuP1sH9sXuHZtVs5cFUT1m9CYRqHhiEU6Puh5w6H4KA5uY6V",
  "key14": "4y2aYeZfywzpVYXDGE6zxcGWHeP1xk6QXZvbqz8YdXGu4UGBisETaRkQ3Y9CKzRHNzEM9XwfyUjx8ufbFH775emA",
  "key15": "3sAtDKB3Ptr5G59Qi16hBW4jbuSC2TVLza1ee6mFxZ8FpeJZJydtkxwD87p2Lu4GfTscqNq3DtsdB5byaA7hxF5s",
  "key16": "46tf63CdiMjSHUAmwUHKiFGszmuwXR46kjrGeUP9zepyzADwgR94uUK8MPC2DqtCTWibuwQarXea7DUmQh5r9nvr",
  "key17": "4EtfTbbptTG7GHpUxjSEtADXpyyTpvNbGYixUvBnd3ribt6Tc9QWGihymeL7nQ7PDUuUm3FcnwCbX33RcTkpfAxT",
  "key18": "2qMowWcdFj6j6hGdJegtNUniKVttBJvVnniXs7EyVU7sj8NmGZ7y7vK1vNPCzmbRPT1Lpb1i7mh93y4aekxL1Nb3",
  "key19": "BWHprpvaKk1L4aihg7M9UrSfCaeVVoQngiqquadb5eVHGPSYVtqJZQx9FLg7F5PR4wvZ83FkGNqKkWfpB1CDjXN",
  "key20": "5C9m5bRU1yPLKZLrDivk4FrCNmL7ALU4BmE8DW5SuGE2HZTbhCYUGUUXVJdiB19gMDrNP41NZuAn5ZrrRpP3D2vJ",
  "key21": "54BaFoLRqFkine6JBhNKVWeDkpmdCZUnRmKPmTo553TNjuK4r9yXLhc4urw2HwVBLG22rWd2awadmD6x13LDnyYe",
  "key22": "2z4GQWdWiewbrXC9myujLnKD1sZsvTFLAJGrM5XtF2zkAvPUtjfLF1L4ZMhpgWcdhGea7MCAQMRynNFK8FjvQ2c3",
  "key23": "3V4aKeDZXADfhonaxoqNZ6BZAPrn6TSjB81PpSJMUPWSRPpfJhS57ZKVVi9DW7uredvqNFhmiZKqnywypmkHtZfD",
  "key24": "61XqZanbLcVMG8LC69BTumSzkC2zyfjnBNiHypFBtmR3iTCNZiTmDd2HNY8K8RUYVgck3phXpdND3W3Lk6jFBUR5",
  "key25": "5JQ5zLBKFRV72wswPtMfx4vsmiVpPF5Enb8YvD1Q2X82JtfUaZNznfXvgMBmTVuvFuuvGSY6kbcC2c7LoRXG33N1",
  "key26": "3iG1vczDEKPqpMmoL4vbBdSAUbFFr7698oGPeqwK2KG8TWb33CuVTtynzZP1fpSH9gThie3s7V5NaZrtWfqS2Cfe",
  "key27": "4eZ97NDJnjxgvKNZ9aKhpR9vQ6JzsBF2P9U2xDoeZtgzvj4XMbD22DHYtVNjHTLjrr1ruUTwMVZ3Cs2fzBwznPDL",
  "key28": "5sW9YwBVShJ5QMSc7Wx9n6E4QKbb3sgmPVtyDytsZQkJMGW8RManSNdKRYHmXmdHPeFyqT1DTweLWDYq4QTWT3z5",
  "key29": "KgvfvVTHZC81btCqesuJDv1yV4cGDCfyg4qtbKbc2Z1piQd1bLVFdX6zK8AxMecXuHX1ZGQfko7wYsxg3CXmPZX",
  "key30": "4nZeEuc15JWTTbnWmCXq2agnXjdARDAka6eAEwtwN5M4fyUTFJs3hpks3XbsX3Jp3VMXz6CiLSbtXpTcms8MBV7m",
  "key31": "4ZbhJtm3SKZTjYbgfF3goyCjm4D4VmTA9SjkwA9ibejKVMzfX3X9fwwrN7apyAqLkqTePBNoyAmp5qq4jCMsikaR",
  "key32": "3VAPxq8chmtRM7sU7HNqhrFGZUHfGSVDxbGkZUjfFh3ezAu2fWWrcgEZG6b1Z4td7fgwKTVQtPAmtVGhpgPm1zGN",
  "key33": "2ixedtHgM9T5xbxTkYX8twNfgpRrV9tzRpkKr79B13bFM2ieNtx2D4oUKaP3Boz8omDUTyNPhVmkUcXNb6sJvC5s",
  "key34": "CB7m58QyH2GpReHarhAysryGpwGy9wyY8BvixDSmp2MN7PTkeVYxMoCtepJMGuLACQcAH8X9tuN8Ym6aqfx7hEK",
  "key35": "CiHWMzCfKB2QeArMNJAKdsZfa3jCinC3zMQtWya9g3qtW6Zd63DeN8eeMoTRpyWNBLCFkcCdR5XvtNdWJUrRpHf",
  "key36": "5RwyQyuUdAv75WY6T21nUNDsYGCgifrk1xDHusij4NTbZNyHCwM1wDGYiFkd3Kyt9xN3PxQMibvh6JhKNkSQtnhb",
  "key37": "3uGxLSjh8EZM6dXzoUZsjQLizot4BcKEbUoax2kTFQfUJpxXYyT9wuGBA77sfXVjyA2UCxZvpzg78qRiNY57QW8b",
  "key38": "RafNKECKyWBouc3RXrNoCa9gCAXZUhz4j7CCpeZ9MgZTAg8LLqrckwgqggH8sczcKJuQ6eTSd2cqADUMUVfM4rm",
  "key39": "5nvMDzmFad9dx8V5HgJWQe5uUc3HWJaLi6XPX9B54XG4k2m1PSaQSg4beNsAriKTex9NAc4cermaUpEg19g2CWow",
  "key40": "3dJFtoPBebAPqUsg5eFMZDtxotHN3GzqsRmunZPUVrFS3qf7ByaAbGGutAnmyY2zHoX4svX2gFQTue8d2NHc1kq8",
  "key41": "2YYe8udtWUX3GdD7YyiCLGsFfjgkAuXmAVdNsDu8sY49Atqg3h59HmC45CbCfoupRCraQk4quALF1GmBMGnbW1ZV",
  "key42": "3LXiujTPWvWS9UrWwaqoD64uDkodjAAowW2tftBe2psFmebimmsHkHQp4KR2SQ3Frk6tLPGFmcXTgcBjhF3t6fBw",
  "key43": "3MFVULeQwEJuuEsgM3nRimesZQEw9NNFGX8feKZAavKH7TfCtqMYLYKXonh6QKZwxs3fX9qKkJQJBruTaiwpVyCx",
  "key44": "2xupEzAN55DGZL4sqqLsAy6Tww9bcFNu97XdrCibDstBvwSRD3DBrzZFb765aEDdfzVQKLxdUpz35aeaXYtXATGq",
  "key45": "34HzHM37AGRa5NsbQf3m6sqPv4fQFauSg1Qjncg5VmtHuHF3z1uvCBxeZwJczWEafxVZjfTyVPjbH6J7CdayvRcS",
  "key46": "TKzpd8gzbYUUPB8hh6iV7Wdu2Y45zo7ixWbE1q9VoYq7hET8L7sxpbyXy25qHna9XMCKh1UxuSnRknrpCjUiLMG"
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
