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
    "hwZmosoTzgeERGVqs1DQaY8kiLH8bbR3WjeE2cuYkAhrmq9ivbjd1Ld3KCrQ6PsMk9Z9jmcMkNrwPSHkYqMhCnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HYZLsEA71UwaWFfNJcGDD94j7DDuZgkeAuA45FDrsJTNbqYr3ci2gfihajk6Csx1YDZBWJpsn3ZgrbX1GsqUbDG",
  "key1": "xf7nivHS4tWNcaEKgNsTCogLxWPDL529CCdwp7dimxi2iVJX9WxQNYzbtx6xDDwjjZXJDdDwhLajM9ZLoQEjATb",
  "key2": "3NL1F7h9iGjDWCry4skVeke8fvefMH4sSKtfiTvTLsT6WHxmG9DW1SVSt2eXU8jAfu9KpbViZKszq3pPnQC4zts",
  "key3": "3iL5oZrXMEVjwkYTrKRR9zu9XYrT9AqEbky4uLEm9ifjSGhSAmbgFrnxA2FtU3dzC8V4hoqopAz6rFoYwgUqQPss",
  "key4": "GsyuN1S6ywYTw2UipvDEhfVByz6pGWceLizYCL2dL1B3uNs8Upis6Bt9arUHkSAoqFdFDhHv8Nh3PABsEuGGjKP",
  "key5": "42bkGvX3Emg9PhYQLn21d7pewKZEDwFpn3w9wwZbrJyse5vLAg4awdemFXBEQgFmvoDGoUTW4LNBysAix6j3k2w2",
  "key6": "5uCadxNWGodoSCiEjKhcig8yZgmChTvSwoSZGfqKkpbtGodjHqYVbKTtAWd64HvgFDtRSXBuoFTyQjHoeGCeANGX",
  "key7": "4DWLXAPhwL4gofWWHZhYc8sfwYUECBSJTaLqUQDqgS8zkS9WeK8YuuGYK8QFqdyEYghsXxnNFWjKcSRUMSJPNdPK",
  "key8": "Axdz9FvhzZbMUQ9LB9BrMpRpTWSsoJ714xjXR9LLDxNAaie8WoFbwxA712Nx5n74bQk4bmjX9XnBbTgrZZ7CAsa",
  "key9": "36BfytsbvmNmGkoAizvSyaAwqN8UoEmifLabvmpSzEk3AJJFo9BHrLNtmjvFZ861rdZyvXxNopmuet6QFnwpL1U7",
  "key10": "33sqRqGr1FZMQU65y7k9iWVqYvXcmPB7FWSt61pFzfgnEuieAche3wbrQMgMPuctC1CzxA423tBYNV17Q1D4Y6N7",
  "key11": "5j9DckscoHxmvY16n4tv1W2yicDzQZg1gVncA7pwEaSzLoy5ZKb7jj8ztkyjxBMenYtZVkkMgCyVEPjV5PjdZnyU",
  "key12": "5CnWPEKuYuqJqWgMTXW1zRwMPCEWBF6fGLgXS4BFms4ZxCj1M9ajhLiqtDwgMm1UJUk7jZsrPAaqhAcSC4YBY4Lc",
  "key13": "QqRZw1UUR6y7JP2LhjAePeqSBuaVbHH2nxucmpCWLzJddJMYsG8VsSxMPqodCgZumLCt1JyJDXTmHE6G5yXytgW",
  "key14": "5KAmsfdcU6MTePoXM8qVjNFmatftgpv915qzxd1PuMqjWXLxvohhbs6i8QHHjz4zjSeMAhLDDU6Zwy6E7Q2HqL54",
  "key15": "5xSv3oqSo9k3js4udgtZfa25ix8skHa2cCCVrRGUdhyqKif9sTMUPxE5Bdyz4wioS7TuYCJDgGCmsN6JPRPHHC8q",
  "key16": "EoyiQUQfDVUXWndZvxZjwPDg3weh176Zpmo1kyzcn7hHqYAxdhh9zzPKE4sEawqk4AhatRERNLidDto3H49yj7K",
  "key17": "3g5gQcUSMyeBfN5sDycpweEnLv9YK84X25PaSrkTGJYQdAnkNL4nG1RSyQzfgJ9eh6sgEmehvgk25r5TNg3uxAFt",
  "key18": "5ny7hL2J6fjvEZjN1nPRa9yvQCesrjdB1kT9DoJvhcz4nNkNpN3NnisbyECkooPosHGhZHN1P29zCmHi979MCfRD",
  "key19": "5U1AQaa6yw14qUDoHdwWAzsGkScZFWEKWRMzkGkf3kRwPFAPLDNXqXmTvVe4UUW6bH6qSGCPakkACznfH3SVM7tT",
  "key20": "67hoeW5jTtXFCDa8gsuSJSiqmN8AcwuE3UzAuo1nRqAVKHW9dXxgiiFWJZ2HJkhxd98K1Lvrgkp2iJB8zUrNq5vJ",
  "key21": "2e91vEjsv1Y6J1NHmTMe8ZtpVcpCrS6dE6BGAbWdN89j9VEDXU2DqCs9cxZr2rG8XK18rQArJA2UeR9W1beQBEn7",
  "key22": "4gBKSnfzuxP3tiE97zwqf8rkqscod8QHqEMQ3T42dkJCfLfheaog9SgjKf7HXEe6wHjsG4JUuox3cCa6iR8PuQM2",
  "key23": "5F5Xn9WzqqCLT4R5BymZmePahdeJULKtomW82fzYzSJ2DyKFp1pjcph2yUfZLh4cgSRnKgC9xTj64cB4sMCk4T6P",
  "key24": "E6aj8uw3j1HTiHWeWCiQ4H6LnnZwfLfyF2B3XTNUU69jRPRhtdyqjZVBQSUoZeMRkdzajJqMFRg1HwwQ4Tz3mnY",
  "key25": "6f2bgVgQk3fuyu5DaMvJGAz7Cx647YPpnsfWytJipizhCZs33pStjqHLUYBcz6cYHDtMNd46nnaPZbXywZqACi6",
  "key26": "uGsWGD6hrt4dm4c1kL9W18YrKNY4f6bbJLR77NDv9SHPXsHKYgE5BFBHq4gitcr3ovd3Gb1WjkNmEPhxAdbVNFS",
  "key27": "4JrbJPom8ktXcL5BzBTmoURxVWsowVE9cGKMbKNaW6PZZrGvfxKnmhMy9PYByVNTTSq7ES1hkvAYEWaoZaRBp9fk",
  "key28": "3RmmTf1L1hcKgvohChBZ7MB4Q6Lx9uHyjNrgVu6eGTVJnhvsKBn8PUeAzQUQU2WwmENby31XpP1FLbFnDMRN4Jkt",
  "key29": "q5oD1aiENdU3YTWNgnH5X2U8Vo8GrRDZ7wqNJiKUxGUGPhaRS9sddrmTw5xTDKHkt8ysZH1rZYvbHQqrLoeeAwc",
  "key30": "4UmjHj8uTyYb4854wbPmerFQBS2cJ7dQXMTYkvvMoqmdqTCcubVgrKgFkggFpQAXF74caJyZE7SiW69mfMEVuA8G",
  "key31": "2HGAc8QQdPsi678usXqT4Xq2H8xdfBvgwSzbVUCWz6iskEReKnKQAyEkzhCk1UNnpzFDvNWDZRxYHM85HJbaAP3a",
  "key32": "VvWasf7Azc2FJCtEFMAPNAooEFYXzCKTDnBM7KqCJFrDLXsn1e5nZ4iAocHCDu8jMVFVcV7QttG16dXWPKbb2Ad",
  "key33": "4XP28izpRw1Tbonv4ekcrHaAYU1TwH5wjNxRBrvXHP5xafjtMDyzD7bKBy67hUv1GueYHt7rxZQF4gum5dd85UU6",
  "key34": "2E1H4iqScGLJXF9YJnW9KKAmwg3YJMbAYgPMwq5sK9zRx5AnR24x9rZnTtaaiEsGb7uD2KjHaS1jR9shSAjN2gua",
  "key35": "2KEUhWMBcJL55UZFcv71AoJWiQoLLVxAuH1JMJXcrrDc3HjafZ6NDHf7WLdSjesupuQKmPseiFfeN3dd6qH9D6YZ",
  "key36": "2SWFZthYy2VpczRssm7S8F6YKyEqZQUmaJTntWEDwXEjY1fzqQm5Rivr4BtodWctxjnREc85bvmTL3yg6xYJ3xxv",
  "key37": "3K3rXknjvNeuDVJo5fgEMAw3HpJFNYc2SnaebpuUqHHjDMaqTkMDfN6yZL8FzyQT6e2v95iu7cPWCJm2zPBv8dr",
  "key38": "2zCT9X7wPbteBhBCR9wmNJGs9BmV8ESCwaa2NXhBxAYyKzJD6ExntfNcu49RFW1ubQ3hrpQmbXX9QGi85kF77LZr",
  "key39": "2CPeNEtwXx8SpLZjwd2Qs6fBrPm5trJdfDVTvafMj13BrnSMAS3xxzrmNW8zQpQhRFG8mpYUHSD81kDrjZmEWRCX"
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
