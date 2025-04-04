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
    "eCrywjgd9Gb9C6NASG65pK8t3KtCo4zvzJAs1n9PvtwCH9Lg971T5irmLcieeZqgqn8myZfGJgZ3ABmyVfZjfJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KGC4HUg2zitokjunxbdB1pDjDZ71kmQpA5EsgNexNQZ87acgXLLJ1rHovKCq28AWVyTcqLLn3GSgpgqZmk7NiBT",
  "key1": "5SBuqD5ygWCjZhY2Zec3dLrHv93oC5ZWKdapUBKKUL9zS7J5Seo3tHyBfGGh1ywE8wrnYYZiRkiCn6GsutNS4Qme",
  "key2": "246hKTpXKJLAUVWnPMXwSsN6ZA3J7kf5ffjVdnWCm7DAszhLKmXpzT7vSPT2qMFUSwivZts5X5aNyvbGquHLw4Wj",
  "key3": "5zgYEtYKm1wFjeZBUMNneYctQLs55F6YrhMyyR1jSf7uiRXcnt9x3mMstpsDvcsuVS2wSmhTNgjEqnJ1tdnyobdR",
  "key4": "2JJA9ajnf3YQk84iMaDXPQYsyHXZ7Uiu9DjyEEYe6aFvuhTtzXedtFP8DxDuUUqK6uFygV641ZNjX9Lbr4dpjTSe",
  "key5": "4TmvkD84cDsMfgij7RnMVrACGYQVaTjkBQ5mnAPNbop8UeGo1RwfM6nuvcNfENUHwXpLKStmUSJsRf9hZkHTKTTd",
  "key6": "2asvuVUvcxTXtMdV8BNT2j18sCwZbqjhDCjMSDJMLvZLif5LSNqmfZT5WYo2p3LPSeNnL7XLMaawvrgbyFt3haRA",
  "key7": "5QWXMA3oQmW4cXz63eiPXwQ7GvdGHXnh2qXKAf3S7Vqc9sC2YKvhF5vWcjsBHQHngcUThndrQq62UHcXcQeoQmCA",
  "key8": "3Pd8FFyUmfCdr9t5h5ih2MsV8tKQF8V2L2MHwqmsQQGB9f3qhDLoFLqorstk7YQ1ghmGpcbGKTdwzj1WZxi2q9ZK",
  "key9": "2ddEmqz6UaUnAPrd434W9kNxAeCGvETX96CehzmrTgF5McUQmWft5oVyk7ER7HPwGFr3rq3UAJ7MHZLxiJRZU9Wh",
  "key10": "5euNB1Tad2QhZG7bkeZNxSYL5CjEBB3cRN4j9D1YWkKfEZWkwrayDW2Nt7dPee8rAxySjJjVKUnRtQicvUYkvcu3",
  "key11": "33vf7KbiDYd3po6CUw8wczcQc4xEfMU9EQyP8ZkhEPMwLSWLw5H6RE975qSgcRjotnwZYBmR7RVwcegmyFsPv8zt",
  "key12": "4Q3UNAPVEbKeSYZSHMv7qhhNLxnx1xSLUqbYZT63mzKi5a8npLaYtW8Urz2ceN2PeEsTd2c6Ps5Scn9uzBSrUh8Z",
  "key13": "43fCDNLxgKCxRmd8M8qaqsTsPgg98xgKZ97fKKjL63f8TD6AERnyzjWYDBusGFwGARVSWNrCP3nTPaxmNP7PiP33",
  "key14": "5LWV2oX4EndzJeB2fFpceDH7fmMiWMf3Cz2m9mmLAFUxoKJPuZBkowePSjKj2MrAMkXHEegK57KLiQwVw7yPfPs8",
  "key15": "4XzecYZcbfEFJPLp8unAWhSuJRadTznbsErh8kXYoFESVFYoTyqcrSP2g8KrtewJUHEzB1w725NCkBx4QyPYZmmg",
  "key16": "2BoHUjJz5v5ftYun1HBBXRqBFyiarYy2MPGfaodiC2eJpjowjrcmj5EDaM6NG7VBHs8dKZs1qK2pgnPX1jNvtQXp",
  "key17": "Yqui65L5x2ZS9wstjUz8AWQo4wLJ21r7THpLjrg24QceQaGmFofWqWvkqmrBr7dEf8KFxo4AejMupuBJLGJNsPw",
  "key18": "37U28TwJmEAR3WJXZo4ofnxcwAgRh1WA1EDUXY4fT3HuFDjW21uYmR15j9TUMrNB71dvgv6wqrGi3Ap6D2JSe1rq",
  "key19": "4M5fmn6Pfitvp393UfN8dTDY97YErZa9aEkDBf7WWh1mqH4L7BqoDsocY8Ydbw3wGZE3JLK2VN8DnwwRmJYgTgvU",
  "key20": "ZNH6tmR3BuaJmBjbfmDjxAGfSEA8ryQHj1uTWvojujzDzPEuMVRb9W2nWMP2FJ6zgijzFzGVvYZxd5kThY7XMYy",
  "key21": "3CK5TDK7KyDGpkw23sye3GWdV7V4Lp1VekDqHx65Gumi2xupVSNiZYX4nCoEfuXqXvqfckAJMccAfKSh1yzFDTZ7",
  "key22": "64xCtqSJcKZaA4QVpgW8tbwKpoYUGsv66XYC8T3XRtSizaUtdLpRg7nDGpCGZfiyDDD7EEDCNZFwzzoUN2RMdyhk",
  "key23": "ySoBRRs9jy5xXtQVXaJCu6pEkWsd5CExAHEB2Rt82CvBKLPrdRnSJEuenkpUvC67XCnNDH4gBSvswV5DaQXWHzB",
  "key24": "4F4MN4ccKLwpX5L9KSs8bfdxt1Z5evpwDbzffCZebwfNdCP7TDNDvbgbLcW6DwfCyyLMKkLerYFooTpYXrTdhYJL",
  "key25": "6468bFqXrs99LSNbKAMDHrd5xvFg4CdhLCMsZ8bzVwpPsMVZmPW49dzS4nk6rAKppknQ6kAjEESegiPEGn2ZvmtL",
  "key26": "2nzfMp9wMfrq8NxE4Ps9Wvpsx1uoe84fx3RDzGzhRdszU6FhAHPizE1LN4V57ARsyYYNAiH1HBhRX2dQw6PwMGqn",
  "key27": "4p9SuNBiHojeErDz6Z7g3VTcdBq4QGaxaeP9DrrA18dWNHHUCwK2HJyVuuqGhYR778MbU8CZPJU9xvQAgpRPSDuQ",
  "key28": "2xkzUtTNtG6kyETRxt4ARVsvGdRyTUg1esNaieuohw7BQD9awiLUUjKKu1XdZfCrhZtHkMnXiXTLcMQSAtyMpdg5",
  "key29": "3Q4t4WY9bgk1iNJZR4emtx2nfKXiUFCrwEodDHxy3bAubdDiYx7SUH6HYHZYq8CNa1DX5reNMBy18YYsDLELq4G7",
  "key30": "QY8jYGLa4JCTVnRVWAUoiBD6WwyWohUVKHA7dL4bFZDiWtRXtjNMpzXa5F8xYDGRA8otmhfHGj6k2iJgRwgjMtQ",
  "key31": "2sE9N9bq1dhB8FkP5FhbDpnawPN6mkJz9ZfcSZS2cBRFzfmE8SoispKigMpkdw4pDfTLMmJHdin2VqGUQPZy4GdE",
  "key32": "67TcdaH1K5JAEzWydPHGwGWxjM4d3RC8zXo3NuQRUjsHD9bbTHSQsZnRst9itD1Hn5y5G8pzuwX4XLoeAbjYD6ST",
  "key33": "56brRYWsFuxpoWhB872ARD9B9SA1t54pUfBMEdKtVV3M73KguscztQVm3SSEBzaQawsZtewKaAz4tP9DLrrDdVuP",
  "key34": "54Zup1JoTg67CqRTFmZYvfSuKCVd2HXJPz4GcpMWmstGEeCoXs22F5Jyov5QtwdjX4zrMpuAsDNgi7LpsuyBn5WD",
  "key35": "4nS4BJHLEG5mHTpANsTAf2iSjU9TcDhMuH2FUVgB1k7Q68sCKcEkimo9wev4FWvBYy1hQiKnP35Mmjn3SndUSURE",
  "key36": "4bY4m8Ua6cucT9sG5ukqA6b21duewsc4H2g3wB74ZyhQcUPN34xGdMjpnkHGq3d1eGqY1iM2pcjXiAmmQrZXRANc",
  "key37": "2EcJzPPmeTrMWcBS5ETFQH3arn1mukDMufbqfnNEbRSUtvVXQhPDXt8DynWnLsGPmkcDzUUvVYeYTnYXnymGzDUY",
  "key38": "4Bz3VdHbUWYHpXvrNdTS2cERGJZkxaJXxYPUCPfdybSMbrTK8n5jTf8VAhvfwbrDoMiupwEsqwCTPM9Ws4mLdqwV",
  "key39": "5iDGt4aN3HFQKnjsgfJ7yUB2EkBhtCY2AgVevdB3nzF7nHHXhMetb5rkkwXAppbjUDfpL9YALmYR5UYnjEgNx9Qo",
  "key40": "5aHCLTcZJ6aAtWcwAYpWk4sGvCgppu7jMdoRxLF8JeqiQcULr3faGTR4h8Jth8pY5ukBBsEE3h8iMV9W5ofZGx6t",
  "key41": "npDrXeabg6NbNMqFRHq7vRWmrNkrpDonWEaBRpLd1237MCxoctuEnNhgnX2gSE48w91LEw3izr3SnRA1Y2PtTpE"
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
