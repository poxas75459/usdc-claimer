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
    "2xKhGzZjz9rxEcPcAaYmPT7szZBbhVGseea4CBHqoYwVppxUxJKsczFNeRSwGKBiGEk1DgmVuidFs5zCuy7ADPUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Z3S4Qo6Ejr9DrrNv79ex7weuAKnVzcxWhgJggiWcKPyfzdkKGrpjobBhfFwWxPyeAVJ6YQcACeFeSFw8wL6Rd3",
  "key1": "2ata73fpVqh5LRFRdrofybQeWquQpj4edHHoCSdxZ1o3Dat1vbDz4brYWQZNchVvu6ePRhjb6dU4UsoK8NSxiLPc",
  "key2": "3qbpJy7vLogGazcabWPgkhpJABsEAaVNa6vmLEJFfzc4TJAgrqMHciod5r2CZ3hu8nL5XjxSzmoh5krni5g2w76L",
  "key3": "5uBiPNfSmiExG8NX9KBVh2EPD4VVLa5N51eTpPJbArkjiDfmr6jVdMgkNaeX4Z8fUAChyWHYfgWmdhMUkPrtgbTM",
  "key4": "2QPFqoT1ijk7oaLxzyv8axzyC6DTu6XXxWSQKyJdQFUxGfzJ3puxLkUU95Fz1Qg59KSx6sU2EtXWeT4mVWKaaGd9",
  "key5": "7Zu1LxZdxuiFQ6Asy632yrVBmN5YLpaLxYiFCfVWjZyRLiV9iNH9a9iBpcbKh9SkrdVukVhcDcNoy1ToVjarayt",
  "key6": "GM3wmGmdizr2z7PZMcpDtek17XUZF4kn2vLaX7CMRbSPZBKqd1vm7KpQtXtk6eBYYaDV2JWivBA9ZWYnwjEJoar",
  "key7": "2e1eHepJm9bR8GjPdY9yafWv9rPK72Uerre5ZVFrjfz4y9kiAzJPDuTm2a6FHc8tNNPsrR2CkUV1XoDGo5ghEvnj",
  "key8": "2zqyjZhRAhoCpDQGyTPmxY6H6jjSvwqSwkVuRmt7tN2HbafRM7szejT1s1RgjTHNGp6uEgSBP6NZSv5ja87ceYR4",
  "key9": "B5tpWE9KqiXJ4jhiy42r9e6bxenZXTjMreYPuHnpWuYxLoYzM8qmzxbE7ZktMtA6WTVHGjPmGL1ZcEDSfQU71KC",
  "key10": "5JrQUyW4rAw7ADzE6PgnRtHcecNYPiV2SW3KJpeL99qrq7Jx5dZ2F3kjKqkUPtrMKrTWQERrLAQqJvrXM9EK6Df6",
  "key11": "sTA78bQnM3vAYdEWNjSG4LgMf3UhMmzdmnceU1Dcnc1TSZjyJttMDvBtWVLUnFN1dsK7eqQtRzDFMgkLjbziz9e",
  "key12": "QCganVEpfHgQvSHESbAKsef5bfWGzgwDPmgg8f9daQu3SVTLaLaB1eSPVKKbybStmxfBFcrpr5587tJ9Mrmqp1V",
  "key13": "5hFRXTRXf6LUpRTpa1kgfCnYn4zZxGZFrZkutsr2DvDyyVhuQs3o1KCjc149QNaJUaEFPRotDKsKmYm3WNSvAtsy",
  "key14": "3B9mfyzAqrTQ1tUE9nywvZK13BYorVVxgjDxQBLXoDDYtGQRkeZdtmQPuMNGz4WjR51JEj1nRZyob36zTBShwDAC",
  "key15": "3XbhB16MhYvcHkrzmRAr3esiJm6xw2rKAND237QJFEtzbKQf2Lb27DapvBWW999R3TQx5ojWH1d8z1gTEVvHFrCR",
  "key16": "2u6Sm1y6P2E7pizUgceQK7zMhRdrNEPv5P3ucaUqdN7m6XhirXHVYygLKRiVx6A7mB379JhqKhmWVUXMiuZG11u3",
  "key17": "55xVMyce5JY2X8oLW9yHHr3vjf49WG3aTDrMYeiJ83kyG9WH5sxAyYu6vwhEW82YSQFMUiTiRiRPoLLFuW5CW5Aq",
  "key18": "2mF8DJYMsnSGChNNzNNM2oMN4XuZ1WRJKwdDnnokoeuko5Ww5MtgwNEPsSiwqqAQWmPeAed7bqb3J6S8E8aDfjV7",
  "key19": "4G9h9Tf2agWdFVS3iLcqpLq9sNDU3UQ7sqsuhYuVeYmpbaAR4tBK8tPsxfpU9g2AT4iyrTFa5ihCczfpkTrZn44f",
  "key20": "63ZUEufRg9CvWzucGTDkKKKVFAfwjS5FnDpMAGVYYxTos8e5CrSeZB94qi5VSrfAPGcdHGfstTo94SkBdqjcX6Lo",
  "key21": "65N9JdgfKY4WQQtRRCTW3DE2srP5o2je6KYXxKmsW76tAC9z5QjfzPwJV14ooS2zgMBEcYKMKHiHb4ak5SBfvJt3",
  "key22": "Hy8VYZoLWpksya7kCqDLURmVfWHvoTA9RQX1ACnrE8oQM7pgoSsSxfLwDF3RCbZMiDxLp15G1MfRXSCPUBLruEc",
  "key23": "c4fBvnpydHPCFp8cpQzQR94XoACpEvtHKd3Um5KsdsMSdUgJyU8DhqPZ37Cn7XHSJMiUsSTpiKrc4LqUqe1dTJp",
  "key24": "5piKncq18K7iUSewaAfSz4hdg5gXL5MPcMvqzKrtLuatuRa1TPLSqTih1ZfcUJumPq69hZWJ4WnVynB95JL5686n",
  "key25": "2MGRo1NjpKmhEJ9L1iQs8zR9M1QCPdhwsjyVuPpyaCzMTADvUMhpGrJEtcWw8JnsEjK48Mzz9fBQ2Lc6Jg6S8f9G",
  "key26": "3tp9pHB4oAoYxqQ8B7arEnWVeHznnzLfGSzXcCY67LvcxAq974p8cU4eQNsapvnFgeVwkBkeXnDCfQ6djn7KEaGE",
  "key27": "25yyLSLcLmTQCfn6DLZd1a3XuxvTENh7f3dcvaJb8gYtcbuuhgDbTxpLrXsMFNR7mapxoG6LHLzBj9UVMTLEZiVh",
  "key28": "4677TLcBevkDwQbiuDWej98gBb3aqPCVWkb9pWXYUGxFJVgpwE7bhUxUFp8hMyhvb7qixd82wKcUMzs3Nq35dekf",
  "key29": "33eFEW6v7grkEC6wsv7cRXwkGDjxV3qtSmDbMyYeUcMLUsWLzqa4c9uS7hthUwuhLnLm4MRFp4HuFZSU1Xn7ZrPX",
  "key30": "4rvkc18UjaduLQ4E6boQVMXUqqmYwaLdftv7qBFAHD24VzSECztBQiopL5dybqCnRW55VskBuRxWkoPXpwn9jjW",
  "key31": "2SaoZGWfF47erkEVLad2PfFTWsRtb1LNEE9Brto9LrDQKk7efgrktPcooqs846GRieaKqrdspZ83R9hiCeqjqFmN",
  "key32": "5eDuU12yncjv8pW1BGvkiK6G2gT5DyPAiteJEBr49QQYAd1dQJeP6JvcTPSeh3vgTpoJ74MqHRipkYaJLkJprGVr",
  "key33": "253Eg6isAhpdbytcRtDHmZNbLhQfc23KrHqocKNkQVgN21gBzKZFrTRUVRyrbGBpvF84YsEhMyyinUrAYFrAS5XP",
  "key34": "47qq8sUU6AVs7JsadP9m1EYamHwAsfJ5yCUDGxuyCUCFWiifUKpoqXYFoB1L328A64kav728ruwekPWD442GjgHR",
  "key35": "41DmYQQT2r1oWv2SWZvSaRrPRHTc6W7PVWjem3zjyyXeFnjtqQCBkaMMT6jnunknFsxmF4Kc6Nxxkw6UTokx3u1S",
  "key36": "2bcq4xxpqkpi4oR5gm4cbntcj9CB14R6tA3HKfEnuDWuCqqtdSo1GcZumR6bo89Xdbdainrq6FQUg3dNBemNJJcv",
  "key37": "2R6TQhQC81gbPh4xVC1Gk5HjcfrtJQSFCrjQuDXKyhbhq7ACR4tZ1cwRLrRnRAyzRunfFG8pWP8L4voN7gyqwkbk",
  "key38": "2eGg5rPi3xSRgwk4huzna1ockuCSCHU5h4nqqqRXhDt8uD8iN5yYT2BEtiVxvZC833dFy9B2adPqiLDC8zzEgvu6",
  "key39": "svDoC1yJuGmRkbFM9FLucsYShaPMDnFEHLGtq722UXgzQHaS9uTx1xQqP1fqAEMGdUqzYWDCk7qFhT3QZMNFn3v",
  "key40": "37c6Mju4LJ1PQzdQC83fnQMRkL3LszkKLU9KEZBYgehNfPH6iDeg9p2Exx8SZZZquzh549XtPe8VMpiAZLRiqCYy",
  "key41": "2bchm5MyXbULsrsSimfVjxWLFgaTDzbLW2UYuU78az6rnTU3eWPsQEsx7dpKmcPh374DQsrmqGp1o1eW4t5G9sYG",
  "key42": "25MrKouwH2dd35t35WcUKSHwEomkLiTSegzrDimBmayLTvQP6uzJZ1wnvZeJ3E561vwZ8vHcMttc7FgHXUHBXgWG"
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
