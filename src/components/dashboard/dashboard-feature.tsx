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
    "5GUNvMcGWq12zZx3CYiq9SLyDh2SdrFZEtKb1Y1mve8ynzKhEEKmjpxzoJ2rgHFxodZPEx3hL8feF7Yn1KPfCARi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "271Xv9bDBXydzeFLbxrRDAZSAN1C6XkJjp1M6G454ng3pr5uS1j23o6NgQrfY36d3ag1Rfe7EEGQDs4U56QAoJ7w",
  "key1": "4GC595vC4T6DphiprdueXDfFK5jb9XGWKFE4xJN3PD3HJcwUPJxdcyobPf3GCNKh4gPAqwKAxuPhJXH1Ce83i7kN",
  "key2": "5ZwUDBBuiKKdRcSTmQvBQMzzfF2u5iBzqPP5HugZVtaiKauWpDfxa4CNPy7X3wUMAXitFYVWSGUNHByDHTr7GUnQ",
  "key3": "4fk7XUBXMncgYDERcHDmktPPXEjPpHX3yHsZxuS3ujidUGZUrtrAewnLGtb7dWZEqUBWRCepPss5iKUigByspfwB",
  "key4": "5aaQyCU8mHm9MxiJX4q4yapy2Dk3xBpdP8m3Bx2vtbUJreXNoywgu2GXQoP6i5LE1FKo6Jf61yzr4R6ABJAV2rjx",
  "key5": "C3obMfxrDNfQowZJqYiKE6KEYfSBPCmuyhau7M6PjYGqhTjuhRxUdX4pKTcfLa9uLZjNqYJXhAtxeL1WMsdALRq",
  "key6": "ueMALf7Nye7WXCrFpFXEfbATBk6GWqqPYSV6yxs1x7cwkTSw221x4HNCdyt6xH4LYLKsQu3SL7zxXuXEbFhbKWY",
  "key7": "abp9Css8hntspere3jh7RMyxFgt2fx7XQqFmLzAmwqi4Ka5tNVcPjJfy55BnTHPTdm2XBCZHP4CDz7bottgdvxb",
  "key8": "3qkSuUyN5srYbaqwJMRAmr84aj3iJMLaC2RkKYvNksPmpDVoscBFfRb48csq1br7g3rxo878MYuEy6Yu7vjoXkFk",
  "key9": "57AtSrPVwQ2jBTivmNhtkcuBYDeqkoWkSxqBhxwcXSnf3ZnHkqPuFGW7H2J6xrKAueRZm51K5dBVaBB1mtvUcTiz",
  "key10": "4TKLf3sbRvmYabDRuaeD95bpxoSQWYb6EULUx8sFoA7d2ySmz78JXDEgssyaAcyeHAsHq85muEHkqP4S3cnqRnSt",
  "key11": "Kf3kJxEnmWCXh51mEMpEd2HwkRtcoLd9ynsSbY1LT1pVw2oSuNfwiFpC7GCwy1aFaxxdiQnXzKbFN3EjSnt9WTh",
  "key12": "2ohTFNRJUkmhd6HcjSryawhwwsSHHfeyEkX8XDMuRSRJVidE6hvNBMqX1XehT1g8UMoGuMPGQWLR1VUVGCoAayhk",
  "key13": "5oksuWKefuZMjDcqZfVG357U2NAapUgoo2PpujMbdtgWr93LsAFXYxboduopEh5mrx2hKMj5bxNZMDkSFdK8jSNa",
  "key14": "4TadXMaRxEBU1F3SzWvzumFWzfuggws4dxchHcePA2smpEtcPDriLfrwyW2eUEKRZNnTbGw71egJE85MFEU1Re4D",
  "key15": "5xpWAHJLeo9PwzHnGcyju1qhFNs3JLB5W5xrPKezxWSfAWMUwaHGaMUPcJGHWmrvJm2tTLT6mcQDiRz49pSRBqk4",
  "key16": "35xaHGj3zWjvaQRs9MzvXA5ZXXPhLP2nDh4zeeirhwcP1p3DNwqYbXH1hPHk4oNZqM9omp2BvWexKa5K7PzGnEhT",
  "key17": "4eT5rNXLczu4tB6PgPxRpWQP11UMy7PtJgZzV82vjtr1jpWPSzZ2Y8UQtRpLpikTMpPrGawF6Q1tBGVi8Ef9EwDS",
  "key18": "3T97y2V9bjyRmerkKWfjtz8sCJU1njuuXZrjsDcCPThhJ37AQ7ZnyJwtJesx5c3w9XCUjChZoXaHFFbWoUnjwE7H",
  "key19": "5cPK1DaUz2xEt3SR9J2psQhfnKhm2whGpxgfPp8buvBo5ASM4qb7YtEq64HzvNeVXMdV1JyhL2rawECjjFMeMzXc",
  "key20": "66WPFoYndC5MnpWafJeFfHwrVC26UozGspkAMU7L1fiKMzqx6nNHGoKd95y72aEUmCNp3jvRs5Zg45roMVQqcKe3",
  "key21": "64o6Pu4gpG3jE7Czbtwvo9M2tRFdsPCdbfaMPKSbt5VZPuZxusn74yVN3RHaMUi74xkK8sK9a3ovyB5yP22hzV4A",
  "key22": "2jp99CXdXTFZd3uLLVCBsdAuPtg8tAQzipTgvgLNf55fgdMVmtTsDwhEeR597YZfktjPCNBrG2KZjMoR274PjLWh",
  "key23": "5PhxdyqUPhHkNYLWsVsmCdEkefegMVSZEhnpYP97DAMt7bET7UxXLrzx4rv9yMsRau5AR4YYEHdmEoG9GRRSqFnz",
  "key24": "5xeYzTaYbCnFzBgz3E1fPLDHt8GC6tRrGngsRQTXpUeo68o76o8KCHJ392SuttWpwgKpzpvQv7t9tp7KT4FhKHkF",
  "key25": "3TZ4PjEsM89wQL4W7zCPrfQPYPo3X7SQAVe4aZh2PiXC7KuGdUXvmgqyVaT33vg1a1kVvqYSGcjuJrf6Y44AQgpE",
  "key26": "54yi5M583uH8ZTYhBN5i6Nh1PFnSwCJbGFCGpWLoxCQNib6xeo3tPWkhtcmv11rAk18z4gW2c5ry8wisCnvBYKjw",
  "key27": "3BKd3DYaRJnBNFAAJFygj1CnHJJnrCJy6ryc2csDT6EngFpp5dRNA9R7cM73dEtvoawHD9ghdBmwEUv5iu5kpHfL",
  "key28": "22Xrcy1yGHic8HUcC7wJgzEZRhEBCrhdaStqMSUFAEF3uECgZZGbukDtSN3ekJSgheh34k5dM7nKv8rckbAChrTj",
  "key29": "51Tg42b36Di5zC6Ckg1YKj1CpdzDY4fG4WuRFEu1ffZhVcYAoEgVgsnHnMnoTS43Gejmmj7SkB1GLfTYfscBqjj8"
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
