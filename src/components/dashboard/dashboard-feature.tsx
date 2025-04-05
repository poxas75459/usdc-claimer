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
    "B6M7GePDDWgDeCjnZLCQrxu8pEbzxLCvbJLsUM5KSeCLAWbJY6u5LjPk3UeRSK9VsJd3kCSKv9vPyfv2RwXYjNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Hnru52VvGRexxedgusnZZ2BkaHsMvLHfJZnAcHiucYhFFawXr92TYMhfLzhhTVVWJLFXjptR9UKHPffs29fYZv",
  "key1": "3SW8yUGFD2QQ9BTCM9fuv3ieRnAS5xPMgk67jJDJuQEXWJ5p5VjwvNsA2qcuuTePZn87EByPYUfZeb1u4x1K9ysN",
  "key2": "kpy1TpdR1xCcVZ43dN4t3UQa22fsMs2wgBZJZEqPrMEcEUGhpcU3e5NKRbzRUfSuyTXugRmBDndaC9NMdSWDQSF",
  "key3": "61GBVdXbxKf76E4frNdJ5ZExSpQ6FAvfvcnCn4LujP3nWaE35jS9QvXsbBsQEbJeax6nsu3xhGUkpLBU8PEyrz99",
  "key4": "4JJACfDEmQF1dgDCi1QDvsCnUFWgnSN8gojW4racWr2U6BxWUaEsbMD58Dj2K8DcFW1Zddg4BVYsKGS41CVGmM3r",
  "key5": "ZHrSfYtrTcXDE7sUtP8Gy22gkMkkLc1hV33AVBsyDLxhbfqchAaaJvvQnxBQSmRJLsrPsCn4Ntac9P4XKUEMW1A",
  "key6": "34SdtUpUTcYFzq3KAiENhNjX6fkGRxuwUJpEdTMYG8Kgrx3rMuEAP88yhmsUF9NvYYJsmWdnmKHGEL9tKxeWzcfE",
  "key7": "Evp5wzC3r7s5DwKN27JHohBoMJQgnnngkGcHoyjA6PSNE8sx7wRXzoydyH1zFobMeMohSmn9RUCZwvfjz32E2Pm",
  "key8": "3tEXGeqnSoQE3YF1JXreE3fKUCrN8Q5BiGHKDAmALmYtbS84KgUTWgtsdhyrB4P8PV72Af4PkJYtVDPGXeyfrMUm",
  "key9": "yCJh5rf6vyQvkdbUxiQWzpCBqtgq7wPERWEBnGyyHHXbF74NVeMyv3CD1jeSoCL4QmpsAGs6B8UMytqUxHjWFrt",
  "key10": "ypTPSnENGX6huaSRguhphcQi9634HcdoLm8kDjQ4cXNJr8iUR8sScdR2iDZpvn8MBAR7U4abQGnNWwUMvoaAT84",
  "key11": "hoSxwcpk3XQqBfB8vcbGNmpu1UA8F3t346CXUV8g8Es9PRsUcdYLhQjTf1ZWThPENa8QCkbqLQgbXnqaRHuZpuD",
  "key12": "CajFoMfiQUmXsXLmiKJM1yVvZrGBT2dtqxwuxRNUhR2S81jLwapkhZ5fr8kfi8d1JHcNffcCCdUbJxrhDPfzQKW",
  "key13": "5H2zvoqtoNuNqSdJuvD8QA1u4knZixkDTi1DjY3Ms6Hi66y7KLLhAtv4A39ehaC2a5J9BqihkzaLXBqAugJGqMsi",
  "key14": "4xVj3XyLCG8eB7Xt98S4LwTyjXF5y6aiQFZijHgvrW37X3xMFhaYccpNW4NS6Yda7donph3RwjL1s3jdgSMJEhX2",
  "key15": "5JJrDTH2wpGBH7c8NNMYAkM1McEqANvd8PzP8BHb1t857B4D3kaMx41hQGJvF1ugTSQECqNQAJdpV7eiazydjZxk",
  "key16": "5RSn1SDZtj2jiS2iVBNS41Zyq2D8tegXTuWBK7Y7LvePNqnNW65GPnNHfNTn7xSF1FSwqp1pHa5YhcDXBWRhcGTk",
  "key17": "35WktjWRsx5nZouAyCTcQfxWLj4ADbBQVXaZDngkZvRoPcsaefoJqpaBfzyKHUH1TgwZDdKCbA34QdLWize3S8iG",
  "key18": "3fNoRQnq5TqBkNAy8RCHeee3X2NwPnBePhqTY6rX1SrrNKHHbcH28d8v98vdhJ7tzSNA5demFfaVTe74NuQLoWdM",
  "key19": "24PUgqMKcE1oj7Ys8xBiSsJHGszpWQz2Y6tse54zBJa7y5AyNPTESsoNYVhhxNafHKRC8RJJCHz8PnGDJhZXP2Eb",
  "key20": "3J7UKUyZuBKFS3FiDyRR8SRsFrq3NdmMxYtDUH323VpCBAEahNV981e2vrkU5fAfHvB4znfb23RYAi7a5a1qdgxZ",
  "key21": "YbQTC1BXwt99nyQUGQMoayCZKDkcYjKmbFNK9k4BVYhuCRAyVW8iRKpi5h6swmn5AhwjiTNfZ6BVY4EhkhNVHxs",
  "key22": "2dByrLao7ZAfD5ScaXgfA5dBULF1MWcQFC9M4Xs6NhhqsjYNQXoJYtzamFcXTCWcK44uaLprgisVmLRZhRRpPUC7",
  "key23": "4tQtYTX1CAjVnCc4rkZ7MdvSrfSMKZkesRuNqJ2t4ZVYTzycgaUS4VUALu3G7segRxE7cpm9TgU4UxaaKK8sMwv8",
  "key24": "51AMxX3bRSuVhoWyG3EGbQggW8kt2XtrqMeqLjnqC7QPLTfpGiAQwjH9UVAznb3sDyMYA2aepZSbAM8BtZYVuAwq",
  "key25": "3mWgKq8QBuh9LBruPRyS3bj1bc23qHFEQvFRiRDWTLUPSdDD5GenMvs9bW5YgUG5DJ87Ustw6RxiXmkzFGFE4zKk",
  "key26": "2VDjtBs2YvTsaXPhf3ZVQTQA9FWo2nuMrr1BfWLgVYY3t4biJc4iP4iw31GYeuyjhR9AmvswYFrohnZzG42zmrwr",
  "key27": "3GcWYXG277j3qiYqbDpbdXUraCgfXH8beaNtYwGGG8QRZWeJvXvk7HP9YytvcW9zLwNsqnjuA8kTNyoJ8AF7WdCH",
  "key28": "UFeKYHuEBTkapJaWkYJyjtJUMKV5J25LkxcNNXLijyToY6GeguKEwFywb23JE3ohFutKvXsPsRkRWLoG98HjK1w",
  "key29": "26tDZkYkaDbiw244BXxQoQB8do1i1cA53QqJK738h1Y96MgrDcmNJuJwMpYiA91dP9GRMa1RDdptoB1EMZdGLMb9",
  "key30": "4h2k59n2djw966PSpeuam2XjtxcVeYGKKZ3zUuJmZJvTDMMwmfdmzmicHsMnEZ35JGcWscRLqpA9y8jrxUEdxfLD",
  "key31": "2SWaF9S8B7Pmhj3Sh5Hxct2Pw1vbcP4fE1tNXAFMaeh7myGc5QchnBPyJjKHhMKbNkjbXodDFSkgkH6ZzvvN9SuJ",
  "key32": "Sm19KKwzr5NsXrnXdHjadZnuVhci78CpTcJ4aRbo7KiBBcciRNLofwEpLsY4aFjjpbHwYzh9aK4r4bBqEp6hcDt",
  "key33": "3hQhKSZsWJnVm9qiJJXZQBGXWCodEZPLDdydmzwN1F6yfTi9dLqRetsnTaQYo7gmQerCu1jaH6gmqUChrh6BcCTt",
  "key34": "2GefKJTUjaxkva2wKaP56aMchTpANuFw3XUSv9jpiyHbtk5FBaphXCf6pTDKw4pfaGDM5ExZUQC4v66EJwnmAAsu",
  "key35": "3ySEVuNAi1dSfuqfW7M1LWCTe9bSWWqZiNwmJAfvSRUe3UYCZfaDaFA3UXdakxtUcrF7BhJ3pU7Mh2rzbto49FwP",
  "key36": "66hAYoFgf6vKgXXjGpLgfu4fWiQqr9ibsAdNxzwBbfZjZNN7vjxrpYAGt8LV1bGhMuAZtmsbgAYDUidAUqa4zGPS",
  "key37": "5EKNkeNjWLERiycfboiLLJZBpvw9YHnAvfQQHJmS99vryFE1xUJet4oZMr2YFQTeGw5ua5ggvD3e9XogJeHWWTnY",
  "key38": "3w4uweBxeKsmxMQw2MrgV6ioBZPZYBfTS7rmCmMpTusGEejwJ8DWFCSzB7G1qMRbfYoNKCqBCQMvjSw2hQ9MYDtR",
  "key39": "53WKG8XBtHN3WbiMPhrCXqnzrm7QaTrtsbhchpgT6FvnqeVYnzbEtz8L3GEGu6LWegxLDvJrgR2PXxdTik5KjenW",
  "key40": "56AMsYkYMKJucR8Ss3qsDoU89KqzyXkg5S396V6s2iYxdfAaL1TXbntqbJ7DcGgt8sGWu6nJ9ycCzNVSaP7bgJQu"
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
