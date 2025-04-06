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
    "4T3Um4dkjThuUcYytGQfoyGKyhk4bHtjGLvE2vsHSagrjkqyPzpifKBwUMPTfsuVXLKNaM3T8y7o1NQVrwEb5LVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dkV1U7w6uXPs27p6CQ4VYuaim2DhdNdka5ciwhdSyBmiPVwXHvQJEEPfMAEZsP5iEDcxPWWex3kxmmB2vbjT1KW",
  "key1": "3XZngTnJuoEN2ahmcsjv2Sjgv555uf8m4yeRM7MMBR3rTTkwhZVsfLP1wZWg31K1KR25LjpvCHZVqqbva7r6uh5M",
  "key2": "37hKPHje1agjgagRxzrCWL48D8s4TmFr9g1U6BUy2y9iYgWiyYrkVMTjNXAcm6SApYPLsNy7cctusN9KPqYcmKMP",
  "key3": "48J2kVcYmK78bMgvw9eC53iU5nR6nmdp8Zi1uW67oGbWuWSBDueLmvE2SSZWoyToApfgN67G6UUyS2Gvb8FNsRBX",
  "key4": "4BZD6d5Mk8vNSfUGLHysk2LGHF1RMqX3wGN5aaFSLesEP7vmEXAjjSbLggfBA2W7wU3kBHPXdS4Q7LxnxGu7tvDy",
  "key5": "27mnHHx6LQXMqUWDpV3kkxDy6ehR8FKZKeRZfSqNXMPiNNFgCyKURWkUesWiQipRi3DFY7d7te5ZDVpi9846d9cx",
  "key6": "4MribY7aT6pkJqf8qbNfsbCQDvNX5pinkyovGek8VHxSvjp3iNvqCxdMFKrMTb4FCbzLPTv9ZAGuQPXCJoQjx1pT",
  "key7": "4zjbpd1USSsdvxrbBiWk1ZVaG8sBJYKe1voqQSHwryGLDYbNQaQK6M6LVEXMVWY6Yjossp3PWz8xWaxHGQ3vzUho",
  "key8": "572ATvJmtGRGSgpZPGu45SNoU2w88THPpbQjb2LF2aYPUCgPMXyDUqDHU7BwuCucmXCUttcdh9tmAacdyNiMyH1w",
  "key9": "4ekqSgjZEdHB5XhsFh4uUKc24fqWjFz6fb28MMeJvWpnEuKWUuwg9S1jXmTzhct3xgTXYQ8n7Pi2PupiwAQuDKfE",
  "key10": "24uvHh5p1CMsVd9LeafPLTq5TUHvw7e9xCjVNfjsresB6tGtQHuja3NGeLWjKSehphRa5GZKmMhN9btHsG43MrWA",
  "key11": "w3FSbuvK24UHVm5XhcrR1GGKSNz37cxY4jAwTYFEt4rt4R8wz7HN3qMg5cZs5wAtsN9cTiDtvwmdwiWgTyqLcJJ",
  "key12": "4QLXBQXan6z9GsydAe8QQBzfdjoK6gV7tJzU6FA6cCeZy8gbWnUvVScU8Gw25bPtGbukYvBczC4zVDzFqvsnPr3Q",
  "key13": "3cQ1DMFDwW5FSXS489wPTqmCEK7DVZN2pYe8qesccC31gQk4qfbbgbN5mvqPhB1SXXAhrvu5CHqa1RV77mBM6Q82",
  "key14": "42LdppYLjbowrfdrDtUdGCLt1H8tiFL7u57G98pMomqTiPRQXYuKZswBqnrgPm5m1H9SsGnG5uzJLNmiFMMa8gYu",
  "key15": "PTqjgebCMVhe9VcEBVFFygd4Kdw8Rsh9tqMgBdGy3FxDS6ohrfvmm6JsAtoncJnwfEzz6ifejVEfnka2Zmi28jE",
  "key16": "37U5LRUmekohfNEXBAMqedowTofQpL6Gf6anrYUheT6egZJRCCqUpgXXCuAb8iUcaT56Nq29dvh8pnzMQSyUS4o8",
  "key17": "4WzoDih4U213bRy7V1hLN8VzcnEv9LyHiXHDNuuB6WszDrf161xNgRVKG6zwMy6snYRHnnE2WMcMZhRUk1Qh5gRV",
  "key18": "4nAqbsD8yTgoGm3UBDaqMGrXEqExgck96p4HadSZBESfzKXQHkbhJ9LaVQGeH38QoR1mmdUouA71w4xETZ2H5kuz",
  "key19": "5y9xmNMm4HfAcHSt9Sy6XoeQ2SPRjeBJRMbeqv74p2DbtwUcgD5NAv7Fpn7dBk59EpJPaKfqw3iPRVF3x8yr9V98",
  "key20": "2A88muZkuwfX8bZL1QdfUgXUzkuf5WgW7AQYChDoG9uSHq24yx2iNf3uyQWYuEhJdyFYW59jcuLFVqE5c5Pq6VxN",
  "key21": "3LAaBowtrBcZ6j5fHixbQmiUeDroYQW9v6TxyfL52iDcQRPFBZ6rjYTYEhBJbux9AAq6ZhwvBTUkgNZ1BrHdN6AQ",
  "key22": "2zdZBNTuKzFnXF5yP6ioVki8FsUcwF1o2yhAyYXETHUqrihknVA2kd7g2LCKoQ2kipi7dtYXpQ9jzW1pReK1gQoc",
  "key23": "5Ten9omcotxpYuYikfa9mPDPANEhAJ6JFz5bjFfW8DeWM5XuFUEmcKLenSL75DqR5aXJ8BpT4gyHZGjxx58aSZwz",
  "key24": "3fNX6cvJFdwUgZXpYzd2obVxeikfhjT6HdMPgnDW3q2MnsjrKucSSJAB1Sg3n5MjjiCdRzQaUQt8zLAGXjucNz6i",
  "key25": "4w5eMuzbJ76Nct3GcgjhxxSUaoE1iD26BpScYnUu4JctEiM86Z6saiERXRPhTE6EgkvAT83voqgRtrE3CPuSCJGJ",
  "key26": "432oN689oPHow2SGYU2dY6RLK2nm5bqrowyaDnwoHyz3eM5s8kp4gQoVC6pizhjatyj5nsajTj6RQjqXXNxh8Gad",
  "key27": "57b4DC1d7RxF4WsPVXNcdVSHrYPyoYwwx36btYppNjHwT3jRXdHggCkmoSSVgZazjWL4vX3Fa3eTciz5RbDQrRP7",
  "key28": "5AYoKBLwxP8wLUCD6x4cqBpoUuuQtd2q8qe1CAyn6admsPW2WV1njg7yJB5Ugjs46pia2ovPGmjjHbYhUz5hCmB8",
  "key29": "4MGQp9KPVaXQxQt94wy4n48rMCUwvsZSXQc1EGdaRaayEGHmu4aE1Kev4mk2osSDtxAgzaLiWzjUF2dQrSgSPawr",
  "key30": "1vxxncniyxzN9v6PV34dUGSRVsK2FFzzxp7Ca9dhdWhx4RDJbra6PSKEswmLnU945FDSwo8RVi9rNfy2HbDXEhe",
  "key31": "pqRX7TrDyRvYpG8w2piQ5vBbeo9fN6aoRitfcdPWXWVw5LdcAEaUbKE5X4sS4dXDZqdY4xyYofP4W3jJZmZXcYt",
  "key32": "WnDu3gPEgFQtd6Kw26EBtoh954dfh5jEZEXWpFipWty56pWCSenhJCt49ho6pMuDd84miSphrc5wZSCwLG9QVb9",
  "key33": "Rd7jJyHy5EtxNZmQzaNdtBU1Pw9btnRjGTE4ErNbSRtZoX7dhVM2gzFiEksi6zNo8CWWB2XqJfb1oJ1widihNeA",
  "key34": "3ohWEMtJ4gri4yVw98RGAFnpbhhtpikkhTHgZaQ5icVyBvB6ppSY493M8jTDHk8jou8bEebaqmjbNbjdZV6oX3oU",
  "key35": "4hVsH9n3qRq4Z4pZQr3c9q3ReNLqwEYF3e4kFKTr2i3VPQbwJR5RpikuF15nZ6FTKFzc5xHP3FuQZVkYGGUkzxam",
  "key36": "3CZLnxE3xfZU72CWBHbMQmrgfZL8B758vQAyU6h7MEBzYxjSBFQZajaAXS7iKLXGmhCWC7oHmEfU8rDVfCtiR2X9",
  "key37": "SEuE6UCLHpBrmVo7gwfr61NGpyAiRzW98q8qX26JYCCRmZ3etv6RXbjpydkcsfkr7Uxk8MTJUdMa71jsFP4d3qU",
  "key38": "2cWkF88zcJhDf5DwAjg5nUisuZjBGLn52Bs5nfVcdwNDUm6D7Kj193wB8SE8Q3FcfkSCXiMVyALJ47eZuw6AhtHb",
  "key39": "haxdbmqoP3bP2RJWFvJRzavcGScQd3dXFk23jSieTTU6kC4Q2kjXzaVC3toyRjStRtKjKwRC2zzhPs9tgbSVb6d",
  "key40": "5KBwZqC9N5k73zDmTL634a8PKq9w7STmGVf2NsdYjkpTp92RfqJhvf5bApyNcCnX6mGzVAoPdP7gLWSeGDr2YopW"
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
