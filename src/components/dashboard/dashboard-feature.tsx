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
    "Aw64cXMdQQN34Ff4ndbrgAxkyixE6xQ9RUCodGJtPrsHPH3StC81S7DeaCwoe1p8peyjiq3JN567gifBeHwqXeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p2d9obp5NWruPgnS8TnQkCnmuPHU9bqo18rVrHTBxx1wAQ8mKTct3fSdwhLwjkajsJeHa2Dpzx5x8NMfKZ91bRd",
  "key1": "4utVw81MAi89Goe7kXBWg9o9RgGNZdE1uCMW14yJKGmBjPsxpzUDG1cACYLxJaoxMukcroUXcaeKMw43HkqegYGi",
  "key2": "xb4cwvYjYtCsXqGE4pHLjj6pcmUks1uFeeoamzzwDsBzNViw1YNdpSEo74fS52VHkhPWvW4hpXjYvzEWmnHjbfK",
  "key3": "4YTodTs6FLMbBZGmPZXdqDX9m59b8mqB1eFMeD6v1fgoavy6vhjHnuZ2ttED2FQeJj3mv3qdarNa7bXi6GEP11CU",
  "key4": "KsSERYxexXd5ePvdtSpMiKuW85FGrVazecuKvABtCTNfDvWxHZVauUPkqmsC46HzmtbPaZNGJgvmtJvRESZCjkE",
  "key5": "WbLA3LUVqc3AdjMa35VF9XFJiq4RmDXSLLm58eRqtwr52L4WYtv8VCJ3howuzo6qjgTSdCY7CE9ovaqrRXJPF8e",
  "key6": "tQNbC9egm8sVKmNTWkgy4UtLZgenBtrEiCbXPZxFxZGngtByEEPE5a2CENqjQXamt8SZqgAejHh5LoRgvvoEsPM",
  "key7": "5TBS7bFVpePQcQDx2ziSP7QJeTnrhLW3eLZk2jVCvqNZg8dfXQTXfTYsxvWTPbmJ3ba6LtFtafoNk86sySTkxBMk",
  "key8": "5BtZqqWAzWUNgaNZpvoQx9REccPnHJoqJDNn3Foj9sYK6mfh2H4PzUYvpPyVZWr7xdproaHcGZBvV7NZHWwwi87n",
  "key9": "3VjYxe3mR1dxGTMATmR1gZA5PwM2Tz7pNHzdKAEgJbqThBgDXmgNa8kXYss8Kbz7JLvjrLfTTydsBxRMW1mX1zEB",
  "key10": "3HPuKG8c1ptLGAxhNBcSVRTKnMrMU3ri1b7N1gNQ7yqPWRLDj8sESiEVwqLuyuuK2ZAgUCYf4n8HEpbcPJMtpKDU",
  "key11": "275RktyT2GxkcM83eNLtnfxp5mr1WN35Pm5BTbZQFWhGa2AxyP3jUBUvNLw6mLkVNpY4js7znuBySJQWys6DhKES",
  "key12": "JYYRaELcERqYcbBAq4X8mJ94YQXpmw9Uqdk1XDc13AAmLociecw1e4adKJZmPh5ePok1gQ2aXZKegDogmmZyv6C",
  "key13": "5BGB881cxr8xxYFKJ8kw8HkksQnbD8Gd4mzp4CdnodiZfdhU5cnL9iFEWTKYCrWLC5jDUNbFfHtP4YcsAX641oe7",
  "key14": "2JfWVVbw3H8XBfFepp7FQv6aBeXeoxSzHhXFSFWwSLiChTP44AiNZJwjNrcpyycfkVfNJaQvCt5XxUtah5ZNTjUN",
  "key15": "5vFfFggLoq91uDDrPenQXVirv6FPDvHF6Gb8Bi1F8Kyk2UiPbknzbsmLf4dw9BYqDFtCK8KijceGvRn1uFW6xb76",
  "key16": "3biB7zjaZeWQ18Q2oSJA8s7DHXVpYZvARJNPKDBAcApdycvHPRe3xVZn22PJViJNcbopwegvGraJo5SMsMQoEFDv",
  "key17": "3b4gK1eFG6iAcyZwvs2hqR9j5ftqCD5ZJSN2wD3BgDGBfgAkkFr9Aa11GFC2nB7vkF7KgpLkneSLJ1g2vgXX1TAK",
  "key18": "3goapFgqnNns2Pi7inHDRs83fQ8USFb2DzddCpL3kpVbsy5VXJiXWJnXo3L3HQKu8sqAgKFJRswJZViu9yc25XfA",
  "key19": "iTqJQJM3kG7aVtXoPfdAyVpxHcTnk6HcmhuZyVZviVoGyi1hVhiPVVaC9ys9TWUcVCf8RMZRHgX5JhCwG4UJuFa",
  "key20": "2gYSAvrV2QbRxSLUoCQYv9zR1XsfX6z5owd3HCUfWgFaxQwC6sFfsHhkkWYUgDu4w8APKiQLcaNk9kc62qkUfSqq",
  "key21": "3pgZDJpZNVNZwVCNkVt2u5UjF39F2edkYvHM4fgmEnpSuh5YMZpzPL9YwLzcrKL7Xv8i1tFWGtwx3sxHQHnwEvgz",
  "key22": "3goLxFVFStY1S4forcFrGtysJZPoqJdTGDRsuZftMSZBgPAfqGpB5uN7GJj2AZZ116Gbz8NkQ9XE3C96r1jdBLUX",
  "key23": "5PMyU48QpDPZQ1mC2ktk94Ye6oqKEYdAQJr3ZVWRbu5zm39dENmbPT8Z4ZaoTK9YiVsR2b6uMqpUFsmbniPoScdQ",
  "key24": "4VPktUqGeMX8DNhPXYVWANPuGearGiNcHNsstyYA1scXSvp38EV6hjYwwEikMYyXhhY8UTuwgDsB9FhTE55QeMiH",
  "key25": "54ZGdaFQBGWXJRfegBFV2gPvguRy1g5KXzg1soJoBAt6gvS89RTjpnMu693RFg6MyREtptBBRvQWkHb749dV6CzP",
  "key26": "5yYTmdYciXD2LNBuq5czeuxHViXnEJzsJ6RzmCdsGddcLCy4hzboENyHZbEbCZqRRZnQAQQicecggUsKhLZGxpUW",
  "key27": "4R8RCeXov9Yb8qQZqgfvxJxYHKAvtERrQ9gu88N6e2yVogfg2bFaVRpScMDkpJjmjDpjStSguVeu9zeGNyV6RPfT",
  "key28": "3LXjbvbfJxzZZUmCsQW5un5Xw7WXbxv54NzgfMVGo5icjjRpNvhVdtgqCQqUYaCFuGNvXc8zpPQRweq8BjpSyWU7",
  "key29": "34XHoonB28mVoFumfxQUv4TrAKbsz1uftrUD4rXmwZpUA4v5jmdMcKYAzCS6pwbDd21LBdH8zRHUPBeSWGc2vjye",
  "key30": "5X5i6hUgjYYnKWm3QbhhqK5m5oE2HNfVRcS8bxkYWekm912TeeHZD8DKnyL8Xss5stka1zCh568K8Q1EuVewn714",
  "key31": "5WN6AYLKQ6i5jhfvKsjBPs5eSPEu56J8RBbao9hGTMMwNYq9bYLsYCBYdF1RXKadNXPKRVnNDgEJYb7U8GGxJY4g",
  "key32": "txaynLXjukrWEjUmgFQWQePFpsxBh8mZBpTMSTgrG65P7snKnD7DqjpjBU3EiLHTj69UwTvvY3iwQwYCirF6QPe",
  "key33": "2jCPEoHKUvERrQvUiH53NuPjhfE8y6uDgVfCseLx2MMms74JA3CuZebThyx4hQYSAmKqYRCnjhmC9L4yVEbEQ4xt",
  "key34": "oXScytLp7ctiDRjvuvCfZCSJQmmqENFrr6euvQSMW6ZnhpNistG741D6d2MCtFnavfH8eVwswqQwmm5ngckhgKi",
  "key35": "2f33vsSCKMxtqn2zyBcKYSm4bhjaBirm4dpNi6nMnzEW6u22zLo8TwpwoqscwMiRLZnfgFXCdJdGtA4JPYzRVbZY",
  "key36": "T2RfvmMcPKfcY2tH5Bueyghs7QZhyt1Zg1DTY5ZGHQctjYJ8WAEfVB5LbiZeeQhqn8cgk1QcexsuQqrrELq8bME",
  "key37": "s6wWoNoznawWPfg1uE55TigkFoJTHd49ydUWhQGjg3c8EMb4eADJwFhRktJTnDp4rGDzhCZdtnHyry6Lf4cijTH",
  "key38": "4ZzDRVDHRDjwZ4zKg3apbTz4eUoAfQ2teWSVS7nXFdFsKihF4xUoRb4FsWMZrKnrmcnJ2e2BNLougWuVH8FaWdUz",
  "key39": "q4C5w8cXkeMyZr5Th9CpzaoGE5cp3w9BohEatsogxbRUX8EeuwEC4zpy1kbFGUkHReXpoeMMN2Y8LZuHQeYQvQ9",
  "key40": "2xfNPFCta7SGJjM3wgM7cL96J8AM69T6yWBLDinCbrXLx4UV5jJTyLeTfmYrWwAW8YFQjQGgmYU8YsyPdg1EWMDa",
  "key41": "2x5SRap91oFs4Ps13gyt22rVY5vXx32HLzagr4uU5RKb3EM8yfeeuR2kmcTpr5GmyA41touV6zMQpnyDYpb8xoNp",
  "key42": "vw2mHmx4WqsLiiWCwy44TGfgkpiK4naF8mPZjwfDas1sdYQMYE1DQsqrcKyL3hLLSsMQuNmmFreEwYmhMKu1CnF"
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
