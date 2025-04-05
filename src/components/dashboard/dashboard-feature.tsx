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
    "3P1M2yKoeCk1hhJEMqV7segVMgJ8hSDN7RQuW6NSmejAothsCKX2zoZGfUvkA9o5SdcsDnr6k5BEj4sURZANuWAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eY8pha7zPayWzVZCe3uCRPFYoQtAM5ABZYky2Vi1f7bbYWuFquzP8k9tfL6MerFef6bKgxqw6kyVyBnPspk66hF",
  "key1": "3PqvuDstHW47HVLaAEX7jWTNHXBpNAnaZRA1AfA95ibt58nMaNRmotqr3AZBawXvgxFXDDRPU4xjMU11qCZbxKKQ",
  "key2": "5iTdHJKhaPUahdDPkouZH6oBq1ruHtNp5RMu2w6ofF2uPW1iKTTM57fxSSGG4oidrfRqUzPkggreC4XtrgJcwfd8",
  "key3": "5ydmRz89rPcWzw1SuxGkwjJcfpyj3eu54HGdTPVgHHxKpMPGtVYd9jdKfyyzew3ZgDmLMSbnpVYCnfQLAoaFnoLo",
  "key4": "2ocSAUwvtu16YR2anCFymp3FgF2s3miwccFxRBJ3zAh4mqBHmJi4Bco1Y3aS9KTs646D5jHDuyR7NZCKetiSy6PA",
  "key5": "4iJzyGR5m2zHekk7nmmrMSEhjW1c1UHUa6wR3v4LUqRDUgRBRznWHTacHfhENnK6fECsX9x7sDSi1eFFnqD44tcy",
  "key6": "65GfhFC63EoaELt1G7jBmnJd34r3FiYzPYa1znMSRsqB6o2QSNH6AweNwtMFLPi5pEDkmkSvDPfXWFQvTAyoLTew",
  "key7": "4N7wQi8gNjFKvUFrCRKwhZUZDuMBzWWDSJJc85QbFBDqQ7ezRxyEKbJuNBgyRSuKWYXyrNAMQWr9KTV3nU7uwQJR",
  "key8": "56RJ4jTpKkxpPgByLxDj4zRcCfeiNieTtFDaByek92SQWRWgWfA5TWBZ5XY5wcSP7sbLJgbSNyoLBfV8BMb6WUMv",
  "key9": "3ZwEHbeQZ6JHfwjkogRvzgfR5iE5bDSX9SsjDrRkrJw4NbhGWfsoHSnnaBqiB4GBpBxEjD77DgEMxNZQtAVKp5rz",
  "key10": "5FChhtx81MD4o1fgbV9SnrkvkzAPwrMf72rn79NukkQr1ThKiCbhTs43pQT1VdCrQRK4YPpsaD1eVQkK1tGX1G9n",
  "key11": "4uXPat2rYsSp8HfevWuUAEHS4Nnt6B4DaE3D7zfLyFvFoYeC5GZ5QD861BaMm6VS3sabsbJfasgFaM9u2PEivQmp",
  "key12": "YfKrE9eEx9Bsat57m7BVN7LMF3KLqsiUETts9jAstJbPh2aw7fBBfk2bcw36pvzeugT1Ne89KvRgqjFrNV5mRWp",
  "key13": "2cAwKMBvBvyVhs6UdUy4wfHPbiLc9bZtF1BBKjeZKWTHTwkRKea691iDH9pVZj6foKUDQQUme89rCsh4wHbPDSbE",
  "key14": "aDc7VAqtMCDiz2ALxpC2hhhaAAyr1beLhZMoM5MLjbHdxwQqqtFceCkzHMzHn1cqFNm5RoquuT2mcNkXC5gwha5",
  "key15": "39CkCq3epyGYKSvRJaazXtJV1ufD13vp1CBwRavofjZXHzUDSW62D95mF71C9hTtNtLT2zwqsKjKqtNDYLyJfTKr",
  "key16": "3VJarp5pm55hkoU1LXPx2FDLKp716kU9UvCKZsQj9cceXiuce8Jf8sa8xVymJr4rPkcTpaX8eEwC3ak7pvxiwRuK",
  "key17": "4JPALKh3MSzpjovT4D2qY9DJ4QmVrvYDzDkcpASvWw9cUVZGCuf9dGKcsAcKnR69TaDRQvfbeS55NAKVPBLVUH8N",
  "key18": "2xtWaK3B2YyLhNdBJaJmiXRaeAuiMwG7bBMpQJiiFL9Q1z7Qbr8wrDaSJKdF3KUv68dSj7zEbcNHxTa7iEBz979B",
  "key19": "2fnQSb4KuSaJzbYgdUTV6ntX9ZsnrWrSXMWJwQoArwSX5x4eKxBQCtQaPbuA8BvVVnZ2kXpu6FqeioNS1yeAKHtQ",
  "key20": "2K25y64fYa27MPiEWz8aNUT6xgNJN9f56Hw1guH3xQ66cBhkgBqGPW9JWCkFgRMXuWkca3Th8KWST8XPGNcdYdV",
  "key21": "2QixgPoPYziYeB7hgMPdTZVwLThLCcAgsXsnWQG4EvnD32RS6DtkD2T1jyLPpvTJSu5kXDGS2jsXtAuDd7A5RoDe",
  "key22": "L8fSx935gKBxaC1BwCgAJ74eawn7cghtT48NMnF6g9hRyfgMGmiYM2FiqZ9p7jtugt2UMTDD6HJ2QVLSnC9ZeBd",
  "key23": "45e5dts25zLB8d3ScYjkEn9pSva7E4Pb9gdUEwr7YX8KwzSK6Bz1AGPgW8qjpFcKj4tW9L67cTeaJtzGFxNTgMit",
  "key24": "61K4H9A8sVtqHf47VvCLLA1oSRHFS57tAH6pfN3zoVCqRdXkjijDg3QZGB5mDv6LUX7NpjY2JTjoruKYAPJs6ZuX",
  "key25": "4q9s6PuJsZukAo8QBytoySH6269Yp26oRTsPfQB583wKnFJiXyagNzdFHEXcbkWeLGegdXX7jRAbeqYYoZyKS7H",
  "key26": "59AdQrp1tLL7tcse1z5Gfsva6Li9EQiJWsAHKZz1DhydUBQXEaDrJN4Gy4aWsKFchombscxmU9d1t9HMWBb6AT2r",
  "key27": "2AuqMmNJHGoMQXV4edmXnBmLaPvQpR4JfH9cSDRf85kr52ehCkpyBw2HPpxxRZ14QgZuXP5rUnF97JrF2vgCEw7H",
  "key28": "42bBiu64UhHzwfkAQPqWGFQf1MF9j3pa5mDjbEiNdRUe7bS9zctyzQTiQrbfbM7dVZdPcZ7xmgp725cg5N36G1H4",
  "key29": "2B6GS5zLZwALqykvagiVEYLoQbL3u5JJhWQxZUijxvbcpAuT6cNvDwziSchbyr72Db6rZEHKUjgarv1546PNasXz",
  "key30": "5XPZ4AZGAPQHnP4J6mXj3tpGNiqB73h4GYvHNgfTzshA7vE9pQptjZt2VfxtSEEvcEB1msoXNnt7bdySPqWT8vBb",
  "key31": "4L78e1EshunZV9UFfQzDNyupzYCrkcLB1aJMHzb8TdyczJSkeG7aTZcqVWnrZ9m3ezYZGCK2JK8uoY3tSXssvZCs",
  "key32": "NMpaGzByyeVqaruEPdJTPAXQU3rc3mU5WB1gzdLt1BcJ52WvNYTNgRUYa1bSfJpY9sZzUm1iwHHHUupuMtb98Hb",
  "key33": "43uaJzGCR4CyN8UBwUd3XcvVNZpnVrgJB218VmmaKgtSL4JAg6r7q63ieNMatGG3efNH86VN3TPErMQXqGMGbJWF",
  "key34": "4SBT3ca2azgokEawqeyJXeuPLjnTK357gTwJacVeuXR2RxDwrLnKpiCcDhSWFC8CUYHx2WVExDMWVVxNQy1yZrq8",
  "key35": "4nJbhwSjPT4A76Si2PiVVCG44D3PQBnvAxAjaxBDjYaRGzv1AP97PLVKe8L5MjpjwXW26byQsdgFNGa24VF2Y95E",
  "key36": "2wdwrU5SbS9iVuspn1ByAxdx1LXxy9J5JskBzXnYgztNcuV81yCyPw17LihV9SAjUB3x7mrhkN6eQzJpH7XtUUY9",
  "key37": "3mLzCaFsm6muLQaHR5tCtCL1UgmP66EH5Fsxyc4QrE24ZccotcxQPAuvzoYqbDZ413vJDWmwGVE51hRq2AtqpDaB"
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
