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
    "5mLLir8HreAxjg14nPuCjzcfkFTPyjTHg1DrNk9qamSu9iZxupuTAiJSWUebnyVwbAnckqYQX1PHgQDLTKrHwN16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6umCoqUejLbJhJU6p9gcMS9qSjWFyP6H8FqeN556iYzMvfdk3TazhSJXVzP4FCj8fKWjvovJrEsnoqJfjg4enFA",
  "key1": "3FMyVQbnvh2RGSaf4RK1cSWUgDsyfaz3vDpjXKhJQQ3K28VpBnMGQVCLUzv8kvw9kb2ZLJKSjqaho1zb4UgghVd",
  "key2": "4uayn1kxAAEhGZfZtNUTLiHNRFm4TSdSVG5VRHzLAtuLip4FGSoHxsMTXdiWJU9tLC2cNfwbvNp4xSaGizG2WLVy",
  "key3": "3NN6nebtRLbfLA3kSYsmBLH8CG4JoHaDKV3H9HyjDZrL2wKcPUERNm8TgdxXR68z9z9nund8mT8NP4SH3bYfiPQE",
  "key4": "6mdQNp5NVRzGpe7g4owQo6bL9gp2x5FqmBkrfRrt3ASxEqh7td6xNSJsDi9ceLoT6KxEYYtACY9mY57rCBsoSfZ",
  "key5": "24EmsidgN8cczGXLNnoEiL62B4C2vb6y7gxg82fdTFq56SKocgn1Ez8g8mm19hwrdKC1HMvd5u9vagmKi2VyGonN",
  "key6": "3iwFbTe5UFMzn1V5ciijRJ8tCA5dNzHLaWvx9brMUXHaGKXEN9GePkYm9Cng41pDhxzwCRnFK936CkVGvhaNbqPa",
  "key7": "4bWSGkCH7F6nY9FpWUD5dg9j47PbL35tPPnE1hebg7S5ZYRTng8DMehPYJejHmdnW9h9tWynt7m1WG9ExYMnfVja",
  "key8": "2ghCh6cajj5kxa3F5nfX7qLks867zEPtHaPmr1HmVQ4bKGmN2FQ5dBJAgvSrw5Kqo9KEHBLwzKaNzgWXPLLtAfF1",
  "key9": "5DuWq4riJJLQHwqEbFKcgLQqmPpok9uWf6G8GvMkW3tqtKFmcMAzJ774iQQSJexBo1xPJ8K8Q8bQiDXB2x3EDQZj",
  "key10": "5mxe59YfRfadhaYFY3CJCsBnE4UExU8TBA9XJDQDSipaFinPU787hCEsBHXmZMFLF9v8QqncGGScWrdJeyyo2jMp",
  "key11": "21TAFsHQfFKCh8bALJYG49YPnEmmeUdAWws8JtMQo2U5D3AaQxiMum8cNgmPSScQTPfQPbiG55wAeWkgndEbjMu2",
  "key12": "3RUAK2C8cf7GXneZKnEWtFsNn5BNvaukUDZc11ZW8fgeE6MJBscgQJnLXbjLdvaVxvo2Ntkc33JEPURu4CWTnzhj",
  "key13": "5NRnQR8DPKtp5XwBYHHgDRiy8nUrFuCZNFonPPZ6PbhjoLfrY3g19jaQguk8xRwtnUEzoM2dKojiZdcji4LU3oz6",
  "key14": "DrV5cGvJXxBn1o3GNL9otG99ARAKqGBHHf5K982kPbVjgUS33Egz36YFBFvG2sqBLtoN8c5JLsK4pCk9bJYUHvf",
  "key15": "4EKnyesaxkGQxinFY99pZL6mzZtcu2XuSoYVYZiUTtfbTCCJdK2F7aK5p2eAL7qRxgsVnsdWhcXVt5Qqd2PrPtFt",
  "key16": "4NdrKsSb6Ss8WxfuWTSgbeqAMP8CP42nMudZr6NQnjdKhKfr1nm1rXhWQF9xDANi535mAHygUfzNBSz4GSNfijuP",
  "key17": "53GKacsSDgb8CA7vrEzcYk8oZrKMbstoE8TmiNGbAveTo68Fcn12H6PegBoPzYtteeyi67NUFJesBjPpmDmKjBny",
  "key18": "2fcv2HYqCS31vBjc5ERG9qYnMokgXyhn4DYde88QarSo3vcQBVX3ZiveDxLWw8D3BYwEvu8fdng9Hnq4an14yFBY",
  "key19": "4cafRJ6dJgf5wP6t1h1D4ZT3N6LfLgWyTkdC1g6fh6xNBPpM6eewKhCyXDD6yhz1MMr9j8NzYrFqM41tCR3p8zCE",
  "key20": "UkN2146rTP32Ze6Rfy5A1Tsi9E6pARzzj21ErDnABQq1Mj6sDWTfRedZ8p64JzWKxVrnF6aAj1cpccekjuS5BCT",
  "key21": "4fWMmFfMq5EnhEkRESamtEmDEpHNfTxioTvvjrY7tDFMXwrZywatMnBYh8KFn7ZcZWkP5FHMBZzGHgZmWkxrccJY",
  "key22": "5deBZ9Pc22itRE1967yPeHmfXtzAhueQj2ao1LxPqnXK2fLEdoqrifux3xVKJUJW4xdXhRrfhPKvWfBLqVWfdpBV",
  "key23": "3ZdzygQ6Gce3dSYPjEQXWWUWgjVPuPQaKbXEEpkmNCXW9xmXWeadomWCs9a9HmeJtyphTb7MX1q4V9CY3JiiRXif",
  "key24": "3XaardXTqkDwLRhAah8TCXoz8AjDnSi22V84nCUDBihh2bLvwtbtTS23hxQWc9feFZfbLoMFS4mSgbcWm4Q6Sa9v",
  "key25": "Jrr5M99AadHLdtJFBrv1sfSiz1qzQVkKKnnoEFUzkxT6UgoiyaDHoTuy8Cg3FUgtKh3dKDZWKmoKm6GcN2WbpFc",
  "key26": "2WvndQUMDTyNEN6wCh1FZ8nKwu6h7wstWmPiQat246Zn3EN7nGdk1HpbZD8Du8JtJU1MrvPKQzN7zh4Gk3wZDBqX",
  "key27": "3naUMQ72GUsnmcSPrUDtsERSiqWxqhaGpPMsEFCVeYpwau79QmH8F2eQPM8N6JA3jVSobAnoP4MwV9a333W2msTW",
  "key28": "4M2cQoTW9wDLJGimTBALmSTbpg4UPF5HUM1fR5Hxx4B5KgJiJGEihQV3vqJi8HXgK7ChL2Y1ovSuJAWKmDj7NBry",
  "key29": "BHA3z3XNYqSk4LXYcGz98eYTUavMU9r8GvAQqyT7ZcxkF1PxWpJUorNZFKL1gApBKXNek3VBAw5EmDrcvDpphWm",
  "key30": "269bZt91RqCxZqLeRw7PWMvt5LKkL46ih56AdAH34fE14c1n77xWW95KiWYdfaPrWbsP7cnQBRQqh52y2vU14UEA",
  "key31": "4YHKCG53XQ4ihdA1g9L4yNjE8wasXR7obDMTGzDPbc1oGL8hMpPoNEEuGhGzkVVzqn1MfUyhqNcbaHGe4eFndZ9M",
  "key32": "2n5NQFc5ceeho7hk64EcAeyATAqPE8VymCS4JotE5Xj1o9tGecMMzv5oErUcdfPtd2Ptt3zJez8n9qvgvvkZtFDx",
  "key33": "4QDvCtyJfjYKWsm4TKQhfW8QnCUvzM9Rfqz8Zs68s7fFjUJjhQx5xHtvzpomkpkcUMB6nGxu3wT2K4R3HrhmSydr",
  "key34": "kQDMcmJgnZajH2xZGW7QZFcH6yiUnjgUMPPX4GCNPN9UU5MrbDseuBcEnMieEPPYg2JebcBirpdjRk9CWGcBtqA",
  "key35": "4au3xGkkrb1h82UK3jQxt6fdM1RwMBcngVnAcfkf2eTBG2cQG4e8Bbu25PTRrY5uMTg3UrqfrFMCLa7mRKbh4Y8y",
  "key36": "49fHLtzsG7vJAdNHZDmPdipvepocTVmH8gJonv1x16XXsXb2ktdPihZQnEQXWAj5JLZ6xvraD39XiUQxs8m7GJSZ",
  "key37": "CrwqfQNbc9qhpVESnrZC84sFVPiH4ZVT9V75DqQy6DQKJqTtP4nVEBt6mBNRf7nyChtaDtvAe7faFQEDrt31Q3D",
  "key38": "46cH7MaBAoYTmjZJYxhKg1mYbiSinx3j9Pgmvc5uML3Em6hSmkNfKvBPr6rYiUSRdwBDpwvYx5WbW8geXD81rpGW",
  "key39": "5FtdoyYqEDYtmShnvqANomsbcWv47Eq7js5j7YaiiBycAwnPj5oeNSJDudWhN4Pib5ZCV6CX7YMniYkNCu34P4Dy",
  "key40": "kft1HY39kLvtUo9X6t93vaJVqnQsUZDKxdvf9tULnLJTxDuot6uENcqdLrR2Psy6YAZcYc9QYfAwBVNVFjXbUpY",
  "key41": "53Tro1HMX9YCDuFrudjRnnLTMyKUzGocc2iGLZ7nH8A2ypTJhKsrCdnUnWttBfC3zKtaFqA8yv3PJrS3uYVyox9G",
  "key42": "2xJ7XRBWMYieRCdKumiRaLNYTGaWwbg3yaZFBSMeEucxBWhFaTTQHFxraX91QmeMCnnrG6TUWoYAJiZqdQsU1TM4",
  "key43": "5SJuLGg8t9iG6SSJgKzH514KhgLJ65vrrGyECjseBLB38yXXLg797VzHwKpA7kLoSLycUtsdPwNWaa31vg3VKceW",
  "key44": "4CwNxXJsdwderibWQmao3HehF7z3FfeTmodtE2kvm4poKDp4LCet97XM6mJQ1xWvGnJVjDD5BjXBUZhVus7hskmH",
  "key45": "5MDdM6vjS4Rn5WrMGUVgGW6PEeD5gncgKTDZ7XQhxaTWinRayqWerJmNy2dEaV7mDKQBGcWe3Vy4tPRTqPXUcfbk",
  "key46": "32mQ3ouPS9yxJ66omExrLRMetG5KCSfxLQGD6SaJTHoCctoim7HTEEUyhyELHyzNMUWWY74fbF78yappvmMoLPZk"
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
