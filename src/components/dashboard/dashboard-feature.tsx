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
    "4YMGXKzpTwC6oJbKcwH74vwsaXk47pnqU7dEmMVr98YUXfqKndqA4hWFWnE1w7hD95ArABsWqom8FsxaYYpjMfJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sFDLGXcZnoATuPqBMHW9iVMJoNQCvM8CeutXj1kiJkBuEYnQhrt2eWYmgVoQFkptsn9vWxgQiNkxKFNHzxZSCF2",
  "key1": "5QReLCgXWUhU35MPKrX8CuMn3SmvzktszAnBEB7pdnQTKAEVAXkuoYaYnmcajahpxPcAcye9QYBK8EdupuPb7x4w",
  "key2": "FyiHwzvvU1TykhZqHn6Ebc5K9B6hrhjH88NDZeQXrLAm7F2nbZpxApY5h27QdwBvPFg4zsixwNwkUCh3aFA1y66",
  "key3": "2yvBgjZa7wNGyf7QZ1ZUmbhwoPntg3SowA4xnSx9GiemL1FWc3hq2JpQ1Uv3SWpU6Ke5aWHzJBbJAuDNZjkN1xS5",
  "key4": "5Q2Pppy1LPgLrfd46fdWNkvXtHzJzHaULqJ6F7K1QcyBVBmBVSSQZWSXUjcZNCVVEsXpXAW1rRxvkei3TrpuUFS3",
  "key5": "2GMgpopCDYRVGH551fJVJKdYSq8FRNCUtBQByrywEobfij6V82XkZs7jzpzG6kwCvYvBfTFuHLWyAFJFZX9WmXtW",
  "key6": "2Bt23QEsjo1FY6fA1dKsAsofiyVqBnk68NXTmcAvwa3WDhQaNS7LWNxwbsfJrTF9ascUhxAAZJuXWThp9uU9dgrZ",
  "key7": "37XbTGDwe1gT3ABJ9U2ABg2ZUF7RbsGX7gy71AYf7ebACfw5pt3Up238N3nhK3ywTAL8No1yuUdMPEh97yqUgEXf",
  "key8": "q29RWJibExv2buqTzVhv6qhuFnB4L77ZkevaFzHQsTd3pSE7gs4tnEo6emQy8xMc7tUoE1DUmhKEro26Qguxze5",
  "key9": "236kBewAJcSA4hKB6XtUweALvHyPZXkwKaHUsR7NDiNLiWn1fCMWMph36DWGbxkUWX3srNH6MoVSKYnWdWLCnCox",
  "key10": "3nRkhdaPq9jtst1nsBxfSojbhYMVbZ46pLjzxxQJH2otRLUFhYR5o3ZGLciagtbe8o4MjnLLixQXXGbAJCb3sskR",
  "key11": "2KeYo59z113ioTN6c4H8XHzuqBxKyYjnWdoE1nDL2uzS6s2W46Mvv8dfdnqPRXP5yYidAJ2RNsGnPT85ZTAeaceH",
  "key12": "5yFNacYrbyTA4eGVkoCfbucBr39CrafJtQsCdMVWabScTMfRqSM6WsvtPWqpsZTB8kChYBAtE23sQPwvoJZnoUXy",
  "key13": "35CgvEN12KKFLnV1QRkyLPVBhdr9MnZMxwWr4TQN9yvPYRQa6ZCpYZx43pho9iLA68r7eQHN9wotmLT7NQVL1ykD",
  "key14": "2AB7rx2k1pRdHDTzCy2F43Kq3qS9baA7HL8UTNh4HDE4pkuCsB6gio4uH7ZtNvE6BLUSCSq1hQqwo2o74BK7WKER",
  "key15": "22va1XyMy9bkSZrB48J3c6NMzC23z6vSU27zCncfBCFAUGPSYsFrEmKNWAo3JjfJF72heC1ckewiXmThXRHTqxYq",
  "key16": "3ULbwgwfFjgM8THvucdFKyKb8RotS6rfoDCbSGqQbQAsqoM9NfJDtxqMdjh3fcjJVGkvf5Qr9ch9LUAChDGwBX2e",
  "key17": "H4FFefwx7XnhjoEx1NTtkcnq1p7sfj6PfPHgTv3ZWSf5hcRAxswsfKfMvjcU6aDd9gzL8TB5VaSnfxBZxa8WWfp",
  "key18": "4EMAR4pPBd5GSuX5ZKZxWjvNfrF6iqVEiNE141iXifnQpavUtQ3fAqSbs3b4zo7TNXyMH1sFGKFQ6DPxUHvvR4En",
  "key19": "3mfcC7SwbVMVD8r28YMRNFbAbMEy8nzMZ6xKrdqC1KU22Ee3fibejdKxBDXucBUHBXV9YFUU3z3CCaAj4pEXxrEd",
  "key20": "HQUNC1gTXgLaRCBtk2NyJf3mEvgVje8tkPpidnwJnnzNx1TEC7urCnuw4Cs2g4jxfS9MUfNRajirdsNPpgj1Hxt",
  "key21": "5Ve7nb2FyFnhVPoQBhjk9BGC1qhdVM8SvpCCL21KWsJNWinRu6wTfAzJWdhLn1gDVpg7P2ddYcuqGDGdfy6JoGC6",
  "key22": "641K11Mq8GPgpVVvaTeCnijkiKZzSJiWCtN3rH1kQCTPhN2RCVPiShdNBTu3TyE4oparNoNokA1FV3MdmbRiFTbo",
  "key23": "CLt9awgHXJEMmKcrKb2jQWdUSo4xK1gZ4u875yRiqUqhGnXZmZ5GGoA4M6tLqu98yohotap3vnUYhTaTaoaXZ3F",
  "key24": "4XipP2vczEwWvunNqv9J85bku2aL8JKsEe4L4joAuEBTJXSowKvUk3svo2BwWq5symTQCdP4dGkFVLNoMLYd7vLB",
  "key25": "4yPGfqy4pTMiCuJhHHsotX6ZA1Dr5a8AUJokk6csLJANXq4qHgNCdieMg58vS9aeZ2DGr4ssQUiqYs1qA8VTW3dY",
  "key26": "2yfiZK8BGPqwRmqj8DRSiYyee83ocuBRcUSKWjg6MaqHoV47xzgtVymzsyjyxrFbfTbNNe6E123zhBGuAebeXMbg",
  "key27": "3FjDGqAwWDa1U8xofRTqC98ijgumgCqufXsvPXhzpNv6XGqLn1G6q8TMcUBG5PQfuLfZi1sUpEUqvfxWGo2QbXtZ",
  "key28": "466iUmfdbTKEEgsSMXHP1Fnzc5qT83oRBERdHEZhSBznfzNyFsWP59cEMiRN4abqnZF7xnRniro4QdGaHVPYZz1N",
  "key29": "2LsZiRh3JriH5kNZApWf3BU7F25WRjHq3RoLeBCUeLm1hbfBAVVa7iQ8gotgMfTfQWHTEKk4q47PG7BexevcF84B",
  "key30": "CrW1YUZycQeHmKtYuPs4NU9fxXGuNeMTS81jTRGHUe8dAamAZq2FpaoRpuY5nq6g1siYfeA5j7t5w7WQjkvRKy6",
  "key31": "2YfhNNbgS8xQNLkjM53mmP43w8zGkazqkKi8CUD8cr8AEuARbRStSZgbsKLoX7mRgttPMbB5T3M7FNTJJq1DVhF7",
  "key32": "4DHwyTSJ1PHcafxhCsh89brdd9jub7N8Bm1JorJ9romhd6mHQjgEXJicHoti97VoK2bAiyZtmdpGUpfjkWWcwEUm",
  "key33": "bBYWiXYzHMCEdqSuzFoaCkx9CgrQDfYpo3u1VUikPN75s5JjLFvUJm4quWyYqKAz3PgMmttF3Jrvcgr5cYtWtWt",
  "key34": "5iN5wtKsD7mXmJEBtxqqKgSKvpDZLS3vfaPBs1StP9Cf5saifcx9QsagkUXcw85UM6ujVxyXsygL41jgbhmJHm5H",
  "key35": "3eXZxsN2Fg7oxm6WUtgjrK7CD94RjHwipnxLWA6SkQJzTYfLirvQgEZuALvNXBBWxbojYsKxkLwD3YCbCtCfVDj2",
  "key36": "3n2H5nUFw2XJbx4rEapsTRyUD2j66DaBRuYUTBKnxN46yd6YCWb73uJANJpfouY2gk2K2wXBzwEH3VcCQSZbEjb3",
  "key37": "5zYSerH2v4PPXxM47n4zmDme5DLzbsg3PbbVQn5yGXaZDygoq2DQRmrRcBmwbcov8x8KFM3vLjLPhN3yVgrFXR32",
  "key38": "4dsZvgKJibhsDnin6XJ7zzHFDFPsLNF7Lz43bk2ejq2bPqzTu6DKAymr4UdBXdUhSbx6PHuU7Ryza9NCFuTMaTzQ",
  "key39": "3BLo9iX4vDqsYLUhQtPGP8V8yPziZZ3E5LkWGBranD54tCCwTrGB3thGb2zGSdFkZkzjGkbwdqhLDkGpZ9Je4dpx",
  "key40": "4BUsdme7pd679JdfWk96Ug41knYvqa8BWXCiTTQBkv9Ev4LCuAZCX4iesfAcaZTnd2Btnt8deLx1PPgnMm3WPp2P",
  "key41": "52BSwqyERKgAvNwh4Mvg8FzAhwvMapejrtTiETjXWXwerkyDAGm8oLMJrywWPRSgzJz5uZWyH39ehxWB4J91LzLG"
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
