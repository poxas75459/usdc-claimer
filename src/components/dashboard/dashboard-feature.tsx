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
    "5TENTxjLAejmimBpJVeBUCT7PzEhks9peuiBwrJtKrwhJQusCS9k7QQFvqqG4PdGGdXYoHwJXLyxU61emiPw14Xh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yG72JyQiib1xpN9C13AktL3tdA9V4mWAhvEcYssGkmWww9rhKC1dx2oveAHXcsZesqUsec2PxNVuichT7dEdGhM",
  "key1": "5XHFpqLzyhr1JVUqmfTqJB2R6FK5yckGezXh4p61XHmajh9gQueSFExyESaNaXwX8PkSUMgFzMLcmBrjVZ7wtmzw",
  "key2": "6gjCXQ4rMc87HvMq2n3jVo9cd4aAXVV28d3Db5mccSugcJ1jhB19LQwVRWkNTQgoyQqvPcqPXCpG96kJecrg363",
  "key3": "2mQbVJJLbac5EurARwCq8P1rHM62QgtAoNyrNj4SchLksJPw9twQXqbAasGySV9o9aepVLiLdaWdQgUsyvpBVmu5",
  "key4": "3ZetRD25tGAnEwwYw4XL6PJtF68VHAtLYax24FmCSCGVhVyNHG8KzC8pLwgcNjKGFseABJm7DRAmjarEr2qGh5vt",
  "key5": "5mCzBMMk1qQGkvY2gYMAotQ2jgFWuLiWg5sY1ETrnQjMCR5PVPvuuaqyDN95f6tCq8HVYo55hDz5X7SM6BpejWij",
  "key6": "5X7MkJpDdqYZoEr1NU4m1JNRhEsxCW641CGDgmLW9Ehuh3K77Za85FjEWeKqmYwtspwZBzwKVaS3RJfnKqtR5vN3",
  "key7": "4RaTcqz9qX8SRe6zn41iFDUD8gGspwDR5ezzNBGK1uHSnUXCjypAmXX5byjVenuqVWpKpAMMUatFLFytz5VeXzKK",
  "key8": "2uTp4PHBUJPXWBW7Qp65CbEXr1GRkHKZne3RKHmNfQ1MiRL1s2pLLjjM1EJq5Ha3VLJuU6hWgkASBDMuueUjFUjZ",
  "key9": "3fBgq9JQxSgPsTaEpwMWV5gzEue6NXcuE4HSBGUtCmfciUU547NXvicZktGmbUdQVL1QvKpoHbDQ3LPUHwrvaGb8",
  "key10": "256oUJKyjeU27QpohjffF8iS5TWCih5zgSzGHqQkNmUoJvJFpbcSDFaSvgCdieXBeaWboc2hPVCFcxEqzKhHPodj",
  "key11": "5L8GPCm8sc5DXgRxzrRanDigypaBfTxZBf2o9RSFbX3znL9GDmRRKKjjceqNvsfKWijZcAXYqFYsrN2p9neAXjsY",
  "key12": "62JwFjtQNVy1QVwbktWQZy7tmo2wb2vn1fwfYAi5Zegu3skv3DRfBnM67qbWJ7RyX5U4vemTJFzQf9638p56d3As",
  "key13": "2pK71PquPnutydCskwRgE3mDJStWmYfdJ9y6D7LDtxHFZMVN39nfXWZg7Ymwq2zqSkqiKyPw12of4YHgQc2UyAQA",
  "key14": "1aUgvmPUNUedfmWFZvNELM1JiuYyYXuBn53trN9hu7WEYCoiG4RJ8GoQnShYf2C5Li82P1XkbsaRzntwEbnHPwp",
  "key15": "4tbGPZCMAWs9UWTto8d2fRwJhzAmjznkb9JTSQn4XExpycsDB4UQAmu9bF4LbowANNrmpZ8hBcB7ToFo5gpwRKgZ",
  "key16": "3osnGBpAVWkLiMLw3aFFoGcDQuM7VhBUXtH6jBcd2nojnSf95nfDNuHRrmofoCdZZMyfXsKzaPnV8eBvpkvE5m82",
  "key17": "5ccPPYBjwwy44VJinLBZjM4aKgW5EdxTekRjDFrpifre6GNTowkdRJWdxPYgsBUtwCUhe78v4FwSMGarLjYAd4tp",
  "key18": "5UcGKZj58jrVncGNSD9khmUWkefKqWRw7PCpsfSmwmFFYWdvQarwfMPFThDfD6ViCiMYHUVnzgEM4qcFaRhVaWpq",
  "key19": "2LofgsvudE2TbQRmwDDLx7LBF1T8CXzYkkoLgerAZh2a2fybq6QkFv5kr1iExFwKZDZfKVYZ6Vp8uMTpg2xzcBsS",
  "key20": "2yDCFXJq53jskacUrMACuXS8DwRX1vehdiDVt1JKFzCb8xDgWH43C3aAHcFx9uDAYPWy1zRvjyS4Lia8sXe3oQ3z",
  "key21": "34KBdPfoUykd3azCGNkfeo95yRCxpsJpKmuMLPva3ZX5kDm8Vq8gzjBj1AaU6Ry1xAhYmk6nfAJgbhLdeLKskDom",
  "key22": "4FfscE9nYPL3v8pDUQDyMXNzDiigiECLzt4MXt5CnNyhyi3ww7U3BabhmC9EmMb196bosKRVYwnfY7a8iDh2jMxL",
  "key23": "5WF77DxcqjtLcJhgubZK3f86pvayyR9mXcMiDcjCLJtHwAEzDEzzV3b6cZUCL6sTKAqezhUi19kqUbHeYmEtC9kC",
  "key24": "5KTD1Pwx8yTY8yG29UqkUaUafY8SkAk2VDqiVqhEiUX6RoRAHAzbVTb82TVSDpzJ3wQhyNV864xtgMUs2meyFuf5",
  "key25": "3TgzhAXTEF6Cts2QnyMqjfkZ3MBJQGQWHknkjws8191dEeoFWhNRM4RyCG7keP4f8JWDP392qpti89x2xnebZg1L",
  "key26": "GZwPuNJbXX4csBDx24vWrSAuHAxrnavSWybwypsyCq2bUMDsmeRtr4DD8GJe9coJuRnGLksUqFCQyQX6znvTnzw",
  "key27": "3HUW7vYu5MqeKeCSE8rUwKFfyZxz4nikUZyT7b3TjbnLFNV9NJ2D2xwXTw46TJit6grvAqRj1g2hj3Jdx8GQogJ5",
  "key28": "54oTWstntqurk6tVgydwbK9QsF6GeYBmgkhm3HSDgWTfXuiUqNVDotayrMUqxE4KAngpFrMAkex5BTemhThshvWj",
  "key29": "mKoECYgCaWxNVZwdJEkifr9z7zxzxpX2aWr5MJXS5KdPJhbUVTvEEaqvQP5Ymg3msM3Gdzb9eiyw3xobm5p1GPz",
  "key30": "mbML2scHMQhgQH1zeYBauDXPbBnFhXcbAS5GPUaURTxH27ynC3fPcLkXD8MJjJAVbmVqxRaZR2xQxmQZe9DxoRU",
  "key31": "4hx7n4C9QhcZjpieBdZaFF1RuSjpg7hHwkb6G4m3jvuURmqnGzh4STBN64w4r78qPSAm38fj1pD8PZwWGKS2YxDf"
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
