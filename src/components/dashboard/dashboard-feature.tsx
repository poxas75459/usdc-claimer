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
    "5RHNK7KdPMt6KvpdyCVaSAjvEqefZpFzh4yHVagsisspGddHq6sPWAxowHNnNBgUZk2CwZoSFMxWycWLbgngEVvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SMVHiGzPwnjYGD2vuFRF7Drs7Ahih42QZUnA14jAJfpweFFCPNySFG31nxXUEp87cAHes5tWHz4MTtVDSFiQGr2",
  "key1": "3LBMNLvBTW2kKHZ2TSDKajVJdLniuCTA72eeorWpTfPAm7eNLTZ62gXrHmLa5HSvtrXYnj3UVGWbkKr96u13BH9Y",
  "key2": "3QashFUQU7PkuJfS8syQAUecboctkz82FwAvWYSTLWokD5Bjo4UpFibzfbX6oNHv1fXCpzKbgSGYnKHQWtvEfSjW",
  "key3": "4jABukVa5uXBae1GoBy53FHTsnqRJj5M16Rxac1PLCL3mwtxV3ndxSgx3Bir5mBy2F8WbBXhUgGYw9yYd9ut9QF",
  "key4": "3ZgjcHDbFy4R9p7KVa7yXtqNEUDbnMP2eyupUT28bJ6UYVuXCRqmt2cQ4HTzVRATnyB45mZgER9PSpHVfxvAzioK",
  "key5": "4urTz4HRcukvfZMopJ1CXmqy9WWakcCWN7v2ntCgBFccWrGYTvczkwGAEDk8h3FZa6yBTpSAxT9puqPFMwYDXUxi",
  "key6": "2ShP2SXoWkzQL5tiTPnFTMD1Da8tNmk6q4wWMDjgGtLkduneiWPYAT3xJ9ui7ujoh9RcGpAKRhmkhhzuYiYyhvRF",
  "key7": "5d1WPUt2Z4qqSGqr3FehZKSUWw93bxzgotz17BGZke8YEEwDYeoQeDTD4ChN8VECnmfDxwjB5ZJZ3HwohpSiy4su",
  "key8": "38buRpmULHBsS6DbLdHNViupEECLN5AA1sBmo3ra4SgqTCqdodzpX6P1cj7D6SSmTY3G1Qe1jgcvz14oGwY28QRB",
  "key9": "4yfamMf7meaK3sx3yHAPqLSZVJM5tJBJk6qBE4kEfCm43TbQW5yuWqjz6vP18z6sCHMkkamCej7kBRNg4V8JEKUK",
  "key10": "3pvAZgvFAb1EbTNvfpnbFsPjMg2QMEVHZ9PbmYuS8bXST5mSivzTCPQ5Ece1jzwCYiou5NobxhFZj8bnBwXkGYjD",
  "key11": "4amyx3ubFqLER5T9i653fLMHSHHzkjEJ4qdLJ28zHijU2Nf26ASyoPCiHH3WTNsStGLYnGWvs1i7ufqx3dNxAZwf",
  "key12": "59Bbh3rwtEVV6v2XaVfUjzcnuciA9osou4YmktDNVhjDDKnZUERhpdkbBuBDLgxYGX3Ab4tJ5Q8D44vnz2kF4ffi",
  "key13": "SLX1bHJYsaCa3xHU8Ki3GWd5fp6ZGp9sn73uqBHbpVVq3AuZXBtc1Zz5VLwtnw7N9GuVZLA6htmgA4fHnV4KfrE",
  "key14": "5RXUp9aqUHGE79z1ya9Jz8v6vwyzWwgrr5aaCjaGf5ZT5ijDDvsLMUtnjcs9KG4K7pjjrScCjSVFyGn2yaXYCfe8",
  "key15": "66j3Tk3c6S2UsDzjQBipbT3dbVVeWwDELXm8q4sDp7V3RPXgdRoPzxNTrHpbByRAcKn9UN9rGvfe5TbLYrdwpvGh",
  "key16": "4CiLLBr5phb4Tc4CfFGW2HpiMF4NehGJMr443eU6DE8MZNMH8X3yTMeQjYEtEecG6bWnjYwEtncKt5byggcu2tpH",
  "key17": "4u9NMQ6JbnfWG8iWwmEiGG2gTvoQm9MdxAazFJ8cyhWUGgxrvSWyjNTHfiT9aKDmgD9aPfVyYJe4R2WzdshUPYXK",
  "key18": "2FyVnq66smfkG2bDYgbmDzX6YKiUjzut2EjthK7fZwVXDkEjbH227xcKfZ6j39ELmq6fvvNQeYoNQojMq8cRfqMh",
  "key19": "3FAuvXVZV6RcBF5eFxN2X3zm1bF3RJVxrqCNEfYFAiBJBWsf7V92Sz9C7aP1b2APd8j1qsVUJk6nrAecGN7UWn5i",
  "key20": "2zZDLqeYcb6BUZLEcvsrroKjm4VFeoHLmvAvjS5KiwrgRDtyWPH1yBUaWH5EGTa75itPn6G1KmzrPHzEPkeDYhfs",
  "key21": "2EpW3sNutj7zTh57T1i8m14qn4WXR87vdciqjSCxfVqjkzACaMujGzozjdti16pEupMoBcUWsto7aRYqHuwZTdHK",
  "key22": "3Lea89A5ZZEmeTiQa9XuFGWLwV8SyAeTTt4WjKhMnTBNN38icVoNe7MGrdCHud4DsgSPVXb7M8iY2QWUdN2MwbJ9",
  "key23": "2RHqmm6S54N6iFEXYvejjVtJQK1h43RniiTXexakg3gtq5gRpMQCEDWrF2G7Vq7DZeP17XeMSdsAQm45remsNsHR",
  "key24": "5ZSAQiBTUp6jp8Ui9CyqUsDwekL1bUgByR2RMrE8JVqoqusstrVB7aVTBgW6XQYrJAcQNDsZP1oBEwuWDRw1fRT4",
  "key25": "3XsMFH3eoDp9oiLMXQVYH9rsmqnKfxcH8M38vCTE7kpzfzwafL318rCtgU6kYsqtpYTgKGAxqJNjx57JhgupY4YB",
  "key26": "ndkHBFjXTbJLvmT3tpDMLYUUw7SPMDPAau7cKJGryrXHxE38djzCan1EE84RFqftQeeBHao3ArfjhD2CGk8T6pc",
  "key27": "59Z4K8NL9cnq69XtduCBZoeT4krhYPfjGrAR7NbmF5w4V3AvKzQHZ94TPFdsr7tt76VgKs1VACX5tMxo8nHXjge7",
  "key28": "4bBcnMbhfhF7dsH6Z8jsqHnBWgxLt549sdEvEoxSUtqVKN7GbnSiEEbTzYLNpaiyusC7FkoBfusSPhRquxZBDVvu",
  "key29": "2MYa6o4DzthsnqDzRGugMuyy5KcxhpHmA25pX8thswefTf6wiQgnEMrqxJ8STCVKruNzmdge4UZMVWQgw43wep53",
  "key30": "3hQJiNeKW28K9VMepU2HzgsT8wt6BB92R3uK8GXyE5gHwNbnZ8RZaEmeLhCW9mQd4EuJTVTaEpmceLKMZ5WxMW3Z",
  "key31": "5EEp17xsJpUwBKWH9k8J5dPKhteQScYgd9tbroT3roRLaTYeGfS8b7tp2vZqpC4GmM8NneGD6i7xeRfKDUftWHem",
  "key32": "3uicsZYp7q1uDs621rwT8a9fzaqzKYnCzA8YjjxujjxHhmJnfzn9qqSKYVPEB7f9279umx9KdDqD7difXFpmYEGt",
  "key33": "3FZTfz7WTDCVj2cGBGpeYFh2spaYXKtdL6kRrniHCvACHVAPT5U4RJk2BqFB3xQwcESj3cyX28DFRwUWBgqMaeva",
  "key34": "21A94Pki88YXCFCZegvkqwAfWF73yFGztedyep9VRSs6FcJre94iZQS1kqe222ZKsw48rdAJSDsFKzqURWkuwQoF",
  "key35": "3WSn95U2kQRah2vcYgS7WPJJPT1Vb5rAg1CY6SK7KLnd67nuiQdYoxCZ6yawNPr9dwjgZneL2DzDSkfoLYDADdLm",
  "key36": "3Cp5rfwwhEvLqXD75deZgptUcoDVQqWE2MXRcv5e5i5iTBpMWZTdFGx1NEoKmsXzHy8CZx7z63LUCWCZycRgZgPv",
  "key37": "5XjrsySrQj8XWr4vMSHEgRBAW5nWc73FNQLSKENR9gvMRxMamba4qhRyvfrhTUfnFgLWyTQdpfPfaN4EEvGCAxAi",
  "key38": "45JqZvXZh6bM4cKgn83sAfHa9AnXWboYUabVD98YhWcyqCjeUYCt2nGb9jZoR15TbuB9QkR8Ch5Dzh5hgdyuowKs",
  "key39": "a3ccED3i5UDsi55kCkLiSiH1NLkL6uwczo9cqLV5yweXrZ5y5VFYXYoTgDSw1EqM4vEhcPnZZLN6hc1v4GXT3NB",
  "key40": "2STkNLySpC1K6MyLqLWq3AuLJjHe1rTrZ1F2koTy3iFQx6quK91tsw5hpRPNxrE2qhowNRHbeyhrKKGJGfCn1z6y",
  "key41": "5rpqkmvbPmaYgoW64EZ92aoqXDjpRuZqMomJ2oU3xGSMmhTPCA2eFJBwqGDGCYYcrf5C9Ra6d5eYfNr76BsxjUpN",
  "key42": "4vqdoZcA1gkaVrN1Capo5X6KjcXNyDng2YEFZJWZGMdtj7Gw3KLtcjKgTBmuSQyEk83K35xdMWTybFgfsZsM7bKG"
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
