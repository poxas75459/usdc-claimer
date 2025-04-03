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
    "2onZEMNi37na8VekR7yGSFP1X2CWzC5SexYpmcSizf7ERLEyzDdBKbU7tZqzBW6SbEWkP5x71NvQX9e7r9oRUSgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29YQzBiED2k7YL3tNq4jnDUzHXGF4Y1qquCpbBnQaVojKVqZ9rkJmj9G9g3oMVjWpZBzKeVr6QsgmmKLCqpkCoij",
  "key1": "4QS5tTTWG9JWcPrWdSdj2VV7Gm8B1MRTXPKmQeRMJua2V111PNMXZh3nQ8ACcfCrKXC62cFW2aHM7cyaraqLdSMx",
  "key2": "4zqfqq9uJDkmzbfH1psKVGE8tWakJPSJtvFmqvKZtUkPaXqsHHWntAS4xSffJpmM18Mgc9qWXmZ7wqvBHq135dTk",
  "key3": "5NXstP6jAVEknuPLaTGrZgQx1YJJyoM3ew4b7mpZeiPxUAZQZvXFspL7qZ982jMpv2bSegRgqud3v9dWZ7Co2s54",
  "key4": "2TXKnqAzFpaUaQ3kYxAvgSKwafBQ5SWHz9AQhM43CMQVvPBk8w1tMupK9nks7Ly3TWFHhDsyqf2peFk8cUgNePvd",
  "key5": "Raugr1CEH9ygTS2qd4S4LoNBXGnqdPf8Bb1drv6pxFSpQTzBfoQmQCp56ttHdKqqjDWFDpoVew7K9QTbusiHMFK",
  "key6": "2notwcJLqmrnMi2Wz6uDpJFqB9EKkaEhYEJjmt9ZqQbkmg8vrVngejhKj7PZ83Pi79sK8BADatEToqyknhaFgmat",
  "key7": "3KUqD1m26zWgsi3zYLop7snMuNv8p7wtJpA1q3bEw9CGQHU5guNX9RgPBib3vrxGG8LNNDxY62EEN7VjKk4uLDmG",
  "key8": "2wa1bJbrcjNgjNswAArXVxiorGZiqQPjvFpdLc6M4V9bo4tRAoDciXpccqr2ykqUmQCA27FK8EDVJXp2j4QJWx5b",
  "key9": "2wUsXpFSWyctmRVRt92fytckfiLsSLsv5nt4x49KXTjiqJWG8ZNAUNPJzn5qnfhtSRARBXoPYEGBXLZnBpoWLAcB",
  "key10": "3eBcGugkHZTvZ2q2KDuMTun8Jdtme2oXsGTgDSArcBWAoKJiS7cCns6FyLpwb9VH4wfN7gyhhB9FfLsXXA2Y6fp1",
  "key11": "5HRmCs5Jug7Jzm3D9urRnPLb4RAiG324wAA2HM9cauqWs6sccge8sWxSa53T1AHiKQmaEw4tCSLXzwXKhQqDBGhF",
  "key12": "4EvkRP8oYVvvsXAVS6xMHZaSLn2f3S8tsPFWvNdAhgi3zu3DRvLMMMiW2NjaQsX4SJDBzVDCsyPHb8TihWkNvcn7",
  "key13": "2Ldw7hfnFShhDX9kYXNpz3NtTwwKLNBe3zsugk7zy98WS6BAJwkbMqpCUaQqkLajuTSi6P4dKuLp9SQmsGMwUjC8",
  "key14": "4RzwmMtazzxfTHaxatwhAtxZySaRvvS1zgLMQmM48MT8n5EfA3evJz2cd4RRbXqvnxBZTiYJfmVTPjg7Nq1hsFZB",
  "key15": "4wNCQWY8WqtwoXqDdWrFjrNL8NC7ekurYfUAan3m8M4Xy9i4iGiVV5AbaABhAUMQcH4JTbFx13mvcRTPwrodjfbT",
  "key16": "4tFbkZYLiFzUZHNLLA2vvrnMCXRoW8NBAj3gjYsNCfpec8PLfytCaVUxdxzyVFuT19oxPLXb3Yt5L4onpsjk1ndi",
  "key17": "3tCnRMCPERt1wWCF8cCmoq4Z9T3KRkiiGVRjnRX87XbmHgYLd9Ys76idT1RaiR6qeHaAFoh1trumH8saYkimRcXN",
  "key18": "4yKs1erwcVM4YqyKcc8ThhLMYRVx45uiXzqEKRoXiLZNyD2bbbWVAmzc3QhB4M6dvvep3se5MUqgiewUNhNy5eUT",
  "key19": "3fpab2Mni2VgLcQtBqpejb2cJXX7oxrJVURQ4mbiRNA3DZNLzYoRdgGad2KPXF92c6mfkJqoJzpWZexGJNwGRfHn",
  "key20": "2mmjGFuiN3cwX6x44w62wJ6n9kPV6AGQvYS6DKTWnyqzQztvNXSJm3WUjgGRfz9wFkVb5hmYr5eGEFZL1iRZgqw4",
  "key21": "3WndCh47fFkkdX3ViJ4EoSiRGtyu2Z1TerbvNcNcrpsDej1WU2xLLSiX7EWyXoE2dSQMkJEKURVcogW2VGWqxTLR",
  "key22": "2yWk1touuEbSFURqFNWZPLUJJaGL9qxYoATBoaUexPLp9dNYxV8wjkxeg3h9Gj13NFhuQcrne3xKPJuNNQ3iEJjM",
  "key23": "2hiEo8rWX9RCGaRcJGHfeyVd1bNEVndYyZj7XdohscHcA52ygL4GzkF9wFqkd6m74xPGmhKanLfvTVZDCT6Sqc26",
  "key24": "RpExLueKazZXiLysNTX8L5VbBYhcbUb1oTWpHwDH7gxxNttgEYZdeFA4jZD6j31a5yor5z3K5yRcG6GmF1pTGfZ",
  "key25": "3YBCYaEYNVKd9VG8kFXNz2AGuuP4rh6E8dmXTwQr2pDbZyLq3EdBoqwgMdeJZQWRfnAutgP6hxJQnLpEYpSBWaiR",
  "key26": "5KYsEeTNtoTPcJ5iT7UB8Z2uC55KWuYboyrFULdiKPYd57wt6LUCmA7xfxKhTeMoytBgWSQxtuCP825Q5NsyAu76",
  "key27": "2y6ZtUMwVFbfKNUz4CLbzzLrfQF5SUEqZ2FF8td73sXKMGTiB82AiuWigjuGUz4msWNsThCc3zqqhScwGjw3opc6",
  "key28": "39xdyzLgEhQEn3NCJu4vRTsMfyUKxmXi9xEVR9ukwqyqjrhZRrGuDvGe62xxyMQt9y7BtPSCGp4J14QqezupQoSr",
  "key29": "5f1u6p7SdeLd3wn9T7Vsz4ijTtKSdASBb3dpUZgz2Bycc91mA9thTPaqfCNTeHEy8xQvQ6p3yGJGtqNTTPhb3hsh",
  "key30": "3QkD2izkXBgjrWxrrNSbM21YHCR75gUorpj7JgSXHKVrsZFdSkDLvBTgySkUzdx16TvXuF68VRuEsDqVf33MtUaW",
  "key31": "3uhJ5AN4P9xdANrd27GxN8dBZCcJqmhstEyxeWwmd5ovhr3CCfgst4dxyec9syZ3QZdpYC9WocKqQkC6DHn3b4nx",
  "key32": "2GvHjXTaQei39J594pQzgDU4mYoQyseT8a3Rg5Q1VzY4552WwLojBEBxxpKGMGmvh4f648gmUyRPxuXzQph9vuyz",
  "key33": "4sV62RUmSBLF4t66PZtXKL1NqNLYahYv8dG23tgPSyRsNjp94tak13WMH4W1k34u5xp3Y57SuB6tTyph9BarKFAx",
  "key34": "FYPfuRDYnJbrMPaz39jTob8m2sr2tqv5PLACqu2EettRJn3LKk1JWrogxFayHVHZCnEBG8XpVTWGZKw1pwwcoXk",
  "key35": "35gnHSqQJkirVQujypdfrVbyxtLCXr7uevvk4hsYvs66QKXJzCC9RV18MGe4pdsYv6HMB6jabwjSk2RsgNRsfZa7",
  "key36": "sr737B9FJE4eL1dB5wn9xNob4VCFK5hDU7XwWbJv7iD1j5vjgDghjKS1c1i9XTruEuitaAAVfRhP5tcLZVet9kF"
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
