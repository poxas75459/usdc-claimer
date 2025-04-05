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
    "a91iDhuyWWR6cwGzW8xg2s49H2Fc8HxvDyxcZJxfRVk4zt3K8bXdYunppUX6jFyeDXZTiAF9VMahUZFtMuE2FPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hHeGQWbknxLFhuSywxVGNjgLoncDi6Dn19oVW5ENFXsgtNQQPoUF4WZD9Nq11cE5XKf7zQNgfUiHQWD8XY6SLck",
  "key1": "2NtaNGFYk9ZKbrKm53pUNnR3E5BaJhKqiojcZjaNoEsoYJYeVj1nqCqDkLpWioztotjpcRCuUsExLAMR32XvjrWJ",
  "key2": "h1LKUH2zwbjP1DTTQb3a4s3hMpEuM54YZXvqztkfqfWj4D8y3bhzpk9w1DgkCstSYUMJCHSBrVZ6ZxJnFbLeSWV",
  "key3": "4rBGoifvD4JPyk89YimQwBNiBwJv9efxH8B1N4Q273GRbHqwWQQriqjtRWjzrP21kXTr4ra6Uhc9WAfUg8sEjArC",
  "key4": "3478noDaLTd4xC6etxXxopfBkBFuwmMedpAKbnUVUNeWiTH4yejZwQnYAaxGwsFVoMBWGs2NRdw8uk7i8cjXwKAC",
  "key5": "5aHaHtncK9gbAwP2zoW6aJpzBrFRpFoXfETbEcth9f1ZK54MXwwAvxXAYLQfXHh5yLDAZ1HiVus1nJgYA9sP4YeM",
  "key6": "2ZsDNFnLmv5wV9zHVGu8943JZ2e9HdVe4ydVjJvzbuTuePMvNZtj64JRHx246m229Q2Uum5LRtF9uKE4XDjUPwfC",
  "key7": "4a4oyEaHr95mbzoymAVaamofEY5FgKWF3ZQpqEYdeSXvGbQvhCQQA4w5fTNHBtnKjBjb8yScAGSDfCxie5pqgepL",
  "key8": "3StCpdbJgT9LB6apAb4GQzgwgUUDRuyZfuDK1YhzBu5b8bdNFymkapkuNAJ6tHGqv899V6cWFQWXiurX1bnuNmxD",
  "key9": "5vF9XgVkkzqRfXkj6vxCQRFRZN65DXY9Wrj8mnfQBJkEPYsnJJPMvyNhG2pykGjV5zs742VwCzs9tFMmmA1bAmvX",
  "key10": "6vUVVfUfkMX9kWQ4V5yrFtuCQu7X8xBuNupRohM94ZZJKhqH1Yz4vFQWujbkW6cPcCifUn92KYWfCUK8A4QtP6v",
  "key11": "3gpxLHyexiPLJUScUNcuPkMaJ3yRZNRsf1hgmYwAtzipK5nf32skdLnVfScvHZ3eXpvDsRpamDaDXyaNVRiQNfYp",
  "key12": "4V1Rd2BiUTiecz3oHyZtNG5p9xVCVeHieyx6MhYuo3pBPYeMfmiXzkMnoyGEFB18GNHNr9thWt7zUSnY1bSD29qH",
  "key13": "61K6afFQgxtZSz4PawGBP27Hj4tBPcBxkNfFwUwztsfXJhrMvnLmQ6oYuSf5nqGWPY9ei6UXgH6R3K17qgeJSSbw",
  "key14": "SrY7yb1vNdCzbhJSvgVKD7p2zU9GL4aFts4VXhnnNbrfDnZbMHwKb6sq8CmRrdG9zbQ3rnVnvBorcvPTCgjqnry",
  "key15": "2MaqdZvcHEcB4v9zuyrudZM3v2tWi9Wrto3hKoqXqZfMotSC1yWfC1B2pt27URibHyeCv1uoWaYdK69tqbLEb4gv",
  "key16": "4QqXXKWJkdVLeJJizR6xhhzefCGdJHC35czpsDi57zXUu7gySm9pbZSsVzzbZUhdqzw1Hu2L86kEeuwouhb4ws2f",
  "key17": "gwkTVkTbYW5RUr6sRuxXu6H8B5U7q1pdSw2RL2ymKja9d6sWiAd1cD4R3JAerepvoMdSUvMa9D3eiGqnTVx6qHe",
  "key18": "JuAzDDf7ex715GPoQj4cquW2bLvHL1kjNjuTaQfDKxCpGhCFt6RCaxBAHAZKkZAK8CCRVCN69tedrqc824HU1MH",
  "key19": "4xxDEwgwAsDGGS4jQ7WDsCDQN3pZhNTd3Msu1jAnYdqKzLtRTUDwH15kHqYGnT6CSVxjoPvGs9LAwGfUnnx2YqBW",
  "key20": "K9yQQQ6Kv24cXPSFtfhbRQHzTLLEuuVkyLq8oB9wcJS2EoY83pmsxZXbd5JFDjuHksBKzVStxmX3umVZpDQi6LD",
  "key21": "4ydukKdto6USdZVGMdnZU1WY3rEwkjuv71wTZFYv5nLwSb2UEvNh6E246uj9d7QzvLrB5EXEXARP2LBqgGtopGFN",
  "key22": "5WLGwUX1h8SAr9BdvTfKWXimhANZYKFcAUyptJjZntdzpc4kQ4DNNpnMx8GNTYz965VHQmhCZQDctTMLPUVX347S",
  "key23": "3CjfgM9YjvAoikck1i1K2vfxXpTbkAbc8oMJkZ3Xx9ZHxgqMeQDdH8A1mXKr6EiT91L3ceA3bDFXurQTL42GHCok",
  "key24": "3TmiHfktwBEgww83TMjfHC2MBF28r1skdaDoHWdepB8GwDKzhndyAH9Wjb6E8ETut5Bb4oVL8WU8pbBDcE7Q7QRC",
  "key25": "3WsYPWAzhJswu8zmASVyLdx39x9UrKthGri5PeM2zA1jejNDtC5jsddkpmLyGGEPhu4wCApPZbvUpAmMrBnZihiR",
  "key26": "5jTHPmL3gvxQZLRhyHb7heL17mtwWt5bhLChshShLuCdpuRwdVpjisBkBBeo1NNtp1B3Hh95UHXroYdsaCYXCXYU",
  "key27": "2u91iq3LUCa63yYTTnZnfyaMv89e1oeMWpDQf8Q2nzqCyK4n2gBBqC27uFqY4ur6MRumnRgfrt3fKRtF1DivfGDC",
  "key28": "5ZZhqdT2WmFSc3HvGBTMNs1q9aCAge29xhFwD4tHhNFypavBwGDJU8pGBBzUA6jTSrpUtEZFZoCKhk7LQb7w6reQ",
  "key29": "26qvZ13E8zEiVApYpRAEHVoSRs5yfMGcFWitgZCgtdkxuyoX7m4W5KPGZXYh2MmiSfLzcLURwqySQVR2zjkfkmpt",
  "key30": "4kMMdhxE2x89sREBuyxMcf44aSXaEzvDtuBH6uyRgTEwYsXQcYQbWdzAMjQtfEnTCjbtt638LrF6fqQeZLR7LjUU",
  "key31": "5w4qCdNfmKKA9CrHau3FAi8qrgAX2bQk3beAFSMHUiJiWFt4ohTDniSdVtLQYbXq24Dk3UogzFF9wS23DkPUmJ1b",
  "key32": "2DK7ehRDG2NqKpb8NhMUNJERWfxwezwhQkgGdgiD9JnozhVgPfKgtS1cWQ6jKyRz8PkQzPd98CgSLoyrtvYLA3oX",
  "key33": "4uiSKhiwVyN2ZhG2nPxjGQDCmAMGRFGFZUWajn8BUB2kRWVdhZ8DP6bVeesVcHy31bLnqmqNAUWqWQ7a2vDy5ZJq",
  "key34": "5jBhaLarwCchSaoRYqkKaK5GuAWnwtMCx8ytpQFuZgvFCnMZ6qTxTkhu6dcBLuNXDJpZc1yJQvK9Y32EUq9gJyCi",
  "key35": "3ickgeVJaky6SxMG2neUS14VSdHnj9Qk36pY3CZvJ86f4rnN8UG6rShmuaN8JSKWio8vqDECS9q8eJkrbyS2ccSr",
  "key36": "35PnDf7qsxb26iVQHxMRDfnJ7NacHARD35PeFnzDC3G6wuPcc3U3Q1iCkoSaRySjf1bhGiBq3N82aaUM1x1dQjdQ",
  "key37": "2hq6Y9L1K1HxarefMw8mWx4qsbiwLkddPfm7h5XsNaGTjgegrbcASYKd7LKBeQVgWV26AVMZmGLM6rRfCa7NRDSF",
  "key38": "fekJwMhjpgZh8sAHr3cWZDKeSLjUCeU1MwXbegceQMHLiQ9YPdwasybm8L3wB75rMpVGTEXa5JEViCdUH2DvdyW"
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
