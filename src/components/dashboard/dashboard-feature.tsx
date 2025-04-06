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
    "2wdmF2sAJsntVmubh4BxGuKBTqin2EmbEddrqZwddwUKT5ziZkcnP8a6JBKcFsjJjzV9o7JXDn8wtAQtpJebiFUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gyY5KwiiFAB1MMkmp5qadmSbyfaUo1QvtjrPGPx2ZcwTNGiG3yJ2SwkrdFW8r9VA4bETh65ZGGkU9xsmfqeqkFu",
  "key1": "5qggVXTw58D8eSBfAyWTv43FKhMUM84xWGf53MS4VjC1PvrTPfwhuwgrUAqykMa5dDyuPWXkdRWyq9yxGMios5w8",
  "key2": "2fbZAtfmrndyivcoQVREpE8qUdaeLbG1KuJPJyirHzXv4k2c67nBdsumCzxqyPMeBbeyVNL4Nzaqyg1Ycfvgix4D",
  "key3": "41sDEoCSHmECBdLRXjNharpoma5fUQ98ENjj1At3GvMqDzwpieVHtWKMrVeJ9p5kYoDrWF7azAwWUwoFq5KgBJtE",
  "key4": "3rMM7tUpFnR8MYWTzN1zyyUVt744ujTuxK3YxvDHooK1b4R8yVxm6zzJyzS4iS2DaVV6KKCV5Uc73N2SsDBGMNg",
  "key5": "3fziMYZk2AjjSxBKA7hSC8tYTEmYwRU5M6hbaoiGhvn5SQEmCdvF2JtNF1r26fE6ApX47HzxYqwhnWYD8AQ9c7wA",
  "key6": "W6NXMEpdRGnWYz21W8yi8W8XM5d8VjU7pMNcC2SjAYEBhaUwNv7z8Gf4o6ZiXiUhcgdG4btUiPt6gdbQwESH9Ws",
  "key7": "5VjMpDoCXBdkMVQSLiK4JSbYuwPJYSXew1sEY2Yp77R4MNurdkbjxpGUvLbjWDsM1rBEi9Qh3dhbBihvfHpEjUjf",
  "key8": "121acF9JAwuMQsLvUengutP3BuwhTcGJ4mY5uSmHB97qhSvu63aXPt36gnaXZuxQe9tKruejpwf4UxqFYoyxXSgc",
  "key9": "KZ1bKnpfJHgspx5CtoHXQmPuMiv4FdMEKyrjJJDFJy7iHTULoZ7eZ44cZyD4XwhY89EMCjWiGbmXxx8ijjfUo3U",
  "key10": "5dMghwKDA6MVjQaDuhiryfCBXJuv8E63SsaQPsjqf5fGUEMpc3hqtTmoKfzdUQY4oNJiEGq1oeM5AwUMNmaVFobt",
  "key11": "5uW2dNH3UHzfsWXyXAHVHAiTecT1N73EFuGZatYgMtW8xCC5JuA6jpoRgfyNuDSVSXJ9pYA2vLEUcTREXnhBwHVs",
  "key12": "2URsvVJCiGyVSLas5GWbQTDs2rfz1QCGPNdyFotS6UeMPCncPaJLkveoEkcHjbtvqZCuRMtWYMoGPQ2uPtUukNzq",
  "key13": "3oiYE9CHJaC3mkYyAvWQzgq4CF6HEe6S12YcC4MFaMhVkQNjXCdyx2EHQtqA1ABvsL9QSrRyvnsgw2L1eGHmijau",
  "key14": "4pWLZpF5EuLuwHDDm5EHGwWfgEDZFfFHwKnmXNWCdbMW2dCPxVR4TDvLx76vCCEwgCJ1kUaJWcmGgLhLqVfyxWwz",
  "key15": "2scAjvHWJP57bve637iNCdUTmAAgdASpaZ5GHqo1LnTUzb4vSMRj5QjwQfSGrFEBaX2DPQ6cCkmRdQ2DkVe6SCxy",
  "key16": "3pdzPtr8FxqgJGsNuAK1acWj1wAYUXgjTKBwzUecW3Fm9d3928PdtGPn84QDfXN8wrzYQgtTECAjnZWQ6EE8Lavx",
  "key17": "DTVRcXf11YyLNr6o6bp14bLES5VBmFytdi3i8PfMLNocs7gVa2i5nRtRNhU22EQSerKtn2hLzWwSaNPLYn9JHnA",
  "key18": "2U3t7XPfZCJzBXdMBE4UFWtWaxWeE8EwYCLeMDP9SJPRSjAmdexPHw3aye68e8w8Bogwkf3Sq5FzX6cYyMECQEpq",
  "key19": "6TSbM5sC7NGimhtxbFp4zcGaF5F2pUuiyp7TZ5uaTn4CiPPV2vysESoh2ukwdq1FAERfHBwHF5hukrFQFjQnJjV",
  "key20": "XUQNVG9ZJYktnFNgJnNC4vwsdDkP5zHFfLKkvUMY54pG8zuvdcHPL55Z8WT61dnh9QUHX1jYPGPT7QHmqZGfsuK",
  "key21": "4BVbac6MDvCbtSeuCnjs5Hdx3gVAfvgS7TadHk1d1aArCdyxm7VXrkf6idj9t4pzYWfDicEwtGBLqMpjcbRzTBf9",
  "key22": "3dzmw62fN97GB2zEGmqonZazk7xN8Y23brDdPkyKqWtundzx3o2Ep4oX5TBvPYaQrrk5ii1ydVwTZqKHiEPLwBhV",
  "key23": "5TWnZXY5PEm7KM7ignByVgpUCKZLeF1xqzaPUrw9REuPU9FGP6aBRsquKPZcJD5t4qUTmWogj22rUsg8sHKaL5LX",
  "key24": "3FGiSvtXqqRNTdD2hDsKvantey7pMqzyCRWkWFgaPkKLzHDqSQX8j3yiaKcKJ6MPaeVDvMqbBn55gEP1VHPpKuS1",
  "key25": "47kmk5fsqT6yUpG9YhTTt8C6uUpL7j2aS8p6tmc66FuJG7MjGppHgtoSzYHjrpnTpJDjBBJDydXQ9aE27uD8ni2u",
  "key26": "5MSwVc6NXdzFbiwS1rfggHsRr1GVV23rQtjzS8EkG1eJxHPTAaQuW1ZHY82TGGjANef4EVQsvzZn2w318ENp2c6k",
  "key27": "2jZ5dyCW6Eo5gMx8Wi2mBrCL8Rh8dutPFp46x6NirKAtEjkYFCv8Ki3xDyLSC437mobmMZ2KGchG9biBSxxNEiu3",
  "key28": "61UWgYhY6LLhvrcZTT4ypuMfcGYbTPVpuW5PCnp4QZhKNxw3hcCR9SNSiQRHTCchVKvv9Xh2AhJCMQbgTrPkZ2oe",
  "key29": "4eQrEvZAJZYg8jK3AgoSsorbw1TcpjaypQgvVBMdzNwjXJ4nnLQ44fSxbyz7zawtZg7XFNBDFkYtMYur4WjVyBT2",
  "key30": "5wJCQtTp7yeo2z6poJP62x7xDcMJcfd3hDLbDF1BTwJ7svKno6cAyiozd9xAnJj3tYw4Gvq7aNHEaguKRCNNXb4N",
  "key31": "xRF5AaAkYo9tn9DR3Zgj8fSupCyX9fq3v5Vx9NpFbGh9qRufCpu8EJcKc3o8NSLjcXBNPNfsWaugW4b7zCq8P1E",
  "key32": "2tKCiP1tTSsm61mCf3X6eCkSLmPwHs9VcpnLaR5he1umNTGy6QokFvaU73BPsqZ5stmaJ6564e73fVjawxvqKbB5",
  "key33": "cNK9YayfvfNqwxZdET4VLEQNBuXUrpKE8xx6m2XQpgxSsBbrEkPyJk52LU6PGoenRyGi5zmMJagoJcboTpJA1dU",
  "key34": "5a2PgSpAQfqhtRTMWcUqXsv3pkLDr4qy7ydiEKqu8498WdTVYEMXHUss4bV81feTWBSPjGeSBXGTEELsHmAbiToS"
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
