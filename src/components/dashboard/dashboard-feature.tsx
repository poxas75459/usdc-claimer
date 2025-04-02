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
    "62Y4fanPttPB5awUVFbgzsedmLc6SbGZVhHgN5BPZA8zAZM8NC34Qa7yJyeUbpoHx5XbYnR5abUTebu8rXqTXFGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3obpwBU55v2svRbqWtsTy4tHUUsus8g3fFMfdoycDnm5pwPXEcGnagUoXnTWtD9BQVDPbG4HLWRxDpMageVXoZuu",
  "key1": "25aGhA9Q2K5VfDLLFfj7uTXikeLurYXaWoaTQGo62TrdWbnEKx4Uuf39RYR9k191H2HePZNukTg6uKQbhyEtpGVK",
  "key2": "4Wy8NQfxfSiHxZngGQueeYTYDa3s39Lk4VV9tMFM6YiGgjfG9ZHCnqVZ9VUGJ8wMX2t3xbaPxPKs5t3Kwz26QmwX",
  "key3": "YRVPn7JM4CQdousZ1a5DcbTmvPujmxjrd1U52W3NNcN8DCMcxxMRcNg6dkFVr6bdkhrxHP1fcUkpwuLUxEHA5AK",
  "key4": "3pdiKfFW3gZLBJNFEZ3ks4Qj39y6pnpxxtznxCBL2fPALrATvFUgtmnK4ent91vRaLth4zrsCjzjk6dv8pdNMxkb",
  "key5": "4habningV8cQzjCojv3YXYRy6sGVkMDm598z6SVxEh5ve29cwoqEeuYe63NbWZgpokEuyAeTZ6qogcAkNVBBYT1x",
  "key6": "rjyEbcCRkvZrNQTuEa8QH59vjebkR4RGkJxa8p7f3z5DqDEVGAL9Uxv5aYDr2S4riPQZMogAD4NCbGKKXhR7CvR",
  "key7": "4uZqzgJdXvuaRa1m4qqmQCHVaPSr4JcFebsdJaNsxfxq1riN1ifxzp4TNEou5tkAHuXaUNj6Jr2fhDrdVvYUERcL",
  "key8": "6HUWzLEnqu1qfjNhWij9Npo6Qe3r8iR2ZZ3KSVS2p6xJStSXnSxk3AgyciXDoTb2Qurcf8nQphurUKpW7WVS9e6",
  "key9": "AugrHbinNjmPv1y9Spg4k4vFtkFL5UN9bAGdVpZmqNWhBtBgy1uvYvFuvBs681Fo9pvap5dKbTKMw8PpwCpqhTN",
  "key10": "2wJYc1UpEcJWXPPTJTgGf2E5DhsDirpGk9CGjNkPbtyH8nzVr6JijmG99YFrAJntxowtgTf2Jy6Ayrzo6r2jLCNw",
  "key11": "3xXqVJZ9H79PaieuUZZi12eAJwKbyusGwSsdLYcQSRaxYy9h2RL9ixYWAF5V77Gc4qXbYrQyis2cxkSL2GDTFYoF",
  "key12": "2tisJXz2N4qGaQyWoJizCmNuycWB2yCKApiRKdiRRnZ4aKPzy7uVT7wCoDEbseLhFGbvaj7AmqG97JUWvX8AUrKr",
  "key13": "2r224qcpWPwxprXvSVPVmVUiMMDWqqqzzNUs2J6TRC9X98RJXjcKCf6BgTqC2WpG628H4Hp8b6Vf1d9amSGDeeku",
  "key14": "3dppyLhaSsCYzX6bz19t2uabcvzQhw415PgFjLyK8mjScRU73JZfTTrhEj2K7p5Wz3t2czW9AhGSFLHQRM1FtbFJ",
  "key15": "55t4NahpfPr5jLokntbjWUnBCSSMM2h7U5HdpwH8JWhiiDDK4ghoA5Rohs1ajgPKKBHB1esfgKZXjVcfESF9Mu56",
  "key16": "5xQzG6R7m9w7hXAVD6K1qYfHSxzJgtkDHScyJr34QWSUWLuFHugAMEuVHd4CaGF5PKGpNu7f8ueNde8XEB2kL32Y",
  "key17": "6536d3nLtqxFwA8L1qEhTNqhbC6G5gHwvqY9TMHEVEufbnyEiKgT2rsErs5RYvfiepZTDDswaqS1rr8n7gSsd6JQ",
  "key18": "4m3iAqdvngdAcypGK8XJdGvgDU5dWcNsYzXK4J4PHMspsV4zREbV2QP7Q42TbDxDHF3B8ngx2QWrGYnhMqFE6FFG",
  "key19": "3ULVLjbzR3g5uVF2kVPcojkFA3ckWCfZRU7wyoNcGg9RLRtHwVwhKTnnYEz9Wc6kpLDXnEsyzZLBNXyZLc2DkMtn",
  "key20": "2c7R24mRUigdPhc8s95qEAzNm2vWdd5t2uXTy7hdcMUCRNR54WKJBZjarbUEfPUaboG96SRNFeD43HGPqYD5BznY",
  "key21": "4EkGycX45vyv5AhL9ijZsohwoMRnejuSezZ9kFYFPJtb1dS9VrH7JRK6vDtXbyHbEyf4PZ173G6pz8hgtYAxLisp",
  "key22": "61KwBBbB3hVTBcYKKMerJFXyvWht8g55Loz8dg6xCdVcZv3nY5Xy4vZubosoUBn3WwZtJmWq7hfXfS5Mf5U8kQsj",
  "key23": "4KQKXwFGkxu8TJHBpCVTNd2f2a3VCLM3eo7qBvsqdCrtCNKQ2NFi4dkEcHY55EYxmaZMhzBwxUc3692HJnnKTmwP",
  "key24": "3DLUuBGexLqerX8wDwC2VkBpVJ49RejUzovZL1ex81f1umYmdhmthRdfd9xJ9GjWZ7A7JeYe4DnpJXFwqyddqgcD",
  "key25": "76rntHhE4o7G1XHP18VunyqM3uQi1zvJru6d5QSmDjgZmeKA7QPgciuMaJudgSpF6tVExg7ArUkV925PWhNjeG5",
  "key26": "2mDUVWN4tAz5g1cy6CdDTDHr6k7sX17pGmHmjzucq2vtS6vgjJkHjZCBYtf82RrrN9rZvvgnemhE7jC4Sq97Ta7F",
  "key27": "dHjVfNogdXcWG8X971Wgww1jCBoAeRUvATPwdQAjUW23D1NpaNzJxcxVV7DyD1gLkY6V8su2UJq7LZmJ3A6in4t",
  "key28": "5VK1aLfMBqmmW5wiu3cop6yMsTtAFdzq3tQSDkpojDkr8bNoC8WnHh4jTkLcy4BpRNxmckZE11LSedUktzsh12Xd",
  "key29": "3DRRiU29vkqMY2Ab14Jzp8AAxBVrfFCP6j1GcMZbQmdPo5A6kEHLthec1bMvNU3JVPG2yxSHyRXrSZ2aN42JLchE",
  "key30": "DURmzeqm84yFxhNDXAuia4aUe5uGN1T4LCnnVoidxaxbBDnozPprp3PhMcco9nDkhhfN7eRv1ptQSirTCcN1oSf",
  "key31": "Hkf1k6R7N5CAbivbTm6kpHutztLo2AcU2We5PeCTFtQ3NzSHNzbwVnSgbGTe4ZziZPwaXWUvyifgRdTgrXFXDiE",
  "key32": "5KG9sWHspgM7wWKh2tByVRZbztQcFYwyRiBL5YnP4PGYA9Hwfg2CmGMtBzTpSptA2n6r2QZGdbT9fbbdWYvMjEn9",
  "key33": "2WSMLgipTEZLVqubCxXF4d7nHZ7GRqSp6zTQHULfqsNhHXEWkVnwLQUVjbk55EjpcwnmWrsE2Sft1bmsqCpJA2NT",
  "key34": "5mFTzJAANVw6qntghEHtM7n21c4JwAsxFAAQqvi78GxD8T5vV3s1VHfaCc3ym5tPYdqR42CLKXxASkTyvszCzGsa",
  "key35": "4kKr9pbrnCpSB6jZvPoAczL5F5hkRF2PnYqK6RXsoTvG6QvhJfDc3MkJWh1VKJDMp65z97q2zh7yukyVq9PbD2nQ",
  "key36": "3uGDXTLeU8qMaMnUxdBcjvAH8SkCh2LPGPrUbRnHfdCQdgxrBsK2rbDooDjiGVeDquA2aHfkgXVqaxVmfVZhL7fh",
  "key37": "kw1ZQkUqw2EELSMKv1EtaM1u4CzJtjUitu9cc5vC4VLEgGMXJ8V5wqP2rQutyHtSna82AjxRCUeZfx5BQgnc9Yg",
  "key38": "4XgovXcTi2F3HGE55otYCvppYG4qnZ14Rti4ZxUZte1JJjATCMtFeRiTnAiqzSgnwn1TKA9BRjTCYfeazSENXMLi",
  "key39": "qrPsqLcBuzaXuujdLDZD5pgN1dSFc8XqkXxijwvXa1pcYBvmJBp117Bm42R9rAsH4aG9iuVryiipGVtcqGEgp6B",
  "key40": "5zHQMZKoDWgzwiDaqiHVn8HU3R9m3D2EwEuq2DJGPg14StyBKGPmECLw2STerd6aX2CiLepLkHSuGtr2swF5VZ9e",
  "key41": "3SGr8Sj8WZEaChx1HEzp4C7MYr2z9ZP3CPvy5ATW6osetJTAu5hSiLx4woxZ7e7eGsfaSpFSpfWU6QJrPawKjqgf",
  "key42": "3vjC2BcZ7NQZc5XE8NoRiBrmtP3sZTyGMQwg5BLEWfuaVnchjTZtDFNk3F6u13B9GYFhQwcaze6dAtAXgETE9taZ",
  "key43": "54pH76fLxiAvBJKV4MzcAsijZattYPRjqd2x3SQLZns3q2N53TFBBfLCxCbJ51QRxEw4Y8xKgn1SEEpnMbs9vrZC",
  "key44": "2jNNrms6RBehEELohJEjz6MC1NnhApeUbZx4gcrKfYTwMFUxqkmrZiqASH4DeKFxmRM89m5K4odt8zc5UVVkpx3R",
  "key45": "55t4mcoqorQny2p73ezScFvMbxKAhhoPK53qFxiig3k64Zp4BUaARJpdAYP8BUtRLNwQTJ2N75hm2PsuG7TfeNpK"
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
