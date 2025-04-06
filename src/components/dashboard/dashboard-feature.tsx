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
    "YqCXFwy9A5jjLriE5AgMWt5BbvYTrzyugG5rjejFzRrQw8aP19ue63hhCDnCpiQ5wgzmgrao2Ewpujxwq7iap6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PpNH7r7xQYUUhfM7ed4nvvD8oXb23TjZXiAjREJyjD33XSeo9kvccYr3UtAKSwDaMjPwW47Jr3Kd8JKZDbTzB7t",
  "key1": "2fxu8oBdPLSTjhqGDGoRFY4e8wz1osuEod7yyNWnxPZn7GcYYhNhzjNYhTddAN5YfqYtS3hfYX6X5D3KYpz4iKuG",
  "key2": "NJEdBkc5dBVjTH8YgDZMUG7XnRsVsNT8jkBqYVmLeT2FxuE4GnRVwq3XZJmvwTnygWBmnEcCKsmNtXyUFhc8DaK",
  "key3": "3fDvFGDms4YzV3NnqqCWqDMGBVARCQqnexpKsecQGgnHiXEEDeNvsDTzpivdNsNsQD72XWKkkYDbSBmdtnn8oDSN",
  "key4": "P9UHQNnCbPsChyAR5uoFq9MgTSGJWcTdEEYbwjhPueWdXbD1d33CkCBEE9MVkHcYB4dhhqJm5VaAK3C4oJBX3jR",
  "key5": "2iiZy7pBhynMtjiwcVCx1JpicKiP35jykA5TahfmPwafvDeYSRqFJRPvV9Qrq2RgW5DcvEF6Gg1vzNBBhJrZcMxp",
  "key6": "3UpFJ49gUbdTKcf9g1i24xM9e7QKTFtWsV5EjPaAmXu5L6yCpLZRHvBrYAEgi5NLkjnNJJnFhGGH5SfcK3v6SckS",
  "key7": "wuMm6Z9YjJHMFoiReDkaokA39XRwmmrtWkZXKwDoc8KH7HW2Gzz6DVYy2mnd7ucrAznh3Z2MGyCrqB8Ki5hsMpN",
  "key8": "59a3przH5cmMe37EoB7VBQxX2JVrVKennRMMRz8AV9MwSnjfDLopsGZYJVSLUoCYGWrbBjjviKBQzfzwXd2ai7Pn",
  "key9": "2m5qPMqsP78fJ42UCjEoNFp7cAzJTbTBJG3aRNaEpmTA2VKr7fNeGZMp3QDDtsbSJMiEidYg2wQ6GzZ8FEcu1AdN",
  "key10": "SggXGZh7MgmijcEgxnbGA82Je5wdS7eby4fTeZwBkihUVpggy1mDHz97PhJquEz4cr2mNYx6UCehWTzL1QhqxuA",
  "key11": "5Fa8vAsSMVLp6CCkcKsUWbuQYvNtLh7yTqWHENaV5Nk3N5KHas535oAx9KeDk36VDpaBEtnAhDsyUPYNQhfGXyjA",
  "key12": "4ocfL6BfR6tT2eb9Kz7cy3nosBeoWeCxMZGE5RuHZmMDg2tMwY5nuM6deJUxZfRY6ffoEeBXFvKsDN56UR3mZJLh",
  "key13": "h3QjgnGpujw4W233YtBM4GGnpwYMjzkd4MM8N5kffvANDi2M9Rd9fEgeS2WoUsBh1vExxoUfLKiVPn1Qg5wf2Fm",
  "key14": "3UuCBKBXFYxMVNStP1bQpuA7oAZkCspMFBEAtoJy2vks7jBaHuZ9H8emFmaD7v72m6wqka3wL6rgp5iWn8JZVwGq",
  "key15": "gyxZDVnhJ5RXrpQ8F9UNGxYMuoMqjrUfQRu3nSorj4NjATBkk1UarGFapV2nYtju9B3MHUq3tdhJDwkGxB1CsJ1",
  "key16": "EBTJgMX3J2M6swLCZtrEG6Qeancm4Jf6GBbgeqx4DhKQzNpVqWL8KwWMFHyyrC5yPzNKkee6fMHnukwZ1YDVRpB",
  "key17": "3hWPHRiRmURdMPU5C4Lcnrx2QwJsCV9w7Ue1J8QpXHhsQgXTVSC6MA96bAXmNwzAMXC76B5Gg8by2eg6s6anJLvk",
  "key18": "31aDmpkS6mzLc2B8qC5HH4Azme9WkXTRtvzB95YfVC85vKYjkMuHTtycZNChLT7rHxm9sUB85VVXhXrEAfhR5CtP",
  "key19": "3YYRXCwiqTmDssPCUVfkyhzsuTw74meSBZ2q7jUfxCyffy4RVL8TXeGfxrZYvFftdAKgESJ3Havv51xfnqjo7ucC",
  "key20": "4gTJS55Gs9gdQULJQtPomYEPDRWgoPCc2LbxDjXViKnXvDrdKBXUk4qVP1uQGvVkRMUNma7G2uSZMoHgH8U7zBfN",
  "key21": "2a2FJRweHcueVNax3nBN14tJP3PU1s9sepwcUStWvraEVtM2vUbLw2Qn23Qd5do67hcRJEHbuxQ7D1SjnVHFZT1J",
  "key22": "wAqBePAEQh7ScgG1nbMrjKgwBi9TqjFWkPhENkFGXWq83WddvwmH5KhZypexin69fXgcMqhGPDxdSe1Yzk82QMb",
  "key23": "45zHfrTYWqTWkm7tdvV25QExmGCi1oqkRs5QzBF5HBrrzD66L6DWN1jMReHHucdn2bVPb7G86GSreWrYZgSjcNof",
  "key24": "2f5a2Q4yHYwWmdMrgesRptwQo5jR5G1n2ggWS8hfmvH2xbgoaEDgArdJ5sBMo5krW9cR4uEGkdGAZaLHprc9hpzM",
  "key25": "3UcVKMVq5T28gZgcsVaXdXbkuT3rNUGP3U8idiLTPAw2LvBQ9pbBHzKwvffVQ11gQq5CeWmLDBnjMoUu79ZHAA6g",
  "key26": "4QTCeNoA6ikoTcRifBEqiU2GovqpocqTejggjZpbYR5BuMnELNV217gPeJZYQiYQWYhQgf4cY6H8gmrAhRjp2cCU",
  "key27": "42imtouwEpg7M5ozXyvPvejcFPU7agnbbiqpqBC9rRfyRSbeehzzudAfKcEbizXKNPtKnVGLts4CNt8cseUpkJ68"
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
