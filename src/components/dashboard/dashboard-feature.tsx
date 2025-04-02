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
    "55u4LbakEc7o4oRmoqxaLnxaLpG5LiVeU2orWwjnuQCoAGBBVUarfafbEpD2pRzbS3fFRhavNW5R2vTnmsFGvtK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3efiZBi7umRwGLaNtwH5rEpeZ3JDJiFE2YGj7K3Au4qT7NPh6BMkDAqv4r8TSVTtPDZmYkeM8Cak6FpKpMMt1uqm",
  "key1": "5jsTy8VjSRtedjJmNZfb843opjCfuRRfqPWi9r3uLqst8BujG32VWYWCwhesBge96BoykxdacGsRWEF2RWADCqTw",
  "key2": "5xnhM3JCLHhjUVUnJ7ahEFAdL4gGqa88dU6mmmAnZRUby98JeQEcaoHhLWWVgRVzLouDuDkFPHW9WcPjfqVSe2uc",
  "key3": "izkR4Rg3ZGubHD9rr5jVRb1QdWgGpFTUShdNrNcTy2r36s4378mTHiw6vKCFatSAFtqSrADcMCRnyWyNF3oX2gR",
  "key4": "4DzKk9GPo8CaJSmKaGvJHNoWbvGEoDmsUhsUxW3xvUc8Qa4iVZfdnQpt4FEXj4LYEdrJ1p3m2F1RKVQWDjiLHvSG",
  "key5": "3VvuNowDSqqaoEcEKHPHB23kFwsTWoktpCKW29GyXgrGbdjTVmaT8A49xrfN4Xf9dkFB5G3hs6tMxSmQoWrBAhRs",
  "key6": "52zFcmbuGyV6ppg3DWatAZoq6MefedGvoKPHx6u3BHZy9wq4NqLZis5aWTpJ2duFDuWm17w1FPHJanCQR3zB98Pb",
  "key7": "dZ1p43mkLm5tPhmqDH1Anp89osvL4Nn6J8rWqZs55NxkrNjHNXPGmRARqc6bSFmsfmi3Mi9dysc7fBfE3hifS4G",
  "key8": "4z4hb7ysyTKDWiJE3RniDiMLCn3cKWbPMfCg5NvCCTdNY6oUZCuNYZpZ7RkTxWiDbY8uxFqiJBhnfmaxLbKmosQX",
  "key9": "3CUKZ5C8crM97GQxSo68CtJE27By5xs5iQ4cBsrr5TefFStf3uXFJNoSmq5HjAAiBxGFf8aVD8B7bakXTNrigYEq",
  "key10": "5Zd721WiCzHBSTeDKA5E9dcaX54dpkLtB5HBx8DaRd5XRApXyS3aVMLMwvwmw4R4v5KsCLbCssYw1x6mCubQyejj",
  "key11": "5ZNKvorRxt8meeNPehPXL4WFoTPDuFQGPjvvaL5ac76dYjf5X8C6DZffAdcEw98ZBk4E8wDYvqEJGV22bzwHHv3n",
  "key12": "AvcECgLK6cEkxd5x54yRbLrTQzmDPQKV79JDznhk5M5AJuvfwBA4EdGwS1wmB8rUMZKmrmu22ohtYVMV318SmCv",
  "key13": "65YbCNwCzCTRXwUxHMSPAy2Xmxxsnk3b3N8Ny1AdUDPaoyNVT2hXW3bQd35PfbnzTNCZywzAMM3BGFkNCbM2cQDe",
  "key14": "VGm7mk27eFAX2BtnK2C4K3PWGfWC1WCPWAAaeMZjbaTSPFLfMfeikAa4gj2bVYFBgW3qC3AU9vUAXe94ZVtCLh9",
  "key15": "4P49c9NoDaVfbByxi6sor6DePK2L2khYBucmi1Qna39M5sBS9UVRiEjLxxTyE7Zhg6XLG6xHsPz5JEcE5g13uKRB",
  "key16": "qE3XxfBeBP9eHsGnuvgEUUcgpmhZ4dwFab8p5iNS5Xpt78zeDgmCbJfe7j5CrXY5KVMCXvGfE57fpGrvtc18AbN",
  "key17": "5PqmviaUGEgbhtSEduP6Rr7Yen1EFZggxMjHMvP7bkngR6yi2fooNDazWfp8Gai88xSkbDkw6sYyiVyeYEJyxNRz",
  "key18": "25YNdSsgPtr7c3uShhTdmSdMncwNnW1yPESmhwZgZosfy3WwJPUU1vP9MCax219c3WAhKsPMvL5LeMjDRdctoVCC",
  "key19": "2eyXK7FjhDr73BHen5AG59PB1uTroapj9bHQcueY1Nmao6eVAM8hNugLco83GPktVmga8HMzowFKcMxbdq2tqgH8",
  "key20": "4PxPEmcXuNYDFjoBP9VQSohkxBJpDJhFaMFpRS4Rhk5zFNaQbiG4yx1cHuj1osRpHfDFfmqF8DaU8X34zmES2cuA",
  "key21": "2xbbxzGFiKKeRgSXHyMULVpqgvG7G4nokPtCHBby1eFjBjkHnGtrbaJhPjs8FvWqJDp8iKACyoU7TTU9pMto3e5b",
  "key22": "5i6CbuK9Ux6Buz4kfp4zKu8gMc1rApuqgjB1CMqqQRPtHucbFNwuYxKEkBdyxHTzo7qiWA5APmsKaPZA8xTaTKPf",
  "key23": "4QddniNuc9Rr7eKRRc3b839CvtNvjDQ9h9NLxL4FLK6VPDd7k9JWQzYKPhe1kAhx7nr9f6xMXExe2tSFHw7dTyxe",
  "key24": "2GNUxxSyuHffvNibjiogy8VWH9LspNeq7sgDCtUNwcWuWDExBUW6mRWP54zr9EM4jVYyTUCdr2xEdn7gPzHKBz5b",
  "key25": "531Qpoqx5fKzBSTuw9cF66tTQxz5jDe3bBTKtdqo9e18U9VM18VNfQSb8CNHx3WFY4PTB8Tq7cd631YX4BZLXM3i",
  "key26": "2ycf1XWE4ceunaVcsPcJ5Ydf2mq9Aid6HCuyrgC24GPKX5gaKcJ7qPLjry4jbAXrCmWQC2PATHscW4i5Gn9qSx7k",
  "key27": "2GZNAMj4nqoBAsShnqGWg2taU6iGgPkMom3PoDbEn3zJh7ZGgLbK3h4hyky3aR2uSEf2h63eYVtmqT6gj2A7a3M2",
  "key28": "5sHnSGhtrUXvkDVsZa4HYETE31rWaHnU4xsJzKuzSBTxmD4X5ugyQkbHs8H4pxedsA7FN8Jtr4x2cpecP9bfMSXr",
  "key29": "4mKqcVqziGkoQYT3G8T41hzbLxGWERQA4wzB4UWj3VUFJrc1j9DQAW9eSFqEBSMjjmbSEKC9vuVtc5Dh58EHvMQN",
  "key30": "2tHuRSUFPbfpRh8ye4bVtSMtsezM29GgBJmhGUCDq5FNCdLUy5gnShEL4Yyd3e3gy5Wq7pd2sDVXSWQXrTXHEW6Z",
  "key31": "pHMKtihQbHawgiUpnacx8F8m2xSu2HEmemGDbZUotbmm9LaC5BiWAbQuNhrCFTw3atMTGrHABSUTSWRGqva4AMQ",
  "key32": "4JRnqU1pEbqGPKXN2TTaVi1pmcx1divpHNz2ywHWozaV7gXiNyKzkcsWyDB2nApuhPjdNKQCUzx5m6tAok9PKYVA",
  "key33": "5M8qhrUafmGTmGy1bJthtLtzvsTSp9tmUGBpNVfioxHb38ooTfPAPLiNksUfgiA7p84eNCUXZb6ASXPoV4iRgrh5",
  "key34": "66nok3AKRY5rZiAc9aB7tZV5GSnBrGWPd2HxJUBxUKvGhakHkt2wecM41CtNPi8LMfWGajD4naZiip35871jWoKb",
  "key35": "5cc9pvTsQdKPdQXEoRgpA3waMN81QQauuT8JTc5r1QSwLjR3qNJUiRk1xD8jzoXYKKeBtmspbLHaVBQmNLxkzqKr",
  "key36": "E5TRV6DjozcUrLUcpTMwvgW1zd2QV3LhCyHgTG4EPbAuKyv6RqLRTZuZS5ENkBgrzatRW3h57AdA5LPX6GqF5tL",
  "key37": "VVJsyKR4pTNFjotRhTaM33V5eDURGJRCxmgkjWzLgQ15cdLiUMaprYN1aaXynDBuSXyDxYJ8sqC2vzaw3W8CySv",
  "key38": "5jeaKj32MZsAp2MNGtRSaGmy7KJthqN3ZAyKCKF5mGtiQ7yMHqCzwaBJEr2C3y3GmSPHL9L55JUUyAJLbJKdQDgw",
  "key39": "2FmBAstz3qoV7Zky2Ky1cASVj2Qce5Eto3LPuLHQ9AvpvsrMUu1LP13XCYcNMW7QvgtvQX1frcLgnY5vepRLvuzC"
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
