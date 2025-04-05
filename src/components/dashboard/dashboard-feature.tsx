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
    "2MnGayf2Q876yCgpn115fEi14T5b11v6ytd1mi4VZi4GbznBbFHRAfTGvq6js7W69rbK43bFjaP7hWtTwhGQaRw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HsQYM3sDnEH24Ta7YvYeS8GNjQi5aKZtqmo5sisQ1iTURB4cfPk7n9tABKvEbDsWAVSGhx1N4rmR5rZjEGsHQcx",
  "key1": "4gFmY911ungt5wL3yRjnHYtu6xsmdrFBdGwa4VQwjyJL1yMSyEoL6qEQayTXjCzg6Fv4TENNm6sSKEfYimEyh3b4",
  "key2": "2XPmnHuie1eDD1xGScwCWcTnaLDTFce5ektZY9iYzbjA7wNcVs3kbP5U9R9xu4ERMv6KUWPZTfMuzZ75EcTKHmEm",
  "key3": "3fmUhU15ba9t1eRMbaV6QkVnzpDVxHyub4Fzhxd7Brqz8sUNs1De9RR5HnTbpFtYcd9Q8ezFZkj6dUyNGiARTiJA",
  "key4": "2yFqYsa8WAPnH9dpncYSehy9jo42ueSutVW1GPtg9mnKGVdLzxsfmuJk2wPKy3c5sdEckbKFdmBhSJWeTBiWkJXR",
  "key5": "3ZUampGpfJ7CR2LivV5ZJWR7kQvnthBH4ZMhekDsDNE7KZhjr5DJiErvm15F8U59RP5LHpEc6FxXaSz3Kg4u8c2A",
  "key6": "2P2YRhymVQMpELW9u45JaHrprRUQ6hD5Bbip66VTcyh9i25Kr2wbp3VG6FGMmPFtpiY4PdWKgqxpWTAM8bqZvSLi",
  "key7": "4hhvGkvHHzpVsLi4hz7NYTMDeXpvLGp1AQm6fgx78rbY2zAkAUWaStMBrkekd3qz4L66KWkKEwKXcwrvoK6Aknnj",
  "key8": "4sQrcm7HhcJPT1Fq13PKVhdT4vrx9d2UMwH3M5xzaHwkSCFmsKxsbsJs9bBRSLfSU5EtiGf8idoMqroypzwJYvz6",
  "key9": "4Yr6C1XN8kadRmsLboCoSzNJZeh4QAxmH3DNT4d3vT7RmLDcWXz4NAKNWTAqc1YtCAZr21w7VUdzx5p84MXEwWR",
  "key10": "47eFBX6tTJ7gyf7fj9qNjw5AjKejbAzKg5agQxoCjo79esrcixpTUrbzZWDihMuzebUZvFmZt81iAncLs89aqkSd",
  "key11": "3mnigekVFkKH23uU1p6pzgy6qzDe6qMuhSdYmyge2GHuA5o7XMGwtQrCkFnVCmyuCs1biZVpU7ZSFwy5yPzkrBtr",
  "key12": "3CC71tbcVHmqZZaNvfu3iReTCVoqwY9XPL648yfHBiuaHkiiCvyy51jpe5w6NVqGvFwZNN36jdj9fASVufWA9PEm",
  "key13": "2qPr6sZpw9Su5A3SLcRPLLgx47SnkDERqp9XCxr323e7Uc8Q5VzHXdcSwCUTZjtoj6H59og6oV3hXVFgKp6e6k2z",
  "key14": "5WHnmevZoqEBxQqbKn3q9EdEvMFFqY1PKBr1rwUVaKrfZ19foXtiwCu2oUKyjXrTGjrSqzU8Vz9qNYUednk2xLoY",
  "key15": "4CnHTx2L7PfsL7nj2U9QH3ZsWEG7aSKvexwKnGgAU1kMybcdReJHdUPTshv3FspWWDwac1tbm7BaUXFzLeUGH42F",
  "key16": "4BANRFyrU6SW67sBq6x88vqUUamD95hoQnco3NosXm3eRg65Bk3D7nNPbXcKpyzy4AKrdZWDA3ZjMfbHtbzDjaGH",
  "key17": "22kYtUPEc3JTyddqheraFmZv9Pa5kkK8DKFVYwEFEBYbputqHfUweg4nzxzirTyKPZK5U69enWuh97d9HTGZCidc",
  "key18": "2o5WBmR8ucnzHP7z1AUMSZWmRDNBDki4ANoWgCG3xaxLXa44DjfFUefxjEvg3VF9zMGFZTV1rGb4MFL919VrGnaV",
  "key19": "64LMs2UzG7qGQ5N1duVnb95B8EwDYeBtm97nCcMCV6G4GaRec6baykRDYRbsNd74ttf8N2g5EVcsBaYKoD9Lb6gZ",
  "key20": "35W5HadJrLDjCNTipdJgRabAG86zpVqoRFy5YQesBxeyj4pUcpNetRCRDEf86HmKkfUCRGMjCUUy9UDm3RMJWkhs",
  "key21": "4AZRPUzcptZXrPThSGrzbgDp4xNeTsKNUY5L4uV4WPCw7F3fRJtRQ2uZMLFzbnpqqZpPhzEs6mUxMvHFC3yXvJ9B",
  "key22": "scPvGQnmysRATV6EgzRxXq9AvUp7qCTJT9ZtAsqHScZudeB1j2Ew1wuTvCzT5xssBQC8wRTjssW8TiZHNFteNqo",
  "key23": "yHSM2osxtgCk3UpArVqiux2HbtWwPAYAJ14qBA9B8kNoQLsUv9mYZCGM3mrZtAmK9k4KSYA5L69bvJRoPiEk1b2",
  "key24": "3FkJVea3f7EgsDiTbzbi7T8jD1GZbw1d7zatFwiaLaN4VajtgtRXwZmNdz7Z7XhWeaMcjt6EUoByJ1DZYDmZgC14",
  "key25": "wzj8PEupiYGGJJKnrQa6dKuch4MzARsmuSey2ScQUPgPVJJ1mTL3s26SPwzPR9WqJWujGkk31PAQdyXd9zkLQVg",
  "key26": "xbzoTxebozUpVy8doVKNHsXj9svD6ah8QhnL9oMvcQnvJcwudhCvcbqSY5wby49MZFKb4tWTcJUmxyFQpfCAhSq",
  "key27": "64ShzpSx49nNUCQ5xJESuWBv5ekUV2niHGxQKfqkb9S8mgftCRXU3zRf1CKTxKc4t23zeQ65TS8WJAPhGz8CX9mL",
  "key28": "thRF2VKzbXKAZUUfiJqhk3uNdjY3dUJv5okLyDwYCEhiJF3bJKo5stVkjaVuKUi1DEDxJbY55en84LnzFv6QRUi",
  "key29": "4ba9NZ7rCYVCee2eTCwEd6SxkfmW6NLiyTfwchtHeb2MxjjnwQUVT875MS2373HjJMghv3HgnDeCQj24tBaFNDF6",
  "key30": "5o4c1zKkcaUkLdCV2V1Peuop3bpPCVp2ndQWnHib4ZrK38BbAKwQK3TJNQHZbpdaTbn532nrVNgNDnyotKSNv7LH",
  "key31": "2MYsgtFUhxKvXoS5qBiN8SUiRqVXy7JuTM6YLAEK9PvXw6AJ6k7eTSmS2yuqDjrKvuGMWct64EHPpbFyVK4TaYcr",
  "key32": "3whgMyEGPZiJiSjYasrXXBYJSHgh8Z4tZsKCK8y84kd18bsXBSujJJV1BbbkDefkeBwBze7HD4vgM5WuyeMu1W6g",
  "key33": "2JhJbaG29jteJfDp1yk795DY1PdKg6wAWfMyj9G1K5827XxBbmReXPxdsx6n9tLvkrYLWT9i2zGNH6rmMa7aaTAK",
  "key34": "4CGHr5twoQEwgsiCg1hcyYqqkVdp2RgWTB1qXQ9RFAgSZRUsAa3Uag1N2VXcQ6HVMmsNDLE1D4UGYsPT6dp9kyi4",
  "key35": "4AkPJXp7DfRHZY9XuduwdX61neupm3jFggdQbzeGY9MfbukhumHWBMEtA5QrTimHM4sFPVvjRdEmEiV8eD8wUYKZ",
  "key36": "LtZHhHzq2VciZ5GK5tkHr9ecQmjunQFu5r8iXmYjZZAZPerRP22HtVf3YhycFvpfedpCPC6NPtkRoW4CbTd7hWp",
  "key37": "31Njj7gsugS4KQ2Lp6qbhTipsCyFHWjjmfyYtJsgZxARkNwpnqiBK6EvfX1zm4Ah6f4FeGvuUg49exnj8HkyRep7",
  "key38": "3KwmJ35AGFZpfcoVMB2KNvxerDpUBVagTvQDKTtqeLqy4NH6eJFswnCaSyfG1nGRUnXV9jNaSLXximLGEt8jfbka",
  "key39": "4sJKYcxj2pCTQsYc3SipHy9FLgHbDUiLtAVzBtJFzvfgUJJ4hfZoZdXvAqXxKahBg8ZF8Q94zDYu8L2MgCPG3vDo",
  "key40": "3TCpn7H2bgrMeFhynwixVBgfEB3XWtHA1g1PDYHvoaJVhzbWpcRmFxCYYwkmmpgXZr2ygW8r89DATCRBHZRhBtDw",
  "key41": "VjgwksFEQhgsABkRkeLHhRtbdSS5ZgfhmPDfLhagkopcaxdPa7nthW8LfTtS16PXubNLXfNnb9mgiytapfAJhTa",
  "key42": "4rUsuFLSkGHj8DQcsrXvB8wbT6u2D7pa4KSnDjfAPueeCwJ1JcAEoHVMbVP1GQrWHiFoPWC1rnaMMd3mowGkuBxX",
  "key43": "3BjUY34DNsx6QYiyi9SyjMRrja3LBYyk2QBqoR4WBRUSiB7E77xY1BrV7jaDayPQhXy1c7NJzMT3MRtPCqUHvXG4",
  "key44": "45nDWT6Nf586bpPZUmJwyxwKPVyUtFDRsCS468PM9UZsqQkjKGDQ8SvfNV343q8TPgTJLsoCS2G6qE8x4PHeeGVP",
  "key45": "7zm7YKYy3henKgmctCZqFFCMVacwwo1LQrXynpDWsnwpv9EokkBzeXEFtFNfLsxJ9fBqBmiejQccZa5E4Nk7ZS5",
  "key46": "4CEzYQHs95JGwUhLRBxAUh5qoLhdRf6NppjNoCDSy1LrrYjg5R7Fa6rdBBmHNoKH89Wgf7WRqqsxRAwQVdr9yCB3",
  "key47": "YfMXBkzNG3z25NiP2BcJapdospYnBAmyD8cbNxZggrJLEpp5yf4vKL2kzm21okvp8XCmtGToiURXx2upyT3tZNx"
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
