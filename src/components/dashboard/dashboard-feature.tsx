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
    "3XHdNwwCCr5ZrL4Xy4QyRGKyNw4UAGshJavwcWMuNrLMDvzFCDoD3aaMWbt51FoLc1M974VWGAv8brh5HeEsNqai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4645YCK7YrvNiY8teyzwWpwumdwMCyHQU1cZXDEXGsdabhWx1yKfraFqtLWg7gcPRTJWvPnsLkse52okTKVNZx2U",
  "key1": "2ZHXM21zB8qQ1JAVddFVGRBHcoeMAVgQVgAzTfU8H461omjQfGSycJhvVmdXo2eFBycuDQXUCDJzqWVgjZj5Lztv",
  "key2": "47WDguCEQRXeqHhokTbuqnjCXhTcQ8jtwMfvvWsE1gEW68Ur6kvrmscdZc6Kro7de2ngv9j137h7mfcd65wwwaW",
  "key3": "os6jQS57KCAVYVDwrxAyqs79gTiH7QfwwNKAEgc2a4hBEfP13qMo2eAAx2ioXJcC8KqEyYBUo4oxrf3WeJbS2sj",
  "key4": "3iTf7JwHqJX1h3SZCkUQ4gmt3qWDsEiyU8VHerVPmnH4StJQ52U5L2r7ofXMpdTrfYT8zRFnF8sR7jPSCoyroHeY",
  "key5": "4khf5wQRACQpGA9DHdKvfMViZUQm8B9eoZmXeAnRkUWf4SBRirQifaAahjmS83yMdRQVAwFG16w22LFop7u9PMD4",
  "key6": "4jVNpJD8TAQy17oQXTEFDDRMK4KDxNMTXSGLudQ7jzpzeyWDRHmn7AQrCao7FJJ5zzyrE7pEaStjyXYiTUzr3RRx",
  "key7": "2KeUkB1Yy8RnZwetngxZRN2V2FKCdZZzGBS4Euob1veDyhV7wZ1iNk1UdZeX2Xtnsmk5RY5kipTYiyk83vQoyfXA",
  "key8": "2s45DkMfk27Y8LJn1yACRKY9S4airhtvHtYeKQvB1Pc7EQKKjGuM1XzAPntS92NyqLGmEwZR8hdPA5NqtBDdjQi6",
  "key9": "4p6y8smxw45vsFW3RXAqytvbjAiT8CQ7aTCQ2PXKhVUEB5Q7KctXFrAqRt3rgSM4xtQDu4q5zTm6ntUL9mBeLsix",
  "key10": "ZGfK2PciR6yJd7ANLEwRqYTQiKh8cYC4oe2QYNwZwTk1XsjWwBevycpg2c7LtDjJ1AtvLJ9b6MjWSsdqSPdvmEu",
  "key11": "5xhqPbQWvAYHW9UkX49SkyJkDRLUwnNN7xquairF1LAH8ENbfQ5Apn4hBW5NNAkYzVaVMo3zSQ3PD15q8k1GT7ko",
  "key12": "28kyMm8ZGLFhNV6vy2hsF3w3ErPHcwFRA8jxtDAmgDgEk8m6xKxPRvJMUqC7nkBuT1tNVECfw7zE8QNXVdp7pRSW",
  "key13": "3V2k6sLfSfspfuqHbK2p6oXXVtP86kof7NmQKLGdXxieYdrpRuKzkaNcKMmNVPuPkdoUDc9u6ErqJLdDHt9cCJ7C",
  "key14": "4Q8TDz2DvhsiZyZj8xspYeEV7MwfNSC7zuEhFkP8uBATtx4Ef8gqok6xCY88HDHmB7JyzkfN9tVaEk5yxNzaGE56",
  "key15": "Zy4TSaRuiq1MWnGKQXep41X998LxVWtQYwGSt43WPsgj5pDx3juHjBXhP7rXPFKLaGG43hirk65p9BHxBhpaKe2",
  "key16": "48TmrtcUmWVcXMZXfAXKsePyvx2CrqT74YDseRz1vv1RwVoTWtZQ6G7V2c94SFWrLfJkTHurGo1c2jJdJm9JNTpB",
  "key17": "4NmqZAz3zUTMDCah8W8fQ1Skm7dWetB4Zwvri3xHGrr6n3rafpPGbySbxw974naaYZVACMa8SwMX4s88s3n6PAci",
  "key18": "3AZ6vu6rPMh9SKcHzxTf87MPSgYNn9Bqkd5fj2BnWvP965pHXYayicmC9bpFysyFGwngAjYTgrkY7yrept7RxH1B",
  "key19": "2vk6fyAAm8mC7UtJGsYsUdRPWGAFmK3LyT6npyf8DsxYKefKC5FctkRfviCDJ4JxKMiTCyQH8QMUJmvdMUWzfBCS",
  "key20": "4pKtBEfjTgoxVwi5B7gXTsJms3dZG8VTGPPf8vX4eewpuBBkwUwAx2zkop74FSroMFgMitceM1NE7h4pgDiRdx46",
  "key21": "2NbqsBaK4naSsqzYtmPxqM3oggjNRYibL2zzr5v8wVC4YHyHbYjXJPvr3VLMjM81WehwVbsgYPSmq9UH8czmz7Ex",
  "key22": "5kuRAz5RPUNPcBfvwCg1h2H8daMFsSQoyxLK9sDwEfwmpmEt2M1qEkDYGMyXLgi38GKUaxsGJQKscZavSfaB39KS",
  "key23": "48agnQvfSYjJkGEZzHTfVVxxrbKguMuZG1EXuED3LKjoGcN7pU2oYCnQgXTVhKMguKYFQhCv9TBtNsTRX8FM1xtB",
  "key24": "3ZjgxDJXQ5T1gTgGwLdHF78oWXf1NbfnC1gBLdumoLMD38GVrfkzunM2Uw2B4bJJo8E3c3qZ5piuvpLLFxLh7oEs",
  "key25": "32AJKJXL2PfJay3SEA2dhp8mA5ZaDiMsu9ZYmLh82aFnDhKi7Mc9LA2ViGdTPLmuMDmmjEdk4so8U8jsfaafoYmX",
  "key26": "2cnL1ZAaJz3mUsuWHLMbr6EHhbafMtTLUNQAMq1ZasLyDHuLcKgZ3Kt3U2qVXZNu9VNmmBWWtEhPod6PztPiy5d4",
  "key27": "4KkwcaqqfMMvnxCwNMA2sFzwtYhVdtJkxZUYmfAMMXWgoWfGReePCPb7QweZeETwFTqk5goNTWAPucfmRQw4atKb",
  "key28": "5NzEb9cG5o4ZPHEBGA7rFSPA1WuDY19J4zMFrF6L2u7GqaEV1MvV3zosninxbQXKUQWJpy1sFpCgfNxxsshU5LGT",
  "key29": "2fPL2heGBWgkd1oK9pb6fYv1Mg8vtXg8dmHfViJH9oYyTD2LzNfP7oMSqp8WLC6dFc2hwLRT4sjyPrKMowm9QxNB",
  "key30": "tUyTbGSz4zhCLxDFF4sPmPvoh1ZZyu5K3EyzSD8E6z9ygi6vZxYc2itvnnrbVmyQFYemWgQETd7pUPmvH1Q8mh8",
  "key31": "3x71qRzUXPvfDATvsHuxdMNtE3y5kAT1B5do3ysQ6kf85ete9Fw5dt1xt488t8B8YVbgvRdbYdn7v1S3oxxzxPhj",
  "key32": "QXmTnaNiWszfrGvAhQuNNSxtdCJdLZbqoJ1QcPJ3bHRHgEUNjaWtrGt6FGiACGonfqYy9FR2nTaQd7ZgUFtUAuW",
  "key33": "32fq9zKa9rvycwi3BK15pnfkyuHANQEFFh5mV5g7WiVX2F7fixvv8FyPynZKGDNnTGEXpTm8zr3sppcx7eTkLjLv",
  "key34": "2Tpv5oZAjgrWoiuyFQE6Hqj4j7Ek8xFHuF4QvzXEJdWcSUuyqkN3QKHrxqLuMhzxJ8xou8kMVe4hD7Yu3ncXd3z8",
  "key35": "3FfksWLZ6qahyYynF7kWjczX5vvQ5ocXvP4rcGtdRZhSJXnt9E2EYDrzPAuhnf3obn7uWczN6wPjv9uF8ZARv5tW",
  "key36": "3wMdaAfgPX7vsjTxKzCryfby1KRL7qbyBU4f8G65MP85ke17jQH426tPskUues2WSFwLchuQ2hNhuh1UsB7zo97a",
  "key37": "yqtUvvon56PesPxiVHkaTHEokVaxFkyZfBtKzUNAnepV87FeCxCCV8XYg8GiWAPNh1jwGqFZWrpZuSCZ41nw5TD",
  "key38": "5A8FiNjPHZpne42yRwsB4cFxpCzRQk67N5oKiW2myY8U2D7kANHR63j5XZBxzV4QTiBJM1wwLpSd1dyRJAvLw8HU",
  "key39": "64vnGnnjAnmTAiPJhmYt9BqeCMc7F5vQn17AHxzCrkTQfjzULpQhb2RmsiYHsxYmg7QEoJLczXKDzyuWLMPeNUeK",
  "key40": "49uURe92r6CDvfjZPqFhcbgoXYDzGqD5STJ3eJ2oaA3XGadWc8sAqpBnzF8QhkSMoJkhYPp2hsScCwpEBQMWg2Zn",
  "key41": "42AGLa6LiA86cfXJhRRTFxH5uB5FZEwcRcrSHFrYUjYTu45Xmid9hvBdBzMNrwp6P759zpwHkaeE79c9YCFTsmHT",
  "key42": "24W5Lu2WDxbJDnC3LGKoc7WSqUFGmwa9enszXZAjJvUFPZAmZch2AeU7v1cNEEeLxHit7RHL3dwfPubvW9qgbw5W",
  "key43": "3XXk4LwGXQ6s9y5cbPfMH4fn9mWapFsxXGhqHLqYcLZkRiuYW4sMyA5Gj4pbviUF5ZxosYrDLnnvVWM6iJSfn7aH",
  "key44": "3DzcfSLjHcCJigXcT5GxdKRt7TqEL5hbzTG6Chr1P1E7t9AdQNmWQJVKTL67WckHL6xKpsWazcVMXCDRDtjpmcMb"
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
