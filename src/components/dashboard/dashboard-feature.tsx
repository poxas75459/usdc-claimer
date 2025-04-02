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
    "Kdk6CaXXRTQiDqFyB5SETK3wDx2vVzCpaZM443pricydV9dyNJiNf29WZEq5Y1jtKUxzd3zXqph3H2PHDi5xogo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uHFdiB9KeiazcaVLTKQcwSHWviCpLasjEaiGuc5AMJgJ69a6FqG2p5GnC2GqiSBU6jN7eoRkJ1k9Uw3ArDChdLQ",
  "key1": "4upfvLzBqAuAXvof9d1Y4R9YYeBMQzZvjgjRjuK6tYAPpAsbD5dRXwPfs7q5ycBTpzgpfqVAjknb3zSZwpwUER3b",
  "key2": "UrvAbUxFBE2NVitUGffP8C1PDq4UvSiUVTQAspT4szAtsDvDKMMTWmLuuFyy9Xk5juuPa7Ns8VbB3f86f3b5mQZ",
  "key3": "5t91QsMoRyihGEfuCEoWo72jaYcD7rYexeSdM7cUGLde9cWiRyBuvxXWXhe9j4tWa9tUkPoWXZ27i7ufd3ahZ994",
  "key4": "R3DWszzSXkwP6AGMUXw4sQKMDfPaReDjHPSGjMiXDeGvenWnncb35ZBQ3htb8wS14YBZ69GVVepXjge69mWuRka",
  "key5": "yZ9moJfvj3wsFaugvxdxRhjLa7BD9eJVWWrtdCtgQK3iJRgyJf751LDoPtqCxnhK5dSTDWodESFBUM95EVtiTZQ",
  "key6": "4umDKLDT5wfqA919ji8FVw1u67bEzdHp8KtoKcRjnWrze8ysDBBGp2JX6JC5gHDPGAN9Uks1vSCxGfAXDFzdzCxW",
  "key7": "5LHqPUuDrjYUneb1PNZXsdak5BDkm4meLLmZ9b3q9FWTrQEcXYaZQrxYwBo6ZqDXTuP9ymSrR1PgMbZwR56BJYv9",
  "key8": "2d3jS6qA4dBx4KJJAajwrspP2cWjFvzEnqCRYiMiopQ7qDxaG3L4UKBPX8kbwsWNAbpU8XBZ5MmwEs9RFKaPP3zj",
  "key9": "AdorpuxG91bgaQBF8cUYgkGQihoPewbx9jP6vp8HdTk258NJ9dzcGMPGiS9nw18MMJVZyinDXqzKXJ8ZH49M2jJ",
  "key10": "26ex87TM7tmv14GL9TqkEpec8SdwQYRMeWJ44bdJmpVg471Rn8HMJ2b1SR7kQnHMNE1biYWiqNuPvpNtaEnhjffN",
  "key11": "3VMhNpywdZnH1Kzuv2V5VSsH7D2oEhNbJs2rXYF52qhYFSz7Z8azr1DwV2my4636KS7rmscijepWQT3EaBCv1fDz",
  "key12": "Fu1RbfVBzjiZh42QepDB39TZjM3KGf1yFC1ATvHSSzX6NJd4zCLjGUC58u4i9NQs7MLfHhDNRcPrRyu4a6hgjyk",
  "key13": "ySuykzr9N6bh6YduwvtE7ZGFj6L5Bh2pZgoYKA1t7ZfjyRao4J4hxvAzN8qgfJBf5EgVBJkpRD3sunp4bZF2ybd",
  "key14": "dLwffMdZ42LZRBrjJ5c79ywkMYLnsJZQLqDMe8vzP9FvWLE4yaegh5G38yv16f2HfAgNVpohd2pboUnPBL9Yd8c",
  "key15": "3gLAWf7cPHCUHhUeVmz8C8KC8wxjMDgzZ36ZkRhxX4cg8LWEVFPQQEjWg44ZE43p4pSz8FxjWjdqR2QHedc3Q5s7",
  "key16": "42zjQjvibC9jTBfsQpNM1EacVaUpSLuE43q3YVtgPeXDiftUuT2tfSZnTbsQiogE2my11KYamUMqsa9zXVWWKKXz",
  "key17": "3fH4RJsF4aB1sLYbXKSWWcLJK9CrGw2BVEN47XimEpjnqQQE5Cm8Q55WpoKiPq842tziQm55FLpL23dxNhh2cHZ8",
  "key18": "4EGAikXbTsoWdNwMP4L6jPMyCQ6nvAB5Xbeceq1d8fQZyitsVbEkw3UEpb2xGDTU5zMsAfzNiSrNpBW452YSzJ7z",
  "key19": "4uNRKFCJ7xwEbppdVjhQoHMHanocsWvXtS83K2Vj6taGeKHZH6o8Ngn8SjApHPz1rZyPkCTfoV5ijtEBQcMjtEZq",
  "key20": "mWPQWc1F2NeNEF7LWaDxpQ6VKModkhwZ6JeV4hu3mUC6qnNcuXdRg8z6sGpmPPGxbzmdbvzFQJBXNeTEtsSgxNA",
  "key21": "59Noz1iUANf7U7Hv6pkJaJttrHraZ7arv5PWmu4M6iFXvY3VFnr1Gmdfp5t41gX25ej6BuDtoTMnuV1dsUU53oBR",
  "key22": "4NNGE4cC2taga1GaLwzLg3Y4y1gsRgQeNsWnrFrHfjY94aDyFSFUqo7LzfM5XA9uXKYXiZQqRdYLk2YkwezFC2NA",
  "key23": "5otDDNwjcDgbrjKbfGnw9MzzjzWMqijFgs2i45TsWuBAYnjCDMsQX7NCkBANtG9fbiFR7grpYqMzyxL4o4BvhHje",
  "key24": "2LX3L12gQ49tbS4qrn6cX9wHoabkR6d8myak7NtzB1re1UGP5P11wXQPJbybjPzgVztjTQSFxxtU2nUFHXeFkKUB",
  "key25": "4nFJJTuSMGFKCSozVseSvGt8wiYjMqnQLXbdCoKRsTrXBhc6Yoxk6LU8fpXhoyRkfhydY1wG9m1TQkw7ozdtwibX",
  "key26": "27znMWPrhsxTVgnUAh9P2pUFMLkZA44WNrC9e3nNymgNbi4VDgF9pK7ABdG7BLamF2ZprKUqXNNeM9UsFmnM88Nt",
  "key27": "tX6qa3NLyHTewwJjvWURg1KMJYYCdR4evHT8AAYNbKEivYt9CUS76VxJcXXxv454ojPgmtE4Z56NerppDz3513H",
  "key28": "3xFtuXnfzqvYEyhi1R5ugZ2LgTWJdnBw2ujh9NbA6qPjJ83AEzeteoFJJocSkmT9DSCpC6eM49vvtoxoJki64e3U",
  "key29": "KbffT7vhbVgjf1UQ6MAi27B42EyWrkto99BtGRiWBoPwxm1pKU1GKvN1Lsdakpzox187VJJd9TFjbrNFULEQS1h",
  "key30": "4ubbghsjw39ze8mvmKw5xPmeXZuiXJR5o1fvUdUK8ZWuU89NhtjKup17kVtcqWnKukK8WP9Gor4JqBAU1Dd8K4xR",
  "key31": "4PZki9zUgWK6eUATWKzNZcHR8iUSDY5mxEA5NuZYgXP6BT7ND31dRbZCQVXNujoD82P543BMbpGWxVHr3NZGYfTn",
  "key32": "5zK9KRxTdFw2jWDY3ZPikjWPsNE9Co6SvDgTRPrYid8qKnmDUbzGVd3RMCondfQysXyuzKD6YcgASkJLnLKsMzc2",
  "key33": "3gMZ2auKyxmFEuNpRnNNcpP11mwA1bWab2G78weBQWrqvfx22Evnv73GTtAx4251WiTpWVypjoxw5D39BbfYJHB6",
  "key34": "4Eh64QyTu69J15P2Ch7bS1qcXi47ovpVUENG78AAqL6SgokeXLbKMhyTnfdJLm35x9ZXUqTQA7kWUUpojbZ4VSAj",
  "key35": "5iweM1RiK22Dj3x7T5KfTFZrrJ1bQfMDmcKu5DQX1Dgy2MrKRVLEQE36M9qizerSSnGD6CpL5miTPjXbLo1bZnBM",
  "key36": "5D5BiAkTT38TNisqL2uZqtPzdVaCvGH5bkPEXX4rxRcC1kACaBArvoR1VhRD76SDQfxJsDHFDyjdpX5BSxUbWuFj",
  "key37": "4piZ8VztcDe7oqRboZNSwRV8rsHF2rRLsk1Xpz9vSoEgkZon2Jwozt9fVtx8KRtCaGM6Uo4TvBVWYGMnhBX1Jo7p",
  "key38": "4oAQUBSr7y7VEM2BiUSAFNJ5NpLXr1oGLLSAazHYkFVktYv4ym7vDeRgpE6dNLCYtQWLticaUa5J92hkEjbw2PoG",
  "key39": "cEjETCQuTwXFcTeUfnF6N8s8t4JJp7usdKAzyrRdZonRejiM8fV6c5fbVXHjyCbnrW4Q5V5RQJWrLc748KU31v3",
  "key40": "5QvqHmvJvYsLPhJyNbSn3q6hsfHq3KYNNQzQ9hAAKJuHciLQwwNXPSG5j6GzVJZGda9SN5eQxRa8y1zKoDzorUPm",
  "key41": "5RCnxWReEapgLDwBxDWKL8u8WJzL6VBx8NpYCHZBHLKqxmQqfojd2wFyKtzSqkWy13mdevE8Sk1q6tYrckQEpKcX",
  "key42": "5KAGcY6FLJHDBzWwmUtqAL9xGU6XHMcXixF7iFmBwvSKMzyhikA1PXn5wmb3paW49bXVgXs7qJ4kzzLCNswKwN4j",
  "key43": "22eF3oMh1KnQq3oeM4aBU3mSGpfuWcvjsifNfutxT97GaVfXW2EtTjTq17Hdo6P37XLuqun48Ce9Spruu8UypxHx",
  "key44": "4uUEZdB32Br4953X7Gdf3XQjLpuiuif52ytxhnSXcxZoYx8253VQVKoatotdxpk9ULQQsdwXJukGwqvxMfNeaV6L"
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
