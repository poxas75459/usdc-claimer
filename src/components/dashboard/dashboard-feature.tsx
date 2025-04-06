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
    "5NyTHTFgLdj3ZENtzaFmwVDkhmxPq7K8NUnNgseRN9ZDENDkHS4TyBbKexTLX51JRw3oymCdQSf4embFFZ6ZG4sC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NHntpMhvYgMStyqZDBhRnMRik1cCHneVEobb958bEJL7w7zdTfqEvsjNG5aBarGyMnwZvc8whwZEtXHRABbNatH",
  "key1": "4hHwSgV3uN16Pf3eH6P3sLyJYhMshucxm3nxxuw62LUbrRJ39EzNoidQg6uB71uiYgynnRdeMM8ayqgze2W9YnCF",
  "key2": "5Z9J8VkscbFqEFpVDyYoU6WBPze1UffNigoDeex6zePBS2iGbbxFb9XNN9YQRDJtHELwSuWhKhMsgaN4QUVXEM5f",
  "key3": "3LmMTxSrperEfqoK7fMs9H3gnUiL7TQ9BLTetBBsChF3GsRwbUTXBjXrNX1j4Qi6k9kiFBK1jXPWGhQzXjijz6DZ",
  "key4": "5iNFxjBHfTDWHsWPAkPvWgiAeDbDXQRrhVbH7FBc3Z6ASbKkDG69n5QkSui12RwSiQ4cDp592HZpWhejapYQ3DG4",
  "key5": "2oENevMcxbmiEQjxkPK6sApoMkKRX7QV6rUErKXvFoCx8xDeb1LCbAgFnfg6o8ENmaJNBS6xiZQ8Z645Mm6Uhekx",
  "key6": "gtgWWiPB995BXrLXV4XkQLe8toV1USgZMQYfxYSUsHiPdcSNZFpGJS6ZWxpJzQfc7xqkf33at4jxqipmetYYYSP",
  "key7": "2uE3yKHvPXKVKoqSD7uEmbzueQRYwhL5fiD2dQSWmPFPnPxRqgzZUv9HkmrPFhc5cgm6MnpdWVEPsVRmATfiiimm",
  "key8": "4wVXqhYf1tjmxFQksGu8qMA2cz3gM2o4Dhq9kekGcBVRr7qHemz3G2AhCJsBdznRz9N2mstrgUSNZnBw13MkLnpq",
  "key9": "5SnUAm6JtRaTpyBDauQ7v7kqARawTJGoKAmrFvHmiDr7Vr18Zf7FKcfqJbpzGoAmWYTDjEHwAb2fGqBz3sbyuKzd",
  "key10": "4rGdWaDYHbDu6vuhqyWZPctqvzfRtDyuuPUfxJ1ZhrdEsZbaRBx6UzV6YpooLvkiuC4DaePrWQqN2uGQHJ1Ymv3r",
  "key11": "3V4affrExvz4jmcj3ch9iMxyyMX7CEwKHURT64fzaFEiMH3DsPyc5mw8xdnoyWZSCr4HAYbdkVZLYnN5mn8DUoUK",
  "key12": "fCpUX69yDbyQa5xDPXg3qBtL9GvhpoLcDAmQkBGpTCd5MHS6ieqC6y4x7GUDc6iwuWraBnYAuLjZSkF1ofcTjQU",
  "key13": "4w5FGUd78d7pEofyhdNX6g841GpgJYqs12bakWJzEhkXSiYCv6VL65jLsTnpin1owFuFv7Civ1k2JJt1si5KewyZ",
  "key14": "5toFQj2mVjQPfCAC2fG8DNZk5xw2gzD9eUsm8VPff6ATHSHnNntvAUnNBZmwSyngMLbtBe61yEWrmJzUD8Uhdo86",
  "key15": "3URSKdFGPB27seczJirNVb3up2udMCzXGqjGYXW9rWM3BJif3LWoyzLCFwkwdafHbLHDSzVZ5xeMkKJmtauTc2qS",
  "key16": "2R859xuuwX6tXAnrbHZBBwtc949XTQMPfvGx45oBGNt9geAsJ8wYr2SASexAhYtLnu4WDd7BJKre7Z4mpiYm6w5D",
  "key17": "2KoK3ZVcKC8RGLrE9WrYGi9YPbcr1yXnqizqAs3F5cgSy3ujZ7CyrngyANoM2KfkWE5jshQ2DncUT8D7rWXXTzb5",
  "key18": "4Pk1rM2vJJkMbgY248HWc4UXdFjAmngiqNW8PMJRihvhyBQrXxQoxTMmqU1h1npwv3o337NBCbJVvVdUJBfyxzLE",
  "key19": "4QmnsyVcc4jCVGEVGSH8C6oUqThSe4RjZqQjaLRaPWvHLM8FaGWfsZswLQTzhm6KyjoZTJWtC2mNr8Dar8mpKUt5",
  "key20": "3C5rWpCPkTYqM6FKWVxL8x23axkmPFCkLaAfvrNzwho8yrRzZw2LcFpP48e15AFwodd8BjKg1wNWz3o1ooPuhqee",
  "key21": "3GjtZg3LQJxqp6WdspzHVR3hmfhSVT74R5MKmkBfoTcYVa7Kk4rKc5avwpnE4DWQZDMZBAdbbviZHp4Su3CPq2Zc",
  "key22": "S8Sa9Z5Gc6zzTsa9AoRJwnkH2Y1Fa9ZUT9n7o8Y66ZnhyijpkvR6HCTEwsPcgdyiDfnm2JR13iCqhNyCGF99BL2",
  "key23": "36GXQ7adsgbe2VPARMmh6XaNC6HkinWeacScR1oRrgZ5fa7gy5BSR7t79R2hbkEd7XZybuw13GgoErYUG8NRyMhE",
  "key24": "3F7kbWDnACCYoeQmCn5aeSJ8QaH1DKLjxb5jyFF4UGvNbAZLPN4qEwDu9EbhhYtaDG5CUJpjN6TBstynCbMu6jVj",
  "key25": "5JsMTEayYjesNJ6MXWJ38ExCRFAGGiRFRNijkWh22KQ9YvoXSUipx2aAtRNizSQue8LQ4gyA5ioMHNLMRCpeGzg9",
  "key26": "3suLLe8JPtLJvQYmm6LSkb4KCVC6VKfcDBYka95zpBKK63emoKxJNqFb8zdkGmyu6ecNYkNHViVSaCbWocr1TJ6",
  "key27": "4CMQpZrD22jenzeqeHZW3kFJeBHwRjw8KGkjhRiVQpR3aFHMiGMVW86VFDbmkeC6iiNEJQQ3bx7iwvHbHithg4V8",
  "key28": "4noLoUWNoYYRKUoGcfzv3tA9MDL92SnZyBC82iS8i3hRkfzwRT1bkTcVwDg1yXjY9hDnUyZuLVAKmDTKVpnyCpvh",
  "key29": "5Y3GS1fL7MCX7mgZtmzqTkDacknwuJccQ23Tfvtx9YuCeDpC57dTN46rxVqEAQ6YS76WiVBwsiqTe6c8uneykRmk",
  "key30": "5JZbMwJc6znKR5njKxRujTpYWRswAL9zbDawqzwkfVnJRV5nJng66LdqBxHsc2ByfSEST125PMFHJCy1uBMcpjab",
  "key31": "4hegCgUJR6Q2GXME3tYmn8ifSwiRK7EHzbmgCnLzZiEmBgiQgWjgnb9aQYer8kmXMSURuZyfzZiNSUZpowGZpPAg",
  "key32": "55CFyFRC69vCadmZ9o3hK6rjCzDEcR7akiVRwdeDXt3ount3dkzcS2bkKPxNg1MHSHebjgE1nwBbmYHUNYE2oMF3",
  "key33": "5DjtrcNbB2VJ9K5peKeBFhp5xmpcUsdz2ZsthsyJWdtTzAd94uk5jcv5VTP4Zb4UxKwgaPh7zc57nYYDFmdJ9jS4"
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
