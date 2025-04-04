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
    "22amENrQdGj3i4J8VJhEkB3aEXyt9zBGGHqupeCM84Qrjc1YV7YtVYgBiCskPSKqawSNms37FTbe7pg8BeS2AoX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KR8fSekhuqwqAeCzY7ZAYcxpuhzgjYCGRZB9orGzQf2KLSKy3mdbrJV6HgcjNXQbqUthqadAZ2ivnB8UxYUo1Lw",
  "key1": "65Qq4FjtuKtDP42KtoqCh7JqQbXehv6rNV5oAcaZHvd34cs45tJrSrqyv89hb54SnaLNa9wbVqharCNcEtXUP1kH",
  "key2": "4aQYT4Kv7zgaDJZtidpZ7EucVGsjdgeRo1PwHNo4zdkVqmXudgMPMTxmgaa5W7JyiRYvXaUvsZWyf6ZLMumW6tFj",
  "key3": "2M262GfiPYJD5ruSE1BRbzADY9yTPan8X22BRps3CmXF92WNb6SnicaBYJFJaZMdrHMaUZQtaNJ17uHucsS5mhgs",
  "key4": "5SDJMGUrzCys7f3P7TGY3rCFaBxCM1vV6462wNTZeV5LuJwnKzEAmmsAoaeqxuGgbwuYT1YTm2AqP1ca6AJek3gq",
  "key5": "3n2CEpiPpfrqGdpL2ApXDseSdpU7mo6NgrV7phGeMasNQCnc9k8AE38Z4F16h7ZPWfkLtAVEVRgzuS6VxqbpaVk2",
  "key6": "hbL2KtzJymFyz4s5a23oZQLxoi6NhkDfzW76coMAnYykVkeh2gJfYyN2FQzorYjGmpanD4z4esnhMY3RPDkrhUp",
  "key7": "QpxQJ7e9m7Hstme1FFixDvabpYsBx8vVSVQo2pNUA9ZzSsqiFvYYzw9zBRc7buDGyTgSzNezxqusdoSVGooUasp",
  "key8": "4aBto6Vzs1RKKbpKGKb1QRmeZP7yKvfPoikaFyzzUPwKt96q8LXVJgvTQDfAM7hUkdjHNrHW2ZF6U83SfEF6sXTZ",
  "key9": "5NDPgk2WRvKeW1AN3o9D6A2zaR3EGeuG3iotMMkXUv5eWHqLC2zC4FhBUfrD7zkbLxooVTs8Vub8bPYHcPDesDfH",
  "key10": "4qQAHsVMERHUATYmUopte37GQGLivMSM5WyRBoRq8esrHqVmm8XAXE5mY8gzMNxBML7gqjt6BrijdrBg3HqKPF95",
  "key11": "2QWmZt1DkPjCVLdvEvhhHAUAurRsSCjza5yPjubSFZDweatqUFQuUoo8pQRhSWFjEssQG3hmcDr5oBRhNHmTiyeU",
  "key12": "93jcZYUC2WNzFmrrDe8RsGR6gSRJGQzFrc6jSykdtDJHBSAyCDvhkHX1BDHqT1rCwFzfnUiKcxaUBmjLMTdKJCK",
  "key13": "5FQLDGs9aoarvwJe7uBEv77WQqsb3gTAAXxAUC8AYecpxRgJ5bt4rApUvDaTFB4ioomGrx7C4E7bSZsALDA2b5GY",
  "key14": "2mSsMCbsg85RaAxFp7ZwxRaopz7NSzREvybWGSxsnPrcmR9pGYhWEUeXwDZtYvwvEV8xhoTaianKNrBEheRJV8WD",
  "key15": "3sE6uajKxwi4WYNYpwBuSu6Mer6FHE6jtpGHaY94Kf6Ji792GxAw4AtwCUBCiVtrVE5xn8dxEUPcx3xCyD1ZbRK6",
  "key16": "2qYD9HBSDp8TszmVUpZimh5yKyUYPrNuSdRSpBgCpkAQ3sMitzd2X8NAKLRZh1g3CqqnFvXk2FdDuoEfoZNfBATN",
  "key17": "yJxHpCchAdTxUaM2pEDVAWyzRMdHgba9nkjvx1M51i4h6qRDBi6itULJrZbwxTzqr6nBPugbfSXqkpcQurxjM4S",
  "key18": "4hVc1n76XNo2U4RATiAHVY5VZ1sP4e13w1g6K4RMtuoeej9kfu2vL2eATGFb3rUXsHyCSZVZkWWofoviVxWPUKMg",
  "key19": "5AWWEdzrGYb5XpeLwguKsyLY5k4ywdKLGZHaBE5kGC1RvCdEejs8N3CEMPsagg6zCmRngCfrB3XoLMYRWj1gokE",
  "key20": "5LV1AcRSJVpsyEAoZ1JRoyinarWJ1e9vnLydgut5hL36ghzkv232MUEQpnzV1ZhgPr6XfqUSn5kKHUbXP9wTDKWv",
  "key21": "44ZZL4fHGkqbDjQXNCrd7ZQCDZnKfKfXcBQi9CBMnfZEyFPFV9mZsKQ4fge5QKyBPAkrr5z6p3a57xfi6pBividc",
  "key22": "5pJ9h6uqaD5z9HgmvyZvcVr8SsquF7tSntgdT5XJJp1PZ2mfaPH9ijMbrqk3P5NJvSe8eHC8q4wEhGfMvXob4dB4",
  "key23": "2fZyMTbYiKm6RfRrQw5vaYYKy2hRrSaPLG7CZPCn2DBi5hsfT4Q32gK5L2cSXbbmL7NdqdGFYnDa3xN549Ny6Do8",
  "key24": "2SomZJyBwKTZff6u95uXw7D2gjtaMXKwxYbsyb8rZvDp2791JLvuMtttHyz3PX6dy4GjFUric3sA9UE1hDK6Cy8v",
  "key25": "5tFetKH6EccGbQe7xXwT7JyJCDnJEwe7WoRDEPen2ZnqPsV9ChqYJVCTBUUQVCgVSitNuoZALEKYTcSVwjgJfquH",
  "key26": "42RYDKhiBf65FBJNSwTPUZZPobWJA9ytnkHAormAyAQ7VL8NYnYLAxdyJVc8zNYfCxgP4ZgFXHKZSo2dH75eL8o2",
  "key27": "cS8kepFXGwmGoKgQaEfZEiN7me6AhdFX6ZX2k62VstiBy75R29gx2w6H8pcmq6YXTWGV3rYMh9smAdb1iDB3iDp",
  "key28": "5Uqn9fHAhKneo1JumdFFTDrZMaicb6QysMT7Fx1GGp5rtCDyeFA2CjpcLBh3iHpuD1AgccJQJGHLHjtxhxMYUKYC",
  "key29": "4ZNGsG2jsZyjQEbVLvLLUB8sUBoHS7htYStbdtKV1xM31Fy2eWwhS1kTdZ4qjKfsfCngRktPwe8sH2Hsk1JJKEdx",
  "key30": "4kEB4HDSFLzU9fELw7bCp2ehZSQELmh6z7uFwUqfH4ivSg73qDgqW62U61XPca78H4uUQW4Szi5uKVsuEXMV9Fxx",
  "key31": "wYBjPmkvkwAVQdtZukdotTjD9AEnREFfMX6H8ecqrhZ4i9iqhGb7Bn21bRjpVZWxTbDykVKzLseQizLFFG22Jqc",
  "key32": "2zduwg3zgVCuBhiYwCkJvrtF2ir8HJoS3JcW6N9viyFJZ1qbwwXzRbMkwBuHde224NRvbckdv1ooMXESTmBpg5Ax",
  "key33": "5pCW6ZLaR5BB1jaqzgL1dR1joakiW8EMjRpVxCZCEW2GQ9fUx9AHyp6cvWt77afXx8xje13xTCAdUVeWfPvm5kvP",
  "key34": "5R7Ar5eg9WunV89LTF2DKDzV7wLEoLqRJXzdaHRkFmyCF7NqnjdBFooiNavTDKYML41wn21Y7ig14afyXfrXwJak",
  "key35": "2XinT8eTZMbjNXJwRCYxqp7e6P4e1fWP7EqY9Lf9inRhWPGzNthZrXXmetC1sLQK93pApkDdMSmZNk1WK4pmF9jR",
  "key36": "27fMkkmtNM9jp7mYhax1JUgtB9C3pjpewSHikkD5krd98s62PVgUZ7ZyZHTBjxGX6x22HAbXVxNhA5NwdgSgEnqo",
  "key37": "3Y7j6BY54sHpfC53VAbWyDbUBRRks4p3RBwZxyXTeYhyWS9J6gp1SBT7AxW1mscuZa52RBZ4Hky4SJXXbT1QSyN2"
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
