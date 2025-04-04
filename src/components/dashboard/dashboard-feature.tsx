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
    "5fVdpxGxugnCSca3wnjdfr2KU67JsGDP8f6XyS91Dw3FWpHtz2tcdzcbzJUBAGjmcKax2exnJjavU483LXcgTx78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45ktxwJUPBmc63R4dasQ1pjJ8Sr6icaMF4QUp6eYYWTu6WHfz2ipbiTRcQ3pXnab3owbSNX5LvCaQmzpWw5ioUcW",
  "key1": "3cdTdzwcRDqTkb7WMmn5qyE56Hzf7FWDCwcnqrv9oQo7m5gSMjY31Dy1aJjL4Vou81noD7dmQX8QsmaVc7HgJ72k",
  "key2": "5Cz3SkL5gZr8x62tttvMLpvH1RJksVVoQwidwa6J557hqyoJoDQYC2PrhE8fRH8NADgFVSdCNWkx3SVD3ymdoT6C",
  "key3": "4JQaHh7q3uHQk1Vt78bpo47T3uFwmt68tNVBSQGhyFZp13eh9WF1tfdezNXpUVQLZzuXPEYfZq2XKxR4u9cMYJ9D",
  "key4": "6FTeJXkqzB4z7gk9HW66K3DJtSGxpPpz95NC6VnjnkMnFJ3HALuG4DN53yd271CVZsHkyBKuQfX52N3z5bjdhLN",
  "key5": "3FVCT7twYb4Bxw4TmwpG6NUBtjiZXefhKhbrEsbr9Hj1bx4JEUoihSQKNwCC1hi1uBUyu4hP3h6sm7MncDTCxqpf",
  "key6": "5uXW9ExYAdgYhDSVMJVp8om9GcSGdV9doGeM65ZHCTV3sEPSfFnVUhPzT93hfyqiV5uactMdFjMdc5aogekCRPxz",
  "key7": "4zBrUwAY4CJamp5TYFE43J3c3EdeDbnWAfHfGtX48MQ2y4BytKw8L19qwTtfKCxdjnFnR4FBjE9zn92nFuGcExyc",
  "key8": "4JmWVzbTm9qSCcW8JzVhNaaD59rWvUKXTzXpkJWASXArjC1fpBHC2wKy9CsiQ7W9X69s3hL5zJpftPPdNbN7EmVp",
  "key9": "4PYLYF1JdaD9rWeag5z1zDECJMo6Pcyqq6woLu24BF2xoeKHU8n8N6pCmCXWLcSh7SB4RmWDFvvh9yeG5tApGWg3",
  "key10": "4LGzzCrTcupwSiN2WCffjFZzkNXxTt7dqWz8yzLoZ5g8L8AyVFirQaYn1Fz1aSrPF7cjockZxTeK9CbdQ3jgksVP",
  "key11": "oBU4TTS61s57CTkqTr5EuLGYoDcdzyTeg8e6GNpcX1pq4jFfqMs7WkTEJBPKDFMQCE6pPgAH86g92Kg979oqZ8Z",
  "key12": "xgbCkyjjqDVxnDBG4Tz7mZEmKrTsiRt26okby44YdfkuX26tczHFJtqBwTX4k8vRxEnkW6zNaY9nvjgWcHx6tEM",
  "key13": "3VjsyFcxaM6trvWKJKzzcyETbHXPHcA1FDtt3R9G8VbRLFSA6fmV1gfQVc24EeViqjF4y4GZkPviGHSd3AHumiKZ",
  "key14": "3da27v8U2ocg8wAwiyXbxgcMSst7Y4DGnZHK9SsyhmPLxewbAEcUR47AoHUa4zXwc3dPAyM9SQLj4N8ua4oKDfme",
  "key15": "4VaJNtJrS4egz2X4HVNSyUt9Q7ia59T8Qv4wg8BmXfW7GSgEZG5w72gVUYkeK2kudXQAvtWWg6nrYQFs9z2RbWeW",
  "key16": "uYpgJrF2fpcGPUA4tdunz76uAqLPC7QaX6ziDvqYvh8ivbjtKtbLXUiFdgkFiMZ4z5jQk1beA4RYKtK82fSVhso",
  "key17": "EFcUo8YbLAxRHjMsaLpnSWzuwxehLQF2gRmjunmCxDHVWB8m3zicgaAC4f4n4jyyeBrLGVHQnsY8Dr5VjZVWdb8",
  "key18": "4mv33KyXAAZETdAwaLuyvbLDYxDZvEv5YejMmBYPShaNF9K6aJKpbj2uSkx82emjG1z3HEYnswCBi4RUpN6pqD72",
  "key19": "2Jv7TJ4CmzSBv78px1CibCyc4rp2UmGxnpswe6Tanmr9Kkcmc7xAHwQ57xeKE4qpKyNHZWvGNvuexhCiffDr66VX",
  "key20": "3AzugytZgeBe8myvoMJQNmjyabcy9cAoUbnfQB6gyfwgeGLUmvbxZzYC1LRRb9GJeJBmKbSuyuACiSRNP8FmDJG7",
  "key21": "2D42hoGJwjGMUKYJDJS61Z8rQ4cmTZhDrYhj1ZAAAx7M3yFXRXQSCUhBJLJgSju89Ln1jLTWuQgQeMVMgKfiSNfB",
  "key22": "5vvgWQ2Z7yyHPoqksyTL71sa4Q7ZbBUkoyAFhyotySQAC6vX6ugTAXJbsLcxtvhzb94cn1LB7dLNWBtw8j64nrfM",
  "key23": "5yTC2mHPmH5MiGMpn9hj6iig1ihdzhoYTPX1UkXrkm4HPm2rigPHPHD3sEXtpYTzKepJt9esweBNuyCHPohvcg8J",
  "key24": "5sb3xxRtuhxUPhePUF6dFLvwo6T313t8FHGVFXw4CydJMcDggxkpNMb8MbdJzvZRX1KBtr8gLjnkzzHsTiGfVPwE",
  "key25": "49QREfdvuQUUbR3rKqMEzmHYD6UG63Ay7GAw5Pf9ZyeHwJDGP8aXyVKgwcGYbKbgXb49URBLNFQVzvpWUd4XrvDX",
  "key26": "3rJh9b6zzZ595vdn7Y4ze8TQDS1uG1VcoNXVrP4UH95kbSGks4M7PWEqBd8MsRoXjM57rE5knPM9JgvtgTttCopZ",
  "key27": "5pERgBgzudgG7n95G4qrgG9hGNUGdsq3b5hJmAAyKaNKExdWJTRWRkHJnXHhvjdz9nk4NwD64vJWVqYDTwLkRLz2",
  "key28": "9pnoqvX6WUMQmvVgZScVHycNiiywJXXYeSdoBYPe4tNCikhfBPWCmbbcsjGmmnkenuhL6XJ18dEAesoDLdmscGy",
  "key29": "4dQKB49CTWM9YQzFhZ5z9gMfnXtgCEVE1PKDYLMV1JsGasoyrQsRL7b1ZFdWA8e72NVNpZRYioh25b7s7v21uC55",
  "key30": "3r2xR6kdAPzep9iSi9E7Ep4ceNy3XsVh9F1sZaDjYG9juuw587whXPS8sTvhLxuK2m3WsvLis3NLr4RB2y1TjGE8",
  "key31": "48UwWz4cTXAy9LxJDf8aY1dQeYGNCiuSoSoUquGWpJD1JMsx2Hw1Dhba73ozoviLrEKkXosdnZ29WqHnPiFcxamZ",
  "key32": "42gop1TsEZJadmESTRBAGwwr2xV2KgXECgFRLMdcYjX3DzDR4VjHtqyv34A6PoDxabMZLHoTkmKjNwsMSNNVm8Ka",
  "key33": "4uiyGniMuxhT1zo7EA45UuDBAPE7KY4Tt4Qx7WUtVXTgJi6ZEo2LipmgCqtM72brYyxp9xro3xfYbuB7YD37Xxnx",
  "key34": "K1GaaLcqLjHBPgR3f67sD8JiKcdE5GsXj6TcosMPXerceitT3iXzQigq4m8ZXpQQWgTKtwuHKW7ohkTcAvoiy3N",
  "key35": "5hXK9UE2qT5ZgbcxdC2Fu2N2GnvPPwaEM6pCT3UU1S3MsYGZTgfRDfNCymcpWn2SaWRu84cVwpx6CdUbEYbrYUx9",
  "key36": "5gLecy4vWVnwjYaXWXnR7CnqNU8cKL16ihie8M8dr5D5K3c1FFfh1QkmTTPUhC2C37CV87GZ6HcoTJ35bdaE5qP1",
  "key37": "DyRXXM612RRphgUuzX9PPBbQP413yU54xiQz5eezbG8B9w1ijATDZriGnnhgn5SDvsc7C3RWzz2VF8sLqFFh69m",
  "key38": "4s5CU9C58rvTtab4gJKVRhecHiiQVca8GacLqRg1oCU7QKoQPzTi4W3GH74pCN9hPADCGv3vc3VPz9Jcp48GVbjc",
  "key39": "yoHvKpf16nzPQ7httPiZUN9Dop7qWJUsYZGrxqaB9ao35GGUAjG5KSLenPmeFu8Qn8t1Av2rnnEa5BjbVLMk2sT",
  "key40": "4iVdAD6JLMcX4ujkXCRpZZNjXD9JRwd4ZwdWEJoi6vRdviCFBCnfBJ5rVstfJL8ZPR4pzmNAgrTghDJz3kJDenAm"
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
