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
    "4PPKLgNjuKoBX3SVY8Wmvkz7cJXLfiirScGtTbmiJa7aDrDgWfatsh9wDfUykLa3kfU5Q8FMmT47V7HbnSV1i2NY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5peY9hogsWJNwjLWJ77C7DQLLn42mQPDEgPUmCEhssxoWk6jH1YEYRY34ZWnR11fhv5AH1jdvyCxyqjcqjizYa94",
  "key1": "57i4cM16T5tHdbGwHieGZv4KqjdHkm3V2ZgptTDwuLzgsBy5FDEkqm5RWemv6KSn2Mp59pvueBd5BfmCdWgFghD7",
  "key2": "3WwJyNNp1kwXD5TUtprQY1BForsDgjRZjgfJJYd2EvHKdirgte3W98X7dU5ChvyonoyUCeht7wHemdcbSTjhsVP3",
  "key3": "2V1oWjjg12AnzA8bNBWWwdVWP77FqEZqQEWP3eZokqS5SwadZQCa1JDo5GgDZFGbR4M22Y3q1UoH6cRn5ekMDE3c",
  "key4": "2SLBMXuwNF5UYMpu8fuUiQ5CZCNpNPudAfc8XKX7E8Vd4mZQiGiNwNSADRA9gSBm8oKPZomYvzJXtTjpMVhNjnok",
  "key5": "gGo7KDFHRAhRr8XHoNGT6RBE1LvfZJ7W28pJGa8hqnE7QM1wAX4Cti75i9zWnkMq6H2uxnPu9t6Ps4RLtuWpWJh",
  "key6": "4kDVA4wQnwxX1jbFttUwS5HpbsqSdL27GfAs2MeCu1P6kveEY5f21ArDRDfBDnAPPAxQ7uvxxBRqNKn225ZzEg3n",
  "key7": "3GBsUhewrZ7xPTotCZeaAGZB2HBiFfKgofgc1jBTo3VrGx24gM4Rpw5oVGJVN1rxqustaJVJQr6pSoKfrMorJowP",
  "key8": "5qRjrHASdoSUFttdbrLPmqhaXoqKJm1xVRTHBJPPrLdxseqUYgpofxHhaLgAcPCHUUQ7KbG1QyodEeRvFK396JYi",
  "key9": "2xpCgpjVhvjADC8ZZ8cv6xrYHzp1Jmt7ucTzrs3kiv6WGmxTBqhGRVba47ZYtAueoYWgMintMwb5rzj8E6fw2xGN",
  "key10": "dVEv9ynwjDiBxikvsgcSi4ypLYPnykwPYJ1B6NKT7UoBGWBxebDCtKAo1GkNyA41NCgak9LLUBtuYprSUjTxjts",
  "key11": "4qoBtZCmvTpjerKJUcbSbutmUNN3692ACTsJXXiJKp23NCMyXrMtpXZEatPGepY7CDmmn6hC3PyyJC2bQSVoBaoZ",
  "key12": "3caKpkBbJZq8zT3L7m4noAX7igXgeLCKqY6Uq6J1wX3oSq4GjvcgpsyUZMaBmF4JhUSRt5YHy19Eaj7MJGS3jiAJ",
  "key13": "27yth7udZnGqevMtMWKen6RUKmTbS94xjtnLgJc2zQRuDvBypcBLJVCdjgZzf6cV7pgcSa6NNVK5qzqvFvU5uWfA",
  "key14": "2jbvMXBeY95TEMFmDczsjrW1461TZ269Tzee3VFKPZVoUmhKru4ybisuyoyX4ZEVsAsaFAXJt3MCdwxwDfKvSayN",
  "key15": "2GpbbAb3HXAmArTu8s4YyFexyHizScc54HZBJgz3LduoTbk7MtTUitmrUYC13kMQEDFY2mw6N1aAGuYpTvBp9pBB",
  "key16": "2kKDdSWS9fYncLEjkAtosejoZvrq2UCWFBqLAqmr4MWAMpawjgmTLQh5D8eu5PcVp3sLxLJr9mkmAtbtDHLAExwT",
  "key17": "58SCfBHuSo5rY31YKzsrrLe8rpEwf5ehJLasKPgriC5UbSfJeGFcnfkFS5da51nD5Ab992hBNqHSasV1gxjJTq4Q",
  "key18": "QpjqupsHFf6kxHdSUpia47mkcSkvwurQxKwrhHpXBijVWoX1d3qo2FeJF8bdB6AqafQZvXbwLdLuVYhdz8HpuBe",
  "key19": "5j7JY6eUqsagYCNFXME1ydQXbvFWms2YaHPJzQD7NquJChN4Z7fdzTwvkaCfGWNmkbp2rehC5B12AhzveNPPMeoV",
  "key20": "4McNmVQkTE5QLh8fYoj64BtJAi2zfFHpRZhf887FvMB78AFCRYDbEUHmWQ4m2eWrC4n1NdQeKLhWe4JCqGaSriN7",
  "key21": "5u2F9ATdxs66wGC5e8Ad3hTnwYsc8FDftP6Xqgv5BN3hEtJUFkbgLWaPNHu358Yqe8YMqK9xnEi8dZ8RNZ3mzXJm",
  "key22": "4PuTjKiWCcLoTX3YiV9hPzQTwuDZ2ZeJysEnt5SLE4wrsYzn31nu3iBMRpDGpLp2tEmaJem6LfnxdBejPV3UoxpQ",
  "key23": "hMScSBcFcVfFyVHcyg8R9S79pJ8zLR5amUujapn5vja7UiPnzTibQ8FXxxvDJ3neN9Bw8uwdCnb4dYTrmZ7iG2Y",
  "key24": "2rpLSV31hd8fU9PMzCcecPSd1cVoMHmN1G8CiMokaBXhxymHQ1m9znbbAPPGFfV56Nbm91aCcDjzchJBHTqSHn9W",
  "key25": "59nsKi5C7oxCDUtL5sMDmffLVPpY1z2qwJBgRBb7eTjSKTrLr4z8XF4op7QRptkUZsezSoKP6x42q7kD69qj2yfc",
  "key26": "2dUrVU2bbww2UetsVTf9UD3E4SDxpmo8fK4K3FfXFAj9PNG2bKDktqszCq7u1TFc81rfB3rpSQaZFviptrbPVBHb",
  "key27": "5sgSTkzP9xn8kgUk9gctuT4NCZGqGpqVmYbxkuWPzouzpFiDJLnUFRJGiJE71ccSubaRtXTkSbiUAve9GgCBLKzi",
  "key28": "3wBPNBCAhPk8tbSMKq5uRPGwg5bN44DqTju4eQqA2fZayjUm7cc4pSSuYiXQjQz4RkCL3QvrvgXxEyrHPk8cghzK",
  "key29": "33YMF95LFztd8u21xaDxR7G27NQ4NdVkEJ1EN11EkMN1kaSmQ1dQSispb2LN5PyC2Aj7mEVAJ1AXMjpSeEs2XgkS",
  "key30": "pwyt3eKKFqb4VK2yrdaMu73ydFJimjA5kbKgBs7mcgAP5PpiMLKp8mdJpPfL4jAkizZTFBJQr8TyrVSyS9TMrjQ",
  "key31": "3c1t44kWB7Khy3rXWLAgB9TMHLsGeNRJ8XMJeFVxMc5wa6xD5asom9YuRwgSeqn5EnEncCvbXgknpu2asVCSRhEa",
  "key32": "2WN9ac2iU9UTuQjZ7NLYyigf15wE2j9wtC4gwu8saVGK6y9HudJmSkV6xeRRYoacefcj8cJJB6bR3pahSXzncr28",
  "key33": "4uVBrHcs4ghxmffsuhBUJ1amuPj7j2FeNJ1VRi3pmUre6BR8VW2BDqCVhZinT4z4KYPAt5qNDAvzBQkTwDTFzksa",
  "key34": "5sLLjZmGpTBUHgxEWbZeJ7beicmRh2GKQmg9JBDUoAA1ViZWF2MTJqKGqQhx2vUT6666FztYLdU99xRMqwbGzeaX",
  "key35": "5yQZLqZyhsJaxTMwWt7CFaQvpi9bezHz3yNvUBHQ9yNp6z2aXG9YJVQAoYWm2vExxsLbHHAGzSbdH8h36Hquz34D",
  "key36": "4t7RosWKs3m9Cj8R4guS5FbYByiLV1ahoN95uUwYmvjrWY9WJ2PwLXGBnGb86Z93c9P65d61vwF3HGzys5iGXZd2",
  "key37": "4imJke7tVfWTfqHi6xdXHAeXWjdRXqX2zSKLkpitDm2sqz6NcindWKP49m6j9dhza1bmpj9nZKXmLrWxyKdjLKZ4"
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
