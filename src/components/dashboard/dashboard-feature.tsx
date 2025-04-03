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
    "YRpKTEbpTokMzYEoSH9FexgahLGyoveah35x9TvnvAexHwHS8cmNs9QUQuzMc27PWSbPu4bFacfuHUZz4AvGHjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cYVihjpJiJW1Jnt9g4YTpZjvStN28f7stve2SHMPZSwGdXPbSKnoYke9yWyPSpvHpARJHhXwhYmna1Sjc5Tn2RY",
  "key1": "4BRsSxMkbQiSJZGcr9hAy39j4izv7hMZRf2frwddqaaKewYxaGme8uwbhL6DSk5nAWdikWNTheQQuNfd7a637f3u",
  "key2": "3EhRjkCi5wyztmyVAfJDwBhU9zwoqExMqrht8s3P7z3VdLbLegtf4S4agNCyHVWhVamztzxYb5L6fT1rGYx5zZ5p",
  "key3": "2J8K8sfsWRp2Mfb1oFCyTPu2jVEuqGXziNGK95FHNT2BCxULFDUEJ82fXcid4EPWmwsoKnUQJJmqJuj4NbdH4rq5",
  "key4": "odmbrcfrUaHpMjqThdRMvcpfkCa1QyvAWiQEwpXXnP3WpbgBMQRf4tgBAzeQ9ApqNM7Qw8HVvnHacUXUXyaJTU8",
  "key5": "2BVdA7HAyF4KJZ5CWVEr9mT8MSCr2QD7y5cyLYLSSvzHQWEpZjNadoGJWqDkQg8suZ9UR9gsi8bqfMrnYpqZ2riN",
  "key6": "42U97jYyCfP63cayeaduJh61UjAo7Qgffnb2ReVZzfMUncfsw8vcvg9ju6KNpBy7x6KEPy3rpQ9AyRYCjSuTbvfS",
  "key7": "236mDpPMQAv3a1ueyGZqwSkEtrGXrt7uEUWEyDjau6FWA2uLyHmdd7uxsJ4V6dBkHq5efpg8vBADDJByy8MdQmik",
  "key8": "2NiWjYepVDZkBKvdXoQZP5pMM4TK416pdz5UwYLwnHewp93nLihMTYea4fWNw6WYN2G5ZHJvS4bS4ksNJW84FC5q",
  "key9": "21iutbhRHvPpvPeddFy6TPRUymZXNvgvDebNzVwREgRqaM55TiiFSgNhzurR1UDmfNAZthafT5nRwobyeuheX1bQ",
  "key10": "5DubBHN8Dgm6p49GW4wkXvShdUhPfFuHFY2iajg7M7J3VoJetEnwD7HkBpxEv5DjSyzVDjGMr2yGsoq6pwWGXixm",
  "key11": "2bfv5g79TQkMqkKw3ipswvpayYB683v6SoT1Tb4ue5XtLFaKyM48guRbSrbjVrPpdKjXRUvB6HJQEnPq9PVbBJir",
  "key12": "49HvX1UyQbT7weTghTSksqkmSQ5rcYgAarHGjC6h6cBkaL4PeVeEj4KutgJSsbZ6iYeKm29ZLxzn29asPzsnVRxM",
  "key13": "4pMypRd7qF8kgePKUc9RpKqZbGUP4AiadcTV2YYmJvdhw3B9UKyRXS5vUwxLgpSdiAAjpGCWeKtyz3qUg22ts8ai",
  "key14": "5ewJcPQbU1FATtPUX35v6ykMTjQXgVJ7x8jYnfGqcDST8cUJ4MtkspEkxcp4gDUGMDSfdEYo9eis7FFyHtDgAyq7",
  "key15": "3iLfuZQPjse3SGXWv2yjT3w8YhiAuU5qgtv9GR6Q6QcAZ2W2chhC7zw6LCd1MtZrNz5qtZazkf21Cz2DyLM1DJx6",
  "key16": "3hpifKVtH1ikXKWTxnCM4iLq4kV8RSy217GyzsZqwFBXovoC53P89yDHBxHQhZHJ6F8hvJbbQxzWCbrfMWPP2eGR",
  "key17": "3sQvvHL6yN6LsSMpJn1imTS13FmuannAEJLVi2V2kNs6XZnhV4hQubZq26ptac6FCPnasLCbymTPf9fQQSYr7PLu",
  "key18": "3EHktKV2BnxJdgTzFx8L9zQNGR3wkMQpC26g356HVXGQeZPPpN5TQPV2bHtB16WSvyKm5W7VaMGcQTrCv7TzCgty",
  "key19": "3w9RwXFEmooKJuUuhyqnZmxiWybC6NmbAXMZQhLpc98Dzk7ktYCrxs5y87nbgS3UoAveyWqh9cL5ubQwV39nsUaf",
  "key20": "2RY1hpeHfxndxPTJDwHJg9Viy6HtVXag2nr4uWc9YGuchBojjYYz83myG2qQ2hqptv5NQmqLhrTiBqCm8zirzFD7",
  "key21": "4GKUo49N93VSzCuRjNLGdjX1kbhwJHJdBy41upt5HpZmVEA2jHKx4i928hGKoGsXSn6VND89SenVtPdeaXHK4Nv9",
  "key22": "44DSUqC6GrEgfJwTW4sruy2ByEdhG1Gnf6NaAS8FxMFWCRDLrYmhsQLxcHAbtd23Ci96VxYnAYQraoA7jf9FmhPA",
  "key23": "232KUGwhKdm7chxVNtutfS3bt7aXeVog6njqhBNkvXqBhgbpibaAiTRXD3A2AmBqUrtqr7B5NXuw5quvEvqGatf1",
  "key24": "28FreFYXW9o4WHniKY3ZLs99FGa2szEQKjHcpcJjR3dxebqE832QooE6o1Fd4NmxEBoeBoYsULYUmbVod6f2uPUc",
  "key25": "4hMhb2fWv1HhBDzxgRMEESgwM8NzkP9hQaCwkr7ZB5oxmAoahQvMn3Y6YB6c71kEuiV8oBh5Tmc4PQDXkEpfa4XQ",
  "key26": "4Q3kxQBTC3T3c5HTTjoA39MoGsBhkY51Xtv1Yvwr4hBA3Y6VprqeFzagthcrQQWUfkaMaRcAPBkbPrrHBY91mGy8",
  "key27": "2c6CW2hGxEF2abSuf4AxFV9PrwdZyTznu2z3hJY8p4Diic8V24BomTxwXmtinmKj32f9qwgdHtJaEAVhRNVczmQi",
  "key28": "y7kZSLoTd7oKY4WsSkiYiANPXpYEDFKr1hNrFvmbCzn4h4e7YqE2qpQaBR2oXBeyTEFCSXqJ51JTRLV6fgVG3zQ",
  "key29": "26CTG6o3mjCVSu5nwaSfKZTzCEcMBkv9FGSpyuEUP5G9eieR8KKac6SPDpqEk19E5YVKQxWyfA6DFaQoKe1Qks9S",
  "key30": "2Cwbb73q9m1hNMzkGdDDVcg8sSviBNBKs8KKECLKn7PYrJzQ6yP3h3u8VZCZqF7fxTFDJA3gZKLbZR9L2ufy392i"
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
