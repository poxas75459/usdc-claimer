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
    "BUx3EeMVnu872RxkS9zzkdnq1KwJsG1neywYjfukCN2UNcxeJkLSpoyFaQpmgPCjXD23srsrTLf3gAhmqUgNBCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m7D9gQgVmxmtYjijGDAVzv7AkCy6T2tV5vQHv6Kt8XxY8icJGAH9kEonm8g1Xd1y1rHw3n5Me3NBsdWHmKAPho4",
  "key1": "5jjP2dz4kYFhghJxj4v3cVL1GZVK6qmeSrYaxTG3KXMzkc1HLCZXvXwWW3amnH14D9riYZEF7FNVLf916gX7ch5q",
  "key2": "2XfVTsTNcPKVFgmDzQy768BMyYPD8JcvPYWEq1wHa7RLgchpt9sqQNs55YrM1mzpwhnCcWiiZFdznLrNv4T3pGZ8",
  "key3": "4mTLp5BAjTcyvv1PH7TX4KAdPtCwMitXdpf5vAihr5jwi3nDkLFEVsy1uu5x8ecDFpKetBcwXiWP8egxQBBafom4",
  "key4": "41DgFrnhNHAmEieqQ1Rx7cnb9K7ka1yRfTosYzRp41f9hMMn629dmSVjFVZcsJ6ECRBmZYkR58pbXa9K1CdjLYAS",
  "key5": "4yaD3dfmFKx91tA2XU9WuFfqSyAapVXSA7V3N7PHCdKRNH4vEPKTBCMnCV47aLtzL7uKmRVqLkNYCfLs5kWbh6yj",
  "key6": "3B4VXJgNmc8Ztnu6k8Y4C43sQFSEiPDkTDYsEQPRLbewXMdA4VuLLabN9iek5XnCLYhcSWsGSZMPbQSTB2xt2S9g",
  "key7": "5LuB9yq2R8EPDzThk37WK3Xdzpag13SLqx2DNeggFh2oyW4CEorq6otac97BF5kzgaPbFxbzfe8RdY9nyY7NkUTg",
  "key8": "2kDAuNpY9BdpwLFcTiJJNR6hYRK8Nie59dCUwQxLzEqQAivKqESp1AqV6NEigQ5AP5HDdJ2rhozo7ZK9qeRFMzqQ",
  "key9": "c4CzRvALwr9CU4eJKMSJTsfStwVKemmedKRprwLBbycY3Pbzu7Hoo8bcCNzd9Kiunzcpx3Umnu5z3wSafKSwsFZ",
  "key10": "49aYpZyMs9cSXWDb5eR1s7pv5CARfLvLQdGE9j9LYgLvdJT6rTWNHu2qVRgaEy5gZLHTgcUUkQj19zzDXgzhvsqL",
  "key11": "2yZWPmTgz4KGWhxmuEyKMkpTbiEJxyYDn76eQmx67fW3KqaiJ3dEfFBsKEcwdb7nDXaF4SbQCBWHSV3mM8r4XPkq",
  "key12": "328A1QrKFUt8Ty3FVMHXdRY2y5sdozBhvHX5aGBDCf8zqVRquCDz8Z5zy33Lt9375B7g2vYatcqZ4EYJ6ysyRVCo",
  "key13": "4DisoAh4ZZto1VVCZDgPMnTNGBoZQiPqwJaopTiaFa2ZuKemg6wKXLU3oApBX6Gh5yGLHM8gFw8DaMMpjBDDTxJC",
  "key14": "RpRgeH9xHhe1RZ7bHbfdpDKNhPhg3yQLVgTaVYqt4ubKqu5MrDZwoShgWVMpyjFaA1ZVCGziDcVbKLET5gcPPEb",
  "key15": "4wYYKkYJKYUGMhkpbcHipLJW7iHck5JEyGjzwMz2ktMQz8xvyaSDVAZUZ1Ezar9xDVGgFbX1mhV3quStNqAq72Hz",
  "key16": "2ABEYZyrKvzEQvRCBFZyvjm8cWKJdzXP9ec9h9ZonDHSdhitnqEfXGTuYPUSh94v1em25e6xbw11pWPX3ZJP35ow",
  "key17": "3crdkZbmMfthB1dzmvfcmp7Xvd87Vf8i5cSUvAg5TXCSYFPttZTyQ8gQYKD1hGNHZLQDXSUMbZ449K2YtpBVXJtb",
  "key18": "47GGKjgGu7h7vcAdhTscweNBE3HrWAqaP9sPrE2v13CXiLdt9BLeRskxXXEEWj5qfhoi63J8FhUjtJ63EZPndTSs",
  "key19": "2RMHPWF14dAeBFrFSCEzAepopikiM63vJ69UfB8XEW45yv2xJqGviscqktXx3S986m7YTf9bHNTkthCUEYZBehGk",
  "key20": "4gvzEhAXMvQf7HR4ndKMrgUvsTUWLvd9vkz2eWKu6Tm5oy31jGRk4CF14CS15Xi1SXCAgXbA6QGuGSutfEeenLWA",
  "key21": "x6g2MiqABdoXYPgq6CKnA5EPDyCjoYHNmkp8DP12154KSVNjDLinDpKg6Bu1chi2exV522icurZJ3FbzPgmFEPS",
  "key22": "4yyvBmqL5PtqB1J4zmqxkKDHEj5mEpmJ5vWXrVZDGPwVDpbvEeri8xoFAs2GXHZpn4ZM5xoSrcu55QP5YwMYpmEa",
  "key23": "5LYVxzA98Q76pZxLVLA56ApMLrdNBaAJpGvjw9aX2Z6dX5v5C4Qz62XeVKDiXT1mDzUuahaUKUHULnRmYBkG9G12",
  "key24": "bbkRoGt8UFZhjP8d5KN19t6Den9XHmiLXinohLiWhrk9Qj9Sit4H3SJrtWudtkMxfXgBUdoiEVxqkKSj8TwMfdb",
  "key25": "4S6NP71zXTTUkgg1ov1LoRmjetXr1jXzwbsD51Bzu7fopT7hjaDFH4ZLMab3QGpx5HGrpR4ZkgSHkFxMK7j2Z5X5",
  "key26": "4VT3zxsJF9fh49mqeoW5oQtMNgikTqAq6SBs53CG28uhnbRK7wVNaquukZfeGEYGf9wm48mD6z159R9WphQV5snV",
  "key27": "SKYSX6nA5oiFPZf7mk1A2ez5dAWdbeDWrmCvBK5JWZKmbugKhhBXnW44cHv3E3tbzMuByjnJ5mKz8Th5CGv97ix",
  "key28": "5oiDeYFLtPc6VxyoG6hZrri7qnJTLrNAxysbNmev9Z7JA1vQpsJaEXyMvHdZdPcjPrq6wwpft6aYTu4UApMLbHrB",
  "key29": "3TLHUmCYeXZYyShuKofojHoB11rwWUDwjUWPvYbtYWi7KrQYWzu6xDwtWHKymfKsEsrtx6ojiprCLLiHyEjaz6jG",
  "key30": "5d5psUoYoJgqn6zrAKew1Q3FQmozs5azoTqECYPXUru3PDCTJ6km86aAXrfgYUdUSneAk94BYS3hyRfV17Q5R7fJ",
  "key31": "EvsciW7RGt78tFhhhZEo511ncxiYWvscWBy7Ktg8UKjX5VqNwsr36PmQusNEtj8fk3nVgkKF5y4ick3mbjbUqWs",
  "key32": "3ksZyMoeetPKEszpdQxC64ZtfBrwCScfoWEi56MeApGM21RJ7usiSi5qBG1YYJt29MJXuEzUafZxSFHL7q5CzK38",
  "key33": "p6yGx4DoxDKNvQH5ayPnUggheUHfzBAyX3ra7urTa3VAq4qfw4enT2efC7R8cp6mnrUC44jR6VhRWcicKCaLCqN",
  "key34": "m9c8TFBtbbKBhXUtgQD65ke2PAZps8JJiR6139Mt5wEPqe2SqpFk4kS2MXUeyujRq6JE9ReigzPFMF88rhscCRA"
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
