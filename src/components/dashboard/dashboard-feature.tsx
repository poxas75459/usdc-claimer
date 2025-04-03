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
    "4AL6smeizcLVupqe4Zow6bcmiTM6BqaH4Wi5UA5aMX97JxmCPdA14JQ9GmBaAVs5d3QT4DeMNZgErsL4Fp94tAQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dUzjbCDN52x22dXR5H95f8vB4tz8i1sAojttSsHAZ6sM8WVpMEpSqUJTTXAYRBt15EruhYnvWniDkNBAgf78kZz",
  "key1": "4vvPeA7VYYo8UC73JrnSZhyAQK44rUpw6Nvqx4srbhQB56HWmcvHzNr9HgRYDM8X3wVMjFCrGd2cGuHTQeUuQTA9",
  "key2": "39FkRc8L5nqagKAYzUiJ1vVoytcGpZjz3WvVkUpVM9V2x41jRUNthhdfTgSiNjF8vubixom57uMSNcu7G2xWVqUh",
  "key3": "2849dxCynvNj2bw3mcd8DykyzVqf7jgwp41A2Ry5XSYMg6LRthUk4NNTD3vKnnBrS7zkYw9iddy2Hjur11vhobKo",
  "key4": "2mDi44TokDVCuVYaPqphfqJKA9Hryu6b5QcVUSwfF7dpATExortVKNFuEkpxKZtZbTay64znEuPKWK3nDheEzjmn",
  "key5": "56gNRD7UitJBMjJWqrNqCRhA96542QLjartYUFfopHKqzNFR9mTJxGREa7pwjFh83yB2FMjEePyNPGEGzCjBAV49",
  "key6": "LtQWZDwS9mL1dh7tZj1DoQLbZzfqMdY84wRwgLoJ6HM35tPc3u9u1xVwqgZHC9epyGU193D7y8CtPw5tFqUuCWJ",
  "key7": "2xkUE7LM4jrA66tvjhwcHq95L2tNL43w1BYqoT1BimhaiXKuJH7qqfqr1FFeqdPnR6SAwhVWz1GrVQirSq5EWjYi",
  "key8": "598PRisKm36m8A2hPV8B4aQ8REg4AHrRoDj4xVHsxuTwfk7q7cb5rk7osJrNBkX54QCTDgjpnyc3g69Q3A3JUy8o",
  "key9": "LC2vk3D2YmekXh4SPMsMtcXMCHfY4nCZrWga23pZXimxaYWJuizHZoDxtZuy6dtmu9JjpUNAWx2zY5aqCUkGSS6",
  "key10": "3D9wQ5i8KwEnwgaVg8e2g3yQixLRuanwkacHBEvmHjZEbPYUKYyRjMe9ihhnKjZH2pghjZqMqNAGqo6w3MV3jf1L",
  "key11": "3dv57VNSWTMBfALPEW5PZ8sYaejfAXqm4AwuNceBdMfxa62Q9XdyW5L6yR4ng2SbnoV86DP3x99eEpyLAStc1atW",
  "key12": "5zEnmaKjcQEbDpURcakSRCQvGrkX5pZZxU7rcve99F6orCQheDsZMXCiEey2V4ovcCjS6JWzwqKyk8CsgGxhjvUZ",
  "key13": "4RPykzEpnJqXif7RarHiTsBNTqPFtnJMpwgmrsU4JBoiPHyYX85Az9HK53w4CXcG7HdVH8zQmXsaLCiMK8YCrTT7",
  "key14": "2GeZ1mCwXTF5CAgbusVbars6omxag8BLdnjeYvc5PYB6ZnJMr6fbH44dnQ4HwSu7mSLG4SjiwpqJngEcvRcH3oS2",
  "key15": "4oxyc7JViA3e3fwwukY5y2qZhGbmcNf7fytwA35bxLBaz6DxDDp1fXF2C2Edz32Fr862sLM5Bg6Ugr7LakPtbMKw",
  "key16": "2oD46y7uBVQG78YkLPsWMSAaudsMnaTyifZDikxq9MqFTssaQPJV6Y9xEKxz29BVw9MieFRRsU4NDnodahUDipvD",
  "key17": "5TJWwEnsrGHfBKHkoK5gBBqUSxCZ9Fy1a3FWXmKJMvsW9EgK8ETCW2hN3qHfnjMQUuDd21RyUYKqCMXwJNN8XToS",
  "key18": "5fuE8nFjmmE6iVuAxfWLXHgvUrzWz2TFpDe9mu44e2yetRaJ5pzWdyg3n8zSVUEFnwT96Fzb6gm7YrTa336wJ79R",
  "key19": "26f9YEEJcb7X59bKjGJHpzBjwnWZ4Xx9nYX7tGfjNpjdxYyXboMSG4ogrRoYkyKX1wuGGVFHJ11AyLPdL9Khm6Ni",
  "key20": "2GV2bKNBS52uXSAU4hkBJWsK3V9LprEECVhLgSmrvWJXpFYszTy8F5ctbAsSDaZdnTD7FvxwLFfc2gjjqmMHSnH7",
  "key21": "4NcXua3J7khd7PGmxQoEbq3LgpkBsZLvbHqHhj7Kbt4QRTq6QZiQPUt9GWzd8hEb6GyJejr1yYoDs2ZepSmacDwm",
  "key22": "4HTE1a9QY18UY3HXY9My1hpVPwY5JzNLsLWAyP5Bdg6RVbAZKdPVn7N1te9VXCVJp9rtM4TcD4vYNDr5Sx8ixJJj",
  "key23": "2uTWV7n7qCQuWA4Yyn8RQchMbQxhCvPvm8TMFmArqZigrgyJZVzkzCzEjG1ZgzoSUGs64SXX61yLnAnndCYYbgoa",
  "key24": "3cBFpM9qEKkcUk59xZPPgcsU16ZgybQzawSizspXfyRrBBeaECYciaBT8o6fzH4B7xMPEv9uHdh2yJjhxzrXiCVG",
  "key25": "5PALzprcxm84Y3PPepAS41mZASxBJ4t9j4h3KKccD4PeNy2K7icnHaa4Pzr5D5FbsRdVCvbEeayLjx8FMxhsXaZf",
  "key26": "g9xf5STV5NJUNGgwaCQGzsARgrQmKx37NkzP5V9UWcEvgRdHbANuKwMWvc9BtdLMJHEG8xZCJJSicvs1yTmWkYh",
  "key27": "4JPW2mVnRJiMoDpPPD8QvhHv7LUVn8JUmzb9obsiM2Accrf1GQN6DGzbswkUEaPthxdED5EF3WsXu8w4NWwBrg7y",
  "key28": "24j2b7NDWQzgFUa8RKgmQ82VJhfeEieZG2P3MExYFFUzVqSAynU8aRYodFeAYZeKC9dvBhBM4whqnFFLJbYQJqEE",
  "key29": "56syfo4SFaUnDTkUerwbJnhK3cQHm3DCQnfjSWgwMLcVqUbh113BgXtBzKAufcCKpe5uxNGTge3nHEzCXu9DuMJg",
  "key30": "2hqp6wVwFWC5k6cYtoJXCKixBUkDkv8qFqM4cfjLnkCQUFs7cPx2UzTj3JrVx7aoQ1W3xL1QCjzCcejbwuac7xFg",
  "key31": "2G1rgoFjusK4YHHbPfNGJJEddycz7eD5CXF5bmziHUMDCjfQH2pzX2NFRMdvHhj4yopwi3t3xoTL9eES9wUBKMfg",
  "key32": "54MowjS9dhhAumAjZ8ktq9sc1hLi7nSy6c8F1CuysPdjfFxBrcAgFhmmgjuWAwQeNtFeahYxcNVFJ5qyZpLkRMix",
  "key33": "FGxTvjy4efS5vivzbaEyvwWUsobdmeJjwUwWyrtqT86kGd3VkWczKrSEJfYyHNuQNHhYeWXSLV598J21TxBFQ37",
  "key34": "RceiK9gms5zfsjXwD7D6TYEeFY3gvB8svJducGXiTLryZqsExayJAHqguJXNnnMDXL9qZrXKJKZkWwWAG5Wq1ko",
  "key35": "4ZNcSaeghqongVfuUZ6HyFfY4UZ41UZqatyM2zsXmaaAz98oBBJ8sEwdnzj7DafipuMKyNgtMB1HmB9551D3tDFh",
  "key36": "577oiKg6BKWC64Xp1sKNeGFaoLtTKYXKzcqBWxgXMEkVzgoVzPdpibDBxy7geDVKC7KT83Zj5G7L1wkAtxxdtgiT",
  "key37": "5cf7DGnDCfXyRq1wjJHVPeoeQzzua4mDAUCRsMhdS8u39VvvuvnpAhLczpFDJTonfBToncHXxS8ybRNoaVoi7ift",
  "key38": "3ShpuDPW6pox2r3EojU3wE5JCVRZRfPPMg3AqGv4vgqkT2tQX8WgGpb1MifZ3zpHsmfG49u4hWP6SVKysrAMZFPh",
  "key39": "3DPXPG6snCY58CgAnA8JMaz8khZMESNCmrbeHS1eTZzfys9YWGRxzftkL7xKQsAwPxz4ezVEBEdBoVkQjAhdJ11y",
  "key40": "3PqqyhnMdis3MEJCZYScnW9omPoyBtAcaFLAJ3m2Qwh5joLS2qzFtt5hkqKCF5fnp5t9vifeh2Hz4dYAdUKQm4uw",
  "key41": "2WoG1vFwDpPYPouypXCGhcrtDsZHaz5KAwKy8Ju7z2KajaUAuR5EK5UvvNHB8Q2tKeWyCFxayvGuckQSe6mKkZ6o",
  "key42": "3S4g5k91td7dwWuoyRzxk4rtHPobYC2rAxwFgtMBw3YpH2JXfSjyvn8D9svA8rBYMqUGVsxP3Har764wYknMtuqF",
  "key43": "oTgxyw8vp9th5Axj46oc4yWHAqSsimZ6o7tm87YTsrpyhsr4j3kDjFrXMQ6FgrAjBkpKDos88zJMMeUBHVQcnMG",
  "key44": "66qHAxRf4b35Hq3XZQSAUBHt3Kz4X7axSg2XRgbzNh1eSb8EgmXiEE4iqsSQdn1wyh4aq7hXqQRrUFuP4ZcgV1v",
  "key45": "27eaDunBw8LQ5f3zEZKXs6zgqaYgQze6KuMdrQUAQLj7ENKukRbiBKbnxJs4iwdicPXrLXmt9cLatFAzVGYJWsbd",
  "key46": "5WeDNpAzWspgnRMnF4bJFLeqgZfJENUYpgE82adisyDgWphEPwD3FqWnkfbrpQP3sPzQ4jc9jXXUQFFwAspnQgqA",
  "key47": "2QdcN7o84fNb5QQQTyqeTyvqsagP7hbKzcidi1qLyeT8WpoeeiD8PAPfZwnz7W3zLo5Lok7uRhoydChuVBaxKbU7",
  "key48": "2Ja8Fe4Thoh7Ju5hHAtQz1HZnPsJRpGyRzdYEPFY2rgCw4U1SFbLuAEGD8A7rwVkAnV7hQy4wAGaibQ5a7YcQGpk"
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
