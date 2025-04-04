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
    "5JjJnWk5YMeRc9pr6L6upLad1A9zpPHrMjGaJF2jF5UVU93MCHopxcrXgWa6UBedKckQ6tMugxZjMmevckpnqyCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "viHAkouSY6nJ8BhL3pr3o62ffdtcEtSqSmFZbGhAGFxmJPDWuRyJXWPoJxCFKYH5GDJVCxiNpwQyGD435gSUhCC",
  "key1": "4hnvB5Zsk3GhhMPTNUVN1kD7u4umVfeXMoWMPDC3yrBS74BJy2SSSZvmDT4EFuFXY5TLBsxtcJcosYAZJh78PoC3",
  "key2": "fdnA4MXHHevCcQNiikjSUBMAzwQ8MxJjjCMY6udf1mDrFY6c5q3MX3StVdQLjvend2PtmNjpyigVntJh2cK5a4q",
  "key3": "65XMuYCyAnnQ2XjVacMZREvkqZ9EnFMJoZuNSQ2h3EKHvwg5s5xxR7ePeaNfnfiMzMTp5q13xT92XPYUMTvHPasm",
  "key4": "4fFKifuD4NZsSVri9exw8FfBwGqrHMMExW7GKPcv8A8gYJCfFqShcc2acd8heg43nTYC7Wmxq26u5KD9K74rBZGg",
  "key5": "2eGrCDXhDRS4Y7bZxsKw34jheq8dL4UhQieuX4hQsXCBbAMQjeMqiR6qLo23tf4yQet7Xhy5o8GRFAwKt4gEikow",
  "key6": "45BwkczPZAYPLzNocxFXVXna6g4cjpa4n4c5gqChfrLM7p1CCVtNA1DLxMzqehuAMXWkUYL1K7V4KzQEkwjm2F27",
  "key7": "4ZB7Dx7GsXJ7xAoyP295zAa7qBj22CpqGqcE5e8eV23uRtm7GBXL9SnGmckgfr4Q8xTcVkUdx2TzbGfG2KGMzwRf",
  "key8": "3ZLnAG32D9M3oyqBRgvnV5amtsqCYzseUtTR7a4sbyPBAsjFy78cr8jVFmpdC7Pm2Aoy9cB5p2t1pLinu7F8U96U",
  "key9": "3eELMTVCYpyMTWSxAbBPDFhubCfevB6VaxkvAWVyeSkfxZgNJgsAfnpi1EibESiMy9d8iJAyHDvpQ35312T5t5f9",
  "key10": "3GTJTkHBp9Y4HmZhTwATeUdpKvhGwbcDpMnQsb39egu3YjawsByyuKAA95ZtQVjHtqFqSzCbNG2V59QSPqUfDakb",
  "key11": "5E1u5Ko6HLToJsMM29S8bAgyVCXDiecJMZGVsrojXTvDBvzwtrQ1sSgtEsTD1yGfyFdR7qKPuFiy77rKFDFnnCQ2",
  "key12": "4twGN6BrpKcWvRengwjwrPoFyQpDYyXWtpEpxQxcp8okSDU8tEz17QDxxRohfqx63SrZw5RHrGxXFYkQ8TEXBTws",
  "key13": "QtPQ4C6gJYBpdr3VtvhJvRX8w6jSnRB9JNby6QCJpN8MToQKdD5AgL6NeNHgVkjnJBc2YiM7dFro51xfapX9ZfG",
  "key14": "298Qp4vL2ywivsLT9r2qg63mp2Bb6uzhBukYTGXatQohzDHfgeFTPsYSzt1ep88hh35Ja43PZjjakqvddYbZEbYp",
  "key15": "3hXsFBRifqtVp6L7Yate4i8yApGvjDLP53wkJh7tRLpTjyPFmj1cYCS8A1KWSGLBUypmbiSMQ2AJKwTPoDMvi6ac",
  "key16": "zcG6aq6LaF92aTs56kEwEuRHFgBwrMd3reXf25hAqU3o37cuGiKAyg2HtwG9KUEMre7UuBDJgrmMqTdbb1ZNSpH",
  "key17": "4524FAoiP7vDv5MrG7VbpGvi4UV7sgUjeCNthmKnwssf8GhQnA2s31iegCt3ELDcQEBtuuWkC2N2cgb8ZpDQKMQn",
  "key18": "5xv1zwGYFjFL6vaDs45oVKqczyyvipKEeW9puKyvuYhD4C65seERhRL672sYGP8UzpfmHDMAUdmZjtHAYAWexUWP",
  "key19": "5q2PxteK99k7GZRYsF55RHjTzMxak8nLqSM1SkhEBUumv2Sqy3TL3TBi8JeKRa6AtY7DgrZYtP926cakdqRig444",
  "key20": "4oUahzRhRe3KMzryesmPoQwU6ivmJN4vgeP6hSj1umGq1VKEgn8XJBhnD26MAhLuqAuhVw6EjS7xmPKBB7dGv5sn",
  "key21": "BnqKYB8HK3vsJEYGvUWBXARtPPb2DcB2s3KQxgAPqVjgJNHpn13L5A6Lk9J31AsJPRR1MpuzSEyCrJLWDhPqBNV",
  "key22": "3b5VaDGCgF1rWs6WjP6iryko3SyddEdvsfUTH53LfWo6hHbWTnzB5bR74v3wKPxeXVx3x5T7HyBMnPre5UCUfBsd",
  "key23": "33a8MhP9E9SQi9Ra6rQbppwtLC2BTKDWiyqUheyVSnuyL7qRpVGKXsu4rVXzZpmJE8BAszW1QXttVjohYfbusQTr",
  "key24": "5kFjhWmrbiW1KcdisSUiYxRKJXXd9uLk42utNfg8ifrLr6NCMVEoNM9qvB782oLQTSk7xDVYfc58Ej5VSa7HaGD2",
  "key25": "62Y8LtCCr9PPakedYX5VxMrw9Mhofk3hf8m5QQhE8fXgMRAQ4TTbaNRg2DRRh9vd3RHrJ5ysWUgby6GFXWhyWbWn",
  "key26": "4qHr884C5tZRE9MivRMYcwrHvVs4rZSvKWDVQVrvgzqQjy6UXFsbx5umU21rSp2oB14zxkGZFd8hiV2WK7gHAusd",
  "key27": "264UmvkBqXzuwt5JXzH3PhHEYYUDcpX5cJQifiRadumJYSP5o8bvjUda1UD1ro8Lgxdwqc7MyGWh3P5TP8nUg13p",
  "key28": "2oK4mnaAw1hgE5LxDj5AuVDZvzkDuN2FV79syNNmd5V36tB2putk1u4o1cbwMBb9kv28cmKYAqPdZuteyo4ANbs6",
  "key29": "5cLZrogp4LSp5PUmiaFZsEvWr6QZLNo5zig1ai8fcrHTgY4X3W8jMpdy7PZ5hWzcNDHAmnAyBSUCsj6nDcN4gDNr",
  "key30": "53foMmTiS7oeV3Ekf3qi2yVZLB56opYSotcBdsuT14Xw49MaeKi9fVLaQv2kpMPT89Q7dhSz6T3cySC6WHLoGPz9",
  "key31": "6SMiQRmsgsxcQ2L5hpfyfBkRpxQEqxVWyeQwnmayvBkgMJCoAD6YiKPmAhVgtSXrHMhMSetv8Hn1E18Qvqhj6QZ",
  "key32": "5gKkQyoKogNrScgoeNESP2pnv7uYbt6oEWLHkNFZ7Zw7Nq3zqnWNktmxEX4evkVCoajZVUCPcMUGP95YSND9GVLU",
  "key33": "jufAVvPUuKeSiWjCEKJ8ip4temeFjz4hpyEELubjRtwF5Qq8dm9UmDvBUefh4YQcoUaDxf7yiyPJXKamPup7bhh",
  "key34": "2z7UziMHmn7iTL3DPxsw4Lw8EVA8AksrESpdWzmfoT6rPEs6oW4FyzeoEzNujy2dqa55A6NRB5LvZiUD2j51CtJC"
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
