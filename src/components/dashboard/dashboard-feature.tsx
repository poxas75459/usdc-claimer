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
    "5uyNaQxzoADH7Xk8YSvmCwdDUHXLRjZwKRE3Twy3vvLw4bXJUJyjCt6dFcu4bZXFMucDiwFUkjfnBKr3LfC61WJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GGB7msC9HsPv1vAbwW8M1iBqr3gvnzVtojCFf2eZV7ZeZXJugVoRDSzRPRvy2qWforseHMzXeCseN4sNofDk8X2",
  "key1": "3xppw26LyMXNHELucXXaph993BSMnSuhv7v171BVo5XRh4fCrYRCBa7nK7xQcPor6BEbLge2R4srdS3FL3eHvR36",
  "key2": "5Au3gM6VsY7km8825948GKBFtpTtC4ZrQBCqfFYQYrKUaf6YuT1FDUM9Qd7UfLbgrktsoQbroRAZLUJFxxuR27Jf",
  "key3": "4pGjJJYLob8zPdXuyztR8qbPwXU1wNtTRDSPm7nRunCTBmdGHY1peRYbE7tuzpPpycGqm12sT2tqzLYy1YLjWnnc",
  "key4": "3J869SdBFAiXKPpKuZVjLj7kBrLEkhg3ihyv6PWwzNYddp8VcbUHvr7DU4tUSQipUAMwQtwJqKD1er1Tg4TNkjCA",
  "key5": "2Kenj22ZEKiUNNv7baBBQXUTVyk2spRtySfdj65hT9UCFkrKpKWCBeJnGvxPsW3TFw5HovsJqhxEdNKEaSVRgCRC",
  "key6": "544JobxqqEbNJXT8FM3CfmdWhyN4tyRvCEx2YKox6Qb5q9HtyyTk9Pqz723Yaa7yAaPRqW9nQGDpk2nAQmwBTXBW",
  "key7": "3ikujxv4iSyXt4zK3fgFyBHT4mSMuAC2kZzFMMFZeMF9o82VZ5tQwu9BP18DYGHYf4hQP5L1wiQ7M5DZCSXZ42Km",
  "key8": "5oHv2YGC5d9YJKx42THv3r1eoKdzJKCEagj3SNSwbKL28YRa1QnmwYHY3tSyCuHUnenZ3cnjihW8ga3KfccbYEyT",
  "key9": "536aZaT4zZ71hxAxQCVBNipjPd48xHypSPdfjiu8mjfZNYDeVwEL1bjCxhS7jSN6FqF5cdnDaoL8y4ZtfcqjmMJ4",
  "key10": "4FqGRNCRiDg9MqV47kd3wUgsmwaSLYoQUTGzoKNVmnWdNmkgH23R6C6sTTvnx3GLNQyg72khidhMeUTzNS9zou1Y",
  "key11": "4kCHL4Ai8LZugsiBwKP6teDVwSutfT3DtfAri4TwgdJXTcezgW7UgTgY1UKzBE9AkxZdZvxLimT4dx1XqMTkzUV4",
  "key12": "595MuuoXFngRTLgNqFt92N5mf6cQirCYjLNyQBBdrsCKnKreHVit5i7UAaHuWS3iAQ7k1deYbA4ms6nhFPodnuxb",
  "key13": "24FHfJFXr76kJeLogpRAY5CZUpBT3AzceuG4AmUDFC4ZhPsfnQ3cpB2t9HiudR5jXzauHMvVCDWW3nzGmizHJphr",
  "key14": "Vbea7T1EQhvNWbJPdfRMSDUZjs2m8xHBSZmEkwiJ2gPkvRxQXMddcxTu92M7JbCPEL1ZsuPfgT75Wp1Dhb6BgVN",
  "key15": "M7efV5RB6FesAzh3dVBC97r2bRHyHXuhuH5NC98QmSxEsT4XrBGYmtMFKSMhWnHueKZ5eopYCeQPAmeiuUZSLa7",
  "key16": "3JsigPvyj3c2yXZYcLZkBAbaAkT7VMYpqj5DqimtV7gxRe9Z8mVSYTp3nYAwVtcBQbqZiHDWL3aACMgvJpUpgdVs",
  "key17": "FdNz9cLZdCxC7P2F5A5yLRN6hkeigfRWjGgGyGPCWePXxZjpXR2qYhz3Mq6Evugfqb5mQLJcQTToSRw3aimanzw",
  "key18": "2weZmKF7pCtHAwa1ESx42yfqX2o627fFdZJstGNLPmNwzLSdUPAhGRgKwAGXff9ghgLncaiNrL2zRx2xzYoT75hN",
  "key19": "ekNJifvTGLg1dbeUXoenCwoGBLWv2gThjBne5ViQDA2SYKnZN5AjjMGNz7v3G94JvG26xcPUqDqDKjLAXnR78PX",
  "key20": "u5JNai1AKT1gsCksqCooDR1yP7jMRDQn6cHFTebdkFUVK8SCBiYG1a6nsyq7Zuv5QFvqRrz6FJDmimRa8ztr1yb",
  "key21": "47RHZLRKuN8Ra6BoyhbuCstbYUQqJcBPvMiuEu3xEm2j3mLeXMbadwQ2by63mfXTVoGxi4cfD1TGvgFvJbJEhGV8",
  "key22": "5U5DaL1aFR2D7Yr6WifAXfemAZMPceKBJ7Vpa7NE27swEQ4VazzNhUARqizL3S7GnCriZoaajptfQmbThRsbSpLW",
  "key23": "2sW2xDfiSaMUQLa2bNZtx8tNAMUzgrb7UCnpvBoNXxXdpjuccQ6isezQ3VUuxnf6XD6uYjUwEfbajuKdZSB1K3fA",
  "key24": "4pJkEFShisAR9uNBLAQcKbSLm48jEFN1MnKdqU77sN93z8sQkZfdBtN63TYFLirkqStMq4yCGav1cGk8RNhRn1oW",
  "key25": "5cJtgCtf1mE5LJLXp5GzqdgwxpxugvSkyss3nzKoy8J92Q2BTXCZPFpVyCfCXv9bCbBjgJP7ud1TmEVy4WQWcSeB",
  "key26": "GSJRChDJX1aj8RHDWBcG9FvfZRKRjS5m38ZyYaGjXtsVnZbRH8uA8UEm1M7Yc7ufxRevfSHGYww9KWBphygyWAY",
  "key27": "3xef9beCfPLpcLkgECHtvhnRqfLQPeZp8KSBgBzyi44ua4RyGnNiovf6ZgTPCik1qrYqPLAxvYHa9XnkYEDPYrVj",
  "key28": "638duw6FWfyXuRtwVx78M238xvt8CAyswxEBHcS1wJUbdpogqojQ7bS1nE1hLR6VJGX7iBUqx4d5SWNfGEjHHFh8",
  "key29": "5rLjjcZD7y3YdXaaXAuEcMYJSwjusxiBRF1AgEvvoGtxnLdmQ7thLHu64ivKHi9UWnGaYDEcudgz965HxZoEd2sU",
  "key30": "4w8eUoaHLbW8Zzfn7js8wK9J8YXS2hrJViBpe5erdppxMahHuvG8NToUHKte5UpAWdrRqfJ6CznMQttKM71dKfJY",
  "key31": "5pr7mfBW7Y9gde8JmbPY9L5pSweyswsatCq5ZchYRiXZtyQU5WTDSj4M6CjT2VR7btkjQDXoLv8WQVkx6nJQTX1V"
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
