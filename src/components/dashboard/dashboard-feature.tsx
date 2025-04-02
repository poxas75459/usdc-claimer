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
    "3RzhNbXgoxDXfbJBeR6KGFkbwui5HC6kz9uz2anZ2XZB29xERs288s85rRfiicdN9eszubZ7xEhCtqPMz33aJTHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vzwGdJKknXZDcv3WkzQ5uzne2hTXWrYncYfDX2hsMt8LWMxu8CYF1QwhcUmToxzDeUyQBsz8j2V9ttFC7nVLJZG",
  "key1": "3XAzZP2SdJjnt7pHkS3GppeEDoma9bAx1smp2htMGev849wTeR6puGXMGUhjRrsj4kTikijKWYBjSCyWJ6DwYMPc",
  "key2": "58TuPgvjAM9QnAQX1zWmETdQzNLr4rNEZsS2KS3ry9C9ADj5RtopHUAMk48x3zjLdmf6GmjJ4XhgzaTB9td3wR1j",
  "key3": "nPSM7GFD6uuu7Guo6pPK23kcKFGRs8hGbmumSnSUBaTvcUp2yQxXi8eJBCT736yCHbX6nKAsyhvQfgWFv6784kN",
  "key4": "61LQGv5rvEjCqe2p5fBWbEzm3YPvr1ZTZSBNJKEKvkAPezad5SVb7UGm7izN9oeTF5gy5B1kmAZUNBkUeyS568sz",
  "key5": "2sCu5FTJSekbGZqPA29UrcCgpYuV3Da7WFk9WAjNC3Am5CcF951EWuwVq1suMTZs7TuxoNRHFgTyCxJTJS4ns36K",
  "key6": "5rpdPEV2aYxx6TvJakNFjBpGHU7pP1q5tRqVbBGRkEYRxSX4owVqBGXyW3YATQSiSe4pt3iRjr8bnu2nTepdSUGQ",
  "key7": "2jK3pjGuqnhKtdPfeNK78x81cEZkRd4LzYu3e3AoSSTdNFkVtqsE6uVaq9ggknCvVzH2VfSTcvn7dwFDfB5Gs5uT",
  "key8": "3kdW7rbfmkBqX1uNcDgZFgAVQKpefwPc75dpNyJCthV1hW3NPsC4G3YyvXZDR4JPCJQNtfXVCC9w4oA5uZKp1vK1",
  "key9": "ANbbRCpCNgjjaX1thNf2fuxZm5C9WMBk4G6iPGZUfKTHFSAERGUNaG5xesm8rce1ds1ogU7zpQ1t7XhUYJU6DDH",
  "key10": "3pw72oqQhbggxEo5QEEseYSZKfqBVnzu4Ja3SFymtH5vdDpBMZe1gu9gZyrQFF5Uo1Bn1e2iQ6tifCDtif9pcQYP",
  "key11": "3vcYxb2rTXvmkbmkzWHjq2kXSVsWh1csLc2bAdCG59H3rafmVZpk8bTNsCsLsDBunwCZeeNewV6Hfq5FZWwA6BR3",
  "key12": "61Sh5NMLifj2itnwEYMiVNYhPX4SX2zfSEE14M1ahS7BqRAS9pDqTuNzkuEZbo5LhGFCv5rVBA5Hwwep2J2agvxh",
  "key13": "zqm28mExD92Cr5gCASzKGoNzHsZUU3kd1HmsmR8QJvCWLCRpuYyGUCAwbasSvTXFp44UZugsGSaWhGTJ3svEW2q",
  "key14": "WjgPFCHzz15TRuPihUi4whLLQBjWDfQkNxRYhprzBQ7m54VhfniM4sP9BTFPmz5QV5LfVu2sFLEqCNKUwc5hkkt",
  "key15": "3MYfA6DA7pY9gRyr3xHKTDHbTWhDGMBwniDaMpjkPLp1huRRcW3DW58rUpxQvR4gk7JW8WR4pi1tmEX8JJqQrHgN",
  "key16": "yY6DoqUYN2rA78gzX5YUqZPcYKTrgd2xxD2tc9uECE21VpJ6dAW7D2zZTi95w6S2fw5TG5d8EbAquVkr4yShXA4",
  "key17": "3E2ycoFWCZRD1QsciF7RtQWC9xXk2kC44nMiNJM6JcuE3oS4DbCgzmehQueWKeBY6Xs64jJFZZTmm2XkDzrJ6eeG",
  "key18": "tUyzLGyAgtRQUw4BkHzbNBPwKUzuRfmREfc9rTxTdHGzhdx6PFmHN9BWFi1SoQhq3QhjQnJnEsTYVanauZNroaR",
  "key19": "C49WHyZWdKw8Q7FE2kZS2WvhzsHKB7gARaN4KaXduZHEj55tmHkY6PvGbYYNoRcrPN3368NQHkZdoR312HDrwU3",
  "key20": "5Vw4MNstC1hiP36DRfgZYzGf2sF7y6Z7w88wSaF6K2WhqK6bKn7yD8wktg34cpgmSxrwr1vtibxMUcQXV8FcXmL3",
  "key21": "2D1HQtwmka1qtjTp12q5y9eZ2fPRecphJByLhaT1X4YG7TRru7QyFdWRjqLaNo7tEdFNC8cCW3yQUL1aPEhCpwrg",
  "key22": "3V5M7ETJBkDNPz1wCTsKEroDmnt2PjJdxzc9f2DcdFunt9gSdAFx9bL6irqoyK8mh6ine8tNeaFgHFh3nwwrBny4",
  "key23": "3xZdeZwmRBf3yfdF7ih6TL2ZR2K3snQtRvqWcoUMWrSeQWW5NEaBd2bX4LtTXmfaAX6VMzF33tER6oHYdWe1tpqj",
  "key24": "4mE3Bf2GdZJNKXA8cNncLAr24G3pmhETpNXFb6E23qz22wyR82f7ZjKR1EmFdjbzV9rgsKNzzV9LpoBJbVHGhRC1",
  "key25": "3fr3w7SZJN56Xc1btz8WF6YgSRmRQqiWpCrevFZxW9QEA932zYFkuB4L2xfhA2UBgeBHeBWj9u4iuo1YS24Xgoaf",
  "key26": "N4erzemWuj8Xw399towRvBKwY4Uowaz827FwKnKUUxpEk8VpJAdYQBQbwaS7ieV96Yast1rbbJRgsa9rBqDyWdC",
  "key27": "4nX9qqQ9Ktkgm9TGZ7fBZ31soDKwKEkaaPXi7yMqW4sop7zMDpUm92Wf5kupyAtVUoULiMuLUM6xM5quHzvxBAhK",
  "key28": "4JffW6yhVGs1JWMFhdHvdyTHjRVRWu39QCLAuGLW8CyPp6MFhxPArDYRBzGfNgZXrEJuxi6a9ue6eH3hHqE8YwMw",
  "key29": "48Kdv1X6YZJKvZvc4Ti6JmADYcVUtnLWdXrUpSb8fhHrt6T2z5sqT3CAMg3qY9yKUMjYE2ZfWCa3Gdj7rJ5V3BDe"
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
