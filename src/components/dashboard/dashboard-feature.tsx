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
    "Jhvh1FdUYFEimVKamU7DasdHk3RkhXXjvmdSGLwKnhxFJqKMem4UQ7sgXtYkZbYsmJXvAMognd969huXQCBS2A8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f9oA7vK6cB9mhK6arQa567y7ZSHz4THeYdp5N25xG2YCemVACwuRxGLviJh6rcbSX884PnYNbYssabLdiQJ5zVf",
  "key1": "3nCVzYrZPanYWexm61UjmKnxbdVydpwnJ8JqHUTqCqyfoJHkBVfSkDTDZM7bGbuvc9QjmhNgBsXYAhCegZwY7T5i",
  "key2": "3YYtLU5xVBcNe1tZFYojNJ3FxcvqeFMWBgrnYwm2ABnJUMYTaAyStHAmVaXL2dL4QQmWPixL932AJTvRGVH6goCd",
  "key3": "3g15d4wSg1eW9b889yYCjG47g38Y2RScCdu4Nt1B7ACtmmpCgF2vxk5FvzD8TQ9DQw9mAThw2zXxoPR34Ado1QqR",
  "key4": "7QCGiZ1QBr85ws5nspNqiDr92binhWESv5F3xN2FFgLryMKApoHwnDbcc5UfsNfxSxxB7KmTP6RNHBXPt4RF4tm",
  "key5": "4bRyNSDZGvkEAQhwfYK6yHNCvqsY3vbNTSycP2NxtuzGXS2EHm3odAiZAoYckRtyeS84vE2W5wf3hPRnAwV9dKrr",
  "key6": "ZaphSUXcxxzhfTak5gPVGdBYGgsDTYmU3HLFhY3Kyn3UaDppNzBfZNjthNvicd5uAyN4NvdY8DFKisygj4w5iz3",
  "key7": "529E7kTwXnoYCTp7oouD7mZb3FJV9So7U4ARWA2TiwkQXj2TwNXiVyoHthUzniqy9QhTnkSRMvziNkE3mMDmBqtY",
  "key8": "4giz6E1YbCbczQyeFZ5QYeebuZbreBgchKQDUQ6hTKjHTeMVsgrrc46j5NFrgbaFUNQvTBLDFRyX1gUYubBuXq1o",
  "key9": "63iVWgMRZcZdi5QmUUiU3RhJKsYhuJ21WoLw67WvXM636RRdWfFqdQydu79kNXqXkbw31VtRf1VRiKg5ZtZAEZXi",
  "key10": "4XMfL17sCe3mtM77M8d3VaD74ZRFbywCoXaXLVkcR1yHFD2FhaaE14HveWZWxUdkVA6ReKSdTtJusm4uSVUuJeaD",
  "key11": "4NJHGbjbM3V819nVcvVQ4xXrtTfAdPsfuUTzStn6bWV7ueNqLrA3wTcyeDH8qGho9RLSfwT1dNP1uXczR8w5Zidf",
  "key12": "5tucFf9uaX26NVQvCgCZHLh243R77KhzGQgsivq9H7kVFqYXNtNgssKi7c2AXYDeqcgRtqXW1syTcAapi5ADGS1R",
  "key13": "dejqtmSdVtzm3sw2coPThH7SpiZ5UpdSxoGyYkTtBZauMi8n48yeLWKhYfQLWvyLd9MsSjoi8jCBtKMGYsBR5mN",
  "key14": "3GVsVcSCMkJ9RiN8Jjrrz4bg9Ge5acYZMEYi4kjoC3QfByVkAFyHcmvX9kMChPaLx9JHByAtB6stdxqtHmY7v8zv",
  "key15": "4k3JgCfaNssuXaD7YdbYNEM8Qepf54dKe8za2FbLCvswMx7H2WddexN9UhsSx8dCqsGUuM9WNtha2zeaDMpuDwYQ",
  "key16": "5xu9XRYHX96NMpcmgkRypyfHud8XSfHK6SK6NV2zDoDFz2ScjqR6zHDQeZnxHM7sg6GHeiq8nL1Mt3Pp8y1Ls4XP",
  "key17": "2B3vrCnHWZiMFztTuEUxzupjjtnyNiZh1rgGC9emZDh69zagi5PRZgmihnTZjTSwRTdoK297Q2yTUw9T8u4EzHQu",
  "key18": "2cZUZmyAz12XLCsHZZp7JKYt99PAY4DXBaH9Ts52AsbT9KMWro1kTgsPt4Api2qgzk5jUwNkvhyFXTnLbyYJEAcQ",
  "key19": "2HrQkQmk5Tm1hDrTk95qVCwKAvGvqGPfuTdChzLqjqYcMKSZXJGUYSxW2NbAnnRD1qf4XQKw3n23gazBqH7jcHSQ",
  "key20": "4xExeSBe2wN6vgsUrqc1JQbCb6r9nJXfrr5hS2kgDu2VjcDmF8hqBjUaw5zqWZSN6qwVimQCyxU9bMTxy1t2Q2yP",
  "key21": "3VtWMgum35LUocVhKeuvf6MaALeFBZBVCEeVb48gZPQAAQKp2qm7kLtGCihy6uQpT6cRQgEp2D8PbPsnrsBSXpWK",
  "key22": "5UtgMwttMcjVBxA3wSQvSbEi9oX9LvV2iFzQr7JBtmdbVoXXUXbsznEugrQgmYVhjPpuNqPAbMMpDCCQ7CHAv9hB",
  "key23": "4nMHArA8CiTzSvBFHQDr6oCxeQgJPSiqjRNpDZWLuTnETtLKhNqks5heJPyeVcf5p5feggauwX6vcdJjdiTEwVtp",
  "key24": "4cKiPYbAyrAjK3epDHgVbB6QaR5RvvmxKGjFyw4sKXCzGcTakpbJx5U2PU12n7GGBksSE9RHmFGyQR7ZjZ2jwKPy",
  "key25": "jr4EMzRggXKULgjTxrVTTDHkzK438zvAoETEukW17A3a2QLq1nrHBY7XsSADe5YYjvsPkzpcFBYkCg6zdnScjSW",
  "key26": "3ur6jdH1YWkWHgVpyHiUouN3m9zBqphUdHWwDLqy1yjqWyixvRWZaWRKeRbT2owB1GvwUx8y1GA4YsA5phADAenw",
  "key27": "4WrHJJWLuFaKSBdJF7emoztFLphNCFytur5oKKK3KJeZ47hhXVjF52vc1g5hyYWP7DeYpz8YeatZE2LuxoBuzmEy",
  "key28": "5mJDRQokCSaxibmaH1HDcsw98dq7G37xGhtBA6RDTjqDDzLMTyNgo7GsiGhtDAG3w9bbDGqaBECZATBmRBAVJxu4",
  "key29": "4HC6CDPm2sHLio55SHF6Vsv42Jn95kkUA7ZAVbtGByPW7TQKCTuYwudWZSnkCXeggFBShmfisJNtY8Z4EnKgNfqR",
  "key30": "3GtMQd2ERB9Lz6M1uwAhDCAqekkdutX44M51Qyh3ebTMMsinTa7dXnurNE1P83B3Rojxishm54Fb6Jv3JP7uYHf9",
  "key31": "3Bp3RZsgVgauRYC2PVogZqDiUDJmcB5VJwp9JMMJmrRfUFPxcbnRiCqkXLn57Kf5Fc3z2pATRKqknMhTZj4DMQ32",
  "key32": "4F2Lm17FbhJTuPUpq8JF3iCUGWS2FsJ2QKU8L2MorPCjNGEBoxJnQni86CV3YgbQJ3Chva6gujMEDEt5yVEitTJM",
  "key33": "2qGvTC1kFSQ4CeiBPoa6fAk6mzYrsaBpm9A3A6RLoFuEGDM9CaM268ha1nDodoaE1nBJtjm1mmenZSexody3BpK8",
  "key34": "4LUVPGzEPBFj961X9HaYELCy5Jpvxcz2o1tY9MNLfY3JX7VuTVPSfj8pueKeTh3brfSKYZmMtHs2rx1h2mX1wSJM",
  "key35": "jhkxfREvJWNq8NnaYsBmj9KYh8Ec87cHA7SNX19qQWsBohx92JzJgf5qxvrxMqU3hVbvmKq9Qx5Vb8MESDaHEdJ",
  "key36": "4LuRhzrHj3YnD1mKSWD2PV5duCuTnWSUqPbVbDYuokuwv4kqH42Aj4mXCuEWbBwsQgBEC7pzNF3GxMYreCeY8hjo",
  "key37": "4rHFEE8ntCmmxD8uoPNm9zHjSqZmGv5jHuGcUiTFcia2T45y4cYqokCPiHLXYdFb4cihXZN4NHQGjwbnUA4kUtdn",
  "key38": "2VGAgdGyvTa4RKFYGdxvCMsxfa3E8q5paDJuXVGkZQQex39zujTsE3Dfi6gqfnaHcEg87sHVTQVdBUetKBjxzXhJ"
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
