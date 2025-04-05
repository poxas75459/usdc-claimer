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
    "dEoemEobei5YnsYuF3SUmVvnnVSVmzahWvsKshCe4tnydiTgknzHupiPU2pRZkJoWjt11pBBcUxH9YotLnPnxQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JDmH9i8JsggrcwKVcCgBQyKJ2AMjgp6RmpEq5gkHYxx7uNTu5jRTojbnh2qEGfwuQ9GHZWPXteyxfQ1faiP2uR4",
  "key1": "B69xiURthGhvBmoXEksn9GHsvta4DvzbZteG4gbtoEpf1JQuKz6t7Ajmr4cNqiZn55pvhFakQi8b7jog7D69W5n",
  "key2": "WaVB1AJVtF2geYBN268JC8QHSS6bPRv4KcHsFJYmD8T5j4aXmmZFMNpcTAwNiYBTm8dyDwnuvPVzHQ8vtSHxeFi",
  "key3": "5tLrLCt2sXF8j1sroukX8BKY1mFs6Mo3ij9EmWQ3q6Tbf9BvG1n3BxGA6AAVcijTChK2jpXgoBfMhquLLn61iDfa",
  "key4": "v5Cv98eunu1YB8aJreKYGaPXwLEq1uc7v7ikUhLzeS7MeAXQCeY4v4oWryT1dNpRYEXpk2Wt7FpBqXD7C2SWB5X",
  "key5": "3Ycf7oBycu8VL6vC8FGPsvzBh8r7n3xf2jbREvSGrL9n5WDsggfET3KmHZpMKaU1og1G7pjwzxmL7WoK61i7K3gm",
  "key6": "3XvHHGTuXqeCkRkpKcCio194AvjemtX6mt6ftu3Gs5jV9hX1VjdEGABUNYkkzDHp7FkAzMB2ABdRtoN5bx5TLK82",
  "key7": "23vdVwiJrRWtjeTDLRKRcgeHYYsEdaxp9VSjSCPmPjxGacS71JtNW1AJTmb8sm9hiTFtaHRnbBnYdsniqiZfLwmY",
  "key8": "2GtBEwtCPkdhY78HWLV69JAJ8GN2wcUExBJP4EmV1A9kbgLiPJ1pEWNwfzr1oJRS41GVz8B67MxragUtrPBMZgnq",
  "key9": "2W1AxcE1X5LFjTBmqQ9schu41AURktcHLJibsYpqRRFrTizMvUsLTwbRtWRempvwq9uMovkXjkfWoSD1sva5jANP",
  "key10": "2zdm99ZfySuqp4bWetZASmQ6fmwSCgK1Abc8VWsdFB5Jc6PEeziGBm2Zz5yvVzxwfvnXVLN5AWDnNgaj9tpKjbtf",
  "key11": "5QHPMZPu9EdYGthAvzLchRMgSsYNr2RUeAjZv4nDosdoMu3VQhj65ozxxBN6FcV8oJFSKuXPAaYaf14F9GTMrhLP",
  "key12": "5UW6eibzdrxJMmBoG78kbDSffLUUhFoZvmd9jpMNSo223ynogismUEYbo2iFry37Qgo9f74jEw5TBZfx3w1VqVLt",
  "key13": "3VXWBdMFVm2hxGFcoSrfb3sjSEasywpoV4taYSjSmRto4TbEWaX55kKyATYUYd72jeTuL1BvpRzpAsHBfD8942Xp",
  "key14": "4LSjgbWRaArSkZSc7SdLhYQAW6KQpAyEkWmisvga1Du7zPrhK1atpcYWK9LPZLRo9hjaMWDDGLYG6JamcqgwdZLK",
  "key15": "UUE1UTSi5dpFCfjQkCt3RyhmBf7ArUQ73VTj6grsBvd686rpsmHqrNnywEsDLWDt5Zt6SeKCvVRdmhZVoTzpzGD",
  "key16": "4R9bdcpEJnvq3SAvhcKgqkV3ReHsSkKiJy9D9KHuMJb1PxV4S8wFxWbi3UpFT48oCpsJtJnyGu525i5KW2MrXeBc",
  "key17": "5jnbrUAUF8m3WCUsi5mpM6PtgxWXhXmng1vey7BWifYHBGvvTgzdysa5Gkt1PG1ukrxkte5FhXFWK3pqUtvmyxPg",
  "key18": "2ggww4DPKa46AA6N6Hy9VTnCx7ttqQY2f3ShYqTd85h9v7AQoA8ii1ZtJzXVu9Tb9pTjQAAZYzZkXAVXJMf8sYEF",
  "key19": "mXcR36aQQZDP5TXULyVKCEqhT8AEWrvNnr58aVqAKiBvF1n8EBiUkyZ5iWGymYQREbYT5szzXDsbUWntfAhbRYp",
  "key20": "2gBkA77qzNzCayhcc8SF4yrXsFM4s7vz5iKPuR8VHHXVJSKpAbJy6LPertk21a91nGtDkqW9h8uyNkDp9Qubp2rq",
  "key21": "4D9FR6aJktbxgKZM46z2WMqEhxocFre8a2iEhjGssAebDtmxSCkEpDULupLTSsFPKcFzsGwVsZgwFzLj6gSzkj4r",
  "key22": "2JM5FcuwPhZB5ocAQajasEVS8Fgva6DbF4osQZAQqj6Ru4BSCwYRFRg6P4aQDYc5AfohrBqJUyzt7NjZQvWU9qSw",
  "key23": "5hHcAyKGhZRE63whHeoJGhNcTvj8RC1KNxyNcN9wbQ2BAZ58up6GnkYK6ed6APusBSTaa8Z16gRZo5NgMmQR7wty",
  "key24": "2DPYeLEQUHD7SAk16ojsWuLKEJNRf863DTZNRp9P4idNEVimPfzJrb2EHDD37PTvxLWHD2RCj6ESfMDJEjG3MTNF",
  "key25": "MgBrEQziVSLmbLj1pSRH4Q3Fu6apSkJ5hLBU8UwMQ8tgKUFX6qWPVyFBxRnuhH7hvoFqfuhhMT5YzHwHSErysJy",
  "key26": "3ye6gQD9sqriLzNDbT4QqCuaTeTYfXiLQ8DYfd23abE1czuajis4dJbMv7YC6TZkhrBxWbma7qvTMdFiVgaBHRq9",
  "key27": "2He9FgbHdBFd112vEq9WkE4pYfshVkbRxjZGjK28vcyrhd9KE96VSd1AQZPad4ziqA7vjGmb43NYD9SESXYFPfiq",
  "key28": "fhBzr1dWqUY5LSR563c4BRq5RRrgbaeBimvsBcUrRjMUxmFdV1anUMxHiFQ9hP3mgHAb5fpgWFiVct75qgEuZRV",
  "key29": "4cLcfhsDCfQEkwxfjyHk1AWDSTf21tMuG6zEmLSRUXfKRsQAMuJN5bxvZwfQ2GeeJ5a9ahMtaU6tviyrYQkto4p4",
  "key30": "5GpLALnhoRhgUVz9AbjnUuEKXXbC6SUrSg2L3yYoB1WnPqxWhYmaWT3a5gvniSyDi7s2RdRxhU6yuiy34ww4dyA6",
  "key31": "2tuw9JbsPsNHSbnz8yoGFR4ET4fBxRosYMqGuwP9ncoKC5dMMsS75GWe2Y3rMpNMbRwpVbCviauU9ZhorDwe52g2",
  "key32": "3WVCMnVjzsLH6VePQp58koHKL7jkdwFXQi19pNxi3JdzDkhhXrD9vrWuZJNsLYEnvkcWiTgZ1nwqmw9otrMPahGz",
  "key33": "reihruQysMwrtLdAa7tkYdzpAS2VLzCKsbawq4DQJpCAneBCSr5Y1D2XrnRznYZvzzTwqdebergoUgGqZnELWZi",
  "key34": "46oJ9krkE5Asfb9mSWihgizoLzcSTarnGV4F7KJUGHKPmuvdYK8iYmesLNgrwiqKafNrUmkju2t4GFdv3W26J7zt",
  "key35": "2QUjYe5AwZ1nVYS6weJyScCZPVWUtBhz1M1B1PoFaMLm6SFHbXPtQxraPLm6KUAaET4QBsAy5trhhEFRaymtpMCf",
  "key36": "wwRM5asYmw2jkdhad6Ln9YCNGreq9kdmaeRytqv1qUCG5p94ocGsbvYdZR5rQfsqiwyFqBnU8kJqcyMjVME6iri",
  "key37": "6VLh6aixyh2GzpYC3qy16HBaNSsEweeHnqrpsLsK5JApMzLxBnWZcgwk9MWgUtj5F4xkb5vSTedmjh935z4rRhx",
  "key38": "3GHWVgemS4UJwp1K1geWoQ293Gi8qjSE6zVixrfEYeGR4A4pSrdb9U74WBw97T5PWNyot4qvuwsLC1dUM2YfmqAU",
  "key39": "2uB11fLjUzC8skKw5oeknoBDLFAfoKdwAvt8gVkQqugFe4QFgMaEViHWzEqVEPsWpncVXJveiMDh5QQNZCRVx1hk",
  "key40": "2nKoyHAWLCR9VXKp22FrBssvHZTb9WKJsqXVKv2Ajn7iHFCVz699D4CSSC3Za5ziAj6KMWrmxNn21JMDLJqg9eDZ",
  "key41": "2McpQx1ZzXRZkiv1fuDYPKtj795i9cH99zGjnSP2ze9rb672kRV4Ep8LSXFv7r1oS4hLyLqgxpmVcAoXdSwtqAiW",
  "key42": "4hTh4aHeXdg2cVkbREBD2WD4zDbQnyd9jLPRjP7778tm5hA2Sm7TCWbPpjFiUmqXvdsBzGUKv5RF5Q5FyK4ahZtZ",
  "key43": "3jZYjFUt1nBG57tTQHg1pFufaM6gzvrxDJKWnZNWyE42W21rdH9MQLLSWxaNpAAJc1JfYn36DGqFaYDi6srGFCXP",
  "key44": "2qXy2Se7ALywQH6eUhxuh2Kc96ZwzsPas9nkA95TQRgZXzgF5tR459nXiJxoq5Joq1iyh8sZxq5fna9JWBjMcGYB"
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
