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
    "5kzSfZ3LYhTrbJjHHnhppJrYmvKcCfhmhaq5t7CJzAuuEAWfKx7yN53CgLvCHrvgbcNP9mv8XjuLY8tFkWzrFSZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WWAhGZBJYowqYhY538i9DjHfGMpYPr8DFqyFFQXDLqJyPULzkp9Yd1quisKKaWaDARzTQpmseYqciSCuBKdvGCL",
  "key1": "27GVJDmRLNyongz4W54itJNabaWXkeJ4cm87rHWEunQVn1wXxiqn7oSYbsX5pHFc4ye9JQmHC57BpjHuRV9snM3V",
  "key2": "3bxJBMsZTdCknAcEfsVwBG4mPBRugJtcaCVxR8gRfv9X2sDMXfwS1zeg5Tegx3bzNdSx7dKzX23B1QqbmE7fVqzy",
  "key3": "2d2fW7cTuskhMkmQbCYHVW626TfXqhQ142VvN2eMLxRGAQs6temDJuDWxoJcnqYAfVZvxT9a46bnnmEPEhMsQAcC",
  "key4": "3w6UbfsaYtsD1fbD4GVgDRxHyyX6yWHXcapcgTmc3L1SsoQxqYWhwgqK9kmSjfdhb6gUMEqhb15vKaGJo8DzJSHv",
  "key5": "2DGJ59yY8aw4TWrDEd1CRzQ45UmonuB4c9YxsyDhYefmmpVmnqNMTXy6NMwNKwMUJNZsupSJKceAQkN1m4xQQum",
  "key6": "zGACzSJQNKXYiocpsiiyGJZBNMQ6Ak651Tim5eNJAcCgPXgeySWo5Gx3ZVpVXvQHNyoeCXVVi8Lu7hJBsftAzxh",
  "key7": "2MWHsbMXBVxnaceYTtpdZA3XB3bozhjQbrCy8MZQFjUpnjGCXYdp4qj4Bmh4KzUN5Y3iNwFMrwjAkTY2tFbMK5M1",
  "key8": "2Stka1BobvTu5VAKkgJYHSs3FTWvtaCHkVkPTxbTfKyNDAe4UjK4QT1Eo3cML2zUBdSmRt3vfdstPDTaeaBqJo5B",
  "key9": "24SqWCmyETsnwSLEtz5uh8D4wzrBZJP4uCtPD4swP7DRtk3s8KMBxNsNF9bkAxUMWxkfjUpWphv9T1asfaqTz9Yi",
  "key10": "3YNx47eSubX3g2YEqRmG6VDCjfoN6r3bV1AbkVzUzv7QXBtQSE7Xy8QcfXSDNtNMUqbPARY1vhMw1kvTCM4wnUCi",
  "key11": "RsPPqf5tdPtubFTGgSxGoNJAnZ6KeG26PLquMCog1Us57YhhGD49r8mPiTKtKoMfeAbwyzXNbgsWPFi9sgjMeEM",
  "key12": "4bgLGouhXBjt19zeVoegGa2nkKbPSshX9rf8qK5pDwvHzwK1QBqH6L2eqjKwNVRxqk4Zicw3y9PcH2bcKkvPAPi2",
  "key13": "4mrYdBB6zA79FnvCXPfMM1q6dDWcYm4QXyw44FrKnCFukgLMv1QNmFAZq5HUbisGoVPobBKq7PRhr9huZ8rTgCSd",
  "key14": "3Cfk6KyuAMDjz4ZqGcK87MDw7oFVMP5omhQX8CD7yVySu38gMnQPcrfXBhrbxnh95ZwWMdjx3cUFCNdvJ6XwVGhe",
  "key15": "3HZYyS9hPRtvpBethyytW7PzRwxRsHXScK3MUtHxY1JnMavweAQWsG6koEM8AfA96Jm4ZFszFSQ2VhtND1zW4kVq",
  "key16": "3xpuUpvMqisQB9DzyT87QaJD9C2VFcsdgxodqgajSy2w9sttCkoWi2AtFTK6Zkdkn4HB6NFN6y65oQg813uZYbQ8",
  "key17": "2oEwRHzMQYPxk26VT2k8NxMRA2XB8V2qmPCCqyauaEcNbDWteUdvnV9isVQjaLHZ9Jd9WC5oHctf2pAokCSNrvV6",
  "key18": "3g2SgM8taoykktnNvVDFaWxUuH7fXnzD8rfYx7RfLfEZULfktmp3UcZxekCxfDKvyavAZf3DE6tVMfhaPmfGjock",
  "key19": "5iQvwyojL8JnwubMTSyS4JhfqbKH776PQq7xkQfrLBvW1MBSmzjVFWwsrQLjgw8hpQFigKq61hmM3XTPAhVfYNto",
  "key20": "2YGjcmhDvqjNKvmZCZJag3zMnAaCTFi2NCuoZEp3QXjCXSRvd4P2KRoYZ4Q514L9xQUZSFd9pa7uRX6eChwfEKzm",
  "key21": "5qphnyDzsUueMS4duChMBWKgEEL6RaQfJY1SpWQfGX7hXhFtGkAsWEq1qydu5r67PNxUmbrftXYiFNGCpE67Y6vk",
  "key22": "3Ad3yj31tsKjHkmKr65pEJZUhDyfVuWMrPcv6zNpLavtRhvJTPZ9E5m8TmNiBCV9Ts4KBUqUKt8pWvYDJ7f855v1",
  "key23": "4x6dpsXxvZiih1d79kLHm2rqV3v8ynQzAXzkRYEcqttFMGMYNbFuKnoNDvDYSNZwqZc1sAwGsNnip1X2w4er6C8r",
  "key24": "4VqPd37tHV4pqRAaVdV6NkNRKftT4ezdjUaadgd4KCr2VDLd1H152WsXoGLBRZnQvD8jFDsvSgBc5FZ1WMtPgdkZ",
  "key25": "4jfPMwHBFRUTH3cQwELqcfxDrPeGe4rG9mq8H8i2q1MN8URNCjyYMvVokXBwvm8WERNz53eVTRHpNwHrzxMbfxTY",
  "key26": "4G8ecip7wjdNs41LSo8eFwf4cPfDZi6RCeX8i18XhNaHjL5NQ9HYWWHxj4n3y7mN4dwYVEFJcLxNdQVRRiPxjRpz",
  "key27": "4xdtazRyFY6MLpRmohegpb1hytTXoKttKqT7agAp8sNF9sqkz5Sx6EM9dX6FYdh86syJVCPytGvdtrAvXCtViqyK",
  "key28": "4dkz3uPyEMfFtj4EuMFtrxhEffnmx9j5hSCvDyb8GNRVw7H3yVY4DwqV7Y1aLPT2Q5oNEuEafXPYgk2zsspPPYQ8",
  "key29": "4eLVPbsJmmUdxeagyb7zRonGjgxk51K76U8mMKgXqakoonTtWL3Jv6vw3nEdopxeuqpfcgE2J8PS9V6yC6b87Ycz",
  "key30": "5k6gt6RWZaNhADRgPqXnvj8Rho2yVHrm4ZhDdrUZrU4JgykitvQeV9sSAcoijbuKd4ZYL6gjNG5yQvq6ahnyPYxs",
  "key31": "x4Uw2pLamko9fSrpu1H1ybA6aoZQTNUvZSGs7KcNouURk6mNQqrBURZ2A6ECEGWEAt8cAk258vPEjLcLZip6akx",
  "key32": "TkQjY8JqeLEc2ySxnYnVoLFaLWC9HPnwoA7WafuFvCLxoYEFmWGKddsd4DNpEVd72Vyg7H7Ex41s2VxWtWnyoqe",
  "key33": "2Tbu28rX3a6Ztd6KNpRsEks1ciLHkAEXZ43wVKRivr31qsR18b57q9q4BKB5H2QC7Gk9zngm1NXJvHbKtH5zuymf",
  "key34": "24gHAKhTwPabkSWTUMwMsdbrL3jgi7kmDu8KY4ywJsQegMGpxk1aDPuDikGmrdM58BecSPPd2TwLKfDU5wyhN1qt"
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
