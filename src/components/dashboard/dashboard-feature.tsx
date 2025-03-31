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
    "3rY5Zig1VUTdsMDdiZqiS51JRBpp3pPxTVdJvMnMDCkBficSqoTjkHRG9CzyN5RdGjobujZ6EgTNCEqNySq8xQpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sd5Eh2KgQ2QymLQRQFYSoFnimacoa6ga9QDP1D835eM82RALkMLU5K61wNnG58aqQMaoqo8QAK9aVEbYxBzqk3m",
  "key1": "3CzKvcacbhy5sjwNUZDU5mmHBTgTuwuyv53MnjUaXjuRzNEHpxX8ojsFJFVrLJqYakxB5erkk1mSoPC9HCKyFvMd",
  "key2": "2UVDWzs4XWzNA1FEa5zKn6Krvyn9brsTQKw7joVykQjH8R6ctZhs1JfdGbgSKwoGa13zqftBreb3TwfkKqivYkuU",
  "key3": "2TZ2g2YabH2W5AmEq7kYTTZFYWzg15zUHutbjyXuvC7YbCB3JShbAMcxhWbgoVsFDbGdi7RxxuXYyiZJByJxoa5i",
  "key4": "54P5z6zmLbqAxLSYKJH6r9AqE71XpNT1Zi6Go4TirKv9AMdB3Cdz44UXawQEZnWfcknLNUUHKzy5ppzYEcABFzVj",
  "key5": "2kuGoW4GEPD9s8HaoWMGARdzVLbhqEb5c5tkHw2XDz96duHt3R3fjaM4sPzHA9Srz9xDfc53okBgxXdDcoLWwDj7",
  "key6": "BUFHnvJGj7tDcnYHBaDQa2hrF2gh5hTCowoemLqXzpAToq51Xjj44r7EFVyBNN33LnBQqiiRiZFsPn5mzjqi7Mp",
  "key7": "392dwmqwJoYwhgDzomyAaUakxGSA9TVq46AQ2TzrSipbrKErGturVZWqnav4qMY2fYSLXBmRQobQd5MQKfsJCcMc",
  "key8": "q9ng8yoB1UiNK71edgJGFjKQuioeL71ZgENvPnDhXfzEmWuVsPP6PLrhWfLG4A6zgA6hveu2v6dHrgmREQkXCfF",
  "key9": "4BwYh86SvNe7j5n6xJTiupo8X9sNxNnAHpTmWkFHiFyLaEVULUz53XLKamZYiuLuwYhE3FSZcCMt88FY7q4dm7Wb",
  "key10": "67mnfCiKE4swuQXYktXGnKD2eii4UWN7GaTWmi4N2Qf9UEQR4wFFeo4XEZkFWVGKdwUunCARA8JKL5xMNJeiQvAd",
  "key11": "5UENpTgei1Lm4axzEoducGbLwapN6KF5GkC6mv1b7pfbYT4EmCc6MWYeQqjkq4P7q4PKB8zQ1WCmjtppThsN9DLn",
  "key12": "3eWK4JSd44KEzfCngLipV1QMgDgEnnnGreCwh8N9XftjKKR1wNwf9apc4DEq8gUT9Ko7uu7P4GfmwTXkhQjhBpq2",
  "key13": "5RAu9HNbbbfbmZhUKkeeZqxuLPiAcbHYitb4kriW1miGGxGKccx49Pyx4ma3JxTPHvPF6tNAgypsENtNZZ1aUXp9",
  "key14": "5BnTHu7qY8RLFTEKDTRTXVgZA2qCsVj6zi6VHURvrTGLT6hUE1gkPLqTaqQAhqgfdgYfTrCLEdFkYwtksZc9ZHiK",
  "key15": "5AH8KfYqcmhjvvVBaBrKavrrn51UmcvnQGBuwDJZBNuVSBNNURHEuhetxoky3LXTa9p7E2VwatQxZTGFSVcgHyoy",
  "key16": "5hc2S5fREcW8BaPXiZnJG62uhj1E8PAuvTUyFDZdhZxCMAnQuAANK7m3L7rD367hFZkzgTtfgYWNywFw1gGmR3Hn",
  "key17": "26kvxReV2gfMrN2y8Am1XG3Mx4yRUqNdZ6jA4NakDaEYtRcaEbiU6Kjo1gkYdThrMsLCTvL1fZK3BPaz4YvUzVxt",
  "key18": "PgWbEN2ABNEwpbmY5NjdCWk36tUeUmVhMhiYXmNS1poma1aiUwWXuriDXj5yCwqpZu7zDuMNR8pg6sBvi4oNQSE",
  "key19": "2E8QHDD7xssyzBytV6fKsUKftjGgp6XQbJKBPJruRtWMLyWHFmrYNRdkThfKg6x3RLsNU7NqQ141ARGyLsmE4jtA",
  "key20": "3kWZhxePmx4gojuZojRTWeE95GmskmhkFQrJvuEqpVkGuy3fYGcC7y2xK1XnyXonp8qFnPBjuaxEVFG6GxD9dMg1",
  "key21": "4M44kp4zKL6pdroekfEtMD1z7botNeVEyaTBJXG4RSDCWpfGV4bRtzHGCPEKYnP6mJcDmCfsdtVHox9LHqnVfh7w",
  "key22": "XnXSMfCC8txYctBkkhoVVguo3Xd6dAFPwHYqcadqigYz2hhMBvxnfPotbMzPvXB1fbgL9dbGiMsFF1LmVTvnpg6",
  "key23": "3DWG1smykFNeiEJk4uQFXD2xpG2zzice8ZMLjeQQMMqzbx67hb5T8gbewgQrxX2qisyGdBmUrT2yKXSZE2QPFU2m",
  "key24": "2bbGZENkFbP2tGr8M7QtwbzVBmwems5CqFTZx64ikSDsZTzosBjQ1gJAJK7EHULEfbQtjA6XQ3jgt97Zf3mn1CtQ",
  "key25": "2qeixX66JY3axdJvG8urGJLBf311kivRCU5nqediznzg4tFE1Bb3YzzojoFLABR6vbFa7ZBStq8TKfVcEyNTpjE9",
  "key26": "4JQG7J2oaosNeRrtvPeTkve8kA52r276EGCSfvYZ9UwMQyAP5kZBaSzB8dgYKiuQ4caXLKNMqwUxsM49VZWarLD9",
  "key27": "3mfp86AD14EN7ffrAKJ5h7VTNkUu1j1m5StsUXXSR7s4s2NzZdgARLhP3bE1FkffWNRLkmYtGWjFJfTQwsVFjgzF",
  "key28": "24FRg29XoFJENJtqYSDqrJVjH9Uy3mERBg1hWfWHbrEbUQnoUbcr7ACHqAhaEWdBG4BbBSejw656Cjxdpyp3zYRo",
  "key29": "5rKfATZmE4GmJZN2Uv8GjPxhWHZBKXQQ5g8XDzzyryKQvSDRaqM2XaqmH7Zt4skt5mZjQj7xrJ7RmoXY5RcPsUWU",
  "key30": "4SjthSSWtm9Q37yBMg8dUTf71tqQPhrQMtzJeYQQsmErzrW4C3RmR6ASiYkx7Venxmu5oSDYj6bFu2RuMqMs6zj8",
  "key31": "2DVwCxo4nPZ88b9uamj4fgmmmWfBt73L2cnfGvLnaS4P9ZKJ8yLfpoaXp9wcDKwKjx1xD4jyArv4p1jzJQvtuYA8",
  "key32": "47ki5rksrxgx9NCVnbUiK2hYp6QLYEbQUQaP32mqE3ogLrdPSvHNVHahwksuzYUiv9AUcuYeVggQFdFZo8t3yYtR",
  "key33": "ohJ5GpP3VGuFARw6JZMPC19vTtWWnXsvgJjAAT85wH6vn1hH2icYJvLfSfCksrsL7gaN7p6DKJEq7gt8ubJxvWm",
  "key34": "3rBuokJK579qsJLdmkMEhPecHG9Hq9yn1FgkUYeYXdu8SbgEa9YnkjLd1B5UUZeM3vyBvE2SWwUBYbMKU7M6JQmH",
  "key35": "5z3cjFtdDx9toXpH1fPi4KgDkhR31GHnGuNYRi5Kc9Xc7nKGANXtE8e4BYqygHyYazRVwqvrUmiErL6udYFMG6Fr",
  "key36": "3fnfP9yhLYQuhKebmeiVKFua4x7XQQFZ7hGjMT6SZKtLDGUaWXx6nnyVrMUpamJd7xxxsBiVnY9bChHG68KCpANc",
  "key37": "3MiZDqu2urmaukr4MWTELrdtx5wcHLgx5XcviZcU389GFKN4aAHcijiCbGoDkWH7gRwNTqB34c1U4FcxLqNUcT2E",
  "key38": "4RUiYBjntxp91QCCEfcHFuybdKqgRRJwcVSmUAc446US7s49jY4cnZob12pagM7xwPNEkBcm8XGrDcDA38HMZ8L",
  "key39": "21iDACEqCNDwDoXKeP2B8zrUPmbWvMeDsn27ZqjUdfvK9GrSrHpNSxHLA4uwSRxvBfzUmukM1L8HVawsmfsxiBmA"
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
