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
    "nvq9v1WkJSCWngzMpKzet1QGWRENM6Wsuw2xZsECd4BBjLesYJUjVHUjZaB75FC9EstDnuVvZsoxUUPyL4x836M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AhZrWkw39YY3M6YaPaopKoSFvcDqu62hgf7qxE7jXkJ9txNpPDHTc4f8g54igfPEFo5vgzVcfQtfmpc9F9A7ERh",
  "key1": "4Mio1dRFGc2Nkb6zSTFPwRMZNtZMy755pxNfjkxXWDcPgDh8ZP4DowMx3Ni1CGgerFdmQE8BCqsQMToXPksFvuQc",
  "key2": "32gk3zuS9jCaMYVFxmcWc6LhnXfsQv7C2dsmZHP91kctEAdqgogFhbGYgr6hqKgp8koaU32CWH2GJGQQQtKcnQcq",
  "key3": "5wxTmUx9Y3CdQTUjrNPtPZ55KgUB3tMaBqbhWCC8NGWVMgWMmLQqfX13qvLf46JHWmxunbsntWyjZwodUPwqNRTc",
  "key4": "5tGnANkeycS88QD88jzHTKibtjgeGhLknPJfxF6mFqyon8aXjE6G3BPdWeB3GpGXh8TAZoQn3K2A55gYv7MqQWRD",
  "key5": "3arbeNZisuEZbv9U852qhFkWAS7iWTZ1D4FzXMKwghh7jnXPUBJPb53kGH4hDB2PZ49SU3R4VmPUmyQDbVCGPXz4",
  "key6": "3Aasaz1f1igY6eYPrRw7ueYGCuZuhC5jiNLjCUh9YbWGbjbPo8xNCZtHEBvZvkY6CtUbMta8S3uRNhCDkxC4rn7r",
  "key7": "3b5nb3uFY6fXWChnWJ1H47WknLUNMr9AF2yFSRgpy41CqpNCSu3qLpJPsaB29dxsKsCDY13aVTqFJYL9sgwZRAfz",
  "key8": "3oZHuGSEincvkKVJo31desnDQGEbcnCye79jMXXkiuUeYTxi1gDYCvpiyQtjysL3in9x5XvUtkQ3S1XpubxQq3L1",
  "key9": "HhFTKnfuVZwGLyaJwvuKkuFR8dYLDrb8kU8DYUVkzgy37kwQJxhawJUZMAV9zXr7E5ibFT1nC4uBwUFs63iX6Bz",
  "key10": "2AkfDwjkZUTG99WAdt6ytZHdCDRbPQJn37fR4TqeHszFXiPbxtoN6BvXwABWejqxJKgZZ7WHghvdyvG4u5DiCnmv",
  "key11": "3kmLed3TqsHqhpz1CKe4UY9W1o8EdSiVfJHs5711v7A6c9Rx5agiB3xL3g7y31QUvvPSW42icVvFWeyieksYFdH2",
  "key12": "28cCFWPNhmE5LKfVezUXzjEjRGWr5bdCcAvLuXiJeBuRWjP3zTdPp18eNog84GTaEiu1SHqBSyT7mYKhsUKZ9VJ3",
  "key13": "5cUbdaHbkMgWxkPSVpmQthGXhJrSSKXwSREZwYYHa4LTKTZnoqav3qSgP5v8JaLEbhn9B1FA64nbsEHjLg3EJXVw",
  "key14": "2sC23tsUofVna3HfRymzGHMQUTZ1cg9rdE2hmAZYe4VVK3ro3X2fr3JqQapLy6SrVXAXrr17AjuCFH6Jiauxtk9p",
  "key15": "5iS6agrzFhp27NP4LDYV8W6DNcHQLKFdv99eFLgmBD7G7AQ4dPqLy3N9AS2qEJc66SoV1dGqQt7rMZW2A8mVYGdQ",
  "key16": "5L5MsUBWgpf8dFtWPitoz749HMca9B2Zd4ZZTQtpaEYd1mQ3QEyAivQLBNTLQ9ysEj4V2oGhBa4es2ijJ9KRAEUm",
  "key17": "4Bo3SnACxUDYLRfsMaZvT4uS5ep6E3B6opRENsWxKs7xJsrQeG255TK57MfPaEKoobHBgjF4jfG8CYAUYVTYdTnE",
  "key18": "3NTPEnT6btqvgfGFqWNrBVjr1gPgrbetu86xknf67VC6gXK6CviFMSgKZtRHz8uS9erctEe5kht7HNU3xttqXzAr",
  "key19": "5i7TrGAgGrYrz2feFHGE4A16yjSvAtFUnwuAjEkS43ejDiBxnkxdp7pkDR4jAdEarbtA4RtAneddxsTr2KGJES4j",
  "key20": "3zuoeSaH5aiCvKGnSAuMuhfVy5eDwykSbEkbiw2T5Bc5iGzZpbZW6TjC5bo9MvhkMLqjfwBvhEYuuNeMboXUPKqk",
  "key21": "phqttErcGBF7pvddBaWSs1TYkqRxAX1smugpybrYBp8vWzZgZHVNq9e4L82Hz3MyDFBB7FCMz71ZptgpgRRzx5F",
  "key22": "64FGA73PiLJCXvvyTMqT5b2EF5CEx768gMrQSfyg25fy5BTHUeUjgR4xLWJNp6JXQZj5VjxpWEqGH31AEvZgJdZb",
  "key23": "3PTWKW8bAMVLWdaF5g3UjFADuwnRNHrWVXBQf1YP76Upd37U6z1KPN1iTDVgcXkipAa5kftxXxRmsaCaFxHuWrTS",
  "key24": "3QRc1dAdRzLUNNtJU6rhsJQxLYUvZykmMmENugpmQ3UW4RxSKkzbNDSyf1xf7mJDgv6qPdJP8xEn7UT7w1HuQAX2",
  "key25": "4NiTVCkpRjzYhgQvqw26sNpVfqAGXbCvuinWs8Up43ac6nGJ6hJJYCbcKFnpn5P8J1ZeznQQexg7r8yVAgMT2ATP",
  "key26": "3anPo763tn5v5cEAdWdMEQP5TbQQzPo7T8moK2t9bvGxh6fe1Db7TG5HNpZntUAnBXxguY9E9zBBNzq8KwJLWvod",
  "key27": "3GGRFwkzwGKyiVhx7NzKiB1Aw34PDzUz1WKoewaFYDEnBdmZF48Ft1m8TrP4dTYEZtG9cAuVn89iomCJZJ2c1Unr",
  "key28": "5RNKx4ifKfVBWcfDq1R4GDpwp8VYMfKEtBD3vx1KwW4hunfZi54Wm7YQMnC9wnXpyMhBAiU5pom7MgZ5M3Mc6X7C",
  "key29": "2PbuUJUXq57Z2K8DYduzJTrMPcrLSNtCcHw1UZ3QxqfQuYevsT73KSEGsTMD3gVoVaqG9Vu7Ks32Teaq61rVVwdM",
  "key30": "4MbaWokuBu5XBnCR3UXsMLnqdSbWsKab8577Dxu29HCNp1UZhuUz7TFmtijwE54KU91YJLVtuqsfpeGgUBjvkcgT",
  "key31": "5DxDJA4Ck9PAkAqbZqCV8NU4EBY4s63EpXiadLWaaBY5a1C8ZUMbVNa5jUugW44wQwYXST6xJZzBJgKYdKtVCN5S",
  "key32": "2Mu6ahNkcTYqwEXRPrKpXeCBB1EBJtffeBuyzmo4WJkk5pzoz7eKTAGfo2LScAWtFZoCjL8Bd3nY2QD9hAyy1gMx",
  "key33": "3b59xPprmiUd15c5un5A1ywCGR3PgjAJKLqhNdaicWfCrw4mFGqaTmxFXMEERHKBdAwqCpLAqerX84UY7rDWUYkb",
  "key34": "3KtvRm3kdZ1WmjHbNvgRTyqWQnaEVJgMfjJ49Ud6hn9qZf9tXoS6Uch6uaLQDZBLaLFr9phbAWKur7gBfCSCaydp",
  "key35": "4EpBKWog9cTbfSHSwoC68g9DXtQ5TzGe1Z1GZeoWDtmHp6R2YHjc68z7V6bLozPmsNNWWYfKFBniGKTAUKy6wnDD",
  "key36": "iteE6E9wsRhbMyT4Xb9Ps7FXFNE12n5bxFKHtP61htw36zP2dE5FfVyw5gGvUY7LXVm31upQZChojQ1h1t3ZoX2",
  "key37": "4YiToJ3ten2bEaArJtTv2HBFXGUDTgMDZEGhrt4LjqcGoLatqgjkWaYzAY2QzykTmtho6UjW16vgNpDmzimYbjr3",
  "key38": "3WbGrWhjHLuSnhrF5LMSwAM2caLmgLrJUjkeovY4pB2kUDNSytsqW5kAT8bV3UGiq4dU6bQAmVbV1BY4WSbxk7ph",
  "key39": "3TyV1juKkRuGLLPBVDUSuqqgiHMcpXxMB5kPKLN1SgT9UJbUf3A4RfUHwCM6E57EMxCmrnCC6uibwmukbXr5mDyS",
  "key40": "5sxKwNaz9wAdficzrHysdyh8dHTAjifbf6UMdYJkMJwBGqww6XVDHdurQtQHsLnNJX1hqeLVajvY3Zi58qpYU9ZF",
  "key41": "A3eQceabTpjUW7zYagSWFpwDfXKub5eb6qZ1B3UPRtZ8dL3QiqY2193ZuCSpjt9bk23JZw23mGA2h7KrszY4KS5",
  "key42": "2dKTHo3Q8tP7MMY9MuDFJZy5j7sGABTAi1QA9F1YdyK9GcJ8Xuqg4HAbRtEBSvD92n9dwqLWytZP7zxEcihtX6u5"
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
