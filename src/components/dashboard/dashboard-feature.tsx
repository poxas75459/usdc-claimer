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
    "4x6HsTmGd3N1d4fmD8fBLKfVtVNrgpK6vNEqvnZEBnsup8VcKACbsQJedBaDuopHz5CmN6yqeCqFmoBg3xCbze7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WGtDmrB8pfHFZ2QnerbQEW4HB7dQVeNr7BuEpgZkHG9YADKqM99SdGXQ88YpuTUnTkwWdepqWhJZVFQaNrJS1Fi",
  "key1": "49uvSwS3hhqQeFZoTu7HHF7tkDTTQYmKMNsV5TFSqejSTfh5ax3aTv3iDNxgnMMhvhkPhXF7b6uqoj5iSqALuPc2",
  "key2": "Ko3N7KtaBKwYLPXJRbLPNpxMUpvijdDptDajsw8Mz8nGuugB88HCvkz6q9fcppvPQHGruaybjeH92RdJ1gA19is",
  "key3": "2Q72payc14MQQuDRiPJ6bpss1unTAGDm2cY3bdP8X26pSU3K1WoQPfUCnkr2Y9HWFnouiv9G2EnondedvPiYsERs",
  "key4": "Nox7DH2RXS3V7gGa1KnHvdDmY9qiwhAzFsQ98KP8qytNiqvCyQnvpAQaSis6w72gdbySrftFZrWiNpEjpjYV8sy",
  "key5": "2JQzX5vQ2hkDHA2ukQtS4zuPfXiwcNSDKc2TWWQkJW94DYWpBoY1KBPXMkQgjhzT2VKiBTpt9NYyn6dkTwZHX879",
  "key6": "38Te8hnEsu2Pd4FYd3WSn8XfsTE6Tg7JaLd6MAxGYcF7ok9tvqx5R62Sy5V8yZt4Fc5DivKzbWsLwVUeChV6wDpY",
  "key7": "kjz4rRZZsn9gXK46cy14ZBzk6wcfQ4GQgX7WqycJCcyNZrJNVLXA4nAUh8RJQdJew21Y2YfsgnyvAAby5CWXaJV",
  "key8": "43YuC2DLnWpL6tTLbS1o3TQ8Hr6DDUmRszvDNai7rEKsCxRL5nRdBqFoyfyBdBN4uMJtGNUiUfX2xxbZ6JrFpo4u",
  "key9": "4PXN3Rov9ko7K7EHEi2q5TghjsEeEFuvA2bNqZx8TTwfZFGRuv5YS5tSH1M299ZKqh19DA5S9GejRimj3tCKH5YG",
  "key10": "3ru34hfn87fnqUy6zo4t5fY2XydfxpPX7wRSj9Nd8CMKiTHtjnLPLfXTXS53WbJdEKn6j6QTqHJvJub1dKQVqi2Y",
  "key11": "2B4J2a3NuJkE1yJvcwtw7V5eowkb4zXAAjxV7j7dAGcuWQiPagQB46UBco7WdLHFGWv8xCji48DZXPD1y3gGN6MN",
  "key12": "4iEAuPzZi5nMkCVE44b53yvWjKvbdw5PsLhnyxhW1ZtVpp3spdfB41aSYwYYZQ6YyKu9G7dYFkHtu2twKEefvL31",
  "key13": "3VKwqaFkaHsNB6E8GPZ1z3zoHjmunDenwmbGxHFFAsyM2D5ZCeFfGfehGRutKmaoJoXqrotS2u7Por9H2h3HbiZQ",
  "key14": "LoY3oTzDZ3Aqvmrw7Tf1RJmVtzQC5nMt2EkZdDom7Yq3513HHVxEfxeS4bAP787u4ARXG1qfVnh7mDgiz42q7th",
  "key15": "2syMzE8o43XKTPem3BfKbuz6W2Lh7ZQkDsEkqw3MRMv6k9krczxUVvfLMBRp9Pk7udg8MQi9zM2HSgCjsVgeHWrU",
  "key16": "5Gmw8tRFhuoMsKMvWz6AJRfSygc2WGJoSMjSERN4vrnK9LVaRH5dHq1qkz2xoR6GsFfnge3Katq9679trFyKyef3",
  "key17": "2hAXzpfzF11ocqrQWhGxK1VSbeyeiYqJkuxtQdCLSsKNmRCTb8CWn1wMCk3k7qrdgafj6HaHPTWJtxTYgdLGB2iD",
  "key18": "23rB2uRefUbETNESucivQRAZEp8Ao3HiHWSonZbNZUmk9V6XFByYXPRLp7dWN6cDvNycukhY5o3Z4JyqbyQ2LoCq",
  "key19": "52Nh6bEXUSRYCKrkAd8LCd3QQCY6jKcgufEh2gj3ndaMs76tERXBD57uXQe5TS3BVoPSThGqCkQQ8gw5UHEiewvy",
  "key20": "2XFJqk1uFT3Y1vsmLaGVDoMpw2kg1EabF6oSJQVCvNHUUNMqbHLn4pqFVcYhZUYfCbdrrxchrxdsCxdYRW41hWKQ",
  "key21": "2kot6iuGUhb6ugy4aJvFQ1WgvGa18zbEmAknXQWwKpqaa9xc6nwwsMdpUNv4AtJ1StqEK8mejT6VNAW2JssgEmGt",
  "key22": "8XFDf5BhD7a8xFCf2XxgBt1QyXNf1iDMbGutNwq3o9xZ98qTNr3CENA6WBaMK9mgzhh5BNKPus46L3auWYW3eNu",
  "key23": "2THR1dRJzACpUPHQw37sNtDvEgBM9N2AukswV57yiXYWTa2d6xqg9BatwrA4tBrotJHTppqpobExzedHvo5pCDQF",
  "key24": "3eQ9wU28dzaMY7QxBQea5w5qhndpB2iZ5V32SdpdPmT8ez7EHpJYjHF6HaZZAQdQRPxJ1KKt5aNx4rorfTFmueat",
  "key25": "4txdMLZmCMm1oJJJjc9EGGTswDBK7UJXq2cfE5VYfms78Nzm5t6qSAdCpwgCFDFLbTKUyo8eZ7XQWPG6yqPvBgRK",
  "key26": "XkYdomD8aFsftbqYwb4mWWDdcafoo5s3oZBqVuvm7C9jJVmaJJ3rPdzzuYgioF57d7AmwoFjKhHTudPo1166vJb",
  "key27": "5Kmb5xA2eP1mdggS1E78HCgL2UEVmd5hKW5B7VmetqU9ckQxhNFeUYwknmdoVPzJ3Zeb7ajEKeQCQVzA6BMULC78",
  "key28": "2p5RFpvoQFE2TjuKtKp8v64pQQchhqWwM9RYiWEdHJVbeMSpAvrmTrExoFkNxvgb2XKX2kGVS27F9qPDMpFC8KUy",
  "key29": "4jyKuKkQSUKmcshkjzDq4ZpAjDKq8DqbnTHDagrvXAz8L5KGN5LxKm5wRCCewUfQZ6fTzn8eDykf7GYMc9RYqgBD",
  "key30": "5vUXvccGvit3u56W6Um6Xt9YdtDgbDziLaUjUEpC8PPFdyzMLFEve1nM2YiF889pC24Ao3iZ3jTzDwHKNyZYuTew",
  "key31": "5ZfnyvSiRJPM4HEMRAH18fFBsGa9qq9jccnvCaqa5foou3QwMi4JDPbUkb35y13yXc9wdRuLc34e4RDAf9maqkXq",
  "key32": "3WHaE8UMuhRF6WT6xJG5kz15YUzjbCCaqvXQhnXC411HeHop27AYaVjmv55ytXDH3PeFtL44suQF6JdVoVg4hkBy",
  "key33": "53kETJL7uS2H1v28DUDLE1zG5EVyyRYA4hsMH113bHGskcVBA5y92LsEdbNjk2HUBCumQqT2g1BxrSQDfNZVxK3h",
  "key34": "33mcHz32BJm7YEcsntU4LDB6TQBqViTuBQF5PeQ4dApCKLFdLVqovAWdD41ysFpBZhHfpfuvVp3Dw9PtxfvTNYTU",
  "key35": "5VVf7CXDsfHVhMQZeL98APPQpQH5v5YsrTvMQCvYdhuAD2rqWzAAz3n53eyMrajJZh17ideHzpmuTRv2pC4jqMjb"
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
