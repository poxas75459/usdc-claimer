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
    "43zYsbQKkyycY2aeQxU1EXnEEcGoq9uEBWSHS4JtxViiL47bA1JuTCCAQ5NvkhUMSn3T1AsRqMPBLXSGzHdAfrvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Nqv8bxcxNCHkFGW42wQrur17sFvSebdR1gv7idcEqZv3UCyauenBbLXL7qkXQ5udheRS9QXq9nSW2HU7LGjm3o",
  "key1": "Dk2R671inQ9pVwuXNC52271s3bVRNUWPk4xZ6Pq1KEkqAbnbC4K3Fa4zjB522GH7e3xw9R8sZHXHWA9j8kSz24h",
  "key2": "4gfjpFxLgg5y1egb2HUHLKQkXE6Yjg5TQHN6pwe1UmqtzApAXpjYm4UNRTQr2nnuzijugzwhVFhhvMECUGvouDhH",
  "key3": "3jLMB1VzEsQE185fgXTZk6zg9a1SGt3wqvof5UPSUHNHDYEmviuBGsLG1CTRfu4LwUbp97RWgCJyU4zZBK2ikqJs",
  "key4": "562GY9g57NtHhzybgUEmxJqHKkgu6ot5HvgcVyaGvtmjhMNbUMKmng6cEgKqFfduTc3sZzmZ4r8U6RUBnoFHrw9v",
  "key5": "3fbdBbDkMTVBaUKLFp6jsd4HwiTfPQk4P1z8FJYgmZXrwDF4uRg7FGnyHmjc92DBsqv4mvhMUxvr8LdGyPHF7RZD",
  "key6": "53HNYaykXHSfGVkJ8Vi4DixK4DX6sS1HUPKE7ka4YEYduwY9VhmA22wNgjQARSdSadiGWynQkusMfoPLt78JjcA5",
  "key7": "2komRxpoomjd7GkBEUD1wEip4PK8wSHk86Ua1oREscSUMPhzVS7Zaihnzs6SWtB59DM5eJXAzj8eeZ2k9RD14BJK",
  "key8": "5PLVCQDxgm7h6djHdZppqZmEXBEVrctB2Ahw9T5cr1CZFchiwCTDwgbFLHJmSZuBX49ov6iRxSg7nytnWYuirhaX",
  "key9": "2PzNFGjg4CC6G2TPWkBS7RPEP8bugrvUcCsfys1ynvC4KjUm98hMZEGhUxjUWQsqGeFk5VqpBYqtFPioMESaK2E4",
  "key10": "MQzjvHJSk7n2D99dGvPZhwW63e1BfnfXeKDQgCPgDB86pMu23J1kFcnaWFfJ5Y7x1YcRhgKjjMLuEJnSXCmh4Ko",
  "key11": "4185EppYPAsyvK5ZNVQBTQHPVnfuDtGuv6FE8xyo96WcX8gSkZjRyGZpUBv6WzGLfwGVqm881deSY7a9KmoMtyMb",
  "key12": "3hQogS7EptQEHaa12LZFwmvW9g7pFao7vU2EAHeLoLEhjhi2u6qgA515PFW4DMoXTfq6ubqgALk9hczkPfvuN4Nw",
  "key13": "5S5xciU5L8YJ2QsuwfzdbJxwYefYiwBd35J74F7n8GHkzaJcHqsKWDDkiuHt5AWsbX27FxV2vc1Hg3Rsx4Y7qZfa",
  "key14": "35xEJYg3WbthxKxb4ASoRiQEzK2deP3FHBMi1HcQVoNx3mPXKoMqvxxDzycAwcY9x59ymeBAHuBsSnbgZbWdH96b",
  "key15": "5Z5a6BTVDREqmucVg286bbpzpnLJ9s2WXMdZrMSuqNogGQwhQ9oHL47CsH1MBRHuh9qdjoUhBhkR7YmnYxV2Wx5G",
  "key16": "2Uhq7QX11yuaMG8kfRYoBvsf64YDyoaYyp7oKuczAtxWf5GSPNDyCVD97371rfHFpDo2NvQYw4AXX1hH53QjLurm",
  "key17": "4Erfdc6JhGfbaMK1zzh6CioSETHgyJy2iX6iemyrRoBRXdHh7eWE33M5AMtxCrvBVX6aWcWuxpdHuXtcZ7WLGsFL",
  "key18": "2niuewq4ffZfJ1VXG261CdCcKJbTR19GJQuoRhJa43ZLLa1oFJY12pwsjL5hsSqDbX5KQjCQEPZEV9PtHUjmkbZz",
  "key19": "5yJKLhTFeyj5HW628vCUBEne8Mt7eGGaNve63xoR4kqvuZEa4ZjZs1UHeZgTvZ2tKq1dz62UhBQ16zfF7abRDb23",
  "key20": "5yBMWTACPWQ6KuSzcWgupzUDYL7ZiFC4PFuL173vB93VPVpeAdNdHHw7ktQzChZtn6sDwDUJKrzh4ofyGS97jxhg",
  "key21": "UqY8c4g3fcrnYzSmhehGmpuRXGE7NGpC5ei6q55gM7RCVnzLu7DTB4WXvcMoAA26LS2zzrjZFp37cw38Uipa2FQ",
  "key22": "55Xey41xidgRA72u6sQC8q6jMKbb6SiwisxL2zeKZez3PchBegtWVG1vCPHDcVkLKR1xvue2UHyuoEqHqLqcts7s",
  "key23": "8r3BmDgWUDUU3pb2KU6GEZHrTduycwekZnnmvsWrjP1XY1S9X6gaVDoh6bar31Yzviwj92RHwJajUoeVeq9UdNa",
  "key24": "5jjpvDKopGq9ksp3qFDNNEsE4rGXEBqvikmmWV9QdCKBSkKMbPg5MnXmPZ4WpFDDitszUzLh9jJYt5BUDxAUKezK",
  "key25": "j1U1PDFHg9hqz1tBo1tUmYprai371Fx7fuBJ9EMnA9gh6caS7iUih9h2pcbcPrFnhTAQhtqr4yJPCmsMGzVDAB8",
  "key26": "bKHrcjqewxZNSP6maN469Jp4uRyaQKjws9dLD2yJAmEFpDm8i3msfqRWce6bmx3xSCpcuBXC7Gx9fHK1AMhM1SP",
  "key27": "2xdEGMFWSHDrBKTcRayNWWBHiWuBUbwotTFYKVSx9xGjnjwEL6MsnPWrsyBPoNoU2fxhFDu58ZaP8rbkpBrFvBcV",
  "key28": "3ufAW2QNDSwrGTXznhMqzd9NiT1VjwiKcKH63tC9kuQA1NZfEHcQqepncrtChe5DUWJ8zzFGHToDrDSfkWQXzWZT",
  "key29": "493uRoJG1ztHqRVXueBsZLcpUdS3sTmPNnfzwRQPbQRph9meNTQsWfiVYTZUnkRLqBV7uboQEgbJeFNezieBEuL",
  "key30": "55pmyjdy77Y6iK6cUgRy5QhvJKTzcjkNLmDXHb4rhe35JaUbnHkpd2vWh3k4wMUXoXHVfLCeQBkAspKZjMoF7gge",
  "key31": "274ys9sBdD821DLZRgTDYfqUC2z6FB2Td8zXrSk5HREZdDjcW6kMioSfTSm8ePRLvxAQjPAbNET9aTev1xywC3C9",
  "key32": "5YY4bRLhkfm2b7HUPzQE2RT8PRV8VURSNUM68RDhapKRWMd1d8i6cGT37yxX8uiQpJH5CtGoE7mazyXYWmi4VrgT",
  "key33": "35WohMU4WF4haHrWZ6wA12Kp58SG5b5JDEnoJcsDaHxSLwyLw9WWHkYyG8Ko2VJMWgFibrSYj5CFavcuZXPsNL5F",
  "key34": "3mrK54NeAcPkYcDU9Cx77ZQrQkWvb6H2FXRzYY4rnf2NEWccb1FyDDSyohRgZXEmqVjzJanDWC5p7hNtcw2Zrv5t",
  "key35": "2t3NE7snviH9fTK9U1KJJcZLwMehwwYNJKKSXJcpXMdWoS6zFCG4kveBprsstrJZPo8ZbQfjGUWPhc5VrQuZDWbz",
  "key36": "FHS1ejMzM4eriYqWRrAfkKCSUeEJGbaARhwebUtuu2EYSUGvzxYwuzdXUGk3nwhVhTZ274YjZdo1Qu35pB8maAo",
  "key37": "4SKdpEYHc9ZDFK6vuCMxirTWPvhG81Q2vWUpjdKsudczDADfuuinUkJDtY2rQsbCCRXz6UwVyws2MN6jrdJ5WgRk",
  "key38": "dERDgGuofWBjnoF1sK9oX9nN6ErrYTRNUNBzdp7wmaHSpXNNmK8cHw856kG6FxRRyhKJBgaaTwaxS9HRPrRPcEH"
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
