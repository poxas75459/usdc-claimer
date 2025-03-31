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
    "4uBGzq14D4Z5sRmbGafTTR2uLexyhkFzH9kVyVPCf7DUz2HWJPdSoGYNyNcGxfx9ZfFgtGeW7FNpMbMnU8WkbL61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cDVLhpcSsEw3X6mtBAc6V7bhJcf1aB7Px7Wa5jhv9ppQFKX4xPtzWvpVxc3SN2r7bzRFEjnErk9yEjSGbn5HsQa",
  "key1": "2qasUBgyH8JdNNYjStD3B388FDVcGo2XRhXxiSnLei98gvvTdo2SG8ZodvMNvjSt2QikGrDwDABLCZ5SgCxET9JH",
  "key2": "296mFjPWyA9NVJJzSPW66NRDXd8vEXLE3CArzopj9wmeCC8rfea35jb3CmbJhWVgaVFRav4g9GZKhgB9EoKjc9n1",
  "key3": "5fWseJzy64B6nSW6FVB8yhQrKt1pzATUmCfmhKF2kE6pW4v73nmdgxyFt66UVgEacZAXZth5KYv6zUn5RB64dxaY",
  "key4": "2uR5yqxhazCMyZ3FsZM6VCnnYHaBXFY923Fi2mMdq5fpRMEmVZTLCSpx7RtnD63ppcjsJUAZocHLhbGhjX653qqs",
  "key5": "5G15xSi1f3kwMnDhfs8LPfzrDvEE1PgTx8Gcop5xMpeb4r6pcmiPhb81R2hyxXXAfpY2TtuEuCKxSwNMU6RLVEo1",
  "key6": "5R62GEhJcRkxSkEKNtzoo2w5vBPK8UnTjgL6XPBqw6kPFuxdFDcDGhhQika4c6hncq1X7RSxuChvdsNY4RyKJW2R",
  "key7": "4XaYqMyProDMQCdnCroFiUsyMh5DoPo6RuXeT9GAcxiVUJJAPsZQw7bdqi1jt7RjUbjcKRsHRvPCs3me4Vas5tRd",
  "key8": "3DbpGo2en3k9Fz1JBc3r4HQJULHDxHrGXUgXCad2TirxDvWYsrZkR7KVCLT2fka5yLpEoEYu7YTdD3GfW4yo48MK",
  "key9": "r5zjBUCkHPbvgWkk65wC8F5hddEqA6GyEMZnvfqcDE1LyneCpbsDasRaQUzRJuWjbmZTYhdVrz4fuV55npZEUo5",
  "key10": "26QT4rZwJUxaYU8rKDtpEceVhSYVvD9hUBCJtiPtTRTHte34Rz2ure8ZaKxezkeKYodSkGFFjt2bzHvf5QnPtdNi",
  "key11": "5AHijakTYdDAAxVUcZ7LyHg27J7qSkxXxHjR7S2HKKhC9fdr6q7DD6Jxc6mq7Mitj5xqXyUnkcS9SwbbcbutCwz3",
  "key12": "ZD4oN2gfKVcbTvD9JoSvp9gmxXz96m8VPp4vxooWbY6X7daH4kdrrP2WKvLtMWEyv7ksrUy4jKt1FjPSgcUViPU",
  "key13": "3W9BttpojqzjrzKzFS3KGWvMdNn47utG1t6edj1kCzZ4i4KxeWpbRq6fGXbgUkEnNWnKqDVU2twsUSLZMzHPBazL",
  "key14": "36sDRR53SSo267Ua8LapdMsRRBoGchCCikM8T9cWTKxCzD9chHo7Eda7ps2KRUpQuS3QmQpRbXdmqkP8guaedfmE",
  "key15": "5D12pQ7KaYUxsKXEpZXjWdDBB9BYYYVWVTeCzyUFQtemnKdLJr6P8v252V4nuxrH8sJKjBerz8jRuusPMmATU2pV",
  "key16": "2oRYaRETb3ePgG2o9UAoRfSUAoGbgiZEcpEugbrxcs7AAQPGqkUDbyz9oF9YuQ7DAdF8wsB874KM3qYoXfT3jcHp",
  "key17": "3jxEsuYXG94hX2wRzW4afT178csca9aNsReNUGYbGRdFYvM3ahzpFqYsKTZr51Dpq6LdEvdaCRtfVFmsZuAwAoNH",
  "key18": "4VDR5FnK8c2ZRBf3AxK5c2DoAjmkCbgV4wexGoSeryx5LpSa4eQsrt6JnptRDNvahBxch5hWSesLu2biu29J5yTq",
  "key19": "2f6gx5aBztbR5oAkoH1wwhPk4j1T1bD3qcZrS41kuT9UmkuPX69GtFAn9pZ2ZoenMjR6mDfRfKodn7KZd4XL6zdj",
  "key20": "2dRQnhNjsdvQAfcuBHFV5aqg6xbBSaveMd5nNM63tAfaMEC6xV2Lb2ekMuQcjfRWfdNKNBnJycq9PKWo4CuXh6bu",
  "key21": "5uXNJK7UJgAwu8NbGBuJoWv2BBet6rCvnZatBxuc8yPUDZUCF1ApiSChnCngLRdcais77W1A3xLrq7cEhYXRbV8y",
  "key22": "67JJyxg92GmMnbxvbwkf7sSNo6kjcB6H1jRT8QUx8hvYnBLkN5wSPDBqay5FDo6XpLFj2BWReCJTGpTkzUxpCG8T",
  "key23": "jYs95aHNy3p3VVdLNKCV13Nw3RpfQ1PGe561ocsJLRcwTaS7h6DjtEXabvusWBPmia2SdzqMwMNgjeB5X456a4q",
  "key24": "4BXn3boQDBpjXvPtWjLn48vW4L8jGktH1emhNoDVbV5soKzTaLBncjHhNr4Vo7SVmfXR2GPWHT3ihxjF18czZeou",
  "key25": "5e5yrWGtDzUcSd9eBnwnreaAwdJox1miCKkrubv3UnjL1BNDAFKvU7AFHQNy5qVV7Rd3nL8wWjsLAmupgvMURt3M",
  "key26": "3zZ7N2JMMLbmJ9qFP3kCK7zeeyT1GkCv3myA2D2UqTdb7sDhFn8QLRZmP3cv6Hwz7XaHXWWvT12ytYfDiERsteP9",
  "key27": "3VkpAxrFL8J5wQxVR9gBgTgCrCLqkEQJZhfgfuQb9hhU6RMCMLeryRjbzrvVfuoj1fGtxJMwkkR72HmYRbpYbjJJ",
  "key28": "4JnP8RCD4AC35xe8NyUUiRQAW4rVDdLiE3yRdQbrc58muAvbZztWKXEXAV8pzcoLaomHbuaADjyqmLjsKzuykrTk",
  "key29": "4A9ASF6wyddf5jJwYfdWqztsVDkW3eJKknFmyvT4ZRa8PyhegUbGW95avWy5gSa1BHsevLo41rk7FixNsJEjKJuh",
  "key30": "3NvBbfHCgGGbBMNHDXfoJoce3raw7jpMTRxUHVbm2p3mcAPCoCUZXVwHe5teV4pt3dp7yRR3kDj3VvxfB9z9Z2rN",
  "key31": "5xrXM5XCgncnPH13zcrv5eaP9RKjWePgjUXsYUYSyBQ7JBy7ze1qY5ziXqS6d4Y2HFSvtARMc7ZTVLWhAMsTEPQi",
  "key32": "2X5bywGLuhMCQJ37UCVn9gwbBKuVr56JgGbLsCgvFwyyJNf9pojWtP949eQfji7WmQtzor6mrG4VGQJBMz56HLNP",
  "key33": "398QDamSdgCWVoBndAskePRyaZuWNphsZbbbvd6q1mu8gNLBrueEs11dhTjEqUeEjMrkJzcnUURNbUfuaywYBD5E",
  "key34": "5usp4jAhVdTbn1qZBbPPsdYcYvhC1mbVudziedoQrXrSeiuJF8b2iCUdnLvPMfjicusYhxT7wxRV8i21z3YMitGd",
  "key35": "3bj9hqjpcZM93gzi18jeyWTovR5yptNNxAGxAp629XqzF1q6EuEnX96jX1mfnyTZq7pxWgmXYU2m9zATFaUJkYTM",
  "key36": "3CxpD1D6mtuiwhfcJSQYwyzBiqnycDn3zY2msCFezcDJWU7R9ViXNXQJMfJSY7GWRUBMtHLqWPdTXVirzhV7Sjvp",
  "key37": "73U3ByYgrF6BHYXKwSyqJ1er1XwCpM8PiVmCN5DTDQdnoGgScuDE6xLoiBCUMAE3tYEZPZUx9dDNmk1eX2NFhAe",
  "key38": "5DkaEXgTbGEmH5a5yhAaboRAh3NYJYoN64J7uuuNQP4XMAfg78KfRsp3xgNUnHjnsRS5fNSfULYYXvxKt7bqCnot",
  "key39": "3GUszZrvCjP8p6vsctkqkjTCMqoXZQHZf1uskv6vAcGebXBsTDZYfbHSbjLsGG62yZV1J8CFbkBDRH5Lp8afAurR",
  "key40": "2jDYubrhLJroPxRm8hgiJqZKy45P37KjU7u1HLE2oYcaVzig1RAv7MbneAaepkdPiqQLqdwHFeNy6GRNbvectWdd",
  "key41": "45H4ncDXBKnUCbcCYoj11iJMpLES2gjycB191zMs5fnTqw5fDGrENq6bHBXFhujCCwYnFfo4d5j8h45zuMQs74kX",
  "key42": "26t7EZof5zW78FfiyTVt422knHvkjgyXwR86Ew5RWmWVXBY8pXQFLuchzU1UrU16deTroL9tiBq6bq5xdArnMAuy",
  "key43": "W2oLgPhbymfbi5zifJjQ2N7dURupZ4AfbxJSsGX3e4zbqpPBnX1TU8nqDZhx1sB2LaKfLgcPUv9aQHihe9HuDdN",
  "key44": "4bZEC61txqvcJnfHHGayb1vnf4f4Vkeke3sxPvUsVK9A4yLgZo5QQArE1taTNzCuCmBChd7vk7wpnxdXQi2KgbqM",
  "key45": "2PzGqguBSxvJ6aaK2qi8qFsBN1g1zs28z14Ta11cDB93hArTg2eEH4fHwU3y9YkWaGcTKE69kFcRoNck3zz3oUje",
  "key46": "7imMEggxgcvRcW6SKgEyDqeMdS2xEmiMxjXYJT2XTD8YEurAHrdaqSHPhRDY7gwftSaecnbMSwSeKm6E2Q3kyMo",
  "key47": "2mWUxE1aXqMajPT6u8b5BiasT3kniSB5ymYdyFV5bkoLPe6aPceSADptgAx86jjCAsWvRvd1niByLCy2LKSGy3ra",
  "key48": "t26c4WMHZZxSWLBwzvorH2J85sVi77EWJtvCc1zd9x9wYB8bzTCK5RFbtxHrm7wCsM8iMKKFFAdoW9kd7mhKTUU"
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
