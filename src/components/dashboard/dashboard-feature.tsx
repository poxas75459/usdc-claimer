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
    "2bSVoZLkdn78WrtBKFFdY4ZgaDsATdQHEbboptxXZgFdfYt6kzCu2FEexvCvDUV6G82jGmYyirjne1xQiE1MEj2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cXWdnPjQmrqMfQ8xvL3QhZ9h3bthBBU13Kq48Q6MWLntVtFyPJ8gETq9pQu3ULUbLcEEN2APzryUdjo7yxxoiug",
  "key1": "2fQ8HUrBQiogtWiczunhCCoERFWNzbuVYK4M4cTgHZ11cqxqFP4mrq9Z2KcrCKmJbFhwp2aHcR2iwTzXVRr9yJhA",
  "key2": "2vuDRzRy2xFmHX95XiPh68ttXouxMGHNWTMprmf5uwiqD6D4maGFuiCEBfBcf2qgirQtkFMpfZP8vxV8GLEj3x3d",
  "key3": "29iCAWwTdDLCzvrrkJz9LkTWQLfwu2Yq5r8WkC4yMDwN2WoYh9HPZohR6MtmTFY83HnRVLHDvit2Z7DVo94g4jEJ",
  "key4": "2VeHvPKvGwtr59HQWRFYUthyaTMBGWpSEBhiUkkjDibLGM19cz73enhpUMhQxY2v4QaZc4K1MQaGNieSvJ79SGvc",
  "key5": "5QiRT3jMisz43GYpgA4d5AF9zdk7RtfaFhVtTngznVJad5eFYvXD2ZLqck8QKk8KWfxAzFuMK7Ev1TLb2vwdwUdN",
  "key6": "QmLLcem1b6quCerphP2vCDXKwrNgWsZvDvezRZqnHdFUyUWmDSN6ii6yjGAKWC7B2mrWYzM3CgoNt1aPuhQ9gmN",
  "key7": "4nai8XyjxWEFvEZ4CtaCJaFJMtAejRcHNd9LKHbRaHWrEVj9oByniWdgSo4iYUBbXCw2zGqTw15xUxUHTUqa59kK",
  "key8": "62UrGiKMRRsPFDmT9wbojaKqrSYDUguj1hdPRsPNfbrNviwFNmFMa73hSfubG1FGb1tvAdPoYM9hGX9ahAQzSyWG",
  "key9": "5XjoGJ1pNZdKJ4mWZxsxZNd4t5p1yS9Vk1q82eEt85pQ8iHpiLBmuomyZKwbDYhY8HvdiY71wDfSAt4714yVYePM",
  "key10": "2ymqw1c6UdqpFtmuE4cspXhAqqAKn8ossxrEC4wYopAwsTNxAK84iHsTaD8iF5j7eGFLCkWnf8Y8tFA8N4S4uGLS",
  "key11": "2AhtaWmxaGbgQez5psbTrF6is4ZMKkavuWsDmuZZnDsNtfRnnoA4CGe3mJ85ykKgJfyLBRDsJRprrC6MKZiyjYSA",
  "key12": "3zPoHF6UD1PerGeyamvJyQ6x58KJxk91p6GmLPXbzcknxrAaS8KyrGBYdiRfGKg5Ku7WyGzAJ9fDup1cQd1WSmfM",
  "key13": "5AeveTJTjpX1iYwSteANFrfJJGhuHaxMzCFajL4BU93G5CyS5Rnuv2Q1QMqQuU6YdH6svpecRdBhgbSrUREGfsXr",
  "key14": "5y4ajXA4192pHRwEcFrWbkNeUb2poeRfU4Et5xF413nTTm6rePhTCd7ztA6q2iiNWEcPnXQMKExRmxCrjknFk8oz",
  "key15": "5hxvRhzGAeuoEAgBRsm1PTzpyyNZguDWNQtLgGhQwjTWnjoWaXJ7sgpHMTUYEYEh8KhA965qRA6gedpuS7y8T4ee",
  "key16": "4ZR1zpJFTiRGy6i8XbZwbheCHQnBQRKTmDRSVpmspVzLBxJkRMBeSBtybavmYkC57aK9J6S2PahFcL2QSDrnpo3m",
  "key17": "36n423uXV38RWwCnRSirRkfMwKks4cuEMrTDRv8ZnPhmDBj4Tn38f5DahsAwLBs5uYBBibH4Lg1FLVQ5vD6sCUST",
  "key18": "4KHvRjTN8cwXGYzkM5p2GWXpW6vMSFqbZMnWVZqj3FiufbrjrZbE8mes1L1yKHbv1q8aQwNXK8GZWXayVvp9fSzJ",
  "key19": "3pBZTuy4CxKVzj45HzyL2PbutAgyXDpAhJ37Z6Ca17BS3fw5N4B3kvU7yARgwz9JESxPA3NJuLPrjkYUkEtzXH1v",
  "key20": "5Q7phvhu6TxDnm4RFZqHoBuRJ1mWkDRL4xDGUwHbG5zLtwbsM3mGLVyhLosH254oiTvmsecdZ17fiv7evPeJMats",
  "key21": "4DJidsGC7aqk59M4nBYHbV1aURuucdxtjZQ1pPZVMivBHUddGJxNVS5vqwM8U2dFavSgJBc44txgzNnQLe3YR87Y",
  "key22": "3yWL5rvuhQVrxwHuApMW1h3qEqTuvsXXD3GUwuQBhbghgV9QfBZS6c2sVWPiGq515DMnC7HAPJuCXY4V4MKRf9v7",
  "key23": "vyEWNg1Trv3B8qxp3sr5EVsWKyhE4fevVVvXKVJWSRi1TTvSSzWPBoR36aBsE27ZVNrQui2mmTBs5QQdFS9h8fC",
  "key24": "5qGhb7GhWhz8xzVrVxyjjGwg7bPdsLLPj5C5e6VpfVKLN8HE7nssnsug22iwMWYFPsjFW51v1UJQbmGso4PmWVWt",
  "key25": "3thAPekqKjHKU4hXEYCL7dMKoQokdjuioB2mc7ijUwxmNe4XRfAdiCuUsZwNLwQGnao9X5ujgcSkJ2YEwukSRK3D",
  "key26": "5c3r3eifiSX9p5g4xxfuNDaYAj3fiFpiDj6tk8bSpPP2WBgbgwSM9cAt1AfN9znru3Y5Qt34ezo7EuvXP9FHFosw",
  "key27": "5V9PJE3b2tzsnfafew8UhgDoPw1G8SA9gYUr1oANQvs37btUBaUP3brQKA38nSFd3EgGPwp7eq9YU9PA6psirkdS",
  "key28": "qvTBW9rmtypimhGQ4knppAAi1A4P8hurdTNZWcua1Juubek1JEEcTJoremsutvFfKrQRfpA245JgpQTtDo11xUd",
  "key29": "hBfx5mSAtbMEN4YkHpv3yZzvCotf2kq157T8SHEqfqbFVTmT68FTykThfrrnTB6ye2TyHJZqRinhk22E5uNj1Dr",
  "key30": "5Y1bJcG2SsEYNHLfC1VuLoWgYvJo6gxpbi2WHAc1tt1Z5dwuSkyoKbEayxi3s7cQFxzBEtgwJEKbECbb2T2FnZtS",
  "key31": "5ao4SxnMXHXgUf1C66mnjJV2DUE2yP9kcgLn5MQ3Zs6gc5gHkC1qkzZWkmp8ZsvRuYNARx1iTqkDNakUQfhXcN2K",
  "key32": "ua3LEr9XQzF3RaGyn1SYzS9gGh94qZtodDPbE1hdau3Ugz6UYqKrRCvfdWhnu4KZcErCqbeefJNkRhN6Rfar9Lh",
  "key33": "38KSZ5Aafz886KqewfM1W8bJpESv5PXjAfLHPf5ix5kFMrY8xzNP679ZtTXHsaVR4dGPSiyKL9Xgeng6jrwLHr3N",
  "key34": "4QndtaSDcMiojh7xpUrVMaM4W6zmTaiFeHQp3qyWezgsjbb9SsiXCasRG3R1iumf3WFDWi7fFTFeBMsCSc2hhzN8",
  "key35": "5BUWzdx3oSRDjhRQCCNQdbWGVRpPVaRW3wAvpcdYxZX9i23J7ib4oh19So52V4d4UECUnFWhcAWvdS6pwoGtCdTs",
  "key36": "3RYTSRX1axqD8VUzdcfZ5NYzvpeXZfiv9NX4mgws6E4qs4fJpRnkNKTE99e6qXNkMaSdLw7PF7N32XcjNNCMPwZo",
  "key37": "5bUWxrebEfsiWR93bs9ehrgXNsDQ7L6ALakB8km9SYdhVBQS2DHfiMQfAPJYHzXAGk9nC9zmkgrfACptaMvMguDB",
  "key38": "2ewxvAvkiWK3hSXe8q5gRncx53c1TLpRvdPV9zuyvriKd7EqHRahgtQy1R7c8fpqip7kosvXSw8dSJLskyPSvP2Z",
  "key39": "nC1gWPbqjfL6po2M6Adj5towRZowA2r857cpdCLJWJcFYafTgXv7RmtycFBNxyoE7hSEobqKR5LsYtWWye9QKwC",
  "key40": "5k6Hoo72C3CsTnhjBjNReAJagDuDmFLLPxcqFaMESvLmQHMahKyDT6Ff8JNPtXcb3iN6GhUJJvDiYLTC1vXu6rQh",
  "key41": "5QxvRex8282CDhsSEQxAUnfKjVr2a14yFxukduCqEf53cf2P3XuDRVGoMgMpNHqikwSrspGbrPyEtLtrM1gy6o2W",
  "key42": "3uJ2vXiErhzEK5BMFauCiXZCiaqc2ni91Pv9MXEZK4MJm6DN5F6eqwpVxrKQAjnvoDwXzA1YUFtsDxyB1F6jbcjd"
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
