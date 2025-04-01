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
    "sQ3daLAhQhx4hk5pDaXBeVitTZhBV1sZ7KFu6Cx986sz8Y8U4P2uHnxiRS4FZwFLbfvXfTjR5dgr1v77ijxzZs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ayF1oTiA82Ep1cXDDccy74uXeMG1xa2mPbvZ9VYiupAkTG3kA2ACVifd6FLQLsGhDvL2TJffPJZSRh64ikEYbKy",
  "key1": "546oVM3XRtnfWemG9mcZGt1y9rApJdtrq6nfkES87ZW4JVh5G94oEu6iheKJ6aP5tJknLoiqTKmGZrzRtLkg3E54",
  "key2": "37k8RzUnyqNsbXnddPu29xsCP8jLdmv697nMHyzUgmU9YRXzxAdSobw9G9i1W7WhP73BE6tf7mnqD8xzzPzqSeWT",
  "key3": "55H9TdUs1zQmMzPDZw39tCPgMUu63yipmSpLXS9VNQfEMj2usotcZZdgAzW1CK4FBkx2bQiAaGDVU7bx4rdpY4UU",
  "key4": "28TiCdoLZFcRjMSNmQCnY8CXdbQE54RFA4NfJsnUB7qhcQq5yH5d7dn4AEWpLKYkiYBnwFnVbyrJw2ExPqtLBTpf",
  "key5": "2AN9FFhTaeHMgdwh1e6FKNexD13UWqjLWeGZBgbZpeBXd3uBjfFgpM52ckf5BGVw7T3xXKoH2NZtUxice1Mm8P6C",
  "key6": "2Qgvqh7382kcbsGXupL191z9iSoUw2jidjyaRbHG96eF4zHRTnDBkK1xg2MhsWd7rrqLEPAFdkZPcTnwZARmdKFk",
  "key7": "3VoXeAw2muju1DpuCMQiop4aWvnLLfmiYthfMKJoXZtM4FNz25ruQF23rPYexRLoEm5VWtNLH9h54hNsPNxJ5unW",
  "key8": "4bNbv7f957awvGFaCfMiZeHG6H6id1czrjVu53fmy5grBs5AMg444EWqUbGdenh9BNzoUyLm76vVGhhQoWzgY3dD",
  "key9": "4KYCxBUqU9hdsybxrorPVDsfrW6qYquwgkc3mr3HCTnEovUtPpCPWU6tYbdG4iFwfAcrTyvkUittm9o9EZXsjoXj",
  "key10": "5vUoMK1GoKBGHgCQEpzNE1fetETARrGB986A76jvBHgSYUQXMrwrmU1A8zC7UuqkTukWcZFfQhb39F3Ynf8qvNNK",
  "key11": "3b5u46sKSCcRGZZstKagtJE4i4VJSAQdgiwp5EgK6bU84JncMuX4dmakE1z4eFQfenknUPkXoujiZ8LUhPYJp5qp",
  "key12": "3S758zQJsLrhRZpMkBycQQXdZTTGX115BPfHMpvthrnxTHLAjGYfDXtiPNrkjSn58oisfJ7przSVcyYDUJHmG5sn",
  "key13": "5EyrD1yT289ouRdqycjCt41DL24WdtKGqJCHbNc8HQATfcPsQVwyNghqJpeRc27RM4n4xwrkjQoPyZ2tW5p92BK7",
  "key14": "2xHTiVPCTNGsiYSihh3VjWSafoDq9JiTAN23xD9DARWU24KA2E1qkFMTfJcGetxWawUNugwV1RF3sbXRetWFbVKf",
  "key15": "4Pqnedwk2RWJNzAna1v5HJhEx2oGYHBqbSpCAZ6LL6hkNzAxBEdWBFV2jVoErT8K81ySD5QppkcfyYDdALQxsUnk",
  "key16": "2oP4mP6S5ewCsne4K8nFyq8JRnPYJm7V2H6LtdviKnVbgm2yoVHzLejx2wggRcArBaKgK4D8H8LiKMQfZ76wmfsA",
  "key17": "36H8YZ5dxJLzU9iJvm1q5ot3vwta8Jthwtt7RnXfSyNLmTQ8kwR4ctibCKK4x4HNcw9choGKbrQgCcUBKbkt7wxF",
  "key18": "4hVN1GxgdZ8HKVjeZywjVwGgJXCJ7t5g4kqXTQujpUSeChiXfeM6wXRf8GGSwLGaMnibH84qcQZ4CUpv7YwZPJVE",
  "key19": "4CRpc1p2M5zod4zfHwKzQNPYxL7teaQed7hAuo7Yo5LbAXTq7n5K5SC11vULqpEJGWd6cDCC397qi5nSLNvVn2h",
  "key20": "2n5A2MMQgTeDJh8Tsa9dK9MiM3MqshQdqEtrPiWbzpiPLxVhvFsKNQ9ba3gVACxn9NFNDAA6y6jEmz2UaFH5ytEx",
  "key21": "5xpSTPRMdaqQY67G2ms2dzgbc5uT2fGZMe8x2U1Xr7sVWtKeJzZAKJvbvxNsGYGk3zJGzfhrW1wEx5s6gasoDvqs",
  "key22": "3UfuHLiBeQadfkvBSSmFRjwKFTf4W4akuKUvLTDjkZn4PDMdyHMXoQtf4fvD2E1J4KNfdmvm993zZBYJb5cPqxSW",
  "key23": "oRyGvXTXYficzUuytnnyDUqyFVQHKKCE3DeNpHUUQEHDFtQncpUP9rNGGdnGdyxGDsUTyGTN18Tn79asRpEtECK",
  "key24": "5GSTpGR8aG1Mvqt4dUUU3V5J9iExKxwgGaaf313HgG7s9xDmppamRbBfq9cFJG1q4sFcCEmjKByavNMPgaziogda",
  "key25": "5LZAjZbAvDJUPjU7PkyRK1z6BsdZVQKq89SVvajuBimuFnZjZfSKNJKMg8mP1rC2hdBwqRf7BoBG8pEd1Zyv6jMH",
  "key26": "5SLLHrDocLv5SPXCTDQxZkyp6d4AyJdpKcXy13NtuAcmRKn7NbzyAtS1LAnXnvzkeztzi4SVPwqu1Gpxdf6d2LqS",
  "key27": "2iqeVqQegDVi5SeeGJYU7KfEUHScRZNZ21FuFVPuDdfMkBBLmD5ARa4WvS8Y6ZeMX4U2H5bJxvU58akKVv6cbGXb",
  "key28": "2BjpzVv2nxUxxmdQ72osb428ie9vz1rge5Q1Ls8jVWsyw7RZVreJPZ6c4WxtQ6n5RF3nUAoqGeT8YNetQRN35kfk",
  "key29": "DotdwW7pSC56CVHXhCMjSgDJKFqsFt8M29yEsm3wiKRagBMwzpJCcdXRpNVKifJdZtXbV9rTFEGG1SnvGy9RKRA",
  "key30": "3e51iZF7Gf8hz69X4fDAzoY1LfqLmqfpBwiBocuLTHhEjvqMbmnKPcxeokx4HU9CryY7AfKWcMKYTBcb4qrKXoQU",
  "key31": "2Qw9Xai3bCoE8mqrdEqWM5ahtq26JAc9XLvm3PcLbHx1vMcyxwLovFJPQykHFXBvfh4FgpVhcXFzpysxyhFu556v",
  "key32": "2TZbr8vTQiRc8xJYW65fjuaB7nDUwP5nQ66wof7AREUZq2JnLE4cFRyfCvxtdz3SPFwB4KNjLhbRSWYobXJ3YEsp",
  "key33": "5DrUbGUvKEEwqyaDZCvErCteKMTKPZE53GSvq1WFyoB15wCi5gmJz6akMDQnS1T59FvC39z3CLsYJ4c3efZE4DoY",
  "key34": "5WoLV7a8yo1Gpe1HSXM8hYwg8J9z4hT64UKgYx6pcLjjFLjHtsUi3sJU1ZwaSEPcbVqQnVWqis8Rza4SktGUgMeD",
  "key35": "67b5ZdF8e4bLS8qFMdbWjwTxffvHEAr7QrEPJNhGHt7R4o2cA3GveZeDQHHh9qsqpWLrhBDTfw1EgNGDV8K5X3D2",
  "key36": "54yJ1cfPdtUiymEqr63dsNgce4UhAMkMLMG6Gh4u8GauiKb3w97Lp2zG6PF2tKpZDzq6zCVu7uX7ZWBa2i1s3ZH1",
  "key37": "4pzqWXthf5u1XY7N5NJsmthrz5vDkNvarS24UDAQP79mzxneTMWEe55XFDWboU7Kt4EXR7qnRwxyRpzJUM1nGRLE",
  "key38": "9sNMZ7qJWBYa62fsKa9eruSfyHAz9a4LnaAGp9j4gDPYyZarFL21TzUSL7GiVfC6C9pAdUaawUzRSt2b2GNfnAn",
  "key39": "dWX87cx8S2ZLAqAGmDgaKXGg5BVZYzDX1WCRdyfZYbDzKx5gxHLyHQavgriR27GrxJvwR5edGRxDcYxacZ2uhRx"
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
