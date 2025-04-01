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
    "5CMdrJWWvwvn23xMQHXevvTvP3d1A8yH4ypqvDRsg3oiAjkJ9he6zREDdCWc6DpZY3XUtU7pnQk7sRja6hFiLXAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "274rZLyWrLrZgMkJifW1sRHeEXJHv3NdGytag7UCSxwrromQEkoUSZ1xiRHwus8Ly6ftWw18yh7ab9LAiHAqKCq2",
  "key1": "4Y7RSzpBxQEYQfmRYNsrhjFxKJf3dfkJn226N4Lf7sLcJfTrEsj65t8x1WPH6uVjLmhPdw1icWHUKUUPvKtW4T4y",
  "key2": "5LLzVh1ZdUWsPcPMaK1sSPnaFC4sZGht5Vbzb5McyyH41sd6u2m9fJpTp3nMU3iSnCGZgP3pKcEd5JHfU6VaTu2C",
  "key3": "4aoGZKFqBTMpBjQDJipitbkA4dky7QmaNrkDPbtEPFVENE9jbqTyzExNENNJZnDt5a9aUmf7kpDLhNACDJap4oNi",
  "key4": "sfpTYnhmi4bSz2r6dKd96ffppgF2kfsYS9WXD6dhMbdf7UN2sfdhd3Q6jjCc1k4fCequ3R1bUNpcWQG9kttSWRH",
  "key5": "2MKWvzAK8VBatSA36bWQHeSgiKBSqfthV1YexazeMPt6Bw97xF2gt4b8Q8FtfzjXUBNEtMxQEWhdoCeGStHd8dnX",
  "key6": "LeMP3agrfaoVE5fAWSiDuZ9EdxzTLDMtd6zoj4XX2SUckLvpDHtSZxSBt5XprskSYzDoL5yPf1r9nCwgRsDP1C7",
  "key7": "3LJ2E2N12pubFCG1sjHcraMzbCxmHst4pnfRVPBcpYFU17d8AVrsNnDupSYJLyjk4vfkV1Z9PZPfsPFs2ex5TT8L",
  "key8": "58tz6SVswfJif2NFg84cdxzY6iszWPnUN5ztLC7xQVHatLT5ybDkKksYsH5HpSnHZQVuKWPU7RBmoZUNf5qrbse4",
  "key9": "3kLi7RQvFXzsVxsovo2gdNnUTaUw8DX3rWVSUvDvs419SDUD3gY3k3QfijFRCd39VfhkYCbXCxRajobGuVtUM4FX",
  "key10": "4exNepcwLaLc3nXVD9X1qp366FJbGZDeMhcoV1vSLurymcRmyB4LfjYywwreL355BRNpL3SsXEPNyR8sLCrp2YEX",
  "key11": "4rtBVZoeHJvCw1w4tKR25oM3SDFSLqn5BmgYRMJYMorBQM9kSnev3uYqnHth1tjSS3peMrbcFR93TWBtzy6dheFr",
  "key12": "4fybFAHMMuun7GhYyPGWd7yZv14LoZ31BWmz4o4Tb5guu9Un2byMh4ymdyTDjzzHvuj6o24jjGtfkf9erJYn7jEz",
  "key13": "3xu219HwDBwqzNsgN2gtxG3nZ5GJMof9pg3KWMwriVK54WeoEFFt2cRgnRpovZ8NGHDe45c3Cfpi8bdpt2xXRFRr",
  "key14": "4djzajBiU633GesrofEQANkgC5SUxRA7omx5Ug8ZaoLLB4HQtCAFBLtnYK4Sc6kVh3aJbrwtPa9n24aLrbJVaAci",
  "key15": "4kAr5S995qCF4n1LYsSn7A3oTPgRJt7KE5kuBsE4WLAU8hS6yWQz4GJ7rHJRZG9ZCsYu8EcvTLm6YhhjauD9Ds1Z",
  "key16": "4pk2QMN5puzHCuJVDMrfqRF5d5Ge3pHkVu1gP69LUQ1wczxyB8V4KABsGxm2BvAnTok4fUwhask3Wehptmoqx9Bu",
  "key17": "ubhJ6x9Bwgb6AE1STMAsYwF8J5ws8y4YWD51qbsSJVj9ktXor3MKNznYut2vcbS9qvkjs5BuYWwUQNhzzaDsgKp",
  "key18": "s1KqTQYGqjFqfx6E8XUDebCPikYE4prtBPrpTQiZZedveevQd2gKpeZZ27vi85ggWikVMtRWiWuJ5s5dZBzt9aW",
  "key19": "CBENMWfoLYFEkRcSmLeAsFHbMqRqooMgZQgwPyV9edy7CUFbwy6xkSuDNDrCGmSNYdxUa3LfSFVsKwLiGqpifss",
  "key20": "2s9sPxjZXsSg8Ymcf5crnGSVQysfhpQkmBL2JMEbjzkxCvz4aNDAK7GAbuUUmV3fdJmgBLBSnGpZG2dw3CrtVude",
  "key21": "4Smj2tzdcrG8Sme7QdR1R6WdfKnVxwAEPcnrCtykuQiY2gpRssMtkm7UEyxdkssQQo1GHQJQzWsUpE6odzda1kQ7",
  "key22": "4VjHqZ56MUJs9D6xD2LktBgfAEmsUr6mh9dEwAoXu9KphZWWE96EZ4UPA4ix7C2qethoEp9Cod7oqWjKGCTPFxT4",
  "key23": "4NT9vdq1p84fNcvEvb2L4bFzz4RV6Tp9rBAU6H3vZHbG3QqkxSxgeuetWWubY98Chgi5DeHG9M7aDk2yBNdak6q2",
  "key24": "4HbQtTYNtwALApWwEC7rtz6S9MAxvRoixQzwgAQCTuBixqLuGg1kbyvtT8NLVEszjBqntDKf3fMJNFhueP6SLHon",
  "key25": "43r7tbVU9kRrWgZ4MprbX4BHrTWQ3uEpTq9rPtbsLFW62CaZ38VPP1ZC9xGRCypo1fqCsSJ9pgdPwKnwb3E9DEd8",
  "key26": "XjX6MMDgfRMvQmkP2hvHkHKj4CPGMzLRwb7yMdpMtYBgM6kd7FMD7yuD7E96o5QUGsX7jurxB4Yq5bo6TtCw7T5",
  "key27": "56FTMo4FXWc2Sm8X5VUzHYakG9sMdfdvvZWQfir8qc8DzPAnMn1f9NKWj8UYaG2Z2diWoTd6kFyfDVHT7AeTYhmK",
  "key28": "3vxLverejDK8T8jLvWUdJueJJ6P7YtnsxAK44ti7EAmxvErwWyDj6GyDD9f6JWgLk61y6DiKfVJHUPWq1rh6yLqg",
  "key29": "5LD1tkbKLsrSvZ5iKf4WBkpYz9aaPZyeJ6e8xmfR8TvMdaUECCd5hdxyThVDjqM5aVR8zoiF1a9WmFcFjC2dUnxM",
  "key30": "3juvfk1UVdtWQx7FNeQFXK8tS5uKEU6bKpAQFFdsVTSmocqNcjY2tyWu3axbdaLcNYjuVahs6taBzPe3WpqtDhg1",
  "key31": "4PnPoTVV9ep8zhjeaQ6e3D7b2ZCxywAQGrtGwypeHz9wrnyBNBqqhEjoekRBD4L65ZE47SCFMMfLaiGp8KQbG5vF",
  "key32": "4zqaH8Wdy6hnW5Rpt2xbxchxdRgoTPyJ6Y2Bgt5Mt8qnniaNgvnppLjSfb4JS6QeSc4TZSATd3NALmTD2APSWdnU",
  "key33": "2cm51G6E8xEGNRAxV8ZjUohnvUghn8YTBo6wgMRBP8sZ7GzGXtQruL1h8tBWKdJbGuJyfSH61KR639VUUkaHQAQM",
  "key34": "4j6ck58SrGDbxHscKpR9QsWEUZL5q1bewHLmxX6td2wFAASwWbszNhbSfaFMYVKsbqVCLK2Sw9HitQiMUK1BAiSL",
  "key35": "3GGkWjTf7WejzUZudcTakcLMPpYPToYyRGJPfaBRRaULRtZXumXbXjkGckPDMppcujandGrbfN8pw39yf2BH5PCw",
  "key36": "2LHENuf3hGcKAHEDcix4z7hfYqnAZubyrLDcEMjR9FyT3pr6RCkTJNFGREQyTLVGTMpJSh49SWsJkFze6reVnZCV",
  "key37": "3KNVaihx3p31hpYZ6GwxjGgct9B3ydc3HuBUG6edPrAhsrSwoPP3XUR3afVt2BQwj9RrhhNY5QXhAo1mokUPyDKS",
  "key38": "42k8YqrGGSRPvsyF7SYw1Gip3Kjqf8nsRYfrJVBVw9qDdRLNwGR5pGSu97P6oR4TgMKLebGBhmfPXC7m4DAygWa3",
  "key39": "29aMipWGQweQk4kSPZ4GTvL4yAevrbtSew4JSP7gzWKZbjCBiAH7q1yXaL5nszmHjhn19HM8wmB7yrMTHYcRbYJF",
  "key40": "PzyPvtAzPgXnpYnKRcBPkeSnn4aiRTjLQ9jzEf1gcFxF45uZfFrU7K1SvCMTKvnjFERj5Y5j741tS1m71m6tZ9q"
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
